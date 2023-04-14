import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "文档",
      icon: "note",
      prefix: "guide/",
      children: [
        {
          text: "介绍",
          link: "README.md",
        },
        {
          text: "开发环境",
          link: "environment",
        },
        {
          text: "遇到的问题",
          link: "trouble",
        },
      ],
    },
    {
      text: "论文",
      icon: "note",
      prefix: "thesis/",
      children: [
        {
          text: "摘要",
          link: "README.md",
        },
        {
          text: "绪论",
          link: "introduction",
        },
        {
          text: "系统开发环境及相关技术介绍",
          link: "technology",
        },
        {
          text: "系统需求分析",
          link: "demand",
        },
        {
          text: "系统概要设计",
          link: "design",
        },
        {
          text: "系统详细设计与实现",
          link: "detail",
        },
        {
          text: "系统测试与评价",
          link: "test",
        },
        {
          text: "总结与展望",
          link: "summary",
        },
      ],
    },
  ],
});
