/*!
 * Icon
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/07/05
 * since: 0.0.1
 */
'use strict';

const path = require('path');
const pug = require('pug');

module.exports.default = module.exports = pug.compileFile(path.join(__dirname, 'icon.pug'), {pretty: true});
