# 第13届 补赛 · 数学B类 · 三

[全部题目](README.md) · [所属试卷](../papers/p63f92e0f85dcad.md) · [专题目录](../topics/README.md)

归档年份：2021 · 证明题 · 题号：三

专题：[矩阵及其运算](../topics/linear-matrix.md)

## 题目

（15 分）设 $`R=\{0,1,4,9,16\}`$，$`U`$ 为 $`R`$ 上的三阶方阵全体：


```math
U=\{(a_{ij})_{3\times3}\mid a_{ij}\in R\}.
```


例如，$`\begin{pmatrix}1&1&0\\0&1&0\\0&0&0\end{pmatrix}`$ 和 $`\begin{pmatrix}1&4&0\\0&1&0\\0&0&0\end{pmatrix}`$ 是 $`U`$ 中的两个元素。现设 $`S`$ 为 $`U`$ 的一个子集。证明：若 $`S`$ 的元素个数多于 $`5^9-5^3-18`$，则必存在不同的 $`A,B\in S`$，使得 $`AB=BA`$。

<details>
<summary>展开参考解答</summary>

用 $`|E|`$ 表示有限集合 $`E`$ 的元素个数，显然 $`|U|=5^9`$。在 $`U`$ 中构造四个两两不交的集合：


$$
D=\{\operatorname{diag}(r_1,r_2,r_3):r_i\in R\},\qquad J=\{E,9E\},
$$


其中 $`E`$ 为所有元素均为 $`1`$ 的三阶矩阵；并令


$$
L=\left\{\begin{pmatrix}1&t&0\\0&1&0\\0&0&r\end{pmatrix}:r\in R,\ t\in\{1,4\}\right\},
$$




$$
H=\left\{\begin{pmatrix}r&0&0\\0&1&0\\0&t&1\end{pmatrix}:r\in R,\ t\in\{1,4\}\right\}.
$$


这四个集合各自内部任意两个矩阵均可交换，且


$$
|D|=5^3,\qquad |J|=2,\qquad |L|=|H|=10.
$$


记 $`T=D\cup J\cup L\cup H`$，则 $`|U\setminus T|=5^9-5^3-22`$。若 $`S`$ 中任意两个不同元素均不可交换，则 $`S`$ 与 $`D,J,L,H`$ 的交集各至多含一个元素，所以 $`|S\cap T|\le4`$。因此


$$
|S|\le |S\cap T|+|U\setminus T|\le4+5^9-5^3-22=5^9-5^3-18,
$$


与假设矛盾，故结论成立。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 p63f92e0f85dcad.pdf；题目第3页，答案第3,4页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](p63f92e0f85dcad-q2.md) · [本卷下一题](p63f92e0f85dcad-q4.md) · [返回试卷](../papers/p63f92e0f85dcad.md)

题目 ID：`p63f92e0f85dcad-q3`
