# 第16届 决赛 · 数学类高年级组 · 十

[全部题目](README.md) · [所属试卷](../papers/pf890ebc94df4ba.md) · [专题目录](../topics/README.md)

归档年份：2025 · 综合题 · 题号：十

专题：[数值分析与逼近](../topics/numerical-analysis.md) · [定积分及其性质](../topics/definite.md)

## 题目

令 $`L_0(x)=1,L_1(x)=x`$，对 $`n\ge1`$ 定义 Legendre 多项式


```math
L_{n+1}(x)=\frac{2n+1}{n+1}xL_n(x)-\frac n{n+1}L_{n-1}(x).
```


记 $`\delta_{mn}`$ 为 Kronecker 符号。已知


```math
\begin{aligned}\text{(i)}\quad&\int_{-1}^1L_m(x)L_n(x)\,dx=\frac2{2n+1}\delta_{mn},\quad m,n\ge0;\\\text{(ii)}\quad&L_{n-1}'(x)=xL_n'(x)-nL_n(x);\\\text{(iii)}\quad&L_{n+1}'(x)=xL_n'(x)+(n+1)L_n(x).\end{aligned}
```


（1）证明 $`(x^2-1)L_n'(x)=nxL_n(x)-nL_{n-1}(x)`$（$`n\ge1`$）；

（2）证明对 $`i,j\ge1`$，


```math
\int_{-1}^1(1-x^2)L_i'(x)L_j'(x)\,dx=\frac{2i(i+1)}{2i+1}\delta_{ij}.
```


（3）对 $`n\ge1`$，记 $`s_j`$ 为 $`[-1,1]`$ 上的 $`n`$ 个 Gauss 积分点，$`w_j`$ 为对应权重。定义 $`A=(L_i'(s_j))_{n\times n}`$，以及


```math
W=\operatorname{diag}((1-s_1^2)w_1,\ldots,(1-s_n^2)w_n).
```


原题要求证明 $`B=A^{\mathsf T}WA`$ 是对角矩阵。

<details>
<summary>展开参考解答</summary>

（1）将（ii）乘 $`x`$，并减去（iii）中指标换为 $`n-1`$ 的等式，得


$$
x^2L_n'-nxL_n=xL_{n-1}'=L_n'-nL_{n-1},
$$


整理即得结论。

（2）对（1）求导，再由（ii），得到


$$
\bigl((x^2-1)L_i'\bigr)'=i(i+1)L_i.
$$


分部积分的边界项为零，故


$$
\begin{aligned}\int_{-1}^1(1-x^2)L_i'L_j'\,dx&=i(i+1)\int_{-1}^1L_iL_j\,dx\\&=\frac{2i(i+1)}{2i+1}\delta_{ij}.\end{aligned}
$$



（3）按通常 $`A_{ij}=L_i'(s_j)`$ 的定义，原题的转置位置有误，结论不成立。例如 $`n=2`$，取 $`s_1=-1/\sqrt3,s_2=1/\sqrt3`$，$`w_1=w_2=1`$，则


$$
A=\begin{pmatrix}1&1\\-\sqrt3&\sqrt3\end{pmatrix},\quad W=\frac23I,\quad A^{\mathsf T}WA=\begin{pmatrix}8/3&-4/3\\-4/3&8/3\end{pmatrix},
$$


并非对角矩阵。

正确形式为 $`\boxed{AWA^{\mathsf T}\text{ 为对角矩阵}}`$，或者将 $`A`$ 的定义改成 $`A_{ij}=L_j'(s_i)`$ 后保留 $`A^{\mathsf T}WA`$。证明如下：对 $`i\ne j`$，多项式 $`(1-x^2)L_i'L_j'`$ 的次数为 $`i+j\le2n-1`$，由 $`n`$ 点 Gauss 公式的精确性及（2），


$$
(AWA^{\mathsf T})_{ij}=\sum_{k=1}^nw_k(1-s_k^2)L_i'(s_k)L_j'(s_k)=\int_{-1}^1(1-x^2)L_i'L_j'\,dx=0.
$$


故修正后的矩阵确为对角矩阵。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（数学类高年级组）原卷第15,16页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（数学类高年级组）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%AB%98%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pf890ebc94df4ba-q13.md) · [返回试卷](../papers/pf890ebc94df4ba.md)

题目 ID：`pf890ebc94df4ba-q14`
