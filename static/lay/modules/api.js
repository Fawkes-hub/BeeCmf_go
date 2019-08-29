//请求URL
layui.define([], function (exports) {
    exports('api', {
        login: 'login',
        //菜单栏接口
        getMenu: "menu/index",
        addMenu: "menu/save",
        delMenu: "menu/del",
        listsMenu: "menu/lists",

        getGoods: 'json/goods.js',
        saveConfig: "sys/config",
        UpImg: "sys/upimg"
    });
})