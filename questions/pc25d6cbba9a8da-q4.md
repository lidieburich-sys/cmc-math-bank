# 第1届 初赛 · 数学类 · 四、

[全部题目](README.md) · [所属试卷](../papers/pc25d6cbba9a8da.md) · [专题目录](../topics/README.md)

归档年份：2009 · 解答题 · 题号：四、

专题：[函数列/函数项级数](../topics/function-series.md) · [导数与微分](../topics/derivative.md)

## 题目

设 $`f_n`$ 为 $`[a,b]`$ 上无穷次可微的函数序列，逐点收敛，且对所有 $`n,x`$ 有 $`|f_n'(x)|\le M`$。

（1）证明 $`f_n`$ 在 $`[a,b]`$ 上一致收敛；（2）设 $`f(x)=\lim f_n(x)`$，问 $`f`$ 是否一定处处可导？说明理由。

<details>
<summary>展开参考解答</summary>

（1）由中值定理，所有 $`f_n`$ 都满足共同的 Lipschitz 界 $`|f_n(x)-f_n(y)|\le M|x-y|`$。给定 $`\varepsilon>0`$，取有限网格使每个点到某个网格点的距离小于 $`\varepsilon/[3(M+1)]`$。由网格点处的逐点收敛，存在 $`N`$，使 $`m,n>N`$ 时所有网格点上 $`|f_m-f_n|<\varepsilon/3`$。于是任意 $`x`$ 处，


```math
|f_m(x)-f_n(x)|\le M|x-x_j|+\varepsilon/3+M|x-x_j|<\varepsilon.
```


所以序列一致满足 Cauchy 准则，从而一致收敛。

（2）不一定。取 $`c\in(a,b)`$，令 $`f_n(x)=\sqrt{(x-c)^2+1/n}`$。这些函数无穷次可微，且 $`|f_n'|\le1`$，但一致极限为 $`|x-c|`$，在 $`x=c`$ 不可导。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc25d6cbba9a8da.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc25d6cbba9a8da-q3.md) · [本卷下一题](pc25d6cbba9a8da-q5.md) · [返回试卷](../papers/pc25d6cbba9a8da.md)

题目 ID：`pc25d6cbba9a8da-q4`
