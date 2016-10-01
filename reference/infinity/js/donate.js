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
            var e = $("[i18n]")[n], i = e.getAttribute("i18n"), r = i18n(i);
            $(e).text(r)
        }
        for (var a = $("[i18nh]").length, n = 0; a > n; n++) {
            var e = $("[i18nh]")[n], i = e.getAttribute("i18nh"), r = i18n(i);
            $(e).html(r)
        }
        for (var l = $("[i18n-placeholder]").length, n = 0; l > n; n++) {
            var e = $("[i18n-placeholder]")[n], i = e.getAttribute("i18n-placeholder"), r = i18n(i);
            $(e).attr("placeholder", r)
        }
        for (var h = $("[i18n-value]").length, n = 0; h > n; n++) {
            var e = $("[i18n-value]")[n], i = e.getAttribute("i18n-value"), r = i18n(i);
            $(e).attr("value", r)
        }
        for (var o = $("[i18n-title]").length, n = 0; o > n; n++) {
            var e = $("[i18n-title]")[n], i = e.getAttribute("i18n-title"), r = i18n(i);
            $(e).attr("title", r)
        }
    }
}, $(document).ready(function () {
    $setlang.ini(), isZh() ? ($("#donateChinese").show(), $("#donateEnglish").hide()) : ($("#donateChinese").hide(), $("#donateEnglish").show())
});