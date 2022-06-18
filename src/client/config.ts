import { defineClientConfig } from '@vuepress/client'
import { useBaiduSeo } from './composables'

export default defineClientConfig({
    setup() {
        useBaiduSeo();
    }
})
