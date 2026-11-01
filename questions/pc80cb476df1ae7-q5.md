# 第4届 初赛 · 数学类 · 五、

[全部题目](README.md) · [所属试卷](../papers/pc80cb476df1ae7.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：五、

专题：[幂级数与函数展开](../topics/power-series.md) · [数论与有限求和](../topics/number-theory.md)

## 题目

已知


```math
\frac{(1+x)^n}{(1-x)^3}=\sum_{i=0}^\infty a_ix^i,\qquad |x|<1,
```


其中 $`n`$ 为正整数。求 $`\sum_{i=0}^{n-1}a_i`$。

<details>
<summary>展开参考解答</summary>

所求和为 $`(1+x)^n/(1-x)^4`$ 中 $`x^{n-1}`$ 的系数。用 $`1+x=2-(1-x)`$ 展开，只有前四项可能有贡献，得到


```math
\begin{aligned}
\sum_{i=0}^{n-1}a_i
={}&2^n\binom{n+2}{3}-n2^{n-1}\binom{n+1}{2}\\
&+\binom n2 2^{n-2}n-\binom n3 2^{n-3}\\
={}&\boxed{\frac{n(n+2)(n+7)}3\,2^{n-4}}.
\end{aligned}
```


其中二项式系数 $`\binom nk`$ 在 $`k>n`$ 时按零计，故结果也覆盖 $`n=1,2`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc80cb476df1ae7.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc80cb476df1ae7-q4.md) · [本卷下一题](pc80cb476df1ae7-q6.md) · [返回试卷](../papers/pc80cb476df1ae7.md)

题目 ID：`pc80cb476df1ae7-q5`
