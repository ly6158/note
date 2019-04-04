### 常用命令

##### 安装Oracle驱动包
```bash
$ mvn install:install-file -DgroupId=com.oracle -DartifactId=jdbc8 -Dversion=12.2.0.1 -Dpackaging=jar -Dfile=/Users/liuyang/tools/jar/jdbc8-12.2.0.1.jar
```

##### 更新依赖包
```bash
$ mvn clean install
```

### 常见问题 & 解决方案
- SpringBoot controller返回中文乱码

```java
// 加上 produces = { "application/json;charset=UTF-8" }
@RequestMapping(value = "/example", produces = "application/json;charset=UTF-8") 
```