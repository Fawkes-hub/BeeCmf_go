package ApiController

import "github.com/astaxie/beego/logs"

type IndexController struct {
	ApiBaseController
}

// @router /api/ [get]
func (c *IndexController) Index() {
	c.TplName = "api/index.html"
}
