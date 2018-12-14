/*!
 * Alert
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../alert');

it('Alert', async () => {
  assert.equal(component({
    alert: {
      // prefix: 'alert',
      // style: 'success',
      // dismiss: true,
      fade: true,
      icon: {name: 'success'},
      html: '<strong>带html的</strong>',
      text: 'alert',
    },
  }), `
<div class="alert alert-dismissible fade" role="alert">
  <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>
  </button>
  <i class="icon icon-success" aria-hidden="true">
  </i><strong>带html的</strong>alert
</div>`);
});
