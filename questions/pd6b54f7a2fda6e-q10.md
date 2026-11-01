# 第7届 初赛 · 非数学类 · 六、

[全部题目](README.md) · [所属试卷](../papers/pd6b54f7a2fda6e.md) · [专题目录](../topics/README.md)

归档年份：2015 · 解答题 · 题号：六、

专题：[二重积分与三重积分](../topics/multiple.md) · [泰勒展开](../topics/taylor.md)

## 题目

设 $`f(x,y)`$ 在 $`x^2+y^2\le1`$ 上具有连续二阶偏导数，且


```math
f_{xx}^2+2f_{xy}^2+f_{yy}^2\le M,\qquad f(0,0)=f_x(0,0)=f_y(0,0)=0.
```


证明


```math
\left|\iint_{x^2+y^2\le1}f(x,y)\,dx\,dy\right|\le\frac{\pi\sqrt M}{4}.
```

<details>
<summary>展开参考解答</summary>

固定 $`(x,y)`$，令 $`g(t)=f(tx,ty)`$。由 Cauchy 不等式，


$`\displaystyle |g''(t)|=|x^2f_{xx}+2xyf_{xy}+y^2f_{yy}| \le\sqrt{f_{xx}^2+2f_{xy}^2+f_{yy}^2}\sqrt{x^4+2x^2y^2+y^4} \le\sqrt M(x^2+y^2).`$


因 $`g(0)=g'(0)=0`$，有


$`\displaystyle |f(x,y)|=\left|\int_0^1(1-t)g''(t)\,dt\right|\le\frac{\sqrt M}2(x^2+y^2).`$


故


$`\displaystyle \left|\iint_Df\right|\le\frac{\sqrt M}2\int_0^{2\pi}\!d\theta\int_0^1r^3\,dr=\frac{\pi\sqrt M}4.`$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对 2015 非数学类初赛原卷与参考答案 PDF（原题页及全部答案页），2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882015%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882015%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pd6b54f7a2fda6e-q9.md) · [返回试卷](../papers/pd6b54f7a2fda6e.md)

题目 ID：`pd6b54f7a2fda6e-q10`
