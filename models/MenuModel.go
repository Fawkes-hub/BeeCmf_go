/**
@author : BeeCMF_f
@后台功能模板
*/
package models

import (
	"database/sql"
	"strings"
)

type Menu struct {
	Id           int    `form:"id"          alias:"ID" `
	ParentId     int    `form:"parent_id"  alias:"上一级"  `
	Type         int    `form:"type"       alias:"菜单类型"   `
	Status       int    `form:"status"     alias:"状态"      `
	ListOrder    int    `form:"list_order" alias:"排序"       valid:"Max(100);NonNegativeInteger"`
	Controller   string `form:"controller" alias:"控制器名"    valid:"Required;MaxSize(30)"`
	Action       string `form:"action"     alias:"操作名称"    valid:"Required;MaxSize(30)"`
	Param        string `form:"param"      alias:"额外参数"    valid:"MaxSize(30)"`
	Name         string `form:"name"       alias:"菜单名称"    valid:"Required;MaxSize(30)"`
	Icon         string `form:"icon"       alias:"菜单图标"    valid:"MaxSize(50)"`
	Remark       string `form:"remark"     alias:"备注"        valid:"MaxSize(250)"`
	ModuleBelong int8   `form:"module_belong"   alias:"读取模块" `
	//作为赋值 数据库不存在此字段
	NullParentId sql.NullInt64 `gorm:"-" form:"parent_id"`
}

//根据struct条件查询用户信息  传入需要查询的字段
func (m *Menu) QueryMenuLists(parent_id int, field ...interface{}) (menu []Menu, err error) {
	//Db.LogMode(true)
	var fieldStr string
	if len(field) > 0 {
		for k, _ := range field {
			fieldStr = fieldStr + "," + field[k].(string)
		}
	} else {
		fieldStr = " * "
	}
	fieldStr = strings.Trim(fieldStr, ",")
	err = Db.Model(Menu{}).Where(&m).Where("parent_id = ?", parent_id).
		Order("list_order asc").
		Select(fieldStr).
		Find(&menu).Error
	return
}

//进行添加
func (m *Menu) AddMenuData() (err error) {
	Db.LogMode(true)
	return Db.Model(Menu{}).Create(&m).Error
}

//进行编辑
func (m *Menu) EditMenuData() (err error) {
	Db.LogMode(true)
	return Db.Model(Menu{}).Save(&m).Error
}

//获取所有的菜单
func (m *Menu) AllMenu() (menu []Menu, err error) {
	return menu, Db.Model(Menu{}).Where(&m).Order("list_order asc").Find(&menu).Error
}

//获取所有的菜单
func (m *Menu) OneMenu() (err error) {
	return Db.Model(Menu{}).Where(&m).First(&m).Error
}

func (m *Menu) DelMenu() (err error) {
	return Db.Model(Menu{}).Delete(&m).Error
}
