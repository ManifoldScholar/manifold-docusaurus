---
slug: "manifoldversion30overview"
title: "Manifold Version 3.0 Overview"
image: ""
image_alt: ""
---



<!--truncate-->

The Manifold team is delighted to announce the release of Manifold version 3.0. The hallmark feature for this release is the addition of project content blocks, which provides editors the ability to customize the content that appears on project landing pages.

<img src="/img/blog/legacy_wp/2019/04/triceratops-1024x1024.jpg" alt="" class="wp-image-519" />

## Major Features

**Project Content Blocks**
With version 3.0, editors can now pick which blocks of content—texts, metadata, resources, markdown, metadata, activity—they want to appear on project pages, and the order in which they should appear. These blocks are configurable on a per project basis and expand the range of project types that Manifold can easily support. When users create projects, they are offered a series of choices that will scaffold the project blocks based on their answers.

**Customizable Project Heroes**
The project page hero area is now fully customizable. Editors can manage all the content in this area and add calls to action below the description or the cover image. These calls to action have been decoupled from the published text.

**Alpha Plugin Interfaces**
Version 3.0 includes an early stab at making Manifold more extensible and customizable. Documentation for these interfaces is forthcoming (in the next week or so), and the interface is still subject to change as we refine our thinking around this feature. For the time being, it is possible to add a custom Sass file that overrides global color variables. We've also added interfaces for replacing the Manifold header and footer with a custom implementation, which will allow support for institutional branding. More on this to come in the coming weeks and in what will likely be a 3.1 release.

**Responsive Reader iFrames and H5P Embeds**
The Manifold reader now does a better job of sizing iFrames responsively, and also allows users to add custom data attributes to the ingestion source to embed H5P interactive content. This integration is a first step toward including more dynamic elements in the reader, and we're looking forward to building on it in the future.

**Improvements to Search**
Prior to version 3.0, every text node in a text being ingested into the Manifold reader was broken out into a separate model in the database to simplify the Elasticsearch indexing process. This was not a scalable or performant approach. We've removed this intermediary model and improved how texts are indexed, which speeds up the indexing process significantly. Full-text search results have been redesigned so it's now possible to see full-text hits in the context of the section the hit appears in. Annotations have been added to global search results.

**Redesigned Backend Lists**
We've redesigned backend interfaces for listing records, which includes lists of projects, events, makers, users, features, and pages. We've improved the mobile responsiveness of these interfaces and refined the overall look and feel. List filtering logic has been refactored and simplified. New filters have been added to project lists for listing only projects you've created.

**Project Collections**
We released project collections in an intermediary release—version 2.1—between 2.0 and 3.0. Project collections give publishers a way to group projects and highlight those groups on the Manifold home page. We've continued to make small improvements to this feature as we've worked toward 3.0 and learned more about how it's being used.

## Minor Features

In addition to the features outlined above, Manifold 3.0 ships with the following minor features:

- Thumbnails are now generated for PDF resources.
- We removed IP addresses, names, and email address from Rails logs as a step toward GDPR compliance.
- The reader's dark mode has been improved.
- When creating video resources, users can post a Vimeo or YouTube URL, and Manifold will sort out the video ID.
- Admin users can now unsubscribe a user from all Manifold notifications.
- The ingestion user interface design has been improved and simplified.
- A new metadata field—original publication date—has been added to text records.
- Rails has been upgrades from 5.0 to 5.1.
- A project can now have multiple published texts whereas before it could only have one.
- Image credits can be added to the project hero.
- The order of texts and text stylesheets is now managed through a drag and drop interface.
- Editors can now configure the start and stop date for showing a project collection on the Manifold home page, as well as how many projects appear in that collection.
- Some date inputs have been replaced with a date picker.
- Text stylesheets can be assigned to specific text sections.
- A favicon can be specified for a Manifold instance.
- Annotations can be flagged as inappropriate.
- Project placeholder icon is now responsive and displays better at lower sizes.
- We've updated the set of Manifold icons, making size and style more consistent across the application.
- Features can now be published/unpublished from the list rather than the individual feature detail view.
- We improved support for anchor links in manifest ingestion TOC.

## Bug Fixes

Over 75 bug fixes found their way into version 3.0!

## Accessibility Improvements

Improving Manifold's accessibility is an ongoing area of focus. We're thankful for the University of Washington's help in this regard, and look forward to continuing our partnership with them for future improvements and functionality.

- Keyboard controls added to the project collection icon picker component
- Keyboard controls added for reordering content block lists and for navigating and moving action callouts
- Improved accessibility of backend project lists
- Refactored form toggle components to use more accessible label attributes
- Began improving ARIA labels on icons
- Added aria-describedby text to utility toggle, user menu buttons
- Added close language near x icon in drawers
- Improved keyboard controls of search inputs
- Removed nested skip-to links
- Adjusted header tags to be more semantic and accessible
- Improved markup accessibility on dashboard stats table



