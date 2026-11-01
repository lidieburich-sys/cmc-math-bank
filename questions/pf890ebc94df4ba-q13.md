# 第16届 决赛 · 数学类高年级组 · 九

[全部题目](README.md) · [所属试卷](../papers/pf890ebc94df4ba.md) · [专题目录](../topics/README.md)

归档年份：2025 · 综合题 · 题号：九

专题：[概率分布与随机过程](../topics/probability.md)

## 题目

设 $`X_1,\ldots,X_n`$ 为独立同分布、参数为 $`1`$ 的指数随机变量，定义


```math
Y=\min(X_1,\ldots,X_n),\qquad Z_i=X_i-Y,\qquad S_n=\sum_{i=1}^nX_i.
```


（1）分别求 $`Y,S_n`$ 的概率密度及 $`\mathbb P(Y=X_1)`$；

（2）证明在 $`Y=X_1`$ 的条件下，$`Z_2,\ldots,Z_n`$ 独立且均为参数 $`1`$ 的指数变量，即对任意 $`x_i>0`$，


```math
\mathbb P(Z_2\le x_2,\ldots,Z_n\le x_n\mid Y=X_1)=\prod_{i=2}^n\mathbb P(X_i\le x_i).
```


（3）令 $`T=S_n-nY`$，证明 $`T`$ 与 $`S_{n-1}`$ 同分布，且 $`T`$ 与 $`Y`$ 独立；

（4）求 $`Y/S_n`$ 的概率密度。

<details>
<summary>展开参考解答</summary>

先取 $`n\ge2`$。（1）$`\mathbb P(Y>y)=e^{-ny}`$（$`y>0`$），故


$`\displaystyle f_Y(y)=ne^{-ny}\mathbf1_{\{y>0\}},\qquad f_{S_n}(s)=\frac{s^{n-1}e^{-s}}{(n-1)!}\mathbf1_{\{s>0\}}.`$


最小值几乎必然唯一，依对称性 $`\mathbb P(Y=X_1)=1/n`$。

（2）记 $`I`$ 为取得最小值的指标。在 $`I=1`$ 时作变换 $`X_1=y`$、$`X_i=y+z_i`$（$`i\ge2`$），Jacobian 为 $`1`$，得到


$`\displaystyle f_{Y,Z_2,\ldots,Z_n,I=1}=e^{-ny}\prod_{i=2}^ne^{-z_i},\qquad y,z_i>0.`$


除以 $`\mathbb P(I=1)=1/n`$ 后，条件密度分解为 $`ne^{-ny}\prod_{i=2}^ne^{-z_i}`$。这证明 $`Y`$ 与这些余量条件独立，余量均为 $`\mathop{\mathrm{Exp}}\nolimits (1)`$，所要求的条件分布式也随之成立。

（3）在任一 $`I=i`$ 条件下，$`T`$ 都是 $`n-1`$ 个独立 $`\mathop{\mathrm{Exp}}\nolimits (1)`$ 变量之和，且独立于 $`Y`$；此条件联合分布不随 $`i`$ 改变。对 $`i`$ 求和后仍有


$`\displaystyle f_{Y,T}(y,t)=ne^{-ny}\frac{t^{n-2}e^{-t}}{(n-2)!},\qquad y,t>0.`$


故 $`T\sim\mathop{\mathrm{Gamma}}\nolimits (n-1,1)`$，与 $`S_{n-1}`$ 同分布，并且与 $`Y`$ 独立。

（4）记 $`R=Y/(nY+T)`$。对 $`0<r<1/n`$，由独立性，


$`\displaystyle \mathbb P(R>r)=\mathbb E\exp\left(-\frac{nr}{1-nr}T\right)=(1-nr)^{n-1}.`$


因此


$`\displaystyle \boxed{f_R(r)=n(n-1)(1-nr)^{n-2}\mathbf1_{\{0<r<1/n\}}}.`$


若 $`n=1`$，则 $`Y=S_1`$、$`T=0`$，且 $`Y/S_1\equiv1`$，为点质量分布，没有通常的 Lebesgue 概率密度；第三问可将 $`S_0`$ 理解为 $`0`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（数学类高年级组）原卷第13,14页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（数学类高年级组）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%AB%98%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pf890ebc94df4ba-q12.md) · [本卷下一题](pf890ebc94df4ba-q14.md) · [返回试卷](../papers/pf890ebc94df4ba.md)

题目 ID：`pf890ebc94df4ba-q13`
