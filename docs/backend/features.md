---
id: features
title: Features
sidebar_label: Features
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Spec from "@theme/Spec";

:::location
The Features detail views discussed in this section are accessed by selecting Records from the main menu and then Features in the submenu while in the Manifold backend.

Only users logged in with **Admin**, **Editor**, or **Marketeer** credentials can access this view.
:::

The Features view provides controls to customize the optional Feature block that is positioned below the Manifold header on the Library landing page.

From the main Features page you can edit existing Features (the Welcome to Manifold default Feature is included with all new installs) or add news ones. To edit an existing Feature, click on its name, or click the **Create a new feature** button to create a new Feature content block.

The various fields available to new and existing Features are described in detail here.

:::note
All the display text fields discussed in this section are enabled for Markdown formatting.
:::

# Feature Preview

The Feature Preview is not an editable field. Instead, it allows users to get a sense of how the settings they input in the following will render. Elements concerning the Foreground, Background, and Markdown syntax will not appear in the preview until the Feature is saved.

# General

## Published

The Published slider determines if a Feature is promoted to the home page. Toggling a slider on for one Feature will not toggle it off for other Features. Instead, if multiple Features have the Published toggle active, Manifold will select a random Feature from among them and show it on the home page. A new random Feature will be selected every time the home page loads. Toggle this field off for those Features you don’t want to be active.

If no Features have the Published toggle activated, Manifold will not include any Feature on the Library landing page, and instead promote either the Library or the first Project Collection to the top of the page.

## Header

The Header serves text with the most prominence. It could be used to name your institution or instance or as a means to provide a brief welcome.

## Subheader

If your instance had a subtitle or if you wanted to extend the context of the welcome from the header, this field will display the text on a slightly smaller scale from the Header.

## Body

The Body text allows the user a means to describe their instance and projects in a bit more detail. We recommend limiting this field to a moderately sized paragraph (roughly sixty-five words), though the area will expand vertically to accommodate all of the copy entered here. If more than a brief paragraph is required to orient your readers, consider adding an [About page](../backend/pages.md) and using the Link Text and Link URL fields discussed below to point readers to it.

## Link Text

The Link Text field will include a link to another page below the body text. The text entered into the Link Text field describes the text that readers will click on. If there is no URL provided in the Link URL field, the Link Text will not appear.

:::important
The system is only setup to allow for one custom link below the body text.
:::

## Link URL

This field pairs with the Link Text above. Here you can enter the complete URL for the page to which you want to direct readers. The page can exist outside of Manifold or be one created on the site through the [Pages](../backend/pages.md) menu.

## Include Sign Up Button

The "Include sign up button" slider determines if a **Sign Up** link will be included in your Feature. If the slider is toggled on and a user is not signed in, a Sign Up link will appear allowing them to [create an account](../using/your_account.md#signing-up) on your instance.

## Style

The Style dropdown allows users to choose from two existing Feature themes. The default theme, Dark Background, serves the header and link text in white against a Manifold green background. The Light Background option reverses that, with header and link text in Manifold green against a white background. With both themes the body text appears in black. You can customize the color scheme more specifically with the following fields: Background Color, Foreground Color, and Header Color.

:::note
This dropdown is the only way to control the color of the link text, which can either be white or Manifold green.
:::

## Background Color

Entering a value in this field will change the Feature’s background color. Doing so will override the predefined color associated with the value selected in the Style dropdown. For details on the color values available to this field, see the [Formatting](features.md#formatting-color-values) section below.

If a background image is loaded, the value in this field will be overridden by the image.

## Foreground Color

This field controls the color of the Feature’s body text. If a value is entered here, it will override the predefined color associated with the value selected in the Style dropdown. For details on the color values available to this field, see the [Formatting](features.md#formatting-color-values) section below.

## Header Color

This field controls the color of the Feature’s header text. If a value is entered here, it will override the predefined color associated with the value selected in the Style dropdown. For details on the color values available to this field, see the [Formatting](features.md#formatting-color-values) section below.

### Formatting Color Values

The Background Color, Foreground Color, and Header Color fields accept standard HTML color names, as well as values in RGB, HEX, HSL, RGBA, and HSLA. For more on the names and values, see the HTML Color page on the [Mozzilla's Developer](https://developer.mozilla.org/en-US/docs/Web/HTML/Applying_color) website.

When input, values should be formatted as follows, replacing zeroes with figures associated with the color you are intending:

<Spec
    title="Value Format"
    items={[
        { key: "RGB", value: "rgb (0, 0, 0)" },
        { key: "HEX", value: "#000000" },
        { key: "HSL",	value: "hsl (0, 0%, 0%)" },
        { key: "RGBA", value:	"rgba (0, 0, 0, 0.0)" },
        { key: "HSLA", value: "hsla (0, 0%, 0%, 0.0)" },
    ]}
/>

For HEX values, users must include the hash symbol (#) in order for the system to properly interpret the value you have entered. Spaces are optional between numerical and percentage values for HSL, RGBA, and HSLA; commas are required.

## Background Image

This field allows users to replace the background color with an image appropriate to their instance. Files can be uploaded in the GIF, JPEG, JPG, PNG, or SVG formats and should be sized so the vertical is 600 px and the horizontal is no less than 2400 px wide: the area, which is anchored on the left, will expand to fill a user’s screen, so an image that can grow pretty wide to support larger screens would be ideal. A pattern that can repeat would also serve well in this spot.

The background area will grow (or shrink) vertically to accommodate the text entered in the [Body](features.md#body) field. The suggestions offered here are in keeping with Body text that is roughly sixty-five words.

## Foreground Image

This field allows a user to overlay the background with an image suited to their instance. Files can be uploaded in the GIF, JPEG, JPG, PNG, or SVG formats.

We offer no hard and fast guideline on size, as use and aesthetic will vary from user to user. We do suggest starting with an image between 200–400 px tall for a [Header](features.md#header) in keeping with the sizes suggested elsewhere in this section.

## Foreground Image Top Position

By default the Foreground Image is aligned vertically with the top of the [Header](features.md#header) text. A "null" value entered into the field will move the image so that its top aligns with the top of the background banner, with values increasing from zero moving it further down the page.

See the [Positioning Foreground Image Values](features.md#positioning-foreground-image-values) section below for the kinds of input this field allows.

## Foreground Image Left Position

By default the Foreground Image is aligned horizontally just to the right of the [Body](features.md#body) text. Entering positive values into this field will move the image further to the right; negative values will pull it toward (and eventually over) the [Body](features.md#body) text.

See the [Positioning Foreground Image Values](features.md#positioning-foreground-image-values) section below for the kinds of input this field allows.

## Positioning Foreground Image Values

Values can be entered into the Foreground Image Top and Left Position fields as CSS units, in both absolute or relative lengths. All units are accepted, save for the % unit. For more on CSS Units, see the [Mozzilla's Developer](https://developer.mozilla.org/en-US/docs/Web/CSS/color) website.

## Foreground Position Mode

This dropdown allows users to change where the positioning values entered above will be enacted from. If the default, **Relative**, is selected, the image will be adjusted from a starting point just to the right of the [Body](features.md#body) text and below the top of the background. If **Absolute** is chosen, the image will be moved relative to the top left corner of the screen.
