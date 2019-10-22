## 随记

### Linux相关

#### 常用
```bash
# SSH记住登录凭证
$ ssh-copy-id -i ~/.ssh/id_rsa.pub root@ip

# SSH清除连接认证
$ ssh-keygen -R 118.24.158.145

查看应用进程 (tomcat为例)
$ ps -ef |grep tomcat

# 作为服务启动 (tomcat为例)
$ nohup ./startup.sh > ../logs/catalina.out 2>&1 &

# 动态查看日志
$ tail -f catalina.out

```

#### Linux防火墙相关
```bash
# 防火墙添加端口 以端口3000为例
$ sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent


# 防火墙配置文件
$ vim /etc/sysconfig/iptables

# 重启防火墙
$ /etc/init.d/iptables restart
$ sudo firewall-cmd --reload

```

#### Linux添加开机启动项
```bash
# 添加开机启动
$ vim /etc/rc.d/rc.local

# 添加启动脚本

# 赋予权限
$ chmod +x /etc/rc.d/rc.local
```

---

### Java相关

```java
// SpringBoot controller返回中文乱码 
// 加上 produces = { "application/json;charset=UTF-8" }
@RequestMapping(value = "/example", produces = "application/json;charset=UTF-8") 
```

---

### Git相关

#### Git仓库clone太慢
> 走Shadowsocks代理方式

```bash
# win系统默认本地代理端口为1080 mac为1086
git config --global http.proxy 'socks5://127.0.0.1:1086'
git config --global https.proxy 'socks5://127.0.0.1:1086'
# 清除配置 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

#### git中文文件名 乱码
> git 默认中文文件名是 \xxx\xxx 等八进制形式 
```bash
# 关闭对0x80以上的字符进行quote
git config core.quotepath false
```

---

### MAC相关

```bash

# Mac允许所有来源
$ sudo spctl --master-disable

# 调整每一行显示图标数量
$ defaults write com.apple.dock springboard-columns -int 10

# 调整每一列显示图标数量
$ defaults write com.apple.dock springboard-rows -int 7

# 重置Launchpad
$ defaults write com.apple.dock ResetLaunchPad -bool TRUE;killall Dock
```

```bash
# Mac环境变量配错导致终端不能用解决方案
$ export PATH=/usr/bin:/usr/sbin:/bin:/sbin:/usr/X11R6/bin
```
> 该方式只是保证命令行命令暂时能用
>
#### 跟新 macOS catalina出现 "已损坏,无法打开..." 解决方案
> [原文链接](https://www.macdu.org/24377.html)
>
- 1.打开终端 
```bash
# xxxx.app为你的应用包名
sudo xattr -r -d com.apple.quarantine /Applications/xxxx.app
```

- 2.如第一种方案不可行
    - 重启电脑
    - 黑屏时 按住 command+R 进入恢复模式
    - 打开终端关闭SIP
    - 建议用完之后打开SIP
    
```bash
# 关闭SIP ：
csrutil disable
# 打开SIP：
csrutil enable
```


---

### Maven相关

```
# 下载maven包
# http://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.0/binaries/apache-maven-3.6.0-bin.tar.gz

# 配置 conf/setting.xml
```

```xml
<!-- 修改阿里云镜像 -->
<mirror>
  <id>alimaven</id>
  <name>aliyun maven</name>
  <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
  <mirrorOf>central</mirrorOf>        
</mirror>
<!-- 修改本地仓库路径 -->
<localRepository>/Users/liuyang/tools/maven-repository</localRepository>
```

```bash
# 安装Oracle驱动包
$ mvn install:install-file -DgroupId=com.oracle -DartifactId=jdbc8 -Dversion=12.2.0.1 -Dpackaging=jar -Dfile=/Users/liuyang/tools/jar/jdbc8-12.2.0.1.jar

# java打包 & 更新依赖
mvn clean install
```

---

### IOS & Android & ReactNative

```bash
# 安卓环境变量配置
export ANDROID_HOME=/Users/liuyang/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```


### 安卓root卸载系统自带软件

#### 安卓手机操作
[下载安卓命令行工具](./file/AndroidTerm.apk)

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
