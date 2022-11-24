---
icon: edit
date: 2022-11-24
category:
  - koa2
  - 后端
tag:
  - 中间件
  - 洋葱模型
---

# 洋葱模型
## 中间件
中间件的作用就是，在你上下两个事件通讯的过程中强行塞入一个事件，这个事件可以起到承上启下的作用，并在运行应用的时候做一些只关于部分模块化功能。
![](https://upload-images.jianshu.io/upload_images/14243841-4f932a4d2ce4391c.png?imageMogr2/auto-orient/strip|imageView2/2/w/478/format/webp)

**定义一个中间件就是定义一个函数**

**ctx 上下文 next 下一个中间件函数本质是一个promise 可以层层调用**

**通常对资源的操作是异步的，读文件 发送http（axios） 操作数据库（squelize）**

**中间件可以return 由上一个中间件next接收**
```js
//commonJS 导入
const Koa = require('koa')
//实例化应用程序对象
const app = new Koa()
//定义一个中间件就是定义一个函数
//ctx 上下文 next 下一个中间件函数本质是一个promise 可以层层调用
//async await保证一定按照洋葱模型执行 async：强制包装成为promise await:表达式取值 promise取值 阻塞当前线程
//通常对资源的操作是异步的，读文件 发送http（axios） 操作数据库（squelize）
//中间件可以return 由上一个中间件next接收
app.use(async( ctx ,next) => {
 console.log("1")
 await next()
 console.log("2")
})
app.use(async(ctx,next)=>{
    console.log("3")
    await next()
    console.log("4")
})
app.use(async(ctx,next)=>{
    console.log("5")
    await next()
    console.log("6")
})
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
```
上述代码输出结果为：1，3，5，6，4，2

## async await

异步处理的终极方案

**async await保证一定按照洋葱模型执行 async：强制包装成为promise await:表达式取值 promise取值 阻塞当前线程(异步变同步)**

**通常对资源的操作是异步的，读文件 发送http（axios） 操作数据库（squelize）**
```js
//commonJS 导入
const Koa = require('koa')
//实例化应用程序对象
const app = new Koa()
app.use(async(ctx,next)=>{
  const axios = require("axios")
  const start = Date.now()
  const res = axios.get('url')
  const end = Date.now()
  console.log(end-start)
})
app.listen(3000)
```
上述代码的时间戳差值较大