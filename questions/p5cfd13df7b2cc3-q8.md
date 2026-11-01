# 第4届 初赛 · 非数学类 · 四、

[全部题目](README.md) · [所属试卷](../papers/p5cfd13df7b2cc3.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：四、

专题：[函数极限](../topics/limits.md) · [泰勒展开](../topics/taylor.md) · [隐函数与参数方程求导](../topics/implicit.md)

## 题目

设函数 $`y=f(x)`$ 二阶可导，且 $`f^{\prime\prime}(x)>0`$、$`f(0)=f^{\prime}(0)=0`$。求


```math
\lim_{x\to0}\frac{x^3f(u)}{f(x)\sin^3u},
```


其中 $`u`$ 是曲线 $`y=f(x)`$ 在点 $`P(x,f(x))`$ 处的切线在 $`x`$ 轴上的截距。

<details>
<summary>展开参考解答</summary>

切线方程为 $`Y-f(x)=f^{\prime}(x)(X-x)`$，故


$$
u=x-\frac{f(x)}{f^{\prime}(x)}.
$$


记 $`A=f^{\prime\prime}(0)>0`$。由二阶可导及初值，


$$
f(x)=\frac A2x^2+o(x^2),\qquad f^{\prime}(x)=Ax+o(x).
$$


于是 $`u/x\to1/2`$，特别地 $`u\to0`$。再由 $`f(u)\sim Au^2/2`$、$`\sin u\sim u`$，有


$$
\frac{x^3f(u)}{f(x)\sin^3u}\sim\frac{x^3u^2}{x^2u^3}=\frac xu\longrightarrow\boxed{2}.
$$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p5cfd13df7b2cc3.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p5cfd13df7b2cc3-q7.md) · [本卷下一题](p5cfd13df7b2cc3-q9.md) · [返回试卷](../papers/p5cfd13df7b2cc3.md)

题目 ID：`p5cfd13df7b2cc3-q8`
