package AppController

import (
	"database/sql"
	"strconv"

	"BeeCmf_go/app/AppService"
	"BeeCmf_go/app/AppValidate"
	"BeeCmf_go/models"
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

//菜单的添加和编辑操作
func (c *MenuController) Save() {
	var (
		maps      models.Menu
		data      models.Menu
		maps2     models.Menu
		err       error
		null      sql.NullInt64
		parent_id int
	)
	if c.IsHtml() {
		id, _ := c.GetInt("id", 0)
		parent_id, _ := c.GetInt("parent_id", 0)
		c.Data["option"] = ""
		c.Data["isEdit"] = false
		if parent_id != 0 {
			//查找名称
			maps.Id = parent_id
			data, _ := AppService.GetMenuByMap(&maps)
			c.Data["option"] = "<option value='" + strconv.FormatInt(int64(parent_id), 10) + "' selected>" + data.Name + "</option>"
		} else if id != 0 {
			c.Data["isEdit"] = true
			//查找名称
			maps.Id = id
			data, _ = AppService.GetMenuByMap(&maps)
			c.Data["option"] = ""
			if data.NullParentId != null { //找到父级信息
				parent_id = int(data.NullParentId.Int64)
				//查找名称
				maps2.Id = parent_id
				data, _ := AppService.GetMenuByMap(&maps2)
				c.Data["option"] = "<option value='" + strconv.FormatInt(int64(parent_id), 10) + "' selected>" + data.Name + "</option>"
			}
		}
		c.Data["data"] = data
		c.Display()
	} else {
		params := models.Menu{}
		parent_id, err = c.GetInt("parent_id", 0)
		if parent_id != 0 { //给nullParentId 赋值 作为最终添加的数据
			params.NullParentId.Int64, params.NullParentId.Valid = int64(parent_id), true
		}
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
		params.ParentId = int(params.NullParentId.Int64)
		err = AppService.SaveMenu(&params)
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
	if id == 0 {
		c.Abort500("数据不存在", "")
	}
	//查找名称
	var maps models.Menu
	maps.Id = id
	data, _ := AppService.GetMenuByMap(&maps)
	if data.Id == 0 {
		c.Abort500("数据不存在，请刷新后操作", "")
	}
	if err := AppService.DelMenuByMap(&maps); err != nil {
		c.Abort500("数据不存在，请刷新后操作："+err.Error(), "")
	}
	c.Abort200("", "删除成功", "")
}
