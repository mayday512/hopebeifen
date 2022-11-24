---
icon: edit
date: 2022-01-09
category:
  - lodash
tag:
  - 数组API
---
# chunk
### 一._.chunk(array, [size=1]):
    将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
    _.chunk(['a', 'b', 'c', 'd'], 2);
      // => [['a', 'b'], ['c', 'd']]
#### 官方源码
```javascript
function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))    

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}    
```
#### 自己的源码
```javascript
    function chunk(array,size){
        let newarray = [];
        let nestedarray = [];
       array.forEach((element,index) => {
            //let nestedarray = [];
            nestedarray.push(element)
            //console.log(nestedarray)
            if((index+1)%size===0){
              newarray.push(nestedarray)
              nestedarray=[]
            }
            if((index+1)===array.length){
               newarray.push(nestedarray)
            }
       });
       return newarray;
    }
    let array = [1,3,4,6,6,8,9,5]
    console.log(chunk(array,3))
```
#### 应用场景
    函数在前端可以用来缓解一些性能问题。例如大量的 DOM 操作，可以分块让浏览器在空闲的时候处理，避免页面卡死。如下    面的代码，向页面中插入大量的DOM。
```javascript
    const arr = [] // 1万条数据
    const chunks = _.chunk(arr, 100)    

    const append = function () {
      if (chunks.length > 0) {
        const current = chunks.pop()
        current.forEach(item => {
          const node = document.createElement('div')
          node.innerText = item
          document.body.appendChild(node)
        })
        setTimeout(append, 0)
      }
    }

    append()
  ```