package AppController

type IndexController struct {
	AppBaseController
}

func (c *IndexController) Index() {
	c.TplName = "index.html"
}

func (c *IndexController) Layout() {
	c.TplName = "app/layout.html"
}

func (c *IndexController) Main() {
	c.Ctx.WriteString("这是访问的主要内容")
}
