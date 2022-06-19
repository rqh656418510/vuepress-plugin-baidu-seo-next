import { logger } from './utils'
import { path } from "@vuepress/utils";
import type { Plugin } from "@vuepress/core";
import type { BaiduSeoOptions } from "../shared";

export * from "../shared";

export const baiduSeoPlugin = (options: BaiduSeoOptions): Plugin =>
    (app) => {
        if (!options.hm) {
            logger('Option hm is required!', 'red');
        }
        return {
            name: "vuepress-plugin-baidu-seo-next",

            define: {
                __BAIDU_SEO_OPTIONS__: options
            },

            clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        }
    };

export default baiduSeoPlugin;