---
id: openGraph
title: Open Graph Content
sidebar_label: Open Graph Content
---

import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

The [Open Graph protocol](https://ogp.me/) makes it possible to display basic information about Manifold content in inviting ways on social media platforms.

When someone shares a URL for a project collection, journal, project, journal issue, or an individual text or journal article over social media, those social platforms will extract Open Graph metadata from Manifold and display that information in their feeds as “cards.”

Cards are typically made up of a **Title**, **Description**, and **Image**. In the following backend spaces, there are fields corresponding to those elements. Those fields allow you to choose which information and images appear on social platforms where readers share Manifold content:

- [Project Collections](../backend/project_collections.md#open-graph)
- [Projects and Journal issues](../backend/projects.md#open-graph)
- [Journals](../backend/journals.md#open-graph)
- [Texts and Journal articles](../backend/texts.md#open-graph)

The individual sections above provide valuable information about specific use cases. In this section, we will cover the Open Graph options more generally:

The **Open Graph Title** field is meant to broadly describe the content being shared. Where possible, it is preferable to keep the title to no more than 60 characters (including spaces).

In contrast, the **Social Card Description** field can be thought of as brief summary of the element being shared. Best practice recommends keeping this description to 160 characters or less (including spaces).

The **Social Card Image** will appear immediately adjacent to the Title and Description and should be reflective of the content being shared. Image files can be dropped onto the field or selected from your device’s file system using the **Upload a File** link.

<Spec
   title="Open Graph Image Specs"
   items={[
       { key: "Width", value: "1200 px" },
       { key: "Height", value: "630 px" },
       { key: "Ratio", value: "1.91:1" },
       { key: "Format", value: defaultImageFormats },
   ]}
/>

:::note Avoid Markdown Syntax
Markdown formatting ***is not*** honored in Open Graph metadata. Coding syntax will render as plain text in social media cards.
:::