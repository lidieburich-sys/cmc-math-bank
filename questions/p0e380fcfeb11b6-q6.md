# 第4届 决赛 · 数学类 · 六、

[全部题目](README.md) · [所属试卷](../papers/p0e380fcfeb11b6.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：六、

专题：[定积分及其性质](../topics/definite.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

设 $`n`$ 为给定自然数，$`\mathcal A_n`$ 是所有 $`n`$ 次首一实系数多项式组成的集合。证明


```math
\inf_{b\in\mathbb R,\ a>0,\ P\in\mathcal A_n}\frac{\int_b^{b+a}|P(x)|\,dx}{a^{n+1}}>0.
```

<details>
<summary>展开参考解答</summary>

归纳证明存在只依赖 $`n`$ 的 $`c_n>0`$，使积分始终至少为 $`c_na^{n+1}`$。当 $`n=0`$ 时 $`P=1`$，可取 $`c_0=1`$。

设 $`n\ge1`$，对任意首一 $`n`$ 次多项式定义


$$
Q(x)=\frac2{na}\big(P(x+a/2)-P(x)\big).
$$


最高次项相减后，$`Q`$ 为首一 $`n-1`$ 次多项式。由三角不等式及归纳假设，


$$
\int_b^{b+a}|P(x)|\,dx\ge\int_b^{b+a/2}|P(x+a/2)-P(x)|\,dx
$$




$$
=\frac{na}2\int_b^{b+a/2}|Q(x)|\,dx\ge\frac n{2^{n+1}}c_{n-1}a^{n+1}.
$$


故可取 $`c_n=n c_{n-1}/2^{n+1}=n!/2^{n(n+3)/2}>0`$。于是题中的下确界至少为 $`c_n`$，证毕。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p0e380fcfeb11b6.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p0e380fcfeb11b6-q5.md) · [返回试卷](../papers/p0e380fcfeb11b6.md)

题目 ID：`p0e380fcfeb11b6-q6`
