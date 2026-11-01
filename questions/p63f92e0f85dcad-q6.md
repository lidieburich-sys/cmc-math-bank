# 第13届 补赛 · 数学B类 · 六

[全部题目](README.md) · [所属试卷](../papers/p63f92e0f85dcad.md) · [专题目录](../topics/README.md)

归档年份：2021 · 证明题 · 题号：六

专题：[数项级数敛散性](../topics/numeric-series.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

（20 分）设 $`\alpha>1`$，


```math
\Gamma_k=\left[k^\alpha,\left(k+\frac12\right)^\alpha\right)\cap\mathbb N\qquad(k\ge1).
```


试判断级数 $`\sum_{n=1}^\infty a_n`$ 与 $`\sum_{n=1}^\infty b_n`$ 的敛散性，其中


```math
a_n=\begin{cases}\dfrac1n,&\text{存在 }k\text{ 使得 }n=\min\Gamma_k,\\[3pt]\dfrac1{n^\alpha},&\text{其他},\end{cases}
```




```math
b_n=\begin{cases}\dfrac1n,&\text{存在 }k\text{ 使得 }n\in\Gamma_k,\\[3pt]\dfrac1{n^\alpha},&\text{其他}.\end{cases}
```

<details>
<summary>展开参考解答</summary>

结论：$`\boxed{\sum a_n\text{ 收敛，}\sum b_n\text{ 发散}}`$。

若 $`\Gamma_k\ne\varnothing`$，则 $`\min\Gamma_k\ge k^\alpha`$，因此


$$
\sum_{n=1}^\infty a_n\le\sum_{n=1}^\infty\frac1{n^\alpha}+\sum_{\Gamma_k\ne\varnothing}\frac1{\min\Gamma_k}\le2\sum_{n=1}^\infty\frac1{n^\alpha}<\infty.
$$



再考察 $`b_n`$。由凸性或伯努利不等式，


$$
\left(k+\frac12\right)^\alpha-k^\alpha=k^\alpha\left[\left(1+\frac1{2k}\right)^\alpha-1\right]\ge\frac\alpha2k^{\alpha-1}>\frac12k^{\alpha-1}.
$$


取充分大的正整数 $`K`$，使 $`k\ge K`$ 时 $`k^{\alpha-1}\ge4`$。半开区间中整数的个数至少为区间长度减 $`1`$，故


$$
|\Gamma_k|\ge\frac12k^{\alpha-1}-1\ge\frac14k^{\alpha-1}.
$$


由于 $`n\in\Gamma_k`$ 时 $`n<(k+\tfrac12)^\alpha`$，有


$$
\sum_{n\in\Gamma_k}\frac1n\ge\frac{|\Gamma_k|}{(k+\tfrac12)^\alpha}\ge\frac1{4k}\left(1+\frac1{2k}\right)^{-\alpha}\ge\frac1{4k}\left(\frac32\right)^{-\alpha}.
$$


集合 $`\Gamma_k`$ 两两不交，于是


$$
\sum_{n=1}^\infty b_n\ge\sum_{k=K}^\infty\sum_{n\in\Gamma_k}\frac1n\ge\frac14\left(\frac32\right)^{-\alpha}\sum_{k=K}^\infty\frac1k=+\infty.
$$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 p63f92e0f85dcad.pdf；题目第11页，答案第11页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](p63f92e0f85dcad-q5.md) · [返回试卷](../papers/p63f92e0f85dcad.md)

题目 ID：`p63f92e0f85dcad-q6`
