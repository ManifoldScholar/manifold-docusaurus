---
id: v9x
title: v9.x
sidebar_label: v9.x
---

## Manifold v9.0.0

Manifold v9 is at long last out the door! We want to thank the Manifold community for its patience with this release. We
realize it's been a long time coming. The good news is that v10 is well underway, and the team is now well positioned to
release new versions of Manifold more frequently. We paid down a lot of technical debt in v9, and Manifold is in a great
position for the future!

## Manifold Modernization

The first commit to the Manifold repository was in 2015, so this project is now over a decade old. Our primary goal in
developing Manifold v9 was to upgrade dependencies and infrastructure, simplify how we package and deploy Manifold, and
replace deprecated libraries with modern replacements wherever possible. This work continues, but we have made real
progress.

Manifold consists of two main parts: the client application and the API. The client application is a Node.js application
that runs on the server and in the browser. The API is a Rails application. Prior to v9, the API included the following
services:

- Cable: a websocket server used during text ingestion
- Clockwork: the background job scheduler
- Puma: the Rails application server
- Sidekiq: the background job processor

The API is also dependent on three additional services that run on the server:

- Postgres: the API's database
- Redis: used for caching and the job queue
- Elasticsearch: used to provide full-text search

In 2015 containerization tools like Docker were still relatively new, and we decided to distribute Manifold as operating
system packages. We used a tool called "Omnibus," which grew out of the Chef project, to build these packages. Chef is a
configuration management tool that allows DevOps developers to define server configurations and software installations
as code, then automatically apply those configurations across multiple machines to ensure consistency and reduce manual
setup work. These tools essentially turn server management from a manual, error-prone process into a repeatable,
version-controlled workflow.

Omnibus is a packaging toolkit that creates self-contained software bundles by embedding an application along with all
its dependencies. It packages runtime environments, libraries, and everything else into a single installable package,
eliminating dependency conflicts. It was originally developed by Chef to package their own software but became a
standalone tool for creating portable, dependency-free installers for any application.

At the time, it seemed like a great choice. It certainly allowed relatively non-technical users to download Manifold and
easily install it on a server. The problem, however, with this approach, is that it shifted the burden of maintaining
and configuring all the runtimes and libraries that a Manifold installation needs onto the Manifold development team.
Like many open source infrastructure teams, our team is small and resources are always tight. As time has moved on,
maintaining Manifold's dependencies during packaging has become increasingly difficult, and we've acquired quite a bit
of technical debt. Moreover, the DevOps world has moved on. Chef isn't as popular as it once was, and this packaging
approach has grown brittle. In fact, the company behind Chef was eventually sold, and the new owner has pulled omnibus
packages that we relied on from the web, which means it's no longer sensible or possible for us to distribute Manifold
as OS packages. This hasn't been good for the project; the time between each Manifold release has grown, and we've lost
velocity.

Manifold is still widely used, and we get new adoption inquiries each week. We believe that despite its age, Manifold is
a high quality product that solves important problems for scholarly publishers. The future for Manifold is strong, but
last year the team agreed that we needed to get the project on a more sustainable technical footing. With fewer
resources, we need to make sure we're spending those resources on making Manifold better, not applying tedious updates
to underlying infrastructure and maintaining overly complex packaging tooling.

With all this in mind, we started work earlier this year on what we're calling the "Manifold Maintenance and
Modernization" project. **This work is funded by revenue from Manifold Digital Services hosting clients.** Those groups
that choose to host Manifold with MDS at Minnesota are funding the important development work that benefits everyone
in the community. If you currently self-host Manifold, please consider signing up with MDS so that you too can help
support this great tool! Thank you, MDS clients!

Under this project, we had a few main goals:

First, we completely dropped the Omnibus packages and the dependency on Chef for packaging. Starting with Manifold v9,
we will only support hosting Manifold using Docker. This shift allows our development team to streamline the release
process significantly. When we need a new version of an underlying dependency like Node or Ruby, we can simply point our
Docker build files at newer images, test, and release. With Omnibus, we had to ensure that new versions of dependencies
could actually compile on a variety of host machines. This eliminates the complex work of maintaining separate
OS-specific packages across multiple distributions. This Docker-first approach will enable us to deliver security updates
and new releases much more frequently. It will also make it possible for self-hosted and MDS instances to easily run
against the most current version of Manifold on GitHub, rather than waiting for a versioned release.

