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

User accounts are “global roles.” The permissions these roles bestow, as described here,  function across an entire Manifold instance. It is also possible to extend similar permissions at the individual project level via “scoped roles” described in the [Managing Access](../../docs/backend/projects.md#access) section.

## User Roles

There are currently five different Users account roles available in Manifold:

### Administrator

All menus, settings, and actions available in the backend can be attended by an Administrator. Only those who have installed the instance and can access it through a command line interface (CLI) can exercise more control over an instance. Administrators can configure and manage all global settings.

### Editor

Editors can access all Manifold analytics, create, modify, or delete Projects, Journals, Issues, Maker records, and an installation’s Pages, regardless of who originally created them. Editors *do not* have access to an installation’s global settings, cannot manage Features, nor can they create, modify, or delete User accounts. Editors, however, can enable other users the ability to modify specific projects through a Project or Issue’s Access sidebar.

### Marketeer

Marketeers can create new and modify *all* existing Projects, Journal Issues, and Maker records, as well as create, modify, or delete an installation’s Pages and Features. While they can view and edit all Journals, they cannot create or delete them. Additionally, they *cannot* extend permissions to other users on a project-by-project (or issue-by-issue) basis, nor can they delete existing Maker records. Marketeers can access all Manifold analytics but not an instance’s global settings.

### Project Creator

This role allows enables a user to manage their own Projects, Journals, and Issues without being able to affect the instance as a whole or the publishing work of other users on the same instance. Project Creators can access the backend and modify all elements of those Projects, Journals, and Issues they’ve created. Likewise they have the authority to extend permissions to other users over those Projects and Issues they manage. Additionally, Project Creators can create new and modify existing Maker records; however, they cannot delete *any* Maker record, even those they created. Project Creators can view Project-level Manifold analytics but not instance-wide reports.

### Reader

The default user role. When logged in, a Reader can highlight, annotate, comment, make use of sharing functionalities, customize email notifications, and create or join Reading Groups. Readers don’t have native access to the backend in any capacity, but they can be scoped permissions to perform certain actions in the backend. Readers can also be classified as Project or Issue authors, which distinguishes their interactions with Texts from other readers. See [Managing Access](../../docs/backend/projects.md#access).

## Managing Users

**Users** are managed in the backend under the **Records** menu. The search bar accepts typed input to search for specific users and the user list can be paginated through for general browsing. The search bar includes two buttons: **Reset** and **Option.** Clicking **Reset** clears the existing search criteria and **Options** reveals the means to **Filter Results** by the roles described in the previous sections or to **Order Results** alphabetically by last or first name.

The **Add a new user** button opens a drawer from the right that allows Administrators to add a new user to the system, prompting for email address, a user role (Reader is the default), and a first and last name. Manifold will automatically generate a unique password that you can modify. You must complete all fields to create a new account. When the account is created a badge appears at the top of the shelf reading “New user record created.” The system automatically dispatches an email welcoming the new user to Manifold along with their login credentials.

When you select a User from the list, a shelf opens with options for editing their credentials. An administrator will also have the the following button options that they can use to perform actions on the account:

<dl>
  <dt>Admin Verify</dt>
  <dd>Using this option, Admins can manually verify a user account so that they can engage publicly with annotations and reading groups, even if the user has not verified their email address or they don’t fit into the user-trust model, described in the <a href="../administering/spam">Mitigating Spam section</a>. This option will be particularly useful for when an instance upgrades to v8.1 or later. At that point users who were used to engaging publicly will not be able to do so until they verify their email. This option allows Admins the ability to help alleviate any tensions that may arise from that. When this option is selected the text of the button will change to read <b>Revoke Admin Verification</b>. If selected, the user will no longer be able to engage publicly on the system until they verify their email or satisfy the system’s trust model.</dd>
  <dt>Unsubscribe</dt>
  <dd>The <b>Unsubscribe</b> button adjusts all of the user’s notification settings so that they do not receive any email notifications from the system. Users can change their <a href="../walkthroughs/notifications">Notification settings</a> again if they want to start getting messages again in the future.</dd>
  <dt>Reset Password</dt>
  <dd>This option resets the user’s existing password. When selected, the system opens a modal with three options: <b>Generate New Password</b>, <b>Set New Password</b>, or <b>Cancel</b>. When <b>Generate New Password</b> is selected, Manifold automatically sends a new, system-generated password directly to the user via email. Conversely, <b>Set New Password</b>, allows the admin to manually input a new password that they can convey to the user outside of the system, via their own email or preferred messaging system.</dd>
  <dt>Delete</dt>
  <dd>Deleting a user removes the user account from the system along with all of their annotations, comments, and reading group memberships. Any reading groups the user created will persist without a moderator until assigned a new one by an admin. When this option is selected, you will receive a warning you must approve, and then a brief banner alert confirming the action.</dd>
</dl>

The user detail panel also provides a user’s trust badges within an rectangle immediately above the **Email** field. When a user is able to engage publicly on the system the box will be green; when they cannot it will be red. In total there are five different badges:

<dl>
  <dt>Admin verified</dt>
  <dd>This indicates that the user’s account has been verified by an Admin and is thus able to create public annotations and reading groups.</dd>
  <dt>Email not confirmed</dt>
  <dd>This badge will appear until the user verifies their email address. Alone, this does not mean the user cannot engage publicly. The user may be verified by an admin or fall within the trust model.</dd>
  <dt>Email confirmed (date)</dt>
  <dd>Once a user confirms their email address this badge will appear followed by the date they verified their email.</dd>
  <dt>Trusted Account</dt>
  <dd>An account is considered trusted by the system if the user has an Admin, Editor, Project Creator, or Marketeer role—or if the user has been granted the ability to edit a project in the backend using a project’s Access sidebar options.</dd>
  <dt>Public engagement disabled</dt>
  <dd>When a user has not confirmed their email, satisfied the Manifold trust model, or been verified by an Admin, they will not be able to leave public annotations or create public reading groups. When this is the case, this badge will be associated with their account.</dd>
</dl>