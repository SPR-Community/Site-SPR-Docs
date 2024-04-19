import { defineConfig, type DefaultTheme } from 'vitepress'


export const zh = {
  lang: 'zh-CN',
  title: "官方文档",
  titleTemplate: '山水画路社区·文档',
  description: "这里是山水画路社区的官方文档",
  themeConfig: {
    nav: ([
        { text: '首页', link: '/' },
        { text: '开源项目', link: '/opensource/' },
        {
          text: '协议 规定与政策',
          items: [
            { text: '社区规定', link: '/rule/terms/' },
            { text: '隐私政策', link: '/rule/privacy-policy/' },
          ]
        }
    ]),
    sidebar: {
      '/opensource/': [
        { text: '开源项目',
          items: [
            { text: '首页', link: '/opensource/' },
          ]
        }],
      '/rule/': [
        {
          text: '社区规定',
          items: [
            { text: '首页', link: '/rule/' },
            { text: '社区群群规', link: '/rule/group' },
            { text: '社区规定', link: '/rule/group' },
            { text: '隐私政策', link: '/rule/privacy-policy' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

};



