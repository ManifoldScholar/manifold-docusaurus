---
id: project_collections
title: Project Collections
sidebar_label: Project Collections
---

import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
Users logged in with **Admin**, **Editor**, or **Marketeer** accounts can create new and modify existing Project Collections in the Manifold backend.

To access the views described in this section select **Projects** from the main menu and then the **Project Collections** submenu listing.
:::


## What are Project Collections?

Project Collections group Projects with one another on an instance’s homepage in a named container that might also include collection-specific imagery and descriptions. When Project Collections are used, they override the default “Our Projects” library view from the Manifold homepage. Each Project Collection has its own landing page and, as a whole, Collections appear on a page alongside all of the instance’s Project Collections. These are located on the following paths, respectively:

``` bash title="1. Individual Project Collection Page"
https://{domain-name}/projects/project-collection/{collection-slug}
```

```bash title="2. All Project Collections"
https://{domain-name}/projects/project-collections
```

## Interface Overview

The Project Collection view is composed of two parts: the sidebar and an editing pane that includes a header, which renders different options based on context.

#### Sidebar

The sidebar displays a list of all existing Project Collections on the instance and a button to create new ones.

Each entry on the sidebar list includes the title of the collection, the number of projects contained within the collection, a visibility button, and drag bars.

The title, visibility button, and drag bars are all selectable from this list by mouse or keyboard, using the tab key and space bar.

Selecting the title of a collection will open its contents and settings in the editing pane in the main body of this page.

Activating the eye icon will hide the collection from *all* frontend views. When hidden, the eye icon will be shown with a diagonal slash across it. This button *does not* affect whether or not a Collection appears on the homepage—that is configured separately in the Collection’s settings.

Appearing as two parallel, horizontal lines, you can use these “drag bars” to adjust the display order of the Collections (for both the home and Collections pages), either by clicking and dragging an entry with your mouse or by pressing the space bar and then either the up or down arrow keys on your keyboard.

Beneath the list of Collections is the **Create New Collection** button that opens a drawer from the right of the screen will a number of fields you can use to define the parameters of your new Project Collection.

#### Editing Pane

The editing pane displays a header with the Collection’s title and contextual buttons to adjust its settings. For Manual Collections, the header also includes a button to manage which projects are part of the Collection.

When you click **Settings**, a drawer will open from the right of the screen with a number of fields that allow you to configure the Collection. The function of these fields are described in the following sections.

The **Manage Projects** button only appears in the header of Manual Collections. Selecting this button opens a drawer from the right where you can search or page through all the projects contained in the instance and manually add them to the collection with your mouse or keyboard.

Below the header, the **Order Collection By** dropdown determines how the projects in the Collection are ordered (e.g., by creation date, title). Manual Collections include a switch that makes its possible for you to bypass the pre-defined sorting categories and order the collection manually with your mouse or keyboard.

A view of all the Projects in the Collection follows below the ordering options. Manual Collections will show as a vertical list that you can scroll from top to bottom in a single view. Smart collections will show Projects in a paginated grid. Selecting a project from this view takes you to that Project detail page.

## General Collection Settings

The settings in this section are common to both Manual and Smart Collections.

### Collection Title

This title appears in library views at the top of the Collection beside the (optional) Collection Icon. This field is presently limited to plain text and does not accept Markdown or HTML syntax. A title is required to save a new Collection.

### Manual or Smart Collection

Manual Collections allow you to directly pick and choose projects to add to a Collection using your mouse or keyboard. Smart Collections rely on you to set parameters the system will use to automatically populate and update the Collection.

Most Collection settings are shared by both Manual

Manifold updates the list of Projects in Smart Collections every fifteen minutes. Adjusting and saving new settings to a Smart Collection will immediately refresh the cache of Projects in that collection.

### Slug

The slug appears as the last component of the URL for the Collection’s homepage:

``` bash
https://{domain-name}/projects/project-collection/{collection-slug}
```

If left blank, Manifold will adapt the Collection’s title to suit as the slug.

### Description and Short Description

These two fields provide an opportunity to associate descriptive copy with the Collection. When both are used, text associated with the **Description** field *only* appears on the collection’s homepage, and thus is meant to serve as the full, robust description of the collection. The **Short Description**, alternatively, only appears in library views and is meant to draw a reader in with only a few brief lines. If only one field is supplied with copy, that text will appear in both library views and on the Collection homepage.

Copy associated with the **Description** or **Short Description** renders below the Collection title. Both of these fields accept Markdown syntax.

