---
id: texts
title: Texts
sidebar_label: Texts
---

import Spec from "@theme/Spec";
const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location How Do I Get Here
To edit a Text, select its parent project in the backend and choose **Texts** from the sidebar. Texts can be edited by any user who can edit the parent Project.
:::

## What is a Text?

Texts refer to content that is displayed in the Manifold Reader. Each Text belongs to a specific Project and Projects can contain many Texts. Likewise, Texts can contain one or more sections (i.e., chapters, articles, etc.). Each individual XHTML file in an EPUB is considered by Manifold to be a Text section.

Within the Manifold Reader, Texts serve as a base, onto which Resource annotations and reader engagements can be layered.

Manifold ***is not*** an authoring platform. Thus, Texts are meant to be prepared outside the system and then added to Projects for display and engagement in the Manifold Reader.

## Managing Project Texts

Because Texts belong to Projects, they are managed from the parent Project’s “Texts” pane in the backend. Within this view, you can add Texts to the Project, create Text categories, assign Texts to those categories, change the order of Texts, edit Texts, and delete Texts.

### Interface Overview

Like many backend views, the Text editing interface is composed of three parts: the header, the sidebar, and the editing pane.

#### Header

The header for the Texts view is the same as for all other Project-level Sidebar items, denoting the title and subtitle of the Project along with buttons to **Preview** or **Delete** it.

When individual Text records are accessed, the header adjusts to the context and makes available options to **Preview** or **Delete** the selected Text, enable the system to create an EPUB of the Text, or secure the source file originally used to create the Text:

The **Enable EPUB** button functions as a toggle. When activated, the text of the button will change to **Disable EPUB** and Manifold will create an EPUB of the Text regardless of the format in which it was ingested (e.g., Word or Google Documents).

Every five minutes Manifold looks for Texts that have this setting enabled. If a Text is newly enabled, Manifold will generate an EPUB of the Text. If the Text has been updated, Manifold will re-create the EPUB so that accurately reflects any changes.

When the EPUB for the Text has been generated, a **Download EPUB** button will appear, from which the Manifold-generated EPUB can be secured.

If you used an EPUB to initially create the Text and then toggles this setting on, Manifold will create its own EPUB. Those two files would be very similar but potentially not exact matches. The original source EPUB is still retained, and available through the **Download Source** button.

The **Disable EPUB** button toggles this process off and removes the **Download EPUB** option.

Manifold retains the source files that were uploaded to create each Text. The **Download Source** button packages those files up and delivers them to your device in a ZIP archive.

Manifold does *not* provide source files for Texts that have been ingested via URL (e.g., Google Docs). In such situations this button is labeled as **Visit Source** and functions as a link that directs your browser to the page from which the remotely hosted source file lives.

#### Sidebar

