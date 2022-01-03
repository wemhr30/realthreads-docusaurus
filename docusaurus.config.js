// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Real Threads',
  tagline: 'A personal project to explore data on the web',
  url: 'https://stories.realthreads.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wemhr30', // Usually your GitHub org/user name.
  projectName: 'realthreads-docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wemhr30/realthreads-docusaurus',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/wemhr30/realthreads-docusaurus',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Real Threads',
        logo: {
          alt: 'Real Threads Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'faang',
            position: 'left',
            label: 'Stories',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://data.realthreads.io',
            label: 'Data',
            position: 'left',
          },
          {
            href: 'https://github.com/wemhr30/realthreads-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Stories',
                to: '/docs/faang',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/realthreads',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/realthreadsio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Loose Threads',
                href: 'https://loose.realthreads.io',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wemhr30',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Real Threads. Built with Docusaurus. Hosted on Netlify`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
