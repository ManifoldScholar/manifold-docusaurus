---
id: managing_services
title: Managing Services
sidebar_label: Managing Services
---

## Service Overview

Manifold is composed of a handful of services, with two services, the client and the API, doing most of the work. The client application is a Javascript application that is delivered to the user’s browser, and that also runs on the server as a Node application. All data in Manifold is delivered to the client through Manifold’s API service. The API service is a Ruby on Rails application that runs on the server. API request paths typically begin with /api/v1. Just about all other requests are handled by the client application.

The API relies on number of services. It stores data in a PostgreSQL database. It uses Redis for queuing and caching. Content stored in Manifold is added to an ElasticSearch index for full-text search. There are four services running as part of the API. The first is the API itself, which runs on Puma, a HTTP server for Ruby/Rack applications. The main API application service is referred to inconsistently in the package install as "api" or"puma". The second is called "cable," and it listens to the client application for websocket connections, which are mainly used during ingestion. The third API service is Sidekiq, which is the background job processor. The fourth API service is called "clockwork" and it provides cron-like scheduled task functionality for Manifold.

Services are managed differently depending on how Manifold was installed. Be sure to consult the appropriate section for your installation.

## For Package Installs

In the context of a [package install](./installation#package-install), services are managed using the `manifold-ctl` command line tool. This tool must be executed as root or usng `sudo`.

Use the `manifold-ctl status` command to see the state of each service:

```shell
user@host:~$ sudo manifold-ctl status
run: cable: (pid 917) 415s; run: log: (pid 871) 415s
run: client: (pid 915) 415s; run: log: (pid 866) 415s
run: clockwork: (pid 919) 415s; run: log: (pid 867) 415s
run: elasticsearch: (pid 991) 415s; run: log: (pid 869) 415s
run: logrotate: (pid 916) 415s; run: log: (pid 865) 415s
run: nginx: (pid 914) 415s; run: log: (pid 864) 415s
run: postgresql: (pid 918) 415s; run: log: (pid 868) 415s
run: puma: (pid 992) 415s; run: log: (pid 870) 415s
run: redis: (pid 990) 415s; run: log: (pid 872) 415s
run: sidekiq: (pid 1083) 415s; run: log: (pid 873) 415s
```

### Restarting Services

To restart a service, enter a command in the format of `manifold-ctl restart service_name`.

```shell
user@host:~$ sudo manifold-ctl restart nginx
ok: run: nginx: (pid 2008) 0s
```
To stop a service, enter a command in the format of `manifold-ctl stop service_name`.

```shell
user@host:~$ sudo manifold-ctl stop nginx
ok: down: nginx: 1s, normally up
```

To start a service, enter a command in the format of `manifold-ctl start service_name`.

```shell
user@host:~$ sudo manifold-ctl start nginx
ok: run: nginx: (pid 2025) 0s
```

### Troubleshooting Services

If a service fails to start successfully, troubleshoot by consulting the service logs. The logs for each service are located in `/var/log/manifold`. There are variations around how each service logs. For example, the API log will be at `/var/log/manifold/production.log`, while the client application log will be at `/var/log/manifold/client/current`.

We also provide the ability to tail service logs using the `manifold-ctl tail` command.

```shell
user@host:/# sudo manifold-ctl tail client
==> /var/log/manifold/client/state <==

==> /var/log/manifold/client/current <==
2021-03-01_13:56:51.71858 ✊  SSR server is listening on a socket at /var/opt/manifold/client/sockets/client.sock.
```

### Commands

Running `manifold-ctl help` will return the full list of available server management commands:

```
Service Management Commands:
  graceful-kill
    Attempt a graceful stop, then SIGKILL the entire process group.
  hup
    Send the services a HUP.
  int
    Send the services an INT.
  kill
    Send the services a KILL.
  once
    Start the services if they are down. Do not restart them if they stop.
  restart
    Stop the services if they are running, then start them again.
  service-list
    List all the services (enabled services appear with a *.)
  start
    Start services if they are down, and restart them if they stop.
  status
    Show the status of all the services.
  stop
    Stop the services, and do not restart them.
  tail
    Watch the service logs of all enabled services.
  term
    Send the services a TERM.
  usr1
    Send the services a USR1.
  usr2
    Send the services a USR2.
```

## For Docker Installs

When Manifold is run as Docker containers, each container represents a single service. Our docker-compose file includes the following containers:

* postgres
* elasticsearch
* redis
* api_cable
* api_clockwork
* api_rails
* api_sidekiq
* client
* proxy

We used environment variables to tell each service how to locate other services on the network. These variables are described in more detail on the [Environmenet Variables](./reference/environment_variables) page in our documentation. Instructions on managing Docker containers is outside of our documentation's scope.

To troubleshoot services, start by monitoring the services's output using docker-compose's `log` command:

```shell
docker-compose logs -f
```

## For Source Installs

:::note
This section is still a work in progress. Check back soon for instructions on configuring Manifold services with installation from source.
:::

