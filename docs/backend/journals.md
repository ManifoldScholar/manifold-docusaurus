---
id: journals
title: Journals
sidebar_label: Journals
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Spec from "@theme/Spec";
const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
The Journals detail views discussed in this section are accessed from the Manifold backend by selecting **Journals** from the main menu.

While all users who can enter the backend can access this view, ***only*** users logged in with **Project Creator**, **Editor**, or **Administrator** roles can create new Journals.
:::

## What is a Journal?

A Manifold Journal is the framework that groups and contextualizes Manifold Projects as interrelated journal issues under one banner.

This framework is made up of a series of dedicated pages specifically crafted to render serial publications:

- A **Journal’s homepage** displays basic information about the publication, its frequency, editorial board, copyright and submission information, and so forth, as well as providing a listing of its volumes and issues.
- For Journals that aggregate issues into **volumes**, each volume will also has its own dedicated page, showcasing the various issues of which it is composed.
- **Issues** are Manifold Projects that can be collected into volumes or exist independently as a consecutively numbered series. Manifold Projects can be created as Journal Issues and existing Projects can be transformed into Issues.

## Interface Overview

This view is composed of three parts: a search bar, a button to create new Journals, and a listing of all the Journals on the instance.

## Search

The search bar returns results for Journal titles, not individual Issues within them. The search field accepts keyword searches only and no search operators. Results appear below, replacing the full list of Journals. Within the search bar are two buttons: **Reset** and **Options**.

The **Reset** button clears the search bar and resets the returned listings. The **Options** button unveils two combobox dropdowns to filter and sort the results of the search. Search results can be filtered by Draft status and sorted alphabetically by title or by the date of the Journal’s creation.

## Creating and Editing Journals

The **Add a new journal** button opens a page where you can input a Title, Subtitle, and Brief Description for the Journal, each of which will be displayed prominently on the Journal’s homepage. Each field can be edited later, and only the Title is required to proceed.

Selecting the **Save and Continue** button creates the Journal and adjusts the view to the detail page of the newly created Journal.

:::note Who Can Do What?
- Only users logged in with **Project Creator**, **Editor**, or **Administrator** roles can create new Journals.
- Users with **Marketeer** credentials cannot create new Journals but they can edit all existing ones.
- **Project Creators** can only edit those Journals they have created.
:::

## Journals Detail Page

The Journal details page is made up of three parts: a header up top, a sidebar floating on the left, and an editing pane taking up the central viewport. These three elements each adapt to the context of your work and location within the Journal record.

The Journal header displays the title and subtitle of the Journal along with options to **View** the Journal on the Manifold frontend or **Delete** it from the instance.

The Sidebar Menu groups into categories all the various editing options available for Journals in the Manifold Backend. As you navigate through the sidebar, different fields and controls will display in the Editing Pane that are detailed in the following sections.

The Editing Pane displays a Project’s editable settings and fields, based on the Sidebar Menu item you have selected. In this space you can add the files and metadata that make up your Journal as well as adjust the configuration for its display.

### Properties

#### Title and Subtitle

These two fields reflect the full name of the Journal and display prominently on this Journal’s landing page. In Library views, only the main title is shown. In the Backend, both the title and subtitle appear in associated navigation menus.

The **Title** field cannot be left empty; however the **Subtitle** field is optional.

#### Slug

A slug is the part of a URL that directs a browser to a specific webpage within the context of a larger domain. The **Slug** field here is an opportunity for you to customize the address of the landing page for the Journal you are modifying.

In Manifold all Journal landing pages follow the same URL pattern: domain/path/journal-slug. The domain represents the homepage for your entire instance; the path describes the nature of the address, in this case that it’s a Journal; and then the Journal slug, which identifies a specific Journal on the instance. In the following example, the Journal slug is `the-journal-of-thought`.

```
https://edge.manifoldapp.org/journals/the-journal-of-thought

```

When you create a new Journal, the system automatically populates this field with a slug based on the Journal’s title. If that’s not in keeping with your naming conventions, you can adjust it.

:::tip Best Practice
We recommend that you settle on a Slug before toggling your Journal out of Draft mode to avoid potential 404 errors resulting from broken links.
:::

#### Thumbnail

The Journal Thumbnail is only displayed in search results at present. In later versions of Manifold, this image will also display in Library views alongside other Journals and Projects.

