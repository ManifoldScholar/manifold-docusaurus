---
id: resource
title: Resources
sidebar_label: Resources
---

import Spec from "@theme/Spec";
const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
Resources are specific to and contained within Manifold Projects. Resources are added and managed in the backend through a Project’s **Resource** sidebar.

Users with **Admin**, **Editor**, or **Marketeer** roles can manage Resources for any Project in an Instance. **Project Creators** can only add and edit Resources for those Projects they have created. Users with the default **Reader** role don’t have access to the backend by default but can be given permission to modify specific Projects and their Resources on a one-off basis (see [Users](../backend/users.md) and [Managing Access](../backend/projects.md#managing-access)).
:::

## What Are Resources?

Resources are media that support and contextualize a Project’s Texts or function as objects of inquiry, discussion, or exploration unto themselves. Resources can annotate a Project’s Texts in the Reader; display in the `Resources` Content Block on the Project landing page, where they can also be curated into Resource Collections; are collected into a library view within the project; and are individually allotted their own detail page:

```shell title="Resource Collection Page"
https://{domain-name}/projects/{project-slug}/resource-collection/{collection-slug}
```

```shell title="Resource Library Page"
https://{domain-name}/projects/{project-slug}/resources
```

```shell title="Resource Detail Page"
https://{domain-name}/projects/{project-slug}/resource/{resource-slug}
```

Resources are tied to individual Projects and can be added to a Project one at a time or in bulk. When a Project is exported, Manifold includes all of a Project’s Resources that it hosts in the export package (see [Exporting and Preserving](../backend/projects.md#exporting-and-preserving)).

Currently Manifold supports ten different Resource kinds:

#### Image

Images are static visual elements, with the notable exception of animated GIFs. Photographs, paintings, drawings, diagrams, maps, graphs, charts, musical examples are all examples of Images.

<Spec
    title="Image Attributes"
    items={[
        { key: "Format", value: defaultImageFormats },
        { key: "Filesize", value: "Less than 10 mb (suggested)" },
        { key: "Variants", value: "High Resolution Image, Thumbnail Image" },
    ]}
/>

#### Video

Video files can be uploaded into the native Manifold video player, and the application can source content hosted on YouTube of Vimeo for direct play. Manifold supports five video formats, two of which are playable directly in the browser; videos that cannot be played in the browser can be made available to readers for download.

<Spec
    title="Video Attributes"
    items={[
        { key: "Upload Formats", value: "MP4, WEBM, FLV, MOV, AVI" },
        { key: "Formats Playable in Browser", value: "MP4, WEBM" },
        { key: "Filesize", value: "Less than 100 mb (suggested)" },	        
        { key: "Streaming Formats", value: "YouTube, Vimeo" },
        { key: "Variants", value: "Variant 1, Variant 2, Poster Image, Thumbnail Image" },
    ]}
/>

#### Audio

Audio files can be uploaded into the native Manifold audio player in the MP3, FLAC, and WAV formats. OGG and OAA files can also be loaded, but they won't be playable in the browser, only available for download.

<Spec
    title="Audio Attributes"
    items={[
		{ key: "Upload Formats", value: "MP3, FLAC, WAV, OGG, OGA" },
		{ key: "Formats Playable in Browser", value: "MP3, FLAC, WAV" },
        { key: "Filesize", value: "Less than 100 mb (suggested)" },			
		{ key: "Variants", value: "Variant 1, Variant 2" },
    ]}
/>

#### File

Files can be of any type and are not rendered in the browser. They serve as a means to deliver any kind of content as a download. Zip archives and standalone applications are two such examples.

<Spec
    title="File Attributes"
    items={[
		{ key: "Formats", value: "Unrestricted" },
        { key: "Filesize", value: "Unrestricted" },
        { key: "Notes", value: "File Resources do not render in the browser; they are download only." },
    ]}
/>

#### Link

Links reference and direct readers to a location within the application or to a remotely hosted page.

<Spec
    title="Link Attributes"
    items={[
		{ key: "Format", value: "URL" },
    ]}
/>

#### PDF

The PDF Resource is an instance of the File Resource specific to PDFs. PDFs are not rendered in the browser by Manifold, though many browsers support that functionality or allow for add-ons that do. If the browser cannot render the PDF, it can be made available as a download.

<Spec
    title="PDF Attributes"
    items={[
		{ key: "Format", value: "PDF" },
        { key: "Filesize", value: "Unrestricted" },
        { key: "Notes", value: "PDF Resources only render in browsers equipped for that purpose; otherwise they are download only." },
    ]}
/>

#### Document

The Document Resource is an instance of the File Resource specific to Microsoft Word, Open Office documents, and plain text files. Documents are only available as downloads and do not render in the browser.

<Spec
    title="Document Attributes"
    items={[
		{ key: "Formats", value: "DOC, DOCX, TXT, ODT" },
        { key: "Filesize", value: "Unrestricted" },
        { key: "Notes", value: "Document Resources do not render in the browser; they are download only." },
    ]}
/>

#### Spreadsheet

The Spreadsheet Resource is an instance of the File Resource specific to Microsoft Excel and Open Office spreadsheets. Spreadsheets are only available as downloads and do not render in the browser.

<Spec
    title="Spreadsheet Attributes"
    items={[
		{ key: "Formats", value: "XLS, XLSX, ODS" },
        { key: "Filesize", value: "Unrestricted" },
        { key: "Notes", value: "Spreadsheet Resources do not render in the browser; they are download only." },
    ]}
/>

#### Presentation

The Presentation Resource is an instance of the File Resource specific to Microsoft PowerPoint. Presentations are only available as downloads and do not render in the browser.

<Spec
    title="Presentation Attributes"
    items={[
		{ key: "Formats", value: "PPT, PPTX, ODP" },
        { key: "Filesize", value: "Unrestricted" },
        { key: "Notes", value: "Presentation Resources do not render in the browser; they are download only." },
    ]}
/>

#### Interactive

Interactive Resources use iFrames to bring remotely hosted content like interactive maps, data visualizations, and data analysis tools (e.g., Gephi graphs, H5P applications, Shiny packages from R Studio) into Manifold Projects.

<Spec
    title="Interactive Attributes"
    items={[
		{ key: "Formats", value: "URL" },
		{ key: "Variants", value: "Poster Image, Thumbnail" },
        { key: "Notes", value: "Interactive Resources do not render in the browser; they are download only." },
    ]}
/>

## Interface Overview

Consistent with the backend views for Projects, the Resource interface is composed of three parts: a header, a sidebar, and an editing pane.

##3# Header

The header for the Resources view is the same as for all other Project-level Sidebar items, denoting the title and subtitle of the Project along with buttons to **Preview** or **Delete** it.

When individual Resource records are accessed, the header adjusts to the context, changing the functionality of those buttons: **Preview** opens the to the Resource’s detail page, instead of the Project homepage, and **Delete** removes the specific Resource from the system, versus deleting the entire Project.

#### Sidebar

The Sidebar’s **Resource** menu opens a view where new Resources can be added individually or in bulk and existing Resources can be searched through and filtered in a paginated list. When an individual Resource record is selected, the Sidebar will display new options specific to that Resource, described fully in [Settings and Fields](../backend/resource.md#settings-and-fields) below.

#### Editing Pane

To the right of the sidebar, the Editing Page displays a search bar with filtering options to sort through and find one ore more existing Resources that match a set of criteria, below which are options to add new Resources individually or in bulk to the Project, followed by a paginated list of all the Project’s Resources, which can be selected and modified individually.

The search bar accepts keyword searches only and no search operators. Search results display beneath in the Resource list. Within the search bar are two buttons: **Reset** and **Options**. The **Reset** button clears the search bar and resets all of the filters. The **Options** button brings up two search filters and a sorting field to order the results.

The search filters, **Select a tag** and **Select a type**, are dropdown fields that surface lists of tags or Resource types (e.g., Image, Video) that are associated with existing Resources in the Project. Only one listing from each dropdown filter can be selected at a time. These filters can be used in conjunction with a keyword search or without, thereby filtering all Project Resources by tag and/or type.

The **Order Results** dropdown has options to sort matching results alphabetically by title or by the date.

## Adding New Resources

The **Add a new resource** button changes the view, bringing up the New Resource page, where Resources are added to the system individually. This page contains a number of fields, most prominent of which is **Kind**.

The **Kind** field displays as a grid of thumbnails, each thumbnail corresponding to one of the ten different Manifold Resource kinds. The kind of Resource chosen affects which fields follow below. Generally, the system expects a user to choose a Resource kind, provide it a name in the **Title** field, and then use the **File** field to load the Resource file—or, for remotely hosted Resources like **URL** or **Interactive**, supply a URL.

Users cannot proceed beyond this step until a Kind, Title, and File/URL have been provided. Once they have, the system will redirect the user to the Resource Detail Page described in the [Settings and Fields](../backend/resource.md#settings-and-fields) section below.

## Bulk Adding/Updating Resources

Below the search bar, the **Bulk add resources** button brings up a new interface, categorized into a series of steps, where Resources can be added to a Project in bulk or where you can update in bulk those Resources that are already in the Project.

Integration with Google Services is *required* for the bulk add process to work; files intended for upload are fetched from a *publicly viewable* Google Drive folder (see [Integrations](../administering/configuring/integration_settings#google-services)). No other repository integrations are presently supported (e.g., OneDrive, Box, Dropbox).

#### Step 1: Upload

This step provides Manifold with the metadata file it uses to populate the fields for each new Resource it is creating—or to update metadata for existing Resources.

Manifold accepts comma separated files with either TXT or CSV extensions, which can be dropped onto the **Upload a CSV** field or selected using your device’s file system by clicking the Upload a File link.

*Alternatively*, Manifold can source the metadata from Google Sheet that is ***publicly viewable*** when the URL to that sheet is included in the **Google Sheets URL** field.

In either case, uploading a file or referencing a Google Sheet, Manifold expects the data to include column heads corresponding to metadata fields, with each row describing the information about the individual Resources, as in [this template](https://docs.google.com/spreadsheets/d/1wIhuLf09DsbUQ96Cmd8snM0Nq-dYwKp7kYaO6cFyffk/edit#gid=1184586745).

#### Step 2: Describe Data

The next two fields, categorized as Step 2, instruct Manifold how to understand the supplied metadata file.

The first, **Which Row Contains the Column Headers**, is a dropdown with input values ranging from 1–6. The system wants to know the row number where the column headers are in the metadata file. It will scrape the headers from the file for a later step, and knowing where the headers are allow the system to understand where in the sheet the information about the individual Resources begin.

The second field, **Enter the Storage Identifier**, tells Manifold which Google Drive folder from which to secure the Resources named in the metadata file. The system ***does not*** want the URL for the Drive folder; instead, it wants the folder’s identity, which appears as a string of numbers and digits following `folders/` in the URL.

```shell
https://drive.google.com/drive/folders/{storage-identifier}
```

#### Step 3: Map Columns to Resource Attributes

The third step appears in its own view, with two containers, labeled **Spreadsheet Columns** and **Available Attributes** sitting below a button named **Automatically Map Attributes**.

Here the interface displays in the Spreadsheet Column container the header labels it scraped from the metadata sheet in Step 2, beside the system’s metadata attributes in the Available Attributes container.

Listings in the containers appear as ribbons with notches that fit together. Using a mouse to click and drag listings from **Available Attributes** to the **Spreadsheet Columns** container, metadata from the supplied file can be mapped to the appropriate fields in Manifold one by one.

The **Automatically Map Attributes** will attempt to automatically match the attributes from the supplied metadata file to the system attributes, based off the wording of the column heads. Items that aren’t mapped correctly can be manually adjusted.

This interface does not support keyboard controls at this time.

#### Step 4: Import Resources

The last step of the bulk upload process confirms what is being imported. The view includes a scrollable list of all the Resources Manifold is bringing into the project. Each row in this view corresponds to a row from the supplied metadata sheet. Manifold will indicate in each listing if it is creating a new Resource or updating an existing one with the material provided.

About the listings are two button options. **Start Import** will begin kick off the process where Resources are harvested and created in the system. The **Back** button returns the view to Step 3.

Once initiated, the import process may take a few moments to complete. As the system works, Manifold will provide regular status updates.

When the process is complete, the buttons above the listings will change to **Back to Resources** and **Reset Import**, and the individual listings will show with check marks or X’s denoting whether the import was successful. 

Line items for failed imports will include a reason for the failure. The **Reset Import** button refreshes the Step 4 view, maintaining all of the settings from steps 1–3, to more easily run the import after correcting for any failures.  

The **Back to Resources** button returns to the view to the main Resources view.

## Settings and Fields

Each Resource loaded to Manifold has its own discrete settings that are configurable and which can be accessed when you select a Resource from the Editing Pane. Doing so transforms the view, alters the functionality in the header (see [Interface](../backend/resource.md#interface)), and makes available a Resource-specific sidebar with the following options.

### Properties

Unless otherwise noted, the following attributes are common to all Resource kinds:

#### Kind

The values in this dropdown correspond to the ten different Manifold Resource types and instruct the system how to understand the Resource. If this field is changed for an existing Resource, the system will retain values for attributes shared between the two kinds.
Title

This is the display name of the Resource. It appears under the Resource thumbnail in the left margin of the Reader when the Resource is placed as a Text annotation, in the Resource modal window in the Reader, in the Resource library and detail page, and in the **Resources** Content Block and Resource Collection views.

The value in this field is also baked into the metadata that Manifold shares with other systems, crawlers, and social media platforms.

This field accepts Markdown formatting, though other systems the Resource is shared with may not.

#### Sort Title

Manifold sorts Resources alphabetically in lists and library views based on the value saved here. When left blank the system will instead use the value from the **Title** field.

#### Fingerprint

A Resource’s fingerprint is its own unique ID in the system. If a fingerprint value is not defined for a Resource when brought into the system, Manifold will assign a random UUID to it in this space.

Values entered here should be unique not just to the Project but to *the entire Manifold instance*.

#### Slug

A Resource slug appears as the final component of the the URL for its detail page: 

	```html
	https://{domain-name}/projects/{project-slug}/resource/{resource-slug}
	```

If left blank, the system will automatically create a slug for each new Resource based on its title.

#### Tags

Tags function as filters on the Resource library and detail pages, relating different Resources by theme or framework.

This field is a typeahead dropdown field pre-populated with existing tags that have already been associated with other Resources in the instance. New tags can be added to the system by typing them into this field. Once entered, tags appear in the container below the dropdown with an **×** button beside their name, which removes them from the Resource.

Tags associated with Texts are distinct in the system from those associated with Resources.

#### Description

This is a Markdown-enabled field meant to capture a detailed account of the Resource, which is rendered on the Resource’s detail page and in the Manifold Reader modal for Resource annotations.

#### Caption

Copy saved here is intended to provide a brief statement about the Resource’s context within the Project and provide information about its source.

Copy from this Markdown-enabled field appears with the Resource in frontend views and is baked into the metadata that Manifold shares with other systems, crawlers, and social media platforms. Those other systems will likely *not* honor Markdown formatting and render the syntax as is.

The following two fields apply only to **Image**, **Video**, **Audio**, **File**, **PDF**, **Document**, **Spreadsheet**, and **Presentation** Resources. However, these will not show for **Video** Resources that are sourcing content from YouTube or Vimeo.

#### Allow Download?

Manifold does not make the Resource file loaded in the system available for download on the frontend unless this slider is toggled on. When on, a **Download** button displays on the Resource’s detail page.

The slider defaults to the on position when a new Resource is created.

#### File

This field displays the existing Resource file that was uploaded to the system. New files to replace the existing one can be dropped onto this field or selected using your device’s file system by clicking the **Upload a File** link.

#### Is This an Externally Linked Video?

This toggle, which applies only to **Video** Resources, tells Manifold whether the video is being uploaded to the system or if it is to be sourced from YouTube or Vimeo.

When toggled on, Manifold will fetch the video from the third party using the information from the following two fields that replace the standard **File** upload field.

#### Video ID

The value in this field, which is offered only to **Video** Resources, identifies which specific video file Manifold should target on YouTube or Vimeo to bring in as a Resource.

This field *is not* expecting a full URL, only a component of it. For YouTube, the ID follows after `?v=`; and for Vimeo, it follows after `vimeo.com/`.

<Spec title="Video IDs in URLs">

| Platform | Video URL                                     | Video ID for Manifold |
| -------- | --------------------------------------------- | --------------------- |
| YouTube  | `https://www.youtube.com/watch?v=4czjS9h4Fpg` | `4czjS9h4Fpg`         |
| Vimeo    | `https://vimeo.com/493544128`                 | `493544128`           |

</Spec>

#### External Video Type

This dropdown, which is offered only to **Video** Resources, has two values, Youtube and Vimeo, and orients Manifold to properly secure the identified video from the correct source.

#### Link URL

In place of the standard **File** upload field for Resources that get brought into the system, **URL** Resources instead require a target URL, which should be provided in full, e.g., `https://www.nasa.gov/`, *not* `nasa.gov`. The **Link** Resource is the only kind with this attribute.

#### Minimum Width and Height

These two fields, available only to **Interactive** Resources, provide Manifold with the preferred display ratio for the remotely sourced content. Input should be numerical and understood to be in units of pixels. Both fields are optional.

#### IFrame URL

This field, specific to **Interactive** Resources, provides the system with the specific path to the remotely hosted content that Manifold will create a Resource around. Input should be the complete source URL, e.g.:

```
https://sketchfab.com/models/c1c94e1f69df45eeae4a0a1d0d27e85b/embed
```

### Variants

This sidebar menu only appears for **Image**, **Video**, **Audio**, and **Interactive** Resources. All of the fields in this section anticipate an upload that can be dropped onto the field or selected using your device’s file system by clicking the **Upload a File** link.

#### High Resolution Image

Specific to the **Image** Resource, files loaded to this field are expected to be a higher-resolution alternative/equivalent to the primary Image Resource.

Manifold does not display the High Resolution Image in the application; instead, the hi-res file supplants the display version when provided as a download (see **Allow Download?** in [Properties](../backend/resource.md#properties)).

<Spec
  title="High Resolution Image Attributes"
  items={[
{ key: "Height and Width", value: "Unrestricted" },
{ key: "Max File Size", value: "Unrestricted" },
      { key: "Format", value: defaultImageFormats },
  ]}
/>

#### Poster Image

Manifold automatically generates a landscape preview for Resources in a number of views in the frontend: in the modal when a Resource annotates a text in the Reader, on the Resource’s detail page, and on Resource Collection pages.

Files loaded here replace the system-generated preview in those spaces.

<Spec
  title="Poster Image Attributes"
  items={[
{ key: "Max-Width", value: "1135 px" },
{ key: "Max-Height", value: "650 px" },
      { key: "Format", value: defaultImageFormats },
  ]}
/>

#### Thumbnail Image

Resources appear with thumbnail images in the Reader, when placed as an annotation, and in Collection and Library pages. Manifold also shares thumbnails with other systems, crawlers, and social media platforms.

The system will use the Resource file itself to automatically generate that thumbnail or include a system default when it cannot. Files loaded here replace the system-created thumbnails wherever they appear and when shared with other systems.

<Spec
title="Thumbnail Image Attributes"
items={[
    { key: "Width", value: "80 px" },
    { key: "Height", value: "50 px" },
    { key: "Format", value: defaultImageFormats },
]}
/>

#### Variants 1 and 2

Because browser and system support for media files differ, Manifold accepts in these spaces alternate equivalents of the primary **Video** or **Audio** Resource.

For file types playable in the browser, if Manifold determines that the primary Resource file is not supported, it will look for a variant file that may be played instead.

<Spec
title="Variant Attributes"
items={[
    { key: "Video Variants", value: "MP4, WEBM, FLV, MOV, AVI" },
    { key: "Audio Variants", value: "MP3, FLAC, WAV, OFF, OGA" },
]}
/>

### Metadata

This view groups into different categories the available metadata fields that describe a Manifold Resource. Values displayed here appear in the modal overlay for Resources placed as annotations in the Reader, on the Resource detail page, and they are also included in the BagIt archive when a Project is exported (see [Exporting and Preserving](../backend/projects.md#exporting-and-preserving)).

All of the fields on this page support Markdown formatting with the exception of **DOI**.

The [Metadata section](../backend/metadata.md) provides definitions for each metadata element shown in this view.








