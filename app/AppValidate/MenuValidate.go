/**
* @author:BeeCMF_F
* @introduce: 后台菜单的添加验证
* @time:2019/8/27
 */
package AppValidate

import (
	"errors"
	"reflect"

	"BeeCmf_go/models"
	"github.com/astaxie/beego/validation"
)

type MenuValidate struct {
	models.Menu
}

func (a *MenuValidate) ValidMenu() (err error) {
	valid := validation.Validation{}
	b, _ := valid.Valid(a.Menu)
	if !b {
		st := reflect.TypeOf(MenuValidate{})
		for _, err := range valid.Errors {
			filed, _ := st.FieldByName(err.Field)
			var alias = filed.Tag.Get("alias")
			return errors.New(alias + err.Message)
		}
	}
	//检测当前文章名称是否存在
	var menu models.Menu
	menu.Controller = a.Controller
	menu.Action = a.Action
	menu.Param = a.Param
	menu.ParentId = a.ParentId
	_ = menu.OneMenu()
	if !reflect.DeepEqual(menu, models.Menu{}) {
		if menu.Id != a.Id {
			return errors.New("当前控制器与方法在存在，请重新填写")
		}
	}

	return nil
}
