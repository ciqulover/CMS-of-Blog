
> A Blog CMS Powered By Vue.js

> 一个前端基于Vue.js，后端基于Node.js的博客内容管理器

> 此分支是Vue2.0版 [1.0版](https://github.com/ycwalker/CMS-of-Blog/tree/vue1.0)

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
│  .babelrc           babel配置
│  .editorconfig
│  .eslintignore  
│  .eslintrc.js       eslintrc配置
│  .gitignore
│  index.html         入口页面
│  package.json
│  README.md
│  setup.html         初始化账户页面
│  webpack.config.js  webpack配置
│
├─dist                打包生成
│     
├─server              服务端
│      api.js         Restful接口
│      db.js          数据库
│      index.js
│      init.json      初始数据
│
└─src
    │  main.js        项目入口
    │  setup.js       初始化账户
    │
    ├─assets          外部引用文件
    │  ├─css
    │  ├─fonts
    │  ├─img
    │  └─js         
    │
    ├─components      vue组件
    │  ├─back         博客控制台组件
    │  ├─front        博客页面组件
    │  └─share        公共组件
    │
    ├─router          路由
    │
    ├─store           vuex文件
    │
    └─style           全局样式
```


## Setup
####环境
* Node.js **v6**
* mongoDB [Download](https://www.mongodb.com/download-center?jmp=nav#community)
[安装方法](https://docs.mongodb.com/manual/installation/)

安装完成并建立数据库文件夹后，启动mongdb
``` bash
mongod
```

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
打包生成 (已经打包dist目录，可以省略)
```
npm run build
```
运行服务器
```
npm start
```
打开浏览器输入http://localhost:3000/
打开账户建立页面，建立完毕，登入管理器

开发
```
npm run dev
```
Eslint
```$xslt
npm run lint
```

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

## Licence
MIT
