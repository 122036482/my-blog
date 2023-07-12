---
 title: PNPM
---
# {{ $frontmatter.title}}

## 什么是pnpm
::: info
   pnpm(performant npm)就是高性能的npm的意思
:::

## pnpm有什么优势
1. 快速
2. 高效
3. 支持monorepo
4. 严格 安全
> 这里引用官网的一张图片解释了pnpm的优势

![](https://pnpm.io/assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg)


## 安装PNPM
``` js
  // 全局安装
   npm install --global pnpm
  // 局部安装
   npm  install pnpm D
```
> 更多安装方式参看[官网](https://pnpm.io/installation)
## 常用命令
| npm command        |      pnpm equivalent      |
| -------------      | :-----------:             |
| npm install        | pnpm install              |
| npm i \<pkg\>        |   pnpm add \<pkg\>          |
| npm run \<cmd\>      |   pnpm \<cmd\>              |

## 过滤
> 在monorepo常用这个命令 [更多](https://pnpm.io/filtering)
```bash
pnpm --filter <package_selector> <cmd>
```