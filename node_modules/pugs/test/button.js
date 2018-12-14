/*!
 * Button
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../button');

it('Button', async () => {
  assert.equal(component({
    button: {
      // prefix: 'btn',
      cls: ['btn-more'],
      // href: '',
      // type: 'button',
      name: 'button-name',
      style: 'primary',
      // size: 'sm',
      // block: false,
      // active: false,
      // disabled: false,
      html: '<strong>带html的</strong>',
      text: 'button',
      // icon: {
      // 	prefix: 'fa',
      // 	name: 'spinner',
      // },
    },
  }), `
<button class="btn btn-primary btn-more" type="button" name="button-name"><strong>带html的</strong>button
</button>`);
});
