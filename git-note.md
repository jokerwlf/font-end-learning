## Git使用笔记 ##


##一、git基本命令  ##


- 专有名词：---
  Workspace：工作区    |
  Index / Stage：暂存区|
  Repository：仓库区（或本地仓库）|
  Remote：远程仓库
    先有本地仓库再有远程仓库
----------
1. 配置个人信息  
   -git config --globaluser.name “xxx”  
   -git config --global user.email 邮箱名  

1. git仓库  
   处于处于git跟踪下的文件只具有三种状态：

     Modified(working directory)：被修改过的文件  
     Staged(staging area)：通过git add添加到暂存区域的文件  
     Committed(git directory)：通过git commit提交到仓库的文件  
暂存区概念：  
![](https://img-blog.csdn.net/20130528155930330)  
1. 初始化仓库  
   
   - git init 直接在空目录里建立一个项目  
   - 从远程仓库克隆  
        - 通过ssh:   git clone git@github.com:wengpingbo/MicroBlog.git  
        - 通过https: git clone https://github.com/jquery/jquery.git (远程仓库)  
  
1. 添加文件至远程仓库的步骤  
   - 1、git **add** filename1 filename2 或者使用git add -A将当前目录所有文件**添加到暂存区**  
   - 2、git **commit** -m '可添加提交注释'，也可以 git commit -a -m '注释'，**进行提交**  
   - 3、git **push** origin master 把master分支提交到origin的服务器上  
1. 创建管理分支  
     可在分支上进行试验，而不会影响到主分支，试验成功的话又可以合并到主分支来，并将该分支删除。  
   - git branch 分支名   || 创建分支    
   - git checkout 分支名  || 跳转至分支 -----git checkout -b 分支名 ||创建并跳转至分支
   - git merge 分支名    ||合并分支
   - git branch -d 分支名    ||删除分支
   - git branch  ||列出分支列表  
  
  
  
  
1. 删除文件及文件夹
 - 查看本地分支下的文件 输入ls命令即可  
   - 删除test文件夹及其下所有文件
     - git rm test -r -f
     - git commit -m "delete test" ||同步删除到远程分支
     - git push origin master  
     
[https://blog.csdn.net/wengpingbo/article/details/8985132](https://blog.csdn.net/wengpingbo/article/details/8985132)  
未完待续。。。
      

   