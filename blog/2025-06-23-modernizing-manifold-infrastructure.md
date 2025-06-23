---
slug: "modernizing-manifold-infrastructure"
title: "Manifold Infrastructure Update: Docker, Simplified Hosting, and What's Next"
---

The team at Cast Iron Coding is hard at work on Manifold v9 as well as Manifold v10, and I want to take a few minutes to update the Manifold community on where development is headed.

As of today, v9 is effectively feature-complete. We'll be starting to work on packaging this week, and we hope to have a beta version ready to share in the next week or two. There are quite a few features, fixes, and improvements in v9, which I won't go into here, although we will try to cover them in a subsequent post. In this post I'm going to instead focus on a less exciting topic: Manifold's infrastructure.

Manifold is fundamentally comprised of two parts: the client application and the API. The client application is a Node.js application that runs on the server and in the browser. The API is a Rails application that includes the following services:

- Cable: a websockets server that's used during ingestion
- Clockwork: the background job scheduler
- Puma: the Rails application server
- Sidekiq: the background job processor

The API is also dependent on three additional services that run on the server:

- Postgres: the API's database
- Redis: used for caching and the job queue
- Elasticsearch: used to provide full-text search

Manifold is now nearly ten years old. In 2015 containerization tools like Docker were still relatively new, and we decided to distribute Manifold as operating system packages. We used a tool called "Omnibus," which grew out of the Chef project, to build these packages. Chef is a configuration management tool that allows DevOps developers to define server configurations and software installations as code, then automatically apply those configurations across multiple machines to ensure consistency and reduce manual setup work. These tools essentially turn server management from a manual, error-prone process into a repeatable, version-controlled workflow. 

Omnibus is a packaging toolkit that creates self-contained software bundles by embedding an application along with all its dependencies. It packages runtime environments, libraries, and everything else into a single installable package, eliminating dependency conflicts and "it works on my machine" problems. It was originally developed by Chef to package their own software but became a standalone tool for creating portable, dependency-free installers for any application.

At the time, it seemed like a great choice. It certainly allowed relatively non-technical users to download Manifold and easily install it on a server. The problem, however, with this approach, is that it shifted the burden of maintaining all of the runtimes and libraries that a Manifold installation needs onto the Manifold development team. Like many open source infrastructure teams, our team is small and resources are always tight. As time has moved on, maintaining Manifold's dependencies during packaging has become increasingly difficult, and we've acquired quite a bit of technical debt. Moreover, the DevOps world has moved on. Chef isn't as popular as it once was, and this packaging approach has grown brittle. The consequences are pretty apparent. The time between each Manifold release has grown, and we've lost velocity as a product. 

Manifold is still widely used, and we get new adoption inquiries each week. I believe that despite its age, Manifold is a high quality product that solves important problems for scholarly publishers. The future for Manifold is strong, but last year the team and I agreed that we needed to get the project on a more sustainable technical footing. With fewer resources, we need to make sure we're spending those resources on making Manifold better, not applying tedious updates to underlying infrastructure and maintaining overly complex packaging tooling.

With all this in mind, we started work earlier this year on what we're calling the "Manifold Maintenance and Modernization" project. This work is funded by revenue from Manifold Digital Services hosting clients. The revenue from those instances is what makes this work possible, and what keeps Manifold growing and healthy. Thank you, MDS clients!

Under this project, we have a few main goals:

First, we will be dropping the OS Omnibus packages. Manifold v9 will be the last Manifold version for which we release these packages. Starting with v10, we will only publish Docker images. This shift allows our development team to streamline the release process significantly. We can simply update the base Docker image with the latest security patches and dependency updates, run our test suite against the containerized application, and publish the new image. This eliminates the complex work of maintaining separate OS-specific packages across multiple distributions. This Docker-first approach enables us to deliver security updates and new releases much more frequently since we no longer need to rebuild, test, and maintain Omnibus packages for each supported operating system, resulting in faster patch deployment and a more secure product for Manifold users.

Second, we will be moving all MDS clients to a Platform as a Service provider, likely Digital Ocean's App Platform. MDS clients are currently hosted on cloud VMs, which themselves require maintenance and updates. Moving from VMs to PaaS eliminates infrastructure management overhead by letting the team simply deploy code while the platform automatically handles scaling, patching, load balancing, and underlying server maintenance. This shift allows us to focus on building features rather than managing servers, while increasing security and performance for clients.

Third, we are aiming to reduce the cost and complexity of hosting a single instance of Manifold. There are parts of the stack that we've come to see as overly complicated, and we want Manifold to be as accessible to small groups with tiny budgets as we can make. Keep in mind that in a containerized environment, the hosting cost generally corresponds to the number of containers/services that the application requires. Each container we remove from the equation lowers the overall cost. To keep costs low, we're making the following changes, some of which have already been done for v9, and some of which will happen in v10:

- We're removing ElasticSearch in v9. Elasticsearch requires a lot of memory to run, and memory is expensive. Moreover, content has to be indexed in Elasticsearch whenever it changes, and it's easy for the index to get out of sync with the actual content. Starting with v9, search will query the database directly and use Postgres's full text search functionality. We don't expect that users will be able to tell the difference.
- We're removing Cable in v9. When you ingest a text in Manifold, the server streams the real-time logging of what's happening in the ingestion to the backend. That's a nice feature, but it's not worth paying an extra $10 or $15 per month. In v9, the client application will poll the API every couple of seconds to get the updated ingestion log. From a user's standpoint, the experience should be about the same.
- In v10 we're migrating the background job processor from Sidekiq to Good Job. Good Job stores its jobs in the Postgres database, which will allow us to drop Redis. Good Job also has a built-in scheduling feature, which means we can also drop the Clockwork process.

Starting with v10, running an instance of Manifold will require Ruby, Node, and Postgres — and it will run with about 1/3 fewer processes. Simplifying Manifold without sacrificing performance or functionality is going to keep this product healthy for many more years to come.

We will apply v9 and v10 updates to hosted Manifold Digital Services instances. However, those of you who are hosting your own instance of Manifold will need to migrate from the current packages to the new Docker approach. With the last 8 major Manifold releases, we've provided packages that allowed instances to upgrade by simply applying the new package and reconfiguring the instance. For the most part, this has been a straightforward process, and we've often heard from our users about how easy it is to install or upgrade Manifold. We take pride in that, and we intend to continue our tradition of easy upgrades. When we release v10, we will also provide thorough documentation on how to upgrade your instance, as well as automated tools that can be used to export all content from one Manifold instance and import it into a containerized v10 instance. No doubt, there will be issues, but I want to reassure the community that we'll work through them with you as best we can with the resources we have.

I know I speak for the Manifold contributors at Cast Iron, CUNY, and Minnesota teams when I say that Manifold has a bright future, and we're all excited to see what comes next after taking this little pause to make sure that the project is on a healthy, sustainable technical path!