<template><div><h3 id="一-chunk-array-size-1" tabindex="-1"><a class="header-anchor" href="#一-chunk-array-size-1" aria-hidden="true">#</a> 一._.chunk(array, [size=1]):</h3>
<pre><code>将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
_.chunk(['a', 'b', 'c', 'd'], 2);
  // =&gt; [['a', 'b'], ['c', 'd']]
</code></pre>
<h4 id="官方源码" tabindex="-1"><a class="header-anchor" href="#官方源码" aria-hidden="true">#</a> 官方源码</h4>
<pre><code>function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size &lt; 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))    

  while (index &lt; length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}    
</code></pre>
<h4 id="自己的源码" tabindex="-1"><a class="header-anchor" href="#自己的源码" aria-hidden="true">#</a> 自己的源码</h4>
<pre><code>function chunk(array,size){
    let newarray = [];
    let nestedarray = [];
   array.forEach((element,index) =&gt; {
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
</code></pre>
<h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4>
<pre><code>函数在前端可以用来缓解一些性能问题。例如大量的 DOM 操作，可以分块让浏览器在空闲的时候处理，避免页面卡死。如下    面的代码，向页面中插入大量的DOM。
const arr = [] // 1万条数据
const chunks = _.chunk(arr, 100)    

const append = function () {
  if (chunks.length &gt; 0) {
    const current = chunks.pop()
    current.forEach(item =&gt; {
      const node = document.createElement('div')
      node.innerText = item
      document.body.appendChild(node)
    })
    setTimeout(append, 0)
  }
}

append()
</code></pre>
<hr>
<h3 id="二-compact-array" tabindex="-1"><a class="header-anchor" href="#二-compact-array" aria-hidden="true">#</a> 二._.compact(array)</h3>
<pre><code>创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, &quot;&quot;, undefined, 和 NaN 都是被认为是“假值”。
_.compact([0, 1, false, 2, '', 3]);
// =&gt; [1, 2, 3]
</code></pre>
<h4 id="官方源码-1" tabindex="-1"><a class="header-anchor" href="#官方源码-1" aria-hidden="true">#</a> 官方源码</h4>
<pre><code>function compact(array) {
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
</code></pre>
<p>}</p>
<h4 id="自己的代码" tabindex="-1"><a class="header-anchor" href="#自己的代码" aria-hidden="true">#</a> 自己的代码</h4>
<pre><code>  //需求找到数组内偶数
  let arr = [1, 2, 0,NaN,undefined,'',false,null]
  let newArr = arr.filter((item, i, arr) =&gt; {
  //函数本身返回布尔值，只有当返回值为true时，当前项存入新数组。
	return item!==0&amp;&amp;!isNaN(item)&amp;&amp;item!==undefined&amp;&amp;item!==false&amp;&amp;item!==null&amp;&amp;item!==''
  })
console.log(newArr)
</code></pre>
<h4 id="应用场景-1" tabindex="-1"><a class="header-anchor" href="#应用场景-1" aria-hidden="true">#</a> 应用场景</h4>
<pre><code>过滤数组中的假值
</code></pre>
<hr>
<h3 id="三-concat-array-values" tabindex="-1"><a class="header-anchor" href="#三-concat-array-values" aria-hidden="true">#</a> 三._.concat(array, [values])</h3>
<pre><code>*创建一个新数组，将array与任何数组 或 值连接在一起。
*var array = [1];
*var other = _.concat(array, 2, [3], [[4]]);

*console.log(other);
*// =&gt; [1, 2, 3, [4]]

*console.log(array);
*// =&gt; [1]
</code></pre>
<hr>
<h3 id="四-difference-array-values" tabindex="-1"><a class="header-anchor" href="#四-difference-array-values" aria-hidden="true">#</a> 四._.difference(array, [values])</h3>
<pre><code>*创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
*_.difference([3, 2, 1], [4, 2]);
*// =&gt; [3, 1]
</code></pre>
<hr>
<h3 id="五-differenceby-array-values-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#五-differenceby-array-values-iteratee-identity" aria-hidden="true">#</a> 五.<em>.differenceBy(array, [values], [iteratee=</em>.identity])</h3>
<pre><code>*它接受一个 iteratee （注：迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。
*_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
*// =&gt; [3.1, 1.3]

*// The `_.property` iteratee shorthand.
*_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
*// =&gt; [{ 'x': 2 }]
</code></pre>
<hr>
<h3 id="六-differencewith-array-values-comparator" tabindex="-1"><a class="header-anchor" href="#六-differencewith-array-values-comparator" aria-hidden="true">#</a> 六._.differenceWith(array, [values], [comparator])</h3>
<pre><code>*它接受一个 comparator （注：比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。
*var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

*_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
*// =&gt; [{ 'x': 2, 'y': 1 }]
</code></pre>
<hr>
<h3 id="七-drop-array-n-1" tabindex="-1"><a class="header-anchor" href="#七-drop-array-n-1" aria-hidden="true">#</a> 七._.drop(array, [n=1])</h3>
<pre><code>*创建一个切片数组，去除array前面的n个元素。
*_.drop([1, 2, 3]);
*// =&gt; [2, 3]
</code></pre>
<hr>
<h3 id="八-dropright-array-n-1" tabindex="-1"><a class="header-anchor" href="#八-dropright-array-n-1" aria-hidden="true">#</a> 八._.dropRight(array, [n=1])</h3>
<pre><code>*创建一个切片数组，去除array尾部的n个元素。
*_.dropRight([1, 2, 3]);
*// =&gt; [1, 2]
</code></pre>
<hr>
<h3 id="九-droprightwhile-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#九-droprightwhile-array-predicate-identity" aria-hidden="true">#</a> 九.<em>.dropRightWhile(array, [predicate=</em>.identity])</h3>
<pre><code>*创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。
*var users = [
*{ 'user': 'barney',  'active': true },
*{ 'user': 'fred',    'active': false },
*{ 'user': 'pebbles', 'active': false }
*];

*_.dropRightWhile(users, function(o) { return !o.active; });
*// =&gt; objects for ['barney']

*// The `_.matches` iteratee shorthand.
*_.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
*// =&gt; objects for ['barney', 'fred']

*// The `_.matchesProperty` iteratee shorthand.
*_.dropRightWhile(users, ['active', false]);
*// =&gt; objects for ['barney']

*// The `_.property` iteratee shorthand.
*_.dropRightWhile(users, 'active');
*// =&gt; objects for ['barney', 'fred', 'pebbles']
</code></pre>
<hr>
<h3 id="十-dropwhile-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#十-dropwhile-array-predicate-identity" aria-hidden="true">#</a> 十.<em>.dropWhile(array, [predicate=</em>.identity])</h3>
<pre><code>*创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分
 *var users = [
*{ 'user': 'barney',  'active': true },
*{ 'user': 'fred',    'active': false },
*{ 'user': 'pebbles', 'active': false }
*];

*_.dropWhile(users, function(o) { return !o.active; });
*// =&gt; objects for ['pebbles']

*// The `_.matches` iteratee shorthand.
*_.dropWhile(users, { 'user': 'pebbles', 'active': false });
*// =&gt; objects for ['fred', 'pebbles']

*// The `_.matchesProperty` iteratee shorthand.
*_.dropWhile(users, ['active', false]);
*// =&gt; objects for ['pebbles']

*// The `_.property` iteratee shorthand.
*_.dropWhile(users, 'active');
*// =&gt; objects for ['barney', 'fred', 'pebbles']
</code></pre>
<hr>
<h3 id="十一-fill-array-value-start-0-end-array-length" tabindex="-1"><a class="header-anchor" href="#十一-fill-array-value-start-0-end-array-length" aria-hidden="true">#</a> 十一._.fill(array, value, [start=0], [end=array.length])</h3>
<pre><code>*使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）
*var array = [1, 2, 3];

*_.fill(array, 'a');
*console.log(array);
*// =&gt; ['a', 'a', 'a']

*_.fill(Array(3), 2);
*// =&gt; [2, 2, 2]

*_.fill([4, 6, 8, 10], '*', 1, 3);
*// =&gt; [4, '*', '*', 10]
</code></pre>
<hr>
<h3 id="十二-findindex-array-predicate-identity-fromindex-0" tabindex="-1"><a class="header-anchor" href="#十二-findindex-array-predicate-identity-fromindex-0" aria-hidden="true">#</a> 十二.<em>.findIndex(array, [predicate=</em>.identity], [fromIndex=0])</h3>
<pre><code>*该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
*var users = [
*{ 'user': 'barney',  'active': false },
*{ 'user': 'fred',    'active': false },
*{ 'user': 'pebbles', 'active': true }
*];

*_.findIndex(users, function(o) { return o.user == 'barney'; });
*// =&gt; 0

*// The `_.matches` iteratee shorthand.
*_.findIndex(users, { 'user': 'fred', 'active': false });
*// =&gt; 1

*// The `_.matchesProperty` iteratee shorthand.
*_.findIndex(users, ['active', false]);
*// =&gt; 0

*// The `_.property` iteratee shorthand.
*_.findIndex(users, 'active');
*// =&gt; 2
</code></pre>
<hr>
<h3 id="十三-findlastindex-array-predicate-identity-fromindex-array-length-1" tabindex="-1"><a class="header-anchor" href="#十三-findlastindex-array-predicate-identity-fromindex-array-length-1" aria-hidden="true">#</a> 十三.<em>.findLastIndex(array, [predicate=</em>.identity], [fromIndex=array.length-1])</h3>
<pre><code>*这个方式类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。
*_.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
*// =&gt; 2
* 
*// The `_.matches` iteratee shorthand.
*_.findLastIndex(users, { 'user': 'barney', 'active': true });
*// =&gt; 0
* 
*// The `_.matchesProperty` iteratee shorthand.
*_.findLastIndex(users, ['active', false]);
*// =&gt; 2
* 
*// The `_.property` iteratee shorthand.
*_.findLastIndex(users, 'active');
*// =&gt; 0
</code></pre>
<hr>
<h3 id="十四-head-array" tabindex="-1"><a class="header-anchor" href="#十四-head-array" aria-hidden="true">#</a> 十四._.head(array)</h3>
<pre><code>*获取数组 array 的第一个元素。
*_.head([1, 2, 3]);
*// =&gt; 1
* 
*_.head([]);
*// =&gt; undefined
</code></pre>
<hr>
<h3 id="十五-flatten-array" tabindex="-1"><a class="header-anchor" href="#十五-flatten-array" aria-hidden="true">#</a> 十五._.flatten(array)</h3>
<pre><code>*减少一级array嵌套深度。
*_.flatten([1, [2, [3, [4]], 5]]);
*// =&gt; [1, 2, [3, [4]], 5]
</code></pre>
<hr>
<h3 id="十六-flattendeep-array" tabindex="-1"><a class="header-anchor" href="#十六-flattendeep-array" aria-hidden="true">#</a> 十六._.flattenDeep(array)</h3>
<pre><code>*将array递归为一维数组。
*_.flattenDeep([1, [2, [3, [4]], 5]]);
*// =&gt; [1, 2, 3, 4, 5]
</code></pre>
<hr>
<h3 id="十七-flattendepth-array-depth-1" tabindex="-1"><a class="header-anchor" href="#十七-flattendepth-array-depth-1" aria-hidden="true">#</a> 十七._.flattenDepth(array, [depth=1])</h3>
<pre><code>*根据 depth 递归减少 array 的嵌套层级
*var array = [1, [2, [3, [4]], 5]];
* 
*_.flattenDepth(array, 1);
*// =&gt; [1, 2, [3, [4]], 5]
* 
*_.flattenDepth(array, 2);
*// =&gt; [1, 2, 3, [4], 5]
</code></pre>
<hr>
<h3 id="十八-frompairs-pairs" tabindex="-1"><a class="header-anchor" href="#十八-frompairs-pairs" aria-hidden="true">#</a> 十八._.fromPairs(pairs)</h3>
<pre><code>*这个方法返回一个由键值对pairs构成的对象。
*_.fromPairs([['fred', 30], ['barney', 40]]);
*// =&gt; { 'fred': 30, 'barney': 40 }
</code></pre>
<hr>
<h3 id="十九-head-array" tabindex="-1"><a class="header-anchor" href="#十九-head-array" aria-hidden="true">#</a> 十九._.head(array)</h3>
<pre><code>*获取数组 array 的第一个元素。
*_.head([1, 2, 3]);
*// =&gt; 1
* 
*_.head([]);
*// =&gt; undefined
</code></pre>
<hr>
<h3 id="二十-indexof-array-value-fromindex-0" tabindex="-1"><a class="header-anchor" href="#二十-indexof-array-value-fromindex-0" aria-hidden="true">#</a> 二十._.indexOf(array, value, [fromIndex=0])</h3>
<pre><code>*使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
*_.indexOf([1, 2, 1, 2], 2);
*// =&gt; 1
* 
*// Search from the `fromIndex`.
*_.indexOf([1, 2, 1, 2], 2, 2);
*// =&gt; 3    
</code></pre>
<hr>
<h3 id="二十一-initial-array" tabindex="-1"><a class="header-anchor" href="#二十一-initial-array" aria-hidden="true">#</a> 二十一._.initial(array)</h3>
<pre><code>*获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
*_.initial([1, 2, 3]);
*// =&gt; [1, 2]
</code></pre>
<hr>
<h3 id="二十二-intersection-arrays" tabindex="-1"><a class="header-anchor" href="#二十二-intersection-arrays" aria-hidden="true">#</a> 二十二._.intersection([arrays])</h3>
<pre><code>*创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。
*_.intersection([2, 1], [4, 2], [1, 2]);
*// =&gt; [2]
</code></pre>
<hr>
<h3 id="二十三-intersectionby-arrays-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#二十三-intersectionby-arrays-iteratee-identity" aria-hidden="true">#</a> 二十三.<em>.intersectionBy([arrays], [iteratee=</em>.identity])</h3>
<pre><code>*接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。
*_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
*// =&gt; [2.1]
* 
*// The `_.property` iteratee shorthand.
*_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
*// =&gt; [{ 'x': 1 }]
</code></pre>
<hr>
<h3 id="二十四-intersectionwith-arrays-comparator" tabindex="-1"><a class="header-anchor" href="#二十四-intersectionwith-arrays-comparator" aria-hidden="true">#</a> 二十四._.intersectionWith([arrays], [comparator])</h3>
<pre><code>*接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。
*var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
*var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
* 
*_.intersectionWith(objects, others, _.isEqual);
*// =&gt; [{ 'x': 1, 'y': 2 }]    *
</code></pre>
<hr>
<h3 id="二十五-join-array-separator" tabindex="-1"><a class="header-anchor" href="#二十五-join-array-separator" aria-hidden="true">#</a> 二十五._.join(array, [separator=','])</h3>
<pre><code>*将 array 中的所有元素转换为由 separator 分隔的字符串。
*_.join(['a', 'b', 'c'], '~');
*// =&gt; 'a~b~c'
</code></pre>
<hr>
<h3 id="二十六-last-array" tabindex="-1"><a class="header-anchor" href="#二十六-last-array" aria-hidden="true">#</a> 二十六._.last(array)</h3>
<pre><code>获取array中的最后一个元素。
_.last([1, 2, 3]);
// =&gt; 3    
</code></pre>
<hr>
<h3 id="二十七-lastindexof-array-value-fromindex-array-length-1" tabindex="-1"><a class="header-anchor" href="#二十七-lastindexof-array-value-fromindex-array-length-1" aria-hidden="true">#</a> 二十七._.lastIndexOf(array, value, [fromIndex=array.length-1])</h3>
<pre><code>这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。
_.lastIndexOf([1, 2, 1, 2], 2);
// =&gt; 3
 
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// =&gt; 1
</code></pre>
<hr>
<h3 id="二十八-nth-array-n-0" tabindex="-1"><a class="header-anchor" href="#二十八-nth-array-n-0" aria-hidden="true">#</a> 二十八._.nth(array, [n=0])</h3>
<pre><code>获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// =&gt; 'b'
 
_.nth(array, -2);
// =&gt; 'c';    
</code></pre>
<hr>
<h3 id="二十九-pull-array-values" tabindex="-1"><a class="header-anchor" href="#二十九-pull-array-values" aria-hidden="true">#</a> 二十九._.pull(array, [values])</h3>
<pre><code>移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
var array = [1, 2, 3, 1, 2, 3];
 
_.pull(array, 2, 3);
console.log(array);
// =&gt; [1, 1]
</code></pre>
<hr>
<h3 id="三十-pullall-array-values" tabindex="-1"><a class="header-anchor" href="#三十-pullall-array-values" aria-hidden="true">#</a> 三十._.pullAll(array, values)</h3>
<pre><code>这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
var array = [1, 2, 3, 1, 2, 3];
 
_.pullAll(array, [2, 3]);
console.log(array);
// =&gt; [1, 1]    
</code></pre>
<hr>
<h3 id="三十一-pullallby-array-values-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#三十一-pullallby-array-values-iteratee-identity" aria-hidden="true">#</a> 三十一.<em>.pullAllBy(array, values, [iteratee=</em>.identity])</h3>
<pre><code>这个方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个    值，通过产生的值进行了比较。
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// =&gt; [{ 'x': 2 }]    
</code></pre>
<hr>
<h3 id="三十二-pullallwith-array-values-comparator" tabindex="-1"><a class="header-anchor" href="#三十二-pullallwith-array-values-comparator" aria-hidden="true">#</a> 三十二._.pullAllWith(array, values, [comparator])</h3>
<pre><code>这个方法类似于_.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较。
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array);
// =&gt; [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]    
</code></pre>
<hr>
<h3 id="三十三-pullat-array-indexes" tabindex="-1"><a class="header-anchor" href="#三十三-pullat-array-indexes" aria-hidden="true">#</a> 三十三._.pullAt(array, [indexes])</h3>
<pre><code>根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。
var array = [5, 10, 15, 20];
var evens = _.pullAt(array, 1, 3);
 
console.log(array);
// =&gt; [5, 15]
 
console.log(evens);
// =&gt; [10, 20]
</code></pre>
<hr>
<h3 id="三十四-remove-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#三十四-remove-array-predicate-identity" aria-hidden="true">#</a> 三十四.<em>.remove(array, [predicate=</em>.identity])</h3>
<pre><code>移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// =&gt; [1, 3]
 
console.log(evens);
// =&gt; [2, 4]    
</code></pre>
<hr>
<h3 id="三十五-reverse-array" tabindex="-1"><a class="header-anchor" href="#三十五-reverse-array" aria-hidden="true">#</a> 三十五._.reverse(array)</h3>
<pre><code>反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
var array = [1, 2, 3];
 
_.reverse(array);
// =&gt; [3, 2, 1]
 
console.log(array);
// =&gt; [3, 2, 1]
</code></pre>
<hr>
<h3 id="三十六-slice-array-start-0-end-array-length" tabindex="-1"><a class="header-anchor" href="#三十六-slice-array-start-0-end-array-length" aria-hidden="true">#</a> 三十六._.slice(array, [start=0], [end=array.length])</h3>
<pre><code>裁剪数组array，从 start 位置开始到end结束，但不包括 end
</code></pre>
<hr>
<h3 id="三十七-sortedindex-array-value" tabindex="-1"><a class="header-anchor" href="#三十七-sortedindex-array-value" aria-hidden="true">#</a> 三十七._.sortedIndex(array, value)</h3>
<pre><code>使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序
_.sortedIndex([30, 50], 40);
// =&gt; 1
</code></pre>
<hr>
<h3 id="三十八-sortedindexby-array-value-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#三十八-sortedindexby-array-value-iteratee-identity" aria-hidden="true">#</a> 三十八.<em>.sortedIndexBy(array, value, [iteratee=</em>.identity])</h3>
<pre><code>这个方法类似_.sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和    value 值比较来计算排序。iteratee 会传入一个参数：(value)。
var objects = [{ 'x': 4 }, { 'x': 5 }];
 
_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// =&gt; 0
 
// The `_.property` iteratee shorthand.
_.sortedIndexBy(objects, { 'x': 4 }, 'x');
// =&gt; 0    
</code></pre>
<hr>
<h3 id="三十九-sortedindexof-array-value" tabindex="-1"><a class="header-anchor" href="#三十九-sortedindexof-array-value" aria-hidden="true">#</a> 三十九._.sortedIndexOf(array, value)</h3>
<pre><code>这个方法类似_.indexOf，除了它是在已经排序的数组array上执行二进制检索。
_.sortedIndexOf([4, 5, 5, 5, 6], 5);
// =&gt; 1    
</code></pre>
<hr>
<h3 id="四十-sortedlastindex-array-value" tabindex="-1"><a class="header-anchor" href="#四十-sortedlastindex-array-value" aria-hidden="true">#</a> 四十._.sortedLastIndex(array, value)</h3>
<pre><code>此方法类似于_.sortedIndex，除了 它返回 value值 在 array 中尽可能大的索引位置（index）。
_.sortedLastIndex([4, 5, 5, 5, 6], 5);
// =&gt; 4    
</code></pre>
<hr>
<h3 id="四十一-sortedlastindexby-array-value-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#四十一-sortedlastindexby-array-value-iteratee-identity" aria-hidden="true">#</a> 四十一.<em>.sortedLastIndexBy(array, value, [iteratee=</em>.identity])</h3>
<pre><code>这个方法类似_.sortedLastIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和    value 值比较来计算排序。iteratee 会传入一个参数：(value)。
var objects = [{ 'x': 4 }, { 'x': 5 }];
 
_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// =&gt; 1
 
// The `_.property` iteratee shorthand.
_.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
// =&gt; 1    
</code></pre>
<hr>
<h3 id="四十二-sortedlastindexof-array-value" tabindex="-1"><a class="header-anchor" href="#四十二-sortedlastindexof-array-value" aria-hidden="true">#</a> 四十二._.sortedLastIndexOf(array, value)</h3>
<pre><code>这个方法类似_.lastIndexOf，除了它是在已经排序的数组array上执行二进制检索。
_.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
// =&gt; 3
</code></pre>
<hr>
<h3 id="四十三-sorteduniq-array" tabindex="-1"><a class="header-anchor" href="#四十三-sorteduniq-array" aria-hidden="true">#</a> 四十三._.sortedUniq(array)</h3>
<pre><code>这个方法类似_.uniq，除了它会优化排序数组。
_.sortedUniq([1, 1, 2]);
// =&gt; [1, 2]
</code></pre>
<hr>
<h3 id="四十四-sorteduniqby-array-iteratee" tabindex="-1"><a class="header-anchor" href="#四十四-sorteduniqby-array-iteratee" aria-hidden="true">#</a> 四十四._.sortedUniqBy(array, [iteratee])</h3>
<pre><code>这个方法类似_.uniqBy，除了它会优化排序数组。
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// =&gt; [1.1, 2.3]    
</code></pre>
<hr>
<h3 id="四十五-tail-array" tabindex="-1"><a class="header-anchor" href="#四十五-tail-array" aria-hidden="true">#</a> 四十五_.tail(array)</h3>
<pre><code>获取除了array数组第一个元素以外的全部元素。
_.tail([1, 2, 3]);
// =&gt; [2, 3]    
</code></pre>
<hr>
<h3 id="四十六-take-array-n-1" tabindex="-1"><a class="header-anchor" href="#四十六-take-array-n-1" aria-hidden="true">#</a> 四十六._.take(array, [n=1])</h3>
<pre><code>创建一个数组切片，从array数组的起始元素开始提取n个元素。
_.take([1, 2, 3]);
// =&gt; [1]
 
_.take([1, 2, 3], 2);
// =&gt; [1, 2]
 
_.take([1, 2, 3], 5);
// =&gt; [1, 2, 3]
 
_.take([1, 2, 3], 0);
// =&gt; []    
</code></pre>
<hr>
<h3 id="四十七-takeright-array-n-1" tabindex="-1"><a class="header-anchor" href="#四十七-takeright-array-n-1" aria-hidden="true">#</a> 四十七._.takeRight(array, [n=1])</h3>
<pre><code>创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
_.takeRight([1, 2, 3]);
// =&gt; [3]
 
_.takeRight([1, 2, 3], 2);
// =&gt; [2, 3]
 
_.takeRight([1, 2, 3], 5);
// =&gt; [1, 2, 3]
 
_.takeRight([1, 2, 3], 0);
// =&gt; []    
</code></pre>
<hr>
<h3 id="四十七-takerightwhile-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#四十七-takerightwhile-array-predicate-identity" aria-hidden="true">#</a> 四十七.<em>.takeRightWhile(array, [predicate=</em>.identity])</h3>
<pre><code>从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index,     array)。
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.takeRightWhile(users, function(o) { return !o.active; });
// =&gt; objects for ['fred', 'pebbles']
 
// The `_.matches` iteratee shorthand.
_.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// =&gt; objects for ['pebbles']
 
// The `_.matchesProperty` iteratee shorthand.
_.takeRightWhile(users, ['active', false]);
// =&gt; objects for ['fred', 'pebbles']
 
// The `_.property` iteratee shorthand.
_.takeRightWhile(users, 'active');
// =&gt; []    
</code></pre>
<hr>
<h3 id="四十八-takewhile-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#四十八-takewhile-array-predicate-identity" aria-hidden="true">#</a> 四十八.<em>.takeWhile(array, [predicate=</em>.identity])</h3>
<pre><code>从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index,     array)。
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false},
  { 'user': 'pebbles', 'active': true }
];
 
_.takeWhile(users, function(o) { return !o.active; });
// =&gt; objects for ['barney', 'fred']
 
// The `_.matches` iteratee shorthand.
_.takeWhile(users, { 'user': 'barney', 'active': false });
// =&gt; objects for ['barney']
 
// The `_.matchesProperty` iteratee shorthand.
_.takeWhile(users, ['active', false]);
// =&gt; objects for ['barney', 'fred']
 
// The `_.property` iteratee shorthand.
_.takeWhile(users, 'active');
// =&gt; []
</code></pre>
<hr>
</div></template>


