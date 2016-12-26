/**
 * @description - personal es2015-preset
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

/**
 * @description
 * - use within package bundle, not expect generate too much external code
 * - means i don't need external helpers
 * - transform-class-properties need run before transform-classed
 */
'use strict';

const relative = require('require-relative');
const location = require.resolve( 'babel-preset-es2015' );
const presets = require('babel-preset-es2015');

const commonjs = relative( 'babel-plugin-transform-es2015-modules-commonjs', location);
const generator = relative('babel-plugin-transform-regenerator', location);
const transformClassProperties = require('babel-plugin-transform-class-properties');
const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');

// personal plugin sets
let plugins;

plugins = presets.plugins.filter(plugin => {
  let matcher = Array.isArray(plugin) ? plugin[0] : plugin;

  return matcher !== commonjs && matcher !== generator;
});

plugins = [transformClassProperties, ...plugins, transformObjectRestSpread];

module.exports = {
  plugins
};
