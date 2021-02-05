---
id: projects
title: Project Settings and Fields
sidebar_label: Project Settings
---

import Spec from "@theme/Spec";

<Spec title="How do I get here?">

| Backend Location                                                                                                                                                   | User Access                                                                                                                                                                                                           |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| The Project Details Page is accessed by clicking on the name of a Project in the Backend, most commonly performed from the the `Dashboard` or `Projects` menus.    | Admins, Editors, and Marketeers can modify any Project on an instance. Project Creators can only modify Projects they’ve created. Readers with permission to modify specific Projects can only modify those Projects. |

</Spec>

## Understanding the Interface

The Project Details page is made up of three parts: a Project Menu centered near the top of the screen, a Sidebar off to the left, and an Editing Pane taking up central space of your viewport. These three elements each adapt to the context of your work and location within a Project.

### Project Menu

The Project Menu displays the title and subtitle of the Project. When you drill down into the records for individual Texts or Resources within the Project, the Header will provide a link to return you to the main Project Details page.

Options to Preview or Delete the Project, Text, or Resource you are currently editing are also found within this menu. When viewing the details for a Text, additional controls become available and are considered in the [Text section of this documentation](../backend/text.md).

### Sidebar Menu

The Sidebar Menu groups into categories all the various Project options available to you from the Manifold Backend. As you navigate through this menu different fields and controls will display in the Editing Pane.

When you dive into individual Text and Resource records, the Sidebar menu will adjust the available options to your current context.

### Editing Pane

The Editing Pane displays a Project's settings and fields, based on the Sidebar Menu item you have selected. In this space you can add the files and metadata that make up your Project as well as adjust the configuration for its display to readers.

:::note
If you are equipped to engage with the application using a command line interface, you can make more adjustments to a Project using [Manifold's APIs](../developers/api.md) than are revealed through the Manifold Backend interface.
:::

## Analytics

TKTKTK

<!-- Notes from ZD:

First, when we track events, there is no connection in our stored data between the tracked event and a specific user account. So the system is designed so that it’s impossible to say “who viewed project X”.

We also mask IP addresses so that you can’t actually see the IP of the user who accessed the content.

We do store the user’s browser, operating system, device type, and user agent so that we can at some point report on what devices people are using

In other words, we’re trying to be GDPR compliant out the gate. We should talk about this in the docs so people don’t freak out that we’re “tracking” readers

We do store a token to identify the visitor and the visit in a cookie. We need to store these tokens so that we’re not relying on their authenticated session to identify them.

 -->

## General

### Attributes

#### Title and Subtitle

These two fields reflect the name of your Project and display in the Hero Content Block on the Project's landing page. In Library views, only the main title is shown. In the Backend, both the title and subtitle appear in associated navigation menus.

The `Title` field cannot be left empty; however `Subtitle` is optional.

:::tip
If you are a journals publisher, we suggest including the display name and volume and issue information in the `Title` field. The season and year information would then be stored as the `Subtitle`. This suggestion is for the near term: we are in the process of updating Manifold to better suit journal and serial content.
:::

#### Publication Date

Manifold uses the `Publication Date` to generate bibliographic citations for readers wanting to reference the work. **The value saved here refers to the publication date for the Project as a whole.**

Publication dates can also be saved to individual Texts within the Project. Publication dates for individual Texts supersede the publication date of the Project when citations are crated.

A Project's Publication Date can also serve as criteria for sorting and displaying Projects contained in [Project Collections](../backend/project_collections.md).

#### Slug

A slug is the part of a URL that directs a browser to a specific webpage within the context of a larger domain. The `Slug` field here is an opportunity for you to customize the address of the landing page for the Project you are modifying.

In Manifold all Project landing pages follow the same URL pattern: `domain/path/slug`. The `domain` represents the homepage for your entire instance; the `path` describes the nature of the address, in this case that it's a Project; and then the `slug`, which is meant to identify a specific project.

To better illustrate this concept, let's consider these URLs for Projects on the Minnesota and CUNY instances, as they would appear in your browser:

| Instance  | Project URL                                                 |
|-----------|-------------------------------------------------------------|
| Minnesota | `https://manifold.umn.edu/project/the-lab-book`             |
| CUNY      | `https://cuny.manifoldapp.org/projects/benito-perez-galdos` |

When broken down into their constituent parts, we can see more clearly their domain, path, and slug:

| Domain                  | Path        | Slug                  |
|-------------------------|-------------|-----------------------|
| `manifold.umn.edu/`     | `projects/` | `the-lab-book`        |
| `cuny.manifoldapp.org/` | `projects/` | `benito-perez-galdos` |

When you create a new Project, the system will automatically populate this field with a Slug based on the Project's title. If that's not in keeping with your naming conventions, you can adjust it.

:::tip Best Practice
We recommend that you settle on a Slug before toggling your Project out of Draft mode. If you change a Slug after the Project goes live, you increase the chances that folks or systems that saved the original URL will now encounter 404 errors when trying to access the Project. Changing the Slug here will not update any remote systems with new information.

Additionally, the Project's `Slug` informs the URLs for Resources that are a part of the Project. Again, Manifold will automatically resolve changed links within the system but not for outside parties.
:::

#### Project Thumbnail

The Project Thumbnail is the image associated with a Project. It appears to readers in Library views on the Manifold frontend above the Project title and layered under the Follow button.

The default thumbnail depicts a pair of glasses, a comment block, and a pencil. For new Projects, or for Projects that don't have a custom thumbnail, the default thumbnail appears here in the backend beneath the `Current` heading.

You can adjust the color scheme for the default thumbnail by selecting one of the six preset color swatches shown in the grid's center, labeled `Default`.

You can replace the default thumbnail with an image of your own by selecting “Upload a File” under `Custom`. Custom thumbnails will be cropped to a square measuring 160 × 160 px. Prepare your custom images to display at that size accordingly.

<Spec
    title="Project Thumbnail Specs"
    items={[
        { key: "Max-Width", value: "160 px" },
        { key: "Max-Height", value: "160 px" },
        { key: "Format", value: "GIF, JPEG, JPG, PNG" },
    ]}
/>

:::note
The Project Thumbnail will appear in the Project's Hero Content Block until you replace it with a Cover Image. The Cover Image field lives in the `Layout` sidebar menu, under `Hero Block` → `Description + Images`.
:::

### Taxonomy

#### Subjects

Subject classifications illuminate the scope of material on your instance broadly and functionally provide a means for you to label and sort Projects. Subjects are actionable in two places in the application: On the frontend, Subjects appear on the `All Projects` library page in the `Show All` dropdown as a means for readers to filter and display only those Projects that match their selection. In the backend, Subjects can function as search criteria for “Smart” [Project Collections](../backend/project_collections.md).

Subjects can be assigned at the Project level here by any user who has the ability to edit the Project. The interface supports both typeahead or dropdown selection.

Because subjects take a high-level view of the body of work on your instance, the [catalog of Subjects](../administering/configuring/project_subjects.md) and the ability to add new Subject listings is the province of Admin users alone.

#### Tags

Tags function much like Subjects but No means to edit or delete tags

Unlike Subjects, Tags can be created by any user who has permission to modify a Project and can be used to add further richness to the existing subject classification. Like Subjects, the Tag field provides a helper so that as you begin typing any similar tags that have already been created on your instance will be revealed.

To see how Tags can be used to curate Smart Collections, visit the [Project Collections](../backend/project_collections.md) section.

### Presentation

#### Draft Mode

For use when wanting to load and edit a Project and its materials before publishing it for a broad readership. When toggled on, Projects are only visible to users logged in with Administrator, Editor, or Marketeer roles—and to Project Creators on Projects where they have `Can Modify Project` permissions. New Projects are set to Draft Mode by default, and Draft status is denoted in the Project library, as well as on the Project landing page.

When a Project is in Draft Mode, users who have permissions to view the Project may annotate, highlight, and even share Texts that are part of the Project. Links shared on social media will only work for those who also have permission to access the Project and are logged in. All annotations, comments, and highlights will persist with the Project's Text when Draft Mode is toggled off.

Determining when drafts are made public falls to the discretion of publishers.

#### Featured

Featured Projects take pride of place on the home page in a section of the library all of their own. Only four Projects display in this section at a time. If more than four Projects are toggled to be featured, only the four most recent will show. By default, new Projects are *not* set to be featured.

:::note
If Project Collections are being employed, the Featured Projects blade will not appear. But Projects marked as being Featured can be sorted into a Smart Collection. See the [Project Collections](../backend/project_collections.md) section for more.
:::

#### Finished

The Finished toggle is a means to indicate that a Project is no longer actively iterating. When toggled on, Manifold will show the Project's published date rather than its last updated date in lists. When the switch is off, Manifold will show when the Project was last updated.

:::note
If a Project is toggled to Finished and no publication date is set, in list views no date of any kind will appear.
:::

#### Standalone Mode

Standalone Mode renders Manifold Projects as distinct microsites. The standard Manifold landing page that showcases collections of Projects—or a publisher's entire content library—is not always appropriate or useful.

In situations where an instance only has a handful of Projects or when a publisher wants to incorporate Manifold as part of their existing web presence, Standalone Mode can be employed as a solution.

Any Manifold Project can be rendered in standalone mode or in library mode. Using the dropdown, users can configure the most appropriate rendering for a Project:

- **Disabled**. If standalone mode is `Disabled`, the Project can never be viewed in standalone mode. This is the default setting for new Projects. 
- **Enabled**. If standalone mode is `Enabled`, the user must come to that Project with the following suffix appended to the URL for standalone presentation; otherwise users will encounter the default library view of the Project: `?mode=standalone`. This is useful for publishers who want to present a Project as standalone when directed from a specific location (e.g., a publisher's or author's website), while allowing the same Project to be viewed in library mode for those arriving to it from other locations.
- **Enforced**. If standalone mode is `Enforced`, that Project can only be viewed in standalone mode regardless of from where a user is coming to the Project. Additionally, Projects that are enforcing standalone mode are removed from the Projects page library and the landing page, in cases where the instance isn't displaying Project Collections.

When a Project is offered in standalone mode, the header is replaced with a more minimal standalone header that persists down the page as a reader scrolls. The Project's title and subtitle are integral to this standalone header and serve as clickable links, returning users to the Project landing page as they explore subpages within the Project.

:::note
For those with Administrator credentials, see the Top Bar options on the [Theming Settings page](../administering/configuring/theme_settings.md) to enable and customize the text, link, and color of the optional top bar).
:::

