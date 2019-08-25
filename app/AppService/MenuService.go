package AppService

import (
	"github.com/BeeCmf/models"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
)

/**
后台菜单的服务层
*/

type Menu struct {
	models.Menu
	Url      string
	Children []Menu
}

//type Menus struct {
//	Menu []Menu
//
//}

//组合成为厚一点菜单
func GetMenuLists(module_id int8) (lists []map[string]interface{}, err error) {
	var ModelMenu models.Menu
	ModelMenu.Status = 1
	ModelMenu.ModuleBelong = module_id
	//先查找最顶级的
	menus, err := ModelMenu.QueryMenuLists(0)
	if err != nil {
		return lists, err
	}
	var MenusData = make([]map[string]interface{}, len(menus))
	for key, item := range menus {
		row := make(map[string]interface{})
		row["id"] = item.Id
		row["parent_id"] = item.ParentId
		row["title"] = item.Name
		row["icon"] = item.Icon
		row["href"] = beego.URLFor(item.Controller + "." + item.Action)
		row["spread"] = false
		row["children"], _ = ModelMenu.QueryMenuLists(item.Id)
		MenusData[key] = row
	}
	logs.Info("打印MenusData", MenusData)
	return MenusData, nil
}
