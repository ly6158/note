### Git仓库clone太慢

- 走Shadowsocks代理方式
> win系统默认本地代理端口为1080 mac为1086
```bash
$ git config --global http.proxy 'socks5://127.0.0.1:1086'
```