---
id: manifold_editor
title: Manifold Editor
sidebar_label: Manifold Editor
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
The Manifold Editor is accessed from the **Sections** sidebar found in the detail view of an individual text. From a project detail page in the backend, select **Texts** from the sidebar, then choose one of the texts listed in that view. Once a text has been selected, the sidebar will now include a listing for **Sections**. From there, select the edit button, denoted by a pencil icon beside the name of one of the text sections listed. That will open a modal window housing the Manifold Editor where adjustments to that selected section can take place.
:::

Beginning with version 8, Manifold allows you to edit text sections directly in the system using the Manifold Editor (based on the [Slate framework](https://docs.slatejs.org/)). With the Editor, instead of having to return to the original source files (like an EPUB or Word Document) you ingested, making changes to those files, and then re-ingesting them, you now have the opportunity to simply make adjustments to existing content right in the Manifold backend. Additionally, text sections can be authored entirely within the system. Manifold is dynamic enough to also allow texts to be created from a mix of sources: you can create a text with sections that are authored entirely in Manifold, coupled with parts that are ingested from existing source files.

:::note EPUB and Exports
Whatever edits or alterations you make to a text in the Manifold backend are incorporated in the EPUB the system creates during the [export process](../backend/projects.md#exports) or when a text has [**Enable EPUB**](../backend/texts.md) toggled on in the text’s menubar.
:::

## Interface Overview

The Manifold Editor is a modal window that includes one field, two sets of paired buttons to adjust viewing options, a text-editing pane, and four buttons to save or close out of your work. They are arranged in the following order from top to bottom:

- The **Close** button appears in the upper right of the screen and can be used to exit the Editor. If changes have been made to the text section, the system will first present a warning, asking the user to confirm they wish to proceed without first saving changes. The **Close** button alone does not save any changes. If a user closes the Editor without first saving their changes, those changes will be lost.
- The **Section Name** field is the name of the text section that displays in list and analytics views in the backend, as well as in the Reader’s title bar and in navigation links at the bottom of the Reader on the frontend. Changing the name of a text section here does ***not*** change its name in the Reader’s **Contents** dropdown or in a **Table of Contents** content block. See the [Table of Contents section](../backend/texts.md#table-of-contents) for more about changing the name of a text section in those spaces.
- Labeled **HTML Editor** and **Rich Text Editor**, these paired buttons switch the editor view between its two modes. By default the editor loads as a Rich Text Editor. In that configuration, the content of the text section displays with a WYSIWYG toolbar and the content in the editor renders according to any associated stylesheets listed in the Text’s [Styles sidebar](../backend/texts.md#styles). Alternatively, the **HTML Editor** button changes the editor view away from a rich-text experience to a plain-text code editor that reveals the section’s underlying HTML, which is the truest and most complete view of the content. In certain circumstances, content can only be edited in the HTML Editor. When this occurs a message will display in the Rich Text Editor encouraging you to switch to HTML mode to edit the content in question. Changes in one mode do not need to be saved before toggling to the other mode to view them; however, we strongly recommend saving often.
- By default the Editor displays in a dark theme to match the general aspect of the Manifold backend. The paired buttons labeled **Dark** and **Light** serve as a way for you to switch the editor between the default dark them and a light theme that shows dark text against a light background.
- The text-editing pane takes up the largest portion of the screen and is where you will perform the work of authoring or adjusting the content of a text section. The text-editing pane adjusts to account for which mode the user has selected (HTML Editor or Rich Text Editor) and is made up of the following components:
  - The Editor’s **Menubar** appears at the top of the editing pane in both the HTML and Rich Text editing modes. In Rich Text mode, the Menubar provides a number of style and formatting options that will be familiar to users of Microsoft Word and Google Docs. These options work by wrapping the text to which they are applied in HTML tags or by creating preformatted blocks of HTML content that can be previewed and adjusted in this space.
  
    The Menubar in the HTML Editor mode is significantly less involved, showing only two options (Undo and Redo) and a Styles button that reveals an aggregate view of all the styles (formatted as CSS) that are associated with the text section. Styles cannot be adjusted from this view. This option is meant only to provide context. To add to or edit the styles associated with a text or a specific text sections, go to the [Styles sidebar](../backend/texts.md#styles).
  
  - The **Breadcrumbs Bar** is only available in the Rich Text view. The Breadcrumbs Bar appears immediately below the Menubar and displays a breadcrumb view of the styles associated with the content currently focused on in the editing pane. The elements listed in the Breadcrumbs Bar are selectable and allow you the means to adjust their placement in the document’s hierarchy. The bar also includes a button on the right that displays as an eye icon. When selected, all of the HTML elements in the editing pane are shown with their names and outlined with a dotted border, allowing you to better visualize the document structure and likewise adjust the placement of elements in the document hierarchy.
  - The **Editing Pane** displays the content of the text section in an editable window, where new text can be added and existing content adjusted. In Rich Text mode, the pane displays the content according to the stylesheets associated with the text, previewing how the content will look in the Manifold reader. The preview, however, is just that. Certain elements may look slightly different in the Manifold reader when the text section is saved. This is because the Editor does not preview or display inline styles—those being inline rendering instructions imparted via a `style` attribute in the HTML, for example,
    
    ```html
    <p style="text-align:center">...</p>
    <ol style="list-style-type: none;">...</ol>
    ```

    When the editor is in HTML mode, the Editing Pane displays all the section content in plain text. Whether the section was ingested from a source file (EPUB, Word or Google Document, e.g.) or authored in Manifold, it is stored in Manifold as HTML. That HTML is what is displayed and accessible for editing in this configuration. Likewise, adjustments made in the Rich Text mode appear here, translated into HTML. Because HTML is more feature rich than what is possible in the Rich Text view, you can add additional nuance to their content in this space, wether that be adding `id`s to elements or using different sorts of structures, like a definition list.

- The last elements in this view are three buttons: **Save**, **Save and Close**, and **Cancel**. The Save button saves your work and keeps the Editor open. Save and Close also saves your work but then closes the Editor, returning you to the **Sections** sidebar view, and **Cancel** clears any edits you made to the text section and then likewise closes the editor (after a prompt confirming your choice), returning you to the **Sections** sidebar view.

## Manifold Editor Fundamentals

Because the Manifold Editor is meant to handle content that can engage with most of the full range of HTML, there is some complexity with its workings that are not found in many other rich-text editors. Most of the time in a rich-text editor, like the ones found in Wordpress or Google Docs, different types of content stack on each other as blocks. Your text is either a body paragraph or a blockquote or a list, etc., and you can’t nest them in complex ways. When you change from one kind of formatting to another, it’s a simple toggle.

We’ve retained that kind of toggle functionality for the most common major block-level elements: paragraphs and headings. Indeed, it isn’t valid HTML to nest those—a `p` element can’t live within an `h2`, say—so they must function as toggles. But for other HTML elements, we require a nested structure, which allows us to do things like put an ordered list within a block quote. And that means having multiple controls (read: some additional complexity). In order to construct any arbitrary element nesting, we need to be able to wrap, unwrap, and altogether remove elements from just about anywhere in the document hierarchy.

This nesting is essential to understanding how things in the Editor work, and, while nuanced, it can be distilled briefly: the options in the Editor’s menubar wrap content in an HTML tag. That tag is exposed in the gray Breadcrumbs Bar (just under the menubar), which shows the element’s placement in the document hierarchy, much like a breadcrumb map. When a tag is selected from that Breadcrumbs Bar, the text to which it applies gets outlined in the main editing pane with a dotted border. That border includes an input box that shows the selected element’s name, id, and class, along with two buttons: one depicting an up arrow and the other a trashcan. The up arrow moves the selected element up one level in the hierarchy. The trashcan (or delete button) removes that element from the hierarchy, without deleting the associated text content when possible. In cases where deleting the element orphans the text rather than dropping it in a parent container, the text is removed as well.

On first read through this likely feels overwhelming. The following paragraphs in this section will provide additional context and expound on these concepts with practical examples to help dispel any confusion. Much of what you will see and work with in the Editor is going to seem familiar, and the functionality will likewise be very similar to how other rich text editors work. The things that are less familiar are those that allow you to create richer, more involved publications than you will be able to on most other systems. That functionality comes at the cost of a slightly more robust learning curve, but we believe it is very much worth the trade off.

:::danger The Manifold Editor does NOT autosave your work!
Before we move on, there is one point that we cannot stress enough: the Manifold Editor does not have an autosave function. If you close your browser or navigate away from the Editor without first saving your work, that work **will** be lost. There are no settings to toggle on for Manifold to save your work in progress. That functionality is simply not there. If your work is lost, it’s lost for good. Save often, and work carefully!
:::

## Rich Text Editor Mode

In Rich Text mode the Manifold Editor presents as a WYSIWYG editor, with a menubar displaying formatting options and a text box where you can author or edit existing text. Different from some other applications, the text displays in the Manifold Editor according to the rendering instructions defined by the stylesheets (CSS) that are saved to the text—and associated with the specific text section—in the [Styles sidebar](../backend/texts.md#styles).

If the text was ingested from a source file (EPUB, Manifest Ingest, Word Document, etc.), whatever stylesheet that was part of that source file was brought into the system as part of the ingest process and is now also being used to tell the Editor how to display content on the screen. Additionally, any [Global Ingestion Style](../administering/configuring/ingestion_settings.md) instructions saved in Manifold’s **Settings** menu are also being applied.

For texts that are freshly created in Manifold, only the Global Ingestion Styles are applied. In situations where a Manifold instance has no style rules defined in the Global Ingestion Styles space, Manifold will render content in the Editor using its own internal stylesheet, modeled after the generic stylesheets that ship with all browsers. These style rules will be functional but perfunctory.

Another difference to note from some other applications—block-level elements that are not referenced on the Menubar will only appear in the Editor display as previews. To edit the content of such elements, you will need to switch over to HTML mode. One example of this would be a [description list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl "MDN Web Document detail page for the description list element") (`<dl>`). Tables would be another: the Manifold Editor can preview tables, but the work of creating and editing them can only happen in HTML mode. See the Tables section below in the HTML Mode section below for more.

You will also notice some options that are available in other editors that are not obvious here—things like paragraph alignment or superscript and subscript or adding linked notes. The Manifold Editor is meant to work with content ranging from the simplest to the most complex, so it’s not that right-aligning a paragraph or superscripting characters or having note markers point to an endnotes section aren’t possible here, it’s just that the means to achieve those results is done differently. Namely, they are done in the HTML mode of the Editor. See the HTML Editor Mode section of this page later below for strategies and sample code patterns you can use to achieve some of the functionality we have been discussing here.

The Breadcrumb bar is also something that is likely new and different to this editor from others with which you may be familiar. This bar allows you to easily gage where an element exists within a documents structural hierarchy and adjust its placement therein. It also allows you to change or assign HTML classes to specific elements so that they can be targeted by CSS rules. At first glance, that may seem pat, but in practice these are elegant means to create rich and nuanced texts.

### Markdown Support

In Rich Text mode, the Manifold Editor accepts Markdown syntax for headings, numbered and bulleted lists, as well as for making existing text bold, italic, strikethrough, or formatted as inline code. The syntax and keyboard shortcuts for each are detailed in the following Menubar section.

### Menubar Options

Appearing atop the Editor, the Menubar offers the following formatting options in order from left to right across the screen. Options in the Menubar can be activated with your mouse or by tabbing to the bar and then using your arrow keys to move left and right and then toggle options with the up or down arrow buttons on your keyboard.

#### Undo and Redo

Depicted as left- and right-turning arrows, these buttons respectively undo your last operation or reimplement it.

You can implement these operation using the following keyboard shortcuts:

<Spec title="Undo/Redo Keyboard Shortcuts">

<Tabs
  groupId="keyboard-shortcut-undo"
  defaultValue="mac"
  values={[
    {label: 'Mac', value: 'mac'},
    {label: 'Windows', value: 'windows'},
  ]}>

<TabItem value="mac">

| Operation | Shortcut                  |
| :-------- | :------------------------ |
| Undo      | `Command` + `Z`           |
| Redo      | `Command` + `Shift` + `Z` |

</TabItem>

<TabItem value="windows">


| Operation | Shortcut        |
| :-------- | :-------------- |
| Undo      | `Control` + `Z` |
| Redo      | `Control` + `Y` |

</TabItem>

</Tabs>

</Spec>

#### Container Dropdown

The Container dropdown allows you to nest a text section’s block content inside HTML containers. Block content can be paragraphs or other existing containers. The options available here are not exhaustive; instead they represent common publishing container types. Some containers here are generic, like **Div** and **Section**, and others like **Block Quote** are meant for specific uses.

It is beyond the scope of this Manifold documentation to detail those uses here. However, all of the available options in the Editor’s Container dropdown are listed below with links to their respective entries in the Mozilla Developer Network’s Web Documentation. The MDN Web Docs detail each of the container’s attributes and specifications in approachable language. 

- [Div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) refers to the Content Division element and encloses content within `<div>` tags.
- [Header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) refers to the Header element and encloses content within `<header>` tags.
- [Footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) refers to the Footer element and encloses content within `<footer>` tags.
- [Section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) refers to the Generic Section element and encloses content within `<section>` tags.
- [Article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) refers to the Article Contents element and encloses content within `<article>` tags.
- [Block Quote](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) refers to the Block Quotation element and encloses content within `<blockquote>` tags.
- [Code Block](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre) refers to the Preformatted Text element and encloses content within `<pre>` tags.
- [Figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) refers to the Figure element and encloses content within `<figure>` tags.
- [Figcaption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) refers to the Figure Caption element and encloses content within `<figcaption>` tags.

When you select a Container option from the dropdown, Manifold will nest the base paragraph where your cursor is currently placed within that selection. For example, if your cursor is in a standard paragraph `<p>` and you select **Section** from the dropdown, then that body paragraph will now be contained within a `<section>` container. Such hierarchical adjustments will be represented in the Breadcrumbs Bar. In this example that Breadcrumbs Bar would read as `section > p`, and in HTML mode, the Editor would display the elements with this structure:

```html
<section>
  <p>...</p>
</section>
```

If you keep your cursor in that same paragraph and now select **Div**, then that paragraph will now be nested (or wrapped) in a `<div>` container that is itself wrapped in the earlier `<section>` container. The Breadcrumbs Bar would now show as `section > div > p`, and in HTML mode the Editor would arrange the elements as such:

```html
<section>
  <div>
    <p>...</p>
  </div>
</section>
```

When your cursor is in a selection that is part of a container, this dropdown will appear pink and show the name of the most nested container. Likewise, when all of the section’s HTML elements are set to display, when the reveal elements option (shown as an eyeball icon) in the Breadcrumbs Bar is activated, each container will appear in the Editor within a pink border.

See the Breadcrumbs Bar section below for more on how to move these container structures up or down within the document’s hierarchy.

#### Paragraph Style Dropdown

The Paragraph dropdown functions as a toggle, where you can change an existing paragraph or heading into another kind of paragraph of heading. The options range from a standard body paragraph (`<p>`) through each of the six valid HTML heading levels (`<h1>`–`<h6>`).

Selections can be made with the dropdown using your mouse or keyboard, or you can use one of the keyboard shortcuts described in the table at the end of this section.

For example, if you want to change from a **Heading 2** to a **Heading 3**, move the cursor to the line where the heading you want to change lives in the Editor. Now you can tab to the Menubar, arrow over to the Paragraph dropdown, and then use the up and down arrows to select **Heading 3**. Or, with your cursor on the intended paragraph in the Editor, you can use the keyboard shortcut `Command` + `Option` + `3` on a Mac or `Control` + `Shift` + `3` on a PC to change the paragraph to a **Heading 3**.

See the Breadcrumb Bar section below to learn how to add HTML classes to headings and paragraphs.

<Spec title="Keyboard Shortcuts for the Paragraph Dropdown">

<Tabs
  groupId="keyboard-shortcut-paragraphs"
  defaultValue="mac"
  values={[
    {label: 'Mac', value: 'mac'},
    {label: 'Windows', value: 'windows'},
    {label: 'Markdown', value: 'markdown'},
  ]}>

<TabItem value="mac">

| Dropdown Option | Shortcut                   | HTML Output    |
| :-------------- | :------------------------- | -------------- |
| Paragraph       | `Command` + `Option` + `0` | `<p>...</p>`   |
| Heading 1       | `Command` + `Option` + `1` | `<h1>...</h1>` |
| Heading 2       | `Command` + `Option` + `2` | `<h2>...</h2>` |
| Heading 3       | `Command` + `Option` + `3` | `<h3>...</h3>` |
| Heading 4       | `Command` + `Option` + `4` | `<h4>...</h4>` |
| Heading 5       | `Command` + `Option` + `5` | `<h5>...</h5>` |
| Heading 6       | `Command` + `Option` + `6` | `<h6>...</h6>` |


</TabItem>

<TabItem value="windows">

| Dropdown Option | Shortcut                  | HTML Output    |
| :-------------- | :------------------------ | -------------- |
| Paragraph       | `Control` + `Shift` + `0` | `<p>...</p>`   |
| Heading 1       | `Control` + `Shift` + `1` | `<h1>...</h1>` |
| Heading 2       | `Control` + `Shift` + `2` | `<h2>...</h2>` |
| Heading 3       | `Control` + `Shift` + `3` | `<h3>...</h3>` |
| Heading 4       | `Control` + `Shift` + `4` | `<h4>...</h4>` |
| Heading 5       | `Control` + `Shift` + `5` | `<h5>...</h5>` |
| Heading 6       | `Control` + `Shift` + `6` | `<h6>...</h6>` |

</TabItem>

<TabItem value="markdown">

:::tip Wait—these aren’t shortcuts!
The following key combinations are not shortcuts so much as Markdown syntax. If you want to create a new level-3 Heading, for example, first create a new paragraph (`Enter` or `Return`) and then type three hash marks followed by a space and the text of the heading: `### This is the Heading`. The Editor will interpret and render that content as a third level heading. You cannot use these syntax expressions to transform from one paragraph/heading type to another.
:::

| Dropdown Option | Syntax              | HTML Output    |
| :-------------- | :------------------ | -------------- |
| Paragraph       | `Enter` or `Return` | `<p>...</p>`   |
| Heading 1       | `#` + `Space`       | `<h1>...</h1>` |
| Heading 2       | `##` + `Space`      | `<h2>...</h2>` |
| Heading 3       | `###` + `Space`     | `<h3>...</h3>` |
| Heading 4       | `####` + `Space`    | `<h4>...</h4>` |
| Heading 5       | `#####` + `Space`   | `<h5>...</h5>` |
| Heading 6       | `######` + `Space`  | `<h6>...</h6>` |

</TabItem>

</Tabs>

</Spec>

#### Span

The **Span** option is a way to wrap a selection of content living within a block element in a generic container for styling or grouping purposes. For example, you may want figure identifiers of proper names to stand out stylistically from the surrounding caption or biography in which those elements live, or you may want to differentiate a run of text that is written in a different language from the main body text. In such cases the **Span** option here allows you to wrap those individual words or short phrases that appear within a paragraph (i.e., a block element) in **span** tags that you can specifically target. In HTML the result looks like this:

```html
<p>Lorem ipsum <span>dolor</span> sit amet . . .</p>
```

To enclose content in **span** tags using this option, select the words or phrases in the Editor that you want place within the span. Once done, select the **Span** option in the menubar with either your keyboard or mouse. The **Span** button will now appear blue, and if you set the HTML elements to be shown in the Editor, using the reveal option in the Breadcrumbs Bar (depicted as an eyeball icon), each span will appear in the Editor outlined with a blue border.

Using the Breadcrumbs bar you can also add classes to **spans** to achieve the effects mentioned earlier. You could create a class called `authorName` and `lang` for spans that would appear as such in the HTML:

```html
<span class="authorName">...</span>
<span class="lang">...</span>
```

Now you could target those classes with CSS rules in an associated stylesheet to achieve specific rendering effects ranging from front weight and size to color, etc. This would allow you to later adjust those rendering decisions in one go. This approach is also more in keeping with accessibility standards where semantic markup like `<em>` isn’t conflated for content merely meant to appear in italic text.

Additionally, advanced users more comfortable working with HTML could use the **Span** option here as a first step toward later adding specific language attributes to individual words and phrases to better distinguish them for the browser and assistive technology, e.g.:

```html
<span class="lang" lang="ja" xml:lang="ja">ゴジラマイナスワン</span>
<span class="lang" lang="ja-Latn" xml:lang="ja-Latn">Gojira Mainasu Wan</span>
```
#### Text Formatting Options

The Menubar has five different options with which to add semantic markup to words or short runs of text. To apply any of the following, simply select the text in the Editor and then activate one of the following buttons. Alternatively you can also use the keyboard shortcuts or Markdown syntax associated with each operation as defined in the following table and also noted in the system as a “toast” or tooltip.

- Bold. Shown as a button labeled with the letter *B*, the **Bold** button corresponds to the HTML `<strong>` element and is meant to convey importance, distinguishing urgent, imperative statements from the surrounding text, for example:

  > If your next-door neighbor is Jerry Dandrige, **never invite him over for dinner!**

  If you merely want to draw a reader’s attention to a word or passage, better to use a **Span** (described above) that is associated with class that has a with CSS `font-weight` property that gives it a bold appearance (e.g., `<span class="term">...</span>`).

- Italic. Depicted as a button with an italic *I*, the **Italics** button corresponds to the HTML emphasis element, `<em>`. While this element typically renders in italics, it is meant to convey where vocal stress should be placed in a sentence:
  
  > Look at me, I’m Chandler, could I *be* wearing any more clothes?

  In situations where you want to indicate a change in voice or tone or call out scientific terms or names of vessels, it is better to use an `<i>` tag, via the Editor’s Code mode, for the [Idiomatic Text element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i).

- Underline. Underlining as a semantic structure is not something typically seen in materials written for the web. Instead underlined passages are usually achieved by adding a CSS `text-decoration` property to an element you want to have appear with an underline. The button here showing a letter *U* is instead the Unarticulated Annotation element. While it renders whatever selection with an underline, it is meant to be used to call our words that are misspelled or as a means to designate a proper-name mark to indicate proper names in Chinese text. If you merely want to have content render with an underline, adjust the CSS for that element in the [Styles sidebar](../backend/texts.md#styles) to include as [`text-decoration:underline;` property](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
- Strikethrough. Shown on the toolbar as a button with a letter *S* with a horizontal line bisecting it, the **Strikethrough** button renders selected text as being struck out. This is intended to designate text that is no longer relevant or accurate.
- Code. The Incline Code Element button appears in the Menubar as two angle brackets enclosing a slash. When applied to a run of text, that text will render in a monospace font to visually indicate that the text is a snippet of computer code. This is an inline version of the **Code Block** option available from the **Container** dropdown. While a **Code Block** is set off from the body as a sort of quote of computer code, the inline **Code** option here is meant to be used for code that appears within a sentence.

The following table, labeled “Text Formatting Options” summarizes this section and provides links to the Mozilla Developer Network documentation for each of these elements to provide additional context and considerations when choose how to format your content.

<Spec title="Text Formatting Options">

<Tabs
  groupId="text-formatting-options"
  defaultValue="mac"
  values={[
    {label: 'Mac', value: 'mac'},
    {label: 'Windows', value: 'windows'},
    {label: 'Markdown', value: 'markdown'},
  ]}>

<TabItem value="mac">

| Option        | HTML Output            | Shortcut                  | HTML Specification                                                                              |
| :------------ | ---------------------- | ------------------------- | ----------------------------------------------------------------------------------------------- |
| Bold          | `<strong>...</strong>` | `Command` + `B`           | [Strong Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)              |
| Italic        | `<em>...</em>`         | `Command` + `I`           | [Emphasis Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)                |
| Underline     | `<u>...</u>`           | `Command` + `U`           | [Unarticulated Annotation Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u) |
| Strikethrough | `<s>...</s>`           | `Command` + `Shift` + `S` | [Strikethrough](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)                    |
| Code          | `<code>...</code>`     | `Command` + `E`           | [Inline Code Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)           |

</TabItem>

<TabItem value="windows">

| Option        | HTML Output            | Shortcut                  | HTML Specification                                                                              |
| :------------ | ---------------------- | ------------------------- | ----------------------------------------------------------------------------------------------- |
| Bold          | `<strong>...</strong>` | `Control` + `B`           | [Strong Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)              |
| Italic        | `<em>...</em>`         | `Control` + `I`           | [Emphasis Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)                |
| Underline     | `<u>...</u>`           | `Control` + `U`           | [Unarticulated Annotation Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u) |
| Strikethrough | `<s>...</s>`           | `Control` + `Shift` + `S` | [Strikethrough](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)                    |
| Code          | `<code>...</code>`     | `Control` + `E`           | [Inline Code Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)           |

</TabItem>

<TabItem value="markdown">

:::note
There is no Markdown syntax for Underline.
:::

<table>
  <thead>
    <tr>
        <th>Option</th>
        <th>HTML Output</th>
        <th>Syntax</th>
        <th>HTML Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Bold</td>
        <td><code>&lt;strong&gt;...&lt;/strong&gt;</code></td>
        <td><code>`**`</code>[text]<code>`**`</code></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong">Strong Element</a></td>
    </tr>
    <tr>
        <td>Italic</td>
        <td><code>&lt;em&gt;...&lt;/em&gt;</code></td>
        <td><code>`*`</code>[text]<code>`*`</code></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em">Emphasis Element</a></td>
    </tr>
    <tr>
        <td>Strikethrough</td>
        <td><code>&lt;s&gt;...&lt;/s&gt;</code></td>
        <td><code>`~`</code>[text]<code>`~`</code></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s">Strikethrough</a></td>
    </tr>
    <tr>
        <td>Code</td>
        <td><code>&lt;code&gt;...&lt;/code&gt;</code></td>
        <td><code>`*`</code>[text]<code>`*`</code></td>
        <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code">Inline Code Element</a></td>
    </tr>
  </tbody>
</table>

</TabItem>

</Tabs>

</Spec>

#### Numbered and Bulleted Lists

You can create or transition existing content into lists using the Menubar. Toward the right of the bar there are two buttons, one showing horizontal lines paired with the numbers `1` and `2`, the other showing horizontal lines paired with two circular bullet characters. Respectively these represent the buttons used to created a **Numbered** or **Bulleted** list.

To make a list using either of these options, first create a new paragraph in the Editor using your `Enter` or `Return` key. Now select either the **Numbered** or **Bulleted** list button. The paragraph you just created is now of the list type you selected. The paragraph will also now appear in the editor with either a number or bullet in the left margin.

Alternatively, you can use Markdown syntax to create a list. After creating a new paragraph, begin the line with either a number one followed by a period and a space (`1.` + `Space`) or a hyphen followed by a space (`-` + `Space`), and the Editor will transform the line into the first element of a Numbered or Bulleted list.

If you already have a series of paragraphs that need to be made into a list, highlight them with your keyboard or mouse and then select the appropriate list button from the Menubar, and the Editor will transform them into the appropriate list structure. In this way you can also toggle from one kind of list to another, from a numbered to bulleted list, for example.

If you have entries that need to be nested (or indented) select them in the Editor with your mouse or keyboard and then hit the `Tab` key. This will indent the selected list elements one level. You can indent a list element up to ten levels. Likewise you can move a list element back up a level (or “un-indent” it) by selecting it in the Editor and hitting `Shift` and `Tab` together.

The following tabbed list provides important information and context about both Numbered and Bulleted lists. These elements can offer a surprising amount of nuance and complexity.

<Spec title="List Formatting Options">

<Tabs
  groupId="list-options"
  defaultValue="nlist"
  values={[
    {label: 'Numbered List', value: 'nlist'},
    {label: 'Bulleted List', value: 'blist'},
  ]}>

<TabItem value="nlist">

The Numbered List button corresponds to the [HTML Ordered List Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol). While browsers default to displaying ordered lists as numbered lists, they need not be, and that is an option you can explore using CSS. Below are examples of how basic numbered lists are coded in HTML and how they will appear when the Editor is displaying in HTML mode.

```html title="Basic Numbered List HTML Structure"
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>...</li>
  <li>List item n</li>
</ol>
```

Both the `<ol>` and `<li>` elements can be associated with classes using the Breadcrumbs Bar, allowing for a great degree of control over how lists display in the Reader.

```html title="Basic Numbered List Nested HTML Structure"
<ol>
  <li>List item 1</li>
  <li>
    <ol>
      <li>Nested List item 1</li>
      <li>Nested List item 2</li>
    </ol>
  </li>
  <li>List item 2</li>
</ol>
```

The following Mac and Windows shortcuts allow you to create a new numbered list or, when your cursor has selected content in the editor, they will transform the existing selection into a numbered list. The Markdown syntax can be used at the start of a new line, which the Editor will automatically transform into a list element.

| System   | Shortcut / Syntax          |
| -------- | -------------------------- |
| Mac      | `Command` + `Option` + `7` |
| Windows  | `Control` + `Shift` + `7`  |
| Markdown | `1.` + `Space`             |

</TabItem>

<TabItem value="blist">

The Numbered List button corresponds to the [HTML Unordered List Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul). While browsers default to displaying unordered lists with bullets, they need not be, and that is an option you can explore using CSS. Below are examples of how basic unordered lists are coded in HTML and how they will appear when the Editor is displaying in HTML mode.

```html title="Basic Bulleted List HTML Structure"
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>...</li>
  <li>List item n</li>
</ul>
```

Both the `<ul>` and `<li>` elements can be associated with classes using the Breadcrumbs Bar, allowing for a great degree of control over how lists display in the Reader.

```html title="Basic Bulleted List Nested HTML Structure"
<ul>
  <li>List item 1</li>
  <li>
    <ul>
      <li>Nested List item 1</li>
      <li>Nested List item 2</li>
    </ul>
  </li>
  <li>List item 2</li>
</ul>
```

The following Mac and Windows shortcuts allow you to create a new bulleted list or, when your cursor has selected content in the editor, they will transform the existing selection into a bulleted list. The Markdown syntax can be used at the start of a new line, which the Editor will automatically transform into a list element.

| System   | Shortcut / Syntax          |
| -------- | -------------------------- |
| Mac      | `Command` + `Option` + `8` |
| Windows  | `Control` + `Shift` + `8`  |
| Markdown | `-` + `Space`              |

</TabItem>

</Tabs>

</Spec>

:::tip Reminder
List elements will display in the reader according to the stylesheets you have associated with your text and text section. If things don’t appear as you suspect, checking the associated stylesheets should be your first step.

Additionally, Manifold does not render inline styles in the Editor. If you have, for example, `<ol style="list-style-type: none;">` in your text-section, the Editor will still display numbers beside the list elements. However, in the Manifold Reader, Manifold would treat the content as expected and honor the inline-style rule. It is only in the Editor view where it does not.
:::

#### Link

Displaying in the Menubar as a button with two entwined chain links, the link button allows you to format text as a hyperlink, directing users to other web content. That can be material hosted in your Manifold instance or elsewhere, as well as hosted files or email addresses.

To format a word or phrase as a hyperlink in the Manifold Editor, select it with your mouse or cursor and then select the link button from the Menubar or use one of the following keyboard shortcuts to bring up the Link modal. When the link modal opens, there will be two fields: **Text** and **URL**. The Text field will be pre-populated with the text you first selected. The URL field is the destination you want to send your readers when the click on the selected text. In most cases the value you paste in here will be the value of a webpage that you copy from the navigation bar in your browser.

In HTML, hyperlinks correspond to the Anchor element. See the MDN Web Documentation for a full rundown of the options available to the [Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). When the Editor is displaying in Code mode, links will appear as follows:

```html title="HTML Output for Links"
<a href="URL">Text</a>
```

Using the Link option in the Editor, you can create links to other text sections that are part of the same text (e.g., a link from a passage of text in chapter 1 to something in chapter 2). To do so, enter into the **URL** field here the [slug of the text section](../backend/texts.md#sections) to which you want to direct readers. If there are elements in the target text section that include their own HTML `id`, you can have the link point reader’s directly to that element by including the `id` after section’s slug. For example, in this example the target text-section’s slug is `chapter003` and there is a heading you want to take readers to that has an `id` value of `b-heading-001`. To link to that using this option you would fill in the **URL** field with this:


```html title="Sample URL Input Linking to Another Section/Element"
chapter003#b-heading-001
```

You can determine if a specific element has an `id` by toggling the Editor to HTML mode. An `id` will follow an elements opening tag as an attribute like this:

```html title="Sample ELement ID Placement"
<h2 class="bhead" id="b-heading-001">
```

With the **Link** option you can also create links to any [**Assets**](../backend/texts.md#assets) that are loaded in the system. To do so, copy the Asset’s URL and paste in here in the **URL** field. Each Asset URL in the system is going to be of this format:

```html title="Manifold Asset URL"
/api/proxy/ingestion_sources/{asset-id}
```

If the Asset can display in the browser it will; otherwise the browser will open a download button allowing the user to download the file to their own local machine.

<Spec title="Insert Link Shortcuts">

| System   | Shortcuts / Syntax                                                                       |
| -------- | ---------------------------------------------------------------------------------------- |
| Mac      | `Command` + `K`                                                                          |
| Windows  | `Control` + `K`                                                                          |
| Markdown | The Manifold Editor does not currently accept Markdown syntax for the creation of links. |

</Spec>

#### Image

The **Image** button displays in the Menubar as an icon with the sun shining over a mountain range, and is the means by which you can add an ***already-hosted image*** into the body of the text section as a block element. Selecting the Image button with either your mouse or keyboard or when you use one of the keyboard shortcuts noted below opens the Insert Image modal. That modal includes two fields that you can use to insert an image: **Image URL** and **Alt Text**.

The first field, **Image URL**, expects a URL that leads directly to an image file. That may be the image’s Manifold Asset URL or it can be a URL to an outside site or platform where the image is hosted. It is *not* possible to load an image file directly into this space. If the image file you want to add to your text section does not already live online, you will first need to add it as a [Manifold Asset](../backend/texts.md#assets) and then reference it here. If you are referencing a Manifold Asset, you will paste into this field the Asset’s URL, which you can secure from the Asset sidebar view. The URL is a string formatted like the following, with the `asset-id` at the end of the line being a hexadecimal value:

```html title="Manifold Asset URL"
/api/proxy/ingestion_sources/{asset-id}
```

For remotely hosted image files, you will paste a URL value that terminates with an image file extension, e.g.:

```html title="Sample Image URL"
https://manifoldapp.org/img/visuals/twistyPencil@1x.webp
```

If you are adding an image to your text that lives in Manifold as an Asset, you will be limited to the file formats that Manifold can accept in that space:

<Spec
    title="Image File Types for Manifold Assets"
    items={[
        { key: "Format", value: "GIF, JPEG, JPG, PNG, SVG" },
    ]}
/>

However, for images that already live online, there are no such limits. So other common formats, like WEBP, become available when you reference an image that isn’t hosted in Manifold.

The second field in the modal, **Alt Text**, allows you to input a brief plain-text description of the image that will be announced to readers using Assistive Technology. Benetech’s DIAGRAM Center site, “[How to Describe Images](https://poet.diagramcenter.org/how.html)” is a good reference for learning how to craft alt text. In cases where Manifold cannot render the target image, the system will instead only display the value saved in the **Alt Text** field.

When viewing images in the Editor’s Code mode, the structure of the code will correspond to the [Embedded Image element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img):

```html title="HTML Output for Images"
<img src="URL" alt="Text from the Alt Text field">
```

If you are wanting to make your image accord with best practices for Accessibility, the image and its caption should be placed in a **Figure** container. Additionally, the caption should be fit within a **Figcaption** container that is nested in the **Figure** container like this:

```html title="HTML for an Image within a Figure Container"
<figure>
  <img src="https://...Pencil@1x.webp" alt="Your Alt Text">
  <figcaption>
    <p>The figure’s caption lives here.</p>
  </figcaption>
</figure>
```

To accomplish this in the Rich Text Editor, first insert a new line using the `Return` or `Enter` key. Now, select the Image button from the Menubar and complete the **Image URL** and **Alt Text** fields. Once you have inserted the image, you will return to the Editor view and the image should be outlined in a green border. If not, select it with your mouth or keyboard. Once the image is selected, navigate to the Menubar **Container** dropdown and select **Figure**. That will enclose the image inside `<figure>` tags. Now insert another new line in the Editor and input the caption. When you have finished, with your cursor still in the caption, select **Figcaption** from the **Container** dropdown. That will enclose your caption in `<figcaption>` tags that are nested within the larger `<figure>` structure. See the Mozilla Web Docs to learn more about the [Figure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure).

<Spec title="Insert Image Shortcuts">

| System   | Shortcuts / Syntax                                                                        |
| -------- | ----------------------------------------------------------------------------------------- |
| Mac      | `Command` + `G`                                                                           |
| Windows  | `Control` + `G`                                                                           |
| Markdown | The Manifold Editor does not currently accept Markdown syntax for the creation of images. |

</Spec>

:::tip Inline Images
If you want to have your image appear inline with surrounding text, say as an image displaying between words, you will need to switch to Editor’s HTML mode and manually move the image code to where you want it to appear. By default Manifold inserts images as block content that lives between headings or paragraphs.
:::

#### Iframe

The iFrame option in the Menubar, denoted by a button showing a browser window with a pair of angle brackets, is a means to insert YouTube, Vimeo, and other iFrame content (e.g., a Carto Map, H5P element, Soundcloud of Spotify playlists, a Sketchfab illustration, Mirador content, etc.) into the body of your text section. To learn more about iFrames, see the Mozilla Web Documentation page about the [Inline Frame (iFrame) Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

To insert content as an iFrame, first create a new line in the Editor using your `Return` or `Enter` button where you want the content to appear and place your cursor in that new empty line. Now select the iFrame button with either your mouse or keyboard or one of the keyboard shortcuts noted below. Doing so will open the Insert iFrame modal. That modal includes two fields that you can use to insert an iFrame: **iFrame URL** and **Title**.

The **iFrame URL** field expects the direct source path of your iFrame element. In many cases, with services like YouTube or Vimeo, you will need to find a share button and then an embed option to get the value you need to insert here in Manifold. When you find the embed option, the site you are sourcing the content from will provide you with a snippet of HTML code. You *do not need that full block of code!* Instead all you need for your purposes in Manifold is the value from the `src` attribute. For instance, here is a sample embed code from YouTube:

```html {4} title="Sample YouTube Embed Code"
<iframe 
width="560" 
height="315" 
src="https://www.youtube.com/embed/Eiijm2GhKAA?si=SPWDNF26Jx5Hd8KT" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer;
  autoplay;
  clipboard-write;
  encrypted-media;
  gyroscope;
  picture-in-picture;
  web-share" allowfullscreen>
</iframe>
```

All you need to paste into Manifold to properly reference this video content is the URL described in the `src` attribute: `https://www.youtube.com/embed/Eiijm2GhKAA?si=SPWDNF26Jx5Hd8KT`. Likewise, here is a sample HTML embed from Vimeo:

```html {2} title="Sample Vimeo Embed Code"
<iframe
src="https://player.vimeo.com/video/872708427?h=c3ae391645"
width="640"
height="360"
frameborder="0"
allow="autoplay;
  fullscreen;
  picture-in-picture" allowfullscreen>
</iframe>
```

Here again, all we need to paste into Manifold is `https://player.vimeo.com/video/872708427?h=c3ae391645`. Manifold does not require the rest.

In some cases what a site’s embed option provides you can be overwhelming. For instance, this is a sample from Sketchfab:

```html {11} showLineNumbers title="Sample Sketchfab Embed Code" 
<div class="sketchfab-embed-wrapper">
<iframe title="Ghost Kitty" 
frameborder="0" 
allowfullscreen mozallowfullscreen="true" 
webkitallowfullscreen="true" 
allow="autoplay; 
  fullscreen; 
  xr-spatial-tracking" 
xr-spatial-tracking execution-while-out-of-viewport 
execution-while-not-rendered web-share 
src="https://sketchfab.com/models/e43e16299b2c469f9d2a74cab74d4603/embed"> 
</iframe> 
<p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> 
<a href="https://sketchfab.com/3d-models/ghost-kitty-e43e16299b2c469f9d2a74cab74d4603?utm_medium=embed&utm_campaign=share-popup&utm_content=e43e16299b2c469f9d2a74cab74d4603" 
  target="_blank" 
  rel="nofollow" 
  style="font-weight: bold; color: #1CAAD9;"> 
  Ghost Kitty </a> 
  by 
<a href="https://sketchfab.com/Ergoni?utm_medium=embed&utm_campaign=share-popup&utm_content=e43e16299b2c469f9d2a74cab74d4603" 
  target="_blank" 
  rel="nofollow" 
  style="font-weight: bold; color: #1CAAD9;"> 
  Ergoni </a> 
on 
<a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e43e16299b2c469f9d2a74cab74d4603" 
  target="_blank" 
  rel="nofollow" 
  style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
</p>
</div>
```

That’s a lot of code, but the thing to target is that `src` attribute value, which here is `https://sketchfab.com/models/e43e16299b2c469f9d2a74cab74d4603/embed`.

Conversely, Mirador elements announce the value you need in your browser’s URL bar. For example, this page’s URL also serves as the path you need for Manifold: `https://mirador-dev.netlify.app/__tests__/integration/mirador/`.

The second field in the iFrame modal, **Title**, is much like Alt Text for an image: it serves to *briefly* describe the nature of the iFrame content for users who are reading with Assistive Technology. The content of this field is not displayed on the site but embedded in the code for screen readers to access and convey to their users. We generally recommend **Title**s that are 150 characters (including spaces) or less.

Once the **iFrame URL** and **Title** and saved in the modal, a preview of the content will appear in the Editor. If one does not appear there is a problem with the URL or the third-party host of the content. Some sites place limitations on where their content can be shared. In such situations, the content may not be available for use in Manifold.

<Spec title="Insert iFrame Shortcuts">

| System   | Shortcuts / Syntax                                                                          |
| -------- | ------------------------------------------------------------------------------------------- |
| Mac      | `Command` + `M`                                                                             |
| Windows  | `Control` + `M`                                                                             |
| Markdown | The Manifold Editor does not currently accept Markdown syntax for the insertion of iFrames. |

</Spec>

:::tip What about Manifold-Hosted Videos?
You can also use the **iFrame** option to bring a video hosted in Manifold into the text section. To do so, you need only paste that Asset’s Embed URL into the iFrame URL field here, and it will be inserted into the text section as expected. See the [Assets section](../backend/texts.md#assets) of this documentation for more about loading Assets and securing their URLs.

When an Asset URL is used in this space it will adjust the HTML structure of the element away from an iFrame to that of an [HTML5 Video Embed Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), which will show in the HTML mode of the Editor like this:

```html
<video 
  src="/api/proxy/ingestion_sources/{asset-id}" 
  title="Movie Asset" 
  controls>
</video>
```

When adding a video to your text section that lives in Manifold as an Asset, you will be limited to the file formats that Manifold can accept in that space:

<Spec
    title="Video File Types for Manifold Assets"
    items={[
        { key: "Accepted Formats", value: "AVI, FLV, MOV, MP4, WEBM, WMV" },
        { key: "Playable in Browser", value: "MP4, WEBM" },
    ]}
/>

Note that from the formats that Manifold can accept, only videos in the **MP4** and **WEBM** format are playable in the browser.

Equally important: this only applies to Manifold-hosted video Assets. If your video file lives remotely on an outside server you will need to reference it using the HTML Editor with `<video>` element tags.

It is beyond the scope of this space to thoroughly discuss how these approaches differ, but we will offer a few words: Generally speaking, iFrames are less easy to size appropriately, and hosted video content tends to be less performant. In other words, a YouTube video is going to play really well regardless of connectivity or device, but you may not always be happy with how it is situated on the page. Conversely you have a lot more control over how a Video element displays, but the playback itself will not be as smooth as YouTube or Vimeo.
:::

### Menubar Keyboard Shortcuts

The following table of keyboard shortcuts summarizes all the commands described in the various sections above. Each of these options are likewise available from the Menubar formatting options in the Editor’s Rich Text mode:

<Spec title="Keyboard Shortcuts Summary">

<Tabs
  groupId="keyboard-shortcut-summary"
  defaultValue="mac"
  values={[
    {label: 'Mac', value: 'mac'},
    {label: 'Windows', value: 'windows'},
    {label: 'Markdown', value: 'markdown'},
  ]}>

<TabItem value="mac">

| Operation/Format   | Shortcut                   |
| :----------------- | :------------------------- |
| Undo               | `Command` + `Z`            |
| Redo               | `Command` + `Shift` + `Z`  |
| Paragraph          | `Command` + `Option` + `0` |
| Heading 1          | `Command` + `Option` + `1` |
| Heading 2          | `Command` + `Option` + `2` |
| Heading 3          | `Command` + `Option` + `3` |
| Heading 4          | `Command` + `Option` + `4` |
| Heading 5          | `Command` + `Option` + `5` |
| Heading 6          | `Command` + `Option` + `6` |
| Bold               | `Command` + `B`            |
| Italic             | `Command` + `I`            |
| Underline          | `Command` + `U`            |
| Strikethrough      | `Command` + `Shift` + `S`  |
| Inline Code        | `Command` + `E`            |
| Numbered List      | `Command` + `Option` + `7` |
| Bulleted List      | `Command` + `Option` + `8` |
| Indent List Item   | `Tab`                      |
| Unindent List Item | `Shift` + `Tab`            |
| Insert Link        | `Command` + `K`            |
| Insert Image       | `Command` + `G`            |
| Insert iFrame      | `Command` + `M`            |

</TabItem>

<TabItem value="windows">

| Operation/Format   | Shortcut                  |
| :----------------- | :------------------------ |
| Undo               | `Control` + `Z`           |
| Redo               | `Control` + `Y`           |
| Paragraph          | `Control` + `Shift` + `0` |
| Heading 1          | `Control` + `Shift` + `1` |
| Heading 2          | `Control` + `Shift` + `2` |
| Heading 3          | `Control` + `Shift` + `3` |
| Heading 4          | `Control` + `Shift` + `4` |
| Heading 5          | `Control` + `Shift` + `5` |
| Heading 6          | `Control` + `Shift` + `6` |
| Bold               | `Control` + `B`           |
| Italic             | `Control` + `I`           |
| Underline          | `Control` + `U`           |
| Strikethrough      | `Control` + `Shift` + `S` |
| Inline Code        | `Control` + `E`           |
| Numbered List      | `Control` + `Shift` + `7` |
| Bulleted List      | `Control` + `Shift` + `8` |
| Indent List Item   | `Tab`                     |
| Unindent List Item | `Shift` + `Tab`           |
| Insert Link        | `Control` + `K`           |
| Insert Image       | `Control` + `G`           |
| Insert iFrame      | `Control` + `M`           |

</TabItem>

<TabItem value="markdown">

:::note
There is no Markdown syntax for Underline, Insert Link, Insert Image, or Insert iFrame.
:::

<table>
  <thead>
    <tr>
        <th>Operation/Format</th>
        <th>Shortcut/Syntax</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Heading 1</td>
        <td><code>#</code> + <code>Space</code></td>
    </tr>
    <tr>
        <td>Heading 2</td>
        <td><code>##</code> + <code>Space</code></td>
    </tr>
    <tr>
        <td>Heading 3</td>
        <td><code>###</code> + <code>Space</code></td>
    </tr>
    <tr>
        <td>Heading 4</td>
        <td><code>####</code> + <code>Space</code></td>
    </tr>
    <tr>
        <td>Heading 5</td>
        <td><code>#####</code> + <code>Space</code></td>
    </tr>
    <tr>
        <td>Heading 6</td>
        <td><code>######</code> + <code>Space</code></td>
    </tr>
    <tr>
        <td>Bold</td>
        <td><code>`**`</code>[text]<code>`**`</code></td>
    </tr>
    <tr>
        <td>Italic</td>
        <td><code>`*`</code>[text]<code>`*`</code></td>
    </tr>
    <tr>
        <td>Strikethrough</td>
        <td><code>`~`</code>[text]<code>`~`</code></td>
    </tr>
    <tr>
        <td>Inline Code</td>
        <td><code>`</code>[text]<code>`</code></td>
    </tr>
    <tr>
        <td>Numbered List</td>
        <td><code>1.</code> + <code>Space</code></td>
    </tr>
    <tr>
        <td>Bulleted List</td>
        <td><code>-</code> + <code>Space</code></td>
    </tr>
    <tr>
        <td>Indent List Element</td>
        <td><code>Tab</code></td>
    </tr>
    <tr>
        <td>Unindent List Element</td>
        <td><code>Shift</code> + <code>Tab</code></td>
    </tr>
  </tbody>
</table>

</TabItem>

</Tabs>

</Spec>

### Breadcrumbs Bar

The Breadcrumbs Bar displays in gray directly beneath the Editor’s Menubar and serves as dynamic map of the text section being edited. This map illustrates, on one horizontal line, how content selected in the Editor is situated within the overall document’s hierarchy in the fashion of [breadcrumb navigation](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation). Remember, the Menubar options discussed above are all concerned with wrapping content in HTML tags. This Bar exposes those tags and allows you to manipulate how they relate to one another.

The left side of the lists the hierarchy of selected elements. On the far right there is a button, shown as an eye icon, that when selected reveals in the Editor *all* of the structural elements that have been assigned to the content of the text section.

When the section’s formatting is revealed using that button, elements styled from options in the **Container** dropdown will appear outlined in pink, elements styled using the **Paragraph** dropdown or as lists will appear in green, and inline elements, like **Span**s or words and phrases formatted with the text options (Bold, Italics, etc.), will appear outlined in blue.

Likewise, elements listed in the hierarchical map on the left can be selected with either the mouse or keyboard. When you hover over an element in the map on the left of the Breadcrumb Bar, the element will appear in the Editor below outlined as noted above. The same happens when you tab to it with your keyboard.

If you select an element on the left side of the Breadcrumb map with your mouse or with your keyboard using the `Space` bar, the element will show an input box—the Tag Bar—that displays the selected element’s name, id, and class, along with two buttons: one depicting an up arrow and the other a trashcan.

The name of the element is not something you can edit in the Tag Bar. It corresponds to the HTML element with which it is associated. For example, if you select a paragraph, `p`, from up in the Breadcrumbs Bar, the name showing in the Tag Bar in the Editor for that respective paragraph will show as `p`. Following that element name there *may* be an [HTML id attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id), denoted by a hash mark (e.g., `p#name`). An id will appear in this space if one has been giving to the element, either in the Editor’s HTML mode or from the source file that was ingested. If you were to toggle to the Editor’s HTML mode, you would see the corresponding paragraph tagged in HTML as such:

```html title="An Example ID associated with a Paragraph in HTML"
<p id="name">. . .</p>
```

Following the element name and (potential) id in the tag bar, there is an option to input text. The input box in the Tag Bar expects the name of one or more [HTML classes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class). (In most cases one will suffice.) Individual class names should not include spaces. The system will instead recognize spaces as the boundaries to a new class name. For instance if you input `indent 1 indent 2` into this box, the system will identify that as three classes: `indent`, `1`, and `2`. If you are inclined to use a space in your class name, instead close them up, use a hyphen, an underscore, or close up the words in camel case: `indent1`, `indent-1`, `indent_1`, `indentOne`. These classes can then be used as targets for any associated stylesheets that live in the Text’s [Styles Sidebar](../backend/texts.md#styles). Classes are expressed in HTML as in the following example, which you can also see by toggling the Editor from the Rich Text mode to HTML mode:

```html title="How Classes Display in HTML"
<p id="name" class="indent1 indent2">. . .</p>
```

In a real-world example, suppose you selected the first paragraph of the text section. Normally such paragraphs don’t include a first-line indent. By selecting that paragraph from the Breadcrumbs bar you can give it a class of `first`, which could then correspond to a CSS rule describing the lack of an indent in an associated stylesheet:

```css title="A Sample CSS Rule Targeting a Class"
.first {
  text-indent:0;
}
```

Following the text box in the Tag Bar, there are two buttons, an up arrow and a trashcan. The up arrow “unwraps” the element from its surrounding container, moving the selected element up one level in the hierarchy. If there are other elements within that container, the container will persist. If there are no other elements in the container that you are moving your element from, it will be deleted.

Let’s explore this with a simple example: suppose you have a three-paragraph blockquote living within a larger `<section>` container that has other body paragraphs within it. In HTML that could look like this:

```html title="An example of three paragraphs contained in a blockquote that is itself in a section"
<section>
  <p>...</p>
  <blockquote>
    <p>This is a paragraph in a blockquote element.</p>
    <p>This is a paragraph in a blockquote element.</p>
    <p>This is a paragraph in a blockquote element.</p>
  </blockquote>
  <p>...</p>
</section>
```

To achieve this in the Rich Text mode of the Editor, you would first type your three paragraphs that are meant to be part of the block quote. Then you would select them and from the **Container** dropdown first select **Section** and then with the same paragraphs still highlighted select **Block Quote**, again from the  **Container** dropdown.

If you put your cursor on any of those three block quote paragraphs, the Breadcrumb Bar will display this readout:

``` 
section > blockquote > p
```

For this example, let’s suppose you select the middle block quote paragraph in the Rich Text Editor and then from the Breadcrumb Bar click `p` element and then, from the Tab Bar the up arrow. Doing so will unwrap that middle paragraph from it’s first parent container, here the **Block Quote** container, resulting in this:

```html
<section>
  <p>...</p>
    <blockquote>
      <p>This is a paragraph in a blockquote element.</p>
    </blockquote>
  <p>This is a paragraph in a blockquote element.</p>
    <blockquote>
      <p>This is a paragraph in a blockquote element.</p>
    </blockquote>
  <p>...</p>
</section>
```

Notice how the middle paragraph is no longer within `<blockquote>` tags. One terminates above it and one begins after it, but it is now outside of the **Blockquote** container, though still within the **Section** container. If you selected the up arrow again, that paragraph would now exist outside of that section as well.

Conversely, the trashcan (or delete button) removes an element from the hierarchy, without deleting the associated text content, if possible.

So if we returned to our initial setup, selected the middle paragraph as before, but this time opted for the trash can button, the result would be this, with the element’s `p` tags being removed from it:

```html
<section>
  <p>...</p>
    <blockquote>
      <p>This is a paragraph in a blockquote element.</p>
    </blockquote>
  This is a paragraph in a blockquote element.
    <blockquote>
      <p>This is a paragraph in a blockquote element.</p>
    </blockquote>
  <p>...</p>
</section>
```

This will likely be a less common use-case, and in situations where deleting the element (here the `<p>`) orphans the text rather than dropping it in a parent container, the text is removed as well.

:::tip Spans and Text Formatting in the Breadcrumb Bar
Note that of the in-line containers available in the Menubar, **Span** elements are the only ones that will appear in the Breadcrumb Bar. This means that you can add classes to **Spans** but not to other formatted content created using the buttons like **Italic** or **Bold**.
:::

## HTML Editor Mode

When toggled to HTML mode, the Manifold Editor presents as a **plain-text code editor**, with a menubar showing three basic options. The code editor itself is situated beneath the menu bar and includes line numbers on the right that signify collapsible blocks of code with triangular arrow pointers. When an arrow displays in a downward orientation, it means that block of code can be collapsed. When code is collapsed the tags for the container element of the block appear beside the first line number associated with that block of content beside a right-pointing arrow. When selected with you mouse, the code block will expand.

When in the Editor’s HTML mode, all of the content available in the Rich Text mode displays here as HTML. Changes made in one mode will automatically and instantaneously appear in the other. In some, perhaps many, cases, it will prove easier to effect the changes you want to see in the HTML mode than in the Rich Text view.

The HTML Editor includes a validation tool. If your adjustments aren’t in keeping with HTML standards, the system will display a red-X mark beside the line numbers that are troublesome and surface above the Editor the following error message:

> HTML is invalid. Fix errors indicated [by a red x mark in the margins] before switching to RTE mode.

While that message holds, you will not be able to toggle back to the Rich Text mode.

### Purpose and Limitations

HTML is the truest way content in Manifold can be understood. Regardless of how content is brought to the system or authored within it, it is all stored as HTML. This HTML mode is a means for you to directly access the source code of your content so you can make direct adjustments to it without having to limit yourself to the pre-configured options in the Rich Text mode. This mode is meant to work in tandem with Rich Text mode, so you can go as far as you can with the Rich Text Editor and augments elements as needed in HTML.

Generally speaking the Manifold editor will allow any valid HTML you provide. The prominent exceptions are components designed to work against the responsive display of content in the Reader and [HTML Script elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script).

:::tip Beware Lag
Depending on your machine you may notice an initial lag when you first place your cursor. Let your browser catch up for a quick second before starting your work. During testing, some users noticed that they inadvertently deleted content they did not intend to. When you first place your cursor make sure it is blinking and not currently selecting a block of content that you did not actively choose yourself.
:::

### Menubar Options

#### Undo and Redo

As in the Rich Text Menubard, there are two buttons that allow you to undo or redo your last action. Depicted as left- and right-turning arrows.

You can implement these operation using the following keyboard shortcuts:

<Spec title="HTML Undo/Redo Keyboard Shortcuts">

<Tabs
  groupId="html-keyboard-shortcut-undo"
  defaultValue="mac"
  values={[
    {label: 'Mac', value: 'mac'},
    {label: 'Windows', value: 'windows'},
  ]}>

<TabItem value="mac">

| Operation | Shortcut                  |
| :-------- | :------------------------ |
| Undo      | `Command` + `Z`           |
| Redo      | `Command` + `Shift` + `Z` |

</TabItem>

<TabItem value="windows">


| Operation | Shortcut        |
| :-------- | :-------------- |
| Undo      | `Control` + `Z` |
| Redo      | `Control` + `Y` |

</TabItem>

</Tabs>

</Spec>

#### Show/Hide Styles

On the far right of the Menubar, there is a button displaying an eye icon labeled **Show Styles**. When selected the code editor transforms into a view of an aggregate view of all the CSS rules that are currently being applied to the text section being edited.

That means if you have three different stylesheets associated with this text section, all of rules from those three sheets appear here. You will noticed they differ in name somewhat from how they display in the [Styles sidebar](../backend/texts.md#styles). Each CSS rule is prefixed with an additional selector: `.manifold-text-section`. So if you have a CSS rule in an associated stylesheet named `.chapterTitle`, it would appear here as `.manifold-text-section .chapterTitle`. This is no cause for concern; it is simply how Manifold manages styles in the system.

To return to the HTML of the text section, select the button again, which now reads **Hide Styles** beside an icon of an eye with a line crossing through it.

:::tip Editing Styles
You cannot edit styles from this view. It is purely informative to give you a sense of what rendering rules are affecting your content. To adjust any of these elements, navigate to the text’s [Styles sidebar](../backend/texts.md#styles).
:::

### Forcing Previews

Many elements that aren’t specifically addressed in the Rich Text mode’s Menubar will not display in that space. For example, if you add something like a [description list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) here in HTML mode, which is not on the Rich Text Menubar, it will only render as a preview in the Rich Text mode. In some situations you may find a stack of related content in the Rich Text mode that shows only in preview.

If you find stacks of content rendered in preview disagreeable, you can add a `void` attribute to a parent element in the HTML, as in the following example, to force a preview of the entire block in Rich Text mode, instead of having a series of preview blocks.

```html {1} title="A block of content forced into preview using a void attribute"
<div void>
  <h3>Cryptids of Cornwall</h3>
  <dl id="dl-001">
    <dt>Beast of Bodmin</dt>
    <dd id="dd-001">A large feline inhabiting Bodmin Moor.</dd>
  </dl>
  <dl id="dl-002">
    <dt>Morgawr</dt>
  <dd id="dd-002">A sea serpent.</dd>
  </dl>
  <dl id="dl-003">
    <dt>Owlman</dt>
    <dd id="dd-003">A giant owl-like creature.</dd>
  </dl>
</div>
```

Without that `void` attribute, the Rich Text Editor would show three preview blocks, one for definition list item. When added, that `void` forces the entire block enclosed in `<div>` tags to appear in preview. There is no change in functionality; there is merely a cosmetic option.

### Super- and Subscript

While there are no buttons to make a run of in-line text render as either super- or subscript in the Editor’s Rich Text mode, you can manually add `<sup>` and `<sub>` tags around the text you want to appear as such. While not specifically called out on the Menubar, these effects does render in the Rich Text Editor.

```html title-"Sample Super and Subscript Tagging"
<p>I was a teenage vampire in the 18<sup>th century...</p>
<p>Water is H<sub>2</sub>O!</p>
```

Altneratively, in Rich Text mode, you could use the **Span** option and then with the Tag Bar associate a class with the text that has a CSS rule for super- or subscripting. Doing so would produce the following structure in HTML

```html
Water is H<span class="subscript">2</span>O!</p>
```

If you had a stylesheet associated with the text with a rule like the following, the 

```css
.subscript {
  vertical-align:sub;
}
```

See the Mozilla documentation for the [Superscript Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup) or [Subscript Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub) for more.

### Linked Notes

In most cases it will make more sense to ingest a text with already linked notes than trying to compose content in the Editor with those structures. Instead it will be far more efficient to ingest a text from a Word document or EPUB that has linked notes and then use the Editor’s HTML mode to augment them as needed. That said, the following provides some guidance and structures you can use and adapt if you find yourself wanting to add new linked notes to a text section.

Programs like Word and Google Docs obfuscate how linked content works, so much of this may feel unfamiliar. But the fundamentals are pretty basic. You have a note marker that lives in the body of your text. Most often they are numbers and render in superscript. To have that function as a link, we need to encode it as an [Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) that targets the note content itself, either at the end of the text section or in an entirely different text section, like an EPUB that has an Endnotes chapter at the end. That anchor element also has to include its own unique `id`, so that you can link back from the note to its marker’s place in the text. There are different ways of doing this, but here is a simple example:

```html title="Simple Note Marker Encoding"
<a id="en1r" role="doc-noteref" class="noteref" href="#en1">1</a>
```

The `role` and `class` attributes here are optional. The former is present for accessibility purposes so assistive technology can properly portray the content, and the `class` attribute provides a means to target note references with a CSS rule to adjust how they render.

The crucial attributes here are the `id` and the `href`. The `id` is this note markers unique identifier that we can use later to return to this spot from the notes section itself. We recommend simple and short `id`s that can be easily understood. This one can be read as *Endnote 1 Return*. The `href` attribute tells the browser where to navigate the reader to when they select the note marker. The note marker in this example is pointing to a note in the same text section that has an `id` of `en1`, or *Endnote 1*. That marker would correspond with a structure like this at the end of the section:

```html title="Note Encoding at End of a Text Section"
<section>
  <h2 id="ahnotes01" class="ah">Notes</h2>
      <p class="endnote" id="en1">
        <a role="doc-backlink" class="ennum" href="#en1r" title="Return to note reference 1">1</a>. Body of the note, including discursive and citation information.
      </p>
      <p class="en" class="endnote" id="en2">
         <!--... Additional notes ...-->
      </p>
</section>
```

In this example let’s focus our attention first on the content after the opening `<p>` tags. The `<p>` containers here are each wrapped around the body of the note. But they begin with a few attributes. The `class="endnote"` attribute is optional but allows you to target the note paragraph with a CSS rule so you can adjust how it appears in the reader: no indent, some indent, different margins, etc. The `id` is crucial That is what the note marker up above was coded to direct the reader to when they initially selected it in the body content. Without that, that note marker link wouldn’t be able to find this spot.

And then we see that the note content itself is prefaced by an anchor element enclosed around a number, which matches the number of the marker from above. The `role`, `class`, and `title` elements are optional here, but they are all good practice. The `class` element allows you target this paragraph with a CSS rule. The `role` and `title` provide assistive technology with important information about the nature of the content. However, for the note to function as expected, we need the `href` attribute. That value reads as `#en1r`. That tells us first that the note marker itself lives in the same text section, otherwise there would be a value before the hash mark, and second it cites the `id` from the note marker back up in the body of the text section. When selected, the note number here returns the reader back to where the note marker appeared in the body text.

You can see then the circular nature of these linked elements. The `href` in the note marker points to the `id` of the note, and the `href` of the note points to the `id` of the note marker.

If you don’t want the notes proper to live in the same section where their markers live, you will need to first create a text section to contain them, and then you’ll need to adjust the `href` values here accordingly to include [the slugs of the respective text sections](../backend/texts.md#sections). For the sake of simplicity let’s say we have note markers in a text with a slug value of `ch001` and notes living in a section with a slug value of `endnotes`. With that setup, we would adjust the code from above like this:

```html title="Note Marker Targeting a Note in a Different Section"
<a id="en1r" role="doc-noteref" class="noteref" href="endnotes#en1">1</a>
```

```html title="Note Encoding in Its Own Text Section"
<section>
  <h2 id="ahnotes01" class="ah">Notes</h2>
      <p class="endnote" id="en1">
        <a role="doc-backlink" class="ennum" href="ch001#en1r" title="Return to note reference 1">1</a>. Body of the note, including discursive and citation information.
      </p>
      <p class="en" class="endnote" id="en2">
         <!--... Additional notes ...-->
      </p>
</section>
```

That’s a very basic rundown of linking notes. More often notes are constructed as lists, which better serve assistive technology. An example of those patterns could look like this:

```html title="Note Encoding within an Ordered List"
<section>
  <h2 id="ahnotes01" class="ah">Notes</h2>
  <ol role="list" class="notes" style="list-style-type:none">
    <li role="listitem" class="endnote" id="en1">
      <p class="en">
        <a role="doc-backlink" class="ennum" href="ch001#en1r" title="Return to note reference 1">1</a>. Body of the note, including discursive and citation information.
      </p>
    </li>
    <li>
        <p class="en">
           <!--... Additional notes ...-->
        </p>
    </li>
  </ol>
</section>
```

For more on such patterns, see [Daisy’s Knowledge Base](https://kb.daisy.org/publishing/docs/html/notes.html).

:::info Avoid Using the Link Function to Link Notes
Reading this, it might be tempting to try linking notes using the Link option in the Editor’s Rich Text mode. Doing so will likely prove pretty cumbersome as you still need to add `id`s to the various elements for that to work.
:::

### Tables

As noted earlier in the Rich Text Menubar section, tables can only be added to a text section in HTML mode. Writing tables in HTML is not a joy, but there are tools out there like [Table Convert](https://tableconvert.com/) that allow you to convert Excel or Spreadsheet tables into HTML, which you can paste here.

:::tip Markdown Tables
Neither mode of the Editor currently supports Markdown formatted tables.
:::

### MathML

With version 8, Manifold now supports the core elements of [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML). This is possible because as of early 2023, all evergreen browsers now support the core elements of MathML out of the box.

Math elements can only be added or edited in the Editor’s HTML mode. When displayed in the Reader, mathematical notation can be selected for highlighting and annotation. However, only entire elements—*not* individual components of the notation—are selectable. This is enforced intentionally by the system for performance reasons.

When crafting mathematical markup, avoid inline `style` attributes (e.g., `<math style="...">`), opting instead for classes that you can adjust using CSS rules.

By default math is set to appear as block content—between paragraphs and headings. If you have mathematical notation that should appear on the same line as body text, add a `display="inline"` attribute to the opening `<math>` tag as in this example:

```html title="Sample Inline Math"
<p>In the Pythagorean Theorem,
  <math display="inline" alttext="a squared plus b squared equals c squared">
    <mrow>
      <msup>
        <mi>a</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <msup>
        <mi>b</mi>
        <mn>2</mn>
      </msup>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>
, the sum of the square of . . .</p>
```

The result of this code in the Manifold Reader would place the notation for the Pythagorean Theorem between the phrases “In the Pythagorean Theorem,” and “, the sum of the square of . . .”

:::tip Accessible Math
It is best practice for accessibility purposes to include a brief description of the mathematical notation using an `alttext` attribute, as shown in the example above.
:::

#### Composing and Converting Math

Most people don’t natively compose math in MathML. It is a rather verbose and cumbersome markup language. If you, like most others, prefer to compose in LaTeX to generate your math notation, you will need to use a tool to convert it to MathML. [PanDoc](https://pandoc.org/) is a standard in this space, and for a lighter-weight option, [Temml](https://temml.org/) is a good choice.

#### MathML Tags Supported in Manifold

As noted above, Manifold *only* supports the core elements of MathML as defined by the World Wide Web Consortium. See the [W3C’s MathML Core Explainer](https://w3c.github.io/mathml-core/docs/explainer.html#the-elements-of-mathml-core) for more. For easy reference, and copied directly from the W3C page, the following are those elements considered to be core to MathML and are only those math elements that Manifold supports:

> - the `math` element itself
> - 3 elements called `semantics`, `annotation` and `annotation-xml` which simply provide other annotations or potential semantics in existing content but are generally not rendered.
> - 6 token elements—“Token elements in presentation markup are broadly intended to represent the smallest units of mathematical notation which carry meaning. Tokens are roughly analogous to words in text. However, because of the precise, symbolic nature of mathematical notation, the various categories and properties of token elements figure prominently in MathML markup. By contrast, in textual data, individual words rarely need to be marked up or styled specially.” The token elements are (`mtext`, `mi` (identifier), `mn` (number), `mo` (operators in a broad sense), `mspace`, `ms` (string literal—for things like computer algebra systems)
> - Layout/Relationship elements `mrow` (for grouping sub-expressions), `mfrac` (for fractions and fraction-like objects such as binomial coefficients and Legendre symbols), `msqrt` and `mroot` for radicals
> - `mstyle` (legacy compat, deprecated—just maps to css)
> - `merror` (legacy compat—displays its contents as an ”error message”. The intent of this element is to provide a standard way for programs that generate MathML from other input to report syntax errors in their input.)
> - `maction` (legacy compat, deprecated—just use JavaScript/CSS instead).
> - `mpadded`—a row-like grouping container for modifying its position and bounds. (legacy compat, attributes map to CSS, although attributes are more natural for mathematical layout)
> - `mphantom`—a co-evolutionary/legacy compat, row-like container that just adds a UA style that maps to visibility: hidden;
> - 3 elements about subscripts and superscripts `msub`, `msup` and `msubsup`
> - 3 elements about underscripts and overscripts `munder`, `mover` and `munderover`
> - 3 elements about prescripts and tensor indexes (`mmultiscripts`, `none`, `mprescripts`)
> - 3 elements about tabular math such as matricies and determinants (`mtable`, `mtr` and `mtd`)

In total that amounts to the following thirty elements. Each math element in the list below serves as a link to further documentation about that specific element on the the W3C site:

<Spec title="Core MathML Elements">

| MathML Element                                                          | Definition                           | HTML Output                            |
| ----------------------------------------------------------------------- | ------------------------------------ | -------------------------------------- |
| [annotation](https://w3c.github.io/mathml-core/#dfn-annotation)         | Annotation                           | `<annotation>...</annotation>`         |
| [annotation-xml](https://w3c.github.io/mathml-core/#dfn-annotation-xml) | Annotation-XML                       | `<annotation-xml>...</annotation-xml>` |
| [maction](https://w3c.github.io/mathml-core/#dfn-maction)               | Action                               | `<maction>...</maction>`               |
| [math](https://w3c.github.io/mathml-core/#dfn-math)                     | Math                                 | `<math>...</math>`                     |
| [merror](https://w3c.github.io/mathml-core/#dfn-merror)                 | Error Message                        | `<merror>...</merror>`                 |
| [mfrac](https://w3c.github.io/mathml-core/#dfn-mfrac)                   | Fractions                            | `<mfrac>...</mfrac>`                   |
| [mi](https://w3c.github.io/mathml-core/#dfn-mi)                         | Identifier                           | `<mi>...</mi>`                         |
| [mmultiscripts](https://w3c.github.io/mathml-core/#dfn-mmultiscripts)   | Prescripts and Tensor Indices        | `<mmultiscripts>...</mmultiscripts>`   |
| [mn](https://w3c.github.io/mathml-core/#dfn-mn)                         | Number                               | `<mn>...</mn>`                         |
| [mo](https://w3c.github.io/mathml-core/#dfn-mo)                         | Operator, Fence, Separator or Accent | `<mo>...</mo>`                         |
| [mover](https://w3c.github.io/mathml-core/#dfn-mover)                   | Overscripts                          | `<mover>...</mover>`                   |
| [mpadded](https://w3c.github.io/mathml-core/#dfn-mpadded)               | Adjust Space Around Content          | `<mpadded>...</mpadded>`               |
| [mphantom](https://w3c.github.io/mathml-core/#dfn-mphantom)             | Making Sub-Expressions Invisible     | `<mphantom>...</mphantom>`             |
| [mprescripts](https://w3c.github.io/mathml-core/#dfn-mprescripts)       | Prescripts                           | `<mprescripts>...</mprescripts>`       |
| [mroot](https://w3c.github.io/mathml-core/#dfn-mroot)                   | Radicals                             | `<mroot>...</mroot>`                   |
| [mrow](https://w3c.github.io/mathml-core/#dfn-mrow)                     | Group Sub-Expressions                | `<mrow>...</mrow>`                     |
| [ms](https://w3c.github.io/mathml-core/#dfn-ms)                         | String Literal                       | `<ms>...</ms>`                         |
| [mspace](https://w3c.github.io/mathml-core/#dfn-mspace)                 | Space                                | `<mspace>...</mspace>`                 |
| [msqrt](https://w3c.github.io/mathml-core/#dfn-msqrt)                   | Radicals                             | `<msqrt>...</msqrt>`                   |
| [mstyle](https://w3c.github.io/mathml-core/#dfn-mstyle)                 | Style Change                         | `<mstyle>...</mstyle>`                 |
| [msub](https://w3c.github.io/mathml-core/#dfn-msub)                     | Subscripts                           | `<msub>...</msub>`                     |
| [msubsup](https://w3c.github.io/mathml-core/#dfn-msubsup)               | Sub- and Superscripts                | `<msubsup>...</msubsup>`               |
| [msup](https://w3c.github.io/mathml-core/#dfn-msup)                     | Superscripts                         | `<msup>...</msup>`                     |
| [mtable](https://w3c.github.io/mathml-core/#dfn-mtable)                 | Table or Matrix                      | `<mtable>...</mtable>`                 |
| [mtd](https://w3c.github.io/mathml-core/#dfn-mtd)                       | Entry in Table or Matrix             | `<mtd>...</mtd>`                       |
| [mtext](https://w3c.github.io/mathml-core/#dfn-mtext)                   | Text                                 | `<mtext>...</mtext>`                   |
| [mtr](https://w3c.github.io/mathml-core/#dfn-mtr)                       | Row in Table or Matrix               | `<mtr>...</mtr>`                       |
| [munder](https://w3c.github.io/mathml-core/#dfn-munder)                 | Underscripts                         | `<munder>...</munder>`                 |
| [munderover](https://w3c.github.io/mathml-core/#dfn-munderover)         | Under- and Overscripts               | `<munderover>...</munderover>`         |
| [semantics](https://w3c.github.io/mathml-core/#dfn-semantics)           | Semantics and Presentation           | `<semantics>...</semantics>`           |

</Spec>