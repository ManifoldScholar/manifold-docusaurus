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

For package installations, we distribute packages for Ubuntu (18.x and 20.x) and Redhat/CentOS (el7 and el8). The package will install and configure every service needed to run Manifold. You will need root access to the host in order to install Manifold from these packages. This is the fastest, easiest way to install Manifold, but it also is the most intrusive and gives you the least control over the installation. That said, for users who are not familiar with the Manifold technology stack (Rails, Node, ElasticSearch, PostgreSQL, Redis, and Nginx), package installation will be the fastest and simplest approach.

When Manifold is installed using Docker, each service runs in its own Docker container and the services are coordinated using Docker compose.

We're still working on documentation for installing Manifold from source. For now, this is not an officially supported installation method, but we hope to provide guidance soon.

:::note
Manifold is a new piece of software, and we're working hard to refine and improve the installation process. If you run into problems, please don't get frustrated. Let us know in Slack ([join here](https://manifold-slackin.herokuapp.com/)) or [report an issue](https://github.com/ManifoldScholar/manifold/issues/new?template=bugs.md). It's very important to us that Manifold be easy to install, and we appreciate your help as we improve this process.
:::

## Install Instructions

Select the strategy that makes sense for your organization to see the corresponding instructions.

:::info
The current stable Manifold version is <strong><Data command="highestStableVersionFor" argument="ubuntu18" /></strong>. <Data command="prereleaseStatement" argument="ubuntu18" />All releases can be downloaded from the [downloads page](./reference/downloads).
:::

### Package Install

The most recent version of Manifold is <Data command="highestStableVersionFor" argument="ubuntu18" />.

As of Manifold v6, we will have discontinued support for Ubuntu 16, which is now end of life.

#### 1. Download the Package

Shell into the server as root and download the most recent package.

<Tabs
  groupId="install-type"
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
  groupId="install-type"
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
/usr/bin/manifold-ctl reconfigure
/usr/bin/manifold-ctl restart
```
Once this process is complete and you've restarted Manifold, visit the fully qualified domain name in your browser. You should see an empty Manifold home page.

#### 4. Access the Backend

All content stored in Manifold—texts, projects, authors, resources, users, etc—is managed through Manifold’s backend interface. The backend is available at the `/backend` path. For example, if your domain name was your-manifold-domain.tld, you’d access the backend at `http://your-manifold-domain.tld/backend`.

Before you can login to the backend, you will need to make an administrative user. Manifold exposes Rake commands provided by the API Rails application by way of a `manifold-api` executable located at `/usr/local/bin/manifold-api`. This executable includes a command for creating an admin user. Call this command as follows:

```shell
sudo manifold-api manifold:user:create:admin["you@email.com","password","firstName","lastName"]
```

Substitute your email, password, first and last into the command above. If the command succeed, Manifold will let you know. For example:

```shell
manifold@manifold-deb:/etc/manifold# sudo manifold-api manifold:user:create:admin["john@milton.com","Lycidas","John","Milton"]
    INFO: A User has been created. Its ID is 9b8c863f-60cd-44aa-ad99-dbb842e51aa2
```

Once you’ve created an admin user, click on the avatar icon in the top right corner of the Manifold frontend to login. After logging in successfully, you will see an “admin mode” button in the header. Click the admin mode button to access the backend.

### Docker Install

Starting with version 4.0, we publish Docker images alongside our OS packages.
These images are published under the [manifoldscholar](https://hub.docker.com/u/manifoldscholar)
organization on hub.docker.com. The Manifold team is happy to accept pull
requests and are open to suggestions as to how we can improve our Docker support.

The following instructions assume that you've intalled docker and can run both
`docker` and `docker-compose` from the command line.

To begin running Manifold on Docker, clone our docker-compose repository:
```shell
git clone https://github.com/ManifoldScholar/manifold-docker-compose.git
```
The docker-compose.yml file in this repository includes all the services that
Manifold needs to run. For more complex deployments, feel free to use this files
as a starting point and modify as needed.

Before spinning up the containers, modify environment/manifold.env so that it
contains the correct IP or domain name for your server. Unless you're just running
these locally, you'll need to replace 127.0.0.1 from the following env vars:

```shell
DOMAIN="127.0.0.1:4000"
CLIENT_BROWSER_API_URL="http://127.0.0.1:4000"
CLIENT_BROWSER_API_CABLE_URL="http://127.0.0.1:4000/cable"
```

From within that git repository, create and start Manifold containers:

<div style={{marginBottom: "var(--ifm-leading)"}}>
<CodeBlock className="shell">{(`
MANIFOLD_TAG=${getData("path", "manifoldVersion")} docker-compose up -d
`).trim()}
</CodeBlock>
</div>

<p>Access the site in your browser. Be patient, as it might take a minute for
services to start.</p>

```shell
http://127.0.0.1:4000
```

Tail container log output (ctrl + c to stop)
```shell
docker-compose logs -f
```

Restart Manifold containers
```
docker-compose restart
```

Stop Manifold containers
```
docker-compose stop
```

Stop and remove Manifold containers
```
docker-compose down
```

Access the Rails (Manifold API Backend) console
```
docker exec -it  manifold-docker-compose_api_rails_1 rails console
```

Replace `console` in the above command with other Manifold rake commands. These
commands are the same commands that are available in the Omnibus packages, and
are [documented here](/docs/administering/reference/api_rake_tasks)

Create an admin user
```
docker exec -it manifold-docker-compose_api_rails_1 \
rails manifold:user:create:admin['email@example.com','test123!','First','Last']
```

_With some terminal configurations don't forget to escape `[` and `]` like `\[`._

### Source Install

:::note
This section is still a work in progress. Check back soon for instructions on installing from source.
:::
