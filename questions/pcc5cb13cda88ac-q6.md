# 第15届 初赛 · 数学A类 · 六、

[全部题目](README.md) · [所属试卷](../papers/pcc5cb13cda88ac.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：六、

专题：[数列极限](../topics/sequence-limits.md)

## 题目

设 $`a=\sqrt[3]3,x_1=a,x_{n+1}=a^{x_n}`$。证明数列极限存在，但不是 $`3`$。

<details>
<summary>展开参考解答</summary>

因为 $`a>1`$，有 $`x_2>x_1`$；再由 $`t\mapsto a^t`$ 严格递增，归纳得 $`x_{n+1}>x_n`$。

另一方面，$`a<5/2`$，且


$$
(a^{5/2})^6=3^5=243<\frac{15625}{64}=(5/2)^6,
$$


故 $`a^{5/2}<5/2`$。若 $`x_n<5/2`$，则 $`x_{n+1}<a^{5/2}<5/2`$。归纳得到全体项均小于 $`5/2`$。所以数列单调有界，其极限 $`L\le5/2<3`$，满足要求。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐图核对原卷及参考答案 pcc5cb13cda88ac.pdf，2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6A%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pcc5cb13cda88ac-q5.md) · [返回试卷](../papers/pcc5cb13cda88ac.md)

题目 ID：`pcc5cb13cda88ac-q6`
