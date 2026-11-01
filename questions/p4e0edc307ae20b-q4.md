# 第5届 决赛 · 数学类高年级组 · 四、

[全部题目](README.md) · [所属试卷](../papers/p4e0edc307ae20b.md) · [专题目录](../topics/README.md)

归档年份：2014 · 解答题 · 题号：四、

专题：[抽象代数](../topics/algebra.md) · [中值定理与辅助函数](../topics/mean-value.md)

## 题目

对多项式 $`f`$，记 $`d(f)`$ 为其最大实根与最小实根之间的距离。设 $`n\ge2`$。求最大实数 $`C`$，使对所有根均为实数的任意 $`n`$ 次多项式 $`f`$ 都有


```math
d(f')\ge C\,d(f).
```

<details>
<summary>展开参考解答</summary>

答案为 $`\boxed{C=\sqrt{1-2/n}}`$。$`n=2`$ 时导数只有一个根，结论显然。以下设 $`n\ge3`$。平移并除去首项系数，设


$`\displaystyle f(x)=\prod_{j=1}^n(x-x_j),\qquad0=x_1\le\cdots\le x_n=a.`$


若 $`a=0`$，不等式成立。

先用以下收缩引理：保持两个内根之和不变，将它们移向彼此，不会增大导数的根距。设旧内根为 $`r<s`$，新内根为 $`r'<s'`$，其中 $`r\le r'\le s'\le s`$、$`r+s=r'+s'`$。记新多项式为 $`g`$，则


$`\displaystyle f=g-\delta h,\quad h=\frac{g}{(x-r')(x-s')},\quad\delta=r's'-rs\ge0.`$


令 $`\eta,\xi`$ 为 $`g'`$ 的最小、最大根。由 Rolle 定理 $`\eta\le r'\le s'\le\xi`$，且


$`\displaystyle f'(\xi)=\delta\frac{2\xi-r'-s'}{(\xi-r')^2(\xi-s')^2}g(\xi)\le0.`$


因首项系数为正，$`f'`$ 在 $`\xi`$ 右侧至少有一根；在 $`\eta`$ 左侧的同样符号论证给出另一根。因此 $`d(f')\ge d(g')`$。重根及相等情形由根对系数的连续性得到。

反复将内根成对平均，取极限可将它们全部移到平均值 $`b=(x_2+\cdots+x_{n-1})/(n-2)`$，故


$`\displaystyle d(f')\ge d\!\left([x(x-a)(x-b)^{n-2}]'\right).`$


而


$`\displaystyle [x(x-a)(x-b)^{n-2}]'=(x-b)^{n-3}[nx^2-((n-1)a+2b)x+ab].`$


该二次因子的两个根夹住 $`b`$，其根距为


$`\displaystyle \sqrt{\left(1-\frac2n\right)a^2+\frac{(a-2b)^2}{n^2}} \ge a\sqrt{1-\frac2n}.`$


当 $`f=x(x-a)(x-a/2)^{n-2}`$ 时取等号，故常数不能再增大。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看2014数学类高年级决赛原题 p4e0edc307ae20b.pdf 2页及参考答案 p90d8d1f510c5e1.pdf 8页，并独立核算；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%20.pdf)

---

[本卷上一题](p4e0edc307ae20b-q3.md) · [本卷下一题](p4e0edc307ae20b-q5.md) · [返回试卷](../papers/p4e0edc307ae20b.md)

题目 ID：`p4e0edc307ae20b-q4`
