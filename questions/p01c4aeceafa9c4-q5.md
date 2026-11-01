# 第5届 初赛 · 非数学类 · 二、

[全部题目](README.md) · [所属试卷](../papers/p01c4aeceafa9c4.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：二、

专题：[定积分及其性质](../topics/definite.md)

## 题目

计算定积分 

```math
I=\int_{-\pi}^{\pi}\frac{x\sin x\,\arctan(e^x)}{1+\cos^2x}\,dx.
```

<details>
<summary>展开参考解答</summary>

利用 $`x\sin x/(1+\cos^2x)`$ 为偶函数，且 $`\arctan(e^x)+\arctan(e^{-x})=\pi/2`$，得


$`\displaystyle I=\frac\pi2\int_0^\pi\frac{x\sin x}{1+\cos^2x}\,dx.`$


记右侧积分为 $`J`$。作代换 $`x=\pi-t`$，可得


$`\displaystyle 2J=\pi\int_0^\pi\frac{\sin x}{1+\cos^2x}\,dx=\pi\big[-\arctan(\cos x)\big]_0^\pi=\frac{\pi^2}{2}.`$


所以 $`J=\pi^2/4`$，从而 $`\boxed{I=\pi^3/8}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p01c4aeceafa9c4.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p01c4aeceafa9c4-q4.md) · [本卷下一题](p01c4aeceafa9c4-q6.md) · [返回试卷](../papers/p01c4aeceafa9c4.md)

题目 ID：`p01c4aeceafa9c4-q5`
