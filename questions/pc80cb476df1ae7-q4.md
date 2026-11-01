# 第4届 初赛 · 数学类 · 四、

[全部题目](README.md) · [所属试卷](../papers/pc80cb476df1ae7.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：四、

专题：[二次型与正定矩阵](../topics/linear-quadratic.md) · [特征值与矩阵相似](../topics/linear-eigen.md)

## 题目

设 $`A,B,C`$ 均为 $`n`$ 阶正定矩阵，$`P(t)=At^2+Bt+C`$，$`f(t)=\det P(t)`$，其中 $`t`$ 为复变量。若 $`\lambda`$ 是 $`f`$ 的根，证明 $`\operatorname{Re}\lambda<0`$。

<details>
<summary>展开参考解答</summary>

因 $`P(\lambda)`$ 奇异，存在非零复列向量 $`v`$，使 $`P(\lambda)v=0`$。左乘共轭转置 $`v^*`$，得到


```math
a\lambda^2+b\lambda+c=0,\qquad a=v^*Av>0,\ b=v^*Bv>0,\ c=v^*Cv>0.
```


这里正定矩阵按通常含义为实对称正定矩阵，所以这三个数均为正实数。若判别式非负，两根为负实数，因为和为 $`-b/a<0`$、积为 $`c/a>0`$；若判别式为负，两根的实部为 $`-b/(2a)<0`$。因此所给 $`\lambda`$ 的实部严格小于零。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc80cb476df1ae7.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc80cb476df1ae7-q3.md) · [本卷下一题](pc80cb476df1ae7-q5.md) · [返回试卷](../papers/pc80cb476df1ae7.md)

题目 ID：`pc80cb476df1ae7-q4`
