---
icon: edit
date: 2022-01-09
category:
  - vue3
tag:
  - 安装
---
# 官方文档创建第一个vue
```
前提条件
  熟悉命令行
  已安装 16.0 或更高版本的 Node.js
```
1. npm init vue@latest
2. cd `<your-project-name>`
3. npm install
4. npm run dev
### vue3安装并创建
1. vue install -g @vue/cli    安装或者升级 
2. vue --version   / vue -V     检查版本
3. vue create project-name   创建项目名称
4. npm install  安装@vue/cli
5. npm run dev 运行
![](https://www.runoob.com/wp-content/uploads/2017/01/56219E04-D156-43EC-AC59-BFE7E38A62C3.jpg "RUNOOB")
***
### Vite
1. npm init vite-app project-name 使用 Vite 快速构建 Vue 项目
2. npm init vite-app project-name 创建项目
3. npm install
4. npm run dev 运行
![img](https://www.runoob.com/wp-content/uploads/2021/02/62FB6F27-456F-46CF-8892-93D6A3E6F341.jpg "RUNOOB")
### 创建应用程序实例
应用程序的实例充当了 MVVM 模式中的 ViewModel。createAPP()是一个全局 API，它接受一个根组件选项对象作为参数，该对象可以包含数据、方法、组件生命周期钩子等，然后返回应用程序实例本身。Vue 3.0 引入 createAPP()是为了解决 Vue 2.x 全局配置代理的一些问题。

创建了应用程序的实例后，可以调用实例的 mount()方法，制定一个 DOM 元素，在该 DOM 元素上装载应用程序的根组件，这样这个 DOM 元素中的所有数据变化都会被 Vue 框架所监控，从而实现数据的双向绑定。PS:实际开发中并不要求要把vue实例赋值给某个变量
```
<! DOCTYPE html >
< html >
< head >
< meta charset =" UTF -8">
< title ＞创建应用程序实例＜/ title >
</ head >
< body >
< div id =" app ">
<！一简单的文本插值﹣->
<h2>( message )}</h2>
</ div >
<!-﹣引入 vue 文件﹣->
< script src ="https://unpkg· com / vuenext "></ script >
<SCr1pt>
/／创建一个应用程序实例
 const vm = Vue . createApP ( f 
/／该函数返回数据对象 data (0(
 returnf 
 message :'萧萧梧叶送寒声，江上秋风动客情。
/／在指定的 DOM 元素上装载应用程序实例的根组件). mount ('# app ');
</ script >
</ body >
</ html >
```
