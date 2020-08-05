### GitHub配置SSH
```bash
# 生成秘钥文件 (如果没有)
ssh-keygen -t rsa -C "邮箱地址"
# 查看秘钥文件
cat ~/.ssh/id_rsa.pub
# github.com --> 右上角头像 --> Settings --> SSH and GPG keys --> New SSH key
```

### 常用命令
```bash
# 克隆项目(拉取远端项目)
git clone <需要拉取的项目路劲url> <本地目录名>

# 查看主机名对应url
git remote -v
# 添加主机名
git remote add <主机名> <主机名网址>
# 删除主机名
git remote rm <主机名>
# 修改主机名
git remote rename <原主机名> <新主机名>
# 查看主机详细信息
git remote show <主机名>
# 查看本地文件状态
git status
# 获取分支代码更新
git pull <主机名> <远端分支名> : <本地分支名>
# 添加需要提交的文件
git add <文件名>
# 提交代码
git commit -m "提交说明"
# 向远端仓库推送代码
git push <主机名> <本地分支名> : <远端分支名>
# 查看提交日志
git log
```
### 参考
- [阮一峰Git](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)
- [Git手册](https://git-scm.com/book/zh/v2/)