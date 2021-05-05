---
id: manifold_library
title: The Manifold Library
sidebar_label: The Manifold Library
---

## Projects

The Manifold homepage acts as the library of titles you are offering on the platform. This library is divided into three main categories by default: Featured Projects, Our Projects, and Following. However, if you are employing Project Collections as means to showcase your materials, those preferences will supersede the default views discussed here in the [Featured Projects](manifold_library#featured-projects) and [Our Projects](manifold_library#our-projects) sections. See the [Project Collections](manifold_library#project-collections) section for more.

Projects appear in the library with their thumbnail or cover image, title, author, and date of most recent update.

### Featured Projects

The first category of Projects you will see on a Manifold landing page are the Featured Projects, suggested titles that give your readers a curated sample of what’s new and available.

:::note
If you are a backend user, Projects can be added or removed individually from the Featured section through the [Properties](../backend/projects.md#properties) sidebar.
:::

### Our Projects

Below Featured Projects is the Our Projects section, which displays all your Projects. From a dropdown menu, you can select filters to view titles by subject category assigned by you.

Sorting Projects by these categories creates a stable URL that can be shared so others can land on the page with the same results.

:::note
To learn more about how to create and curate subject categories as an Administrator, see the [Subjects](../administering/configuring/project_subjects.md) section.
:::

### Following

Following Projects allows you to group those titles of interest to you in one place for easy access. To start following a Project, click the green circle with a white plus sign on the top left of a Project’s thumbnail. When you hover over the plus sign you are given the option to follow that Project. When you do so the green circle will change to a blue one with a white check mark. Likewise, you unfollow a Project by hovering over the blue circle and selecting “unfollow.”

Followed Projects can be accessed by selecting Following from the top menu bar, or by clicking the **Projects You're Following** button below Featured Projects and Our Projects.

## Project Collections

Project Collections are a way to customize and control the way Projects are displayed on the Manifold homepage. Collections displace your library of Projects on the landing page in favor of “blades” or “blocks” of Projects curated manually or algorithmically around specific subjects and tags. Thus, instead of showcasing a library of Projects, ordered only by title, it is possible to portion out the Manifold landing page by theme, around specific events or conferences, current events, or as a means to suggest titles to readers they may not have otherwise considered to be of interest.

Only those Collections denoted in the backend to "Show on homepage" will appear on the Manifold landing page. There is no artificial limit to the number of Collections that can appear on the homepage, but the more Collections that appear, the longer a reader will need to scroll to review those Projects to which you wish to draw attention. Conversely, if only one Collection is marked to show on the homepage, only that Collection will appear, followed by links to see Projects on the instance or, for those who are logged in, a link to those Projects that are being followed.

All Collections marked as "Visible" in the backend, regardless of whether they are set to appear on the homepage, will appear on an instance’s Project Collection page, accessible by clicking **See Project Collections** button at the bottom of the Projects page. Collections that are not set to be visible will not appear on either the homepage or Project Collection page.

## Search

The magnifying glass icon opens a search bar that allows you to enter a word or phrase to search across all content and Projects. Every search bar in the Manifold application supports phrasal searches and negations.

:::important
Projects in Draft status are not indexed by Manifold's search engine, Elasticsearch. As such any searches performed on a Draft Project will not return any results.
:::

Users can search for specific phrases enclosed in quotation marks to look for exact matches in runs of text (e.g., "fear is the mind killer").

It is also possible to combine the quotation-mark operators with negations: users can append a minus sign before elements and phrases they wish to omit from search results (e.g., -negate -this keep that or -"no to all of this").

In practice this means it’s possible to search for "fear is" -"fear itself" to get results from Frank Herbert’s Dune (“fear is the mind-killer”) but not Roosevelt’s speech.

:::note
Quoting a phrase will still apply stemming, thus Manifold takes into account misspellings, ignores cases, etc.

When negations are employed, they follow the NOR paradigm instead of NAND. If a search includes -apples -bananas Manifold will exclude results that mention apples or bananas instead of excluding results that only include both apples and bananas.
:::
