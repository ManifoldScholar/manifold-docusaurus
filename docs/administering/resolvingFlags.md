---
id: resolvingFlags
title: Resolving Flags
sidebar_label: Resolving Flags
---

import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

## Context

Users can flag annotations or comments in frontend views to be reviewed by instance administrators for potential spam or for being inappropriate, abusive, or generally out of bounds.

Once an annotation or comment is flagged, administrators will receive an email from the system alerting them to the flag, with a link to view the annotation or comment in the Manifold Reader, along with any reason the user offered for why they flagged the material.

:::note
See the [Reporting Inappropriate Content section](../using/reading_manifold.md#reporting-inappropriate-content) for more about what options are available to users wanting to *report* content to administrators.
:::

## Resolving Flags in the Frontend

:::location
There are four frontend views in the system where flags can be resolved:

- The [Annotation drawer](../using/reading_manifold.md#annotations-and-comments) within the Manifold Reader
- The See All view, accessible from the [Reader’s Notes dropdown menu](../using/reading_manifold.md#notes)
- A Reading Group’s [Notes and Comments tab](../using/reading_groups.md#creator-moderator-and-administrator-view)
- A [Resource’s frontend landing page](../using/manifold_projects.md#resources)

Only users logged in with **Admin** accounts will be able to access the specific options described below.
:::

In each of the views noted above, administrators will see the flagged annotation or comment in question above four actionable links: **Reply**, **Edit**, **Delete**, and **Unflag**. The final option, **Unflag**, is the means by which a flag can be removed (or resolved) from the annotation or comment in question.

## Resolving Flags in the Backend

:::location
In the backend, flags can be resolved in either the Annotation Detail view or the Comment detail view.

These views require a little digging to access, but are available by selecting the **Records** menu item and then either **Annotations** or **Comments** in the submenu. Then from the list of annotations or comments, select the annotation or comment snippet to see their detail view. The [Managing Annotations and Comments section](../administering/annoComments_be.md#annotation-and-comment-detail-views) describes these views in detail.

Only users logged in with **Admin** accounts can access and engage with these views.
:::

Within the Annotation or Comment Detail views there will be three actionable buttons: **View**, **Delete**, and **Resolve All Flags**. The **Resolve All Flags** option removes the flag from the annotation or comment.

It is worth noting that those detail views can also be accessed in the backend from a [Reading Group’s Annotation sidebar](../administering/readingGroups_be.md#reading-group-annotations) and the Activity sidebar in the [User detail view](../backend/users.md), in addition to the [Annotations and Comments Lists](../administering/annoComments_be.md#annotationcomment-list).

:::tip Leveraging List Views to Resolve Flags
It is not possible to resolve flags in bulk in Manifold. However, in the list views discussed here, annotations or comments can be filtered by flag status, giving you an easier means to target content that requires your review.
:::

## Record Keeping

When flags are resolved, notice of their presence is entirely removed from all frontend views. However a record for administrators of resolved annotations remains associated with the annotation or comment in the [Annotation or Comment Detail view](../administering/annoComments_be.md#annotation-and-comment-detail-views).