function addIconInbackground(t) {
    var n = localStorage.main, e = JSON.parse(n), r = localStorage.setting, i = JSON.parse(r), o = i.iconNum, a = o.split("x"), l = parseInt(a[0]), c = parseInt(a[1]), s = l * c;
    if (0 == e.length)e.push([t]); else for (var d = 0; d < e.length; d++) {
        if (!(d < e.length - 1)) {
            if (e[d].length < s) {
                e[d].push(t);
                break
            }
            e.push([t]);
            break
        }
        if (e[d].length < s) {
            e[d].push(t);
            break
        }
    }
    var n = JSON.stringify(e);
    localStorage.main = n
}
window.i18n = function (t) {
    try {
        return chrome.i18n.getMessage(t)
    } catch (n) {
        return t
    }
}, window.isZh = function () {
    return "zh" == i18n("lang") ? !0 : !1
}, window.$setlang = {
    ini: function () {
        for (var t = $("[i18n]").length, n = 0; t > n; n++) {
            var e = $("[i18n]")[n], r = e.getAttribute("i18n"), i = i18n(r);
            $(e).text(i)
        }
        for (var o = $("[i18nh]").length, n = 0; o > n; n++) {
            var e = $("[i18nh]")[n], r = e.getAttribute("i18nh"), i = i18n(r);
            $(e).html(i)
        }
        for (var a = $("[i18n-placeholder]").length, n = 0; a > n; n++) {
            var e = $("[i18n-placeholder]")[n], r = e.getAttribute("i18n-placeholder"), i = i18n(r);
            $(e).attr("placeholder", i)
        }
        for (var l = $("[i18n-value]").length, n = 0; l > n; n++) {
            var e = $("[i18n-value]")[n], r = e.getAttribute("i18n-value"), i = i18n(r);
            $(e).attr("value", i)
        }
        for (var c = $("[i18n-title]").length, n = 0; c > n; n++) {
            var e = $("[i18n-title]")[n], r = e.getAttribute("i18n-title"), i = i18n(r);
            $(e).attr("title", i)
        }
    }
}, $(document).ready(function () {
    var t = Math.floor(10 * Math.random()) + 1, n = $(".icobgColor:nth-child(" + t + ")").css("background-color");
    $(".icobgColor:nth-child(" + t + ")").css("border-color", n), $("#icon").css({"background-color": n}), $("#addTitle").live("input", function (t) {
        var n = $("#addTitle").val(), e = n.substring(0, 4);
        $("#icon").text(e)
    }), $(".icobgColorPre").live("click", function (t) {
        $(".icobgColor").css("border-color", "transparent");
        var n = $(this).css("background-color");
        $(this).css("border-color", n), $("#icon").css({"background-color": n})
    }), chrome.tabs.getSelected(null, function (t) {
        tabUrl = t.url, tabTitle = t.title, $("#addTitle").val(tabTitle), $("#addTitle").attr("url", tabUrl), $("#icon").text(tabTitle)
    }), $("#addBu").live("click", function (t) {
        localStorage.lastAdd = "true";
        var n = $("#addTitle").val(), e = $("#addTitle").attr("url"), r = $("#icon").css("background-color"), i = {
            type: "custom",
            name: n,
            url: e,
            bgColor: r,
            title: n.substring(0, 4),
            ico: ""
        };
        chrome.tabs.query({title: ""}, function (t) {
            for (var n = !0, e = 0; e < t.length; e++)if (console.log(t[e]), t[e].url.indexOf("chrome://newtab") >= 0) {
                n = !1;
                break
            }
            n ? addIconInbackground(i) : chrome.extension.sendMessage("dbfmnekepjoapopniengjbcpnbljalfg", i, function (t) {
            })
        }), $(this).val(i18n("Added")), $(this).attr("disabled", "disabled"), $(this).css("background-color", "#ccc"), $(this).css("box-shadow", "none")
    }), $setlang.ini()
});