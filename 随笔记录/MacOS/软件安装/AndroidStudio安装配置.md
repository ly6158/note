### 下载 && 安装 Android Studio
[官网地址 & 下载完双击安装](https://developer.android.google.cn/studio/)

### 环境配置(下载 SDK & NDK)
> Configure --> SDK Manager --> 下载sdk

### 安卓环境变量配置 (以OS X系统为例)
```bash
# 打开用户终端配置文件 (.bash_profile/.zshrc)
export ANDROID_HOME=/SDK下载路径
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```