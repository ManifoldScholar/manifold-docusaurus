---
id: readingGroups_be
title: Reading Group Management
sidebar_label: Reading Group Management
---

import Spec from "@theme/Spec";
export const defaultImageFormats = "GIF, JPEG, JPG, PNG";

:::location
The options described in this section can be accessed in the Manifold backend by selecting **Reading Groups** from the main menu.

Only users logged in with **Admin** accounts can access and engage with these views.
:::

Beginning with Manifold version 9, users logged in with Admin accounts can access backend views that provide detailed information about an instance’s Reading Groups, with options to selectively remove individual annotations, group members, or specific Reading Groups individually or in bulk.

## What are Reading Groups?

Reading Groups are cohorts of readers who are collectively engaging with material contained within an Manifold instance. Users can collect projects, texts, text sections, and resources on a customizable reading group landing page and likewise collaboratively annotate and engage with those materials.

Any user who has created an account on an instance has the ability to create a Reading Group and invite others to join that group through the frontend interface. For more on that process and the various possibilities offered through this feature, see the [Frontend Reading Group documentation](../using/reading_groups.md).

## Managing Reading Groups

The opportunities to manage Reading Groups described in this section provide a means to mitigate spam, abusive content, or content outside the parameters of an instance’s terms and conditions.

As an example, with this interface you can search for Reading Groups you expect to be spam, and from those search results, you can then select which you wish to remove. You can likewise drill down into a view listing all of a Group’s annotations and filter those annotations by date, flag, or user to remove inappropriate content, either individually or in bulk.

These features work in conjunction with the platform’s email verification, models of trust, and rate limiting systems described in the [Spam Baseline Guardrails section](../administering/spam.md).

