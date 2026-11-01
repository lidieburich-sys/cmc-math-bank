# 第4届 决赛 · 数学类 · 四、

[全部题目](README.md) · [所属试卷](../papers/p0e380fcfeb11b6.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：四、

专题：[单调性、极值与最值](../topics/onevar-extrema.md) · [导数与微分](../topics/derivative.md)

## 题目

设 $`f`$ 在 $`(a,b)`$ 上可导。若存在 $`x_0`$ 的邻域 $`U`$，使所有 $`x\in U\setminus\{x_0\}`$ 满足


```math
f(x)>f(x_0)+f^{\prime}(x_0)(x-x_0),
```


称 $`x_0`$ 为凹点；若严格小于该切线，称为凸点。证明：非仿射的可导函数必有凹点或凸点。

<details>
<summary>展开参考解答</summary>

原题的“不是一次函数”按参考解应理解为“并非仿射函数 $`kx+c`$”；若只排除次数恰为一的多项式，则常函数会成为反例。

由非仿射性，可取 $`a<u<v<w<b`$，使图像三点不共线。令 $`\ell`$ 为连接两端点的直线。不妨先设 $`h=f(v)-\ell(v)>0`$。取足够小的 $`\varepsilon>0`$，令


$`\displaystyle p(x)=\ell(x)+h-\varepsilon(x-v)^2,`$


使 $`p(u)>f(u)`$、$`p(w)>f(w)`$，而 $`p(v)=f(v)`$。函数 $`p-f`$ 在 $`[u,w]`$ 的最小值 $`m\le0`$ 于内点 $`\xi`$ 达到，所以 $`p^{\prime}(\xi)=f^{\prime}(\xi)`$。对全部 $`x\in[u,w]`$，


$`\displaystyle f(x)\le p(x)-m=f(\xi)+f^{\prime}(\xi)(x-\xi)-\varepsilon(x-\xi)^2.`$


当 $`x\ne\xi`$ 时严格小于切线，故 $`\xi`$ 为凸点。如果 $`h<0`$，对 $`-f`$ 作同样论证，得到 $`f`$ 的凹点。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p0e380fcfeb11b6.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p0e380fcfeb11b6-q3.md) · [本卷下一题](p0e380fcfeb11b6-q5.md) · [返回试卷](../papers/p0e380fcfeb11b6.md)

题目 ID：`p0e380fcfeb11b6-q4`
