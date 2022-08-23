---
id: html_setup
title: Set Up Your HTML File
sidebar_label: Set Up Your HTML File
---

This page describes how to set up an HTML file for ingest into the Manifold Reader. While some of the more common questions that come up while working in this format are also considered, this page is *not* meant to be a primer on HTML generally. That is well beyond the scope of this documentation.

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

When you have a number of assets (like a stylesheet or images, audio, or video files) that you need to load into Manifold along with your HTML file—because you want those elements to appear inline with the surrounding body text—it is not immediately clear how to get all of that into the system. Fortunately the solution is a pretty simple one: you just need to zip (or compress) your HTML with the associated media assets into a ZIP archive with a `.zip` file extension. At the time of ingest, you can select that ZIP archive for Manifold to ingest. 



:::tip Zip It Good!
Most likely you have your HTML file saved in a folder with all your other related assets. Perhaps they are all floating in the same folder (directory) or maybe you have some files organized in sub-folders. When it’s time to compress your files into a ZIP archive, you want to individually select your HTML file and related files or folders and then compress that selection. If you instead just select the folder that contains all of your content generally and zip that, you will likely run into problems with the ingest.
:::

<!-- how best to zip? describe what should be selected -->

#### 3. Multiple Files with or without Assets

trick question! if you have multiple HTML files to ingest you need to do so using a Manifest, which is detailed here.


## Standard Adjustments

```html title="HTML File Framework"
<!DOCTYPE html>
<html>
<head>
  <title>Sample HTML File</title>
  <!-- Title Best Practice: Keep below 60 characters. -->
  <meta charset="UTF-8">
  <meta name="dc.date" content="YYYY-MM-DD">
  <meta name="dc.title" content="Sample HTML File">
  <meta name="dc.language" content="en-US">
  <meta name="dc.rights" content="Licensed under a Creative Commons Attribution 4.0 International License.">
  <meta name="dc.description" content="A sample description. Best if kept below 160 characters.">
  <meta name="dc.creator" content="Peter Venkman">
  <meta name="dc.contributor" content="Charlotte Brontë">
  <link rel="stylesheet" href="html_style.css">
</head>
<body>
  <!-- This is where all the body text content lives. -->
</body>
</html>
```

## Embeds

<!-- Consider how to embed different kinds of elements. -->

## Workarounds

Using proscribed selectors in added stylesheets

<!--

Ignored selectors are described toward the end of the [Styles section](../backend/texts.md#styles) of the Project page.

Text titles come from ...

1. DC Title
2. `<title>` tags
3. Actual filename, cap, minus extension.

Internal cross references should use only hash values ...  

-->