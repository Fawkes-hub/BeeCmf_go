package common

import "github.com/astaxie/beego"

type ErrorController struct {
	beego.Controller
}

// @router /error404 [get]
func (c *ErrorController) Error404() {
	c.Data["Content"] = "页面不存在"
	c.TplName = "app/error/404.html"
	if c.IsAjax() {
		c.Ctx.Output.Status = 404
		c.Data["json"] = map[string]interface{}{
			"code": "404",
			"msg":  "请求异常",
		}
		c.ServeJSON()
	}
}

func (c *ErrorController) Error500() {
	c.Data["Content"] = "server error"
	c.TplName = "app/error/500.html"
	if c.IsAjax() {
		c.Ctx.Output.Status = 500
		c.Data["json"] = map[string]interface{}{
			"code": "500",
			"msg":  "无效访问",
		}
		c.ServeJSON()
	}
}

func (c *ErrorController) ErrorDb() {
	c.Data["content"] = "database is now down"
	c.TplName = "dberror.html"
}
