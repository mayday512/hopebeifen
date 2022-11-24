---
icon: edit
date: 2022-01-09
category:
  - lodash
tag:
  - 数组API
  - 集合
---
# difference
### 四._.difference(array, [values])
    创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
    _.difference([3, 2, 1], [4, 2]);
    // => [3, 1]
#### 官网源码
```javascript
    function difference(array, ...values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : []
    }   
``` 
#### 自己的代码
```javascript
    function difference(array,...values){
       let tmpA = values.reduce((lastArr, item)=>{
          lastArr = lastArr.concat(item);
          return lastArr;
      },[])    

       let diff = [...new Set(array)].filter(item => !(new Set(tmpA).has(item)));
       return diff
    }    

    console.log(difference([1,2,3,5],[3,4],[5]))
```
#### 应用场景
取多个数组的差集