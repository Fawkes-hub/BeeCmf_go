package init

import (
	"github.com/BeeCmf/cmf/common"
	"github.com/astaxie/beego"
	"strings"
)

func init() {
	InitConfig()
	initTemplate()
	initSession()
	initError()
	InitDatabase()

}

func initTemplate() {
	_ = beego.AddFuncMap("equrl", func(x, y string) bool {
		var s1 = strings.Trim(x, "/")
		var s2 = strings.Trim(y, "/")
		return strings.Compare(s1, s2) == 0
	})
}
func initSession() {
	beego.BConfig.WebConfig.Session.SessionOn = true
	//beego.BConfig.WebConfig.Session.SessionProvider="file"
	//beego.BConfig.WebConfig.Session.SessionProviderConfig = "data/session"
}

//初始化错误处理
func initError() {
	beego.ErrorController(&common.ErrorController{})
}

//初始化配置文件
