---
id: securing_manifold
title: Securing Manifold
sidebar_label: Securing Manifold
---

## SSL with Packages

Enabling SSL on a package installation is simple and straight forward. You will need to procure an SSL certificate, put it on the host, and reconfigure Manifold to use the certificate.

Open the package configuration file at `/etc/manifold/manifold.rb` in an editor of your choice.

1. First, update the value for `external_url`. Change `http` to `https`.
2. Find the nginx configuration section. Uncomment `nginx['ssl_certificate']` and `nginx['ssl_certificate_key']`. Set the values to the absolute path on the host to your certificate file and your private key.
3. Uncomment and set the `nginx['redirect_http_to_https']` value to `true`.
4. Uncomment and set the `nginx['listen_https']` value to `true`.
5. Save your changes to the configuration file and apply your changes to Manifold by running `manifold-ctl reconfigure`. When that process completes,run `manifold-ctl restart` to restart all services.

Once the services restart without error, you should be able to access your site with https enabled.

## Using Lets Encrypt

One of the easiest options in for achieving secure communication between your Manifold instalation and its visitors via SSL makes use of the [Let's Encrypt](https://letsencrypt.org/) project and the [certbot](https://certbot.eff.org/) tool, provided by the Electronic Frontier Foundation. Let's Encrypt manages and offers SSL certificates that are otherwise more complicated to get while certbot is a tool that automates registration and identification processes on the server so that a certificate is associated with a DNS entry. The following description assumes that you have SSH access to the server where Manifold is installed and that you are comfortable working on the command line.

### Certbot Installation

First, you download and install certbot. General information about download and installation options specific to the operating system and the server architecture you use are accessible from the landing page of the certbot project. Here, we assume you have installed Manifold on a Ubuntu 18.04 machine. After you logged in into your server via ssh the following chain of commands should leave you with a functional certbot installation:

```bash
$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository universe
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt-get install certbot python-certbot-nginx
```

The commands add the certbot project's package repository to your list of repositories and installs the certbot tool from this repository.

Alternately, consult [current Certbot installation instructions](https://certbot.eff.org/) on the Certbot website.

### Provision a Cerificate

Certbot offers a number of ways to generate and install an SSL certificate. Since Manifold does not use the nginx packages from the distribution's package repository and also comes with its own configuration and installation paths it is best to refrain from letting certbot try to modify the server configuration itself. A successful and easy workflow is to let certbot use its own provisional server in order to only register and download the certificates. References to these certificates as well as server configuration can then be achieved manually by modifying Manifold's configuration file (`/etc/manifold/manifold.rb`).

In case Manifold is already running on your server you have to shut it down via `manifold-ctl stop`. When all of the services have stoped `sudo letsencrypt certonly --standalone -d YOURDOMAIN` starts the registration and identification process. In the end you should have a certificate and the associated files stored at `/etc/letsencrypt/live/YOURDOMAIN/`. YOURDOMAIN has to be replaced with the full name of the domain where Manifold is installed but without the protocol part (http(s)), this includes the `www` part of the URL in case it is part of the URL under which your installation of Manifold can be reached.

### Firewall Configuration

In case you use a firewall on your server - and you definitely should use one - you now need to allow connections via the SSL port. Using the standard firewall on Linux `ufw` this can be achieved via `sudo ufw allow https`. Afterwards the firewall needs to be restarted by writing `sudo ufw restart`.

:::caution
Please be aware that SSL-certificates aquired via Let's Encrypt are only valid for 3 month. Afterwards you will have to acquire a new certificate. This can be achieved by using certbot again, more precisely by typing `sudo certbot renew`. This process can also be automated with a cronjob that runs the command in defined intervals.
:::

## SSL with Docker Images

:::note
This section is still a work in progress. Check back soon for instructions on configuring SSL with our Docker images.
:::
