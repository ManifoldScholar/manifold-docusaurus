---
id: user_groups
title: User Groups
sidebar_label: User Groups
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Spec from "@theme/Spec";

:::location
The User Groups detail views discussed in this section are accessed by selecting Records from the main menu and then User Groups in the submenu while in the Manifold backend.

Only users logged in with **Admin**, **Editor**, or **Marketeer** credentials can access this view.
:::

## What Are User Groups?

User Groups are a means to grant a cohort of *existing* users entitlements to view and engage with specific Manifold Projects, Journals, or individual Journal Issues that have been access restricted.

This feature extends the functionality found in a Project’s [**Access** sidebar](../backend/projects.md#access). Within an individual project, the **Access** sidebar only provides the ability to create entitlements for that specific project. From this view, you can create a group of users and then provide members of that group entitlements to any Project, Journal, or Journal issue on the site.

Likewise, this feature is similar but distinct from [Pending Entitlements](../backend/entitlements.md), which are a means of granting entitlements en masse to one or more *potential* users who do not currently have Manifold accounts.

And while it is possible to use a Project’s or Journal’s or Journal Issue’s **Access** sidebar to grant entitlements to all the members of a [Reading Group](../using/reading_groups.md), those entitlements need to be doled out on a project-by-project basis to said group. That is not the case with User Groups: both the group’s membership and its allotment of entitlements are all managed through this one view. And, of course, there is no need to create and manage the rest of the structures typically associated with Reading Groups. If all you need to do is grant entitlements to a group of users, User Groups are the way to do it, instead of using Reading Groups as a workaround.

## Interface Overview

The Users Groups details page is simple in makeup, with a button labeled **Add New User Group** positioned over a paginated list of existing Reading Groups. The name of each User Group in the list is selectable and opens a detail view for that group, made up a heading, a sidebar, and an editing pane. Each of those will be considered in more detail in the following sections.

## Creating User Groups

On the User Group detail page, the **Add New User Group** button opens a sidebar with one field—**Name**. The value input there will serve as the display name for the User Group throughout the Manifold backend. That name will not appear in any frontend views nor will it be available to members of the group. Once you enter a name and select the **Save** button, the User Group is created and the view will change to the detail page for the User Group, where members can be added and entitlements defined.

## Editing User Groups

Immediately after you create a new User Group, or when you select one from the list of existing User Groups, you will be directed to that User Group’s detail view, made up of a heading, a sidebar with three options—**Properties**, **Users**, and **Entitlements**, and an editing pane with field options that correspond to whichever sidebar option is selected.

### Deleting Groups

The heading lists the name of the User Group above one button option, labeled **Delete**. That delete button is the only means to remove a User Group from the system. When a User Group is deleted, all the entitlements that users of that group inherited from their Group membership will be terminated. Deleting a User Group does not delete the user accounts for members of the group; instead those members will simply no longer have access to the projects, journals, or journals issues they secured through being a member of the group.

### Group Properties

The **Properties** sidebar is the default view when accessing a User Group detail page. There is only one field in this view: **Name**. This field shows the current name for the User Group, which you can edit and update. When the **Save User Group** button is selected, the group name will be updated throughout the system.

### Managing Users

The **Users** sidebar is where group membership is managed. Here you can add or remove members from User Groups. The editing pane in this view shows a heading labeled **Manage Users** with one button below it: **Add Members**. Below the heading there is a paginated list of users who are members of the group.

When you select the **Add Members** button, the list transforms, now showing a list of all the users with accounts on the instance. Additionally, the **Add Members** button now shows as **Show Members Only** in the heading. Each listing in this view shows the user’s name, with tags indicating their user role. If a user is a current member of the group, their listing will have an additional tag labeled **Member** denoting that. For those users who are not already members of the group, there will be an add button on the right side of the listing, appearing as an encircled plus sign. When the add button is selected, that user will be made a part of the group.

The list of users in this view can be filtered in several ways: atop the list there is a search bar that returns results on queries for user names. The search bar also includes two buttons: **Reset** and **Options**. When **Options** is selected two dropdowns appears, labeled **Role** and **Sort By**. These dropdowns allow you to filter users appearing in the list based on their role or order them alphabetically or reverse alphabetically by name. These options work in tandem with results from the search, allowing you to search and then filter as needed. The **Reset** button returns the list of users back to its starting state.

In order to return to a view showing just those users who are members of the group, select the **Show Members Only** button in the heading. In this state the list displays only those users who are members of the group with a tag indicating their role. Additionally there is a remove button, associated with each listing, appearing as an encircled minus sign. When the remove button is selected, that user will be removed from the group. Note that removing a member for a User Group does not delete that user’s account; it simply removes them from the group and terminates any existing entitlements they inherited from membership in the group.

When viewing either the list of group members or the list of all users on the instance, user names are selectable and direct to the [User detail view](../backend/users.md) for that particular user.

### Adding and Removing Entitlements

The **Entitlements** sidebar is where entitlements to view restricted-access projects and journals for User Groups are managed. Here you can provide entitlements to a User Group or remove existing entitlements, as needed.

Entitlements provided to a User Group are inherited by all active group members. When a user is removed from a group, or when a group is deleted, any entitlements provided by membership in the group are revoked.

This view includes one button—**Add Entitlement**—followed by a list of existing entitlements associated with a group. While entitlements can only be added to a group one at a time, there is no artificial limit to the total number of entitlements that can be associated with a group.

When the **Add Entitlement** button is selected, a drawer slides out with a search bar labeled **Project or Journal**, along with an **Expiration** field. This search bar *does not* populate a list of all possible projects or journals on the instance. Instead it expects a Project name will be provide to match against existing records. When a name is entered, the system will display matching results in the search dropdown. When you select a record its name will populate the search bar.

If one is desired, an expiration date for the entitlement can be saved to the **Expiration** field in the year-month-day format or by choosing a date from the provided calendar. The field also accepts human-readable strings (e.g., “in three days,” “in two months,” “in one year”). Entitlements remain in effect for the individual members of the group for the duration of the entitlement and so long as they remain a part of the group. When an expiration date is set, the entitlement will expire at midnight of the day entered here, according to the clock of wherever the server is hosted. When the **Expiration** field is left blank, the entitlement is understood to have no term limit.

When the **Save Entitlement** button is selected, an entitlement to that Project or Journal or Journal issue will be added to the User Group, now appearing in the list below the **Add Entitlement** button.

Each entitlement listing in this view incudes the name of the Project, Journal, or Journal issue to which access is being provided, along with a timestamp indicating the day that entitlement was added to the group. Each listing also includes a delete button, depicted by a trashcan icon, that will remove that specific entitlement from the group. This is the only means to selectively remove a specific entitlement from a User Group.

The name of each Project in the list is selectable and will open the detail view for said Project. When you navigate to the [Access sidebar](../backend/projects.md#access) for a Project to which access has been granted via a User Group entitlement, the names of every user in the group will appear beneath the **Project Entitlements** heading in the Project’s list of entitlements, with a tag indicating the name of the group of which they are a member.