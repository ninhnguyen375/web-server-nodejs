# Common pug component templates

通用pug组件模板

## 目录

<details>

* [安装](#install)
* [使用](#useage)
* [信息提示](#alert)
* [内容区域](#box)
* [面包屑](#breadcrumb)
* [按钮](#button)
* [单选/复选](#checkbox)
* [关闭按钮](#dismiss)
* [下拉列表/菜单](#dropdown)
* [文件上传按钮](#file)
* [表单](#form)
* [表单控件组](#form-group)
* [图标](#icon)
* [输入控件](#input)
* [菜单](#menu)
* [模态框](#modal)
* [分页](#pagination)
* [结果页](#result)
* [下拉列表](#select)
* [表格](#table)
* [树列表](#tree)
* [License](#license)

</details>

## Install

安装

```bash
$ cnpm i [-S|D] pugs
```

## Useage

使用方式一: web端js

```js
const menu = require('pugs/menu.pug');
let html = menu({menu: {...}});
console.log(html);  // -> <div class="menu">...</div>
```

使用方式二: node服务端js

```js
const components = require('pugs');
let html = components.menu({menu: {...}});

// 或者直接引用目标组件包 可以有效减少缓存
const menu = require('pugs/menu');
let html = menu({menu: {...}});

console.log(html);  // -> <div class="menu">...</div>
```

使用方式三: web端pug(jade) 或 node服务端pug(jade) 模板

```pug
//- 需要在locals中预设locals.menu对象数据
include ~pugs/menu
```

使用方式四(推荐): web端pug(jade) 或 node服务端pug(jade) mixin

```pug
include ~pugs/mixins/menu
+menu({...});
```

## Alert

信息提示

```js
// 参数说明
{
  // locals.alert, 必须, 否则输出为空
  alert: {
    // prefix: 'alert',       // 类前缀, 可选, 默认alert
    // style: 'success',      // 样式, 可选, 默认空
    // dismiss: true,         // 关闭按钮, 可选, 默认true, false不渲染
    fade: false,              // 过渡效果, 可选, 默认false
    icon: {name: 'success'},  // 图标, 可选, 默认空
    html: '<strong>带html的</strong>',  // 内容html, 可选, 最先渲染
    text: 'alert',            // 内容文本, 可选, 最后渲染
  },
}
```

```html
<!-- 输出html结构 -->
<div class="alert alert-dismissible fade" role="alert">
  <button class="close" type="button" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <i class="icon icon-success" aria-hidden="true"></i>
  <strong>带html的</strong>   <!-- 参数html的值 -->
  alert   <!-- 参数text的值 -->
</div>
```

## Box

内容区域, 用于隔离功能区域

```js
// 参数说明
{
  // locals.box, 必须, 否则输出为空
  box: {
    // prefix: 'box',   // 类前缀, 可选, 默认box, 则标题区域为box-hd, 内容区域为box-hd
    cls: ['box-more'],  // 最外层额外class类, 可选, 默认为空
    title: 'title',     // 标题, 可选, 如果不传或为空则不渲染标题区域
    html: '<strong>带html的</strong>',  // 内容html, 可选, 最先渲染
    text: 'box',        // 内容文本, 可选, 最后渲染
  },
}
```

```html
<!-- 输出html结构 -->
<div class="box box-more">
  <div class="box-hd">
    <h3>title</h3>
  </div>
  <strong>带html的</strong>   <!-- 参数html的值 -->
  box   <!-- 参数text的值 -->
</div>
```

## Breadcrumb

面包屑

```js
// 参数说明
{
  // locals.breadcrumb, 必须, 否则输出为空
  breadcrumb: {
    cls: ['breadcrumb', 'breadcrumb-more'],   // 最外层class类, 可选, 默认breadcrumb, 覆盖形式
    active_cls: ['active', 'active-more'],     // 自动选中最后一个的类, 可选, 默认空

    // 如果默认的item结构不满足需求, 可以通过item字符串模板或回调自定义结构, 可选
    // item: '<a href="${url}" class="${active}">${name}</a>',
    // item: (item, i) => {
    //  console.log(item);
    //  console.log(i);
    //  return `<a href="${item.url}" class="${item.active && 'active' || ''}">${item.name}</a>`;
    // },

    // 子项, 必须, 否则输出为空
    items: [
      {
        name: 'Home',             // 名称, 必须
        url: '/',                 // url, 可选, 名称在此项有值时为a标签
        cls: ['first', 'home'],   // 额外的类定义
      },
      {
        name: 'Library',
      },
      {
        name: 'Data',
      },
    ],
  },
}
```

```html
<!-- 输出html结构 -->
<ol class="breadcrumb breadcrumb-more">
  <li class="first home"><a href="/">Home</a></li>
  <li>Library</li>
  <li class="active active-more">Data</li>  <!-- 自动选中最后一个 -->
</ol>
```

## Button

按钮

```js
// 参数说明
{
  // locals.button, 必须, 否则输出为空
  button: {
    // prefix: 'btn',     // 类前缀, 可选, 默认btn
    cls: ['btn-more'],    // 额外class类, 可选, 默认为空
    // href: '',          // 设置链接地址, 可选, 空为button标签, 非空为a标签
    // type: 'button',    // 按钮类型, 可选, 默认button
    name: 'button-name',  // 名称, 可选, 默认和a标签时不设置此属性
    style: 'primary',     // 样式, 可选, 默认不带样式
    // size: 'sm',        // 尺寸, 可选, 默认尺寸为空, 大(lg), 小(sm), 超小(xs)
    // block: false,      // 块级, 可选, 默认false非块级, true块级
    // active: false,     // 激活, 可选, 默认false非激活, true激活
    // disabled: false,   // 禁用, 可选, 默认false非禁用, true禁用
    html: '<strong>带html的</strong>',  // 内容html, 可选, 最先渲染
    text: 'button',       // 内容文本, 可选, 最后渲染

    // 带图标的按钮, 可选, 非空则自动调用并将值对象传入icon
    // icon: {
    //   prefix: 'fa',
    //   name: 'spinner',
    // },
  },
}
```

```html
<!-- 输出html结构 -->
<button class="btn btn-primary btn-more" type="button" name="button-name">
    <strong>带html的</strong>   <!-- 参数html的值 -->
    button  <!-- 参数text的值 -->
</button>
```

## Checkbox

单选/复选

```js
// 参数说明
{
  // locals.checkbox, 必须, 否则输出为空
  checkbox: {
    // fake: false,           // 自定义单选/复选, 可选, 默认false原生, true自定义
    // icon: false,           // 增加额外i标签以显示icon, 可选, 默认false不增加, 需要fake和icon同时为true时才会增加
    // label: false,          // 增加label包裹, 可选, 默认false不包裹
    // radio: false,          // 单选, 可选, 默认false复选, true单选
    // id: 'checkbox-id',     // id, 可选, 同input
    cls: ['checkbox-more'],   // 额外的class类, 可选, 默认为空
    name: 'checkbox-name',    // 键, 同input
    value: 'checkbox-value',  // 值, 同input
    // checked: false,        // 选中状态, 可选, 默认false非选中
    // readonly: false,       // 只读状态, 可选, 同input
    // disabled: false,       // 禁用状态, 可选, 同input
  },
}
```

```html
<!-- 输出html结构 -->
<input class="checkbox-more" type="checkbox" name="checkbox-name" value="checkbox-value"/>
```

```js
// 参数说明
{
  // locals.checkbox, 必须, 否则输出为空
  checkbox: {
    fake: true,               // 自定义单选/复选, 可选, 默认false原生, true自定义
    // icon: false,           // 增加额外i标签以显示icon, 可选, 默认false不增加, 需要fake和icon同时为true时才会增加
    // label: false,          // 增加label包裹, 可选, 默认false不包裹
    radio: true,              // 单选, 可选, 默认false复选, true单选
    id: 'radio-id',           // id, 可选, 同input
    cls: ['radio-more'],      // 额外的class类, 可选, 默认为空
    name: 'radio-name',       // 键, 同input
    value: 'radio-value',     // 值, 同input
    checked: true,            // 选中状态, 可选, 默认false非选中
    readonly: true,           // 只读状态, 可选, 同input
    disabled: true,           // 禁用状态, 可选, 同input
    html: '<strong>带html的</strong>',  // 内容html, 可选, 最先渲染, 仅fake为true时可用
    text: 'radio',            // 内容文本, 可选, 最后渲染, 仅fake为true时可用
  },
}
```

```html
<!-- 输出html结构 -->
<label class="radio radio-more fake readonly disabled" for="radio-id">
  <input type="radio" id="radio-id" name="radio-name" value="radio-value" checked="checked" readonly="readonly" disabled="disabled"/>
  <strong>带html的</strong>   <!-- 参数html的值 -->
  radio  <!-- 参数text的值 -->
</label>
```

## Dismiss

关闭按钮

```js
// 参数说明
{
  // locals.dismiss, 必须, 否则输出为空
  dismiss: {
    name: 'modal',                  // 需要关闭的对象名称, 必须, 会在标签中生成data-dismiss=${name}的属性
    cls: ['close', 'close-more'],   // class类, 可选, 默认close, 覆盖形式
    // html: '<span aria-hidden="true">&times;</span>', // 内容html, 可选
  },
}
```

```html
<!-- 输出html结构 -->
<button class="close close-more" type="button" data-dismiss="modal" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

## Dropdown

下拉列表/菜单

```js
// 参数说明
{
  // locals.dropdown, 必须, 否则输出为空
  dropdown: {
    // prefix: 'dropdown',    // 类前缀, 可选, 默认dropdown
    // wrap: true,            // 最外层包裹, 可选, 默认true
    cls: ['dropdown-more'],   // 额外class类, 可选, 默认为空
    up: true,                 // 向上弹出, 可选, 默认false向下弹出
    static: true,             // 静态展示, 可选, 默认false
    align: 'right',           // 向右对齐, 可选, 默认为空向左对齐
    size: 'sm',               // 按钮尺寸, 可选, 默认为空正常尺寸
    html: '<strong>带html的</strong>',  // button内html内容, 可选, 最先渲染, 仅fake为true时可用
    text: 'dropdown',         // button内容文本, 可选, 最后渲染, 仅fake为true时可用

    // 如果默认的item结构不满足需求, 可以通过item回调自定义结构, 可选
    // item: (item, i) => {
    // 	console.dir(item);
    // 	console.dir(i);
    // 	return `<a href="${item.url}"><i class="icon icon-${item.icon.name}"></i>${item.name}</a>`;
    // },

    // 下拉列表项, 可选, 默认空列表则整个下拉框为禁用状态
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
        divider: true,                // 在当前项前增加分割线, 可选, 优先级最高
        header: 'Dropdown header',    // 在当前项前增加额外标题, 可选, 优先级低于分割线
        name: 'Separated link',
        url: 'javascript:;',
      },
      {
        name: 'Disabled link',
        url: 'javascript:;',
        disabled: true,               // 禁用选择, 可选, 默认false
      },
    ],
  },
}
```

```html
<!-- 输出html结构 -->
<div class="dropup dropdown dropdown-more">
  <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <strong>带html的</strong>   <!-- 参数html的值 -->
    dropdown  <!-- 参数text的值 -->
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu dropdown-menu-right">
    <li class="dropdown-header">Dropdown header</li>
    <li><a href="javascript:;"><i class="icon icon-action" aria-hidden="true"></i>Action</a></li>
    <li><a href="javascript:;">Another action</a></li>
    <li><a href="javascript:;" target="_blank">Something else here</a></li>
    <li class="dropdown-divider" role="separator"></li>
    <li class="dropdown-header">Dropdown header</li>
    <li><a href="javascript:;">Separated link</a></li>
    <li class="disabled"><a href="javascript:;">Disabled link</a></li>
  </ul>
</div>
```

## File

文件上传按钮

```js
// 参数说明
{
  // locals.file, 必须, 否则输出为空
  file: {
    // prefix: 'btn',     // 类前缀, 可选, 同button
    cls: ['btn-more'],    // 额外class类, 可选, 同button
    // href: '',          // 设置链接地址, 可选, 同button
    // type: 'button',    // 按钮类型, 可选, 同button
    style: 'primary',     // 样式, 可选, 同button
    // size: 'sm',        // 尺寸, 可选, 同button
    // block: false,      // 块级, 可选, 同button
    // active: false,     // 激活, 可选, 同button
    // disabled: false,   // 禁用, 可选, 为true时会额外禁用file input
    html: '<strong>带html的</strong>',  // 内容html, 可选, 最先渲染
    text: 'file',         // 内容文本, 可选, 最后渲染

    // 带图标的按钮, 可选, 同button
    icon: {
      prefix: 'fa',
      name: 'upload',
    },

    // file input控件的attributes属性设置
    input: {
      name: 'file',
      attributes: {
        multiple: 'multiple',
      },
    },

  },
}
```

```html
<!-- 输出html结构 -->
<button class="btn btn-primary btn-more btn-file" type="button">
  <i class="fa fa-upload" aria-hidden="true"></i>
  <span>
    <strong>带html的</strong>   <!-- 参数html的值 -->
    file  <!-- 参数text的值 -->
  </span>
  <input type="file" name="file" multiple="multiple"/>
</button>
```

## Form

表单

```js
// 参数说明
{
  // locals.form, 必须, 否则输出为空
  form: {
    // prefix: 'form',          // 类前缀, 可选, 默认form
    type: 'horizontal',         // 表单排列类型, 可选, 默认为空, horizontal水平排列, inline内联排列
    cls: ['form-more'],         // 额外class类, 可选, 默认为空
    name: 'form-name',          // 名称, 可选, 默认为空
    action: '/path/to/action',  // 提交地址, 可选, 默认当前页
    method: 'post',             // 提交方法, 可选, 默认get
    file: true,                 // 带文件提交, 可选, 默认false, true时将会自动设置enctype属性值为multipart/form-data
    // fieldset: true,          // 自动渲染一个下级fieldset, 可选, 默认true渲染, false不渲染
    disabled: true,             // 禁用整个表单, 作用于fieldset上, 如fieldset为false, 则此选项无效, 可选, 默认false
    title: 'title',             // legend标题, 可选, 默认不渲染legend标签
    html: '...',                // 内容html, 可选, 默认为空

    // 控件组, 可选, 默认空, 同form_group, 渲染优先级高于html参数
    groups: [
      {
        label: 'Username',
        control: {
          // type: 'text',
          id: 'username',
          name: 'Username',
          placeholder: 'Username',
        },
      },
      {
        label: 'Password',
        control: {
          type: 'password',
          id: 'password',
          name: 'Password',
          placeholder: 'Password',
        },
      },
    ],

    // 表单提交区域, 可选, 默认空, 同button, 渲染优先级高低于html参数, 如此数组个数大于0, 则会生成一个form-submit的div外层包裹
    buttons: [
      {
        style: 'default',
        text: 'Cancel',
      },
      {
        type: 'submit',
        style: 'primary',
        text: 'Submit',
      },
    ],

  },
}
```

```html
<!-- 输出html结构 -->
<form class="form-horizontal form-more" name="form-name" action="/path/to/action" method="post" enctype="multipart/form-data">
  <fieldset disabled="disabled">
    <legend>title</legend>
    <div class="form-group">
      <label class="control-label" for="username">Username</label>
      <input class="form-control" type="text" id="username" name="Username" placeholder="Username" />
    </div>
    <div class="form-group">
      <label class="control-label" for="password">Password</label>
      <input class="form-control" type="password" id="password" name="Password" placeholder="Password" />
    </div>
    ...
    <div class="form-submit">
      <button class="btn btn-default" type="button">Cancel</button>
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  </fieldset>
</form>
```

## Form Group

表单控件组

```js
// 参数说明
{
  // locals.form_group, 必须, 否则输出为空
  form_group: {
    // prefix: 'form',          // 类前缀, 可选, 默认form
    cls: ['form-group-more'],   // 额外class类, 可选, 默认为空
    // size: false,             // 尺寸, 可选, 默认false正常尺寸, lg大号, sm小号
    // status: false,           // 校验状态, 可选, 默认false, success成功, warning警告, error错误
    // feedback: false,         // 额外图标, 可选, 默认false
    label: false,               // label标签配置, 可选, 默认false不渲染,

    // 控件配置, 必须, 默认类型text, input系列的type将使用input组件来渲染, 参数同input
    control: {
      // type: 'text',
      id: 'input-id',
      name: 'input-name',
      value: 'input-value',
      placeholder: 'input-placeholder',
    },

    // help: false,             // 帮助文本, 可选, 默认false
  },
}
```

```html
<!-- 输出html结构 -->
<div class="form-group form-group-more">
  <input class="form-control" type="text" id="input-id" name="input-name" value="input-value" placeholder="input-placeholder"/>
</div>
```

```js
// 参数说明
{
  // locals.form_group, 必须, 否则输出为空
  form_group: {
    // prefix: 'form',            // 类前缀, 可选, 默认form
    cls: ['form-group-more'],     // 额外class类, 可选, 默认为空
    size: 'lg',                   // 尺寸, 可选, 默认false正常尺寸, lg大号, sm小号
    status: 'success',            // 校验状态, 可选, 默认false, success成功, warning警告, error错误
    feedback: {name: 'success'},  // 额外图标, 可选, 默认false, 配置后将使用icon组件渲染, 参数同con
    label: 'Username',            // label标签配置, 可选, 默认false不渲染, 可为字符串

    // 控件配置, 必须, 默认类型text, input系列的type将使用input组件来渲染, 参数同input
    control: {
      // type: 'text',
      id: 'username',
      name: 'Username',
      value: 'My username',
      placeholder: 'Username',
    },

    help: 'Please enter your username.',  // 帮助文本, 可选, 默认false, 可为字符串
  },
}
```

```html
<!-- 输出html结构 -->
<div class="form-group form-group-lg has-success has-feedback form-group-more">
  <label class="control-label" for="username">Username</label>
  <input class="form-control" type="text" id="username" name="Username" value="My username" placeholder="Username" />
  <i class="icon icon-success form-control-feedback" aria-hidden="true"></i>
  <div class="help-block">Please enter your username.</div>
</div>
```

```js
// 参数说明
{
  // locals.form_group, 必须, 否则输出为空
  form_group: {
    // prefix: 'form',          // 类前缀, 可选, 默认form
    cls: ['form-group-more'],   // 额外class类, 可选, 默认为空
    size: 'lg',                 // 尺寸, 可选, 默认false正常尺寸, lg大号, sm小号
    status: 'error',            // 校验状态, 可选, 默认false, success成功, warning警告, error错误
    feedback: {name: 'error'},  // 额外图标, 可选, 默认false, 配置后将使用icon组件渲染, 参数同con

    // label标签配置, 可选, 默认false不渲染, 可为label标签的配置对象
    label: {
      cls: ['control-label-more', 'col-xs-3'],
      html: '<strong>*</strong>',   // 内容html, 可选, 最先渲染
      text: 'Password',   // 内容文本, 可选, 最后渲染
    },

    // 控件配置, 必须, 默认类型text, input系列的type将使用input组件来渲染, 参数同input
    control: {
      type: 'password',
      id: 'password',
      name: 'Password',
      placeholder: 'Password',
      wrapper: ['col-xs-6'],  // 增加外层, 可选, 默认不增加, 一般用于栅栏结构布局
    },

    help: 'Please enter your password.',  // 帮助文本, 可选, 默认false, 可为字符串
  },
}
```

```html
<!-- 输出html结构 -->
<div class="form-group form-group-lg has-error has-feedback form-group-more">
  <label class="control-label control-label-more col-xs-3" for="password">
    <strong>*</strong>   <!-- 参数html的值 -->
    Password  <!-- 参数text的值 -->
  </label>
  <div class="col-xs-6">
    <input class="form-control" type="password" id="password" name="Password" placeholder="Password" />
    <i class="icon icon-error form-control-feedback" aria-hidden="true"></i>
  </div>
  <div class="help-block">Please enter your password.</div>
</div>
```

```js
// 参数说明
{
  // locals.form_group, 必须, 否则输出为空
  form_group: {
    // prefix: 'form',        // 类前缀, 可选, 默认form
    cls: ['form-group-more'], // 额外class类, 可选, 默认为空
    size: 'sm',               // 尺寸, 可选, 默认false正常尺寸, lg大号, sm小号
    status: 'warning',        // 校验状态, 可选, 默认false, success成功, warning警告, error错误
    // feedback: false,       // 额外图标, 可选, 默认false

    // label标签配置, 可选, 默认false不渲染, 可为label标签的配置对象
    label: {
      srOnly: true,         // 隐藏
      text: 'Remember me',
    },

    // 控件配置, 必须, 默认类型text, checkbox或radio将使用checkbox组件来渲染, 参数同checkbox
    control: {
      type: 'checkbox',
      name: 'remember',
      checked: true,

      // 增加外层, 可选, 默认不增加, 可为外层配置对象, 一般用于栅栏结构布局
      wrapper: {
        cls: ['col-xs-6', 'col-xs-push-3'],
      },
    },

    help: false,  // 帮助文本, 可选, 默认false
  },
}
```

```html
<!-- 输出html结构 -->
<div class="form-group form-group-sm has-warning form-group-more">
  <label class="control-label sr-only">Remember me</label>
  <div class="col-xs-6 col-xs-push-3">
    <input type="checkbox" name="remember" checked="checked"/>
  </div>
</div>
```

## Icon

文件上传按钮

```js
// 参数说明
{
  // locals.icon, 必须, 否则输出为空
  icon: {
    name: 'spinner',    // 图标名称, 必须, 会和prefix参数组合成图标识别类
    prefix: 'fa',       // 类前缀, 可选, 默认icon
    cls: ['fa-more'],   // 最外层额外class类, 可选, 默认为空
    // href: '',        // 设置链接地址, 可选, 空为i标签, 非空为a标签
    html: '<strong>带html的</strong>',  // 内容html, 可选, 最先渲染
    text: 'icon',       // 内容文本, 可选, 最后渲染
  },
}
```

```html
<!-- 输出html结构 -->
<i class="fa fa-spinner fa-more" aria-hidden="true">
  <strong>带html的</strong>   <!-- 参数html的值 -->
  icon  <!-- 参数text的值 -->
</i>
```

## Input

输入控件

```js
// 参数说明
{
  // locals.icon, 必须, 否则输出为空
  input: {
    // prefix: 'input',                   // 类前缀, 可选, 默认input
    size: 'lg',                           // 尺寸, 可选, 默认空
    // type: 'text',                      // 控件类型, 可选, 默认text文本输入框, password密码输入框, radio单选, checkbox复选, 更多请参阅html参考手册
    id: 'input',                          // id, 可选, 默认为空
    cls: ['form-control', 'input-more'],  // class类, 可选, 默认form-control, 覆盖形式
    name: 'name',                         // 键, 可选, 默认为空
    value: 'value',                       // 值, 可选, 默认为空
    placeholder: 'placeholder',           // 占位符, 可选, 默认为空
    // checked: false,                    // 选中状态, 用于单选和复选控件, 可选, 默认false
    readonly: true,                       // 只读状态, 可选, 默认false非只读
    disabled: true,                       // 禁用状态, 可选, 默认false非禁用
    required: true,                       // 必填项, 可选, 默认false非必填
    autofocus: true,                      // 自动获取焦点, 可选, 默认false非自动获取
    autocomplete: 'off',                  // 自动补全, 可选, 默认'on'自动补全
    // left: false,                       // 左侧附加组件, 可选, 默认false
    // right: false,                      // 右侧附加组件, 可选, 默认false
  },
}
```

```html
<!-- 输出html结构 -->
<input class="form-control input-more input-lg" type="text" id="input" name="name" value="value" placeholder="placeholder" readonly="readonly" disabled="disabled" required="required" autofocus="autofocus" autocomplete="off"/>
```

```js
// 参数说明
{
  // locals.icon, 必须, 否则输出为空
  input: {
    // prefix: 'input',                   // 类前缀, 可选, 默认input
    // size: '',                          // 尺寸, 可选, 默认空
    // type: 'text',                      // 控件类型, 可选, 默认text文本输入框, password密码输入框, radio单选, checkbox复选, 更多请参阅html参考手册
    // id: 'input',                       // id, 可选, 默认为空
    // cls: ['form-control'],             // class类, 可选, 默认form-control, 覆盖形式
    name: 'name',                         // 键, 可选, 默认为空
    value: 'value',                       // 值, 可选, 默认为空
    placeholder: 'placeholder',           // 占位符, 可选, 默认为空
    // checked: false,                    // 选中状态, 用于单选和复选控件, 可选, 默认false
    // readonly: false,                   // 只读状态, 可选, 默认false非只读
    // disabled: false,                   // 禁用状态, 可选, 默认false非禁用
    // required: false,                   // 必填项, 可选, 默认false非必填
    // autofocus: false,                  // 自动获取焦点, 可选, 默认false非自动获取
    // autocomplete: 'on',                // 自动补全, 可选, 默认'on'自动补全
    left: '@',                            // 左侧附加组件, 可选, 默认false, 可为html字符串
    right: {name: 'calendar'},            // 右侧附加组件, 可选, 默认false, 可为icon属性
  },
}
```

```html
<!-- 输出html结构 -->
<div class="input-group">
  <div class="input-group-addon">@</div>
  <input class="form-control" type="text" name="name" value="value" placeholder="placeholder"/>
  <div class="input-group-addon">
    <i class="icon icon-calendar" aria-hidden="true"></i>
  </div>
</div>
```

```js
// 参数说明
{
  // locals.icon, 必须, 否则输出为空
  input: {
    // prefix: 'input',                   // 类前缀, 可选, 默认input
    // size: '',                          // 尺寸, 可选, 默认空
    // type: 'text',                      // 控件类型, 可选, 默认text文本输入框, password密码输入框, radio单选, checkbox复选, 更多请参阅html参考手册
    // id: 'input',                       // id, 可选, 默认为空
    // cls: ['form-control'],             // class类, 可选, 默认form-control, 覆盖形式
    name: 'name',                         // 键, 可选, 默认为空
    value: 'value',                       // 值, 可选, 默认为空
    placeholder: 'placeholder',           // 占位符, 可选, 默认为空
    // checked: false,                    // 选中状态, 用于单选和复选控件, 可选, 默认false
    // readonly: false,                   // 只读状态, 可选, 默认false非只读
    // disabled: false,                   // 禁用状态, 可选, 默认false非禁用
    // required: false,                   // 必填项, 可选, 默认false非必填
    // autofocus: false,                  // 自动获取焦点, 可选, 默认false非自动获取
    // autocomplete: 'on',                // 自动补全, 可选, 默认'on'自动补全

    // 左侧附加组件, 可选, 默认false, 可为buttons和dropdown的数据
    left: [
      {
        type: 'button',
        style: 'default',
        text: 'left',
      },
    ],

    // 右侧附加组件, 可选, 默认false, 可为buttons和dropdown的数据
    right: {
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
    },

  },
}
```

```html
<!-- 输出html结构 -->
<div class="input-group">
  <div class="input-group-btn">
    <button class="btn btn-default" type="button">left</button>
  </div>
  <input class="form-control" type="text" name="name" value="value" placeholder="placeholder" />
  <div class="input-group-btn">
    <button class="btn btn-primary" type="button">right</button>
    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu dropdown-menu-right">
      <li class="dropdown-header">Dropdown header</li>
      <li><a href="javascript:;"><i class="icon icon-action" aria-hidden="true"></i>Action</a></li>
      <li><a href="javascript:;">Another action</a></li>
      <li><a href="javascript:;" target="_blank">Something else here</a></li>
      <li class="dropdown-divider" role="separator"></li>
      <li class="dropdown-header">Dropdown header</li>
      <li><a href="javascript:;">Separated link</a></li>
      <li class="disabled"><a href="javascript:;">Disabled link</a></li>
    </ul>
  </div>
</div>
```

## Menu

菜单

```js
// 参数说明
{
  // locals.menu, 必须, 否则输出为空
  menu: {
    cls: ['menu', 'menu-more'],   // 最外层class类, 可选, 默认menu, 覆盖形式
    arrow: ['icon-arrow-down'],   // 如果有下级菜单, 不展开情况下i标签图标的class类, 可选, 无默认值
    active_cls: ['active'],        // 当前菜单的class, 可选, 默认active
    activeId: 1,                  // 当前菜单的id标识, 可选, 无默认值
    depth: true,                  // 渲染从0开始的深度层级, 可选, 默认false

    // 如果默认的item结构不满足需求, 可以通过item回调自定义结构, 可选
    // item: (item, active, depth, i) => {
    //  console.log(item);
    //  console.log(active);
    //  console.log(depth);
    //  console.log(i);
    //  return `<a href="${item.url}" class="${active && 'active' || ''}" data-id="${item.id}" data-depth="${depth}"><i class="icon icon-${item.icon.name}"></i>${item.name}</a>`;
    // },

    // 菜单项, 必须, 否则输出为空
    items: [
      {
        id: 1,                    // id, 必须, 将与activeId匹配是否为当前菜单
        name: 'menu1',            // 名称, 必须
        url: '/menu1',            // url, 可选, 名称在此项有值时为a标签, 否则为span标签
        icon: ['icon-1'],         // 名称前的i标签图标class类
      },
      {
        id: 2,
        name: 'menu2',
        icon: ['icon-2'],
        children: [
          {
            id: 6,
            name: 'menu6',
            url: '/menu6',
          },
        ],
      },
    ...
    ],

  },
}
```

```html
<!-- 输出html结构 -->
<div class="menu menu-more">
  <div class="menu-scroller">
    <ul>
      <li class="active" data-id="1" data-depth="0">
        <div class="item">
          <i class="icon icon-home" aria-hidden="true"></i>
          <a href="/menu1">menu1</a>
        </div>
      </li>
      <li data-id="2" data-depth="0">
        <div class="item">
          <i class="icon-arrow-down"></i>
          <i class="icon icon-home" aria-hidden="true"></i>
          <span>menu2</span>
        </div>
        <ul>
          <li data-id="6" data-depth="1">
            <div class="item">
              <a href="/menu6">menu6</a>
            </div>
          </li>
        </ul>
      </li>
      ...
    </ul>
  </div>
</div>
```

## Modal

模态框

```js
// 参数说明
{
  // locals.modal, 必须, 否则输出为空
  modal: {
    // prefix: 'modal',   // 类前缀, 可选, 默认modal
    cls: ['modal-more'],  // 最外层额外class类, 可选, 默认为空
    // fade: true,        // 过渡效果, 可选, 默认true
    // size: 'sm',        // 尺寸, 可选, 默认尺寸为空, 大(lg), 小(sm)
    title: 'title',       // 标题, 可选, 默认空不显示, 非空显示
    // dismiss: true,     // 显示关闭按钮, 可选, 默认true显示, false不显示
    html: '<strong>带html的</strong>',  // 内容html, 可选, 最先渲染
    text: 'modal',        // 内容文本, 可选, 最后渲染

    // content区域的attributes配置, 可选, 默认div渲染, 若action和method设置了任意一个, 则为form表单渲染
    content: {
      action: '/route/to/submit',
      method: 'post',
    },

    // 尾部按钮区域, 可选, 数组中的每个对象对应一个button的配置
    buttons: [
      {style: 'default', text: '取消', autofocus: true, attributes: {'data-dismiss': 'modal'}},
      {style: 'primary', text: '提交', type: 'submit'},
    ],

  },
}
```

```html
<!-- 输出html结构 -->
<div class="modal fade modal-more">
  <div class="modal-dialog">
    <form class="modal-content" action="/route/to/submit" method="post">
      <fieldset>
        <div class="modal-header">
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4>title</h4>
        </div>
        <div class="modal-body">
          <strong>带html的</strong>   <!-- 参数html的值 -->
          modal   <!-- 参数text的值 -->
        </div>
        <div class="modal-footer">
          <button class="btn btn-default" type="button" autofocus="autofocus" data-dismiss="modal">取消</button>
          <button class="btn btn-primary" type="submit">提交</button>
        </div>
      </fieldset>
    </form>
  </div>
</div>
```

## Pagination

分页

```js
// 参数说明
{
  // locals.pagination, 必须, 否则输出为空
  pagination: {
    totalCount: 666,                                            // 总数据条数, 必须
    cls: ['pagination', 'pagination-more'],                     // 最外层class类, 可选, 默认pagination, 覆盖形式
    first_cls: ['first'],                                        // 第一页按钮样式类, 可选, 默认空
    last_cls: ['last'],                                          // 最后一页按钮样式类, 可选, 默认空
    prev_cls: ['prev'],                                          // 前一页按钮样式类, 可选, 默认空
    next_cls: ['next'],                                          // 下一页按钮样式类, 可选, 默认空
    page_cls: ['page'],                                          // 分页按钮样式类, 可选, 默认空
    // active_cls: ['active'],                                   // 激活样式类, 可选, 默认active
    // disabled_cls: ['disabled'],                               // 禁用样式类, 可选, 默认disabled
    first: 'first',                                             // 第一页按钮的文本, 可选, 默认为空, false不显示第一页按钮
    last: 'last',                                               // 最后一页按钮的文本, 可选, 默认为空, false不显示最后一页按钮
    prev: '«',                                                  // 前一页按钮的文本, 可选, 默认为空, false不显示前一页按钮
    next: '»',                                                  // 下一页按钮的文本, 可选, 默认为空, false不显示下一页按钮
    url: '/route/path?query=string&page=${page}&size=${size}',  // 跳转url, 可选, 默认javascript:;, 会自动替换${page}和${size}
    page: 10,                                                   // 当前页码, 可选, 默认1
    // size: 20,                                                // 每页数量, 可选, 默认20
    // max_button_count: 6,                                       // 最多显示页数, 可选, 默认6
    // hide_on_single_page: false,                                 // 只有一页时隐藏, 可选, 默认false不隐藏
    // disable_active_page_button: false,                          // 禁用当前页, 可选, 默认false不禁用
    ellipsis: '...',                                            // 是否省略显示第一页和最后一页的按钮, 可选, 默认不显示
  },
}
```

```html
<!-- 输出html结构 -->
<ul class="pagination pagination-more">
  <li class="first"><a href="/route/path?query=string&amp;page=1&amp;size=20">first</a></li>
  <li class="prev"><a href="/route/path?query=string&amp;page=9&amp;size=20">«</a></li>
  <li class="page"><a href="/route/path?query=string&amp;page=1&amp;size=20">1</a></li>     <!-- 通过参数ellipsis配置 -->
  <li><em>...</em></li>                                                                     <!-- 通过参数ellipsis配置 -->
  <li class="page"><a href="/route/path?query=string&amp;page=7&amp;size=20">7</a></li>
  <li class="page"><a href="/route/path?query=string&amp;page=8&amp;size=20">8</a></li>
  <li class="page"><a href="/route/path?query=string&amp;page=9&amp;size=20">9</a></li>
  <li class="page active"><span>10</span></li>
  <li class="page"><a href="/route/path?query=string&amp;page=11&amp;size=20">11</a></li>
  <li class="page"><a href="/route/path?query=string&amp;page=12&amp;size=20">12</a></li>
  <li><em>...</em></li>                                                                     <!-- 通过参数ellipsis配置 -->
  <li class="page"><a href="/route/path?query=string&amp;page=34&amp;size=20">34</a></li>   <!-- 通过参数ellipsis配置 -->
  <li class="next"><a href="/route/path?query=string&amp;page=11&amp;size=20">»</a></li>
  <li class="last"><a href="/route/path?query=string&amp;page=34&amp;size=20">last</a></li>
</ul>
```

## Select

下拉列表

```js
// 参数说明
{
  // locals.select, 必须, 否则输出为空
  select: {
    // fake: true,                          // 自定义下拉列表, 可选, 默认false原生, true自定义
    id: 'select-id',                        // id, 可选, 默认为空
    cls: ['form-control', 'select-more'],   // 额外class类, 可选, 默认为空
    name: 'select-name',                    // 键, 可选, 默认为空
    value: 1,                               // 值, 可选, 默认为空
    size: 'lg',                             // 尺寸, 可选, 默认为普通, lg大号, sm小号
    multiple: true,                         // 多选, 可选, 默认为false

    // 下拉选项, 可选, 默认空数组
    items: [
      {name: 'a', value: 0},
      {name: 'b', value: 1},
      {name: 'c', value: 2},
      {name: 'd', value: 3},
      {name: 'e', value: 4},
      {name: 'f', value: 5},
    ],

  },
}
```

```html
<!-- 输出html结构 -->
<select class="form-control select-more input-lg" id="select-id" name="select-name" multiple="multiple">
  <option value="0">a</option>
  <option value="1" selected="selected">b</option>
  <option value="2">c</option>
  <option value="3">d</option>
  <option value="4">e</option>
  <option value="5">f</option>
</select>
```

```js
// 参数说明
{
  // locals.select, 必须, 否则输出为空
  select: {
    fake: true,             // 自定义下拉列表, 可选, 默认false原生, true自定义
    id: 'select-id',        // id, 可选, 默认为空
    cls: ['select-more'],   // 额外class类, 可选, 默认为空
    name: 'select-name',    // 键, 可选, 默认为空
    value: 2,               // 值, 可选, 默认为空
    size: 'sm',             // 尺寸, 可选, 默认为普通, lg大号, sm小号
    multiple: true,         // 多选, 可选, 默认为false
    up: true,               // 向上弹出, 可选, 默认false向下弹出, 同dropdown
    align: 'right',         // 向右对齐, 可选, 默认为空向左对齐, 同dropdown

    // 下拉选项, 可选, 默认空数组
    items: [
      {name: '0值名称', value: 0},
      {name: '1值名称', value: 1},
      {name: '2值名称', value: 2},
      {name: '3值名称', value: 3},
      {name: '4值名称', value: 4},
      {name: '5值名称', value: 5},
    ],

  },
}
```

```html
<!-- 输出html结构 -->
<div class="dropup select select-more multiple">
  <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" id="select-id">
    <input type="hidden" name="select-name" value="2" />
    <strong></strong>
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu dropdown-menu-right">
    <li data-value="0">0值名称</li>
    <li data-value="1">1值名称</li>
    <li class="selected" data-value="2">2值名称</li>
    <li data-value="3">3值名称</li>
    <li class="disabled" data-value="4">4值名称</li>
    <li data-value="5">5值名称</li></ul>
</div>
```

## Table

表格

```js
// 参数说明
{
  // locals.table, 必须, 否则输出为空
  table: {
    // prefix: 'table',                 // 类前缀, 可选, 默认table
    cls: ['table-cls', 'table-more'],   // 最外层额外class类, 可选, 默认为空
    bordered: true,                     // 带边框的表格, 可选, 默认false, 为表格和其中的每个单元格增加边框
    condensed: true,                    // 紧缩表格, 可选, 默认false, 可以让表格更加紧凑, 单元格中的内补(padding)均会减半
    hover: true,                        // 鼠标悬停, 可选, 默认false, 可以让 <tbody> 中的每一行对鼠标悬停状态作出响应
    responsive: true,                   // 响应式表格, 可选, 默认false, 其会在小屏幕设备上(小于768px)水平滚动, 当屏幕大于 768px 宽度时, 水平滚动条消失
    striped: true,                      // 条纹状表格, 可选, 默认false, 可以给 <tbody> 之内的每一行增加斑马条纹样式
    title: 'title',                     // caption标题, 可选, 默认不渲染caption标签

    // 列设置, 必须
    columns: [
      {
        name: '#',                                                        // 列名称, 必须, 可以是回调形式
        key: (item, i, items) => i + 1,                                   // 对应行数据取值用到的key, 必须, 可以是回调形式
        width: '10%',                                                     // 列宽度, 可选, 默认自适应
        attributes: {class: ['index']},                                   // 列对应的数据单元格attributes设置, 可选
        item: (item, i, items) => {return {class: i == 0 && 'active'}},   // 本列下的数据单元格attributes设置, 可选, 可以是回调形式
      },
      {name: 'First Name', key: 'firstName', width: '30%', attributes: {class: ['first-name']}, item: (item, i) => {return {class: i == 2 && 'success'}}},
      {name: 'Last Name', key: 'lastName', width: '30%', attributes: {class: ['last-name']}, item: (item, i) => {return {class: i == 0 && 'info'}}},
      {name: 'Username', key: 'userName', width: '30%', attributes: {class: ['username']}, item: (item, i) => {return {class: i == 2 && 'danger'}}},
    ],

    // 行设置, 必须
    items: [
      {firstName: 'Mark', lastName: 'Otto', userName: '@mdo'},
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        userName: '@fat',
        attributes: {class: 'active'},  // 当前数据行attributes设置, 可选
      },
      {firstName: 'Larry', lastName: 'the Bird', userName: '@twitter'},
      ...
    ],

    // 空数据, 可选, 如不设置此值则则在空数据状态下不输出整个表格
    empty: {
      cls: ['empty'],
      text: 'No matched data',
    },

    // tfoot的html, 可选
    html: '<tr><td colspan="4">foot</td></tr>',

  },
}
```

```html
<!-- 输出html结构 -->
<div class="table-cls table-more table-responsive">
  <table class="table table-bordered table-condensed table-hover table-striped">
    <caption>title</caption>
    <thead>
      <tr>
        <th class="index" width="10%">#</th>
        <th class="first-name" width="30%">First Name</th>
        <th class="last-name" width="30%">Last Name</th>
        <th class="username" width="30%">Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="active">1</td>
        <td>Mark</td>
        <td class="info">Otto</td>
        <td>@mdo</td>
      </tr>
      <tr class="active">
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td class="success">Larry</td>
        <td>the Bird</td>
        <td class="danger">@twitter</td>
      </tr>
      ...
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4">foot</td>
      </tr>
    </tfoot>
  </table>
</div>
```

## Tree

树列表

```js
// 参数说明
{
  // locals.tree, 必须, 否则输出为空
  tree: {
    arrow: ['icon-arrow-down'],   // 如果有下级菜单, 不展开情况下i标签图标的class类, 可选, 无默认值
    active_cls: ['active'],        // 当前菜单的class, 可选, 默认active
    activeId: 1,                  // 当前菜单的id标识, 可选, 无默认值
    depth: true,                  // 渲染从0开始的深度层级, 可选, 默认false

    // 如果默认的item结构不满足需求, 可以通过item回调自定义结构, 可选
    // item: (item, active, depth, i) => {
    //  console.log(item);
    //  console.log(active);
    //  console.log(depth);
    //  console.log(i);
    //  return `<a href="${item.url}" class="${active && 'active' || ''}" data-id="${item.id}" data-depth="${depth}"><i class="icon icon-${item.icon.name}"></i>${item.name}</a>`;
    // },

    // 树列表项, 必须, 否则输出为空
    items: [
      {
        id: 1,                    // id, 必须, 将与activeId匹配是否为当前菜单
        name: 'menu1',            // 名称, 必须
        url: '/menu1',            // url, 可选, 名称在此项有值时为a标签, 否则为span标签
        icon: ['icon-1'],         // 名称前的i标签图标class类
      },
      {
        id: 2,
        name: 'menu2',
        icon: ['icon-2'],
        children: [
          {
            id: 6,
            name: 'menu6',
            url: '/menu6',
          },
        ],
      },
    ...
    ],

  },
}
```

```html
<!-- 输出html结构 -->
<ul>
  <li class="active" data-id="1" data-depth="0">
    <div class="item">
      <i class="icon icon-home" aria-hidden="true"></i>
      <a href="/menu1">menu1</a>
    </div>
  </li>
  <li data-id="2" data-depth="0">
    <div class="item">
      <i class="icon-arrow-down"></i>
      <i class="icon icon-home" aria-hidden="true"></i>
      <span>menu2</span>
    </div>
    <ul>
      <li data-id="6" data-depth="1">
        <div class="item">
          <a href="/menu6">menu6</a>
        </div>
      </li>
    </ul>
  </li>
  ...
</ul>
```

## License

MIT - [xiewulong](https://github.com/xiewulong)
