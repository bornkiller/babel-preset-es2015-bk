# babel-preset-es2015-bk

This is [babel-preset-es2015](http://babeljs.io/docs/plugins/preset-es2015/).

1. minus [modules-commonjs](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/)
2. minus [transform-regenerator](http://babeljs.io/docs/plugins/transform-regenerator/)
3. plus [external-helpers](http://babeljs.io/docs/plugins/external-helpers/), use `process.env.SKIP_EXTERNAL` switch
4. plus [transform-class-properties](http://babeljs.io/docs/plugins/transform-class-properties/)

use it with [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel).
