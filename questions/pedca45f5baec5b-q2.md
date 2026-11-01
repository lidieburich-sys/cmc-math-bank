# 第13届 补赛 · 非数学类 · 一（2）

[全部题目](README.md) · [所属试卷](../papers/pedca45f5baec5b.md) · [专题目录](../topics/README.md)

归档年份：2021 · 填空题 · 题号：一（2）

专题：[定积分及其性质](../topics/definite.md)

## 题目

计算 $`\displaystyle\int_0^{\pi/2}\frac{\cos x}{1+\tan x}\,dx`$。

<details>
<summary>展开参考解答</summary>

记原积分为 $`I`$。作代换 $`x=\pi/2-t`$，再将两个表示式相加，得


```math
2I=\int_0^{\pi/2}\left(\frac{\cos x}{1+\tan x}+\frac{\sin x}{1+\cot x}\right)dx=\int_0^{\pi/2}\frac{dx}{\cos x+\sin x}.
```


因此


```math
I=\frac1{2\sqrt2}\int_{\pi/4}^{3\pi/4}\csc u\,du=\frac1{2\sqrt2}\left[\ln\tan\frac u2\right]_{\pi/4}^{3\pi/4}=\boxed{\frac1{\sqrt2}\ln(1+\sqrt2)}.
```

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 pedca45f5baec5b.pdf；题目第1页，答案第1页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](pedca45f5baec5b-q1.md) · [本卷下一题](pedca45f5baec5b-q3.md) · [返回试卷](../papers/pedca45f5baec5b.md)

题目 ID：`pedca45f5baec5b-q2`
