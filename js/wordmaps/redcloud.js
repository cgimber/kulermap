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
        "x": 1.4499999999999997,
        "y": 1.3000000000000007,
        "width": 195.72500000000002,
        "height": 197.025
    },
    "styleOptions": {
        "backgroundColor": "rgba(255, 255, 255, 0)",
        "backgroundColorAlpha": 0,
        "animationSpeed": 0.2,
        "textColor": "ffffff",
        "textAlpha": 1,
        "boxColor": "#000000",
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
        "0.53": "M 85 -693 Q 123 -700 172.5 -704 Q 222 -708 263 -708 Q 309 -708 350.5 -698 Q 392 -688 423.5 -665 Q 455 -642 474 -605 Q 493 -568 493 -515 Q 493 -433 448 -382 Q 403 -331 334 -314 L 382 -277 L 556 0 L 459 0 L 266 -302 L 168 -317 L 168 0 L 85 0 L 85 -693 M 265 -636 Q 252 -636 238 -636 Q 224 -636 211 -635 Q 198 -634 186.5 -633 Q 175 -632 168 -630 L 168 -372 L 246 -372 Q 315 -372 360 -406 Q 405 -440 405 -512 Q 405 -566 368 -601 Q 331 -636 265 -636 Z ",
        "0.72": "M 442 -40 Q 412 -16 366.5 -2 Q 321 12 270 12 Q 213 12 171 -6.5 Q 129 -25 102 -59.5 Q 75 -94 62 -142 Q 49 -190 49 -250 Q 49 -378 106 -445 Q 163 -512 269 -512 Q 303 -512 337 -504.5 Q 371 -497 398 -476 Q 425 -455 442 -416.5 Q 459 -378 459 -315 Q 459 -282 453 -242 L 132 -242 Q 132 -198 141 -164 Q 150 -130 169 -106.5 Q 188 -83 218.5 -70.5 Q 249 -58 293 -58 Q 327 -58 361 -70 Q 395 -82 412 -98 L 442 -40 M 270 -442 Q 211 -442 175.5 -411 Q 140 -380 133 -305 L 381 -305 Q 381 -381 352 -411.5 Q 323 -442 270 -442 Z ",
        "0.71": "M 461 -172 Q 461 -121 462 -79.5 Q 463 -38 471 2 L 417 2 L 397 -69 L 393 -69 Q 373 -34 335 -11 Q 297 12 246 12 Q 146 12 97.5 -51 Q 49 -114 49 -248 Q 49 -376 109.5 -442.5 Q 170 -509 276 -509 Q 313 -509 334.5 -505 Q 356 -501 381 -492 L 381 -700 L 461 -700 L 461 -172 M 259 -58 Q 310 -58 340 -84.5 Q 370 -111 381 -165 L 381 -413 Q 363 -427 340 -433 Q 317 -439 279 -439 Q 210 -439 171 -393.5 Q 132 -348 132 -248 Q 132 -207 138.5 -172 Q 145 -137 160 -112 Q 175 -87 199.5 -72.5 Q 224 -58 259 -58 Z ",
        "0.48": "M 623 -470 L 633 -575 L 628 -575 L 590 -479 L 408 -163 L 383 -163 L 190 -480 L 154 -575 L 149 -575 L 163 -471 L 163 0 L 85 0 L 85 -700 L 147 -700 L 366 -342 L 399 -264 L 401 -264 L 432 -344 L 641 -700 L 706 -700 L 706 0 L 623 0 L 623 -470 Z ",
        "0.85": "M 313 -423 Q 283 -433 256 -433 Q 213 -433 188 -409.5 Q 163 -386 157 -350 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 171 -473 197.5 -491.5 Q 224 -510 265 -510 Q 294 -510 330 -500 L 313 -423 Z ",
        "0.68": "M 69 -463 Q 107 -486 157.5 -497 Q 208 -508 263 -508 Q 315 -508 346.5 -494 Q 378 -480 394.5 -457.5 Q 411 -435 416.5 -408 Q 422 -381 422 -354 Q 422 -294 419 -237 Q 416 -180 416 -129 Q 416 -92 419 -59 Q 422 -26 430 2 L 371 2 L 350 -68 L 345 -68 Q 336 -54 322.5 -40.5 Q 309 -27 290 -16.5 Q 271 -6 246 1 Q 221 8 189 8 Q 157 8 129.5 -2 Q 102 -12 82 -30.5 Q 62 -49 50.5 -75 Q 39 -101 39 -134 Q 39 -178 57 -207.5 Q 75 -237 107.5 -254.5 Q 140 -272 185.5 -279.5 Q 231 -287 286 -287 Q 300 -287 313.5 -287 Q 327 -287 341 -285 Q 344 -315 344 -339 Q 344 -394 322 -416 Q 300 -438 242 -438 Q 225 -438 205.5 -435.5 Q 186 -433 165.5 -428.5 Q 145 -424 126.5 -417.5 Q 108 -411 94 -403 L 69 -463 M 211 -62 Q 239 -62 261 -69.5 Q 283 -77 299 -88.5 Q 315 -100 325.5 -114 Q 336 -128 341 -141 L 341 -224 Q 327 -225 312.5 -225.5 Q 298 -226 284 -226 Q 253 -226 223.5 -222.5 Q 194 -219 171.5 -209.5 Q 149 -200 135.5 -183.5 Q 122 -167 122 -142 Q 122 -107 147 -84.5 Q 172 -62 211 -62 Z ",
        "0.77": "M 93 -500 L 173 -500 L 173 27 Q 173 120 141 166 Q 109 212 39 212 Q 31 212 24 211.5 Q 17 211 9 210 L 9 142 Q 37 142 53.5 133.5 Q 70 125 79 107 Q 88 89 90.5 61.5 Q 93 34 93 -3 L 93 -500 M 76 -652 Q 76 -675 91.5 -691.5 Q 107 -708 131 -708 Q 155 -708 172 -691.5 Q 189 -675 189 -652 Q 189 -629 172 -614 Q 155 -599 131 -599 Q 107 -599 91.5 -614 Q 76 -629 76 -652 Z ",
        "0.9": "M 118 -187 Q 118 -227 132 -263.5 Q 146 -300 170 -331 Q 194 -362 224.5 -388 Q 255 -414 288 -434 Q 264 -470 246.5 -506 Q 229 -542 229 -584 Q 229 -608 237 -631 Q 245 -654 262.5 -672 Q 280 -690 307.5 -701 Q 335 -712 374 -712 Q 415 -712 443 -701.5 Q 471 -691 488 -674 Q 505 -657 512.5 -636 Q 520 -615 520 -593 Q 520 -551 487.5 -506.5 Q 455 -462 385 -421 Q 401 -392 422.5 -361.5 Q 444 -331 468 -301 Q 492 -271 517 -241.5 Q 542 -212 567 -187 Q 578 -199 589 -217.5 Q 600 -236 610.5 -256.5 Q 621 -277 629.5 -299 Q 638 -321 645 -341 L 707 -312 Q 701 -295 690 -271.5 Q 679 -248 665.5 -223.5 Q 652 -199 638 -176.5 Q 624 -154 612 -139 Q 633 -119 650 -104.5 Q 667 -90 681.5 -79.5 Q 696 -69 709.5 -60.5 Q 723 -52 737 -44 L 687 12 Q 634 -14 566 -81 Q 548 -63 526.5 -46.5 Q 505 -30 478 -17 Q 451 -4 418.5 4 Q 386 12 347 12 Q 300 12 258.5 -1 Q 217 -14 186 -39.5 Q 155 -65 136.5 -102 Q 118 -139 118 -187 M 519 -131 Q 490 -160 462 -194 Q 434 -228 408.5 -262 Q 383 -296 361.5 -327.5 Q 340 -359 325 -383 Q 298 -363 275 -342 Q 252 -321 234.5 -297.5 Q 217 -274 207.5 -247 Q 198 -220 198 -189 Q 198 -158 211 -133.5 Q 224 -109 246.5 -92.5 Q 269 -76 298 -67 Q 327 -58 359 -58 Q 384 -58 407.5 -64.5 Q 431 -71 452 -81 Q 473 -91 490.5 -104 Q 508 -117 519 -131 M 307 -584 Q 307 -554 319.5 -524.5 Q 332 -495 352 -466 Q 405 -500 425.5 -528 Q 446 -556 446 -577 Q 446 -609 430.5 -629 Q 415 -649 377 -649 Q 341 -649 324 -631 Q 307 -613 307 -584 Z ",
        "0.37": "M 507 -540 Q 507 -515 499 -489 Q 491 -463 475 -440.5 Q 459 -418 434 -401 Q 409 -384 375 -375 L 375 -371 Q 405 -366 432.5 -354 Q 460 -342 481 -321 Q 502 -300 515 -270 Q 528 -240 528 -199 Q 528 -145 505.5 -105.5 Q 483 -66 446.5 -41 Q 410 -16 363 -4 Q 316 8 267 8 Q 250 8 227 8 Q 204 8 179 6.5 Q 154 5 129 2.5 Q 104 0 85 -5 L 85 -694 Q 122 -700 171 -704 Q 220 -708 278 -708 Q 317 -708 357.5 -701.5 Q 398 -695 431 -676.5 Q 464 -658 485.5 -625 Q 507 -592 507 -540 M 275 -64 Q 307 -64 337 -71.5 Q 367 -79 390 -95.5 Q 413 -112 426.5 -136 Q 440 -160 440 -193 Q 440 -234 423.5 -259 Q 407 -284 380.5 -298 Q 354 -312 321 -317 Q 288 -322 255 -322 L 168 -322 L 168 -71 Q 175 -69 188 -68 Q 201 -67 216 -66 Q 231 -65 247 -64.5 Q 263 -64 275 -64 M 220 -392 Q 237 -392 261 -393 Q 285 -394 301 -396 Q 325 -404 346 -415.5 Q 367 -427 383.5 -442.5 Q 400 -458 409.5 -478.5 Q 419 -499 419 -523 Q 419 -556 406.5 -577.5 Q 394 -599 373 -612 Q 352 -625 325 -630.5 Q 298 -636 270 -636 Q 237 -636 209.5 -634.5 Q 182 -633 168 -630 L 168 -392 L 220 -392 Z ",
        "0.79": "M 166 -123 Q 166 -88 178 -73 Q 190 -58 212 -58 Q 225 -58 240 -60 Q 255 -62 274 -69 L 283 -6 Q 267 2 238.5 7 Q 210 12 189 12 Q 144 12 115 -13.5 Q 86 -39 86 -100 L 86 -700 L 166 -700 L 166 -123 Z ",
        "0.88": "M 149 -500 L 149 -215 Q 149 -176 153.5 -146.5 Q 158 -117 169 -97.5 Q 180 -78 199 -68 Q 218 -58 247 -58 Q 274 -58 295 -66.5 Q 316 -75 332.5 -90 Q 349 -105 361.5 -124.5 Q 374 -144 382 -166 L 382 -500 L 462 -500 L 462 -142 Q 462 -106 464.5 -67.5 Q 467 -29 473 0 L 418 0 L 398 -79 L 393 -79 Q 370 -40 331 -14 Q 292 12 232 12 Q 192 12 161.5 2.5 Q 131 -7 110.5 -31 Q 90 -55 79.5 -95.5 Q 69 -136 69 -198 L 69 -500 L 149 -500 Z ",
        "0.39": "M 85 -700 Q 104 -703 127.5 -704.5 Q 151 -706 176.5 -706.5 Q 202 -707 226.5 -707.5 Q 251 -708 272 -708 Q 356 -708 417.5 -682 Q 479 -656 519 -609.5 Q 559 -563 578.5 -498 Q 598 -433 598 -355 Q 598 -284 579.5 -218.5 Q 561 -153 521 -102.5 Q 481 -52 417 -21.5 Q 353 9 262 9 Q 246 9 220.5 8.5 Q 195 8 168 6.5 Q 141 5 118 4 Q 95 3 85 1 L 85 -700 M 274 -634 Q 261 -634 245.5 -634 Q 230 -634 215 -633 Q 200 -632 187.5 -631 Q 175 -630 168 -629 L 168 -69 Q 173 -68 187 -67.5 Q 201 -67 216 -66.5 Q 231 -66 245 -65.5 Q 259 -65 264 -65 Q 334 -65 381.5 -89 Q 429 -113 457.5 -153.5 Q 486 -194 498 -246.5 Q 510 -299 510 -355 Q 510 -404 499 -453.5 Q 488 -503 461 -543 Q 434 -583 388.5 -608.5 Q 343 -634 274 -634 Z ",
        "0.76": "M 94 -500 L 174 -500 L 174 0 L 94 0 L 94 -500 M 77 -652 Q 77 -675 92.5 -691.5 Q 108 -708 132 -708 Q 156 -708 173 -691.5 Q 190 -675 190 -652 Q 190 -629 173 -614 Q 156 -599 132 -599 Q 108 -599 92.5 -614 Q 77 -629 77 -652 Z ",
        "0.81": "M 398 0 L 398 -285 Q 398 -363 375.5 -402.5 Q 353 -442 293 -442 Q 240 -442 205.5 -413.5 Q 171 -385 157 -342 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 176 -471 216.5 -491.5 Q 257 -512 313 -512 Q 354 -512 385 -502.5 Q 416 -493 436.5 -469 Q 457 -445 467.5 -404.5 Q 478 -364 478 -302 L 478 0 L 398 0 Z ",
        "0.78": "M 203 -225 L 157 -225 L 157 0 L 77 0 L 77 -700 L 157 -700 L 157 -274 L 198 -288 L 353 -500 L 446 -500 L 293 -299 L 252 -266 L 302 -226 L 469 0 L 370 0 L 203 -225 Z ",
        "0.38": "M 533 -29 Q 503 -6 457 3 Q 411 12 359 12 Q 296 12 241 -9.5 Q 186 -31 145 -75 Q 104 -119 80 -187.5 Q 56 -256 56 -350 Q 56 -448 82.5 -516.5 Q 109 -585 152.5 -628.5 Q 196 -672 250 -692 Q 304 -712 360 -712 Q 420 -712 458 -705.5 Q 496 -699 523 -688 L 503 -615 Q 455 -638 366 -638 Q 325 -638 285 -623 Q 245 -608 213.5 -574 Q 182 -540 163 -485 Q 144 -430 144 -350 Q 144 -278 162 -224 Q 180 -170 211.5 -134 Q 243 -98 285.5 -80 Q 328 -62 378 -62 Q 423 -62 456.5 -71 Q 490 -80 513 -94 L 533 -29 Z ",
        "0.51": "M 85 -693 Q 123 -702 167 -705 Q 211 -708 254 -708 Q 300 -708 347.5 -699 Q 395 -690 434 -666 Q 473 -642 497.5 -600 Q 522 -558 522 -493 Q 522 -429 499 -385 Q 476 -341 438 -313.5 Q 400 -286 351 -274 Q 302 -262 250 -262 Q 245 -262 233.5 -262 Q 222 -262 209.5 -262.5 Q 197 -263 185 -264 Q 173 -265 168 -266 L 168 0 L 85 0 L 85 -693 M 256 -636 Q 230 -636 206 -635 Q 182 -634 168 -630 L 168 -340 Q 173 -338 184 -337.5 Q 195 -337 207 -336.5 Q 219 -336 230 -336 Q 241 -336 246 -336 Q 280 -336 313.5 -342.5 Q 347 -349 374 -366 Q 401 -383 417.5 -414 Q 434 -445 434 -493 Q 434 -534 418.5 -561.5 Q 403 -589 377.5 -605.5 Q 352 -622 320 -629 Q 288 -636 256 -636 Z ",
        "0.47": "M 499 0 L 85 0 L 85 -700 L 168 -700 L 168 -74 L 499 -74 L 499 0 Z ",
        "0.89": "M 221 -207 L 249 -112 L 250 -112 L 275 -209 L 387 -500 L 473 -500 L 260 11 L 226 11 L 9 -500 L 101 -500 L 221 -207 Z ",
        "0.58": "M 222 -231 L 238 -115 L 239 -115 L 256 -233 L 400 -700 L 440 -700 L 585 -231 L 602 -115 L 603 -115 L 621 -233 L 739 -700 L 820 -700 L 625 11 L 579 11 L 437 -458 L 419 -564 L 414 -564 L 396 -457 L 254 11 L 208 11 L 8 -700 L 96 -700 L 222 -231 Z ",
        "0.55": "M 537 -626 L 319 -626 L 319 0 L 236 0 L 236 -626 L 18 -626 L 18 -700 L 537 -700 L 537 -626 Z ",
        "0.74": "M 460 23 Q 460 120 408.5 166 Q 357 212 256 212 Q 196 212 159.5 204.5 Q 123 197 97 185 L 118 117 Q 141 126 169 134 Q 197 142 242 142 Q 284 142 310.5 134.5 Q 337 127 353 109.5 Q 369 92 375 64.5 Q 381 37 381 -1 L 381 -49 L 377 -49 Q 357 -20 326 -4.5 Q 295 11 245 11 Q 144 11 96.5 -52 Q 49 -115 49 -248 Q 49 -376 110 -442.5 Q 171 -509 290 -509 Q 347 -509 387.5 -500 Q 428 -491 460 -479 L 460 23 M 259 -59 Q 310 -59 339 -84.5 Q 368 -110 380 -164 L 380 -420 Q 340 -439 278 -439 Q 210 -439 171 -393 Q 132 -347 132 -249 Q 132 -207 139 -172 Q 146 -137 161 -112 Q 176 -87 200 -73 Q 224 -59 259 -59 Z ",
        "0.57": "M 267 -219 L 291 -113 L 292 -113 L 318 -221 L 487 -700 L 570 -700 L 305 11 L 268 11 L -2 -700 L 89 -700 L 267 -219 Z ",
        "0.92": "M 224 -176 L 252 -80 L 257 -80 L 279 -177 L 376 -500 L 457 -500 L 309 -51 Q 292 -2 275.5 44 Q 259 90 239 126 Q 219 162 194 183.5 Q 169 205 136 205 Q 100 205 77 195 L 91 126 Q 104 131 116 131 Q 144 131 170 101.5 Q 196 72 213 0 L 12 -500 L 104 -500 L 224 -176 Z ",
        "0.49": "M 211 -458 L 157 -559 L 153 -559 L 163 -458 L 163 0 L 85 0 L 85 -711 L 129 -711 L 464 -244 L 516 -148 L 521 -148 L 510 -244 L 510 -700 L 588 -700 L 588 11 L 544 11 L 211 -458 Z ",
        "0.42": "M 321 -349 L 556 -349 L 556 -41 Q 540 -29 517.5 -19 Q 495 -9 469.5 -2 Q 444 5 416.5 8.5 Q 389 12 363 12 Q 296 12 240 -9.5 Q 184 -31 143 -75.5 Q 102 -120 79 -188.5 Q 56 -257 56 -350 Q 56 -447 84 -516 Q 112 -585 157 -628.5 Q 202 -672 258 -692 Q 314 -712 370 -712 Q 430 -712 469 -705.5 Q 508 -699 535 -688 L 514 -615 Q 466 -638 377 -638 Q 335 -638 293.5 -623.5 Q 252 -609 219 -575 Q 186 -541 165 -486 Q 144 -431 144 -350 Q 144 -276 161 -222 Q 178 -168 208.5 -132.5 Q 239 -97 282 -79.5 Q 325 -62 376 -62 Q 440 -62 485 -87 L 485 -282 L 321 -302 L 321 -349 Z ",
        "0.50": "M 56 -350 Q 56 -525 130 -618.5 Q 204 -712 341 -712 Q 415 -712 469 -686 Q 523 -660 558.5 -612.5 Q 594 -565 611 -498.5 Q 628 -432 628 -350 Q 628 -175 553.5 -81.5 Q 479 12 341 12 Q 268 12 214.5 -14 Q 161 -40 125.5 -87.5 Q 90 -135 73 -201.5 Q 56 -268 56 -350 M 144 -350 Q 144 -292 155.5 -240 Q 167 -188 191 -148.5 Q 215 -109 252.5 -85.5 Q 290 -62 341 -62 Q 434 -62 487 -132.5 Q 540 -203 540 -350 Q 540 -407 528.5 -459.5 Q 517 -512 492.5 -551.5 Q 468 -591 430.5 -614.5 Q 393 -638 341 -638 Q 249 -638 196.5 -567.5 Q 144 -497 144 -350 Z ",
        "0.56": "M 487 -700 L 567 -700 L 567 -233 Q 567 -170 550.5 -124 Q 534 -78 503.5 -48.5 Q 473 -19 430 -5 Q 387 9 335 9 Q 211 9 148 -47 Q 85 -103 85 -217 L 85 -700 L 168 -700 L 168 -256 Q 168 -203 178.5 -166.5 Q 189 -130 210 -107.5 Q 231 -85 262.5 -75 Q 294 -65 336 -65 Q 417 -65 452 -109.5 Q 487 -154 487 -256 L 487 -700 Z ",
        "0.90": "M 401 -500 L 516 -208 L 541 -112 L 543 -112 L 562 -210 L 651 -500 L 727 -500 L 559 11 L 520 11 L 389 -319 L 370 -401 L 367 -401 L 347 -318 L 221 11 L 182 11 L 8 -500 L 95 -500 L 194 -209 L 211 -112 L 212 -112 L 236 -211 L 343 -500 L 401 -500 Z ",
        "0.43": "M 504 -321 L 168 -321 L 168 0 L 85 0 L 85 -700 L 168 -700 L 168 -395 L 504 -395 L 504 -700 L 587 -700 L 587 0 L 504 0 L 504 -321 Z ",
        "0.36": "M 418 -194 L 160 -194 L 90 0 L 8 0 L 273 -711 L 311 -711 L 577 0 L 490 0 L 418 -194 M 187 -266 L 393 -266 L 315 -479 L 290 -585 L 289 -585 L 264 -477 L 187 -266 Z ",
        "0.73": "M 22 -500 L 100 -500 L 100 -528 Q 100 -574 107.5 -608 Q 115 -642 132 -663.5 Q 149 -685 176 -695.5 Q 203 -706 243 -706 Q 275 -706 299.5 -702 Q 324 -698 351 -687 L 333 -620 Q 310 -630 289.5 -633 Q 269 -636 251 -636 Q 225 -636 210.5 -628 Q 196 -620 189.5 -604.5 Q 183 -589 181.5 -566.5 Q 180 -544 180 -514 L 180 -500 L 313 -500 L 313 -430 L 180 -430 L 180 0 L 100 0 L 100 -430 L 22 -430 L 22 -500 Z ",
        "0.69": "M 77 -700 L 157 -700 L 157 -451 L 161 -451 Q 184 -480 219.5 -496 Q 255 -512 297 -512 Q 394 -512 442.5 -450 Q 491 -388 491 -258 Q 491 -127 427 -59 Q 363 9 247 9 Q 191 9 145.5 -3 Q 100 -15 77 -29 L 77 -700 M 283 -442 Q 233 -442 202 -414 Q 171 -386 157 -335 L 157 -83 Q 176 -72 203 -66.5 Q 230 -61 259 -61 Q 327 -61 367.5 -109 Q 408 -157 408 -259 Q 408 -298 401 -332 Q 394 -366 379 -390 Q 364 -414 340.5 -428 Q 317 -442 283 -442 Z ",
        "0.80": "M 370 0 L 370 -283 Q 370 -323 366.5 -352.5 Q 363 -382 353 -402 Q 343 -422 324.5 -432 Q 306 -442 276 -442 Q 230 -442 199.5 -414 Q 169 -386 157 -344 L 157 0 L 77 0 L 77 -500 L 133 -500 L 148 -439 L 152 -439 Q 179 -471 214.5 -491.5 Q 250 -512 307 -512 Q 355 -512 385.5 -493.5 Q 416 -475 433 -429 Q 456 -468 496.5 -490 Q 537 -512 588 -512 Q 630 -512 659 -502.5 Q 688 -493 707 -469 Q 726 -445 734.5 -404 Q 743 -363 743 -300 L 743 0 L 663 0 L 663 -301 Q 663 -337 659.5 -363.5 Q 656 -390 645.5 -407.5 Q 635 -425 616.5 -433.5 Q 598 -442 568 -442 Q 518 -442 490 -414 Q 462 -386 450 -334 L 450 0 L 370 0 Z ",
        "0.54": "M 401 -178 Q 401 -220 376 -246.5 Q 351 -273 313.5 -293.5 Q 276 -314 232 -332 Q 188 -350 150.5 -375.5 Q 113 -401 88 -438.5 Q 63 -476 63 -534 Q 63 -616 120 -664 Q 177 -712 282 -712 Q 343 -712 393 -703 Q 443 -694 471 -680 L 446 -607 Q 423 -618 378.5 -628 Q 334 -638 278 -638 Q 212 -638 179 -608.5 Q 146 -579 146 -539 Q 146 -500 171 -474 Q 196 -448 233.5 -427.5 Q 271 -407 315 -387 Q 359 -367 396.5 -340.5 Q 434 -314 459 -277 Q 484 -240 484 -185 Q 484 -140 468 -104 Q 452 -68 421 -42 Q 390 -16 346 -2 Q 302 12 246 12 Q 171 12 122 0.5 Q 73 -11 46 -25 L 74 -100 Q 97 -87 142 -74.5 Q 187 -62 243 -62 Q 276 -62 305 -68.5 Q 334 -75 355 -89.5 Q 376 -104 388.5 -126 Q 401 -148 401 -178 Z ",
        "0.91": "M 208 -256 L 40 -500 L 138 -500 L 233 -362 L 261 -305 L 290 -362 L 387 -500 L 477 -500 L 308 -260 L 487 0 L 392 0 L 286 -152 L 256 -212 L 225 -152 L 117 0 L 28 0 L 208 -256 Z ",
        "0.46": "M 215 -324 L 168 -324 L 168 0 L 85 0 L 85 -700 L 168 -700 L 168 -374 L 213 -388 L 448 -700 L 544 -700 L 310 -399 L 268 -366 L 319 -326 L 575 0 L 470 0 L 215 -324 Z ",
        "0.44": "M 104 -700 L 187 -700 L 187 0 L 104 0 L 104 -700 Z ",
        "0.60": "M 239 -278 L 8 -700 L 105 -700 L 269 -394 L 286 -333 L 287 -333 L 305 -396 L 462 -700 L 551 -700 L 322 -279 L 322 0 L 239 0 L 239 -278 Z ",
        "0.40": "M 85 -700 L 466 -700 L 466 -626 L 168 -626 L 168 -397 L 441 -397 L 441 -323 L 168 -323 L 168 -74 L 471 -74 L 471 0 L 85 0 L 85 -700 Z ",
        "0.52": "M 704 171 Q 680 178 657 180.5 Q 634 183 611 183 Q 561 183 513.5 172.5 Q 466 162 421.5 149.5 Q 377 137 336 126.5 Q 295 116 258 116 Q 234 116 212 122 L 212 49 Q 226 46 239 44 Q 252 42 266 42 Q 308 42 349.5 52.5 Q 391 63 434 75.5 Q 477 88 522 98.5 Q 567 109 617 109 Q 661 109 704 99 L 704 171 M 56 -350 Q 56 -525 130 -618.5 Q 204 -712 341 -712 Q 415 -712 469 -686 Q 523 -660 558.5 -612.5 Q 594 -565 611 -498.5 Q 628 -432 628 -350 Q 628 -175 553.5 -81.5 Q 479 12 341 12 Q 268 12 214.5 -14 Q 161 -40 125.5 -87.5 Q 90 -135 73 -201.5 Q 56 -268 56 -350 M 144 -350 Q 144 -292 155.5 -240 Q 167 -188 191 -148.5 Q 215 -109 252.5 -85.5 Q 290 -62 341 -62 Q 434 -62 487 -132.5 Q 540 -203 540 -350 Q 540 -407 528.5 -459.5 Q 517 -512 492.5 -551.5 Q 468 -591 430.5 -614.5 Q 393 -638 341 -638 Q 249 -638 196.5 -567.5 Q 144 -497 144 -350 Z ",
        "0.41": "M 85 -700 L 466 -700 L 466 -626 L 168 -626 L 168 -387 L 446 -387 L 446 -313 L 168 -313 L 168 0 L 85 0 L 85 -700 Z ",
        "0.84": "M 460 200 L 380 200 L 380 -50 L 376 -50 Q 356 -20 325.5 -4 Q 295 12 245 12 Q 145 12 97 -51.5 Q 49 -115 49 -248 Q 49 -377 111 -443 Q 173 -509 292 -509 Q 345 -509 391.5 -499 Q 438 -489 460 -478 L 460 200 M 259 -58 Q 310 -58 339 -84 Q 368 -110 380 -164 L 380 -420 Q 343 -439 278 -439 Q 209 -439 170.5 -392.5 Q 132 -346 132 -249 Q 132 -207 139 -171.5 Q 146 -136 161 -111 Q 176 -86 200 -72 Q 224 -58 259 -58 Z ",
        "0.0": "M 50 -700 L 700 -700 L 700 0 L 50 0 L 50 -700 M 570 -620 L 375 -403 L 180 -620 L 130 -570 L 327 -350 L 130 -130 L 180 -80 L 375 -297 L 570 -80 L 620 -130 L 422 -350 L 620 -570 L 570 -620 M 129 -27 L 137 -27 L 137 -39 L 141 -39 Q 147 -39 152 -41.5 Q 157 -44 157 -51 Q 157 -59 151.5 -61 Q 146 -63 140 -63 L 129 -63 L 129 -27 M 141 -57 Q 149 -57 149 -52 Q 149 -47 146.5 -46.5 Q 144 -46 140 -46 L 137 -46 L 137 -57 L 141 -57 M 189 -63 L 158 -63 L 158 -57 L 170 -57 L 170 -27 L 177 -27 L 177 -57 L 189 -57 L 189 -63 M 222 -37 Q 222 -33 215 -33 Q 208 -33 206 -35 L 203 -28 Q 205 -28 208 -27 Q 211 -26 216 -26 Q 230 -26 230 -38 Q 230 -47 221 -48 Q 212 -49 212 -54 Q 212 -57 218 -57 Q 223 -57 227 -55 L 229 -62 Q 223 -64 218 -64 Q 204 -64 204 -53 Q 204 -48 207 -46 Q 210 -44 213 -42.5 Q 216 -41 219 -40 Q 222 -39 222 -37 M 237 -47 Q 241 -49 246 -49 Q 251 -49 251 -45 L 251 -43 Q 250 -43 249 -43.5 Q 248 -44 246 -44 Q 234 -44 234 -34 Q 234 -26 242 -26 Q 248 -26 251 -31 L 253 -27 L 259 -27 Q 258 -29 258 -34 L 258 -45 Q 258 -55 248 -55 Q 244 -55 240.5 -54 Q 237 -53 235 -52 L 237 -47 M 245 -32 Q 241 -32 241 -36 Q 241 -40 246 -40 Q 248 -40 249 -39.5 Q 250 -39 251 -39 L 251 -36 Q 249 -32 245 -32 M 292 -27 L 292 -43 Q 292 -55 283 -55 Q 276 -55 273 -50 L 271 -54 L 266 -54 L 266 -27 L 273 -27 L 273 -44 Q 275 -48 279 -48 Q 284 -48 284 -42 L 284 -27 L 292 -27 M 297 -28 Q 301 -26 307 -26 Q 318 -26 318 -35 Q 318 -40 315.5 -41 Q 313 -42 310 -44 Q 305 -46 305 -47 Q 305 -49 308 -49 Q 312 -49 316 -47 L 318 -53 Q 314 -55 308 -55 Q 298 -55 298 -46 Q 298 -41 301 -39.5 Q 304 -38 306 -37 Q 311 -37 311 -34 Q 311 -32 308 -32 Q 303 -32 299 -34 L 297 -28 M 338 -42 Q 338 -21 358 -21 Q 378 -21 378 -42 Q 378 -62 358 -62 Q 350 -62 344 -56.5 Q 338 -51 338 -42 M 344 -42 Q 344 -57 358 -57 Q 372 -57 372 -42 Q 372 -27 358 -27 Q 344 -27 344 -42 M 364 -38 Q 362 -37 360 -37 Q 356 -37 356 -42 Q 356 -46 360 -46 L 363 -46 L 365 -50 Q 361 -52 358 -52 Q 349 -52 349 -42 Q 349 -31 358 -31 Q 363 -31 365 -33 L 364 -38 M 399 -27 L 407 -27 L 407 -39 L 411 -39 Q 417 -39 422 -41.5 Q 427 -44 427 -51 Q 427 -59 421.5 -61 Q 416 -63 410 -63 L 399 -63 L 399 -27 M 411 -57 Q 419 -57 419 -52 Q 419 -47 416.5 -46.5 Q 414 -46 410 -46 L 407 -46 L 407 -57 L 411 -57 M 432 -47 Q 436 -49 441 -49 Q 446 -49 446 -45 L 446 -43 Q 445 -43 444 -43.5 Q 443 -44 441 -44 Q 428 -44 428 -34 Q 428 -26 437 -26 Q 443 -26 446 -31 L 448 -27 L 454 -27 Q 453 -29 453 -34 L 453 -45 Q 453 -55 443 -55 Q 439 -55 435.5 -54 Q 432 -53 430 -52 L 432 -47 M 440 -32 Q 436 -32 436 -36 Q 436 -40 441 -40 Q 443 -40 444 -39.5 Q 445 -39 446 -39 L 446 -36 Q 444 -32 440 -32 M 478 -54 Q 477 -55 474 -55 Q 470 -55 468 -50 L 467 -50 L 466 -54 L 460 -54 L 460 -27 L 468 -27 L 468 -44 Q 468 -48 474 -48 L 475 -48 Q 476 -48 476 -47.5 Q 476 -47 477 -47 L 478 -54 M 483 -47 Q 489 -49 492 -49 Q 497 -49 497 -45 L 497 -43 Q 496 -43 495 -43.5 Q 494 -44 492 -44 Q 479 -44 479 -34 Q 479 -26 488 -26 Q 495 -26 497 -31 L 498 -31 L 499 -27 L 505 -27 Q 504 -29 504 -34 L 504 -45 Q 504 -55 494 -55 Q 490 -55 487 -54 Q 484 -53 482 -52 L 483 -47 M 491 -32 Q 487 -32 487 -36 Q 487 -40 492 -40 Q 494 -40 495 -39.5 Q 496 -39 497 -39 L 497 -36 Q 495 -32 491 -32 M 533 -63 L 502 -63 L 502 -57 L 513 -57 L 513 -27 L 521 -27 L 521 -57 L 533 -57 L 533 -63 M 541 -54 L 533 -54 L 545 -27 Q 544 -22 540 -22 L 539 -23 L 537 -17 Q 539 -16 542 -16 Q 547 -16 552 -29 L 562 -54 L 554 -54 L 549 -39 L 549 -34 L 548 -34 L 547 -39 L 541 -54 M 565 -16 L 573 -16 L 573 -28 Q 574 -26 578 -26 Q 592 -26 592 -41 Q 592 -55 581 -55 Q 576 -55 572 -51 L 571 -51 L 570 -54 L 565 -54 L 565 -16 M 579 -49 Q 584 -49 584 -41 Q 584 -32 577 -32 Q 575 -32 573 -34 L 573 -44 Q 573 -49 579 -49 M 618 -34 Q 616 -32 611 -32 Q 604 -32 603 -38 L 622 -38 L 622 -44 Q 622 -50 618.5 -52.5 Q 615 -55 610 -55 Q 596 -55 596 -40 Q 596 -26 610 -26 Q 613 -26 616 -27 Q 619 -28 621 -29 L 618 -34 M 610 -49 Q 616 -49 615 -43 L 604 -43 Q 604 -49 610 -49 Z "
    },
    "tags": [{
        "text": "https://t.co",
        //co",
        "fill": "#d62a18",
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
        "text": "Red",
        /*//red",*/
        "fill": "#d62a18",
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
        "parentId": 8,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1726.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04675, 0, 76.04115776130969], [0, 0.04675, 60.71182352361828]]
    }, {
        "text": "Merah",
        //merah",
        "fill": "#d62a18",
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
        "parentId": 4020,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2762.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.04727528089887641, 0, 29.567741029825513], [0, 0.04727528089887641, 158.57829183670722]]
    }, {
        "text": "Rojo",
        //rojo",
        "fill": "#d62a18",
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
            "glyph": "0.77"
        }, {
            "x": 1398,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 3464,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 2103.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.03233695652173913, 0, 16.037640436117176], [0, 0.03233695652173913, 75.5195652173913]]
    }, {
        "text": "&",
        //amp",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.9"
        }],
        "parentId": 103,
        "bbox": {
            "x": 15.864999999999995,
            "y": -814.135,
            "width": 823.27,
            "height": 928.27
        },
        "shapeColor": "3488bf",
        "matrix": [[0.048061389337641355, 0, 146.95375605815832], [0, 0.048061389337641355, 84.05492710918409]]
    }, {
        "text": "Blue",
        //blue",
        "fill": "#d62a18",
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
        "parentId": 576,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2026.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.03777777777777778, 0, 61.024367820654156], [0, 0.03777777777777778, 189.14666666666668]]
    }, {
        "text": "Drink",
        //drink",
        "fill": "#d62a18",
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
        "parentId": 288,
        "bbox": {
            "x": -33.30500000000001,
            "y": -826.3050000000001,
            "width": 2429.61,
            "height": 953.61
        },
        "shapeColor": "3488bf",
        "matrix": [[0.024895397489539752, 0, 72.48838432335906], [0, 0.024895397489539752, 25.20094142259414]]
    }, {
        "text": "Carpet",
        //carpet",
        "fill": "#d62a18",
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
            "glyph": "0.85"
        }, {
            "x": 1407,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 1948,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2456,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 345,
        "bbox": {
            "x": -94.48000000000002,
            "y": -862.48,
            "width": 3028.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.019572368421052633, 0, 138.8959381726883], [0, 0.019572368421052633, 126.51052631578948]]
    }, {
        "text": "Pic",
        //pic",
        "fill": "#d62a18",
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
        "parentId": 1396,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1397.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.030694444444444448, 0, 39.449174935199935], [0, 0.030694444444444448, 49.68166666666667]]
    }, {
        "text": "Love",
        //love",
        "fill": "#d62a18",
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
        "parentId": 619,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2143.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.02268258426966292, 0, 104.1238793566176], [0, 0.02268258426966292, 79.30280898876404]]
    }, {
        "text": "White",
        //white",
        "fill": "#d62a18",
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
        "parentId": 163,
        "bbox": {
            "x": -110.80000000000001,
            "y": -826.8,
            "width": 2670.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.020069444444444442, 0, 80.78000374280806], [0, 0.020069444444444442, 132.48416666666665]]
    }, {
        "text": "Black",
        //black",
        "fill": "#d62a18",
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
        "parentId": 164,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2444.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.016527777777777777, 0, 12.948684187731345], [0, 0.016527777777777777, 123.75166666666667]]
    }, {
        "text": "Rose",
        //rose",
        "fill": "#d62a18",
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
        "parentId": 270,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2163.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.016527777777777777, 0, 132.53511026435314], [0, 0.016527777777777777, 171.75166666666667]]
    }, {
        "text": "Tanggal",
        //tanggal",
        "fill": "#d62a18",
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
            "glyph": "0.81"
        }, {
            "x": 1598,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 2135,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 2672,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 3168,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 6799,
        "bbox": {
            "x": -132.48000000000002,
            "y": -850.48,
            "width": 3733.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01211622807017544, 0, 62.07040485530907], [0, 0.01211622807017544, 85.4563596491228]]
    }, {
        "text": "Photo",
        //photo",
        "fill": "#d62a18",
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
        "parentId": 126,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2620.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.014708350818296264, 0, 152.72479018044484], [0, 0.014708350818296264, 142.82812162080737]]
    }, {
        "text": "Velvet",
        //velvet",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.57"
        }, {
            "x": 568,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1076,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 1368,
            "y": 0,
            "glyph": "0.89"
        }, {
            "x": 1850,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2358,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 9,
        "bbox": {
            "x": -119.48,
            "y": -817.48,
            "width": 2922.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011938202247191011, 0, 108.97886826851658], [0, 0.011938202247191011, 35.10674157303371]]
    }, {
        "text": "Rock",
        //rock",
        "fill": "#d62a18",
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
        "parentId": 332,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2203.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.015347222222222224, 0, 30.197727253325407], [0, 0.015347222222222224, 170.84083333333334]]
    }, {
        "text": "Bull",
        //bull",
        "fill": "#d62a18",
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
            "glyph": "0.79"
        }, {
            "x": 1415,
            "y": 0,
            "glyph": "0.79"
        }],
        "parentId": 563,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1850.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.015347222222222224, 0, 154.9845392064762], [0, 0.015347222222222224, 154.84083333333334]]
    }, {
        "text": "Pk",
        //pk",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.51"
        }, {
            "x": 559,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 2023,
        "bbox": {
            "x": -31.820000000000007,
            "y": -824.82,
            "width": 1176.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.021610169491525423, 0, 77.3927209858741], [0, 0.021610169491525423, 77.65]]
    }, {
        "text": "Violet",
        //violet",
        "fill": "#d62a18",
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
        "parentId": 1623,
        "bbox": {
            "x": -120.80000000000001,
            "y": -826.8,
            "width": 2739.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011805555555555555, 0, 98.16099438326071], [0, 0.011805555555555555, 168.10833333333332]]
    }, {
        "text": "Day",
        //day",
        "fill": "#d62a18",
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
        "parentId": 3,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 1823.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013964950711938665, 0, 150.90868997483173], [0, 0.013964950711938665, 45.01218510405258]]
    }, {
        "text": "Nivel",
        //nivel",
        "fill": "#d62a18",
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
        "parentId": 17119,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2367.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01293222683264177, 0, 44.04138865591952], [0, 0.01293222683264177, 27.0198132780083]]
    }, {
        "text": "Dgt",
        //dgt",
        "fill": "#d62a18",
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
        "parentId": 20109,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 1737.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.014782608695652174, 0, 8.185580081733994], [0, 0.014782608695652174, 135.66608695652175]]
    }, {
        "text": "Green",
        //green",
        "fill": "#d62a18",
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
        "parentId": 279,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2628.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010566298342541436, 0, 89.04995000552935], [0, 0.010566298342541436, 198.19820441988952]]
    }, {
        "text": "Make",
        //make",
        "fill": "#d62a18",
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
        "parentId": 1202,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2374.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01074438202247191, 0, 24.68268141381291], [0, 0.01074438202247191, 84.19606741573034]]
    }, {
        "text": "Go",
        //go",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 612,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 120,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1281.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.01643646408839779, 0, 21.286664213683103], [0, 0.01643646408839779, 50.75276243093923]]
    }, {
        "text": "Vs",
        //vs",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.57"
        }, {
            "x": 568,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 611,
        "bbox": {
            "x": -119.48,
            "y": -817.48,
            "width": 1181.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.016713483146067416, 0, 134.2951778644966], [0, 0.016713483146067416, 184.74943820224718]]
    }, {
        "text": "One",
        //one",
        "fill": "#d62a18",
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
        "parentId": 754,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1872.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.012914364640883977, 0, 130.25091594380967], [0, 0.012914364640883977, 26.020027624309392]]
    }, {
        "text": "Up",
        //up",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.56"
        }, {
            "x": 652,
            "y": 0,
            "glyph": "0.83"
        }],
        "parentId": 173,
        "bbox": {
            "x": -63.5,
            "y": -848.5,
            "width": 1356,
            "height": 1197
        },
        "shapeColor": "3488bf",
        "matrix": [[0.014447592067988669, 0, 63.12195467422096], [0, 0.014447592067988669, 126.75950979670147]]
    }, {
        "text": "New",
        //new",
        "fill": "#d62a18",
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
        "parentId": 132,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2061.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011756569847856155, 0, 40.800175634327765], [0, 0.011756569847856155, 180.10892116182572]]
    }, {
        "text": "Out",
        //out",
        "fill": "#d62a18",
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
        "parentId": 281,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 1733.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011740331491712707, 0, 12.309684822065226], [0, 0.011740331491712707, 148.10911602209944]]
    }, {
        "text": "Hair",
        //hair",
        "fill": "#d62a18",
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
            "glyph": "0.76"
        }, {
            "x": 1436,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 202,
        "bbox": {
            "x": -33.14,
            "y": -826.14,
            "width": 1917.28,
            "height": 952.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010684357541899442, 0, 58.79231715748705], [0, 0.010684357541899442, 58.239525139664806]]
    }, {
        "text": "Good",
        //good",
        "fill": "#d62a18",
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
        "parentId": 1065,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2337.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009392265193370166, 0, 154.8021955961497], [0, 0.009392265193370166, 162.28729281767957]]
    }, {
        "text": "Air",
        //air",
        "fill": "#d62a18",
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
        "parentId": 1059,
        "bbox": {
            "x": -109.31500000000001,
            "y": -828.315,
            "width": 1409.63,
            "height": 945.63
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013150492264416315, 0, 122.94524982283323], [0, 0.013150492264416315, 121.17500000000001]]
    }, {
        "text": "Cafe",
        //cafe",
        "fill": "#d62a18",
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
        "parentId": 13,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2027.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.010566298342541436, 0, 38.36979338175608], [0, 0.010566298342541436, 159.1982044198895]]
    }, {
        "text": "Wine",
        //wine",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.58"
        }, {
            "x": 828,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1096,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1643,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 320,
        "bbox": {
            "x": -110.80000000000001,
            "y": -826.8,
            "width": 2331.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009444444444444445, 0, 34.27510243464519], [0, 0.009444444444444445, 58.28666666666666]]
    }, {
        "text": "Today",
        //today",
        "fill": "#d62a18",
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
        "parentId": 1125,
        "bbox": {
            "x": -131.32500000000002,
            "y": -849.325,
            "width": 2862.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007332293291731669, 0, 171.46801872074883], [0, 0.007332293291731669, 64.73502446916909]]
    }, {
        "text": "Look",
        //look",
        "fill": "#d62a18",
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
        "parentId": 672,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2207.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008356741573033708, 0, 78.99319685903843], [0, 0.008356741573033708, 117.3747191011236]]
    }, {
        "text": "Night",
        //night",
        "fill": "#d62a18",
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
        "parentId": 549,
        "bbox": {
            "x": -67.29500000000002,
            "y": -863.2950000000001,
            "width": 2572.59,
            "height": 1227.5900000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007367280606717226, 0, 150.47744454270202], [0, 0.007367280606717226, 32.83813651137594]]
    }, {
        "text": "Bbma",
        //bbma",
        "fill": "#d62a18",
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
            "glyph": "0.68"
        }],
        "parentId": 2860,
        "bbox": {
            "x": -33.30500000000001,
            "y": -826.3050000000001,
            "width": 2517.61,
            "height": 953.61
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008298465829846583, 0, 53.82745248741981], [0, 0.008298465829846583, 17.400313807531383]]
    }, {
        "text": "Time",
        //time",
        "fill": "#d62a18",
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
        "parentId": 1132,
        "bbox": {
            "x": -100.80000000000001,
            "y": -826.8,
            "width": 2313.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008164739884393063, 0, 139.3780346820809], [0, 0.008164739884393063, 89.31166121207254]]
    }, {
        "text": "Beach",
        //beach",
        "fill": "#d62a18",
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
        "parentId": 1029,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2669.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007083333333333333, 0, 174.20642780128244], [0, 0.007083333333333333, 132.46499999999997]]
    }, {
        "text": "Sox",
        //sox",
        "fill": "#d62a18",
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
            "glyph": "0.91"
        }],
        "parentId": 892,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1746.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009980106100795756, 0, 139.5159151193634], [0, 0.009980106100795756, 103.4735259057114]]
    }, {
        "text": "Orang",
        //orang",
        "fill": "#d62a18",
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
        "parentId": 1971,
        "bbox": {
            "x": -96.46000000000001,
            "y": -864.46,
            "width": 2775.92,
            "height": 1228.92
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006272764063132335, 0, 102.39872521246458], [0, 0.006272764063132335, 9.828629208318603]]
    }, {
        "text": "Light",
        //light",
        "fill": "#d62a18",
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
        "parentId": 65,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 2415.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007007575757575758, 0, 17.00435606060606], [0, 0.007007575757575758, 154.84240194336707]]
    }, {
        "text": "Kit",
        //kit",
        "fill": "#d62a18",
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
            "glyph": "0.87"
        }],
        "parentId": 75,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1358.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011909009812667262, 0, 182.8127341659233], [0, 0.011909009812667262, 87.803483247954]]
    }, {
        "text": "Color",
        //color",
        "fill": "#d62a18",
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
        "parentId": 2022,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2447.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007044198895027624, 0, 126.87643088851237], [0, 0.007044198895027624, 67.46546961325967]]
    }, {
        "text": "Park",
        //park",
        "fill": "#d62a18",
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
        "parentId": 874,
        "bbox": {
            "x": -33.14,
            "y": -826.14,
            "width": 2015.28,
            "height": 952.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008319280494659922, 0, 179.89286115795392], [0, 0.008319280494659922, 77.6494140817701]]
    }, {
        "text": "Now",
        //now",
        "fill": "#d62a18",
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
        "parentId": 240,
        "bbox": {
            "x": -34.295,
            "y": -830.295,
            "width": 2089.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008076715289032955, 0, 171.8384792004322], [0, 0.008076715289032955, 58.360933128299756]]
    }, {
        "text": "Ini",
        //ini",
        "fill": "#d62a18",
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
        "parentId": 2982,
        "bbox": {
            "x": -12.820000000000007,
            "y": -824.82,
            "width": 1157.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013206214689265536, 0, 3.586224345406544], [0, 0.013206214689265536, 80.175]]
    }, {
        "text": "Lampu",
        //lampu",
        "fill": "#d62a18",
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
            "glyph": "0.80"
        }, {
            "x": 1825,
            "y": 0,
            "glyph": "0.83"
        }, {
            "x": 2366,
            "y": 0,
            "glyph": "0.88"
        }],
        "parentId": 10144,
        "bbox": {
            "x": -63.5,
            "y": -848.5,
            "width": 3051,
            "height": 1197
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005666666666666666, 0, 72.44777258384632], [0, 0.005666666666666666, 194.41666666666669]]
    }, {
        "text": "Yg",
        //yg",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.60"
        }, {
            "x": 558,
            "y": 0,
            "glyph": "0.74"
        }],
        "parentId": 7251,
        "bbox": {
            "x": -142.48000000000002,
            "y": -850.48,
            "width": 1310.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011089108910891089, 0, 162.81128712871288], [0, 0.011089108910891089, 102.70384071693616]]
    }, {
        "text": "Bar",
        //bar",
        "fill": "#d62a18",
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
        "parentId": 230,
        "bbox": {
            "x": -33.14,
            "y": -826.14,
            "width": 1561.28,
            "height": 952.28
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009497206703910615, 0, 84.50750213313546], [0, 0.009497206703910615, 8.324022346368716]]
    }, {
        "text": "Race",
        //race",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.53"
        }, {
            "x": 595,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1091,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1542,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 2147,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2153.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007802713987473903, 0, 137.86176931106473], [0, 0.007802713987473903, 133.3276890928392]]
    }, {
        "text": "Beauty",
        //beauty",
        "fill": "#d62a18",
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
        "parentId": 406,
        "bbox": {
            "x": -65.64500000000001,
            "y": -858.645,
            "width": 3139.29,
            "height": 1214.29
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005585980284775465, 0, 112.61417804893196], [0, 0.005585980284775465, 54.40487404162103]]
    }, {
        "text": "Ey",
        //ey",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 536,
            "y": 0,
            "glyph": "0.92"
        }],
        "parentId": 1001,
        "bbox": {
            "x": -64.32500000000002,
            "y": -849.325,
            "width": 1206.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.011233480176211452, 0, 29.945154185022027], [0, 0.011233480176211452, 37.71826000228024]]
    }, {
        "text": "Que",
        //que",
        "fill": "#d62a18",
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
        "parentId": 774,
        "bbox": {
            "x": -91.67500000000001,
            "y": -859.675,
            "width": 1921.35,
            "height": 1190.35
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007597765363128491, 0, 42.118456003718265], [0, 0.007597765363128491, 130.00960893854747]]
    }, {
        "text": "Fc",
        //fc",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.41"
        }, {
            "x": 517,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 609,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 1084.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013132022471910112, 0, 91.80386809362878], [0, 0.013132022471910112, 105.01741573033708]]
    }, {
        "text": "See",
        //see",
        "fill": "#d62a18",
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
        "parentId": 217,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1690.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.008218232044198895, 0, 51.1630245221178], [0, 0.008218232044198895, 89.3763812154696]]
    }, {
        "text": "Robin",
        //robin",
        "fill": "#d62a18",
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
            "glyph": "0.69"
        }, {
            "x": 1671,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 1939,
            "y": 0,
            "glyph": "0.81"
        }],
        "parentId": 299,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2569.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007083333333333333, 0, 76.22912635342723], [0, 0.007083333333333333, 153.465]]
    }, {
        "text": "Burger",
        //burger",
        "fill": "#d62a18",
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
            "glyph": "0.74"
        }, {
            "x": 2000,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2508,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 301,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 3056.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005543478260869565, 0, 63.81533392667556], [0, 0.005543478260869565, 32.374782608695654]]
    }, {
        "text": "Happy",
        //happy",
        "fill": "#d62a18",
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
        "parentId": 371,
        "bbox": {
            "x": -64.32500000000002,
            "y": -849.325,
            "width": 2920.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005377574370709382, 0, 128.9929061784897], [0, 0.005377574370709382, 14.282571005278712]]
    }, {
        "text": "Four",
        //four",
        "fill": "#d62a18",
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
        "parentId": 1800,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2071.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007162921348314606, 0, 115.35619926108652], [0, 0.007162921348314606, 195.4640449438202]]
    }, {
        "text": "Putih",
        //putih",
        "fill": "#d62a18",
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
        "parentId": 5899,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2335.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 172.69797878869497], [0, 0.005902777777777778, 115.55416666666666]]
    }, {
        "text": "City",
        //city",
        "fill": "#d62a18",
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
        "parentId": 2647,
        "bbox": {
            "x": -95.305,
            "y": -863.3050000000001,
            "width": 1881.6100000000001,
            "height": 1219.6100000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007916402786573781, 0, 45.30668144395187], [0, 0.007916402786573781, 48.75488593197646]]
    }, {
        "text": "Last",
        //last",
        "fill": "#d62a18",
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
            "glyph": "0.86"
        }, {
            "x": 1434,
            "y": 0,
            "glyph": "0.87"
        }],
        "parentId": 327,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 1911.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007162921348314606, 0, 49.894883113832925], [0, 0.007162921348314606, 186.46404494382023]]
    }, {
        "text": "House",
        //house",
        "fill": "#d62a18",
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
        "parentId": 336,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2776.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0059691011235955055, 0, 155.78345544349182], [0, 0.0059691011235955055, 115.55337078651687]]
    }, {
        "text": "Australia",
        //australia",
        "fill": "#d62a18",
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
        "parentId": 8885,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 3940.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005878284923928077, 0, 100.5155648055432], [0, 0.005878284923928077, 144.55446058091286]]
    }, {
        "text": "Diamond",
        //diamond",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.39"
        }, {
            "x": 654,
            "y": 0,
            "glyph": "0.76"
        }, {
            "x": 922,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1418,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2230,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2766,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 3313,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 2432,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 3936.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004722222222222222, 0, 162.63430610267199], [0, 0.004722222222222222, 88.64333333333333]]
    }, {
        "text": "Yang",
        //yang",
        "fill": "#d62a18",
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
        "parentId": 5532,
        "bbox": {
            "x": -142.48000000000002,
            "y": -850.48,
            "width": 2353.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006234778373112519, 0, 11.550121773015098], [0, 0.006234778373112519, 86.64283035534706]]
    }, {
        "text": "Tanah",
        //tanah",
        "fill": "#d62a18",
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
            "glyph": "0.81"
        }, {
            "x": 1598,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2094,
            "y": 0,
            "glyph": "0.75"
        }],
        "parentId": 29678,
        "bbox": {
            "x": -98.82000000000001,
            "y": -816.82,
            "width": 2787.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006002824858757062, 0, 109.7939859921286], [0, 0.006002824858757062, 66.57697740112994]]
    }, {
        "text": "Si",
        //si",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.76"
        }],
        "parentId": 5052,
        "bbox": {
            "x": -65.375,
            "y": -823.375,
            "width": 897.75,
            "height": 946.75
        },
        "shapeColor": "3488bf",
        "matrix": [[0.013851851851851851, 0, 138.1878148148148], [0, 0.013851851851851851, 158.42537778282474]]
    }, {
        "text": "Luke",
        //luke",
        "fill": "#d62a18",
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
        "parentId": 8890,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 2143.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0059691011235955055, 0, 171.046024625653], [0, 0.0059691011235955055, 51.55337078651685]]
    }, {
        "text": "Square",
        //square",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.54"
        }, {
            "x": 531,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1068,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1607,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2103,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2443,
            "y": 0,
            "glyph": "0.72"
        }],
        "parentId": 265,
        "bbox": {
            "x": -104.48000000000002,
            "y": -862.48,
            "width": 3156.96,
            "height": 1212.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004660087719298245, 0, 122.43701057971595], [0, 0.004660087719298245, 183.69298245614036]]
    }, {
        "text": "Hot",
        //hot",
        "fill": "#d62a18",
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
        }],
        "parentId": 973,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 1685.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007162921348314606, 0, 151.04912512400452], [0, 0.007162921348314606, 177.46404494382023]]
    }, {
        "text": "Michael",
        //michael",
        "fill": "#d62a18",
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
        "parentId": 1843,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 3496.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004722222222222222, 0, 67.37766027286979], [0, 0.004722222222222222, 133.64333333333332]]
    }, {
        "text": "Idiot",
        //idiot",
        "fill": "#d62a18",
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
        "parentId": 8884,
        "bbox": {
            "x": -14.800000000000011,
            "y": -826.8,
            "width": 2094.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006515885837372106, 0, 142.7723478729133], [0, 0.006515885837372106, 66.22215846166127]]
    }, {
        "text": "Card",
        //card",
        "fill": "#d62a18",
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
            "glyph": "0.85"
        }, {
            "x": 1407,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 2024,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2060.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006641053787047201, 0, 51.07810098792535], [0, 0.006641053787047201, 124.22784583188854]]
    }, {
        "text": "Marry",
        //marry",
        "fill": "#d62a18",
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
        "parentId": 6047,
        "bbox": {
            "x": -64.32500000000002,
            "y": -849.325,
            "width": 2637.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005173150919196238, 0, 1.0102821718683195], [0, 0.005173150919196238, 115.4766404945855]]
    }, {
        "text": "Happier",
        //happier",
        "fill": "#d62a18",
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
        "parentId": 8886,
        "bbox": {
            "x": -64.82,
            "y": -857.8199999999999,
            "width": 3570.64,
            "height": 1207.6399999999999
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004680616740088106, 0, 61.06933459318664], [0, 0.004680616740088106, 114.68887665198237]]
    }, {
        "text": "Brew",
        //brew",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 584,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 924,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 1432,
            "y": 0,
            "glyph": "0.90"
        }],
        "parentId": 241,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2311.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005902777777777778, 0, 154.6087327544807], [0, 0.005902777777777778, 131.55416666666667]]
    }, {
        "text": "Ashton",
        //ashton",
        "fill": "#d62a18",
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
        "parentId": 8887,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 3136.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004702627939142462, 0, 100.78709787878866], [0, 0.004702627939142462, 4.643568464730291]]
    }, {
        "text": "Calum",
        //calum",
        "fill": "#d62a18",
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
        "parentId": 8889,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2823.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004696132596685083, 0, 132.21146407889225], [0, 0.004696132596685083, 188.64364640883977]]
    }, {
        "text": "Lobster",
        //lobster",
        "fill": "#d62a18",
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
            "glyph": "0.69"
        }, {
            "x": 1593,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2014,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 2353,
            "y": 0,
            "glyph": "0.72"
        }, {
            "x": 2861,
            "y": 0,
            "glyph": "0.85"
        }],
        "parentId": 1334,
        "bbox": {
            "x": -32.480000000000004,
            "y": -817.48,
            "width": 3340.96,
            "height": 946.96
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0047752808988764045, 0, 27.157035311252233], [0, 0.0047752808988764045, 114.64269662921349]]
    }, {
        "text": "Tokyo",
        //tokyo",
        "fill": "#d62a18",
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
            "glyph": "0.78"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.92"
        }, {
            "x": 2036,
            "y": 0,
            "glyph": "0.82"
        }],
        "parentId": 2433,
        "bbox": {
            "x": -131.32500000000002,
            "y": -849.325,
            "width": 2803.65,
            "height": 1203.65
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004696132596685083, 0, 60.711174868672664], [0, 0.004696132596685083, 11.662292817679559]]
    }, {
        "text": "Big",
        //big",
        "fill": "#d62a18",
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
        "parentId": 401,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 1530.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.007864710676446618, 0, 99.00649959250204], [0, 0.007864710676446618, 36.39689725301378]]
    }, {
        "text": "Butt",
        //butt",
        "fill": "#d62a18",
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
        "parentId": 22201,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 1942.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006510263929618768, 0, 144.8966275659824], [0, 0.006510263929618768, 95.25944386934844]]
    }, {
        "text": "Others",
        //others",
        "fill": "#d62a18",
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
        "parentId": 4730,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2977.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004696132596685083, 0, 161.23316064618814], [0, 0.004696132596685083, 37.64364640883978]]
    }, {
        "text": "Camerondallas",
        //camerondallas",
        "fill": "#d62a18",
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
        "parentId": 22200,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 6483.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0034507606084867894, 0, 57.031757405924736], [0, 0.0034507606084867894, 161.72691890128067]]
    }, {
        "text": "Obra",
        //obra",
        "fill": "#d62a18",
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
        "parentId": 22866,
        "bbox": {
            "x": -63.46000000000001,
            "y": -831.46,
            "width": 2176.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005870165745856353, 0, 93.62865672785598], [0, 0.005870165745856353, 65.55455801104972]]
    }, {
        "text": "Little",
        //little",
        "fill": "#d62a18",
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
        "parentId": 475,
        "bbox": {
            "x": -33.80000000000001,
            "y": -826.8,
            "width": 2366.6,
            "height": 957.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005284170972287459, 0, 122.92584546735557], [0, 0.005284170972287459, 110.52390825229871]]
    }, {
        "text": "åŸ¼çŽ‰ã‚¹ã‚¿ã‚¸ã‚¢ãƒ ",
        //åŸ¼çŽ‰ã‚¹ã‚¿ã‚¸ã‚¢ãƒ ",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 750,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 1500,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 2250,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 3000,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 3750,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 4500,
            "y": 0,
            "glyph": "0.0"
        }],
        "parentId": 2430,
        "bbox": {
            "x": -65.5,
            "y": -815.5,
            "width": 5381,
            "height": 931
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0036428571428571426, 0, 134.67711052655443], [0, 0.0036428571428571426, 82.775]]
    }, {
        "text": "Urawa",
        //urawa",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.56"
        }, {
            "x": 652,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 992,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 1488,
            "y": 0,
            "glyph": "0.90"
        }, {
            "x": 2223,
            "y": 0,
            "glyph": "0.68"
        }],
        "parentId": 2431,
        "bbox": {
            "x": -32.31500000000001,
            "y": -817.315,
            "width": 2802.63,
            "height": 945.63
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004781997187060478, 0, 150.80956339221103], [0, 0.004781997187060478, 49.647398030942334]]
    }, {
        "text": "Sea",
        //sea",
        "fill": "#d62a18",
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
        "parentId": 1449,
        "bbox": {
            "x": -73.46000000000001,
            "y": -831.46,
            "width": 1661.92,
            "height": 962.9200000000001
        },
        "shapeColor": "3488bf",
        "matrix": [[0.006886858749121575, 0, 7.2832044975404076], [0, 0.006886858749121575, 67.51927750024261]]
    }, {
        "text": "ã•ã„ãŸã¾å¸‚",
        //ã•ã„ãŸã¾å¸‚",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 750,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 1500,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 2250,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 3000,
            "y": 0,
            "glyph": "0.0"
        }],
        "parentId": 2434,
        "bbox": {
            "x": -65.5,
            "y": -815.5,
            "width": 3881,
            "height": 931
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0036428571428571426, 0, 140.6737596082759], [0, 0.0036428571428571426, 18.775]]
    }, {
        "text": "åŸ¼çŽ‰çœŒ",
        //åŸ¼çŽ‰çœŒ",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 750,
            "y": 0,
            "glyph": "0.0"
        }, {
            "x": 1500,
            "y": 0,
            "glyph": "0.0"
        }],
        "parentId": 2435,
        "bbox": {
            "x": -65.5,
            "y": -815.5,
            "width": 2381,
            "height": 931
        },
        "shapeColor": "3488bf",
        "matrix": [[0.004857142857142857, 0, 181.76040084759504], [0, 0.004857142857142857, 70.7]]
    }, {
        "text": "Mi",
        //mi",
        "fill": "#d62a18",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.48"
        }, {
            "x": 791,
            "y": 0,
            "glyph": "0.76"
        }],
        "parentId": 902,
        "bbox": {
            "x": -31.820000000000007,
            "y": -824.82,
            "width": 1129.64,
            "height": 941.64
        },
        "shapeColor": "3488bf",
        "matrix": [[0.009604519774011298, 0, 2.8071076899211804], [0, 0.009604519774011298, 124.4]]
    }, {
        "text": "Ada",
        //ada",
        "fill": "#d62a18",
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
        "parentId": 4781,
        "bbox": {
            "x": -111.295,
            "y": -830.295,
            "width": 1783.59,
            "height": 961.59
        },
        "shapeColor": "3488bf",
        "matrix": [[0.0065372168284789645, 0, 134.39770226537217], [0, 0.0065372168284789645, 51.27324816502142]]
    }, {
        "text": "Dan",
        //dan",
        "fill": "#d62a18",
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
        "parentId": 5388,
        "bbox": {
            "x": -33.30500000000001,
            "y": -826.3050000000001,
            "width": 1779.6100000000001,
            "height": 953.61
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005927475592747559, 0, 152.18603880263737], [0, 0.005927475592747559, 26.57165271966527]]
    }, {
        "text": "Lagi",
        //lagi",
        "fill": "#d62a18",
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
            "glyph": "0.76"
        }],
        "parentId": 5776,
        "bbox": {
            "x": -66.80000000000001,
            "y": -859.8,
            "width": 1958.6,
            "height": 1223.6
        },
        "shapeColor": "3488bf",
        "matrix": [[0.005407854984894259, 0, 179.065332326284], [0, 0.005407854984894259, 102.17514796603517]]
    }]
});