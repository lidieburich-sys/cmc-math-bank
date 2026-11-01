# 第4届 初赛 · 数学类 · 二、

[全部题目](README.md) · [所属试卷](../papers/pc80cb476df1ae7.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：二、

专题：[定积分的应用](../topics/integral-app.md) · [单调性、极值与最值](../topics/onevar-extrema.md)

## 题目

设 $`\Gamma`$ 为抛物线，点 $`P`$ 位于与焦点同侧。过 $`P`$ 的直线 $`L`$ 与 $`\Gamma`$ 围成的有限区域面积为 $`A(L)`$。证明 $`A(L)`$ 取最小值当且仅当 $`P`$ 是 $`L`$ 被抛物线截得线段的中点。

<details>
<summary>展开参考解答</summary>

经平移、旋转和统一比例缩放，可设抛物线为 $`y=x^2`$、$`P=(x_0,y_0)`$，其中 $`y_0>x_0^2`$。能围成有限区域的直线可写为 $`y=k(x-x_0)+y_0`$，与抛物线交点横坐标 $`x_1<x_2`$ 满足


$$
x_1+x_2=k,\qquad x_1x_2=kx_0-y_0.
$$


因此


$$
\begin{aligned}
A(L)&=\int_{x_1}^{x_2}[k(x-x_0)+y_0-x^2]dx=\frac{(x_2-x_1)^3}{6}\\
&=\frac16[(k-2x_0)^2+4(y_0-x_0^2)]^{3/2}.
\end{aligned}
$$


此式当且仅当 $`k=2x_0`$ 取最小值，等价于 $`x_1+x_2=2x_0`$。由于 $`P`$ 也在弦线上，这正是 $`P`$ 为两交点中点的条件。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc80cb476df1ae7.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc80cb476df1ae7-q1.md) · [本卷下一题](pc80cb476df1ae7-q3.md) · [返回试卷](../papers/pc80cb476df1ae7.md)

题目 ID：`pc80cb476df1ae7-q2`
