# BeeCmf
基于beego+layui+mysql的内容管理框架。

# 简介
BeeCmf是基于Beego开发的易用、易扩展、界面友好的轻量级功能权限管理系统。
前端框架基于layui进行资源整合。
# 安装方法

本系统基于beego开发，默认使用mysql数据库，缓存redis 


1. 安装golang环境（ 略）

2. 安装本系统
```
go get github.com/lhtzbj12/sdrms
```
3. 将根目录下的sdrms.sql导入mysql

4. 修改配置文件 conf/app.conf
 需要配置mysql和redis的参数
5. 运行
在 sdrms 目录使用beego官方提供的命令运行
```
bee run
```
在浏览器里打开 http://localhost:8999 进行访问