---
id: upgrading
title: Upgrading
sidebar_label: Upgrading
---

:::info
These instructions are for Manifold v9 and later. If you are upgrading a Manifold v8 or earlier installation, see the [legacy upgrade instructions](/docs/administering/upgrading_v8).
:::

## Overview

Starting with v9, Manifold is deployed using Docker containers orchestrated by
[Kamal 2](https://kamal-deploy.org/). Upgrades are handled by updating the Manifold source code in the deploy template
repository and redeploying. Database migrations and system upgrade tasks run automatically when the API container
starts, so no separate migration step is needed.

## Routine Upgrades

To update to a newer version of Manifold, pull the latest source and redeploy:

```shell
cd manifold
git pull origin main
cd ..
git add manifold
git commit -m "Update Manifold to $(git -C manifold rev-parse --short HEAD)"
kamal deploy -d production
```

To pin to a specific release tag:

```shell
cd manifold
git fetch --tags
git checkout v9.0.0
cd ..
git add manifold
git commit -m "Pin Manifold to v9.0.0"
kamal deploy -d production
```

Kamal performs a zero-downtime deploy of the API and worker containers. The post-deploy hook automatically restarts the
client so it picks up the latest image.

## Upgrading from v8 to v9

If you are migrating from a v8 (or earlier) package-based installation to v9, please see the
[Upgrading from v8 to v9](/docs/administering/release_notes/v9x#upgrading-from-v8-to-v9) section in the v9 release
notes.

## More Information

For complete documentation on deployments, backups, troubleshooting, and other operational tasks, see the
[README in the deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example).
