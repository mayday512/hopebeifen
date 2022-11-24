<template><div><h1 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h1>
<h2 id="时间复杂度是什么" tabindex="-1"><a class="header-anchor" href="#时间复杂度是什么" aria-hidden="true">#</a> 时间复杂度是什么</h2>
<ol>
<li>
<p><strong>一个函数用大O表示，如O（1），O（n）,O(logN)</strong></p>
</li>
<li>
<p><strong>定性描述该算法的运行时间</strong></p>
</li>
</ol>
<p><a href="https://postimg.cc/fVQyGcwf" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/8zjvr499/2-SS-JMYES-7765-BQ3-4-P.png" alt="2-SS-JMYES-7765-BQ3-4-P.png" loading="lazy"><ExternalLinkIcon/></a></p>
<h2 id="o-1" tabindex="-1"><a class="header-anchor" href="#o-1" aria-hidden="true">#</a> O（1）</h2>
<p>无任何循环</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
i<span class="token operator">+=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="o-n" tabindex="-1"><a class="header-anchor" href="#o-n" aria-hidden="true">#</a> O（n）</h2>
<p>一重循环n次</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>两者相加为O（n）</strong></p>
<p><a href="https://postimg.cc/qtDHcrqZ" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/cH01S4SZ/6-VWE-9-6-XB6-KK-HY-V-TKO.png" alt="6-VWE-9-6-XB6-KK-HY-V-TKO.png" loading="lazy"><ExternalLinkIcon/></a></p>
<p><strong>O（n）相乘</strong></p>
<p><a href="https://postimg.cc/n9bmL64C" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/4ynQWGnb/QMNE7-B-BEB-AKFOSI1-O.png" alt="QMNE7-B-BEB-AKFOSI1-O.png" loading="lazy"><ExternalLinkIcon/></a></p>
<h2 id="o-logn" tabindex="-1"><a class="header-anchor" href="#o-logn" aria-hidden="true">#</a> O（logN）</h2>
<p>以2为底的log</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    i<span class="token operator">*=</span><span class="token number">2</span>
<span class="token punctuation">}</span>

## 例题分析
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`python
def <span class="token function">dogeggs_sum</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token operator">:</span>
    sum <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> dogegg <span class="token keyword">in</span> <span class="token function">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token operator">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token operator">:</span>
            sum <span class="token operator">+=</span> dogegg <span class="token operator">*</span> i
    <span class="token keyword">return</span> sum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第 2 行需要运行 1 次 ，第 4 行需要运行 n 次，第 5 行和第 6 行分别需要运行 n² 次。所以总的运行次数 f(n) =  1 + n + 2n²。</p>
<p>当 n 为 5 的时候，f(n) = 1 + 5 + 2 * 25，当 n 为 10000 的时候，f(n) = 1 + 10000 + 2 * 100000000，当 n 更大呢？</p>
<p>这个时候其实很明显的就可以看出来 n² 起到了决定性的作用，像常数 1，一阶 n 和 系数 2 对最终的结果（即趋势）影响不大，所以我们可以把它们直接忽略掉，所以执行的总步数就可以看成是“主导”结果的那个，也就是 f(n) = n²。</p>
<p>自然代码的运行时间 T(n) = O(f(n)) = O(n²)。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">dogeggs_sum</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    sum1 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> dogegg1 <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        sum1 <span class="token operator">+=</span> dogegg1

    sum2 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> dogegg2 <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            sum2 <span class="token operator">+=</span> dogegg2 <span class="token operator">*</span> i

    sum3 <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> dogegg3 <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
                sum3 <span class="token operator">+=</span> dogegg3 <span class="token operator">*</span> i <span class="token operator">*</span> j

    <span class="token keyword">return</span> sum1 <span class="token operator">+</span> sum2 <span class="token operator">+</span> sum3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码是求三部分的和，经过之前的学习应该很容易知道，第一部分的时间复杂度是 O(n)，第二部分的时间复杂度是 O(n²)，第三部分是 O(n³)。</p>
<p>正常来讲，这段代码的 T(n) = O(n) + O(n²) + O(n³)，按照我们取“主导”部分，显然前面两个小弟都应该直接 pass，最终 T(n) = O(n³)。</p>
<p><strong>对于时间复杂度分析来说，只要找起“主导”作用的部分代码即可，这个主导就是最高的那个复杂度，也就是执行次数最多的那部分 n 的量级。</strong></p>
<h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h2>
<p><a href="https://postimg.cc/WDB2QrcP" target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/1ttfVcW4/E8-PP7-LQB-9-HKX-H0-7.png" alt="E8-PP7-LQB-9-HKX-H0-7.png" loading="lazy"><ExternalLinkIcon/></a></p>
</div></template>


