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
        "x": 2.889910343502107,
        "y": 1.5249999999999995,
        "width": 195.73508965649793,
        "height": 195.5
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
        "0.58": "M 222 -231 L 238 -115 L 239 -115 L 256 -233 L 400 -700 L 440 -700 L 585 -231 L 602 -115 L 603 -115 L 621 -233 L 739 -700 L 820 -700 L 625 11 L 579 11 L 437 -458 L 419 -564 L 414 -564 L 396 -457 L 254 11 L 208 11 L 8 -700 L 96 -700 L 222 -231 Z ",
        "0.76": "M 94 -500 L 174 -500 L 174 0 L 94 0 L 94 -500 M 77 -652 Q 77 -675 92.5 -691.5 Q 108 -708 132 -708 Q 156 -708 173 -691.5 Q 190 -675 190 -652 Q 190 -629 173 -614 Q 156 -599 132 -599 Q 108 -599 92.5 -614 Q 77 -629 77 -652 Z ",
        "0.72": "M 442 -40 Q 412 -16 366.5 -2 Q 321 12 270 12 Q 213 12 171 -6.5 Q 129 -25 102 -59.5 Q 75 -94 62 -142 Q 49 -190 49 -250 Q 49 -378 106 -445 Q 163 -512 269 -512 Q 303 -512 337 -504.5 Q 371 -497 398 -476 Q 425 -455 442 -416.5 Q 459 -378 459 -315 Q 459 -282 453 -242 L 132 -242 Q 132 -198 141 -164 Q 150 -130 169 -106.5 Q 188 -83 218.5 -70.5 Q 249 -58 293 -58 Q 327 -58 361 -70 Q 395 -82 412 -98 L 442 -40 M 270 -442 Q 211 -442 175.5 -411 Q 140 -380 133 -305 L 381 -305 Q 381 -381 352 -411.5 Q 323 -442 270 -442 Z ",
        "0.51": "M 85 -693 Q 123 -702 167 -705 Q 211 -708 254 -708 Q 300 -708 347.5 -699 Q 395 -690 434 -666 Q 473 -642 497.5 -600 Q 522 -558 522 -493 Q 522 -429 499 -385 Q 476 -341 438 -313.5 Q 400 -286 351 -274 Q 302 -262 250 -262 Q 245 -262 233.5 -262 Q 222 -262 209.5 -262.5 Q 197 -263 185 -264 Q 173 -265 168 -266 L 168 0 L 85 0 L 85 -693 M 256 -636 Q 230 -636 206 -635 Q 182 -634 168 -630 L 168 -340 Q 173 -338 184 -337.5 Q 195 -337 207 -336.5 Q 219 -336 230 -336 Q 241 -336 246 -336 Q 280 -336 313.5 -342.5 Q 347 -349 374 -366 Q 401 -383 417.5 -414 Q 434 -445 434 -493 Q 434 -534 418.5 -561.5 Q 403 -589 377.5 -605.5 Q 352 -622 320 -629 Q 288 -636 256 -636 Z ",
        "0.88": "M 149 -500 L 149 -215 Q 149 -176 153.5 -146.5 Q 158 -117 169 -97.5 Q 180 -78 199 -68 Q 218 -58 247 -58 Q 274 -58 295 -66.5 Q 316 -75 332.5 -90 Q 349 -105 361.5 -124.5 Q 374 -144 382 -166 L 382 -500 L 462 -500 L 462 -142 Q 462 -106 464.5 -67.5 Q 467 -29 473 0 L 418 0 L 398 -79 L 393 -79 Q 370 -40 331 -14 Q 292 12 232 12 Q 192 12 161.5 2.5 Q 131 -7 110.5 -31 Q 90 -55 79.5 -95.5 Q 69 -136 69 -198 L 69 -500 L 149 -500 Z ",
        "0.37": "M 507 -540 Q 507 -515 499 -489 Q 491 -463 475 -440.5 Q 459 -418 434 -401 Q 409 -384 375 -375 L 375 -371 Q 405 -366 432.5 -354 Q 460 -342 481 -321 Q 502 -300 515 -270 Q 528 -240 528 -199 Q 528 -145 505.5 -105.5 Q 483 -66 446.5 -41 Q 410 -16 363 -4 Q 316 8 267 8 Q 250 8 227 8 Q 204 8 179 6.5 Q 154 5 129 2.5 Q 104 0 85 -5 L 85 -694 Q 122 -700 171 -704 Q 220 -708 278 -708 Q 317 -708 357.5 -701.5 Q 398 -695 431 -676.5 Q 464 -658 485.5 -625 Q 507 -592 507 -540 M 275 -64 Q 307 -64 337 -71.5 Q 367 -79 390 -95.5 Q 413 -112 426.5 -136 Q 440 -160 440 -193 Q 440 -234 423.5 -259 Q 407 -284 380.5 -298 Q 354 -312 321 -317 Q 288 -322 255 -322 L 168 -322 L 168 -71 Q 175 -69 188 -68 Q 201 -67 216 -66 Q 231 -65 247 -64.5 Q 263 -64 275 -64 M 220 -392 Q 237 -392 261 -393 Q 285 -394 301 -396 Q 325 -404 346 -415.5 Q 367 -427 383.5 -442.5 Q 400 -458 409.5 -478.5 Q 419 -499 419 -523 Q 419 -556 406.5 -577.5 Q 394 -599 373 -612 Q 352 -625 325 -630.5 Q 298 -636 270 -636 Q 237 -636 209.5 -634.5 Q 182 -633 168 -630 L 168 -392 L 220 -392 Z ",
        "0.79": "M 166 -123 Q 166 -88 178 -73 Q 190 -58 212 -58 Q 225 -58 240 -60 Q 255 -62 274 -69 L 283 -6 Q 267 2 238.5 7 Q 210 12 189 12 Q 144 12 115 -13.5 Q 86 -39 86 -100 L 86 -700 L 166 -700 L 166 -123 Z ",
        "0.68": "M 69 -463 Q 107 -486 157.5 -497 Q 208 -508 263 -508 Q 315 -508 346.5 -494 Q 378 -480 394.5 -457.5 Q 411 -435 416.5 -408 Q 422 -381 422 -354 Q 422 -294 419 -237 Q 416 -180 416 -129 Q 416 -92 419 -59 Q 422 -26 430 2 L 371 2 L 350 -68 L 345 -68 Q 336 -54 322.5 -40.5 Q 309 -27 290 -16.5 Q 271 -6 246 1 Q 221 8 189 8 Q 157 8 129.5 -2 Q 102 -12 82 -30.5 Q 62 -49 50.5 -75 Q 39 -101 39 -134 Q 39 -178 57 -207.5 Q 75 -237 107.5 -254.5 Q 140 -272 185.5 -279.5 Q 231 -287 286 -287 Q 300 -287 313.5 -287 Q 327 -287 341 -285 Q 344 -315 344 -339 Q 344 -394 322 -416 Q 300 -438 242 -438 Q 225 -438 205.5 -435.5 Q 186 -433 165.5 -428.5 Q 145 -424 126.5 -417.5 Q 108 -411 94 -403 L 69 -463 M 211 -62 Q 239 -62 261 -69.5 Q 283 -77 299 -88.5 Q 315 -100 325.5 -114 Q 336 -128 341 -141 L 341 -224 Q 327 -225 312.5 -225.5 Q 298 -226 284 -226 Q 253 -226 223.5 -222.5 Q 194 -219 171.5 -209.5 Q 149 -200 135.5 -183.5 Q 122 -167 122 -142 Q 122 -107 147 -84.5 Q 172 -62 211 -62 Z ",
        "0.78": "M 203 -225 L 157 -225 L 157 0 L 77 0 L 77 -700 L 157 -700 L 157 -274 L 198 -288 L 353 -500 L 446 -500 L 293 -299 L 252 -266 L 302 -226 L 469 0 L 370 0 L 203 -225 Z ",
        "0.81": "M 398 0 L 398 -285 Q 398 -363 375.5 -402.5 Q 353 -442 293 -442 Q 240 -442 205.5 -413.5 Q 171 -385 157 -342 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 176 -471 216.5 -491.5 Q 257 -512 313 -512 Q 354 -512 385 -502.5 Q 416 -493 436.5 -469 Q 457 -445 467.5 -404.5 Q 478 -364 478 -302 L 478 0 L 398 0 Z ",
        "0.9": "M 118 -187 Q 118 -227 132 -263.5 Q 146 -300 170 -331 Q 194 -362 224.5 -388 Q 255 -414 288 -434 Q 264 -470 246.5 -506 Q 229 -542 229 -584 Q 229 -608 237 -631 Q 245 -654 262.5 -672 Q 280 -690 307.5 -701 Q 335 -712 374 -712 Q 415 -712 443 -701.5 Q 471 -691 488 -674 Q 505 -657 512.5 -636 Q 520 -615 520 -593 Q 520 -551 487.5 -506.5 Q 455 -462 385 -421 Q 401 -392 422.5 -361.5 Q 444 -331 468 -301 Q 492 -271 517 -241.5 Q 542 -212 567 -187 Q 578 -199 589 -217.5 Q 600 -236 610.5 -256.5 Q 621 -277 629.5 -299 Q 638 -321 645 -341 L 707 -312 Q 701 -295 690 -271.5 Q 679 -248 665.5 -223.5 Q 652 -199 638 -176.5 Q 624 -154 612 -139 Q 633 -119 650 -104.5 Q 667 -90 681.5 -79.5 Q 696 -69 709.5 -60.5 Q 723 -52 737 -44 L 687 12 Q 634 -14 566 -81 Q 548 -63 526.5 -46.5 Q 505 -30 478 -17 Q 451 -4 418.5 4 Q 386 12 347 12 Q 300 12 258.5 -1 Q 217 -14 186 -39.5 Q 155 -65 136.5 -102 Q 118 -139 118 -187 M 519 -131 Q 490 -160 462 -194 Q 434 -228 408.5 -262 Q 383 -296 361.5 -327.5 Q 340 -359 325 -383 Q 298 -363 275 -342 Q 252 -321 234.5 -297.5 Q 217 -274 207.5 -247 Q 198 -220 198 -189 Q 198 -158 211 -133.5 Q 224 -109 246.5 -92.5 Q 269 -76 298 -67 Q 327 -58 359 -58 Q 384 -58 407.5 -64.5 Q 431 -71 452 -81 Q 473 -91 490.5 -104 Q 508 -117 519 -131 M 307 -584 Q 307 -554 319.5 -524.5 Q 332 -495 352 -466 Q 405 -500 425.5 -528 Q 446 -556 446 -577 Q 446 -609 430.5 -629 Q 415 -649 377 -649 Q 341 -649 324 -631 Q 307 -613 307 -584 Z ",
        "0.55": "M 537 -626 L 319 -626 L 319 0 L 236 0 L 236 -626 L 18 -626 L 18 -700 L 537 -700 L 537 -626 Z ",
        "0.57": "M 267 -219 L 291 -113 L 292 -113 L 318 -221 L 487 -700 L 570 -700 L 305 11 L 268 11 L -2 -700 L 89 -700 L 267 -219 Z ",
        "0.175": "M 94 -500 L 174 -500 L 174 0 L 94 0 L 94 -500 M 154 -720 L 243 -720 L 243 -699 L 142 -571 L 95 -571 L 154 -720 Z ",
        "0.44": "M 104 -700 L 187 -700 L 187 0 L 104 0 L 104 -700 Z ",
        "0.71": "M 461 -172 Q 461 -121 462 -79.5 Q 463 -38 471 2 L 417 2 L 397 -69 L 393 -69 Q 373 -34 335 -11 Q 297 12 246 12 Q 146 12 97.5 -51 Q 49 -114 49 -248 Q 49 -376 109.5 -442.5 Q 170 -509 276 -509 Q 313 -509 334.5 -505 Q 356 -501 381 -492 L 381 -700 L 461 -700 L 461 -172 M 259 -58 Q 310 -58 340 -84.5 Q 370 -111 381 -165 L 381 -413 Q 363 -427 340 -433 Q 317 -439 279 -439 Q 210 -439 171 -393.5 Q 132 -348 132 -248 Q 132 -207 138.5 -172 Q 145 -137 160 -112 Q 175 -87 199.5 -72.5 Q 224 -58 259 -58 Z ",
        "0.74": "M 460 23 Q 460 120 408.5 166 Q 357 212 256 212 Q 196 212 159.5 204.5 Q 123 197 97 185 L 118 117 Q 141 126 169 134 Q 197 142 242 142 Q 284 142 310.5 134.5 Q 337 127 353 109.5 Q 369 92 375 64.5 Q 381 37 381 -1 L 381 -49 L 377 -49 Q 357 -20 326 -4.5 Q 295 11 245 11 Q 144 11 96.5 -52 Q 49 -115 49 -248 Q 49 -376 110 -442.5 Q 171 -509 290 -509 Q 347 -509 387.5 -500 Q 428 -491 460 -479 L 460 23 M 259 -59 Q 310 -59 339 -84.5 Q 368 -110 380 -164 L 380 -420 Q 340 -439 278 -439 Q 210 -439 171 -393 Q 132 -347 132 -249 Q 132 -207 139 -172 Q 146 -137 161 -112 Q 176 -87 200 -73 Q 224 -59 259 -59 Z ",
        "0.38": "M 533 -29 Q 503 -6 457 3 Q 411 12 359 12 Q 296 12 241 -9.5 Q 186 -31 145 -75 Q 104 -119 80 -187.5 Q 56 -256 56 -350 Q 56 -448 82.5 -516.5 Q 109 -585 152.5 -628.5 Q 196 -672 250 -692 Q 304 -712 360 -712 Q 420 -712 458 -705.5 Q 496 -699 523 -688 L 503 -615 Q 455 -638 366 -638 Q 325 -638 285 -623 Q 245 -608 213.5 -574 Q 182 -540 163 -485 Q 144 -430 144 -350 Q 144 -278 162 -224 Q 180 -170 211.5 -134 Q 243 -98 285.5 -80 Q 328 -62 378 -62 Q 423 -62 456.5 -71 Q 490 -80 513 -94 L 533 -29 Z ",
        "0.73": "M 22 -500 L 100 -500 L 100 -528 Q 100 -574 107.5 -608 Q 115 -642 132 -663.5 Q 149 -685 176 -695.5 Q 203 -706 243 -706 Q 275 -706 299.5 -702 Q 324 -698 351 -687 L 333 -620 Q 310 -630 289.5 -633 Q 269 -636 251 -636 Q 225 -636 210.5 -628 Q 196 -620 189.5 -604.5 Q 183 -589 181.5 -566.5 Q 180 -544 180 -514 L 180 -500 L 313 -500 L 313 -430 L 180 -430 L 180 0 L 100 0 L 100 -430 L 22 -430 L 22 -500 Z ",
        "0.85": "M 313 -423 Q 283 -433 256 -433 Q 213 -433 188 -409.5 Q 163 -386 157 -350 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 171 -473 197.5 -491.5 Q 224 -510 265 -510 Q 294 -510 330 -500 L 313 -423 Z ",
        "0.36": "M 418 -194 L 160 -194 L 90 0 L 8 0 L 273 -711 L 311 -711 L 577 0 L 490 0 L 418 -194 M 187 -266 L 393 -266 L 315 -479 L 290 -585 L 289 -585 L 264 -477 L 187 -266 Z ",
        "0.69": "M 77 -700 L 157 -700 L 157 -451 L 161 -451 Q 184 -480 219.5 -496 Q 255 -512 297 -512 Q 394 -512 442.5 -450 Q 491 -388 491 -258 Q 491 -127 427 -59 Q 363 9 247 9 Q 191 9 145.5 -3 Q 100 -15 77 -29 L 77 -700 M 283 -442 Q 233 -442 202 -414 Q 171 -386 157 -335 L 157 -83 Q 176 -72 203 -66.5 Q 230 -61 259 -61 Q 327 -61 367.5 -109 Q 408 -157 408 -259 Q 408 -298 401 -332 Q 394 -366 379 -390 Q 364 -414 340.5 -428 Q 317 -442 283 -442 Z ",
        "0.43": "M 504 -321 L 168 -321 L 168 0 L 85 0 L 85 -700 L 168 -700 L 168 -395 L 504 -395 L 504 -700 L 587 -700 L 587 0 L 504 0 L 504 -321 Z ",
        "0.181": "M 49 -250 Q 49 -377 105.5 -444.5 Q 162 -512 268 -512 Q 324 -512 365.5 -493.5 Q 407 -475 434 -440.5 Q 461 -406 474 -357.5 Q 487 -309 487 -250 Q 487 -123 430.5 -55.5 Q 374 12 268 12 Q 212 12 170.5 -6.5 Q 129 -25 102 -59.5 Q 75 -94 62 -142.5 Q 49 -191 49 -250 M 132 -250 Q 132 -212 139.5 -177 Q 147 -142 163 -116 Q 179 -90 205 -74 Q 231 -58 268 -58 Q 404 -57 404 -250 Q 404 -289 396.5 -324 Q 389 -359 373 -385 Q 357 -411 331 -426.5 Q 305 -442 268 -442 Q 132 -443 132 -250 M 286 -720 L 375 -720 L 375 -699 L 274 -571 L 227 -571 L 286 -720 Z ",
        "0.46": "M 215 -324 L 168 -324 L 168 0 L 85 0 L 85 -700 L 168 -700 L 168 -374 L 213 -388 L 448 -700 L 544 -700 L 310 -399 L 268 -366 L 319 -326 L 575 0 L 470 0 L 215 -324 Z ",
        "0.90": "M 401 -500 L 516 -208 L 541 -112 L 543 -112 L 562 -210 L 651 -500 L 727 -500 L 559 11 L 520 11 L 389 -319 L 370 -401 L 367 -401 L 347 -318 L 221 11 L 182 11 L 8 -500 L 95 -500 L 194 -209 L 211 -112 L 212 -112 L 236 -211 L 343 -500 L 401 -500 Z ",
        "0.42": "M 321 -349 L 556 -349 L 556 -41 Q 540 -29 517.5 -19 Q 495 -9 469.5 -2 Q 444 5 416.5 8.5 Q 389 12 363 12 Q 296 12 240 -9.5 Q 184 -31 143 -75.5 Q 102 -120 79 -188.5 Q 56 -257 56 -350 Q 56 -447 84 -516 Q 112 -585 157 -628.5 Q 202 -672 258 -692 Q 314 -712 370 -712 Q 430 -712 469 -705.5 Q 508 -699 535 -688 L 514 -615 Q 466 -638 377 -638 Q 335 -638 293.5 -623.5 Q 252 -609 219 -575 Q 186 -541 165 -486 Q 144 -431 144 -350 Q 144 -276 161 -222 Q 178 -168 208.5 -132.5 Q 239 -97 282 -79.5 Q 325 -62 376 -62 Q 440 -62 485 -87 L 485 -282 L 321 -302 L 321 -349 Z ",
        "0.39": "M 85 -700 Q 104 -703 127.5 -704.5 Q 151 -706 176.5 -706.5 Q 202 -707 226.5 -707.5 Q 251 -708 272 -708 Q 356 -708 417.5 -682 Q 479 -656 519 -609.5 Q 559 -563 578.5 -498 Q 598 -433 598 -355 Q 598 -284 579.5 -218.5 Q 561 -153 521 -102.5 Q 481 -52 417 -21.5 Q 353 9 262 9 Q 246 9 220.5 8.5 Q 195 8 168 6.5 Q 141 5 118 4 Q 95 3 85 1 L 85 -700 M 274 -634 Q 261 -634 245.5 -634 Q 230 -634 215 -633 Q 200 -632 187.5 -631 Q 175 -630 168 -629 L 168 -69 Q 173 -68 187 -67.5 Q 201 -67 216 -66.5 Q 231 -66 245 -65.5 Q 259 -65 264 -65 Q 334 -65 381.5 -89 Q 429 -113 457.5 -153.5 Q 486 -194 498 -246.5 Q 510 -299 510 -355 Q 510 -404 499 -453.5 Q 488 -503 461 -543 Q 434 -583 388.5 -608.5 Q 343 -634 274 -634 Z ",
        "0.50": "M 56 -350 Q 56 -525 130 -618.5 Q 204 -712 341 -712 Q 415 -712 469 -686 Q 523 -660 558.5 -612.5 Q 594 -565 611 -498.5 Q 628 -432 628 -350 Q 628 -175 553.5 -81.5 Q 479 12 341 12 Q 268 12 214.5 -14 Q 161 -40 125.5 -87.5 Q 90 -135 73 -201.5 Q 56 -268 56 -350 M 144 -350 Q 144 -292 155.5 -240 Q 167 -188 191 -148.5 Q 215 -109 252.5 -85.5 Q 290 -62 341 -62 Q 434 -62 487 -132.5 Q 540 -203 540 -350 Q 540 -407 528.5 -459.5 Q 517 -512 492.5 -551.5 Q 468 -591 430.5 -614.5 Q 393 -638 341 -638 Q 249 -638 196.5 -567.5 Q 144 -497 144 -350 Z ",
        "0.48": "M 623 -470 L 633 -575 L 628 -575 L 590 -479 L 408 -163 L 383 -163 L 190 -480 L 154 -575 L 149 -575 L 163 -471 L 163 0 L 85 0 L 85 -700 L 147 -700 L 366 -342 L 399 -264 L 401 -264 L 432 -344 L 641 -700 L 706 -700 L 706 0 L 623 0 L 623 -470 Z ",
        "0.47": "M 499 0 L 85 0 L 85 -700 L 168 -700 L 168 -74 L 499 -74 L 499 0 Z ",
        "0.89": "M 221 -207 L 249 -112 L 250 -112 L 275 -209 L 387 -500 L 473 -500 L 260 11 L 226 11 L 9 -500 L 101 -500 L 221 -207 Z ",
        "0.53": "M 85 -693 Q 123 -700 172.5 -704 Q 222 -708 263 -708 Q 309 -708 350.5 -698 Q 392 -688 423.5 -665 Q 455 -642 474 -605 Q 493 -568 493 -515 Q 493 -433 448 -382 Q 403 -331 334 -314 L 382 -277 L 556 0 L 459 0 L 266 -302 L 168 -317 L 168 0 L 85 0 L 85 -693 M 265 -636 Q 252 -636 238 -636 Q 224 -636 211 -635 Q 198 -634 186.5 -633 Q 175 -632 168 -630 L 168 -372 L 246 -372 Q 315 -372 360 -406 Q 405 -440 405 -512 Q 405 -566 368 -601 Q 331 -636 265 -636 Z ",
        "0.92": "M 224 -176 L 252 -80 L 257 -80 L 279 -177 L 376 -500 L 457 -500 L 309 -51 Q 292 -2 275.5 44 Q 259 90 239 126 Q 219 162 194 183.5 Q 169 205 136 205 Q 100 205 77 195 L 91 126 Q 104 131 116 131 Q 144 131 170 101.5 Q 196 72 213 0 L 12 -500 L 104 -500 L 224 -176 Z ",
        "0.49": "M 211 -458 L 157 -559 L 153 -559 L 163 -458 L 163 0 L 85 0 L 85 -711 L 129 -711 L 464 -244 L 516 -148 L 521 -148 L 510 -244 L 510 -700 L 588 -700 L 588 11 L 544 11 L 211 -458 Z ",
        "0.56": "M 487 -700 L 567 -700 L 567 -233 Q 567 -170 550.5 -124 Q 534 -78 503.5 -48.5 Q 473 -19 430 -5 Q 387 9 335 9 Q 211 9 148 -47 Q 85 -103 85 -217 L 85 -700 L 168 -700 L 168 -256 Q 168 -203 178.5 -166.5 Q 189 -130 210 -107.5 Q 231 -85 262.5 -75 Q 294 -65 336 -65 Q 417 -65 452 -109.5 Q 487 -154 487 -256 L 487 -700 Z ",
        "0.80": "M 370 0 L 370 -283 Q 370 -323 366.5 -352.5 Q 363 -382 353 -402 Q 343 -422 324.5 -432 Q 306 -442 276 -442 Q 230 -442 199.5 -414 Q 169 -386 157 -344 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 179 -471 214.5 -491.5 Q 250 -512 307 -512 Q 355 -512 385.5 -493.5 Q 416 -475 433 -429 Q 456 -468 496.5 -490 Q 537 -512 588 -512 Q 630 -512 659 -502.5 Q 688 -493 707 -469 Q 726 -445 734.5 -404 Q 743 -363 743 -300 L 743 0 L 663 0 L 663 -301 Q 663 -337 659.5 -363.5 Q 656 -390 645.5 -407.5 Q 635 -425 616.5 -433.5 Q 598 -442 568 -442 Q 518 -442 490 -414 Q 462 -386 450 -334 L 450 0 L 370 0 Z ",
        "0.54": "M 401 -178 Q 401 -220 376 -246.5 Q 351 -273 313.5 -293.5 Q 276 -314 232 -332 Q 188 -350 150.5 -375.5 Q 113 -401 88 -438.5 Q 63 -476 63 -534 Q 63 -616 120 -664 Q 177 -712 282 -712 Q 343 -712 393 -703 Q 443 -694 471 -680 L 446 -607 Q 423 -618 378.5 -628 Q 334 -638 278 -638 Q 212 -638 179 -608.5 Q 146 -579 146 -539 Q 146 -500 171 -474 Q 196 -448 233.5 -427.5 Q 271 -407 315 -387 Q 359 -367 396.5 -340.5 Q 434 -314 459 -277 Q 484 -240 484 -185 Q 484 -140 468 -104 Q 452 -68 421 -42 Q 390 -16 346 -2 Q 302 12 246 12 Q 171 12 122 0.5 Q 73 -11 46 -25 L 74 -100 Q 97 -87 142 -74.5 Q 187 -62 243 -62 Q 276 -62 305 -68.5 Q 334 -75 355 -89.5 Q 376 -104 388.5 -126 Q 401 -148 401 -178 Z ",
        "0.60": "M 239 -278 L 8 -700 L 105 -700 L 269 -394 L 286 -333 L 287 -333 L 305 -396 L 462 -700 L 551 -700 L 322 -279 L 322 0 L 239 0 L 239 -278 Z ",
        "0.52": "M 704 171 Q 680 178 657 180.5 Q 634 183 611 183 Q 561 183 513.5 172.5 Q 466 162 421.5 149.5 Q 377 137 336 126.5 Q 295 116 258 116 Q 234 116 212 122 L 212 49 Q 226 46 239 44 Q 252 42 266 42 Q 308 42 349.5 52.5 Q 391 63 434 75.5 Q 477 88 522 98.5 Q 567 109 617 109 Q 661 109 704 99 L 704 171 M 56 -350 Q 56 -525 130 -618.5 Q 204 -712 341 -712 Q 415 -712 469 -686 Q 523 -660 558.5 -612.5 Q 594 -565 611 -498.5 Q 628 -432 628 -350 Q 628 -175 553.5 -81.5 Q 479 12 341 12 Q 268 12 214.5 -14 Q 161 -40 125.5 -87.5 Q 90 -135 73 -201.5 Q 56 -268 56 -350 M 144 -350 Q 144 -292 155.5 -240 Q 167 -188 191 -148.5 Q 215 -109 252.5 -85.5 Q 290 -62 341 -62 Q 434 -62 487 -132.5 Q 540 -203 540 -350 Q 540 -407 528.5 -459.5 Q 517 -512 492.5 -551.5 Q 468 -591 430.5 -614.5 Q 393 -638 341 -638 Q 249 -638 196.5 -567.5 Q 144 -497 144 -350 Z "
    },
    "tags": [{
        "text": "https://t.co",
        //co",
        "fill": "#ffffff",
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
        "parentId": 9,
        "bbox": {
            "x": -73.48000000000002,
            "y": -862.48,
            "width": 4828.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04100877192982456, 0, 3.99846491228072], [0, 0.04100877192982456, 110.4982456140351]]
    }, {
        "text": "White",
        //white",
        "fill": "#ffffff",
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
        "parentId": 2,
        "bbox": {
            "x": -110.80000000000001,
            "y": -826.8,
            "width": 2670.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04675, 0, 38.628847761919964], [0, 0.04675, 77.04013680798327]]
    }, {
        "text": "Putih",
        //putih",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1098,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1437,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1705,
            "y": 0,
            "glyph": "0.75"
        }],
        "parentId": 3972,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2335.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04675, 0, 59.63535167164273], [0, 0.04675, 159.69528679611722]]
    }, {
        "text": "Black",
        //black",
        "fill": "#ffffff",
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
        "parentId": 81,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2444.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.03777777777777778, 0, 54.04785869432612], [0, 0.03777777777777778, 41.14666666666666]]
    }, {
        "text": "Blanco",
        //blanco",
        "fill": "#ffffff",
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
            "glyph": "0.81"
        }, {
            "x": 1919,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2370,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 2811,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 3009.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.030694444444444448, 0, 49.69735285840555], [0, 0.030694444444444448, 184.68166666666667]]
    }, {
        "text": "&",
        //amp",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.9"
        }],
        "parentId": 83,
        "bbox": {
            "x": 15.864999999999995,
            "y": -814.135,
            "width": 823.27,
            "height": 928.27
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04822713219214238, 0, 17.88904257631496], [0, 0.04822713219214238, 149.57511519777884]]
    }, {
        "text": "Beach",
        //beach",
        "fill": "#ffffff",
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
        "parentId": 903,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2669.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01888888888888889, 0, 144.5804950265255], [0, 0.01888888888888889, 125.57333333333334]]
    }, {
        "text": "Tipo",
        //tipo",
        "fill": "#ffffff",
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
        "parentId": 29246,
        "bbox": {
            "x": -131.82,
            "y": -857.8199999999999,
            "width": 2132.64,
            "height": 1207.6399999999999
        },
        "shapeColor": "3488bf",
        "matrix": [[0.019658590308370045, 0, 154.3875334533911], [0, 0.019658590308370045, 83.49328193832598]]
    }, {
        "text": "VÃ­a",
        //vÃ­a",
        "fill": "#ffffff",
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
        "parentId": 29251,
        "bbox": {
            "x": -122.61500000000001,
            "y": -840.615,
            "width": 1509.23,
            "height": 972.23
        },
        "shapeColor": "3488bf",
        "matrix": [[0.024418604651162794, 0, 9.77507945373329], [0, 0.024418604651162794, 79.15639534883721]]
    }, {
        "text": "Pk",
        //pk",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 19129,
        "bbox": {
            "x": -31.820000000000007,
            "y": -824.82,
            "width": 1176.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.028813559322033895, 0, 152.41395818344714], [0, 0.028813559322033895, 67.2]]
    }, {
        "text": "Incdgt",
        //incdgt",
        "fill": "#ffffff",
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
        "parentId": 29245,
        "bbox": {
            "x": -46.48000000000002,
            "y": -850.48,
            "width": 2888.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.015185471406491497, 0, 82.77071097372489], [0, 0.015185471406491497, 16.1634139130638]]
    }, {
        "text": "Coffee",
        //coffee",
        "fill": "#ffffff",
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
        "parentId": 1592,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2894.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01526243093922652, 0, 84.79807983067026], [0, 0.01526243093922652, 128.8418508287293]]
    }, {
        "text": "Pasir",
        //pasir",
        "fill": "#ffffff",
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
            "glyph": "0.86"
        }, {
            "x": 1476,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1744,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 5239,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2226.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.015347222222222224, 0, 85.97961297251462], [0, 0.015347222222222224, 196.84083333333334]]
    }, {
        "text": "Abu",
        //abu",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 1125,
            "y": 0,
            "glyph": "0.88"
        }],
        "parentId": 6477,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 1828.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.017634854771784232, 0, 142.3772795852742], [0, 0.017634854771784232, 44.663381742738586]]
    }, {
        "text": "Pic",
        //pic",
        "fill": "#ffffff",
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
        "parentId": 206,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1397.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.02125, 0, 161.7079495536396], [0, 0.02125, 142.39499999999998]]
    }, {
        "text": "House",
        //house",
        "fill": "#ffffff",
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
        "parentId": 526,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2776.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.014325842696629213, 0, 70.46621033546195], [0, 0.014325842696629213, 87.92808988764045]]
    }, {
        "text": "PrecauciÃ³n",
        //precauciÃ³n",
        "fill": "#ffffff",
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
        "parentId": 29247,
        "bbox": {
            "x": -35.78,
            "y": -840.78,
            "width": 4782.56,
            "height": 973.56
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010450819672131148, 0, 123.91140735075741], [0, 0.010450819672131148, 168.19959016393443]]
    }, {
        "text": "Kawah",
        //kawah",
        "fill": "#ffffff",
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
            "glyph": "0.90"
        }, {
            "x": 1841,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2337,
            "y": 0,
            "glyph": "0.75"
        }],
        "parentId": 23029,
        "bbox": {
            "x": -32.31500000000001,
            "y": -817.315,
            "width": 2964.63,
            "height": 945.63
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013150492264416315, 0, 22.763405584253874], [0, 0.013150492264416315, 161.0303445850914]]
    }, {
        "text": "Girl",
        //girl",
        "fill": "#ffffff",
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
        "parentId": 254,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1685.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01761049723756906, 0, 29.329882776417822], [0, 0.01761049723756906, 42.66367403314917]]
    }, {
        "text": "Drink",
        //drink",
        "fill": "#ffffff",
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
        "parentId": 93,
        "bbox": {
            "x": -33.30500000000001,
            "y": -826.3050000000001,
            "width": 2429.61,
            "height": 953.61
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011854951185495118, 0, 13.153487208391564], [0, 0.011854951185495118, 60.14330543933055]]
    }, {
        "text": "Obra",
        //obra",
        "fill": "#ffffff",
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
        "parentId": 29281,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2176.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.012914364640883977, 0, 2.1667059236126045], [0, 0.012914364640883977, 121.02002762430939]]
    }, {
        "text": "Madrid",
        //madrid",
        "fill": "#ffffff",
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
        "parentId": 23455,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 3056.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009444444444444445, 0, 92.63303350986938], [0, 0.009444444444444445, 168.2866666666667]]
    }, {
        "text": "Blue",
        //blue",
        "fill": "#ffffff",
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
        "parentId": 82,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2026.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011805555555555555, 0, 120.8780711578839], [0, 0.011805555555555555, 120.10833333333333]]
    }, {
        "text": "Oldtown",
        //oldtown",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.50"
        }, {
            "x": 684,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 976,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1514,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1853,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2389,
            "y": 0,
            "glyph": "0.90"
        }, {
            "x": 3124,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 1981,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 3784.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008218232044198895, 0, 69.24924985688007], [0, 0.008218232044198895, 117.37638121546962]]
    }, {
        "text": "Pantai",
        //pantai",
        "fill": "#ffffff",
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
            "glyph": "0.81"
        }, {
            "x": 1602,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1941,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2437,
            "y": 0,
            "glyph": "0.76"
        }],
        "parentId": 7281,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2779.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009444444444444445, 0, 125.32057031546253], [0, 0.009444444444444445, 52.28666666666666]]
    }, {
        "text": "People",
        //people",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1067,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1603,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 2144,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2436,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 295,
        "bbox": {
            "x": -64.82,
            "y": -857.8199999999999,
            "width": 3109.64,
            "height": 1207.6399999999999
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008416370106761566, 0, 138.95960854092527], [0, 0.008416370106761566, 29.636454759052448]]
    }, {
        "text": "Love",
        //love",
        "fill": "#ffffff",
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
        "parentId": 136,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2143.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01074438202247191, 0, 140.49825568269878], [0, 0.01074438202247191, 177.19606741573034]]
    }, {
        "text": "Red",
        //red",
        "fill": "#ffffff",
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
        "parentId": 193,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1726.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.012986111111111111, 0, 48.52933473311108], [0, 0.012986111111111111, 88.01916666666666]]
    }, {
        "text": "Day",
        //day",
        "fill": "#ffffff",
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
        "parentId": 106,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 1823.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.012102957283680176, 0, 162.18815157231467], [0, 0.012102957283680176, 152.54389375684556]]
    }, {
        "text": "Decreciente",
        //decreciente",
        "fill": "#ffffff",
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
        "parentId": 29294,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 5185.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008263888888888888, 0, 42.87347632465969], [0, 0.008263888888888888, 125.37583333333333]]
    }, {
        "text": "Circulacion",
        //circulacion",
        "fill": "#ffffff",
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
        "parentId": 29484,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 4872.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 20.345763398840084], [0, 0.005870165745856353, 84.55455801104972]]
    }, {
        "text": "Photo",
        //photo",
        "fill": "#ffffff",
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
        "parentId": 159,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2620.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009444444444444445, 0, 62.69677433534886], [0, 0.009444444444444445, 192.28666666666666]]
    }, {
        "text": "One",
        //one",
        "fill": "#ffffff",
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
        "parentId": 74,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1872.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011740331491712707, 0, 31.200237470291793], [0, 0.011740331491712707, 171.10911602209947]]
    }, {
        "text": "New",
        //new",
        "fill": "#ffffff",
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
        "parentId": 221,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2061.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01058091286307054, 0, 5.598750040272088], [0, 0.01058091286307054, 130.19802904564315]]
    }, {
        "text": "Up",
        //up",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.56"
        }, {
            "x": 652,
            "y": 0,
            "glyph": "0.83"
        }],
        "parentId": 22,
        "bbox": {
            "x": -63.5,
            "y": -848.5,
            "width": 1356,
            "height": 1197
        },
        "shapeColor": "3488bf",
        "matrix": [[0.014166666666666666, 0, 71.4321994735384], [0, 0.014166666666666666, 159.04166666666669]]
    }, {
        "text": "Cempaka",
        //cempaka",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1079,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1891,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 2432,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2928,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3407,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 23103,
        "bbox": {
            "x": -94.48000000000002,
            "y": -862.48,
            "width": 4081.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006524122807017544, 0, 86.23081258744534], [0, 0.006524122807017544, 134.1701754385965]]
    }, {
        "text": "Kilometrica",
        //kilometrica",
        "fill": "#ffffff",
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
        "parentId": 29487,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 5006.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 140.59721563780502], [0, 0.005902777777777778, 88.55416666666666]]
    }, {
        "text": "Good",
        //good",
        "fill": "#ffffff",
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
        "parentId": 61,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2337.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009392265193370166, 0, 129.60152923705064], [0, 0.009392265193370166, 21.287292817679557]]
    }, {
        "text": "Out",
        //out",
        "fill": "#ffffff",
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
        "parentId": 780,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1733.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.012914364640883977, 0, 85.11048921728205], [0, 0.012914364640883977, 52.02002762430939]]
    }, {
        "text": "Look",
        //look",
        "fill": "#ffffff",
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
        "parentId": 1072,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2207.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009550561797752809, 0, 17.902793026930556], [0, 0.009550561797752809, 50.285393258426964]]
    }, {
        "text": "Crecient",
        //crecient",
        "fill": "#ffffff",
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
        }],
        "parentId": 29252,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 3703.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006955266955266956, 0, 134.06050505050504], [0, 0.006955266955266956, 83.45762691132698]]
    }, {
        "text": "Bandung",
        //bandung",
        "fill": "#ffffff",
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
            "glyph": "0.81"
        }, {
            "x": 1627,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2165,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2704,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 3251,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 3615,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 3929.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005543478260869565, 0, 120.35000131029157], [0, 0.005543478260869565, 189.37478260869568]]
    }, {
        "text": "Summer",
        //summer",
        "fill": "#ffffff",
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
        "parentId": 304,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 3724.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 160.76460143608827], [0, 0.005870165745856353, 115.55455801104972]]
    }, {
        "text": "Green",
        //green",
        "fill": "#ffffff",
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
        "parentId": 320,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2628.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008218232044198895, 0, 86.89539747108537], [0, 0.008218232044198895, 7.376381215469613]]
    }, {
        "text": "Sand",
        //sand",
        "fill": "#ffffff",
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
        }, {
            "x": 1574,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 162,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 2237.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009392265193370166, 0, 37.171466093077406], [0, 0.009392265193370166, 29.287292817679557]]
    }, {
        "text": "Para",
        //para",
        "fill": "#ffffff",
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
        "parentId": 2905,
        "bbox": {
            "x": -33.14,
            "y": -826.14,
            "width": 1976.28,
            "height": 952.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009497206703910615, 0, 66.04490445526889], [0, 0.009497206703910615, 13.324022346368716]]
    }, {
        "text": "Yg",
        //yg",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.60"
        }, {
            "x": 558,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 12008,
        "bbox": {
            "x": -142.48000000000002,
            "y": -850.48,
            "width": 1310.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01211622807017544, 0, 142.53622335461765], [0, 0.01211622807017544, 102.4563596491228]]
    }, {
        "text": "Puerto",
        //puerto",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1098,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1606,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1946,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 2285,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 1571,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2924.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007083333333333333, 0, 42.420732625199406], [0, 0.007083333333333333, 132.46499999999997]]
    }, {
        "text": "Today",
        //today",
        "fill": "#ffffff",
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
        "parentId": 50,
        "bbox": {
            "x": -131.32500000000002,
            "y": -849.325,
            "width": 2862.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006574585635359116, 0, 74.91212659505925], [0, 0.006574585635359116, 167.12720994475137]]
    }, {
        "text": "Time",
        //time",
        "fill": "#ffffff",
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
        "parentId": 269,
        "bbox": {
            "x": -100.80000000000001,
            "y": -826.8,
            "width": 2313.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007083333333333333, 0, 138.3825704556133], [0, 0.007083333333333333, 183.465]]
    }, {
        "text": "Color",
        //color",
        "fill": "#ffffff",
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
        "parentId": 690,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2447.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0072204617473970115, 0, 7.120654142145769], [0, 0.0072204617473970115, 137.077539846347]]
    }, {
        "text": "Party",
        //party",
        "fill": "#ffffff",
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
            "glyph": "0.87"
        }, {
            "x": 1734,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 1048,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 2407.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006956315289648623, 0, 147.0837132003799], [0, 0.006956315289648623, 132.89645393946907]]
    }, {
        "text": "Generic",
        //generic",
        "fill": "#ffffff",
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
            "glyph": "0.76"
        }, {
            "x": 2783,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 696,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 3383.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 177.7965362449772], [0, 0.005870165745856353, 88.55455801104972]]
    }, {
        "text": "Yang",
        //yang",
        "fill": "#ffffff",
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
        "parentId": 5939,
        "bbox": {
            "x": -142.48000000000002,
            "y": -850.48,
            "width": 2353.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006524122807017544, 0, 162.7009434364051], [0, 0.006524122807017544, 158.09188596491228]]
    }, {
        "text": "Go",
        //go",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 57,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1281.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011740331491712707, 0, 161.2499685821764], [0, 0.011740331491712707, 104.10911602209944]]
    }, {
        "text": "See",
        //see",
        "fill": "#ffffff",
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
        "parentId": 1677,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1690.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008218232044198895, 0, 92.81849014582086], [0, 0.008218232044198895, 101.3763812154696]]
    }, {
        "text": "Hitam",
        //hitam",
        "fill": "#ffffff",
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
            "glyph": "0.87"
        }, {
            "x": 1279,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1775,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 5189,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2670.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 177.74846878697727], [0, 0.005902777777777778, 72.55416666666667]]
    }, {
        "text": "Dan",
        //dan",
        "fill": "#ffffff",
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
            "glyph": "0.81"
        }],
        "parentId": 746,
        "bbox": {
            "x": -33.30500000000001,
            "y": -826.3050000000001,
            "width": 1779.6100000000001,
            "height": 953.61
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008298465829846583, 0, 42.78137048778901], [0, 0.008298465829846583, 117.40031380753138]]
    }, {
        "text": "Others",
        //others",
        "fill": "#ffffff",
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
        "parentId": 2084,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2977.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 127.88858767935523], [0, 0.005870165745856353, 125.55455801104972]]
    }, {
        "text": "Happy",
        //happy",
        "fill": "#ffffff",
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
        "parentId": 901,
        "bbox": {
            "x": -64.32500000000002,
            "y": -849.325,
            "width": 2920.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005635359116022099, 0, 124.14637920112926], [0, 0.005635359116022099, 12.39475138121547]]
    }, {
        "text": "Galera",
        //galera",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1108,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1908,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2248,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 1572,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2860.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 91.07581147530857], [0, 0.005870165745856353, 21.554558011049725]]
    }, {
        "text": "Old",
        //old",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.50"
        }, {
            "x": 684,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 976,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 242,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1629.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008218232044198895, 0, 38.112527400834644], [0, 0.008218232044198895, 178.3763812154696]]
    }, {
        "text": "Don",
        //don",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1190,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 296,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1820.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007083333333333333, 0, 140.77685783028923], [0, 0.007083333333333333, 71.465]]
    }, {
        "text": "Now",
        //now",
        "fill": "#ffffff",
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
        "parentId": 41,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2089.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007053941908713692, 0, 111.87262514234284], [0, 0.007053941908713692, 47.46535269709543]]
    }, {
        "text": "Rock",
        //rock",
        "fill": "#ffffff",
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
            "glyph": "0.70"
        }, {
            "x": 1582,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 1351,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2203.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 180.8882263671159], [0, 0.005902777777777778, 130.55416666666667]]
    }, {
        "text": "Night",
        //night",
        "fill": "#ffffff",
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
        "parentId": 620,
        "bbox": {
            "x": -67.29500000000002,
            "y": -863.2950000000001,
            "width": 2572.59,
            "height": 1227.5900000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005268959435626102, 0, 10.077138447971782], [0, 0.005268959435626102, 142.39282253670373]]
    }, {
        "text": "Beauty",
        //beauty",
        "fill": "#ffffff",
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
        "parentId": 1456,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 3139.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004654983570646221, 0, 156.51570367455906], [0, 0.004654983570646221, 33.67072836801752]]
    }, {
        "text": "Boy",
        //boy",
        "fill": "#ffffff",
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
        "parentId": 141,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 1793.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007808310991957105, 0, 112.01129356568364], [0, 0.007808310991957105, 33.61601098890091]]
    }, {
        "text": "Ini",
        //ini",
        "fill": "#ffffff",
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
            "glyph": "0.76"
        }],
        "parentId": 2891,
        "bbox": {
            "x": -12.820000000000007,
            "y": -824.82,
            "width": 1157.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011038961038961037, 0, 118.75194805194806], [0, 0.011038961038961037, 151.05858819287863]]
    }, {
        "text": "Resort",
        //resort",
        "fill": "#ffffff",
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
        "parentId": 2213,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2880.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005391600454029512, 0, 117.9167139614075], [0, 0.005391600454029512, 194.45192193950285]]
    }, {
        "text": "Little",
        //little",
        "fill": "#ffffff",
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
            "glyph": "0.87"
        }, {
            "x": 1124,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1755,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 47,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2366.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0057538750587130105, 0, 185.88592062000941], [0, 0.0057538750587130105, 115.51006800269606]]
    }, {
        "text": "Boracay",
        //boracay",
        "fill": "#ffffff",
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
            "glyph": "0.85"
        }, {
            "x": 1460,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1956,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2407,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2903,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 904,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 3576.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.003723986856516977, 0, 129.94460379219075], [0, 0.003723986856516977, 134.93658269441403]]
    }, {
        "text": "Kuala",
        //kuala",
        "fill": "#ffffff",
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
            "glyph": "0.68"
        }, {
            "x": 1645,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1937,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 1982,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2516.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005302366345311131, 0, 49.99929886064855], [0, 0.005302366345311131, 143.60999972321767]]
    }, {
        "text": "Re",
        //re",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.53"
        }, {
            "x": 595,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 2391,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1206.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010625, 0, 157.94841344755056], [0, 0.010625, 68.1975]]
    }, {
        "text": "Ciwidey",
        //ciwidey",
        "fill": "#ffffff",
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
            "glyph": "0.90"
        }, {
            "x": 1574,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1842,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2380,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2888,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 23052,
        "bbox": {
            "x": -95.305,
            "y": -863.3050000000001,
            "width": 3591.61,
            "height": 1219.6100000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.003707742639040349, 0, 108.69701685568907], [0, 0.003707742639040349, 79.93991275899673]]
    }, {
        "text": "Merah",
        //merah",
        "fill": "#ffffff",
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
            "glyph": "0.85"
        }, {
            "x": 1639,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2135,
            "y": 0,
            "glyph": "0.75"
        }],
        "parentId": 23438,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2762.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 95.75367432464164], [0, 0.0047752808988764045, 188.64269662921348]]
    }, {
        "text": "Air",
        //air",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.36"
        }, {
            "x": 585,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 853,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 73,
        "bbox": {
            "x": -109.31500000000001,
            "y": -828.315,
            "width": 1409.63,
            "height": 945.63
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007957446808510639, 0, 147.7613404255319], [0, 0.007957446808510639, 157.33877404885374]]
    }, {
        "text": "Chocolate",
        //chocolate",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.38"
        }, {
            "x": 571,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1118,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1654,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2105,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2641,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 2933,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 3429,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3768,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 3,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 4409.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004411412131383361, 0, 11.052960920642532], [0, 0.004411412131383361, 88.46006616289372]]
    }, {
        "text": "Baru",
        //baru",
        "fill": "#ffffff",
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
            "glyph": "0.88"
        }],
        "parentId": 961,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2045.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006692477876106194, 0, 41.881139380530975], [0, 0.006692477876106194, 23.396218280697372]]
    }, {
        "text": "Lumpur",
        //lumpur",
        "fill": "#ffffff",
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
            "glyph": "0.80"
        }, {
            "x": 1868,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 2409,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 1983,
        "bbox": {
            "x": -63.5,
            "y": -848.5,
            "width": 3490,
            "height": 1197
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0037777777777777775, 0, 85.27856204850524], [0, 0.0037777777777777775, 28.944444444444443]]
    }, {
        "text": "Post",
        //post",
        "fill": "#ffffff",
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
        "parentId": 222,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1996.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 31.53475254144925], [0, 0.005902777777777778, 65.55416666666666]]
    }, {
        "text": "Dress",
        //dress",
        "fill": "#ffffff",
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
        "parentId": 645,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2452.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004722222222222222, 0, 41.89263447730983], [0, 0.004722222222222222, 153.64333333333335]]
    }, {
        "text": "Great",
        //great",
        "fill": "#ffffff",
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
        "parentId": 279,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2466.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004696132596685083, 0, 179.52934055219364], [0, 0.004696132596685083, 61.64364640883978]]
    }, {
        "text": "Shirt",
        //shirt",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1078,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1346,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1686,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 777,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 2206.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005716463414634146, 0, 173.1120426829268], [0, 0.005716463414634146, 51.46306305676031]]
    }, {
        "text": "Wear",
        //wear",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.58"
        }, {
            "x": 828,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1336,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1832,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 224,
        "bbox": {
            "x": -109.48,
            "y": -817.48,
            "width": 2388.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 145.5645214481435], [0, 0.0047752808988764045, 92.64269662921348]]
    }, {
        "text": "Cafe",
        //cafe",
        "fill": "#ffffff",
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
        "parentId": 757,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2027.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 123.10082822335067], [0, 0.005870165745856353, 110.55455801104972]]
    }, {
        "text": "Masa",
        //masa",
        "fill": "#ffffff",
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
            "glyph": "0.86"
        }, {
            "x": 1708,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 23059,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2287.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005479785679493424, 0, 68.90921821724305], [0, 0.005479785679493424, 77.25615401535303]]
    }, {
        "text": "Que",
        //que",
        "fill": "#ffffff",
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
        "parentId": 810,
        "bbox": {
            "x": -91.67500000000001,
            "y": -859.675,
            "width": 1921.35,
            "height": 1190.35
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005750307503075031, 0, 85.5029827798278], [0, 0.005750307503075031, 77.48839965690725]]
    }, {
        "text": "Back",
        //back",
        "fill": "#ffffff",
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
        "parentId": 264,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2152.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.00587467362924282, 0, 59.87565274151436], [0, 0.00587467362924282, 46.54815285162093]]
    }, {
        "text": "Plain",
        //plain",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 851,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1347,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1615,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 403,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2245.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005602589641434263, 0, 51.89877988047809], [0, 0.005602589641434263, 77.49014344374417]]
    }, {
        "text": "Want",
        //want",
        "fill": "#ffffff",
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
            "glyph": "0.81"
        }, {
            "x": 1871,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 2814,
        "bbox": {
            "x": -109.48,
            "y": -817.48,
            "width": 2425.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 107.44038851932469], [0, 0.0047752808988764045, 52.64269662921348]]
    }, {
        "text": "More",
        //more",
        "fill": "#ffffff",
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
            "glyph": "0.72"
        }],
        "parentId": 302,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2275.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005512003919647231, 0, 43.90647966682998], [0, 0.005512003919647231, 47.50233174652407]]
    }, {
        "text": "City",
        //city",
        "fill": "#ffffff",
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
        "parentId": 1374,
        "bbox": {
            "x": -95.305,
            "y": -863.3050000000001,
            "width": 1881.6100000000001,
            "height": 1219.6100000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006301456618112729, 0, 119.17211842938569], [0, 0.006301456618112729, 134.13500219028435]]
    }, {
        "text": "Noche",
        //noche",
        "fill": "#ffffff",
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
            "glyph": "0.70"
        }, {
            "x": 1660,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2207,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 9098,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2819.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004702627939142462, 0, 30.123633470596108], [0, 0.004702627939142462, 114.6435684647303]]
    }, {
        "text": "Sobre",
        //sobre",
        "fill": "#ffffff",
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
        "parentId": 29262,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 2598.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004696132596685083, 0, 92.31676685707181], [0, 0.004696132596685083, 105.64364640883977]]
    }, {
        "text": "Guy",
        //guy",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1151,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 1532,
        "bbox": {
            "x": -95.305,
            "y": -863.3050000000001,
            "width": 1854.6100000000001,
            "height": 1219.6100000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006024484536082474, 0, 85.48762886597939], [0, 0.006024484536082474, 67.16547782495648]]
    }, {
        "text": "Meteoalarm",
        //meteoalarm",
        "fill": "#ffffff",
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
        "parentId": 29260,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 5198.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.003581460674157303, 0, 168.9758368740567], [0, 0.003581460674157303, 145.7320224719101]]
    }, {
        "text": "Nivel",
        //nivel",
        "fill": "#ffffff",
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
        "parentId": 29263,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2367.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005284170972287459, 0, 11.925845467355565], [0, 0.005284170972287459, 148.32886324758337]]
    }, {
        "text": "Hotel",
        //hotel",
        "fill": "#ffffff",
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
        "parentId": 1891,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2487.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 74.57226038075868], [0, 0.0047752808988764045, 196.64269662921348]]
    }, {
        "text": "Know",
        //know",
        "fill": "#ffffff",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.46"
        }, {
            "x": 610,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1157,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1693,
            "y": 0,
            "glyph": "0.90"
        }],
        "parentId": 558,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2569.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 70.89891359804942], [0, 0.0047752808988764045, 7.642696629213483]]
    }]
});