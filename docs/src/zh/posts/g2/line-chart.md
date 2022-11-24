---
icon: edit
date: 2022-01-09
category:
  - g2
  - 图表
tag:
  - 折线图
---
# 折线图
## 遇到的bug：无法改变坐标轴文本和网格线的样式！！！
### 实现的效果(已上传至postimage)：
[![BDP0-B-8-SL-Z-10-5-H-HAO.png](https://i.postimg.cc/t4JwnMpV/BDP0-B-8-SL-Z-10-5-H-HAO.png)](https://postimg.cc/LJdNrvqH)
### 组件代码
 ```javascript
    <template>
    <div id='container'></div>
    </template>
    <script setup>
    import { Chart } from '@antv/g2';    

    import { ref, onMounted } from 'vue'
    const data = [
      { year: '2022-10-13', value: 0 },
      { year: '2022-10-14', value: 0 },
      { year: '2022-10-15', value: 0 },
      { year: '2022-10-16', value: 10 },
      { year: '2022-10-17', value: 0 },
    ];
    onMounted(() => {
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 300,
      width:600
    });
    chart.data(data);
    chart.scale({
      year: {
        range: [0, 1],
      },
      value: {
        min: 0,
        max:100,
        nice: true,
      },
    });    

    chart.axis('year', {
           grid: {
           lineStyle: {
            lineWidth: 1,
            lineDash: [ 2, 2 ]
          }
      },
       tickLine: {
        lineWidth: 2,
        length: 10,
        stroke: 'red',
        alignWithLabel:true
      }
        });
    chart.axis('value', {
    tickLine: {
        lineWidth: 2,
        length: 5,
        stroke: 'red',
        alignWithLabel:true
      }
        });
        chart.legend({
    	      custom: true,
    	      position: "top",
            offsetX:200,
    	      flipPage: false,
    	      items: [
    	        {
    	          name: "空值数量",
    	          marker: {
    	            symbol: 'circle',
    	            style:{
    	              fill: "#6395f9"
    	            },
    	          },
    	        },
    	      ]
    	    })            

    chart.tooltip({
      showCrosshairs: true, // 展示 Tooltip 辅助线
      shared: true,
    });
    //chart.coordinate();
    chart.line().position('year*value').label('value');
    chart.point().position('year*value');
    chart.render();
    })
    </script>    

    <style scoped>
    </style>    
```
### 主要API
#### grid: object | null
设置坐标轴网格线的样式，网格线与坐标轴线垂直。如果该属性值为 null 则表示不展示。
***
#### chart.legend(field, legendConfig)
为数据字段 field 对应的图例进行配置
***
#### tickLine: object | null
设置坐标轴的刻度线。
***
#### chart.scale
度量 Scale，是数据空间到图形空间的转换桥梁，负责原始数据到 [0, 1] 区间数值的相互转换工作。针对不同的数据类型对应不同类型的度量。
***
#### chart.tooltip(tooltipConfig)
提示信息(tooltip)，是指当鼠标悬停在图表上时，以信息框的形式展示相应的数据，如数据的标题、字段、数值等信息。