The default thumbnail depicts a pair of glasses, a comment block, and a pencil. For new Journals, or for Journals that don't have a custom thumbnail, the default thumbnail appears beneath the **Current** heading.

You can adjust the color scheme for the default thumbnail by selecting one of the six preset color swatches shown in the grid's center, labeled **Default**.

You can replace the default thumbnail with an image of your own by selecting “Upload a File” under **Custom**.

<Spec
    title="Project Thumbnail Specs"
    items={[
        { key: "Max-Width", value: "160 px" },
        { key: "Max-Height", value: "160 px" },
        { key: "Format", value: "GIF, JPEG, JPG, PNG" },
    ]}
/>

#### Draft Mode

This toggle is for use when first staging a new Journal on an instance, before it is ready to be made available for a broad readership. When toggled on, Draft Journals are only visible (in both the front and backends) to users logged in with credentials to edit them; they appear in the backend with a badge denoting their Draft status.

New Journals are set to Draft Mode by default.

It is possible to have a Journal in Draft mode and an Issue nested within it that is publicly viewable. Likewise a Journal that is no longer in Draft can contain an issue that is in Draft mode. See the documentation around [how Draft status affects Journal issues](../backend/journals.md#issues) for more.

#### Show on Homepage

<!-- COME BACK TO THIS TO TALK ABOUT HOW JOURNALS CAN BE SORTED -->

This toggle promotes Journals that are no longer in Draft mode (see above) to the instance’s homepage. Journals appear beneath any Project Collections on that page and can be sorted . . . 

It is not currently possible to intermingle Journals with Project Collections.

:::tip Think about Your Readers
There is no artificial limit to the number of Journals set to appear on the homepage, but the more Journals that appear, the slower the page will be to load, especially for those with older devices or low/slow connectivity.
:::

#### Social Card Image, Title, and Description

When sharing the URL for a Journal’s homepage, Manifold includes Open Graph metadata that social media platforms display in posts as “cards”. Cards are made up of a **Title**, **Description**, and **Image**.

Plain text that reflects the name and nature of the Journal should be input into the **Title** and **Description** fields.

Markdown and HTML formatting ***are not*** honored in Open Graph metadata, and it best to keep the **Social Card Title** under 60 characters and aim for a **Description** between 140–160 characters.

An Image in keeping with the visual identity of the Journal can be dropped onto the **Social Card Description** field or selected from your device’s file system using the **Upload a File** link. Images should be prepared in an 8:5 ratio.

Manifold will not source Open Graph metadata from elsewhere in the system to take the place of blank fields here.

<Spec
   title="Social Card Image Specs"
   items={[
       { key: "Width", value: "640 px" },
       { key: "Height", value: "400 px" },
       { key: "Format", value: defaultImageFormats },
   ]}
/>

#### Subjects

Subject classifications illuminate the scope of material on your instance broadly and functionally provide a means for you to label and sort Journals. Because subjects take a high-level view of the body of work on your instance, the [catalog of Subjects](../administering/configuring/project_subjects.md) and the ability to add new Subject listings is the province of Admin users alone.

However, Subjects can be *assigned* to Journals in this space by any user who has the ability to edit the Journal record. Users can assign one or more Subject classifications to a Journal, and the interface supports both typeahead or dropdown selection.

Subjects appear on the **Journals** library page in the **Show All** dropdown as a means for readers to filter and display only those Journals that match their selection. 

Subjects can also be assigned at the issue level; see the [Issue section](../backend/journals.md#issues) for more.

:::note Project Subjects versus Journal Subjects
Subjects can be applied to both Projects and Journals alike, but when sorting content on the frontend, results will be contextual: only Journal results will appear when searching from the Journals library view and only Projects will appear when searching from the Project library view.
:::

#### Tags

Tags function much like Subjects, but there is no means to edit or delete tags in the system. Unlike Subjects, new Tags can be created by any user who has permission to edit a Journal and can be used to add further richness to the existing Subject classification.

Like Subjects the Tag field provides a helper, so that as you begin typing any similar tags that have already been created on your instance will be revealed.

### Layout

Each Journal landing page is made up of a Hero block, blocks collecting volumes and issues, and a Metadata block. The controls for the Hero block are controlled here in the **Layout** sidebar. The elements of the Metadata block are controlled using the **Metadata** sidebar, described later on this page. The blocks collecting volumes and issues are programmatically added by the system as new content is added to the Journal, with the most recent volumes and issues being automatically sorted to the top of the page.

The Journal Hero block is meant to display high-level information about the Journal, capturing elements like its Title and Description, while also providing a place to document its people, practices, and visual identity.

Options to adjust the appearance of the Journal’s Hero block are contained within the block’s **Description + Images**, **Calls-to-Action**, and **Social Links** submenus.

#### Description + Images

This menu opens up as a drawer from the right of the screen where you can adjust the fundamental aspects of the Hero block: 

The **Description** field supports basic Markdown syntax and allows users to add or edit the description of the Journal that appears on the left side of the Hero block, below the Title. If any descriptive text was included when the Journal was first created, it will automatically populate this field.

The **Background Image** is meant to provide some visual identity for the Journal. It displays in two places: (1) on the Journal library view and (2) above the textual content of the Hero block on the Journal homepage.

Image files can be dropped onto the **Hero Image** field or selected using your device’s file system by clicking the **Upload a File** link.

The Hero will render *in the the library view* according to your selection under the **Hero Layout** dropdown as follows:

- **Square Inset**. From its center the image will be cropped and rendered as a square, appearing to the left of both the Journal Title and Description.
- **Wide Inset**. Matching the width of the library container, the image will appear between the Journal Title and Description.
- **Full Bleed**. Appearing above the title and description, the width of the image will adapt to match the size of the browser window.

For the Journal homepage, the **Background Image** will always appear as a Full Bleed.

<Spec
    title="Background Image Specs"
    items={[
        { key: "Square Inset Width", value: "340 px" },
        { key: "Wide Inset Width", value: "1135 px" },
        { key: "Full Bleed Width", value: "Responsive" },
        { key: "Height (for all layouts)", value: "340 px" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>

The **Logo** displays directly over the Background Image on the Journal homepage, centered both horizontally and vertically.

<Spec
    title="Logo Specs"
    items={[
        { key: "Dimensions", value: "The logo should be prepared in a 1:1 ratio. The system will automatically resize your image to fit the available space. For best results, the height should be no less than 120 px and no greater than 180 px." },
        { key: "Format", value: defaultImageFormats },
    ]}
/>

A **Background Color** can be made to appear under a transparent Background Image or Logo, or in place of a Background Image.

The field for **Image Credits** renders attributions for the Background or Logo images in the lower right of the Journal’s Hero block. This field accepts basic Markdown syntax.

#### Calls-to-Action

Using the **Calls-to-Action** menu, you can add links and buttons to the Hero block that direct or provide (via download) readers with important information about the publication, e.g., a link to an external Journal website, a [Manifold Page](../backend/pages.md) describing the editorial board, subscription/submission information, calls-for-papers, etc.

The menu interface is arranged in two columns that indicate how your call-to-action will render: as a square button or as a simple text link that appear right of the Journal’s Title and Description.

See the [Projects section](../backend/projects.md#calls-to-action) to learn more about how to engage with this interface, which functions the same in both places with one caveat: for Projects, Calls-to-Action can be set to render on the left side as well as the right. By design, Calls-to-Action *only* appear on the right for Journals.

#### Social Links

If your Journal has a presence on **Twitter**, **Facebook**, or **Instagram**, links to those profiles can be added as clickable thumbnails in the lower left of the Hero block using the fields here. The input of each field should correspond with the format and case of your profile’s handle as it appears on the respective social media platform.

Additionally, you can promote a hashtag that you would like your readers to use on Twitter as a means to better capture the conversation around your publication in that sphere. When a **Hashtag** is provided it will appear beneath any social icons; when selected readers will be directed to a Twitter page displaying Tweets using the tag. The field does not require the hash sign (#); the system will automatically append one.

### Metadata

The **Metadata** panel provides a means to input metadata that applies to the Journal as whole and which will render at the bottom of the Journal homepage. Metadata associated with individual Issues and Articles is controlled at those respective levels. See the [Issues section](../backend/journals.md#issues) for more.

All of the Metadata fields support Markdown formatting with the exception of **DOI**. 

For detailed definitions of each metadata field, see the [Metadata reference section](../backend/metadata.md).

### Issues

Issues are specialized Manifold Projects that are contained within one Journal. To meet the needs of serial publications, Issues have more editing options available to them and render slightly differently than standard Projects.

Despite the similarities, Issues are *not* collected or indexed in Project library views, nor can they be included in Project Collections. Issues *only* appear within the context of the Journal of which they are a part.

The **Issues** sidebar view is the space where new Journal Issues records are created and existing Issues are listed. However, this *is not* the space where you will add content to an Issue. This interface is primarily concerned with creating the scaffolding linking a Manifold Project to a Journal, thus making it a Journal Issue. Discussion about adding content to Issues or adjusting their layout can be found below in the [Editing Journal Issues](../backend/journals.md#editing-journal-issues) section.

The **Create a new issue** button opens a drawer from the right where you can assign an Issue **Number** and associate it with an existing **Volume** (if necessary). From this drawer you can also convert an existing Project into a Journal Issue.

The **Number** field accepts single numbers as well as ranges of numbers, joined by either a hyphen or en dash (e.g. 1-2 or 1–2). Issue numbers appear in Journal library views and in the Journal navigational bar as breadcrumbs.

For publications that group issues into volumes, the **Volumes** dropdown allows you to select an existing volume number with which to associate the new issue. Like Issue Numbers, Volume Numbers appear in Journal library views and in the Journal navigational bar as breadcrumbs. See the following section for more about creating volume records.

The **Project** dropdown is an optional field that allows you to select an existing Manifold Project and convert it in an Issue of the Journal you are editing. The dropdown is of the typeahead kind and allows you to both scroll and search for an existing Project to transform it into an Issue.

If you aren’t converting a Project into an Issue, you can leave the **Project** dropdown empty, and the **Create Journal Issue** button will create a fresh Project already in the Issue shape.

When you select the **Create Journal Issue** button, you will be redirected to the Issue detail page where you can adjust any of the settings discussed in this section as well as begin to add/edit Issue content. That will be the space where you can add content to Issues or adjust their layout. See the [Editing Journal Issues](../backend/journals.md#editing-journal-issues) section below for more.

Selecting an existing Issue from the list of Issues on this page will redirect you to the Issue detail page.

:::caution Be Sure about Transforming Existing Projects
Once an existing Project is transformed into a Journal Issue, it is **not** possible to return it to is original, non-Issue state, nor is it possible to associate it with a different Journal.
:::

### Volumes

For Journals that group Issues into Volumes, the **Volumes** sidebar is where new Volume records are created. See the Issues section above for how to associate an Issue with a Volume.

This view is made up of a button to **Create a new volume** followed by a listing of existing Volumes the indicates the number of Issues contained within them.

When you create a new volume or select an existing volume from the list to edit, a drawer from the right rolls out with two editable fields: **Number** and **Slug**. The **Number** field accepts only whole numbers. The **Slug** is optional and provides an opportunity for you to customize the address of the landing page for the Volume. If none is provided the system will generate a UUID as the Volume slug.

All Volume landing pages follow the same URL pattern: domain/path/journal-slug/volumes/volume-slug. The domain represents the homepage for your entire instance; the path describes the nature of the address, in this case that it’s a Journal; the Journal slug, described above; a generic volume path; followed by the Volume slug. In the following example, the slug is `jotv001`.

```
https://edge.manifoldapp.org/journals/the-journal-of-thought/volumes/jotv001

```

Creating a volume automatically

- updates the Journal’s Volume count in front and backend views,
- adds a Volume container (to collect Issues) for the newly created Volume on the Journals landing page,
- updates the Journal navigational menu with a breadcrumb to the Volume, and
- creates a Volume landing page that displays each issue contained within.

Each Volume landing page has containers for each Issue it houses. Those Issue containers display a thumbnail link that take readers directly to the Issue, followed by a content preview that displays all *visible* [Contents and Texts blocks](../backend/projects.md#layout) associated with the Issue record.

## Editing Journal Issues

Because Issues are specialized Manifold Projects, Issue content is stored and managed in adapted Project records. 

To access an Issue record from the Manage Journals view, select the appropriate Journal from the list, choose the **Issues** sidebar, and then select an Issue. That will redirect you to the Issue detail page where you can add new content to the Issue and adjust its layout.

The options and controls on the Issue details page are almost identical to those for standard Projects and thus are described in the [Projects section of the documentation](../backend/projects.md). Differences in behavior between Projects and Issues is called out in the appropriate spaces therein.