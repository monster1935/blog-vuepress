module.exports = {
  title: '竹杖芒鞋',
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
      { text: '首页', link: '/' },
      {
        text: 'monster1935 的博客',
        items: [
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "基础学习",
        path: '/handbook/nodejs-in-byte',
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/nodejs-in-byte" },
          { title: "泛型", path: "/handbook/test2" }
        ],
      }
    ]
  }
}