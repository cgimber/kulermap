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
        "x": 2.766595209781208,
        "y": 2.374999999999999,
        "width": 195.5840821618444,
        "height": 196.23299924808884
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
        "0.75": "M 398 0 L 398 -285 Q 398 -324 393.5 -353.5 Q 389 -383 377 -402.5 Q 365 -422 344.5 -432 Q 324 -442 291 -442 Q 244 -442 206 -411.5 Q 168 -381 157 -333 L 157 0 L 77 0 L 77 -700 L 157 -700 L 157 -444 L 161 -444 Q 187 -475 223.5 -493.5 Q 260 -512 314 -512 Q 356 -512 387 -502.5 Q 418 -493 438.5 -469 Q 459 -445 468.5 -404.5 Q 478 -364 478 -302 L 478 0 L 398 0 Z ",
        "0.87": "M 11 -500 L 89 -500 L 89 -599 L 169 -622 L 169 -500 L 305 -500 L 305 -430 L 169 -430 L 169 -153 Q 169 -101 182 -79.5 Q 195 -58 226 -58 Q 252 -58 270 -63.5 Q 288 -69 310 -78 L 328 -17 Q 301 -4 269 4 Q 237 12 200 12 Q 139 12 114 -22.5 Q 89 -57 89 -138 L 89 -430 L 11 -430 L 11 -500 Z ",
        "0.83": "M 77 -500 L 132 -500 L 147 -440 L 151 -440 Q 174 -475 210.5 -493.5 Q 247 -512 294 -512 Q 394 -512 443 -453 Q 492 -394 492 -260 Q 492 -197 475.5 -146.5 Q 459 -96 429 -61 Q 399 -26 356.5 -7 Q 314 12 262 12 Q 225 12 203.5 7.5 Q 182 3 157 -8 L 157 200 L 77 200 L 77 -500 M 279 -442 Q 228 -442 198.5 -415.5 Q 169 -389 157 -335 L 157 -87 Q 175 -73 198 -65.5 Q 221 -58 259 -58 Q 328 -58 368.5 -109.5 Q 409 -161 409 -261 Q 409 -302 402 -335.5 Q 395 -369 379.5 -392.5 Q 364 -416 339.5 -429 Q 315 -442 279 -442 Z ",
        "0.86": "M 297 -136 Q 297 -166 279 -183 Q 261 -200 234.5 -211.5 Q 208 -223 176.5 -233.5 Q 145 -244 118.5 -260.5 Q 92 -277 74 -303 Q 56 -329 56 -373 Q 56 -445 97 -478.5 Q 138 -512 211 -512 Q 265 -512 301.5 -502.5 Q 338 -493 365 -480 L 346 -414 Q 323 -425 290.5 -433.5 Q 258 -442 221 -442 Q 177 -442 156.5 -427 Q 136 -412 136 -375 Q 136 -349 154 -334.5 Q 172 -320 198.5 -308.5 Q 225 -297 256.5 -286 Q 288 -275 314.5 -257 Q 341 -239 359 -211.5 Q 377 -184 377 -139 Q 377 -107 366.5 -79 Q 356 -51 334 -31 Q 312 -11 279.5 0.5 Q 247 12 203 12 Q 146 12 106 1 Q 66 -10 39 -25 L 63 -93 Q 86 -80 123 -69 Q 160 -58 198 -58 Q 241 -58 269 -75 Q 297 -92 297 -136 Z ",
        "0.29": "M 91 -449 Q 91 -476 106.5 -491.5 Q 122 -507 148 -507 Q 175 -507 191 -491.5 Q 207 -476 207 -449 Q 207 -423 191 -407 Q 175 -391 148 -391 Q 122 -391 106.5 -407 Q 91 -423 91 -449 M 91 -46 Q 91 -73 106.5 -88.5 Q 122 -104 148 -104 Q 175 -104 191 -88.5 Q 207 -73 207 -46 Q 207 -20 191 -4 Q 175 12 148 12 Q 122 12 106.5 -4 Q 91 -20 91 -46 Z ",
        "0.18": "M 328 -712 L 391 -684 L 26 140 L -37 112 L 328 -712 Z ",
        "0.17": "M 49 -46 Q 49 -73 64.5 -88.5 Q 80 -104 106 -104 Q 133 -104 149 -88.5 Q 165 -73 165 -46 Q 165 -20 149 -4 Q 133 12 106 12 Q 80 12 64.5 -4 Q 49 -20 49 -46 Z ",
        "0.70": "M 418 -33 Q 388 -11 347 0.5 Q 306 12 261 12 Q 203 12 163 -6.5 Q 123 -25 97.5 -59.5 Q 72 -94 60.5 -142.5 Q 49 -191 49 -250 Q 49 -377 105 -444.5 Q 161 -512 266 -512 Q 314 -512 347.5 -504.5 Q 381 -497 408 -483 L 385 -414 Q 362 -427 334 -434.5 Q 306 -442 274 -442 Q 132 -442 132 -250 Q 132 -212 139.5 -177.5 Q 147 -143 164.5 -116.5 Q 182 -90 210.5 -74 Q 239 -58 281 -58 Q 317 -58 345.5 -69 Q 374 -80 392 -94 L 418 -33 Z ",
        "0.82": "M 49 -250 Q 49 -377 105.5 -444.5 Q 162 -512 268 -512 Q 324 -512 365.5 -493.5 Q 407 -475 434 -440.5 Q 461 -406 474 -357.5 Q 487 -309 487 -250 Q 487 -123 430.5 -55.5 Q 374 12 268 12 Q 212 12 170.5 -6.5 Q 129 -25 102 -59.5 Q 75 -94 62 -142.5 Q 49 -191 49 -250 M 132 -250 Q 132 -212 139.5 -177 Q 147 -142 163 -116 Q 179 -90 205 -74 Q 231 -58 268 -58 Q 404 -57 404 -250 Q 404 -289 396.5 -324 Q 389 -359 373 -385 Q 357 -411 331 -426.5 Q 305 -442 268 -442 Q 132 -443 132 -250 Z ",
        "0.60": "M 239 -278 L 8 -700 L 105 -700 L 269 -394 L 286 -333 L 287 -333 L 305 -396 L 462 -700 L 551 -700 L 322 -279 L 322 0 L 239 0 L 239 -278 Z ",
        "0.72": "M 442 -40 Q 412 -16 366.5 -2 Q 321 12 270 12 Q 213 12 171 -6.5 Q 129 -25 102 -59.5 Q 75 -94 62 -142 Q 49 -190 49 -250 Q 49 -378 106 -445 Q 163 -512 269 -512 Q 303 -512 337 -504.5 Q 371 -497 398 -476 Q 425 -455 442 -416.5 Q 459 -378 459 -315 Q 459 -282 453 -242 L 132 -242 Q 132 -198 141 -164 Q 150 -130 169 -106.5 Q 188 -83 218.5 -70.5 Q 249 -58 293 -58 Q 327 -58 361 -70 Q 395 -82 412 -98 L 442 -40 M 270 -442 Q 211 -442 175.5 -411 Q 140 -380 133 -305 L 381 -305 Q 381 -381 352 -411.5 Q 323 -442 270 -442 Z ",
        "0.79": "M 166 -123 Q 166 -88 178 -73 Q 190 -58 212 -58 Q 225 -58 240 -60 Q 255 -62 274 -69 L 283 -6 Q 267 2 238.5 7 Q 210 12 189 12 Q 144 12 115 -13.5 Q 86 -39 86 -100 L 86 -700 L 166 -700 L 166 -123 Z ",
        "0.90": "M 401 -500 L 516 -208 L 541 -112 L 543 -112 L 562 -210 L 651 -500 L 727 -500 L 559 11 L 520 11 L 389 -319 L 370 -401 L 367 -401 L 347 -318 L 221 11 L 182 11 L 8 -500 L 95 -500 L 194 -209 L 211 -112 L 212 -112 L 236 -211 L 343 -500 L 401 -500 Z ",
        "0.36": "M 418 -194 L 160 -194 L 90 0 L 8 0 L 273 -711 L 311 -711 L 577 0 L 490 0 L 418 -194 M 187 -266 L 393 -266 L 315 -479 L 290 -585 L 289 -585 L 264 -477 L 187 -266 Z ",
        "0.80": "M 370 0 L 370 -283 Q 370 -323 366.5 -352.5 Q 363 -382 353 -402 Q 343 -422 324.5 -432 Q 306 -442 276 -442 Q 230 -442 199.5 -414 Q 169 -386 157 -344 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 179 -471 214.5 -491.5 Q 250 -512 307 -512 Q 355 -512 385.5 -493.5 Q 416 -475 433 -429 Q 456 -468 496.5 -490 Q 537 -512 588 -512 Q 630 -512 659 -502.5 Q 688 -493 707 -469 Q 726 -445 734.5 -404 Q 743 -363 743 -300 L 743 0 L 663 0 L 663 -301 Q 663 -337 659.5 -363.5 Q 656 -390 645.5 -407.5 Q 635 -425 616.5 -433.5 Q 598 -442 568 -442 Q 518 -442 490 -414 Q 462 -386 450 -334 L 450 0 L 370 0 Z ",
        "0.68": "M 69 -463 Q 107 -486 157.5 -497 Q 208 -508 263 -508 Q 315 -508 346.5 -494 Q 378 -480 394.5 -457.5 Q 411 -435 416.5 -408 Q 422 -381 422 -354 Q 422 -294 419 -237 Q 416 -180 416 -129 Q 416 -92 419 -59 Q 422 -26 430 2 L 371 2 L 350 -68 L 345 -68 Q 336 -54 322.5 -40.5 Q 309 -27 290 -16.5 Q 271 -6 246 1 Q 221 8 189 8 Q 157 8 129.5 -2 Q 102 -12 82 -30.5 Q 62 -49 50.5 -75 Q 39 -101 39 -134 Q 39 -178 57 -207.5 Q 75 -237 107.5 -254.5 Q 140 -272 185.5 -279.5 Q 231 -287 286 -287 Q 300 -287 313.5 -287 Q 327 -287 341 -285 Q 344 -315 344 -339 Q 344 -394 322 -416 Q 300 -438 242 -438 Q 225 -438 205.5 -435.5 Q 186 -433 165.5 -428.5 Q 145 -424 126.5 -417.5 Q 108 -411 94 -403 L 69 -463 M 211 -62 Q 239 -62 261 -69.5 Q 283 -77 299 -88.5 Q 315 -100 325.5 -114 Q 336 -128 341 -141 L 341 -224 Q 327 -225 312.5 -225.5 Q 298 -226 284 -226 Q 253 -226 223.5 -222.5 Q 194 -219 171.5 -209.5 Q 149 -200 135.5 -183.5 Q 122 -167 122 -142 Q 122 -107 147 -84.5 Q 172 -62 211 -62 Z ",
        "0.85": "M 313 -423 Q 283 -433 256 -433 Q 213 -433 188 -409.5 Q 163 -386 157 -350 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 171 -473 197.5 -491.5 Q 224 -510 265 -510 Q 294 -510 330 -500 L 313 -423 Z ",
        "0.76": "M 94 -500 L 174 -500 L 174 0 L 94 0 L 94 -500 M 77 -652 Q 77 -675 92.5 -691.5 Q 108 -708 132 -708 Q 156 -708 173 -691.5 Q 190 -675 190 -652 Q 190 -629 173 -614 Q 156 -599 132 -599 Q 108 -599 92.5 -614 Q 77 -629 77 -652 Z ",
        "0.37": "M 507 -540 Q 507 -515 499 -489 Q 491 -463 475 -440.5 Q 459 -418 434 -401 Q 409 -384 375 -375 L 375 -371 Q 405 -366 432.5 -354 Q 460 -342 481 -321 Q 502 -300 515 -270 Q 528 -240 528 -199 Q 528 -145 505.5 -105.5 Q 483 -66 446.5 -41 Q 410 -16 363 -4 Q 316 8 267 8 Q 250 8 227 8 Q 204 8 179 6.5 Q 154 5 129 2.5 Q 104 0 85 -5 L 85 -694 Q 122 -700 171 -704 Q 220 -708 278 -708 Q 317 -708 357.5 -701.5 Q 398 -695 431 -676.5 Q 464 -658 485.5 -625 Q 507 -592 507 -540 M 275 -64 Q 307 -64 337 -71.5 Q 367 -79 390 -95.5 Q 413 -112 426.5 -136 Q 440 -160 440 -193 Q 440 -234 423.5 -259 Q 407 -284 380.5 -298 Q 354 -312 321 -317 Q 288 -322 255 -322 L 168 -322 L 168 -71 Q 175 -69 188 -68 Q 201 -67 216 -66 Q 231 -65 247 -64.5 Q 263 -64 275 -64 M 220 -392 Q 237 -392 261 -393 Q 285 -394 301 -396 Q 325 -404 346 -415.5 Q 367 -427 383.5 -442.5 Q 400 -458 409.5 -478.5 Q 419 -499 419 -523 Q 419 -556 406.5 -577.5 Q 394 -599 373 -612 Q 352 -625 325 -630.5 Q 298 -636 270 -636 Q 237 -636 209.5 -634.5 Q 182 -633 168 -630 L 168 -392 L 220 -392 Z ",
        "0.74": "M 460 23 Q 460 120 408.5 166 Q 357 212 256 212 Q 196 212 159.5 204.5 Q 123 197 97 185 L 118 117 Q 141 126 169 134 Q 197 142 242 142 Q 284 142 310.5 134.5 Q 337 127 353 109.5 Q 369 92 375 64.5 Q 381 37 381 -1 L 381 -49 L 377 -49 Q 357 -20 326 -4.5 Q 295 11 245 11 Q 144 11 96.5 -52 Q 49 -115 49 -248 Q 49 -376 110 -442.5 Q 171 -509 290 -509 Q 347 -509 387.5 -500 Q 428 -491 460 -479 L 460 23 M 259 -59 Q 310 -59 339 -84.5 Q 368 -110 380 -164 L 380 -420 Q 340 -439 278 -439 Q 210 -439 171 -393 Q 132 -347 132 -249 Q 132 -207 139 -172 Q 146 -137 161 -112 Q 176 -87 200 -73 Q 224 -59 259 -59 Z ",
        "0.55": "M 537 -626 L 319 -626 L 319 0 L 236 0 L 236 -626 L 18 -626 L 18 -700 L 537 -700 L 537 -626 Z ",
        "0.91": "M 208 -256 L 40 -500 L 138 -500 L 233 -362 L 261 -305 L 290 -362 L 387 -500 L 477 -500 L 308 -260 L 487 0 L 392 0 L 286 -152 L 256 -212 L 225 -152 L 117 0 L 28 0 L 208 -256 Z ",
        "0.51": "M 85 -693 Q 123 -702 167 -705 Q 211 -708 254 -708 Q 300 -708 347.5 -699 Q 395 -690 434 -666 Q 473 -642 497.5 -600 Q 522 -558 522 -493 Q 522 -429 499 -385 Q 476 -341 438 -313.5 Q 400 -286 351 -274 Q 302 -262 250 -262 Q 245 -262 233.5 -262 Q 222 -262 209.5 -262.5 Q 197 -263 185 -264 Q 173 -265 168 -266 L 168 0 L 85 0 L 85 -693 M 256 -636 Q 230 -636 206 -635 Q 182 -634 168 -630 L 168 -340 Q 173 -338 184 -337.5 Q 195 -337 207 -336.5 Q 219 -336 230 -336 Q 241 -336 246 -336 Q 280 -336 313.5 -342.5 Q 347 -349 374 -366 Q 401 -383 417.5 -414 Q 434 -445 434 -493 Q 434 -534 418.5 -561.5 Q 403 -589 377.5 -605.5 Q 352 -622 320 -629 Q 288 -636 256 -636 Z ",
        "0.78": "M 203 -225 L 157 -225 L 157 0 L 77 0 L 77 -700 L 157 -700 L 157 -274 L 198 -288 L 353 -500 L 446 -500 L 293 -299 L 252 -266 L 302 -226 L 469 0 L 370 0 L 203 -225 Z ",
        "0.81": "M 398 0 L 398 -285 Q 398 -363 375.5 -402.5 Q 353 -442 293 -442 Q 240 -442 205.5 -413.5 Q 171 -385 157 -342 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 176 -471 216.5 -491.5 Q 257 -512 313 -512 Q 354 -512 385 -502.5 Q 416 -493 436.5 -469 Q 457 -445 467.5 -404.5 Q 478 -364 478 -302 L 478 0 L 398 0 Z ",
        "0.93": "M 42 -70 L 273 -388 L 315 -430 L 42 -430 L 42 -500 L 398 -500 L 398 -430 L 165 -109 L 124 -70 L 398 -70 L 398 0 L 42 0 L 42 -70 Z ",
        "0.46": "M 215 -324 L 168 -324 L 168 0 L 85 0 L 85 -700 L 168 -700 L 168 -374 L 213 -388 L 448 -700 L 544 -700 L 310 -399 L 268 -366 L 319 -326 L 575 0 L 470 0 L 215 -324 Z ",
        "0.88": "M 149 -500 L 149 -215 Q 149 -176 153.5 -146.5 Q 158 -117 169 -97.5 Q 180 -78 199 -68 Q 218 -58 247 -58 Q 274 -58 295 -66.5 Q 316 -75 332.5 -90 Q 349 -105 361.5 -124.5 Q 374 -144 382 -166 L 382 -500 L 462 -500 L 462 -142 Q 462 -106 464.5 -67.5 Q 467 -29 473 0 L 418 0 L 398 -79 L 393 -79 Q 370 -40 331 -14 Q 292 12 232 12 Q 192 12 161.5 2.5 Q 131 -7 110.5 -31 Q 90 -55 79.5 -95.5 Q 69 -136 69 -198 L 69 -500 L 149 -500 Z ",
        "0.49": "M 211 -458 L 157 -559 L 153 -559 L 163 -458 L 163 0 L 85 0 L 85 -711 L 129 -711 L 464 -244 L 516 -148 L 521 -148 L 510 -244 L 510 -700 L 588 -700 L 588 11 L 544 11 L 211 -458 Z ",
        "0.89": "M 221 -207 L 249 -112 L 250 -112 L 275 -209 L 387 -500 L 473 -500 L 260 11 L 226 11 L 9 -500 L 101 -500 L 221 -207 Z ",
        "0.39": "M 85 -700 Q 104 -703 127.5 -704.5 Q 151 -706 176.5 -706.5 Q 202 -707 226.5 -707.5 Q 251 -708 272 -708 Q 356 -708 417.5 -682 Q 479 -656 519 -609.5 Q 559 -563 578.5 -498 Q 598 -433 598 -355 Q 598 -284 579.5 -218.5 Q 561 -153 521 -102.5 Q 481 -52 417 -21.5 Q 353 9 262 9 Q 246 9 220.5 8.5 Q 195 8 168 6.5 Q 141 5 118 4 Q 95 3 85 1 L 85 -700 M 274 -634 Q 261 -634 245.5 -634 Q 230 -634 215 -633 Q 200 -632 187.5 -631 Q 175 -630 168 -629 L 168 -69 Q 173 -68 187 -67.5 Q 201 -67 216 -66.5 Q 231 -66 245 -65.5 Q 259 -65 264 -65 Q 334 -65 381.5 -89 Q 429 -113 457.5 -153.5 Q 486 -194 498 -246.5 Q 510 -299 510 -355 Q 510 -404 499 -453.5 Q 488 -503 461 -543 Q 434 -583 388.5 -608.5 Q 343 -634 274 -634 Z ",
        "0.53": "M 85 -693 Q 123 -700 172.5 -704 Q 222 -708 263 -708 Q 309 -708 350.5 -698 Q 392 -688 423.5 -665 Q 455 -642 474 -605 Q 493 -568 493 -515 Q 493 -433 448 -382 Q 403 -331 334 -314 L 382 -277 L 556 0 L 459 0 L 266 -302 L 168 -317 L 168 0 L 85 0 L 85 -693 M 265 -636 Q 252 -636 238 -636 Q 224 -636 211 -635 Q 198 -634 186.5 -633 Q 175 -632 168 -630 L 168 -372 L 246 -372 Q 315 -372 360 -406 Q 405 -440 405 -512 Q 405 -566 368 -601 Q 331 -636 265 -636 Z ",
        "0.181": "M 49 -250 Q 49 -377 105.5 -444.5 Q 162 -512 268 -512 Q 324 -512 365.5 -493.5 Q 407 -475 434 -440.5 Q 461 -406 474 -357.5 Q 487 -309 487 -250 Q 487 -123 430.5 -55.5 Q 374 12 268 12 Q 212 12 170.5 -6.5 Q 129 -25 102 -59.5 Q 75 -94 62 -142.5 Q 49 -191 49 -250 M 132 -250 Q 132 -212 139.5 -177 Q 147 -142 163 -116 Q 179 -90 205 -74 Q 231 -58 268 -58 Q 404 -57 404 -250 Q 404 -289 396.5 -324 Q 389 -359 373 -385 Q 357 -411 331 -426.5 Q 305 -442 268 -442 Q 132 -443 132 -250 M 286 -720 L 375 -720 L 375 -699 L 274 -571 L 227 -571 L 286 -720 Z ",
        "0.57": "M 267 -219 L 291 -113 L 292 -113 L 318 -221 L 487 -700 L 570 -700 L 305 11 L 268 11 L -2 -700 L 89 -700 L 267 -219 Z ",
        "0.175": "M 94 -500 L 174 -500 L 174 0 L 94 0 L 94 -500 M 154 -720 L 243 -720 L 243 -699 L 142 -571 L 95 -571 L 154 -720 Z ",
        "0.44": "M 104 -700 L 187 -700 L 187 0 L 104 0 L 104 -700 Z ",
        "0.71": "M 461 -172 Q 461 -121 462 -79.5 Q 463 -38 471 2 L 417 2 L 397 -69 L 393 -69 Q 373 -34 335 -11 Q 297 12 246 12 Q 146 12 97.5 -51 Q 49 -114 49 -248 Q 49 -376 109.5 -442.5 Q 170 -509 276 -509 Q 313 -509 334.5 -505 Q 356 -501 381 -492 L 381 -700 L 461 -700 L 461 -172 M 259 -58 Q 310 -58 340 -84.5 Q 370 -111 381 -165 L 381 -413 Q 363 -427 340 -433 Q 317 -439 279 -439 Q 210 -439 171 -393.5 Q 132 -348 132 -248 Q 132 -207 138.5 -172 Q 145 -137 160 -112 Q 175 -87 199.5 -72.5 Q 224 -58 259 -58 Z ",
        "0.0": "M 50 -700 L 700 -700 L 700 0 L 50 0 L 50 -700 M 570 -620 L 375 -403 L 180 -620 L 130 -570 L 327 -350 L 130 -130 L 180 -80 L 375 -297 L 570 -80 L 620 -130 L 422 -350 L 620 -570 L 570 -620 M 129 -27 L 137 -27 L 137 -39 L 141 -39 Q 147 -39 152 -41.5 Q 157 -44 157 -51 Q 157 -59 151.5 -61 Q 146 -63 140 -63 L 129 -63 L 129 -27 M 141 -57 Q 149 -57 149 -52 Q 149 -47 146.5 -46.5 Q 144 -46 140 -46 L 137 -46 L 137 -57 L 141 -57 M 189 -63 L 158 -63 L 158 -57 L 170 -57 L 170 -27 L 177 -27 L 177 -57 L 189 -57 L 189 -63 M 222 -37 Q 222 -33 215 -33 Q 208 -33 206 -35 L 203 -28 Q 205 -28 208 -27 Q 211 -26 216 -26 Q 230 -26 230 -38 Q 230 -47 221 -48 Q 212 -49 212 -54 Q 212 -57 218 -57 Q 223 -57 227 -55 L 229 -62 Q 223 -64 218 -64 Q 204 -64 204 -53 Q 204 -48 207 -46 Q 210 -44 213 -42.5 Q 216 -41 219 -40 Q 222 -39 222 -37 M 237 -47 Q 241 -49 246 -49 Q 251 -49 251 -45 L 251 -43 Q 250 -43 249 -43.5 Q 248 -44 246 -44 Q 234 -44 234 -34 Q 234 -26 242 -26 Q 248 -26 251 -31 L 253 -27 L 259 -27 Q 258 -29 258 -34 L 258 -45 Q 258 -55 248 -55 Q 244 -55 240.5 -54 Q 237 -53 235 -52 L 237 -47 M 245 -32 Q 241 -32 241 -36 Q 241 -40 246 -40 Q 248 -40 249 -39.5 Q 250 -39 251 -39 L 251 -36 Q 249 -32 245 -32 M 292 -27 L 292 -43 Q 292 -55 283 -55 Q 276 -55 273 -50 L 271 -54 L 266 -54 L 266 -27 L 273 -27 L 273 -44 Q 275 -48 279 -48 Q 284 -48 284 -42 L 284 -27 L 292 -27 M 297 -28 Q 301 -26 307 -26 Q 318 -26 318 -35 Q 318 -40 315.5 -41 Q 313 -42 310 -44 Q 305 -46 305 -47 Q 305 -49 308 -49 Q 312 -49 316 -47 L 318 -53 Q 314 -55 308 -55 Q 298 -55 298 -46 Q 298 -41 301 -39.5 Q 304 -38 306 -37 Q 311 -37 311 -34 Q 311 -32 308 -32 Q 303 -32 299 -34 L 297 -28 M 338 -42 Q 338 -21 358 -21 Q 378 -21 378 -42 Q 378 -62 358 -62 Q 350 -62 344 -56.5 Q 338 -51 338 -42 M 344 -42 Q 344 -57 358 -57 Q 372 -57 372 -42 Q 372 -27 358 -27 Q 344 -27 344 -42 M 364 -38 Q 362 -37 360 -37 Q 356 -37 356 -42 Q 356 -46 360 -46 L 363 -46 L 365 -50 Q 361 -52 358 -52 Q 349 -52 349 -42 Q 349 -31 358 -31 Q 363 -31 365 -33 L 364 -38 M 399 -27 L 407 -27 L 407 -39 L 411 -39 Q 417 -39 422 -41.5 Q 427 -44 427 -51 Q 427 -59 421.5 -61 Q 416 -63 410 -63 L 399 -63 L 399 -27 M 411 -57 Q 419 -57 419 -52 Q 419 -47 416.5 -46.5 Q 414 -46 410 -46 L 407 -46 L 407 -57 L 411 -57 M 432 -47 Q 436 -49 441 -49 Q 446 -49 446 -45 L 446 -43 Q 445 -43 444 -43.5 Q 443 -44 441 -44 Q 428 -44 428 -34 Q 428 -26 437 -26 Q 443 -26 446 -31 L 448 -27 L 454 -27 Q 453 -29 453 -34 L 453 -45 Q 453 -55 443 -55 Q 439 -55 435.5 -54 Q 432 -53 430 -52 L 432 -47 M 440 -32 Q 436 -32 436 -36 Q 436 -40 441 -40 Q 443 -40 444 -39.5 Q 445 -39 446 -39 L 446 -36 Q 444 -32 440 -32 M 478 -54 Q 477 -55 474 -55 Q 470 -55 468 -50 L 467 -50 L 466 -54 L 460 -54 L 460 -27 L 468 -27 L 468 -44 Q 468 -48 474 -48 L 475 -48 Q 476 -48 476 -47.5 Q 476 -47 477 -47 L 478 -54 M 483 -47 Q 489 -49 492 -49 Q 497 -49 497 -45 L 497 -43 Q 496 -43 495 -43.5 Q 494 -44 492 -44 Q 479 -44 479 -34 Q 479 -26 488 -26 Q 495 -26 497 -31 L 498 -31 L 499 -27 L 505 -27 Q 504 -29 504 -34 L 504 -45 Q 504 -55 494 -55 Q 490 -55 487 -54 Q 484 -53 482 -52 L 483 -47 M 491 -32 Q 487 -32 487 -36 Q 487 -40 492 -40 Q 494 -40 495 -39.5 Q 496 -39 497 -39 L 497 -36 Q 495 -32 491 -32 M 533 -63 L 502 -63 L 502 -57 L 513 -57 L 513 -27 L 521 -27 L 521 -57 L 533 -57 L 533 -63 M 541 -54 L 533 -54 L 545 -27 Q 544 -22 540 -22 L 539 -23 L 537 -17 Q 539 -16 542 -16 Q 547 -16 552 -29 L 562 -54 L 554 -54 L 549 -39 L 549 -34 L 548 -34 L 547 -39 L 541 -54 M 565 -16 L 573 -16 L 573 -28 Q 574 -26 578 -26 Q 592 -26 592 -41 Q 592 -55 581 -55 Q 576 -55 572 -51 L 571 -51 L 570 -54 L 565 -54 L 565 -16 M 579 -49 Q 584 -49 584 -41 Q 584 -32 577 -32 Q 575 -32 573 -34 L 573 -44 Q 573 -49 579 -49 M 618 -34 Q 616 -32 611 -32 Q 604 -32 603 -38 L 622 -38 L 622 -44 Q 622 -50 618.5 -52.5 Q 615 -55 610 -55 Q 596 -55 596 -40 Q 596 -26 610 -26 Q 613 -26 616 -27 Q 619 -28 621 -29 L 618 -34 M 610 -49 Q 616 -49 615 -43 L 604 -43 Q 604 -49 610 -49 Z ",
        "0.69": "M 77 -700 L 157 -700 L 157 -451 L 161 -451 Q 184 -480 219.5 -496 Q 255 -512 297 -512 Q 394 -512 442.5 -450 Q 491 -388 491 -258 Q 491 -127 427 -59 Q 363 9 247 9 Q 191 9 145.5 -3 Q 100 -15 77 -29 L 77 -700 M 283 -442 Q 233 -442 202 -414 Q 171 -386 157 -335 L 157 -83 Q 176 -72 203 -66.5 Q 230 -61 259 -61 Q 327 -61 367.5 -109 Q 408 -157 408 -259 Q 408 -298 401 -332 Q 394 -366 379 -390 Q 364 -414 340.5 -428 Q 317 -442 283 -442 Z ",
        "0.190": "M 149 -500 L 149 -215 Q 149 -176 153.5 -146.5 Q 158 -117 169 -97.5 Q 180 -78 199 -68 Q 218 -58 247 -58 Q 274 -58 295 -66.5 Q 316 -75 332.5 -90 Q 349 -105 361.5 -124.5 Q 374 -144 382 -166 L 382 -500 L 462 -500 L 462 -142 Q 462 -106 464.5 -67.5 Q 467 -29 473 0 L 418 0 L 398 -79 L 393 -79 Q 370 -40 331 -14 Q 292 12 232 12 Q 192 12 161.5 2.5 Q 131 -7 110.5 -31 Q 90 -55 79.5 -95.5 Q 69 -136 69 -198 L 69 -500 L 149 -500 M 125 -653 Q 125 -676 138.5 -690 Q 152 -704 174 -704 Q 196 -704 209.5 -690 Q 223 -676 223 -653 Q 223 -632 209.5 -618 Q 196 -604 174 -604 Q 152 -604 138.5 -618 Q 125 -632 125 -653 M 317 -653 Q 317 -676 330.5 -690 Q 344 -704 366 -704 Q 389 -704 402.5 -690 Q 416 -676 416 -653 Q 416 -632 402.5 -618 Q 389 -604 366 -604 Q 344 -604 330.5 -618 Q 317 -632 317 -653 Z ",
        "0.92": "M 224 -176 L 252 -80 L 257 -80 L 279 -177 L 376 -500 L 457 -500 L 309 -51 Q 292 -2 275.5 44 Q 259 90 239 126 Q 219 162 194 183.5 Q 169 205 136 205 Q 100 205 77 195 L 91 126 Q 104 131 116 131 Q 144 131 170 101.5 Q 196 72 213 0 L 12 -500 L 104 -500 L 224 -176 Z ",
        "0.38": "M 533 -29 Q 503 -6 457 3 Q 411 12 359 12 Q 296 12 241 -9.5 Q 186 -31 145 -75 Q 104 -119 80 -187.5 Q 56 -256 56 -350 Q 56 -448 82.5 -516.5 Q 109 -585 152.5 -628.5 Q 196 -672 250 -692 Q 304 -712 360 -712 Q 420 -712 458 -705.5 Q 496 -699 523 -688 L 503 -615 Q 455 -638 366 -638 Q 325 -638 285 -623 Q 245 -608 213.5 -574 Q 182 -540 163 -485 Q 144 -430 144 -350 Q 144 -278 162 -224 Q 180 -170 211.5 -134 Q 243 -98 285.5 -80 Q 328 -62 378 -62 Q 423 -62 456.5 -71 Q 490 -80 513 -94 L 533 -29 Z ",
        "0.48": "M 623 -470 L 633 -575 L 628 -575 L 590 -479 L 408 -163 L 383 -163 L 190 -480 L 154 -575 L 149 -575 L 163 -471 L 163 0 L 85 0 L 85 -700 L 147 -700 L 366 -342 L 399 -264 L 401 -264 L 432 -344 L 641 -700 L 706 -700 L 706 0 L 623 0 L 623 -470 Z ",
        "0.50": "M 56 -350 Q 56 -525 130 -618.5 Q 204 -712 341 -712 Q 415 -712 469 -686 Q 523 -660 558.5 -612.5 Q 594 -565 611 -498.5 Q 628 -432 628 -350 Q 628 -175 553.5 -81.5 Q 479 12 341 12 Q 268 12 214.5 -14 Q 161 -40 125.5 -87.5 Q 90 -135 73 -201.5 Q 56 -268 56 -350 M 144 -350 Q 144 -292 155.5 -240 Q 167 -188 191 -148.5 Q 215 -109 252.5 -85.5 Q 290 -62 341 -62 Q 434 -62 487 -132.5 Q 540 -203 540 -350 Q 540 -407 528.5 -459.5 Q 517 -512 492.5 -551.5 Q 468 -591 430.5 -614.5 Q 393 -638 341 -638 Q 249 -638 196.5 -567.5 Q 144 -497 144 -350 Z ",
        "0.73": "M 22 -500 L 100 -500 L 100 -528 Q 100 -574 107.5 -608 Q 115 -642 132 -663.5 Q 149 -685 176 -695.5 Q 203 -706 243 -706 Q 275 -706 299.5 -702 Q 324 -698 351 -687 L 333 -620 Q 310 -630 289.5 -633 Q 269 -636 251 -636 Q 225 -636 210.5 -628 Q 196 -620 189.5 -604.5 Q 183 -589 181.5 -566.5 Q 180 -544 180 -514 L 180 -500 L 313 -500 L 313 -430 L 180 -430 L 180 0 L 100 0 L 100 -430 L 22 -430 L 22 -500 Z ",
        "0.9": "M 118 -187 Q 118 -227 132 -263.5 Q 146 -300 170 -331 Q 194 -362 224.5 -388 Q 255 -414 288 -434 Q 264 -470 246.5 -506 Q 229 -542 229 -584 Q 229 -608 237 -631 Q 245 -654 262.5 -672 Q 280 -690 307.5 -701 Q 335 -712 374 -712 Q 415 -712 443 -701.5 Q 471 -691 488 -674 Q 505 -657 512.5 -636 Q 520 -615 520 -593 Q 520 -551 487.5 -506.5 Q 455 -462 385 -421 Q 401 -392 422.5 -361.5 Q 444 -331 468 -301 Q 492 -271 517 -241.5 Q 542 -212 567 -187 Q 578 -199 589 -217.5 Q 600 -236 610.5 -256.5 Q 621 -277 629.5 -299 Q 638 -321 645 -341 L 707 -312 Q 701 -295 690 -271.5 Q 679 -248 665.5 -223.5 Q 652 -199 638 -176.5 Q 624 -154 612 -139 Q 633 -119 650 -104.5 Q 667 -90 681.5 -79.5 Q 696 -69 709.5 -60.5 Q 723 -52 737 -44 L 687 12 Q 634 -14 566 -81 Q 548 -63 526.5 -46.5 Q 505 -30 478 -17 Q 451 -4 418.5 4 Q 386 12 347 12 Q 300 12 258.5 -1 Q 217 -14 186 -39.5 Q 155 -65 136.5 -102 Q 118 -139 118 -187 M 519 -131 Q 490 -160 462 -194 Q 434 -228 408.5 -262 Q 383 -296 361.5 -327.5 Q 340 -359 325 -383 Q 298 -363 275 -342 Q 252 -321 234.5 -297.5 Q 217 -274 207.5 -247 Q 198 -220 198 -189 Q 198 -158 211 -133.5 Q 224 -109 246.5 -92.5 Q 269 -76 298 -67 Q 327 -58 359 -58 Q 384 -58 407.5 -64.5 Q 431 -71 452 -81 Q 473 -91 490.5 -104 Q 508 -117 519 -131 M 307 -584 Q 307 -554 319.5 -524.5 Q 332 -495 352 -466 Q 405 -500 425.5 -528 Q 446 -556 446 -577 Q 446 -609 430.5 -629 Q 415 -649 377 -649 Q 341 -649 324 -631 Q 307 -613 307 -584 Z ",
        "0.45": "M 112 -700 L 195 -700 L 195 -154 Q 195 -74 159.5 -32 Q 124 10 52 10 Q 44 10 32 9 Q 20 8 8 6 Q -4 4 -15.5 1 Q -27 -2 -34 -6 L -18 -77 Q 10 -64 43 -64 Q 85 -64 98.5 -93.5 Q 112 -123 112 -174 L 112 -700 Z ",
        "0.54": "M 401 -178 Q 401 -220 376 -246.5 Q 351 -273 313.5 -293.5 Q 276 -314 232 -332 Q 188 -350 150.5 -375.5 Q 113 -401 88 -438.5 Q 63 -476 63 -534 Q 63 -616 120 -664 Q 177 -712 282 -712 Q 343 -712 393 -703 Q 443 -694 471 -680 L 446 -607 Q 423 -618 378.5 -628 Q 334 -638 278 -638 Q 212 -638 179 -608.5 Q 146 -579 146 -539 Q 146 -500 171 -474 Q 196 -448 233.5 -427.5 Q 271 -407 315 -387 Q 359 -367 396.5 -340.5 Q 434 -314 459 -277 Q 484 -240 484 -185 Q 484 -140 468 -104 Q 452 -68 421 -42 Q 390 -16 346 -2 Q 302 12 246 12 Q 171 12 122 0.5 Q 73 -11 46 -25 L 74 -100 Q 97 -87 142 -74.5 Q 187 -62 243 -62 Q 276 -62 305 -68.5 Q 334 -75 355 -89.5 Q 376 -104 388.5 -126 Q 401 -148 401 -178 Z ",
        "0.169": "M 418 -33 Q 369 2 297 10 L 279 43 Q 321 51 339.5 69 Q 358 87 358 118 Q 358 157 326 182.5 Q 294 208 236 208 Q 225 208 214 207 Q 203 206 191 204 L 200 165 Q 206 166 211 166 Q 216 166 221 166 Q 243 166 255.5 162 Q 268 158 274.5 152.5 Q 281 147 282.5 140 Q 284 133 284 127 Q 284 99 198 90 L 240 11 Q 188 8 152 -12 Q 116 -32 93 -66 Q 70 -100 59.5 -146.5 Q 49 -193 49 -250 Q 49 -377 105 -444.5 Q 161 -512 266 -512 Q 314 -512 347.5 -504.5 Q 381 -497 408 -483 L 385 -414 Q 362 -427 334 -434.5 Q 306 -442 274 -442 Q 132 -442 132 -250 Q 132 -212 139.5 -177.5 Q 147 -143 164.5 -116.5 Q 182 -90 210.5 -74.5 Q 239 -59 281 -59 Q 317 -59 345.5 -69.5 Q 374 -80 392 -94 L 418 -33 Z ",
        "0.42": "M 321 -349 L 556 -349 L 556 -41 Q 540 -29 517.5 -19 Q 495 -9 469.5 -2 Q 444 5 416.5 8.5 Q 389 12 363 12 Q 296 12 240 -9.5 Q 184 -31 143 -75.5 Q 102 -120 79 -188.5 Q 56 -257 56 -350 Q 56 -447 84 -516 Q 112 -585 157 -628.5 Q 202 -672 258 -692 Q 314 -712 370 -712 Q 430 -712 469 -705.5 Q 508 -699 535 -688 L 514 -615 Q 466 -638 377 -638 Q 335 -638 293.5 -623.5 Q 252 -609 219 -575 Q 186 -541 165 -486 Q 144 -431 144 -350 Q 144 -276 161 -222 Q 178 -168 208.5 -132.5 Q 239 -97 282 -79.5 Q 325 -62 376 -62 Q 440 -62 485 -87 L 485 -282 L 321 -302 L 321 -349 Z ",
        "0.41": "M 85 -700 L 466 -700 L 466 -626 L 168 -626 L 168 -387 L 446 -387 L 446 -313 L 168 -313 L 168 0 L 85 0 L 85 -700 Z ",
        "0.269": "M 297 -136 Q 297 -166 279 -183 Q 261 -200 234.5 -211.5 Q 208 -223 176.5 -233.5 Q 145 -244 118.5 -260.5 Q 92 -277 74 -303 Q 56 -329 56 -373 Q 56 -445 97 -478.5 Q 138 -512 211 -512 Q 265 -512 301.5 -502.5 Q 338 -493 365 -480 L 346 -415 Q 323 -426 290.5 -434 Q 258 -442 221 -442 Q 177 -442 156.5 -427 Q 136 -412 136 -375 Q 136 -349 154 -334.5 Q 172 -320 198.5 -308.5 Q 225 -297 256.5 -286 Q 288 -275 314.5 -257 Q 341 -239 359 -211.5 Q 377 -184 377 -139 Q 377 -80 342 -39 Q 307 2 235 10 L 217 43 Q 259 51 277.5 69 Q 296 87 296 118 Q 296 157 264 182.5 Q 232 208 174 208 Q 163 208 152 207 Q 141 206 129 204 L 138 165 Q 144 166 149 166 Q 154 166 159 166 Q 181 166 193.5 162 Q 206 158 212.5 152.5 Q 219 147 220.5 140 Q 222 133 222 127 Q 222 99 136 90 L 178 11 Q 131 9 97 -1 Q 63 -11 39 -25 L 63 -92 Q 86 -80 123 -69.5 Q 160 -59 198 -59 Q 241 -59 269 -75.5 Q 297 -92 297 -136 Z ",
        "0.233": "M 94 -500 L 174 -500 L 174 0 L 94 0 L 94 -500 Z ",
        "0.47": "M 499 0 L 85 0 L 85 -700 L 168 -700 L 168 -74 L 499 -74 L 499 0 Z ",
        "0.58": "M 222 -231 L 238 -115 L 239 -115 L 256 -233 L 400 -700 L 440 -700 L 585 -231 L 602 -115 L 603 -115 L 621 -233 L 739 -700 L 820 -700 L 625 11 L 579 11 L 437 -458 L 419 -564 L 414 -564 L 396 -457 L 254 11 L 208 11 L 8 -700 L 96 -700 L 222 -231 Z ",
        "0.43": "M 504 -321 L 168 -321 L 168 0 L 85 0 L 85 -700 L 168 -700 L 168 -395 L 504 -395 L 504 -700 L 587 -700 L 587 0 L 504 0 L 504 -321 Z "
    },
    "tags": [{
        "text": "https://t.co",
        //co",
        "fill": "#f1de0f",
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
        "parentId": 14,
        "bbox": {
            "x": -73.48000000000002,
            "y": -862.48,
            "width": 4828.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04100877192982456, 0, 3.99846491228072], [0, 0.04100877192982456, 110.4982456140351]]
    }, {
        "text": "Yellow",
        //yellow",
        "fill": "#f1de0f",
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
        "parentId": 10,
        "bbox": {
            "x": -109.48,
            "y": -817.48,
            "width": 3139.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04727528089887641, 0, 25.630358235775226], [0, 0.04727528089887641, 77.25668513423794]]
    }, {
        "text": "Amarillo",
        //amarillo",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1397,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1893,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2233,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2501,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2793,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3085,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 1643,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 3802.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04232365145228216, 0, 22.912176442907988], [0, 0.04232365145228216, 151.7921161825726]]
    }, {
        "text": "Big",
        //big",
        "fill": "#f1de0f",
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
        "parentId": 47,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 1530.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.036586956521739135, 0, 75.89910976191483], [0, 0.036586956521739135, 183.41535810051923]]
    }, {
        "text": "Taxi",
        //taxi",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.55"
        }, {
            "x": 555,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1051,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1566,
            "y": 0,
            "glyph": "0.76"
        }],
        "parentId": 48,
        "bbox": {
            "x": -100.14,
            "y": -826.14,
            "width": 1974.28,
            "height": 952.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04155027932960894, 0, 65.99301792534706], [0, 0.04155027932960894, 41.04259776536313]]
    }, {
        "text": "Pk",
        //pk",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 152,
        "bbox": {
            "x": -31.820000000000007,
            "y": -824.82,
            "width": 1176.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.03481638418079096, 0, 40.32651616386794], [0, 0.03481638418079096, 178.82500000000002]]
    }, {
        "text": "Benzin",
        //benzin",
        "fill": "#f1de0f",
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
            "glyph": "0.81"
        }, {
            "x": 1639,
            "y": 0,
            "glyph": "0.93"
        }, {
            "x": 2086,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 54,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2984.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.016527777777777777, 0, 126.39549218673125], [0, 0.016527777777777777, 165.75166666666667]]
    }, {
        "text": "Kuning",
        //kuning",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.46"
        }, {
            "x": 610,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1149,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1696,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1964,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2511,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 1049,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 3189.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013858695652173913, 0, 150.28985985898322], [0, 0.013858695652173913, 121.93695652173912]]
    }, {
        "text": "Nivel",
        //nivel",
        "fill": "#f1de0f",
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
            "glyph": "0.89"
        }, {
            "x": 1423,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1931,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 8886,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2367.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.018810511756569847, 0, 31.142108443715934], [0, 0.018810511756569847, 42.57427385892116]]
    }, {
        "text": "Dgt",
        //dgt",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 1191,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 8927,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 1737.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.020326086956521737, 0, 160.64402686740308], [0, 0.020326086956521737, 83.04086956521739]]
    }, {
        "text": "Decreciente",
        //decreciente",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1162,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1613,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1953,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2461,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2912,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3180,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 3688,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 4235,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 4574,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 8925,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 5185.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.012986111111111111, 0, 110.85227879203404], [0, 0.012986111111111111, 52.01916666666666]]
    }, {
        "text": "RetenciÃ³n",
        //retenciÃ³n",
        "fill": "#f1de0f",
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
            "glyph": "0.87"
        }, {
            "x": 1442,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1950,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2497,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3216,
            "y": 0,
            "glyph": "0.181"
        }, {
            "x": 3752,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 9077,
        "bbox": {
            "x": -35.78,
            "y": -840.78,
            "width": 4386.56,
            "height": 973.56
        },
        "shapeColor": "3488bf",
        "matrix": [[0.012773224043715847, 0, 51.85487278937965], [0, 0.012773224043715847, 129.02172131147543]]
    }, {
        "text": "Tipo",
        //tipo",
        "fill": "#f1de0f",
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
            "glyph": "0.83"
        }, {
            "x": 1364,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 5253,
        "bbox": {
            "x": -131.82,
            "y": -857.8199999999999,
            "width": 2132.64,
            "height": 1207.6399999999999
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01591409691629956, 0, 93.61676721121502], [0, 0.01591409691629956, 15.542180616740088]]
    }, {
        "text": "VÃ­a",
        //vÃ­a",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.57"
        }, {
            "x": 568,
            "y": 0,
            "glyph": "0.175"
        }, {
            "x": 836,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 8881,
        "bbox": {
            "x": -122.61500000000001,
            "y": -840.615,
            "width": 1509.23,
            "height": 972.23
        },
        "shapeColor": "3488bf",
        "matrix": [[0.020930232558139535, 0, 126.06288662990447], [0, 0.020930232558139535, 182.41976744186047]]
    }, {
        "text": "Incdgt",
        //incdgt",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.44"
        }, {
            "x": 291,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 838,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1289,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1827,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 2364,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 8888,
        "bbox": {
            "x": -46.48000000000002,
            "y": -850.48,
            "width": 2888.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01211622807017544, 0, 74.98197849825159], [0, 0.01211622807017544, 193.45635964912282]]
    }, {
        "text": "IÌ‡stanbul",
        //iÌ‡stanbul",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.44"
        }, {
            "x": 291,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 1041,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1462,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1801,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2297,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2844,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3384,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 3923,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 56,
        "bbox": {
            "x": -13.480000000000004,
            "y": -817.48,
            "width": 4336.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013132022471910112, 0, 55.85602608047609], [0, 0.013132022471910112, 88.01741573033708]]
    }, {
        "text": "TÃ¼rkiye",
        //tÃ¼rkiye",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.55"
        }, {
            "x": 555,
            "y": 0,
            "glyph": "0.190"
        }, {
            "x": 1094,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1434,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1913,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2181,
            "y": 0,
            "glyph": "0.92"
        }, {
            "x": 2647,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 51,
        "bbox": {
            "x": -132.645,
            "y": -858.645,
            "width": 3389.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010240963855421687, 0, 140.08054376098815], [0, 0.010240963855421687, 39.075602409638556]]
    }, {
        "text": "PrecauciÃ³n",
        //precauciÃ³n",
        "fill": "#f1de0f",
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
            "glyph": "0.70"
        }, {
            "x": 1858,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2893,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3612,
            "y": 0,
            "glyph": "0.181"
        }, {
            "x": 4148,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 8879,
        "bbox": {
            "x": -35.78,
            "y": -840.78,
            "width": 4782.56,
            "height": 973.56
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010450819672131148, 0, 1.8782755376500604], [0, 0.010450819672131148, 119.19959016393443]]
    }, {
        "text": "Autopista",
        //autopista",
        "fill": "#f1de0f",
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
            "glyph": "0.87"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1999,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 2540,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2808,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3229,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3568,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 9123,
        "bbox": {
            "x": -142.315,
            "y": -861.315,
            "width": 4290.63,
            "height": 1211.63
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007464324917672887, 0, 151.909536049088], [0, 0.007464324917672887, 127.90713501646543]]
    }, {
        "text": "AutovÃ­a",
        //autovÃ­a",
        "fill": "#f1de0f",
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
            "glyph": "0.87"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1999,
            "y": 0,
            "glyph": "0.89"
        }, {
            "x": 2481,
            "y": 0,
            "glyph": "0.175"
        }, {
            "x": 2749,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 9124,
        "bbox": {
            "x": -112.78,
            "y": -840.78,
            "width": 3412.56,
            "height": 973.56
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010450819672131148, 0, 61.69626563507582], [0, 0.010450819672131148, 119.19959016393443]]
    }, {
        "text": "Creciente",
        //creciente",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 911,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1419,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1870,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2138,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2646,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 3193,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3532,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 9095,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 4173.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008218232044198895, 0, 19.630822838107505], [0, 0.008218232044198895, 84.37638121546962]]
    }, {
        "text": "Madrid",
        //madrid",
        "fill": "#f1de0f",
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
            "glyph": "0.71"
        }, {
            "x": 1825,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2165,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2433,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 9136,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 3056.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010625, 0, 41.12223633288391], [0, 0.010625, 28.197499999999998]]
    }, {
        "text": "Obra",
        //obra",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.50"
        }, {
            "x": 684,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1564,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 9092,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2176.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01498968008255934, 0, 6.135577915376678], [0, 0.01498968008255934, 76.83954930647074]]
    }, {
        "text": "Circulacion",
        //circulacion",
        "fill": "#f1de0f",
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
            "glyph": "0.85"
        }, {
            "x": 1179,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1630,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2169,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2461,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2957,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3408,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3676,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 4212,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 9118,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 4872.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 148.04757789164867], [0, 0.005870165745856353, 88.55455801104972]]
    }, {
        "text": "Nasi",
        //nasi",
        "fill": "#f1de0f",
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
            "glyph": "0.86"
        }, {
            "x": 1590,
            "y": 0,
            "glyph": "0.76"
        }],
        "parentId": 7621,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 1933.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.014107883817427384, 0, 163.29802854543888], [0, 0.014107883817427384, 66.93070539419087]]
    }, {
        "text": "Dgtmadrid",
        //dgtmadrid",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 1191,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1530,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2342,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2838,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3376,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 3716,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3984,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 9131,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 4673.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006784897025171624, 0, 120.09828375286041], [0, 0.006784897025171624, 118.2165833647529]]
    }, {
        "text": "Cafe",
        //cafe",
        "fill": "#f1de0f",
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
        "parentId": 31,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2027.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.012914364640883977, 0, 5.383976179782785], [0, 0.012914364640883977, 130.0200276243094]]
    }, {
        "text": "Kilometrica",
        //kilometrica",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.46"
        }, {
            "x": 610,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 878,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1170,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1706,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2518,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 3026,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3365,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 3705,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3973,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4424,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 9120,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 5006.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 87.08091113275134], [0, 0.005902777777777778, 156.55416666666667]]
    }, {
        "text": "Bigyellowtaxitr",
        //bigyellowtaxitr",
        "fill": "#f1de0f",
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
        }, {
            "x": 1389,
            "y": 0,
            "glyph": "0.92"
        }, {
            "x": 1855,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2363,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2655,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2947,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 3483,
            "y": 0,
            "glyph": "0.90"
        }, {
            "x": 4218,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 4557,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 5053,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 5568,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 5836,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 6175,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 55,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 6723.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004619565217391305, 0, 65.41853312758663], [0, 0.004619565217391305, 10.645652173913044]]
    }, {
        "text": "Pic",
        //pic",
        "fill": "#f1de0f",
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
        "parentId": 558,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1397.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.015347222222222224, 0, 138.87223392103982], [0, 0.015347222222222224, 30.840833333333336]]
    }, {
        "text": "&",
        //amp",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.9"
        }],
        "parentId": 160,
        "bbox": {
            "x": 15.864999999999995,
            "y": -814.135,
            "width": 823.27,
            "height": 928.27
        },
        "shapeColor": "3488bf",
        "matrix": [[0.02154696132596685, 0, 25.794167012198137], [0, 0.02154696132596685, 167.54143646408838]]
    }, {
        "text": "Tx",
        //tx",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.55"
        }, {
            "x": 555,
            "y": 0,
            "glyph": "0.91"
        }],
        "parentId": 964,
        "bbox": {
            "x": -97.5,
            "y": -815.5,
            "width": 1255,
            "height": 931
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01578571428571429, 0, 12.148726309452407], [0, 0.01578571428571429, 65.025]]
    }, {
        "text": "Job",
        //job",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.45"
        }, {
            "x": 291,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 827,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 5554,
        "bbox": {
            "x": -151.48000000000002,
            "y": -817.48,
            "width": 1586.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013132022471910112, 0, 57.81944554387435], [0, 0.013132022471910112, 189.01741573033706]]
    }, {
        "text": "IÌ‡zmir",
        //iÌ‡zmir",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.44"
        }, {
            "x": 291,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 1041,
            "y": 0,
            "glyph": "0.93"
        }, {
            "x": 1488,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2300,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2568,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 1359,
        "bbox": {
            "x": -12.820000000000007,
            "y": -824.82,
            "width": 3027.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009484609878310665, 0, 51.76360057265569], [0, 0.009484609878310665, 51.64395367484736]]
    }, {
        "text": "Antalya",
        //antalya",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1132,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1471,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1967,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.92"
        }, {
            "x": 2725,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 92,
        "bbox": {
            "x": -143.14000000000001,
            "y": -862.14,
            "width": 3449.28,
            "height": 1218.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006495633187772926, 0, 105.83207006264792], [0, 0.006495633187772926, 162.14339519650656]]
    }, {
        "text": "Sevilla",
        //sevilla",
        "fill": "#f1de0f",
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
            "glyph": "0.89"
        }, {
            "x": 1521,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1789,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2081,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2373,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 9119,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 2995.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007044198895027624, 0, 141.63591559563255], [0, 0.007044198895027624, 83.46546961325967]]
    }, {
        "text": "Cab",
        //cab",
        "fill": "#f1de0f",
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
            "glyph": "0.69"
        }],
        "parentId": 204,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1740.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011651131824234355, 0, 174.09753661784288], [0, 0.011651131824234355, 137.0677239063626]]
    }, {
        "text": "BahÃ§elievler",
        //bahÃ§elievler",
        "fill": "#f1de0f",
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
            "glyph": "0.75"
        }, {
            "x": 1627,
            "y": 0,
            "glyph": "0.169"
        }, {
            "x": 2078,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2586,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2878,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3146,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 3654,
            "y": 0,
            "glyph": "0.89"
        }, {
            "x": 4136,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 4428,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 4936,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 1512,
        "bbox": {
            "x": -66.14000000000001,
            "y": -859.14,
            "width": 5483.28,
            "height": 1218.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004639737991266376, 0, 145.17188203945136], [0, 0.004639737991266376, 169.65993449781658]]
    }, {
        "text": "Dgtsevilla",
        //dgtsevilla",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 1191,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1530,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1951,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.89"
        }, {
            "x": 2941,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3209,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3501,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3793,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 9115,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 4441.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005340744320927985, 0, 123.99603673272112], [0, 0.005340744320927985, 187.3500229555256]]
    }, {
        "text": "Bytyayla",
        //bytyayla",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.92"
        }, {
            "x": 1050,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1389,
            "y": 0,
            "glyph": "0.92"
        }, {
            "x": 1855,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2351,
            "y": 0,
            "glyph": "0.92"
        }, {
            "x": 2817,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3109,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 1513,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 3755.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005775911986103069, 0, 7.034047481181238], [0, 0.005775911986103069, 135.68406324351878]]
    }, {
        "text": "Dgtbarcelona",
        //dgtbarcelona",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 1191,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1530,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2070,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2566,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2906,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3357,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 3865,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 4157,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 4693,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 5240,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 9080,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 5888.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004619565217391305, 0, 47.25704070918532], [0, 0.004619565217391305, 18.645652173913042]]
    }, {
        "text": "Blue",
        //blue",
        "fill": "#f1de0f",
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
        "parentId": 273,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2026.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008412520961430968, 0, 139.25993571827837], [0, 0.008412520961430968, 101.18149007864177]]
    }, {
        "text": "Red",
        //red",
        "fill": "#f1de0f",
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
        "parentId": 272,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1726.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009267965077233042, 0, 173.8122229684352], [0, 0.009267965077233042, 145.2239841915592]]
    }, {
        "text": "Para",
        //para",
        "fill": "#f1de0f",
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
            "glyph": "0.68"
        }],
        "parentId": 7657,
        "bbox": {
            "x": -33.14,
            "y": -826.14,
            "width": 1976.28,
            "height": 952.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008310055865921788, 0, 10.112479188274747], [0, 0.008310055865921788, 143.4085195530726]]
    }, {
        "text": "Norte",
        //norte",
        "fill": "#f1de0f",
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
            "glyph": "0.85"
        }, {
            "x": 1549,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1888,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 1642,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2500.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007053941908713692, 0, 62.17086549360359], [0, 0.007053941908713692, 71.46535269709543]]
    }, {
        "text": "General",
        //general",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1120,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1667,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2175,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2515,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 3011,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 1533,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 3476.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 99.19486805952786], [0, 0.005870165745856353, 121.55455801104974]]
    }, {
        "text": "Sobre",
        //sobre",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1067,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 1607,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1947,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 8884,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 2598.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 70.97102727935243], [0, 0.005870165745856353, 156.55455801104972]]
    }, {
        "text": "Meteoalarm",
        //meteoalarm",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1299,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1638,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2146,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2682,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 3178,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3470,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 3966,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 4306,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 8882,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 5198.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 122.49243933108501], [0, 0.0047752808988764045, 44.64269662921348]]
    }, {
        "text": "Flower",
        //flower",
        "fill": "#f1de0f",
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
        "parentId": 429,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 3067.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0059691011235955055, 0, 108.03046973708008], [0, 0.0059691011235955055, 196.55337078651684]]
    }, {
        "text": "Buca",
        //buca",
        "fill": "#f1de0f",
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
            "glyph": "0.70"
        }, {
            "x": 1574,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 280,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2156.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007083333333333333, 0, 91.32908005862372], [0, 0.007083333333333333, 100.465]]
    }, {
        "text": "City",
        //city",
        "fill": "#f1de0f",
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
        "parentId": 727,
        "bbox": {
            "x": -95.305,
            "y": -863.3050000000001,
            "width": 1881.6100000000001,
            "height": 1219.6100000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008342420937840786, 0, 47.56938319958804], [0, 0.008342420937840786, 176.61480370774262]]
    }, {
        "text": "Alanya",
        //alanya",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 877,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1373,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1920,
            "y": 0,
            "glyph": "0.92"
        }, {
            "x": 2386,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 121,
        "bbox": {
            "x": -143.14000000000001,
            "y": -862.14,
            "width": 3110.28,
            "height": 1218.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004639737991266376, 0, 80.86913937885811], [0, 0.004639737991266376, 18.673853711790393]]
    }, {
        "text": "Green",
        //green",
        "fill": "#f1de0f",
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
        "parentId": 415,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2628.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 106.23300267420439], [0, 0.005870165745856353, 6.554558011049723]]
    }, {
        "text": "Pizza",
        //pizza",
        "fill": "#f1de0f",
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
            "glyph": "0.93"
        }, {
            "x": 1274,
            "y": 0,
            "glyph": "0.93"
        }, {
            "x": 1721,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 725,
        "bbox": {
            "x": -33.14,
            "y": -826.14,
            "width": 2302.28,
            "height": 952.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006824782187802517, 0, 159.8698935140368], [0, 0.006824782187802517, 102.36287035508145]]
    }, {
        "text": "Bursa",
        //bursa",
        "fill": "#f1de0f",
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
            "glyph": "0.85"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1884,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 64,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2466.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 78.76170356284621], [0, 0.005902777777777778, 6.554166666666667]]
    }, {
        "text": "Black",
        //black",
        "fill": "#f1de0f",
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
        "parentId": 159,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2444.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 184.82151070495894], [0, 0.005902777777777778, 88.55416666666666]]
    }, {
        "text": "Ambos",
        //ambos",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1397,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 1937,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2473,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 9101,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 3080.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004702627939142462, 0, 173.57820128837304], [0, 0.004702627939142462, 56.64356846473029]]
    }, {
        "text": "Drink",
        //drink",
        "fill": "#f1de0f",
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
        "parentId": 40,
        "bbox": {
            "x": -33.30500000000001,
            "y": -826.3050000000001,
            "width": 2429.61,
            "height": 953.61
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005927475592747559, 0, 168.08209670646633], [0, 0.005927475592747559, 156.57165271966528]]
    }, {
        "text": "IÅŸÄ±klar",
        //iÅŸÄ±klar",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.44"
        }, {
            "x": 291,
            "y": 0,
            "glyph": "0.269"
        }, {
            "x": 712,
            "y": 0,
            "glyph": "0.233"
        }, {
            "x": 980,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1459,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1751,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2247,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 95,
        "bbox": {
            "x": -45.81999999999999,
            "y": -849.8199999999999,
            "width": 2772.64,
            "height": 1207.6399999999999
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005616740088105726, 0, 41.06288200360716], [0, 0.005616740088105726, 77.38171806167401]]
    }, {
        "text": "Bambu",
        //bambu",
        "fill": "#f1de0f",
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
            "glyph": "0.80"
        }, {
            "x": 1892,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2432,
            "y": 0,
            "glyph": "0.88"
        }],
        "parentId": 10570,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 3057.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004722222222222222, 0, 147.10569646148423], [0, 0.004722222222222222, 156.64333333333335]]
    }, {
        "text": "Line",
        //line",
        "fill": "#f1de0f",
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
            "glyph": "0.81"
        }, {
            "x": 1332,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 732,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1943.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008177022274325908, 0, 37.8299531066823], [0, 0.008177022274325908, 126.36877659551457]]
    }, {
        "text": "Accidente",
        //accidente",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1036,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1487,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1755,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2293,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2801,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 3348,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3687,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 9143,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 4376.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004702627939142462, 0, 111.09969988333314], [0, 0.004702627939142462, 19.64356846473029]]
    }, {
        "text": "Valencia",
        //valencia",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.57"
        }, {
            "x": 568,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1064,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1356,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1864,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2411,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2862,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3130,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 8891,
        "bbox": {
            "x": -120.80000000000001,
            "y": -826.8,
            "width": 3799.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004722222222222222, 0, 84.95791389105985], [0, 0.004722222222222222, 28.643333333333334]]
    }, {
        "text": "Warung",
        //warung",
        "fill": "#f1de0f",
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
            "glyph": "0.85"
        }, {
            "x": 1664,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2203,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2750,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 10600,
        "bbox": {
            "x": -142.48000000000002,
            "y": -850.48,
            "width": 3502.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004450343535290444, 0, 83.33939725171768], [0, 0.004450343535290444, 197.66452641860727]]
    }, {
        "text": "Love",
        //love",
        "fill": "#f1de0f",
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
        "parentId": 199,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2143.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006705081194342588, 0, 106.03006809848088], [0, 0.006705081194342588, 127.7013552949221]]
    }, {
        "text": "San",
        //san",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1027,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 231,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1697.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.00846470185058259, 0, 98.4356237148732], [0, 0.00846470185058259, 49.987267938619105]]
    }, {
        "text": "Ankara",
        //ankara",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1132,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1611,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2107,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2447,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 50,
        "bbox": {
            "x": -110.635,
            "y": -829.635,
            "width": 3106.27,
            "height": 956.27
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004728789986091794, 0, 48.63833454656492], [0, 0.004728789986091794, 32.66216968011127]]
    }, {
        "text": "Day",
        //day",
        "fill": "#f1de0f",
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
        "parentId": 322,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 1823.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007654402102496715, 0, 41.02437582128778], [0, 0.007654402102496715, 70.23978924779722]]
    }, {
        "text": "Color",
        //color",
        "fill": "#f1de0f",
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
        "parentId": 35,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2447.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005930285196921684, 0, 14.117904028972385], [0, 0.005930285196921684, 53.29011944511189]]
    }, {
        "text": "Samsun",
        //samsun",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1027,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1839,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2260,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2799,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 1144,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 3469.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004696132596685083, 0, 138.17175399801135], [0, 0.004696132596685083, 19.64364640883978]]
    }, {
        "text": "Photo",
        //photo",
        "fill": "#f1de0f",
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
        "parentId": 19,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2620.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0055602182123373894, 0, 171.90238145195133], [0, 0.0055602182123373894, 71.3792690482282]]
    }, {
        "text": "Istanbul",
        //istanbul",
        "fill": "#f1de0f",
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
            "glyph": "0.87"
        }, {
            "x": 1051,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1547,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2094,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2634,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 3173,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 1839,
        "bbox": {
            "x": -13.480000000000004,
            "y": -817.48,
            "width": 3586.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 11.075749464466478], [0, 0.0047752808988764045, 88.64269662921349]]
    }, {
        "text": "Barcelona",
        //barcelona",
        "fill": "#f1de0f",
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
        }, {
            "x": 1420,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1871,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2379,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2671,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 3207,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 3754,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 3141,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 4336.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004244937789704806, 0, 18.939180287875093], [0, 0.004244937789704806, 68.53290486816655]]
    }, {
        "text": "Dgtvalencia",
        //dgtvalencia",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 1191,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1530,
            "y": 0,
            "glyph": "0.89"
        }, {
            "x": 2012,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2508,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2800,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 3308,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 3855,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4306,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 4574,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 9134,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 5222.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0033340109778410244, 0, 139.01660906688352], [0, 0.0033340109778410244, 104.91904251177462]]
    }, {
        "text": "Orang",
        //orang",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.50"
        }, {
            "x": 684,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1024,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1520,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2067,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 542,
        "bbox": {
            "x": -96.46000000000001,
            "y": -864.46,
            "width": 2775.92,
            "height": 1228.92
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0045995670995671, 0, 124.1072095094529], [0, 0.0045995670995671, 79.64989177489177]]
    }, {
        "text": "One",
        //one",
        "fill": "#f1de0f",
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
        "parentId": 104,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1872.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0067931456548347615, 0, 174.06958384332924], [0, 0.0067931456548347615, 151.33659980258156]]
    }, {
        "text": "White",
        //white",
        "fill": "#f1de0f",
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
        "parentId": 360,
        "bbox": {
            "x": -110.80000000000001,
            "y": -826.8,
            "width": 2670.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005445951500205507, 0, 45.331432387998355], [0, 0.005445951500205507, 183.48717948678726]]
    }, {
        "text": "Metro",
        //metro",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1299,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1638,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 728,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2614.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 185.10046139752515], [0, 0.0047752808988764045, 114.64269662921349]]
    }, {
        "text": "Others",
        //others",
        "fill": "#f1de0f",
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
        "parentId": 1478,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2977.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004696132596685083, 0, 81.03195906876294], [0, 0.004696132596685083, 138.64364640883977]]
    }, {
        "text": "Sur",
        //sur",
        "fill": "#f1de0f",
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
            "glyph": "0.85"
        }],
        "parentId": 2779,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1592.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008087149187592318, 0, 123.15299113737075], [0, 0.008087149187592318, 112.36912479070088]]
    }, {
        "text": "Benzinatakum",
        //benzinatakum",
        "fill": "#f1de0f",
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
            "glyph": "0.81"
        }, {
            "x": 1639,
            "y": 0,
            "glyph": "0.93"
        }, {
            "x": 2086,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2901,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 3397,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3736,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 4232,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 4711,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 5250,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 1143,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 6145.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0035416666666666665, 0, 128.4641499395713], [0, 0.0035416666666666665, 121.7325]]
    }, {
        "text": "Huevar",
        //huevar",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.43"
        }, {
            "x": 672,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1211,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1719,
            "y": 0,
            "glyph": "0.89"
        }, {
            "x": 2201,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2697,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 9114,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 3176.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 3.9644911469278195], [0, 0.0047752808988764045, 80.64269662921349]]
    }, {
        "text": "Mi",
        //mi",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.76"
        }],
        "parentId": 550,
        "bbox": {
            "x": -31.820000000000007,
            "y": -824.82,
            "width": 1129.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010602678571428572, 0, 122.84877232142857], [0, 0.010602678571428572, 15.00515558403848]]
    }, {
        "text": "SerdiÌ‡van",
        //serdiÌ‡van",
        "fill": "#f1de0f",
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
            "glyph": "0.85"
        }, {
            "x": 1379,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1917,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2185,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 2935,
            "y": 0,
            "glyph": "0.89"
        }, {
            "x": 3417,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 3913,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 1494,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 4583.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.003522099447513812, 0, 79.20704824577999], [0, 0.003522099447513812, 43.732734806629836]]
    }, {
        "text": "Viento",
        //viento",
        "fill": "#f1de0f",
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
            "glyph": "0.72"
        }, {
            "x": 1344,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1891,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 2230,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 8885,
        "bbox": {
            "x": -120.80000000000001,
            "y": -826.8,
            "width": 2956.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004722222222222222, 0, 165.38649894453513], [0, 0.004722222222222222, 43.64333333333333]]
    }, {
        "text": "House",
        //house",
        "fill": "#f1de0f",
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
        "parentId": 534,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2776.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 124.08103834333349], [0, 0.0047752808988764045, 192.6426966292135]]
    }, {
        "text": "Yg",
        //yg",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.60"
        }, {
            "x": 558,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 801,
        "bbox": {
            "x": -142.48000000000002,
            "y": -850.48,
            "width": 1310.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009257425742574257, 0, 110.75094059405941], [0, 0.009257425742574257, 147.92249927163158]]
    }, {
        "text": "Mantenimiento",
        //mantenimiento",
        "fill": "#f1de0f",
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
            "glyph": "0.81"
        }, {
            "x": 1834,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 2173,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2681,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 3228,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 3496,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 4308,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 4576,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 5084,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 5631,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 5970,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 9103,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 6609.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.002361111111111111, 0, 149.25655101479666], [0, 0.002361111111111111, 129.82166666666666]]
    }, {
        "text": "Kartal",
        //kartal",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.46"
        }, {
            "x": 610,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1106,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1446,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2281,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 60,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2713.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 182.11023641669576], [0, 0.0047752808988764045, 128.64269662921348]]
    }, {
        "text": "Road",
        //road",
        "fill": "#f1de0f",
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
            "glyph": "0.68"
        }, {
            "x": 1627,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 706,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2250.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 92.15973176968264], [0, 0.005902777777777778, 105.55416666666667]]
    }, {
        "text": "Manila",
        //manila",
        "fill": "#f1de0f",
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
            "glyph": "0.81"
        }, {
            "x": 1834,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 2102,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 729,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2976.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004722222222222222, 0, 153.24711699159687], [0, 0.004722222222222222, 174.64333333333332]]
    }, {
        "text": "Bu",
        //bu",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.88"
        }],
        "parentId": 764,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1209.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.00992798353909465, 0, 110.83112139917695], [0, 0.00992798353909465, 68.8179309369223]]
    }, {
        "text": "Hiring",
        //hiring",
        "fill": "#f1de0f",
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
            "glyph": "0.85"
        }, {
            "x": 1280,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1548,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2095,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 5561,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 2773.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004619565217391305, 0, 29.214504080041284], [0, 0.004619565217391305, 150.64565217391305]]
    }, {
        "text": "Ap",
        //ap",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.83"
        }],
        "parentId": 7818,
        "bbox": {
            "x": -142.315,
            "y": -861.315,
            "width": 1369.63,
            "height": 1211.63
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007951356407857811, 0, 84.68638914873713], [0, 0.007951356407857811, 61.89842317204128]]
    }, {
        "text": "Happy",
        //happy",
        "fill": "#f1de0f",
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
        "parentId": 411,
        "bbox": {
            "x": -64.32500000000002,
            "y": -849.325,
            "width": 2920.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004672006102212052, 0, 16.977879481311977], [0, 0.004672006102212052, 155.65969594357313]]
    }, {
        "text": "Yang",
        //yang",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.60"
        }, {
            "x": 558,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1054,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1601,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 650,
        "bbox": {
            "x": -142.48000000000002,
            "y": -850.48,
            "width": 2353.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0054067218704335115, 0, 151.40674622503653], [0, 0.0054067218704335115, 43.29059241373596]]
    }, {
        "text": "Adana",
        //adana",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1123,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1619,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2166,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 1271,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 2826.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004702627939142462, 0, 95.3335760810882], [0, 0.004702627939142462, 19.64356846473029]]
    }, {
        "text": "Gold",
        //gold",
        "fill": "#f1de0f",
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
            "glyph": "0.79"
        }, {
            "x": 1440,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 260,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2093.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005983827493261456, 0, 145.11490566037736], [0, 0.005983827493261456, 94.34181294080402]]
    }, {
        "text": "Claw",
        //claw",
        "fill": "#f1de0f",
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
            "glyph": "0.68"
        }, {
            "x": 1359,
            "y": 0,
            "glyph": "0.90"
        }],
        "parentId": 770,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2268.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005467980295566503, 0, 33.143793103448274], [0, 0.005467980295566503, 48.1563547188828]]
    }, {
        "text": "Ada",
        //ada",
        "fill": "#f1de0f",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1123,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 1994,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 1783.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0065372168284789645, 0, 98.39770226537217], [0, 0.0065372168284789645, 55.22440615034165]]
    }]
});