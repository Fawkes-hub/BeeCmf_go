# BeeCmf_go
基于beego+layui+mysql的内容管理框架。

    注意说明
    本人也是刚学习go语言没多久，此框架作为学习练手的功能，做了一点比较基础的功能
    主要是登录、列表、表单提交等基础功能，后续会慢慢完善想对应的内容。
    有问题可以提Issues

# 简介
BeeCmf是基于Beego开发的易用、易扩展、界面友好的轻量级管理系统。
前端框架基于layui进行资源整合。
本系统基于beego开发，默认使用mysql数据库，缓存redis 
# 使用技术
后端语言：golang  
后端框架：[beego.me](http://beego.me).  
后台框架：[nepadmin 后台单页面模板](https://github.com/fanjyy/nepadmin).
#界面展示
![avatar](https://github.com/fengke549015/BeeCmf_go/blob/master/static/images/demo/主页.jpg)
![avatar](https://github.com/fengke549015/BeeCmf_go/blob/master/static/images/demo/登录.jpg)
![avatar](https://github.com/fengke549015/BeeCmf_go/blob/master/static/images/demo/网站配置.png)
![avatar](https://github.com/fengke549015/BeeCmf_go/blob/master/static/images/demo/表单提交.png)
# 安装方法    
1、go get https://github.com/fengke549015/BeeCmf_go
2、创建mysql数据库，并将beecmf.sql导入    
3、修改data/conf/database.conf配置数据库    
4、运行 go build    
5、运行 ./run.sh start|stop
