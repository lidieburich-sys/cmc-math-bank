# 第5届 决赛 · 数学类高年级组 · 七、

[全部题目](README.md) · [所属试卷](../papers/p4e0edc307ae20b.md) · [专题目录](../topics/README.md)

归档年份：2014 · 解答题 · 题号：七、

专题：[实分析与测度](../topics/real-analysis.md)

## 题目

设 $`E_k`$ 是一列可测集，$`f\in L^1(\bigcup_{k=1}^{\infty}E_k)`$。

（1）令 $`A=\limsup_{k\to\infty}E_k`$，证明


```math
\int_Af\,dm=\lim_{n\to\infty}\int_{\bigcup_{k=n}^{\infty}E_k}f\,dm.
```


（2）令 $`B=\liminf_{k\to\infty}E_k`$，证明


```math
\int_Bf\,dm=\lim_{n\to\infty}\int_{\bigcap_{k=n}^{\infty}E_k}f\,dm.
```


（3）若 $`\{E_k\}`$ 单调，证明 $`\lim E_k=E`$ 存在，且 $`\int_Ef\,dm=\lim_k\int_{E_k}f\,dm`$。

<details>
<summary>展开参考解答</summary>

（1）记 $`F_n=\bigcup_{k\ge n}E_k`$，则 $`F_n\downarrow A`$，因而 $`f\mathbf1_{F_n}\to f\mathbf1_A`$ 逐点成立，且


```math
|f\mathbf1_{F_n}|\le |f|\mathbf1_{\cup_kE_k}\in L^1.
```


由控制收敛定理得到所求极限。

（2）记 $`G_n=\bigcap_{k\ge n}E_k`$，则 $`G_n\uparrow B`$。仍有 $`f\mathbf1_{G_n}\to f\mathbf1_B`$，并由同一可积函数控制，故再用控制收敛定理。

（3）单调增加时 $`E=\bigcup_kE_k`$，单调减少时 $`E=\bigcap_kE_k`$，两种情况下上、下极限相等，且 $`\mathbf1_{E_k}\to\mathbf1_E`$。同样由控制收敛定理得到积分极限。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页查看2014数学类高年级决赛原题 p4e0edc307ae20b.pdf 2页及参考答案 p90d8d1f510c5e1.pdf 8页，并独立核算；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC5%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%B8%89%E3%80%81%E5%9B%9B%E5%B9%B4%E7%BA%A7%E5%86%B3%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882014%E5%B9%B4%EF%BC%89%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%20.pdf)

---

[本卷上一题](p4e0edc307ae20b-q6.md) · [本卷下一题](p4e0edc307ae20b-q8.md) · [返回试卷](../papers/p4e0edc307ae20b.md)

题目 ID：`p4e0edc307ae20b-q7`
