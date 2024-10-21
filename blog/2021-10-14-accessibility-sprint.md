---
slug: "fall21-accessibility-sprint"
title: "Fall 2021 Accessibility Sprint!"
---


At Manifold, we treat accessibility as a top-tier concern. Our developers at [Cast Iron Coding](https://castironcoding.com/) are accessibility experts who design and develop the application with accessible functionality foremost in mind. In addition to the extensive testing they do in-house using screen-readers and browser add-ons, we’ve had the benefit of collaborating with the University of Washington’s [library](https://www.lib.washington.edu/), [press](https://uwapress.uw.edu/), and [accessibility office](https://www.washington.edu/doit/accessible-technology-services-0) over the past three years. The Washington team has performed an ongoing audit of Manifold over that time, and our two groups meet regularly to discuss new ideas and strategies for making the application even more performant for readers and content creators using assistive technologies. 

<!--truncate-->

Born out of this collaboration, we have recently been engaged in an accessibility sprint that has involved the following:

1. We reworked the user notification preferences interface for better screen reader UX. Dana’s [extended commit message](https://github.com/ManifoldScholar/manifold/pull/3079/commits/0aad0424cd0235f7fe6346775f9d3b02339258cf) on this issue is indicative the care and expertise we bring to accessibility concerns.
2. We refactored all collapsible content on the site to follow the correct ARIA design pattern. These are commonly used in the backend to add search filters and sorting options, so this was a widespread change. This will resolve [issue #2755](https://github.com/ManifoldScholar/manifold/issues/2755).
3. We added missing keyboard interactions to the Reading Group homepage editor. This is an improvement to the OER work, which currently exists in our main branch.
4. We added missing keyboard interactions to project text sorting. We already had keyboard interactions on our drag and drop lists in the backend in most cases. However, for the specific case where an entity can be dragged and dropped between two distinct lists (such as moving a text from one text category to another rather than within a category), we did not have keyboard controls. These lists, and all drag and drop lists now have full keyboard controls (including the new drag and drop lists for managing content in reading groups). This refactor resolves [issue #2678](https://github.com/ManifoldScholar/manifold/issues/2678).
5. We added alt text to project resources, which resolves [issue #2428](https://github.com/ManifoldScholar/manifold/issues/2428).
6. We applied accessible modal dialog patterns to all drawers and overlays in Manifold. This change resolved [issue #2434](https://github.com/ManifoldScholar/manifold/issues/2434). It also resolved [issue #2754](https://github.com/ManifoldScholar/manifold/issues/2754). [Issue #2425](https://github.com/ManifoldScholar/manifold/issues/2425) should also be resolved by this revision.
7. We resolved a header hierarchy issue in the reader. This resolves [issue #2757](https://github.com/ManifoldScholar/manifold/issues/2757).
8. We fixed a tab index issue in search results that made it difficult for keyboard users to navigate the content. This will resolve [issue #2969](https://github.com/ManifoldScholar/manifold/issues/2969)
9. We fixed a bug that had been introduced, which prevented some notifications from being rendered when certain backend forms were submitted. This error led to the problem reported in [issue #2559](https://github.com/ManifoldScholar/manifold/issues/2559), which was about the lack of screen reader notification when projects are saved.
10. We added screen reader support to ingestion, which resolves [issue #2743](https://github.com/ManifoldScholar/manifold/issues/2743).
11. We refactored the resource card markup with a focus on removing nested interactive buttons. We also improved link and button text for screen readers. This resolves [issue #2732](https://github.com/ManifoldScholar/manifold/issues/2732).
12. We're working on supporting annotation with caret browsing. This work is currently in [PR #3086](https://github.com/ManifoldScholar/manifold/pull/3086). This will resolve [issue #2326](https://github.com/ManifoldScholar/manifold/issues/2326) when it's finished.

All of this work will eventually be part of the version 7 release. For an up-to-date look at our work on accessibility concerns, [we maintain this dashboard on Github](https://github.com/orgs/ManifoldScholar/projects/1).