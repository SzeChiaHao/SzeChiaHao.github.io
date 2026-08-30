---
title: "欧拉定理、费马小定理与威尔逊定理"
description: "一篇长证明：从剩余系出发完整证明三个经典数论定理，并以 RSA 收尾"
date: 2026-08-22
tags: ["数论", "代数"]
---

初等数论里有三个绕不开的经典结论：**欧拉定理**、**费马小定理**和**威尔逊定理**。它们看似独立，实则同根同源——都从"模 $n$ 的剩余系"这个简单对象出发。本文给出这三个定理的完整证明，最后展示它们如何支撑起现代密码学里的 RSA 算法。

## 预备：同余与剩余系

**定义（同余）** 设 $n$ 为正整数，$a,b$ 为整数。若 $n\mid (a-b)$，则称 $a$ 与 $b$ 模 $n$ 同余，记作

$$
a \equiv b \pmod n.
$$

同余关系是等价关系，且与加法和乘法相容：若 $a\equiv b$ 且 $c\equiv d \pmod n$，则

$$
a+c \equiv b+d \pmod n, \qquad ac \equiv bd \pmod n.
$$

**定义（完全剩余系）** 若一组整数 $a_1,\dots,a_n$ 两两模 $n$ 不同余，则称它们构成模 $n$ 的一个**完全剩余系**。等价地，每个整数恰与其中一个同余。标准选取是 $\{0,1,\dots,n-1\}$。

**定义（简化剩余系）** 与 $n$ 互素的那些剩余类构成模 $n$ 的**简化剩余系**。例如模 $12$ 的简化剩余系是

$$
\{1,5,7,11\}.
$$

## 欧拉函数

**定义** 欧拉函数 $\varphi(n)$ 表示 $1$ 到 $n$ 中与 $n$ 互素的整数个数：

$$
\varphi(n) = \#\bigl\{ a : 1 \le a \le n,\ \gcd(a,n)=1 \bigr\}.
$$

于是模 $n$ 的简化剩余系恰好含有 $\varphi(n)$ 个元素。

**例** 若 $p$ 是素数，则 $1,2,\dots,p-1$ 都与 $p$ 互素，故

$$
\varphi(p) = p-1.
$$

若 $n=p^k$（$p$ 素数），则 $1$ 到 $p^k$ 中与 $p$ 不互素的恰是 $p$ 的倍数，共 $p^{k-1}$ 个，于是

$$
\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1).
$$

**积性** 若 $\gcd(m,n)=1$，则 $\varphi(mn)=\varphi(m)\varphi(n)$。由此可推出显式公式

$$
\varphi(n) = n \prod_{p\mid n}\left(1-\frac{1}{p}\right),
$$

其中乘积遍历 $n$ 的所有不同素因子。

### 积性的证明

考虑映射

$$
f : \mathbb{Z}/mn\mathbb{Z} \longrightarrow \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}, \qquad x \mapsto (x \bmod m,\ x \bmod n).
$$

由中国剩余定理，$f$ 是双射。且 $\gcd(x,mn)=1$ 当且仅当 $\gcd(x,m)=\gcd(x,n)=1$。因此 $f$ 把模 $mn$ 的简化剩余系一一对应到模 $m$ 与模 $n$ 的简化剩余系之直积，两边元素个数分别为 $\varphi(mn)$ 与 $\varphi(m)\varphi(n)$，故 $\varphi(mn)=\varphi(m)\varphi(n)$。

## 欧拉定理

**定理（欧拉）** 若 $\gcd(a,n)=1$，则

$$
a^{\varphi(n)} \equiv 1 \pmod n.
$$

### 证明

设 $r_1,r_2,\dots,r_{\varphi(n)}$ 是模 $n$ 的一个简化剩余系。由于 $\gcd(a,n)=1$，乘以 $a$ 之后所得集合

$$
\{ a r_1, a r_2, \dots, a r_{\varphi(n)} \}
$$

仍然是模 $n$ 的简化剩余系（因为若 $ar_i \equiv ar_j$，约去与 $n$ 互素的 $a$ 得 $r_i\equiv r_j$，故 $i=j$；且 $\gcd(ar_i,n)=1$）。

于是两个集合整体同余，取乘积得

$$
\prod_{i=1}^{\varphi(n)} (a r_i) \equiv \prod_{i=1}^{\varphi(n)} r_i \pmod n,
$$

即

$$
a^{\varphi(n)} \prod_{i=1}^{\varphi(n)} r_i \equiv \prod_{i=1}^{\varphi(n)} r_i \pmod n.
$$

因为每个 $r_i$ 都与 $n$ 互素，乘积 $\prod r_i$ 也与 $n$ 互素，故可约去，得到

$$
a^{\varphi(n)} \equiv 1 \pmod n. \quad \square
$$

## 费马小定理

**定理（费马）** 设 $p$ 为素数。若 $p\nmid a$，则

$$
a^{p-1} \equiv 1 \pmod p.
$$

等价地，对任意整数 $a$ 都有

$$
a^{p} \equiv a \pmod p.
$$

### 证明

由于 $\varphi(p)=p-1$，欧拉定理直接给出 $a^{p-1}\equiv 1 \pmod p$。两边同乘 $a$ 即得第二式；当 $p\mid a$ 时第二式显然成立（两边都为 $0$）。$\square$

### 计算示例

求 $3^{100}$ 模 $7$ 的余数。因 $3^6\equiv 1\pmod 7$，且 $100=6\cdot 16+4$，于是

