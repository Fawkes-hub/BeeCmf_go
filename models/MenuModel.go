/**
@author : BeeCMF_f
@后台功能模板
*/
package models

import (
	"database/sql"
	"strings"

	"github.com/astaxie/beego/logs"
)

type Menu struct {
	Id           int           `form:"-"          alias:"ID" `
	ParentId     sql.NullInt64 `form:"parent_id"  alias:"上一级"  `
	Type         int           `form:"type"       alias:"菜单类型"    valid:"Required"`
	Status       int           `form:"status"     alias:"状态"       valid:"Required"`
	ListOrder    int           `form:"list_order" alias:"排序"       valid:"Max(10000)"`
	Controller   string        `form:"controller" alias:"控制器名"    valid:"Required;"`
	Action       string        `form:"action"     alias:"操作名称"    valid:"Required;"`
	Param        string        `form:"param"      alias:"额外参数" `
	Name         string        `form:"name"       alias:"菜单名称"    valid:"Required"`
	Icon         string        `form:"icon"       alias:"菜单图标" `
	Remark       string        `form:"remark"     alias:"备注" `
	ModuleBelong int8          `form:"module_belong"   alias:"读取模块" `
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
	return Db.Model(Menu{}).Create(&m).Error
}

//获取所有的菜单
func (m *Menu) AllMenu() (menu []Menu, err error) {
	logs.Info("查询条件", m)
	return menu, Db.Model(Menu{}).Where(&m).Order("list_order asc").Find(&menu).Error
}

//获取所有的菜单
func (m *Menu) OneMenu() (menu Menu, err error) {
	Db.LogMode(true)
	logs.Info("查询条件", m)
	return menu, Db.Model(Menu{}).Where(&m).First(&menu).Error
}

func (m *Menu) DelMenu() (err error) {
	Db.LogMode(true)
	return Db.Model(Menu{}).Delete(&m).Error
}
