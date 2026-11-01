# 第13届 补赛 · 非数学类 · 六

[全部题目](README.md) · [所属试卷](../papers/pedca45f5baec5b.md) · [专题目录](../topics/README.md)

归档年份：2021 · 证明题 · 题号：六

专题：[幂级数与函数展开](../topics/power-series.md) · [反常积分](../topics/improper.md)

## 题目

设正数列 $`\{a_n\}`$ 单调减少且趋于零，


```math
f(x)=\sum_{n=1}^{\infty}a_n^n x^n.
```


证明：若级数 $`\sum_{n=1}^{\infty}a_n`$ 发散，则反常积分


```math
\int_1^{+\infty}\frac{\ln f(x)}{x^2}\,dx
```


也发散。

<details>
<summary>展开参考解答</summary>

因 $`a_n\to0`$，幂级数的收敛半径为 $`+\infty`$。对 $`x\ge1`$，$`f(x)>0`$，故 $`\ln f`$ 连续。

取 $`n_0`$ 使 $`A=e/a_{n_0}\ge1`$。对 $`x\ge A`$，设 $`m`$ 是满足 $`x\ge e/a_m`$ 的最大整数（因 $`a_n\to0`$，它存在且有限）。则


```math
f(x)\ge(a_mx)^m\ge e^m,\qquad \ln f(x)\ge m.
```


因此，对任意 $`N\ge n_0`$，都有


```math
\ln f(x)\ge\sum_{n=n_0}^{N}\mathbf1_{[e/a_n,\infty)}(x)\qquad(x\ge A).
```


两边乘 $`x^{-2}`$ 并在 $`[A,+\infty)`$ 上积分，得到


```math
\int_A^\infty\frac{\ln f(x)}{x^2}\,dx\ge\sum_{n=n_0}^{N}\int_{e/a_n}^\infty\frac{dx}{x^2}=\frac1e\sum_{n=n_0}^{N}a_n.
```


右边随 $`N\to\infty`$ 趋于 $`+\infty`$。区间 $`[1,A]`$ 上的积分有限，故原反常积分发散到 $`+\infty`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 pedca45f5baec5b.pdf；题目第7页，答案第7,8页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](pedca45f5baec5b-q9.md) · [返回试卷](../papers/pedca45f5baec5b.md)

题目 ID：`pedca45f5baec5b-q10`
