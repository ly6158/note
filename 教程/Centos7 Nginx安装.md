## Nginx安装教程


### 依赖安装
```bash
$ yum install gcc gcc-c++ autoconf automake zlib zlib-devel pcre pcre-devel -y
```

### 软件包下载
```bash
# Nginx下载 官网:https://nginx.org/en/download.html
$ wget https://nginx.org/download/nginx-1.14.0.tar.gz
# openssl下载
$ wget https://www.openssl.org/source/openssl-1.1.1-pre4.tar.gz
```

### 解压

```bash
$ tar -zxvf openssl-1.1.1-pre4.tar.gz
$ tar -zxvf nginx-1.14.0.tar.gz
```

### 安装

```bash
# openssl安装
$ cd openssl-1.1.1-pre4
$ ./config || ./configure
$ make && make install

# nginx安装
$ cd nginx-1.14.0
$ ./configure --prefix=/root/software/nginx --prefix=/root/software/nginx --with-http_stub_status_module --with-http_gzip_static_module --with-http_realip_module --with-http_sub_module --with-http_ssl_module
$ make && make install
```

### nginx常用命令

```bash
# 启动
$ ./sbin/nginx
# 关闭
$ pkill -9 nginx
# 重启
$ ./sbin/nginx -s reload
```



### 常见问题&解决方案

- 403解决方案

```text
nginx配置文件
nginx.conf --> user改为user root root
```

- openssl: error while loading shared libraries: libssl.so.1.1: cannot open shared object file: No such file or directory

```bash
# 由于openssl库的位置不正确造成的。
$ ln -s /usr/local/lib64/libssl.so.1.1 /usr/lib64/libssl.so.1.1
$ ln -s /usr/local/lib64/libcrypto.so.1.1 /usr/lib64/libcrypto.so.1.1
```