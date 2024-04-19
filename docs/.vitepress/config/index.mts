import { defineConfig } from 'vitepress'
import { zh } from './zh.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    // root: { label: 'English', ...en },
    zh: { label: '简体中文', ...zh },
  }
})
