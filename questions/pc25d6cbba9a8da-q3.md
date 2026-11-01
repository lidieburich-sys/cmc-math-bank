# 第1届 初赛 · 数学类 · 三、

[全部题目](README.md) · [所属试卷](../papers/pc25d6cbba9a8da.md) · [专题目录](../topics/README.md)

归档年份：2009 · 解答题 · 题号：三、

专题：[特征值与矩阵相似](../topics/linear-eigen.md) · [向量空间与线性映射](../topics/linear-space.md)

## 题目

设 $`V`$ 为复数域上 $`n`$ 维线性空间，$`n>0`$，$`f,g`$ 是 $`V`$ 上的线性变换，满足 $`fg-gf=f`$。证明：$`f`$ 的特征值全为零，且 $`f,g`$ 有公共特征向量。

<details>
<summary>展开参考解答</summary>

设 $`fv=\lambda v`$，$`v\ne0`$。取 $`g`$-循环子空间 $`W=\operatorname{span}\{v,gv,g^2v,\ldots\}`$，设其维数为 $`m`$，则 $`v,gv,\ldots,g^{m-1}v`$ 为一组基。由 $`fg=(g+I)f`$ 归纳得


$`\displaystyle fg^jv=(g+I)^jfv=\lambda\sum_{k=0}^j\binom jk g^kv.`$


故 $`W`$ 在 $`f,g`$ 下均不变，且 $`f|_W`$ 的矩阵为对角元全是 $`\lambda`$ 的上三角矩阵。把 $`fg-gf=f`$ 限制在 $`W`$ 上并取迹，得 $`0=\operatorname{tr}(f|_W)=m\lambda`$，所以 $`\lambda=0`$。

由此 $`\ker f\ne\{0\}`$。若 $`v\in\ker f`$，则 $`f(gv)=g(fv)+fv=0`$，故 $`\ker f`$ 在 $`g`$ 下不变。复数域上的非零有限维空间中，$`g|_{\ker f}`$ 存在特征向量，该向量也是 $`f`$ 的零特征向量，故为二者的公共特征向量。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：自动导入，原档案标记为待复核（`automatic_unreviewed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：已逐图核对原试卷 pc25d6cbba9a8da.pdf 与对应本地参考答案 PDF；跨页内容已查看整页确认；2026-10-19。

- [来源 1 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)
- [来源 2 · github.com](https://github.com/IceFerryLing/Math_competition/blob/master/%E3%80%90%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98%E3%80%91%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%BE%80%E5%B1%8A%E7%9C%9F%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E8%B5%9B%E9%A2%98/%E7%AC%AC1%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E6%95%B0%E5%AD%A6%E7%B1%BB%E5%88%9D%E8%B5%9B%E8%AF%95%E5%8D%B7%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%882009%E5%B9%B4%EF%BC%89%20.pdf)

---

[本卷上一题](pc25d6cbba9a8da-q2.md) · [本卷下一题](pc25d6cbba9a8da-q4.md) · [返回试卷](../papers/pc25d6cbba9a8da.md)

题目 ID：`pc25d6cbba9a8da-q3`