### Hero Image and Layout

The Collection Hero is an image that provides a visual identity to Collections in library views. Image files can be dropped onto the **Hero Image** field or selected using your device’s file system by clicking the **Upload a File** link.

The Hero will render according to your selection under **Hero Layout** as follows:

- **Square Inset**. Rendered as a square, the Hero will appear to the left of both the Collection Title and Description.
- **Wide Inset**. Matching the width of the library container, the Hero will appear between the Collection Title and Description.
- **Full Bleed**. The width of the hero will adapt to match the size of browser or viewport.

<Spec
    title="Collection Hero Specs"
    items={[
        { key: "Square Inset Width", value: "340 px" },
        { key: "Wide Inset Width", value: "1135 px" },
        { key: "Full Bleed Width", value: "Responsive" },
        { key: "Height (for all layouts)", value: "340 px" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>

### Visible

This toggle controls whether or not the Collection appears on the Manifold frontend. In the off position, the Collection will not appear on either the home or Collection pages. When toggled on, the Collection will appear ***only*** on the Project Collections page.

### Show on Homepage

This toggle promotes Collections that are visible (see above) to the instance’s homepage. It is not possible to have a Collection appear only on the homepage and not on the Collection page.

There is no artificial limit to the number of Collections that can appear on the homepage, but the more Collections that appear, the slower the page will be to load.

### Collection Icon

Manifold includes seven system icons you can choose from to associate with the Collection’s title in library views: a stack of books laying flat, a lamp, a “New” badge, three books standing with spines out, a globe, a pointing finger, and a mug.

The Collection Icon is optional and can be selected (or deselected) using your mouse or keyboard.

The Collection Icon is overridden by the Custom Icon when present.

### Custom Icon

Functionally the same as the Collection Icon, a Custom Icon gives you the option to upload your own icon image file instead of using a system one.

Icon files can be dropped onto the **Custom Icon** field or selected using your device’s file system by clicking the **Upload a File** link.

<Spec
    title="Custom Icon Specs"
    items={[
        { key: "Width", value: "60 px" },
        { key: "Height", value: "60 px" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>

### Social Card Image, Title, and Description

When sharing the URL for a Collection’s homepage, Manifold includes Open Graph metadata that social media platforms display in posts as ”cards”. Cards are made up of an Image, Title, and Description.

Images should be prepared in an 8:5 ratio. When the **Social Card Image** field is left blank, Manifold will supply the Collection Hero image in its place, or, if there is no Collection Hero, the instance’s [Header Logo](../administering/configuring/theme_settings.md). Image files can be dropped onto the field or selected from your device’s file system using the **Upload a File** link.

By default Manifold will forward the Collection Title as the **Social Card Title** unless a custom value is supplied. Likewise, Manifold will supply text from the collection’s Description to third party systems when **Social Card Description** field is left blank. If the Collection also has no description, the system will use the [**Default Page Description**](../administering/configuring/properties.md).

Markdown formatting ***is not*** honored in Open Graph metadata. Coding syntax will render as plain text in social media cards.

<Spec
   title="Social Card Image Specs"
   items={[
       { key: "Width", value: "640 px" },
       { key: "Height", value: "400 px" },
       { key: "Format", value: defaultImageFormats },
   ]}
/>

## Settings Specific to Smart Collections

The following settings are only available to Smart Collections. Each serves as a filter the system uses to create and maintain the roster of Projects in the Collection. Only those Projects that match ***all*** the set criteria are included in the Collection.

### Number of Projects

By default, Manifold caps the number of Projects the system will ***display*** in a Collection to eight. Projects that meet the Collection’s inclusion criteria beyond that limit are still indexed as part of the Collection; however only those eight that match the **Order Collection By** sorting filter (see [Editing Pane](../backend/project_collections.md#editing-pane) above) will render in library views.

You can adjust the default limit higher or lower here—we recommend by fours, since the library view spans four Projects—***or*** you can remove the limit entirely by clearing the number from this field and saving it blank.

### Featured Projects

This toggle limits the Collection to accepting just those Projects that have been marked as [**Featured**](../backend/projects.md#featured).

### Show Projects with These Subjects or Tags

These two dropdowns surface existing Subjects and Tags to limit which projects are accepted into the Collection. You can nominate multiple Subjects or Tags as filters.

Existing filters appear below the respective dropdown and can be removed as Collection criteria from that space with your mouse or keyboard.




