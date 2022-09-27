---
   title: 数组方法 Array
---
# {{$frontmatter.title}}
## 遍历数组
### forEach
```js
  let array =[1,2,3]
  array.forEach((item,index) => {
     console.log(item); // 1,2,3
  })

```
### for of
> 必须是一个可迭代的类型 不能遍历对象 如果需要遍历一个对象可以使Object.entity() Object.keys() Object.values() 
```js
  let array =[1,2,3]
  for (let val of array) {
        console.log(val); // 1,2,3
  }
```
### for 循环
```js
  let array =[1,2,3]
  for (let i=0; i<array.length; i++) {
        console.log(array[i]); // 1,2,3
  }
```