$$
3^{100} = 3^{6\cdot 16 + 4} = (3^6)^{16}\cdot 3^4 \equiv 3^4 \equiv 81 \equiv 4 \pmod 7.
$$

费马小定理的一个典型应用是求逆元：当 $p\nmid a$ 时，

$$
a^{-1} \equiv a^{p-2} \pmod p.
$$

## 威尔逊定理

**定理（威尔逊）** 正整数 $n>1$ 是素数当且仅当

$$
(n-1)! \equiv -1 \pmod n.
$$

### 素数的情形

设 $p$ 为素数。在模 $p$ 的简化剩余系 $\{1,2,\dots,p-1\}$ 中，每个元素都有唯一的乘法逆元。一个元素与自己互逆，当且仅当

$$
x^2 \equiv 1 \pmod p \iff (x-1)(x+1)\equiv 0 \pmod p \iff x\equiv \pm 1 \pmod p.
$$

因此只有 $1$ 和 $p-1$（即 $-1$）的逆元是自身。剩下的 $p-3$ 个元素可以两两配对成互逆的对，每对乘积为 $1$。于是

$$
(p-1)! \equiv 1 \cdot (p-1) \cdot \prod_{\text{各对}} 1 \equiv p-1 \equiv -1 \pmod p.
$$

$\square$

### 逆命题

设 $(n-1)!\equiv -1\pmod n$。若 $n$ 是合数，先看 $n=4$：$3!=6\equiv 2\not\equiv -1\pmod 4$，不满足。若 $n>4$ 是合数，则 $n$ 有真因子 $d$ 满足 $2\le d\le n/2<n$，于是 $d$ 出现在 $(n-1)!=1\cdot 2\cdots(n-1)$ 的因子中，故 $d\mid (n-1)!$。另一方面由假设 $n\mid (n-1)!+1$，故 $d\mid (n-1)!+1$，从而 $d\mid 1$，矛盾。所以 $n$ 必为素数。$\square$

> 注：威尔逊定理给出了素数的"判别式"，但计算 $(n-1)!$ 极其昂贵，故并无实际用途。它的价值在于理论。

## 应用：RSA 公钥加密

RSA 是现代公钥密码的鼻祖，它正是欧拉定理与费马小定理的直接应用。

### 密钥生成

1. 选取两个大素数 $p,q$，令 $n=pq$，则 $\varphi(n)=(p-1)(q-1)$。
2. 选取 $e$ 满足 $\gcd(e,\varphi(n))=1$（常见取 $e=65537$）。
3. 求 $e$ 模 $\varphi(n)$ 的逆元 $d$，即 $ed\equiv 1\pmod{\varphi(n)}$。

公开 $(n,e)$ 作为**公钥**，保留 $d$ 作为**私钥**。

### 加密与解密

把明文编码成整数 $m$（$0\le m<n$）。加密与解密分别是

$$
c \equiv m^{e} \pmod n, \qquad m \equiv c^{d} \pmod n.
$$

### 正确性证明

因为 $ed\equiv 1\pmod{\varphi(n)}$，可设 $ed=1+k\varphi(n)$。需证 $m^{ed}\equiv m\pmod n$。

**情形一**：$\gcd(m,n)=1$。由欧拉定理 $m^{\varphi(n)}\equiv 1\pmod n$，故

$$
m^{ed} = m^{1+k\varphi(n)} = m \cdot \bigl(m^{\varphi(n)}\bigr)^{k} \equiv m \pmod n.
$$

**情形二**：$\gcd(m,n)\neq 1$。不妨设 $p\mid m$（$q\nmid m$ 的情形同理）。对模 $p$ 显然 $m^{ed}\equiv 0\equiv m\pmod p$；对模 $q$，因 $q\nmid m$，由费马小定理 $m^{q-1}\equiv 1\pmod q$，而 $\varphi(n)=(p-1)(q-1)$，故

$$
m^{ed} = m^{1+k(p-1)(q-1)} \equiv m \cdot (m^{q-1})^{k(p-1)} \equiv m \pmod q.
$$

于是 $m^{ed}\equiv m$ 同时模 $p$ 和模 $q$ 成立，由中国剩余定理得 $m^{ed}\equiv m\pmod{pq=n}$。$\square$

**例** 取 $p=3,q=11$，则 $n=33$，$\varphi(n)=20$。取 $e=3$，其逆元 $d=7$（因为 $3\cdot 7=21\equiv 1\pmod{20}$）。对明文 $m=4$：

$$
c \equiv 4^{3} \equiv 64 \equiv 31 \pmod{33},
$$

解密：

$$
c^{d} \equiv 31^{7} \equiv 4 \pmod{33},
$$

回到明文 $4$。

## 小结

本文证明了三个定理，它们的关系可以概括为一条链：

$$
\text{费马小定理} \;\subset\; \text{欧拉定理} \;\subset\; \text{群论中的拉格朗日定理}.
$$

费马小定理是欧拉定理在 $n=p$ 时的特例；欧拉定理本质上是"有限群的阶整除性"这一事实在模 $n$ 乘法群 $(\mathbb{Z}/n\mathbb{Z})^{\times}$ 上的体现。威尔逊定理则刻画了模 $p$ 乘法群中元素的配对结构。三者共同说明了一个朴素却深刻的观点：**模运算的结构，掌握着整数的许多秘密。**
