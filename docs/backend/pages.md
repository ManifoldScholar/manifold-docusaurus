---
id: pages
title: Pages
sidebar_label: Pages
---

:::location
To add or edit Pages, navigate to the Manifold backend and select **Records** from the main menu and then **Pages** in the submenu.

Only users logged in with **Admin**, **Editor**, or **Marketeer** credentials can access this view.
:::

## What are Pages?

Manifold Pages are standalone pages within the application that are narrowly focused around a specific theme. Links to Pages can be included in the main header or footer in library views or from various places within the application, like Project Content Blocks or Project Collection descriptions.

Pages can be authored in the Manifold backend using Markdown formatting or they can function as a means to link to existing external pages.

## Creating or Editing Pages

From the **Pages** submenu, existing Pages are listed with their title, classification, and slug. Selecting an entry from the list will open the Page’s properties where its settings can be adjusted. The **Add a New Page** button will begin the process of creating a new Page. When that option is selected, the system will provide three prompts, for **Page Title**, **External Page**, and **Slug**. Only a title is required to save the new Page, and all of these fields are adjustable after the fact and considered in full in the following section.

## Properties

### Page Title

The name in the **Page Title** field will show as the link text to the Page in the Manifold header or footer when configured to do so (see [Page States](../backend/pages#page-states)). It will not appear in the Page itself.

### Navigation Title

Text entered in this field is meant to serve as a shortened version of the **Page Title**. When a **Navigation Title** is provided, it will replace the **Page Title** name in the header and footer.

### Purpose

Manifold differentiates Pages into three categories that describe its purpose: **Supplemental Content**, **Privacy Policy**, or **Terms and Conditions**.

Links to an instance’s **Privacy Policy** and **Terms and Conditions** are included in the account creation form. On that form, Manifold requires new users to activate a checkbox to confirm that by creating an account on the instance, they are agreeing to that instance’s Privacy Policy and Terms and Conditions. Because these pages have such a specific and targeted use, only one page per instance can be defined with this dropdown as being either the Privacy Policy or the Terms and Conditions.

All other Pages (e.g., preservation or accessibility statements) are considered by Manifold to be **Supplemental Content**. There is no limit to the number of pages that are added as such.

### External Page?

If the the Page to be added already exists on an external site, activate the **External Page** toggle to reveal an **External URL** field, in place of the **Body** field, where an absolute URL can be entered. Links in the header or footer to the Page will then push readers to that target URL instead of to content authored in Manifold.

### Slug

A Page slug appears as the final component of its URL.

```html
https://{domain-name}/page/{page-slug}
```

If left blank, the system will automatically create a slug for a Page based on its title.

### Body

The **Body** text editor is a form where the content of the page is authored. The form accepts Markdown formatting.

## Page States

There are three **Pages States** toggles that manage how the Page appears in the system’s header and footer navigation. When **Hide Page** is activated, the system will not display a link to it in either the header or footer. However, the Page is still live and can be linked to directly from descriptive copy, such as in Project Content Blocks or Project Collection descriptions. Conversely, the toggles for **Show in Footer** and **Show in Header** determine if a link to the Page appears in the footer or header navigation, or in both.

When **Disable Library Views** is toggled on in the **Settings** menu, page navigation will not be available in the footer, even when that toggle is activated (see [Properties](../../docs/administering/configuring/properties.md#disable-library-views)).