Additionally, when a Project is in standalone mode, the following behaviors can also be expected:

- the standalone header will respect whether the Project hero is set to light or dark mode,
- search in the Project is scoped to the Project,
- the reader menu only includes a link to the Project, and
- Project subpages for individual Resources or Resource Collections show the standalone header with no breadcrumbs.

These settings work in conjunction with the top bar configurations, which can be adjusted on a project-by-project basis or generally across an entire instance.

See the Top Bar section below to adjust an individual Project's top bar text and link URL. Those with Administrator credentials can modify the top bar globally across the instance—its text, link URL, color, and behavior—on the Theme Settings page.

If you enable or enforce standalone mode on a Project but don’t see a top bar on your Project, check that the `Top Bar Text` and `Top Bar URL` fields (described below) are filled in. Or, if the Project is intended to follow the default instance top bar theme, check the Theme Settings page to see that Top Bar Display Mode is not set to `Disabled`.


:::note
Regardless of how many Projects are set for Standalone Mode, the standard Manifold library page will still exist. Further, if a reader navigates to an instance’s library page (by happenstance or by entering it into the URL bar) they will be able to see all the Projects on the instance—excepting those in Draft Mode or those where Standalone Mode is enforced (so long as they aren’t also part of a Project Collection). To Disable Library Views entirely, see the [General Settings](../administering/configuring/general_settings.md).
:::

#### Top Bar Text

The top bar is a thin, customizable band that serves as a means to contextualize a Manifold page for readers in relation to a larger mission.

Text entered in this field appears in the top bar for the specific Project, superseding the top bar text entered by those with Administrator credentials on the Theme Settings page.


:::note Notes
- The top bar color and display parameters are only configurable for users with Administrator credentials from the Theme Settings page.
- If this field is left blank, the top bar settings for the Project  will default to the instance-wide settings
- The top bar is *not* required for standalone Projects; it is highly configurable and can used on a project-by-project basis or it can be used in conjunction with standalone Projects settings or generally across the entire instance.
- This field is *not* Markdown enabled and only accepts one line of text.
:::

#### Top Bar URL

The top bar functions as a clickable link. The URL entered here will serve as the link target to any user who clicks on the top bar. As with the Top Bar Text above, the value entered here will supersede the input from the Theme Settings page.

### Restrictions

#### Disable Public Annotations and Comments

When this local setting is toggled on, users will not be able to pin public annotations to any Text that is a part of this specific Project. *This does not prevent users from annotating Texts in this Project entirely.* Users will be able to leave annotations in the context of a reading group of which they are a member—and viewable to other members of that group—or as a private annotation, viewable only to the user.

Because of that, someone who doesn't have an account, or someone who is logged in as a Reader, won't see annotations on any Text in the Project so long as this toggle is engaged. The exception would be Readers who are members of reading groups: they will be able to see annotations that have been left in the context of those reading groups. 

While this setting is engaged, it will not possible to convert a private annotation into a public one, and public reading groups will function as if they were private ones.

To learn how to disable public annotations globally across an entire Manifold instance, instead of locally for specific Projects, see the [General Settings](../administering/configuring/general_settings.md).

Likewise, that section describes how to further limit the annotation functionality by disabling reading groups across an entire instance. When publishers disable both public annotation and reading groups globally, users will only be able to leave private annotations they alone can see.

## Project Layout

Settings for a Project's visual appearance and overall user experience live within the Layout submenu.

Project landing pages are highly customizable and modular to allow publishers the means to present their materials in whatever way best suits their content. This level of control is achieved through the use of “Project Blocks”—distinct containers for specific content elements that span horizontally across the visual space of the page.

There are seven different kinds of blocks available in the system:

- Hero
- Markdown
- Metadata
- Recent Activity
- Resources
- Table of Contents
- Texts

The Hero block is required of every Project and is anchored immediately below the menu bar. All other content blocks are optional and can be arranged as desired below the hero block. In the example above, the publisher has set up their Project so that the Project landing page is displaying Markdown, Resources, and Metadata blocks.

This section will first consider all the options available within the Hero block before moving onto options for each of the content blocks.

### Hero Block

The hero block can be as basic or as involved as a Project requires. Some Projects may only require a title, description, and cover image. Others may want to use buttons and/or links to reference related material. For iterative Projects, the scope and complexity of this block will likely change as content is added to the Project.

Controls to adjust the appearance of the Hero block are contained within the Description + Images, Calls-to-Action, and Social Links submenus. To adjust settings within those sections, click the pencil outline/edit button on the right.

#### Description + Images

When opting to edit this section, a drawer from the right will open in which you can adjust the following settings: Dark Mode, Background Image, Cover Image, and Image Credits.

:::note
You must click the Save button at the bottom of the drawer for your changes to take effect.
:::

##### Dark Mode

This toggle adjusts the background color of the blade. The default is light gray. When Dark Mode is toggled on the color changes to slate gray.

If a Background Image is added to this blade, the image will supersede this setting.

##### Description

This field allows users to add or edit a Project description that will render in the hero block. If any descriptive text was included when the Project was first created, it will appear here.

Recommended length is three to five sentences. If your Project requires further description, we suggest adding a Markdown block to the Project.

:::note
Text entered in this field can be formatted using basic Markdown syntax.
:::

##### Background Image

The Background Image displays behind the content of the Hero blade as a means to enhance the visual identity of a Project. If a Background Image is loaded, the image will supersede the setting of the Dark Mode toggle.

Your image should be sized to 1280 × 800 pixels. Images not submitted at those dimensions will be resized automatically and cropped along the bottom edge.

Acceptable formats for upload are GIF, JPEG, JPG, and PNG.

When a Project is shared socially, the hero image is included as part of that transaction so that other platforms—Twitter, Facebook—can render the look and feel of the source material from Manifold on their platforms.

:::note
Be sure you have the necessary permissions to upload your hero image to the system. You can include any required credit lines in the Image Credits field
:::

##### Cover Image

The cover image appears over the right side of the hero block and can be used to show a book cover associated with the Project, or a custom cover created specifically for electronic use or use on Manifold.

The system will automatically resize your image to fit the available space, but it need not be cropped and can retain its original ratio. For best results, the smallest side shouldn't be any less than 600 pixels.

Acceptable formats for upload are GIF, JPEG, JPG, and PNG.

:::note
If no cover is loaded, as is the case with new Projects, the system will automatically display the Project thumbnail in the space where the cover would be.
:::

##### Image Credits

If your background or cover image have credit lines associated with them, they can be entered into this field. The credit lines will appear beneath the cover image.

:::note Notes
Text entered in this field can be formatted using basic Markdown syntax.

To add a manual line break, leave two spaces at the end of the line you are breaking before the return.

If you need to add a blank space, use two consecutive break tags between the lines you are separating.
:::

#### Calls-to-Action

Here users can add buttons or links to the hero block that act as shortcuts to Project materials on Manifold or related content hosted remotely.

In the example above there are three buttons on the left, two on the right, and one link for each side. In the backend, the configuration to achieve that looks like this:

To create a new button or link, click one of the four respective buttons labeled, "Add Button [or Link] to Left [or Right] side."

The interface is very plastic, so you can drag/drop elements from one column (e.g., left-side link) to another (right-side button), and the system will change the link/button behavior accordingly.

When creating a new button or link a drawer will slide open from the right and prompt users for a title, a type, and then what the button/link should relate to. Because button and links are oriented around their type or action, we will consider them along those lines in the following sections.

:::note
Calls-to-action are contextual relative to whether or not a Project is configured for restricted access.


`Start Reading` and `Table of Contents` calls-to-action types will always appear in the hero, though only those with the appropriate credentials will be able to follow them to their intended target.

`Link` and `Download` calls-to-action have visibility settings that allow a publisher to choose whether or not they always appear or appear to either authorized or unauthorized users. Thus it is possible to configure a Project to showcase one set of calls to actions for authorized users and a different set for unauthorized users.
:::

##### Link

Links point to any content, either hosted on Manifold or remotely, that can be described with a URL. Two examples: a link can be used to create a button that reads "Buy Now" and links to the publisher's shopping cart. Or a link could be used to show a link to related content on the author's personal website.

The `Visibility` field in the Link configuration drawer allows a publisher to determine when this element will appear in the hero: always, only for authorized users, or only for unauthorized users.

