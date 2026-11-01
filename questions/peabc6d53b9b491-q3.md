# 第3届 决赛 · 数学类 · 三、

[全部题目](README.md) · [所属试卷](../papers/peabc6d53b9b491.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：三、

专题：[傅里叶级数](../topics/fourier.md) · [中值定理与辅助函数](../topics/mean-value.md)

## 题目

设 $`k_0<k_1<\cdots<k_n`$ 为正整数，$`A_1,\ldots,A_n`$ 为可变实数。求


```math
f(x)=\sin k_0x+\sum_{i=1}^nA_i\sin k_ix
```


在闭区间 $`[0,2\pi]`$ 上不同零点个数的最小值，并证明。

<details>
<summary>展开参考解答</summary>

按闭区间两端分别计数，最小值为 $`\boxed{2k_0+1}`$。参考解中的 $`2k_0`$ 是把 $`0`$ 与 $`2\pi`$ 当作圆周同一点的计数；这里按原题的闭区间表述计算。

定义


$$
g_s(x)=\sin k_0x+\sum_{i=1}^nA_i\left(\frac{k_0}{k_i}\right)^{2s}\sin k_ix.
$$


则 $`g_0=f`$，且 $`g_s^{\prime\prime}=-k_0^2g_{s-1}`$。由于 $`k_i>k_0`$，当 $`s`$ 足够大时，余下各项的绝对值之和小于 $`1/2`$。在 $`\sin k_0x`$ 的 $`2k_0`$ 个依次交替正负的极值点处，$`g_s`$ 也交替正负，故相邻极值点之间至少有 $`2k_0-1`$ 个不同内点零点；连同固定的两个端点零点，至少有 $`2k_0+1`$ 个。

若一个纯正弦和在闭区间有 $`N`$ 个不同零点，罗尔定理使其二阶导至少有 $`N-2`$ 个内点零点，此外二阶导在两个端点也为零。因此取二阶导不会减少闭区间的零点下界。逐次由 $`g_s`$ 推回 $`g_0=f`$，可知 $`f`$ 至少有 $`2k_0+1`$ 个零点。

当所有 $`A_i=0`$ 时，零点恰为 $`j\pi/k_0`$（$`j=0,\ldots,2k_0`$），达到此下界。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；peabc6d53b9b491.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](peabc6d53b9b491-q2.md) · [本卷下一题](peabc6d53b9b491-q4.md) · [返回试卷](../papers/peabc6d53b9b491.md)

题目 ID：`peabc6d53b9b491-q3`
