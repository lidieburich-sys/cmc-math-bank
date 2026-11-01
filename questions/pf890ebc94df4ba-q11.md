# 第16届 决赛 · 数学类高年级组 · 七

[全部题目](README.md) · [所属试卷](../papers/pf890ebc94df4ba.md) · [专题目录](../topics/README.md)

归档年份：2025 · 证明题 · 题号：七

专题：[抽象代数](../topics/algebra.md)

## 题目

设 $`p`$ 为素数，$`n\ge1`$ 为整数，$`q=p^n`$。证明：

（1）存在恰有 $`q`$ 个元素的域 $`\mathbb F_q`$；

（2）任何 $`q`$ 元域 $`K`$ 都同构于 $`\mathbb F_q`$；

（3）若 $`L\supset\mathbb F_q`$ 为有限域扩张，则 $`\eta_q:L\to L`$、$`x\mapsto x^q`$ 为域自同构，且固定 $`\mathbb F_q`$ 的每个元素；

（4）$`\operatorname{Gal}(L/\mathbb F_q)`$ 为由 $`\eta_q`$ 生成的循环群；

（5）$`L^*=L\setminus\{0\}`$ 在乘法下为循环群，特别地存在 $`\alpha\in L`$，使 $`L=\mathbb F_q[\alpha]`$。

<details>
<summary>展开参考解答</summary>

（1）在 $`X^q-X\in\mathbb F_p[X]`$ 的分裂域中，其根集 $`R`$ 恰有 $`q`$ 个元素，因为导数恒为 $`-1`$。在特征 $`p`$ 下，$`(a+b)^q=a^q+b^q`$，且乘积、负元及非零元的逆也保持满足 $`x^q=x`$，所以 $`R`$ 是域，可取为 $`\mathbb F_q`$。

（2）$`K`$ 的特征必为 $`p`$。由 Lagrange 定理，$`a^{q-1}=1`$ 对所有 $`a\in K^*`$ 成立。因此 $`K`$ 的全部元素恰为 $`X^q-X`$ 的根，$`K`$ 和 $`\mathbb F_q`$ 都是该多项式在 $`\mathbb F_p`$ 上的分裂域，故同构。

（3）设 $`[L:\mathbb F_q]=m`$，则 $`|L|=q^m`$。$`q`$ 次幂映射保持和、积及单位元，且单射；有限性使其满射，所以是自同构。对 $`a\in\mathbb F_q`$，$`a^q=a`$，故它固定基域。

（4）每个 $`x\in L`$ 满足 $`x^{q^m}=x`$，所以 $`\eta_q^m=\operatorname{id}`$。若 $`0<k<m`$ 时 $`\eta_q^k=\operatorname{id}`$，则 $`X^{q^k}-X`$ 有 $`q^m>q^k`$ 个根，矛盾。因此 $`\eta_q`$ 的阶恰为 $`m`$。有限扩张的基域自同构个数至多为其次数 $`m`$，故整个 Galois 群就是 $`\langle\eta_q\rangle`$。

（5）取 $`L^*`$ 中阶最大的元素 $`\alpha`$，记其阶为 $`N`$。在有限交换群中，任意两个元素的阶的最小公倍数都可实现为某个元素的阶：分别选取所需的素数幂阶分量后相乘即可。因此最大性的选择说明每个元素的阶都整除 $`N`$。于是所有 $`L^*`$ 元素都是 $`X^N-1`$ 的根，给出 $`|L^*|\le N`$。另一方面 $`N\le|L^*|`$，故 $`N=|L^*|`$，即 $`L^*=\langle\alpha\rangle`$。所有非零元均为 $`\alpha`$ 的幂，遂有 $`L=\mathbb F_q[\alpha]`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页核对第16届决赛（数学类高年级组）原卷第10,11页；https://www.cmathc.org.cn/static/upload/file/jsst/第十六届全国大学生数学竞赛决赛（数学类高年级组）试题及答案解析.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%86%B3%E8%B5%9B%EF%BC%88%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%AB%98%E5%B9%B4%E7%BA%A7%E7%BB%84%EF%BC%89%E8%AF%95%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90.pdf)

---

[本卷上一题](pf890ebc94df4ba-q10.md) · [本卷下一题](pf890ebc94df4ba-q12.md) · [返回试卷](../papers/pf890ebc94df4ba.md)

题目 ID：`pf890ebc94df4ba-q11`
