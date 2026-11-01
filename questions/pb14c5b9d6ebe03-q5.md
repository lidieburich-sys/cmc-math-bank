# 第15届 决赛 · 数学类低年级组 · 五、

[全部题目](README.md) · [所属试卷](../papers/pb14c5b9d6ebe03.md) · [专题目录](../topics/README.md)

归档年份：2024 · 解答题 · 题号：五、

专题：[特征值与矩阵相似](../topics/linear-eigen.md)

## 题目

设 $`A`$ 为 $`n\ge3`$ 阶实可逆矩阵，并且对 $`k=1,2,\ldots,n!`$ 都有 $`A^k`$ 与 $`A`$ 相似。证明对每个正整数 $`k`$，都有 $`A^k`$ 与 $`A`$ 相似。

<details>
<summary>展开参考解答</summary>

设 $`A`$ 有 $`s\le n`$ 个不同的特征值。对任一特征值 $`\lambda\ne0`$，$`\lambda,\lambda^2,\ldots,\lambda^{s+1}`$ 都在该有限特征值集合中，因为 $`s+1\le n!`$。由抽屉原理，存在 $`1\le p<q\le s+1`$，使 $`\lambda^{q-p}=1`$。因此每个特征值的阶都不超过 $`s`$。这些阶的最小公倍数 $`m`$ 整除 $`n!`$，故 $`1\le m\le n!`$，所有 $`\lambda^m=1`$。由 $`A^m\sim A`$，得到 $`A`$ 的全部特征值均为 1。

于是 $`A`$ 具有实 Jordan 形，其各块为 $`J=I+N`$。对任意正整数 $`k`$，


$$
J^k-I=N\bigl(kI+\binom{k}{2}N+\cdots\bigr).
$$


括号中矩阵可逆且与 $`N`$ 交换，故 $`J^k-I`$ 与 $`N`$ 有相同的各阶幂秩，也就有相同的幂零 Jordan 块大小。因此 $`J^k\sim J`$，对各块取直和即得 $`\boxed{A^k\sim A}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pb14c5b9d6ebe03.pdf 第7—8页第五题，保留所有条件与小问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

---

[本卷上一题](pb14c5b9d6ebe03-q4.md) · [本卷下一题](pb14c5b9d6ebe03-q6.md) · [返回试卷](../papers/pb14c5b9d6ebe03.md)

题目 ID：`pb14c5b9d6ebe03-q5`
