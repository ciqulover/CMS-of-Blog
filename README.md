
> A Blog CMS Powered By Vue.js

> 一个前端基于Vue.js，后端基于Node.js的博客内容管理器

> 此分支是Vue2.0版, 1.0版在[这里](https://github.com/ycwalker/CMS-of-Blog/tree/vue1.0)

### [Demo](http://115.28.90.175/)

## Features

* 支持MarkDown编辑
* 支持代码高亮
* 博客页面对移动端优化

###### 前端：Vue.js2.0
* Vue.js
* Vue-Router
* Vuex
* Vue-resource

###### 后端
* Node.js
* mongoDB (mongoose)
* Express

###### 工具和语言
* Webpack
* ES6
* SASS

## Directory
```
dist/                 打包后生成

server/               后端
  api.js              Restful接口
  db.js               数据库
  index.js            服务器入口
  init.json           初始数据

src/
  assets/             外部引用文件
  components/         vue组件
    back/             博客控制台组件
    front/            博客页面组件
    share/            公共组件
    StyleInjector.vue 注入style
  router/             路由
  store/              vuex文件
  style/              全局样式
  main.js             项目入口文件
  setup.js            初始化账户

index.html            单页应用

setup.html            初始化账户页面

.babelrc              babel配置

webpack.config.js     webpack配置
```

## Setup
####环境
* Node.js **v6+**
* mongoDB [Download](https://www.mongodb.com/download-center?jmp=nav#community)mongoDB安装完成，建立数据库文件夹。以win平台为例，在C盘下新建data文件夹，进入data文件夹新建db文件夹（这是mongoDB启动时默认的数据存储目录，如果建立在其他盘上，需要在启动时通过--dbpath参数指定目录。注意mongoDB不会自动创建这个目录，如果没有目录启动时会错误）
                                                                               进入mongoDB的安装目录，一般在C:\Program Files\MongoDB\Server\3.2\bin（因版本而异）
                                                                               进入bin目录后，从终端启动目录下的mongod.exe（win可以按住shift右击空白处从当前目录打开命令行）
```
.\mongod.exe
```
可以在控制台看到waiting for connections on port 27017

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
运行服务器
```
npm run server
```
打开浏览器输入http://localhost:3000/
打开账户建立页面，建立完毕，登入管理器

##### Notice
* server目录下的init.json，初始化数据放在该文件中。
* 推荐[MongoChef](http://3t.io/mongochef/)作为mongoDB可视化管理工具

## Todo

* [ ] 移动端适配
  * [x] 博客前台页面
  * [ ] 博客内容管理
* [ ] Vue2.0服务端渲染(SSR)
* [ ] 博客内容相关
  * [ ] 博客统计
  * [ ] 主题设置
  * [x] 密码修改
  * [ ] 博客简介主页
