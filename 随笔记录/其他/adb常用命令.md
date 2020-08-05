### 手机端卸载预装软件
[安卓手机命令行工具](../../文件分享/AndroidTerm.apk)
```bash
# 获取root权限 (如果有)
su
# 卸载软件
pm uninstall --user 0 软件包名
```

### 电脑端卸载手机预装软件
```bash
# 查看已连接设备
adb devices
# 查看自带软件列表
adb shell pm list packages -f
# adb命令行
adb shell pm uninstall --user 0 软件包名
# 禁用软件
adb shell pm disable-user 软件包名
# 启用软件
adb shell pm enable 软件包名
```