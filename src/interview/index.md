---
   title: mjx
---
<!-- # {{ $frontmatter.title }} -->

# 工作中常用的工具函数
## 防抖函数
``` js
function debounce(fn,delay = 200) {
   let timer= null;
   return function() {
      if (timer) clearSetTimeout(timer)
      timer = setTimeout(() =>{
         fn.apply(this, arguments);
      },delay);
   }
}
```
::: info
  FDJFDJK
:::
## 节流函数
``` js{5}
function throttle(fn,delay = 200) {
   let timer= null;
   return function() {
      if (timer) return
      timer = setTimeout(() =>{
         fn.apply(this, arguments);
         timer = null
      },delay);
   }
}
```