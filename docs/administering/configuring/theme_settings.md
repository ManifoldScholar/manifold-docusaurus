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
We suggest designing your favicon at either 16 × 16 px or 32 × 32 px and seeing which works best. It is important to note that **Manifold will crop the favicon to a square.**
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

### Accent Color

The Accent Color is your instance’s primary color and the base upon which secondary colors in the application are derived. By default the value is Manifold green: `#52E3AC`.

You can override that here and use a color that matches your existing visual identity. When you do so, links, icons, and buttons throughout the instance will change to either match the accent color you input exactly or, for the sake of contrast, be selected by the system to pair well with your choice.

<Spec title="Accepted Color Formats" subtitle="Color values can be supplied in one of the following formats.">

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

:::note
If no value is entered here, the hover color for links in the Header defaults to the Accent Color value.
:::

#### Header Background Color

The Header Background defaults to white, `ffffff`. The color saved here will span the entire width of the Header.

## Typography

### Typekit ID

Manifold was designed to employ two specific TypeKit fonts throughout the application: Freight Text Pro and Sofia Pro.

If you have a valid Typekit account, select the following options from your Typekit dashboard and then save your Typekit ID to this field.

<Spec title="Typekit Account Settings">

| Font             | Font Selection                                    | Character Set                   |
|------------------|---------------------------------------------------|---------------------------------|
| Freight Text Pro | `Light`, `Book`, `Book Italic`                    | `Default`, `OpenType Features`  |
| Sofia Pro        | `Light`, `Regular`, `Medium`, `Semi Bold`, `Bold` | `Default`, `OpentType Features` |

**Diacritics**. Selecting `All Characters` instead of `Default` will make available to Manifold the full range of diacritical characters included in each font. This will cause pages to load slower, but in most cases the effect will be negligible.
</Spec>

:::note
When this field is left blank, Manifold will default to the open SIL fonts Trueno and Aleo.
:::

### Custom Fonts

There are currently no means to load custom fonts into the application.

## Top Bar

The Top Bar is an optional navigation element that sits atop the Header. The Bar is made up of a ribbon that spans the width of the screen and one line of text, all of which functions as a hyperlink. You can configure the Bar to display generally throughout your instance, for only select Projects, or for those Projects configured for Standalone Mode.

You can use the Top Bar to point readers to a policy page, a Project Collection, a class syllabus, a sale on your website, your Manifold homepage, site news—wherever you want to call special attention.

:::note
The Top Bar won't display unless both the text and URL are provided.
:::

### Text

What text you enter here will serve as the default Top Bar message for your instance. This text can be altered on a Project-by-Project basis in cases where this general notice may not suit. See the [Project settings](../../backend/projects.md) page for more.

:::note
This field is *not* Markdown/HTML enabled and only accepts one line of text.
:::

### Color

You can customize the color of the Top Bar using the same syntax described above for the `Accent Color`: CSS color keyword, Hexadecimal, RGB, RGBA, HSL, HSLA, or HWB. When left blank the color will revert to the default, Manifold green: `#H2E3AC`.

:::note
Unlike the text, the Top Bar's color value *cannot* be adjusted for individual projects.
:::

### URL

The Top Bar is meant to function as a hyperlink. The URL you enter here will serve as the target link for any reader who clicks on the Bar.

Like the Top Bar text, the URL entered here can be adjusted on a per-Project basis.

### Top Bar Display Mode

This dropdown is where you configure if and where the Top Bar will display on your instance.

In the **Disabled** state the Top Bar will not display. However you can override this setting and set the Top Bar to appear for individual projects.

When **Always Visible** is selected, so long as *both* the text and URL have been provided, the Top Bar will display throughout your instance. Project-level Top Bar settings will override the settings entered here.

The Top Bar will appear on just those projects that are enabled for [Standalone Mode](../../backend/projects.md) when **Only Visible in Standalone Mode** is chosen. Project-level overrides are still possible with this setting selected.

## Content

Manifold displays information about what information it collects from users when they first come to an instance (or in fresh sessions) and on the site’s [Privacy page](../../using/privacy_settings.md). From this view you can adjust the copy the system displays in those views to better match the tone of your instance or to provide additional context.

