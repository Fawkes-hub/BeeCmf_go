package routers

import (
	"github.com/BeeCmf/api/ApiController"
	"github.com/BeeCmf/app/AppController"
	"github.com/astaxie/beego"
)

func init() {
	//后台的路由
	beego.Include(&AppController.LoginController{})
	beego.Include(&AppController.IndexController{})
	beego.Include(&AppController.MenuController{})
	beego.Include(&AppController.UserController{})

	//前台的路由
	beego.Include(&ApiController.IndexController{})

	// 默认登录
	beego.Router("/login", &AppController.LoginController{}, "*:Login")
	beego.Router("/logout", &AppController.LoginController{}, "*:Logout")

	beego.AutoRouter(&AppController.MenuController{})

}
