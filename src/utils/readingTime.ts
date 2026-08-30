// 估算文章阅读时长（分钟）
export function readingTime(markdown: string): string {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ') // 代码块
    .replace(/`[^`]*`/g, ' ') // 行内代码
    .replace(/\$\$[\s\S]*?\$\$/g, ' ') // 块级公式
    .replace(/\$[^$\n]*\$/g, ' ') // 行内公式
    .replace(/[^\p{L}\p{N}]/gu, ''); // 只保留字母和数字

  const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length; // 中文字数
  const other = text.length - cjk; // 其余字符数（英文/数字）

  // 中文约 400 字/分钟，英文约 200 词/分钟（≈1000 字符/分钟）
  const minutes = Math.max(1, Math.ceil(cjk / 400 + other / 1000));
  return `${minutes} 分钟`;
}
