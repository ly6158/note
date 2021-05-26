[adb常用命令](../Linux相关/adb常用命令.md)

### MIUI12 精简列表
```bash
# 广告程序
adb shell pm uninstall --user 0 com.miui.systemAdSolution
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
# 小米视频
adb shell pm uninstall --user 0 com.miui.video
# 未知 (删除未出现问题)
adb shell pm uninstall --user 0 com.miui.xman
adb shell pm uninstall --user 0 com.miui.yman

# 软件名称后续整理 (删除未出现问题)
adb shell pm uninstall --user 0 com.miui.analytics
adb shell pm uninstall --user 0 com.miui.daemon
adb shell pm uninstall --user 0 com.android.dreams.basic
adb shell pm uninstall --user 0 com.miui.miservice
adb shell pm uninstall --user 0 com.android.internal.systemui.navbar.twobutton
adb shell pm uninstall --user 0 com.android.internal.systemui.navbar.threebutton
adb shell pm uninstall --user 0 com.android.internal.display.cutout.emulation.corner
adb shell pm uninstall --user 0 com.android.internal.display.cutout.emulation.double
adb shell pm uninstall --user 0 com.android.internal.display.cutout.emulation.tall
adb shell pm uninstall --user 0 com.android.theme.icon_pack.rounded.systemui
adb shell pm uninstall --user 0 com.android.theme.icon_pack.rounded.android
adb shell pm uninstall --user 0 com.android.theme.icon_pack.rounded.launcher
adb shell pm uninstall --user 0 com.android.theme.icon_pack.rounded.settings
adb shell pm uninstall --user 0 com.miui.backup
adb shell pm uninstall --user 0 com.miui.phrase
adb shell pm uninstall --user 0 com.android.printspooler
adb shell pm uninstall --user 0 com.miui.misound
adb shell pm uninstall --user 0 com.android.managedprovisioning
adb shell pm uninstall --user 0 com.android.emergency
adb shell pm uninstall --user 0 com.android.bips
adb shell pm uninstall --user 0 com.android.traceur
adb shell pm uninstall --user 0 com.miui.mishare.connectivity
adb shell pm uninstall --user 0 com.xiaomi.xmsf
adb shell pm uninstall --user 0 com.xiaomi.mi_connect_service
adb shell pm uninstall --user 0 com.miui.contentextension
adb shell pm uninstall --user 0 com.miui.cloudbackup
adb shell pm uninstall --user 0 com.miui.personalassistant
adb shell pm uninstall --user 0 com.android.calllogbackup
adb shell pm uninstall --user 0 com.miui.touchassistant
adb shell pm uninstall --user 0 com.android.wallpaper
adb shell pm uninstall --user 0 com.mipay.wallet
adb shell pm uninstall --user 0 com.miui.gallery
```

### 禁用列表
```bash
# 桌面搜索框
adb shell pm disable-user com.android.quicksearchbox
# 主题管理
adb shell pm disable-user com.android.thememanager

# 软件名称后续整理
adb shell pm disable-user com.miui.aod
adb shell pm disable-user com.android.keychain
```
