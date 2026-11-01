# 第15届 决赛 · 数学类低年级组 · 二、

[全部题目](README.md) · [所属试卷](../papers/pb14c5b9d6ebe03.md) · [专题目录](../topics/README.md)

归档年份：2024 · 解答题 · 题号：二、

专题：[空间解析几何](../topics/space-geometry.md) · [二次型与正定矩阵](../topics/linear-quadratic.md)

## 题目

椭球 $`S:x^2+2y^2+3z^2=4`$。若从动点 $`P=(x,y,z)`$ 出发有三条相互垂直的射线与 $`S`$ 相切，求 $`P`$ 的轨迹方程。

<details>
<summary>展开参考解答</summary>

记 $`D=\mathop{\mathrm{diag}}\nolimits (1,2,3)`$、$`Q=P^{\mathsf T}DP`$。沿单位方向 $`v`$ 的直线相切，当且仅当


$`\displaystyle (P^{\mathsf T}Dv)^2-(v^{\mathsf T}Dv)(Q-4)=0.`$


令 $`T=(DP)(DP)^{\mathsf T}-(Q-4)D`$。若存在正交单位方向 $`v_1,v_2,v_3`$，则 $`v_j^{\mathsf T}Tv_j=0`$，相加得 $`\mathop{\mathrm{tr}}\nolimits T=0`$。即


$`\displaystyle x^2+4y^2+9z^2-6(x^2+2y^2+3z^2-4)=0,`$


所以轨迹方程为 $`\boxed{5x^2+8y^2+9z^2=24}`$。

下面补证充分性。这个方程保证 $`Q\ge24/5>4`$，点在椭球外。任意三阶迹零实对称矩阵都有一个正交单位基使三个二次型值均为零：先用最大、最小特征值之间的连续性选一个单位零向量，在其正交补上，限制二次型仍迹零，沿该二阶型两特征向量的角平分方向再取两个零向量即可。因此可为 $`T`$ 选出所需三个正交相切方向。切点参数为 $`-P^{\mathsf T}Dv/(v^{\mathsf T}Dv)`$，不为零；分别调整各方向正负，可使参数均为正，从而得到三条相切射线。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pb14c5b9d6ebe03.pdf 第2—3页第二题；补全轨迹充分性，保留所有条件与小问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC15%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

同题关联：[第15届 决赛 · 数学类高年级组 · 二、](p5666a497f71839-q5.md)。保留各试卷原有入口。

---

[本卷上一题](pb14c5b9d6ebe03-q1-4.md) · [本卷下一题](pb14c5b9d6ebe03-q3.md) · [返回试卷](../papers/pb14c5b9d6ebe03.md)

题目 ID：`pb14c5b9d6ebe03-q2`
