```bash
# 极路由安装 开发者 插件

# SSH登录极路由
ssh root@192.168.199.1 -p1022 (密码为路由器登录密码)

# 下载 & 执行 安装脚本
cd /tmp && curl -k -o shadow.sh https://raw.githubusercontent.com/qiwihui/hiwifi-ss/master/shadow.sh && sh shadow.sh && rm shadow.sh
```

> 参考:https://github.com/qiwihui/hiwifi-ss