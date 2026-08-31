import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// 自定义 rehype 插件：给 KaTeX 公式打上 data-pagefind-ignore，
// 让 Pagefind 建索引时跳过公式（LaTeX 源码不进入搜索索引，也不污染摘要）。
function rehypeIgnoreKatex() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && node.properties) {
        const cls = node.properties.className;
        const clsStr = Array.isArray(cls) ? cls.join(' ') : String(cls ?? '');
        if (clsStr.includes('katex')) {
          node.properties['data-pagefind-ignore'] = '';
        }
      }
      if (node.children) node.children.forEach(visit);
    };
    visit(tree);
  };
}

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
      rehypePlugins: [rehypeKatex, rehypeIgnoreKatex],
    }),
  },
});
