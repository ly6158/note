[adb常用命令](../Linux相关/adb常用命令.md)

### MIUI12.5 精简列表
```bash
# 广告程序
adb shell pm uninstall --user 0 com.miui.systemAdSolution
# 小米广告分析
adb shell pm uninstall --user 0 com.miui.analytics
# 快应用服务框架
adb shell pm uninstall --user 0 com.miui.hybrid.accessory
adb shell pm uninstall --user 0 com.miui.hybrid
# 小爱同学
adb shell pm uninstall --user 0 com.miui.voiceassist
adb shell pm uninstall --user 0 com.miui.voicetrigger
# 小米收音机
adb shell pm uninstall --user 0 com.miui.fm
adb shell pm uninstall --user 0 com.miui.fmservice
# 小米浏览器
adb shell pm uninstall --user 0 com.android.browser
# 用户字典
adb shell pm uninstall --user 0 com.android.providers.userdictionary
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
# 小米钱包
adb shell pm uninstall --user 0 com.mipay.wallet
# 用户反馈
adb shell pm uninstall --user 0 com.miui.bugreport
# 传送门
adb shell pm uninstall --user 0 com.miui.contentextension
# 小米闻声
adb shell pm uninstall --user 0 com.miui.accessibility
# 智能助理
adb shell pm uninstall --user 0 com.miui.personalassistant
# AI虚拟助手
adb shell pm uninstall --user 0 com.xiaomi.aiasst.service
# 小米悬浮球
adb shell pm uninstall --user 0 com.miui.touchassistant
# 桌面搜索框
adb shell pm uninstall --user 0 com.android.quicksearchbox
# AI工具箱
adb shell pm uninstall --user 0 com.xiaomi.aiasst.vision
# 小米画报
adb shell pm uninstall --user 0 com.mfashiongallery.emag

```

### 
```bash
# 相册
adb shell pm uninstall --user 0 com.miui.gallery
adb shell pm uninstall --user 0 com.android.wallpaper

# 小米音乐
adb shell pm uninstall --user 0 com.miui.player

# 小米视频
adb shell pm uninstall --user 0 com.miui.video
```

### 禁用列表
```bash
# 主题管理
adb shell pm disable-user com.android.thememanager

# 软件名称后续整理
adb shell pm disable-user com.miui.aod
adb shell pm disable-user com.android.keychain
```
### 不可以删除列表(会卡米)
```bash
# 系统服务组件
com.miui.securityadd
# 应用包管理组件
com.miui.packageinstaller
```