module.exports.creator = ""

module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-sass-unicode',
    Once (root, result) {
      root.walkRules(function (rule) {
        rule.walkDecls('content', function (decl) {
          let input = decl.value

          if (!input.startsWith('"\\')) {
            let new_value = input
            if (input.length === 3 && input.charCodeAt(1) > 255) {
              new_value = '"\\' + input.codePointAt(input.length - 2).toString(16) + '"'
            }
            decl.value = new_value

            if (input.length > 3) {
              let new_value = '"'

              for (let i = 1; i < input.length - 1; i++) {
                new_value += '\\' + input.codePointAt(i).toString(16)
              }
              new_value += '"'
              decl.value = new_value
            }
          }
        })
      })
    }
  }
}

module.exports.postcss = true
