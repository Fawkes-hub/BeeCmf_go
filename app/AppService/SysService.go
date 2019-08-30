/**
* @author:BeeCMF_F
* @introduce: 通用方法处理服务层 主要是针对每一项option进行编辑处理
* @time:2019/8/29
 */

package AppService

import (
	"encoding/json"
	"errors"
	"github.com/BeeCmf/models"
	"reflect"
)

type SiteConfig struct {
	SiteLogo string `form:"site_logo" json:"site_logo"`
	SiteName string `form:"site_name" json:"site_name"`
	Remark   string `form:"remark" json:"remark"`
}

//网站配置的保存 //主要是为了组合成为一个json格式的字符串
func (s *SiteConfig) AddSiteConfig() error {
	str, err := json.Marshal(s)
	if err != nil {
		return errors.New("数据json化错误：" + err.Error())
	}
	var data models.Option
	data.OptionName = "site_config"
	_ = data.OneOption()
	//先查一次
	if !reflect.DeepEqual(data, models.Option{}) {
		data.OptionValue = string(str)
		err = data.EditOptionData()
	} else {
		data.Autoload = 1
		data.OptionComment = "网站配置信息"
		err = data.AddOptionData()
	}
	return err
}

//获取网站配置  并且转为结构体返回
func (s *SiteConfig) GetSiteConfig() error {
	var (
		data models.Option
		err  error
	)
	data.OptionName = "site_config"
	////获取当前网站配置的数据
	_ = data.OneOption()
	err = json.Unmarshal([]byte(data.OptionValue), &s)
	return err
}
