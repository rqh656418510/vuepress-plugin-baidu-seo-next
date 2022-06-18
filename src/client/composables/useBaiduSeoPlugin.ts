import { onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import type { BaiduSeoOptions } from "../../shared";

declare const __BAIDU_SEO_OPTIONS__: BaiduSeoOptions;
const options = __BAIDU_SEO_OPTIONS__;
const IGNORE_LOCAL = options.ignoreLocal;
const HM = options.hm;
const win: any = window;

/**
 * baidu tongji
 * @returns 
 */
function initBaiduTongji() {
  if (HM && typeof window !== 'undefined') {

    const host = window.location.host;
    if ((host.indexOf("127.0.0.1") != -1 || host.indexOf("localhost") != -1) && IGNORE_LOCAL) {
      return;
    }

    const id = 'baidu-tongji';
    var element = document.getElementById(id);
    if (element) {
      element.remove();
    }

    win._hmt = win._hmt || [];
    const hm = document.createElement('script');
    hm.id = id;
    hm.src = 'https://hm.baidu.com/hm.js?' + HM;
    const s = document.getElementsByTagName('script')[0];
    if (s.parentNode) {
      s.parentNode.insertBefore(hm, s);
    }

    const router = useRouter();
    const loadedPages = new Set();

    router.afterEach((to) => {
      // resolve duplicate requests
      if (loadedPages.has(to.fullPath)) {
        setTimeout(() => {
          loadedPages.clear();
        }, 1000);
      } else {
        loadedPages.add(to.fullPath);
        win._hmt.push(['_trackPageview', to.fullPath]);
      }
    });
  }
}

export const useBaiduSeo = (): void => {

  onMounted(() => {
    initBaiduTongji();
  })

}