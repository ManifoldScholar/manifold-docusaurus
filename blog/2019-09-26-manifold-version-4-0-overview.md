---
slug: "manifoldversion40overview"
title: "Manifold Version 4.0 Overview"
image: "/img/blog/legacy_wp/2019/09/TriceratopsGopherRacoon-1024x774.jpg"
image_alt: "illustration of a Manifold rainbow triceratops with a gopher and a racoon"
---

The Manifold team is delighted to announce the release of Manifold version 4.0. The hallmark features for this release are the addition of reading groups, which allow readers to annotate texts publicly, privately, or anonymously, and standalone mode, which allows creators to set up projects that appear without the library. We've also made notable strides in improving Manifold's accessibility and are now publishing docker images to Docker Hub.


<!--truncate-->

## Major Features

**Reading Groups**
With the arrival of v4.0, any user on a Manifold instance can [create a reading group to collaboratively annotate texts](https://manifoldapp.org/docs/reading/annotating#reading-groups). Reading groups can be private, public, or anonymous. Readers can join groups using a unique code or URL. From within the Manifold reader, group members can specify which reading groups an annotation belongs to. Annotations within groups can be filtered by author or text, and group moderators can manage group membership. &nbsp;Want to assign a reading to a class and provide a private environment for students to engage with one another? Have a first draft you want feedback on? Want to create a unique scholarly edition? Reading Groups are for you!

We have more plans around reading groups, and are currently looking at ways to expand this feature so that cohorts of readers can collect and curate non-textual content on a Manifold instance. Keep an eye on [Slack](https://manifold-slackin.herokuapp.com/) and [Github](https://github.com/ManifoldScholar/manifold) for more details!

**Standalone Projects**
Version 4.0 introduces two modes for viewing projects in Manifold: library mode and [standalone mode](https://manifoldapp.org/docs/projects/customizing/general#standalone). Library mode is the default view that Manifold users are accustomed to. The new standalone view strips away Manifold navigation from the project page, and presents a project as though it were a small microsite. We introduced this feature to better support groups who want to link out to individual projects from their existing websites instead of duplicating their catalog in the Manifold library.

**Header Bar**
Manifold 4.0 exposes settings that allow administrators to include a [persistent header](https://manifoldapp.org/docs/customizing/settings.html#instance-header) throughout the installation. This header can be used to link back to a press marketing site, for example, and it can be overridden for projects in standalone mode.

**Accessibility Improvements**
The Manifold development team has worked closely with the accessibility experts at the University of Washington to take ongoing steps toward improving Manifold's accessibility. Version 4.0 ships with significant accessibility improvements for many Manifold components in the frontend, backend, and reader. We're committed to making Manifold a pleasure to use for all readers and content creators, and will continue to improve accessibility in upcoming releases. Going forward, we will break out all accessibility improvements in our change log so they are easier to track!

Special thanks to the University of Washington [Libraries](https://www.lib.washington.edu/) and [IT Accessible Technology Services](https://www.washington.edu/accessibility/) for the ongoing and generous sharing of wisdom and good humor. We are thrilled and truly appreciative of all your time and support.

**Docker Support**
Starting with v4.0, we are publishing docker images to Docker Hub. Users have been asking for Docker images for some time now, and we're glad we're now able to meet this need. We'll be adding docker documentation in the next couple days. In the meantime, visit our [ManifoldScholar/manifold-docker-compose](https://github.com/ManifoldScholar/manifold-docker-compose) repository to get started.

## Minor Features

- Backend users can download the ingestion source file for a text, if present.
- Added JSON-LD metadata for projects
- Manifold used to render icons from an icon font. These have all been replaced with SVGs
- Added a "finished" flag to projects to prevent updated date from appearing in project lists
- Numerous design improvements to reader user interfaces
- Relax user style sheet validation and allow more user styles on texts
- Many small improvements to text ingestion
- Additional font sizes and margins added to reader options

## Bug Fixes

Roughly fifty bugs have been fixed for the v4.0 release. The full list of bug fixes is included in our [change log](https://github.com/ManifoldScholar/manifold/blob/master/CHANGELOG.md).

## What's Next?

We're going to dive right into Manifold v5.0. The focus of v5.0 will be preservation. We'll be creating a mechanism to save a manifold project to a static file format that can be deposited into an institutional repository like Portico. As part of this work, we will improve and document Manifold's existing CLI interface with the aim of making programatic text ingestion and project creation possible.

While we had hoped to release API documentation as part of v4.0, it looks like we need a few more weeks to wrap it up. Progress is well underway, and we expect to publish the first iteration of Manifold's API documentation in mid-October.



