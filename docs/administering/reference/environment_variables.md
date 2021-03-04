---
id: environment_variables
title: Environment Variables
sidebar_label: Environment Variables
---

## Setting Environment Variables

Manifold uses Environment variables to orchestrate and configure its various services.

### Package Install

Environment variables for the Manifold API and Client are stored in `/var/opt/manifold/etc/`. Do not edit these files directly, as they are generated anew each time you run `manifold-ctl reconfigure`. Instead, edit the master configuration file at `etc/manifold/manifold.rb`. To inject environment variables for the API, expose your environment variables as a hash at `manifold_api['env']`. Remember, this file is a Ruby file and should be valid Ruby syntax.

```ruby
#### Add custom environment to Manifold API
manifold_api['env'] = {
  "FOO" => "bar"
}
```

As always, once you've updated this file, run `sudo manifold-ctl reconfigure` to apply your changes. Look at `/var/opt/manifold/etc/api-env.sh` to confirm that your additons to the environment persisted.
