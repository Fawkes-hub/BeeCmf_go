package AppController

import (
	"github.com/BeeCmf/app/AppService"
	"github.com/astaxie/beego/logs"
)

type MenuController struct {
	AppBaseController
}

//查询菜单列表
func (c *MenuController) Index() {
	if c.IsAjax() {
		lists, err := AppService.GetMenuLists(1)
		if err != nil {
			c.Abort500(err.Error(), "/")
		}
		c.Abort200(lists, "", "")
	}
	logs.Info("请求法师不正确")
}
