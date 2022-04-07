### 安装V2ray命令
[v2ray官方地址](https://github.com/Tualua/v2ray-docs/wiki/v2ray:-Server-install-(CentOS-7))
```bash
# 下载自动安装脚本
wget https://install.direct/go.sh
# 执行脚本
bash ./go.sh
# 编辑配置文件
vim /etc/v2ray/config.json
```

### 修改配置文件 (支持shadowsocks配置)
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

### 常用命令
```bash
# 启用 v2ray
$ systemctl enable v2ray

# 启动 v2ray
$ systemctl start v2ray

# 关闭 v2ray
$ systemctl stop v2ray
```