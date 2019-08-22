package init

import "github.com/astaxie/beego"

//初始化配置文件

func InitConfig() {
	LoadConfig("data/conf/conf.conf")
	LoadConfig("data/conf/database.conf")
}

func LoadConfig(path string) {
	_ = beego.LoadAppConfig("ini", path)
}

//TODO 需要增加读取app目录 与 api目录下的config功能
