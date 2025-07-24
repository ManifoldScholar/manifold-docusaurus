---
id: manifold_projects
title: Manifold Projects
sidebar_label: Manifold Projects
---

## Landing Page

Projects in Manifold operate as containers the way books do on a shelf—only in Manifold, they contain not only the main Text but also, potentially, draft and ancillary Texts, supplemental media Resources, as well as reader engagements with those materials.

Each project has its own landing page, made up of the Content Blocks described later on this page. Some Projects may only have one block, others may use a good deal more.

By default—and design—Manifold Projects are agnostic about the kinds of content they contain. Projects are meant to be modular and adaptable through the creative use of Content Blocks. For content that is serial in nature and requires more specialized structures, it is possible for backend users to transform the shape of a Project into a Journal Issue. See the [Journals section](../backend/journals.md) to learn more.

:::note
If you are a backend user, instructions on how to manage content blocks are detailed primarily in the [Layout](../backend/projects.md#layout) section, though the [General](../backend/projects.md#general) section will also be of use.
:::

### Hero Block

The Hero block is meant to orient the reader to what the Project is about and how to engage with it. Beyond providing a space for display elements such as the Project’s [title](../backend/projects.md#title-and-subtitle), [description](../backend/projects.md#description--images), and [attributions](../backend/projects.md#people), it can also be used to connect to related engagements in the [social media](../backend/projects.md#social-links) sphere, suggest [points of entry](../backend/projects.md#calls-to-action) to specific elements of the Project, as well as provide related downloadable materials.

### Markdown Block

The Markdown Block allows editors to create sections of markdown content on a Project page. Possible uses of this block include adding additional descriptive text about the Project or supplemental textual or audio/visual content that speaks its origins, how to engage or navigate it, how it may be related to current events or conferences, or if it is associated with any specific grants or funding sources.

## Project Metadata

The Project Metadata block will render metadata about the Project in three columns. The metadata in this block speaks to the Project as a whole, instead of metadata specific to certain Texts or Resources, which appears adjacent to those materials.

:::note
The [Metadata](../backend/metadata.md) section serves as a good introductory primer to the individual metadata fields available on the platform.
:::

## Activity

The Activity block displays as tiles the last six activity records for the Project. Activity records announce when new Texts and Resources are added to the Project. If a Project contains more than six activity records, users will be shown a button that links to the full, paginated list of activity on a separate screen.

## Resources

The Resources block renders thumbnails for up to ten Resources, accompanied by a link to access the full Resource library for that Project. This block can also be configured to display some or all the Project’s Resource Collections.

When a reader selects an individual Resource, they will be taken to the Resource’s detail page. A Resource detail page displays the Resource alongside its caption, description, and other pertinent metadata. When possible, the Resource is rendered in the browser in this space. Each Resource detail page includes an option to share the Resource using your device’s sharing menu. And Project Creators can likewise make Resources available for download when they have the necessary permissions from the rights holders to do so.

Resources, like Texts, are also available for discussion on the platform. On the Resource detail page, beneath the **Comments** heading, a reader can leave their remarks about the Resource publicly—comments to Resources cannot be made in private.

Further, beneath the **Annotations** heading, the system will display a list of each place the Resource in question has been attached to a particular section of text associated with the Project. This provides Readers a pathway to enter a text from a specific Resource or to navigate between sections of one or various texts, by moving from a placed Resource to its detail page and then out to another space where it has been placed.

:::note
For backend users interested in learning how to prepare Resources for Manifold and understand which will display natively in the browser, the [Resource](../backend/resource.md) and [Resource Collections](../backend/resource_collections.md) sections will be useful.
:::

## Resource Collections

Resource Collections are groupings of Resources that can be used to orient a reader around certain themes or as a means to place a series of Resources onto a Text with one insertion.

Resource Collections each have their own landing page, where any description for the collection is shown alongside carousel and library views of Resources in the collection. Resources in the collection can be sorted by name or creation date, by kind (Image, Audio, etc.) and by tag. Resources and their captions will display in the carousel on this page, when possible (or else be supplanted by a default cover image), with a link to investigate the individual Resource on its own detail page.

Like individual Resources, beneath the **Annotations** heading, readers can see a list of where the Resource Collection (as a whole) has been placed in a text associated with the Project.

:::note
For details on how to place a Resource or Resource Collection in a Text, see the [Reading Manifold](../using/reading_manifold.md#resources) section.
:::

## Texts

The Texts block lists some or all Texts associated with the Project. The Texts that are included in the list can be filtered to only include Texts from one or more categories. The block can be configured to include or exclude author names, subtitles, dates, descriptions, and cover images in the output. The list can also be configured to group Texts by category.

:::note
Discussion on how backend users can add and curate Texts is considered in the [Texts](../backend/texts.md) section.
:::
