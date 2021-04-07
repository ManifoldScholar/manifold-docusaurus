---
id: export_targets
title: Export Targets
sidebar_label: Export Targets
---

import Spec from "@theme/Spec";

:::location
Export Targets are managed in the Manifold backend, situated as a submenu of **Settings**. Only users logged in with **Admin** role can access this view.
:::

## What are Export Targets?

Manifold Projects can be packaged up and exported via SFTP to preservation agencies or institutional repositories for long-term digital preservation. Export Targets represent those destinations Manifold will be able to connect and securely deliver Project materials. See the [Exports](../../backend/projects.md#exports) section for details about the process and form of these exports.

## Adding and Editing Targets

The **Add a new export target** button opens a drawer from the right where new Export Targets are configured. These settings should be confirmed with the target repository in question. Existing Export Targets appear in this view as a paginated list. When a Target listing is selected the configuration options will again be available for edit.

A Target’s **Name** is arbitrary and intended for internal use, distinguishing between various Export Targets. The name is listed in this view and in the dropdown field of the [**Exports** menu](../../backend/projects.md#exports) within a Project.

The **Format** of the Target Name is described with variables and determines the top-level filename of the exported archive. It *does not* affect the structure or content of the export in any way. The default value for this field is `%s.%e`, which, using the variables definitions below, equates to `project-slug.extension`. 

There are two dropdown options currently available that outline the **Type** of transfer: **SFTP with Key Authentication** and **SFTP with Password Authentication**. These are determined by the preservation agency. Select the appropriate based on whether the archive is supplying a key to authenticate with or a password. Other possibilities are viable for implementation, whether for cloud systems or institutional repositories.

Likewise, the **SFTP Host** value will be supplied to you by the repository accepting your content, and will likely take a format akin to `ftp.{ArchiveName}.{domain}`.

The default **SFTP Port** value, `22`, is the standard that most secure servers will be listening to for transfers of this kind. If the preservation agency does not specify a port for the transfer, you can safely assume they are listening on port 22 and leave this field as is.

The value of the **SFTP Username** is unaffected by the **Type** of transfer and will be set up for you by the preservation agency. This field *is* case sensitive.

Depending on transfer **Type**, the system will provide a field for a **SFTP Private Key** or **SFTP Password**. The **Key** is a “paste-in” field, meaning the preservation agency will supply you with their key that you can then paste into the field to complete the configuration. Likewise, they will provide you with the password they set for these transactions so that you can push content from your instance to their repository. The **Password** field *is* case sensitive.

## Export Variables

Variables are letters combined with the percent character (%); the rest of the **Target Name Format** can be described using the same characters available for file naming generally. The table below represents the current variables available. We could conceivably add more options if needed.

<Spec>

| Variable | Meaning               | Example                                | Notes                                                                                                                                                                                                                    |
| -------- | --------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `%d`     | Date                  | `2020-03-06`                           | This is the date *the export* was created.                                                                                                                                                                               |
| `%e`     | Extension             | `.zip`                                 | Presently this will always be `.zip`. In the future we may support different formats beyond the Bagit specification.                                                                                                     |
| `%i`     | Project ID            | `059a4e9d-2152-4ae5-816d-41891d4dccd1` | This is a Manifold-generated globally unique ID that is visible only in the URL (appearing after `projects/`) when viewing the project in the backend.                                                                   |
| `%I`     | Export ID             | `071be7e7-f8a3-4bb3-845a-affb0f9e4c77` | A globally unique ID that Manifold generates for each export at the time of export.                                                                                                                                      |
| `%n`     | Project Name          | `Metagaming`                           | The name of the Manifold project being exported. We would caution against using this variable as part of the export name. Project names often contain spaces that will likely cause problems downstream from the export. |
| `%s`     | Project Slug          | `metagaming`                           | A project's slug is the customizable URL suffix that publishers can set in project's General sidebar view.                                                                                                               |
| `%t`     | Time (including date) | `2020-03-06T220927`                    | The date and time the export was created in ([RFC 3339 format](https://tools.ietf.org/html/rfc3339)). The numbers following the `T` represent the time according to the UTC standard.                                    |
| `%u`     | UNIX Timestamp        | `1583532567`                           | The UNIX timestamp, which measures (in seconds) from January 1, 1970 UTC.                                                                                                                                                |

For the technically inclined, the available input values are also described by [this table](https://github.com/ManifoldScholar/manifold/blob/d500d4e63f7821137728d261814fbc9c9ecb6575/api/app/services/export_strategies/target_name_formatter.rb#L22) in the Manifold repository.

</Spec>

## Export Schemes for Directory Paths

It is possible in the present scheme to provide directory paths in the **Target Name Format** field. For example, to provide some nice organization you could input `%s/%d/%I%e` to return the following:

```
metagaming/2020-03-06/071be7e7-f8a3-4bb3-845a-affb0f9e4c77.zip
```

This could potentially allow an archive to put the export archive file in a derived directory that uses those same formatting parameters. Thus the same export target could be used for a dozen projects that a repository could sort into different directories, rather than all just going into the same directory.