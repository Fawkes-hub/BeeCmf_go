package init

import "github.com/astaxie/beego"

//初始化配置文件

func InitConfig() {
	beego.BConfig.WebConfig.TemplateLeft = "[^"
	beego.BConfig.WebConfig.TemplateRight = "^]"
	//导入app文件下的配置信息
	LoadConfig("app/app.conf")
}

func LoadConfig(path string) {
	_ = beego.LoadAppConfig("ini", path)
}

//TODO 需要增加读取app目录 与 api目录下的config功能
