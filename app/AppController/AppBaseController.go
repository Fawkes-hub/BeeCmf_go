package AppController

import (
	"github.com/BeeCmf/cmf/common"
	"github.com/BeeCmf/models"
	"github.com/astaxie/beego/logs"
)

//控制器的后台基础
type AppBaseController struct {
	common.BaseController
	User    models.User
	IsLogin bool
}

//控制器的所有基类 预处理
func (base *AppBaseController) NextPreparer() {
	////检测当前用户有已经登录
	isLogin, user := base._checkLogin()
	logs.Info("是否登录状态", isLogin)
	if isLogin == false {
		controller, _ := base.GetControllerAndAction()
		if controller != "LoginController" {
			//base.Ctx.Redirect(401,base.URLFor("LoginController.Login"))
			//base.Abort402()
			base.Data["isLogin"] = false
		}
	} else {
		base.Data["isLogin"] = true
	}
	base.Data["user"] = user
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
