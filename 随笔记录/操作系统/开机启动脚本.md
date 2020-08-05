### 先决条件
```bash
echo "给启动脚本授予权限"
chmod +x /etc/rc.d/rc.local
echo "启用脚本"
systemctl enable rc-local
```

### 添加开机启动脚本(root用户)
- 直接讲需要执行的命令加在/etc/rc.d/rc-local文件即可

### 添加开机启动脚本(普通用户)
```bash
echo "在当前用户目录下新建脚本文件(例如 startup.sh)"
touch startup.sh
echo "编辑startup.sh添加命令"
vim startup.sh
echo "授予可执行权限"
chmod +x startup.sh
echo "切换到root用户"
su
echo "修改/etc/rc.d/rc-local文件"
vim /etc/rc.d/rc-local文件

# 添加 su - user -c /home/user/run.sh
```

### 说明

```bash
# 如果想以某个非root用户运行脚本，可以使用如下命令
# su - 用户名 -c 执行文件路径
# 示例: su - git -c /home/git/startup.sh
```

### 脚本示例
```bash
# !/bin/sh
# chkconfig: 2345 80 90
# description:开机自动启动的脚本程序

# 下面写启动脚本

# 脚本第一行 “#!/bin/sh” 告诉系统使用的shell； 
# 脚本第二行 “#chkconfig: 2345 80 90” 表示在2/3/4/5运行级别启动，启动序号(S80)，关闭序号(K90)； 
# 脚本第三行 表示的是服务的描述信息
```

> `注意`： 第二行和第三行必写，否则会出现如“服务 autostart.sh 不支持 chkconfig”这样的错误