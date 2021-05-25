---
slug: "thisweekinmanifoldteammeetingnumerousfixes"
title: "This Week in Manifold: Team meeting, Numerous Fixes"
---



<!--truncate-->

This has been an exciting week for Manifold. The UMNP team—Terence, Dan, Susan, and Doug—and Matt all came out to Portland for one of our regular meetings. We met at the Cast Iron Coding office in the old Washington High School building and spent two days talking through issues, thinking about Manifold use cases, sorted through thorny metadata and DOI concerns, and generally reviewed how far we've come, where we're at, and what's left to do. I always find these meetings inspiring and invigorating, and am reminded of what a strong team we have in place for this project. In the two weeks leading up to this meeting, the development and design team at Cast Iron has been working furiously to tighten up existing behavior and progress on the project resources. As a result, we don't have a lot in the way of big new features to report for this sprint. We do, however, have a long list of fixes, small improvements, and tweaks, which I'm including below. Next week is a short week, and I likely won't post an update until the following week. In the next sprint, we'll be finalizing project resources, and then turning our attention back to the annotation user interface, and begin work on comment threads. The release that went out to staging today includes the following revisions. **Backend**

- Add static markup/styles for backend text selector
- Wire projects from API to backend views
- Wire backend dashboard to project list
- Add static upload form to backend
- Add backend statics: maker select, textarea
- Add radio group component to backend
- Add static componet for backend panel/nav
- Add static header to backend project detail
- Add static component for backend activity
- Add static for backend notifications
- Add backend icons, secondary header style
- Add static component for backend projects
- Add placeholder avatar to makers
**New Features**
- Add resource detail view
- Slideshow loads resources one page at a time (batch loading)
- Client can reduce one fetch to two locations in global state
**UI Improvements**
- Close panels on click
- Add graphic and messaging for users not following projects
- Improve resource-related back links
- Add marketing banner with signup button
- Reduce input and button borders
- Show actual annotation counts in text list
- Refine resource handling on client
- Animate project grid enter/leave (in some cases)
- Improve following widget and project filtering
- Mobilize mobile reader footer/appearance menu
- Adjust reader header for mobile
- Adjust positioning of user menu on mobile
- Adjust resource collection icon on small sizes
- Convert notification markup to use new styles
- Add responsive font-styles to reader
- Update twitter icon position on events
**Bug fixes**
- Remove slide listeners on unmount
- Correct resource detail link
- Fix inconsistent text-header spacing
- Adjust overlay header to match browse header
- Fix svg grid padding on iOS
- Prevent resource from showing blank slide
- Fix resource link instances in card
- Correct regression&nbsp;to collection detail
- Remove underline from text title
- Refactor resource scss files add dark overlay
- Correct resource totals language
- Show cards on collection resource list
- Fix overlay on resource thumbnails
- Fix slideshow transitions for demonstration
- Prevent project subtitle wrapping on mobile
- Fix text title weights on mobile
- Restrict activity list on mobile
- Fix sizing/wrapping on project metadata
- Do not add resource to blank collection
- Remove errant console.log message
- Correct following transition style
- Update user after edit profile
- Correct home page header
- Fix positioning and padding on header notifications
- Scroll to top when changing sections
- Correct annotation create
- Adjust margin/positioning on thumbnails
- Update primary nav for mobile
- Fix duplicate project&nbsp;create events
- Fix annotation popup position regression
- Address improperly named project import method
**API**
- Expose single collectionResource
- Expose text age
- Expose created month, day, and year on texts
- Expose CollectionResources; add acts\_as\_list
- Expose text annotation counts
- Expose resource kinds on project
- Move controllers to align with JSON API spec
- Expose uncollected project resources in API
- Expose user project favorites via API
- Implement project subjects; adjust filtering
- Ensure sources are associated with texts
- Import resources when importing projects
- Adjust resource serializers
- Add collection controller to API
- Generate resource thumbnail if it is an image
- Expose date and kind data on collection
- Expose project association counts
- Add resource importer; build resource models
- DRY up attachment validation; organize models
**Misc**
- Refactor authentication; improve API actions
- Refine frontend resource components
- Correct resource and collection migrations
- Clean up initializers
 &nbsp;

