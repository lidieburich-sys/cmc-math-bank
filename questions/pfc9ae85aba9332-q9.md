# 第16届 决赛 · 数学类低年级组 · 五

[全部题目](README.md) · [所属试卷](../papers/pfc9ae85aba9332.md) · [专题目录](../topics/README.md)

归档年份：2025 · 计算题 · 题号：五

专题：[行列式与线性方程组](../topics/linear-det.md) · [几何与拓展问题](../topics/geometry.md)

## 题目

设


```math
M=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix},\quad N=\begin{pmatrix}a_{21}&a_{22}\\a_{31}&a_{32}\end{pmatrix},\quad P=\begin{pmatrix}a_{31}&a_{32}\\a_{11}&a_{12}\end{pmatrix},\quad Q=\begin{pmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{pmatrix}.
```


已知 $`\det M=12`$、$`\det N=1`$、$`\det P=2`$、$`\det Q=3`$。求三条直线 $`L_i:a_{i1}x+a_{i2}y+a_{i3}=0`$（$`i=1,2,3`$）所围三角形的面积。

<details>
<summary>展开参考解答</summary>

三个二阶行列式非零，故三条直线两两相交；$`\det M\ne0`$，故不共点。设 $`L_i`$ 的对顶点为 $`(x_i,y_i)`$，并令


$`\displaystyle X=\begin{pmatrix}x_1&x_2&x_3\\y_1&y_2&y_3\\1&1&1\end{pmatrix}.`$


则 $`MX=\mathop{\mathrm{diag}}\nolimits (d_1,d_2,d_3)`$。由 Cramer 法则，第三个坐标为 $`1`$ 给出 $`d_1=\det M/\det N=12`$，同理 $`d_2=6,d_3=4`$。于是 $`\det X=12\cdot6\cdot4/12=24`$，故面积为 $`\boxed{\tfrac12|\det X|=12}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（数学类低年级组）原卷第6,7页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（数学类低年级组）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pfc9ae85aba9332-q8.md) · [本卷下一题](pfc9ae85aba9332-q10.md) · [返回试卷](../papers/pfc9ae85aba9332.md)

题目 ID：`pfc9ae85aba9332-q9`
