# 第1届 初赛 · 数学类 · 五、

[全部题目](README.md) · [所属试卷](../papers/pc25d6cbba9a8da.md) · [专题目录](../topics/README.md)

归档年份：2009 · 解答题 · 题号：五、

专题：[数项级数敛散性](../topics/numeric-series.md) · [定积分及其性质](../topics/definite.md)

## 题目

设


```math
a_n=\int_0^{\pi/2}t\left|\frac{\sin nt}{\sin t}\right|^3dt.
```


证明 $`\displaystyle\sum_{n=1}^\infty1/a_n`$ 发散。

<details>
<summary>展开参考解答</summary>

利用 $`|\sin nt|\le n\sin t`$（$`0\le t\le\pi/2`$，可由几何级数或归纳证明），以及 $`\sin t\ge2t/\pi`$，把积分在 $`1/n`$ 处分开：


```math
\begin{aligned}
a_n&\le n^3\int_0^{1/n}t\,dt
+\frac{\pi^3}{8}\int_{1/n}^{\pi/2}\frac{dt}{t^2}\\
&\le\left(\frac12+\frac{\pi^3}{8}\right)n.
\end{aligned}
```


又 $`a_n>0`$，故 $`1/a_n\ge C/n`$，其中 $`C>0`$ 为常数。由调和级数及比较判别法，所给级数发散。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc25d6cbba9a8da.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc25d6cbba9a8da-q4.md) · [本卷下一题](pc25d6cbba9a8da-q6.md) · [返回试卷](../papers/pc25d6cbba9a8da.md)

题目 ID：`pc25d6cbba9a8da-q5`
