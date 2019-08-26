//请求URL
layui.define([], function (exports) {
    exports('api', {
        login: 'login',
        // getMenu:'static/json/menu.js',
        getMenu: '/menu/index',
        getGoods: 'json/goods.js'
    });
})