# 第14届 决赛 · 数学类低年级组 · 六、

[全部题目](README.md) · [所属试卷](../papers/pde0cad4d80e679.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：六、

专题：[反常积分](../topics/improper.md) · [定积分及其性质](../topics/definite.md)

## 题目

设 $`f`$ 为 $`[0,1]`$ 上的可积函数，$`\alpha>0`$。证明有限极限


```math
\lim_{x\to0^+}\frac1x\int_0^x f(t)\,dt
```


存在，当且仅当


```math
\lim_{x\to0^+}\frac1{x^\alpha}\int_0^x t^{\alpha-1}f(t)\,dt
```


存在。

<details>
<summary>展开参考解答</summary>

证明更一般的换权结论。对 $`a,b>0`$，记 $`F_a(x)=\int_0^x t^{a-1}f(t)\,dt`$。若 $`F_a(x)/x^a\to A`$，则分部积分得


$`\displaystyle F_b(x)=x^{b-a}F_a(x)-(b-a)\int_0^x t^{b-a-1}F_a(t)\,dt.`$


由于 $`F_a(t)=At^a+o(t^a)`$，边界项在零点为零，且


$`\displaystyle \frac{F_b(x)}{x^b}\longrightarrow A-\frac{b-a}{b}A=\frac{aA}{b}.`$


其中余项估计为


$`\displaystyle \frac1{x^b}\left|\int_0^x t^{b-1}\left(\frac{F_a(t)}{t^a}-A\right)dt\right| \le\frac1b\sup_{0<t\le x}\left|\frac{F_a(t)}{t^a}-A\right|\to0.`$


交换 $`a,b`$ 得逆向结论。取 $`a=1,b=\alpha`$ 即证；若第一个极限为 $`L`$，第二个极限为 $`L/\alpha`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pde0cad4d80e679.pdf 第10页第六题；修正参考答案末行遗漏的a/b因子，保留全部条件和子问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

---

[本卷上一题](pde0cad4d80e679-q5.md) · [本卷下一题](pde0cad4d80e679-q7.md) · [返回试卷](../papers/pde0cad4d80e679.md)

题目 ID：`pde0cad4d80e679-q6`
