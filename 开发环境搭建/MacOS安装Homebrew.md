# Mac OS 安装 HomeBrew

## 1. 有梯子安装

- 浏览器打开 https://raw.githubusercontent.com/Homebrew/install/master/install.sh
- 保存为 brew.sh 并替换文件内源地址
  - HOMEBREW_BREW_DEFAULT_GIT_REMOTE="git://mirrors.ustc.edu.cn/brew.git"
  - HOMEBREW_CORE_DEFAULT_GIT_REMOTE="git://mirrors.ustc.edu.cn/homebrew-core.git"
- 授予可执行文件权限 chmod +x brew.sh
- 执行安装 ./brew.sh

## 切换镜像源 [淘宝源](https://developer.aliyun.com/mirror/homebrew)

## 2. [无梯子安装](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

## 常见问题 & 解决方案

- 问题： fatal: Could not resolve HEAD to a revision
  - 解决： https://www.jianshu.com/p/b2de788c3c6d

## 参考链接

- https://zhuanlan.zhihu.com/p/89941189
- https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/
