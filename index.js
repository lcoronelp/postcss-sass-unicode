let postcss = require('postcss');

module.exports = postcss.plugin('postcss-sass-unicode', (opts = { }) => {

  // Work with options here

  return (root, result) => {

    root.walkRules(function(rule) {
      rule.walkDecls('content',function(decl) {
        let input = decl.value;

        let new_value = input;
        if(input.charCodeAt(1) > 255) {
          new_value = "\"\\" + input.codePointAt(input.length - 2).toString(16) + "\"";
        }

        // console.log(input,input.toString(),input.charCodeAt(1),new_value);

        decl.value = new_value;

      });
    });

  }
});
