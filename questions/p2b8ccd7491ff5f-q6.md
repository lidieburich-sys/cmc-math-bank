# 第17届 决赛 · 数学类低年级组 · 三

[全部题目](README.md) · [所属试卷](../papers/p2b8ccd7491ff5f.md) · [专题目录](../topics/README.md)

归档年份：2026 · 解答题 · 题号：三

专题：[特征值与矩阵相似](../topics/linear-eigen.md) · [矩阵及其运算](../topics/linear-matrix.md)

## 题目

设 $`A,B`$ 为 $`n`$ 阶实矩阵，$`E`$ 为 $`n`$ 阶单位矩阵，且


```math
A^{2025}=E,\qquad B^{2026}=E,\qquad AB=BA.
```


证明 $`A+B+E`$ 可逆。

<details>
<summary>展开参考解答</summary>

在复数域上考虑 $`W=\ker(A+B+E)`$。若 $`W\ne\{0\}`$，由 $`AB=BA`$，$`W`$ 在 $`A`$ 下不变，故 $`A|_W`$ 有特征向量 $`v\ne0`$，设 $`Av=\lambda v`$。由 $`v\in W`$，有 $`Bv=-(1+\lambda)v=\mu v`$。因此


$`\displaystyle \lambda^{2025}=1,\quad\mu^{2026}=1,\quad\lambda+\mu+1=0.`$


特别地，$`|\lambda|=|\mu|=1`$。由 $`|1+\lambda|=1`$，得 $`\mathop{\mathrm{Re}}\nolimits \lambda=-1/2`$，从而


$`\displaystyle \{\lambda,\mu\}=\{e^{2\pi i/3},e^{-2\pi i/3}\}.`$


于是 $`\mu`$ 是本原三次单位根，但 $`3\nmid2026`$，与 $`\mu^{2026}=1`$ 矛盾。故 $`W=\{0\}`$，$`A+B+E`$ 可逆。

</details>

## 来源与核对说明

题库核对标记：公开题文核对·重排题答。

原档案处理标记：公开题文重排残本（`public-transcription-partial`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：第17届决赛数学类低年级组公开题文重排残本（缺第二大题）。公开自解页面所列题文；解答独立重证。低年级题文线索：https://www.scribd.com/document/1030615002/全国大学生数学竞赛决赛试题。未下载或解除其付费预览。 当前未取得该两题的低年级原卷图；题设完整、数学解答已独立验证。 本地材料 p2b8ccd7491ff5f.pdf 为本批新建题文重排残本，共9页，包含说明页；不是原低卷PDF。 公开自解页面所列题文；解答独立重证

解答来源：独立重证；同题部分另与公开高年级参考解交叉核对。

题面依据公开题文重排，解答包含独立推导；不是原卷扫描件。

所属试卷为残本：仅收录可核实的4道独立填空题及第三至第六大题，共8题；第二大题尚缺。此PDF为公开题文重排与独立解答，不是原版低年级卷。

- [来源 1 · www.scribd.com](https://www.scribd.com/document/1030615002/%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98)
- [来源 2 · sjds.net](https://sjds.net/642598.html)
- [来源 3 · www.sjds.net](https://www.sjds.net/a/491562.html)

---

[本卷上一题](p2b8ccd7491ff5f-q4.md) · [本卷下一题](p2b8ccd7491ff5f-q7.md) · [返回试卷](../papers/p2b8ccd7491ff5f.md)

题目 ID：`p2b8ccd7491ff5f-q6`
