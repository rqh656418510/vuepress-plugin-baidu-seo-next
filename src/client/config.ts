import { defineClientConfig } from '@vuepress/client'
import { useBaiduSeo } from './composables/index.js'

export default defineClientConfig({
    setup() {
        useBaiduSeo();
    }
})
