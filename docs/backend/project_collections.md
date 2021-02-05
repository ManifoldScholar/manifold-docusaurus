---
id: project_collections
title: Project Collections
sidebar_label: Project Collections
---

import Spec from "@theme/Spec";

## About

Project Collections group and associate Projects with one another on your instance’s homepage, overriding the default “Our Projects” library view from that space. Collections also appear in two other places on the frontend:

```bash title="1. A page gathering all Project Collections"
https://{domain-name}/projects/project-collections
```

``` bash title="2. A page specific to each individual Project Collection"
https://{domain-name}/projects/project-collection/{collection-slug}
```

## Interface

<Spec
    title="Accessing this view"
    items={[
        { key: "Backend Location", value: "Projects → Project Collections" },
        { key: "Required User Role", value: "Admin, Editor, or Marketeer" },
    ]}
/>

### Sidebar

The sidebar displays a list of all existing Project Collections on your instance and a button to create new ones.

Each entry on the sidebar list includes the title of the collection, the number of projects contained within the collection, a visibility button, and drag bars.

The title, visibility button, and drag bars are all selectable by mouse or keyboard from this list with a click or by pressing the space bar, respectively.

- **Title**. Selecting the title of a collection will open its contents and settings in the main body of this page.
- **Visibility**. Activating the eye icon will hide the collection from *all* frontend views. When hidden, the eye icon will be shown with a diagonal slash across it. This button *does not* affect whether or not a Collection appears on the homepage—that is configured separately in the Collection’s settings.  
- **Drag Bars**. Appearing as two parallel, horizontal lines, you can use these to adjust the display order of the Collections, either by clicking and dragging an entry with your mouse or by pressing the space bar and then either the up or down arrow keys on your keyboard.

Beneath the list of Collections is the `+ Create New Collection` button that opens a drawer from the right of the screen will a number of fields you can use to define the parameters of your new Project Collection.

### Body

The main body of the page displays a header with the Collection’s title and buttons to adjust its settings. For Manual Collections, the header also includes a button to manage which projects are included in the Collection.

Below the header is a dropdown to determine how the projects in the collection are ordered followed by a listing of all the projects in the collection.

## Collection Settings

### Collection Title

The `Collection Title` appears in library views at the top of the Collection beside the (optional) Collection Icon. This field is presently limited to plain text.

### Manual or Smart Collection

Manual Collections allow a user to cherry-pick any project in the project library and add it to the collection.

Smart collections allow users to set certain filters that, when they are satisfied by a project, allow Manifold to automatically include them in a collection. Presently the available filters are a project's status as being Featured, as well as what Subjects and Tags are associated with it.

:::note
Manifold will update the list of projects in smart collections every fifteen minutes. Saving a smart project collection will also refresh the cache of projects in that collection.
:::

### Slug

TKTKTK

### Description

The description field allows a user to orient the reader to the contents of the collection. This field accepts Markdown input, so limited text formatting is possible with bold, italic, and hyperlinks. The text from this field is rendered below the project title and above the first row of project thumbnails on the frontend.

### Hero Image

TKTKTK

### Hero Layout

TKTKTK

### Visible

The visible slider enables the user to create a collection and toggle whether or not readers can access it from the frontend. If toggled off, the collection won't appear on the homepage or on the object Collections page. If toggled on the collection will appear only on the Project Collections page. See below for how to make a collection appear on the homepage.

:::note
On the Project Collections page, only one row of projects will display before a link to view the full collection is provided. Each row can contain up to four projects.
:::

### Show on Homepage

This toggle allows users to showcase their collection on the instance's homepage, so long as it is also toggled to be visible. It is not possible to have a project collection appear only on the homepage and not on the Project Collection page.

:::note
There is no artificial limit to the number of Collections that can appear on the homepage, but the more Collections that appear, the longer a reader will need to scroll and the slower the page will be to load. Conversely, if only one Collection is marked to show on the homepage, only that Collection will appear on the homepage, regardless of how many Projects your instance contains.
:::

### Collection Icon

When a new collection is created a user must select one of the available icons to associate with it. It is not possible to customize or add new icons to the system at present. The collection icon will sit beside the collection title on the fronted.

