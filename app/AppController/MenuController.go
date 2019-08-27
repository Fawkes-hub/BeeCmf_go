package AppController

import (
	"github.com/BeeCmf/app/AppService"
	"github.com/BeeCmf/app/AppValidate"
	"github.com/BeeCmf/models"
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
		lists, err := AppService.GetMenuLists(1, "")
		if err != nil {
			c.Abort500(err.Error(), "/")
		}
		c.Abort200(lists, "", "")
	}
}

//菜单的添加
func (c *MenuController) Add() {
	if c.IsHtml() {
		parent_id, _ := c.GetInt64("parent_id", 0)
		logs.Info("添加的父级id", parent_id)
		c.Display()
	} else {
		var err error
		params := models.Menu{}
		if err := c.ParseForm(&params); err != nil {
			c.Abort500("传入参数错误："+err.Error(), "")
		}
		//进行输入字段的验证
		MenuValidate := AppValidate.MenuValidate{}
		_ = c.ParseForm(&MenuValidate)
		err = MenuValidate.ValidMenu()
		if err != nil {
			c.Abort500(err.Error(), "")
		}
		//数据的添加
		err = AppService.AddMenu(&params)
		if err != nil {
			c.Abort500(err.Error(), "")
		}
		c.Abort200("", "添加成功", c.URLFor("MenuController.Index"))
	}
}

//列表查看
func (c *MenuController) Lists() {
	if c.IsHtml() {
		c.Display("menu/index")
	} else {
		lists, err := AppService.GetMenuLists(1, "All")
		if err != nil {
			c.Abort500(err.Error(), "/")
		}
		c.Data["json"] = lists
		c.Abort200(lists, "", "")
	}
}
