# 第14届 补赛 · 数学B类 · 六、

[全部题目](README.md) · [所属试卷](../papers/p23a95e6cfabae5.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：六、

专题：[数项级数敛散性](../topics/numeric-series.md)

## 题目

设 $`a>1`$，在 $`[0,\infty)`$ 定义


```math
f(x)=\begin{cases}-1,&0\le x<a,\\
(-1)^{k+1},&a^k\le x<a^{k+1},\ k\ge1.\end{cases}
```


令 $`a_n=\int_0^nf(x)dx`$。求使 $`\sum_{n=1}^{\infty}a_n/n^\beta`$ 绝对收敛的 $`\beta`$ 集合，以及使其收敛的 $`\beta`$ 集合。

<details>
<summary>展开参考解答</summary>

两个集合均为 $`\boxed{(2,\infty)}`$。首先 $`|a_n|\le n`$，所以 $`\beta>2`$ 时绝对收敛。

反之，逐段积分可得：若 $`a^k\le n<a^{k+1}`$，则


$`\displaystyle a_n=-\frac{2a}{1+a}+(-1)^k\left(\frac{2a^{k+1}}{1+a}-n\right).`$


取偶数 $`k\to\infty`$，考察整下标区间


$`\displaystyle \frac{4a^{k+1}}{a+3}\le n<a^{k+1}.`$


它确实包含在原段中，且其中 $`a_n\le-cn<0`$，$`c=(a-1)/(2(a+1))>0`$。该区间整数个数至少为 $`c_1a^{k+1}`$，其中 $`c_1>0`$ 与 $`k`$ 无关（当 $`k`$ 足够大）。

若 $`\beta\le2`$，则这段的同号负项满足


$`\displaystyle -\sum\frac{a_n}{n^\beta}\ge c\sum\frac1n\ge cc_1>0.`$


区间起点趋于无穷，尾段和却不趋零，违反级数的 Cauchy 准则。因此普通收敛也不成立。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐图核对原卷及参考答案 p23a95e6cfabae5.pdf，2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%A1%A5%E8%B5%9B2B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](p23a95e6cfabae5-q5.md) · [返回试卷](../papers/p23a95e6cfabae5.md)

题目 ID：`p23a95e6cfabae5-q6`
