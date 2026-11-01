# 第5届 初赛 · 非数学类 · 六、

[全部题目](README.md) · [所属试卷](../papers/p01c4aeceafa9c4.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：六、

专题：[曲线积分与格林公式](../topics/line-integral.md) · [函数极限](../topics/limits.md)

## 题目

设 

```math
I_a(r)=\oint_C\frac{y\,dx-x\,dy}{(x^2+y^2)^a},
```


其中 $`a`$ 为常数，$`C`$ 为椭圆 $`x^2+xy+y^2=r^2`$，取正向。求 $`\displaystyle\lim_{r\to+\infty}I_a(r)`$。

<details>
<summary>展开参考解答</summary>

用极坐标表示正向椭圆：


$`\displaystyle x=R(\theta)\cos\theta,\quad y=R(\theta)\sin\theta,\quad R(\theta)=\frac r{\sqrt{1+\tfrac12\sin2\theta}},\quad0\le\theta\le2\pi.`$


则 $`y\,dx-x\,dy=-R^2\,d\theta`$，所以


$`\displaystyle I_a(r)=-r^{2-2a}\int_0^{2\pi}\left(1+\frac12\sin2\theta\right)^{a-1}\,d\theta.`$


该定积分为与 $`r`$ 无关的有限正常数；当 $`a=1`$ 时等于 $`2\pi`$。因此


$`\displaystyle \boxed{\lim_{r\to+\infty}I_a(r)=\begin{cases}0,&a>1,\\-2\pi,&a=1,\\-\infty,&a<1.\end{cases}}`$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p01c4aeceafa9c4.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p01c4aeceafa9c4-q8.md) · [本卷下一题](p01c4aeceafa9c4-q10.md) · [返回试卷](../papers/p01c4aeceafa9c4.md)

题目 ID：`p01c4aeceafa9c4-q9`
