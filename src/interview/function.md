---
   title: mjx
---
<!-- # {{ $frontmatter.title }} -->

# 工作中常用的工具函数
## 对象拷贝函数 浅拷贝
``` js
// 浅拷贝 1
const obj = {name:"mjx"}
const cloneObj1 = Object.assign({},obj); 
//浅拷贝 2
const cloneObj2 = {...obj} 
//浅拷贝 3
const cloneObj3 = Json.parse(json.stringify(cloneObj))
```
## 对象拷贝函数 深拷贝
``` js

```
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