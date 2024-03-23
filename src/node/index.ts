import { info, error } from './utils.js'
import type { Plugin } from "@vuepress/core";
import { path, getDirname } from "@vuepress/utils";
import type { BaiduSeoOptions } from "../shared/index.js";

const __dirname = getDirname(import.meta.url);

export const baiduSeoPlugin = (options: BaiduSeoOptions): Plugin =>
    (app) => {
        if (options.hm) {
            info('running...');
        } else {
            error('option hm is required!');
        }

        return {
            name: "vuepress-plugin-baidu-seo-next",

            define: {
                __BAIDU_SEO_OPTIONS__: options
            },

            clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        }
    };
