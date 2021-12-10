---
id: create_account
title: Create a Manifold Account
sidebar_label: Create a Manifold Account
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Spec from "@theme/Spec";

This page describes how to create a new user account on a Manifold instance.

## Directions

Accounts can be created with an email address or your existing Google, Facebook, or Twitter profiles.

<Tabs
  groupId="log-in"
  defaultValue="email"
  values={[
    {label: 'Email', value: 'email'},
    {label: 'Social Media Logins', value: 'social'},
  ]}>

<TabItem value="email">

1. Select the user link button, displayed as a silhouette avatar, on the right side of the header. This will open a modal overlay with a login form.
2. Select the link that reads **Need to sign up?** beneath the **Log In** button.
3. Enter into the appropriate fields your email address, display name, and password, and click the **Create Account** button.

</TabItem>

<TabItem value="social">

1. Select the user link button, displayed as a silhouette avatar, on the right side of the header. This will open a modal overlay with a login form.
2. Choose which social media profile you want to validate your Manifold account against by selecting the appropriate button at the bottom of the form: **Log in with Facebook,** **Log in with Google,** or **Log in with Twitter**.
3. Complete the prompts that appear in the pop-up window. The pop-up is controlled by whichever social platform you selected.

</TabItem>

</Tabs>

At this point your new account is active, and you will be directed to a form titled **Congratulations!** where you can adjust your name, email, or password, and add an optional profile image.

All of these settings can be accessed and modified later by again clicking the user link button in the header and selecting **Edit Profile** from the dropdown.

:::note
If there are no options to log in with your Google, Facebook, or Twitter credentials, it means the group who is managing the instance has not configured those integrations.
:::

## Next Steps

Now that you have an account you may want to configure your [Notification Settings](../docs/walkthroughs/notifications.md), [Annotate a Text](../docs/walkthroughs/annotating.md), or [Join a Reading Group](../docs/walkthroughs/join_rg.md).