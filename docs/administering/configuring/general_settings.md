---
id: general_settings
title: General Settings
sidebar_label: General Settings
---

## About

This section allows you to define how your Manifold instance identifies itself to your users and provide descriptive information for search engines and web crawlers.

### How Do You Refer to Your Manifold Installation?

Manifold refers to itself in certain situations: when sending emails to users or when referencing specific components of the application. By default it will do so generically:

> Welcome to **Manifold**. Thanks for signing up.

> By creating this account, you agree to **Manifold**’s terms and conditions.

You can adjust that messaging to reflect your own identity. Use a name that defines how you talk about your instance.

### Default Page Title

Title text identifies the content of a web page. Text entered here will display in your browser’s title bar or the page’s tab for core Manifold pages (e.g., Home Page, Notification Settings, Manage Reading Groups). If this field is left blank the system will render the default: “Manifold Scholarship.”

On project pages the page title will automatically adjust to the name of the specific content being displayed.

:::tip
Page titles are considered by search engine algorithms in deciding the order of the results they return. Because search engines tend to truncate page titles after 55–60 characters, it is considered best practice to keep the title descriptive but brief.
:::

### Default Page Description

This description is meant to provide a brief summary of your instance’s content and purpose so that search engines can properly catalog and surface it in results. This description will usually be displayed as part of the result, beneath the page’s title and link.

:::tip
As a general rule, it is best to keep these brief—between 50 and 160 characters—without any internal formatting, just plain text.
:::

### Default Publisher and Place of Publication

Manifold displays metadata for Projects, Texts, and Resources. Names and places entered in these spaces will automatically populate the `Publisher` and `Publisher Place` fields for new projects, found in their Metadata sidebar and displayed in a project’s Metadata content block.

These fields are the electronic equivalent of publisher information traditionally found on title pages in print volumes.

:::note
Changing the content of these fields will not automatically update existing projects.
:::

## Footer

### Copyright

The Manifold footer, which spans the bottom of all core Manifold pages, includes a space where you can define the copyright information for the instance as a whole. 

The copyright symbol (©) will precede text entered in this field by default. If left blank, no default notice will appear.

:::info
In the Reader, Manifold displays the copyright information of specific Texts instead of the general copyright notice.
:::

### Social Sharing Message

Links to individual Resources and Resource Collections can be shared by readers directly to their personal Twitter or Facebook timelines.

Manifold will prepopulate those posts with the text entered here. If left blank, the system defaults to “Shared from Manifold Scholarship.”

In all cases the message will be followed the URL of the content being shared.

### Twitter Account and Facebook Page ID

These fields provide you the means to include links to your existing social media profiles in the Manifold Footer.

The `Twitter Account` field is expecting your Twitter username, with or without an ampersand.

The `Facebook Page ID` corresponds to the name that appears in the URL of your Facebook homepage. For example, the University of Minnesota Press Facebook homepage is `https://www.facebook.com/UMinnPress/`. The value to enter into Manifold then is `UMinnPress`.

When left blank, the Twitter or Facebook links will be absent from the footer.

### Contact Email

Manifold has a built-in contact form that readers can use to provide feedback directly to you through the application.

When an email address is included in this field, the link to the contact form, labeled as “Email,” will appear in the Manifold Footer.

Messages that readers compose and send through the contact form will be delivered by Manifold to the email address in this field.

:::caution
The instance’s [email settings](../../administering/configuring/email_settings.md) need to be configured before Manifold can deliver messages to you from readers that are using the contact form.
:::

## Behaviors

### Restrict Access to All Projects

By default all Manifold projects are freely available to read, even for those folks who haven’t created an account on your instance.

Engaging this toggle changes that default behavior. Now, every project on your Manifold will be closed. Readers will only be able to access a project’s content if you provide them an entitlement to that project, or if they are part of a Reading Group that has an entitlement to that project.

:::info
While it is possible to [override this setting for individual projects](../../backend/projects.md), so that some projects in your library are openly accessible to everyone, you cannot grant readers or reading groups a site-wide entitlement that allows them to read any or all projects on your instance.
:::

#### Restricted Access Notice Header and Body

When you enable `Restrict Access to All Projects`, Manifold will reveal two additional fields where you can message to readers why content is restricted and how they can gain access to it.

