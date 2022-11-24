import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  "/zh/posts/internet":[
    {
      text: "计算机网络",
      icon: "note",
      children: [
        {text:"互联网如何运作", link:"internet-work"},
        {text:"HTTP", link:"HTTP"},
        {text:"浏览器如何运作", link:"browsers"},
        {text:"DNS", link:"DNS"}
      ],
    },
  ],
  "/zh/posts/g2":[
    {
      text: "g2",
      icon: "note",
      children: [
        {text:"折线图", link:"line-chart"},
        {text:"饼图", link:"pie-chart"}
      ],
    },
  ],
  "/zh/posts/vue":[
    {
      text: "vue3",
      icon: "note",
      children: [
        {text:"安装", link:"install"},
        {text:"目录结构", link:"directoryStructure"},
        {text:"使用方法", link:"method"},
        {text:"模板语法", link:"TemplateSyntax"},
        {text:"生命周期钩子函数", link:"lifeCycle"},
        {text:"组合式API", link:"composition-api"},
        {text:"路由", link:"vue-router"},
      ],
    },
  ],
  "/zh/posts/loash":[
    {
      text: "lodash",
      icon: "note",
      children: [
        {text:"chunk", link:"chunk"},
        {text:"compack", link:"compack"},
        "concat",
        "difference",
      ],
    },
  ],
  "/zh/posts/koa2":[
    {
      text: "koa2",
      icon: "note",
      children: [
        {text:"安装", link:"install"},
        {text:"洋葱模型", link:"middle"},
        {text:"koa-router", link:"koa-router"},
      ],
    },
  ],
  "/zh/posts/js":[
    {
      text: "js数据结构",
      icon: "note",
      children: [
        {text:"时间复杂度", link:"time"},
        {text:"空间复杂度", link:"space"},
      ],
    },
  ]
});
