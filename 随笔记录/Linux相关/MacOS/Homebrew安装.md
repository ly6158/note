### 1. 下载安装脚本
> https://raw.githubusercontent.com/Homebrew/install/master/install.sh

### 2. 代理打开全局模式

### 3. 替换源
```bash
# 替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
# 替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
# 应用生效
brew update
# 替换homebrew-bottles:
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

### 常用命令
```bash
查看homebrew版本
brew -v

查看已安装的包
brew list

安装包
brew install packageName

卸载包
brew uninstall packageName

查找包
brew search packageName

查看包信息
brew info packageName 

更新homebrew
brew update

诊断homebrew
brew doctor

查看帮助信息
brew -h
```

### 常见问题 & 解决方案
- 问题： fatal: Could not resolve HEAD to a revision
    - 解决： https://www.jianshu.com/p/b2de788c3c6d


### 参考链接
- https://zhuanlan.zhihu.com/p/89941189
- https://www.jianshu.com/p/c7c7aa34e579
- https://developer.aliyun.com/mirror/homebrew