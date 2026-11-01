# 第8届 初赛 · 数学类 · 四、

[全部题目](README.md) · [所属试卷](../papers/p4e392f59dadff9.md) · [专题目录](../topics/README.md)

归档年份：2016 · 解答题 · 题号：四、

专题：[数列极限](../topics/sequence-limits.md) · [定积分及其性质](../topics/definite.md)

## 题目

设 $`f_0,f_1`$ 是 $`[0,1]`$ 上的正连续函数，满足 $`\int_0^1f_0\le\int_0^1f_1`$。定义


```math
f_{n+1}(x)=\frac{2f_n(x)^2}{f_n(x)+f_{n-1}(x)},\qquad n\ge1.
```


证明 $`a_n=\int_0^1f_n(x)dx`$ 单调递增且收敛。

<details>
<summary>展开参考解答</summary>

直接整理得


```math
f_{n+1}-\frac32f_n+\frac12f_{n-1}
=\frac{(f_n-f_{n-1})^2}{2(f_n+f_{n-1})}\ge0.
```


积分后有 $`a_{n+1}-a_n\ge(a_n-a_{n-1})/2`$。由 $`a_1\ge a_0`$ 归纳知 $`a_n`$ 单调递增。

由正连续性，可取 $`K\ge1`$ 使 $`f_1\le Kf_0`$。令 $`c_1=K`$、$`c_{n+1}=2c_n/(c_n+1)`$，则 $`c_n\ge1`$。因函数 $`2r/(1+r)`$ 递增，由比值递推归纳得 $`f_n\le c_nf_{n-1}`$，所以 $`a_{n+1}\le c_{n+1}a_n`$。进而


```math
c_{n+1}a_{n+1}\le c_{n+1}^2a_n
=\frac{4c_n^2}{(c_n+1)^2}a_n\le c_na_n.
```


所以 $`a_n\le c_na_n\le Ka_1`$，上界与 $`n`$ 无关。单调有界，故收敛。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 p4e392f59dadff9.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882016%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC8%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882016%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](p4e392f59dadff9-q3.md) · [本卷下一题](p4e392f59dadff9-q5.md) · [返回试卷](../papers/p4e392f59dadff9.md)

题目 ID：`p4e392f59dadff9-q4`
