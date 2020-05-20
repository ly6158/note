### 安装 mysql8 & 依赖
```bash
sudo firewall-cmd --zone=public --add-port=3306/tcp --permanent
sudo firewall-cmd --reload

# 下载mysql repo源
wget http://repo.mysql.com/mysql80-community-release-el7-3.noarch.rpm

# 安装包
sudo rpm -ivh mysql80-community-release-el7-3.noarch.rpm

# 使用yum安装mysql
sudo yum install mysql-server -y

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

### 配置
```bash
# 登录
mysql -u root -p

# 修改root改密码
alter user 'root'@'localhost' identified by '密码';

# 创建用户
create user 'git'@'%' identified by 'git';

# 授权 
grant all privileges on *.* to 'git'@'%' with grant option;

# 刷新权限
flush privileges;
```








