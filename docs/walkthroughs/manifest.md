---
id: manifest
title: Creating a Manifest Ingest
sidebar_label: Manifest Ingest
---

Manifold can create a single Text from a collection of independent files and assets. This is what is known as a “Manifest Ingest.”

This page describes in detail (perhaps *painful* detail) the process of creating a Manifest Ingest. Users who have no previous experience with Manifest Ingests should feel comfortable and capable creating them using the guidance provided here.


:::note User Credentials
This walkthrough is intended for users who have credentials to create or edit Projects in the Manifold backend.
:::

## Manifest Basics

For many Manifold users, ingesting a Text is a process that involves only a single file: they navigate to a Project, select **Texts** from the sidebar, and then ingest only one Word or Google document. More advanced users might do likewise, adding Texts to their projects as individual Markdown or HTML files.

There is absolutely nothing wrong with that approach, and it is particularly useful for Texts that are brief and not made up of several sections or chapters. It is always important to remember, however, that the Manifold Reader is not paginated—it’s a single-scroll experience. The longer a Text is, the more overwhelming the experience will be for readers. 

Thus the need for Manifest Ingests. They provide a way for users to present to their readers a single, cohesive Text that is partitioned into smaller, more digestible sections. Why scroll and scroll . . . and scroll, when you can craft a Text where you scroll through a discrete section and then click the **Next** button to begin the following section from the top of the page. That makes for faster load times and allows readers to better understand where they are in the context of a larger whole.

## What’s Involved?

Every Manifest Ingest involves

- two or more files saved in formats acceptable for Manifold ingest (HTML, Markdown, Word DOCX, or Google Docs), and
- the *manifest* itself (saved as a YAML file), which instructs Manifold how to combine the files into one structured Text.

Manifest Ingests also often include (but do not require) media files, like images or audio and video meant to be embedded into the fabric of the Text itself, or an associated stylesheet (CSS).

## Directory Structure

In your Finder (Mac) or File Explorer (PC) window a basic Manifest might look like this:

```bash title="Simple Manifest Inventory Example"
manifest_folder
 ┣ chapter_01.docx
 ┣ chapter_02.docx
 ┣ chapter_03.html
 ┣ chapter_04.md
 ┣ chapter_05.docx
 ┣ manifest.yml
```

Remember, you can mix different file formats within a Manifest. In the example above we see DOCX, HTML, and Markdown files set to be synthesized into one Manifold Text. 

Why would I want to mix and match like that? Maybe different people are working on different sections, or perhaps your choice is governed by the needs of a particular section and the affordances of the different file formats.

For example, I might not be very technically inclined, so I want to use Word as much as possible, but in a few chapters I want to present a more advanced/involved component, so I’ll compose that section in Markdown or HTML instead, where I can exercise more nuanced control of the content.

You’ll notice that we don’t see Google Docs in this directory tree. That’s because Google Docs are online files that we can’t collect into our file system. But don’t worry, we can still include Google Docs as part of our Manifest—we just don’t have to do any file prep for them on our desktop. We’ll circle back to Google Docs below when we consider the manifest YAML file.

For the moment, let’s consider what you would do if you want to include a stylesheet or associated audio, images, or video. Easy: 

- you include those files in your folder and 
- in the appropriate place(s) in your body files you reference them.

Let’s start with including these new materials in your folder:

```bash title="More Involved Manifest Inventory Example"
manifest_folder
 ┣ audio
 ┃ ┗ interview_01.mp3
 ┃ ┗ interview_02.wav
 ┣ images
 ┃ ┗ photo_01.png
 ┃ ┗ photo_02.jpg
 ┣ video
 ┃ ┗ field_test_01.mp4
 ┃ ┗ field_test_02.webm
 ┣ chapter_01.docx
 ┣ chapter_02.docx
 ┣ chapter_03.html
 ┣ chapter_04.md
 ┣ chapter_05.docx
 ┣ manifest.yml
 ┣ part_01.md
 ┣ part_02.md
 ┣ stylesheet.css
 ```

This more involved inventory shows a main folder with three nested subfolders, each containing a couple of media files. The manifest folder also includes an aptly titled stylesheet with a CSS filetype.

