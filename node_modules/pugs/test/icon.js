/*!
 * Icon
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../icon');

it('Icon', async () => {
  assert.equal(component({
    icon: {
      prefix: 'fa',
      cls: ['icon-more'],
      // href: '',
      name: 'spinner',
      html: '<strong>带html的</strong>',
      text: 'icon',
    },
  }), `
<i class="fa fa-spinner icon-more" aria-hidden="true"><strong>带html的</strong>icon
</i>`);
});
