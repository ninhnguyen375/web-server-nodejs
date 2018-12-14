/*!
 * Box
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../box');

it('Box', async () => {
  assert.equal(component({
    box: {
      // prefix: 'box',
      cls: ['box-more'],
      title: 'title',
      html: '<strong>带html的</strong>',
      text: 'box',
    },
  }), `
<div class="box box-more">
  <div class="box-hd">
    <h3>title</h3>
  </div><strong>带html的</strong>box
</div>`);
});
