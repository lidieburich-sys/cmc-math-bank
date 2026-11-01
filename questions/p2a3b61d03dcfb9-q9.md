# 第11届 初赛 · 非数学类 · 第9题

[全部题目](README.md) · [所属试卷](../papers/p2a3b61d03dcfb9.md) · [专题目录](../topics/README.md)

归档年份：2019 · 解答题 · 题号：第9题

专题：[幂级数与函数展开](../topics/power-series.md) · [数项级数敛散性](../topics/numeric-series.md)

## 题目

设 $`f(x)`$ 是仅有正实根的多项式函数，且


```math
\frac{f'(x)}{f(x)}=-\sum_{n=0}^{\infty}c_nx^n.
```


证明：$`c_n>0`$（$`n\ge0`$），且


```math
\lim_{n\to\infty}\frac1{\sqrt[n]{c_n}}
```


存在，并等于 $`f(x)`$ 的最小根。

<details>
<summary>展开参考解答</summary>

设 $`f(x)=A\prod_{j=1}^k(x-a_j)^{r_j}`$，其中 $`0<a_1<\cdots<a_k`$，$`r_j\ge1`$。当 $`|x|<a_1`$ 时，


$`\displaystyle -\frac{f'(x)}{f(x)}=\sum_{j=1}^k\frac{r_j}{a_j-x} =\sum_{n=0}^{\infty}\left(\sum_{j=1}^k\frac{r_j}{a_j^{n+1}}\right)x^n.`$


由幂级数系数的唯一性，


$`\displaystyle c_n=\sum_{j=1}^k\frac{r_j}{a_j^{n+1}}>0.`$


记 $`N=\sum_jr_j`$，则


$`\displaystyle \frac{r_1}{a_1^{n+1}}\le c_n\le\frac{N}{a_1^{n+1}}.`$


两端取 $`n`$ 次方根并令 $`n\to\infty`$，得 $`\sqrt[n]{c_n}\to1/a_1`$，所以所求极限为 $`a_1`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：核对原卷 p2a3b61d03dcfb9.pdf，第 3–4 页；原题及参考答案均已逐页看图核对。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC11%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%B8%80%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](p2a3b61d03dcfb9-q8.md) · [本卷下一题](p2a3b61d03dcfb9-q10.md) · [返回试卷](../papers/p2a3b61d03dcfb9.md)

题目 ID：`p2a3b61d03dcfb9-q9`
