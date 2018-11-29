## parse-json
* node parse-json.js -f my.json
* 命令行参数可以从 process.argv数组中得到。这个数组都是运行命令时传给shell的字符串。
* -- 表示后面是参数的全名  - 表示后面是代表参数的一个字母 。比如 npm 命令的 -h 和 --help
* yargs
* mississipip
* 管道技术是连接命令行程序的主要办法。管道能将一个程序的stdout附着到另一个进程的stdin流上,是进程间通信的中间组件。在Node中,stdin是可读流,可以通过process.stdin访问。下面这条命令就是解析来自 stdin的JSON的：echo "[1,2,3]" | parse-json -f -