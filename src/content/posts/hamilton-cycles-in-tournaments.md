---
title: "竞赛图中 Hamilton 圈的最大数目"
description: "对Alex和Wang工作的翻译。感谢你们！"
date: 2026-11-01
tags: ["组合"]
---



Alexander Divoux、Shouda Wang

2026 年 8 月 10 日

## 摘要

设 $C(n)$ 表示 $n$ 个顶点的竞赛图中有向 Hamilton 圈的最大数目。我们证明，当 $n\to\infty$ 时，

$$
C(n)=\left(\frac{\cosh 1}{\cos 1}\pm o(1)\right)\frac{(n-1)!}{2^{n}}.
$$

该界渐近地由如下正则竞赛图达到：其顶点集为 $\mathbb{Z}/n\mathbb{Z}$，且当 $j-i\pmod n<n/2$ 时 $(i,j)$ 为一条有向边。这回答了 Alon 的一个问题，并证明了 Wormald 的一个猜想。这些结果的其他推论之一，是渐近地确定了 $n$ 个顶点的竞赛图中 Hamilton 路径的最大数目。我们对这些证明给出自己的阐述；这些证明最初由 GPT-5.6 发现。

## 1. 引言

竞赛图 $T$ 是完全图的一个定向。$T$ 中的 **Hamilton 圈**是包含 $T$ 全部顶点的有向圈，$T$ 中的 **Hamilton 路径**是包含 $T$ 全部顶点的有向路径。记 $C(T)$ 为 $T$ 中 Hamilton 圈的数目。令 $C(n)=\max_T C(T)$，其中最大值取遍全部 $n$ 个顶点的竞赛图；并令 $P(n)$ 表示 Hamilton 路径的相应最大值。量 $C(n)$ 与 $P(n)$ 密切相关。事实上，

$$
\frac14 P(n-1)\le C(n)\le \frac1n P(n),
$$

其中第一个不等式来自：向一个含有 $P(n-1)$ 条 Hamilton 路径的竞赛图加入一个相邻关系均匀随机的顶点；第二个不等式则是把每条 Hamilton 圈中的边逐条忽略后显然得到的。

八十多年前，Szele [35] 用期望的线性性证明了 $P(n)\ge n!/2^{n-1}$。同样的方法还给出 $C(n)\ge (n-1)!/2^{n}$。他的证明被许多人视为概率方法在组合学中的首次应用（例如见 [3, 34, 13]）。

在其 1943 年的论文中，Szele 还给出了上界 $P(n)=O(n!\,2^{-3n/4})$。Alon [2] 把它改进为 $C(n)=O(n^{3/2}(n-1)!/2^{n})$，随后 Friedgut 与 Kahn [19] 又改进为 $C(n)=O(n^{\alpha}(n-1)!/2^{n})$，其中常数 $\alpha\approx 1.249$。竞赛图 $T$ 中的一个 **1-因子**，是一族两两顶点不交的有向圈，其并集包含 $T$ 的全部顶点。（因此，任何 Hamilton 圈都是一个 1-因子。）上述两项改进都来自：借助 $T$ 的邻接矩阵的永久式估计，巧妙地控制 $T$ 中 1-因子的数目。

对奇数 $n$，令 $T_n$ 为顶点集为 $\mathbb{Z}/n\mathbb{Z}$ 的正则竞赛图，其中当 $j-i\pmod n\in\{1,2,\dots,\frac{n-1}{2}\}$ 时，从 $i$ 到 $j$ 有一条有向边。$T_7$ 的图示见图 1。

![图 1. 正则竞赛图 $T_7$。](/hamilton-cycles-fig1.png)

**图 1.** 正则竞赛图 $T_7$。

原本的下界 $C(n)\ge (n-1)!/2^{n}$ 首先被 Adler、Alon 与 Ross [1] 改进为 $C(n)\ge(e-o(1))(n-1)!/2^{n}$。随后 Wormald [37] 给出了基于 $T_n$ 的竞赛图例子，表明对无穷多个 $n$ 有

$$
C(n)\ge (2.85588+o(1))\frac{(n-1)!}{2^{n}}.
$$

他还猜想，这应当接近 $C(n)$ 的正确答案。

$n$ 个顶点的竞赛图称为**正则的**，若每个顶点的入度与出度都恰为 $(n-1)/2$（因此只有当 $n$ 为奇数时竞赛图才可能正则）。Cuckler [10] 考虑了正则竞赛图中 Hamilton 圈的计数这一相关问题，他证明每个 $n$ 个顶点的正则竞赛图至少含有 $n!/(2+o(1))^{n}$ 个 Hamilton 圈。这部分地回答了 Friedgut 与 Kahn 的一个猜想 [19]，并回答了 Thomassen 更早提出的一个问题 [36]。该结果被 Ferber、Krivelevich 与 Sudakov [16] 推广到稠密正则有向图。

尽管 $T_n$ 是达到 $C(n)$ 的竞赛图的一个很有希望的候选者，实践中计算 $C(T_n)$ 的渐近式却出人意料地困难。事实上，最自然的概率方法只能重新得到 Cuckler 关于正则竞赛图的普遍界，而这个界甚至无法超过 Szele 对 $C(n)$ 的原始下界。另一方面，关于“对固定常数 $k$，确定 $n$ 个顶点的竞赛图中具有向 $k$-圈的最大数目”这一相关问题的工作，提供了更多证据表明 $T_n$ 是本问题中合适的最大值点。在此背景下，一长串研究 [25, 9, 6, 32, 26, 21] 最近以 Fang 与 Huang 的结果 [15] 达到顶点：当 $k$ 被 4 整除时，渐近最大值点是 $T_n$，否则是随机竞赛图；这证实了 Bartley 与 Day 的一个猜想 [4, 11]。

观察“$C(n)$ 是否接近随机竞赛图所给出的值 $(n-1)!/2^{n}$”这一问题的另一个视角，是有向图的 Sidorenko 型不等式。粗略地说，若有向图 $H$ 使得随机竞赛图在固定顶点数的竞赛图中最小化 $H$ 的出现次数，则称 $H$ 是**竞赛图 Sidorenko 的**；若随机竞赛图反而最大化这一数量，则称 $H$ 是**竞赛图反 Sidorenko 的**。把通常的 Sidorenko 情形从无向图推广到竞赛图的这一工作归功于 Fox、Himwich、Mani 与 Zhou [18, 17]，并已对各种有向图族得到研究 [38, 21, 31, 23, 8]。因此，证明 $C(n)=\Theta\big((n-1)!/2^{n}\big)$ 以及 $P(n)=\Theta\big(n!/2^{n-1}\big)$，就分别对 Hamilton 圈与 Hamilton 路径建立了竞赛图反 Sidorenko 性质的一个弱形式。

本文中，我们处理的问题是：弥合 $C(n)$ 与 $P(n)$ 的上下界之间的多项式差距。对这一问题的兴趣可以追溯到 Alon [2]，其中认为 $C(T_n)=(1+o(1))C(n)$ 是合理的；这一猜想图景在 Wormald 上述工作中得到进一步支持。下面是本文的主要结果，它证实了这些预测。

**定理 1.1。** 当 $n\to\infty$ 时，$n$ 个顶点的竞赛图中 Hamilton 圈的最大数目为

$$
C(n)=\left(\frac{\cosh 1}{\cos 1}\pm o(1)\right)\frac{(n-1)!}{2^{n}}.
$$

定理 1.1 直接由定理 1.2 与定理 1.3 推出，它们分别给出 $C(n)$ 的上界与下界。

**定理 1.2。** 当 $n\to\infty$ 时，每个 $n$ 阶竞赛图 $T$ 都满足

$$
C(T)\le\left(\frac{\cosh 1}{\cos 1}+o(1)\right)\frac{(n-1)!}{2^{n}}.
$$

对奇数 $n$，令 $R_n=T_n$；对偶数 $n$，令 $R_n$ 为从 $T_{n+1}$ 中删去任意一个顶点所得的竞赛图。

**定理 1.3。** 当 $n\to\infty$ 时，

$$
C(R_n)\ge\left(\frac{\cosh 1}{\cos 1}-o(1)\right)\frac{(n-1)!}{2^{n}}.
$$

由上文联系 $P(n)$ 与 $C(n)$ 的不等式，定理 1.1 立即把 $P(n)$ 确定到相差一个常数因子，即 $P(n)=\Theta(n!/2^{n-1})$。对 $R_n$ 中 Hamilton 路径的简短分析，将使我们能把 $C(R_n)$ 的下界加强到与 $P(n)\le 4C(n+1)$ 所给的上界相配。特别地，这也把渐近常数确定为 $\cosh(1)/\cos(1)$：

**定理 1.4。** 当 $n\to\infty$ 时，$n$ 个顶点的竞赛图中 Hamilton 路径的最大数目为

$$
P(n)=\left(\frac{\cosh 1}{\cos 1}\pm o(1)\right)\frac{n!}{2^{n-1}}.
$$

### 1.1 证明概要

我们先给出证明的高层概览，从上界定理 1.2 开始。设 $T$ 是 $n$ 个顶点的竞赛图。我们可以假设 $C(T)\ge (n-1)!/2^{n}$，否则无需证明。$T$ 所含 Hamilton 圈不少于随机竞赛图这一事实，给出了关于 $T$ 的结构信息。特别地，利用 Bregman 定理，命题 8.1 表明 $C(T)\ge (n-1)!/2^{n}$ 蕴含 $T$ 各顶点的出度与入度之差的平方和很小。于是我们可以删去一个只含多对数多个顶点的集合 $S$，使得剩下竞赛图中的每个顶点都只有很小的剩余度不平衡，类似于正则竞赛图。记 $G=T-S$、$N=|V(G)|$，这意味着用 $2/N$ 归一化后，$G$ 的邻接矩阵的行和与列和都接近 1。

此时，人们希望这样说：可以把 $G$ 看成行为类似于正则竞赛图，其归一化邻接矩阵几乎双随机；于是可以指望用线性代数中的工具来数这个性质优良的竞赛图内部的 Hamilton 圈。但这样数出的却是 $G$ 而非 $T$ 的 Hamilton 圈，忽略了 $T$ 的 Hamilton 圈仍然要用到 $S$ 中的全部顶点这一事实。

为处理这一困难，我们的策略是按 Hamilton 圈在 $S$ 中所形成的“模式”对 $T$ 的 Hamilton 圈集合作划分。考虑 $T$ 的一条 Hamilton 圈 $C$。$C$ 中两个端点都在 $S$ 内的边，构成 $S$ 上的一个有向线性森林，其连通分支是顶点均在 $S\cap V(C)$ 中的极大有向路径。这样的分支 $v_1\to v_2\to\cdots\to v_\ell$ 在 $C$ 中出现为某条有向路径 $x\to v_1\to\cdots\to v_\ell\to y$ 的一部分，其中附着端点 $x,y\in V(G)\cap V(C)$。为了计数这条圈，我们把整条路径替换为 $G$ 的一个修正邻接矩阵中的一个带权转移。

更具体地说，固定 $S$ 中的一个有向线性森林，并为其每个分支固定一个（位于 $G$ 中的）附着端点之后，每个分支另一个附着端点的所有可能选择，可以这样编码：把 $G$ 的归一化邻接矩阵的少数几行与几列替换为均匀概率向量，其支撑集由相应的目的顶点组成。这样得到一个辅助矩阵 $Q$，其行与列以 $V(G)$ 为指标，使得 $Q$ 的循环排列上的带权和

$$
\left(\text{相应权重}\right)\times\sum_{\substack{\sigma\in S_N\\ \sigma\ \text{循环}}}\ \prod_{i=1}^{N}Q_{i,\sigma(i)}
$$

将给出 $T$ 中在 $S$ 内诱导出该模式的所有 Hamilton 圈数目的上界。命题 8.2 把这些计算整理成一般形式。

右端的因子，我们记为 $\operatorname{cyc}Q$，它与 $Q$ 的永久式只相差一点：求和限制在那些由单个循环组成的置换 $\sigma\in S_N$ 上。我们暂且忽略这一差别，假定我们乐于处理 $\operatorname{per}Q$。鉴于该问题此前的工作都使用永久式方法，我们现在又回到了熟悉的领域，并希望使用诸如 van der Waerden 定理或 Bregman 定理这样的永久式估计。

首先要克服的困难是，像 van der Waerden 定理这样的普遍界对我们的应用不够精确；因此我们将改用命题 3.1 中的永久式估计，它来自 McCullagh [29]。这个永久式估计用差矩阵 $B:=D-J_N$ 来度量双随机矩阵 $D$ 的永久式与 $J_N$（每个元素都是 $1/N$、达到最小永久式 $N!/N^{N}$ 的均匀矩阵）的永久式相差多少。（它对 $D$ 有一些假设，而我们还需要一个一致性陈述，所以我们在第 3 节证明一个适合本应用的版本。）

另一个技术性细节是，这个永久式界以双随机矩阵作为输入；而我们的矩阵 $Q$ 虽然接近双随机，一般却并非真正双随机。所幸有一个标准工具来处理这一点：通过 Sinkhorn 缩放，可以找到双随机矩阵 $D$ 使得 $D=\operatorname{diag}(e^{x})Q\operatorname{diag}(e^{y})$。由于求和中的每条带权 Hamilton 圈都恰从每一行与每一列取一个元素，对角缩放把所有圈的权重都乘以同一个因子。因此我们可以先估计 $\operatorname{cyc}D$，再单独处理缩放因子。这一工具的相关陈述是命题 4.1。实际上，只要竞赛图非常接近正则，把它翻译为相应矩阵并施加 Sinkhorn 缩放，就给出了一个“把它当作真正正则来论证”的方法。于是只需计算 $\operatorname{cyc}D$，再乘以 Sinkhorn 缩放因子即可还原 $\operatorname{cyc}Q$。

接下来要调和 $\operatorname{cyc}D$ 与永久式之间的差别。Liu [28] 的一个恒等式把 $\operatorname{cyc}D$ 表示为其各主子矩阵的行列式与永久式的交错和（这可以看成某种容斥）：

$$
\operatorname{cyc}D=\frac1N\sum_{\varnothing\neq U\subseteq[N]}|U|(-1)^{|U|-1}\det D[U]\operatorname{per}D[U^{c}].
$$

把它与永久式估计及 Sinkhorn 缩放因子结合起来，命题 6.2 将推出 $\operatorname{cyc}Q$ 满足

$$
\frac{N^{N}\operatorname{cyc}Q}{(N-1)!}\le(1+o(1))\underbrace{\exp\left(1+\sum_{1\le i,j\le N}Q_{ij}-N\right)}_{\text{Sinkhorn 缩放因子}}\underbrace{\frac{\det(I-K)}{\det(I-iK)}}_{Z(K)},
$$

其中 $K=(A-A^{T})/N$，$A$ 是 $G$ 的邻接矩阵。注意右端记为 $Z(K)$ 的因子与 $Q$ 无关。

既然理解了每个模式的贡献 $\operatorname{cyc}Q$，剩下就是要对 $S$ 上所有可能的有向森林模式 $F$ 求和。可能出现的一种森林是：Hamilton 圈 $C$ 在 $S$ 中任何两个顶点都不相邻。此时 $F$ 的每个分支都是单个顶点，而对每个这样的顶点，其可能的前驱与后继把 $V(G)$ 分成两部分。这一性质使我们能证明：这些模式贡献之和至多为 $(Z(K)+o(1))\frac{(n-1)!}{2^{n}}$。另一方面，若 $F$ 含有 $k\ge 1$ 条边，则相应因子至多为 $(O(N^{-1}))^{k}\cdot Z(K)\frac{(n-1)!}{2^{n}}$。事实上，即使对至少含一条边的所有森林求和，其总贡献仍然只是 $o\big((n-1)!/2^{n}\big)$。启发式地说，这是因为 $|S|\sim\operatorname{polylog}(n)$ 非常小，于是进入 $S$ 的 Hamilton 圈不太可能继续走到 $S$ 中另一个顶点，而会回到 $V(G)$。于是我们将证明

$$
C(T)\le(Z(K)+o(1))\frac{(n-1)!}{2^{n}}.
$$

证明的最后一块砖，是对固定阶 $N$ 的全部竞赛图给出量 $Z(K)$ 的普遍上界。命题 7.1 将证明

$$
Z(K)\le\frac{\sum_{j=0}^{\lfloor N/2\rfloor}\binom{N}{2j}N^{-2j}}{\sum_{j=0}^{\lfloor N/2\rfloor}(-1)^{j}\binom{N}{2j}N^{-2j}},
$$

其中分子与分母中的序列当 $N\to\infty$ 时分别收敛到 $\cosh 1$ 与 $\cos 1$。为此，先证明 $Z(K)$ 在每个阶数下都在传递竞赛图处取到最大，然后直接计算传递竞赛图的值。前一步将使用 Fang 与 Huang [15] 的一个主化论证来完成比较。结合上界估计 $C(T)$ 的不等式，上界部分即告完成。

对于下界，我们把上述框架直接应用于循环正则竞赛图 $T_n$。设 $A$ 是 $T_n$ 的邻接矩阵，$K=(A-A^{T})/n$。由于 $T_n$ 已经是正则竞赛图，无需删去任何例外顶点集 $S$，于是上面的论证在整个过程中给出等号，直到 $C(T_n)=(Z(K)-o(1))\frac{(n-1)!}{2^{n}}$ 为止。此外，$T_n$ 与 $n$ 个顶点的传递竞赛图密切相关。事实上，把 $T_n$ 的顶点按自然的循环顺序排列，并反转穿过一条直径边割的边的方向，就把 $T_n$ 变成传递竞赛图。反转这些边不会影响 $Z(K)$ 的值；又因传递竞赛图收敛到最大值 $\cosh 1/\cos 1$，这就表明

$$
C(T_n)=\left(\frac{\cosh 1}{\cos 1}-o(1)\right)\frac{(n-1)!}{2^{n}}.
$$

当 $n$ 为偶数时，对从 $T_{n+1}$ 中删去一个顶点所得的竞赛图 $R_n$ 可以作同样的论述，但需要施加一点小的 Sinkhorn 缩放，因为这个竞赛图不再正则。由于 $C(n)\ge C(R_n)$，下界定理 1.3 即告完成。

最后，几个简短的论证将把 Hamilton 路径的计数 $P(n)$ 归约到 Hamilton 圈的计数 $C(n)$，从而给出定理 1.4。简而言之，两个方向都将利用一个标准技巧：向竞赛图 $T$ 加入一个相邻关系方便的顶点，使得新有向图中的 Hamilton 圈可用来计数它们在 $T$ 中诱导出的 Hamilton 路径。

### 1.2 进一步的方向

确定恰好取得 Hamilton 圈（或路径）最大数目的竞赛图，将是一件有趣的事。尽管定理 1.3 蕴含 $T_n$ 渐近地取得最大值，但对小的阶数，$C(T_n)=C(n)$ 并不成立。例如当 $n=7$ 时，以 $\mathbb{Z}/7\mathbb{Z}$ 为顶点集、当 $j-i\pmod 7\in\{1,2,4\}$ 时从 $i$ 到 $j$ 有边的 Paley 竞赛图 $Q_7$ 满足 $C(Q_7)=24>17=C(T_7)$。另一方面，Wormald [37] 的一个更强的猜想断言：对所有充分大的奇数 $n$ 都有 $C(n)=C(T_n)$。

看起来，本文中技术的某种变体可用来渐近地确定 $n$ 个顶点的竞赛图中 1-因子的最大数目；我们猜测 $T_n$ 对这一量同样是渐近最大值点。

### 1.3 本文的组织

本文余下部分安排如下。第 2 节引入基本记号，并建立一些后文要用到的已知事实。第 3 节与第 4 节分别给出永久式估计与一个定量的 Sinkhorn 缩放结果的证明。第 5 节把它们用于推导 Hamilton 圈的渐近公式，第 6 节把这些估计推广到修正邻接矩阵。第 7 节证明 $Z(K)$ 的比值界 $\cosh 1/\cos 1$。主要结果定理 1.1 在第 8 节与第 9 节中证明，它们分别建立上界与下界。最后，Hamilton 路径的相应结果在第 10 节中推出。

## 2. 预备知识

本节旨在回顾竞赛图与线性代数中的若干基本概念，并陈述一些全文都要用到的事实。

### 2.1 记号

设 $T$ 是竞赛图，$v\in V(T)$。记 $N_T^{+}(v)$ 与 $N_T^{-}(v)$ 分别为 $v$ 的出邻域与入邻域；并记 $d_T^{+}(v)=|N_T^{+}(v)|$、$d_T^{-}(v)=|N_T^{-}(v)|$。当所谈竞赛图没有歧义时，我们有时省略下标。$T$ 的**阶**为 $|V(T)|$。设 $T$ 的阶为 $n$。$T$ 的**邻接矩阵** $A$ 是行与列以 $V(T)$ 为指标的 $n\times n$ 二值矩阵，当 $ij$ 是 $T$ 的一条有向边时 $A_{ij}=1$。$T$ 的 **Seidel 矩阵**是矩阵 $C=A-A^{T}$，而 $K=C/n$ 是它的**归一化 Seidel 矩阵**。

若 $n$ 是整数，则 $[n]=\{1,\dots,n\}$。记 $\mathbf{1}_n$ 为 $\mathbb{R}^{n}$ 中每个坐标都等于 1 的向量，$J_n=\mathbf{1}_n\mathbf{1}_n^{T}/n$ 为每个元素都等于 $1/n$ 的 $n\times n$ 矩阵。**概率向量**是非负且各分量之和为 1 的向量。矩阵称为**双随机的**，若它非负且每一行、每一列之和都等于 1。

对 $n\times n$ 矩阵 $M$ 以及子集 $I,J\subseteq[n]$，记 $M[I,J]$ 为 $M$ 由行指标集 $I$ 与列指标集 $J$ 诱导的子矩阵。把 $M[U,U]$ 简记为 $M[U]$，并记 $U^{c}=[n]\setminus U$。分别用 $\operatorname{per}M$、$\det M$、$\operatorname{pf}M$ 表示 $M$ 的永久式、行列式与 Pfaffian。记 $S_n$ 为 $[n]$ 上的对称群。置换 $\sigma\in S_n$ 称为**循环的**，若它只由一个循环组成。定义 $\operatorname{cyc}M$ 为

$$
\operatorname{cyc}M=\sum_{\substack{\sigma\in S_n\\ \sigma\ \text{循环}}}\ \prod_{i=1}^{n}M_{i,\sigma(i)}.
$$

对向量，$\|\cdot\|_p$ 表示通常的 $\ell^{p}$-范数；对矩阵，$\|\cdot\|_p$ 表示诱导矩阵范数。特别地，$\|M\|_{\mathrm{op}}=\|M\|_2=\sigma_1(M)$ 是谱范数，其中 $\sigma_1(M)\ge\cdots\ge\sigma_n(M)$ 是 $M$ 的奇异值。当所指矩阵明确时，我们直接写 $\sigma_1\ge\cdots\ge\sigma_n$。我们还将使用最大元素范数 $\|M\|_{\max}=\max_{1\le i,j\le n}|M_{ij}|$ 与 Frobenius 范数

$$
\|M\|_{F}=\left(\sum_{1\le i,j\le n}|M_{ij}|^{2}\right)^{1/2}.
$$

本文中，$n$ 与 $N$ 是趋于无穷的渐近量，表示相应竞赛图的阶。我们将假定 $n$ 与 $N$ 充分大，使各种渐近不等式成立。为方便起见，“设 $D$ 是一个 $N\times N$ 矩阵”这样的说法，实际上是指“设 $(D_N)_N$ 是一列矩阵，其中 $D_N$ 是 $N\times N$ 矩阵”。

**注 2.1。** 所有 $o(1)$ 误差在各自的参数中都是一致的；这些参数通常是常数，记为 $A_0$ 与 $\rho$，用来控制矩阵的某些性质。特别地，对这些估计而言，只要矩阵满足这些界，$o(1)$ 误差项就对所有这样的矩阵一致成立，尽管收敛速率可能依赖于 $A_0$ 与 $\rho$。当我们对一大批带有 $1+o(1)$ 乘法误差的界求和、并希望提出这个公共因子时，这一致性将很有用。

### 2.2 永久式界

我们回顾非负矩阵永久式的若干标准界。第一个是 van der Waerden 猜想，由 Egorychev [12] 与 Falikman [14] 独立证明。

**事实 2.2。** 若 $D$ 是 $N\times N$ 双随机矩阵，则

$$
\operatorname{per}D\ge\frac{N!}{N^{N}}.
$$

第二个是关于二值矩阵永久式的 Minc 猜想，由 Bregman [7] 证明。在我们的应用中，采用下述由 Samorodnitsky 给出的、关于元素有界的非负矩阵的推广会很方便。其证明见 [5, 5.2.3]。

**事实 2.3。** 若 $Q$ 是非负 $N\times N$ 矩阵，所有行和都等于 1，且存在正整数 $r_1,\dots,r_N$ 使得对每个 $i,j\in[N]$ 都有 $Q_{ij}\le 1/r_i$，则

$$
\operatorname{per}Q\le\prod_{i=1}^{N}\frac{(r_i!)^{1/r_i}}{r_i}.
$$

