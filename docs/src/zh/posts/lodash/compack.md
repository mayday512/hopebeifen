---
icon: edit
date: 2022-01-09
category:
  - lodash
tag:
  - 数组API
---
# compack
### 二._.compact(array)
    创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
    _.compact([0, 1, false, 2, '', 3]);
    // => [1, 2, 3]
#### 官方源码
```javascript
    function compact(array) {
      let resIndex = 0
      const result = []    

      if (array == null) {
        return result
      }    

      for (const value of array) {
        if (value) {
          result[resIndex++] = value
        }
      }
      return result
    }
```
#### 自己的代码
```javascript
      //需求找到数组内偶数
      let arr = [1, 2, 0,NaN,undefined,'',false,null]
      let newArr = arr.filter((item, i, arr) => {
      //函数本身返回布尔值，只有当返回值为true时，当前项存入新数组。
    	return item!==0&&!isNaN(item)&&item!==undefined&&item!==false&&item!==null&&item!==''
      })
    console.log(newArr)
```
#### 应用场景
    过滤数组中的假值