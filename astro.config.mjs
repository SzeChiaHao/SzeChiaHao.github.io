import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // 你的真实站点地址（用于 RSS、SEO 等）
  site: 'https://szechiahao.github.io',
  // 关闭开发模式下的 Astro Dev Toolbar（审计等能力由 agent 代劳）
  devToolbar: { enabled: false },
  markdown: {
    // Astro 7 默认使用 Sätteri 处理器；这里显式切回 remark/rehype 管线，
    // 以便用 remark-math + rehype-katex 在构建期把 $...$ / $$...$$ 预渲染成公式。
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
