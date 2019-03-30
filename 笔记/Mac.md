### 常用命令

##### Mac允许所有来源
```bash
$ sudo spctl --master-disable
```

##### Mac调整启动台应用图标大小

```bash
# 调整每一行显示图标数量
$ defaults write com.apple.dock springboard-columns -int 10

# 调整每一列显示图标数量
$ defaults write com.apple.dock springboard-rows -int 7

# 重置Launchpad
$ defaults write com.apple.dock ResetLaunchPad -bool TRUE;killall Dock
```


### 常见问题 & 解决方案

##### Mac环境变量配错导致终端不能用解决方案
```bash
$ export PATH=/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin
```
> 该方式只是保证命令行命令暂时能用