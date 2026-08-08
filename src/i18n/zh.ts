// English UI dictionary — the reference translation.
//
// **Scope: UI chrome only.** Navigation, pagination, section labels, button and
// link labels, aria labels, generated strings, and the theme-owned 404 page.
// Placeholder prose on the home and about pages is *not* here: it lives in the
// `.astro` files, where you would edit it anyway. Keeping the split means a new
// locale is ~60 short strings rather than a rewrite of the demo copy.
//
// This file also defines the *shape* every other dictionary must match, so add
// a key here first, then to each locale under `src/i18n/`. Keys are flat and
// dotted; `{name}` placeholders are filled in by `t()`.
//
// Two values carry inline `<code>` markup and are rendered with `set:html`.
// They are theme-authored, never user input.
//
// Note: values are deliberately *not* `as const` — widening them to `string`
// is what lets other locales satisfy `UIStrings`.

export const zh = {
  // 页眉、页脚及其他界面外框元素
  'nav.home': '主页',
  'nav.about': '关于',
  'nav.works': '作品',
  'nav.blog': '博客',
  'nav.search': '搜索',
  'nav.label': 'Main navigation',
  'nav.brandHome': '{site}主页',
  'theme.toggle': '切换颜色主题',
  'footer.notes': '札记',
  'social.label': '社交链接',

  // 分页
  'pagination.label': '分页',
  'pagination.newer': '← 更新',
  'pagination.older': '更旧 →',
  'pagination.status': '第{current}页，共{total}页',

  // 首页 — 仅标签与链接；页面自身文案在 index.astro 中
  'home.primaryLinks': '主要链接',
  'home.viewWorks': '查看作品',
  'home.readNotes': '阅读札记',
  'home.overviewLabel': '主题概览',
  'home.latestWorksEyebrow': '最新作品',
  'home.allWorks': '全部作品',
  'home.workTech': '{title}技术栈',
  'home.worksEmpty':
    '在<code>src/content/works</code>下添加作品即可在此展示最新项目。',
  'home.latestBlogEyebrow': '最新博客',
  'home.allPosts': '全部文章',
  'home.postsEmpty':
    '在<code>src/content/blog</code>下添加博客文章即可在此展示最新笔记。',

  // Blog index
  'blog.title': '博客',
  'blog.titlePaged': '博客 · 第 {page} 页',
  'blog.eyebrow': '博客',
  'blog.listLabel': '博客文章',
  'blog.tagsEyebrow': '标签',
  'blog.tagsNavLabel': '博客标签',

  // 标签归档 —— 这里的每个字符串均由标签生成，因此即使读起来像页面文案，
  // 它们仍会保留在词典中。
  'tag.title': '「{tag}」标签下的文章',
  'tag.titlePaged': '「{tag}」标签下的文章 · 第 {page} 页',
  'tag.description': '{site} 上标记为 {tag} 的博客文章。',
  'tag.eyebrow': '标签',
  'tag.lead': '收录在「{tag}」标签下的笔记。',
  'tag.listLabel': '{tag} 文章',
  'tag.moreTagsEyebrow': '更多标签',
  'tag.otherTagsNavLabel': '其他博客标签',
  'tag.allPosts': '全部文章',

  // 博文
  'post.eyebrow': '博客',
  'post.readingTime': '{minutes} 分钟阅读',
  'post.tocLabel': '目录',
  'post.contentsEyebrow': '目录',
  'post.adjacentLabel': '相邻文章',
  'post.previous': '上一篇',
  'post.next': '下一篇',
  'post.relatedEyebrow': '相关文章',
  'post.breadcrumbHome': '首页',
  'post.breadcrumbBlog': '博客',

  // 评论（仅在 GISCUS.enabled 为真时显示）
  'comments.eyebrow': '评论',
  // `{link}` 是一个完整的 `<a>` 标签元素，在 `Comments.astro` 中构建——
  // 译文决定了它在句子中的位置，因此无需将 URL 插入到
  // 翻译词条的字符串中。
  'comments.failed': '评论加载失败，请在 {link} 查看讨论串。',
  'comments.failedLink': 'GitHub讨论 ↗',
  'comments.noscript': '评论需要 JavaScript。评论由 GitHub Discussions 托管。',

  // 作品
  'works.title': '作品',
  'works.eyebrow': '作品',
  'works.listLabel': '精选作品',
  'work.eyebrow': '作品',
  'work.visit': '访问项目',
  'work.repository': '查看仓库',
  'work.stackEyebrow': '技术栈',

  // 关于 —— 仅限分区标签；传记正文内容位于 about/index.astro 中。
  'about.title': '关于',
  'about.eyebrow': '关于',
  'about.ledgerLabel': '经历概要',

  // 搜索
  'search.title': '搜索',
  'search.eyebrow': '搜索',
  'search.sectionLabel': '站内搜索',
  'search.fallback':
    '搜索索引在构建时生成。运行 <code>npm run build</code> 并预览站点即可试用——开发服务器上不可用。',

  // 404 —— 这是由主题提供的页面，因此其文案应在此处设置。
  'notFound.title': '页面未找到',
  'notFound.description': '您访问的页面不存在。',
  'notFound.eyebrow': '404 — 未找到',
  'notFound.heading': '这个页面偏离了航线。',
  'notFound.lead':
    '该地址可能已变更，或从未存在。下方的龙骨线将引你回到平稳的水域。',
  'notFound.linksLabel': '找回链接',
  'notFound.home': '返回首页',
  'notFound.blog': '阅读博客',
  'notFound.works': '浏览作品',
};

/** The shape every dictionary must implement. */
export type UIStrings = typeof zh;

/** Every valid translation key. */
export type UIKey = keyof UIStrings;
