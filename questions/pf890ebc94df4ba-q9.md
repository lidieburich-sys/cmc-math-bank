# 第16届 决赛 · 数学类高年级组 · 五

[全部题目](README.md) · [所属试卷](../papers/pf890ebc94df4ba.md) · [专题目录](../topics/README.md)

归档年份：2025 · 证明题 · 题号：五

专题：[实分析与测度](../topics/real-analysis.md)

## 题目

记 $`S_r=\{(x,y)\in\mathbb R^2:x^2+y^2=r^2\}`$（$`r\ge0`$），$`C(\mathbb R^2)`$ 为 $`\mathbb R^2`$ 上全体实连续函数。对 $`f\in C(\mathbb R^2)`$，定义


```math
E_f=\{\xi\in\mathbb R^2:\xi\text{ 是 }f\text{ 在某个 }S_r\text{ 上的最小值点},\ r\ge0\}.
```


（1）设 $`g\in C(\mathbb R^2)`$，证明 $`E_g`$ 为闭集；

（2）设 $`E\subset\mathbb R^2`$ 为闭集，且对每个 $`r>0`$ 都有 $`E\cap S_r\ne\varnothing`$，证明存在 $`g\in C(\mathbb R^2)`$，使 $`E_g=E`$；

（3）证明存在 $`g`$，使 $`E_g`$ 不连通；

（4）是否存在 $`g`$，使 $`E_g`$ 的任何非空连通子集均为单点集？

<details>
<summary>展开参考解答</summary>

（1）设 $`p_n\in E_g`$、$`p_n\to p`$。若 $`p=0`$，因 $`S_0=\{0\}`$，自然有 $`p\in E_g`$。若 $`r=|p|>0`$，对任意 $`q\in S_r`$，令 $`q_n=|p_n|q/r`$，则 $`g(p_n)\le g(q_n)`$。取极限得 $`g(p)\le g(q)`$，故 $`p\in E_g`$。因此 $`E_g`$ 闭。

（2）取 $`g(p)=\operatorname{dist}(p,E)`$。它连续、非负，且零点集正是 $`E`$。每个 $`S_r`$ 与 $`E`$ 相交，故该圆上的最小值为 $`0`$，所以 $`E_g=E`$。这里 $`r=0`$ 的情形由 $`E`$ 闭且与所有 $`S_{1/n}`$ 相交得 $`0\in E`$。

（3）取闭集 $`E=([0,\infty)\times\{0\})\cup(\{0\}\times[1,\infty))`$。它不连通，且与每个 $`S_r`$ 相交，应用（2）即可。

（4）存在。令 Cantor 型集


$`\displaystyle F=\left\{\theta=\sum_{n\ge1}\frac{a_n}{3^n}:a_n\in\{0,1\}\right\}\subset[0,1/2],\quad b(\theta)=\sum_{n\ge1}\frac{a_n}{2^n}.`$


数字展开在 $`F`$ 中唯一，$`b`$ 连续并映满 $`[0,1]`$，且 $`b^{-1}(1)=\{1/2\}`$。对 $`\theta\in F\setminus\{1/2\}`$，令


$`\displaystyle R(\theta)=\tan\frac{\pi b(\theta)}2,\qquad G(\theta)=R(\theta)(\cos\theta,\sin\theta),\qquad E=G(F\setminus\{1/2\}).`$


$`R`$ 映满 $`[0,\infty)`$，故 $`E`$ 与每个 $`S_r`$ 相交。$`G`$ 连续一一，且当 $`\theta\to1/2`$ 时 $`|G(\theta)|\to\infty`$，因此任何有界收敛像点列的参数有极限留在定义域内，$`E`$ 为闭集。除原点外，参数可由连续极角恢复；在原点处，由 $`0\le\theta\le b(\theta)=(2/\pi)\arctan|G(\theta)|`$ 亦知逆映射连续。因此 $`G`$ 是到 $`E`$ 的同胚。$`F`$ 完全不连通，所以 $`E`$ 的非空连通子集只能是单点。最后取 $`g=\operatorname{dist}(\cdot,E)`$，由（2）完成构造。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（数学类高年级组）原卷第6,7页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（数学类高年级组）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%AB%98%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pf890ebc94df4ba-q8.md) · [本卷下一题](pf890ebc94df4ba-q10.md) · [返回试卷](../papers/pf890ebc94df4ba.md)

题目 ID：`pf890ebc94df4ba-q9`
