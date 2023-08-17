---
id: privacy_settings
title: Privacy Settings
sidebar_label: Privacy Settings
---

Beginning with version 8.0, Manifold is compliant with the expectations of the European Union’s General Data Protection Regulation (GDPR) in its treatment of your data and in providing you options for what information you want to share with the system.

When first navigating to an instance, a banner will display across the bottom of the page, prompting users to choose which, if any, tracking cookies they want to allow. Two options are provided: **Accept All** and **Settings**.

If **Accept All** is chosen, Manifold will set tokens locally in the user’s browser as a means to report anonymized [internal analytics information](../docs/backend/analytics.md) about what pages users access and how much time they spend on those pages. There is no personally identifiable information stored in relation to this usage data. For those users who have credentials to access the Manifold backend, the aggregated usage data is displayed in the various Analytics views therein.

The **Accept All** option also allows instances that have [configured Google Analytics](../docs/administering/configuring/integration_settings.md) to run on the site the ability for Google to record the user’s anonymized interactions with the instance. Site administrators can access analytics that Google records in the [Google Analytics property](https://analytics.google.com/analytics/web/#/) they set up for integration with the instance.

If **Settings** is selected, the ribbon transforms into a more detailed view that allows a user to explicitly select, via check box, the option for either Internal or Google Analytics, for those instances that have integrated with Google Analytics. Once satisfied with their selection, users can click the **Accept** button to proceed to the instance. Alternatively, users can opt to ignore the check boxes and instead select the **Decline All** button, which will allow them to enter the site without having any information about their activity reported back to either Manifold or Google.

Users do not need to have a Manifold account to have their selection saved. Anonymous consent is stored in the user’s browser locally in a cookie. However, users *will* need to either clear their browser’s cookies or create an account if they wish to adjust their selection. Users with accounts can access these privacy settings by selecting the user avatar on the right side of the site’s menu bar and then selecting **Privacy** from the dropdown. 

:::info A Word about Personally Identifiable Information (PII)
Manifold collects name and email information for all users. Manifold also collect passwords, which are fully encrypted, for all users—except for those users who authenticate using a third party OAuth provider (Google, Facebook, Twitter). No other personal information is collected.

That said, when you create a highlight, annotate a text, or add a comment, Manifold stores it in its database. Manifold also keeps track of content that you’ve starred and stores basic information about each reading group, the content that has been collected in the group, and the group’s members.
:::

:::tip Options for Admin Users
Users with Administrator accounts can adjust the language displayed to users in the views described here. The fields to adjust them can be found at the bottom of the [Theme Settings](../docs/administering/configuring/theme_settings.md) section of the Manifold backend under the **Content** heading.

The aim would not be to change the facts of how the system works but instead to adjust the tone of the messaging to match to your instance’s voice, as well as to provide you the opportunity to adjust the amount of context you may want to provide.
:::