:::tip Nesting Folders
Manifold is agnostic about including subfolders as part of a Manifest Ingest. If they help you organize (as they do me) then use them. If they aren’t useful, don’t worry: they aren’t required.
:::

Now comes the more involved part: referencing these media materials from within the source files that will become sections of a Manifold Text.

First the good news: If you are working strictly in Word or Google Docs ***and*** only have static images that you need to appear inline with the body of your text, you can insert them directly into your Word or Google document using the respective app’s built-in features to do so. Nothing further is needed. And what’s more, you don’t need to include the image files in your manifest folder either.

Now the bad news for folks working only in Word or Google Docs: While you can insert images into the body of either a Google Doc or Word file, and then have them transfer into Manifold as expected, the same is not true for audio or video files. Google doesn't allow either as of this writing, and while you can insert and play audio/video files within Word, Word does not export them out in playable formats. Which means if you want to have playable audio or video ***in line*** with the body of your text, you will need to compose those sections in either Markdown or HTML.

Happily, because Markdown gets compiled into HTML, we can use the same standard HTML coding structure to reference these media files from within either our Markdown or HTML files.

:::tip Inline Media versus Manifold Resource Annotations
While it is not possible to embed inline audio or video into your Word and Google Docs, you can always place Manifold Resources as annotations onto any Text in Manifold. The annotations are denoted by a cube marker in the text (not unlike a note number) and a thumbnail in the left margin that readers can click to view the media. That isn’t the same experience as baking these elements into the fabric of the text, but it may be a viable alternative for you.
:::

### Embedding Content

If you want to include audio inline with your text you can use the following examples as templates. This first example shows how to reference an MP3 that is saved within a subfolder folder named `audio`, as we have it in the directory example above.

```html title="Audio Embed Code"
<audio controls>
  <source src="audio/interview_01.mp3" type="audio/mpeg">
  Your browser does not support the <code>audio</code> element.
</audio>
```

Images rely on `<figure>` tags, which also allow for an optional caption. This sample demonstrates how to reference an image saved in the `images` folder from the sample directory above. 

```html title="Image Embed Code"
<figure>
  <img src="images/photo_01.png" alt="Short description">
  <figcaption>Optional caption.</figcaption>
</figure>
```

The embed code for videos is very much like that for audio. Here is an example of what the code would be for an MP4 video saved within the `video` subfolder:

```html title="Video Embed Code"
<video controls>
  <source src="video/field_test_01.mp4" type="video/mp4">
  Your browser does not support this <code>video</code> element.
</video>
```

