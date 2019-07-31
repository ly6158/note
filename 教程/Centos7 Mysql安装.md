### 安装 mysql & 依赖
```bash
# 下载 mysql-server
$ wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm

# 安装rpm包
$ rpm -ivh mysql-community-release-el7-5.noarch.rpm

# 安装依赖包 
$ yum install mysql mysql-devel mysql-community-server -y

# 开放端口
$ firewall-cmd --zone=public --add-port=3306/tcp --permanent

# 重启
$ service mysqld restart
```

### 配置
```bash
# 登录
$ mysql -u root

# 修改root改密码
> set password for 'root'@'localhost' =password('ly6158');

# 授权
> grant all privileges on *.* to root@'%'identified by 'ly6158';

#创建用户
> create user 'ly6158'@'%' identified by 'ly6158';

#授权 
> grant all privileges on *.* to ly6158@'%'identified by 'ly6158'; 
```








