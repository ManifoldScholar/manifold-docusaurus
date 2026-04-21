---
id: backup_restore
title: Backup and Restore
sidebar_label: Backup and Restore
---

:::info
These instructions are for Manifold v9 and later. For complete backup and restore scripts for v8 and earlier package
and source installs, see the [legacy backup and restore instructions](/docs/administering/backup_restore_v8).
:::

## Overview

Manifold stores user data in two places: the PostgreSQL database and file storage (either the local filesystem, MinIO,
or an external S3-compatible service). A complete backup includes both the database and uploaded files.

:::caution
Manifold is open-source software, and you are ultimately responsible for your data. We strongly recommend setting up a
regular backup schedule and verifying your backups periodically.
:::

## Backing Up a v8 Instance

If you are preparing to migrate from v8 to v9, you'll need to create a backup of your v8 instance first. The backup
must be a tar archive containing a `dump.sql` file and an `uploads` directory at the root. This is the standard layout
produced by the v8 backup scripts.

If you installed Manifold from one of our OS packages, use the following script as a starting point. It must be run as
root.

```bash
#!/bin/bash

# Define directories
BACKUP_DIR=/var/opt/manifold/backups/`date +"%m-%d-%y"`
BACKUP_STAGING=$BACKUP_DIR/staged
BACKUP_FILE=$BACKUP_DIR/manifold-backup-`date +"%m-%d-%y-%s"`.tar
BACKUP_DB_HOST=/var/opt/manifold/postgresql
BACKUP_DB_PORT=3034
BACKUP_DB_USER=manifold
BACKUP_FILES_ROOT=/var/opt/manifold/api

# Create the staging directory (and parents) as the manifold user.
su - manifold -c "mkdir -p $BACKUP_STAGING"

# Dump the database to the staging directory
su - manifold -c "/opt/manifold/embedded/bin/pg_dump \
  --user=$BACKUP_DB_USER \
  --port=$BACKUP_DB_PORT \
  --host=$BACKUP_DB_HOST manifold_production > $BACKUP_STAGING/dump.sql"

# Backup the uploads directory
cd $BACKUP_FILES_ROOT
tar -cvf $BACKUP_FILE uploads

# Add the SQL dump to the tar archive
cd $BACKUP_STAGING
tar -rvf $BACKUP_FILE dump.sql
cd $BACKUP_DIR

# Clean up the staging directory.
su - manifold -c "rm -rf $BACKUP_STAGING"

# Output backup path
echo "Backup has been created at $BACKUP_FILE"
```

Once you have the tar archive, you can import it into a v9 instance using the `bin/deploy import` command described
below. For source install backup scripts, see the
[legacy backup and restore instructions](/docs/administering/backup_restore_v8).

## Backing Up a v9 Instance

### Database

How you back up your database depends on whether you're using a local PostgreSQL container or an external managed
database.

**Local database** — dump the database directly from the container:

```shell
ssh root@your-server \
  "docker exec manifold-production-db pg_dump -U manifold manifold_production" > backup.sql
```

Replace `production` with your destination name if different.

**External database** — use your provider's backup tooling (e.g. automated snapshots on AWS RDS or DigitalOcean
Managed PostgreSQL), or run `pg_dump` against your managed host directly.

### Uploaded Files

How you back up uploaded files depends on your storage backend.

**Local storage** — files are stored in a Docker volume on the server. You can archive them with:

```shell
ssh root@your-server \
  "docker run --rm -v production-uploads:/data alpine tar cf - -C /data ." > uploads.tar
```

**MinIO storage** — files are stored in the MinIO accessory container's data directory on the server. You can archive
the data directory directly or use your preferred S3-compatible tool to sync the bucket to a local directory.

**External S3 storage** — use your provider's backup tools to copy your bucket contents to a safe location.

## Restoring a v9 Instance

### Importing a v8 Backup

The deploy CLI includes an import command that handles the entire migration from a v8 backup archive into a configured
v9 destination:

```shell
bin/deploy import -d production ./manifold-backup-YYYY-MM-DD.tar
```

The tar archive must contain `dump.sql` and an `uploads/` directory at the root (the standard v8 backup layout). The
import command will upload and extract the archive on the server, stop the application containers, drop and recreate the
databases, load the SQL dump, replace uploaded files in whatever storage backend you've configured, and then restart the
application. On startup, Rails automatically runs pending migrations and upgrade tasks to bring the data up to date with
the v9 codebase.

:::caution
This replaces all database and file data for the destination. You will be prompted to confirm before anything
destructive runs.
:::

### Restoring a v9 Database Backup

To restore a database dump into a running v9 instance with a local database:

```shell
ssh root@your-server "docker exec -i manifold-production-db psql -U manifold manifold_production" < backup.sql
```

For an external database, use `psql` or your provider's restore tooling to load the dump.

### Restoring Uploaded Files

To restore uploaded files to a local storage volume:

```shell
cat uploads.tar | ssh root@your-server \
  "docker run --rm -i -v production-uploads:/data alpine tar xf - -C /data"
```

For MinIO or external S3, use your preferred S3-compatible tool or your provider's restore tooling to sync the files
back to the appropriate bucket.

## More Information

For complete documentation on the import command and other operational tasks, see the
[README in the deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example).
