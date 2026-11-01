# 第15届 决赛 · 数学类低年级组 · 六、

[全部题目](README.md) · [所属试卷](../papers/pb14c5b9d6ebe03.md) · [专题目录](../topics/README.md)

归档年份：2024 · 解答题 · 题号：六、

专题：[数列极限](../topics/sequence-limits.md)

## 题目

设 $`0<a_1<a_2`$，且


```math
a_{n+1}=\ln\left(e^{a_n}+\frac{a_n-a_{n-1}}{a_{n-1}}\right),\qquad n\ge2.
```


证明数列 $`\{a_n\}`$ 严格递增且有界。

<details>
<summary>展开参考解答</summary>

由 $`a_2>a_1>0`$，若 $`a_n>a_{n-1}`$，则对数内部严格大于 $`e^{a_n}`$，故 $`a_{n+1}>a_n`$。归纳得严格递增且各项为正。

利用 $`\ln(1+u)<u`$ 及 $`e^{a_n}>a_n`$，


$`\displaystyle 0<a_{n+1}-a_n =\ln\left(1+\frac{a_n-a_{n-1}}{e^{a_n}a_{n-1}}\right) <\frac{a_n-a_{n-1}}{a_na_{n-1}} =\frac1{a_{n-1}}-\frac1{a_n}.`$


所以 $`a_{n+1}+1/a_n<a_n+1/a_{n-1}`$。归纳得 $`a_n<a_2+1/a_1`$（$`n\ge3`$），从而有界，并且收敛。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pb14c5b9d6ebe03.pdf 第9页第六题，保留所有条件与小问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

---

[本卷上一题](pb14c5b9d6ebe03-q5.md) · [本卷下一题](pb14c5b9d6ebe03-q7.md) · [返回试卷](../papers/pb14c5b9d6ebe03.md)

题目 ID：`pb14c5b9d6ebe03-q6`
