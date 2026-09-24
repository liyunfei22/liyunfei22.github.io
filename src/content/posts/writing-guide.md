---
title: 写作指南：Markdown 与代码高亮示例
pubDatetime: 2026-09-24T10:30:00+08:00
description: 展示这套博客支持的常用写作语法，可作为新文章的参考模板
tags: [教程]
---

这篇文章展示了博客支持的常用写作语法，写新文章时可以直接参考或复制。

## Table of contents

## 文字排版

**加粗**、*斜体*、`行内代码`、[链接](https://astro.build)、以及删除线 ~~这样~~。

> 普通引用块。

> [!TIP]
> 标注块支持 `NOTE` / `TIP` / `INFO` / `WARNING` / `DANGER` 等类型。

> [!WARNING]
> frontmatter 里的 `pubDatetime` 是必填项，缺少会导致构建失败。

## 代码高亮

支持 100+ 语言，明暗主题自动切换，还支持高亮标注：

```ts {3} title="example.ts"
function greet(name: string): string {
  // 行号标注：{3} 表示高亮第 3 行
  return `你好，${name}！`; // [!code highlight]
}
```

diff 样式：

```diff
- const old = "旧写法"
+ const new = "新写法"
```

## 列表与表格

- 无序列表项
- 另一项
  1. 嵌套有序列表
  2. 第二项

| 语法 | 用途 |
| ---- | ---- |
| `**粗体**` | 强调 |
| `` `代码` `` | 行内代码 |

## 图片

把图片放进 `src/assets/` 后用相对路径引用，会自动压缩并转为 webp；或者直接放 `public/` 用绝对路径。

---

以上基本覆盖日常写作。Astro 全量语法见 [官方文档](https://docs.astro.build/en/guides/markdown-content/)。
