/**
@author : BeeCMF_f
@后台功能模板
*/
package models

import (
	"strings"
)

type Menu struct {
	Id           int
	ParentId     int
	Type         int
	Status       int
	ListOrder    int
	Controller   string
	Action       string
	Param        string
	Name         string
	Icon         string
	Remark       string
	ModuleBelong int8
}

//根据struct条件查询用户信息  传入需要查询的字段
func (m *Menu) QueryMenuLists(parent_id int, field ...interface{}) (menu []Menu, err error) {
	Db.LogMode(true)
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
