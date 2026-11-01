# 第3届 决赛 · 数学类 · 七、

[全部题目](README.md) · [所属试卷](../papers/peabc6d53b9b491.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：七、

专题：[反常积分](../topics/improper.md) · [函数列/函数项级数](../topics/function-series.md)

## 题目

设 $`F,G`$ 为 $`[0,+\infty)`$ 上的非负单调递减函数，且 $`\lim_{t\to+\infty}t(F(t)+G(t))=0`$。

（1）证明对每个 $`\varepsilon>0`$，


```math
\lim_{x\to+\infty}\int_\varepsilon^\infty xF(xt)\cos t\,dt=0.
```



（2）若另有 $`\displaystyle\lim_{n\to\infty}\int_0^\infty(F(t)-G(t))\cos(t/n)\,dt=0`$，证明


```math
\lim_{x\to0}\int_0^\infty(F(t)-G(t))\cos(xt)\,dt=0.
```

<details>
<summary>展开参考解答</summary>

先用 Dirichlet 尾积分估计：若 $`h\ge0`$ 单调递减趋于零，$`\lambda>0`$，则


$$
\left|\int_A^\infty h(t)\cos(\lambda t)\,dt\right|\le\frac{2h(A)}\lambda.
$$


它可由分部求和或第二积分中值定理得到，也保证这些振荡积分收敛。

（1）取 $`h(t)=xF(xt)`$、$`\lambda=1`$，则


$$
\left|\int_\varepsilon^\infty xF(xt)\cos t\,dt\right|\le2xF(x\varepsilon)=\frac2\varepsilon(x\varepsilon)F(x\varepsilon)\longrightarrow0.
$$



（2）记 $`H=F-G`$、$`J(x)=\int_0^\infty H(t)\cos(xt)\,dt`$。由余弦的偶性，只需 $`x\to0^+`$。选 $`n`$ 使 $`1/(n+1)\le x\le1/n`$，记 $`y=1/n`$、$`T=1/x`$。令 $`C=\sup_{t\ge0}t(F(t)+G(t))<\infty`$。在 $`[0,T]`$ 上，


$$
\left|\int_0^TH(t)(\cos xt-\cos yt)\,dt\right|\le|x-y|\int_0^Tt(F(t)+G(t))\,dt\le\frac{C|x-y|}x\le\frac Cn\to0.
$$


分别对 $`F,G`$ 用尾积分估计，余下两条尾积分之差绝对值不超过


$$
2(F(T)+G(T))(1/x+1/y)\le4T(F(T)+G(T))\longrightarrow0.
$$


故 $`J(x)-J(1/n)\to0`$。题设已知 $`J(1/n)\to0`$，所以 $`J(x)\to0`$，证毕。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；peabc6d53b9b491.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](peabc6d53b9b491-q6.md) · [返回试卷](../papers/peabc6d53b9b491.md)

题目 ID：`peabc6d53b9b491-q7`
