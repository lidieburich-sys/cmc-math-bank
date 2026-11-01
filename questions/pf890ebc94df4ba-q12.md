# 第16届 决赛 · 数学类高年级组 · 八

[全部题目](README.md) · [所属试卷](../papers/pf890ebc94df4ba.md) · [专题目录](../topics/README.md)

归档年份：2025 · 证明题 · 题号：八

专题：[微分几何](../topics/differential-geometry.md)

## 题目

设 $`C`$ 是曲面 $`S`$ 上曲率不为零的渐近曲线，其挠率为 $`\tau`$。若 $`S`$ 的高斯曲率为 $`K`$，证明沿 $`C`$ 有 $`|\tau|=\sqrt{-K}`$。

<details>
<summary>展开参考解答</summary>

用弧长 $`s`$ 参数化 $`C`$，其 Frenet 标架记为 $`(T,N,B)`$，曲面单位法向为 $`n`$。因 $`C`$ 是渐近曲线，法曲率为零，故 $`\kappa N\cdot n=0`$。由 $`\kappa\ne0`$ 得 $`N`$ 也在切平面内，于是 $`B=\varepsilon n`$，其中在一个连通参数区间内 $`\varepsilon=\pm1`$ 为常数。

由 Frenet 公式 $`B'=-\tau N`$，得 $`n'=-\varepsilon\tau N`$。形算子 $`\mathcal S=-dn`$ 因而满足 $`\mathcal S(T)=\varepsilon\tau N`$。在切平面的正交基 $`(T,N)`$ 下，形算子的对称矩阵为


$`\displaystyle \begin{pmatrix}0&\varepsilon\tau\\\varepsilon\tau&b\end{pmatrix}.`$


故 $`K=\det\mathcal S=-\tau^2`$，即 $`\boxed{|\tau|=\sqrt{-K}}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（数学类高年级组）原卷第12页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（数学类高年级组）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%AB%98%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pf890ebc94df4ba-q11.md) · [本卷下一题](pf890ebc94df4ba-q13.md) · [返回试卷](../papers/pf890ebc94df4ba.md)

题目 ID：`pf890ebc94df4ba-q12`
