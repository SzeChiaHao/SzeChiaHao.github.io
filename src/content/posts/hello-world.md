---
title: "你好，世界"
description: "第一篇测试文章，验证 Markdown 与公式渲染"
date: 2026-08-30
tags: ["随笔"]
---

欢迎来到我的数学博客。这篇文章用来测试 Markdown 与数学公式的渲染。

## 行内公式

欧拉公式 $e^{i\pi} + 1 = 0$ 被称为最美的公式。

质数有无穷多个：给定任意有限个质数 $p_1,\dots,p_n$，考虑 $N = p_1 p_2 \cdots p_n + 1$，则 $N$ 的任意质因子都不在前面的列表里。

## 块级公式

勾股定理：

$$
a^2 + b^2 = c^2
$$

二次方程 $ax^2+bx+c=0$ 的求根公式：

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

矩阵：

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$

巴塞尔问题：

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## 代码块

```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a
```
