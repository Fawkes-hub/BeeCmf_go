package controller

import "github.com/astaxie/beego/logs"

type IndexController struct {
	BaseController
}

// @router / [get]
func (c *IndexController) index() {
	logs.Info("打印一下 看看成果已否")
	c.TplName = "app/index.html"
}
