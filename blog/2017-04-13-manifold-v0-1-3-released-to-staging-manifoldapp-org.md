---
slug: "manifoldv013releasedtostagingmanifoldapporg"
title: "Manifold v0.1.3 released to staging.manifoldapp.org"
---

Version 0.1.3 of Manifold introduces support for logins using Facebook, Twitter, and Google OAuth services. This version also incorporates a refactored approach to managing application settings, which can now be set via the backend, or managed by way of the dotenv file, which tends to be a more appropriate solution for automated provisioning and deployment.

<!--truncate-->

## Fixed bugs:

- Recent event CSS changes broke mobile event layout [#241](https://github.com/ManifoldScholar/manifold/issues/241)
- Settings are loaded even when SSR is unavailable
- Fix upload display in FF/Safari
- Fix popup position in Firefox

## Features:

- Refactor integration setttings; move to DB
- Add styled 50x error page
- Refactor service port configuration for easier install

## Closed issues:

- Missing Favicon in production env. [#242](https://github.com/ManifoldScholar/manifold/issues/242)

## Merged pull requests:

- [B] Fix events list responsive regressions [#244](https://github.com/ManifoldScholar/manifold/pull/244) ([naomiyaki](https://github.com/naomiyaki))
- [B] Add root dir detection in Gitbook ingestion [#243](https://github.com/ManifoldScholar/manifold/pull/243) ([SMaxOwok](https://github.com/SMaxOwok))
- [F] Add support for OAuth authentication [#208](https://github.com/ManifoldScholar/manifold/pull/208) ([scryptmouse](https://github.com/scryptmouse))


