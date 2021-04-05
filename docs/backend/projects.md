---
id: projects
title: Projects
sidebar_label: Projects
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Spec from "@theme/Spec";
const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
The Project detail views discussed in this section are accessed by selecting a Project from a list or library view while in the Manifold Backend.

Users with **Admin**, **Editor**, or **Marketeer** roles can edit any Project in an instance. **Project Creators** can edit only Projects they’ve created. Users with the default **Reader** role don’t have access to the backend by default but can be given permission to specific Projects on a one-off basis (see [Users](../backend/users.md) and [Managing Access](../backend/projects.md#managing-access)).
:::

## What is a Project?

Each Manifold instance comprises a library of Projects. Those Projects are the principal grouping mechanism in Manifold. They provide a framework to serve scholarly content in a singular reading experience that is thoughtfully curated and intentionally cohesive. Projects are made up of modular Content Blocks that contain Texts and Resources, as well as descriptive media and metadata. Projects can be simple or complex and range from static to iterative expressions.

## Interface Overview

Within this view, you can create, preview, or delete Projects; add to them Texts and Resources; determine how and for whom they will render; and export them for safe keeping at your institutional repository or preservation agency of your choice.

The Project details page is made up of three parts: a header up top, a sidebar floating on the left, and an editing pane taking up central space of your viewport. These three elements each adapt to the context of your work and location within a Project.

The Project header displays the title and subtitle of the Project along with options to **Preview** or **Delete** it. When you drill down into the records for individual Texts or Resources contained within the Project, the Header will add a link to return to this view and provide additional options specific to the context of your work (see [Texts](../backend/texts.md) and [Resources](../backend/resource.md)).

The Sidebar Menu groups into categories all the various Project options available to you from the Manifold Backend. As you navigate through this menu, different fields and controls will display in the Editing Pane that are all considered fully in the [Editing a Project](../backend/projects.md#editing-a-project) section below.

As you drill down into individual Text and Resource records, the Sidebar menu will adapt, providing new options suitable to the context of your work.

The Editing Pane displays a Project's settings and fields, based on the Sidebar Menu item you have selected. In this space you can add the files and metadata that make up your Project as well as adjust the configuration for its display to readers.

## Creating Projects

The **Add a New Project** button is accessible from the **Dashboard** or **Projects** menus. When that option is selected, the system kicks off the Project creation process by asking for some basic details about the Project you are creating. *Only* the **Title** field is required to create the Project, and any information provided at this stage can be edited later.

The four options in the **Layout** section of this page inform the system how to begin scaffolding out the Content Blocks that will make up your Project. If you select **Yes** for the first prompt, the system will include a **Texts** Content Block; **No** will exchange that block for a **Table of Contents** one. The other three questions are more straight forward: affirmative responses will add **Resources**, **Markdown**, or **Recent Activity** Content Blocks to your Project, respectively. If you select **No**, the system will simply not stage those Blocks for you (see the [Layout section](../backend/projects.md#layout) for more about Content Blocks).

You can safely ignore this section and edit your Project’s layout later.

## Analytics

This view displays Project-specific engagement, aggregating user activity with it into five reports, which can be configured to return information for specific periods of time.

#### Setting a Date Range

At the top of the view, the system provides options to configure custom or pre-set date ranges for which the subsequent reports will return values.

The **Start** and **End Date** fields are a means to manually set a specific range of time on which the system will return user engagement information. Dates can be entered manually in the month, date, year format or selected from the date picker that appears when your cursor lands in this field.

Alternatively, the **Choose a Range Preset** field offers four button options that will adjust the reports to pre-defined date ranges: **Last week** corresponds to the Sunday through Saturday before the current span of days, **Last month** refers to the entirety of calendar month before the current one, **Last 7 days** includes the current day as the seventh, and **Last 30 days** does likewise—day 30 is the current day.

#### Reports

Following the date constraint options, the system displays five usage reports, some with multiple data points, reflecting user activity with the Project during the defined time span.

1. Rendered in a line chart, the **Visitors** report shows the number of unique visitors accessing any page on the instance during the set time span. Visits are tied to a user’s browser. A user with multiple tabs open to the site in the same browser will be counted only once. But if the same user accesses an instance from two different browsers, they will be recorded as two different visitors.

2. The **Annotations** report is broken into four categories: Annotations, Public, Private, and Reading Groups. The first displays the tally of all annotations added to Texts contained within the Project during the selected time period. The next two categories show the number of annotations made under the banner of **My Public Annotations** and **My Private Annotations** in the Reader’s pop-up menu. The last category shows the number all annotations to a Project Text’s made within the context of a Reading Group, regardless of the Reading Group’s privacy settings. The value displays in the first category, Annotations, should equal the sum of the other three.

3. The value shown in the **Highlights** report corresponds to the total number of passages that have been highlighted during the selected time period. The system aggregates highlights from all of the Project’s Texts during that span, regardless of privacy setting or affiliation with Reading Groups.

4. Each time a user follows a Project, the system creates a record of it. When a user un-follows a Project, that record is destroyed. The value shown in the **New Followers** report is the total number of follower records that were newly created for the Project and still existing during the date range selected.

5. The **All Followers** report returns the total number of currently existing follower records associated with the Project. The figure here is ***not*** affected by time constraints.

:::note Exporting Analytics
At present there is no mechanism to export Analytics data or mask from tracking the activity of specific users.
:::

## General

#### Title and Subtitle

These two fields reflect the name of your Project and display in the Hero Content Block on the Project's landing page. In Library views, only the main title is shown. In the Backend, both the title and subtitle appear in associated navigation menus.

The **Title** field cannot be left empty; however **Subtitle** is optional.

#### Publication Date

Manifold uses the **Publication Date** to generate bibliographic citations for readers wanting to reference the work. The value saved here refers to the publication date for the Project as a whole.

Publication dates can also be saved to individual Texts within the Project. Publication dates for individual Texts supersede the publication date of the Project when citations are crated.

A Project's Publication Date can also serve as criteria for sorting and displaying Projects contained in [Project Collections](../backend/project_collections.md).

#### Slug

A slug is the part of a URL that directs a browser to a specific webpage within the context of a larger domain. The **Slug** field here is an opportunity for you to customize the address of the landing page for the Project you are modifying.

In Manifold all Project landing pages follow the same URL pattern: domain/path/slug. The domain represents the homepage for your entire instance; the path describes the nature of the address, in this case that it’s a Project; and then the slug, which identifies a specific project. In the following example, the slug is “the-lab-book”.

```
https://manifold.umn.edu/project/the-lab-book
```

When you create a new Project, the system automatically populates this field with a slug based on the Project’s title. If that’s not in keeping with your naming conventions, you can adjust it.

:::tip Best Practice
We recommend that you settle on a Slug before toggling your Project out of Draft mode to avoid potential 404 errors resulting from broken links.
:::

#### Project Thumbnail

The Project Thumbnail is the image associated with a Project. It appears to readers in Library views on the Manifold frontend above the Project title and layered under the Follow button.

The default thumbnail depicts a pair of glasses, a comment block, and a pencil. For new Projects, or for Projects that don't have a custom thumbnail, the default thumbnail appears here in the backend beneath the **Current** heading.

You can adjust the color scheme for the default thumbnail by selecting one of the six preset color swatches shown in the grid's center, labeled **Default**.

You can replace the default thumbnail with an image of your own by selecting “Upload a File” under **Custom**.

The Project Thumbnail, whether a system default or Custom one, will appear in the Project’s Hero Content Block until you replace it with a Cover Image.

<Spec
    title="Project Thumbnail Specs"
    items={[
        { key: "Max-Width", value: "160 px" },
        { key: "Max-Height", value: "160 px" },
        { key: "Format", value: "GIF, JPEG, JPG, PNG" },
    ]}
/>

#### Subjects

Subject classifications illuminate the scope of material on your instance broadly and functionally provide a means for you to label and sort Projects. Subjects are actionable in two places in the application: On the frontend, Subjects appear on the **All Projects** library page in the **Show All** dropdown as a means for readers to filter and display only those Projects that match their selection. In the backend, Subjects can function as search criteria for “Smart” [Project Collections](../backend/project_collections.md).

Subjects can be assigned at the Project level here by any user who has the ability to edit the Project. The interface supports both typeahead or dropdown selection.

Because subjects take a high-level view of the body of work on your instance, the [catalog of Subjects](../administering/configuring/project_subjects.md) and the ability to add new Subject listings is the province of Admin users alone.

#### Tags

Tags function much like Subjects, but there are no means to edit or delete tags in the system.

Unlike Subjects, Tags can be created by any user who has permission to modify a Project and can be used to add further richness to the existing subject classification. Like Subjects, the Tag field provides a helper so that as you begin typing any similar tags that have already been created on your instance will be revealed.

To see how Tags can be used to curate Smart Collections, visit the [Project Collections](../backend/project_collections.md) section.

#### Draft Mode

For use when wanting to load and edit a Project and its materials before publishing it for a broad readership. When toggled on, Projects are only visible to users logged in with Administrator, Editor, or Marketeer roles—and to Project Creators on Projects where they have **Can Modify Project** permissions. New Projects are set to Draft Mode by default, and Draft status is denoted in the Project library, as well as on the Project landing page.

When a Project is in Draft Mode, users who have permissions to view the Project may annotate, highlight, and even share Texts that are part of the Project. Links shared on social media will only work for those who also have permission to access the Project and are logged in. All annotations, comments, and highlights will persist with the Project's Text when Draft Mode is toggled off.

Determining when drafts are made public falls to the discretion of publishers.

#### Featured

Featured Projects take pride of place on the home page in a section of the library all of their own. Only four Projects display in this section at a time. If more than four Projects are toggled to be featured, only the four most recent will show. By default, new Projects are *not* set to be featured.

:::note
If Project Collections are being employed, the Featured Projects blade will not appear. But Projects marked as being Featured can be sorted into a Smart Collection. See the [Project Collections](../backend/project_collections.md) section for more.
:::

#### Finished

The Finished toggle is a means to indicate that a Project is no longer actively iterating. When toggled on, Manifold will show the Project's published date rather than its last updated date in lists. When the switch is off, Manifold will show when the Project was last updated.

#### Standalone Mode

By default, Manifold presents Projects within the context of a library of titles. Standalone Mode provides an alternative, so that you can selectively remove specific Projects from library and search views and allow the Projects to function instead as microsites that can be linked to directly from an existing web presence (c.f., [Disable Library Views](../administering/configuring/general_settings.md#disable-library-views)).

When a Project is offered in Standalone Mode, the Project header is replaced with a more minimal standalone header that persists down the page on scroll. The Project’s title and subtitle are integrated into the standalone header and serve as clickable links that redirect to the Project landing page.

The default setting for new Projects is for Standalone Mode to be **Disabled**. In that state, the Project appears in the library context, is indexed with other library Projects by Manifold’s search engine, and appears with the standard Project header.  

When Standalone Mode is **Enabled**, the Project still appears in library contexts and searches but will render in Standalone Mode when the following suffix is appended to the Project’s URL:

```
?mode=standalone
```

If standalone mode is **Enforced**, that Project can only be viewed in Standalone Mode regardless of from where a user is coming to the Project. Projects that are enforcing Standalone Mode are removed from all of the instance’s library views.

The following behaviors can also be expected when a Project is in Standalone Mode: the standalone header will respect whether the Project hero is set to light or dark mode, search in the Project is scoped to the Project, the reader menu only includes a link to the Project, and Project subpages for individual Resources or Resource Collections show the standalone header with no breadcrumbs.

#### Top Bar Text

The top bar is a thin, customizable band that serves as a means to contextualize a Manifold page for readers in relation to a larger mission.

Text entered in this field appears in the top bar for the specific Project, superseding the top bar text entered by those with Administrator credentials on the Theme Settings page.

The Top Bar color and display parameters are only configurable for users with Administrator credentials from the Theme Settings page. If this field is left blank, the Top Bar settings for the Project will default to the instance-wide settings.

The Top Bar is *not* required for standalone Projects; it is highly configurable and can used on a project-by-project basis or it can be used in conjunction with standalone Projects settings or generally across the entire instance.

At present the Top Bar does not support Markdown formatting.

#### Top Bar URL

The top bar functions as a clickable link. The URL entered here will serve as the link target to any user who clicks on the top bar. As with the Top Bar Text above, the value entered here will supersede the input from the Theme Settings page.

#### Disable Public Annotations and Comments

When this local setting is toggled on, users will not be able to pin public annotations to any Text that is a part of this specific Project. *This does not prevent users from annotating Texts in this Project entirely.* Users will be able to leave annotations in the context of a reading group of which they are a member—and viewable to other members of that group—or as a private annotation, viewable only to the user.

Because of that, someone who doesn't have an account, or someone who is logged in as a Reader, won't see annotations on any Text in the Project so long as this toggle is engaged. The exception would be Readers who are members of reading groups: they will be able to see annotations that have been left in the context of those reading groups. 

While this setting is engaged, it will not possible to convert a private annotation into a public one, and public reading groups will function as if they were private ones.

To learn how to disable public annotations globally across an entire Manifold instance, instead of locally for specific Projects, see the [General Settings](../administering/configuring/general_settings.md).

Likewise, that section describes how to further limit the annotation functionality by disabling reading groups across an entire instance. When publishers disable both public annotation and reading groups globally, users will only be able to leave private annotations they alone can see.

## Layout

Project landing pages are highly customizable and modular. This level of control is achieved through the use of **Content Blocks**—distinct containers that render Project materials in blocks that span horizontally across the visual space of Project homepage.

There are seven different kinds of Content Blocks available in the system: Hero, Markdown, Metadata, Recent Activity, Resources, Table of Contents, and Texts. The Hero block is required of every Project and is anchored immediately below the menu bar. All other content blocks are optional and can be arranged as desired below the Hero block. Projects can contain multiple Markdown, Table of Contents, and Texts blocks, while the Metadata, Recent Activity, and Resources blocks can only appear once.

To add a block to your Project’s layout, you can drag and drop the block’s tile from the Blocks section to the Layout section. You can do the same by focusing on the block with your keyboard and pressing the space bar and then arrow keys to arrange it. Or you can click on the plus sign button on the right of the tile.

For those Projects that evolve, new blocks can be added and existing ones can be deleted, hidden, edited, or rearranged. Deleting a block permanently removes the block and its content from your Project. Hiding a block retains the block and its content but no longer displays it on the frontend for readers to see. 

The delete and hide buttons appear in two spaces: in the Layout view and in a block’s details drawer. The delete button appears as a trashcan; the hide button an icon of an open eye. When hidden, the eye icon will appear with a slash through it. To un-hide a block, click on the crossed-out eye icon.

You can edit a block’s content by selecting the pencil icon to the right of the block's hide button, which will open a drawer from the right with all the blocks details. To rearrange where the block appears on the Project homepage, select the grab bars beside the pencil icon with your mouse or keyboard and move it up and down. On a keyboard this is done by pressing the space bar followed up the arrow keys.

All content blocks are contextual relative to whether or not a Project is configured for restricted access (see [Access](../backend/projects.md#access)). Using the **Access** dropdown in a blocks details pane, when and for whom this block will appear can be configured. If the default setting, **Always Visible**, is selected, the block will be visible on the Project landing page for all who arrive there, whether they have accounts on the instance or not. When **Visible Only When Authorized** is chosen, only those who (1) have accounts on the instance, (2) are logged in, and (3) have secured the necessary entitlements to access the Project will see the Content Block. Conversely, if **Visible Only When Unauthorized** is selected, the block will display only for those users who don’t have specific entitlements to the Project or aren’t logged in to their accounts.

:::note Content Block Error Messages
Most Content Blocks include a few decision points about what, or how, to render material in the block. When Manifold needs more information from you to display a block, the system will show an alert that only Project managers can see. This warning appears as an exclamation mark icon in both the backend and on the forward-facing landing page.
:::

### Hero Block

The Hero block announces to readers what the Project is about and who is behind it. It can be as basic or as involved as the material requires. Controls to adjust the appearance of the Hero block are contained within the block’s **Description + Images**, **Calls-to-Action**, and **Social Links** submenus.

Listings from the [**People** sidebar](../backend/projects.md#people) appear in the Hero as well to describe a Project’s authorship. Only Authors will appear with an associated avatar image, and then only in cases when there are fewer than three Author listings, so as not to clutter the available space. Contributors will be named but will never display with an avatar.

#### Description + Images

This menu opens up as a drawer from the right of the screen where you can adjust the fundamental aspects of the block: 

The **Dark Mode** toggle adjusts the background color of the blade from the default light gray to slate gray. When a Project is in Standalone Mode and **Dark Mode** is engaged, the standalone header links will change from gray to the instance’s Accent Color (see [Theme Settings](../administering/configuring/theme_settings.md#accent-color)).

If any descriptive text was included when the Project was first created, it will appear in the **Description** field. This field supports basic Markdown syntax and allows users to add or edit the Project description that appears in the Hero block.

The **Background Image** displays behind the content of the Hero block as a means to enhance the visual identity of a Project. When a Project is shared socially, the Background Image is included, encoded as the OpenGraph image.

<Spec
    title="Background Image Specs"
    items={[
        { key: "Width", value: "1280 px" },
        { key: "Height", value: "800 px" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>

The **Cover Image** appears over the right side of the Hero block and can be used to show a book or custom cover associated with the Project. If no Cover is present, as is the case with new Projects, the system will automatically display the **Project Thumbnail** in the space where the Cover would be.

<Spec
    title="Cover Image Specs"
    items={[
        { key: "Dimensions", value: "The system will automatically resize your image to fit the available space. For best results, the smallest side shouldn’t be any less than 600 pixels." },
        { key: "Format", value: defaultImageFormats },
    ]}
/>

The field for **Image Credits** renders attributions for the Background or Cover images beneath the Cover image. This field accepts basic Markdown syntax.

#### Calls-to-Action

Using the **Calls-to-Action** menu, you can add links and buttons to the Hero block that direct and encourage readers to perform certain actions within or outside of the system.

The menu interface is arranged into four columns that indicate how your call-to-action will render: as a square button or as a simple text link, whether it will show beneath the Project’s description on the left or under the Cover image on the right.

Atop each column is a button that will create a call-to-action in the fashion described by the button text. Existing calls-to-action can be transformed from one kind to another: by selecting the horizontal grab bars with your mouse or keyboard (via the space bar) calls-to-actions can be rearranged within their existing column or moved to another one.

Calls-to-action are contextual relative to whether or not a Project is configured for restricted access. **Start Reading** and **Table of Contents** calls-to-action will always appear in the Hero, though only those users with the appropriate credentials will be able to follow them to their intended target. **Link** and **Download** calls-to-action have visibility settings that allow you to configure whether or not they always appear or appear for specific users based on their access entitlements.

When creating a new call-to-action, a drawer will slide open from the right and prompt you for a title, a type, and then what the call-to-action should relate to. The title for any call-to-action will render as the button or link text in the Hero.

<Tabs
  groupId="calls-to-action"
  defaultValue="link"
  values={[
    {label: 'Link', value: 'link'},
    {label: 'Start Reading', value: 'start'},
    {label: 'Table of Contents', value: 'toc'},
    {label: 'Download', value: 'download'},
  ]}>

<TabItem value="link">

Links point to any content, either hosted on Manifold or remotely, that can be described with a URL.

The **Visibility** field in the Link configuration drawer allows you to determine when this element will appear in the Hero: for all users, only for users who have an entitlement to the project, or only for those users who ***do not*** have an entitlement.

</TabItem>

<TabItem value="start">

The Start Reading action directs readers to a specific Project Text in the Manifold Reader. Using the **Link to Text** dropdown, you can select which Text the call-to-action points.

Manifold will use the metadata within the selected Text to determine what section of the Text the Reader will open to:

For EPUB3s, the landing page is set in the `toc.xhtml` file, within the guide section. The file associated with the `bodymatter` attribute will be where the Reader opens.

```html
<li>
  <a epub:type="bodymatter" href="fileName.xhtml">Title Page</a>
</li>
```

The opening page for an EPUB2 is described in the `content.opf` file between the in `<guide>` tags. The file associated with the entry containing the `text` attribute is where the Reader will open.

```html
<reference type="text" title="Title Page" href="fileName.xhtml"/>
```

For Manifest ingests, the Reader opens to the section associated with `start_section: true` in the `manifest.yml` file.

Texts loaded as standalone documents will open at the very beginning of the content.

The Start Reading call-to-action does not have any visibility settings and will always display in the header. If a Project is set for restricted access, only users with entitlements to the Project will be able to follow the action to its target Text.

</TabItem>

<TabItem value="toc">

A Table of Contents actions opens a specific Text in the Manifold Reader to the Text’s table of contents. Using the **Link to Text** dropdown, you can select which Text the call-to-action points.

Of the Text formats that Manifold supports, only EPUBs have the means to specify a particular section as being its table of contents. Selecting the Table of Contents action for Texts that **were not** ingested in the EPUB format will create an action that is no different than selecting the Start Reading action.

For EPUB3s, the contents section is set in the `toc.xhtml` file, within the `<guide>` tags. The file associated with the `toc` attribute will be the section that the Manifold reader will open.

```html
<li>
  <a epub:type="toc" href="fileName.xhtml">Contents</a>
</li>
```

The contents section in an EPUB2 is likewise set in the `content.opf` file within `<guide>` tags. Again, the file associated with the entry containing the `toc` attribute will be where the reader opens.

```html
<reference type="toc" title="Table of Contents"  href="fileName.xhtml"/>
```

The Table of Contents call-to-action does not have any visibility settings and will always display in the header. If a Project is set for restricted access, only users with entitlements to the Project will be able to follow the action to its target Text.

</TabItem>

<TabItem value="download">

The Download action delivers a file of your choosing to a reader’s device (e.g., a PDF or EPUB).

The **Visibility** field in the Download configuration drawer allows you to determine when this element will appear in the Hero: for all users, only for users who have an entitlement to the project, or only for those users who ***do not*** have an entitlement.

</TabItem>

</Tabs>

#### Social Links

Social media profiles affiliated with the Project are defined in the **Social Links** submenu, which opens from the right as a drawer. Facebook, Twitter, and Instagram profiles assigned here render in the lower left of the Hero as clickable icons. When a **Hashtag** is provided, it will appear beneath any social icons and on click direct readers to a Twitter page displaying Tweets using the tag. The field does not require the hash sign (#); the system will automatically append one.

The different social networks require their handles to be formatted as they appear on their own networks: Twitter IDs are not case sensitive and agnostic about whether or not there’s an ampersand. Facebook IDs are case sensitive and should be listed without an ampersand. Instagram usernames are not case sensitive but should *not* include an ampersand.

:::note
Adding a hashtag to the **Social Links** submenu ***does not*** configure the Project to pull Tweets using that hashtag into the Recent Activity block. Those configurations live in the [Social Integrations](../backend/projects.md#social-integrations) menu.
:::

### Markdown Block

The Markdown Block is so named because it accepts Markdown-formatted input. As such, it is also quite versatile. Remotely hosted images, audio, and video can be referenced and rendered in the Block using standard HTML embed codes. Likewise, different attributes can be defined with inline, internal, or external stylesheets. 

In the **Style** section, users can select how the block renders: the **Normal** and **Shaded** radio buttons determine if the Block has a white and gray background, respectively.

### Metadata Block

The Metadata Block displays information about the Project on the landing page among other content blocks. The metadata that is shown in the block comes directly from the Project’s [**Metadata** menu](../backend/projects.md#metadata) and cannot be directly modified in this view.

### Recent Activity Block

The Recent Activity block displays the six most recent activity records for a Project. Activities show as tiles indicating when Tweets, Texts, or Resources were added to the Project. When a tile is selected it will change the view, opening to the specific Tweet, Text, or Resource chosen. If a Project contains more than six activity records, the block will display a button that links to the full, paginated list of activity in a view of its own.

Use the [**Activity** menu](../backend/projects.md#activity) to manage the records that display in this block.

### Resources Block

The Resources Block displays, as clickable tiles, the ten most recently updated Project Resources, accompanied by a link to the Project’s Resource library. The block’s title can be modified using the **Title** field, and a description can be added in the **Description** field that will appear beneath the title on the landing page. If the **Show All Collections** switch is enabled, this block will also list each of the Project’s Resource Collections, along with a link to view all of the Resource Collections in a view of their own. When toggled off, users can use the **Show Specific Collections** dropdown to show only certain Collections. Collections can be manually reordered from this view using the horizontal grab bars to the right of the Collection’s name.

Use the [**Resource**](../backend/resource.md) and [**Resource Collections** menus](../backend/resource_collections.md) to manage individual Resources and Resource Collections, respectively.

### Contents Block

The Table of Contents Block renders the navigational table of contents for a specific Project Text, with each listing functioning as a link to that section in the Manifold Reader. The system populates this block using the source Text’s navigational hierarchy or header structure.

This block has a number of different configuration options: The **Title** field allows you to customize the name of the block. The **Text** dropdown lists all the Texts loaded to the Project. The TOC of the selected Text will render in the block. Even if there is only one Text loaded to the Project, the editor still needs to actively select it from the dropdown. The **Depth** field determines how many nested contents levels will be revealed. Toggling the **Text Title** field on will add the title of the selected Text beneath the title of the block.

<Spec title="Where Manifold Sources a Text’s Navigational Contents">

| Text Ingest Format                         | Navigational File |
| ------------------------------------------ | ----------------- | 
| EPUB3                                      | `tox.xhtml`       |
| EPUB2                                      | `tox.ncx`         |
| Manifest Ingest                            | `contents.yml`    |
| HTML, Markdown, MS Word (DOCX), Google Doc | Header structure  |

</Spec>

### Texts Block

The Text Block displays Project Texts as individual entries in a list. The block can be configured to include author names, subtitles, system dates, descriptions, and cover images for each list entry. It is also possible to configure which Texts appear in the block by category (see [Texts](../backend/texts.md#text-categories)):

The title of the block as a whole can be customized using the **Title** field. Text entered in the **Description** field, likewise, refers to the block generally and sits below the block’s title on the Project homepage.

When the **Show Author Names?** toggle is engaged, the block will include the names of those listed as authors from each Text’s [People menu](../backend/texts.md#people). There is no means to also include those listed as contributors.

The **Show Subtitles** toggle tells the system to include each Text’s subtitle beside their main title in the block.

When the block is configured to **Show Dates**, the system displays the date when a Text was added to the Project or last updated on the system. That date is not an editable field and is not to be confused with a Text's publication date.

In the Text block, uncategorized Texts are treated differently from those that are categorized. When **Show Uncategorized Texts** is toggled on, uncategorized Texts will appear beneath a header reading “Uncategorized,” regardless of whether you have the “Show Category Labels” toggle active.

In the active state, the **Show Descriptions** toggle displays Text descriptions as abstracts for each listing in the block (see [General settings](../backend/texts.md#general)).

Each Text listing in the block appears beside a default thumbnail image of stacked paper. That thumbnail is replaced by the image stored in the Text record’s [Cover image field](../backend/texts.md#general) when **Show Cover Images** is toggled on.

The **Show Category Labels** field works in conjunction with the way Texts are grouped in the [Texts menu](../backend/texts.md#text-categories). When this setting is active active, Texts that are grouped within a category (except those grouped as “Uncategorized”) will be listed beneath a header displaying the category name.

Likewise, the **Categories** dropwdown also plays off how Texts are grouped in the Texts menu. Only texts nested within the selected categories will appear in the block. The options below the dropdown provide the means to add or remove all categories in bulk, as well as reorder how they will appear to readers (by default they will show in the same order as they appear in the Texts menu).

## Access

The Access sidebar provides controls for who can modify or read specific Projects on a Manifold instance. Settings are categorized along two different trajectories: Editor Permissions and Project Entitlements. Editor Permissions are oriented around collaboration and granting backend access to particular users on a limited basis. In more technical terms these are “scoped roles,” versus the “global roles” described in the [Users section](../backend/users.md). Project Entitlements, on the other hand, limit who can view and engage with a Project on the frontend. 

### Editor Permissions

The **Grant editor permission** button opens a drawer from the right side of the screen with a dropdown menu and three sliders that configure Project-specific permissions for individual users. These permissions give users who would otherwise not have access to the backend or to this specific project the ability to access and edit it. After a Permission has been extended, the User’s name will be listed in the section as a means to edit or delete the permission associated with their account.

The **Select User** dropdown lists all of the instances Users. The dropdown functions as both a search bar and drowpdown list to more easily find specific users. Whichever User is selected will be granted permissions to the project based on which of the following toggles are activated.

The **Can Modify Project** option grants the user the ability to edit all aspects of the Project, except extend similar permissions to other users. Users who are scoped this permission can also modify or delete Maker records associated with the Project. When this option is selected a badge reading “Project Editor” will be appended next to the user’s name.

If the **Can Modify Resource Metadata** toggle is engaged, the user will have a very limited view of the Project: they will only be able to access the the Project’s **Resources** sidebar, where they can edit the metadata for existing Resources. Users with this permission will not be able to add or delete Resources from the Project. When this option is selected the user’s name will appear in the listings with a “Metadata Author” badge.

For users who have also authored Project content, the **Is a Project Author** toggle grants them the ability to view the Project from the frontend when it’s in Draft status as well as annotate Project Texts with Resources. When the User engages with Texts within the Project, the system will differentiate their annotations and highlights with a pink color and display an “Author” badge in the annotation drawer. In the backend, Users with this permission will have a similar badge associated with their Editor Permission listing.

### Project Entitlements

The controls in this section provide a means to restrict access to a specific Project on the frontend to individual Users or particular Reading Groups. By default all Manifold Projects are openly accessible. To change the default so that all publications are restricted, see the [General Settings](../administering/configuring/general_settings.md#restrict-access-to-all-projects) section.

On landing pages, restricted-access Projects display an alert indicating the Project is only available to those Users who have an entitlement to it. Attempts to access Project content will redirect Users without the necessary entitlements back to the top of the Project’s landing page with a notice that reads “Only authorized users may access this project.”

#### Restricting Access

Selecting the **Configure Access Restrictions** button expands the restrictions menu, making available options to toggle the Project’s access settings and notice statements.

When **Project Access is Restricted** is toggled on, only Users who have credentials to edit the Project in the backend or Users who have who have entitlements to the Project or are members of a Readings Group that has an entitlement will be able to access the Project’s content from Manifold’s frontend. This means all users on the instance who log in with Administrator, Editor, or Marketeer credentials can access restricted Projects.

This setting has implications for the Calls-to-Action events that are configured to appear in the Hero block: **Link** and **Download** can be set to appear always, only for authorized users, or only for unauthorized users. See the [Hero section](../backend/projects.md#hero-block) for more.

When a Manifold instance is configured to restrict access to all Projects this toggle will read as **Project is Open** instead of **Project Access is Restricted**. In that state, the toggle make the Project openly available, without need for any special entitlements.

#### Restrictions Messaging

When someone arrives at an access-restricted Project without an entitlement, they will be shown a warning message below the Project Hero. The message is made up of a header and body, which can be customized in the **Restricted Access Notice Header** and **Restricted Access Notice Body** fields respectively. The defaults will read as 

> **Access to this project is restricted.**
> 
> Only users granted permission may view the project’s texts, resources, and other content.

#### Adding and Deleting Entitlements

Below the **Configure Access Restrictions** menu are a search bar, a **Create entitlement** button, and a listing of the Project’s entitlements.

The search bar makes it possible to sort through existing and past entitlements. Entitlements can be revoked individually as needed. Each entitlement records also carries a tag to indicate the current status of the permission: Active, Expired, or Expiring Soon.

The **Create entitlement** button opens up the Grant Entitlements panel from the right where new entitlements are created: An entitlement will be provided to the User or Reading Group selected from the the **Who is the Entitlement For** dropdown. By default an entitlement does not have an expiration date. If one is desired, a date can be saved to the **Expiration** field in YYYY/MM/DD format. The field also accepts human-readable strings (e.g., “in three days,” “in two months,” “in one year”). Entitlements for Reading Groups remain in effect for the individual members of the group for the duration of entitlement and so long as they remain a part of the group.

Existing entitlements cannot be modified, only deleted. However, Users and Reading Groups can have multiple entitlements. If an entitlement record doesn’t align with current expectations, a new entitlement can be granted with new terms.

:::note Securing an Entitlement
Transactions that warrant an entitlement occur outside of the system: a student signs up for a class, a teacher invites the student to a Reading Group that has an entitlement to a specific Project; a reader purchases access to a Project via a publisher’s website, the publisher manually grants that reader’s account access to that Project.
:::

## People

The **People** sidebar lists the Maker Records associated with the Project as a whole versus individual Texts within the Project (see [Makers](../backend/makers.md)). Records saved here are displayed in the Hero block beneath the Project’s title. 

This view is broken into two categories: **Authors** and **Contributors**, where author listings suggest primary author- or stewardship of the Project and contributor listings denote secondary attributions. Individual listings begin with an profile image, the Maker’s name, and then options to delete, edit, or reorder the entry:

The **Delete** button, depicted with an **×**, only removes the association between the Maker Record and the Project; the Maker record itself is not altered or removed from the system by deleting its association with the Project.

Shown as a pencil icon, the **Edit** button changes the view, taking you to the **Manage Makers** page with the edit drawer open to the entry you selected. There you can adjust the Maker’s professional title; first, middle, or last name; and suffix. Users with Reader roles who have been granted Editor Permissions to a Project are not able to edit Maker Records.

The horizontal drag bars can be used to **Reorder** Maker records within the same category. It is not possible to recategorize an entry from **Author** to **Contributor** or vice versa. The drag bars respond to clicking and dragging with your mouse or by pressing the space bar on your keyboard and then using the up or down arrow keys.

:::note Other Authorial Roles
The current Author/Contributor dynamic is based off the EPUB specification. At present, you cannot assign more nuanced roles for Makers (e.g., Editors, Translators, Introducers, etc.).
:::

## Texts, Resources, and Resource Collections

Like Projects, Text and Resources represent fundamental concepts of Manifold and are each treated in their own respective sections: see [Texts](../backend/texts.md), [Resources](../backend/resource.md), and [Resource Collections](../backend/resource_collections.md).

## Activity

The **Activity** menu displays Project events that render as tiles in the Recent Activity block. Events are created when new Texts and Resources are added, when Texts are annotated or commented upon, and when Manifold pulls Tweets into the Project. From this view, you can search for events and filter results by the kinds of activity (e.g., Text Added, Project Created).

Events can be individually removed from a Project by selecting an event’s delete button, shown as a red trashcan icon in the lower right of a tile.

:::note Bringing Tweets into a Project
See the [Social Integrations section](../backend/projects.md#scoial-integrations) for notes on how to configure Manifold to fetch Tweets for display in the Activity blade.
:::

## Metadata

The **Metadata** panel provides a means to input metadata that applies to the Project as whole and which will render in the Metadata content block. Metadata associated with individual Texts or Resources is controlled in those respective sections: [Texts](../backend/texts.md), [Resources](../backend/resource.md).

Project Metadata entered in this view will is included in the BagIt archive when a Project is exported (see [Exporting and Preserving](../backend/projects.md#exporting-and-preserving)).

All of the Metadata fields support formatting with the exception of **DOI**. 

For detailed definitions of each metadata field, see the [Metadata reference section](../backend/metadata.md).

## Social Integrations

From this view, a Project’s Activity Block can be configured to display Tweets matching certain criteria. Every hour Manifold will fetch up to sixty Tweets for each such active Twitter Query within a Project. Each saved query is listed with its status and the number of results it has returned.

The **Add a new Twitter Query** button opens a drawer from the right where a new query is defined. The **Query** itself should conform to [Twitter’s search operators](https://developer.twitter.com/en/docs/tweets/search/guides/standard-operators). Matching Results are then returned by either the “most recent” and “most popular”, as selected in the **Fetch Tweets By** dropdown.

The **Active** toggle tells Manifold if it should fetch tweets for the Query. Results from inactive queries will be ignored.

Saved queries can be selected from the list and edited or deleted. It is also possible to manually force the system to fetch results for saved queries immediately with the **Fetch Tweets** button beside the green arrows circling one another.

## Exports

From this view, individual Manifold Projects are exported to a preservation agency or digital repository. Before a Project can be exported, the pathway between Manifold and the receiving location first needs to be configured (see [Export Targets](../administering/configuring/export_targets)).

The **New Project Export** lists all the pre-configured locations to which a Project can be exported. When one has been selected, the **Export Project** button will begin the process of packaging and transferring the Project to the repository.

During the export process, all of a Project’s Texts are transformed into individual EPUB files and collected with the Project’s Resources and metadata. Those materials are then gathered into a ZIP archive that is structured according to the BagIt specification. This process will function regardless of whether or not individual Texts within the Project have been toggled to **Enable EPUB** (see [Texts](../backend/texts#header)).

It is not possible to export distinct components of a Project. The feature, as it is presently crafted, only allows the export of all a Project’s components as an interrelated whole.

However, Projects can be exported multiple times, to the same or different locations. When an export has completed it will be listed with a date stamp, the delivery location, the package’s size, and a **Success** badge. The download button, designated by a downward-facing arrow, appears only for the most recent export, and will deliver a copy of the export package to your device.

<Tabs
  groupId="export"
  defaultValue="in"
  values={[
    {label: 'What’s Included in the Export?', value: 'in'},
    {label: 'What’s Not Included?', value: 'out'},
  ]}>

<TabItem value="in">

- All of a Project’s Texts, converted to the EPUB format
- All of a Project’s Resources
- Metadata for the overall Manifold Project, each individual Resource, and for each Text
- General inventory files specific to the Bagit specification

</TabItem>

<TabItem value="out">

- Annotations
- Comments
- Highlights
- Content blocks and descriptive information contained within them
- Indication of where Resources were placed in Texts
- Associations with Reading Groups or Project Collections

</TabItem>
</Tabs>

#### Troubleshooting

Once an export has triggered, the screen *will not* automatically update. To determine if a export has been successful or not, manually refresh the window. The export speed depends on many factors; the larger the Project, the longer the time to complete the process.

If an export fails, contact your local IT agents to authenticate against the target FTP host. Performing standard network debugging protocols to ensure Manifold can access the server will be the best first steps to take in such a case.

:::info Don't See the Exports Sidebar?
Only users with Administrator or Editor credentials are able to export Projects. When Users with other roles access the Project in the backend, the **Export** menu will not be visible.
:::

## Log

The Log itemizes the history of a Project in a paginated view. Changes to Project fields, Texts, and Resources, including the nature of the change, who made it, and the date on which the change was made are listed with links to corresponding User accounts and Project materials.