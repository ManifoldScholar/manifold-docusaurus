---
id: reading_manifold
title: Reading on Manifold
sidebar_label: Reading on Manifold
---

## Navigating in Texts

Once you login, you have the opportunity to read Project Texts with features dedicated to your own work. When you open a Text, you can read through from start to finish or navigate around the Project or Text using the reader menu bar:

### Menu

You can use the Menu dropdown to return to the Project homepage, the full library of Projects, or see those Projects you are following.

### Contents

The top Contents button will drop down the Text’s table of contents for review, if one has been created for the Text. Selecting the Contents button again will close the menu, allowing readers to review the contents without losing their place in the Text.

:::info
The Contents menu is populated from the`toc.ncx` or `tox.xhtml` files in an EPUB (versions 2 and 3, respectively). For all other formats (Google Doc, HTML, Markdown, and Word) that are ingested using the manifest strategy, the dropdown will be structured according to the associated YAML file. Texts that are ingested individually using the document strategy will rely on the internal heading structure of the document to populate the Contents dropdown. For backend users, this dropdown can be modified using the [Table of Contents sidebar](../backend/texts.md#table-of-contents) in a text’s detail record.
:::

## Reader Settings

You can navigate and adjust the look of the reading interface itself. Beside the user account icon in the top right of the menu bar, you will see four icons: a notepad, an eye denoting visibility, Aa for appearance, and a magnifying glass for search:

### Notepad

The notepad displays a list of all the Highlights and Annotations you have made to a Text-along with the Reading Group which they are associated—in one place, allowing you to select them and be taken directly to the section of text in question. You have the option to view only Annotations or Highlights by checking the appropriate box.

If you select `See All` a new modal display will overlay your screen showing the entirety of your Annotations and Highlights, instead of the brief snippets provided in the dropdown.

:::note
Reader Comments are not collected in this dropdown, whether they are responses to another reader's Annotation or to a Comment thread grown around a Resource.
:::

### Visibility Menu

The eye icon opens the visibility menu and allows you to selectively reveal or hide Highlights, Annotations, Resources, and Reading Group engagements.

### Appearance

The Aa takes you to a menu of formatting options to adjust how the text appears in the reader. You may enlarge the text, choose serif or sans serif font, invert the color (black on white or white on black text), and increase or decrease the margins.

## Your Notes

When logged into Manifold, you have a number of note-taking options within a Text. When you use your cursor to select the text you wish to engage with, a menu will appear asking if you wish to Share, associate a Resource with, Annotate, or Highlight the selected passage.

When you select Share from the menu that appears, you have options for Cite, Twitter, and Facebook.

### Citations

When you select Cite, Manifold prepares a reference for the Text you are viewing in accordance with APA, MLA, or Chicago styles that you can use in your own writing. Selecting the `Copy` button will save the citation to your device’s memory so you can paste it into whichever app you are using for that purpose. If certain metadata is missing from a Text, the Cite option will not appear.

:::info
For the Cite option to appear, the publisher must include in the Text's metadata the [Title](../backend/metadata.md), [Author](../backend/metadata.md), [Publisher](../backend/metadata.md), and [Publication Date](../backend/metadata.md). If any one of those fields is left blank, readers will not see **Cite** as an option when trying to **Share** a Text. It is also important to note that the more metadata the publisher provides, the better the citation will be.

Backend users, to see which metadata fields are available for Texts, see the [Metadata](../backend/metadata.md) section, and to enter/adjust metadata for a Text, see [Texts](../backend/texts.md#metadata).
:::

#### Twitter

Selecting Twitter opens a pop-up window where you can compose a new Tweet. If you are already logged in to Twitter, it will automatically populate your tweet with a snippet of the text you selected and link back to the highlighted spot in the Text. Otherwise Manifold will fill the tweet template and offer an option to sign in or sign up on Twitter.

Included with your Tweet will be a card with a description of the Project with a thumbnail based off the Project’s hero image.

:::note
For the Twitter option to appear, the publisher needs to configure their instance to integrate with Twitter, as described in the [Integration Settings](../administering/configuring/integration_settings.md#facebook-and-twitter) section.
:::

#### Facebook

Selecting Facebook opens a pop-up window where you can compose a new Facebook post. If you are already logged in to your Facebook account, it will automatically populate your post with a card describing the project alongside a thumbnail based off the Project’s hero image.

:::note
For the Facebook option to appear, the publisher needs to configure their instance to integrate with Facebook, as described in the [Integration Settings](../administering/configuring/integration_settings.md#facebook-and-twitter) section.
:::

### Resources

If you are logged in with an account that has backend access and permissions to adjust the Project in question, when you highlight a passage of text in the reader, the second option available in the menu that appears is Resource. This function allows you to associate any Resource (or Resource Collection) that have already been loaded into the Project’s Resource library with specific passages of text. This does not embed the Resource into the text so much as lay them upon it.

When you click Resource, a drawer will open from the right allowing you to select from any Resource file that has already been uploaded to that Project. When you select your Resource (or Resource Collection) a gray cube will be placed at the end of your cursor selection and a thumbnail of the Resource will appear in the left margin. When you hover over either they will turn a shade of green, and when selected a modal will overlay the text previewing the Resource or allowing you to interact with it, if it is of a kind playable in the browser.

:::note
Backend users interested in loading Resources into a Project, see the [Resource](../backend/resource.md) section.
:::

### Annotations and Highlights

Annotations are a means for readers to engage with the Texts they read on Manifold. Annotations can be private and serve as one’s own marginalia, left publicly to foster conversation among other readers, or they can be associated with [Reading Groups](../using/reading_groups.md).

If you are logged into Manifold, when you Highlight text with your cursor a pop-up menu will appear providing you various options to interact with the text, along with the current Reading Group to which you will commit your interactions—i.e., Annotations or Highlights.

By default each reader’s account is associated with two Reading Groups: My Public Annotations and My Private Annotations. Interactions associated with the My Public Annotations group are public to everyone viewing the Text, regardless of whether they have created an account on the instance or not. Interactions associated with My Private Annotations are only viewable to the reader who makes them.

To change the group you are committing your Annotation or Highlight to, select the **Current Group** listing at the bottom of the pop-up. This will show you all the groups with which you are a member. By selecting a new group or by selecting the **Back** button you will return to the original pop-up menu, where you can choose to annotate or highlight the passage you selected.

If you select **Annotate**, a sliding drawer will open from the right where you can compose an Annotation that will be associated with the passage in question.

Once you select **Save**, your Annotation will be attached to that Project.

### Commenting

Commenting is a related but distinct functionality from Annotating. Unlike Annotations, Comments refer to responses to Annotations. Comments can themselves be replied to and are set off visually from those they are responding up through four levels of nesting. After the fourth level, responses to Comments aren’t visually distinct, but replies are always possible, regardless of how deep a conversation may go.

Readers can comment on any user’s Annotations left to their **My Public Annotations** group as well as any Annotations left to Reading Groups of which they are a member. The one exception—Comments are disabled in **Anonymous** groups. See the Group Privacy section for more.

Comments can also be applied to Project Resources. See the Resource section to learn more about how Comments function in the Resource space.


### Reporting Annotations and Comments

<!-- TK 

Email message: 

> The following annotation in [Text Name] has been flagged 1 time.
> 
> Just an annotation.
> With the latest flag, the user included this comment:
>
> Testing the flagging system.
-->

## Search

The magnifying glass icon opens a search bar that allows you to enter a word or phrase to search within the current Chapter, Text, or Project. Every search bar in the Manifold application supports phrasal searches and negations.

:::info
Projects in Draft mode are not indexed by Manifold's search engine, Elasticsearch. As such any searches performed on a Draft project won't return any results.
:::

You can search for specific phrases enclosed in quotation marks to look for exact matches in runs of text (e.g., "fear is the mind killer").

It is also possible to combine the quotation-mark operators with negations: you can append a minus sign before elements and phrases you wish to omit from search results (e.g., -negate -this keep that or -"no to all of this").

In practice this means it’s possible to search for "fear is" -"fear itself" to get results from Frank Herbert’s Dune (“fear is the mind-killer”) but not Roosevelt’s speech.

:::tip
Quoting a phrase will still apply stemming, thus Manifold takes into account misspellings, ignores cases, etc.

When negations are employed, they follow the NOR paradigm instead of NAND. If a search includes -apples -bananas Manifold will exclude results that mention apples or bananas instead of excluding results that only include both apples and bananas.
:::
