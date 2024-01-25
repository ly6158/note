# MIUI12.5.6 精简列表

```bash
# 广告程序
adb shell pm uninstall --user 0 com.miui.systemAdSolution
# 小米广告分析
adb shell pm uninstall --user 0 com.miui.analytics
# 快应用服务框架
adb shell pm uninstall --user 0 com.miui.hybrid.accessory
adb shell pm uninstall --user 0 com.miui.hybrid
# 小米收音机
adb shell pm uninstall --user 0 com.miui.fmservice
# 小米浏览器
adb shell pm uninstall --user 0 com.android.browser
# 米币支付
adb shell pm uninstall --user 0 com.xiaomi.payment
# 游戏中心服务组件
adb shell pm uninstall --user 0 com.xiaomi.gamecenter.sdk.service
# 安卓书签
adb shell pm uninstall --user 0 com.android.bookmarkprovider
# 内容中心
adb shell pm uninstall --user 0 com.miui.newhome
# 服务与反馈
adb shell pm uninstall --user 0 com.miui.miservice
# 生活黄页
adb shell pm uninstall --user 0 com.miui.yellowpage
# 用户反馈
adb shell pm uninstall --user 0 com.miui.bugreport
# 传送门
adb shell pm uninstall --user 0 com.miui.contentextension
# 小米闻声
adb shell pm uninstall --user 0 com.miui.accessibility
# 智能助理
adb shell pm uninstall --user 0 com.miui.personalassistant
# 桌面搜索框
adb shell pm uninstall --user 0 com.android.quicksearchbox
# 小米商城系统组件
adb shell pm uninstall --user 0 com.xiaomi.ab
# 常用语
adb shell pm uninstall --user 0 com.miui.phrase
# 系统跟踪
adb shell pm uninstall --user 0 com.android.traceur
# 运动计步
adb shell pm uninstall --user 0 com.xiaomi.joyose
# 用户信息收集
adb shell pm uninstall --user 0 com.miui.daemon
# 游戏高能时刻
adb shell pm uninstall --user 0 com.xiaomi.migameservice
# 游戏网络加速
adb shell pm uninstall --user 0 com.miui.vpnsdkmanager
```

## 不可以删除列表

```bash
# 手机管家
com.miui.securitycenter
# 系统服务组件
com.miui.securityadd
# 应用包管理组件
com.miui.packageinstaller
```

[adb 常用命令](./MacOS ADB 常用命令.md)
