---
id: annoComments_be
title: Managing Annotations and Comments
sidebar_label: Managing Annotations and Comments
---

import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
The options described in this section can be accessed in the Manifold backend by selecting **Records** from the main menu and then either **Annotations** or **Comments** in the submenu.

Only users logged in with **Admin** accounts can access and engage with these views.
:::

## Context

Annotations and comments are the means by which frontend users can engage with texts and one another, associating their thoughts with specific passages of text in the Manifold Reader. See the [Reading on Manifold](../using/reading_manifold.md) section for more information about how annotations and comments work for frontend users.

## Purpose

The views described in this section were created to provide a means for instance administrators to easily address content that may be out of bounds for their site, whether that be spam, malicious and abusive content, or content that is simply off topic.

The opportunities in these views give administrators the ability to search annotations and comments for specific word and phrases, users, or content that has been flagged by frontend readers and to delete those results individually or in bulk.

:::note
These features work in conjunction with the platform’s email verification, models of trust, and rate limiting systems described in the [Spam Baseline Guardrails section](../administering/spam.md).

Learn more about how users can flag annotations and comments in the [Reporting Inappropriate Content section](../using/reading_manifold.md#reporting-inappropriate-content).
:::

## Interface Overview

The interface for the Annotations and Comments views are nearly identical. For the sake of brevity, they will both be considered here using the Annotations view as our default, with caveats well noted for when that view differs from the options present in the Comments view.

The landing pages for managing Annotations and Comments are both made up of two parts: a search bar and a paginated list of *all* the annotations or comments living on your instance, regardless of their privacy settings or Reading Group affiliation.

## Search

The search bar in these views return results for usernames as well as text existing within annotations or comments. The search bar only accepts keywords and does not recognize search operators as such. Results populate below the search bar, replacing the full list of Reading Groups.

There are two buttons within the search bar: **Reset** and **Options**.

The **Reset** button clears the search bar and resets the listings to the default view that shows all of the instance’s annotations or comments.

In the Annotations view, the **Options** button unveils three dropdowns to filter and sort the results of a search. Search results can be filtered by (1) privacy setting, (2) by flag status, and (3) by creation date or by creator.

Whereas in the Comments view, the **Options** button unveils only two dropdowns to filter and sort the results by (1) flag status and (2) by creation date or by creator.

Thus an example use case would be to sort the list of annotations to show only private annotations that have been flagged.

:::note Sorting without Searching
You can use the search filters to refine the list of annotations or comments without including a keyword search. When you make selections from the filter dropdowns, the list will automatically update to match the criteria you have selected.
:::

## Annotation/Comment List

The list of annotations or comments below the search bar defaults to a paginated view of all the instance’s annotations or comments. The list is adorned by a button labeled **[Bulk Actions](../administering/bulkActions.md)**, used for deleting annotations or comments in bulk, below which is a status readout that provides the number of annotations or comments currently being displayed against the total number on the site. This list paginates after ten items, so this line might read something like

> Showing 1–10 of 420 Annotations

Below, each annotation entry includes

- the date the annotation was made,
- notice about it’s privacy status,
- indication about the whether any flags are associated with it,
- the name of the user who created the annotation,
- the name of the text on which the annotation was made,
- the name of the Reading Group (if any) the annotation was associated with,
- a snipped of the annotation itself,
- and at the end of the entry a delete button in the form of a trashcan icon.

Of these, the last five items are all selectable, either by mouse or by tabbing to the element with your keyboard and selecting it with the space bar.

When the username is selected, the system transitions to the [User detail view](../backend/users.md) for that user account. The text name opens the [text’s detail view](../backend/texts.md#editing-a-text) in the backend; the Reading Group name opens the backend [Reading Group record](../administering/readingGroups_be.md#investigating-individual-reading-groups); the annotation snippet opens the Annotation Detail view described below in the [Annotation and Comment Details Views section](../administering/annoComments_be.md#annotation-and-comment-detail-views); and the delete button removes the annotation from the system, detailed in the [Deleting Annotations and Comments section](../administering/annoComments_be.md#deleting-annotations-and-comments) below.

Entries in the comments list are slightly different and are made up of

- the date the Comment was made,
- indication about the whether any flags are associated with it,
- the name of the user who left the comment,
- notice of the parent annotation or resource that the comment is responding to,
- a snippet of the comment itself,
- and a delete button in the form a trashcan icon.

In this view all but the date and flag status are selectable: the username directs to the detail view for that [User account](../backend/users.md), the reference to the parent annotation or resource opens the [parent annotation’s detail view](../administering/annoComments_be.md#annotation-and-comment-detail-views) or the [resource’s detail view](../backend/resource.md) in the backend, the snippet opens the [Comment Detail view](../administering/annoComments_be.md#annotation-and-comment-detail-views), and the delete button removes the comment from the system as described in the [Deleting Annotations and Comments section](../administering/annoComments_be.md#deleting-annotations-and-comments) below.

Because they are similar, it is worth noting how the views for a parent annotation and comment detail are different. Comments are always anchored to an annotation, directly or indirectly. Users can comment directly on an annotation, or they can comment on another comment that threads off an annotation. In either case, that parent annotation is the anchor to which a comment is tied. Thus, opening the link to a comment’s parent annotation opens to the detail view for the *annotation* to which that comment was anchored. Whereas opening the Comment Detail View opens a view specific to the *comment* itself. Both of these views are detailed in the next section.

:::note Filtering and Bulk Actions
When you use the search bar or any of its filters, results from that search will displace the default list of all annotations or comments in favor of a refined list that matches the criteria from the search bar.

For more about what **Bulks Actions** are and how they function in this space, see the [Backend Deletion section](../administering/annoComments_be.md#backend-deletion) below as well as the [Bulk Actions](../administering/bulkActions.md) page.
:::

## Annotation and Comment Detail Views

When the snippet of an annotation or comment is selected from list, the system opens a drawer, titled Annotation (or Comment) Detail. The drawer contains two default buttons below the title—**View** and **Delete**—and a contextual one labeled **Resolve All Flags**, which only appears when the annotation or comment you selected has been flagged by a user. These buttons are the only dynamic elements in the drawer. The remaining content is purely for informative purposes and is divided into three sections labeled **Flags**, **Content**, and **Metadata**.

Beginning with the buttons, let’s consider each of these elements in turn:

- The **View** button moves the user to the frontend, to the place in the text associated with the annotation or comment, with the annotation drawer open, showing the annotation and any comment thread growing from it.
- The **Delete** button provides a means for an administrator to delete the individual annotation or comment in question. See the [Deleting Annotations and Comments section](../administering/annoComments_be.md#deleting-annotations-and-comments) below for more on this process.
- The **Resolve All Flags** button resolves—or removes—all of the flags associated with the annotation or comment. This is the option an administrator would select when they feel the annotation or comment does not need to be removed from the system. See the [Resolving Flags section](../administering/resolvingFlags.md) for more.

The following static elements in this view provide contextual information. They do not afford opportunities to change or update the system in any way.

<ul>
  <li>
    <p>The <strong>Flags</strong> heading will appear only if the annotation or comment has been flagged by a user in the frontend. A list of those flags appears beneath the heading, each one made up of the date the material was flagged, the username of the person who added the flag, and (potentially) the reason why the user flagged the annotation or comment for review.</p>
    <p>In situations where the annotation or comment was previously flagged and those flags were resolved, a record will remain in this space indicating how many flags have been resolved over time.</p>
    <p>See the <a href="../using/reading_manifold.md#reporting-inappropriate-content">Reporting Inappropriate Content section</a> for more on how users can flag content for administrative review.</p>
  </li>
  <li>The <strong>Content</strong> heading introduces a text box that contains the raw text of the annotation or comment itself.</li>
  <li>The <strong>Metadata</strong> section includes four fields that provide the date the annotation or comment was made, the names of the text and Reading Group to which the annotation or comment is affiliated, and the username and account role associated with the person who created the annotation or comment.</li>
</ul>

## Deleting Annotations and Comments

Administrators can delete annotations and comments in various places throughout the backend as well as in various frontend views. This section will detail the how and where for both.

### Backend Deletion

Within the backend, annotations and comments display in list views in the following spaces:

- The **Annotations** and **Comments** submenu spaces, nested under the **Records** main menu item, discussed throughout this section
- The Annotations sidebar of the [Reading Group detail view](../administering/readingGroups_be.md#investigating-individual-reading-groups)
- The Activity sidebar of the [User detail](../backend/users.md) view

Each annotation and comment list item in these views includes a **Delete** button on the right side of the listing, appearing in for the form of a trashcan icon. When that button is selected, the system will prompt the user to confirm they want to delete that particular annotation or comment. Once confirmed, that group will be removed from the system.

Selecting the annotation or comment snippet within one of those list items opens a detail view for the annotation or comment. At the top of that view, there will also be a **Delete** button that you can use to remove that particular annotation or comment from the system. Here, too, you will be prompted to confirm you wish to delete the annotation or comment before it is removed from the system.

It is also possible to delete annotations and comments in bulk from the list views in using the **Bulk Actions** button present in all the views noted above, *except* for the Activity sidebar of the [User detail](../backend/users.md) view. The Activity Sidebar is the only list view where Bulk Actions are not possible.

See the [Bulk Actions section](../administering/bulkActions.md) for background and details on the process of deleting multiple annotations and comments in one action.

### Frontend Deletion

There are four frontend views in the system where annotations and comments can be deleted by an administrator:

- The [Annotation drawer](../using/reading_manifold.md#annotations-and-comments) within the Manifold Reader
- The See All view, accessible from the [Reader’s Notes dropdown menu](../using/reading_manifold.md#notes)
- A Reading Group’s [Notes and Comments tab](../using/reading_groups.md#creator-moderator-and-administrator-view)
- A [Resource’s frontend landing page](../using/manifold_projects.md#resources)

In each of those views you will see four options associated with the annotation or comment: **Reply**, **Edit**, **Delete**, and **Report**.

The **Delete** option is the one to use to remove an annotation or comment from the system. When you choose to delete an annotation you will be given an option to **Confirm** or **Cancel** the operation. When choosing to delete a comment, the system will give you similar but different options: Restore or Destroy. When you confirm or destroy an annotation or comment, respectively, it will be permanently removed from the system.

### Comment Threads and Deleted Annotations

We can think of annotations and comments as a parent-child system. Annotations are always parents, and comments can serve as parents to comments made in reply to them—or, more simply, nested off of them.

When a parent annotation or comment is deleted from the system, it also deletes *all* child comments associated with it. When a comment is removed, the parent annotation and any parent comments associated with it will be unaffected and remain in the system.

Deletion in this case is universal. It does not matter if an annotation or comment is associated with a particular reading group. When it is deleted, it will be removed entirely from the system so that not even those who left the annotation or comment will have continued access to it.

:::danger Deleted Content Permanence
When you opt to delete an annotation or comment, either individually or in bulk, the system will first ask you to confirm the deletion. However, once the element has been deleted, there is no means to recover it. It’s simply gone forever. Tread carefully.
:::
