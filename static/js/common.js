//请求的弹出处理
function JqueryLayMsg(url, field, type = "Get", successFunc = null, errorFunc = null) {
    layui.use(['form', 'jquery', 'layer'], function () {
        var form = layui.form,
            $ = layui.jquery,
            layer = layui.layer;
        $.ajax({
            url: url,
            data: field,
            type: type,
            success: function (res) {
                if (res.code == 200) {
                    layer.msg(res.msg, {
                        offset: '50px',
                        icon: 1,
                        time: 800 //2秒关闭（如果不配置，默认是3秒）
                    }, function () {
                        if (successFunc !== null) {
                            successFunc()
                        } else {
                            if (res.url) {
                                window.location = res.url
                            } else {
                                window.location.reload()
                            }
                        }
                    });
                } else {
                    layer.msg(res.msg, {
                        offset: '50px',
                        icon: 0,
                        time: 800 //2秒关闭（如果不配置，默认是3秒）
                    }, function () {
                        if (errorFunc !== null) {
                            errorFunc()
                        } else {
                            if (res.url) {
                                window.location = res.url
                            }
                        }
                    });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                var res = jqXHR.responseJSON
                layer.msg(res.msg, {
                    icon: 2,
                    time: 800 //2秒关闭（如果不配置，默认是3秒）
                }, function () {
                    window.location.reload()
                });
            }
        });
    });

}