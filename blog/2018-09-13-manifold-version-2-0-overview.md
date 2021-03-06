---
slug: "manifoldversion20overview"
title: "Manifold Version 2.0 Overview"
---

The Manifold team is delighted to announce the release of version 2.0 of the Manifold platform. This release adds new accessibility features, makes multiple improvements to the reading experience of Manifold, and expands the number of types of document formats that can be ingested by the platform. For details, please see below or watch this video overview:

<iframe src="https://player.vimeo.com/video/289698661" width="640" height="360" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>

<!--truncate-->

## Major Features

**Audio Player** Audio resources will now render an audio player with volume control, scrubber, current time, and pause/play controls. A waveform of the audio file renders above the controls, which can also be used for moving the playhead.

**Annotation Resilience** Manifold has a new service that attempts to reposition annotations in a text section after the text section has changed. Generally speaking, annotations are more resistant to changes in the underlying text. Prior to this release, changing and text node in a document could cause all annotations in that node and in child nodes to become orphaned.

**Broad Accessibility Improvements** For the 2.0 release, we made significant progress toward making Manifold more accessible and ensuring that it remains accessible in future releases. We enabled a broad set of [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) linting rules and methodically adjusted our components to address linter warnings. While important, static code analysis is not a sufficient step to meet accessibility requirements, so we spent a good deal of time interacting with Manifold using a screen reader and making a variety of subjective and objective improvements for visually impaired users. For more information about what steps we took, please consult our [in-depth blog post](http://blog.manifoldapp.org/2018/08/08/web-accessibility-roadmap-for-manifold/) on the subject.

**Contact Form** Manifold now ships with a contact form and corresponding mailer templates. If administrators want to make it easier for users to get in touch, they just enter a contact email in Manifold’s settings, and the contact form will be enabled.

**More Control Over the Footer** Publishers can now configure social links for the Manifold footer, control the global footer copyright statement, and add links to terms of service, a privacy policy, and other supplemental content that have been created on Manifold locally or that exist outside of the system.

**Manifest Ingestion** We’ve added a new ingestion strategy for “manifest” ingestions. For this kind of ingestion, the user creates a YAML file that includes metadata about the text as well as the text’s table of contents. Each entry in the manifest’s TOC can reference, via URL or relative path to a file included in a zip archive, any kind of document—except EPUB—that Manifold is capable of ingesting (i.e., Markdown, HTML, Google Doc, Word Document). Each document will become a text section in a text. With this approach, it’s possible to build Manifold texts out of disparate source documents. We’ll be adding information about this new ingestion strategy to our documentation. In the meantime, we have a few sample manifests that we use for test fixtures. You can see those [here](https://github.com/ManifoldScholar/manifold/blob/master/api/spec/data/ingestion/manifest/all_remote/) and [here](https://github.com/ManifoldScholar/manifold/tree/master/api/spec/data/ingestion/manifest/all_local).

**HTML Ingestion Improvements** Starting with version 2.0, Manifold is able to ingest a single stand-alone HTML file as well as a zip archive that includes one or more HTML files alongside supporting assets (stylesheets, images, etc.).

**New Ingestion Formats** Manifold can now ingest Word documents and has very early support for LaTeX documents. We leverage PanDoc for converting these formats to HTML prior to ingestion. Manifold supports most default styles in Word documents, though more advanced layout and typesetting in Word may not translate well to Manifold’s responsive reader. What is effectively a proof-of-concept ingestion process for LaTeX in version 2.0 will be further expanded in subsequent releases.

**Document Ingestion Table of Contents** Any time a single document is ingested as a text, Manifold treats it as a document ingestion. Ingesting a single HTML file, a Google doc, a Markdown file, or a Word document would register as document ingestions. Prior to version 2.0, Manifold would not render a table of contents for these texts. In 2.0, Manifold will generate a table of contents for the text based on the headers in the document.

**Custom OAuth Strategies** CUNY, one of the early adopters of Manifold, wants Manifold readers to be able to authenticate against Manifold using their CUNY Academic Commons login. To make that possible, we built interfaces into Manifold 2.0 so that instances can add custom OAuth authentication strategies to their installation. We’re still working on developer documentation for this feature. Please get in touch with us on our [Slack channel](https://manifold-slackin.herokuapp.com/) if you’d like to learn more in the meantime.

**Refactored Ingestion** When we first started building Manifold, we mainly focused on being able to render EPUBs in Manifold’s reader. Over time, we added new ingestion formats most of which were structurally different from EPUBs. Code around ingestion is one of the more complex and critical parts of Manifold, and our understanding of how ingestion should take place has grown over the last few years. For version 2.0, the ingestion process underwent a significant refactoring to make it more modular and to reduce the time involved in developing new strategies. Prior to this refactoring, every ingestion type was its own “strategy,” and backend users had to identify which strategy they wanted to use. Going forward, we have a new architecture, which is composed of a number of services and objects:

- **Fetchers** are responsible for pulling in documents from remote sources. Manifold ships with a “URL” fetcher and a “Google Doc” fetcher. We envision writing new fetchers for other services in the future (Dropbox Paper or Office 365, for example).

- **Converters** are responsible for converting source documents to HTML, which is the lingua franca of Manifold ingestion. In version 2.0, Manifold includes convertors for LaTeX, Markdown, and Microsoft Word.

- **Strategies** are responsible for inspecting source documents and organizing them into models that Manifold understands including Texts, Text Sections, Text Titles, Contributors, etc. Each strategy produces a structured data hash which gets passed on to compilers.

- **Compilers** are responsible for taking the data produced by the ingestion strategy and creating data models in Manifold’s database. Manifold includes compilers for Contributors, Creators, IngestionSources, Makers, Stylesheets, Texts, TextSections, and TextTitles.

- **Pickers** are responsible for polling converters, fetchers, and strategies to determine which should be applied to each model. We’ve added a configuration layer that we’ll expose in a future release, which will allow developers to add custom converters, strategies, and fetchers to Manifold.

- We’ve added **pre- and post-processing stages** to ingestion to allow us to extract stylesheets, add IDs to headers for TOC generation, and other small adjustments. We will likely expose these steps for customization in the future.

With the more modular architecture, we expect to be able to roll out ingestion fixes and improvements more quickly while also adding support for new formats and content sources. As part of this work, we’ve also improved the ingestion user interface. We’ve moved it from a modal to a drawer, added automated detection for ingestion type, and generally improved the usability of the UI.

**CentOS 7 and Ubuntu 18 Support** For this release, we circled back to our Omnibus tooling for generating OS-level Manifold packages and added support for CentOS 7 (as well as RHEL 7) and Ubuntu 18. As always, these packages are available from [our downloads page](https://manifoldapp.org/docs/reference/downloads), and we’ve updated installation instructions to include [CentOS](https://manifoldapp.org/docs/installing/centos/index).

**Support for Very Large Ingestions** In version 1.0, we relied on Javascript File APIs for handling the uploaded ingestion file. With time, we found that those interfaces tended to fail when dealing with files over 150 or 200MB. Many of our users are attracted to Manifold as a reading platform because of its support for multimedia, which means we need to be able to support very large ingestion sources. To solve this, we changed the way Manifold handles uploads for ingestions. We followed the TUS specification ([https://tus.io/](https://tus.io/)), which means that Manifold also now can show accurate upload progress and offer resumable uploads for ingestion source files. Version 2.0 should have no problem supporting ingestions that are multiple gigabytes in size.

**Backend Design Changes** The Manifold 1.0 backend was more confusing than it needed to be. For 2.0, we adjusted backend navigation and added secondary navigation. We improved the design of the tertiary navigation on complex records (projects, texts, resources, etc), and did a careful UX pass on the record header component to signal more clearly where users were in the hierarchy of project and project child records. We dropped the confusing “people” and “content” sections in the backend and moved these auxiliary models under a catch-all “records” label. We added an “all projects” backend view which leaves us with room to add project collections in 2.1 or 3.0. We normalized backend routes and fixed a number of issues with backend navigation active states. We added multiple columns to forms and made a number of backend typography and layout improvements.

**Text Downloads** In addition to offering readers the option of purchasing a text (by way of an external URL), editors may now attach a downloadable version of a text, which could be a PDF or an EPUB and allow users to download it for offline reading.

**Email Notifications** Many readers and editors have asked to be notified when content is added to a Manifold installation. Users can now manage their notification preferences for Manifold and ask to be notified when people reply to their comments or annotations. Users can also configure their account so that they receive email notification whenever new content is added to projects they follow; notification can take the form of a daily email or a weekly digest. Backend users can be notified when content is flagged as inappropriate or when any new comment or annotation is posted on a project for which they have editorial access.

**So Many Bug Fixes** For 2.0, we’ve fixed over a hundred bugs and made many, many small improvements to Manifold. Manifold is now tighter, more polished, and more stable!

## Minor Features

 In addition to the features outlined above, Manifold 2.0 ships with the following minor features:
 
- Collection description fields now accept Markdown, which makes it possible to link to external sites and add formatting.
- All fields that accept Markdown formatting now accept Markdown links.
- When there are no projects for a Manifold instance, Manifold will now display placeholder content.
- The pagination and filters on the backend project lists are sticky, so if you go to a project and come back to the list, you’ll be in the same place.
- Rows can be flagged as ‘skipped’ when bulk importing project resources, which is helpful for resources that are still in progress or provisional.
- Bulk resource importer supports associating a resource with a collection.
- We’ve updated React to the most recent version, which brings stability and performance improvements.
- We’ve tried to make ingestion error messages easier to track and understand. We’re continuing to make improvements here!
- Manifold can now accept OpenOffice, Flash Video, and Ogg uploads for resources.
- We’ve exposed the resource fingerprint (used for bulk resource imports) and the resource URL slug fields in the backend.
- Texts that do not have a table of contents now render an appropriate message in the reader’s TOC drawer.
- Manifold installations can customize how page titles are generated.
- Manifold can now handle texts that have different stylesheets applied to one or more sections. In version 1.0, text stylesheets were global to the text rather than section-specific.
- We’ve added a “purpose” field to page records so that Manifold can automatically link to terms of service and privacy policies in appropriate places.
- We now render resource download variants on resource detail view.
- Improved IE11 and Edge support.