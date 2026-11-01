# 第8届 决赛 · 数学类高年级组 · 三、

[全部题目](README.md) · [所属试卷](../papers/pd2eb07ea7bd701.md) · [专题目录](../topics/README.md)

归档年份：2017 · 解答题 · 题号：三、

专题：[矩阵及其运算](../topics/linear-matrix.md) · [特征值与矩阵相似](../topics/linear-eigen.md)

## 题目

设 $`n`$ 阶矩阵 $`A,B`$ 满足 $`\operatorname{rank}(ABA)=\operatorname{rank}B`$。证明 $`AB`$ 与 $`BA`$ 相似。

<details>
<summary>展开参考解答</summary>

取可逆矩阵 $`P,Q`$，使


$`\displaystyle A=P\begin{pmatrix}E_r&0\\0&0\end{pmatrix}Q,\qquad B=Q^{-1}\begin{pmatrix}B_1&B_2\\B_3&B_4\end{pmatrix}P^{-1}.`$


秩条件说明 $`\operatorname{rank}B_1=\operatorname{rank}B`$，故存在 $`X,Y`$ 使 $`B_2=B_1X,B_3=YB_1`$。因此 $`AB`$ 相似于 $`\begin{pmatrix}B_1&B_1X\\0&0\end{pmatrix}`$，$`BA`$ 相似于 $`\begin{pmatrix}B_1&0\\YB_1&0\end{pmatrix}`$。而


$`\displaystyle \begin{pmatrix}E&-X\\0&E\end{pmatrix}\begin{pmatrix}B_1&0\\0&0\end{pmatrix}\begin{pmatrix}E&X\\0&E\end{pmatrix} =\begin{pmatrix}B_1&B_1X\\0&0\end{pmatrix},`$




$`\displaystyle \begin{pmatrix}E&0\\Y&E\end{pmatrix}\begin{pmatrix}B_1&0\\0&0\end{pmatrix}\begin{pmatrix}E&0\\-Y&E\end{pmatrix} =\begin{pmatrix}B_1&0\\YB_1&0\end{pmatrix}.`$


两者均相似于同一块对角矩阵，故 $`AB\sim BA`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看2017数学类高年级决赛原题 pd2eb07ea7bd701.pdf 2页及参考答案 pe0d96689c01f9d.pdf 8页，并独立核算；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882017%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882017%E5%B9%B4%EF%BC%89%20.pdf)

同题关联：[第8届 决赛 · 数学类低年级组 · 三、](p55d20851e6d193-q6.md)。保留各试卷原有入口。

---

[本卷上一题](pd2eb07ea7bd701-q5.md) · [本卷下一题](pd2eb07ea7bd701-q7.md) · [返回试卷](../papers/pd2eb07ea7bd701.md)

题目 ID：`pd2eb07ea7bd701-q6`
