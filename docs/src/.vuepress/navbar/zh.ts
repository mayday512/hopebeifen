import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "演示", icon: "discover", link: "/zh/demo/" },
  {
    text: "前端",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
     { text: "计算机网络", icon: "edit", link: "internet/internet-work" },
     { text: "vue3", icon: "edit", link: "vue/install" },
     { text: "lodash", icon: "edit", link: "lodash/chunk" },
     { text: "g2", icon: "edit", link: "g2/line-chart" },
     { text: "正则表达式", icon: "edit", link: "regular-expression/Symbol" },

    ],
  },
  {
    text: "后端",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
     
      { text: "计算机网络", icon: "edit", link: "internet/internet-work" },
      { text: "koa2", icon: "edit", link: "koa2/install" },
      { text: "js数据结构", icon: "edit", link: "js/time" },

    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
