# 第8届 初赛 · 数学类 · 五、

[全部题目](README.md) · [所属试卷](../papers/p4e392f59dadff9.md) · [专题目录](../topics/README.md)

归档年份：2016 · 解答题 · 题号：五、

专题：[一阶微分方程](../topics/ode-first.md) · [不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

设 $`\alpha>1`$。证明不存在 $`[0,\infty)`$ 上的正可导函数 $`f`$，使任意 $`x\ge0`$ 都有 $`f'(x)\ge f(x)^\alpha`$。

<details>
<summary>展开参考解答</summary>

若存在，则因 $`f>0`$，


```math
\frac d{dx}f(x)^{1-\alpha}=(1-\alpha)f^{-\alpha}f'\le1-\alpha.
```


在 $`[0,x]`$ 上积分（也可对两边差应用中值定理），得


```math
0<f(x)^{1-\alpha}\le f(0)^{1-\alpha}-(\alpha-1)x.
```


当 $`x>f(0)^{1-\alpha}/(\alpha-1)`$ 时右边为负，矛盾。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 p4e392f59dadff9.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882016%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882016%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p4e392f59dadff9-q4.md) · [本卷下一题](p4e392f59dadff9-q6.md) · [返回试卷](../papers/p4e392f59dadff9.md)

题目 ID：`p4e392f59dadff9-q5`
