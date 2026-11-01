# 第15届 初赛 · 非数学B类 · 第9题

[全部题目](README.md) · [所属试卷](../papers/pa4aa3d38ce4f79.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：第9题

专题：[中值定理与辅助函数](../topics/mean-value.md)

## 题目

设 $`f(x)`$ 在 $`[0,1]`$ 上可导，且 $`f(0)>0`$、$`f(1)>0`$、$`\int_0^1 f(x)\,dx=0`$。证明：（1）$`f(x)`$ 在 $`[0,1]`$ 上至少有两个零点；（2）在 $`(0,1)`$ 内至少存在一点 $`\xi`$，使 $`f^{\prime}(\xi)+3f^3(\xi)=0`$。

<details>
<summary>展开参考解答</summary>

如果 $`f`$ 在整个区间都非负，由连续性及 $`f(0)>0`$，定积分严格大于零，与条件矛盾。因此内部存在 $`x_0`$，使 $`f(x_0)<0`$。



```math
0<\xi_1<x_0<\xi_2<1,\quad f(\xi_1)=f(\xi_2)=0
```





```math
F(x)=f(x)e^{\int_0^x3f^2(s)\,ds}
```





```math
F^{\prime}(x)=[f^{\prime}(x)+3f^3(x)]e^{\int_0^x3f^2(s)\,ds}
```





```math
F(\xi_1)=F(\xi_2)=0\quad\Rightarrow\quad F^{\prime}(\xi)=0
```





```math
f^{\prime}(\xi)+3f^3(\xi)=0
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：source images and existing text checked 2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pa4aa3d38ce4f79-q8.md) · [本卷下一题](pa4aa3d38ce4f79-q10.md) · [返回试卷](../papers/pa4aa3d38ce4f79.md)

题目 ID：`pa4aa3d38ce4f79-q9`
