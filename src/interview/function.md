---
   title: mjx
---
<!-- # {{ $frontmatter.title }} -->

# 工作中常用的工具函数
## 对象拷贝函数 浅拷贝
::: tip
    什么是浅拷贝 浅拷只是进行了第一层内容复制 
    深层次的引用类型还是共享内存地址，原对象和拷贝对象还是会互相影响
:::
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
::: tip
    什么是深拷贝:深拷贝就是无限层级拷贝，深拷贝后的原对象不会和拷贝对象互相影响。
    为什么要深拷贝? 为了解决引用类型深层次的引用问题
:::
``` js
// 例子
const obj = {
   name:123,
   say(){
  },
  ....
}
// 来一个判断类型的函数
function typeOf(target) {
  return Object.prototype.toString.call(target).split(" ")[1].slice(0, -1);
}
// 实现如下
function deepClone(target, hash = new WeakMap()) {
   const targetType = typeOf(target);
   if (targetType === "null") return target;
   if (targetType === "Date") return new Date(target);
   if (targetType === "RegExp") return new RegExp(target);
   if (targetType === "HTMLElement") return target;
   if (targetType === "Object") return target;
   if (hash.has(target)) return hash.get(target);
   const cloneTarget = {};
   hash.set(target, cloneTarget);
   Reflect.ownKeys(target).forEach((key) => {
      cloneTarget[key] = deepClone(target[key], hash);
   });
   return cloneTarget;
}
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
## 判断一个变量是不是数组
``` js
let variable = []
// 1 es6
Array.isArray(variable)  // true

// instanceof 
(variable instanceof Array) // true

// Object.prototype.toString.call(variable)
function isArray(variable) {
   return Object.prototype.toString.call(variable).split(' ')[1].slice(0,-1) === "Array"
}

```
## 实现一个Bind Function
``` js
Function.prototype.myBind = function(context, ...args) {
   const fn = this;

   //  支持new调用
   function BoundFunction(...innerArgs) {
      // 如果使用new调用
      if (new.target) {
         return new fn(...args, ...innerArgs);
      }
      // 否则使用apply调用
      return fn.apply(context, [...args, ...innerArgs]);
   }
   // 绑定原型链
   BoundFunction.prototype = Object.create(fn.prototype);
   return BoundFunction; // 返回一个新的函数
}

```

## 实现一个store
``` js

class Store {
   constructor() {
      this.state = {};
      this.listeners = [];
   }

   setState(newState) {
      this.state = { ...this.state, ...newState };
      this.notify();
   }

   updateState(updater) {
      if (typeof updater !== 'function') {
         throw new Error('Updater must be a function');
      }
      const newState = updater(this.state);
      this.setState(newState);
   }

   getState() {
      return this.state;
   }

   subscribe(listener) {
      this.listeners.push(listener);
   }

   unsubscribe(listener) {
      this.listeners = this.listeners.filter(l => l !== listener);
   }

   notify() {
      this.listeners.forEach(listener => listener(this.state));
   }
}
```

## 实现一个eventBus

``` js
class EventBus {
   constructor() {
      this.events = new Map();
   }

   on(event, listener) {
      if (!this.events.has(event)) {
         this.events.set(event, []);
      }
      this.events.get(event).push(listener);
   }

   off(event, listener) {
      if (!this.events.has(event)) return;
      this.events.get(event) = this.events.get(event).filter(l => l !== listener);
   }
   emit(event, ...args) {
    if (!this.events.has(event)) return;
      this.events.get(event).forEach(listener => listener(...args));
   }
   off(event,listener) {
      if (!this.events.has(event)) return;
      this.events.set(event, this.events.get(event).filter(l => l !== listener));
   }
}
```

## 实现一个Promise
``` js
class MyPromise {

}
```