The Sidebar’s **Text** menu opens a view where new Texts and Categories can be added and reordered and where Text records can be accessed. When an individual Text record is selected, the Sidebar will display new options specific that Text, described in the [Editing a Text](../backend/texts.md#editing-a-text) section below.

#### Editing Pane

To the right of the sidebar, the Editing Pane displays two buttons to add new Texts and Categories to the Project. These are labeled **+ Add a new text** and **+ Create a new category**, respectively. Below those, the system lists all the Texts and Categories that have already been added to the Project.

Categories appear as containers into which Texts can be moved. Each Category has a header ribbon that displays its name and buttons to (1) delete, (2) edit, or (3) reorder the category, designated by the trashcan, pencil, and handlebar icons.

All Projects include the **Uncategorized** Category that cannot be renamed, removed, or reordered.

Newly loaded Texts appear in the **Uncategorized** container by default and render as a horizontal block that includes a thumbnail, title, date stamp, and, the same (1) delete, (2) edit, and (3) reorder buttons that Categories display:

1. Designated by a trashcan icon, the **Delete** button removes the associated content from the system, either the Category container or the individual Text. Deleting a Category will not delete Texts nested within it; instead they will be transitioned to the **Uncategorized** container.

2. The **Edit** button displays as a pencil icon. When selected for a Category, the button will open a drawer from the right where you can rename the Category. For Texts, the edit button opens a new view onto the [Text’s settings](../backend/texts.md#editing-a-text).

3. The horizontal drag bars are used to **Reorder** Categories or Texts. When moving Categories, the Texts nested within them will maintain their existing order. Texts can be reordered within Categories or moved from one Category to another. A single Text cannot appear in more than one Category. The drag bars respond to clicking and dragging with your mouse or by pressing the space bar on your keyboard and then using the up or down arrow keys.

### Adding Texts

When you add a Text to Manifold, the application runs a series of transformations (e.g., converting documents to HTML, adding text nodes, managing styles) that make possible the various features and functionalities on the frontend.

You can add Texts to Projects in one of the following formats:

- Reflowable **EPUB**s
- **HTML**
- **Markdown**
- Microsoft Word Documents of the **DOCX** variety
- **Google Docs**

The system also accepts “Manifest Ingests,” which are an array of acceptable files that have been packaged into a ZIP archive, often with media files and associated stylesheets. Manifold processes these files into the Reader as a single Text with multiple Text sections.

Files in formats other than those named above (e.g., PDF, XML, TEI, TEX) cannot be processed into the Manifold Reader.

#### How to Add a Text

The **+ Add a new text** button opens a drawer from the right where Texts can be added to the system in two ways: by directly loading a file from your system using **Upload a File** or by referring to one that is remotely hosted with the **URL** option.

This URL field expects a complete URL that directs Manifold to a specific file or archive that Manifold can Ingest.

After your upload file has cached to the system or a path has been provided in the URL field, the **✓ Continue** button converts the drawer to a new view with display logs and final options.

The **↓ Start Ingestion** button kicks off the actual process of converting and bringing the source file into the Manifold Reader. The system must first connect to the Manifold websocket (noted in the Log) before this option is actionable. When completed this button will change to read **✓ Complete** and direct you back to the Texts views.

The Log sits below these buttons and documents the ingest process, line by line.

The **Restart Ingestion** option is used by Manifold developers when tweaking code around how Texts are added.

### Text Categories

Text Categories are a grouping mechanism for Texts. Categories can be configured to display in a variety of ways or used as filters in Texts Content Blocks on Project landing pages (see [Layout](../backend/projects.md#texts)).

Within the Manifold Reader, Category titles appear in a yellow ribbon at the bottom of the page for member Texts. Category ribbons do not appear for uncategorized Texts or Texts with the **Published?** field toggled on (see [Editing a Text](../backend/texts.md#general)).

The **+ Create a new category** button opens a drawer from the right where you can add and name a new category. Once created, the Category container will appear in the editing pane, ready for Texts to be deposited into it.

## Editing a Text

To edit a Text, click on the title or the pencil icon from within the list of the project’s Texts. Each Text loaded to Manifold has its own configurable settings. When you select a Text from the Editing Pane, the view will transform, providing new options in the header (see [Interface Overview](../backend/texts.md#header)).

Managing a Text involves viewing and changing its properties through the following editing panes: **Analytics**, **General**, **People**, **Metadata**, **Styles**, and **Reingest**. Even when pre-populated by the system, all of the fields in these panes can be modified.

### Analytics

This view displays Text-specific engagement, aggregating user activity into six reports, which can be configured to return information for specific periods of time.

#### Setting a Date Range

At the top of the view, the system provides options to configure custom or pre-set date ranges for which the subsequent reports will return values.

The **Start** and **End Date** fields are a means to manually set a specific range of time the system will report engagement. Dates can be entered manually in the month, date, year format or selected from the date picker that appears when your cursor lands in the field.

Alternatively, you can **Choose a Range Preset** that adjusts the reports to pre-defined date ranges: **Last week** corresponds to the Sunday through Saturday before the current span of days, **Last month** refers to the entirety of calendar month before the current one, **Last 7 days** includes the current day as the seventh, and **Last 30 days** does likewise—day 30 is the current day.

#### Reports

Following the date constraint options, the system displays six usage reports, some with multiple data points, reflecting user activity across the instance during the defined time span.

1. Rendered as a line chart, the **Visitors** report shows the number of unique visitors accessing the Text during the set time span. Visits are tied to a user’s browser. A user with multiple tabs open to the Text in the same browser will be counted only once. But if the same user accesses the Text from two different browsers, they will be recorded as two different visitors.

2. The **Annotations** report is broken into four categories: Annotations, Public, Private, and Reading Groups. The first displays the tally of all annotations added to the Text during the selected time period. The next two categories show the number of annotations made under the banner of **My Public Annotations** and **My Private Annotations** in the Reader’s pop-up menu. The last category shows the number all annotations to the Text made within the context of a Reading Group, regardless of the Reading Group’s privacy settings. The value displays in the first category, Annotations, should equal the sum of the other three.

3. Values shown in the **Highlights** report corresponds to the total number of passages in the Text that have been highlighted during the selected time period. The system aggregates all of the highlights made to the Text in the value it reports, regardless of privacy setting or affiliation with Reading Groups.

4. The **Shares** report displays the current total for the number of times visitors have used the Manifold Share feature in the Reader’s pop-up menu to share the Text section to Twitter or Facebook. The number displayed in the report is ***not*** affected by time constraints.

5. Each time a visitor uses the Reader’s Share feature to create an citation for the Text section, a record is created. The figure in the **Citations** report represents the total number of citation records currently associated with the Text section. It is ***not*** affected by time constraints.

6. Displayed as a list, the **Text Section Views** report aggregates the total number of times a specific section within a Text has been viewed during the set timespan. Each time a visitor opens a Text section, the system gives their browser a token associated with the the section. The system calculates the values it displays here by adding together the total number of tokens associated with the section from all the visitors who have accessed it. Data in this report are accurate to within a few moments, and section titles in the list open the Manifold Reader to the selected section.

:::note Exporting Analytics
At present there is no mechanism to export analytics data or mask from tracking the activity of specific users.
:::

### General

The settings in this view represent those that most affect how a Text is indexed in Manifold and with external systems.

#### Title

A Text’s title can be configured to appear in **Table of Contents** and **Texts** Content Blocks on the Project’s landing page. It is also baked into the metadata that Manifold shares with other systems, crawlers, and social media platforms.

Manifold automatically populates this field when the source file describes a title attribute in its structure.

<Spec title="Title Source">

| Source           | Location Notes                                                                                                                                                                                                                                                                                         |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EPUB             | In the `content.opf` file the title attribute will appear as: `<dc:title id="title">Furious Feminisms</dc:title>`                                                                                                                                                                                      |
| HTML             | For individual HTML Text ingests, the title attribute appears between the `<head>` tags, formatted as `<meta name="dc.title" content="Social Theory for Nonhumans">`. If that element is not present, Manifold will look next at content between the `<title>` tags before assigning a system-generated title. |
| Markdown         | When loading individual Markdown files, the title attribute appears in the document’s header as `title: Metagaming`.                                                                                                                                                                                   |
| MS Word (DOCX)   | The text of the paragraph that has the Word Style `Title` applied to it will be captured as the Text’s `Title` in Manifold.                                                                                                                                                                            |
| Google Doc       | The title of the document that appears in the upper left of the Google Doc screen is what Manifold sweeps into the `Title` field                                                                                                                                                                       |
| Manifest Ingests | In the `meta` section of the YAML file, the title attribute appears as `title: The End of Man`.                                                                                                                                                                                                        |

</Spec>

Manifold will auto-populate this field with a UUID if it cannot detect the Text’s title.

The content of this field will be encoded as the title of any EPUB that Manifold produces for download or export.

This field accepts Markdown formatting; however, using Markdown here is not recommended as other systems that sweep up the **Title** may not always honor that encoding.

#### Subtitle

A Text’s subtitle will appear with its main title in **Table of Contents** and **Texts** Content Blocks on the Project’s landing page. Unlike the main title, it does not get shared in metadata with other platforms or crawlers.

Manifold will not auto-populate this field with metadata from the Text’s source file or with a UUID. The **Subtitle** field is manual-only entry.

#### Publication Date

The Text’s publication date can be entered here manually in the month, date, year format or selected from the date picker that appears when your cursor lands in this field.

Manifold will populate this field when the publication date is included in the source file.

<Spec title="Publication Date Source">

| Source                        | Location Notes                                                                                                                                        |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| EPUB                          | In the `content.opf` file, Manifold will look for the `<dc:date>2021-02-16</dc:date>` attribute.                                                      |
| HTML                          | For individual HTML Text ingests, the publication date appears between the `<head>` tags, formatted as `<meta name="dc.date" content="1997-08-29">`. |
| Markdown                      | When loading individual Markdown files, the publication date is defined as `date: "2063-04-05"` in the document’s header.                            |
| MS Word (DOCX) Google Docs    | There is no current way to describe the publication date in Word or Google documents.                                                                 |
| Manifest Ingests              | In the `meta` section of the YAML file, the publication date is described in this format: `date: "1999-09-09"`                                        |

</Spec>

The date stored in this field does not presently render on the site or function for any sorting purposes. It’s stored for likely future use along those lines.

#### Slug

A Text slug appears between the **read** and **section** components of its URL.

```html
https://{domain-name}/read/{text-slug}/section/{section-UUID}
```

If left blank, the system will automatically create a slug for each new Text based on its title.

#### Description

This is a Markdown-enabled field meant to capture a Text’s abstract. Copy saved here can be configured to display in a **Texts** Content Block on the Project landing page; it is also baked into the metadata that Manifold shares with other systems, crawlers, and social media platforms. Those other systems will likely ***not*** honor Markdown formatting and render the syntax as is.

Manifold will populate this field when this field when a description is included in the source file.

<Spec title="Description Source">

| Source                         | Location Notes                                                                                                                                                     |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EPUB                           | In the `content.opf` file, Manifold will look for the `<dc:description>This is the description.</dc:description>` attribute.                                       |
| HTML                           | For individual HTML Text ingests, the publication date appears between the `<head>` tags, formatted as `<meta name="dc.description" content="Description copy.">`. |
| Markdown                       | When loading individual Markdown files, the publication date is defined as `description: "A brief description."` in the document’s header.                         |
| MS Word (DOCX) and Google Docs | There is no current way to assign copy as a Text’s description in Word or Google documents.                                                                        |
| Manifest Ingests               | In the `meta` section of the YAML file, the description attribute is formatted as   `description: 'A sample description.'`                                         |

</Spec>

#### Cover

The Cover image serves as a thumbnail for a specific Text and can be configured to appear in the **Texts** Content Block on the Project landing page, in lieu of the default thumbnail depicting loose pages.

Image files can be dropped onto the **Cover** field or selected using your device’s file system by clicking the **Upload a File** link.

Manifold will automatically sweep EPUBs at ingest for their cover file when they are defined as such in the **content.opf** file, e.g.:

```html
<item href="{cover-filename}.jpg" id="My_Cover"  media-type="image/jpeg" properties="cover-image"/>
```

When Manifold creates an EPUB of a Text, for download or export, it will use the image file stored in this field as the cover for the Manifold-generated EPUB.

Manifold does ***not*** supply this image with the	metadata it shares about the Text with other systems, crawlers, or social media platforms; it sends instead the Project’s **Background Image**.

<Spec
    title="Cover Specs"
    items={[
        { key: "Max-Width", value: "56 px" },
        { key: "Height", value: "Automatically adjusts proportionally to width constraint" },
        { key: "Orientation", value: "Vertical" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>

#### Published?

This toggle affects the appearance of a Text in a **Texts** Content Block on the Project landing page and in the Reader. When this setting is engaged, Manifold will append a “Published” badge to its listing in a **Texts** Block. In the Reader, the system will remove the yellow ribbon that displays how the Text’s Category.

#### Section Label

Manifold includes navigation controls at the bottom of each Text section in the Reader. These controls give readers the means to move forward or backward through a Text. By default these navigation elements are introduced with a heading that reads “Next Chapter.” This field allows you to adjust that language to better reflect the content: e.g., Next Article, Next Essay, Next Section, etc.

It is ***not possible*** to remove or adjust the word *Next* from that heading.

#### Ignore Access Restrictions?

Restricted Access Projects require entitlements to view any of their content that doesn’t immediately render on the Project landing page (see [Managing Access](../backend/projects.md#managing-access)).

Enabling this toggle overrides that requirement so readers (with or without an entitlement) can access the Text when it appears on the Project landing page, in a Call-to-Action in the **Hero** or in a **Texts** or **Table of Contents** Content Block.

### People

The **People** sidebar in this view lists the Maker Records associated with a individual Text (see [Makers](../backend/makers.md)). The listings are broken into two categories: **Authors** and **Contributors**, where author listings suggest primary authorship and contributor listings denote secondary attributions. Individual listings begin with an profile image, the Maker’s name, and then options to (1) delete, (2) edit, or (3) reorder the entry:

1. The **Delete** button, depicted with an **×** button, only removes the association between the Maker Record and a specific Text; the Maker record itself is not altered or removed from the system by deleting its association with a Text.

2. Shown as a pencil icon, the **Edit** button changes the view, taking you to the **Manage Makers** page with the edit drawer open to the entry you selected. There you can adjust the Maker’s professional title; first, middle, or last name; and suffix. Users with Reader roles who have been granted Editor Permissions to a Project are not able to edit Maker Records.

3. The horizontal drag bars can be used to **Reorder** Maker records within the same category. It is not possible to recategorize an entry from **Author** to **Contributor** or vice versa. The drag bars respond to clicking and dragging with your mouse or by pressing the space bar on your keyboard and then using the up or down arrow keys.

Manifold automatically populates the **People** pane when the Text’s source file provides authorship information in its metadata

<Spec title="Author and Contributor Source">

| Source                         | Location Notes                                                                                                                                                                                                                                   |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EPUB                           | In the `content.opf` file, Manifold will look for `<dc:creator id="creator1">John Watson</dc:creator>` and `<dc:contributor id="creator2">Ivy Winters</dc:contributor>` attributes to add listings as `Authors` and `Contributors` respectively. |
| HTML                           | For individual HTML Text ingests, the author attributions appear between the `<head>` tags, formatted as: `<meta name="dc.creator" content="Rowan Ono">` and `<meta name="dc.contributor" content="Louise Dash">`.                               |
| Markdown                       | When loading individual Markdown files, authorship is defined as: `creator: Indrid Cold` and `contributor: Ida Davis` in the document’s header.                                                                                                  |
| MS Word (DOCX) and Google Docs | There is no current way to define authorship in Google or Word documents.                                                                                                                                                                        |
| Manifest Ingests               | In the `meta` section of the YAML file, authorship is nested under the `creators` or `contributors` headings as : `- name: Ivy Winters`                                                                                                          |

</Spec>

When the system cannot recognize authorship from the source file, ***already existing*** Maker Records can be manually associated with a Text by typing names in the **Authors** or **Contributors** dropdown fields. New Maker Records cannot be created from this view.

**Author** listings can be configured to appear in **Texts** Content Blocks and will appear in auto-generated bibliographic cites the system creates. Those listed as **Contributors** do not appear in either of those spaces.

:::note Other Authorial Roles
The current Author/Contributor dynamic is based off the EPUB specification. At present, you cannot assign more nuanced roles for Makers (e.g., Editors, Translators, Introducers, etc.).
:::

### Metadata

This view groups into different categories the available metadata fields that describe a Manifold Text. Values displayed here appear in the Manifold Reader in the **About this Text** section, accessible from the **Contents** dropdown, and are also included in the BagIt archive when a Project is exported (see [Exporting and Preserving](../backend/projects.md#exporting-and-preserving)).

Metadata can be entered here manually; however, when a Text is ingested, Manifold will search the source files for information it can use to populate the **Rights** and **Language** fields.

<Spec title="Rights and Language Source">

| Source                         | Location Notes                                                                                                                                                                                                             |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EPUB                           | In the `content.opf` file, Manifold will look for the `<dc:rights>Rights information</dc:rights>` and `<dc:language id="lang1">en</dc:language>` attributes.                                                               |
| HTML                           | For individual HTML Text ingests, the rights and language information appears between the `<head>` tags, formatted as `<meta name="dc.rights" content="Rights information">` and `<meta name="dc.language" content="en">`. |
| Markdown                       | When loading individual Markdown files, the rights and language data is defined as `rights: "Rights information"` and `language: "en-US"` in the document’s header.                                                        |
| MS Word (DOCX) and Google Docs | There is no current way to assign the Text's rights and language information in Google or Word documents.                                                                                                                  |
| Manifest Ingests               | In the `meta` section of the YAML file, the rights and language attributes are formatted as `rights: "Rights information"` and `language: "en-US"`                                                                         |

</Spec>

The **Unique Identifier** is the only field Manifold will automatically populate with a UUID when a value is not provided in the source file. At present the only source file that can impart a **Unique Identifier** is an EPUB, where the **content.opf** file includes this attribute:

```html
<dc:identifier id="pub-id">{string-value}</dc:identifier>
```
All of the fields on this page support Markdown formatting with the exception of **DOI** and **Original Publication Date**.

The [Metadata section](../backend/metadata.md) provides definitions for each metadata element shown in this view.

### Styles

The Styles pane lists, in the order they are applied from top to bottom, all the stylesheets (CSS) that govern the visual appearance of a Text in the Manifold Reader. Each listing begins with a thumbnail of a sheet of paper followed by the title of the stylesheet, the date it was added to the Text record, and then buttons to (1) delete, (2) edit, or (3) reorder the listings.

The title of each stylesheet is categorized by the system as “Ingested” or “User Created”. Ingested sheets are those that were part of the source file package and ingested with the Text. User Created sheets describe those that have been added after ingest through this view, using the **+ Add a New Stylesheet** button that precedes the stylesheet list. The views for adding a new sheet are the same as for editing an existing one.

1. Shown as a trashcan icon, the **Delete** button removes an individual stylesheet from the Text record. Any style attributes included in the sheet will no longer be applied to the Text in the Manifold Reader.

2. The **Edit** button, depicted as a pencil icon, changes the view of the editing pane to a detail of the selected stylesheet, where the sheet can be renamed, its style attributes adjusted, and where you can dial in where the sheet’s rules are targeted:

	The **Name** field is for backend users only; it is not revealed on the frontend.

	**Source Styles** displays all the CSS attributes of the stylesheet in an editable text box. Syntax entered here should follow the CSS standard. The **Validated Styles** text box that follows below is not editable and reveals Manifold’s interpretation of the style attributes from **Source Styles**. Only styles that show up in this space will affect styling in the Reader. Manifold generally does not allow any attributes that hinder responsiveness or interfere with the Reader’s functionality.

	The options in the **Apply to These Text Sections** space determine those Text sections to which the stylesheet will be applied. The dropdown lists all the sections of the Text. When a Text section is chosen, it is added to the entity list below the dropdown, indicating that the stylesheet’s rules will be applied to that section. Sections that do not appear in the entity list will not be affected by the stylesheet. The **Add All** and **Remove All** buttons below the dropdown add or remove all of the Text sections from the entity list in bulk. Each Text section in the entity list includes a **×** button that removes it from the list.

3. The horizontal drag bars beside the edit button can be used to adjust the **Order** the stylesheets are applied to the Text. The rules of the topmost sheet are applied first and then the one following after, and so on. Individual attributes in a first sheet can be overridden or adjusted by sheets that appear further down the list. The drag bars respond to clicking and dragging with your mouse or by pressing the space bar on your keyboard and then using the up or down arrow keys.

When a new Text is ingested, Manifold will create a stylesheet record here that includes any rendering instructions that were defined in the source file.

<Spec title="Stylesheet Source">

| Source                         | Source Style Location                                                                                                |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------|
| EPUB                           | CSS file in EPUB package                                                                                             |
| HTML, Markdown, Manifest       | Inline style between `<style>` tags, CSS file in ZIP archive, or no supplied style.                                  |
| MS Word (DOCX) and Google Docs | Each application exports its core paragraph and character styles that are captured here in two or more style records |

</Spec>

If Manifold cannot find and source style information, it will create an empty stylesheet record listed in this view.

:::note Stylesheet Permanence
Both Ingested and User Created sheets can be edited, but if a Text is Reingested, changes to the Ingested sheets will be overridden by the Reingest process by the contents of the Reingested source file. User Created sheets, however, will persist unaffected by the Reingest process.
:::

### Reingest

The Reingest process is a means to update a Text with new additions or edits without losing any existing author engagements or Resource placements that are part of the Text currently in the system. However, this is not versioning control; when a Text is Reingested, the existing Text is supplanted by the new and is no longer available in the system.

Since there is no authoring component in the Manifold interface, edits to already ingested Texts need to be made to the source files that were originally ingested. The updated source files can then be loaded to the system from this view, which mimics the interface for adding a new Text (see [Adding Texts](../backend/texts.md#adding-texts)).

When a Text is Reingested, all the annotations, highlights, and Resource placements that have been made will persist, unless such drastic changes were performed that the system can no longer identify their original anchors. In this unlikely case, annotations and highlights will be orphaned and no longer accessible. More likely, small edits will force the system to guess where annotations and Resources were originally placed with results not always being exact. The Reingest process is among the most technically complex in the system and is routinely tinkered with to better dial in the expected results.

Some Text-record fields are overridden by the Reingest process, with values from the newer source file overriding the existing values:

<Spec
    title="Text Record Fields Affected by Reingesting"
    items={[
        { key: "General", value: "Title, Subtitle, Publication Date, Description, Cover" },
        { key: "People", value: "Authors, Contributors" },
        { key: "Metadata", value: "Rights, Unique Identifier" },
    ]}
/>
