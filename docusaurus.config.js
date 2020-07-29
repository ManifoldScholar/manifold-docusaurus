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
        {to: 'docs/walkthroughs', label: 'Walkthroughs', position: 'left'},
        {
          to: 'guides',
          activeBasePath: 'guides',
          activeBaseRegex: 'guides/(full)',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        guides: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'landing',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
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
