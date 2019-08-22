package routers

import (
	"github.com/BeeCmf/app/controller"
	"github.com/astaxie/beego"
)

func init() {
	beego.Include(&controller.IndexController{})
}
