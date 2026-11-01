# 第5届 初赛 · 非数学类 · 四、

[全部题目](README.md) · [所属试卷](../papers/p01c4aeceafa9c4.md) · [专题目录](../topics/README.md)

归档年份：2013 · 解答题 · 题号：四、

专题：[不等式证明与导数应用](../topics/onevar-inequality.md) · [定积分及其性质](../topics/definite.md)

## 题目

设 $`|f(x)|\le\pi`$、$`f^{\prime}(x)\ge m>0`$（$`a\le x\le b`$）。证明


```math
\left|\int_a^b\sin f(x)\,dx\right|\le\frac2m.
```

<details>
<summary>展开参考解答</summary>

由 $`f^{\prime}\ge m>0`$，函数 $`f`$ 严格递增。记 $`A=f(a)`$、$`B=f(b)`$，其反函数为 $`\varphi`$，则


```math
-\pi\le A\le B\le\pi,\qquad 0<\varphi^{\prime}(t)=\frac1{f^{\prime}(\varphi(t))}\le\frac1m.
```


令 $`t=f(x)`$，原积分化为 $`\int_A^B\varphi^{\prime}(t)\sin t\,dt`$。其中正半轴上的部分记为 $`P`$，负半轴上的部分记为 $`N`$。由于 $`\sin t`$ 在 $`[0,\pi]`$ 非负、在 $`[-\pi,0]`$ 非正，


```math
0\le P\le\frac1m\int_0^\pi\sin t\,dt=\frac2m,\qquad -\frac2m\le N\le0.
```


所以 $`-2/m\le P+N\le2/m`$，即得所证不等式。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐题核对原题与参考答案图片；p01c4aeceafa9c4.pdf；2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882013%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p01c4aeceafa9c4-q6.md) · [本卷下一题](p01c4aeceafa9c4-q8.md) · [返回试卷](../papers/p01c4aeceafa9c4.md)

题目 ID：`p01c4aeceafa9c4-q7`
