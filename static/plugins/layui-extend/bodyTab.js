layui.define(['element', 'layer', 'jquery'], function (drdrdr) {

    var tabFilter;

    var element = layui.element;
    var layer = layui.layer;
    var $ = layui.jquery;
    var Tab = function () {
        this.tabConfig = {
            openTabNum: undefined,
            tabFilter: undefined,
            ajaxSettings: {}
        }
    };

    //主页的唯一id
    var homeLayid = undefined;

    //获取二级菜单数据
    Tab.prototype.render = function () {

        var _this = this;
        var ajaxSettings = _this.tabConfig.ajaxSettings;

        ajaxSettings.success = function (data) {

            if (typeof (data) == "string") {
                //如果是字符格式则转为js对象
                data = JSON.parse(data);
            }

            if (data.code == 200) {
                //显示左侧菜单
                if ($(".navBar").html() == '') {
                    var htmlyem = navBar(data.data);
                    $(".navBar").html(htmlyem);
                    element.render();  //初始化页面元素

                    homeLayid = homeLayid || '';
                    $('#top_tabs li.layui-this').first().attr('lay-id', homeLayid);
                    _this.selectedMenu(homeLayid);
                }
            } else {
                layer.msg((data.msg || '加载错误'), {anim: 10, icon: 0});
            }

        }

        ajaxSettings.error = function (ex) {

            console.warn(ex.responseText);

        }


        //jquery ajax请求
        $.ajax(ajaxSettings);

    }

    //参数设置
    Tab.prototype.set = function (option) {
        var _this = this;
        $.extend(true, _this.tabConfig, option);

        //渲染左侧菜单
        _this.render();

        return _this;
    };

    //通过layid选中菜单
    Tab.prototype.selectedMenu = function (layid) {
        $(".navBar a.layui-this,.navBar dd.layui-this,.navBar li.layui-this").removeClass('layui-this');
        $('.navBar li.layui-nav-item').removeClass('layui-nav-itemed');
        $('.navBar a[data-layid="' + layid + '"]').first().addClass('layui-this').parent().addClass('layui-this').parents('li.layui-nav-item').addClass('layui-nav-itemed');
    }

    //通过layid判断tab是否存在
    Tab.prototype.hasTab = function (layid) {
        var isTabExist = false;
        $(".layui-tab-title.top_tab li").each(function () {
            if ($(this).attr('lay-id') == layid) {
                isTabExist = true;
                return false;
            }
        })
        return isTabExist;
    }

    //右侧内容tab操作
    var tabIdIndex = 0;
    Tab.prototype.tabAdd = function (_this) {
        var that = this;
        var openTabNum = that.tabConfig.openTabNum;
        tabFilter = that.tabConfig.tabFilter;

        if (_this.attr("target")) {
            //创建一个a标签然后js执行点击跳转
            var aElemant = document.createElement('a');
            aElemant.href = _this.attr("data-url");
            aElemant.target = _this.attr("target");
            aElemant.style.display = 'none';
            aElemant.onclick = function (event) {
                event.stopPropagation();
            }
            document.body.appendChild(aElemant);
            aElemant.click();
            document.body.removeChild(aElemant);
        } else if (_this.attr("data-url") != undefined) {
            var title = '';
            if (_this.find("i.iconfont,i.layui-icon").attr("data-icon") != undefined) {
                if (_this.find("i.iconfont").attr("data-icon") != undefined) {
                    title += '<i class="iconfont ' + _this.find("i.iconfont").attr("data-icon") + '"></i>';
                } else {
                    var layuiIconStr = _this.find("i.layui-icon").attr("data-icon");
                    if (layuiIconStr && (layuiIconStr.length > 3) && (layuiIconStr.indexOf('&') === -1)) {
                        title += '<i class="layui-icon ' + layuiIconStr + '"></i>';
                    } else {
                        title += '<i class="layui-icon">' + layuiIconStr + '</i>';
                    }
                }
            } else {
                title += '<i class="layui-icon"></i>';
            }

            var menuGuid = $(_this).attr('data-layid');
            if (!menuGuid) {
                menuGuid = new GUID().newGUID();
                //记住每次生成的GUID，这样下次不用重新生成。
                $(_this).attr('data-layid', menuGuid);
            }

            //已打开的窗口中不存在
            if ((!that.hasTab(menuGuid)) && _this.siblings("dl.layui-nav-child").length == 0) {
                if ($(".layui-tab-title.top_tab li").length >= openTabNum) {
                    layer.msg('只能同时打开' + openTabNum + '个选项卡哦。不然系统会卡的！');
                    return;
                }
                var menuName = _this.find("cite").text();

                tabIdIndex++;
                title += '<cite>' + menuName + '</cite>';
                title += '<i class="layui-icon layui-unselect layui-tab-close" data-id="' + tabIdIndex + '">&#x1006;</i>';

                element.tabAdd(tabFilter, {
                    title: title,
                    content: "<iframe id='laftMenu" + menuGuid + "' frameborder='0' src='" + _this.attr("data-url") + "' data-id='" + tabIdIndex + "' style='padding: 0px; margin: 0px; border-width: 0px;' ></frame>",
                    id: menuGuid
                })
                //当前窗口内容
                var curmenu = {
                    "icon": (_this.find("i.iconfont").attr("data-icon") != undefined) ? (_this.find("i.iconfont").attr("data-icon")) : (_this.find("i.layui-icon").attr("data-icon")),
                    "title": menuName,
                    "href": _this.attr("data-url"),
                    "layId": menuGuid
                }
                element.tabChange(tabFilter, menuGuid);
                that.tabMove(); //顶部窗口是否可滚动

                //刷新iframe
                var __thisIframe = document.getElementById("laftMenu" + menuGuid);
                __thisIframe.src = __thisIframe.src;
                // __thisIframe.contentWindow.location.reload(true);
            } else {
                element.tabChange(tabFilter, menuGuid);
                that.tabMove(); //顶部窗口是否可滚动
            }
        }
    }

    //监听切换tab设置当前选中tab
    Tab.prototype.monitorSwitchTab = function (htmlElement) {
        tabFilter = this.tabConfig.tabFilter;
        element.tabChange(tabFilter, $(htmlElement).attr("lay-id")).init();
    }

    //关闭tab监听
    Tab.prototype.monitorCloseTab = function (htmlElement) {
        tabFilter = this.tabConfig.tabFilter;
        element.tabDelete(tabFilter, $(htmlElement).parent("li").attr("lay-id")).init();
        this.tabMove();
    }

    //关闭其他tab
    Tab.prototype.CloseOtherTab = function () {
        tabFilter = this.tabConfig.tabFilter;

        //获取不可以关闭的tab数量
        var notCloseLength = 1;
        if ($("#top_tabs li.layui-this").attr("lay-id") != homeLayid) {
            ++notCloseLength;
        }
        //获取全部的tab个数
        var tabLength = $("#top_tabs li").length;
        if ((tabLength - notCloseLength) > 0) {
            $("#top_tabs li").each(function () {
                if ($(this).attr("lay-id") != homeLayid && (!$(this).hasClass("layui-this"))) {
                    element.tabDelete(tabFilter, $(this).attr("lay-id")).init();
                }
            });
        } else {
            layer.msg("没有可以关闭的窗口了@_@");
        }
        //渲染顶部窗口
        this.tabMove();
    }

    //关闭全部tab
    Tab.prototype.CloseAllTab = function () {
        tabFilter = this.tabConfig.tabFilter;

        if ($("#top_tabs li").length > 1) {
            $("#top_tabs li").each(function () {
                if ($(this).attr("lay-id") != homeLayid) {
                    element.tabDelete(tabFilter, $(this).attr("lay-id")).init();
                }
            });
        } else {
            layer.msg("没有可以关闭的窗口了@_@");
        }
        //渲染顶部窗口
        this.tabMove();
    }

    //顶部窗口移动
    Tab.prototype.tabMove = function () {
        $(window).on("resize", function () {
            var topTabsBox = $("#top_tabs_box"),
                topTabsBoxWidth = $("#top_tabs_box").width(),
                topTabs = $("#top_tabs"),
                topTabsWidth = $("#top_tabs").width(),
                tabLi = topTabs.find("li.layui-this"),
                top_tabs = document.getElementById("top_tabs");

            if (topTabsWidth > topTabsBoxWidth) {
                if (tabLi.position().left > topTabsBoxWidth || tabLi.position().left + topTabsBoxWidth > topTabsWidth) {
                    topTabs.css("left", topTabsBoxWidth - topTabsWidth);
                } else {
                    topTabs.css("left", -tabLi.position().left);
                }
                //拖动效果
                var flag = false;
                var cur = {
                    x: 0,
                    y: 0
                }
                var nx, dx, x;

                function down(event) {
                    flag = true;
                    var touch;
                    if (event.originalEvent.targetTouches) {
                        touch = event.originalEvent.targetTouches[0];
                    } else {
                        touch = event.originalEvent;
                    }
                    cur.x = touch.clientX;
                    dx = top_tabs.offsetLeft;
                }

                function move(event) {
                    var self = this;
                    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                    if (flag) {
                        var touch;
                        if (event.originalEvent.targetTouches) {
                            touch = event.originalEvent.targetTouches[0];
                        } else {
                            touch = event.originalEvent;
                        }
                        nx = touch.clientX - cur.x;
                        x = dx + nx;
                        if (x > 0) {
                            x = 0;
                        } else {
                            if (x < topTabsBoxWidth - topTabsWidth) {
                                x = topTabsBoxWidth - topTabsWidth;
                            } else {
                                x = dx + nx;
                            }
                        }
                        top_tabs.style.left = x + "px";
                        //阻止页面的滑动默认事件
                        document.addEventListener("touchmove", function (event) {
                            event.preventDefault();
                        }, {passive: false});
                    }
                }

                //鼠标释放时候的函数
                function end() {
                    flag = false;
                }

                //pc端拖动效果
                topTabs.on("mousedown", down);
                topTabs.on("mousemove", move);
                $(document).on("mouseup", end);
                //移动端拖动效果
                topTabs.on("touchstart", down);
                topTabs.on("touchmove", move);
                topTabs.on("touchend", end);
            } else {
                //移除pc端拖动效果
                topTabs.off("mousedown", down);
                topTabs.off("mousemove", move);
                topTabs.off("mouseup", end);
                //移除移动端拖动效果
                topTabs.off("touchstart", down);
                topTabs.off("touchmove", move);
                topTabs.off("touchend", end);
                topTabs.removeAttr("style");
                return false;
            }
        }).resize();
    }


    //图标字符转换为html
    Tab.prototype.convertIconHtml = function (iconStr) {
        var openTitle = '';
        if (iconStr) {
            if (iconStr.split("-")[0] == 'icon') {
                openTitle += '<i data-icon="' + iconStr + '" class="iconfont ' + iconStr + '"></i>';
            } else {
                if (iconStr && (iconStr.length > 3) && (iconStr.indexOf('&') === -1)) {
                    openTitle += '<i data-icon="' + iconStr + '" class="layui-icon ' + iconStr + '"></i>';
                } else {
                    openTitle += '<i data-icon="' + iconStr + '" class="layui-icon">' + iconStr + '</i>';
                }
            }
        } else {
            openTitle += '<i class="layui-icon"></i>';
        }
        return openTitle;
    }


    //全球唯一的值
    function GUID() {
        this.date = new Date();   /* 判断是否初始化过，如果初始化过以下代码，则以下代码将不再执行，实际中只执行一次 */
        if (typeof this.newGUID != 'function') {   /* 生成GUID码 */
            GUID.prototype.newGUID = function () {
                this.date = new Date();
                var guidStr = '';
                sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16);
                sexadecimalTime = this.hexadecimal(this.getGUIDTime(), 16);
                for (var i = 0; i < 9; i++) {
                    guidStr += Math.floor(Math.random() * 16).toString(16);
                }
                guidStr += sexadecimalDate;
                guidStr += sexadecimalTime;
                while (guidStr.length < 32) {
                    guidStr += Math.floor(Math.random() * 16).toString(16);
                }
                return this.formatGUID(guidStr);
            }
            /* * 功能：获取当前日期的GUID格式，即8位数的日期：19700101 * 返回值：返回GUID日期格式的字条串 */
            GUID.prototype.getGUIDDate = function () {
                return this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this.date.getDay());
            }
            /* * 功能：获取当前时间的GUID格式，即8位数的时间，包括毫秒，毫秒为2位数：12300933 * 返回值：返回GUID日期格式的字条串 */
            GUID.prototype.getGUIDTime = function () {
                return this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this.addZero(this.date.getSeconds()) + this.addZero(parseInt(this.date.getMilliseconds() / 10));
            }
            /* * 功能: 为一位数的正整数前面添加0，如果是可以转成非NaN数字的字符串也可以实现 * 参数: 参数表示准备再前面添加0的数字或可以转换成数字的字符串 * 返回值: 如果符合条件，返回添加0后的字条串类型，否则返回自身的字符串 */
            GUID.prototype.addZero = function (num) {
                if (Number(num).toString() != 'NaN' && num >= 0 && num < 10) {
                    return '0' + Math.floor(num);
                } else {
                    return num.toString();
                }
            }
            /*  * 功能：将y进制的数值，转换为x进制的数值 * 参数：第1个参数表示欲转换的数值；第2个参数表示欲转换的进制；第3个参数可选，表示当前的进制数，如不写则为10 * 返回值：返回转换后的字符串 */
            GUID.prototype.hexadecimal = function (num, x, y) {
                if (y != undefined) {
                    return parseInt(num.toString(), y).toString(x);
                } else {
                    return parseInt(num.toString()).toString(x);
                }
            }
            /* * 功能：格式化32位的字符串为GUID模式的字符串 * 参数：第1个参数表示32位的字符串 * 返回值：标准GUID格式的字符串 */
            GUID.prototype.formatGUID = function (guidStr) {
                var str1 = guidStr.slice(0, 8) + '-', str2 = guidStr.slice(8, 12) + '-',
                    str3 = guidStr.slice(12, 16) + '-', str4 = guidStr.slice(16, 20) + '-', str5 = guidStr.slice(20);
                return str1 + str2 + str3 + str4 + str5;
            }
        }
    };

    //需要渲染左侧菜单的html
    function navBar(strData) {

        //根据title获取唯一id
        var getGuidByMid = function (mid, title) {
            if ((mid == "home" || title == "主页") && homeLayid === undefined) {
                homeLayid = (mid || new GUID().newGUID());
                return homeLayid;
            } else if (typeof (mid) === "string" && mid !== "") {
                return mid;
            }
            return new GUID().newGUID();
        }

        //图标字符转换为html
        var convertIconHtml = new Tab().convertIconHtml;

        //递归获取子菜单html
        var getChildrenHtml = function (item) {
            var ulHtml = '<li class="layui-nav-item">';
            if (item.children != undefined && item.children.length > 0) {
                ulHtml += '<a title="' + item.title + '" data-layid="' + getGuidByMid(item.mid, item.title) + '" href="javascript:void(0)">';

                ulHtml += convertIconHtml(item.icon);

                ulHtml += '<cite>' + item.title + '</cite>';
                ulHtml += '<span class="layui-nav-more"></span>';
                ulHtml += '</a>';
                ulHtml += '<ul class="layui-nav-child">';

                for (var i = 0; i < item.children.length; i++) {
                    ulHtml += getChildrenHtml(item.children[i]);
                }

                ulHtml += "</ul>";
            } else {
                if (item.target) {
                    ulHtml += '<a title="' + item.title + '" data-layid="' + getGuidByMid(item.mid, item.title) + '" href="' + item.href + '" data-url="' + item.href + '" target="' + item.target + '">';
                } else {
                    ulHtml += '<a title="' + item.title + '" data-layid="' + getGuidByMid(item.mid, item.title) + '" href="' + item.href + '" data-url="' + item.href + '">';
                }
                ulHtml += convertIconHtml(item.icon);
                ulHtml += '<cite>' + item.title + '</cite></a>';
            }
            ulHtml += '</li>';
            return ulHtml;
        }


        //部分用户解析出来的是字符串，转换一下
        var data = (typeof (strData) == "string") ? JSON.parse(strData) : strData;

        //菜单解析
        var ulHtml = '<ul class="layui-nav layui-nav-tree" lay-filter="magetree">';
        for (var i = 0; i < data.length; i++) {
            ulHtml += getChildrenHtml(data[i]);
        }
        ulHtml += '</ul>';
        return ulHtml;
    }


    var bodyTab = new Tab();

    //将bodyTab给layui模块化加载
    layui.bodyTab = bodyTab;
    drdrdr('bodyTab', bodyTab);

});//layui.define的结尾