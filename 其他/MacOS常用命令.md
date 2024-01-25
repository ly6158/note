# MacOS 常用命令

```bash
# Mac允许所有来源
sudo spctl --master-disable

# 调整每一行显示图标数量
defaults write com.apple.dock springboard-columns -int 10
# 调整每一列显示图标数量
defaults write com.apple.dock springboard-rows -int 7
# 重置Launchpad
defaults write com.apple.dock ResetLaunchPad -bool TRUE;killall Dock

# 强制使用核显
sudo pmset -a GPUSwitch 0
# 强制使用独显
sudo pmset -a GPUSwitch 1
# 自动切换显卡
sudo pmset -a GPUSwitch 2
```

## 常见问题 & 解决方案

### Mac 环境变量配错导致终端不能用解决方案

```bash
# 该方式只是保证命令行命令暂时能用
export PATH=/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin
```

### 更新 macOS catalina 出现 "已损坏,无法打开..." 解决方案

> [原文链接](https://www.macdu.org/24377.html)

- 1.打开终端

```bash
# xxxx.app为你的应用包名
sudo xattr -r -d com.apple.quarantine /Applications/xxxx.app
```

- 2.如第一种方案不可行
  - 重启电脑
  - 黑屏时 按住 command+R 进入恢复模式
  - 打开终端关闭 SIP
  - 建议用完之后打开 SIP

```bash
# 关闭SIP ：
csrutil disable
# 打开SIP：
csrutil enable
```
