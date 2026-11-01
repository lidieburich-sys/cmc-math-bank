# 第3届 决赛 · 数学类 · 四、

[全部题目](README.md) · [所属试卷](../papers/peabc6d53b9b491.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：四、

专题：[数列极限](../topics/sequence-limits.md)

## 题目

设正数列 $`a_n`$ 满足


```math
\liminf_{n\to\infty}a_n=1,\qquad\limsup_{n\to\infty}a_n<\infty,\qquad\lim_{n\to\infty}(a_1\cdots a_n)^{1/n}=1.
```


证明 $`\displaystyle\lim_{n\to\infty}(a_1+\cdots+a_n)/n=1`$。

<details>
<summary>展开参考解答</summary>

令 $`b_n=\ln a_n`$，则 $`\liminf b_n=0`$、$`b_n`$ 有界，且 $`n^{-1}\sum_{k=1}^nb_k\to0`$。负部 $`b_n^-:=\max(-b_n,0)\to0`$，故它的算术平均也趋于零。因此


$$
\frac1n\sum_{k=1}^nb_k^+=\frac1n\sum_{k=1}^n(b_k+b_k^-)\to0,\qquad\frac1n\sum_{k=1}^n|b_k|\to0.
$$


因 $`b_n`$ 有界，指数函数在包含全部 $`b_n`$ 的有界区间上为 Lipschitz，存在 $`C`$ 使 $`|a_n-1|=|e^{b_n}-1|\le C|b_n|`$。从而


$$
\left|\frac1n\sum_{k=1}^na_k-1\right|\le\frac Cn\sum_{k=1}^n|b_k|\longrightarrow0.
$$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；peabc6d53b9b491.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](peabc6d53b9b491-q3.md) · [本卷下一题](peabc6d53b9b491-q5.md) · [返回试卷](../papers/peabc6d53b9b491.md)

题目 ID：`peabc6d53b9b491-q4`
