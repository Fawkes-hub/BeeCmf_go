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
func GetMenuLists(module_id int8) (lists []map[string]interface{}, err error) {
	ModelMenu.Status = 1
	ModelMenu.ModuleBelong = module_id
	//先查找最顶级的
	menus, err := ModelMenu.QueryMenuLists(0)
	if err != nil {
		return lists, err
	}
	data := getMenuData(menus)
	return data, nil
}

//无限极菜单获取子集
func getMenuData(menus []models.Menu) []map[string]interface{} {
	var MenusData = make([]map[string]interface{}, len(menus))
	for key, item := range menus {
		row := make(map[string]interface{})
		row["mid"] = item.Id
		row["parent_id"] = item.ParentId
		row["title"] = item.Name
		row["icon"] = item.Icon
		row["href"] = beego.URLFor(item.Controller + "." + item.Action)
		children, _ := ModelMenu.QueryMenuLists(item.Id)
		row["childs"] = getMenuData(children)
		MenusData[key] = row
	}
	return MenusData
}

//添加数据
func AddMenu(menu *models.Menu) (err error) {
	ModelMenu = *menu
	return ModelMenu.AddMenuData()
}
