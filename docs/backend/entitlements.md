---
id: entitlements
title: Pending Entitlements
sidebar_label: Entitlements
---

:::location
The Pending Entitlement views discussed in this section are accessed by selecting **Records** from backend main menu and then the **Entitlements** submenu listing.

Only users logged in with an **Admin** account can access this view and create or modify pending entitlements.
:::

## What is a Pending Entitlement

Pending Entitlements represent *potential* user accounts that have permission to view specific, restricted-access projects, journals, or journal issues in Manifold.

This view is where Pending Entitlements are added and managed. Here Manifold Admins can stage user accounts manually or via a CSV file. Those accounts, once confirmed and logged into, will have access to content that was specified for them during the staging process.

This functionality extends what is possible from a Project’s **Access** sidebar. Within an individual project, the **Access** sidebar only allows you to create entitlements for that specific project, and entitlements there can only be created for one account or reading group at a time. From this view, you can create entitlements for any Project or Journal on your instance and distribute them to large batches of potential users instead of individually.

As an added boon, if you add a pending entitlement here for a user who already has an existing account on your instance, the account in question will receive the entitlement as if it were bestowed from a project’s **Access** sidebar.

:::info What Problem Is this Solving for Me?
The use cases for this feature are myriad: Perhaps you want to grant an advance reviewer the ability to read a project that isn’t open access, or maybe you have a restricted-access journal for which you want to provide complimentary access to association members. Or maybe you need to grant an array of folks access to a variety of projects.

Pending Entitlements were created for situations like these, where you have a pool of potential users, users who may not have an account on your instance, who you want to give access to specific content that is not generally accessible.
:::

## Interface Overview

The Pending Entitlements details page is made up of two parts: a header up top and in the main space of your viewport, a pane where you can search for specific entitlements, add new entitlements, and see a list of all unclaimed entitlements.

### View CSV Imports

On a fresh page load, the header contains one link to **View CSV Imports**. When selected, the main pane will transform from a list of pending entitlements to a list of CSV entitlement imports, including the names of the CSV files that have been uploaded and a badge beside each listing indicating if the import was a success or not.

If a listing is selected, it will expand and show a log of the activity for that specific CSV import, with date stamps, line numbers, and email addresses for each row in the CSV upload.

Each listing also includes a link to download the CSV file that was loaded into the system.

From this view the link in the header now reads as **View Pending Entitlements** and will return users to the original Pending Entitlements view.

## Search Entitlements

Situated below the header, the search bar allows you to search for entitlements that have *not yet* been claimed. The system will *not* return results for entitlements that users have confirmed. Once a user has claimed their entitlement it will not display here, nor will it appear in search results.

This search bar only accepts queries for individual email addresses; personal names, partial email addresses, or multiple email addresses will not return any results. When a search yields results, those results will appear below the search bar in the main body of this view.

The search bar includes two buttons: one to **Reset** the search bar and results and the other, labeled **Options**, exposes a dropdown so users can sort through the list of results by creation or expiration date.

## Create Entitlements

Below the search bar, Admins can add new pending entitlements to the system, either individually or in bulk by way of a CSV upload, using the **Add Entitlement** and **Import from CSV** buttons respectively.

:::note Heads Up! Watch out for Draft Mode!
If a project is still in Draft, having an entitlement alone will not allow a user to access the project; it will first need to be toggled off of Draft status for those with an entitlement to gain access to it.
:::

### Add Individual Entitlements

When the **Add Entitlement** button is selected a drawer will slide open from the right of the screen exposing three fields and three dropdowns separated into two different categories.

Beneath the **User Details** category, you can enter the email address, first name, and last name of the person for whom you want to create the entitlement. The email address entered here will be the one the intended user will use to activate their pending account and log into the system. Once they have established their account, they will have the option to change their email address by [editing their profile](../docs/using/your_account.md).

The **Entitlement Details** section that follows is where you will specify which restricted-access project, journal, or journal issue you want to make available through the entitlement, using the three available dropdown menus.

The first dropdown in the Entitlement Details section, labeled **Type**, limits the scope of your potential selections for what you want to grant an entitlement to. The two available options are **Project** or **Journal**.

If you select Project, Manifold will limit the options for entitlements you can grant to standard Manifold projects *or* projects that have been set up as journal issues. If you select **Journal**, then you will only be able to select from among the journals you have on your instance. When you select a journal, you will be creating an entitlement to *all* of the issues of that particular journal—those currently existing and new issues as they are added. Thus if you only want to grant an entitlement to one specific journal issue, you should select Project from this dropdown.

The next dropdown is contextual and will read as either **Project** or **Journal**, depending on what you selected from the **Type** dropdown immediately above. If you selected Project, then this typeahead dropdown will allow you to scroll or search through all the project or individual journal issues on your instance. If you selected Journal previously, then only the names of the journals you have on your instance will appear. Selecting a journal will give the intended user an entitlement to all of the issues associated with that journal.

