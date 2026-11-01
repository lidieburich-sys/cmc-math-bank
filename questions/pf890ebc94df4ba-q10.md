# 第16届 决赛 · 数学类高年级组 · 六

[全部题目](README.md) · [所属试卷](../papers/pf890ebc94df4ba.md) · [专题目录](../topics/README.md)

归档年份：2025 · 证明题 · 题号：六

专题：[复数与复变函数](../topics/complex.md)

## 题目

设 $`\mathbb D=\{z\in\mathbb C:|z|<1\}`$。证明：

（1）若 $`f`$ 在 $`\mathbb D`$ 内解析且 $`|f(z)|<1`$，则


```math
(1-|z|^2)|f'(z)|\le1-|f(z)|^2.
```


（2）若 $`f`$ 在 $`\mathbb D`$ 内解析，$`F`$ 在 $`\mathbb D`$ 内单叶解析，$`f(0)=F(0)`$，且 $`f(\mathbb D)\subseteq F(\mathbb D)`$，则存在 $`\mathbb D`$ 内的解析函数 $`w`$，使 $`f=F\circ w`$，且 $`|w(z)|\le|z|`$。

（3）在（2）的条件下，$`|f'(0)|\le|F'(0)|`$，等号成立当且仅当 $`w(z)=e^{i\theta}z`$，其中 $`\theta\in\mathbb R`$。

<details>
<summary>展开参考解答</summary>

（1）固定 $`z_0\in\mathbb D`$，记 $`a=f(z_0)`$。令 $`\phi_c(z)=(z-c)/(1-\overline c z)`$，则


$`\displaystyle h=\phi_a\circ f\circ\phi_{z_0}^{-1}`$


将 $`\mathbb D`$ 解析映入自身，且 $`h(0)=0`$。由 Schwarz 引理，$`|h'(0)|\le1`$，即


$`\displaystyle \frac{(1-|z_0|^2)|f'(z_0)|}{1-|f(z_0)|^2}\le1.`$



（2）单叶解析函数 $`F`$ 的导数处处非零，其逆函数在 $`F(\mathbb D)`$ 上解析。取 $`w=F^{-1}\circ f`$，则 $`w:\mathbb D\to\mathbb D`$ 解析，且 $`w(0)=0`$。Schwarz 引理给出 $`|w(z)|\le|z|`$。

（3）$`f'(0)=F'(0)w'(0)`$，而 $`|w'(0)|\le1`$，得到不等式。因 $`F'(0)\ne0`$，等号等价于 $`|w'(0)|=1`$，由 Schwarz 引理的等号条件，恰好等价于 $`w(z)=e^{i\theta}z`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（数学类高年级组）原卷第8,9页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（数学类高年级组）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%AB%98%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pf890ebc94df4ba-q9.md) · [本卷下一题](pf890ebc94df4ba-q11.md) · [返回试卷](../papers/pf890ebc94df4ba.md)

题目 ID：`pf890ebc94df4ba-q10`
