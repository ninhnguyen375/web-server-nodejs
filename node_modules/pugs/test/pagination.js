/*!
 * Pagination
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../pagination');

it('Pagination', async () => {
  assert.equal(component({
    pagination: {
      totalCount: 666,
      cls: ['pagination', 'pagination-more'],
      first_cls: ['first'],
      last_cls: ['last'],
      prev_cls: ['prev'],
      next_cls: ['next'],
      page_cls: ['page'],
      // active_cls: ['active'],
      // disabled_cls: ['disabled'],
      first: 'first',
      last: 'last',
      prev: '«',
      next: '»',
      url: '/route/path?query=string&page=${page}&size=${size}',
      page: 10,
      // size: 20,
      // max_button_count: 6,
      // hide_on_single_page: false,
      // disable_active_page_button: false,
      ellipsis: '...',
    },
  }), `
<ul class="pagination pagination-more">
  <li class="first"><a href="/route/path?query=string&amp;page=1&amp;size=20">first</a>
  </li>
  <li class="prev"><a href="/route/path?query=string&amp;page=9&amp;size=20">«</a>
  </li>
  <li class="page"><a href="/route/path?query=string&amp;page=1&amp;size=20">1</a>
  </li>
  <li><em>...</em>
  </li>
  <li class="page"><a href="/route/path?query=string&amp;page=7&amp;size=20">7</a>
  </li>
  <li class="page"><a href="/route/path?query=string&amp;page=8&amp;size=20">8</a>
  </li>
  <li class="page"><a href="/route/path?query=string&amp;page=9&amp;size=20">9</a>
  </li>
  <li class="page active"><span>10</span>
  </li>
  <li class="page"><a href="/route/path?query=string&amp;page=11&amp;size=20">11</a>
  </li>
  <li class="page"><a href="/route/path?query=string&amp;page=12&amp;size=20">12</a>
  </li>
  <li><em>...</em>
  </li>
  <li class="page"><a href="/route/path?query=string&amp;page=34&amp;size=20">34</a>
  </li>
  <li class="next"><a href="/route/path?query=string&amp;page=11&amp;size=20">»</a>
  </li>
  <li class="last"><a href="/route/path?query=string&amp;page=34&amp;size=20">last</a>
  </li>
</ul>`);
});
