---
icon: edit
date: 2022-01-09
category:
  - vue3
tag:
  - vue3目录结构
---
# vue3目录结构
#### 命令行工具 vue-cli
![RUNOOB 图标](https://www.runoob.com/wp-content/uploads/2021/02/7C26D06C-4B1B-4E80-BBE1-E407C3E945B3.jpg)
***
#### Vite
![RUNOOB 图标](https://www.runoob.com/wp-content/uploads/2021/02/7C797674-06CF-4E87-B344-63990EF519B6.jpg)
***
### 目录解析
|  目录/文件   | 说明  |
|  ----   | ----  |
| build  | 项目构建(webpack)相关代码 |
| config  | 配置目录，包括端口号等 |
| node_modules  | 	npm 加载的项目依赖模块 |
| src  | 这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件assets: 放置一些图片，如logo等。components: 目录里面放了一个组件文件，可以不用。App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。main.js: 项目的核心文件。index.css: 样式文件。 |
| static  | 静态资源目录，如图片、字体等。 |
| public  | 公共资源目录 |
| index.js  | 首页入口文件，你可以添加一些 meta 信息或统计代码啥的。 |
| package.json  | 项目配置文件 |
|  README.md | 	项目的说明文档，markdown 格式 |
| dist  | 使用 npm run build 命令打包后会生成该目录。 |


