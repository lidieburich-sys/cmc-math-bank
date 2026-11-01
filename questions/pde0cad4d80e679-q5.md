# 第14届 决赛 · 数学类低年级组 · 五、

[全部题目](README.md) · [所属试卷](../papers/pde0cad4d80e679.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：五、

专题：[特征值与矩阵相似](../topics/linear-eigen.md) · [矩阵及其运算](../topics/linear-matrix.md)

## 题目

设 $`A`$ 为复数域上的四阶幂等矩阵，即 $`A^2=A`$。证明存在复数 $`c_0,c_1,c_2,c_3`$，使 $`A`$ 相似于


```math
\begin{pmatrix}c_0&c_1&c_2&c_3\\c_3&c_0&c_1&c_2\\c_2&c_3&c_0&c_1\\c_1&c_2&c_3&c_0\end{pmatrix}.
```

<details>
<summary>展开参考解答</summary>

幂等矩阵的最小多项式整除 $`x(x-1)`$，所以 $`A`$ 可对角化，设其特征值为 $`\lambda_1,\ldots,\lambda_4\in\{0,1\}`$。令


$$
B=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\1&0&0&0\end{pmatrix}.
$$


它有四个不同的四次单位根 $`\zeta_1,\ldots,\zeta_4`$ 作为特征值。由插值定理，存在次数至多为 3 的多项式 $`h(x)=c_0+c_1x+c_2x^2+c_3x^3`$，满足 $`h(\zeta_j)=\lambda_j`$。于是 $`h(B)`$ 与 $`A`$ 相似，而直接计算 $`c_0I+c_1B+c_2B^2+c_3B^3`$ 恰为题设循环矩阵。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pde0cad4d80e679.pdf 第8—9页第五题，保留全部条件和子问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

---

[本卷上一题](pde0cad4d80e679-q4.md) · [本卷下一题](pde0cad4d80e679-q6.md) · [返回试卷](../papers/pde0cad4d80e679.md)

题目 ID：`pde0cad4d80e679-q5`
