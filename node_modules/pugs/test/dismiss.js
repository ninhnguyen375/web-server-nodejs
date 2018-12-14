/*!
 * Dismiss
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../dismiss');

it('Dismiss', async () => {
  assert.equal(component({
    dismiss: {
      name: 'modal',
      // cls: ['close'],
      // html: '<span aria-hidden="true">&times;</span>',
    },
  }), `
<button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
</button>`);
});
