## 极路由刷ss

只能插件 ---> 路由器信息 ---> 高级设置  
ssh root@192.168.199.1 -p1022 (密码为路由器登录密码)

- 1.脚本安装
> cd /tmp && curl -k -o shadow.sh https://raw.githubusercontent.com/qiwihui/hiwifi-ss/master/shadow.sh && sh shadow.sh && rm shadow.sh

- 参考:https://github.com/qiwihui/hiwifi-ss

## 小米路由器（R3G）
- 1.MT工具箱
	- 安装
	> wget http://www.misstar.com/tools/appstore/install.sh -O /tmp/install.sh && chmod +x /tmp/install.sh && /tmp/install.sh
	- 卸载
	> wget http://www.misstar.com/tools/uninstall.sh -O /tmp/uninstall.sh && chmod +x /tmp/uninstall.sh && /tmp/uninstall.sh

- 2.安装SS
	- 安装
	> /etc/misstar/scripts/appmanager add ss
	- 卸载
	> /etc/misstar/scripts/appmanager del ss

- 参考:http://bbs.xiaomi.cn/t-14328908-n72


