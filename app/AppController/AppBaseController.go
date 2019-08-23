package AppController

import (
	"github.com/BeeCmf/cmf/common"
	"github.com/BeeCmf/models"
)

//控制器的后台基础
type AppBaseController struct {
	common.BaseController
	User    models.User
	IsLogin bool
}

//约定：如果子控制器中存在了NextController方法，就实现了当前接口
type NextPreparer interface {
	NextPreparer()
}

//控制器的所有基类 预处理
func (base *AppBaseController) Prepare() {
	////检测当前用户有已经登录
	isLogin, _ := base._checkLogin()
	if isLogin == false {
		controller, _ := base.GetControllerAndAction()
		if controller != "LoginController" {
			//base.Redirect("/login", 302)
		}
	}
	//判断下级的controller是否实现了当前方法，如果实现了，就进行调用当前方法
	if app, ok := base.AppController.(NextPreparer); ok {
		app.NextPreparer()
	}
}

//检测当前用户是否登录
func (base *AppBaseController) _checkLogin() (isLogin bool, user models.User) {
	//检测当前用户有已经登录
	user, err := base.GetSession(SESSION_USER_KEY).(models.User)
	isLogin = false
	if err {
		isLogin = true
	}
	return
}
