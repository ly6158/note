# MySQL 常用命令

## MySQL 8.0 用户管理

```bash
# 登录
mysql -u root -p

# 修改密码安全策略
set global validate_password.policy=LOW;

# 修改root改密码
alter user 'root'@'localhost' identified by '8CB05447AF';

# 创建用户
create user 'liuyang'@'%' identified by 'liuyang0';

# 修改密码
alter user 'liuyang'@'%' identified with mysql_native_password by 'liuyang0';

# 授权
grant all privileges on *.* to 'liuyang'@'%' with grant option;

# 刷新权限
flush privileges;
```
