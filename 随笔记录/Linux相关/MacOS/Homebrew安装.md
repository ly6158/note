### 1. 下载安装脚本
> https://raw.githubusercontent.com/Homebrew/install/master/install.sh

### 2. 修改脚本
```bash
默认
#BREW_REPO = "https://github.com/Homebrew/brew"
修改为
BREW_REPO = "git://mirrors.ustc.edu.cn/brew.git"
```

### 3. 执行安装
> 卡在 Cloning into ‘/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core’…时取消


### 4. 单独下载core
```bash
git clone git://mirrors.ustc.edu.cn/homebrew-core.git/ /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core --depth=1
```

### 5. 替换源

```bash
# 替换homebrew默认源
cd "$(brew --repo)"
git remote set-url origin git://mirrors.ustc.edu.cn/brew.git

# 替换homebrew-core源
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git
```

### 6. 更新测试
```bash
brew update
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


### 参考链接
- https://zhuanlan.zhihu.com/p/89941189
- https://www.jianshu.com/p/c7c7aa34e579
