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

The **Integrations** menu is where Manifold administrators store application tokens and values from existing Facebook, Twitter, or Google properties so that new and existing readers can log into Manifold, make use of its social sharing functionalities, and Project editors can ingest Texts from Google and integrate their Projects with Twitter.

:::tip
Manifold does not require that you use a specific Facebook, Twitter, or Google property for these integrations. If you don’t want to use your or your organization’s existing accounts, you can create dedicated accounts for integrating these services with Manifold.
:::

## Facebook and Twitter

When values for the Facebook/Twitter fields are supplied, Manifold will include **Log in with Facebook** or **Log in with Twitter** buttons on the login page, and the system will be able to authenticate users against their existing Facebook/Twitter accounts: new users will be able to create Manifold accounts on the instance and users with existing Manifold accounts will be able to log in using their Facebook/Twitter credentials. Additionally, users will be able to share Texts and Resources directly to their Facebook/Twitter accounts from Manifold.

To integrate Facebook or Twitter with Manifold, you will first need to have a Facebook/Twitter account, register for a developer account, and then create an app in the Facebook/Twitter interface. See the [Facebook Developer Docs](https://developers.facebook.com/docs/apps/register#developer-account) or [Twitter App Interface](https://apps.twitter.com) to initiate and complete those processes.

As you create the app, both Facebook and Twitter will ask you to supply a pathway for OAuth callbacks, which the Manifold API handles. Use the tabs below to locate your OAuth callbacks and complete the Facebook/Twitter integration process.

<Tabs
  groupId="oauth-callbacks"
  defaultValue="facebook"
  values={[
    {label: 'Facebook', value: 'facebook'},
    {label: 'Twitter', value: 'twitter'},
  ]}>

<TabItem value="facebook">

The Facebook callback route is located at `/auth/facebook/callback`. The callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, if your Manifold API is on the same domain as the client application, and that domain is `manifoldapp.org`, the callback URL would be `http://manifoldapp.org/auth/facebook/callback`. Enter your Manifold API callback in your Facebook app’s **Valid OAuth redirect URIs** field.

Once your Facebook app is created, enter your Facebook App ID and App Secret values in Manifold, using the **Facebook App ID** and **Facebook App Secret** fields respectively.

These settings can also be [managed from environment variables](/docs/administering/configuring/managing_settings#from-the-environment).
</TabItem>

<TabItem value="twitter">

The Twitter callback route is located at `/auth/twitter/callback`. The callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, if your Manifold API is on the same domain as the client application, and that domain is `manifoldapp.org`, the callback URL would be `http://manifoldapp.org/auth/twitter/callback`.

After the callback URL has been supplied to the Twitter app, save the Consumer Key (API Key), Consumer Secret (API Secret), Access Token, and Access Token Secret the app generates into Manifold in the **Twitter Consumer Key**, **Twitter Consumer Secret**, **Twitter Access Token**, and **Twitter Access Token Secret** fields, respectively.

These settings can also be [managed from environment variables](/docs/administering/configuring/managing_settings#from-the-environment).

As you complete your Twitter app, it should be configured to be **Read Only**, **Request email addresses from users**, with **3-legged OAuth enabled**.

</TabItem>

</Tabs>

## Google Services Integration

Configuring Google Services to integrate with Manifold is a prerequisite for allowing readers to log into Manifold using their Google credentials and also enables Resources to be bulk imported into existing Projects via Google Drive.

To configure Google Services for Manifold, you will first need to create a Manifold Google project through the [Google Developer Console](https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project) and from there secure a [JSON Service Account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).

Once the Google project has been created, you will need to enable the following Google APIs in the Google Cloud Console:

1. Google Drive API
1. Google Sheets API

Manifold uses the Google Drive API when ingesting texts from Google Docs and when importing resources from a Google Drive folder. It uses the Google Sheets API when bulk ingesting resources from a Google sheet. If these APIs are not enabled, these features will not function as expected. For instructions on enabled Google APIs for your Google Cloud Project, please [consult the Google Cloud documentation](https://cloud.google.com/endpoints/docs/openapi/enable-api).

The **Console** tab in Google’s step-by-step docs refers to the Google Cloud web interface, and is what most users will want to follow.

When the Service Account Key has been saved to your system, you can load it into the **Google Service Config File** field in Manifold, which will automatically populate the rest of the required fields to complete the Google integration.

These settings can also be [managed from environment variables](/docs/administering/configuring/managing_settings#from-the-environment).

## Google OAuth

When values for the Google OAuth fields are supplied, Manifold will include **Log in with Google** button on the login page, and the system will be able to authenticate users against their existing Google account: new users will be able to create Manifold accounts on the instance and users with existing Manifold accounts will be able to log in using their Google credentials.

To enable Google OAuth on your instance, you will first need to complete the Google Services Integration described above.

The Manifold API handles OAuth callbacks. For Google, the callback route is located at `/auth/google/callback`. For your installation of Manifold, the callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is manifoldapp.org, the callback URL would be `http://manifoldapp.org/auth/google/callback`.

Manifold Google OAuth requires **Setup Consent** configured with your email, your authorized Manifold domain, and the callback URL entered in the **Authorized redirect URIs** field. The Manifold Integration page has fields to input both **Client ID** and **Client secret**.

These settings can also be [managed from environment variables](/docs/administering/configuring/managing_settings#from-the-environment).

## Google Analytics

Manifold ships with its own [built-in analytics reporting tool](../../backend/analytics.md), independent of third party systems. However, if you would like to secure usage data from Google as well, you can set up an analytics property in the Google Console. That property will enable Google to return usage information about your instance in the Google Analytics interface.

To enable this functionality, you will first need to complete the Google Services Integration described above. Once that is complete, [set up a Universal Authorization property](https://support.google.com/analytics/answer/10269537). The Tracking ID that results from that process should be saved to the **Google Analytics Tracking ID** field in Manifold, complete with the the `UA-` prefix.

These settings can also be [managed from environment variables](/docs/administering/configuring/managing_settings#from-the-environment).
