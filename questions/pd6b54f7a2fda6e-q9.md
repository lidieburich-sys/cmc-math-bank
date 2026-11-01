# 第7届 初赛 · 非数学类 · 五、

[全部题目](README.md) · [所属试卷](../papers/pd6b54f7a2fda6e.md) · [专题目录](../topics/README.md)

归档年份：2015 · 解答题 · 题号：五、

专题：[连续性与一致连续](../topics/continuity.md) · [定积分及其性质](../topics/definite.md)

## 题目

设 $`f`$ 在 $`[0,1]`$ 上连续，且


```math
\int_0^1f(x)\,dx=0,\qquad\int_0^1xf(x)\,dx=1.
```


证明：（1）存在 $`x_0\in[0,1]`$，使 $`|f(x_0)|>4`$；（2）存在 $`x_1\in[0,1]`$，使 $`|f(x_1)|=4`$。

<details>
<summary>展开参考解答</summary>

（1）若处处 $`|f|\le4`$，则


```math
1=\int_0^1\left(x-\frac12\right)f(x)\,dx
\le\int_0^1\left|x-\frac12\right||f(x)|\,dx
\le4\int_0^1\left|x-\frac12\right|\,dx=1.
```


于是 $`\int_0^1|x-\tfrac12|(4-|f(x)|)\,dx=0`$。非负连续被积函数只能恒为零，结合连续性得 $`|f|\equiv4`$。连续函数不能在 $`4`$ 与 $`-4`$ 之间跳跃，故 $`f\equiv4`$ 或 $`f\equiv-4`$，与积分为零矛盾。

（2）由 $`\int_0^1f=0`$ 与连续性，存在 $`c\in[0,1]`$ 使 $`f(c)=0`$。结合（1），对连续函数 $`|f|`$ 使用介值定理，即得某点的值为 $`4`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对 2015 非数学类初赛原卷与参考答案 PDF（原题页及全部答案页），2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882015%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC7%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882015%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pd6b54f7a2fda6e-q8.md) · [本卷下一题](pd6b54f7a2fda6e-q10.md) · [返回试卷](../papers/pd6b54f7a2fda6e.md)

题目 ID：`pd6b54f7a2fda6e-q9`
