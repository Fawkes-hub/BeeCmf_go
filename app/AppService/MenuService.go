/**
后台菜单的服务层
*/
package AppService

import (
	"BeeCmf_go/models"
	"github.com/astaxie/beego"
)

type Menu struct {
	models.Menu
	Url      string
	Children []Menu
}

var (
	ModelMenuLists models.Menu
	ModelMenuAdd   models.Menu
	ModelMenuOne   models.Menu
	ModelMenuDel   models.Menu
)

//组合成为厚一点菜单
func GetMenuLists(module_id int8, data_type string) (lists []map[string]interface{}, err error) {
	ModelMenuLists.ModuleBelong = module_id
	var menus []models.Menu
	if data_type == "All" {
		ModelMenuLists.Status = 0 //结构体查询0的时候 查询条件会失效  如果需要查询专门的0必须是否条件查询
		menus, err = ModelMenuLists.AllMenu()
	} else {
		//先查找最顶级的
		ModelMenuLists.Status = 1
		menus, err = ModelMenuLists.QueryMenuLists(0)
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
			children, _ := ModelMenuLists.QueryMenuLists(item.Id)
			row["childs"] = getMenuData(children, data_type)
		}
		MenusData[key] = row
	}
	return MenusData
}

//添加和编辑操作数据
func SaveMenu(menu *models.Menu) (err error) {
	ModelMenuAdd = *menu
	if ModelMenuAdd.Id == 0 {
		err = ModelMenuAdd.AddMenuData()
	} else {
		err = ModelMenuAdd.EditMenuData()
	}
	return err
}

//根据结构体条件查询数据
func GetMenuByMap(menu *models.Menu) (data models.Menu, err error) {
	ModelMenuOne = *menu
	return ModelMenuOne, ModelMenuOne.OneMenu()
}

//根据结构体条件删除数据
func DelMenuByMap(menu *models.Menu) (err error) {
	ModelMenuDel = *menu
	//增加一个事务 防止删除中出错
	tx := models.Db.Begin()
	//给一个空的数组切片  然后将每一次循环查到的数据进行循环存入
	var ChildIds = []int{}
	AllChildIds := getMenuChildId(ChildIds, ModelMenuDel.Id)
	for _, id := range AllChildIds {
		ModelMenuDel.Id = id
		err = ModelMenuDel.DelMenu()
		if err != nil {
			tx.Rollback()
		}
	}
	tx.Commit()
	return nil
}

//递归得到菜单的所有自己
func getMenuChildId(ChildIds []int, MenuId int) (NewChildIds []int) {
	NewChildIds = append(ChildIds, MenuId)
	var Child models.Menu
	ChildDatas, _ := Child.QueryMenuLists(MenuId)
	for _, v := range ChildDatas {
		//将自己id写进去后在进行一次查询子级
		NewChildIds = getMenuChildId(NewChildIds, v.Id)
	}
	return NewChildIds
}
