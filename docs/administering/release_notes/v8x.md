---
id: v8x
title: v8.x
sidebar_label: v8.x
---

## Manifold v8.0.0


There are 876 new commits in the Manifold code repository since we released v7 in 2022! Support for authoring in Manifold is the headline feature of this work, but v8 also includes GDPR support, new options for managing entitlements, support for MathML, improved keyboard controls for annotation, and updates to navigation and routing.

## Authoring Features

The majority of new feature development in v8 involved making texts editable in the Manifold backend. This includes new interfaces for creating texts, text sections, and text assets, for managing the section order within a text and the text’s table of contents, and for updating the properties of text sections and text assets. Users can now set slugs for text sections, hide individual sections in the Reader navigation, rename ingested assets, add new anchor links in a table of contents, and more — configurations that were previously only set during text ingestion.

Central to these authoring features is the new text section editor. The editor features both HTML and Rich Text editing modes. In the ingest process, Manifold generates HTML for each text section. One of the goals of the editor is to give users access to this raw HTML, so they can edit any content Manifold can ingest. While not exposing the full functionality of editing raw HTML, RTE mode makes editing texts approachable for users without any technical background.

In addition to editing in the backend interface, ingestion is now possible for individual text sections. Together with the Manifold editor, this allows users flexibility in updating their Manifold texts: instant adjustments can be made in the editor; larger text updates can be made in the author’s text editor of choice and the section document reingested. To handle the likelihood that Manifold texts will now change more frequently, v8 includes a more robust algorithm for placing annotations from a prior version of a text section in the new version, and if the annotation cannot be placed, ensuring a user can access a list of their annotations on prior versions.

Finally, authoring introduces a new option for text stylesheets. Stylesheets can now be marked as applying to all sections, and so, automatically applied to any future sections created for the text.

## GDPR Support

GDPR is perhaps the most noticeable feature when a user first launches v8, as Manifold now prompts users to accept cookies. In v8, users have a new Privacy Settings page that allows a user to manage cookies and even delete their account. In addition, Manifold now exposes and requires new users to accept both the Privacy Policy and Terms and Conditions when registering, if the instance includes the relevant pages.

## Entitlement Management

Manifold v8 adds a new type of entitlement, a pending entitlement. These records can be managed by admin users and allow entitlements to be granted to a user with a specific email prior to the user registering on the Manifold instance. When the user registers, all pending entitlements for their email will be converted to regular entitlements, and projects will be immediately available.

In addition, users now have the ability to grant entitlements to entire journals as well as to specific issues, making it easier to work with journals.

Entitlements can also be granted in bulk in v8 via a CSV import. When the CSV is processed, Manifold will automatically generate entitlements for any existing users and create pending entitlements for all unregistered email addresses included in the import.

## Keyboard Annotation

Manifold v7 introduced caret browsing, enabling users to annotate Manifold texts using the keyboard. However, that initial release had some limitations, among them that the user’s place in a text was not maintained after saving an annotation. v8 includes a significant refactor of how focus and selection are handled in the Reader. Now, when a user creates or views an annotation, Manifold restores focus and selection to that annotation when the drawer is closed. If they escape out of the annotation menu, or unhighlight a highlight, the caret goes right to where they left off. The team believes all this is working such that one never loses their place in the text! Moreover, by isolating selection and focus from one another and managing them individually, the experience is consistent across browsers in v8.

## Other Features

- Manifold now supports MathML! Math tags can be added to text sections and will display using math fonts in the Reader.
- The Manifold backend received a design refresh including more efficient navigation between texts and projects.
- The annotation drawer and notes pages now display annotations with surrounding text for context.
- Routing has been updated in a few ways, including adding route change announcements for screen readers, maintaining the current project or journal view when entering or exiting admin mode, and adding HTML page titles for all pages.
- Image upload fields now include the option to add alt text, and iframes have additional attribute options and more flexible dimension values.
- Packaging metadata has been updated to include additional fields for texts and projects and to integrate resource metadata in the main project file.

## Database Upgrade

With all of these new features, Manifold now requires a minimum of PostgreSQL v13 to run.
