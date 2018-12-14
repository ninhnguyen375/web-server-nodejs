/*!
 * Modal
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../modal');

it('Modal', async () => {
  assert.equal(component({
    modal: {
      // prefix: 'modal',
      cls: ['modal-more'],
      // fade: true,
      // size: 'sm',
      title: 'title',
      // dismiss: true,
      content: {
        action: '/route/to/submit',
        method: 'post',
      },
      html: '<strong>带html的</strong>',
      text: 'modal',
      buttons: [
        {style: 'default', text: '取消', autofocus: true, attributes: {'data-dismiss': 'modal'}},
        {style: 'primary', text: '提交', type: 'submit'},
      ],
    },
  }), `
<div class="modal fade modal-more">
  <div class="modal-dialog">
    <form class="modal-content" action="/route/to/submit" method="post">
      <fieldset>
        <div class="modal-header">
          <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
          </button>
          <h4>title</h4>
        </div>
        <div class="modal-body"><strong>带html的</strong>modal
        </div>
        <div class="modal-footer">
          <button class="btn btn-default" type="button" autofocus="autofocus" data-dismiss="modal">取消
          </button>
          <button class="btn btn-primary" type="submit">提交
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</div>`);
});
