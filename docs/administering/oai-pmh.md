---
id: oai-pmh
title: OAI-PMH Feed
sidebar_label: OAI-PMH Feed
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";


Beginning with version 10, Manifold exposes Dublin Core metadata related to published Projects, Journals, Journal Issues, as well as Project Collections, via a public Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH) feed. This feed is available at 

```
https://{domain}/api/oai
```

A library or other service provider can add that path to its OAI-PMH harvester, select the `oai_dc` metadata format, and then optionally select a specific set from those offered and discussed below.

## Sets

Manifold converts metadata for Projects, Journals, Journal Issues, and Project Collections into OAI XML and stores it in OAI records. OAI records are updated automatically whenever the corresponding Project, Journal, etc., is updated—or when one of the [Maker records](../backend/makers.md) associated with one is updated.

Projects, Journals, and Journal issues in Draft mode are never included in the feed. When live content is toggled back to Draft mode, it is likewise removed from the feed. Similarly, content that is deleted from an instance is removed from the feed and its deletion time is recorded in the OAI record.

Records are grouped into sets labeled **Projects**, **Project Collections**, **Journals**, and **Directory**, each described in the following sections. You can access a list of all of an instance’s sets using this endpoint:

```
https://{domain}/api/oai?verb=ListSets
```

You can expect to see in those results one set containing all of an instance’s Projects, an individual set for each Journal, an individual set for each Project Collection, and a set for the Manifold directory.

