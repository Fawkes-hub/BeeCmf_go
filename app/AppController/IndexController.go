package AppController

type IndexController struct {
	AppBaseController
}

// @router / [get]
func (c *IndexController) Index() {
	c.TplName = "app/index.html"
}

// @router /main [get]
func (c *IndexController) Main() {
	c.Ctx.WriteString("这是访问的主要内容")
}
