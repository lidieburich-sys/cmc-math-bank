# 第14届 决赛 · 数学类低年级组 · 四、

[全部题目](README.md) · [所属试卷](../papers/pde0cad4d80e679.md) · [专题目录](../topics/README.md)

归档年份：2023 · 解答题 · 题号：四、

专题：[实分析与测度](../topics/real-analysis.md) · [函数列/函数项级数](../topics/function-series.md) · [导数与微分](../topics/derivative.md)

## 题目

设 $`q_1,q_2,\ldots`$ 为 $`\mathbb Q`$ 的一个排列，且 $`|q_n|<n`$。给定 $`r\in(0,1)`$，定义


```math
g(x)=\sum_{n=1}^\infty r^n(x-q_n)^{1/3},
```


其中取实立方根。证明：

（1）$`g`$ 连续、严格递增，且 $`E=g(\mathbb Q)`$ 在 $`\mathbb R`$ 中稠密。

（2）对每个实数 $`t`$，


```math
\lim_{x\to t}\frac{g(x)-g(t)}{x-t}=S(t):=\sum_{n=1}^\infty\frac{r^n}{3|t-q_n|^{2/3}},
```


约定 $`1/0=+\infty`$。

（3）逆函数 $`f=g^{-1}`$ 处处可导，且 $`f'`$ 在 $`E`$ 上为零。

（4）对任意 $`a<b`$，存在不同的 $`\xi,\eta\in(a,b)`$，满足 $`f'(\xi)=f'(\eta)=[f(b)-f(a)]/(b-a)`$。

<details>
<summary>展开参考解答</summary>

（1）在 $`|x|\le R`$ 上，$`|r^n(x-q_n)^{1/3}|\le r^n(R+n)^{1/3}`$，控制级数收敛，所以局部一致收敛，$`g`$ 连续。各项严格递增，故和也严格递增；只取第一项的增量已可知 $`g(x)\to\pm\infty`$（$`x\to\pm\infty`$），因此它将实轴映满实轴。由有理数稠密及连续性，$`g(\mathbb Q)`$ 稠密。

（2）差商的每一项均非负，故下极限至少为任意有限部分和，因而至少为 $`S(t)`$。若 $`S(t)=+\infty`$，已得到结论。若 $`S(t)<\infty`$，则 $`t\ne q_n`$ 对所有 $`n`$ 成立。利用


$$
0<\frac{u^{1/3}-v^{1/3}}{u-v}
=\frac1{u^{2/3}+u^{1/3}v^{1/3}+v^{2/3}}
\le\frac4{3|v|^{2/3}},
$$


无穷尾差商被 $`4\sum_{n>M}r^n/(3|t-q_n|^{2/3})`$ 控制。先令 $`x\to t`$，再令 $`M\to\infty`$，得到上极限也不超过 $`S(t)`$。

（3）$`0<S(t)\le\infty`$，由逆函数差商直接取倒数，得


$$
f'(g(t))=\frac1{S(t)},\qquad 1/(+\infty):=0.
$$


若 $`t\in\mathbb Q`$，有某项分母为零，故 $`f'`$ 在 $`E`$ 上为零。

（4）中值定理先给出 $`\xi\in(a,b)`$，使 $`f'(\xi)=k=[f(b)-f(a)]/(b-a)>0`$。左右两段割线斜率的加权平均为 $`k`$，故至少一段的斜率不小于 $`k`$。不妨是左段，再用中值定理取 $`\zeta\in(a,\xi)`$，使 $`f'(\zeta)\ge k`$。若取等号，它就是第二点；否则由 $`E`$ 稠密，取 $`u\in(a,\zeta)\cap E`$，有 $`f'(u)=0`$。导数的 Darboux 性给出 $`\eta\in(u,\zeta)`$，使 $`f'(\eta)=k`$，且 $`\eta<\xi`$。右段情形同理。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐页原图核对 pde0cad4d80e679.pdf 第6—7页第四题，保留全部条件和子问；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC14%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E4%BD%8E%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89.pdf)

---

[本卷上一题](pde0cad4d80e679-q3.md) · [本卷下一题](pde0cad4d80e679-q5.md) · [返回试卷](../papers/pde0cad4d80e679.md)

题目 ID：`pde0cad4d80e679-q4`
