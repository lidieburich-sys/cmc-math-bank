# 第16届 决赛 · 数学类低年级组 · 四

[全部题目](README.md) · [所属试卷](../papers/pfc9ae85aba9332.md) · [专题目录](../topics/README.md)

归档年份：2025 · 证明题 · 题号：四

专题：[数列极限](../topics/sequence-limits.md) · [连续性与一致连续](../topics/continuity.md)

## 题目

设连续映射 $`f:[a,b]\to[a,b]`$，取 $`x_0\in[a,b]`$，并定义 $`x_{n+1}=f(x_n)`$（$`n\ge0`$）。证明：

（1）若 $`x_{n+1}-x_n\to0`$，则数列 $`\{x_n\}`$ 收敛；

（2）若 $`x_{n+2025}-x_n\to0`$，则集合 $`\{x_n:n\ge1\}`$ 的聚点不超过 $`2025`$ 个。

<details>
<summary>展开参考解答</summary>

（1）任一收敛子列 $`x_{n_k}\to s`$ 都满足 $`x_{n_k+1}\to s`$，由连续性得 $`f(s)=s`$。若数列不收敛，令 $`\alpha=\liminf x_n<\beta=\limsup x_n`$。因相邻差趋零，对每个 $`s\in(\alpha,\beta)`$，取充分晚的从 $`s`$ 一侧到另一侧的首次跨越点，就得到趋于 $`s`$ 的子列。因此 $`[\alpha,\beta]`$ 全由子列极限组成，进而全是 $`f`$ 的不动点。

但数列必有一项落入 $`(\alpha,\beta)`$，此后便恒等于该项，与 $`\alpha<\beta`$ 矛盾。故数列收敛。

（2）令 $`F=f^{\circ2025}`$。对每个 $`j=0,\ldots,2024`$，子列 $`y_n=x_{2025n+j}`$ 满足 $`y_{n+1}=F(y_n)`$、$`y_{n+1}-y_n\to0`$，由（1）收敛。全数列至多有这 $`2025`$ 个子列极限，所以其值集的聚点也不超过 $`2025`$ 个。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（数学类低年级组）原卷第5页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（数学类低年级组）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

同题关联：[第16届 决赛 · 数学类高年级组 · 四](pf890ebc94df4ba-q8.md)。保留各试卷原有入口。

---

[本卷上一题](pfc9ae85aba9332-q7.md) · [本卷下一题](pfc9ae85aba9332-q9.md) · [返回试卷](../papers/pfc9ae85aba9332.md)

题目 ID：`pfc9ae85aba9332-q8`
