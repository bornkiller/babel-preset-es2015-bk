/**
 * @description - personal es2015-preset
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

/**
 * @description
 * - use within package bundle, never expect generate too much external code
 * - means i don't need external helpers
 * - transform-class-properties need run before transform-classed
 */
var modify = require('modify-babel-preset');
var transformClassProperties = require('babel-plugin-transform-class-properties');

var preset = modify('es2015', {
  // remove commonjs transform for tree-shaking compatible
  'transform-es2015-modules-commonjs': false,

  // remove generator not used
  'transform-regenerator': false,

  // personal usage only in tiny project, external-helpers output too much
  'external-helpers': false,

  // support HMR modal implement
  'transform-object-rest-spread': true
});

preset.plugins.unshift(transformClassProperties);

module.exports = preset;
