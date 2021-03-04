---
id: storage
title: Storage
sidebar_label: Storage
---

## Types of Storage

Manifold is careful to separate code, configuration, and user content to simplify upgrades, deployment, and a decoupled hosting environments. When we talk about storage, we're primarily concerned about identifying the places where Manifold stores user content that needs to persist between upgrades.

Manifold stores four primary kinds of content: 1) database content, 2) file attachments, 3) cached content, and 4) indexed content.

### Database Content

Most content that is entered into Manifold is stored in the database. Each Manifold instance is backed by a PostgreSQL database. Manifold fully manages the state of its database. When you upgrade to a new version of Manifold, any new database migrations are run as part of that upgrade process and those migrations are responsible for updating the state of the database. Interfacing directly with a PostgreSQL database is outside of the scope of this documentation.

:::warning
There are very few reasons, besides backup, to directly access Manifold's database. Doing so can easily lead to data in an unstable state. Instead, read and write Manifold data using its REST API, it's command line interface, or the API's Rails console.
:::

#### Database Access with a Package Install

If Manifold was installed using our package installers, we expose a convenience wrapper at /usr/bin/manifold-psql. The default database name is `manifold_production`. Use the following command to access the PostgreSQL database via the command line client:

```shell
root@host:/$ manifold-psql manifold_production
psql (9.6.18)
Type "help" for help.

manifold_production=# \dt
                      List of relations
 Schema |              Name               | Type  |  Owner
--------+---------------------------------+-------+----------
 public | action_callouts                 | table | manifold
 public | annotations                     | table | manifold
 public | ar_internal_metadata            | table | manifold
 public | cached_external_source_links    | table | manifold
 public | cached_external_sources         | table | manifold
 public | categories                      | table | manifold
 public | collaborators                   | table | manifold
 public | collection_projects             | table | manifold
 public | collection_resources            | table | manifold
 [truncated]
 ```

### File Attachments

Any field in the Manifold frontend or backend that accepts a file attachment will save that attachment in a file storage backend. Starting with Manifold v6, it is possible to store attachments in the local filesystem, AWS S3, or Google Cloud Storage. It's also possible, of course, to configure a server to mount a remote volume via NFS or a similar service, although doing that is not part of our documentation's scope.

Manifold relies on [Shrine](https://github.com/shrinerb/shrine) for handling file attachments. Starting with V6, Manifold includes three required Shrine storage backends and one optional storage backend. The `tus` storage is required, and is used by the TUS server to store uploaded files before they are promoted to permanent persistence. The `cache` storage is where files that are uploaded directly are stored prior to being promoted. Finally, the `primary` storage is long-term storage where attachments are stored once the record is valid and saved. The last storage is the `mirror` storage. It is optional and can be used to mirror files that are persisted in the primary storage. By default, the required storages map to the following paths:

- Primary: api/public/system
- Tus: api/data
- Cache: api/public/system/cache

#### Using Local Filesystem

In an installation from source, Manifold will store files in `api/data` and `api/public/system`. These paths are relative to the root of the Manifold source. If Manifold was installed from one of our packages, it is installed into `/opt/manifold`, and the root directory for Manifold's source code is `/opt/manifold/embedded/src`. If you look, you'll see that with our package install, we symlink these two directories to directories in `/var/opt/manifold`.

```shell
/opt/manifold/embedded/src/api/data -> /var/opt/manifold/api/data
/opt/manifold/embedded/src/api/public/system -> /var/opt/manifold/api/uploads
```

The `data` directory is used by our TUS upload server to store files as they're being uploaded before they are promoted to long-term storage. Generally speaking, this `data` directory can be treated as temporary storage. Once a record is saved and the attachment is persisted, it is moved into `public/system`.

:::note
To backup user content when Manifold has been installed from a package, you should only need to generate a database dump and an archive of /var/opt/manifold/api/uploads.
:::

If you install Manifold from source, you should be sure to symlink these directories to a location that's easily backed up and can persist between upgrades. When we deploy Manifold from source, which we often do using Capistrano, we typically symlink `api/data` and `api/public/system` to shared storage.

## Using Google Cloud Storage (GCS)

:::info
Storing uploads in cloud storage backends is only possible in Manifold v6 and subsequent versions.
:::

While Manifold will store files in the file system by default, it is not possible to configure Manifold to store files in a cloud storage backend. To store files in GCS, you must configure Manifold using environment variables. We recommend creating three distinct buckets, one for each storage described above (primary, tus, and cache). See [setting environment variables](./reference/environment_variables#package-install) for information on how to specify environment variables in a package install.

For Manifold to use GCS successfully, you will need to create a google cloud service account and assign it a "storage admin" role in IAM. When you create the account, you will be given a .json key file. You can reference that keyfile in an environment variable or upload it in Manifold's backend settings interface to correctly configure the instance's Google services credentials.

When you make the storage buckets, be sure to grant read access to `allUsers` on the primary bucket. The cache bucket and the tus bucket do not need allUser read access. We recommend setting a lifecycle policy on the cache bucket that deletes files after 7 days. Finally, set the following environment variables:

```
MANIFOLD_SETTING_CONFIG_GOOGLE_SERVICE="/abs/path/to/service/account/credentials.json"
MANIFOLD_SETTINGS_STORAGE_PRIMARY=GCS
MANIFOLD_SETTINGS_STORAGE_PRIMARY_BUCKET="manifold-primary"
MANIFOLD_SETTINGS_STORAGE_CACHE_BUCKET="manifold--cache"
MANIFOLD_SETTINGS_STORAGE_TUS_BUCKET="manifold-tus"
```

Replace the bucket names with the names you chose for your bucket. Be sure to restart Manifold for these changes to take effect. If everything works as expected, you should see files added to your buckets when you add an attachment (for example, by setting the avatar for a project) in the backend.

## Using AWS

:::note
This section is still a work in progress. Check back soon for instructions on configuring AWS S3 storage for Manifold.
:::
