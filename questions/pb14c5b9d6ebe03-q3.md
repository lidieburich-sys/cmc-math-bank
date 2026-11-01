# 第15届 决赛 · 数学类低年级组 · 三、

[全部题目](README.md) · [所属试卷](../papers/pb14c5b9d6ebe03.md) · [专题目录](../topics/README.md)

归档年份：2024 · 解答题 · 题号：三、

专题：[矩阵及其运算](../topics/linear-matrix.md) · [向量空间与线性映射](../topics/linear-space.md)

## 题目

设 $`A\in\mathbb R^{n\times n}`$，$`I`$ 为单位矩阵。证明


```math
A^4=I\quad\Longleftrightarrow\quad
\mathop{\mathrm{rank}}\nolimits (I-A)+\mathop{\mathrm{rank}}\nolimits (I+A+A^2+A^3)=n.
```

<details>
<summary>展开参考解答</summary>

记 $`B=I-A`$、$`C=I+A+A^2+A^3`$、$`U=(A^2+2A+3I)/4`$、$`V=I/4`$，则


$`\displaystyle UB+VC=I,\qquad BC=I-A^4,`$


所有矩阵彼此交换。因此 $`\mathop{\mathrm{Im}}\nolimits B+\mathop{\mathrm{Im}}\nolimits C=\mathbb R^n`$。又


$`\displaystyle \mathop{\mathrm{Im}}\nolimits B\cap\mathop{\mathrm{Im}}\nolimits C=\mathop{\mathrm{Im}}\nolimits (BC).`$


确实，右边包含于左边；反之，若 $`w=Bx=Cy`$，则


$`\displaystyle w=(UB+VC)w=BC(Uy+Vx).`$


由维数公式，


$`\displaystyle \mathop{\mathrm{rank}}\nolimits B+\mathop{\mathrm{rank}}\nolimits C=n+\mathop{\mathrm{rank}}\nolimits (BC) =n+\mathop{\mathrm{rank}}\nolimits (I-A^4).`$


故秩之和等于 $`n`$ 当且仅当 $`A^4=I`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pb14c5b9d6ebe03.pdf 第4页第三题，保留所有条件与小问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

---

[本卷上一题](pb14c5b9d6ebe03-q2.md) · [本卷下一题](pb14c5b9d6ebe03-q4.md) · [返回试卷](../papers/pb14c5b9d6ebe03.md)

题目 ID：`pb14c5b9d6ebe03-q3`
