---
id: texts
title: Texts
sidebar_label: Texts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
To edit a Text, select its parent project in the backend and choose **Texts** from the sidebar. Texts can be edited by any user who can edit the parent Project.
:::

## What is a Text?

Texts refer to content that is displayed in the Manifold Reader. Each Text belongs to a specific Project and Projects can contain many Texts. Likewise, Texts can contain one or more sections (i.e., chapters, articles, etc.). Each individual XHTML file in an EPUB is considered by Manifold to be a Text section.

Within the Manifold Reader, Texts serve as a base, onto which Resource annotations and reader engagements can be layered.

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

To the right of the sidebar, the Editing Pane displays three buttons labeled **Ingest New Text**, **Create New Text**, and **Create New category**, respectively, that allow you to load a text from your device to the system, create an entirely new text within the system, or create category containers to group and associate texts with one another. Below those, the system lists all the Texts and Categories that have already been added to the Project.

Categories appear as containers into which Texts can be moved. Each Category has a header ribbon that displays its name and buttons to (1) delete, (2) edit, or (3) reorder the category, designated by the trashcan, pencil, and handlebar icons.

All Projects include the **Uncategorized** Category that cannot be renamed, removed, or reordered.

Newly ingested or created Texts appear in the **Uncategorized** container by default and render as a horizontal block that includes a thumbnail, title, date stamp, and, the same (1) delete, (2) edit, and (3) reorder buttons that Categories display:

1. Designated by a trashcan icon, the **Delete** button removes the associated content from the system, either the Category container or the individual Text. Deleting a Category will not delete Texts nested within it; instead they will be transitioned to the **Uncategorized** container.

