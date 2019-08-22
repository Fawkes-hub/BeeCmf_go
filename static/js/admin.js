/**
 @Name：BeeCMF 轻后台管理系统
 @Author：FK
 */
layui.define(['element', 'form', 'laypage', 'jquery', 'laytpl', 'layer'], function (exports) {
    var element = layui.element
        , form = layui.form
        , laypage = layui.laypage
        , $ = layui.jquery
        , laytpl = layui.laytpl
        , layer = layui.layer;
    var imgs = $("img");
    //获取当前url
    var domain = window.location.protocol + "//" + window.location.host;
    imgs.map(function (index, item) {
        var src = $(item).attr("src")
        if (src.length > 0) {
            src = src.replace(/^\//, '')
            src = src.replace(/^.\//, '')
            $(item).attr("src", "")
            $(item).attr("src", domain + "/" + src)
        }
    });

    //statr 分页

    laypage.render({
        elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
        , count: 50 //数据总数，从服务端得到
        , theme: '#1e9fff'
    });

    // end 分頁


    // start 导航显示隐藏

    $("#mobile-nav").on('click', function () {
        $("#pop-nav").toggle();
    });

    // end 导航显示隐藏


    //start 评论的特效

    (function ($) {
        $.extend({
            tipsBox: function (options) {
                options = $.extend({
                    obj: null,  //jq对象，要在那个html标签上显示
                    str: "+1",  //字符串，要显示的内容;也可以传一段html，如: "<b style='font-family:Microsoft YaHei;'>+1</b>"
                    startSize: "12px",  //动画开始的文字大小
                    endSize: "30px",    //动画结束的文字大小
                    interval: 600,  //动画时间间隔
                    color: "red",    //文字颜色
                    callback: function () {
                    }    //回调函数
                }, options);

                $("body").append("<span class='num'>" + options.str + "</span>");

                var box = $(".num");
                console.log(options.obj)
                var left = options.obj.offset().left + options.obj.width() / 2;
                var top = options.obj.offset().top - 10;
                box.css({
                    "position": "absolute",
                    "left": left + "px",
                    "top": top + "px",
                    "z-index": 9999,
                    "font-size": options.startSize,
                    "line-height": options.endSize,
                    "color": options.color
                });
                box.animate({
                    "font-size": options.endSize,
                    "opacity": "0",
                    "top": top - parseInt(options.endSize) + "px"
                }, options.interval, function () {
                    box.remove();
                    options.callback();
                });
            }
        });
    })($);

    function niceIn(prop) {
        prop.find('i').addClass('niceIn');
        setTimeout(function () {
            prop.find('i').removeClass('niceIn');
        }, 1000);
    }

    $(function () {
        $(".like").on('click', function () {
            if (!($(this).hasClass("layblog-this"))) {
                var id = $(this).attr("data-id");
                var type = $(this).attr("data-type");
                if (type && type === "comment") {
                    url = "/praise/" + id;
                    field = {"type": "comment"}
                } else {
                    url = "/praise/" + id;
                    field = ""
                }
                var prs = this;
                $.ajax({
                    url: url,
                    data: field,
                    type: "POST",
                    success: function (res) {
                        if (res.code == 200) {
                            prs.text = '已赞';
                            $(prs).addClass('layblog-this');
                            $.tipsBox({
                                obj: $(prs),
                                str: "+1",
                                callback: function () {

                                }
                            });
                            niceIn($(prs));
                            layer.msg('点赞成功', {
                                icon: 6
                                , time: 1000
                            }, function () {
                                window.location.reload()
                            })
                        } else {
                            layer.msg(res.msg, {
                                icon: 2,
                                time: 800 //2秒关闭（如果不配置，默认是3秒）
                            }, function () {
                                if (res.url) {
                                    window.location = res.url
                                } else {
                                    window.location.reload()
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

                        });
                    }
                });

            }
        });
    });

    //end 评论的特效


    // start点赞图标变身
    $('#LAY-msg-box').on('click', '.info-img', function () {
        $(this).addClass('layblog-this');
    })


    // end点赞图标变身

    //end 提交
    $('#item-btn').on('click', function () {
        var elemCont = $('#LAY-msg-content')
            , content = elemCont.val();
        if (content.replace(/\s/g, '') == "") {
            layer.msg('请先输入留言');
            return elemCont.focus();
        }

        var view = $('#LAY-msg-tpl').html()

            //模拟数据
            , data = {
                username: '闲心'
                , avatar: '../res/static/images/info-img.png'
                , praise: 0
                , content: content
            };

        //模板渲染
        laytpl(view).render(data, function (html) {
            $('#LAY-msg-box').prepend(html);
            elemCont.val('');
            layer.msg('留言成功', {
                icon: 1
            })
        });

    })

    // start  图片遮罩
    var layerphotos = document.getElementsByClassName('layer-photos-demo');
    for (var i = 1; i <= layerphotos.length; i++) {
        layer.photos({
            photos: ".layer-photos-demo" + i + ""
            , anim: 0
        });
    }
    // end 图片遮罩


    //输出test接口
    exports('blog', {});


});


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
                        icon: 2,
                        time: 800 //2秒关闭（如果不配置，默认是3秒）
                    }, function () {
                        if (errorFunc !== null) {
                            errorFunc()
                        } else {
                            if (res.url) {
                                // window.location = res.url
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
                    // window.location.reload()
                });
            }
        });
    });

}

//wangedutor富文本编辑器通用方法
function wangEditorFunc(idName) {
    layui.use(['layer', 'jquery', 'form'], function () {
        var $ = layui.jquery;
        var E = window.wangEditor
        var editor = new E('#' + idName)
        //开启图片上传服务器
        // editor.customConfig.debug = true
        editor.customConfig.pasteFilterStyle = false
        wangEditorUpload(editor)
        // 或者 var editor = new E( document.getElementById('editor') )
        var $text1 = $('#article_content-input')
        editor.customConfig.onchange = function (html) {
            // 监控变化，同步更新到 textarea
            $text1.val(html)
        }
        editor.create();
        // 初始化 textarea 的值
        $text1.val(editor.txt.html())

    })
}

function wangEditorUpload(editor) {
    editor.customConfig.uploadFileName = 'file';
    editor.customConfig.uploadImgServer = "/UpImg";
    // 将图片大小限制为 3M
    editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
    editor.customConfig.customAlert = function (info) {
        // info 是需要提示的内容
        layer.msg('自定义提示：' + info)
    }
    editor.customConfig.uploadImgHooks = {
        customInsert: function (insertImg, result, editor) {
            if (result.code === 500) {
                layer.msg(result.msg, {
                    icon: 2,
                    time: 800 //2秒关闭（如果不配置，默认是3秒）
                });
            } else {
                var url = result.data;
                insertImg(url)
            }
        }
    }

}
