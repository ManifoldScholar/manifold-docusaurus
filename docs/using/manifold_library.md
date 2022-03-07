---
id: manifold_library
title: Manifold Library
sidebar_label: Manifold Library
---

## What Are Library Views?

By default each Manifold homepage showcases Projects as an array of selectable thumbnails with basic title and author information. This “library view” gives readers the ability to browse an entire catalog of work at a glance.

The homepage library view is configurable by those who manage the instance and can be set to display Projects in curated collections. Other library views are more fixed and display Projects in pre-configured paradigms. Curated or pre-configured, all library views have discrete landing pages, display the Manifold menu and footer, and include links to easily navigate to other library views, as well as user-specific content.

:::note Projects Outside the Library
Alternatively, library views can be disabled throughout an instance to cultivate a different experience where readers are instead directed to specific Projects from an existing web presence. It is also possible to selectively remove individual Projects from the library experience. See [Properties](../administering/configuring/properties.md#disable-library-views) to learn more about those options.
:::

## Manifold Menu

The main Manifold menu appears at the head of all frontend library views. The menu can be configured to display a custom logo and render in different color schemes (see [Theme Settings](../administering/configuring/theme_settings)).

Functionally, the menu serves as a means for readers to navigate between different library views (**Home**, **Projects**, **Journals**, **Reading Groups**) and search for content across the entire instance. These uses are discussed in the following sections on this page.

The Manifold menu is also where readers access their profiles, notification settings, and manage their Reading Group enrollment. See [Your Account](../using/your_account.md) and [Reading Groups](../using/reading_groups.md) for more about those uses.

### Home

The default landing page (or Home page) for an instance is highly configurable. The page is made up of the Manifold menu, an optional Feature section, a library view of Projects, followed by a navigation menu and the instance Footer. The Feature and Footer sections are beyond the scope of this page and are considered, respectively, in the [Features](../docs/backend/features.md) and [Footer](../docs/administering/configuring/properties.md#footer) documentation.

Out of the box, the library view on the Home page displays a maximum of sixteen Projects, ordered alphabetically by title under a heading that reads “Our Projects.” 

Alternatively, those users who are maintaining an instance can employ [Project Collections](../backend/project_collections.md) to control which Projects are displayed on the Home page and how they are ordered and grouped. Thus it is possible to portion out the Manifold landing page by theme, around specific events or conferences, current events, or as a means to suggest materials to readers they may not have otherwise considered to be of interest.

### Projects

The **Projects** pages displays, as the name suggests, all of the Projects in an instance in a paginated view. Using the search field and two dropdown comboboxes beside the page heading, readers can search for specific Projects, sort the listings alphabetically by title, or filter Projects by [Subject](../administering/configuring/project_subjects.md) or [Featured Status](../backend/projects.md#featured).

:::tip Share Your View
Sorting Projects with using dropdowns creates a stable URL that can be shared so others can land on the page with the same results.
:::

### Journals

Like the Projects page, the **Journals** library view displays a paginated listing of all the Journals on the instance. Each listing includes the Journal Title, Background Image, Description, and a listing of the eight issues most recently added to the journal, followed by a link reading “See All Issues”  that takes a user to the Manifold landing page for that Journal.

### Reading Groups

The **Reading Groups** menu link opens onto a view that lists all of the instance’s *public* Reading Groups. This providers users the means to quickly review those Groups that are openly available for them to join.

The Reading Group listings can be searched and sorted. The search and dropdown combobox to perform those tasks are displayed before the Reading Group list on the right. For more on the available sorting options, see the [Reading Groups documentation](../using/reading_groups.md).

#### Versus “My Reading Groups”

The Reading Group link in the Manifold menu differs from the “My Reading Groups” link that appears in the user/avatar dropdown menu in one respect: the latter takes a user to a more personalized listing of just those Reading Groups that user is a member, some of which may be private.

The tabs atop the Reading Group listings in either space allows a user to quickly change from one view to the other, moving from the My Reading Groups subpage to the Public Reading Groups one.

## Library Navigation

For users who have logged into the instance, there appear on every Library and Project landing page, just before the Manifold footer, five navigation links labelled **Projects**, **Journals**, **Project Collections**, **My Starred**, and **My Notes**.

The first two links—**Projects** and **Journals**—mirror the links of the same names in the main Manifold menu and direct readers to the all Projects and Journals views described above. The behavior of the remaining links works as follows:

:::note Missing Links?
Links to **My Starred** and **My Notes** *only* appear after logging in; users who aren’t logged into the instance will see only navigation links for **Projects**, **Journals**, and **Project Collections**.
:::

### Project Collections

The **Project Collections** link takes the user to a paginated view of all “visible” Project Collections, instead of just those chosen to appear on the Home page. Visit the [Project Collection documentation](../backend/project_collections.md) for more about Project Collections and their visibility settings.

### My Starred

Selecting **My Starred** from the navigation menu opens a view onto all the content a user has collected into their My Starred Group. The idea is for this page to function as a shortcut for users to quickly navigate to the content on the instance in which they are most interested.

Starred items in this space are grouped into buckets that reflect their nature: **Projects**, **Texts**, **Text Sections**, **Resource Collections**, and **Resources**. Unlike the homepage for a Reading Group, it is not possible to reorder or add context to the materials gathered here.

See the [Collecting section](../using/collecting.md) for more on how content is Starred and collected. The [Reading Group documentation](../using/reading_groups.md) will likewise offer some insight on how Starred content functions in that context.

### My Notes

The link to **My Notes** opens a view for a user to see all their Annotations, Comments, and Highlights across an entire Manifold instance in one place. These engagements are displayed in a paginated list and include results from all Reading Groups, public and private.

Users can filter the displayed results by Text using the dropdown combobox field that appears atop the list.

## Search

The magnifying glass icon in the Manifold menu opens a search bar that allows readers to look for specific content across an entire instance. Manifold searches support phrasal and keyword inputs as well as negations:

Users can search for specific phrases enclosed in quotation marks to look for exact matches in runs of text (e.g., `"fear is the mind killer"`). It is also possible to combine the quotation-mark operators with negations by appending a minus sign before elements and phrases to be omitted from the results (e.g., `-negate -this keep that` or `-"no to all of this"`). In practice this means it’s possible to search for `"fear is" -"fear itself"` to get results from Frank Herbert’s *Dune* (“fear is the mind killer”) but not Roosevelt’s speech.

Quoting a phrase will still apply stemming, thus Manifold takes into account misspellings, ignores cases, etc. When negations are employed, they follow the NOR paradigm instead of NAND. If a search includes `-apples -bananas`, Manifold will exclude results that mention apples or bananas instead of excluding results that only include both apples and bananas.

:::tip Search Not Working?
Are you searching for something you know is in the system but you’re not getting any results? That’s likely because Projects in Draft status are *not* indexed by Manifold’s search engine, Elasticsearch. Once the Project is toggled out of Draft, the system will index its content and make it available to search (see [Project Properties](../backend/projects.md#draft-mode)).
:::