# 第5届 初赛 · 非数学类 · 一（1）

[全部题目](README.md) · [所属试卷](../papers/p01c4aeceafa9c4.md) · [专题目录](../topics/README.md)

归档年份：2013 · 填空题 · 题号：一（1）

专题：[数列极限](../topics/sequence-limits.md) · [泰勒展开](../topics/taylor.md)

## 题目

求极限 

```math
\lim_{n\to\infty}\left(1+\sin\bigl(\pi\sqrt{1+4n^2}\bigr)\right)^n.
```

<details>
<summary>展开参考解答</summary>

由 $`n`$ 为整数及有理化，


```math
\sin\bigl(\pi\sqrt{1+4n^2}\bigr)=\sin\!\left(\pi\sqrt{1+4n^2}-2n\pi\right)=\sin\frac\pi{\sqrt{1+4n^2}+2n}.
```


记右端为 $`t_n`$，则 $`t_n\to0`$，且


```math
nt_n\sim\frac{n\pi}{\sqrt{1+4n^2}+2n}\longrightarrow\frac\pi4.
```


故 $`n\ln(1+t_n)\to\pi/4`$，所求极限为 $`\boxed{e^{\pi/4}}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p01c4aeceafa9c4.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷下一题](p01c4aeceafa9c4-q2.md) · [返回试卷](../papers/p01c4aeceafa9c4.md)

题目 ID：`p01c4aeceafa9c4-q1`
