# 第17届 决赛 · 数学类低年级组 · 六

[全部题目](README.md) · [所属试卷](../papers/p2b8ccd7491ff5f.md) · [专题目录](../topics/README.md)

归档年份：2026 · 解答题 · 题号：六

专题：[数列极限](../topics/sequence-limits.md) · [中值定理与辅助函数](../topics/mean-value.md)

## 题目

设 $`f`$ 为 $`\mathbb R`$ 上的可微函数，实数列 $`\{a_n\}`$ 收敛。任取 $`x_1\in\mathbb R`$，定义 $`x_{n+1}=f(x_n)+a_n`$。
（1）若存在 $`\alpha\in(0,1)`$，使任意 $`x\in\mathbb R`$ 都有 $`|f'(x)|\le\alpha`$，证明 $`\{x_n\}`$ 收敛。
（2）若存在 $`M>0`$，使任意 $`x\in\mathbb R`$ 都有 $`\displaystyle |f'(x)|\le\frac{|x|+M}{|x|+M+1}`$，讨论 $`\{x_n\}`$ 是否收敛，并证明结论。

<details>
<summary>展开参考解答</summary>

记 $`A=\lim a_n`$。（1）映射 $`F(x)=f(x)+A`$ 在完备空间 $`\mathbb R`$ 上以常数 $`\alpha<1`$ 压缩，故有唯一不动点 $`\xi`$。由中值定理，


$$
|x_{n+1}-\xi|\le\alpha|x_n-\xi|+|a_n-A|.
$$


该不等式先推出误差有界，再取上极限得 $`L\le\alpha L`$，从而 $`L=0`$，即 $`x_n\to\xi`$。
（2）仍然收敛。令 $`K=\sup_n|a_n+f(0)|<\infty`$，并设


$$
H(t)=t-\ln\frac{M+1+t}{M+1},\qquad t\ge0.
$$


由导数比较（分别在正、负半轴使用中值定理）可得 $`|f(x)-f(0)|\le H(|x|)`$，且 $`H`$ 单调递增。选 $`\beta\ge|x_1|`$，使 $`\ln((M+1+\beta)/(M+1))\ge K`$，则


$$
|x_n|\le\beta\ \Longrightarrow\ |x_{n+1}|\le H(\beta)+K\le\beta.
$$


故所有 $`x_n`$ 都在 $`[-\beta,\beta]`$ 内。又 $`|A+f(0)|\le K`$，所以 $`F(x)=f(x)+A`$ 把此闭区间映入自身；在该区间上有一致压缩常数 $`q=(\beta+M)/(\beta+M+1)<1`$。应用（1）的误差论证，得 $`x_n`$ 收敛到 $`F`$ 的唯一不动点。

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

同题关联：[第17届 决赛 · 数学类高年级 · 四](pe86b2c0e9b48f7-q7.md)。保留各试卷原有入口。

---

[本卷上一题](p2b8ccd7491ff5f-q8.md) · [返回试卷](../papers/p2b8ccd7491ff5f.md)

题目 ID：`p2b8ccd7491ff5f-q9`
