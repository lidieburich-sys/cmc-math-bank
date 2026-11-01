# 第17届 决赛 · 数学类低年级组 · 四

[全部题目](README.md) · [所属试卷](../papers/p2b8ccd7491ff5f.md) · [专题目录](../topics/README.md)

归档年份：2026 · 解答题 · 题号：四

专题：[数列极限](../topics/sequence-limits.md) · [函数方程与函数性质](../topics/functional.md)

## 题目

记 $`f_1(x)=|(x-1)(x-2)|`$，归纳定义 $`f_{n+1}(x)=f_1(f_n(x))`$。设


```math
E_n=\{x\in\mathbb R:f_n(x)=2\},\qquad a_n=\min E_n,\quad b_n=\max E_n\quad(n\ge1).
```


（1）求 $`a_n,b_n`$ 的递推式；

（2）证明 $`\lim_{n\to\infty}a_n`$、$`\lim_{n\to\infty}b_n`$ 存在并求其值。

<details>
<summary>展开参考解答</summary>

（1）记 $`f=f_1`$。$`f(x)=f(3-x)`$，故每个 $`f_n`$ 都关于 $`x=3/2`$ 对称，因而 $`a_n+b_n=3`$。又


```math
E_1=\{0,3\},\qquad E_{n+1}=\{x:f(x)\in E_n\}.
```


各 $`E_n`$ 均有限且非空。对每个 $`y\ge0`$，方程 $`f(x)=y`$ 的最大实根为


```math
r(y)=\frac{3+\sqrt{1+4y}}2\ge2,
```


且 $`r`$ 严格递增。于是


```math
\boxed{b_1=3,\quad b_{n+1}=\frac{3+\sqrt{1+4b_n}}2},
```




```math
\boxed{a_1=0,\quad a_{n+1}=\frac{3-\sqrt{13-4a_n}}2}.
```


（2）令 $`b=2+\sqrt2`$，则 $`r(b)=b`$。当 $`3\le t<b`$ 时，有 $`t<r(t)<b`$，所以 $`b_n`$ 严格递增且以上界 $`b`$ 为界，极限存在。令极限为 $`L\ge3`$，递推式给出 $`L^2-4L+2=0`$，故


```math
\boxed{\lim b_n=2+\sqrt2,\qquad\lim a_n=3-\lim b_n=1-\sqrt2}.
```

</details>

## 来源与核对说明

题库核对标记：公开题文核对·重排题答。

原档案处理标记：公开题文重排残本（`public-transcription-partial`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：第17届决赛数学类低年级组公开题文重排残本（缺第二大题）。公开自解页面所列题文；解答独立重证。低年级题文线索：https://www.scribd.com/document/1030615002/全国大学生数学竞赛决赛试题。未下载或解除其付费预览。 当前未取得该两题的低年级原卷图；题设完整、数学解答已独立验证。 本地材料 p2b8ccd7491ff5f.pdf 为本批新建题文重排残本，共9页，包含说明页；不是原低卷PDF。 公开自解页面所列题文；解答独立重证

解答来源：独立重证；同题部分另与公开高年级参考解交叉核对。

题面依据公开题文重排，解答包含独立推导；不是原卷扫描件。

所属试卷为残本：仅收录可核实的4道独立填空题及第三至第六大题，共8题；第二大题尚缺。此PDF为公开题文重排与独立解答，不是原版低年级卷。

- [来源 1 · www.scribd.com](https://www.scribd.com/document/1030615002/%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98)
- [来源 2 · sjds.net](https://sjds.net/642598.html)
- [来源 3 · www.sjds.net](https://www.sjds.net/a/491562.html)

---

[本卷上一题](p2b8ccd7491ff5f-q6.md) · [本卷下一题](p2b8ccd7491ff5f-q8.md) · [返回试卷](../papers/p2b8ccd7491ff5f.md)

题目 ID：`p2b8ccd7491ff5f-q7`
