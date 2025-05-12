---
id: reading_manifold
title: Reading on Manifold
sidebar_label: Reading on Manifold
---

import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
The features described in this section appear in Manifold’s Reader, which opens when you select a Text from a Project landing page to read.

Unless a project has been configured to restrict access, any user can access the Manifold Reader. However, users who want to engage with a text using highlighting and annotating features, will first need to create a [Manifold Account](../using/your_account.md).
:::

## Navigating Texts

When you open a text in the Manifold reader, you can read through from start to finish or explore the material using different navigation options in the reader menu bar:

### Menu

You can use the Menu dropdown to return to the Project homepage, access the instance’s full library of Projects, or see those Projects you are following.

### Contents

The top Contents button will drop down the Text’s table of contents for review, if one has been created for the Text. Selecting the Contents button again will close the menu, allowing readers to review the contents without losing their place in the Text.

:::note Where Do Contents Entries Come From?
The Contents menu is populated from the`toc.ncx` or `tox.xhtml` files in an EPUB (versions 2 and 3, respectively). For all other formats (Google Doc, HTML, Markdown, and Word) that are ingested using the manifest strategy, the dropdown will be structured according to the associated [YAML file](../walkthroughs/manifest.md).

The internal heading structure of Texts that are ingested individually or authored in the Manifold backend will be used to populate the Contents dropdown.

