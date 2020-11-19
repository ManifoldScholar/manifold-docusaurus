---
id: backup_restore
title: Backup and Restore
sidebar_label: Backup and Restore
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The steps involved with backing up your instance and restoring from backup will vary depending on how you installed Manifold and what operating system you installed it on. The content on this page is meant to get you started. It is not exhaustive, nor have the scripts below been thoroughly tested in different environments.

:::caution
Manifold is open-source software, and you are ultimately responsible for your data. Proceed with caution and make sure you understand what the following scripts do before you run them.
:::

## Backup Manifold

Manifold stores user data in two places: (1) the PostgreSQL database and (2) the file system.

:::note
It is also possible for Manifold to store files in cloud storage (AWS or GCS); however, backing up cloud storage buckets is outside the scope of these instructions.
:::

Backing up a Manifold instance involves backing up files and creating a database dump. The specific commands required to backup a Manifold installation depend on how Manifold was installed. Select your installation type from the options below to see sample commands you can use for backing up your instance.

Each of the backup scripts below will create a tar archive that contains a `dump.sql` file and an `uploads` directory. These outputs can be used as inputs for the restore scripts that are described further below.

:::info
If you downloaded one of our operating system packages for Centos or Ubuntu, follow the “Package Install” instructions. The “Source Install” instructions assumes that services are managed by systemd in an Ubuntu environment.
:::

<Tabs
  groupId="install-type"
  defaultValue="package"
  values={[
    {label: 'Package Install', value: 'package'},
    {label: 'Source Install', value: 'source'}
  ]}>
  <TabItem value="package">

Use this Bash script as a starting point for automating your instance backups. This script will need to be run as root.

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

  </TabItem>
  <TabItem value="source">

Use this Bash script as a starting point for automating your instance backups. This example assumes that your instance is installed at `/home/manifold/deploy/current` and that the files are owned by a `manifold` user.

```bash
#!/bin/bash

# These should be set in the application user's environment.
#RAILS_DB_NAME=
#RAILS_DB_PASS=
#RAILS_DB_USER=

USER_DIR=/home/manifold
BACKUP_DIR=$USER_DIR/backups/`date +"%m-%d-%y"`
BACKUP_STAGING=$BACKUP_DIR/staged
BACKUP_FILE=$BACKUP_DIR/manifold-backup-`date +"%m-%d-%y-%s"`.tar
BACKUP_DB_HOST=localhost
BACKUP_DB_PORT=5432
BACKUP_FILES_ROOT=/home/manifold/deploy/shared/api/public/
PG_URL="postgres://$RAILS_DB_USER:$RAILS_DB_PASS@$BACKUP_DB_HOST:$BACKUP_DB_PORT/$RAILS_DB_NAME"

# Create the staging directory (and parents) as the manifold user.
echo "Creating the staging directory at $BACKUP_STAGING..."
mkdir -p $BACKUP_STAGING

# Dump the database to the staging directory
echo "Creating a database dump..."
pg_dump $PG_URL > $BACKUP_STAGING/dump.sql

# Backup the uploads directory
echo "Creating a tar archive..."
cd $BACKUP_FILES_ROOT
tar -cf $BACKUP_FILE --transform=s/system/uploads/ system/

# Add the SQL dump to the tar archive
echo "Adding the dump to the archive..."
cd $BACKUP_STAGING
tar -rf $BACKUP_FILE dump.sql
cd $BACKUP_DIR

# Clean up the staging directory.
echo "Cleaning the staging dir..."
rm -rf $BACKUP_STAGING

# Output backup path
echo "Backup has been created at $BACKUP_FILE"
```

  </TabItem>
</Tabs>


## Restore a Backup

The following scripts take a single input, which is the path to a tar archive. That archive should include a database dump called `dump.sql` and a directory called `uploads` that includes attachment data. The backup scripts above will produce an archive that conforms to this specification.

Assuming you call the restore script `manifold-restore.sh` and you were in a directory with a backup generated by the backup script above, you would restore with this command:

```bash
./manifold-restore.sh ./restore.sh manifold-backup-11-17-20-1605640139.tar
```

<Tabs
  groupId="install-type"
  defaultValue="package"
  values={[
    {label: 'Package Install', value: 'package'},
    {label: 'Source Install', value: 'source'},
  ]}>
  <TabItem value="package">

This script will need to be run as root.

