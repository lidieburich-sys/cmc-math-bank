# 第13届 补赛 · 非数学类 · 三

[全部题目](README.md) · [所属试卷](../papers/pedca45f5baec5b.md) · [专题目录](../topics/README.md)

归档年份：2021 · 计算题 · 题号：三

专题：[二重积分与三重积分](../topics/multiple.md) · [偏导数与全微分](../topics/partial.md) · [泰勒展开](../topics/taylor.md)

## 题目

设函数 $`f(x,y)`$ 在闭区域 $`D=\{(x,y):x^2+y^2\le1\}`$ 上具有二阶连续偏导数，且


```math
\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}=x^2+y^2.
```


求


```math
\lim_{r\to0^+}\frac{\displaystyle\iint_{x^2+y^2\le r^2}\left(x\frac{\partial f}{\partial x}+y\frac{\partial f}{\partial y}\right)dx\,dy}{(\tan r-\sin r)^2}.
```

<details>
<summary>展开参考解答</summary>

记 $`D_r=\{x^2+y^2\le r^2\}`$、$`\rho^2=x^2+y^2`$。分部积分（或 Green 公式）给出


$`\displaystyle \iint_{D_r}(xf_x+yf_y)\,dx\,dy=\frac12\int_{\partial D_r}\rho^2\partial_n f\,ds-\frac12\iint_{D_r}\rho^2\Delta f\,dx\,dy.`$


由于边界上 $`\rho=r`$，且 $`\int_{\partial D_r}\partial_n f\,ds=\iint_{D_r}\Delta f\,dx\,dy`$，上式等于


$`\displaystyle \frac12\iint_{D_r}(r^2-\rho^2)\rho^2\,dx\,dy=\pi\int_0^r(r^2-\rho^2)\rho^3\,d\rho=\frac\pi{12}r^6.`$


又 $`\tan r-\sin r=\tfrac12r^3+o(r^3)`$，所以极限为 $`\boxed{\pi/3}`$。

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 pedca45f5baec5b.pdf；题目第4页，答案第4,5页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](pedca45f5baec5b-q6.md) · [本卷下一题](pedca45f5baec5b-q8.md) · [返回试卷](../papers/pedca45f5baec5b.md)

题目 ID：`pedca45f5baec5b-q7`
