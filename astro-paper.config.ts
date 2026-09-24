import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // TODO: 如果你的 GitHub 用户名不是 liyunfei22，请替换成自己的地址
    url: "https://liyunfei22.github.io",
    title: "我的博客",
    description: "记录技术与生活",
    author: "liyunfei22",
    profile: "https://github.com/liyunfei22",
    ogImage: "default-og.jpg",
    lang: "zh",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      // 仓库建好后可改为 true，并加上 url 字段，例如：
      // { enabled: true, url: "https://github.com/liyunfei22/liyunfei22.github.io/edit/main/" }
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/liyunfei22" },
    // { name: "mail", url: "mailto:yourmail@example.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
