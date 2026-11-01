# 第4届 初赛 · 数学类 · 六、

[全部题目](README.md) · [所属试卷](../papers/pc80cb476df1ae7.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：六、

专题：[中值定理与辅助函数](../topics/mean-value.md) · [定积分及其性质](../topics/definite.md)

## 题目

设 $`f:[0,1]\to\mathbb R`$ 可微，$`f(0)=f(1)`$、$`\int_0^1f(x)dx=0`$，且任意 $`x\in[0,1]`$ 均有 $`f'(x)\ne1`$。证明对每个正整数 $`n`$，


```math
\left|\sum_{k=0}^{n-1}f(k/n)\right|<\frac12.
```

<details>
<summary>展开参考解答</summary>

由 Rolle 定理，存在 $`c\in(0,1)`$ 使 $`f'(c)=0`$。导数具有介值性，又处处不等于 1，故处处 $`f'(x)<1`$。令 $`g(x)=f(x)-x`$，则 $`g`$ 严格递减，$`g(0)-g(1)=1`$、$`\int_0^1g=-1/2`$。比较严格单调函数的左右端点 Riemann 和，有


$$
-\frac12<\frac1n\sum_{k=0}^{n-1}g(k/n)<-\frac12+\frac1n.
$$


乘以 $`n`$ 并加上 $`\sum_{k=0}^{n-1}k/n=(n-1)/2`$，即得


$$
-\frac12<\sum_{k=0}^{n-1}f(k/n)<\frac12.
$$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc80cb476df1ae7.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc80cb476df1ae7-q5.md) · [本卷下一题](pc80cb476df1ae7-q7.md) · [返回试卷](../papers/pc80cb476df1ae7.md)

题目 ID：`pc80cb476df1ae7-q6`
