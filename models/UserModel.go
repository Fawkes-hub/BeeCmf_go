package models

import (
	"errors"
	"github.com/BeeCmf/cmf/common"
	"github.com/astaxie/beego/logs"
	"strings"
)

type User struct {
	Id       int64
	TrueName string
	Login    string
	Avatar   string
	Pwd      string
	Role     int
}

const DefaultAvatar = "/static/images/default_avatar.jpg"

/**
用户登录方法
*/
func UserLogin(login, password string) (User, error) {
	ModelDb().Debug()
	user := User{}
	ModelDb().Where("login = ?", login).Where("pwd = ?", common.SycMd5(password)).First(&user)
	logs.Info("查询到的用户信息:", user)
	if user.Id == 0 {
		return user, errors.New("账户或密码错误")
	}
	return user, nil
}

///**
//用户注册方法
//*/
//func UserReg(u *User) error {
//	if u.Id == 0 { //添加
//		DB.Model(&u).Create(u)
//	} else { //编辑
//		DB.Model(&u).Update(u)
//	}
//	return DB.Error
//}

//根据struct条件查询用户信息  传入需要查询的字段
func (u *User) GetUserInfo(field ...interface{}) (user User, err error) {
	var fieldStr string
	if len(field) > 0 {
		for k, _ := range field {
			fieldStr = fieldStr + "," + field[k].(string)
		}
	}
	fieldStr = strings.Trim(fieldStr, ",")
	res := ModelDb().Model(User{}).Where(&u).Select(fieldStr).First(&user).RecordNotFound()
	if res {
		return user, errors.New("未查询到数据")
	}
	return
}
