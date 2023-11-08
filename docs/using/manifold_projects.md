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

The Activity block displays on tiles the last six activity records for the Project. Activity records announce when new Texts and Resources are added to the Project. If a Project contains more than six activity records, users will be shown a button that links to the full, paginated list of activity on a separate screen.

:::caution Twitter/X Support Discontinued
Twitter/X functionality is deprecated in Manifold version 8 and will be removed entirely in version 9. It is no longer possible to bring Tweets into the Recent Activity content block.
:::

## Resources

The Resources block renders a teaser of the ten most recently updated Resources on a Project, accompanied by a link to the Resource Library for that Project as well as the total number of Resources on the Project. This block can also list each of the Project’s Resource Collections.

When a reader selects an individual Resource, they will be taken to the Resource page, where all the contextual and metadata information is provided alongside the Resource.

A Resource Page is where a Resource is displayed in full: descriptive and accessibility information are provided alongside associated metadata; if possible, the content is rendered or made available in a player; and options to download and share the Resource are provided if the Project Creator has the necessary permission to do so. Resources, like Texts, are also available for discussion on the platform. Here on the Resource Page, a reader can comment and discuss the Resource publicly (comments to Resources cannot be made private).

:::note
For backend users interested in learning how to prepare Resources for Manifold, the [Resource](../backend/resource.md) and [Resource Collections](../backend/resource_collections.md) sections will be useful.
:::

## Resource Collections

Resource Collections are groupings of Resources that can be used to orient a reader around certain themes or as a means to place a series of Resources onto a Text with one insertion.

:::note
For details on how to place a Resource or Resource Collection in a Text, see the [Reading Manifold](../using/reading_manifold.md#resources) section.
:::

Resource Collections appear and take display precedence in the Resources blade of a Project’s landing page, where you are able to access and engage with their individual contents.

## Texts

The Texts block lists some or all Texts associated with the Project. The Texts that are included in the list can be filtered to only include Texts from one or more categories. The block can be configured to include or exclude author names, subtitles, dates, descriptions, and cover images in the output. The list can also be configured to group Texts by category.

:::note
Discussion on how backend users can add and curate Texts is considered in the [Texts](../backend/texts.md) section.
:::
