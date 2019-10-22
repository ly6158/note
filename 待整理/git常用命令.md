### git clone --- 项目克隆(拉取远端项目)
+ $ git clone <需要拉取的项目路劲url> <本地目录名>
> 示例:$ git clone http://app.datasoftware.com.cn:3000/yunshi/dataview.git dataview

+ $ git clone -o <主机名> <需要拉取的项目路劲url> <本地目录名> (-o 默认远程主机名为 origin)
> 示例:$ git clone -o dataview http://app.datasoftware.com.cn:3000/yunshi/dataview.git dataview

+ 追踪关系 --- 所有本地分支默认与远程主机的同名分支，建立追踪关系,也就是说，本地的master分支自动"追踪"origin/master分支。


### git remote (管理主机名 --- 不带参数时可查看当前主机名(默认默认origin))
+ $ git remote
> origin

+ $ git remote -v (-v 查看主机名对应url)
> origin http://app.datasoftware.com.cn:3000/yunshi/dataview.git (fetch)
> origin http://app.datasoftware.com.cn:3000/yunshi/dataview.git (push)

- $ git remote add <主机名> <网址> ---增加主机名
- $ git remote rm <主机名> ---删除主机名
- $ git remote rename <原主机名> <新主机名> --- 修改主机名
- $ git remote show <主机名> --- 查看主机详细信息

### git fetch (更新代码 --- 不带参数默认拉取所有分支的所有更新)
+ $ git fetch <远程主机名>  

+ git fetch <远程主机名> <分支名> --- 获取某一分支的更新
> 示例:$ git fetch origin master (取回origin主机的master分支)

### git branch (查看分支信息)
+ $ git branch -r (-r 查看远程分支)
> origin/master

+ $ git branch -a (-a 查看所有分支)
> - \* master --- 该行表示本地主机的当前分支
> -  remotes/origin/master --- 表示远程分支

+ 手动建立追踪关系 --- 指定master分支追踪origin/next分支。
> $ git branch --set-upstream master origin/next

### git checkout (切换分支 撤销)

+ 撤销 (将本地修改的文件会退到上一次git add的版本)
> $ git checkout -- <file1> <file2> --- (撤销操作必须加 -- 不然就是切换分支的命令)

+ 创建新分支
> $ git checkout -b newBrach origin/master



### git merge 或者 git rebase (合并远程分支)
+ 合并origin/master
> - $ git merge origin/master
> - $ git rebase origin/master

### git pull (更新远程主机的某个分支与本地指定分支合并)
$ git pull <远程主机名> <远程分支名>:<本地分支名> --- (注意 : 和  分支顺序与git push顺序相反)
> 示例:$ git pull origin next:master --- 取回origin主机的next分支，与本地的master分支合并
## 如果远程分支是与当前分支合并，则冒号后面的部分可以省略。
$ git pull origin next
## 上面命令等价于
$ git fetch origin
$ git merge origin/next

## 如果当前分支与远程分支存在追踪关系，git pull可以省略远程分支名
$ git pull origin

## 如果当前分支只有一个追踪分支，远程主机名可以省略。
$ git pull --- 当前分支自动与唯一一个追踪分支进行合并

## 如果合并需要采用rebase模式，可以使用--rebase选项。
$ git pull --rebase <远程主机名> <远程分支名>:<本地分支名>

## -p 在本地删除远程已经删除的分支 (如果远程主机删除了某个分支，默认情况下，git pull 不会在拉取远程分支的时候，删除对应的本地分支。这是为了防止，由于其他人操作了远程主机，导致git pull不知不觉删除了本地分支。)
$ git pull -p
# 等同于下面的命令
$ git fetch --prune origin 
$ git fetch -p

# git push (将本地分支的更新，推送到远程主机)
$ git push <远程主机名> <本地分支名>:<远程分支名> --- (注意分支顺序与git pull顺序相反)
## 示例: $ git push origin master --- (将本地的master分支推送到origin主机的master分支)
> 如果master分支不存在,则会新建

## 如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支。
## 示例:$ git push origin :master --- 删除origin主机的master分支
> 等同于 $ git push origin --delete master

## -u 指定默认主机 (如果当前分支与多个主机存在追踪关系，则可以使用-u选项指定一个默认主机，这样后面就可以不加任何参数使用git push。)
$ git push -u origin master

### simple方式 matching方法(2.0版本之前)
simple方式 --- 不带参数默认只推送当前分支
matching方法 --- 会推送所有有对应的远程分支的本地分支
#### 修改配置
$ git config --global push.default matching
# 或者
$ git config --global push.default simple

## --all --- (将本地的所有分支都推送到远程主机) 
$ git push --all origin
> 将所有本地分支都推送到origin主机

## --force --- (强制推送,如果目标版本比较新会被本次提交覆盖)
git push --force origin

## --tags --- (推送标签)
$ git push origin --tags

# git status (查看状态)
$ git status

## --short 或者 -s --- (查看简短信息)
$ git status --short 
$ git status -s

+ 标记说明
- A 已经添加add
- ?? 新文件
- M 已修改
- D 已删除  (本地删除,暂存区还在)

# git add (添加需要跟踪的文件(将修改的文件放入暂存区))
$ git add test.txt   (多个指定文件用空格隔开)
$ git add -A  (暂存区与工作区保持一致   以工作区为准  同步所有操作)


# git commit --- 将文件提交到分支(默认为master分支)
$ git commit -m "提交描述"
$ git commit -a -m "提交描述"  //使用-a 将所有已经跟踪文件的修改进行提交,可以省去git add步骤


# git diff --- (查看版本差异)
$ git diff

### git log (查看提交历史记录,按提交时间列出所有的更新)
>$ git log

##### -p (显示每次提交的内容差异)
>$ git log -p






> 参考:
<http://www.ruanyifeng.com/blog/2014/06/git_remote.html>
<https://git-scm.com/book/zh/v2/>