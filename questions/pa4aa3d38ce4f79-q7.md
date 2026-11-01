# 第15届 初赛 · 非数学B类 · 第7题

[全部题目](README.md) · [所属试卷](../papers/pa4aa3d38ce4f79.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：第7题

专题：[一阶微分方程](../topics/ode-first.md)

## 题目

解方程



```math
(x^2+y^2+3)\frac{dy}{dx}=2x\left(2y-\frac{x^2}{y}\right).
```

<details>
<summary>展开参考解答</summary>

令 $`u=x^2`$、$`v=y^2`$，方程化为



$`\displaystyle \frac{dv}{du}=\frac{2(2v-u)}{u+v+3}.`$



再令 $`U=u+2`$、$`V=v+1`$，则



$`\displaystyle \frac{dV}{dU}=\frac{2(2V-U)}{U+V}.`$



作变量替换 $`W=V/U`$，得



$`\displaystyle U\frac{dW}{dU}=-\frac{(W-1)(W-2)}{W+1}.`$



分离变量并积分：



$`\displaystyle \int\left(-\frac{2}{W-1}+\frac{3}{W-2}\right)\,dW=-\int\frac{dU}{U}.`$



整理得 $`U(W-2)^3=C(W-1)^2`$。回代，得



$`\displaystyle \boxed{(y^2-2x^2-3)^3=C(y^2-x^2-1)^2.}`$



分离变量时还需保留 $`W=1`$ 对应的解 $`y^2=x^2+1`$；$`W=2`$ 的解已包含在上式 $`C=0`$ 中。解取在原方程有定义的区间内。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：transcribed and checked against bundled question/answer images on 2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pa4aa3d38ce4f79-q6.md) · [本卷下一题](pa4aa3d38ce4f79-q8.md) · [返回试卷](../papers/pa4aa3d38ce4f79.md)

题目 ID：`pa4aa3d38ce4f79-q7`