Second, with v9, we have moved all MDS clients to a Platform as a Service provider. Prior to v9, MDS clients were hosted
on cloud VMs, which themselves require maintenance and updates. Moving from VMs to PaaS eliminates infrastructure
management overhead by letting the team simply deploy code while the platform automatically handles scaling, patching,
load balancing, and underlying server maintenance. This shift allows us to focus on building features rather than
managing servers, while increasing security and performance for clients.

Third, we are aiming to reduce the cost and complexity of hosting a single instance of Manifold. There are parts of the
stack that we've come to see as overly complicated, and we want Manifold to be as accessible to small groups with tiny
budgets as we can make it. Keep in mind that in a containerized environment, the hosting cost generally corresponds to the
number of containers/services that the application requires. Each container we remove from the equation lowers the
overall cost. In the interest of reducing hosting costs, we've done the following in v9:

- We removed Elasticsearch. Elasticsearch requires a lot of memory to run, and memory is expensive. Moreover, content
  has to be indexed in Elasticsearch whenever it changes, and it's easy for the index to get out of sync with the actual
  content. Starting with v9, search queries the database directly and uses Postgres's full text search functionality. We
  don't expect that users will be able to tell the difference, and this cuts the CPU and memory hosting requirements by
  about a third.
- We removed Cable in v9. When you ingest a text in Manifold, the server streams the real-time logging of what's
  happening in the ingestion to the backend. That's a nice feature, but it's not worth paying an extra $10 or $15 per
  month. In v9, the client application will poll the API every couple of seconds to get the updated ingestion log. From
  a user's standpoint, the experience should be about the same.
- We migrated the background job processor from Sidekiq to Good Job. Good Job stores its jobs in the Postgres
  database, which will allow us to drop Redis. Good Job also has a built-in scheduling feature, which means we can also
  drop the Clockwork process. This saves us a database service, and another container.

Going forward, running an instance of Manifold requires Ruby, Node, and Postgres — and it will run with about
1/3 fewer processes. Simplifying Manifold without sacrificing performance or functionality is going to keep this product
healthy for many more years to come.

As a result of these changes, those of you who are hosting your own instance of Manifold will need to migrate from the
current packages to the new Docker approach. With the last eight major Manifold releases, we've provided packages that
allowed instances to upgrade by simply applying the new package and reconfiguring the instance. For the most part, this
has been a straightforward process, and we've often heard from our users about how easy it is to install or upgrade
Manifold. We take pride in that, and we intend to continue our tradition of easy upgrades. If you are a Manifold Digital
Services client, you've already been updated. If you self-host, keep reading for instructions on how to upgrade from
v8 to v9.

## Upgrading from v8 to v9

