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
### 实现一个 arr.map 
```js
/**
 * @param  {Array}  arr 传递的数组
 * @param  {Callback}  cb 一个回调函数
 * @return {Array} 返回一个新的数组
*/
function myMap(arr, cb) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(cb(arr[i], i));
    }
    return res;
  }
  let arr = [1, 2, 3];
  let arr1 = myMap(arr, (item, index) => item * 2);
  console.log(arr1);// 2 4 6
```