package main

import (
	_ "BeeCmf_go/cmf/init"
	_ "BeeCmf_go/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Run()
}
