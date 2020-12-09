---
id: theme_settings
title: Theme Settings
sidebar_label: Theme Settings
---

import CodeBlock from "@theme/CodeBlock";
import Spec from "@theme/Spec";
const defaultImageFormats = "GIF, JPEG, JPG, PNG";


## Branding

Manifold allows you to adjust the logos and colors of your instance as a means to match your existing visual identity on the web.

The options described in this section globally affect your instance. More localized opportunities for branding are possible within individual Projects, Project Collections, Pages, and Features.

### Website URL

This field works in concert with the Footer Logo described below. When a URL is entered here, the Footer Logo opens a new browser tab to that location. If this field is left blank, the Footer Logo will render as a static graphic.

:::info
When there is no Footer Logo present, the URL described here will have no effect.
:::

### Header Logo

This field is intended to capture your primary logo or brand mark. The image saved here replaces the default Manifold icon that appears on the left side of the Manifold Header.

<Spec
    title="Header Logo Specs"
    items={[
        { key: "Width", value: "flexible" },
        { key: "Max-Height", value: "60px" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>

### Mobile Header Logo

The logo saved to this space serves the same function as the Header Logo; in this case, however, it is expected to be formatted for viewing on mobile devices and systems with smaller screens.

When a reader’s viewport is less than 760 px wide, the image saved here will replace the Header Logo in the Manifold Header.

<Spec
    title="Header Logo Specs"
    items={[
        { key: "Max-Width", value: "175px" },
        { key: "Max-Height", value: "26px" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>


:::tip
Mobile Logos are best prepared as graphic-only elements, without text, in a 1:1 ratio, though Manifold does not restrict files to those recommendations.
:::

### Footer Logo

The Footer Logo appears on the right side of the Manifold Footer. This logo can replicate the Header Logo or serve as a distinct branding element.

<Spec
    title="Header Logo Specs"
    items={[
        { key: "Max-Width", value: "325px" },
        { key: "Max-Height", value: "200px" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>


### Favicon

The favicon is the square icon that appears in your browser’s title bar or the page’s tab. This icon can mimic that of the Mobile Header Logo or be of its own distinct design.

#### Specs
**Dimensions**: 1:1
**Format**: GIF, JPEG, JPG, PNG

:::tip
We suggest designing your favicon at either 16 × 16 px or 32 × 32 px and seeing which works best. It is important to note that **Manifold will crop the favicon to a square.**
:::

### Logo Styles

You can adjust the placement of the Header Logo by entering a JSON style object in this field. This gives you the ability to visually balance the logo with the navigation elements of the Manifold Header.

#### Syntax

The instruction should be surrounded by braces, with the parameters enclosed in quote marks and separated by a comma. Units are in pixels, and both positive and negative values are accepted.

For example, `{"left": 100, "top": 100}` would push the logo 100 pixels to the right and 100 pixels down from its default location in the header.

### Header Navigation Offset

The Manifold header comprises the Header Logo and a series of navigational elements, beginning with the home link and continuing toward the right through the user avatar.

Those nav elements all maintain the same vertical position. By entering a numeric value in this field, you can adjust how close or far away they are from the top of the page.

This control is meant to provide you with another means to adjust the visual balance of the items contained in the Header.

#### Syntax

An entry of `5` will move the nav elements down five pixels. Entering `-5` will move them them up five pixels from their default position.

### Accent Color

The Accent Color is your instance’s primary color and the base upon which secondary colors in the application are derived. By default the value is Manifold green: `#52E3AC`.

You can override that here and use a color that matches your existing visual identity. When you do so, links, icons, and buttons throughout the instance will change to either match the accent color you input exactly or, for the sake of contrast, be selected by the system to pair well with your choice.


<Spec title="Color Formats" subtitle="Color values can be supplied in one of the following formats.">

| Format            | Example Input             |
|-------------------|---------------------------|
| CSS Color Keyword | `Red`, `Green`, `Blue`    |
| Hexadecimal       | `#00FF00`                 |
| RGB               | `rgb(0,0,255)`            |
| RGBA              | `rgba(255, 99, 71, 0.8)`  |
| HSL               | `hsl(0, 100%, 25%)`       |
| HSLA              | `hsla(9, 100%, 64%, 0.6)` |
| HWB               | `hwb(50, 35%, 2%)`        |

</Spec>

### Header Colors

You can adjust the colors of the links, icons, and background of the Manifold header using the same syntax as the Accent Color, described above.

#### Header Foreground Color

The colors of the links and icons in the Header display the color assigned here. By default they will render as light gray with the value `#696969`.

#### Header Foreground Active Color

The text of the page name (Home, Projects, Following) a reader is currently viewing *or* hovering over displays with the color assigned here. The default is dark gray with the value `#363636`.

:::info
If no value is entered here, the hover color for links in the Header defaults to the Accent Color value.
:::

#### Header Background Color

The Header Background defaults to white, `ffffff`. The color saved here will span the entire width of the Header.

## Typography

### Typekit ID

Manifold was designed to employ two specific TypeKit fonts throughout the application: Freight Text Pro and Sofia Pro.

If you have a valid Typekit account, select the following options from your Typekit dashboard and then save your Typekit ID to this field.

When this field is left blank, Manifold will default to the open SIL fonts Trueno and Aleo.

#### Freight Text Pro

| Font Selection | Character Set     |
| -------------- | ----------------- |
| Light          | Default           |
| Book           | OpenType Features |
| Book Italic    |                   |

#### Sofia Pro

| Font Selection | Character Set     |
| -------------- | ----------------- |
| Light          | Default           |
| Regular        | OpenType Features |
| Medium         |                   |
| Semi Bold      |                   |
| Bold           |                   |

#### Diacritics

In Typekit, you have the option under the `Character Set` heading to choose `All Characters` instead of `Default`. Selecting `All Characters` will make available to Manifold the full range of diacritical characters included in each font. This will cause pages to load slower, but in most cases the effect will be negligible.

### Custom Fonts

There are currently no means to load custom fonts into the application.

## Top Bar

The Top Bar is an optional navigation element that sits atop the Header. The Bar is made up of a ribbon that spans the width of the screen and one line of text, all of which functions as a hyperlink. You can configure the Bar to display generally throughout your instance, for only select Projects, or for those Projects configured for Standalone Mode.

You can use the Top Bar to point readers to a policy page, a Project Collection, a class syllabus, a sale on your website, your Manifold homepage, site news—wherever you want to call special attention.

:::info
The Top Bar won't display unless both the text and URL are provided.
:::

### Text

What text you enter here will serve as the default Top Bar message for your instance. This text can be altered on a Project-by-Project basis in cases where this general notice may not suit. See the [Project settings](../../backend/projects.md) page for more.

:::info
This field is ***not*** Markdown/HTML enabled and only accepts one line of text.
:::

### Color

You can customize the color of the Top Bar using the same syntax described above for the `Accent Color`: CSS color keyword, Hexadecimal, RGB, RGBA, HSL, HSLA, or HWB. When left blank the color will revert to the default, Manifold green: `#H2E3AC`.

:::info
Unlike the text, the Top Bar's color value ***cannot*** be adjusted for individual projects.
:::

### URL

The Top Bar is meant to function as a hyperlink. The URL you enter here will serve as the target link for any reader who clicks on the Bar.

Like the Top Bar text, the URL entered here can be adjusted on a per-Project basis.

### Top Bar Display Mode

This dropdown is where you configure if and where the Top Bar will display on your instance:

- `Disabled`. In this state the Top Bar will not display. However you can override this setting and set the Top Bar to appear for individual projects.
- `Always Visible`. So long as ***both*** the text and URL have been provided, the Top Bar will display throughout your instance. Project-level Top Bar settings will override the settings entered here.
- `Only Visible in Standalone Mode`. The Top Bar will appear on just those projects that are enabled for [Standalone Mode](../../backend/projects.md). Project-level overrides are still possible with this setting selected.