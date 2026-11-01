# 第9届 决赛 · 数学类低年级组 · 三、

[全部题目](README.md) · [所属试卷](../papers/p4cbfc34fa8dd07.md) · [专题目录](../topics/README.md)

归档年份：2018 · 解答题 · 题号：三、

专题：[特征值与矩阵相似](../topics/linear-eigen.md) · [矩阵及其运算](../topics/linear-matrix.md)

## 题目

设 $`A,B,C`$ 为 $`n`$ 阶复矩阵，满足 $`AB-BA=C`$、$`AC=CA`$、$`BC=CB`$。

（1）证明 $`C`$ 为幂零矩阵。

（2）证明三者可同时相似于上三角矩阵。

（3）若 $`C\ne0`$，求 $`n`$ 的最小值。

<details>
<summary>展开参考解答</summary>

（1）因 $`C`$ 与 $`A,B`$ 交换，对每个 $`k\ge1`$，


$$
\operatorname{tr}(C^k)=\operatorname{tr}((AB-BA)C^{k-1})=0.
$$


由 $`k=1,\ldots,n`$ 的幂和与 Newton 恒等式，$`C`$ 的特征多项式为 $`\lambda^n`$。Cayley–Hamilton 定理给出 $`C^n=0`$。

（2）非零空间 $`W=\ker C`$ 在 $`A,B`$ 下不变，且在 $`W`$ 上 $`AB=BA`$。两个交换的复线性变换存在共同特征向量：先取 $`A|_W`$ 的一个特征子空间，再在其中取 $`B`$ 的特征向量。因此三者有共同不变的一维子空间。取商空间后，诱导变换仍满足全部交换关系，对维数归纳即可得到共同不变旗标，等价于同时上三角化。

（3）$`n=1`$ 不可能有非零交换子。$`n=2`$ 时若 $`C\ne0`$，由（1）可把 $`C`$ 化为 $`\begin{pmatrix}0&1\\0&0\end{pmatrix}`$。与它交换的矩阵均为 $`\begin{pmatrix}u&v\\0&u\end{pmatrix}`$，彼此交换，便有 $`AB-BA=0`$，矛盾。

$`n=3`$ 时取 $`A=E_{12}`$、$`B=E_{23}`$、$`C=E_{13}`$，全部关系都成立且 $`C\ne0`$。所以 $`\boxed{n_{\min}=3}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p4cbfc34fa8dd07.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p4cbfc34fa8dd07-q5.md) · [本卷下一题](p4cbfc34fa8dd07-q7.md) · [返回试卷](../papers/p4cbfc34fa8dd07.md)

题目 ID：`p4cbfc34fa8dd07-q6`
