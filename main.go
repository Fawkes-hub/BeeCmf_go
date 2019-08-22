package main

import (
	_ "github.com/BeeCmf/cmf/init"
	_ "github.com/BeeCmf/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Run()
}
