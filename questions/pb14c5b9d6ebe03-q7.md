# 第15届 决赛 · 数学类低年级组 · 七、

[全部题目](README.md) · [所属试卷](../papers/pb14c5b9d6ebe03.md) · [专题目录](../topics/README.md)

归档年份：2024 · 解答题 · 题号：七、

专题：[高阶微分方程](../topics/ode-higher.md)

## 题目

设 $`f,g`$ 为整个实轴上的连续函数，且 $`uf(u)>0`$ 对所有 $`u\ne0`$ 成立。证明微分方程


```math
x''+f(x')+g(x)=0
```


不存在非常数的周期解。

<details>
<summary>展开参考解答</summary>

若 $`x(t)`$ 为周期 $`T>0`$ 的解，则 $`x'`$ 也为 $`T`$ 周期函数。定义


$$
E(t)=\frac12x'(t)^2+\int_0^{x(t)}g(s)\,ds.
$$


由方程，


$$
E'(t)=x'(t)\bigl(x''(t)+g(x(t))\bigr)=-x'(t)f(x'(t))\le0.
$$


又 $`E(0)=E(T)`$，所以 $`E`$ 在一个周期内为常数，$`x'f(x')\equiv0`$。由严格符号条件，$`x'\equiv0`$，故 $`x`$ 为常数，矛盾。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pb14c5b9d6ebe03.pdf 第10页第七题，保留所有条件与小问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

---

[本卷上一题](pb14c5b9d6ebe03-q6.md) · [返回试卷](../papers/pb14c5b9d6ebe03.md)

题目 ID：`pb14c5b9d6ebe03-q7`
