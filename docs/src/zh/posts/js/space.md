---
icon: edit
date: 2022-11-24
category:
  - js
  - 数据结构
  - 复杂度
tag:
  - 空间复杂度
---
# 空间复杂度
**空间复杂度和时间复杂度一样，反映的也是一种趋势，只不过这种趋势是代码运行过程中临时变量占用的内存空间。**
代码在计算机中的运行所占用的存储空间呐，主要分为 3 部分：



代码本身所占用的

输入数据所占用的

临时变量所占用的



前面两个部分是本身就要占这些空间，与代码的性能无关，所以我们在衡量代码的空间复杂度的时候，只关心运行过程中临时占用的内存空间。



空间复杂度记作 S(n)，表示形式与时间复杂度一致。

## O(n)
```python
def create_lst(n):
    lst = []
    for i in range(n):
        lst.append(i)

    return lst
```
lst 是被创建的一个空列表，这个列表占用的内存随着 for 循环的增加而增加，最大到 n，所以 lst 的空间复杂度为 O(n)，i 是存储元素位置的常数阶，与规模 n 无关，所以这段代码最终的空间复杂度为 O(n)。

## O(n²)
```python
def create_lst(n):
    lst1 = []
    for i in range(n):
        lst2 = []
        for j in range(n):
            lst2.append(j)
        lst1.append(lst2)
    return lst1
```
创建了一个二维数组 lst，一维 lst1 占用 n，二维 lst2 占用 n²，所以最终这段代码的空间复杂度为 O(n²)