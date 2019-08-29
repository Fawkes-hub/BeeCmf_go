package common

import (
	"errors"
	"fmt"
	"math/rand"
	"os"
	"path"
	"strings"
	"time"

	"github.com/astaxie/beego"
)

//控制器的后台基础
type BaseController struct {
	beego.Controller
	controllerName string
	actionName     string
	//user           *models.
	//userId         int
}

//约定：如果子控制器中存在了NextController方法，就实现了当前接口
type NextPreparer interface {
	NextPreparer()
}

//前期准备
func (c *BaseController) Prepare() {
	//c.pageSize = 20
	controllerName, actionName := c.GetControllerAndAction()
	c.controllerName = strings.ToLower(controllerName[0 : len(controllerName)-10])
	c.actionName = strings.ToLower(actionName)
	c.Data["version"] = beego.AppConfig.String("version")
	c.Data["siteName"] = beego.AppConfig.String("site.name")
	c.Data["curRoute"] = c.controllerName + "." + c.actionName
	c.Data["curController"] = c.controllerName
	c.Data["curAction"] = c.actionName
	// noAuth := "ajaxsave/ajaxdel/table/loginin/loginout/getnodes/start"
	// isNoAuth := strings.Contains(noAuth, c.actionName)
	//fmt.Println(c.controllerName)
	//if (strings.Compare(c.controllerName, "apidoc")) != 0 {
	//	c.auth()
	//}
	//
	//c.Data["loginUserId"] = c.userId
	//c.Data["loginUserName"] = c.userName
	//判断下级的controller是否实现了当前方法，如果实现了，就进行调用当前方法
	if app, ok := c.AppController.(NextPreparer); ok {
		app.NextPreparer()
	}
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
	if msg == "" {
		msg = "操作失败"
	}
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
func (c *BaseController) Abort200(data interface{}, msg string, url string) {
	if msg == "" {
		msg = "操作成功"
	}
	mystruct := &ResultJson{
		Code: 200,
		Data: data,
		Url:  url,
		Msg:  msg,
	}
	c.Data["json"] = &mystruct
	if c.IsAjax() {
		c.ServeJSON()
	} else {
		c.Data["Content"] = mystruct.Msg
		c.Abort("200")
		c.Redirect(mystruct.Url, mystruct.Code)
	}
	c.StopRun()
	return
}

//登录超时的判断
func (c *BaseController) Abort402() {
	mystruct := &ResultJson{
		Code: 402,
		Data: "",
		Url:  "/login",
		Msg:  "登录超时",
	}
	c.Data["json"] = &mystruct
	if c.IsAjax() {
		c.ServeJSON()
	} else {
		c.Data["Content"] = mystruct.Msg
		c.Redirect(mystruct.Url, mystruct.Code)
	}
	c.StopRun()
	return
}

//返回模板的默认方法
func (c *BaseController) Display(tpl ...string) {
	//判断当前控制器与方法名是什么然后再直接跳转相对于的目录名
	var tplname string
	if len(tpl) > 0 {
		tplname = strings.Join([]string{tpl[0], "html"}, ".")
	} else {
		tplname = c.controllerName + "/" + c.actionName + ".html"
	}
	c.TplName = "app/" + tplname
}

// 是否POST提交
func (c *BaseController) IsPost() bool {
	return c.Ctx.Request.Method == "POST"
}

// 是否GET访问提交
func (c *BaseController) IsGet() bool {
	return c.Ctx.Request.Method == "GET"
}

// 是否是获取html界面界面
func (c *BaseController) IsHtml() bool {
	header := c.Ctx.Request.Header
	return c.Ctx.Request.Method == "GET" &&
		(strings.Index(header.Get("Accept"), "text/html") != -1)
}

//文件上传处理
func (c *BaseController) SaveFile(PIC_PATH string, AllowExt map[string]bool) (fpath string, error error) {
	f, h, _ := c.GetFile("file")
	//获取后缀
	ext := path.Ext(h.Filename)
	if _, err := AllowExt[ext]; !err {
		return "", errors.New("上传文件格式不正确")
	}
	//创建保存目录

	uploadDir := PIC_PATH + time.Now().Format("2006/01/02/")
	err := os.MkdirAll(uploadDir, 755)
	if err != nil {
		return "", err
	}
	//构造文件名称
	rand.Seed(time.Now().UnixNano())
	randNum := fmt.Sprintf("%d", rand.Intn(9999)+1000)
	hashName := SycMd5(time.Now().Format("2006_01_02_15_04_05_") + randNum)
	fileName := fmt.Sprintf("%x", hashName) + ext
	fpath = uploadDir + fileName
	defer f.Close() //关闭上传的文件，不然的话会出现临时文件不能清除的情况
	err = c.SaveToFile("file", fpath)
	if err != nil {
		return "", err
	}
	return fpath, nil
}
