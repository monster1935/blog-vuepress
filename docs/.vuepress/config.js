module.exports = {
  title: '竹杖芒鞋的空间',
  description: '记录学习、工作、生活',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  base: '/blog-vuepress/',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '竹杖芒鞋', link: 'https://monster1935.cn' },
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "关于本站", path: "/" }
        ]
      },
      {
        title: "算法每日一练",
        path: '/leetcode/index',
        collapsable: false, // 不折叠
        children: [
          { title: "无重复字符的最长子串", path: "/leetcode/2" },
        ],
      }
    ]
  }
}