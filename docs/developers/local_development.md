---
id: local_development
title: Developing Locally
sidebar_label: Developing Locally
---

:::info
These instructions are for Manifold v9 and later. If you are working with Manifold v8 or earlier, see the
[legacy local development instructions](/docs/developers/local_development_legacy).
:::

## Overview

Manifold uses Docker Compose for local development. All services — the API, client, background worker, PostgreSQL, and
MinIO (S3-compatible storage) — run in containers, so the only prerequisite on your machine is Docker.

## Getting Started

### 1. Clone the Repository

```shell
git clone https://github.com/ManifoldScholar/manifold.git
cd manifold
```

### 2. Start All Services

```shell
docker compose up
```

The first time you run this, Docker will build the API and client images, install dependencies, create the database,
run migrations, and seed initial data. This takes a few minutes. Subsequent starts are much faster.

Once everything is running, the following services are available:

| Service | URL |
|---|---|
| Client (frontend) | http://localhost:13100 |
| API | http://localhost:13110 |
| GoodJob dashboard | http://localhost:13110/api/good_job |
| MinIO console | http://localhost:13116 |

### 3. Create an Admin User

```shell
./api/bin/run bin/rake "manifold:user:create:admin[email@example.com,First,Last]"
```

You'll be prompted for a password. Once created, visit http://localhost:13100 and log in.

## Services

Docker Compose starts the following containers:

| Container | Role |
|---|---|
| `postgres` | PostgreSQL database |
| `migrations` | Runs database setup on startup, then exits |
| `web` | Rails API server (Puma) |
| `worker` | Background job processor (GoodJob) |
| `client` | Node.js client with Webpack dev server and SSR |
| `minio` | S3-compatible object storage |
| `minio-client` | Initializes the MinIO storage bucket, then exits |
| `spec` | Idle container for running the test suite |

## Common Tasks

### Accessing a Rails Console

```shell
./api/bin/run bundle exec rails c
```

### Running API Tests

```shell
docker compose exec spec bin/rspec
```

To run a specific test file or directory:

```shell
docker compose exec spec bin/rspec spec/models/user_spec.rb
```

### Opening a Shell in a Container

```shell
./api/bin/shell
./client/bin/shell
```

### Viewing Logs

Docker Compose streams all container logs to your terminal by default. To tail logs for a specific service:

```shell
docker compose logs -f web
docker compose logs -f client
docker compose logs -f worker
```

### Stopping Services

Press `Ctrl+C` if running in the foreground, or:

```shell
docker compose down
```

## Running the Client Locally

If you're doing frontend development and want a faster feedback loop, you can run the client outside Docker while
keeping the backend services in containers.

Start the backend services without the client container:

```shell
docker compose up -d --scale client=0
```

Then start the client locally:

```shell
cp docker/client/client.env .env
cd client
corepack enable
yarn
yarn watch
```

The client will be available at http://localhost:13100 and will communicate with the API at http://localhost:13110.

## Hot Reloading

Both the API and client support hot reloading during development. Changes to files in the `client` directory are picked
up by Webpack and will trigger a rebuild. Changes to API files are picked up by Rails automatically. Any changes you
make to a client component will cause it to be re-rendered in your browser without a full page refresh.
