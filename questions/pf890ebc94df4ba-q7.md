# 第16届 决赛 · 数学类高年级组 · 三

[全部题目](README.md) · [所属试卷](../papers/pf890ebc94df4ba.md) · [专题目录](../topics/README.md)

归档年份：2025 · 证明题 · 题号：三

专题：[抽象代数](../topics/algebra.md)

## 题目

设实系数多项式


```math
p(x)=x^n+a_1x^{n-1}+\cdots+a_n,\qquad q(x)=x^m+b_1x^{m-1}+\cdots+b_m.
```


已知 $`q(x)\mid p(x)`$，且对某个 $`k`$ 有 $`|b_k|>2025^k\binom mk`$。证明：存在 $`j`$，使 $`|a_j|>2024`$。

<details>
<summary>展开参考解答</summary>

设 $`q`$ 的全部复根（计重数）为 $`z_1,\ldots,z_m`$。若每个 $`|z_i|\le2025`$，则由 Vieta 公式，$`|b_k|\le\binom mk2025^k`$，矛盾。因此 $`q`$ 有一根 $`z`$ 满足 $`R=|z|>2025`$，又 $`q\mid p`$，故 $`p(z)=0`$。若所有 $`|a_j|\le2024`$，则


$$
\begin{aligned}0=|p(z)|&\ge R^n-2024(R^{n-1}+\cdots+1)\\&=R^n\left(1-\frac{2024}{R-1}\right)+\frac{2024}{R-1}>0,\end{aligned}
$$


矛盾。故至少有一个 $`|a_j|>2024`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（数学类高年级组）原卷第4页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（数学类高年级组）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%AB%98%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pf890ebc94df4ba-q6.md) · [本卷下一题](pf890ebc94df4ba-q8.md) · [返回试卷](../papers/pf890ebc94df4ba.md)

题目 ID：`pf890ebc94df4ba-q7`
