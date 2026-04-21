---
id: hosting
title: Hosting
sidebar_label: Hosting
---

import MarketingLink from "@theme/MarketingLink";

## Minimum Requirements

1. Manifold should be installed on a virtual or physical server with at least 2 vCPUs, 4 GB of RAM (8 GB recommended), and 40 GB of SSD storage. Manifold was not designed to work in a shared hosting environment.
1. Starting with Manifold v9, Manifold is deployed using Docker containers. You will need SSH access to the server (as root or a user with Docker permissions) and Docker installed on your local machine. See our [deploy template repository](https://github.com/ManifoldScholar/manifold-deploy-example) for detailed setup instructions.
1. Your server should have a fully qualified domain name (FQDN) and be accessible on the internet with ports 80 and 443 open.

## Hosting with Manifold Digital Services (MDS)

We offer paid hosting services through Manifold Digital Services, which is housed at the University of Minnesota Press. Manifold Publishers who host with Manifold Digital Services have access to direct support from the Manifold team. To learn more about Manifold Digital Services and managed Manifold hosting, please visit the <MarketingLink path="/services">services page</MarketingLink> on our site.

## Third Party Hosting Recommendations

Manifold can be successfully hosted in cloud computing environments. We think that [Digital Ocean](https://www.digitalocean.com/) is a good, low-cost solution with a simple, reliable backup strategy. We've also seen users have good luck hosting Manifold on [AWS EC2 instances](https://aws.amazon.com/ec2/instance-types/) and [Google Cloud Compute instances](https://cloud.google.com/compute/docs/instances/)
