# 第4届 决赛 · 数学类 · 二、

[全部题目](README.md) · [所属试卷](../papers/p0e380fcfeb11b6.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：二、

专题：[数列极限](../topics/sequence-limits.md)

## 题目

设 $`f:[a,b]\to[a,b]`$ 满足：对不同的 $`x,y\in[a,b]`$，有 $`|f(x)-f(y)|<L|x-y|`$，其中 $`0<L<1`$。任取 $`x_1\in[a,b]`$，定义


```math
x_{n+1}=\frac12(x_n+f(x_n)).
```


证明 $`x_n`$ 收敛于某个 $`x\in[a,b]`$，且 $`f(x)=x`$。

<details>
<summary>展开参考解答</summary>

令 $`T(u)=(u+f(u))/2`$，则 $`T([a,b])\subset[a,b]`$，且


$$
|T(u)-T(v)|\le\frac{1+L}2|u-v|=:q|u-v|,\qquad q<1.
$$


因此 $`|x_{n+1}-x_n|\le q^{n-1}|x_2-x_1|`$。对 $`m>n`$，


$$
|x_m-x_n|\le\frac{q^{n-1}}{1-q}|x_2-x_1|\longrightarrow0.
$$


所以 $`x_n`$ 为 Cauchy 列，收敛于闭区间内一点 $`x`$。由 Lipschitz 连续性，在递推式中取极限，得到 $`x=(x+f(x))/2`$，故 $`f(x)=x`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p0e380fcfeb11b6.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p0e380fcfeb11b6-q1.md) · [本卷下一题](p0e380fcfeb11b6-q3.md) · [返回试卷](../papers/p0e380fcfeb11b6.md)

题目 ID：`p0e380fcfeb11b6-q2`
