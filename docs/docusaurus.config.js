module.exports = {
  title: 'Elden Ring API',
  tagline: 'The ultimate fan-made Elden Ring API!',
  url: 'https://docs.eldenring.fanapis.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/eldenring-rune-icon.png',
  organizationName: 'FANAPIS', // Usually your GitHub org/user name.
  projectName: 'Elden Ring API', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Elden Ring API - Docs',
      logo: {
        alt: 'Elden Ring API logo',
        src: 'img/eldenring-rune-icon.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/deliton/eldenring-api',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `This site is not filiate nor funded by FromSoftware. It was made with the sole purpose of fun and knowledge. Elden Ring API ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
