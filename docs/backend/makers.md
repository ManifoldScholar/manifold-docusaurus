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

**Maker** records refer to authorial and contributor metadata that can be associated with Projects, Journal Issues, Texts, and Journal Articles. *Who created this project content, who authored this particular text, who trasnlated it, who wrote the afterword?* The names that answer those kinds of questions correspond to Maker Records in Manifold.

A single Maker record is by itself just a name paired with an avatar. And that single record can have different designations (or roles) for different projects and texts. For example, an author of one project may have translated another. Maker records can be associated with any of the following roles when describing how they relate to a particular project or text:

- Author
- Editor
- Edited by
- Preface
- Foreword
- Introduction
- Afterword
- Translator
- Illustrator
- Photographer
- Artist
- Contributor
- Series Editor
- Essay by
- Retold by
- Adapted by
- Collected by
- Agent
- Other proprietor
- Other

Maker records are created automatically by the system when a Text is ingested, depending on the ingestion strategy (see the [People sidebar](../backend/texts.md#people) associated with Texts for more). Maker records can also be created manually through this interface.

Roles, however, are assigned to Maker records at the Project and Text level by way of the People sidebar in those respective spaces. For more on how to assign roles to Maker records to Projects and Texts, see the [Project’s People sidebar](../backend/projects.md#people) and the [Text’s People sidebar](../backend/texts.md#people) sections for more.

:::important Makers versus Users
An author or contributor who wants to engage with material on your instance will have both a User account—likely in the capacity of a **Reader** role with Author permission status (see [Editor Permissions](../backend/projects.md#editor-permissions))*—and* a Maker record, which will serve their display name and avatar to the Projects and Texts to which they have contributed content.
:::

## Displaying Maker Records

Maker records display in three spaces in the Manifold interface:

- in library views beneath Project or Journal Issue thumbnails,
- in a Project or Journal Issue’s Hero block, beneath the title, and
- in Contents blocks, beneath a Text’s title.

Maker records do not display by default in these spaces; they need to be configured to do so. To learn more about how to ensure Maker records display, and in the order you want them appear among other Maker records, see the **People** sidebar sections for [Projects](../backend/projects.md#people) and [Texts](../backend/texts.md#people), as well as our section describing how to configure a Project’s [Contents content block](../backend/projects.md#contents-block).

Due to spacing concerns, only the first three Maker records designated with an Author role display beneath a Project thumbnail in library views. Likewise, in Contents blocks, only the first six Makers with Author roles will appear. In Hero blocks, all the Maker’s associated with the Project or Journal Issue will appear, regardless of their role.

In a similar vein, avatar’s associated with Maker records will appear in Hero blocks only when there are no more than two Makers with Author roles associated with either the Project or Journal Issue.

:::note Maker Records in Citations
Maker records associated with Texts are also incorporated into the Text’s metadata and are required by the system to create citations through the **Share** feature in the reading interface (see [Citations](../using/reading_manifold.md#your-notes)).
:::

:::tip Designating Users as Authors
Assigning an Author role to a Maker record for a specific project or text is not the same as giving a user account the “Is a Project Author” permission. To learn more about scoping a user account authorial status, see the [Editor Permissions section](../backend/projects.md#editor-permissions).
:::

## Managing Maker Records

There is only one Maker record database. While you can assign Maker records to any Project, Journal Issue, or Text on the instance, through the corresponding **People** sidebar, the record itself is centralized here.

From this view in the Records menu, you can use the search bar to find a specific record, sort the results alphabetically by first or last name, or page through all the Maker records saved in the system.

Select the **Add a New Maker** button below the search bar to add a new record to the system. Doing so will open a drawer from the right of the screen prompting for the Maker’s title, name, suffix, and avatar. When you add a new text to the system Manifold will automatically created Maker records, depending on the kind of ingestion and the metadata in the source file. See the [Text’s People sidebar](../backend/texts.md#people) to learn more about how and where Manifold sources Maker information from in source files.

To modify or delete a record, select the Maker’s name from the listings. That opens the edit drawer from the right where you an make changes or delete the record by selecting the **Delete** button at the top of the drawer.

When you delete a record, it will be removed from the system entirely, no longer available in this view nor associated with any Projects, Journal Issues, or Texts.

:::important Deletion Permanence
When you delete a Maker record, there is no means to recover it. You can always recreate a record, but that new record would not automatically be associated with the same Projects, Journal Issues, or Texts the original one was.
:::

## Reingestion with Maker Records

Makers associated with a specific Text record—and not the Project generally—will be overridden by the Text reingest process. If you have manually adjusted a Text’s Maker records after it was first ingested, the reingest process will override them with Maker information from the modified source file you are reingesting (see [Reingest](../backend/texts.md#reingest)).
