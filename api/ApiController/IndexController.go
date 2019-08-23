package ApiController

import "github.com/astaxie/beego/logs"

type IndexController struct {
	ApiBaseController
}

// @router /api/ [get]
func (c *IndexController) Index() {
	logs.Info("打印一下 看看成果已否111111")
	c.TplName = "api/index.html"
}
