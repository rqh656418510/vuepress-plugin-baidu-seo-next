# vuepress-plugin-baidu-seo-next

> Baidu SEO plugin for vuepress v2.x

## Install

``` sh
npm install -D vuepress-plugin-baidu-seo-next
```

## Usage

``` js
const { baiduSeoPlugin } = require('vuepress-plugin-baidu-seo-next')

module.exports = {
  plugins: [
    baiduSeoPlugin({
      hm: 'xxxxxxxx',
      ignoreLocal: true
    })
  ]
}
```

## Options

### Baidu Tongji

#### hm

- Type: `String`
- Default: `undefined`
- Description: the code of baidu tongji

#### ignoreLocal

- Type: `Boolean`
- Default: `false`
- Description: ignore `127.0.0.1` and `localhost` access for baidu tongji