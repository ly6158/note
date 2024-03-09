# Oracle 常用命令

```bash
# 查询所有表空间
select * from dba_tablespaces;

# 创建表空间
create tablespace 表空间名
logging
datafile '.../datafile.dbf'
size 50m
autoextend on
next 50m maxsize 20480m
extent management local;

# 新建用户 指定表空间
create user 用户名 identified by 密码 default tablespace 表空间

# 授予权限
grant connect,resource,dba to 用户名;

# 删除用户
drop user 用户名 cascade;
```
