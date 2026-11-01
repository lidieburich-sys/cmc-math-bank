# 第11届 初赛 · 非数学类 · 第7题

[全部题目](README.md) · [所属试卷](../papers/p2a3b61d03dcfb9.md) · [专题目录](../topics/README.md)

归档年份：2019 · 解答题 · 题号：第7题

专题：[不等式证明与导数应用](../topics/onevar-inequality.md) · [导数与微分](../topics/derivative.md)

## 题目

设 $`f(x)`$ 在 $`[0,+\infty)`$ 上可微，$`f(0)=0`$，且存在常数 $`A>0`$，使


```math
|f'(x)|\le A|f(x)|\qquad(x\ge0).
```


证明：$`f(x)\equiv0`$ 于 $`[0,+\infty)`$。

<details>
<summary>展开参考解答</summary>

令 $`g(x)=e^{-2Ax}f(x)^2`$，则 $`g(x)\ge0`$，且


$$
g'(x)=2e^{-2Ax}\bigl(f(x)f'(x)-Af(x)^2\bigr)\le0,
$$


因为 $`f(x)f'(x)\le|f(x)||f'(x)|\le Af(x)^2`$。故对 $`x\ge0`$，


$$
0\le g(x)\le g(0)=0.
$$


于是 $`f(x)=0`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：核对原卷 p2a3b61d03dcfb9.pdf，第 2 页；原题及参考答案均已逐页看图核对。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC11%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%B8%80%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](p2a3b61d03dcfb9-q6.md) · [本卷下一题](p2a3b61d03dcfb9-q8.md) · [返回试卷](../papers/p2a3b61d03dcfb9.md)

题目 ID：`p2a3b61d03dcfb9-q7`
