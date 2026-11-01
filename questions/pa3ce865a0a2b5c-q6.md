# 第16届 决赛 · 非数学A类 · 二

[全部题目](README.md) · [所属试卷](../papers/pa3ce865a0a2b5c.md) · [专题目录](../topics/README.md)

归档年份：2025 · 综合题 · 题号：二

专题：[泰勒展开](../topics/taylor.md) · [导数与微分](../topics/derivative.md)

## 题目

设


```math
f(x)=\begin{cases}\dfrac{\ln(1+\sin^2x)-6(\sqrt[3]{2-\cos x}-1)}{x^3},&x\ne0,\\0,&x=0.\end{cases}
```


证明 $`f`$ 在 $`x=0`$ 处可导，并求 $`f'(0)`$。

<details>
<summary>展开参考解答</summary>

在 $`x\to0`$ 时，


$$
\ln(1+\sin^2x)=x^2-\frac56x^4+o(x^4),\qquad6(\sqrt[3]{2-\cos x}-1)=x^2-\frac14x^4+o(x^4).
$$


因此分子为 $`-\frac7{12}x^4+o(x^4)`$，从而


$$
f'(0)=\lim_{x\to0}\frac{f(x)-f(0)}x=\boxed{-\frac7{12}}.
$$


该极限存在，故可导。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（非数学A类）原卷第2页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（非数学A类）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6A%E7%B1%BB%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pa3ce865a0a2b5c-q5.md) · [本卷下一题](pa3ce865a0a2b5c-q7.md) · [返回试卷](../papers/pa3ce865a0a2b5c.md)

题目 ID：`pa3ce865a0a2b5c-q6`