```bash
#!/bin/bash

RESTORE_DIR=/var/opt/manifold/backups/restore-staging
RESTORE_ARCHIVE_PATH=$1
RESTORE_ARCHIVE_FILE=$(basename $RESTORE_ARCHIVE_PATH)
DB_HOST=/var/opt/manifold/postgresql
DB_PORT=3034
DB_USER=manifold
DB_NAME=manifold_production
BACKUP_FILES_ROOT=/var/opt/manifold/api
TOKEN=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)

echo "Creating the restore staging directory at $RESTORE_DIR..."
su - manifold -c "mkdir -p $RESTORE_DIR"

echo "Extracting the restore archive..."
cp $RESTORE_ARCHIVE_PATH $RESTORE_DIR/
cd $RESTORE_DIR
tar -xf $RESTORE_ARCHIVE_FILE

echo "Checking for an existing directory at $BACKUP_FILES_ROOT/uploads..."
if [ -d $BACKUP_FILES_ROOT/uploads ]
then
    echo "$BACKUP_FILES_ROOT/uploads exists..."
    echo "Moving $BACKUP_FILES_ROOT/uploads to $BACKUP_FILES_ROOT/upload-bak-$TOKEN"
    mv $BACKUP_FILES_ROOT/uploads $BACKUP_FILES_ROOT/uploads-bak-$TOKEN
fi

echo "Restoring uploads dir..."
mv uploads $BACKUP_FILES_ROOT/

echo "Backup existing DB to ~/manifold_production_dump-$TOKEN.sql"
su - manifold -c "/opt/manifold/embedded/bin/pg_dump \
  --user=$DB_USER \
  --port=$DB_PORT \
  --host=$DB_HOST manifold_production > ~/manifold_production_dump-$TOKEN.sql"

echo "Stopping manifold services..."
manifold-ctl stop

echo "Starting postgresql..."
manifold-ctl start postgresql

echo "Dropping existing database..."
DISABLE_DATABASE_ENVIRONMENT_CHECK=1 manifold-api db:drop

echo "Create new database..."
manifold-api db:create

echo "Importing database dump..."
manifold-psql $DB_NAME < dump.sql

echo "Starting services..."
manifold-ctl start

echo "Cleaning up the restore staging directory..."
su - manifold -c "rm -rf $RESTORE_DIR"

echo "Restore complete."
echo "You should reindex the content on your instance with this command:"
echo "  manifold-api manifold:search:reindex"
```

  </TabItem>
  <TabItem value="source">

```bash
#!/bin/bash

# These should be set in the application user's environment.
#RAILS_DB_NAME=
#RAILS_DB_PASS=
#RAILS_DB_USER=

USER_DIR=/home/manifold
CURRENT_DIR=$USER_DIR/deploy/current
RESTORE_DIR=$USER_DIR/backups/restore-staging
RESTORE_ARCHIVE_PATH=$1
RESTORE_ARCHIVE_FILE=$(basename $RESTORE_ARCHIVE_PATH)
BACKUP_DB_HOST=localhost
BACKUP_DB_PORT=5432
BACKUP_FILES_ROOT=/home/manifold/deploy/shared/api/public
PG_URL="postgres://$RAILS_DB_USER:$RAILS_DB_PASS@$BACKUP_DB_HOST:$BACKUP_DB_PORT/$RAILS_DB_NAME"
TOKEN=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)

echo "Creating the restore staging directory at $RESTORE_DIR..."
mkdir -p $RESTORE_DIR

echo "Extracting the restore archive..."
cp $RESTORE_ARCHIVE_PATH $RESTORE_DIR/
cd $RESTORE_DIR
tar -xf $RESTORE_ARCHIVE_FILE

echo "Checking for an existing directory at $BACKUP_FILES_ROOT/system..."
if [ -d $BACKUP_FILES_ROOT/system ]
then
    echo "$BACKUP_FILES_ROOT/system exists..."
    echo "Moving $BACKUP_FILES_ROOT/system to $BACKUP_FILES_ROOT/system-bak-$TOKEN"
    mv $BACKUP_FILES_ROOT/system $BACKUP_FILES_ROOT/system-bak-$TOKEN
fi

echo "Restoring uploads dir to $BACKUP_FILES_ROOT/system..."
mv uploads $BACKUP_FILES_ROOT/system

echo "Backup existing DB to ~/manifold_production_dump-$TOKEN.sql"
pg_dump $PG_URL > ~/manifold_production_dump-$TOKEN.sql

echo "Stopping manifold services..."
sudo systemctl stop manifold

echo "Dropping existing database..."
cd $CURRENT_DIR/api
DISABLE_DATABASE_ENVIRONMENT_CHECK=1 rails db:drop

echo "Create new database..."
cd $CURRENT_DIR/api
rails db:create

echo "Importing database dump..."
cd $RESTORE_DIR
psql $PG_URL < dump.sql

echo "Starting services..."
sudo systemctl start manifold

echo "Cleaning up the restore staging directory..."
rm -rf $RESTORE_DIR

echo "Restore complete."
echo "You should reindex the content on your instance with these commands:"
echo "  cd $CURRENT_DIR/api"
echo "  rails manifold:search:reindex"
```


  </TabItem>
</Tabs>
