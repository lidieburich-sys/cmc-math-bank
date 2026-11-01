# 第4届 初赛 · 非数学类 · 一（4）

[全部题目](README.md) · [所属试卷](../papers/p5cfd13df7b2cc3.md) · [专题目录](../topics/README.md)

归档年份：2012 · 填空题 · 题号：一（4）

专题：[一阶微分方程](../topics/ode-first.md) · [曲线积分与格林公式](../topics/line-integral.md)

## 题目

设 $`u=u(x)`$ 连续可微，$`u(2)=1`$，且曲线积分


```math
\int_L(x+2y)u\,dx+(x+u^3)u\,dy
```


在右半平面上与路径无关。求 $`u(x)`$。

<details>
<summary>展开参考解答</summary>

由与路径无关的必要条件 $`P_y=Q_x`$，有


$$
2u=u+(x+4u^3)u^{\prime},\qquad (x+4u^3)u^{\prime}=u.
$$


在经过初值 $`(x,u)=(2,1)`$ 的分支上，$`u\ne0`$，于是


$$
\frac d{dx}\left(\frac xu-2u^2\right)=\frac{u-(x+4u^3)u^{\prime}}{u^2}=0.
$$


所以 $`x/u-2u^2=C`$。代入初值得 $`C=0`$，从而


$$
\boxed{u(x)=\sqrt[3]{\frac x2},\qquad x>0}.
$$


该函数在右半平面连续可微，并使 $`P_y=Q_x`$ 成立，故亦满足充分条件。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p5cfd13df7b2cc3.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p5cfd13df7b2cc3-q3.md) · [本卷下一题](p5cfd13df7b2cc3-q5.md) · [返回试卷](../papers/p5cfd13df7b2cc3.md)

题目 ID：`p5cfd13df7b2cc3-q4`
