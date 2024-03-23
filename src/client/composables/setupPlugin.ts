import { onMounted } from 'vue'
import { useRouter } from '@vuepress/client'
import type { BaiduSeoOptions } from "../../shared/index.js";

declare global {
  interface Window { _hmt: any; }
}

// 初始化百度SEO插件的配置参数
declare const __BAIDU_SEO_OPTIONS__: BaiduSeoOptions;
const options = __BAIDU_SEO_OPTIONS__;
const IGNORE_LOCAL = options.ignoreLocal;
const HM = options.hm;

// 使用百度SEO插件
export const useBaiduSeo = (): void => {

  onMounted(() => {
    // 百度统计提交
    tongjiSubmit(1000);

    // 监听路由变化
    const router = useRouter();
    router.afterEach((to, from) => {
      var toPath = to.path;
      var fromPath = from.path;
      // 忽略带锚点的路由变化
      if (toPath != fromPath) {
        tongjiSubmit(500);
      }
    });
  })

}

/**
 * 百度统计提交
 */
function tongjiSubmit(waitMills: number) {
  // 利用定时器来保证可以正常操作DOM节点
  setTimeout(() => {
    tongjiPush();
  }, waitMills);
}

/**
 * 百度统计推送
 */
function tongjiPush() {
  if (HM && typeof window !== 'undefined') {
    // 忽略本地的访问记录
    const host = window.location.host;
    if ((host.indexOf("127.0.0.1") != -1 || host.indexOf("localhost") != -1) && IGNORE_LOCAL) {
      return;
    }

    // 删除已存在的DOM节点
    const id = 'baidu-tongji';
    var element = document.getElementById(id);
    if (element) {
      element.remove();
    }

    // 推送访问记录
    window._hmt = window._hmt || [];
    const hm = document.createElement('script');
    hm.id = id;
    hm.src = 'https://hm.baidu.com/hm.js?' + HM;
    const s = document.getElementsByTagName('script')[0];
    if (s.parentNode) {
      s.parentNode.insertBefore(hm, s);
      window._hmt.push(['_trackPageview', window.location.href]);
    }
  }

}