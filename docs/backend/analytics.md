---
id: analytics
title: Analytics
sidebar_label: Analytics
---

import Spec from "@theme/Spec";

## About

Manifold includes a built-in analytics reporting system that functions independent of Google or other third-party providers. Our approach is founded in privacy while striving to provide meaningful usage and reporting data.

When Manifold tracks events, there is no connection in stored data between those events and specific user accounts. The system is intentionally designed so that it’s impossible to track an individual user’s activity. As part of that effort, the system masks IP addresses so that the IP of users accessing content is not maintained in Manifold and thus not part of any analytics reporting. Instead, Manifold stores a token to identify the visitor and their visit in a cookie. We need to store these tokens to avoid relying on a user’s authenticated session to identify them.

Manifold **_does_** store a user’s browser, operating system, device type, and user agent so that we can, in a later iteration of this feature, report on what devices people are using.

The system maintains three different analytics views: one for Instance-wide engagement, detailed in this section; another for engagement with specific Projects (see [Project Analytics](../backend/projects.md#analytics)); and a final view for individual Texts and Text sections (see [Text Analytics](../backend/text.md#analytics)) .

## Interface

<Spec
    title="Accessing this view"
    items={[
        { key: "Backend Location", value: "Main Menu → Analytics" },
        { key: "Required User Role", value: "Admin, Editor, or Marketeer" },
    ]}
/>

This view displays global engagement, aggregating user activity from across the instance into eight reports, which can be configured to return information for specific periods of time.

## Configuring Constraints

At the top of the view, the system provides options to configure custom or pre-set date ranges for which the subsequent reports will return values.

- **Start and End Date**. These two fields are a means to manually set a specific range of time the system will report engagement.

      	Dates can be entered here manually in the month, date, year format (MM/DD/YYYY) or selected from the date picker that appears when your cursor lands in this field.

- **Choose a Range Preset**. This field comprises four button options that will adjust the reports to pre-defined date ranges: `Last week`, which corresponds to the Sunday through Saturday before the current span of days; `Last month`; `Last 7 days`, which includes the current day as the seventh; and `Last 30 days`, which does likewise—day 30 is the current day.

## Reports

Following the date constraint options, the system displays eight usage reports, some with multiple data points, reflecting user activity across the instance during the defined time span.

At present there is no mechanism to export this data or mask from tracking the activity of specific users.

### Visitors

Rendered in a line chart, the `Visitors` report shows the number of **_unique_** visitors accessing any page on the instance during the set timespan.

Visits are tied to a user’s browser. Thus, a user working in one browser with multiple tabs open to the site will be counted only once. But if the same user accesses an instance from two different browsers, they will be recorded as two different visitors.

### Return Visits

Manifold tracks user visits with tokens, which are tied to both the user’s browser and the instance’s domain.

Each user is given two tokens when they first access an instance: a `Visitor` token and a `Visit` token. The former expires after 365 days; the latter after 1 day.

Manifold calculates return visits by aggregating, for the set time period, the number of expired `Visit` tokens for all users who have active `Visitor` tokens.

There are pitfalls in this approach: Users who change browsers will not be tracked accurately; some users may have browser extensions that prevent tokens from being set, and users who close and open the site multiple times a day (using the same browser) won't be tracked as a return visitor until their `Visit` token expires.

### Average Visit

Using the hour and minute metric, `Average Visit` captures the average amount of time visitors have spent on an instance. Because visits are tied to the browser, a user with multiple tabs open will be accurately recorded. But a single user who has different browsers open to the site will be tracked as two different visitors with different visit times.

### Engagement

The `Engagement` report displays the percentage of an instance’s visitors who have left an annotation, comment, or highlight on the instance. Those three actions are what Manifold considers engagement.

When a visitor engages with the instance, the system records an event and associates it with their visit token.

The figure in this report then is calculated by comparing visits in the set time period that have an associated engagement event against the total number of visits in that span.

### Followed

This report looks at the number of users in the system who are following projects and provides here a rounded average for the number of projects those users are following.

### Site Statistics

The data in the `Site Statistics` report are **_not_** constrained by the set date values. Instead, this section reports the sum total for each listed category: `Projects`, `Texts`, `Resources`, `Users`, `Annotations`, and `Comments`.

Of particular note, the total number of Users corresponds to the number of User listings under the Records menu (see [Users](../backend/users.md)), and the Annotations count **_does not_** include the number Resource Annotations that have been placed in the Reader.

Because the system caches some information for performance reasons, the values that appear in this report are accurate to within a day.

### Most Viewed Projects

Rendered in an expandable list, the `Most Viewed Projects` report aggregates the total number of times a Project homepage is viewed during the set timespan. The system **_does not_** include views of pages nested within a Project in this report.

Each time a visitor lands on a Project’s homepage, the system gives their browser a token associated with the Project. The system calculates the values it displays here by adding together the total number of tokens associated with the project from all the visitors who have accessed it.

Data in this report are accurate to within a few moments, and titles in the list link directly to the Analytics view for the respective Project.

The `See All →` button at the bottom of the list opens a new page that displays a dedicated view of this report in a longer, paginated list, and where the time constraints can be directly adjusted.

### Top Searches

Manifold caches the complete content of any search request made from the Manifold frontend. This report returns those results in a list view, ordered by the number of times each search was requested. The displayed counts are accurate to within a few moments.

The `See All →` button at the bottom of the list opens a new page that displays a dedicated view of this report in a longer, paginated list, and where the time constraints can be directly adjusted.
