### 说明
- 本教程在Centos7下执行未出现问题


### 先行条件
```bash
echo "防火墙开启8000端口"
firewall-cmd --zone=public --add-port=8000/tcp --permanent
echo "防火墙重新载入"
firewall-cmd --reload
echo "安装所需依赖包"
yum install python-setuptools vim wget unzip lsof -y
```

### 安装shadowsocks命令

```bash

echo "安装所需依赖包"
easy_install pip
echo "安装shadowsocks"
pip install shadowsocks
echo "新建文件夹(存放配置文件)"
mkdir config && cd config/
echo "新建配置文件"
touch ss.json
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

---

### 安装V2ray命令

> https://github.com/Tualua/v2ray-docs/wiki/v2ray:-Server-install-(CentOS-7)

```bash
echo "下载安装脚本"
wget https://install.direct/go.sh
echo "执行脚本"
bash ./go.sh

echo "编辑配置文件"
vim /etc/v2ray/config.json
```

#### 支持shadowsocks配置 
> 添加如下配置文件

```json
{
    "inboundDetour": [
        {
            "protocol": "shadowsocks",
            "port": 8000,
            "settings": {
                "method": "aes-256-cfb",
                "password": "密码",
                "udp": false
            }
        }
    ]
}
```

---

### 常用命令
```bash
# 启动 ssserver
$ ssserver -c /root/config/ss.json -d start 

# 关闭 ssserver
$ ssserver -c /root/config/ss.json -d stop


# 启用 v2ray
$ systemctl enable v2ray

# 启动 v2ray
$ systemctl start v2ray

# 关闭 v2ray
$ systemctl stop v2ray
```

### 常见问题 & 解决方案
```bash
# 问题:FirewallD is not running
$ systemctl start firewalld
```
