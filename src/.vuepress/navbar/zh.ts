import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "文档",
    icon: "repo",
    link: "/guide/",
  },
  {
    text: "论文",
    icon: "article",
    link: "/thesis/",
  },
  {
    text: "在线体验",
    icon: "hot",
    link: "https://campushelper.akagiyui.com",
  },
]);
