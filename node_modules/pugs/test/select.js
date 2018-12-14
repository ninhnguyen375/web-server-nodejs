/*!
 * Select
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../select');

it('Select', async () => {
  assert.equal(component({
    select: {
      // fake: true,
      id: 'select-id',
      cls: ['form-control', 'select-more'],
      name: 'select-name',
      value: 1,
      size: 'lg',
      multiple: true,
      items: [
        {name: 'a', value: 0},
        {name: 'b', value: 1},
        {name: 'c', value: 2},
        {name: 'd', value: 3},
        {name: 'e', value: 4},
        {name: 'f', value: 5},
      ],
    },
  }), `
<select class="form-control select-more input-lg" id="select-id" name="select-name" multiple="multiple">
  <option value="0">a</option>
  <option value="1" selected="selected">b</option>
  <option value="2">c</option>
  <option value="3">d</option>
  <option value="4">e</option>
  <option value="5">f</option>
</select>`);
});

it('Select', async () => {
  assert.equal(component({
    select: {
      fake: true,
      id: 'select-id',
      cls: ['select-more'],
      name: 'select-name',
      value: 2,
      size: 'sm',
      multiple: true,
      up: true,
      align: 'right',
      items: [
        {name: '0值名称', value: 0},
        {name: '1值名称', value: 1},
        {name: '2值名称', value: 2},
        {name: '3值名称', value: 3},
        {name: '4值名称', value: 4, disabled: true},
        {name: '5值名称', value: 5},
      ],
    },
  }), `
<div class="dropup select select-more multiple">
  <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" id="select-id">
    <input type="hidden" name="select-name" value="2"/><strong></strong><span class="caret"></span>
  </button>
  <ul class="dropdown-menu dropdown-menu-right">
    <li data-value="0">0值名称
    </li>
    <li data-value="1">1值名称
    </li>
    <li class="selected" data-value="2">2值名称
    </li>
    <li data-value="3">3值名称
    </li>
    <li class="disabled" data-value="4">4值名称
    </li>
    <li data-value="5">5值名称
    </li>
  </ul>
</div>`);
});
