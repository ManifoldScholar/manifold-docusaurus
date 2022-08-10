---
id: v7x
title: v7.x
sidebar_label: v7.x
---

## Manifold v7.0.0

Manifold version 7.0 includes over a year’s work on reading groups, journal support, accessibility improvements, client application refactoring, and more.

## Major Features

### Collections

Prior to v7, users on a Manifold instance could add a project to their favorites. That system has been replaced with “collections,” which can contain projects, texts, text sections, resource collections, and resources. Users can save content on a Manifold instance to their collection so it’s easy to find in the future. Creators of reading groups can collect content into their group. This feature was designed for instructors who can now build a collection of content on a Manifold instance for their students. Content in reading group collections can be grouped and sorted into topics, each of which can have associated markdown content.

### Reading Group Improvements

In v7, we’ve added numerous new features to reading groups. Manifold now lists public reading groups so students can more easily discover course groups. Users can archive their membership in reading groups, which allows instructors who teach with Manifold to more easily hide previous semester groups and focus on current classes. Reading group owners can clone their group, including their annotations and any content collected to the group, which makes course reading groups more reusable. In v7, it’s easier for reading group moderators and members to see member contributions to the group.

### Journals

Manifold v7 adds initial support for publishing journals on Manifold. We’ve added a new top-level “Journal” model that can be managed in the Manifold backend interface. Journal issues are simply projects with some additional fields for tracking issues and volumes. This means that each issue can include multiple texts, resources, and content blocks. There are new views on the frontend for listing journals, showing journals on the home page, and journal landing pages. We hope to build out this feature in subsequent releases in response to user feedback.

### Accessibility Improvements

Our team made a number of minor and major accessibility fixes in Manifold v7. The most significant change was making it possible to annotating texts in the reader with caret browsing. It’s now possible for a user to annotate a Manifold text without using a mouse.

### Client Style Refactor

The Manifold client application was built with monolithic Sass stylesheets. CSS best practices have changed a lot in the past five or six years, and it was time to pay down some technical debt. The team spent many hours replacing Sass stylesheet with more modular CSS-in-JS. These changes will help us build new components more quickly and efficiently in the future.

### Localization Foundation

The team went through every frontend interface and extracted hard-coded strings. Manifold now ships with all client application labels stored in a JSON localization file, which means it’s now possible to translate Manifold’s interface into other languages. We’ll be looking to the community for help with this in the coming months and years!
