import { defineConfig, type DefaultTheme } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

export const zh = defineConfig({
  lang: 'zh-CN',
  title: "山水画路社区·文档",
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

    editLink: {
      pattern: 'https://github.com/SPR-Community/docs.community.shanshui.site/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      // message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} Minecraft_山水`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})


export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
