### SS服务器搭建教程

### 安装bbr

```bash
# 安装最新内核
$ rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
$ rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm
$ yum --enablerepo=elrepo-kernel install kernel-ml

# 查看当前已安装的内核
$ awk -F\' '$1=="menuentry " {print i++ " : " $2}' /etc/grub2.cfg

# 设置新内核未默认内核
$ grub2-set-default 1

# 重启
$ reboot

# 开机后看看是不是内核 >= 4.9
$ uname -r

# 执行 lsmod | grep bbr，如果结果中没有 tcp_bbr 的话就先执行
$ modprobe tcp_bbr
$ echo "tcp_bbr" >> /etc/modules-load.d/modules.conf
$ echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
$ echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf

# 保存生效
$ sysctl -p
# 查看当前是不是bbr
$ sysctl net.ipv4.tcp_available_congestion_control
$ sysctl net.ipv4.tcp_congestion_control
```

### 安装shadowsocks

```bash
$ yum install python-setuptools vim -y
$ easy_install pip
$ pip install shadowsocks

# 新建文件夹(存放配置文件)
$ mkdir config && cd config/

# 新建ss配置文件
$ vim ss.json
```

#### 将下面json写入到ss.json

```json
{
    "server":"服务器ip地址",
    "server_port":"ss端口",
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"ss密码",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
}
```

```bash
# 保存退出 按esc 输入:wq
```

### 常用命令
```bash
# 如果有防火墙,开启端口
$ firewall-cmd --zone=public --add-port=8300/tcp --permanent
# 防火墙重新载入
$ firewall-cmd --reload
# 启动ss
$ ssserver -c /root/config/ss.json -d start 
# 关闭ss
$ ssserver -c /root/config/ss.json -d stop
```

### 常见问题 & 解决方案
```bash
# 问题:FirewallD is not running
$ systemctl start firewalld
```