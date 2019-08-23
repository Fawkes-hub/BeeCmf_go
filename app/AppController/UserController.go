package AppController

type UserController struct {
	AppBaseController
}

// @router /user [get]
func (c *UserController) User() {
	c.Data["Success"] = cpt.VerifyReq(c.Ctx.Request)
	c.TplName = "user.html"
}
