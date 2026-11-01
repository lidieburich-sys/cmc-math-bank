# 第15届 初赛 · 数学A类 · 三、

[全部题目](README.md) · [所属试卷](../papers/pcc5cb13cda88ac.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：三、

专题：[特征值与矩阵相似](../topics/linear-eigen.md) · [向量空间与线性映射](../topics/linear-space.md)

## 题目

设 $`V`$ 为复数域上的 $`n`$ 维线性空间，$`A`$ 为线性变换。证明存在 $`\alpha\in V`$，使 $`\alpha,A\alpha,\ldots,A^{n-1}\alpha`$ 构成一组基，当且仅当 $`A`$ 的每个特征值的几何重数为 $`1`$。

<details>
<summary>展开参考解答</summary>

必要性：若上述向量构成基，$`A`$ 在该基下为伴随矩阵。对任何 $`\lambda`$，$`\lambda I-A`$ 有一个 $`n-1`$ 阶非零子式（来自移位的次对角线），所以秩至少 $`n-1`$。当 $`\lambda`$ 为特征值时，核维数恰为 $`1`$。

充分性：按不同特征值作广义特征空间分解 $`V=\bigoplus V_i`$。每个特征值 $`\lambda_i`$ 只有一个 Jordan 块，设大小为 $`d_i`$。取其链末端向量 $`\alpha_i`$，使 $`(A-\lambda_iI)^{d_i-1}\alpha_i\ne0`$，再令 $`\alpha=\sum\alpha_i`$。

若 $`p(A)\alpha=0`$，由直和分解可知 $`p(A)\alpha_i=0`$，故 $`(x-\lambda_i)^{d_i}\mid p(x)`$。这些因子互素，所以其乘积（次数为 $`n`$）整除 $`p`$。因此不存在次数小于 $`n`$ 的非零多项式消去 $`\alpha`$，即 $`\alpha,A\alpha,\ldots,A^{n-1}\alpha`$ 线性无关，构成基。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐图核对原卷及参考答案 pcc5cb13cda88ac.pdf，2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6A%E7%B1%BB%EF%BC%89.pdf)

同题关联：[第15届 初赛 · 数学B类 · 三、](p6a54ee93e1384f-q3.md)。保留各试卷原有入口。

---

[本卷上一题](pcc5cb13cda88ac-q2.md) · [本卷下一题](pcc5cb13cda88ac-q4.md) · [返回试卷](../papers/pcc5cb13cda88ac.md)

题目 ID：`pcc5cb13cda88ac-q3`
