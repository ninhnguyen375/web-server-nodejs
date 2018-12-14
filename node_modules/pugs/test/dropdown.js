/*!
 * Dropdown
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../dropdown');

it('Dropdown', async () => {
  assert.equal(component({
    dropdown: {
      // prefix: 'dropdown',
      // wrap: true,
      cls: ['dropdown-more'],
      up: true,
      static: true,
      align: 'right',
      size: 'sm',
      html: '<strong>带html的</strong>',
      text: 'dropdown',
      // item: (item, i) => {
      // 	console.dir(item);
      // 	console.dir(i);
      // 	return `<a href="${item.url}"><i class="icon icon-${item.icon.name}"></i>${item.name}</a>`;
      // },
      items: [
        {
          header: 'Dropdown header',
          name: 'Action',
          url: 'javascript:;',
          icon: {name: 'action'},
        },
        {
          name: 'Another action',
          url: 'javascript:;',
        },
        {
          name: 'Something else here',
          url: 'javascript:;',
          target: '_blank',
        },
        {
          divider: true,
          header: 'Dropdown header',
          name: 'Separated link',
          url: 'javascript:;',
        },
        {
          name: 'Disabled link',
          url: 'javascript:;',
          disabled: true,
        },
      ],
    },
  }), `
<div class="dropup dropdown dropdown-more">
  <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><strong>带html的</strong>dropdown<span class="caret"></span>
  </button>
  <ul class="dropdown-menu dropdown-menu-right">
    <li class="dropdown-header">Dropdown header</li>
    <li class="selected"><a href="javascript:;">
        <i class="icon icon-action" aria-hidden="true">
        </i>Action</a>
    </li>
    <li class="selected"><a href="javascript:;">Another action</a>
    </li>
    <li class="selected"><a href="javascript:;" target="_blank">Something else here</a>
    </li>
    <li class="dropdown-divider" role="separator"></li>
    <li class="dropdown-header">Dropdown header</li>
    <li class="selected"><a href="javascript:;">Separated link</a>
    </li>
    <li class="disabled selected"><a href="javascript:;">Disabled link</a>
    </li>
  </ul>
</div>`);
});
