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

export const en = {
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
  'blog.title': 'Blog',
  'blog.titlePaged': 'Blog · Page {page}',
  'blog.eyebrow': 'Blog',
  'blog.listLabel': 'Blog posts',
  'blog.tagsEyebrow': 'Tags',
  'blog.tagsNavLabel': 'Blog tags',

  // Tag archive — every string here is generated from the tag, so it stays
  // in the dictionary even though it reads like page copy.
  'tag.title': 'Posts tagged “{tag}”',
  'tag.titlePaged': 'Posts tagged “{tag}” · Page {page}',
  'tag.description': 'Blog posts tagged {tag} on {site}.',
  'tag.eyebrow': 'Tag',
  'tag.lead': 'Notes collected under the {tag} tag.',
  'tag.listLabel': '{tag} posts',
  'tag.moreTagsEyebrow': 'More tags',
  'tag.otherTagsNavLabel': 'Other blog tags',
  'tag.allPosts': 'All posts',

  // Blog post
  'post.eyebrow': 'Blog',
  'post.readingTime': '{minutes} min read',
  'post.tocLabel': 'Table of contents',
  'post.contentsEyebrow': 'Contents',
  'post.adjacentLabel': 'Adjacent posts',
  'post.previous': 'Previous',
  'post.next': 'Next',
  'post.relatedEyebrow': 'Related',
  'post.breadcrumbHome': 'Home',
  'post.breadcrumbBlog': 'Blog',

  // Comments (rendered only when GISCUS.enabled)
  'comments.eyebrow': 'Comments',
  // `{link}` is a whole anchor element, built in Comments.astro — a translation
  // decides where in the sentence it lands, and the URL never has to be
  // interpolated into the dictionary value.
  'comments.failed': 'Comments could not be loaded. Read the thread on {link}.',
  'comments.failedLink': 'GitHub Discussions ↗',
  'comments.noscript': 'Comments require JavaScript. They are hosted on GitHub Discussions.',

  // Works
  'works.title': 'Works',
  'works.eyebrow': 'Works',
  'works.listLabel': 'Selected works',
  'work.eyebrow': 'Work',
  'work.visit': 'Visit project',
  'work.repository': 'View repository',
  'work.stackEyebrow': 'Stack',

  // About — section labels only; the biography copy lives in about/index.astro
  'about.title': 'About',
  'about.eyebrow': 'About',
  'about.ledgerLabel': 'Experience summary',

  // Search
  'search.title': 'Search',
  'search.eyebrow': 'Search',
  'search.sectionLabel': 'Site search',
  'search.fallback':
    'The search index is generated at build time. Run <code>npm run build</code> and preview the site to try it — it is not available on the dev server.',

  // 404 — a theme-owned page, so its copy belongs here
  'notFound.title': 'Page not found',
  'notFound.description': 'The page you were looking for does not exist.',
  'notFound.eyebrow': '404 — Not found',
  'notFound.heading': 'This page drifted off course.',
  'notFound.lead':
    'The address may have moved, or it never existed. The keel lines below lead back to steady water.',
  'notFound.linksLabel': 'Recovery links',
  'notFound.home': 'Back home',
  'notFound.blog': 'Read the blog',
  'notFound.works': 'Browse works',
};

/** The shape every dictionary must implement. */
export type UIStrings = typeof en;

/** Every valid translation key. */
export type UIKey = keyof UIStrings;
