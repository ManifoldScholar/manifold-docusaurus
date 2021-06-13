---
id: v6x
title: v6.x
sidebar_label: v6.x
---

:::note
Prior to v6.0.0, we did not keep detailed release notes for each version. However, we did keep a [changelog](https://github.com/ManifoldScholar/manifold/blob/master/CHANGELOG.md), and you can find a list of features from each major version on [our blog](/blog).
:::

## Manifold v6.0.0 (coming soon!)

Manifold v6.0.0 will be released in Spring, 2021. Our two main goals for this version were to pay down technical debt by updating dependencies and building a new analytics feature. Along the way, we addressed approximately 50 bugs, improved our Docker images, and applied some much needed TLC to our packaging approach.

One reason this release is a little light on features is because we've also been focused on creating and launching a brand new manifoldapp.org site; winding down our Wordpress blog (and migrating the content to this site); and redesigning, rewriting, and migrating our documentation to Docusaurus. We're really excited to release v6, refreshed docs, and new marketing materials at the same time!

### Major Features

#### Dependencies Updated

For v6, we've updated the bundled PostgreSQL from version 9 to version 14. Elasticsearch has been updated from version 5 to version 7. Rails has been updated to v6. Ruby has been upgraded to v2.7 to take advantage of garbage collection and memory consumption improvements. Node has been updated to the most recent LTS version. Shrine, the API's file attachment library, has been updated to version 3. These were all significant updates requiring data migrations and code changes.

#### Formatted Attribute Refactoring

In Manifold, a formatted attribute is a field on a model that can accept markdown. When these fields are edited, Manifold generates the raw, plain-text, and HTML version of the content. Prior to version 6, these values were stored in a redis cache. In some cases, fetching many records with many formatted attributes could increase resource consumption on the host. In v6, we've refactored our approach to formatted attributes so these cached values are now stored in the database, which can yield noticeable performance improvements in some scenarios.

#### Manifold Analytics

Manifold has long supported Google Analytics integrations. With v6, it is now possible to enable analytics on your instance. When enabled, Manifold will store completely anonymized data about what content users are interacting with. This data is stored locally in your instance. We've added backend interfaces on the dashboard, projects, and texts that allow you to review the analytics data and set a date range for the reporting. This work includes a robust system for internally tracking events, and we hope to build on it in the future to help publishers better understand how users are interacting with their content.

#### New Word Ingestion Engine

In v6, we've replaced the MS Word ingestion engine. Previously, ingesting Word documents started with Pandoc converting the source document to HTML. In V6, we've replaced Pandoc with Mammoth, which makes it possible to directly map Word styles to HTML selectors. This, coupled with the next feature, should allow publishers to build more robust Word-based text production workflows.

#### Global Ingestion Styles

We've exposed a new setting that accepts arbitary CSS. When texts are ingested into Manifold, Manifold will apply these global styles to the rendered text. It's our hope that this feature will allow presses to create a set of house styles that give a bit more control over how texts render in the reader.

#### Cloud Storage Support

As part of the [Shrine](https://github.com/shrinerb/shrine) upgrade to version 3, and in preparation for making Manifold deployable to a Kubernetes environment, we've added support for storing attachments uploaded to Manifold (thumbnails, assets created during ingestion, etc.) to a cloud storage provider. We've updated our documentation for working with Google Cloud Storage buckets, and we'll be adding documentation for AWS S3 in the near future.

### Other Features

- Texts can now be set to ignore project access restrictions, which makes it possible to make a sample text available on an otherwise restricted access project.
- Users can now load comments for an annotation from the reading group dashboard.
- We've improved path generation for stored atttachments.
- We've added a new task that allows users to check for the presence of a google service key, which is needed for some automated deployments.
- Users can now delete project exportations.
- We've added a preview link to project collections from the backend.

### Upgrade Notes

Because we upgraded a number of underlying systems, there are quite a few data migrations included in this upgrade. Please be sure to backup your installation prior to upgrading and ensure that you're able to rollback if something goes wrong. If you run into problems, get in touch with us and we will do our best to help apply fixes to Manifold and release new packages. A number of migrations will occur as part of this upgrade:

- Regular Rails API migrations will run. These run as part of every upgrade.
- Manifold system upgrades will need to run successfully. With a package install, this should happen automatically. One of these upgrades involves updating metadata for all attachments.
- For the Elasticsearch upgrade, we are dropping the index completely. You will need to reindex all content. See the documentation on [API Rake Tasks](/manifold-docusaurus/docs/administering/reference/api_rake_tasks) for instructions on how to do this.
- When you upgrade from v5 to v6. All data will be migrated from PostgreSQL v9 to v14. The original v9 data directory will not be changed, and it should be possible to rollback to v9 if necessary.
- In some cases, versions of Manifold prior to v6 would store some attachments in the root upload directory instead of partitioning files into nested directories. This is not scalable, and it is fixed in v6. We've written a command, which can currently be run from the Manifold API console that will attempt to put every attachment in the correct location. You should definitely consider this command experimental and only execute it if you're able to easily roll back in the event of an error. Running this command is not necessary to successfully upgrade from v5 to v6. To attempt this fix, open an API console and execute this command: `Storage::UpdateShrineDataAndDerivatives.for_all_classes`
