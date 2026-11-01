# 第3届 决赛 · 数学类 · 六、

[全部题目](README.md) · [所属试卷](../papers/peabc6d53b9b491.md) · [专题目录](../topics/README.md)

归档年份：2012 · 解答题 · 题号：六、

专题：[向量空间与线性映射](../topics/linear-space.md) · [矩阵及其运算](../topics/linear-matrix.md)

## 题目

设 $`\{A_i\}_{i\in I}`$、$`\{B_i\}_{i\in I}`$ 是数域 $`F`$ 上的两组矩阵。如果存在与 $`i`$ 无关的可逆矩阵 $`P\in M_n(F)`$，使 $`P^{-1}A_iP=B_i`$ 对所有 $`i`$ 成立，称两组矩阵在 $`F`$ 上相似。

证明：若两组有理矩阵在 $`\mathbb R`$ 上相似，则它们在 $`\mathbb Q`$ 上也相似。

<details>
<summary>展开参考解答</summary>

考虑线性方程组 $`A_iT-TB_i=0`$（$`i\in I`$）。其系数为有理数；即使指标集无限，所有线性约束在有限维空间中也可取有限个独立约束作为基。因此实解空间可取一组有理矩阵基 $`T_1,\ldots,T_r`$。

已知存在可逆实解 $`P=\sum_jt_jT_j`$，故多项式 $`D(t_1,\ldots,t_r)=\det(\sum_jt_jT_j)`$ 在该点非零。由行列式连续及有理点稠密性，可取有理数 $`q_j`$ 足够接近 $`t_j`$，使 $`D(q_1,\ldots,q_r)\ne0`$。

于是 $`Q=\sum_jq_jT_j`$ 为可逆有理矩阵，并满足所有 $`A_iQ=QB_i`$，即 $`Q^{-1}A_iQ=B_i`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；peabc6d53b9b491.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC3%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882012%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](peabc6d53b9b491-q5.md) · [本卷下一题](peabc6d53b9b491-q7.md) · [返回试卷](../papers/peabc6d53b9b491.md)

题目 ID：`peabc6d53b9b491-q6`
