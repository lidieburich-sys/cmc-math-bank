# 第15届 初赛 · 非数学B类 · 第6题

[全部题目](README.md) · [所属试卷](../papers/pa4aa3d38ce4f79.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：第6题

专题：[定积分的应用](../topics/integral-app.md) · [单调性、极值与最值](../topics/onevar-extrema.md)

## 题目

设曲线 $`y=3ax^2+2bx+\ln c`$ 经过 $`(0,0)`$ 点，且当 $`0\le x\le1`$ 时 $`y\ge0`$。设该曲线与直线 $`x=1`$、$`x`$ 轴围成的平面图形 $`D`$ 的面积为 $`1`$。试求常数 $`a,b,c`$ 的值，使 $`D`$ 绕 $`x`$ 轴一周所得旋转体的体积最小。

<details>
<summary>展开参考解答</summary>

曲线经过原点，故 $`\ln c=0`$，即 $`c=1`$。由面积条件得



$$
\int_0^1(3ax^2+2bx)\,dx=a+b=1.
$$



旋转体的体积为



$$
\begin{aligned}
V&=\pi\int_0^1(3ax^2+2bx)^2\,dx\\
&=\pi\left(\frac95a^2+3ab+\frac43b^2\right)\\
&=\pi\left(\frac{2}{15}a^2+\frac13a+\frac43\right)\\
&=\pi\left[\frac{2}{15}\left(a+\frac54\right)^2+\frac98\right].
\end{aligned}
$$



故取



$$
\boxed{a=-\frac54,\qquad b=\frac94,\qquad c=1}
$$



时体积最小，为 $`\frac{9\pi}{8}`$。此时 $`y=\frac34x(6-5x)\ge0`$（$`0\le x\le1`$），满足条件。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：transcribed and checked against bundled question/answer images on 2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pa4aa3d38ce4f79-q5.md) · [本卷下一题](pa4aa3d38ce4f79-q7.md) · [返回试卷](../papers/pa4aa3d38ce4f79.md)

题目 ID：`pa4aa3d38ce4f79-q6`
