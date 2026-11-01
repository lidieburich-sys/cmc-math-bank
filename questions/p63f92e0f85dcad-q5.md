# 第13届 补赛 · 数学B类 · 五

[全部题目](README.md) · [所属试卷](../papers/p63f92e0f85dcad.md) · [专题目录](../topics/README.md)

归档年份：2021 · 计算题 · 题号：五

专题：[定积分及其性质](../topics/definite.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

（15 分）设


```math
I(f)=\int_0^\pi(\sin x-f(x))f(x)\,dx.
```


求当 $`f`$ 遍历 $`[0,\pi]`$ 上所有连续函数时 $`I(f)`$ 的最大值。

<details>
<summary>展开参考解答</summary>

配方得到


$$
\begin{aligned}
I(f)&=\int_0^\pi\bigl(f(x)\sin x-f(x)^2\bigr)\,dx\\
&=\int_0^\pi\frac{\sin^2x}{4}\,dx-\int_0^\pi\left(f(x)-\frac{\sin x}{2}\right)^2\,dx\\
&=\frac\pi8-\int_0^\pi\left(f(x)-\frac{\sin x}{2}\right)^2\,dx\le\frac\pi8.
\end{aligned}
$$


取连续函数 $`f(x)=\tfrac12\sin x`$ 时等号成立，故最大值为 $`\boxed{\pi/8}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 p63f92e0f85dcad.pdf；题目第10页，答案第10页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](p63f92e0f85dcad-q4.md) · [本卷下一题](p63f92e0f85dcad-q6.md) · [返回试卷](../papers/p63f92e0f85dcad.md)

题目 ID：`p63f92e0f85dcad-q5`
