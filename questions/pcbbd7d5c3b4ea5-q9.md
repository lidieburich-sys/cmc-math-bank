# 第17届 初赛 · 非数学B类 · 五

[全部题目](README.md) · [所属试卷](../papers/pcbbd7d5c3b4ea5.md) · [专题目录](../topics/README.md)

归档年份：2025 · 解答题 · 题号：五

专题：[单调性、极值与最值](../topics/onevar-extrema.md) · [数项级数敛散性](../topics/numeric-series.md)

## 题目

（1）设 $`f(x)=\sin^2x\sin2x`$，讨论其在 $`(0,\pi)`$ 上的单调性；

（2）对每个 $`x\in\mathbb R`$，判断级数 $`\sum_{n=1}^{\infty}\sin^2x\sin^2(2x)\cdots\sin^2(2^nx)`$ 的敛散性。

<details>
<summary>展开参考解答</summary>

（1）求导得


```math
f'(x)=2\sin^2x(3-4\sin^2x).
```


故在 $`(0,\pi/3)`$、$`(2\pi/3,\pi)`$ 严格递增，在 $`(\pi/3,2\pi/3)`$ 严格递减。

（2）令 $`u=\sin^2t\in[0,1]`$，则


```math
\sin^2t\sin^2(2t)=4u^2(1-u)\le\frac{16}{27},
```


最大值在 $`u=2/3`$ 取得。将 $`a_n`$ 的相邻因子两两配对，剩余的一个因子不超过 $`1`$，可得


```math
0\le a_n\le\left(\frac{16}{27}\right)^{\lfloor(n+1)/2\rfloor}.
```


右端的级数为收敛的几何级数分组，所以对每个实数 $`x`$，原级数均收敛。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开原卷 pcbbd7d5c3b4ea5.pdf；题目第6页，答案第6页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%83%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%83%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pcbbd7d5c3b4ea5-q8.md) · [本卷下一题](pcbbd7d5c3b4ea5-q10.md) · [返回试卷](../papers/pcbbd7d5c3b4ea5.md)

题目 ID：`pcbbd7d5c3b4ea5-q9`
