package AppController

import "github.com/astaxie/beego/logs"

type IndexController struct {
	AppBaseController
}

// @router / [get]
func (c *IndexController) Index() {
	logs.Info("打印一下 看看成果已否")
	c.TplName = "app/login.html"
}
