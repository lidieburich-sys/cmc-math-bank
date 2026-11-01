# 第13届 补赛 · 非数学类 · 五

[全部题目](README.md) · [所属试卷](../papers/pedca45f5baec5b.md) · [专题目录](../topics/README.md)

归档年份：2021 · 证明题 · 题号：五

专题：[反常积分](../topics/improper.md) · [数项级数敛散性](../topics/numeric-series.md)

## 题目

设


```math
f(x)=\int_0^x\left(1-\frac{[u]}u\right)\,du,
```


其中 $`[u]`$ 表示小于等于 $`u`$ 的最大整数。讨论反常积分


```math
\int_1^{+\infty}\frac{e^{f(x)}}{x^p}\cos\left(x^2-\frac1{x^2}\right)dx
```


的敛散性，其中 $`p>0`$。

<details>
<summary>展开参考解答</summary>

设 $`N=[x]`$。按单位区间分拆积分，并用 $`k\ln(1+1/k)=1-1/(2k)+O(k^{-2})`$，得


$$
f(x)=N-\sum_{k=1}^{N-1}k\ln\left(1+\frac1k\right)+O(1/x)=\frac12\ln x+O(1).
$$


所以存在正常数 $`C_1,C_2`$，使 $`C_1\sqrt x\le e^{f(x)}\le C_2\sqrt x`$（$`x\ge1`$）。当 $`p>3/2`$ 时，绝对值被积函数不超过 $`C_2x^{1/2-p}`$，故绝对收敛。

对任意 $`p>0`$，令 $`\phi(x)=x^2-x^{-2}`$，写成


$$
\frac{e^{f(x)}}{x^p}\cos\phi(x)=h(x)\phi'(x)\cos\phi(x),\qquad h(x)=\frac{e^{f(x)}x^{3-p}}{2(x^4+1)}.
$$


$`\phi'\cos\phi`$ 的积分是有界函数 $`\sin\phi`$。又


$$
h(x)=\frac12\frac{e^{f(x)}}x\frac{x^{4-p}}{x^4+1}\to0.
$$


第一个因子 $`e^{f(x)}/x`$ 在 $`[1,\infty)`$ 单调不增，因为其对数的导数在非整数点为 $`1-([x]+1)/x\le0`$；第二个因子对充分大的 $`x`$ 单调递减。因此由 Dirichlet 判别法，原积分收敛。

当 $`0<p\le3/2`$ 时，利用 $`|\cos\phi|\ge\cos^2\phi=(1+\cos2\phi)/2`$。同理振荡积分 $`\int_1^\infty e^{f(x)}x^{-p}\cos2\phi(x)\,dx`$ 收敛，而


$$
\int_1^\infty\frac{e^{f(x)}}{x^p}\,dx\ge C_1\int_1^\infty x^{1/2-p}\,dx=+\infty.
$$


故绝对值积分发散。结论：$`\boxed{p>3/2\text{ 时绝对收敛；}\ 0<p\le3/2\text{ 时条件收敛}}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 pedca45f5baec5b.pdf；题目第6页，答案第6,7页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](pedca45f5baec5b-q8.md) · [本卷下一题](pedca45f5baec5b-q10.md) · [返回试卷](../papers/pedca45f5baec5b.md)

题目 ID：`pedca45f5baec5b-q9`