Backend users can modify the makeup and order of this dropdown using the [Table of Contents sidebar](../backend/texts.md#table-of-contents) in a text’s detail record.
:::

### Notes

The Notes menu, designated by a notepad icon in the top menu, displays a list of all the Annotations you have saved to a Text, along with the Reading Group with which they are associated and the number of Comments they have garnered. These listings only show a snippet of your full Annotation. When you select individual Annotation entries from the Notes list, you will be taken directly to the section of text where you saved that particular Annotation with the Annotation drawer open and focused on the Annotation.

You can filter this list by Reading Group using the dropdown so labeled. The **Reading Groups** dropdown contains two default listings along with listings for any other Reading Groups of which you are a member.

The two default options are **My Notes** and **My Notes on Prior Versions**. Both options display all of your Annotations across all the Reading Groups in which you are a member. The difference between the two is that the **My Notes** options displays your Annotations that you’ve saved to the current, live version of the text. When **My Notes on Prior Versions** is selected, you will see any Annotations you saved to earlier iterations of the text that have since been replaced. When you select the name of any other Reading Group of which you are a part, you will only see the Annotations you saved to that group for the current, live version of the text.

The Notes menu also includes a button labeled **See All**. When selected, the listings showing in the menu will open in a new modal displaying the entirety of your Annotations, instead of the brief snippets provided in the default menu view. This modal view also includes a dropdown to filter by text section, so you can narrow your results to a specific portion of the text.

:::note What about Comments?
Reader Comments are not collected in this dropdown, whether they are responses to another reader’s Annotation or to a Comment thread grown around a Resource.
:::

### Search

The magnifying glass icon opens a search bar that allows you to enter a word or phrase that can be sought out within the current Chapter, Text, or Project. A Chapter in this context would be the section of text currently on display in your browser, the Text would be the larger work to which that section is a part, and Project correlates to all the Texts and Resources contained in the Project, including public Annotations.

Every search bar in the Manifold application supports phrasal searches and negations.

:::note Are your searches not showing results you’d expect?
Projects in Draft mode are *not* indexed by Manifold’s search engine. As such any searches performed on a Draft project won't return any results.
:::

You can search for specific phrases enclosed in quotation marks to look for exact matches in runs of text (e.g., “fear is the mind killer”).

It is also possible to combine the quotation-mark operators with negations: you can append a minus sign before elements and phrases you wish to omit from search results (e.g., -negate -this keep that or -“no to all of this”).

In practice this means it’s possible to search for “fear is” -“fear itself” to get results from Frank Herbert’s Dune (“fear is the mind-killer”) but not Roosevelt’s speech.

Search results are listed in a single, scrollable modal. Each listing can be selected to investigate the result in the reader or be added to a reading group using the collection button in the show of a star.

:::tip
Quoting a phrase will still apply stemming, thus Manifold takes into account misspellings, ignores cases, etc.

When negations are employed, they follow the NOR paradigm instead of NAND. If a search includes -apples -bananas Manifold will exclude results that mention apples or bananas instead of excluding results that only include both apples and bananas.
:::

## Reader Viewing Options

There are two options in the top menu bar to adjust how content is presented to you: an eye icon denoting the Visibility menu, and a capital and lowercase `A` for the Appearance menu.

### Visibility Menu

The eye icon opens the Visibility menu and allows you to selectively reveal or hide Annotations, Highlights, Resources, and Reading Group engagements, using the provided checkboxes. The menu also has options to show or hide all such engagements.

The checkboxes are grouped into three categories: Annotations, Resources, and Reading Groups.

Within the Annotations group, you have three options: `Yours`, `Others`, and `Your Highlights`. Thus if were to select `Yours` but not `Others`, you would see only your Annotations on the screen and not anyone elses.

The Resources category only has one option: `Show all`. This checkbox is effectively a toggle to either show Resources that have been placed in a text or to hide them. While Resources can be added to Reading Groups, their placement in the Manifold reader is independent of those associations and entirely up to the discretion of whomever is managing the project and text in the backend. This option allows you to explore placed resources in the text or not.

The Reading Groups section includes three default options: `Show all`, `My Private Annotations`, and `My Public Annotations`. In addition to those, the system will also list in this space the name of any other Reading Groups you have joined. The options in this section work in conjunction with those in the Annotations section. Thus you could select one or more Reading Groups here and limit what you see of those groups to just your Annotations by only having `Yours` selected under Annotations.

:::note A Word on Highlights
Beginning with version 9, highlights do not display by default in the Manifold reader, and it is now no longer possible to see highlights that other users have added to a text. Highlighting is now user-specific.
:::

### Appearance Menu

The appearance menu, denoted by the icon showing a capital and lowercase letter `A`, provides formatting options to adjust how the text appears in the reader. You may choose the typeface or adjust the text size under the Font heading by selecting either `Serif` or `Sans-serif` or by using the respective increase or decrease size buttons, appearing as plus or minus signs beside the name of the selected typeface.

Under the color scheme heading you can choose either light or dark mode for the reader. In dark mode, the reader swaps the color of the text and background, so that the background is dark and text is white, with the colors of highlights and Annotations adjusting to account of needed contrast.

In the Margins sections of the menu you can increase or decrease the size of the margins beside the text using the appropriate button.

:::note What about Custom Fonts?
Manifold does not support custom fonts. When an Adobe Typekit account is associated with an instance, Manifold will display text in the reader using the [Freight Text Pro font](https://fonts.adobe.com/fonts/freight-text). When Typekit isn’t associated with an instance, the system will instead display text using the [Aleo font](https://fonts.google.com/specimen/Aleo). Backend users can add a Typekit account to their instance as described in the [Theme settings section](../administering/configuring/theme_settings.md#typekit-id).
:::

## Engaging with Texts

After you log into your Manifold account, you will have opportunities to interact with texts in the Manifold reader. These opportunities display in a pop-up menu when you select text with your mouse or keyboard.

:::note Selecting Text with your Keyboard
To select text in the Manifold Reader with your keyboard you first need to enable Caret Browsing. In most browsers the **F7** key enables/disables Caret Browsing.
:::

Once you select the text you wish to engage with, a pop-up menu will appear below your selection with three (potentially four) options: **Share**, **Annotation**, **Resource**, and **Highlight**. The **Resource** option will only appear for those who have the ability to edit the Project in the backend. Each of these options are detailed in the following sections.


### Sharing and Citing Texts

Selecting **Share** from the pop-up menu presents three new options in the menu: **Cite**, **External App**, and **Copy URL**.

When you select **Cite**, Manifold prepares a reference for the Text you are viewing in accordance with APA, MLA, or Chicago styles that you can use in your own writing. Selecting the **Copy** button will save the citation to your device’s memory so you can paste it into whichever app you are using for that purpose.

This option is dependent on how much metadata has been included in the backend by whomever is managing the project. If certain metadata is missing from a Text, the Cite option will not appear. Alternatively, project editors have the ability to manually override the auto-generated citation in favor of something bespoke. In such cases, only the editor-suggested citation will appear in this space.

:::info Needed Citation Metadata
For the **Cite** option to appear, the project editor must include in the Text’s metadata the [Title](../backend/metadata.md), [Author](../backend/metadata.md), [Publisher](../backend/metadata.md), and [Publication Date](../backend/metadata.md). If any one of those fields is left blank—or if there is no editor-suggested citation present—readers will not see **Cite** as an option when trying to **Share** a Text. It is also important to note that the more metadata the editor provides, the better the citation will be.

Backend users, to see which metadata fields are available for Texts, see the [Metadata](../backend/metadata.md) section, and to enter/adjust metadata for a Text, see [Texts](../backend/texts.md#metadata).
:::

The **External App** option leverages your operating system’s sharing widget to furnish a list of email, messaging, or note-taking apps for you to choose from. After you’ve selected the app you wish to use, Manifold will paste to that app a URL that links to the specific passage of text you’ve selected.

The last option, **Copy URL**, is very similar to the previous one, **External App**. Instead of opening a sharing widget, however, the system simply copies the URL of the selected passage to your device’s clipboard, allowing you to manually paste it into whichever app you would like.

:::note Sharing Link Functionality
Where supported, the share link associated with the **External App** and **Copy URL** options will focus the browser view on the passage you selected and likewise highlight the passage in question. If your browser does not support this feature, the link will simply direct you to that section of the text generally.
:::

### Placing Resources

If you are logged in with an account that has backend access *and* permissions to adjust the Project in question, when you highlight a passage of text in the Reader, the second option available in the pop-up menu that appears is **Resource**. This function allows you to associate any Resources (or Resource Collections) that have already been loaded into the Project’s Resource library with specific passages of text. This does not embed a media Resource into the text so much as layer the Resource onto the text.

When you click **Resource**, a drawer will open from the right allowing you to select from any Resource file that has already been uploaded to that Project. When you select your Resource (or Resource Collection) a gray cube will be placed at the end of your cursor selection and a thumbnail of the Resource will appear in the left margin. When you hover over either they will turn a shade of green, and when selected a modal will overlay the text previewing the Resource or allowing you to interact with it, if it is of a kind playable in the browser.

:::tip How do I add a Resource to a Project?
For details on how to load Resources into a Project, see the [Resource](../backend/resource.md) section. Your account will need to be able to access the Manifold backend in order perform this operation. Users with the default Reader account do not have backend access by default. See the [User Roles](../backend/users.md) and [Editor Permissions](../backend/projects.md#editor-permissions) sections for more.
:::

### Annotations and Comments

Annotations are a means for readers to engage with Texts on Manifold. Annotations can be private and serve as one’s own marginalia, left publicly to foster conversation among other readers, or they can be associated with [Reading Groups](../using/reading_groups.md).

**Annotate** is the third option in the pop-up that appears when you select a passage of text in the Reader. When you select this option, a drawer will open from the right displaying the passage you selected along with a space where you can compose an Annotation, which when saved will then be associated with that passage.

Each Annotation you make will be also be associated with a particular Reading Group. All Manifold accounts include default membership in two Reading Groups: **My Public Annotations** and **My Private Annotations**. Annotations associated with the **My Public Annotations** group are publicly available to all users who have verified their email address or who have been verified by an instance administrator. Annotations associated with **My Private Annotations** are only viewable to the reader who makes them.

:::note User Trust and Verification
For more about Manifold’s user trust model and the process of verifying an account’s email address, see our [Mitigating Spam](../administering/spam.md) and [Users](../backend/users.md) sections.
:::

Following the textbox where you compose your Annotation, there is a dropdown labeled **Reading Group**. That dropdown allows you to select which Reading Group you’d like to associate your Annotation—either the two default Reading Groups or any other Reading Groups you’ve created or joined.

Once you select **Save**, your Annotation will be attached to the selected text. Annotations appear as underlined text in the Reader. Annotations you save appear with blue underlining; annotations that others have left appear with green underlining. In situations where an author annotates their own text, those annotations will appear with red underlining. See the [Editor Permissions section](../backend/projects.md#editor-permissions) for more about designating a user as the author of a text.

:::tip Changing Reading Group Affiliation
Besides the **Reading Group** dropdown in the Annotation drawer, you can change the group you are committing your Annotation to directly from the text-selection pop-up menu. At the bottom of that pop-up there is a listing for **Current Group**. This displays the Group to which you are currently saving Annotations. Manifold persists your selected Group while you are logged in, whether you make the selection here or in the Annotation drawer. When select **Current Group** from the pop-menu, the menu will transform, showing you all the groups of which you are a member. Once you change your selection, you can then choose the **Back** button to return to main pop-up menu. Alternatively you can select the **Manage Groups** button to go to your [**My Reading Groups** page](../using/reading_groups.md).
:::

After an Annotation has been saved to a text, the annotated passage appears in the Reader with underlining. When selected, a drawer will open from the right displaying the annotated passage, the Annotation itself, and any associated Comments. Annotations and Comments in this drawer display the name of the person who wrote them, a timestamp, and options to either **Reply** to or **Report** them.

The **Reply** option is the means by which you can comment or respond to the original Annotation or other Comments that have already been saved. More about this process is discussed in the **Comments** section immediately below.

Selecting **Report** initiates the process by which you flag an Annotation or Comment as being inappropriate. This is also discussed in more depth below in the **Reporting Inappropriate Content** section.

For users who saved an Annotation or Comment, there will be two additional options: **Edit** and **Delete**. The Edit option allows the Annotation or Comment author the means to adjust the text they originally saved, and the **Delete** button provides them the option to remove that content from the system. These two additional options are also available to instance administrators for every Annotation and Comment.

#### Comments

Commenting is a related but distinct functionality from Annotating. Unlike Annotations, Comments refer to responses to Annotations. Comments can themselves be replied to, creating a nested-Comment thread, with each level visually indented from the one prior. Comment threads can nest up to four levels. After the fourth level, responses to Comments aren’t visually distinct, but replies are always possible, regardless of how deep a conversation may go.

Readers can comment on any user’s Annotations left to their **My Public Annotations** group as well as any Annotations left to Reading Groups of which they are a member. There is one exception: Comments are disabled in **Anonymous** groups. See the [Reading Group Type section](../using/reading_groups.md#reading-group-types) for more about privacy settings.

To initiate a Comment, select the **Reply** button associated with an existing Annotation or Comment and click the **Post** button to save it. After your Comment is saved, you can edit it by selecting the Annotation you annotated—either by navigating to it by finding the passage in the Reader or by selecting from the Notes menu dropdown—and selecting the **Edit** button.

Comments can also be applied to Project Resources. See the [Resources section](../using/manifold_projects.md#resources) to learn more about how Comments function in the Resource detail view.

:::note Rich Text Options?
Annotations and Comments are displayed and can only be composed in plain text. Currently there are no means to use bold, italic, or other formatting options like lists or links in the Annotation drawer.
:::

### Highlighting

The **Highlight** option is the final option in the Reader pop-up menu. When selected it will add blue highlighting to the passage of text you selected.

If you select the highlighted passage again the pop-up menu will have the **Highlight** option selected with a note reminding you that you highlighted the passage. If you de-select **Highlight** in the pop-up menu, the highlight will be removed from the text.

Highlighting is user specific, meaning Highlights can only be seen by those who made them and users will not see highlights left by anyone else. Unlike Annotations, Highlights are *not* collected in the Notes menu dropdown, nor are they associated with any Reading Group, **My Public Annotations**, **My Private Annotations**, or otherwise.

## Reporting Inappropriate Content

Users can flag Annotations or Comments they feel are inappropriate or generally out of bounds and warrant review by an instance administrator. The vehicle for flagging Annotations and Comments is the **Report** button, which displays as an option below the text of the annotation or comment in the following views:

- in the Annotation drawer within the Manifold Reader (described throughout this section),
- in the See All view, accessible from the [Reader’s Notes dropdown menu](../using/reading_manifold.md#notes), and
- in a Reading Group’s [Notes and Comments tab](../using/reading_groups.md#creator-moderator-and-administrator-view).

When you select the **Report** button, a modal will with a text box and two buttons will open. The text box, labeled **Message**, is optional. For those so inclined, however, they can use this input to briefly describe for administrators why they flagged the Annotation or Comment. Following the text box there are two buttons: **Report** and **Cancel**.

When the **Report** button is selected, an email will be sent to every instance administrator with a direct link to the annotation or comment, along with any text from the **Message** field, noting that the material has been flagged for review.

Annotations and Comments can be flagged multiple times, and the number of times they are flagged will appear beside them in the frontend views named above as well as in backend views accessible to administrators.

Additionally, in the backend, flags appear to administrators with the usernames of those who reported the content and the time when the report was made.

If the **Cancel** button is selected in the modal, the users is returned back to the annotation view they were previously viewing.