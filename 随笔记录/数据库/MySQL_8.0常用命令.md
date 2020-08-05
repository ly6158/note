### MySQL 8.0 常用命令
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