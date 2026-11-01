# 第17届 初赛 · 非数学B类 · 三

[全部题目](README.md) · [所属试卷](../papers/pcbbd7d5c3b4ea5.md) · [专题目录](../topics/README.md)

归档年份：2025 · 解答题 · 题号：三

专题：[多元函数极值](../topics/multi-extrema.md) · [隐函数与参数方程求导](../topics/implicit.md)

## 题目

求由方程


```math
2x^2+2y^2+z^2+8xz-z+8=0
```


确定的隐函数 $`z=z(x,y)`$ 的极值。

<details>
<summary>展开参考解答</summary>

记左侧为 $`F`$。在可微的隐函数分支上，驻点满足 $`F_x=4x+8z=0,F_y=4y=0`$，即 $`x=-2z,y=0`$。代回得到 $`7z^2+z-8=0`$，所以候选点为


```math
(x,y,z)=(-2,0,1),\qquad(16/7,0,-8/7).
```


两点处 $`F_z=2z+8x-1`$ 分别为 $`-15,15`$，都能局部解为 $`z(x,y)`$。原方程等价于


```math
(z-1)(7z+8)=2(x+2z)^2+2y^2\ge0.
```


因此在第一点附近 $`z\ge1`$，在第二点附近 $`z\le-8/7`$，等号各只在相应驻点成立。故 $`\boxed{z(-2,0)=1\text{ 为极小值； }z(16/7,0)=-8/7\text{ 为极大值}}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开原卷 pcbbd7d5c3b4ea5.pdf；题目第4页，答案第4页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%83%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%83%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pcbbd7d5c3b4ea5-q6.md) · [本卷下一题](pcbbd7d5c3b4ea5-q8.md) · [返回试卷](../papers/pcbbd7d5c3b4ea5.md)

题目 ID：`pcbbd7d5c3b4ea5-q7`
