### 下载直接解压
```
# 下载maven包
wget http://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.0/binaries/apache-maven-3.6.0-bin.tar.gz
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
<localRepository>/.../maven-repository</localRepository>
```

```bash
# Maven环境变量配置
export MAVEN_HOME=/...解压路径/apache-maven-3.6.3
export PATH=$PATH:$MAVEN_HOME/bin
```