# 第9届 决赛 · 数学类低年级组 · 五、

[全部题目](README.md) · [所属试卷](../papers/p4cbfc34fa8dd07.md) · [专题目录](../topics/README.md)

归档年份：2018 · 解答题 · 题号：五、

专题：[幂级数与函数展开](../topics/power-series.md) · [反常积分](../topics/improper.md) · [矩阵及其运算](../topics/linear-matrix.md)

## 题目

设 $`1<\alpha<2`$，$`(1-x)^\alpha=\sum_{k=0}^\infty a_kx^k`$，$`A`$ 为 $`n`$ 阶实幂零矩阵。对 $`0\le x<1`$，定义


```math
G(x)=(g_{ij}(x))=\sum_{k=0}^\infty a_k(xI+A)^k.
```


证明所有广义积分 $`\int_0^1g_{ij}(x)\,dx`$ 均存在的充要条件为 $`A^3=0`$。

<details>
<summary>展开参考解答</summary>

记 $`F(x)=(1-x)^\alpha`$，设 $`m`$ 为 $`A^m\ne0`$、$`A^{m+1}=0`$ 的最大指数（若 $`A=0`$，取 $`m=0`$）。展开矩阵幂并对标量幂级数逐项求导，得到有限和


$$
G(x)=\sum_{j=0}^m\frac{F^{(j)}(x)}{j!}A^j=\sum_{j=0}^m\frac{(-1)^j\alpha(\alpha-1)\cdots(\alpha-j+1)}{j!}(1-x)^{\alpha-j}A^j.
$$


若 $`m\le2`$，每项指数均大于 $`-1`$，故全部元素均可积。

若 $`m\ge3`$，取 $`(A^m)_{ij}\ne0`$。由于 $`\alpha`$ 不是整数，最高项系数非零，此元素满足


$$
g_{ij}(x)\sim c(1-x)^{\alpha-m},\qquad c\ne0,\quad x\to1^-.
$$


而 $`\alpha-m<-1`$，其广义积分发散。因此全部积分存在恰等价于 $`m\le2`$，也就是 $`\boxed{A^3=0}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p4cbfc34fa8dd07.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p4cbfc34fa8dd07-q7.md) · [本卷下一题](p4cbfc34fa8dd07-q9.md) · [返回试卷](../papers/p4cbfc34fa8dd07.md)

题目 ID：`p4cbfc34fa8dd07-q8`
