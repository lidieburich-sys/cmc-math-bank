# 第4届 初赛 · 数学类 · 七、

[全部题目](README.md) · [所属试卷](../papers/pc80cb476df1ae7.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：七、

专题：[矩阵及其运算](../topics/linear-matrix.md) · [特征值与矩阵相似](../topics/linear-eigen.md) · [二次型与正定矩阵](../topics/linear-quadratic.md)

## 题目

设


```math
A=\begin{pmatrix}2&2\\2&a\end{pmatrix},\qquad B=\begin{pmatrix}4&b\\3&1\end{pmatrix}.
```


证明：（1）$`AX=B`$ 有解且 $`BY=A`$ 无解的充要条件是 $`a\ne2,b=4/3`$；（2）$`A`$ 相似于 $`B`$ 的充要条件是 $`a=3,b=2/3`$；（3）$`A`$ 合同于 $`B`$ 的充要条件是 $`a<2,b=3`$。

<details>
<summary>展开参考解答</summary>

（1）若 $`a=2`$，$`A`$ 的列空间为 $`\operatorname{span}(1,1)^{\mathsf T}`$，但 $`B`$ 的第一列 $`(4,3)^{\mathsf T}`$ 不在其中，所以 $`AX=B`$ 无解。若 $`a\ne2`$，则 $`A`$ 可逆，$`AX=B`$ 必有解，而 $`BY=A`$ 有解当且仅当 $`B`$ 满秩。因此所需条件恰为 $`a\ne2`$、$`\det B=4-3b=0`$。

（2）相似必有相同迹与行列式：$`a+2=5`$、$`2a-4=4-3b`$，解得 $`a=3,b=2/3`$。反之，此时两矩阵的特征多项式均为 $`t^2-5t+2`$，有两个不同实根，均相似于同一个对角矩阵，故彼此相似。

（3）$`A`$ 对称，若 $`B=S^{\mathsf T}AS`$ 且 $`S`$ 可逆，则 $`B`$ 必对称，即 $`b=3`$。此时 $`\det B=-5<0`$，惯性指数为一正一负。$`A`$ 的二次型为


$$
2x_1^2+4x_1x_2+ax_2^2=2(x_1+x_2)^2+(a-2)x_2^2.
$$


由惯性定律，二者合同当且仅当 $`a<2`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc80cb476df1ae7.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc80cb476df1ae7-q6.md) · [返回试卷](../papers/pc80cb476df1ae7.md)

题目 ID：`pc80cb476df1ae7-q7`
