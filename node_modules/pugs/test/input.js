/*!
 * Input
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../input');

it('Input', async () => {
  assert.equal(component({
    input: {
      // prefix: 'input',
      size: 'lg',
      // type: 'text',
      id: 'input',
      cls: ['form-control', 'input-more'],
      name: 'name',
      value: 'value',
      placeholder: 'placeholder',
      // checked: false,
      readonly: true,
      disabled: true,
      required: true,
      autofocus: true,
      autocomplete: 'off',
      // left: false,
      // right: false,
    },
  }), `
<input class="form-control input-more input-lg" type="text" id="input" name="name" value="value" placeholder="placeholder" readonly="readonly" disabled="disabled" required="required" autofocus="autofocus" autocomplete="off"/>`);
});

it('Input', async () => {
  assert.equal(component({
    input: {
      // prefix: 'input',
      // size: '',
      // type: 'text',
      // id: 'input',
      // cls: ['form-control'],
      name: 'name',
      value: 'value',
      placeholder: 'placeholder',
      // checked: false,
      // readonly: false,
      // disabled: false,
      // required: false,
      // autofocus: false,
      // autocomplete: 'on',
      left: '@',
      right: {name: 'calendar'},
    },
  }), `
<div class="input-group">
  <div class="input-group-addon">@
  </div>
  <input type="text" name="name" value="value" placeholder="placeholder"/>
  <div class="input-group-addon">
    <i class="icon icon-calendar" aria-hidden="true">
    </i>
  </div>
</div>`);
});

it('Input', async () => {
  assert.equal(component({
    input: {
      // prefix: 'input',
      // size: '',
      // type: 'text',
      // id: 'input',
      // cls: ['form-control'],
      name: 'name',
      value: 'value',
      placeholder: 'placeholder',
      // checked: false,
      // readonly: false,
      // disabled: false,
      // required: false,
      // autofocus: false,
      // autocomplete: 'on',
      left: [
        {
          type: 'button',
          style: 'default',
          text: 'left',
        },
      ],
      right: [
        {
          type: 'button',
          style: 'primary',
          text: 'right',
        },
        {
          type: 'dropdown',
          align: 'right',
          wrap: false,
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
      ],
    },
  }), `
<div class="input-group">
  <div class="input-group-btn">
    <button class="btn btn-default" type="button">left
    </button>
  </div>
  <input type="text" name="name" value="value" placeholder="placeholder"/>
  <div class="input-group-btn">
    <button class="btn btn-primary" type="button">right
    </button>
    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"><span class="caret"></span>
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
  </div>
</div>`);
});
