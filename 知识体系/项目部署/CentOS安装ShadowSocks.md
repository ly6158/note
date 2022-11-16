# CentOS 安装 ShadowSocks

## 先行条件

```bash
# 防火墙开启8000端口
firewall-cmd --zone=public --add-port=8000/tcp --permanent
# 防火墙重新载入
firewall-cmd --reload
# 安装所需依赖包
yum install python-setuptools vim wget unzip lsof -y
```

## 安装 shadowsocks 命令

```bash
# 安装所需依赖包
easy_install pip
# 安装shadowsocks
pip install shadowsocks
# 新建文件夹(存放配置文件)
mkdir config && cd config/
# 新建配置文件
touch ss.json
```

## 将下面 json 写入到 ss.json

```json
{
  "server": "服务器ip地址",
  "server_port": "ss端口",
  "local_address": "127.0.0.1",
  "local_port": 1080,
  "password": "ss密码",
  "timeout": 300,
  "method": "aes-256-cfb",
  "fast_open": false
}
```

## 常用命令

```bash
# 启动 ssserver
ssserver -c /root/config/ss.json -d start

# 关闭 ssserver
ssserver -c /root/config/ss.json -d stop
```
