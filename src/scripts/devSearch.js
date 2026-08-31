// 开发模式下的降级搜索。
// 生产环境（build / 线上）使用 Pagefind 索引；开发模式（astro dev）没有
// 构建产物里的 Pagefind 索引，所以这里用 import.meta.glob 在客户端收集
// 所有文章的原始 Markdown，做简单的「包含匹配」搜索，保证 dev 下也能搜。
//
// 注意：本模块只在 import.meta.env.DEV 为真时才被动态 import，
// 因此生产构建不会把它打包进产物。

const postsRaw = import.meta.glob('/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function parse(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { title: '(无标题)', body: raw };
  const fm = m[1];
  const titleMatch = fm.match(/^title:\s*["']?([^"'\n]+)/m);
  return {
    title: titleMatch ? titleMatch[1].trim() : '(无标题)',
    body: m[2] || '',
  };
}

export function devSearch(query) {
  const q = String(query || '').toLowerCase();
  const results = [];
  for (const [path, raw] of Object.entries(postsRaw)) {
    const { title, body } = parse(raw);
    if (title.toLowerCase().includes(q) || body.toLowerCase().includes(q)) {
      const slug = path.split('/').pop().replace(/\.md$/, '');
      results.push({ url: '/posts/' + slug + '/', title, excerpt: '' });
    }
  }
  return results;
}
