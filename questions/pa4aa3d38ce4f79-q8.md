# 第15届 初赛 · 非数学B类 · 第8题

[全部题目](README.md) · [所属试卷](../papers/pa4aa3d38ce4f79.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：第8题

专题：[幂级数与函数展开](../topics/power-series.md)

## 题目

求幂级数的收敛域及和函数：



```math
\sum_{n=1}^{\infty}\frac{(-1)^{n-1}x^{2n}}{n(2n-1)}.
```

<details>
<summary>展开参考解答</summary>

收敛半径为 $`1`$。当 $`x=\pm1`$ 时，级数绝对收敛，故收敛域为 $`[-1,1]`$。

记和函数为 $`S(x)`$。在 $`(-1,1)`$ 内逐项求导，得



```math
\frac12S''(x)=\sum_{n=1}^{\infty}(-1)^{n-1}x^{2n-2}=\frac{1}{1+x^2}.
```



由 $`S(0)=S'(0)=0`$，得



```math
S'(x)=2\int_0^x\frac{1}{1+s^2}\,ds=2\arctan x,
```





```math
S(x)=2\int_0^x\arctan s\,ds=2x\arctan x-\ln(1+x^2).
```



由端点连续性，此式也适用于 $`x=\pm1`$。所以



```math
\boxed{S(x)=2x\arctan x-\ln(1+x^2),\qquad -1\le x\le1.}
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：transcribed and checked against bundled question/answer images on 2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pa4aa3d38ce4f79-q7.md) · [本卷下一题](pa4aa3d38ce4f79-q9.md) · [返回试卷](../papers/pa4aa3d38ce4f79.md)

题目 ID：`pa4aa3d38ce4f79-q8`
