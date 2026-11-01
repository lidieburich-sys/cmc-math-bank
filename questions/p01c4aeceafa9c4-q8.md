# 第5届 初赛 · 非数学类 · 五、

[全部题目](README.md) · [所属试卷](../papers/p01c4aeceafa9c4.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：五、

专题：[曲面积分与高斯公式](../topics/surface-integral.md) · [多元函数极值](../topics/multi-extrema.md)

## 题目

设 $`\Sigma`$ 是光滑封闭曲面，方向朝外，给定第二类曲面积分


```math
I=\iint_\Sigma(x^3-x)\,dy\,dz+(2y^3-y)\,dz\,dx+(3z^3-z)\,dx\,dy.
```


确定使 $`I`$ 最小的曲面 $`\Sigma`$，并求最小值。

<details>
<summary>展开参考解答</summary>

设 $`V`$ 为 $`\Sigma`$ 包围的区域，由高斯公式，


$`\displaystyle I=\iiint_V(3x^2+6y^2+9z^2-3)\,dV=3\iiint_V(x^2+2y^2+3z^2-1)\,dV.`$


为使积分最小，应包含被积函数为负的全部区域，并不包含其为正的部分。因此最优区域为 $`x^2+2y^2+3z^2\le1`$，所求曲面为


$`\displaystyle \boxed{\Sigma:x^2+2y^2+3z^2=1}.`$


作代换 $`u=x`$、$`v=\sqrt2y`$、$`w=\sqrt3z`$，再用球坐标，得


$`\displaystyle I_{\min}=\frac3{\sqrt6}\iiint_{u^2+v^2+w^2\le1}(u^2+v^2+w^2-1)\,du\,dv\,dw=\frac{12\pi}{\sqrt6}\int_0^1(r^2-1)r^2\,dr.`$


所以 $`\boxed{I_{\min}=-4\sqrt6\pi/15}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p01c4aeceafa9c4.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p01c4aeceafa9c4-q7.md) · [本卷下一题](p01c4aeceafa9c4-q9.md) · [返回试卷](../papers/p01c4aeceafa9c4.md)

题目 ID：`p01c4aeceafa9c4-q8`