把二值矩阵的行归一化后应用上述结果，即可还原 Minc 猜想的经典陈述。

我们在此记录竞赛图 Seidel 矩阵谱范数的一个普遍界。其证明是下列 Pick [30] 的不等式的一个快速应用。

**事实 2.4。** 设 $A$ 是 $N\times N$ 实矩阵，令 $g=\max_{1\le i,j\le N}\left|\frac{A_{ij}-A_{ji}}{2}\right|$。则 $A$ 的每个特征值 $\lambda$ 都满足 $|\operatorname{Im}(\lambda)|\le g\cot\left(\frac{\pi}{2N}\right)$。

**引理 2.5。** 若 $C$ 是 $N$ 个顶点的竞赛图的 Seidel 矩阵，则

$$
\|C\|_{\mathrm{op}}\le\cot\left(\frac{\pi}{2N}\right).
$$

**证明。** 由于 $C$ 是竞赛图的 Seidel 矩阵，我们有

$$
\max_{1\le i,j\le N}\left|\frac{C_{ij}-C_{ji}}{2}\right|=\left|\frac{1-(-1)}{2}\right|=1.
$$

此外 $C$ 是实反对称矩阵，故它的每个非零特征值实部都为零。因此由 Pick 定理，$C$ 的每个特征值 $\lambda$ 都满足 $|\lambda|=|\operatorname{Im}(\lambda)|\le\cot\left(\frac{\pi}{2N}\right)$。由于实反对称矩阵的奇异值就是其特征值的绝对值，故 $\|C\|_{\mathrm{op}}\le\cot\left(\frac{\pi}{2N}\right)$。$\square$

## 3. 双随机矩阵的永久式界

本节重新推导 McCullagh 关于双随机矩阵永久式的下述渐近估计。

**命题 3.1。** 设 $A_0<\infty$、$\rho<1$。若 $D=J_N+B$ 是 $N\times N$ 双随机矩阵，满足 $\|B\|_{\max}\le A_0/N$ 且 $\|B\|_{\mathrm{op}}\le\rho$，则当 $N\to\infty$ 时，

$$
\frac{N^{N}\operatorname{per}D}{N!}=(1+o(1))\det(I-B^{T}B)^{-1/2}.
$$

若 $D$ 是 $N\times N$ 双随机矩阵，则由 van der Waerden 猜想（事实 2.2）有 $\frac{N!}{N^{N}}\le\operatorname{per}D$，且 $J_N$ 处取等号。命题 3.1 给出了 $\operatorname{per}D$ 偏离这一下界多远的渐近估计，其表达式中出现矩阵 $B$，而 $B$ 恰好刻画了 $D$ 偏离 $J_N$ 的程度。我们对 $B$ 需要一些基本假设，即 $B$ 的每个元素都是 $O(N^{-1})$，且 $B$ 的谱范数与 1 有正距离。

这个永久式估计来自 McCullagh [29]，其中它是在对 $D$ 稍弱的假设下陈述的，并且误差被明确取为一个加性 $O(N^{-1})$。对我们的应用而言，我们对 $D=J_N+B$ 采取稍强的假设，即每个元素都是 $O(N^{-1})$ 量级、谱范数小于 1，这对我们的应用更方便。这也使我们能确保 $1+o(1)$ 误差对所有满足这些假设的矩阵 $D$ 一致成立；也就是说，误差趋于零的速率只依赖于固定常数 $A_0$ 与 $\rho$（与注 2.1 相符）。后文我们正需要这种一致性，以便在对许多这类矩阵的永久式求和时提出这个 $1+o(1)$ 误差因子。出于这些原因，我们在本节给出一个自包含的证明。

让我们简要概述命题 3.1 的证明。在 3.1 小节中，我们把永久式表示为期望

$$
\frac{N^{N}\operatorname{per}D}{N!}=\mathbb{E}\!\left[R_B(N/T)\right],
$$

其中 $R_B$ 是车多项式，$T$ 是 Gamma 随机变量。当 $N\to\infty$ 时，$N/T$ 依概率收敛到 1，因此我们本质上需要理解 $R_B(s)$ 在 $s$ 接近 1 时的行为。这将在 3.2 小节完成，其中我们在命题 3.8 中建立 $R_B(s)$ 在 1 的一个邻域内的一致渐近公式。最后，在 3.3 小节中，我们把这些估计与 $T$ 的尾部贡献的界结合起来，完成命题 3.1 的证明。

### 3.1 永久式的一个概率恒等式

让我们回顾复 Gauss 随机变量矩的 Wick 公式，它将被反复使用。对整数 $k\ge 1$，记 $P_2([2k])$ 为 $[2k]$ 的一切两两配对构成的划分的集合。**中心化复 Gauss 随机变量（向量）**是在一个复线性变换下标准实 Gauss 随机变量（向量）的像。

**事实 3.2（Wick 公式）。** 设 $Z_1,\dots,Z_m$ 是联合中心化复 Gauss 随机变量，且每个 $W_j$ 是某个变量 $Z_i$ 或 $\overline{Z_i}$。则 $\mathbb{E}[W_1\cdots W_{2k+1}]=0$，且

$$
\mathbb{E}[W_1\cdots W_{2k}]=\sum_{\pi\in P_2([2k])}\ \prod_{\{a,b\}\in\pi}\mathbb{E}[W_aW_b].
$$

固定一个 $N\times N$ 矩阵 $B$。对 $0\le k\le N$，令 $r_k(B)$ 为所有 $k\times k$ 子矩阵 $B[I,J]$ 的永久式之和，其中 $I,J$ 取遍 $[N]$ 的 $k$-子集；约定 $r_0(B)=1$。令

$$
R_B(s)=\sum_{k=0}^{N}s^{k}r_k(B)
$$

为 $r_k(B)$ 的生成函数。我们首先把 $R_B(s)$ 表示为期望。

**引理 3.3。** 设 $B$ 是实 $N\times N$ 矩阵，$s\ge 0$。存在联合复 Gauss 向量 $X,Y$，满足对每个 $1\le i,j\le N$ 都有 $\mathbb{E}[X_iY_j]=B_{ij}$ 且 $\mathbb{E}[X_iX_j]=\mathbb{E}[Y_iY_j]=0$，使得

$$
R_B(s)=\mathbb{E}\!\left[\prod_{i=1}^{N}(1+\sqrt{s}X_i)\prod_{j=1}^{N}(1+\sqrt{s}Y_j)\right].
$$

**证明。** 设 $B=U\Sigma V^{T}$ 是 $B$ 的奇异值分解，其中 $\Sigma=\operatorname{diag}(\sigma_1,\dots,\sigma_r)$。设 $z_1,\dots,z_r$ 是相互独立的标准复 Gauss 变量。特别地，$\mathbb{E}[z_a\overline{z_b}]=\delta_{ab}$ 且 $\mathbb{E}[z_az_b]=0$，其中 $\delta_{ab}$ 是 Kronecker 符号。记 $z$ 为列向量 $(z_1,\dots,z_r)^{T}$，并定义 $X=U\Sigma^{1/2}z$、$Y=V\Sigma^{1/2}\overline{z}$。由构造，

$$
\mathbb{E}[XY^{T}]=U\Sigma^{1/2}\mathbb{E}[z\overline{z}^{T}]\Sigma^{1/2}V^{T}=U\Sigma V^{T}=B.
$$

此外 $\mathbb{E}[XX^{T}]=U\Sigma^{1/2}\mathbb{E}[zz^{T}]\Sigma^{1/2}U^{T}=0$，同理 $\mathbb{E}[YY^{T}]=V\Sigma^{1/2}\mathbb{E}[\overline{z}\overline{z}^{T}]\Sigma^{1/2}V^{T}=0$。于是立即得到 $\mathbb{E}[X_iY_j]=B_{ij}$ 且 $\mathbb{E}[X_iX_j]=\mathbb{E}[Y_iY_j]=0$。

为证明 $R_B$ 的公式，把期望中的各项展开：

$$
\mathbb{E}\!\left[\prod_{i=1}^{N}(1+\sqrt{s}X_i)\prod_{j=1}^{N}(1+\sqrt{s}Y_j)\right]=\sum_{I,J\subseteq[N]}s^{(|I|+|J|)/2}\,\mathbb{E}\!\left[\prod_{i\in I}X_i\prod_{j\in J}Y_j\right].
$$

对右端的 Gauss 矩，由于 $\mathbb{E}[X_iX_{i'}]=0$、$\mathbb{E}[Y_jY_{j'}]=0$，可以应用 Wick 公式。若 $|I|\neq|J|$，则该 Gauss 矩为零。否则令 $I=\{i_1,\dots,i_k\}$、$J=\{j_1,\dots,j_k\}$，由 Wick 公式得

$$
\mathbb{E}\!\left[\prod_{i\in I}X_i\prod_{j\in J}Y_j\right]=\sum_{\pi\in S_k}\prod_{a=1}^{k}\mathbb{E}[X_{i_a}Y_{j_{\pi(a)}}]=\sum_{\pi\in S_k}\prod_{a=1}^{k}B_{i_a,j_{\pi(a)}}=\operatorname{per}(B[I,J]).
$$

因此

$$
\mathbb{E}\!\left[\prod_{i=1}^{N}(1+\sqrt{s}X_i)\prod_{j=1}^{N}(1+\sqrt{s}Y_j)\right]=\sum_{k=0}^{N}s^{k}\sum_{\substack{I,J\subseteq[N]\\ |I|=|J|=k}}\operatorname{per}(B[I,J])=\sum_{k=0}^{N}r_k(B)s^{k}=R_B(s),
$$

即所需结论。$\square$

接下来，我们把永久式 $\operatorname{per}D$ 表示为 $R_B$ 在一个随机变量处取值的期望。

**引理 3.4。** 若 $D=J_N+B$ 是 $N\times N$ 矩阵，且 $T$ 服从 Gamma 分布 $\Gamma(N+1,1)$，则

$$
\frac{N^{N}\operatorname{per}D}{N!}=\mathbb{E}[R_B(N/T)],
$$

其中期望对 $T$ 取。

**证明。** $T$ 的密度为 $t^{N}e^{-t}/N!$，因此对每个 $0\le k\le N$ 都有

$$
\mathbb{E}[T^{-k}]=\frac{(N-k)!}{N!}.
$$

直接计算得

$$
\begin{aligned}
\frac{N^{N}}{N!}\operatorname{per}(J_N+B)&=\frac1{N!}\sum_{\pi\in S_N}\prod_{i=1}^{N}\left(1+NB_{i,\pi(i)}\right)\\
&=\frac1{N!}\sum_{\pi\in S_N}\sum_{k=0}^{N}N^{k}\sum_{\substack{J\subseteq[N]\\ |J|=k}}\prod_{j\in J}B_{j,\pi(j)}\\
&=\frac1{N!}\sum_{k=0}^{N}N^{k}(N-k)!\sum_{\substack{I,J\subseteq[N]\\ |I|=|J|=k}}\operatorname{per}(B[I,J])\\
&=\frac1{N!}\sum_{k=0}^{N}N^{k}(N-k)!\,r_k(B)\\
&=\sum_{k=0}^{N}N^{k}\,\mathbb{E}[T^{-k}]\,r_k(B)=\mathbb{E}[R_B(N/T)],
\end{aligned}
$$

这就完成了证明。$\square$

### 3.2 车函数的渐近式

每个复对称矩阵 $\Omega$ 都可对角化为 $\Omega=U\Sigma U^{T}$，其中 $U$ 是酉矩阵、$\Sigma$ 是对角非负矩阵。于是 $A=U\Sigma^{1/2}$ 满足 $AA^{T}=\Omega$、$\|A\|_{\mathrm{op}}^{2}=\|\Omega\|_{\mathrm{op}}$、$\ker A^{T}=\ker\Omega$。特别地，若 $g\sim N(0,I)$，则 $Ag$ 是中心化复 Gauss 向量，且 $\mathbb{E}[(Ag)(Ag)^{T}]=\Omega$。在下面的引理中，我们将引入复对称矩阵 $K=I+A^{T}A$。这里 $K^{-1/2}$ 指由 $K^{-1/2}=\sum_{m=0}^{\infty}\binom{-1/2}{m}(A^{T}A)^{m}$ 给出的逆平方根，由于 $\|A^{T}A\|_{\mathrm{op}}<1$，该级数收敛。

**引理 3.5。** 设 $\Omega=U\Sigma U^{T}$ 是复对称 $d\times d$ 矩阵，$\|\Omega\|_{\mathrm{op}}<1$。令 $A=U\Sigma^{1/2}$、$K=I+A^{T}A$。对 $g\sim N(0,I_d)$，定义 $X=Ag$、$Y=AK^{-1/2}g$。则 $\mathbb{E}[XX^{T}]=\Omega$ 且 $\mathbb{E}[YY^{T}]=\Omega(I+\Omega)^{-1}$。此外，对每个多项式 $P\in\mathbb{C}[\xi_1,\dots,\xi_d]$，

$$
\mathbb{E}\!\left[P(X)e^{-X^{T}X/2}\right]=\det(I+\Omega)^{-1/2}\,\mathbb{E}[P(Y)],
$$

$$
\mathbb{E}[P(X)]=\det(I+\Omega)^{-1/2}\,\mathbb{E}\!\left[P(Y)e^{Y^{T}Y/2}\right].
$$

（以下直至本小节结束，$\det(I+\Omega)^{1/2}$ 在 $\Omega=0$ 时取 1，其余情形由解析延拓定义。）

**证明。** 首先，

$$
\mathbb{E}[XX^{T}]=A\,\mathbb{E}[gg^{T}]A^{T}=AA^{T}=U\Sigma U^{T}=\Omega.
$$

由于 $\|A^{T}A\|_{\mathrm{op}}\le\|A\|_{\mathrm{op}}^{2}<1$，矩阵 $K^{-1}$ 存在，于是

$$
AK^{-1/2}(AK^{-1/2})^{T}=A(I+A^{T}A)^{-1}A^{T}=\Omega(I+\Omega)^{-1}.
$$

因此 $\mathbb{E}[YY^{T}]=AK^{-1/2}(AK^{-1/2})^{T}=\Omega(I+\Omega)^{-1}$。

设 $S$ 是任意复对称矩阵，其 Hermite 部分（即 $(S+S^{*})/2$）正定。对每个 $v\in\mathbb{C}^{d}$ 都有

$$
(2\pi)^{-d/2}\int_{\mathbb{R}^{d}}e^{-x^{T}Sx/2+v^{T}x}\,\mathrm{d}x=\det(S)^{-1/2}e^{v^{T}S^{-1}v/2}.\tag{1}
$$

事实上，当 $S$ 为实正定矩阵、$v$ 为实向量时该式成立，一般情形由对 $v$ 与 $S$ 的解析延拓得到。先取 $S=K$、再取 $S=K^{-1}$ 应用此公式，可知对每个 $u\in\mathbb{C}^{d}$，

$$
\mathbb{E}\!\left[e^{u^{T}X-X^{T}X/2}\right]=\det(K)^{-1/2}e^{u^{T}\Omega(I+\Omega)^{-1}u/2},\qquad \mathbb{E}\!\left[e^{u^{T}Y+Y^{T}Y/2}\right]=\det(K)^{1/2}e^{u^{T}\Omega u/2}.
$$

这里 $P(\partial_u)$ 指把多项式 $P$ 中每个变量换成对 $u$ 的相应偏导数。对两个恒等式施加 $P(\partial_u)$ 并在 $u=0$ 处取值，得到

$$
\mathbb{E}\!\left[P(X)e^{-X^{T}X/2}\right]=\det(K)^{-1/2}P(\partial_u)\big|_{u=0}e^{u^{T}\Omega(I+\Omega)^{-1}u/2}=\det(K)^{-1/2}\,\mathbb{E}[P(Y)],
$$

其中最后一个等号来自 Gauss 分布的矩母函数 $\mathbb{E}[e^{u^{T}Y}]=e^{u^{T}\Omega(I+\Omega)^{-1}u/2}$。同理

$$
\mathbb{E}\!\left[P(Y)e^{Y^{T}Y/2}\right]=\det(K)^{1/2}P(\partial_u)\big|_{u=0}e^{u^{T}\Omega u/2}=\det(K)^{1/2}\,\mathbb{E}[P(X)].
$$

这些式子给出所需的恒等式，因为 $\det(K)=\det(I+A^{T}A)=\det(I+AA^{T})=\det(I+\Omega)$。$\square$

定义辅助函数 $r$ 为

$$
r(w)=(1+w)e^{-w+w^{2}/2}.
$$

注意在其展开式 $r(w)=1+\sum_{d\ge 3}a_dw^{d}$ 中，一次项与二次项都消失。

**引理 3.6。** 设 $d=2N$，$\Gamma(t)$ 是复对称 $d\times d$ 矩阵，其元素在 $t=0$ 附近解析且 $\Gamma(0)=0$。对充分接近零的 $t$，选取复矩阵 $L_t$ 使得 $L_0=0$、$L_tL_t^{T}=\Gamma(t)$，且当 $t\to 0$ 时 $\|L_t\|_{\mathrm{op}}\to 0$。若 $Z(t)=L_tg$，其中 $g\sim N(0,I_d)$，则由

$$
F(t)=\mathbb{E}\!\left[\prod_{a=1}^{d}r(Z_a(t))\right]
$$

定义的函数 $F(t)$ 在零附近解析，且与因式分解 $L_t$ 的选取无关。

**证明。** 设 $g\sim N(0,I_d)$、$Z(t)=L_tg$。由于当 $t\to 0$ 时 $\|L_t\|_{\mathrm{op}}\to 0$，可设当 $|t|$ 充分小时 $\|L_t\|_{\mathrm{op}}<1$。对 $u\in\mathbb{C}^{d}$，定义

$$
H(t,u)=\mathbb{E}\!\left[\exp\left(u^{T}Z(t)+\frac12Z(t)^{T}Z(t)\right)\right].
$$

由于 $I-L_t^{T}L_t$ 的实部正定，(1) 式给出

$$
H(t,u)=\frac1{(2\pi)^{d/2}}\int_{\mathbb{R}^{d}}\exp\left(-\frac12x^{T}(I-L_t^{T}L_t)x+u^{T}L_tx\right)\mathrm{d}x=\det(I-L_t^{T}L_t)^{-1/2}\exp\left(\frac12u^{T}L_t(I-L_t^{T}L_t)^{-1}L_t^{T}u\right)=\det(I-\Gamma(t))^{-1/2}\exp\left(\frac12u^{T}\Gamma(t)(I-\Gamma(t))^{-1}u\right),
$$

其中最后一个等号用到 $L_t(I-L_t^{T}L_t)^{-1}L_t^{T}=\Gamma(t)(I-\Gamma(t))^{-1}$，且平方根取在 $t=0$ 处等于 1 的解析分支上。

现在回顾 $r(w)=(1+w)e^{-w+w^{2}/2}$。在期望号下求导，得

$$
F(t)=\mathbb{E}\!\left[\prod_{a=1}^{d}r(Z_a(t))\right]=\prod_{a=1}^{d}(1+\partial_{u_a})H(t,u)\Big|_{u=-\mathbf{1}_d}.
$$

由于 $\Gamma(t)$ 解析且 $\Gamma(0)=0$，可知 $H(t,u)$ 在 $t=0$ 附近关于 $(t,u)$ 解析，因此 $F(t)$ 在 $t=0$ 附近解析。此外我们看到 $F$ 由 $H$ 给出，而 $H$ 又由 $\Gamma(t)=L_tL_t^{T}$ 给出。于是 $F(t)$ 与 $L_t$ 的选取无关，即所需结论。$\square$

**引理 3.7。** 假设与引理 3.6 相同。若此外存在常数 $A$ 与 $\theta\in[0,1)$，使得对每个 $m\ge 1$ 都有

$$
\max_{1\le i,j\le 2N}\left|[t^{m}]\Gamma_{ij}(t)\right|\le\frac{A}{N}\theta^{m-1}\tag{2}
$$

则可将 $F(t)$ 写成 $F(t)=1+\sum_{k\ge 1}f_kt^{k}$，且存在只依赖于 $A$ 的常数 $C<\infty$，使得对每个 $k\ge 1$ 都有

$$
|f_k|\le\sum_{E=1}^{k}\ \sum_{1\le v\le\lfloor 2E/3\rfloor}C^{E}\left(\frac{E}{N}\right)^{E-v}\binom{k-1}{E-1}\theta^{k-E}.\tag{3}
$$

**证明。** 我们先说明展开式 $F(t)=1+\sum_{k\ge 1}f_kt^{k}$ 是合法的。定义函数 $F_{\lambda}(t)=\mathbb{E}\left[\prod_{a=1}^{2N}r(\lambda Z_a(t))\right]$。由于 $\|L_t\|_{\mathrm{op}}\to 0$，可设当 $|t|$ 充分小时 $\|L_t\|_{\mathrm{op}}<1/4$。把前面的论证中的 $L_t$ 换成 $\lambda L_t$，可知 $F_{\lambda}(t)$ 在 $|\lambda|<2$ 且 $|t|$ 充分小时关于 $(\lambda,t)$ 联合解析。于是它在 $\lambda=1$ 处关于 $t$ 的 Taylor 级数局部一致收敛。

现在设 $r(w)=1+\sum_{d\ge 3}a_dw^{d}$。经过直接展开，

$$
\prod_{a=1}^{2N}r(\xi_a)=\sum_{S\subseteq[2N]}\ \sum_{\substack{d_i\ge 3\\ i\in S}}\left(\prod_{i\in S}a_{d_i}\right)\prod_{i\in S}\xi_i^{d_i}.\tag{4}
$$

对每个固定的总次数 $m$，在 $\lambda=0$ 处对 $F_{\lambda}(t)$ 求导得

$$
[\lambda^{m}]F_{\lambda}(t)=\sum_{S\subseteq[2N]}\ \sum_{\substack{d_i\ge 3\\ (i\in S)\\ \sum_{i\in S}d_i=m}}\left(\prod_{i\in S}a_{d_i}\right)\mathbb{E}\!\left[\prod_{i\in S}Z_i(t)^{d_i}\right].
$$

由 Wick 公式，奇次矩为零；而总次数为 $2E$ 的矩是 $\Gamma(t)$ 的元素的一个 $E$ 次多项式，因 $\Gamma(0)=0$，它是 $O(t^{E})$。

上面建立的展开式 $F(t)=1+\sum_{k\ge 1}f_kt^{k}$ 的局部一致收敛性因此蕴含

$$
f_k=\sum_{E=1}^{k}\ \sum_{S\subseteq[2N]}\ \sum_{\substack{d_i\ge 3\\ (i\in S)\\ \sum_{i\in S}d_i=2E}}\left(\prod_{i\in S}a_{d_i}\right)[t^{k}]\,\mathbb{E}\!\left[\prod_{i\in S}Z_i(t)^{d_i}\right].
$$

对期望中出现的每个单项式 $\prod_{i\in S}Z_i(t)^{d_i}$，令 $v=|S|$，并把它的 $2E$ 个因子列为 $Z_{j_1}(t),\dots,Z_{j_{2E}}(t)$（允许指标重复）。由于对每个 $i$ 都有 $d_i\ge 3$，故 $3v\le 2E$。又因 $\mathbb{E}[Z_i(t)Z_j(t)]=\Gamma_{ij}(t)$，Wick 公式给出

$$
\mathbb{E}\!\left[\prod_{i\in S}Z_i(t)^{d_i}\right]=\sum_{\pi\in P_2([2E])}\ \prod_{\{a,b\}\in\pi}\Gamma_{j_aj_b}(t).
$$

于是每个配对给出 $\Gamma(t)$ 的 $E$ 个元素之积。在下面几步中，我们先估计这样一个乘积中 $t^{k}$ 的系数，再估计各 $a_i$ 的乘积，最后把这些估计结合起来界住 $f_k$。

先考虑乘积 $\prod_{\ell=1}^{E}\Gamma_{p_\ell q_\ell}(t)$。由于 $\Gamma(0)=0$，每个因子都贡献 $t$ 的正幂次。因此

$$
[t^{k}]\prod_{\ell=1}^{E}\Gamma_{p_\ell q_\ell}(t)=\sum_{\substack{m_1,\dots,m_E\ge 1\\ m_1+\cdots+m_E=k}}\ \prod_{\ell=1}^{E}[t^{m_\ell}]\Gamma_{p_\ell q_\ell}(t).
$$

特别地，当 $k<E$ 时该系数为零。由 (2)，

$$
\left|[t^{k}]\prod_{\ell=1}^{E}\Gamma_{p_\ell q_\ell}(t)\right|\le\sum_{\substack{m_1,\dots,m_E\ge 1\\ m_1+\cdots+m_E=k}}\left(\frac{A}{N}\right)^{E}\theta^{\sum_{\ell=1}^{E}(m_\ell-1)}=\binom{k-1}{E-1}\left(\frac{A}{N}\right)^{E}\theta^{k-E}.\tag{5}
$$

接下来估计 $|a_i|$ 之积的和。为此定义 $G(z)=\sum_{d\ge 3}|a_d|z^{d}$。对固定的 $v$ 与 $E$，

$$
[z^{2E}]G(z)^{v}=\sum_{\substack{d_1,\dots,d_v\ge 3\\ d_1+\cdots+d_v=2E}}|a_{d_1}\cdots a_{d_v}|.
$$

