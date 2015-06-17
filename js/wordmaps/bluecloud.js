(function (e) {
    function f(e) {
        if (!(this instanceof f)) return new f(e);
        e || (e = {});
        "number" == typeof e && (e = {
            s: e
        });
        null != e.u || (e.u = !0);
        this.options = e;
        this.s = e.s || f.C;
        this.H = 1E3 / this.s;
        this.I = this.s !== f.C;
        this.w = null;
        this.l = {};
        this.p = this.v = 0
    }
    var u = Date.now,
        O = e.setTimeout,
        n, y, C = !1;
    (function () {
        var f, s = ["ms", "moz", "webkit", "o"];
        n = e.requestAnimationFrame;
        y = e.cancelAnimationFrame;
        for (f = 0; f < s.length && !n; f++) n = n || e[s[f] + "RequestAnimationFrame"], y = y || e[s[f] + "CancelAnimationFrame"] || e[s[f] + "CancelRequestAnimationFrame"];
        n && n(function () {
            C = !0
        })
    })();
    f.C = 60;
    f.R = function (n) {
        var s = new f(n);
        e.requestAnimationFrame = function (e) {
            return s.Q(e)
        };
        e.cancelAnimationFrame = function (e) {
            return s.cancel(e)
        };
        return s
    };
    f.prototype.request = function (e) {
        var f = this,
            w;
        ++this.p;
        if (C && f.options.u && !this.I) return n(e);
        if (!e) throw new TypeError("Not enough arguments");
        null == this.w && (w = this.H + this.v - (u ? u() : (new Date).getTime()), 0 > w && (w = 0), this.w = O(function () {
            var e;
            f.v = u ? u() : (new Date).getTime();
            f.w = null;
            ++f.p;
            for (e in f.l)
                if (f.l[e]) {
                    if (C && f.options.u) n(f.l[e]);
                    else f.l[e](f.v);
                    delete f.l[e]
                }
        }, w));
        this.l[this.p] = e;
        return this.p
    };
    f.prototype.cancel = function (e) {
        C && this.options.u && y(e);
        delete this.l[e]
    };
    "object" == typeof exports && "object" == typeof module ? module.P = f : "function" == typeof define && define.O ? define(function () {
        return f
    }) : e.AnimationFrame = f
})(window);
window.TagulDisplayCloud = function (e, f, u, O) {
    function n(b) {
        return !isNaN(parseFloat(b)) && isFinite(b)
    }

    function y() {
        var b = h.offsetWidth,
            c = h.offsetHeight;
        G = 36E4 < b * c ? 1 : 1.5;
        h.width = G * b + 1;
        h.height = G * c + 1
    }

    function C() {
        if (x) {
            attribution.f = D;
            var b = H();
            attribution.d = b - Math.max(attribution.k - (b - attribution.d), 0);
            attribution.q = !0
        }
    }

    function K(b) {
        b = parseInt(b.replace("#", ""), 16);
        return {
            j: b >> 16 & 255,
            i: b >> 8 & 255,
            g: b & 255
        }
    }

    function s(b, c) {
        b = b.substring(1, b.length);
        b = K(b);
        return "rgba(" + b.j + "," + b.i + "," + b.g + "," + c.toFixed(4) +
            ")"
    }

    function w(b) {
        b = b.toString(16);
        return 1 == b.length ? "0" + b : b
    }

    function Q(b, c, d) {
        c1 = K(b.substring(1, b.length));
        c2 = K(c.substring(1, c.length));
        return "#" + w(Math.round(c1.j * (1 - d) + c2.j * d)) + w(Math.round(c1.i * (1 - d) + c2.i * d)) + w(Math.round(c1.g * (1 - d) + c2.g * d))
    }

    function H() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function L(b, c) {
        b.setTransform(c[0][0], c[1][0], c[0][1], c[1][1], c[0][2], c[1][2])
    }

    function v(b, c) {
        return [[1, 0, b], [0, 1, c]]
    }

    function q(b, c) {
        return [[b[0][0] * c[0][0] + b[0][1] * c[1][0], b[0][0] * c[0][1] +
b[0][1] * c[1][1], b[0][0] * c[0][2] + b[0][1] * c[1][2] + b[0][2]], [b[1][0] * c[0][0] + b[1][1] * c[1][0], b[1][0] * c[0][1] + b[1][1] * c[1][1], b[1][0] * c[0][2] + b[1][1] * c[1][2] + b[1][2]]]
    }

    function R(b) {
        var c = b[0][0] * b[1][1] - b[0][1] * b[1][0];
        return [[b[1][1] / c, -b[0][1] / c, (b[0][1] * b[1][2] - b[0][2] * b[1][1]) / c], [-b[1][0] / c, b[0][0] / c, (b[0][2] * b[1][0] - b[0][0] * b[1][2]) / c]]
    }

    function S(b) {
        return Math.sqrt(b[0][0] * b[0][0] + b[0][1] * b[0][1])
    }

    function E(b, c) {
        return {
            x: c[0][0] * b.x + c[0][1] * b.y + c[0][2],
            y: c[1][0] * b.x + c[1][1] * b.y + c[1][2]
        }
    }

    function F(b,
        c) {
        var d = E({
                x: b.x,
                y: b.y
            }, c),
            a = E({
                x: b.x + b.width,
                y: b.y + b.height
            }, c),
            e = E({
                x: b.x,
                y: b.y + b.height
            }, c),
            g = E({
                x: b.x + b.width,
                y: b.y
            }, c),
            f = Math.min(d.x, a.x, e.x, g.x),
            h = Math.min(d.y, a.y, e.y, g.y),
            k = Math.max(d.x, a.x, e.x, g.x),
            d = Math.max(d.y, a.y, e.y, g.y);
        return {
            x: f,
            y: h,
            width: k - f,
            height: d - h
        }
    }

    function T(b, c) {
        var d = v(-b.bbox.D, -b.bbox.F),
            a = Math.pow(b.o / b.scale, c),
            d = q([[a, 0, 0], [0, a, 0]], d),
            a = (b.N - b.G) * c,
            d = q([[Math.cos(a), Math.sin(a), 0], [-Math.sin(a), Math.cos(a), 0]], d);
        return q(v(b.bbox.D, b.bbox.F), d)
    }

    function U(b, c, d, a,
        e) {
        radius = 0.1 * Math.min(a, e);
        b.beginPath();
        b.moveTo(c + radius, d);
        b.lineTo(c + a - radius, d);
        b.quadraticCurveTo(c + a, d, c + a, d + radius);
        b.lineTo(c + a, d + e - radius);
        b.quadraticCurveTo(c + a, d + e, c + a - radius, d + e);
        b.lineTo(c + radius, d + e);
        b.quadraticCurveTo(c, d + e, c, d + e - radius);
        b.lineTo(c, d + radius);
        b.quadraticCurveTo(c, d, c + radius, d);
        b.closePath();
        b.fill()
    }

    function M(b, c) {
        for (var d = 0, a = 0, e = 0; e < c.glyphs.length; e++) {
            var g = c.glyphs[e],
                d = v(g.x - d, g.y - a);
            b.transform(d[0][0], d[1][0], d[0][1], d[1][1], d[0][2], d[1][2]);
            d = b;
            a = g.path;
            d.beginPath();
            for (var f = void 0, h = void 0, k = 0; k < a.length; k++) "M" == a[k] ? d.moveTo(f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "q" == a[k] ? d.quadraticCurveTo(f + parseFloat(a[++k]), f + parseFloat(a[++k]), f += parseFloat(a[++k]), h = f + parseFloat(a[++k])) : "Q" == a[k] ? d.quadraticCurveTo(parseFloat(a[++k]), parseFloat(a[++k]), f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "c" == a[k] ? d.bezierCurveTo(f + parseFloat(a[++k]), h + parseFloat(a[++k]), f + parseFloat(a[++k]), h + parseFloat(a[++k]), f += parseFloat(a[++k]), h += parseFloat(a[++k])) :
                "C" == a[k] ? d.bezierCurveTo(a[++k], a[++k], a[++k], a[++k], f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "l" == a[k] ? d.lineTo(f += parseFloat(a[++k]), h += parseFloat(a[++k])) : "h" == a[k] ? d.lineTo(f += parseFloat(a[++k]), h) : "H" == a[k] ? d.lineTo(f = parseFloat(a[++k]), h) : "v" == a[k] ? d.lineTo(f, h += parseFloat(a[++k])) : "V" == a[k] ? d.lineTo(f, h = parseFloat(a[++k])) : "L" == a[k] ? d.lineTo(f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "Z" != a[k] && "z" != a[k] || d.closePath();
            d.closePath();
            d.fill();
            d = g.x;
            a = g.y
        }
    }

    function V() {
        var b = {},
            c;
        for (c in e.outlines) b[c] =
            e.outlines[c].split(" ");
        for (c = 0; c < r.length; ++c)
            for (var d = 0; d < r[c].glyphs.length; ++d) r[c].glyphs[d].path = b[r[c].glyphs[d].glyph];
        void 0 != l.backgroundColor && (m.fillStyle = s(l.backgroundColor, l.J), m.fillRect(0, 0, h.width, h.height));
        b = e.a;
        c = Math.min(0.95 * h.width / b.width, 0.95 * h.height / b.height);
        d = q([[c, 0, 0], [0, c, 0]], v(-b.x + (h.width / c - b.width) / 2, -b.y + (h.height / c - b.height) / 2));
        for (c = 0; c < r.length; c++) {
            var a = r[c];
            m.fillStyle = a.fill;
            a.h = q(d, a.matrix);
            L(m, a.h);
            M(m, a);
            a.bbox.b = a.bbox.x + a.bbox.width;
            a.bbox.c = a.bbox.y +
                a.bbox.height;
            a.bbox.D = a.bbox.x + a.bbox.width / 2;
            a.bbox.F = a.bbox.y + a.bbox.height / 2;
            a.B = R(a.h);
            a.d = 0;
            a.scale = S(a.matrix);
            a.o = l.zoom ? Math.max(1.1 * a.scale, 0.15 * Math.sqrt(b.width * b.height / (a.bbox.width * a.bbox.height))) : a.scale;
            a.o = Math.min(a.o, Math.min(b.width / a.bbox.width, b.height / a.bbox.height));
            a.o = Math.max(a.scale, a.o);
            var f = a.matrix,
                g = S(f),
                n = f[0][0] / g,
                f = f[0][1] / g,
                g = void 0,
                g = 1 < f ? 90 : -1 > f ? -90 : 180 * Math.asin(f) / Math.PI;
            0 > n && (g = 180 * (0 > f ? -1 : 1) - g);
            a.G = Math.round(g) * Math.PI / 180;
            a.N = l.rotate ? 0 : a.G;
            a.m = 0;
            a.n =
                0;
            a.e = F(a.bbox, q(a.h, T(a, 1)));
            0 > a.e.x && (a.m = -a.e.x);
            a.e.x + a.e.width > h.width && (a.m = -(a.e.x + a.e.width) + h.width);
            0 > a.e.y && (a.n = -a.e.y);
            a.e.y + a.e.height > h.height && (a.n = -(a.e.y + a.e.height) + h.height);
            a.L = Q(l.backgroundColor, a.fill, 0.2);
            x && a.fill && (attribution.backgroundColor = attribution.backgroundColor || {
                j: 0,
                i: 0,
                g: 0
            }, a = K(a.fill), attribution.backgroundColor.j += a.j, attribution.backgroundColor.i += a.i, attribution.backgroundColor.g += a.g)
        }
        l.A && (l.r = s(l.A, 1), l.r = l.r.substring(0, l.r.length - 7));
        P = m.getImageData(0,
            0, h.width, h.height);
        if (x) {
            attribution.backgroundColor.j /= r.length;
            attribution.backgroundColor.i /= r.length;
            attribution.backgroundColor.g /= r.length;
            attribution.backgroundColor = "#" + (65536 * attribution.backgroundColor.j + 256 * attribution.backgroundColor.i + attribution.backgroundColor.g).toString(16);
            attribution.backgroundColor = s(attribution.backgroundColor, 0.8);
            attribution.t = l.backgroundColor;
            for (c = 0; c < attribution.data.tags.length; c++) a = attribution.data.tags[c], b = F(a.bbox, a.matrix), attribution.a = attribution.a ? {
                x: Math.min(b.x, attribution.a.x),
                y: Math.min(b.y, attribution.a.y),
                b: Math.max(b.x + b.width, attribution.a.b),
                c: Math.max(b.y + b.height, attribution.a.c)
            } : {
                x: b.x,
                y: b.y,
                b: b.x + b.width,
                c: b.y + b.height
            };
            attribution.a.width = attribution.a.b - attribution.a.x;
            attribution.a.height = attribution.a.c - attribution.a.y;
            c = Math.min(h.width / attribution.a.width, h.height / attribution.a.height);
            c = Math.min(c, Math.sqrt(0.02 * h.width * h.height / (attribution.a.width * attribution.a.height)));
            a = attribution.data.tags[0];
            a.bbox.b = a.bbox.x + a.bbox.width;
            a.bbox.c = a.bbox.y + a.bbox.height;
            a.h = q(q([[c, 0, 0], [0, c, 0]], v(-attribution.a.x + (h.width / c - 1 * attribution.a.width), -attribution.a.y + (h.height / c - 0 * attribution.a.height))), a.matrix);
            a.m = 0;
            a.n = -attribution.a.height * c;
            a.B = R(q(v(1 * a.m, 1 * a.n), a.h));
            for (d = 0; d < a.glyphs.length; ++d) a.glyphs[d].path = attribution.data.outlines[a.glyphs[d].glyph].split(" ")
        }
    }

    function W() {
        if (p && 0 < p.length || x && attribution.q) {
            for (var b = p.slice(), c = 0; c < t.length; c++) - 1 == b.indexOf(t[c]) && b.push(t[c]);
            g && m.putImageData(P, 0, 0, g.x - 2, g.y - 2,
                g.width + 4, g.height + 4);
            g = void 0;
            for (c = 0; c < b.length; c++) {
                var d = b[c];
                m.fillStyle = d.L;
                L(m, d.h);
                M(m, d)
            }
            for (var a = H(), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = (a - d.d) / (1E3 * l.k),
                    e = 1 < e ? 1 : e;
                if (0.5 < e && d != z && d.f == D) {
                    var f = t.indexOf(d); - 1 != f && (t.splice(f, 1), -1 == p.indexOf(d) && p.push(d), -1 == b.indexOf(d) && b.push(d));
                    d.f = I;
                    e = 1 - e;
                    d.d = a - 1E3 * e * l.k
                }
                d.f == I && (e = 1 - e);
                0 < e ? (f = q(d.h, T(d, e)), f = q(v(e * d.m, e * d.n), f)) : f = d.h;
                L(m, f);
                g ? (f = F(d.bbox, f), g = {
                    x: Math.min(g.x, f.x),
                    y: Math.min(g.y, f.y),
                    b: Math.max(g.b, f.x + f.width),
                    c: Math.max(g.c, f.y +
                        f.height)
                }, g.width = g.b - g.x, g.height = g.c - g.y) : (g = F(d.bbox, f), g.b = g.x + g.width, g.c = g.y + g.height);
                l.A && (m.fillStyle = l.r + (e * l.K).toFixed(4) + ")", U(m, d.bbox.x, d.bbox.y, d.bbox.width, d.bbox.height));
                m.fillStyle = l.t ? Q(d.fill, l.t, e) : d.fill;
                M(m, d);
                a > d.d + 1E3 * l.k && (b.splice(c, 1), c < p.length && p.splice(c, 1), c--, d.f == D && -1 == t.indexOf(d) && t.push(d))
            }
            x && (attribution.q || g) && (d = attribution.data.tags[0], e = (a - attribution.d) / attribution.k, e = 1 < e ? 1 : e, 1 <= e && (attribution.q = !1), attribution.f == I && (e = 1 - e), f = q(v(e * d.m, e * d.n), d.h),
                g ? (f = F(d.bbox, f), g = {
                    x: Math.min(g.x, f.x),
                    y: Math.min(g.y, f.y),
                    b: Math.max(g.b, f.x + f.width),
                    c: Math.max(g.c, f.y + f.height)
                }, g.width = g.b - g.x, g.height = g.c - g.y) : (g = F(d.bbox, f), g.b = g.x + g.width, g.c = g.y + g.height), m.fillStyle = attribution.backgroundColor, L(m, q(v(e * d.m, e * d.n), d.h)), U(m, d.bbox.x, d.bbox.y, d.bbox.width, d.bbox.height), m.fillStyle = attribution.t, M(m, d))
        }
        N && N.request(W)
    }
    if (!f)
        if (e)
            if (f = document.createElement("canvas"), f.getContext && f.getContext("2d")) {
                for (var A = 0; document.getElementById(f = "tagul_embed_cloud_" +
                        A);) A++;
                document.writeln('<a id="' + f + '" style="width: 100%; height: 100%">');
                document.writeln('<canvas style="width: 100%; height: 100%"></canvas>');
                document.writeln("</a>");
                var A = document.getElementsByTagName("head")[0],
                    J = document.createElement("style"),
                    X = document.createTextNode("#" + f + " {outline: 0; border: 0; background: none; margin: 0; padding: 0;}\n#" + f + ":hover {border: 0;}\n");
                J.type = "text/css";
                J.styleSheet ? J.styleSheet.cssText = X.nodeValue : J.appendChild(X);
                A.appendChild(J)
            } else {
                document.writeln('<a href="http://tagul.com/unsupported-browser" style="width: 100%; height: 100%">');
                document.writeln('<img src="http://tagul.com/static/please_update_browser.png" style="width: 100%; height: auto"/>');
                document.writeln("</a>");
                return
            } else {
        document.writeln("<div>Sorry! Cloud does not exist!</div>");
        return
    }
    var x = !1;
    e.a = {
        x: e.viewBox.x,
        y: e.viewBox.y,
        width: e.viewBox.width,
        height: e.viewBox.height
    };
    A = {};
    u = "boolean" == typeof u ? u : !0;
    var G, g, r = e.tags,
        P, z = null,
        p = [],
        t = [],
        D = 0,
        I = 1;
    A.cleanUp = function () {
        m = B = null;
        h.onmousemove = null;
        h.onmouseout = null;
        l = N = t = p = z = P = g = h = window.onresize = null
    };
    var B = document.getElementById(f),
        h = B.getElementsByTagName("canvas")[0];
    window.onresize = function () {
        y();
        V()
    };
    y();
    var m = h.getContext("2d");
    m.clearRect(0, 0, h.width, h.height);
    x && (h.onmouseover = C);
    h.onmousemove = function (b) {
        var c = h,
            d = 0,
            a = 0;
        if (void 0 !== c.offsetParent) {
            do d += c.offsetLeft, a += c.offsetTop; while (c = c.offsetParent)
        }
        d += Y + Z + $;
        a += aa + ba + ca;
        b = {
            x: (b.pageX - d) * G,
            y: (b.pageY - a) * G
        };
        if (x && (c = attribution.data.tags[0], d = E(b, c.B), c = c.bbox, !(d.x < c.x || d.x > c.b || d.y < c.y || d.y > c.c))) {
            h.style.cursor = "pointer";
            B.href = attribution.url;
            B.target = "_blank";
            z = null;
            return
        }
        for (c = r.length - 1; 0 <= c && (d = E(b, r[c].B), a = r[c].bbox, d.x < a.x || d.x > a.b || d.y < a.y || d.y > a.c); c--);
        c = 0 <= c ? r[c] : null;
        null != c ? h.style.cursor = "pointer" : (h.style.cursor = "auto", B.removeAttribute("href"));
        if (c != z) {
            for (b = 0; b < t.length; b++) - 1 == p.indexOf(t[b]) && p.push(t[b]);
            t = []
        }
        c != z && null != c && (B.href = c.url ? c.url : "javascript:void(0);", B.target = l.M || O ? "_blank" : "_self", null != c && c.f != D && (c.f = D, b = H(), c.d = b - Math.max(1E3 * l.k - (b - c.d), 0), -1 == p.indexOf(c) && p.push(c)));
        z = c
    };
    h.onmouseout = function () {
        for (var b = 0; b <
            p.length; b++) {
            var c = p[b];
            if (c.f == D) {
                c.f = I;
                var d = H();
                c.d = d - Math.max(1E3 * l.k - (d - c.d), 0);
                z = null
            }
        }
        x && (attribution.f = I, d = H(), attribution.d = d - Math.max(attribution.k - (d - attribution.d), 0), attribution.q = !0)
    };
    var N = N || new window.AnimationFrame(60),
        Y = parseInt(document.defaultView.getComputedStyle(h, void 0).paddingLeft, 10) || 0,
        aa = parseInt(document.defaultView.getComputedStyle(h, void 0).paddingTop, 10) || 0,
        Z = parseInt(document.defaultView.getComputedStyle(h, void 0).borderLeftWidth, 10) || 0,
        ba = parseInt(document.defaultView.getComputedStyle(h,
            void 0).borderTopWidth, 10) || 0;
    f = document.body.parentNode;
    ca = f.offsetTop;
    $ = f.offsetLeft;
    void 0 === e.styleOptions && (e.styleOptions = {});
    var l = {
            backgroundColor: e.styleOptions.backgroundColor ? "#" + e.styleOptions.backgroundColor : "rgba(255, 255, 255, 0)",
            J: n(e.styleOptions.backgroundColorAlpha) ? e.styleOptions.backgroundColorAlpha : 1,
            k: n(e.styleOptions.animationSpeed) ? e.styleOptions.animationSpeed : 0.3,
            t: e.styleOptions.textColor ? "#" + e.styleOptions.textColor : void 0,
            S: n(e.styleOptions.textAlpha) ? e.styleOptions.textAlpha : 1,
            A: e.styleOptions.boxColor ?
                "#" + e.styleOptions.boxColor : void 0,
            K: n(e.styleOptions.boxAlpha) ? e.styleOptions.boxAlpha : 0.8,
            zoom: !0 == e.styleOptions.zoom,
            rotate: !0 == e.styleOptions.rotate,
            M: !0 == e.styleOptions.openLinksInNewWindow
        },
        Y, aa, Z, ba, ca, $;
    V();
    u && W();
    return A
};
TagulDisplayCloud({
    "viewBox": {
        "x": 1.4250000000000007,
        "y": 1.3749999999999991,
        "width": 196.75,
        "height": 194.35
    },
    "styleOptions": {
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "backgroundColorAlpha": 0,
        "animationSpeed": 0.2,
        "textColor": "ffffff",
        "textAlpha": 1,
        "boxColor": "000000",
        "boxAlpha": 0.7,
        "zoom": true,
        "rotate": true,
        "openLinksInNewWindow": false
    },
    "outlines": {
        "0.37": "M 507 -540 Q 507 -515 499 -489 Q 491 -463 475 -440.5 Q 459 -418 434 -401 Q 409 -384 375 -375 L 375 -371 Q 405 -366 432.5 -354 Q 460 -342 481 -321 Q 502 -300 515 -270 Q 528 -240 528 -199 Q 528 -145 505.5 -105.5 Q 483 -66 446.5 -41 Q 410 -16 363 -4 Q 316 8 267 8 Q 250 8 227 8 Q 204 8 179 6.5 Q 154 5 129 2.5 Q 104 0 85 -5 L 85 -694 Q 122 -700 171 -704 Q 220 -708 278 -708 Q 317 -708 357.5 -701.5 Q 398 -695 431 -676.5 Q 464 -658 485.5 -625 Q 507 -592 507 -540 M 275 -64 Q 307 -64 337 -71.5 Q 367 -79 390 -95.5 Q 413 -112 426.5 -136 Q 440 -160 440 -193 Q 440 -234 423.5 -259 Q 407 -284 380.5 -298 Q 354 -312 321 -317 Q 288 -322 255 -322 L 168 -322 L 168 -71 Q 175 -69 188 -68 Q 201 -67 216 -66 Q 231 -65 247 -64.5 Q 263 -64 275 -64 M 220 -392 Q 237 -392 261 -393 Q 285 -394 301 -396 Q 325 -404 346 -415.5 Q 367 -427 383.5 -442.5 Q 400 -458 409.5 -478.5 Q 419 -499 419 -523 Q 419 -556 406.5 -577.5 Q 394 -599 373 -612 Q 352 -625 325 -630.5 Q 298 -636 270 -636 Q 237 -636 209.5 -634.5 Q 182 -633 168 -630 L 168 -392 L 220 -392 Z ",
        "0.79": "M 166 -123 Q 166 -88 178 -73 Q 190 -58 212 -58 Q 225 -58 240 -60 Q 255 -62 274 -69 L 283 -6 Q 267 2 238.5 7 Q 210 12 189 12 Q 144 12 115 -13.5 Q 86 -39 86 -100 L 86 -700 L 166 -700 L 166 -123 Z ",
        "0.88": "M 149 -500 L 149 -215 Q 149 -176 153.5 -146.5 Q 158 -117 169 -97.5 Q 180 -78 199 -68 Q 218 -58 247 -58 Q 274 -58 295 -66.5 Q 316 -75 332.5 -90 Q 349 -105 361.5 -124.5 Q 374 -144 382 -166 L 382 -500 L 462 -500 L 462 -142 Q 462 -106 464.5 -67.5 Q 467 -29 473 0 L 418 0 L 398 -79 L 393 -79 Q 370 -40 331 -14 Q 292 12 232 12 Q 192 12 161.5 2.5 Q 131 -7 110.5 -31 Q 90 -55 79.5 -95.5 Q 69 -136 69 -198 L 69 -500 L 149 -500 Z ",
        "0.72": "M 442 -40 Q 412 -16 366.5 -2 Q 321 12 270 12 Q 213 12 171 -6.5 Q 129 -25 102 -59.5 Q 75 -94 62 -142 Q 49 -190 49 -250 Q 49 -378 106 -445 Q 163 -512 269 -512 Q 303 -512 337 -504.5 Q 371 -497 398 -476 Q 425 -455 442 -416.5 Q 459 -378 459 -315 Q 459 -282 453 -242 L 132 -242 Q 132 -198 141 -164 Q 150 -130 169 -106.5 Q 188 -83 218.5 -70.5 Q 249 -58 293 -58 Q 327 -58 361 -70 Q 395 -82 412 -98 L 442 -40 M 270 -442 Q 211 -442 175.5 -411 Q 140 -380 133 -305 L 381 -305 Q 381 -381 352 -411.5 Q 323 -442 270 -442 Z ",
        "0.75": "M 398 0 L 398 -285 Q 398 -324 393.5 -353.5 Q 389 -383 377 -402.5 Q 365 -422 344.5 -432 Q 324 -442 291 -442 Q 244 -442 206 -411.5 Q 168 -381 157 -333 L 157 0 L 77 0 L 77 -700 L 157 -700 L 157 -444 L 161 -444 Q 187 -475 223.5 -493.5 Q 260 -512 314 -512 Q 356 -512 387 -502.5 Q 418 -493 438.5 -469 Q 459 -445 468.5 -404.5 Q 478 -364 478 -302 L 478 0 L 398 0 Z ",
        "0.87": "M 11 -500 L 89 -500 L 89 -599 L 169 -622 L 169 -500 L 305 -500 L 305 -430 L 169 -430 L 169 -153 Q 169 -101 182 -79.5 Q 195 -58 226 -58 Q 252 -58 270 -63.5 Q 288 -69 310 -78 L 328 -17 Q 301 -4 269 4 Q 237 12 200 12 Q 139 12 114 -22.5 Q 89 -57 89 -138 L 89 -430 L 11 -430 L 11 -500 Z ",
        "0.83": "M 77 -500 L 132 -500 L 147 -440 L 151 -440 Q 174 -475 210.5 -493.5 Q 247 -512 294 -512 Q 394 -512 443 -453 Q 492 -394 492 -260 Q 492 -197 475.5 -146.5 Q 459 -96 429 -61 Q 399 -26 356.5 -7 Q 314 12 262 12 Q 225 12 203.5 7.5 Q 182 3 157 -8 L 157 200 L 77 200 L 77 -500 M 279 -442 Q 228 -442 198.5 -415.5 Q 169 -389 157 -335 L 157 -87 Q 175 -73 198 -65.5 Q 221 -58 259 -58 Q 328 -58 368.5 -109.5 Q 409 -161 409 -261 Q 409 -302 402 -335.5 Q 395 -369 379.5 -392.5 Q 364 -416 339.5 -429 Q 315 -442 279 -442 Z ",
        "0.86": "M 297 -136 Q 297 -166 279 -183 Q 261 -200 234.5 -211.5 Q 208 -223 176.5 -233.5 Q 145 -244 118.5 -260.5 Q 92 -277 74 -303 Q 56 -329 56 -373 Q 56 -445 97 -478.5 Q 138 -512 211 -512 Q 265 -512 301.5 -502.5 Q 338 -493 365 -480 L 346 -414 Q 323 -425 290.5 -433.5 Q 258 -442 221 -442 Q 177 -442 156.5 -427 Q 136 -412 136 -375 Q 136 -349 154 -334.5 Q 172 -320 198.5 -308.5 Q 225 -297 256.5 -286 Q 288 -275 314.5 -257 Q 341 -239 359 -211.5 Q 377 -184 377 -139 Q 377 -107 366.5 -79 Q 356 -51 334 -31 Q 312 -11 279.5 0.5 Q 247 12 203 12 Q 146 12 106 1 Q 66 -10 39 -25 L 63 -93 Q 86 -80 123 -69 Q 160 -58 198 -58 Q 241 -58 269 -75 Q 297 -92 297 -136 Z ",
        "0.29": "M 91 -449 Q 91 -476 106.5 -491.5 Q 122 -507 148 -507 Q 175 -507 191 -491.5 Q 207 -476 207 -449 Q 207 -423 191 -407 Q 175 -391 148 -391 Q 122 -391 106.5 -407 Q 91 -423 91 -449 M 91 -46 Q 91 -73 106.5 -88.5 Q 122 -104 148 -104 Q 175 -104 191 -88.5 Q 207 -73 207 -46 Q 207 -20 191 -4 Q 175 12 148 12 Q 122 12 106.5 -4 Q 91 -20 91 -46 Z ",
        "0.18": "M 328 -712 L 391 -684 L 26 140 L -37 112 L 328 -712 Z ",
        "0.17": "M 49 -46 Q 49 -73 64.5 -88.5 Q 80 -104 106 -104 Q 133 -104 149 -88.5 Q 165 -73 165 -46 Q 165 -20 149 -4 Q 133 12 106 12 Q 80 12 64.5 -4 Q 49 -20 49 -46 Z ",
        "0.70": "M 418 -33 Q 388 -11 347 0.5 Q 306 12 261 12 Q 203 12 163 -6.5 Q 123 -25 97.5 -59.5 Q 72 -94 60.5 -142.5 Q 49 -191 49 -250 Q 49 -377 105 -444.5 Q 161 -512 266 -512 Q 314 -512 347.5 -504.5 Q 381 -497 408 -483 L 385 -414 Q 362 -427 334 -434.5 Q 306 -442 274 -442 Q 132 -442 132 -250 Q 132 -212 139.5 -177.5 Q 147 -143 164.5 -116.5 Q 182 -90 210.5 -74 Q 239 -58 281 -58 Q 317 -58 345.5 -69 Q 374 -80 392 -94 L 418 -33 Z ",
        "0.82": "M 49 -250 Q 49 -377 105.5 -444.5 Q 162 -512 268 -512 Q 324 -512 365.5 -493.5 Q 407 -475 434 -440.5 Q 461 -406 474 -357.5 Q 487 -309 487 -250 Q 487 -123 430.5 -55.5 Q 374 12 268 12 Q 212 12 170.5 -6.5 Q 129 -25 102 -59.5 Q 75 -94 62 -142.5 Q 49 -191 49 -250 M 132 -250 Q 132 -212 139.5 -177 Q 147 -142 163 -116 Q 179 -90 205 -74 Q 231 -58 268 -58 Q 404 -57 404 -250 Q 404 -289 396.5 -324 Q 389 -359 373 -385 Q 357 -411 331 -426.5 Q 305 -442 268 -442 Q 132 -443 132 -250 Z ",
        "0.76": "M 94 -500 L 174 -500 L 174 0 L 94 0 L 94 -500 M 77 -652 Q 77 -675 92.5 -691.5 Q 108 -708 132 -708 Q 156 -708 173 -691.5 Q 190 -675 190 -652 Q 190 -629 173 -614 Q 156 -599 132 -599 Q 108 -599 92.5 -614 Q 77 -629 77 -652 Z ",
        "0.85": "M 313 -423 Q 283 -433 256 -433 Q 213 -433 188 -409.5 Q 163 -386 157 -350 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 171 -473 197.5 -491.5 Q 224 -510 265 -510 Q 294 -510 330 -500 L 313 -423 Z ",
        "0.54": "M 401 -178 Q 401 -220 376 -246.5 Q 351 -273 313.5 -293.5 Q 276 -314 232 -332 Q 188 -350 150.5 -375.5 Q 113 -401 88 -438.5 Q 63 -476 63 -534 Q 63 -616 120 -664 Q 177 -712 282 -712 Q 343 -712 393 -703 Q 443 -694 471 -680 L 446 -607 Q 423 -618 378.5 -628 Q 334 -638 278 -638 Q 212 -638 179 -608.5 Q 146 -579 146 -539 Q 146 -500 171 -474 Q 196 -448 233.5 -427.5 Q 271 -407 315 -387 Q 359 -367 396.5 -340.5 Q 434 -314 459 -277 Q 484 -240 484 -185 Q 484 -140 468 -104 Q 452 -68 421 -42 Q 390 -16 346 -2 Q 302 12 246 12 Q 171 12 122 0.5 Q 73 -11 46 -25 L 74 -100 Q 97 -87 142 -74.5 Q 187 -62 243 -62 Q 276 -62 305 -68.5 Q 334 -75 355 -89.5 Q 376 -104 388.5 -126 Q 401 -148 401 -178 Z ",
        "0.78": "M 203 -225 L 157 -225 L 157 0 L 77 0 L 77 -700 L 157 -700 L 157 -274 L 198 -288 L 353 -500 L 446 -500 L 293 -299 L 252 -266 L 302 -226 L 469 0 L 370 0 L 203 -225 Z ",
        "0.92": "M 224 -176 L 252 -80 L 257 -80 L 279 -177 L 376 -500 L 457 -500 L 309 -51 Q 292 -2 275.5 44 Q 259 90 239 126 Q 219 162 194 183.5 Q 169 205 136 205 Q 100 205 77 195 L 91 126 Q 104 131 116 131 Q 144 131 170 101.5 Q 196 72 213 0 L 12 -500 L 104 -500 L 224 -176 Z ",
        "0.36": "M 418 -194 L 160 -194 L 90 0 L 8 0 L 273 -711 L 311 -711 L 577 0 L 490 0 L 418 -194 M 187 -266 L 393 -266 L 315 -479 L 290 -585 L 289 -585 L 264 -477 L 187 -266 Z ",
        "0.93": "M 42 -70 L 273 -388 L 315 -430 L 42 -430 L 42 -500 L 398 -500 L 398 -430 L 165 -109 L 124 -70 L 398 -70 L 398 0 L 42 0 L 42 -70 Z ",
        "0.9": "M 118 -187 Q 118 -227 132 -263.5 Q 146 -300 170 -331 Q 194 -362 224.5 -388 Q 255 -414 288 -434 Q 264 -470 246.5 -506 Q 229 -542 229 -584 Q 229 -608 237 -631 Q 245 -654 262.5 -672 Q 280 -690 307.5 -701 Q 335 -712 374 -712 Q 415 -712 443 -701.5 Q 471 -691 488 -674 Q 505 -657 512.5 -636 Q 520 -615 520 -593 Q 520 -551 487.5 -506.5 Q 455 -462 385 -421 Q 401 -392 422.5 -361.5 Q 444 -331 468 -301 Q 492 -271 517 -241.5 Q 542 -212 567 -187 Q 578 -199 589 -217.5 Q 600 -236 610.5 -256.5 Q 621 -277 629.5 -299 Q 638 -321 645 -341 L 707 -312 Q 701 -295 690 -271.5 Q 679 -248 665.5 -223.5 Q 652 -199 638 -176.5 Q 624 -154 612 -139 Q 633 -119 650 -104.5 Q 667 -90 681.5 -79.5 Q 696 -69 709.5 -60.5 Q 723 -52 737 -44 L 687 12 Q 634 -14 566 -81 Q 548 -63 526.5 -46.5 Q 505 -30 478 -17 Q 451 -4 418.5 4 Q 386 12 347 12 Q 300 12 258.5 -1 Q 217 -14 186 -39.5 Q 155 -65 136.5 -102 Q 118 -139 118 -187 M 519 -131 Q 490 -160 462 -194 Q 434 -228 408.5 -262 Q 383 -296 361.5 -327.5 Q 340 -359 325 -383 Q 298 -363 275 -342 Q 252 -321 234.5 -297.5 Q 217 -274 207.5 -247 Q 198 -220 198 -189 Q 198 -158 211 -133.5 Q 224 -109 246.5 -92.5 Q 269 -76 298 -67 Q 327 -58 359 -58 Q 384 -58 407.5 -64.5 Q 431 -71 452 -81 Q 473 -91 490.5 -104 Q 508 -117 519 -131 M 307 -584 Q 307 -554 319.5 -524.5 Q 332 -495 352 -466 Q 405 -500 425.5 -528 Q 446 -556 446 -577 Q 446 -609 430.5 -629 Q 415 -649 377 -649 Q 341 -649 324 -631 Q 307 -613 307 -584 Z ",
        "0.53": "M 85 -693 Q 123 -700 172.5 -704 Q 222 -708 263 -708 Q 309 -708 350.5 -698 Q 392 -688 423.5 -665 Q 455 -642 474 -605 Q 493 -568 493 -515 Q 493 -433 448 -382 Q 403 -331 334 -314 L 382 -277 L 556 0 L 459 0 L 266 -302 L 168 -317 L 168 0 L 85 0 L 85 -693 M 265 -636 Q 252 -636 238 -636 Q 224 -636 211 -635 Q 198 -634 186.5 -633 Q 175 -632 168 -630 L 168 -372 L 246 -372 Q 315 -372 360 -406 Q 405 -440 405 -512 Q 405 -566 368 -601 Q 331 -636 265 -636 Z ",
        "0.71": "M 461 -172 Q 461 -121 462 -79.5 Q 463 -38 471 2 L 417 2 L 397 -69 L 393 -69 Q 373 -34 335 -11 Q 297 12 246 12 Q 146 12 97.5 -51 Q 49 -114 49 -248 Q 49 -376 109.5 -442.5 Q 170 -509 276 -509 Q 313 -509 334.5 -505 Q 356 -501 381 -492 L 381 -700 L 461 -700 L 461 -172 M 259 -58 Q 310 -58 340 -84.5 Q 370 -111 381 -165 L 381 -413 Q 363 -427 340 -433 Q 317 -439 279 -439 Q 210 -439 171 -393.5 Q 132 -348 132 -248 Q 132 -207 138.5 -172 Q 145 -137 160 -112 Q 175 -87 199.5 -72.5 Q 224 -58 259 -58 Z ",
        "0.47": "M 499 0 L 85 0 L 85 -700 L 168 -700 L 168 -74 L 499 -74 L 499 0 Z ",
        "0.89": "M 221 -207 L 249 -112 L 250 -112 L 275 -209 L 387 -500 L 473 -500 L 260 11 L 226 11 L 9 -500 L 101 -500 L 221 -207 Z ",
        "0.68": "M 69 -463 Q 107 -486 157.5 -497 Q 208 -508 263 -508 Q 315 -508 346.5 -494 Q 378 -480 394.5 -457.5 Q 411 -435 416.5 -408 Q 422 -381 422 -354 Q 422 -294 419 -237 Q 416 -180 416 -129 Q 416 -92 419 -59 Q 422 -26 430 2 L 371 2 L 350 -68 L 345 -68 Q 336 -54 322.5 -40.5 Q 309 -27 290 -16.5 Q 271 -6 246 1 Q 221 8 189 8 Q 157 8 129.5 -2 Q 102 -12 82 -30.5 Q 62 -49 50.5 -75 Q 39 -101 39 -134 Q 39 -178 57 -207.5 Q 75 -237 107.5 -254.5 Q 140 -272 185.5 -279.5 Q 231 -287 286 -287 Q 300 -287 313.5 -287 Q 327 -287 341 -285 Q 344 -315 344 -339 Q 344 -394 322 -416 Q 300 -438 242 -438 Q 225 -438 205.5 -435.5 Q 186 -433 165.5 -428.5 Q 145 -424 126.5 -417.5 Q 108 -411 94 -403 L 69 -463 M 211 -62 Q 239 -62 261 -69.5 Q 283 -77 299 -88.5 Q 315 -100 325.5 -114 Q 336 -128 341 -141 L 341 -224 Q 327 -225 312.5 -225.5 Q 298 -226 284 -226 Q 253 -226 223.5 -222.5 Q 194 -219 171.5 -209.5 Q 149 -200 135.5 -183.5 Q 122 -167 122 -142 Q 122 -107 147 -84.5 Q 172 -62 211 -62 Z ",
        "0.58": "M 222 -231 L 238 -115 L 239 -115 L 256 -233 L 400 -700 L 440 -700 L 585 -231 L 602 -115 L 603 -115 L 621 -233 L 739 -700 L 820 -700 L 625 11 L 579 11 L 437 -458 L 419 -564 L 414 -564 L 396 -457 L 254 11 L 208 11 L 8 -700 L 96 -700 L 222 -231 Z ",
        "0.57": "M 267 -219 L 291 -113 L 292 -113 L 318 -221 L 487 -700 L 570 -700 L 305 11 L 268 11 L -2 -700 L 89 -700 L 267 -219 Z ",
        "0.51": "M 85 -693 Q 123 -702 167 -705 Q 211 -708 254 -708 Q 300 -708 347.5 -699 Q 395 -690 434 -666 Q 473 -642 497.5 -600 Q 522 -558 522 -493 Q 522 -429 499 -385 Q 476 -341 438 -313.5 Q 400 -286 351 -274 Q 302 -262 250 -262 Q 245 -262 233.5 -262 Q 222 -262 209.5 -262.5 Q 197 -263 185 -264 Q 173 -265 168 -266 L 168 0 L 85 0 L 85 -693 M 256 -636 Q 230 -636 206 -635 Q 182 -634 168 -630 L 168 -340 Q 173 -338 184 -337.5 Q 195 -337 207 -336.5 Q 219 -336 230 -336 Q 241 -336 246 -336 Q 280 -336 313.5 -342.5 Q 347 -349 374 -366 Q 401 -383 417.5 -414 Q 434 -445 434 -493 Q 434 -534 418.5 -561.5 Q 403 -589 377.5 -605.5 Q 352 -622 320 -629 Q 288 -636 256 -636 Z ",
        "0.39": "M 85 -700 Q 104 -703 127.5 -704.5 Q 151 -706 176.5 -706.5 Q 202 -707 226.5 -707.5 Q 251 -708 272 -708 Q 356 -708 417.5 -682 Q 479 -656 519 -609.5 Q 559 -563 578.5 -498 Q 598 -433 598 -355 Q 598 -284 579.5 -218.5 Q 561 -153 521 -102.5 Q 481 -52 417 -21.5 Q 353 9 262 9 Q 246 9 220.5 8.5 Q 195 8 168 6.5 Q 141 5 118 4 Q 95 3 85 1 L 85 -700 M 274 -634 Q 261 -634 245.5 -634 Q 230 -634 215 -633 Q 200 -632 187.5 -631 Q 175 -630 168 -629 L 168 -69 Q 173 -68 187 -67.5 Q 201 -67 216 -66.5 Q 231 -66 245 -65.5 Q 259 -65 264 -65 Q 334 -65 381.5 -89 Q 429 -113 457.5 -153.5 Q 486 -194 498 -246.5 Q 510 -299 510 -355 Q 510 -404 499 -453.5 Q 488 -503 461 -543 Q 434 -583 388.5 -608.5 Q 343 -634 274 -634 Z ",
        "0.81": "M 398 0 L 398 -285 Q 398 -363 375.5 -402.5 Q 353 -442 293 -442 Q 240 -442 205.5 -413.5 Q 171 -385 157 -342 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 176 -471 216.5 -491.5 Q 257 -512 313 -512 Q 354 -512 385 -502.5 Q 416 -493 436.5 -469 Q 457 -445 467.5 -404.5 Q 478 -364 478 -302 L 478 0 L 398 0 Z ",
        "0.42": "M 321 -349 L 556 -349 L 556 -41 Q 540 -29 517.5 -19 Q 495 -9 469.5 -2 Q 444 5 416.5 8.5 Q 389 12 363 12 Q 296 12 240 -9.5 Q 184 -31 143 -75.5 Q 102 -120 79 -188.5 Q 56 -257 56 -350 Q 56 -447 84 -516 Q 112 -585 157 -628.5 Q 202 -672 258 -692 Q 314 -712 370 -712 Q 430 -712 469 -705.5 Q 508 -699 535 -688 L 514 -615 Q 466 -638 377 -638 Q 335 -638 293.5 -623.5 Q 252 -609 219 -575 Q 186 -541 165 -486 Q 144 -431 144 -350 Q 144 -276 161 -222 Q 178 -168 208.5 -132.5 Q 239 -97 282 -79.5 Q 325 -62 376 -62 Q 440 -62 485 -87 L 485 -282 L 321 -302 L 321 -349 Z ",
        "0.43": "M 504 -321 L 168 -321 L 168 0 L 85 0 L 85 -700 L 168 -700 L 168 -395 L 504 -395 L 504 -700 L 587 -700 L 587 0 L 504 0 L 504 -321 Z ",
        "0.48": "M 623 -470 L 633 -575 L 628 -575 L 590 -479 L 408 -163 L 383 -163 L 190 -480 L 154 -575 L 149 -575 L 163 -471 L 163 0 L 85 0 L 85 -700 L 147 -700 L 366 -342 L 399 -264 L 401 -264 L 432 -344 L 641 -700 L 706 -700 L 706 0 L 623 0 L 623 -470 Z ",
        "0.69": "M 77 -700 L 157 -700 L 157 -451 L 161 -451 Q 184 -480 219.5 -496 Q 255 -512 297 -512 Q 394 -512 442.5 -450 Q 491 -388 491 -258 Q 491 -127 427 -59 Q 363 9 247 9 Q 191 9 145.5 -3 Q 100 -15 77 -29 L 77 -700 M 283 -442 Q 233 -442 202 -414 Q 171 -386 157 -335 L 157 -83 Q 176 -72 203 -66.5 Q 230 -61 259 -61 Q 327 -61 367.5 -109 Q 408 -157 408 -259 Q 408 -298 401 -332 Q 394 -366 379 -390 Q 364 -414 340.5 -428 Q 317 -442 283 -442 Z ",
        "0.80": "M 370 0 L 370 -283 Q 370 -323 366.5 -352.5 Q 363 -382 353 -402 Q 343 -422 324.5 -432 Q 306 -442 276 -442 Q 230 -442 199.5 -414 Q 169 -386 157 -344 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 179 -471 214.5 -491.5 Q 250 -512 307 -512 Q 355 -512 385.5 -493.5 Q 416 -475 433 -429 Q 456 -468 496.5 -490 Q 537 -512 588 -512 Q 630 -512 659 -502.5 Q 688 -493 707 -469 Q 726 -445 734.5 -404 Q 743 -363 743 -300 L 743 0 L 663 0 L 663 -301 Q 663 -337 659.5 -363.5 Q 656 -390 645.5 -407.5 Q 635 -425 616.5 -433.5 Q 598 -442 568 -442 Q 518 -442 490 -414 Q 462 -386 450 -334 L 450 0 L 370 0 Z ",
        "0.49": "M 211 -458 L 157 -559 L 153 -559 L 163 -458 L 163 0 L 85 0 L 85 -711 L 129 -711 L 464 -244 L 516 -148 L 521 -148 L 510 -244 L 510 -700 L 588 -700 L 588 11 L 544 11 L 211 -458 Z ",
        "0.74": "M 460 23 Q 460 120 408.5 166 Q 357 212 256 212 Q 196 212 159.5 204.5 Q 123 197 97 185 L 118 117 Q 141 126 169 134 Q 197 142 242 142 Q 284 142 310.5 134.5 Q 337 127 353 109.5 Q 369 92 375 64.5 Q 381 37 381 -1 L 381 -49 L 377 -49 Q 357 -20 326 -4.5 Q 295 11 245 11 Q 144 11 96.5 -52 Q 49 -115 49 -248 Q 49 -376 110 -442.5 Q 171 -509 290 -509 Q 347 -509 387.5 -500 Q 428 -491 460 -479 L 460 23 M 259 -59 Q 310 -59 339 -84.5 Q 368 -110 380 -164 L 380 -420 Q 340 -439 278 -439 Q 210 -439 171 -393 Q 132 -347 132 -249 Q 132 -207 139 -172 Q 146 -137 161 -112 Q 176 -87 200 -73 Q 224 -59 259 -59 Z ",
        "0.56": "M 487 -700 L 567 -700 L 567 -233 Q 567 -170 550.5 -124 Q 534 -78 503.5 -48.5 Q 473 -19 430 -5 Q 387 9 335 9 Q 211 9 148 -47 Q 85 -103 85 -217 L 85 -700 L 168 -700 L 168 -256 Q 168 -203 178.5 -166.5 Q 189 -130 210 -107.5 Q 231 -85 262.5 -75 Q 294 -65 336 -65 Q 417 -65 452 -109.5 Q 487 -154 487 -256 L 487 -700 Z ",
        "0.90": "M 401 -500 L 516 -208 L 541 -112 L 543 -112 L 562 -210 L 651 -500 L 727 -500 L 559 11 L 520 11 L 389 -319 L 370 -401 L 367 -401 L 347 -318 L 221 11 L 182 11 L 8 -500 L 95 -500 L 194 -209 L 211 -112 L 212 -112 L 236 -211 L 343 -500 L 401 -500 Z ",
        "0.38": "M 533 -29 Q 503 -6 457 3 Q 411 12 359 12 Q 296 12 241 -9.5 Q 186 -31 145 -75 Q 104 -119 80 -187.5 Q 56 -256 56 -350 Q 56 -448 82.5 -516.5 Q 109 -585 152.5 -628.5 Q 196 -672 250 -692 Q 304 -712 360 -712 Q 420 -712 458 -705.5 Q 496 -699 523 -688 L 503 -615 Q 455 -638 366 -638 Q 325 -638 285 -623 Q 245 -608 213.5 -574 Q 182 -540 163 -485 Q 144 -430 144 -350 Q 144 -278 162 -224 Q 180 -170 211.5 -134 Q 243 -98 285.5 -80 Q 328 -62 378 -62 Q 423 -62 456.5 -71 Q 490 -80 513 -94 L 533 -29 Z ",
        "0.73": "M 22 -500 L 100 -500 L 100 -528 Q 100 -574 107.5 -608 Q 115 -642 132 -663.5 Q 149 -685 176 -695.5 Q 203 -706 243 -706 Q 275 -706 299.5 -702 Q 324 -698 351 -687 L 333 -620 Q 310 -630 289.5 -633 Q 269 -636 251 -636 Q 225 -636 210.5 -628 Q 196 -620 189.5 -604.5 Q 183 -589 181.5 -566.5 Q 180 -544 180 -514 L 180 -500 L 313 -500 L 313 -430 L 180 -430 L 180 0 L 100 0 L 100 -430 L 22 -430 L 22 -500 Z ",
        "0.55": "M 537 -626 L 319 -626 L 319 0 L 236 0 L 236 -626 L 18 -626 L 18 -700 L 537 -700 L 537 -626 Z ",
        "0.50": "M 56 -350 Q 56 -525 130 -618.5 Q 204 -712 341 -712 Q 415 -712 469 -686 Q 523 -660 558.5 -612.5 Q 594 -565 611 -498.5 Q 628 -432 628 -350 Q 628 -175 553.5 -81.5 Q 479 12 341 12 Q 268 12 214.5 -14 Q 161 -40 125.5 -87.5 Q 90 -135 73 -201.5 Q 56 -268 56 -350 M 144 -350 Q 144 -292 155.5 -240 Q 167 -188 191 -148.5 Q 215 -109 252.5 -85.5 Q 290 -62 341 -62 Q 434 -62 487 -132.5 Q 540 -203 540 -350 Q 540 -407 528.5 -459.5 Q 517 -512 492.5 -551.5 Q 468 -591 430.5 -614.5 Q 393 -638 341 -638 Q 249 -638 196.5 -567.5 Q 144 -497 144 -350 Z ",
        "0.41": "M 85 -700 L 466 -700 L 466 -626 L 168 -626 L 168 -387 L 446 -387 L 446 -313 L 168 -313 L 168 0 L 85 0 L 85 -700 Z ",
        "0.45": "M 112 -700 L 195 -700 L 195 -154 Q 195 -74 159.5 -32 Q 124 10 52 10 Q 44 10 32 9 Q 20 8 8 6 Q -4 4 -15.5 1 Q -27 -2 -34 -6 L -18 -77 Q 10 -64 43 -64 Q 85 -64 98.5 -93.5 Q 112 -123 112 -174 L 112 -700 Z ",
        "0.44": "M 104 -700 L 187 -700 L 187 0 L 104 0 L 104 -700 Z ",
        "0.52": "M 704 171 Q 680 178 657 180.5 Q 634 183 611 183 Q 561 183 513.5 172.5 Q 466 162 421.5 149.5 Q 377 137 336 126.5 Q 295 116 258 116 Q 234 116 212 122 L 212 49 Q 226 46 239 44 Q 252 42 266 42 Q 308 42 349.5 52.5 Q 391 63 434 75.5 Q 477 88 522 98.5 Q 567 109 617 109 Q 661 109 704 99 L 704 171 M 56 -350 Q 56 -525 130 -618.5 Q 204 -712 341 -712 Q 415 -712 469 -686 Q 523 -660 558.5 -612.5 Q 594 -565 611 -498.5 Q 628 -432 628 -350 Q 628 -175 553.5 -81.5 Q 479 12 341 12 Q 268 12 214.5 -14 Q 161 -40 125.5 -87.5 Q 90 -135 73 -201.5 Q 56 -268 56 -350 M 144 -350 Q 144 -292 155.5 -240 Q 167 -188 191 -148.5 Q 215 -109 252.5 -85.5 Q 290 -62 341 -62 Q 434 -62 487 -132.5 Q 540 -203 540 -350 Q 540 -407 528.5 -459.5 Q 517 -512 492.5 -551.5 Q 468 -591 430.5 -614.5 Q 393 -638 341 -638 Q 249 -638 196.5 -567.5 Q 144 -497 144 -350 Z ",
        "0.60": "M 239 -278 L 8 -700 L 105 -700 L 269 -394 L 286 -333 L 287 -333 L 305 -396 L 462 -700 L 551 -700 L 322 -279 L 322 0 L 239 0 L 239 -278 Z "
    },
    "tags": [{
        "text": "Blue",
        //blue",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 876,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1415,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 3,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2026.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.08972222222222222, 0, 12.11708333333333], [0, 0.08972222222222222, 131.22333333333333]]
    }, {
        "text": "https://t.co",
        //co",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 547,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 886,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1225,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 1766,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2187,
            "y": 0,
            "glyph": "0.29"
        }, {
            "x": 2406,
            "y": 0,
            "glyph": "0.18"
        }, {
            "x": 2760,
            "y": 0,
            "glyph": "0.18"
        }, {
            "x": 3114,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3453,
            "y": 0,
            "glyph": "0.17"
        }, {
            "x": 3667,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4118,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 13,
        "bbox": {
            "x": -73.48000000000002,
            "y": -862.48,
            "width": 4828.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.028892543859649126, 0, 35.399529218528684], [0, 0.028892543859649126, 58.896491228070175]]
    }, {
        "text": "Biru",
        //biru",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 852,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1192,
            "y": 0,
            "glyph": "0.88"
        }],
        "parentId": 2504,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1817.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.060208333333333336, 0, 50.24307660183597], [0, 0.060208333333333336, 179.45250000000001]]
    }, {
        "text": "Sky",
        //sky",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1010,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 73,
        "bbox": {
            "x": -105.305,
            "y": -863.3050000000001,
            "width": 1723.6100000000001,
            "height": 1219.6100000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.03151581243184296, 0, 79.87413736465234], [0, 0.03151581243184296, 28.989258451472192]]
    }, {
        "text": "Azul",
        //azul",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.93"
        }, {
            "x": 1032,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1571,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 1604,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 2084.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.029391424619640387, 0, 132.55893995714413], [0, 0.029391424619640387, 82.77230290456431]]
    }, {
        "text": "&",
        //amp",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.9"
        }],
        "parentId": 166,
        "bbox": {
            "x": 15.864999999999995,
            "y": -814.135,
            "width": 823.27,
            "height": 928.27
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04119547657512116, 0, 22.388933764135704], [0, 0.04119547657512116, 163.74304546661764]]
    }, {
        "text": "Red",
        //red",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.53"
        }, {
            "x": 595,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1103,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 21,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1726.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.02715277777777778, 0, 84.79570710888314], [0, 0.02715277777777778, 83.94916666666667]]
    }, {
        "text": "Love",
        //love",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.47"
        }, {
            "x": 517,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1053,
            "y": 0,
            "glyph": "0.89"
        }, {
            "x": 1535,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 546,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2143.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.020294943820224717, 0, 81.82002410091144], [0, 0.020294943820224717, 195.4814606741573]]
    }, {
        "text": "Beach",
        //beach",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1092,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1588,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2039,
            "y": 0,
            "glyph": "0.75"
        }],
        "parentId": 450,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2669.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01888888888888889, 0, 136.03221172912666], [0, 0.01888888888888889, 147.57333333333335]]
    }, {
        "text": "White",
        //white",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.58"
        }, {
            "x": 828,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1375,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1643,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1982,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 167,
        "bbox": {
            "x": -110.80000000000001,
            "y": -826.8,
            "width": 2670.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.016527777777777777, 0, 70.51485532925325], [0, 0.016527777777777777, 42.751666666666665]]
    }, {
        "text": "Rose",
        //rose",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.53"
        }, {
            "x": 595,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1131,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1552,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 102,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2163.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.017708333333333333, 0, 129.47951710301663], [0, 0.017708333333333333, 39.6625]]
    }, {
        "text": "Violet",
        //violet",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.57"
        }, {
            "x": 568,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 836,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1664,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2172,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 1296,
        "bbox": {
            "x": -120.80000000000001,
            "y": -826.8,
            "width": 2739.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.014166666666666666, 0, 160.78174402742607], [0, 0.014166666666666666, 120.92999999999999]]
    }, {
        "text": "Pic",
        //pic",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 827,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 581,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1397.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.02314655172413793, 0, 39.60754310344827], [0, 0.02314655172413793, 38.270070756833505]]
    }, {
        "text": "Beauty",
        //beauty",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1092,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1588,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2127,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 2466,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 336,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 3139.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013301620859760395, 0, 96.99436222692036], [0, 0.013301620859760395, 144.05966314157735]]
    }, {
        "text": "Day",
        //day",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1150,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 16,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 1823.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.014895947426067908, 0, 151.77600015472785], [0, 0.014895947426067908, 159.74633077765608]]
    }, {
        "text": "Drink",
        //drink",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1262,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1809,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 233,
        "bbox": {
            "x": -33.30500000000001,
            "y": -826.3050000000001,
            "width": 2429.61,
            "height": 953.61
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011854951185495118, 0, 126.1041065690457], [0, 0.011854951185495118, 26.143305439330547]]
    }, {
        "text": "Green",
        //green",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 952,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1460,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1968,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 145,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2628.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010566298342541436, 0, 53.998310364502416], [0, 0.010566298342541436, 188.1982044198895]]
    }, {
        "text": "Hotel",
        //hotel",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.43"
        }, {
            "x": 672,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1208,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1547,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2055,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 562,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2487.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011938202247191011, 0, 52.302540940646246], [0, 0.011938202247191011, 21.10674157303371]]
    }, {
        "text": "Sea",
        //sea",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1039,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 127,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1661.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01643646408839779, 0, 11.44744905958046], [0, 0.01643646408839779, 65.75276243093923]]
    }, {
        "text": "Make",
        //make",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1287,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1766,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 429,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2374.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01074438202247191, 0, 101.97801732893495], [0, 0.01074438202247191, 12.196067415730337]]
    }, {
        "text": "Sun",
        //sun",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1070,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 540,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1740.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.012914364640883977, 0, 28.422674333449468], [0, 0.012914364640883977, 118.0200276243094]]
    }, {
        "text": "Bbmzansi",
        //bbmzansi",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 1124,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1936,
            "y": 0,
            "glyph": "0.93"
        }, {
            "x": 2383,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2879,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 3426,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3847,
            "y": 0,
            "glyph": "0.76"
        }],
        "parentId": 344,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 4189.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009058704453441296, 0, 143.8300101214575], [0, 0.009058704453441296, 67.13124791325356]]
    }, {
        "text": "Black",
        //black",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 876,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1823,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 234,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2444.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010625, 0, 46.85902411754795], [0, 0.010625, 68.1975]]
    }, {
        "text": "Photo",
        //photo",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1106,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1642,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1981,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 206,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2620.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009444444444444445, 0, 123.06851254116408], [0, 0.009444444444444445, 188.28666666666666]]
    }, {
        "text": "Night",
        //night",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.49"
        }, {
            "x": 673,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 941,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 1478,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2025,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 717,
        "bbox": {
            "x": -67.29500000000002,
            "y": -863.2950000000001,
            "width": 2572.59,
            "height": 1227.5900000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.00828819068255688, 0, 33.94203374577991], [0, 0.00828819068255688, 171.56790357529795]]
    }, {
        "text": "Ski",
        //ski",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1010,
            "y": 0,
            "glyph": "0.76"
        }],
        "parentId": 428,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1392.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.015467937608318893, 0, 104.86347487001733], [0, 0.015467937608318893, 111.19285011665717]]
    }, {
        "text": "Happy",
        //happy",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.43"
        }, {
            "x": 672,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1168,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 1709,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 2250,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 365,
        "bbox": {
            "x": -64.32500000000002,
            "y": -849.325,
            "width": 2920.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0075138121546961326, 0, 8.692734600313326], [0, 0.0075138121546961326, 137.85966850828729]]
    }, {
        "text": "Nature",
        //nature",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.49"
        }, {
            "x": 673,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1169,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1508,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2047,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 537,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2999.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008229598893499309, 0, 99.87419516734434], [0, 0.008229598893499309, 69.376244813278]]
    }, {
        "text": "Up",
        //up",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.56"
        }, {
            "x": 652,
            "y": 0,
            "glyph": "0.83"
        }],
        "parentId": 924,
        "bbox": {
            "x": -63.5,
            "y": -848.5,
            "width": 1356,
            "height": 1197
        },
        "shapeColor": "3488bf",
        "matrix": [[0.015533522190745986, 0, 179.95465061378658], [0, 0.015533522190745986, 96.38018092777614]]
    }, {
        "text": "Go",
        //go",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 191,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1281.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01761049723756906, 0, 104.2159631115824], [0, 0.01761049723756906, 98.66367403314918]]
    }, {
        "text": "New",
        //new",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.49"
        }, {
            "x": 673,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1181,
            "y": 0,
            "glyph": "0.90"
        }],
        "parentId": 52,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2061.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01058091286307054, 0, 16.12667671405822], [0, 0.01058091286307054, 53.19802904564315]]
    }, {
        "text": "Cafe",
        //cafe",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1067,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 1386,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 26,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2027.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010424818334264951, 0, 150.09121017328115], [0, 0.010424818334264951, 171.17733374397258]]
    }, {
        "text": "Summer",
        //summer",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1070,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1882,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2694,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 3202,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 541,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 3724.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007044198895027624, 0, 48.82015748034902], [0, 0.007044198895027624, 135.46546961325967]]
    }, {
        "text": "Park",
        //park",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1055,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1395,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 702,
        "bbox": {
            "x": -33.14,
            "y": -826.14,
            "width": 2015.28,
            "height": 952.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010483417650365373, 0, 27.783909499718945], [0, 0.010483417650365373, 89.14241726302741]]
    }, {
        "text": "Today",
        //today",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.55"
        }, {
            "x": 555,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1091,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1629,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2125,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 896,
        "bbox": {
            "x": -131.32500000000002,
            "y": -849.325,
            "width": 2862.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006574585635359116, 0, 11.497631737675352], [0, 0.006574585635359116, 145.12720994475137]]
    }, {
        "text": "One",
        //one",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.50"
        }, {
            "x": 684,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1231,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 830,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1872.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009883720930232558, 0, 0.8715116279069774], [0, 0.009883720930232558, 100.02909144587264]]
    }, {
        "text": "Color",
        //color",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1107,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1935,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 606,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2447.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008057944771389769, 0, 169.1487550928022], [0, 0.008057944771389769, 58.529272721572525]]
    }, {
        "text": "Australia",
        //australia",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1124,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1545,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1884,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2224,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2720,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3012,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3280,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 1954,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 3940.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005878284923928077, 0, 148.6367285059645], [0, 0.005878284923928077, 137.55446058091286]]
    }, {
        "text": "Mountain",
        //mountain",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1327,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1866,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2413,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 2752,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 3248,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3516,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 195,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 4146.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 95.68870710745041], [0, 0.005902777777777778, 184.55416666666667]]
    }, {
        "text": "Out",
        //out",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.50"
        }, {
            "x": 684,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1223,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 301,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1733.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010566298342541436, 0, 1.5990628117222232], [0, 0.010566298342541436, 109.1982044198895]]
    }, {
        "text": "Water",
        //water",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.58"
        }, {
            "x": 828,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1324,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1663,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2171,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 1016,
        "bbox": {
            "x": -109.48,
            "y": -817.48,
            "width": 2727.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007162921348314606, 0, 126.52987567596699], [0, 0.007162921348314606, 16.464044943820223]]
    }, {
        "text": "Lagoon",
        //lagoon",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.47"
        }, {
            "x": 517,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1013,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 1550,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2086,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2622,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 523,
        "bbox": {
            "x": -65.48000000000002,
            "y": -850.48,
            "width": 3315.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005592105263157895, 0, 153.88932832053618], [0, 0.005592105263157895, 101.36447368421054]]
    }, {
        "text": "Now",
        //now",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.49"
        }, {
            "x": 673,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1209,
            "y": 0,
            "glyph": "0.90"
        }],
        "parentId": 337,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2089.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008833063209076175, 0, 181.07418962722852], [0, 0.008833063209076175, 107.54981077323792]]
    }, {
        "text": "Coffee",
        //coffee",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1107,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 1426,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 1745,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 410,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2894.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006814759036144579, 0, 105.0683734939759], [0, 0.006814759036144579, 117.43810293236938]]
    }, {
        "text": "Michael",
        //michael",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1059,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1510,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2057,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2553,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 3061,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 6379,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 3496.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 117.94560236444967], [0, 0.005902777777777778, 64.55416666666666]]
    }, {
        "text": "Bar",
        //bar",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1080,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 214,
        "bbox": {
            "x": -33.14,
            "y": -826.14,
            "width": 1561.28,
            "height": 952.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011871508379888268, 0, 0.997530658035109], [0, 0.011871508379888268, 92.15502793296089]]
    }, {
        "text": "Four",
        //four",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.41"
        }, {
            "x": 517,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1053,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1592,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 6910,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2071.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008356741573033708, 0, 1.5919686079595585], [0, 0.008356741573033708, 116.37471910112359]]
    }, {
        "text": "Luke",
        //luke",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.47"
        }, {
            "x": 517,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1056,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1535,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 6913,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2143.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008800419067574648, 0, 53.85196437925615], [0, 0.008800419067574648, 100.02349223688039]]
    }, {
        "text": "Look",
        //look",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.47"
        }, {
            "x": 517,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1053,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1589,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 149,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2207.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007932083122149013, 0, 179.00077293461732], [0, 0.007932083122149013, 128.0074919155274]]
    }, {
        "text": "Sunset",
        //sunset",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1070,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1617,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2038,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2546,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 542,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 3066.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 63.792021088033934], [0, 0.005870165745856353, 11.554558011049725]]
    }, {
        "text": "Jay",
        //jay",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.45"
        }, {
            "x": 291,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 787,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 123,
        "bbox": {
            "x": -183.32500000000002,
            "y": -849.325,
            "width": 1576.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011306729264475743, 0, 81.65942879499218], [0, 0.011306729264475743, 102.75185286853936]]
    }, {
        "text": "Idiot",
        //idiot",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.44"
        }, {
            "x": 291,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 829,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1097,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1633,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 838,
        "bbox": {
            "x": -14.800000000000011,
            "y": -826.8,
            "width": 2094.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007781367797522886, 0, 80.46573774905761], [0, 0.007781367797522886, 118.25400601209819]]
    }, {
        "text": "Happier",
        //happier",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.43"
        }, {
            "x": 672,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1168,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 1709,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 2250,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2518,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 3026,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 4665,
        "bbox": {
            "x": -64.82,
            "y": -857.8199999999999,
            "width": 3570.64,
            "height": 1207.6399999999999
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004680616740088106, 0, 132.99408504616153], [0, 0.004680616740088106, 86.68887665198238]]
    }, {
        "text": "Que",
        //que",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.52"
        }, {
            "x": 684,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1223,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 4994,
        "bbox": {
            "x": -91.67500000000001,
            "y": -859.675,
            "width": 1921.35,
            "height": 1190.35
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009497206703910615, 0, 80.22036735445896], [0, 0.009497206703910615, 91.51201117318435]]
    }, {
        "text": "Good",
        //good",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1148,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1684,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 402,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2337.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007044198895027624, 0, 55.367436031587175], [0, 0.007044198895027624, 130.46546961325967]]
    }, {
        "text": "City",
        //city",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 839,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1178,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 1000,
        "bbox": {
            "x": -95.305,
            "y": -863.3050000000001,
            "width": 1881.6100000000001,
            "height": 1219.6100000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008342420937840786, 0, 3.9047735417838076], [0, 0.008342420937840786, 80.61480370774264]]
    }, {
        "text": "Ashton",
        //ashton",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1553,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1892,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2428,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 6911,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 3136.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005878284923928077, 0, 84.37998872884411], [0, 0.005878284923928077, 5.554460580912862]]
    }, {
        "text": "Calum",
        //calum",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1067,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1359,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1898,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 6912,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2823.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 81.05086670609131], [0, 0.005870165745856353, 148.55455801104972]]
    }, {
        "text": "Moon",
        //moon",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1327,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1863,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 96,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2490.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007070035460992908, 0, 79.92404698581561], [0, 0.007070035460992908, 111.37973115728533]]
    }, {
        "text": "Morn",
        //morn",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1327,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1667,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 847,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2294.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007257281553398058, 0, 177.90813106796116], [0, 0.007257281553398058, 133.89829032920719]]
    }, {
        "text": "Marry",
        //marry",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1287,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1627,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1967,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 3639,
        "bbox": {
            "x": -64.32500000000002,
            "y": -849.325,
            "width": 2637.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0063916203505771695, 0, 55.981712270200944], [0, 0.0063916203505771695, 74.15570417179553]]
    }, {
        "text": "Butt",
        //butt",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1123,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1462,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 16364,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1942.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008263888888888888, 0, 20.839200397708918], [0, 0.008263888888888888, 44.37583333333333]]
    }, {
        "text": "Pink",
        //pink",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 827,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1374,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 694,
        "bbox": {
            "x": -31.820000000000007,
            "y": -824.82,
            "width": 1991.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008333333333333333, 0, 2.966666666666667], [0, 0.008333333333333333, 124.22853934507584]]
    }, {
        "text": "Time",
        //time",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.55"
        }, {
            "x": 555,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 823,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 933,
        "bbox": {
            "x": -100.80000000000001,
            "y": -826.8,
            "width": 2313.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007083333333333333, 0, 134.38515304983244], [0, 0.007083333333333333, 133.465]]
    }, {
        "text": "See",
        //see",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1039,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 284,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1690.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.00878099173553719, 0, 111.72107438016528], [0, 0.00878099173553719, 171.24315157174212]]
    }, {
        "text": "Camerondallas",
        //camerondallas",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1067,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1879,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2727,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 3263,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4348,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 4844,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 5136,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 5428,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 5924,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 17486,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 6483.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004696132596685083, 0, 148.44764862700148], [0, 0.004696132596685083, 43.64364640883978]]
    }, {
        "text": "Resort",
        //resort",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.53"
        }, {
            "x": 595,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1103,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1524,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2060,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2400,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 980,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2880.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 66.05531667851886], [0, 0.005902777777777778, 193.5541666666667]]
    }, {
        "text": "Sunday",
        //sunday",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1070,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1617,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2155,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2651,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 2955,
        "bbox": {
            "x": -105.305,
            "y": -863.3050000000001,
            "width": 3364.61,
            "height": 1219.6100000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004634678298800436, 0, 80.59359549029884], [0, 0.004634678298800436, 122.67489094874591]]
    }, {
        "text": "Flower",
        //flower",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.41"
        }, {
            "x": 517,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 809,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1345,
            "y": 0,
            "glyph": "0.90"
        }, {
            "x": 2080,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2588,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 544,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 3067.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005735968937522061, 0, 37.887442640310624], [0, 0.005735968937522061, 178.4671878409058]]
    }, {
        "text": "Big",
        //big",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 852,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 760,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 1530.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009698451507742461, 0, 131.2256316218419], [0, 0.009698451507742461, 165.29285221651725]]
    }, {
        "text": "Bottle",
        //bottle",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1120,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1459,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1798,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2090,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 4,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2701.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 28.512124611151453], [0, 0.005902777777777778, 80.55416666666667]]
    }, {
        "text": "Ocean",
        //ocean",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.50"
        }, {
            "x": 684,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1135,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1643,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2139,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 785,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2799.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 29.238055209583088], [0, 0.005870165745856353, 123.55455801104974]]
    }, {
        "text": "Light",
        //light",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.47"
        }, {
            "x": 517,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 785,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 1322,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1869,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 1921,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 2415.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0065340909090909095, 0, 111.04460227272729], [0, 0.0065340909090909095, 177.5846378790945]]
    }, {
        "text": "Pool",
        //pool",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1095,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1631,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 703,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2066.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007627118644067796, 0, 168.87669491525423], [0, 0.007627118644067796, 51.05123214895848]]
    }, {
        "text": "Cloud",
        //cloud",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 863,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1938,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 77,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2591.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 76.02830699394843], [0, 0.005870165745856353, 137.55455801104972]]
    }, {
        "text": "Island",
        //island",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.44"
        }, {
            "x": 291,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 712,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1004,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1500,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2047,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 1070,
        "bbox": {
            "x": -13.480000000000004,
            "y": -817.48,
            "width": 2648.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0059691011235955055, 0, 25.18951636890317], [0, 0.0059691011235955055, 37.55337078651685]]
    }, {
        "text": "Baby",
        //baby",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1080,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 1620,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 283,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 2293.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.00651697699890471, 0, 111.73803817566653], [0, 0.00651697699890471, 163.13901971522455]]
    }, {
        "text": "Monday",
        //monday",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1327,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1874,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2412,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2908,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 5825,
        "bbox": {
            "x": -64.32500000000002,
            "y": -849.325,
            "width": 3578.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0042987804878048775, 0, 61.08460365853659], [0, 0.0042987804878048775, 169.18090612260423]]
    }, {
        "text": "Pretty",
        //pretty",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 899,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1407,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1746,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 2085,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 347,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 2758.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005585980284775465, 0, 57.24310455109152], [0, 0.005585980284775465, 91.40487404162103]]
    }, {
        "text": "Great",
        //great",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 952,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1460,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1956,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 430,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2466.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 4.468956749150479], [0, 0.005870165745856353, 129.55455801104972]]
    }, {
        "text": "Home",
        //home",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.43"
        }, {
            "x": 672,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1208,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2020,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 1815,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2628.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005472013366750209, 0, 57.984878863826225], [0, 0.005472013366750209, 104.35657968553808]]
    }, {
        "text": "Boy",
        //boy",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1120,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 64,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 1793.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008378016085790885, 0, 131.03786863270778], [0, 0.008378016085790885, 154.81703039608712]]
    }, {
        "text": "House",
        //house",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.43"
        }, {
            "x": 672,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1208,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1747,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2168,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 443,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2776.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 184.57225348158488], [0, 0.0047752808988764045, 111.64269662921349]]
    }, {
        "text": "Grand",
        //grand",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 952,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1448,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1995,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 564,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2648.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.00512448132780083, 0, 58.53802904564315], [0, 0.00512448132780083, 81.56538432218392]]
    }, {
        "text": "Yellow",
        //yellow",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.60"
        }, {
            "x": 558,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1066,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1358,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1650,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2186,
            "y": 0,
            "glyph": "0.90"
        }],
        "parentId": 990,
        "bbox": {
            "x": -109.48,
            "y": -817.48,
            "width": 3139.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 171.71768649280932], [0, 0.0047752808988764045, 151.64269662921348]]
    }, {
        "text": "Others",
        //others",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.50"
        }, {
            "x": 684,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1023,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2078,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2418,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 1501,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2977.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004696132596685083, 0, 110.37898636164488], [0, 0.004696132596685083, 136.64364640883977]]
    }, {
        "text": "Back",
        //back",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1080,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1531,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 56,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2152.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006762402088772846, 0, 4.950195822454308], [0, 0.006762402088772846, 73.34669867574081]]
    }, {
        "text": "Point",
        //point",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1095,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1363,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1910,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 2703,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2390.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 150.3675202190839], [0, 0.005902777777777778, 176.55416666666667]]
    }, {
        "text": "Girl",
        //girl",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 880,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1220,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 270,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1685.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008218232044198895, 0, 133.09975134979737], [0, 0.008218232044198895, 94.3763812154696]]
    }, {
        "text": "Bay",
        //bay",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1080,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 563,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 1753.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007447973713033954, 0, 61.52212954816997], [0, 0.007447973713033954, 149.87316538882803]]
    }, {
        "text": "Club",
        //club",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 863,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1402,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 2128,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2075.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0064235166031573225, 0, 59.24028307022319], [0, 0.0064235166031573225, 122.37096916858192]]
    }, {
        "text": "Un",
        //un",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.56"
        }, {
            "x": 652,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 1597,
        "bbox": {
            "x": -31.985,
            "y": -816.985,
            "width": 1278.97,
            "height": 942.97
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009760765550239234, 0, 60.07033492822966], [0, 0.009760765550239234, 113.7328791395771]]
    }, {
        "text": "Hill",
        //hill",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.43"
        }, {
            "x": 672,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 940,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1232,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 634,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1667.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007552447552447553, 0, 132.95804195804195], [0, 0.007552447552447553, 126.50654309464892]]
    }, {
        "text": "Vscocam",
        //vscocam",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.57"
        }, {
            "x": 568,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 989,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1440,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1976,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2427,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2923,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 1254,
        "bbox": {
            "x": -119.48,
            "y": -817.48,
            "width": 3902.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 78.16314370106734], [0, 0.0047752808988764045, 63.64269662921349]]
    }, {
        "text": "Bell",
        //bell",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1092,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1384,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 84,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1819.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007083333333333333, 0, 184.7068903941506], [0, 0.007083333333333333, 79.465]]
    }, {
        "text": "Spring",
        //spring",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 1072,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1680,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2227,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 168,
        "bbox": {
            "x": -106.46000000000001,
            "y": -864.46,
            "width": 2945.92,
            "height": 1228.92
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0045995670995671, 0, 59.22386624167822], [0, 0.0045995670995671, 85.64989177489177]]
    }, {
        "text": "Post",
        //post",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1095,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1516,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 1319,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1996.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 154.5602966087999], [0, 0.005902777777777778, 29.554166666666667]]
    }, {
        "text": "Dress",
        //dress",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1502,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1923,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 532,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2452.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 27.881464421078512], [0, 0.005902777777777778, 107.55416666666666]]
    }, {
        "text": "Tenda",
        //tenda",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.55"
        }, {
            "x": 555,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1063,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1610,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2148,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 24124,
        "bbox": {
            "x": -99.48,
            "y": -817.48,
            "width": 2794.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 97.48678008573278], [0, 0.0047752808988764045, 148.64269662921348]]
    }, {
        "text": "Feel",
        //feel",
        "fill": "#3498db",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.41"
        }, {
            "x": 517,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1025,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1533,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 998,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 1965.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0059691011235955055, 0, 15.416521862596262], [0, 0.0059691011235955055, 151.55337078651687]]
    }]
});