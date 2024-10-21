import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

// TODO: Define releases type
let data: {manifoldVersion?: string; releases?: unknown} = {};

try {
  data.manifoldVersion = fs
    .readFileSync(path.resolve(__dirname, "MANIFOLD_VERSION"), "utf8")
    .trim();
  data.releases = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "releases.json"), "utf8")
  );
} catch (err) {
  console.error(err);
}

const MARKETING_URL = "http://manifoldapp.org";
const BASE_URL = "/manifold-docusaurus";

const algolia = {
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_API_KEY,
  indexName: process.env.ALGOLIA_INDEX_NAME,
};

const config: Config = {
  title: "Manifold Docs",
  tagline: "",
  url: "https://manifoldscholar.github.io",
  baseUrl: `${BASE_URL}/`,
  favicon: "favicon/favicon.svg",
  organizationName: "ManifoldScholar",
  projectName: "manifold-docusaurus",
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    async function docusaurusPostcss(context, options) {
      return {
        name: 'docusaurus-postcss',
        configurePostCss(postcssOptions) {
          // Appends new PostCSS plugin.
          postcssOptions.plugins.push(require('postcss-mixins'));
          postcssOptions.plugins.push(require('postcss-import'));
          postcssOptions.plugins.push(require('postcss-nested'));
          return postcssOptions;
        },
      };
    }
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    metaData: {
      ogImage: "img/Manifold-Marketing-Opengraph-3.png",
      ogImageAlt:
        "People building a wooden Manifold logo. Text below the logo says 'Manifold is what we make it'",
    },
    manifoldLogoLink: MARKETING_URL,
    image: "img/Manifold-Marketing-Opengraph-3.png",
    mainNav: {
      links: [
        {
          label: "Features",
          href: `${MARKETING_URL}/features`,
          isButton: false,
          target: "_self",
        },
        {
          label: "Community",
          href: `${MARKETING_URL}/community`,
          isButton: false,
          target: "_self",
        },
        {
          label: "Services",
          href: `${MARKETING_URL}/services`,
          isButton: false,
          target: "_self",
        },
        {
          label: "Docs",
          href: `${BASE_URL}/docs`,
          isButton: false,
          isSelected: true,
          target: "_self",
        },
        {
          label: "Get Started",
          href: `${MARKETING_URL}/get-started`,
          isButton: true,
          target: "_self",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Platform",
          items: [
            {
              label: "Get Started",
              href: `${MARKETING_URL}/get-started`,
              target: "_self",
            },
            {
              label: "Features",
              href: `${MARKETING_URL}/features`,
              target: "_self",
            },
            {
              label: "Services",
              href: `${MARKETING_URL}/services`,
              target: "_self",
            },
            {
              label: "Docs",
              to: `${BASE_URL}/docs`,
              target: "_self",
            },
            {
              label: "Accessibility",
              to: "/docs/accessibility",
              target: "_self",
            },
          ],
        },
        {
          title: "People",
          items: [
            {
              label: "Community",
              href: `${MARKETING_URL}/community`,
              target: "_self",
            },
            {
              label: "Blog",
              to: `${BASE_URL}/blog`,
            },
            {
              label: "About",
              href: `${MARKETING_URL}/history`,
              target: "_self",
            },
            {
              label: "Development",
              href: `${MARKETING_URL}/development`,
              target: "_self",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:office@castironcoding.com",
              icon: "email",
            },
            {
              label: "Github",
              to: "https://github.com/ManifoldScholar",
              icon: "github",
            },
            {
              label: "Slack",
              href: "https://slack.com/",
              icon: "slack",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/manifoldscholar",
              icon: "twitter",
            },
          ],
        },
      ],
    },
    navbar: {
      items: [
        {
          to: `${BASE_URL}/docs`,
          activeBasePath: "docs",
          activeBaseRegex: "docs/(full)",
          label: "Documentation",
          position: "left",
        },
        {
          to: "docs/walkthroughs/landing",
          activeBasePath: "docs/walkthroughs",
          label: "Walkthroughs",
          position: "left",
        },
        // {
        //   to: "docs/guides/landing",
        //   activeBasePath: "docs/guides",
        //   label: "Guides",
        //   position: "left"
        // },
        {
          to: `${BASE_URL}/blog`,
          label: "Blog",
          position: "left",
        },
      ],
    },
    ...(algolia.appId ? { algolia } : {}),
    // https://docusaurus.io/docs/markdown-features/code-blocks#theming
    // prism: {
    //   theme: prismThemes.github,
    //   darkTheme: prismThemes.dracula,
    // },
  } satisfies Preset.ThemeConfig,
  customFields: {
    data,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            "https://github.com/ManifoldScholar/manifold-docusaurus/edit/master",
          admonitions: {
            keywords: ['location'],
            extendDefaults: true,
          },
        },
        blog: {
          blogTitle: "Blog",
          showReadingTime: true,
          // editUrl:
          //   "https://github.com/ManifoldScholar/manifold-docusaurus/edit/master",
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/styles/global.css',
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
