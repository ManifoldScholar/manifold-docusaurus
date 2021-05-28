---
id: makers
title: Makers
sidebar_label: Makers
---

:::location
The fields discussed in this section can be accessed from the Manifold backend by selecting **Records** from the main menu and then **Makers** in the submenu.

Users logged in with **Admin**, **Editor**, **Marketeer**, or **Project Creator** credentials can access this view.
:::

## What is a Maker?

**Maker** records refer to author and contributor metadata that can be associated with Projects and Texts. A single Maker record can have different designations on different projects (e.g., an author of one project may be a contributor to another). Maker records can be associated with Projects and Texts as Authors or Contributors. At present there are no options for more refined categorization (i.e., Edited by, Translated by, Introduction by, etc.). Maker records are created automatically by the system when a Text is ingested, depending on the ingestion strategy (see [People](../backend/texts.md#people)).

## Authors and Contributors

When a Maker is associated with a project as an **Author**, their name and avatar (if one has been added to the record) will appear on the Project landing page beneath its title. Author names also appear in library views, beneath the Project’s thumbnail. Maker records associated with a Project as a **Contributor** will display only as a name on the Project landing page, *without* their avatar.

Makers records associated with Texts aren’t displayed in the system but are incorporated into the Text’s metadata and are required by the system to create citations through the **Share** feature in the reading interface (see [Citations](../using/reading_manifold.md#your-notes)).

An Author or Contributor who wants to engage with material on your instance will have both a User account—likely in the capacity of a **Reader** role with Author or Metadata Editor permission status (see [Editor Permissions](../backend/projects.md#editor-permissions))—and a Maker record, which will serve their display name and avatar to the Projects and Texts to which they have contributed content.

:::note
Assigning a Maker record as an Author to a Project or Text is not the same as giving a user account “Is a Project Author” permission.
:::

## Managing Maker Records

There is only one Maker record database. While you can create and assign Maker record through the People sidebar in either the [Project](../backend/projects.md#people) or [Text](../backend/texts.md#people) views, the record itself is centralized here and will be available to all Projects and Texts across an instance.

From this view in the Records menu, you can use the search bar to find a specific record or page through all the Maker records saved in the system. Select the **Add a New Maker** button below the search bar to add a new record to the system. Doing so will open a drawer from the right of the screen prompting for the Maker’s name and avatar. To modify the new record, select the Maker’s name from the listings. 

## Reingestion with Maker Records

Authors and Contributors associated with a specific Text record—and not the Project generally—will be overridden by the Text reingest process. If you have manually adjusted a Text’s Maker records after it was first ingested, the reingest process will override them with Maker information from the modified source file you are reingesting (see [Reingest](../backend/texts.md#reingest)).
