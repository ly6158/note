### 常见问题以及解决方案

#### Failed to install the following Android SDK packages as some licences have not been accepted.
- 进入 android/sdk/tools/bin 目录
- 执行 ./sdkmanager --licenses

### Android 10以上支持 http
- 进入 android/app/src/main 
- 修改 AndroidManifest.xml 文件
- 在 application 节点下添加 android:usesCleartextTraffic="true"
