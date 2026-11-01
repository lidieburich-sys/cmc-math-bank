# 第14届 第一次补赛 · 数学A类 · 五

[全部题目](README.md) · [所属试卷](../papers/p1f77bff27dd10f.md) · [专题目录](../topics/README.md)

归档年份：2022 · 证明题 · 题号：五

专题：[数列极限](../topics/sequence-limits.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

设 $`x_0,y_0\in\mathbb R`$，对 $`n\ge0`$ 定义


```math
\begin{cases}
x_{n+1}=\dfrac1{x_n^2+x_ny_n+2y_n^2+1},\\[4pt]
y_{n+1}=\dfrac1{2x_n^2+x_ny_n+y_n^2+1}.
\end{cases}
```


证明：（1）$`\lim_{n\to\infty}(x_n-y_n)=0`$；（2）数列 $`\{x_n\}`$ 收敛。

<details>
<summary>展开参考解答</summary>

两个分母中的二次型均正定，故 $`0<x_n,y_n\le1`$ 对 $`n\ge1`$ 成立。

（1）记 $`D_1=1+x_n^2+x_ny_n+2y_n^2`$、$`D_2=1+2x_n^2+x_ny_n+y_n^2`$、$`s=x_n+y_n>0`$。则


$`\displaystyle |x_{n+1}-y_{n+1}|=|x_n-y_n|\frac{s}{D_1D_2}.`$


因为 $`D_1D_2\ge1+3(x_n^2+y_n^2)+2x_ny_n\ge1+s^2\ge2s`$，所以


$`\displaystyle |x_{n+1}-y_{n+1}|\le\tfrac12|x_n-y_n|.`$


从而差以几何速度趋于零。

（2）令 $`h(t)=1/(1+4t^2)`$，并定义


$`\displaystyle a_0=0,\ b_0=1,\qquad a_{j+1}=h(b_j),\quad b_{j+1}=h(a_j).`$


$`h`$ 在 $`[0,1]`$ 上递减。由归纳法，区间 $`[a_j,b_j]`$ 逐次嵌套，且 $`x_{j+1},y_{j+1}\in[a_j,b_j]`$：若两数都在 $`[a_j,b_j]`$，则递推分母介于 $`1+4a_j^2`$ 与 $`1+4b_j^2`$ 之间。

故 $`a_j\uparrow a`$、$`b_j\downarrow b`$，其中 $`0<a\le b`$，且


$`\displaystyle a+4ab^2=1,\qquad b+4ba^2=1.`$


相减得 $`(a-b)(1-4ab)=0`$。若 $`a\ne b`$，则 $`ab=1/4`$，再代回得 $`a+b=1`$，这又迫使 $`a=b=1/2`$，矛盾。因此 $`a=b`$，满足 $`4a^3+a=1`$，其唯一非负解为 $`1/2`$。由夹逼定理，


$`\displaystyle \boxed{x_n\to\tfrac12,\qquad y_n\to\tfrac12.}`$

</details>

## 来源与核对说明

题库核对标记：公开题文核对·重排题答。

原档案处理标记：公开题文重排（`public-transcription`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：第14届第一次补赛（2022年）数学A类，第五题。题文：安云野逸《CMC数学类题》公开页面第1.21/1.22节（印刷页25/26），https://www.scribd.com/document/910194838/CMC数学类题-安云野逸。仅使用正常公开可见题文，未下载或解除受限预览。解答独立推导；本地p1f77bff27dd10f.pdf为本批题文重排，不是原卷扫描。 公开汇编题文正常可见；本地PDF为题文重排与独立解答，不是官方原卷或官方参考解答。

解答来源：独立数学推导并复核。

题面依据公开题文重排，解答包含独立推导；不是原卷扫描件。

- [来源 1 · www.scribd.com](https://www.scribd.com/document/910194838/CMC%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%A2%98-%E5%AE%89%E4%BA%91%E9%87%8E%E9%80%B8)
- [来源 2 · m.saikr.com](https://m.saikr.com/a/478181)
- [来源 3 · gdjpkc.xmu.edu.cn](https://gdjpkc.xmu.edu.cn/DocumentList.aspx?cID=22&dID=383)

---

[本卷上一题](p1f77bff27dd10f-q4.md) · [本卷下一题](p1f77bff27dd10f-q6.md) · [返回试卷](../papers/p1f77bff27dd10f.md)

题目 ID：`p1f77bff27dd10f-q5`
