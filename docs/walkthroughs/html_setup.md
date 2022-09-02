---
id: html_setup
title: Set Up Your HTML File
sidebar_label: Set Up Your HTML File
---

This page describes how to set up an HTML file for ingest into the Manifold Reader. While some of the more common questions that come up while working in this format are also considered, this page is *not* meant to be a primer on HTML generally. That kind of nuance and detail is well beyond the scope of this documentation.

For a deeper dive into HTML, we suggest the [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/HTML) as a starting point and regular reference.

:::note User Credentials
This walkthrough is intended for users who have credentials to create or edit Projects in the Manifold backend.
:::

## Setting Expectations

Our goal is to make ingesting HTML as low impact on you as possible. In most cases you’ll be able to ingest your HTML file as-is or with only minimal adjustments, as described later on this page in the **Standard Adjustments** section.

That said, while Manifold is very accommodating of different elements within an HTML file, some things are intentionally ignored by Manifold *at the time of ingest*:

Specifically, Manifold doesn’t allow scripts or media queries, nor does it support custom fonts, allow anything that will break the systems’s responsive design, or accept these [proscribed CSS selectors](../backend/texts.md#styles).

There is some wiggle room—some of these restrictions are softer than others. For more about that, see the **Workarounds** section below.

## Basics

How do I edit HTML? What am I actually loading into the system at the time of ingest? Those two questions are the most frequently asked of us about HTML ingests. Let’s consider each in turn here:

### Editing HTML

When you’re working with HTML, you will want to be using a plain-text editor like [Sublime Text](https://www.sublimetext.com/), [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), [Text Edit](https://support.apple.com/guide/textedit/welcome/mac), [Windows Notepad](https://apps.microsoft.com/store/detail/windows-notepad/9MSMLRH6LZF3?hl=en-us&gl=US), or the like.

You’ll want to ***avoid word processing applications*** like Microsoft Word or Google Documents or Word Perfect. Word processors add hidden content to files that help them do all the magic for which they are known. But you need to access the raw content of the file itself when editing HTML, and that’s exactly what plain-text editors are for. Among the Manifold Documentation Team, Sublime Text and Visual Studio Code are the ones we use the most.

### Ingesting HTML

There are three possible scenarios you can be faced with when loading HTML into Manifold to create a Text: (1) you have a single HTML file with no associated assets, like an external stylesheet or images or audio or video embeds; (2) you have a single HTML file with one or more media assets; and (3) you have multiple HTML files with *or* without assets. The sections below detail what you’ll need to do to get your material into Manifold based on which circumstance applies.

#### 1. Single File, No Assets

If you only have a single file with no local (saved on your device) assets to load, you need only select the HTML file in question at the time of Text ingest. Manifold will ingest that one file directly and create a Text from it.

But you might be asking yourself why we are qualifying a single file with “no local assets” here. And the reason is because you can reference ***remotely hosted*** assets from within a single HTML file.

For instance, maybe you have a number of images or videos hosted on your institution’s infrastructure or on a service like [Imgur](https://imgur.com/) that you want to have appear in the body of your Text. You can use the [standard HTML embed codes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding) for those, with the absolute URL values modified to source your remotely hosted content from wherever they already live online, and Manifold will be able to render that content inline with the rest of the Text. You can do likewise for a stylesheet, [linking to on a remotely hosted stylesheet](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) to describe how you want your content to render.

If you have multimedia sitting on your machine that you want to load with your HTML, then this approach doesn’t apply, and instead you’ll want to read the section the follows immediately below about ingesting a single file with one or more assets.

#### 2. Single File, with One or More Assets

When you have a number of assets (like a stylesheet or images, audio, or video files) that you need to load into Manifold along with your HTML file—because you want those elements to appear inline with the surrounding body text—it is not immediately clear how to get all of that into the system.

Fortunately the solution is a pretty simple one: you just need to zip (or compress) your HTML with the associated media assets into a ZIP archive with a `.zip` file extension. At the time of ingest, that ZIP archive is what you will select to ingest into Manifold. The text will appear, styled in accordance with any stylesheet in the archive and with any media assets appearing inline with the body of the text—assuming, of course, they are all properly referenced from within the HTML file (for more about *that*, see the Embeds section further down this page).

:::tip Zip It Good!
Most likely you have your HTML file saved in a folder with all your other related assets. Perhaps they are all floating in the same folder (directory) or maybe you have some files organized in sub-folders. When it’s time to compress your files into a ZIP archive, you want to individually select your HTML file and related files or folders and then compress that selection. If you instead just select the folder that contains all of your content generally and zip that, you will likely run into problems with the ingest.
:::

#### 3. Multiple Files with or without Assets

Is your situation one where you have multiple HTML files that you want to load into Manifold at once, each file a piece (chapter, essay, etc.) of a single whole? If so, then what you have before you is a “Manifest” ingest, described in detail in the **[Create a Manifest Ingest](../docs/../walkthroughs/manifest.md)** walkthrough. 

If, however, you have multiple HTML files that are related but not meant to stand as a single, cohesive Text, then one of the two options described in the sections above are your solution. Presently there is no means to bulk load separate Texts into Manifold in one go.

## Standard Adjustments

Manifold will accept for ingestion, as is, the HTML you already have access to or that is created by the export process of an app you are using. However, given the vast range of possibilities that entails, it is hard for to say that the result you see in Manifold after ingestion will be exactly as you hoped for. Often times code will need to be cleaned up or style attributes modified. Barring a close review of your specific content, we can offer a couple of common adjustments that we ourselves use regularly and which are quick and easy to apply:

### HTML Header

The content that lives at the top of your HTML document between the `<head>` tags is primarily meant to be machine readable and provides information about your file (metadata) that different systems can interpret and display. Your file may have a lot of information in this space or almost none at all. The only required element for the HTML to be valid is a title; everything else that is possible is optional.

There are some attributes that Manifold looks for specifically in this section of your file that it will include as part of the Text record in the system. Specifically, Manifold can accept from this space information about the Text’s

- title
- publication date
- language
- rights or license information
- descriptive copy
- creator names
- contributor names

The template below provides a sample code block you can copy and paste into your own file, swapping out values between straight quote marks for information specific to your content.

Included with the template are comments, which appear between comment opening `<!--` and closing `-->` tags. Those comments speak to specific elements and are meant to add context and helpful tips. You can remove them from your file or leave them as is; Manifold will ignore them.

```html title="HTML File Framework"
<!DOCTYPE html>
<html>
<head>
  <title>Sample HTML File</title>
  <!-- Best practice is to keep the title 
    below 60 characters (including spaces). -->
  <meta charset="UTF-8">
  <meta name="dc.title" content="Sample HTML File">
  <meta name="dc.date" content="YYYY-MM-DD">
  <meta name="dc.language" content="en">
  <!-- Language abbreviations are described in ISO 639-1
    that can be found in the first column of this table: 
    https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes. -->
  <meta name="dc.rights" content="License or Copyright">
  <!-- This is a plain text field: links or character styles 
    aren’t accepted in this space. -->
  <meta name="dc.description" content="An abstract for the Text.">
  <!-- Best practice for descriptions is to keep them 
    below 160 characters. -->
  <meta name="dc.creator" content="Author Name">
  <meta name="dc.contributor" content="Contributor Name">
  <!-- Names of creators and contributors included here are 
    automatically added as Maker records to the system and 
    related to this specific Text in the Text’s People sidebar. 
    To add more names, copy the entire line and adjust the
    name attribute; likewise delete lines that aren’t needed. -->
  <link rel="stylesheet" href="HTMLstyle.css">
  <!-- If your CSS is in the same folder as your HTML file on 
    your machine, you can simply include its name and extension 
    as done here. If your CSS is nested in a folder in the same 
    directory (folder) as your HTML file, you would add the 
    folder name with a slash: "folderName/HTMLstyle.css". Avoid
    spaces in filenames and folders like the plague. -->
</head>
```

Because of the high degree of variability from one file to another, some even without regard for the HTML spec, Manifold sources the title of an HTML Text from a number of different places, in order of precedence according to the following:

1. Meta DC Title Attribute
2. HTML Title Tag
3. The filename of the HTML document, capitalized and without extension

Manifold will stop looking for a title as soon as it has found one. So if you don’t have a `"dc.title"` attribute in the `<head>`, Manifold will look next for the HTML `<title>` tag. And if there is no such tag, Manifold will take the name of the HTML file itself as the title of the Text.

:::tip A Word about Quotation Marks
If you have a title or a description, say, that contain internal quotation marks, make sure they are ***not*** standard straight quotation marks but instead true “curly” marks. Otherwise you may get an error upon ingest. Straight quotation marks are meant to surround the values of different attributes. Internal marks of the same kind will prevent the file from being parsed correctly.

This is correct, with a curly mark indicating the possessive:

```html
<meta name="dc.title" content="Dracula’s Guest">
```
:::

### Cross-References and Notes

When you have notes or references in your HTML file that point readers to another section of the document via a link, the form of that link should be a simple hash value.

```html title="Sample Note in the Text Body"
<p>... There sentence ends with a note.<a href="#note-001" 
id="note-ref-001" role="doc-noteref" class="noteref">1</a></p>
```

In the example above, the `href` attribute value for the note link begins with a hash mark. That value is telling Manifold to move the focus of the reader from that place in the Text to the note with an `id` value of `note-001` (shown in the example below). Often times links of this nature will include the full filename, for example: `filename.html#note-001`. Manifold doesn’t like that, so if your file has links to content within the same file (otherwise known as cross-references), remove the filename before the hash mark to ensure the link will function as expected.

```html title="Note Content in the Notes Section of the Text"
<p><a href="#note-ref-001" role="doc-backlink" id="note-001" 
class="notenum" title="Return to note reference">1.</a> This 
is the body of the note.</p>
```

Notice how the `id` changes to the `href` value and vice versa for linked notes. That is how to construct links that point at one another without creating a circular reference. Note also that the class attributes mentioned here are optional and are examples of how you could include note markers in the text and in the endnotes sections as targets for a stylesheet.

For more on the accessibility components of these two examples, see the [Accessible Publishing Knowledge Base](http://kb.daisy.org/publishing/docs/html/notes.html#summary) maintained by DAISY.

## Embeds

For those looking to embed audio/visual elements as well as interactive content directly inline with the body of their text, the following examples provide a framework from which to begin. In all cases the specific `src` attributes will need to be adjusted. For embed codes coming from third party sites, the examples here will show you the shape of what you need, so that you can more easily find it on those sites and paste it into the content of your file.

### Figures

Images rely on `<figure>` tags, which also allow for an optional caption. This sample demonstrates how to reference an image saved in the `images` folder in the same directory as your HTML file. 

```html title="Image Embed Code"
<figure>
  <img src="images/photo_01.png" alt="Short description">
  <figcaption>Optional caption.</figcaption>
</figure>
```

### Audio

If you want to include audio/visual elements inline with your text, you can use the following examples as templates. This first example shows how to reference an MP3 that is saved within a subfolder folder named `audio` within the same directory of your HTML file.

```html title="Audio Embed Code"
<audio controls>
  <source src="audio/interview_01.mp3" type="audio/mpeg">
  Your browser does not support the <code>audio</code> element.
</audio>
```

### Video

The embed code for videos is very much like that for audio. Here is an example of what the code would be for an MP4 video saved within the `video` subfolder that you created in the same directory as your HTML:

```html title="Video Embed Code"
<video controls>
  <source src="video/field_test_01.mp4" type="video/mp4">
  Your browser does not support this <code>video</code> element.
</video>
```

The Mozilla Web Docs details more about how the [audio embed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [image embed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure), and [video embed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) code works and how you might want to adapt them to better meet your needs. Manifold will respect any of the adjustments mentioned in that documentation.

### Misc. Embeds

It is also possible to embed other interactive content that *already* lives online within your HTML file. The following are a suggestive sample base instead of an exhaustive one.

Note that many of these attributes shown here, like width and height and title, are determined by the content from which they are sourced. Likewise the `src` values are very specific and will need to be changed from one embed to another.

#### H5P

```html title="Embed Code for H5P"
<iframe src="https://h5p.org/h5p/embed/440740" width="1090" height="745" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="Example content - Arts of Europe"></iframe><script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script>
```

#### Mirador

```html title="Embed Code from Mirador"
<iframe src="https://mirador-dev.netlify.app/__tests__/integration/mirador/" width="800" height="600" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" id="frame" allowfullscreen="">You need an iFrame capable browser to view this.</iframe>
```

#### KnightLab StoryMap

```html title="Embed Code from KnightLab"
<iframe src="https://uploads.knightlab.com/storymapjs/4b417d466beff50791f06c0cf75eee3a/manifold-mapping/index.html" frameborder="0" width="100%" height="800"></iframe>
```

#### ArcGIS StoryMap

```html title="Embed Code from ArcGIS"
<iframe src="https://storymaps.arcgis.com/stories/32121d29864f4055ba61fca75865a8d4" width="100%" height="500px" frameborder="0" allowfullscreen allow="geolocation"></iframe>
```

## Workarounds

Manifold was built to support a wide array of users, from publishing professionals to those who are publishing to fulfill the needs of their non-publishing profession. Because of that, Manifold tries to provide some boundaries for content that is being brought into the system at the time of ingest to ensure it presents as prettily as possible for your readers.

More specifically, Manifold ignores certain style selectors (detailed toward the end of the [Styles section](../backend/texts.md#styles) of the Project page) that may be present in your CSS. If that is the case, you aren’t entirely out of luck. For the following selectors, you can [add a stylesheet to your text](../docs/../backend/texts.md#styles) that targets those selectors and which Manifold will accept.

- `line-height`
- `font-size`
- `font-weight`
- `margin`
- `padding`

For example, Manifold will ignore the `line-height` attribute you have in your CSS at the time of ingest. But if you add a stylesheet with `line-height`, Manifold will honor the value you associate with it there.