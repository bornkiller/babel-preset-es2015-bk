/**
 * @description - personal es2015-preset
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
var modify = require('modify-babel-preset');

module.exports = modify('es2015', {
  // remove commonjs transform
  'transform-es2015-modules-commonjs': false,

  // remove generator not used
  'transform-regenerator': false,

  // skip external helpers node environment
  'external-helpers': false,

  // support static property
  'transform-class-properties': true
});