### Signup

The first three fields in this section provide the means to adust the body text that appears in the Manifold account signup modal, which displays for users who select `Need to sign up?` from the [Log In screen](../../using/your_account.md). That view can also be directly accessed at `https://{instance-domain}/signup`.

These fields are plain-text only; none of them accepts Markdown syntax. The format is also somewhat rigid, with a heading and two paragraphs expected.

<dl>
    <dt>Signup Terms and Conditions View Header</dt>
    <dd>This is the heading for the section. The system default reads, “First things first...”.</dd>
    <dt>Signup Terms and Conditions View First Paragraph</dt>
    <dd>Our approach is to use this space to briefly detail what information the system collects. Some instances may prefer to provide more information to their users. The system default reads, “When you create an account, we will collect and store your name and email address for account management purposes.”</dd>
    <dt>Signup Terms and Conditions View Second Paragraph</dt>
    <dd>The final paragraph displayed on the signup screen discusses various user interactions and how they are stored. The configuration settings mentioned in the last sentence refer to whether an instance has its <a href="/manifold-docusaurus/docs/administering/configuring/properties#disable-internal-analytics">internal analytics enabled</a>. The system default reads, “This site will also store the annotations and highlights you create on texts, and it will keep track of content that you've starred. Depending on its configuration, this site may store anonymous data on how the site is being used.”</dd>
</dl>

The frontend view where this information displays also includes a checkbox for users to confirm that in creating an account on your instance they are also agreeing to your privacy policy and terms and conditions, with links to each of those pages on your instance.

The content of your privacy policy and terms and conditions can be adjusted through the [Pages view in the Records section](../../backend/pages.md) of the Manifold backend.

### Account Data

The second two fields under the Content header concern user account data and display on the site’s Data Use page, accessible from a user’s [Privacy settings page](../../using/privacy_settings.md) or directly from: `https://{instance-domain}/data-use`.

<dl>
    <dt>Account Data Use Header</dt>
    <dd>Text entered into this field serves as the heading for this section and is meant to convey to users what data Manifold collects from them. The system default reads “What data does Manifold store about me?”</dd>
    <dt>Account Data Use Copy (Markdown)</dt>
    <dd>By default the system describes the information it collects from users in three sections, each with their own heading. Here you can adjust the order and form of that content to better meet the needs of your users, either in expanding on this information or stressing certain elements that may be of particular interest. Currently the base text reads as follows: “Manifold stores anonymous data about what pages users access and how much time they spend on those pages. There is no personally identifiable information stored in relation to usage data. When you create a highlight, annotate a text, or write a comment, Manifold stores it in the database. Manifold stores basic information about each reading group, the content that has been collected in the group, and the group's members.” This text box, as the field label suggests, does accept Markdown syntax.</dd>
</dl>

### Cookies

On a user’s first visit to an instance—or on a fresh load—Manifold will provide options for which cookies, if any, the user is willing to accept. The details of those options, discussed in the [Privacy Settings section of our documentation](../../using/privacy_settings.md), appear to users in a ribbon at the bottom of the instance’s homepage or a directly-accessed project landing page. 

The last two fields in this section allow you to adjust the text that displays in that ribbon. This gives you the means to add context for your readers to better understand the choices the system is offering.

<dl>
    <dt>Cookies Banner Header</dt>
    <dd>This field is used to adjust the heading for the ribbon, which by default reads as “Manifold uses cookies.”</dd>
    <dt>Cookies Banner Body (Markdown)</dt>
    <dd>This field <em>briefly</em> describes how Manifold uses cookies for the purpose of analytics. We suggest keeping the descriptions in this space short. For users who are unsure if they are okay with such use, they can use the <b>Settings</b> button to configure or decline all cookies. The link to the Privacy Settings page in the default description takes users to their own specific user settings, accessible from the User dropdown in the Manifold top menu; it is not meant to link to the instance’s privacy policy. If you feel additional information is necessary, you could build it into the Data Use page (discussed in the previous section), which a user’s Privacy Settings page links to. The default message for this fields reads in full, “We use cookies to analyze our traffic. Please decide if you are willing to accept cookies from our website. You can change this setting anytime in Privacy Settings.”</dd>
</dl>