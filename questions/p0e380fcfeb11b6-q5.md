# 第4届 决赛 · 数学类 · 五、

[全部题目](README.md) · [所属试卷](../papers/p0e380fcfeb11b6.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：五、

专题：[二次型与正定矩阵](../topics/linear-quadratic.md) · [特征值与矩阵相似](../topics/linear-eigen.md)

## 题目

设 $`A=(a_{ij})`$ 为三阶实对称矩阵，$`A^*`$ 是其伴随矩阵。定义


```math
f(x_1,x_2,x_3,x_4)=\det\begin{pmatrix}x_1^2&x_2&x_3&x_4\\-x_2&a_{11}&a_{12}&a_{13}\\-x_3&a_{12}&a_{22}&a_{23}\\-x_4&a_{13}&a_{23}&a_{33}\end{pmatrix}.
```


若 $`\det A=-12`$，特征值之和为 $`1`$，且 $`(1,0,-2)^T`$ 是 $`(A^*-4I)x=0`$ 的解，求一个正交变换 $`x=Qy`$，使 $`f`$ 化为标准形。

<details>
<summary>展开参考解答</summary>

令 $`u=(1,0,-2)^T`$。由 $`AA^*=-12I`$、$`A^*u=4u`$，得 $`Au=-3u`$。另外两个特征值之和为 $`4`$、积为 $`4`$，故均为 $`2`$。因此 $`A^*=-12A^{-1}`$ 在 $`u`$ 方向特征值为 $`4`$，在 $`u^\perp`$ 上为 $`-6`$。

按第一行展开，或用块行列式公式，得


```math
f=-12x_1^2+v^TA^*v,\qquad v=(x_2,x_3,x_4)^T.
```


选取 $`\mathbb R^3`$ 的正交基 $`(1,0,-2)^T/\sqrt5`$、$`(2,0,1)^T/\sqrt5`$、$`(0,1,0)^T`$，得到


```math
\boxed{Q=\begin{pmatrix}1&0&0&0\\0&1/\sqrt5&2/\sqrt5&0\\0&0&0&1\\0&-2/\sqrt5&1/\sqrt5&0\end{pmatrix}}.
```


其列向量标准正交，且 $`x=Qy`$ 将原式化为


```math
\boxed{f=-12y_1^2+4y_2^2-6y_3^2-6y_4^2}.
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p0e380fcfeb11b6.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p0e380fcfeb11b6-q4.md) · [本卷下一题](p0e380fcfeb11b6-q6.md) · [返回试卷](../papers/p0e380fcfeb11b6.md)

题目 ID：`p0e380fcfeb11b6-q5`
