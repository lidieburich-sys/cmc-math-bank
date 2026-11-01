# 第4届 初赛 · 非数学类 · 三、

[全部题目](README.md) · [所属试卷](../papers/p5cfd13df7b2cc3.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：三、

专题：[数值分析与逼近](../topics/numerical-analysis.md) · [泰勒展开](../topics/taylor.md)

## 题目

求方程 

```math
x^2\sin\frac1x=2x-501
```

 的近似解，精确到 $`0.001`$。

<details>
<summary>展开参考解答</summary>

设 $`H(x)=x^2\sin(1/x)-2x+501`$。当 $`|x|\le1`$ 且 $`x\ne0`$ 时，$`H(x)\ge501-2x-x^2>0`$；当 $`x<-1`$ 时，$`\sin(1/x)>1/x`$，故 $`H(x)>501-x>0`$。

当 $`x\ge1`$ 时，令 $`t=1/x\in(0,1]`$，则


$$
H^{\prime}(x)=\frac{2\sin t}{t}-\cos t-2<-\cos t<0.
$$


利用 $`t-t^3/6<\sin t<t`$ 可得 $`H(500)>0`$、$`H(501)<0`$，所以唯一根 $`x_*\in(500,501)`$。将同一估计代回原方程，得


$$
501-\frac1{6x_*}<x_*<501,\qquad |x_*-501|<\frac1{3000}<0.001.
$$


故符合精度要求的近似解为 $`\boxed{x\approx501.000}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p5cfd13df7b2cc3.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p5cfd13df7b2cc3-q6.md) · [本卷下一题](p5cfd13df7b2cc3-q8.md) · [返回试卷](../papers/p5cfd13df7b2cc3.md)

题目 ID：`p5cfd13df7b2cc3-q7`
