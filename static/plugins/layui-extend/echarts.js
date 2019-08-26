!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function (t) {
    "use strict";

    function e(t) {
        var e = {}, n = {}, i = t.match(/Firefox\/([\d.]+)/),
            r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge\/([\d.]+)/),
            o = /micromessenger/i.test(t);
        return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), {
            browser: n,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
            pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11),
            domSupported: "undefined" != typeof document
        }
    }

    function n(t, e) {
        "createCanvas" === t && (Yf = null), Zf[t] = e
    }

    function i(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t, n = Ff.call(t);
        if ("[object Array]" === n) {
            if (!R(t)) {
                e = [];
                for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
            }
        } else if (zf[n]) {
            if (!R(t)) {
                var o = t.constructor;
                if (t.constructor.from) e = o.from(t); else {
                    e = new o(t.length);
                    for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
                }
            }
        } else if (!Rf[n] && !R(t) && !I(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
        }
        return e
    }

    function r(t, e, n) {
        if (!M(e) || !M(t)) return n ? i(e) : t;
        for (var a in e) if (e.hasOwnProperty(a)) {
            var o = t[a], s = e[a];
            !M(s) || !M(o) || x(s) || x(o) || I(s) || I(o) || S(s) || S(o) || R(s) || R(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n)
        }
        return t
    }

    function a(t, e) {
        for (var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);
        return n
    }

    function o(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function s(t, e, n) {
        for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t
    }

    function l() {
        return Yf || (Yf = jf().getContext("2d")), Yf
    }

    function u(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n
        }
        return -1
    }

    function h(t, e) {
        function n() {
        }

        var i = t.prototype;
        n.prototype = e.prototype, t.prototype = new n;
        for (var r in i) t.prototype[r] = i[r];
        t.prototype.constructor = t, t.superClass = e
    }

    function c(t, e, n) {
        t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n)
    }

    function d(t) {
        return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
    }

    function f(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === Vf) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t); else for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
    }

    function p(t, e, n) {
        if (t && e) {
            if (t.map && t.map === Gf) return t.map(e, n);
            for (var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));
            return i
        }
    }

    function g(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === Xf) return t.reduce(e, n, i);
            for (var r = 0, a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);
            return n
        }
    }

    function v(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === Wf) return t.filter(e, n);
            for (var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i
        }
    }

    function m(t, e, n) {
        if (t && e) for (var i = 0, r = t.length; r > i; i++) if (e.call(n, t[i], i, t)) return t[i]
    }

    function y(t, e) {
        var n = Hf.call(arguments, 2);
        return function () {
            return t.apply(e, n.concat(Hf.call(arguments)))
        }
    }

    function _(t) {
        var e = Hf.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(Hf.call(arguments)))
        }
    }

    function x(t) {
        return "[object Array]" === Ff.call(t)
    }

    function w(t) {
        return "function" == typeof t
    }

    function b(t) {
        return "[object String]" === Ff.call(t)
    }

    function M(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" == e
    }

    function S(t) {
        return !!Rf[Ff.call(t)]
    }

    function T(t) {
        return !!zf[Ff.call(t)]
    }

    function I(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function C(t) {
        return t !== t
    }

    function k() {
        for (var t = 0, e = arguments.length; e > t; t++) if (null != arguments[t]) return arguments[t]
    }

    function A(t, e) {
        return null != t ? t : e
    }

    function D(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function P() {
        return Function.call.apply(Hf, arguments)
    }

    function O(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function L(t, e) {
        if (!t) throw new Error(e)
    }

    function B(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function E(t) {
        t[qf] = !0
    }

    function R(t) {
        return t[qf]
    }

    function z(t) {
        function e(t, e) {
            n ? i.set(t, e) : i.set(e, t)
        }

        var n = x(t);
        this.data = {};
        var i = this;
        t instanceof z ? t.each(e) : t && f(t, e)
    }

    function F(t) {
        return new z(t)
    }

    function N(t, e) {
        for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
        var r = t.length;
        for (i = 0; i < e.length; i++) n[i + r] = e[i];
        return n
    }

    function V() {
    }

    function W(t, e) {
        var n = new $f(2);
        return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
    }

    function H(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function G(t) {
        var e = new $f(2);
        return e[0] = t[0], e[1] = t[1], e
    }

    function X(t, e, n) {
        return t[0] = e, t[1] = n, t
    }

    function Z(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }

    function j(t, e, n, i) {
        return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
    }

    function Y(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }

    function q(t) {
        return Math.sqrt(U(t))
    }

    function U(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function $(t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }

    function K(t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }

    function Q(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function J(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }

    function te(t, e) {
        var n = q(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
    }

    function ee(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function ne(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function ie(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }

    function re(t, e, n, i) {
        return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
    }

    function ae(t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
    }

    function oe(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }

    function se(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }

    function le() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
    }

    function ue(t, e) {
        return {target: t, topTarget: e && e.topTarget}
    }

    function he(t, e) {
        var n = t._$eventProcessor;
        return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e
    }

    function ce(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
    }

    function de(t, e, n, i) {
        return n = n || {}, i || !Ef.canvasSupported ? fe(t, e, n) : Ef.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : fe(t, e, n), n
    }

    function fe(t, e, n) {
        var i = ce(t);
        n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
    }

    function pe(t, e, n) {
        if (e = e || window.event, null != e.zrX) return e;
        var i = e.type, r = i && i.indexOf("touch") >= 0;
        if (r) {
            var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
            a && de(t, a, e, n)
        } else de(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var o = e.button;
        return null == e.which && void 0 !== o && ap.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    }

    function ge(t, e, n) {
        rp ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
    }

    function ve(t, e, n) {
        rp ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }

    function me(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which,
            stop: ye
        }
    }

    function ye() {
        op(this.event)
    }

    function _e() {
    }

    function xe(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i, r = t; r;) {
                if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
                r.silent && (i = !0), r = r.parent
            }
            return i ? sp : !0
        }
        return !1
    }

    function we() {
        var t = new hp(6);
        return be(t), t
    }

    function be(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function Me(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function Se(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1], r = e[1] * n[0] + e[3] * n[1], a = e[0] * n[2] + e[2] * n[3],
            o = e[1] * n[2] + e[3] * n[3], s = e[0] * n[4] + e[2] * n[5] + e[4], l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
    }

    function Te(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
    }

    function Ie(t, e, n) {
        var i = e[0], r = e[2], a = e[4], o = e[1], s = e[3], l = e[5], u = Math.sin(n), h = Math.cos(n);
        return t[0] = i * h + o * u, t[1] = -i * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t
    }

    function Ce(t, e, n) {
        var i = n[0], r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
    }

    function ke(t, e) {
        var n = e[0], i = e[2], r = e[4], a = e[1], o = e[3], s = e[5], l = n * o - a * i;
        return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null
    }

    function Ae(t) {
        var e = we();
        return Me(e, t), e
    }

    function De(t) {
        return t > fp || -fp > t
    }

    function Pe(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
    }

    function Oe(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
    }

    function Le(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
    }

    function Be(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t
    }

    function Ee(t) {
        return Oe(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }

    function Re(t) {
        return Be(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }

    function ze(t, e, n) {
        return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function Fe(t, e, n) {
        return t + (e - t) * n
    }

    function Ne(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
    }

    function Ve(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function We(t, e) {
        Cp && Ve(Cp, e), Cp = Ip.put(t, Cp || e.slice())
    }

    function He(t, e) {
        if (t) {
            e = e || [];
            var n = Ip.get(t);
            if (n) return Ve(e, n);
            t += "";
            var i = t.replace(/ /g, "").toLowerCase();
            if (i in Tp) return Ve(e, Tp[i]), We(t, e), e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("("), a = i.indexOf(")");
                if (-1 !== r && a + 1 === i.length) {
                    var o = i.substr(0, r), s = i.substr(r + 1, a - (r + 1)).split(","), l = 1;
                    switch (o) {
                        case"rgba":
                            if (4 !== s.length) return void Ne(e, 0, 0, 0, 1);
                            l = Re(s.pop());
                        case"rgb":
                            return 3 !== s.length ? void Ne(e, 0, 0, 0, 1) : (Ne(e, Ee(s[0]), Ee(s[1]), Ee(s[2]), l), We(t, e), e);
                        case"hsla":
                            return 4 !== s.length ? void Ne(e, 0, 0, 0, 1) : (s[3] = Re(s[3]), Ge(s, e), We(t, e), e);
                        case"hsl":
                            return 3 !== s.length ? void Ne(e, 0, 0, 0, 1) : (Ge(s, e), We(t, e), e);
                        default:
                            return
                    }
                }
                Ne(e, 0, 0, 0, 1)
            } else {
                if (4 === i.length) {
                    var u = parseInt(i.substr(1), 16);
                    return u >= 0 && 4095 >= u ? (Ne(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), We(t, e), e) : void Ne(e, 0, 0, 0, 1)
                }
                if (7 === i.length) {
                    var u = parseInt(i.substr(1), 16);
                    return u >= 0 && 16777215 >= u ? (Ne(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), We(t, e), e) : void Ne(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function Ge(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = Re(t[1]), r = Re(t[2]),
            a = .5 >= r ? r * (i + 1) : r + i - r * i, o = 2 * r - a;
        return e = e || [], Ne(e, Oe(255 * ze(o, a, n + 1 / 3)), Oe(255 * ze(o, a, n)), Oe(255 * ze(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function Xe(t) {
        if (t) {
            var e, n, i = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(i, r, a), s = Math.max(i, r, a),
                l = s - o, u = (s + o) / 2;
            if (0 === l) e = 0, n = 0; else {
                n = .5 > u ? l / (s + o) : l / (2 - s - o);
                var h = ((s - i) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, d = ((s - a) / 6 + l / 2) / l;
                i === s ? e = d - c : r === s ? e = 1 / 3 + h - d : a === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1)
            }
            var f = [360 * e, n, u];
            return null != t[3] && f.push(t[3]), f
        }
    }

    function Ze(t, e) {
        var n = He(t);
        if (n) {
            for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
            return Ke(n, 4 === n.length ? "rgba" : "rgb")
        }
    }

    function je(t) {
        var e = He(t);
        return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
    }

    function Ye(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            n = n || [];
            var i = t * (e.length - 1), r = Math.floor(i), a = Math.ceil(i), o = e[r], s = e[a], l = i - r;
            return n[0] = Oe(Fe(o[0], s[0], l)), n[1] = Oe(Fe(o[1], s[1], l)), n[2] = Oe(Fe(o[2], s[2], l)), n[3] = Be(Fe(o[3], s[3], l)), n
        }
    }

    function qe(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            var i = t * (e.length - 1), r = Math.floor(i), a = Math.ceil(i), o = He(e[r]), s = He(e[a]), l = i - r,
                u = Ke([Oe(Fe(o[0], s[0], l)), Oe(Fe(o[1], s[1], l)), Oe(Fe(o[2], s[2], l)), Be(Fe(o[3], s[3], l))], "rgba");
            return n ? {color: u, leftIndex: r, rightIndex: a, value: i} : u
        }
    }

    function Ue(t, e, n, i) {
        return t = He(t), t ? (t = Xe(t), null != e && (t[0] = Le(e)), null != n && (t[1] = Re(n)), null != i && (t[2] = Re(i)), Ke(Ge(t), "rgba")) : void 0
    }

    function $e(t, e) {
        return t = He(t), t && null != e ? (t[3] = Be(e), Ke(t, "rgba")) : void 0
    }

    function Ke(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
        }
    }

    function Qe(t, e) {
        return t[e]
    }

    function Je(t, e, n) {
        t[e] = n
    }

    function tn(t, e, n) {
        return (e - t) * n + t
    }

    function en(t, e, n) {
        return n > .5 ? e : t
    }

    function nn(t, e, n, i, r) {
        var a = t.length;
        if (1 == r) for (var o = 0; a > o; o++) i[o] = tn(t[o], e[o], n); else for (var s = a && t[0].length, o = 0; a > o; o++) for (var l = 0; s > l; l++) i[o][l] = tn(t[o][l], e[o][l], n)
    }

    function rn(t, e, n) {
        var i = t.length, r = e.length;
        if (i !== r) {
            var a = i > r;
            if (a) t.length = r; else for (var o = i; r > o; o++) t.push(1 === n ? e[o] : Pp.call(e[o]))
        }
        for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) if (1 === n) isNaN(t[o]) && (t[o] = e[o]); else for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
    }

    function an(t, e, n) {
        if (t === e) return !0;
        var i = t.length;
        if (i !== e.length) return !1;
        if (1 === n) {
            for (var r = 0; i > r; r++) if (t[r] !== e[r]) return !1
        } else for (var a = t[0].length, r = 0; i > r; r++) for (var o = 0; a > o; o++) if (t[r][o] !== e[r][o]) return !1;
        return !0
    }

    function on(t, e, n, i, r, a, o, s, l) {
        var u = t.length;
        if (1 == l) for (var h = 0; u > h; h++) s[h] = sn(t[h], e[h], n[h], i[h], r, a, o); else for (var c = t[0].length, h = 0; u > h; h++) for (var d = 0; c > d; d++) s[h][d] = sn(t[h][d], e[h][d], n[h][d], i[h][d], r, a, o)
    }

    function sn(t, e, n, i, r, a, o) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
    }

    function ln(t) {
        if (d(t)) {
            var e = t.length;
            if (d(t[0])) {
                for (var n = [], i = 0; e > i; i++) n.push(Pp.call(t[i]));
                return n
            }
            return Pp.call(t)
        }
        return t
    }

    function un(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function hn(t) {
        var e = t[t.length - 1].value;
        return d(e && e[0]) ? 2 : 1
    }

    function cn(t, e, n, i, r, a) {
        var o = t._getter, s = t._setter, l = "spline" === e, u = i.length;
        if (u) {
            var h, c = i[0].value, f = d(c), p = !1, g = !1, v = f ? hn(i) : 0;
            i.sort(function (t, e) {
                return t.time - e.time
            }), h = i[u - 1].time;
            for (var m = [], y = [], _ = i[0].value, x = !0, w = 0; u > w; w++) {
                m.push(i[w].time / h);
                var b = i[w].value;
                if (f && an(b, _, v) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {
                    var M = He(b);
                    M ? (b = M, p = !0) : g = !0
                }
                y.push(b)
            }
            if (a || !x) {
                for (var S = y[u - 1], w = 0; u - 1 > w; w++) f ? rn(y[w], S, v) : !isNaN(y[w]) || isNaN(S) || g || p || (y[w] = S);
                f && rn(o(t._target, r), S, v);
                var T, I, C, k, A, D, P = 0, O = 0;
                if (p) var L = [0, 0, 0, 0];
                var B = function (t, e) {
                    var n;
                    if (0 > e) n = 0; else if (O > e) {
                        for (T = Math.min(P + 1, u - 1), n = T; n >= 0 && !(m[n] <= e); n--) ;
                        n = Math.min(n, u - 2)
                    } else {
                        for (n = P; u > n && !(m[n] > e); n++) ;
                        n = Math.min(n - 1, u - 2)
                    }
                    P = n, O = e;
                    var i = m[n + 1] - m[n];
                    if (0 !== i) if (I = (e - m[n]) / i, l) if (k = y[n], C = y[0 === n ? n : n - 1], A = y[n > u - 2 ? u - 1 : n + 1], D = y[n > u - 3 ? u - 1 : n + 2], f) on(C, k, A, D, I, I * I, I * I * I, o(t, r), v); else {
                        var a;
                        if (p) a = on(C, k, A, D, I, I * I, I * I * I, L, 1), a = un(L); else {
                            if (g) return en(k, A, I);
                            a = sn(C, k, A, D, I, I * I, I * I * I)
                        }
                        s(t, r, a)
                    } else if (f) nn(y[n], y[n + 1], I, o(t, r), v); else {
                        var a;
                        if (p) nn(y[n], y[n + 1], I, L, 1), a = un(L); else {
                            if (g) return en(y[n], y[n + 1], I);
                            a = tn(y[n], y[n + 1], I)
                        }
                        s(t, r, a)
                    }
                }, E = new Pe({target: t._target, life: h, loop: t._loop, delay: t._delay, onframe: B, ondestroy: n});
                return e && "spline" !== e && (E.easing = e), E
            }
        }
    }

    function dn(t, e, n, i, r, a, o, s) {
        function l() {
            h--, h || a && a()
        }

        b(i) ? (a = r, r = i, i = 0) : w(r) ? (a = r, r = "linear", i = 0) : w(i) ? (a = i, i = 0) : w(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), fn(t, "", t, e, n, i, s);
        var u = t.animators.slice(), h = u.length;
        h || a && a();
        for (var c = 0; c < u.length; c++) u[c].done(l).start(r, o)
    }

    function fn(t, e, n, i, r, a, o) {
        var s = {}, l = 0;
        for (var u in i) i.hasOwnProperty(u) && (null != n[u] ? M(i[u]) && !d(i[u]) ? fn(t, e ? e + "." + u : u, n[u], i[u], r, a, o) : (o ? (s[u] = n[u], pn(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || o || pn(t, e, u, i[u]));
        l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0)
    }

    function pn(t, e, n, i) {
        if (e) {
            var r = {};
            r[e] = {}, r[e][n] = i, t.attr(r)
        } else t.attr(n, i)
    }

    function gn(t, e, n, i) {
        0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
    }

    function vn(t) {
        for (var e = 0; t >= Xp;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function mn(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (; n > r && i(t[r], t[r - 1]) < 0;) r++;
            yn(t, e, r)
        } else for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;
        return r - e
    }

    function yn(t, e, n) {
        for (n--; n > e;) {
            var i = t[e];
            t[e++] = t[n], t[n--] = i
        }
    }

    function _n(t, e, n, i, r) {
        for (i === e && i++; n > i; i++) {
            for (var a, o = t[i], s = e, l = i; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
            var u = i - s;
            switch (u) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; u > 0;) t[s + u] = t[s + u - 1], u--
            }
            t[s] = o
        }
    }

    function xn(t, e, n, i, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[n + r]) > 0) {
            for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), o += r, l += r
        } else {
            for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var u = o;
            o = r - l, l = r - u
        }
        for (o++; l > o;) {
            var h = o + (l - o >>> 1);
            a(t, e[n + h]) > 0 ? o = h + 1 : l = h
        }
        return l
    }

    function wn(t, e, n, i, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[n + r]) < 0) {
            for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var u = o;
            o = r - l, l = r - u
        } else {
            for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), o += r, l += r
        }
        for (o++; l > o;) {
            var h = o + (l - o >>> 1);
            a(t, e[n + h]) < 0 ? l = h : o = h + 1
        }
        return l
    }

    function bn(t, e) {
        function n(t, e) {
            l[c] = t, u[c] = e, c += 1
        }

        function i() {
            for (; c > 1;) {
                var t = c - 2;
                if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--; else if (u[t] > u[t + 1]) break;
                a(t)
            }
        }

        function r() {
            for (; c > 1;) {
                var t = c - 2;
                t > 0 && u[t - 1] < u[t + 1] && t--, a(t)
            }
        }

        function a(n) {
            var i = l[n], r = u[n], a = l[n + 1], h = u[n + 1];
            u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;
            var d = wn(t[a], t, i, r, 0, e);
            i += d, r -= d, 0 !== r && (h = xn(t[i + r - 1], t, a, h, h - 1, e), 0 !== h && (h >= r ? o(i, r, a, h) : s(i, r, a, h)))
        }

        function o(n, i, r, a) {
            var o = 0;
            for (o = 0; i > o; o++) d[o] = t[n + o];
            var s = 0, l = r, u = n;
            if (t[u++] = t[l++], 0 !== --a) {
                if (1 === i) {
                    for (o = 0; a > o; o++) t[u + o] = t[l + o];
                    return void (t[u + a] = d[s])
                }
                for (var c, f, p, g = h; ;) {
                    c = 0, f = 0, p = !1;
                    do if (e(t[l], d[s]) < 0) {
                        if (t[u++] = t[l++], f++, c = 0, 0 === --a) {
                            p = !0;
                            break
                        }
                    } else if (t[u++] = d[s++], c++, f = 0, 1 === --i) {
                        p = !0;
                        break
                    } while (g > (c | f));
                    if (p) break;
                    do {
                        if (c = wn(t[l], d, s, i, 0, e), 0 !== c) {
                            for (o = 0; c > o; o++) t[u + o] = d[s + o];
                            if (u += c, s += c, i -= c, 1 >= i) {
                                p = !0;
                                break
                            }
                        }
                        if (t[u++] = t[l++], 0 === --a) {
                            p = !0;
                            break
                        }
                        if (f = xn(d[s], t, l, a, 0, e), 0 !== f) {
                            for (o = 0; f > o; o++) t[u + o] = t[l + o];
                            if (u += f, l += f, a -= f, 0 === a) {
                                p = !0;
                                break
                            }
                        }
                        if (t[u++] = d[s++], 1 === --i) {
                            p = !0;
                            break
                        }
                        g--
                    } while (c >= Zp || f >= Zp);
                    if (p) break;
                    0 > g && (g = 0), g += 2
                }
                if (h = g, 1 > h && (h = 1), 1 === i) {
                    for (o = 0; a > o; o++) t[u + o] = t[l + o];
                    t[u + a] = d[s]
                } else {
                    if (0 === i) throw new Error;
                    for (o = 0; i > o; o++) t[u + o] = d[s + o]
                }
            } else for (o = 0; i > o; o++) t[u + o] = d[s + o]
        }

        function s(n, i, r, a) {
            var o = 0;
            for (o = 0; a > o; o++) d[o] = t[r + o];
            var s = n + i - 1, l = a - 1, u = r + a - 1, c = 0, f = 0;
            if (t[u--] = t[s--], 0 !== --i) {
                if (1 === a) {
                    for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
                    return void (t[u] = d[l])
                }
                for (var p = h; ;) {
                    var g = 0, v = 0, m = !1;
                    do if (e(d[l], t[s]) < 0) {
                        if (t[u--] = t[s--], g++, v = 0, 0 === --i) {
                            m = !0;
                            break
                        }
                    } else if (t[u--] = d[l--], v++, g = 0, 1 === --a) {
                        m = !0;
                        break
                    } while (p > (g | v));
                    if (m) break;
                    do {
                        if (g = i - wn(d[l], t, n, i, i - 1, e), 0 !== g) {
                            for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];
                            if (0 === i) {
                                m = !0;
                                break
                            }
                        }
                        if (t[u--] = d[l--], 1 === --a) {
                            m = !0;
                            break
                        }
                        if (v = a - xn(t[s], d, 0, a, a - 1, e), 0 !== v) {
                            for (u -= v, l -= v, a -= v, f = u + 1, c = l + 1, o = 0; v > o; o++) t[f + o] = d[c + o];
                            if (1 >= a) {
                                m = !0;
                                break
                            }
                        }
                        if (t[u--] = t[s--], 0 === --i) {
                            m = !0;
                            break
                        }
                        p--
                    } while (g >= Zp || v >= Zp);
                    if (m) break;
                    0 > p && (p = 0), p += 2
                }
                if (h = p, 1 > h && (h = 1), 1 === a) {
                    for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
                    t[u] = d[l]
                } else {
                    if (0 === a) throw new Error;
                    for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
                }
            } else for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
        }

        var l, u, h = Zp, c = 0, d = [];
        l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n
    }

    function Mn(t, e, n, i) {
        n || (n = 0), i || (i = t.length);
        var r = i - n;
        if (!(2 > r)) {
            var a = 0;
            if (Xp > r) return a = mn(t, n, i, e), void _n(t, n, i, n + a, e);
            var o = new bn(t, e), s = vn(r);
            do {
                if (a = mn(t, n, i, e), s > a) {
                    var l = r;
                    l > s && (l = s), _n(t, n, n + l, n + a, e), a = l
                }
                o.pushRun(n, a), o.mergeRuns(), r -= a, n += a
            } while (0 !== r);
            o.forceMergeRuns()
        }
    }

    function Sn(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    function Tn(t, e, n) {
        var i = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, a = null == e.y ? 0 : e.y,
            o = null == e.y2 ? 0 : e.y2;
        e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
        var s = t.createLinearGradient(i, a, r, o);
        return s
    }

    function In(t, e, n) {
        var i = n.width, r = n.height, a = Math.min(i, r), o = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);
        var u = t.createRadialGradient(o, s, 0, o, s, l);
        return u
    }

    function Cn() {
        return !1
    }

    function kn(t, e, n) {
        var i = jf(), r = e.getWidth(), a = e.getHeight(), o = i.style;
        return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i
    }

    function An(t) {
        if ("string" == typeof t) {
            var e = ig.get(t);
            return e && e.image
        }
        return t
    }

    function Dn(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var a = ig.get(t), o = {hostEl: n, cb: i, cbPayload: r};
                return a ? (e = a.image, !On(e) && a.pending.push(o)) : (!e && (e = new Image), e.onload = e.onerror = Pn, ig.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [o]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function Pn() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e], i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function On(t) {
        return t && t.width && t.height
    }

    function Ln(t, e) {
        e = e || lg;
        var n = t + ":" + e;
        if (rg[n]) return rg[n];
        for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max(Zn(i[a], e).width, r);
        return ag > og && (ag = 0, rg = {}), ag++, rg[n] = r, r
    }

    function Bn(t, e, n, i, r, a, o) {
        return a ? Rn(t, e, n, i, r, a, o) : En(t, e, n, i, r, o)
    }

    function En(t, e, n, i, r, a) {
        var o = jn(t, e, r, a), s = Ln(t, e);
        r && (s += r[1] + r[3]);
        var l = o.outerHeight, u = zn(0, s, n), h = Fn(0, l, i), c = new gn(u, h, s, l);
        return c.lineHeight = o.lineHeight, c
    }

    function Rn(t, e, n, i, r, a, o) {
        var s = Yn(t, {rich: a, truncate: o, font: e, textAlign: n, textPadding: r}), l = s.outerWidth,
            u = s.outerHeight, h = zn(0, l, n), c = Fn(0, u, i);
        return new gn(h, c, l, u)
    }

    function zn(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
    }

    function Fn(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
    }

    function Nn(t, e, n) {
        var i = e.x, r = e.y, a = e.height, o = e.width, s = a / 2, l = "left", u = "top";
        switch (t) {
            case"left":
                i -= n, r += s, l = "right", u = "middle";
                break;
            case"right":
                i += n + o, r += s, u = "middle";
                break;
            case"top":
                i += o / 2, r -= n, l = "center", u = "bottom";
                break;
            case"bottom":
                i += o / 2, r += a + n, l = "center";
                break;
            case"inside":
                i += o / 2, r += s, l = "center", u = "middle";
                break;
            case"insideLeft":
                i += n, r += s, u = "middle";
                break;
            case"insideRight":
                i += o - n, r += s, l = "right", u = "middle";
                break;
            case"insideTop":
                i += o / 2, r += n, l = "center";
                break;
            case"insideBottom":
                i += o / 2, r += a - n, l = "center", u = "bottom";
                break;
            case"insideTopLeft":
                i += n, r += n;
                break;
            case"insideTopRight":
                i += o - n, r += n, l = "right";
                break;
            case"insideBottomLeft":
                i += n, r += a - n, u = "bottom";
                break;
            case"insideBottomRight":
                i += o - n, r += a - n, l = "right", u = "bottom"
        }
        return {x: i, y: r, textAlign: l, textVerticalAlign: u}
    }

    function Vn(t, e, n, i, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = Wn(e, n, i, r);
        for (var o = 0, s = a.length; s > o; o++) a[o] = Hn(a[o], r);
        return a.join("\n")
    }

    function Wn(t, e, n, i) {
        i = o({}, i), i.font = e;
        var n = A(n, "...");
        i.maxIterations = A(i.maxIterations, 2);
        var r = i.minChar = A(i.minChar, 0);
        i.cnCharWidth = Ln("国", e);
        var a = i.ascCharWidth = Ln("a", e);
        i.placeholder = A(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
        var u = Ln(n);
        return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i
    }

    function Hn(t, e) {
        var n = e.containerWidth, i = e.font, r = e.contentWidth;
        if (!n) return "";
        var a = Ln(t, i);
        if (n >= a) return t;
        for (var o = 0; ; o++) {
            if (r >= a || o >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === o ? Gn(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
            t = t.substr(0, s), a = Ln(t, i)
        }
        return "" === t && (t = e.placeholder), t
    }

    function Gn(t, e, n, i) {
        for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
            var s = t.charCodeAt(a);
            r += s >= 0 && 127 >= s ? n : i
        }
        return a
    }

    function Xn(t) {
        return Ln("国", t)
    }

    function Zn(t, e) {
        return ug.measureText(t, e)
    }

    function jn(t, e, n, i) {
        null != t && (t += "");
        var r = Xn(e), a = t ? t.split("\n") : [], o = a.length * r, s = o;
        if (n && (s += n[0] + n[2]), t && i) {
            var l = i.outerHeight, u = i.outerWidth;
            if (null != l && s > l) t = "", a = []; else if (null != u) for (var h = Wn(u - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
                minChar: i.minChar,
                placeholder: i.placeholder
            }), c = 0, d = a.length; d > c; c++) a[c] = Hn(a[c], h)
        }
        return {lines: a, height: o, outerHeight: s, lineHeight: r}
    }

    function Yn(t, e) {
        var n = {lines: [], width: 0, height: 0};
        if (null != t && (t += ""), !t) return n;
        for (var i, r = sg.lastIndex = 0; null != (i = sg.exec(t));) {
            var a = i.index;
            a > r && qn(n, t.substring(r, a)), qn(n, i[2], i[1]), r = sg.lastIndex
        }
        r < t.length && qn(n, t.substring(r, t.length));
        var o = n.lines, s = 0, l = 0, u = [], h = e.textPadding, c = e.truncate, d = c && c.outerWidth,
            f = c && c.outerHeight;
        h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));
        for (var p = 0; p < o.length; p++) {
            for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
                var _ = g.tokens[y], x = _.styleName && e.rich[_.styleName] || {}, w = _.textPadding = x.textPadding,
                    b = _.font = x.font || e.font, M = _.textHeight = A(x.textHeight, Xn(b));
                if (w && (M += w[0] + w[2]), _.height = M, _.lineHeight = D(x.textLineHeight, e.textLineHeight, M), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                _.textWidth = Ln(_.text, b);
                var S = x.textWidth, T = null == S || "auto" === S;
                if ("string" == typeof S && "%" === S.charAt(S.length - 1)) _.percentWidth = S, u.push(_), S = 0; else {
                    if (T) {
                        S = _.textWidth;
                        var I = x.textBackgroundColor, C = I && I.image;
                        C && (C = An(C), On(C) && (S = Math.max(S, C.width * M / C.height)))
                    }
                    var k = w ? w[1] + w[3] : 0;
                    S += k;
                    var P = null != d ? d - m : null;
                    null != P && S > P && (!T || k > P ? (_.text = "", _.textWidth = S = 0) : (_.text = Vn(_.text, P - k, b, c.ellipsis, {minChar: c.minChar}), _.textWidth = Ln(_.text, b), S = _.textWidth + k))
                }
                m += _.width = S, x && (v = Math.max(v, _.lineHeight))
            }
            g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m)
        }
        n.outerWidth = n.width = A(e.textWidth, l), n.outerHeight = n.height = A(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);
        for (var p = 0; p < u.length; p++) {
            var _ = u[p], O = _.percentWidth;
            _.width = parseInt(O, 10) / 100 * l
        }
        return n
    }

    function qn(t, e, n) {
        for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o], l = {styleName: n, text: s, isLineHolder: !s && !i};
            if (o) a.push({tokens: [l]}); else {
                var u = (a[a.length - 1] || (a[0] = {tokens: []})).tokens, h = u.length;
                1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l)
            }
        }
    }

    function Un(t) {
        var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
        return e && B(e) || t.textFont || t.font
    }

    function $n(t, e) {
        var n, i, r, a, o = e.x, s = e.y, l = e.width, u = e.height, h = e.r;
        0 > l && (o += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = a = h : h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[3]) : n = i = r = a = 0;
        var c;
        n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + a > u && (c = n + a, n *= u / c, a *= u / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + u - r), 0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + u), 0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI)
    }

    function Kn(t) {
        return Qn(t), f(t.rich, Qn), t
    }

    function Qn(t) {
        if (t) {
            t.font = Un(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || hg[e] ? e : "left";
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"), t.textVerticalAlign = null == n || cg[n] ? n : "top";
            var i = t.textPadding;
            i && (t.textPadding = O(t.textPadding))
        }
    }

    function Jn(t, e, n, i, r, a) {
        i.rich ? ei(t, e, n, i, r) : ti(t, e, n, i, r, a)
    }

    function ti(t, e, n, i, r, a) {
        var o = a && a.style, s = o && "text" === a.type, l = i.font || lg;
        s && l === (o.font || lg) || (e.font = l);
        var u = t.__computedFont;
        t.__styleFont !== l && (t.__styleFont = l, u = t.__computedFont = e.font);
        var h = i.textPadding, c = t.__textCotentBlock;
        (!c || t.__dirtyText) && (c = t.__textCotentBlock = jn(n, u, h, i.truncate));
        var d = c.outerHeight, f = c.lines, p = c.lineHeight, g = li(d, i, r), v = g.baseX, m = g.baseY,
            y = g.textAlign || "left", _ = g.textVerticalAlign;
        ii(e, i, r, v, m);
        var x = Fn(m, d, _), w = v, b = x, M = ai(i);
        if (M || h) {
            var S = Ln(n, u), T = S;
            h && (T += h[1] + h[3]);
            var I = zn(v, T, y);
            M && oi(t, e, i, I, x, T, d), h && (w = fi(v, y, h), b += h[0])
        }
        e.textAlign = y, e.textBaseline = "middle";
        for (var C = 0; C < dg.length; C++) {
            var k = dg[C], A = k[0], D = k[1], P = i[A];
            s && P === o[A] || (e[D] = qp(e, D, P || k[2]))
        }
        b += p / 2;
        var O = i.textStrokeWidth, L = s ? o.textStrokeWidth : null, B = !s || O !== L,
            E = !s || B || i.textStroke !== o.textStroke, R = hi(i.textStroke, O), z = ci(i.textFill);
        if (R && (B && (e.lineWidth = O), E && (e.strokeStyle = R)), z && (!s || i.textFill !== o.textFill || o.textBackgroundColor) && (e.fillStyle = z), 1 === f.length) R && e.strokeText(f[0], w, b), z && e.fillText(f[0], w, b); else for (var C = 0; C < f.length; C++) R && e.strokeText(f[C], w, b), z && e.fillText(f[C], w, b), b += p
    }

    function ei(t, e, n, i, r) {
        var a = t.__textCotentBlock;
        (!a || t.__dirtyText) && (a = t.__textCotentBlock = Yn(n, i)), ni(t, e, a, i, r)
    }

    function ni(t, e, n, i, r) {
        var a = n.width, o = n.outerWidth, s = n.outerHeight, l = i.textPadding, u = li(s, i, r), h = u.baseX,
            c = u.baseY, d = u.textAlign, f = u.textVerticalAlign;
        ii(e, i, r, h, c);
        var p = zn(h, o, d), g = Fn(c, s, f), v = p, m = g;
        l && (v += l[3], m += l[0]);
        var y = v + a;
        ai(i) && oi(t, e, i, p, g, o, s);
        for (var _ = 0; _ < n.lines.length; _++) {
            for (var x, w = n.lines[_], b = w.tokens, M = b.length, S = w.lineHeight, T = w.width, I = 0, C = v, k = y, A = M - 1; M > I && (x = b[I], !x.textAlign || "left" === x.textAlign);) ri(t, e, x, i, S, m, C, "left"), T -= x.width, C += x.width, I++;
            for (; A >= 0 && (x = b[A], "right" === x.textAlign);) ri(t, e, x, i, S, m, k, "right"), T -= x.width, k -= x.width, A--;
            for (C += (a - (C - v) - (y - k) - T) / 2; A >= I;) x = b[I], ri(t, e, x, i, S, m, C + x.width / 2, "center"), C += x.width, I++;
            m += S
        }
    }

    function ii(t, e, n, i, r) {
        if (n && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
        }
    }

    function ri(t, e, n, i, r, a, o, s) {
        var l = i.rich[n.styleName] || {};
        l.text = n.text;
        var u = n.textVerticalAlign, h = a + r / 2;
        "top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2), !n.isLineHolder && ai(l) && oi(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, h - n.height / 2, n.width, n.height);
        var c = n.textPadding;
        c && (o = fi(o, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), ui(e, "shadowBlur", D(l.textShadowBlur, i.textShadowBlur, 0)), ui(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), ui(e, "shadowOffsetX", D(l.textShadowOffsetX, i.textShadowOffsetX, 0)), ui(e, "shadowOffsetY", D(l.textShadowOffsetY, i.textShadowOffsetY, 0)), ui(e, "textAlign", s), ui(e, "textBaseline", "middle"), ui(e, "font", n.font || lg);
        var d = hi(l.textStroke || i.textStroke, p), f = ci(l.textFill || i.textFill),
            p = A(l.textStrokeWidth, i.textStrokeWidth);
        d && (ui(e, "lineWidth", p), ui(e, "strokeStyle", d), e.strokeText(n.text, o, h)), f && (ui(e, "fillStyle", f), e.fillText(n.text, o, h))
    }

    function ai(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
    }

    function oi(t, e, n, i, r, a, o) {
        var s = n.textBackgroundColor, l = n.textBorderWidth, u = n.textBorderColor, h = b(s);
        if (ui(e, "shadowBlur", n.textBoxShadowBlur || 0), ui(e, "shadowColor", n.textBoxShadowColor || "transparent"), ui(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), ui(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? $n(e, {x: i, y: r, width: a, height: o, r: c}) : e.rect(i, r, a, o), e.closePath()
        }
        if (h) if (ui(e, "fillStyle", s), null != n.fillOpacity) {
            var d = e.globalAlpha;
            e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d
        } else e.fill(); else if (w(s)) ui(e, "fillStyle", s(n)), e.fill(); else if (M(s)) {
            var f = s.image;
            f = Dn(f, null, t, si, s), f && On(f) && e.drawImage(f, i, r, a, o)
        }
        if (l && u) if (ui(e, "lineWidth", l), ui(e, "strokeStyle", u), null != n.strokeOpacity) {
            var d = e.globalAlpha;
            e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d
        } else e.stroke()
    }

    function si(t, e) {
        e.image = t
    }

    function li(t, e, n) {
        var i = e.x || 0, r = e.y || 0, a = e.textAlign, o = e.textVerticalAlign;
        if (n) {
            var s = e.textPosition;
            if (s instanceof Array) i = n.x + di(s[0], n.width), r = n.y + di(s[1], n.height); else {
                var l = Nn(s, n, e.textDistance);
                i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
            }
            var u = e.textOffset;
            u && (i += u[0], r += u[1])
        }
        return {baseX: i, baseY: r, textAlign: a, textVerticalAlign: o}
    }

    function ui(t, e, n) {
        return t[e] = qp(t, e, n), t[e]
    }

    function hi(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function ci(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function di(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function fi(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }

    function pi(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }

    function gi(t) {
        t = t || {}, Np.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new $p(t.style, this), this._rect = null, this.__clipPaths = []
    }

    function vi(t) {
        gi.call(this, t)
    }

    function mi(t) {
        return parseInt(t, 10)
    }

    function yi(t) {
        return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
    }

    function _i(t, e, n) {
        return _g.copy(t.getBoundingRect()), t.transform && _g.applyTransform(t.transform), xg.width = e, xg.height = n, !_g.intersect(xg)
    }

    function xi(t, e) {
        if (t == e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0
    }

    function wi(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
        }
    }

    function bi(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
    }

    function Mi(t) {
        var e = t[1][0] - t[0][0], n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n)
    }

    function Si(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    function Ti(t) {
        return "mousewheel" === t && Ef.browser.firefox ? "DOMMouseScroll" : t
    }

    function Ii(t, e, n) {
        var i = t._gestureMgr;
        "start" === n && i.clear();
        var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === n && i.clear(), r) {
            var a = r.type;
            e.gestureEvent = a, t.handler.dispatchToElement({target: r.target}, a, r.event)
        }
    }

    function Ci(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
            t._touching = !1
        }, 700)
    }

    function ki(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function Ai(t) {
        function e(t, e) {
            return function () {
                return e._touching ? void 0 : t.apply(e, arguments)
            }
        }

        f(Cg, function (e) {
            t._handlers[e] = y(Dg[e], t)
        }), f(Ag, function (e) {
            t._handlers[e] = y(Dg[e], t)
        }), f(Ig, function (n) {
            t._handlers[n] = e(Dg[n], t)
        })
    }

    function Di(t) {
        function e(e, n) {
            f(e, function (e) {
                ge(t, Ti(e), n._handlers[e])
            }, n)
        }

        ip.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Mg, this._handlers = {}, Ai(this), Ef.pointerEventsSupported ? e(Ag, this) : (Ef.touchEventsSupported && e(Cg, this), e(Ig, this))
    }

    function Pi(t, e) {
        var n = new Rg(Lf(), t, e);
        return Bg[n.id] = n, n
    }

    function Oi(t) {
        if (t) t.dispose(); else {
            for (var e in Bg) Bg.hasOwnProperty(e) && Bg[e].dispose();
            Bg = {}
        }
        return this
    }

    function Li(t) {
        return Bg[t]
    }

    function Bi(t, e) {
        Lg[t] = e
    }

    function Ei(t) {
        delete Bg[t]
    }

    function Ri(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }

    function zi(t, e, n) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0, r = n.length; r > i; i++) {
                var a = n[i];
                !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
            }
        }
    }

    function Fi(t) {
        return !Ng(t) || Vg(t) || t instanceof Date ? t : t.value
    }

    function Ni(t) {
        return Ng(t) && !(t instanceof Array)
    }

    function Vi(t, e) {
        e = (e || []).slice();
        var n = p(t || [], function (t) {
            return {exist: t}
        });
        return Fg(e, function (t, i) {
            if (Ng(t)) {
                for (var r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);
                for (var r = 0; r < n.length; r++) {
                    var a = n[r].exist;
                    if (!(n[r].option || null != a.id && null != t.id || null == t.name || Gi(t) || Gi(a) || a.name !== t.name + "")) return n[r].option = t, void (e[i] = null)
                }
            }
        }), Fg(e, function (t) {
            if (Ng(t)) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e].exist;
                    if (!n[e].option && !Gi(i) && null == t.id) {
                        n[e].option = t;
                        break
                    }
                }
                e >= n.length && n.push({option: t})
            }
        }), n
    }

    function Wi(t) {
        var e = F();
        Fg(t, function (t) {
            var n = t.exist;
            n && e.set(n.id, t)
        }), Fg(t, function (t) {
            var n = t.option;
            L(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
        }), Fg(t, function (t, n) {
            var i = t.exist, r = t.option, a = t.keyInfo;
            if (Ng(r)) {
                if (a.name = null != r.name ? r.name + "" : i ? i.name : Wg + n, i) a.id = i.id; else if (null != r.id) a.id = r.id + ""; else {
                    var o = 0;
                    do a.id = "\x00" + a.name + "\x00" + o++; while (e.get(a.id))
                }
                e.set(a.id, t)
            }
        })
    }

    function Hi(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Wg))
    }

    function Gi(t) {
        return Ng(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
    }

    function Xi(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function Zi() {
        var t = "__\x00ec_inner_" + Gg++ + "_" + Math.random().toFixed(5);
        return function (e) {
            return e[t] || (e[t] = {})
        }
    }

    function ji(t, e, n) {
        if (b(e)) {
            var i = {};
            i[e + "Index"] = 0, e = i
        }
        var r = n && n.defaultMainType;
        !r || Yi(e, r + "Index") || Yi(e, r + "Id") || Yi(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return Fg(e, function (i, r) {
            var i = e[r];
            if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = i);
            var o = r.match(/^(\w+)(Index|Id|Name)$/) || [], s = o[1], l = (o[2] || "").toLowerCase();
            if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n.includeMainTypes, s) < 0)) {
                var h = {mainType: s};
                ("index" !== l || "all" !== i) && (h[l] = i);
                var c = t.queryComponents(h);
                a[s + "Models"] = c, a[s + "Model"] = c[0]
            }
        }), a
    }

    function Yi(t, e) {
        return t && t.hasOwnProperty(e)
    }

    function qi(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n
    }

    function Ui(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }

    function $i(t) {
        return "auto" === t ? Ef.domSupported ? "html" : "richText" : t || "html"
    }

    function Ki(t) {
        var e = {main: "", sub: ""};
        return t && (t = t.split(Xg), e.main = t[0] || "", e.sub = t[1] || ""), e
    }

    function Qi(t) {
        L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function Ji(t) {
        t.$constructor = t, t.extend = function (t) {
            var e = this, n = function () {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
            };
            return o(n.prototype, t), n.extend = this.extend, n.superCall = er, n.superApply = nr, h(n, this), n.superClass = e, n
        }
    }

    function tr(t) {
        var e = ["__\x00is_clz", jg++, Math.random().toFixed(3)].join("_");
        t.prototype[e] = !0, t.isInstance = function (t) {
            return !(!t || !t[e])
        }
    }

    function er(t, e) {
        var n = P(arguments, 2);
        return this.superClass.prototype[e].apply(t, n)
    }

    function nr(t, e, n) {
        return this.superClass.prototype[e].apply(t, n)
    }

    function ir(t, e) {
        function n(t) {
            var e = i[t.main];
            return e && e[Zg] || (e = i[t.main] = {}, e[Zg] = !0), e
        }

        e = e || {};
        var i = {};
        if (t.registerClass = function (t, e) {
            if (e) if (Qi(e), e = Ki(e), e.sub) {
                if (e.sub !== Zg) {
                    var r = n(e);
                    r[e.sub] = t
                }
            } else i[e.main] = t;
            return t
        }, t.getClass = function (t, e, n) {
            var r = i[t];
            if (r && r[Zg] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return r
        }, t.getClassesByMainType = function (t) {
            t = Ki(t);
            var e = [], n = i[t.main];
            return n && n[Zg] ? f(n, function (t, n) {
                n !== Zg && e.push(t)
            }) : e.push(n), e
        }, t.hasClass = function (t) {
            return t = Ki(t), !!i[t.main]
        }, t.getAllClassMainTypes = function () {
            var t = [];
            return f(i, function (e, n) {
                t.push(n)
            }), t
        }, t.hasSubTypes = function (t) {
            t = Ki(t);
            var e = i[t.main];
            return e && e[Zg]
        }, t.parseClassType = Ki, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function (e) {
                var n = r.call(this, e);
                return t.registerClass(n, e.type)
            })
        }
        return t
    }

    function rr(t) {
        return t > -tv && tv > t
    }

    function ar(t) {
        return t > tv || -tv > t
    }

    function or(t, e, n, i, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
    }

    function sr(t, e, n, i, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
    }

    function lr(t, e, n, i, r, a) {
        var o = i + 3 * (e - n) - t, s = 3 * (n - 2 * e + t), l = 3 * (e - t), u = t - r, h = s * s - 3 * o * l,
            c = s * l - 9 * o * u, d = l * l - 3 * s * u, f = 0;
        if (rr(h) && rr(c)) if (rr(s)) a[0] = 0; else {
            var p = -l / s;
            p >= 0 && 1 >= p && (a[f++] = p)
        } else {
            var g = c * c - 4 * h * d;
            if (rr(g)) {
                var v = c / h, p = -s / o + v, m = -v / 2;
                p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m)
            } else if (g > 0) {
                var y = Jg(g), _ = h * s + 1.5 * o * (-c + y), x = h * s + 1.5 * o * (-c - y);
                _ = 0 > _ ? -Qg(-_, iv) : Qg(_, iv), x = 0 > x ? -Qg(-x, iv) : Qg(x, iv);
                var p = (-s - (_ + x)) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p)
            } else {
                var w = (2 * h * s - 3 * o * c) / (2 * Jg(h * h * h)), b = Math.acos(w) / 3, M = Jg(h), S = Math.cos(b),
                    p = (-s - 2 * M * S) / (3 * o), m = (-s + M * (S + nv * Math.sin(b))) / (3 * o),
                    T = (-s + M * (S - nv * Math.sin(b))) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), T >= 0 && 1 >= T && (a[f++] = T)
            }
        }
        return f
    }

    function ur(t, e, n, i, r) {
        var a = 6 * n - 12 * e + 6 * t, o = 9 * e + 3 * i - 3 * t - 9 * n, s = 3 * e - 3 * t, l = 0;
        if (rr(o)) {
            if (ar(a)) {
                var u = -s / a;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = a * a - 4 * o * s;
            if (rr(h)) r[0] = -a / (2 * o); else if (h > 0) {
                var c = Jg(h), u = (-a + c) / (2 * o), d = (-a - c) / (2 * o);
                u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d)
            }
        }
        return l
    }

    function hr(t, e, n, i, r, a) {
        var o = (e - t) * r + t, s = (n - e) * r + e, l = (i - n) * r + n, u = (s - o) * r + o, h = (l - s) * r + s,
            c = (h - u) * r + u;
        a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = i
    }

    function cr(t, e, n, i, r, a, o, s, l, u, h) {
        var c, d, f, p, g, v = .005, m = 1 / 0;
        rv[0] = l, rv[1] = u;
        for (var y = 0; 1 > y; y += .05) av[0] = or(t, n, r, o, y), av[1] = or(e, i, a, s, y), p = tp(rv, av), m > p && (c = y, m = p);
        m = 1 / 0;
        for (var _ = 0; 32 > _ && !(ev > v); _++) d = c - v, f = c + v, av[0] = or(t, n, r, o, d), av[1] = or(e, i, a, s, d), p = tp(av, rv), d >= 0 && m > p ? (c = d, m = p) : (ov[0] = or(t, n, r, o, f), ov[1] = or(e, i, a, s, f), g = tp(ov, rv), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
        return h && (h[0] = or(t, n, r, o, c), h[1] = or(e, i, a, s, c)), Jg(m)
    }

    function dr(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }

    function fr(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }

    function pr(t, e, n, i, r) {
        var a = t - 2 * e + n, o = 2 * (e - t), s = t - i, l = 0;
        if (rr(a)) {
            if (ar(o)) {
                var u = -s / o;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = o * o - 4 * a * s;
            if (rr(h)) {
                var u = -o / (2 * a);
                u >= 0 && 1 >= u && (r[l++] = u)
            } else if (h > 0) {
                var c = Jg(h), u = (-o + c) / (2 * a), d = (-o - c) / (2 * a);
                u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d)
            }
        }
        return l
    }

    function gr(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i
    }

    function vr(t, e, n, i, r) {
        var a = (e - t) * i + t, o = (n - e) * i + e, s = (o - a) * i + a;
        r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n
    }

    function mr(t, e, n, i, r, a, o, s, l) {
        var u, h = .005, c = 1 / 0;
        rv[0] = o, rv[1] = s;
        for (var d = 0; 1 > d; d += .05) {
            av[0] = dr(t, n, r, d), av[1] = dr(e, i, a, d);
            var f = tp(rv, av);
            c > f && (u = d, c = f)
        }
        c = 1 / 0;
        for (var p = 0; 32 > p && !(ev > h); p++) {
            var g = u - h, v = u + h;
            av[0] = dr(t, n, r, g), av[1] = dr(e, i, a, g);
            var f = tp(av, rv);
            if (g >= 0 && c > f) u = g, c = f; else {
                ov[0] = dr(t, n, r, v), ov[1] = dr(e, i, a, v);
                var m = tp(ov, rv);
                1 >= v && c > m ? (u = v, c = m) : h *= .5
            }
        }
        return l && (l[0] = dr(t, n, r, u), l[1] = dr(e, i, a, u)), Jg(c)
    }

    function yr(t, e, n) {
        if (0 !== t.length) {
            var i, r = t[0], a = r[0], o = r[0], s = r[1], l = r[1];
            for (i = 1; i < t.length; i++) r = t[i], a = sv(a, r[0]), o = lv(o, r[0]), s = sv(s, r[1]), l = lv(l, r[1]);
            e[0] = a, e[1] = s, n[0] = o, n[1] = l
        }
    }

    function _r(t, e, n, i, r, a) {
        r[0] = sv(t, n), r[1] = sv(e, i), a[0] = lv(t, n), a[1] = lv(e, i)
    }

    function xr(t, e, n, i, r, a, o, s, l, u) {
        var h, c = ur, d = or, f = c(t, n, r, o, gv);
        for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; f > h; h++) {
            var p = d(t, n, r, o, gv[h]);
            l[0] = sv(p, l[0]), u[0] = lv(p, u[0])
        }
        for (f = c(e, i, a, s, vv), h = 0; f > h; h++) {
            var g = d(e, i, a, s, vv[h]);
            l[1] = sv(g, l[1]), u[1] = lv(g, u[1])
        }
        l[0] = sv(t, l[0]), u[0] = lv(t, u[0]), l[0] = sv(o, l[0]), u[0] = lv(o, u[0]), l[1] = sv(e, l[1]), u[1] = lv(e, u[1]), l[1] = sv(s, l[1]), u[1] = lv(s, u[1])
    }

    function wr(t, e, n, i, r, a, o, s) {
        var l = gr, u = dr, h = lv(sv(l(t, n, r), 1), 0), c = lv(sv(l(e, i, a), 1), 0), d = u(t, n, r, h),
            f = u(e, i, a, c);
        o[0] = sv(t, r, d), o[1] = sv(e, a, f), s[0] = lv(t, r, d), s[1] = lv(e, a, f)
    }

    function br(t, e, n, i, r, a, o, s, l) {
        var u = oe, h = se, c = Math.abs(r - a);
        if (1e-4 > c % cv && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);
        if (dv[0] = hv(r) * n + t, dv[1] = uv(r) * i + e, fv[0] = hv(a) * n + t, fv[1] = uv(a) * i + e, u(s, dv, fv), h(l, dv, fv), r %= cv, 0 > r && (r += cv), a %= cv, 0 > a && (a += cv), r > a && !o ? a += cv : a > r && o && (r += cv), o) {
            var d = a;
            a = r, r = d
        }
        for (var f = 0; a > f; f += Math.PI / 2) f > r && (pv[0] = hv(f) * n + t, pv[1] = uv(f) * i + e, u(s, pv, s), h(l, pv, l))
    }

    function Mr(t, e, n, i, r, a, o) {
        if (0 === r) return !1;
        var s = r, l = 0, u = t;
        if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;
        if (t === n) return Math.abs(a - t) <= s / 2;
        l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
        var h = l * a - o + u, c = h * h / (l * l + 1);
        return s / 2 * s / 2 >= c
    }

    function Sr(t, e, n, i, r, a, o, s, l, u, h) {
        if (0 === l) return !1;
        var c = l;
        if (h > e + c && h > i + c && h > a + c && h > s + c || e - c > h && i - c > h && a - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > o + c || t - c > u && n - c > u && r - c > u && o - c > u) return !1;
        var d = cr(t, e, n, i, r, a, o, s, u, h, null);
        return c / 2 >= d
    }

    function Tr(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return !1;
        var u = o;
        if (l > e + u && l > i + u && l > a + u || e - u > l && i - u > l && a - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return !1;
        var h = mr(t, e, n, i, r, a, s, l, null);
        return u / 2 >= h
    }

    function Ir(t) {
        return t %= Dv, 0 > t && (t += Dv), t
    }

    function Cr(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return !1;
        var u = o;
        s -= t, l -= e;
        var h = Math.sqrt(s * s + l * l);
        if (h - u > n || n > h + u) return !1;
        if (Math.abs(i - r) % Pv < 1e-4) return !0;
        if (a) {
            var c = i;
            i = Ir(r), r = Ir(c)
        } else i = Ir(i), r = Ir(r);
        i > r && (r += Pv);
        var d = Math.atan2(l, s);
        return 0 > d && (d += Pv), d >= i && r >= d || d + Pv >= i && r >= d + Pv
    }

    function kr(t, e, n, i, r, a) {
        if (a > e && a > i || e > a && i > a) return 0;
        if (i === e) return 0;
        var o = e > i ? 1 : -1, s = (a - e) / (i - e);
        (1 === s || 0 === s) && (o = e > i ? .5 : -.5);
        var l = s * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? o : 0
    }

    function Ar(t, e) {
        return Math.abs(t - e) < Bv
    }

    function Dr() {
        var t = Rv[0];
        Rv[0] = Rv[1], Rv[1] = t
    }

    function Pr(t, e, n, i, r, a, o, s, l, u) {
        if (u > e && u > i && u > a && u > s || e > u && i > u && a > u && s > u) return 0;
        var h = lr(e, i, a, s, u, Ev);
        if (0 === h) return 0;
        for (var c, d, f = 0, p = -1, g = 0; h > g; g++) {
            var v = Ev[g], m = 0 === v || 1 === v ? .5 : 1, y = or(t, n, r, o, v);
            l > y || (0 > p && (p = ur(e, i, a, s, Rv), Rv[1] < Rv[0] && p > 1 && Dr(), c = or(e, i, a, s, Rv[0]), p > 1 && (d = or(e, i, a, s, Rv[1]))), f += 2 == p ? v < Rv[0] ? e > c ? m : -m : v < Rv[1] ? c > d ? m : -m : d > s ? m : -m : v < Rv[0] ? e > c ? m : -m : c > s ? m : -m)
        }
        return f
    }

    function Or(t, e, n, i, r, a, o, s) {
        if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;
        var l = pr(e, i, a, s, Ev);
        if (0 === l) return 0;
        var u = gr(e, i, a);
        if (u >= 0 && 1 >= u) {
            for (var h = 0, c = dr(e, i, a, u), d = 0; l > d; d++) {
                var f = 0 === Ev[d] || 1 === Ev[d] ? .5 : 1, p = dr(t, n, r, Ev[d]);
                o > p || (h += Ev[d] < u ? e > c ? f : -f : c > a ? f : -f)
            }
            return h
        }
        var f = 0 === Ev[0] || 1 === Ev[0] ? .5 : 1, p = dr(t, n, r, Ev[0]);
        return o > p ? 0 : e > a ? f : -f
    }

    function Lr(t, e, n, i, r, a, o, s) {
        if (s -= e, s > n || -n > s) return 0;
        var l = Math.sqrt(n * n - s * s);
        Ev[0] = -l, Ev[1] = l;
        var u = Math.abs(i - r);
        if (1e-4 > u) return 0;
        if (1e-4 > u % Lv) {
            i = 0, r = Lv;
            var h = a ? 1 : -1;
            return o >= Ev[0] + t && o <= Ev[1] + t ? h : 0
        }
        if (a) {
            var l = i;
            i = Ir(r), r = Ir(l)
        } else i = Ir(i), r = Ir(r);
        i > r && (r += Lv);
        for (var c = 0, d = 0; 2 > d; d++) {
            var f = Ev[d];
            if (f + t > o) {
                var p = Math.atan2(s, f), h = a ? 1 : -1;
                0 > p && (p = Lv + p), (p >= i && r >= p || p + Lv >= i && r >= p + Lv) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h)
            }
        }
        return c
    }

    function Br(t, e, n, i, r) {
        for (var a = 0, o = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
            var c = t[h++];
            switch (c === Ov.M && h > 1 && (n || (a += kr(o, s, l, u, i, r))), 1 == h && (o = t[h], s = t[h + 1], l = o, u = s), c) {
                case Ov.M:
                    l = t[h++], u = t[h++], o = l, s = u;
                    break;
                case Ov.L:
                    if (n) {
                        if (Mr(o, s, t[h], t[h + 1], e, i, r)) return !0
                    } else a += kr(o, s, t[h], t[h + 1], i, r) || 0;
                    o = t[h++], s = t[h++];
                    break;
                case Ov.C:
                    if (n) {
                        if (Sr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
                    } else a += Pr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
                    o = t[h++], s = t[h++];
                    break;
                case Ov.Q:
                    if (n) {
                        if (Tr(o, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
                    } else a += Or(o, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
                    o = t[h++], s = t[h++];
                    break;
                case Ov.A:
                    var d = t[h++], f = t[h++], p = t[h++], g = t[h++], v = t[h++], m = t[h++],
                        y = (t[h++], 1 - t[h++]), _ = Math.cos(v) * p + d, x = Math.sin(v) * g + f;
                    h > 1 ? a += kr(o, s, _, x, i, r) : (l = _, u = x);
                    var w = (i - d) * g / p + d;
                    if (n) {
                        if (Cr(d, f, g, v, v + m, y, e, w, r)) return !0
                    } else a += Lr(d, f, g, v, v + m, y, w, r);
                    o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
                    break;
                case Ov.R:
                    l = o = t[h++], u = s = t[h++];
                    var b = t[h++], M = t[h++], _ = l + b, x = u + M;
                    if (n) {
                        if (Mr(l, u, _, u, e, i, r) || Mr(_, u, _, x, e, i, r) || Mr(_, x, l, x, e, i, r) || Mr(l, x, l, u, e, i, r)) return !0
                    } else a += kr(_, u, _, x, i, r), a += kr(l, x, l, u, i, r);
                    break;
                case Ov.Z:
                    if (n) {
                        if (Mr(o, s, l, u, e, i, r)) return !0
                    } else a += kr(o, s, l, u, i, r);
                    o = l, s = u
            }
        }
        return n || Ar(s, u) || (a += kr(o, s, l, u, i, r) || 0), 0 !== a
    }

    function Er(t, e, n) {
        return Br(t, 0, !1, e, n)
    }

    function Rr(t, e, n, i) {
        return Br(t, e, !0, n, i)
    }

    function zr(t) {
        gi.call(this, t), this.path = null
    }

    function Fr(t, e, n, i, r, a, o, s, l, u, h) {
        var c = l * (qv / 180), d = Yv(c) * (t - n) / 2 + jv(c) * (e - i) / 2,
            f = -1 * jv(c) * (t - n) / 2 + Yv(c) * (e - i) / 2, p = d * d / (o * o) + f * f / (s * s);
        p > 1 && (o *= Zv(p), s *= Zv(p));
        var g = (r === a ? -1 : 1) * Zv((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
            v = g * o * f / s, m = g * -s * d / o, y = (t + n) / 2 + Yv(c) * v - jv(c) * m,
            _ = (e + i) / 2 + jv(c) * v + Yv(c) * m, x = Kv([1, 0], [(d - v) / o, (f - m) / s]),
            w = [(d - v) / o, (f - m) / s], b = [(-1 * d - v) / o, (-1 * f - m) / s], M = Kv(w, b);
        $v(w, b) <= -1 && (M = qv), $v(w, b) >= 1 && (M = 0), 0 === a && M > 0 && (M -= 2 * qv), 1 === a && 0 > M && (M += 2 * qv), h.addData(u, y, _, o, s, x, M, c, a)
    }

    function Nr(t) {
        if (!t) return new Av;
        for (var e, n = 0, i = 0, r = n, a = i, o = new Av, s = Av.CMD, l = t.match(Qv), u = 0; u < l.length; u++) {
            for (var h, c = l[u], d = c.charAt(0), f = c.match(Jv) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
            for (var v = 0; p > v;) {
                var m, y, _, x, w, b, M, S = n, T = i;
                switch (d) {
                    case"l":
                        n += f[v++], i += f[v++], h = s.L, o.addData(h, n, i);
                        break;
                    case"L":
                        n = f[v++], i = f[v++], h = s.L, o.addData(h, n, i);
                        break;
                    case"m":
                        n += f[v++], i += f[v++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "l";
                        break;
                    case"M":
                        n = f[v++], i = f[v++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "L";
                        break;
                    case"h":
                        n += f[v++], h = s.L, o.addData(h, n, i);
                        break;
                    case"H":
                        n = f[v++], h = s.L, o.addData(h, n, i);
                        break;
                    case"v":
                        i += f[v++], h = s.L, o.addData(h, n, i);
                        break;
                    case"V":
                        i = f[v++], h = s.L, o.addData(h, n, i);
                        break;
                    case"C":
                        h = s.C, o.addData(h, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), n = f[v - 2], i = f[v - 1];
                        break;
                    case"c":
                        h = s.C, o.addData(h, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i), n += f[v - 2], i += f[v - 1];
                        break;
                    case"S":
                        m = n, y = i;
                        var I = o.len(), C = o.data;
                        e === s.C && (m += n - C[I - 4], y += i - C[I - 3]), h = s.C, S = f[v++], T = f[v++], n = f[v++], i = f[v++], o.addData(h, m, y, S, T, n, i);
                        break;
                    case"s":
                        m = n, y = i;
                        var I = o.len(), C = o.data;
                        e === s.C && (m += n - C[I - 4], y += i - C[I - 3]), h = s.C, S = n + f[v++], T = i + f[v++], n += f[v++], i += f[v++], o.addData(h, m, y, S, T, n, i);
                        break;
                    case"Q":
                        S = f[v++], T = f[v++], n = f[v++], i = f[v++], h = s.Q, o.addData(h, S, T, n, i);
                        break;
                    case"q":
                        S = f[v++] + n, T = f[v++] + i, n += f[v++], i += f[v++], h = s.Q, o.addData(h, S, T, n, i);
                        break;
                    case"T":
                        m = n, y = i;
                        var I = o.len(), C = o.data;
                        e === s.Q && (m += n - C[I - 4], y += i - C[I - 3]), n = f[v++], i = f[v++], h = s.Q, o.addData(h, m, y, n, i);
                        break;
                    case"t":
                        m = n, y = i;
                        var I = o.len(), C = o.data;
                        e === s.Q && (m += n - C[I - 4], y += i - C[I - 3]), n += f[v++], i += f[v++], h = s.Q, o.addData(h, m, y, n, i);
                        break;
                    case"A":
                        _ = f[v++], x = f[v++], w = f[v++], b = f[v++], M = f[v++], S = n, T = i, n = f[v++], i = f[v++], h = s.A, Fr(S, T, n, i, b, M, _, x, w, h, o);
                        break;
                    case"a":
                        _ = f[v++], x = f[v++], w = f[v++], b = f[v++], M = f[v++], S = n, T = i, n += f[v++], i += f[v++], h = s.A, Fr(S, T, n, i, b, M, _, x, w, h, o)
                }
            }
            ("z" === d || "Z" === d) && (h = s.Z, o.addData(h), n = r, i = a), e = h
        }
        return o.toStatic(), o
    }

    function Vr(t, e) {
        var n = Nr(t);
        return e = e || {}, e.buildPath = function (t) {
            if (t.setData) {
                t.setData(n.data);
                var e = t.getContext();
                e && t.rebuildPath(e)
            } else {
                var e = t;
                n.rebuildPath(e)
            }
        }, e.applyTransform = function (t) {
            Xv(n, t), this.dirty(!0)
        }, e
    }

    function Wr(t, e) {
        return new zr(Vr(t, e))
    }

    function Hr(t, e) {
        return zr.extend(Vr(t, e))
    }

    function Gr(t, e) {
        for (var n = [], i = t.length, r = 0; i > r; r++) {
            var a = t[r];
            a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path)
        }
        var o = new zr(e);
        return o.createPathProxy(), o.buildPath = function (t) {
            t.appendPath(n);
            var e = t.getContext();
            e && t.rebuildPath(e)
        }, o
    }

    function Xr(t, e, n, i, r, a, o) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
    }

    function Zr(t, e, n) {
        var i = e.points, r = e.smooth;
        if (i && i.length >= 2) {
            if (r && "spline" !== r) {
                var a = sm(i, r, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var o = i.length, s = 0; (n ? o : o - 1) > s; s++) {
                    var l = a[2 * s], u = a[2 * s + 1], h = i[(s + 1) % o];
                    t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
                }
            } else {
                "spline" === r && (i = om(i, n)), t.moveTo(i[0][0], i[0][1]);
                for (var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1])
            }
            n && t.closePath()
        }
    }

    function jr(t, e, n) {
        var i = t.cpx2, r = t.cpy2;
        return null === i || null === r ? [(n ? sr : or)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? sr : or)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? fr : dr)(t.x1, t.cpx1, t.x2, e), (n ? fr : dr)(t.y1, t.cpy1, t.y2, e)]
    }

    function Yr(t) {
        gi.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
    }

    function qr(t) {
        return zr.extend(t)
    }

    function Ur(t, e) {
        return Hr(t, e)
    }

    function $r(t, e, n, i) {
        var r = Wr(t, e);
        return n && ("center" === i && (n = Qr(n, r.getBoundingRect())), Jr(r, n)), r
    }

    function Kr(t, e, n) {
        var i = new vi({
            style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height}, onload: function (t) {
                if ("center" === n) {
                    var r = {width: t.width, height: t.height};
                    i.setStyle(Qr(e, r))
                }
            }
        });
        return i
    }

    function Qr(t, e) {
        var n, i = e.width / e.height, r = t.height * i;
        r <= t.width ? n = t.height : (r = t.width, n = r / i);
        var a = t.x + t.width / 2, o = t.y + t.height / 2;
        return {x: a - r / 2, y: o - n / 2, width: r, height: n}
    }

    function Jr(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect(), i = n.calculateTransform(e);
            t.applyTransform(i)
        }
    }

    function ta(t) {
        var e = t.shape, n = t.style.lineWidth;
        return xm(2 * e.x1) === xm(2 * e.x2) && (e.x1 = e.x2 = na(e.x1, n, !0)), xm(2 * e.y1) === xm(2 * e.y2) && (e.y1 = e.y2 = na(e.y1, n, !0)), t
    }

    function ea(t) {
        var e = t.shape, n = t.style.lineWidth, i = e.x, r = e.y, a = e.width, o = e.height;
        return e.x = na(e.x, n, !0), e.y = na(e.y, n, !0), e.width = Math.max(na(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(na(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t
    }

    function na(t, e, n) {
        var i = xm(2 * t);
        return (i + xm(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function ia(t) {
        return null != t && "none" !== t
    }

    function ra(t) {
        if ("string" != typeof t) return t;
        var e = Tm.get(t);
        return e || (e = Ze(t, -.1), 1e4 > Im && (Tm.set(t, e), Im++)), e
    }

    function aa(t) {
        if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;
            var e = t.__hoverStl;
            if (!e) return void (t.__normalStl = null);
            var n = t.__normalStl = {}, i = t.style;
            for (var r in e) null != e[r] && (n[r] = i[r]);
            n.fill = i.fill, n.stroke = i.stroke
        }
    }

    function oa(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
            var n = t.useHoverLayer;
            t.__highlighted = n ? "layer" : "plain";
            var i = t.__zr;
            if (i || !n) {
                var r = t, a = t.style;
                n && (r = i.addHover(t), a = r.style), Ca(a), n || aa(r), a.extendFrom(e), sa(a, e, "fill"), sa(a, e, "stroke"), Ia(a), n || (t.dirty(!1), t.z2 += 1)
            }
        }
    }

    function sa(t, e, n) {
        !ia(e[n]) && ia(t[n]) && (t[n] = ra(t[n]))
    }

    function la(t) {
        t.__highlighted && (ua(t), t.__highlighted = !1)
    }

    function ua(t) {
        var e = t.__highlighted;
        if ("layer" === e) t.__zr && t.__zr.removeHover(t); else if (e) {
            var n = t.style, i = t.__normalStl;
            i && (Ca(n), t.setStyle(i), Ia(n), t.z2 -= 1)
        }
    }

    function ha(t, e) {
        t.isGroup ? t.traverse(function (t) {
            !t.isGroup && e(t)
        }) : e(t)
    }

    function ca(t, e) {
        e = t.__hoverStl = e !== !1 && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (la(t), oa(t))
    }

    function da(t) {
        return t && t.__isEmphasisEntered
    }

    function fa(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && ha(this, oa)
    }

    function pa(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && ha(this, la)
    }

    function ga() {
        this.__isEmphasisEntered = !0, ha(this, oa)
    }

    function va() {
        this.__isEmphasisEntered = !1, ha(this, la)
    }

    function ma(t, e, n) {
        t.isGroup ? t.traverse(function (t) {
            !t.isGroup && ca(t, t.hoverStyle || e)
        }) : ca(t, t.hoverStyle || e), ya(t, n)
    }

    function ya(t, e) {
        var n = e === !1;
        if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
            var i = n ? "off" : "on";
            t[i]("mouseover", fa)[i]("mouseout", pa), t[i]("emphasis", ga)[i]("normal", va), t.__hoverStyleTrigger = !n
        }
    }

    function _a(t, e, n, i, r, a, o) {
        r = r || Mm;
        var s, l = r.labelFetcher, u = r.labelDataIndex, h = r.labelDimIndex, c = n.getShallow("show"),
            d = i.getShallow("show");
        (c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = w(r.defaultText) ? r.defaultText(u, r) : r.defaultText));
        var f = c ? s : null, p = d ? A(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;
        (null != f || null != p) && (xa(t, n, a, r), xa(e, i, o, r, !0)), t.text = f, e.text = p
    }

    function xa(t, e, n, i, r) {
        return ba(t, e, i, r), n && o(t, n), t
    }

    function wa(t, e, n) {
        var i, r = {isRectText: !0};
        n === !1 ? i = !0 : r.autoColor = n, ba(t, e, r, i)
    }

    function ba(t, e, n, i) {
        if (n = n || Mm, n.isRectText) {
            var r = e.getShallow("position") || (i ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = A(e.getShallow("distance"), i ? null : 5)
        }
        var o, s = e.ecModel, l = s && s.option.textStyle, u = Ma(e);
        if (u) {
            o = {};
            for (var h in u) if (u.hasOwnProperty(h)) {
                var c = e.getModel(["rich", h]);
                Sa(o[h] = {}, c, l, n, i)
            }
        }
        return t.rich = o, Sa(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
    }

    function Ma(t) {
        for (var e; t && t !== t.ecModel;) {
            var n = (t.option || Mm).rich;
            if (n) {
                e = e || {};
                for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
            }
            t = t.parentModel
        }
        return e
    }

    function Sa(t, e, n, i, r, a) {
        n = !r && n || Mm, t.textFill = Ta(e.getShallow("color"), i) || n.color, t.textStroke = Ta(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = A(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (a && (t.insideRollbackOpt = i, Ia(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Ta(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Ta(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
    }

    function Ta(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }

    function Ia(t) {
        var e = t.insideRollbackOpt;
        if (e && null == t.textFill) {
            var n, i = e.useInsideStyle, r = t.insideRawTextPosition, a = e.autoColor;
            i !== !1 && (i === !0 || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = {
                textFill: null,
                textStroke: t.textStroke,
                textStrokeWidth: t.textStrokeWidth
            }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (n = {textFill: null}, t.textFill = a), n && (t.insideRollback = n)
        }
    }

    function Ca(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
    }

    function ka(t, e) {
        var n = e || e.getModel("textStyle");
        return B([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
    }

    function Aa(t, e, n, i, r, a) {
        "function" == typeof r && (a = r, r = null);
        var o = i && i.isAnimationEnabled();
        if (o) {
            var s = t ? "Update" : "", l = i.getShallow("animationDuration" + s),
                u = i.getShallow("animationEasing" + s), h = i.getShallow("animationDelay" + s);
            "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, h || 0, u, a, !!a) : (e.stopAnimation(), e.attr(n), a && a())
        } else e.stopAnimation(), e.attr(n), a && a()
    }

    function Da(t, e, n, i, r) {
        Aa(!0, t, e, n, i, r)
    }

    function Pa(t, e, n, i, r) {
        Aa(!1, t, e, n, i, r)
    }

    function Oa(t, e) {
        for (var n = be([]); t && t !== e;) Se(n, t.getLocalTransform(), n), t = t.parent;
        return n
    }

    function La(t, e, n) {
        return e && !d(e) && (e = pp.getLocalTransform(e)), n && (e = ke([], e)), ae([], t, e)
    }

    function Ba(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return a = La(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
    }

    function Ea(t, e, n) {
        function i(t) {
            var e = {};
            return t.traverse(function (t) {
                !t.isGroup && t.anid && (e[t.anid] = t)
            }), e
        }

        function r(t) {
            var e = {position: G(t.position), rotation: t.rotation};
            return t.shape && (e.shape = o({}, t.shape)), e
        }

        if (t && e) {
            var a = i(t);
            e.traverse(function (t) {
                if (!t.isGroup && t.anid) {
                    var e = a[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)), Da(t, i, n, t.dataIndex)
                    }
                }
            })
        }
    }

    function Ra(t, e) {
        return p(t, function (t) {
            var n = t[0];
            n = wm(n, e.x), n = bm(n, e.x + e.width);
            var i = t[1];
            return i = wm(i, e.y), i = bm(i, e.y + e.height), [n, i]
        })
    }

    function za(t, e) {
        var n = wm(t.x, e.x), i = bm(t.x + t.width, e.x + e.width), r = wm(t.y, e.y),
            a = bm(t.y + t.height, e.y + e.height);
        return i >= n && a >= r ? {x: n, y: r, width: i - n, height: a - r} : void 0
    }

    function Fa(t, e, n) {
        e = o({rectHover: !0}, e);
        var i = e.style = {strokeNoScale: !0};
        return n = n || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new vi(e)) : $r(t.replace("path://", ""), e, n, "center") : void 0
    }

    function Na(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t
    }

    function Va(t, e, n) {
        for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++) ;
        return null == t && n && (t = n.get(e)), t
    }

    function Wa(t, e) {
        var n = Lm(t).getParent;
        return n ? n.call(t, e) : t.parentModel
    }

    function Ha(t) {
        return [t || "", Bm++, Math.random().toFixed(5)].join("_")
    }

    function Ga(t) {
        var e = {};
        return t.registerSubTypeDefaulter = function (t, n) {
            t = Ki(t), e[t.main] = n
        }, t.determineSubType = function (n, i) {
            var r = i.type;
            if (!r) {
                var a = Ki(n).main;
                t.hasSubTypes(n) && e[a] && (r = e[a](i))
            }
            return r
        }, t
    }

    function Xa(t, e) {
        function n(t) {
            var n = {}, a = [];
            return f(t, function (o) {
                var s = i(n, o), l = s.originalDeps = e(o), h = r(l, t);
                s.entryCount = h.length, 0 === s.entryCount && a.push(o), f(h, function (t) {
                    u(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = i(n, t);
                    u(e.successor, t) < 0 && e.successor.push(o)
                })
            }), {graph: n, noEntryList: a}
        }

        function i(t, e) {
            return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
        }

        function r(t, e) {
            var n = [];
            return f(t, function (t) {
                u(e, t) >= 0 && n.push(t)
            }), n
        }

        t.topologicalTravel = function (t, e, i, r) {
            function a(t) {
                l[t].entryCount--, 0 === l[t].entryCount && u.push(t)
            }

            function o(t) {
                h[t] = !0, a(t)
            }

            if (t.length) {
                var s = n(e), l = s.graph, u = s.noEntryList, h = {};
                for (f(t, function (t) {
                    h[t] = !0
                }); u.length;) {
                    var c = u.pop(), d = l[c], p = !!h[c];
                    p && (i.call(r, c, d.originalDeps.slice()), delete h[c]), f(d.successor, p ? o : a)
                }
                f(h, function () {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }

    function Za(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function ja(t, e, n, i) {
        var r = e[1] - e[0], a = n[1] - n[0];
        if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
        if (i) if (r > 0) {
            if (t <= e[0]) return n[0];
            if (t >= e[1]) return n[1]
        } else {
            if (t >= e[0]) return n[0];
            if (t <= e[1]) return n[1]
        } else {
            if (t === e[0]) return n[0];
            if (t === e[1]) return n[1]
        }
        return (t - e[0]) / r * a + n[0]
    }

    function Ya(t, e) {
        switch (t) {
            case"center":
            case"middle":
                t = "50%";
                break;
            case"left":
            case"top":
                t = "0%";
                break;
            case"right":
            case"bottom":
                t = "100%"
        }
        return "string" == typeof t ? Za(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
    }

    function qa(t, e, n) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
    }

    function Ua(t) {
        return t.sort(function (t, e) {
            return t - e
        }), t
    }

    function $a(t) {
        if (t = +t, isNaN(t)) return 0;
        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
        return n
    }

    function Ka(t) {
        var e = t.toString(), n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return 0 > i ? -i : 0
        }
        var r = e.indexOf(".");
        return 0 > r ? 0 : e.length - 1 - r
    }

    function Qa(t, e) {
        var n = Math.log, i = Math.LN10, r = Math.floor(n(t[1] - t[0]) / i),
            a = Math.round(n(Math.abs(e[1] - e[0])) / i), o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20
    }

    function Ja(t, e, n) {
        if (!t[e]) return 0;
        var i = g(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), a = p(t, function (t) {
            return (isNaN(t) ? 0 : t) / i * r * 100
        }), o = 100 * r, s = p(a, function (t) {
            return Math.floor(t)
        }), l = g(s, function (t, e) {
            return t + e
        }, 0), u = p(a, function (t, e) {
            return t - s[e]
        }); o > l;) {
            for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; f > d; ++d) u[d] > h && (h = u[d], c = d);
            ++s[c], u[c] = 0, ++l
        }
        return s[e] / r
    }

    function to(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function eo(t) {
        return t > -Em && Em > t
    }

    function no(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = zm.exec(t);
            if (!e) return new Date(0 / 0);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
        }
        return new Date(null == t ? 0 / 0 : Math.round(t))
    }

    function io(t) {
        return Math.pow(10, ro(t))
    }

    function ro(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }

    function ao(t, e) {
        var n, i = ro(t), r = Math.pow(10, i), a = t / r;
        return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
    }

    function oo(t, e) {
        var n = (t.length - 1) * e + 1, i = Math.floor(n), r = +t[i - 1], a = n - i;
        return a ? r + a * (t[i] - r) : r
    }

    function so(t) {
        function e(t, n, i) {
            return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1))
        }

        t.sort(function (t, n) {
            return e(t, n, 0) ? -1 : 1
        });
        for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
            for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];
            a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++
        }
        return t
    }

    function lo(t) {
        return t - parseFloat(t) >= 0
    }

    function uo(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
    }

    function ho(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
            return e.toUpperCase()
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
    }

    function co(t) {
        return null == t ? "" : (t + "").replace(Vm, function (t, e) {
            return Wm[e]
        })
    }

    function fo(t, e, n) {
        x(e) || (e = [e]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
            var o = Hm[a];
            t = t.replace(Gm(o), Gm(o, 0))
        }
        for (var s = 0; i > s; s++) for (var l = 0; l < r.length; l++) {
            var u = e[s][r[l]];
            t = t.replace(Gm(Hm[l], s), n ? co(u) : u)
        }
        return t
    }

    function po(t, e, n) {
        return f(e, function (e, i) {
            t = t.replace("{" + i + "}", n ? co(e) : e)
        }), t
    }

    function go(t, e) {
        t = b(t) ? {color: t, extraCssText: e} : t || {};
        var n = t.color, i = t.type, e = t.extraCssText, r = t.renderMode || "html", a = t.markerId || "X";
        return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + co(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + co(n) + ";" + (e || "") + '"></span>' : {
            renderMode: r,
            content: "{marker" + a + "|}  ",
            style: {color: n}
        } : ""
    }

    function vo(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t
    }

    function mo(t, e, n) {
        ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var i = no(e), r = n ? "UTC" : "", a = i["get" + r + "FullYear"](), o = i["get" + r + "Month"]() + 1,
            s = i["get" + r + "Date"](), l = i["get" + r + "Hours"](), u = i["get" + r + "Minutes"](),
            h = i["get" + r + "Seconds"](), c = i["get" + r + "Milliseconds"]();
        return t = t.replace("MM", vo(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", vo(s, 2)).replace("d", s).replace("hh", vo(l, 2)).replace("h", l).replace("mm", vo(u, 2)).replace("m", u).replace("ss", vo(h, 2)).replace("s", h).replace("SSS", vo(c, 3))
    }

    function yo(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    function _o(t, e, n, i, r) {
        var a = 0, o = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, u) {
            var h, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(u + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var v = f.width + (g ? -g.x + f.x : 0);
                h = a + v, h > i || l.newline ? (a = 0, h = v, o += s + n, s = f.height) : s = Math.max(s, f.height)
            } else {
                var m = f.height + (g ? -g.y + f.y : 0);
                c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width)
            }
            l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + n : o = c + n)
        })
    }

    function xo(t, e, n) {
        n = Nm(n || 0);
        var i = e.width, r = e.height, a = Ya(t.left, i), o = Ya(t.top, r), s = Ya(t.right, i), l = Ya(t.bottom, r),
            u = Ya(t.width, i), h = Ya(t.height, r), c = n[2] + n[0], d = n[1] + n[3], f = t.aspect;
        switch (isNaN(u) && (u = i - s - d - a), isNaN(h) && (h = r - l - c - o), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(a) && (a = i - s - u - d), isNaN(o) && (o = r - l - h - c), t.left || t.right) {
            case"center":
                a = i / 2 - u / 2 - n[3];
                break;
            case"right":
                a = i - u - d
        }
        switch (t.top || t.bottom) {
            case"middle":
            case"center":
                o = r / 2 - h / 2 - n[0];
                break;
            case"bottom":
                o = r - h - c
        }
        a = a || 0, o = o || 0, isNaN(u) && (u = i - d - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));
        var p = new gn(a + n[3], o + n[0], u, h);
        return p.margin = n, p
    }

    function wo(t, e, n, i, r) {
        var a = !r || !r.hv || r.hv[0], o = !r || !r.hv || r.hv[1], l = r && r.boundingMode || "all";
        if (a || o) {
            var u;
            if ("raw" === l) u = "group" === t.type ? new gn(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect(); else if (u = t.getBoundingRect(), t.needLocalTransform()) {
                var h = t.getLocalTransform();
                u = u.clone(), u.applyTransform(h)
            }
            e = xo(s({width: u.width, height: u.height}, e), n, i);
            var c = t.position, d = a ? e.x - u.x : 0, f = o ? e.y - u.y : 0;
            t.attr("position", "raw" === l ? [d, f] : [c[0] + d, c[1] + f])
        }
    }

    function bo(t, e, n) {
        function i(n, i) {
            var o = {}, l = 0, u = {}, h = 0, c = 2;
            if (Ym(n, function (e) {
                u[e] = t[e]
            }), Ym(n, function (t) {
                r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++
            }), s[i]) return a(e, n[1]) ? u[n[2]] = null : a(e, n[2]) && (u[n[1]] = null), u;
            if (h !== c && l) {
                if (l >= c) return o;
                for (var d = 0; d < n.length; d++) {
                    var f = n[d];
                    if (!r(o, f) && r(t, f)) {
                        o[f] = t[f];
                        break
                    }
                }
                return o
            }
            return u
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        function a(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function o(t, e, n) {
            Ym(t, function (t) {
                e[t] = n[t]
            })
        }

        !M(n) && (n = {});
        var s = n.ignoreSize;
        !x(s) && (s = [s, s]);
        var l = i(Um[0], 0), u = i(Um[1], 1);
        o(Um[0], t, l), o(Um[1], t, u)
    }

    function Mo(t) {
        return So({}, t)
    }

    function So(t, e) {
        return e && t && Ym(qm, function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t
    }

    function To(t) {
        var e = [];
        return f(Jm.getClassesByMainType(t), function (t) {
            e = e.concat(t.prototype.dependencies || [])
        }), e = p(e, function (t) {
            return Ki(t).main
        }), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e
    }

    function Io(t, e) {
        for (var n = t.length, i = 0; n > i; i++) if (t[i].length > e) return t[i];
        return t[n - 1]
    }

    function Co(t) {
        var e = t.get("coordinateSystem"), n = {coordSysName: e, coordSysDims: [], axisMap: F(), categoryAxisMap: F()},
            i = ry[e];
        return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
    }

    function ko(t) {
        return "category" === t.get("type")
    }

    function Ao(t) {
        this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === ly ? {} : []), this.sourceFormat = t.sourceFormat || uy, this.seriesLayoutBy = t.seriesLayoutBy || cy, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && F(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
    }

    function Do(t) {
        var e = t.option.source, n = uy;
        if (T(e)) n = hy; else if (x(e)) {
            0 === e.length && (n = oy);
            for (var i = 0, r = e.length; r > i; i++) {
                var a = e[i];
                if (null != a) {
                    if (x(a)) {
                        n = oy;
                        break
                    }
                    if (M(a)) {
                        n = sy;
                        break
                    }
                }
            }
        } else if (M(e)) {
            for (var o in e) if (e.hasOwnProperty(o) && d(e[o])) {
                n = ly;
                break
            }
        } else if (null != e) throw new Error("Invalid data");
        fy(t).sourceFormat = n
    }

    function Po(t) {
        return fy(t).source
    }

    function Oo(t) {
        fy(t).datasetMap = F()
    }

    function Lo(t) {
        var e = t.option, n = e.data, i = T(n) ? hy : ay, r = !1, a = e.seriesLayoutBy, o = e.sourceHeader,
            s = e.dimensions, l = No(t);
        if (l) {
            var u = l.option;
            n = u.source, i = fy(l).sourceFormat, r = !0, a = a || u.seriesLayoutBy, null == o && (o = u.sourceHeader), s = s || u.dimensions
        }
        var h = Bo(n, i, a, o, s), c = e.encode;
        !c && l && (c = Fo(t, l, n, i, a, h)), fy(t).source = new Ao({
            data: n,
            fromDataset: r,
            seriesLayoutBy: a,
            sourceFormat: i,
            dimensionsDefine: h.dimensionsDefine,
            startIndex: h.startIndex,
            dimensionsDetectCount: h.dimensionsDetectCount,
            encodeDefine: c
        })
    }

    function Bo(t, e, n, i, r) {
        if (!t) return {dimensionsDefine: Eo(r)};
        var a, o, s;
        if (e === oy) "auto" === i || null == i ? Ro(function (t) {
            null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0)
        }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], Ro(function (t, e) {
            r[e] = null != t ? t : ""
        }, n, t)), a = r ? r.length : n === dy ? t.length : t[0] ? t[0].length : null; else if (e === sy) r || (r = zo(t), s = !0); else if (e === ly) r || (r = [], s = !0, f(t, function (t, e) {
            r.push(e)
        })); else if (e === ay) {
            var l = Fi(t[0]);
            a = x(l) && l.length || 1
        }
        var u;
        return s && f(r, function (t, e) {
            "name" === (M(t) ? t.name : t) && (u = e)
        }), {startIndex: o, dimensionsDefine: Eo(r), dimensionsDetectCount: a, potentialNameDimIndex: u}
    }

    function Eo(t) {
        if (t) {
            var e = F();
            return p(t, function (t) {
                if (t = o({}, M(t) ? t : {name: t}), null == t.name) return t;
                t.name += "", null == t.displayName && (t.displayName = t.name);
                var n = e.get(t.name);
                return n ? t.name += "-" + n.count++ : e.set(t.name, {count: 1}), t
            })
        }
    }

    function Ro(t, e, n, i) {
        if (null == i && (i = 1 / 0), e === dy) for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r); else for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) t(a[r], r)
    }

    function zo(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]);) ;
        if (e) {
            var i = [];
            return f(e, function (t, e) {
                i.push(e)
            }), i
        }
    }

    function Fo(t, e, n, i, r, a) {
        var o = Co(t), s = {}, l = [], u = [], h = t.subType, c = F(["pie", "map", "funnel"]),
            d = F(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
        if (o && null != d.get(h)) {
            var p = t.ecModel, g = fy(p).datasetMap, v = e.uid + "_" + r,
                m = g.get(v) || g.set(v, {categoryWayDim: 1, valueWayDim: 0});
            f(o.coordSysDims, function (t) {
                if (null == o.firstCategoryDimIndex) {
                    var e = m.valueWayDim++;
                    s[t] = e, u.push(e)
                } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0); else {
                    var e = m.categoryWayDim++;
                    s[t] = e, u.push(e)
                }
            })
        } else if (null != c.get(h)) {
            for (var y, _ = 0; 5 > _ && null == y; _++) Wo(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
            if (null != y) {
                s.value = y;
                var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
                u.push(x), l.push(x)
            }
        }
        return l.length && (s.itemName = l), u.length && (s.seriesName = u), s
    }

    function No(t) {
        var e = t.option, n = e.data;
        return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
    }

    function Vo(t, e) {
        return Wo(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }

    function Wo(t, e, n, i, r, a) {
        function o(t) {
            return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0
        }

        var s, l = 5;
        if (T(t)) return !1;
        var u;
        if (i && (u = i[a], u = M(u) ? u.name : u), e === oy) if (n === dy) {
            for (var h = t[a], c = 0; c < (h || []).length && l > c; c++) if (null != (s = o(h[r + c]))) return s
        } else for (var c = 0; c < t.length && l > c; c++) {
            var d = t[r + c];
            if (d && null != (s = o(d[a]))) return s
        } else if (e === sy) {
            if (!u) return;
            for (var c = 0; c < t.length && l > c; c++) {
                var f = t[c];
                if (f && null != (s = o(f[u]))) return s
            }
        } else if (e === ly) {
            if (!u) return;
            var h = t[u];
            if (!h || T(h)) return !1;
            for (var c = 0; c < h.length && l > c; c++) if (null != (s = o(h[c]))) return s
        } else if (e === ay) for (var c = 0; c < t.length && l > c; c++) {
            var f = t[c], p = Fi(f);
            if (!x(p)) return !1;
            if (null != (s = o(p[a]))) return s
        }
        return !1
    }

    function Ho(t, e) {
        if (e) {
            var n = e.seiresIndex, i = e.seriesId, r = e.seriesName;
            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
        }
    }

    function Go(t, e) {
        var n = t.color && !t.colorLayer;
        f(e, function (e, a) {
            "colorLayer" === a && n || Jm.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e))
        })
    }

    function Xo(t) {
        t = t, this.option = {}, this.option[py] = 1, this._componentsMap = F({series: []}), this._seriesIndices, this._seriesIndicesMap, Go(t, this._theme.option), r(t, ey, !1), this.mergeOption(t)
    }

    function Zo(t, e) {
        x(e) || (e = e ? [e] : []);
        var n = {};
        return f(e, function (e) {
            n[e] = (t.get(e) || []).slice()
        }), n
    }

    function jo(t, e, n) {
        var i = e.type ? e.type : n ? n.subType : Jm.determineSubType(t, e);
        return i
    }

    function Yo(t, e) {
        t._seriesIndicesMap = F(t._seriesIndices = p(e, function (t) {
            return t.componentIndex
        }) || [])
    }

    function qo(t, e) {
        return e.hasOwnProperty("subType") ? v(t, function (t) {
            return t.subType === e.subType
        }) : t
    }

    function Uo(t) {
        f(vy, function (e) {
            this[e] = y(t[e], t)
        }, this)
    }

    function $o() {
        this._coordinateSystems = []
    }

    function Ko(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
    }

    function Qo(t, e, n) {
        var i, r, a = [], o = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            yy(l, function (t) {
                t && t.option && (t.query ? o.push(t) : i || (i = t))
            })
        }
        return r || (r = t), r.timeline || (r.timeline = s), yy([r].concat(a).concat(p(o, function (t) {
            return t.option
        })), function (t) {
            yy(e, function (e) {
                e(t, n)
            })
        }), {baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o}
    }

    function Jo(t, e, n) {
        var i = {width: e, height: n, aspectratio: e / n}, r = !0;
        return f(t, function (t, e) {
            var n = e.match(by);
            if (n && n[1] && n[2]) {
                var a = n[1], o = n[2].toLowerCase();
                ts(i[o], t, a) || (r = !1)
            }
        }), r
    }

    function ts(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? e >= t : t === e
    }

    function es(t, e) {
        return t.join(",") === e.join(",")
    }

    function ns(t, e) {
        e = e || {}, yy(e, function (e, n) {
            if (null != e) {
                var i = t[n];
                if (Jm.hasClass(n)) {
                    e = Ri(e), i = Ri(i);
                    var r = Vi(i, e);
                    t[n] = xy(r, function (t) {
                        return t.option && t.exist ? wy(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[n] = wy(i, e, !0)
            }
        })
    }

    function is(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0, i = Ty.length; i > n; n++) {
            var a = Ty[n], o = e.normal, s = e.emphasis;
            o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
        }
    }

    function rs(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal, r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
        }
    }

    function as(t) {
        rs(t, "itemStyle"), rs(t, "lineStyle"), rs(t, "areaStyle"), rs(t, "label"), rs(t, "labelLine"), rs(t, "upperLabel"), rs(t, "edgeLabel")
    }

    function os(t, e) {
        var n = Sy(t) && t[e], i = Sy(n) && n.textStyle;
        if (i) for (var r = 0, a = Hg.length; a > r; r++) {
            var e = Hg[r];
            i.hasOwnProperty(e) && (n[e] = i[e])
        }
    }

    function ss(t) {
        t && (as(t), os(t, "label"), t.emphasis && os(t.emphasis, "label"))
    }

    function ls(t) {
        if (Sy(t)) {
            is(t), as(t), os(t, "label"), os(t, "upperLabel"), os(t, "edgeLabel"), t.emphasis && (os(t.emphasis, "label"), os(t.emphasis, "upperLabel"), os(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (is(e), ss(e));
            var n = t.markLine;
            n && (is(n), ss(n));
            var i = t.markArea;
            i && ss(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var a = t.links || t.edges;
                if (a && !T(a)) for (var o = 0; o < a.length; o++) ss(a[o]);
                f(t.categories, function (t) {
                    as(t)
                })
            }
            if (r && !T(r)) for (var o = 0; o < r.length; o++) ss(r[o]);
            var e = t.markPoint;
            if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) ss(s[o]);
            var n = t.markLine;
            if (n && n.data) for (var l = n.data, o = 0; o < l.length; o++) x(l[o]) ? (ss(l[o][0]), ss(l[o][1])) : ss(l[o]);
            "gauge" === t.type ? (os(t, "axisLabel"), os(t, "title"), os(t, "detail")) : "treemap" === t.type ? (rs(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
                as(t)
            })) : "tree" === t.type && as(t.leaves)
        }
    }

    function us(t) {
        return x(t) ? t : t ? [t] : []
    }

    function hs(t) {
        return (x(t) ? t[0] : t) || {}
    }

    function cs(t, e) {
        e = e.split(",");
        for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++) ;
        return n
    }

    function ds(t, e, n, i) {
        e = e.split(",");
        for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
        (i || null == a[e[o]]) && (a[e[o]] = n)
    }

    function fs(t) {
        f(Cy, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }

    function ps(t) {
        f(t, function (e, n) {
            var i = [], r = [0 / 0, 0 / 0], a = [e.stackResultDimension, e.stackedOverDimension], o = e.data,
                s = e.isStackedByIndex, l = o.map(a, function (a, l, u) {
                    var h = o.get(e.stackedDimension, u);
                    if (isNaN(h)) return r;
                    var c, d;
                    s ? d = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);
                    for (var f = 0 / 0, p = n - 1; p >= 0; p--) {
                        var g = t[p];
                        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
                            var v = g.data.getByRawIndex(g.stackResultDimension, d);
                            if (h >= 0 && v > 0 || 0 >= h && 0 > v) {
                                h += v, f = v;
                                break
                            }
                        }
                    }
                    return i[0] = h, i[1] = f, i
                });
            o.hostModel.setData(l), e.data = l
        })
    }

    function gs(t, e) {
        Ao.isInstance(t) || (t = Ao.seriesDataToSource(t)), this._source = t;
        var n = this._data = t.data, i = t.sourceFormat;
        i === hy && (this._offset = 0, this._dimSize = e, this._data = n);
        var r = Oy[i === oy ? i + "_" + t.seriesLayoutBy : i];
        o(this, r)
    }

    function vs() {
        return this._data.length
    }

    function ms(t) {
        return this._data[t]
    }

    function ys(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e])
    }

    function _s(t, e, n) {
        return null != n ? t[n] : t
    }

    function xs(t, e, n, i) {
        return ws(t[i], this._dimensionInfos[e])
    }

    function ws(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +no(t)), null == t || "" === t ? 0 / 0 : +t
    }

    function bs(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r, a, o = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(n);
                return s && (r = s.name, a = s.index), Ly[o](i, e, a, r)
            }
        }
    }

    function Ms(t, e, n) {
        if (t) {
            var i = t.getProvider().getSource().sourceFormat;
            if (i === ay || i === sy) {
                var r = t.getRawDataItem(e);
                return i !== ay || M(r) || (r = null), r ? r[n] : void 0
            }
        }
    }

    function Ss(t) {
        return new Ts(t)
    }

    function Ts(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
    }

    function Is(t, e, n, i, r, a) {
        Fy.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({
            start: n,
            end: i,
            count: i - n,
            next: Fy.next
        }, t.context)
    }

    function Cs(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
        var n, i;
        !e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), x(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
        var r = t._downstream;
        return r && r.dirty(), i
    }

    function ks(t) {
        var e = t.name;
        Hi(t) || (t.name = As(t) || e)
    }

    function As(t) {
        var e = t.getRawData(), n = e.mapDimension("seriesName", !0), i = [];
        return f(n, function (t) {
            var n = e.getDimensionInfo(t);
            n.displayName && i.push(n.displayName)
        }), i.join(" ")
    }

    function Ds(t) {
        return t.model.getRawData().count()
    }

    function Ps(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), Os
    }

    function Os(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }

    function Ls(t, e) {
        f(t.CHANGABLE_METHODS, function (n) {
            t.wrapMethod(n, _(Bs, e))
        })
    }

    function Bs(t) {
        var e = Es(t);
        e && e.setOutputEnd(this.count())
    }

    function Es(t) {
        var e = (t.ecModel || {}).scheduler, n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid))
            }
            return i
        }
    }

    function Rs() {
        this.group = new Gp, this.uid = Ha("viewChart"), this.renderTask = Ss({
            plan: Ns,
            reset: Vs
        }), this.renderTask.context = {view: this}
    }

    function zs(t, e) {
        if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) zs(t.childAt(n), e)
    }

    function Fs(t, e, n) {
        var i = Xi(t, e);
        null != i ? f(Ri(i), function (e) {
            zs(t.getItemGraphicEl(e), n)
        }) : t.eachItemGraphicEl(function (t) {
            zs(t, n)
        })
    }

    function Ns(t) {
        return Zy(t.model)
    }

    function Vs(t) {
        var e = t.model, n = t.ecModel, i = t.api, r = t.payload, a = e.pipelineContext.progressiveRender, o = t.view,
            s = r && Xy(r).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
        return "render" !== l && o[l](e, n, i, r), Yy[l]
    }

    function Ws(t, e, n) {
        function i() {
            h = (new Date).getTime(), c = null, t.apply(o, s || [])
        }

        var r, a, o, s, l, u = 0, h = 0, c = null;
        e = e || 0;
        var d = function () {
            r = (new Date).getTime(), o = this, s = arguments;
            var t = l || e, d = l || n;
            l = null, a = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), u = r
        };
        return d.clear = function () {
            c && (clearTimeout(c), c = null)
        }, d.debounceNextCall = function (t) {
            l = t
        }, d
    }

    function Hs(t, e, n, i) {
        var r = t[e];
        if (r) {
            var a = r[qy] || r, o = r[$y], s = r[Uy];
            if (s !== n || o !== i) {
                if (null == n || !i) return t[e] = a;
                r = t[e] = Ws(a, n, "debounce" === i), r[qy] = a, r[$y] = i, r[Uy] = n
            }
            return r
        }
    }

    function Gs(t, e, n, i) {
        this.ecInstance = t, this.api = e, this.unfinished;
        var n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice();
        this._allHandlers = n.concat(i), this._stageTaskMap = F()
    }

    function Xs(t, e, n, i, r) {
        function a(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
        }

        r = r || {};
        var o;
        f(e, function (e) {
            if (!r.visualType || r.visualType === e.visualType) {
                var s = t._stageTaskMap.get(e.uid), l = s.seriesTaskMap, u = s.overallTask;
                if (u) {
                    var h, c = u.agentStubMap;
                    c.each(function (t) {
                        a(r, t) && (t.dirty(), h = !0)
                    }), h && u.dirty(), i_(u, i);
                    var d = t.getPerformArgs(u, r.block);
                    c.each(function (t) {
                        t.perform(d)
                    }), o |= u.perform(d)
                } else l && l.each(function (s) {
                    a(r, s) && s.dirty();
                    var l = t.getPerformArgs(s, r.block);
                    l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), i_(s, i), o |= s.perform(l)
                })
            }
        }), t.unfinished |= o
    }

    function Zs(t, e, n, i, r) {
        function a(n) {
            var a = n.uid, s = o.get(a) || o.set(a, Ss({plan: Ks, reset: Qs, count: tl}));
            s.context = {
                model: n,
                ecModel: i,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            }, el(t, n, s)
        }

        var o = n.seriesTaskMap || (n.seriesTaskMap = F()), s = e.seriesType, l = e.getTargetSeries;
        e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
        var u = t._pipelineMap;
        o.each(function (t, e) {
            u.get(e) || (t.dispose(), o.removeKey(e))
        })
    }

    function js(t, e, n, i, r) {
        function a(e) {
            var n = e.uid, i = s.get(n);
            i || (i = s.set(n, Ss({reset: qs, onDirty: $s})), o.dirty()), i.context = {
                model: e,
                overallProgress: h,
                modifyOutputEnd: c
            }, i.agent = o, i.__block = h, el(t, e, i)
        }

        var o = n.overallTask = n.overallTask || Ss({reset: Ys});
        o.context = {ecModel: i, api: r, overallReset: e.overallReset, scheduler: t};
        var s = o.agentStubMap = o.agentStubMap || F(), l = e.seriesType, u = e.getTargetSeries, h = !0,
            c = e.modifyOutputEnd;
        l ? i.eachRawSeriesByType(l, a) : u ? u(i, r).each(a) : (h = !1, f(i.getSeries(), a));
        var d = t._pipelineMap;
        s.each(function (t, e) {
            d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
        })
    }

    function Ys(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }

    function qs(t) {
        return t.overallProgress && Us
    }

    function Us() {
        this.agent.dirty(), this.getDownstream().dirty()
    }

    function $s() {
        this.agent && this.agent.dirty()
    }

    function Ks(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
    }

    function Qs(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Ri(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? p(e, function (t, e) {
            return Js(e)
        }) : r_
    }

    function Js(t) {
        return function (e, n) {
            var i = n.data, r = n.resetDefines[t];
            if (r && r.dataEach) for (var a = e.start; a < e.end; a++) r.dataEach(i, a); else r && r.progress && r.progress(e, i)
        }
    }

    function tl(t) {
        return t.data.count()
    }

    function el(t, e, n) {
        var i = e.uid, r = t._pipelineMap.get(i);
        !r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r
    }

    function nl(t) {
        a_ = null;
        try {
            t(o_, s_)
        } catch (e) {
        }
        return a_
    }

    function il(t, e) {
        for (var n in e.prototype) t[n] = V
    }

    function rl(t) {
        if (b(t)) {
            var e = new DOMParser;
            t = e.parseFromString(t, "text/xml")
        }
        for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
        return t
    }

    function al() {
        this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
    }

    function ol(t, e) {
        for (var n = t.firstChild; n;) {
            if (1 === n.nodeType) {
                var i = n.getAttribute("offset");
                i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
                var r = n.getAttribute("stop-color") || "#000000";
                e.addColorStop(i, r)
            }
            n = n.nextSibling
        }
    }

    function sl(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle))
    }

    function ll(t) {
        for (var e = B(t).split(g_), n = [], i = 0; i < e.length; i += 2) {
            var r = parseFloat(e[i]), a = parseFloat(e[i + 1]);
            n.push([r, a])
        }
        return n
    }

    function ul(t, e, n, i) {
        var r = e.__inheritedStyle || {}, a = "text" === e.type;
        if (1 === t.nodeType && (cl(t, e), o(r, dl(t)), !i)) for (var s in y_) if (y_.hasOwnProperty(s)) {
            var l = t.getAttribute(s);
            null != l && (r[y_[s]] = l)
        }
        var u = a ? "textFill" : "fill", h = a ? "textStroke" : "stroke";
        e.style = e.style || new $p;
        var c = e.style;
        null != r.fill && c.set(u, hl(r.fill, n)), null != r.stroke && c.set(h, hl(r.stroke, n)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
            var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
            null != r[t] && c.set(e, parseFloat(r[t]))
        }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
            null != r[t] && c.set(t, r[t])
        }), r.lineDash && (e.style.lineDash = B(r.lineDash).split(g_)), c[h] && "none" !== c[h] && (e[h] = !0), e.__inheritedStyle = r
    }

    function hl(t, e) {
        var n = e && t && t.match(__);
        if (n) {
            var i = B(n[1]), r = e[i];
            return r
        }
        return t
    }

    function cl(t, e) {
        var n = t.getAttribute("transform");
        if (n) {
            n = n.replace(/,/g, " ");
            var i = null, r = [];
            n.replace(x_, function (t, e, n) {
                r.push(e, n)
            });
            for (var a = r.length - 1; a > 0; a -= 2) {
                var o = r[a], s = r[a - 1];
                switch (i = i || we(), s) {
                    case"translate":
                        o = B(o).split(g_), Te(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
                        break;
                    case"scale":
                        o = B(o).split(g_), Ce(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
                        break;
                    case"rotate":
                        o = B(o).split(g_), Ie(i, i, parseFloat(o[0]));
                        break;
                    case"skew":
                        o = B(o).split(g_), console.warn("Skew transform is not supported yet");
                        break;
                    case"matrix":
                        var o = B(o).split(g_);
                        i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5])
                }
            }
        }
        e.setLocalTransform(i)
    }

    function dl(t) {
        var e = t.getAttribute("style"), n = {};
        if (!e) return n;
        var i = {};
        w_.lastIndex = 0;
        for (var r; null != (r = w_.exec(e));) i[r[1]] = r[2];
        for (var a in y_) y_.hasOwnProperty(a) && null != i[a] && (n[y_[a]] = i[a]);
        return n
    }

    function fl(t, e, n) {
        var i = e / t.width, r = n / t.height, a = Math.min(i, r), o = [a, a],
            s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];
        return {scale: o, position: s}
    }

    function pl(t) {
        return function (e, n, i) {
            e = e && e.toLowerCase(), ip.prototype[t].call(this, e, n, i)
        }
    }

    function gl() {
        ip.call(this)
    }

    function vl(t, e, n) {
        function r(t, e) {
            return t.__prio - e.__prio
        }

        n = n || {}, "string" == typeof e && (e = J_[e]), this.id, this.group, this._dom = t;
        var a = "canvas", o = this._zr = Pi(t, {
            renderer: n.renderer || a,
            devicePixelRatio: n.devicePixelRatio,
            width: n.width,
            height: n.height
        });
        this._throttledZrFlush = Ws(y(o.flush, o), 17);
        var e = i(e);
        e && Ay(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new $o;
        var s = this._api = Bl(this);
        Mn(Q_, r), Mn(U_, r), this._scheduler = new Gs(this, s, U_, Q_), ip.call(this, this._ecEventProcessor = new El), this._messageCenter = new gl, this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), Sl(o, this), E(this)
    }

    function ml(t, e, n) {
        var i, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
        e = ji(r, e);
        for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s[t] && null != (i = s[t](r, e, n))) return i
        }
    }

    function yl(t) {
        var e = t._model, n = t._scheduler;
        n.restorePipelines(e), n.prepareStageTasks(), Tl(t, "component", e, n), Tl(t, "chart", e, n), n.plan()
    }

    function _l(t, e, n, i, r) {
        function a(i) {
            i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
        }

        var o = t._model;
        if (!i) return void I_(t._componentsViews.concat(t._chartsViews), a);
        var s = {};
        s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
        var l = {mainType: i, query: s};
        r && (l.subType = r);
        var u = n.excludeSeriesId;
        null != u && (u = F(Ri(u))), o && o.eachComponent(l, function (e) {
            u && null != u.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
        }, t)
    }

    function xl(t, e) {
        var n = t._chartsMap, i = t._scheduler;
        e.eachSeries(function (t) {
            i.updateStreamModes(t, n[t.__viewId])
        })
    }

    function wl(t, e) {
        var n = t.type, i = t.escapeConnect, r = Y_[n], a = r.actionInfo, l = (a.update || "update").split(":"),
            u = l.pop();
        l = null != l[0] && A_(l[0]), this[W_] = !0;
        var h = [t], c = !1;
        t.batch && (c = !0, h = p(t.batch, function (e) {
            return e = s(o({}, e), t), e.batch = null, e
        }));
        var d, f = [], g = "highlight" === n || "downplay" === n;
        I_(h, function (t) {
            d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? _l(this, u, t, "series") : l && _l(this, u, t, l.main, l.sub)
        }, this), "none" === u || g || l || (this[H_] ? (yl(this), Z_.update.call(this, t), this[H_] = !1) : Z_[u].call(this, t)), d = c ? {
            type: a.event || n,
            escapeConnect: i,
            batch: f
        } : f[0], this[W_] = !1, !e && this._messageCenter.trigger(d.type, d)
    }

    function bl(t) {
        for (var e = this._pendingActions; e.length;) {
            var n = e.shift();
            wl.call(this, n, t)
        }
    }

    function Ml(t) {
        !t && this.trigger("updated")
    }

    function Sl(t, e) {
        t.on("rendered", function () {
            e.trigger("rendered"), !t.animation.isFinished() || e[H_] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
        })
    }

    function Tl(t, e, n, i) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type, r = s[e];
            if (!r) {
                var h = A_(t.type), c = a ? Wy.getClass(h.main, h.sub) : Rs.getClass(h.sub);
                r = new c, r.init(n, u), s[e] = r, o.push(r), l.add(r.group)
            }
            t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !a && i.prepareView(r, t, n, u)
        }

        for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) o[h].__alive = !1;
        a ? n.eachComponent(function (t, e) {
            "series" !== t && r(e)
        }) : n.eachSeries(r);
        for (var h = 0; h < o.length;) {
            var c = o[h];
            c.__alive ? h++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), o.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
        }
    }

    function Il(t) {
        t.clearColorPalette(), t.eachSeries(function (t) {
            t.clearColorPalette()
        })
    }

    function Cl(t, e, n, i) {
        kl(t, e, n, i), I_(t._chartsViews, function (t) {
            t.__alive = !1
        }), Al(t, e, n, i), I_(t._chartsViews, function (t) {
            t.__alive || t.remove(e, n)
        })
    }

    function kl(t, e, n, i, r) {
        I_(r || t._componentsViews, function (t) {
            var r = t.__model;
            t.render(r, e, n, i), Ll(r, t)
        })
    }

    function Al(t, e, n, i, r) {
        var a, o = t._scheduler;
        e.eachSeries(function (e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var s = n.renderTask;
            o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), Ll(e, n), Ol(e, n)
        }), o.unfinished |= a, Pl(t._zr, e), Jy(t._zr.dom, e)
    }

    function Dl(t, e) {
        I_(K_, function (n) {
            n(t, e)
        })
    }

    function Pl(t, e) {
        var n = t.storage, i = 0;
        n.traverse(function (t) {
            t.isGroup || i++
        }), i > e.get("hoverLayerThreshold") && !Ef.node && n.traverse(function (t) {
            t.isGroup || (t.useHoverLayer = !0)
        })
    }

    function Ol(t, e) {
        var n = t.get("blendMode") || null;
        e.group.traverse(function (t) {
            t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
                t.setStyle("blend", n)
            })
        })
    }

    function Ll(t, e) {
        var n = t.get("z"), i = t.get("zlevel");
        e.group.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
        })
    }

    function Bl(t) {
        var e = t._coordSysMgr;
        return o(new Uo(t), {
            getCoordinateSystems: y(e.getCoordinateSystems, e), getComponentByElement: function (e) {
                for (; e;) {
                    var n = e.__ecComponentInfo;
                    if (null != n) return t._model.getComponent(n.mainType, n.index);
                    e = e.parent
                }
            }
        })
    }

    function El() {
        this.eventInfo
    }

    function Rl(t) {
        function e(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i[a] = e
            }
        }

        var n = 0, i = 1, r = 2, a = "__connectUpdateStatus";
        I_(q_, function (o, s) {
            t._messageCenter.on(s, function (o) {
                if (nx[t.group] && t[a] !== n) {
                    if (o && o.escapeConnect) return;
                    var s = t.makeActionFromEvent(o), l = [];
                    I_(ex, function (e) {
                        e !== t && e.group === t.group && l.push(e)
                    }), e(l, n), I_(l, function (t) {
                        t[a] !== i && t.dispatchAction(s)
                    }), e(l, r)
                }
            })
        })
    }

    function zl(t, e, n) {
        var i = Wl(t);
        if (i) return i;
        var r = new vl(t, e, n);
        return r.id = "ec_" + ix++, ex[r.id] = r, qi(t, ax, r.id), Rl(r), r
    }

    function Fl(t) {
        if (x(t)) {
            var e = t;
            t = null, I_(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + rx++, I_(e, function (e) {
                e.group = t
            })
        }
        return nx[t] = !0, t
    }

    function Nl(t) {
        nx[t] = !1
    }

    function Vl(t) {
        "string" == typeof t ? t = ex[t] : t instanceof vl || (t = Wl(t)), t instanceof vl && !t.isDisposed() && t.dispose()
    }

    function Wl(t) {
        return ex[Ui(t, ax)]
    }

    function Hl(t) {
        return ex[t]
    }

    function Gl(t, e) {
        J_[t] = e
    }

    function Xl(t) {
        $_.push(t)
    }

    function Zl(t, e) {
        Ql(U_, t, e, L_)
    }

    function jl(t) {
        K_.push(t)
    }

    function Yl(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = k_(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, T_(G_.test(i) && G_.test(e)), Y_[i] || (Y_[i] = {
            action: n,
            actionInfo: t
        }), q_[e] = i
    }

    function ql(t, e) {
        $o.register(t, e)
    }

    function Ul(t) {
        var e = $o.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
    }

    function $l(t, e) {
        Ql(Q_, t, e, E_, "layout")
    }

    function Kl(t, e) {
        Ql(Q_, t, e, z_, "visual")
    }

    function Ql(t, e, n, i, r) {
        (C_(e) || k_(e)) && (n = e, e = i);
        var a = Gs.wrapStageHandler(n, r);
        return a.__prio = e, a.__raw = n, t.push(a), a
    }

    function Jl(t, e) {
        tx[t] = e
    }

    function tu(t) {
        return Jm.extend(t)
    }

    function eu(t) {
        return Wy.extend(t)
    }

    function nu(t) {
        return Vy.extend(t)
    }

    function iu(t) {
        return Rs.extend(t)
    }

    function ru(t) {
        n("createCanvas", t)
    }

    function au(t, e, n) {
        M_.registerMap(t, e, n)
    }

    function ou(t) {
        var e = M_.retrieveMap(t);
        return e && e[0] && {geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas}
    }

    function su(t) {
        return t
    }

    function lu(t, e, n, i, r) {
        this._old = t, this._new = e, this._oldKeyGetter = n || su, this._newKeyGetter = i || su, this.context = r
    }

    function uu(t, e, n, i, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[i](t[a], a), s = e[o];
            null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
        }
    }

    function hu(t) {
        var e = {}, n = e.encode = {}, i = F(), r = [], a = [];
        f(t.dimensions, function (e) {
            var o = t.getDimensionInfo(e), s = o.coordDim;
            if (s) {
                var l = n[s];
                n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), du(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e)
            }
            lx.each(function (t, e) {
                var i = n[e];
                n.hasOwnProperty(e) || (i = n[e] = []);
                var r = o.otherDims[e];
                null != r && r !== !1 && (i[r] = o.name)
            })
        });
        var o = [], s = {};
        i.each(function (t, e) {
            var i = n[e];
            s[e] = i[0], o = o.concat(i)
        }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
        var l = n.label;
        l && l.length && (r = l.slice());
        var u = n.tooltip;
        return u && u.length ? a = u.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e
    }

    function cu(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function du(t) {
        return !("ordinal" === t || "time" === t)
    }

    function fu(t) {
        return t._rawCount > 65535 ? fx : px
    }

    function pu(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t)
    }

    function gu(t, e) {
        f(gx.concat(e.__wrappedMethods || []), function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t.__wrappedMethods = e.__wrappedMethods, f(vx, function (n) {
            t[n] = i(e[n])
        }), t._calculationInfo = o(e._calculationInfo)
    }

    function vu(t) {
        var e = t._invertedIndicesMap;
        f(e, function (n, i) {
            var r = t._dimensionInfos[i], a = r.ordinalMeta;
            if (a) {
                n = e[i] = new fx(a.categories.length);
                for (var o = 0; o < n.length; o++) n[o] = 0 / 0;
                for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o
            }
        })
    }

    function mu(t, e, n) {
        var i;
        if (null != e) {
            var r = t._chunkSize, a = Math.floor(n / r), o = n % r, s = t.dimensions[e], l = t._storage[s][a];
            if (l) {
                i = l[o];
                var u = t._dimensionInfos[s].ordinalMeta;
                u && u.categories.length && (i = u.categories[i])
            }
        }
        return i
    }

    function yu(t) {
        return t
    }

    function _u(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
    }

    function xu(t, e) {
        var n = t._idList[e];
        return null == n && (n = mu(t, t._idDimIdx, e)), null == n && (n = cx + e), n
    }

    function wu(t) {
        return x(t) || (t = [t]), t
    }

    function bu(t, e) {
        var n = t.dimensions, i = new mx(p(n, t.getDimensionInfo, t), t.hostModel);
        gu(i, t);
        for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
            var s = n[o];
            a[s] && (u(e, s) >= 0 ? (r[s] = Mu(a[s]), i._rawExtent[s] = Su(), i._extent[s] = null) : r[s] = a[s])
        }
        return i
    }

    function Mu(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = pu(t[n]);
        return e
    }

    function Su() {
        return [1 / 0, -1 / 0]
    }

    function Tu(t, e, n) {
        function r(t, e, n) {
            null != lx.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, h.set(e, !0))
        }

        Ao.isInstance(e) || (e = Ao.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();
        for (var a = (n.dimsDef || []).slice(), l = F(n.encodeDef), u = F(), h = F(), c = [], d = Iu(e, t, a, n.dimCount), p = 0; d > p; p++) {
            var g = a[p] = o({}, M(a[p]) ? a[p] : {name: a[p]}), v = g.name, m = c[p] = {otherDims: {}};
            null != v && null == u.get(v) && (m.name = m.displayName = v, u.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName)
        }
        l.each(function (t, e) {
            if (t = Ri(t).slice(), 1 === t.length && t[0] < 0) return void l.set(e, !1);
            var n = l.set(e, []);
            f(t, function (t, i) {
                b(t) && (t = u.get(t)), null != t && d > t && (n[i] = t, r(c[t], e, i))
            })
        });
        var y = 0;
        f(t, function (t) {
            var e, t, n, a;
            if (b(t)) e = t, t = {}; else {
                e = t.name;
                var o = t.ordinalMeta;
                t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
            }
            var u = l.get(e);
            if (u !== !1) {
                var u = Ri(u);
                if (!u.length) for (var h = 0; h < (n && n.length || 1); h++) {
                    for (; y < c.length && null != c[y].coordDim;) y++;
                    y < c.length && u.push(y++)
                }
                f(u, function (i, o) {
                    var l = c[i];
                    if (r(s(l, t), e, o), null == l.name && n) {
                        var u = n[o];
                        !M(u) && (u = {name: u}), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip
                    }
                    a && s(l.otherDims, a)
                })
            }
        });
        var _ = n.generateCoord, x = n.generateCoordCount, w = null != x;
        x = _ ? x || 1 : 0;
        for (var S = _ || "value", T = 0; d > T; T++) {
            var m = c[T] = c[T] || {}, I = m.coordDim;
            null == I && (m.coordDim = Cu(S, h, w), m.coordDimIndex = 0, (!_ || 0 >= x) && (m.isExtraCoord = !0), x--), null == m.name && (m.name = Cu(m.coordDim, u)), null == m.type && Vo(e, T, m.name) && (m.type = "ordinal")
        }
        return c
    }

    function Iu(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
        return f(e, function (t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length))
        }), r
    }

    function Cu(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i);) i++;
            t += i
        }
        return e.set(t, !0), t
    }

    function ku(t, e, n) {
        n = n || {};
        var i, r, a, o, s = n.byIndex, l = n.stackedCoordDimension, u = !(!t || !t.get("stack"));
        if (f(e, function (t, n) {
            b(t) && (e[n] = t = {name: t}), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
        }), !r || s || i || (s = !0), r) {
            a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);
            var h = r.coordDim, c = r.type, d = 0;
            f(e, function (t) {
                t.coordDim === h && d++
            }), e.push({
                name: a,
                coordDim: h,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), d++, e.push({name: o, coordDim: o, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0})
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: i && i.name,
            isStackedByIndex: s,
            stackedOverDimension: o,
            stackResultDimension: a
        }
    }

    function Au(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension")
    }

    function Du(t, e) {
        return Au(t, e) ? t.getCalculationInfo("stackResultDimension") : e
    }

    function Pu(t, e, n) {
        n = n || {}, Ao.isInstance(t) || (t = Ao.seriesDataToSource(t));
        var i, r = e.get("coordinateSystem"), a = $o.get(r), o = Co(e);
        o && (i = p(o.coordSysDims, function (t) {
            var e = {name: t}, n = o.axisMap.get(t);
            if (n) {
                var i = n.get("type");
                e.type = cu(i)
            }
            return e
        })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
        var s, l, u = xx(t, {coordDimensions: i, generateCoord: n.generateCoord});
        o && f(u, function (t, e) {
            var n = t.coordDim, i = o.categoryAxisMap.get(n);
            i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
        }), l || null == s || (u[s].otherDims.itemName = 0);
        var h = ku(e, u), c = new mx(u, e);
        c.setCalculationInfo(h);
        var d = null != s && Ou(t) ? function (t, e, n, i) {
            return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
        } : null;
        return c.hasItemOption = !1, c.initData(t, null, d), c
    }

    function Ou(t) {
        if (t.sourceFormat === ay) {
            var e = Lu(t.data || []);
            return null != e && !x(Fi(e))
        }
    }

    function Lu(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function Bu(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
    }

    function Eu(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
    }

    function Ru(t) {
        return t._map || (t._map = F(t.categories))
    }

    function zu(t) {
        return M(t) && null != t.value ? t.value : t + ""
    }

    function Fu(t, e, n, i) {
        var r = {}, a = t[1] - t[0], o = r.interval = ao(a / e, !0);
        null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
        var s = r.intervalPrecision = Nu(o),
            l = r.niceTickExtent = [Tx(Math.ceil(t[0] / o) * o, s), Tx(Math.floor(t[1] / o) * o, s)];
        return Wu(l, t), r
    }

    function Nu(t) {
        return Ka(t) + 2
    }

    function Vu(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
    }

    function Wu(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Vu(t, 0, e), Vu(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }

    function Hu(t, e, n, i) {
        var r = [];
        if (!t) return r;
        var a = 1e4;
        e[0] < n[0] && r.push(e[0]);
        for (var o = n[0]; o <= n[1] && (r.push(o), o = Tx(o + t, i), o !== r[r.length - 1]);) if (r.length > a) return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
    }

    function Gu(t) {
        return t.get("stack") || kx + t.seriesIndex
    }

    function Xu(t) {
        return t.dim + t.index
    }

    function Zu(t, e) {
        var n = [];
        return e.eachSeriesByType(t, function (t) {
            Uu(t) && !$u(t) && n.push(t)
        }), n
    }

    function ju(t) {
        var e = [];
        return f(t, function (t) {
            var n = t.getData(), i = t.coordinateSystem, r = i.getBaseAxis(), a = r.getExtent(),
                o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
                s = Ya(t.get("barWidth"), o), l = Ya(t.get("barMaxWidth"), o), u = t.get("barGap"),
                h = t.get("barCategoryGap");
            e.push({
                bandWidth: o,
                barWidth: s,
                barMaxWidth: l,
                barGap: u,
                barCategoryGap: h,
                axisKey: Xu(r),
                stackId: Gu(t)
            })
        }), Yu(e)
    }

    function Yu(t) {
        var e = {};
        f(t, function (t) {
            var n = t.axisKey, i = t.bandWidth, r = e[n] || {
                bandWidth: i,
                remainedWidth: i,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            }, a = r.stacks;
            e[n] = r;
            var o = t.stackId;
            a[o] || r.autoWidthCount++, a[o] = a[o] || {width: 0, maxWidth: 0};
            var s = t.barWidth;
            s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
            var l = t.barMaxWidth;
            l && (a[o].maxWidth = l);
            var u = t.barGap;
            null != u && (r.gap = u);
            var h = t.barCategoryGap;
            null != h && (r.categoryGap = h)
        });
        var n = {};
        return f(e, function (t, e) {
            n[e] = {};
            var i = t.stacks, r = t.bandWidth, a = Ya(t.categoryGap, r), o = Ya(t.gap, 1), s = t.remainedWidth,
                l = t.autoWidthCount, u = (s - a) / (l + (l - 1) * o);
            u = Math.max(u, 0), f(i, function (t) {
                var e = t.maxWidth;
                e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--)
            }), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);
            var h, c = 0;
            f(i, function (t) {
                t.width || (t.width = u), h = t, c += t.width * (1 + o)
            }), h && (c -= h.width * o);
            var d = -c / 2;
            f(i, function (t, i) {
                n[e][i] = n[e][i] || {offset: d, width: t.width}, d += t.width * (1 + o)
            })
        }), n
    }

    function qu(t, e, n) {
        if (t && e) {
            var i = t[Xu(e)];
            return null != i && null != n && (i = i[Gu(n)]), i
        }
    }

    function Uu(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
    }

    function $u(t) {
        return t.pipelineContext && t.pipelineContext.large
    }

    function Ku(t, e) {
        var n, i, r = e.getGlobalExtent();
        r[0] > r[1] ? (n = r[1], i = r[0]) : (n = r[0], i = r[1]);
        var a = e.toGlobalCoord(e.dataToCoord(0));
        return n > a && (a = n), a > i && (a = i), a
    }

    function Qu(t, e) {
        return Xx(t, Gx(e))
    }

    function Ju(t, e) {
        var n, i, r, a = t.type, o = e.getMin(), s = e.getMax(), l = null != o, u = null != s, h = t.getExtent();
        "ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), x(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = Ya(i[0], 1), i[1] = Ya(i[1], 1), r = h[1] - h[0] || Math.abs(h[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : h[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : h[1] + i[1] * r), "dataMin" === o ? o = h[0] : "function" == typeof o && (o = o({
            min: h[0],
            max: h[1]
        })), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
            min: h[0],
            max: h[1]
        })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !u && (s = 0));
        var c = e.ecModel;
        if (c && "time" === a) {
            var d, p = Zu("bar", c);
            if (f(p, function (t) {
                d |= t.getBaseAxis() === e.axis
            }), d) {
                var g = ju(p), v = th(o, s, e, g);
                o = v.min, s = v.max
            }
        }
        return [o, s]
    }

    function th(t, e, n, i) {
        var r = n.axis.getExtent(), a = r[1] - r[0], o = qu(i, n.axis);
        if (void 0 === o) return {min: t, max: e};
        var s = 1 / 0;
        f(o, function (t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        f(o, function (t) {
            l = Math.max(t.offset + t.width, l)
        }), s = Math.abs(s), l = Math.abs(l);
        var u = s + l, h = e - t, c = 1 - (s + l) / a, d = h / c - h;
        return e += d * (l / u), t -= d * (s / u), {min: t, max: e}
    }

    function eh(t, e) {
        var n = Ju(t, e), i = null != e.getMin(), r = null != e.getMax(), a = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(n[0], n[1]), t.niceExtent({
            splitNumber: a,
            fixMin: i,
            fixMax: r,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }

    function nh(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case"category":
                return new Sx(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
            case"value":
                return new Cx;
            default:
                return (Bu.getClass(e) || Cx).create(t)
        }
    }

    function ih(t) {
        var e = t.getLabelModel().get("formatter"), n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e ? e = function (e) {
            return function (n) {
                return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "")
            }
        }(e) : "function" == typeof e ? function (i, r) {
            return null != n && (r = i - n), e(rh(t, i), r)
        } : function (e) {
            return t.scale.getLabel(e)
        }
    }

    function rh(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }

    function ah(t, e) {
        if ("image" !== this.type) {
            var n = this.style, i = this.shape;
            i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
        }
    }

    function oh(t, e, n, i, r, a, o) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? Kr(t.slice(8), new gn(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? $r(t.slice(7), {}, new gn(e, n, i, r), o ? "center" : "cover") : new rw({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = ah, l.setColor(a), l
    }

    function sh(t) {
        return Pu(t.getSource(), t)
    }

    function lh(t, e) {
        var n = e;
        Na.isInstance(e) || (n = new Na(e), c(n, $x));
        var i = nh(n);
        return i.setExtent(t[0], t[1]), eh(i, n), i
    }

    function uh(t) {
        c(t, $x)
    }

    function hh(t, e) {
        return Math.abs(t - e) < sw
    }

    function ch(t, e, n) {
        var i = 0, r = t[0];
        if (!r) return !1;
        for (var a = 1; a < t.length; a++) {
            var o = t[a];
            i += kr(r[0], r[1], o[0], o[1], e, n), r = o
        }
        var s = t[0];
        return hh(r[0], s[0]) && hh(r[1], s[1]) || (i += kr(r[0], r[1], s[0], s[1], e, n)), 0 !== i
    }

    function dh(t, e, n) {
        if (this.name = t, this.geometries = e, n) n = [n[0], n[1]]; else {
            var i = this.getBoundingRect();
            n = [i.x + i.width / 2, i.y + i.height / 2]
        }
        this.center = n
    }

    function fh(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var n = t.features, i = 0; i < n.length; i++) for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
            var u = o[l];
            if ("Polygon" === a.type) o[l] = ph(u, s[l], e); else if ("MultiPolygon" === a.type) for (var h = 0; h < u.length; h++) {
                var c = u[h];
                u[h] = ph(c, s[l][h], e)
            }
        }
        return t.UTF8Encoding = !1, t
    }

    function ph(t, e, n) {
        for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
            var s = t.charCodeAt(o) - 64, l = t.charCodeAt(o + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n])
        }
        return i
    }

    function gh(t) {
        return "category" === t.type ? mh(t) : xh(t)
    }

    function vh(t, e) {
        return "category" === t.type ? _h(t, e) : {ticks: t.scale.getTicks()}
    }

    function mh(t) {
        var e = t.getLabelModel(), n = yh(t, e);
        return !e.get("show") || t.scale.isBlank() ? {labels: [], labelCategoryInterval: n.labelCategoryInterval} : n
    }

    function yh(t, e) {
        var n = wh(t, "labels"), i = Ah(e), r = bh(n, i);
        if (r) return r;
        var a, o;
        return w(i) ? a = kh(t, i) : (o = "auto" === i ? Sh(t) : i, a = Ch(t, o)), Mh(n, i, {
            labels: a,
            labelCategoryInterval: o
        })
    }

    function _h(t, e) {
        var n = wh(t, "ticks"), i = Ah(e), r = bh(n, i);
        if (r) return r;
        var a, o;
        if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = kh(t, i, !0); else if ("auto" === i) {
            var s = yh(t, t.getLabelModel());
            o = s.labelCategoryInterval, a = p(s.labels, function (t) {
                return t.tickValue
            })
        } else o = i, a = Ch(t, o, !0);
        return Mh(n, i, {ticks: a, tickCategoryInterval: o})
    }

    function xh(t) {
        var e = t.scale.getTicks(), n = ih(t);
        return {
            labels: p(e, function (e, i) {
                return {formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e}
            })
        }
    }

    function wh(t, e) {
        return uw(t)[e] || (uw(t)[e] = [])
    }

    function bh(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value
    }

    function Mh(t, e, n) {
        return t.push({key: e, value: n}), n
    }

    function Sh(t) {
        var e = uw(t).autoInterval;
        return null != e ? e : uw(t).autoInterval = t.calculateCategoryInterval()
    }

    function Th(t) {
        var e = Ih(t), n = ih(t), i = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, a = r.getExtent(),
            o = r.count();
        if (a[1] - a[0] < 1) return 0;
        var s = 1;
        o > 40 && (s = Math.max(1, Math.floor(o / 40)));
        for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
            var p = 0, g = 0, v = Bn(n(l), e.font, "center", "top");
            p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
        }
        var m = d / h, y = f / c;
        isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
        var _ = Math.max(0, Math.floor(Math.min(m, y))), x = uw(t.model), w = x.lastAutoInterval, b = x.lastTickCount;
        return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w : (x.lastTickCount = o, x.lastAutoInterval = _), _
    }

    function Ih(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        }
    }

    function Ch(t, e, n) {
        function i(t) {
            l.push(n ? t : {formattedLabel: r(t), rawLabel: a.getLabel(t), tickValue: t})
        }

        var r = ih(t), a = t.scale, o = a.getExtent(), s = t.getLabelModel(), l = [], u = Math.max((e || 0) + 1, 1),
            h = o[0], c = a.count();
        0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
        var d = {min: s.get("showMinLabel"), max: s.get("showMaxLabel")};
        d.min && h !== o[0] && i(o[0]);
        for (var f = h; f <= o[1]; f += u) i(f);
        return d.max && f !== o[1] && i(o[1]), l
    }

    function kh(t, e, n) {
        var i = t.scale, r = ih(t), a = [];
        return f(i.getTicks(), function (t) {
            var o = i.getLabel(t);
            e(t, o) && a.push(n ? t : {formattedLabel: r(t), rawLabel: o, tickValue: t})
        }), a
    }

    function Ah(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e
    }

    function Dh(t, e) {
        var n = t[1] - t[0], i = e, r = n / i / 2;
        t[0] += r, t[1] -= r
    }

    function Ph(t, e, n, i, r) {
        function a(t, e) {
            return h ? t > e : e > t
        }

        var o = e.length;
        if (t.onBand && !i && o) {
            var s, l = t.getExtent();
            if (1 === o) e[0].coord = l[0], s = e[1] = {coord: l[0]}; else {
                var u = e[1].coord - e[0].coord;
                f(e, function (t) {
                    t.coord -= u / 2;
                    var e = e || 0;
                    e % 2 > 0 && (t.coord -= u / (2 * (e + 1)))
                }), s = {coord: e[o - 1].coord + u}, e.push(s)
            }
            var h = l[0] > l[1];
            a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({coord: l[0]}), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({coord: l[1]})
        }
    }

    function Oh(t, e, n, i) {
        var r = e.getData(), a = this.dataIndex, o = r.getName(a), s = e.get("selectedOffset");
        i.dispatchAction({type: "pieToggleSelect", from: t, name: o, seriesId: e.id}), r.each(function (t) {
            Lh(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
        })
    }

    function Lh(t, e, n, i, r) {
        var a = (e.startAngle + e.endAngle) / 2, o = Math.cos(a), s = Math.sin(a), l = n ? i : 0, u = [o * l, s * l];
        r ? t.animate().when(200, {position: u}).start("bounceOut") : t.attr("position", u)
    }

    function Bh(t, e) {
        function n() {
            a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore
        }

        function i() {
            a.ignore = a.normalIgnore, o.ignore = o.normalIgnore
        }

        Gp.call(this);
        var r = new rm({z2: 2}), a = new um, o = new tm;
        this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
    }

    function Eh(t, e, n, i, r, a, o) {
        function s(e, n, i) {
            for (var r = e; n > r; r++) if (t[r].y += i, r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, i / 2);
            l(n - 1, i / 2)
        }

        function l(e, n) {
            for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--) ;
        }

        function u(t, e, n, i, r, a) {
            for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) if ("center" !== t[s].position) {
                var u = Math.abs(t[s].y - i), h = t[s].len, c = t[s].len2,
                    d = r + h > u ? Math.sqrt((r + h + c) * (r + h + c) - u * u) : Math.abs(t[s].x - n);
                e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = n + d * a, o = d
            }
        }

        t.sort(function (t, e) {
            return t.y - e.y
        });
        for (var h, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) h = t[g].y - c, 0 > h && s(g, d, -h, r), c = t[g].y + t[g].height;
        0 > o - c && l(d - 1, c - o);
        for (var g = 0; d > g; g++) t[g].y >= n ? p.push(t[g]) : f.push(t[g]);
        u(f, !1, e, n, i, r), u(p, !0, e, n, i, r)
    }

    function Rh(t, e, n, i, r, a) {
        for (var o = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? o.push(t[l]) : s.push(t[l]);
        Eh(s, e, n, i, 1, r, a), Eh(o, e, n, i, -1, r, a);
        for (var l = 0; l < t.length; l++) {
            var u = t[l].linePoints;
            if (u) {
                var h = u[1][0] - u[2][0];
                u[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, u[1][1] = u[2][1] = t[l].y, u[1][0] = u[2][0] + h
            }
        }
    }

    function zh(t, e) {
        var n = {axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {}};
        return Fh(n, t, e), n.seriesInvolved && Vh(n, t), n
    }

    function Fh(t, e, n) {
        var i = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), a = r.get("link", !0) || [], o = [];
        Iw(n.getCoordinateSystems(), function (n) {
            function s(i, s, l) {
                var h = l.model.getModel("axisPointer", r), d = h.get("show");
                if (d && ("auto" !== d || i || jh(h))) {
                    null == s && (s = h.get("triggerTooltip")), h = i ? Nh(l, c, r, e, i, s) : h;
                    var f = h.get("snap"), p = Yh(l.model), g = s || f || "category" === l.type, v = t.axesInfo[p] = {
                        key: p,
                        axis: l,
                        coordSys: n,
                        axisPointerModel: h,
                        triggerTooltip: s,
                        involveSeries: g,
                        snap: f,
                        useHandle: jh(h),
                        seriesModels: []
                    };
                    u[p] = v, t.seriesInvolved |= g;
                    var m = Wh(a, l);
                    if (null != m) {
                        var y = o[m] || (o[m] = {axesInfo: {}});
                        y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y
                    }
                }
            }

            if (n.axisPointerEnabled) {
                var l = Yh(n.model), u = t.coordSysAxesInfo[l] = {};
                t.coordSysMap[l] = n;
                var h = n.model, c = h.getModel("tooltip", i);
                if (Iw(n.getAxes(), Cw(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
                    var d = "axis" === c.get("trigger"), f = "cross" === c.get("axisPointer.type"),
                        p = n.getTooltipAxes(c.get("axisPointer.axis"));
                    (d || f) && Iw(p.baseAxes, Cw(s, f ? "cross" : !0, d)), f && Iw(p.otherAxes, Cw(s, "cross", !1))
                }
            }
        })
    }

    function Nh(t, e, n, r, a, o) {
        var l = e.getModel("axisPointer"), u = {};
        Iw(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
            u[t] = i(l.get(t))
        }), u.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (u.type = "line");
        var h = u.label || (u.label = {});
        if (null == h.show && (h.show = !1), "cross" === a) {
            var c = l.get("label.show");
            if (h.show = null != c ? c : !0, !o) {
                var d = u.lineStyle = l.get("crossStyle");
                d && s(h, d.textStyle)
            }
        }
        return t.model.getModel("axisPointer", new Na(u, n, r))
    }

    function Vh(t, e) {
        e.eachSeries(function (e) {
            var n = e.coordinateSystem, i = e.get("tooltip.trigger", !0), r = e.get("tooltip.show", !0);
            n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get("axisPointer.show", !0) !== !1 && Iw(t.coordSysAxesInfo[Yh(n.model)], function (t) {
                var i = t.axis;
                n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
            })
        }, this)
    }

    function Wh(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
            var a = t[r] || {};
            if (Hh(a[i + "AxisId"], n.id) || Hh(a[i + "AxisIndex"], n.componentIndex) || Hh(a[i + "AxisName"], n.name)) return r
        }
    }

    function Hh(t, e) {
        return "all" === t || x(t) && u(t, e) >= 0 || t === e
    }

    function Gh(t) {
        var e = Xh(t);
        if (e) {
            var n = e.axisPointerModel, i = e.axis.scale, r = n.option, a = n.get("status"), o = n.get("value");
            null != o && (o = i.parse(o));
            var s = jh(n);
            null == a && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }

    function Xh(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[Yh(t)]
    }

    function Zh(t) {
        var e = Xh(t);
        return e && e.axisPointerModel
    }

    function jh(t) {
        return !!t.get("handle.show")
    }

    function Yh(t) {
        return t.type + "||" + t.id
    }

    function qh(t, e, n, i, r) {
        var a = t.axis;
        if (!a.scale.isBlank() && a.containData(e)) {
            if (!t.involveSeries) return void n.showPointer(t, e);
            var s = Uh(e, t), l = s.payloadBatch, u = s.snapToValue;
            l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(u) && null != u && (e = u), n.showPointer(t, e, l, r), n.showTooltip(t, s, u)
        }
    }

    function Uh(t, e) {
        var n = e.axis, i = n.dim, r = t, a = [], o = Number.MAX_VALUE, s = -1;
        return Aw(e.seriesModels, function (e) {
            var l, u, h = e.getData().mapDimension(i, !0);
            if (e.getAxisTooltipData) {
                var c = e.getAxisTooltipData(h, t, n);
                u = c.dataIndices, l = c.nestestValue
            } else {
                if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;
                l = e.getData().get(h[0], u[0])
            }
            if (null != l && isFinite(l)) {
                var d = t - l, f = Math.abs(d);
                o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), Aw(u, function (t) {
                    a.push({seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t)})
                }))
            }
        }), {payloadBatch: a, snapToValue: r}
    }

    function $h(t, e, n, i) {
        t[e.key] = {value: n, payloadBatch: i}
    }

    function Kh(t, e, n, i) {
        var r = n.payloadBatch, a = e.axis, o = a.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, u = Yh(l), h = t.map[u];
            h || (h = t.map[u] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(h)), h.dataByAxis.push({
                axisDim: a.dim,
                axisIndex: o.componentIndex,
                axisType: o.type,
                axisId: o.id,
                value: i,
                valueLabelOpt: {precision: s.get("label.precision"), formatter: s.get("label.formatter")},
                seriesDataIndices: r.slice()
            })
        }
    }

    function Qh(t, e, n) {
        var i = n.axesInfo = [];
        Aw(e, function (e, n) {
            var r = e.axisPointerModel.option, a = t[n];
            a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            })
        })
    }

    function Jh(t, e, n, i) {
        if (ic(e) || !t.list.length) return void i({type: "hideTip"});
        var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
        i({
            type: "showTip",
            escapeConnect: !0,
            x: e[0],
            y: e[1],
            tooltipOption: n.tooltipOption,
            position: n.position,
            dataIndexInside: r.dataIndexInside,
            dataIndex: r.dataIndex,
            seriesIndex: r.seriesIndex,
            dataByCoordSys: t.list
        })
    }

    function tc(t, e, n) {
        var i = n.getZr(), r = "axisPointerLastHighlights", a = Pw(i)[r] || {}, o = Pw(i)[r] = {};
        Aw(t, function (t) {
            var e = t.axisPointerModel.option;
            "show" === e.status && Aw(e.seriesDataIndices, function (t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                o[e] = t
            })
        });
        var s = [], l = [];
        f(a, function (t, e) {
            !o[e] && l.push(t)
        }), f(o, function (t, e) {
            !a[e] && s.push(t)
        }), l.length && n.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            batch: l
        }), s.length && n.dispatchAction({type: "highlight", escapeConnect: !0, batch: s})
    }

    function ec(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
            var i = t[n];
            if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
        }
    }

    function nc(t) {
        var e = t.axis.model, n = {}, i = n.axisDim = t.axis.dim;
        return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
    }

    function ic(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
    }

    function rc(t, e, n) {
        if (!Ef.node) {
            var i = e.getZr();
            Lw(i).records || (Lw(i).records = {}), ac(i, e);
            var r = Lw(i).records[t] || (Lw(i).records[t] = {});
            r.handler = n
        }
    }

    function ac(t, e) {
        function n(n, i) {
            t.on(n, function (n) {
                var r = uc(e);
                Bw(Lw(t).records, function (t) {
                    t && i(t, n, r.dispatchAction)
                }), oc(r.pendings, e)
            })
        }

        Lw(t).initialized || (Lw(t).initialized = !0, n("click", _(lc, "click")), n("mousemove", _(lc, "mousemove")), n("globalout", sc))
    }

    function oc(t, e) {
        var n, i = t.showTip.length, r = t.hideTip.length;
        i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
    }

    function sc(t, e, n) {
        t.handler("leave", null, n)
    }

    function lc(t, e, n, i) {
        e.handler(t, n, i)
    }

    function uc(t) {
        var e = {showTip: [], hideTip: []}, n = function (i) {
            var r = e[i.type];
            r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
        };
        return {dispatchAction: n, pendings: e}
    }

    function hc(t, e) {
        if (!Ef.node) {
            var n = e.getZr(), i = (Lw(n).records || {})[t];
            i && (Lw(n).records[t] = null)
        }
    }

    function cc() {
    }

    function dc(t, e, n, i) {
        fc(Rw(n).lastProp, i) || (Rw(n).lastProp = i, e ? Da(n, i, t) : (n.stopAnimation(), n.attr(i)))
    }

    function fc(t, e) {
        if (M(t) && M(e)) {
            var n = !0;
            return f(e, function (e, i) {
                n = n && fc(t[i], e)
            }), !!n
        }
        return t === e
    }

    function pc(t, e) {
        t[e.get("label.show") ? "show" : "hide"]()
    }

    function gc(t) {
        return {position: t.position.slice(), rotation: t.rotation || 0}
    }

    function vc(t, e, n) {
        var i = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function (t) {
            "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
        })
    }

    function mc(t) {
        var e = {componentType: t.mainType, componentIndex: t.componentIndex};
        return e[t.mainType + "Index"] = t.componentIndex, e
    }

    function yc(t, e, n, i) {
        var r, a, o = to(n - t.rotation), s = i[0] > i[1], l = "start" === e && !s || "start" !== e && s;
        return eo(o - Nw / 2) ? (a = l ? "bottom" : "top", r = "center") : eo(o - 1.5 * Nw) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * Nw > o && o > Nw / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: o,
            textAlign: r,
            textVerticalAlign: a
        }
    }

    function _c(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }

    function xc(t, e, n) {
        var i = t.get("axisLabel.showMinLabel"), r = t.get("axisLabel.showMaxLabel");
        e = e || [], n = n || [];
        var a = e[0], o = e[1], s = e[e.length - 1], l = e[e.length - 2], u = n[0], h = n[1], c = n[n.length - 1],
            d = n[n.length - 2];
        i === !1 ? (wc(a), wc(u)) : bc(a, o) && (i ? (wc(o), wc(h)) : (wc(a), wc(u))), r === !1 ? (wc(s), wc(c)) : bc(l, s) && (r ? (wc(l), wc(d)) : (wc(s), wc(c)))
    }

    function wc(t) {
        t && (t.ignore = !0)
    }

    function bc(t, e) {
        var n = t && t.getBoundingRect().clone(), i = e && e.getBoundingRect().clone();
        if (n && i) {
            var r = be([]);
            return Ie(r, r, -t.rotation), n.applyTransform(Se([], r, t.getLocalTransform())), i.applyTransform(Se([], r, e.getLocalTransform())), n.intersect(i)
        }
    }

    function Mc(t) {
        return "middle" === t || "center" === t
    }

    function Sc(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), u = [], h = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
                var p = l[f].coord;
                u[0] = p, u[1] = 0, h[0] = p, h[1] = n.tickDirection * o, c && (ae(u, u, c), ae(h, h, c));
                var g = new cm(ta({
                    anid: "tick_" + l[f].tickValue,
                    shape: {x1: u[0], y1: u[1], x2: h[0], y2: h[1]},
                    style: s(a.getLineStyle(), {stroke: e.get("axisLine.lineStyle.color")}),
                    z2: 2,
                    silent: !0
                }));
                t.group.add(g), d.push(g)
            }
            return d
        }
    }

    function Tc(t, e, n) {
        var i = e.axis, r = k(n.axisLabelShow, e.get("axisLabel.show"));
        if (r && !i.scale.isBlank()) {
            var a = e.getModel("axisLabel"), o = a.get("margin"), s = i.getViewLabels(),
                l = (k(n.labelRotate, a.get("rotate")) || 0) * Nw / 180, u = Hw(n.rotation, l, n.labelDirection),
                h = e.getCategories(!0), c = [], d = _c(e), p = e.get("triggerEvent");
            return f(s, function (r, s) {
                var l = r.tickValue, f = r.formattedLabel, g = r.rawLabel, v = a;
                h && h[l] && h[l].textStyle && (v = new Na(h[l].textStyle, a, e.ecModel));
                var m = v.getTextColor() || e.get("axisLine.lineStyle.color"), y = i.dataToCoord(l),
                    _ = [y, n.labelOffset + n.labelDirection * o],
                    x = new tm({anid: "label_" + l, position: _, rotation: u.rotation, silent: d, z2: 10});
                xa(x.style, v, {
                    text: f,
                    textAlign: v.getShallow("align", !0) || u.textAlign,
                    textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || u.textVerticalAlign,
                    textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m
                }), p && (x.eventData = mc(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform()
            }), c
        }
    }

    function Ic(t) {
        var e, n = t.get("type"), i = t.getModel(n + "Style");
        return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e
    }

    function Cc(t, e, n, i, r) {
        var a = n.get("value"), o = Ac(a, e.axis, e.ecModel, n.get("seriesDataIndices"), {
                precision: n.get("label.precision"),
                formatter: n.get("label.formatter")
            }), s = n.getModel("label"), l = Nm(s.get("padding") || 0), u = s.getFont(), h = Bn(o, u), c = r.position,
            d = h.width + l[1] + l[3], f = h.height + l[0] + l[2], p = r.align;
        "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
        var g = r.verticalAlign;
        "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), kc(c, d, f, i);
        var v = s.get("backgroundColor");
        v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = {
            shape: {
                x: 0,
                y: 0,
                width: d,
                height: f,
                r: s.get("borderRadius")
            },
            position: c.slice(),
            style: {
                text: o,
                textFont: u,
                textFill: s.getTextColor(),
                textPosition: "inside",
                fill: v,
                stroke: s.get("borderColor") || "transparent",
                lineWidth: s.get("borderWidth") || 0,
                shadowBlur: s.get("shadowBlur"),
                shadowColor: s.get("shadowColor"),
                shadowOffsetX: s.get("shadowOffsetX"),
                shadowOffsetY: s.get("shadowOffsetY")
            },
            z2: 10
        }
    }

    function kc(t, e, n, i) {
        var r = i.getWidth(), a = i.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
    }

    function Ac(t, e, n, i, r) {
        t = e.scale.parse(t);
        var a = e.scale.getLabel(t, {precision: r.precision}), o = r.formatter;
        if (o) {
            var s = {value: rh(e, t), seriesData: []};
            f(i, function (t) {
                var e = n.getSeriesByIndex(t.seriesIndex), i = t.dataIndexInside, r = e && e.getDataParams(i);
                r && s.seriesData.push(r)
            }), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s))
        }
        return a
    }

    function Dc(t, e, n) {
        var i = we();
        return Ie(i, i, n.rotation), Te(i, i, n.position), La([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
    }

    function Pc(t, e, n, i, r, a) {
        var o = Vw.innerTextLayout(n.rotation, 0, n.labelDirection);
        n.labelMargin = r.get("label.margin"), Cc(e, i, r, a, {
            position: Dc(i.axis, t, n),
            align: o.textAlign,
            verticalAlign: o.textVerticalAlign
        })
    }

    function Oc(t, e, n) {
        return n = n || 0, {x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n]}
    }

    function Lc(t, e, n) {
        return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
    }

    function Bc(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem, r = e.axis, a = {}, o = r.getAxesOnZeroOf()[0], s = r.position,
            l = o ? "onZero" : s, u = r.dim, h = i.getRect(), c = [h.x, h.x + h.width, h.y, h.y + h.height],
            d = {left: 0, right: 1, top: 0, bottom: 1, onZero: 2}, f = e.get("offset") || 0,
            p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (o) {
            var g = o.toGlobalCoord(o.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
        }
        a.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
        var v = {top: -1, bottom: 1, left: -1, right: 1};
        a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), k(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
        var m = e.get("axisLabel.rotate");
        return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a
    }

    function Ec(t, e, n, i, r, a) {
        var o = Gw.getAxisPointerClass(t.axisPointerClass);
        if (o) {
            var s = Zh(e);
            s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, i, a) : Rc(t, i)
        }
    }

    function Rc(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n), t._axisPointer = null
    }

    function zc(t, e) {
        var n = {};
        return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
    }

    function Fc(t) {
        return "x" === t.dim ? 0 : 1
    }

    function Nc(t) {
        var e = "cubic-bezier(0.23, 1, 0.32, 1)", n = "left " + t + "s " + e + ",top " + t + "s " + e;
        return p(Uw, function (t) {
            return t + "transition:" + n
        }).join(";")
    }

    function Vc(t) {
        var e = [], n = t.get("fontSize"), i = t.getTextColor();
        return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), Yw(["decoration", "align"], function (n) {
            var i = t.get(n);
            i && e.push("text-" + n + ":" + i)
        }), e.join(";")
    }

    function Wc(t) {
        var e = [], n = t.get("transitionDuration"), i = t.get("backgroundColor"), r = t.getModel("textStyle"),
            a = t.get("padding");
        return n && e.push(Nc(n)), i && (Ef.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + je(i)), e.push("filter:alpha(opacity=70)"))), Yw(["width", "color", "radius"], function (n) {
            var i = "border-" + n, r = qw(i), a = t.get(r);
            null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"))
        }), e.push(Vc(r)), null != a && e.push("padding:" + Nm(a).join("px ") + "px"), e.join(";") + ";"
    }

    function Hc(t, e) {
        if (Ef.wxa) return null;
        var n = document.createElement("div"), i = this._zr = e.getZr();
        this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
        var r = this;
        n.onmouseenter = function () {
            r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
        }, n.onmousemove = function (e) {
            if (e = e || window.event, !r._enterable) {
                var n = i.handler;
                pe(t, e, !0), n.dispatch("mousemove", e)
            }
        }, n.onmouseleave = function () {
            r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
        }
    }

    function Gc(t) {
        this._zr = t.getZr(), this._show = !1, this._hideTimeout
    }

    function Xc(t) {
        for (var e = t.pop(); t.length;) {
            var n = t.pop();
            n && (Na.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {formatter: n}), e = new Na(n, e, e.ecModel))
        }
        return e
    }

    function Zc(t, e) {
        return t.dispatchAction || y(e.dispatchAction, e)
    }

    function jc(t, e, n, i, r, a, o) {
        var s = n.getOuterSize(), l = s.width, u = s.height;
        return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + u + o > r ? e -= u + o : e += o), [t, e]
    }

    function Yc(t, e, n, i, r) {
        var a = n.getOuterSize(), o = a.width, s = a.height;
        return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
    }

    function qc(t, e, n) {
        var i = n[0], r = n[1], a = 5, o = 0, s = 0, l = e.width, u = e.height;
        switch (t) {
            case"inside":
                o = e.x + l / 2 - i / 2, s = e.y + u / 2 - r / 2;
                break;
            case"top":
                o = e.x + l / 2 - i / 2, s = e.y - r - a;
                break;
            case"bottom":
                o = e.x + l / 2 - i / 2, s = e.y + u + a;
                break;
            case"left":
                o = e.x - i - a, s = e.y + u / 2 - r / 2;
                break;
            case"right":
                o = e.x + l + a, s = e.y + u / 2 - r / 2
        }
        return [o, s]
    }

    function Uc(t) {
        return "center" === t || "middle" === t
    }

    function $c(t, e) {
        eb[t] = e
    }

    function Kc(t) {
        return eb[t]
    }

    function Qc(t, e, n) {
        var i = e.getBoxLayoutParams(), r = e.get("padding"), a = {width: n.getWidth(), height: n.getHeight()},
            o = xo(i, a, r);
        $m(e.get("orient"), t, e.get("itemGap"), o.width, o.height), wo(t, i, a, r)
    }

    function Jc(t, e) {
        var n = Nm(e.get("padding")), i = e.getItemStyle(["color", "opacity"]);
        i.fill = e.get("backgroundColor");
        var t = new hm({
            shape: {
                x: t.x - n[3],
                y: t.y - n[0],
                width: t.width + n[1] + n[3],
                height: t.height + n[0] + n[2],
                r: e.get("borderRadius")
            }, style: i, silent: !0, z2: -1
        });
        return t
    }

    function td(t) {
        return 0 === t.indexOf("my")
    }

    function ed(t) {
        this.model = t
    }

    function nd(t) {
        this.model = t
    }

    function id(t) {
        var e = {}, n = [], i = [];
        return t.eachRawSeries(function (t) {
            var r = t.coordinateSystem;
            if (!r || "cartesian2d" !== r.type && "polar" !== r.type) n.push(t); else {
                var a = r.getBaseAxis();
                if ("category" === a.type) {
                    var o = a.dim + "_" + a.index;
                    e[o] || (e[o] = {categoryAxis: a, valueAxis: r.getOtherAxis(a), series: []}, i.push({
                        axisDim: a.dim,
                        axisIndex: a.index
                    })), e[o].series.push(t)
                } else n.push(t)
            }
        }), {seriesGroupByCategoryAxis: e, other: n, meta: i}
    }

    function rd(t) {
        var e = [];
        return f(t, function (t) {
            var n = t.categoryAxis, i = t.valueAxis, r = i.dim, a = [" "].concat(p(t.series, function (t) {
                return t.name
            })), o = [n.model.getCategories()];
            f(t.series, function (t) {
                o.push(t.getRawData().mapArray(r, function (t) {
                    return t
                }))
            });
            for (var s = [a.join(cb)], l = 0; l < o[0].length; l++) {
                for (var u = [], h = 0; h < o.length; h++) u.push(o[h][l]);
                s.push(u.join(cb))
            }
            e.push(s.join("\n"))
        }), e.join("\n\n" + hb + "\n\n")
    }

    function ad(t) {
        return p(t, function (t) {
            var e = t.getRawData(), n = [t.name], i = [];
            return e.each(e.dimensions, function () {
                for (var t = arguments.length, r = arguments[t - 1], a = e.getName(r), o = 0; t - 1 > o; o++) i[o] = arguments[o];
                n.push((a ? a + cb : "") + i.join(cb))
            }), n.join("\n")
        }).join("\n\n" + hb + "\n\n")
    }

    function od(t) {
        var e = id(t);
        return {
            value: v([rd(e.seriesGroupByCategoryAxis), ad(e.other)], function (t) {
                return t.replace(/[\n\t\s]/g, "")
            }).join("\n\n" + hb + "\n\n"), meta: e.meta
        }
    }

    function sd(t) {
        return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }

    function ld(t) {
        var e = t.slice(0, t.indexOf("\n"));
        return e.indexOf(cb) >= 0 ? !0 : void 0
    }

    function ud(t) {
        for (var e = t.split(/\n+/g), n = sd(e.shift()).split(db), i = [], r = p(n, function (t) {
            return {name: t, data: []}
        }), a = 0; a < e.length; a++) {
            var o = sd(e[a]).split(db);
            i.push(o.shift());
            for (var s = 0; s < o.length; s++) r[s] && (r[s].data[a] = o[s])
        }
        return {series: r, categories: i}
    }

    function hd(t) {
        for (var e = t.split(/\n+/g), n = sd(e.shift()), i = [], r = 0; r < e.length; r++) {
            var a, o = sd(e[r]).split(db), s = "", l = !1;
            isNaN(o[0]) ? (l = !0, s = o[0], o = o.slice(1), i[r] = {
                name: s,
                value: []
            }, a = i[r].value) : a = i[r] = [];
            for (var u = 0; u < o.length; u++) a.push(+o[u]);
            1 === a.length && (l ? i[r].value = a[0] : i[r] = a[0])
        }
        return {name: n, data: i}
    }

    function cd(t, e) {
        var n = t.split(new RegExp("\n*" + hb + "\n*", "g")), i = {series: []};
        return f(n, function (t, n) {
            if (ld(t)) {
                var r = ud(t), a = e[n], o = a.axisDim + "Axis";
                a && (i[o] = i[o] || [], i[o][a.axisIndex] = {data: r.categories}, i.series = i.series.concat(r.series))
            } else {
                var r = hd(t);
                i.series.push(r)
            }
        }), i
    }

    function dd(t) {
        this._dom = null, this.model = t
    }

    function fd(t, e) {
        return p(t, function (t, n) {
            var i = e && e[n];
            return M(i) && !x(i) ? (M(t) && !x(t) && (t = t.value), s({value: t}, i)) : t
        })
    }

    function pd(t, e, n) {
        var i = vd(t);
        i[e] = n
    }

    function gd(t, e, n) {
        var i = vd(t), r = i[e];
        r === n && (i[e] = null)
    }

    function vd(t) {
        return t[fb] || (t[fb] = {})
    }

    function md(t) {
        ip.call(this), this._zr = t, this.group = new Gp, this._brushType, this._brushOption, this._panels, this._track = [], this._dragging, this._covers = [], this._creatingCover, this._creatingPanel, this._enableGlobalPan, this._uid = "brushController_" + Cb++, this._handlers = {}, gb(kb, function (t, e) {
            this._handlers[e] = y(t, this)
        }, this)
    }

    function yd(t, e) {
        var n = t._zr;
        t._enableGlobalPan || pd(n, Mb, t._uid), gb(t._handlers, function (t, e) {
            n.on(e, t)
        }), t._brushType = e.brushType, t._brushOption = r(i(Ib), e, !0)
    }

    function _d(t) {
        var e = t._zr;
        gd(e, Mb, t._uid), gb(t._handlers, function (t, n) {
            e.off(n, t)
        }), t._brushType = t._brushOption = null
    }

    function xd(t, e) {
        var n = Ab[e.brushType].createCover(t, e);
        return n.__brushOption = e, Md(n, e), t.group.add(n), n
    }

    function wd(t, e) {
        var n = Td(e);
        return n.endCreating && (n.endCreating(t, e), Md(e, e.__brushOption)), e
    }

    function bd(t, e) {
        var n = e.__brushOption;
        Td(e).updateCoverShape(t, e, n.range, n)
    }

    function Md(t, e) {
        var n = e.z;
        null == n && (n = xb), t.traverse(function (t) {
            t.z = n, t.z2 = n
        })
    }

    function Sd(t, e) {
        Td(e).updateCommon(t, e), bd(t, e)
    }

    function Td(t) {
        return Ab[t.__brushOption.brushType]
    }

    function Id(t, e, n) {
        var i = t._panels;
        if (!i) return !0;
        var r, a = t._transform;
        return gb(i, function (t) {
            t.isTargetByCursor(e, n, a) && (r = t)
        }), r
    }

    function Cd(t, e) {
        var n = t._panels;
        if (!n) return !0;
        var i = e.__brushOption.panelId;
        return null != i ? n[i] : !0
    }

    function kd(t) {
        var e = t._covers, n = e.length;
        return gb(e, function (e) {
            t.group.remove(e)
        }, t), e.length = 0, !!n
    }

    function Ad(t, e) {
        var n = vb(t._covers, function (t) {
            var e = t.__brushOption, n = i(e.range);
            return {brushType: e.brushType, panelId: e.panelId, range: n}
        });
        t.trigger("brush", n, {isEnd: !!e.isEnd, removeOnClick: !!e.removeOnClick})
    }

    function Dd(t) {
        var e = t._track;
        if (!e.length) return !1;
        var n = e[e.length - 1], i = e[0], r = n[0] - i[0], a = n[1] - i[1], o = _b(r * r + a * a, .5);
        return o > wb
    }

    function Pd(t) {
        var e = t.length - 1;
        return 0 > e && (e = 0), [t[0], t[e]]
    }

    function Od(t, e, n, i) {
        var r = new Gp;
        return r.add(new hm({
            name: "main",
            style: Rd(n),
            silent: !0,
            draggable: !0,
            cursor: "move",
            drift: pb(t, e, r, "nswe"),
            ondragend: pb(Ad, e, {isEnd: !0})
        })), gb(i, function (n) {
            r.add(new hm({
                name: n,
                style: {opacity: 0},
                draggable: !0,
                silent: !0,
                invisible: !0,
                drift: pb(t, e, r, n),
                ondragend: pb(Ad, e, {isEnd: !0})
            }))
        }), r
    }

    function Ld(t, e, n, i) {
        var r = i.brushStyle.lineWidth || 0, a = yb(r, bb), o = n[0][0], s = n[1][0], l = o - r / 2, u = s - r / 2,
            h = n[0][1], c = n[1][1], d = h - a + r / 2, f = c - a + r / 2, p = h - o, g = c - s, v = p + r, m = g + r;
        Ed(t, e, "main", o, s, p, g), i.transformable && (Ed(t, e, "w", l, u, a, m), Ed(t, e, "e", d, u, a, m), Ed(t, e, "n", l, u, v, a), Ed(t, e, "s", l, f, v, a), Ed(t, e, "nw", l, u, a, a), Ed(t, e, "ne", d, u, a, a), Ed(t, e, "sw", l, f, a, a), Ed(t, e, "se", d, f, a, a))
    }

    function Bd(t, e) {
        var n = e.__brushOption, i = n.transformable, r = e.childAt(0);
        r.useStyle(Rd(n)), r.attr({
            silent: !i,
            cursor: i ? "move" : "default"
        }), gb(["w", "e", "n", "s", "se", "sw", "ne", "nw"], function (n) {
            var r = e.childOfName(n), a = Nd(t, n);
            r && r.attr({silent: !i, invisible: !i, cursor: i ? Tb[a] + "-resize" : null})
        })
    }

    function Ed(t, e, n, i, r, a, o) {
        var s = e.childOfName(n);
        s && s.setShape(Xd(Gd(t, e, [[i, r], [i + a, r + o]])))
    }

    function Rd(t) {
        return s({strokeNoScale: !0}, t.brushStyle)
    }

    function zd(t, e, n, i) {
        var r = [mb(t, n), mb(e, i)], a = [yb(t, n), yb(e, i)];
        return [[r[0], a[0]], [r[1], a[1]]]
    }

    function Fd(t) {
        return Oa(t.group)
    }

    function Nd(t, e) {
        if (e.length > 1) {
            e = e.split("");
            var n = [Nd(t, e[0]), Nd(t, e[1])];
            return ("e" === n[0] || "w" === n[0]) && n.reverse(), n.join("")
        }
        var i = {w: "left", e: "right", n: "top", s: "bottom"}, r = {left: "w", right: "e", top: "n", bottom: "s"},
            n = Ba(i[e], Fd(t));
        return r[n]
    }

    function Vd(t, e, n, i, r, a, o) {
        var s = i.__brushOption, l = t(s.range), u = Hd(n, a, o);
        gb(r.split(""), function (t) {
            var e = Sb[t];
            l[e[0]][e[1]] += u[e[0]]
        }), s.range = e(zd(l[0][0], l[1][0], l[0][1], l[1][1])), Sd(n, i), Ad(n, {isEnd: !1})
    }

    function Wd(t, e, n, i) {
        var r = e.__brushOption.range, a = Hd(t, n, i);
        gb(r, function (t) {
            t[0] += a[0], t[1] += a[1]
        }), Sd(t, e), Ad(t, {isEnd: !1})
    }

    function Hd(t, e, n) {
        var i = t.group, r = i.transformCoordToLocal(e, n), a = i.transformCoordToLocal(0, 0);
        return [r[0] - a[0], r[1] - a[1]]
    }

    function Gd(t, e, n) {
        var r = Cd(t, e);
        return r && r !== !0 ? r.clipPath(n, t._transform) : i(n)
    }

    function Xd(t) {
        var e = mb(t[0][0], t[1][0]), n = mb(t[0][1], t[1][1]), i = yb(t[0][0], t[1][0]), r = yb(t[0][1], t[1][1]);
        return {x: e, y: n, width: i - e, height: r - n}
    }

    function Zd(t, e, n) {
        if (t._brushType) {
            var i = t._zr, r = t._covers, a = Id(t, e, n);
            if (!t._dragging) for (var o = 0; o < r.length; o++) {
                var s = r[o].__brushOption;
                if (a && (a === !0 || s.panelId === a.panelId) && Ab[s.brushType].contain(r[o], n[0], n[1])) return
            }
            a && i.setCursorStyle("crosshair")
        }
    }

    function jd(t) {
        var e = t.event;
        e.preventDefault && e.preventDefault()
    }

    function Yd(t, e, n) {
        return t.childOfName("main").contain(e, n)
    }

    function qd(t, e, n, r) {
        var a, o = t._creatingCover, s = t._creatingPanel, l = t._brushOption;
        if (t._track.push(n.slice()), Dd(t) || o) {
            if (s && !o) {
                "single" === l.brushMode && kd(t);
                var u = i(l);
                u.brushType = Ud(u.brushType, s), u.panelId = s === !0 ? null : s.panelId, o = t._creatingCover = xd(t, u), t._covers.push(o)
            }
            if (o) {
                var h = Ab[Ud(t._brushType, s)], c = o.__brushOption;
                c.range = h.getCreatingRange(Gd(t, o, t._track)), r && (wd(t, o), h.updateCommon(t, o)), bd(t, o), a = {isEnd: r}
            }
        } else r && "single" === l.brushMode && l.removeOnClick && Id(t, e, n) && kd(t) && (a = {
            isEnd: r,
            removeOnClick: !0
        });
        return a
    }

    function Ud(t, e) {
        return "auto" === t ? e.defaultBrushType : t
    }

    function $d(t) {
        if (this._dragging) {
            jd(t);
            var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY), n = qd(this, t, e, !0);
            this._dragging = !1, this._track = [], this._creatingCover = null, n && Ad(this, n)
        }
    }

    function Kd(t) {
        return {
            createCover: function (e, n) {
                return Od(pb(Vd, function (e) {
                    var n = [e, [0, 100]];
                    return t && n.reverse(), n
                }, function (e) {
                    return e[t]
                }), e, n, [["w", "e"], ["n", "s"]][t])
            }, getCreatingRange: function (e) {
                var n = Pd(e), i = mb(n[0][t], n[1][t]), r = yb(n[0][t], n[1][t]);
                return [i, r]
            }, updateCoverShape: function (e, n, i, r) {
                var a, o = Cd(e, n);
                if (o !== !0 && o.getLinearBrushOtherExtent) a = o.getLinearBrushOtherExtent(t, e._transform); else {
                    var s = e._zr;
                    a = [0, [s.getWidth(), s.getHeight()][1 - t]]
                }
                var l = [i, a];
                t && l.reverse(), Ld(e, n, l, r)
            }, updateCommon: Bd, contain: Yd
        }
    }

    function Qd(t, e, n) {
        var i = e.getComponentByElement(t.topTarget), r = i && i.coordinateSystem;
        return i && i !== n && !Db[i.mainType] && r && r.model !== n
    }

    function Jd(t) {
        return t = nf(t), function (e) {
            return Ra(e, t)
        }
    }

    function tf(t, e) {
        return t = nf(t), function (n) {
            var i = null != e ? e : n, r = i ? t.width : t.height, a = i ? t.x : t.y;
            return [a, a + (r || 0)]
        }
    }

    function ef(t, e, n) {
        return t = nf(t), function (i, r) {
            return t.contain(r[0], r[1]) && !Qd(i, e, n)
        }
    }

    function nf(t) {
        return gn.create(t)
    }

    function rf(t, e, n) {
        var i = this._targetInfoList = [], r = {}, a = of(e, t);
        Pb(zb, function (t, e) {
            (!n || !n.include || Ob(n.include, e) >= 0) && t(a, i, r)
        })
    }

    function af(t) {
        return t[0] > t[1] && t.reverse(), t
    }

    function of(t, e) {
        return ji(t, e, {includeMainTypes: Eb})
    }

    function sf(t, e, n, i) {
        var r = n.getAxis(["x", "y"][t]), a = af(p([0, 1], function (t) {
            return e ? r.coordToData(r.toLocalCoord(i[t])) : r.toGlobalCoord(r.dataToCoord(i[t]))
        })), o = [];
        return o[t] = a, o[1 - t] = [0 / 0, 0 / 0], {values: a, xyMinMax: o}
    }

    function lf(t, e, n, i) {
        return [e[0] - i[t] * n[0], e[1] - i[t] * n[1]]
    }

    function uf(t, e) {
        var n = hf(t), i = hf(e), r = [n[0] / i[0], n[1] / i[1]];
        return isNaN(r[0]) && (r[0] = 1), isNaN(r[1]) && (r[1] = 1), r
    }

    function hf(t) {
        return t ? [t[0][1] - t[0][0], t[1][1] - t[1][0]] : [0 / 0, 0 / 0]
    }

    function cf(t, e) {
        var n = gf(t);
        Hb(e, function (e, i) {
            for (var r = n.length - 1; r >= 0; r--) {
                var a = n[r];
                if (a[i]) break
            }
            if (0 > r) {
                var o = t.queryComponents({mainType: "dataZoom", subType: "select", id: i})[0];
                if (o) {
                    var s = o.getPercentRange();
                    n[0][i] = {dataZoomId: i, start: s[0], end: s[1]}
                }
            }
        }), n.push(e)
    }

    function df(t) {
        var e = gf(t), n = e[e.length - 1];
        e.length > 1 && e.pop();
        var i = {};
        return Hb(n, function (t, n) {
            for (var r = e.length - 1; r >= 0; r--) {
                var t = e[r][n];
                if (t) {
                    i[n] = t;
                    break
                }
            }
        }), i
    }

    function ff(t) {
        t[Gb] = null
    }

    function pf(t) {
        return gf(t).length
    }

    function gf(t) {
        var e = t[Gb];
        return e || (e = t[Gb] = [{}]), e
    }

    function vf(t, e) {
        var n = t[e] - t[1 - e];
        return {span: Math.abs(n), sign: n > 0 ? -1 : 0 > n ? 1 : e ? -1 : 1}
    }

    function mf(t, e) {
        return Math.min(e[1], Math.max(e[0], t))
    }

    function yf(t) {
        return u(jb, t) >= 0
    }

    function _f(t, e) {
        t = t.slice();
        var n = p(t, yo);
        e = (e || []).slice();
        var i = p(e, yo);
        return function (r, a) {
            f(t, function (t, o) {
                for (var s = {name: t, capital: n[o]}, l = 0; l < e.length; l++) s[e[l]] = t + i[l];
                r.call(a, s)
            })
        }
    }

    function xf(t, e, n) {
        function i(t, e) {
            return u(e.nodes, t) >= 0
        }

        function r(t, i) {
            var r = !1;
            return e(function (e) {
                f(n(t, e) || [], function (t) {
                    i.records[e.name][t] && (r = !0)
                })
            }), r
        }

        function a(t, i) {
            i.nodes.push(t), e(function (e) {
                f(n(t, e) || [], function (t) {
                    i.records[e.name][t] = !0
                })
            })
        }

        return function (n) {
            function o(t) {
                !i(t, s) && r(t, s) && (a(t, s), l = !0)
            }

            var s = {nodes: [], records: {}};
            if (e(function (t) {
                s.records[t.name] = {}
            }), !n) return s;
            a(n, s);
            var l;
            do l = !1, t(o); while (l);
            return s
        }
    }

    function wf(t, e, n) {
        var i = [1 / 0, -1 / 0];
        return qb(n, function (t) {
            var n = t.getData();
            n && qb(n.mapDimension(e, !0), function (t) {
                var e = n.getApproximateExtent(t);
                e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
            })
        }), i[1] < i[0] && (i = [0 / 0, 0 / 0]), bf(t, i), i
    }

    function bf(t, e) {
        var n = t.getAxisModel(), i = n.getMin(!0), r = "category" === n.get("type"), a = r && n.getCategories().length;
        null != i && "dataMin" !== i && "function" != typeof i ? e[0] = i : r && (e[0] = a > 0 ? 0 : 0 / 0);
        var o = n.getMax(!0);
        return null != o && "dataMax" !== o && "function" != typeof o ? e[1] = o : r && (e[1] = a > 0 ? a - 1 : 0 / 0), n.get("scale", !0) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)), e
    }

    function Mf(t, e) {
        var n = t.getAxisModel(), i = t._percentWindow, r = t._valueWindow;
        if (i) {
            var a = Qa(r, [0, 500]);
            a = Math.min(a, 20);
            var o = e || 0 === i[0] && 100 === i[1];
            n.setRange(o ? null : +r[0].toFixed(a), o ? null : +r[1].toFixed(a))
        }
    }

    function Sf(t) {
        var e = t._minMaxSpan = {}, n = t._dataZoomModel;
        qb(["min", "max"], function (i) {
            e[i + "Span"] = n.get(i + "Span");
            var r = n.get(i + "ValueSpan");
            if (null != r && (e[i + "ValueSpan"] = r, r = t.getAxisModel().axis.scale.parse(r), null != r)) {
                var a = t._dataExtent;
                e[i + "Span"] = ja(a[0] + r, a, [0, 100], !0)
            }
        })
    }

    function Tf(t) {
        var e = {};
        return Kb(["start", "end", "startValue", "endValue", "throttle"], function (n) {
            t.hasOwnProperty(n) && (e[n] = t[n])
        }), e
    }

    function If(t, e) {
        var n = t._rangePropMode, i = t.get("rangeMode");
        Kb([["start", "startValue"], ["end", "endValue"]], function (t, r) {
            var a = null != e[t[0]], o = null != e[t[1]];
            a && !o ? n[r] = "percent" : !a && o ? n[r] = "value" : i ? n[r] = i[r] : a && (n[r] = "percent")
        })
    }

    function Cf(t, e, n) {
        (this._brushController = new md(n.getZr())).on("brush", y(this._onBrush, this)).mount(), this._isZoomActive
    }

    function kf(t) {
        var e = {};
        return f(["xAxisIndex", "yAxisIndex"], function (n) {
            e[n] = t[n], null == e[n] && (e[n] = "all"), (e[n] === !1 || "none" === e[n]) && (e[n] = [])
        }), e
    }

    function Af(t, e) {
        t.setIconStatus("back", pf(e) > 1 ? "emphasis" : "normal")
    }

    function Df(t, e, n, i, r) {
        var a = n._isZoomActive;
        i && "takeGlobalCursor" === i.type && (a = "dataZoomSelect" === i.key ? i.dataZoomSelectActive : !1), n._isZoomActive = a, t.setIconStatus("zoom", a ? "emphasis" : "normal");
        var o = new rf(kf(t.option), e, {include: ["grid"]});
        n._brushController.setPanels(o.makePanelOpts(r, function (t) {
            return t.xAxisDeclared && !t.yAxisDeclared ? "lineX" : !t.xAxisDeclared && t.yAxisDeclared ? "lineY" : "rect"
        })).enableBrush(a ? {brushType: "auto", brushStyle: {lineWidth: 0, fill: "rgba(0,0,0,0.2)"}} : !1)
    }

    function Pf(t) {
        this.model = t
    }

    var Of = 2311, Lf = function () {
        return Of++
    }, Bf = {};
    Bf = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
        browser: {},
        os: {},
        node: !1,
        wxa: !0,
        canvasSupported: !0,
        svgSupported: !1,
        touchEventsSupported: !0,
        domSupported: !1
    } : "undefined" == typeof document && "undefined" != typeof self ? {
        browser: {},
        os: {},
        node: !1,
        worker: !0,
        canvasSupported: !0,
        domSupported: !1
    } : "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        worker: !1,
        canvasSupported: !0,
        svgSupported: !0,
        domSupported: !1
    } : e(navigator.userAgent);
    var Ef = Bf, Rf = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        }, zf = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        }, Ff = Object.prototype.toString, Nf = Array.prototype, Vf = Nf.forEach, Wf = Nf.filter, Hf = Nf.slice,
        Gf = Nf.map, Xf = Nf.reduce, Zf = {}, jf = function () {
            return Zf.createCanvas()
        };
    Zf.createCanvas = function () {
        return document.createElement("canvas")
    };
    var Yf, qf = "__ec_primitive__";
    z.prototype = {
        constructor: z, get: function (t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null
        }, set: function (t, e) {
            return this.data[t] = e
        }, each: function (t, e) {
            void 0 !== e && (t = y(t, e));
            for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n)
        }, removeKey: function (t) {
            delete this.data[t]
        }
    };
    var Uf = (Object.freeze || Object)({
            $override: n,
            clone: i,
            merge: r,
            mergeAll: a,
            extend: o,
            defaults: s,
            createCanvas: jf,
            getContext: l,
            indexOf: u,
            inherits: h,
            mixin: c,
            isArrayLike: d,
            each: f,
            map: p,
            reduce: g,
            filter: v,
            find: m,
            bind: y,
            curry: _,
            isArray: x,
            isFunction: w,
            isString: b,
            isObject: M,
            isBuiltInObject: S,
            isTypedArray: T,
            isDom: I,
            eqNaN: C,
            retrieve: k,
            retrieve2: A,
            retrieve3: D,
            slice: P,
            normalizeCssArray: O,
            assert: L,
            trim: B,
            setAsPrimitive: E,
            isPrimitive: R,
            createHashMap: F,
            concatArray: N,
            noop: V
        }), $f = "undefined" == typeof Float32Array ? Array : Float32Array, Kf = q, Qf = U, Jf = ee, tp = ne,
        ep = (Object.freeze || Object)({
            create: W,
            copy: H,
            clone: G,
            set: X,
            add: Z,
            scaleAndAdd: j,
            sub: Y,
            len: q,
            length: Kf,
            lenSquare: U,
            lengthSquare: Qf,
            mul: $,
            div: K,
            dot: Q,
            scale: J,
            normalize: te,
            distance: ee,
            dist: Jf,
            distanceSquare: ne,
            distSquare: tp,
            negate: ie,
            lerp: re,
            applyTransform: ae,
            min: oe,
            max: se
        });
    le.prototype = {
        constructor: le, _dragStart: function (t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event))
        }, _drag: function (t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX, i = t.offsetY, r = n - this._x, a = i - this._y;
                this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(ue(e, t), "drag", t.event);
                var o = this.findHover(n, i, e).target, s = this._dropTarget;
                this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(ue(o, t), "dragenter", t.event))
            }
        }, _dragEnd: function (t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(ue(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }
    };
    var np = Array.prototype.slice, ip = function (t) {
        this._$handlers = {}, this._$eventProcessor = t
    };
    ip.prototype = {
        constructor: ip, one: function (t, e, n, i) {
            var r = this._$handlers;
            if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
            e = he(this, e), r[t] || (r[t] = []);
            for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
            return r[t].push({h: n, one: !0, query: e, ctx: i || this}), this
        }, on: function (t, e, n, i) {
            var r = this._$handlers;
            if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
            e = he(this, e), r[t] || (r[t] = []);
            for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
            return r[t].push({h: n, one: !1, query: e, ctx: i || this}), this
        }, isSilent: function (t) {
            var e = this._$handlers;
            return e[t] && e[t].length
        }, off: function (t, e) {
            var n = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h !== e && i.push(n[t][r]);
                    n[t] = i
                }
                n[t] && 0 === n[t].length && delete n[t]
            } else delete n[t];
            return this
        }, trigger: function (t) {
            var e = this._$handlers[t], n = this._$eventProcessor;
            if (e) {
                var i = arguments, r = i.length;
                r > 3 && (i = np.call(i, 1));
                for (var a = e.length, o = 0; a > o;) {
                    var s = e[o];
                    if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++; else {
                        switch (r) {
                            case 1:
                                s.h.call(s.ctx);
                                break;
                            case 2:
                                s.h.call(s.ctx, i[1]);
                                break;
                            case 3:
                                s.h.call(s.ctx, i[1], i[2]);
                                break;
                            default:
                                s.h.apply(s.ctx, i)
                        }
                        s.one ? (e.splice(o, 1), a--) : o++
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this
        }, triggerWithContext: function (t) {
            var e = this._$handlers[t], n = this._$eventProcessor;
            if (e) {
                var i = arguments, r = i.length;
                r > 4 && (i = np.call(i, 1, i.length - 1));
                for (var a = i[i.length - 1], o = e.length, s = 0; o > s;) {
                    var l = e[s];
                    if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++; else {
                        switch (r) {
                            case 1:
                                l.h.call(a);
                                break;
                            case 2:
                                l.h.call(a, i[1]);
                                break;
                            case 3:
                                l.h.call(a, i[1], i[2]);
                                break;
                            default:
                                l.h.apply(a, i)
                        }
                        l.one ? (e.splice(s, 1), o--) : s++
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this
        }
    };
    var rp = "undefined" != typeof window && !!window.addEventListener,
        ap = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, op = rp ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        }, sp = "silent";
    _e.prototype.dispose = function () {
    };
    var lp = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        up = function (t, e, n, i) {
            ip.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new _e, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, le.call(this), this.setHandlerProxy(n)
        };
    up.prototype = {
        constructor: up, setHandlerProxy: function (t) {
            this.proxy && this.proxy.dispose(), t && (f(lp, function (e) {
                t.on && t.on(e, this[e], this)
            }, this), t.handler = this), this.proxy = t
        }, mousemove: function (t) {
            var e = t.zrX, n = t.zrY, i = this._hovered, r = i.target;
            r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
            var a = this._hovered = this.findHover(e, n), o = a.target, s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t)
        }, mouseout: function (t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, n = t.toElement || t.relatedTarget;
            do n = n && n.parentNode; while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
            !e && this.trigger("globalout", {event: t})
        }, resize: function () {
            this._hovered = {}
        }, dispatch: function (t, e) {
            var n = this[t];
            n && n.call(this, e)
        }, dispose: function () {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null
        }, setCursorStyle: function (t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        }, dispatchToElement: function (t, e, n) {
            t = t || {};
            var i = t.target;
            if (!i || !i.silent) {
                for (var r = "on" + e, a = me(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble);) ;
                a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
                }))
            }
        }, findHover: function (t, e, n) {
            for (var i = this.storage.getDisplayList(), r = {x: t, y: e}, a = i.length - 1; a >= 0; a--) {
                var o;
                if (i[a] !== n && !i[a].ignore && (o = xe(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== sp)) {
                    r.target = i[a];
                    break
                }
            }
            return r
        }
    }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        up.prototype[t] = function (e) {
            var n = this.findHover(e.zrX, e.zrY), i = n.target;
            if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i; else if ("mouseup" === t) this._upEl = i; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || Jf(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    }), c(up, ip), c(up, le);
    var hp = "undefined" == typeof Float32Array ? Array : Float32Array, cp = (Object.freeze || Object)({
        create: we,
        identity: be,
        copy: Me,
        mul: Se,
        translate: Te,
        rotate: Ie,
        scale: Ce,
        invert: ke,
        clone: Ae
    }), dp = be, fp = 5e-5, pp = function (t) {
        t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    }, gp = pp.prototype;
    gp.transform = null, gp.needLocalTransform = function () {
        return De(this.rotation) || De(this.position[0]) || De(this.position[1]) || De(this.scale[0] - 1) || De(this.scale[1] - 1)
    };
    var vp = [];
    gp.updateTransform = function () {
        var t = this.parent, e = t && t.transform, n = this.needLocalTransform(), i = this.transform;
        if (!n && !e) return void (i && dp(i));
        i = i || we(), n ? this.getLocalTransform(i) : dp(i), e && (n ? Se(i, t.transform, i) : Me(i, t.transform)), this.transform = i;
        var r = this.globalScaleRatio;
        if (null != r && 1 !== r) {
            this.getGlobalScale(vp);
            var a = vp[0] < 0 ? -1 : 1, o = vp[1] < 0 ? -1 : 1, s = ((vp[0] - a) * r + a) / vp[0] || 0,
                l = ((vp[1] - o) * r + o) / vp[1] || 0;
            i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l
        }
        this.invTransform = this.invTransform || we(), ke(this.invTransform, i)
    }, gp.getLocalTransform = function (t) {
        return pp.getLocalTransform(this, t)
    }, gp.setTransform = function (t) {
        var e = this.transform, n = t.dpr || 1;
        e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
    }, gp.restoreTransform = function (t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var mp = [], yp = we();
    gp.setLocalTransform = function (t) {
        if (t) {
            var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = this.position, r = this.scale;
            De(e - 1) && (e = Math.sqrt(e)), De(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e)
        }
    }, gp.decomposeTransform = function () {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (Se(mp, t.invTransform, e), e = mp);
            var n = this.origin;
            n && (n[0] || n[1]) && (yp[4] = n[0], yp[5] = n[1], Se(mp, e, yp), mp[4] -= n[0], mp[5] -= n[1], e = mp), this.setLocalTransform(e)
        }
    }, gp.getGlobalScale = function (t) {
        var e = this.transform;
        return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
    }, gp.transformCoordToLocal = function (t, e) {
        var n = [t, e], i = this.invTransform;
        return i && ae(n, n, i), n
    }, gp.transformCoordToGlobal = function (t, e) {
        var n = [t, e], i = this.transform;
        return i && ae(n, n, i), n
    }, pp.getLocalTransform = function (t, e) {
        e = e || [], dp(e);
        var n = t.origin, i = t.scale || [1, 1], r = t.rotation || 0, a = t.position || [0, 0];
        return n && (e[4] -= n[0], e[5] -= n[1]), Ce(e, e, i), r && Ie(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e
    };
    var _p = {
        linear: function (t) {
            return t
        }, quadraticIn: function (t) {
            return t * t
        }, quadraticOut: function (t) {
            return t * (2 - t)
        }, quadraticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, cubicIn: function (t) {
            return t * t * t
        }, cubicOut: function (t) {
            return --t * t * t + 1
        }, cubicInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, quarticIn: function (t) {
            return t * t * t * t
        }, quarticOut: function (t) {
            return 1 - --t * t * t * t
        }, quarticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, quinticIn: function (t) {
            return t * t * t * t * t
        }, quinticOut: function (t) {
            return --t * t * t * t * t + 1
        }, quinticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, sinusoidalIn: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, sinusoidalOut: function (t) {
            return Math.sin(t * Math.PI / 2)
        }, sinusoidalInOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }, exponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        }, exponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, exponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
        }, circularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, circularOut: function (t) {
            return Math.sqrt(1 - --t * t)
        }, circularInOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, elasticIn: function (t) {
            var e, n = .1, i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
        }, elasticOut: function (t) {
            var e, n = .1, i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
        }, elasticInOut: function (t) {
            var e, n = .1, i = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
        }, backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, backOut: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        }, backInOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }, bounceIn: function (t) {
            return 1 - _p.bounceOut(1 - t)
        }, bounceOut: function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, bounceInOut: function (t) {
            return .5 > t ? .5 * _p.bounceIn(2 * t) : .5 * _p.bounceOut(2 * t - 1) + .5
        }
    };
    Pe.prototype = {
        constructor: Pe, step: function (t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
            var n = (t - this._startTime - this._pausedTime) / this._life;
            if (!(0 > n)) {
                n = Math.min(n, 1);
                var i = this.easing, r = "string" == typeof i ? _p[i] : i, a = "function" == typeof r ? r(n) : n;
                return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
            }
        }, restart: function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
        }, fire: function (t, e) {
            t = "on" + t, this[t] && this[t](this._target, e)
        }, pause: function () {
            this._paused = !0
        }, resume: function () {
            this._paused = !1
        }
    };
    var xp = function () {
        this.head = null, this.tail = null, this._len = 0
    }, wp = xp.prototype;
    wp.insert = function (t) {
        var e = new bp(t);
        return this.insertEntry(e), e
    }, wp.insertEntry = function (t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
    }, wp.remove = function (t) {
        var e = t.prev, n = t.next;
        e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
    }, wp.len = function () {
        return this._len
    }, wp.clear = function () {
        this.head = this.tail = null, this._len = 0
    };
    var bp = function (t) {
        this.value = t, this.next, this.prev
    }, Mp = function (t) {
        this._list = new xp, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
    }, Sp = Mp.prototype;
    Sp.put = function (t, e) {
        var n = this._list, i = this._map, r = null;
        if (null == i[t]) {
            var a = n.len(), o = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var s = n.head;
                n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
            }
            o ? o.value = e : o = new bp(e), o.key = t, n.insertEntry(o), i[t] = o
        }
        return r
    }, Sp.get = function (t) {
        var e = this._map[t], n = this._list;
        return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
    }, Sp.clear = function () {
        this._list.clear(), this._map = {}
    };
    var Tp = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    }, Ip = new Mp(20), Cp = null, kp = Ye, Ap = qe, Dp = (Object.freeze || Object)({
        parse: He,
        lift: Ze,
        toHex: je,
        fastLerp: Ye,
        fastMapToColor: kp,
        lerp: qe,
        mapToColor: Ap,
        modifyHSL: Ue,
        modifyAlpha: $e,
        stringify: Ke
    }), Pp = Array.prototype.slice, Op = function (t, e, n, i) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Qe, this._setter = i || Je, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
    Op.prototype = {
        when: function (t, e) {
            var n = this._tracks;
            for (var i in e) if (e.hasOwnProperty(i)) {
                if (!n[i]) {
                    n[i] = [];
                    var r = this._getter(this._target, i);
                    if (null == r) continue;
                    0 !== t && n[i].push({time: 0, value: ln(r)})
                }
                n[i].push({time: t, value: e[i]})
            }
            return this
        }, during: function (t) {
            return this._onframeList.push(t), this
        }, pause: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0
        }, resume: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1
        }, isPaused: function () {
            return !!this._paused
        }, _doneCallback: function () {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this)
        }, start: function (t, e) {
            var n, i = this, r = 0, a = function () {
                r--, r || i._doneCallback()
            };
            for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                var s = cn(this, t, a, this._tracks[o], o, e);
                s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s)
            }
            if (n) {
                var l = n.onframe;
                n.onframe = function (t, e) {
                    l(t, e);
                    for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
                }
            }
            return r || this._doneCallback(), this
        }, stop: function (t) {
            for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
                var r = e[i];
                t && r.onframe(this._target, 1), n && n.removeClip(r)
            }
            e.length = 0
        }, delay: function (t) {
            return this._delay = t, this
        }, done: function (t) {
            return t && this._doneList.push(t), this
        }, getClips: function () {
            return this._clipList
        }
    };
    var Lp = 1;
    "undefined" != typeof window && (Lp = Math.max(window.devicePixelRatio || 1, 1));
    var Bp = 0, Ep = Lp, Rp = function () {
    };
    1 === Bp ? Rp = function () {
        for (var t in arguments) throw new Error(arguments[t])
    } : Bp > 1 && (Rp = function () {
        for (var t in arguments) console.log(arguments[t])
    });
    var zp = Rp, Fp = function () {
        this.animators = []
    };
    Fp.prototype = {
        constructor: Fp, animate: function (t, e) {
            var n, i = !1, r = this, a = this.__zr;
            if (t) {
                var o = t.split("."), s = r;
                i = "shape" === o[0];
                for (var l = 0, h = o.length; h > l; l++) s && (s = s[o[l]]);
                s && (n = s)
            } else n = r;
            if (!n) return void zp('Property "' + t + '" is not existed in element ' + r.id);
            var c = r.animators, d = new Op(n, e);
            return d.during(function () {
                r.dirty(i)
            }).done(function () {
                c.splice(u(c, d), 1)
            }), c.push(d), a && a.animation.addAnimator(d), d
        }, stopAnimation: function (t) {
            for (var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);
            return e.length = 0, this
        }, animateTo: function (t, e, n, i, r, a) {
            dn(this, t, e, n, i, r, a)
        }, animateFrom: function (t, e, n, i, r, a) {
            dn(this, t, e, n, i, r, a, !0)
        }
    };
    var Np = function (t) {
        pp.call(this, t), ip.call(this, t), Fp.call(this, t), this.id = t.id || Lf()
    };
    Np.prototype = {
        type: "element", name: "", __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function (t, e) {
            switch (this.draggable) {
                case"horizontal":
                    e = 0;
                    break;
                case"vertical":
                    t = 0
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
        }, beforeUpdate: function () {
        }, afterUpdate: function () {
        }, update: function () {
            this.updateTransform()
        }, traverse: function () {
        }, attrKV: function (t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var n = this[t];
                    n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
                }
            } else this[t] = e
        }, hide: function () {
            this.ignore = !0, this.__zr && this.__zr.refresh()
        }, show: function () {
            this.ignore = !1, this.__zr && this.__zr.refresh()
        }, attr: function (t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (M(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1), this
        }, setClipPath: function (t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
        }, removeClipPath: function () {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
        }, addSelfToZr: function (t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        }, removeSelfFromZr: function (t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    }, c(Np, Fp), c(Np, pp), c(Np, ip);
    var Vp = ae, Wp = Math.min, Hp = Math.max;
    gn.prototype = {
        constructor: gn, union: function (t) {
            var e = Wp(t.x, this.x), n = Wp(t.y, this.y);
            this.width = Hp(t.x + t.width, this.x + this.width) - e, this.height = Hp(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
        }, applyTransform: function () {
            var t = [], e = [], n = [], i = [];
            return function (r) {
                if (r) {
                    t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, Vp(t, t, r), Vp(e, e, r), Vp(n, n, r), Vp(i, i, r), this.x = Wp(t[0], e[0], n[0], i[0]), this.y = Wp(t[1], e[1], n[1], i[1]);
                    var a = Hp(t[0], e[0], n[0], i[0]), o = Hp(t[1], e[1], n[1], i[1]);
                    this.width = a - this.x, this.height = o - this.y
                }
            }
        }(), calculateTransform: function (t) {
            var e = this, n = t.width / e.width, i = t.height / e.height, r = we();
            return Te(r, r, [-e.x, -e.y]), Ce(r, r, [n, i]), Te(r, r, [t.x, t.y]), r
        }, intersect: function (t) {
            if (!t) return !1;
            t instanceof gn || (t = gn.create(t));
            var e = this, n = e.x, i = e.x + e.width, r = e.y, a = e.y + e.height, o = t.x, s = t.x + t.width, l = t.y,
                u = t.y + t.height;
            return !(o > i || n > s || l > a || r > u)
        }, contain: function (t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        }, clone: function () {
            return new gn(this.x, this.y, this.width, this.height)
        }, copy: function (t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        }, plain: function () {
            return {x: this.x, y: this.y, width: this.width, height: this.height}
        }
    }, gn.create = function (t) {
        return new gn(t.x, t.y, t.width, t.height)
    };
    var Gp = function (t) {
        t = t || {}, Np.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0
    };
    Gp.prototype = {
        constructor: Gp, isGroup: !0, type: "group", silent: !1, children: function () {
            return this._children.slice()
        }, childAt: function (t) {
            return this._children[t]
        }, childOfName: function (t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n]
        }, childCount: function () {
            return this._children.length
        }, add: function (t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
        }, addBefore: function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children, i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
            }
            return this
        }, _doAdd: function (t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage, n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof Gp && t.addChildrenToStorage(e)), n && n.refresh()
        }, remove: function (t) {
            var e = this.__zr, n = this.__storage, i = this._children, r = u(i, t);
            return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Gp && t.delChildrenFromStorage(n)), e && e.refresh(), this)
        }, removeAll: function () {
            var t, e, n = this._children, i = this.__storage;
            for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof Gp && t.delChildrenFromStorage(i)), t.parent = null;
            return n.length = 0, this
        }, eachChild: function (t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i)
            }
            return this
        }, traverse: function (t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                t.call(e, i), "group" === i.type && i.traverse(t, e)
            }
            return this
        }, addChildrenToStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.addToStorage(n), n instanceof Gp && n.addChildrenToStorage(t)
            }
        }, delChildrenFromStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.delFromStorage(n), n instanceof Gp && n.delChildrenFromStorage(t)
            }
        }, dirty: function () {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
        }, getBoundingRect: function (t) {
            for (var e = null, n = new gn(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
                var o = i[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect(), l = o.getLocalTransform(r);
                    l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s))
                }
            }
            return e || n
        }
    }, h(Gp, Np);
    var Xp = 32, Zp = 7, jp = function () {
        this._roots = [], this._displayList = [], this._displayListLen = 0
    };
    jp.prototype = {
        constructor: jp, traverse: function (t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
        }, getDisplayList: function (t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList
        }, updateDisplayList: function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen, Ef.canvasSupported && Mn(n, Sn)
        }, _updateAndAddDisplayable: function (t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var i = t.clipPath;
                if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
                    }
                    t.__dirty = !1
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
            }
        }, addRoot: function (t) {
            t.__storage !== this && (t instanceof Gp && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
        }, delRoot: function (t) {
            if (null == t) {
                for (var e = 0; e < this._roots.length; e++) {
                    var n = this._roots[e];
                    n instanceof Gp && n.delChildrenFromStorage(this)
                }
                return this._roots = [], this._displayList = [], void (this._displayListLen = 0)
            }
            if (t instanceof Array) for (var e = 0, i = t.length; i > e; e++) this.delRoot(t[e]); else {
                var r = u(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Gp && t.delChildrenFromStorage(this))
            }
        }, addToStorage: function (t) {
            return t && (t.__storage = this, t.dirty(!1)), this
        }, delFromStorage: function (t) {
            return t && (t.__storage = null), this
        }, dispose: function () {
            this._renderList = this._roots = null
        }, displayableSortFunc: Sn
    };
    var Yp = {
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            textShadowBlur: 1,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textBoxShadowBlur: 1,
            textBoxShadowOffsetX: 1,
            textBoxShadowOffsetY: 1
        }, qp = function (t, e, n) {
            return Yp.hasOwnProperty(e) ? n *= t.dpr : n
        },
        Up = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
        $p = function (t) {
            this.extendFrom(t, !1)
        };
    $p.prototype = {
        constructor: $p,
        fill: "#000",
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function (t, e, n) {
            for (var i = this, r = n && n.style, a = !r, o = 0; o < Up.length; o++) {
                var s = Up[o], l = s[0];
                (a || i[l] !== r[l]) && (t[l] = qp(t, l, i[l] || s[1]))
            }
            if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
                var u = i.lineWidth;
                t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function () {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function () {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function (t, e) {
            if (t) for (var n in t) !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
        },
        set: function (t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function () {
            var t = new this.constructor;
            return t.extendFrom(this, !0), t
        },
        getGradient: function (t, e, n) {
            for (var i = "radial" === e.type ? In : Tn, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);
            return r
        }
    };
    for (var Kp = $p.prototype, Qp = 0; Qp < Up.length; Qp++) {
        var Jp = Up[Qp];
        Jp[0] in Kp || (Kp[Jp[0]] = Jp[1])
    }
    $p.getGradient = Kp.getGradient;
    var tg = function (t, e) {
        this.image = t, this.repeat = e, this.type = "pattern"
    };
    tg.prototype.getCanvasPattern = function (t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    };
    var eg = function (t, e, n) {
        var i;
        n = n || Ep, "string" == typeof t ? i = kn(t, e, n) : M(t) && (i = t, t = i.id), this.id = t, this.dom = i;
        var r = i.style;
        r && (i.onselectstart = Cn, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
    };
    eg.prototype = {
        constructor: eg,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function () {
            return this.__endIndex - this.__startIndex
        },
        initContext: function () {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
        },
        createBackBuffer: function () {
            var t = this.dpr;
            this.domBack = kn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
        },
        resize: function (t, e) {
            var n = this.dpr, i = this.dom, r = i.style, a = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n))
        },
        clear: function (t, e) {
            var n = this.dom, i = this.ctx, r = n.width, a = n.height, e = e || this.clearColor,
                o = this.motionBlur && !t, s = this.lastFrameAlpha, l = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
                var u;
                e.colorStops ? (u = e.__canvasGradient || $p.getGradient(i, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: a
                }), e.__canvasGradient = u) : e.image && (u = tg.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, a), i.restore()
            }
            if (o) {
                var h = this.domBack;
                i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, a), i.restore()
            }
        }
    };
    var ng = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
            setTimeout(t, 16)
        }, ig = new Mp(50), rg = {}, ag = 0, og = 5e3, sg = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, lg = "12px sans-serif",
        ug = {};
    ug.measureText = function (t, e) {
        var n = l();
        return n.font = e || lg, n.measureText(t)
    };
    var hg = {left: 1, right: 1, center: 1}, cg = {top: 1, bottom: 1, middle: 1},
        dg = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
        fg = new gn, pg = function () {
        };
    pg.prototype = {
        constructor: pg, drawRectText: function (t, e) {
            var n = this.style;
            e = n.textRect || e, this.__dirty && Kn(n, !0);
            var i = n.text;
            if (null != i && (i += ""), pi(i, n)) {
                t.save();
                var r = this.transform;
                n.transformText ? this.setTransform(t) : r && (fg.copy(e), fg.applyTransform(r), e = fg), Jn(this, t, i, n, e), t.restore()
            }
        }
    }, gi.prototype = {
        constructor: gi,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function () {
        },
        afterBrush: function () {
        },
        brush: function () {
        },
        getBoundingRect: function () {
        },
        contain: function (t, e) {
            return this.rectContain(t, e)
        },
        traverse: function (t, e) {
            t.call(e, this)
        },
        rectContain: function (t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect();
            return i.contain(n[0], n[1])
        },
        dirty: function () {
            this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
        },
        animateStyle: function (t) {
            return this.animate("style", t)
        },
        attrKV: function (t, e) {
            "style" !== t ? Np.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function (t, e) {
            return this.style.set(t, e), this.dirty(!1), this
        },
        useStyle: function (t) {
            return this.style = new $p(t, this), this.dirty(!1), this
        }
    }, h(gi, Np), c(gi, pg), vi.prototype = {
        constructor: vi, type: "image", brush: function (t, e) {
            var n = this.style, i = n.image;
            n.bind(t, this, e);
            var r = this._image = Dn(i, this._image, this, this.onload);
            if (r && On(r)) {
                var a = n.x || 0, o = n.y || 0, s = n.width, l = n.height, u = r.width / r.height;
                if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
                    var h = n.sx || 0, c = n.sy || 0;
                    t.drawImage(r, h, c, n.sWidth, n.sHeight, a, o, s, l)
                } else if (n.sx && n.sy) {
                    var h = n.sx, c = n.sy, d = s - h, f = l - c;
                    t.drawImage(r, h, c, d, f, a, o, s, l)
                } else t.drawImage(r, a, o, s, l);
                null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
            }
        }, getBoundingRect: function () {
            var t = this.style;
            return this._rect || (this._rect = new gn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
        }
    }, h(vi, gi);
    var gg = 1e5, vg = 314159, mg = .01, yg = .001, _g = new gn(0, 0, 0, 0), xg = new gn(0, 0, 0, 0),
        wg = function (t, e, n) {
            this.type = "canvas";
            var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Ep, this._singleCanvas = i, this.root = t;
            var r = t.style;
            r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var a = this._zlevelList = [], s = this._layers = {};
            if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
                var l = t.width, u = t.height;
                null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;
                var h = new eg(t, this, this.dpr);
                h.__builtin__ = !0, h.initContext(), s[vg] = h, h.zlevel = vg, a.push(vg), this._domRoot = t
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var c = this._domRoot = bi(this._width, this._height);
                t.appendChild(c)
            }
            this._hoverlayer = null, this._hoverElements = []
        };
    wg.prototype = {
        constructor: wg, getType: function () {
            return "canvas"
        }, isSingleCanvas: function () {
            return this._singleCanvas
        }, getViewportRoot: function () {
            return this._domRoot
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            return t ? {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0} : void 0
        }, refresh: function (t) {
            var e = this.storage.getDisplayList(!0), n = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var i = 0; i < n.length; i++) {
                var r = n[i], a = this._layers[r];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === i ? this._backgroundColor : null;
                    a.refresh(o)
                }
            }
            return this.refreshHover(), this
        }, addHover: function (t, e) {
            if (!t.__hoverMir) {
                var n = new t.constructor({style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent});
                return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n
            }
        }, removeHover: function (t) {
            var e = t.__hoverMir, n = this._hoverElements, i = u(n, e);
            i >= 0 && n.splice(i, 1), t.__hoverMir = null
        }, clearHover: function () {
            for (var t = this._hoverElements, e = 0; e < t.length; e++) {
                var n = t[e].__from;
                n && (n.__hoverMir = null)
            }
            t.length = 0
        }, refreshHover: function () {
            var t = this._hoverElements, e = t.length, n = this._hoverlayer;
            if (n && n.clear(), e) {
                Mn(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(gg));
                var i = {};
                n.ctx.save();
                for (var r = 0; e > r;) {
                    var a = t[r], o = a.__from;
                    o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--)
                }
                n.ctx.restore()
            }
        }, getHoverLayer: function () {
            return this.getLayer(gg)
        }, _paintList: function (t, e, n) {
            if (this._redrawId === n) {
                e = e || !1, this._updateLayerStatus(t);
                var i = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !i) {
                    var r = this;
                    ng(function () {
                        r._paintList(t, e, n)
                    })
                }
            }
        }, _compositeManually: function () {
            var t = this.getLayer(vg).ctx, e = this._domRoot.width, n = this._domRoot.height;
            t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
                i.virtual && t.drawImage(i.dom, 0, 0, e, n)
            })
        }, _doPaintList: function (t, e) {
            for (var n = [], i = 0; i < this._zlevelList.length; i++) {
                var r = this._zlevelList[i], a = this._layers[r];
                a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a)
            }
            for (var o = !0, s = 0; s < n.length; s++) {
                var a = n[s], l = a.ctx, u = {};
                l.save();
                var h = e ? a.__startIndex : a.__drawIndex, c = !e && a.incremental && Date.now, d = c && Date.now(),
                    p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (a.__startIndex === a.__endIndex) a.clear(!1, p); else if (h === a.__startIndex) {
                    var g = t[h];
                    g.incremental && g.notClear && !e || a.clear(!1, p)
                }
                -1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a.__startIndex);
                for (var v = h; v < a.__endIndex; v++) {
                    var m = t[v];
                    if (this._doPaintEl(m, a, e, u), m.__dirty = m.__dirtyText = !1, c) {
                        var y = Date.now() - d;
                        if (y > 15) break
                    }
                }
                a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), u.prevElClipPaths && l.restore(), l.restore()
            }
            return Ef.wxa && f(this._layers, function (t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw()
            }), o
        }, _doPaintEl: function (t, e, n, i) {
            var r = e.ctx, a = t.transform;
            if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && _i(t, this._width, this._height))) {
                var o = t.__clipPaths;
                (!i.prevElClipPaths || xi(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), wi(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
            }
        }, getLayer: function (t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = vg);
            var n = this._layers[t];
            return n || (n = new eg("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
        }, insertLayer: function (t, e) {
            var n = this._layers, i = this._zlevelList, r = i.length, a = null, o = -1, s = this._domRoot;
            if (n[t]) return void zp("ZLevel " + t + " has been used already");
            if (!yi(e)) return void zp("Layer of zlevel " + t + " is not valid");
            if (r > 0 && t > i[0]) {
                for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++) ;
                a = n[i[o]]
            }
            if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {
                var l = a.dom;
                l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
            } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
        }, eachLayer: function (t, e) {
            var n, i, r = this._zlevelList;
            for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
        }, eachBuiltinLayer: function (t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i)
        }, eachOtherLayer: function (t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i)
        }, getLayers: function () {
            return this._layers
        }, _updateLayerStatus: function (t) {
            function e(t) {
                r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
            }

            if (this.eachBuiltinLayer(function (t) {
                t.__dirty = t.__used = !1
            }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
                var i = t[n];
                if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
                    this._needsManuallyCompositing = !0;
                    break
                }
            }
            for (var r = null, a = 0, n = 0; n < t.length; n++) {
                var o, i = t[n], s = i.zlevel;
                i.incremental ? (o = this.getLayer(s + yg, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? mg : 0), this._needsManuallyCompositing), o.__builtin__ || zp("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n))
            }
            e(n), this.eachBuiltinLayer(function (t) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
            })
        }, clear: function () {
            return this.eachBuiltinLayer(this._clearLayer), this
        }, _clearLayer: function (t) {
            t.clear()
        }, setBackgroundColor: function (t) {
            this._backgroundColor = t
        }, configLayer: function (t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? r(n[t], e, !0) : n[t] = e;
                for (var i = 0; i < this._zlevelList.length; i++) {
                    var a = this._zlevelList[i];
                    if (a === t || a === t + mg) {
                        var o = this._layers[a];
                        r(o, n[t], !0)
                    }
                }
            }
        }, delLayer: function (t) {
            var e = this._layers, n = this._zlevelList, i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1))
        }, resize: function (t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
                    n.style.width = t + "px", n.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    f(this._progressiveLayers, function (n) {
                        n.resize(t, e)
                    }), this.refresh(!0)
                }
                this._width = t, this._height = e
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(vg).resize(t, e)
            }
            return this
        }, clearLayer: function (t) {
            var e = this._layers[t];
            e && e.clear()
        }, dispose: function () {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
        }, getRenderedCanvas: function (t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[vg].dom;
            var e = new eg("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var n = e.dom.width, i = e.dom.height, r = e.ctx;
                this.eachLayer(function (t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                })
            } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                var l = o[s];
                this._doPaintEl(l, e, !0, a)
            }
            return e.dom
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, _getSize: function (t) {
            var e = this._opts, n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t], a = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var o = this.root, s = document.defaultView.getComputedStyle(o);
            return (o[i] || mi(s[n]) || mi(o.style[n])) - (mi(s[r]) || 0) - (mi(s[a]) || 0) | 0
        }, pathToImage: function (t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"), i = n.getContext("2d"), r = t.getBoundingRect(), a = t.style,
                o = a.shadowBlur * e, s = a.shadowOffsetX * e, l = a.shadowOffsetY * e,
                u = a.hasStroke() ? a.lineWidth : 0, h = Math.max(u / 2, -s + o), c = Math.max(u / 2, s + o),
                d = Math.max(u / 2, -l + o), f = Math.max(u / 2, l + o), p = r.width + h + c, g = r.height + d + f;
            n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
            var v = {position: t.position, rotation: t.rotation, scale: t.scale};
            t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
            var m = vi, y = new m({style: {x: 0, y: 0, image: n}});
            return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y
        }
    };
    var bg = function (t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
        }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, ip.call(this)
    };
    bg.prototype = {
        constructor: bg, addClip: function (t) {
            this._clips.push(t)
        }, addAnimator: function (t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
        }, removeClip: function (t) {
            var e = u(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        }, removeAnimator: function (t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
            t.animation = null
        }, _update: function () {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
                var s = n[o], l = s.step(t, e);
                l && (r.push(l), a.push(s))
            }
            for (var o = 0; i > o;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
            i = r.length;
            for (var o = 0; i > o; o++) a[o].fire(r[o]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
        }, _startLoop: function () {
            function t() {
                e._running && (ng(t), !e._paused && e._update())
            }

            var e = this;
            this._running = !0, ng(t)
        }, start: function () {
            this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
        }, stop: function () {
            this._running = !1
        }, pause: function () {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        }, resume: function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        }, clear: function () {
            this._clips = []
        }, isFinished: function () {
            return !this._clips.length
        }, animate: function (t, e) {
            e = e || {};
            var n = new Op(t, e.loop, e.getter, e.setter);
            return this.addAnimator(n), n
        }
    }, c(bg, ip);
    var Mg = function () {
        this._track = []
    };
    Mg.prototype = {
        constructor: Mg, recognize: function (t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t)
        }, clear: function () {
            return this._track.length = 0, this
        }, _doTrack: function (t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {points: [], touches: [], target: e, event: t}, a = 0, o = i.length; o > a; a++) {
                    var s = i[a], l = de(n, s, {});
                    r.points.push([l.zrX, l.zrY]), r.touches.push(s)
                }
                this._track.push(r)
            }
        }, _recognize: function (t) {
            for (var e in Sg) if (Sg.hasOwnProperty(e)) {
                var n = Sg[e](this._track, t);
                if (n) return n
            }
        }
    };
    var Sg = {
            pinch: function (t, e) {
                var n = t.length;
                if (n) {
                    var i = (t[n - 1] || {}).points, r = (t[n - 2] || {}).points || i;
                    if (r && r.length > 1 && i && i.length > 1) {
                        var a = Mi(i) / Mi(r);
                        !isFinite(a) && (a = 1), e.pinchScale = a;
                        var o = Si(i);
                        return e.pinchX = o[0], e.pinchY = o[1], {type: "pinch", target: t[0].target, event: e}
                    }
                }
            }
        }, Tg = 300,
        Ig = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Cg = ["touchstart", "touchend", "touchmove"],
        kg = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1}, Ag = p(Ig, function (t) {
            var e = t.replace("mouse", "pointer");
            return kg[e] ? e : t
        }), Dg = {
            mousemove: function (t) {
                t = pe(this.dom, t), this.trigger("mousemove", t)
            }, mouseout: function (t) {
                t = pe(this.dom, t);
                var e = t.toElement || t.relatedTarget;
                if (e != this.dom) for (; e && 9 != e.nodeType;) {
                    if (e === this.dom) return;
                    e = e.parentNode
                }
                this.trigger("mouseout", t)
            }, touchstart: function (t) {
                t = pe(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, Ii(this, t, "start"), Dg.mousemove.call(this, t), Dg.mousedown.call(this, t), Ci(this)
            }, touchmove: function (t) {
                t = pe(this.dom, t), t.zrByTouch = !0, Ii(this, t, "change"), Dg.mousemove.call(this, t), Ci(this)
            }, touchend: function (t) {
                t = pe(this.dom, t), t.zrByTouch = !0, Ii(this, t, "end"), Dg.mouseup.call(this, t), +new Date - this._lastTouchMoment < Tg && Dg.click.call(this, t), Ci(this)
            }, pointerdown: function (t) {
                Dg.mousedown.call(this, t)
            }, pointermove: function (t) {
                ki(t) || Dg.mousemove.call(this, t)
            }, pointerup: function (t) {
                Dg.mouseup.call(this, t)
            }, pointerout: function (t) {
                ki(t) || Dg.mouseout.call(this, t)
            }
        };
    f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        Dg[t] = function (e) {
            e = pe(this.dom, e), this.trigger(t, e)
        }
    });
    var Pg = Di.prototype;
    Pg.dispose = function () {
        for (var t = Ig.concat(Cg), e = 0; e < t.length; e++) {
            var n = t[e];
            ve(this.dom, Ti(n), this._handlers[n])
        }
    }, Pg.setCursor = function (t) {
        this.dom.style && (this.dom.style.cursor = t || "default")
    }, c(Di, ip);
    var Og = !Ef.canvasSupported, Lg = {canvas: wg}, Bg = {}, Eg = "4.0.5", Rg = function (t, e, n) {
        n = n || {}, this.dom = e, this.id = t;
        var i = this, r = new jp, a = n.renderer;
        if (Og) {
            if (!Lg.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            a = "vml"
        } else a && Lg[a] || (a = "canvas");
        var o = new Lg[a](e, r, n, t);
        this.storage = r, this.painter = o;
        var s = Ef.node || Ef.worker ? null : new Di(o.getViewportRoot());
        this.handler = new up(r, o, s, o.root), this.animation = new bg({stage: {update: y(this.flush, this)}}), this.animation.start(), this._needsRefresh;
        var l = r.delFromStorage, u = r.addToStorage;
        r.delFromStorage = function (t) {
            l.call(r, t), t && t.removeSelfFromZr(i)
        }, r.addToStorage = function (t) {
            u.call(r, t), t.addSelfToZr(i)
        }
    };
    Rg.prototype = {
        constructor: Rg, getId: function () {
            return this.id
        }, add: function (t) {
            this.storage.addRoot(t), this._needsRefresh = !0
        }, remove: function (t) {
            this.storage.delRoot(t), this._needsRefresh = !0
        }, configLayer: function (t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
        }, setBackgroundColor: function (t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
        }, refreshImmediately: function () {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
        }, refresh: function () {
            this._needsRefresh = !0
        }, flush: function () {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
        }, addHover: function (t, e) {
            if (this.painter.addHover) {
                var n = this.painter.addHover(t, e);
                return this.refreshHover(), n
            }
        }, removeHover: function (t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
        }, clearHover: function () {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
        }, refreshHover: function () {
            this._needsRefreshHover = !0
        }, refreshHoverImmediately: function () {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
        }, resize: function (t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
        }, clearAnimation: function () {
            this.animation.clear()
        }, getWidth: function () {
            return this.painter.getWidth()
        }, getHeight: function () {
            return this.painter.getHeight()
        }, pathToImage: function (t, e) {
            return this.painter.pathToImage(t, e)
        }, setCursorStyle: function (t) {
            this.handler.setCursorStyle(t)
        }, findHover: function (t, e) {
            return this.handler.findHover(t, e)
        }, on: function (t, e, n) {
            this.handler.on(t, e, n)
        }, off: function (t, e) {
            this.handler.off(t, e)
        }, trigger: function (t, e) {
            this.handler.trigger(t, e)
        }, clear: function () {
            this.storage.delRoot(), this.painter.clear()
        }, dispose: function () {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Ei(this.id)
        }
    };
    var zg = (Object.freeze || Object)({version: Eg, init: Pi, dispose: Oi, getInstance: Li, registerPainter: Bi}),
        Fg = f, Ng = M, Vg = x, Wg = "series\x00",
        Hg = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        Gg = 0, Xg = ".", Zg = "___EC__COMPONENT__CONTAINER___", jg = 0, Yg = function (t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, n, i) {
                for (var r = {}, a = 0; a < t.length; a++) {
                    var o = t[a][1];
                    if (!(n && u(n, o) >= 0 || i && u(i, o) < 0)) {
                        var s = e.getShallow(o);
                        null != s && (r[t[a][0]] = s)
                    }
                }
                return r
            }
        },
        qg = Yg([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        Ug = {
            getLineStyle: function (t) {
                var e = qg(this, t), n = this.getLineDash(e.lineWidth);
                return n && (e.lineDash = n), e
            }, getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"), n = Math.max(t, 2), i = 4 * t;
                return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
            }
        },
        $g = Yg([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
        Kg = {
            getAreaStyle: function (t, e) {
                return $g(this, t, e)
            }
        }, Qg = Math.pow, Jg = Math.sqrt, tv = 1e-8, ev = 1e-4, nv = Jg(3), iv = 1 / 3, rv = W(), av = W(), ov = W(),
        sv = Math.min, lv = Math.max, uv = Math.sin, hv = Math.cos, cv = 2 * Math.PI, dv = W(), fv = W(), pv = W(),
        gv = [], vv = [], mv = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, yv = [], _v = [], xv = [], wv = [],
        bv = Math.min, Mv = Math.max, Sv = Math.cos, Tv = Math.sin, Iv = Math.sqrt, Cv = Math.abs,
        kv = "undefined" != typeof Float32Array, Av = function (t) {
            this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
        };
    Av.prototype = {
        constructor: Av,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function (t, e) {
            this._ux = Cv(1 / Ep / t) || 0, this._uy = Cv(1 / Ep / e) || 0
        },
        getContext: function () {
            return this._ctx
        },
        beginPath: function (t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
        },
        moveTo: function (t, e) {
            return this.addData(mv.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
        },
        lineTo: function (t, e) {
            var n = Cv(t - this._xi) > this._ux || Cv(e - this._yi) > this._uy || this._len < 5;
            return this.addData(mv.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
        },
        bezierCurveTo: function (t, e, n, i, r, a) {
            return this.addData(mv.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this
        },
        quadraticCurveTo: function (t, e, n, i) {
            return this.addData(mv.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
        },
        arc: function (t, e, n, i, r, a) {
            return this.addData(mv.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = Sv(r) * n + t, this._yi = Tv(r) * n + e, this
        },
        arcTo: function (t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
        },
        rect: function (t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(mv.R, t, e, n, i), this
        },
        closePath: function () {
            this.addData(mv.Z);
            var t = this._ctx, e = this._x0, n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
        },
        fill: function (t) {
            t && t.fill(), this.toStatic()
        },
        stroke: function (t) {
            t && t.stroke(), this.toStatic()
        },
        setLineDash: function (t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function (t) {
            return this._dashOffset = t, this
        },
        len: function () {
            return this._len
        },
        setData: function (t) {
            var e = t.length;
            this.data && this.data.length == e || !kv || (this.data = new Float32Array(e));
            for (var n = 0; e > n; n++) this.data[n] = t[n];
            this._len = e
        },
        appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
            kv && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (var r = 0; e > r; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
            this._len = i
        },
        addData: function (t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
                this._prevCmd = t
            }
        },
        _expandData: function () {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function () {
            return this._lineDash
        },
        _dashedLineTo: function (t, e) {
            var n, i, r = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi,
                u = this._yi, h = t - l, c = e - u, d = Iv(h * h + c * c), f = l, p = u, g = o.length;
            for (h /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * h, p -= a * c; h > 0 && t >= f || 0 > h && f >= t || 0 == h && (c > 0 && e >= p || 0 > c && p >= e);) i = this._dashIdx, n = o[i], f += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? bv(f, t) : Mv(f, t), c >= 0 ? bv(p, e) : Mv(p, e));
            h = f - t, c = p - e, this._dashOffset = -Iv(h * h + c * c)
        },
        _dashedBezierTo: function (t, e, n, i, r, a) {
            var o, s, l, u, h, c = this._dashSum, d = this._dashOffset, f = this._lineDash, p = this._ctx, g = this._xi,
                v = this._yi, m = or, y = 0, _ = this._dashIdx, x = f.length, w = 0;
            for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += Iv(s * s + l * l);
            for (; x > _ && (w += f[_], !(w > d)); _++) ;
            for (o = (w - d) / y; 1 >= o;) u = m(g, t, n, r, o), h = m(v, e, i, a, o), _ % 2 ? p.moveTo(u, h) : p.lineTo(u, h), o += f[_] / y, _ = (_ + 1) % x;
            _ % 2 !== 0 && p.lineTo(r, a), s = r - u, l = a - h, this._dashOffset = -Iv(s * s + l * l)
        },
        _dashedQuadraticTo: function (t, e, n, i) {
            var r = n, a = i;
            n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a)
        },
        toStatic: function () {
            var t = this.data;
            t instanceof Array && (t.length = this._len, kv && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function () {
            yv[0] = yv[1] = xv[0] = xv[1] = Number.MAX_VALUE, _v[0] = _v[1] = wv[0] = wv[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
                var o = t[a++];
                switch (1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {
                    case mv.M:
                        i = t[a++], r = t[a++], e = i, n = r, xv[0] = i, xv[1] = r, wv[0] = i, wv[1] = r;
                        break;
                    case mv.L:
                        _r(e, n, t[a], t[a + 1], xv, wv), e = t[a++], n = t[a++];
                        break;
                    case mv.C:
                        xr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], xv, wv), e = t[a++], n = t[a++];
                        break;
                    case mv.Q:
                        wr(e, n, t[a++], t[a++], t[a], t[a + 1], xv, wv), e = t[a++], n = t[a++];
                        break;
                    case mv.A:
                        var s = t[a++], l = t[a++], u = t[a++], h = t[a++], c = t[a++], d = t[a++] + c,
                            f = (t[a++], 1 - t[a++]);
                        1 == a && (i = Sv(c) * u + s, r = Tv(c) * h + l), br(s, l, u, h, c, d, f, xv, wv), e = Sv(d) * u + s, n = Tv(d) * h + l;
                        break;
                    case mv.R:
                        i = e = t[a++], r = n = t[a++];
                        var p = t[a++], g = t[a++];
                        _r(i, r, i + p, r + g, xv, wv);
                        break;
                    case mv.Z:
                        e = i, n = r
                }
                oe(yv, yv, xv), se(_v, _v, wv)
            }
            return 0 === a && (yv[0] = yv[1] = _v[0] = _v[1] = 0), new gn(yv[0], yv[1], _v[0] - yv[0], _v[1] - yv[1])
        },
        rebuildPath: function (t) {
            for (var e, n, i, r, a, o, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h > c;) {
                var d = s[c++];
                switch (1 == c && (i = s[c], r = s[c + 1], e = i, n = r), d) {
                    case mv.M:
                        e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
                        break;
                    case mv.L:
                        a = s[c++], o = s[c++], (Cv(a - i) > l || Cv(o - r) > u || c === h - 1) && (t.lineTo(a, o), i = a, r = o);
                        break;
                    case mv.C:
                        t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                        break;
                    case mv.Q:
                        t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                        break;
                    case mv.A:
                        var f = s[c++], p = s[c++], g = s[c++], v = s[c++], m = s[c++], y = s[c++], _ = s[c++],
                            x = s[c++], w = g > v ? g : v, b = g > v ? 1 : g / v, M = g > v ? v / g : 1,
                            S = Math.abs(g - v) > .001, T = m + y;
                        S ? (t.translate(f, p), t.rotate(_), t.scale(b, M), t.arc(0, 0, w, m, T, 1 - x), t.scale(1 / b, 1 / M), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, T, 1 - x), 1 == c && (e = Sv(m) * g + f, n = Tv(m) * v + p), i = Sv(T) * g + f, r = Tv(T) * v + p;
                        break;
                    case mv.R:
                        e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                        break;
                    case mv.Z:
                        t.closePath(), i = e, r = n
                }
            }
        }
    }, Av.CMD = mv;
    var Dv = 2 * Math.PI, Pv = 2 * Math.PI, Ov = Av.CMD, Lv = 2 * Math.PI, Bv = 1e-4, Ev = [-1, -1, -1], Rv = [-1, -1],
        zv = tg.prototype.getCanvasPattern, Fv = Math.abs, Nv = new Av(!0);
    zr.prototype = {
        constructor: zr, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function (t, e) {
            var n = this.style, i = this.path || Nv, r = n.hasStroke(), a = n.hasFill(), o = n.fill, s = n.stroke,
                l = a && !!o.colorStops, u = r && !!s.colorStops, h = a && !!o.image, c = r && !!s.image;
            if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var d;
                l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d))
            }
            l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = zv.call(o, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = zv.call(s, t));
            var f = n.lineDash, p = n.lineDashOffset, g = !!t.setLineDash, v = this.getGlobalScale();
            if (i.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != n.fillOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m
            } else i.fill(t);
            if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m
            } else i.stroke(t);
            f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
        }, buildPath: function () {
        }, createPathProxy: function () {
            this.path = new Av
        }, getBoundingRect: function () {
            var t = this._rect, e = this.style, n = !t;
            if (n) {
                var i = this.path;
                i || (i = this.path = new Av), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    r.copy(t);
                    var a = e.lineWidth, o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
                }
                return r
            }
            return t
        }, contain: function (t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect(), r = this.style;
            if (t = n[0], e = n[1], i.contain(t, e)) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Rr(a, o / s, t, e))) return !0
                }
                if (r.hasFill()) return Er(a, t, e)
            }
            return !1
        }, dirty: function (t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
        }, animateShape: function (t) {
            return this.animate("shape", t)
        }, attrKV: function (t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : gi.prototype.attrKV.call(this, t, e)
        }, setShape: function (t, e) {
            var n = this.shape;
            if (n) {
                if (M(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]); else n[t] = e;
                this.dirty(!0)
            }
            return this
        }, getLineScale: function () {
            var t = this.transform;
            return t && Fv(t[0] - 1) > 1e-10 && Fv(t[3] - 1) > 1e-10 ? Math.sqrt(Fv(t[0] * t[3] - t[2] * t[1])) : 1
        }
    }, zr.extend = function (t) {
        var e = function (e) {
            zr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
                this.shape = this.shape || {};
                var i = this.shape;
                for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
            }
            t.init && t.init.call(this, e)
        };
        h(e, zr);
        for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
        return e
    }, h(zr, gi);
    var Vv = Av.CMD, Wv = [[], [], []], Hv = Math.sqrt, Gv = Math.atan2, Xv = function (t, e) {
        var n, i, r, a, o, s, l = t.data, u = Vv.M, h = Vv.C, c = Vv.L, d = Vv.R, f = Vv.A, p = Vv.Q;
        for (r = 0, a = 0; r < l.length;) {
            switch (n = l[r++], a = r, i = 0, n) {
                case u:
                    i = 1;
                    break;
                case c:
                    i = 1;
                    break;
                case h:
                    i = 3;
                    break;
                case p:
                    i = 2;
                    break;
                case f:
                    var g = e[4], v = e[5], m = Hv(e[0] * e[0] + e[1] * e[1]), y = Hv(e[2] * e[2] + e[3] * e[3]),
                        _ = Gv(-e[1] / y, e[0] / m);
                    l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;
                    break;
                case d:
                    s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
            }
            for (o = 0; i > o; o++) {
                var s = Wv[o];
                s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
            }
        }
    }, Zv = Math.sqrt, jv = Math.sin, Yv = Math.cos, qv = Math.PI, Uv = function (t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }, $v = function (t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (Uv(t) * Uv(e))
    }, Kv = function (t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos($v(t, e))
    }, Qv = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, Jv = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, tm = function (t) {
        gi.call(this, t)
    };
    tm.prototype = {
        constructor: tm, type: "text", brush: function (t, e) {
            var n = this.style;
            this.__dirty && Kn(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
            var i = n.text;
            null != i && (i += ""), pi(i, n) && (this.setTransform(t), Jn(this, t, i, n, null, e), this.restoreTransform(t))
        }, getBoundingRect: function () {
            var t = this.style;
            if (this.__dirty && Kn(t, !0), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var n = Bn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (n.x += t.x || 0, n.y += t.y || 0, hi(t.textStroke, t.textStrokeWidth)) {
                    var i = t.textStrokeWidth;
                    n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
                }
                this._rect = n
            }
            return this._rect
        }
    }, h(tm, gi);
    var em = zr.extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, n) {
                n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        }), nm = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
        im = function (t) {
            return Ef.browser.ie && Ef.browser.version >= 11 ? function () {
                var e, n = this.__clipPaths, i = this.style;
                if (n) for (var r = 0; r < n.length; r++) {
                    var a = n[r], o = a && a.shape, s = a && a.type;
                    if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                        for (var l = 0; l < nm.length; l++) nm[l][2] = i[nm[l][0]], i[nm[l][0]] = nm[l][1];
                        e = !0;
                        break
                    }
                }
                if (t.apply(this, arguments), e) for (var l = 0; l < nm.length; l++) i[nm[l][0]] = nm[l][2]
            } : t
        }, rm = zr.extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            brush: im(zr.prototype.brush),
            buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = e.startAngle, s = e.endAngle,
                    l = e.clockwise, u = Math.cos(o), h = Math.sin(o);
                t.moveTo(u * r + n, h * r + i), t.lineTo(u * a + n, h * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath()
            }
        }), am = zr.extend({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = 2 * Math.PI;
                t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
            }
        }), om = function (t, e) {
            for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) r += ee(t[a - 1], t[a]);
            var o = r / 2;
            o = n > o ? n : o;
            for (var a = 0; o > a; a++) {
                var s, l, u, h = a / (o - 1) * (e ? n : n - 1), c = Math.floor(h), d = h - c, f = t[c % n];
                e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);
                var p = d * d, g = d * p;
                i.push([Xr(s[0], f[0], l[0], u[0], d, p, g), Xr(s[1], f[1], l[1], u[1], d, p, g)])
            }
            return i
        }, sm = function (t, e, n, i) {
            var r, a, o, s, l = [], u = [], h = [], c = [];
            if (i) {
                o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
                for (var d = 0, f = t.length; f > d; d++) oe(o, o, t[d]), se(s, s, t[d]);
                oe(o, o, i[0]), se(s, s, i[1])
            }
            for (var d = 0, f = t.length; f > d; d++) {
                var p = t[d];
                if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f]; else {
                    if (0 === d || d === f - 1) {
                        l.push(G(t[d]));
                        continue
                    }
                    r = t[d - 1], a = t[d + 1]
                }
                Y(u, a, r), J(u, u, e);
                var g = ee(p, r), v = ee(p, a), m = g + v;
                0 !== m && (g /= m, v /= m), J(h, u, -g), J(c, u, v);
                var y = Z([], p, h), _ = Z([], p, c);
                i && (se(y, y, o), oe(y, y, s), se(_, _, o), oe(_, _, s)), l.push(y), l.push(_)
            }
            return n && l.push(l.shift()), l
        }, lm = zr.extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, e) {
                Zr(t, e, !0)
            }
        }), um = zr.extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                Zr(t, e, !1)
            }
        }), hm = zr.extend({
            type: "rect", shape: {r: 0, x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.x, i = e.y, r = e.width, a = e.height;
                e.r ? $n(t, e) : t.rect(n, i, r, a), t.closePath()
            }
        }), cm = zr.extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.x1, i = e.y1, r = e.x2, a = e.y2, o = e.percent;
                0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        }), dm = [], fm = zr.extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.x1, i = e.y1, r = e.x2, a = e.y2, o = e.cpx1, s = e.cpy1, l = e.cpx2, u = e.cpy2, h = e.percent;
                0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (vr(n, o, r, h, dm), o = dm[1], r = dm[2], vr(i, s, a, h, dm), s = dm[1], a = dm[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > h && (hr(n, o, l, r, h, dm), o = dm[1], l = dm[2], r = dm[3], hr(i, s, u, a, h, dm), s = dm[1], u = dm[2], a = dm[3]), t.bezierCurveTo(o, s, l, u, r, a)))
            },
            pointAt: function (t) {
                return jr(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = jr(this.shape, t, !0);
                return te(e, e)
            }
        }), pm = zr.extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = Math.max(e.r, 0), a = e.startAngle, o = e.endAngle, s = e.clockwise,
                    l = Math.cos(a), u = Math.sin(a);
                t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s)
            }
        }), gm = zr.extend({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
            }, buildPath: function (t, e) {
                for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
            }, afterBrush: function () {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), zr.prototype.getBoundingRect.call(this)
            }
        }), vm = function (t) {
            this.colorStops = t || []
        };
    vm.prototype = {
        constructor: vm, addColorStop: function (t, e) {
            this.colorStops.push({offset: t, color: e})
        }
    };
    var mm = function (t, e, n, i, r, a) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, vm.call(this, r)
    };
    mm.prototype = {constructor: mm}, h(mm, vm);
    var ym = function (t, e, n, i, r) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, vm.call(this, i)
    };
    ym.prototype = {constructor: ym}, h(ym, vm), Yr.prototype.incremental = !0, Yr.prototype.clearDisplaybles = function () {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
    }, Yr.prototype.addDisplayable = function (t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
    }, Yr.prototype.addDisplayables = function (t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
    }, Yr.prototype.eachPendingDisplayable = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
    }, Yr.prototype.update = function () {
        this.updateTransform();
        for (var t = this._cursor; t < this._displayables.length; t++) {
            var e = this._displayables[t];
            e.parent = this, e.update(), e.parent = null
        }
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this, e.update(), e.parent = null
        }
    }, Yr.prototype.brush = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++) {
            var n = this._displayables[e];
            n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t)
        }
        this._cursor = e;
        for (var e = 0; e < this._temporaryDisplayables.length; e++) {
            var n = this._temporaryDisplayables[e];
            n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t)
        }
        this._temporaryDisplayables = [], this.notClear = !0
    };
    var _m = [];
    Yr.prototype.getBoundingRect = function () {
        if (!this._rect) {
            for (var t = new gn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var n = this._displayables[e], i = n.getBoundingRect().clone();
                n.needLocalTransform() && i.applyTransform(n.getLocalTransform(_m)), t.union(i)
            }
            this._rect = t
        }
        return this._rect
    }, Yr.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect();
        if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {
            var a = this._displayables[r];
            if (a.contain(t, e)) return !0
        }
        return !1
    }, h(Yr, gi);
    var xm = Math.round, wm = Math.max, bm = Math.min, Mm = {}, Sm = Gr, Tm = F(), Im = 0,
        Cm = (Object.freeze || Object)({
            extendShape: qr,
            extendPath: Ur,
            makePath: $r,
            makeImage: Kr,
            mergePath: Sm,
            resizePath: Jr,
            subPixelOptimizeLine: ta,
            subPixelOptimizeRect: ea,
            subPixelOptimize: na,
            setElementHoverStyle: ca,
            isInEmphasis: da,
            setHoverStyle: ma,
            setAsHoverStyleTrigger: ya,
            setLabelStyle: _a,
            setTextStyle: xa,
            setText: wa,
            getFont: ka,
            updateProps: Da,
            initProps: Pa,
            getTransform: Oa,
            applyTransform: La,
            transformDirection: Ba,
            groupTransition: Ea,
            clipPointsByRect: Ra,
            clipRectByRect: za,
            createIcon: Fa,
            Group: Gp,
            Image: vi,
            Text: tm,
            Circle: em,
            Sector: rm,
            Ring: am,
            Polygon: lm,
            Polyline: um,
            Rect: hm,
            Line: cm,
            BezierCurve: fm,
            Arc: pm,
            IncrementalDisplayable: Yr,
            CompoundPath: gm,
            LinearGradient: mm,
            RadialGradient: ym,
            BoundingRect: gn
        }), km = ["textStyle", "color"], Am = {
            getTextColor: function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(km) : null)
            }, getFont: function () {
                return ka({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            }, getTextRect: function (t) {
                return Bn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
            }
        },
        Dm = Yg([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
        Pm = {
            getItemStyle: function (t, e) {
                var n = Dm(this, t, e), i = this.getBorderLineDash();
                return i && (n.lineDash = i), n
            }, getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }, Om = c, Lm = Zi();
    Na.prototype = {
        constructor: Na, init: null, mergeOption: function (t) {
            r(this.option, t, !0)
        }, get: function (t, e) {
            return null == t ? this.option : Va(this.option, this.parsePath(t), !e && Wa(this, t))
        }, getShallow: function (t, e) {
            var n = this.option, i = null == n ? n : n[t], r = !e && Wa(this, t);
            return null == i && r && (i = r.getShallow(t)), i
        }, getModel: function (t, e) {
            var n, i = null == t ? this.option : Va(this.option, t = this.parsePath(t));
            return e = e || (n = Wa(this, t)) && n.getModel(t), new Na(i, e, this.ecModel)
        }, isEmpty: function () {
            return null == this.option
        }, restoreData: function () {
        }, clone: function () {
            var t = this.constructor;
            return new t(i(this.option))
        }, setReadOnly: function () {
        }, parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")), t
        }, customizeGetParent: function (t) {
            Lm(this).getParent = t
        }, isAnimationEnabled: function () {
            if (!Ef.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    }, Ji(Na), tr(Na), Om(Na, Ug), Om(Na, Kg), Om(Na, Am), Om(Na, Pm);
    var Bm = 0, Em = 1e-4, Rm = 9007199254740991,
        zm = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        Fm = (Object.freeze || Object)({
            linearMap: ja,
            parsePercent: Ya,
            round: qa,
            asc: Ua,
            getPrecision: $a,
            getPrecisionSafe: Ka,
            getPixelPrecision: Qa,
            getPercentWithPrecision: Ja,
            MAX_SAFE_INTEGER: Rm,
            remRadian: to,
            isRadianAroundZero: eo,
            parseDate: no,
            quantity: io,
            nice: ao,
            quantile: oo,
            reformIntervals: so,
            isNumeric: lo
        }), Nm = O, Vm = /([&<>"'])/g, Wm = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
        Hm = ["a", "b", "c", "d", "e", "f", "g"], Gm = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }, Xm = Vn, Zm = Bn, jm = (Object.freeze || Object)({
            addCommas: uo,
            toCamelCase: ho,
            normalizeCssArray: Nm,
            encodeHTML: co,
            formatTpl: fo,
            formatTplSimple: po,
            getTooltipMarker: go,
            formatTime: mo,
            capitalFirst: yo,
            truncateText: Xm,
            getTextRect: Zm
        }), Ym = f, qm = ["left", "right", "top", "bottom", "width", "height"],
        Um = [["width", "left", "right"], ["height", "top", "bottom"]], $m = _o,
        Km = (_(_o, "vertical"), _(_o, "horizontal"), {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }), Qm = Zi(), Jm = Na.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function (t, e, n, i) {
                Na.call(this, t, e, n, i), this.uid = Ha("ec_cpt_model")
            },
            init: function (t, e, n) {
                this.mergeDefaultAndTheme(t, n)
            },
            mergeDefaultAndTheme: function (t, e) {
                var n = this.layoutMode, i = n ? Mo(t) : {}, a = e.getTheme();
                r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && bo(t, i, n)
            },
            mergeOption: function (t) {
                r(this.option, t, !0);
                var e = this.layoutMode;
                e && bo(this.option, t, e)
            },
            optionUpdated: function () {
            },
            getDefaultOption: function () {
                var t = Qm(this);
                if (!t.defaultOption) {
                    for (var e = [], n = this.constructor; n;) {
                        var i = n.prototype.defaultOption;
                        i && e.push(i), n = n.superClass
                    }
                    for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
                    t.defaultOption = a
                }
                return t.defaultOption
            },
            getReferringComponents: function (t) {
                return this.ecModel.queryComponents({
                    mainType: t,
                    index: this.get(t + "Index", !0),
                    id: this.get(t + "Id", !0)
                })
            }
        });
    ir(Jm, {registerWhenExtend: !0}), Ga(Jm), Xa(Jm, To), c(Jm, Km);
    var ty = "";
    "undefined" != typeof navigator && (ty = navigator.platform || "");
    var ey = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            textStyle: {
                fontFamily: ty.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        }, ny = Zi(), iy = {
            clearColorPalette: function () {
                ny(this).colorIdx = 0, ny(this).colorNameMap = {}
            }, getColorFromPalette: function (t, e, n) {
                e = e || this;
                var i = ny(e), r = i.colorIdx || 0, a = i.colorNameMap = i.colorNameMap || {};
                if (a.hasOwnProperty(t)) return a[t];
                var o = Ri(this.get("color", !0)), s = this.get("colorLayer", !0), l = null != n && s ? Io(s, n) : o;
                if (l = l || o, l && l.length) {
                    var u = l[r];
                    return t && (a[t] = u), i.colorIdx = (r + 1) % l.length, u
                }
            }
        }, ry = {
            cartesian2d: function (t, e, n, i) {
                var r = t.getReferringComponents("xAxis")[0], a = t.getReferringComponents("yAxis")[0];
                e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), ko(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), ko(a) && (i.set("y", a), e.firstCategoryDimIndex = 1)
            }, singleAxis: function (t, e, n, i) {
                var r = t.getReferringComponents("singleAxis")[0];
                e.coordSysDims = ["single"], n.set("single", r), ko(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
            }, polar: function (t, e, n, i) {
                var r = t.getReferringComponents("polar")[0], a = r.findAxisModel("radiusAxis"),
                    o = r.findAxisModel("angleAxis");
                e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), ko(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), ko(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1)
            }, geo: function (t, e) {
                e.coordSysDims = ["lng", "lat"]
            }, parallel: function (t, e, n, i) {
                var r = t.ecModel, a = r.getComponent("parallel", t.get("parallelIndex")),
                    o = e.coordSysDims = a.dimensions.slice();
                f(a.parallelAxisIndex, function (t, a) {
                    var s = r.getComponent("parallelAxis", t), l = o[a];
                    n.set(l, s), ko(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a)
                })
            }
        }, ay = "original", oy = "arrayRows", sy = "objectRows", ly = "keyedColumns", uy = "unknown", hy = "typedArray",
        cy = "column", dy = "row";
    Ao.seriesDataToSource = function (t) {
        return new Ao({data: t, sourceFormat: T(t) ? hy : ay, fromDataset: !1})
    }, tr(Ao);
    var fy = Zi(), py = "\x00_ec_inner", gy = Na.extend({
        init: function (t, e, n, i) {
            n = n || {}, this.option = null, this._theme = new Na(n), this._optionManager = i
        }, setOption: function (t, e) {
            L(!(py in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
        }, resetOption: function (t) {
            var e = !1, n = this._optionManager;
            if (!t || "recreate" === t) {
                var i = n.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Xo.call(this, i), e = !0
            }
            if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var r = n.getTimelineOption(this);
                r && (this.mergeOption(r), e = !0)
            }
            if (!t || "recreate" === t || "media" === t) {
                var a = n.getMediaOption(this, this._api);
                a.length && f(a, function (t) {
                    this.mergeOption(t, e = !0)
                }, this)
            }
            return e
        }, mergeOption: function (t) {
            function e(e, i) {
                var r = Ri(t[e]), s = Vi(a.get(e), r);
                Wi(s), f(s, function (t) {
                    var n = t.option;
                    M(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = jo(e, n, t.exist))
                });
                var l = Zo(a, i);
                n[e] = [], a.set(e, []), f(s, function (t, i) {
                    var r = t.exist, s = t.option;
                    if (L(M(s) || r, "Empty component definition"), s) {
                        var u = Jm.getClass(e, t.keyInfo.subType, !0);
                        if (r && r instanceof u) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1); else {
                            var h = o({dependentModels: l, componentIndex: i}, t.keyInfo);
                            r = new u(s, this, this, h), o(r, h), r.init(s, this, this, h), r.optionUpdated(null, !0)
                        }
                    } else r.mergeOption({}, this), r.optionUpdated({}, !1);
                    a.get(e)[i] = r, n[e][i] = r.option
                }, this), "series" === e && Yo(this, a.get("series"))
            }

            var n = this.option, a = this._componentsMap, s = [];
            Oo(this), f(t, function (t, e) {
                null != t && (Jm.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0))
            }), Jm.topologicalTravel(s, Jm.getAllClassMainTypes(), e, this), this._seriesIndicesMap = F(this._seriesIndices = this._seriesIndices || [])
        }, getOption: function () {
            var t = i(this.option);
            return f(t, function (e, n) {
                if (Jm.hasClass(n)) {
                    for (var e = Ri(e), i = e.length - 1; i >= 0; i--) Gi(e[i]) && e.splice(i, 1);
                    t[n] = e
                }
            }), delete t[py], t
        }, getTheme: function () {
            return this._theme
        }, getComponent: function (t, e) {
            var n = this._componentsMap.get(t);
            return n ? n[e || 0] : void 0
        }, queryComponents: function (t) {
            var e = t.mainType;
            if (!e) return [];
            var n = t.index, i = t.id, r = t.name, a = this._componentsMap.get(e);
            if (!a || !a.length) return [];
            var o;
            if (null != n) x(n) || (n = [n]), o = v(p(n, function (t) {
                return a[t]
            }), function (t) {
                return !!t
            }); else if (null != i) {
                var s = x(i);
                o = v(a, function (t) {
                    return s && u(i, t.id) >= 0 || !s && t.id === i
                })
            } else if (null != r) {
                var l = x(r);
                o = v(a, function (t) {
                    return l && u(r, t.name) >= 0 || !l && t.name === r
                })
            } else o = a.slice();
            return qo(o, t)
        }, findComponents: function (t) {
            function e(t) {
                var e = r + "Index", n = r + "Id", i = r + "Name";
                return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
                    mainType: r,
                    index: t[e],
                    id: t[n],
                    name: t[i]
                }
            }

            function n(e) {
                return t.filter ? v(e, t.filter) : e
            }

            var i = t.query, r = t.mainType, a = e(i), o = a ? this.queryComponents(a) : this._componentsMap.get(r);
            return n(qo(o, t))
        }, eachComponent: function (t, e, n) {
            var i = this._componentsMap;
            if ("function" == typeof t) n = e, e = t, i.each(function (t, i) {
                f(t, function (t, r) {
                    e.call(n, i, t, r)
                })
            }); else if (b(t)) f(i.get(t), e, n); else if (M(t)) {
                var r = this.findComponents(t);
                f(r, e, n)
            }
        }, getSeriesByName: function (t) {
            var e = this._componentsMap.get("series");
            return v(e, function (e) {
                return e.name === t
            })
        }, getSeriesByIndex: function (t) {
            return this._componentsMap.get("series")[t]
        }, getSeriesByType: function (t) {
            var e = this._componentsMap.get("series");
            return v(e, function (e) {
                return e.subType === t
            })
        }, getSeries: function () {
            return this._componentsMap.get("series").slice()
        }, getSeriesCount: function () {
            return this._componentsMap.get("series").length
        }, eachSeries: function (t, e) {
            f(this._seriesIndices, function (n) {
                var i = this._componentsMap.get("series")[n];
                t.call(e, i, n)
            }, this)
        }, eachRawSeries: function (t, e) {
            f(this._componentsMap.get("series"), t, e)
        }, eachSeriesByType: function (t, e, n) {
            f(this._seriesIndices, function (i) {
                var r = this._componentsMap.get("series")[i];
                r.subType === t && e.call(n, r, i)
            }, this)
        }, eachRawSeriesByType: function (t, e, n) {
            return f(this.getSeriesByType(t), e, n)
        }, isSeriesFiltered: function (t) {
            return null == this._seriesIndicesMap.get(t.componentIndex)
        }, getCurrentSeriesIndices: function () {
            return (this._seriesIndices || []).slice()
        }, filterSeries: function (t, e) {
            var n = v(this._componentsMap.get("series"), t, e);
            Yo(this, n)
        }, restoreData: function (t) {
            var e = this._componentsMap;
            Yo(this, e.get("series"));
            var n = [];
            e.each(function (t, e) {
                n.push(e)
            }), Jm.topologicalTravel(n, Jm.getAllClassMainTypes(), function (n) {
                f(e.get(n), function (e) {
                    ("series" !== n || !Ho(e, t)) && e.restoreData()
                })
            })
        }
    });
    c(gy, iy);
    var vy = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
        my = {};
    $o.prototype = {
        constructor: $o, create: function (t, e) {
            var n = [];
            f(my, function (i) {
                var r = i.create(t, e);
                n = n.concat(r || [])
            }), this._coordinateSystems = n
        }, update: function (t, e) {
            f(this._coordinateSystems, function (n) {
                n.update && n.update(t, e)
            })
        }, getCoordinateSystems: function () {
            return this._coordinateSystems.slice()
        }
    }, $o.register = function (t, e) {
        my[t] = e
    }, $o.get = function (t) {
        return my[t]
    };
    var yy = f, _y = i, xy = p, wy = r, by = /^(min|max)?(.+)$/;
    Ko.prototype = {
        constructor: Ko, setOption: function (t, e) {
            t && f(Ri(t.series), function (t) {
                t && t.data && T(t.data) && E(t.data)
            }), t = _y(t, !0);
            var n = this._optionBackup, i = Qo.call(this, t, e, !n);
            this._newBaseOption = i.baseOption, n ? (ns(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        }, mountOption: function (t) {
            var e = this._optionBackup;
            return this._timelineOptions = xy(e.timelineOptions, _y), this._mediaList = xy(e.mediaList, _y), this._mediaDefault = _y(e.mediaDefault), this._currentMediaIndices = [], _y(t ? e.baseOption : this._newBaseOption)
        }, getTimelineOption: function (t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = _y(n[i.getCurrentIndex()], !0))
            }
            return e
        }, getMediaOption: function () {
            var t = this._api.getWidth(), e = this._api.getHeight(), n = this._mediaList, i = this._mediaDefault,
                r = [], a = [];
            if (!n.length && !i) return a;
            for (var o = 0, s = n.length; s > o; o++) Jo(n[o].query, t, e) && r.push(o);
            return !r.length && i && (r = [-1]), r.length && !es(r, this._currentMediaIndices) && (a = xy(r, function (t) {
                return _y(-1 === t ? i.option : n[t].option)
            })), this._currentMediaIndices = r, a
        }
    };
    var My = f, Sy = M, Ty = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        Iy = function (t, e) {
            My(us(t.series), function (t) {
                Sy(t) && ls(t)
            });
            var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
            e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), My(n, function (e) {
                My(us(t[e]), function (t) {
                    t && (os(t, "axisLabel"), os(t.axisPointer, "label"))
                })
            }), My(us(t.parallel), function (t) {
                var e = t && t.parallelAxisDefault;
                os(e, "axisLabel"), os(e && e.axisPointer, "label")
            }), My(us(t.calendar), function (t) {
                rs(t, "itemStyle"), os(t, "dayLabel"), os(t, "monthLabel"), os(t, "yearLabel")
            }), My(us(t.radar), function (t) {
                os(t, "name")
            }), My(us(t.geo), function (t) {
                Sy(t) && (ss(t), My(us(t.regions), function (t) {
                    ss(t)
                }))
            }), My(us(t.timeline), function (t) {
                ss(t), rs(t, "label"), rs(t, "itemStyle"), rs(t, "controlStyle", !0);
                var e = t.data;
                x(e) && f(e, function (t) {
                    M(t) && (rs(t, "label"), rs(t, "itemStyle"))
                })
            }), My(us(t.toolbox), function (t) {
                rs(t, "iconStyle"), My(t.feature, function (t) {
                    rs(t, "iconStyle")
                })
            }), os(hs(t.axisPointer), "label"), os(hs(t.tooltip).axisPointer, "label")
        }, Cy = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
        ky = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        Ay = function (t, e) {
            Iy(t, e), t.series = Ri(t.series), f(t.series, function (t) {
                if (M(t)) {
                    var e = t.type;
                    if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                        var n = cs(t, "pointer.color");
                        null != n && ds(t, "itemStyle.normal.color", n)
                    }
                    fs(t)
                }
            }), t.dataRange && (t.visualMap = t.dataRange), f(ky, function (e) {
                var n = t[e];
                n && (x(n) || (n = [n]), f(n, function (t) {
                    fs(t)
                }))
            })
        }, Dy = function (t) {
            var e = F();
            t.eachSeries(function (t) {
                var n = t.get("stack");
                if (n) {
                    var i = e.get(n) || e.set(n, []), r = t.getData(), a = {
                        stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                        stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                        stackedDimension: r.getCalculationInfo("stackedDimension"),
                        stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                        isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                        data: r,
                        seriesModel: t
                    };
                    if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
                    i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a)
                }
            }), e.each(ps)
        }, Py = gs.prototype;
    Py.pure = !1, Py.persistent = !0, Py.getSource = function () {
        return this._source
    };
    var Oy = {
        arrayRows_column: {
            pure: !0, count: function () {
                return Math.max(0, this._data.length - this._source.startIndex)
            }, getItem: function (t) {
                return this._data[t + this._source.startIndex]
            }, appendData: ys
        },
        arrayRows_row: {
            pure: !0, count: function () {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0
            }, getItem: function (t) {
                t += this._source.startIndex;
                for (var e = [], n = this._data, i = 0; i < n.length; i++) {
                    var r = n[i];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function () {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
            }
        },
        objectRows: {pure: !0, count: vs, getItem: ms, appendData: ys},
        keyedColumns: {
            pure: !0, count: function () {
                var t = this._source.dimensionsDefine[0].name, e = this._data[t];
                return e ? e.length : 0
            }, getItem: function (t) {
                for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
                    var r = this._data[n[i].name];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function (t) {
                var e = this._data;
                f(t, function (t, n) {
                    for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
                })
            }
        },
        original: {count: vs, getItem: ms, appendData: ys},
        typedArray: {
            persistent: !1, pure: !0, count: function () {
                return this._data ? this._data.length / this._dimSize : 0
            }, getItem: function (t, e) {
                t -= this._offset, e = e || [];
                for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
                return e
            }, appendData: function (t) {
                this._data = t
            }, clean: function () {
                this._offset += this.count(), this._data = null
            }
        }
    }, Ly = {
        arrayRows: _s, objectRows: function (t, e, n, i) {
            return null != n ? t[i] : t
        }, keyedColumns: _s, original: function (t, e, n) {
            var i = Fi(t);
            return null != n && i instanceof Array ? i[n] : i
        }, typedArray: _s
    }, By = {
        arrayRows: xs, objectRows: function (t, e) {
            return ws(t[e], this._dimensionInfos[e])
        }, keyedColumns: xs, original: function (t, e, n, i) {
            var r = t && (null == t.value ? t : t.value);
            return !this._rawData.pure && Ni(t) && (this.hasItemOption = !0), ws(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
        }, typedArray: function (t, e, n, i) {
            return t[i]
        }
    }, Ey = /\{@(.+?)\}/g, Ry = {
        getDataParams: function (t, e) {
            var n = this.getData(e), i = this.getRawValue(t, e), r = n.getRawIndex(t), a = n.getName(t),
                o = n.getRawDataItem(t), s = n.getItemVisual(t, "color"), l = this.ecModel.getComponent("tooltip"),
                u = l && l.get("renderMode"), h = $i(u), c = this.mainType, d = "series" === c;
            return {
                componentType: c,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: d ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: d ? this.id : null,
                seriesName: d ? this.name : null,
                name: a,
                dataIndex: r,
                data: o,
                dataType: e,
                value: i,
                color: s,
                marker: go({color: s, renderMode: h}),
                $vars: ["seriesName", "name", "value"]
            }
        }, getFormattedLabel: function (t, e, n, i, r) {
            e = e || "normal";
            var a = this.getData(n), o = a.getItemModel(t), s = this.getDataParams(t, n);
            null != i && s.value instanceof Array && (s.value = s.value[i]);
            var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
            if ("function" == typeof l) return s.status = e, l(s);
            if ("string" == typeof l) {
                var u = fo(l, s);
                return u.replace(Ey, function (e, n) {
                    var i = n.length;
                    return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), bs(a, t, n)
                })
            }
        }, getRawValue: function (t, e) {
            return bs(this.getData(e), t)
        }, formatTooltip: function () {
        }
    }, zy = Ts.prototype;
    zy.perform = function (t) {
        function e(t) {
            return !(t >= 1) && (t = 1), t
        }

        var n = this._upstream, i = t && t.skip;
        if (this._dirty && n) {
            var r = this.context;
            r.data = r.outputData = n.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !i && (a = this._plan(this.context));
        var o = e(this._modBy), s = this._modDataCount || 0, l = e(t && t.modBy), u = t && t.modDataCount || 0;
        (o !== l || s !== u) && (a = "reset");
        var h;
        (this._dirty || "reset" === a) && (this._dirty = !1, h = Cs(this, i)), this._modBy = l, this._modDataCount = u;
        var c = t && t.step;
        if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
            var d = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!i && (h || f > d)) {
                var p = this._progress;
                if (x(p)) for (var g = 0; g < p.length; g++) Is(this, p[g], d, f, l, u); else Is(this, p, d, f, l, u)
            }
            this._dueIndex = f;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            this._outputDueEnd = v
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished()
    };
    var Fy = function () {
        function t() {
            return n > i ? i++ : null
        }

        function e() {
            var t = i % o * r + Math.ceil(i / o), e = i >= n ? null : a > t ? t : i;
            return i++, e
        }

        var n, i, r, a, o, s = {
            reset: function (l, u, h, c) {
                i = l, n = u, r = h, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t
            }
        };
        return s
    }();
    zy.dirty = function () {
        this._dirty = !0, this._onDirty && this._onDirty(this.context)
    }, zy.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd
    }, zy.pipe = function (t) {
        (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
    }, zy.dispose = function () {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
    }, zy.getUpstream = function () {
        return this._upstream
    }, zy.getDownstream = function () {
        return this._downstream
    }, zy.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t
    };
    var Ny = Zi(), Vy = Jm.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendDataProvider: null,
        visualColorAccessPath: "itemStyle.color",
        layoutMode: null,
        init: function (t, e, n) {
            this.seriesIndex = this.componentIndex, this.dataTask = Ss({
                count: Ds,
                reset: Ps
            }), this.dataTask.context = {model: this}, this.mergeDefaultAndTheme(t, n), Lo(this);
            var i = this.getInitialData(t, n);
            Ls(i, this), this.dataTask.context.data = i, Ny(this).dataBeforeProcessed = i, ks(this)
        },
        mergeDefaultAndTheme: function (t, e) {
            var n = this.layoutMode, i = n ? Mo(t) : {}, a = this.subType;
            Jm.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), zi(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && bo(t, i, n)
        },
        mergeOption: function (t, e) {
            t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
            var n = this.layoutMode;
            n && bo(this.option, t, n), Lo(this);
            var i = this.getInitialData(t, e);
            Ls(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, Ny(this).dataBeforeProcessed = i, ks(this)
        },
        fillDataTextStyle: function (t) {
            if (t && !T(t)) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && zi(t[n], "label", e)
        },
        getInitialData: function () {
        },
        appendData: function (t) {
            var e = this.getRawData();
            e.appendData(t.data)
        },
        getData: function (t) {
            var e = Es(this);
            if (e) {
                var n = e.context.data;
                return null == t ? n : n.getLinkedData(t)
            }
            return Ny(this).data
        },
        setData: function (t) {
            var e = Es(this);
            if (e) {
                var n = e.context;
                n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t)
            }
            Ny(this).data = t
        },
        getSource: function () {
            return Po(this)
        },
        getRawData: function () {
            return Ny(this).dataBeforeProcessed
        },
        getBaseAxis: function () {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis()
        },
        formatTooltip: function (t, e, n, i) {
            function r(n) {
                function r(t, n) {
                    var r = c.getDimensionInfo(n);
                    if (r && r.otherDims.tooltip !== !1) {
                        var d = r.type, f = "sub" + o.seriesIndex + "at" + h,
                            p = go({color: y, type: "subItem", renderMode: i, markerId: f}),
                            g = "string" == typeof p ? p : p.content,
                            v = (a ? g + co(r.displayName || "-") + ": " : "") + co("ordinal" === d ? t + "" : "time" === d ? e ? "" : mo("yyyy/MM/dd hh:mm:ss", t) : uo(t));
                        v && s.push(v), l && (u[f] = y, ++h)
                    }
                }

                var a = g(n, function (t, e, n) {
                    var i = c.getDimensionInfo(n);
                    return t |= i && i.tooltip !== !1 && null != i.displayName
                }, 0), s = [];
                d.length ? f(d, function (e) {
                    r(bs(c, t, e), e)
                }) : f(n, r);
                var p = a ? l ? "\n" : "<br/>" : "", v = p + s.join(p || ", ");
                return {renderMode: i, content: v, style: u}
            }

            function a(t) {
                return {renderMode: i, content: co(uo(t)), style: u}
            }

            var o = this;
            i = i || "html";
            var s = "html" === i ? "<br/>" : "\n", l = "richText" === i, u = {}, h = 0, c = this.getData(),
                d = c.mapDimension("defaultedTooltip", !0), p = d.length, v = this.getRawValue(t), m = x(v),
                y = c.getItemVisual(t, "color");
            M(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";
            var _ = p > 1 || m && !p ? r(v) : a(p ? bs(c, t, d[0]) : m ? v[0] : v), w = _.content,
                b = o.seriesIndex + "at" + h, S = go({color: y, type: "item", renderMode: i, markerId: b});
            u[b] = y, ++h;
            var T = c.getName(t), I = this.name;
            Hi(this) || (I = ""), I = I ? co(I) + (e ? ": " : s) : "";
            var C = "string" == typeof S ? S : S.content, k = e ? C + I + w : I + C + (T ? co(T) + ": " + w : w);
            return {html: k, markers: u}
        },
        isAnimationEnabled: function () {
            if (Ef.node) return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
        },
        restoreData: function () {
            this.dataTask.dirty()
        },
        getColorFromPalette: function (t, e, n) {
            var i = this.ecModel, r = iy.getColorFromPalette.call(this, t, e, n);
            return r || (r = i.getColorFromPalette(t, e, n)), r
        },
        coordDimToDataDim: function (t) {
            return this.getRawData().mapDimension(t, !0)
        },
        getProgressive: function () {
            return this.get("progressive")
        },
        getProgressiveThreshold: function () {
            return this.get("progressiveThreshold")
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    c(Vy, Ry), c(Vy, iy);
    var Wy = function () {
        this.group = new Gp, this.uid = Ha("viewComponent")
    };
    Wy.prototype = {
        constructor: Wy, init: function () {
        }, render: function () {
        }, dispose: function () {
        }, filterForExposedEvent: null
    };
    var Hy = Wy.prototype;
    Hy.updateView = Hy.updateLayout = Hy.updateVisual = function () {
    }, Ji(Wy), ir(Wy, {registerWhenExtend: !0});
    var Gy = function () {
        var t = Zi();
        return function (e) {
            var n = t(e), i = e.pipelineContext, r = n.large, a = n.progressiveRender, o = n.large = i.large,
                s = n.progressiveRender = i.progressiveRender;
            return !!(r ^ o || a ^ s) && "reset"
        }
    }, Xy = Zi(), Zy = Gy();
    Rs.prototype = {
        type: "chart", init: function () {
        }, render: function () {
        }, highlight: function (t, e, n, i) {
            Fs(t.getData(), i, "emphasis")
        }, downplay: function (t, e, n, i) {
            Fs(t.getData(), i, "normal")
        }, remove: function () {
            this.group.removeAll()
        }, dispose: function () {
        }, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null
    };
    var jy = Rs.prototype;
    jy.updateView = jy.updateLayout = jy.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i)
    }, Ji(Rs, ["dispose"]), ir(Rs, {registerWhenExtend: !0}), Rs.markUpdateMethod = function (t, e) {
        Xy(t).updateMethod = e
    };
    var Yy = {
        incrementalPrepareRender: {
            progress: function (t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
            }
        }, render: {
            forceFirstProgress: !0, progress: function (t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload)
            }
        }
    }, qy = "\x00__throttleOriginMethod", Uy = "\x00__throttleRate", $y = "\x00__throttleType", Ky = {
        createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
            var n = t.getData(), i = (t.visualColorAccessPath || "itemStyle.color").split("."),
                r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
            if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
                "function" != typeof r || r instanceof vm || n.each(function (e) {
                    n.setItemVisual(e, "color", r(t.getDataParams(e)))
                });
                var a = function (t, e) {
                    var n = t.getItemModel(e), r = n.get(i, !0);
                    null != r && t.setItemVisual(e, "color", r)
                };
                return {dataEach: n.hasItemOption ? a : null}
            }
        }
    }, Qy = {
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {title: "数据视图", lang: ["数据视图", "关闭", "刷新"]},
            dataZoom: {title: {zoom: "区域缩放", back: "区域缩放还原"}},
            magicType: {title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"}},
            restore: {title: "还原"},
            saveAsImage: {title: "保存为图片", lang: ["右键另存为图片"]}
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，"},
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {middle: "；", end: "。"}
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {middle: "，", end: ""}
            }
        }
    }, Jy = function (t, e) {
        function n(t, e) {
            if ("string" != typeof t) return t;
            var n = t;
            return f(e, function (t, e) {
                n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
            }), n
        }

        function i(t) {
            var e = o.get(t);
            if (null == e) {
                for (var n = t.split("."), i = Qy.aria, r = 0; r < n.length; ++r) i = i[n[r]];
                return i
            }
            return e
        }

        function r() {
            var t = e.getModel("title").option;
            return t && t.length && (t = t[0]), t && t.text
        }

        function a(t) {
            return Qy.series.typeNames[t] || "自定义图"
        }

        var o = e.getModel("aria");
        if (o.get("show")) {
            if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
            var s = 0;
            e.eachSeries(function () {
                ++s
            }, this);
            var l, u = o.get("data.maxCount") || 10, h = o.get("series.maxCount") || 10, c = Math.min(s, h);
            if (!(1 > s)) {
                var d = r();
                l = d ? n(i("general.withTitle"), {title: d}) : i("general.withoutTitle");
                var p = [], g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
                l += n(i(g), {seriesCount: s}), e.eachSeries(function (t, e) {
                    if (c > e) {
                        var r, o = t.get("name"), l = "series." + (s > 1 ? "multiple" : "single") + ".";
                        r = i(o ? l + "withName" : l + "withoutName"), r = n(r, {
                            seriesId: t.seriesIndex,
                            seriesName: t.get("name"),
                            seriesType: a(t.subType)
                        });
                        var h = t.getData();
                        window.data = h, r += h.count() > u ? n(i("data.partialData"), {displayCnt: u}) : i("data.allData");
                        for (var d = [], f = 0; f < h.count(); f++) if (u > f) {
                            var g = h.getName(f), v = bs(h, f);
                            d.push(n(i(g ? "data.withName" : "data.withoutName"), {name: g, value: v}))
                        }
                        r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r)
                    }
                }), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l)
            }
        }
    }, t_ = Math.PI, e_ = function (t, e) {
        e = e || {}, s(e, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var n = new hm({style: {fill: e.maskColor}, zlevel: e.zlevel, z: 1e4}), i = new pm({
            shape: {startAngle: -t_ / 2, endAngle: -t_ / 2 + .1, r: 10},
            style: {stroke: e.color, lineCap: "round", lineWidth: 5},
            zlevel: e.zlevel,
            z: 10001
        }), r = new hm({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            }, zlevel: e.zlevel, z: 10001
        });
        i.animateShape(!0).when(1e3, {endAngle: 3 * t_ / 2}).start("circularInOut"), i.animateShape(!0).when(1e3, {startAngle: 3 * t_ / 2}).delay(300).start("circularInOut");
        var a = new Gp;
        return a.add(i), a.add(r), a.add(n), a.resize = function () {
            var e = t.getWidth() / 2, a = t.getHeight() / 2;
            i.setShape({cx: e, cy: a});
            var o = i.shape.r;
            r.setShape({x: e - o, y: a - o, width: 2 * o, height: 2 * o}), n.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        }, a.resize(), a
    }, n_ = Gs.prototype;
    n_.restoreData = function (t, e) {
        t.restoreData(e), this._stageTaskMap.each(function (t) {
            var e = t.overallTask;
            e && e.dirty()
        })
    }, n_.getPerformArgs = function (t, e) {
        if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id), i = n.context,
                r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
                a = r ? n.step : null, o = i && i.modDataCount, s = null != o ? Math.ceil(o / a) : null;
            return {step: a, modBy: s, modDataCount: o}
        }
    }, n_.getPipeline = function (t) {
        return this._pipelineMap.get(t)
    }, n_.updateStreamModes = function (t, e) {
        var n = this._pipelineMap.get(t.uid), i = t.getData(), r = i.count(),
            a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
            o = t.get("large") && r >= t.get("largeThreshold"), s = "mod" === t.get("progressiveChunkMode") ? r : null;
        t.pipelineContext = n.context = {progressiveRender: a, modDataCount: s, large: o}
    }, n_.restorePipelines = function (t) {
        var e = this, n = e._pipelineMap = F();
        t.eachSeries(function (t) {
            var i = t.getProgressive(), r = t.uid;
            n.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(i || 700),
                count: 0
            }), el(e, t, t.dataTask)
        })
    }, n_.prepareStageTasks = function () {
        var t = this._stageTaskMap, e = this.ecInstance.getModel(), n = this.api;
        f(this._allHandlers, function (i) {
            var r = t.get(i.uid) || t.set(i.uid, []);
            i.reset && Zs(this, i, r, e, n), i.overallReset && js(this, i, r, e, n)
        }, this)
    }, n_.prepareView = function (t, e, n, i) {
        var r = t.renderTask, a = r.context;
        a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, el(this, e, r)
    }, n_.performDataProcessorTasks = function (t, e) {
        Xs(this, this._dataProcessorHandlers, t, e, {block: !0})
    }, n_.performVisualTasks = function (t, e, n) {
        Xs(this, this._visualHandlers, t, e, n)
    }, n_.performSeriesTasks = function (t) {
        var e;
        t.eachSeries(function (t) {
            e |= t.dataTask.perform()
        }), this.unfinished |= e
    }, n_.plan = function () {
        this._pipelineMap.each(function (t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break
                }
                e = e.getUpstream()
            } while (e)
        })
    };
    var i_ = n_.updatePayload = function (t, e) {
        "remain" !== e && (t.context.payload = e)
    }, r_ = Js(0);
    Gs.wrapStageHandler = function (t, e) {
        return w(t) && (t = {
            overallReset: t,
            seriesType: nl(t)
        }), t.uid = Ha("stageHandler"), e && (t.visualType = e), t
    };
    var a_, o_ = {}, s_ = {};
    il(o_, gy), il(s_, Uo), o_.eachSeriesByType = o_.eachRawSeriesByType = function (t) {
        a_ = t
    }, o_.eachComponent = function (t) {
        "series" === t.mainType && t.subType && (a_ = t.subType)
    };
    var l_ = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        u_ = {
            color: l_,
            colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], l_]
        }, h_ = "#eee", c_ = function () {
            return {
                axisLine: {lineStyle: {color: h_}},
                axisTick: {lineStyle: {color: h_}},
                axisLabel: {textStyle: {color: h_}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: h_}}
            }
        },
        d_ = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
        f_ = {
            color: d_,
            backgroundColor: "#333",
            tooltip: {axisPointer: {lineStyle: {color: h_}, crossStyle: {color: h_}}},
            legend: {textStyle: {color: h_}},
            textStyle: {color: h_},
            title: {textStyle: {color: h_}},
            toolbox: {iconStyle: {normal: {borderColor: h_}}},
            dataZoom: {textStyle: {color: h_}},
            visualMap: {textStyle: {color: h_}},
            timeline: {
                lineStyle: {color: h_},
                itemStyle: {normal: {color: d_[1]}},
                label: {normal: {textStyle: {color: h_}}},
                controlStyle: {normal: {color: h_, borderColor: h_}}
            },
            timeAxis: c_(),
            logAxis: c_(),
            valueAxis: c_(),
            categoryAxis: c_(),
            line: {symbol: "circle"},
            graph: {color: d_},
            gauge: {title: {textStyle: {color: h_}}},
            candlestick: {
                itemStyle: {
                    normal: {
                        color: "#FD1050",
                        color0: "#0CF49B",
                        borderColor: "#FD1050",
                        borderColor0: "#0CF49B"
                    }
                }
            }
        };
    f_.categoryAxis.splitLine.show = !1, Jm.extend({
        type: "dataset",
        defaultOption: {seriesLayoutBy: cy, sourceHeader: null, dimensions: null, source: null},
        optionUpdated: function () {
            Do(this)
        }
    }), Wy.extend({type: "dataset"});
    var p_ = zr.extend({
        type: "ellipse", shape: {cx: 0, cy: 0, rx: 0, ry: 0}, buildPath: function (t, e) {
            var n = .5522848, i = e.cx, r = e.cy, a = e.rx, o = e.ry, s = a * n, l = o * n;
            t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), t.closePath()
        }
    }), g_ = /[\s,]+/;
    al.prototype.parse = function (t, e) {
        e = e || {};
        var n = rl(t);
        if (!n) throw new Error("Illegal svg");
        var i = new Gp;
        this._root = i;
        var r = n.getAttribute("viewBox") || "", a = parseFloat(n.getAttribute("width") || e.width),
            o = parseFloat(n.getAttribute("height") || e.height);
        isNaN(a) && (a = null), isNaN(o) && (o = null), ul(n, i, null, !0);
        for (var s = n.firstChild; s;) this._parseNode(s, i), s = s.nextSibling;
        var l, u;
        if (r) {
            var h = B(r).split(g_);
            h.length >= 4 && (l = {
                x: parseFloat(h[0] || 0),
                y: parseFloat(h[1] || 0),
                width: parseFloat(h[2]),
                height: parseFloat(h[3])
            })
        }
        if (l && null != a && null != o && (u = fl(l, a, o), !e.ignoreViewBox)) {
            var c = i;
            i = new Gp, i.add(c), c.scale = u.scale.slice(), c.position = u.position.slice()
        }
        return e.ignoreRootClip || null == a || null == o || i.setClipPath(new hm({
            shape: {
                x: 0,
                y: 0,
                width: a,
                height: o
            }
        })), {root: i, width: a, height: o, viewBoxRect: l, viewBoxTransform: u}
    }, al.prototype._parseNode = function (t, e) {
        var n = t.nodeName.toLowerCase();
        "defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);
        var i;
        if (this._isDefine) {
            var r = m_[n];
            if (r) {
                var a = r.call(this, t), o = t.getAttribute("id");
                o && (this._defs[o] = a)
            }
        } else {
            var r = v_[n];
            r && (i = r.call(this, t, e), e.add(i))
        }
        for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
        "defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1)
    }, al.prototype._parseText = function (t, e) {
        if (1 === t.nodeType) {
            var n = t.getAttribute("dx") || 0, i = t.getAttribute("dy") || 0;
            this._textX += parseFloat(n), this._textY += parseFloat(i)
        }
        var r = new tm({
            style: {text: t.textContent, transformText: !0},
            position: [this._textX || 0, this._textY || 0]
        });
        sl(e, r), ul(t, r, this._defs);
        var a = r.style.fontSize;
        a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);
        var o = r.getBoundingRect();
        return this._textX += o.width, e.add(r), r
    };
    var v_ = {
            g: function (t, e) {
                var n = new Gp;
                return sl(e, n), ul(t, n, this._defs), n
            }, rect: function (t, e) {
                var n = new hm;
                return sl(e, n), ul(t, n, this._defs), n.setShape({
                    x: parseFloat(t.getAttribute("x") || 0),
                    y: parseFloat(t.getAttribute("y") || 0),
                    width: parseFloat(t.getAttribute("width") || 0),
                    height: parseFloat(t.getAttribute("height") || 0)
                }), n
            }, circle: function (t, e) {
                var n = new em;
                return sl(e, n), ul(t, n, this._defs), n.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    r: parseFloat(t.getAttribute("r") || 0)
                }), n
            }, line: function (t, e) {
                var n = new cm;
                return sl(e, n), ul(t, n, this._defs), n.setShape({
                    x1: parseFloat(t.getAttribute("x1") || 0),
                    y1: parseFloat(t.getAttribute("y1") || 0),
                    x2: parseFloat(t.getAttribute("x2") || 0),
                    y2: parseFloat(t.getAttribute("y2") || 0)
                }), n
            }, ellipse: function (t, e) {
                var n = new p_;
                return sl(e, n), ul(t, n, this._defs), n.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    rx: parseFloat(t.getAttribute("rx") || 0),
                    ry: parseFloat(t.getAttribute("ry") || 0)
                }), n
            }, polygon: function (t, e) {
                var n = t.getAttribute("points");
                n && (n = ll(n));
                var i = new lm({shape: {points: n || []}});
                return sl(e, i), ul(t, i, this._defs), i
            }, polyline: function (t, e) {
                var n = new zr;
                sl(e, n), ul(t, n, this._defs);
                var i = t.getAttribute("points");
                i && (i = ll(i));
                var r = new um({shape: {points: i || []}});
                return r
            }, image: function (t, e) {
                var n = new vi;
                return sl(e, n), ul(t, n, this._defs), n.setStyle({
                    image: t.getAttribute("xlink:href"),
                    x: t.getAttribute("x"),
                    y: t.getAttribute("y"),
                    width: t.getAttribute("width"),
                    height: t.getAttribute("height")
                }), n
            }, text: function (t, e) {
                var n = t.getAttribute("x") || 0, i = t.getAttribute("y") || 0, r = t.getAttribute("dx") || 0,
                    a = t.getAttribute("dy") || 0;
                this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);
                var o = new Gp;
                return sl(e, o), ul(t, o, this._defs), o
            }, tspan: function (t, e) {
                var n = t.getAttribute("x"), i = t.getAttribute("y");
                null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
                var r = t.getAttribute("dx") || 0, a = t.getAttribute("dy") || 0, o = new Gp;
                return sl(e, o), ul(t, o, this._defs), this._textX += r, this._textY += a, o
            }, path: function (t, e) {
                var n = t.getAttribute("d") || "", i = Wr(n);
                return sl(e, i), ul(t, i, this._defs), i
            }
        }, m_ = {
            lineargradient: function (t) {
                var e = parseInt(t.getAttribute("x1") || 0, 10), n = parseInt(t.getAttribute("y1") || 0, 10),
                    i = parseInt(t.getAttribute("x2") || 10, 10), r = parseInt(t.getAttribute("y2") || 0, 10),
                    a = new mm(e, n, i, r);
                return ol(t, a), a
            }, radialgradient: function () {
            }
        }, y_ = {
            fill: "fill",
            stroke: "stroke",
            "stroke-width": "lineWidth",
            opacity: "opacity",
            "fill-opacity": "fillOpacity",
            "stroke-opacity": "strokeOpacity",
            "stroke-dasharray": "lineDash",
            "stroke-dashoffset": "lineDashOffset",
            "stroke-linecap": "lineCap",
            "stroke-linejoin": "lineJoin",
            "stroke-miterlimit": "miterLimit",
            "font-family": "fontFamily",
            "font-size": "fontSize",
            "font-style": "fontStyle",
            "font-weight": "fontWeight",
            "text-align": "textAlign",
            "alignment-baseline": "textBaseline"
        }, __ = /url\(\s*#(.*?)\)/, x_ = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
        w_ = /([^\s:;]+)\s*:\s*([^:;]+)/g, b_ = F(), M_ = {
            registerMap: function (t, e, n) {
                var i;
                return x(e) ? i = e : e.svg ? i = [{
                    type: "svg",
                    source: e.svg,
                    specialAreas: e.specialAreas
                }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{
                    type: "geoJSON",
                    source: e,
                    specialAreas: n
                }]), f(i, function (t) {
                    var e = t.type;
                    "geoJson" === e && (e = t.type = "geoJSON");
                    var n = S_[e];
                    n(t)
                }), b_.set(t, i)
            }, retrieveMap: function (t) {
                return b_.get(t)
            }
        }, S_ = {
            geoJSON: function (t) {
                var e = t.source;
                t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
            }, svg: function (t) {
                t.svgXML = rl(t.source)
            }
        }, T_ = L, I_ = f, C_ = w, k_ = M, A_ = Jm.parseClassType, D_ = "4.2.0", P_ = {zrender: "4.0.5"}, O_ = 1, L_ = 1e3,
        B_ = 5e3, E_ = 1e3, R_ = 2e3, z_ = 3e3, F_ = 4e3, N_ = 5e3, V_ = {
            PROCESSOR: {FILTER: L_, STATISTIC: B_},
            VISUAL: {LAYOUT: E_, GLOBAL: R_, CHART: z_, COMPONENT: F_, BRUSH: N_}
        }, W_ = "__flagInMainProcess", H_ = "__optionUpdated", G_ = /^[a-zA-Z0-9_]+$/;
    gl.prototype.on = pl("on"), gl.prototype.off = pl("off"), gl.prototype.one = pl("one"), c(gl, ip);
    var X_ = vl.prototype;
    X_._onframe = function () {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[H_]) {
                var e = this[H_].silent;
                this[W_] = !0, yl(this), Z_.update.call(this), this[W_] = !1, this[H_] = !1, bl.call(this, e), Ml.call(this, e)
            } else if (t.unfinished) {
                var n = O_, i = this._model, r = this._api;
                t.unfinished = !1;
                do {
                    var a = +new Date;
                    t.performSeriesTasks(i), t.performDataProcessorTasks(i), xl(this, i), t.performVisualTasks(i), Al(this, this._model, r, "remain"), n -= +new Date - a
                } while (n > 0 && t.unfinished);
                t.unfinished || this._zr.flush()
            }
        }
    }, X_.getDom = function () {
        return this._dom
    }, X_.getZr = function () {
        return this._zr
    }, X_.setOption = function (t, e, n) {
        var i;
        if (k_(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[W_] = !0, !this._model || e) {
            var r = new Ko(this._api), a = this._theme, o = this._model = new gy(null, null, a, r);
            o.scheduler = this._scheduler, o.init(null, null, a, r)
        }
        this._model.setOption(t, $_), n ? (this[H_] = {silent: i}, this[W_] = !1) : (yl(this), Z_.update.call(this), this._zr.flush(), this[H_] = !1, this[W_] = !1, bl.call(this, i), Ml.call(this, i))
    }, X_.setTheme = function () {
        console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }, X_.getModel = function () {
        return this._model
    }, X_.getOption = function () {
        return this._model && this._model.getOption()
    }, X_.getWidth = function () {
        return this._zr.getWidth()
    }, X_.getHeight = function () {
        return this._zr.getHeight()
    }, X_.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }, X_.getRenderedCanvas = function (t) {
        if (Ef.canvasSupported) {
            t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
            var e = this._zr;
            return e.painter.getRenderedCanvas(t)
        }
    }, X_.getSvgDataUrl = function () {
        if (Ef.svgSupported) {
            var t = this._zr, e = t.storage.getDisplayList();
            return f(e, function (t) {
                t.stopAnimation(!0)
            }), t.painter.pathToDataUrl()
        }
    }, X_.getDataURL = function (t) {
        t = t || {};
        var e = t.excludeComponents, n = this._model, i = [], r = this;
        I_(e, function (t) {
            n.eachComponent({mainType: t}, function (t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e), e.group.ignore = !0)
            })
        });
        var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return I_(i, function (t) {
            t.group.ignore = !1
        }), a
    }, X_.getConnectedDataURL = function (t) {
        if (Ef.canvasSupported) {
            var e = this.group, n = Math.min, r = Math.max, a = 1 / 0;
            if (nx[e]) {
                var o = a, s = a, l = -a, u = -a, h = [], c = t && t.pixelRatio || 1;
                f(ex, function (a) {
                    if (a.group === e) {
                        var c = a.getRenderedCanvas(i(t)), d = a.getDom().getBoundingClientRect();
                        o = n(d.left, o), s = n(d.top, s), l = r(d.right, l), u = r(d.bottom, u), h.push({
                            dom: c,
                            left: d.left,
                            top: d.top
                        })
                    }
                }), o *= c, s *= c, l *= c, u *= c;
                var d = l - o, p = u - s, g = jf();
                g.width = d, g.height = p;
                var v = Pi(g);
                return I_(h, function (t) {
                    var e = new vi({style: {x: t.left * c - o, y: t.top * c - s, image: t.dom}});
                    v.add(e)
                }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }, X_.convertToPixel = _(ml, "convertToPixel"), X_.convertFromPixel = _(ml, "convertFromPixel"), X_.containPixel = function (t, e) {
        var n, i = this._model;
        return t = ji(i, t), f(t, function (t, i) {
            i.indexOf("Models") >= 0 && f(t, function (t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) n |= !!r.containPoint(e); else if ("seriesModels" === i) {
                    var a = this._chartsMap[t.__viewId];
                    a && a.containPoint && (n |= a.containPoint(e, t))
                }
            }, this)
        }, this), !!n
    }, X_.getVisual = function (t, e) {
        var n = this._model;
        t = ji(n, t, {defaultMainType: "series"});
        var i = t.seriesModel, r = i.getData(),
            a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
        return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
    }, X_.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
    }, X_.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
    };
    var Z_ = {
        prepareAndUpdate: function (t) {
            yl(this), Z_.update.call(this, t)
        }, update: function (t) {
            var e = this._model, n = this._api, i = this._zr, r = this._coordSysMgr, a = this._scheduler;
            if (e) {
                a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), xl(this, e), r.update(e, n), Il(e), a.performVisualTasks(e, t), Cl(this, e, n, t);
                var o = e.get("backgroundColor") || "transparent";
                if (Ef.canvasSupported) i.setBackgroundColor(o); else {
                    var s = He(o);
                    o = Ke(s, "rgb"), 0 === s[3] && (o = "transparent")
                }
                Dl(e, n)
            }
        }, updateTransform: function (t) {
            var e = this._model, n = this, i = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function (a, o) {
                    var s = n.getViewOfComponentModel(o);
                    if (s && s.__alive) if (s.updateTransform) {
                        var l = s.updateTransform(o, e, i, t);
                        l && l.update && r.push(s)
                    } else r.push(s)
                });
                var a = F();
                e.eachSeries(function (r) {
                    var o = n._chartsMap[r.__viewId];
                    if (o.updateTransform) {
                        var s = o.updateTransform(r, e, i, t);
                        s && s.update && a.set(r.uid, 1)
                    } else a.set(r.uid, 1)
                }), Il(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: a
                }), Al(n, e, i, t, a), Dl(e, this._api)
            }
        }, updateView: function (t) {
            var e = this._model;
            e && (Rs.markUpdateMethod(t, "updateView"), Il(e), this._scheduler.performVisualTasks(e, t, {setDirty: !0}), Cl(this, this._model, this._api, t), Dl(e, this._api))
        }, updateVisual: function (t) {
            Z_.update.call(this, t)
        }, updateLayout: function (t) {
            Z_.update.call(this, t)
        }
    };
    X_.resize = function (t) {
        this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(), e) {
            var n = e.resetOption("media"), i = t && t.silent;
            this[W_] = !0, n && yl(this), Z_.update.call(this), this[W_] = !1, bl.call(this, i), Ml.call(this, i)
        }
    }, X_.showLoading = function (t, e) {
        if (k_(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), tx[t]) {
            var n = tx[t](this._api, e), i = this._zr;
            this._loadingFX = n, i.add(n)
        }
    }, X_.hideLoading = function () {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
    }, X_.makeActionFromEvent = function (t) {
        var e = o({}, t);
        return e.type = q_[t.type], e
    }, X_.dispatchAction = function (t, e) {
        if (k_(e) || (e = {silent: !!e}), Y_[t.type] && this._model) {
            if (this[W_]) return void this._pendingActions.push(t);
            wl.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Ef.browser.weChat && this._throttledZrFlush(), bl.call(this, e.silent), Ml.call(this, e.silent)
        }
    }, X_.appendData = function (t) {
        var e = t.seriesIndex, n = this.getModel(), i = n.getSeriesByIndex(e);
        i.appendData(t), this._scheduler.unfinished = !0
    }, X_.on = pl("on"), X_.off = pl("off"), X_.one = pl("one");
    var j_ = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    X_._initEvents = function () {
        I_(j_, function (t) {
            this._zr.on(t, function (e) {
                var n, i = this.getModel(), r = e.target, a = "globalout" === t;
                if (a) n = {}; else if (r && null != r.dataIndex) {
                    var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                    n = s && s.getDataParams(r.dataIndex, r.dataType, r) || {}
                } else r && r.eventData && (n = o({}, r.eventData));
                if (n) {
                    var l = n.componentType, u = n.componentIndex;
                    ("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", u = n.seriesIndex);
                    var h = l && null != u && i.getComponent(l, u),
                        c = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];
                    n.event = e, n.type = t, this._ecEventProcessor.eventInfo = {
                        targetEl: r,
                        packedEvent: n,
                        model: h,
                        view: c
                    }, this.trigger(t, n)
                }
            }, this)
        }, this), I_(q_, function (t, e) {
            this._messageCenter.on(e, function (t) {
                this.trigger(e, t)
            }, this)
        }, this)
    }, X_.isDisposed = function () {
        return this._disposed
    }, X_.clear = function () {
        this.setOption({series: []}, !0)
    }, X_.dispose = function () {
        if (!this._disposed) {
            this._disposed = !0, qi(this.getDom(), ax, "");
            var t = this._api, e = this._model;
            I_(this._componentsViews, function (n) {
                n.dispose(e, t)
            }), I_(this._chartsViews, function (n) {
                n.dispose(e, t)
            }), this._zr.dispose(), delete ex[this.id]
        }
    }, c(vl, ip), El.prototype = {
        constructor: El, normalizeQuery: function (t) {
            var e = {}, n = {}, i = {};
            if (b(t)) {
                var r = A_(t);
                e.mainType = r.main || null, e.subType = r.sub || null
            } else {
                var a = ["Index", "Name", "Id"], o = {name: 1, dataIndex: 1, dataType: 1};
                f(t, function (t, r) {
                    for (var s = !1, l = 0; l < a.length; l++) {
                        var u = a[l], h = r.lastIndexOf(u);
                        if (h > 0 && h === r.length - u.length) {
                            var c = r.slice(0, h);
                            "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
                        }
                    }
                    o.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t)
                })
            }
            return {cptQuery: e, dataQuery: n, otherQuery: i}
        }, filter: function (t, e) {
            function n(t, e, n, i) {
                return null == t[n] || e[i || n] === t[n]
            }

            var i = this.eventInfo;
            if (!i) return !0;
            var r = i.targetEl, a = i.packedEvent, o = i.model, s = i.view;
            if (!o || !s) return !0;
            var l = e.cptQuery, u = e.dataQuery;
            return n(l, o, "mainType") && n(l, o, "subType") && n(l, o, "index", "componentIndex") && n(l, o, "name") && n(l, o, "id") && n(u, a, "name") && n(u, a, "dataIndex") && n(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a))
        }, afterTrigger: function () {
            this.eventInfo = null
        }
    };
    var Y_ = {}, q_ = {}, U_ = [], $_ = [], K_ = [], Q_ = [], J_ = {}, tx = {}, ex = {}, nx = {}, ix = new Date - 0,
        rx = new Date - 0, ax = "_echarts_instance_", ox = Nl;
    Kl(R_, Ky), Xl(Ay), Zl(B_, Dy), Jl("default", e_), Yl({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, V), Yl({type: "downplay", event: "downplay", update: "downplay"}, V), Gl("light", u_), Gl("dark", f_);
    var sx = {};
    lu.prototype = {
        constructor: lu, add: function (t) {
            return this._add = t, this
        }, update: function (t) {
            return this._update = t, this
        }, remove: function (t) {
            return this._remove = t, this
        }, execute: function () {
            var t, e = this._old, n = this._new, i = {}, r = {}, a = [], o = [];
            for (uu(e, i, a, "_oldKeyGetter", this), uu(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
                var s = a[t], l = r[s];
                if (null != l) {
                    var u = l.length;
                    u ? (1 === u && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t)
                } else this._remove && this._remove(t)
            }
            for (var t = 0; t < o.length; t++) {
                var s = o[t];
                if (r.hasOwnProperty(s)) {
                    var l = r[s];
                    if (null == l) continue;
                    if (l.length) for (var h = 0, u = l.length; u > h; h++) this._add && this._add(l[h]); else this._add && this._add(l)
                }
            }
        }
    };
    var lx = F(["tooltip", "label", "itemName", "itemId", "seriesName"]), ux = M, hx = "undefined", cx = "e\x00\x00",
        dx = {
            "float": typeof Float64Array === hx ? Array : Float64Array,
            "int": typeof Int32Array === hx ? Array : Int32Array,
            ordinal: Array,
            number: Array,
            time: Array
        }, fx = typeof Uint32Array === hx ? Array : Uint32Array, px = typeof Uint16Array === hx ? Array : Uint16Array,
        gx = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
        vx = ["_extent", "_approximateExtent", "_rawExtent"], mx = function (t, e) {
            t = t || ["x", "y"];
            for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
                var o = t[a];
                b(o) && (o = {name: o});
                var s = o.name;
                o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = [])
            }
            this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = hu(this), this._invertedIndicesMap = r, this._calculationInfo = {}
        }, yx = mx.prototype;
    yx.type = "list", yx.hasItemOption = !0, yx.getDimension = function (t) {
        return isNaN(t) || (t = this.dimensions[t] || t), t
    }, yx.getDimensionInfo = function (t) {
        return this._dimensionInfos[this.getDimension(t)]
    }, yx.getDimensionsOnCoord = function () {
        return this._dimensionsSummary.dataDimsOnCoord.slice()
    }, yx.mapDimension = function (t, e) {
        var n = this._dimensionsSummary;
        if (null == e) return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return e === !0 ? (i || []).slice() : i && i[e]
    }, yx.initData = function (t, e, n) {
        var i = Ao.isInstance(t) || d(t);
        i && (t = new gs(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = By[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
    }, yx.getProvider = function () {
        return this._rawData
    }, yx.appendData = function (t) {
        var e = this._rawData, n = this.count();
        e.appendData(t);
        var i = e.count();
        e.persistent || (i += n), this._initDataFromProvider(n, i)
    }, yx._initDataFromProvider = function (t, e) {
        if (!(t >= e)) {
            for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s > g; g++) {
                var v = o[g];
                c[v] || (c[v] = Su());
                var m = l[v];
                0 === m.otherDims.itemName && (n = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
                var y = dx[m.type];
                a[v] || (a[v] = []);
                var _ = a[v][p];
                if (_ && _.length < i) {
                    for (var x = new y(Math.min(e - p * i, i)), w = 0; w < _.length; w++) x[w] = _[w];
                    a[v][p] = x
                }
                for (var b = f * i; e > b; b += i) a[v].push(new y(Math.min(e - b, i)));
                this._chunkCount = a[v].length
            }
            for (var M = new Array(s), S = t; e > S; S++) {
                M = r.getItem(S, M);
                for (var T = Math.floor(S / i), I = S % i, b = 0; s > b; b++) {
                    var v = o[b], C = a[v][T], k = this._dimValueGetter(M, v, S, b);
                    C[I] = k;
                    var A = c[v];
                    k < A[0] && (A[0] = k), k > A[1] && (A[1] = k)
                }
                if (!r.pure) {
                    var D = u[S];
                    if (M && null == D) if (null != M.name) u[S] = D = M.name; else if (null != n) {
                        var P = o[n], O = a[P][T];
                        if (O) {
                            D = O[I];
                            var L = l[P].ordinalMeta;
                            L && L.categories.length && (D = L.categories[D])
                        }
                    }
                    var B = null == M ? null : M.id;
                    null == B && null != D && (d[D] = d[D] || 0, B = D, d[D] > 0 && (B += "__ec__" + d[D]), d[D]++), null != B && (h[S] = B)
                }
            }
            !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, vu(this)
        }
    }, yx.count = function () {
        return this._count
    }, yx.getIndices = function () {
        var t, e = this._indices;
        if (e) {
            var n = e.constructor, i = this._count;
            if (n === Array) {
                t = new n(i);
                for (var r = 0; i > r; r++) t[r] = e[r]
            } else t = new n(e.buffer, 0, i)
        } else for (var n = fu(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;
        return t
    }, yx.get = function (t, e) {
        if (!(e >= 0 && e < this._count)) return 0 / 0;
        var n = this._storage;
        if (!n[t]) return 0 / 0;
        e = this.getRawIndex(e);
        var i = Math.floor(e / this._chunkSize), r = e % this._chunkSize, a = n[t][i], o = a[r];
        return o
    }, yx.getByRawIndex = function (t, e) {
        if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
        var n = this._storage[t];
        if (!n) return 0 / 0;
        var i = Math.floor(e / this._chunkSize), r = e % this._chunkSize, a = n[i];
        return a[r]
    }, yx._getFast = function (t, e) {
        var n = Math.floor(e / this._chunkSize), i = e % this._chunkSize, r = this._storage[t][n];
        return r[i]
    }, yx.getValues = function (t, e) {
        var n = [];
        x(t) || (e = t, t = this.dimensions);
        for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
        return n
    }, yx.hasValue = function (t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++) if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
        return !0
    }, yx.getDataExtent = function (t) {
        t = this.getDimension(t);
        var e = this._storage[t], n = Su();
        if (!e) return n;
        var i, r = this.count(), a = !this._indices;
        if (a) return this._rawExtent[t].slice();
        if (i = this._extent[t]) return i.slice();
        i = n;
        for (var o = i[0], s = i[1], l = 0; r > l; l++) {
            var u = this._getFast(t, this.getRawIndex(l));
            o > u && (o = u), u > s && (s = u)
        }
        return i = [o, s], this._extent[t] = i, i
    }, yx.getApproximateExtent = function (t) {
        return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
    }, yx.setApproximateExtent = function (t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice()
    }, yx.getCalculationInfo = function (t) {
        return this._calculationInfo[t]
    }, yx.setCalculationInfo = function (t, e) {
        ux(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
    }, yx.getSum = function (t) {
        var e = this._storage[t], n = 0;
        if (e) for (var i = 0, r = this.count(); r > i; i++) {
            var a = this.get(t, i);
            isNaN(a) || (n += a)
        }
        return n
    }, yx.getMedian = function (t) {
        var e = [];
        this.each(t, function (t) {
            isNaN(t) || e.push(t)
        });
        var n = [].concat(e).sort(function (t, e) {
            return t - e
        }), i = this.count();
        return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
    }, yx.rawIndexOf = function (t, e) {
        var n = t && this._invertedIndicesMap[t], i = n[e];
        return null == i || isNaN(i) ? -1 : i
    }, yx.indexOfName = function (t) {
        for (var e = 0, n = this.count(); n > e; e++) if (this.getName(e) === t) return e;
        return -1
    }, yx.indexOfRawIndex = function (t) {
        if (!this._indices) return t;
        if (t >= this._rawCount || 0 > t) return -1;
        var e = this._indices, n = e[t];
        if (null != n && n < this._count && n === t) return t;
        for (var i = 0, r = this._count - 1; r >= i;) {
            var a = (i + r) / 2 | 0;
            if (e[a] < t) i = a + 1; else {
                if (!(e[a] > t)) return a;
                r = a - 1
            }
        }
        return -1
    }, yx.indicesOfNearest = function (t, e, n) {
        var i = this._storage, r = i[t], a = [];
        if (!r) return a;
        null == n && (n = 1 / 0);
        for (var o = Number.MAX_VALUE, s = -1, l = 0, u = this.count(); u > l; l++) {
            var h = e - this.get(t, l), c = Math.abs(h);
            n >= h && o >= c && ((o > c || h >= 0 && 0 > s) && (o = c, s = h, a.length = 0), a.push(l))
        }
        return a
    }, yx.getRawIndex = yu, yx.getRawDataItem = function (t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], n = 0; n < this.dimensions.length; n++) {
            var i = this.dimensions[n];
            e.push(this.get(i, t))
        }
        return e
    }, yx.getName = function (t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || mu(this, this._nameDimIdx, e) || ""
    }, yx.getId = function (t) {
        return xu(this, this.getRawIndex(t))
    }, yx.each = function (t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(wu(t), this.getDimension, this);
            for (var r = t.length, a = 0; a < this.count(); a++) switch (r) {
                case 0:
                    e.call(n, a);
                    break;
                case 1:
                    e.call(n, this.get(t[0], a), a);
                    break;
                case 2:
                    e.call(n, this.get(t[0], a), this.get(t[1], a), a);
                    break;
                default:
                    for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
                    s[o] = a, e.apply(n, s)
            }
        }
    }, yx.filterSelf = function (t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(wu(t), this.getDimension, this);
            for (var r = this.count(), a = fu(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c = 0; r > c; c++) {
                var d, f = this.getRawIndex(c);
                if (0 === l) d = e.call(n, c); else if (1 === l) {
                    var g = this._getFast(h, f);
                    d = e.call(n, g, c)
                } else {
                    for (var v = 0; l > v; v++) s[v] = this._getFast(h, f);
                    s[v] = c, d = e.apply(n, s)
                }
                d && (o[u++] = f)
            }
            return r > u && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? _u : yu, this
        }
    }, yx.selectRange = function (t) {
        if (this._count) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(n);
            var i = e.length;
            if (i) {
                var r = this.count(), a = fu(this), o = new a(r), s = 0, l = e[0], u = t[l][0], h = t[l][1], c = !1;
                if (!this._indices) {
                    var d = 0;
                    if (1 === i) {
                        for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                            var y = g[m];
                            (y >= u && h >= y || isNaN(y)) && (o[s++] = d), d++
                        }
                        c = !0
                    } else if (2 === i) {
                        for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                            var y = g[m], M = b[m];
                            (y >= u && h >= y || isNaN(y)) && (M >= x && w >= M || isNaN(M)) && (o[s++] = d), d++
                        }
                        c = !0
                    }
                }
                if (!c) if (1 === i) for (var m = 0; r > m; m++) {
                    var S = this.getRawIndex(m), y = this._getFast(l, S);
                    (y >= u && h >= y || isNaN(y)) && (o[s++] = S)
                } else for (var m = 0; r > m; m++) {
                    for (var T = !0, S = this.getRawIndex(m), p = 0; i > p; p++) {
                        var I = e[p], y = this._getFast(n, S);
                        (y < t[I][0] || y > t[I][1]) && (T = !1)
                    }
                    T && (o[s++] = this.getRawIndex(m))
                }
                return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? _u : yu, this
            }
        }
    }, yx.mapArray = function (t, e, n, i) {
        "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
        var r = [];
        return this.each(t, function () {
            r.push(e && e.apply(this, arguments))
        }, n), r
    }, yx.map = function (t, e, n, i) {
        n = n || i || this, t = p(wu(t), this.getDimension, this);
        var r = bu(this, t);
        r._indices = this._indices, r.getRawIndex = r._indices ? _u : yu;
        for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; u > d; d++) {
            for (var f = 0; l > f; f++) h[f] = this.get(t[f], d);
            h[l] = d;
            var g = e && e.apply(n, h);
            if (null != g) {
                "object" != typeof g && (o[0] = g, g = o);
                for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
                    var x = t[_], w = g[_], b = c[x], M = a[x];
                    M && (M[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
                }
            }
        }
        return r
    }, yx.downSample = function (t, e, n, i) {
        for (var r = bu(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new (fu(this))(u), f = 0, p = 0; u > p; p += s) {
            s > u - p && (s = u - p, o.length = s);
            for (var g = 0; s > g; g++) {
                var v = this.getRawIndex(p + g), m = Math.floor(v / h), y = v % h;
                o[g] = l[m][y]
            }
            var _ = n(o), x = this.getRawIndex(Math.min(p + i(o, _) || 0, u - 1)), w = Math.floor(x / h), b = x % h;
            l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x
        }
        return r._count = f, r._indices = d, r.getRawIndex = _u, r
    }, yx.getItemModel = function (t) {
        var e = this.hostModel;
        return new Na(this.getRawDataItem(t), e, e && e.ecModel)
    }, yx.diff = function (t) {
        var e = this;
        return new lu(t ? t.getIndices() : [], this.getIndices(), function (e) {
            return xu(t, e)
        }, function (t) {
            return xu(e, t)
        })
    }, yx.getVisual = function (t) {
        var e = this._visual;
        return e && e[t]
    }, yx.setVisual = function (t, e) {
        if (ux(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]); else this._visual = this._visual || {}, this._visual[t] = e
    }, yx.setLayout = function (t, e) {
        if (ux(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]); else this._layout[t] = e
    }, yx.getLayout = function (t) {
        return this._layout[t]
    }, yx.getItemLayout = function (t) {
        return this._itemLayouts[t]
    }, yx.setItemLayout = function (t, e, n) {
        this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e
    }, yx.clearItemLayouts = function () {
        this._itemLayouts.length = 0
    }, yx.getItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t], r = i && i[e];
        return null != r || n ? r : this.getVisual(e)
    }, yx.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {}, r = this.hasItemVisual;
        if (this._itemVisuals[t] = i, ux(e)) for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0); else i[e] = n, r[e] = !0
    }, yx.clearAllVisual = function () {
        this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
    };
    var _x = function (t) {
        t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
    };
    yx.setItemGraphicEl = function (t, e) {
        var n = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(_x, e)), this._graphicEls[t] = e
    }, yx.getItemGraphicEl = function (t) {
        return this._graphicEls[t]
    }, yx.eachItemGraphicEl = function (t, e) {
        f(this._graphicEls, function (n, i) {
            n && t && t.call(e, n, i)
        })
    }, yx.cloneShallow = function (t) {
        if (!t) {
            var e = p(this.dimensions, this.getDimensionInfo, this);
            t = new mx(e, this.hostModel)
        }
        if (t._storage = this._storage, gu(t, this), this._indices) {
            var n = this._indices.constructor;
            t._indices = new n(this._indices)
        } else t._indices = null;
        return t.getRawIndex = t._indices ? _u : yu, t
    }, yx.wrapMethod = function (t, e) {
        var n = this[t];
        "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
            var t = n.apply(this, arguments);
            return e.apply(this, [t].concat(P(arguments)))
        })
    }, yx.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], yx.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
    var xx = function (t, e) {
        return e = e || {}, Tu(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        })
    };
    Bu.prototype.parse = function (t) {
        return t
    }, Bu.prototype.getSetting = function (t) {
        return this._setting[t]
    }, Bu.prototype.contain = function (t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    }, Bu.prototype.normalize = function (t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }, Bu.prototype.scale = function (t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    }, Bu.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }, Bu.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
    }, Bu.prototype.getExtent = function () {
        return this._extent.slice()
    }, Bu.prototype.setExtent = function (t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
    }, Bu.prototype.isBlank = function () {
        return this._isBlank
    }, Bu.prototype.setBlank = function (t) {
        this._isBlank = t
    }, Bu.prototype.getLabel = null, Ji(Bu), ir(Bu, {registerWhenExtend: !0}), Eu.createByAxisModel = function (t) {
        var e = t.option, n = e.data, i = n && p(n, zu);
        return new Eu({categories: i, needCollect: !i, deduplication: e.dedplication !== !1})
    };
    var bx = Eu.prototype;
    bx.getOrdinal = function (t) {
        return Ru(this).get(t)
    }, bx.parseAndCollect = function (t) {
        var e, n = this._needCollect;
        if ("string" != typeof t && !n) return t;
        if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
        var i = Ru(this);
        return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e
    };
    var Mx = Bu.prototype, Sx = Bu.extend({
        type: "ordinal", init: function (t, e) {
            (!t || x(t)) && (t = new Eu({categories: t})), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
        }, parse: function (t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
        }, contain: function (t) {
            return t = this.parse(t), Mx.contain.call(this, t) && null != this._ordinalMeta.categories[t]
        }, normalize: function (t) {
            return Mx.normalize.call(this, this.parse(t))
        }, scale: function (t) {
            return Math.round(Mx.scale.call(this, t))
        }, getTicks: function () {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
            return t
        }, getLabel: function (t) {
            return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
        }, count: function () {
            return this._extent[1] - this._extent[0] + 1
        }, unionExtentFromData: function (t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        }, getOrdinalMeta: function () {
            return this._ordinalMeta
        }, niceTicks: V, niceExtent: V
    });
    Sx.create = function () {
        return new Sx
    };
    var Tx = qa, Ix = qa, Cx = Bu.extend({
        type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function (t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
        }, unionExtent: function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Cx.prototype.setExtent.call(this, e[0], e[1])
        }, getInterval: function () {
            return this._interval
        }, setInterval: function (t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Nu(t)
        }, getTicks: function () {
            return Hu(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
        }, getLabel: function (t, e) {
            if (null == t) return "";
            var n = e && e.precision;
            return null == n ? n = Ka(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = Ix(t, n, !0), uo(t)
        }, niceTicks: function (t, e, n) {
            t = t || 5;
            var i = this._extent, r = i[1] - i[0];
            if (isFinite(r)) {
                0 > r && (r = -r, i.reverse());
                var a = Fu(i, t, e, n);
                this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
            }
        }, niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var n = e[0];
                t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
            } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = Ix(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Ix(Math.ceil(e[1] / r) * r))
        }
    });
    Cx.create = function () {
        return new Cx
    };
    var kx = "__ec_stack_", Ax = .5, Dx = "undefined" != typeof Float32Array ? Float32Array : Array, Px = ({
            seriesType: "bar", plan: Gy(), reset: function (t) {
                function e(t, e) {
                    for (var n, c = new Dx(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) f[u] = e.get(o, n), f[1 - u] = e.get(s, n), d = i.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];
                    e.setLayout({largePoints: c, barWidth: h, valueAxisStart: Ku(r, a, !1), valueAxisHorizontal: l})
                }

                if (Uu(t) && $u(t)) {
                    var n = t.getData(), i = t.coordinateSystem, r = i.getBaseAxis(), a = i.getOtherAxis(r),
                        o = n.mapDimension(a.dim), s = n.mapDimension(r.dim), l = a.isHorizontal(), u = l ? 0 : 1,
                        h = qu(ju([t]), r, t).width;
                    return h > Ax || (h = Ax), {progress: e}
                }
            }
        }, Cx.prototype), Ox = Math.ceil, Lx = Math.floor, Bx = 1e3, Ex = 60 * Bx, Rx = 60 * Ex, zx = 24 * Rx,
        Fx = function (t, e, n, i) {
            for (; i > n;) {
                var r = n + i >>> 1;
                t[r][1] < e ? n = r + 1 : i = r
            }
            return n
        }, Nx = Cx.extend({
            type: "time", getLabel: function (t) {
                var e = this._stepLvl, n = new Date(t);
                return mo(e[0], n, this.getSetting("useUTC"))
            }, niceExtent: function (t) {
                var e = this._extent;
                if (e[0] === e[1] && (e[0] -= zx, e[1] += zx), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                    var n = new Date;
                    e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - zx
                }
                this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var i = this._interval;
                t.fixMin || (e[0] = qa(Lx(e[0] / i) * i)), t.fixMax || (e[1] = qa(Ox(e[1] / i) * i))
            }, niceTicks: function (t, e, n) {
                t = t || 10;
                var i = this._extent, r = i[1] - i[0], a = r / t;
                null != e && e > a && (a = e), null != n && a > n && (a = n);
                var o = Vx.length, s = Fx(Vx, a, 0, o), l = Vx[Math.min(s, o - 1)], u = l[1];
                if ("year" === l[0]) {
                    var h = r / u, c = ao(h / t, !0);
                    u *= c
                }
                var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
                    f = [Math.round(Ox((i[0] - d) / u) * u + d), Math.round(Lx((i[1] - d) / u) * u + d)];
                Wu(f, i), this._stepLvl = l, this._interval = u, this._niceExtent = f
            }, parse: function (t) {
                return +no(t)
            }
        });
    f(["contain", "normalize"], function (t) {
        Nx.prototype[t] = function (e) {
            return Px[t].call(this, this.parse(e))
        }
    });
    var Vx = [["hh:mm:ss", Bx], ["hh:mm:ss", 5 * Bx], ["hh:mm:ss", 10 * Bx], ["hh:mm:ss", 15 * Bx], ["hh:mm:ss", 30 * Bx], ["hh:mm\nMM-dd", Ex], ["hh:mm\nMM-dd", 5 * Ex], ["hh:mm\nMM-dd", 10 * Ex], ["hh:mm\nMM-dd", 15 * Ex], ["hh:mm\nMM-dd", 30 * Ex], ["hh:mm\nMM-dd", Rx], ["hh:mm\nMM-dd", 2 * Rx], ["hh:mm\nMM-dd", 6 * Rx], ["hh:mm\nMM-dd", 12 * Rx], ["MM-dd\nyyyy", zx], ["MM-dd\nyyyy", 2 * zx], ["MM-dd\nyyyy", 3 * zx], ["MM-dd\nyyyy", 4 * zx], ["MM-dd\nyyyy", 5 * zx], ["MM-dd\nyyyy", 6 * zx], ["week", 7 * zx], ["MM-dd\nyyyy", 10 * zx], ["week", 14 * zx], ["week", 21 * zx], ["month", 31 * zx], ["week", 42 * zx], ["month", 62 * zx], ["week", 70 * zx], ["quarter", 95 * zx], ["month", 31 * zx * 4], ["month", 31 * zx * 5], ["half-year", 380 * zx / 2], ["month", 31 * zx * 8], ["month", 31 * zx * 10], ["year", 380 * zx]];
    Nx.create = function (t) {
        return new Nx({useUTC: t.ecModel.get("useUTC")})
    };
    var Wx = Bu.prototype, Hx = Cx.prototype, Gx = Ka, Xx = qa, Zx = Math.floor, jx = Math.ceil, Yx = Math.pow,
        qx = Math.log, Ux = Bu.extend({
            type: "log", base: 10, $constructor: function () {
                Bu.apply(this, arguments), this._originalScale = new Cx
            }, getTicks: function () {
                var t = this._originalScale, e = this._extent, n = t.getExtent();
                return p(Hx.getTicks.call(this), function (i) {
                    var r = qa(Yx(this.base, i));
                    return r = i === e[0] && t.__fixMin ? Qu(r, n[0]) : r, r = i === e[1] && t.__fixMax ? Qu(r, n[1]) : r
                }, this)
            }, getLabel: Hx.getLabel, scale: function (t) {
                return t = Wx.scale.call(this, t), Yx(this.base, t)
            }, setExtent: function (t, e) {
                var n = this.base;
                t = qx(t) / qx(n), e = qx(e) / qx(n), Hx.setExtent.call(this, t, e)
            }, getExtent: function () {
                var t = this.base, e = Wx.getExtent.call(this);
                e[0] = Yx(t, e[0]), e[1] = Yx(t, e[1]);
                var n = this._originalScale, i = n.getExtent();
                return n.__fixMin && (e[0] = Qu(e[0], i[0])), n.__fixMax && (e[1] = Qu(e[1], i[1])), e
            }, unionExtent: function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = qx(t[0]) / qx(e), t[1] = qx(t[1]) / qx(e), Wx.unionExtent.call(this, t)
            }, unionExtentFromData: function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, n = e[1] - e[0];
                if (!(1 / 0 === n || 0 >= n)) {
                    var i = io(n), r = t / n * i;
                    for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
                    var a = [qa(jx(e[0] / i) * i), qa(Zx(e[1] / i) * i)];
                    this._interval = i, this._niceExtent = a
                }
            }, niceExtent: function (t) {
                Hx.niceExtent.call(this, t);
                var e = this._originalScale;
                e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
            }
        });
    f(["contain", "normalize"], function (t) {
        Ux.prototype[t] = function (e) {
            return e = qx(e) / qx(this.base), Wx[t].call(this, e)
        }
    }), Ux.create = function () {
        return new Ux
    };
    var $x = {
            getMin: function (t) {
                var e = this.option, n = t || null == e.rangeStart ? e.min : e.rangeStart;
                return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n
            }, getMax: function (t) {
                var e = this.option, n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
                return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n
            }, getNeedCrossZero: function () {
                var t = this.option;
                return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
            }, getCoordSysModel: V, setRange: function (t, e) {
                this.option.rangeStart = t, this.option.rangeEnd = e
            }, resetRange: function () {
                this.option.rangeStart = this.option.rangeEnd = null
            }
        }, Kx = qr({
            type: "triangle", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = e.width / 2, a = e.height / 2;
                t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath()
            }
        }), Qx = qr({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = e.width / 2, a = e.height / 2;
                t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath()
            }
        }), Jx = qr({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.x, i = e.y, r = e.width / 5 * 3, a = Math.max(r, e.height), o = r / 2, s = o * o / (a - o),
                    l = i - a + o + s, u = Math.asin(s / o), h = Math.cos(u) * o, c = Math.sin(u), d = Math.cos(u),
                    f = .6 * o, p = .7 * o;
                t.moveTo(n - h, l + s), t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath()
            }
        }), tw = qr({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.height, i = e.width, r = e.x, a = e.y, o = i / 3 * 2;
                t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath()
            }
        }), ew = {line: cm, rect: hm, roundRect: hm, square: hm, circle: em, diamond: Qx, pin: Jx, arrow: tw, triangle: Kx},
        nw = {
            line: function (t, e, n, i, r) {
                r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
            }, rect: function (t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i
            }, roundRect: function (t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
            }, square: function (t, e, n, i, r) {
                var a = Math.min(n, i);
                r.x = t, r.y = e, r.width = a, r.height = a
            }, circle: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
            }, diamond: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
            }, pin: function (t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
            }, arrow: function (t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
            }, triangle: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
            }
        }, iw = {};
    f(ew, function (t, e) {
        iw[e] = new t
    });
    var rw = qr({
        type: "symbol", shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0}, beforeBrush: function () {
            var t = this.style, e = this.shape;
            "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
        }, buildPath: function (t, e, n) {
            var i = e.symbolType, r = iw[i];
            "none" !== e.symbolType && (r || (i = "rect", r = iw[i]), nw[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
        }
    }), aw = {isDimensionStacked: Au, enableDataStack: ku, getStackedDimension: Du}, ow = (Object.freeze || Object)({
        createList: sh,
        getLayoutRect: xo,
        dataStack: aw,
        createScale: lh,
        mixinAxisModelCommonMethods: uh,
        completeDimensions: Tu,
        createDimensions: xx,
        createSymbol: oh
    }), sw = 1e-8;
    dh.prototype = {
        constructor: dh, properties: null, getBoundingRect: function () {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) if ("polygon" === o[s].type) {
                var l = o[s].exterior;
                yr(l, r, a), oe(n, n, r), se(i, i, a)
            }
            return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new gn(n[0], n[1], i[0] - n[0], i[1] - n[1])
        }, contain: function (t) {
            var e = this.getBoundingRect(), n = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t:for (var i = 0, r = n.length; r > i; i++) if ("polygon" === n[i].type) {
                var a = n[i].exterior, o = n[i].interiors;
                if (ch(a, t[0], t[1])) {
                    for (var s = 0; s < (o ? o.length : 0); s++) if (ch(o[s])) continue t;
                    return !0
                }
            }
            return !1
        }, transformTo: function (t, e, n, i) {
            var r = this.getBoundingRect(), a = r.width / r.height;
            n ? i || (i = n / a) : n = a * i;
            for (var o = new gn(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l.length; u++) if ("polygon" === l[u].type) {
                for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) ae(h[d], h[d], s);
                for (var f = 0; f < (c ? c.length : 0); f++) for (var d = 0; d < c[f].length; d++) ae(c[f][d], c[f][d], s)
            }
            r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2]
        }, cloneShallow: function (t) {
            null == t && (t = this.name);
            var e = new dh(t, this.geometries, this.center);
            return e._rect = this._rect, e.transformTo = null, e
        }
    };
    var lw = function (t) {
        return fh(t), p(v(t.features, function (t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0
        }), function (t) {
            var e = t.properties, n = t.geometry, i = n.coordinates, r = [];
            "Polygon" === n.type && r.push({
                type: "polygon",
                exterior: i[0],
                interiors: i.slice(1)
            }), "MultiPolygon" === n.type && f(i, function (t) {
                t[0] && r.push({type: "polygon", exterior: t[0], interiors: t.slice(1)})
            });
            var a = new dh(e.name, r, e.cp);
            return a.properties = e, a
        })
    }, uw = Zi(), hw = [0, 1], cw = function (t, e, n) {
        this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
    };
    cw.prototype = {
        constructor: cw, contain: function (t) {
            var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
            return t >= n && i >= t
        }, containData: function (t) {
            return this.contain(this.dataToCoord(t))
        }, getExtent: function () {
            return this._extent.slice()
        }, getPixelPrecision: function (t) {
            return Qa(t || this.scale.getExtent(), this._extent)
        }, setExtent: function (t, e) {
            var n = this._extent;
            n[0] = t, n[1] = e
        }, dataToCoord: function (t, e) {
            var n = this._extent, i = this.scale;
            return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), Dh(n, i.count())), ja(t, hw, n, e)
        }, coordToData: function (t, e) {
            var n = this._extent, i = this.scale;
            this.onBand && "ordinal" === i.type && (n = n.slice(), Dh(n, i.count()));
            var r = ja(t, n, hw, e);
            return this.scale.scale(r)
        }, pointToData: function () {
        }, getTicksCoords: function (t) {
            t = t || {};
            var e = t.tickModel || this.getTickModel(), n = vh(this, e), i = n.ticks, r = p(i, function (t) {
                return {coord: this.dataToCoord(t), tickValue: t}
            }, this), a = e.get("alignWithLabel");
            return Ph(this, r, n.tickCategoryInterval, a, t.clamp), r
        }, getViewLabels: function () {
            return gh(this).labels
        }, getLabelModel: function () {
            return this.model.getModel("axisLabel")
        }, getTickModel: function () {
            return this.model.getModel("axisTick")
        }, getBandWidth: function () {
            var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n
        }, isHorizontal: null, getRotate: null, calculateCategoryInterval: function () {
            return Th(this)
        }
    };
    var dw = lw, fw = {};
    f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
        fw[t] = Uf[t]
    });
    var pw = {};
    f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {
        pw[t] = Cm[t]
    });
    var gw = function (t, e, n) {
        e = x(e) && {coordDimensions: e} || o({}, e);
        var i = t.getSource(), r = xx(i, e), a = new mx(r, t);
        return a.initData(i, n), a
    }, vw = {
        updateSelectedMap: function (t) {
            this._targetList = x(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function (t, e) {
                return t.set(e.name, e), t
            }, F())
        }, select: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t), i = this.get("selectedMode");
            "single" === i && this._selectTargetMap.each(function (t) {
                t.selected = !1
            }), n && (n.selected = !0)
        }, unSelect: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            n && (n.selected = !1)
        }, toggleSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0
        }, isSelected: function (t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return n && n.selected
        }
    }, mw = nu({
        type: "series.pie",
        init: function (t) {
            mw.superApply(this, "init", arguments), this.legendDataProvider = function () {
                return this.getRawData()
            }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
        },
        mergeOption: function (t) {
            mw.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
        },
        getInitialData: function () {
            return gw(this, ["value"])
        },
        _createSelectableList: function () {
            for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); r > i; i++) n.push({
                name: t.getName(i),
                value: t.get(e, i),
                selected: Ms(t, i, "selected")
            });
            return n
        },
        getDataParams: function (t) {
            var e = this.getData(), n = mw.superCall(this, "getDataParams", t), i = [];
            return e.each(e.mapDimension("value"), function (t) {
                i.push(t)
            }), n.percent = Ja(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n
        },
        _defaultLabelLine: function (t) {
            zi(t, "labelLine", ["show"]);
            var e = t.labelLine, n = t.emphasis.labelLine;
            e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            label: {rotate: !1, show: !0, position: "outer"},
            labelLine: {show: !0, length: 15, length2: 15, smooth: !1, lineStyle: {width: 1, type: "solid"}},
            itemStyle: {borderWidth: 1},
            animationType: "expansion",
            animationEasing: "cubicOut"
        }
    });
    c(mw, vw);
    var yw = Bh.prototype;
    yw.updateData = function (t, e, n) {
        function i() {
            a.stopAnimation(!0), a.animateTo({shape: {r: h.r + l.get("hoverOffset")}}, 300, "elasticOut")
        }

        function r() {
            a.stopAnimation(!0), a.animateTo({shape: {r: h.r}}, 300, "elasticOut")
        }

        var a = this.childAt(0), l = t.hostModel, u = t.getItemModel(e), h = t.getItemLayout(e), c = o({}, h);
        if (c.label = null, n) {
            a.setShape(c);
            var d = l.getShallow("animationType");
            "scale" === d ? (a.shape.r = h.r0, Pa(a, {shape: {r: h.r}}, l, e)) : (a.shape.endAngle = h.startAngle, Da(a, {shape: {endAngle: h.endAngle}}, l, e))
        } else Da(a, {shape: c}, l, e);
        var f = t.getItemVisual(e, "color");
        a.useStyle(s({
            lineJoin: "bevel",
            fill: f
        }, u.getModel("itemStyle").getItemStyle())), a.hoverStyle = u.getModel("emphasis.itemStyle").getItemStyle();
        var p = u.getShallow("cursor");
        p && a.attr("cursor", p), Lh(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), ma(this)
    }, yw._updateLabel = function (t, e) {
        var n = this.childAt(1), i = this.childAt(2), r = t.hostModel, a = t.getItemModel(e), o = t.getItemLayout(e),
            s = o.label, l = t.getItemVisual(e, "color");
        Da(n, {shape: {points: s.linePoints || [[s.x, s.y], [s.x, s.y], [s.x, s.y]]}}, r, e), Da(i, {
            style: {
                x: s.x,
                y: s.y
            }
        }, r, e), i.attr({rotation: s.rotation, origin: [s.x, s.y], z2: 10});
        var u = a.getModel("label"), h = a.getModel("emphasis.label"), c = a.getModel("labelLine"),
            d = a.getModel("emphasis.labelLine"), l = t.getItemVisual(e, "color");
        _a(i.style, i.hoverStyle = {}, u, h, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: t.getName(e),
            autoColor: l,
            useInsideStyle: !!s.inside
        }, {
            textAlign: s.textAlign,
            textVerticalAlign: s.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }), i.ignore = i.normalIgnore = !u.get("show"), i.hoverIgnore = !h.get("show"), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), n.setStyle({
            stroke: l,
            opacity: t.getItemVisual(e, "opacity")
        }), n.setStyle(c.getModel("lineStyle").getLineStyle()), n.hoverStyle = d.getModel("lineStyle").getLineStyle();
        var f = c.get("smooth");
        f && f === !0 && (f = .4), n.setShape({smooth: f})
    }, h(Bh, Gp);
    var _w = (Rs.extend({
        type: "pie", init: function () {
            var t = new Gp;
            this._sectorGroup = t
        }, render: function (t, e, n, i) {
            if (!i || i.from !== this.uid) {
                var r = t.getData(), a = this._data, o = this.group, s = e.get("animation"), l = !a,
                    u = t.get("animationType"), h = _(Oh, this.uid, t, s, n), c = t.get("selectedMode");
                if (r.diff(a).add(function (t) {
                    var e = new Bh(r, t);
                    l && "scale" !== u && e.eachChild(function (t) {
                        t.stopAnimation(!0)
                    }), c && e.on("click", h), r.setItemGraphicEl(t, e), o.add(e)
                }).update(function (t, e) {
                    var n = a.getItemGraphicEl(e);
                    n.updateData(r, t), n.off("click"), c && n.on("click", h), o.add(n), r.setItemGraphicEl(t, n)
                }).remove(function (t) {
                    var e = a.getItemGraphicEl(t);
                    o.remove(e)
                }).execute(), s && l && r.count() > 0 && "scale" !== u) {
                    var d = r.getItemLayout(0), f = Math.max(n.getWidth(), n.getHeight()) / 2,
                        p = y(o.removeClipPath, o);
                    o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
                } else o.removeClipPath();
                this._data = r
            }
        }, dispose: function () {
        }, _createClipPath: function (t, e, n, i, r, a, o) {
            var s = new rm({shape: {cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: r}});
            return Pa(s, {shape: {endAngle: i + (r ? 1 : -1) * Math.PI * 2}}, o, a), s
        }, containPoint: function (t, e) {
            var n = e.getData(), i = n.getItemLayout(0);
            if (i) {
                var r = t[0] - i.cx, a = t[1] - i.cy, o = Math.sqrt(r * r + a * a);
                return o <= i.r && o >= i.r0
            }
        }
    }), function (t, e) {
        f(e, function (e) {
            e.update = "updateView", Yl(e, function (n, i) {
                var r = {};
                return i.eachComponent({mainType: "series", subType: t, query: n}, function (t) {
                    t[e.method] && t[e.method](n.name, n.dataIndex);
                    var i = t.getData();
                    i.each(function (e) {
                        var n = i.getName(e);
                        r[n] = t.isSelected(n) || !1
                    })
                }), {name: n.name, selected: r}
            })
        })
    }), xw = function (t) {
        return {
            getTargetSeries: function (e) {
                var n = {}, i = F();
                return e.eachSeriesByType(t, function (t) {
                    t.__paletteScope = n, i.set(t.uid, t)
                }), i
            }, reset: function (t) {
                var e = t.getRawData(), n = {}, i = t.getData();
                i.each(function (t) {
                    var e = i.getRawIndex(t);
                    n[e] = t
                }), e.each(function (r) {
                    var a = n[r], o = null != a && i.getItemVisual(a, "color", !0);
                    if (o) e.setItemVisual(r, "color", o); else {
                        var s = e.getItemModel(r),
                            l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
                        e.setItemVisual(r, "color", l), null != a && i.setItemVisual(a, "color", l)
                    }
                })
            }
        }
    }, ww = function (t, e, n, i) {
        var r, a, o = t.getData(), s = [], l = !1;
        o.each(function (n) {
            var i, u, h, c, d = o.getItemLayout(n), f = o.getItemModel(n), p = f.getModel("label"),
                g = p.get("position") || f.get("emphasis.label.position"), v = f.getModel("labelLine"),
                m = v.get("length"), y = v.get("length2"), _ = (d.startAngle + d.endAngle) / 2, x = Math.cos(_),
                w = Math.sin(_);
            r = d.cx, a = d.cy;
            var b = "inside" === g || "inner" === g;
            if ("center" === g) i = d.cx, u = d.cy, c = "center"; else {
                var M = (b ? (d.r + d.r0) / 2 * x : d.r * x) + r, S = (b ? (d.r + d.r0) / 2 * w : d.r * w) + a;
                if (i = M + 3 * x, u = S + 3 * w, !b) {
                    var T = M + x * (m + e - d.r), I = S + w * (m + e - d.r), C = T + (0 > x ? -1 : 1) * y, k = I;
                    i = C + (0 > x ? -5 : 5), u = k, h = [[M, S], [T, I], [C, k]]
                }
                c = b ? "center" : x > 0 ? "left" : "right"
            }
            var A = p.getFont(), D = p.get("rotate") ? 0 > x ? -_ + Math.PI : -_ : 0,
                P = t.getFormattedLabel(n, "normal") || o.getName(n), O = Bn(P, A, c, "top");
            l = !!D, d.label = {
                x: i,
                y: u,
                position: g,
                height: O.height,
                len: m,
                len2: y,
                linePoints: h,
                textAlign: c,
                verticalAlign: "middle",
                rotation: D,
                inside: b
            }, b || s.push(d.label)
        }), !l && t.get("avoidLabelOverlap") && Rh(s, r, a, e, n, i)
    }, bw = 2 * Math.PI, Mw = Math.PI / 180, Sw = function (t, e, n) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(), i = e.mapDimension("value"), r = t.get("center"), a = t.get("radius");
            x(a) || (a = [0, a]), x(r) || (r = [r, r]);
            var o = n.getWidth(), s = n.getHeight(), l = Math.min(o, s), u = Ya(r[0], o), h = Ya(r[1], s),
                c = Ya(a[0], l / 2), d = Ya(a[1], l / 2), f = -t.get("startAngle") * Mw, p = t.get("minAngle") * Mw,
                g = 0;
            e.each(i, function (t) {
                !isNaN(t) && g++
            });
            var v = e.getSum(i), m = Math.PI / (v || g) * 2, y = t.get("clockwise"), _ = t.get("roseType"),
                w = t.get("stillShowZeroSum"), b = e.getDataExtent(i);
            b[0] = 0;
            var M = bw, S = 0, T = f, I = y ? 1 : -1;
            if (e.each(i, function (t, n) {
                var i;
                if (isNaN(t)) return void e.setItemLayout(n, {
                    angle: 0 / 0,
                    startAngle: 0 / 0,
                    endAngle: 0 / 0,
                    clockwise: y,
                    cx: u,
                    cy: h,
                    r0: c,
                    r: _ ? 0 / 0 : d
                });
                i = "area" !== _ ? 0 === v && w ? m : t * m : bw / g, p > i ? (i = p, M -= p) : S += t;
                var r = T + I * i;
                e.setItemLayout(n, {
                    angle: i,
                    startAngle: T,
                    endAngle: r,
                    clockwise: y,
                    cx: u,
                    cy: h,
                    r0: c,
                    r: _ ? ja(t, b, [c, d]) : d
                }), T = r
            }), bw > M && g) if (.001 >= M) {
                var C = bw / g;
                e.each(i, function (t, n) {
                    if (!isNaN(t)) {
                        var i = e.getItemLayout(n);
                        i.angle = C, i.startAngle = f + I * n * C, i.endAngle = f + I * (n + 1) * C
                    }
                })
            } else m = M / S, T = f, e.each(i, function (t, n) {
                if (!isNaN(t)) {
                    var i = e.getItemLayout(n), r = i.angle === p ? p : t * m;
                    i.startAngle = T, i.endAngle = T + I * r, T += I * r
                }
            });
            ww(t, d, o, s)
        })
    }, Tw = function (t) {
        return {
            seriesType: t, reset: function (t, e) {
                var n = e.findComponents({mainType: "legend"});
                if (n && n.length) {
                    var i = t.getData();
                    i.filterSelf(function (t) {
                        for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;
                        return !0
                    })
                }
            }
        }
    };
    _w("pie", [{type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected"}, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    }, {
        type: "pieUnSelect",
        event: "pieunselected",
        method: "unSelect"
    }]), Kl(xw("pie")), $l(_(Sw, "pie")), Zl(Tw("pie")), tu({
        type: "title",
        layoutMode: {type: "box", ignoreSize: !0},
        defaultOption: {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
            subtextStyle: {color: "#aaa"}
        }
    }), eu({
        type: "title", render: function (t, e, n) {
            if (this.group.removeAll(), t.get("show")) {
                var i = this.group, r = t.getModel("textStyle"), a = t.getModel("subtextStyle"), o = t.get("textAlign"),
                    s = t.get("textBaseline"), l = new tm({
                        style: xa({}, r, {text: t.get("text"), textFill: r.getTextColor()}, {disableBox: !0}),
                        z2: 10
                    }), u = l.getBoundingRect(), h = t.get("subtext"), c = new tm({
                        style: xa({}, a, {
                            text: h,
                            textFill: a.getTextColor(),
                            y: u.height + t.get("itemGap"),
                            textVerticalAlign: "top"
                        }, {disableBox: !0}), z2: 10
                    }), d = t.get("link"), f = t.get("sublink"), p = t.get("triggerEvent", !0);
                l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function () {
                    window.open(d, "_" + t.get("target"))
                }), f && c.on("click", function () {
                    window.open(f, "_" + t.get("subtarget"))
                }), l.eventData = c.eventData = p ? {
                    componentType: "title",
                    componentIndex: t.componentIndex
                } : null, i.add(l), h && i.add(c);
                var g = i.getBoundingRect(), v = t.getBoxLayoutParams();
                v.width = g.width, v.height = g.height;
                var m = xo(v, {width: n.getWidth(), height: n.getHeight()}, t.get("padding"));
                o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" === o ? m.x += m.width : "center" === o && (m.x += m.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? m.y += m.height : "middle" === s && (m.y += m.height / 2), s = s || "top"), i.attr("position", [m.x, m.y]);
                var y = {textAlign: o, textVerticalAlign: s};
                l.setStyle(y), c.setStyle(y), g = i.getBoundingRect();
                var _ = m.margin, x = t.getItemStyle(["color", "opacity"]);
                x.fill = t.get("backgroundColor");
                var w = new hm({
                    shape: {
                        x: g.x - _[3],
                        y: g.y - _[0],
                        width: g.width + _[1] + _[3],
                        height: g.height + _[0] + _[2],
                        r: t.get("borderRadius")
                    }, style: x, silent: !0
                });
                ea(w), i.add(w)
            }
        }
    });
    var Iw = f, Cw = _, kw = function (t, e) {
        var n, i = [], r = t.seriesIndex;
        if (null == r || !(n = e.getSeriesByIndex(r))) return {point: []};
        var a = n.getData(), o = Xi(a, t);
        if (null == o || 0 > o || x(o)) return {point: []};
        var s = a.getItemGraphicEl(o), l = n.coordinateSystem;
        if (n.getTooltipPosition) i = n.getTooltipPosition(o) || []; else if (l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function (t) {
            return a.mapDimension(t)
        }), o, !0)) || []; else if (s) {
            var u = s.getBoundingRect().clone();
            u.applyTransform(s.transform), i = [u.x + u.width / 2, u.y + u.height / 2]
        }
        return {point: i, el: s}
    }, Aw = f, Dw = _, Pw = Zi(), Ow = function (t, e, n) {
        var i = t.currTrigger, r = [t.x, t.y], a = t, o = t.dispatchAction || y(n.dispatchAction, n),
            s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            ic(r) && (r = kw({seriesIndex: a.seriesIndex, dataIndex: a.dataIndex}, e).point);
            var l = ic(r), u = a.axesInfo, h = s.axesInfo, c = "leave" === i || ic(r), d = {}, f = {},
                p = {list: [], map: {}}, g = {showPointer: Dw($h, f), showTooltip: Dw(Kh, p)};
            Aw(s.coordSysMap, function (t, e) {
                var n = l || t.containPoint(r);
                Aw(s.coordSysAxesInfo[e], function (t) {
                    var e = t.axis, i = ec(u, t);
                    if (!c && n && (!u || i)) {
                        var a = i && i.value;
                        null != a || l || (a = e.pointToData(r)), null != a && qh(t, a, g, !1, d)
                    }
                })
            });
            var v = {};
            return Aw(h, function (t, e) {
                var n = t.linkGroup;
                n && !f[e] && Aw(n.axesInfo, function (e, i) {
                    var r = f[i];
                    if (e !== t && r) {
                        var a = r.value;
                        n.mapper && (a = t.axis.scale.parse(n.mapper(a, nc(e), nc(t)))), v[t.key] = a
                    }
                })
            }), Aw(v, function (t, e) {
                qh(h[e], t, g, !0, d)
            }), Qh(f, h, d), Jh(p, r, t, o), tc(h, o, n), d
        }
    }, Lw = (tu({
        type: "axisPointer",
        coordSysAxesInfo: null,
        defaultOption: {
            show: "auto",
            triggerOn: null,
            zlevel: 0,
            z: 50,
            type: "line",
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: {color: "#aaa", width: 1, type: "solid"},
            shadowStyle: {color: "rgba(150,150,150,0.3)"},
            label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [5, 7, 5, 7],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: "#aaa"
            },
            handle: {
                show: !1,
                icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
            }
        }
    }), Zi()), Bw = f, Ew = eu({
        type: "axisPointer", render: function (t, e, n) {
            var i = e.getComponent("tooltip"), r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
            rc("axisPointer", n, function (t, e, n) {
                "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
                    type: "updateAxisPointer",
                    currTrigger: t,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                })
            })
        }, remove: function (t, e) {
            hc(e.getZr(), "axisPointer"), Ew.superApply(this._model, "remove", arguments)
        }, dispose: function (t, e) {
            hc("axisPointer", e), Ew.superApply(this._model, "dispose", arguments)
        }
    }), Rw = Zi(), zw = i, Fw = y;
    cc.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function (t, e, n, i) {
            var r = e.get("value"), a = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== a) {
                this._lastValue = r, this._lastStatus = a;
                var o = this._group, s = this._handle;
                if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());
                o && o.show(), s && s.show();
                var l = {};
                this.makeElOption(l, r, t, e, n);
                var u = l.graphicKey;
                u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
                var h = this._moveAnimation = this.determineAnimation(t, e);
                if (o) {
                    var c = _(dc, e, h);
                    this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e)
                } else o = this._group = new Gp, this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), n.getZr().add(o);
                vc(o, e, !0), this._renderHandle(r)
            }
        },
        remove: function (t) {
            this.clear(t)
        },
        dispose: function (t) {
            this.clear(t)
        },
        determineAnimation: function (t, e) {
            var n = e.get("animation"), i = t.axis, r = "category" === i.type, a = e.get("snap");
            if (!a && !r) return !1;
            if ("auto" === n || null == n) {
                var o = this.animationThreshold;
                if (r && i.getBandWidth() > o) return !0;
                if (a) {
                    var s = Xh(t).seriesDataCount, l = i.getExtent();
                    return Math.abs(l[0] - l[1]) / s > o
                }
                return !1
            }
            return n === !0
        },
        makeElOption: function () {
        },
        createPointerEl: function (t, e) {
            var n = e.pointer;
            if (n) {
                var i = Rw(t).pointerEl = new Cm[n.type](zw(e.pointer));
                t.add(i)
            }
        },
        createLabelEl: function (t, e, n, i) {
            if (e.label) {
                var r = Rw(t).labelEl = new hm(zw(e.label));
                t.add(r), pc(r, i)
            }
        },
        updatePointerEl: function (t, e, n) {
            var i = Rw(t).pointerEl;
            i && (i.setStyle(e.pointer.style), n(i, {shape: e.pointer.shape}))
        },
        updateLabelEl: function (t, e, n, i) {
            var r = Rw(t).labelEl;
            r && (r.setStyle(e.label.style), n(r, {shape: e.label.shape, position: e.label.position}), pc(r, i))
        },
        _renderHandle: function (t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, r = e.getModel("handle"),
                    a = e.get("status");
                if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void (this._handle = null);
                var o;
                this._handle || (o = !0, i = this._handle = Fa(r.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function (t) {
                        op(t.event)
                    },
                    onmousedown: Fw(this._onHandleDragMove, this, 0, 0),
                    drift: Fw(this._onHandleDragMove, this),
                    ondragend: Fw(this._onHandleDragEnd, this)
                }), n.add(i)), vc(i, e, !1);
                var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
                i.setStyle(r.getItemStyle(null, s));
                var l = r.get("size");
                x(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), Hs(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o)
            }
        },
        _moveHandleToValue: function (t, e) {
            dc(this._axisPointerModel, !e && this._moveAnimation, this._handle, gc(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
        },
        _onHandleDragMove: function (t, e) {
            var n = this._handle;
            if (n) {
                this._dragging = !0;
                var i = this.updateHandleTransform(gc(n), [t, e], this._axisModel, this._axisPointerModel);
                this._payloadInfo = i, n.stopAnimation(), n.attr(gc(i)), Rw(n).lastProp = null, this._doDispatchAxisPointer()
            }
        },
        _doDispatchAxisPointer: function () {
            var t = this._handle;
            if (t) {
                var e = this._payloadInfo, n = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: e.cursorPoint[0],
                    y: e.cursorPoint[1],
                    tooltipOption: e.tooltipOption,
                    axesInfo: [{axisDim: n.axis.dim, axisIndex: n.componentIndex}]
                })
            }
        },
        _onHandleDragEnd: function () {
            this._dragging = !1;
            var t = this._handle;
            if (t) {
                var e = this._axisPointerModel.get("value");
                this._moveHandleToValue(e), this._api.dispatchAction({type: "hideTip"})
            }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function (t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(), n = this._group, i = this._handle;
            e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
        },
        doClear: function () {
        },
        buildLabel: function (t, e, n) {
            return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
        }
    }, cc.prototype.constructor = cc, Ji(cc);
    var Nw = Math.PI, Vw = function (t, e) {
        this.opt = e, this.axisModel = t, s(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }), this.group = new Gp;
        var n = new Gp({position: e.position.slice(), rotation: e.rotation});
        n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
    };
    Vw.prototype = {
        constructor: Vw, hasBuilder: function (t) {
            return !!Ww[t]
        }, add: function (t) {
            Ww[t].call(this)
        }, getGroup: function () {
            return this.group
        }
    };
    var Ww = {
        axisLine: function () {
            var t = this.opt, e = this.axisModel;
            if (e.get("axisLine.show")) {
                var n = this.axisModel.axis.getExtent(), i = this._transform, r = [n[0], 0], a = [n[1], 0];
                i && (ae(r, r, i), ae(a, a, i));
                var s = o({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new cm(ta({
                    anid: "line",
                    shape: {x1: r[0], y1: r[1], x2: a[0], y2: a[1]},
                    style: s,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })));
                var l = e.get("axisLine.symbol"), u = e.get("axisLine.symbolSize"),
                    h = e.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof h && (h = [h, h]), null != l) {
                    "string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) && (u = [u, u]);
                    var c = u[0], d = u[1];
                    f([{rotate: t.rotation + Math.PI / 2, offset: h[0], r: 0}, {
                        rotate: t.rotation - Math.PI / 2,
                        offset: h[1],
                        r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
                    }], function (e, n) {
                        if ("none" !== l[n] && null != l[n]) {
                            var i = oh(l[n], -c / 2, -d / 2, c, d, s.stroke, !0), a = e.r + e.offset,
                                o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                            i.attr({rotation: e.rotate, position: o, silent: !0}), this.group.add(i)
                        }
                    }, this)
                }
            }
        }, axisTickLabel: function () {
            var t = this.axisModel, e = this.opt, n = Sc(this, t, e), i = Tc(this, t, e);
            xc(t, i, n)
        }, axisName: function () {
            var t = this.opt, e = this.axisModel, n = k(t.axisName, e.get("name"));
            if (n) {
                var i, r = e.get("nameLocation"), a = t.nameDirection, s = e.getModel("nameTextStyle"),
                    l = e.get("nameGap") || 0, u = this.axisModel.axis.getExtent(), h = u[0] > u[1] ? -1 : 1,
                    c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, Mc(r) ? t.labelOffset + a * l : 0],
                    d = e.get("nameRotate");
                null != d && (d = d * Nw / 180);
                var f;
                Mc(r) ? i = Hw(t.rotation, null != d ? d : t.rotation, a) : (i = yc(t, r, d || 0, u), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));
                var p = s.getFont(), g = e.get("nameTruncate", !0) || {}, v = g.ellipsis,
                    m = k(t.nameTruncateMaxWidth, g.maxWidth, f),
                    y = null != v && null != m ? Xm(n, m, p, v, {minChar: 2, placeholder: g.placeholder}) : n,
                    _ = e.get("tooltip", !0), x = e.mainType, w = {componentType: x, name: n, $vars: ["name"]};
                w[x + "Index"] = e.componentIndex;
                var b = new tm({
                    anid: "name",
                    __fullText: n,
                    __truncatedText: y,
                    position: c,
                    rotation: i.rotation,
                    silent: _c(e),
                    z2: 1,
                    tooltip: _ && _.show ? o({
                        content: n, formatter: function () {
                            return n
                        }, formatterParams: w
                    }, _) : null
                });
                xa(b.style, s, {
                    text: y,
                    textFont: p,
                    textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: i.textAlign,
                    textVerticalAlign: i.textVerticalAlign
                }), e.get("triggerEvent") && (b.eventData = mc(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
            }
        }
    }, Hw = Vw.innerTextLayout = function (t, e, n) {
        var i, r, a = to(e - t);
        return eo(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : eo(a - Nw) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && Nw > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
            rotation: a,
            textAlign: i,
            textVerticalAlign: r
        }
    }, Gw = eu({
        type: "axis", _axisPointer: null, axisPointerClass: null, render: function (t, e, n, i) {
            this.axisPointerClass && Gh(t), Gw.superApply(this, "render", arguments), Ec(this, t, e, n, i, !0)
        }, updateAxisPointer: function (t, e, n, i) {
            Ec(this, t, e, n, i, !1)
        }, remove: function (t, e) {
            var n = this._axisPointer;
            n && n.remove(e), Gw.superApply(this, "remove", arguments)
        }, dispose: function (t, e) {
            Rc(this, e), Gw.superApply(this, "dispose", arguments)
        }
    }), Xw = [];
    Gw.registerAxisPointerClass = function (t, e) {
        Xw[t] = e
    }, Gw.getAxisPointerClass = function (t) {
        return t && Xw[t]
    };
    var Zw = cc.extend({
        makeElOption: function (t, e, n, i, r) {
            var a = n.axis, o = a.grid, s = i.get("type"), l = zc(o, a).getOtherAxis(a).getGlobalExtent(),
                u = a.toGlobalCoord(a.dataToCoord(e, !0));
            if (s && "none" !== s) {
                var h = Ic(i), c = jw[s](a, u, l, h);
                c.style = h, t.graphicKey = c.type, t.pointer = c
            }
            var d = Bc(o.model, n);
            Pc(e, t, d, n, i, r)
        }, getHandleTransform: function (t, e, n) {
            var i = Bc(e.axis.grid.model, e, {labelInside: !1});
            return i.labelMargin = n.get("handle.margin"), {
                position: Dc(e.axis, t, i),
                rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
            }
        }, updateHandleTransform: function (t, e, n) {
            var i = n.axis, r = i.grid, a = i.getGlobalExtent(!0), o = zc(r, i).getOtherAxis(i).getGlobalExtent(),
                s = "x" === i.dim ? 0 : 1, l = t.position;
            l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
            var u = (o[1] + o[0]) / 2, h = [u, u];
            h[s] = l[s];
            var c = [{verticalAlign: "middle"}, {align: "center"}];
            return {position: l, rotation: t.rotation, cursorPoint: h, tooltipOption: c[s]}
        }
    }), jw = {
        line: function (t, e, n, i) {
            var r = Oc([e, n[0]], [e, n[1]], Fc(t));
            return ta({shape: r, style: i}), {type: "Line", shape: r}
        }, shadow: function (t, e, n) {
            var i = Math.max(1, t.getBandWidth()), r = n[1] - n[0];
            return {type: "Rect", shape: Lc([e - i / 2, n[0]], [i, r], Fc(t))}
        }
    };
    Gw.registerAxisPointerClass("CartesianAxisPointer", Zw), Xl(function (t) {
        if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !x(e) && (t.axisPointer.link = [e])
        }
    }), Zl(V_.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = zh(t, e)
    }), Yl({
        type: "updateAxisPointer",
        event: "updateAxisPointer",
        update: ":updateAxisPointer"
    }, Ow), tu({
        type: "tooltip",
        dependencies: ["axisPointer"],
        defaultOption: {
            zlevel: 0,
            z: 60,
            show: !0,
            showContent: !0,
            trigger: "item",
            triggerOn: "mousemove|click",
            alwaysShowContent: !1,
            displayMode: "single",
            renderMode: "auto",
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: .4,
            enterable: !1,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: "",
            axisPointer: {
                type: "line",
                axis: "auto",
                animation: "auto",
                animationDurationUpdate: 200,
                animationEasingUpdate: "exponentialOut",
                crossStyle: {color: "#999", width: 1, type: "dashed", textStyle: {}}
            },
            textStyle: {color: "#fff", fontSize: 14}
        }
    });
    var Yw = f, qw = ho, Uw = ["", "-webkit-", "-moz-", "-o-"],
        $w = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
    Hc.prototype = {
        constructor: Hc, _enterable: !0, update: function () {
            var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), n = t.style;
            "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
        }, show: function (t) {
            clearTimeout(this._hideTimeout);
            var e = this.el;
            e.style.cssText = $w + Wc(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0
        }, setContent: function (t) {
            this.el.innerHTML = null == t ? "" : t
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el;
            return [t.clientWidth, t.clientHeight]
        }, moveTo: function (t, e) {
            var n, i = this._zr;
            i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);
            var r = this.el.style;
            r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
        }, hide: function () {
            this.el.style.display = "none", this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            var t = this.el.clientWidth, e = this.el.clientHeight;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var n = document.defaultView.getComputedStyle(this.el);
                n && (t += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10))
            }
            return {width: t, height: e}
        }
    }, Gc.prototype = {
        constructor: Gc, _enterable: !0, update: function () {
        }, show: function () {
            this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0
        }, setContent: function (t, e, n) {
            this.el && this._zr.remove(this.el);
            for (var i = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0;) {
                var l = r.indexOf(o), u = r.substr(s + a.length, l - s - a.length);
                i["marker" + u] = u.indexOf("sub") > -1 ? {
                    textWidth: 4,
                    textHeight: 4,
                    textBorderRadius: 2,
                    textBackgroundColor: e[u],
                    textOffset: [3, 0]
                } : {
                    textWidth: 10,
                    textHeight: 10,
                    textBorderRadius: 5,
                    textBackgroundColor: e[u]
                }, r = r.substr(l + 1), s = r.indexOf("{marker")
            }
            this.el = new tm({
                style: {
                    rich: i,
                    text: t,
                    textLineHeight: 20,
                    textBackgroundColor: n.get("backgroundColor"),
                    textBorderRadius: n.get("borderRadius"),
                    textFill: n.get("textStyle.color"),
                    textPadding: n.get("padding")
                }, z: n.get("z")
            }), this._zr.add(this.el);
            var h = this;
            this.el.on("mouseover", function () {
                h._enterable && (clearTimeout(h._hideTimeout), h._show = !0), h._inContent = !0
            }), this.el.on("mouseout", function () {
                h._enterable && h._show && h.hideLater(h._hideDelay), h._inContent = !1
            })
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el.getBoundingRect();
            return [t.width, t.height]
        }, moveTo: function (t, e) {
            this.el && this.el.attr("position", [t, e])
        }, hide: function () {
            this.el.hide(), this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            return this.getSize()
        }
    };
    var Kw = y, Qw = f, Jw = Ya, tb = new hm({shape: {x: -1, y: -1, width: 2, height: 2}});
    eu({
        type: "tooltip", init: function (t, e) {
            if (!Ef.node) {
                var n = t.getComponent("tooltip"), i = n.get("renderMode");
                this._renderMode = $i(i);
                var r;
                "html" === this._renderMode ? (r = new Hc(e.getDom(), e), this._newLine = "<br/>") : (r = new Gc(e), this._newLine = "\n"), this._tooltipContent = r
            }
        }, render: function (t, e, n) {
            if (!Ef.node) {
                this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                var i = this._tooltipContent;
                i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
            }
        }, _initGlobalListener: function () {
            var t = this._tooltipModel, e = t.get("triggerOn");
            rc("itemTooltip", this._api, Kw(function (t, n, i) {
                "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i))
            }, this))
        }, _keepShow: function () {
            var t = this._tooltipModel, e = this._ecModel, n = this._api;
            if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                var i = this;
                clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                    i.manuallyShowTip(t, e, n, {x: i._lastX, y: i._lastY})
                })
            }
        }, manuallyShowTip: function (t, e, n, i) {
            if (i.from !== this.uid && !Ef.node) {
                var r = Zc(i, n);
                this._ticket = "";
                var a = i.dataByCoordSys;
                if (i.tooltip && null != i.x && null != i.y) {
                    var o = tb;
                    o.position = [i.x, i.y], o.update(), o.tooltip = i.tooltip, this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        target: o
                    }, r)
                } else if (a) this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    event: {},
                    dataByCoordSys: i.dataByCoordSys,
                    tooltipOption: i.tooltipOption
                }, r); else if (null != i.seriesIndex) {
                    if (this._manuallyAxisShowTip(t, e, n, i)) return;
                    var s = kw(i, e), l = s.point[0], u = s.point[1];
                    null != l && null != u && this._tryShow({
                        offsetX: l,
                        offsetY: u,
                        position: i.position,
                        target: s.el,
                        event: {}
                    }, r)
                } else null != i.x && null != i.y && (n.dispatchAction({
                    type: "updateAxisPointer",
                    x: i.x,
                    y: i.y
                }), this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    target: n.getZr().findHover(i.x, i.y).target,
                    event: {}
                }, r))
            }
        }, manuallyHideTip: function (t, e, n, i) {
            var r = this._tooltipContent;
            !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(Zc(i, n))
        }, _manuallyAxisShowTip: function (t, e, n, i) {
            var r = i.seriesIndex, a = i.dataIndex, o = e.getComponent("axisPointer").coordSysAxesInfo;
            if (null != r && null != a && null != o) {
                var s = e.getSeriesByIndex(r);
                if (s) {
                    var l = s.getData(), t = Xc([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
                    if ("axis" === t.get("trigger")) return n.dispatchAction({
                        type: "updateAxisPointer",
                        seriesIndex: r,
                        dataIndex: a,
                        position: i.position
                    }), !0
                }
            }
        }, _tryShow: function (t, e) {
            var n = t.target, i = this._tooltipModel;
            if (i) {
                this._lastX = t.offsetX, this._lastY = t.offsetY;
                var r = t.dataByCoordSys;
                r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
            }
        }, _showOrMove: function (t, e) {
            var n = t.get("showDelay");
            e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
        }, _showAxisTooltip: function (t, e) {
            var n = this._ecModel, i = this._tooltipModel, a = [e.offsetX, e.offsetY], o = [], s = [],
                l = Xc([e.tooltipOption, i]), u = this._renderMode, h = this._newLine, c = {};
            Qw(t, function (t) {
                Qw(t.dataByAxis, function (t) {
                    var e = n.getComponent(t.axisDim + "Axis", t.axisIndex), i = t.value, a = [];
                    if (e && null != i) {
                        var l = Ac(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
                        f(t.seriesDataIndices, function (o) {
                            var h = n.getSeriesByIndex(o.seriesIndex), d = o.dataIndexInside,
                                f = h && h.getDataParams(d);
                            if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = rh(e.axis, i), f.axisValueLabel = l, f) {
                                s.push(f);
                                var p, g = h.formatTooltip(d, !0, null, u);
                                if (M(g)) {
                                    p = g.html;
                                    var v = g.markers;
                                    r(c, v)
                                } else p = g;
                                a.push(p)
                            }
                        });
                        var d = l;
                        o.push("html" !== u ? a.join(h) : (d ? co(d) + h : "") + a.join(h))
                    }
                })
            }, this), o.reverse(), o = o.join(this._newLine + this._newLine);
            var d = e.position;
            this._showOrMove(l, function () {
                this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c)
            })
        }, _showSeriesItemTooltip: function (t, e, n) {
            var i = this._ecModel, r = e.seriesIndex, a = i.getSeriesByIndex(r), o = e.dataModel || a, s = e.dataIndex,
                l = e.dataType, u = o.getData(),
                h = Xc([u.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
                c = h.get("trigger");
            if (null == c || "item" === c) {
                var d, f, p = o.getDataParams(s, l), g = o.formatTooltip(s, !1, l, this._renderMode);
                M(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
                var v = "item_" + o.name + "_" + s;
                this._showOrMove(h, function () {
                    this._showTooltipContent(h, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f)
                }), n({
                    type: "showTip",
                    dataIndexInside: s,
                    dataIndex: u.getRawIndex(s),
                    seriesIndex: r,
                    from: this.uid
                })
            }
        }, _showComponentItemTooltip: function (t, e, n) {
            var i = e.tooltip;
            if ("string" == typeof i) {
                var r = i;
                i = {content: r, formatter: r}
            }
            var a = new Na(i, this._tooltipModel, this._ecModel), o = a.get("content"), s = Math.random();
            this._showOrMove(a, function () {
                this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
            }), n({type: "showTip", from: this.uid})
        }, _showTooltipContent: function (t, e, n, i, r, a, o, s, l) {
            if (this._ticket = "", t.get("showContent") && t.get("show")) {
                var u = this._tooltipContent, h = t.get("formatter");
                o = o || t.get("position");
                var c = e;
                if (h && "string" == typeof h) c = fo(h, n, !0); else if ("function" == typeof h) {
                    var d = Kw(function (e, i) {
                        e === this._ticket && (u.setContent(i, l, t), this._updatePosition(t, o, r, a, u, n, s))
                    }, this);
                    this._ticket = i, c = h(n, i, d)
                }
                u.setContent(c, l, t), u.show(t), this._updatePosition(t, o, r, a, u, n, s)
            }
        }, _updatePosition: function (t, e, n, i, r, a, o) {
            var s = this._api.getWidth(), l = this._api.getHeight();
            e = e || t.get("position");
            var u = r.getSize(), h = t.get("align"), c = t.get("verticalAlign"), d = o && o.getBoundingRect().clone();
            if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el, d, {
                viewSize: [s, l],
                contentSize: u.slice()
            })), x(e)) n = Jw(e[0], s), i = Jw(e[1], l); else if (M(e)) {
                e.width = u[0], e.height = u[1];
                var f = xo(e, {width: s, height: l});
                n = f.x, i = f.y, h = null, c = null
            } else if ("string" == typeof e && o) {
                var p = qc(e, d, u);
                n = p[0], i = p[1]
            } else {
                var p = jc(n, i, r, s, l, h ? null : 20, c ? null : 20);
                n = p[0], i = p[1]
            }
            if (h && (n -= Uc(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Uc(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), t.get("confine")) {
                var p = Yc(n, i, r, s, l);
                n = p[0], i = p[1]
            }
            r.moveTo(n, i)
        }, _updateContentNotChangedOnAxis: function (t) {
            var e = this._lastDataByCoordSys, n = !!e && e.length === t.length;
            return n && Qw(e, function (e, i) {
                var r = e.dataByAxis || {}, a = t[i] || {}, o = a.dataByAxis || [];
                n &= r.length === o.length, n && Qw(r, function (t, e) {
                    var i = o[e] || {}, r = t.seriesDataIndices || [], a = i.seriesDataIndices || [];
                    n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length, n && Qw(r, function (t, e) {
                        var i = a[e];
                        n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
                    })
                })
            }), this._lastDataByCoordSys = t, !!n
        }, _hide: function (t) {
            this._lastDataByCoordSys = null, t({type: "hideTip", from: this.uid})
        }, dispose: function (t, e) {
            Ef.node || (this._tooltipContent.hide(), hc("itemTooltip", e))
        }
    }), Yl({type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip"}, function () {
    }), Yl({type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip"}, function () {
    });
    var eb = {}, nb = tu({
        type: "toolbox",
        layoutMode: {type: "box", ignoreSize: !0},
        optionUpdated: function () {
            nb.superApply(this, "optionUpdated", arguments), f(this.option.feature, function (t, e) {
                var n = Kc(e);
                n && r(t, n.defaultOption)
            })
        },
        defaultOption: {
            show: !0,
            z: 6,
            zlevel: 0,
            orient: "horizontal",
            left: "right",
            top: "top",
            backgroundColor: "transparent",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemSize: 15,
            itemGap: 8,
            showTitle: !0,
            iconStyle: {borderColor: "#666", color: "none"},
            emphasis: {iconStyle: {borderColor: "#3E98C5"}}
        }
    });
    eu({
        type: "toolbox", render: function (t, e, n, i) {
            function r(r, o) {
                var s, c = h[r], d = h[o], f = l[c], p = new Na(f, t, t.ecModel);
                if (c && !d) {
                    if (td(c)) s = {model: p, onclick: p.option.onclick, featureName: c}; else {
                        var g = Kc(c);
                        if (!g) return;
                        s = new g(p, e, n)
                    }
                    u[c] = s
                } else {
                    if (s = u[d], !s) return;
                    s.model = p, s.ecModel = e, s.api = n
                }
                return !c && d ? void (s.dispose && s.dispose(e, n)) : !p.get("show") || s.unusable ? void (s.remove && s.remove(e, n)) : (a(p, s, c), p.setIconStatus = function (t, e) {
                    var n = this.option, i = this.iconPaths;
                    n.iconStatus = n.iconStatus || {}, n.iconStatus[t] = e, i[t] && i[t].trigger(e)
                }, void (s.render && s.render(p, e, n, i)))
            }

            function a(i, r, a) {
                var l = i.getModel("iconStyle"), u = i.getModel("emphasis.iconStyle"),
                    h = r.getIcons ? r.getIcons() : i.get("icon"), c = i.get("title") || {};
                if ("string" == typeof h) {
                    var d = h, p = c;
                    h = {}, c = {}, h[a] = d, c[a] = p
                }
                var g = i.iconPaths = {};
                f(h, function (a, h) {
                    var d = Fa(a, {}, {x: -s / 2, y: -s / 2, width: s, height: s});
                    d.setStyle(l.getItemStyle()), d.hoverStyle = u.getItemStyle(), ma(d), t.get("showTitle") && (d.__title = c[h], d.on("mouseover", function () {
                        var t = u.getItemStyle();
                        d.setStyle({
                            text: c[h],
                            textPosition: t.textPosition || "bottom",
                            textFill: t.fill || t.stroke || "#000",
                            textAlign: t.textAlign || "center"
                        })
                    }).on("mouseout", function () {
                        d.setStyle({textFill: null})
                    })), d.trigger(i.get("iconStatus." + h) || "normal"), o.add(d), d.on("click", y(r.onclick, r, e, n, h)), g[h] = d
                })
            }

            var o = this.group;
            if (o.removeAll(), t.get("show")) {
                var s = +t.get("itemSize"), l = t.get("feature") || {}, u = this._features || (this._features = {}),
                    h = [];
                f(l, function (t, e) {
                    h.push(e)
                }), new lu(this._featureNames || [], h).add(r).update(r).remove(_(r, null)).execute(), this._featureNames = h, Qc(o, t, n), o.add(Jc(o.getBoundingRect(), t)), o.eachChild(function (t) {
                    var e = t.__title, i = t.hoverStyle;
                    if (i && e) {
                        var r = Bn(e, Un(i)), a = t.position[0] + o.position[0], l = t.position[1] + o.position[1] + s,
                            u = !1;
                        l + r.height > n.getHeight() && (i.textPosition = "top", u = !0);
                        var h = u ? -5 - r.height : s + 8;
                        a + r.width / 2 > n.getWidth() ? (i.textPosition = ["100%", h], i.textAlign = "right") : a - r.width / 2 < 0 && (i.textPosition = [0, h], i.textAlign = "left")
                    }
                })
            }
        }, updateView: function (t, e, n, i) {
            f(this._features, function (t) {
                t.updateView && t.updateView(t.model, e, n, i)
            })
        }, remove: function (t, e) {
            f(this._features, function (n) {
                n.remove && n.remove(t, e)
            }), this.group.removeAll()
        }, dispose: function (t, e) {
            f(this._features, function (n) {
                n.dispose && n.dispose(t, e)
            })
        }
    });
    var ib = Qy.toolbox.saveAsImage;
    ed.defaultOption = {
        show: !0,
        icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
        title: ib.title,
        type: "png",
        name: "",
        excludeComponents: ["toolbox"],
        pixelRatio: 1,
        lang: ib.lang.slice()
    }, ed.prototype.unusable = !Ef.canvasSupported;
    var rb = ed.prototype;
    rb.onclick = function (t, e) {
        var n = this.model, i = n.get("name") || t.get("title.0.text") || "echarts", r = document.createElement("a"),
            a = n.get("type", !0) || "png";
        r.download = i + "." + a, r.target = "_blank";
        var o = e.getConnectedDataURL({
            type: a,
            backgroundColor: n.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
            excludeComponents: n.get("excludeComponents"),
            pixelRatio: n.get("pixelRatio")
        });
        if (r.href = o, "function" != typeof MouseEvent || Ef.browser.ie || Ef.browser.edge) if (window.navigator.msSaveOrOpenBlob) {
            for (var s = atob(o.split(",")[1]), l = s.length, u = new Uint8Array(l); l--;) u[l] = s.charCodeAt(l);
            var h = new Blob([u]);
            window.navigator.msSaveOrOpenBlob(h, i + "." + a)
        } else {
            var c = n.get("lang"),
                d = '<body style="margin:0;"><img src="' + o + '" style="max-width:100%;" title="' + (c && c[0] || "") + '" /></body>',
                f = window.open();
            f.document.write(d)
        } else {
            var p = new MouseEvent("click", {view: window, bubbles: !0, cancelable: !1});
            r.dispatchEvent(p)
        }
    }, $c("saveAsImage", ed);
    var ab = Qy.toolbox.magicType;
    nd.defaultOption = {
        show: !0,
        type: [],
        icon: {
            line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
            bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
            stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
            tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
        },
        title: i(ab.title),
        option: {},
        seriesIndex: {}
    };
    var ob = nd.prototype;
    ob.getIcons = function () {
        var t = this.model, e = t.get("icon"), n = {};
        return f(t.get("type"), function (t) {
            e[t] && (n[t] = e[t])
        }), n
    };
    var sb = {
        line: function (t, e, n, i) {
            return "bar" === t ? r({
                id: e,
                type: "line",
                data: n.get("data"),
                stack: n.get("stack"),
                markPoint: n.get("markPoint"),
                markLine: n.get("markLine")
            }, i.get("option.line") || {}, !0) : void 0
        }, bar: function (t, e, n, i) {
            return "line" === t ? r({
                id: e,
                type: "bar",
                data: n.get("data"),
                stack: n.get("stack"),
                markPoint: n.get("markPoint"),
                markLine: n.get("markLine")
            }, i.get("option.bar") || {}, !0) : void 0
        }, stack: function (t, e, n, i) {
            return "line" === t || "bar" === t ? r({
                id: e,
                stack: "__ec_magicType_stack__"
            }, i.get("option.stack") || {}, !0) : void 0
        }, tiled: function (t, e, n, i) {
            return "line" === t || "bar" === t ? r({id: e, stack: ""}, i.get("option.tiled") || {}, !0) : void 0
        }
    }, lb = [["line", "bar"], ["stack", "tiled"]];
    ob.onclick = function (t, e, n) {
        var i = this.model, r = i.get("seriesIndex." + n);
        if (sb[n]) {
            var a = {series: []}, o = function (e) {
                var r = e.subType, o = e.id, l = sb[n](r, o, e, i);
                l && (s(l, e.option), a.series.push(l));
                var u = e.coordinateSystem;
                if (u && "cartesian2d" === u.type && ("line" === n || "bar" === n)) {
                    var h = u.getAxesByScale("ordinal")[0];
                    if (h) {
                        var c = h.dim, d = c + "Axis", f = t.queryComponents({
                            mainType: d,
                            index: e.get(name + "Index"),
                            id: e.get(name + "Id")
                        })[0], p = f.componentIndex;
                        a[d] = a[d] || [];
                        for (var g = 0; p >= g; g++) a[d][p] = a[d][p] || {};
                        a[d][p].boundaryGap = "bar" === n
                    }
                }
            };
            f(lb, function (t) {
                u(t, n) >= 0 && f(t, function (t) {
                    i.setIconStatus(t, "normal")
                })
            }), i.setIconStatus(n, "emphasis"), t.eachComponent({
                mainType: "series",
                query: null == r ? null : {seriesIndex: r}
            }, o), e.dispatchAction({type: "changeMagicType", currentType: n, newOption: a})
        }
    }, Yl({type: "changeMagicType", event: "magicTypeChanged", update: "prepareAndUpdate"}, function (t, e) {
        e.mergeOption(t.newOption)
    }), $c("magicType", nd);
    var ub = Qy.toolbox.dataView, hb = new Array(60).join("-"), cb = "    ", db = new RegExp("[" + cb + "]+", "g");
    dd.defaultOption = {
        show: !0,
        readOnly: !1,
        optionToContent: null,
        contentToOption: null,
        icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
        title: i(ub.title),
        lang: i(ub.lang),
        backgroundColor: "#fff",
        textColor: "#000",
        textareaColor: "#fff",
        textareaBorderColor: "#333",
        buttonColor: "#c23531",
        buttonTextColor: "#fff"
    }, dd.prototype.onclick = function (t, e) {
        function n() {
            i.removeChild(a), _._dom = null
        }

        var i = e.getDom(), r = this.model;
        this._dom && i.removeChild(this._dom);
        var a = document.createElement("div");
        a.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", a.style.backgroundColor = r.get("backgroundColor") || "#fff";
        var o = document.createElement("h4"), s = r.get("lang") || [];
        o.innerHTML = s[0] || r.get("title"), o.style.cssText = "margin: 10px 20px;", o.style.color = r.get("textColor");
        var l = document.createElement("div"), u = document.createElement("textarea");
        l.style.cssText = "display:block;width:100%;overflow:auto;";
        var h = r.get("optionToContent"), c = r.get("contentToOption"), d = od(t);
        if ("function" == typeof h) {
            var f = h(e.getOption());
            "string" == typeof f ? l.innerHTML = f : I(f) && l.appendChild(f)
        } else l.appendChild(u), u.readOnly = r.get("readOnly"), u.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", u.style.color = r.get("textColor"), u.style.borderColor = r.get("textareaBorderColor"), u.style.backgroundColor = r.get("textareaColor"), u.value = d.value;
        var p = d.meta, g = document.createElement("div");
        g.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
        var v = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
            m = document.createElement("div"), y = document.createElement("div");
        v += ";background-color:" + r.get("buttonColor"), v += ";color:" + r.get("buttonTextColor");
        var _ = this;
        ge(m, "click", n), ge(y, "click", function () {
            var t;
            try {
                t = "function" == typeof c ? c(l, e.getOption()) : cd(u.value, p)
            } catch (i) {
                throw n(), new Error("Data view format error " + i)
            }
            t && e.dispatchAction({type: "changeDataView", newOption: t}), n()
        }), m.innerHTML = s[1], y.innerHTML = s[2], y.style.cssText = v, m.style.cssText = v, !r.get("readOnly") && g.appendChild(y), g.appendChild(m), ge(u, "keydown", function (t) {
            if (9 === (t.keyCode || t.which)) {
                var e = this.value, n = this.selectionStart, i = this.selectionEnd;
                this.value = e.substring(0, n) + cb + e.substring(i), this.selectionStart = this.selectionEnd = n + 1, op(t)
            }
        }), a.appendChild(o), a.appendChild(l), a.appendChild(g), l.style.height = i.clientHeight - 80 + "px", i.appendChild(a), this._dom = a
    }, dd.prototype.remove = function (t, e) {
        this._dom && e.getDom().removeChild(this._dom)
    }, dd.prototype.dispose = function (t, e) {
        this.remove(t, e)
    }, $c("dataView", dd), Yl({
        type: "changeDataView",
        event: "dataViewChanged",
        update: "prepareAndUpdate"
    }, function (t, e) {
        var n = [];
        f(t.newOption.series, function (t) {
            var i = e.getSeriesByName(t.name)[0];
            if (i) {
                var r = i.get("data");
                n.push({name: t.name, data: fd(t.data, r)})
            } else n.push(o({type: "scatter"}, t))
        }), e.mergeOption(s({series: n}, t.newOption))
    });
    var fb = "\x00_ec_interaction_mutex";
    Yl({type: "takeGlobalCursor", event: "globalCursorTaken", update: "update"}, function () {
    });
    var pb = _, gb = f, vb = p, mb = Math.min, yb = Math.max, _b = Math.pow, xb = 1e4, wb = 6, bb = 6, Mb = "globalPan",
        Sb = {w: [0, 0], e: [0, 1], n: [1, 0], s: [1, 1]},
        Tb = {w: "ew", e: "ew", n: "ns", s: "ns", ne: "nesw", sw: "nesw", nw: "nwse", se: "nwse"}, Ib = {
            brushStyle: {lineWidth: 2, stroke: "rgba(0,0,0,0.3)", fill: "rgba(0,0,0,0.1)"},
            transformable: !0,
            brushMode: "single",
            removeOnClick: !1
        }, Cb = 0;
    md.prototype = {
        constructor: md, enableBrush: function (t) {
            return this._brushType && _d(this), t.brushType && yd(this, t), this
        }, setPanels: function (t) {
            if (t && t.length) {
                var e = this._panels = {};
                f(t, function (t) {
                    e[t.panelId] = i(t)
                })
            } else this._panels = null;
            return this
        }, mount: function (t) {
            t = t || {}, this._enableGlobalPan = t.enableGlobalPan;
            var e = this.group;
            return this._zr.add(e), e.attr({
                position: t.position || [0, 0],
                rotation: t.rotation || 0,
                scale: t.scale || [1, 1]
            }), this._transform = e.getLocalTransform(), this
        }, eachCover: function (t, e) {
            gb(this._covers, t, e)
        }, updateCovers: function (t) {
            function e(t, e) {
                return (null != t.id ? t.id : s + e) + "-" + t.brushType
            }

            function n(t, n) {
                return e(t.__brushOption, n)
            }

            function a(e, n) {
                var i = t[e];
                if (null != n && l[n] === c) u[e] = l[n]; else {
                    var r = u[e] = null != n ? (l[n].__brushOption = i, l[n]) : wd(h, xd(h, i));
                    Sd(h, r)
                }
            }

            function o(t) {
                l[t] !== c && h.group.remove(l[t])
            }

            t = p(t, function (t) {
                return r(i(Ib), t, !0)
            });
            var s = "\x00-brush-index-", l = this._covers, u = this._covers = [], h = this, c = this._creatingCover;
            return new lu(l, t, n, e).add(a).update(a).remove(o).execute(), this
        }, unmount: function () {
            return this.enableBrush(!1), kd(this), this._zr.remove(this.group), this
        }, dispose: function () {
            this.unmount(), this.off()
        }
    }, c(md, ip);
    var kb = {
            mousedown: function (t) {
                if (this._dragging) $d.call(this, t); else if (!t.target || !t.target.draggable) {
                    jd(t);
                    var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
                    this._creatingCover = null;
                    var n = this._creatingPanel = Id(this, t, e);
                    n && (this._dragging = !0, this._track = [e.slice()])
                }
            }, mousemove: function (t) {
                var e = this.group.transformCoordToLocal(t.offsetX, t.offsetY);
                if (Zd(this, t, e), this._dragging) {
                    jd(t);
                    var n = qd(this, t, e, !1);
                    n && Ad(this, n)
                }
            }, mouseup: $d
        }, Ab = {
            lineX: Kd(0), lineY: Kd(1), rect: {
                createCover: function (t, e) {
                    return Od(pb(Vd, function (t) {
                        return t
                    }, function (t) {
                        return t
                    }), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
                }, getCreatingRange: function (t) {
                    var e = Pd(t);
                    return zd(e[1][0], e[1][1], e[0][0], e[0][1])
                }, updateCoverShape: function (t, e, n, i) {
                    Ld(t, e, n, i)
                }, updateCommon: Bd, contain: Yd
            }, polygon: {
                createCover: function (t, e) {
                    var n = new Gp;
                    return n.add(new um({name: "main", style: Rd(e), silent: !0})), n
                }, getCreatingRange: function (t) {
                    return t
                }, endCreating: function (t, e) {
                    e.remove(e.childAt(0)), e.add(new lm({
                        name: "main",
                        draggable: !0,
                        drift: pb(Wd, t, e),
                        ondragend: pb(Ad, t, {isEnd: !0})
                    }))
                }, updateCoverShape: function (t, e, n) {
                    e.childAt(0).setShape({points: Gd(t, e, n)})
                }, updateCommon: Bd, contain: Yd
            }
        }, Db = {axisPointer: 1, tooltip: 1, brush: 1}, Pb = f, Ob = u, Lb = _, Bb = ["dataToPoint", "pointToData"],
        Eb = ["grid", "xAxis", "yAxis", "geo", "graph", "polar", "radiusAxis", "angleAxis", "bmap"], Rb = rf.prototype;
    Rb.setOutputRanges = function (t, e) {
        this.matchOutputRanges(t, e, function (t, e, n) {
            if ((t.coordRanges || (t.coordRanges = [])).push(e), !t.coordRange) {
                t.coordRange = e;
                var i = Vb[t.brushType](0, n, e);
                t.__rangeOffset = {offset: Wb[t.brushType](i.values, t.range, [1, 1]), xyMinMax: i.xyMinMax}
            }
        })
    }, Rb.matchOutputRanges = function (t, e, n) {
        Pb(t, function (t) {
            var i = this.findTargetInfo(t, e);
            i && i !== !0 && f(i.coordSyses, function (i) {
                var r = Vb[t.brushType](1, i, t.range);
                n(t, r.values, i, e)
            })
        }, this)
    }, Rb.setInputRanges = function (t, e) {
        Pb(t, function (t) {
            var n = this.findTargetInfo(t, e);
            if (t.range = t.range || [], n && n !== !0) {
                t.panelId = n.panelId;
                var i = Vb[t.brushType](0, n.coordSys, t.coordRange), r = t.__rangeOffset;
                t.range = r ? Wb[t.brushType](i.values, r.offset, uf(i.xyMinMax, r.xyMinMax)) : i.values
            }
        }, this)
    }, Rb.makePanelOpts = function (t, e) {
        return p(this._targetInfoList, function (n) {
            var i = n.getPanelRect();
            return {
                panelId: n.panelId,
                defaultBrushType: e && e(n),
                clipPath: Jd(i),
                isTargetByCursor: ef(i, t, n.coordSysModel),
                getLinearBrushOtherExtent: tf(i)
            }
        })
    }, Rb.controlSeries = function (t, e, n) {
        var i = this.findTargetInfo(t, n);
        return i === !0 || i && Ob(i.coordSyses, e.coordinateSystem) >= 0
    }, Rb.findTargetInfo = function (t, e) {
        for (var n = this._targetInfoList, i = of(e, t), r = 0; r < n.length; r++) {
            var a = n[r], o = t.panelId;
            if (o) {
                if (a.panelId === o) return a
            } else for (var r = 0; r < Fb.length; r++) if (Fb[r](i, a)) return a
        }
        return !0
    };
    var zb = {
        grid: function (t, e) {
            var n = t.xAxisModels, i = t.yAxisModels, r = t.gridModels, a = F(), o = {}, s = {};
            (n || i || r) && (Pb(n, function (t) {
                var e = t.axis.grid.model;
                a.set(e.id, e), o[e.id] = !0
            }), Pb(i, function (t) {
                var e = t.axis.grid.model;
                a.set(e.id, e), s[e.id] = !0
            }), Pb(r, function (t) {
                a.set(t.id, t), o[t.id] = !0, s[t.id] = !0
            }), a.each(function (t) {
                var r = t.coordinateSystem, a = [];
                Pb(r.getCartesians(), function (t) {
                    (Ob(n, t.getAxis("x").model) >= 0 || Ob(i, t.getAxis("y").model) >= 0) && a.push(t)
                }), e.push({
                    panelId: "grid--" + t.id,
                    gridModel: t,
                    coordSysModel: t,
                    coordSys: a[0],
                    coordSyses: a,
                    getPanelRect: Nb.grid,
                    xAxisDeclared: o[t.id],
                    yAxisDeclared: s[t.id]
                })
            }))
        }, geo: function (t, e) {
            Pb(t.geoModels, function (t) {
                var n = t.coordinateSystem;
                e.push({
                    panelId: "geo--" + t.id,
                    geoModel: t,
                    coordSysModel: t,
                    coordSys: n,
                    coordSyses: [n],
                    getPanelRect: Nb.geo
                })
            })
        }
    }, Fb = [function (t, e) {
        var n = t.xAxisModel, i = t.yAxisModel, r = t.gridModel;
        return !r && n && (r = n.axis.grid.model), !r && i && (r = i.axis.grid.model), r && r === e.gridModel
    }, function (t, e) {
        var n = t.geoModel;
        return n && n === e.geoModel
    }], Nb = {
        grid: function () {
            return this.coordSys.grid.getRect().clone()
        }, geo: function () {
            var t = this.coordSys, e = t.getBoundingRect().clone();
            return e.applyTransform(Oa(t)), e
        }
    }, Vb = {
        lineX: Lb(sf, 0), lineY: Lb(sf, 1), rect: function (t, e, n) {
            var i = e[Bb[t]]([n[0][0], n[1][0]]), r = e[Bb[t]]([n[0][1], n[1][1]]),
                a = [af([i[0], r[0]]), af([i[1], r[1]])];
            return {values: a, xyMinMax: a}
        }, polygon: function (t, e, n) {
            var i = [[1 / 0, -1 / 0], [1 / 0, -1 / 0]], r = p(n, function (n) {
                var r = e[Bb[t]](n);
                return i[0][0] = Math.min(i[0][0], r[0]), i[1][0] = Math.min(i[1][0], r[1]), i[0][1] = Math.max(i[0][1], r[0]), i[1][1] = Math.max(i[1][1], r[1]), r
            });
            return {values: r, xyMinMax: i}
        }
    }, Wb = {
        lineX: Lb(lf, 0), lineY: Lb(lf, 1), rect: function (t, e, n) {
            return [[t[0][0] - n[0] * e[0][0], t[0][1] - n[0] * e[0][1]], [t[1][0] - n[1] * e[1][0], t[1][1] - n[1] * e[1][1]]]
        }, polygon: function (t, e, n) {
            return p(t, function (t, i) {
                return [t[0] - n[0] * e[i][0], t[1] - n[1] * e[i][1]]
            })
        }
    }, Hb = f, Gb = "\x00_ec_hist_store", Xb = function (t, e, n, i, r, a) {
        e[0] = mf(e[0], n), e[1] = mf(e[1], n), t = t || 0;
        var o = n[1] - n[0];
        null != r && (r = mf(r, [0, o])), null != a && (a = Math.max(a, null != r ? r : 0)), "all" === i && (r = a = Math.abs(e[1] - e[0]), i = 0);
        var s = vf(e, i);
        e[i] += t;
        var l = r || 0, u = n.slice();
        s.sign < 0 ? u[0] += l : u[1] -= l, e[i] = mf(e[i], u);
        var h = vf(e, i);
        null != r && (h.sign !== s.sign || h.span < r) && (e[1 - i] = e[i] + s.sign * r);
        var h = vf(e, i);
        return null != a && h.span > a && (e[1 - i] = e[i] + h.sign * a), e
    };
    Jm.registerSubTypeDefaulter("dataZoom", function () {
        return "slider"
    });
    var Zb = ["x", "y", "z", "radius", "angle", "single"], jb = ["cartesian2d", "polar", "singleAxis"],
        Yb = _f(Zb, ["axisIndex", "axis", "index", "id"]), qb = f, Ub = Ua, $b = function (t, e, n, i) {
            this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this._minMaxSpan, this.ecModel = i, this._dataZoomModel = n
        };
    $b.prototype = {
        constructor: $b, hostedBy: function (t) {
            return this._dataZoomModel === t
        }, getDataValueWindow: function () {
            return this._valueWindow.slice()
        }, getDataPercentWindow: function () {
            return this._percentWindow.slice()
        }, getTargetSeriesModels: function () {
            var t = [], e = this.ecModel;
            return e.eachSeries(function (n) {
                if (yf(n.get("coordinateSystem"))) {
                    var i = this._dimName, r = e.queryComponents({
                        mainType: i + "Axis",
                        index: n.get(i + "AxisIndex"),
                        id: n.get(i + "AxisId")
                    })[0];
                    this._axisIndex === (r && r.componentIndex) && t.push(n)
                }
            }, this), t
        }, getAxisModel: function () {
            return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
        }, getOtherAxisModel: function () {
            var t, e, n = this._dimName, i = this.ecModel, r = this.getAxisModel(), a = "x" === n || "y" === n;
            a ? (e = "gridIndex", t = "x" === n ? "y" : "x") : (e = "polarIndex", t = "angle" === n ? "radius" : "angle");
            var o;
            return i.eachComponent(t + "Axis", function (t) {
                (t.get(e) || 0) === (r.get(e) || 0) && (o = t)
            }), o
        }, getMinMaxSpan: function () {
            return i(this._minMaxSpan)
        }, calculateDataWindow: function (t) {
            var e = this._dataExtent, n = this.getAxisModel(), i = n.axis.scale,
                r = this._dataZoomModel.getRangePropMode(), a = [0, 100], o = [t.start, t.end], s = [];
            return qb(["startValue", "endValue"], function (e) {
                s.push(null != t[e] ? i.parse(t[e]) : null)
            }), qb([0, 1], function (t) {
                var n = s[t], l = o[t];
                "percent" === r[t] ? (null == l && (l = a[t]), n = i.parse(ja(l, a, e, !0))) : l = ja(n, e, a, !0), s[t] = n, o[t] = l
            }), {valueWindow: Ub(s), percentWindow: Ub(o)}
        }, reset: function (t) {
            if (t === this._dataZoomModel) {
                var e = this.getTargetSeriesModels();
                this._dataExtent = wf(this, this._dimName, e);
                var n = this.calculateDataWindow(t.option);
                this._valueWindow = n.valueWindow, this._percentWindow = n.percentWindow, Sf(this), Mf(this)
            }
        }, restore: function (t) {
            t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, Mf(this, !0))
        }, filterData: function (t) {
            function e(t) {
                return t >= a[0] && t <= a[1]
            }

            if (t === this._dataZoomModel) {
                var n = this._dimName, i = this.getTargetSeriesModels(), r = t.get("filterMode"), a = this._valueWindow;
                "none" !== r && qb(i, function (t) {
                    var i = t.getData(), o = i.mapDimension(n, !0);
                    o.length && ("weakFilter" === r ? i.filterSelf(function (t) {
                        for (var e, n, r, s = 0; s < o.length; s++) {
                            var l = i.get(o[s], t), u = !isNaN(l), h = l < a[0], c = l > a[1];
                            if (u && !h && !c) return !0;
                            u && (r = !0), h && (e = !0), c && (n = !0)
                        }
                        return r && e && n
                    }) : qb(o, function (n) {
                        if ("empty" === r) t.setData(i.map(n, function (t) {
                            return e(t) ? t : 0 / 0
                        })); else {
                            var o = {};
                            o[n] = a, i.selectRange(o)
                        }
                    }), qb(o, function (t) {
                        i.setApproximateExtent(a, t)
                    }))
                })
            }
        }
    };
    var Kb = f, Qb = Yb, Jb = tu({
        type: "dataZoom",
        dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series"],
        defaultOption: {
            zlevel: 0,
            z: 4,
            orient: null,
            xAxisIndex: null,
            yAxisIndex: null,
            filterMode: "filter",
            throttle: null,
            start: 0,
            end: 100,
            startValue: null,
            endValue: null,
            minSpan: null,
            maxSpan: null,
            minValueSpan: null,
            maxValueSpan: null,
            rangeMode: null
        },
        init: function (t, e, n) {
            this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = !0, this._rangePropMode = ["percent", "percent"];
            var i = Tf(t);
            this.mergeDefaultAndTheme(t, n), this.doInit(i)
        },
        mergeOption: function (t) {
            var e = Tf(t);
            r(this.option, t, !0), this.doInit(e)
        },
        doInit: function (t) {
            var e = this.option;
            Ef.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), If(this, t), Kb([["start", "startValue"], ["end", "endValue"]], function (t, n) {
                "value" === this._rangePropMode[n] && (e[t[0]] = null)
            }, this), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
        },
        _giveAxisProxies: function () {
            var t = this._axisProxies;
            this.eachTargetAxis(function (e, n, i, r) {
                var a = this.dependentModels[e.axis][n],
                    o = a.__dzAxisProxy || (a.__dzAxisProxy = new $b(e.name, n, this, r));
                t[e.name + "_" + n] = o
            }, this)
        },
        _resetTarget: function () {
            var t = this.option, e = this._judgeAutoMode();
            Qb(function (e) {
                var n = e.axisIndex;
                t[n] = Ri(t[n])
            }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
        },
        _judgeAutoMode: function () {
            var t = this.option, e = !1;
            Qb(function (n) {
                null != t[n.axisIndex] && (e = !0)
            }, this);
            var n = t.orient;
            return null == n && e ? "orient" : e ? void 0 : (null == n && (t.orient = "horizontal"), "axisIndex")
        },
        _autoSetAxisIndex: function () {
            var t = !0, e = this.get("orient", !0), n = this.option, i = this.dependentModels;
            if (t) {
                var r = "vertical" === e ? "y" : "x";
                i[r + "Axis"].length ? (n[r + "AxisIndex"] = [0], t = !1) : Kb(i.singleAxis, function (i) {
                    t && i.get("orient", !0) === e && (n.singleAxisIndex = [i.componentIndex], t = !1)
                })
            }
            t && Qb(function (e) {
                if (t) {
                    var i = [], r = this.dependentModels[e.axis];
                    if (r.length && !i.length) for (var a = 0, o = r.length; o > a; a++) "category" === r[a].get("type") && i.push(a);
                    n[e.axisIndex] = i, i.length && (t = !1)
                }
            }, this), t && this.ecModel.eachSeries(function (t) {
                this._isSeriesHasAllAxesTypeOf(t, "value") && Qb(function (e) {
                    var i = n[e.axisIndex], r = t.get(e.axisIndex), a = t.get(e.axisId),
                        o = t.ecModel.queryComponents({mainType: e.axis, index: r, id: a})[0];
                    r = o.componentIndex, u(i, r) < 0 && i.push(r)
                })
            }, this)
        },
        _autoSetOrient: function () {
            var t;
            this.eachTargetAxis(function (e) {
                !t && (t = e.name)
            }, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
        },
        _isSeriesHasAllAxesTypeOf: function (t, e) {
            var n = !0;
            return Qb(function (i) {
                var r = t.get(i.axisIndex), a = this.dependentModels[i.axis][r];
                a && a.get("type") === e || (n = !1)
            }, this), n
        },
        _setDefaultThrottle: function (t) {
            if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
                var e = this.ecModel.option;
                this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
            }
        },
        getFirstTargetAxisModel: function () {
            var t;
            return Qb(function (e) {
                if (null == t) {
                    var n = this.get(e.axisIndex);
                    n.length && (t = this.dependentModels[e.axis][n[0]])
                }
            }, this), t
        },
        eachTargetAxis: function (t, e) {
            var n = this.ecModel;
            Qb(function (i) {
                Kb(this.get(i.axisIndex), function (r) {
                    t.call(e, i, r, this, n)
                }, this)
            }, this)
        },
        getAxisProxy: function (t, e) {
            return this._axisProxies[t + "_" + e]
        },
        getAxisModel: function (t, e) {
            var n = this.getAxisProxy(t, e);
            return n && n.getAxisModel()
        },
        setRawRange: function (t, e) {
            var n = this.option;
            Kb([["start", "startValue"], ["end", "endValue"]], function (e) {
                (null != t[e[0]] || null != t[e[1]]) && (n[e[0]] = t[e[0]], n[e[1]] = t[e[1]])
            }, this), !e && If(this, t)
        },
        getPercentRange: function () {
            var t = this.findRepresentativeAxisProxy();
            return t ? t.getDataPercentWindow() : void 0
        },
        getValueRange: function (t, e) {
            if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
            var n = this.findRepresentativeAxisProxy();
            return n ? n.getDataValueWindow() : void 0
        },
        findRepresentativeAxisProxy: function (t) {
            if (t) return t.__dzAxisProxy;
            var e = this._axisProxies;
            for (var n in e) if (e.hasOwnProperty(n) && e[n].hostedBy(this)) return e[n];
            for (var n in e) if (e.hasOwnProperty(n) && !e[n].hostedBy(this)) return e[n]
        },
        getRangePropMode: function () {
            return this._rangePropMode.slice()
        }
    }), tM = Wy.extend({
        type: "dataZoom", render: function (t, e, n) {
            this.dataZoomModel = t, this.ecModel = e, this.api = n
        }, getTargetCoordInfo: function () {
            function t(t, e, n, i) {
                for (var r, a = 0; a < n.length; a++) if (n[a].model === t) {
                    r = n[a];
                    break
                }
                r || n.push(r = {model: t, axisModels: [], coordIndex: i}), r.axisModels.push(e)
            }

            var e = this.dataZoomModel, n = this.ecModel, i = {};
            return e.eachTargetAxis(function (e, r) {
                var a = n.getComponent(e.axis, r);
                if (a) {
                    var o = a.getCoordSysModel();
                    o && t(o, a, i[o.mainType] || (i[o.mainType] = []), o.componentIndex)
                }
            }, this), i
        }
    });
    Jb.extend({type: "dataZoom.select"}), tM.extend({type: "dataZoom.select"}), Zl({
        getTargetSeries: function (t) {
            var e = F();
            return t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(function (t, n, i) {
                    var r = i.getAxisProxy(t.name, n);
                    f(r.getTargetSeriesModels(), function (t) {
                        e.set(t.uid, t)
                    })
                })
            }), e
        }, modifyOutputEnd: !0, overallReset: function (t, e) {
            t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(function (t, n, i) {
                    i.getAxisProxy(t.name, n).reset(i, e)
                }), t.eachTargetAxis(function (t, n, i) {
                    i.getAxisProxy(t.name, n).filterData(i, e)
                })
            }), t.eachComponent("dataZoom", function (t) {
                var e = t.findRepresentativeAxisProxy(), n = e.getDataPercentWindow(), i = e.getDataValueWindow();
                t.setRawRange({start: n[0], end: n[1], startValue: i[0], endValue: i[1]}, !0)
            })
        }
    }), Yl("dataZoom", function (t, e) {
        var n = xf(y(e.eachComponent, e, "dataZoom"), Yb, function (t, e) {
            return t.get(e.axisIndex)
        }), i = [];
        e.eachComponent({mainType: "dataZoom", query: t}, function (t) {
            i.push.apply(i, n(t).nodes)
        }), f(i, function (e) {
            e.setRawRange({start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue})
        })
    });
    var eM = Qy.toolbox.dataZoom, nM = f, iM = "\x00_ec_\x00toolbox-dataZoom_";
    Cf.defaultOption = {
        show: !0,
        icon: {
            zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
            back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
        },
        title: i(eM.title)
    };
    var rM = Cf.prototype;
    rM.render = function (t, e, n, i) {
        this.model = t, this.ecModel = e, this.api = n, Df(t, e, this, i, n), Af(t, e)
    }, rM.onclick = function (t, e, n) {
        aM[n].call(this)
    }, rM.remove = function () {
        this._brushController.unmount()
    }, rM.dispose = function () {
        this._brushController.dispose()
    };
    var aM = {
        zoom: function () {
            var t = !this._isZoomActive;
            this.api.dispatchAction({type: "takeGlobalCursor", key: "dataZoomSelect", dataZoomSelectActive: t})
        }, back: function () {
            this._dispatchZoomAction(df(this.ecModel))
        }
    };
    rM._onBrush = function (t, e) {
        function n(t, e, n) {
            var o = e.getAxis(t), s = o.model, l = i(t, s, a), u = l.findRepresentativeAxisProxy(s).getMinMaxSpan();
            (null != u.minValueSpan || null != u.maxValueSpan) && (n = Xb(0, n.slice(), o.scale.getExtent(), 0, u.minValueSpan, u.maxValueSpan)), l && (r[l.id] = {
                dataZoomId: l.id,
                startValue: n[0],
                endValue: n[1]
            })
        }

        function i(t, e, n) {
            var i;
            return n.eachComponent({mainType: "dataZoom", subType: "select"}, function (n) {
                var r = n.getAxisModel(t, e.componentIndex);
                r && (i = n)
            }), i
        }

        if (e.isEnd && t.length) {
            var r = {}, a = this.ecModel;
            this._brushController.updateCovers([]);
            var o = new rf(kf(this.model.option), a, {include: ["grid"]});
            o.matchOutputRanges(t, a, function (t, e, i) {
                if ("cartesian2d" === i.type) {
                    var r = t.brushType;
                    "rect" === r ? (n("x", i, e[0]), n("y", i, e[1])) : n({lineX: "x", lineY: "y"}[r], i, e)
                }
            }), cf(a, r), this._dispatchZoomAction(r)
        }
    }, rM._dispatchZoomAction = function (t) {
        var e = [];
        nM(t, function (t) {
            e.push(i(t))
        }), e.length && this.api.dispatchAction({type: "dataZoom", from: this.uid, batch: e})
    }, $c("dataZoom", Cf), Xl(function (t) {
        function e(t, e) {
            if (e) {
                var r = t + "Index", a = e[r];
                null == a || "all" === a || x(a) || (a = a === !1 || "none" === a ? [] : [a]), n(t, function (e, n) {
                    if (null == a || "all" === a || -1 !== u(a, n)) {
                        var o = {type: "select", $fromToolbox: !0, id: iM + t + n};
                        o[r] = n, i.push(o)
                    }
                })
            }
        }

        function n(e, n) {
            var i = t[e];
            x(i) || (i = i ? [i] : []), nM(i, n)
        }

        if (t) {
            var i = t.dataZoom || (t.dataZoom = []);
            x(i) || (t.dataZoom = i = [i]);
            var r = t.toolbox;
            if (r && (x(r) && (r = r[0]), r && r.feature)) {
                var a = r.feature.dataZoom;
                e("xAxis", a), e("yAxis", a)
            }
        }
    });
    var oM = Qy.toolbox.restore;
    Pf.defaultOption = {
        show: !0,
        icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
        title: oM.title
    };
    var sM = Pf.prototype;
    sM.onclick = function (t, e) {
        ff(t), e.dispatchAction({type: "restore", from: this.uid})
    }, $c("restore", Pf), Yl({type: "restore", event: "restore", update: "prepareAndUpdate"}, function (t, e) {
        e.resetOption("recreate")
    }), t.version = D_, t.dependencies = P_, t.PRIORITY = V_, t.init = zl, t.connect = Fl, t.disConnect = Nl, t.disconnect = ox, t.dispose = Vl, t.getInstanceByDom = Wl, t.getInstanceById = Hl, t.registerTheme = Gl, t.registerPreprocessor = Xl, t.registerProcessor = Zl, t.registerPostUpdate = jl, t.registerAction = Yl, t.registerCoordinateSystem = ql, t.getCoordinateSystemDimensions = Ul, t.registerLayout = $l, t.registerVisual = Kl, t.registerLoading = Jl, t.extendComponentModel = tu, t.extendComponentView = eu, t.extendSeriesModel = nu, t.extendChartView = iu, t.setCanvasCreator = ru, t.registerMap = au, t.getMap = ou, t.dataTool = sx, t.zrender = zg, t.number = Fm, t.format = jm, t.throttle = Ws, t.helper = ow, t.matrix = cp, t.vector = ep, t.color = Dp, t.parseGeoJSON = lw, t.parseGeoJson = dw, t.util = fw, t.graphic = pw, t.List = mx, t.Model = Na, t.Axis = cw, t.env = Ef

//=============================================================
    /***********加上这部分echarts就可以被layui模块化加载了***********/

    //将echarts对象局部暴露给layui
    layui.define(function (drdrdr) {
        layui.t = t;
        drdrdr('echarts', t);
    });

    /***********************是不是感觉很简单************************/
//=============================================================


});