The `Restricted Access Notice Header` and `Body` text display below the project hero in a blue banner for only those readers who don’t have credentials to access the project. If left blank, the header message defaults to “Access to this project is restricted,” and the body message will read “Only users granted permission may view this project's texts, resources, and other content.”

:::tip
The `Restricted Access Notice Body` field honors Markdown formatting, so you can include in your messaging a link to a Manifold page or an external page that describes in detail how users can gain access to your content.
:::

### Disable Library Views

If you want to leverage the power of Manifold as part of your existing web presence, instead of having it run as potential competition for attention, you have the option to disable your main Manifold landing page and all associated pages that normally display your projects as a library of content.

When you put Manifold in this state, you can continue to focus your audience on your existing website, ushering them to specific Manifold projects directly from there.

When you toggle this setting on, Manifold will provide the following options for your consideration:

#### Enforce Standalone Mode for All Projects

If engaged, all projects will render in [standalone mode](../../backend/projects.md), overriding individual project settings.

:::info
When projects are in standalone mode, the standard library menu bar, which displays your logo and color theme, will be supplanted by a more basic standalone header.
:::

#### Library and Home Page Redirect URLs

Disabling library views does not destroy the instance’s library or home pages. Instead Manifold prevents readers from accessing them.

The URL you include in these fields will tell Manifold where you want to direct your readers when they would otherwise reach a library or home page.

If left blank, Manifold will return a `404 Page Not Found` error to readers trying to access non-project pages.

:::info Additional Considerations
When library views are disable,

- project pages and transactional pages, like those for customizing notifications and reading groups, will render with the normal library menu bar and footer;
- the menu bar will not include links to `Home`, `Projects`, or `Following` pages, though custom Manifold Pages can still be set to show in this space;
- global search will be scoped down to just the active project; and
- transactional pages will display in the context of the last project that the user visited.
:::

### Disable Public Annotations and Comments

Manifold was built, in part, to foster scholarly discussion and interaction. By default, readers can leave public annotations on any Text in an instance. And from those annotations, comment threads can grow as other readers react and respond. If that dynamic is not desirable or appropriate for your instance, you can engage this slider and prevent readers from being able to leave annotations and comments that are generally viewable.

Engaging this setting does not prevent all annotations entirely: readers will still be able to (1) leave private annotations for their own personal use and (2) annotate Texts in the context of reading groups, which will be viewable *only* to other members of that group. In both cases, readers will *not* be able to transform those private annotations into public ones.

So long as this setting is engaged, public reading groups will function as if they were private ones.

:::info
If you wish to further limit the annotation functionality across your instance, you can also disable reading groups (described below). When publishers disable both public annotation and reading groups, users will only be able to leave private annotations they alone can see.
:::

:::note
Disabling public annotations and comments here will affect every project in your instance. If you want to instead prevent annotations and comments only for specific projects, you can do so in a project’s [settings section](../../backend/projects.md).
:::

### Disable Reading Groups

By default, any reader who has an account on your instance can create or join a Reading Group. Reading Groups are a mechanism to band together a discrete collection of readers and the annotations, highlights, and comments they choose to associate with a group. If Reading Groups aren’t desirable or don’t fit with how you’re presenting your instance, you have the options to disable them globally.

With Reading Groups disabled, Readers will no longer be able to create new or join existing Reading Groups. And existing Reading Group annotations, created before this setting was enabled, will no longer be visible to anyone—*including the readers who left those annotations*.

:::note
Because it is possible for readers to potentially access and engage with materials across your entire instance, Reading Groups do not have direct relationships with specific Projects. Thus it is not possible to selectively disable Reading Group functionality on a project-by-project basis.
:::

:::tip
If you only want to prevent your readers from leaving public annotations and comments on your instance, then we suggest simply disabling public annotations, described above. That alone will make all Reading Groups function as if they were private Reading Groups, with group activity only accessible to group members.
:::

:::info Interface Changes
When Reading Groups are disabled, the language in various spaces of the interface will change slightly:

- After selecting text in the Reader, the pop-up language will change from “Current Group” to “Current Visibility.”
- The menu heading, when selecting the context of the annotation, will now read as “Visibility” instead of “Reading Group,” and existing Reading Groups will no longer appear in the dropdown.
- The Visibility dropdown in the menu bar will show a heading of “Visibility” instead of “Reading Group,” and existing reading groups will no longer render in the listings.
- The user dropdown in the menu bar will no longer provide a link to “Mange Groups.”
:::