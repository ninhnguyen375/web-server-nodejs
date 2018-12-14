/*!
 * Table
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../table');

it('Table', async () => {
  assert.equal(component({
    table: {
      // prefix: 'table',
      cls:['table-cls', 'table-more'],
      bordered: true,
      condensed: true,
      hover: true,
      responsive: true,
      striped: true,
      title: 'title',
      columns: [
        {name: '#', key: (item, i) => i + 1, width: '10%', attributes: {class: ['index']}, item: (item, i) => {return {class: i == 0 && 'active'}}},
        {name: 'Firstname', key: 'firstname', width: '30%', attributes: {class: ['firstname']}, item: (item, i) => {return {class: i == 2 && 'success'}}},
        {name: 'Lastname', key: 'lastname', width: '30%', attributes: {class: ['lastname']}, item: (item, i) => {return {class: i == 0 && 'info'}}},
        {name: 'Username', key: 'username', width: '30%', attributes: {class: ['username']}, item: (item, i) => {return {class: i == 2 && 'danger'}}},
      ],
      items: [
        {firstname: 'Mark', lastname: 'Otto', username: '@mdo'},
        {firstname: 'Jacob', lastname: 'Thornton', username: '@fat', attributes: {class: 'active'}},
        {firstname: 'Larry', lastname: 'the Bird', username: '@twitter'},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username', attributes: {class: 'success'}},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username'},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username', attributes: {class: 'info'}},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username'},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username', attributes: {class: 'warning'}},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username'},
        {firstname: 'Firstname', lastname: 'Lastname', username: 'Username', attributes: {class: 'danger'}},
      ],
      empty: {
        cls: ['empty'],
        text: 'No matched data',
      },
      html: '<tr><td colspan="4">foot</td></tr>',
    },
  }), `
<div class="table-cls table-more table-responsive">
  <table class="table table-bordered table-condensed table-hover table-striped">
    <caption>title</caption>
    <thead>
      <tr>
        <th class="index" width="10%">#
        </th>
        <th class="firstname" width="30%">Firstname
        </th>
        <th class="lastname" width="30%">Lastname
        </th>
        <th class="username" width="30%">Username
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="active">1
        </td>
        <td>Mark
        </td>
        <td class="info">Otto
        </td>
        <td>@mdo
        </td>
      </tr>
      <tr class="active">
        <td>2
        </td>
        <td>Jacob
        </td>
        <td>Thornton
        </td>
        <td>@fat
        </td>
      </tr>
      <tr>
        <td>3
        </td>
        <td class="success">Larry
        </td>
        <td>the Bird
        </td>
        <td class="danger">@twitter
        </td>
      </tr>
      <tr class="success">
        <td>4
        </td>
        <td>Firstname
        </td>
        <td>Lastname
        </td>
        <td>Username
        </td>
      </tr>
      <tr>
        <td>5
        </td>
        <td>Firstname
        </td>
        <td>Lastname
        </td>
        <td>Username
        </td>
      </tr>
      <tr class="info">
        <td>6
        </td>
        <td>Firstname
        </td>
        <td>Lastname
        </td>
        <td>Username
        </td>
      </tr>
      <tr>
        <td>7
        </td>
        <td>Firstname
        </td>
        <td>Lastname
        </td>
        <td>Username
        </td>
      </tr>
      <tr class="warning">
        <td>8
        </td>
        <td>Firstname
        </td>
        <td>Lastname
        </td>
        <td>Username
        </td>
      </tr>
      <tr>
        <td>9
        </td>
        <td>Firstname
        </td>
        <td>Lastname
        </td>
        <td>Username
        </td>
      </tr>
      <tr class="danger">
        <td>10
        </td>
        <td>Firstname
        </td>
        <td>Lastname
        </td>
        <td>Username
        </td>
      </tr>
    </tbody>
    <tfoot><tr><td colspan="4">foot</td></tr>
    </tfoot>
  </table>
</div>`);
});
