---
icon: edit
date: 2022-01-09
category:
  - vue3
tag:
  - 生命周期
---
# 生命周期钩子函数
生命周期钩子函数：

[![QQ-20210102213904.jpg](https://i.postimg.cc/J43zFhFL/QQ-20210102213904.jpg)](https://postimg.cc/svXzQ3y6)

ps:不要在不要在钩子函数选项或回调上使用箭头函数，例如 created:()=>console.log（this.a）或 vm.$wat('a',newValue=>this.myMethod())。因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查直至找到为止，经常导致 Uncaught TypeError:Cannot read property of undefined 或 UncaughTypeError:this.myMethod is not a function 之类的错误。

[![QQ-20210102213904.jpg](https://i.postimg.cc/MH7QZJWf/QQ-20210102213904.jpg)](https://postimg.cc/sG2XK8G3)

上述代码：首先在页面加载完后触发 beforeCreate、created、beforeMount、mounted，4 秒修改 msg 的内容为「孤云还空山，众鸟各已归。」，并触发 beforeUpdate 和 updated 钩子函数。
***
## created和mouted
created 是在实例创建完成后立即调用。在这一步，实例已完成了数据观测、属性和方法的运算，以及 watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。所以不能操作 DOM 元素，多用于初始化一些数据或方法。
created 是在实例创建完成后立即调用。在这一步，实例已完成了数据观测、属性和方法的运算，以及 watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。所以不能操作 DOM 元素，多用于初始化一些数据或方法。

应用：
[![QQ-20210102213904.jpg](https://i.postimg.cc/yN64vmJM/QQ-20210102213904.jpg)](https://postimg.cc/cvzbJ8Bh)
***
### 对比
![img](https://pic4.zhimg.com/80/v2-ba078d5d86e210c5492071b926c989c7_1440w.webp)
## onMounted()
注册一个回调函数，在组件挂载完成后执行。
组件在以下情况下被视为已挂载：

1.其所有同步子组件都已经被挂载 (不包含异步组件或 `<Suspense>` 树内的组件)。

2.其自身的 DOM 树已经创建完成并插入了父容器中。注意仅当根容器在文档中时，才可以保证组件 DOM 树也在文档中。
```javascript
    <script setup>
    import { ref, onMounted } from 'vue'    

    const el = ref()    

    onMounted(() => {
      el.value // <div>
    })
    </script>    

    <template>
      <div ref="el"></div>
    </template>
```
上述代码通过模板引用访问一个元素
***
## onUpdated()
注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。

父组件的更新钩子将在其子组件的更新钩子之后调用。

这个钩子会在组件的任意 DOM 更新后被调用，这些更新可能是由不同的状态变更导致的。如果你需要在某个特定的状态更改后访问更新后的 DOM，请使用 nextTick() 作为替代。

注意：不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环！
```javascript
    <script setup>
    import { ref, onUpdated } from 'vue'    

    const count = ref(0)    

    onUpdated(() => {
      // 文本内容应该与当前的 `count.value` 一致
      console.log(document.getElementById('count').textContent)
    })
    </script>    

    <template>
      <button id="count" @click="count++">{{ count }}</button>
    </template>    
```
上述代码：访问更新后的 DOM
***
## onUnmounted()
一个组件在以下情况下被视为已卸载：

其所有子组件都已经被卸载。

所有相关的响应式作用 (渲染作用以及 setup() 时创建的计算属性和侦听器) 都已经停止。

可以在这个钩子中手动清理一些副作用，例如计时器、DOM 事件监听器或者与服务器的连接。
```javascript
    <script setup>
    import { onMounted, onUnmounted } from 'vue'    

    let intervalId
    onMounted(() => {
      intervalId = setInterval(() => {
        // ...
      })
    })    

    onUnmounted(() => clearInterval(intervalId))
    </script>
```
***
## onBeforeMount()
注册一个钩子，在组件被挂载之前被调用。

当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。
***
## onBeforeUpdate()
注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。

这个钩子可以用来在 Vue 更新 DOM 之前访问 DOM 状态。在这个钩子中更改状态也是安全的。
***
## onBeforeUnmount()
注册一个钩子，在组件实例被卸载之前调用。

当这个钩子被调用时，组件实例依然还保有全部的功能。
***
## onErrorCaptured()
注册一个钩子，在捕获了后代组件传递的错误时调用。

错误可以从以下几个来源中捕获：

* 组件渲染
* 事件处理器
* 生命周期钩子
* setup() 函数
* 侦听器
* 自定义指令钩子
* 过渡钩子

这个钩子带有三个实参：错误对象、触发该错误的组件实例，以及一个说明错误来源类型的信息字符串。

错误传递规则
* 默认情况下，所有的错误都会被发送到应用级的 app.config.errorHandler (前提是这个函数已经定义)，这样这些错误都能在一个统一的地方报告给分析服务。

* 如果组件的继承链或组件链上存在多个 errorCaptured 钩子，对于同一个错误，这些钩子会被按从底至上的顺序一一调用。这个过程被称为“向上传递”，类似于原生 DOM 事件的冒泡机制。

* 如果 errorCaptured 钩子本身抛出了一个错误，那么这个错误和原来捕获到的错误都将被发送到 app.config.errorHandler。

* errorCaptured 钩子可以通过返回 false 来阻止错误继续向上传递。即表示“这个错误已经被处理了，应当被忽略”，它将阻止其他的 errorCaptured 钩子或 app.config.errorHandler 因这个错误而被调用。
