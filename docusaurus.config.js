module.exports = {
  title: 'Manifold Docs',
  tagline: 'The tagline of my site',
  url: 'https://manifoldscholar.github.io',
  baseUrl: '/manifold-docusaurus/',
  favicon: 'img/manifold-favicon.ico',
  organizationName: 'ManifoldScholar', // Usually your GitHub org/user name.
  projectName: 'manifold-docusaurus', // Usually your repo name.
  themeConfig: {
    footer: {
      logo: {
        alt: 'Manifold Docs',
        src: '/img/logo.svg',
        href: '/',
      },
    },
    navbar: {
      logo: {
        alt: 'Manifold Docs',
        src: '/img/logo.svg',
        href: '/',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          activeBaseRegex: 'docs/(full)',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'docs/walkthroughs/landing',
          activeBasePath: 'docs/walkthroughs',
          label: 'Walkthroughs',
          position: 'left',
        },
        {
          to: 'docs/guides/landing',
          activeBasePath: 'docs/guides',
          label: 'Guides',
          position: 'left',
        },
      ],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ManifoldScholar/manifold-docusaurus/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
