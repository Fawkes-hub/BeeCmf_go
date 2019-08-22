package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["github.com/BeeCmf/api/ApiController:IndexController"] = append(beego.GlobalControllerRouter["github.com/BeeCmf/api/ApiController:IndexController"],
		beego.ControllerComments{
			Method:           "Index",
			Router:           `/api/`,
			AllowHTTPMethods: []string{"get"},
			MethodParams:     param.Make(),
			Filters:          nil,
			Params:           nil})

}
