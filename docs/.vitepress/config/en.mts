import { defineConfig, type DefaultTheme } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

export const en = defineConfig({
  lang: 'en-US',
  title: "ShanshuiCommunity·Docs",
  description: "This is the Official Docs of Shanshui Community",

  themeConfig: {
    nav: ([
        { text: 'Home', link: '/en/' },
        { text: 'OpenSource Project', link: '/en/opensource/' },
        {
          text: 'Rules',
          items: [
            { text: 'Community Rules', link: '/en/rule/terms/' },
            { text: 'Privacy Policy', link: '/en/rule/privacy-policy/' },
          ]
        }
    ]),

    sidebar: {
      '/en/opensource/': [
        { text: 'OpenSource Project',
          items: [
            { text: 'Home', link: '/en/opensource/' },
          ]
        }],
      '/en/rule/': [
        {
          text: 'Community Rules',
          items: [
            { text: 'Home', link: '/en/rule/' },
            { text: 'Community Group Rules', link: '/en/rule/group/' },
            { text: 'Community Rules', link: '/en/rule/group/' },
            { text: 'Privacy Policy', link: '/en/rule/privacy-policy/' }
          ]
        }
      ]
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 尤雨溪`
    },

    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    outline: {
      label: 'On This Page'
    },

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Muiti-Languages',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme'
  }
})


export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: 'Search the Docs',
    translations: {
      button: {
        buttonText: 'Search the Docs',
        buttonAriaLabel: 'Search the Docs'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: 'Cancel'
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