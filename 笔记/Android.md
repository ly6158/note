#### 生成签名秘钥
```bash
$ keytool -genkey -v -keystore wintime.keystore -alias wintime -keyalg RSA -keysize 2048 -validity 10000
```

#### 修改App名称
- 打开 项目目录/android/app/src/main/res/values/strings.xml 文件
- <string name="app_name">APP的显示名称</string>

#### 软件Logo路径
> 项目目录/android/app/src/main/res

#### 打包命令
```bash
$ cd android && ./gradlew assembleRelease
```
> 生成的APK文件位于android/app/build/outputs/apk/app-release.apk

#### 遇到问题 && 解决方案
- NDK is missing a "platforms" directory.
> 解决:下载对应ndk放入android/sdk目录下

- Couldn't follow symbolic link
> 解决:删除node_modules,重新npm install

- command not found: adb

>- 安装 Android Studio , SDK
>- 配置 环境变量 在用户配置文件加入以下配置

```bash
export ANDROID_HOME=/Users/liuyang/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```