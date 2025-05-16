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

Users accounts are managed in the backend under the **Records** menu and **Users** submenu. Users are displayed in a paginated list that can be refined through use of the search bar, which appears above the list.

The search bar includes two buttons: **Reset** and **Options**. Selecting **Reset** clears the existing search criteria and **Options** reveals two dropdown menus that provide the means to **Filter Results** by the roles described in the previous sections or to **Order Results** alphabetically by last or first name.

Between the search bar and the user list there are two buttons, **Bulk Actions** and **Add New User**, which allow you to delete or create user accounts, respectively. The process for creating accounts is described immediately below in the [Adding Users section](../backend/users.md#adding-users). Using Bulk Actions to delete accounts is considered at the end of this page in the [Deleting Users section](../backend/users.md#deleting-users).

Each list entry includes the user’s name followed by a tag indicating the role associated with that account. When selected, the username opens the [User Detail View](../backend/users.md#user-detail-view) described below.

### Adding Users

The **Add New User** button opens a detail view where Administrators can supply the system with information to create the new user account. There are five fields in this view, *all of which are required* before the new account can be created:

- Email
- First Name
- Last Name
- Role
- Password

The **Role** field is a dropdown that allows you to select any of the [User Roles](../backend/users.md#user-roles) described above. The system defaults new users to a Reader role unless you choose otherwise.

The **Password** field is prepopulated with a unique, automatically generated password, which you can modify. Passwords are hidden in this view by default, but you can select to reveal it using the **Show Password** button, which presents as a slashed-eye icon beside the field name. 

Once all the fields are complete, you can select the **Create User** button, and the account will be created. The system automatically dispatches an email welcoming the new user to Manifold along with their login credentials.

### User Detail View

When you select a username from the list, a detail view for that user opens. This view includes a header menu, a sidebar with two elements (Properties and Activity) and a display pane where you can adjust information related to the user account.

#### Header Menu

The header menu displays the user’s name beside the role associated with their account. On the bottom lip of the menu there are four options administrators can select to adjust the account: **Admin Verify**, **Unsubscribe**, **Reset Password**, and **Delete**:

- The **Admin Verify** button allows admins to manually verify a user account so that they can engage publicly with annotations and reading groups, even if the user has not verified their email address or they don’t fit into the user-trust model, described in the [Spam Baseline Guardrails section](../administering/spam.md). This option will be particularly useful for when an instance upgrades to v8.1 or later. At that point users who were used to engaging publicly will not be able to do so until they verify their email. This option allows admins the ability to help alleviate any tensions that may arise from that. When this option is selected the text of the button will change to read **Revoke Admin Verification**. If you revoke verification, the user will no longer be able to engage publicly on the system until they verify their email or satisfy the system’s trust model.
- The **Unsubscribe** button adjusts all of the user’s notification settings so that they do not receive any email notifications from the system. Users can change their [Notification settings](../walkthroughs/notifications.md) again if they want to start getting messages again in the future.
- The **Reset Password** option resets the user’s existing password. When selected, the system opens a modal with three options: **Generate New Password**, **Set New Password**, or **Cancel**. When **Generate New Password** is selected, Manifold automatically sends a new, system-generated password directly to the user via email. Conversely, **Set New Password**, allows the admin to manually input a new password that they can convey to the user outside of the system, via their own email or preferred messaging system.
- The **Delete** button removes the user account from the system. When this option is selected, you will receive a warning you must approve before the deletion is confirmed..See the Deleting Users section below to understand all the implications of this action with regard to the user’s existing content and engagement in the system.

#### Properties

The **Properties** sidebar displays the current values for the user’s email, name (first and last), and role in editable fields. Here you can change any of the user’s information, from adjusting their name or email, to changing to adjusting their role in the system.

The user detail panel also provides a user’s trust badges within an rectangle immediately above the **Email** field. When a user is able to engage publicly on the system the box will be green; when they cannot it will be red. In total there are five different badges: **Admin verified**, **Email not confirmed**, **Email confirmed**, **Trusted Account**, and **Public engagement disabled**. These badges describe where the user account fits within Manifold’s trust model:

- **Admin verified** indicates that the user’s account has been verified by an Admin and is thus able to create public annotations and reading groups.
- The **Email not confirmed** badge will appear until the user verifies their email address. Alone, this does not mean the user cannot engage publicly. The user may be verified by an admin or fall within the trust model, described below in the **Trusted Account** bullet point.
- Once a user confirms their email address the **Email confirmed** badge will appear followed by the date they verified their email.
- An account is considered trusted by the system if the user has an Admin, Editor, Project Creator, or Marketeer role—or if the user has been granted the ability to edit a project in the backend using a project’s Access sidebar options. When any one of those criteria is satisfied, the **Trusted Account** badge will appear.
- When a user has not confirmed their email, satisfied the Manifold trust model, or been verified by an Admin, they will not be able to leave public annotations or create public reading groups. When this is the case, the **Public engagement disabled** badge will be associated with their account.

#### Activity

The activity sidebar displays two paginated lists labeled **Reading Groups** and **Annotations**, which respectively list all the Reading Groups in which the user is a member and all the annotations the user has saved to the system. Both lists paginate after five entries.

##### Reading Groups List

Entries in the **Reading Groups** list are made up of the name of the Group; the user’s role within that Group, moderator or member; the number of annotations, highlights, and comments the user has saved to that Group; and a button that will remove the user from that group, depicted as an encircled minus sign. Groups that have a **Public** privacy level will have a blue flag beside their titles indicating such. Corresponding flags for private or anonymous groups do not appear in this space.

Of these elements, only two are dynamic: the name of the Group, and the removal button. When the name of the Group is selected from a list entry, the system will transition to the Members sidebar of the [Reading Group Detail view](../administering/readingGroups_be.md#reading-group-membership).

The removal button will remove the user from the Group in question. The [Reading Group Membership section](../administering/readingGroups_be.md#reading-group-membership) details the implications of this action relative to the user’s annotations and comments they associated with that Group.

##### Annotations List

Annotation list entries show the date the annotation was made, notice of whether the annotation is public or has any flags associated with it, the name of the text where the annotation was left, a preview snippet of the annotation itself, and a delete button in the shape of a trashcan icon.

Three of these elements are dynamic: the name of the text to which the annotation was saved, the snippet, and the delete button.

When selected, the name of the text takes you to the backend detail view for that text, described in the [Texts section](../backend/texts.md#editing-a-text), where you will have options to adjust the text itself or metadata associated with it.

The annotation snippet will move you to the [Annotations Detail view](../administering/annoComments_be.md#annotation-and-comment-detail-views), where you will have options to view the annotation in the frontend or delete it.

And the delete button will delete button will delete the annotation in question. For more about the implications on deleting annotations relative to any comment threads they may have inspired, see the [Comment Threads and Deleted Annotations section](../administering/annoComments_be.md#comment-threads-and-deleted-annotations). 

:::note Understanding Flags
See the [Reporting Inappropriate Content section](../using/reading_manifold.md#reporting-inappropriate-content) to learn more about what Flagging means in Manifold.
:::


### Deleting Users

Deleting a user removes the user account along with all of their annotations, comments, and reading group memberships. Any reading groups the user created will persist without a moderator until assigned a new one by an admin.

There are two means to remove users from the system: in bulk or individually.

The **Bulk Actions** button at the top of the user list is the means by which an admin can select one or more user accounts for deletion. See the [Bulk Actions](../administering/bulkActions.md) section for background and details on this process.

To remove a specific user individually, dive into that user’s detail view by selecting their name from the user list and then activate the **Delete** button that appears in the heading menu.