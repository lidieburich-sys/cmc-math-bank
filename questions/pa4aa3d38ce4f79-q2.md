# 第15届 初赛 · 非数学B类 · 第2题

[全部题目](README.md) · [所属试卷](../papers/pa4aa3d38ce4f79.md) · [专题目录](../topics/README.md)

归档年份：2023 · 填空题 · 题号：第2题

专题：[偏导数与全微分](../topics/partial.md)

## 题目

设 $`z=f(x^2-y^2,xy)`$，且 $`f(u,v)`$ 有连续的二阶偏导数，求



```math
\frac{\partial^2z}{\partial x\,\partial y}.
```

<details>
<summary>展开参考解答</summary>

记 $`f_1,f_2`$ 分别为对第一、第二个变量的偏导数，各偏导均在 $`(x^2-y^2,xy)`$ 处取值。



$$
z_x=2xf_1+yf_2.
$$



再对 $`y`$ 求偏导，得



$$
\begin{aligned}
z_{xy}&=2x(-2yf_{11}+xf_{12})+f_2+y(-2yf_{21}+xf_{22})\\
&=\boxed{f_2-4xyf_{11}+2(x^2-y^2)f_{12}+xyf_{22}}.
\end{aligned}
$$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：transcribed and checked against bundled question/answer images on 2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pa4aa3d38ce4f79-q1.md) · [本卷下一题](pa4aa3d38ce4f79-q3.md) · [返回试卷](../papers/pa4aa3d38ce4f79.md)

题目 ID：`pa4aa3d38ce4f79-q2`
