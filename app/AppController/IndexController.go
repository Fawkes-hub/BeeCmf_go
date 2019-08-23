package AppController

type IndexController struct {
	AppBaseController
}

// @router / [get]
func (c *IndexController) Index() {
	c.TplName = "app/index.html"
}
