# 第14届 第一次补赛 · 数学A类 · 四

[全部题目](README.md) · [所属试卷](../papers/p1f77bff27dd10f.md) · [专题目录](../topics/README.md)

归档年份：2022 · 证明题 · 题号：四

专题：[矩阵及其运算](../topics/linear-matrix.md) · [行列式与线性方程组](../topics/linear-det.md) · [特征值与矩阵相似](../topics/linear-eigen.md)

## 题目

设 $`A,B`$ 为数域 $`K`$ 上的两个 $`n`$ 阶矩阵，且存在正整数 $`m`$ 使


```math
AB-BA=A^m.
```


证明：对任意正整数 $`k`$，$`\det(A^k+E)=1`$，其中 $`E`$ 是 $`n`$ 阶单位矩阵。

<details>
<summary>展开参考解答</summary>

对任意整数 $`r\ge0`$，由迹的循环不变性，


```math
\begin{aligned}
\operatorname{tr}(A^{m+r})
&=\operatorname{tr}\bigl(A^r(AB-BA)\bigr)\\
&=\operatorname{tr}(A^{r+1}B)-\operatorname{tr}(A^rBA)=0.
\end{aligned}
```


令 $`C=A^m`$，则 $`\operatorname{tr}(C^j)=0`$ 对每个 $`j\ge1`$ 成立。设 $`C`$ 的特征多项式为


```math
\chi_C(t)=t^n+c_1t^{n-1}+\cdots+c_n.
```


牛顿恒等式给出


```math
j c_j+\sum_{i=1}^jc_{j-i}\operatorname{tr}(C^i)=0\quad(1\le j\le n),\qquad c_0=1.
```


数域特征为零，故 $`c_1=\cdots=c_n=0`$。由 Cayley--Hamilton 定理，$`C^n=0`$，因而 $`A^{mn}=0`$。所以 $`A`$ 及其每个正整数次幂均幂零，$`A^k`$ 的全部特征值都是零，从而


```math
\boxed{\det(E+A^k)=1.}
```

</details>

## 来源与核对说明

题库核对标记：公开题文核对·重排题答。

原档案处理标记：公开题文重排（`public-transcription`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：第14届第一次补赛（2022年）数学A类，第四题。题文：安云野逸《CMC数学类题》公开页面第1.21/1.22节（印刷页25/26），https://www.scribd.com/document/910194838/CMC数学类题-安云野逸。仅使用正常公开可见题文，未下载或解除受限预览。解答独立推导；本地p1f77bff27dd10f.pdf为本批题文重排，不是原卷扫描。 公开汇编题文正常可见；本地PDF为题文重排与独立解答，不是官方原卷或官方参考解答。

解答来源：独立数学推导并复核。

题面依据公开题文重排，解答包含独立推导；不是原卷扫描件。

- [来源 1 · www.scribd.com](https://www.scribd.com/document/910194838/CMC%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%A2%98-%E5%AE%89%E4%BA%91%E9%87%8E%E9%80%B8)
- [来源 2 · m.saikr.com](https://m.saikr.com/a/478181)
- [来源 3 · gdjpkc.xmu.edu.cn](https://gdjpkc.xmu.edu.cn/DocumentList.aspx?cID=22&dID=383)

---

[本卷上一题](p1f77bff27dd10f-q3.md) · [本卷下一题](p1f77bff27dd10f-q5.md) · [返回试卷](../papers/p1f77bff27dd10f.md)

题目 ID：`p1f77bff27dd10f-q4`
