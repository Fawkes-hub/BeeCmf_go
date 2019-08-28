package AppController

import (
	"github.com/astaxie/beego/logs"
	"strconv"

	"github.com/BeeCmf/app/AppService"
	"github.com/BeeCmf/app/AppValidate"
	"github.com/BeeCmf/models"
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
		parent_id, _ := c.GetInt("parent_id", 0)
		c.Data["option"] = ""
		if parent_id != 0 {
			//查找名称
			var maps models.Menu
			maps.Id = parent_id
			data, _ := AppService.GetMenuByMap(&maps)
			c.Data["option"] = "<option value='" + strconv.FormatInt(int64(parent_id), 10) + "' selected>" + data.(models.Menu).Name + "</option>"
		}
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
		c.Abort200("", "添加成功", c.URLFor("MenuController.Lists"))
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

//删除
func (c *MenuController) Del() {
	//删除父级 所有子级全部删除
	id, _ := c.GetInt("id", 0)
	logs.Info("请求删除的id", id)
	if id != 0 {
		//查找名称
		var maps models.Menu
		maps.Id = id
		data, _ := AppService.GetMenuByMap(&maps)
		if data.(models.Menu).Id == 0 {
			c.Abort500("数据不存在，请刷新后操作", "")
		}
		if err := AppService.DelMenuByMap(&maps); err != nil {
			c.Abort500("数据不存在，请刷新后操作："+err.Error(), "")
		}
		c.Abort200("", "删除成功", "")
	}
}
