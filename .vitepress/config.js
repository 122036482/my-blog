// 导航栏
const nav = [
  {
    text: "工作",
    link: "/work/",
  },
  {
    text: "书籍",
    items: [
      { text: "javascript忍者秘籍", link: "/books/js_ninja/" },
      { text: "javascript数据结构与算法", link: "/books/" },
      { text: "javascript高级程序设计", link: "/books/" },
      { text: "javascript悟道", link: "/books/" },
    ],
  },
  { text: "面试", link: "/interview/" },
  {
    text: "学习",
    items: [
      { text: "rollup", link: "/learn/rollup/" },
      { text: "pnpm", link: "/learn/pnpm/" },
    ],
  },
  { text: "TypeScript", link: "/typescript/" },
];
// 侧边栏
const sidebar = {
  "/interview/": [
    {
      text: "Interview Questions",
      items: [
        { text: "常用的工具函数", link: "/interview/function" },
        { text: "数组相关问题", link: "/interview/array" },
      ],
    },
  ],
};
export default {
  title: "MJX的博客",
  description: "记录生活，工作，与学习",
  srcDir: "src",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav,
    sidebar,
  },
};
