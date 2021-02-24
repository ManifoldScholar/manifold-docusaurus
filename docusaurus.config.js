const path = require("path");

module.exports = {
  title: "Manifold Docs",
  tagline: "The tagline of my site",
  url: "https://manifoldscholar.github.io",
  baseUrl: "/manifold-docusaurus/",
  favicon: "favicon/favicon.svg",
  organizationName: "ManifoldScholar", // Usually your GitHub org/user name.
  projectName: "manifold-docusaurus", // Usually your repo name.
  plugins: [
    "docusaurus-plugin-sass",
    path.resolve(__dirname, "src/plugin/styled-components")
  ],
  themeConfig: {
    metaData: {
      ogImage: "img/Manifold-Marketing-Opengraph-3.png",
      ogImageAlt:
        "People building a wooden Manifold logo. Text below the logo says 'Manifold is what we make it'"
    },
    mainNav: {
      links: [
        {
          label: "Features",
          href: "http://staging.manifoldapp.org/features",
          isButton: false
        },
        {
          label: "Community",
          href: "http://staging.manifoldapp.org/community",
          isButton: false
        },
        {
          label: "Services",
          href: "http://staging.manifoldapp.org/services",
          isButton: false
        },
        {
          label: "Docs",
          to: "docs",
          isButton: false,
          isSelected: true
        },
        {
          label: "Get Started",
          href: "http://staging.manifoldapp.org/get-started",
          isButton: true
        }
      ]
    },
    footer: {
      links: [
        {
          title: "Platform",
          items: [
            {
              label: "Get Started",
              href: "http://staging.manifoldapp.org/get-started"
            },
            {
              label: "Features",
              href: "http://staging.manifoldapp.org/features"
            },
            {
              label: "Services",
              href: "http://staging.manifoldapp.org/services"
            },
            {
              label: "Docs",
              to: "docs"
            }
          ]
        },
        {
          title: "People",
          items: [
            {
              label: "Community",
              href: "http://staging.manifoldapp.org/community"
            },
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "About",
              href: "http://staging.manifoldapp.org/history"
            },
            {
              label: "Development",
              href: "http://staging.manifoldapp.org/development"
            }
          ]
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:office@castironcoding.com",
              icon: "email"
            },
            {
              label: "Github",
              to: "https://github.com/ManifoldScholar",
              icon: "github"
            },
            {
              label: "Slack",
              href: "https://slack.com/",
              icon: "slack"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/manifoldscholar",
              icon: "twitter"
            }
          ]
        }
      ]
    },
    navbar: {
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          activeBaseRegex: "docs/(full)",
          label: "Documentation",
          position: "left"
        },
        {
          to: "docs/walkthroughs/landing",
          activeBasePath: "docs/walkthroughs",
          label: "Walkthroughs",
          position: "left"
        },
        {
          to: "docs/guides/landing",
          activeBasePath: "docs/guides",
          label: "Guides",
          position: "left"
        },
        {
          to: "blog",
          label: "Blog",
          position: "left"
        }
      ]
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/ManifoldScholar/manifold-docusaurus/edit/master"
        },
        blog: {
          blogTitle: "Blog",
          // blogDescription: "A docusaurus powered blog!",
          showReadingTime: false
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/scss/styles.scss")
        }
      }
    ]
  ]
};
