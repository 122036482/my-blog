const nav = [
  {
    text: "工作",
    items: [
      { text: "Item A", link: "/item-1" },
      { text: "Item B", link: "/item-2" },
      { text: "Item C", link: "/item-3" },
    ],
  },
  {
    text: "书籍",
    items: [
      { text: "javascript忍者秘籍", link: "/item-1" },
      { text: "javassript数据结构与算法", link: "/item-2" },
      { text: "javascript高级程序设计", link: "/item-3" },
      { text: "javascript悟道", link: "/item-3" },
    ],
  },
  { text: "面试", link: "/interview/" },
];

const sidebar = [
  {
    text: "面试",
    items: [
      { text: "面试", link: "/introduction" },
      { text: "Getting Started", link: "/getting-started" },
    ],
  },
];
export default {
  // themeConfig: {
  //   siteTitle: "MJX_Blog",
  // },
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
