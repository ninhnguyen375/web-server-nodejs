/*!
 * Menu
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2018/07/20
 * since: 0.0.1
 */
'use strict';

const assert = require('assert');
const component = require('../menu');

it('Menu', async () => {
  assert.equal(component({
    menu: {
      cls: ['menu', 'menu-more'],
      arrow: ['icon-arrow-down'],
      active_cls: ['active'],
      active_id: 1,
      depth: true,
      // item: (item, active, depth, i) => {
      // 	console.dir(item);
      // 	console.dir(active);
      // 	console.dir(depth);
      // 	console.dir(i);
      // 	return `<a href="${item.url}" class="${active && 'active' || ''}" data-id="${item.id}" data-depth="${depth}"><i class="icon icon-${item.icon.name}"></i>${item.name}</a>`;
      // },
      items: [
        {
          id: 1,
          name: 'menu1',
          url: '/menu1',
          icon: {name: 'home'},
        },
        {
          id: 2,
          name: 'menu2',
          icon: {name: 'home'},
          children: [
            {
              id: 6,
              name: 'menu6',
              url: '/menu6',
            },
          ],
        },
        {
          id: 3,
          name: 'menu3',
          url: '/menu3',
          icon: {name: 'home'},
        },
        {
          id: 4,
          name: 'menu4',
          icon: {name: 'home'},
          children: [
            {
              id: 7,
              name: 'menu7',
              url: '/menu7',
            },
            {
              id: 8,
              name: 'menu8',
              children: [
                {
                  id: 9,
                  name: 'menu9',
                  url: '/menu9',
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: 'menu5',
          url: '/menu5',
          icon: {name: 'home'},
        },
      ],
    },
  }), `
<div class="menu menu-more">
  <div class="menu-scroller">
    <ul>
      <li class="active" data-id="1" data-depth="0">
        <div class="item">
          <i class="icon icon-home" aria-hidden="true">
          </i><a href="/menu1">menu1</a>
        </div>
      </li>
      <li data-id="2" data-depth="0">
        <div class="item"><i class="icon-arrow-down"></i>
          <i class="icon icon-home" aria-hidden="true">
          </i><span>menu2</span>
        </div>
        <ul>
          <li data-id="6" data-depth="1">
            <div class="item"><a href="/menu6">menu6</a>
            </div>
          </li>
        </ul>
      </li>
      <li data-id="3" data-depth="0">
        <div class="item">
          <i class="icon icon-home" aria-hidden="true">
          </i><a href="/menu3">menu3</a>
        </div>
      </li>
      <li data-id="4" data-depth="0">
        <div class="item"><i class="icon-arrow-down"></i>
          <i class="icon icon-home" aria-hidden="true">
          </i><span>menu4</span>
        </div>
        <ul>
          <li data-id="7" data-depth="1">
            <div class="item"><a href="/menu7">menu7</a>
            </div>
          </li>
          <li data-id="8" data-depth="1">
            <div class="item"><i class="icon-arrow-down"></i><span>menu8</span>
            </div>
            <ul>
              <li data-id="9" data-depth="2">
                <div class="item"><a href="/menu9">menu9</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li data-id="5" data-depth="0">
        <div class="item">
          <i class="icon icon-home" aria-hidden="true">
          </i><a href="/menu5">menu5</a>
        </div>
      </li>
    </ul>
  </div>
</div>`);
});
