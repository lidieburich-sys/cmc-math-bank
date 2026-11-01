# 第11届 初赛 · 非数学类 · 第2题

[全部题目](README.md) · [所属试卷](../papers/p2a3b61d03dcfb9.md) · [专题目录](../topics/README.md)

归档年份：2019 · 填空题 · 题号：第2题

专题：[不定积分与换元分部](../topics/indefinite.md) · [隐函数与参数方程求导](../topics/implicit.md)

## 题目

设隐函数 $`y=y(x)`$ 由方程 $`y^2(x-y)=x^2`$ 确定，求不定积分


```math
\int\frac{dx}{y^2}.
```

<details>
<summary>展开参考解答</summary>

令 $`t=y/x`$。在被积式有定义的局部区间内，原方程给出


$`\displaystyle x=\frac1{t^2(1-t)},\qquad y=\frac1{t(1-t)},\qquad dx=\frac{-2+3t}{t^3(1-t)^2}\,dt.`$


因此


$`\displaystyle \int\frac{dx}{y^2}=\int\frac{-2+3t}{t}\,dt =3t-2\ln|t|+C =\boxed{\frac{3y}{x}-2\ln\left|\frac yx\right|+C}.`$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：核对原卷 p2a3b61d03dcfb9.pdf，第 1 页；原题及参考答案均已逐页看图核对。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC11%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%B8%80%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](p2a3b61d03dcfb9-q1.md) · [本卷下一题](p2a3b61d03dcfb9-q3.md) · [返回试卷](../papers/p2a3b61d03dcfb9.md)

题目 ID：`p2a3b61d03dcfb9-q2`
