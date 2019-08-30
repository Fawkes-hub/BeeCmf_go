/**
* @author:BeeCMF_F
* @introduce: 全站配置表模型层
* @time:2019/8/29
 */

package models

//获取option信息
type Option struct {
	Id            int
	Autoload      int    `alias:"是否自动加载"`
	OptionName    string `alias:"配置名称"`
	OptionValue   string `alias:"配置值"`
	OptionComment string `alias:"中文备注"`
}

func (m *Option) OneOption() (err error) {
	Db.LogMode(true)
	return Db.Model(Option{}).Where(&m).First(&m).Error
}

//进行添加
func (m *Option) AddOptionData() (err error) {
	Db.LogMode(true)
	return Db.Model(Option{}).Create(&m).Error
}

//进行编辑
func (m *Option) EditOptionData() (err error) {
	Db.LogMode(true)
	return Db.Model(Option{}).Save(&m).Error
}
