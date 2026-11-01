# 第1届 初赛 · 数学类 · 二、

[全部题目](README.md) · [所属试卷](../papers/pc25d6cbba9a8da.md) · [专题目录](../topics/README.md)

归档年份：2009 · 解答题 · 题号：二、

专题：[矩阵及其运算](../topics/linear-matrix.md) · [向量空间与线性映射](../topics/linear-space.md)

## 题目

设 $`\mathbb C^{n\times n}`$ 是所有 $`n`$ 阶复矩阵组成的复线性空间，


```math
F=\begin{pmatrix}
0&0&\cdots&0&-a_n\\
1&0&\cdots&0&-a_{n-1}\\
0&1&\cdots&0&-a_{n-2}\\
\vdots&\vdots&\ddots&\vdots&\vdots\\
0&0&\cdots&1&-a_1
\end{pmatrix}.
```


（1）若 $`A=(a_{ij})`$ 满足 $`AF=FA`$，证明


```math
A=a_{n1}F^{n-1}+a_{n-1,1}F^{n-2}+\cdots+a_{21}F+a_{11}I.
```


（2）求子空间 $`C(F)=\{X:FX=XF\}`$ 的维数。

<details>
<summary>展开参考解答</summary>

（1）记标准基为 $`e_1,\ldots,e_n`$。由 $`F`$ 的形式，$`F^{j-1}e_1=e_j`$（$`1\le j\le n`$）。令


$`\displaystyle M=\sum_{k=0}^{n-1}a_{k+1,1}F^k.`$


则 $`Me_1=Ae_1`$，且 $`M`$ 与 $`F`$ 交换。因此对每个 $`j`$，


$`\displaystyle Me_j=MF^{j-1}e_1=F^{j-1}Me_1 =F^{j-1}Ae_1=AF^{j-1}e_1=Ae_j.`$


故 $`M=A`$。

（2）由（1），$`C(F)=\operatorname{span}\{I,F,\ldots,F^{n-1}\}`$。若 $`\sum_{k=0}^{n-1}c_kF^k=0`$，两边乘 $`e_1`$，得 $`\sum_{k=0}^{n-1}c_ke_{k+1}=0`$，所以所有 $`c_k=0`$。这 $`n`$ 个矩阵线性无关，故 $`\boxed{\dim C(F)=n}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc25d6cbba9a8da.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc25d6cbba9a8da-q1.md) · [本卷下一题](pc25d6cbba9a8da-q3.md) · [返回试卷](../papers/pc25d6cbba9a8da.md)

题目 ID：`pc25d6cbba9a8da-q2`
