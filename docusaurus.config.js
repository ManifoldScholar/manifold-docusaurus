module.exports = {
  title: "Manifold Docs",
  tagline: "The tagline of my site",
  url: "https://manifoldscholar.github.io",
  baseUrl: "/manifold-docusaurus/",
  favicon: "img/manifold-favicon.ico",
  organizationName: "ManifoldScholar", // Usually your GitHub org/user name.
  projectName: "manifold-docusaurus", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  themeConfig: {
    footer: {
      links: [
        {
          title: "Platform",
          items: [
            {
              label: "Get Started",
              href: "https://manifoldapp.org/get-started"
            },
            {
              label: "Features",
              href: "https://manifoldapp.org/features"
            },
            {
              label: "Services",
              href: "https://manifoldapp.org/services"
            }
          ]
        },
        {
          title: "People",
          items: [
            {
              label: "Community",
              href: "https://manifoldapp.org/community"
            },
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "About",
              href: "https://manifoldapp.org/history"
            },
            {
              label: "Development",
              href: "https://manifoldapp.org/development"
            }
          ]
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:office@castironcoding.com"
            },
            {
              label: "Github",
              to: "https://github.com/ManifoldScholar"
            },
            {
              label: "Slack",
              href: "https://slack.com/"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/manifoldscholar"
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
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/scss/styles.scss")
        }
      }
    ]
  ]
};
