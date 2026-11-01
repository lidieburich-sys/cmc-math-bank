# 第15届 决赛 · 数学类低年级组 · 四、

[全部题目](README.md) · [所属试卷](../papers/pb14c5b9d6ebe03.md) · [专题目录](../topics/README.md)

归档年份：2024 · 解答题 · 题号：四、

专题：[定积分及其性质](../topics/definite.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

设 $`f,g`$ 是 $`[0,1]`$ 上具有正下界的 Riemann 可积函数，且


```math
\int_0^1f=\int_0^1g,\qquad \delta=\int_0^1|f-g|>0.
```


（1）证明 $`\int_0^1f<\int_0^1f^2/g`$。

（2）若进一步要求 $`f,g`$ 分段常值、$`\int_0^1f=1`$、$`\delta=3/2`$，求 $`\int_0^1f^2/g`$ 的下确界。

<details>
<summary>展开参考解答</summary>

（1）利用两函数积分相等，


```math
\int_0^1\frac{f^2}{g}-\int_0^1f
=\int_0^1\frac{(f-g)^2}{g}
\ge\frac{\left(\int_0^1|f-g|\right)^2}{\int_0^1g}>0,
```


最后一步为 Cauchy 不等式。

（2）设 $`E=\{f\ge g\}`$，$`A=\int_Ef`$、$`B=\int_Eg`$。由积分相等，$`A-B=\delta/2=3/4`$；正下界保证 $`0<B<1/4`$。分别在 $`E`$ 及其补集上用 Cauchy 不等式，得


```math
\int_0^1\frac{f^2}{g}\ge\frac{A^2}{B}+\frac{(1-A)^2}{1-B}
=1+\frac9{16B(1-B)}>4.
```


为说明下确界可趋近，取 $`0<t<1/4`$，并令


```math
f_t(x)=\begin{cases}2t+3/2,&0\le x<1/2,\\1/2-2t,&1/2\le x\le1,\end{cases}
\quad g_t(x)=\begin{cases}2t,&0\le x<1/2,\\2-2t,&1/2\le x\le1.\end{cases}
```


它们满足全部条件，且


```math
\int_0^1\frac{f_t^2}{g_t}=1+\frac9{16t(1-t)}\longrightarrow4\quad(t\to1/4^-).
```


故下确界为 $`\boxed4`$，不取到。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pb14c5b9d6ebe03.pdf 第5—6页第四题，保留所有条件与小问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

---

[本卷上一题](pb14c5b9d6ebe03-q3.md) · [本卷下一题](pb14c5b9d6ebe03-q5.md) · [返回试卷](../papers/pb14c5b9d6ebe03.md)

题目 ID：`pb14c5b9d6ebe03-q4`
