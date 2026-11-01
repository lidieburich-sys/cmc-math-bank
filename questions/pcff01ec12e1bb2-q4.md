# 第14届 补赛 · 非数学类 · 一（4）

[全部题目](README.md) · [所属试卷](../papers/pcff01ec12e1bb2.md) · [专题目录](../topics/README.md)

归档年份：2023 · 填空题 · 题号：一（4）

专题：[偏导数与全微分](../topics/partial.md) · [隐函数与参数方程求导](../topics/implicit.md)

## 题目

设可微函数 $`z=z(x,y)`$ 满足


```math
x^2z_x+y^2z_y=2z^2.
```


令


```math
u=x,\qquad v=\frac1y-\frac1x,\qquad w=\frac1z-\frac1x.
```


求 $`\left.\dfrac{\partial w}{\partial u}\right|_{u=2,v=1}`$。

<details>
<summary>展开参考解答</summary>

由变换得 $`x=u`$、$`y=u/(uv+1)`$。保持 $`v`$ 不变时，


$`\displaystyle x_u=1,\qquad y_u=\frac1{(uv+1)^2}=\frac{y^2}{u^2}.`$


所以


$`\displaystyle w_u=-\frac1{z^2}\left(z_x+\frac{y^2}{u^2}z_y\right)+\frac1{u^2} =-\frac{x^2z_x+y^2z_y}{u^2z^2}+\frac1{u^2}=-\frac1{u^2}.`$


代入 $`u=2`$，得 $`\boxed{-1/4}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已核对本地原试卷 pcff01ec12e1bb2.pdf、对应题目与参考答案图片；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%A1%A5%E8%B5%9B2%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pcff01ec12e1bb2-q3.md) · [本卷下一题](pcff01ec12e1bb2-q5.md) · [返回试卷](../papers/pcff01ec12e1bb2.md)

题目 ID：`pcff01ec12e1bb2-q4`
