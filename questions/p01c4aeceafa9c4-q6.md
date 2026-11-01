# 第5届 初赛 · 非数学类 · 三、

[全部题目](README.md) · [所属试卷](../papers/p01c4aeceafa9c4.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：三、

专题：[数项级数敛散性](../topics/numeric-series.md) · [泰勒展开](../topics/taylor.md)

## 题目

设 $`f`$ 在 $`x=0`$ 处存在二阶导数 $`f^{\prime\prime}(0)`$，且


```math
\lim_{x\to0}\frac{f(x)}x=0.
```


证明级数 $`\displaystyle\sum_{n=1}^{\infty}\left|f\!\left(\frac1n\right)\right|`$ 收敛。

<details>
<summary>展开参考解答</summary>

由 $`f`$ 在 $`0`$ 处连续及已知极限，得 $`f(0)=0`$，进而


$`\displaystyle f^{\prime}(0)=\lim_{x\to0}\frac{f(x)-f(0)}x=0.`$


在 $`0`$ 处的二阶泰勒展开给出


$`\displaystyle f(x)=\frac12f^{\prime\prime}(0)x^2+o(x^2).`$


因此存在常数 $`M>0`$ 和 $`N`$，使 $`n\ge N`$ 时 $`|f(1/n)|\le M/n^2`$。由 $`\sum 1/n^2`$ 收敛及比较判别法，所给级数收敛。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p01c4aeceafa9c4.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p01c4aeceafa9c4-q5.md) · [本卷下一题](p01c4aeceafa9c4-q7.md) · [返回试卷](../papers/p01c4aeceafa9c4.md)

题目 ID：`p01c4aeceafa9c4-q6`
