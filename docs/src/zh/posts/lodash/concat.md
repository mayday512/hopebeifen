---
icon: edit
date: 2022-01-09
category:
  - lodash
tag:
  - 数组API
---
# concat

### 三._.concat(array, [values])
    创建一个新数组，将array与任何数组 或 值连接在一起。
    var array = [1];
    var other = _.concat(array, 2, [3], [[4]]);
 
    console.log(other);
    // => [1, 2, 3, [4]]
 
    console.log(array);
    // => [1]
#### 自己的代码
```javascript
    function Concat(array,...values){
       let newarry = [].concat(...values)
      return [...array,...newarry]
    }
    var array =[1]
    var other = Concat(array,2,[5],[[8,9]])
    console.log(other)    
```
#### 应用场景
    vue中实现数组的合并
```javascript
     var arrayA = [
        {
            key: 'a',
            value: 1,
        },
        {
            key: 'b',
            value: 2,
        },
        {
            key: 'c',
            value: 3,
        },
        {
            key: 'd',
            value: 4
        }
    ];
    var arrayB = [
        {
            key: 'a',
            value: 1,
        },
        {
            key: 'e',
            value: 5,
        },
        {
            key: 'f',
            value: 6,
        },
    ];

    var newArr = [];
    if(arrayB && arrayB.length) {
        arrayB.forEach(el => {
            var isContain = false;
            for(var i = 0; i < arrayA.length; i ++ ) {
                if(el.key == arrayA[i].key) {
                    isContain = true;
                    break;
                }else{
                    isContain = false;
                }
            }
            if(!isContain) {
                newArr.push(el)
            }
        })
    }
    arrayA = arrayA.concat(newArr)
    console.log(arrayA, arrayB, newArr, '2323')
```