For example, a subscription link would be useful for unauthorized users to gain access to the Project, while for authorized users that would not be of interest. Likewise, links to specific materials may only be of use after a user has gained access to a Project. See the [Managing Access](../backend/projects.md#managing-access) section for more on how a Project's accessibility settings can pair with how and when links appear in the Hero block.

##### Start Reading

The Start Reading action allows a publisher to create a button/link that will direct readers to the opening page of a specific Text loaded to the Project.

Publishers can select which Text they want to point to by selecting it from the "Link to Text" dropdown in the Call-to-Action drawer.

Manifold will use the metadata within the selected Text to determine the opening page.

- For EPUB3, the opening page is set by the `toc.xhtml` file, within the Guide section. The file associated with the "bodymatter" attribute will be the landing page in the reader.

```html
<li>
  <a epub:type="bodymatter" href="fileName.xhtml">Title Page</a>
</li>
```

- For EPUB2, the opening page is described in the `content.opf` file enclosed in `<guide>` tags. The file associated with the entry containing the "text" attribute is where the reader will open.

```html
<reference type="text" title="Title Page" href="fileName.xhtml"/>
```

- For Manifest ingests, the reader will open to the section that is associated with `start_section: true` in the `manifest.yml` file.
- Texts loaded as standalone documents will open to the first page.

:::note
- You can create more than one Start Reading link/button if you have multiple Texts in your Project.
- The Start Reading call-to-action does not have any visibility settings. Star Reading actions will always display in the header. If a Project is set for restricted access, only those with the appropriate credentials will be able to follow the link to their intended Text.
:::

##### Table of Contents

A Table of Contents link/button opens a specific Text to the section that the file's internal metadata describes as being its table of contents.

- For EPUB3, the contents section is set in the `toc.xhtml` file, within the Guide section. The file associated with the "toc" attribute will be the section that the Manifold reader will open.

```html
<li>
  <a epub:type="toc" href="fileName.xhtml">Contents</a>
</li>
```

- For EPUB2, the contents section is set in the `content.opf` file enclosed in `<guide>` tags. The file associated with the entry containing the "toc" attribute will where the reader will open.

```html
<reference type="toc" title="Table of Contents"  href="fileName.xhtml"/>
```

- Selecting the Table of Contents action for Manifest ingests and texts loaded as standalone documents will be no different than selecting the Start Reading action. This is because these formats do not inherently contain a Text section (not to be confused with navigation intended for a reading system) made specifically as a table of contents that you would expect in a print book.

:::note
The Table of Contents call-to-action does not have any visibility settings. TOC actions will always display in the header. If a Project is set for restricted access, only those with the appropriate credentials will be able to follow the link to their intended Text.
:::

##### Download

The Download action allows publishers the means to load a file into the system that readers can download to their device. This can be useful if, say, the publisher wants to provide their readers with an ebook associated with the Project or an archive of all the source files that were ingested into the Manifold reader. It could also be used to share collections of data or specific materials that require pride of place on the Project page.

The `Visibility` field in the Download configuration drawer allows a publisher to determine when this element will appear in the hero: always, only for authorized users, or only for unauthorized users.

For example, a download may be useful to supply unauthorized users with some preview content. Conversely it may be a perk of full access to supply readers with bonus content. See the [Managing Access](../backend/projects.md#managing-access) section for more on how a Project's accessibility settings can pair with how and when downloads appear in the Hero block.

:::note
There are no restrictions on the kind of file uploaded into this field.
:::

#### Social Links

The Social Links submenu allows a publisher to associate a Twitter hashtag and social account handles for Twitter, Facebook, and Instagram with a Project. These will appear as active, clickable links below the Project description.

The social icons will open a new tab and take readers to the associated accounts. The hashtag will redirect to the Twitter page for that hashtag.

When inputing values into the system, users do not need to type the hash sign (`#`) in the Hashtag field; the system will automatically include that when text is added to the field.

The different social networks require their handles to be formatted as follows:

- Twitter is not case sensitive and agnostic about whether there's an ampersand or not. All of the following will work as expected: `@uminnpress`, `uminnpress`, `@UMinnPress`, and `UMinnPress`.
- Facebook usernames should be listed without an ampersand and match the case of the username as it appears on Facebook. Because the username on Facebook is denoted as `UMinnPress` that is the only acceptable means to input the handle into Manifold.
- Instagram usernames are not case sensitive but should *not* include an ampersand. Thus `uminnpress` and `UMinnPress` will work but `@uminnpress` and `@UMinnPress` will not.

:::note
Adding a hashtag to this section is only a suggestion to your readers to include it in their Tweets about the Project; it will not automatically begin pulling Tweets into the Project's Recent Activity block. Those configurations live in the Social Integrations menu.
:::

### Content Blocks

Content blocks are situated below the Hero block. None of them are required, and they can be arranged and rearranged using the drag-and-drop interface in the Manifold backend to meet the needs of the Project.

For those Projects that evolve, new blocks can be added and existing ones can be hidden or deleted.

Projects can contain multiple Markdown, Table of Contents, and Texts blocks, while the Metadata, Recent Activity, and Resources blocks can only appear once.

To add a block to your Project's layout, either drag and drop the block's tile from the Blocks section to the Layout section or click on the Add Block Button on the right of the tile, in the shape of an encircled plus sign.

If a block is no longer necessary, they can be hidden or deleted. Hiding a block retains the block and its content but no longer surfaces it on the frontend for readers to see. Deleting a block permanently removes the block and its content from your Project.

The hide and delete buttons appear in two spaces, on the Layout page and in a block's edit drawer. The hide button appears as an open eye icon, and the delete button as a trashcan. When hidden a block eye icon will appear with a slash through it.

To un-hide a block, click on the crossed-out eye icon. If you delete a block and later want it back, it will need to be recreated from scratch.

Edit an existing block by clicking on the pencil icon to the right of the block's name. Doing so will open a drawer from the right of the screen giving you access to the editable block content.

:::note
All content blocks are contextual relative to whether or not a Project is configured for restricted access.
:::

#### Markdown

The Markdown Block allows users to create sections of markdown content on a Project page. The block can be assigned a gray background to help it stand out from other content on the page. Possible uses of this block include adding descriptive text about the Project, supplemental textual content, or speaking to a Project's grant funding or relation to upcoming events, like conferences or author appearances.

There are three sections to consider when editing a Markdown block: Access, Body, and Style.

##### Access

Publishers can use this dropdown to customize the Project's landing page behavior and for whom this block will appear. This field works in concert with the Project's access restriction settings. 

If `Always Visible` is selected, the Content Block will be visible on the Project landing page for all who arrive there, whether they have accounts on the instance or not.

When `Visible Only When Authorized` is chosen, only those who (1) have accounts on the instance, (2) are logged in, and (3) have secured the necessary permissions to access the Project will see the Content Block.

Conversely, if `Visible Only When Unauthorized` is selected, the block will display only for those who don't have specific access to the Project or aren't logged in to their accounts.

The default setting for this field is `Always Visible`.

##### Body

The body section is where the content of the block is input. The field accepts plain text encoded with basic Markdown syntax.

Presently there are no means to add images to this block in the backend by selecting a file from your system. But if an image is remotely hosted, it can be referenced and displayed in this block by using the following coding:

```html
<img src="https://imageName.jpg" width="100%" height="auto">
```

The width and height components allow the image to scale responsively, so it renders appropriately to the size of the reader's screen.

##### Style

In the Style section, users can select how the block should appear, with a white or gray background. The Normal and Shaded radio buttons correspond to white and gray, respectively.

:::note
A Project can have multiple Markdown blocks if the material warrants.
:::

#### Metadata

The Metadata Block will render metadata about the Project in three columns. Project metadata is managed in the Metadata menu of the Project record and cannot be directly modified in this view. Instead here users can choose to reveal a Project's metadata on the landing page and where it is situated among any other content blocks.

This block will not appear if no metadata has been added to a Project.

Likewise, publishers can use the `Access` dropdown in the block's edit menu to customize the Project's landing page behavior and for whom this block will appear. This field works in concert with the Project's access restriction settings.

If `Always Visible` is selected, the Content Block will be visible on the Project landing page for all who arrive there, whether they have accounts on the instance or not.

When `Visible Only When Authorized` is chosen, only those who (1) have accounts on the instance, (2) are logged in, and (3) have secured the necessary permissions to access the Project will see the Content Block.

Conversely, if `Visible Only When Unauthorized` is selected, the block will display only for those who don't have specific access to the Project or aren't logged in to their accounts.

The default setting for this field is `Always Visible`. 

#### Recent Activity

The Recent Activity block lists the last six activity records for the Project. Activities show as tiles indicating when Tweets, Texts, or Resources are added to a Project.

Activity records can be managed in the Project’s Activity menu. If a Project contains more than six activity records, users will be shown a button that links to the full, paginated list of activity on a separate screen.

Likewise, publishers can use the `Access` dropdown in the block's edit menu to customize the Project's landing page behavior and for whom this block will appear. This field works in concert with the Project's access restriction settings.

If `Always Visible` is selected, the Content Block will be visible on the Project landing page for all who arrive there, whether they have accounts on the instance or not.

When `Visible Only When Authorized` is chosen, only those who (1) have accounts on the instance, (2) are logged in, and (3) have secured the necessary permissions to access the Project will see the Content Block.

Conversely, if `Visible Only When Unauthorized` is selected, the block will display only for those who don't have specific access to the Project or aren't logged in to their accounts.

The default setting for this field is `Always Visible`. 

#### Resources

The Resources Block renders a teaser of the ten most recently updated Resources on a Project, accompanied by a link to the Resource library for the Project. Individual Resources are managed in the Resource menu.

Likewise, publishers can use the `Access` dropdown in the block's edit menu to customize the Project's landing page behavior and for whom this block will appear. This field works in concert with the Project's access restriction settings.

If `Always Visible` is selected, the Content Block will be visible on the Project landing page for all who arrive there, whether they have accounts on the instance or not.

When `Visible Only When Authorized` is chosen, only those who (1) have accounts on the instance, (2) are logged in, and (3) have secured the necessary permissions to access the Project will see the Content Block.

Conversely, if `Visible Only When Unauthorized` is selected, the block will display only for those who don't have specific access to the Project or aren't logged in to their accounts.

The default setting for this field is `Always Visible`. 

Users have the option to customize the title of the block using the `Title` field. By default, or if left blank, it will read as "Resources" on the Project page.

If the `Show All Collections` switch is enabled, this block will also list each of the Project’s Resource Collections. When toggled off, users can use the `Show Specific Collections` dropdown to show only certain Collections the publisher deems of particular interest. Publishers can also manually order how the Collections will appear in the block using the horizontal grab bars to the right of the Collection's name.

This block will also render a link to the “all collections” view for the Project. Resource Collections are managed in the Resource Collection menu.

#### Table of Contents

The Table of Contents Block renders the table of contents for a specific Text in the Project. This block is especially useful for Projects that only have one Text, in which case it’s generally more appropriate to render a TOC than to render a list of Project Texts in a Texts Block.

Manifold populates this block using the source document's navigational table of contents or header structure, as described here:

|  Upload Format  | Navigational File |
| :-------------: | :---------------: |
|      EPUB3      |    `tox.xhtml`    |
|      EPUB2      |     `tox.ncx`     |
| Manifest Ingest |  `contents.yml`   |
|      DOCX       | Header structure  |
|   Google Doc    | Header structure  |
|    Markdown     | Header structure  |
|      HTML       | Header structure  |

In other words, the Contents dropdown in the Manifold reader for the selected Text will mirror the readout for a Table of Contents block pointing to that same Text.

When editing this block in the backend, an editor will be confronted with the following options:

##### Access

Publishers can use this dropdown to customize the Project's landing page behavior and for whom this block will appear. This field works in concert with the Project's access restriction settings. 

If `Always Visible` is selected, the Content Block will be visible on the Project landing page for all who arrive there, whether they have accounts on the instance or not.

When `Visible Only When Authorized` is chosen, only those who (1) have accounts on the instance, (2) are logged in, and (3) have secured the necessary permissions to access the Project will see the Content Block.

Conversely, if `Visible Only When Unauthorized` is selected, the block will display only for those who don't have specific access to the Project or aren't logged in to their accounts.

The default setting for this field is `Always Visible`.

##### Title

The Title field allows users to customize the name of the block. By default it will render as “Table of Contents.”

##### Text

This dropdown lists all the Texts loaded to the Project. The TOC of the selected Text will render in the block. Even if there is only one Text loaded to the Project, the editor still needs to actively select it from the dropdown.

##### Depth

For tables of content that have nested entries, editors can decide to which depth of nesting the system should render in the block. The default is six.

##### Show Text Title?

Toggling this field on will add the title of the selected Text beneath the title of the block.

:::note
A Project can have multiple Table of Contents blocks, each pointing to different Texts loaded to the Project.
:::

#### Texts

The Text Block lists some or all Texts associated with the Project. The Texts that are included in the list can be filtered to only include Texts from one or more categories. The block can be configured to include or exclude author names, subtitles, dates, descriptions, and cover images in the output. The list can also be configured to group Texts by category.

An editor can modify the following settings for a Text block in the backend. Depending on which settings are toggled on/off, different elements within the block may move to better serve visual comprehension of the page.

##### Access

Publishers can use this dropdown to customize the Project's landing page behavior and for whom this block will appear. This field works in concert with the Project's access restriction settings. 

If `Always Visible` is selected, the Content Block will be visible on the Project landing page for all who arrive there, whether they have accounts on the instance or not.

When `Visible Only When Authorized` is chosen, only those who (1) have accounts on the instance, (2) are logged in, and (3) have secured the necessary permissions to access the Project will see the Content Block.

Conversely, if `Visible Only When Unauthorized` is selected, the block will display only for those who don't have specific access to the Project or aren't logged in to their accounts.

The default setting for this field is `Always Visible`.

##### Title

The title of the block as a whole can be customized by an editor. If left blank the Text block will default to having “Texts” as its title.

##### Description

The Text-block description provides a space to contextual the Texts being viewed in the block and will be of particular use when more than one Text block is being employed, helping distinguish their contents from one another.

##### Show Author Names?

When it's important to surface a Text's author, especially for journals, contributed volumes or OER and course packets, toggle this slide to its active state. The names here will mirror those shown on the Text's People menu.

##### Show Subtitles?

If this slider is toggled on, any subtitle associated with a Text, as shown in the Text's General menu will appear to the right of the main title.

##### Show Dates?

A Text block can display the date when a particular Text was added to the Project or last updated on the system. This will be useful in the classroom setting and when working on Projects collaboratively. The load/update date is not an editable field and is not to be confused with a Text's publication date.

##### Show Uncategorized Texts?

This field leans on how the Texts are grouped. In the Text block, uncategorized Texts are treated differently from those that are categorized. When this slider is toggled active, uncategorized Texts will appear beneath a header reading “Uncategorized,” regardless of whether you have the “Show Category Labels” toggle active.

It is worth stressing that regardless of how many uncategorized Texts you have—or if you only have uncategorized Texts in your Project—if this slider is toggled off, your Text block will show as empty. Likewise, regardless of the settings that affect other categories, they will not affect this toggle. Thus if this is toggled on, and no Text categories are selected from the “Add a Category” dropdown to show, uncategorized Texts will still render in the block.

##### Show Descriptions?

When toggled on, the Show Descriptions slider will pull the Text's description as entered in the Text's General menu and include it beneath its title listing in the block. These will be especially useful for journals or edited collections.

##### Show Cover Images?

For Texts loaded in the EPUB format, this toggle allows an editor to control whether the icon for the Text in this block list view is the default Manifold icon for Texts (a stack of papers) or if the EPUB cover renders. When toggled active, Manifold will show the cover as defined in the EPUB.

The cover will only be shown if the cover is accurately described as such in EPUB files:

- For EPUB3, the cover is set by the `toc.xhtml` file, within the Guide section. The file associated with the "cover" attribute will be where Manifold secures the cover for this view.

```html
<li>
  <a epub:type="cover" href="fileName.xhtml">Cover</a>
</li>
```

- For EPUB2, the cover is described in the `content.opf` file enclosed in `<guide>` tags. The file associated with the entry containing the "cover" attribute is where Manifold will look for the cover.

```html
<reference type="cover" title="Cover"  href="fileName.xhtml"/>
```

##### Show Category Labels?

This field depends on how a Project's Texts are grouped. When toggled active, Texts that are grouped within a category (not counting those grouped as “Uncategorized”) will appear in the Text block along with their category name.

This field can be further modified by the Categories dropdown.

##### Categories

This field works in tandem with how a Project's Texts are grouped. Using the “Add a Category” dropdown, an editor can choose which custom Text categories render in the block. Thus an editor can employ more than one Text block, each showing only certain categories.

Categories will show in the Content Block in the same order in which they are organized in the Texts sidebar. That sorting scheme can be overridden directly through this menu by using the grab bars beside the category names, dragging/dropping them in the preferred order.

If no categories are selected and “Show Uncategorized Texts” is toggled on, any uncategorized Texts will still appear as Manifold treats uncategorized Texts differently from those with custom groupings.

:::note
A Project can have multiple Texts blocks, allowing a publisher the means to showcase a Project's textual materials in contextually appropriate ways.
:::

## Managing Access

The Access sidebar settings allow editors to control who can modify or access specific Projects on a Manifold instance. These settings are categorized along two different trajectories:

- **Editor Permissions** are oriented around collaboration and granting backend access and status to particular users on a limited basis. For instance, a production editor at a university press wants to allow an author to place their own media Resources in a Text, a journal editor wants to invite another user to help load materials for a special issue, a teacher wants their graduate assistant to curate a collection of OER materials. In Manifold speak, we think of these as “scoped roles” as compared to “global roles,” which are described in the Users section.
- **Project Entitlements**, on the other hand, allow publishers the means to limit who can access and engage with a Project. This could be used as a basic paywall mechanism, a means to preview content to authors before it debuts publicly, a means to serve exam and desk copies, a way for teachers to limit Project access to only members of their class.

The means by which these sorts of permissions and entitlements limit or extend access to users is described in detail below.

## Editor Permissions

The most common permission-granting scenario will be in providing those with Reader roles one or more of the following permissions, though these permissions can be granted to other role types as well.

By default this section will be empty for new Projects, except for those created by users with the `Project Creator` role, who will automatically be listed in this space with `Can Modify Project` permissions for those Projects they create.

:::note
Users who are granted these Project-specific permissions cannot themselves extend such permissions forward to other users, with the exception of those who have `Can Modify Project` toggled on—the “Project Editor” permission.
:::

To assign a user Project-specific permissions, click `Grant editor permission`. This will open a drawer from the right side of the screen with a dropdown menu and three sliders.

Click the `Select User` dropdown and begin typing or scrolling to find the user whom you want to assign the permissions. If they can't find their name, they may not yet have an account on your instance, and you will need to create a new user account on their behalf.

You can now toggle the sliders for the following three permissions. To formally extend those permissions click `Save Permissions`. Once clicked those permissions will be activated and ready to use immediately.

### Can Modify Project

Grants user the ability to make any change within the scope of the backend Project page as well as modify Maker records directly associated with those Projects where they have been granted this permission. This includes the ability to permanently delete a Maker record that may also be associated with other Projects.

When this option is selected the title `Project Editor` will be appended next to the user's name.

### Can Modify Resource Metadata

Grants users the ability to update Resource metadata. This permission will be most useful to bestow on those who are best positioned—or simply have the requisite time—to flesh out the information associated with Project's Resources.

When this option is selected the title `Metadata Author` will be appended next to the user's name.

:::note
It would be redundant to grant a user both “Can Modify Project” and “Can Modify Metadata,” as someone who can modify a Project can also inherently modify its metadata.
:::

### Is a Project Author

Grants users the ability to access draft Projects, modify metadata and place Collection in the Project's Texts. This permission will also differentiate the user's annotations and highlights from others with a pink color and an author badge, as a means indicate that the author is engaging with the Project directly.

When this option is selected the title `Author` will be appended next to the user's name.

## Project Entitlements

The controls in this section allow a publisher to limit who can access a specific Project. Access to a Project can be restricted to individual users or particular reading groups (e.g., a reading group of peer reviewers, a group who receives review copies, a discussion section of a class).

Presently, the transaction that grants an entitlement occurs outside of the Manifold platform: a student signs up for a class, a teacher invites the student to a reading group that has an entitlement to a specific Project; a reader purchases access to a Project via a publisher's website, the publisher manually grants that reader's account access to that Project. In the future we are hoping to make it possible to manage that process programmatically with a publisher's existing authentication architecture.

Beyond restricting access, the settings here can be used to customize the messaging around why the Project is restricted and how to gain access to it.

Publishers can also search through existing entitlements to revoke access or learn when a user's access to a Project will expire.

:::note
The settings here are for an individual Project. By default all Manifold Projects are openly accessible. To change the default so that all publications are restricted, see [General Settings](../administering/configuring/general_settings.md).
:::

### Configure Access Restrictions

To activate access controls for your Project, click `Configure Access Restrictions`. 

This will expand the Project restriction option, which are contextual based on the default access setting:

#### Project Access is Restricted *(Conditional)*

When this slider is toggled on, access to the Project will be restricted to only those users or reading groups who have credentials to modify the Project in the backend and those who have entitlements to do so.

This means all users on the instance who log in with `Administrator`, `Editor`, or `Marketeer` credentials can access restricted Projects.

Users logging in with `Project Creator` or `Reader` credentials will not have access to restricted Projects *unless* (1) they have been granted a Project permission, as described in the section above; (2) they have secured an entitlement described in the `Create Entitlement` section below; or (3) are a member of a reading group that has likewise been granted an entitlement to the Project. Details about the different Manifold roles are documented in the [Users section](../backend/users.md).

Users who attempt to access Project materials without the appropriate credentials will be directed to the Project landing page where a restricted access ribbon will display across the hero, reading “Only authorized users may access this project.”

This slider also has implications for the calls-to-action that are configured to appear in the hero section. Calls-to-Action of the type `Link` or `Download` can be set to appear always, only for authorized users, or only for unauthorized users. This provides publishers a means to tailor the experience of the Project for users depending on how they presently relate to a Project. See the [Project Layout section](../backend/projects.md#project-layout) for more.

#### Project is Open Access *(Conditional)*

When a Manifold instance is configured to restrict access to all Projects (described in the General Settings section) this slider will read as “Project is Open” instead of “Project Access is Restricted.”

In this state, this slider allows a publisher to selectively make certain Projects openly available to all readers without need for any special entitlements. This could be useful for journals, book series, or general marketing efforts aimed at giving readers a preview of the kinds of content generally available on an instance.

#### Restricted Access Notice Header

When `Project Access is Restricted` is toggled on, the text in this field will display (with the `Restricted Access Notice Body`) below the Project hero for only those users who don't have credentials to access the Project.

This field is customizable and Markdown enabled. If left blank, the default message will display: “Access to this project is restricted.”

#### Restricted Access Notice Body

When `Project Access is Restricted` is toggled on, the text in this field will display (with the `Restricted Access Notice Header`) below the Project hero for only those users who don't have credentials to access the Project.

This field is customizable and Markdown enabled. If left blank, the default message will display: “Only users granted permission may view this Project's Texts, Collection, and other content.”

### Search Entitlements

The search bar in the entitlement sections allows publishers to sort through existing and past entitlements. Entitlements can be revoked individually as needed. Each entitlement records also carries a tag to indicate the current status of the permission: active, expired, or expiring soon.

### Create Entitlement

To provide users or reading groups an entitlement to access restricted Projects, click `Create entitlement`. This will open up the Grant Entitlements panel from the right.

The panel comprises two fields that define the nature of the entitlement:

#### Who is the Entitlement For?

Using this dropdown, publishers can scroll or type-ahead for existing users or reading groups to grant an access entitlement to the Project. Presently only one selection can be made at a time.

If there is no entry for the intended user, a new account will first need to created for them. Learn more about that process in the Accounts section.

Once `Save Entitlement` is clicked the entitlement will be in place and the user or reading group will immediately have access to the Project.

Access entitlements for reading groups remain in effect for the individual members of the group for the duration of entitlement and so long as they remain a part of the group.

#### Expiration *(Optional)*

By default an entitlement does not have an expiration date. If one is desired include the date here in `YYYY/MM/DD` format. This field also accepts human-readable strings in the form of "in *x* term" (e.g., “in three days,” “in two months,” “in one year”).

Existing entitlements, once saved saved, cannot be modified—only deleted. However, users and reading groups can have multiple entitlements. If an entitlement record doesn't align with current expectations, a new entitlement can be granted with new terms: if a Journal Subscriber has an entitlement that expires at the end of the year and she has just renewed her subscription, a new entitlement record can be assigned with the new terms of expiration. When one entitlement ends the other will automatically go into effect.

## People

In this menu users who have permissions to modify the Project at hand can associate Maker records with it. Doing so relates a Maker record to the Project as a whole and not to a specific Text within it. For more about the latter, please refer to the Texts section.

Maker records can be associated with a Project as `Authors` or as `Contributors`. At present there are no options for more refined categorization (i.e., Edited by, Translated by, Introduction by, etc.)

When a Maker is associated with a Project as an Author, their name and avatar (if one has been added to the record) will appear on the Project landing page, beneath the Project title, and also in the Project library, beneath the Project's cover or avatar.

Makers associated as Contributors will have their name show up only on the Project landing page beneath the author's name. Their avatar will not be included.

:::note
Associating a Maker record as an Author in this space is not the same as giving a user account “Is a Project Author” permissions. For more on the distinction, see the [Users section](../backend/users.md).
:::

## Associating Maker Records with Projects

To associate a Maker record with a Project as either an `Author` or `Contributor`, click the `Add an Author` field beneath the appropriate heading and begin typing the name of the user you are looking for. The system will suggest names to you of records already in the system, based of what you have typed. Click on the result that matches the Maker you are searching for, and the record will be associated to the Project as either an `Author` or `Contributor` and listed beneath the appropriate heading.

If there are no results for the name you type, you may need to create a new Maker record.

## Editing or Removing Makers

From this screen you can modify the user accounts that are associated with the Project or remove them from the Project entirely by clicking on the pen or “X” icons, respectively. More details about this process can be found in the creating Makers section, under the `New Project-Level Maker Records` heading.

## Changing Record Order

If there is more than one record under the `Author` or `Contributor` heading, you can resort them using the horizontal grab bars on the far right, which allow users to  manually drag and drop the records into the desired order.

## Texts and Categories

The Texts panel will be one that users will often interact with, as this is the spot where Texts are added, categorized, and updated.

For new Projects—or Projects that haven't yet ingested a Text—the panel is composed of two buttons (`Add a new text` and `Create a new category`) and a default Text section (`Uncategorized`).

When Texts are added to a Project they will be oriented in the `Uncategorized` section. New, custom, category sections can be added as required to suit the needs of a Project.

This section is portioned along the following themes:

* Adding Texts to Projects
* Grouping Texts by Category
* Modifying Text Records

### Adding Texts to Projects

:::note
The process detailed here speaks to the mechanics of adding an already prepared Text into Manifold. Before proceeding, please read through the Preparing Texts section to ensure your materials are in a state acceptable for ingestion.
:::

To begin the process of adding a Text to a Project, click on the `Add a new text` button. When you do, a drawer will open from the rights, allowing you to drag and drop a file onto the screen or select a file from your device using the file directory.

Alternatively, if the Text you want to ingest is already being hosted remotely, you can designate the URL where Manifold can fetch it. For instance, the following is the URL to the Standard Ebooks Project's copy of Edwin A. Abbott's *Flatland*:

``` shell
https://standardebooks.org/ebooks/edwin-a-abbott/flatland/dist/edwin-a-abbott_flatland.epub
```

Note that the link is not to the page where you can download the file, but instead a direct link to the file itself.

Once you have selected a file or designated a URL, the `Continue` button will change from gray to green when the system is ready to proceed. Click it and the drawer will change to a file analysis state.

#### File Analysis and Ingestion

Manifold will review the file you've suggested for ingestion, with the following output:

``` shell
Current State: Sleeping
Strategy: None
Text ID: This ingestion will create a new text
Log: Connecting to Manifold websocket...
```

Once the `Connecting to Manifold websocket` appears in the Log section, the `Ingest` button at the bottom right will turn green and the Text can be ingested. When clicked Manifold will process your file. The `Current State` field will read `Processing`, and the log will stream details of what the system is doing. If everything goes correctly, when the process is finished the `Current State` should say `Finished`, a hexadecimal value should be listed under the `Text ID`, and the last line of the log should read `Ingestion Complete`.

If you get anything different from the log, reach out for support.

Otherwise, you can click on the green `Complete` button, and you will now see the Text you ingested in the `Uncategorized` section of the panel.

Congratulations

### Grouping Texts by Category

Categories are a means to group and label Texts in the system. By default there is one fixed category—`Uncategorized`—into which all Texts will initially flow until a user moves them to a created category.

To move a Text from one category to another, simply click on the horizontal “grab” bars on the far right side of the category container, beside the trash can and edit pencil icons.

#### Uncategorized

`Uncategorized` serves as the staging ground for all Texts that are initially ingested. This category does not have a limit on the number of Texts it can hold, nor are Texts in this collection overlaid with a title ribbon to which custom categorized Texts are subject.

#### Custom Categories

If your Project requires grouping Texts in distinct clusters, or if you simply wish to indicate what state the Text being presented is in (e.g., First Draft, Peer-Reviewed, etc.) you can create a custom category that will support those ends.

To create a custom category, click on the `Create a new category` button, and a drawer will open from the right asking you to name it. Click `Create Category`, and the new section will appear in both the front- and backend interfaces:

By default new categories are empty. When you move a Project into a custom category the reader will overlay the bottom of the Text with a yellow ribbon the category name (unless the Text is denoted as having been Published).

You can rename a category by clicking on the `Edit` button to the right of it's name or delete the category entirely by clicking on the `X` to the right of the `Edit` button.

Texts that are in a custom category that is being deleted will return to `Uncategorized` after the deletion has been confirmed.

To change the order in which the custom categories appear, click on the horizontal grab bars to the right of the category name, which you can use to drag and drop the category to the desired placement.

### Modifying Text Records

After a Text has been ingested, you can modify its metadata, adjust associated Maker records, update how its constituent elements render in the reader, and also re-ingest its source file to accommodate any minor changes that may have been required after the initial ingest.

To edit a Text, click on it's name or edit button from the Project's Text directory.

From there you will be taken to the Text landing page with its own unique sidebar:

#### Text Menu Bar Options

The menu bar on the Text landing page mirrors the functionality of the menu bar at the Project level, along with contextual and added functionality.

##### Preview

When activated here, the Preview button opens a new tab with the Text showing in the Manifold reader. This contrasts with this button's behavior at the Project level, where it opens a new tab to the Project landing page instead of a specific Text.

##### Delete

This button allows editors the means to delete the specific Text that is presently being edited—versus deleting the entire Project.

##### Enable/Disable EPUB

This option provides a means for a publisher to export from Manifold an EPUB of a specific Text, regardless of the format it was ingested. If a publisher is creating Texts using Word files or Google Docs, this provides the means to secure that same content in the EPUB format.

Every five minutes Manifold looks for Texts that have this setting enabled. If a Text is newly enabled, Manifold will generate an EPUB of the Text. If the Text has been updated since the last scan, Manifold will re-create the EPUB so that accurately reflects any changes that have been made.

Once generated, Manifold makes the EPUB available for download through the backend (see the next section). Looking ahead, we anticipate tying this to content blocks, so that publishers can provide readers the option to download specific Texts as EPUBs to their own devices.

:::note
Presently there is no warning if the system cannot generate an EPUB from the Text. The only indication that something has gone amiss is that the `Download EPUB` button does not appear on the menu after having been toggled on for at least five minutes.
:::

##### Download EPUB *(Conditional)*

For Texts that have `Enable EPUB` toggled on, this button provides the means for the publisher to secure the Manifold-generated EPUB.

Presently this is the only means to secure the generated EPUB, but in the future we expect to make it possible to provide a way for readers to access the file through content blocks on the Project landing page.

:::note
The EPUB offered here is one that Manifold has generated. If a publisher loads an EPUB to initially create the Text and then toggles `Enable EPUB` on, Manifold will create its own EPUB. Those two files would be very similar but potentially not exact matches. The original source EPUB is still retained, however, and would be available through the `Download Source` button (see below).
:::

##### Download Source *(Conditional)*

Manifold retains the source files that were uploaded to create each Text. This button allows a publisher to secure that file directly from the system.

In situations where multiple backend users are uploading and editing files, this provides the means to access source materials directly without having to go through an intermediary. Likewise, in situations where source files have been misplaced, this serves as a handy fallback.

:::note
Manifold does *not* provide source files for Texts that have been ingested via URL (e.g., Google Docs). In such situations this button would not appear.
:::

#### General

When you access a Text record in the backend, you'll arrive first in the `General` menu where you can adjust number of the Text's fundamental attributes:

:::note
Of the following fields, `Title`, `Subtitle`, and `Description` have display options available in the Text Content Block. To learn more about those options, see the [Layout section](../backend/projects.md#project-layout).
:::

##### Title

Manifold will automatically populate this field if the source file that is ingested describes a title in its structure. The following table considers this for each of the available ingestion strategies:

| Source File      | Location Notes                                                                                                                                                                                                                                                     |
| ---------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  |
| EPUB             | The `content.opf` file in the EPUB package will describe the title with metadata formatted like this: `<dc:title id="title">Furious Feminisms</dc:title>`                                                                                                          |
| HTML             | For individual HTML Text ingests, title metadata will appear Within the `<head>` tags, formatted as follows: `<meta name="dc.title" content="Social Theory for Nonhumans">`.                                                                                       |
| Markdown         | When loading individual Markdown files, the title will be formatted like this: `title: Metagaming`. This should appear at the top of the document, with lines of three dashes (`---`) appearing above and below.                                                   |
| Google Doc       | While there is a paragraph style called `Title` in the formatting options for Google Docs, what populates the title field in Manifold is the saved title of the document that appears in the upper left of the Google Doc screen, just above the file menu system. |
| MS Word (DOCX)   | The text of the paragraph that has the Word Style `Title` applied to it will be captured as the Text title in Manifold.                                                                                                                                            |
| Manifest Ingests | In the YAML file, nested in the `meta` section the title metadata will be described like this: `title: The End of Man`.                                                                                                                                            |

If Manifold cannot find title information it will automatically assign a random UUID as the title. That can be adjusted to a more appropriate title here.

The value entered here, whether coming from a source file's metadata or from manual entry, will be properly encoded as the title in any EPUB that Manifold may make of the Text for export or download.

:::note
The content of this field will be included when when a URL from the Text is shared with another platform capable of conveying that information to its readers (e.g., Twitter, Facebook).
:::

##### Subtitle

If Manifold cannot determine a Text's subtitle during ingestion it will assume there is no subtitle. If that is not accurate, one can be supplied here.

##### Publication Date

This is a calendar entry field that allows a publisher to describe the publication date of a specific Text, which may or may not coincide with the publication date of the Manifold Project. That is to say, any publication date is somewhat arbitrary. This field could reflect the date of original publication in print or the date of publication onto Manifold.

The date stored in this field does not presently render on the site or function for any sorting purposes. We store it for likely future use and encourage publishers to maintain complete Text records that are consistent with the publishing scheme. 

##### Slug

A Text slug describes the part of the URL for a specific Text that appears between the `read` and `section` components. In the following example, `furious-feminisms` is the slug for a Text on the University of Minnesota Press's instance. The system will automatically create a slug for each new Text based on the Text title, unless your manually adjust this field.

```html
https://manifold.umn.edu/read/furious-feminisms/section/412115a1-5dce-4436-b550-524eb757f065
```

:::note
It is best to adjust a Text slug in the initial setup. If adjusted after the original URL, with an auto-generated slug, has been shared, readers may encounter broken links.
:::

##### Description

This is a Markdown-enabled field where publishers can describe individual Texts. The copy entered here can also appear in a Text Content Block. See the [Layout section](../backend/projects.md#project-layout) for more details on how and where the content of this field can be displayed for readers.

:::note
The content of this field will be included when when a URL from the Text is shared with another platform capable of conveying that information to its readers (e.g., Twitter, Facebook).
:::

##### Cover

This field allows publishers to associate a cover image with a Text, which can then be made to render in the Text Content Block beside the Text title (as in this example). See the [Layout section](../backend/projects.md#project-layout) for details on how to configure your Project for that setup.

Previously, only Texts loaded in the EPUB format would render a cover in this space. With this field, customizable Text covers are available for all Texts, regardless of their ingestion file type.

:::note
In situations where Manifold is creating an EPUB of a Text, for download or export, it will use the cover file stored in this field as the cover for the Manifold-generated EPUB.
:::

##### Published?

In the Manifold reader, Texts normally include the category name with which they are associated as a ribbon at the bottom of the screen.

When this field is toggled on, that ribbon is removed. Further, a published tag will also be associated with the Text in a Text Content Block:

##### Section Label

`Section Label` refers to the navigation header that appears at the bottom of a Text section. By default the header reads `Next Chapter`. Below that header is the title of the next unit of Text. If your Text is broken up by another conventions (e.g., article, part), you can specify that here to better orient readers to the nature of the content.

The content entered in the `Title` and `Description` fields are included when a URL from the Text is shared with another platform capable of conveying that information to its readers (e.g., Facebook).

Likewise, the Text's title and subtitle, its makers (authors, contributors), and description can be toggled to be shown on the Project landing page in a Text Content Block. To learn more about all the customizations possible for display elements in a Text block, see the [Layout section](../backend/projects.md#project-layout).

#### People

Through the `People` sidebar element you can add, remove, and modify Maker records associated with the Text just as you could for the Project generally. For details on that process, which is the same here, see the [People section](../backend/projects.md#people).

#### Metadata

In addition to the basic metadata available through `General` sidebar element, there is also a separate menu (`Metadata`) that allows users to modify a robust set of metadata elements associated with a particular Text.

#### Styles

The Styles sidebar menu allows users who are versed in CSS (cascading stylesheets) to modify how certain elements in their Text render in the reader by adjusting an existing—or associating a new—CSS file with the Text.

Stylesheets are applied to Texts in the order listed under the Stylesheet heading and are classified as either “Ingested” or “User”:

“Ingested” stylesheets are those that were part of the source document imported into Manifold. “User” stylesheets are those that have been created by a user after the initial ingestion.

If you need to adjust the styling of certain elements in a Text, we suggest you add a new stylesheet to the Project instead of modifying one that the system brought in with the Text: if you ever need to reingest the Text in question, any changes you have made to those stylesheets that were brought in with the Text will be overridden by the reingest process, while added stylesheets will persist unaffected by that process.

To override styles in the source document, create a new stylesheet and move it to the bottom of the list by clicking the two horizontal grab bars. You can use those to drag and drop your new sheet or reorder existing ones.

When you create a new stylesheet, you'll be taken to a screen that is split into three sections: `Name`, `Source Styles`, and `Validated Styles`. As a user you will only be able to modify the first two fields.

- **Name**. A field to document the name of your stylesheet. We suggest something brief but descriptive of its purpose (e.g., Blockquote Spacing).
- **Source Styles**. The pane where you can add style rules to the various classes that make up your Text. Rules should be in keeping with CSS standards.
- **Validated Styles**. After you save your stylesheet, this pane will populate with the translation of your rules specific to the platform. This output is read-only and cannot be modified by a user.

After your style rules have been saved the Text Sections dropdown will become available. This dropdown allows a user to assign the new stylesheet to either the entire Text—by clicking `Add All`—or by selecting individual sections from the dropdown. Selected sections appear below and can be deselected by clicking the `x` beside their names. Only those sections selected will have the new stylesheet applied to them. Thus it is possible assign style adjustments to specific parts of a Text that was uploaded using the Manifest ingestion method.

#### Reingest

In situations where you need to modify the content of a Text you have already loaded into Manifold, you can use the Reingest process.

Presently there is no means to directly modify Manifold Texts (though such authoring components are under discussion). Instead you will need to adjust the source document—the document(s) you originally uploaded into the system—and then reload (or in the parlance of Manifold, reingest) it, replacing the existing Text with the modified version.

This process is not versioning control but a means to address the need to make minor corrections and modifications.

When you reingest a Text, all the annotations, highlights, and Resource placements that have been made will persist, unless such drastic changes were performed that the system can no longer identify their original anchors. In this unlikely case, annotations and highlights will be orphaned and no longer accessible.

To reingest a Text, click on `Reingest` from the Text record's sidebar. You will see the same readout as when you initially ingested the Text. Follow the same steps from the `Adding Texts` section above and when completed your Text will have been replaced by the newer version.

It is important to note that the following fields associated with the specific Text record—and *not* the Project generally—will be overridden by a reingest:

- General
  - Title
  - Subtitle
  - Publication Date
  - Description
  - Cover
- People
  - Authors
  - Contributors
- Metadata
  - Rights
  - Unique Identifier

If you have manually adjusted these fields after your Text was initially loaded, the reingest will reset them to their initial state.

:::note
In cases where author or contributor records have been added to a Text after it was first ingested, those records will remain through the reingest process. However, if an author or contributor was removed from the record, they will reappear after the reingest.
:::

## Resources and Resource Collections

Resources are media that can be used to augment and enhance Texts or stand alone as items of inquiry or investigation on their own. There are eight Resource kinds available in Manifold:

* Image
* Video
* Audio
* File
* Link
* PDF
* Document
* Spreadsheet
* Presentation
* Interactive

Each of those are discussed in detail in the Preparing Resources section.

In this space, devoted to the `Resource` sidebar of the backend Project page, we will consider how to add the Collection you have already prepared into the system along the following themes:

* Required User Credentials
* Adding Resources Individually
* Adding Resources in Bulk
* Managing Resources
* Searching through Existing Resources

Details on how to place already loaded Collection (or Collections of Resources) in a Text is discussed in the Interface section.

### Required User Credentials

To access the Resource sidebar a user who has a `Reader` or `Project Creator` role will require either `Can Modify Metadata` or `Can Modify Project` permissions. Note that the former only allows the user to update the metadata for existing Resources, not load new Resources into the system.

Users with `Marketeer`, `Editor`, or `Administrator` roles will, by default, be able to update existing and upload new Resources to any Project in the instance where they have those credentials.

For more information about credentials, see the [Users section](../backend/users.md).

### Adding Resources Individually

To add Resources to a Project one at a time, click the `Add a New Resource` button below the Resource search bar. The `New Resource` page will appear and provide you the option to choose which of the eight kinds of Resource you'd like to add.

A small subset of metadata fields specific to your Resource will be present below the Resource kinds. The fields vary depending on the Resource kind in question. Generally you'll be prompted to provide a `Title`, `Description`, and the actual file you are uploading as a Resource. Only the `Title` and Resource file are required. The exceptions, described below affect the `Video`, `Link`, and `Interactive` kinds.

After you've filled out the appropriate fields, click `Save and Continue`. Your Resource has now been loaded, and you can update the full range of fields and metadata associated with your Resource. A table describing what options each Resource kind has available to it can be found in the Preparing Resources section.

#### Video

Videos can be uploaded directly into Manifold or they can be streamed from YouTube and Vimeo. To make the connection from Manifold to the external host, click the slider for `Is This an Externally Linked Video`. When toggled on, two new fields appear: `Video ID` and `External Video Type`.

`Video ID` describes the unique identifier in the URL bar that is associated with the video in question. On YouTube it will appear after `watch?v=` and before any string beginning with an ampersand `&`. In the following, the `Video ID` would be `3yfYetkMLPM`:

``` html
https://www.youtube.com/watch?v=3yfYetkMLPM
```

On Vimeo the `Video ID` is the number following `vimeo.com/`. In this example, the `Video ID` would be `249096229`:

``` html
https://vimeo.com/249096229
```

The `External Video Type` field is a dropdown used to select which service the video is hosted on: YouTube or Vimeo.

#### Link

Instead of a file to upload, `Link` Resources require that you input the URL to the site you are using as a Resource.

#### Interactive

Instead of loading a file to the system, Manifold instead prompts the user to provide the URL of the site in question along with the minimum width and height (in pixels) for the iFrame wrapper. The minimum width and height help Manifold handle the iFrame responsively and determine how the content will render—inline or fullscreen—and whether it may be necessary to substitute the poster image, instead of the interactive element, in slideshows.

If you are unsure of the minimum width or height, leave those fields blank, and Manifold well calibrate the view based on the size of the reader's screen size.

### Adding Resources in Bulk

To add Resources in bulk you'll first need a CSV or Google Sheet describing the files you are uploading. A [template for that purpose is provided here](https://docs.google.com/spreadsheets/d/1nsI0aYHZ_30Lby-ZDkLRIaqvnekBm5dN7N43e6Z4igE/edit?usp=sharing) as the Manifold Resource Log. Add or adjust columns to suit your needs. Manifold's upload process can be adapted to map data in different ways.

You will also need to save all your Resources in a Google Drive folder with permissions extending viewing access to all those who have possession of the link. At this point only Google Drive is supported as viable means to host Resources that are to be imported into the system. Your instance will need to have Google Services configured for this process to be successful. See the section on [Integration Settings](../administering/configuring/integration_settings.md) for more.

Once your sheet is filled out (and saved as a CSV) and your Resources saved to Google, click `Bulk Add Resources` to add a Collection of Resources in one step.

You will be taken to a screen where you can load your CSV file or provide the URL to a shared Google Sheet under the `Step 1: Upload` heading. Below the `Step 2: Describe Data` you should select from the dropdown the row number where your column headings appear (select `2` for the Manifold Resource Log) and then enter ID for the Google Drive folder where your Resources are saved. The ID is the last part of the URL for your Google Drive folder after `https://drive.google.com/drive/folders/`.

When you click continue you'll be taken to `Step 3: Map Columns to Resource Attributes`. The column on the left side lists the column headers found in your spreadsheet. The column on the right lists the attributes that can be set on Manifold Resources. Drag the attributes on the right to the corresponding columns on the left. The Resource Import Matrix below serves as a map between those columns.

Pressing the `Automatically Map Attributes` button will attempt to automatically match the attributes with the spreadsheet columns. If you are using the Manifold Resource Log you'll need to only map two attributes manually: `external_id` to `Video ID`, and `metadata.rights` to `License`.

When you click continue your Resources will be uploaded into the system with the information from your sheet populating the appropriate fields for each. This process may take a few moment to complete. As it is working you will see regular updates to the status of your uploads.

### Managing Resources

To adjust the metadata for a Resource that has been loaded into the system, click on the Resources name in the list of those in the system. That will take you to that Resource's detail page, where information is spread across three sidebar headings: `General`, `Variants`, and `Metadata`. The `Variants` sidebar will only appear for `Image`, `Video`, `Audio`, and `Interactive` Resources.

The Preparing Resources section describes all the available fields you can adjust and where they can be found in the system in detail.

### Searching through Existing Resources

From the Resource page you can search through all Resources that have been added to the Project you are viewing. When you click `Show Search Options` you'll have the ability to refine your search by Tags as well as the kind of Resource you are looking for.

### Resource Import Matrix

| Manifold Resource Log    | Resource Metadata        | Resource Attributes               |
| ------------------------ | ------------------------ | --------------------------------- |
| Title                    | Title                    | title                             |
| N/A                      | Sort Title               | N/A                               |
| Kind                     | Kind                     | kind                              |
| N/A                      | N/A                      | created_at<sup>a</sup>            |
| Caption                  | Caption                  | caption                           |
| Description              | Description              | description                       |
| Fingerprint              | Fingerprint              | fingerprint                       |
| URL                      | Link URL                 | external_url                      |
| URL                      | iFrame URL               | external_url                      |
| Video ID                 | Video ID                 | external_id                       |
| Host Name                | External Video Type      | external_type                     |
| Allow Download?          | Allow Download?          | allow_download                    |
| Sub Kind                 | Externally Linked Video? | sub_kind                          |
| Slug                     | Slug                     | slug                              |
| Minimum Width            | Minimum Width            | minimum_width                     |
| Minimum Height           | Minimum Height           | minimum_height                    |
| Tags                     | Tags                     | tag_list                          |
| Series Title             | Series Title             | metadata.series_title             |
| Container                | Container Title          | metadata.container_title          |
| ISBN                     | ISBN                     | metadata.isbn                     |
| ISSN                     | ISSN                     | metadata.issn                     |
| DOI                      | DOI                      | metadata.doi                      |
| Original Publisher       | Original Publisher       | metadata.original_publisher       |
| Original Publisher Place | Original Publisher Place | metadata.original_publisher_place |
| Original Title           | Original Title           | metadata.original_title           |
| Publisher                | Publisher                | metadata.publisher                |
| Publisher Place          | Publisher Place          | metadata.publisher_place          |
| Version                  | Version                  | metadata.version                  |
| Series Number            | Series Number            | metadata.series_number            |
| Edition                  | Edition                  | metadata.edition                  |
| Issue                    | Issue                    | metadata.issue                    |
| Volume                   | Volume                   | metadata.volume                   |
| Rights                   | Rights                   | metadata.rights                   |
| Territory                | Rights Territory         | metadata.rights_territory         |
| Restrictions             | Restrictions             | metadata.restrictions             |
| Copyright Holder         | Rights Holder            | metadata.rights_holder            |
| Creator                  | Creator                  | metadata.creator                  |
| Alt-Text                 | Alt Text                 | metadata.alt_text                 |
| Credit Line              | Credit                   | metadata.credit                   |
| Copyright Status         | Copyright Status         | metadata.copyright_status         |
| Filename                 | N/A                      | attachment.attachment             |
| High Res                 | High Resolution Image    | attachment.high_res               |
| Thumbnail                | Thumbnail Image          | attachment.variant_thumbnail      |
| Poster                   | Poster Image             | attachment.variant_poster         |
| File Variant 1           | Variant #1               | attachment.variant_format_one     |
| File Variant 2           | Variant #2               | attachment.variant_format_two     |
| Collection               | Collection               | resource_collections              |
| Figure Number            | N/A                      | N/A                               |
| Permission Status        | N/A                      | N/A                               |
| Print Color Solution     | N/A                      | N/A                               |
| Print Intention          | N/A                      | N/A                               |
| Skip                     | N/A                      | N/A                               |
| Source                   | N/A                      | N/A                               |
| Special Instructions     | N/A                      | N/A                               |

<sup>a</sup>This field is automatically populated by the system and cannot be changed manually.

### Resource Collections

Resource Collections are groupings of Resources that can be used to orient a reader around certain themes or as a means to place a series of Resources onto a Text with one insertion.

Collections appear and take display precedence in the Resources blade of a Project's landing page, where their individual contents can be accessed and engaged with.

### Creating a New Resource Collection

Resource Collections are created through the `Collections` sidebar of the backend Project page:

#### Required User Credentials

To access the Collections sidebar and create a new Collection, a user who has a `Reader` or `Project Creator` role will require `Can Modify Project` permissions for the Project in question. Users with `Marketeer`, `Editor`, or `Administrator` roles will, by default, be able to create new Collections in the instance where they have those credentials.

For more information about credentials, see the [Users section](../backend/users.md).

#### Adding a Collection to a Project

To create a new Collection of Resources, click the `Add a New Collection` button.

You will be prompted to enter a `Title`, `Description`, and upload a `Cover Image` for the new Collection. Only a `Title` is required at this point, and all three fields can be updated later.

The `Cover Image` should be prepared in a 9:4 ratio and saved as a GIF, JPEG, JPG, PNG, or SVG.

Once you hit `Save and Continue` your Collection will be created and you'll be taken to the Collection landing page, denoted by two sidebar items: `General` and `Resources`.

The `General` sidebar allows you to modify the `Title`, `Description`, and `Cover Image`. The `Resources` sidebar, discussed further in the following section, will be the means by which you add different Resources to the Collection.

### Adding Resources to a Collection

To add a Resource to a Collection, select the Collection you wish to edit from the list displayed from the `Collections` sidebar, and then select `Resources` from the new sidebar that appears.

Here you will be shown a list of all Resources associated with a Project. If no Resources have been added, refer to the Adding Resources section before proceeding.

Next to each available Resource there will be a slider. Toggling a Resource's slider to the right (so that green is showing on the slide) adds that Resource to the Collection.

To review all the Resources you've added to the Collection, click `Show Collection Only` next to the `Resources` heading above the search bar. This will allow you to remove items from the Collection without having to parse through all the available Resources at once.

You can also use the search bar to set parameters—name, tag, kind—as a means to refine the list of available Resources down to a smaller set you may want to toggle in or out of the Collection.

## Activity

The Activity section of the Project page allows users to selectively review and remove events that are displayed as tiles on the Recent Activity blade on the Project's frontend homepage. Events are created when new Texts and Resources are added and when Manifold pulls in Tweets.

Users can search for events and filter results by the kinds of activity: `Text Added`, `Project Created`.

To remove an event from appearing in the frontend, simply click on the red trashcan icon in the lower right of the event's card.

:::note
See the [Social Integrations section](../backend/projects.md#scoial-integrations) for notes on how to have Manifold fetch Tweets for display in the Activity blade.
:::

## Metatdata

The `Metadata` panel on the Project page provides a means to input metadata that is applicable to the Project as whole. Use the `Text` or `Resource` sidebar menus to adjust metadata for those components, respectively.

## Social Integrations

### Twitter Queries
Every hour Manifold will fetch up to 60 tweets for each of a Project's Twitter Queries.

A Twitter Query is composed of the following characteristics:
- **Query**. A string of parameters as specified in the Twitter search operators.
- **Results Type**. The types of tweets to return.  Allowed types are "most recent" and "most popular".
- **Active**. Specifies whether Manifold should fetch tweets for the Query.  Manifold will skip the query if `active` is set to `false`.

#### Managing Queries
Twitter Query details are accessed from the drawer, which opens when a query is clicked in the Twitter Queries section.

##### Fetching Tweets
To fetch a Twitter Query's tweets immediately, click the `Fetch Tweets` button beside the green check icon under the Query's header.  If successful, the drawer will close and you should see the query's event count increase.

##### Deleting a Query
To delete a Twitter Query, click the `Delete Query` button beside the red trashcan icon under the Query's header.  You will receive a warning asking you to confirm you want to delete this particular Query. Deleting a Query permanently removes them from the system along with any associated tweet events.

## Exporting and Preserving

### Overview

From this view, publishers can export an individual Manifold Project to a preservation archive or a general digital repository.

Before a Project can be exported, the pathway between Manifold and the target archive first needs to be configured. Instructions on how to establish this connection are described in the Records section.

:::note
Only users with Administrator or Editor credentials are able to export Projects. When Project Creators or Marketeers access the backend, the `Export` menu will not be visible to them.
:::

When first landing on this page, if no targets have been preconfigured on your instance, Manifold will prompt you to create one. If there are export targets already saved, Manifold will direct you to select one from the dropdown field labeled `New Project Export`.

Once the export target has been selected, click `Export Project` to begin the process of transferring the Project to the repository. When it has completed, the export will be listed on this screen with a `Success` badge beside it.

A Project can be exported multiple times. This page will list each time it has been exported with information on where it was directed along with the size of the package. Publishers can download directly from this view the most recent export package to review its form and content.

:::note
Because a copy of the most recent export package is retained on your instance, that package counts against your server space.
:::

### Export Details

During the export process, all of a Project's Texts are transformed into individual EPUB files and collected with the Project's Resources and metadata. Presently, the sum of those materials are then gathered into a ZIP archive that is structured according to the BagIt specification. In the future, Manifold may export according to alternative strategies or specifications.

It is not possible to export distinct components of a Project. The feature as it is presently crafted only allows a publisher to export the contents of a Project as an interrelated whole.

### What's Included in the Export?

- All of a Project's Texts (converted to the EPUB format)
- All of a Project's Resources
- Metadata for the overall Manifold Project, each individual Resource, and for each Text
  - Metadata for Texts is saved directly into the the distinct EPUB packages
- General inventory files specific to the Bagit specification

### What's Not Included?

- Annotations
- Comments
- Highlights
- Content blocks and descriptive information contained within them
- Indication of where Resources were placed in Texts
- Associations with reading groups or Project Collections

:::note
The export will function as described regardless of whether or not the publisher has chosen to Enable EPUB files to be produced for individual Texts. That feature has no bearing on this one.
:::

### Troubleshooting

Once an export has triggered, the screen *will not* automatically update. To determine if a export has been successful or not, manually refresh the window. The export speed depends on many factors; the larger the Project, the longer the time to complete the process.

If an export fails, contact your local IT agents to authenticate against the target FTP host. Performing standard network debugging protocols to ensure Manifold can access the server will be the best first steps to take in such a case.

## Log

This menu provides a list of changes to a Project's fields and Resources, including the nature of the change, who made it (with a link to their User account), and the date on which the change was made.

If questions arise about how a Project reached it's current state, especially for Projects that are being managed by multiple users, this menu will be a useful in reviewing it's history and dialogging with those who played an active role in shaping it.

:::note
To access to this screen you must have permissions to modify the Project in question.
:::