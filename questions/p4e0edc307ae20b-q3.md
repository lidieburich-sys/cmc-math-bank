# 第5届 决赛 · 数学类高年级组 · 三、

[全部题目](README.md) · [所属试卷](../papers/p4e0edc307ae20b.md) · [专题目录](../topics/README.md)

归档年份：2014 · 解答题 · 题号：三、

专题：[反常积分](../topics/improper.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

设 $`f(x)`$ 为 $`[0,+\infty)`$ 上非负可导函数，$`f(0)=0`$、$`f'(x)\le1/2`$。假设 $`\int_0^{\infty}f(x)dx`$ 收敛。证明：对于任意 $`\alpha>1`$，$`\int_0^{\infty}f^\alpha(x)dx`$ 也收敛，且


```math
\int_0^{\infty}f^\alpha(x)dx\le\left(\int_0^{\infty}f(x)dx\right)^\beta,\qquad \beta=\frac{\alpha+1}2.
```

<details>
<summary>展开参考解答</summary>

令 $`F(t)=\int_0^tf(x)dx`$、$`H(t)=F(t)-f(t)^2`$。因 $`f\ge0`$，


```math
H'(t)=f(t)[1-2f'(t)]\ge0,\qquad H(0)=0,
```


故 $`f(t)^2\le F(t)`$。于是 $`\beta>1`$，且


```math
\int_0^T f^\alpha(t)dt\le\int_0^Tf(t)F(t)^{(\alpha-1)/2}dt
=\frac{F(T)^\beta}{\beta}\le F(T)^\beta.
```


左侧随 $`T`$ 单增，右侧有有限上界。令 $`T\to\infty`$，即得收敛性及所需不等式。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看2014数学类高年级决赛原题 p4e0edc307ae20b.pdf 2页及参考答案 p90d8d1f510c5e1.pdf 8页，并独立核算；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%20.pdf)

同题关联：[第5届 决赛 · 数学类低年级组 · 五、](p4bb57e34f9d36b-q5.md)。保留各试卷原有入口。

---

[本卷上一题](p4e0edc307ae20b-q2.md) · [本卷下一题](p4e0edc307ae20b-q4.md) · [返回试卷](../papers/p4e0edc307ae20b.md)

题目 ID：`p4e0edc307ae20b-q3`
