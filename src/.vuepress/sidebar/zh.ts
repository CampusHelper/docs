import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "文档",
      icon: "repo",
      prefix: "guide/",
      children: [
        {
          text: "介绍",
          link: "README.md",
          icon: "creative",
        },
        {
          text: "开发环境",
          link: "environment",
          icon: "tool",
        },
        {
          text: "遇到的问题",
          link: "trouble",
          icon: "debug",
        },
        {
          text: "鸣谢",
          link: "thanks",
          icon: "flower",
        },
      ],
    },
    {
      text: "用户登录模块",
      icon: "group",
      prefix: "edge-connect/",
      children: [
        {
          text: "边际互联",
          link: "README.md",
          icon: "mount",
        },
        {
          text: "OAuth2",
          link: "oauth2.md",
          icon: "command",
        },
      ],
    },
    {
      text: "论文",
      icon: "study",
      prefix: "thesis/",
      children: [
        {
          text: "摘要",
          link: "README.md",
          icon: "tag",
        },
        {
          text: "绪论",
          link: "introduction",
          icon: "info",
        },
        {
          text: "开发环境",
          link: "technology",
          icon: "computer",
        },
        {
          text: "需求分析",
          link: "demand",
          icon: "ask",
        },
        {
          text: "概要设计",
          link: "design",
          icon: "software",
        },
        {
          text: "详细设计与实现",
          link: "detail",
          icon: "code",
        },
        {
          text: "测试与评价",
          link: "test",
          icon: "boolean",
        },
        {
          text: "总结与展望",
          link: "summary",
          icon: "like",
        },
        {
          text: "答辩演示",
          link: "reply",
          icon: "slides",
        },
      ],
    },
  ],
});
