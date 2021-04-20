---
id: resource_collections
title: Resource Collections
sidebar_label: Resource Collections
---

import Spec from "@theme/Spec";
const defaultImageFormats = "GIF, JPEG, JPG, PNG";

## About

Resource Collections are manually curated groupings of Resources that can be configured to appear in the `Resources` Content Block on a Project’s landing page and which can be placed as annotations on Texts in the Reader. Resource Collections are also alloted a library page of their own within the project.

```shell title="Resource Collection Page"
https://{domain-name}/projects/{project-slug}/resource-collection/{collection-slug}
```

## Interface

<Spec
    title="Accessing this view"
    items={[
        { key: "Backend Location", value: "Projects → {Project} Thumbnail → Resource Collections Sidebar" },
        { key: "Required User Role", value: "Admin, Editor, Marketeer, Project Creator, or Reader with Editor Permissions" },
    ]}
/>

### Header

The header for the Resource Collections view is the same as for all other Project-level Sidebar items, denoting the title and subtitle of the Project along with buttons to `Preview` or `Delete` it.

When individual Resource Collections records are accessed, the header adjusts to the context, changing the functionality of those buttons: `Preview` opens the Resource Collection’s library page, instead of the Project homepage, and `Delete` removes the specific Resource Collection from the system, versus deleting the entire Project.

### Sidebar

The Sidebar’s `Resource Collection` menu opens a view where new Resource Collections can be added to the Project and existing Resource Collections can be searched through and sorted in a paginated list. When an individual Resource Collection record is accessed, the Sidebar will display new options specific to that Resource Collection, described fully in [Settings and Fields](../backend/resource_collections.md#settings-and-fields) below.

### Editing Pane

The Resource Collections’ editing pane is made up of a search bar followed by a button to create a new Resource Collections, labeled `⊕ Add a New Collection`, which is followed by a list of the Project’s existing Resource Collections.

Each Resource Collection listing includes their title, the number of Resources in the Collection, and the date the Resource Collection was created.

## Search

The search bar accepts keyword searches only and no search operators. Results are displayed below in the Resource Collection list. Within the search bar are two buttons: `Reset` and `Options`. The `Reset` button clears the search bar and resets the returned listings. The `Options` button brings up a sorting dropdown to order the search results alphabetically.

## Creating Resource Collections

The `⊕ Add a New Collection` button changes the view, bringing up the New Collection page, where Resources Collections are created. This creation page contains three fields: `Title`, `Description`, and `Cover Image`. The only field required to create the Collection is `Title`, and all fields on this page can be modified after the Collection is created. 

The [Settings and Fields](../backend/resource_collections.md#settings-and-fields) section below describes these and all the other fields pertaining to Resource Collections.

## Settings and Fields

Each Resource Collection has its own discrete settings that are configurable and which can be accessed when you select a Collection from the Editing Pane. Doing so transforms the view, alters the functionality in the header (see [Interface](../backend/resource_collections.md#interface)), and makes available a Resource-specific sidebar with the following options.

### General

The `General` sidebar allows you to modify the Collection’s `Title`, `Description`, `Slug` and `Cover Image`.

- **Title**. This is the display name of the Resource Collection. It appears under the Resource Collection thumbnail in the left margin of the Reader when the Resource Collection is placed as a Text annotation, in the Resource Collection modal window in the Reader, in the Resource Collection library and detail pages, and in the `Resources` Content Block.

	The value in this field is also baked into the metadata that Manifold shares with other systems, crawlers, and social media platforms.
	
	This field ***does not*** accept Markdown formatting.

- **Description**. This is a Markdown-enabled field meant to capture an account of the Resource Collection. The description is rendered on the Resource Collection’s library page and in a Manifold Reader modal when the Collection is placed as annotation on a Text.

	The value in this field is also baked into the metadata that Manifold shares with other systems, crawlers, and social media platforms. If no description is entered, Manifold will instead share the copy from the `Default Page Description` (see [General Settings](../administering/configuring/properties.md#)).

- **Slug**. A Resource Collection slug appears as the final component of the the URL for its library page: 

	```html
	https://{domain-name}/projects/{project-slug}/resource-collection/{collection-slug}
	```

	If left blank, the system will automatically create a slug for each new Resource Collection based on its title.

- **Cover Image**. Resource Collections are alloted a larger visual identity in the `Resources` Content Block than individual Resources. In that space, Resource Collections appear as rectangular thumbnails with a landscape orientation over individual Resources that display with square thumbnails.

	When this field is left blank, Manifold will supply a generic graphic for Resource Collections.

	Custom images can be dropped onto this field or selected using your device’s file system by clicking the `Upload a File` link.

 	Manifold shares Collection cover images with other systems, crawlers, and social media platforms.

	<Spec
	    title="Cover Image Attributes"
	    items={[
	        { key: "Dimensions", value: "9:4 ratio" },
	        { key: "Format", value: defaultImageFormats },
	    ]}
	/>

### Resources

This view provides a means to search or manually paginate through a listing of ***all*** the Project’s Resources. Each listing includes the Resource’s title, kind, creation date, and a toggle that, when activated, brings the Resource into the Collection.

The search bar accepts keyword searches only and no search operators. Search results display beneath in the list. Within the search bar are two buttons: `Reset` and `Options`. The `Reset` button clears the search bar and resets all of the filters. The `Options` button brings up two search filters and a sorting field to order the results.

The search filters, `Select a tag` and `Select a type`, are dropdown fields that surface lists of tags or Resource types (e.g., Image, Video) that are associated with existing Resources in the Project. Only one listing from each dropdown filter can be selected at a time. These filters can be used in conjunction with a keyword search or without, thereby filtering all Project Resources by tag and/or type.

The `Order Results` dropdown has options to sort matching results alphabetically by title or by the order in which Resources were added to the Project.
