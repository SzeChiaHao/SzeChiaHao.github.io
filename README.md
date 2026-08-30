# math-blog

一个基于 **Astro 7 + KaTeX** 的数学博客骨架。公式在构建期就被预渲染成静态 HTML（`remark-math` 解析 `$...$` / `$$...$$`，`rehype-katex` 渲染），所以页面秒开、无需前端 JS、搜索引擎也能收录公式内容。

## 快速开始

```bash
npm install        # 首次安装依赖（已配置 npmmirror 镜像）
npm run dev        # 本地预览，浏览器打开 http://localhost:4321
npm run build      # 生成静态站点到 dist/
npm run preview    # 本地预览构建产物
```

## 写文章

1. 在 `src/content/posts/` 下新建一个 `.md` 文件（文件名用英文，会成为网址）。
2. 顶部 frontmatter 照抄这个格式：

```yaml
---
title: "文章标题"
description: "一句话简介（可选）"
date: 2026-08-30
tags: ["分析", "微积分"]
---
```

3. 正文用 Markdown 写，公式照常写：
   - 行内公式：`$e^{i\pi}+1=0$`（`$` 紧跟内容，不要空格）
   - 块级公式：**`$$` 必须单独占一行**，像代码围栏那样：

```
$$
\int_a^b f(x)\,dx
$$
```

> ⚠️ 注意：`$$ 公式 $$` 写在同一行会被当成**行内公式**（不居中、不换行）。
> 这是 remark-math 的语法约定，块级公式务必让 `$$` 各自成行。

## 需要改的地方

- `src/consts.ts`：站点标题、简介、作者名；以及 Giscus 评论配置。
- `astro.config.mjs`：`site` 改成你的真实域名。

## 评论系统（Giscus）

评论用 [Giscus](https://giscus.app/)（基于 GitHub Discussions，免费、无需服务器）。启用步骤：

1. 准备一个 **公开** 的 GitHub 仓库，并开启 Settings → Features 里的 Discussions。
2. 到 <https://github.com/apps/giscus> 给该仓库安装 giscus app。
3. 打开 <https://giscus.app>，填入仓库名，页面会生成四个值：`repo`、`repoId`、`category`、`categoryId`。
4. 把这四个值填进 `src/consts.ts` 的 `GISCUS` 对象即可。

> 未配置时，文章底部会显示一行「评论功能未配置」的占位提示，不影响其它功能。

## 文章元信息与目录

每篇文章会自动显示：作者（`frontmatter` 里的 `author`，缺省用 `consts.ts` 的 `AUTHOR`）、发布时间、预计阅读时长、标签；并依据文章里的 `##`/`###` 标题自动生成顶部目录（TOC）。

## 部署

- **GitHub Pages / Vercel / Netlify / Cloudflare Pages** 都支持：把仓库推上去，选 Astro 模板即可自动构建（构建命令 `npm run build`，输出目录 `dist`）。
- 部署前记得把 `astro.config.mjs` 里的 `site` 改成真实域名。

## 目录结构

```
src/
├── consts.ts               # 站点信息
├── content.config.ts       # 文章集合定义（frontmatter 校验）
├── content/posts/          # 你的文章（Markdown）
├── layouts/                # 页面布局
├── pages/                  # 路由（首页 + 文章页）
└── styles/global.css       # 全局样式 + 明暗主题
```

## 已有功能清单

- 数学公式渲染（KaTeX，构建期预渲染）
- 明暗主题切换 + 响应式
- RSS 订阅（`/rss.xml`）
- 文章顶部目录 TOC、作者/时间/阅读时长/标签元信息
- 「关于」页（`src/pages/about.md`，内容自己写）
- 评论系统（Giscus，需配置）

## 常用下一步（可选）

- 加标签页 / 归档页：新建 `src/pages/tags/...` 之类路由。
- 数学宏（自定义命令）：在 `astro.config.mjs` 里给 `rehypeKatex` 传 `macros` 选项。
- 全文搜索、分页等。
