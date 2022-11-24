---
icon: edit
date: 2022-11-24
category:
  - koa2
  - 后端
tag:
  - 路由
---
# koa-router

## if判断路径
if也是router，但过于臃肿
```js
//commonJS 导入
const Koa = require('koa')
//实例化应用程序对象
const app = new Koa()
app.use(async(ctx,next)=>{
  console.log(ctx.path)
  console.log(ctx.method)
  if(ctx.path==="/good/list"&&ctx.method==='GET')
   ctx.body={key:"daddas"}
})
app.listen(3000)
```
# 导入koa-router
get（查询），post（新增），put（更新），delete（删除）
```js

const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router
router.get('/good/list',(ctx,next)=>{
  ctx.body={key:"daddas"}
})
//注册到中间件
app.use(router.routes())
app.listen(3000)
```
上述代码就编写了一个API

## 循环引用
非常棘手麻烦

app.js 导出和引入

```js
const Koa = require('koa')
const app = new Koa()
const good = require('./v1/good')
const Router = require('koa-router')
const router = new Router
router.get('/good/list',(ctx,next)=>{
  ctx.body={key:"daddas"}
})
app.use(router.routes())
module.exports = {
  router
}
app.listen(3000)
```
good.js引入
```js
const router = require("../app")
router.get('/good/list',(ctx,next)=>{
    ctx.body={key:"daddas"}
  })
```

因此可以按需引入，全局可以有很多个router，每个router只负责一个模块的路由注册
（高阶模块调用低阶模块）
## 按需引用
good.js
```js
const Router = require('koa-router')
const router = new Router
router.get('/good/list',(ctx,next)=>{
    ctx.body={key:"daddas"}
  })
//导出
module.exports = router
```
app.js
```js
const Koa = require('koa')
const app = new Koa()
const good = require('./v1/good')
app.use(good.routes())
app.listen(3000)
```
导入是否加花括号取决于导出是否加花括号
