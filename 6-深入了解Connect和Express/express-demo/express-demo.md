# API路由
* GET /api/entries 获取条目列表
* GET /api/entries/page  获取单页条目
* POST /api/entry  创建新的留言条目
# Web UI路由
* GET /post  显示创建新的条目的表单
* POST /post 提交新的条目
* GET /register 显示注册表单
* POST  /register  创建新的用户账号
* GET /login  显示登录表单
* POST /login  登录
* GET /logout 退出


* 视图缓存 在生产环境中,view cache是默认开启的,以防止后续的render()从硬盘中读取模板文件。因为模板文件的内容会被放到内存中,所以性能会得到显著提升。但启用这个配置项后只有重启服务器才能让模板文件的编辑生效,所以在开发时会禁用它。
* 用添加子目录的办法可以出掉模板文件名称中冗余部分。
#### 将数据传递给视图的办法
* 作为res.render()的参数。此外,还可以在路由处理器之前的中间件中的设定一些变量,比如用 app.locals  传递程序层面的数据,用res.locals传递请求层面的数据。
* 将变量直接作为res.render()的参数优先级最高,要高于在res.locals和app.locals中设定的变量值。
* 默认情况下,Express只会向视图中传递一个程序级别变量———— setting,这个对象中包含所有用 app.set()设定的值。比如 app.set('title','My Application')会把 setting.tittle输出模板中。