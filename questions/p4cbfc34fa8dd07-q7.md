# 第9届 决赛 · 数学类低年级组 · 四、

[全部题目](README.md) · [所属试卷](../papers/p4cbfc34fa8dd07.md) · [专题目录](../topics/README.md)

归档年份：2018 · 解答题 · 题号：四、

专题：[定积分及其性质](../topics/definite.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

设 $`f\in C^2[0,1]`$，且 $`f(0)f(1)\ge0`$。证明


```math
\int_0^1|f^{\prime}(x)|\,dx\le2\int_0^1|f(x)|\,dx+\int_0^1|f^{\prime\prime}(x)|\,dx.
```

<details>
<summary>展开参考解答</summary>

记 $`M=\max|f^{\prime}|`$、$`m=\min|f^{\prime}|`$。由导数的全变差估计，


$`\displaystyle M-m\le\int_0^1|f^{\prime\prime}(x)|\,dx,\qquad\int_0^1|f^{\prime}|\le M.`$


只需证 $`m\le2\int_0^1|f|`$。若 $`m=0`$，显然成立。否则 $`f^{\prime}`$ 连续且不变号，必要时将 $`f`$ 换成 $`-f`$，可设 $`f^{\prime}\ge m>0`$。

由端点同号条件，或者 $`f(0)\ge0`$，此时 $`f(x)\ge mx`$，或者 $`f(1)\le0`$，此时 $`-f(x)\ge m(1-x)`$。两种情况均得到 $`\int_0^1|f|\ge m/2`$。因此


$`\displaystyle \int_0^1|f^{\prime}|\le m+(M-m)\le2\int_0^1|f|+\int_0^1|f^{\prime\prime}|,`$


证毕。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看完整原卷PDF、逐图核对题目及全部参考答案；p4cbfc34fa8dd07.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC9%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%80%E3%80%81%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882018%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p4cbfc34fa8dd07-q6.md) · [本卷下一题](p4cbfc34fa8dd07-q8.md) · [返回试卷](../papers/p4cbfc34fa8dd07.md)

题目 ID：`p4cbfc34fa8dd07-q7`
