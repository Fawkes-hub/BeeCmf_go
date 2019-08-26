package routers

import (
	"github.com/BeeCmf/app/AppController"
	"github.com/astaxie/beego"
)

func init() {
	//后台的路由
	//beego.Include(&AppController.LoginController{})
	//beego.Include(&AppController.IndexController{})
	//beego.Include(&AppController.MenuController{})
	//beego.Include(&AppController.UserController{})

	//前台的路由
	//beego.Include(&ApiController.IndexController{})

	beego.Router("/", &AppController.IndexController{}, "get:Index")        //首页
	beego.Router("/layout", &AppController.IndexController{}, "get:Layout") //layout页面
	beego.Router("/main", &AppController.IndexController{}, "get:Main")     //首页
	beego.Router("/login", &AppController.LoginController{}, "*:Login")     //登录
	beego.Router("/logout", &AppController.LoginController{}, "*:Logout")   //退出

	beego.AutoRouter(&AppController.MenuController{})
	beego.AutoRouter(&AppController.IndexController{})

}
