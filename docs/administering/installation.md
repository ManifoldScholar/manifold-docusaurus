---
id: installation
title: Installation
sidebar_label: Installation
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Data, { getData } from '@theme/Data';
import CodeBlock from '@theme/CodeBlock';

## Install Strategies

We offer three installation strategies for Manifold:

1. Install from OS **package**
1. Install with **Docker** images
1. Install from **source**

For package installations, we distribute packages for Ubuntu and Redhat/CentOS. The package will install and configure every service needed to run Manifold. You will need root access to the host in order to install Manifold from these packages. This is the fastest, easiest way to install Manifold, but it also is the most intrusive and gives you the least control over the installation. That said, for users who are not familiar with the Manifold technology stack (Rails, Node, ElasticSearch, PostgreSQL, Redis, and Nginx), package installation will be the fastest and simplest approach.

When Manifold is installed using Docker, each service runs in its own Docker container and the services are coordinated using Docker compose.

:::note
Manifold is a new piece of software, and we're working hard to refine and improve the installation process. If you run into problems, please don't get frustrated. Let us know in Slack ([join here](https://manifold-slackin.herokuapp.com/)) or [report an issue](../developers/contributing#reporting-issues). It's very important to us that Manifold be easy to install, and we appreciate your help as we improve this process.
:::

## Install Instructions

Select the strategy that makes sense for your organization to see the corresponding instructions.

:::info
The current recommended Manifold version is <strong><Data path="manifoldVersion" /></strong>. Previous releases can be downloaded from the [downloads page](./reference/downloads).
:::

### Package Install

The most recent version of Manifold for Ubuntu18 is <Data highestVersionFor="ubuntu18" />.

The following instructions have only been tested on Ubuntu 16 and Ubuntu 18 hosts. We recommend installing Manifold on Ubuntu 18. Your mileage will almost certainly vary if you attempt to install Manifold on a different Debian based distribution.

#### 1. Download the Package

Shell into the server as root and download the most recent package.

<Tabs
  defaultValue="ubuntu18"
  values={[
    {label: "Ubuntu18", value: "ubuntu18"},
    {label: "Ubuntu16", value: "ubuntu16"},
    {label: "CentOS 7", value: "centos7"},
  ]}>
  <TabItem value="ubuntu18">
    <CodeBlock className="shell">{(`
cd ~
curl -O ${getData("installUrlFor", "ubuntu18")}
    `).trim()}</CodeBlock>
  </TabItem>
  <TabItem value="ubuntu16">
    <CodeBlock className="shell">{(`
cd ~
curl -O ${getData("installUrlFor", "ubuntu16")}
    `).trim()}</CodeBlock>
  </TabItem>
  <TabItem value="centos7">
    <CodeBlock className="shell">{(`
cd ~
curl -O ${getData("installUrlFor", "centos7")}
    `).trim()}</CodeBlock>
  </TabItem>
</Tabs>

#### 2. Install the Package

<Tabs
  defaultValue="ubuntu18"
  values={[
    {label: "Ubuntu18", value: "ubuntu18"},
    {label: "Ubuntu16", value: "ubuntu16"},
    {label: "CentOS 7", value: "centos7"},
  ]}>
  <TabItem value="ubuntu18">
    <CodeBlock className="shell">{(`
cd ~
dpkg -i ${getData("basenameFor", "ubuntu18")}
    `).trim()}</CodeBlock>
  </TabItem>
  <TabItem value="ubuntu16">
    <CodeBlock className="shell">{(`
cd ~
dpkg -i ${getData("basenameFor", "ubuntu18")}
    `).trim()}</CodeBlock>
  </TabItem>
  <TabItem value="centos7">
    <CodeBlock className="shell">{(`
cd ~
rpm -ivh ${getData("basenameFor", "centos7")}
    `).trim()}</CodeBlock>
  </TabItem>
</Tabs>

#### 3. Apply Minimal Configuration

The package installer creates a file at `/etc/manifold/manifold.rb`. Use this file to configure and manage the various services that Manifold is composed of. After changing this file, you’ll need to run sudo manifold-ctl reconfigure from the command line so that Manifold picks up the changes and regenerates various configuration files based on the new settings.

For now, let’s just make sure Manifold is on the right domain. Open `/etc/manifold/manifold.rb` in your preferred text editor (nano, vi, etc.) and look for the external_url setting near the top of the file. Set this to the fully qualified domain name of your Manifold installation, then reconfigure Manifold with the following command. You may be prompted to accept the license. You can scroll through the licenses by pressing space, or “q” to exit the license view. You will need to accept the licenses before proceeding with the installation.

```shell
/usr/local/bin/manifold-ctl reconfigure
```
Once this process is complete, visit the fully qualified domain name in your browser. You should see an empty Manifold home page.

#### 4. Access the Backend

All content stored in Manifold—texts, projects, authors, resources, users, etc—is managed through Manifold’s backend interface. The backend is available at the `/backend` path. For example, if your domain name was your-manifold-domain.tld, you’d access the backend at `http://your-manifold-domain.tld/backend`.

Before you can login to the backend, you will need to make an administrative user. Manifold exposes Rake commands provided by the API Rails application by way of a `manifold-api` executable located at ``/usr/local/bin/manifold-api`. This executable includes a command for creating an admin user. Call this command as follows:

```shell
sudo manifold-api manifold:user:create:admin["you@email.com","password","firstName","lastName"]
```

Substitute your email, password, first and last into the command above. If the command succeed, Manifold will let you know. For example:

```shell
manifold@manifold-deb:/etc/manifold# sudo manifold-api manifold:user:create:admin["john@milton.com","Lycidas","John","Milton"]
    INFO: A User has been created. Its ID is 9b8c863f-60cd-44aa-ad99-dbb842e51aa2
```

Once you’ve created an admin user, click on the avatar icon in the top right corner of the Manifold frontend to login. After logging in successfully, you will see an “admin mode” button in the header. Click the admin mode button to access the backend.


