---
id: storage
title: Storage
sidebar_label: Storage
---

:::info
These instructions are for Manifold v9 and later. If you are running Manifold v8 or earlier, see the [legacy storage instructions](/docs/administering/storage_v8).
:::

## Overview

Manifold stores two kinds of persistent data: the PostgreSQL database and uploaded file attachments (images, texts,
resources, etc.). The database is covered on the [backup and restore](/docs/administering/backup_restore) page. This
page focuses on file storage.

Manifold uses [Shrine](https://github.com/shrinerb/shrine) for handling file attachments. Shrine organizes files into
three storage areas:

- **Primary** — long-term storage where attachments live once a record is saved
- **Cache** — temporary storage for files uploaded directly, before they are promoted to primary
- **Tus** — temporary storage used by the TUS upload server for resumable uploads

When you run `bin/deploy configure` in the
[deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example), the wizard prompts you to
choose a storage backend. There are three options: local filesystem, MinIO, or an external S3-compatible service.

## Local Filesystem

This is the default and simplest option. Uploaded files are stored in a Docker volume on the server. The API serves
files directly via `RAILS_SERVE_STATIC_FILES`, and the client proxies `/system` requests to the API. No additional
containers or services are required.

Local storage is a good choice for smaller instances or when you want to keep the deployment as simple as possible. The
tradeoff is that your files live on a single server, so you'll want to make sure you have a backup strategy in place.

## MinIO (Self-Hosted S3-Compatible Storage)

[MinIO](https://min.io/) is an S3-compatible object storage server that runs as an additional Docker container alongside
your Manifold services. This option gives you the durability and flexibility of object storage without depending on an
external cloud provider.

When you select MinIO during configuration, the wizard generates a MinIO accessory container and configures Manifold to
store files in it. kamal-proxy routes asset requests to the MinIO container, so uploaded files are served without going
through the API. The relevant environment variables are set automatically:

| Variable | Purpose |
|---|---|
| `MANIFOLD_SETTINGS_STORAGE_PRIMARY` | Set to `s3` |
| `S3_ENDPOINT` | Internal MinIO URL on the Docker network |
| `S3_FORCE_PATH_STYLE` | Set to `true` (required for MinIO) |
| `S3_REGION` | Defaults to `us-east-1` |
| `UPLOAD_BUCKET` | The MinIO bucket name |
| `S3_ACCESS_KEY_ID` | Derived from `MINIO_ROOT_USER` |
| `S3_SECRET_ACCESS_KEY` | Derived from `MINIO_ROOT_PASSWORD` |

## External S3-Compatible Storage

If you prefer to use a managed object storage service — such as AWS S3, DigitalOcean Spaces, or Cloudflare R2 —
select the `s3` option during configuration. No additional containers are deployed. The wizard will prompt you for
your endpoint, region, bucket name, and access credentials.

The following environment variables are configured:

| Variable | Purpose |
|---|---|
| `MANIFOLD_SETTINGS_STORAGE_PRIMARY` | Set to `s3` |
| `S3_ENDPOINT` | Your provider's S3 endpoint URL |
| `S3_FORCE_PATH_STYLE` | `true` for most providers, `false` for AWS S3 |
| `S3_REGION` | Your bucket's region |
| `UPLOAD_BUCKET` | Your bucket name |
| `S3_ACCESS_KEY_ID` | Your access key |
| `S3_SECRET_ACCESS_KEY` | Your secret key |

With external S3, assets are served directly from your provider's endpoint, so there's no additional proxying through
Manifold.

:::caution
Make sure your S3 credentials have `s3:GetObject` and `s3:PutObject` permissions on the bucket. If assets return 404
errors after deploying, double-check your `S3_ENDPOINT`, `UPLOAD_BUCKET`, and `S3_REGION` values in your destination
configuration file.
:::

## Changing Storage Backends

Manifold supports a mirror storage backend through Shrine's mirroring plugin. This makes it possible to migrate files
from one storage backend to another without downtime. The process works as follows:

1. Configure the new storage backend as the mirror by setting the `MANIFOLD_SETTINGS_STORAGE_MIRROR` environment
   variable to the desired backend type (e.g. `s3`) along with the corresponding credentials and bucket configuration.
   Redeploy so Manifold picks up the new settings.
2. From this point forward, any new uploads will be written to both the primary and mirror backends automatically.
3. To migrate existing files, open a Rails console and run `Storage::Migrate.migrate_store_to_mirror`. This iterates
   through all models with attachments and copies their files (including derivatives) to the mirror backend.
4. Once the migration is complete, swap the backends: set `MANIFOLD_SETTINGS_STORAGE_PRIMARY` to the new backend and
   remove the mirror configuration. Redeploy to finalize the switch.

## More Information

For full details on storage configuration, including all available environment variables and troubleshooting tips, see
the [README in the deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example).
