# 第16届 决赛 · 非数学A类 · 五

[全部题目](README.md) · [所属试卷](../papers/pa3ce865a0a2b5c.md) · [专题目录](../topics/README.md)

归档年份：2025 · 证明题 · 题号：五

专题：[二次型与正定矩阵](../topics/linear-quadratic.md) · [行列式与线性方程组](../topics/linear-det.md)

## 题目

设 $`A,B`$ 为 $`n`$ 阶实对称矩阵，证明：

（1）若 $`A`$ 正定，则存在可逆矩阵 $`P`$，使 $`P^{\mathsf T}AP=I`$、$`P^{\mathsf T}BP=D`$，其中 $`D`$ 为对角矩阵；

（2）若 $`A,B`$ 均正定，则对任意 $`\alpha\in(0,1)`$，


```math
\ln\det(\alpha A+(1-\alpha)B)\ge\alpha\ln\det A+(1-\alpha)\ln\det B.
```

<details>
<summary>展开参考解答</summary>

（1）取 $`H=A^{-1/2}`$。实对称矩阵 $`H^{\mathsf T}BH`$ 可由正交矩阵 $`Q`$ 对角化，故 $`P=HQ`$ 满足要求。

（2）在（1）中 $`D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)`$，且 $`\lambda_i>0`$。令 $`S=P^{-1}`$，则 $`A=S^{\mathsf T}S`$、$`B=S^{\mathsf T}DS`$。利用 $`\ln`$ 的凹性，


```math
\begin{aligned}\ln\det(\alpha A+(1-\alpha)B)&=2\ln|\det S|+\sum_i\ln(\alpha+(1-\alpha)\lambda_i)\\&\ge2\ln|\det S|+(1-\alpha)\sum_i\ln\lambda_i\\&=\alpha\ln\det A+(1-\alpha)\ln\det B.\end{aligned}
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（非数学A类）原卷第7页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（非数学A类）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6A%E7%B1%BB%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pa3ce865a0a2b5c-q8.md) · [本卷下一题](pa3ce865a0a2b5c-q10.md) · [返回试卷](../papers/pa3ce865a0a2b5c.md)

题目 ID：`pa3ce865a0a2b5c-q9`
