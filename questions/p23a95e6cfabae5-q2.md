# 第14届 补赛 · 数学B类 · 二、

[全部题目](README.md) · [所属试卷](../papers/p23a95e6cfabae5.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：二、

专题：[数列极限](../topics/sequence-limits.md) · [实分析与测度](../topics/real-analysis.md)

## 题目

令 $`\Gamma=\{(x_n):x_n\in\{0,2\}\}`$，对 $`x=(x_n)\in\Gamma`$ 定义


```math
\Pi(x)=\sum_{n=1}^{\infty}\frac{x_n}{3^n},\qquad
f(x)=\limsup_{n\to\infty}\frac{x_1+\cdots+x_n}n.
```


证明：（1）$`\Pi`$ 单射；（2）$`\Pi(\Gamma)`$ 的每一点都是该集合的聚点；（3）$`f(\Gamma)=[0,2]`$。

<details>
<summary>展开参考解答</summary>

（1）若两个数列首次在第 $`k`$ 项不同，则


$`\displaystyle |\Pi(x)-\Pi(y)|\ge\frac2{3^k}-\sum_{n>k}\frac2{3^n}=\frac1{3^k}>0.`$



（2）固定 $`x`$，将其第 $`k`$ 项在 $`0,2`$ 间翻转，其余不变，得到 $`x^{(k)}`$。由单射性像点不同，而 $`|\Pi(x^{(k)})-\Pi(x)|=2/3^k\to0`$，故为聚点。

（3）显然值域包含于 $`[0,2]`$。任取 $`\alpha\in[0,2]`$，令


$`\displaystyle x_n=2\left(\left\lfloor\frac{n\alpha}2\right\rfloor-\left\lfloor\frac{(n-1)\alpha}2\right\rfloor\right)\in\{0,2\}.`$


则前 $`n`$ 项平均为 $`2\lfloor n\alpha/2\rfloor/n\to\alpha`$，故 $`f(x)=\alpha`$，值域正是 $`[0,2]`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐图核对原卷及参考答案 p23a95e6cfabae5.pdf，2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%A1%A5%E8%B5%9B2B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

同题关联：[第14届 补赛 · 数学A类 · 二、](p152a4093e05971-q2.md)。保留各试卷原有入口。

---

[本卷上一题](p23a95e6cfabae5-q1.md) · [本卷下一题](p23a95e6cfabae5-q3.md) · [返回试卷](../papers/p23a95e6cfabae5.md)

题目 ID：`p23a95e6cfabae5-q2`
