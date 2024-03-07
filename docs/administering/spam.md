---
id: spam
title: Mitigating Spam
sidebar_label: Mitigating Spam
---

Manifold employs three tactics to guard against bad actors taking advantage of the social components of the system: (1) email verification, coupled with a model of user trust; (2) rate limits levied against user engagements, and (3) integration with the spam-detection service, [Akismet](https://akismet.com/).

## Email Verification

Beginning with v8.1, Manifold requires that new, *as well as existing*, users verify the email address associated with their Manifold account. Users who fail to verify their accounts will not be allowed to leave public annotations, comment publicly, or create public reading groups. Until their email address is confirmed, unverified users will only be able to make private annotations or create and engage in private reading groups.

Because this step applies to new *and* existing users, after upgrading to v8.1 or later, users who could engage publicly before the upgrade will need to verify their email address following the upgrade. See the [Your Account](../using/your_account.md) section for more on the verification process.

However, there are caveats, and the following two sections describe some exceptions to this verification requirement.

## User Trust

We constructed a user-trust model where trusted users can engage publicly on the system even if they have not verified their email address.

By default, users with Admin, Editor, Project Creator, or Marketeer roles are considered trusted members of the system and thus able to engage publicly, even when they have not verified their email address.

Additionally, users who have been granted access to modify a project in the backend using a project’s [Access sidebar](../backend/projects.md#access) are also considered trusted by the system and able to engage publicly with others.

See the [Users section](../backend/users.md) for more about the different account roles available in Manifold.

:::note What about Authors?
Currently *only* users who have **Can Modify Project** toggled on from the Access sidebar are considered trusted. Users who have either the toggle for **Can Modify Resource Metadata** or **Author** activated are not viewed as trusted accounts and therefore cannot engage with others publicly—unless or until they verify their email address.
:::

## Establishing Existing Users

Through the **User** list view, located under the **Records** menu in the backend, users with Admin roles can bypass the above trust model and verification protocol and opt to manually verify a user as a trusted user. When a user is thusly verified, they will be able to engage publicly on the system, even if they haven’t verified their email or otherwise qualify as a trusted user.

See the [Users section](../backend/users.md) for more on how Admins can manually verify an account.

## Rate Limits

As of v8.0.7, the following rate limits are applied to all users who are *not* Admins. These limits are in place as one method to guard against the proliferation of spam content.

- A single user can make up to 5 public annotations in a 5 minute period.
- A single IP address can make up to 5 public annotations in a 5 minute period.
- A single user can make up to 10 comments in a 60 minute period.
- A single IP address can make up to 10 comments in a 60 minute period.
- A single user can make up to 10 public reading groups in a 60 minute period.
- A single IP address can make up to 10 public reading groups in a 60 minute period.
- A single real email can attempt to register up to 5 times within a day or else that email is banned for a month (n.b., aliases like zach+foo@gmail.com and zach+bar@gmail.com are be treated as the same email).
- A single IP address can attempt to register up to 5 times within a day or else that IP is banned for a month.

It should be noted that the limits on annotations and reading groups described here are only applied if they are public. Comments are limited as noted, even if they are in response to annotations made in a private context.

## Akismet

[Akismet](https://akismet.com/) is a spam detection and filtering service. When you associate your Akismet credentials with Manifold, Manifold will pass all comments, public reading group titles, and public annotations through Akismet to see if it’s spam. If Akismet flags the content as spam, Manifold won’t create it.

It is important to note that this filtering is applied only to users who have the default Reader role, regardless of whether they have verified their email address or been verified by an Admin. Users with Project Creator, Marketeer, Editor and Admin roles—as well as Readers who have been granted permission to access and edit projects in the backend (i.e., “trusted” users, as described above)—are except from Akismet filtering. See the [Users section](../backend/users.md) for more on these different roles.

If your Manifold instance is hosted by Manifold Digital Services, your instance is automatically filtering content against Akismet. If your instance is self-hosted you will need to sign up for Akismet and associate the API key they provide to you with your instance. See the [Settings section](../administering/configuring/properties.md) for more on how to connect your instance with Akismet.

It is not currently possibly to make use of other spam-filtering services.

:::note API Limits
It is important to note that the amount of content that Akismet will filter depends on the Akismet plan you select for your instance and how may API calls per month are allowed through that plan. If your instance makes more calls than the plan you selected from Akismet allows for, filtering will begin to fail silently and spam may appear on your site.
:::

