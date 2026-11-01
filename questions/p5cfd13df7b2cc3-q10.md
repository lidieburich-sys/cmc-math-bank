# 第4届 初赛 · 非数学类 · 六、

[全部题目](README.md) · [所属试卷](../papers/p5cfd13df7b2cc3.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：六、

专题：[二重积分与三重积分](../topics/multiple.md) · [导数与微分](../topics/derivative.md)

## 题目

设 $`f`$ 为连续函数，$`t>0`$，$`\Omega_t`$ 是由抛物面 $`z=x^2+y^2`$ 与球面 $`x^2+y^2+z^2=t^2`$ 围成的部分。定义


```math
F(t)=\iiint_{\Omega_t}f(x^2+y^2+z^2)\,dV.
```


求 $`F^{\prime}(t)`$。

<details>
<summary>展开参考解答</summary>

在球坐标中记球半径为 $`r`$，极角为 $`\theta`$。抛物面条件 $`z\ge x^2+y^2`$ 等价于


```math
r\cos\theta\ge r^2\sin^2\theta.
```


令 $`g(r)=(\sqrt{1+4r^2}-1)/2`$，则每个 $`r>0`$ 上允许的极角为 $`0\le\theta\le\arccos(g(r)/r)`$。因此


```math
F(t)=2\pi\int_0^t f(r^2)r^2\left(1-\frac{g(r)}r\right)\,dr.
```


由微积分基本定理，


```math
\boxed{F^{\prime}(t)=2\pi t^2f(t^2)\left(1-\frac{g(t)}t\right)=\pi t\left(2t+1-\sqrt{1+4t^2}\right)f(t^2)}.
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p5cfd13df7b2cc3.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p5cfd13df7b2cc3-q9.md) · [本卷下一题](p5cfd13df7b2cc3-q11.md) · [返回试卷](../papers/p5cfd13df7b2cc3.md)

题目 ID：`p5cfd13df7b2cc3-q10`
