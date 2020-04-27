```
# 查询所有表空间
select * from dba_tablespaces;

# 创建表空间
create tablespace sugang
logging
datafile 'E:/oracle/tablespace/sugang.dbf'
size 50m
autoextend on
next 50m maxsize 20480m
extent management local;

# 删除用户
DROP USER sugang_pro CASCADE;

# 新建用户 指定表空间
create user sugang_pro identified by sugang_pro
default tablespace sugang

# 授予权限
grant connect,resource,dba to sugang_pro;
```