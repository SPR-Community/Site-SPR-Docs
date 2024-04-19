import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default {
  lang: 'zh',
  title: "官方文档",
  titleTemplate: '山水画路社区·文档',
  description: "这里是山水画路社区的官方文档",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '开源项目', link: '/openscoure/' },
      { text: '社区规定', link: '/rule/terms/' },
      { text: '隐私政策', link: '/rule/privacy-policy/' },
    ],
    sidebar: [
      {
        text: '开源项目',
        items: [
          { text: '首页', link: '/openscoure/' },
        ]
      },
      {
        text: '社区规定',
        items: [
          { text: '首页', link: '/rule/' },
          { text: '社区群群规', link: '/rule/group' },
          { text: '社区规定', link: '/rule/group' },
          { text: '隐私政策', link: '/rule/privacy-policy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中

      // 其余 locale 特定属性...
    }
  }
};
