---
id: content_settings
title: Content Settings
sidebar_label: Content Settings
---

import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
The fields discussed in this section can be accessed from the Manifold backend by selecting **Settings** from the main menu and then **Content** in the submenu.

Only users logged in with **Admin** credentials can access this view.
:::

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

## Signup

The three fields in this section provide the means to adust the body text that appears in the Manifold account signup modal, which displays for users who select **Need to sign up?** from the [Log In screen](../../using/your_account.md). That view can also be directly accessed at `https://{instance-domain}/signup`.

These fields are plain-text only; none of them accepts Markdown syntax. The format is also somewhat rigid, with a heading and two paragraphs expected.

The frontend view where this information displays also includes a checkbox for users to confirm that in creating an account on your instance they are also agreeing to your privacy policy and terms and conditions, with links to each of those pages on your instance.

The content of your privacy policy and terms and conditions can be adjusted through the [Pages view in the Records section](../../backend/pages.md) of the Manifold backend.

### Terms and Conditions Header

This is the heading for the section. The system default reads, “First things first...”.

### Terms and Conditions First Paragraph

Our approach is to use this space to briefly detail what information the system collects. Some instances may prefer to provide more information to their users. The system default reads,

> “When you create an account, we will collect and store your name and email address for account management purposes.”

### Terms and Conditions Second Paragraph

The final paragraph displayed on the signup screen discusses various user interactions and how they are stored. The configuration settings mentioned in the last sentence refer to whether an instance has its [internal analytics enabled](../../administering/configuring/properties.md#disable-internal-analytics). The system default reads,

> “This site will also store the annotations and highlights you create on texts, and it will keep track of content that you've starred. Depending on its configuration, this site may store anonymous data on how the site is being used.”

## Data Use

The first two fields in this section, **Page Header** and **Page Copy**, concern user account data and display on the site’s Data Use page, accessible from a user’s [Privacy settings page](../../using/privacy_settings.md) or directly from: `https://{instance-domain}/data-use`.

The last two fields speak to the site’s use of cookies. On a user’s first visit to an instance—or on a fresh load—Manifold will provide options for which cookies, if any, the user is willing to accept. The details of those options, discussed in the [Privacy Settings section of our documentation](../../using/privacy_settings.md), appear to users in a ribbon at the bottom of the instance’s homepage or a directly-accessed project landing page. The fields labeled **Cookies Banner Header** and **Cookies Banner Body** allow you to adjust the text that displays in that ribbon. This gives you the means to add context for your readers to better understand the choices the system is offering.

### Page Header

Text entered into this field serves as the heading for this section and is meant to convey to users what data Manifold collects from them. The system default reads “What data does Manifold store about me?”

### Page Copy

By default the system describes the information it collects from users in three sections, each with their own heading. Here you can adjust the order and form of that content to better meet the needs of your users, either in expanding on this information or stressing certain elements that may be of particular interest. Currently the base text reads as follows: “Manifold stores anonymous data about what pages users access and how much time they spend on those pages. There is no personally identifiable information stored in relation to usage data. When you create a highlight, annotate a text, or write a comment, Manifold stores it in the database. Manifold stores basic information about each reading group, the content that has been collected in the group, and the group's members.” This text box, as the field label suggests, does accept Markdown syntax.

### Cookies Banner Header

This field is used to adjust the heading for the ribbon, which by default reads as “Manifold uses cookies.”

### Cookies Banner Body

This field *briefly* describes how Manifold uses cookies for the purpose of analytics. We suggest keeping the descriptions in this space short. For users who are unsure if they are okay with such use, they can use the **Settings** button to configure or decline all cookies. The link to the Privacy Settings page in the default description takes users to their own specific user settings, accessible from the User dropdown in the Manifold top menu; it is not meant to link to the instance’s privacy policy. If you feel additional information is necessary, you could build it into the Data Use page (discussed in the previous section), which a user’s Privacy Settings page links to. The default message for this fields reads in full, “We use cookies to analyze our traffic. Please decide if you are willing to accept cookies from our website. You can change this setting anytime in Privacy Settings.”