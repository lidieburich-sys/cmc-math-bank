# 第13届 补赛 · 非数学类 · 二

[全部题目](README.md) · [所属试卷](../papers/pedca45f5baec5b.md) · [专题目录](../topics/README.md)

归档年份：2021 · 证明题 · 题号：二

专题：[定积分及其性质](../topics/definite.md) · [单调性、极值与最值](../topics/onevar-extrema.md) · [连续性与一致连续](../topics/continuity.md)

## 题目

设


```math
f(x)=-\frac12\left(1+\frac1e\right)+\int_{-1}^1|x-t|e^{-t^2}\,dt.
```


证明：在区间 $`(-1,1)`$ 内，$`f(x)`$ 有且仅有两个实根。

<details>
<summary>展开参考解答</summary>

由积分的对称性，$`f`$ 是偶函数。对 $`-1<x<1`$，在 $`t=x`$ 处分拆积分可得


$`\displaystyle f(x)=-\frac12-\frac3{2e}+e^{-x^2}+2x\int_0^x e^{-t^2}\,dt.`$


故


$`\displaystyle f(0)=\frac{e-3}{2e}<0,\qquad f(1)=-\frac12-\frac1{2e}+2\int_0^1e^{-t^2}\,dt>\frac32-\frac5{2e}>0,`$


其中利用了 $`e^{-t^2}>e^{-t}`$（$`0<t<1`$）。同时


$`\displaystyle f'(x)=2\int_0^x e^{-t^2}\,dt>0\qquad(0<x<1).`$


连续性与严格单调性说明 $`(0,1)`$ 内恰有一个零点；偶性说明 $`(-1,0)`$ 内也恰有一个零点，而 $`0`$ 不是零点。因此共有且仅有两个实根。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 pedca45f5baec5b.pdf；题目第3页，答案第3,4页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](pedca45f5baec5b-q5.md) · [本卷下一题](pedca45f5baec5b-q7.md) · [返回试卷](../papers/pedca45f5baec5b.md)

题目 ID：`pedca45f5baec5b-q6`
