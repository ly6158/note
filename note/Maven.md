##### maven 安装配置

- 下载: http://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.0/binaries/apache-maven-3.6.0-bin.tar.gz
- 解压
- 配置
	- 打开conf/setting.xml
	- 修改阿里云镜像
	- 修改本地仓库路径

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