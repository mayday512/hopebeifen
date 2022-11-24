---
icon: edit
date: 2022-01-09
category:
  - g2
  - 图表
tag:
  - 饼图
---
# 饼图
## 遇到的困难：无法实现图例模板语法自定义以及tooltip获取其他区域信息
### 实现的效果
[![6-EZ-H9-Z-PY48-WSY1-SS-W6-D.png](https://i.postimg.cc/6qXT84Nf/6-EZ-H9-Z-PY48-WSY1-SS-W6-D.png)](https://postimg.cc/1nvyTtX8)
### 组件代码
```javascript
<template>
    <div id='container'></div>
</template>
<script setup>
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';
import { ref, onMounted } from 'vue'
onMounted(() => {
const data = [
  { name: ' Customer Interaction', type: 'Behavior', value: 204 },
  { name: ' Customer Transaction Data', type: 'Behavior', value: 302 },
  { name: 'Location Data', type: 'Behavior', value: 300 },
  { name: 'I', type: 'Identifier', value: 204 },
  { name: 'D', type: 'Identifier', value: 302 },
  { name: 'E', type: 'Identifier', value: 300 },
  { name: 'personal', type: 'Personality', value: 900 },
];

const ds = new DataSet();
const dv = ds.createView();
dv.source(data).transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent',
});
const colorMap = {
  Behavior: '#1b69d5',
  Personality: '#6096e1',
  Identifier: '#c6e0ff',
};
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
});
chart.data(data);
 chart.annotation().text({
      position: [ '50%', '62%' ],
      content:"customer\ndata",
      style: {
        fontSize: 12,
        fill: 'black',
        fontWeight: 'bold',
        textBaseline: 'bottom',
        textAlign: 'center'
      },
      offsetY: -12,
    });
 
const outterView1 = chart.createView();
outterView1.data(dv.rows);
outterView1.legend(false);
outterView1.coordinate('theta', {
  radius: 0.5,
  innerRadius: 0.5,
});
outterView1.tooltip(false);
outterView1
  .interval()
  .adjust('stack')
  .position('percent')
  .tooltip('name*type*value', (name,type, value) => {
    return {
      name:name,
      type: type,
      value: '<span style="color: #1890ff;">' + value + '</span>'
    };
  })
  .color('type', (val) => colorMap[val])
  .style({
    stroke: 'white',
    lineWidth: 3,
  })
  .label(false)
const ds2 = new DataSet();
const dv2 = ds2.createView();
dv2.source(data).transform({
  type: 'percent',
  field: 'value',
  dimension: 'name',
  as: 'percent',
});
const outterView = chart.createView();
outterView.data(dv2.rows);
outterView.coordinate('theta', {
  innerRadius: 0.5 / 0.8,
  radius: 0.8,
});
chart.tooltip({
position:'bottom',
showCrosshairs: false,
showMarkers:false,
showTitle: false,
 itemTpl: `
      <li class="g2-tooltip-list-item" v-for="(item,index) in data">
         <span class="g2-tooltip-name">{type}</span>
         <hr style="margin-top: 10px;">
         <span class="g2-tooltip-name" style="display: inline-block;margin-top: 10px;">{name}</span>
          <span class="g2-tooltip-value" style="display: inline-block;margin-top: 10px;font-size:5px">{value}</span>
          <br/>
          <span class="g2-tooltip-name" style="display: inline-block;margin-top: 10px;">{name}</span>
          <span class="g2-tooltip-value" style="display: inline-block;margin-top: 10px;font-size:5px">{value}</span>
          <br/>
          <span class="g2-tooltip-name" style="display: inline-block;margin-top: 10px;">{name}</span>
          <span class="g2-tooltip-value" style="display: inline-block;margin-top: 10px;font-size:5px">{value}</span>
        </li>
             `
});
 chart.legend({
           position:'top',
           offsetX:200,
           offsetY:150,
           layout:'vertical',
           useHtml: true,
           containerTpl: '<div class="g2-legend">' + '</div>',
           itemTpl: (name,type, value) => {
           return  '<span style="color: #1890ff;">' + value + '</span>'
           }
 });    
outterView
  .interval()
  .adjust('stack')
  .position('percent')
  .color('type*name', (type, name) => colorMap[type])
   .tooltip('name*type*value', (name,type, value) => {
    return {
      name: name,
      type:type,
      value: '<span style="color: #1890ff;">' + value + '</span>'
    };
  })
  .style({
    stroke: 'white',
    lineWidth: 3,
  })
  .label(false);
chart.interaction('element-active')
chart.interaction('element-selected');
chart.render();
})
</script>
```