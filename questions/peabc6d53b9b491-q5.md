# 第3届 决赛 · 数学类 · 五、

[全部题目](README.md) · [所属试卷](../papers/peabc6d53b9b491.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：五、

专题：[矩阵及其运算](../topics/linear-matrix.md)

## 题目

设 $`A,B`$ 分别为 $`3\times2`$、$`2\times3`$ 实矩阵，且


```math
AB=\begin{pmatrix}8&0&-4\\-3/2&9&-6\\-2&0&1\end{pmatrix}.
```


求 $`BA`$。

<details>
<summary>展开参考解答</summary>

记右侧矩阵为 $`M`$，直接相乘可验证 $`M^2=9M`$，且 $`\mathop{\mathrm{rank}}\nolimits M=2`$。因此 $`\mathop{\mathrm{rank}}\nolimits A=\mathop{\mathrm{rank}}\nolimits B=2`$：$`A:\mathbb R^2\to\mathbb R^3`$ 单射，$`B:\mathbb R^3\to\mathbb R^2`$ 满射。

由


$`\displaystyle A(BA-9I_2)B=M^2-9M=0,`$


先利用 $`A`$ 的单射性，再利用 $`B`$ 的满射性，得到 $`BA-9I_2=0`$。故


$`\displaystyle \boxed{BA=\begin{pmatrix}9&0\\0&9\end{pmatrix}}.`$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；peabc6d53b9b491.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](peabc6d53b9b491-q4.md) · [本卷下一题](peabc6d53b9b491-q6.md) · [返回试卷](../papers/peabc6d53b9b491.md)

题目 ID：`peabc6d53b9b491-q5`
