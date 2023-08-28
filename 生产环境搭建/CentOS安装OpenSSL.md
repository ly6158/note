# Centos7 OpenSSl 安装教程

```bash
# 依赖安装
yum install wget gcc gcc-c++ autoconf automake zlib zlib-devel pcre pcre-devel -y

# openssl 源码包下载
wget https://www.openssl.org/source/openssl-1.1.1-pre4.tar.gz

# 解压源码包
tar -zxvf openssl-1.1.1-pre4.tar.gz

# 进入解压目录
cd openssl-1.1.1-pre4

# 编译安装
./config || ./configure
make && make install
```

## 常见问题&解决方案

- openssl: error while loading shared libraries: libssl.so.1.1: cannot open shared object file: No such file or directory
  > 由于 openssl 库的位置不正确造成的。

```bash
# 添加软链接
ln -s /usr/local/lib64/libssl.so.1.1 /usr/lib64/libssl.so.1.1
ln -s /usr/local/lib64/libcrypto.so.1.1 /usr/lib64/libcrypto.so.1.1
```
