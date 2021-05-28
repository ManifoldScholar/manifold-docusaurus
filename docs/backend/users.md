---
id: users
title: Users
sidebar_label: Users
---

:::location
The fields discussed in this section can be accessed from the Manifold backend by selecting **Records** from the main menu and then **Users** in the submenu.

Only users logged in with **Admin** credentials can access this view.
:::

## What is a User?

**Users** refer to those who are actively engaging with content on a Manifold instance—reading, annotating, following projects, managing an instance, creating new projects, or managing existing ones. User accounts are made when someone first signs up to an instance or when an existing Administrator creates an account on their behalf.

User accounts are “global roles.” The permissions these roles bestow, as described here,  function across an entire Manifold instance. It is also possible to extend similar permissions at the individual project level via “scoped roles” described in the [Managing Access](../../docs/backend/projects.md#managing-access) section.

## User Roles

There are currently five different Users account roles available in Manifold:

### Administrator

All menus, settings, and actions available in the backend can be attended by an Administrator. Only those who have installed the instance and can access it through a command line interface (CLI) can exercise more control over an instance. Administrators can configure and manage all global settings.

### Editor

Editors can access all Manifold analytics, create, modify, or delete Projects, Maker records, and an installation’s Pages, regardless of who originally created them. Editors *do not* have access to an installation’s global settings, cannot manage Features, nor can they create, modify, or delete User accounts. Editors, however, can enable other users the ability to modify specific projects through a Project’s Access sidebar.

### Marketeer

Marketeers can create new and modify *all* existing Projects and Maker records, as well as create, modify, or delete an installation’s Pages and Features. However, they *cannot* extend permissions to other users on a project-by-project basis, nor can they delete existing Maker records. Marketeers can access all Manifold analytics but not an instance’s global settings.

### Project Creator

This role allows enables a user to manage their own Projects without being able to affect the instance as a whole or the publishing work of other users on the same instance. Project Creators can access the backend and modify all elements of those Projects they’ve created. Likewise they have the authority to extend permissions to other users over those projects they manage. Additionally, Project Creators can create new and modify existing Maker records; however, they cannot delete *any* Maker record, even those they created. Project Creators can view Project-level Manifold analytics but not instance-wide reports.

### Reader

The default user role. When logged in, a Reader can highlight, annotate, comment, make use of sharing functionalities, customize email notifications, and create or join Reading Groups. Readers don’t have native access to the backend in any capacity, but they can be scoped permissions to perform certain actions in the backend. Readers can also be classified as Project authors, which distinguishes their interactions with Project Texts from other readers. See [Managing Access](../../docs/backend/projects.md#managing-access).


## Managing Users

**Users** are managed in the backend under the **Records** menu. The search bar accepts typed input to search for specific users and the user list can be paginated through for general browsing. The search bar includes two buttons: **Reset** and **Option.** Clicking **Reset** clears the existing search criteria and **Options** reveals the means to **Filter Results** by the roles described in the previous sections or to **Order Results** alphabetically by last or first name.

The **Add a new user** button opens a drawer from the right that allows Administrators to add a new user to the system, prompting for email address, a user role (Reader is the default), and a first and last name. Manifold will automatically generate a unique password that you can modify. You must complete all fields to create a new account. When the account is created a badge appears at the top of the shelf reading "New user record created." The system automatically dispatches an email welcoming the new user to Manifold along with their login credentials.

When you select a User from the list, a shelf opens with options for editing the credentials. The administrator will also have options to **Reset Password**, **Unsubscribe**, or **Delete** the user. **Reset Password** allows the administrator to automatically send the user a new password or set one manually.

When you delete a User, you receive a warning you must approve, and then a brief banner alert confirming the action.