# 第4届 决赛 · 数学类 · 三、

[全部题目](README.md) · [所属试卷](../papers/p0e380fcfeb11b6.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：三、

专题：[行列式与线性方程组](../topics/linear-det.md)

## 题目

设 $`n`$ 阶实矩阵 $`A`$ 的每个元素绝对值均为 $`2`$。证明 $`n\ge3`$ 时


```math
|\det A|\le\frac13\,2^{n+1}n!.
```

<details>
<summary>展开参考解答</summary>

先证 $`n=3`$。令 $`B=A/2`$，则 $`B`$ 的元素均为 $`\pm1`$。三阶行列式展开的六个带符号乘积各为 $`\pm1`$，且六项乘积为 $`-1`$，所以负项数为奇数，其和只能为 $`4,0,-4`$。故 $`|\det A|=8|\det B|\le32=(1/3)2^4\cdot3!`$。

假设结论对 $`n-1`$ 阶成立。沿 $`A`$ 的第一行展开，每个子式仍由 $`\pm2`$ 组成，由归纳假设，


```math
|\det A|\le\sum_{j=1}^n2|M_{1j}|\le2n\cdot\frac13\,2^n(n-1)!=\frac13\,2^{n+1}n!.
```


由数学归纳法，结论成立。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p0e380fcfeb11b6.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC4%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p0e380fcfeb11b6-q2.md) · [本卷下一题](p0e380fcfeb11b6-q4.md) · [返回试卷](../papers/p0e380fcfeb11b6.md)

题目 ID：`p0e380fcfeb11b6-q3`