2. The **Edit** button displays as a pencil icon. When selected for a Category, the button will open a drawer from the right where you can rename the Category. For Texts, the edit button opens a new view onto the [Text’s settings](../backend/texts.md#editing-a-text).

3. The horizontal drag bars are used to **Reorder** Categories or Texts. When moving Categories, the Texts nested within them will maintain their existing order. Texts can be reordered within Categories or moved from one Category to another. A single Text cannot appear in more than one Category. The drag bars respond to clicking and dragging with your mouse or by pressing the space bar on your keyboard and then using the up or down arrow keys.

### Ingesting New Texts

When you add a Text to Manifold from an already existing source file (e.g., an EPUB or a Word or Google document), the application runs a series of transformations (e.g., converting the document to HTML, adding text nodes, managing styles) that make possible the various features and functionalities on the frontend.

You can add Texts to Projects in one of the following formats:

- Reflowable **EPUB**s
- **HTML**
- **Markdown**
- Microsoft Word Documents of the **DOCX** variety
- **Google Docs**

The system also accepts “Manifest Ingests,” which are an array of acceptable files that have been packaged into a ZIP archive, often with media files and associated stylesheets. Manifold processes these files into the Reader as a single Text with multiple Text sections. See the [Create a Manifest Ingest walkthrough](../walkthroughs/manifest.md) in our documentation for more.

Files in formats other than those named above (e.g., PDF, XML, TEI, TEX) cannot be processed into the Manifold Reader.

#### How to Ingest a Text

The **Ingest New text** button opens a drawer from the right where Texts can be added to the system in two ways: by directly loading a file from your system using **Upload a File** or by referring to one that is remotely hosted with the **URL** option.

This URL field expects a complete URL that directs Manifold to a specific file or archive that Manifold can Ingest.

After your upload file has cached to the system or a path has been provided in the URL field, the **Continue** button converts the drawer to a new view with display logs and final options.

The **Start Ingestion** button kicks off the actual process of converting and bringing the source file into the Manifold Reader. The system must first connect to the Manifold websocket (noted in the Log) before this option is actionable. When completed this button will change to read **Complete** and direct you back to the Texts views.

The Log sits below these buttons and documents the ingest process, line by line.

The **Restart Ingestion** option is used by Manifold developers when tweaking code around how Texts are added.

### Creating New Texts

Beginning with Manifold version 8, the system allows users to create new texts entirely within the system. This functionality will be of particular use to those who would prefer an alternative to the existing [Manifest Ingest/YAML process](../walkthroughs/manifest.md) and instead build their text within the system—either by authoring those text sections in Manifold’s rich-text or code editor, or by creating text sections from existing source files, like Word and Google documents.

When the **Create New Text** button is selected the system will slide a drawer open from the right of the screen with three editable fields: **Text Title**, **Cover**, and **Enter section name**.

The value you save to the **Text Title** field will serve as the title for the text you are creating. That title will appear as such in the list of Texts in this view, in the Manifold Reader’s menu bar, in analytics views, and in any content or reading group blocks that reference the text. This is the only required field in this drawer; the following two are optional, and all three can be adjusted later.

The **Cover** image serves as a thumbnail for the Text and can be configured to appear in the **Texts** Content Block on the Project landing page, in lieu of the default thumbnail depicting loose pages. The image saved here will be used as the cover for the text when the **Enable EPUB** option is selected from the header menu or when a project is exported for preservation purposes.

Image files can be dropped onto the **Cover** field or selected using your device’s file system by clicking the **Upload a File** link.

Manifold texts are made up of one or more sections. An ingested EPUB, for example, is one text with multiple sections, with each of the interior XHTML files within that EPUB standing as a section. A [Manifest Ingest](../walkthroughs/manifest.md), is likewise a single text made up of the various sections, sourced from an array of files, described in the YAML file. The final field in this drawer, labeled **Enter section name**, provides a means to begin scaffolding empty, placeholder sections that can later be authored in the system or created through an ingestion process. After a name value is entered in the field, the **Create** button beside it can be selected to save that new section to the text. The name of the newly saved section will appear below the field in a list with any other section names that you add in this space. Section names in that list include options to delete or reorder them, using either a mouse or keyboard input. Like other list elements in the Manifold backend, when the drag bars are highlighted with the tab key, the space bar will select them, and the up and down arrows can be used to reorder the section within the list. 

When the **Save New Text** button is selected, the new text will appear in the list of Texts in the main window. If sections were created, those will appear within that new text record’s **Sections** sidebar list. See details about the **Sections** sidebar options below.

### Text Categories

Text Categories are a grouping mechanism for Texts. Categories can be configured to display in a variety of ways or used as filters in Texts Content Blocks on Project landing pages (see [Layout](../backend/projects.md#texts-block)).

Within the Manifold Reader, Category titles appear in a yellow ribbon at the bottom of the page for member Texts. Category ribbons do not appear for uncategorized Texts or Texts with the **Published?** field toggled on (see [Editing a Text](../backend/texts.md#published)).

The **Create a new category** button opens a drawer from the right where you can add and name a new category. Once created, the Category container will appear in the editing pane, ready for Texts to be deposited into it.

## Editing a Text

To edit a Text, click on the title or the pencil icon from within the list of the project’s Texts. Each Text loaded to Manifold has its own configurable settings. When you select a Text from the Editing Pane, the view will transform, providing new options in the header (see [Interface Overview](../backend/texts.md#header)).

Managing a Text involves viewing and changing its properties through the following editing panes: **Analytics**, **Properties**, **People**, **Sections**, **Table of Contents**, **Assets**, **Metadata**, **Styles**, and **Reingest**. Even when pre-populated by the system, all of the fields in these panes can be modified.

### Analytics

This view displays Text-specific engagement, aggregating user activity into six reports, which can be configured to return information for specific periods of time.

#### Setting a Date Range

At the top of the view, the system provides options to configure custom or pre-set date ranges for which the subsequent reports will return values.

The **Start** and **End Date** fields are a means to manually set a specific range of time the system will report engagement. Dates can be entered manually in the month, date, year format or selected from the date picker that appears when your cursor lands in the field.

Alternatively, you can **Choose a Range Preset** that adjusts the reports to pre-defined date ranges: **Last week** corresponds to the Sunday through Saturday before the current span of days, **Last month** refers to the entirety of calendar month before the current one, **Last 7 days** includes the current day as the seventh, and **Last 30 days** does likewise—day 30 is the current day.

#### Reports

Following the date constraint options, the system displays six usage reports, some with multiple data points, reflecting user activity across the instance during the defined time span. Some of these metrics rely on the pop-up menu in the Manifold reader. See the [Engaging with Texts section](../using/reading_manifold.md#engaging-with-texts) for more context of those features.

1. Rendered as a line chart, the **Visitors** report shows the number of unique visitors accessing the Text during the set time span. Visits are tied to a user’s browser. A user with multiple tabs open to the Text in the same browser will be counted only once. But if the same user accesses the Text from two different browsers, they will be recorded as two different visitors.

2. The **Annotations** report is broken into four categories: Annotations, Public, Private, and Reading Groups. The first displays the tally of all annotations added to the Text during the selected time period. The next two categories show the number of annotations made under the banner of **My Public Annotations** and **My Private Annotations** in the Reader’s pop-up menu. The last category shows the number all annotations to the Text made within the context of a Reading Group, regardless of the Reading Group’s privacy settings. The value displays in the first category, Annotations, should equal the sum of the other three.

3. Values shown in the **Highlights** report corresponds to the total number of passages in the Text that have been highlighted during the selected time period. The system aggregates all of the highlights made to the Text in the value it reports, regardless of privacy setting or affiliation with Reading Groups.

4. The **Shares** report displays the aggregate number of times visitors have used the Manifold Share feature in the Reader’s pop-up menu to share a passage from the Text via an external application or URL. To be clear, Manifold does not track if those links are used; it only tracks when they are generated. The number displayed in the report is *not* affected by time constraints.

5. Each time a visitor uses the Reader’s Share feature to create an citation for the Text section, a record is created. The figure in the **Citations** report represents the total number of citation records currently associated with the Text section. It is *not* affected by time constraints.

6. Displayed as a list, the **Text Section Views** report aggregates the total number of times a specific section within a Text has been viewed during the set timespan. Each time a visitor opens a Text section, the system gives their browser a token associated with the the section. The system calculates the values it displays here by adding together the total number of tokens associated with the section from all the visitors who have accessed it. Data in this report are accurate to within a few moments, and section titles in the list open the Manifold Reader to the selected section.

:::note Exporting Analytics
At present there is no mechanism to export analytics data or mask from tracking the activity of specific users.
:::

### Properties

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

This is a Markdown-enabled field meant to capture a Text’s abstract. Copy saved here can be configured to display in a **Texts** Content Block on the Project landing page; it is also baked into the metadata that Manifold shares with other systems, crawlers, and social media platforms. Those other systems will likely *not* honor Markdown formatting and render the syntax as is.

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

Manifold does *not* supply this image with the metadata it shares about the Text with other systems, crawlers, or social media platforms; it sends instead the Project’s **Background Image**.

<Spec
    title="Cover Specs"
    items={[
        { key: "Max-Width", value: "56 px" },
        { key: "Height", value: "Automatically adjusts proportionally to width constraint" },
        { key: "Orientation", value: "Vertical" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>

#### Cover Image Alt Text

This field allows you to associate a brief plain-text description of the cover that will be announced to readers using Assistive Technology. Benetech’s DIAGRAM Center site, “[How to Describe Images](https://poet.diagramcenter.org/how.html)” is a good reference for learning how to craft alt text. We generally recommend that alt text not exceed 150 characters (including spaces).

#### Published?

This toggle affects the appearance of a Text in a **Texts** Content Block on the Project landing page and in the Reader. When this setting is engaged, Manifold will append a “Published” badge to its listing in a **Texts** Block. In the Reader, the system will remove the yellow ribbon that displays how the Text’s Category.

#### Section Label

Manifold includes navigation controls at the bottom of each Text section in the Reader. These controls give readers the means to move forward or backward through a Text. By default these navigation elements are introduced with a heading that reads “Next Chapter.” This field allows you to adjust that language to better reflect the content: e.g., Next Article, Next Essay, Next Section, etc.

It is *not possible* to remove or adjust the word *Next* from that heading.

#### Ignore Access Restrictions?

Restricted Access Projects require entitlements to view any of their content that doesn’t immediately render on the Project landing page (see [Managing Access](../backend/projects.md#access)).

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

When the system cannot recognize authorship from the source file, *already existing* Maker Records can be manually associated with a Text by typing names in the **Authors** or **Contributors** dropdown fields. New Maker Records cannot be created from this view.

**Author** listings can be configured to appear in **Texts** Content Blocks and will appear in auto-generated bibliographic cites the system creates. Those listed as **Contributors** do not appear in either of those spaces.

:::note Other Authorial Roles
The current Author/Contributor dynamic is based off the EPUB specification. At present, you cannot assign more nuanced roles for Makers (e.g., Editors, Translators, Introducers, etc.).
:::

### Sections

The **Sections** sidebar within a text record allows users to see the makeup of existing texts and edit those sections directly in the system, using Manifold’s rich-text or code editor. Users can also add new sections to a text from this view through the ingestion of a source file or by creating and authoring the section entirely in Manifold using its editor.

The layout of this view includes two buttons, labeled **Ingest New Section** and **Add New Section**, above a list of existing sections within the text. For texts that were originally ingested from a source file (like an EPUB or Manifest Ingest or Word document), the text sections that make up that source file are automatically displayed in the list view here. For newly created texts, if texts sections were added during that process, they too will appear here as named listings with no body content. If a user creates a new text without any sections, the list view here will be empty until a new section is either ingested or added.

#### Adding Sections to the Text

When the **Ingeset New Section** button is selected, the system slides a drawer over from the right where the user can either drag/drop a file from their device, or use their operating system’s file system to select one to ingest. Alternatively there is also a field labeled **URL** where the direct path of a remotely hosted file can be referenced for ingest. This process is for users who have already existing content they want to make a part of this text.

As such, this interface mirrors, exactly, the interface options for ingesting an entire text, described above, in terms of file expectations and process, with two exceptions:

First, instead of creating a whole text, when a file is ingested in this space it will function as one section of a larger text. While it is possible to have a text with only one section, the expectation would be that a user add that single-section text to the system from the project’s **Texts** sidebar, one level us, using the **Ingest New Text** button.

Second, it is not possible to ingest an EPUB or a Manifest Ingest as a single section of a text. EPUBs and Manifest Ingests are whole texts unto themselves and cannot be made to serve as a section of a larger whole. Thus only HTML, Markdown, Word files, and Google Documents are accepted by the system in this space.

Alternatively, it is also possible to add (or create) a new text section without ingesting a source document. This process is for those users who want to author or copy/paste text into Manifold’s code and rich-text editor to author a text section.

When the **Add New Section** button is selected, a drawer will slide open from the right of the window with one text field and three button options: **Section Name**, **Save and Open in Editor**, **Save**, and **Cancel**. **Section Name** is a required field, and the value entered here will appear as the name of the text-section in this backend list view of the text’s sections, in backend analytics views for the text, and in the Manifold reader’s menu bar and bottom navigation links. A text’s name can be adjusted at any time. See the following paragraphs in this section to learn more about that process.

Once a name has been entered for a the section, you can select on of the three remaining options:  **Save and Open in Editor**, **Save**, or **Cancel**.

If **Save and Open in Editor** is selected, the view will transform into Manifold’s editor where the section can be authored using the WYSIWYG or code editor. See the [Manifold Editor section](../backend/manifold_editor.md) for more on authoring content directly in Manifold.

Alternatively, when **Save** is selected the drawer will close and return you to **Sections** view with the name of the newly created section now appearing in the list.

Selecting **Cancel** will abort the creation of a new section and return focus to the main **Sections** view.

#### Adjusting Text Sections

The list of of text sections in this view is one that is meant to be engaged with and where you can make adjustments that effect the text’s overall appearance in the reader. Each list entry shows the section’s name and also provides options to (1) make the section the point in the text the Manifold Reader will open to when the text is accessed from the frontend, (2) delete the text section, (3) edit the text of the section, (4) configure the section’s system properties, (5) reingest the section, or (6) reorder the section among other existing sections. We consider each option more fully now in turn:

1. The first option available in each section list entry is a button, denoted by a play-button icon, to make that particular section the place where the Manifold Reader will open to when the text is accessed. When selected, a badge labeled **Start** will appear in the listing.

     Only one section can be serve as a text’s starting section. If no section is manually selected, Manifold will rely on the source file to determine which section the Reader should open to.

     For EPUBs, that section is described in the `toc.xhtml` file in the landmark space beneath the **Guide** section. The entry with the `epub:type="bodymatter"` attribute will be the section the EPUB will want to open. Older EPUB2s will open to the section that has the `type="text"` attribute in the **Guide** section of the `content.opf` file. For Manifest Ingests, Manifold will default to the section that includes the `start_section: true` attribute. For other source files that were ingested, Manifold will rely on the order in which they appear here.

     When no section is manually designated as the Start, the Manifold Reader will open to the first section in the list here in this view.

2. The delete button is a straight-forward option to delete that specific section from the text. If selected a confirmation prompt will appear to confirm the section should be deleted. Once done, the deleted section cannot be recovered.
3. Denoted by a pencil icon, the edit button opens the text in the Manifold Editor, where the section’s name and content can be edited directly in the system using Manifold’s built-in rich-text and code editor. For more on that functionality, see the [Manifold Editor section](../backend/manifold_editor.md) of this documentation. It is important to note that changes to a section’s name here will adjust the section’s name throughout the Manifold backend. On the frontend, any changes to a sections’s name here will appear in the Reader’s title bar and in navigation links at the bottom of the Reader. However, changing a section name from this space will ***not*** automatically adjust how the name appears in the **Contents** dropdown or in a Table of Contents content block on a project’s landing page. See the following section about the **Table of Contents** sidebar for more on that.
4. Pictured as an analog control panel equalizer, the Settings button opens a drawer from the right with three options, to configure the section’s slug for sharing, to add a citation override that will appear in the Reader’s [pop-up Cite tool](../using/reading_manifold.md#sharing-and-citing-texts), and the last to hide the section from navigation.

     The **Slug** field is meant to be used to create a shareable URL for a text section. The value entered in this field will **not** appear in the browser’s URL bar. By default, text sections in Manifold are assigned unique identifiers (UUIDs) when they are created. That UUID is what the system will display in the URL bar by default. But Manifold can also locate a text section by the slug entered here. Text section paths follow this pattern: 
     
     ```
     {instance-domain}/read/{project-slug}/{section-slug}
     ```
     
     As a more concrete example, suppose you are working on our Edge instance of Manifold (edge.manifoldapp.org) in a project whose slug is `running-advice`. And for a text section you give it a slug value here of `run-faster`. The path to that text section that you could share would then be
     
     ```
     edge.manifoldapp.org/read/running-advice/run-faster
     ```
     
     However, that path that resolves in the browser would appear more like this:
     
     ```
     edge.manifoldapp.org/read/running-advice/section/{UUID}
     ```
     
     When creating slugs, it is best to avoid spaces and special characters to ensure they resolve properly.
     
     The textbox field labeled **Citation Override**, overrides the programmatically generated bibliographic citation the system generates in the [Reader’s pop-up Cite tool](../using/reading_manifold.md#sharing-and-citing-texts). This gives project editors the ability to provide a suggested citation for each section of a text so that readers and researchers can properly reference it in their own work. This field accepts Markdown formatting, so you can include italics and links (for DOIs, etc.) as needed.
     
     The toggle labeled **Hide in reader navigation?** is an option for those text sections that are not yet ready to be displayed as part of the text—a section that is being authored or still in progress, for instance. When enabled, the navigation at the bottom of the Manifold Reader will not display links to this section. Listings of text sections in the Manifold Reader’s **Contents** dropdown functional independently of this toggle, and thus this toggle has no control over that particular space. To ensure your section is hidden from that **Contents** dropdown, see the following section about the **Table of Contents** sidebar.

5. The fifth option in a text section’s listing, described visually with a button of an upload icon, opens a drawer from the right where the section can be reingested from its source file. This replicates the behavior described above when using the **Ingest New Section** button. However, the idea here is to update a section that was originally ingested from an HTML, Markdown, Word file, or Google Document with any changes that were made to the source file. While it is possible to make those adjustments now directly in Manifold using the [Manifold Editor](../backend/manifold_editor.md), this option may better meet the needs of certain workflows. As with the earlier Ingest view, this drawer has an input box where a local file can be drag and dropped or selected using the operating system’s file system. Or, following that space there is a field labeled **URL** where the direct path of a remotely hosted file can be sourced to replace the current section in the system. Best practice is to only reingest a text section using the same kind of file that was used during the original ingest process. For example, if a Word document was used as the source of the original ingestion, it is better to use a modified version of that Word file than, say, a Google Document copy of that file.
6. The last option in a text section list entry is one to reorder it among the list of other text sections, using the button displaying two parallel grab bars. Those grab bars can be manipulated with a mouse by selecting them and then moving the entry up or down through the list. Alteratively entries can be reordered by tabbing to the option with the tab key, selecting it with the space bar, and then using the up or down arrows to adjust where the text section appears in the list. The order of the sections as they appear here will be the order for how the sections appear in the Manifold Reader and how the Reader announces the next and previous sections in the navigation space at the end of each section. This functionality mirrors how the order of text sections is defined in the spine section of the `content.opf` file in an EPUB file. Or, for a Manifest Ingest, how text sections are ordered according to how they appear beneath the `toc` list element.

:::caution Important Takeaways for the Sections Sidebar
- Changing the name of a text section in this view adjusts its name in the Reader’s title bar and in navigation links at the bottom of the Reader but ***not*** in the Reader’s **Contents** dropdown or in a **Table of Contents** content block.
- This is the space where you can specify a chapter- or text-level bibliographic citation used by the Reader’s Cite tool.
- The order of the text section entries in the Sections sidebar is the order in which those sections will be announced by the navigation links at the bottom of the Manifold Reader.
- ***Everything*** having to do with the order and name of text sections in the **Contents** dropdown that appears in the menu bar of the Manifold Reader is controlled independently by settings found in a text’s **Table of Contents** sidebar view, discussed in the following section.
:::

### Table of Contents

The Table of Contents sidebar is concerned with only one thing: how and in what order the sections of a text display in the Manifold Reader’s **Contents** dropdown and in a **Table of Contents** content block that references the text on the project’s landing page.

While the **Sections** sidebar lists all the sections of a text, this view allows you to add nuance, nesting those text sections or adding sub-entries that point to content within an existing text section that warrant special attention. 

Changes made in this view will *not* affect the order in which the sections appear in the Manifold Reader, and removing sections from this view will not delete them from the system. This paradigm mirrors that found in EPUBs, where the order and content of a section is not directly coupled with its table of contents. If the order of sections in the **Sections** sidebar is akin to the spine section of an EPUB’s `content.opf` file, the options in this view are akin to an EPUB’s `toc.xhtml` or `toc.ncx` file, which defines how the sections appear in an EPUB reader’s navigational views.

This view includes two buttons and a list of a text’s constituent sections. The system doesn’t automatically generate a Table of Contents list for texts originally created in Manifold. For texts created originally in Manifold, the list in this view will be empty initially.

Alternatively, for texts that are ingested from a source file, the system will display here a list of text sections in the order they appear in the spine section of the source’s contents file. For EPUBs, that will come from the `toc.xhtml` or `toc.ncx` file. For Manifest Ingests, the `toc` section of the YAML file describes the sections and their order within the text.

While EPUBs and Manifest already have their own internal contents lists, this space will make it easier to refine how the structure of those documents renders in the Contents dropdown or Table of Contents content block.

For single-file ingests, like a Word or Google document, those texts only comprise one text section, and that one section will automatically be listed in this view.

#### Add TOC Entry

The first option available in this view is a button titled **Add TOC Entry**. Its purpose is to add a list entry for an existing text section or an entry that will point to a specific point within an existing text section—a heading or a image, for example. When selected a drawer opens from the right with three fields. The first, **TOC Entry Name**, is the name this section will appear as here in this backend view, in the Reader’s **Contents** dropdown, and in a **Table of Contents** content block on the project landing page.

Next, under the Section Link heading, there is a dropdown menu labeled **Select a Text Section**. This dropdown tells Manifold where the new contents list entry that is being created should point. This table of contents is a strictly functional one, meaning every table of contents listing must to point to a text section or an element within a text section. This dropdown will provide a list of all existing sections for this text to choose from.

The last field in this view, labeled **Anchor Link** is an optional text field that accepts an `id` value. IDs are HTML global attributes that are used to identify a specific element within a document. To learn more, see the [Mozilla Web Documentation for HTML id elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id). Here in this view, an `id` is the means by which a Table of Contents list entry can point to a specific location within a text section instead of the very beginning of the section. That location (or “anchor”) might be a heading, an image, an extract, etc.

If you are unsure of the anchor id you want to reference or if you need to add one, navigate to the corresponding text section using the **Sections** sidebar and open the [Manifold Editor](../backend/manifold_editor.md). Using Manifold’s code editing view, you can discover any existing ids or add news ones as needed, which can then be referenced here as anchors in this **Table of Contents** sidebar view. The **Anchor Link** field expects only an id value; that value should *not* be prefaced with a hash tag (\#).

#### Auto Generate TOC

The second option available in this view is a button labeled **Auto Generate TOC**. Because the table of contents list in this view will automatically be populated by the spine section of an EPUB or Manifest Ingest, this option is primarily aimed at uses cases where a text is being created within Manifold. In such instances, the system leaves this Table of Contents list view empty by default. Selecting this button will build a list of text sections according to the content and order or text sections as they currently appear in the **Sections** sidebar. Once the table of contents is built here, it can be modified to better portray the organizational hierarchy of the text.

While selecting this option refers back to the list of text sections in the **Sections** view, the connection between these two spaces is not live: additions or reordering of text sections in the **Sections** sidebar do not automatically update the Table of Contents list in this view. The only direct connection between the two views is when a text section is deleted from the **Sections** sidebar—when that happens any corresponding list items associated with that deleted section will disappear from this view as well. The reverse is *not* true: if a listing is deleted from this Table of Contents list, it will still remain in the system and continue show in the **Sections** sidebar.

When **Auto Generate TOC** is selected, the user will first be prompted to confirm their decision to have the system auto-populate this Table of Contents list. In situations where there is already a list of sections displaying in this view, having the system Auto Generate a TOC will overwrite the existing list in favor of the newly generated one.

#### Table of Contents List

This list of text sections in this view represents how the text sections will be named and ordered in the text’s navigational table of contents that renders in the Contents dropdown in the Manifold Reader and in any associated Table of Contents content blocks that are set to appear on the project’s landing page. Each list item here has three available options, each following one another after the name of the list item: (1) delete the entry, (2) edit the entry, and (3) reorder the entry within the list.

1. Immediately following the name of the text section in the list item there is a trashcan button that will delete that section from appearing in the table of contents. Deleting an entry here does not delete the corresponding section from the text; it simple removes a listing for it in the Contents dropdown and in a Table of Contents content block. Within the Manifold Reader, a section deleted from this view will still appear according to where it is ordered in the list of text sections in the **Sections** sidebar. Likewise, the navigational links for next and previous sections that appear at the bottom of the Manifold Reader will announce the section according to the name and order of the section as it appears in the **Sections** sidebar. Because this space does not actually remove actual content there is no warming prompt when the delete button is selected; the section is simply removed. However, it can easily be added back in using the **Add TOC Entry** option described earlier in this section.
2. Described visually with a pencil button, the edit option for Table of Contents entries opens the same drawer from the right as when the **Add TOC Entry** button is selected. The only difference is that now all the applicable fields are filled in. When this option is selected, the entries name, association with a corresponding text section, and anchor link can be adjusted. As a quick reminder, changing the name of the TOC entry here only adjusts the name of the entry in the Contents dropdown and in Table of Contents content blocks. To change the name of the section as it appears in the Manifold analytics views in the backend, in the Reader’s title bar, and in the Reader’s bottom navigational links, use the **Edit** option for the text section in the **Sections** sidebar.
3. The last option, available by selecting the button showing two parallel lines representing grab bars, makes it possible to reorder the section with in the list. Items can be moved before or after other entries as well as nested under entries to indicate a hierarchy.
  
  Using the mouse, select the grab bars and then move the entry up or down in the list to the desired location. To nest an entry, while you have the text section you want to move selected, hover over the entry it should be nested under. The parent element will show with a green outline. When you release your selection, the entry you positioned will now appear indented in the list beneath the parent entry. Entries can be nested up to ten levels. To reorder entries using a keyboard, tab to the grab bars and then select the entry with the space bar. Using the up and down arrows you can move the entry above or below other entries or, to nest the entry, you can move it directly onto another entry. When you release your selection, it will now appear indented beneath the parent section you dropped it onto.

:::caution Important Takeaways for the Table of Contents Sidebar
- It is not possible to add descriptive or contextual elements (like bylines) to a Table of Contents that don’t direct a reader to a specific portion of the text. In other words, *every* Table of Contents list item must point at a specific text section or an anchor within a text section.
- The order of entries here in the Table of Contents sidebar is how the entries will display in the Contents dropdown. It does not affect how the entries are announced in the navigational links at the bottom of the Manifold Reader. Thus it is possible to create a confusing experience for readers if the order of entries in the **Sections** sidebar differs from the order of entries here.
- If you delete an entry from this Table of Contents list, it still appears in the navigational links at the bottom of the Manifold Reader. Deleting an entry here only removes it from the Reader’s Contents dropdown and from any Table of Contents content blocks that reference the text.
- However, deleting a section from the **Sections** sidebar automatically removes it from the list displayed here in the **Table of Contents** sidebar.
- This **Table of Contents** view only controls what appears in the Contents dropdown in the reader and the order in which they appear.
:::

### Assets

In order for Manifold to be able to ingest EPUBs, HTML, Markdown, Word, and Google Documents into its Reader, the system needs to be able to accept a wide array of assets that go into the construction of those files. These **assets** are the files that make up a Manifold text—an EPUB, HTML file, or Word document, an image, audio, or video file that appear inline with the body content—or files that provide instruction or contribute to the logic or rendering of a text, like a YAML or CSS file.

Beginning with version 8, Manifold allows you to see a manifest of all those constituent assets that were ingested with a text by way of this **Assets** sidebar. Here you can also manually add new assets into the system and access their paths so they can be easily referenced throughout the instance. This functionality is intended to help users load and easily source the content needed to create and edit texts in Manifold.

Pertinent information about each of the asset types is provided at the end of this section in a tabbed list. For specific examples of how to embed an asset in a text or make it available elsewhere in the system, see the Edit Text Sections page.

This view is made up of a search bar, a button to create new assets, and a paginated list displaying those assets that were ingested with the text or have been manually added to it.

#### Searching Assets

Situated below the header, the search bar allows you to search for assets associated with this specific text. The system will *not* return results for assets that were loaded to other texts, even if those texts are part of the same Manifold project.

When a search yields results, those results will appear below the search bar in the main body of this view, displacing the full list of the text’s assets.

The search bar includes two buttons: one to **Reset** the search bar and results and the other, labeled **Options**, exposes a dropdown so users can sort through the list of results by name or according to the date and time they were added to the system.

#### Adding and Editing Assets

Below the search bar there is one button titled **Add New Asset**. When that button is selected, a drawer will slide open from the right with a field to provide a name to the asset and a box into which you can either drop the asset file that you want to upload, or from which you can use the **Upload A File** link to select the file you want to upload using your operating system’s file menu. Both of these fields are required in order to successfully create the new asset. See the tabbed list below for a list of all the acceptable file types the system will accept in this space.

Once an asset is saved to the system it will appear in the main body of this view, listed among any other existing assets. Each listing includes the name and path of the asset, a button to copy the asset’s URL (or “path”) to your system’s clipboard, and buttons to delete and edit the asset.

If an asset it deleted it will be entirely removed from the system and will no longer be able to be displayed in spaces in the text or instance where it is referenced.

Selecting the pencil icon to edit an asset will open a drawer from the right and present basic information about the asset. The drawer includes four fields: **Asset Name**, **Asset ID**, **Asset URL**, and a space to replace the existing asset file with a new one under the heading **Upload Asset File**. Of these only **Asset Name** and the **Upload Asset File** can be edited.

The **Asset Name** value is how the asset is labeled in list view. This field is required when creating a new asset. For assets that are added to the system when a text is ingested the system will automatically create a random UUID to stand in for the name. That name is not tied to the asset’s path, and thus it can be changed without concern for breaking established references to the asset.

The **Asset ID**, however, is tied to the path for the asset and thus cannot be edited. It displays here purely for reference purpose. Likewise, the **Asset URL** (or path) is another field that cannot be adjusted. However there is a button beside the URL value, labeled **Copy URL**, that will copy the asset’s path to the clipboard. This mirrors the functionality available from the list view, where the same button also appears.

Below the asset’s URL is a box where you can replace the existing asset file with a different one, either by dragging and dropping the file into the space or by selecting one through your file system.

For details on how to properly use the information presented in this view and reference an asset in a text or other component of the instance, see the [Manifold Editor section](../backend/manifold_editor.md) section.

<Tabs
  groupId="assets"
  defaultValue="images"
  values={[
    {label: 'Images', value: 'images'},
    {label: 'Video', value: 'video'},
    {label: 'Audio', value: 'audio'},
    {label: 'Document', value: 'document'},
    {label: 'Spreadsheet', value: 'spreadsheet'},
    {label: 'Presentation', value: 'presentation'},
    {label: 'Packaging', value: 'packaging'},
  ]}>

<TabItem value="images">

All of the image types accepted in the **Asset** field can be displayed in the browser in the body of a text:

- .gif
- .jpeg
- .jpg
- .png
- .svg

</TabItem>

<TabItem value="video">

Of the following, only video files in the **MP4** and **WEBM** formats are playable in the browser. The other formats below can be hosted in the system and made available for direct download to a reader’s device. For more technical information about these media types, the [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers "Technical details about media container formats") offers a good primer.

- .avi
- .flv
- .mov
- .mp4
- .webm
- .wmv

</TabItem>

<TabItem value="audio">

Only audio files in the **FLAC**, **MP3**, and **WAV** formats are playable in the browser. The other formats below can be hosted in the system and made available for direct download to a reader’s device. For more technical information about these media types, the [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers "Technical details about media container formats") offers a good primer.

- .flac
- .mid
- .mp3
- .oga
- .ogg
- .pls
- .wav
- .wma

</TabItem>

<TabItem value="document">

Documents can be hosted for various purposes: as a means to deliver a downloadable file to readers that may not be able to be displayed in the Manifold reader or to allow other backend editors on an instance the means to source a particular text section into their own project. Of the following, Manifold can display **DOCX**, **EPUB**, **HTM**, **HTML**, **MD** in its reader. Groups of **DOCX**, **HTM**, **HTML**, and **MD** files packaged, along with a **CSS**, in a **ZIP** archive can also be displayed in the reader when accompanied by a **YAML** or **YML** file. This is known as a “Manifest Ingest.” See our [walkthrough documentation](../walkthroughs/manifest.md "Create a Manifest Ingest") for more about creating and using Manifest ingests.

:::caution What about TEX and LATEX files?
Files prepared in the **TEX** or **LATEX** formats are technically acceptable to Manifold; however they do not function or display properly in the system. Such files can be hosted and made available for download, but they will not render in Manifold’s reader.
:::

- .css
- .doc
- .docb
- .docm
- .docx
- .dotm
- .dotx
- .epub
- .htm
- .html
- .latex
- .md
- .ods
- .odt
- .ots
- .ott
- .pdf
- .rtf
- .tex
- .txt
- .xhtml
- .xml
- .yaml
- .yml
- .zip

</TabItem>

<TabItem value="spreadsheet">

Manifold cannot display spreadsheet files its reader; however the following types can be hosted and made available for direct download.

- .csv
- .xla
- .xlm
- .xls
- .xlsb
- .xlsm
- .xlsx
- .xlt
- .xltm
- .xltx
- .xlw

</TabItem>

<TabItem value="presentation">

Manifold cannot display presentation files its reader; however the following types can be hosted and made available for direct download.

- .odp
- .otp
- .potm
- .potx
- .ppam
- .ppsm
- .ppsx
- .ppt
- .pptm
- .pptx
- .sldm
- .sldx

</TabItem>

<TabItem value="packaging">

The following file types are most often seen packaged in existing EPUBs and thus are accepted into Manifold. However, the system will not natively display any of these: Manifold will not execute hosted Javascript in its reader nor will it display custom fonts. That said, if there is a need to make such files as these available to readers, they can be made hosted in the instance and made available for download.

- .dmg
- .js
- .ncx
- .odf
- .smil
- .ttf
- .woff

</TabItem>

</Tabs>

### Metadata

This view groups into different categories the available metadata fields that describe a Manifold Text. Values displayed here appear in the Manifold Reader in the **About this Text** section, accessible from the **Contents** dropdown, and are also included in the BagIt archive when a Project is exported (see [Exporting and Preserving](../backend/projects.md#exports)).

The first two fields, **Citation Override** and **Rights** are outliers. They appear in *two* spaces: in the **About this Text** modal with the other metadata in this view, as well as in the footer of the Manifold Reader, when it is open to this Text. In the footer, the citation information will appear before the copyright line.

Metadata can be entered in this view manually; however, when a Text is ingested, Manifold will search the source files for information it can use to populate the **Rights** and **Language** fields.

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

When a new Text is ingested, Manifold will create a stylesheet record here that includes most rendering instructions that were defined in the source file. In some cases, Manifold ignores certain selectors and attributes:

- Manifold does not accept universal selectors, with the exception of the asterisk operator.
- It is not currently possible to bake a new font into the system using an `@font-face` rule.
- The system generally excludes these attributes: `position`, `font-family`, `overflow`, `overflow-x`, `overflow-y`, `z-index`, `max-width`, `line-height`, and `letter-spacing`.
- Font sizes cannot be defined using point or pixel values.
- Font weights cannot be set using numeric keyword values (e.g., `font-weight: 400;`)
- When using a heading selector (e.g., `h1, h2`), Manifold does not allow a size, weight, line-height, margin, or padding to be set.
- Paragraph blocks will not retain styles associated with `font-weight`, `size`, `font-size`, or `line-height`.
- The system ignores width values associated with `div` elements.
- Attributes that define the color or links is overwritten by the system’s theme settings.

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

Since there is no authoring component in the Manifold interface, edits to already ingested Texts need to be made to the source files that were originally ingested. The updated source files can then be loaded to the system from this view, which mimics the interface for adding a new Text (see [Adding Texts](../backend/texts.md#creating-new-texts)).

When a Text is Reingested, all the annotations, highlights, and Resource placements that have been made will persist, unless such drastic changes were performed that the system can no longer identify their original anchors. In this unlikely case, annotations and highlights will be orphaned and no longer accessible. More likely, small edits will force the system to guess where annotations and Resources were originally placed with results not always being exact. The Reingest process is among the most technically complex in the system and is routinely tinkered with to better dial in the expected results.

Some Text-record fields are overridden by the Reingest process, with values from the newer source file overriding the existing values:

<Spec
    title="Text Record Fields Affected by Reingesting"
    items={[
        { key: "Properties", value: "Title, Subtitle, Publication Date, Description, Cover" },
        { key: "People", value: "Authors, Contributors" },
        { key: "Metadata", value: "Rights, Unique Identifier" },
    ]}
/>
