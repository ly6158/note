#### 下载 && 安装
[官网地址 & 下载完双击安装](https://developer.android.google.cn/studio/)

#### 环境配置

> Configure -> SDK Manager


```

### 安卓root卸载系统自带软件

#### 安卓手机操作
[下载安卓命令行工具](../file/AndroidTerm.apk)

```bash
# 获取root权限
su
# 卸载软件
pm uninstall --user 0 com.miui.systemAdSolution

```
#### 电脑操作
```bash
# adb命令行
adb shell pm uninstall --user 0 com.xiaomi.gamecenter
```
