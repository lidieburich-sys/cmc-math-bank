# 第5届 决赛 · 数学类高年级组 · 九、

[全部题目](README.md) · [所属试卷](../papers/p4e0edc307ae20b.md) · [专题目录](../topics/README.md)

归档年份：2014 · 解答题 · 题号：九、

专题：[概率分布与随机过程](../topics/probability.md)

## 题目

一只盒子中装有标号 $`1`$ 到 $`N`$ 的 $`N`$ 张票券，每次有放回地抽取一张，各票等可能且各次抽取独立。若想收集 $`r`$ 张不同的票券，期望需要抽取多少次？

<details>
<summary>展开参考解答</summary>

设已收集 $`j`$ 张不同票券后，等到下一张新票的抽取次数为 $`T_j`$，则成功概率为 $`(N-j)/N`$，故


```math
\mathbb E T_j=\frac{N}{N-j},\qquad j=0,\ldots,r-1.
```


由期望的线性性，所需总次数的期望为


```math
\boxed{N\sum_{j=0}^{r-1}\frac1{N-j}=N\left(\frac1N+\frac1{N-1}+\cdots+\frac1{N-r+1}\right)},\qquad1\le r\le N.
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看2014数学类高年级决赛原题 p4e0edc307ae20b.pdf 2页及参考答案 p90d8d1f510c5e1.pdf 8页，并独立核算；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%20.pdf)

---

[本卷上一题](p4e0edc307ae20b-q8.md) · [本卷下一题](p4e0edc307ae20b-q10.md) · [返回试卷](../papers/p4e0edc307ae20b.md)

题目 ID：`p4e0edc307ae20b-q9`
