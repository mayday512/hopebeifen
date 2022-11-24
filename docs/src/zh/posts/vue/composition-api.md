---
icon: edit
date: 2022-01-09
category:
  - vue3
tag:
  - 组合式api
---
# 组合式API
## 什么是组合式 API？
组合式 API (Composition API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件。它是一个概括性的术语，涵盖了以下方面的 API：
* 响应式API:例如 ref() 和 reactive()，使我们可以直接创建响应式状态、计算属性和侦听器。
* 生命周期钩子：例如 onMounted() 和 onUnmounted()，使我们可以在组件各个生命周期阶段添加逻辑。
* 依赖注入：例如 provide() 和 inject()，使我们可以在使用响应式 API 时，利用 Vue 的依赖注入系统
```javascript
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 更改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`计数器初始值为 ${count.value}。`)
})
</script>

<template>
  <button @click="increment">点击了：{{ count }} 次</button>
</template>
```
## 为什么要有组合式 API？
如果组件逻辑复杂，代码量多，我们添加新代码不光要不停的上下滑动，而且在后期代码维护中，阅读起来也变得十分的困难，因为实现一种功能的代码并没有集中在一起。另外就是作为一个新接手的开发人员，在茫茫的 method、data、computed 等选项中一目了然的发现这个变量是属于哪个功能是比较困难的 。

而在Composition-api中，我们可以把实现一种功能的代码写在一起，甚至还可以把它们单独抽取在一个js文件或者一个函数中。在js文件中也可以引用Composition-api的生命周期函数。这将极大的提高代码的可维护性。这样就可以更好的提取和重用多个组件之间的逻辑。
1. setup：setup 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。
2. Ref vs Reactive

    如下是追踪鼠标位置的例子
```javascript
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
```
以下是一个组件如何利用该函数的展示:
```javascript
import { useMousePosition } from './mouse'

export default {
  setup() {
    const { x, y } = useMousePosition()
    // 其他逻辑...
    return { x, y }
  },
}
```
vs reactive
```javascript
const pos = reactive{
  x: 0,
  y: 0,
}

function updatePosition(e) {
  pos.x = e.pageX
  pos.y = e.pageY
}

return pos;
```
使用 reactive 的问题是，使用组合函数时必须始终保持对这个所返回对象的引用以保持响应性。这个对象解构或展开后，就会失去响应性。所以可以使用toRefs(pos)把Reactive类型转为Ref类型。

原本的获取获取dom的ref
```javascript
<template>
  <div ref="refName"></div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const refName = ref(null);
    return {
      refName,
    };
  },
};
</script>
```
3. computed

传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。
```javascript
const count = ref(1)
const plusOne = computed(() => count.value + 1)
```
传入一个拥有 get 和 set 函数的对象，创建一个可手动修改的计算状态。
```javascript
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  },
})
```
4. watch vs watchEffect

watch的作用和vue2.x中的this.$watch基本一致。语法有些差别
```javascript
// 侦听一个 getter
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)

// 直接侦听ref
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})

// 侦听多个源
watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
})
```
watchEffect，为了根据反应状态自动应用和重新应用副作用，我们可以使用 watchEffect 方法。它立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
```javascript
watchEffect(onInvalidate => {
  const token = performAsyncOperation(id.value)
  onInvalidate(() => {
    // id has changed or watcher is stopped.
    // invalidate previously pending async operation
    token.cancel()
  })
})
```