:::info What Metadata Goes into the Feed?
For details about the specific metadata Manifold supplies to its OAI-PMH feed, see the [Metadata section below](../administering/oai-pmh.md#metadata). The [Excluding Content section](../administering/oai-pmh.md#excluding-content), also below, will likewise be of interest, as it describes how Manifold admins and editors can selectively exclude content from the feed.
:::

### Projects

The Projects set contains every Project on an instance that hasn’t been configured to be excluded from the OAI-PMH feed and is available at this endpoint:

```html
https://{domain}/api/oai?verb=ListRecords&metadataPrefix=oai_dc&set=projects
```

### Project Collections

For each Project Collection on an instance there is a corresponding set that is available at an endpoint structured like this:

```html
https://{domain}/api/oai?verb=ListRecords&metadataPrefix=oai_dc&set=projectCollection:{collectionName}
```

Collection names are concatenated into camel case values by Manifold, which you can confirm using the endpoint listing all the sets on an instance, noted above.

Whenever a project is added or removed from a Project Collection, it is likewise added or removed from the corresponding set.

Project Collections can be selectively exempted from the feed. Unlike Projects and Journals, Project Collections *cannot* be included in the [Directory set](../administering/oai-pmh.md#directory), noted below.

### Journals

Like Projects Collections, each Journal on an instance has a corresponding set that is available at an endpoint structured like this:

```html
`https://{domain}/api/oai?verb=ListRecords&metadataPrefix=oai_dc&set=journal:{journalName}
```

Journal names are concatenated into camel case values by Manifold, which you can confirm using the endpoint listing all the sets on an instance, noted above.

The Journal set includes metadata about the journal and also aggregates all the metadata for each of its issues. Journals, as well as individual issues, can be exempted from the feed.


### Directory

This Directory set on each Manifold instance has a specific and special purpose: it contributes information about the Projects and Journals on that instance to a directory of content from various Manifold instances, aggregated together on the Manifoldapp site at [https://manifoldapp.org/directory](https://manifoldapp.org/directory). As such the Directory set helps populate a centralized portfolio of materials from across the Manifold landscape.

The Manifold team maintains a list of trusted Manifold instances from which to pull this set. At launch, this list will be limited to include only those groups who have Manifold Digital Services host their instance. Later it may also include the Directory set from self-hosted instances.

To see if your instance is included in the directory, select the **Installations** filter on [https://manifoldapp.org/directory](https://manifoldapp.org/directory). As feeds from instances are added, they will automatically appear as an option by which to filter results in that space.

:::info What if we don’t want content to appear in the directory?
Only Projects and Journals from approved instances are candidates for inclusion in the directory. More importantly, every Project and Journal includes in their settings a toggle to opt them out from appearing in the Directory set. Further, there is also a global setting on each instance to prevent any Project or Journal on the instance from populating the Manifold directory. As such, instance editors can select which, if any, content is to be included in the directory. See the [Excluding Content section](../administering/oai-pmh.md#excluding-content) below for more details.
:::

## Endpoints

Manifold’s OAI-PMH feed supports support the `getRecord`, `identify`, `listIdentifiers`, `listMetadataFormats`, `listRecords` and `listSets` endpoint verbs, with endpoints following OAI-PMH standards for the shape of requests:

- `?verb=Identify` describes the repository. Admins can adjust the name and email associated with an instance, embedded in the feed metadata, that harvesters use as part of discovery. See the [OAI-PMH integration settings](../administering/configuring/integration_settings.md#oai-pmh) for more. 
- `?verb=ListSets` lists all the available sets on an instance.
- `?verb=ListRecords&metadataPrefix=oai_dc&set=projects` returns all Project records.
- `?verb=ListRecords&metadataPrefix=oai_dc&set=journals` returns all Journal records.
- `?verb=ListRecords&metadataPrefix=oai_dc&from=2026-09-01` returns only records changed since that date.

Note that the `listRecords` verb supports filtering by `from` and `until` parameters.

## Metadata 

All metadata included in Manifold’s OAI records are defined by a set specification—projects, project collection, journal, and issue—corresponding to how the material is set up in the system. Each record also carries a date stamp and UUID programmatically assigned by the system. The date stamp reflects the last time the content was updated, and the UUID is a randomly assigned value specific to the Project, Journal, etc.

Beyond those programmatic values, the system supplies the following metadata to the feed, all of which backend editors can edit outright or adjust in part.

<Spec title="Metadata Supplied to the OAI-PMH Feed">

<Tabs
  groupId="keyboard-shortcut-paragraphs"
  defaultValue="projects"
  values={[
    {label: 'Projects/Journal Issues', value: 'projects'},
    {label: 'Journals', value: 'journals'},
    {label: 'Project Collections', value: 'projectCollections'},
  ]}>

<TabItem value="projects">

The Backend Location column in the following table references four sidebar menu options—**Properties**, **Layout**, **People**, and **Metadata**. Those menu options are specific to the sidebar in the Project (or Journal Issue) detail view in the Manifold backend. The links here direct to the corresponding documentation.


| Manifold Field                            | OAI Value                         | Backend Location                                                                             |
| ----------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| Title                                     | `<dc:title>`                      | [Properties sidebar](../backend/projects.md#properties)                                      |
| Subtitle                                  | `<dc:title>`                      | [Properties sidebar](../backend/projects.md#properties)                                      |
| Publication Date                          | `<dc:date>`                       | [Properties sidebar](../backend/projects.md#publication-date)                                |
| Slug (as part of the overall Project URL) | `<dc:identifier>`                 | [Properties sidebar](../backend/projects.md#slug)                                            |
| Thumbnail image                           | `<dc:format>` and `<dc:relation>` | [Properties sidebar](../backend/projects.md#thumbnail)                                       |
| Subjects                                  | `<dc:subject>`                    | [Properties sidebar](../backend/projects.md#subjects)                                        |
| Description                               | `<dc:description>`                | [Layout sidebar/Hero Block/Description + Images](../backend/projects.md#description--images) |
| Creators                                  | `<dc:creator>`                    | [People sidebar](../backend/projects.md#people) (makers with author roles)                   |
| Contributors                              | `<dc:contributor>`                | [People sidebar](../backend/projects.md#people) (makers with a role other than author)       |
| Rights Holder                             | `<dc:rights>`                     | [Metadata sidebar](../backend/projects.md#metadata)                                          |
| License                                   | `<dc:rights>`                     | [Metadata sidebar](../backend/projects.md#metadata)                                          |
| ISBN                                      | `<dc:identifier>`                 | [Metadata sidebar](../backend/projects.md#metadata)                                          |
| ISSN                                      | `<dc:relation>`                   | [Metadata sidebar](../backend/projects.md#metadata)                                          |
| DOI                                       | `<dc:identifier>`                 | [Metadata sidebar](../backend/projects.md#metadata)                                          |
| Publisher                                 | `<dc:publisher>`                  | [Metadata sidebar](../backend/projects.md#metadata)                                          |

</TabItem>

<TabItem value="journals">

The Backend Location column in the following table references three sidebar menu options—**Properties**, **Layout**, and **Metadata**. Those menu options are specific to the sidebar in the Journal detail view in the Manifold backend. The links here direct to the corresponding documentation.

In addition to including metadata specific to the Journal, this set also aggregates all the feed metadata for each issue belonging to the title.

| Manifold Field                            | OAI Value                         | Backend Location                                                                             |
| ----------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| Title                                     | `<dc:title>`                      | [Properties sidebar](../backend/journals.md#title-and-subtitle)                              |
| Subtitle                                  | `<dc:title>`                      | [Properties sidebar](../backend/journals.md#title-and-subtitle)                              |
| Slug (as part of the overall Journal URL) | `<dc:identifier>`                 | [Properties sidebar](../backend/journals.md#journal-slug)                                    |
| Thumbnail image                           | `<dc:format>` and `<dc:relation>` | [Properties sidebar](../backend/journals.md#thumbnail)                                       |
| Subjects                                  | `<dc:subject>`                    | [Properties sidebar](../backend/journals.md#subjects)                                        |
| Description                               | `<dc:description>`                | [Layout sidebar/Hero Block/Description + Images](../backend/journals.md#description--images) |
| Rights Holder                             | `<dc:rights>`                     | [Metadata sidebar](../backend/journals.md#metadata)                                          |
| License                                   | `<dc:rights>`                     | [Metadata sidebar](../backend/journals.md#metadata)                                          |
| ISBN                                      | `<dc:identifier>`                 | [Metadata sidebar](../backend/journals.md#metadata)                                          |
| ISSN                                      | `<dc:relation>`                   | [Metadata sidebar](../backend/journals.md#metadata)                                          |
| DOI                                       | `<dc:identifier>`                 | [Metadata sidebar](../backend/journals.md#metadata)                                          |
| Publisher                                 | `<dc:publisher>`                  | [Metadata sidebar](../backend/journals.md#metadata)                                          |

</TabItem>

<TabItem value="projectCollections">

The Project Collections set aggregates the feed metadata for each of the Projects that are members of the collection. Metadata about the collection itself, beyond those programmatic ones described above, does not appear in this set. However, in the set which lists all of the instances sets, each Project Collection’s description is included.

| Manifold Field | OAI Value          | Backend Location                                                                |
| -------------- | ------------------ | ------------------------------------------------------------------------------- |
| Description    | `<dc:description>` | [Collection Settings](../backend/project_collections.md#description-and-short-description) |

</TabItem>

</Tabs>

</Spec>

:::info What metadata isn’t included?
Metadata related to the makeup of a project’s landing page, Resources, or annotations is *not* included in the feed. Metadata about individual text sections is like *not* included in the feed.
:::

## Excluding Content

Individual Projects, Journals, Journal Issues, and Project Collections can be excluded from every set in the OAI-PMH feed. Likewise, individual Projects, Journals, and Journal Issues can be be excluded specifically from the Directory set. There is no option to selectively exclude Project Collections from the Directory set, as they are not meant to appear in the Manifold directory.

There are four spaces in the Manifold backend where users can choose to exclude content from the feed:

- For Projects and Journal issues, the option to exclude the Project or Issue from either the entire feed or just the Directory set lives in the [Properties sidebar menu](../backend/projects.md#exclude-from-oai-pmh), nested under the **Visibility** heading.
- Likewise, the [Journal Properties sidebar](../backend/journals.md#exclude-from-oai-pmh) includes toggles to exclude the Journal (and all of its issues) from either the full feed or specifically from the Directory set. These toggles are nested under the **Presentation** heading.
- The toggle to exclude a Project Collection lives in the [Collection’s Settings drawer](../backend/project_collections.md#exclude-from-oai-pmh), beneath the **Visibility** heading.
- Instance administrators can opt to prevent any content from being included in the Directory set. This is a instance-level option that overrides any local settings at the Project, Issue, or Journal level. The toggle to achieve this lives in the Settings menu of the backend under the [Integrations submenu](../administering/configuring/integration_settings.md#oai-pmh), nested under the OAI-PMH heading.

:::info Who Can Exclude What?

Users who have accounts with an Admin, Editor, or Marketeer role can exercise all possible exclusion options.

Those users who have Project Creator accounts can exercise exclusion options for *only* those Projects, Journal Issues, or Journals they have created. Thus, Project Creators who have been granted access to a Project, Journal issue, or Journal by someone else cannot exercise any exclusion options on those Projects or Journal issues.

Likewise, users with Reader accounts cannot access nor exercise any exclusion options, even if they have been given access to edit a Project or Journal issue in the backend.
:::