# 第11届 初赛 · 非数学类 · 第6题

[全部题目](README.md) · [所属试卷](../papers/p2a3b61d03dcfb9.md) · [专题目录](../topics/README.md)

归档年份：2019 · 解答题 · 题号：第6题

专题：[二重积分与三重积分](../topics/multiple.md)

## 题目

计算三重积分


```math
I=\iiint_\Omega\frac{xyz}{x^2+y^2}\,dx\,dy\,dz,
```


其中 $`\Omega`$ 是曲面 $`(x^2+y^2+z^2)^2=2xy`$ 所围区域在第一卦限的部分。

<details>
<summary>展开参考解答</summary>

用球坐标


```math
x=\rho\sin\varphi\cos\theta,\quad y=\rho\sin\varphi\sin\theta,\quad z=\rho\cos\varphi.
```


积分区域为


```math
0\le\theta,\varphi\le\frac\pi2,\qquad
0\le\rho\le\sqrt{2\sin^2\varphi\sin\theta\cos\theta}.
```


于是


```math
\begin{aligned}
I&=\int_0^{\pi/2}\int_0^{\pi/2}\int_0^{\sqrt{2\sin^2\varphi\sin\theta\cos\theta}}
\rho^3\sin\varphi\cos\varphi\sin\theta\cos\theta\,d\rho\,d\varphi\,d\theta\\
&=\left(\int_0^{\pi/2}\sin^3\theta\cos^3\theta\,d\theta\right)
\left(\int_0^{\pi/2}\sin^5\varphi\cos\varphi\,d\varphi\right)
=\frac1{12}\cdot\frac16=\boxed{\frac1{72}}.
\end{aligned}
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：核对原卷 p2a3b61d03dcfb9.pdf，第 2 页；原题及参考答案均已逐页看图核对。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC11%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%B8%80%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](p2a3b61d03dcfb9-q5.md) · [本卷下一题](p2a3b61d03dcfb9-q7.md) · [返回试卷](../papers/p2a3b61d03dcfb9.md)

题目 ID：`p2a3b61d03dcfb9-q6`
