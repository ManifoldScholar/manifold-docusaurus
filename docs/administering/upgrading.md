---
id: upgrading
title: Upgrading
sidebar_label: Upgrading
---

## Overview

There are a number of steps involved in updating Manifold from one version to another, and the steps vary depending on how you installed Manifold. Be sure to consult the appropriate section below based on your installation type.

### Database Migrations

New versions of Manifold will often include changes to the structure of the PostgreSQL database. These changes are called "migrations," and we leverage the Rails migration subsystem for managing these changes. Manifold's API (a Rails application) is the only component that is able to access the database directly, and it is responsible for running migrations. See below for specific instructions on how to view the current migration state and run migrations in your environment.

### System Upgrades

There are some data transformations that cannot be performed as database migrations. These transformations are handled in the API by the `SystemUpgrade` service, which is exposed via a Rake task in the API application.

## Upgrade Instructions

Follow the upgrade instructions that correspond to the type of Manifold installation you have.

:::caution
* Before upgrading, be sure to backup your installation by following our [backup instructions](/manifold-docusaurus/docs/administering/backup_restore).
* Please also consult the [release notes](/manifold-docusaurus/docs/administering/release_notes/v6x) for the version you're installing, in case there are manual upgrade steps that must be taken.
* When a new version of Manifold is published, we test the upgrade process from the previous version. We cannot guarantee that upgrading across multiple major versions will work correctly, so always upgrade to the next major version.
:::

### For a Package install

To upgrade to a newer Manifold Omnibus package, begin by downloading and installing the package to your server. To do this, follow steps #1 and #2 of the  [package install instructions](/manifold-docusaurus/docs/administering/installation#package-install) for your operating system.

:::tip
To determine what version is installed, run this command on the host:
```
cat /opt/manifold/embedded/src/MANIFOLD_VERSION
```
:::

After you've installed the package, you should stop all services and reconfigure. Stop all Manifold services with `manifold-ctl stop`. Then run `manifold-ctl reconfigure` to ensure that all configuration is current. Once that’s complete, you can restart the services with `manifold-ctl start`.

```
/usr/local/bin/manifold-ctl stop
/usr/local/bin/manifold-ctl reconfigure
/usr/local/bin/manifold-ctl start
```

Once this process is complete, visit the fully qualified domain name in your browser. Depending on the hosting environment, restarting Manifold can take a minute or two, so please be patient.

### For a Docker install

:::note
This section is still a work in progress. Check back soon for step-by-step instruction on managing upgrades in a Docker environment.
:::

