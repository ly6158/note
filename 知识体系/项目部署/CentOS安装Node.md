# Centos7 Node 安装

## 源码方式安装

```bash
# 依赖包下载
yum install wget -y

# 下载源码包
wget https://nodejs.org/dist/v16.18.1/node-v16.18.1-linux-x64.tar.xz

# 解压源码包
tar -xvJf node-v16.18.1-linux-x64.tar.xz

# 建立软链接
ln -s ~/software/node-v16.18.1/bin/node /usr/bin/node
ln -s ~/software/node-v16.18.1/bin/npm /usr/bin/npm
ln -s ~/software/node-v16.18.1/bin/npx /usr/bin/npx

# 切换npm源(推荐淘宝源)
npm config set registry https://mirrors.cloud.tencent.com/npm/

# 安装pm2 yarn
npm install pm2 yarn -g
# 建立pm2软链接
ln -s ~/software/node-v16.18.1/lib/node_modules/pm2/bin/pm2 /usr/bin/pm2
ln -s ~/software/node-v16.18.1/lib/node_modules/yarn/bin/yarn /usr/bin/yarn
```
