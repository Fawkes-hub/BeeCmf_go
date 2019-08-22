package common

import "github.com/astaxie/beego"

//控制器的后台基础
type BaseController struct {
	beego.Controller
}

//预设定的返回信息
type ResultJson struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Url  string      `json:"url,omitempty"`
	Data interface{} `json:"data,omitempty"`
}

//错误的返回信息
func (c *BaseController) Abort500(msg string, url string) {
	mystruct := &ResultJson{
		Code: 500,
		Msg:  msg,
		Url:  url,
	}
	c.Data["json"] = &mystruct
	if c.IsAjax() {
		c.ServeJSON()
	} else {
		c.Data["Content"] = msg
		c.Abort("500")
	}
	c.StopRun()
	return
}

//正确的返回信息
func (c *BaseController) Abort200(data interface{}, url string) {
	mystruct := &ResultJson{
		Code: 200,
		Data: data,
		Url:  url,
		Msg:  "操作成功",
	}
	c.Data["json"] = &mystruct
	c.ServeJSON()
}

//返回模板的默认方法
func (c *BaseController) Display() {
	c.TplName = "reg.html"
}
