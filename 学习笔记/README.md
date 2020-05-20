### 其他 && 待分类

### react-native run-android报错
> Failed to install the following Android SDK packages as some licences have not been accepted.
- 解决方案:
	- 进入android/sdk/tools/bin
	- ./sdkmanager --licenses
	- 一直 y

### Docker安装oracle
> docker run --privileged --name oracle11g -m 160 -c 1 -p 1521:1521 -v /root/software/oracle:/install jaspeen/oracle-11g