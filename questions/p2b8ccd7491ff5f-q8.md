# 第17届 决赛 · 数学类低年级组 · 五

[全部题目](README.md) · [所属试卷](../papers/p2b8ccd7491ff5f.md) · [专题目录](../topics/README.md)

归档年份：2026 · 解答题 · 题号：五

专题：[行列式与线性方程组](../topics/linear-det.md) · [矩阵及其运算](../topics/linear-matrix.md) · [二次型与正定矩阵](../topics/linear-quadratic.md)

## 题目

设 $`A,B`$ 为 $`n`$ 阶实矩阵（$`n\ge2`$），$`E`$ 为单位矩阵，$`\det(A-B)=1`$，且 $`AA^T-E`$、$`BB^T-E`$ 都是正定矩阵。
（1）证明


```math
\begin{aligned}
&(E-AB^T)(E-BB^T)^{-1}(E-AB^T)^T-(E-AA^T)\\
&=(E-BB^T)^{-1}-E-AB^T(E-BB^T)^{-1}-(E-BB^T)^{-1}BA^T\\
&\quad+A\bigl(E+B^T(E-BB^T)^{-1}B\bigr)A^T.
\end{aligned}
```


（2）证明


```math
\det(E-AA^T)\det(E-BB^T)<\det(E-AB^T)^2-1.
```

<details>
<summary>展开参考解答</summary>

（1）令 $`K=(E-BB^T)^{-1}`$。直接展开左边，得


$$
K-AB^TK-KBA^T+AB^TKBA^T-E+AA^T,
$$


合并后即为所需右边。
（2）由 $`BB^T-E>0`$ 可知 $`B^TB-E>0`$。利用恒等式


$$
(E-BB^T)^{-1}=E+B(E-B^TB)^{-1}B^T,\qquad E+B^T(E-BB^T)^{-1}B=(E-B^TB)^{-1},
$$


将（1）整理为


$$
(AA^T-E)+(A-B)(B^TB-E)^{-1}(A-B)^T=(E-AB^T)(BB^T-E)^{-1}(E-AB^T)^T.
$$


左边两项记为 $`P,Q`$，均正定，其中 $`Q>0`$ 用到 $`\det(A-B)=1`$。任意 $`n\ge2`$ 阶正定矩阵满足 $`\det(P+Q)>\det P+\det Q`$：令 $`\mu_i>0`$ 为 $`P^{-1/2}QP^{-1/2}`$ 的特征值，则 $`\prod_i(1+\mu_i)>1+\prod_i\mu_i`$。故对上述等式取行列式并乘以 $`\det(BB^T-E)>0`$，得到


$$
\det(E-AB^T)^2>\det(AA^T-E)\det(BB^T-E)+\det(A-B)^2.
$$


两负号的行列式符号抵消，且 $`\det(A-B)^2=1`$，结论成立。

</details>

## 来源与核对说明

题库核对标记：公开题文核对·重排题答。

原档案处理标记：公开题文重排残本（`public-transcription-partial`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：第17届决赛数学类低年级组公开题文重排残本（缺第二大题）。高年级原卷同题逐图核对，低年级题号由公开自解文本交叉确认。低年级题文线索：https://www.scribd.com/document/1030615002/全国大学生数学竞赛决赛试题。未下载或解除其付费预览。 同题核对：本地高年级原卷 pe86b2c0e9b48f7.pdf。 本地材料 p2b8ccd7491ff5f.pdf 为本批新建题文重排残本，共9页，包含说明页；不是原低卷PDF。 高年级原卷同题逐图核对，低年级题号由公开自解文本交叉确认

解答来源：独立重证；同题部分另与公开高年级参考解交叉核对。

题面依据公开题文重排，解答包含独立推导；不是原卷扫描件。

所属试卷为残本：仅收录可核实的4道独立填空题及第三至第六大题，共8题；第二大题尚缺。此PDF为公开题文重排与独立解答，不是原版低年级卷。

- [来源 1 · www.scribd.com](https://www.scribd.com/document/1030615002/%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98)
- [来源 2 · sjds.net](https://sjds.net/642598.html)
- [来源 3 · www.sjds.net](https://www.sjds.net/a/491562.html)

同题关联：[第17届 决赛 · 数学类高年级 · 三](pe86b2c0e9b48f7-q6.md)。保留各试卷原有入口。

---

[本卷上一题](p2b8ccd7491ff5f-q7.md) · [本卷下一题](p2b8ccd7491ff5f-q9.md) · [返回试卷](../papers/p2b8ccd7491ff5f.md)

题目 ID：`p2b8ccd7491ff5f-q8`
