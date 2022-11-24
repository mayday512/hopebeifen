<template><div><h1 id="折线图" tabindex="-1"><a class="header-anchor" href="#折线图" aria-hidden="true">#</a> 折线图</h1>
<h2 id="遇到的bug-无法改变坐标轴文本和网格线的样式" tabindex="-1"><a class="header-anchor" href="#遇到的bug-无法改变坐标轴文本和网格线的样式" aria-hidden="true">#</a> 遇到的bug：无法改变坐标轴文本和网格线的样式！！！</h2>
<h3 id="实现的效果-已上传至postimage" tabindex="-1"><a class="header-anchor" href="#实现的效果-已上传至postimage" aria-hidden="true">#</a> 实现的效果(已上传至postimage)：</h3>
<p><a href="https://postimg.cc/LJdNrvqH" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/t4JwnMpV/BDP0-B-8-SL-Z-10-5-H-HAO.png" alt="BDP0-B-8-SL-Z-10-5-H-HAO.png" loading="lazy"><ExternalLinkIcon/></a></p>
<h3 id="组件代码" tabindex="-1"><a class="header-anchor" href="#组件代码" aria-hidden="true">#</a> 组件代码</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>   <span class="token operator">&lt;</span>template<span class="token operator">></span>
   <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">'container'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
   <span class="token operator">&lt;</span>script setup<span class="token operator">></span>
   <span class="token keyword">import</span> <span class="token punctuation">{</span> Chart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@antv/g2'</span><span class="token punctuation">;</span>    

   <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
   <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
     <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'2022-10-13'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'2022-10-14'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'2022-10-15'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'2022-10-16'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'2022-10-17'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> chart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">'container'</span><span class="token punctuation">,</span>
     <span class="token literal-property property">autoFit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
     <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
     <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">600</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   chart<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
   chart<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">range</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
       <span class="token literal-property property">max</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
       <span class="token literal-property property">nice</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    

   chart<span class="token punctuation">.</span><span class="token function">axis</span><span class="token punctuation">(</span><span class="token string">'year'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
           <span class="token literal-property property">lineDash</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tickLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
       <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
       <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
       <span class="token literal-property property">alignWithLabel</span><span class="token operator">:</span><span class="token boolean">true</span>
     <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   chart<span class="token punctuation">.</span><span class="token function">axis</span><span class="token punctuation">(</span><span class="token string">'value'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">tickLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
       <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
       <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
       <span class="token literal-property property">alignWithLabel</span><span class="token operator">:</span><span class="token boolean">true</span>
     <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       chart<span class="token punctuation">.</span><span class="token function">legend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   	      <span class="token literal-property property">custom</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   	      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span>
           <span class="token literal-property property">offsetX</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span>
   	      <span class="token literal-property property">flipPage</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
   	      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   	        <span class="token punctuation">{</span>
   	          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"空值数量"</span><span class="token punctuation">,</span>
   	          <span class="token literal-property property">marker</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   	            <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">'circle'</span><span class="token punctuation">,</span>
   	            <span class="token literal-property property">style</span><span class="token operator">:</span><span class="token punctuation">{</span>
   	              <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#6395f9"</span>
   	            <span class="token punctuation">}</span><span class="token punctuation">,</span>
   	          <span class="token punctuation">}</span><span class="token punctuation">,</span>
   	        <span class="token punctuation">}</span><span class="token punctuation">,</span>
   	      <span class="token punctuation">]</span>
   	    <span class="token punctuation">}</span><span class="token punctuation">)</span>            

   chart<span class="token punctuation">.</span><span class="token function">tooltip</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">showCrosshairs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 展示 Tooltip 辅助线</span>
     <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//chart.coordinate();</span>
   chart<span class="token punctuation">.</span><span class="token function">line</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token string">'year*value'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   chart<span class="token punctuation">.</span><span class="token function">point</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token string">'year*value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   chart<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>    

   <span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主要api" tabindex="-1"><a class="header-anchor" href="#主要api" aria-hidden="true">#</a> 主要API</h3>
<h4 id="grid-object-null" tabindex="-1"><a class="header-anchor" href="#grid-object-null" aria-hidden="true">#</a> grid: object | null</h4>
<p>设置坐标轴网格线的样式，网格线与坐标轴线垂直。如果该属性值为 null 则表示不展示。</p>
<hr>
<h4 id="chart-legend-field-legendconfig" tabindex="-1"><a class="header-anchor" href="#chart-legend-field-legendconfig" aria-hidden="true">#</a> chart.legend(field, legendConfig)</h4>
<p>为数据字段 field 对应的图例进行配置</p>
<hr>
<h4 id="tickline-object-null" tabindex="-1"><a class="header-anchor" href="#tickline-object-null" aria-hidden="true">#</a> tickLine: object | null</h4>
<p>设置坐标轴的刻度线。</p>
<hr>
<h4 id="chart-scale" tabindex="-1"><a class="header-anchor" href="#chart-scale" aria-hidden="true">#</a> chart.scale</h4>
<p>度量 Scale，是数据空间到图形空间的转换桥梁，负责原始数据到 [0, 1] 区间数值的相互转换工作。针对不同的数据类型对应不同类型的度量。</p>
<hr>
<h4 id="chart-tooltip-tooltipconfig" tabindex="-1"><a class="header-anchor" href="#chart-tooltip-tooltipconfig" aria-hidden="true">#</a> chart.tooltip(tooltipConfig)</h4>
<p>提示信息(tooltip)，是指当鼠标悬停在图表上时，以信息框的形式展示相应的数据，如数据的标题、字段、数值等信息。</p>
</div></template>


