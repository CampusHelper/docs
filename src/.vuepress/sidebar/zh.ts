import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "概述",
      icon: "repo",
      prefix: "overview/",
      children: [
        {
          text: "介绍",
          link: "README.md",
          icon: "creative",
        },
        {
          text: "Roadmap",
          link: "roadmap",
          icon: "context",
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
      text: "服务结构",
      icon: "class",
      prefix: "service/",
      link: "service/README.md",
      children: [
        {
          text: "Linux 系统",
          link: "linux",
          icon: "linux",
        },
        {
          text: "MySQL 数据库",
          link: "mysql",
          icon: "mysql",
        },
        {
          text: "Docker 容器引擎",
          link: "docker",
          icon: "categoryselected",
        },
        {
          text: "GitLab 代码仓库",
          link: "gitlab",
          icon: "gitlab",
        },
        {
          text: "Nacos 服务发现",
          link: "nacos",
          icon: "search",
        },
        {
          text: "Gateway 流量网关",
          link: "gateway",
          icon: "guide",
        },
        {
          text: "SkyWalking 链路追踪",
          link: "skywalking",
          icon: "state",
        },
        {
          text: "RabbitMQ 消息队列",
          link: "rabbitmq",
          icon: "emmet",
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
    {
      text: "边际互联",
      icon: "mount",
      prefix: "edge-connect/",
      children: [
        {
          text: "简介",
          link: "README.md",
          icon: "group",
        },
        {
          text: "OAuth2",
          link: "oauth2.md",
          icon: "command",
        },
      ],
    },
  ],
});
