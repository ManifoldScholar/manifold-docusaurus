---
id: integration_settings
title: Integration Settings
sidebar_label: Integration Settings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::location
The fields discussed in this section can be accessed from the Manifold backend by selecting **Settings** from the main menu and then **Ingestion Settings** in the submenu.

Only users logged in with **Admin** credentials can access this view.
:::

There are some *optional* Manifold functionalities that are accomplished with Google services. In order to bring those services to bear on an instance, a connection between Manifold and Google needs to be established.

The **Integrations** menu is where Manifold administrators establish those connections, by saving to the system application tokens and values from Google properties they control. Making these connections allows Project editors to ingest Texts and Resources from Google Docs and Sheets, respectively. And it allows Google to collect usage data from an instance for display in the Google Analytics dashboard.

:::note
Manifold does not require that you use a specific Google property for these integrations. If you don’t want to use your or your organization’s existing accounts, you can create dedicated Google accounts for integrating these services with Manifold.
:::

## Google Services Integration

Configuring Google Services to integrate with Manifold enables Manifold to ingest texts from Google Docs and import Resources in bulk into existing Projects via Google Sheets and Drive.

To configure Google Services for Manifold, you will first need to create a Manifold Google project through the [Google Developer Console](https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project) and from there secure a [JSON Service Account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).

Once the Google project has been created, you will need to enable the following Google APIs in the Google Cloud Console:

1. Google Drive API
1. Google Sheets API

Manifold uses the Google Drive API when ingesting texts from Google Docs and when importing resources from a Google Drive folder. It uses the Google Sheets API when bulk ingesting resources from a Google sheet. If these APIs are not enabled, these features will not function as expected. For instructions on enabled Google APIs for your Google Cloud Project, please [consult the Google Cloud documentation](https://cloud.google.com/endpoints/docs/openapi/enable-api).

The **Console** tab in Google’s step-by-step docs refers to the Google Cloud web interface, and is what most users will want to follow.

When the Service Account Key has been saved to your system, you can load it into the **Google Service Config File** field in Manifold, which will automatically populate the rest of the required fields to complete the Google integration.

These settings can also be [managed from environment variables](/docs/administering/configuring/managing_settings#from-the-environment).

## Google Analytics

Manifold ships with its own [built-in analytics reporting tool](../../backend/analytics.md), independent of third party systems. However, if you would like to secure usage data from Google as well, you can set up an analytics property in the Google Console. That property will enable Google to return usage information about your instance in the Google Analytics interface.

To enable this functionality, you will first need to complete the Google Services Integration described above. Once that is complete, [set up a Universal Authorization property](https://support.google.com/analytics/answer/10269537). The Tracking ID that results from that process should be saved to the **Google Analytics Tracking ID** field in Manifold, complete with the the `UA-` prefix.

These settings can also be [managed from environment variables](/docs/administering/configuring/managing_settings#from-the-environment).
