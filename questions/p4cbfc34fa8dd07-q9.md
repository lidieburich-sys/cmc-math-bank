# 第9届 决赛 · 数学类低年级组 · 六、

[全部题目](README.md) · [所属试卷](../papers/p4cbfc34fa8dd07.md) · [专题目录](../topics/README.md)

归档年份：2018 · 解答题 · 题号：六、

专题：[高阶微分方程](../topics/ode-higher.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

设 $`g:\mathbb R\to\mathbb R`$ 有界连续，$`1<g(t)<2`$。若 $`x(t)`$ 是方程 $`\ddot x=g(t)x`$ 在全实轴上的单调正解，证明存在 $`C_2>C_1>0`$，使


```math
C_1x(t)<|\dot x(t)|<C_2x(t)\qquad(t\in\mathbb R).
```

<details>
<summary>展开参考解答</summary>

先设 $`x`$ 单调递增。因 $`\ddot x=gx>0`$，$`\dot x`$ 严格递增，且处处为正。正性和单调性给出 $`x(-\infty)\ge0`$、$`\dot x(-\infty)\ge0`$。若前者大于零，则 $`\ddot x`$ 在负半轴有正下界，会使过去的导数为负；若后者大于零，则向过去积分会使 $`x`$ 为负。因此这两个极限都为零。

将 $`\ddot x=g(t)x`$ 乘以 $`\dot x>0`$，从 $`-\infty`$ 积到 $`t`$，利用 $`1<g<2`$，得


```math
\int_{-\infty}^tx\dot x\,ds<\int_{-\infty}^t\ddot x\dot x\,ds<2\int_{-\infty}^tx\dot x\,ds.
```


即 $`x(t)^2<\dot x(t)^2<2x(t)^2`$，所以 $`x(t)<\dot x(t)<\sqrt2x(t)`$。

若 $`x`$ 单调递减，对 $`X(s)=x(-s)`$ 应用同一证明，其系数为 $`g(-s)`$，得到 $`x(t)<-\dot x(t)<\sqrt2x(t)`$。因此可统一取 $`\boxed{C_1=1,\ C_2=\sqrt2}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p4cbfc34fa8dd07.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p4cbfc34fa8dd07-q8.md) · [返回试卷](../papers/p4cbfc34fa8dd07.md)

题目 ID：`p4cbfc34fa8dd07-q9`
