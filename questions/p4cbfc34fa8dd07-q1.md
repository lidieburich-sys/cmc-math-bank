# 第9届 决赛 · 数学类低年级组 · 一（1）

[全部题目](README.md) · [所属试卷](../papers/p4cbfc34fa8dd07.md) · [专题目录](../topics/README.md)

归档年份：2018 · 填空题 · 题号：一（1）

专题：[特征值与矩阵相似](../topics/linear-eigen.md)

## 题目

设 $`H_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}`$，并递推定义 $`H_{n+1}=\begin{pmatrix}H_n&I\\I&H_n\end{pmatrix}`$，其中 $`I`$ 与 $`H_n`$ 同阶。求 $`\operatorname{rank}H_4`$。

<details>
<summary>展开参考解答</summary>

若 $`H_n v=\lambda v`$，则 $`(v,v)^T`$、$`(v,-v)^T`$ 分别为 $`H_{n+1}`$ 的特征值 $`\lambda+1`$、$`\lambda-1`$ 的特征向量。由 $`H_1`$ 的特征值 $`\pm1`$ 归纳可知，$`H_n`$ 的特征值为 $`n-2k`$，重数为 $`\binom nk`$。

$`H_4`$ 阶数为 $`16`$，零特征值的重数为 $`\binom42=6`$。因为它是实对称矩阵，故 $`\boxed{\operatorname{rank}H_4=16-6=10}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p4cbfc34fa8dd07.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷下一题](p4cbfc34fa8dd07-q2.md) · [返回试卷](../papers/p4cbfc34fa8dd07.md)

题目 ID：`p4cbfc34fa8dd07-q1`
