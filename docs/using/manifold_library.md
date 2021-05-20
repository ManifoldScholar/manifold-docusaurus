---
id: manifold_library
title: Manifold Library
sidebar_label: Manifold Library
---

### What Are Library Views?

By default each Manifold homepage showcases Projects as an array of selectable thumbnails with basic title and author information. This gives readers the ability to browse an entire catalog of work at a glance.

The homepage library view is configurable by those who manage the instance and can be set to display Projects in curated collections. Other library views are more fixed and display Projects in pre-configured paradigms.

:::note Projects Outside the Library
Alternatively, library views can be disabled throughout an instance to cultivate a different experience where readers are instead directed to specific Projects from an existing web presence. It is also possible to selectively remove individual Projects from the library experience. See [Properties](../administering/configuring/properties.md#disable-library-views) to learn more about those options.
:::

## Manifold Menu

The main Manifold menu appears at the head of all frontend library views. The menu can be configured to display a custom logo and render in different color schemes (see [Theme Settings](../administering/configuring/theme_settings)).

Functionally, the menu serves as a means for readers to navigate between different library views (**Home**, **Projects**, **Following**) and search for content across the entire instance. These uses are discussed in the following sections on this page.

The Manifold menu is also where readers manage their profiles, notification settings, and access their Reading Group engagements. See [Your Account](../using/your_account.md) and [Reading Groups](../using/reading_groups.md) for more about those uses.

## Home

As the default landing page for an instance, the Home page is prime real estate, and thus highly configurable. The page is made up of the Manifold menu, an optional Feature section, a library view of Projects, followed by the instance Footer. The Feature and Footer sections are beyond the scope of this page and are considered, respectively, in the [Features](../docs/backend/features.md) and [Footer](../docs/administering/configuring/properties.md#footer) documentation.

Out of the box, the library view on the Home page displays a maximum of sixteen Projects, ordered alphabetically by title under a heading that reads “Our Projects.” When an instance exceeds sixteen total Projects, the section will conclude with a link to **See All Projects**, directing readers to the All Projects view, also accessible by selecting **Projects** from the Manifold menu.

Alternatively, those users who are maintaining an instance can employ [Project Collections](../backend/project_collections.md) to control which Projects are displayed on the homepage and how they are ordered and grouped. Thus it is possible to portion out the Manifold landing page by theme, around specific events or conferences, current events, or as a means to suggest titles to readers they may not have otherwise considered to be of interest.

Regardless of how the Home library view is configured, alphabetically or by Project Collections, it is followed by two buttons: **See All Projects** and **Projects You're Following** that direct readers the All Projects and Following views.

## All Projects

The **All Projects** pages displays, as the name suggests, all of the Projects in an instance in a paginated view. Using the three fields beside the page heading, readers can search for specific Projects, sort the listings alphabetically by title, or filter Projects by [Subject](../administering/configuring/project_subjects.md) or [Featured Status](../backend/projects.md#featured). Sorting Projects by these categories creates a stable URL that can be shared so others can land on the page with the same results.

## Following

Readers who have created an account on an instance will find a link in the Manifold menu to the **Following** view. Every Manifold Project thumbnail includes a plus-sign badge that can be toggled on and off. When toggled on the badge will become a check mark, indicating that the Project is now being followed. Followed Projects are collected in the **Following** view as a shortcut for readers to quickly navigate to those Projects they are most interested.

Included in the Following view, in a separate container, are Projects that have been denoted as [Featured](../backend/projects.md#featured). Only the four most recently published or updated Featured Projects will appear in this space, with a link to **See All Featured** available in cases where an instance has more then four total Featured Projects.

## Search

The magnifying glass icon in the Manifold menu opens a search bar that allows readers to look for specific content across an entire instance. Manifold searches support phrasal and keyword inputs as well as negations:

Users can search for specific phrases enclosed in quotation marks to look for exact matches in runs of text (e.g., `"fear is the mind killer"`). It is also possible to combine the quotation-mark operators with negations by appending a minus sign before elements and phrases to be omitted from the results (e.g., `-negate -this keep that` or `-"no to all of this"`). In practice this means it’s possible to search for `"fear is" -"fear itself"` to get results from Frank Herbert’s *Dune* (“fear is the mind killer”) but not Roosevelt’s speech.

Quoting a phrase will still apply stemming, thus Manifold takes into account misspellings, ignores cases, etc. When negations are employed, they follow the NOR paradigm instead of NAND. If a search includes `-apples -bananas`, Manifold will exclude results that mention apples or bananas instead of excluding results that only include both apples and bananas.

:::tip Search Not Working?
Are you searching for something you know is in the system but you’re not getting any results? That’s likely because Projects in Draft status are *not* indexed by Manifold’s search engine, Elasticsearch. Once the Project is toggled out of Draft, the system will index its content and make it available to search (see [Project Properties](../backend/projects.md#draft-mode)).
:::