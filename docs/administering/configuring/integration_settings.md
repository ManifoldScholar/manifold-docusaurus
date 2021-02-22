---
id: integration_settings
title: Integration Settings
sidebar_label: Integration Settings
---
The `Integrations` menu is where Manifold administrators can leverage external services, including Google, Twitter, and Facebook, for third party authentication, social sharing functionality, and to enable text ingestion from Google Docs.

By configuring OAuth, your readers can login to Manifold using their Facebook, Twitter, or Google login. Configuring each OAuth Provider involves generating access tokens and storing them in Manifold. Follow the specific instructions for each provider to set this up.

Before a publisher can input values into each of these fields, they will first need to set up accounts with Facebook, Twitter, and Google as described here.

## Facebook OAuth

If the Facebook OAuth Configuration feature is enabled, Manifold will include a "Log in with Facebook" button on the login page. Clicking the button will open a popup that allows users to authenticate using their Facebook account. On successful authentication, Manifold will create a user record (if it is the user's first time logging in) and an associated identity record.

These instructions document the process for acquiring OAuth keys from Facebook. It's possible that their process has changed since this was written. If that's the case, please [open a pull request](https://github.com/ManifoldScholar/manifold-docusaurus/pulls) against our documentation with a correction.

### Requirements

Before adding OAuth support for Facebook to Manifold, you will need a Facebook account, which will allow you to create a Manifold Facebook app.

* If you do not have one, create a Facebook app by following the steps in the [Facebook Developer Docs](https://developers.facebook.com/docs/apps/register#developer-account).

### Callback URL

The Manifold API handles OAuth callbacks. For Facebook, the callback route is located at `/auth/facebook/callback`. For your installation of Manifold, the callback URL will be the fully qualified domain name \(FQDN\) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is `manifoldapp.org`, the callback URL would be `http://manifoldapp.org/auth/facebook/callback`.

### Setup Redirect URL

1. Log into your account and app at [Facebook Developers](https://developers.facebook.com).
2. Under the "Products" header in the sidebar, add a new product.
3. Click "Set Up" on the "Facebook Login" item.
4. In "Facebook Login", select "Settings".
4. In the "Valid OAuth redirect URIs" field, enter the callback URL, described above.

### Get App ID and Secret ID

1. Navigate back to the dashboard from the sidebar.
2. Under "Settings" select "Basic".
3. Copy the values under "App ID" and "App Secret".

### Update Manifold Settings

Back in Manifold, navigate in "Settings" to "Integrations", and under the "Facebook" header, enter the App ID into the field labeled `Facebook App ID`. Enter the App Secret value into the field labeled `Facebook App Secret`.

Alternatively, if you manage settings in the environment (`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file), you should set the corresponding settings in `.env`:

``` conf
# Facebook OAuth Integration
MANIFOLD_SETTING_INTEGRATIONS_FACEBOOK_APP_ID=
MANIFOLD_SETTING_SECRETS_FACEBOOK_APP_SECRET=
```

## Twitter OAuth

If this feature is enabled, Manifold will include a "Log in with Twitter" button on the login page. Clicking the button will open a popup that allows users to authenticate using their Twitter account. On successful authentication, Manifold will create a user record (if it is the user's first time logging in) and an associated identity record.

These instructions document the process for acquiring OAuth keys from Twitter. It's possible that their process has changed since this was written. If that's the case, please [open a pull request](https://github.com/ManifoldScholar/manifold-docs/pulls) against our documentation with a correction.

### Requirements

Before adding OAuth support for Twitter to Manifold, you will need a Manifold Twitter app.

* If you do not have one, create a Twitter app through the [Twitter App Interface](https://apps.twitter.com).

### Callback URL

The Manifold API handles OAuth callbacks. For Twitter, the callback route is located at `/auth/twitter/callback`. For your installation of Manifold, the callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is `manifoldapp.org`, the callback URL would be `http://manifoldapp.org/auth/twitter/callback`.

### Setup Required URLs

1. Log into your account and app at [Twitter Apps](https://apps.twitter.com).
2. Navigate to the Developer Portal and select your app from Projects & Apps in the lefthand menu.
3. In the "Settings" tab update your app settings.
3. In the "Callback URL" field, enter the callback URL, defined above.
4. In the Privacy Policy field, add a link to your privacy policy. This is a required field.
5. In the Terms of Service field, add a link to your terms of service. This is a required field.
6. Save the settings.

### Add Permission Settings

1. Navigate to the "Permissions" tab.
2. Change your app's Access Level to "Read Only".
3. Check the box to "Request email addresses from users".

### Get App ID and Secret ID

1. Navigate to the "Keys and Access Tokens" tab.
2. Copy the values under "Consumer Key/(API Key)" and "Consumer Secret/(API Secret)".

### Update Manifold Settings

Back in Manifold, under the "Twitter" header, enter the Consumer Key into the field labeled `Twitter Consumer Key`. Enter the Consumer secret into the field labeled `Twitter Consumer Secret`.

Alternatively, if you manage settings in the environment (`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file), you should set the corresponding settings in `.env`:

```
MANIFOLD_SETTING_INTEGRATIONS_TWITTER_APP_ID=
MANIFOLD_SETTING_SECRETS_TWITTER_APP_SECRET=
```

## Google Services

By configuring Google Services, a publisher will unlock the ability to import texts from Google Docs into the Manifold reader, import resources in bulk into existing projects (using Google Drive), and leverage Google Analytics to get detailed statistics about reader use and interaction with the Manifold instance. To make it possible for your readers to log into your Manifold instance using their Google credentials, you will need to configure OAuth after you configure Google Services.

To begin using these features, you must first complete some configuration through the Google Developer Console.

### Requirements

Before adding Google Services support to Manifold, you will need a Google developer account and a Manifold Google project.

- If you do not have a developer account you can create one at through the [Google Developer Console](https://console.developers.google.com/).
- If you do not have a Manifold Google project you can create one by logging into your developer account and clicking "Create Project."

### Get Credentials Set File

1. Go to the APIs overview by clicking on the "API" card on your project dashboard.
2. Click on the "Credentials" tab in the sidebar.
3. Click to create credentials set for a "Service account key."
4. Select "New service account" from the dropdown.
5. Give your service account a name. You do not need to add a role.
6. Once you have created your Service Account, you will navigate to "Service Accounts" in the "IAM & Admin" left menu.
7. From the three dots under the "Actions" column farthest right in your Service Accounts table, select "Create key"
8. Select "JSON" for the key type and download the `.json` file as `google_service.json`.<sup>[1](#note-1)</sup>
9. To enable Google Drive ingestion, you will need to select Google Drive API from Library and click "Enable API".

### Update Manifold Settings

Under the "Google Services Integration" header, upload the `google_service.json` file. Doing so will automatically populate the rest of the fields in the section.

Alternatively, if you manage settings in the environment \(`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file\), you should set the corresponding settings in `.env`:

``` conf
# Config Files
MANIFOLD_SETTING_CONFIG_GOOGLE_SERVICE="/var/opt/manifold/api/keys/google_service.json"

## Google Integration
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_PROJECT_ID=
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_PRIVATE_KEY_ID=
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_CLIENT_EMAIL=
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_CLIENT_ID=
```

If a file path is present at the path set in `MANIFOLD_SETTING_CONFIG_GOOGLE_SERVICE`, values will first be set from this file, then overwritten by any subsequent matching keys.

### Next Steps

With Google Services now configured, you can enable Google OAuth, Google Analytics, and Google Drive on your instance.


## Google OAuth Configuration

If this feature is enabled, Manifold will include a “Log in with Google” button on the login page. Clicking the button will open a popup that allows users to authenticate using their Google account. On successful authentication, Manifold will create a user record (if it is the user’s first time logging in) and an associated identity record.

These instructions document the process for acquiring [OAuth keys from Google](https://developers.google.com/identity/protocols/oauth2). It’s possible that their process has changed since this was written. If that’s the case, please [open a pull request](https://github.com/ManifoldScholar/manifold-docusaurus/pulls) against our documentation with a correction.

### Callback URL
The Manifold API handles OAuth callbacks. For Google, the callback route is located at `/auth/google/callback`. For your installation of Manifold, the callback URL will be the fully qualified domain name (FQDN) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is manifoldapp.org, the callback URL would be `http://manifoldapp.org/auth/google/callback`.

### Setup Consent Screen
1. Log into your account and app at [Google Developer Console](https://console.developers.google.com/).
2. From your Manifold project’s API Manager, navigate to “OAuth consent screen” in the sidebar.
3. Add a name to "App name".
4. Select an email address in the "User support email" dropdown.
5. Add a name to the “Application home page” field.
6. Add your "Authorized domain", for instance "manifoldapp.org".
7. Save the settings.

### Create OAuth Credentials
1. Click on the “Credentials” tab.
2. Click the button to “Create credentials” and select “OAuth client ID”.
3. Select “Web application” for the “Application type”.
4. Name the credential set.
5. In the “Authorized redirect URIs” field, enter the callback url, defined above.
6. Click create.

## Google Settings

### Get App ID and Secret ID
1. Click on your new credential set under the “OAuth 2.0 client IDs” header.
2. Copy the values under “Client ID” and “Client Secret”.

### Update Manifold Settings
Back in Manifold, under the “Google OAuth” header, enter the Client ID into the field labeled Google Client ID. Enter the Client Secret value into the field labeled Google Client Secret.

Alternatively, if you manage settings in the environment (`MANAGE_SETTINGS_FROM_ENV=1` in your `.env file`), you should set the corresponding settings in `.env`:

```
# Google OAuth Integration
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_OAUTH_CLIENT_ID=
MANIFOLD_SETTING_SECRETS_GOOGLE_OAUTH_CLIENT_SECRET=
```
## Google Analytics

Configure this feature to enable analytics reporting to your Google account, and to display analytics data in the Manifold backend. Before using this feature, you must configure Google services.

### Enable Analytics

1. Go to the APIs overview by clicking on the "API" card on your project dashboard.
2. Click on the "Library" tab in the sidebar.
3. Click on "Google Analytics API" under the "Other" header. (You may need to search for "Analytics API" if you don't see it.)
4. Click "Enable".

### Configure Analytics

1. Log into your property at [Google Analytics](https://analytics.google.com).
2. Create a new property for your Manifold installation. If you need help, instructions can be found at [Analytics Help](https://support.google.com/analytics/answer/1008015?hl=en). You need to create a Universal Analytics Property, which requires that you open Advanced Options when you create your property, see this article [setting up analytics for a website](https://support.google.com/analytics/answer/10269537#zippy=%2Cadd-the-global-site-tag-directly-to-your-web-pages%2Cadd-the-global-site-tag-to-a-website-builder-or-cms-hosted-website-for-example-wordpress-shopify-etc).
3. Find your Tracking Id and copy it, including the "UA-" prefix.


### Update Manifold Settings

Back in Manifold, in Settings>Integrations, under the "Google Analytics" header, enter the value from your Google Analytics property into the corresponding field: `Google Analytics Tracking ID`.

Alternatively, if you manage settings in the environment (`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file), you should set the corresponding settings in `.env`:

```
# Google Analytics Integration
MANIFOLD_SETTING_INTEGRATIONS_GA_TRACKING_ID=
```
