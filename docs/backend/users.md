---
id: users
title: Users
sidebar_label: Users
---

`Users` are created by those first signing up for an account with a particular instance of Manifold—or by an existing Administrator on behalf of one who doesn't yet have an account. User accounts provide credentials along the following lines:

In Manifold speak, user accounts are “global roles,” in that the permissions these roles bestow function as described here generally across a Manifold instance. It is also possible to extend similar permissions at an individual project level. Those are “scoped roles” that are fully described in the [`Access`](/projects#managing-access) section.

`Users` can be managed in the backend in `Records`. The main page `Search` bar allows typed input to search for users. There are two buttons at the far right of the Search bar: `Reset` and `Option.` Clicking `Reset` clears the search. Clicking `Options`reveals options to `Filter results` by roles outlined below, and to `Order Results` alphabetically by last or first name.

The `Add a new user` button opens a right shelf which allows Administrators to add a new user by adding an "Email", selecting a "Role" (Reader is the default), entering "First Name" and "Last Name." Manifold will generate a unique password. You must complete all fields to create a new account. When the account is created a badge appears at the top of the shelf "New user record created." Manifold automatically generates an email welcoming the new user to Manifold that contains the new user's credentials. The contents of the email may be adjusted in the `Email` tab under `Settings`. Once you have created the account you close the shelf by the `X Close` button in the top right corner of the shelf.

When you select a User from the list, a shelf opens with options for editing the credentials. The administrator will also have options to `Reset password`, `unsubscribe`, or `delete` the user. `Reset password` allows the administrator to automatically send the user a new password or set one manually.

When you delete a User, you receive a warning you must approve, and then a brief banner alert confirming the action.

## Administrator

All menus, settings, and actions available in the backend can be attended by an Administrator. Only those who have installed the instance and can access it through a command line interface (CLI) can exercise more control over an instance. Administrators can configure and manage global settings.

## Editor

Editors can create, modify, or delete Projects, [Maker records](/docs/backend/makers.md) and an installation's [Pages](/docs/backend/records/pages.md), regardless of who originally created them. Editors *do not* have access to an installation's global settings, cannot manage `Features`, nor can they create, modify, or delete user accounts. Editors, however, can grant other users [`Access`](/docs/backend/projects.md/#managing-access) to modify specific projects.

## Project Creator

Can access the backend and modify all elements of those projects they've created or those for which they have been scoped `Can Modify Project` editor permissions in a Project's [Access settings](/docs/backend/projects.md#managing-access). Project Creators likewise have the authority to extend permissions to other users over those projects they manage. Additionally, Project Creators can create new and modify existing Maker records; however, they cannot delete *any* Maker record, even those they created.
This role allows members of distinct units to control their own projects without affecting the instance as a whole or the publishing work of other units on the same instance.

## Marketeer

Marketeers can modify *all* existing Projects and Maker records, as well as create, modify, or delete an installation's `Pages` and `Features`. However, they *cannot* extend permissions to other users on a project-by-project basis, nor can they create new or delete existing Maker records.

## Reader

The default user role. When logged in a Reader can highlight, annotate, comment, make use of sharing functionalities, and customize email notifications, all of which are described in detail in the [Reading section](/docs/reading/index.html). Readers don't have native access to the backend in any capacity, but they can be scoped permissions to perform certain actions in the backend (e.g., adding resources to a project or modifying metadata). Readers can also be classified as project authors, which distinguishes their interactions with their text from other readers. For more about what permissions can be scoped to the Reader role on a project-by-project basis, see the [`Access` section](/docs/projects/customizing/projects.md#managing).
