# 第13届 补赛 · 非数学类 · 一（1）

[全部题目](README.md) · [所属试卷](../papers/pedca45f5baec5b.md) · [专题目录](../topics/README.md)

归档年份：2021 · 填空题 · 题号：一（1）

专题：[数列极限](../topics/sequence-limits.md) · [泰勒展开](../topics/taylor.md)

## 题目

设 $`x_0=1`$，$`x_n=\ln(1+x_{n-1})`$（$`n\ge1`$）。求 $`\displaystyle\lim_{n\to\infty}nx_n`$。

<details>
<summary>展开参考解答</summary>

由 $`0<\ln(1+t)<t`$（$`t>0`$），$`x_n`$ 正且严格递减，其极限满足 $`\ell=\ln(1+\ell)`$，故 $`\ell=0`$。由 Stolz 定理和泰勒展开，


```math
\lim_{n\to\infty}\frac{1/x_n}{n}=\lim_{n\to\infty}\left(\frac1{x_{n+1}}-\frac1{x_n}\right)=\lim_{t\to0^+}\frac{t-\ln(1+t)}{t\ln(1+t)}=\frac12.
```


所以 $`\boxed{\lim_{n\to\infty}nx_n=2}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 pedca45f5baec5b.pdf；题目第1页，答案第1页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷下一题](pedca45f5baec5b-q2.md) · [返回试卷](../papers/pedca45f5baec5b.md)

题目 ID：`pedca45f5baec5b-q1`
