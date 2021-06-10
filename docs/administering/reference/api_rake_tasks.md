---
id: api_rake_tasks
title: API Rake Tasks
sidebar_label: API Rake Tasks
---

The Manifold API application is a Rails application and, as such, it includes a number of Rake tasks. In a packge environment, you run these tasks with `manifold-api task_name`. If Manifold has been deployed from source, you can run Rake tasks with `rake task_name` or `rails task_name` from the API directory. In addition to [standard Rails rake tasks and command line interfaces](https://guides.rubyonrails.org/v4.2/command_line.html), Manifold includes a number of custom tasks:

```bash
rake manifold:attachments:replace
rake manifold:cache:prime
rake manifold:development:seed
rake manifold:import:projects
rake manifold:import:texts
rake manifold:job:queue_fetch_all_tweets
rake manifold:project:fetch_tweets
rake manifold:project:import
rake manifold:project:import:drive:resources
rake manifold:project:ingest
rake manifold:search:reindex
rake manifold:search:reindex:annotations
rake manifold:search:reindex:events
rake manifold:search:reindex:makers
rake manifold:search:reindex:projects
rake manifold:search:reindex:resource_collections
rake manifold:search:reindex:resources
rake manifold:search:reindex:subjects
rake manifold:search:reindex:tags
rake manifold:search:reindex:text_sections
rake manifold:search:reindex:texts
rake manifold:search:reindex:users
rake manifold:settings:abort_without_google_service_key
rake manifold:settings:update_from_env
rake manifold:thumbnails:regenerate
rake manifold:thumbnails:regenerate:maker
rake manifold:thumbnails:regenerate:project
rake manifold:thumbnails:regenerate:resource
rake manifold:thumbnails:regenerate:resourcecollection
rake manifold:thumbnails:regenerate:user
rake manifold:upgrade
rake manifold:user:create
rake manifold:user:create:admin
```

These tasks are mainly used for debugging purposes and maintenance tasks. However, they can also be helpful for automating some tasks on a Manifold instance.
