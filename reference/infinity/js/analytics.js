!function () {
    function t(t, e) {
        return t.href = e
    }

    function e(t, e) {
        return t.name = e
    }

    function n(t) {
        Tt.set(t)
    }

    function r(t) {
        return "function" == typeof t
    }

    function i(t) {
        return "[object Array]" == Object[pt].toString[bt](Object(t))
    }

    function a(t) {
        return void 0 != t && -1 < (t.constructor + "")[ht]("String")
    }

    function o(t, e) {
        return 0 == t[ht](e)
    }

    function s(t) {
        return t ? t[q](/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
    }

    function c() {
        return [Kt() ^ 2147483647 & Gt(), z.round((new Date)[K]() / 1e3)][xt](".")
    }

    function u(t) {
        var e = Pt[W]("img");
        return e.width = 1, e.height = 1, e.src = t, e
    }

    function f() {
    }

    function v(t) {
        return G instanceof Function ? G(t) : (n(28), t)
    }

    function h(t) {
        return v(t)[q](/\(/g, "%28")[q](/\)/g, "%29")
    }

    function d(t, e) {
        if (t) {
            var n = Pt[W]("script");
            n.type = "text/javascript", n.async = !0, n.src = t, n.id = e;
            var r = Pt.getElementsByTagName("script")[0];
            r[St].insertBefore(n, r)
        }
    }

    function l() {
        return ve || "https:" == Pt[Z][rt] ? "https:" : "http:"
    }

    function g() {
        var t = "" + Pt[Z][et];
        return 0 == t[ht]("www.") ? t[_t](4) : t
    }

    function p(t) {
        var e = Pt.referrer;
        if (/^https?:\/\//i[ut](e)) {
            if (t)return e;
            t = "//" + Pt[Z][et];
            var n = e[ht](t);
            if ((5 == n || 6 == n) && (t = e[M](n + t[gt]), "/" == t || "?" == t || "" == t || ":" == t))return;
            return e
        }
    }

    function m(t, e) {
        if (1 == e[gt] && null != e[0] && "object" == typeof e[0])return e[0];
        for (var n = {}, r = z.min(t[gt] + 1, e[gt]), i = 0; r > i; i++) {
            if ("object" == typeof e[i]) {
                for (var a in e[i])e[i][tt](a) && (n[a] = e[i][a]);
                break
            }
            i < t[gt] && (n[t[i]] = e[i])
        }
        return n
    }

    function w(t) {
        if (100 != t.get(Nn) && O(te(t, kn)) % 1e4 >= 100 * ee(t, Nn))throw"abort"
    }

    function b(t) {
        if (Rt(te(t, xn)))throw"abort"
    }

    function y() {
        var t = Pt[Z][rt];
        if ("chrome-extension:" != t && "http:" != t && "https:" != t)throw"abort"
    }

    function _(t) {
        try {
            It.XMLHttpRequest && "withCredentials"in new It.XMLHttpRequest ? n(40) : It.XDomainRequest && n(41), It[kt].sendBeacon && n(42)
        } catch (e) {
        }
        t.set(be, ee(t, be) + 1);
        var r = [];
        if (Qt.map(function (e, n) {
                if (n.p) {
                    var i = t.get(e);
                    void 0 != i && i != n[dt] && ("boolean" == typeof i && (i *= 1), r[st](n.p + "=" + v("" + i)))
                }
            }), zn(new Un(1e4))) {
            var i = [];
            i[st](Wt()), i[st][ot](i, c()[Q](".")), i[st](Yt()), i[st](i[0] | i[1] | i[2] | i[3]), r[st]("z=" + i[xt]("."))
        } else r[st]("z=" + Yt());
        t.set(me, r[xt]("&"), !0)
    }

    function k(t) {
        var e = te(t, On) || $t() + "/collect";
        qt(e, te(t, me), t.get(pe), t.get(we)), t.set(pe, f, !0)
    }

    function S(t) {
        var e = It.gaData;
        e && (e.expId && t.set(Ye, e.expId), e.expVar && t.set(Ke, e.expVar))
    }

    function x() {
        if (It[kt] && "preview" == It[kt].loadPurpose)throw"abort"
    }

    function j(t) {
        var e = It.gaDevIds;
        i(e) && 0 != e[gt] && t.set("&did", e[xt](","), !0)
    }

    function T(t) {
        if (!t.get(xn))throw"abort"
    }

    function E(t) {
        var e = ee(t, tn);
        e >= 500 && n(15);
        var r = te(t, ge);
        if ("transaction" != r && "item" != r) {
            var r = ee(t, nn), i = (new Date)[K](), a = ee(t, en);
            if (0 == a && t.set(en, i), a = z.round(2 * (i - a) / 1e3), a > 0 && (r = z.min(r + a, 20), t.set(en, i)), 0 >= r)throw"abort";
            t.set(nn, --r)
        }
        t.set(tn, ++e)
    }

    function A(t, e, r, i) {
        e[t] = function () {
            try {
                return i && n(i), r[ot](this, arguments)
            } catch (e) {
                var a = e && e[lt];
                if (!(1 <= 100 * z.random() || Rt("?"))) {
                    var o = ["t=error", "_e=exc", "_v=j26", "sr=1"];
                    t && o[st]("_f=" + t), a && o[st]("_m=" + v(a[_t](0, 100))), o[st]("aip=1"), o[st]("z=" + Kt()), qt($t() + "/collect", o[xt]("&"))
                }
                throw e
            }
        }
    }

    function L() {
        var t, e, n;
        if ((n = (n = It[kt]) ? n.plugins : null) && n[gt])for (var r = 0; r < n[gt] && !e; r++) {
            var i = n[r];
            -1 < i[lt][ht]("Shockwave Flash") && (e = i.description)
        }
        if (!e)try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = t.GetVariable("$version")
        } catch (a) {
        }
        if (!e)try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
        } catch (o) {
        }
        if (!e)try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = t.GetVariable("$version")
        } catch (s) {
        }
        return e && (t = e[X](/[\d]+/g)) && 3 <= t[gt] && (e = t[0] + "." + t[1] + " r" + t[2]), e || void 0
    }

    function I(t, e, n) {
        "none" == e && (e = "");
        var r = [], i = Nt(t);
        t = "__utma" == t ? 6 : 2;
        for (var a = 0; a < i[gt]; a++) {
            var o = ("" + i[a])[Q](".");
            o[gt] >= t && r[st]({hash: o[0], R: i[a], O: o})
        }
        return 0 == r[gt] ? void 0 : 1 == r[gt] ? r[0] : P(e, r) || P(n, r) || P(null, r) || r[0]
    }

    function P(t, e) {
        var n, r;
        null == t ? n = r = 1 : (n = O(t), r = O(o(t, ".") ? t[_t](1) : "." + t));
        for (var i = 0; i < e[gt]; i++)if (e[i][ct] == n || e[i][ct] == r)return e[i]
    }

    function R(t) {
        t = t.get(kn);
        var e = C(t, 0);
        return "_ga=1." + v(e + "." + t)
    }

    function C(t, e) {
        for (var n = new Date, r = It[kt], i = r.plugins || [], n = [t, r.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + e], r = 0; r < i[gt]; ++r)n[st](i[r].description);
        return O(n[xt]("."))
    }

    function N(t, e) {
        if (e == Pt[Z][et])return !1;
        for (var n = 0; n < t[gt]; n++)if (t[n]instanceof RegExp) {
            if (t[n][ut](e))return !0
        } else if (0 <= e[ht](t[n]))return !0;
        return !1
    }

    function V() {
        var t = It.gaGlobal = It.gaGlobal || {};
        return t.hid = t.hid || Kt()
    }

    function D(t) {
        return 0 <= t[ht](".") || 0 <= t[ht](":")
    }

    function O(t) {
        var e, n = 1, r = 0;
        if (t)for (n = 0, e = t[gt] - 1; e >= 0; e--)r = t.charCodeAt(e), n = (n << 6 & 268435455) + r + (r << 14), r = 266338304 & n, n = 0 != r ? n ^ r >> 21 : n;
        return n
    }

    var G = encodeURIComponent, $ = window, U = setTimeout, z = Math, q = "replace", F = "data", M = "charAt", X = "match", H = "send", B = "port", W = "createElement", Y = "setAttribute", K = "getTime", J = "host", Q = "split", Z = "location", tt = "hasOwnProperty", et = "hostname", nt = "search", rt = "protocol", it = "href", at = "action", ot = "apply", st = "push", ct = "hash", ut = "test", ft = "slice", vt = "cookie", ht = "indexOf", dt = "defaultValue", lt = "name", gt = "length", pt = "prototype", mt = "clientWidth", wt = "target", bt = "call", yt = "clientHeight", _t = "substring", kt = "navigator", St = "parentNode", xt = "join", jt = "toLowerCase", Tt = new function () {
        var t = [];
        this.set = function (e) {
            t[e] = !0
        }, this.M = function () {
            for (var e = [], n = 0; n < t[gt]; n++)t[n] && (e[z.floor(n / 6)] = e[z.floor(n / 6)] ^ 1 << n % 6);
            for (n = 0; n < e[gt]; n++)e[n] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[M](e[n] || 0);
            return e[xt]("") + "~"
        }
    }, Et = function (t, e, r, i) {
        try {
            t.addEventListener ? t.addEventListener(e, r, !!i) : t.attachEvent && t.attachEvent("on" + e, r)
        } catch (a) {
            n(27)
        }
    }, At = function (t, e, n) {
        t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && t.detachEvent("on" + e, n)
    }, Lt = function () {
        this.keys = [], this.w = {}, this.m = {}
    };
    Lt[pt].set = function (t, e, n) {
        this.keys[st](t), n ? this.m[":" + t] = e : this.w[":" + t] = e
    }, Lt[pt].get = function (t) {
        return this.m[tt](":" + t) ? this.m[":" + t] : this.w[":" + t]
    }, Lt[pt].map = function (t) {
        for (var e = 0; e < this.keys[gt]; e++) {
            var n = this.keys[e], r = this.get(n);
            r && t(n, r)
        }
    };
    var It = $, Pt = document, Rt = function (t) {
        var e = It._gaUserPrefs;
        if (e && e.ioo && e.ioo() || t && !0 === It["ga-disable-" + t])return !0;
        try {
            var n = It.external;
            if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs)return !0
        } catch (r) {
        }
        return !1
    }, Ct = function (t) {
        U(t, 100)
    }, Nt = function (t) {
        var e = [], n = Pt[vt][Q](";");
        t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
        for (var r = 0; r < n[gt]; r++) {
            var i = n[r][X](t);
            i && e[st](i[1])
        }
        return e
    }, Vt = function (t, e, r, i, a, o) {
        if (a = Rt(a) ? !1 : Ot[ut](Pt[Z][et]) || "/" == r && Dt[ut](i) ? !1 : !0, !a)return !1;
        if (e && 1200 < e[gt] && (e = e[_t](0, 1200), n(24)), r = t + "=" + e + "; path=" + r + "; ", o && (r += "expires=" + new Date((new Date)[K]() + o).toGMTString() + "; "), i && "none" != i && (r += "domain=" + i + ";"), i = Pt[vt], Pt.cookie = r, !(i = i != Pt[vt]))t:{
            for (t = Nt(t), i = 0; i < t[gt]; i++)if (e == t[i]) {
                i = !0;
                break t
            }
            i = !1
        }
        return i
    }, Dt = new RegExp(/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/), Ot = new RegExp(/(^|\.)doubleclick\.net$/i), Gt = function () {
        for (var t = It[kt], t = t.appName + t.version + t.platform + t.userAgent + (Pt[vt] ? Pt[vt] : "") + (Pt.referrer ? Pt.referrer : ""), e = t[gt], n = It.history[gt]; n > 0;)t += n-- ^ e++;
        return O(t)
    }, $t = function () {
        return l() + "//www.google-analytics.com"
    }, Ut = function (t) {
        e(this, "len"), this.message = t + "-8192"
    }, zt = function (t) {
        e(this, "ff2post"), this.message = t + "-2036"
    }, qt = function (t, e, n, r) {
        if (n = n || f, r && (r = n, It[kt].sendBeacon && It[kt].sendBeacon(t, e) ? (r(), r = !0) : r = !1), !r)if (2036 >= e[gt])Ft(t, e, n); else {
            if (!(8192 >= e[gt]))throw new Ut(e[gt]);
            if (0 <= It[kt].userAgent[ht]("Firefox") && ![].reduce)throw new zt(e[gt]);
            Xt(t, e, n) || Mt(t, e, n) || Ht(e, n) || n()
        }
    }, Ft = function (t, e, n) {
        var r = u(t + "?" + e);
        r.onload = r.onerror = function () {
            r.onload = null, r.onerror = null, n()
        }
    }, Mt = function (t, e, n) {
        var r;
        return (r = It.XDomainRequest) ? (r = new r, r.open("POST", t), r.onerror = function () {
            n()
        }, r.onload = n, r[H](e), !0) : !1
    }, Xt = function (t, e, n) {
        var r = It.XMLHttpRequest;
        if (!r)return !1;
        var i = new r;
        return "withCredentials"in i ? (i.open("POST", t, !0), i.withCredentials = !0, i.setRequestHeader("Content-Type", "text/plain"), i.onreadystatechange = function () {
            4 == i.readyState && (n(), i = null)
        }, i[H](e), !0) : !1
    }, Ht = function (t, n) {
        if (!Pt.body)return Ct(function () {
            Ht(t, n)
        }), !0;
        t = G(t);
        try {
            var r = Pt[W]('<iframe name="' + t + '"></iframe>')
        } catch (i) {
            r = Pt[W]("iframe"), e(r, t)
        }
        r.height = "0", r.width = "0", r.style.display = "none", r.style.visibility = "hidden";
        var a = Pt[Z], a = $t() + "/analytics_iframe.html#" + G(a[rt] + "//" + a[J] + "/favicon.ico"), o = function () {
            r.src = "", r[St] && r[St].removeChild(r)
        };
        Et(It, "beforeunload", o);
        var s = !1, c = 0, u = function () {
            if (!s) {
                try {
                    if (c > 9 || r.contentWindow[Z][J] == Pt[Z][J])return s = !0, o(), At(It, "beforeunload", o), void n()
                } catch (t) {
                }
                c++, U(u, 200)
            }
        };
        return Et(r, "load", u), Pt.body.appendChild(r), r.src = a, !0
    }, Bt = function () {
        this.t = []
    };
    Bt[pt].add = function (t) {
        this.t[st](t)
    }, Bt[pt].D = function (t) {
        try {
            for (var e = 0; e < this.t[gt]; e++) {
                var n = t.get(this.t[e]);
                n && r(n) && n[bt](It, t)
            }
        } catch (i) {
        }
        e = t.get(pe), e != f && r(e) && (t.set(pe, f, !0), U(e, 10))
    };
    var Wt = function () {
        return z.round(2147483647 * z.random())
    }, Yt = function () {
        try {
            var t = new Uint32Array(1);
            return It.crypto.getRandomValues(t), 2147483647 & t[0]
        } catch (e) {
            return Wt()
        }
    }, Kt = Wt, Jt = function () {
        this.data = new Lt
    }, Qt = new Lt, Zt = [];
    Jt[pt].get = function (t) {
        var e = ie(t), n = this[F].get(t);
        return e && void 0 == n && (n = r(e[dt]) ? e[dt]() : e[dt]), e && e.n ? e.n(this, t, n) : n
    };
    var te = function (t, e) {
        var n = t.get(e);
        return void 0 == n ? "" : "" + n
    }, ee = function (t, e) {
        var n = t.get(e);
        return void 0 == n || "" === n ? 0 : 1 * n
    };
    Jt[pt].set = function (t, e, n) {
        if (t)if ("object" == typeof t)for (var r in t)t[tt](r) && ne(this, r, t[r], n); else ne(this, t, e, n)
    };
    var ne = function (t, e, n, r) {
        if (void 0 != n)switch (e) {
            case xn:
                _r[ut](n)
        }
        var i = ie(e);
        i && i.o ? i.o(t, e, n, r) : t[F].set(e, n, r)
    }, re = function (t, n, r, i, a) {
        e(this, t), this.p = n, this.n = i, this.o = a, this.defaultValue = r
    }, ie = function (t) {
        var e = Qt.get(t);
        if (!e)for (var n = 0; n < Zt[gt]; n++) {
            var r = Zt[n], i = r[0].exec(t);
            if (i) {
                e = r[1](i), Qt.set(e[lt], e);
                break
            }
        }
        return e
    }, ae = function (t) {
        var e;
        return Qt.map(function (n, r) {
            r.p == t && (e = r)
        }), e && e[lt]
    }, oe = function (t, e, n, r, i) {
        return t = new re(t, e, n, r, i), Qt.set(t[lt], t), t[lt]
    }, se = function (t, e) {
        Zt[st]([new RegExp("^" + t + "$"), e])
    }, ce = function (t, e, n) {
        return oe(t, e, n, void 0, ue)
    }, ue = function () {
    }, fe = a($.GoogleAnalyticsObject) && s($.GoogleAnalyticsObject) || "ga", ve = !1, he = ce("apiVersion", "v"), de = ce("clientVersion", "_v");
    oe("anonymizeIp", "aip");
    var le = oe("adSenseId", "a"), ge = oe("hitType", "t"), pe = oe("hitCallback"), me = oe("hitPayload");
    oe("nonInteraction", "ni"), oe("currencyCode", "cu");
    var we = oe("useBeacon", void 0, !1);
    oe("sessionControl", "sc", ""), oe("sessionGroup", "sg"), oe("queueTime", "qt");
    var be = oe("_s", "_s");
    oe("screenName", "cd");
    var ye = oe("location", "dl", ""), _e = oe("referrer", "dr"), ke = oe("page", "dp", "");
    oe("hostname", "dh");
    var Se = oe("language", "ul"), xe = oe("encoding", "de");
    oe("title", "dt", function () {
        return Pt.title || void 0
    }), se("contentGroup([0-9]+)", function (t) {
        return new re(t[0], "cg" + t[1])
    });
    var je = oe("screenColors", "sd"), Te = oe("screenResolution", "sr"), Ee = oe("viewportSize", "vp"), Ae = oe("javaEnabled", "je"), Le = oe("flashVersion", "fl");
    oe("campaignId", "ci"), oe("campaignName", "cn"), oe("campaignSource", "cs"), oe("campaignMedium", "cm"), oe("campaignKeyword", "ck"), oe("campaignContent", "cc");
    var Ie = oe("eventCategory", "ec"), Pe = oe("eventAction", "ea"), Re = oe("eventLabel", "el"), Ce = oe("eventValue", "ev"), Ne = oe("socialNetwork", "sn"), Ve = oe("socialAction", "sa"), De = oe("socialTarget", "st"), Oe = oe("l1", "plt"), Ge = oe("l2", "pdt"), $e = oe("l3", "dns"), Ue = oe("l4", "rrt"), ze = oe("l5", "srt"), qe = oe("l6", "tcp"), Fe = oe("l7", "dit"), Me = oe("l8", "clt"), Xe = oe("timingCategory", "utc"), He = oe("timingVar", "utv"), Be = oe("timingLabel", "utl"), We = oe("timingValue", "utt");
    oe("appName", "an"), oe("appVersion", "av", ""), oe("appId", "aid", ""), oe("appInstallerId", "aiid", ""), oe("exDescription", "exd"), oe("exFatal", "exf");
    var Ye = oe("expId", "xid"), Ke = oe("expVar", "xvar"), Je = oe("_utma", "_utma"), Qe = oe("_utmz", "_utmz"), Ze = oe("_utmht", "_utmht"), tn = oe("_hc", void 0, 0), en = oe("_ti", void 0, 0), nn = oe("_to", void 0, 20);
    se("dimension([0-9]+)", function (t) {
        return new re(t[0], "cd" + t[1])
    }), se("metric([0-9]+)", function (t) {
        return new re(t[0], "cm" + t[1])
    }), oe("linkerParam", void 0, void 0, R, ue);
    var rn = oe("usage", "_u", void 0, function () {
        return Tt.M()
    }, ue);
    oe("forceSSL", void 0, void 0, function () {
        return ve
    }, function (t, e, r) {
        n(34), ve = !!r
    });
    var an = oe("_j1", "jid"), on = oe("_j2", "gjid");
    se("\\&(.*)", function (t) {
        var e = new re(t[0], t[1]), n = ae(t[0][_t](1));
        return n && (e.n = function (t) {
            return t.get(n)
        }, e.o = function (t, e, r, i) {
            t.set(n, r, i)
        }, e.p = void 0), e
    });
    var sn = ce("_oot"), cn = oe("previewTask"), un = oe("checkProtocolTask"), fn = oe("validationTask"), vn = oe("checkStorageTask"), hn = oe("historyImportTask"), dn = oe("samplerTask"), ln = ce("_rlt"), gn = oe("buildHitTask"), pn = oe("sendHitTask"), mn = oe("ceTask"), wn = oe("devIdTask"), bn = oe("timingTask"), yn = oe("displayFeaturesTask"), _n = ce("name"), kn = ce("clientId", "cid"), Sn = oe("userId", "uid"), xn = ce("trackingId", "tid"), jn = ce("cookieName", void 0, "_ga"), Tn = ce("cookieDomain"), En = ce("cookiePath", void 0, "/"), An = ce("cookieExpires", void 0, 63072e3), Ln = ce("legacyCookieDomain"), In = ce("legacyHistoryImport", void 0, !0), Pn = ce("storage", void 0, "cookie"), Rn = ce("allowLinker", void 0, !1), Cn = ce("allowAnchor", void 0, !0), Nn = ce("sampleRate", "sf", 100), Vn = ce("siteSpeedSampleRate", void 0, 1), Dn = ce("alwaysSendReferrer", void 0, !1), On = oe("transportUrl"), Gn = oe("_r", "_r"), $n = oe("_dfr", void 0, 100), Un = function (t) {
        this.V = t, this.fa = void 0, this.$ = !1, this.ha = void 0, this.ea = 1
    }, zn = function (t, e, n) {
        if (t.fa && t.$)return 0;
        if (t.$ = !0, e) {
            if (t.ha && ee(e, t.ha))return ee(e, t.ha);
            if (0 == e.get(Vn))return 0
        }
        return 0 == t.V ? 0 : (void 0 === n && (n = Yt()), 0 == n % t.V ? z.floor(n / t.V) % t.ea + 1 : 0)
    }, qn = function (t, e) {
        var n = z.min(ee(t, Vn), 100);
        if (!(O(te(t, kn)) % 100 >= n) && (n = {}, Fn(n) || Mn(n))) {
            var r = n[Oe];
            void 0 == r || 1 / 0 == r || isNaN(r) || (r > 0 ? (Xn(n, $e), Xn(n, qe), Xn(n, ze), Xn(n, Ge), Xn(n, Ue), Xn(n, Fe), Xn(n, Me), e(n)) : Et(It, "load", function () {
                qn(t, e)
            }, !1))
        }
    }, Fn = function (t) {
        var e = It.performance || It.webkitPerformance, e = e && e.timing;
        if (!e)return !1;
        var n = e.navigationStart;
        return 0 == n ? !1 : (t[Oe] = e.loadEventStart - n, t[$e] = e.domainLookupEnd - e.domainLookupStart, t[qe] = e.connectEnd - e.connectStart, t[ze] = e.responseStart - e.requestStart, t[Ge] = e.responseEnd - e.responseStart, t[Ue] = e.fetchStart - n, t[Fe] = e.domInteractive - n, t[Me] = e.domContentLoadedEventStart - n, !0)
    }, Mn = function (t) {
        if (It.top != It)return !1;
        var e = It.external, n = e && e.onloadT;
        return e && !e.isValidLoadTime && (n = void 0), n > 2147483648 && (n = void 0), n > 0 && e.setPageReadyTime(), void 0 == n ? !1 : (t[Oe] = n, !0)
    }, Xn = function (t, e) {
        var n = t[e];
        (isNaN(n) || 1 / 0 == n || 0 > n) && (t[e] = void 0)
    }, Hn = function (t) {
        return function (e) {
            "pageview" != e.get(ge) || t.I || (t.I = !0, qn(e, function (e) {
                t[H]("timing", e)
            }))
        }
    }, Bn = !1, Wn = function (t) {
        if ("cookie" == te(t, Pn)) {
            var e = te(t, jn), r = Jn(t), i = er(te(t, En)), a = Zn(te(t, Tn)), o = 1e3 * ee(t, An), s = te(t, xn);
            if ("auto" != a)Vt(e, r, i, a, s, o) && (Bn = !0); else {
                n(32);
                var c;
                if (r = [], a = g()[Q]("."), 4 != a[gt] || (c = a[a[gt] - 1], parseInt(c, 10) != c)) {
                    for (c = a[gt] - 2; c >= 0; c--)r[st](a[ft](c)[xt]("."));
                    r[st]("none"), c = r
                } else c = ["none"];
                for (var u = 0; u < c[gt]; u++)if (a = c[u], t[F].set(Tn, a), r = Jn(t), Vt(e, r, i, a, s, o))return 1 == tr(a) && n(36), "none" == a && n(37), void(Bn = !0);
                t[F].set(Tn, "auto")
            }
        }
    }, Yn = function (t) {
        if ("cookie" == te(t, Pn) && !Bn && (Wn(t), !Bn))throw"abort"
    }, Kn = function (t) {
        if (t.get(In)) {
            var e = te(t, Tn), r = te(t, Ln) || g(), i = I("__utma", r, e);
            i && (n(19), t.set(Ze, (new Date)[K](), !0), t.set(Je, i.R), (e = I("__utmz", r, e)) && i[ct] == e[ct] && t.set(Qe, e.R))
        }
    }, Jn = function (t) {
        var e = h(te(t, kn)), n = tr(te(t, Tn));
        return t = nr(te(t, En)), t > 1 && (n += "-" + t), ["GA1", n, e][xt](".")
    }, Qn = function (t, e, n) {
        for (var r, i = [], a = [], o = 0; o < t[gt]; o++) {
            var s = t[o];
            s.r[n] == e ? i[st](s) : void 0 == r || s.r[n] < r ? (a = [s], r = s.r[n]) : s.r[n] == r && a[st](s)
        }
        return 0 < i[gt] ? i : a
    }, Zn = function (t) {
        return 0 == t[ht](".") ? t.substr(1) : t
    }, tr = function (t) {
        return Zn(t)[Q](".")[gt]
    }, er = function (t) {
        return t ? (1 < t[gt] && t.lastIndexOf("/") == t[gt] - 1 && (t = t.substr(0, t[gt] - 1)), 0 != t[ht]("/") && (t = "/" + t), t) : "/"
    }, nr = function (t) {
        return t = er(t), "/" == t ? 1 : t[Q]("/")[gt]
    }, rr = new RegExp(/^https?:\/\/([^\/:]+)/), ir = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/, ar = function (t) {
        n(48), this.target = t, this.T = !1
    };
    ar[pt].Q = function (e, n) {
        if (e.tagName) {
            if ("a" == e.tagName[jt]())return void(e[it] && t(e, or(this, e[it], n)));
            if ("form" == e.tagName[jt]())return sr(this, e)
        }
        return "string" == typeof e ? or(this, e, n) : void 0
    };
    var or = function (t, e, n) {
        var r = ir.exec(e);
        r && 3 <= r[gt] && (e = r[1] + (r[3] ? r[2] + r[3] : "")), t = t[wt].get("linkerParam");
        var i = e[ht]("?"), r = e[ht]("#");
        return n ? e += (-1 == r ? "#" : "&") + t : (n = -1 == i ? "?" : "&", e = -1 == r ? e + (n + t) : e[_t](0, r) + n + t + e[_t](r)), e
    }, sr = function (t, e) {
        if (e && e[at]) {
            var n = t[wt].get("linkerParam")[Q]("=")[1];
            if ("get" == e.method[jt]()) {
                for (var r = e.childNodes || [], i = 0; i < r[gt]; i++)if ("_ga" == r[i][lt])return void r[i][Y]("value", n);
                r = Pt[W]("input"), r[Y]("type", "hidden"), r[Y]("name", "_ga"), r[Y]("value", n), e.appendChild(r)
            } else"post" == e.method[jt]() && (e.action = or(t, e[at]))
        }
    };
    ar[pt].S = function (e, r, i) {
        function a(i) {
            try {
                i = i || It.event;
                var a;
                t:{
                    var s = i[wt] || i.srcElement;
                    for (i = 100; s && i > 0;) {
                        if (s[it] && s.nodeName[X](/^a(?:rea)?$/i)) {
                            a = s;
                            break t
                        }
                        s = s[St], i--
                    }
                    a = {}
                }
                ("http:" == a[rt] || "https:" == a[rt]) && N(e, a[et] || "") && a[it] && t(a, or(o, a[it], r))
            } catch (c) {
                n(26)
            }
        }

        var o = this;
        if (this.T || (this.T = !0, Et(Pt, "mousedown", a, !1), Et(Pt, "touchstart", a, !1), Et(Pt, "keyup", a, !1)), i) {
            i = function (t) {
                if (t = t || It.event, (t = t[wt] || t.srcElement) && t[at]) {
                    var n = t[at][X](rr);
                    n && N(e, n[1]) && sr(o, t)
                }
            };
            for (var s = 0; s < Pt.forms[gt]; s++)Et(Pt.forms[s], "submit", i)
        }
    };
    var cr, ur, fr = function (t, e, n, r) {
        this.U = e, this.aa = n, (e = r) || (e = (e = te(t, _n)) && "t0" != e ? gr[ut](e) ? "_gat_" + h(te(t, xn)) : "_gat_" + h(e) : "_gat"), this.Y = e
    }, vr = function (t, e) {
        var n = e.get(gn);
        e.set(gn, function (e) {
            hr(t, e);
            var r = n(e);
            return dr(t, e), r
        });
        var r = e.get(pn);
        e.set(pn, function (e) {
            var n = r(e);
            return lr(t, e), n
        })
    }, hr = function (t, e) {
        e.get(t.U) || ("1" == Nt(t.Y)[0] ? e.set(t.U, "", !0) : e.set(t.U, "" + Kt(), !0))
    }, dr = function (t, e) {
        e.get(t.U) && Vt(t.Y, "1", e.get(En), e.get(Tn), e.get(xn), 6e5)
    }, lr = function (t, e) {
        if (e.get(t.U)) {
            var n = new Lt, r = function (t) {
                n.set(ie(t).p, e.get(t))
            };
            r(he), r(de), r(xn), r(kn), r(t.U), r(rn);
            var i = t.aa;
            "/" === i[M](0) && (i = l() + i), n.map(function (t, e) {
                i += v(t) + "=" + v("" + e) + "&"
            }), i += "z=" + Kt(), u(i), e.set(t.U, "", !0)
        }
    }, gr = /^gtm\d+$/;
    cr = new Un(10), ur = !1;
    var pr, mr = function (t, e) {
        var r = t.b;
        if (!r.get("dcLoaded")) {
            n(29), e = e || {};
            var i;
            e[jn] && (i = h(e[jn]));
            var a = "//stats.g.doubleclick.net/collect?t=dc&aip=1&";
            if ("https:" != Pt[Z][rt] && !ve) {
                var o = O(r.get(kn));
                (ur || zn(cr, void 0, o)) && (a = "https:" + a, n(33), ur = !0)
            }
            i = new fr(r, an, a, i), vr(i, r), r.set("dcLoaded", !0)
        }
    }, wr = function (t) {
        var e;
        t.get("dcLoaded") ? e = !1 : (e = new Un(ee(t, $n)), e = zn(e, null, O(t.get(kn)))), e && (n(51), e = new fr(t, an), hr(e, t), dr(e, t), t.get(e.U) && (t.set(Gn, 1, !0), t.set(On, $t() + "/r/collect", !0)))
    }, br = function (t, e) {
        var r = t.b;
        if (!r.get("_rlsaLoaded")) {
            if (n(38), e = e || {}, e[jn])var i = h(e[jn]);
            i = new fr(r, on, "https://www.google.com/ads/ga-audiences?t=sr&aip=1&", i), vr(i, r), r.set("_rlsaLoaded", !0), Rr("displayfeatures", t, e)
        }
    }, yr = function (t, e, n) {
        if (!pr) {
            var r;
            r = Pt[Z][ct];
            var i = It[lt], a = /^#?gaso=([^&]*)/;
            (i = (r = (r = r && r[X](a) || i && i[X](a)) ? r[1] : Nt("GASO")[0] || "") && r[X](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (Vt("GASO", "" + r, n, e, t, 0), $._udo || ($._udo = e), $._utcp || ($._utcp = n), t = i[1], d("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (t ? "prefix=" + t + "&" : "") + Kt(), "_gasojs")), pr = !0
        }
    }, _r = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/, kr = function (t) {
        function e(t, e) {
            r.b[F].set(t, e)
        }

        function n(t, n) {
            e(t, n), r.filters.add(t)
        }

        var r = this;
        this.b = new Jt, this.filters = new Bt, e(_n, t[_n]), e(xn, s(t[xn])), e(jn, t[jn]), e(Tn, t[Tn] || g()), e(En, t[En]), e(An, t[An]), e(Ln, t[Ln]), e(In, t[In]), e(Rn, t[Rn]), e(Cn, t[Cn]), e(Nn, t[Nn]), e(Vn, t[Vn]), e(Dn, t[Dn]), e(Pn, t[Pn]), e(Sn, t[Sn]), e(he, 1), e(de, "j26"), n(sn, b), n(cn, x), n(un, y), n(fn, T), n(vn, Yn), n(hn, Kn), n(dn, w), n(ln, E), n(mn, S), n(wn, j), n(yn, wr), n(gn, _), n(pn, k), n(bn, Hn(this)), Sr(this.b, t[kn]), xr(this.b), this.b.set(le, V()), yr(this.b.get(xn), this.b.get(Tn), this.b.get(En))
    }, Sr = function (t, e) {
        if ("cookie" == te(t, Pn)) {
            Bn = !1;
            var r;
            t:{
                var i = Nt(te(t, jn));
                if (i && !(1 > i[gt])) {
                    r = [];
                    for (var a = 0; a < i[gt]; a++) {
                        var o;
                        o = i[a][Q](".");
                        var s = o.shift();
                        ("GA1" == s || "1" == s) && 1 < o[gt] ? (s = o.shift()[Q]("-"), 1 == s[gt] && (s[1] = "1"), s[0] *= 1, s[1] *= 1, o = {
                            r: s,
                            s: o[xt](".")
                        }) : o = void 0, o && r[st](o)
                    }
                    if (1 == r[gt]) {
                        n(13), r = r[0].s;
                        break t
                    }
                    if (0 != r[gt]) {
                        if (n(14), i = tr(te(t, Tn)), r = Qn(r, i, 0), 1 == r[gt]) {
                            r = r[0].s;
                            break t
                        }
                        i = nr(te(t, En)), r = Qn(r, i, 1), r = r[0] && r[0].s;
                        break t
                    }
                    n(12)
                }
                r = void 0
            }
            r || (r = te(t, Tn), i = te(t, Ln) || g(), r = I("__utma", i, r), (r = void 0 == r ? void 0 : r.O[1] + "." + r.O[2]) && n(10)), r && (t[F].set(kn, r), Bn = !0)
        }
        r = t.get(Cn), (a = (r = Pt[Z][r ? "href" : "search"][X]("(?:&|#|\\?)" + v("_ga")[q](/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == r[gt] ? r[1] : "") && (t.get(Rn) ? (r = a[ht]("."), -1 == r ? n(22) : (i = a[_t](r + 1), "1" != a[_t](0, r) ? n(22) : (r = i[ht]("."), -1 == r ? n(22) : (a = i[_t](0, r), r = i[_t](r + 1), a != C(r, 0) && a != C(r, -1) && a != C(r, -2) ? n(23) : (n(11), t[F].set(kn, r)))))) : n(21)), e && (n(9), t[F].set(kn, v(e))), t.get(kn) || ((r = (r = It.gaGlobal && It.gaGlobal.vid) && -1 != r[nt](/^(?:utma\.)?\d+\.\d+$/) ? r : void 0) ? (n(17), t[F].set(kn, r)) : (n(8), t[F].set(kn, c()))), Wn(t)
    }, xr = function (t) {
        var e = It[kt], r = It.screen, i = Pt[Z];
        if (t.set(_e, p(t.get(Dn))), i) {
            var a = i.pathname || "";
            "/" != a[M](0) && (n(31), a = "/" + a), t.set(ye, i[rt] + "//" + i[et] + a + i[nt])
        }
        r && t.set(Te, r.width + "x" + r.height), r && t.set(je, r.colorDepth + "-bit");
        var r = Pt.documentElement, s = (a = Pt.body) && a[mt] && a[yt], c = [];
        if (r && r[mt] && r[yt] && ("CSS1Compat" === Pt.compatMode || !s) ? c = [r[mt], r[yt]] : s && (c = [a[mt], a[yt]]), r = 0 >= c[0] || 0 >= c[1] ? "" : c[xt]("x"), t.set(Ee, r), t.set(Le, L()), t.set(xe, Pt.characterSet || Pt.charset), t.set(Ae, e && "function" == typeof e.javaEnabled && e.javaEnabled() || !1), t.set(Se, (e && (e.language || e.browserLanguage) || "")[jt]()), i && t.get(Cn) && (e = Pt[Z][ct])) {
            for (e = e[Q](/[?&#]+/), i = [], r = 0; r < e[gt]; ++r)(o(e[r], "utm_id") || o(e[r], "utm_campaign") || o(e[r], "utm_source") || o(e[r], "utm_medium") || o(e[r], "utm_term") || o(e[r], "utm_content") || o(e[r], "gclid") || o(e[r], "dclid") || o(e[r], "gclsrc")) && i[st](e[r]);
            0 < i[gt] && (e = "#" + i[xt]("&"), t.set(ye, t.get(ye) + e))
        }
    };
    kr[pt].get = function (t) {
        return this.b.get(t)
    }, kr[pt].set = function (t, e) {
        this.b.set(t, e)
    };
    var jr = {pageview: [ke], event: [Ie, Pe, Re, Ce], social: [Ne, Ve, De], timing: [Xe, He, We, Be]};
    kr[pt].send = function (t) {
        if (!(1 > arguments[gt])) {
            var e, r;
            "string" == typeof arguments[0] ? (e = arguments[0], r = [][ft][bt](arguments, 1)) : (e = arguments[0] && arguments[0][ge], r = arguments), e && (r = m(jr[e] || [], r), r[ge] = e, this.b.set(r, void 0, !0), this.filters.D(this.b), this.b[F].m = {}, n(44))
        }
    };
    var Tr, Er, Ar, Lr = function (t) {
        return "prerender" == Pt.visibilityState ? !1 : (t(), !0)
    }, Ir = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/, Pr = function (t) {
        if (r(t[0]))this.u = t[0]; else {
            var e = Ir.exec(t[0]);
            if (null != e && 4 == e[gt] && (this.c = e[1] || "t0", this.e = e[2] || "", this.d = e[3], this.a = [][ft][bt](t, 1), this.e || (this.A = "create" == this.d, this.i = "require" == this.d, this.g = "provide" == this.d, this.ba = "remove" == this.d), this.i && (3 <= this.a[gt] ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (a(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), e = t[1], t = t[2], !this.d)throw"abort";
            if (this.i && (!a(e) || "" == e))throw"abort";
            if (this.g && (!a(e) || "" == e || !r(t)))throw"abort";
            if (D(this.c) || D(this.e))throw"abort";
            if (this.g && "t0" != this.c)throw"abort"
        }
    };
    Tr = new Lt, Ar = new Lt, Er = {ec: 45, ecommerce: 46, linkid: 47};
    var Rr = function (t, e, i) {
        e == Vr ? n(35) : e.get(_n);
        var a = Tr.get(t);
        return r(a) ? (e.plugins_ = e.plugins_ || new Lt, e.plugins_.get(t) ? !0 : (e.plugins_.set(t, new a(e, i || {})), !0)) : !1
    }, Cr = function (e) {
        function n(t) {
            var e = (t[et] || "")[Q](":")[0][jt](), n = (t[rt] || "")[jt](), n = 1 * t[B] || ("http:" == n ? 80 : "https:" == n ? 443 : "");
            return t = t.pathname || "", o(t, "/") || (t = "/" + t), [e, "" + n, t]
        }

        var r = Pt[W]("a");
        t(r, Pt[Z][it]);
        var i = (r[rt] || "")[jt](), a = n(r), s = r[nt] || "", c = i + "//" + a[0] + (a[1] ? ":" + a[1] : "");
        return o(e, "//") ? e = i + e : o(e, "/") ? e = c + e : !e || o(e, "?") ? e = c + a[2] + (e || s) : 0 > e[Q]("/")[0][ht](":") && (e = c + a[2][_t](0, a[2].lastIndexOf("/")) + "/" + e), t(r, e), i = n(r), {
            protocol: (r[rt] || "")[jt](),
            host: i[0],
            port: i[1],
            path: i[2],
            G: r[nt] || "",
            url: e || ""
        }
    }, Nr = {
        ga: function () {
            Nr.f = []
        }
    };
    Nr.ga(), Nr.D = function (t) {
        var e = Nr.J[ot](Nr, arguments), e = Nr.f.concat(e);
        for (Nr.f = []; 0 < e[gt] && !Nr.v(e[0]) && (e.shift(), !(0 < Nr.f[gt])););
        Nr.f = Nr.f.concat(e)
    }, Nr.J = function (t) {
        for (var e = [], i = 0; i < arguments[gt]; i++)try {
            var a = new Pr(arguments[i]);
            if (a.g)Tr.set(a.a[0], a.a[1]); else {
                if (a.i) {
                    var s = a, c = s.a[0];
                    if (!r(Tr.get(c)) && !Ar.get(c)) {
                        Er[tt](c) && n(Er[c]);
                        var u = s.X;
                        if (!u && Er[tt](c) ? (n(39), u = c + ".js") : n(43), u) {
                            u && 0 <= u[ht]("/") || (u = l() + "//www.google-analytics.com/plugins/ua/" + u);
                            var f, v = Cr(u), s = void 0, h = v[rt], g = Pt[Z][rt], s = "https:" == h || h == g ? !0 : "http:" != h ? !1 : "http:" == g;
                            if (f = s) {
                                var s = v, p = Cr(Pt[Z][it]);
                                if (s.G || 0 <= s.url[ht]("?") || 0 <= s.path[ht]("://"))f = !1; else if (s[J] == p[J] && s[B] == p[B])f = !0; else {
                                    var m = "http:" == s[rt] ? 80 : 443;
                                    f = "www.google-analytics.com" == s[J] && (s[B] || m) == m && o(s.path, "/plugins/") ? !0 : !1
                                }
                            }
                            f && (d(v.url), Ar.set(c, !0))
                        }
                    }
                }
                e[st](a)
            }
        } catch (w) {
        }
        return e
    }, Nr.v = function (t) {
        try {
            if (t.u)t.u[bt](It, Vr.j("t0")); else {
                var e = t.c == fe ? Vr : Vr.j(t.c);
                if (t.A)"t0" == t.c && Vr.create[ot](Vr, t.a); else if (t.ba)Vr.remove(t.c); else if (e)if (t.i) {
                    if (!Rr(t.a[0], e, t.W))return !0
                } else if (t.e) {
                    var n = t.d, r = t.a, i = e.plugins_.get(t.e);
                    i[n][ot](i, r)
                } else e[t.d][ot](e, t.a)
            }
        } catch (a) {
        }
    };
    var Vr = function (t) {
        n(1), Nr.D[ot](Nr, [arguments])
    };
    Vr.h = {}, Vr.P = [], Vr.L = 0, Vr.answer = 42;
    var Dr = [xn, Tn, _n];
    Vr.create = function (t) {
        var e = m(Dr, [][ft][bt](arguments));
        e[_n] || (e[_n] = "t0");
        var n = "" + e[_n];
        return Vr.h[n] ? Vr.h[n] : (e = new kr(e), Vr.h[n] = e, Vr.P[st](e), e)
    }, Vr.remove = function (t) {
        for (var e = 0; e < Vr.P[gt]; e++)if (Vr.P[e].get(_n) == t) {
            Vr.P.splice(e, 1), Vr.h[t] = null;
            break
        }
    }, Vr.j = function (t) {
        return Vr.h[t]
    }, Vr.K = function () {
        return Vr.P[ft](0)
    }, Vr.N = function () {
        "ga" != fe && n(49);
        var t = It[fe];
        if (!t || 42 != t.answer) {
            Vr.L = t && t.l, Vr.loaded = !0;
            var e = It[fe] = Vr;
            A("create", e, e.create, 3), A("remove", e, e.remove), A("getByName", e, e.j, 5), A("getAll", e, e.K, 6), e = kr[pt], A("get", e, e.get, 7), A("set", e, e.set, 4), A("send", e, e[H], 2), e = Jt[pt], A("get", e, e.get), A("set", e, e.set), (It.gaplugins = It.gaplugins || {}).Linker = ar, e = ar[pt], Tr.set("linker", ar), A("decorate", e, e.Q, 20), A("autoLink", e, e.S, 25), Tr.set("displayfeatures", mr), Tr.set("adfeatures", br), t = t && t.q, i(t) ? Nr.D[ot](Vr, t) : n(50)
        }
    }, function () {
        var t = Vr.N;
        if (!Lr(t)) {
            n(16);
            var e = !1, r = function () {
                !e && Lr(t) && (e = !0, At(Pt, "visibilitychange", r))
            };
            Et(Pt, "visibilitychange", r)
        }
    }()
}(window);