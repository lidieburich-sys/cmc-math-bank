# 第1届 初赛 · 数学类 · 六、

[全部题目](README.md) · [所属试卷](../papers/pc25d6cbba9a8da.md) · [专题目录](../topics/README.md)

归档年份：2009 · 解答题 · 题号：六、

专题：[偏微分方程](../topics/pde.md) · [二重积分与三重积分](../topics/multiple.md) · [曲线积分与格林公式](../topics/line-integral.md)

## 题目

设 $`f(x,y)`$ 在闭单位圆盘上二阶连续可微，满足 $`f_{xx}+f_{yy}=x^2y^2`$。计算


```math
I=\iint_{x^2+y^2\le1}\left(\frac{x}{\sqrt{x^2+y^2}}f_x+\frac{y}{\sqrt{x^2+y^2}}f_y\right)dxdy.
```

<details>
<summary>展开参考解答</summary>

极坐标下，被积函数为径向导数 $`f_r`$。对半径 $`r`$ 的圆盘用 Green 公式，


```math
r\int_0^{2\pi}f_r(r,\theta)d\theta
=\iint_{x^2+y^2\le r^2}(f_{xx}+f_{yy})dxdy
=\frac{r^6}{6}\int_0^{2\pi}\cos^2\theta\sin^2\theta d\theta
=\frac{\pi r^6}{24}.
```


因此


```math
I=\int_0^1r\int_0^{2\pi}f_r\,d\theta\,dr
=\frac\pi{24}\int_0^1r^6dr=\boxed{\frac\pi{168}}.
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc25d6cbba9a8da.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc25d6cbba9a8da-q5.md) · [本卷下一题](pc25d6cbba9a8da-q7.md) · [返回试卷](../papers/pc25d6cbba9a8da.md)

题目 ID：`pc25d6cbba9a8da-q6`
