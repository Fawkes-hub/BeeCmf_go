//请求URL
layui.define([], function (exports) {
    exports('api', {
        login: 'login',
        //菜单栏接口
        getMenu: "menu/index",
        addMenu: "menu/add",
        editMenu: "menu/edit",
        delMenu: "menu/del",

        getGoods: 'json/goods.js',
    });
})