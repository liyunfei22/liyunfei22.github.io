---
title: 博客上线啦
pubDatetime: 2026-09-24T11:00:00+08:00
description: 第一篇文章：这个博客怎么搭的、怎么写新文章
tags: [随笔]
---

博客开张，记录技术与生活。

这套博客用 [Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper) 主题搭建，托管在 GitHub Pages 上，push 即自动发布。

## 怎么写一篇新文章

在 `src/content/posts/` 下新建一个 `.md` 文件，开头写好 frontmatter 即可：

```markdown
---
title: 文章标题
pubDatetime: 2026-09-24T12:00:00+08:00
description: 一句话摘要（会显示在列表和 SEO 里）
tags: [技术, 随笔]
draft: true   # 可选：true 表示草稿，不会发布
---

正文用 Markdown 随便写……
```

写完 `git push`，GitHub Actions 会自动构建并发布，一两分钟后线上就能看到。

## 本地预览

```bash
pnpm dev     # 启动本地开发服务器，边写边看
```

## 支持的写作特性

- 代码高亮（明暗双主题）：见 [写作指南](/posts/writing-guide/) 那篇示例
- 标注块（Callout）提示框
- 自动目录、归档页、标签页、全文搜索（Pagefind）
- RSS 订阅：`/rss.xml`

> [!NOTE]
> 这就是一个标注块，语法是 `> [!NOTE]`，还支持 `TIP` / `WARNING` 等级别。

有任何问题，README 里有完整说明。
