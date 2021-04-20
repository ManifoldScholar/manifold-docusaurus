---
id: ingestion_settings
title: Ingestion Settings
sidebar_label: Ingestion Settings
---

:::location
Manifold’s **Ingestion Settings** live in the backend, nested as a submenu of **Settings**. Only users logged in with **Admin** credentials can access this view.
:::

## Global Ingestion Styles

Styles entered into this code editor are applied to each new Text at the time of ingestion, regardless of the Text’s source format, and saved to the resulting Text record as a User Created stylesheet labelled “Global Styles” (see [Styles](../../backend/texts.md#styles)).

The “Global” stylesheets that are associated with a Text are updated during the reingest process to match the values saved here. Additional User Created stylesheets saved to Text records maintain their same relative order of precedence and are applied last, unless they are manually reordered.

## Mammoth Style Map

During Text ingestion, Manifold relies on a javascript library called [Mammoth](https://github.com/mwilliamson/mammoth.js) to convert Word’s DOCX format to HTML, which the system renders in the Reader. By default, the conversion process transforms headings, character styles, tables, lists, notes, and links that have been styled using Word’s built-in Styles panel to basic HTML.

Using this code editor, it is possible to refine those transformations and map custom Word styles to HTML class attributes, which will then be styled according to the rules defined by the **Global Ingestion Styles**.

Let’s consider a simple example of a Word document that uses the paragraph style `paft` to describe paragraphs that follow headings and the character style `tnw` to refer to proper titles or names of works. The **Mammoth Style Map** would include these two lines:

```json
p[style-name='paft'] => p.paft
r[style-name='tnw'] => span.tnw
```

The `p` and `r` at the start of those lines refer to paragraph and character styles (or ”runs”), respectively. They are followed by the name of the style as it is in the Word document, and then by the HTML attribute they are to be mapped, in this case a paragraph with a class value of `paft` and a span with a class of `tnw`, resulting in HTML that would look like this:

```html
<p class="paft">John Wyndam begins <span class="tnw">The Day of 
the Triffids</span> perfectly: “When a day that you happen to 
know is Wednesday starts off by sounding like Sunday, there 
is something seriously wrong somewhere.”</p>
```

With style rules for `.paft` and `.tnw` in the **Global Ingestion Styles**, the rendering of these elements can be specifically controlled.

See [Mammoth’s documentation](https://www.npmjs.com/package/mammoth#writing-style-maps) for more detailed information about the formatting and structure of Style Maps. 