import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "CampusHelper",
      description: "CampusHelper 的文档",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    docsearchPlugin({
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: '9UX2VVPS8D',
      apiKey: 'a2faff2c88e2506452d7a4a1883cd970',
      indexName: 'campushelper-akagiyui',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
    // searchProPlugin({
    //   // 索引全部内容
    //   indexContent: true,
    //   // 为分类和标签添加索引
    //   customFields: [
    //     {
    //       getter: (page) => page.frontmatter.category,
    //       formatter: {
    //         "/en/": "Category: $content",
    //         "/": "分类：$content",
    //       },
    //     },
    //     {
    //       getter: (page) => page.frontmatter.tag,
    //       formatter: {
    //         "/en/": "Tag: $content",
    //         "/": "标签：$content",
    //       },
    //     },
    //   ],
    // }),
  ],
});
