# 第13届 补赛 · 数学B类 · 四

[全部题目](README.md) · [所属试卷](../papers/p63f92e0f85dcad.md) · [专题目录](../topics/README.md)

归档年份：2021 · 综合题 · 题号：四

专题：[特征值与矩阵相似](../topics/linear-eigen.md) · [向量空间与线性映射](../topics/linear-space.md) · [矩阵及其运算](../topics/linear-matrix.md)

## 题目

（20 分）设 $`a_1,\ldots,a_n`$ 为和为 $`1`$ 的 $`n`$ 个正数（$`n\ge2`$），$`A=(a_{ij})_{n\times n}`$ 为 $`n`$ 阶方阵，其每一行均是 $`a_1,\ldots,a_n`$ 的一个排列。

（1）令 $`V_1`$ 表示 $`A`$ 关于特征值 $`1`$ 的复特征向量空间，试计算 $`V_1`$ 的维数并给出 $`V_1`$ 的一组基。

（2）证明：$`1`$ 作为 $`A`$ 的特征值，其代数重数也为 $`1`$。

<details>
<summary>展开参考解答</summary>

记 $`e=(1,\ldots,1)^{\mathsf T}`$。由于 $`A`$ 的所有元素为正且每行和为 $`1`$，有 $`Ae=e`$。

（1）先设 $`z\in\mathbb R^n`$ 满足 $`Az=z`$。取 $`z_i=\max_j z_j`$，则


```math
z_i=\sum_{j=1}^n a_{ij}z_j,\qquad a_{ij}>0,\qquad\sum_{j=1}^n a_{ij}=1.
```


若有某个 $`z_j<z_i`$，右侧严格小于 $`z_i`$，矛盾。因此所有分量相等。对任意复向量 $`v=x+iy\in V_1`$，由 $`A`$ 为实矩阵，有 $`Ax=x`$、$`Ay=y`$，故 $`x,y`$ 均为 $`e`$ 的实数倍。因此


```math
\boxed{V_1=\operatorname{span}_{\mathbb C}\{e\},\quad\dim_{\mathbb C}V_1=1},
```


其一组基为 $`\{e\}`$。

（2）若 $`1`$ 的代数重数大于 $`1`$，由其几何重数为 $`1`$，相应 Jordan 块的阶数至少为 $`2`$。于是存在复向量 $`w`$ 满足


```math
(A-I)w=e.
```


利用 $`Ae=e`$ 归纳可得 $`A^m w=w+me`$。另一方面，$`A^m`$ 的元素非负且各行和仍为 $`1`$，所以对向量的最大模范数有


```math
\|A^m w\|_\infty\le\|w\|_\infty.
```


但 $`\|w+me\|_\infty\ge m-\|w\|_\infty\to\infty`$，矛盾。故 $`1`$ 的代数重数必为 $`\boxed{1}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 p63f92e0f85dcad.pdf；题目第5页，答案第5,6,7,8,9页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](p63f92e0f85dcad-q3.md) · [本卷下一题](p63f92e0f85dcad-q5.md) · [返回试卷](../papers/p63f92e0f85dcad.md)

题目 ID：`p63f92e0f85dcad-q4`
