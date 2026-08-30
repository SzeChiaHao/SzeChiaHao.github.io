import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 文章集合：Markdown 文件放在 src/content/posts/ 下
const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().optional(), // 不填则用 consts.ts 里的 AUTHOR
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
