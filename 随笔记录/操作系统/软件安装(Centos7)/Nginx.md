## Centos7 Nginx 安装教程
[Nginx官网](https://nginx.org/en/download.html)

### 如需HTTPS,请先安装OpenSSL
[OpenSSL安装教程](./OpenSSL.md)

### 安装教程
```bash
# 依赖安装
yum install wget gcc gcc-c++ autoconf automake zlib zlib-devel pcre pcre-devel -y
# 软件包下载
wget https://nginx.org/download/nginx-1.14.0.tar.gz
# 解压
tar -zxvf nginx-1.14.0.tar.gz
# 进入解压目录
cd nginx-1.14.0
# 编译
./configure --prefix=/root/software/nginx --prefix=/root/software/nginx --with-http_stub_status_module --with-http_gzip_static_module --with-http_realip_module --with-http_sub_module --with-http_ssl_module
# 安装
make && make install
```

### nginx常用命令
```bash
# 启动 (需在安装目录下执行)
./sbin/nginx
# 关闭
pkill -9 nginx
# 重启 (需在安装目录下执行)
./sbin/nginx -s reload
```

### 常见问题&解决方案
- 访问页面出现403错误
    - 第一种情况: 因为配置文件未配置

#### 第一种情况解决方案
```bash
# 编辑 nginx.conf 文件 (...安装路径/conf/nginx.conf)
vim nginx.conf
# 第一行指定用户(user 改为 user root root)
```