:::note More on Flagging and Terms and Conditions
Learn more about how to flag annotations and comments content in the [Reporting Inappropriate Content section](../using/reading_manifold.md#reporting-inappropriate-content).

The [Pages section](../backend/pages.md) of this documentation describes how to set Terms and Conditions for your instance. Note that we do not supply a Terms and Conditions template for general use.
:::

## Interface Overview

The landing page for Reading Group management is made up of two parts: a search bar and a paginated list of *all* the Reading Groups living on your instance, regardless of their privacy settings.

## Search

The search bar in this view only returns results for Reading Group names and only accepts keyword searches. The search bar does not recognize search operators as such. Results populate below the search bar, replacing the full list of Reading Groups.

There are two buttons within the search bar: **Reset** and **Options**.

The **Reset** button clears the search bar and resets the listings to the default view that shows all of the instance’s Reading Groups. The **Options** button unveils three dropdowns to filter and sort the results of a search. Search results can be filtered by (1) privacy setting, (2) by flag status, and (3) by creation date or alphabetically.

An example use case then would be to sort the list of Reading Groups to show only Public Reading Groups that contain flagged annotations—and to then use the search bar to refine that further based off a keyword query.

:::info More and Less Specific Searches
It *is* possible to search for specific user names or passages of text contained in annotations that were made in the context of a Reading Group—just not from this view. For searches of this kind, see the [Reading Group Annotations](../administering/readingGroups_be.md#reading-group-annotations) section below.

You can use the search filters to refine the list of Reading Groups without including a keyword search. When you make selections from the filter dropdowns, the list will automatically update to match the criteria you have selected.
:::

## Reading Group List

The Reading Group list below the search bar defaults to a paginated view of all the instance’s Reading Groups. The list is adorned by a button labeled **Bulk Actions** at the top, below which is a status readout that provides the number of Reading Groups listings currently being displayed against the total number of Readings Groups. This list paginates after ten listings, so this line might read something like

> Showing 1–10 of 15 Reading Groups

Below, each Reading Group entry includes its name, the group’s privacy setting—public, private, or anonymous—the number of members and annotations associated with the group, a date denoting when the group was created, and a button that allows an administrator to delete that particular group.

When you use the search bar, any results from that search will displace the default listings in favor of results that match the criteria from the search bar.

## Deleting Reading Groups

There are two means to delete a reading group from this view: individually or in bulk.

### Deleting Groups Individually

Each Reading Group entry includes a delete button on the right side of the listing, appearing in for the form of a trashcan icon. When that button is selected, the system will prompt the user to confirm they want to delete that particular reading group. Once confirmed, that group will be removed from the system.

You can also delete Reading Groups individually from the Group’s backend detail view discussed below in the [Investigating Individual Reading Groups section](../administering/readingGroups_be.md#investigating-individual-reading-groups). Groups can also be deleted from the frontend, as described in the [Using Manifold Reading Groups section](../using/reading_groups.md#edit-reading-group).

### Deleting Groups in Bulk

The **Bulk Actions** button at the top of the list is the means by which an Admin can select one or more groups for deletion. See the [Bulk Actions section](../administering/bulkActions.md) for background and details on this process.

### Annotations in Deleted Reading Groups

When deleting a public Reading Group, all annotations users made within the auspices of that Group will transition to their respective **My Public Annotations** group. As such their annotations will be generally available to anyone coming to the instance. Comments, which are responses to annotations (or to other comments), will likewise be publicly viewable.

Annotations made in private or anonymous Groups that are deleted will be retained in the **My Private Annotations** group of those users who created them. Comments saved to deleted private Groups will only appear in the **My Private Annotations** group for the user whose annotation was commented upon, not for the user who left the comment.

Comments are not possible in anonymous groups.

## Investigating Individual Reading Groups

Reading Group names in the list on this page function as links that direct users to a detail view, where basic information about the group is provided, alongside opportunities to review and manage group membership and annotations. These opportunities are meant to give administrators better means to address bad actors, bots, and spam content in efficient and organic ways.

When you select a Reading Group name, you will be directed to the the detail view for that group.

### Detail Interface Overview

The Reading Group Detail view comprises a header, a sidebar, and primary pane.

The Header shows the name of the Group beside its privacy setting: public, private, or anonymous. Below the Group name there are two button options to **View** the Reading Group or to **Delete** it. The **View** button directs you to the frontend view of the Group that members of the group would encounter, while the **Delete** button is another opportunity to individually remove a particular Group from the system.

The sidebar includes three menu options: **Detail**, **Members**, and **Annotations**. The Detail sidebar item is the default view you land on when you move to this space.

The primary pane is where details about the group, its membership, or the annotations associated with the group appear and can be managed.

### Reading Group Details

A Reading Group’s **Details** sidebar view displays an assortment of basic metadata concerning the Group in the primary pane. This information is divided across three sections gathered under the following headings: **About**, **Group**, and **Content**:

- The **About** section lists the Group’s privacy setting, indicates the current number of members, and names the user who created the Group.
- The **Group** section contains the current count for the number of annotations associated with the Group.
- The **Content** section list the aggregate number of Projects, Texts, Text Sections, Project Collections, and Resources that have been added to the Group.

This view is purely informative. No actions can occur in this space.

### Reading Group Membership

The **Members** sidebar in the Reading Group detail view provides a paginated list of all Group members. Each listing includes the member’s name; their role in the group—moderator or member—the number of annotations and comments they have associated with the group; and a button, appearing as an encircled minus sign, that allows you to remove that member from the group.

Administrators can select the member removal button with their mouse or by tabbing to it with their keyboard and selecting it with the space bar. When selected, the system will open a modal, asking you to confirm your choice to remove the group member.

If you opt to remove a group member, know that you are only severing their relationship with that particular group. Their user account will otherwise be unaffected, and the user will still be able to annotate and comment in other contexts as well as join other reading groups or create new ones of their own.

Likewise, annotations and comments are not affected by removing a group member. Annotations or comments left by a user who is removed from the group will continue to persist in the group unless those annotations or comments are specifically removed.

Users who saved annotations to a group that they have since been removed from will also still have access to their annotations. They will continue to appear for them in the Manifold Reader and be listed in their [Notepad menu dropdown](../using/reading_manifold.md#notepad).

That said, users who have been removed from a group will no longer have access to any comments—that is, responses to annotations or other comments—they left within the confines of that group. Those comments will only be available to current members of the group.

:::note Manually Removing Annotations and Comments
Annotations and comments can be removed by administrators in the frontend interface in the Reader’s annotation drawer using the **Delete** button associated with the content, from the See All view in the [Reader’s Notes dropdown menu](../using/reading_manifold.md#notes), in a [Reading Group’s **Notes + Comments** tab](../using/reading_groups.md#creator-moderator-and-administrator-view), and on a [Resource’s landing page](../using/manifold_projects.md#resources).

In the backend, annotations can be removed using the **Annotations sidebar** in a Reading Group’s detail view (considered below) or from the **Annotations** submenu, living within the **Records** menu view. Comments can likewise be removed from the backend, using the **Comments** submenu within the **Records** menu view. The **Annotations** and **Comments** submenu options are fully considered in the [Managing Annotations and Comments section](../administering/annoComments_be.md).
:::

### Reading Group Annotations

Here in the Reading Group detail view, the **Annotations** sidebar displays a search bar in the main pane above a paginated list of all the annotations associated with the Reading Group. All of the Annotations in this list are available to be removed in Bulk, using the **Bulk Actions** button atop the list. For more on deleting annotations in bulk, see the [Bulk Actions section](../administering/bulkActions.md).

The search bar in this space accepts keyword searches and returns results for usernames as well as words and phrases appearing in annotations. The search bar does not recognize search operators as such. Results populate below the search bar, displacing the default list of all annotations saved to the Reading Group.

There are two buttons with the search bar: **Reset** and **Options**.

The **Reset** button clears the search bar and resets the listings to the default view that shows all of the Group’s annotations. The **Options** button unveils two dropdowns to filter and order the results of a search. Search results can be filtered by flag status and ordered by creation date or by username. This allows administrators to quickly filter annotations for possible concerns, review them, and then, if warranted, take action to remove them. You can refine the list of annotations using only the filtering dropdowns. The list will update to match the criteria you select even if you don’t include a keyword search.

:::note What’s This Flagging of Which You Speak?
Flagging is the means by which users can call attention to specific annotations or comments for review by an instance administrator.

To learn more about how Flagging works in Manifold see the [Reporting Inappropriate Content section](../using/reading_manifold.md#reporting-inappropriate-content).
:::

Each annotation listed below the search bar comprises the date the annotation was made, the privacy setting associated with the annotation/group, notice of if and how many flags are associated with the annotation, the name of the user who left the annotation, the name of the text to which the annotation was saved, a snippet of the annotation, and a button (in the form of a trashcan icon) to delete the annotation.

There are three dynamic elements to each listing: the name of the user who left the annotation, the annotation snippet, and the delete button. All three elements can be selected with either your mouse or by tabbing to them and activating them with the space bar on your keyboard.

#### User Details

Selecting the name of the user who saved the Annotation directs you to that person’s User Record, where information about their Manifold account, Reading Group affiliations, and Annotation history can be reviewed. See the [Users section](../backend/users.md) for more about the views and options afforded in these records.

#### Annotation Detail View

When you select a listing’s annotation snippet, the view will shift away from the **Reading Groups** menu space to the Annotation Detail view, which is part of the **Records** menu. See the [Managing Annotations and Comments section](../administering/annoComments_be.md) for more about the options available in this view.

#### Deleting Annotations Singly

Beside the username and annotation snippet, the final dynamic element in an annotation’s listing here is the delete button, appearing in the form of a trashcan icon. When selected, the system will prompt you to confirm that you wish to delete the selected annotation in question.

You can also delete an individual annotation from its detail view, described in the section immediately previous to this one.

:::note Wait, What about Comments?
Comments are not indexed in this space. Indeed, there is currently no view to explicitly access comments associated with specific Reading Groups. However, all of an instance’s Comments are made available in the **Comments** submenu, nested within the **Records** backend menu. To learn more about the opportunities afforded there, see the [Managing Annotations and Comments section](../administering/annoComments_be.md).
:::