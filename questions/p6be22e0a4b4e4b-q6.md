# 第14届 初赛 · 数学B类 · 六、

[全部题目](README.md) · [所属试卷](../papers/p6be22e0a4b4e4b.md) · [专题目录](../topics/README.md)

归档年份：2022 · 解答题 · 题号：六、

专题：[不等式证明与导数应用](../topics/onevar-inequality.md)

## 题目

证明：（1）对任意 $`0<a<1`$，存在唯一 $`b>1`$ 满足 $`a-\ln a=b-\ln b`$；（2）该数对满足 $`ab<1`$；（3）满足 $`b+\ln a>1`$。

<details>
<summary>展开参考解答</summary>

令 $`\phi(t)=t-\ln t`$。它在 $`(0,1]`$ 上严格递减、在 $`[1,\infty)`$ 上严格递增，两段值域均为 $`[1,\infty)`$，故（1）成立。

（2）令 $`h(a)=\phi(1/a)-\phi(a)`$，则 $`h(1)=0`$，且 $`h'(a)=-(a-1)^2/a^2<0`$。所以 $`h(a)>0\ (a<1)`$。由 $`\phi`$ 在大于 $`1`$ 处递增，$`\phi(b)=\phi(a)<\phi(1/a)`$ 给出 $`b<1/a`$。

（3）令 $`s=-\ln a>0`$。因 $`e^s>1+s`$，函数 $`\ln(1+s)-1+e^{-s}`$ 的导数为 $`1/(1+s)-e^{-s}>0`$，故 $`\ln(1+s)>1-e^{-s}`$。因此


$`\displaystyle \phi(1+s)-\phi(a)=1-a-\ln(1+s)<0.`$


递增性给出 $`b>1+s=1-\ln a`$，即所证。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐图核对原卷及参考答案 p6be22e0a4b4e4b.pdf，2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](p6be22e0a4b4e4b-q5.md) · [返回试卷](../papers/p6be22e0a4b4e4b.md)

题目 ID：`p6be22e0a4b4e4b-q6`
