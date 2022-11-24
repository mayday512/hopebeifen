---
icon: edit
date: 2022-01-09
category:
  - vue3
tag:
  - vue3方法
---
# 使用方法
#### 使用插值方式
在 input 中通过 v-model 指令双向绑定 message，然后在 methods 选项中定义 reversedMessage 方法，让 message 的内容反转，然后使用插值语法渲染到页面。
```javascript
< diV id =" app ">
输入内容：< input type =" text " v-model =" message ">< br />
反转内容：{{ reversedMessage ()}}
</ div >
<!--引入 vue 文件-->
< script src ="https://unpkg.com/vue@next"></ script >
<script＞
//创建一个应用程序实例
 const vm = Vue .createApp ({
//该函数返回数据对象
 data ()(
 return { message :''},
//在选项对象的 methods 属性中定义方法
 methods :{
 reversedMessage : function (){
 return this.message.split ('').reverse().join ('')
    }
  }
//在指定的 DOM 元素上装载应用程序实例的根组件
}). mount ('# app ');
</script>
```
#### 使用事件调用
首先在 data()函数中定义 num 属性，然后在 methods 中定义 add()方法，该方法每次调用 num 自增。在页面中首先使用插值渲染 num 的值，使用 v-on 指令绑定 click 事件，然后在事件中调用 add()方法。
```javascript
< div id =" app ">
{( num )}
< p >< button v-on : click ="add ()">增加</button ></ p >
</ diV >
<!--引入 vue 文件-->
< script src ="https://unpkg.com/vuenext"></ script >
< script >
//创建一个应用程序实例
 const vm = Vue . createApp ((
该函数返回数据对象
 data (){
 return:{
 num :1
  }
 },
//在选项对象的 methods 属性中定义方法 
methods :{
 add : function ()(
   this.num +=1
   }
  }
//在指定的 DOM 元素上装载应用程序实例的根组件
}). mount ('# app ');
</ script >
```
### 传递参数
1. 在 methods 的方法中进行声明
2. 调用方法时直接传递参数
### 方法之间调用
在 Vue 中，methods 选项中的一个方法可以调用 methods 中的另外一个方法，其语法格式如下：
[![QQ-20221114175726.jpg](https://i.postimg.cc/pd9Dt887/QQ-20221114175726.jpg)](https://postimg.cc/xk2kvX6y)