As described above, Manifold v9 is deployed using Docker containers orchestrated by
[Kamal 2](https://kamal-deploy.org/), which replaces the old Omnibus OS packages entirely. This means that upgrading
from v8 to v9 is not a simple package update — it's a migration to a new deployment approach. That said, we've worked
hard to make this process as smooth as possible, and we've built tooling to help you along the way.

At a high level, the upgrade involves three main steps. First, you'll
[back up your existing v8 instance](https://manifoldscholar.github.io/manifold-docusaurus/docs/administering/backup_restore),
which produces a tar archive containing your database dump and uploaded files. Second,
you'll set up a new v9 deployment by cloning our
[deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example), installing a few local
dependencies (Ruby, Bundler, and Docker), and running an interactive configuration wizard that generates your deployment
configuration and secrets. The wizard walks you through options for your server, domain, database, and storage backend.
Third, you'll deploy Manifold to your server and import your v8 backup into the new instance. The import tool handles
loading your database, migrating your uploaded files, running all pending database migrations, and executing upgrade
tasks to bring everything up to date with the v9 codebase.

You'll need a server with at least 4 GB of RAM, 2 vCPUs, and 40 GB of SSD storage, running a supported Linux
distribution (Ubuntu 22.04+ is recommended). The server needs SSH access and ports 80 and 443 open. If you want SSL —
and you should — you'll also need a domain name with a DNS A record pointing to your server. Kamal handles provisioning
Let's Encrypt certificates automatically.

One thing worth noting is that v9 gives you more flexibility in how you host Manifold's supporting services. The
database can run as a local PostgreSQL container managed by Kamal, or you can connect to an external managed database
service like AWS RDS or DigitalOcean Managed PostgreSQL. Similarly, uploaded files can live on the server's local
filesystem, in a self-hosted MinIO container, or in an external S3-compatible service. The configuration wizard handles
all of these options, so you can choose the setup that best fits your budget and infrastructure.

For detailed, step-by-step instructions, please see the
[README in our deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example). It covers
everything from cloning the repository and running the configuration wizard to deploying, importing your v8 data,
creating an admin user, and ongoing maintenance.

This is a new deployment approach for Manifold, and we expect there may be bumps along the way as the community works
through the migration. Our team is actively monitoring
[issues on the deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example/issues) as well
as messages in the `#installation` channel on the
[Manifold community Slack](https://manifold-slackin.herokuapp.com/), so please don't hesitate to reach out if you run
into problems. We're also available to assist groups directly with the upgrade process, for a fee, provided we can be
granted SSH access to both the existing v8 host and the target v9 server. If you're interested in that option, reach out
to us on Slack and we'll work out the details.

## What's new in Manifold v9?

Read on for a list of features, changes, and bug fixes in v9.

### Spam Mitigation Tools

The spammers finally found Manifold. Nothing gold can stay, but we're committed to fighting back! In v9, we've added a
number of tools for mitigating spam and for giving admins more insight into what content has been generated on their
instance:

- Exposed searchable lists to admin users for browsing and managing annotations, comments, reading groups, and reading
  memberships
- Added bulk delete functionality to these lists so that it's possible to delete many records at once when removing spam
- New detail views for annotations and comments that expose information about records that have been flagged as abusive
- Updated the flagging approach for user-generated content so that admins can resolve inaccurate flags
- Reworked the flagging UI in the reader to help readers understand when and how to flag abusive content

### Revised Social Integrations

We haven't seen enough demand around Twitter (now X) and Facebook integrations to warrant the cost of maintaining these
features.

- Removed instance level integrations with Twitter and Facebook
- Removed project level integrations with Twitter
- Removed tweets from project events
- Removed Twitter and Facebook links from project heroes
- Implemented native share functionality in the reader and resource detail pages
- Added functionality in the reader to copy a link to a selected text fragment

### Reading Group Homepage Improvements

We made some quality of life improvements to reading groups:

- Rebuilt the drag and drop editing interface for improved UX and accessibility
- Allow markdown blocks to be added and ordered alongside categories

### Small Features and Enhancements

v9 includes quite a few small improvements:

- Improved user control over resource list displays including adding a "featured" flag to resources and enabling editors
  to manually select resources for hiding and showing on project content blocks
- Added `--font-size-adjustment` CSS variable to text stylesheets to allow adjusting root font sizes for text sections
- Improved content thread behavior, including showing the reply button by default, ensuring that succeeding pages are
  fetched properly, allowing comment threads to be collapsed, and opening collapsed threads after adding a reply
- Adjusted reader to hide other users' highlights by default in the reader to reduce visual noise
- Implemented filters as query parameters on all admin lists, which improves forward/backward navigation in the backend
- Added support for tracks to video resources, which makes it possible to upload WebVTT captions, subtitles, chapters,
  and other metadata
- Exposed a transcript file upload field for audio and video resources
- Manifold now tracks downloads as part of its analytics
- Added a citation override field to projects, texts, text sections, journals, and resources and ensured that citations
  are visible for all these entities in the frontend
- Added date sorting to frontend lists
- Made it possible for project and text collaborators to have multiple roles
- Added a role that allows a user to update a project's resources and texts
- Added a new journal editor role
- Implemented consistent OpenGraph (social) fields for entities in admin and render corresponding meta tags on the
  frontend
- Added support for local development using Docker
- Improved keyboard controls for drag and drop interfaces; all drag and drop interfaces now have a popup menu displaying
  available movement options
- Added full support for storing assets in S3 compatible storage

### Upgrades and Simplifications

The team spent a good deal of time updating the dependencies and languages:

- Upgraded React, Webpack, and nearly all client dependencies
- Replaced Elasticsearch with PostgreSQL full text search
- Replaced deprecated drag and drop library
- Replaced React video library with native HTML `<video>` elements
- Replaced React transition library with native CSS transitions for drawers and dialogs
- Upgraded Gem dependencies and updated Rails to v7.2
- Replaced Sidekiq and Zhong with GoodJob
- Updated Node to v22
- Updated Ruby to v3.4.9

### Bug Fixes

We fixed a number of bugs, including:

- Ensure the new project collection drawer closes on save and correctly asks for confirmation of unsaved changes
- Ensure subject filter options update when a new one is created in admin
- Improve redirects in and out of admin mode
- Ensure splash buttons display on mobile
- Prevent layout flashes on the homepage and resource collections
- Add unsaved changes confirmation to ingestion drawer
- Ensure terms and conditions link is correct on the signup page
- Fix incorrect notification copy and remedy missing localization keys
- Fix regression with copying text in the reader

### Accessibility

As part of our work on a VPAT, we tackled some notable accessibility issues:

- Improved keyboard navigation for drag and drop lists
- Fixed contrast issue with resource in the library and the reader
- Fixed contrast issues in site header navigation
- Add accessible names to resource thumbnails in the reader
- Add bolder annotation and highlight styles to the reader for users with increased contrast enabled

### The Manifold future is bright!

Work on Manifold v10 has been underway for months, and we hope to release it this summer. Here's a sneak peek at what
we've already finished for v10:

- We revisited how we handle resources in Manifold
  - Redesigned UI elements for resources, resource collections, and resource annotations
  - Redesigned detail pages for resources and resource collections
  - New “block” resource annotations
  - Existing resource annotations renamed as “inline” type and given new UI
  - New ability to create resources in the reader
  - New A/V player for audio and video resources. (External videos will continue to play through an embedded YouTube or Vimeo player.)
  - Minor updates to reader annotation menu UI
- We're making content more discoverable
  - Instances will now be able to expose content over an OAI-PMH feed.
  - We're adding LTI support so instructors can more easily integrate Manifold into a learning management system
  - New list routes with search, filters, and pagination (/project-collections, /journals)
  - Projects list is now at just /projects (/projects/all redirects so bookmarks still work)
  - Allow journals to be filtered by subject
  - Added filters to journal issues lists (/journals/issues and /journals/:id/issues)
  - Removed the without volume filter on /journals/:id/issues
  - Allow projects in project collection detail view to be filtered by subject
  - Fix bugs with project/journal search results appearing from outside search scope
- We've improved the text section editor
  - New alignment options for text and image content in the text section editor
  - Support for utility classes
  - Better UX for embedding image assets to texts
- We've revisited instance theming
  - Reorganized theme settings and split into theme (/backend/settings/theme) and content (/backend/settings/content)
  - Added color pickers to backend inputs that accept a color value
  - Added header preview to theme settings
  - Improved feature preview behavior
- We're improving authorization user experience
  - Manifold will support authentication against external identity providers using OIDC or SAML
  - Made authorization error messages more user-friendly
  - Anonymous users are redirected to login and then redirected back to the entity after authentication
  - Authorization errors now shown in context of site when possible rather than with full-screen overlay
  - Added notification to Reader annotation drawer for users who require email verification before annotating
- We're doing a major upgrade to react-router
  - The changes will mostly be invisible to users, but it's important to pay down this technical debt.
  - Library search now uses url params. Links to specific searches are shareable.
- We're also working on a Manifold directory to be hosted on manifoldapp.org that allows users to search for content
  across all Manifold instances that have opted in.
- We continue to focus on accessibility and regularly make small accessibility improvements

We hope to release v10 sometime this summer. In the meantime, our work on v10 is in the `next` branch in the
[ManifoldScholar/manifold Github Repository](https://github.com/ManifoldScholar/manifold). With the new deploy approach,
you can access this work now by updating the submodule pointer in the [deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example).
