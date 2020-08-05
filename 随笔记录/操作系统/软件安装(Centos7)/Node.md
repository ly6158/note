# Centos7 Node 安装

### 源码方式安装
```bash
# 依赖包下载
yum intall wget -y

# 下载源码包
wget https://cdn.npm.taobao.org/dist/node/v14.2.0/node-v14.2.0-linux-x64.tar.xz

# 解压源码包
tar -xvJf node-v14.2.0-linux-x64.tar.xz

# 建立软链接
ln -s ~/software/node-v14.2.0-linux-x64/bin/node /usr/bin/node
ln -s ~/software/node-v14.2.0-linux-x64/bin/npm /usr/bin/npm
ln -s ~/software/node-v14.2.0-linux-x64/bin/npm /usr/bin/npx

# 切换npm源(推荐淘宝源)
npm config set registry https://registry.npm.taobao.org

# 安装pm2
npm install pm2 -g
# 建立pm2软链接
ln -s /root/software/node-v14.2.0-linux-x64/lib/node_modules/pm2/bin/pm2 /usr/bin/pm2
```
