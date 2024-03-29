module.exports = {
  title: "puppeteer-utilz",
  tagline: "The utility functions library for puppeteer",
  url: "https://puppeteer-utilz.netlify.com/",
  baseUrl: "/",
  favicon: "img/logo.png",
  organizationName: "Ibis-Vzla", // Usually your GitHub org/user name.
  projectName: "puppeteer-utilz", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "puppeteer-utilz",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      links: [
        {
          to: "docs/getting-started/installation",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/Ibis-Vzla/puppeteer-utilz",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} puppeteer-utilz, Inc. Built with Docusaurus. By the Ibis team.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/Ibis-Vzla/puppteer-utilz/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
