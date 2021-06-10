---
id: email_settings
title: Email Settings
sidebar_label: Email Settings
---

Manifold sends emails to users when they signup for accounts, when they need to reset their password, and to notify them about new content on the instance. Manifold can send mail directly from the server using Sendmail, using Sendmail, although this is generally not recommended. Instead, we recommend that you configure Manifold to send mail through an SMTP service. Most email that Manifold sends is sent in the background through a background job.

## Message Settings

The fields in this section allow you to customize messages that are sent by Manifold. Use the **email from address**, **email from name**, **email reply-to address**, and **email reply-to name** fields to control the from address and reply behavior on messages. Use the **email closing** field to add a signature to messages sent by Manifold.

## Delivery Method

Use the **email delivery method** field to select how email should be delivered. If you have configured Sendmail locally on the host, you may use that. If not, use an SMTP server.

### SMTP Configuration

When mail is delivered over SMTP, you will need to set the SMTP server address, port, username, and password.

### Sendmail Configuration

When mail is delivered with Sendmail, you will need to specify the path to the sendmail executable. You may also specify additional arguments to pass to sendmail.
