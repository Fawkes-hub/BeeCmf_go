package AppController

import (
	"github.com/BeeCmf/app/AppService"
	"github.com/astaxie/beego/logs"
)

type MenuController struct {
	AppBaseController
}

//查询菜单列表
// @router /menu [get]
func (c *MenuController) Get() {
	if c.IsAjax() {
		_, _ = AppService.GetMenuLists(1)
	}
	logs.Info("请求法师不正确")
}
