# 第13届 补赛 · 非数学类 · 四

[全部题目](README.md) · [所属试卷](../papers/pedca45f5baec5b.md) · [专题目录](../topics/README.md)

归档年份：2021 · 计算题 · 题号：四

专题：[曲面积分与高斯公式](../topics/surface-integral.md) · [高阶微分方程](../topics/ode-higher.md)

## 题目

若对于 $`\mathbb R^3`$ 中半空间 $`\{(x,y,z):x>0\}`$ 内的任意有向光滑封闭曲面 $`S`$，都有


```math
\iint_S xf'(x)\,dy\,dz+y\bigl(xf(x)-f'(x)\bigr)\,dz\,dx-xz\bigl(\sin x+f'(x)\bigr)\,dx\,dy=0,
```


其中 $`f`$ 在 $`(0,+\infty)`$ 上二阶导数连续，且


```math
\lim_{x\to0^+}f(x)=\lim_{x\to0^+}f'(x)=0.
```


求 $`f(x)`$。

<details>
<summary>展开参考解答</summary>

对半空间内任意小球应用 Gauss 公式，得到


$$
\iiint_{B}x\bigl(f''(x)-f'(x)+f(x)-\sin x\bigr)\,dx\,dy\,dz=0.
$$


被积函数连续，若某点非零，则充分小球内同号，矛盾。因此对所有 $`x>0`$，


$$
f''-f'+f=\sin x.
$$


齐次方程的特征根为 $`(1\pm i\sqrt3)/2`$，一个特解为 $`\cos x`$，故


$$
f(x)=e^{x/2}\left(C_1\cos\frac{\sqrt3x}{2}+C_2\sin\frac{\sqrt3x}{2}\right)+\cos x.
$$


两个零点右极限条件分别给出 $`C_1=-1`$、$`C_1+\sqrt3C_2=0`$，所以


$$
\boxed{f(x)=e^{x/2}\left(\frac1{\sqrt3}\sin\frac{\sqrt3x}{2}-\cos\frac{\sqrt3x}{2}\right)+\cos x},\quad x>0.
$$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开补赛原卷 pedca45f5baec5b.pdf；题目第5页，答案第5,6页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%89%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6%E7%B1%BB%EF%BC%89%E8%A1%A5%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88.pdf)

---

[本卷上一题](pedca45f5baec5b-q7.md) · [本卷下一题](pedca45f5baec5b-q9.md) · [返回试卷](../papers/pedca45f5baec5b.md)

题目 ID：`pedca45f5baec5b-q8`
