# 第8届 决赛 · 数学类高年级组 · 一（3）

[全部题目](README.md) · [所属试卷](../papers/pd2eb07ea7bd701.md) · [专题目录](../topics/README.md)

归档年份：2017 · 填空题 · 题号：一（3）

专题：[曲面积分与高斯公式](../topics/surface-integral.md)

## 题目

计算第二类曲面积分


```math
I=\iint_S\frac{ax\,dy\,dz+(z+a)^2\,dx\,dy}{\sqrt{x^2+y^2+z^2}},\qquad a>0,
```


其中 $`S:z=-\sqrt{a^2-x^2-y^2}`$，取上侧。

<details>
<summary>展开参考解答</summary>

在 $`S`$ 上分母为 $`a`$。给下半球体补上 $`z=0`$ 的圆盘，并取封闭面的内侧；这在球面上正好是所需上侧，圆盘法向向下。对向量场 $`(ax,0,(z+a)^2)`$，散度为 $`3a+2z`$。下半球体体积为 $`2\pi a^3/3`$，且 $`\iiint z\,dV=-\pi a^4/4`$。故


$$
aI-\pi a^4=-\iiint(3a+2z)dV=-\frac32\pi a^4,
\qquad\boxed{I=-\frac\pi2a^3}.
$$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看2017数学类高年级决赛原题 pd2eb07ea7bd701.pdf 2页及参考答案 pe0d96689c01f9d.pdf 8页，并独立核算；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882017%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882017%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pd2eb07ea7bd701-q2.md) · [本卷下一题](pd2eb07ea7bd701-q4.md) · [返回试卷](../papers/pd2eb07ea7bd701.md)

题目 ID：`pd2eb07ea7bd701-q3`
