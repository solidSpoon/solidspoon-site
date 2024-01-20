import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
    title: 'solidSpoon\'s site',
    tagline: 'Dinosaurs are cool',
    favicon: '/img/logoo.svg',

    // Set the production url of your site here
    url: 'https://solidspoon.xyz',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'solidSpoon', // Usually your GitHub org/user name.
    projectName: 'solidSpoon.github.io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Hide',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logoo.svg',
            },
            items: [
                {to: '/blog', label: 'Blog', position: 'left'},
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'tutorialSidebar',
                //     position: 'left',
                //     label: 'Tutorial',
                // },
                {
                    to: '/app/dash-player',
                    label: 'DashPlayer',
                },
                {
                    href: 'https://github.com/solidSpoon',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
          style: 'dark',
          // links: [
            // {
            //   title: 'Docs',
            //   items: [
            //     {
            //       label: 'Tutorial',
            //       to: '/docs/intro',
            //     },
            //   ],
            // },
            // {
            //   title: 'Community',
            //   items: [
            //     {
            //       label: 'Stack Overflow',
            //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //     },
            //     {
            //       label: 'Discord',
            //       href: 'https://discordapp.com/invite/docusaurus',
            //     },
            //     {
            //       label: 'Twitter',
            //       href: 'https://twitter.com/docusaurus',
            //     },
            //   ],
            // },
            // {
            //   title: 'More',
            //   items: [
            //     {
            //       label: 'Blog',
            //       to: '/blog',
            //     },
            //     {
            //       label: 'GitHub',
            //       href: 'https://github.com/facebook/docusaurus',
            //     },
            //   ],
            // },
          // ],
          copyright: `Copyright © ${new Date().getFullYear()} Hide - solidSpoon, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
    plugins: [
        // ....
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 1030, // max resized image's size.
                min: 640, // min resized image's size. if original is lower, use that size.
                steps: 2, // the max number of images generated between min and max (inclusive)
                disableInDev: false,
            },
        ],
        // [
        //     '@docusaurus/plugin-content-blog',
        //     {
        //         /**
        //          * Required for any multi-instance plugin
        //          */
        //         id: 'second-blog',
        //         /**
        //          * URL route for the blog section of your site.
        //          * *DO NOT* include a trailing slash.
        //          */
        //         routeBasePath: 'my-second-blog',
        //         /**
        //          * Path to data on filesystem relative to site dir.
        //          */
        //         path: './my-second-blog',
        //     },
        // ],
    ],
};

export default config;
