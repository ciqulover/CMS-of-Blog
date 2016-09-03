
> A Blog CMS Powered By Vue.js

> 一个前端基于Vue.js，后端基于Node.js的博客内容管理器

### [Demo](http://115.28.90.175:90/#!/)
### 登陆地址在Demo页面最下方

## Features
###### 前端：Vue全家桶
* Vue.js
* Vue-Cli
* Vue-Resource
* Vue-Validator
* Vue-Router
* Vuex
* Vue-loader

###### 后端
* Node.js
* mongoDB (mongoose)
* Express

###### 工具和语言
* Webpack
* ES6
* SASS
* Jade

### 本地测试
* 确保已有node环境
* 安装mongoDB
以win平台为例，在C盘下新建data文件夹，进入data文件夹新建db文件夹（这是mongoDB启动时默认的数据存储目录，也可以通过--dbpath参数指定目录）
进入MongoDB\Server\3.2\bin（因版本而异）目录
并从终端启动目录下的mongod.exe
```
.\mongod.exe
```
在控制台看到waiting for connections on port 27017表示OK

克隆远程库
```
git clone https://github.com/ycwalker/CMS-of-Blog.git
```
进入项目目录
```
cd CMS-of-Blog
```
安装依赖
```
npm install
```
进入服务器所在文件夹并运行服务器
```
cd server
node www
```
打开浏览器输入http://localhost:3000/
如果一切OK，则进入博客的归档页面，登陆按钮在最下方。
