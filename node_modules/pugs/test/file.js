/*!
 * File
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../file');

it('File', async () => {
  assert.equal(component({
    file: {
      // prefix: 'btn',
      cls: ['btn-more'],
      // type: 'button',
      style: 'primary',
      // size: 'sm',
      // block: false,
      // active: false,
      // disabled: false,
      html: '<strong>带html的</strong>',
      text: 'file',
      icon: {
        prefix: 'fa',
        name: 'upload',
      },
      input: {
        name: 'file',
        attributes: {
          multiple: 'multiple',
        },
      },
    },
  }), `
<button class="btn btn-primary btn-more btn-file" type="button">
  <i class="fa fa-upload" aria-hidden="true">
  </i><span><strong>带html的</strong>file</span>
  <input type="file" name="file" multiple="multiple"/>
</button>`);
});
