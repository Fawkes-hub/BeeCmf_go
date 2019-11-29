/**
* @author:BeeCMF_F
* @introduce: 系统相关配置控制器
* @time:2019/8/28
 */

package AppController

import (
	"BeeCmf_go/app/AppService"
	"github.com/astaxie/beego"
)

type SysController struct {
	AppBaseController
}

//网站相关配置修改
func (c *SysController) Config() {
	var site AppService.SiteConfig
	if c.IsHtml() {
		//读取option配置
		var site AppService.SiteConfig
		_ = site.GetSiteConfig()
		c.Data["data"] = site
		c.Display()
	} else {
		if err := c.ParseForm(&site); err != nil {
			c.Abort500("传入参数错误："+err.Error(), "")
		}
		err := site.AddSiteConfig()
		if err != nil {
			c.Abort500(err.Error(), "")
		}
		c.Abort200("", "添加成功", "")
	}
}

//获取icon
func (c *SysController) Icon() {
	c.Display()
}

//上传图片接口
func (c *SysController) UpImg() {
	//上传图片的限制格式
	AllowImgExt := map[string]bool{
		".jpg":  true,
		".jpeg": true,
		".png":  true,
		".gif":  true,
	}
	PIC_PATH := beego.AppConfig.String("pic_path")
	fpath, err := c.SaveFile(PIC_PATH, AllowImgExt)
	if err != nil {
		c.Abort500(err.Error(), "")
		return
	}
	c.Abort200(fpath, "上传成功", "")
}
