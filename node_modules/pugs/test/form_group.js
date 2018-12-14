/*!
 * Form group
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../form_group');

it('Form group', async () => {
  assert.equal(component({
    form_group: {
      // prefix: 'form',
      cls: ['form-group-more'],
      // size: false,
      // status: false,
      // feedback: false,
      // label: false,
      control: {
        // type: 'text',
        id: 'input-id',
        name: 'input-name',
        value: 'input-value',
        placeholder: 'input-placeholder',
      },
      // help: false,
    },
  }), `
<div class="form-group form-group-more">
  <input class="form-control" type="text" id="input-id" name="input-name" value="input-value" placeholder="input-placeholder"/>
</div>`);
});

it('Form group', async () => {
  assert.equal(component({
    form_group: {
      // prefix: 'form',
      cls: ['form-group-more'],
      size: 'lg',
      status: 'success',
      feedback: {name: 'success'},
      label: 'Username',
      control: {
        // type: 'text',
        id: 'username',
        name: 'Username',
        value: 'My username',
        placeholder: 'Username',
      },
      help: 'Please enter your username.',
    },
  }), `
<div class="form-group form-group-lg has-success has-feedback form-group-more">
  <label class="control-label" for="username">Username
  </label>
  <input class="form-control" type="text" id="username" name="Username" value="My username" placeholder="Username"/>
  <i class="icon icon-success form-control-feedback" aria-hidden="true">
  </i>
  <div class="help-block">Please enter your username.
  </div>
</div>`);
});

it('Form group', async () => {
  assert.equal(component({
    form_group: {
      // prefix: 'form',
      cls: ['form-group-more'],
      size: 'lg',
      status: 'error',
      feedback: {name: 'error'},
      label: {
        cls: ['control-label-more', 'col-xs-3'],
        html: '<strong*</strong>',
        text: 'Password',
      },
      control: {
        type: 'password',
        id: 'password',
        name: 'Password',
        placeholder: 'Password',
        wrapper: ['col-xs-6'],
      },
      help: 'Please enter your password.',
    },
  }), `
<div class="form-group form-group-lg has-error has-feedback form-group-more">
  <label class="control-label control-label-more col-xs-3" for="password"><strong*</strong>Password
  </label>
  <div class="col-xs-6">
    <input class="form-control" type="password" id="password" name="Password" placeholder="Password"/>
    <i class="icon icon-error form-control-feedback" aria-hidden="true">
    </i>
  </div>
  <div class="help-block">Please enter your password.
  </div>
</div>`);
});

it('Form group', async () => {
  assert.equal(component({
    form_group: {
      // prefix: 'form',
      cls: ['form-group-more'],
      size: 'sm',
      status: 'warning',
      feedback: false,
      label: {
        srOnly: true,
        text: 'Remember me',
      },
      control: {
        type: 'checkbox',
        name: 'remember',
        checked: true,
        wrapper: {
          cls: ['col-xs-6', 'col-xs-push-3'],
        },
      },
      // help: false,
    },
  }), `
<div class="form-group form-group-sm has-warning form-group-more">
  <label class="control-label sr-only">Remember me
  </label>
  <div class="col-xs-6 col-xs-push-3">
    <input type="checkbox" name="remember" checked="checked"/>
  </div>
</div>`);
});
