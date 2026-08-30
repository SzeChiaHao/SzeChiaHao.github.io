// ===== 站点信息：改这里 =====
export const SITE_TITLE = "Sze's Math Blog";
export const SITE_DESCRIPTION = '记录数学与生活';
export const AUTHOR = '史家豪SzeChiaHao';

// ===== 栏目（顶部导航的分类）：改这里 =====
// 文章 frontmatter 的 tags 里含有某个栏目名，就会自动归到该栏目。
// 增删栏目：直接增删这个数组里的字符串即可，导航和栏目页会自动更新。
export const CATEGORIES = ['代数', '分析', '几何', '数论', '组合', '初等'];

// ===== 评论系统：Giscus（可选，留空则不显示评论）=====
// 到 https://giscus.app 按提示填写，会得到下面四个值。
// 前提：GitHub 公开仓库 + 已启用 Discussions + 已安装 giscus app。
export const GISCUS = {
  repo: 'SzeChiaHao/SzeChiaHao.github.io',
  repoId: 'R_kgDOUIrv9w',
  category: 'Announcements',
  categoryId: 'DIC_kwDOUIrv984DEgL4',
};
