/*!
 * Alert
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const path = require('path');
const pug = require('pug');

module.exports.default = module.exports = pug.compileFile(path.join(__dirname, 'alert.pug'), {pretty: true});
