# 第14届 第一次补赛 · 数学A类 · 六

[全部题目](README.md) · [所属试卷](../papers/p1f77bff27dd10f.md) · [专题目录](../topics/README.md)

归档年份：2022 · 证明题 · 题号：六

专题：[反常积分](../topics/improper.md) · [定积分及其性质](../topics/definite.md) · [数项级数敛散性](../topics/numeric-series.md)

## 题目

设


```math
\psi(s)=\int_0^{+\infty}\frac{\ln(1+sx)}{x(1+x)}\,dx.
```


证明：（1）$`\psi(1)=\pi^2/6`$；（2）对 $`s>0`$，


```math
\psi(s)+\psi(1/s)=\frac{\pi^2}{3}+\frac12\ln^2s.
```

<details>
<summary>展开参考解答</summary>

对每个 $`s>0`$，被积函数在 $`x\to0^+`$ 时有有限极限，在无穷远为 $`O(\ln x/x^2)`$，故积分收敛。

（1）令 $`t=1/(1+x)`$，利用非负项逐项积分，


$`\displaystyle \begin{aligned} \psi(1)&=\int_0^1\frac{-\ln t}{1-t}\,dt =\sum_{j=0}^{\infty}\int_0^1t^j(-\ln t)\,dt\\ &=\sum_{j=0}^{\infty}\frac1{(j+1)^2}=\frac{\pi^2}{6}. \end{aligned}`$


（2）$`s`$ 限制在任一正的紧区间上时，对参数求导后的被积函数可由 $`C/(1+x)^2`$ 控制，因此可以积分号下求导，得


$`\displaystyle \psi'(s)=\int_0^\infty\frac{dx}{(1+x)(1+sx)}=\frac{\ln s}{s-1}\quad(s\ne1),`$


并且 $`\psi'(1)=1`$。于是 $`F(s)=\psi(s)+\psi(1/s)`$ 满足


$`\displaystyle F'(s)=\frac{\ln s}{s-1}-\frac1{s^2}\frac{\ln(1/s)}{1/s-1}=\frac{\ln s}{s}.`$


在 $`s=1`$ 处连续延拓仍成立。由 $`F(1)=\pi^2/3`$，从 $`1`$ 积分到 $`s`$ 即得


$`\displaystyle \boxed{F(s)=\frac{\pi^2}{3}+\frac12\ln^2s.}`$

</details>

## 来源与核对说明

题库核对标记：公开题文核对·重排题答。

原档案处理标记：公开题文重排（`public-transcription`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。

原题库核对备注（历史记录）：第14届第一次补赛（2022年）数学A类，第六题。题文：安云野逸《CMC数学类题》公开页面第1.21/1.22节（印刷页25/26），https://www.scribd.com/document/910194838/CMC数学类题-安云野逸。仅使用正常公开可见题文，未下载或解除受限预览。解答独立推导；本地p1f77bff27dd10f.pdf为本批题文重排，不是原卷扫描。 公开汇编题文正常可见；本地PDF为题文重排与独立解答，不是官方原卷或官方参考解答。

解答来源：独立数学推导并复核。

题面依据公开题文重排，解答包含独立推导；不是原卷扫描件。

- [来源 1 · www.scribd.com](https://www.scribd.com/document/910194838/CMC%E6%95%B0%E5%AD%A6%E7%B1%BB%E9%A2%98-%E5%AE%89%E4%BA%91%E9%87%8E%E9%80%B8)
- [来源 2 · m.saikr.com](https://m.saikr.com/a/478181)
- [来源 3 · gdjpkc.xmu.edu.cn](https://gdjpkc.xmu.edu.cn/DocumentList.aspx?cID=22&dID=383)

---

[本卷上一题](p1f77bff27dd10f-q5.md) · [返回试卷](../papers/p1f77bff27dd10f.md)

题目 ID：`p1f77bff27dd10f-q6`
