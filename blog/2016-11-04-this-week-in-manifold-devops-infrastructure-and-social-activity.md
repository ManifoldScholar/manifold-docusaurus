---
slug: "thisweekinmanifolddevopsinfrastructureandsocialactivity"
title: "This Week in Manifold: DevOps, Infrastructure, and Social Activity"
---

Thanks for joining me for another installation of "This Week in Manifold."

First off, please accept my apologies for missing last week's update. When last Friday rolled around, we had a number of updates ready to go out to our staging site. However, when it was time to deploy, we hit a few unexpected problems.

<!--truncate-->

## DevOps, Hosting Manifold, and Deployment

This release adds a new metadata field to projects. Because the exact metadata requirements are difficult to pin down and may change from press to press, we wanted a relatively flexible approach to storing project, text, and resource metadata. Back in the day, we might have used an [EAV model](https://en.wikipedia.org/wiki/Entity%E2%80%93attribute%E2%80%93value_model) for this, but there are many well-documented drawbacks to that model. Because Manifold uses PostgreSQL as its database backend, we have access to a variety of field types for storing arbitrary amounts of data. In the past, we've used [HSTORE](https://www.postgresql.org/docs/9.1/static/hstore.html) for storing key/value pairs, but in this case we wanted something more flexible that could store different data types (HSTORE stores strings, but we want to store integers, boolean values, strings, arrays, etc). Recent versions of PostgreSQL include the JSONB field type, which is exactly what we want in this case.

Alas, that meant that the October 28th release required some infrastructure updates. Sure, we could have shelled into the staging server and done a quick upgrade, but that's not how we roll on this project. It's really important to us that it be possible to easily provision hosts for Manifold, which means automating as much as possible. As Manifold grows, it relies on more and more services to run, which makes setting it up increasingly complex. With this release, Manifold needs all of the following configured on the server to run correctly:

- Ruby 2.3 (for the API)
- Node 4.5 or higher (for the client)
- Postgres 9.4 or higher (for storage)
- Redis (for queuing background jobs)
- ImageMagick or GraphicsMagick (for resizing images)
- Nginx or Apache (for serving the API and the Client)

Moreover, in addition to having all these requirements in place, the server also requires that a number of background processes are always running. As of right now, there are four custom services (excluding the webserver and the database server) that need to be running on the host: 1) manifold\_api (Rails app served by [Puma](http://puma.io/)), 2) manifold\_client (Node app), 3) manifold\_scheduler (Ruby daemon), and 4) manifold\_workers ([Sidekiq](http://sidekiq.org/)). Keeping four services running on a server (or on multiple servers) is not without its complexities. If we run these on Ubuntu Trusty (v14), for example, we need Upstart scripts that manage the services. If we run Manifold on Ubuntu Xenial (v16), then we're going to need Systemd scripts. If it runs on older versions of Centos or Redhat, then we'll probably need some init.d scripts.

Running a complex app with separate parts is tricky. Internally at Cast Iron, we use [puppet](https://puppet.com/) and [foreman](https://theforeman.org/) to manage these services. Needing to support Postgres 9.4 got us thinking about deploying Manifold to Ubuntu Xenial, which in turn led us to revisit our manifests. Once we went to Xenial, we had to rewrite our startup scripts for systemd, which in turn revealed problems with how we were storing secrets in the environment. In short, instead of spending the last week working on project resources and feature development, we spent it paying down some technical debt on the infrastructure side, and improving Manifold's devOps and stability.

That's done now, and we're deploying Manifold to Xenial and fully managing its environment and all dependencies via Puppet. Revisiting this infrastructure has also given us an opportunity to reflect further on Manifold's installation story and continue discussions about how we can make Manifold easy for other presses to adopt and install.

## New Features

We did manage to slip a few important features into this week's release. The full list is below, but there's one in particular I want to highlight.

This release includes a scheduler that runs constantly in the background while Manifold is running. One of the things this scheduler does is trigger a background job for fetching tweets related to projects in Manifold. That job currently runs hourly.

Editors can use twitter search terms to describe what kind of tweets Manifold should pull in for a given project. This gives editors quite a bit of flexibility. For example, Manifold might watch the author's twitter account for all tweets with a specific hash tag. Or, it might watch twitter in general for all tweets that include a given hashtag. Our tweet fetching service accepts multiple search terms, so it's possible for a project to follow multiple accounts and hashtags.

These tweets show up on the project activity feed. Readers can browse through the historical activity for a project and see the events—texts being added, tweets about the project, new resources uploaded—that took place as the project became a published book (see screenshot, below). Our hope is that showing this activity helps make public the iterative aspects of authorship.

<figure>
  <img 
    src={require('/img/blog/legacy_wp/2016/11/Screen-Shot-2016-11-04-at-9.58.24-AM.png').default}
    alt="Project Activity"
  />
  <figcaption></figcaption>
</figure>

Well, that's enough for today. I'll be back next week with another update. Enjoy the weekend!

## Refactoring

- Display project "makers" (authors, editors, etc) on one line
- Improve header/icon lockup on project detail component
- Refactor ingestion resources into a new model that is distinct from project resources
- Clean up API binstubs

## Features and Improvements

- Add JSONB metadata field to projects; adjust project import mechanism to include metadata
- Expose project metadata in API
- Render project metadata in the client
- Incorporate Sidekiq for background job processing
- Add the concept of model ownership in various places. Manifold will now track who creates a project.
- See a system-level user for ownership purposes
- First pass at project events subsystem including background event generation; create Event factory class
- Expose project events via the API
- Render project events in the "activity" component on the project detail view
- Add job for queuing the fetching of project tweets
- Add job for fetching project tweets
- Add a background scheduler (Clockwork) for triggering recurring background jobs

## Tooling and Libraries

- Update Postgres requirement to 9.4 or 9.5 for JSONB
- Adjust Travis CI build to use Yarn instead of NPM
- Feed Travis build notifications to Slack
- Numerous revisions to deployment configuration

## Bug Fixes

- PropType correction in EventList component
- Address 1:N queries in the project controller
- Correct text icon on project texts list
- Fix padding on coverless project heroes
- Adjust font size and padding on project makers