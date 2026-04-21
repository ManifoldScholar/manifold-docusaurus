---
id: managing_services
title: Managing Services
sidebar_label: Managing Services
---

:::info
These instructions are for Manifold v9 and later. If you are running Manifold v8 or earlier, see the [legacy managing services instructions](/docs/administering/managing_services_v8).
:::

## Service Overview

Manifold v9 runs as a set of Docker containers orchestrated by [Kamal 2](https://kamal-deploy.org/). Each destination
(e.g. `production`) runs the following containers:

| Container | Role |
|---|---|
| `manifold-web` | Rails API server |
| `manifold-worker` | Background job processor (GoodJob) |
| `manifold-client` | Client / SSR frontend |
| `manifold-db` | PostgreSQL database (if using a local database) |
| `manifold-storage` | MinIO S3-compatible object store (if using MinIO storage) |

All containers are connected over a shared Docker network. kamal-proxy sits in front of the application containers,
terminates TLS, and routes requests by path: `/api/*` requests go to the API, and all other requests go to the client.

## Checking Status

Use the deploy CLI or Kamal directly to check on your services:

```shell
bin/deploy status -d production
```

Or for more detail:

```shell
kamal app details -d production
kamal accessory details client -d production
```

## Viewing Logs

Tail logs for any service using the deploy CLI:

```shell
bin/deploy logs -d production api
bin/deploy logs -d production client
bin/deploy logs -d production worker
```

Or use Kamal's built-in aliases:

```shell
kamal logs-api -d production
kamal logs-client -d production
kamal logs-worker -d production
```

## Restarting Services

To redeploy the API and worker (zero-downtime):

```shell
kamal deploy -d production
```

The post-deploy hook automatically restarts the client accessory. To restart the client manually:

```shell
kamal accessory reboot client -d production
```

To restart the database accessory (local database only):

```shell
kamal accessory reboot db -d production
```

## Running Commands

To open a Rails console:

```shell
kamal console -d production
```

To open a shell on the API container:

```shell
kamal shell -d production
```

To run a one-off command:

```shell
kamal app exec -d production -r web "bin/rails runner 'puts Manifold::VERSION'"
```

## More Information

For complete documentation on all available commands, environment variables, and troubleshooting, see the
[README in the deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example).