对幂级数 $g(w)=\sum_{d\ge 0}g_dw^{d}$，我们定义 $\|g\|_R=\sum_{d\ge 0}|g_d|R^{d}$。此时 $\|gh\|_R\le\|g\|_R\cdot\|h\|_R$ 成立，因此

$$
G(R)\le\sum_{d\ge 0}\left|[w^{d}]r(w)\right|R^{d}\le\|1+w\|_R\cdot\|e^{-w}\|_R\cdot\|e^{w^{2}/2}\|_R=(1+R)\left(\sum_{k\ge 0}\frac{R^{k}}{k!}\right)\left(\sum_{k\ge 0}\frac{R^{2k}}{2^{k}k!}\right)=(1+R)e^{R}e^{R^{2}/2}.
$$

由于 $R\ge 1$，有 $\log(1+R)+R+\frac{R^{2}}{2}\le 3R^{2}$。因此 $G(R)\le(1+R)e^{R}e^{R^{2}/2}\le e^{3R^{2}}$。由于 $G$ 的系数非负，$[z^{2E}]G(z)^{v}\le G(R)^{v}/R^{2E}$。取 $R=\sqrt{E/v}\ge\sqrt{3/2}$，并用上面两个不等式，得 $[z^{2E}]G(z)^{v}\le e^{3E}(v/E)^{E}$，于是

$$
\binom{2N}{v}(2E-1)!!\,[z^{2E}]G(z)^{v}\le\frac{(2N)^{v}}{v!}(2E)^{E}e^{3E}\left(\frac{v}{E}\right)^{E}\le C_1^{E}N^{v}v^{E-v}\le C_1^{E}N^{v}E^{E-v},\tag{6}
$$

其中我们用了阶乘的基本不等式以及 $3v\le 2E$。这里 $C_1$ 是绝对常数。

最后，把前面的界结合起来证明关于 $f_k$ 的所需界。固定 $k\ge 1$。对 $v\ge 1$ 与 $E\ge 1$，定义 $L_{v,E}$ 为

$$
L_{v,E}=\sum_{\substack{S\subseteq[2N]\\ |S|=v}}\ \sum_{\substack{d_i\ge 3\\ (i\in S)\\ \sum_{i\in S}d_i=2E}}\left(\prod_{i\in S}|a_{d_i}|\right)\left|[t^{k}]\,\mathbb{E}\!\left[\prod_{i\in S}Z_i(t)^{d_i}\right]\right|.
$$

由逐项展开 (4) 以及当 $E>k$ 时系数为零，有

$$
|f_k|\le\sum_{E=1}^{k}\ \sum_{1\le v\le\min\{2N,\lfloor 2E/3\rfloor\}}L_{v,E}.\tag{7}
$$

对每个配对用 (5) 并对次数选择求和，得

$$
L_{v,E}\le\binom{2N}{v}(2E-1)!!\,[z^{2E}]G(z)^{v}\binom{k-1}{E-1}\left(\frac{A}{N}\right)^{E}\theta^{k-E}\le(C_1A)^{E}\left(\frac{E}{N}\right)^{E-v}\binom{k-1}{E-1}\theta^{k-E},
$$

其中最后一个不等式来自 (6)。把这个界代入 (7) 并对 $v$ 求和，把范围放大为 $1\le v\le\lfloor 2E/3\rfloor$，即得 (3) 式，常数 $C=C_1A$。$\square$

现在可以证明车多项式的下述渐近式。

**命题 3.8。** 假设命题 3.1 的条件成立且 $\rho>0$。设 $I=[a,b]\subset(0,\infty)$ 是内部包含 1 的紧区间，且满足 $b<\rho^{-1}$。则对每个 $s\in I$，

$$
R_B(s)=(1+o(1))\cdot\det(I-s^{2}B^{T}B)^{-1/2}.
$$

**证明。** 令 $F_s(t)=R_{tB}(s)\det(I-s^{2}t^{2}B^{T}B)^{1/2}$，于是只需证明 $F_s(1)=1+o(1)$ 关于 $s\in I$ 一致成立。证明的第一步是把 $F_s(t)$ 表示为一个涉及 Gauss 向量的期望，其协方差可以显式计算。这一改写将使我们能用 Wick 公式估计 $F_s(t)$ 的系数。对 $s\in I$，定义矩阵

$$
\Omega_{s,t}=\begin{pmatrix}0&stB\\ stB^{T}&0\end{pmatrix}.
$$

固定某个满足 $|st|\,\|B\|_{\mathrm{op}}<1$ 的 $t\in\mathbb{C}$。与引理 3.5 中一样，把 $\Omega_{s,t}$ 对角化为 $\Omega_{s,t}=U\Sigma U^{T}$ 并令 $A_{s,t}=U\Sigma^{1/2}$。令 $K_{s,t}=I+A_{s,t}^{T}A_{s,t}$，并对 $g\sim N(0,I_{2N})$ 定义 $X_{s,t}=A_{s,t}g$、$Y_{s,t}=A_{s,t}K_{s,t}^{-1/2}g$。则 $\mathbb{E}[X_{s,t}X_{s,t}^{T}]=\Omega_{s,t}$，$\mathbb{E}[Y_{s,t}Y_{s,t}^{T}]=\Omega_{s,t}(I+\Omega_{s,t})^{-1}$。由 $\Omega_{s,t}$ 的定义与 Wick 公式，

$$
\mathbb{E}\!\left[\prod_{a=1}^{2N}(1+X_{s,t,a})\right]=\sum_{k=0}^{N}(st)^{k}\sum_{\substack{I_0,J_0\subseteq[N]\\ |I_0|=|J_0|=k}}\operatorname{per}B[I_0,J_0]=R_{tB}(s).
$$

由于 $B\mathbf{1}_N=B^{T}\mathbf{1}_N=0$，有 $\Omega_{s,t}\mathbf{1}_{2N}=0$。由构造知 $\ker A_{s,t}^{T}=\ker\Omega_{s,t}$，故 $\mathbf{1}_{2N}^{T}Y_{s,t}=0$ 几乎必然成立。对多项式 $P(\xi)=\prod_{a=1}^{2N}(1+\xi_a)$，有

$$
P(Y_{s,t})e^{Y_{s,t}^{T}Y_{s,t}/2}=\prod_{a=1}^{2N}r\big((Y_{s,t})_a\big).
$$

因此引理 3.5 中的第二个恒等式给出

$$
R_{tB}(s)=\det(I+\Omega_{s,t})^{-1/2}\,\mathbb{E}\!\left[\prod_{a=1}^{2N}r\big((Y_{s,t})_a\big)\right].
$$

用 Schur 补可以验证 $\det(I+\Omega_{s,t})=\det(I-s^{2}t^{2}B^{T}B)$。把它与上式结合，得

$$
F_s(t)=\mathbb{E}\!\left[\prod_{a=1}^{2N}r\big((Y_{s,t})_a\big)\right].
$$

最后，令 $q=\|\Omega_{s,t}\|_{\mathrm{op}}=|st|\,\|B\|_{\mathrm{op}}$。注意用二项级数展开 $K_{s,t}^{-1/2}$ 可知，当 $t\to 0$ 时，

$$
\left\|A_{s,t}K_{s,t}^{-1/2}\right\|_{\mathrm{op}}^{2}=\left\|A_{s,t}\sum_{m=0}^{\infty}\binom{-1/2}{m}(A_{s,t}^{T}A_{s,t})^{m}\right\|_{\mathrm{op}}^{2}\le q\left(\sum_{m=0}^{\infty}\left|\binom{-1/2}{m}\right|q^{m}\right)^{2}=\frac{q}{1-q}\longrightarrow 0.
$$

于是 $A_{s,t}K_{s,t}^{-1/2}g$ 恰好具有应用引理 3.6 所需的形式，这将在下一步中用到。

下一步将估计 $\widehat{\Omega}_{s,t}=\Omega_{s,t}(I+\Omega_{s,t})^{-1}$ 各元素展开式中的系数。注意 $\widehat{\Omega}_{s,t}$ 可以通过分块矩阵求逆显式算出。事实上，若 $H=stB$，则

$$
\widehat{\Omega}_{s,t}=\begin{pmatrix}-HH^{T}(I-HH^{T})^{-1}&H(I-H^{T}H)^{-1}\\ H^{T}(I-HH^{T})^{-1}&-H^{T}H(I-H^{T}H)^{-1}\end{pmatrix}.
$$

因此 $\widehat{\Omega}_{s,t}$ 的左上块为 $-\sum_{q\ge 1}s^{2q}t^{2q}(BB^{T})^{q}$，右上块为 $\sum_{q\ge 0}s^{2q+1}t^{2q+1}B(B^{T}B)^{q}$，左下块为 $\sum_{q\ge 0}s^{2q+1}t^{2q+1}B^{T}(BB^{T})^{q}$，右下块为 $-\sum_{q\ge 1}s^{2q}t^{2q}(B^{T}B)^{q}$。

假设 $\|B\|_{\max}\le A_0/N$ 蕴含

$$
\max_{1\le i\le N}\|e_i^{T}B\|_2\le\frac{A_0}{\sqrt{N}},\qquad \max_{1\le j\le N}\|Be_j\|_2\le\frac{A_0}{\sqrt{N}}.
$$

对任意整数 $q\ge 1$，结合假设 $\|B\|_{\mathrm{op}}\le\rho$，可得

$$
|e_i^{T}(BB^{T})^{q}e_j|=|(B^{T}e_i)^{T}(B^{T}B)^{q-1}(B^{T}e_j)|\le\frac{A_0^{2}}{N}\rho^{2q-2}.
$$

因此

$$
\max_{1\le i,j\le N}\left|[t^{2q}](\widehat{\Omega}_{s,t})_{ij}\right|\le s^{2q}\frac{A_0^{2}}{N}\rho^{2q-2}\le\frac{A_0^{2}\rho^{-2}}{N}(b\rho)^{2q},
$$

其中 $[t^{2q}](\widehat{\Omega}_{s,t})_{ij}$ 表示提取 $(\widehat{\Omega}_{s,t})_{ij}$ 展开式中 $t^{2q}$ 的系数。对 $\widehat{\Omega}_{s,t}$ 的其他块作同样的论证，得到

$$
\max_{1\le i,j\le 2N}\left|[t^{m}](\widehat{\Omega}_{s,t})_{ij}\right|\le\frac{C}{N}(s\rho)^{m-1},\tag{8}
$$

其中 $m\ge 1$，$C$ 是依赖于 $A_0$ 与 $\rho$ 的某个常数。

设 $F_s(t)=1+\sum_{k\ge 1}f_k(s)t^{k}$，回顾我们要证 $F_s(1)=1+o(1)$ 关于 $s\in I$ 一致成立。这一步中我们估计小的 $k$ 对应的 $f_k(s)$。令 $\theta=b\rho<1$，由于 $s\le b$，由 (8) 可知对每个 $m\ge 1$，

$$
\max_{1\le i,j\le 2N}\left|[t^{m}]\big(\Omega_{s,t}(I+\Omega_{s,t})^{-1}\big)_{ij}\right|\le\frac{C}{N}\theta^{m-1}
$$

关于 $s\in I$ 一致成立。在下文的论证中，常数 $C$ 始终只依赖于 $A_0,\rho$ 与 $I$，但可能逐行改变。

对 $\Gamma(t)=\Omega_{s,t}(I+\Omega_{s,t})^{-1}$ 与 $Z(t)=A_{s,t}K_{s,t}^{-1/2}g$ 应用引理 3.7。回顾所需条件 $\|A_{s,t}K_{s,t}^{-1/2}\|_{\mathrm{op}}\to 0$ 已在证明开头验证。由该引理，

$$
|f_k(s)|\le\sum_{E=1}^{k}\ \sum_{1\le v\le\lfloor 2E/3\rfloor}C^{E}\left(\frac{E}{N}\right)^{E-v}\binom{k-1}{E-1}\theta^{k-E}.
$$

固定一个正常数 $K$，其值稍后确定。把这个 $|f_k(s)|$ 的上界对 $1\le k\le K\sqrt{N}$ 求和并交换求和次序，得

$$
\sum_{1\le k\le K\sqrt{N}}|f_k(s)|\le\sum_{E\le K\sqrt{N}}\ \sum_{1\le v\le\lfloor 2E/3\rfloor}C^{E}\left(\frac{E}{N}\right)^{E-v}\sum_{k=E}^{K\sqrt{N}}\binom{k-1}{E-1}\theta^{k-E}\le\sum_{E\le K\sqrt{N}}\ \sum_{1\le v\le\lfloor 2E/3\rfloor}C^{E}\left(\frac{E}{N}\right)^{E-v}\sum_{k=E}^{\infty}\binom{k-1}{E-1}\theta^{k-E}=\sum_{E\le K\sqrt{N}}\ \sum_{1\le v\le\lfloor 2E/3\rfloor}C^{E}\left(\frac{E}{N}\right)^{E-v}(1-\theta)^{-E}.
$$

由于 $v\le 2E/3$，有 $E-v\ge E/3$。于是把 $C$ 放大后，

$$
C^{E}(1-\theta)^{-E}\left(\frac{E}{N}\right)^{E-v}\le\left(\frac{CE}{N}\right)^{E-v}.
$$

由此，

$$
\sum_{1\le k\le K\sqrt{N}}|f_k(s)|\le\sum_{E\le K\sqrt{N}}\ \sum_{1\le v\le\lfloor 2E/3\rfloor}\left(\frac{CE}{N}\right)^{E-v}\le\sum_{E\le K\sqrt{N}}\ \sum_{j\ge\lceil E/3\rceil}\left(\frac{CE}{N}\right)^{j}=\sum_{E\le K\sqrt{N}}\frac{(CE/N)^{\lceil E/3\rceil}}{1-CE/N}\le\sum_{E\le K\sqrt{N}}\frac{(CK/\sqrt{N})^{\lceil E/3\rceil}}{1-CK/\sqrt{N}}\le\frac1{1-CK/\sqrt{N}}\sum_{E\ge 1}\left(\frac{CK}{\sqrt{N}}\right)^{E/3}=\frac1{1-CK/\sqrt{N}}\cdot\frac{(CK/\sqrt{N})^{1/3}}{1-(CK/\sqrt{N})^{1/3}}=o(1).
$$

剩下要估计那些 $k>K\sqrt{N}$ 的系数 $f_k(s)$。取 $R>1$ 使 $R\theta<1$。由于 $F_s(t)=R_{tB}(s)\det(I-s^{2}t^{2}B^{T}B)^{1/2}$ 且 $sR\|B\|_{\mathrm{op}}\le R\theta<1$，对每个 $s\in I$，$F_s$ 在闭圆盘 $|t|\le R$ 的一个邻域内解析。下文始终限制 $|t|\le R$。

设 $z=(z_1,\dots,z_r)^{T}$ 是相互独立的标准复 Gauss 随机变量构成的向量，并按引理 3.3 的证明由 $z$ 定义 $X,Y$。则对每个复 $t$，

$$
R_{tB}(s)=R_B(st)=\mathbb{E}\!\left[\prod_{i=1}^{N}(1+\sqrt{st}X_i)\prod_{j=1}^{N}(1+\sqrt{st}Y_j)\right].\tag{9}
$$

由于 $B\mathbf{1}_N=B^{T}\mathbf{1}_N=0$，引理 3.3 的构造给出 $\sum_{i=1}^{N}X_i=\sum_{j=1}^{N}Y_j=0$。利用这一点与算术—几何平均不等式，我们有

$$
\prod_{i=1}^{N}|1+\sqrt{st}X_i|\le\left(\frac1N\sum_{i=1}^{N}|1+\sqrt{st}X_i|^{2}\right)^{N/2}=\left(1+\frac{s|t|}{N}\|X\|_2^{2}\right)^{N/2},
$$

对 $Y_i$ 也有类似的估计。记 $q=z^{*}\Sigma z=\|X\|_2^{2}=\|Y\|_2^{2}$。由 (9) 可知，对所有 $s\in I$ 与 $|t|\le R$，

$$
|R_{tB}(s)|\le\mathbb{E}\!\left[\left(1+\frac{sRq}{N}\right)^{N}\right]\le\mathbb{E}[e^{sRq}]=\prod_{\ell}(1-sR\sigma_\ell)^{-1},
$$

其中 $\sigma_\ell$ 是 $B$ 的奇异值。注意这里用了 $\mathbb{E}[e^{az_i^{*}z_i}]=(1-a)^{-1}$（$\operatorname{Re}(a)<1$），其合法性由 $sR\sigma_\ell\le bR\rho<1$ 保证。由初等不等式 $\log\left(\frac1{1-x}\right)\le\frac{x}{1-x}$（$0\le x<1$），有 $-\log(1-sR\sigma_\ell)\le-\log(1-bR\sigma_\ell)\le C\sigma_\ell$，其中 $C=bR/(1-bR\rho)$。因此

$$
\log\prod_{\ell}(1-sR\sigma_\ell)^{-1}\le C\sum_{\ell}\sigma_\ell\le C\sqrt{N}\left(\sum_{\ell}\sigma_\ell^{2}\right)^{1/2}\le C\sqrt{N}\|B\|_{F}\le C\sqrt{N},
$$

这里用了 Cauchy–Schwarz 不等式与 $\|B\|_F^{2}\le N^{2}\|B\|_{\max}^{2}\le A_0^{2}$。我们得出结论：对每个 $s\in I$，$\max_{|t|=R}|R_{tB}(s)|\le e^{C\sqrt{N}}$，且

$$
\left|\det(I-s^{2}t^{2}B^{T}B)^{1/2}\right|=\prod_{\ell}|1-s^{2}t^{2}\sigma_\ell^{2}|^{1/2}\le\prod_{\ell}(1+s^{2}R^{2}\sigma_\ell^{2})^{1/2}\le\exp\left(\frac{s^{2}R^{2}}{2}\sum_{\ell}\sigma_\ell^{2}\right)=\exp\left(\frac{s^{2}R^{2}}{2}\|B\|_F^{2}\right)\le e^{C}.
$$

两者合起来表明 $\max_{|t|\le R}|F_s(t)|\le e^{C\sqrt{N}+C}$。现在由 Cauchy 积分公式，

$$
|f_k(s)|\le\frac1{2\pi}\int_{|t|=R}\frac{|F_s(t)|}{|t|^{k+1}}|\mathrm{d}t|\le\frac1{2\pi}\cdot 2\pi R\cdot\frac{e^{C\sqrt{N}+C}}{R^{k+1}}=e^{C\sqrt{N}+C}R^{-k}.
$$

现在选取充分大的常数 $K$ 使 $K\log R>C$。取这个 $K$ 值，

$$
\sum_{k>K\sqrt{N}}|f_k(s)|\le e^{C\sqrt{N}+C}\frac{R^{-K\sqrt{N}}}{1-R^{-1}}=o(1).
$$

把 $k\le K\sqrt{N}$ 与 $k>K\sqrt{N}$ 的贡献加起来，得到 $\sum_{k\ge 1}|f_k(s)|=o(1)$。特别地，$F_s(1)=1+o(1)$，即所需结论。$\square$

### 3.3 命题 3.1 的证明

$\rho=0$ 的情形立即可得，因为此时 $B=0$。因此可设 $0<\rho<1$。选取常数 $0<a<1<b<\rho^{-1}$，并令 $I=[a,b]$。设 $T\sim\Gamma(N+1,1)$，定义

$$
A_N:=\left\{\frac{N}{T}\in I\right\}=\left\{\frac{N}{b}\le T\le\frac{N}{a}\right\}.
$$

则 $T/N\to 1$ 依概率成立，且 $\mathbb{P}(A_N)=1-o(1)$。对 $s\in I$，记 $\Delta(s)=\det(I-s^{2}B^{T}B)^{-1/2}$。设 $\sigma_1,\dots,\sigma_r$ 是 $B$ 的非零奇异值。由于 $\sigma_\ell\le\rho$ 且 $\sum_\ell\sigma_\ell^{2}=\|B\|_F^{2}\le A_0^{2}$，由初等不等式 $\log\left(\frac1{1-x}\right)\le\frac{x}{1-x}$（$0\le x<1$）得

$$
0\le\log\Delta(s)=-\frac12\sum_{\ell=1}^{r}\log(1-s^{2}\sigma_\ell^{2})\le\frac12\sum_{\ell=1}^{r}\log\left(\frac1{1-b^{2}\sigma_\ell^{2}}\right)\le\frac{b^{2}}{2(1-b^{2}\rho^{2})}\sum_{\ell=1}^{r}\sigma_\ell^{2}\le C.
$$

此外

