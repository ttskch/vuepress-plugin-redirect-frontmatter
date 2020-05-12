# vuepress-plugin-redirect-frontmatter

[![](https://img.shields.io/npm/v/vuepress-plugin-redirect-frontmatter?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-redirect-frontmatter)
[![](https://img.shields.io/npm/dm/vuepress-plugin-redirect-frontmatter?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-redirect-frontmatter)

🎉[VuePress](https://vuepress.vuejs.org/) plugin to handle redirection via frontmatter.

## Installation

```bash
$ yarn add --dev vuepress-plugin-redirect-frontmatter

# or
$ npm install -D vuepress-plugin-redirect-frontmatter
```

## Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: ['redirect-frontmatter'],
}
```

And add `redirectFrom` variable to your page's frontmatter.

```
---
permalink: /current-permalink
redirectFrom: /old-permalink
---
```

You can also specify multiple values.

```
---
permalink: /current-permalink
redirectFrom:
  - /old-permalink1
  - /old-permalink2
  - /old-permalink3
---
```

Enjoy😃
