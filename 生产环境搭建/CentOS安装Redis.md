# 在 CentOS 7 上安装 Redis

```bash
# 下载epel仓库
yum install epel-release -y

# 安装 Redis
yum install redis -y

# 配置 Redis 开机自启动
sudo systemctl enable redis

# 启动 Redis 服务
sudo systemctl start redis

# 检查 Redis 服务的状态
sudo systemctl status redis

# 重新启动 Redis 服务
sudo systemctl restart redis

sudo firewall-cmd --zone=public --add-port=6379/tcp --permanent

# 重载防火墙
sudo firewall-cmd --reload
```

默认情况下，Redis 使用 IP 地址 `127.0.0.1` 和端口号 `6379` 进行本地访问。您可以使用 Redis 客户端连接到 Redis 服务器。

如果您需要对 Redis 进行进一步的配置，可以编辑 Redis 配置文件 `/etc/redis.conf`，然后重新启动 Redis 服务：
