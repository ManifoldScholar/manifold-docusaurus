const path = require("path");
const fs = require('fs')

let data = {};
try {
  data.manifoldVersion = fs.readFileSync(path.resolve(__dirname, "MANIFOLD_VERSION"), 'utf8').trim();
  data.releases = JSON.parse(fs.readFileSync(path.resolve(__dirname, "releases.json"), 'utf8'));
} catch (err) {
  console.error(err)
}

const DARK_ICON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath d='M9.8.7c2 1.1 3.4 3.3 3.4 5.8 0 3.7-3 6.7-6.7 6.7-2.5 0-4.7-1.4-5.8-3.4 1 .5 2.1.8 3.3.8 3.7 0 6.7-3 6.7-6.7 0-1.1-.3-2.2-.9-3.2zm-4.2.5c.2-.2.6 0 .5.3l-.4 2.1 1.8 1.1c.3.2.2.6-.1.6l-2.1.2-.5 2c0 .3-.5.4-.6.1l-.8-1.9-2.1.2c-.3 0-.5-.4-.3-.6l1.6-1.4L1.7 2c-.1-.3.2-.6.5-.4l1.8 1 1.6-1.4z' fill-rule='evenodd' clip-rule='evenodd' fill='%237ad3ff'/%3E%3C/svg%3E")`;

const LIGHT_ICON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M8 4.8C6.2 4.8 4.8 6.2 4.8 8s1.4 3.2 3.2 3.2c1.8 0 3.2-1.4 3.2-3.2S9.8 4.8 8 4.8m0-1.5c.4 0 .7-.3.7-.7V.7C8.7.3 8.4 0 8 0c-.4 0-.7.3-.7.7v1.9c0 .4.3.7.7.7m0 9.4c-.4 0-.7.3-.7.7v1.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-1.9c0-.4-.3-.7-.7-.7m-4.3-1.4c.3-.3.7-.3 1 0 .3.3.3.7 0 1l-1.4 1.4c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.3-.3-.3-.7 0-1l1.4-1.4zm7.6 0c.3-.3.7-.3 1 0l1.4 1.4c.3.3.3.7 0 1-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-1.4-1.4c-.2-.3-.2-.7 0-1zm4-4c.4 0 .7.3.7.7 0 .4-.3.7-.7.7h-1.9c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h1.9zm-12.7 0c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H.7C.3 8.7 0 8.4 0 8c0-.4.3-.7.7-.7h1.9zm10.1-5c.3-.3.7-.3 1 0 .3.3.3.7 0 1l-1.4 1.4c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.3-.3-.3-.7 0-1l1.4-1.4zm-10.4 0c.3-.3.7-.3 1 0l1.4 1.4c.3.3.3.7 0 1-.2.1-.3.2-.5.2s-.4-.1-.5-.2L2.3 3.3c-.2-.3-.2-.7 0-1z' fill-rule='evenodd' clip-rule='evenodd' fill='%23f5e425'/%3E%3C/svg%3E%0A")`;

const ICON_STYLE = {
  width: "16px",
  height: "16px"
};

const MARKETING_URL = "http://staging.manifoldapp.org";

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
    manifoldLogoLink: MARKETING_URL,
    mainNav: {
      links: [
        {
          label: "Features",
          href: `${MARKETING_URL}/features`,
          isButton: false,
          target: '_self'
        },
        {
          label: "Community",
          href: `${MARKETING_URL}/community`,
          isButton: false,
          target: '_self'
        },
        {
          label: "Services",
          href: `${MARKETING_URL}/services`,
          isButton: false,
          target: '_self'
        },
        {
          label: "Docs",
          to: "docs",
          isButton: false,
          isSelected: true,
          target: '_self'
        },
        {
          label: "Get Started",
          href: `${MARKETING_URL}/get-started`,
          isButton: true,
          target: '_self'
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
              href: `${MARKETING_URL}/get-started`,
              target: '_self'
            },
            {
              label: "Features",
              href: `${MARKETING_URL}/features`,
              target: '_self'
            },
            {
              label: "Services",
              href: `${MARKETING_URL}/services`,
              target: '_self'
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
              href: `${MARKETING_URL}/community`,
              target: '_self'
            },
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "About",
              href: `${MARKETING_URL}/history`,
              target: '_self'
            },
            {
              label: "Development",
              href: `${MARKETING_URL}/development`,
              target: '_self'
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
    },
    colorMode: {
      switchConfig: {
        darkIcon: "\u{0020}",
        darkIconStyle: {
          ...ICON_STYLE,
          backgroundImage: DARK_ICON,
          backgroundRepeat: "no-repeat"
        },
        lightIcon: "\u{0020}",
        lightIconStyle: {
          ...ICON_STYLE,
          backgroundImage: LIGHT_ICON,
          backgroundRepeat: "no-repeat"
        }
      }
    }
  },
  customFields: {
    data
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/ManifoldScholar/manifold-docusaurus/edit/master",
          admonitions: {
            customTypes: {
              location: {
                keyword: "location",
                svg:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>'
              }
            }
          }
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
