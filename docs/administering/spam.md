---
id: spam
title: Baseline Guardrails
sidebar_label: Baseline Guardrails
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

## Finding and Deleting Spam

It's possible to query records in the database and bulk delete them, which can simplify cleaning up spam. The following instructions offer some starting point for finding and destroying spam *using the console*.

:::caution
With great power comes great responsibility. When using the console, it is possible to permanently delete records in Manifold or otherwise corrupt stored data. Make sure you have a recent backup before performing console commands and proceed with care. Everything below this warning could potentially destroy data in your instance and cause problems.

For users who are not comfortable using the console, there are opportunities to find and remove spam using views in the backend interface, described in the [Reading Groups Management section](../administering/readingGroups_be.md) as well as in the [Managing Annotations and Comments section](../administering/annoComments_be.md).
:::

The Manifold API is a Rails Application, and like all rails applications can be interacted with via the console. If Manifold was installed from source, you can shell into the server and navigate to the api directory in the Manifold root. From there you can access a Rails console with `bundle exec rails console`. If Manifold was installed from one of our packages, you can access the rails console with `manifold-api console`.

Once you're in the console, you can execute Ruby code that interacts with the models contained in the API application, which are generally mapped to rows in the database. If you need to clean up data, it should be done through the console rather than by executing SQL queries against the database. If you attempt to clean up data by querying the database directly, you run a greater risk of ending up with inconsistent data because no application validation and callback logic is executed when interacting with the database directly.

Once you're in the console, begin by attempting to select the records that you think are spam and assigning them to a variable. For example, on many instances we have seen spam attacks create public reading groups. Using the console, we can select all public reading groups created between two dates:

```ruby
groups_to_delete = ReadingGroup.where("privacy = 'public' AND created_at >= '2024-02-19' AND created_at <= '2024-02-20'");
```

Now that you have the groups you're targeting assigned to a variable, you can count them and make sure that you're targeting the expected number of records:
```ruby
groups_to_delete.count

=> 2
```

Or you can pluck specific columns from the results and review them as a sanity check:
```ruby
groups_to_delete.pluck(:name)

=> ["Self-Isolationists", "ENG 2100, Section ABC"]
```

You can also find out what columns exist on a given model by calling the `column_names` class method on the model.
```ruby
ReadingGroup.column_names

=> ["id", "name", "privacy", "invitation_code", "notify_on_join", "creator_id", "created_at", "updated_at", "reading_group_kind_id", "course"]
```

You can also use full text search on fields to find the groups. In this example, the percentage signs are wildcards.
```ruby
groups_to_delete = ReadingGroup.by_keyword("viagra");
```

Model names in the API are fairly predictable. Users are `User` and Annotations are `Annotation`, for example. For more on querying models, see Rails Documentation on [Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html).

Once you've selected the records that you think are spam, and you've triple checked to make sure you're not going to accidentally delete valid models, you can use the `destroy_all` method to *permanently destroy* these models. It's important that you call `destroy` for a single model and `destroy_all` for a set of models when you want to destroy data because these methods ensure that callbacks are executed. If you are destroying large numbers of records, it will take some time and you will see output scroll across the screen, which is normal.

Here's an example showing how you would select all public reading groups created between Feb 19 and Feb 20, 2024 and then permanently destroy those records:
```ruby
groups_to_delete = ReadingGroup.where("privacy = 'public' AND created_at >= '2024-02-19' AND created_at <= '2024-02-20'");
groups_to_delete.destroy_all
```

Again, be sure to back up your data before doing this and proceed with caution!
