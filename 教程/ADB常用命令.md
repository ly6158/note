#### 下载 && 安装 Android Studio
[官网地址 & 下载完双击安装](https://developer.android.google.cn/studio/)

#### 环境配置(下载 SDK & NDK)
> Configure -> SDK Manager

#### 卸载手机软件
##### 安卓手机操作
```bash
# 获取root权限
su
# 卸载软件
pm uninstall --user 0 com.miui.systemAdSolution
```
##### 电脑操作
```bash
# adb命令行
adb shell pm uninstall --user 0 com.miui.systemAdSolution
# 查看自带软件列表
adb shell pm list packages -f
# 禁用软件
adb shell pm disable-user com.miui.systemAdSolution
# 启用软件
adb shell pm enable com.miui.systemAdSolution
```

### 软件推荐
[安卓手机命令行工具](../file/AndroidTerm.apk)