The final dropdown in this section, **Expiration**, is optional. If you want to make it so that the entitlement you grant expires on a certain day, you can enter or select a date with this dropdown using the month-day-year format. When an expiration date is set, the entitlement will expire at midnight of the day entered here, by the clock of wherever the server is hosted.

The **Save Entitlement** button at the bottom of the drawer finalizes the process or creates the pending entitlement.

### Add Entitlements in Bulk

As an alternative to creating individual entitlements, Manifold allows Admins to add entitlements at scale through the use of a CSV upload. When the **Import from CSV** button is selected, a drawer will open up from the right of the screen with two fields: The first field, labeled **Upload a CSV** is a textbox where you can upload a file describing the entitlements to be made, and the other, **Name**, is a space where you can associate a name with the upload for purposes of record keeping.

You can either drag and drop a CSV file with a `.txt` or `.csv` extension into the **Upload a CSV** space or use the **Upload a File** link within the text box to select a file through your operating system.

The CSV you upload should include five columns with the following column headers:

<dl>
  <dt>email</dt>
  <dd>Entries in this column should be individual email addresses: one email address per cell. Email addresses should <em>not</em> be enclosed within angle brackets.</dd>
  <dt>subject</dt>
  <dd>The information in the <b>subject</b> column tells Manifold what the entitlement is for. In the cells under <b>subject</b> the system is expecting one of two inputs: an id for the project, journal, or journal issue that is to be made available through the entitlement or a text-value of <code>subscriber</code>. IDs for projects, journals, and journal issues can be found in their respective <a href="/manifold-docusaurus/docs/backend/projects#access"><b>Access</b> sidebar</a>, nested under the heading labeled either <b>Project Entitlements</b> or <b>Journal Entitlements</b>. IDs are formatted as paths beginning with <code>gid://entitlements/</code> and terminating with a long, system-generated UUID string. The entirety of that ID associated with the project, journal, or journal issue should be included in the cell. Alternatively, if you enter <code>subscriber</code> in this column, the pending entitlement you create will grant that user access to <em>all</em> restricted access projects, journals, and journal issues on the instance.</dd>
  <dt>expiration</dt>
  <dd>As it was in the process to create an individual entitlement, entering a date-value into this column is optional. Dates should be formatted in the month-day-year format (MM/DD/YYYY). Entitlements will run through the expiration date, terminating at midnight of the date entered, according to the clock of the server where your instance is hosted.</dd>
  <dt>first_name</dt>
  <dd>This field expects a given name, including any middle name or initial.</dd>
  <dt>last_name</dt>
  <dd>The family or last name for the person to whom you are creating the entitlement.</dd>
</dl>

The following table presents how each of these values would appear in your file. These headings and values can be copied and pasted into your own file to get you started. Note that this table scrolls horizontally in the view below.

| `email`             | `subject`                         | `expiration` | `first_name` | `last_name`   |
| ------------------- | --------------------------------- | ------------ | ------------ | ------------- |
| `name01@domain.edu` | `gid://entitlements/Project/UUID` | `10/31/3031` | `Monica`     | `Morningstar` |
| `name02@domain.edu` | `gid://entitlements/Journal/UUID` |              | `Matthew M.` | `Midday`      |
| `name03@domain.edu` | `subscriber`                      |              | `Moritz`     | `Eveningstar` |

:::tip CSV Export Format
If using Excel, use the **Save As** function with `MS-DOS Comma Separated (.csv)` selected from the File Format dropdown that appears in the Save As dialog box. The other CSV options will include some invisible characters that will throw an error when the system attempts to read them.
:::

## System Messaging

The following emails are generated by the system when you create pending entitlements, either individually or via a CSV upload. The first is dispatched to the potential user when the entitlement is first saved:

> You have been granted pending access to the project, “Project Name” on “Name of Manifold Instance”, a Manifold installation. Create and verify an account with this same email address in order to view your content.
> 
> Login

After the person creates an account, the system will send the following message via email to the new Manifold user:

> Welcome to Manifold. Thanks for signing up!
> 
> Please confirm your email address.
> 
> Once you've logged in, you'll be able to annotate project texts and view your annotations. You'll also be able to engage in discussion about the texts and project resources.

Once that person has created an account, or if the person already has an existing account, they will receive one of the following messages, depending on whether they have been granted access to a project or all access-restricted content across the instance:

> You have been granted access to the project, “Pride and Prejudice”.
> 
> Login

> You have been granted access as a subscriber.
> 
> This will expire on October 31, 2024.

The content of these messages cannot currently be adjusted. However, the system will refer to itself according to the name you have given the instance’s [Properties view](../administering/configuring/properties.md). Likewise, you can adjust the signature block tha appears with these notes by adjusting **Email Closing** field found in the system’s [Email Settings view](../administering/configuring/email_settings.md).