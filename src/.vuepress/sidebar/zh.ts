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
      prefix: "oauth2/",
      children: [
        {
          text: "介绍",
          link: "README.md",
          icon: "mount",
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
          text: "系统开发环境及相关技术介绍",
          link: "technology",
          icon: "computer",
        },
        {
          text: "系统需求分析",
          link: "demand",
          icon: "ask",
        },
        {
          text: "系统概要设计",
          link: "design",
          icon: "software",
        },
        {
          text: "系统详细设计与实现",
          link: "detail",
          icon: "code",
        },
        {
          text: "系统测试与评价",
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