$$
\frac{\Delta'(s)}{\Delta(s)}=s\sum_{\ell=1}^{r}\frac{\sigma_\ell^{2}}{1-s^{2}\sigma_\ell^{2}},
$$

因此

$$
\sup_{s\in I}|\Delta'(s)|\le\sup_{s\in I}|\Delta(s)|\,\frac{bA_0^{2}}{1-b^{2}\rho^{2}}\le C.
$$

于是

$$
\left|\mathbb{E}[\mathbf{1}_{A_N}\Delta(N/T)]-\Delta(1)\right|\le\left|\mathbb{E}[\mathbf{1}_{A_N}(\Delta(N/T)-\Delta(1))]\right|+\Delta(1)\mathbb{P}(A_N^{c})\le C\,\mathbb{E}[\mathbf{1}_{A_N}|N/T-1|]+o(1)=o(1),
$$

其中用了 $T/N\to 1$ 依概率成立。因此由命题 3.8，

$$
\mathbb{E}[\mathbf{1}_{A_N}R_B(N/T)]=\Delta(1)+o(1).\tag{10}
$$

下面断言 $\mathbb{E}[\mathbf{1}_{A_N^{c}}R_B(N/T)]=o(1)$。仍取引理 3.3 中的 $X,Y,z$，于是 $z^{*}\Sigma z=\|X\|_2^{2}=\|Y\|_2^{2}$。如前，$B\mathbf{1}_N=B^{T}\mathbf{1}_N=0$ 蕴含 $\sum_{i=1}^{N}X_i=\sum_{j=1}^{N}Y_j=0$。对每个 $u\ge 0$，由算术—几何平均不等式与引理 3.3 得

$$
|R_B(u)|\le\mathbb{E}\!\left[\prod_{i=1}^{N}|1+\sqrt{u}X_i|\prod_{j=1}^{N}|1+\sqrt{u}Y_j|\right]\le\mathbb{E}\!\left[\left(\frac1N\sum_{i=1}^{N}|1+\sqrt{u}X_i|^{2}\right)^{N/2}\left(\frac1N\sum_{j=1}^{N}|1+\sqrt{u}Y_j|^{2}\right)^{N/2}\right]=\mathbb{E}\!\left[\left(1+\frac{uz^{*}\Sigma z}{N}\right)^{N/2}\left(1+\frac{uz^{*}\Sigma z}{N}\right)^{N/2}\right]=\mathbb{E}\!\left[\left(1+\frac{uz^{*}\Sigma z}{N}\right)^{N}\right].
$$

因此

$$
\mathbb{E}_T\!\left[\mathbf{1}_{A_N^{c}}|R_B(N/T)|\right]\le\mathbb{E}_z\!\left[\frac1{N!}\int_{\{t>0:\,N/t\notin I\}}\left(1+\frac{z^{*}\Sigma z}{t}\right)^{N}t^{N}e^{-t}\mathrm{d}t\right]=\mathbb{E}_z\!\left[\frac1{N!}\int_{\{t>0:\,N/t\notin I\}}(t+z^{*}\Sigma z)^{N}e^{-t}\mathrm{d}t\right].\tag{11}
$$

设 $U$ 是服从 $\Gamma(N+1,1)$ 的随机变量。对固定的 $z$，作变量替换可知

$$
\frac1{N!}\int_{\{t>0:\,N/t\notin I\}}(t+z^{*}\Sigma z)^{N}e^{-t}\mathrm{d}t=e^{z^{*}\Sigma z}\,\mathbb{P}\!\left(U-z^{*}\Sigma z\notin\left[\frac{N}{b},\frac{N}{a}\right],\ U\ge z^{*}\Sigma z\right).\tag{12}
$$

选取充分小的 $\varepsilon$，并先假设 $z^{*}\Sigma z\le\varepsilon N$。此时在该事件上，

$$
\left\{U-z^{*}\Sigma z\notin\left[\frac{N}{b},\frac{N}{a}\right]\right\}\subseteq\left\{U\le\left(\frac1b+\varepsilon\right)N\right\}\cup\left\{U\ge\frac{N}{a}\right\}.
$$

由于 $a<1<b$，存在 $\delta_-,\delta_+>0$ 使 $\frac1b+\varepsilon\le 1-\delta_-$ 且 $\frac1a\ge 1+\delta_+$ 成立。对 $0<\theta<1$，利用 $\mathbb{E}[e^{\theta U}]=(1-\theta)^{-(N+1)}$ 与 Chernoff 界，有

$$
\mathbb{P}(U\ge(1+\delta_+)N)\le e^{-\theta(1+\delta_+)N}\mathbb{E}[e^{\theta U}]=e^{-\theta(1+\delta_+)N}(1-\theta)^{-(N+1)}\le e^{-c_+N}
$$

（取合适的 $\theta>0$ 及某个 $c_+>0$）。同理，

$$
\mathbb{P}(U\le(1-\delta_-)N)\le e^{\theta(1-\delta_-)N}(1+\theta)^{-(N+1)}\le e^{-c_-N}
$$

（对某个 $c_->0$）。从而

$$
\mathbb{P}\!\left(U-z^{*}\Sigma z\notin\left[\frac{N}{b},\frac{N}{a}\right],\ U\ge z^{*}\Sigma z\right)\le e^{-c_-N}+e^{-c_+N}\le e^{-cN}\tag{13}
$$

（对某个更小的常数 $c>0$）。

对事件 $z^{*}\Sigma z\ge\varepsilon N$，取 $\lambda>1$ 使 $\lambda\rho<1$。我们有

$$
\mathbb{E}_z\!\left[e^{z^{*}\Sigma z}\mathbf{1}_{\{z^{*}\Sigma z>\varepsilon N\}}\right]\le e^{-(\lambda-1)\varepsilon N}\mathbb{E}_z[e^{\lambda z^{*}\Sigma z}]=e^{-(\lambda-1)\varepsilon N}\prod_{\ell=1}^{r}(1-\lambda\sigma_\ell)^{-1}.
$$

由于 $\lambda\sigma_\ell\le\lambda\rho<1$，如前有 $\log\prod_{\ell=1}^{r}(1-\lambda\sigma_\ell)^{-1}\le C\sum_{\ell=1}^{r}\sigma_\ell\le C\sqrt{N}\|B\|_F\le C\sqrt{N}$。于是

$$
\mathbb{E}_z\!\left[e^{z^{*}\Sigma z}\mathbf{1}_{\{z^{*}\Sigma z>\varepsilon N\}}\right]\le\exp\left(-(\lambda-1)\varepsilon N+C\sqrt{N}\right).
$$

由于 $\lambda>1$ 且 $z^{*}\Sigma z\ge 0$，同一个指数矩估计还给出 $\mathbb{E}_z[e^{z^{*}\Sigma z}]\le\mathbb{E}_z[e^{\lambda z^{*}\Sigma z}]\le e^{C\sqrt{N}}$。把它与 (11)、(12)、(13) 结合起来，

$$
\mathbb{E}_T\!\left[\mathbf{1}_{A_N^{c}}|R_B(N/T)|\right]\le\mathbb{E}_z\!\left[e^{z^{*}\Sigma z}\,\mathbb{P}\!\left(U-z^{*}\Sigma z\notin\left[\frac{N}{b},\frac{N}{a}\right],\ U\ge z^{*}\Sigma z\right)\right]\le e^{-cN}\mathbb{E}_z\!\left[e^{z^{*}\Sigma z}\mathbf{1}_{\{z^{*}\Sigma z\le\varepsilon N\}}\right]+\mathbb{E}_z\!\left[e^{z^{*}\Sigma z}\mathbf{1}_{\{z^{*}\Sigma z>\varepsilon N\}}\right]\le e^{-cN+C\sqrt{N}}+e^{-(\lambda-1)\varepsilon N+C\sqrt{N}}=o(1).
$$

结合引理 3.4 与 (10)，我们现在有

$$
\frac{N^{N}\operatorname{per}D}{N!}=\mathbb{E}[R_B(N/T)]=\det(I-B^{T}B)^{-1/2}+o(1).
$$

最后，由于 $1\le\det(I-B^{T}B)^{-1/2}\le e^{C}$，我们可以把加性误差改写为乘性误差，即

$$
\frac{N^{N}\operatorname{per}D}{N!}=(1+o(1))\det(I-B^{T}B)^{-1/2},
$$

即所需结论。$\square$

## 4. Sinkhorn 缩放

让我们回顾 Sinkhorn 定理：对任意元素为正的 $n\times n$ 矩阵 $A$，存在向量 $x,y\in\mathbb{R}^{n}$ 使 $\operatorname{diag}(e^{x})A\operatorname{diag}(e^{y})$ 是双随机矩阵，其中 $\operatorname{diag}(e^{x})$ 是以 $(e^{x_1},e^{x_2},\dots,e^{x_n})$ 为对角元的对角矩阵，$\operatorname{diag}(e^{y})$ 类似定义。

本节的目标是证明下述陈述的一个定量版本：当对一个已经接近双随机的矩阵应用 Sinkhorn 定理时，向量 $x,y$ 可以取得很小。这在我们应用中有如下用处。正则竞赛图的邻接矩阵总是双随机矩阵的一个纯量倍，我们可以把这样的双随机矩阵代入命题 3.1 以提取其永久式的信息。上界（定理 1.2）的证明中需要考虑的竞赛图未必正则，但可以证明它们“接近”正则，特别地其邻接矩阵接近某个双随机矩阵的纯量倍。为了通过命题 3.1 提取这些矩阵永久式的信息，我们将施加 Sinkhorn 缩放以得到一个双随机矩阵，并需要证明缩放矩阵 $\operatorname{diag}(e^{x})$ 与 $\operatorname{diag}(e^{y})$ 接近单位矩阵。为此，我们需要：

**命题 4.1。** 设 $A_0<\infty$、$\rho<1$。设 $Q$ 是非负 $N\times N$ 矩阵，$\|Q\|_{\max}\le A_0/N$。设 $u,v\in\mathbb{R}^{N}$ 由 $u=Q\mathbf{1}_N-\mathbf{1}_N$ 与 $v=Q^{T}\mathbf{1}_N-\mathbf{1}_N$ 给出，并令 $P=\operatorname{diag}(Q\mathbf{1}_N)^{-1/2}Q\operatorname{diag}(Q^{T}\mathbf{1}_N)^{-1/2}$。假设 $\sigma_2(P)\le\rho+o(1)$ 且

$$
\|u\|_\infty+\|v\|_\infty+\frac{\|u\|_2+\|v\|_2}{\sqrt{N}}=o(1).
$$

则存在向量 $x,y\in\mathbb{R}^{N}$ 使 $\operatorname{diag}(e^{x})Q\operatorname{diag}(e^{y})$ 双随机，且 $\|x\|_2+\|y\|_2=O(\|u\|_2+\|v\|_2)$、$\|x\|_\infty+\|y\|_\infty=o(1)$。

命题 4.1 的证明主要成分是 Banach 不动点定理（也称压缩映射定理）的应用。我们先在下面几个引理中记录一些线性代数事实。

**引理 4.2。** 设 $Q$ 是非负 $N\times N$ 矩阵，行和与列和均为正，令 $r=Q\mathbf{1}_N$、$c=Q^{T}\mathbf{1}_N$。若 $P=\operatorname{diag}(r)^{-1/2}Q\operatorname{diag}(c)^{-1/2}$，则 $\|P\|_{\mathrm{op}}=1$、$Pc^{1/2}=r^{1/2}$、$P^{T}r^{1/2}=c^{1/2}$，其中平方根按坐标取。

**证明。** 对 $\alpha,\beta\in\mathbb{R}^{N}$，Cauchy–Schwarz 不等式给出

$$
|\alpha^{T}P\beta|=\left|\sum_{1\le i,j\le N}\frac{Q_{ij}\alpha_i\beta_j}{\sqrt{r_i}\sqrt{c_j}}\right|\le\left(\sum_{1\le i,j\le N}\frac{Q_{ij}\alpha_i^{2}}{r_i}\right)^{1/2}\left(\sum_{1\le i,j\le N}\frac{Q_{ij}\beta_j^{2}}{c_j}\right)^{1/2}=\|\alpha\|_2\|\beta\|_2.
$$

因此 $\|P\|_{\mathrm{op}}\le 1$。另一方面，$P^{T}Pc^{1/2}=P^{T}r^{1/2}=c^{1/2}$，故 1 是 $P$ 的一个奇异值，从而 $\|P\|_{\mathrm{op}}=1$。$\square$

**引理 4.3。** 在引理 4.2 的假设下，再设 $\sigma_2(P)\le\rho<1$。若 $M=\begin{pmatrix}I&P\\ P^{T}&I\end{pmatrix}$，则 $\ker M=\operatorname{span}\{(r^{1/2},-c^{1/2})\}$，且对一切满足 $\xi\perp(r^{1/2},-c^{1/2})$ 的 $\xi\in\mathbb{R}^{2N}$ 都有 $\langle\xi,M\xi\rangle\ge(1-\rho)\|\xi\|_2^{2}$。

**证明。** 设 $P=U\Sigma V^{T}$ 是奇异值分解，其中 $\Sigma$ 是对角矩阵 $\operatorname{diag}(\sigma_1(P),\dots,\sigma_N(P))$。考虑矩阵 $\widehat{M}$：

$$
\widehat{M}=\begin{pmatrix}U^{T}&0\\ 0&V^{T}\end{pmatrix}M\begin{pmatrix}U&0\\ 0&V\end{pmatrix}=\begin{pmatrix}I&\Sigma\\ \Sigma&I\end{pmatrix}.
$$

对每个 $1\le k\le N$，由 $(e_k,0)$ 与 $(0,e_k)$ 张成的子空间在右端矩阵下不变，且 $\widehat{M}$ 在该子空间上的限制为 $\begin{pmatrix}1&\sigma_k(P)\\ \sigma_k(P)&1\end{pmatrix}$。因此它的两个特征值是 $1+\sigma_k(P)$ 与 $1-\sigma_k(P)$，于是 $M$ 的特征值是 $1+\sigma_k(P)$ 与 $1-\sigma_k(P)$（$1\le k\le N$）。

由于 $\sigma_1(P)=1$ 且 $\sigma_2(P)\le\rho<1$，$M$ 恰有一个特征值为零。因此 $M$ 的核是一维的。引理 4.2 中的恒等式表明 $(r^{1/2},-c^{1/2})$ 属于此核。由于其余特征值都至少为 $1-\rho$，即得 $\langle\xi,M\xi\rangle\ge(1-\rho)\|\xi\|_2^{2}$，如所需。$\square$

本节余下部分，我们使用如下为一对向量 $a,b$ 定义的辅助范数：

$$
\|(a,b)\|_*=\|a\|_\infty+\|b\|_\infty+\frac{\|a\|_2+\|b\|_2}{\sqrt{N}}.
$$

**引理 4.4。** 在引理 4.3 的假设下，再设 $\frac12\le r_i,c_j\le\frac32$ 且 $\|Q\|_{\max}\le A_0/N$。若 $f,h\in\mathbb{R}^{N}$ 满足 $\langle\mathbf{1}_N,f\rangle=\langle\mathbf{1}_N,h\rangle$，则存在唯一的一对 $(a,b)$ 满足

$$
\begin{cases}\operatorname{diag}(r)a+Qb=f,\\ Q^{T}a+\operatorname{diag}(c)b=h,\\ \langle r,a\rangle=\langle c,b\rangle.\end{cases}\tag{14}
$$

此外，存在常数 $C=C(A_0,\rho)$ 使得

$$
\|a\|_2+\|b\|_2\le C(\|f\|_2+\|h\|_2)\tag{15}
$$

且

$$
\|(a,b)\|_*\le C\|(f,h)\|_*.\tag{16}
$$

**证明。** 令 $\alpha=\operatorname{diag}(r)^{1/2}a$、$\beta=\operatorname{diag}(c)^{1/2}b$、$\phi=\operatorname{diag}(r)^{-1/2}f$、$\psi=\operatorname{diag}(c)^{-1/2}h$、$\kappa=(r^{1/2},-c^{1/2})$。用这些记号，(14) 中前两个方程变为 $\alpha+P\beta=\phi$ 与 $P^{T}\alpha+\beta=\psi$。由于 $\langle\mathbf{1}_N,f\rangle=\langle\mathbf{1}_N,h\rangle$ 即 $(\phi,\psi)\perp\kappa$，引理 4.3 表明该方程组在 $\kappa^{\perp}$ 中有唯一解 $(\alpha,\beta)$，这就证明了 (14)。同样由引理 4.3，

$$
(\|\alpha\|_2^{2}+\|\beta\|_2^{2})^{1/2}\le\frac1{1-\rho}(\|\phi\|_2^{2}+\|\psi\|_2^{2})^{1/2}.
$$

由于 $r$ 与 $c$ 的所有坐标都落在区间 $[1/2,3/2]$ 内，这就证明了 (15)。对最后一个估计，注意 $0\le P_{ij}\le 2A_0/N$，故 $\alpha+P\beta=\phi$ 给出

$$
\|\alpha\|_\infty\le\|\phi\|_\infty+\frac{2A_0}{N}\|\beta\|_1\le\|\phi\|_\infty+\frac{2A_0}{\sqrt{N}}\|\beta\|_2,
$$

类似地 $\|\beta\|_\infty\le\|\psi\|_\infty+\frac{2A_0}{\sqrt{N}}\|\alpha\|_2$。把它与 (15) 结合并再次使用 $r_i,c_j\in[1/2,3/2]$，即得 (16)。$\square$

现在我们准备证明命题 4.1。

**命题 4.1 的证明。** 令 $r=Q\mathbf{1}_N=\mathbf{1}_N+u$、$c=Q^{T}\mathbf{1}_N=\mathbf{1}_N+v$，并令 $\eta=\|(u,v)\|_*$。由假设 $\eta=o(1)$，故对一切充分大的 $N$，$r$ 与 $c$ 的每个坐标都落在区间 $[1/2,3/2]$ 内。由于 $\sigma_2(P)\le\rho+o(1)$，对一切充分大的 $N$ 有 $\sigma_2(P)\le\frac{1+\rho}{2}$。

我们先对 $a,b\in\mathbb{R}^{N}$ 定义向量 $R(a,b)=(R_1(a,b),R_2(a,b))\in\mathbb{R}^{2N}$，其中

$$
R_1(a,b)_i=\sum_{j=1}^{N}Q_{ij}(e^{a_i+b_j}-1-a_i-b_j),
$$

$$
R_2(a,b)_j=\sum_{i=1}^{N}Q_{ij}(e^{a_i+b_j}-1-a_i-b_j).
$$

注意 $R_1(a,b)$ 与 $R_2(a,b)$ 各坐标之和相等。我们将记录若干关于 $R$ 的估计，后文会用到。令 $\varphi(t)=e^{t}-1-t$、$m=\|a\|_\infty+\|b\|_\infty$。当 $m\le 1$ 时，$\varphi(t)$ 在 $t=0$ 附近的 Taylor 展开给出 $|\varphi(a_i+b_j)|\le Cm(|a_i|+|b_j|)$，其中 $C$ 是某个绝对常数。于是

$$
|R_1(a,b)_i|\le Cm\big(\operatorname{diag}(r)|a|+Q|b|\big)_i,\qquad |R_2(a,b)_j|\le Cm\big(Q^{T}|a|+\operatorname{diag}(c)|b|\big)_j.
$$

由于 $Q$ 的每一行和与每一列和都至多为 $3/2$，Schur 检验给出 $\|Q\|_{\mathrm{op}}\le 3/2$。因此，对某个绝对常数 $C_R$，

$$
\|R_1(a,b)\|_2+\|R_2(a,b)\|_2\le C_R(\|a\|_\infty+\|b\|_\infty)(\|a\|_2+\|b\|_2).\tag{17}
$$

利用 $|\varphi(a_i+b_j)|\le Cm^{2}$，得 $\|R_1(a,b)\|_\infty+\|R_2(a,b)\|_\infty\le C_Rm^{2}$。于是只要 $\|(a,b)\|_*\le 1$，就有

$$
\|R(a,b)\|_*\le C_Rm\|(a,b)\|_*\le C_R\|(a,b)\|_*^{2}.\tag{18}
$$

此外，假设 $\|(a,b)\|_*$ 与 $\|(a',b')\|_*$ 都至多为某个 $\delta\le 1$，则由中值定理得 $|\varphi(s)-\varphi(t)|\le C\delta|s-t|$ 对一切 $|s|,|t|\le\delta$ 成立。于是重复前面的估计得到

$$
\|R(a,b)-R(a',b')\|_*\le C_R\delta\|(a-a',b-b')\|_*.\tag{19}
$$

下一步将构造一个压缩映射，以证明所需的 $x,y$ 存在。定义 $D=\{(f,h)\in\mathbb{R}^{N}\times\mathbb{R}^{N}:\langle\mathbf{1}_N,f\rangle=\langle\mathbf{1}_N,h\rangle\}$ 与 $H=\{(x,y)\in\mathbb{R}^{N}\times\mathbb{R}^{N}:\langle r,x\rangle=\langle c,y\rangle\}$。对 $(f,h)\in D$，令 $L(f,h)\in H$ 为引理 4.4 给出的唯一一对。映射 $L:D\to H$ 是线性的。设 $C_L$ 是使 (15) 与 (16) 都成立的常数。

矩阵 $\operatorname{diag}(e^{x})Q\operatorname{diag}(e^{y})$ 双随机当且仅当 $\operatorname{diag}(e^{x})Qe^{y}=\mathbf{1}_N$ 且 $\operatorname{diag}(e^{y})Q^{T}e^{x}=\mathbf{1}_N$。由于 $r=\mathbf{1}_N+u$ 与 $c=\mathbf{1}_N+v$，可以把这些方程改写为

$$
\begin{cases}\operatorname{diag}(r)x+Qy+u+R_1(x,y)=0,\\ Q^{T}x+\operatorname{diag}(c)y+v+R_2(x,y)=0.\end{cases}\tag{20}
$$

我们将把这些方程表述为一个不动点问题，然后应用压缩映射定理。注意 $\langle\mathbf{1}_N,u\rangle=\sum_{1\le i,j\le N}Q_{ij}-N=\langle\mathbf{1}_N,v\rangle$，且对任意 $x,y\in\mathbb{R}^{N}$ 有 $\langle\mathbf{1}_N,R_1(x,y)\rangle=\langle\mathbf{1}_N,R_2(x,y)\rangle$。因此由

$$
\Phi(x,y)=-L\big(u+R_1(x,y),\ v+R_2(x,y)\big)
$$

给出的函数 $\Phi:H\to H$ 是良定义的。由 $L$ 的定义，一对 $(x,y)\in H$ 是 $\Phi$ 的不动点当且仅当它满足 (20)。令 $B=\{(x,y)\in H:\|(x,y)\|_*\le 2C_L\eta\}$。由于 $\eta=o(1)$，对一切充分大的 $N$ 有 $2C_L\eta\le 1$。若 $(x,y)\in B$，则引理 4.4 与 (18) 蕴含

$$
\|\Phi(x,y)\|_*\le C_L(\|(u,v)\|_*+\|R(x,y)\|_*)\le C_L\eta+C_LC_R\|(x,y)\|_*^{2}\le C_L\eta+C_LC_R(2C_L\eta)^{2}=C_L\eta(1+4C_L^{2}C_R\eta).
$$

对一切充分大的 $N$ 有 $C_L\eta(1+4C_L^{2}C_R\eta)\le 2C_L\eta$，故 $\Phi(B)\subseteq B$。

现在设 $(x,y),(x',y')\in B$。由于 $L$ 线性，由引理 4.4 得

$$
\|\Phi(x,y)-\Phi(x',y')\|_*\le C_L\|R(x,y)-R(x',y')\|_*\le 2C_L^{2}C_R\eta\|(x-x',y-y')\|_*,
$$

其中第二个不等式来自 (19) 中取 $\delta=2C_L\eta$ 的 Lipschitz 估计。由于 $\eta=o(1)$，对一切充分大的 $N$，Lipschitz 常数 $2C_L^{2}C_R\eta$ 至多为 $1/2$。

集合 $B$ 在 $(H,\|\cdot\|_*)$ 中闭，从而是完备的。由压缩映射定理，存在唯一的不动点 $(x,y)\in B$。此外，由 (20)，矩阵 $\operatorname{diag}(e^{x})Q\operatorname{diag}(e^{y})$ 双随机，且

$$
\|x\|_\infty+\|y\|_\infty\le\|(x,y)\|_*\le 2C_L\eta=o(1).
$$

剩下要证 $\|x\|_2+\|y\|_2=O(\|u\|_2+\|v\|_2)$。由 (15) 再结合 (17)，

$$
\|x\|_2+\|y\|_2\le C_L(\|u\|_2+\|v\|_2+\|R_1(x,y)\|_2+\|R_2(x,y)\|_2)\le C_L(\|u\|_2+\|v\|_2)+C_LC_R(\|x\|_\infty+\|y\|_\infty)(\|x\|_2+\|y\|_2).
$$

由于 $\|x\|_\infty+\|y\|_\infty=o(1)$，对充分大的 $N$ 有

$$
\|x\|_2+\|y\|_2\le\frac{C_L}{1-C_LC_R(\|x\|_\infty+\|y\|_\infty)}(\|u\|_2+\|v\|_2)=O(\|u\|_2+\|v\|_2),
$$

这就完成了命题 4.1 的证明。$\square$

## 5. 容斥

本节的目标是证明下述结果。

**命题 5.1。** 设 $A_0<\infty$、$\rho<1$。若 $D=J_N+B$ 是 $N\times N$ 双随机矩阵，满足 $\|D\|_{\max}\le A_0/N$ 且 $\|B\|_{\mathrm{op}}\le\rho$，则

$$
\frac{N^{N}\operatorname{cyc}D}{(N-1)!}=(1+o(1))\frac{\det(I-B)}{\sqrt{\det(I-B^{T}B)}}.
$$

让我们先回顾：若 $M$ 是竞赛图 $T$ 的邻接矩阵，则 $\operatorname{per}M$ 计数 $T$ 的 1-因子数，$\operatorname{cyc}M$ 计数 $T$ 的 Hamilton 圈数。由于我们的目标是计数 Hamilton 圈，而第 3 节的估计是用永久式表述的，把 $\operatorname{cyc}M$ 用行列式与永久式重新表述将是有益的。为此，我们将使用 Liu [28] 的下述结果，并在我们的设定下把它改写为关于有向图的形式。这个恒等式可以视为 $\operatorname{cyc}M$ 关于 $M$ 的主子式的一种容斥形式，也已在 Hamilton 圈多项式的设定下被重新推导 [33]。为完整起见，我们给出其简短证明。

**引理 5.2（[28, 定理 2]）。** 对每个 $N\times N$ 矩阵 $M$，

$$
N\operatorname{cyc}M=\sum_{\varnothing\neq U\subseteq[N]}|U|(-1)^{|U|-1}\det M[U]\operatorname{per}M[U^{c}].
$$

**证明。** 展开 $\det M[U]$ 与 $\operatorname{per}M[U^{c}]$ 的表达式，并按置换 $\sigma\in S_N$ 归并同类项，右端可改写为

$$
\sum_{\sigma\in S_N}\left(\sum_{\substack{\varnothing\neq U\subseteq[N]\\ \sigma(U)=U}}|U|(-1)^{|U|-1}\operatorname{sgn}(\sigma|_U)\right)\left(\prod_{i=1}^{N}M_{i,\sigma(i)}\right).
$$

设某个固定的 $\sigma\in S_N$ 的循环分解为 $C_1,\dots,C_k$（$k\ge 1$），并令 $|C_i|=\ell_i$（$i\in[k]$）。条件 $\sigma(U)=U$ 意味着 $U$ 是置换 $\sigma$ 的一些循环之并，故 $U=\bigcup_{i\in S}C_i$ 对某个非空 $S\subseteq[k]$ 成立。对这种 $U$，有 $\operatorname{sgn}(\sigma|_U)=(-1)^{|U|-|S|}$，于是它对单项式 $\prod_{i=1}^{N}M_{i,\sigma(i)}$ 的系数贡献 $|U|(-1)^{|U|-1}\operatorname{sgn}(\sigma|_U)$ 等于 $\left(\sum_{i\in S}\ell_i\right)(-1)^{|S|-1}$。因此 $\prod_{i=1}^{N}M_{i,\sigma(i)}$ 的系数为

$$
\sum_{\varnothing\neq S\subseteq[k]}\left(\sum_{i\in S}\ell_i\right)(-1)^{|S|-1}=\sum_{i=1}^{k}\ell_i\sum_{T\subseteq[k]\setminus\{i\}}(-1)^{|T|},
$$

当 $k=1$ 时（此时 $\sigma$ 恰被 $\operatorname{cyc}M$ 计数）它等于 $N$，当 $k>1$ 时为零。$\square$

给定命题 3.1 中的任意 $D$，证明的思路是对 $M=D$ 应用引理 5.2，并分析对应于每个非空子集 $U\subseteq[N]$ 的主子式的贡献。我们按 $U$ 的大小分两种情形处理。如我们将看到的，起主要作用的情形是 $|U|$ 很小（即关于 $N$ 是多对数阶）时。此时 $\operatorname{per}D[U^{c}]$ 接近 $D$ 的永久式，所以我们的策略是用 Sinkhorn 缩放把 $D[U^{c}]$ 调整成双随机矩阵，再对它应用命题 3.1。下文中，我们用 $o_{\mathrm{op}}(1)$ 表示一个（尺寸相应的）矩阵，其谱范数当 $N\to\infty$ 时趋于 0。

**引理 5.3。** 在命题 3.1 的假设下，任一满足 $|U|\le\log^{2}N$ 的子集 $U\subseteq[N]$ 都有 $\operatorname{per}D[U^{c}]=(1+o(1))\operatorname{per}D$。

**证明。** 令 $M=N-|U|$，并考虑非负 $M\times M$ 矩阵 $Q=D[U^{c}]$。我们先验证 $Q$ 满足命题 4.1 的假设。由于 $Q$ 是 $D$ 的子矩阵且 $\|B\|_{\max}\le A_0/N$，有 $\|Q\|_{\max}\le\|D\|_{\max}\le(A_0+1)/N\le(A_0+1)/M$。回顾 $u,v\in\mathbb{R}^{M}$ 是满足 $Q\mathbf{1}_M=\mathbf{1}_M+u$、$Q^{T}\mathbf{1}_M=\mathbf{1}_M+v$ 的向量。对每个 $i\in U^{c}$，$u$ 的相应坐标为 $u_i=-\sum_{j\in U}D_{ij}$，因为 $D$ 的每一行之和为 1。因此 $\|u\|_2\le(A_0+1)|U|/\sqrt{N}$，且 $\|u\|_\infty\le(A_0+1)|U|/N$。同理 $v_i=-\sum_{j\in U}D_{ji}$，故 $v$ 也满足同样的界。由于 $|U|\le\log^{2}N$，可得 $\|u\|_2+\|v\|_2=o(1)=o(\sqrt{M})$ 且

$$
\|u\|_\infty+\|v\|_\infty+\frac{\|u\|_2+\|v\|_2}{\sqrt{M}}=o(1).
$$

剩下要验证 $P=\operatorname{diag}(\mathbf{1}_M+u)^{-1/2}Q\operatorname{diag}(\mathbf{1}_M+v)^{-1/2}$ 满足条件 $\sigma_2(P)\le\rho+o(1)$。我们分两步进行：先证明 $\sigma_2(P)\le\sigma_2(Q)+o(1)$，再用 $\rho$ 给出 $\sigma_2(Q)$ 的上界。

由于 $\|u\|_\infty=o(1)$，有 $\operatorname{diag}(\mathbf{1}_M+u)^{-1/2}=I+o_{\mathrm{op}}(1)$，类似地 $\operatorname{diag}(\mathbf{1}_M+v)^{-1/2}=I+o_{\mathrm{op}}(1)$。为方便起见，分别记它们为 $L$ 与 $R$。由于 $Q$ 是双随机矩阵 $D$ 的子矩阵，由 Schur 检验有 $\|Q\|_{\mathrm{op}}\le\sqrt{\|Q\|_1\|Q\|_\infty}\le 1$。由 $P=LQR$ 与 $\|Q\|_{\mathrm{op}}\le 1$ 可得

$$
\|P-Q\|_{\mathrm{op}}\le\|L-I\|_{\mathrm{op}}\cdot\|Q\|_{\mathrm{op}}\cdot\|R\|_{\mathrm{op}}+\|Q\|_{\mathrm{op}}\cdot\|R-I\|_{\mathrm{op}}=o(1),
$$

其中用了谱范数的次乘性。回顾奇异值关于谱范数是 1-Lipschitz 的（参看 [24, 3.3.16(a)]），这蕴含 $\sigma_2(P)\le\sigma_2(Q)+o(1)$。剩下要界住 $\sigma_2(Q)$。为此注意 $Q=J_N[U^{c}]+B[U^{c}]$，其中 $J_N[U^{c}]$ 的秩为 1。把 $J_N[U^{c}]$ 看作 $Q$ 的秩一近似，Eckart–Young 定理给出

$$
\sigma_2(Q)=\min_{\operatorname{rank}(A)\le 1}\|Q-A\|_{\mathrm{op}}\le\|Q-J_N[U^{c}]\|_{\mathrm{op}}=\|B[U^{c}]\|_{\mathrm{op}}\le\|B\|_{\mathrm{op}}\le\rho,
$$

故 $\sigma_2(P)\le\rho+o(1)$。因此 $Q$ 以常数 $A_0+1$ 与 $\rho$ 满足命题 4.1 的假设。对该命题应用于 $Q$，得到 $x,y\in\mathbb{R}^{M}$ 使得

$$
\widetilde{D}=\operatorname{diag}(e^{x})Q\operatorname{diag}(e^{y})
$$

双随机，且 $\|x\|_2+\|y\|_2=o(1)$、$\|x\|_\infty+\|y\|_\infty=o(1)$。

接下来证明 $\widetilde{D}$ 满足命题 3.1 的假设。设 $\widetilde{D}=J_M+\widetilde{B}$。由于 $\|x\|_\infty+\|y\|_\infty=o(1)$，对每个 $i\in[M]$ 都有 $e^{x_i}=1+o(1)$、$e^{y_i}=1+o(1)$。因此，利用 $\|Q\|_{\max}\le(A_0+1)/N$，

$$
\|\widetilde{B}\|_{\max}\le\frac1M+\|\widetilde{D}\|_{\max}\le\frac1M+(1+o(1))\|Q\|_{\max}\le\frac{2A_0+3}{M}.
$$

由于 $\operatorname{diag}(e^{x})=I+o_{\mathrm{op}}(1)$（$\operatorname{diag}(e^{y})$ 相同），前面的论证给出 $\|\widetilde{D}-Q\|_{\mathrm{op}}\le o(1)$，从而 $\sigma_2(\widetilde{D})\le\sigma_2(Q)+o(1)\le\rho+o(1)$。由于 $\widetilde{D}$ 双随机，对一切充分大的 $N$ 便有

$$
\|\widetilde{B}\|_{\mathrm{op}}=\sigma_2(\widetilde{D})\le\rho+o(1)\le\frac{\rho+1}{2}<1,
$$

故 $\widetilde{D}$ 以常数 $2A_0+3$ 与 $(\rho+1)/2$ 满足命题 3.1 的假设。对该命题应用于 $\widetilde{D}$，得

$$
\frac{M^{M}}{M!}\operatorname{per}\widetilde{D}=(1+o(1))\det(I-\widetilde{B}^{T}\widetilde{B})^{-1/2}.
$$

下面证明右端近似等于 $\det(I-B^{T}B)^{-1/2}$。在这项比较中，我们把 $\widetilde{B}$ 在 $U$ 上补零行与零列，视为 $N\times N$ 矩阵；这不改变 $\det(I-\widetilde{B}^{T}\widetilde{B})$。先注意 $\|\widetilde{B}-B\|_F=o(1)$。事实上，由于 $\|B\|_{\max}\le A_0/N$，删去指标在 $U$ 中的行与列使 $B$ 的变化为 $O(\sqrt{|U|/N})=o(1)$。在 $U^{c}\times U^{c}$ 上，有 $\widetilde{B}-B[U^{c}]=(\widetilde{D}-Q)+(J_N[U^{c}]-J_M)$。第二项满足 $\|J_N[U^{c}]-J_M\|_F=|U|/N=o(1)$；而由界 $\|Q\|_{\max}=O(1/N)$、$\|x\|_2+\|y\|_2=o(1)$ 与 $|e^{x_i+y_j}-1|=O(|x_i|+|y_j|)$ 可推出 $\|\widetilde{D}-Q\|_F=o(1)$。由三角不等式即得 $\|\widetilde{B}-B\|_F=o(1)$。此外还有显然的观察：$\|B\|_F+\|\widetilde{B}\|_F=O(1)$，因为两个矩阵都有 $N^{2}$ 个 $O(1/N)$ 大小的元素。

现在令 $H=B^{T}B$、$\widetilde{H}=\widetilde{B}^{T}\widetilde{B}$。由于 $\|B\|_{\mathrm{op}},\|\widetilde{B}\|_{\mathrm{op}}<(\rho+1)/2$，可取 $r=(\rho+1)/2<1$ 使 $\|H\|_{\mathrm{op}},\|\widetilde{H}\|_{\mathrm{op}}\le r^{2}$。于是 $H$ 与 $\widetilde{H}$ 的每个特征值都落在区间 $[0,r^{2}]$ 中，故 $I-H$ 与 $I-\widetilde{H}$ 的全部特征值都至少为 $1-r^{2}>0$。令 $H_t=(1-t)H+t\widetilde{H}$（$0\le t\le 1$）为 $H$ 与 $\widetilde{H}$ 之间的插值（注意 $I-H_t$ 的全部特征值也至少为 $1-r^{2}$）。应用 Jacobi 恒等式，有

$$
\frac{\mathrm{d}}{\mathrm{d}t}\log\det(I-H_t)=-\operatorname{tr}\left((I-H_t)^{-1}(\widetilde{H}-H)\right).
$$

由于 $I-H_t$ 的每个特征值都至少为 $1-r^{2}$，有 $\|(I-H_t)^{-1}\|_{\mathrm{op}}\le(1-r^{2})^{-1}$。由 Cauchy–Schwarz 不等式，右端的模为

$$
\left|\operatorname{tr}\left((I-H_t)^{-1}(\widetilde{H}-H)\right)\right|\le\left|\operatorname{tr}\left((I-H_t)^{-1}(\widetilde{B}-B)^{T}\widetilde{B}\right)\right|+\left|\operatorname{tr}\left((I-H_t)^{-1}B^{T}(\widetilde{B}-B)\right)\right|\le\|(I-H_t)^{-1}\|_{\mathrm{op}}\cdot\|\widetilde{B}-B\|_F\cdot(\|\widetilde{B}\|_F+\|B\|_F)=o(1),
$$

该式对一切 $0\le t\le 1$ 一致成立。最后，把 Jacobi 恒等式从 $t=0$ 到 $t=1$ 积分，得

$$
\log\det(I-\widetilde{H})-\log\det(I-H)=-\int_0^1\operatorname{tr}\left((I-H_t)^{-1}(\widetilde{H}-H)\right)\mathrm{d}t=-o(1),
$$

取指数即得 $\det(I-\widetilde{B}^{T}\widetilde{B})^{-1/2}=(1+o(1))\det(I-B^{T}B)^{-1/2}$。

剩下要处理 Sinkhorn 缩放对 $\operatorname{per}Q$ 的影响。定义量 $s=\sum_{i=1}^{M}(x_i+y_i)$，于是 $\operatorname{per}\widetilde{D}=e^{s}\operatorname{per}Q$。由于 $D$ 双随机且 $\sum_{i,j\in U}D_{ij}=O(|U|^{2}/N)=o(1)$，$Q$ 的元素之和为

$$
\sum_{i,j\in U^{c}}Q_{ij}=N-2|U|+\sum_{i,j\in U}D_{ij}=M-|U|+o(1).
$$

另一方面，由于 $\widetilde{D}$ 双随机，其元素之和为 $M$。对所有 $i,j\in U^{c}$ 用 Taylor 级数展开 $e^{x_i+y_j}$（并作一些计算），现在给出

$$
M=\sum_{i,j\in U^{c}}Q_{ij}+s+o(1),
$$

其中线性项的误差为 $O((\|u\|_2+\|v\|_2)(\|x\|_2+\|y\|_2))=o(1)$，二次余项为 $O(\|x\|_2^{2}+\|y\|_2^{2})=o(1)$。因此 $s=|U|-o(1)$。最后，对 $D$ 应用命题 3.1 并利用上面的行列式比较，得到

$$
\frac{\operatorname{per}Q}{\operatorname{per}D}=(1+o(1))e^{-s}\frac{M!/M^{M}}{N!/N^{N}}=(1+o(1))e^{-|U|+o(1)}e^{|U|-o(1)}=1+o(1),
$$

其中第二个等号来自 Stirling 公式与 $|U|\le\log^{2}N$。引理证毕。$\square$

现在来界住所有较大的 $U$ 的贡献之和。为此，我们将使用 Hadamard 不等式、事实 2.2 与事实 2.3 形式的行列式与永久式的标准界。

**引理 5.4。** 在命题 3.1 的假设下，存在常数 $C=C(A_0)$ 使得对每个 $1\le k\le N$，

$$
\frac1{\operatorname{per}D}\sum_{|U|=k}k|\det D[U]|\operatorname{per}D[U^{c}]\le N^{C}\left(\frac{C}{\sqrt{k}}\right)^{k}.
$$

此外，

$$
\sum_{|U|=k}k|\det D[U]|\le k\left(\frac{A_0+1}{\sqrt{k}}e\right)^{k}.
$$

**证明。** 我们从第二个陈述的简单证明开始。由于 $\|B\|_{\max}\le A_0/N$，有 $\|D[U]\|_{\max}\le(A_0+1)/N$。因此由 Hadamard 不等式，

$$
\sum_{|U|=k}k|\det D[U]|\le\binom{N}{k}k\left(\frac{\sqrt{k}(A_0+1)}{N}\right)^{k}\le k\left(\frac{A_0+1}{\sqrt{k}}e\right)^{k},
$$

其中用了 $\binom{N}{k}\le(Ne/k)^{k}$。

现在证明第一个陈述。固定某个满足 $|U|=k$ 的 $U\subseteq[N]$，令 $M=N-k$。$M=0$ 的情形是显然的，故设 $M\ge 1$。我们先断言，对某个 $C_1=C_1(A_0)$ 有

$$
\operatorname{per}D[U^{c}]\le N^{C_1}e^{-M}.
$$

令 $r=\min\{M,\lfloor\frac{N}{A_0+1}\rfloor\}$，这里可设 $N$ 充分大，使第二项为正。由于 $\|D[U^{c}]\|_{\max}\le(A_0+1)/N$ 且 $D$ 双随机，$D[U^{c}]$ 的所有元素都至多为 $1/r$，且 $D[U^{c}]$ 的每一行之和至多为 1。

我们对 $r$ 的选取方式蕴含：可以把 $D[U^{c}]$ 每一行中的某些元素增大（同时保持上界 $1/r$），直到每行之和恰为 1。事实上，若某行当前之和为 $s\le 1$，则该行剩余的“容量”总量为 $M/r-s\ge 1-s\ge 0$。于是可以选取以 $U^{c}$ 为指标的 $M\times M$ 矩阵 $Q$，使 $Q$ 的每一行之和为 1，且对每个 $i,j\in U^{c}$ 有 $Q_{ij}\ge D[U^{c}]_{ij}$、$Q_{ij}\le 1/r$。非负矩阵永久式的单调性结合事实 2.3 现在给出

$$
\operatorname{per}D[U^{c}]\le\operatorname{per}Q\le\left(\frac{(r!)^{1/r}}{r}\right)^{M}.
$$

分两种情形估计这个表达式。若 $r=M$，则它就是 $M!/M^{M}$，由 Stirling 公式，它至多为 $N^{C_1}e^{-M}$（对某个绝对常数 $C_1$）。否则 $r=\lfloor\frac{N}{A_0+1}\rfloor$ 是 $N$ 阶量。再次应用 Stirling 公式并利用 $M\le N$，有

$$
M\log\left(\frac{(r!)^{1/r}}{r}\right)=-M+O(\log N).
$$

于是又一次得到 $\operatorname{per}D[U^{c}]\le N^{C_1}e^{-M}$，其中 $C_1=C_1(A_0)$。另一方面，由于 $D$ 双随机，事实 2.2 给出 $\operatorname{per}D\ge N!/N^{N}$。因此由 Stirling 公式，

$$
\frac{\operatorname{per}D[U^{c}]}{\operatorname{per}D}\le N^{C_1}e^{-M}\frac{N^{N}}{N!}\le N^{C_2}e^{k}
$$

（对某个 $C_2=C_2(A_0)$）。把这个估计与上面已证的引理第二个陈述结合，得

$$
\frac1{\operatorname{per}D}\sum_{|U|=k}k|\det D[U]|\operatorname{per}D[U^{c}]\le N^{C_2}e^{k}\sum_{|U|=k}k|\det D[U]|\le N^{C_2}k\left(\frac{A_0+1}{\sqrt{k}}e^{2}\right)^{k}.
$$

由于 $k\le N$，可以把额外的因子 $k$ 吸收进 $N$ 的多项式因子。再次放大常数，即存在常数 $C=C(A_0)$ 使

$$
\frac1{\operatorname{per}D}\sum_{|U|=k}k|\det D[U]|\operatorname{per}D[U^{c}]\le N^{C}\left(\frac{C}{\sqrt{k}}\right)^{k},
$$

如所需。$\square$

我们还需要下面这个简单的引理。

**引理 5.5。** 若 $D=J_N+B$ 是 $N\times N$ 双随机矩阵，则

$$
\sum_{\varnothing\neq U\subseteq[N]}|U|(-1)^{|U|-1}\det D[U]=\det(I-B).
$$

**证明。** 令 $f(t)=\det(I-tD)$。由主子式展开，该行列式为

$$
f(t)=\sum_{U\subseteq[N]}(-t)^{|U|}\det D[U].
$$

注意求导并在 $t=1$ 处取值后，有

$$
-f'(1)=\sum_{\varnothing\neq U\subseteq[N]}|U|(-1)^{|U|-1}\det D[U],
$$

故只需证明 $f'(1)=-\det(I-B)$。由于 $D$ 双随机，$B\mathbf{1}=B^{T}\mathbf{1}=0$，于是 $B$ 在 $\operatorname{span}\{\mathbf{1}\}$ 上消失，且 $\mathbf{1}^{\perp}$ 在 $B$ 下不变。另一方面，$J_N$ 在 $\operatorname{span}\{\mathbf{1}\}$ 上作用为恒等、在 $\mathbf{1}^{\perp}$ 上消失。因此 $D$ 在 $\operatorname{span}\{\mathbf{1}\}$ 上作用为恒等，而在 $\mathbf{1}^{\perp}$ 上与 $B$ 一致。于是，关于分解 $\mathbb{R}^{N}=\operatorname{span}\{\mathbf{1}\}\oplus\mathbf{1}^{\perp}$，矩阵 $D$ 与 $B$ 的分块为 $D=1\oplus B|_{\mathbf{1}^{\perp}}$、$B=0\oplus B|_{\mathbf{1}^{\perp}}$。因此 $\det(I-tD)=(1-t)\det(I-tB)$。用乘积法则求导并在 $t=1$ 处取值，即得 $f'(1)=-\det(I-B)$，如所需。$\square$

现在可以证明命题 5.1 了。

**命题 5.1 的证明。** 由于 $D$ 双随机且 $\|D\|_{\max}\le A_0/N$，有 $\|B\|_{\max}\le A_0/N$，故命题 3.1 与前面的引理都适用。由引理 5.2，

$$
\frac{N\operatorname{cyc}D}{\operatorname{per}D}=\sum_{\varnothing\neq U\subseteq[N]}|U|(-1)^{|U|-1}\det D[U]\frac{\operatorname{per}D[U^{c}]}{\operatorname{per}D}.
$$

我们将把这个和按 $|U|\le\log^{2}N$ 与 $|U|>\log^{2}N$ 两种范围拆开。当 $|U|\le\log^{2}N$ 时，引理 5.3 给出

$$
\frac{\operatorname{per}D[U^{c}]}{\operatorname{per}D}=1+o(1),
$$

我们想把它代入上式。为了控制这一替换所累积的 $o(1)$ 误差之和，注意引理 5.4 蕴含

$$
\sum_{\varnothing\neq U\subseteq[N]}|U||\det D[U]|\le\sum_{k=1}^{\infty}k\left(\frac{A_0+1}{\sqrt{k}}e\right)^{k},
$$

该级数收敛。于是所有满足 $|U|\le\log^{2}N$ 的 $U$ 的贡献为

$$
\sum_{\substack{\varnothing\neq U\subseteq[N]\\ |U|\le\log^{2}N}}|U|(-1)^{|U|-1}\det D[U]+o(1).
$$

现在考虑满足 $|U|>\log^{2}N$ 的 $U$。引理 5.4 给出，对某个常数 $C=C(A_0)$，

$$
\frac1{\operatorname{per}D}\sum_{\substack{\varnothing\neq U\subseteq[N]\\ |U|>\log^{2}N}}|U||\det D[U]|\operatorname{per}D[U^{c}]\le\sum_{k>\log^{2}N}N^{C}\left(\frac{C}{\sqrt{k}}\right)^{k}=o(1),
$$

故这些 $U$ 的贡献可忽略。此外还有

$$
\sum_{\substack{\varnothing\neq U\subseteq[N]\\ |U|>\log^{2}N}}|U||\det D[U]|\le\sum_{k=\lceil\log^{2}N\rceil}^{\infty}k\left(\frac{(A_0+1)}{\sqrt{k}}e\right)^{k}=o(1).
$$

因此由引理 5.5，

$$
\frac{N\operatorname{cyc}D}{\operatorname{per}D}=\sum_{\varnothing\neq U\subseteq[N]}|U|(-1)^{|U|-1}\det D[U]+o(1)=\det(I-B)+o(1).
$$

我们简单说明：$\log\det(I-B)$ 的 Taylor 级数，结合 $\|B\|_{\mathrm{op}}\le\rho<1$、$\|B\|_F=O(1)$ 与 $\|D\|_{\max}\le A_0/N$，蕴含 $\det(I-B)=\Omega(1)$。于是上式中的 $o(1)$ 误差可取为乘性误差，故

$$
\frac{N\operatorname{cyc}D}{\operatorname{per}D}=(1+o(1))\det(I-B).
$$

最后，对 $D$ 应用命题 3.1 得

$$
\frac{N^{N}\operatorname{per}D}{N!}=(1+o(1))\det(I-B^{T}B)^{-1/2}.
$$

把它与前一式结合，得

$$
\frac{N^{N}\operatorname{cyc}D}{(N-1)!}=\frac{N^{N}\operatorname{per}D}{N!}\cdot\frac{N\operatorname{cyc}D}{\operatorname{per}D}=(1+o(1))\frac{\det(I-B)}{\sqrt{\det(I-B^{T}B)}},
$$

命题证毕。$\square$

## 6. 修正邻接矩阵

我们从下述定义开始。

**定义 6.1。** 设 $Q_0$ 是非负 $N\times N$ 矩阵，$A_0<\infty$。称 $Q$ 是 $Q_0$ 的一个 **$A_0$-稀疏修正**，若存在集合 $R,C\subseteq[N]$ 满足 $|R|+|C|=O(\log^{4}N)$，以及概率向量 $p^{(i)}\in\mathbb{R}_{\ge 0}^{N}$（$i\in R$）与概率向量 $q^{(j)}\in\mathbb{R}_{\ge 0}^{N}$（$j\in C$），它们的坐标都不超过 $A_0/N$，使得对每个 $1\le i,j\le N$，

$$
Q_{ij}=\begin{cases}(Q_0)_{ij},&i\notin R,\ j\notin C,\\ p^{(i)}_j,&i\in R,\ j\notin C,\\ q^{(j)}_i,&i\notin R,\ j\in C,\\ 0,&i\in R,\ j\in C.\end{cases}
$$

换句话说，$Q_0$ 的一个 $A_0$-稀疏修正是这样得到的矩阵：把 $Q_0$ 的 $O(\log^{4}N)$ 行与列替换为元素不超过 $A_0/N$ 的概率向量，而在这些行与列相交处直接取零。

本节的目标是证明关于 $A_0$-稀疏修正的下述命题。

**命题 6.2。** 设 $A_0<\infty$、$\rho<1$。设 $T$ 是 $N$ 个顶点的竞赛图，其归一化 Seidel 矩阵为 $K$，并假设 $\|K\mathbf{1}_N\|_\infty\cdot\|K\mathbf{1}_N\|_2^{2}=o(1)$ 且 $\|K\|_{\mathrm{op}}\le\rho$。若 $Q$ 是 $J_N-I/N+K$ 的一个 $A_0$-稀疏修正且 $\operatorname{diag}Q=0$，则

$$
\frac{N^{N}\operatorname{cyc}Q}{(N-1)!}\le(1+o(1))\exp\left(1+\sum_{1\le i,j\le N}Q_{ij}-N\right)Z(K).
$$

为便于证明，我们引入 Gurvits 关于矩阵容量的概念。对非负 $N\times N$ 矩阵 $Q$，定义其**容量**为

$$
\operatorname{cap}(Q)=\inf_{z}\frac{\prod_{i=1}^{N}(Qz)_i}{\prod_{i=1}^{N}z_i},
$$

其中下确界取遍所有 $z=(z_1,\dots,z_N)^{T}\in\mathbb{R}_{>0}^{N}$。容量由 Gurvits [22] 引入，用以给出 van der Waerden 猜想与 Schrijver–Valiant 猜想的一个共同推广（其证明不依赖 Alexandrov–Fenchel 不等式）。此后这一量获得了显著的生命力，并已知在若干矩阵与算子变换下表现良好（例如见 [20]）。在我们的应用中，容量只是把对不同接近双随机的矩阵施加 Sinkhorn 缩放的代价打包起来的一种便利方式。为此，我们需要下面这个引理，它是 [27, 引理 4.2.11] 在 Sinkhorn 缩放情形下的特化。

**引理 6.3（[27, 引理 4.2.11]）。** 若 $D=\operatorname{diag}(e^{x})Q\operatorname{diag}(e^{y})$ 是 $N\times N$ 双随机矩阵，其中 $x,y\in\mathbb{R}^{N}$，则

$$
\operatorname{cap}(Q)=\exp\left(-\sum_{i=1}^{N}(x_i+y_i)\right).
$$

**证明。** [27] 中容量的定义是我们在 $N\times N$ 矩阵情形下所定义容量的 $N$ 倍。因此，把其引理两端取 $N$ 次幂并约去因子 $N^{N}$，即得恒等式 $\operatorname{cap}(LXR)=\det(L)\det(R)\operatorname{cap}(X)$。在我们的情形 $D$ 双随机，这蕴含 $\operatorname{cap}(D)=1$。事实上，由带权算术—几何平均不等式，

$$
\prod_{i=1}^{N}(Dz)_i=\prod_{i=1}^{N}\sum_{j=1}^{N}D_{ij}z_j\ge\prod_{i=1}^{N}\prod_{j=1}^{N}z_j^{D_{ij}}=\prod_{j=1}^{N}z_j,
$$

故 $\operatorname{cap}(D)\ge 1$。另一方面，取 $z=\mathbf{1}_N$ 表明 $\operatorname{cap}(D)\le 1$。由 $1=\det(\operatorname{diag}(e^{x}))\det(\operatorname{diag}(e^{y}))\operatorname{cap}(Q)$ 即得引理。$\square$

我们还需要下面这个引理，它记录了实反对称矩阵的一个初等行列式恒等式。（量 $Z(K)$ 正是在这里从应用命题 3.1 时出现的行列式中浮现出来的。）回顾实反对称矩阵的非零特征值成对共轭出现且实部为零。

**引理 6.4。** 设 $K$ 是实反对称矩阵，$\|K\|_{\mathrm{op}}<1$，其非零特征值（按重数计）为 $\pm i\lambda_1,\dots,\pm i\lambda_r$。则

$$
\sqrt{\det(I-K^{T}K)}=\det(I-iK),\qquad Z(K)=\prod_{j=1}^{r}\frac{1+\lambda_j^{2}}{1-\lambda_j^{2}}\ge 1.
$$

**证明。** 由于 $\|K\|_{\mathrm{op}}<1$，对每个 $j\in[r]$ 都有 $0<\lambda_j<1$。由于 $K^{T}K=-K^{2}$，

$$
\det(I-K^{T}K)=\det(I+K^{2})=\det(I-iK)\det(I+iK)=\det(I-iK)^{2},
$$

其中最后一个等号来自 $I+iK=(I-iK)^{T}$。此外 $\det(I-iK)=\prod_{j=1}^{r}(1-\lambda_j^{2})>0$，故 $\sqrt{\det(I-K^{T}K)}=\det(I-iK)$，这就证明了第一个结论。对第二个结论，同理有 $\det(I-K)=\prod_{j=1}^{r}(1+\lambda_j^{2})$，因此

$$
Z(K)=\frac{\det(I-K)}{\det(I-iK)}=\prod_{j=1}^{r}\frac{1+\lambda_j^{2}}{1-\lambda_j^{2}}\ge 1,
$$

如所需。$\square$

**命题 6.2 的证明。** 令 $Q_0=J_N-I/N+K$，并定义 $R,C\subseteq[N]$，使 $Q$ 是 $Q_0$ 的一个 $A_0$-稀疏修正，其元素只在行 $R$ 与列 $C$ 中可能与 $Q_0$ 不同（从而 $|R|+|C|=O(\log^{4}N)$）。

我们先证明 $Q$ 满足命题 4.1 的各项性质。由 $A_0$-稀疏修正的定义及 $\|Q_0\|_{\max}\le 2/N$，有 $\|Q\|_{\max}\le(A_0+2)/N$。回顾 $u,v\in\mathbb{R}^{N}$ 是向量 $u=Q\mathbf{1}_N-\mathbf{1}_N$、$v=Q^{T}\mathbf{1}_N-\mathbf{1}_N$。对任一 $1\le i\le N$，若 $i\notin R$，则第 $i$ 行中只有指标属于 $C$ 的列上 $Q_0$ 与 $Q$ 可能不同，故

$$
u_i=(K\mathbf{1}_N)_i-\frac1N+O\left(\frac{|C|}{N}\right).
$$

另一方面，若 $i\in R$，则不属于 $C$ 的那些列上的元素与概率向量 $p^{(i)}$（其坐标之和为 1）一致，故 $u_i=O(|C|/N)$。对称的论证给出：对任一 $1\le j\le N$，若 $j\notin C$ 则 $v_j=-(K\mathbf{1}_N)_j-\frac1N+O(|R|/N)$，而若 $j\in C$ 则 $v_j=O(|R|/N)$。由于 $|R|+|C|=O(\log^{4}N)$，可得

$$
\|u\|_\infty+\|v\|_\infty\le 2\|K\mathbf{1}_N\|_\infty+O\left(\frac{1+|R|+|C|}{N}\right)=2\|K\mathbf{1}_N\|_\infty+o(1)=o(1),
$$

其中用了 $\|K\mathbf{1}_N\|_\infty^{3}\le\|K\mathbf{1}_N\|_\infty\cdot\|K\mathbf{1}_N\|_2^{2}=o(1)$。由于对每个 $w\in\mathbb{R}^{N}$ 有 $\|w\|_2\le\sqrt{N}\|w\|_\infty$，这也给出 $(\|u\|_2+\|v\|_2)/\sqrt{N}=o(1)$，故只剩下关于 $\sigma_2(P)$ 的假设需要验证。我们按与引理 5.3 类似的方式进行。由于 $\|u\|_\infty=o(1)$，有 $\operatorname{diag}(\mathbf{1}_N+u)^{-1/2}=I+o_{\mathrm{op}}(1)$，类似地 $\operatorname{diag}(\mathbf{1}_N+v)^{-1/2}=I+o_{\mathrm{op}}(1)$。为方便起见，分别记它们为 $L'$ 与 $R'$。由于 $\|Q\|_{\max}\le(A_0+2)/N$，有 $\|Q\|_1,\|Q\|_\infty\le A_0+2$，故由 Schur 检验 $\|Q\|_{\mathrm{op}}\le\sqrt{\|Q\|_1\|Q\|_\infty}=O(1)$。由 $P=L'QR'$ 与 $\|Q\|_{\mathrm{op}}=O(1)$ 可得

$$
\|P-Q\|_{\mathrm{op}}\le\|L'-I\|_{\mathrm{op}}\cdot\|Q\|_{\mathrm{op}}\cdot\|R'\|_{\mathrm{op}}+\|Q\|_{\mathrm{op}}\cdot\|R'-I\|_{\mathrm{op}}=o(1).
$$

$Q$ 与 $Q_0$ 的每个元素都是 $O(1/N)$，故 $\|Q-Q_0\|_{\max}=O(1/N)$。两个矩阵 $Q$ 与 $Q_0$ 至多在 $N(|R|+|C|)$ 个元素上不同。因此

$$
\|Q-Q_0\|_{\mathrm{op}}\le\|Q-Q_0\|_F\le\sqrt{N(|R|+|C|)}\,O(N^{-2})=O\left(\sqrt{\frac{|R|+|C|}{N}}\right)=o(1),
$$

其中用了对每个矩阵 $A$ 都有 $\|A\|_{\mathrm{op}}\le\|A\|_F$。于是三角不等式给出 $\|P-Q_0\|_{\mathrm{op}}=o(1)$。由于奇异值关于谱范数是 1-Lipschitz 的，这蕴含 $\sigma_2(P)\le\sigma_2(Q_0)+o(1)$，故剩下要界住 $\sigma_2(Q_0)$。把 $J_N$ 看作 $Q_0$ 的秩一近似，由 Eckart–Young 定理

$$
\sigma_2(Q_0)\le\|Q_0-J_N\|_{\mathrm{op}}=\|K-I/N\|_{\mathrm{op}}\le\|K\|_{\mathrm{op}}+\|I/N\|_{\mathrm{op}}\le\rho+o(1),
$$

故 $\sigma_2(P)\le\rho+o(1)$。因此 $Q$ 以常数 $A_0+2$ 与 $\rho$ 满足命题 4.1 的假设。对该命题应用于 $Q$，得到 $x,y\in\mathbb{R}^{N}$ 使得

$$
D=\operatorname{diag}(e^{x})Q\operatorname{diag}(e^{y})
$$

双随机，且 $\|x\|_2+\|y\|_2=o(\sqrt{N})$、$\|x\|_\infty+\|y\|_\infty=o(1)$。

接下来，我们把 $D$ 与 $J_N+K$ 作比较，以便对 $D$ 应用命题 5.1。由于 $\|x\|_\infty+\|y\|_\infty=o(1)$，有 $\max_{1\le i,j\le N}|e^{x_i+y_j}-1|=o(1)$。因此

$$
\|D-Q\|_F\le\|Q\|_F\max_{1\le i,j\le N}|e^{x_i+y_j}-1|\le N\|Q\|_{\max}\max_{1\le i,j\le N}|e^{x_i+y_j}-1|=o(1),
$$

其中最后一个不等式来自 $\|Q\|_{\max}=O(1/N)$。令 $B=D-J_N$，则 $\|B-K\|_F=o(1)$，因为

$$
\|B-K\|_F=\|D-Q_0-I/N\|_F\le\|D-Q\|_F+\|Q-Q_0\|_F+\|I/N\|_F=o(1).
$$

此外，由于 $\rho<1$，对一切充分大的 $N$ 有

$$
\|B\|_{\mathrm{op}}\le\|B-K\|_{\mathrm{op}}+\|K\|_{\mathrm{op}}\le\|B-K\|_F+\|K\|_{\mathrm{op}}\le\rho+o(1)<\frac{\rho+1}{2}.
$$

最后，$\|D\|_{\max}\le\|Q\|_{\max}(\max_{1\le i,j\le N}e^{x_i+y_j})\le(2A_0+4)/N$，故 $D$ 以常数 $2A_0+4$ 与 $(\rho+1)/2$ 满足命题 5.1 的假设。对该命题应用于 $D$，得

$$
\frac{N^{N}\operatorname{cyc}D}{(N-1)!}=(1+o(1))\frac{\det(I-B)}{\sqrt{\det(I-B^{T}B)}}.
$$

现在记录 Sinkhorn 缩放的代价。由于贡献于 $\operatorname{cyc}Q$ 的每一项都恰从每一行和每一列取一个元素，有 $\operatorname{cyc}D=\exp\left(\sum_{i=1}^{N}(x_i+y_i)\right)\operatorname{cyc}Q$。由引理 6.3，这给出 $\operatorname{cyc}Q=\operatorname{cyc}(D)\operatorname{cap}(Q)$。我们可以在容量定义的下确界中取 $z=\mathbf{1}_N$ 来界住 $\operatorname{cap}(Q)$：

$$
\operatorname{cap}(Q)\le\prod_{i=1}^{N}(1+u_i)\le\exp\left(\sum_{i=1}^{N}u_i\right)=\exp\left(\sum_{1\le i,j\le N}Q_{ij}-N\right).
$$

剩下要证明

$$
\frac{\det(I-B)}{\sqrt{\det(I-B^{T}B)}}=(1+o(1))e\,Z(K).
$$

为此，我们把分子与 $e\det(I-K)$ 比较、把分母与 $\sqrt{\det(I-K^{T}K)}$ 比较。这一步将涉及两次 Jacobi 恒等式的应用，方式与引理 5.3 类似。注意 $\|B-K\|_F=o(1)$ 与 $\|K\|_F=O(1)$ 蕴含 $\|B\|_F=O(1)$。此外，对一切充分大的 $N$，$\|B\|_{\mathrm{op}}$ 与 $\|K\|_{\mathrm{op}}$ 都至多为 $r=(\rho+1)/2<1$。

先看分子。对 $0\le t\le 1$，令 $B_t=tB+(1-t)K$。则 $\|B_t\|_{\mathrm{op}}\le r$，故 $B_t$ 的每个特征值 $\lambda$ 都满足 $|\lambda|<1$，且 $I-B_t$ 可逆。此外 $I-B_t$ 的实特征值为正，而复特征值成对共轭出现、其乘积为正，故 $\det(I-B_t)>0$。由 Jacobi 恒等式，

$$
\frac{\mathrm{d}}{\mathrm{d}t}\log\det(I-B_t)=-\operatorname{tr}\left((I-B_t)^{-1}(B-K)\right).
$$

利用 $(I-B_t)^{-1}=I+B_t(I-B_t)^{-1}$，这分解为

$$
\frac{\mathrm{d}}{\mathrm{d}t}\log\det(I-B_t)=-\operatorname{tr}(B-K)-\operatorname{tr}\left(B_t(I-B_t)^{-1}(B-K)\right).
$$

由于 $B=D-J_N$ 且 $\operatorname{diag}Q=\operatorname{diag}D=0$，有 $\operatorname{tr}(B)=-1$。又因 $K$ 是归一化 Seidel 矩阵，$\operatorname{tr}(K)=0$，故上式第一项恰为 1。为界住第二项，我们使用如下事实：对矩阵 $X$ 与 $Y$ 有 $|\operatorname{tr}(XY)|\le\|X\|_F\|Y\|_F$，这来自 Cauchy–Schwarz 不等式。把该不等式用于 $\operatorname{tr}\left(B_t(I-B_t)^{-1}(B-K)\right)$，

$$
|\operatorname{tr}\left(B_t(I-B_t)^{-1}(B-K)\right)|\le\|B_t(I-B_t)^{-1}\|_F\cdot\|B-K\|_F.
$$

设 $w_i$ 为 $B_t$ 的第 $i$ 行。由谱范数的定义，

$$
\|B_t(I-B_t)^{-1}\|_F^{2}=\sum_{i=1}^{N}\|w_i(I-B_t)^{-1}\|_2^{2}\le\|(I-B_t)^{-1}\|_{\mathrm{op}}^{2}\cdot\|B_t\|_F^{2}.
$$

由于 $\|B_t\|_{\mathrm{op}}\le r<1$，由 Neumann 级数有

$$
\|(I-B_t)^{-1}\|_{\mathrm{op}}=\left\|\sum_{i=0}^{\infty}B_t^{i}\right\|_{\mathrm{op}}\le\sum_{i=0}^{\infty}\|B_t\|_{\mathrm{op}}^{i}\le\sum_{i=0}^{\infty}r^{i}=\frac1{1-r}.
$$

现在我们知道 $\|B_t\|_F\le\|B\|_F+\|K\|_F=O(1)$ 且 $\|(I-B_t)^{-1}\|_{\mathrm{op}}\le(1-r)^{-1}$，故 $\|B_t(I-B_t)^{-1}\|_F=O(1)$。把它与 $\|B-K\|_F=o(1)$ 结合，蕴含 $|\operatorname{tr}\left(B_t(I-B_t)^{-1}(B-K)\right)|=o(1)$，从而 $\frac{\mathrm{d}}{\mathrm{d}t}\log\det(I-B_t)=1+o(1)$。（这对一切 $0\le t\le 1$ 一致成立。）把该式从 $t=0$ 到 $t=1$ 积分，

$$
\log\det(I-B)-\log\det(I-K)=\int_0^1(1+o(1))\,\mathrm{d}t=1+o(1),
$$

故 $\det(I-B)=(1+o(1))e\det(I-K)$。

接下来把分母与 $\sqrt{\det(I-K^{T}K)}$ 比较。令 $H=K^{T}K$、$\widetilde{H}=B^{T}B$。由于 $\|K\|_{\mathrm{op}},\|B\|_{\mathrm{op}}\le r$，有 $\|H\|_{\mathrm{op}},\|\widetilde{H}\|_{\mathrm{op}}\le r^{2}$。现在可以原样照搬引理 5.3 中涉及 $H$ 与 $\widetilde{H}$ 的论证，得到

$$
\det(I-B^{T}B)^{-1/2}=(1+o(1))\det(I-K^{T}K)^{-1/2}.
$$

把上面两项比较与引理 6.4 结合，得

$$
\frac{\det(I-B)}{\sqrt{\det(I-B^{T}B)}}=(1+o(1))e\frac{\det(I-K)}{\sqrt{\det(I-K^{T}K)}}=(1+o(1))e\frac{\det(I-K)}{\det(I-iK)},
$$

即 $(1+o(1))eZ(K)$。把一切汇总，

$$
\frac{N^{N}\operatorname{cyc}Q}{(N-1)!}=\operatorname{cap}(Q)\frac{N^{N}\operatorname{cyc}D}{(N-1)!}\le(1+o(1))\exp\left(1+\sum_{1\le i,j\le N}Q_{ij}-N\right)Z(K),
$$

这就完成了命题 6.2 的证明。$\square$

## 7. $Z(K)$ 的上界

设 $K$ 是任意竞赛图的归一化 Seidel 矩阵。本节的目标是证明量 $Z(K)=\det(I-K)/\det(I-iK)$ 的下述上界。

**命题 7.1。** 对充分大的 $N$，若 $T$ 是 $N$ 个顶点的竞赛图、归一化 Seidel 矩阵为 $K$，则

$$
\frac{\det(I-K)}{\det(I-iK)}\le\frac{\sum_{j=0}^{\lfloor N/2\rfloor}\binom{N}{2j}N^{-2j}}{\sum_{j=0}^{\lfloor N/2\rfloor}(-1)^{j}\binom{N}{2j}N^{-2j}}\longrightarrow\frac{\cosh 1}{\cos 1}.
$$

设 $U=U_N$ 为传递竞赛图的 Seidel 矩阵，即当 $i<j$ 时 $U_{ij}=1$、当 $i>j$ 时 $U_{ij}=-1$、对角元为零的 $N\times N$ 矩阵。证明分两步。先证明 $Z(K)\le Z(U/N)$，即传递竞赛图使 $Z(K)$ 取到最大值（这对每个 $N$ 都成立）。然后计算 $Z(U/N)$ 为两个求和之比，它们当 $N\to\infty$ 时分别趋于 $\cosh 1$ 与 $\cos 1$。

对实矩阵 $A$，定义矩阵 $|A|=(A^{T}A)^{1/2}$。于是 $\operatorname{tr}|A|^{2m}$ 是 $A$ 各奇异值的 $2m$ 次幂之和。证明 $Z(K)\le Z(U/N)$ 的主要一步，是证明对每个 $N$ 阶竞赛图 Seidel 矩阵 $C$ 与每个正整数 $m$ 都有 $\operatorname{tr}|C|^{2m}\le\operatorname{tr}|U|^{2m}$。作这项比较的原因是：$\log Z(K)$ 可以展开成这类项的收敛级数，且系数为正，于是把每一项用传递竞赛图处的值界住，就反过来把 $Z(K)$ 用 $Z(U_N/N)$ 界住。

这一比较的论证来自 Fang 与 Huang [15, 第 3 节]，他们证明 $U_N$ 在 $N$ 阶竞赛图 Seidel 矩阵 $C$ 中最大化 $\operatorname{tr}(C^{4k})$。对我们的应用，我们需要对其他偶次幂之和作同样的比较，而这也可以直接由他们的证明得到。我们先引入重建这一论证所需的记号。

对 $x\in\mathbb{R}^{N}$，令 $x^{\downarrow}\in\mathbb{R}^{N}$ 为由 $x$ 各坐标的绝对值按不增顺序重排所得的向量。令 $D_N$ 表示 $\mathbb{R}^{N}$ 中元素非负的不增向量之集。回顾弱主化序 $\preceq_w$ 是 $D_N$ 中向量上的一个偏序，定义如下。对 $x,y\in D_N$，若对每个 $1\le r\le N$ 都有 $\sum_{j=1}^{r}x_j\le\sum_{j=1}^{r}y_j$，则称 $x\preceq_w y$。

引入矩阵 $M$（它让我们能比较 $C$ 与 $U$ 的幂）也会有所帮助。定义 $N\times N$ 对称矩阵 $M=(M_{rs})_{r,s\in[N]}$ 如下：

$$
M_{rs}=\begin{cases}1,&r+s\le N,\\ 0,&r+s=N+1,\\ (-1)^{r+s-N-2},&r+s\ge N+2.\end{cases}
$$

（在 [15] 中它被称为 $K$。）例如当 $N=5$ 时，

$$
M=\begin{pmatrix}1&1&1&1&0\\ 1&1&1&0&1\\ 1&1&0&1&-1\\ 1&0&1&-1&1\\ 0&1&-1&1&-1\end{pmatrix}.
$$

**引理 7.2。** 对每个 $N$ 阶竞赛图 Seidel 矩阵 $C$ 与每个整数 $m\ge 1$，

$$
\operatorname{tr}|C|^{2m}\le\operatorname{tr}|U_N|^{2m}.
$$

**证明。** $N=1$ 的情形是显然的，故设 $N\ge 2$。把 [15, 命题 3.1]（Karamata 不等式）应用于 $t\mapsto t^{2}$，可知 $u\preceq_w v$ 蕴含 $\|u\|_2\le\|v\|_2$。此外，取 $A_1=\cdots=A_m=C$ 应用 [15, 推论 3.4]，可知对每个 $x\in\mathbb{R}^{N}$ 都有 $(C^{m}x)^{\downarrow}\preceq_w M^{m}x^{\downarrow}$。特别地，向量 $M^{m}x^{\downarrow}$ 非负且不增。记 $e_j$ 为第 $j$ 个标准基向量，则 $e_j^{\downarrow}=e_1$。应用 Euclidean 范数不等式并利用 $M^{T}=M$，对每个 $1\le j\le N$ 得

$$
\|C^{m}e_j\|_2^{2}\le\|M^{m}e_1\|_2^{2}=(M^{2m})_{11}.
$$

剩下要计算 $(M^{2m})_{11}$ 的值。为此，我们直接使用 [15, 定理 1.4] 证明中的两个观察。第一，存在正交符号置换矩阵 $S$ 使得 $Se_1=e_1$ 且 $-U^{2}=S^{T}M^{2}S$。具体地 $S=DP$，其中 $D$ 是对角矩阵 $D_{ii}=(-1)^{i+1}$，$P$ 是对应于置换 $(\sigma(1),\sigma(2),\dots,\sigma(N))=(1,N,2,N-1,3,N-2,\dots)$ 的置换矩阵，即 $P_{i,\sigma(i)}=1$。取 $m$ 次幂并比较第一个对角元，得 $(M^{2m})_{11}=((-U^{2})^{m})_{11}$。第二，把 $e_j$ 送到 $e_{j-1}$（$j>1$）、把 $e_1$ 送到 $-e_N$ 的带符号循环移位与 $U$ 交换，因此也与 $(-U^{2})^{m}$ 交换。用该移位作共轭会把 $(-U^{2})^{m}$ 的对角元轮换，故 $(-U^{2})^{m}$ 的所有对角元都相等。由于 $U^{T}U=-U^{2}$，可得 $N(M^{2m})_{11}=\operatorname{tr}|U|^{2m}$。

最后，由于 $C^{T}=-C$，有 $(C^{m})^{T}C^{m}=(-C^{2})^{m}=|C|^{2m}$。把不等式 $\|C^{m}e_j\|_2^{2}\le(M^{2m})_{11}$ 对标准基向量求和，得

$$
\operatorname{tr}|C|^{2m}=\sum_{j=1}^{N}\|C^{m}e_j\|_2^{2}\le N(M^{2m})_{11}=\operatorname{tr}|U|^{2m},
$$

如所需。$\square$

现在用引理 6.4 展开 $Z(K)$，再对展开式中的每一项应用引理 7.2，即证明命题 7.1。

**命题 7.1 的证明。** 令 $K=C/N$。$K$ 每一行与每一列的绝对值之和都是 $(N-1)/N$，故 $\|K\|_{\mathrm{op}}\le(N-1)/N<1$，$U/N$ 也如此。由于 $K$ 实且反对称，其非零特征值（按重数计）可列为 $\pm i\lambda_1,\dots,\pm i\lambda_r$。对 $K$ 及其特征值应用引理 6.4，得

$$
\log Z(K)=\sum_{j=1}^{r}\log\frac{1+\lambda_j^{2}}{1-\lambda_j^{2}}=\sum_{s=0}^{\infty}\frac{\operatorname{tr}|K|^{4s+2}}{2s+1}.
$$

由于 $\|K\|_{\mathrm{op}}<1$，该级数绝对收敛。取 $m=2s+1$ 应用引理 7.2，最右端求和中的每一项分子都至多为 $\operatorname{tr}|U/N|^{4s+2}$。由于所有系数都为正，把 $\log Z(K)$ 的这个展开与 $\log Z(U/N)$ 的展开比较，得 $\log Z(K)\le\log Z(U/N)$，从而 $Z(K)\le Z(U/N)$。

剩下要计算 $Z(U/N)$。$U$ 的每个主子矩阵仍是传递竞赛图的 Seidel 矩阵。我们断言对每个 $j\ge 0$ 都有 Pfaffian $\operatorname{pf}(U_{2j})=1$，其中空 Pfaffian 约定为 1。当 $j\ge 1$ 时，沿第一行展开给出

$$
\operatorname{pf}(U_{2j})=\sum_{\ell=2}^{2j}(-1)^{\ell}\operatorname{pf}(U_{2j-2})=\operatorname{pf}(U_{2j-2}),
$$

因为该交错和共有奇数多项，且首末系数都是 $+1$。断言遂由归纳法得证。由于 $\det(U_{2j})=\operatorname{pf}(U_{2j})^{2}$，$U$ 的每个偶数阶主子式都等于 1。另一方面，每个奇数阶主子式都为零，因为相应的主子矩阵反对称。因此把行列式按主子式展开，对每个 $z\in\mathbb{C}$ 得

$$
\det(I-zU/N)=\sum_{j=0}^{\lfloor N/2\rfloor}\binom{N}{2j}(z/N)^{2j}.
$$

取 $z=1$ 与 $z=i$，得

$$
Z(U/N)=\frac{\sum_{j=0}^{\lfloor N/2\rfloor}\binom{N}{2j}N^{-2j}}{\sum_{j=0}^{\lfloor N/2\rfloor}(-1)^{j}\binom{N}{2j}N^{-2j}}.
$$

由二项式定理，该比值的分子为 $\frac12\big((1+N^{-1})^{N}+(1-N^{-1})^{N}\big)$，它当 $N\to\infty$ 时趋于 $\cosh 1$。分母为 $\operatorname{Re}(1+i/N)^{N}$，它当 $N\to\infty$ 时趋于 $\cos 1$。由于该上界只依赖于 $N$，我们对所有 $N$ 阶归一化竞赛图 Seidel 矩阵 $K$ 一致地有 $Z(K)=Z(C/N)\le Z(U/N)\le\cosh 1/\cos 1+o(1)$，如所需。$\square$

## 8. 上界的证明

本节证明定理 1.2。我们先用 Bregman 定理（事实 2.3）证明：若竞赛图 $T$ 的 Hamilton 圈数多于随机竞赛图，则除一个小的例外顶点集之外，$T$ 的其余部分接近正则。

**命题 8.1。** 设 $T$ 是 $n$ 个顶点的竞赛图，$C(T)\ge(n-1)!/2^{n}$。则存在集合 $S\subseteq V(T)$ 满足 $|S|=O(\log^{4}n)$，使得若 $G=T-S$ 是 $N$ 个顶点的子竞赛图、归一化 Seidel 矩阵为 $K$，则 $\|K\mathbf{1}_N\|_\infty\cdot\|K\mathbf{1}_N\|_2^{2}=o(1)$ 且 $\|K\|_{\mathrm{op}}\le 2/\pi$。

**证明。** 设 $A$ 是 $T$ 的邻接矩阵，即行与列以 $V(T)$ 为指标、当 $ij$ 是 $T$ 中一条有向边时 $A_{ij}=1$ 的 $n\times n$ 矩阵。对每个 $v\in V(T)$，记 $d_T^{+}(v)$ 为 $v$ 的出度，它等于 $A$ 的第 $v$ 行元素之和。令 $m=(n-1)/2$；我们期望当 $T$ 接近正则竞赛图时，每个顶点的入度与出度都近似为 $m$。$A$ 的永久式计数 $T$ 的 1-因子，而 $T$ 的每条 Hamilton 圈都是一个 1-因子。因此，把 $A$ 的行归一化后应用事实 2.3，得

$$
\log C(T)\le\log\operatorname{per}A\le\sum_{v\in V(T)}\frac{\log(d_T^{+}(v)!)}{d_T^{+}(v)}.
$$

（由于 $C(T)\ge(n-1)!/2^{n}$，$T$ 中至少有一条 Hamilton 圈，故每个顶点的入度与出度都为正；因此上述归一化是良定义的。）在接下来的计算中，把这个求和式关于每个顶点的入度与出度对称化会很方便。为此注意，反转 $T$ 每条边的方向（等价于考虑邻接矩阵 $A^{T}$）显然保持 Hamilton 圈数。又因 $\operatorname{per}A=\operatorname{per}A^{T}$，且 $T$ 每个顶点的入度与出度之和为 $2m$，对反转后的竞赛图以同样方式应用事实 2.3，蕴含

$$
\log C(T)\le\frac12\sum_{v\in V(T)}\left(\frac{\log(d_T^{+}(v)!)}{d_T^{+}(v)}+\frac{\log((2m-d_T^{+}(v))!)}{2m-d_T^{+}(v)}\right).
$$

我们用界 $\log(a!)\le a\log a-a+\log a+1$ 来估计这个和中每一项；它是 Stirling 逼近的一个简单推论，对所有 $a\ge 1$ 成立。对任意整数 $1\le d\le 2m-1$，由该界得

$$
\frac12\left(\frac{\log(d!)}{d}+\frac{\log((2m-d)!)}{2m-d}\right)\le\log m-1+\frac12\log\left(1-\frac{(d-m)^{2}}{m^{2}}\right)+\frac12\left(\frac{\log d+1}{d}+\frac{\log(2m-d)+1}{2m-d}\right).
$$

先设 $|d-m|\le m/2$。此时 $d$ 与 $2m-d$ 都至少为 $m/2$，故最后两项至多为 $2(\log(2m)+1)/m$。此外，由于对每个 $0\le a<1$ 有 $\log(1-a)\le-a$，中间的对数项至多为 $-(d-m)^{2}/(2m^{2})$。特别地，当 $|d-m|\le m/2$ 时，上式至多为

$$
\log m-1-\frac{(d-m)^{2}}{8m^{2}}+\frac{2(\log(2m)+1)}{m}.
$$

（中间项的分母写成 $8m^{2}$ 而非 $2m^{2}$，是为了后文一致。）剩下要处理 $|d-m|>m/2$ 的情形。由对称性可设 $d<m/2$。考虑函数 $f(x)=\log x+\frac{\log x+1}{x}$，它在 $[1,\infty)$ 上凹。由凹性，对 $1\le d\le m/2$，和 $f(d)+f(2m-d)$ 在 $d=m/2$ 处取最大。因此代入 $d=m/2$ 可知，当 $|d-m|>m/2$ 时，

$$
\frac12\left(\frac{\log d!}{d}+\frac{\log((2m-d)!)}{2m-d}\right)\le\log m-1+\frac12\log\frac34+o(1).
$$

由于 $\frac12\log\frac34<-\frac18$，对一切充分大的 $n$ 这至多为 $\log m-1-\frac18$。又因 $(d-m)^{2}/m^{2}\le 1$，可知在这一范围内也有

$$
\frac12\left(\frac{\log(d!)}{d}+\frac{\log((2m-d)!)}{2m-d}\right)\le\log m-1-\frac{(d-m)^{2}}{8m^{2}}+\frac{2(\log(2m)+1)}{m}.
$$

于是这个界对每个 $1\le d\le 2m-1$ 都成立，故可对每个 $v\in V(T)$ 取 $d=d_T^{+}(v)$ 来给出 $\log C(T)$ 的上界。对所有顶点求和，

$$
\log C(T)\le n(\log m-1)-\frac1{8m^{2}}\sum_{v\in V(T)}(d_T^{+}(v)-m)^{2}+O(\log n).
$$

另一方面，我们知道 $C(T)\ge(n-1)!/2^{n}$。结合下界 $\log(a!)\ge a\log a-a+1$（同样对所有 $a\ge 1$ 成立），有

$$
\log C(T)\ge\log((n-1)!)-n\log 2\ge(n-1)\log(n-1)-(n-1)+1-n\log 2=n(\log m-1)+O(\log n).
$$

把它与 $\log C(T)$ 的上界结合，得

$$
\sum_{v\in V(T)}(d_T^{+}(v)-m)^{2}=O(n^{2}\log n).
$$

接下来，取集合 $S$ 为那些 $d_T^{+}(v)$ 与 $m$ 相差显著的顶点。特别地，令

$$
S=\left\{v\in V(T):|d_T^{+}(v)-m|>\frac{n}{\log^{3/2}n}\right\}.
$$

由于 $\sum_{v\in V(T)}(d_T^{+}(v)-m)^{2}=O(n^{2}\log n)$，可知 $|S|=O(\log^{4}n)$。设 $G=T-S$ 为删去 $S$ 中顶点后所得的有 $N=n-|S|$ 个顶点的竞赛图，$K$ 为 $G$ 的归一化 Seidel 矩阵。记 $d_G^{+}(v)$ 为 $v$ 在 $G$ 中的出邻点数，$d_S^{+}(v)$ 为 $v$ 在 $S$ 中的出邻点数。删去 $S$ 使每个 $v\in V(G)$ 的出度改变满足 $d_T^{+}(v)-d_G^{+}(v)\le|S|$。由于 $K$ 是 $G$ 的归一化 Seidel 矩阵，

$$
(K\mathbf{1}_N)_v=\frac{2d_G^{+}(v)-(N-1)}{N}=\frac{2(d_T^{+}(v)-m)+|S|-2d_S^{+}(v)}{N}.
$$

由 $S$ 的定义，每个顶点 $v\in V(G)$ 满足 $|d_T^{+}(v)-m|=O(n\log^{-3/2}n)$，而分子中另外两项都是 $O(\log^{4}n)$。此外，由于 $|S|=O(\log^{4}n)$，有 $N=(1-o(1))n$，因此 $\|K\mathbf{1}_N\|_\infty=O(\log^{-3/2}n)$。

接下来界住 $\|K\mathbf{1}_N\|_2^{2}$。利用不等式 $(a+b)^{2}\le 2a^{2}+2b^{2}$，有

$$
\|K\mathbf{1}_N\|_2^{2}\le\frac8{N^{2}}\sum_{v\in V(G)}(d_T^{+}(v)-m)^{2}+\frac{2|S|^{2}}{N}.
$$

前面已建立第一项是 $O(\log n)$，即使对全体 $v\in V(T)$ 求和也是如此。由于 $|S|=O(\log^{4}n)$ 且 $N=(1-o(1))n$，第二项为 $o(1)$。因此 $\|K\mathbf{1}_N\|_2^{2}=O(\log n)$，从而 $\|K\mathbf{1}_N\|_\infty\cdot\|K\mathbf{1}_N\|_2^{2}=O(\log^{-1/2}n)=o(1)$，如所需。

剩下只要界住 $K$ 的谱范数。设 $C$ 为 $G$ 的 Seidel 矩阵，则 $K=C/N$。由引理 2.5，$\|C\|_{\mathrm{op}}\le\cot\frac{\pi}{2N}$。因此

$$
\|K\|_{\mathrm{op}}\le\frac1N\cot\frac{\pi}{2N}\le\frac2\pi.
$$

命题 8.1 证毕。$\square$

现在准备证明命题 8.2。上界定理 1.2 随后由命题 7.1、8.1 与 8.2 结合即刻推出。

**命题 8.2。** 设 $\rho<1$。设 $T$ 是 $n$ 个顶点的竞赛图，$S\subseteq V(T)$ 满足 $|S|=O(\log^{4}n)$。设 $G=T-S$ 是 $N$ 个顶点的子竞赛图、归一化 Seidel 矩阵为 $K$。若 $\|K\mathbf{1}_N\|_\infty\cdot\|K\mathbf{1}_N\|_2^{2}=o(1)$ 且 $\|K\|_{\mathrm{op}}\le\rho$，则

$$
C(T)\le\left(\frac{\det(I-K)}{\det(I-iK)}+o(1)\right)\frac{(n-1)!}{2^{n}}.
$$

**证明。** 令 $s=|S|$，则 $n=N+s$ 且 $s=O(\log^{4}N)$。设 $A$ 如前为 $G$ 的邻接矩阵，行与列以 $V(G)$ 为指标，并令 $Q_0=J_N-I/N+K=2A/N$。设 $H$ 是 $T$ 的一条 Hamilton 圈。$H$ 中两个端点都在 $S$ 内的边诱导出一个森林，其分支是有向路径。粗略地说，我们将按 Hamilton 圈经过 $S$ 的路径把它们分类，对每一类应用命题 6.2，然后对这些路径的所有可能情形求和。

设 $\mathcal{F}$ 是 $T[S]$ 中顶点集为 $S$、分支都是有向路径（允许由单个顶点组成的平凡路径）的森林 $F$ 之集。每条 $T$ 的 Hamilton 圈在 $S$ 上的限制都是这样的森林。对 $F\in\mathcal{F}$，记 $c(F)$ 为其分支之集。对每个 $P\in c(F)$，设 $u_P,v_P$ 为其首、末顶点，并令 $a_P=|N_G^{-}(u_P)|$ 与 $b_P=|N_G^{+}(v_P)|$ 分别为 $P$ 在 $G$ 中可能的前驱数与后继数。

我们还会通过为每个分支 $P\in c(F)$ 记录 $G$ 中的一个顶点（前驱或后继）来进一步区分具有同一森林 $F\in\mathcal{F}$ 的 Hamilton 圈。若 $a_P\le b_P$，则记录前驱 $x_P\in N_G^{-}(u_P)$，并称 $P$ 由行 $x_P$ 表示。否则记录后继 $y_P\in N_G^{+}(v_P)$，并称 $P$ 由列 $y_P$ 表示。于是我们从较小的邻域中记录一个顶点，而把较大的邻域编码在一个替换向量中。一个**模式**由 $F$ 与这些被记录的顶点组成。只需考虑那些所记录前驱互不相同、所记录后继互不相同的模式（但允许一个前驱与一个后继重合）。注意所有 Hamilton 圈都与此限制相容，因为在每条圈上每个顶点都有唯一的前驱与后继。

设 $P_F$ 为具有森林 $F$ 的模式之集，并令 $P=\bigcup_{F\in\mathcal{F}}P_F$。对 $\pi\in P$，设 $R_\pi,C_\pi$ 分别为其记录到的前驱之集与后继之集，并令 $C(T,\pi)$ 为 $T$ 中具有模式 $\pi$ 的 Hamilton 圈数。每条 Hamilton 圈恰好确定一个模式，故 $C(T)=\sum_{\pi\in P}C(T,\pi)$。

固定 $F\in\mathcal{F}$ 与 $\pi\in P_F$，令 $k=|c(F)|$。我们的计划是用替换向量编码 $Q_0$ 的行集与列集 $R_\pi$ 与 $C_\pi$，得到矩阵 $Q_\pi$，然后对它应用命题 6.2。为应用该命题，这些替换向量的元素必须是 $O(1/N)$ 量级，因此必须小心地讨论 $\max\{a_P,b_P\}$ 是否确实为 $\Omega(N)$ 量级。对一个由行表示的分支 $P\in c(F)$，若 $b_P\ge N/2$，则替换向量是 $N_G^{+}(v_P)\setminus\{x_P\}$ 上的均匀概率向量；否则是 $V(G)\setminus\{x_P\}$ 上的均匀概率向量。若 $P$ 由列表示，则当 $a_P\ge N/2$ 时替换向量是 $N_G^{-}(u_P)\setminus\{y_P\}$ 上的均匀概率向量，否则是 $V(G)\setminus\{y_P\}$ 上的均匀概率向量。若 $\max\{a_P,b_P\}$ 至少为 $N/2$，令 $h_P$ 等于该最大值；否则令 $h_P=N$。每个这样的向量都有 $N/2-1$ 到 $h_P$ 个非零坐标，因此对一切充分大的 $N$，其正元素至少为 $h_P^{-1}$、至多为 $3/N$。

我们简要预告一下替换向量为何这样选取。我们需要这些向量中每个元素都是 $O(1/N)$。若 $P$ 是单个顶点，则 $a_P+b_P=N$。通过在模式中记录 $N_G^{+}(u_P)$ 与 $N_G^{-}(u_P)$ 中较小者的一个顶点，另一个邻域就在一个至少含 $N/2$ 个顶点的集合上变动，于是相应替换向量的元素约为 $2/N$。然而，若 $P$ 含有 $F$ 的某条边，则 $N_G^{-}(u_P)$ 与 $N_G^{+}(v_P)$ 未必划分 $V(G)$。因此 $a_P$ 与 $b_P$ 可能都小于 $N/2$，甚至可能是 $o(N)$。此时我们就退而把替换向量取为 $V(G)\setminus\{x_P\}$ 或 $V(G)\setminus\{y_P\}$ 上的均匀向量。这相当于允许那些不对应于 $T$ 的 Hamilton 圈的转移（我们最终会过计数），而这种放松所付出的代价是稍后把 $\operatorname{cyc}Q$ 放大一个 $N$ 的因子。不过我们将看到，含有 $F$ 的边的分支会贡献足够多的额外衰减来吸收这一损失（这可以看作如下事实的推论：由于 $|S|$ 很小，Hamilton 圈不太可能用到 $S$ 中的边）。

设 $Q_\pi$ 由 $Q_0$ 按规定的替换在行 $R_\pi$ 与列 $C_\pi$ 上得到，只是 $R_\pi\times C_\pi$ 中每个元素都取零。在这些行与列之外，令 $Q_\pi$ 与 $Q_0$ 一致。由于 $|R_\pi|+|C_\pi|=k\le s$，这是 $Q_0$ 的一个（按定义 6.1 意义下的）$3$-稀疏修正，且对角元为零。

从一条具有模式 $\pi$ 的 Hamilton 圈中删去 $S$，剩下 $V(G)$ 的一个循环排序，其中每条路径 $P\in c(F)$ 变成一个单独的转移。这个排序中没有任何转移落在 $R_\pi\times C_\pi$ 中。事实上，设某个这样的转移从 $x_P$ 到 $y_{P'}$，它就得同时表示 $P$ 与 $P'$。由于经过 $S$ 的转移恰含 $F$ 的一个分支，这将迫使 $P=P'$，与“一个分支或由行表示、或由列表示、但不能两者兼有”的规则矛盾。（这正是把 $Q_\pi$ 中 $R_\pi\times C_\pi$ 的元素取零的理由。）反之，对由具有模式 $\pi$ 的 Hamilton 圈得到的循环排序，原 Hamilton 圈由 $\pi$ 与循环序唯一确定。特别地，每条路径 $P\in c(F)$ 都通过“紧接在其记录到的前驱之后、或紧接在其记录到的后继之前”被“重新插入”来重建 Hamilton 圈。$k$ 个经过 $S$ 的转移在 $Q_\pi$ 中的权重至少为 $h_P^{-1}$，其余 $N-k$ 个转移都是 $G$ 中不在被修改的行与列上的边，故权重为 $2/N$。因此 $T$ 中具有模式 $\pi$ 的 Hamilton 圈数满足

$$
C(T,\pi)\le\left(\frac N2\right)^{N-k}\left(\prod_{P\in c(F)}h_P\right)\operatorname{cyc}Q_\pi.
$$

取 $A_0=3$ 对 $Q_\pi$ 应用命题 6.2，得

$$
\operatorname{cyc}Q_\pi\le(1+o(1))\frac{(N-1)!}{N^{N}}\exp\left(1+\sum_{x,y\in V(G)}(Q_\pi)_{xy}-N\right)Z(K).
$$

接下来计算这个表达式中的指数因子。令 $\delta=K\mathbf{1}_N$。$Q_0$ 的元素之和为 $N-1$，其行和为 $1-1/N+\delta_x$，列和为 $1-1/N-\delta_y$。把 $Q_0$ 的一行替换为概率向量，使元素总和改变 $1/N-\delta_x$；替换一列使其改变 $1/N+\delta_y$。把 $R_\pi$ 与 $C_\pi$ 中所有行与列上的这些改变求和，就计入了 $Q_\pi$ 的每个元素，只有落在 $R_\pi\times C_\pi$ 中的元素除外。这样的元素至多有 $s^{2}$ 个，且每个上的偏差为 $O(1/N)$，故

$$
1+\sum_{x,y\in V(G)}(Q_\pi)_{xy}-N=\frac kN-\sum_{x\in R_\pi}\delta_x+\sum_{y\in C_\pi}\delta_y+O(s^{2}/N).
$$

由于 $k/N+O(s^{2}/N)=o(1)$，把 $\operatorname{cyc}Q_\pi$ 的界代入 $C(T,\pi)$ 的界，得

$$
C(T,\pi)\le(1+o(1))Z(K)\frac{(N-1)!}{2^{N}}\exp\left(-\sum_{x\in R_\pi}\delta_x+\sum_{y\in C_\pi}\delta_y\right)\prod_{P\in c(F)}\frac{2h_P}{N}.
$$

此外，$(1+o(1))$ 误差关于 $P$ 一致，因为所有修改至多用到 $s$ 行与 $s$ 列，且其元素都有相同的界 $3/N$。

现在我们想计算 $\sum_{\pi\in P_F}C(T,\pi)$，即上式关于共享固定森林 $F$ 的模式 $\pi$ 之和。指数因子 $\exp\left(-\sum_{x\in R_\pi}\delta_x+\sum_{y\in C_\pi}\delta_y\right)$ 对每个模式未必接近 1，故我们把它保留在求和中。它来自由一个行表示的分支的贡献是 $e^{-\delta_{x_P}}$，来自由一个列表示的分支的贡献是 $e^{\delta_{y_P}}$。对 $P\in c(F)$，定义其“权重”为

$$
w_P=\begin{cases}\frac{2h_P}{N}\sum_{x\in N_G^{-}(u_P)}e^{-\delta_x},&a_P\le b_P,\\ \frac{2h_P}{N}\sum_{y\in N_G^{+}(v_P)}e^{\delta_y},&a_P>b_P.\end{cases}
$$

现在注意，不同分支所记录的顶点之间唯一的约束就是互不相同的要求。放松这些要求只会增大我们的非负界之和，而此时不同分支之间的选择就变得独立了。此外，$h_P$ 只依赖于 $P$，故

$$
\sum_{\pi\in P_F}C(T,\pi)\le(1+o(1))Z(K)\frac{(N-1)!}{2^{N}}\prod_{P\in c(F)}w_P.
$$

为估计权重 $w_P$ 之积，令 $L=\|\delta\|_1$。假设给出 $\|\delta\|_\infty^{3}\le\|\delta\|_\infty\|\delta\|_2^{2}=o(1)$，而 Hölder 不等式给出

$$
L^{3}\le N^{2}\sum_{x\in V(G)}|\delta_x|^{3}\le N^{2}\|\delta\|_\infty\|\delta\|_2^{2}=o(N^{2}).
$$

因此 $\|\delta\|_\infty=o(1)$，$L=o(N^{2/3})$，特别地 $sL/N=o(1)$。对任一 $U\subseteq V(G)$，当 $N$ 充分大时由界 $|e^{\pm\delta_x}-1|\le 2|\delta_x|$ 可得 $\sum_{x\in U}e^{\pm\delta_x}\le|U|+2L$。若 $P$ 是单个顶点，则 $h_P=\max\{a_P,b_P\}$ 且 $a_P+b_P=N$，故 $w_P\le 2a_Pb_P/N+4L\le N/2+4L$。对其他每个分支，由 $h_P\le N$ 与 $\min\{a_P,b_P\}\le N$ 得 $w_P\le 2N+4L$。

令 $r=|E(F)|$。由于 $F$ 是有 $k$ 个分支的森林，有 $k=s-r$，且 $F$ 中至多有 $r$ 个分支含边。每个由单个顶点组成的分支至多贡献 $(N/2)(1+8L/N)$，其他每个分支至多贡献 $4(N/2)(1+8L/N)$。把这些界相乘并利用近似 $1+8L/N\le e^{8L/N}$，得

$$
\prod_{P\in c(F)}w_P\le\left(\frac N2\right)^{k}4^{r}e^{8sL/N}=(1+o(1))\left(\frac N2\right)^{s}\left(\frac 8N\right)^{r},
$$

其中误差再次关于 $F$ 一致。

剩下要对森林 $F\in\mathcal{F}$ 求和。上面的分支估计对 $F$ 的每条边给出一个因子 $8/N$。令 $m=\binom{s}{2}$，并对 $0\le r\le m$ 令 $\mathcal{F}_r$ 为 $\mathcal{F}$ 中含 $r$ 条边的森林之集。由于 $T[S]$ 恰有 $m$ 条有向边，而固定顶点集 $S$ 上的森林由其边集唯一确定，有 $|\mathcal{F}_r|\le\binom{m}{r}$。注意并非任选 $r$ 条边都对应一个每个分支都是路径的森林，但再次放松这一限制只会增大计数。当 $r=0$ 时恰有一个森林，其中每条路径都是单点。

每个模式恰属于一个 $P_F$，每个森林恰属于一个 $\mathcal{F}_r$。对固定森林的界求和，再应用上面的分支估计，得

$$
\begin{aligned}
C(T)&=\sum_{\pi\in P}C(T,\pi)=\sum_{r=0}^{m}\sum_{F\in\mathcal{F}_r}\sum_{\pi\in P_F}C(T,\pi)\\
&\le(1+o(1))Z(K)\frac{(N-1)!}{2^{N}}\left(\frac N2\right)^{s}\sum_{r=0}^{m}|\mathcal{F}_r|\left(\frac 8N\right)^{r}\\
&\le(1+o(1))Z(K)\frac{(N-1)!N^{s}}{2^{n}}\sum_{r=0}^{m}\binom{m}{r}\left(\frac 8N\right)^{r}.
\end{aligned}
$$

由二项式定理，求和因子为 $(1+8/N)^{m}$；又因 $m=O(s^{2})=o(N)$，有 $1\le(1+8/N)^{m}\le e^{8m/N}=1+o(1)$。（$r=0$ 的项本来就等于 1，故该求和中 $r\ge 1$ 的各项总计为 $o(1)$；于是至少含一条边的森林的总贡献可忽略，正如先前所料。）最后，$(n-1)!/(N-1)!=\prod_{j=0}^{s-1}(N+j)\ge N^{s}$，而命题 7.1 给出 $Z(K)=O(1)$。因此

$$
C(T)\le(Z(K)+o(1))\frac{(n-1)!}{2^{n}}=\left(\frac{\det(I-K)}{\det(I-iK)}+o(1)\right)\frac{(n-1)!}{2^{n}},
$$

这就完成了命题的证明。$\square$

**定理 1.2 的证明。** 设 $T$ 是 $n$ 个顶点的竞赛图。若 $C(T)<(n-1)!/2^{n}$，则由于 $\cosh 1/\cos 1>1$，结论立即成立。因此可设 $C(T)\ge(n-1)!/2^{n}$。由命题 8.1，存在 $S\subseteq V(T)$ 满足 $|S|=O(\log^{4}n)$，使得若 $G=T-S$ 有 $N$ 个顶点、归一化 Seidel 矩阵为 $K$，则 $\|K\mathbf{1}_N\|_\infty\|K\mathbf{1}_N\|_2^{2}=o(1)$ 且 $\|K\|_{\mathrm{op}}\le 2/\pi$。取固定常数 $\rho$ 满足 $2/\pi<\rho<1$。对一切充分大的 $n$，命题 8.2 的假设成立，因此

$$
C(T)\le(Z(K)+o(1))\frac{(n-1)!}{2^{n}}.
$$

命题 7.1 给出 $Z(K)\le\cosh 1/\cos 1+o(1)$。于是

$$
C(T)\le\left(\frac{\cosh 1}{\cos 1}+o(1)\right)\frac{(n-1)!}{2^{n}},
$$

定理 1.2 证毕。$\square$

## 9. 下界的证明

回顾当 $n$ 为奇数时，$T_n$ 是以 $\mathbb{Z}/n\mathbb{Z}$ 为顶点集、当 $j-i\pmod n<n/2$ 时从 $i$ 到 $j$ 有有向边的竞赛图。当 $n$ 为偶数时，令 $R_n$ 为从 $T_{n+1}$ 删去顶点 $0$ 所得的竞赛图；当 $n$ 为奇数时，令 $R_n=T_n$。本节先证明定理 1.3，它计数竞赛图 $R_n$ 中 Hamilton 圈的数目。这一计数将渐近地匹配上一节建立的 $C(n)$ 的上界。我们利用的 $T_n$ 的关键性质是：它的归一化竞赛图 Seidel 矩阵渐近地达到命题 7.1 中的值 $\cosh 1/\cos 1$。偶数 $n$ 时的竞赛图 $R_n$ 之所以被引入，只是因为它也从 $T_{n+1}$ 继承了这一性质。我们指出，若 $K$ 是 $n$ 个顶点上均匀随机竞赛图的归一化 Seidel 矩阵，则可以证明 $\lim_{n\to\infty}\mathbb{E}[Z(K)]=e<\cosh 1/\cos 1$。

随后我们将稍作调整计数策略，以证明量 $P(n)$ 也渐近地由 $P(R_n)$ 取到最大。也就是说，我们将证明

$$
P(R_n)=\left(\frac{\cosh 1}{\cos 1}-o(1)\right)\frac{n!}{2^{n-1}}.
$$

连同定理 1.2 与不等式 $P(n)\le 4C(n+1)$，这就完成了定理 1.4 的证明。

我们从下述引理开始。

**引理 9.1。** 若 $K$ 是 $R_n$ 的归一化 Seidel 矩阵，则对每个 $z\in\mathbb{C}$ 都有

$$
\det(I-zK)=\sum_{j=0}^{\lfloor n/2\rfloor}\binom{n}{2j}\frac{z^{2j}}{n^{2j}}.
$$

特别地，当 $n\to\infty$ 时 $Z(K)\to\cosh 1/\cos 1$。

**证明。** 我们的策略是证明 $R_n$ 的 Seidel 矩阵可由传递竞赛图的 Seidel 矩阵 $U_n$ 通过一个带符号置换矩阵作共轭得到。这一过程保持命题中的行列式，故前面关于 $Z(U_n/n)$ 的计算将完成证明。简而言之，这样的带符号置换矩阵的存在性可以这样论证：把 $T_n$ 的顶点按（自然的）循环顺序排列，然后反转穿过一条直径割的有向边，就得到 $n$ 个顶点上的传递竞赛图。更具体地，设 $m\ge 0$，考虑 $T_{2m+1}$，其中 $V(T_{2m+1})=\{0,1,\dots,2m\}$。把其 Seidel 矩阵中指标属于集合 $\{m+1,\dots,2m\}$ 的行与列乘以 $-1$。这恰好反转这个顶点集与 $\{0,\dots,m\}$ 之间的边。所得竞赛图是传递的，其传递序为 $0,m+1,1,m+2,\dots,m-1,2m,m$。事实上，两个集合内部的边都按此顺序定向。对于 $i\in\{0,\dots,m\}$ 与 $m+j$（$1\le j\le m$）之间的边，原来的方向是当 $j\le i$ 时 $i\to m+j$。反转之后，它变为当 $i<j$ 时 $i\to m+j$，这与上述顺序相符。

这证明了 $n$ 为奇数时的断言。当 $n=2m$（$m\ge 1$）时，回顾 $R_n$ 由 $T_{2m+1}$ 删去顶点 $0$ 得到。从上述同一构造中删去该顶点，就剩下 $n$ 个顶点上的传递竞赛图，因此 $n$ 为偶数时的断言也成立。

按上述方式乘以 $R_n$ 的 Seidel 矩阵的行与列，相当于用带符号置换矩阵对该矩阵作共轭。由于这保持行列式，有 $\det(I-zK)=\det(I-zU_n/n)$，于是结论由命题 7.1 的证明得出。$\square$

现在可以通过应用命题 5.1、并在最后一步使用引理 9.1 来证明定理 1.3。遗憾的是，当 $n$ 为偶数时，竞赛图 $R_n$ 不是正则竞赛图（因此其邻接矩阵未必是双随机矩阵的纯量倍），所以我们又需要施加 Sinkhorn 缩放，并证明相应缩放因子可忽略。这涉及验证命题 4.1 与 5.1 的假设。

**定理 1.3 的证明。** 设 $A$ 是 $R_n$ 的邻接矩阵，$K=(A-A^{T})/n$ 是其归一化 Seidel 矩阵。如前，令 $Q=2A/n=J_n-I/n+K$。我们将对 $Q$ 应用命题 4.1，把它缩放为双随机矩阵。

令 $u=Q\mathbf{1}_n-\mathbf{1}_n$、$v=Q^{T}\mathbf{1}_n-\mathbf{1}_n$。若 $n$ 为奇数，$Q$ 的每一行和与每一列和都是 $1-1/n$。若 $n$ 为偶数，这些和或为 1、或为 $1-2/n$，因为从 $T_{n+1}$ 中删去一个顶点后每个度数为 $n/2$ 或 $n/2-1$。因此 $\|u\|_\infty+\|v\|_\infty=O(n^{-1})$ 且 $\|u\|_2+\|v\|_2=O(n^{-1/2})$。

现在我们检查命题 4.1 剩下的假设。令 $P=\operatorname{diag}(\mathbf{1}_n+u)^{-1/2}Q\operatorname{diag}(\mathbf{1}_n+v)^{-1/2}$。由于 $\|u\|_\infty+\|v\|_\infty=O(n^{-1})$，该估计表明 $P$ 中两个对角因子在谱范数下与 $I$ 的差都是 $O(n^{-1})$ 量级。此外 $Q$ 的每一行和与每一列和都至多为 1，故 $\|Q\|_{\mathrm{op}}\le 1$。因此

$$
\|P-Q\|_{\mathrm{op}}\le\|\operatorname{diag}(\mathbf{1}_n+u)^{-1/2}-I\|_{\mathrm{op}}\cdot\|Q\|_{\mathrm{op}}\cdot\|\operatorname{diag}(\mathbf{1}_n+v)^{-1/2}\|_{\mathrm{op}}+\|Q\|_{\mathrm{op}}\cdot\|\operatorname{diag}(\mathbf{1}_n+v)^{-1/2}-I\|_{\mathrm{op}}=O(n^{-1}).
$$

由于 $J_n$ 在 $\mathbf{1}_n^{\perp}$ 上消失，对每个 $z\perp\mathbf{1}_n$ 有 $Qz=(K-I/n)z$。因此

$$
\sigma_2(P)\le\sup_{\substack{z\perp\mathbf{1}_n\\ \|z\|_2=1}}\|Pz\|_2\le\|K\|_{\mathrm{op}}+\frac1n+\|P-Q\|_{\mathrm{op}}\le\frac1n\cot\frac{\pi}{2n}+O(n^{-1})=\frac2\pi+o(1),
$$

其中最后一个不等式来自对 $nK$ 应用引理 2.5。

由于 $\|Q\|_{\max}\le 2/n$，命题 4.1 的所有假设都满足。因此存在向量 $x,y\in\mathbb{R}^{n}$ 使 $D=\operatorname{diag}(e^{x})Q\operatorname{diag}(e^{y})$ 双随机，且 $\|x\|_2+\|y\|_2=O(n^{-1/2})$。特别地 $\|x\|_\infty+\|y\|_\infty=o(1)$，故在接下来的计算中可以关于所有 $i,j$ 一致地 Taylor 展开 $e^{x_i+y_j}$。

我们先确定这一缩放如何影响 $\operatorname{cyc}Q$ 与 $\operatorname{cyc}D$ 的比值。令 $s=\sum_{i=1}^{n}(x_i+y_i)$。$Q$ 的元素之和为 $n-1$，而 $D$ 的元素之和为 $n$。展开 $e^{x_i+y_j}$ 并利用上面的 Euclidean 范数界，有

$$
n=\sum_{1\le i,j\le n}Q_{ij}e^{x_i+y_j}=n-1+s+O(n^{-1}).
$$

事实上，线性项为 $s+\langle u,x\rangle+\langle v,y\rangle$，而其余的內积与二次余项都因前面建立的 Euclidean 范数界而是 $O(n^{-1})$。因此 $s=1+O(n^{-1})$。

接下来验证命题 5.1 的假设。令 $B=D-J_n$。如在命题 6.2 的证明中那样，界 $Q_{ij}=O(n^{-1})$ 与 $\max_{1\le i,j\le n}|e^{x_i+y_j}-1|=o(1)$ 蕴含 $\|D-Q\|_F=o(1)$。由于 $Q-J_n=K-I/n$，可得 $\|B-K\|_F=o(1)$。于是 $B$ 有有界的 Frobenius 范数，且 $\|B\|_{\mathrm{op}}\le 2/\pi+o(1)$。此外 $D$ 的对角元为零、元素为 $O(n^{-1})$ 量级，故命题 5.1 适用。

由于 $\operatorname{tr}B=-1$ 且 $\operatorname{tr}K=0$，命题 6.2 证明末尾的两项行列式比较可以原样应用。结合引理 6.4，这蕴含

$$
\frac{n^{n}\operatorname{cyc}D}{(n-1)!}=(1+o(1))\frac{\det(I-B)}{\sqrt{\det(I-B^{T}B)}}=(1+o(1))eZ(K).
$$

最后，贡献于 $\operatorname{cyc}Q$ 的每一项都恰从每一行和每一列取一个元素。因此 $\operatorname{cyc}(Q)=e^{-s}\operatorname{cyc}D$。由于 $A=(n/2)Q$，我们得出结论

$$
\frac{C(R_n)}{(n-1)!/2^{n}}=e^{-s}\frac{n^{n}\operatorname{cyc}D}{(n-1)!}=(1+o(1))e^{1-s}Z(K)\longrightarrow\frac{\cosh 1}{\cos 1},
$$

其中极限来自 $s=1+O(n^{-1})$ 与引理 9.1。定理 1.3 证毕。$\square$

## 10. Hamilton 路径

本节证明定理 1.4。上界来自 $P(n)\le 4C(n+1)$，而后者可以这样看出：加入一个相邻关系均匀随机的顶点，然后计数所得 $n+1$ 个顶点的竞赛图中的 Hamilton 圈。与之平行地，我们计数 $R_n$ 中 Hamilton 路径的策略是加入一个新顶点，它与 $R_n$ 中每个顶点双向相邻，然后计数所得有向图中的 Hamilton 圈。尽管它不再是竞赛图，这个有向图的归一化邻接矩阵仍可加权成为双随机矩阵，因此我们仍能应用计数 Hamilton 圈的机制。

**定理 1.4 的证明。** 上界立即由 $P(n)\le 4C(n+1)$ 与定理 1.2 推出。对下界，我们将证明 $P(R_n)=(2n+o(n))C(R_n)$。

若 $M$ 是 $n\times n$ 矩阵，定义 $\operatorname{path}(M)$ 为带权和

$$
\operatorname{path}(M)=\sum_{\sigma\in S_n}\prod_{j=1}^{n-1}M_{\sigma(j),\sigma(j+1)}.
$$

设 $A,Q,D,x,y$ 如定理 1.3 的证明中定义。于是 $A=(n/2)Q$，$D=\operatorname{diag}(e^{x})Q\operatorname{diag}(e^{y})$ 双随机，且 $\|x\|_\infty+\|y\|_\infty=o(1)$。回顾 $D$ 还满足命题 5.1 的假设。

我们先比较 $\operatorname{path}(D)$ 与 $\operatorname{cyc}D$。实际上，这可以通过引入前述辅助顶点 $v$、再计数新有向图中的 Hamilton 圈来实现。为此，考虑 $(n+1)\times(n+1)$ 矩阵

$$
\widehat{D}=\begin{pmatrix}0&\mathbf{1}_n^{T}/n\\ \mathbf{1}_n/n&(1-1/n)D\end{pmatrix}.
$$

这个矩阵是双随机的：新的行与列各元素之和为 1，而新顶点 $v$（对应第一行与第一列）的贡献恰好被因子 $1-1/n$ 补偿。我们将滥用记号，把 $D$ 与 $\widehat{D}$ 中的 Hamilton 路径与 Hamilton 圈称为这些矩阵所编码的有向图中的 Hamilton 路径与 Hamilton 圈。

$D$ 中的每条 Hamilton 路径都给出 $\widehat{D}$ 中唯一一条 Hamilton 圈，它由该 Hamilton 路径经过这个新顶点闭合而成。进出 $v$ 的两条有向边为 $\operatorname{cyc}\widehat{D}$ 贡献因子 $n^{-2}$，而原来的 $n-1$ 条边各额外贡献因子 $1-1/n$。因此

$$
\operatorname{cyc}\widehat{D}=\frac1{n^{2}}\left(1-\frac1n\right)^{n-1}\operatorname{path}(D).
$$

现在我们分别对 $D$ 与 $\widehat{D}$ 应用命题 5.1。令 $B=D-J_n$、$\widehat{B}=\widehat{D}-J_{n+1}$。直接计算这些矩阵的分块，得

$$
\left\|\widehat{B}-\begin{pmatrix}0&0\\ 0&B\end{pmatrix}\right\|_F=O(n^{-1}).
$$

由于 $B$ 有有界的 Frobenius 范数、谱范数与 1 有正距离，$\widehat{B}$ 也如此。两个矩阵的迹也都等于 $-1$，因为 $D$ 与 $\widehat{D}$ 的对角元为零。因此我们可以应用命题 6.2 证明末尾所用的同样的行列式比较，它表明与 $B$ 及 $\widehat{B}$ 相关联的行列式因子只相差一个 $1+o(1)$ 因子。由命题 5.1，我们现在有

$$
\frac{\operatorname{cyc}\widehat{D}}{\operatorname{cyc}D}=(1+o(1))\frac{n!\cdot n^{n}}{(n+1)^{n+1}(n-1)!}=(1+o(1))\left(\frac{n}{n+1}\right)^{n+1}.
$$

由于 $(n/(n+1))^{n+1}$ 与 $(1-1/n)^{n-1}$ 当 $n\to\infty$ 时都趋于 $e^{-1}$，上式给出

$$
\operatorname{path}(D)=(1+o(1))n^{2}\operatorname{cyc}D.
$$

剩下只要撤销 $D$ 与 $Q$ 之间的 Sinkhorn 缩放。令 $s=\sum_{i=1}^{n}(x_i+y_i)$，如定理 1.3 的证明中那样。在缩放之下，$\operatorname{cyc}D$ 所计数的每条 Hamilton 圈都获得因子 $e^{s}$。另一方面，一条始于 $v_1$、终于 $v_n$ 的 Hamilton 路径获得的因子为 $e^{s-x_{v_n}-y_{v_1}}$。由于 $\|x\|_\infty+\|y\|_\infty=o(1)$，它对所有 Hamilton 路径一致地等于 $(1+o(1))e^{s}$。因此

$$
\operatorname{path}(Q)=(1+o(1))n^{2}\operatorname{cyc}Q.
$$

最后，利用 $A=(n/2)Q$，得

$$
P(R_n)=\left(\frac n2\right)^{n-1}\operatorname{path}(Q)=(2n+o(n))\left(\frac n2\right)^{n}\operatorname{cyc}Q=(2n+o(n))C(R_n).
$$

由定理 1.3 与 1.2，我们已知

$$
C(R_n)=\left(\frac{\cosh 1}{\cos 1}+o(1)\right)\frac{(n-1)!}{2^{n}},
$$

因此

$$
P(n)\ge P(R_n)=\left(\frac{\cosh 1}{\cos 1}+o(1)\right)\frac{n!}{2^{n-1}},
$$

定理证毕。$\square$

**致谢。** 我们感谢 Noga Alon 的许多有益讨论与评论。我们还要感谢 Jay Pantone，他用一个令人印象深刻的计算机程序从数值上猜测出 $C(n)$ 的首项常数可能是 $\cosh 1/\cos 1$，并把这一发现告诉了 Alon。

本项目最初是想在 $C(n)$ 的改进下界中实现这个常数；这个问题看起来很适合 AI 模型处理，因为它本质上只是计数显式竞赛图 $T_n$ 中的 Hamilton 圈。GPT-5.6 在作者提供的一些策略（相关的一条是建议努力寻找合适的永久式估计）之后找到了一个证明。令人意外的是，在输入这个证明和若干抱有希望的想法之后，另一个独立的 GPT-5.6 实例能够把其技术推广为匹配上界的论证。

本文的目的是对这一证明作出阐述，特别是解释新关键思想的高层策略与直觉。许多论证最终被作者替换或简化，另一些则原本来自文献。本文的内容由作者撰写。

## 参考文献

1. Ilan Adler, Noga Alon, and Sheldon M. Ross, *On the maximum number of Hamiltonian paths in tournaments*, Random Structures Algorithms **18** (2001), no. 3, 291–296. MR 1824278
2. Noga Alon, *The maximum number of Hamiltonian paths in tournaments*, Combinatorica **10** (1990), no. 4, 319–324. MR 1099246
3. Noga Alon and Joel H. Spencer, *The probabilistic method*, fourth ed., Wiley Series in Discrete Mathematics and Optimization, John Wiley & Sons, Inc., Hoboken, NJ, 2016. MR 3524748
4. Jack P. Bartley, *Topics in extremal and probabilistic combinatorics*, PhD thesis, Queen Mary University of London (2018).
5. Alexander Barvinok, *Enumerating contingency tables via random permanents*, Combin. Probab. Comput. **17** (2008), no. 1, 1–19. MR 2376421
6. Lowell W. Beineke and Frank Harary, *The maximum number of strongly connected subtournaments*, Canad. Math. Bull. **8** (1965), 491–498. MR 181581
7. L. M. Brègman, *Certain properties of nonnegative matrices and their permanents*, Dokl. Akad. Nauk SSSR **211** (1973), 27–30. MR 327788
8. Hao Chen, Felix Christian Clemen, and Jonathan A. Noel, *On tournament anti-sidorenko orientations of trees*, 2026.
9. Umberto Colombo, *Sui circuiti nei grafi completi*, Boll. Un. Mat. Ital. (3) **19** (1964), 153–170. MR 172262
10. Bill Cuckler, *Hamiltonian cycles in regular tournaments*, Combin. Probab. Comput. **16** (2007), no. 2, 239–249. MR 2298811
11. Alan N. Day, *A collection of problems in extremal combinatorics*, Ph.D. thesis, 2017.
12. G. P. Egorychev, *Proof of the van der Waerden conjecture for permanents*, Sibirsk. Mat. Zh. **22** (1981), no. 6, 65–71, 225. MR 638007
13. Paul Erdős and Joel Spencer, *Probabilistic methods in combinatorics*, Probability and Mathematical Statistics, vol. 17, Academic Press [Harcourt Brace Jovanovich, Publishers], New York–London, 1974. MR 382007
14. D. I. Falikman, *Proof of the van der Waerden conjecture on the permanent of a doubly stochastic matrix*, Mat. Zametki **29** (1981), no. 6, 931–938, 957. MR 625097
15. Yijia Fang and Hao Huang, *Maximizing directed cycles in tournaments*, 2026.
16. Asaf Ferber, Michael Krivelevich, and Benny Sudakov, *Counting and packing Hamilton cycles in dense graphs and oriented graphs*, J. Combin. Theory Ser. B **122** (2017), 196–220. MR 3575203
17. Jacob Fox, Zoe Himwich, Nitya Mani, and Yunkun Zhou, *Variations on Sidorenko's conjecture in tournaments*, J. Graph Theory, to appear.
18. ——, *A note on directed analogues of the Sidorenko and forcing conjectures*, Electron. J. Combin. **32** (2025), no. 3, Paper No. 3.38, 14. MR 4958048
19. Ehud Friedgut and Jeff Kahn, *On the number of Hamiltonian cycles in a tournament*, Combin. Probab. Comput. **14** (2005), no. 5-6, 769–781. MR 2174655
20. Ankit Garg, Leonid Gurvits, Rafael Oliveira, and Avi Wigderson, *Operator scaling: theory and applications*, Found. Comput. Math. **20** (2020), no. 2, 223–290. MR 4081171
21. Andrzej Grzesik, Daniel Král', László M. Lovász, and Jan Volec, *Cycles of a given length in tournaments*, J. Combin. Theory Ser. B **158** (2023), 117–145. MR 4513820
22. Leonid Gurvits, *Van der Waerden/Schrijver-Valiant like conjectures and stable (aka hyperbolic) homogeneous polynomials: one theorem for all*, Electron. J. Combin. **15** (2008), no. 1, Research Paper 66, 26, With a corrigendum. MR 2411443
23. Xiaoyu He, Nitya Mani, Jiaxi Nie, Nathan Tung, and Fan Wei, *New Sidorenko-type inequalities in tournaments*, 2025.
24. Roger A. Horn and Charles R. Johnson, *Topics in matrix analysis*, Cambridge University Press, Cambridge, 1994, Corrected reprint of the 1991 original. MR 1288752
25. M. G. Kendall and B. Babington Smith, *On the method of paired comparisons*, Biometrika **31** (1940), 324–345. MR 2761
26. Natasha Komarov and John Mackey, *On the number of 5-cycles in a tournament*, J. Graph Theory **86** (2017), no. 3, 341–356. MR 3697928
27. Tsz Chiu Kwok, Lap Chi Lau, Yin Tat Lee, and Akshay Ramachandran, *The Paulsen problem, continuous operator scaling, and smoothed analysis*, STOC'18—Proceedings of the 50th Annual ACM SIGACT Symposium on Theory of Computing, ACM, New York, 2018, pp. 182–189. MR 3826245
28. C. J. Liu, *Enumeration of Hamiltonian cycles and paths in a graph*, Proc. Amer. Math. Soc. **111** (1991), no. 1, 289–296. MR 1028288
29. Peter McCullagh, *An asymptotic approximation for the permanent of a doubly stochastic matrix*, J. Stat. Comput. Simul. **84** (2014), no. 2, 404–414. MR 3169336
30. Georg Pick, *Über die Wurzeln der charakteristischen Gleichungen von Schwingungsproblemen*, ZAMM - Journal of Applied Mathematics and Mechanics / Zeitschrift für Angewandte Mathematik und Mechanik **2** (1922), no. 5, 353–357.
31. Ashwin Sah, Mehtaab Sawhney, and Yufei Zhao, *Paths of given length in tournaments*, Comb. Theory **3** (2023), no. 2, Paper No. 5, 6. MR 4646086
32. S. V. Savchenko, *On 5-cycles and 6-cycles in regular n-tournaments*, J. Graph Theory **83** (2016), no. 1, 44–77. MR 3529947
33. Hamilton Sawczuk and Edinah Gnang, *Two proofs of the Hamiltonian cycle identity*, 2025.
34. Joel Spencer, *Ten lectures on the probabilistic method*, second ed., CBMS-NSF Regional Conference Series in Applied Mathematics, vol. 64, Society for Industrial and Applied Mathematics (SIAM), Philadelphia, PA, 1994. MR 1249485
35. Tibor Szele, *Kombinatorische Untersuchungen über den gerichteten vollständigen Graphen*, Mat. Fiz. Lapok **50** (1943), 223–256.
36. Carsten Thomassen, *Hamilton circuits in regular tournaments*, Cycles in graphs (Burnaby, B.C., 1982), North-Holland Math. Stud., vol. 115, North-Holland, Amsterdam, 1985, pp. 159–162. MR 821514
37. N. C. Wormald, *Tournaments with many Hamilton cycles*, 2006.
38. Yufei Zhao and Yunkun Zhou, *Impartial digraphs*, Combinatorica **40** (2020), no. 6, 875–896. MR 4208101

Program in Applied and Computational Mathematics, Princeton University
电子邮箱：adivoux@princeton.edu

Department of Mathematics, KTH Royal Institute of Technology
电子邮箱：shoudawang@princeton.edu
