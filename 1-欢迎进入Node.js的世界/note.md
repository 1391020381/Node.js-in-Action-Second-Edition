# 非阻塞 I/O
* 事件、异步API、非阻塞I/0
# 事件轮询 

# ES2015、Node和V8
* http://node.green 上汇总了Node支持的ES2015特性。
* libuv,它是负责处理I/0的。V8负责JavaScript代码的解释和执行。用C++绑定层可将libuv和V8结合起来。
* 使用特性组  shipping staged in progress
* 了解Node的发布计划
* 安装Node
# Node自带的工具
* npm
* 核心模块
1. 文件系统
2. 网络模块
3. 调试器
* node --inspect-brk debug-demo.js
# 三种主流的Node程序  
1. Web应用程序
* 提供单页面应用的简单程序
* REST微服务以及全栈的Web应用都属于Web应用程序
2. 命令行工具和后台程序
* npm 、Gulp、Webpack
* node cli.js  a b c 在cli中可以通过 process.argv获取 a b c参数数组
* Node命令行程序还可以做其他事情。如果在程序开头的地方加上#!,并赋予其执行许可(chmod + x cli.js),shell就可以砸调用程序时使用Node。也就是说可以像运行其他shell脚本那样运行Node程序。在类Unix系统中用下面这样的代码。
```
#!/usr/bin/env node
```

* 这样你就可以用Node代替shell脚本。也就是说Node可以跟其他任何命令行工具配合,包括后台程序。Node程序可以由cron调用,也可以作为后台程序运行。
* PM2进程管理器<后台程序>
1. 桌面程序
* Electron

# 总结
1. Node是用来搭建JavaScript应用程序的平台,有基于事件和非阻塞的特性
2. V8被用作JavaScript运行时
3. libuv是提供快速、跨平台、非阻塞 I/o的本地库
4. 被称为核心模块的Node标准库很精巧,为JavaScript添加了磁盘I/O
5. Node自带了一个调试器和一个依赖管理器(npm)
6. Node可以用于搭建Web应用程序、命令行工具、甚至桌面程序。
