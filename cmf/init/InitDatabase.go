package init

import (
	"github.com/BeeCmf/models"
	"github.com/astaxie/beego"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

//同意注册数据库配置
func InitDatabase() {
	//初始化配置信息
	host := beego.AppConfig.DefaultString("db.host", "127.0.0.1")
	user := beego.AppConfig.DefaultString("db.user", "root")
	password := beego.AppConfig.DefaultString("db.password", "")
	port := beego.AppConfig.DefaultString("db.port", "3306")
	dbname := beego.AppConfig.DefaultString("db.name", "beecmf")
	dsn := user + ":" + password + "@(" + host + ":" + port + ")/" + dbname + "?charset=utf8&parseTime=True&loc=Local"
	var err error
	var Db = models.ModelDb()
	Db, err = gorm.Open("mysql", dsn)
	if err != nil {
		panic("数据库连接失败：" + err.Error())
	}
	Db.SingularTable(true)
	//设置默认的表名
	gorm.DefaultTableNameHandler = func(db *gorm.DB, defaultTableName string) string {
		prefix := beego.AppConfig.DefaultString("db.prefix", "cmf_")
		return prefix + defaultTableName
	}

	//是否默认开启debug模式
	if beego.AppConfig.String("runmode") == "dev" {
		Db.LogMode(true)
	}
}