Once saved, this new manual collection will be empty. To populate it with titles see the section on Adding and Removing Projects from an Existing Collection.

### Custom Icon

TKTKTK

### Social Card Image

TKTKTK

### Social Card Title

### Social Card Description

<!-- ONLY FOR SMART COLLECTIONS -->
### Number of Projects

### Featured Projects

The Featured Projects slider is a filter that allows a user to limit a collection to only those projects that have been marked as being Featured. Enabling this slider does not prohibit other filters from also shaping the contents of the collection. Thus it is possible to have a collection made up of only featured projects that also have a specific Subject or Tag associated with them.

### Show Projects with These Subjects

The Subjects field allows a user to type and then select from the list of established Subjects in the instance to use as filters to determine which projects are included in the collection. For example, if there is a `History` subject in the instance, and it is selected here, only those projects that have been associated with `History` will appear in the collection.

More than one subject can be included in the collection criteria, and they can be paired further with the Featured Projects field, and project Tags, also described in this section.

To remove a subject from the criteria, simply click the `x` beside its name below the `Add a Subject` button.

#### Show Projects with These Tags

The Tags field allows a user to type and then select from the list of Tags being used in the instance to use as filters to determine which projects are included in the collection. For example, if there is a tag for `australia` in the instance, and it is selected here, only those projects that have been associated with `australia` will appear in the collection.

More than one Tab can be included in the collection criteria, and they can be paired further with the Featured Projects field, and project Subjects, also described in this section.

To remove a tag from the criteria, simply click the `x` beside its name below the `Add a Tag` button.


<!-- OLD / SCRATCHPAD 

## Modifying Existing Project Collections

The Project Collections page will display a list of existing collections on the left sidebar. The sidebar displays the collection's title, number of projects in the collection, a toggle to quickly change its homepage visibility status, and a handle to manually adjust the order of their appearance on both the home and collection pages by dragging and dropping.

To adjust the collections further, or to delete a collection outright, click on a collection title. Doing so will display a grid of those projects in the collection with a header to adjust its settings.

### Adjusting a Collection's Settings

When you click on a collection's `Settings` button, a drawer will open from the right allowing you to modify all of the fields that were set when the collection was originally created. Additionally there are options to delete the collection or adjust its slug as it appears on the collection page (e.g., `https://{instance-name}/projects/project-collection/read-next`).  

:::note
If you have shared the URL to a collection and then change its slug, the original link to the collection page will no longer work.
:::

### Ordering Projects within Collections

When a collection is selected, a user can adjust how the projects within the collection are sorted and displayed for readers through two means: a dropdown that offers four sorting options (Newest, Recently Updated, as well as forward and backward alphabetization) and the `Order Manually` slider.

The `Order Collection By` dropdown is available for both Manual and Smart Collections. From this dropdown a user can choose to order projects in the collection by four different criteria:

- **Newest**. Newest titles are those that have been most recently added to the instance and not the collection, specifically.
- **Recently Updated**. This speaks to the date a project has been modified with the addition or a new text, resource, or added/updated metadata.
- **Title A–Z**. Ordering the projects alphabetically by title.
- **Title Z–A**. Reverse alphabetical order of the projects by title.

This dropdown works in conjunction with the `Projects Visible` field, allowing users to, say, create a collection of eight most recently updated projects in a certain subject area.

For Manual Collections an `Order Manual` slider is available. If activated the `Order Collection By` dropdown will disappear and a user can reorder the projects within the collection manually by dragging and dropping them with their mouse.

### Adding and Removing Projects from an Existing Collection

To add projects to a Manual collection, select the collection from the sidebar and then click the `Manage Projects` button beneath its name. A drawer will slide open from the right, showing a paginated view of all the projects on the instance.

From this view projects can be added to the collection by clicking on the green plus sign beside their thumbnail. The green plus sign will then turn to a blue checkmark. Conversely, projects that have been added can be removed by clicking on the blue checkmark.

Users can scroll through this paginated view to review which projects to add or use the search bar to find those of interest more directly.

To add or remove projects from a Smart Collection, a user needs to adjust the filters by which the system is evaluating projects for inclusion in the collection.

 -->