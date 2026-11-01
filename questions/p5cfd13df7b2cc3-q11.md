# 第4届 初赛 · 非数学类 · 七、

[全部题目](README.md) · [所属试卷](../papers/p5cfd13df7b2cc3.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：七、

专题：[数项级数敛散性](../topics/numeric-series.md)

## 题目

设 $`\sum_{n=1}^{\infty}a_n`$ 和 $`\sum_{n=1}^{\infty}b_n`$ 是正项级数。证明：

（1）若


```math
\lim_{n\to\infty}\left(\frac{a_n}{a_{n+1}b_n}-\frac1{b_{n+1}}\right)>0,
```


则 $`\sum a_n`$ 收敛。

（2）若上述极限小于 $`0`$，且 $`\sum b_n`$ 发散，则 $`\sum a_n`$ 发散。

<details>
<summary>展开参考解答</summary>

（1）由极限大于零，存在 $`\delta>0`$ 和 $`N`$，使 $`n\ge N`$ 时


$`\displaystyle \frac{a_n}{a_{n+1}b_n}-\frac1{b_{n+1}}>\delta.`$


乘以 $`a_{n+1}>0`$，并从 $`N`$ 到 $`m`$ 求和，得


$`\displaystyle \delta\sum_{n=N}^m a_{n+1}<\sum_{n=N}^m\left(\frac{a_n}{b_n}-\frac{a_{n+1}}{b_{n+1}}\right)=\frac{a_N}{b_N}-\frac{a_{m+1}}{b_{m+1}}\le\frac{a_N}{b_N}.`$


正项级数的部分和有上界，故收敛。

（2）由极限小于零，充分大的 $`n`$ 都有


$`\displaystyle \frac{a_n}{a_{n+1}b_n}<\frac1{b_{n+1}},\qquad \frac{a_{n+1}}{b_{n+1}}>\frac{a_n}{b_n}.`$


因此从某个 $`N`$ 起，$`a_n\ge(a_N/b_N)b_n`$。由比较判别法及 $`\sum b_n`$ 发散，得 $`\sum a_n`$ 发散。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p5cfd13df7b2cc3.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p5cfd13df7b2cc3-q10.md) · [返回试卷](../papers/p5cfd13df7b2cc3.md)

题目 ID：`p5cfd13df7b2cc3-q11`
