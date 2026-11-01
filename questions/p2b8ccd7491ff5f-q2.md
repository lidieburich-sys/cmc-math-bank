# 第17届 决赛 · 数学类低年级组 · 一（2）

[全部题目](README.md) · [所属试卷](../papers/p2b8ccd7491ff5f.md) · [专题目录](../topics/README.md)

归档年份：2026 · 填空题 · 题号：一（2）

专题：[多元函数极值](../topics/multi-extrema.md) · [函数极限](../topics/limits.md)

## 题目

设 $`f(x,y)=x^2-y^2+9x^2y-3y^3`$，$`B_R=\{(x,y):x^2+y^2\le R^2\}`$，并记


```math
L_R=\max_{B_R}f(x,y),\qquad \ell_R=\min_{B_R}f(x,y).
```


求 $`\displaystyle\lim_{R\to+\infty}\frac{L_R+\ell_R}{R^2}`$。

<details>
<summary>展开参考解答</summary>

$`\boxed{-\frac12}`$。令 $`x=R\rho\cos\theta,y=R\rho\sin\theta`$，则


$$
\frac{f(x,y)}{R^2}=3R\rho^3\sin3\theta+\rho^2\cos2\theta,\qquad 0\le\rho\le1.
$$


在紧集上，当主项的最大值为 $`1`$ 时，最大点必趋向其最大点集；次项极值取该集合上的最大值。因此 $`L_R/R^2=3R+\max_{\rho^3\sin3\theta=1}\rho^2\cos2\theta+o(1)`$。这里 $`\rho=1`$，$`\theta=\pi/6,5\pi/6,3\pi/2`$，次项最大值为 $`1/2`$。同理，主项最小点为 $`\rho=1`$、$`\theta=\pi/2,7\pi/6,11\pi/6`$，次项最小值为 $`-1`$。故


$$
L_R=3R^3+\tfrac12R^2+o(R^2),\qquad \ell_R=-3R^3-R^2+o(R^2),
$$


所求为 $`-1/2`$。上述紧集结论可由极值点的任意收敛子列证明：主项损失非负，比较主项极值点即可夹出次项极限。

</details>

## 来源与核对说明

题库核对标记：公开题文核对·重排题答。

原档案处理标记：公开题文重排残本（`public-transcription-partial`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：第17届决赛数学类低年级组公开题文重排残本（缺第二大题）。高年级原卷同题逐图核对，低年级题号由公开自解文本交叉确认。低年级题文线索：https://www.scribd.com/document/1030615002/全国大学生数学竞赛决赛试题。未下载或解除其付费预览。 同题核对：本地高年级原卷 pe86b2c0e9b48f7.pdf。 本地材料 p2b8ccd7491ff5f.pdf 为本批新建题文重排残本，共9页，包含说明页；不是原低卷PDF。 高年级原卷同题逐图核对，低年级题号由公开自解文本交叉确认

解答来源：独立重证；同题部分另与公开高年级参考解交叉核对。

题面依据公开题文重排，解答包含独立推导；不是原卷扫描件。

所属试卷为残本：仅收录可核实的4道独立填空题及第三至第六大题，共8题；第二大题尚缺。此PDF为公开题文重排与独立解答，不是原版低年级卷。

- [来源 1 · www.scribd.com](https://www.scribd.com/document/1030615002/%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98)
- [来源 2 · sjds.net](https://sjds.net/642598.html)
- [来源 3 · www.sjds.net](https://www.sjds.net/a/491562.html)

同题关联：[第17届 决赛 · 数学类高年级 · 一（2）](pe86b2c0e9b48f7-q2.md)。保留各试卷原有入口。

---

[本卷上一题](p2b8ccd7491ff5f-q1.md) · [本卷下一题](p2b8ccd7491ff5f-q3.md) · [返回试卷](../papers/p2b8ccd7491ff5f.md)

题目 ID：`p2b8ccd7491ff5f-q2`
