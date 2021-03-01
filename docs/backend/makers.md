---
id: makers
title: Makers
sidebar_label: Makers
---

`Maker` records are author and contributor metadata —name and avatar— that can be associated with projects and texts. A single maker record can have different designations on different projects (e.g., an author of one project may be a contributor to another). Maker records can be associated with a project as Authors or as Contributors. At present there are no options for more refined categorization (i.e., Edited by, Translated by, Introduction by, etc.) Maker accounts can be associated with a project generally and also with specific texts. Maker accounts are created automatically by the system when a text is ingested by EPUB or Markdown strategy, and the Maker record is populated with the author metadata included within those texts.

If your text doesn't have the requisite metadata, Maker accounts can be created manually in both the Records and Projects menus by users with Administrative, Editor, or Project Creator credentials.

### Authors and Contributors

When a Maker is associated with a project as an `Author`, their name and avatar (if one has been added to the record) will appear on the project landing page, beneath the project title, and also in the project library, beneath the project’s cover or avatar.

When a Maker is associated as a `Contributor`, their name will show up only on the project landing page beneath the author’s name. Their avatar will not be included. Associating a Maker record as an Author in `Records` is not the same as giving a user account “Is a Project Author” permissions.

An Author or Contributor who wants to engage with material on Manifold will have both a User account—likely in the capacity of a `Reader` role with Author or Metadata Editor permission status—and a Maker record, which will serve the display name and avatar to the projects and texts to which that Maker has contributed.

Project-level Makers are displayed on a project's landing banner. Text-level Makers aren't displayed on the system but are incorporated into a text's metadata and are required to create citations through the `Share` feature in the reading interface.

There is only one Maker record database. While you can create a Maker record on either the project or text levels, the record will be available in both places. That is, if you create a record for H. G. Wells on the Project level, you will also be able to call upon that same record on the text level and vice-versa.

In the `Records` tab under the `Makers` submenu, you can `Add a New Maker` below the search bar. Beginning to type a name in the `Add an Author` or `Add a Contributor` fields will prompt Manifold to display any existing Maker records that match the name you type. If you select the name, the system will populate a list below the field and associate it with the project. If there is no name match, hitting enter will create a new record. A drawer will open up from the right prompting the user to input the Makers's name and avatar.

To modify the new record you can click on the pen icon that floats to the right of the Maker's name. If a Project or Text has more than one record under the Author or Contributor heading, horizontal grab bars on the far right allow users to manually drag and drop Author and Contributor records into the desired order.

### Project-Level Maker Records

Under `People` from the sidebar of a selected Project, there are headings for `Authors` and `Contributors`. If any Maker records are already associated with the project they will appear here under the `Authors` or `Contributors` headings.

### Text-Level Maker Records

The method to create a text-level Maker record is exactly the same as for the project-level Maker. The difference is one of location: to create a Maker on the text level, select `Texts` from the sidebar under Projects, and click on the text to which you wish to add a Maker record. When you click on the text a new, shorter sidebar will appear. The text-level `People` page functions the same as the project-level `People` page.

In the `People` menu, Users who have permissions to modify the project at hand can associate Maker records with it. Doing so relates a Maker record to the project as a whole and not to a specific text within it.

### User Accounts vs. Maker Records
The terms User and Maker are well intentioned but also somewhat fuzzy. To help dispel any possible confusion, it is important to note that user accounts are for those who mean to use Manifold actively—readers, authors, research assistants, publishers, DH or library staff—engaging with texts and resources on the frontend or by curating and managing projects in the backend.

Maker records are just that—editable metadata records—appended to projects and texts as a means to ascribe credit to those who created the content. Maker records relate to the reader who authored, edited, or otherwise produced the projects and texts with which they are engaging by way of the maker’s preferred display name and photo.

An example of how these two differ: if Jane Eyre was loaded into the system, there would be a maker record for Charlotte Brontë, since she is the author of that text, but there couldn’t be a Charlotte Brontë user account because she won’t be reading, annotating, or curating projects on the platform.

### Reingestion with Maker Records
It is important to note that the Author and Contributors associated with the specific text record—and not the project generally—will be overridden by a reingest. If you have manually adjusted these fields after your text was initially loaded, the reingest will reset them to their initial state. If you have manually adjusted these fields after your text was initially loaded, the reingest will reset them to their initial state.
