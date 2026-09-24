# 我的博客

基于 [Astro](https://astro.build) 7 + [AstroPaper v6](https://github.com/satnaing/astro-paper) 主题（MIT 协议）的个人博客，部署在 GitHub Pages，push 即自动发布。界面已汉化，字体本地自托管（构建不需要访问 Google Fonts）。

## 日常写作

1. 在 `src/content/posts/` 新建 `.md` 文件：

   ```markdown
   ---
   title: 文章标题
   pubDatetime: 2026-09-24T12:00:00+08:00
   description: 一句话摘要
   tags: [技术]
   draft: true   # 可选，true = 草稿不发布
   ---

   正文……
   ```

2. 本地预览：`pnpm dev`（http://localhost:4321）
3. 发布：`git add . && git commit -m "新文章" && git push`

push 后 GitHub Actions 自动构建部署，一两分钟生效。

## 首次发布到 GitHub（还没做）

```bash
# 1. 在 GitHub 网页上新建名为 liyunfei02.github.io 的公开空仓库（不要勾选初始化 README）
# 2. 关联并推送：
cd ~/blog
git remote add origin git@github.com:liyunfei02/liyunfei02.github.io.git
#   （用 HTTPS 的话：git remote add origin https://github.com/liyunfei02/liyunfei02.github.io.git）
git push -u origin main
# 3. 仓库 Settings → Pages → Source 选择 "GitHub Actions"
# 4. 等 Actions 跑完，访问 https://liyunfei02.github.io
```

> 注意：git clone 走 github.com 在当前网络下可能连不上，推送时如遇 SSL 报错，需要代理或改用 SSH + 代理端口。

## 常用自定义（都在 `astro-paper.config.ts`）

- 站点名 / 描述 / 作者 / 时区：`site` 段
- 每页文章数：`posts.perPage`
- 社交链接：`socials`
- 「编辑此页」按钮：仓库建好后把 `features.editPost` 改为 `{ enabled: true, url: "https://github.com/liyunfei02/liyunfei02.github.io/edit/main/" }`

## 开启评论（giscus，可选）

1. 仓库公开并可访问后，打开 https://giscus.app/zh-CN ，填入仓库名（如 `liyunfei02/liyunfei02.github.io`），Discussion 分类建议选 Announcements
2. 把页面生成的 `repo` / `repoId` / `categoryId` 填进 `src/components/Comments.astro` 顶部的 `GISCUS` 对象
3. push 后文章底部自动出现评论区

## 自定义域名（可选）

1. 域名 DNS 添加 CNAME 记录指向 `liyunfei02.github.io`
2. 仓库 Settings → Pages → Custom domain 填入域名
3. 把最终域名更新到 `astro-paper.config.ts` 的 `site.url`（影响 RSS/sitemap/OG 图）

## 目录速查

```
src/content/posts/    博文（核心资产）
src/content/pages/    独立页面（关于页等）
src/fonts/            自托管字体
public/               favicon、默认 OG 图
astro-paper.config.ts 站点配置（最常改）
.github/workflows/deploy.yml  自动部署
```
