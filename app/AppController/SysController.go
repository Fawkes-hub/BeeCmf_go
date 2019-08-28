/**
* @author:BeeCMF_F
* @introduce: 系统相关配置控制器
* @time:2019/8/28
 */

package AppController

type SysController struct {
	AppBaseController
}

//获取icon
func (c *SysController) Icon() {
	c.Display("icon/index")
}
