---
id: installation
title: Installation
sidebar_label: Installation
---

:::info
These instructions are for Manifold v9 and later. If you are installing Manifold v8 or earlier, see the [legacy installation instructions](/docs/administering/installation_v8).
:::

## Overview

Starting with v9, Manifold is deployed using Docker containers orchestrated by [Kamal 2](https://kamal-deploy.org/).
We provide a [deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example) that includes
everything you need to configure and deploy Manifold to a server. The repository contains a git submodule pointing to
the Manifold source code, scripts for generating Kamal configuration, and hooks that handle building Docker images and
coordinating deploys.

## Prerequisites

Before you begin, make sure you have the following:

- **A server** running a supported Linux distribution (Ubuntu 22.04+ recommended) with at least 2 vCPUs, 4 GB of RAM
  (8 GB recommended), and 40 GB of SSD storage. The server needs SSH access (as root or a user with Docker permissions)
  and ports 80 and 443 open to the internet.
- **A domain name** (optional but recommended) with a DNS A record pointing to your server's IP address. Without a
  domain, the server is accessible via its IP address with SSL disabled.
- **Ruby** (3.0 or newer) and **Bundler** installed on your local machine.
- **Docker** installed on your local machine.

## Installation

Clone the deploy template repository, install dependencies, and run the interactive configuration wizard:

```shell
git clone --recurse-submodules https://github.com/ManifoldScholar/manifold-deploy-example.git
cd manifold-deploy-example
bundle install
bin/deploy configure
```

The wizard will prompt you for your server IP, domain name, server architecture, and your preferred database and
storage options. It generates your deployment configuration and secrets files.

Once configured, deploy Manifold to your server:

```shell
kamal setup -d production
```

This installs Docker on your server (if needed), builds the API and client images, deploys all containers, creates the
database, runs migrations, and seeds initial data.

## Create an Admin User

After deploying, create your first admin user:

```shell
bin/deploy admin -d production
```

You'll be prompted for an email, first name, and last name. A temporary password will be assigned automatically. Visit
your domain and log in with these credentials.

## Next Steps

For complete documentation — including storage and database options, routine deployments, updating Manifold, importing
v8 backups, and troubleshooting — see the
[README in the deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example).
