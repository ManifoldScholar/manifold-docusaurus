---
id: theme_settings
title: Theme Settings
sidebar_label: Theme Settings
---

import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
The fields discussed in this section can be accessed from the Manifold backend by selecting **Settings** from the main menu and then **Theme** in the submenu.

Only users logged in with **Admin** credentials can access this view.
:::

## Branding

Manifold allows you to adjust the logos and colors of your instance as a means to match your existing visual identity on the web.

The options described in this section globally affect your instance. More localized opportunities for branding are possible within individual Projects, Project Collections, Pages, and Features.

### Website URL

This field works in concert with the Footer Logo described below. When a URL is entered here, the Footer Logo opens a new browser tab to that location. If this field is left blank, the Footer Logo will render as a static graphic.

:::note
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
    title="Mobile Header Logo Specs"
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
    title="Footer Logo Specs"
    items={[
        { key: "Max-Width", value: "325px" },
        { key: "Max-Height", value: "200px" },
        { key: "Format", value: defaultImageFormats },
    ]}
/>


### Favicon

The favicon is the square icon that appears in your browser’s title bar or the page’s tab. This icon can mimic that of the Mobile Header Logo or be of its own distinct design.

<Spec
	title="Favicon Specs"
	items={[
		{ key: "Dimensions", value: "1:1" },
		{ key: "Format", value: defaultImageFormats },
	]}
/>

:::tip
We suggest designing your favicon at either 16 × 16 px or 32 × 32 px and seeing which works best. It is important to note that **Manifold will crop the favicon to a square**.
:::

### Logo Styles

You can adjust the placement of the Header Logo by entering a JSON style object in this field. This gives you the ability to visually balance the logo with the navigation elements of the Manifold Header.

<Spec title="Logo Styles Syntax">

The instruction should be surrounded by braces, with the parameters enclosed in quote marks and separated by a comma. Units are in pixels, with both positive and negative values accepted.

For example, `{"left": 100, "top": 100}` would push the logo 100 pixels to the right and 100 pixels down from its default location in the header.

</Spec>

### Header Navigation Offset

The Manifold header comprises the Header Logo and a series of navigational elements, beginning with the home link and continuing toward the right through the user avatar.

Those nav elements all maintain the same vertical position. By entering a numeric value in this field, you can adjust how close or far away they are from the top of the page.

This control is meant to provide you with another means to adjust the visual balance of the items contained in the Header.

<Spec title="Header Navigation Offset Syntax">

An entry of `5` will move the nav elements down five pixels. Entering `-5` will move them them up five pixels from their default position.

</Spec>

## Colors

The fields in this section provide the means to modestly adjust the color theme applied to your instance. As noted below, the **Accent Color** field adjusts colors throughout the instance, while the remaining three are all specific to the header menu that appears on the instance’s homepage and other transactional pages across the instance.

When selected, each of these fields opens a color picker tool that includes sliders for color hue and opacity (or alpha channel), and a field to directly input a color value in any of the accepted formats note below. The color picker also includes three buttons labeled **Hex**, **RGB**, and **HSL** that correspond to those respective color spaces. So long as you include the proper notation and punctuation, you can use the input and of the following values into the input field, regardless of whether it matches the current color space selection. The system will simply translate your values to the current color space. For example, if the color space is set for HSL, and you input `Blue` into the input field, the values that correspond to your CSS color keyword will appear in the input field: `hsl(240, 100%, 50%)`. If you select the button labeled **Clear**, the system will void your adjustments and return to the system default.

<Spec title="Accepted Color Formats" subtitle="Color values can be supplied in one of the following formats.">

| Format            | Example Input             |
| ----------------- | ------------------------- |
| CSS Color Keyword | `Red`, `Green`, `Blue`    |
| Hexadecimal       | `#00FF00`                 |
| RGB               | `rgb(0,0,255)`            |
| RGBA              | `rgba(255, 99, 71, 0.8)`  |
| HSL               | `hsl(0, 100%, 25%)`       |
| HSLA              | `hsla(9, 100%, 64%, 0.6)` |


</Spec>

### Accent Color

The Accent Color is your instance’s primary color and the base upon which secondary colors in the application are derived. By default the value is Manifold green: `#52E3AC`.

You can override that here and use a color that matches your existing visual identity. When you do so, links, icons, and buttons throughout the instance will change to either match the accent color you input exactly or, for the sake of contrast, be selected computationally by the system to pair well with your choice.

### Header Foreground Color

The colors of the links and icons in the Header display the color assigned here. By default they will render as light gray with the value `#696969`.

### Header Foreground Active Color

The text of the page name (Home, Projects, Following) a reader is currently viewing *or* hovering over displays with the color assigned here. The default is dark gray with the value `#363636`.

:::note
If no value is entered here, the hover color for links in the Header defaults to the Accent Color value.
:::

### Header Background Color

The Header Background defaults to white, `ffffff`. The color saved here will span the entire width of the Header.

### Header Preview

The preview field shows a mockup of the Manifold menubar, staging all your color selections from this section so you can get a sense of how they will look and work together on the site. The preview will update after you input a color and move your focus away from that field.

## Typography

### Typekit ID

Manifold was designed to employ two specific TypeKit fonts throughout the application: Freight Text Pro and Sofia Pro.

If you have a valid Typekit account, select the following options from your Typekit dashboard and then save your Typekit ID to this field.

<Spec title="Typekit Account Settings">

| Font             | Font Selection                                    | Character Set                   |
| ---------------- | ------------------------------------------------- | ------------------------------- |
| Freight Text Pro | `Light`, `Book`, `Book Italic`                    | `Default`, `OpenType Features`  |
| Sofia Pro        | `Light`, `Regular`, `Medium`, `Semi Bold`, `Bold` | `Default`, `OpentType Features` |

**Diacritics**. Selecting `All Characters` instead of `Default` will make available to Manifold the full range of diacritical characters included in each font. This will cause pages to load slower, but in most cases the effect will be negligible.
</Spec>

:::note
When this field is left blank, Manifold will default to the open SIL fonts Trueno and Aleo.
:::

### Custom Fonts

There are currently no means to load custom fonts into the application.