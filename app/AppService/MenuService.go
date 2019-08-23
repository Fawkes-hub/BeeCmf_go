package AppService

import (
	"github.com/BeeCmf/models"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/logs"
	"reflect"
)

/**
后台菜单的服务层
*/

//组合成为厚一点菜单
func GetMenuLists(module_id int8) (MenusData []map[string]interface{}, err error) {
	var ModelMenu models.Menu
	ModelMenu.Status = 1
	ModelMenu.ModuleBelong = module_id
	//先查找最顶级的
	menus, err := ModelMenu.QueryMenuLists(0)
	if err != nil {
		return MenusData, err
	}
	//var MenusData = make([]map[string]interface{},len(menus))
	for key, item := range menus {
		row := make(map[string]interface{})
		row["id"] = item.Id
		row["parent_id"] = item.ParentId
		row["name"] = item.Name
		row["icon"] = item.Icon
		row["url"] = beego.URLFor(item.Controller + "." + item.Action)

		logs.Info("打印KEY", reflect.TypeOf(key))
		logs.Info("打印KEY", key)
		logs.Info("打印menu", item)
		logs.Info("打印menu", row)
		MenusData[key] = row
	}
	//logs.Info("查询的后台菜单数据",menus)
	return
}
