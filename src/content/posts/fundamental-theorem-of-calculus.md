---
title: "微积分基本定理"
description: "一个展示多种公式排版的示例"
date: 2026-08-25
tags: ["分析", "微积分"]
---

微积分基本定理把微分与积分这两个核心概念联系起来：求导与求积分互为逆运算。

## 定理

设 $f$ 在 $[a,b]$ 上连续，定义

$$
F(x) = \int_a^x f(t)\,dt,
$$

则 $F$ 在 $[a,b]$ 上可导，且 $F'(x) = f(x)$。

## 证明概要

$$
\frac{F(x+h) - F(x)}{h} = \frac{1}{h}\int_x^{x+h} f(t)\,dt \to f(x) \qquad (h \to 0).
$$

## 换元与分部积分

$$
\int u\,dv = uv - \int v\,du
$$

$$
\int_a^b f(g(x))\,g'(x)\,dx = \int_{g(a)}^{g(b)} f(u)\,du
$$

## 多行对齐

$$
\begin{aligned}
\int_0^1 x^2\,dx &= \left[ \frac{x^3}{3} \right]_0^1 \\
&= \frac{1}{3} - 0 \\
&= \frac{1}{3}.
\end{aligned}
$$

## 分段函数

$$
f(x) = \begin{cases} x^2, & x \ge 0, \\ -x^2, & x < 0. \end{cases}
$$

## 极限与级数

$$
\lim_{n\to\infty} \left(1 + \frac{1}{n}\right)^n = e, \qquad \sum_{n=0}^{\infty} \frac{x^n}{n!} = e^x.
$$
