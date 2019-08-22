package routers

import (
	"github.com/BeeCmf/api/ApiController"
	"github.com/BeeCmf/app/AppController"
	"github.com/astaxie/beego"
)

func init() {
	//后台的路由
	beego.Include(&AppController.IndexController{})
	beego.Include(&AppController.UserController{})

	//前台的路由
	beego.Include(&ApiController.IndexController{})
	//
	////前台请求的api接口
	//ns := beego.NewNamespace("api",
	//	beego.NSInclude(
	//		&ApiController.IndexController{},
	//	),
	//)
	////注册 namespace
	//beego.AddNamespace(ns)
}
