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
	if c.IsHtml() {
		c.Display()
	} else {
		lists, err := AppService.GetMenuLists(1)
		if err != nil {
			c.Abort500(err.Error(), "/")
		}
		c.Abort200(lists, "", "")
	}
}

//菜单的添加
func (c *MenuController) Add() {
	logs.Info("是否请求到添加了")
	if c.IsHtml() {
		c.Display()
	} else {

	}
}
