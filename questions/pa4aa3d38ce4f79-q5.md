# 第15届 初赛 · 非数学B类 · 第5题

[全部题目](README.md) · [所属试卷](../papers/pa4aa3d38ce4f79.md) · [专题目录](../topics/README.md)

归档年份：2023 · 填空题 · 题号：第5题

专题：[交换积分次序](../topics/integration-order.md) · [二重积分与三重积分](../topics/multiple.md)

## 题目

计算二次积分。



```math
\int_0^1dx\int_x^{\sqrt{x}}\frac{\cos y}{y}\,dy
```

<details>
<summary>展开参考解答</summary>

```math
1-\cos1
```





```math
D:\quad0\le x\le1,\quad x\le y\le\sqrt{x}
```





```math
0\le y\le1,\qquad y^2\le x\le y
```





```math
I=\int_0^1dy\int_{y^2}^{y}\frac{\cos y}{y}\,dx
```





```math
=\int_0^1(1-y)\cos y\,dy
```





```math
I=\int_0^1\cos y\,dy-\int_0^1y\cos y\,dy=1-\cos1
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：经校准的原档案（`calibrated`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：source images and existing text checked 2026-10-19

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pa4aa3d38ce4f79-q4.md) · [本卷下一题](pa4aa3d38ce4f79-q6.md) · [返回试卷](../papers/pa4aa3d38ce4f79.md)

题目 ID：`pa4aa3d38ce4f79-q5`