The Mozilla Web Docs details more about how the [audio embed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [image embed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure), and [video embed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) code works and how you might want to adapt them to better meet your needs. Manifold will respect any of the adjustments mentioned in that documentation.

### Stylesheets

In the same way that you cannot add playable audio or video to Word or Google documents, you likewise cannot reference an external stylesheet (CSS) from within them either. If you are keen to control how different elements of your text render (like headings or lists or blockquotes, etc.), we suggest you avoid using Google altogether. And for Word, you’ll need to leverage a [style map](../administering/configuring/ingestion_settings.md). More on that soon(ish) in a forthcoming walkthrough speaking to structures and styles and all that fun stuff.

That said, to call on an external stylesheet from a Markdown or HTML document as a means to inform how your content will render, you need only add one line to your file, formatted per the [HTML spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link):


```html title="Stylesheet Link Code"
<link rel="stylesheet" href="stylesheet.css">
```

Everything about that line is boilerplate, except for the `href` value, which should match the name of your stylesheet file exactly.

In Markdown files, that link should follow after the header block and before your body content begins, as in this example:

```md title="Linking to a Stylesheet from a Markdown Document"
---
title: "Chapter 1. The Eve of the War"
date: "2022-07-01"
language: "en-US"
rights: "This publication is in the public domain."
description: "Sample description or abstract."
creator: "H. G. Wells"
contributor: "Anonymous Rex"
---

<link rel="stylesheet" href="stylesheet.css">

# Chapter 1. The Eve of the War

No one would have believed in the last years . . .
```

For HTML files, the line should appear between the `<head>` tags at the top of the document:

```html title="Linking to a Stylesheet from an HTML File"
<!DOCTYPE html>
<html>
<head>
  <title>Chapter 1. The Eve of the War</title>
  <meta charset="UTF-8">
  <meta name="dc.date" content="2022-07-01">
  <meta name="dc.title" content="Chapter 1. The Eve of the War">
  <meta name="dc.language" content="en-US">
  <meta name="dc.rights" content="This publication is in the public domain.">
  <meta name="dc.description" content="Sample description or abstract.">
  <meta name="dc.creator" content="H. G. Wells">
  <meta name="dc.contributor" content="Anonymous Rex">
  <link rel="stylesheet" href="stylesheet.css">
</head>
<body>
  <h1>Chapter 1. The Eve of the War</h1>
  <p>No one would have believed in the last years . . .</p> 
```

## The Manifest YAML File

The manifest (or YAML file) tends to be the component of a Manifest Ingest that gets all of the attention for this process, and not in a good way. YAML is one of those coding languages that is not very well known outside of developer circles and is also very unforgiving. Mistype a file name? Error. Have one line incorrectly indented? Error. We get it. We on Team Manifold have fallen victim to all of that. However, we have developed some good strategies that can help you confidently compose your manifest file and use it to successfully create a viable Manifold Ingest.

Our first tool is the following template, which you can copy/paste into your preferred plain text editor, like Notepad, TextEdit, Sublime Text, Atom, or Visual Studio Code, to name a few. This sample file is annotated to help provide context for what each line is doing. Annotations are identified by lines beginning with a hash mark (#). They (the whole line of annotation, that is) can also be safely removed from the file if you prefer to go without them. Alternatively, they won’t hurt anything if you leave them in.

```yml title="Sample Manifest YAML Template"
meta:
# This is where you describe the text you
# are having Manifold assemble.
  title: 'Title of the Entire Text'
# It is best practice to enclose text
# here in the meta section within single
# quote marks and use curly quotes within
# as needed.
  date: 'YYYY-MM-DD'
  language: 'en-US'
# Language codes can be found here:
# https://www.loc.gov/standards/iso639-2/php/code_list.php
  rights: 'Rights / License statement'
# This rights statement will appear in the
# footer block in the Manifold reader
  description: 'Brief abstract / description'
# The description can be set to appear
# in the Texts content block  
  creators:
    - name: 'Author One'
    - name: 'Author Two'
# You can add more names as needed.
# This creator/contributor model is
# built off the epub spec.
  contributors:
    - name: 'Contributor One'
    - name: 'Contributor Two'
# You can add more names as needed.
toc:
# This is where you tell Manifold
# what the Text is made of and how
# it should be ordered.
  - label: 'Chapter 1. The Eve of the War'
# A label decsribes the title of a section.
# Be sure to enclose these with single quotes. 
    source_path: part_01.md
# The source path tells Manifold where to
# find the code it will ingest: in the zip
# archive or from a url. These are case
# sensitive. It's easy for this to go sideways
# with a simple misspelling.
    start_section: true
# The start section attribute is optional
# and just tells Manifold what section
# to open the Manifold reader to.
    children:
# Children describe nested TOC elements
# using the same attributes an additional indent.
      - label: 'Chapter 1. The Eve of the War'
        source_path: chapter_01.docx
# You can nest files or sections of files within
# already nested components if needed. 
        children:
          - label: 'A Heading within the Parent File'
            source_path: chapter_01.docx#heading_01
      - label: 'Chapter 2. The Falling Star'
        source_path: chapter_02.docx
      - label: 'Chapter 3. On Horsell Common'
        source_path: chapter_03.html
```

On first glance this feels overwhelming, but for as many lines as we see, there are basically two parts to this file: the `meta` section and the `toc`. Let’s consider each in turn:

### Meta Attributes

The **meta** component of the manifest provides Manifold with basic information about the Text (as a whole) you are asking the system to create: What is its title, who authored it, what language is it written in, etc. The full complement of metadata properties this section supports are:

- title
- date
- language
- rights
- description
- creators
- contributors

The only required element in this section is **title**; the rest are optional. And as mentioned in the template, it is best to surround the values you provide for each of these elements in single (or double) quotation marks.

:::tip A Word about Quotation Marks
If you have a title or a description, say, that contain internal quotation marks, make sure they are ***not*** standard straight quotation marks but instead true “curly” marks. Otherwise you will likely get an error. Straight quotation marks are meant to surround content in a YAML file. Internal marks of the same kind will prevent the file from being parsed correctly.

This is correct, with a curly mark indicating the possessive:

```yml
  title: 'Dracula’s Guest and Other Weird Tales'
```

Having a straight mark to indicate the possessive will cause problems; the system will think the title ends with the *a* at the end of *Dracula* and then find the rest of the line invalid:

```yml
  title: 'Dracula's Guest and Other Weird Tales'
```

This concern tends to crop up for the **title** and **description** sections the most.
:::

### TOC Components

The second part of the manifest file, the **TOC**, is where you list for Manifold all of the different files you are asking the system to combine together in the order in which they should appear.

Let’s step back for a moment. In Manifold, a Text is something that you open to read in the Manifold Reader. Every Manifold Text is made up of one or more Text Sections. A Text Section is the part of a Text that is contained in the Reader at any one time and which correlates specifically to one source file.

If I load one Word Document into Manifold, the result will be one Text with one Text Section. That Text Section might be one line long or a thousand paragraphs (though please don’t do that; your readers won’t thank you). Likewise, if I use a manifest to load two Word Documents, I’ll have one Text with two Text Sections.

Within Manifold, you experience the boundaries of Text Sections by scrolling down the page and clicking on the **Next** button at the bottom of the page. That **Next** button denotes the end of one section and the path to start the one following.

So what we are doing here in the TOC section is to list out for Manifold each Text Section that the system will then synthesize into one Text.

Each listing is made up of two elements, a **label** and a **source_path**, both of which are required for every listing.

1. The **label** corresponds to the title of that section. In the *War of the Worlds* example we’ve been using here, the listing for the first chapter would have a **label** with a value of `Chapter 1. The Eve of the War`.

   It’s important to note that the title itself will not automatically appear in the Manifold Reader at the top of the section. By including the title here, we have only told Manifold the name of the section as it should appear in the **Contents** dropdown within the Manifold Reader. If you want the title to appear as the first bit of text for this section, you will need to make sure it is included in the body of the document you are uploading.

   As we did in the **meta** section above, it is best practice to enclose label values within quotation marks and convert any internal quotation marks to the curly variety:

   ```yml
   - label: 'Chapter 1. The Eve of the War'
   ```

2. The **source_path** is the space where you tell Manifold where to find the file that contains the content for the section. The most common value you will include here will be the pathway to the file in your manifest folder ***or*** the URL for a Google Doc that has privacy settings that allow it to be viewed publicly.

  Using our *War of the Worlds* example again, the **source_path** value I would include for the first chapter would be `chapter_01.docx`. I can simply list the filename here because that chapter 1 file is in the same folder (or directory) as my manifest YAML file is. If I had tucked the chapter 1 file into a subfolder, then I would reference it here in the same way you call a media file from within a source text. For example, if I tucked the chapter 1 file in a subfolder called `texts` my value here would instead be `texts/chapter_01.docx`.

  Remember: spelling and case matter here. If the name of the file and the value you save in this space don’t match **exactly**, the system will throw an error. Likewise, you also need to include the file extension at the end of the filename (i.e., .html, .md, .docx). If you don’t, yep, you’ll get an error.

  For Google Docs you need only include the URL for the Google Doc that appears in your browser’s address bar, like this:

  ```yml
  source_path: https://docs.google.com/document/d/1bTY_5mtv0nIGUOLxvltqmwsrruqgVNgNoT2XJv1m5JQ/edit?usp=sharing
  ```

  In situations where you are using *only* Google Docs to make up your manifest, 

### Nesting Elements

<!-- Discuss how to add ids to elements in MD/HTML as well as in Google/Word (insert bookmarks: in Word you can define an ID; in Google it will provide a link to use) and then how to reference them from the Manifest -->

### Validating Your File
<https://jsonformatter.org/yaml-validator> YAML Validator  
<https://codebeautify.org/yaml-validator/> YAML Validator

<!-- Consider adding in format-specific walkthroughs for HTML, MD, Word, and Google Docs. -->

## Ingesting Your Manifest

<!-- Creating the ZIP archive. -->