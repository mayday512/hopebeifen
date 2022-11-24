---
icon: edit
date: 2022-11-24
category:
  - js
  - 数据结构
  - 复杂度
tag:
  - 时间复杂度
---

# 时间复杂度
## 时间复杂度是什么
1. **一个函数用大O表示，如O（1），O（n）,O(logN)**

2. **定性描述该算法的运行时间**

[![2-SS-JMYES-7765-BQ3-4-P.png](https://i.postimg.cc/8zjvr499/2-SS-JMYES-7765-BQ3-4-P.png)](https://postimg.cc/fVQyGcwf)

## O（1）

无任何循环

```js
let i = 0
i+=1
```

## O（n）

一重循环n次

```js
for(let i = 0;i <n;i++){
    console.log(i);
}
```
**两者相加为O（n）**

[![6-VWE-9-6-XB6-KK-HY-V-TKO.png](https://i.postimg.cc/cH01S4SZ/6-VWE-9-6-XB6-KK-HY-V-TKO.png)](https://postimg.cc/qtDHcrqZ)

**O（n）相乘**

[![QMNE7-B-BEB-AKFOSI1-O.png](https://i.postimg.cc/4ynQWGnb/QMNE7-B-BEB-AKFOSI1-O.png)](https://postimg.cc/n9bmL64C)

## O（logN）
以2为底的log
```js
let i =1
while(i<n){
    console.log(i)
    i*=2
}
```
## O(nlogn)
O(nlogn)，真的是很常见的时间复杂度，像后面会学到的快速排序、归并排序的时间复杂度都是 O(nlogn)。

```python

def stupid_cnt(n):
    cnt = 0
    for i in range(n):
        dogegg = 1

        while dogegg < n:
            dogegg = dogegg * 2
            cnt += 1
    return cnt
```
## 例题分析
```python
def dogeggs_sum (n):
    sum = 0

    for dogegg in range(n):
        for i in range(n):
            sum += dogegg * i
    return sum
```
第 2 行需要运行 1 次 ，第 4 行需要运行 n 次，第 5 行和第 6 行分别需要运行 n² 次。所以总的运行次数 f(n) =  1 + n + 2n²。



当 n 为 5 的时候，f(n) = 1 + 5 + 2 * 25，当 n 为 10000 的时候，f(n) = 1 + 10000 + 2 * 100000000，当 n 更大呢？



这个时候其实很明显的就可以看出来 n² 起到了决定性的作用，像常数 1，一阶 n 和 系数 2 对最终的结果（即趋势）影响不大，所以我们可以把它们直接忽略掉，所以执行的总步数就可以看成是“主导”结果的那个，也就是 f(n) = n²。



自然代码的运行时间 T(n) = O(f(n)) = O(n²)。

```python

def dogeggs_sum (n):
    sum1 = 0
    for dogegg1 in range(n):
        sum1 += dogegg1

    sum2 = 0
    for dogegg2 in range(n):
        for i in range(n):
            sum2 += dogegg2 * i

    sum3 = 0
    for dogegg3 in range(n):
        for i in range(n):
            for j in range(n):
                sum3 += dogegg3 * i * j

    return sum1 + sum2 + sum3
 ```
  上面这段代码是求三部分的和，经过之前的学习应该很容易知道，第一部分的时间复杂度是 O(n)，第二部分的时间复杂度是 O(n²)，第三部分是 O(n³)。

正常来讲，这段代码的 T(n) = O(n) + O(n²) + O(n³)，按照我们取“主导”部分，显然前面两个小弟都应该直接 pass，最终 T(n) = O(n³)。

**对于时间复杂度分析来说，只要找起“主导”作用的部分代码即可，这个主导就是最高的那个复杂度，也就是执行次数最多的那部分 n 的量级。**

## 常用

[![E8-PP7-LQB-9-HKX-H0-7.png](https://i.postimg.cc/1ttfVcW4/E8-PP7-LQB-9-HKX-H0-7.png)](https://postimg.cc/WDB2QrcP)
## 最好情况时间复杂度



最好情况就是在最理想的情况下，代码的时间复杂度。对应上例变量 word 正好是列表 lst 的第 1 个，这个时候对应的时间复杂度 O(1) 就是这段代码的最好情况时间复杂度。



## 最坏情况时间复杂度



最坏情况就是在最差的情况下，代码的时间复杂度。对应上例变量 word 正好是列表 lst 的最后一个，或者 word 不存在于列表 lst，这个时候对应的时间复杂度 O(n) 是这段代码的最坏情况时间复杂度。



## 平均情况时间复杂度



大多数情况下，代码的执行情况都是介于最好情况和最坏情况之间，所以又出现了平均情况时间复杂度。



那怎么计算平均时间复杂度呢？这个说起来有点复杂，需要用到概率论的知识。

* 从大的方面来看，查找变量 x 在列表 lst 中的位置有两种情况：在或者不在。假设变量 x 在或者不在列表 lst 中的概率都为 1/2。

* 如果 x 在列表 lst 中，那么 x 有 n 种情况，它可能出现在 0 到 n-1 中任意位置，假设出现在每个位置的概率都相同，都为 1/n。

[![640-9.png](https://i.postimg.cc/631v51fM/640-9.png)](https://postimg.cc/47VdWPMc)
所以最终的平均时间复杂度就为：
O(n)
