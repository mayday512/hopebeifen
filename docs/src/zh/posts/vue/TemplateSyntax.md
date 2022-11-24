---
icon: edit
date: 2022-01-09
category:
  - vue3
tag:
  - vue模板语法
---
# Vue3 模板语法
### 插值
##### 数据绑定最常见的形式就是使用双大括号的文本插值：
```javascript
<div id="app">
  <p>{{ message }}</p>
</div>
```
如果不想改变标签的内容，可以通过使用 v-once 指令执行一次性地插值，当数据改变时，插值处的内容不会更新。    
```javascript
<span v-once>这个将不会改变: {{ message }}</span>
```
***
### HTML
```javascript
<div id="example1" class="demo">
    <p>使用双大括号的文本插值: {{ rawHtml }}</p>
    <p>使用 v-html 指令: <span v-html="rawHtml"></span></p>
</div>
 
<script>
const RenderHtmlApp = {
  data() {
    return {
      rawHtml: '<span style="color: red">这里会显示红色！</span>'
    }
  }
}
 
Vue.createApp(RenderHtmlApp).mount('#example1')
</script>
```
最终上述代码span变成红色，并打印出文字    
***
### 属性v-bind
对于布尔属性，常规值为 true 或 false，如果属性值为 null 或 undefined，则该属性不会显示出来。    
```javascript
<div id="app">
  <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
  <br><br>
  <div v-bind:class="{'class1': use}">
    v-bind:class 指令
  </div>
</div>
<script>
const app = {
  data() {
    return {
      use: false
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```
上述代码v-model绑定布尔值，class属性是否调用取决于布尔值    
***
#### v-else
```javascript
<div id="app">
    <div v-if="Math.random() > 0.5">
      随机数大于 0.5
    </div>
    <div v-else>
      随机数小于等于 0.5
    </div>
</div>
    
<script>
Vue.createApp(app).mount('#app')
</script>
```
随机生成一个数字，判断是否大于 0.5，然后输出对应信息
***
#### v-show
```javascript
<h1 v-show="ok">Hello!</h1>
```
据条件展示元素
***

### 表达式
Vue.js 都提供了完全的 JavaScript 表达式支持。    
```javascript
<div id="app">
    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">菜鸟教程</div>
</div>
    
<script>
const app = {
  data() {
    return {
      ok: true,
      message: 'RUNOOB!!',
      id: 1
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```
PS:语句和流程制均不会生效    
***
### 指令
指令是带有 v- 前缀的特殊属性，用于在表达式的值改变时，将某些行为应用到 DOM 上    
#### v-if
```javascript
<div id="app">
    <p v-if="seen">现在你看到我了</p>
</div>
    
<script>
const app = {
  data() {
    return {
      seen: true  /* 改为false，信息就无法显示 */
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```
根据布尔值取决于是否插入标签元素    
***
#### v-else
```javascript
<div id="app">
    <div v-if="Math.random() > 0.5">
      随机数大于 0.5
    </div>
    <div v-else>
      随机数小于等于 0.5
    </div>
</div>
    
<script>
Vue.createApp(app).mount('#app')
</script>
```
随机生成一个数字，判断是否大于 0.5，然后输出对应信息
***
#### v-show
```javascript
<h1 v-show="ok">Hello!</h1>
```
__v-show:通过css样式中的dispaly：none；控制元素显示、隐藏。此元素进入页面后，此元素会频繁的改变显示状态，此时用v-show更加合适，如页面中有一个toggle按钮,点击按钮来控制某块区域的显示隐藏__
__v-if:通过控制vue的虚拟dom树上的节点，来联动控制真实dom上的节点，从而控制元素的显示、隐藏。此元素进入页面后，此元素只会显示或隐藏不会被再次改变显示状态，此时用v-if更加合适，如请求后台接口通过后台数据控制某块内容是否显示或隐藏，且这个数据在当前页不会被修改__

#### v-for
```javascript
<div id="app">
  <ol>
    <li v-for="site in sites">
      {{ site.text }}
    </li>
  </ol>
</div>
<script>
const app = {
  data() {
    return {
      sites: [
        { text: 'Google' },
        { text: 'Runoob' },
        { text: 'Taobao' }
      ]
    }
  }
}

Vue.createApp(app).mount('#app')
</script>
```
绑定数组的数据来渲染一个项目列表    
***
#### v-on
```
<!-- 完整语法 -->
<a v-on:click="doSomething"> ... </a>

<!-- 缩写 -->
<a @click="doSomething"> ... </a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```
监听DOM事件    
***
#### v-model
```javascript
<div id="app">
    <p>{{ message }}</p>
    <input v-model="message">
</div>
 
<script>
const app = {
  data() {
    return {
      message: 'Runoob!'
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```
用来在 input、select、textarea、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值。    
***
