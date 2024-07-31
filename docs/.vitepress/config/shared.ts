import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh.mjs'
// import { search as enSearch } from './en.mjs'

export const shared = defineConfig({
  title: '山水画路社区·官方文档',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  // sitemap: {
  //   hostname: 'https://vitepress.dev',
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes('migration'))
  //   }
  // },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://static.shanshui.site/logo.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://static.shanshui.site/logo.ico' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'Shanshui Community Docs | 山水画路社区·文档' }],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    ['meta', { property: 'og:image', content: 'https://static.shanshui.site/logo.ico' }],
    ['meta', { property: 'og:url', content: 'https://docs.spr-community.us.kg/' }],
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    // logo: { src: 'https://static.shanshui.site/logo.ico', width: 24, height: 24 },
    logo: 'https://static.shanshui.site/logo.ico',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SPR-Community' }
    ],
  }
})
