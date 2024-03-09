# 安装 mysql8 & 依赖

```bash
# 防火墙放行3306端口
sudo firewall-cmd --zone=public --add-port=3306/tcp --permanent

# 重载防火墙
sudo firewall-cmd --reload

# 下载mysql repo源
wget http://repo.mysql.com/mysql80-community-release-el7-3.noarch.rpm

# 更新GPG密钥
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022

# 安装包
sudo rpm -ivh mysql80-community-release-el7-3.noarch.rpm

# 使用yum安装mysql
sudo yum install mysql-server --nogpgcheck -y

# 将mysql设为开机启动项
systemctl enable mysqld.service

# 启动服务
systemctl start mysqld.service

# 初始化Mysql
mysqld --initialize

# 查看MySQL初始默认密码
grep 'temporary password' /var/log/mysqld.log

# 查看是否启动MySQL服务
ps -ef|grep mysql
```
