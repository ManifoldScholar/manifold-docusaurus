---
id: updating_instructions
title: Updating Instructions
sidebar_label: Updating Instructions
---

## Overview

There are a number of steps involved in updating Manifold from one version to another, and the steps vary depending on how you installed Manifold. Be sure to consult the appropriate section below based on your installation type.

### Database Migrations

New versions of Manifold will often include changes to the structure of the PostgreSQL database. These changes are called "migrations," and we leverage the Rails migration subsystem for managing these changes. Manifold's API (a Rails application) is the only component that is able to access the database directly, and it is responsible for running migrations. See below for specific instructions on how to view the current migration state and run migrations in your environment.

### System Upgrades

There are some data transformations that cannot be performed as database migrations. These transformations are handled in the API by the `SystemUpgrade` service, which is exposed via a Rake task in the API application.

## From OS Packages





## From Docker Images

## From Source