### Git仓库clone太慢

- 走Shadowsocks代理方式
> win系统默认本地代理端口为1080 mac为1086
```bash
$ git config --global http.proxy 'socks5://127.0.0.1:1086'
```

### git中文文件名 乱码
> git 默认中文文件名是 \xxx\xxx 等八进制形式 
```bash
# 关闭对0x80以上的字符进行quote
git config core.quotepath false
```