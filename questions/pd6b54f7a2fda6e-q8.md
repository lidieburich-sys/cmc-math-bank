# 第7届 初赛 · 非数学类 · 四、

[全部题目](README.md) · [所属试卷](../papers/pd6b54f7a2fda6e.md) · [专题目录](../topics/README.md)

归档年份：2015 · 解答题 · 题号：四、

专题：[幂级数与函数展开](../topics/power-series.md)

## 题目

求幂级数


```math
\sum_{n=0}^{\infty}\frac{n^3+2}{(n+1)!}(x-1)^n
```


的收敛域及和函数。

<details>
<summary>展开参考解答</summary>

系数比值趋于 $`0`$，故收敛半径为 $`+\infty`$，收敛域为 $`\mathbb R`$。令 $`t=x-1`$，由


$`\displaystyle \frac{n^3+2}{(n+1)!}=\frac1{(n-2)!}+\frac1{n!}+\frac1{(n+1)!}\quad(n\ge2)`$


（前两项直接核对），得到


$`\displaystyle S(x)=(t^2+1)e^t+\frac{e^t-1}{t}\quad(t\ne0).`$


因此


$`\displaystyle \boxed{S(x)=\begin{cases} (x^2-2x+2)e^{x-1}+\dfrac{e^{x-1}-1}{x-1},&x\ne1,\\ 2,&x=1. \end{cases}}`$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对 2015 非数学类初赛原卷与参考答案 PDF（原题页及全部答案页），2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882015%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882015%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pd6b54f7a2fda6e-q7.md) · [本卷下一题](pd6b54f7a2fda6e-q9.md) · [返回试卷](../papers/pd6b54f7a2fda6e.md)

题目 ID：`pd6b54f7a2fda6e-q8`
