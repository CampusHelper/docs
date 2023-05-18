import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "文档",
    icon: "repo",
    link: "/overview/",
  },
  {
    text: "论文",
    icon: "study",
    link: "/thesis/",
  },
  {
    text: "作者博客",
    icon: "advance",
    link: "https://akagiyui.com",
  },
  {
    text: "立即体验",
    icon: "hot",
    link: "https://campushelper.akagiyui.com",
  },
]);
