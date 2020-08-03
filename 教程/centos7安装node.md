wget https://cdn.npm.taobao.org/dist/node/v14.2.0/node-v14.2.0-linux-x64.tar.xz

tar -xvJf node-v14.2.0-linux-x64.tar.xz

ln -s ~/software/node-v14.2.0-linux-x64/bin/node /usr/bin/node
ln -s ~/software/node-v14.2.0-linux-x64/bin/npm /usr/bin/npm
ln -s ~/software/node-v14.2.0-linux-x64/bin/npm /usr/bin/npx

npm config set registry https://registry.npm.taobao.org

ln -s /root/software/node-v14.2.0-linux-x64/lib/node_modules/pm2/bin/pm2 /usr/bin/pm2