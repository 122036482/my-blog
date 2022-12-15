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
### 判断一个变量是否是数组
>思路一 根据类型判断
``` js
  /**
  *1. type of 返回的是 基本类型和引用类型  引用类型是 object 数组也属于 * * object 也无法判断是否为一个数组。
  * 2. 使用 instanceof 可以检测实例对象 数组的prototype是Array
  * 3. 数组自带的检测方法 isArray 用于确定传递的值是否是一个 Array。
  * 4. 通过Object的toString 方法可以 返回一个表示该对象的字符串
  */

  let arr  = []
  // 方法 1
  console.log(typeof arr) // object
  // 方法 2
  console.log(arr instanceof Array) // true
  // 方法 3
  console.log(Array.isArray(arr)) // true
  // 4
  console.log(Object.prototype.toString.call(arr)); // "[object Array]"

```