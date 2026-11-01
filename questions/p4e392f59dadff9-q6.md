# 第8届 初赛 · 数学类 · 六、

[全部题目](README.md) · [所属试卷](../papers/p4e392f59dadff9.md) · [专题目录](../topics/README.md)

归档年份：2016 · 解答题 · 题号：六、

专题：[定积分及其性质](../topics/definite.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

设 $`f,g`$ 是 $`[0,1]`$ 上的单调递增函数，$`0<f(x),g(x)<1`$，且 $`\int_0^1f=\int_0^1g`$。证明


```math
\int_0^1|f(x)-g(x)|dx\le\frac12.
```

<details>
<summary>展开参考解答</summary>

令 $`h=f-g`$，则 $`\int_0^1h=0`$。若 $`x\ge y`$，由单调性，


$`\displaystyle -[g(x)-g(y)]\le h(x)-h(y)\le f(x)-f(y),`$


故任意两点处 $`|h(x)-h(y)|\le1`$。记 $`m=\inf h`$、$`M=\sup h`$，则 $`m\le0\le M`$、$`M-m\le1`$。由 $`(h-m)(M-h)\ge0`$，积分得到


$`\displaystyle \int_0^1h^2\le(M+m)\int_0^1h-mM=-mM \le\frac{(M-m)^2}{4}\le\frac14.`$


再由 Cauchy 不等式，$`\int_0^1|h|\le(\int_0^1h^2)^{1/2}\le1/2`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 p4e392f59dadff9.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882016%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882016%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p4e392f59dadff9-q5.md) · [返回试卷](../papers/p4e392f59dadff9.md)

题目 ID：`p4e392f59dadff9-q6`
