module.exports = {
  title: 'Manifold Docs',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/manifold-favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      links: [
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'overview',
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
