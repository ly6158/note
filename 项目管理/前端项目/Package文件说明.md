# package.json 文件配置说明

## 配置

```json
{
  // 应用程序/软件包的名称 小于214个字符 且不能包含空格，只能包含小写字母、连字符（-）或下划线（_）
  "name": "project_name",
  // 作者名称 也支持字符串
  "author": {
    "name": "作者名称",
    "email": "",
    "url": ""
  },
  // 贡献者列表 一个或多个贡献者 也可以是对象形式 参照auther
  "contributors": [],
  // 链接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面。
  "bugs": "https://github.com/project_name/issues",
  // 应用程序/软件包主页
  "homepage": "https://project_url.cn",
  // 当前的版本 主版本号.次版本号.补丁版本号
  "version": "1.0.0",
  // 指定软件包的许可证。
  "license": "MIT",
  // 应用程序/软件包的简短描述
  "description": "",
  // 应用程序/软件包的入口文件
  "main": "src/main.js",
  // 是否私有,为true时不允许发布到npm
  "private": true,
  // 应用程序/软件包功能相关的关键字
  "keywords": ["关键字"],
  // 指定了应用程序/软件包的仓库地址
  "repository": {
    "type": "git",
    "url": "github:project_name"
  },
  // 可以运行的node脚本列表 通过 npm run dev 执行
  "scripts": {
    "dev": "webpack-dev-server"
  },
  // 生产环境需要的依赖
  "dependencies": {
    "vue": "^2.6.2"
  },
  // 开发环境需要的依赖
  "devDependencies": {
    "webpack": "^5.0.0"
  },
  // 指定node版本号
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  // 说明需要支持的浏览器以及版本
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
```

## 语义说明

## 参考地址

- <http://nodejs.cn/learn/the-package-json-guide>
- <http://nodejs.cn/learn/semantic-versioning-using-npm>
