### 笔记

##### > >> <区别
```text
> 追加输出到文件(会覆盖原有文件)
>> 追加输出到文件(在原有内容底部追加)
< 
```
---

### 常用命令

#### 1.防火墙相关
##### 1.1 修改防火墙配置文件
```bash
$ vim /etc/sysconfig/iptables
```

##### 1.2 重启防火墙
```bash
$ /etc/init.d/iptables restart
```

##### 1.3 重启防火墙
```bash
$ sudo firewall-cmd --reload
```

##### 1.4 防火墙添加端口 以端口3000为例
```bash
$ sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
```

#### 杂项

##### ssh记住登录凭证
```bash
$ ssh-copy-id -i ~/.ssh/id_rsa.pub root@ip
```

##### mac清除连接认证
```bash
$ ssh-keygen -R 118.24.158.145
```

##### 查看应用进程 (tomcat为例)
```bash
$ ps -ef |grep tomcat
```

##### tomcat作为服务启动
```bash
$ nohup ./startup.sh > ../logs/catalina.out 2>&1 &
```

##### 动态查看日志
```bash
$ tail -f catalina.out
```

##### 开机启动
```bash
# 添加开机启动
$ vim /etc/rc.d/rc.local
# 添加启动脚本
# 赋予权限
$ chmod +x /etc/rc.d/rc.local
```