# 第14届 补赛 · 数学B类 · 三、

[全部题目](README.md) · [所属试卷](../papers/p23a95e6cfabae5.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：三、

专题：[特征值与矩阵相似](../topics/linear-eigen.md) · [抽象代数](../topics/algebra.md)

## 题目

设 $`n\ge2`$，数域 $`K`$ 上方阵 $`A_1,\ldots,A_n`$ 的最小多项式两两互素。给定任意 $`f_i(x)\in K[x]`$，证明存在 $`f(x)\in K[x]`$，使 $`f(A_i)=f_i(A_i)\ (1\le i\le n)`$。

<details>
<summary>展开参考解答</summary>

记最小多项式为 $`p_i`$，令 $`P=\prod p_i,P_i=P/p_i`$。因 $`P_i,p_i`$ 互素，存在 $`u_i,v_i\in K[x]`$，使 $`u_iP_i+v_ip_i=1`$。取


$$
f=\sum_{i=1}^nf_i u_iP_i.
$$


模任一 $`p_j`$ 时，除第 $`j`$ 项外全为零，且第 $`j`$ 项同余于 $`f_j`$。因此 $`p_j\mid f-f_j`$，代入 $`A_j`$ 并利用 $`p_j(A_j)=0`$，即得所证。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐图核对原卷及参考答案 p23a95e6cfabae5.pdf，2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%A1%A5%E8%B5%9B2B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

同题关联：[第14届 补赛 · 数学A类 · 三、](p152a4093e05971-q3.md)。保留各试卷原有入口。

---

[本卷上一题](p23a95e6cfabae5-q2.md) · [本卷下一题](p23a95e6cfabae5-q4.md) · [返回试卷](../papers/p23a95e6cfabae5.md)

题目 ID：`p23a95e6cfabae5-q3`
