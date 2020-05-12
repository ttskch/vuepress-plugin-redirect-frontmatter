const transform = require('lodash/transform')

// @see https://vuepress.vuejs.org/theme/writing-a-theme.html#app-level-enhancements
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  const redirections = transform(siteData.pages, (result, page) => {
    if (page.frontmatter && page.frontmatter.redirectFrom) {
      const fromPaths = page.frontmatter.redirectFrom
      for (const fromPath of Array.isArray(fromPaths) ? fromPaths : [fromPaths]) {
        result.push({
          from: fromPath,
          to: page.path,
        })
      }
    }
  }, [])

  function isSamePath(path1, path2) {
    return path1.toLowerCase().replace(/\/$/, '') === path2.toLowerCase().replace(/\/$/, '')
  }

  function hasRoute(path) {
    return router.options.routes.some(
      route => isSamePath(route.path, path)
    )
  }

  router.beforeEach((to, from, next) => {
    if (hasRoute(to.path)) {
      return next()
    }

    for (const redirection of redirections) {
      if (isSamePath(to.path, redirection.from)) {
        return next(redirection.to)
      }
    }

    next()
  })
}
