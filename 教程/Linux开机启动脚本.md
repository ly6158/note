1. 进入脚本目录

```bash
$ cd /etc/rc.d/init.d/
```

2. 新建脚本

```bash
$ vi autostart.sh

# !/bin/sh
# chkconfig: 2345 80 90
# description:开机自动启动的脚本程序

# 脚本第一行 “#!/bin/sh” 告诉系统使用的shell； 
# 脚本第二行 “#chkconfig: 2345 80 90” 表示在2/3/4/5运行级别启动，启动序号(S80)，关闭序号(K90)； 
# 脚本第三行 表示的是服务的描述信息

# 下面写启动脚本

```
> `注意`： 第二行和第三行必写，否则会出现如“服务 autostart.sh 不支持 chkconfig”这样的错误

3. 给脚本赋可执行权限

```bash
$ chmod +x autostart.sh
```

4. 添加脚本到开机自动启动项目中

```bash
$ chkconfig --add autostart.sh
$ chkconfig autostart.sh on
```