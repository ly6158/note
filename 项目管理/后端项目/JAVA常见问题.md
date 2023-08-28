# JAVA 问题记录

## SpringBoot controller 返回中文乱码

```java
// 加上 produces = { "application/json;charset=UTF-8" }
@RequestMapping(value = "/example", produces = "application/json;charset=UTF-8")
```

## Maven 仓库没有 Oracle 包

```bash
mvn install:install-file -DgroupId=com.oracle -DartifactId=jdbc8 -Dversion=12.2.0.1 -Dpackaging=jar -Dfile=/...路径/jar/jdbc8-12.2.0.1.jar
```
