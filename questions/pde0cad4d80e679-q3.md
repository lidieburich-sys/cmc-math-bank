# 第14届 决赛 · 数学类低年级组 · 三、

[全部题目](README.md) · [所属试卷](../papers/pde0cad4d80e679.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：三、

专题：[特征值与矩阵相似](../topics/linear-eigen.md) · [矩阵及其运算](../topics/linear-matrix.md)

## 题目

实多项式 $`f(x)=\sum_{k=0}^ma_kx^k`$，$`m\ge1`$、$`a_m\ne0`$。设 $`a=\sum a_k\ne0`$、$`b=\sum ka_k\ne0`$。证明对每个整数 $`n\ge2`$ 和任意 $`\varepsilon\ne0`$，存在 $`n`$ 阶复矩阵 $`C`$，使


```math
f(C)=\begin{pmatrix}a&\varepsilon&&0\\&a&\ddots&\\&&\ddots&\varepsilon\\0&&&a\end{pmatrix}.
```

<details>
<summary>展开参考解答</summary>

令 $`N`$ 为上超对角元均为 1 的幂零 Jordan 块，$`J=I+N`$。由 $`f(1)=a,f'(1)=b`$，


$`\displaystyle W=f(J)=aI+bN+N^2R(N).`$


于是 $`W-aI`$ 幂零，且


$`\displaystyle (W-aI)^{n-1}=b^{n-1}N^{n-1}\ne0.`$


故 $`W`$ 的 Jordan 型为唯一一个大小为 $`n`$ 的特征值 $`a`$ 的块。目标矩阵 $`V=aI+\varepsilon N`$ 同样如此，因而存在可逆 $`P`$ 使 $`P^{-1}WP=V`$。取 $`C=P^{-1}JP`$，则 $`f(C)=P^{-1}f(J)P=V`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pde0cad4d80e679.pdf 第3—5页第三题，保留全部条件和子问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

同题关联：[第14届 决赛 · 数学类高年级组 · 三、](p05e9d51cab4665-q3.md)。保留各试卷原有入口。

---

[本卷上一题](pde0cad4d80e679-q2.md) · [本卷下一题](pde0cad4d80e679-q4.md) · [返回试卷](../papers/pde0cad4d80e679.md)

题目 ID：`pde0cad4d80e679-q3`
