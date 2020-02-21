# PostCSS Sass Unicode

[PostCSS] plugin for escape sass unicode characters.

[PostCSS]: https://github.com/postcss/postcss

## scss
```css
.foo {
    &:before{
      content:"\e949"
    }
}
```

## css after sass
```css
.foo {
    &:before{
      content:""
    }
}
```

## css after postcss
```css
.foo {
    &:before{
      content:"\e949"
    }
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-sass-unicode'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
