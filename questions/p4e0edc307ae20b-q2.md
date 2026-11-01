# 第5届 决赛 · 数学类高年级组 · 二、

[全部题目](README.md) · [所属试卷](../papers/p4e0edc307ae20b.md) · [专题目录](../topics/README.md)

归档年份：2014 · 解答题 · 题号：二、

专题：[特征值与矩阵相似](../topics/linear-eigen.md) · [二次型与正定矩阵](../topics/linear-quadratic.md)

## 题目

设实二次型 $`f(x_1,x_2,x_3,x_4)=x^{\mathsf T}Ax`$，其中


```math
x=(x_1,x_2,x_3,x_4)^{\mathsf T},\qquad A=\begin{pmatrix}2&a_0&2&-2\\a&0&b&c\\d&e&0&f\\g&h&k&4\end{pmatrix}.
```


$`a_0,a,b,c,d,e,f,g,h,k`$ 均为实数，且 $`2`$ 是 $`A`$ 的一个几何重数为 $`3`$ 的特征值。

（1）$`A`$ 能否相似于对角矩阵？证明或举出反例。

（2）当 $`a_0=2`$ 时，求该二次型在正交变换下的标准型。

<details>
<summary>展开参考解答</summary>

（1）可以。$`\operatorname{tr}A=6`$，而特征值 $`2`$ 的代数重数至少为 $`3`$；它不能为 $`4`$，否则迹为 $`8`$。故代数重数恰为 $`3`$，另一特征值为 $`0`$。两特征空间维数之和为 $`3+1=4`$，所以 $`A`$ 可对角化。

（2）由 $`\operatorname{rank}(A-2E)=1`$，当 $`a_0=2`$ 时，各行均为第一行的倍数，从而


```math
A=\begin{pmatrix}2&2&2&-2\\0&0&-2&2\\0&-2&0&2\\0&-2&-2&4\end{pmatrix},\qquad
B=\frac{A+A^{\mathsf T}}2=\begin{pmatrix}2&1&1&-1\\1&0&-2&0\\1&-2&0&0\\-1&0&0&4\end{pmatrix}.
```


二次型只取决于 $`B`$。计算得


```math
\det(\lambda E-B)=(\lambda-2)^2(\lambda^2-2\lambda-11),
```


其特征值为 $`2,2,1+2\sqrt3,1-2\sqrt3`$。由实对称矩阵的正交对角化，所求标准型为


```math
\boxed{2y_1^2+2y_2^2+(1+2\sqrt3)y_3^2+(1-2\sqrt3)y_4^2.}
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看2014数学类高年级决赛原题 p4e0edc307ae20b.pdf 2页及参考答案 p90d8d1f510c5e1.pdf 8页，并独立核算；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%20.pdf)

---

[本卷上一题](p4e0edc307ae20b-q1.md) · [本卷下一题](p4e0edc307ae20b-q3.md) · [返回试卷](../papers/p4e0edc307ae20b.md)

题目 ID：`p4e0edc307ae20b-q2`
