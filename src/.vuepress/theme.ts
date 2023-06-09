import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://campushelper.akagiyui.com",

  author: {
    name: "AkagiYui",
    url: "https://akagiyui.com",
  },

  // fullscreen: true,

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "CampusHelper",
  docsBranch: "master",
  docsRepo: "CampusHelper/docs",
  docsDir: "src",

  locales: {
    "/en/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "Welcome to CampusHelper",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "欢迎使用 CampusHelper",
      displayFooter: true,
      editLink: true,
      lastUpdated: true,
      contributors: true,
      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
      },
    },
  },

  encrypt: {
    config: {
      // "/thesis/": ["1050314133"],
    },
  },

  plugins: {
    comment: {
      // provider: "Giscus",
      // repo: "CampusHelper/docs",
      // repoId: "R_kgDOJRY5SA",
      // category: "General",
      // categoryId: "DIC_kwDOJRY5SM4CVwvz",
      // inputPosition: "top",

      provider: "Waline",
      serverURL: "https://campus-helper-waline.vercel.app/",
      search: false,
      reaction: true,
      emoji: [
        "https://unpkg.com/@waline/emojis@1.1.0/tieba",
        "https://unpkg.com/@waline/emojis@1.1.0/qq",
        "https://unpkg.com/@waline/emojis@1.1.0/alus",
        "https://unpkg.com/@waline/emojis@1.1.0/bilibili",
        "https://unpkg.com/@waline/emojis@1.1.0/bmoji",
      ],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,

      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,

      flowchart: true,
      gfm: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
