/**
后台菜单的服务层
*/
package AppService

import (
	"github.com/BeeCmf/models"
	//_ "github.com/BeeCmf/models"
	"github.com/astaxie/beego"
)

type Menu struct {
	models.Menu
	Url      string
	Children []Menu
}

var ModelMenu models.Menu

//组合成为厚一点菜单
func GetMenuLists(module_id int8, data_type string) (lists []map[string]interface{}, err error) {
	ModelMenu.ModuleBelong = module_id
	var menus []models.Menu
	if data_type == "All" {
		ModelMenu.Status = 0 //结构体查询0的时候 查询条件会失效  如果需要查询专门的0必须是否条件查询
		menus, err = ModelMenu.AllMenu()
	} else {
		//先查找最顶级的
		ModelMenu.Status = 1
		menus, err = ModelMenu.QueryMenuLists(0)
		if err != nil {
			return lists, err
		}
	}
	lists = getMenuData(menus, data_type)
	return lists, nil
}

//无限极菜单获取子集
func getMenuData(menus []models.Menu, data_type string) []map[string]interface{} {
	var MenusData = make([]map[string]interface{}, len(menus))
	for key, item := range menus {
		row := make(map[string]interface{})
		row["mid"] = item.Id
		row["parent_id"] = item.ParentId
		row["title"] = item.Name
		row["icon"] = item.Icon
		row["href"] = beego.URLFor(item.Controller + "." + item.Action)
		row["type"] = item.Type
		row["status"] = item.Status
		row["list_order"] = item.ListOrder
		if data_type != "All" {
			children, _ := ModelMenu.QueryMenuLists(item.Id)
			row["childs"] = getMenuData(children, data_type)
		}
		MenusData[key] = row
	}
	return MenusData
}

//添加数据
func AddMenu(menu *models.Menu) (err error) {
	ModelMenu = *menu
	return ModelMenu.AddMenuData()
}
