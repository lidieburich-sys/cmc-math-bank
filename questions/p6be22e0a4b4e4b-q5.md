# 第14届 初赛 · 数学B类 · 五、

[全部题目](README.md) · [所属试卷](../papers/p6be22e0a4b4e4b.md) · [专题目录](../topics/README.md)

归档年份：2022 · 解答题 · 题号：五、

专题：[数项级数敛散性](../topics/numeric-series.md) · [幂级数与函数展开](../topics/power-series.md)

## 题目

设 $`f(x)=1/(1-x-x^2)`$，$`a_n=f^{(n)}(0)/n!`$。证明 $`\sum_{n=0}^{\infty}a_{n+1}/(a_na_{n+2})`$ 收敛，并求其和。

<details>
<summary>展开参考解答</summary>

由 $`(1-x-x^2)\sum a_nx^n=1`$ 比较系数，得到 $`a_0=a_1=1`$，$`a_{n+2}=a_{n+1}+a_n`$。因此各项为正且 $`a_n\to\infty`$，并有


$$
\frac{a_{n+1}}{a_na_{n+2}}=\frac1{a_n}-\frac1{a_{n+2}}.
$$


故前 $`N+1`$ 项的和为 $`1/a_0+1/a_1-1/a_{N+1}-1/a_{N+2}`$，极限为 $`\boxed2`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐图核对原卷及参考答案 p6be22e0a4b4e4b.pdf，2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](p6be22e0a4b4e4b-q4.md) · [本卷下一题](p6be22e0a4b4e4b-q6.md) · [返回试卷](../papers/p6be22e0a4b4e4b.md)

题目 ID：`p6be22e0a4b4e4b-q5`
