# 第17届 初赛 · 非数学B类 · 二

[全部题目](README.md) · [所属试卷](../papers/pcbbd7d5c3b4ea5.md) · [专题目录](../topics/README.md)

归档年份：2025 · 解答题 · 题号：二

专题：[偏导数与全微分](../topics/partial.md) · [曲面积分与高斯公式](../topics/surface-integral.md)

## 题目

设 $`a,b`$ 为常数，$`f(x,y)=ax^2+by^2+1`$。在点 $`(4,3)`$ 处的所有方向导数中，沿 $`-4\mathbf i-3\mathbf j`$ 的方向导数最大，最大值为 $`10`$。

（1）求 $`a,b`$；

（2）求曲面 $`z=f(x,y)`$ 被平面 $`z=0`$ 截下的有限部分的面积。

<details>
<summary>展开参考解答</summary>

（1）最大方向导数等于梯度的模，且梯度与 $`(-4,-3)`$ 同向。因此


$$
\nabla f(4,3)=(8a,6b)=10\frac{(-4,-3)}5=(-8,-6),
$$


故 $`\boxed{a=b=-1}`$。

（2）曲面为 $`z=1-x^2-y^2`$，有限部分投影为单位圆盘。其面积为


$$
S=\iint_{x^2+y^2\le1}\sqrt{1+4x^2+4y^2}\,dx\,dy
=2\pi\int_0^1r\sqrt{1+4r^2}\,dr=\boxed{\frac\pi6(5\sqrt5-1)}.
$$

</details>

## 来源与核对说明

题库核对标记：完整题答逐题核对。

原档案处理标记：由 AI 看图转写（`image-ai-transcribed`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：逐页看图核对公开原卷 pcbbd7d5c3b4ea5.pdf；题目第3页，答案第3页；https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%83%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf

- [来源 1 · www.cmathc.org.cn](https://www.cmathc.org.cn/static/upload/file/jsst/%E7%AC%AC%E5%8D%81%E4%B8%83%E5%B1%8A%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%95%B0%E5%AD%A6%E7%AB%9E%E8%B5%9B%E5%88%9D%E8%B5%9B%E8%AF%95%E9%A2%98%E5%8F%8A%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%EF%BC%88%E9%9D%9E%E6%95%B0%E5%AD%A6B%E7%B1%BB%EF%BC%89.pdf)

---

[本卷上一题](pcbbd7d5c3b4ea5-q5.md) · [本卷下一题](pcbbd7d5c3b4ea5-q7.md) · [返回试卷](../papers/pcbbd7d5c3b4ea5.md)

题目 ID：`pcbbd7d5c3b4ea5-q6`
