# 第14届 补赛 · 非数学类 · 五、

[全部题目](README.md) · [所属试卷](../papers/pcff01ec12e1bb2.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：五、

专题：[曲线积分与格林公式](../topics/line-integral.md)

## 题目

设 $`f(x)`$ 是 $`[-1,1]`$ 上的连续偶函数。计算曲线积分


```math
I=\oint_L\frac{x^2+y^2}{2\sqrt{1-x^2}}\,dx+f(x)\,dy,
```


其中 $`L`$ 为正向圆周 $`x^2+y^2=-2y`$。

<details>
<summary>展开参考解答</summary>

取正向参数方程 $`x=\cos\theta`$、$`y=-1+\sin\theta`$，$`0\le\theta\le2\pi`$。则


$`\displaystyle I=-\int_0^{2\pi}\frac{(1-\sin\theta)\sin\theta}{|\sin\theta|}d\theta +\int_0^{2\pi}f(\cos\theta)\cos\theta\,d\theta.`$


第一项按上下半圆分段为


$`\displaystyle -\int_0^\pi(1-\sin\theta)d\theta +\int_\pi^{2\pi}(1-\sin\theta)d\theta=4.`$


第二项由 $`\theta\mapsto\theta+\pi`$ 及 $`f`$ 的偶性相消，等于 0。因此 $`\boxed{I=4}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已核对本地原试卷 pcff01ec12e1bb2.pdf、对应题目与参考答案图片；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%A1%A5%E8%B5%9B2%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pcff01ec12e1bb2-q8.md) · [本卷下一题](pcff01ec12e1bb2-q10.md) · [返回试卷](../papers/pcff01ec12e1bb2.md)

题目 ID：`pcff01ec12e1bb2-q9`
