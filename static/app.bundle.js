!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = "./src/app.ts")
}({
    "./node_modules/base64-js/index.js": /*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        t.byteLength = function(e) {
            var t = c(e)
              , n = t[0]
              , i = t[1];
            return 3 * (n + i) / 4 - i
        }
        ,
        t.toByteArray = function(e) {
            for (var t, n = c(e), i = n[0], o = n[1], a = new s(function(e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, i, o)), u = 0, h = o > 0 ? i - 4 : i, l = 0; l < h; l += 4)
                t = r[e.charCodeAt(l)] << 18 | r[e.charCodeAt(l + 1)] << 12 | r[e.charCodeAt(l + 2)] << 6 | r[e.charCodeAt(l + 3)],
                a[u++] = t >> 16 & 255,
                a[u++] = t >> 8 & 255,
                a[u++] = 255 & t;
            2 === o && (t = r[e.charCodeAt(l)] << 2 | r[e.charCodeAt(l + 1)] >> 4,
            a[u++] = 255 & t);
            1 === o && (t = r[e.charCodeAt(l)] << 10 | r[e.charCodeAt(l + 1)] << 4 | r[e.charCodeAt(l + 2)] >> 2,
            a[u++] = t >> 8 & 255,
            a[u++] = 255 & t);
            return a
        }
        ,
        t.fromByteArray = function(e) {
            for (var t, n = e.length, r = n % 3, s = [], o = 0, a = n - r; o < a; o += 16383)
                s.push(h(e, o, o + 16383 > a ? a : o + 16383));
            1 === r ? (t = e[n - 1],
            s.push(i[t >> 2] + i[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1],
            s.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "="));
            return s.join("")
        }
        ;
        for (var i = [], r = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = o.length; a < u; ++a)
            i[a] = o[a],
            r[o.charCodeAt(a)] = a;
        function c(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t),
            [n, n === t ? 0 : 4 - n % 4]
        }
        function h(e, t, n) {
            for (var r, s, o = [], a = t; a < n; a += 3)
                r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),
                o.push(i[(s = r) >> 18 & 63] + i[s >> 12 & 63] + i[s >> 6 & 63] + i[63 & s]);
            return o.join("")
        }
        r["-".charCodeAt(0)] = 62,
        r["_".charCodeAt(0)] = 63
    },
    "./node_modules/buffer/index.js": /*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        (function(e) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            var i = n(/*! base64-js */
            "./node_modules/base64-js/index.js")
              , r = n(/*! ieee754 */
            "./node_modules/ieee754/index.js")
              , s = n(/*! isarray */
            "./node_modules/isarray/index.js");
            function o() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function a(e, t) {
                if (o() < t)
                    throw new RangeError("Invalid typed array length");
                return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)),
                e.length = t),
                e
            }
            function u(e, t, n) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
                    return new u(e,t,n);
                if ("number" == typeof e) {
                    if ("string" == typeof t)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, e)
                }
                return c(this, e, t, n)
            }
            function c(e, t, n, i) {
                if ("number" == typeof t)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, i) {
                    if (t.byteLength,
                    n < 0 || t.byteLength < n)
                        throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (i || 0))
                        throw new RangeError("'length' is out of bounds");
                    t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t,n) : new Uint8Array(t,n,i);
                    u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = p(e, t);
                    return e
                }(e, t, n, i) : "string" == typeof t ? function(e, t, n) {
                    "string" == typeof n && "" !== n || (n = "utf8");
                    if (!u.isEncoding(n))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | d(t, n)
                      , r = (e = a(e, i)).write(t, n);
                    r !== i && (e = e.slice(0, r));
                    return e
                }(e, t, n) : function(e, t) {
                    if (u.isBuffer(t)) {
                        var n = 0 | f(t.length);
                        return 0 === (e = a(e, n)).length ? e : (t.copy(e, 0, 0, n),
                        e)
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                            return "number" != typeof t.length || (i = t.length) != i ? a(e, 0) : p(e, t);
                        if ("Buffer" === t.type && s(t.data))
                            return p(e, t.data)
                    }
                    var i;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }
            function h(e) {
                if ("number" != typeof e)
                    throw new TypeError('"size" argument must be a number');
                if (e < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function l(e, t) {
                if (h(t),
                e = a(e, t < 0 ? 0 : 0 | f(t)),
                !u.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n)
                        e[n] = 0;
                return e
            }
            function p(e, t) {
                var n = t.length < 0 ? 0 : 0 | f(t.length);
                e = a(e, n);
                for (var i = 0; i < n; i += 1)
                    e[i] = 255 & t[i];
                return e
            }
            function f(e) {
                if (e >= o())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
                return 0 | e
            }
            function d(e, t) {
                if (u.isBuffer(e))
                    return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                    return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n)
                    return 0;
                for (var i = !1; ; )
                    switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return R(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return z(e).length;
                    default:
                        if (i)
                            return R(e).length;
                        t = ("" + t).toLowerCase(),
                        i = !0
                    }
            }
            function m(e, t, n) {
                var i = e[t];
                e[t] = e[n],
                e[n] = i
            }
            function y(e, t, n, i, r) {
                if (0 === e.length)
                    return -1;
                if ("string" == typeof n ? (i = n,
                n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                n = +n,
                isNaN(n) && (n = r ? 0 : e.length - 1),
                n < 0 && (n = e.length + n),
                n >= e.length) {
                    if (r)
                        return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!r)
                        return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = u.from(t, i)),
                u.isBuffer(t))
                    return 0 === t.length ? -1 : g(e, t, n, i, r);
                if ("number" == typeof t)
                    return t &= 255,
                    u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : g(e, [t], n, i, r);
                throw new TypeError("val must be string, number or Buffer")
            }
            function g(e, t, n, i, r) {
                var s, o = 1, a = e.length, u = t.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (e.length < 2 || t.length < 2)
                        return -1;
                    o = 2,
                    a /= 2,
                    u /= 2,
                    n /= 2
                }
                function c(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                if (r) {
                    var h = -1;
                    for (s = n; s < a; s++)
                        if (c(e, s) === c(t, -1 === h ? 0 : s - h)) {
                            if (-1 === h && (h = s),
                            s - h + 1 === u)
                                return h * o
                        } else
                            -1 !== h && (s -= s - h),
                            h = -1
                } else
                    for (n + u > a && (n = a - u),
                    s = n; s >= 0; s--) {
                        for (var l = !0, p = 0; p < u; p++)
                            if (c(e, s + p) !== c(t, p)) {
                                l = !1;
                                break
                            }
                        if (l)
                            return s
                    }
                return -1
            }
            function x(e, t, n, i) {
                n = Number(n) || 0;
                var r = e.length - n;
                i ? (i = Number(i)) > r && (i = r) : i = r;
                var s = t.length;
                if (s % 2 != 0)
                    throw new TypeError("Invalid hex string");
                i > s / 2 && (i = s / 2);
                for (var o = 0; o < i; ++o) {
                    var a = parseInt(t.substr(2 * o, 2), 16);
                    if (isNaN(a))
                        return o;
                    e[n + o] = a
                }
                return o
            }
            function v(e, t, n, i) {
                return J(R(t, e.length - n), e, n, i)
            }
            function D(e, t, n, i) {
                return J(function(e) {
                    for (var t = [], n = 0; n < e.length; ++n)
                        t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, i)
            }
            function E(e, t, n, i) {
                return D(e, t, n, i)
            }
            function A(e, t, n, i) {
                return J(z(t), e, n, i)
            }
            function w(e, t, n, i) {
                return J(function(e, t) {
                    for (var n, i, r, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o)
                        n = e.charCodeAt(o),
                        i = n >> 8,
                        r = n % 256,
                        s.push(r),
                        s.push(i);
                    return s
                }(t, e.length - n), e, n, i)
            }
            function b(e, t, n) {
                return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n))
            }
            function C(e, t, n) {
                n = Math.min(e.length, n);
                for (var i = [], r = t; r < n; ) {
                    var s, o, a, u, c = e[r], h = null, l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (r + l <= n)
                        switch (l) {
                        case 1:
                            c < 128 && (h = c);
                            break;
                        case 2:
                            128 == (192 & (s = e[r + 1])) && (u = (31 & c) << 6 | 63 & s) > 127 && (h = u);
                            break;
                        case 3:
                            s = e[r + 1],
                            o = e[r + 2],
                            128 == (192 & s) && 128 == (192 & o) && (u = (15 & c) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (h = u);
                            break;
                        case 4:
                            s = e[r + 1],
                            o = e[r + 2],
                            a = e[r + 3],
                            128 == (192 & s) && 128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && u < 1114112 && (h = u)
                        }
                    null === h ? (h = 65533,
                    l = 1) : h > 65535 && (h -= 65536,
                    i.push(h >>> 10 & 1023 | 55296),
                    h = 56320 | 1023 & h),
                    i.push(h),
                    r += l
                }
                return function(e) {
                    var t = e.length;
                    if (t <= S)
                        return String.fromCharCode.apply(String, e);
                    var n = ""
                      , i = 0;
                    for (; i < t; )
                        n += String.fromCharCode.apply(String, e.slice(i, i += S));
                    return n
                }(i)
            }
            t.Buffer = u,
            t.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return u.alloc(+e)
            }
            ,
            t.INSPECT_MAX_BYTES = 50,
            u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    },
                    42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(),
            t.kMaxLength = o(),
            u.poolSize = 8192,
            u._augment = function(e) {
                return e.__proto__ = u.prototype,
                e
            }
            ,
            u.from = function(e, t, n) {
                return c(null, e, t, n)
            }
            ,
            u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype,
            u.__proto__ = Uint8Array,
            "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0
            })),
            u.alloc = function(e, t, n) {
                return function(e, t, n, i) {
                    return h(t),
                    t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof i ? a(e, t).fill(n, i) : a(e, t).fill(n) : a(e, t)
                }(null, e, t, n)
            }
            ,
            u.allocUnsafe = function(e) {
                return l(null, e)
            }
            ,
            u.allocUnsafeSlow = function(e) {
                return l(null, e)
            }
            ,
            u.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }
            ,
            u.compare = function(e, t) {
                if (!u.isBuffer(e) || !u.isBuffer(t))
                    throw new TypeError("Arguments must be Buffers");
                if (e === t)
                    return 0;
                for (var n = e.length, i = t.length, r = 0, s = Math.min(n, i); r < s; ++r)
                    if (e[r] !== t[r]) {
                        n = e[r],
                        i = t[r];
                        break
                    }
                return n < i ? -1 : i < n ? 1 : 0
            }
            ,
            u.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
                }
            }
            ,
            u.concat = function(e, t) {
                if (!s(e))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length)
                    return u.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0,
                    n = 0; n < e.length; ++n)
                        t += e[n].length;
                var i = u.allocUnsafe(t)
                  , r = 0;
                for (n = 0; n < e.length; ++n) {
                    var o = e[n];
                    if (!u.isBuffer(o))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(i, r),
                    r += o.length
                }
                return i
            }
            ,
            u.byteLength = d,
            u.prototype._isBuffer = !0,
            u.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2)
                    m(this, t, t + 1);
                return this
            }
            ,
            u.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4)
                    m(this, t, t + 3),
                    m(this, t + 1, t + 2);
                return this
            }
            ,
            u.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8)
                    m(this, t, t + 7),
                    m(this, t + 1, t + 6),
                    m(this, t + 2, t + 5),
                    m(this, t + 3, t + 4);
                return this
            }
            ,
            u.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : function(e, t, n) {
                    var i = !1;
                    if ((void 0 === t || t < 0) && (t = 0),
                    t > this.length)
                        return "";
                    if ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                        return "";
                    if ((n >>>= 0) <= (t >>>= 0))
                        return "";
                    for (e || (e = "utf8"); ; )
                        switch (e) {
                        case "hex":
                            return k(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return C(this, t, n);
                        case "ascii":
                            return _(this, t, n);
                        case "latin1":
                        case "binary":
                            return F(this, t, n);
                        case "base64":
                            return b(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return B(this, t, n);
                        default:
                            if (i)
                                throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(),
                            i = !0
                        }
                }
                .apply(this, arguments)
            }
            ,
            u.prototype.equals = function(e) {
                if (!u.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === u.compare(this, e)
            }
            ,
            u.prototype.inspect = function() {
                var e = ""
                  , n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                this.length > n && (e += " ... ")),
                "<Buffer " + e + ">"
            }
            ,
            u.prototype.compare = function(e, t, n, i, r) {
                if (!u.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0),
                void 0 === n && (n = e ? e.length : 0),
                void 0 === i && (i = 0),
                void 0 === r && (r = this.length),
                t < 0 || n > e.length || i < 0 || r > this.length)
                    throw new RangeError("out of range index");
                if (i >= r && t >= n)
                    return 0;
                if (i >= r)
                    return -1;
                if (t >= n)
                    return 1;
                if (t >>>= 0,
                n >>>= 0,
                i >>>= 0,
                r >>>= 0,
                this === e)
                    return 0;
                for (var s = r - i, o = n - t, a = Math.min(s, o), c = this.slice(i, r), h = e.slice(t, n), l = 0; l < a; ++l)
                    if (c[l] !== h[l]) {
                        s = c[l],
                        o = h[l];
                        break
                    }
                return s < o ? -1 : o < s ? 1 : 0
            }
            ,
            u.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }
            ,
            u.prototype.indexOf = function(e, t, n) {
                return y(this, e, t, n, !0)
            }
            ,
            u.prototype.lastIndexOf = function(e, t, n) {
                return y(this, e, t, n, !1)
            }
            ,
            u.prototype.write = function(e, t, n, i) {
                if (void 0 === t)
                    i = "utf8",
                    n = this.length,
                    t = 0;
                else if (void 0 === n && "string" == typeof t)
                    i = t,
                    n = this.length,
                    t = 0;
                else {
                    if (!isFinite(t))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0,
                    isFinite(n) ? (n |= 0,
                    void 0 === i && (i = "utf8")) : (i = n,
                    n = void 0)
                }
                var r = this.length - t;
                if ((void 0 === n || n > r) && (n = r),
                e.length > 0 && (n < 0 || t < 0) || t > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var s = !1; ; )
                    switch (i) {
                    case "hex":
                        return x(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return v(this, e, t, n);
                    case "ascii":
                        return D(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return E(this, e, t, n);
                    case "base64":
                        return A(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return w(this, e, t, n);
                    default:
                        if (s)
                            throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(),
                        s = !0
                    }
            }
            ,
            u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            var S = 4096;
            function _(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var r = t; r < n; ++r)
                    i += String.fromCharCode(127 & e[r]);
                return i
            }
            function F(e, t, n) {
                var i = "";
                n = Math.min(e.length, n);
                for (var r = t; r < n; ++r)
                    i += String.fromCharCode(e[r]);
                return i
            }
            function k(e, t, n) {
                var i = e.length;
                (!t || t < 0) && (t = 0),
                (!n || n < 0 || n > i) && (n = i);
                for (var r = "", s = t; s < n; ++s)
                    r += U(e[s]);
                return r
            }
            function B(e, t, n) {
                for (var i = e.slice(t, n), r = "", s = 0; s < i.length; s += 2)
                    r += String.fromCharCode(i[s] + 256 * i[s + 1]);
                return r
            }
            function T(e, t, n) {
                if (e % 1 != 0 || e < 0)
                    throw new RangeError("offset is not uint");
                if (e + t > n)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function j(e, t, n, i, r, s) {
                if (!u.isBuffer(e))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > r || t < s)
                    throw new RangeError('"value" argument is out of bounds');
                if (n + i > e.length)
                    throw new RangeError("Index out of range")
            }
            function I(e, t, n, i) {
                t < 0 && (t = 65535 + t + 1);
                for (var r = 0, s = Math.min(e.length - n, 2); r < s; ++r)
                    e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
            }
            function M(e, t, n, i) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var r = 0, s = Math.min(e.length - n, 4); r < s; ++r)
                    e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
            }
            function N(e, t, n, i, r, s) {
                if (n + i > e.length)
                    throw new RangeError("Index out of range");
                if (n < 0)
                    throw new RangeError("Index out of range")
            }
            function P(e, t, n, i, s) {
                return s || N(e, 0, n, 4),
                r.write(e, t, n, i, 23, 4),
                n + 4
            }
            function O(e, t, n, i, s) {
                return s || N(e, 0, n, 8),
                r.write(e, t, n, i, 52, 8),
                n + 8
            }
            u.prototype.slice = function(e, t) {
                var n, i = this.length;
                if (e = ~~e,
                t = void 0 === t ? i : ~~t,
                e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
                t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
                t < e && (t = e),
                u.TYPED_ARRAY_SUPPORT)
                    (n = this.subarray(e, t)).__proto__ = u.prototype;
                else {
                    var r = t - e;
                    n = new u(r,void 0);
                    for (var s = 0; s < r; ++s)
                        n[s] = this[s + e]
                }
                return n
            }
            ,
            u.prototype.readUIntLE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || T(e, t, this.length);
                for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256); )
                    i += this[e + s] * r;
                return i
            }
            ,
            u.prototype.readUIntBE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || T(e, t, this.length);
                for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); )
                    i += this[e + --t] * r;
                return i
            }
            ,
            u.prototype.readUInt8 = function(e, t) {
                return t || T(e, 1, this.length),
                this[e]
            }
            ,
            u.prototype.readUInt16LE = function(e, t) {
                return t || T(e, 2, this.length),
                this[e] | this[e + 1] << 8
            }
            ,
            u.prototype.readUInt16BE = function(e, t) {
                return t || T(e, 2, this.length),
                this[e] << 8 | this[e + 1]
            }
            ,
            u.prototype.readUInt32LE = function(e, t) {
                return t || T(e, 4, this.length),
                (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }
            ,
            u.prototype.readUInt32BE = function(e, t) {
                return t || T(e, 4, this.length),
                16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }
            ,
            u.prototype.readIntLE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || T(e, t, this.length);
                for (var i = this[e], r = 1, s = 0; ++s < t && (r *= 256); )
                    i += this[e + s] * r;
                return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)),
                i
            }
            ,
            u.prototype.readIntBE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || T(e, t, this.length);
                for (var i = t, r = 1, s = this[e + --i]; i > 0 && (r *= 256); )
                    s += this[e + --i] * r;
                return s >= (r *= 128) && (s -= Math.pow(2, 8 * t)),
                s
            }
            ,
            u.prototype.readInt8 = function(e, t) {
                return t || T(e, 1, this.length),
                128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }
            ,
            u.prototype.readInt16LE = function(e, t) {
                t || T(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            u.prototype.readInt16BE = function(e, t) {
                t || T(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            u.prototype.readInt32LE = function(e, t) {
                return t || T(e, 4, this.length),
                this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }
            ,
            u.prototype.readInt32BE = function(e, t) {
                return t || T(e, 4, this.length),
                this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }
            ,
            u.prototype.readFloatLE = function(e, t) {
                return t || T(e, 4, this.length),
                r.read(this, e, !0, 23, 4)
            }
            ,
            u.prototype.readFloatBE = function(e, t) {
                return t || T(e, 4, this.length),
                r.read(this, e, !1, 23, 4)
            }
            ,
            u.prototype.readDoubleLE = function(e, t) {
                return t || T(e, 8, this.length),
                r.read(this, e, !0, 52, 8)
            }
            ,
            u.prototype.readDoubleBE = function(e, t) {
                return t || T(e, 8, this.length),
                r.read(this, e, !1, 52, 8)
            }
            ,
            u.prototype.writeUIntLE = function(e, t, n, i) {
                (e = +e,
                t |= 0,
                n |= 0,
                i) || j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var r = 1
                  , s = 0;
                for (this[t] = 255 & e; ++s < n && (r *= 256); )
                    this[t + s] = e / r & 255;
                return t + n
            }
            ,
            u.prototype.writeUIntBE = function(e, t, n, i) {
                (e = +e,
                t |= 0,
                n |= 0,
                i) || j(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var r = n - 1
                  , s = 1;
                for (this[t + r] = 255 & e; --r >= 0 && (s *= 256); )
                    this[t + r] = e / s & 255;
                return t + n
            }
            ,
            u.prototype.writeUInt8 = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 1, 255, 0),
                u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                this[t] = 255 & e,
                t + 1
            }
            ,
            u.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 2, 65535, 0),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8) : I(this, e, t, !0),
                t + 2
            }
            ,
            u.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 2, 65535, 0),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                this[t + 1] = 255 & e) : I(this, e, t, !1),
                t + 2
            }
            ,
            u.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 4, 4294967295, 0),
                u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
                this[t + 2] = e >>> 16,
                this[t + 1] = e >>> 8,
                this[t] = 255 & e) : M(this, e, t, !0),
                t + 4
            }
            ,
            u.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 4, 4294967295, 0),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = 255 & e) : M(this, e, t, !1),
                t + 4
            }
            ,
            u.prototype.writeIntLE = function(e, t, n, i) {
                if (e = +e,
                t |= 0,
                !i) {
                    var r = Math.pow(2, 8 * n - 1);
                    j(this, e, t, n, r - 1, -r)
                }
                var s = 0
                  , o = 1
                  , a = 0;
                for (this[t] = 255 & e; ++s < n && (o *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1),
                    this[t + s] = (e / o >> 0) - a & 255;
                return t + n
            }
            ,
            u.prototype.writeIntBE = function(e, t, n, i) {
                if (e = +e,
                t |= 0,
                !i) {
                    var r = Math.pow(2, 8 * n - 1);
                    j(this, e, t, n, r - 1, -r)
                }
                var s = n - 1
                  , o = 1
                  , a = 0;
                for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
                    e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1),
                    this[t + s] = (e / o >> 0) - a & 255;
                return t + n
            }
            ,
            u.prototype.writeInt8 = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 1, 127, -128),
                u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                e < 0 && (e = 255 + e + 1),
                this[t] = 255 & e,
                t + 1
            }
            ,
            u.prototype.writeInt16LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 2, 32767, -32768),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8) : I(this, e, t, !0),
                t + 2
            }
            ,
            u.prototype.writeInt16BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 2, 32767, -32768),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                this[t + 1] = 255 & e) : I(this, e, t, !1),
                t + 2
            }
            ,
            u.prototype.writeInt32LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 4, 2147483647, -2147483648),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8,
                this[t + 2] = e >>> 16,
                this[t + 3] = e >>> 24) : M(this, e, t, !0),
                t + 4
            }
            ,
            u.prototype.writeInt32BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || j(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = 255 & e) : M(this, e, t, !1),
                t + 4
            }
            ,
            u.prototype.writeFloatLE = function(e, t, n) {
                return P(this, e, t, !0, n)
            }
            ,
            u.prototype.writeFloatBE = function(e, t, n) {
                return P(this, e, t, !1, n)
            }
            ,
            u.prototype.writeDoubleLE = function(e, t, n) {
                return O(this, e, t, !0, n)
            }
            ,
            u.prototype.writeDoubleBE = function(e, t, n) {
                return O(this, e, t, !1, n)
            }
            ,
            u.prototype.copy = function(e, t, n, i) {
                if (n || (n = 0),
                i || 0 === i || (i = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                i > 0 && i < n && (i = n),
                i === n)
                    return 0;
                if (0 === e.length || 0 === this.length)
                    return 0;
                if (t < 0)
                    throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (i < 0)
                    throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length),
                e.length - t < i - n && (i = e.length - t + n);
                var r, s = i - n;
                if (this === e && n < t && t < i)
                    for (r = s - 1; r >= 0; --r)
                        e[r + t] = this[r + n];
                else if (s < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                    for (r = 0; r < s; ++r)
                        e[r + t] = this[r + n];
                else
                    Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
                return s
            }
            ,
            u.prototype.fill = function(e, t, n, i) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (i = t,
                    t = 0,
                    n = this.length) : "string" == typeof n && (i = n,
                    n = this.length),
                    1 === e.length) {
                        var r = e.charCodeAt(0);
                        r < 256 && (e = r)
                    }
                    if (void 0 !== i && "string" != typeof i)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !u.isEncoding(i))
                        throw new TypeError("Unknown encoding: " + i)
                } else
                    "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n)
                    throw new RangeError("Out of range index");
                if (n <= t)
                    return this;
                var s;
                if (t >>>= 0,
                n = void 0 === n ? this.length : n >>> 0,
                e || (e = 0),
                "number" == typeof e)
                    for (s = t; s < n; ++s)
                        this[s] = e;
                else {
                    var o = u.isBuffer(e) ? e : R(new u(e,i).toString())
                      , a = o.length;
                    for (s = 0; s < n - t; ++s)
                        this[s + t] = o[s % a]
                }
                return this
            }
            ;
            var L = /[^+\/0-9A-Za-z-_]/g;
            function U(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }
            function R(e, t) {
                var n;
                t = t || 1 / 0;
                for (var i = e.length, r = null, s = [], o = 0; o < i; ++o) {
                    if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                        if (!r) {
                            if (n > 56319) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === i) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            r = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && s.push(239, 191, 189),
                            r = n;
                            continue
                        }
                        n = 65536 + (r - 55296 << 10 | n - 56320)
                    } else
                        r && (t -= 3) > -1 && s.push(239, 191, 189);
                    if (r = null,
                    n < 128) {
                        if ((t -= 1) < 0)
                            break;
                        s.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0)
                            break;
                        s.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0)
                            break;
                        s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112))
                            throw new Error("Invalid code point");
                        if ((t -= 4) < 0)
                            break;
                        s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return s
            }
            function z(e) {
                return i.toByteArray(function(e) {
                    if ((e = function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(L, "")).length < 2)
                        return "";
                    for (; e.length % 4 != 0; )
                        e += "=";
                    return e
                }(e))
            }
            function J(e, t, n, i) {
                for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r)
                    t[r + n] = e[r];
                return r
            }
        }
        ).call(this, n(/*! ./../webpack/buildin/global.js */
        "./node_modules/webpack/buildin/global.js"))
    },
    "./node_modules/esprima/dist/esprima.js": /*!**********************************************!*\
  !*** ./node_modules/esprima/dist/esprima.js ***!
  \**********************************************/
    /*! no static exports found */
    function(e, t, n) {
        var i;
        i = function() {
            return function(e) {
                var t = {};
                function n(i) {
                    if (t[i])
                        return t[i].exports;
                    var r = t[i] = {
                        exports: {},
                        id: i,
                        loaded: !1
                    };
                    return e[i].call(r.exports, r, r.exports, n),
                    r.loaded = !0,
                    r.exports
                }
                return n.m = e,
                n.c = t,
                n.p = "",
                n(0)
            }([function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(1)
                  , r = n(3)
                  , s = n(8)
                  , o = n(15);
                function a(e, t, n) {
                    var o = null
                      , a = function(e, t) {
                        n && n(e, t),
                        o && o.visit(e, t)
                    }
                      , u = "function" == typeof n ? a : null
                      , c = !1;
                    if (t) {
                        c = "boolean" == typeof t.comment && t.comment;
                        var h = "boolean" == typeof t.attachComment && t.attachComment;
                        (c || h) && ((o = new i.CommentHandler).attach = h,
                        t.comment = !0,
                        u = a)
                    }
                    var l, p = !1;
                    t && "string" == typeof t.sourceType && (p = "module" === t.sourceType),
                    l = t && "boolean" == typeof t.jsx && t.jsx ? new r.JSXParser(e,t,u) : new s.Parser(e,t,u);
                    var f = p ? l.parseModule() : l.parseScript();
                    return c && o && (f.comments = o.comments),
                    l.config.tokens && (f.tokens = l.tokens),
                    l.config.tolerant && (f.errors = l.errorHandler.errors),
                    f
                }
                t.parse = a,
                t.parseModule = function(e, t, n) {
                    var i = t || {};
                    return i.sourceType = "module",
                    a(e, i, n)
                }
                ,
                t.parseScript = function(e, t, n) {
                    var i = t || {};
                    return i.sourceType = "script",
                    a(e, i, n)
                }
                ,
                t.tokenize = function(e, t, n) {
                    var i, r = new o.Tokenizer(e,t);
                    i = [];
                    try {
                        for (; ; ) {
                            var s = r.getNextToken();
                            if (!s)
                                break;
                            n && (s = n(s)),
                            i.push(s)
                        }
                    } catch (e) {
                        r.errorHandler.tolerate(e)
                    }
                    return r.errorHandler.tolerant && (i.errors = r.errors()),
                    i
                }
                ;
                var u = n(2);
                t.Syntax = u.Syntax,
                t.version = "4.0.0"
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(2)
                  , r = function() {
                    function e() {
                        this.attach = !1,
                        this.comments = [],
                        this.stack = [],
                        this.leading = [],
                        this.trailing = []
                    }
                    return e.prototype.insertInnerComments = function(e, t) {
                        if (e.type === i.Syntax.BlockStatement && 0 === e.body.length) {
                            for (var n = [], r = this.leading.length - 1; r >= 0; --r) {
                                var s = this.leading[r];
                                t.end.offset >= s.start && (n.unshift(s.comment),
                                this.leading.splice(r, 1),
                                this.trailing.splice(r, 1))
                            }
                            n.length && (e.innerComments = n)
                        }
                    }
                    ,
                    e.prototype.findTrailingComments = function(e) {
                        var t = [];
                        if (this.trailing.length > 0) {
                            for (var n = this.trailing.length - 1; n >= 0; --n) {
                                var i = this.trailing[n];
                                i.start >= e.end.offset && t.unshift(i.comment)
                            }
                            return this.trailing.length = 0,
                            t
                        }
                        var r = this.stack[this.stack.length - 1];
                        if (r && r.node.trailingComments) {
                            var s = r.node.trailingComments[0];
                            s && s.range[0] >= e.end.offset && (t = r.node.trailingComments,
                            delete r.node.trailingComments)
                        }
                        return t
                    }
                    ,
                    e.prototype.findLeadingComments = function(e) {
                        for (var t, n = []; this.stack.length > 0; ) {
                            if (!((s = this.stack[this.stack.length - 1]) && s.start >= e.start.offset))
                                break;
                            t = s.node,
                            this.stack.pop()
                        }
                        if (t) {
                            for (var i = (t.leadingComments ? t.leadingComments.length : 0) - 1; i >= 0; --i) {
                                var r = t.leadingComments[i];
                                r.range[1] <= e.start.offset && (n.unshift(r),
                                t.leadingComments.splice(i, 1))
                            }
                            return t.leadingComments && 0 === t.leadingComments.length && delete t.leadingComments,
                            n
                        }
                        for (i = this.leading.length - 1; i >= 0; --i) {
                            var s;
                            (s = this.leading[i]).start <= e.start.offset && (n.unshift(s.comment),
                            this.leading.splice(i, 1))
                        }
                        return n
                    }
                    ,
                    e.prototype.visitNode = function(e, t) {
                        if (!(e.type === i.Syntax.Program && e.body.length > 0)) {
                            this.insertInnerComments(e, t);
                            var n = this.findTrailingComments(t)
                              , r = this.findLeadingComments(t);
                            r.length > 0 && (e.leadingComments = r),
                            n.length > 0 && (e.trailingComments = n),
                            this.stack.push({
                                node: e,
                                start: t.start.offset
                            })
                        }
                    }
                    ,
                    e.prototype.visitComment = function(e, t) {
                        var n = "L" === e.type[0] ? "Line" : "Block"
                          , i = {
                            type: n,
                            value: e.value
                        };
                        if (e.range && (i.range = e.range),
                        e.loc && (i.loc = e.loc),
                        this.comments.push(i),
                        this.attach) {
                            var r = {
                                comment: {
                                    type: n,
                                    value: e.value,
                                    range: [t.start.offset, t.end.offset]
                                },
                                start: t.start.offset
                            };
                            e.loc && (r.comment.loc = e.loc),
                            e.type = n,
                            this.leading.push(r),
                            this.trailing.push(r)
                        }
                    }
                    ,
                    e.prototype.visit = function(e, t) {
                        "LineComment" === e.type ? this.visitComment(e, t) : "BlockComment" === e.type ? this.visitComment(e, t) : this.attach && this.visitNode(e, t)
                    }
                    ,
                    e
                }();
                t.CommentHandler = r
            }
            , function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.Syntax = {
                    AssignmentExpression: "AssignmentExpression",
                    AssignmentPattern: "AssignmentPattern",
                    ArrayExpression: "ArrayExpression",
                    ArrayPattern: "ArrayPattern",
                    ArrowFunctionExpression: "ArrowFunctionExpression",
                    AwaitExpression: "AwaitExpression",
                    BlockStatement: "BlockStatement",
                    BinaryExpression: "BinaryExpression",
                    BreakStatement: "BreakStatement",
                    CallExpression: "CallExpression",
                    CatchClause: "CatchClause",
                    ClassBody: "ClassBody",
                    ClassDeclaration: "ClassDeclaration",
                    ClassExpression: "ClassExpression",
                    ConditionalExpression: "ConditionalExpression",
                    ContinueStatement: "ContinueStatement",
                    DoWhileStatement: "DoWhileStatement",
                    DebuggerStatement: "DebuggerStatement",
                    EmptyStatement: "EmptyStatement",
                    ExportAllDeclaration: "ExportAllDeclaration",
                    ExportDefaultDeclaration: "ExportDefaultDeclaration",
                    ExportNamedDeclaration: "ExportNamedDeclaration",
                    ExportSpecifier: "ExportSpecifier",
                    ExpressionStatement: "ExpressionStatement",
                    ForStatement: "ForStatement",
                    ForOfStatement: "ForOfStatement",
                    ForInStatement: "ForInStatement",
                    FunctionDeclaration: "FunctionDeclaration",
                    FunctionExpression: "FunctionExpression",
                    Identifier: "Identifier",
                    IfStatement: "IfStatement",
                    ImportDeclaration: "ImportDeclaration",
                    ImportDefaultSpecifier: "ImportDefaultSpecifier",
                    ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                    ImportSpecifier: "ImportSpecifier",
                    Literal: "Literal",
                    LabeledStatement: "LabeledStatement",
                    LogicalExpression: "LogicalExpression",
                    MemberExpression: "MemberExpression",
                    MetaProperty: "MetaProperty",
                    MethodDefinition: "MethodDefinition",
                    NewExpression: "NewExpression",
                    ObjectExpression: "ObjectExpression",
                    ObjectPattern: "ObjectPattern",
                    Program: "Program",
                    Property: "Property",
                    RestElement: "RestElement",
                    ReturnStatement: "ReturnStatement",
                    SequenceExpression: "SequenceExpression",
                    SpreadElement: "SpreadElement",
                    Super: "Super",
                    SwitchCase: "SwitchCase",
                    SwitchStatement: "SwitchStatement",
                    TaggedTemplateExpression: "TaggedTemplateExpression",
                    TemplateElement: "TemplateElement",
                    TemplateLiteral: "TemplateLiteral",
                    ThisExpression: "ThisExpression",
                    ThrowStatement: "ThrowStatement",
                    TryStatement: "TryStatement",
                    UnaryExpression: "UnaryExpression",
                    UpdateExpression: "UpdateExpression",
                    VariableDeclaration: "VariableDeclaration",
                    VariableDeclarator: "VariableDeclarator",
                    WhileStatement: "WhileStatement",
                    WithStatement: "WithStatement",
                    YieldExpression: "YieldExpression"
                }
            }
            , function(e, t, n) {
                "use strict";
                var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                ,
                function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    i(e, t),
                    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                    new n)
                }
                );
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = n(4)
                  , o = n(5)
                  , a = n(6)
                  , u = n(7)
                  , c = n(8)
                  , h = n(13)
                  , l = n(14);
                function p(e) {
                    var t;
                    switch (e.type) {
                    case a.JSXSyntax.JSXIdentifier:
                        t = e.name;
                        break;
                    case a.JSXSyntax.JSXNamespacedName:
                        var n = e;
                        t = p(n.namespace) + ":" + p(n.name);
                        break;
                    case a.JSXSyntax.JSXMemberExpression:
                        var i = e;
                        t = p(i.object) + "." + p(i.property)
                    }
                    return t
                }
                h.TokenName[100] = "JSXIdentifier",
                h.TokenName[101] = "JSXText";
                var f = function(e) {
                    function t(t, n, i) {
                        return e.call(this, t, n, i) || this
                    }
                    return r(t, e),
                    t.prototype.parsePrimaryExpression = function() {
                        return this.match("<") ? this.parseJSXRoot() : e.prototype.parsePrimaryExpression.call(this)
                    }
                    ,
                    t.prototype.startJSX = function() {
                        this.scanner.index = this.startMarker.index,
                        this.scanner.lineNumber = this.startMarker.line,
                        this.scanner.lineStart = this.startMarker.index - this.startMarker.column
                    }
                    ,
                    t.prototype.finishJSX = function() {
                        this.nextToken()
                    }
                    ,
                    t.prototype.reenterJSX = function() {
                        this.startJSX(),
                        this.expectJSX("}"),
                        this.config.tokens && this.tokens.pop()
                    }
                    ,
                    t.prototype.createJSXNode = function() {
                        return this.collectComments(),
                        {
                            index: this.scanner.index,
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart
                        }
                    }
                    ,
                    t.prototype.createJSXChildNode = function() {
                        return {
                            index: this.scanner.index,
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart
                        }
                    }
                    ,
                    t.prototype.scanXHTMLEntity = function(e) {
                        for (var t = "&", n = !0, i = !1, r = !1, o = !1; !this.scanner.eof() && n && !i; ) {
                            var a = this.scanner.source[this.scanner.index];
                            if (a === e)
                                break;
                            if (i = ";" === a,
                            t += a,
                            ++this.scanner.index,
                            !i)
                                switch (t.length) {
                                case 2:
                                    r = "#" === a;
                                    break;
                                case 3:
                                    r && (n = (o = "x" === a) || s.Character.isDecimalDigit(a.charCodeAt(0)),
                                    r = r && !o);
                                    break;
                                default:
                                    n = (n = n && !(r && !s.Character.isDecimalDigit(a.charCodeAt(0)))) && !(o && !s.Character.isHexDigit(a.charCodeAt(0)))
                                }
                        }
                        if (n && i && t.length > 2) {
                            var u = t.substr(1, t.length - 2);
                            r && u.length > 1 ? t = String.fromCharCode(parseInt(u.substr(1), 10)) : o && u.length > 2 ? t = String.fromCharCode(parseInt("0" + u.substr(1), 16)) : r || o || !l.XHTMLEntities[u] || (t = l.XHTMLEntities[u])
                        }
                        return t
                    }
                    ,
                    t.prototype.lexJSX = function() {
                        var e = this.scanner.source.charCodeAt(this.scanner.index);
                        if (60 === e || 62 === e || 47 === e || 58 === e || 61 === e || 123 === e || 125 === e)
                            return {
                                type: 7,
                                value: a = this.scanner.source[this.scanner.index++],
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart,
                                start: this.scanner.index - 1,
                                end: this.scanner.index
                            };
                        if (34 === e || 39 === e) {
                            for (var t = this.scanner.index, n = this.scanner.source[this.scanner.index++], i = ""; !this.scanner.eof(); ) {
                                if ((u = this.scanner.source[this.scanner.index++]) === n)
                                    break;
                                i += "&" === u ? this.scanXHTMLEntity(n) : u
                            }
                            return {
                                type: 8,
                                value: i,
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart,
                                start: t,
                                end: this.scanner.index
                            }
                        }
                        if (46 === e) {
                            var r = this.scanner.source.charCodeAt(this.scanner.index + 1)
                              , o = this.scanner.source.charCodeAt(this.scanner.index + 2)
                              , a = 46 === r && 46 === o ? "..." : ".";
                            t = this.scanner.index;
                            return this.scanner.index += a.length,
                            {
                                type: 7,
                                value: a,
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart,
                                start: t,
                                end: this.scanner.index
                            }
                        }
                        if (96 === e)
                            return {
                                type: 10,
                                value: "",
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart,
                                start: this.scanner.index,
                                end: this.scanner.index
                            };
                        if (s.Character.isIdentifierStart(e) && 92 !== e) {
                            t = this.scanner.index;
                            for (++this.scanner.index; !this.scanner.eof(); ) {
                                var u = this.scanner.source.charCodeAt(this.scanner.index);
                                if (s.Character.isIdentifierPart(u) && 92 !== u)
                                    ++this.scanner.index;
                                else {
                                    if (45 !== u)
                                        break;
                                    ++this.scanner.index
                                }
                            }
                            return {
                                type: 100,
                                value: this.scanner.source.slice(t, this.scanner.index),
                                lineNumber: this.scanner.lineNumber,
                                lineStart: this.scanner.lineStart,
                                start: t,
                                end: this.scanner.index
                            }
                        }
                        return this.scanner.lex()
                    }
                    ,
                    t.prototype.nextJSXToken = function() {
                        this.collectComments(),
                        this.startMarker.index = this.scanner.index,
                        this.startMarker.line = this.scanner.lineNumber,
                        this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                        var e = this.lexJSX();
                        return this.lastMarker.index = this.scanner.index,
                        this.lastMarker.line = this.scanner.lineNumber,
                        this.lastMarker.column = this.scanner.index - this.scanner.lineStart,
                        this.config.tokens && this.tokens.push(this.convertToken(e)),
                        e
                    }
                    ,
                    t.prototype.nextJSXText = function() {
                        this.startMarker.index = this.scanner.index,
                        this.startMarker.line = this.scanner.lineNumber,
                        this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                        for (var e = this.scanner.index, t = ""; !this.scanner.eof(); ) {
                            var n = this.scanner.source[this.scanner.index];
                            if ("{" === n || "<" === n)
                                break;
                            ++this.scanner.index,
                            t += n,
                            s.Character.isLineTerminator(n.charCodeAt(0)) && (++this.scanner.lineNumber,
                            "\r" === n && "\n" === this.scanner.source[this.scanner.index] && ++this.scanner.index,
                            this.scanner.lineStart = this.scanner.index)
                        }
                        this.lastMarker.index = this.scanner.index,
                        this.lastMarker.line = this.scanner.lineNumber,
                        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                        var i = {
                            type: 101,
                            value: t,
                            lineNumber: this.scanner.lineNumber,
                            lineStart: this.scanner.lineStart,
                            start: e,
                            end: this.scanner.index
                        };
                        return t.length > 0 && this.config.tokens && this.tokens.push(this.convertToken(i)),
                        i
                    }
                    ,
                    t.prototype.peekJSXToken = function() {
                        var e = this.scanner.saveState();
                        this.scanner.scanComments();
                        var t = this.lexJSX();
                        return this.scanner.restoreState(e),
                        t
                    }
                    ,
                    t.prototype.expectJSX = function(e) {
                        var t = this.nextJSXToken();
                        7 === t.type && t.value === e || this.throwUnexpectedToken(t)
                    }
                    ,
                    t.prototype.matchJSX = function(e) {
                        var t = this.peekJSXToken();
                        return 7 === t.type && t.value === e
                    }
                    ,
                    t.prototype.parseJSXIdentifier = function() {
                        var e = this.createJSXNode()
                          , t = this.nextJSXToken();
                        return 100 !== t.type && this.throwUnexpectedToken(t),
                        this.finalize(e, new o.JSXIdentifier(t.value))
                    }
                    ,
                    t.prototype.parseJSXElementName = function() {
                        var e = this.createJSXNode()
                          , t = this.parseJSXIdentifier();
                        if (this.matchJSX(":")) {
                            var n = t;
                            this.expectJSX(":");
                            var i = this.parseJSXIdentifier();
                            t = this.finalize(e, new o.JSXNamespacedName(n,i))
                        } else if (this.matchJSX("."))
                            for (; this.matchJSX("."); ) {
                                var r = t;
                                this.expectJSX(".");
                                var s = this.parseJSXIdentifier();
                                t = this.finalize(e, new o.JSXMemberExpression(r,s))
                            }
                        return t
                    }
                    ,
                    t.prototype.parseJSXAttributeName = function() {
                        var e, t = this.createJSXNode(), n = this.parseJSXIdentifier();
                        if (this.matchJSX(":")) {
                            var i = n;
                            this.expectJSX(":");
                            var r = this.parseJSXIdentifier();
                            e = this.finalize(t, new o.JSXNamespacedName(i,r))
                        } else
                            e = n;
                        return e
                    }
                    ,
                    t.prototype.parseJSXStringLiteralAttribute = function() {
                        var e = this.createJSXNode()
                          , t = this.nextJSXToken();
                        8 !== t.type && this.throwUnexpectedToken(t);
                        var n = this.getTokenRaw(t);
                        return this.finalize(e, new u.Literal(t.value,n))
                    }
                    ,
                    t.prototype.parseJSXExpressionAttribute = function() {
                        var e = this.createJSXNode();
                        this.expectJSX("{"),
                        this.finishJSX(),
                        this.match("}") && this.tolerateError("JSX attributes must only be assigned a non-empty expression");
                        var t = this.parseAssignmentExpression();
                        return this.reenterJSX(),
                        this.finalize(e, new o.JSXExpressionContainer(t))
                    }
                    ,
                    t.prototype.parseJSXAttributeValue = function() {
                        return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute()
                    }
                    ,
                    t.prototype.parseJSXNameValueAttribute = function() {
                        var e = this.createJSXNode()
                          , t = this.parseJSXAttributeName()
                          , n = null;
                        return this.matchJSX("=") && (this.expectJSX("="),
                        n = this.parseJSXAttributeValue()),
                        this.finalize(e, new o.JSXAttribute(t,n))
                    }
                    ,
                    t.prototype.parseJSXSpreadAttribute = function() {
                        var e = this.createJSXNode();
                        this.expectJSX("{"),
                        this.expectJSX("..."),
                        this.finishJSX();
                        var t = this.parseAssignmentExpression();
                        return this.reenterJSX(),
                        this.finalize(e, new o.JSXSpreadAttribute(t))
                    }
                    ,
                    t.prototype.parseJSXAttributes = function() {
                        for (var e = []; !this.matchJSX("/") && !this.matchJSX(">"); ) {
                            var t = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
                            e.push(t)
                        }
                        return e
                    }
                    ,
                    t.prototype.parseJSXOpeningElement = function() {
                        var e = this.createJSXNode();
                        this.expectJSX("<");
                        var t = this.parseJSXElementName()
                          , n = this.parseJSXAttributes()
                          , i = this.matchJSX("/");
                        return i && this.expectJSX("/"),
                        this.expectJSX(">"),
                        this.finalize(e, new o.JSXOpeningElement(t,i,n))
                    }
                    ,
                    t.prototype.parseJSXBoundaryElement = function() {
                        var e = this.createJSXNode();
                        if (this.expectJSX("<"),
                        this.matchJSX("/")) {
                            this.expectJSX("/");
                            var t = this.parseJSXElementName();
                            return this.expectJSX(">"),
                            this.finalize(e, new o.JSXClosingElement(t))
                        }
                        var n = this.parseJSXElementName()
                          , i = this.parseJSXAttributes()
                          , r = this.matchJSX("/");
                        return r && this.expectJSX("/"),
                        this.expectJSX(">"),
                        this.finalize(e, new o.JSXOpeningElement(n,r,i))
                    }
                    ,
                    t.prototype.parseJSXEmptyExpression = function() {
                        var e = this.createJSXChildNode();
                        return this.collectComments(),
                        this.lastMarker.index = this.scanner.index,
                        this.lastMarker.line = this.scanner.lineNumber,
                        this.lastMarker.column = this.scanner.index - this.scanner.lineStart,
                        this.finalize(e, new o.JSXEmptyExpression)
                    }
                    ,
                    t.prototype.parseJSXExpressionContainer = function() {
                        var e, t = this.createJSXNode();
                        return this.expectJSX("{"),
                        this.matchJSX("}") ? (e = this.parseJSXEmptyExpression(),
                        this.expectJSX("}")) : (this.finishJSX(),
                        e = this.parseAssignmentExpression(),
                        this.reenterJSX()),
                        this.finalize(t, new o.JSXExpressionContainer(e))
                    }
                    ,
                    t.prototype.parseJSXChildren = function() {
                        for (var e = []; !this.scanner.eof(); ) {
                            var t = this.createJSXChildNode()
                              , n = this.nextJSXText();
                            if (n.start < n.end) {
                                var i = this.getTokenRaw(n)
                                  , r = this.finalize(t, new o.JSXText(n.value,i));
                                e.push(r)
                            }
                            if ("{" !== this.scanner.source[this.scanner.index])
                                break;
                            var s = this.parseJSXExpressionContainer();
                            e.push(s)
                        }
                        return e
                    }
                    ,
                    t.prototype.parseComplexJSXElement = function(e) {
                        for (var t = []; !this.scanner.eof(); ) {
                            e.children = e.children.concat(this.parseJSXChildren());
                            var n = this.createJSXChildNode()
                              , i = this.parseJSXBoundaryElement();
                            if (i.type === a.JSXSyntax.JSXOpeningElement) {
                                var r = i;
                                if (r.selfClosing) {
                                    var s = this.finalize(n, new o.JSXElement(r,[],null));
                                    e.children.push(s)
                                } else
                                    t.push(e),
                                    e = {
                                        node: n,
                                        opening: r,
                                        closing: null,
                                        children: []
                                    }
                            }
                            if (i.type === a.JSXSyntax.JSXClosingElement) {
                                e.closing = i;
                                var u = p(e.opening.name);
                                if (u !== p(e.closing.name) && this.tolerateError("Expected corresponding JSX closing tag for %0", u),
                                !(t.length > 0))
                                    break;
                                s = this.finalize(e.node, new o.JSXElement(e.opening,e.children,e.closing));
                                (e = t[t.length - 1]).children.push(s),
                                t.pop()
                            }
                        }
                        return e
                    }
                    ,
                    t.prototype.parseJSXElement = function() {
                        var e = this.createJSXNode()
                          , t = this.parseJSXOpeningElement()
                          , n = []
                          , i = null;
                        if (!t.selfClosing) {
                            var r = this.parseComplexJSXElement({
                                node: e,
                                opening: t,
                                closing: i,
                                children: n
                            });
                            n = r.children,
                            i = r.closing
                        }
                        return this.finalize(e, new o.JSXElement(t,n,i))
                    }
                    ,
                    t.prototype.parseJSXRoot = function() {
                        this.config.tokens && this.tokens.pop(),
                        this.startJSX();
                        var e = this.parseJSXElement();
                        return this.finishJSX(),
                        e
                    }
                    ,
                    t.prototype.isStartOfExpression = function() {
                        return e.prototype.isStartOfExpression.call(this) || this.match("<")
                    }
                    ,
                    t
                }(c.Parser);
                t.JSXParser = f
            }
            , function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = {
                    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
                    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
                };
                t.Character = {
                    fromCodePoint: function(e) {
                        return e < 65536 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10)) + String.fromCharCode(56320 + (e - 65536 & 1023))
                    },
                    isWhiteSpace: function(e) {
                        return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(e) >= 0
                    },
                    isLineTerminator: function(e) {
                        return 10 === e || 13 === e || 8232 === e || 8233 === e
                    },
                    isIdentifierStart: function(e) {
                        return 36 === e || 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122 || 92 === e || e >= 128 && n.NonAsciiIdentifierStart.test(t.Character.fromCodePoint(e))
                    },
                    isIdentifierPart: function(e) {
                        return 36 === e || 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || 92 === e || e >= 128 && n.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e))
                    },
                    isDecimalDigit: function(e) {
                        return e >= 48 && e <= 57
                    },
                    isHexDigit: function(e) {
                        return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102
                    },
                    isOctalDigit: function(e) {
                        return e >= 48 && e <= 55
                    }
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(6)
                  , r = function() {
                    return function(e) {
                        this.type = i.JSXSyntax.JSXClosingElement,
                        this.name = e
                    }
                }();
                t.JSXClosingElement = r;
                var s = function() {
                    return function(e, t, n) {
                        this.type = i.JSXSyntax.JSXElement,
                        this.openingElement = e,
                        this.children = t,
                        this.closingElement = n
                    }
                }();
                t.JSXElement = s;
                var o = function() {
                    return function() {
                        this.type = i.JSXSyntax.JSXEmptyExpression
                    }
                }();
                t.JSXEmptyExpression = o;
                var a = function() {
                    return function(e) {
                        this.type = i.JSXSyntax.JSXExpressionContainer,
                        this.expression = e
                    }
                }();
                t.JSXExpressionContainer = a;
                var u = function() {
                    return function(e) {
                        this.type = i.JSXSyntax.JSXIdentifier,
                        this.name = e
                    }
                }();
                t.JSXIdentifier = u;
                var c = function() {
                    return function(e, t) {
                        this.type = i.JSXSyntax.JSXMemberExpression,
                        this.object = e,
                        this.property = t
                    }
                }();
                t.JSXMemberExpression = c;
                var h = function() {
                    return function(e, t) {
                        this.type = i.JSXSyntax.JSXAttribute,
                        this.name = e,
                        this.value = t
                    }
                }();
                t.JSXAttribute = h;
                var l = function() {
                    return function(e, t) {
                        this.type = i.JSXSyntax.JSXNamespacedName,
                        this.namespace = e,
                        this.name = t
                    }
                }();
                t.JSXNamespacedName = l;
                var p = function() {
                    return function(e, t, n) {
                        this.type = i.JSXSyntax.JSXOpeningElement,
                        this.name = e,
                        this.selfClosing = t,
                        this.attributes = n
                    }
                }();
                t.JSXOpeningElement = p;
                var f = function() {
                    return function(e) {
                        this.type = i.JSXSyntax.JSXSpreadAttribute,
                        this.argument = e
                    }
                }();
                t.JSXSpreadAttribute = f;
                var d = function() {
                    return function(e, t) {
                        this.type = i.JSXSyntax.JSXText,
                        this.value = e,
                        this.raw = t
                    }
                }();
                t.JSXText = d
            }
            , function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.JSXSyntax = {
                    JSXAttribute: "JSXAttribute",
                    JSXClosingElement: "JSXClosingElement",
                    JSXElement: "JSXElement",
                    JSXEmptyExpression: "JSXEmptyExpression",
                    JSXExpressionContainer: "JSXExpressionContainer",
                    JSXIdentifier: "JSXIdentifier",
                    JSXMemberExpression: "JSXMemberExpression",
                    JSXNamespacedName: "JSXNamespacedName",
                    JSXOpeningElement: "JSXOpeningElement",
                    JSXSpreadAttribute: "JSXSpreadAttribute",
                    JSXText: "JSXText"
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(2)
                  , r = function() {
                    return function(e) {
                        this.type = i.Syntax.ArrayExpression,
                        this.elements = e
                    }
                }();
                t.ArrayExpression = r;
                var s = function() {
                    return function(e) {
                        this.type = i.Syntax.ArrayPattern,
                        this.elements = e
                    }
                }();
                t.ArrayPattern = s;
                var o = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.ArrowFunctionExpression,
                        this.id = null,
                        this.params = e,
                        this.body = t,
                        this.generator = !1,
                        this.expression = n,
                        this.async = !1
                    }
                }();
                t.ArrowFunctionExpression = o;
                var a = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.AssignmentExpression,
                        this.operator = e,
                        this.left = t,
                        this.right = n
                    }
                }();
                t.AssignmentExpression = a;
                var u = function() {
                    return function(e, t) {
                        this.type = i.Syntax.AssignmentPattern,
                        this.left = e,
                        this.right = t
                    }
                }();
                t.AssignmentPattern = u;
                var c = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.ArrowFunctionExpression,
                        this.id = null,
                        this.params = e,
                        this.body = t,
                        this.generator = !1,
                        this.expression = n,
                        this.async = !0
                    }
                }();
                t.AsyncArrowFunctionExpression = c;
                var h = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.FunctionDeclaration,
                        this.id = e,
                        this.params = t,
                        this.body = n,
                        this.generator = !1,
                        this.expression = !1,
                        this.async = !0
                    }
                }();
                t.AsyncFunctionDeclaration = h;
                var l = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.FunctionExpression,
                        this.id = e,
                        this.params = t,
                        this.body = n,
                        this.generator = !1,
                        this.expression = !1,
                        this.async = !0
                    }
                }();
                t.AsyncFunctionExpression = l;
                var p = function() {
                    return function(e) {
                        this.type = i.Syntax.AwaitExpression,
                        this.argument = e
                    }
                }();
                t.AwaitExpression = p;
                var f = function() {
                    return function(e, t, n) {
                        var r = "||" === e || "&&" === e;
                        this.type = r ? i.Syntax.LogicalExpression : i.Syntax.BinaryExpression,
                        this.operator = e,
                        this.left = t,
                        this.right = n
                    }
                }();
                t.BinaryExpression = f;
                var d = function() {
                    return function(e) {
                        this.type = i.Syntax.BlockStatement,
                        this.body = e
                    }
                }();
                t.BlockStatement = d;
                var m = function() {
                    return function(e) {
                        this.type = i.Syntax.BreakStatement,
                        this.label = e
                    }
                }();
                t.BreakStatement = m;
                var y = function() {
                    return function(e, t) {
                        this.type = i.Syntax.CallExpression,
                        this.callee = e,
                        this.arguments = t
                    }
                }();
                t.CallExpression = y;
                var g = function() {
                    return function(e, t) {
                        this.type = i.Syntax.CatchClause,
                        this.param = e,
                        this.body = t
                    }
                }();
                t.CatchClause = g;
                var x = function() {
                    return function(e) {
                        this.type = i.Syntax.ClassBody,
                        this.body = e
                    }
                }();
                t.ClassBody = x;
                var v = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.ClassDeclaration,
                        this.id = e,
                        this.superClass = t,
                        this.body = n
                    }
                }();
                t.ClassDeclaration = v;
                var D = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.ClassExpression,
                        this.id = e,
                        this.superClass = t,
                        this.body = n
                    }
                }();
                t.ClassExpression = D;
                var E = function() {
                    return function(e, t) {
                        this.type = i.Syntax.MemberExpression,
                        this.computed = !0,
                        this.object = e,
                        this.property = t
                    }
                }();
                t.ComputedMemberExpression = E;
                var A = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.ConditionalExpression,
                        this.test = e,
                        this.consequent = t,
                        this.alternate = n
                    }
                }();
                t.ConditionalExpression = A;
                var w = function() {
                    return function(e) {
                        this.type = i.Syntax.ContinueStatement,
                        this.label = e
                    }
                }();
                t.ContinueStatement = w;
                var b = function() {
                    return function() {
                        this.type = i.Syntax.DebuggerStatement
                    }
                }();
                t.DebuggerStatement = b;
                var C = function() {
                    return function(e, t) {
                        this.type = i.Syntax.ExpressionStatement,
                        this.expression = e,
                        this.directive = t
                    }
                }();
                t.Directive = C;
                var S = function() {
                    return function(e, t) {
                        this.type = i.Syntax.DoWhileStatement,
                        this.body = e,
                        this.test = t
                    }
                }();
                t.DoWhileStatement = S;
                var _ = function() {
                    return function() {
                        this.type = i.Syntax.EmptyStatement
                    }
                }();
                t.EmptyStatement = _;
                var F = function() {
                    return function(e) {
                        this.type = i.Syntax.ExportAllDeclaration,
                        this.source = e
                    }
                }();
                t.ExportAllDeclaration = F;
                var k = function() {
                    return function(e) {
                        this.type = i.Syntax.ExportDefaultDeclaration,
                        this.declaration = e
                    }
                }();
                t.ExportDefaultDeclaration = k;
                var B = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.ExportNamedDeclaration,
                        this.declaration = e,
                        this.specifiers = t,
                        this.source = n
                    }
                }();
                t.ExportNamedDeclaration = B;
                var T = function() {
                    return function(e, t) {
                        this.type = i.Syntax.ExportSpecifier,
                        this.exported = t,
                        this.local = e
                    }
                }();
                t.ExportSpecifier = T;
                var j = function() {
                    return function(e) {
                        this.type = i.Syntax.ExpressionStatement,
                        this.expression = e
                    }
                }();
                t.ExpressionStatement = j;
                var I = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.ForInStatement,
                        this.left = e,
                        this.right = t,
                        this.body = n,
                        this.each = !1
                    }
                }();
                t.ForInStatement = I;
                var M = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.ForOfStatement,
                        this.left = e,
                        this.right = t,
                        this.body = n
                    }
                }();
                t.ForOfStatement = M;
                var N = function() {
                    return function(e, t, n, r) {
                        this.type = i.Syntax.ForStatement,
                        this.init = e,
                        this.test = t,
                        this.update = n,
                        this.body = r
                    }
                }();
                t.ForStatement = N;
                var P = function() {
                    return function(e, t, n, r) {
                        this.type = i.Syntax.FunctionDeclaration,
                        this.id = e,
                        this.params = t,
                        this.body = n,
                        this.generator = r,
                        this.expression = !1,
                        this.async = !1
                    }
                }();
                t.FunctionDeclaration = P;
                var O = function() {
                    return function(e, t, n, r) {
                        this.type = i.Syntax.FunctionExpression,
                        this.id = e,
                        this.params = t,
                        this.body = n,
                        this.generator = r,
                        this.expression = !1,
                        this.async = !1
                    }
                }();
                t.FunctionExpression = O;
                var L = function() {
                    return function(e) {
                        this.type = i.Syntax.Identifier,
                        this.name = e
                    }
                }();
                t.Identifier = L;
                var U = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.IfStatement,
                        this.test = e,
                        this.consequent = t,
                        this.alternate = n
                    }
                }();
                t.IfStatement = U;
                var R = function() {
                    return function(e, t) {
                        this.type = i.Syntax.ImportDeclaration,
                        this.specifiers = e,
                        this.source = t
                    }
                }();
                t.ImportDeclaration = R;
                var z = function() {
                    return function(e) {
                        this.type = i.Syntax.ImportDefaultSpecifier,
                        this.local = e
                    }
                }();
                t.ImportDefaultSpecifier = z;
                var J = function() {
                    return function(e) {
                        this.type = i.Syntax.ImportNamespaceSpecifier,
                        this.local = e
                    }
                }();
                t.ImportNamespaceSpecifier = J;
                var X = function() {
                    return function(e, t) {
                        this.type = i.Syntax.ImportSpecifier,
                        this.local = e,
                        this.imported = t
                    }
                }();
                t.ImportSpecifier = X;
                var G = function() {
                    return function(e, t) {
                        this.type = i.Syntax.LabeledStatement,
                        this.label = e,
                        this.body = t
                    }
                }();
                t.LabeledStatement = G;
                var K = function() {
                    return function(e, t) {
                        this.type = i.Syntax.Literal,
                        this.value = e,
                        this.raw = t
                    }
                }();
                t.Literal = K;
                var Y = function() {
                    return function(e, t) {
                        this.type = i.Syntax.MetaProperty,
                        this.meta = e,
                        this.property = t
                    }
                }();
                t.MetaProperty = Y;
                var H = function() {
                    return function(e, t, n, r, s) {
                        this.type = i.Syntax.MethodDefinition,
                        this.key = e,
                        this.computed = t,
                        this.value = n,
                        this.kind = r,
                        this.static = s
                    }
                }();
                t.MethodDefinition = H;
                var V = function() {
                    return function(e) {
                        this.type = i.Syntax.Program,
                        this.body = e,
                        this.sourceType = "module"
                    }
                }();
                t.Module = V;
                var W = function() {
                    return function(e, t) {
                        this.type = i.Syntax.NewExpression,
                        this.callee = e,
                        this.arguments = t
                    }
                }();
                t.NewExpression = W;
                var q = function() {
                    return function(e) {
                        this.type = i.Syntax.ObjectExpression,
                        this.properties = e
                    }
                }();
                t.ObjectExpression = q;
                var $ = function() {
                    return function(e) {
                        this.type = i.Syntax.ObjectPattern,
                        this.properties = e
                    }
                }();
                t.ObjectPattern = $;
                var Z = function() {
                    return function(e, t, n, r, s, o) {
                        this.type = i.Syntax.Property,
                        this.key = t,
                        this.computed = n,
                        this.value = r,
                        this.kind = e,
                        this.method = s,
                        this.shorthand = o
                    }
                }();
                t.Property = Z;
                var Q = function() {
                    return function(e, t, n, r) {
                        this.type = i.Syntax.Literal,
                        this.value = e,
                        this.raw = t,
                        this.regex = {
                            pattern: n,
                            flags: r
                        }
                    }
                }();
                t.RegexLiteral = Q;
                var ee = function() {
                    return function(e) {
                        this.type = i.Syntax.RestElement,
                        this.argument = e
                    }
                }();
                t.RestElement = ee;
                var te = function() {
                    return function(e) {
                        this.type = i.Syntax.ReturnStatement,
                        this.argument = e
                    }
                }();
                t.ReturnStatement = te;
                var ne = function() {
                    return function(e) {
                        this.type = i.Syntax.Program,
                        this.body = e,
                        this.sourceType = "script"
                    }
                }();
                t.Script = ne;
                var ie = function() {
                    return function(e) {
                        this.type = i.Syntax.SequenceExpression,
                        this.expressions = e
                    }
                }();
                t.SequenceExpression = ie;
                var re = function() {
                    return function(e) {
                        this.type = i.Syntax.SpreadElement,
                        this.argument = e
                    }
                }();
                t.SpreadElement = re;
                var se = function() {
                    return function(e, t) {
                        this.type = i.Syntax.MemberExpression,
                        this.computed = !1,
                        this.object = e,
                        this.property = t
                    }
                }();
                t.StaticMemberExpression = se;
                var oe = function() {
                    return function() {
                        this.type = i.Syntax.Super
                    }
                }();
                t.Super = oe;
                var ae = function() {
                    return function(e, t) {
                        this.type = i.Syntax.SwitchCase,
                        this.test = e,
                        this.consequent = t
                    }
                }();
                t.SwitchCase = ae;
                var ue = function() {
                    return function(e, t) {
                        this.type = i.Syntax.SwitchStatement,
                        this.discriminant = e,
                        this.cases = t
                    }
                }();
                t.SwitchStatement = ue;
                var ce = function() {
                    return function(e, t) {
                        this.type = i.Syntax.TaggedTemplateExpression,
                        this.tag = e,
                        this.quasi = t
                    }
                }();
                t.TaggedTemplateExpression = ce;
                var he = function() {
                    return function(e, t) {
                        this.type = i.Syntax.TemplateElement,
                        this.value = e,
                        this.tail = t
                    }
                }();
                t.TemplateElement = he;
                var le = function() {
                    return function(e, t) {
                        this.type = i.Syntax.TemplateLiteral,
                        this.quasis = e,
                        this.expressions = t
                    }
                }();
                t.TemplateLiteral = le;
                var pe = function() {
                    return function() {
                        this.type = i.Syntax.ThisExpression
                    }
                }();
                t.ThisExpression = pe;
                var fe = function() {
                    return function(e) {
                        this.type = i.Syntax.ThrowStatement,
                        this.argument = e
                    }
                }();
                t.ThrowStatement = fe;
                var de = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.TryStatement,
                        this.block = e,
                        this.handler = t,
                        this.finalizer = n
                    }
                }();
                t.TryStatement = de;
                var me = function() {
                    return function(e, t) {
                        this.type = i.Syntax.UnaryExpression,
                        this.operator = e,
                        this.argument = t,
                        this.prefix = !0
                    }
                }();
                t.UnaryExpression = me;
                var ye = function() {
                    return function(e, t, n) {
                        this.type = i.Syntax.UpdateExpression,
                        this.operator = e,
                        this.argument = t,
                        this.prefix = n
                    }
                }();
                t.UpdateExpression = ye;
                var ge = function() {
                    return function(e, t) {
                        this.type = i.Syntax.VariableDeclaration,
                        this.declarations = e,
                        this.kind = t
                    }
                }();
                t.VariableDeclaration = ge;
                var xe = function() {
                    return function(e, t) {
                        this.type = i.Syntax.VariableDeclarator,
                        this.id = e,
                        this.init = t
                    }
                }();
                t.VariableDeclarator = xe;
                var ve = function() {
                    return function(e, t) {
                        this.type = i.Syntax.WhileStatement,
                        this.test = e,
                        this.body = t
                    }
                }();
                t.WhileStatement = ve;
                var De = function() {
                    return function(e, t) {
                        this.type = i.Syntax.WithStatement,
                        this.object = e,
                        this.body = t
                    }
                }();
                t.WithStatement = De;
                var Ee = function() {
                    return function(e, t) {
                        this.type = i.Syntax.YieldExpression,
                        this.argument = e,
                        this.delegate = t
                    }
                }();
                t.YieldExpression = Ee
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(9)
                  , r = n(10)
                  , s = n(11)
                  , o = n(7)
                  , a = n(12)
                  , u = n(2)
                  , c = n(13)
                  , h = function() {
                    function e(e, t, n) {
                        void 0 === t && (t = {}),
                        this.config = {
                            range: "boolean" == typeof t.range && t.range,
                            loc: "boolean" == typeof t.loc && t.loc,
                            source: null,
                            tokens: "boolean" == typeof t.tokens && t.tokens,
                            comment: "boolean" == typeof t.comment && t.comment,
                            tolerant: "boolean" == typeof t.tolerant && t.tolerant
                        },
                        this.config.loc && t.source && null !== t.source && (this.config.source = String(t.source)),
                        this.delegate = n,
                        this.errorHandler = new r.ErrorHandler,
                        this.errorHandler.tolerant = this.config.tolerant,
                        this.scanner = new a.Scanner(e,this.errorHandler),
                        this.scanner.trackComment = this.config.comment,
                        this.operatorPrecedence = {
                            ")": 0,
                            ";": 0,
                            ",": 0,
                            "=": 0,
                            "]": 0,
                            "||": 1,
                            "&&": 2,
                            "|": 3,
                            "^": 4,
                            "&": 5,
                            "==": 6,
                            "!=": 6,
                            "===": 6,
                            "!==": 6,
                            "<": 7,
                            ">": 7,
                            "<=": 7,
                            ">=": 7,
                            "<<": 8,
                            ">>": 8,
                            ">>>": 8,
                            "+": 9,
                            "-": 9,
                            "*": 11,
                            "/": 11,
                            "%": 11
                        },
                        this.lookahead = {
                            type: 2,
                            value: "",
                            lineNumber: this.scanner.lineNumber,
                            lineStart: 0,
                            start: 0,
                            end: 0
                        },
                        this.hasLineTerminator = !1,
                        this.context = {
                            isModule: !1,
                            await: !1,
                            allowIn: !0,
                            allowStrictDirective: !0,
                            allowYield: !0,
                            firstCoverInitializedNameError: null,
                            isAssignmentTarget: !1,
                            isBindingElement: !1,
                            inFunctionBody: !1,
                            inIteration: !1,
                            inSwitch: !1,
                            labelSet: {},
                            strict: !1
                        },
                        this.tokens = [],
                        this.startMarker = {
                            index: 0,
                            line: this.scanner.lineNumber,
                            column: 0
                        },
                        this.lastMarker = {
                            index: 0,
                            line: this.scanner.lineNumber,
                            column: 0
                        },
                        this.nextToken(),
                        this.lastMarker = {
                            index: this.scanner.index,
                            line: this.scanner.lineNumber,
                            column: this.scanner.index - this.scanner.lineStart
                        }
                    }
                    return e.prototype.throwError = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++)
                            t[n - 1] = arguments[n];
                        var r = Array.prototype.slice.call(arguments, 1)
                          , s = e.replace(/%(\d)/g, function(e, t) {
                            return i.assert(t < r.length, "Message reference must be in range"),
                            r[t]
                        })
                          , o = this.lastMarker.index
                          , a = this.lastMarker.line
                          , u = this.lastMarker.column + 1;
                        throw this.errorHandler.createError(o, a, u, s)
                    }
                    ,
                    e.prototype.tolerateError = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++)
                            t[n - 1] = arguments[n];
                        var r = Array.prototype.slice.call(arguments, 1)
                          , s = e.replace(/%(\d)/g, function(e, t) {
                            return i.assert(t < r.length, "Message reference must be in range"),
                            r[t]
                        })
                          , o = this.lastMarker.index
                          , a = this.scanner.lineNumber
                          , u = this.lastMarker.column + 1;
                        this.errorHandler.tolerateError(o, a, u, s)
                    }
                    ,
                    e.prototype.unexpectedTokenError = function(e, t) {
                        var n, i = t || s.Messages.UnexpectedToken;
                        if (e ? (t || (i = 2 === e.type ? s.Messages.UnexpectedEOS : 3 === e.type ? s.Messages.UnexpectedIdentifier : 6 === e.type ? s.Messages.UnexpectedNumber : 8 === e.type ? s.Messages.UnexpectedString : 10 === e.type ? s.Messages.UnexpectedTemplate : s.Messages.UnexpectedToken,
                        4 === e.type && (this.scanner.isFutureReservedWord(e.value) ? i = s.Messages.UnexpectedReserved : this.context.strict && this.scanner.isStrictModeReservedWord(e.value) && (i = s.Messages.StrictReservedWord))),
                        n = e.value) : n = "ILLEGAL",
                        i = i.replace("%0", n),
                        e && "number" == typeof e.lineNumber) {
                            var r = e.start
                              , o = e.lineNumber
                              , a = this.lastMarker.index - this.lastMarker.column
                              , u = e.start - a + 1;
                            return this.errorHandler.createError(r, o, u, i)
                        }
                        r = this.lastMarker.index,
                        o = this.lastMarker.line,
                        u = this.lastMarker.column + 1;
                        return this.errorHandler.createError(r, o, u, i)
                    }
                    ,
                    e.prototype.throwUnexpectedToken = function(e, t) {
                        throw this.unexpectedTokenError(e, t)
                    }
                    ,
                    e.prototype.tolerateUnexpectedToken = function(e, t) {
                        this.errorHandler.tolerate(this.unexpectedTokenError(e, t))
                    }
                    ,
                    e.prototype.collectComments = function() {
                        if (this.config.comment) {
                            var e = this.scanner.scanComments();
                            if (e.length > 0 && this.delegate)
                                for (var t = 0; t < e.length; ++t) {
                                    var n = e[t]
                                      , i = void 0;
                                    i = {
                                        type: n.multiLine ? "BlockComment" : "LineComment",
                                        value: this.scanner.source.slice(n.slice[0], n.slice[1])
                                    },
                                    this.config.range && (i.range = n.range),
                                    this.config.loc && (i.loc = n.loc);
                                    var r = {
                                        start: {
                                            line: n.loc.start.line,
                                            column: n.loc.start.column,
                                            offset: n.range[0]
                                        },
                                        end: {
                                            line: n.loc.end.line,
                                            column: n.loc.end.column,
                                            offset: n.range[1]
                                        }
                                    };
                                    this.delegate(i, r)
                                }
                        } else
                            this.scanner.scanComments()
                    }
                    ,
                    e.prototype.getTokenRaw = function(e) {
                        return this.scanner.source.slice(e.start, e.end)
                    }
                    ,
                    e.prototype.convertToken = function(e) {
                        var t = {
                            type: c.TokenName[e.type],
                            value: this.getTokenRaw(e)
                        };
                        if (this.config.range && (t.range = [e.start, e.end]),
                        this.config.loc && (t.loc = {
                            start: {
                                line: this.startMarker.line,
                                column: this.startMarker.column
                            },
                            end: {
                                line: this.scanner.lineNumber,
                                column: this.scanner.index - this.scanner.lineStart
                            }
                        }),
                        9 === e.type) {
                            var n = e.pattern
                              , i = e.flags;
                            t.regex = {
                                pattern: n,
                                flags: i
                            }
                        }
                        return t
                    }
                    ,
                    e.prototype.nextToken = function() {
                        var e = this.lookahead;
                        this.lastMarker.index = this.scanner.index,
                        this.lastMarker.line = this.scanner.lineNumber,
                        this.lastMarker.column = this.scanner.index - this.scanner.lineStart,
                        this.collectComments(),
                        this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index,
                        this.startMarker.line = this.scanner.lineNumber,
                        this.startMarker.column = this.scanner.index - this.scanner.lineStart);
                        var t = this.scanner.lex();
                        return this.hasLineTerminator = e.lineNumber !== t.lineNumber,
                        t && this.context.strict && 3 === t.type && this.scanner.isStrictModeReservedWord(t.value) && (t.type = 4),
                        this.lookahead = t,
                        this.config.tokens && 2 !== t.type && this.tokens.push(this.convertToken(t)),
                        e
                    }
                    ,
                    e.prototype.nextRegexToken = function() {
                        this.collectComments();
                        var e = this.scanner.scanRegExp();
                        return this.config.tokens && (this.tokens.pop(),
                        this.tokens.push(this.convertToken(e))),
                        this.lookahead = e,
                        this.nextToken(),
                        e
                    }
                    ,
                    e.prototype.createNode = function() {
                        return {
                            index: this.startMarker.index,
                            line: this.startMarker.line,
                            column: this.startMarker.column
                        }
                    }
                    ,
                    e.prototype.startNode = function(e) {
                        return {
                            index: e.start,
                            line: e.lineNumber,
                            column: e.start - e.lineStart
                        }
                    }
                    ,
                    e.prototype.finalize = function(e, t) {
                        if (this.config.range && (t.range = [e.index, this.lastMarker.index]),
                        this.config.loc && (t.loc = {
                            start: {
                                line: e.line,
                                column: e.column
                            },
                            end: {
                                line: this.lastMarker.line,
                                column: this.lastMarker.column
                            }
                        },
                        this.config.source && (t.loc.source = this.config.source)),
                        this.delegate) {
                            var n = {
                                start: {
                                    line: e.line,
                                    column: e.column,
                                    offset: e.index
                                },
                                end: {
                                    line: this.lastMarker.line,
                                    column: this.lastMarker.column,
                                    offset: this.lastMarker.index
                                }
                            };
                            this.delegate(t, n)
                        }
                        return t
                    }
                    ,
                    e.prototype.expect = function(e) {
                        var t = this.nextToken();
                        7 === t.type && t.value === e || this.throwUnexpectedToken(t)
                    }
                    ,
                    e.prototype.expectCommaSeparator = function() {
                        if (this.config.tolerant) {
                            var e = this.lookahead;
                            7 === e.type && "," === e.value ? this.nextToken() : 7 === e.type && ";" === e.value ? (this.nextToken(),
                            this.tolerateUnexpectedToken(e)) : this.tolerateUnexpectedToken(e, s.Messages.UnexpectedToken)
                        } else
                            this.expect(",")
                    }
                    ,
                    e.prototype.expectKeyword = function(e) {
                        var t = this.nextToken();
                        4 === t.type && t.value === e || this.throwUnexpectedToken(t)
                    }
                    ,
                    e.prototype.match = function(e) {
                        return 7 === this.lookahead.type && this.lookahead.value === e
                    }
                    ,
                    e.prototype.matchKeyword = function(e) {
                        return 4 === this.lookahead.type && this.lookahead.value === e
                    }
                    ,
                    e.prototype.matchContextualKeyword = function(e) {
                        return 3 === this.lookahead.type && this.lookahead.value === e
                    }
                    ,
                    e.prototype.matchAssign = function() {
                        if (7 !== this.lookahead.type)
                            return !1;
                        var e = this.lookahead.value;
                        return "=" === e || "*=" === e || "**=" === e || "/=" === e || "%=" === e || "+=" === e || "-=" === e || "<<=" === e || ">>=" === e || ">>>=" === e || "&=" === e || "^=" === e || "|=" === e
                    }
                    ,
                    e.prototype.isolateCoverGrammar = function(e) {
                        var t = this.context.isBindingElement
                          , n = this.context.isAssignmentTarget
                          , i = this.context.firstCoverInitializedNameError;
                        this.context.isBindingElement = !0,
                        this.context.isAssignmentTarget = !0,
                        this.context.firstCoverInitializedNameError = null;
                        var r = e.call(this);
                        return null !== this.context.firstCoverInitializedNameError && this.throwUnexpectedToken(this.context.firstCoverInitializedNameError),
                        this.context.isBindingElement = t,
                        this.context.isAssignmentTarget = n,
                        this.context.firstCoverInitializedNameError = i,
                        r
                    }
                    ,
                    e.prototype.inheritCoverGrammar = function(e) {
                        var t = this.context.isBindingElement
                          , n = this.context.isAssignmentTarget
                          , i = this.context.firstCoverInitializedNameError;
                        this.context.isBindingElement = !0,
                        this.context.isAssignmentTarget = !0,
                        this.context.firstCoverInitializedNameError = null;
                        var r = e.call(this);
                        return this.context.isBindingElement = this.context.isBindingElement && t,
                        this.context.isAssignmentTarget = this.context.isAssignmentTarget && n,
                        this.context.firstCoverInitializedNameError = i || this.context.firstCoverInitializedNameError,
                        r
                    }
                    ,
                    e.prototype.consumeSemicolon = function() {
                        this.match(";") ? this.nextToken() : this.hasLineTerminator || (2 === this.lookahead.type || this.match("}") || this.throwUnexpectedToken(this.lookahead),
                        this.lastMarker.index = this.startMarker.index,
                        this.lastMarker.line = this.startMarker.line,
                        this.lastMarker.column = this.startMarker.column)
                    }
                    ,
                    e.prototype.parsePrimaryExpression = function() {
                        var e, t, n, i = this.createNode();
                        switch (this.lookahead.type) {
                        case 3:
                            (this.context.isModule || this.context.await) && "await" === this.lookahead.value && this.tolerateUnexpectedToken(this.lookahead),
                            e = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(i, new o.Identifier(this.nextToken().value));
                            break;
                        case 6:
                        case 8:
                            this.context.strict && this.lookahead.octal && this.tolerateUnexpectedToken(this.lookahead, s.Messages.StrictOctalLiteral),
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1,
                            t = this.nextToken(),
                            n = this.getTokenRaw(t),
                            e = this.finalize(i, new o.Literal(t.value,n));
                            break;
                        case 1:
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1,
                            t = this.nextToken(),
                            n = this.getTokenRaw(t),
                            e = this.finalize(i, new o.Literal("true" === t.value,n));
                            break;
                        case 5:
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1,
                            t = this.nextToken(),
                            n = this.getTokenRaw(t),
                            e = this.finalize(i, new o.Literal(null,n));
                            break;
                        case 10:
                            e = this.parseTemplateLiteral();
                            break;
                        case 7:
                            switch (this.lookahead.value) {
                            case "(":
                                this.context.isBindingElement = !1,
                                e = this.inheritCoverGrammar(this.parseGroupExpression);
                                break;
                            case "[":
                                e = this.inheritCoverGrammar(this.parseArrayInitializer);
                                break;
                            case "{":
                                e = this.inheritCoverGrammar(this.parseObjectInitializer);
                                break;
                            case "/":
                            case "/=":
                                this.context.isAssignmentTarget = !1,
                                this.context.isBindingElement = !1,
                                this.scanner.index = this.startMarker.index,
                                t = this.nextRegexToken(),
                                n = this.getTokenRaw(t),
                                e = this.finalize(i, new o.RegexLiteral(t.regex,n,t.pattern,t.flags));
                                break;
                            default:
                                e = this.throwUnexpectedToken(this.nextToken())
                            }
                            break;
                        case 4:
                            !this.context.strict && this.context.allowYield && this.matchKeyword("yield") ? e = this.parseIdentifierName() : !this.context.strict && this.matchKeyword("let") ? e = this.finalize(i, new o.Identifier(this.nextToken().value)) : (this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1,
                            this.matchKeyword("function") ? e = this.parseFunctionExpression() : this.matchKeyword("this") ? (this.nextToken(),
                            e = this.finalize(i, new o.ThisExpression)) : e = this.matchKeyword("class") ? this.parseClassExpression() : this.throwUnexpectedToken(this.nextToken()));
                            break;
                        default:
                            e = this.throwUnexpectedToken(this.nextToken())
                        }
                        return e
                    }
                    ,
                    e.prototype.parseSpreadElement = function() {
                        var e = this.createNode();
                        this.expect("...");
                        var t = this.inheritCoverGrammar(this.parseAssignmentExpression);
                        return this.finalize(e, new o.SpreadElement(t))
                    }
                    ,
                    e.prototype.parseArrayInitializer = function() {
                        var e = this.createNode()
                          , t = [];
                        for (this.expect("["); !this.match("]"); )
                            if (this.match(","))
                                this.nextToken(),
                                t.push(null);
                            else if (this.match("...")) {
                                var n = this.parseSpreadElement();
                                this.match("]") || (this.context.isAssignmentTarget = !1,
                                this.context.isBindingElement = !1,
                                this.expect(",")),
                                t.push(n)
                            } else
                                t.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),
                                this.match("]") || this.expect(",");
                        return this.expect("]"),
                        this.finalize(e, new o.ArrayExpression(t))
                    }
                    ,
                    e.prototype.parsePropertyMethod = function(e) {
                        this.context.isAssignmentTarget = !1,
                        this.context.isBindingElement = !1;
                        var t = this.context.strict
                          , n = this.context.allowStrictDirective;
                        this.context.allowStrictDirective = e.simple;
                        var i = this.isolateCoverGrammar(this.parseFunctionSourceElements);
                        return this.context.strict && e.firstRestricted && this.tolerateUnexpectedToken(e.firstRestricted, e.message),
                        this.context.strict && e.stricted && this.tolerateUnexpectedToken(e.stricted, e.message),
                        this.context.strict = t,
                        this.context.allowStrictDirective = n,
                        i
                    }
                    ,
                    e.prototype.parsePropertyMethodFunction = function() {
                        var e = this.createNode()
                          , t = this.context.allowYield;
                        this.context.allowYield = !1;
                        var n = this.parseFormalParameters()
                          , i = this.parsePropertyMethod(n);
                        return this.context.allowYield = t,
                        this.finalize(e, new o.FunctionExpression(null,n.params,i,!1))
                    }
                    ,
                    e.prototype.parsePropertyMethodAsyncFunction = function() {
                        var e = this.createNode()
                          , t = this.context.allowYield
                          , n = this.context.await;
                        this.context.allowYield = !1,
                        this.context.await = !0;
                        var i = this.parseFormalParameters()
                          , r = this.parsePropertyMethod(i);
                        return this.context.allowYield = t,
                        this.context.await = n,
                        this.finalize(e, new o.AsyncFunctionExpression(null,i.params,r))
                    }
                    ,
                    e.prototype.parseObjectPropertyKey = function() {
                        var e, t = this.createNode(), n = this.nextToken();
                        switch (n.type) {
                        case 8:
                        case 6:
                            this.context.strict && n.octal && this.tolerateUnexpectedToken(n, s.Messages.StrictOctalLiteral);
                            var i = this.getTokenRaw(n);
                            e = this.finalize(t, new o.Literal(n.value,i));
                            break;
                        case 3:
                        case 1:
                        case 5:
                        case 4:
                            e = this.finalize(t, new o.Identifier(n.value));
                            break;
                        case 7:
                            "[" === n.value ? (e = this.isolateCoverGrammar(this.parseAssignmentExpression),
                            this.expect("]")) : e = this.throwUnexpectedToken(n);
                            break;
                        default:
                            e = this.throwUnexpectedToken(n)
                        }
                        return e
                    }
                    ,
                    e.prototype.isPropertyKey = function(e, t) {
                        return e.type === u.Syntax.Identifier && e.name === t || e.type === u.Syntax.Literal && e.value === t
                    }
                    ,
                    e.prototype.parseObjectProperty = function(e) {
                        var t, n = this.createNode(), i = this.lookahead, r = null, a = null, u = !1, c = !1, h = !1, l = !1;
                        if (3 === i.type) {
                            var p = i.value;
                            this.nextToken(),
                            u = this.match("["),
                            r = (l = !(this.hasLineTerminator || "async" !== p || this.match(":") || this.match("(") || this.match("*"))) ? this.parseObjectPropertyKey() : this.finalize(n, new o.Identifier(p))
                        } else
                            this.match("*") ? this.nextToken() : (u = this.match("["),
                            r = this.parseObjectPropertyKey());
                        var f = this.qualifiedPropertyName(this.lookahead);
                        if (3 === i.type && !l && "get" === i.value && f)
                            t = "get",
                            u = this.match("["),
                            r = this.parseObjectPropertyKey(),
                            this.context.allowYield = !1,
                            a = this.parseGetterMethod();
                        else if (3 === i.type && !l && "set" === i.value && f)
                            t = "set",
                            u = this.match("["),
                            r = this.parseObjectPropertyKey(),
                            a = this.parseSetterMethod();
                        else if (7 === i.type && "*" === i.value && f)
                            t = "init",
                            u = this.match("["),
                            r = this.parseObjectPropertyKey(),
                            a = this.parseGeneratorMethod(),
                            c = !0;
                        else if (r || this.throwUnexpectedToken(this.lookahead),
                        t = "init",
                        this.match(":") && !l)
                            !u && this.isPropertyKey(r, "__proto__") && (e.value && this.tolerateError(s.Messages.DuplicateProtoProperty),
                            e.value = !0),
                            this.nextToken(),
                            a = this.inheritCoverGrammar(this.parseAssignmentExpression);
                        else if (this.match("("))
                            a = l ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction(),
                            c = !0;
                        else if (3 === i.type) {
                            p = this.finalize(n, new o.Identifier(i.value));
                            if (this.match("=")) {
                                this.context.firstCoverInitializedNameError = this.lookahead,
                                this.nextToken(),
                                h = !0;
                                var d = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                a = this.finalize(n, new o.AssignmentPattern(p,d))
                            } else
                                h = !0,
                                a = p
                        } else
                            this.throwUnexpectedToken(this.nextToken());
                        return this.finalize(n, new o.Property(t,r,u,a,c,h))
                    }
                    ,
                    e.prototype.parseObjectInitializer = function() {
                        var e = this.createNode();
                        this.expect("{");
                        for (var t = [], n = {
                            value: !1
                        }; !this.match("}"); )
                            t.push(this.parseObjectProperty(n)),
                            this.match("}") || this.expectCommaSeparator();
                        return this.expect("}"),
                        this.finalize(e, new o.ObjectExpression(t))
                    }
                    ,
                    e.prototype.parseTemplateHead = function() {
                        i.assert(this.lookahead.head, "Template literal must start with a template head");
                        var e = this.createNode()
                          , t = this.nextToken()
                          , n = t.value
                          , r = t.cooked;
                        return this.finalize(e, new o.TemplateElement({
                            raw: n,
                            cooked: r
                        },t.tail))
                    }
                    ,
                    e.prototype.parseTemplateElement = function() {
                        10 !== this.lookahead.type && this.throwUnexpectedToken();
                        var e = this.createNode()
                          , t = this.nextToken()
                          , n = t.value
                          , i = t.cooked;
                        return this.finalize(e, new o.TemplateElement({
                            raw: n,
                            cooked: i
                        },t.tail))
                    }
                    ,
                    e.prototype.parseTemplateLiteral = function() {
                        var e = this.createNode()
                          , t = []
                          , n = []
                          , i = this.parseTemplateHead();
                        for (n.push(i); !i.tail; )
                            t.push(this.parseExpression()),
                            i = this.parseTemplateElement(),
                            n.push(i);
                        return this.finalize(e, new o.TemplateLiteral(n,t))
                    }
                    ,
                    e.prototype.reinterpretExpressionAsPattern = function(e) {
                        switch (e.type) {
                        case u.Syntax.Identifier:
                        case u.Syntax.MemberExpression:
                        case u.Syntax.RestElement:
                        case u.Syntax.AssignmentPattern:
                            break;
                        case u.Syntax.SpreadElement:
                            e.type = u.Syntax.RestElement,
                            this.reinterpretExpressionAsPattern(e.argument);
                            break;
                        case u.Syntax.ArrayExpression:
                            e.type = u.Syntax.ArrayPattern;
                            for (var t = 0; t < e.elements.length; t++)
                                null !== e.elements[t] && this.reinterpretExpressionAsPattern(e.elements[t]);
                            break;
                        case u.Syntax.ObjectExpression:
                            e.type = u.Syntax.ObjectPattern;
                            for (t = 0; t < e.properties.length; t++)
                                this.reinterpretExpressionAsPattern(e.properties[t].value);
                            break;
                        case u.Syntax.AssignmentExpression:
                            e.type = u.Syntax.AssignmentPattern,
                            delete e.operator,
                            this.reinterpretExpressionAsPattern(e.left)
                        }
                    }
                    ,
                    e.prototype.parseGroupExpression = function() {
                        var e;
                        if (this.expect("("),
                        this.match(")"))
                            this.nextToken(),
                            this.match("=>") || this.expect("=>"),
                            e = {
                                type: "ArrowParameterPlaceHolder",
                                params: [],
                                async: !1
                            };
                        else {
                            var t = this.lookahead
                              , n = [];
                            if (this.match("..."))
                                e = this.parseRestElement(n),
                                this.expect(")"),
                                this.match("=>") || this.expect("=>"),
                                e = {
                                    type: "ArrowParameterPlaceHolder",
                                    params: [e],
                                    async: !1
                                };
                            else {
                                var i = !1;
                                if (this.context.isBindingElement = !0,
                                e = this.inheritCoverGrammar(this.parseAssignmentExpression),
                                this.match(",")) {
                                    var r = [];
                                    for (this.context.isAssignmentTarget = !1,
                                    r.push(e); 2 !== this.lookahead.type && this.match(","); ) {
                                        if (this.nextToken(),
                                        this.match(")")) {
                                            this.nextToken();
                                            for (var s = 0; s < r.length; s++)
                                                this.reinterpretExpressionAsPattern(r[s]);
                                            i = !0,
                                            e = {
                                                type: "ArrowParameterPlaceHolder",
                                                params: r,
                                                async: !1
                                            }
                                        } else if (this.match("...")) {
                                            this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead),
                                            r.push(this.parseRestElement(n)),
                                            this.expect(")"),
                                            this.match("=>") || this.expect("=>"),
                                            this.context.isBindingElement = !1;
                                            for (s = 0; s < r.length; s++)
                                                this.reinterpretExpressionAsPattern(r[s]);
                                            i = !0,
                                            e = {
                                                type: "ArrowParameterPlaceHolder",
                                                params: r,
                                                async: !1
                                            }
                                        } else
                                            r.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                                        if (i)
                                            break
                                    }
                                    i || (e = this.finalize(this.startNode(t), new o.SequenceExpression(r)))
                                }
                                if (!i) {
                                    if (this.expect(")"),
                                    this.match("=>") && (e.type === u.Syntax.Identifier && "yield" === e.name && (i = !0,
                                    e = {
                                        type: "ArrowParameterPlaceHolder",
                                        params: [e],
                                        async: !1
                                    }),
                                    !i)) {
                                        if (this.context.isBindingElement || this.throwUnexpectedToken(this.lookahead),
                                        e.type === u.Syntax.SequenceExpression)
                                            for (s = 0; s < e.expressions.length; s++)
                                                this.reinterpretExpressionAsPattern(e.expressions[s]);
                                        else
                                            this.reinterpretExpressionAsPattern(e);
                                        e = {
                                            type: "ArrowParameterPlaceHolder",
                                            params: e.type === u.Syntax.SequenceExpression ? e.expressions : [e],
                                            async: !1
                                        }
                                    }
                                    this.context.isBindingElement = !1
                                }
                            }
                        }
                        return e
                    }
                    ,
                    e.prototype.parseArguments = function() {
                        this.expect("(");
                        var e = [];
                        if (!this.match(")"))
                            for (; ; ) {
                                var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
                                if (e.push(t),
                                this.match(")"))
                                    break;
                                if (this.expectCommaSeparator(),
                                this.match(")"))
                                    break
                            }
                        return this.expect(")"),
                        e
                    }
                    ,
                    e.prototype.isIdentifierName = function(e) {
                        return 3 === e.type || 4 === e.type || 1 === e.type || 5 === e.type
                    }
                    ,
                    e.prototype.parseIdentifierName = function() {
                        var e = this.createNode()
                          , t = this.nextToken();
                        return this.isIdentifierName(t) || this.throwUnexpectedToken(t),
                        this.finalize(e, new o.Identifier(t.value))
                    }
                    ,
                    e.prototype.parseNewExpression = function() {
                        var e, t = this.createNode(), n = this.parseIdentifierName();
                        if (i.assert("new" === n.name, "New expression must start with `new`"),
                        this.match("."))
                            if (this.nextToken(),
                            3 === this.lookahead.type && this.context.inFunctionBody && "target" === this.lookahead.value) {
                                var r = this.parseIdentifierName();
                                e = new o.MetaProperty(n,r)
                            } else
                                this.throwUnexpectedToken(this.lookahead);
                        else {
                            var s = this.isolateCoverGrammar(this.parseLeftHandSideExpression)
                              , a = this.match("(") ? this.parseArguments() : [];
                            e = new o.NewExpression(s,a),
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1
                        }
                        return this.finalize(t, e)
                    }
                    ,
                    e.prototype.parseAsyncArgument = function() {
                        var e = this.parseAssignmentExpression();
                        return this.context.firstCoverInitializedNameError = null,
                        e
                    }
                    ,
                    e.prototype.parseAsyncArguments = function() {
                        this.expect("(");
                        var e = [];
                        if (!this.match(")"))
                            for (; ; ) {
                                var t = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
                                if (e.push(t),
                                this.match(")"))
                                    break;
                                if (this.expectCommaSeparator(),
                                this.match(")"))
                                    break
                            }
                        return this.expect(")"),
                        e
                    }
                    ,
                    e.prototype.parseLeftHandSideExpressionAllowCall = function() {
                        var e, t = this.lookahead, n = this.matchContextualKeyword("async"), i = this.context.allowIn;
                        for (this.context.allowIn = !0,
                        this.matchKeyword("super") && this.context.inFunctionBody ? (e = this.createNode(),
                        this.nextToken(),
                        e = this.finalize(e, new o.Super),
                        this.match("(") || this.match(".") || this.match("[") || this.throwUnexpectedToken(this.lookahead)) : e = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression); ; )
                            if (this.match(".")) {
                                this.context.isBindingElement = !1,
                                this.context.isAssignmentTarget = !0,
                                this.expect(".");
                                var r = this.parseIdentifierName();
                                e = this.finalize(this.startNode(t), new o.StaticMemberExpression(e,r))
                            } else if (this.match("(")) {
                                var s = n && t.lineNumber === this.lookahead.lineNumber;
                                this.context.isBindingElement = !1,
                                this.context.isAssignmentTarget = !1;
                                var a = s ? this.parseAsyncArguments() : this.parseArguments();
                                if (e = this.finalize(this.startNode(t), new o.CallExpression(e,a)),
                                s && this.match("=>")) {
                                    for (var u = 0; u < a.length; ++u)
                                        this.reinterpretExpressionAsPattern(a[u]);
                                    e = {
                                        type: "ArrowParameterPlaceHolder",
                                        params: a,
                                        async: !0
                                    }
                                }
                            } else if (this.match("[")) {
                                this.context.isBindingElement = !1,
                                this.context.isAssignmentTarget = !0,
                                this.expect("[");
                                r = this.isolateCoverGrammar(this.parseExpression);
                                this.expect("]"),
                                e = this.finalize(this.startNode(t), new o.ComputedMemberExpression(e,r))
                            } else {
                                if (10 !== this.lookahead.type || !this.lookahead.head)
                                    break;
                                var c = this.parseTemplateLiteral();
                                e = this.finalize(this.startNode(t), new o.TaggedTemplateExpression(e,c))
                            }
                        return this.context.allowIn = i,
                        e
                    }
                    ,
                    e.prototype.parseSuper = function() {
                        var e = this.createNode();
                        return this.expectKeyword("super"),
                        this.match("[") || this.match(".") || this.throwUnexpectedToken(this.lookahead),
                        this.finalize(e, new o.Super)
                    }
                    ,
                    e.prototype.parseLeftHandSideExpression = function() {
                        i.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
                        for (var e = this.startNode(this.lookahead), t = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression); ; )
                            if (this.match("[")) {
                                this.context.isBindingElement = !1,
                                this.context.isAssignmentTarget = !0,
                                this.expect("[");
                                var n = this.isolateCoverGrammar(this.parseExpression);
                                this.expect("]"),
                                t = this.finalize(e, new o.ComputedMemberExpression(t,n))
                            } else if (this.match(".")) {
                                this.context.isBindingElement = !1,
                                this.context.isAssignmentTarget = !0,
                                this.expect(".");
                                n = this.parseIdentifierName();
                                t = this.finalize(e, new o.StaticMemberExpression(t,n))
                            } else {
                                if (10 !== this.lookahead.type || !this.lookahead.head)
                                    break;
                                var r = this.parseTemplateLiteral();
                                t = this.finalize(e, new o.TaggedTemplateExpression(t,r))
                            }
                        return t
                    }
                    ,
                    e.prototype.parseUpdateExpression = function() {
                        var e, t = this.lookahead;
                        if (this.match("++") || this.match("--")) {
                            var n = this.startNode(t)
                              , i = this.nextToken();
                            e = this.inheritCoverGrammar(this.parseUnaryExpression),
                            this.context.strict && e.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(s.Messages.StrictLHSPrefix),
                            this.context.isAssignmentTarget || this.tolerateError(s.Messages.InvalidLHSInAssignment);
                            var r = !0;
                            e = this.finalize(n, new o.UpdateExpression(i.value,e,r)),
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1
                        } else if (e = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),
                        !this.hasLineTerminator && 7 === this.lookahead.type && (this.match("++") || this.match("--"))) {
                            this.context.strict && e.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(e.name) && this.tolerateError(s.Messages.StrictLHSPostfix),
                            this.context.isAssignmentTarget || this.tolerateError(s.Messages.InvalidLHSInAssignment),
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1;
                            var a = this.nextToken().value;
                            r = !1;
                            e = this.finalize(this.startNode(t), new o.UpdateExpression(a,e,r))
                        }
                        return e
                    }
                    ,
                    e.prototype.parseAwaitExpression = function() {
                        var e = this.createNode();
                        this.nextToken();
                        var t = this.parseUnaryExpression();
                        return this.finalize(e, new o.AwaitExpression(t))
                    }
                    ,
                    e.prototype.parseUnaryExpression = function() {
                        var e;
                        if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
                            var t = this.startNode(this.lookahead)
                              , n = this.nextToken();
                            e = this.inheritCoverGrammar(this.parseUnaryExpression),
                            e = this.finalize(t, new o.UnaryExpression(n.value,e)),
                            this.context.strict && "delete" === e.operator && e.argument.type === u.Syntax.Identifier && this.tolerateError(s.Messages.StrictDelete),
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1
                        } else
                            e = this.context.await && this.matchContextualKeyword("await") ? this.parseAwaitExpression() : this.parseUpdateExpression();
                        return e
                    }
                    ,
                    e.prototype.parseExponentiationExpression = function() {
                        var e = this.lookahead
                          , t = this.inheritCoverGrammar(this.parseUnaryExpression);
                        if (t.type !== u.Syntax.UnaryExpression && this.match("**")) {
                            this.nextToken(),
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1;
                            var n = t
                              , i = this.isolateCoverGrammar(this.parseExponentiationExpression);
                            t = this.finalize(this.startNode(e), new o.BinaryExpression("**",n,i))
                        }
                        return t
                    }
                    ,
                    e.prototype.binaryPrecedence = function(e) {
                        var t = e.value;
                        return 7 === e.type ? this.operatorPrecedence[t] || 0 : 4 === e.type && ("instanceof" === t || this.context.allowIn && "in" === t) ? 7 : 0
                    }
                    ,
                    e.prototype.parseBinaryExpression = function() {
                        var e = this.lookahead
                          , t = this.inheritCoverGrammar(this.parseExponentiationExpression)
                          , n = this.lookahead
                          , i = this.binaryPrecedence(n);
                        if (i > 0) {
                            this.nextToken(),
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1;
                            for (var r = [e, this.lookahead], s = t, a = this.isolateCoverGrammar(this.parseExponentiationExpression), u = [s, n.value, a], c = [i]; !((i = this.binaryPrecedence(this.lookahead)) <= 0); ) {
                                for (; u.length > 2 && i <= c[c.length - 1]; ) {
                                    a = u.pop();
                                    var h = u.pop();
                                    c.pop(),
                                    s = u.pop(),
                                    r.pop();
                                    var l = this.startNode(r[r.length - 1]);
                                    u.push(this.finalize(l, new o.BinaryExpression(h,s,a)))
                                }
                                u.push(this.nextToken().value),
                                c.push(i),
                                r.push(this.lookahead),
                                u.push(this.isolateCoverGrammar(this.parseExponentiationExpression))
                            }
                            var p = u.length - 1;
                            for (t = u[p],
                            r.pop(); p > 1; ) {
                                l = this.startNode(r.pop()),
                                h = u[p - 1];
                                t = this.finalize(l, new o.BinaryExpression(h,u[p - 2],t)),
                                p -= 2
                            }
                        }
                        return t
                    }
                    ,
                    e.prototype.parseConditionalExpression = function() {
                        var e = this.lookahead
                          , t = this.inheritCoverGrammar(this.parseBinaryExpression);
                        if (this.match("?")) {
                            this.nextToken();
                            var n = this.context.allowIn;
                            this.context.allowIn = !0;
                            var i = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            this.context.allowIn = n,
                            this.expect(":");
                            var r = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            t = this.finalize(this.startNode(e), new o.ConditionalExpression(t,i,r)),
                            this.context.isAssignmentTarget = !1,
                            this.context.isBindingElement = !1
                        }
                        return t
                    }
                    ,
                    e.prototype.checkPatternParam = function(e, t) {
                        switch (t.type) {
                        case u.Syntax.Identifier:
                            this.validateParam(e, t, t.name);
                            break;
                        case u.Syntax.RestElement:
                            this.checkPatternParam(e, t.argument);
                            break;
                        case u.Syntax.AssignmentPattern:
                            this.checkPatternParam(e, t.left);
                            break;
                        case u.Syntax.ArrayPattern:
                            for (var n = 0; n < t.elements.length; n++)
                                null !== t.elements[n] && this.checkPatternParam(e, t.elements[n]);
                            break;
                        case u.Syntax.ObjectPattern:
                            for (n = 0; n < t.properties.length; n++)
                                this.checkPatternParam(e, t.properties[n].value)
                        }
                        e.simple = e.simple && t instanceof o.Identifier
                    }
                    ,
                    e.prototype.reinterpretAsCoverFormalsList = function(e) {
                        var t, n = [e], i = !1;
                        switch (e.type) {
                        case u.Syntax.Identifier:
                            break;
                        case "ArrowParameterPlaceHolder":
                            n = e.params,
                            i = e.async;
                            break;
                        default:
                            return null
                        }
                        t = {
                            simple: !0,
                            paramSet: {}
                        };
                        for (var r = 0; r < n.length; ++r) {
                            (o = n[r]).type === u.Syntax.AssignmentPattern ? o.right.type === u.Syntax.YieldExpression && (o.right.argument && this.throwUnexpectedToken(this.lookahead),
                            o.right.type = u.Syntax.Identifier,
                            o.right.name = "yield",
                            delete o.right.argument,
                            delete o.right.delegate) : i && o.type === u.Syntax.Identifier && "await" === o.name && this.throwUnexpectedToken(this.lookahead),
                            this.checkPatternParam(t, o),
                            n[r] = o
                        }
                        if (this.context.strict || !this.context.allowYield)
                            for (r = 0; r < n.length; ++r) {
                                var o;
                                (o = n[r]).type === u.Syntax.YieldExpression && this.throwUnexpectedToken(this.lookahead)
                            }
                        if (t.message === s.Messages.StrictParamDupe) {
                            var a = this.context.strict ? t.stricted : t.firstRestricted;
                            this.throwUnexpectedToken(a, t.message)
                        }
                        return {
                            simple: t.simple,
                            params: n,
                            stricted: t.stricted,
                            firstRestricted: t.firstRestricted,
                            message: t.message
                        }
                    }
                    ,
                    e.prototype.parseAssignmentExpression = function() {
                        var e;
                        if (!this.context.allowYield && this.matchKeyword("yield"))
                            e = this.parseYieldExpression();
                        else {
                            var t = this.lookahead
                              , n = t;
                            if (e = this.parseConditionalExpression(),
                            3 === n.type && n.lineNumber === this.lookahead.lineNumber && "async" === n.value && (3 === this.lookahead.type || this.matchKeyword("yield"))) {
                                var i = this.parsePrimaryExpression();
                                this.reinterpretExpressionAsPattern(i),
                                e = {
                                    type: "ArrowParameterPlaceHolder",
                                    params: [i],
                                    async: !0
                                }
                            }
                            if ("ArrowParameterPlaceHolder" === e.type || this.match("=>")) {
                                this.context.isAssignmentTarget = !1,
                                this.context.isBindingElement = !1;
                                var r = e.async
                                  , a = this.reinterpretAsCoverFormalsList(e);
                                if (a) {
                                    this.hasLineTerminator && this.tolerateUnexpectedToken(this.lookahead),
                                    this.context.firstCoverInitializedNameError = null;
                                    var c = this.context.strict
                                      , h = this.context.allowStrictDirective;
                                    this.context.allowStrictDirective = a.simple;
                                    var l = this.context.allowYield
                                      , p = this.context.await;
                                    this.context.allowYield = !0,
                                    this.context.await = r;
                                    var f = this.startNode(t);
                                    this.expect("=>");
                                    var d = void 0;
                                    if (this.match("{")) {
                                        var m = this.context.allowIn;
                                        this.context.allowIn = !0,
                                        d = this.parseFunctionSourceElements(),
                                        this.context.allowIn = m
                                    } else
                                        d = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                    var y = d.type !== u.Syntax.BlockStatement;
                                    this.context.strict && a.firstRestricted && this.throwUnexpectedToken(a.firstRestricted, a.message),
                                    this.context.strict && a.stricted && this.tolerateUnexpectedToken(a.stricted, a.message),
                                    e = r ? this.finalize(f, new o.AsyncArrowFunctionExpression(a.params,d,y)) : this.finalize(f, new o.ArrowFunctionExpression(a.params,d,y)),
                                    this.context.strict = c,
                                    this.context.allowStrictDirective = h,
                                    this.context.allowYield = l,
                                    this.context.await = p
                                }
                            } else if (this.matchAssign()) {
                                if (this.context.isAssignmentTarget || this.tolerateError(s.Messages.InvalidLHSInAssignment),
                                this.context.strict && e.type === u.Syntax.Identifier) {
                                    var g = e;
                                    this.scanner.isRestrictedWord(g.name) && this.tolerateUnexpectedToken(n, s.Messages.StrictLHSAssignment),
                                    this.scanner.isStrictModeReservedWord(g.name) && this.tolerateUnexpectedToken(n, s.Messages.StrictReservedWord)
                                }
                                this.match("=") ? this.reinterpretExpressionAsPattern(e) : (this.context.isAssignmentTarget = !1,
                                this.context.isBindingElement = !1);
                                var x = (n = this.nextToken()).value
                                  , v = this.isolateCoverGrammar(this.parseAssignmentExpression);
                                e = this.finalize(this.startNode(t), new o.AssignmentExpression(x,e,v)),
                                this.context.firstCoverInitializedNameError = null
                            }
                        }
                        return e
                    }
                    ,
                    e.prototype.parseExpression = function() {
                        var e = this.lookahead
                          , t = this.isolateCoverGrammar(this.parseAssignmentExpression);
                        if (this.match(",")) {
                            var n = [];
                            for (n.push(t); 2 !== this.lookahead.type && this.match(","); )
                                this.nextToken(),
                                n.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                            t = this.finalize(this.startNode(e), new o.SequenceExpression(n))
                        }
                        return t
                    }
                    ,
                    e.prototype.parseStatementListItem = function() {
                        var e;
                        if (this.context.isAssignmentTarget = !0,
                        this.context.isBindingElement = !0,
                        4 === this.lookahead.type)
                            switch (this.lookahead.value) {
                            case "export":
                                this.context.isModule || this.tolerateUnexpectedToken(this.lookahead, s.Messages.IllegalExportDeclaration),
                                e = this.parseExportDeclaration();
                                break;
                            case "import":
                                this.context.isModule || this.tolerateUnexpectedToken(this.lookahead, s.Messages.IllegalImportDeclaration),
                                e = this.parseImportDeclaration();
                                break;
                            case "const":
                                e = this.parseLexicalDeclaration({
                                    inFor: !1
                                });
                                break;
                            case "function":
                                e = this.parseFunctionDeclaration();
                                break;
                            case "class":
                                e = this.parseClassDeclaration();
                                break;
                            case "let":
                                e = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({
                                    inFor: !1
                                }) : this.parseStatement();
                                break;
                            default:
                                e = this.parseStatement()
                            }
                        else
                            e = this.parseStatement();
                        return e
                    }
                    ,
                    e.prototype.parseBlock = function() {
                        var e = this.createNode();
                        this.expect("{");
                        for (var t = []; !this.match("}"); )
                            t.push(this.parseStatementListItem());
                        return this.expect("}"),
                        this.finalize(e, new o.BlockStatement(t))
                    }
                    ,
                    e.prototype.parseLexicalBinding = function(e, t) {
                        var n = this.createNode()
                          , i = this.parsePattern([], e);
                        this.context.strict && i.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(i.name) && this.tolerateError(s.Messages.StrictVarName);
                        var r = null;
                        return "const" === e ? this.matchKeyword("in") || this.matchContextualKeyword("of") || (this.match("=") ? (this.nextToken(),
                        r = this.isolateCoverGrammar(this.parseAssignmentExpression)) : this.throwError(s.Messages.DeclarationMissingInitializer, "const")) : (!t.inFor && i.type !== u.Syntax.Identifier || this.match("=")) && (this.expect("="),
                        r = this.isolateCoverGrammar(this.parseAssignmentExpression)),
                        this.finalize(n, new o.VariableDeclarator(i,r))
                    }
                    ,
                    e.prototype.parseBindingList = function(e, t) {
                        for (var n = [this.parseLexicalBinding(e, t)]; this.match(","); )
                            this.nextToken(),
                            n.push(this.parseLexicalBinding(e, t));
                        return n
                    }
                    ,
                    e.prototype.isLexicalDeclaration = function() {
                        var e = this.scanner.saveState();
                        this.scanner.scanComments();
                        var t = this.scanner.lex();
                        return this.scanner.restoreState(e),
                        3 === t.type || 7 === t.type && "[" === t.value || 7 === t.type && "{" === t.value || 4 === t.type && "let" === t.value || 4 === t.type && "yield" === t.value
                    }
                    ,
                    e.prototype.parseLexicalDeclaration = function(e) {
                        var t = this.createNode()
                          , n = this.nextToken().value;
                        i.assert("let" === n || "const" === n, "Lexical declaration must be either let or const");
                        var r = this.parseBindingList(n, e);
                        return this.consumeSemicolon(),
                        this.finalize(t, new o.VariableDeclaration(r,n))
                    }
                    ,
                    e.prototype.parseBindingRestElement = function(e, t) {
                        var n = this.createNode();
                        this.expect("...");
                        var i = this.parsePattern(e, t);
                        return this.finalize(n, new o.RestElement(i))
                    }
                    ,
                    e.prototype.parseArrayPattern = function(e, t) {
                        var n = this.createNode();
                        this.expect("[");
                        for (var i = []; !this.match("]"); )
                            if (this.match(","))
                                this.nextToken(),
                                i.push(null);
                            else {
                                if (this.match("...")) {
                                    i.push(this.parseBindingRestElement(e, t));
                                    break
                                }
                                i.push(this.parsePatternWithDefault(e, t)),
                                this.match("]") || this.expect(",")
                            }
                        return this.expect("]"),
                        this.finalize(n, new o.ArrayPattern(i))
                    }
                    ,
                    e.prototype.parsePropertyPattern = function(e, t) {
                        var n, i, r = this.createNode(), s = !1, a = !1;
                        if (3 === this.lookahead.type) {
                            var u = this.lookahead;
                            n = this.parseVariableIdentifier();
                            var c = this.finalize(r, new o.Identifier(u.value));
                            if (this.match("=")) {
                                e.push(u),
                                a = !0,
                                this.nextToken();
                                var h = this.parseAssignmentExpression();
                                i = this.finalize(this.startNode(u), new o.AssignmentPattern(c,h))
                            } else
                                this.match(":") ? (this.expect(":"),
                                i = this.parsePatternWithDefault(e, t)) : (e.push(u),
                                a = !0,
                                i = c)
                        } else
                            s = this.match("["),
                            n = this.parseObjectPropertyKey(),
                            this.expect(":"),
                            i = this.parsePatternWithDefault(e, t);
                        return this.finalize(r, new o.Property("init",n,s,i,!1,a))
                    }
                    ,
                    e.prototype.parseObjectPattern = function(e, t) {
                        var n = this.createNode()
                          , i = [];
                        for (this.expect("{"); !this.match("}"); )
                            i.push(this.parsePropertyPattern(e, t)),
                            this.match("}") || this.expect(",");
                        return this.expect("}"),
                        this.finalize(n, new o.ObjectPattern(i))
                    }
                    ,
                    e.prototype.parsePattern = function(e, t) {
                        var n;
                        return this.match("[") ? n = this.parseArrayPattern(e, t) : this.match("{") ? n = this.parseObjectPattern(e, t) : (!this.matchKeyword("let") || "const" !== t && "let" !== t || this.tolerateUnexpectedToken(this.lookahead, s.Messages.LetInLexicalBinding),
                        e.push(this.lookahead),
                        n = this.parseVariableIdentifier(t)),
                        n
                    }
                    ,
                    e.prototype.parsePatternWithDefault = function(e, t) {
                        var n = this.lookahead
                          , i = this.parsePattern(e, t);
                        if (this.match("=")) {
                            this.nextToken();
                            var r = this.context.allowYield;
                            this.context.allowYield = !0;
                            var s = this.isolateCoverGrammar(this.parseAssignmentExpression);
                            this.context.allowYield = r,
                            i = this.finalize(this.startNode(n), new o.AssignmentPattern(i,s))
                        }
                        return i
                    }
                    ,
                    e.prototype.parseVariableIdentifier = function(e) {
                        var t = this.createNode()
                          , n = this.nextToken();
                        return 4 === n.type && "yield" === n.value ? this.context.strict ? this.tolerateUnexpectedToken(n, s.Messages.StrictReservedWord) : this.context.allowYield || this.throwUnexpectedToken(n) : 3 !== n.type ? this.context.strict && 4 === n.type && this.scanner.isStrictModeReservedWord(n.value) ? this.tolerateUnexpectedToken(n, s.Messages.StrictReservedWord) : (this.context.strict || "let" !== n.value || "var" !== e) && this.throwUnexpectedToken(n) : (this.context.isModule || this.context.await) && 3 === n.type && "await" === n.value && this.tolerateUnexpectedToken(n),
                        this.finalize(t, new o.Identifier(n.value))
                    }
                    ,
                    e.prototype.parseVariableDeclaration = function(e) {
                        var t = this.createNode()
                          , n = this.parsePattern([], "var");
                        this.context.strict && n.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(n.name) && this.tolerateError(s.Messages.StrictVarName);
                        var i = null;
                        return this.match("=") ? (this.nextToken(),
                        i = this.isolateCoverGrammar(this.parseAssignmentExpression)) : n.type === u.Syntax.Identifier || e.inFor || this.expect("="),
                        this.finalize(t, new o.VariableDeclarator(n,i))
                    }
                    ,
                    e.prototype.parseVariableDeclarationList = function(e) {
                        var t = {
                            inFor: e.inFor
                        }
                          , n = [];
                        for (n.push(this.parseVariableDeclaration(t)); this.match(","); )
                            this.nextToken(),
                            n.push(this.parseVariableDeclaration(t));
                        return n
                    }
                    ,
                    e.prototype.parseVariableStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("var");
                        var t = this.parseVariableDeclarationList({
                            inFor: !1
                        });
                        return this.consumeSemicolon(),
                        this.finalize(e, new o.VariableDeclaration(t,"var"))
                    }
                    ,
                    e.prototype.parseEmptyStatement = function() {
                        var e = this.createNode();
                        return this.expect(";"),
                        this.finalize(e, new o.EmptyStatement)
                    }
                    ,
                    e.prototype.parseExpressionStatement = function() {
                        var e = this.createNode()
                          , t = this.parseExpression();
                        return this.consumeSemicolon(),
                        this.finalize(e, new o.ExpressionStatement(t))
                    }
                    ,
                    e.prototype.parseIfClause = function() {
                        return this.context.strict && this.matchKeyword("function") && this.tolerateError(s.Messages.StrictFunction),
                        this.parseStatement()
                    }
                    ,
                    e.prototype.parseIfStatement = function() {
                        var e, t = this.createNode(), n = null;
                        this.expectKeyword("if"),
                        this.expect("(");
                        var i = this.parseExpression();
                        return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()),
                        e = this.finalize(this.createNode(), new o.EmptyStatement)) : (this.expect(")"),
                        e = this.parseIfClause(),
                        this.matchKeyword("else") && (this.nextToken(),
                        n = this.parseIfClause())),
                        this.finalize(t, new o.IfStatement(i,e,n))
                    }
                    ,
                    e.prototype.parseDoWhileStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("do");
                        var t = this.context.inIteration;
                        this.context.inIteration = !0;
                        var n = this.parseStatement();
                        this.context.inIteration = t,
                        this.expectKeyword("while"),
                        this.expect("(");
                        var i = this.parseExpression();
                        return !this.match(")") && this.config.tolerant ? this.tolerateUnexpectedToken(this.nextToken()) : (this.expect(")"),
                        this.match(";") && this.nextToken()),
                        this.finalize(e, new o.DoWhileStatement(n,i))
                    }
                    ,
                    e.prototype.parseWhileStatement = function() {
                        var e, t = this.createNode();
                        this.expectKeyword("while"),
                        this.expect("(");
                        var n = this.parseExpression();
                        if (!this.match(")") && this.config.tolerant)
                            this.tolerateUnexpectedToken(this.nextToken()),
                            e = this.finalize(this.createNode(), new o.EmptyStatement);
                        else {
                            this.expect(")");
                            var i = this.context.inIteration;
                            this.context.inIteration = !0,
                            e = this.parseStatement(),
                            this.context.inIteration = i
                        }
                        return this.finalize(t, new o.WhileStatement(n,e))
                    }
                    ,
                    e.prototype.parseForStatement = function() {
                        var e, t, n, i = null, r = null, a = null, c = !0, h = this.createNode();
                        if (this.expectKeyword("for"),
                        this.expect("("),
                        this.match(";"))
                            this.nextToken();
                        else if (this.matchKeyword("var")) {
                            i = this.createNode(),
                            this.nextToken();
                            var l = this.context.allowIn;
                            this.context.allowIn = !1;
                            var p = this.parseVariableDeclarationList({
                                inFor: !0
                            });
                            if (this.context.allowIn = l,
                            1 === p.length && this.matchKeyword("in")) {
                                var f = p[0];
                                f.init && (f.id.type === u.Syntax.ArrayPattern || f.id.type === u.Syntax.ObjectPattern || this.context.strict) && this.tolerateError(s.Messages.ForInOfLoopInitializer, "for-in"),
                                i = this.finalize(i, new o.VariableDeclaration(p,"var")),
                                this.nextToken(),
                                e = i,
                                t = this.parseExpression(),
                                i = null
                            } else
                                1 === p.length && null === p[0].init && this.matchContextualKeyword("of") ? (i = this.finalize(i, new o.VariableDeclaration(p,"var")),
                                this.nextToken(),
                                e = i,
                                t = this.parseAssignmentExpression(),
                                i = null,
                                c = !1) : (i = this.finalize(i, new o.VariableDeclaration(p,"var")),
                                this.expect(";"))
                        } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
                            i = this.createNode();
                            var d = this.nextToken().value;
                            if (this.context.strict || "in" !== this.lookahead.value) {
                                l = this.context.allowIn;
                                this.context.allowIn = !1;
                                p = this.parseBindingList(d, {
                                    inFor: !0
                                });
                                this.context.allowIn = l,
                                1 === p.length && null === p[0].init && this.matchKeyword("in") ? (i = this.finalize(i, new o.VariableDeclaration(p,d)),
                                this.nextToken(),
                                e = i,
                                t = this.parseExpression(),
                                i = null) : 1 === p.length && null === p[0].init && this.matchContextualKeyword("of") ? (i = this.finalize(i, new o.VariableDeclaration(p,d)),
                                this.nextToken(),
                                e = i,
                                t = this.parseAssignmentExpression(),
                                i = null,
                                c = !1) : (this.consumeSemicolon(),
                                i = this.finalize(i, new o.VariableDeclaration(p,d)))
                            } else
                                i = this.finalize(i, new o.Identifier(d)),
                                this.nextToken(),
                                e = i,
                                t = this.parseExpression(),
                                i = null
                        } else {
                            var m = this.lookahead;
                            l = this.context.allowIn;
                            if (this.context.allowIn = !1,
                            i = this.inheritCoverGrammar(this.parseAssignmentExpression),
                            this.context.allowIn = l,
                            this.matchKeyword("in"))
                                this.context.isAssignmentTarget && i.type !== u.Syntax.AssignmentExpression || this.tolerateError(s.Messages.InvalidLHSInForIn),
                                this.nextToken(),
                                this.reinterpretExpressionAsPattern(i),
                                e = i,
                                t = this.parseExpression(),
                                i = null;
                            else if (this.matchContextualKeyword("of"))
                                this.context.isAssignmentTarget && i.type !== u.Syntax.AssignmentExpression || this.tolerateError(s.Messages.InvalidLHSInForLoop),
                                this.nextToken(),
                                this.reinterpretExpressionAsPattern(i),
                                e = i,
                                t = this.parseAssignmentExpression(),
                                i = null,
                                c = !1;
                            else {
                                if (this.match(",")) {
                                    for (var y = [i]; this.match(","); )
                                        this.nextToken(),
                                        y.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                                    i = this.finalize(this.startNode(m), new o.SequenceExpression(y))
                                }
                                this.expect(";")
                            }
                        }
                        if (void 0 === e && (this.match(";") || (r = this.parseExpression()),
                        this.expect(";"),
                        this.match(")") || (a = this.parseExpression())),
                        !this.match(")") && this.config.tolerant)
                            this.tolerateUnexpectedToken(this.nextToken()),
                            n = this.finalize(this.createNode(), new o.EmptyStatement);
                        else {
                            this.expect(")");
                            var g = this.context.inIteration;
                            this.context.inIteration = !0,
                            n = this.isolateCoverGrammar(this.parseStatement),
                            this.context.inIteration = g
                        }
                        return void 0 === e ? this.finalize(h, new o.ForStatement(i,r,a,n)) : c ? this.finalize(h, new o.ForInStatement(e,t,n)) : this.finalize(h, new o.ForOfStatement(e,t,n))
                    }
                    ,
                    e.prototype.parseContinueStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("continue");
                        var t = null;
                        if (3 === this.lookahead.type && !this.hasLineTerminator) {
                            var n = this.parseVariableIdentifier();
                            t = n;
                            var i = "$" + n.name;
                            Object.prototype.hasOwnProperty.call(this.context.labelSet, i) || this.throwError(s.Messages.UnknownLabel, n.name)
                        }
                        return this.consumeSemicolon(),
                        null !== t || this.context.inIteration || this.throwError(s.Messages.IllegalContinue),
                        this.finalize(e, new o.ContinueStatement(t))
                    }
                    ,
                    e.prototype.parseBreakStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("break");
                        var t = null;
                        if (3 === this.lookahead.type && !this.hasLineTerminator) {
                            var n = this.parseVariableIdentifier()
                              , i = "$" + n.name;
                            Object.prototype.hasOwnProperty.call(this.context.labelSet, i) || this.throwError(s.Messages.UnknownLabel, n.name),
                            t = n
                        }
                        return this.consumeSemicolon(),
                        null !== t || this.context.inIteration || this.context.inSwitch || this.throwError(s.Messages.IllegalBreak),
                        this.finalize(e, new o.BreakStatement(t))
                    }
                    ,
                    e.prototype.parseReturnStatement = function() {
                        this.context.inFunctionBody || this.tolerateError(s.Messages.IllegalReturn);
                        var e = this.createNode();
                        this.expectKeyword("return");
                        var t = !this.match(";") && !this.match("}") && !this.hasLineTerminator && 2 !== this.lookahead.type ? this.parseExpression() : null;
                        return this.consumeSemicolon(),
                        this.finalize(e, new o.ReturnStatement(t))
                    }
                    ,
                    e.prototype.parseWithStatement = function() {
                        this.context.strict && this.tolerateError(s.Messages.StrictModeWith);
                        var e, t = this.createNode();
                        this.expectKeyword("with"),
                        this.expect("(");
                        var n = this.parseExpression();
                        return !this.match(")") && this.config.tolerant ? (this.tolerateUnexpectedToken(this.nextToken()),
                        e = this.finalize(this.createNode(), new o.EmptyStatement)) : (this.expect(")"),
                        e = this.parseStatement()),
                        this.finalize(t, new o.WithStatement(n,e))
                    }
                    ,
                    e.prototype.parseSwitchCase = function() {
                        var e, t = this.createNode();
                        this.matchKeyword("default") ? (this.nextToken(),
                        e = null) : (this.expectKeyword("case"),
                        e = this.parseExpression()),
                        this.expect(":");
                        for (var n = []; !(this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")); )
                            n.push(this.parseStatementListItem());
                        return this.finalize(t, new o.SwitchCase(e,n))
                    }
                    ,
                    e.prototype.parseSwitchStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("switch"),
                        this.expect("(");
                        var t = this.parseExpression();
                        this.expect(")");
                        var n = this.context.inSwitch;
                        this.context.inSwitch = !0;
                        var i = []
                          , r = !1;
                        for (this.expect("{"); !this.match("}"); ) {
                            var a = this.parseSwitchCase();
                            null === a.test && (r && this.throwError(s.Messages.MultipleDefaultsInSwitch),
                            r = !0),
                            i.push(a)
                        }
                        return this.expect("}"),
                        this.context.inSwitch = n,
                        this.finalize(e, new o.SwitchStatement(t,i))
                    }
                    ,
                    e.prototype.parseLabelledStatement = function() {
                        var e, t = this.createNode(), n = this.parseExpression();
                        if (n.type === u.Syntax.Identifier && this.match(":")) {
                            this.nextToken();
                            var i = n
                              , r = "$" + i.name;
                            Object.prototype.hasOwnProperty.call(this.context.labelSet, r) && this.throwError(s.Messages.Redeclaration, "Label", i.name),
                            this.context.labelSet[r] = !0;
                            var a = void 0;
                            if (this.matchKeyword("class"))
                                this.tolerateUnexpectedToken(this.lookahead),
                                a = this.parseClassDeclaration();
                            else if (this.matchKeyword("function")) {
                                var c = this.lookahead
                                  , h = this.parseFunctionDeclaration();
                                this.context.strict ? this.tolerateUnexpectedToken(c, s.Messages.StrictFunction) : h.generator && this.tolerateUnexpectedToken(c, s.Messages.GeneratorInLegacyContext),
                                a = h
                            } else
                                a = this.parseStatement();
                            delete this.context.labelSet[r],
                            e = new o.LabeledStatement(i,a)
                        } else
                            this.consumeSemicolon(),
                            e = new o.ExpressionStatement(n);
                        return this.finalize(t, e)
                    }
                    ,
                    e.prototype.parseThrowStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("throw"),
                        this.hasLineTerminator && this.throwError(s.Messages.NewlineAfterThrow);
                        var t = this.parseExpression();
                        return this.consumeSemicolon(),
                        this.finalize(e, new o.ThrowStatement(t))
                    }
                    ,
                    e.prototype.parseCatchClause = function() {
                        var e = this.createNode();
                        this.expectKeyword("catch"),
                        this.expect("("),
                        this.match(")") && this.throwUnexpectedToken(this.lookahead);
                        for (var t = [], n = this.parsePattern(t), i = {}, r = 0; r < t.length; r++) {
                            var a = "$" + t[r].value;
                            Object.prototype.hasOwnProperty.call(i, a) && this.tolerateError(s.Messages.DuplicateBinding, t[r].value),
                            i[a] = !0
                        }
                        this.context.strict && n.type === u.Syntax.Identifier && this.scanner.isRestrictedWord(n.name) && this.tolerateError(s.Messages.StrictCatchVariable),
                        this.expect(")");
                        var c = this.parseBlock();
                        return this.finalize(e, new o.CatchClause(n,c))
                    }
                    ,
                    e.prototype.parseFinallyClause = function() {
                        return this.expectKeyword("finally"),
                        this.parseBlock()
                    }
                    ,
                    e.prototype.parseTryStatement = function() {
                        var e = this.createNode();
                        this.expectKeyword("try");
                        var t = this.parseBlock()
                          , n = this.matchKeyword("catch") ? this.parseCatchClause() : null
                          , i = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
                        return n || i || this.throwError(s.Messages.NoCatchOrFinally),
                        this.finalize(e, new o.TryStatement(t,n,i))
                    }
                    ,
                    e.prototype.parseDebuggerStatement = function() {
                        var e = this.createNode();
                        return this.expectKeyword("debugger"),
                        this.consumeSemicolon(),
                        this.finalize(e, new o.DebuggerStatement)
                    }
                    ,
                    e.prototype.parseStatement = function() {
                        var e;
                        switch (this.lookahead.type) {
                        case 1:
                        case 5:
                        case 6:
                        case 8:
                        case 10:
                        case 9:
                            e = this.parseExpressionStatement();
                            break;
                        case 7:
                            var t = this.lookahead.value;
                            e = "{" === t ? this.parseBlock() : "(" === t ? this.parseExpressionStatement() : ";" === t ? this.parseEmptyStatement() : this.parseExpressionStatement();
                            break;
                        case 3:
                            e = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
                            break;
                        case 4:
                            switch (this.lookahead.value) {
                            case "break":
                                e = this.parseBreakStatement();
                                break;
                            case "continue":
                                e = this.parseContinueStatement();
                                break;
                            case "debugger":
                                e = this.parseDebuggerStatement();
                                break;
                            case "do":
                                e = this.parseDoWhileStatement();
                                break;
                            case "for":
                                e = this.parseForStatement();
                                break;
                            case "function":
                                e = this.parseFunctionDeclaration();
                                break;
                            case "if":
                                e = this.parseIfStatement();
                                break;
                            case "return":
                                e = this.parseReturnStatement();
                                break;
                            case "switch":
                                e = this.parseSwitchStatement();
                                break;
                            case "throw":
                                e = this.parseThrowStatement();
                                break;
                            case "try":
                                e = this.parseTryStatement();
                                break;
                            case "var":
                                e = this.parseVariableStatement();
                                break;
                            case "while":
                                e = this.parseWhileStatement();
                                break;
                            case "with":
                                e = this.parseWithStatement();
                                break;
                            default:
                                e = this.parseExpressionStatement()
                            }
                            break;
                        default:
                            e = this.throwUnexpectedToken(this.lookahead)
                        }
                        return e
                    }
                    ,
                    e.prototype.parseFunctionSourceElements = function() {
                        var e = this.createNode();
                        this.expect("{");
                        var t = this.parseDirectivePrologues()
                          , n = this.context.labelSet
                          , i = this.context.inIteration
                          , r = this.context.inSwitch
                          , s = this.context.inFunctionBody;
                        for (this.context.labelSet = {},
                        this.context.inIteration = !1,
                        this.context.inSwitch = !1,
                        this.context.inFunctionBody = !0; 2 !== this.lookahead.type && !this.match("}"); )
                            t.push(this.parseStatementListItem());
                        return this.expect("}"),
                        this.context.labelSet = n,
                        this.context.inIteration = i,
                        this.context.inSwitch = r,
                        this.context.inFunctionBody = s,
                        this.finalize(e, new o.BlockStatement(t))
                    }
                    ,
                    e.prototype.validateParam = function(e, t, n) {
                        var i = "$" + n;
                        this.context.strict ? (this.scanner.isRestrictedWord(n) && (e.stricted = t,
                        e.message = s.Messages.StrictParamName),
                        Object.prototype.hasOwnProperty.call(e.paramSet, i) && (e.stricted = t,
                        e.message = s.Messages.StrictParamDupe)) : e.firstRestricted || (this.scanner.isRestrictedWord(n) ? (e.firstRestricted = t,
                        e.message = s.Messages.StrictParamName) : this.scanner.isStrictModeReservedWord(n) ? (e.firstRestricted = t,
                        e.message = s.Messages.StrictReservedWord) : Object.prototype.hasOwnProperty.call(e.paramSet, i) && (e.stricted = t,
                        e.message = s.Messages.StrictParamDupe)),
                        "function" == typeof Object.defineProperty ? Object.defineProperty(e.paramSet, i, {
                            value: !0,
                            enumerable: !0,
                            writable: !0,
                            configurable: !0
                        }) : e.paramSet[i] = !0
                    }
                    ,
                    e.prototype.parseRestElement = function(e) {
                        var t = this.createNode();
                        this.expect("...");
                        var n = this.parsePattern(e);
                        return this.match("=") && this.throwError(s.Messages.DefaultRestParameter),
                        this.match(")") || this.throwError(s.Messages.ParameterAfterRestParameter),
                        this.finalize(t, new o.RestElement(n))
                    }
                    ,
                    e.prototype.parseFormalParameter = function(e) {
                        for (var t = [], n = this.match("...") ? this.parseRestElement(t) : this.parsePatternWithDefault(t), i = 0; i < t.length; i++)
                            this.validateParam(e, t[i], t[i].value);
                        e.simple = e.simple && n instanceof o.Identifier,
                        e.params.push(n)
                    }
                    ,
                    e.prototype.parseFormalParameters = function(e) {
                        var t;
                        if (t = {
                            simple: !0,
                            params: [],
                            firstRestricted: e
                        },
                        this.expect("("),
                        !this.match(")"))
                            for (t.paramSet = {}; 2 !== this.lookahead.type && (this.parseFormalParameter(t),
                            !this.match(")")) && (this.expect(","),
                            !this.match(")")); )
                                ;
                        return this.expect(")"),
                        {
                            simple: t.simple,
                            params: t.params,
                            stricted: t.stricted,
                            firstRestricted: t.firstRestricted,
                            message: t.message
                        }
                    }
                    ,
                    e.prototype.matchAsyncFunction = function() {
                        var e = this.matchContextualKeyword("async");
                        if (e) {
                            var t = this.scanner.saveState();
                            this.scanner.scanComments();
                            var n = this.scanner.lex();
                            this.scanner.restoreState(t),
                            e = t.lineNumber === n.lineNumber && 4 === n.type && "function" === n.value
                        }
                        return e
                    }
                    ,
                    e.prototype.parseFunctionDeclaration = function(e) {
                        var t = this.createNode()
                          , n = this.matchContextualKeyword("async");
                        n && this.nextToken(),
                        this.expectKeyword("function");
                        var i, r = !n && this.match("*");
                        r && this.nextToken();
                        var a = null
                          , u = null;
                        if (!e || !this.match("(")) {
                            var c = this.lookahead;
                            a = this.parseVariableIdentifier(),
                            this.context.strict ? this.scanner.isRestrictedWord(c.value) && this.tolerateUnexpectedToken(c, s.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(c.value) ? (u = c,
                            i = s.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(c.value) && (u = c,
                            i = s.Messages.StrictReservedWord)
                        }
                        var h = this.context.await
                          , l = this.context.allowYield;
                        this.context.await = n,
                        this.context.allowYield = !r;
                        var p = this.parseFormalParameters(u)
                          , f = p.params
                          , d = p.stricted;
                        u = p.firstRestricted,
                        p.message && (i = p.message);
                        var m = this.context.strict
                          , y = this.context.allowStrictDirective;
                        this.context.allowStrictDirective = p.simple;
                        var g = this.parseFunctionSourceElements();
                        return this.context.strict && u && this.throwUnexpectedToken(u, i),
                        this.context.strict && d && this.tolerateUnexpectedToken(d, i),
                        this.context.strict = m,
                        this.context.allowStrictDirective = y,
                        this.context.await = h,
                        this.context.allowYield = l,
                        n ? this.finalize(t, new o.AsyncFunctionDeclaration(a,f,g)) : this.finalize(t, new o.FunctionDeclaration(a,f,g,r))
                    }
                    ,
                    e.prototype.parseFunctionExpression = function() {
                        var e = this.createNode()
                          , t = this.matchContextualKeyword("async");
                        t && this.nextToken(),
                        this.expectKeyword("function");
                        var n, i = !t && this.match("*");
                        i && this.nextToken();
                        var r, a = null, u = this.context.await, c = this.context.allowYield;
                        if (this.context.await = t,
                        this.context.allowYield = !i,
                        !this.match("(")) {
                            var h = this.lookahead;
                            a = this.context.strict || i || !this.matchKeyword("yield") ? this.parseVariableIdentifier() : this.parseIdentifierName(),
                            this.context.strict ? this.scanner.isRestrictedWord(h.value) && this.tolerateUnexpectedToken(h, s.Messages.StrictFunctionName) : this.scanner.isRestrictedWord(h.value) ? (r = h,
                            n = s.Messages.StrictFunctionName) : this.scanner.isStrictModeReservedWord(h.value) && (r = h,
                            n = s.Messages.StrictReservedWord)
                        }
                        var l = this.parseFormalParameters(r)
                          , p = l.params
                          , f = l.stricted;
                        r = l.firstRestricted,
                        l.message && (n = l.message);
                        var d = this.context.strict
                          , m = this.context.allowStrictDirective;
                        this.context.allowStrictDirective = l.simple;
                        var y = this.parseFunctionSourceElements();
                        return this.context.strict && r && this.throwUnexpectedToken(r, n),
                        this.context.strict && f && this.tolerateUnexpectedToken(f, n),
                        this.context.strict = d,
                        this.context.allowStrictDirective = m,
                        this.context.await = u,
                        this.context.allowYield = c,
                        t ? this.finalize(e, new o.AsyncFunctionExpression(a,p,y)) : this.finalize(e, new o.FunctionExpression(a,p,y,i))
                    }
                    ,
                    e.prototype.parseDirective = function() {
                        var e = this.lookahead
                          , t = this.createNode()
                          , n = this.parseExpression()
                          , i = n.type === u.Syntax.Literal ? this.getTokenRaw(e).slice(1, -1) : null;
                        return this.consumeSemicolon(),
                        this.finalize(t, i ? new o.Directive(n,i) : new o.ExpressionStatement(n))
                    }
                    ,
                    e.prototype.parseDirectivePrologues = function() {
                        for (var e = null, t = []; ; ) {
                            var n = this.lookahead;
                            if (8 !== n.type)
                                break;
                            var i = this.parseDirective();
                            t.push(i);
                            var r = i.directive;
                            if ("string" != typeof r)
                                break;
                            "use strict" === r ? (this.context.strict = !0,
                            e && this.tolerateUnexpectedToken(e, s.Messages.StrictOctalLiteral),
                            this.context.allowStrictDirective || this.tolerateUnexpectedToken(n, s.Messages.IllegalLanguageModeDirective)) : !e && n.octal && (e = n)
                        }
                        return t
                    }
                    ,
                    e.prototype.qualifiedPropertyName = function(e) {
                        switch (e.type) {
                        case 3:
                        case 8:
                        case 1:
                        case 5:
                        case 6:
                        case 4:
                            return !0;
                        case 7:
                            return "[" === e.value
                        }
                        return !1
                    }
                    ,
                    e.prototype.parseGetterMethod = function() {
                        var e = this.createNode()
                          , t = this.context.allowYield;
                        this.context.allowYield = !1;
                        var n = this.parseFormalParameters();
                        n.params.length > 0 && this.tolerateError(s.Messages.BadGetterArity);
                        var i = this.parsePropertyMethod(n);
                        return this.context.allowYield = t,
                        this.finalize(e, new o.FunctionExpression(null,n.params,i,!1))
                    }
                    ,
                    e.prototype.parseSetterMethod = function() {
                        var e = this.createNode()
                          , t = this.context.allowYield;
                        this.context.allowYield = !1;
                        var n = this.parseFormalParameters();
                        1 !== n.params.length ? this.tolerateError(s.Messages.BadSetterArity) : n.params[0]instanceof o.RestElement && this.tolerateError(s.Messages.BadSetterRestParameter);
                        var i = this.parsePropertyMethod(n);
                        return this.context.allowYield = t,
                        this.finalize(e, new o.FunctionExpression(null,n.params,i,!1))
                    }
                    ,
                    e.prototype.parseGeneratorMethod = function() {
                        var e = this.createNode()
                          , t = this.context.allowYield;
                        this.context.allowYield = !0;
                        var n = this.parseFormalParameters();
                        this.context.allowYield = !1;
                        var i = this.parsePropertyMethod(n);
                        return this.context.allowYield = t,
                        this.finalize(e, new o.FunctionExpression(null,n.params,i,!0))
                    }
                    ,
                    e.prototype.isStartOfExpression = function() {
                        var e = !0
                          , t = this.lookahead.value;
                        switch (this.lookahead.type) {
                        case 7:
                            e = "[" === t || "(" === t || "{" === t || "+" === t || "-" === t || "!" === t || "~" === t || "++" === t || "--" === t || "/" === t || "/=" === t;
                            break;
                        case 4:
                            e = "class" === t || "delete" === t || "function" === t || "let" === t || "new" === t || "super" === t || "this" === t || "typeof" === t || "void" === t || "yield" === t
                        }
                        return e
                    }
                    ,
                    e.prototype.parseYieldExpression = function() {
                        var e = this.createNode();
                        this.expectKeyword("yield");
                        var t = null
                          , n = !1;
                        if (!this.hasLineTerminator) {
                            var i = this.context.allowYield;
                            this.context.allowYield = !1,
                            (n = this.match("*")) ? (this.nextToken(),
                            t = this.parseAssignmentExpression()) : this.isStartOfExpression() && (t = this.parseAssignmentExpression()),
                            this.context.allowYield = i
                        }
                        return this.finalize(e, new o.YieldExpression(t,n))
                    }
                    ,
                    e.prototype.parseClassElement = function(e) {
                        var t = this.lookahead
                          , n = this.createNode()
                          , i = ""
                          , r = null
                          , a = null
                          , u = !1
                          , c = !1
                          , h = !1
                          , l = !1;
                        if (this.match("*"))
                            this.nextToken();
                        else if (u = this.match("["),
                        "static" === (r = this.parseObjectPropertyKey()).name && (this.qualifiedPropertyName(this.lookahead) || this.match("*")) && (t = this.lookahead,
                        h = !0,
                        u = this.match("["),
                        this.match("*") ? this.nextToken() : r = this.parseObjectPropertyKey()),
                        3 === t.type && !this.hasLineTerminator && "async" === t.value) {
                            var p = this.lookahead.value;
                            ":" !== p && "(" !== p && "*" !== p && (l = !0,
                            t = this.lookahead,
                            r = this.parseObjectPropertyKey(),
                            3 === t.type && ("get" === t.value || "set" === t.value ? this.tolerateUnexpectedToken(t) : "constructor" === t.value && this.tolerateUnexpectedToken(t, s.Messages.ConstructorIsAsync)))
                        }
                        var f = this.qualifiedPropertyName(this.lookahead);
                        return 3 === t.type ? "get" === t.value && f ? (i = "get",
                        u = this.match("["),
                        r = this.parseObjectPropertyKey(),
                        this.context.allowYield = !1,
                        a = this.parseGetterMethod()) : "set" === t.value && f && (i = "set",
                        u = this.match("["),
                        r = this.parseObjectPropertyKey(),
                        a = this.parseSetterMethod()) : 7 === t.type && "*" === t.value && f && (i = "init",
                        u = this.match("["),
                        r = this.parseObjectPropertyKey(),
                        a = this.parseGeneratorMethod(),
                        c = !0),
                        !i && r && this.match("(") && (i = "init",
                        a = l ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction(),
                        c = !0),
                        i || this.throwUnexpectedToken(this.lookahead),
                        "init" === i && (i = "method"),
                        u || (h && this.isPropertyKey(r, "prototype") && this.throwUnexpectedToken(t, s.Messages.StaticPrototype),
                        !h && this.isPropertyKey(r, "constructor") && (("method" !== i || !c || a && a.generator) && this.throwUnexpectedToken(t, s.Messages.ConstructorSpecialMethod),
                        e.value ? this.throwUnexpectedToken(t, s.Messages.DuplicateConstructor) : e.value = !0,
                        i = "constructor")),
                        this.finalize(n, new o.MethodDefinition(r,u,a,i,h))
                    }
                    ,
                    e.prototype.parseClassElementList = function() {
                        var e = []
                          , t = {
                            value: !1
                        };
                        for (this.expect("{"); !this.match("}"); )
                            this.match(";") ? this.nextToken() : e.push(this.parseClassElement(t));
                        return this.expect("}"),
                        e
                    }
                    ,
                    e.prototype.parseClassBody = function() {
                        var e = this.createNode()
                          , t = this.parseClassElementList();
                        return this.finalize(e, new o.ClassBody(t))
                    }
                    ,
                    e.prototype.parseClassDeclaration = function(e) {
                        var t = this.createNode()
                          , n = this.context.strict;
                        this.context.strict = !0,
                        this.expectKeyword("class");
                        var i = e && 3 !== this.lookahead.type ? null : this.parseVariableIdentifier()
                          , r = null;
                        this.matchKeyword("extends") && (this.nextToken(),
                        r = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
                        var s = this.parseClassBody();
                        return this.context.strict = n,
                        this.finalize(t, new o.ClassDeclaration(i,r,s))
                    }
                    ,
                    e.prototype.parseClassExpression = function() {
                        var e = this.createNode()
                          , t = this.context.strict;
                        this.context.strict = !0,
                        this.expectKeyword("class");
                        var n = 3 === this.lookahead.type ? this.parseVariableIdentifier() : null
                          , i = null;
                        this.matchKeyword("extends") && (this.nextToken(),
                        i = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));
                        var r = this.parseClassBody();
                        return this.context.strict = t,
                        this.finalize(e, new o.ClassExpression(n,i,r))
                    }
                    ,
                    e.prototype.parseModule = function() {
                        this.context.strict = !0,
                        this.context.isModule = !0;
                        for (var e = this.createNode(), t = this.parseDirectivePrologues(); 2 !== this.lookahead.type; )
                            t.push(this.parseStatementListItem());
                        return this.finalize(e, new o.Module(t))
                    }
                    ,
                    e.prototype.parseScript = function() {
                        for (var e = this.createNode(), t = this.parseDirectivePrologues(); 2 !== this.lookahead.type; )
                            t.push(this.parseStatementListItem());
                        return this.finalize(e, new o.Script(t))
                    }
                    ,
                    e.prototype.parseModuleSpecifier = function() {
                        var e = this.createNode();
                        8 !== this.lookahead.type && this.throwError(s.Messages.InvalidModuleSpecifier);
                        var t = this.nextToken()
                          , n = this.getTokenRaw(t);
                        return this.finalize(e, new o.Literal(t.value,n))
                    }
                    ,
                    e.prototype.parseImportSpecifier = function() {
                        var e, t, n = this.createNode();
                        return 3 === this.lookahead.type ? (t = e = this.parseVariableIdentifier(),
                        this.matchContextualKeyword("as") && (this.nextToken(),
                        t = this.parseVariableIdentifier())) : (t = e = this.parseIdentifierName(),
                        this.matchContextualKeyword("as") ? (this.nextToken(),
                        t = this.parseVariableIdentifier()) : this.throwUnexpectedToken(this.nextToken())),
                        this.finalize(n, new o.ImportSpecifier(t,e))
                    }
                    ,
                    e.prototype.parseNamedImports = function() {
                        this.expect("{");
                        for (var e = []; !this.match("}"); )
                            e.push(this.parseImportSpecifier()),
                            this.match("}") || this.expect(",");
                        return this.expect("}"),
                        e
                    }
                    ,
                    e.prototype.parseImportDefaultSpecifier = function() {
                        var e = this.createNode()
                          , t = this.parseIdentifierName();
                        return this.finalize(e, new o.ImportDefaultSpecifier(t))
                    }
                    ,
                    e.prototype.parseImportNamespaceSpecifier = function() {
                        var e = this.createNode();
                        this.expect("*"),
                        this.matchContextualKeyword("as") || this.throwError(s.Messages.NoAsAfterImportNamespace),
                        this.nextToken();
                        var t = this.parseIdentifierName();
                        return this.finalize(e, new o.ImportNamespaceSpecifier(t))
                    }
                    ,
                    e.prototype.parseImportDeclaration = function() {
                        this.context.inFunctionBody && this.throwError(s.Messages.IllegalImportDeclaration);
                        var e, t = this.createNode();
                        this.expectKeyword("import");
                        var n = [];
                        if (8 === this.lookahead.type)
                            e = this.parseModuleSpecifier();
                        else {
                            if (this.match("{") ? n = n.concat(this.parseNamedImports()) : this.match("*") ? n.push(this.parseImportNamespaceSpecifier()) : this.isIdentifierName(this.lookahead) && !this.matchKeyword("default") ? (n.push(this.parseImportDefaultSpecifier()),
                            this.match(",") && (this.nextToken(),
                            this.match("*") ? n.push(this.parseImportNamespaceSpecifier()) : this.match("{") ? n = n.concat(this.parseNamedImports()) : this.throwUnexpectedToken(this.lookahead))) : this.throwUnexpectedToken(this.nextToken()),
                            !this.matchContextualKeyword("from")) {
                                var i = this.lookahead.value ? s.Messages.UnexpectedToken : s.Messages.MissingFromClause;
                                this.throwError(i, this.lookahead.value)
                            }
                            this.nextToken(),
                            e = this.parseModuleSpecifier()
                        }
                        return this.consumeSemicolon(),
                        this.finalize(t, new o.ImportDeclaration(n,e))
                    }
                    ,
                    e.prototype.parseExportSpecifier = function() {
                        var e = this.createNode()
                          , t = this.parseIdentifierName()
                          , n = t;
                        return this.matchContextualKeyword("as") && (this.nextToken(),
                        n = this.parseIdentifierName()),
                        this.finalize(e, new o.ExportSpecifier(t,n))
                    }
                    ,
                    e.prototype.parseExportDeclaration = function() {
                        this.context.inFunctionBody && this.throwError(s.Messages.IllegalExportDeclaration);
                        var e, t = this.createNode();
                        if (this.expectKeyword("export"),
                        this.matchKeyword("default"))
                            if (this.nextToken(),
                            this.matchKeyword("function")) {
                                var n = this.parseFunctionDeclaration(!0);
                                e = this.finalize(t, new o.ExportDefaultDeclaration(n))
                            } else if (this.matchKeyword("class")) {
                                n = this.parseClassDeclaration(!0);
                                e = this.finalize(t, new o.ExportDefaultDeclaration(n))
                            } else if (this.matchContextualKeyword("async")) {
                                n = this.matchAsyncFunction() ? this.parseFunctionDeclaration(!0) : this.parseAssignmentExpression();
                                e = this.finalize(t, new o.ExportDefaultDeclaration(n))
                            } else {
                                this.matchContextualKeyword("from") && this.throwError(s.Messages.UnexpectedToken, this.lookahead.value);
                                n = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
                                this.consumeSemicolon(),
                                e = this.finalize(t, new o.ExportDefaultDeclaration(n))
                            }
                        else if (this.match("*")) {
                            if (this.nextToken(),
                            !this.matchContextualKeyword("from")) {
                                var i = this.lookahead.value ? s.Messages.UnexpectedToken : s.Messages.MissingFromClause;
                                this.throwError(i, this.lookahead.value)
                            }
                            this.nextToken();
                            var r = this.parseModuleSpecifier();
                            this.consumeSemicolon(),
                            e = this.finalize(t, new o.ExportAllDeclaration(r))
                        } else if (4 === this.lookahead.type) {
                            n = void 0;
                            switch (this.lookahead.value) {
                            case "let":
                            case "const":
                                n = this.parseLexicalDeclaration({
                                    inFor: !1
                                });
                                break;
                            case "var":
                            case "class":
                            case "function":
                                n = this.parseStatementListItem();
                                break;
                            default:
                                this.throwUnexpectedToken(this.lookahead)
                            }
                            e = this.finalize(t, new o.ExportNamedDeclaration(n,[],null))
                        } else if (this.matchAsyncFunction()) {
                            n = this.parseFunctionDeclaration();
                            e = this.finalize(t, new o.ExportNamedDeclaration(n,[],null))
                        } else {
                            var a = []
                              , u = null
                              , c = !1;
                            for (this.expect("{"); !this.match("}"); )
                                c = c || this.matchKeyword("default"),
                                a.push(this.parseExportSpecifier()),
                                this.match("}") || this.expect(",");
                            if (this.expect("}"),
                            this.matchContextualKeyword("from"))
                                this.nextToken(),
                                u = this.parseModuleSpecifier(),
                                this.consumeSemicolon();
                            else if (c) {
                                i = this.lookahead.value ? s.Messages.UnexpectedToken : s.Messages.MissingFromClause;
                                this.throwError(i, this.lookahead.value)
                            } else
                                this.consumeSemicolon();
                            e = this.finalize(t, new o.ExportNamedDeclaration(null,a,u))
                        }
                        return e
                    }
                    ,
                    e
                }();
                t.Parser = h
            }
            , function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.assert = function(e, t) {
                    if (!e)
                        throw new Error("ASSERT: " + t)
                }
            }
            , function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = function() {
                    function e() {
                        this.errors = [],
                        this.tolerant = !1
                    }
                    return e.prototype.recordError = function(e) {
                        this.errors.push(e)
                    }
                    ,
                    e.prototype.tolerate = function(e) {
                        if (!this.tolerant)
                            throw e;
                        this.recordError(e)
                    }
                    ,
                    e.prototype.constructError = function(e, t) {
                        var n = new Error(e);
                        try {
                            throw n
                        } catch (e) {
                            Object.create && Object.defineProperty && (n = Object.create(e),
                            Object.defineProperty(n, "column", {
                                value: t
                            }))
                        }
                        return n
                    }
                    ,
                    e.prototype.createError = function(e, t, n, i) {
                        var r = "Line " + t + ": " + i
                          , s = this.constructError(r, n);
                        return s.index = e,
                        s.lineNumber = t,
                        s.description = i,
                        s
                    }
                    ,
                    e.prototype.throwError = function(e, t, n, i) {
                        throw this.createError(e, t, n, i)
                    }
                    ,
                    e.prototype.tolerateError = function(e, t, n, i) {
                        var r = this.createError(e, t, n, i);
                        if (!this.tolerant)
                            throw r;
                        this.recordError(r)
                    }
                    ,
                    e
                }();
                t.ErrorHandler = n
            }
            , function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.Messages = {
                    BadGetterArity: "Getter must not have any formal parameters",
                    BadSetterArity: "Setter must have exactly one formal parameter",
                    BadSetterRestParameter: "Setter function argument must not be a rest parameter",
                    ConstructorIsAsync: "Class constructor may not be an async method",
                    ConstructorSpecialMethod: "Class constructor may not be an accessor",
                    DeclarationMissingInitializer: "Missing initializer in %0 declaration",
                    DefaultRestParameter: "Unexpected token =",
                    DuplicateBinding: "Duplicate binding %0",
                    DuplicateConstructor: "A class may only have one constructor",
                    DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
                    ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
                    GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
                    IllegalBreak: "Illegal break statement",
                    IllegalContinue: "Illegal continue statement",
                    IllegalExportDeclaration: "Unexpected token",
                    IllegalImportDeclaration: "Unexpected token",
                    IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
                    IllegalReturn: "Illegal return statement",
                    InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
                    InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
                    InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                    InvalidLHSInForIn: "Invalid left-hand side in for-in",
                    InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                    InvalidModuleSpecifier: "Unexpected token",
                    InvalidRegExp: "Invalid regular expression",
                    LetInLexicalBinding: "let is disallowed as a lexically bound name",
                    MissingFromClause: "Unexpected token",
                    MultipleDefaultsInSwitch: "More than one default clause in switch statement",
                    NewlineAfterThrow: "Illegal newline after throw",
                    NoAsAfterImportNamespace: "Unexpected token",
                    NoCatchOrFinally: "Missing catch or finally after try",
                    ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
                    Redeclaration: "%0 '%1' has already been declared",
                    StaticPrototype: "Classes may not have static property named prototype",
                    StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
                    StrictDelete: "Delete of an unqualified identifier in strict mode.",
                    StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
                    StrictFunctionName: "Function name may not be eval or arguments in strict mode",
                    StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
                    StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                    StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                    StrictModeWith: "Strict mode code may not include a with statement",
                    StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
                    StrictParamDupe: "Strict mode function may not have duplicate parameter names",
                    StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
                    StrictReservedWord: "Use of future reserved word in strict mode",
                    StrictVarName: "Variable name may not be eval or arguments in strict mode",
                    TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
                    UnexpectedEOS: "Unexpected end of input",
                    UnexpectedIdentifier: "Unexpected identifier",
                    UnexpectedNumber: "Unexpected number",
                    UnexpectedReserved: "Unexpected reserved word",
                    UnexpectedString: "Unexpected string",
                    UnexpectedTemplate: "Unexpected quasi %0",
                    UnexpectedToken: "Unexpected token %0",
                    UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
                    UnknownLabel: "Undefined label '%0'",
                    UnterminatedRegExp: "Invalid regular expression: missing /"
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(9)
                  , r = n(4)
                  , s = n(11);
                function o(e) {
                    return "0123456789abcdef".indexOf(e.toLowerCase())
                }
                function a(e) {
                    return "01234567".indexOf(e)
                }
                var u = function() {
                    function e(e, t) {
                        this.source = e,
                        this.errorHandler = t,
                        this.trackComment = !1,
                        this.length = e.length,
                        this.index = 0,
                        this.lineNumber = e.length > 0 ? 1 : 0,
                        this.lineStart = 0,
                        this.curlyStack = []
                    }
                    return e.prototype.saveState = function() {
                        return {
                            index: this.index,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart
                        }
                    }
                    ,
                    e.prototype.restoreState = function(e) {
                        this.index = e.index,
                        this.lineNumber = e.lineNumber,
                        this.lineStart = e.lineStart
                    }
                    ,
                    e.prototype.eof = function() {
                        return this.index >= this.length
                    }
                    ,
                    e.prototype.throwUnexpectedToken = function(e) {
                        return void 0 === e && (e = s.Messages.UnexpectedTokenIllegal),
                        this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, e)
                    }
                    ,
                    e.prototype.tolerateUnexpectedToken = function(e) {
                        void 0 === e && (e = s.Messages.UnexpectedTokenIllegal),
                        this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, e)
                    }
                    ,
                    e.prototype.skipSingleLineComment = function(e) {
                        var t, n, i = [];
                        for (this.trackComment && (i = [],
                        t = this.index - e,
                        n = {
                            start: {
                                line: this.lineNumber,
                                column: this.index - this.lineStart - e
                            },
                            end: {}
                        }); !this.eof(); ) {
                            var s = this.source.charCodeAt(this.index);
                            if (++this.index,
                            r.Character.isLineTerminator(s)) {
                                if (this.trackComment) {
                                    n.end = {
                                        line: this.lineNumber,
                                        column: this.index - this.lineStart - 1
                                    };
                                    var o = {
                                        multiLine: !1,
                                        slice: [t + e, this.index - 1],
                                        range: [t, this.index - 1],
                                        loc: n
                                    };
                                    i.push(o)
                                }
                                return 13 === s && 10 === this.source.charCodeAt(this.index) && ++this.index,
                                ++this.lineNumber,
                                this.lineStart = this.index,
                                i
                            }
                        }
                        if (this.trackComment) {
                            n.end = {
                                line: this.lineNumber,
                                column: this.index - this.lineStart
                            };
                            o = {
                                multiLine: !1,
                                slice: [t + e, this.index],
                                range: [t, this.index],
                                loc: n
                            };
                            i.push(o)
                        }
                        return i
                    }
                    ,
                    e.prototype.skipMultiLineComment = function() {
                        var e, t, n = [];
                        for (this.trackComment && (n = [],
                        e = this.index - 2,
                        t = {
                            start: {
                                line: this.lineNumber,
                                column: this.index - this.lineStart - 2
                            },
                            end: {}
                        }); !this.eof(); ) {
                            var i = this.source.charCodeAt(this.index);
                            if (r.Character.isLineTerminator(i))
                                13 === i && 10 === this.source.charCodeAt(this.index + 1) && ++this.index,
                                ++this.lineNumber,
                                ++this.index,
                                this.lineStart = this.index;
                            else if (42 === i) {
                                if (47 === this.source.charCodeAt(this.index + 1)) {
                                    if (this.index += 2,
                                    this.trackComment) {
                                        t.end = {
                                            line: this.lineNumber,
                                            column: this.index - this.lineStart
                                        };
                                        var s = {
                                            multiLine: !0,
                                            slice: [e + 2, this.index - 2],
                                            range: [e, this.index],
                                            loc: t
                                        };
                                        n.push(s)
                                    }
                                    return n
                                }
                                ++this.index
                            } else
                                ++this.index
                        }
                        if (this.trackComment) {
                            t.end = {
                                line: this.lineNumber,
                                column: this.index - this.lineStart
                            };
                            s = {
                                multiLine: !0,
                                slice: [e + 2, this.index],
                                range: [e, this.index],
                                loc: t
                            };
                            n.push(s)
                        }
                        return this.tolerateUnexpectedToken(),
                        n
                    }
                    ,
                    e.prototype.scanComments = function() {
                        var e;
                        this.trackComment && (e = []);
                        for (var t = 0 === this.index; !this.eof(); ) {
                            var n = this.source.charCodeAt(this.index);
                            if (r.Character.isWhiteSpace(n))
                                ++this.index;
                            else if (r.Character.isLineTerminator(n))
                                ++this.index,
                                13 === n && 10 === this.source.charCodeAt(this.index) && ++this.index,
                                ++this.lineNumber,
                                this.lineStart = this.index,
                                t = !0;
                            else if (47 === n)
                                if (47 === (n = this.source.charCodeAt(this.index + 1))) {
                                    this.index += 2;
                                    var i = this.skipSingleLineComment(2);
                                    this.trackComment && (e = e.concat(i)),
                                    t = !0
                                } else {
                                    if (42 !== n)
                                        break;
                                    this.index += 2;
                                    i = this.skipMultiLineComment();
                                    this.trackComment && (e = e.concat(i))
                                }
                            else if (t && 45 === n) {
                                if (45 !== this.source.charCodeAt(this.index + 1) || 62 !== this.source.charCodeAt(this.index + 2))
                                    break;
                                this.index += 3;
                                i = this.skipSingleLineComment(3);
                                this.trackComment && (e = e.concat(i))
                            } else {
                                if (60 !== n)
                                    break;
                                if ("!--" !== this.source.slice(this.index + 1, this.index + 4))
                                    break;
                                this.index += 4;
                                i = this.skipSingleLineComment(4);
                                this.trackComment && (e = e.concat(i))
                            }
                        }
                        return e
                    }
                    ,
                    e.prototype.isFutureReservedWord = function(e) {
                        switch (e) {
                        case "enum":
                        case "export":
                        case "import":
                        case "super":
                            return !0;
                        default:
                            return !1
                        }
                    }
                    ,
                    e.prototype.isStrictModeReservedWord = function(e) {
                        switch (e) {
                        case "implements":
                        case "interface":
                        case "package":
                        case "private":
                        case "protected":
                        case "public":
                        case "static":
                        case "yield":
                        case "let":
                            return !0;
                        default:
                            return !1
                        }
                    }
                    ,
                    e.prototype.isRestrictedWord = function(e) {
                        return "eval" === e || "arguments" === e
                    }
                    ,
                    e.prototype.isKeyword = function(e) {
                        switch (e.length) {
                        case 2:
                            return "if" === e || "in" === e || "do" === e;
                        case 3:
                            return "var" === e || "for" === e || "new" === e || "try" === e || "let" === e;
                        case 4:
                            return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
                        case 5:
                            return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
                        case 6:
                            return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
                        case 7:
                            return "default" === e || "finally" === e || "extends" === e;
                        case 8:
                            return "function" === e || "continue" === e || "debugger" === e;
                        case 10:
                            return "instanceof" === e;
                        default:
                            return !1
                        }
                    }
                    ,
                    e.prototype.codePointAt = function(e) {
                        var t = this.source.charCodeAt(e);
                        if (t >= 55296 && t <= 56319) {
                            var n = this.source.charCodeAt(e + 1);
                            if (n >= 56320 && n <= 57343)
                                t = 1024 * (t - 55296) + n - 56320 + 65536
                        }
                        return t
                    }
                    ,
                    e.prototype.scanHexEscape = function(e) {
                        for (var t = "u" === e ? 4 : 2, n = 0, i = 0; i < t; ++i) {
                            if (this.eof() || !r.Character.isHexDigit(this.source.charCodeAt(this.index)))
                                return null;
                            n = 16 * n + o(this.source[this.index++])
                        }
                        return String.fromCharCode(n)
                    }
                    ,
                    e.prototype.scanUnicodeCodePointEscape = function() {
                        var e = this.source[this.index]
                          , t = 0;
                        for ("}" === e && this.throwUnexpectedToken(); !this.eof() && (e = this.source[this.index++],
                        r.Character.isHexDigit(e.charCodeAt(0))); )
                            t = 16 * t + o(e);
                        return (t > 1114111 || "}" !== e) && this.throwUnexpectedToken(),
                        r.Character.fromCodePoint(t)
                    }
                    ,
                    e.prototype.getIdentifier = function() {
                        for (var e = this.index++; !this.eof(); ) {
                            var t = this.source.charCodeAt(this.index);
                            if (92 === t)
                                return this.index = e,
                                this.getComplexIdentifier();
                            if (t >= 55296 && t < 57343)
                                return this.index = e,
                                this.getComplexIdentifier();
                            if (!r.Character.isIdentifierPart(t))
                                break;
                            ++this.index
                        }
                        return this.source.slice(e, this.index)
                    }
                    ,
                    e.prototype.getComplexIdentifier = function() {
                        var e, t = this.codePointAt(this.index), n = r.Character.fromCodePoint(t);
                        for (this.index += n.length,
                        92 === t && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(),
                        ++this.index,
                        "{" === this.source[this.index] ? (++this.index,
                        e = this.scanUnicodeCodePointEscape()) : null !== (e = this.scanHexEscape("u")) && "\\" !== e && r.Character.isIdentifierStart(e.charCodeAt(0)) || this.throwUnexpectedToken(),
                        n = e); !this.eof() && (t = this.codePointAt(this.index),
                        r.Character.isIdentifierPart(t)); )
                            n += e = r.Character.fromCodePoint(t),
                            this.index += e.length,
                            92 === t && (n = n.substr(0, n.length - 1),
                            117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(),
                            ++this.index,
                            "{" === this.source[this.index] ? (++this.index,
                            e = this.scanUnicodeCodePointEscape()) : null !== (e = this.scanHexEscape("u")) && "\\" !== e && r.Character.isIdentifierPart(e.charCodeAt(0)) || this.throwUnexpectedToken(),
                            n += e);
                        return n
                    }
                    ,
                    e.prototype.octalToDecimal = function(e) {
                        var t = "0" !== e
                          , n = a(e);
                        return !this.eof() && r.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (t = !0,
                        n = 8 * n + a(this.source[this.index++]),
                        "0123".indexOf(e) >= 0 && !this.eof() && r.Character.isOctalDigit(this.source.charCodeAt(this.index)) && (n = 8 * n + a(this.source[this.index++]))),
                        {
                            code: n,
                            octal: t
                        }
                    }
                    ,
                    e.prototype.scanIdentifier = function() {
                        var e, t = this.index, n = 92 === this.source.charCodeAt(t) ? this.getComplexIdentifier() : this.getIdentifier();
                        if (3 !== (e = 1 === n.length ? 3 : this.isKeyword(n) ? 4 : "null" === n ? 5 : "true" === n || "false" === n ? 1 : 3) && t + n.length !== this.index) {
                            var i = this.index;
                            this.index = t,
                            this.tolerateUnexpectedToken(s.Messages.InvalidEscapedReservedWord),
                            this.index = i
                        }
                        return {
                            type: e,
                            value: n,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: t,
                            end: this.index
                        }
                    }
                    ,
                    e.prototype.scanPunctuator = function() {
                        var e = this.index
                          , t = this.source[this.index];
                        switch (t) {
                        case "(":
                        case "{":
                            "{" === t && this.curlyStack.push("{"),
                            ++this.index;
                            break;
                        case ".":
                            ++this.index,
                            "." === this.source[this.index] && "." === this.source[this.index + 1] && (this.index += 2,
                            t = "...");
                            break;
                        case "}":
                            ++this.index,
                            this.curlyStack.pop();
                            break;
                        case ")":
                        case ";":
                        case ",":
                        case "[":
                        case "]":
                        case ":":
                        case "?":
                        case "~":
                            ++this.index;
                            break;
                        default:
                            ">>>=" === (t = this.source.substr(this.index, 4)) ? this.index += 4 : "===" === (t = t.substr(0, 3)) || "!==" === t || ">>>" === t || "<<=" === t || ">>=" === t || "**=" === t ? this.index += 3 : "&&" === (t = t.substr(0, 2)) || "||" === t || "==" === t || "!=" === t || "+=" === t || "-=" === t || "*=" === t || "/=" === t || "++" === t || "--" === t || "<<" === t || ">>" === t || "&=" === t || "|=" === t || "^=" === t || "%=" === t || "<=" === t || ">=" === t || "=>" === t || "**" === t ? this.index += 2 : (t = this.source[this.index],
                            "<>=!+-*%&|^/".indexOf(t) >= 0 && ++this.index)
                        }
                        return this.index === e && this.throwUnexpectedToken(),
                        {
                            type: 7,
                            value: t,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }
                    ,
                    e.prototype.scanHexLiteral = function(e) {
                        for (var t = ""; !this.eof() && r.Character.isHexDigit(this.source.charCodeAt(this.index)); )
                            t += this.source[this.index++];
                        return 0 === t.length && this.throwUnexpectedToken(),
                        r.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(),
                        {
                            type: 6,
                            value: parseInt("0x" + t, 16),
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }
                    ,
                    e.prototype.scanBinaryLiteral = function(e) {
                        for (var t, n = ""; !this.eof() && ("0" === (t = this.source[this.index]) || "1" === t); )
                            n += this.source[this.index++];
                        return 0 === n.length && this.throwUnexpectedToken(),
                        this.eof() || (t = this.source.charCodeAt(this.index),
                        (r.Character.isIdentifierStart(t) || r.Character.isDecimalDigit(t)) && this.throwUnexpectedToken()),
                        {
                            type: 6,
                            value: parseInt(n, 2),
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }
                    ,
                    e.prototype.scanOctalLiteral = function(e, t) {
                        var n = ""
                          , i = !1;
                        for (r.Character.isOctalDigit(e.charCodeAt(0)) ? (i = !0,
                        n = "0" + this.source[this.index++]) : ++this.index; !this.eof() && r.Character.isOctalDigit(this.source.charCodeAt(this.index)); )
                            n += this.source[this.index++];
                        return i || 0 !== n.length || this.throwUnexpectedToken(),
                        (r.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || r.Character.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(),
                        {
                            type: 6,
                            value: parseInt(n, 8),
                            octal: i,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: t,
                            end: this.index
                        }
                    }
                    ,
                    e.prototype.isImplicitOctalLiteral = function() {
                        for (var e = this.index + 1; e < this.length; ++e) {
                            var t = this.source[e];
                            if ("8" === t || "9" === t)
                                return !1;
                            if (!r.Character.isOctalDigit(t.charCodeAt(0)))
                                return !0
                        }
                        return !0
                    }
                    ,
                    e.prototype.scanNumericLiteral = function() {
                        var e = this.index
                          , t = this.source[e];
                        i.assert(r.Character.isDecimalDigit(t.charCodeAt(0)) || "." === t, "Numeric literal must start with a decimal digit or a decimal point");
                        var n = "";
                        if ("." !== t) {
                            if (n = this.source[this.index++],
                            t = this.source[this.index],
                            "0" === n) {
                                if ("x" === t || "X" === t)
                                    return ++this.index,
                                    this.scanHexLiteral(e);
                                if ("b" === t || "B" === t)
                                    return ++this.index,
                                    this.scanBinaryLiteral(e);
                                if ("o" === t || "O" === t)
                                    return this.scanOctalLiteral(t, e);
                                if (t && r.Character.isOctalDigit(t.charCodeAt(0)) && this.isImplicitOctalLiteral())
                                    return this.scanOctalLiteral(t, e)
                            }
                            for (; r.Character.isDecimalDigit(this.source.charCodeAt(this.index)); )
                                n += this.source[this.index++];
                            t = this.source[this.index]
                        }
                        if ("." === t) {
                            for (n += this.source[this.index++]; r.Character.isDecimalDigit(this.source.charCodeAt(this.index)); )
                                n += this.source[this.index++];
                            t = this.source[this.index]
                        }
                        if ("e" === t || "E" === t)
                            if (n += this.source[this.index++],
                            "+" !== (t = this.source[this.index]) && "-" !== t || (n += this.source[this.index++]),
                            r.Character.isDecimalDigit(this.source.charCodeAt(this.index)))
                                for (; r.Character.isDecimalDigit(this.source.charCodeAt(this.index)); )
                                    n += this.source[this.index++];
                            else
                                this.throwUnexpectedToken();
                        return r.Character.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(),
                        {
                            type: 6,
                            value: parseFloat(n),
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }
                    ,
                    e.prototype.scanStringLiteral = function() {
                        var e = this.index
                          , t = this.source[e];
                        i.assert("'" === t || '"' === t, "String literal must starts with a quote"),
                        ++this.index;
                        for (var n = !1, o = ""; !this.eof(); ) {
                            var a = this.source[this.index++];
                            if (a === t) {
                                t = "";
                                break
                            }
                            if ("\\" === a)
                                if ((a = this.source[this.index++]) && r.Character.isLineTerminator(a.charCodeAt(0)))
                                    ++this.lineNumber,
                                    "\r" === a && "\n" === this.source[this.index] && ++this.index,
                                    this.lineStart = this.index;
                                else
                                    switch (a) {
                                    case "u":
                                        if ("{" === this.source[this.index])
                                            ++this.index,
                                            o += this.scanUnicodeCodePointEscape();
                                        else {
                                            var u = this.scanHexEscape(a);
                                            null === u && this.throwUnexpectedToken(),
                                            o += u
                                        }
                                        break;
                                    case "x":
                                        var c = this.scanHexEscape(a);
                                        null === c && this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence),
                                        o += c;
                                        break;
                                    case "n":
                                        o += "\n";
                                        break;
                                    case "r":
                                        o += "\r";
                                        break;
                                    case "t":
                                        o += "\t";
                                        break;
                                    case "b":
                                        o += "\b";
                                        break;
                                    case "f":
                                        o += "\f";
                                        break;
                                    case "v":
                                        o += "\v";
                                        break;
                                    case "8":
                                    case "9":
                                        o += a,
                                        this.tolerateUnexpectedToken();
                                        break;
                                    default:
                                        if (a && r.Character.isOctalDigit(a.charCodeAt(0))) {
                                            var h = this.octalToDecimal(a);
                                            n = h.octal || n,
                                            o += String.fromCharCode(h.code)
                                        } else
                                            o += a
                                    }
                            else {
                                if (r.Character.isLineTerminator(a.charCodeAt(0)))
                                    break;
                                o += a
                            }
                        }
                        return "" !== t && (this.index = e,
                        this.throwUnexpectedToken()),
                        {
                            type: 8,
                            value: o,
                            octal: n,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }
                    ,
                    e.prototype.scanTemplate = function() {
                        var e = ""
                          , t = !1
                          , n = this.index
                          , i = "`" === this.source[n]
                          , o = !1
                          , a = 2;
                        for (++this.index; !this.eof(); ) {
                            var u = this.source[this.index++];
                            if ("`" === u) {
                                a = 1,
                                o = !0,
                                t = !0;
                                break
                            }
                            if ("$" === u) {
                                if ("{" === this.source[this.index]) {
                                    this.curlyStack.push("${"),
                                    ++this.index,
                                    t = !0;
                                    break
                                }
                                e += u
                            } else if ("\\" === u)
                                if (u = this.source[this.index++],
                                r.Character.isLineTerminator(u.charCodeAt(0)))
                                    ++this.lineNumber,
                                    "\r" === u && "\n" === this.source[this.index] && ++this.index,
                                    this.lineStart = this.index;
                                else
                                    switch (u) {
                                    case "n":
                                        e += "\n";
                                        break;
                                    case "r":
                                        e += "\r";
                                        break;
                                    case "t":
                                        e += "\t";
                                        break;
                                    case "u":
                                        if ("{" === this.source[this.index])
                                            ++this.index,
                                            e += this.scanUnicodeCodePointEscape();
                                        else {
                                            var c = this.index
                                              , h = this.scanHexEscape(u);
                                            null !== h ? e += h : (this.index = c,
                                            e += u)
                                        }
                                        break;
                                    case "x":
                                        var l = this.scanHexEscape(u);
                                        null === l && this.throwUnexpectedToken(s.Messages.InvalidHexEscapeSequence),
                                        e += l;
                                        break;
                                    case "b":
                                        e += "\b";
                                        break;
                                    case "f":
                                        e += "\f";
                                        break;
                                    case "v":
                                        e += "\v";
                                        break;
                                    default:
                                        "0" === u ? (r.Character.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral),
                                        e += "\0") : r.Character.isOctalDigit(u.charCodeAt(0)) ? this.throwUnexpectedToken(s.Messages.TemplateOctalLiteral) : e += u
                                    }
                            else
                                r.Character.isLineTerminator(u.charCodeAt(0)) ? (++this.lineNumber,
                                "\r" === u && "\n" === this.source[this.index] && ++this.index,
                                this.lineStart = this.index,
                                e += "\n") : e += u
                        }
                        return t || this.throwUnexpectedToken(),
                        i || this.curlyStack.pop(),
                        {
                            type: 10,
                            value: this.source.slice(n + 1, this.index - a),
                            cooked: e,
                            head: i,
                            tail: o,
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: n,
                            end: this.index
                        }
                    }
                    ,
                    e.prototype.testRegExp = function(e, t) {
                        var n = e
                          , i = this;
                        t.indexOf("u") >= 0 && (n = n.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function(e, t, n) {
                            var r = parseInt(t || n, 16);
                            return r > 1114111 && i.throwUnexpectedToken(s.Messages.InvalidRegExp),
                            r <= 65535 ? String.fromCharCode(r) : "￿"
                        }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "￿"));
                        try {
                            RegExp(n)
                        } catch (e) {
                            this.throwUnexpectedToken(s.Messages.InvalidRegExp)
                        }
                        try {
                            return new RegExp(e,t)
                        } catch (e) {
                            return null
                        }
                    }
                    ,
                    e.prototype.scanRegExpBody = function() {
                        var e = this.source[this.index];
                        i.assert("/" === e, "Regular expression literal must start with a slash");
                        for (var t = this.source[this.index++], n = !1, o = !1; !this.eof(); )
                            if (t += e = this.source[this.index++],
                            "\\" === e)
                                e = this.source[this.index++],
                                r.Character.isLineTerminator(e.charCodeAt(0)) && this.throwUnexpectedToken(s.Messages.UnterminatedRegExp),
                                t += e;
                            else if (r.Character.isLineTerminator(e.charCodeAt(0)))
                                this.throwUnexpectedToken(s.Messages.UnterminatedRegExp);
                            else if (n)
                                "]" === e && (n = !1);
                            else {
                                if ("/" === e) {
                                    o = !0;
                                    break
                                }
                                "[" === e && (n = !0)
                            }
                        return o || this.throwUnexpectedToken(s.Messages.UnterminatedRegExp),
                        t.substr(1, t.length - 2)
                    }
                    ,
                    e.prototype.scanRegExpFlags = function() {
                        for (var e = ""; !this.eof(); ) {
                            var t = this.source[this.index];
                            if (!r.Character.isIdentifierPart(t.charCodeAt(0)))
                                break;
                            if (++this.index,
                            "\\" !== t || this.eof())
                                e += t,
                                t;
                            else if ("u" === (t = this.source[this.index])) {
                                ++this.index;
                                var n = this.index
                                  , i = this.scanHexEscape("u");
                                if (null !== i)
                                    for (e += i,
                                    "\\u"; n < this.index; ++n)
                                        this.source[n];
                                else
                                    this.index = n,
                                    e += "u",
                                    "\\u";
                                this.tolerateUnexpectedToken()
                            } else
                                "\\",
                                this.tolerateUnexpectedToken()
                        }
                        return e
                    }
                    ,
                    e.prototype.scanRegExp = function() {
                        var e = this.index
                          , t = this.scanRegExpBody()
                          , n = this.scanRegExpFlags();
                        return {
                            type: 9,
                            value: "",
                            pattern: t,
                            flags: n,
                            regex: this.testRegExp(t, n),
                            lineNumber: this.lineNumber,
                            lineStart: this.lineStart,
                            start: e,
                            end: this.index
                        }
                    }
                    ,
                    e.prototype.lex = function() {
                        if (this.eof())
                            return {
                                type: 2,
                                value: "",
                                lineNumber: this.lineNumber,
                                lineStart: this.lineStart,
                                start: this.index,
                                end: this.index
                            };
                        var e = this.source.charCodeAt(this.index);
                        return r.Character.isIdentifierStart(e) ? this.scanIdentifier() : 40 === e || 41 === e || 59 === e ? this.scanPunctuator() : 39 === e || 34 === e ? this.scanStringLiteral() : 46 === e ? r.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : r.Character.isDecimalDigit(e) ? this.scanNumericLiteral() : 96 === e || 125 === e && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e >= 55296 && e < 57343 && r.Character.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator()
                    }
                    ,
                    e
                }();
                t.Scanner = u
            }
            , function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.TokenName = {},
                t.TokenName[1] = "Boolean",
                t.TokenName[2] = "<end>",
                t.TokenName[3] = "Identifier",
                t.TokenName[4] = "Keyword",
                t.TokenName[5] = "Null",
                t.TokenName[6] = "Numeric",
                t.TokenName[7] = "Punctuator",
                t.TokenName[8] = "String",
                t.TokenName[9] = "RegularExpression",
                t.TokenName[10] = "Template"
            }
            , function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.XHTMLEntities = {
                    quot: '"',
                    amp: "&",
                    apos: "'",
                    gt: ">",
                    nbsp: " ",
                    iexcl: "¡",
                    cent: "¢",
                    pound: "£",
                    curren: "¤",
                    yen: "¥",
                    brvbar: "¦",
                    sect: "§",
                    uml: "¨",
                    copy: "©",
                    ordf: "ª",
                    laquo: "«",
                    not: "¬",
                    shy: "­",
                    reg: "®",
                    macr: "¯",
                    deg: "°",
                    plusmn: "±",
                    sup2: "²",
                    sup3: "³",
                    acute: "´",
                    micro: "µ",
                    para: "¶",
                    middot: "·",
                    cedil: "¸",
                    sup1: "¹",
                    ordm: "º",
                    raquo: "»",
                    frac14: "¼",
                    frac12: "½",
                    frac34: "¾",
                    iquest: "¿",
                    Agrave: "À",
                    Aacute: "Á",
                    Acirc: "Â",
                    Atilde: "Ã",
                    Auml: "Ä",
                    Aring: "Å",
                    AElig: "Æ",
                    Ccedil: "Ç",
                    Egrave: "È",
                    Eacute: "É",
                    Ecirc: "Ê",
                    Euml: "Ë",
                    Igrave: "Ì",
                    Iacute: "Í",
                    Icirc: "Î",
                    Iuml: "Ï",
                    ETH: "Ð",
                    Ntilde: "Ñ",
                    Ograve: "Ò",
                    Oacute: "Ó",
                    Ocirc: "Ô",
                    Otilde: "Õ",
                    Ouml: "Ö",
                    times: "×",
                    Oslash: "Ø",
                    Ugrave: "Ù",
                    Uacute: "Ú",
                    Ucirc: "Û",
                    Uuml: "Ü",
                    Yacute: "Ý",
                    THORN: "Þ",
                    szlig: "ß",
                    agrave: "à",
                    aacute: "á",
                    acirc: "â",
                    atilde: "ã",
                    auml: "ä",
                    aring: "å",
                    aelig: "æ",
                    ccedil: "ç",
                    egrave: "è",
                    eacute: "é",
                    ecirc: "ê",
                    euml: "ë",
                    igrave: "ì",
                    iacute: "í",
                    icirc: "î",
                    iuml: "ï",
                    eth: "ð",
                    ntilde: "ñ",
                    ograve: "ò",
                    oacute: "ó",
                    ocirc: "ô",
                    otilde: "õ",
                    ouml: "ö",
                    divide: "÷",
                    oslash: "ø",
                    ugrave: "ù",
                    uacute: "ú",
                    ucirc: "û",
                    uuml: "ü",
                    yacute: "ý",
                    thorn: "þ",
                    yuml: "ÿ",
                    OElig: "Œ",
                    oelig: "œ",
                    Scaron: "Š",
                    scaron: "š",
                    Yuml: "Ÿ",
                    fnof: "ƒ",
                    circ: "ˆ",
                    tilde: "˜",
                    Alpha: "Α",
                    Beta: "Β",
                    Gamma: "Γ",
                    Delta: "Δ",
                    Epsilon: "Ε",
                    Zeta: "Ζ",
                    Eta: "Η",
                    Theta: "Θ",
                    Iota: "Ι",
                    Kappa: "Κ",
                    Lambda: "Λ",
                    Mu: "Μ",
                    Nu: "Ν",
                    Xi: "Ξ",
                    Omicron: "Ο",
                    Pi: "Π",
                    Rho: "Ρ",
                    Sigma: "Σ",
                    Tau: "Τ",
                    Upsilon: "Υ",
                    Phi: "Φ",
                    Chi: "Χ",
                    Psi: "Ψ",
                    Omega: "Ω",
                    alpha: "α",
                    beta: "β",
                    gamma: "γ",
                    delta: "δ",
                    epsilon: "ε",
                    zeta: "ζ",
                    eta: "η",
                    theta: "θ",
                    iota: "ι",
                    kappa: "κ",
                    lambda: "λ",
                    mu: "μ",
                    nu: "ν",
                    xi: "ξ",
                    omicron: "ο",
                    pi: "π",
                    rho: "ρ",
                    sigmaf: "ς",
                    sigma: "σ",
                    tau: "τ",
                    upsilon: "υ",
                    phi: "φ",
                    chi: "χ",
                    psi: "ψ",
                    omega: "ω",
                    thetasym: "ϑ",
                    upsih: "ϒ",
                    piv: "ϖ",
                    ensp: " ",
                    emsp: " ",
                    thinsp: " ",
                    zwnj: "‌",
                    zwj: "‍",
                    lrm: "‎",
                    rlm: "‏",
                    ndash: "–",
                    mdash: "—",
                    lsquo: "‘",
                    rsquo: "’",
                    sbquo: "‚",
                    ldquo: "“",
                    rdquo: "”",
                    bdquo: "„",
                    dagger: "†",
                    Dagger: "‡",
                    bull: "•",
                    hellip: "…",
                    permil: "‰",
                    prime: "′",
                    Prime: "″",
                    lsaquo: "‹",
                    rsaquo: "›",
                    oline: "‾",
                    frasl: "⁄",
                    euro: "€",
                    image: "ℑ",
                    weierp: "℘",
                    real: "ℜ",
                    trade: "™",
                    alefsym: "ℵ",
                    larr: "←",
                    uarr: "↑",
                    rarr: "→",
                    darr: "↓",
                    harr: "↔",
                    crarr: "↵",
                    lArr: "⇐",
                    uArr: "⇑",
                    rArr: "⇒",
                    dArr: "⇓",
                    hArr: "⇔",
                    forall: "∀",
                    part: "∂",
                    exist: "∃",
                    empty: "∅",
                    nabla: "∇",
                    isin: "∈",
                    notin: "∉",
                    ni: "∋",
                    prod: "∏",
                    sum: "∑",
                    minus: "−",
                    lowast: "∗",
                    radic: "√",
                    prop: "∝",
                    infin: "∞",
                    ang: "∠",
                    and: "∧",
                    or: "∨",
                    cap: "∩",
                    cup: "∪",
                    int: "∫",
                    there4: "∴",
                    sim: "∼",
                    cong: "≅",
                    asymp: "≈",
                    ne: "≠",
                    equiv: "≡",
                    le: "≤",
                    ge: "≥",
                    sub: "⊂",
                    sup: "⊃",
                    nsub: "⊄",
                    sube: "⊆",
                    supe: "⊇",
                    oplus: "⊕",
                    otimes: "⊗",
                    perp: "⊥",
                    sdot: "⋅",
                    lceil: "⌈",
                    rceil: "⌉",
                    lfloor: "⌊",
                    rfloor: "⌋",
                    loz: "◊",
                    spades: "♠",
                    clubs: "♣",
                    hearts: "♥",
                    diams: "♦",
                    lang: "⟨",
                    rang: "⟩"
                }
            }
            , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(10)
                  , r = n(12)
                  , s = n(13)
                  , o = function() {
                    function e() {
                        this.values = [],
                        this.curly = this.paren = -1
                    }
                    return e.prototype.beforeFunctionExpression = function(e) {
                        return ["(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "**=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "**", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!=="].indexOf(e) >= 0
                    }
                    ,
                    e.prototype.isRegexStart = function() {
                        var e = this.values[this.values.length - 1]
                          , t = null !== e;
                        switch (e) {
                        case "this":
                        case "]":
                            t = !1;
                            break;
                        case ")":
                            var n = this.values[this.paren - 1];
                            t = "if" === n || "while" === n || "for" === n || "with" === n;
                            break;
                        case "}":
                            if (t = !1,
                            "function" === this.values[this.curly - 3])
                                t = !!(i = this.values[this.curly - 4]) && !this.beforeFunctionExpression(i);
                            else if ("function" === this.values[this.curly - 4]) {
                                var i;
                                t = !(i = this.values[this.curly - 5]) || !this.beforeFunctionExpression(i)
                            }
                        }
                        return t
                    }
                    ,
                    e.prototype.push = function(e) {
                        7 === e.type || 4 === e.type ? ("{" === e.value ? this.curly = this.values.length : "(" === e.value && (this.paren = this.values.length),
                        this.values.push(e.value)) : this.values.push(null)
                    }
                    ,
                    e
                }()
                  , a = function() {
                    function e(e, t) {
                        this.errorHandler = new i.ErrorHandler,
                        this.errorHandler.tolerant = !!t && ("boolean" == typeof t.tolerant && t.tolerant),
                        this.scanner = new r.Scanner(e,this.errorHandler),
                        this.scanner.trackComment = !!t && ("boolean" == typeof t.comment && t.comment),
                        this.trackRange = !!t && ("boolean" == typeof t.range && t.range),
                        this.trackLoc = !!t && ("boolean" == typeof t.loc && t.loc),
                        this.buffer = [],
                        this.reader = new o
                    }
                    return e.prototype.errors = function() {
                        return this.errorHandler.errors
                    }
                    ,
                    e.prototype.getNextToken = function() {
                        if (0 === this.buffer.length) {
                            var e = this.scanner.scanComments();
                            if (this.scanner.trackComment)
                                for (var t = 0; t < e.length; ++t) {
                                    var n = e[t]
                                      , i = this.scanner.source.slice(n.slice[0], n.slice[1])
                                      , r = {
                                        type: n.multiLine ? "BlockComment" : "LineComment",
                                        value: i
                                    };
                                    this.trackRange && (r.range = n.range),
                                    this.trackLoc && (r.loc = n.loc),
                                    this.buffer.push(r)
                                }
                            if (!this.scanner.eof()) {
                                var o = void 0;
                                this.trackLoc && (o = {
                                    start: {
                                        line: this.scanner.lineNumber,
                                        column: this.scanner.index - this.scanner.lineStart
                                    },
                                    end: {}
                                });
                                var a = "/" === this.scanner.source[this.scanner.index] && this.reader.isRegexStart() ? this.scanner.scanRegExp() : this.scanner.lex();
                                this.reader.push(a);
                                var u = {
                                    type: s.TokenName[a.type],
                                    value: this.scanner.source.slice(a.start, a.end)
                                };
                                if (this.trackRange && (u.range = [a.start, a.end]),
                                this.trackLoc && (o.end = {
                                    line: this.scanner.lineNumber,
                                    column: this.scanner.index - this.scanner.lineStart
                                },
                                u.loc = o),
                                9 === a.type) {
                                    var c = a.pattern
                                      , h = a.flags;
                                    u.regex = {
                                        pattern: c,
                                        flags: h
                                    }
                                }
                                this.buffer.push(u)
                            }
                        }
                        return this.buffer.shift()
                    }
                    ,
                    e
                }();
                t.Tokenizer = a
            }
            ])
        }
        ,
        e.exports = i()
    },
    "./node_modules/ieee754/index.js": /*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
    /*! no static exports found */
    function(e, t) {
        t.read = function(e, t, n, i, r) {
            var s, o, a = 8 * r - i - 1, u = (1 << a) - 1, c = u >> 1, h = -7, l = n ? r - 1 : 0, p = n ? -1 : 1, f = e[t + l];
            for (l += p,
            s = f & (1 << -h) - 1,
            f >>= -h,
            h += a; h > 0; s = 256 * s + e[t + l],
            l += p,
            h -= 8)
                ;
            for (o = s & (1 << -h) - 1,
            s >>= -h,
            h += i; h > 0; o = 256 * o + e[t + l],
            l += p,
            h -= 8)
                ;
            if (0 === s)
                s = 1 - c;
            else {
                if (s === u)
                    return o ? NaN : 1 / 0 * (f ? -1 : 1);
                o += Math.pow(2, i),
                s -= c
            }
            return (f ? -1 : 1) * o * Math.pow(2, s - i)
        }
        ,
        t.write = function(e, t, n, i, r, s) {
            var o, a, u, c = 8 * s - r - 1, h = (1 << c) - 1, l = h >> 1, p = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = i ? 0 : s - 1, d = i ? 1 : -1, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t),
            isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
            o = h) : (o = Math.floor(Math.log(t) / Math.LN2),
            t * (u = Math.pow(2, -o)) < 1 && (o--,
            u *= 2),
            (t += o + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >= 2 && (o++,
            u /= 2),
            o + l >= h ? (a = 0,
            o = h) : o + l >= 1 ? (a = (t * u - 1) * Math.pow(2, r),
            o += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, r),
            o = 0)); r >= 8; e[n + f] = 255 & a,
            f += d,
            a /= 256,
            r -= 8)
                ;
            for (o = o << r | a,
            c += r; c > 0; e[n + f] = 255 & o,
            f += d,
            o /= 256,
            c -= 8)
                ;
            e[n + f - d] |= 128 * m
        }
    },
    "./node_modules/isarray/index.js": /*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
    /*! no static exports found */
    function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    },
    "./node_modules/js-yaml/index.js": /*!***************************************!*\
  !*** ./node_modules/js-yaml/index.js ***!
  \***************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ./lib/js-yaml.js */
        "./node_modules/js-yaml/lib/js-yaml.js");
        e.exports = i
    },
    "./node_modules/js-yaml/lib/js-yaml.js": /*!*********************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml.js ***!
  \*********************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ./js-yaml/loader */
        "./node_modules/js-yaml/lib/js-yaml/loader.js")
          , r = n(/*! ./js-yaml/dumper */
        "./node_modules/js-yaml/lib/js-yaml/dumper.js");
        function s(e) {
            return function() {
                throw new Error("Function " + e + " is deprecated and cannot be used.")
            }
        }
        e.exports.Type = n(/*! ./js-yaml/type */
        "./node_modules/js-yaml/lib/js-yaml/type.js"),
        e.exports.Schema = n(/*! ./js-yaml/schema */
        "./node_modules/js-yaml/lib/js-yaml/schema.js"),
        e.exports.FAILSAFE_SCHEMA = n(/*! ./js-yaml/schema/failsafe */
        "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js"),
        e.exports.JSON_SCHEMA = n(/*! ./js-yaml/schema/json */
        "./node_modules/js-yaml/lib/js-yaml/schema/json.js"),
        e.exports.CORE_SCHEMA = n(/*! ./js-yaml/schema/core */
        "./node_modules/js-yaml/lib/js-yaml/schema/core.js"),
        e.exports.DEFAULT_SAFE_SCHEMA = n(/*! ./js-yaml/schema/default_safe */
        "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js"),
        e.exports.DEFAULT_FULL_SCHEMA = n(/*! ./js-yaml/schema/default_full */
        "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js"),
        e.exports.load = i.load,
        e.exports.loadAll = i.loadAll,
        e.exports.safeLoad = i.safeLoad,
        e.exports.safeLoadAll = i.safeLoadAll,
        e.exports.dump = r.dump,
        e.exports.safeDump = r.safeDump,
        e.exports.YAMLException = n(/*! ./js-yaml/exception */
        "./node_modules/js-yaml/lib/js-yaml/exception.js"),
        e.exports.MINIMAL_SCHEMA = n(/*! ./js-yaml/schema/failsafe */
        "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js"),
        e.exports.SAFE_SCHEMA = n(/*! ./js-yaml/schema/default_safe */
        "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js"),
        e.exports.DEFAULT_SCHEMA = n(/*! ./js-yaml/schema/default_full */
        "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js"),
        e.exports.scan = s("scan"),
        e.exports.parse = s("parse"),
        e.exports.compose = s("compose"),
        e.exports.addConstructor = s("addConstructor")
    },
    "./node_modules/js-yaml/lib/js-yaml/common.js": /*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/common.js ***!
  \****************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        function i(e) {
            return void 0 === e || null === e
        }
        e.exports.isNothing = i,
        e.exports.isObject = function(e) {
            return "object" == typeof e && null !== e
        }
        ,
        e.exports.toArray = function(e) {
            return Array.isArray(e) ? e : i(e) ? [] : [e]
        }
        ,
        e.exports.repeat = function(e, t) {
            var n, i = "";
            for (n = 0; n < t; n += 1)
                i += e;
            return i
        }
        ,
        e.exports.isNegativeZero = function(e) {
            return 0 === e && Number.NEGATIVE_INFINITY === 1 / e
        }
        ,
        e.exports.extend = function(e, t) {
            var n, i, r, s;
            if (t)
                for (n = 0,
                i = (s = Object.keys(t)).length; n < i; n += 1)
                    e[r = s[n]] = t[r];
            return e
        }
    },
    "./node_modules/js-yaml/lib/js-yaml/dumper.js": /*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/dumper.js ***!
  \****************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ./common */
        "./node_modules/js-yaml/lib/js-yaml/common.js")
          , r = n(/*! ./exception */
        "./node_modules/js-yaml/lib/js-yaml/exception.js")
          , s = n(/*! ./schema/default_full */
        "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js")
          , o = n(/*! ./schema/default_safe */
        "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js")
          , a = Object.prototype.toString
          , u = Object.prototype.hasOwnProperty
          , c = 9
          , h = 10
          , l = 32
          , p = 33
          , f = 34
          , d = 35
          , m = 37
          , y = 38
          , g = 39
          , x = 42
          , v = 44
          , D = 45
          , E = 58
          , A = 62
          , w = 63
          , b = 64
          , C = 91
          , S = 93
          , _ = 96
          , F = 123
          , k = 124
          , B = 125
          , T = {
            0: "\\0",
            7: "\\a",
            8: "\\b",
            9: "\\t",
            10: "\\n",
            11: "\\v",
            12: "\\f",
            13: "\\r",
            27: "\\e",
            34: '\\"',
            92: "\\\\",
            133: "\\N",
            160: "\\_",
            8232: "\\L",
            8233: "\\P"
        }
          , j = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];
        function I(e) {
            var t, n, s;
            if (t = e.toString(16).toUpperCase(),
            e <= 255)
                n = "x",
                s = 2;
            else if (e <= 65535)
                n = "u",
                s = 4;
            else {
                if (!(e <= 4294967295))
                    throw new r("code point within a string may not be greater than 0xFFFFFFFF");
                n = "U",
                s = 8
            }
            return "\\" + n + i.repeat("0", s - t.length) + t
        }
        function M(e) {
            this.schema = e.schema || s,
            this.indent = Math.max(1, e.indent || 2),
            this.skipInvalid = e.skipInvalid || !1,
            this.flowLevel = i.isNothing(e.flowLevel) ? -1 : e.flowLevel,
            this.styleMap = function(e, t) {
                var n, i, r, s, o, a, c;
                if (null === t)
                    return {};
                for (n = {},
                r = 0,
                s = (i = Object.keys(t)).length; r < s; r += 1)
                    o = i[r],
                    a = String(t[o]),
                    "!!" === o.slice(0, 2) && (o = "tag:yaml.org,2002:" + o.slice(2)),
                    (c = e.compiledTypeMap.fallback[o]) && u.call(c.styleAliases, a) && (a = c.styleAliases[a]),
                    n[o] = a;
                return n
            }(this.schema, e.styles || null),
            this.sortKeys = e.sortKeys || !1,
            this.lineWidth = e.lineWidth || 80,
            this.noRefs = e.noRefs || !1,
            this.noCompatMode = e.noCompatMode || !1,
            this.condenseFlow = e.condenseFlow || !1,
            this.implicitTypes = this.schema.compiledImplicit,
            this.explicitTypes = this.schema.compiledExplicit,
            this.tag = null,
            this.result = "",
            this.duplicates = [],
            this.usedDuplicates = null
        }
        function N(e, t) {
            for (var n, r = i.repeat(" ", t), s = 0, o = -1, a = "", u = e.length; s < u; )
                -1 === (o = e.indexOf("\n", s)) ? (n = e.slice(s),
                s = u) : (n = e.slice(s, o + 1),
                s = o + 1),
                n.length && "\n" !== n && (a += r),
                a += n;
            return a
        }
        function P(e, t) {
            return "\n" + i.repeat(" ", e.indent * t)
        }
        function O(e) {
            return e === l || e === c
        }
        function L(e) {
            return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && 8232 !== e && 8233 !== e || 57344 <= e && e <= 65533 && 65279 !== e || 65536 <= e && e <= 1114111
        }
        function U(e) {
            return L(e) && 65279 !== e && e !== v && e !== C && e !== S && e !== F && e !== B && e !== E && e !== d
        }
        var R = 1
          , z = 2
          , J = 3
          , X = 4
          , G = 5;
        function K(e, t, n, i, r) {
            var s, o, a, u = !1, c = !1, l = -1 !== i, T = -1, j = L(a = e.charCodeAt(0)) && 65279 !== a && !O(a) && a !== D && a !== w && a !== E && a !== v && a !== C && a !== S && a !== F && a !== B && a !== d && a !== y && a !== x && a !== p && a !== k && a !== A && a !== g && a !== f && a !== m && a !== b && a !== _ && !O(e.charCodeAt(e.length - 1));
            if (t)
                for (s = 0; s < e.length; s++) {
                    if (!L(o = e.charCodeAt(s)))
                        return G;
                    j = j && U(o)
                }
            else {
                for (s = 0; s < e.length; s++) {
                    if ((o = e.charCodeAt(s)) === h)
                        u = !0,
                        l && (c = c || s - T - 1 > i && " " !== e[T + 1],
                        T = s);
                    else if (!L(o))
                        return G;
                    j = j && U(o)
                }
                c = c || l && s - T - 1 > i && " " !== e[T + 1]
            }
            return u || c ? " " === e[0] && n > 9 ? G : c ? X : J : j && !r(e) ? R : z
        }
        function Y(e, t, n, i) {
            e.dump = function() {
                if (0 === t.length)
                    return "''";
                if (!e.noCompatMode && -1 !== j.indexOf(t))
                    return "'" + t + "'";
                var s = e.indent * Math.max(1, n)
                  , o = -1 === e.lineWidth ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s)
                  , a = i || e.flowLevel > -1 && n >= e.flowLevel;
                switch (K(t, a, e.indent, o, function(t) {
                    return function(e, t) {
                        var n, i;
                        for (n = 0,
                        i = e.implicitTypes.length; n < i; n += 1)
                            if (e.implicitTypes[n].resolve(t))
                                return !0;
                        return !1
                    }(e, t)
                })) {
                case R:
                    return t;
                case z:
                    return "'" + t.replace(/'/g, "''") + "'";
                case J:
                    return "|" + H(t, e.indent) + V(N(t, s));
                case X:
                    return ">" + H(t, e.indent) + V(N(function(e, t) {
                        var n, i, r = /(\n+)([^\n]*)/g, s = (a = e.indexOf("\n"),
                        a = -1 !== a ? a : e.length,
                        r.lastIndex = a,
                        W(e.slice(0, a), t)), o = "\n" === e[0] || " " === e[0];
                        var a;
                        for (; i = r.exec(e); ) {
                            var u = i[1]
                              , c = i[2];
                            n = " " === c[0],
                            s += u + (o || n || "" === c ? "" : "\n") + W(c, t),
                            o = n
                        }
                        return s
                    }(t, o), s));
                case G:
                    return '"' + function(e) {
                        for (var t, n, i, r = "", s = 0; s < e.length; s++)
                            (t = e.charCodeAt(s)) >= 55296 && t <= 56319 && (n = e.charCodeAt(s + 1)) >= 56320 && n <= 57343 ? (r += I(1024 * (t - 55296) + n - 56320 + 65536),
                            s++) : (i = T[t],
                            r += !i && L(t) ? e[s] : i || I(t));
                        return r
                    }(t) + '"';
                default:
                    throw new r("impossible error: invalid scalar style")
                }
            }()
        }
        function H(e, t) {
            var n = " " === e[0] ? String(t) : ""
              , i = "\n" === e[e.length - 1];
            return n + (i && ("\n" === e[e.length - 2] || "\n" === e) ? "+" : i ? "" : "-") + "\n"
        }
        function V(e) {
            return "\n" === e[e.length - 1] ? e.slice(0, -1) : e
        }
        function W(e, t) {
            if ("" === e || " " === e[0])
                return e;
            for (var n, i, r = / [^ ]/g, s = 0, o = 0, a = 0, u = ""; n = r.exec(e); )
                (a = n.index) - s > t && (i = o > s ? o : a,
                u += "\n" + e.slice(s, i),
                s = i + 1),
                o = a;
            return u += "\n",
            e.length - s > t && o > s ? u += e.slice(s, o) + "\n" + e.slice(o + 1) : u += e.slice(s),
            u.slice(1)
        }
        function q(e, t, n) {
            var i, s, o, c, h, l;
            for (o = 0,
            c = (s = n ? e.explicitTypes : e.implicitTypes).length; o < c; o += 1)
                if (((h = s[o]).instanceOf || h.predicate) && (!h.instanceOf || "object" == typeof t && t instanceof h.instanceOf) && (!h.predicate || h.predicate(t))) {
                    if (e.tag = n ? h.tag : "?",
                    h.represent) {
                        if (l = e.styleMap[h.tag] || h.defaultStyle,
                        "[object Function]" === a.call(h.represent))
                            i = h.represent(t, l);
                        else {
                            if (!u.call(h.represent, l))
                                throw new r("!<" + h.tag + '> tag resolver accepts not "' + l + '" style');
                            i = h.represent[l](t, l)
                        }
                        e.dump = i
                    }
                    return !0
                }
            return !1
        }
        function $(e, t, n, i, s, o) {
            e.tag = null,
            e.dump = n,
            q(e, n, !1) || q(e, n, !0);
            var u = a.call(e.dump);
            i && (i = e.flowLevel < 0 || e.flowLevel > t);
            var c, l, p = "[object Object]" === u || "[object Array]" === u;
            if (p && (l = -1 !== (c = e.duplicates.indexOf(n))),
            (null !== e.tag && "?" !== e.tag || l || 2 !== e.indent && t > 0) && (s = !1),
            l && e.usedDuplicates[c])
                e.dump = "*ref_" + c;
            else {
                if (p && l && !e.usedDuplicates[c] && (e.usedDuplicates[c] = !0),
                "[object Object]" === u)
                    i && 0 !== Object.keys(e.dump).length ? (!function(e, t, n, i) {
                        var s, o, a, u, c, l, p = "", f = e.tag, d = Object.keys(n);
                        if (!0 === e.sortKeys)
                            d.sort();
                        else if ("function" == typeof e.sortKeys)
                            d.sort(e.sortKeys);
                        else if (e.sortKeys)
                            throw new r("sortKeys must be a boolean or a function");
                        for (s = 0,
                        o = d.length; s < o; s += 1)
                            l = "",
                            i && 0 === s || (l += P(e, t)),
                            u = n[a = d[s]],
                            $(e, t + 1, a, !0, !0, !0) && ((c = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024) && (e.dump && h === e.dump.charCodeAt(0) ? l += "?" : l += "? "),
                            l += e.dump,
                            c && (l += P(e, t)),
                            $(e, t + 1, u, !0, c) && (e.dump && h === e.dump.charCodeAt(0) ? l += ":" : l += ": ",
                            p += l += e.dump));
                        e.tag = f,
                        e.dump = p || "{}"
                    }(e, t, e.dump, s),
                    l && (e.dump = "&ref_" + c + e.dump)) : (!function(e, t, n) {
                        var i, r, s, o, a, u = "", c = e.tag, h = Object.keys(n);
                        for (i = 0,
                        r = h.length; i < r; i += 1)
                            a = e.condenseFlow ? '"' : "",
                            0 !== i && (a += ", "),
                            o = n[s = h[i]],
                            $(e, t, s, !1, !1) && (e.dump.length > 1024 && (a += "? "),
                            a += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "),
                            $(e, t, o, !1, !1) && (u += a += e.dump));
                        e.tag = c,
                        e.dump = "{" + u + "}"
                    }(e, t, e.dump),
                    l && (e.dump = "&ref_" + c + " " + e.dump));
                else if ("[object Array]" === u)
                    i && 0 !== e.dump.length ? (!function(e, t, n, i) {
                        var r, s, o = "", a = e.tag;
                        for (r = 0,
                        s = n.length; r < s; r += 1)
                            $(e, t + 1, n[r], !0, !0) && (i && 0 === r || (o += P(e, t)),
                            e.dump && h === e.dump.charCodeAt(0) ? o += "-" : o += "- ",
                            o += e.dump);
                        e.tag = a,
                        e.dump = o || "[]"
                    }(e, t, e.dump, s),
                    l && (e.dump = "&ref_" + c + e.dump)) : (!function(e, t, n) {
                        var i, r, s = "", o = e.tag;
                        for (i = 0,
                        r = n.length; i < r; i += 1)
                            $(e, t, n[i], !1, !1) && (0 !== i && (s += "," + (e.condenseFlow ? "" : " ")),
                            s += e.dump);
                        e.tag = o,
                        e.dump = "[" + s + "]"
                    }(e, t, e.dump),
                    l && (e.dump = "&ref_" + c + " " + e.dump));
                else {
                    if ("[object String]" !== u) {
                        if (e.skipInvalid)
                            return !1;
                        throw new r("unacceptable kind of an object to dump " + u)
                    }
                    "?" !== e.tag && Y(e, e.dump, t, o)
                }
                null !== e.tag && "?" !== e.tag && (e.dump = "!<" + e.tag + "> " + e.dump)
            }
            return !0
        }
        function Z(e, t) {
            var n, i, r = [], s = [];
            for (function e(t, n, i) {
                var r, s, o;
                if (null !== t && "object" == typeof t)
                    if (-1 !== (s = n.indexOf(t)))
                        -1 === i.indexOf(s) && i.push(s);
                    else if (n.push(t),
                    Array.isArray(t))
                        for (s = 0,
                        o = t.length; s < o; s += 1)
                            e(t[s], n, i);
                    else
                        for (r = Object.keys(t),
                        s = 0,
                        o = r.length; s < o; s += 1)
                            e(t[r[s]], n, i)
            }(e, r, s),
            n = 0,
            i = s.length; n < i; n += 1)
                t.duplicates.push(r[s[n]]);
            t.usedDuplicates = new Array(i)
        }
        function Q(e, t) {
            var n = new M(t = t || {});
            return n.noRefs || Z(e, n),
            $(n, 0, e, !0, !0) ? n.dump + "\n" : ""
        }
        e.exports.dump = Q,
        e.exports.safeDump = function(e, t) {
            return Q(e, i.extend({
                schema: o
            }, t))
        }
    },
    "./node_modules/js-yaml/lib/js-yaml/exception.js": /*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/exception.js ***!
  \*******************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        function i(e, t) {
            Error.call(this),
            this.name = "YAMLException",
            this.reason = e,
            this.mark = t,
            this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : ""),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || ""
        }
        i.prototype = Object.create(Error.prototype),
        i.prototype.constructor = i,
        i.prototype.toString = function(e) {
            var t = this.name + ": ";
            return t += this.reason || "(unknown reason)",
            !e && this.mark && (t += " " + this.mark.toString()),
            t
        }
        ,
        e.exports = i
    },
    "./node_modules/js-yaml/lib/js-yaml/loader.js": /*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/loader.js ***!
  \****************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ./common */
        "./node_modules/js-yaml/lib/js-yaml/common.js")
          , r = n(/*! ./exception */
        "./node_modules/js-yaml/lib/js-yaml/exception.js")
          , s = n(/*! ./mark */
        "./node_modules/js-yaml/lib/js-yaml/mark.js")
          , o = n(/*! ./schema/default_safe */
        "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js")
          , a = n(/*! ./schema/default_full */
        "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js")
          , u = Object.prototype.hasOwnProperty
          , c = 1
          , h = 2
          , l = 3
          , p = 4
          , f = 1
          , d = 2
          , m = 3
          , y = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
          , g = /[\x85\u2028\u2029]/
          , x = /[,\[\]\{\}]/
          , v = /^(?:!|!!|![a-z\-]+!)$/i
          , D = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
        function E(e) {
            return 10 === e || 13 === e
        }
        function A(e) {
            return 9 === e || 32 === e
        }
        function w(e) {
            return 9 === e || 32 === e || 10 === e || 13 === e
        }
        function b(e) {
            return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e
        }
        function C(e) {
            var t;
            return 48 <= e && e <= 57 ? e - 48 : 97 <= (t = 32 | e) && t <= 102 ? t - 97 + 10 : -1
        }
        function S(e) {
            return 48 === e ? "\0" : 97 === e ? "" : 98 === e ? "\b" : 116 === e ? "\t" : 9 === e ? "\t" : 110 === e ? "\n" : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : ""
        }
        function _(e) {
            return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023))
        }
        for (var F = new Array(256), k = new Array(256), B = 0; B < 256; B++)
            F[B] = S(B) ? 1 : 0,
            k[B] = S(B);
        function T(e, t) {
            return new r(t,new s(e.filename,e.input,e.position,e.line,e.position - e.lineStart))
        }
        function j(e, t) {
            throw T(e, t)
        }
        function I(e, t) {
            e.onWarning && e.onWarning.call(null, T(e, t))
        }
        var M = {
            YAML: function(e, t, n) {
                var i, r, s;
                null !== e.version && j(e, "duplication of %YAML directive"),
                1 !== n.length && j(e, "YAML directive accepts exactly one argument"),
                null === (i = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) && j(e, "ill-formed argument of the YAML directive"),
                r = parseInt(i[1], 10),
                s = parseInt(i[2], 10),
                1 !== r && j(e, "unacceptable YAML version of the document"),
                e.version = n[0],
                e.checkLineBreaks = s < 2,
                1 !== s && 2 !== s && I(e, "unsupported YAML version of the document")
            },
            TAG: function(e, t, n) {
                var i, r;
                2 !== n.length && j(e, "TAG directive accepts exactly two arguments"),
                i = n[0],
                r = n[1],
                v.test(i) || j(e, "ill-formed tag handle (first argument) of the TAG directive"),
                u.call(e.tagMap, i) && j(e, 'there is a previously declared suffix for "' + i + '" tag handle'),
                D.test(r) || j(e, "ill-formed tag prefix (second argument) of the TAG directive"),
                e.tagMap[i] = r
            }
        };
        function N(e, t, n, i) {
            var r, s, o, a;
            if (t < n) {
                if (a = e.input.slice(t, n),
                i)
                    for (r = 0,
                    s = a.length; r < s; r += 1)
                        9 === (o = a.charCodeAt(r)) || 32 <= o && o <= 1114111 || j(e, "expected valid JSON character");
                else
                    y.test(a) && j(e, "the stream contains non-printable characters");
                e.result += a
            }
        }
        function P(e, t, n, r) {
            var s, o, a, c;
            for (i.isObject(n) || j(e, "cannot merge mappings; the provided source object is unacceptable"),
            a = 0,
            c = (s = Object.keys(n)).length; a < c; a += 1)
                o = s[a],
                u.call(t, o) || (t[o] = n[o],
                r[o] = !0)
        }
        function O(e, t, n, i, r, s, o, a) {
            var c, h;
            if (r = String(r),
            null === t && (t = {}),
            "tag:yaml.org,2002:merge" === i)
                if (Array.isArray(s))
                    for (c = 0,
                    h = s.length; c < h; c += 1)
                        P(e, t, s[c], n);
                else
                    P(e, t, s, n);
            else
                e.json || u.call(n, r) || !u.call(t, r) || (e.line = o || e.line,
                e.position = a || e.position,
                j(e, "duplicated mapping key")),
                t[r] = s,
                delete n[r];
            return t
        }
        function L(e) {
            var t;
            10 === (t = e.input.charCodeAt(e.position)) ? e.position++ : 13 === t ? (e.position++,
            10 === e.input.charCodeAt(e.position) && e.position++) : j(e, "a line break is expected"),
            e.line += 1,
            e.lineStart = e.position
        }
        function U(e, t, n) {
            for (var i = 0, r = e.input.charCodeAt(e.position); 0 !== r; ) {
                for (; A(r); )
                    r = e.input.charCodeAt(++e.position);
                if (t && 35 === r)
                    do {
                        r = e.input.charCodeAt(++e.position)
                    } while (10 !== r && 13 !== r && 0 !== r);
                if (!E(r))
                    break;
                for (L(e),
                r = e.input.charCodeAt(e.position),
                i++,
                e.lineIndent = 0; 32 === r; )
                    e.lineIndent++,
                    r = e.input.charCodeAt(++e.position)
            }
            return -1 !== n && 0 !== i && e.lineIndent < n && I(e, "deficient indentation"),
            i
        }
        function R(e) {
            var t, n = e.position;
            return !(45 !== (t = e.input.charCodeAt(n)) && 46 !== t || t !== e.input.charCodeAt(n + 1) || t !== e.input.charCodeAt(n + 2) || (n += 3,
            0 !== (t = e.input.charCodeAt(n)) && !w(t)))
        }
        function z(e, t) {
            1 === t ? e.result += " " : t > 1 && (e.result += i.repeat("\n", t - 1))
        }
        function J(e, t) {
            var n, i, r = e.tag, s = e.anchor, o = [], a = !1;
            for (null !== e.anchor && (e.anchorMap[e.anchor] = o),
            i = e.input.charCodeAt(e.position); 0 !== i && 45 === i && w(e.input.charCodeAt(e.position + 1)); )
                if (a = !0,
                e.position++,
                U(e, !0, -1) && e.lineIndent <= t)
                    o.push(null),
                    i = e.input.charCodeAt(e.position);
                else if (n = e.line,
                K(e, t, l, !1, !0),
                o.push(e.result),
                U(e, !0, -1),
                i = e.input.charCodeAt(e.position),
                (e.line === n || e.lineIndent > t) && 0 !== i)
                    j(e, "bad indentation of a sequence entry");
                else if (e.lineIndent < t)
                    break;
            return !!a && (e.tag = r,
            e.anchor = s,
            e.kind = "sequence",
            e.result = o,
            !0)
        }
        function X(e) {
            var t, n, i, r, s = !1, o = !1;
            if (33 !== (r = e.input.charCodeAt(e.position)))
                return !1;
            if (null !== e.tag && j(e, "duplication of a tag property"),
            60 === (r = e.input.charCodeAt(++e.position)) ? (s = !0,
            r = e.input.charCodeAt(++e.position)) : 33 === r ? (o = !0,
            n = "!!",
            r = e.input.charCodeAt(++e.position)) : n = "!",
            t = e.position,
            s) {
                do {
                    r = e.input.charCodeAt(++e.position)
                } while (0 !== r && 62 !== r);
                e.position < e.length ? (i = e.input.slice(t, e.position),
                r = e.input.charCodeAt(++e.position)) : j(e, "unexpected end of the stream within a verbatim tag")
            } else {
                for (; 0 !== r && !w(r); )
                    33 === r && (o ? j(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1),
                    v.test(n) || j(e, "named tag handle cannot contain such characters"),
                    o = !0,
                    t = e.position + 1)),
                    r = e.input.charCodeAt(++e.position);
                i = e.input.slice(t, e.position),
                x.test(i) && j(e, "tag suffix cannot contain flow indicator characters")
            }
            return i && !D.test(i) && j(e, "tag name cannot contain such characters: " + i),
            s ? e.tag = i : u.call(e.tagMap, n) ? e.tag = e.tagMap[n] + i : "!" === n ? e.tag = "!" + i : "!!" === n ? e.tag = "tag:yaml.org,2002:" + i : j(e, 'undeclared tag handle "' + n + '"'),
            !0
        }
        function G(e) {
            var t, n;
            if (38 !== (n = e.input.charCodeAt(e.position)))
                return !1;
            for (null !== e.anchor && j(e, "duplication of an anchor property"),
            n = e.input.charCodeAt(++e.position),
            t = e.position; 0 !== n && !w(n) && !b(n); )
                n = e.input.charCodeAt(++e.position);
            return e.position === t && j(e, "name of an anchor node must contain at least one character"),
            e.anchor = e.input.slice(t, e.position),
            !0
        }
        function K(e, t, n, r, s) {
            var o, a, y, g, x, v, D, S, B = 1, T = !1, I = !1;
            if (null !== e.listener && e.listener("open", e),
            e.tag = null,
            e.anchor = null,
            e.kind = null,
            e.result = null,
            o = a = y = p === n || l === n,
            r && U(e, !0, -1) && (T = !0,
            e.lineIndent > t ? B = 1 : e.lineIndent === t ? B = 0 : e.lineIndent < t && (B = -1)),
            1 === B)
                for (; X(e) || G(e); )
                    U(e, !0, -1) ? (T = !0,
                    y = o,
                    e.lineIndent > t ? B = 1 : e.lineIndent === t ? B = 0 : e.lineIndent < t && (B = -1)) : y = !1;
            if (y && (y = T || s),
            1 !== B && p !== n || (D = c === n || h === n ? t : t + 1,
            S = e.position - e.lineStart,
            1 === B ? y && (J(e, S) || function(e, t, n) {
                var i, r, s, o, a, u = e.tag, c = e.anchor, l = {}, f = {}, d = null, m = null, y = null, g = !1, x = !1;
                for (null !== e.anchor && (e.anchorMap[e.anchor] = l),
                a = e.input.charCodeAt(e.position); 0 !== a; ) {
                    if (i = e.input.charCodeAt(e.position + 1),
                    s = e.line,
                    o = e.position,
                    63 !== a && 58 !== a || !w(i)) {
                        if (!K(e, n, h, !1, !0))
                            break;
                        if (e.line === s) {
                            for (a = e.input.charCodeAt(e.position); A(a); )
                                a = e.input.charCodeAt(++e.position);
                            if (58 === a)
                                w(a = e.input.charCodeAt(++e.position)) || j(e, "a whitespace character is expected after the key-value separator within a block mapping"),
                                g && (O(e, l, f, d, m, null),
                                d = m = y = null),
                                x = !0,
                                g = !1,
                                r = !1,
                                d = e.tag,
                                m = e.result;
                            else {
                                if (!x)
                                    return e.tag = u,
                                    e.anchor = c,
                                    !0;
                                j(e, "can not read an implicit mapping pair; a colon is missed")
                            }
                        } else {
                            if (!x)
                                return e.tag = u,
                                e.anchor = c,
                                !0;
                            j(e, "can not read a block mapping entry; a multiline key may not be an implicit key")
                        }
                    } else
                        63 === a ? (g && (O(e, l, f, d, m, null),
                        d = m = y = null),
                        x = !0,
                        g = !0,
                        r = !0) : g ? (g = !1,
                        r = !0) : j(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),
                        e.position += 1,
                        a = i;
                    if ((e.line === s || e.lineIndent > t) && (K(e, t, p, !0, r) && (g ? m = e.result : y = e.result),
                    g || (O(e, l, f, d, m, y, s, o),
                    d = m = y = null),
                    U(e, !0, -1),
                    a = e.input.charCodeAt(e.position)),
                    e.lineIndent > t && 0 !== a)
                        j(e, "bad indentation of a mapping entry");
                    else if (e.lineIndent < t)
                        break
                }
                return g && O(e, l, f, d, m, null),
                x && (e.tag = u,
                e.anchor = c,
                e.kind = "mapping",
                e.result = l),
                x
            }(e, S, D)) || function(e, t) {
                var n, i, r, s, o, a, u, h, l, p, f = !0, d = e.tag, m = e.anchor, y = {};
                if (91 === (p = e.input.charCodeAt(e.position)))
                    r = 93,
                    a = !1,
                    i = [];
                else {
                    if (123 !== p)
                        return !1;
                    r = 125,
                    a = !0,
                    i = {}
                }
                for (null !== e.anchor && (e.anchorMap[e.anchor] = i),
                p = e.input.charCodeAt(++e.position); 0 !== p; ) {
                    if (U(e, !0, t),
                    (p = e.input.charCodeAt(e.position)) === r)
                        return e.position++,
                        e.tag = d,
                        e.anchor = m,
                        e.kind = a ? "mapping" : "sequence",
                        e.result = i,
                        !0;
                    f || j(e, "missed comma between flow collection entries"),
                    h = u = l = null,
                    s = o = !1,
                    63 === p && w(e.input.charCodeAt(e.position + 1)) && (s = o = !0,
                    e.position++,
                    U(e, !0, t)),
                    n = e.line,
                    K(e, t, c, !1, !0),
                    h = e.tag,
                    u = e.result,
                    U(e, !0, t),
                    p = e.input.charCodeAt(e.position),
                    !o && e.line !== n || 58 !== p || (s = !0,
                    p = e.input.charCodeAt(++e.position),
                    U(e, !0, t),
                    K(e, t, c, !1, !0),
                    l = e.result),
                    a ? O(e, i, y, h, u, l) : s ? i.push(O(e, null, y, h, u, l)) : i.push(u),
                    U(e, !0, t),
                    44 === (p = e.input.charCodeAt(e.position)) ? (f = !0,
                    p = e.input.charCodeAt(++e.position)) : f = !1
                }
                j(e, "unexpected end of the stream within a flow collection")
            }(e, D) ? I = !0 : (a && function(e, t) {
                var n, r, s, o, a, u = f, c = !1, h = !1, l = t, p = 0, y = !1;
                if (124 === (o = e.input.charCodeAt(e.position)))
                    r = !1;
                else {
                    if (62 !== o)
                        return !1;
                    r = !0
                }
                for (e.kind = "scalar",
                e.result = ""; 0 !== o; )
                    if (43 === (o = e.input.charCodeAt(++e.position)) || 45 === o)
                        f === u ? u = 43 === o ? m : d : j(e, "repeat of a chomping mode identifier");
                    else {
                        if (!((s = 48 <= (a = o) && a <= 57 ? a - 48 : -1) >= 0))
                            break;
                        0 === s ? j(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : h ? j(e, "repeat of an indentation width identifier") : (l = t + s - 1,
                        h = !0)
                    }
                if (A(o)) {
                    do {
                        o = e.input.charCodeAt(++e.position)
                    } while (A(o));
                    if (35 === o)
                        do {
                            o = e.input.charCodeAt(++e.position)
                        } while (!E(o) && 0 !== o)
                }
                for (; 0 !== o; ) {
                    for (L(e),
                    e.lineIndent = 0,
                    o = e.input.charCodeAt(e.position); (!h || e.lineIndent < l) && 32 === o; )
                        e.lineIndent++,
                        o = e.input.charCodeAt(++e.position);
                    if (!h && e.lineIndent > l && (l = e.lineIndent),
                    E(o))
                        p++;
                    else {
                        if (e.lineIndent < l) {
                            u === m ? e.result += i.repeat("\n", c ? 1 + p : p) : u === f && c && (e.result += "\n");
                            break
                        }
                        for (r ? A(o) ? (y = !0,
                        e.result += i.repeat("\n", c ? 1 + p : p)) : y ? (y = !1,
                        e.result += i.repeat("\n", p + 1)) : 0 === p ? c && (e.result += " ") : e.result += i.repeat("\n", p) : e.result += i.repeat("\n", c ? 1 + p : p),
                        c = !0,
                        h = !0,
                        p = 0,
                        n = e.position; !E(o) && 0 !== o; )
                            o = e.input.charCodeAt(++e.position);
                        N(e, n, e.position, !1)
                    }
                }
                return !0
            }(e, D) || function(e, t) {
                var n, i, r;
                if (39 !== (n = e.input.charCodeAt(e.position)))
                    return !1;
                for (e.kind = "scalar",
                e.result = "",
                e.position++,
                i = r = e.position; 0 !== (n = e.input.charCodeAt(e.position)); )
                    if (39 === n) {
                        if (N(e, i, e.position, !0),
                        39 !== (n = e.input.charCodeAt(++e.position)))
                            return !0;
                        i = e.position,
                        e.position++,
                        r = e.position
                    } else
                        E(n) ? (N(e, i, r, !0),
                        z(e, U(e, !1, t)),
                        i = r = e.position) : e.position === e.lineStart && R(e) ? j(e, "unexpected end of the document within a single quoted scalar") : (e.position++,
                        r = e.position);
                j(e, "unexpected end of the stream within a single quoted scalar")
            }(e, D) || function(e, t) {
                var n, i, r, s, o, a, u;
                if (34 !== (a = e.input.charCodeAt(e.position)))
                    return !1;
                for (e.kind = "scalar",
                e.result = "",
                e.position++,
                n = i = e.position; 0 !== (a = e.input.charCodeAt(e.position)); ) {
                    if (34 === a)
                        return N(e, n, e.position, !0),
                        e.position++,
                        !0;
                    if (92 === a) {
                        if (N(e, n, e.position, !0),
                        E(a = e.input.charCodeAt(++e.position)))
                            U(e, !1, t);
                        else if (a < 256 && F[a])
                            e.result += k[a],
                            e.position++;
                        else if ((o = 120 === (u = a) ? 2 : 117 === u ? 4 : 85 === u ? 8 : 0) > 0) {
                            for (r = o,
                            s = 0; r > 0; r--)
                                (o = C(a = e.input.charCodeAt(++e.position))) >= 0 ? s = (s << 4) + o : j(e, "expected hexadecimal character");
                            e.result += _(s),
                            e.position++
                        } else
                            j(e, "unknown escape sequence");
                        n = i = e.position
                    } else
                        E(a) ? (N(e, n, i, !0),
                        z(e, U(e, !1, t)),
                        n = i = e.position) : e.position === e.lineStart && R(e) ? j(e, "unexpected end of the document within a double quoted scalar") : (e.position++,
                        i = e.position)
                }
                j(e, "unexpected end of the stream within a double quoted scalar")
            }(e, D) ? I = !0 : !function(e) {
                var t, n, i;
                if (42 !== (i = e.input.charCodeAt(e.position)))
                    return !1;
                for (i = e.input.charCodeAt(++e.position),
                t = e.position; 0 !== i && !w(i) && !b(i); )
                    i = e.input.charCodeAt(++e.position);
                return e.position === t && j(e, "name of an alias node must contain at least one character"),
                n = e.input.slice(t, e.position),
                e.anchorMap.hasOwnProperty(n) || j(e, 'unidentified alias "' + n + '"'),
                e.result = e.anchorMap[n],
                U(e, !0, -1),
                !0
            }(e) ? function(e, t, n) {
                var i, r, s, o, a, u, c, h, l = e.kind, p = e.result;
                if (w(h = e.input.charCodeAt(e.position)) || b(h) || 35 === h || 38 === h || 42 === h || 33 === h || 124 === h || 62 === h || 39 === h || 34 === h || 37 === h || 64 === h || 96 === h)
                    return !1;
                if ((63 === h || 45 === h) && (w(i = e.input.charCodeAt(e.position + 1)) || n && b(i)))
                    return !1;
                for (e.kind = "scalar",
                e.result = "",
                r = s = e.position,
                o = !1; 0 !== h; ) {
                    if (58 === h) {
                        if (w(i = e.input.charCodeAt(e.position + 1)) || n && b(i))
                            break
                    } else if (35 === h) {
                        if (w(e.input.charCodeAt(e.position - 1)))
                            break
                    } else {
                        if (e.position === e.lineStart && R(e) || n && b(h))
                            break;
                        if (E(h)) {
                            if (a = e.line,
                            u = e.lineStart,
                            c = e.lineIndent,
                            U(e, !1, -1),
                            e.lineIndent >= t) {
                                o = !0,
                                h = e.input.charCodeAt(e.position);
                                continue
                            }
                            e.position = s,
                            e.line = a,
                            e.lineStart = u,
                            e.lineIndent = c;
                            break
                        }
                    }
                    o && (N(e, r, s, !1),
                    z(e, e.line - a),
                    r = s = e.position,
                    o = !1),
                    A(h) || (s = e.position + 1),
                    h = e.input.charCodeAt(++e.position)
                }
                return N(e, r, s, !1),
                !!e.result || (e.kind = l,
                e.result = p,
                !1)
            }(e, D, c === n) && (I = !0,
            null === e.tag && (e.tag = "?")) : (I = !0,
            null === e.tag && null === e.anchor || j(e, "alias node should not have any properties")),
            null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === B && (I = y && J(e, S))),
            null !== e.tag && "!" !== e.tag)
                if ("?" === e.tag) {
                    for (g = 0,
                    x = e.implicitTypes.length; g < x; g += 1)
                        if ((v = e.implicitTypes[g]).resolve(e.result)) {
                            e.result = v.construct(e.result),
                            e.tag = v.tag,
                            null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
                            break
                        }
                } else
                    u.call(e.typeMap[e.kind || "fallback"], e.tag) ? (v = e.typeMap[e.kind || "fallback"][e.tag],
                    null !== e.result && v.kind !== e.kind && j(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + v.kind + '", not "' + e.kind + '"'),
                    v.resolve(e.result) ? (e.result = v.construct(e.result),
                    null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : j(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : j(e, "unknown tag !<" + e.tag + ">");
            return null !== e.listener && e.listener("close", e),
            null !== e.tag || null !== e.anchor || I
        }
        function Y(e) {
            var t, n, i, r, s = e.position, o = !1;
            for (e.version = null,
            e.checkLineBreaks = e.legacy,
            e.tagMap = {},
            e.anchorMap = {}; 0 !== (r = e.input.charCodeAt(e.position)) && (U(e, !0, -1),
            r = e.input.charCodeAt(e.position),
            !(e.lineIndent > 0 || 37 !== r)); ) {
                for (o = !0,
                r = e.input.charCodeAt(++e.position),
                t = e.position; 0 !== r && !w(r); )
                    r = e.input.charCodeAt(++e.position);
                for (i = [],
                (n = e.input.slice(t, e.position)).length < 1 && j(e, "directive name must not be less than one character in length"); 0 !== r; ) {
                    for (; A(r); )
                        r = e.input.charCodeAt(++e.position);
                    if (35 === r) {
                        do {
                            r = e.input.charCodeAt(++e.position)
                        } while (0 !== r && !E(r));
                        break
                    }
                    if (E(r))
                        break;
                    for (t = e.position; 0 !== r && !w(r); )
                        r = e.input.charCodeAt(++e.position);
                    i.push(e.input.slice(t, e.position))
                }
                0 !== r && L(e),
                u.call(M, n) ? M[n](e, n, i) : I(e, 'unknown document directive "' + n + '"')
            }
            U(e, !0, -1),
            0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3,
            U(e, !0, -1)) : o && j(e, "directives end mark is expected"),
            K(e, e.lineIndent - 1, p, !1, !0),
            U(e, !0, -1),
            e.checkLineBreaks && g.test(e.input.slice(s, e.position)) && I(e, "non-ASCII line breaks are interpreted as content"),
            e.documents.push(e.result),
            e.position === e.lineStart && R(e) ? 46 === e.input.charCodeAt(e.position) && (e.position += 3,
            U(e, !0, -1)) : e.position < e.length - 1 && j(e, "end of the stream or a document separator is expected")
        }
        function H(e, t) {
            e = String(e),
            t = t || {},
            0 !== e.length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"),
            65279 === e.charCodeAt(0) && (e = e.slice(1)));
            var n = new function(e, t) {
                this.input = e,
                this.filename = t.filename || null,
                this.schema = t.schema || a,
                this.onWarning = t.onWarning || null,
                this.legacy = t.legacy || !1,
                this.json = t.json || !1,
                this.listener = t.listener || null,
                this.implicitTypes = this.schema.compiledImplicit,
                this.typeMap = this.schema.compiledTypeMap,
                this.length = e.length,
                this.position = 0,
                this.line = 0,
                this.lineStart = 0,
                this.lineIndent = 0,
                this.documents = []
            }
            (e,t);
            for (n.input += "\0"; 32 === n.input.charCodeAt(n.position); )
                n.lineIndent += 1,
                n.position += 1;
            for (; n.position < n.length - 1; )
                Y(n);
            return n.documents
        }
        function V(e, t, n) {
            var i, r, s = H(e, n);
            if ("function" != typeof t)
                return s;
            for (i = 0,
            r = s.length; i < r; i += 1)
                t(s[i])
        }
        function W(e, t) {
            var n = H(e, t);
            if (0 !== n.length) {
                if (1 === n.length)
                    return n[0];
                throw new r("expected a single document in the stream, but found more")
            }
        }
        e.exports.loadAll = V,
        e.exports.load = W,
        e.exports.safeLoadAll = function(e, t, n) {
            if ("function" != typeof t)
                return V(e, i.extend({
                    schema: o
                }, n));
            V(e, t, i.extend({
                schema: o
            }, n))
        }
        ,
        e.exports.safeLoad = function(e, t) {
            return W(e, i.extend({
                schema: o
            }, t))
        }
    },
    "./node_modules/js-yaml/lib/js-yaml/mark.js": /*!**************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/mark.js ***!
  \**************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ./common */
        "./node_modules/js-yaml/lib/js-yaml/common.js");
        function r(e, t, n, i, r) {
            this.name = e,
            this.buffer = t,
            this.position = n,
            this.line = i,
            this.column = r
        }
        r.prototype.getSnippet = function(e, t) {
            var n, r, s, o, a;
            if (!this.buffer)
                return null;
            for (e = e || 4,
            t = t || 75,
            n = "",
            r = this.position; r > 0 && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(r - 1)); )
                if (r -= 1,
                this.position - r > t / 2 - 1) {
                    n = " ... ",
                    r += 5;
                    break
                }
            for (s = "",
            o = this.position; o < this.buffer.length && -1 === "\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o)); )
                if ((o += 1) - this.position > t / 2 - 1) {
                    s = " ... ",
                    o -= 5;
                    break
                }
            return a = this.buffer.slice(r, o),
            i.repeat(" ", e) + n + a + s + "\n" + i.repeat(" ", e + this.position - r + n.length) + "^"
        }
        ,
        r.prototype.toString = function(e) {
            var t, n = "";
            return this.name && (n += 'in "' + this.name + '" '),
            n += "at line " + (this.line + 1) + ", column " + (this.column + 1),
            e || (t = this.getSnippet()) && (n += ":\n" + t),
            n
        }
        ,
        e.exports = r
    },
    "./node_modules/js-yaml/lib/js-yaml/schema.js": /*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema.js ***!
  \****************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ./common */
        "./node_modules/js-yaml/lib/js-yaml/common.js")
          , r = n(/*! ./exception */
        "./node_modules/js-yaml/lib/js-yaml/exception.js")
          , s = n(/*! ./type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        function o(e, t, n) {
            var i = [];
            return e.include.forEach(function(e) {
                n = o(e, t, n)
            }),
            e[t].forEach(function(e) {
                n.forEach(function(t, n) {
                    t.tag === e.tag && t.kind === e.kind && i.push(n)
                }),
                n.push(e)
            }),
            n.filter(function(e, t) {
                return -1 === i.indexOf(t)
            })
        }
        function a(e) {
            this.include = e.include || [],
            this.implicit = e.implicit || [],
            this.explicit = e.explicit || [],
            this.implicit.forEach(function(e) {
                if (e.loadKind && "scalar" !== e.loadKind)
                    throw new r("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")
            }),
            this.compiledImplicit = o(this, "implicit", []),
            this.compiledExplicit = o(this, "explicit", []),
            this.compiledTypeMap = function() {
                var e, t, n = {
                    scalar: {},
                    sequence: {},
                    mapping: {},
                    fallback: {}
                };
                function i(e) {
                    n[e.kind][e.tag] = n.fallback[e.tag] = e
                }
                for (e = 0,
                t = arguments.length; e < t; e += 1)
                    arguments[e].forEach(i);
                return n
            }(this.compiledImplicit, this.compiledExplicit)
        }
        a.DEFAULT = null,
        a.create = function() {
            var e, t;
            switch (arguments.length) {
            case 1:
                e = a.DEFAULT,
                t = arguments[0];
                break;
            case 2:
                e = arguments[0],
                t = arguments[1];
                break;
            default:
                throw new r("Wrong number of arguments for Schema.create function")
            }
            if (e = i.toArray(e),
            t = i.toArray(t),
            !e.every(function(e) {
                return e instanceof a
            }))
                throw new r("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
            if (!t.every(function(e) {
                return e instanceof s
            }))
                throw new r("Specified list of YAML types (or a single Type object) contains a non-Type object.");
            return new a({
                include: e,
                explicit: t
            })
        }
        ,
        e.exports = a
    },
    "./node_modules/js-yaml/lib/js-yaml/schema/core.js": /*!*********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/core.js ***!
  \*********************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../schema */
        "./node_modules/js-yaml/lib/js-yaml/schema.js");
        e.exports = new i({
            include: [n(/*! ./json */
            "./node_modules/js-yaml/lib/js-yaml/schema/json.js")]
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js": /*!*****************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/default_full.js ***!
  \*****************************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../schema */
        "./node_modules/js-yaml/lib/js-yaml/schema.js");
        e.exports = i.DEFAULT = new i({
            include: [n(/*! ./default_safe */
            "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js")],
            explicit: [n(/*! ../type/js/undefined */
            "./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js"), n(/*! ../type/js/regexp */
            "./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js"), n(/*! ../type/js/function */
            "./node_modules/js-yaml/lib/js-yaml/type/js/function.js")]
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js": /*!*****************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js ***!
  \*****************************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../schema */
        "./node_modules/js-yaml/lib/js-yaml/schema.js");
        e.exports = new i({
            include: [n(/*! ./core */
            "./node_modules/js-yaml/lib/js-yaml/schema/core.js")],
            implicit: [n(/*! ../type/timestamp */
            "./node_modules/js-yaml/lib/js-yaml/type/timestamp.js"), n(/*! ../type/merge */
            "./node_modules/js-yaml/lib/js-yaml/type/merge.js")],
            explicit: [n(/*! ../type/binary */
            "./node_modules/js-yaml/lib/js-yaml/type/binary.js"), n(/*! ../type/omap */
            "./node_modules/js-yaml/lib/js-yaml/type/omap.js"), n(/*! ../type/pairs */
            "./node_modules/js-yaml/lib/js-yaml/type/pairs.js"), n(/*! ../type/set */
            "./node_modules/js-yaml/lib/js-yaml/type/set.js")]
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js": /*!*************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js ***!
  \*************************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../schema */
        "./node_modules/js-yaml/lib/js-yaml/schema.js");
        e.exports = new i({
            explicit: [n(/*! ../type/str */
            "./node_modules/js-yaml/lib/js-yaml/type/str.js"), n(/*! ../type/seq */
            "./node_modules/js-yaml/lib/js-yaml/type/seq.js"), n(/*! ../type/map */
            "./node_modules/js-yaml/lib/js-yaml/type/map.js")]
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/schema/json.js": /*!*********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/json.js ***!
  \*********************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../schema */
        "./node_modules/js-yaml/lib/js-yaml/schema.js");
        e.exports = new i({
            include: [n(/*! ./failsafe */
            "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js")],
            implicit: [n(/*! ../type/null */
            "./node_modules/js-yaml/lib/js-yaml/type/null.js"), n(/*! ../type/bool */
            "./node_modules/js-yaml/lib/js-yaml/type/bool.js"), n(/*! ../type/int */
            "./node_modules/js-yaml/lib/js-yaml/type/int.js"), n(/*! ../type/float */
            "./node_modules/js-yaml/lib/js-yaml/type/float.js")]
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type.js": /*!**************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type.js ***!
  \**************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ./exception */
        "./node_modules/js-yaml/lib/js-yaml/exception.js")
          , r = ["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"]
          , s = ["scalar", "sequence", "mapping"];
        e.exports = function(e, t) {
            var n, o;
            if (t = t || {},
            Object.keys(t).forEach(function(t) {
                if (-1 === r.indexOf(t))
                    throw new i('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.')
            }),
            this.tag = e,
            this.kind = t.kind || null,
            this.resolve = t.resolve || function() {
                return !0
            }
            ,
            this.construct = t.construct || function(e) {
                return e
            }
            ,
            this.instanceOf = t.instanceOf || null,
            this.predicate = t.predicate || null,
            this.represent = t.represent || null,
            this.defaultStyle = t.defaultStyle || null,
            this.styleAliases = (n = t.styleAliases || null,
            o = {},
            null !== n && Object.keys(n).forEach(function(e) {
                n[e].forEach(function(t) {
                    o[String(t)] = e
                })
            }),
            o),
            -1 === s.indexOf(this.kind))
                throw new i('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.')
        }
    },
    "./node_modules/js-yaml/lib/js-yaml/type/binary.js": /*!*********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/binary.js ***!
  \*********************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i;
        try {
            i = n(/*! buffer */
            "./node_modules/buffer/index.js").Buffer
        } catch (e) {}
        var r = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js")
          , s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
        e.exports = new r("tag:yaml.org,2002:binary",{
            kind: "scalar",
            resolve: function(e) {
                if (null === e)
                    return !1;
                var t, n, i = 0, r = e.length, o = s;
                for (n = 0; n < r; n++)
                    if (!((t = o.indexOf(e.charAt(n))) > 64)) {
                        if (t < 0)
                            return !1;
                        i += 6
                    }
                return i % 8 == 0
            },
            construct: function(e) {
                var t, n, r = e.replace(/[\r\n=]/g, ""), o = r.length, a = s, u = 0, c = [];
                for (t = 0; t < o; t++)
                    t % 4 == 0 && t && (c.push(u >> 16 & 255),
                    c.push(u >> 8 & 255),
                    c.push(255 & u)),
                    u = u << 6 | a.indexOf(r.charAt(t));
                return 0 == (n = o % 4 * 6) ? (c.push(u >> 16 & 255),
                c.push(u >> 8 & 255),
                c.push(255 & u)) : 18 === n ? (c.push(u >> 10 & 255),
                c.push(u >> 2 & 255)) : 12 === n && c.push(u >> 4 & 255),
                i ? i.from ? i.from(c) : new i(c) : c
            },
            predicate: function(e) {
                return i && i.isBuffer(e)
            },
            represent: function(e) {
                var t, n, i = "", r = 0, o = e.length, a = s;
                for (t = 0; t < o; t++)
                    t % 3 == 0 && t && (i += a[r >> 18 & 63],
                    i += a[r >> 12 & 63],
                    i += a[r >> 6 & 63],
                    i += a[63 & r]),
                    r = (r << 8) + e[t];
                return 0 == (n = o % 3) ? (i += a[r >> 18 & 63],
                i += a[r >> 12 & 63],
                i += a[r >> 6 & 63],
                i += a[63 & r]) : 2 === n ? (i += a[r >> 10 & 63],
                i += a[r >> 4 & 63],
                i += a[r << 2 & 63],
                i += a[64]) : 1 === n && (i += a[r >> 2 & 63],
                i += a[r << 4 & 63],
                i += a[64],
                i += a[64]),
                i
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/bool.js": /*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/bool.js ***!
  \*******************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        e.exports = new i("tag:yaml.org,2002:bool",{
            kind: "scalar",
            resolve: function(e) {
                if (null === e)
                    return !1;
                var t = e.length;
                return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e)
            },
            construct: function(e) {
                return "true" === e || "True" === e || "TRUE" === e
            },
            predicate: function(e) {
                return "[object Boolean]" === Object.prototype.toString.call(e)
            },
            represent: {
                lowercase: function(e) {
                    return e ? "true" : "false"
                },
                uppercase: function(e) {
                    return e ? "TRUE" : "FALSE"
                },
                camelcase: function(e) {
                    return e ? "True" : "False"
                }
            },
            defaultStyle: "lowercase"
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/float.js": /*!********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/float.js ***!
  \********************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../common */
        "./node_modules/js-yaml/lib/js-yaml/common.js")
          , r = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js")
          , s = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
        var o = /^[-+]?[0-9]+e/;
        e.exports = new r("tag:yaml.org,2002:float",{
            kind: "scalar",
            resolve: function(e) {
                return null !== e && !(!s.test(e) || "_" === e[e.length - 1])
            },
            construct: function(e) {
                var t, n, i, r;
                return n = "-" === (t = e.replace(/_/g, "").toLowerCase())[0] ? -1 : 1,
                r = [],
                "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)),
                ".inf" === t ? 1 === n ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t ? NaN : t.indexOf(":") >= 0 ? (t.split(":").forEach(function(e) {
                    r.unshift(parseFloat(e, 10))
                }),
                t = 0,
                i = 1,
                r.forEach(function(e) {
                    t += e * i,
                    i *= 60
                }),
                n * t) : n * parseFloat(t, 10)
            },
            predicate: function(e) {
                return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 != 0 || i.isNegativeZero(e))
            },
            represent: function(e, t) {
                var n;
                if (isNaN(e))
                    switch (t) {
                    case "lowercase":
                        return ".nan";
                    case "uppercase":
                        return ".NAN";
                    case "camelcase":
                        return ".NaN"
                    }
                else if (Number.POSITIVE_INFINITY === e)
                    switch (t) {
                    case "lowercase":
                        return ".inf";
                    case "uppercase":
                        return ".INF";
                    case "camelcase":
                        return ".Inf"
                    }
                else if (Number.NEGATIVE_INFINITY === e)
                    switch (t) {
                    case "lowercase":
                        return "-.inf";
                    case "uppercase":
                        return "-.INF";
                    case "camelcase":
                        return "-.Inf"
                    }
                else if (i.isNegativeZero(e))
                    return "-0.0";
                return n = e.toString(10),
                o.test(n) ? n.replace("e", ".e") : n
            },
            defaultStyle: "lowercase"
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/int.js": /*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/int.js ***!
  \******************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../common */
        "./node_modules/js-yaml/lib/js-yaml/common.js")
          , r = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        function s(e) {
            return 48 <= e && e <= 55
        }
        function o(e) {
            return 48 <= e && e <= 57
        }
        e.exports = new r("tag:yaml.org,2002:int",{
            kind: "scalar",
            resolve: function(e) {
                if (null === e)
                    return !1;
                var t, n, i = e.length, r = 0, a = !1;
                if (!i)
                    return !1;
                if ("-" !== (t = e[r]) && "+" !== t || (t = e[++r]),
                "0" === t) {
                    if (r + 1 === i)
                        return !0;
                    if ("b" === (t = e[++r])) {
                        for (r++; r < i; r++)
                            if ("_" !== (t = e[r])) {
                                if ("0" !== t && "1" !== t)
                                    return !1;
                                a = !0
                            }
                        return a && "_" !== t
                    }
                    if ("x" === t) {
                        for (r++; r < i; r++)
                            if ("_" !== (t = e[r])) {
                                if (!(48 <= (n = e.charCodeAt(r)) && n <= 57 || 65 <= n && n <= 70 || 97 <= n && n <= 102))
                                    return !1;
                                a = !0
                            }
                        return a && "_" !== t
                    }
                    for (; r < i; r++)
                        if ("_" !== (t = e[r])) {
                            if (!s(e.charCodeAt(r)))
                                return !1;
                            a = !0
                        }
                    return a && "_" !== t
                }
                if ("_" === t)
                    return !1;
                for (; r < i; r++)
                    if ("_" !== (t = e[r])) {
                        if (":" === t)
                            break;
                        if (!o(e.charCodeAt(r)))
                            return !1;
                        a = !0
                    }
                return !(!a || "_" === t) && (":" !== t || /^(:[0-5]?[0-9])+$/.test(e.slice(r)))
            },
            construct: function(e) {
                var t, n, i = e, r = 1, s = [];
                return -1 !== i.indexOf("_") && (i = i.replace(/_/g, "")),
                "-" !== (t = i[0]) && "+" !== t || ("-" === t && (r = -1),
                t = (i = i.slice(1))[0]),
                "0" === i ? 0 : "0" === t ? "b" === i[1] ? r * parseInt(i.slice(2), 2) : "x" === i[1] ? r * parseInt(i, 16) : r * parseInt(i, 8) : -1 !== i.indexOf(":") ? (i.split(":").forEach(function(e) {
                    s.unshift(parseInt(e, 10))
                }),
                i = 0,
                n = 1,
                s.forEach(function(e) {
                    i += e * n,
                    n *= 60
                }),
                r * i) : r * parseInt(i, 10)
            },
            predicate: function(e) {
                return "[object Number]" === Object.prototype.toString.call(e) && e % 1 == 0 && !i.isNegativeZero(e)
            },
            represent: {
                binary: function(e) {
                    return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1)
                },
                octal: function(e) {
                    return e >= 0 ? "0" + e.toString(8) : "-0" + e.toString(8).slice(1)
                },
                decimal: function(e) {
                    return e.toString(10)
                },
                hexadecimal: function(e) {
                    return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1)
                }
            },
            defaultStyle: "decimal",
            styleAliases: {
                binary: [2, "bin"],
                octal: [8, "oct"],
                decimal: [10, "dec"],
                hexadecimal: [16, "hex"]
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/js/function.js": /*!**************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/js/function.js ***!
  \**************************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i;
        try {
            i = n(/*! esprima */
            "./node_modules/esprima/dist/esprima.js")
        } catch (e) {
            "undefined" != typeof window && (i = window.esprima)
        }
        var r = n(/*! ../../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        e.exports = new r("tag:yaml.org,2002:js/function",{
            kind: "scalar",
            resolve: function(e) {
                if (null === e)
                    return !1;
                try {
                    var t = "(" + e + ")"
                      , n = i.parse(t, {
                        range: !0
                    });
                    return "Program" === n.type && 1 === n.body.length && "ExpressionStatement" === n.body[0].type && ("ArrowFunctionExpression" === n.body[0].expression.type || "FunctionExpression" === n.body[0].expression.type)
                } catch (e) {
                    return !1
                }
            },
            construct: function(e) {
                var t, n = "(" + e + ")", r = i.parse(n, {
                    range: !0
                }), s = [];
                if ("Program" !== r.type || 1 !== r.body.length || "ExpressionStatement" !== r.body[0].type || "ArrowFunctionExpression" !== r.body[0].expression.type && "FunctionExpression" !== r.body[0].expression.type)
                    throw new Error("Failed to resolve function");
                return r.body[0].expression.params.forEach(function(e) {
                    s.push(e.name)
                }),
                t = r.body[0].expression.body.range,
                new Function(s,n.slice(t[0] + 1, t[1] - 1))
            },
            predicate: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            },
            represent: function(e) {
                return e.toString()
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js": /*!************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js ***!
  \************************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        e.exports = new i("tag:yaml.org,2002:js/regexp",{
            kind: "scalar",
            resolve: function(e) {
                if (null === e)
                    return !1;
                if (0 === e.length)
                    return !1;
                var t = e
                  , n = /\/([gim]*)$/.exec(e)
                  , i = "";
                if ("/" === t[0]) {
                    if (n && (i = n[1]),
                    i.length > 3)
                        return !1;
                    if ("/" !== t[t.length - i.length - 1])
                        return !1
                }
                return !0
            },
            construct: function(e) {
                var t = e
                  , n = /\/([gim]*)$/.exec(e)
                  , i = "";
                return "/" === t[0] && (n && (i = n[1]),
                t = t.slice(1, t.length - i.length - 1)),
                new RegExp(t,i)
            },
            predicate: function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            },
            represent: function(e) {
                var t = "/" + e.source + "/";
                return e.global && (t += "g"),
                e.multiline && (t += "m"),
                e.ignoreCase && (t += "i"),
                t
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js": /*!***************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js ***!
  \***************************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        e.exports = new i("tag:yaml.org,2002:js/undefined",{
            kind: "scalar",
            resolve: function() {
                return !0
            },
            construct: function() {},
            predicate: function(e) {
                return void 0 === e
            },
            represent: function() {
                return ""
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/map.js": /*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/map.js ***!
  \******************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        e.exports = new i("tag:yaml.org,2002:map",{
            kind: "mapping",
            construct: function(e) {
                return null !== e ? e : {}
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/merge.js": /*!********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/merge.js ***!
  \********************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        e.exports = new i("tag:yaml.org,2002:merge",{
            kind: "scalar",
            resolve: function(e) {
                return "<<" === e || null === e
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/null.js": /*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/null.js ***!
  \*******************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        e.exports = new i("tag:yaml.org,2002:null",{
            kind: "scalar",
            resolve: function(e) {
                if (null === e)
                    return !0;
                var t = e.length;
                return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e)
            },
            construct: function() {
                return null
            },
            predicate: function(e) {
                return null === e
            },
            represent: {
                canonical: function() {
                    return "~"
                },
                lowercase: function() {
                    return "null"
                },
                uppercase: function() {
                    return "NULL"
                },
                camelcase: function() {
                    return "Null"
                }
            },
            defaultStyle: "lowercase"
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/omap.js": /*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/omap.js ***!
  \*******************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js")
          , r = Object.prototype.hasOwnProperty
          , s = Object.prototype.toString;
        e.exports = new i("tag:yaml.org,2002:omap",{
            kind: "sequence",
            resolve: function(e) {
                if (null === e)
                    return !0;
                var t, n, i, o, a, u = [], c = e;
                for (t = 0,
                n = c.length; t < n; t += 1) {
                    if (i = c[t],
                    a = !1,
                    "[object Object]" !== s.call(i))
                        return !1;
                    for (o in i)
                        if (r.call(i, o)) {
                            if (a)
                                return !1;
                            a = !0
                        }
                    if (!a)
                        return !1;
                    if (-1 !== u.indexOf(o))
                        return !1;
                    u.push(o)
                }
                return !0
            },
            construct: function(e) {
                return null !== e ? e : []
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/pairs.js": /*!********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/pairs.js ***!
  \********************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js")
          , r = Object.prototype.toString;
        e.exports = new i("tag:yaml.org,2002:pairs",{
            kind: "sequence",
            resolve: function(e) {
                if (null === e)
                    return !0;
                var t, n, i, s, o, a = e;
                for (o = new Array(a.length),
                t = 0,
                n = a.length; t < n; t += 1) {
                    if (i = a[t],
                    "[object Object]" !== r.call(i))
                        return !1;
                    if (1 !== (s = Object.keys(i)).length)
                        return !1;
                    o[t] = [s[0], i[s[0]]]
                }
                return !0
            },
            construct: function(e) {
                if (null === e)
                    return [];
                var t, n, i, r, s, o = e;
                for (s = new Array(o.length),
                t = 0,
                n = o.length; t < n; t += 1)
                    i = o[t],
                    r = Object.keys(i),
                    s[t] = [r[0], i[r[0]]];
                return s
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/seq.js": /*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/seq.js ***!
  \******************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        e.exports = new i("tag:yaml.org,2002:seq",{
            kind: "sequence",
            construct: function(e) {
                return null !== e ? e : []
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/set.js": /*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/set.js ***!
  \******************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js")
          , r = Object.prototype.hasOwnProperty;
        e.exports = new i("tag:yaml.org,2002:set",{
            kind: "mapping",
            resolve: function(e) {
                if (null === e)
                    return !0;
                var t, n = e;
                for (t in n)
                    if (r.call(n, t) && null !== n[t])
                        return !1;
                return !0
            },
            construct: function(e) {
                return null !== e ? e : {}
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/str.js": /*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/str.js ***!
  \******************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js");
        e.exports = new i("tag:yaml.org,2002:str",{
            kind: "scalar",
            construct: function(e) {
                return null !== e ? e : ""
            }
        })
    },
    "./node_modules/js-yaml/lib/js-yaml/type/timestamp.js": /*!************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/timestamp.js ***!
  \************************************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = n(/*! ../type */
        "./node_modules/js-yaml/lib/js-yaml/type.js")
          , r = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$")
          , s = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
        e.exports = new i("tag:yaml.org,2002:timestamp",{
            kind: "scalar",
            resolve: function(e) {
                return null !== e && (null !== r.exec(e) || null !== s.exec(e))
            },
            construct: function(e) {
                var t, n, i, o, a, u, c, h, l = 0, p = null;
                if (null === (t = r.exec(e)) && (t = s.exec(e)),
                null === t)
                    throw new Error("Date resolve error");
                if (n = +t[1],
                i = +t[2] - 1,
                o = +t[3],
                !t[4])
                    return new Date(Date.UTC(n, i, o));
                if (a = +t[4],
                u = +t[5],
                c = +t[6],
                t[7]) {
                    for (l = t[7].slice(0, 3); l.length < 3; )
                        l += "0";
                    l = +l
                }
                return t[9] && (p = 6e4 * (60 * +t[10] + +(t[11] || 0)),
                "-" === t[9] && (p = -p)),
                h = new Date(Date.UTC(n, i, o, a, u, c, l)),
                p && h.setTime(h.getTime() - p),
                h
            },
            instanceOf: Date,
            represent: function(e) {
                return e.toISOString()
            }
        })
    },
    "./node_modules/process/browser.js": /*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
    /*! no static exports found */
    function(e, t) {
        var n, i, r = e.exports = {};
        function s() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === s || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : s
            } catch (e) {
                n = s
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (e) {
                i = o
            }
        }();
        var u, c = [], h = !1, l = -1;
        function p() {
            h && u && (h = !1,
            u.length ? c = u.concat(c) : l = -1,
            c.length && f())
        }
        function f() {
            if (!h) {
                var e = a(p);
                h = !0;
                for (var t = c.length; t; ) {
                    for (u = c,
                    c = []; ++l < t; )
                        u && u[l].run();
                    l = -1,
                    t = c.length
                }
                u = null,
                h = !1,
                function(e) {
                    if (i === clearTimeout)
                        return clearTimeout(e);
                    if ((i === o || !i) && clearTimeout)
                        return i = clearTimeout,
                        clearTimeout(e);
                    try {
                        i(e)
                    } catch (t) {
                        try {
                            return i.call(null, e)
                        } catch (t) {
                            return i.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function d(e, t) {
            this.fun = e,
            this.array = t
        }
        function m() {}
        r.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            c.push(new d(e,t)),
            1 !== c.length || h || a(f)
        }
        ,
        d.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = m,
        r.addListener = m,
        r.once = m,
        r.off = m,
        r.removeListener = m,
        r.removeAllListeners = m,
        r.emit = m,
        r.prependListener = m,
        r.prependOnceListener = m,
        r.listeners = function(e) {
            return []
        }
        ,
        r.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    },
    "./node_modules/setimmediate/setImmediate.js": /*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
    /*! no static exports found */
    function(e, t, n) {
        (function(e, t) {
            !function(e, n) {
                "use strict";
                if (!e.setImmediate) {
                    var i, r, s, o, a, u = 1, c = {}, h = !1, l = e.document, p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    p = p && p.setTimeout ? p : e,
                    "[object process]" === {}.toString.call(e.process) ? i = function(e) {
                        t.nextTick(function() {
                            d(e)
                        })
                    }
                    : !function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0
                              , n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }
                            ,
                            e.postMessage("", "*"),
                            e.onmessage = n,
                            t
                        }
                    }() ? e.MessageChannel ? ((s = new MessageChannel).port1.onmessage = function(e) {
                        d(e.data)
                    }
                    ,
                    i = function(e) {
                        s.port2.postMessage(e)
                    }
                    ) : l && "onreadystatechange"in l.createElement("script") ? (r = l.documentElement,
                    i = function(e) {
                        var t = l.createElement("script");
                        t.onreadystatechange = function() {
                            d(e),
                            t.onreadystatechange = null,
                            r.removeChild(t),
                            t = null
                        }
                        ,
                        r.appendChild(t)
                    }
                    ) : i = function(e) {
                        setTimeout(d, 0, e)
                    }
                    : (o = "setImmediate$" + Math.random() + "$",
                    a = function(t) {
                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(o) && d(+t.data.slice(o.length))
                    }
                    ,
                    e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                    i = function(t) {
                        e.postMessage(o + t, "*")
                    }
                    ),
                    p.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                            t[n] = arguments[n + 1];
                        var r = {
                            callback: e,
                            args: t
                        };
                        return c[u] = r,
                        i(u),
                        u++
                    }
                    ,
                    p.clearImmediate = f
                }
                function f(e) {
                    delete c[e]
                }
                function d(e) {
                    if (h)
                        setTimeout(d, 0, e);
                    else {
                        var t = c[e];
                        if (t) {
                            h = !0;
                            try {
                                !function(e) {
                                    var t = e.callback
                                      , i = e.args;
                                    switch (i.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(i[0]);
                                        break;
                                    case 2:
                                        t(i[0], i[1]);
                                        break;
                                    case 3:
                                        t(i[0], i[1], i[2]);
                                        break;
                                    default:
                                        t.apply(n, i)
                                    }
                                }(t)
                            } finally {
                                f(e),
                                h = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }
        ).call(this, n(/*! ./../webpack/buildin/global.js */
        "./node_modules/webpack/buildin/global.js"), n(/*! ./../process/browser.js */
        "./node_modules/process/browser.js"))
    },
    "./node_modules/timers-browserify/main.js": /*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
    /*! no static exports found */
    function(e, t, n) {
        (function(e) {
            var i = void 0 !== e && e || "undefined" != typeof self && self || window
              , r = Function.prototype.apply;
            function s(e, t) {
                this._id = e,
                this._clearFn = t
            }
            t.setTimeout = function() {
                return new s(r.call(setTimeout, i, arguments),clearTimeout)
            }
            ,
            t.setInterval = function() {
                return new s(r.call(setInterval, i, arguments),clearInterval)
            }
            ,
            t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            }
            ,
            s.prototype.unref = s.prototype.ref = function() {}
            ,
            s.prototype.close = function() {
                this._clearFn.call(i, this._id)
            }
            ,
            t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = t
            }
            ,
            t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = -1
            }
            ,
            t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }
            ,
            n(/*! setimmediate */
            "./node_modules/setimmediate/setImmediate.js"),
            t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
            t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }
        ).call(this, n(/*! ./../webpack/buildin/global.js */
        "./node_modules/webpack/buildin/global.js"))
    },
    "./node_modules/webpack/buildin/global.js": /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
    /*! no static exports found */
    function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    "./src/app.ts": /*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(/*! ./gui/guiGame */
        "./src/gui/guiGame.ts")
          , o = n(/*! ./i18n/localization */
        "./src/i18n/localization.ts")
          , a = n(/*! ./gameEngine */
        "./src/gameEngine.ts")
          , u = n(/*! ./gui/textEngine */
        "./src/gui/textEngine.ts");
        new (function() {
            function e(e, t) {
                this._ldict = new o.LocalizationDictionary,
                this._config = Object.assign({}, t),
                this._ldict = new o.LocalizationDictionary;
                var n = new a.GameActionProxy;
                this._gameEngine = new a.GameEngine(t,n);
                var i = new u.SimpleGameTextEngine(this._ldict,this._gameEngine.gameState);
                this._gui = new s.GuiGameWindow(e,i,this._gameEngine),
                n.attachGui(this._gui)
            }
            return e.prototype.start = function() {
                return i(this, void 0, void 0, function() {
                    var e, t = this;
                    return r(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, this._ldict.loadFrom(this._config.languageFileUrl)];
                        case 1:
                            return n.sent(),
                            this._gui.updateUIText(),
                            [4, this._gameEngine.start()];
                        case 2:
                            return n.sent(),
                            (e = function() {
                                setTimeout(function() {
                                    return t._gameEngine.step().then(e)
                                }, 50)
                            }
                            )(),
                            [2]
                        }
                    })
                })
            }
            ,
            e
        }())(document.body,{
            languageFileUrl: "rulesets/default/lang.yaml",
            itemDefinitionUrl: "rulesets/default/items.yaml",
            statusDefinitionUrl: "rulesets/default/status.yaml",
            eventDefinitionUrl: "rulesets/default/events.yaml"
        }).start().then(function() {
            console.log("App started successfully.")
        })
    },
    "./src/effect/effect.ts": /*!******************************!*\
  !*** ./src/effect/effect.ts ***!
  \******************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.loadEffectCollectionFromJSON = function(e) {
            var t = {};
            for (var n in e)
                if (e[n]) {
                    if (t[n])
                        throw new Error('Duplicate definition for "' + n + '".');
                    if ("boolean" != typeof e[n].relative)
                        throw new Error("Missing relative/absolute definition.");
                    if ("number" != typeof e[n].amount)
                        throw new Error("Missing amount.");
                    t[n] = {
                        relative: e[n].relative,
                        amount: e[n].amount
                    }
                }
            return t
        }
        ;
        var i = function() {
            function e() {
                this._registry = {}
            }
            return e.prototype.add = function(e) {
                if (this._registry[e.id] && this._registry[e.id] !== e)
                    throw new Error("Cannot register two different items under the same id.");
                this._registry[e.id] = e
            }
            ,
            e.prototype.has = function(e) {
                return "string" == typeof e ? void 0 != this._registry[e] : this._registry[e.id] === e
            }
            ,
            e.prototype.get = function(e) {
                if (!this.has(e))
                    throw new Error('Id "' + e + '" does not exist.');
                return this._registry[e]
            }
            ,
            e
        }();
        t.EffectProviderRegistry = i;
        var r = function() {
            return function(e, t, n, i) {
                this.clear = e,
                this.item = t,
                this.oldCount = n,
                this.newCount = i
            }
        }();
        t.EffectProviderCollectionChangedEvent = r;
        var s = function() {
            function e(e) {
                this._items = {},
                this._registry = e
            }
            return Object.defineProperty(e.prototype, "maxStackSize", {
                get: function() {
                    return 1 / 0
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "items", {
                get: function() {
                    return this._items
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.add = function(e, t) {
                if (void 0 === t && (t = 1),
                "string" == typeof e && (e = this._registry.get(e)),
                t < 0 || Math.floor(t) !== t)
                    throw new Error("Count must be a positive integer.");
                if (void 0 == this._items[e.id])
                    this._items[e.id] = [e, t],
                    this.dispatchChangeEvent(new r(!1,e,0,t));
                else {
                    var n = this._items[e.id][1];
                    this._items[e.id][1] += t,
                    this._items[e.id][1] > this.maxStackSize && (this._items[e.id][1] = this.maxStackSize),
                    this.dispatchChangeEvent(new r(!1,e,this._items[e.id][1],n))
                }
            }
            ,
            e.prototype.remove = function(e, t) {
                if (void 0 === t && (t = 1),
                "string" == typeof e && (e = this._registry.get(e)),
                t < 0 || Math.floor(t) !== t)
                    throw new Error("Count must be a positive integer.");
                if (void 0 != this._items[e.id]) {
                    var n = this._items[e.id][1];
                    this._items[e.id][1] -= t,
                    this._items[e.id][1] <= 0 ? (delete this._items[e.id],
                    this.dispatchChangeEvent(new r(!1,e,0,n))) : this.dispatchChangeEvent(new r(!1,e,this._items[e.id][1],n))
                }
            }
            ,
            e.prototype.clear = function() {
                this.dispatchChangeEvent(new r(!0,void 0,0,0)),
                this._items = {}
            }
            ,
            e.prototype.count = function(e) {
                return "string" == typeof e && (e = this._registry.get(e)),
                this._items[e.id] ? this.items[e.id][1] : 0
            }
            ,
            e.prototype.calcCombinedEffectValue = function(e) {
                var t = 0
                  , n = 1;
                for (var i in this._items) {
                    var r = this._items[i]
                      , s = r[0].getEffects();
                    if (e in s) {
                        var o = s[e];
                        o.relative ? n += Math.pow(o.amount + 1, r[1]) : t += o.amount * r[1]
                    }
                }
                return [t, n]
            }
            ,
            e.prototype.dispatchChangeEvent = function(e) {
                this.onChanged && this.onChanged(this, e)
            }
            ,
            e
        }();
        t.EffectProviderCollection = s
    },
    "./src/effect/item.ts": /*!****************************!*\
  !*** ./src/effect/item.ts ***!
  \****************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), s = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
        , o = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(/*! ./effect */
        "./src/effect/effect.ts")
          , u = n(/*! ../utils/network */
        "./src/utils/network.ts")
          , c = n(/*! js-yaml */
        "./node_modules/js-yaml/index.js")
          , h = function() {
            function e(e, t, n, i) {
                void 0 === n && (n = ""),
                void 0 === i && (i = {}),
                this._id = e,
                this._rarity = t,
                this._icon = n,
                this._effects = i
            }
            return Object.defineProperty(e.prototype, "id", {
                get: function() {
                    return this._id
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "unlocalizedName", {
                get: function() {
                    return "item." + this.id
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "unlocalizedDescription", {
                get: function() {
                    return this.unlocalizedName + ".description"
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "rarity", {
                get: function() {
                    return this._rarity
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "icon", {
                get: function() {
                    return this._icon
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getEffects = function() {
                return this._effects
            }
            ,
            e
        }();
        t.Item = h;
        var l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.loadItems = function(e) {
                return s(this, void 0, void 0, function() {
                    var t, n, i, r, s, l, p, f;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, u.downloadAndParse(e, c.safeLoad)];
                        case 1:
                            if (!(t = o.sent()))
                                return [2];
                            if (!Array.isArray(t.items))
                                throw new Error("Expecting an array of item definitions.");
                            for (n = t.items,
                            i = 0,
                            r = n; i < r.length; i++) {
                                if ("string" != typeof (s = r[i]).id)
                                    throw new Error("Missing item id.");
                                l = void 0,
                                l = void 0 != s.effects ? a.loadEffectCollectionFromJSON(s.effects) : {},
                                p = "number" == typeof s.rarity ? s.rarity : 0,
                                f = "string" == typeof s.icon ? s.icon : 0,
                                this.add(new h(s.id,p,f,l))
                            }
                            return [2]
                        }
                    })
                })
            }
            ,
            t
        }(a.EffectProviderRegistry);
        t.ItemRegistry = l;
        var p = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t
        }(a.EffectProviderCollection);
        t.Inventory = p
    },
    "./src/effect/status.ts": /*!******************************!*\
  !*** ./src/effect/status.ts ***!
  \******************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), s = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
        , o = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(/*! ./effect */
        "./src/effect/effect.ts")
          , u = n(/*! js-yaml */
        "./node_modules/js-yaml/index.js")
          , c = n(/*! ../utils/network */
        "./src/utils/network.ts")
          , h = function() {
            function e(e, t, n, i) {
                void 0 === n && (n = ""),
                void 0 === i && (i = {}),
                this._id = e,
                this._duration = t,
                this._icon = n,
                this._effects = i
            }
            return Object.defineProperty(e.prototype, "id", {
                get: function() {
                    return this._id
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "unlocalizedName", {
                get: function() {
                    return "status." + this.id
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "unlocalizedDescription", {
                get: function() {
                    return this.unlocalizedName + ".description"
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "icon", {
                get: function() {
                    return this._icon
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "duration", {
                get: function() {
                    return this._duration
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getEffects = function() {
                return this._effects
            }
            ,
            e
        }();
        t.Status = h;
        var l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.loadStatus = function(e) {
                return s(this, void 0, void 0, function() {
                    var t, n, i, r, s, l, p, f;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, c.downloadAndParse(e, u.safeLoad)];
                        case 1:
                            if (!(t = o.sent()))
                                return [2];
                            if (!Array.isArray(t.status))
                                throw new Error("Expecting an array of status definitions.");
                            for (n = t.status,
                            i = 0,
                            r = n; i < r.length; i++) {
                                if ("string" != typeof (s = r[i]).id)
                                    throw new Error("Missing item id.");
                                l = void 0,
                                l = void 0 != s.effects ? a.loadEffectCollectionFromJSON(s.effects) : {},
                                p = "number" == typeof s.duration ? s.duration : 1 / 0,
                                f = "string" == typeof s.icon ? s.icon : 0,
                                this.add(new h(s.id,p,f,l))
                            }
                            return [2]
                        }
                    })
                })
            }
            ,
            t
        }(a.EffectProviderRegistry);
        t.StatusRegistry = l;
        var p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._remainingTicks = {},
                t
            }
            return r(t, e),
            t.prototype.add = function(e, t) {
                if (void 0 === t && (t = 1),
                "string" == typeof e && (e = this._registry.get(e)),
                1 !== t)
                    throw new Error("Count must be one.");
                void 0 == this._items[e.id] && (this._items[e.id] = [e, 1],
                this._remainingTicks[e.id] = e.duration,
                this.dispatchChangeEvent(new a.EffectProviderCollectionChangedEvent(!1,e,0,1))),
                this._remainingTicks[e.id] = e.duration
            }
            ,
            t.prototype.remove = function(e, t) {
                if (void 0 === t && (t = 1),
                "string" == typeof e && (e = this._registry.get(e)),
                1 !== t)
                    throw new Error("Count must be one.");
                void 0 != this._items[e.id] && (delete this._items[e.id],
                delete this._remainingTicks[e.id],
                this.dispatchChangeEvent(new a.EffectProviderCollectionChangedEvent(!1,e,0,1)))
            }
            ,
            t.prototype.clear = function() {
                e.prototype.clear.call(this),
                this._remainingTicks = {}
            }
            ,
            t.prototype.tick = function() {
                var e = [];
                for (var t in this._remainingTicks)
                    --this._remainingTicks[t],
                    0 === this._remainingTicks[t] && e.push(t);
                for (var n = 0, i = e; n < i.length; n++) {
                    t = i[n];
                    this.remove(t)
                }
            }
            ,
            t
        }(a.EffectProviderCollection);
        t.StatusTable = p
    },
    "./src/event/actions.ts": /*!******************************!*\
  !*** ./src/event/actions.ts ***!
  \******************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), s = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
        , o = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(/*! ../gameState */
        "./src/gameState.ts")
          , u = n(/*! ./core */
        "./src/event/core.ts")
          , c = n(/*! ../utils/random */
        "./src/utils/random.ts")
          , h = function() {
            function e(e) {
                this._deserializers = {},
                this._exprCompiler = e
            }
            return e.prototype.registerDeserializer = function(e) {
                this._deserializers[e.ID] = e.fromJSONObject
            }
            ,
            e.prototype.fromJSONObject = function(e) {
                if (!e.id)
                    throw new Error("Action id is not specified.");
                if (!this._deserializers[e.id])
                    throw new Error('Cannot construct the event action for "' + e.id + '".');
                return this._deserializers[e.id](e, this, this._exprCompiler)
            }
            ,
            e.prototype.fromJSONArray = function(e) {
                for (var t = new Array(e.length), n = 0; n < e.length; n++)
                    t[n] = this.fromJSONObject(e[n]);
                return t
            }
            ,
            e
        }();
        t.EventActionFactory = h;
        var l = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n._message = t,
                n
            }
            return r(t, e),
            t.fromJSONObject = function(e, n) {
                if (void 0 == e.message)
                    throw new Error("Message missing.");
                return new t(e.message)
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var e = this;
                    return o(this, function(t) {
                        return [2, new Promise(function(t) {
                            console.log(e._message),
                            t()
                        }
                        )]
                    })
                })
            }
            ,
            t.ID = "Log",
            t
        }(u.EventAction);
        t.EALog = l;
        var p = function(e) {
            function t(t, n, i) {
                var r = e.call(this) || this;
                return r._message = t,
                r._confirm = n,
                r._icon = i,
                r
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if (void 0 == e.message)
                    throw new Error("Message missing.");
                if (void 0 == e.confirm)
                    throw new Error("Confirm message missing.");
                return new t(e.message,e.confirm,e.icon || "")
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    return o(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, t.displayMessage(this._message, this._confirm, this._icon)];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            t.ID = "DisplayMessage",
            t
        }(u.EventAction);
        t.EADisplayMessage = p;
        var f = function(e) {
            function t(t, n, i) {
                var r = e.call(this) || this;
                return r._messages = t,
                r._confirm = n,
                r._icon = i,
                r
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if (!Array.isArray(e.messages))
                    throw new Error("Messages missing.");
                if ("string" != typeof e.confirm)
                    throw new Error("Confirm message missing.");
                return new t(e.messages,e.confirm,e.icon || "")
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var e;
                    return o(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return e = Math.floor(Math.random() * this._messages.length),
                            [4, t.displayMessage(this._messages[e], this._confirm, this._icon)];
                        case 1:
                            return n.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            t.ID = "DisplayRandomMessage",
            t
        }(u.EventAction);
        t.EADisplayRandomMessage = f;
        var d = function(e) {
            function t(t, n, i, r, s) {
                var o = e.call(this) || this;
                if (o._message = t,
                o._choiceMessages = n,
                o._requirements = i,
                o._actions = r,
                o._icon = s,
                n.length !== i.length || n.length !== r.length)
                    throw new Error("The number of choices must be equal to the number of requirements/actions.");
                return o
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if (void 0 == e.message)
                    throw new Error("Message missing.");
                if (!Array.isArray(e.choices))
                    throw new Error("Choices are missing.");
                for (var r = [], s = [], o = [], a = 0, u = e.choices; a < u.length; a++) {
                    var c = u[a];
                    if (void 0 == c.message)
                        throw new Error("Missing message for the current choice.");
                    r.push(c.message);
                    var h = Array.isArray(c.actions) ? n.fromJSONArray(c.actions) : [];
                    o.push(h),
                    void 0 != c.requirement ? s.push(i.compile(c.requirement)) : s.push(i.compile("true"))
                }
                return new t(e.message,r,s,o,e.icon || "")
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var i, r, s, a, u, c;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            for (i = [],
                            r = 0; r < this._choiceMessages.length; r++)
                                n.eval(this._requirements[r]) && i.push([this._choiceMessages[r], r]);
                            return [4, t.displayChoices(this._message, i, this._icon)];
                        case 1:
                            s = o.sent(),
                            a = this._actions[s],
                            u = 0,
                            c = a,
                            o.label = 2;
                        case 2:
                            return u < c.length ? [4, c[u].execute(e, t, n)] : [3, 5];
                        case 3:
                            o.sent(),
                            o.label = 4;
                        case 4:
                            return u++,
                            [3, 2];
                        case 5:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.ID = "DisplayChoices",
            t
        }(u.EventAction);
        t.EADisplayChoices = d;
        var m = function(e) {
            function t(t, n) {
                var i = e.call(this) || this;
                if (t.length !== n.length)
                    throw new Error("The number of weights must match the number of actions.");
                return i._actions = t,
                i._weightExprs = n,
                i
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if (!Array.isArray(e.groups))
                    throw new Error("Missing group definitions.");
                for (var r = [], s = [], o = 0, a = e.groups; o < a.length; o++) {
                    var u = a[o]
                      , c = u.weight;
                    if (void 0 == c)
                        throw new Error("Missing weight definition.");
                    if ("string" != typeof c && "number" != typeof c)
                        throw new Error("Weight must be a number or an expression.");
                    if (!Array.isArray(u.actions))
                        throw new Error("Missing actions.");
                    r.push(i.compile(c)),
                    s.push(n.fromJSONArray(u.actions))
                }
                return new t(s,r)
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var i, r, s;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            i = c.weightedSample(this._weightExprs.map(function(e) {
                                return n.eval(e)
                            })),
                            r = 0,
                            s = this._actions[i],
                            o.label = 1;
                        case 1:
                            return r < s.length ? [4, s[r].execute(e, t, n)] : [3, 4];
                        case 2:
                            o.sent(),
                            o.label = 3;
                        case 3:
                            return r++,
                            [3, 1];
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.ID = "Random",
            t
        }(u.EventAction);
        t.EARandom = m;
        var y = function(e) {
            function t(t, n, i) {
                var r = e.call(this) || this;
                return r._p = t,
                r._successActions = n,
                r._failActions = i,
                r
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                var r = e.probability;
                if ("string" != typeof r && "number" != typeof r)
                    throw new Error("Probability must be a number of an expression.");
                var s = Array.isArray(e.success) ? n.fromJSONArray(e.success) : []
                  , o = Array.isArray(e.fail) ? n.fromJSONArray(e.fail) : [];
                return new t(i.compile(r),s,o)
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var i, r, s, a, u;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            if ((i = n.eval(this._p)) < 0 && (i = 0),
                            !(Math.random() < i))
                                return [3, 5];
                            r = 0,
                            s = this._successActions,
                            o.label = 1;
                        case 1:
                            return r < s.length ? [4, s[r].execute(e, t, n)] : [3, 4];
                        case 2:
                            o.sent(),
                            o.label = 3;
                        case 3:
                            return r++,
                            [3, 1];
                        case 4:
                            return [3, 9];
                        case 5:
                            a = 0,
                            u = this._failActions,
                            o.label = 6;
                        case 6:
                            return a < u.length ? [4, u[a].execute(e, t, n)] : [3, 9];
                        case 7:
                            o.sent(),
                            o.label = 8;
                        case 8:
                            return a++,
                            [3, 6];
                        case 9:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.ID = "CoinFlip",
            t
        }(u.EventAction);
        t.EACoinFlip = y;
        var g = function(e) {
            function t(t, n) {
                var i = e.call(this) || this;
                return i._conditions = t,
                i._actions = n,
                i
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                var r = e.branches;
                if (!Array.isArray(r))
                    throw new Error("Expecting an array of branches.");
                for (var s = [], o = [], a = 0, u = r; a < u.length; a++) {
                    var c = u[a];
                    if (!c.condition)
                        throw new Error("Condition is required.");
                    var h = c.condition;
                    if ("string" != typeof h && "number" != typeof h)
                        throw new Error("Condition must be either an expression or a number.");
                    if (s.push(i.compile(h)),
                    !Array.isArray(c.actions))
                        throw new Error("Missing actions.");
                    o.push(n.fromJSONArray(c.actions))
                }
                return new t(s,o)
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var i, r, s;
                    return o(this, function(o) {
                        switch (o.label) {
                        case 0:
                            i = 0,
                            o.label = 1;
                        case 1:
                            if (!(i < this._conditions.length))
                                return [3, 7];
                            if (!n.eval(this._conditions[i]))
                                return [3, 6];
                            r = 0,
                            s = this._actions[i],
                            o.label = 2;
                        case 2:
                            return r < s.length ? [4, s[r].execute(e, t, n)] : [3, 5];
                        case 3:
                            o.sent(),
                            o.label = 4;
                        case 4:
                            return r++,
                            [3, 2];
                        case 5:
                            return [3, 7];
                        case 6:
                            return i++,
                            [3, 1];
                        case 7:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.ID = "Switch",
            t
        }(u.EventAction);
        t.EASwtich = g;
        var x = function(e) {
            function t(t, n) {
                var i = e.call(this) || this;
                return i._varName = t,
                i._updateExpr = n,
                i
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if (!e.variable)
                    throw new Error("Missing variable name.");
                if (void 0 == e.value)
                    throw new Error("Missing value.");
                var r = e.value;
                if ("number" != typeof r && "string" != typeof r)
                    throw new Error("Value must be either a number of a string.");
                return new t(e.variable,i.compile(r))
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return e.setVar(this._varName, n.eval(this._updateExpr), !1),
                        [2]
                    })
                })
            }
            ,
            t.ID = "UpdateVariable",
            t
        }(u.EventAction);
        t.EAUpdateVariable = x;
        var v = function(e) {
            function t(t, n) {
                var i = e.call(this) || this;
                if (i._varNames = t,
                i._updateExprs = n,
                t.length !== n.length)
                    throw new Error("The number of variables must be equal to the number of expressions.");
                return i
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if (!e.updates)
                    throw new Error("Missing update definitions.");
                var r = []
                  , s = [];
                for (var o in e.updates)
                    r.push(o),
                    s.push(i.compile(e.updates[o]));
                return new t(r,s)
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(i) {
                        for (t = 0; t < this._varNames.length; t++)
                            e.setVar(this._varNames[t], n.eval(this._updateExprs[t]));
                        return [2]
                    })
                })
            }
            ,
            t.ID = "UpdateVariables",
            t
        }(u.EventAction);
        t.EAUpdateVariables = v;
        var D = function(e) {
            function t(t, n) {
                var i = e.call(this) || this;
                return i._itemId = t,
                i._amountExpr = n,
                i
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if (void 0 == e.itemId)
                    throw new Error("Missing item id.");
                if ("string" != typeof e.amount && "number" != typeof e.amount)
                    throw new Error("Amount must be a number or an expression.");
                return new t(e.itemId,i.compile(e.amount))
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(i) {
                        return (t = n.eval(this._amountExpr)) > 0 ? e.playerInventory.add(this._itemId, t) : t < 0 && e.playerInventory.remove(this._itemId, -t),
                        [2]
                    })
                })
            }
            ,
            t.ID = "GiveItem",
            t
        }(u.EventAction);
        t.EAGiveItem = D;
        var E = function(e) {
            function t(t, n) {
                var i = e.call(this) || this;
                if (i._itemIds = t,
                i._updateExprs = n,
                t.length !== n.length)
                    throw new Error("The number of items must match the number of expressions.");
                return i
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if (void 0 == e.updates)
                    throw new Error("Missing update definitions.");
                var r = []
                  , s = [];
                for (var o in e.updates)
                    r.push(o),
                    s.push(i.compile(e.updates[o]));
                return new t(r,s)
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var t, i;
                    return o(this, function(r) {
                        for (t = 0; t < this._itemIds.length; t++)
                            (i = n.eval(this._updateExprs[t])) > 0 ? e.playerInventory.add(this._itemIds[t], i) : i < 0 && e.playerInventory.remove(this._itemIds[t], -i);
                        return [2]
                    })
                })
            }
            ,
            t.ID = "UpdateItemAmounts",
            t
        }(u.EventAction);
        t.EAUpdateItemAmounts = E;
        var A = function(e) {
            function t(t, n, i, r) {
                var s = e.call(this) || this;
                return s._message = t,
                s._confirm = n,
                s._winning = i,
                s._fx = r,
                s
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if ("string" != typeof e.message)
                    throw new Error("Missing message.");
                if ("string" != typeof e.confirm)
                    throw new Error("Missing confirm message.");
                if ("boolean" != typeof e.winning)
                    throw new Error("Missing winning status.");
                if (e.fx && "string" != typeof e.fx)
                    throw new Error("FX must be a string.");
                return new t(e.message,e.confirm,e.winning,e.fx)
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    return o(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, t.displayMessage(this._message, this._confirm, "", this._fx)];
                        case 1:
                            return n.sent(),
                            e.endGameState = this._winning ? a.EndGameState.Winning : a.EndGameState.Losing,
                            [2]
                        }
                    })
                })
            }
            ,
            t.ID = "EndGame",
            t
        }(u.EventAction);
        t.EAEndGame = A;
        var w = function(e) {
            function t(t, n) {
                var i = e.call(this) || this;
                return i._statusId = t,
                i._on = n,
                i
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if ("string" != typeof e.statusId)
                    throw new Error("Missing status id.");
                if ("boolean" != typeof e.on)
                    throw new Error("Missing on/off indicator.");
                return new t(e.statusId,e.on)
            }
            ,
            t.prototype.execute = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        return this._on ? e.playerStatus.add(this._statusId) : e.playerStatus.remove(this._statusId),
                        [2]
                    })
                })
            }
            ,
            t.ID = "SetStatus",
            t
        }(u.EventAction);
        t.EASetStatus = w
    },
    "./src/event/conditions.ts": /*!*********************************!*\
  !*** ./src/event/conditions.ts ***!
  \*********************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(/*! ./core */
        "./src/event/core.ts")
          , o = function() {
            function e(e) {
                this._converters = {},
                this._exprCompiler = e
            }
            return e.prototype.registerDeserializer = function(e) {
                this._converters[e.ID] = e.fromJSONObject
            }
            ,
            e.prototype.fromJSONObject = function(e) {
                if (!e.id)
                    throw new Error("Condition id is not specified.");
                if (!this._converters[e.id])
                    throw new Error('Cannot construct the event condition for "' + e.id + '".');
                return this._converters[e.id](e, this, this._exprCompiler)
            }
            ,
            e
        }();
        t.EventConditionFactory = o;
        var a = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n._expression = t,
                n
            }
            return r(t, e),
            t.fromJSONObject = function(e, n, i) {
                if (void 0 == e.expression || "string" != typeof e.expression)
                    throw new Error("Missing expression.");
                return new t(i.compile(e.expression))
            }
            ,
            t.prototype.check = function(e, t) {
                return !!t.eval(this._expression)
            }
            ,
            t.ID = "Expression",
            t
        }(s.EventCondition);
        t.ECExpression = a;
        var u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._conditions = [],
                t
            }
            return r(t, e),
            t.prototype.check = function(e, t) {
                for (var n = 0, i = this._conditions; n < i.length; n++) {
                    if (!i[n].check(e, t))
                        return !1
                }
                return !0
            }
            ,
            t
        }(s.EventCondition);
        t.ECAll = u;
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._conditions = [],
                t
            }
            return r(t, e),
            t.prototype.check = function(e, t) {
                for (var n = 0, i = this._conditions; n < i.length; n++) {
                    if (i[n].check(e, t))
                        return !0
                }
                return !1
            }
            ,
            t
        }(s.EventCondition);
        t.EAAny = c
    },
    "./src/event/core.ts": /*!***************************!*\
  !*** ./src/event/core.ts ***!
  \***************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e() {}
            return e.prototype.execute = function(e, t, n) {
                return i(this, void 0, void 0, function() {
                    return r(this, function(e) {
                        throw new Error("Not implemented.")
                    })
                })
            }
            ,
            e
        }();
        t.EventAction = s;
        var o = function() {
            function e() {}
            return e.prototype.check = function(e, t) {
                throw new Error("Not implemented.")
            }
            ,
            e
        }();
        t.EventCondition = o;
        var a = function() {
            function e(e, t, n, i, r, s, o) {
                void 0 === n && (n = []),
                void 0 === i && (i = []),
                void 0 === r && (r = 1),
                void 0 === s && (s = []),
                void 0 === o && (o = !1),
                this._id = e,
                this._trigger = t,
                this._conditions = n,
                this._actions = i,
                this._probability = r,
                this._exclusions = s,
                this._once = o
            }
            return Object.defineProperty(e.prototype, "id", {
                get: function() {
                    return this._id
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "trigger", {
                get: function() {
                    return this._trigger
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "conditions", {
                get: function() {
                    return this._conditions
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "actions", {
                get: function() {
                    return this._actions
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "probability", {
                get: function() {
                    return this._probability
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "exclusions", {
                get: function() {
                    return this._exclusions
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "once", {
                get: function() {
                    return this._once
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }();
        t.GameEvent = a
    },
    "./src/event/engine.ts": /*!*****************************!*\
  !*** ./src/event/engine.ts ***!
  \*****************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(/*! ../gameState */
        "./src/gameState.ts")
          , o = function() {
            function e(e, t, n) {
                this._events = {},
                this._eventIdMap = {},
                this.onActionExecuted = void 0,
                this._gameState = e,
                this._actionProxy = t,
                this._exprEngine = n
            }
            return e.prototype.enableAll = function() {
                for (var e in this._eventIdMap)
                    this._eventIdMap[e][1] = !1
            }
            ,
            e.prototype.registerEvents = function(e) {
                for (var t = 0, n = e; t < n.length; t++) {
                    var i = n[t];
                    this.registerEvent(i)
                }
            }
            ,
            e.prototype.registerEvent = function(e) {
                if (this._eventIdMap[e.id])
                    throw new Error('Event "' + e.id + '" is already registered.');
                this._events[e.trigger] || (this._events[e.trigger] = []),
                this._events[e.trigger].push(e),
                this._eventIdMap[e.id] = [e, !1]
            }
            ,
            e.prototype.unregisterEvent = function(e) {
                this._eventIdMap[e.id] && (this._events[e.trigger].splice(this._events[e.trigger].indexOf(e), 1),
                delete this._eventIdMap[e.id])
            }
            ,
            e.prototype.trigger = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n, i, s, o, a, u, c, h, l, p, f, d;
                    return r(this, function(r) {
                        switch (r.label) {
                        case 0:
                            if (0 === e.length)
                                throw new Error("Trigger id cannot be empty.");
                            if (!(t = this._events[e]))
                                return [2];
                            n = {},
                            i = !1,
                            s = 0,
                            o = t,
                            r.label = 1;
                        case 1:
                            if (!(s < o.length))
                                return [3, 4];
                            if (a = o[s],
                            i)
                                return [3, 4];
                            if (this._eventIdMap[a.id][1])
                                return [3, 3];
                            if (n[a.id])
                                return [3, 3];
                            for (u = !1,
                            c = 0,
                            h = a.conditions; c < h.length; c++)
                                if (!h[c].check(this._gameState, this._exprEngine)) {
                                    u = !0;
                                    break
                                }
                            if (u)
                                return [3, 3];
                            if (l = "number" == typeof a.probability ? a.probability : this._exprEngine.eval(a.probability),
                            Math.random() > l)
                                return [3, 3];
                            for (p = 0,
                            f = a.exclusions; p < f.length; p++)
                                d = f[p],
                                n[d] = !0;
                            return void 0 == this._gameState.occurredEvents[a.id] && (this._gameState.occurredEvents[a.id] = 0),
                            ++this._gameState.occurredEvents[a.id],
                            [4, this.executeActions(a.actions)];
                        case 2:
                            i = r.sent(),
                            a.once && (this._eventIdMap[a.id][1] = !0),
                            r.label = 3;
                        case 3:
                            return s++,
                            [3, 1];
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.executeActions = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                        case 0:
                            t = 0,
                            n = e,
                            i.label = 1;
                        case 1:
                            return t < n.length ? [4, n[t].execute(this._gameState, this._actionProxy, this._exprEngine)] : [3, 4];
                        case 2:
                            if (i.sent(),
                            this.onActionExecuted && this.onActionExecuted(this._gameState),
                            this._gameState.endGameState !== s.EndGameState.None)
                                return [2, !0];
                            i.label = 3;
                        case 3:
                            return t++,
                            [3, 1];
                        case 4:
                            return [2, !1]
                        }
                    })
                })
            }
            ,
            e
        }();
        t.GameEventEngine = o
    },
    "./src/event/expression.ts": /*!*********************************!*\
  !*** ./src/event/expression.ts ***!
  \*********************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(/*! ../utils/expression */
        "./src/utils/expression.ts")
          , r = function() {
            function e(e) {
                this._cache = {},
                this._gameState = e,
                this._fTable = this._initFunctionTable()
            }
            return e.prototype._initFunctionTable = function() {
                var e = this;
                return {
                    getVar: function(t) {
                        return e._gameState.getVar(t, !0)
                    },
                    setVarLimits: function(t, n, i) {
                        return e._gameState.setVarLimits(t, n, i)
                    },
                    eventOccurred: function(t) {
                        return void 0 != e._gameState.occurredEvents[t]
                    },
                    upperBound: function(t) {
                        return e._gameState.getVarLimits(t)[1]
                    },
                    lowerBound: function(t) {
                        return e._gameState.getVarLimits(t)[0]
                    },
                    itemCount: function(t) {
                        return e._gameState.playerInventory.count(t)
                    },
                    totalMonths: function() {
                        return 12 * e._gameState.getVar("year", !0) + e._gameState.getVar("month", !0)
                    },
                    calcEffectValue: function(t, n) {
                        var i = e._gameState.playerInventory.calcCombinedEffectValue(t)
                          , r = e._gameState.playerStatus.calcCombinedEffectValue(t);
                        return (n + i[0] + r[0]) * i[1] * r[1]
                    },
                    hasStatus: function(t) {
                        return e._gameState.playerStatus.count(t) > 0
                    },
                    random: Math.random,
                    randi: function(e) {
                        return Math.floor(Math.random())
                    },
                    max: Math.max,
                    min: Math.min,
                    floor: Math.floor,
                    round: Math.round,
                    ceil: Math.ceil,
                    clip: function(e, t, n) {
                        return e < t ? e : e > n ? n : e
                    }
                }
            }
            ,
            e.prototype.getClosure = function() {
                return this._fTable
            }
            ,
            e.prototype.existsFunction = function(e) {
                return void 0 != this._fTable[e]
            }
            ,
            e.prototype.compile = function(e) {
                return "number" == typeof e ? {
                    source: e.toString(),
                    fn: function() {
                        return e
                    }
                } : (this._cache[e] || (this._cache[e] = i.compileExpression(e, this)),
                this._cache[e])
            }
            ,
            e.prototype.eval = function(e) {
                var t = e.fn(this.getClosure());
                if (isNaN(t))
                    throw new Error("Expression produced NaN.");
                return t
            }
            ,
            e
        }();
        t.EventExpressionEngine = r
    },
    "./src/event/loader.ts": /*!*****************************!*\
  !*** ./src/event/loader.ts ***!
  \*****************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(/*! ./core */
        "./src/event/core.ts")
          , o = n(/*! ../utils/network */
        "./src/utils/network.ts")
          , a = n(/*! js-yaml */
        "./node_modules/js-yaml/index.js")
          , u = function() {
            function e(e, t, n) {
                this._exprCompiler = e,
                this._conditionFactory = t,
                this._actionFactory = n
            }
            return e.prototype.load = function(e) {
                return i(this, void 0, void 0, function() {
                    var t = this;
                    return r(this, function(n) {
                        return [2, o.downloadAndParse(e, function(e) {
                            return t.loadFromString(e)
                        })]
                    })
                })
            }
            ,
            e.prototype.loadFromString = function(e) {
                return this.parseEvents(a.safeLoad(e) || {})
            }
            ,
            e.prototype.parseEvents = function(e) {
                var t = this;
                if (!Array.isArray(e))
                    throw new Error("Expecting an array of event definitions.");
                return e.map(function(e) {
                    return t.parseEvent(e)
                })
            }
            ,
            e.prototype.parseEvent = function(e) {
                var t = this;
                if (void 0 == e.id)
                    throw new Error("Missing event id.");
                var n = e.id;
                if (void 0 != e.trigger && "string" != typeof e.trigger)
                    throw new Error("Event trigger must be a string.");
                var i, r = e.trigger || "", o = Array.isArray(e.conditions) ? e.conditions.map(function(e) {
                    return t._conditionFactory.fromJSONObject(e)
                }) : [];
                if (void 0 == e.probability)
                    i = 1;
                else if ("number" == typeof e.probability)
                    i = e.probability;
                else {
                    if ("string" != typeof e.probability)
                        throw new Error("Probability must either a number or a string expression.");
                    i = this._exprCompiler.compile(e.probability)
                }
                var a = Array.isArray(e.exclusions) ? e.exclusions : [];
                if (!Array.isArray(e.actions))
                    throw new Error("Missing actions.");
                var u = e.actions.map(function(e) {
                    return t._actionFactory.fromJSONObject(e)
                })
                  , c = !!e.once;
                return new s.GameEvent(n,r,o,u,i,a,c)
            }
            ,
            e
        }();
        t.GameEventLoader = u
    },
    "./src/gameEngine.ts": /*!***************************!*\
  !*** ./src/gameEngine.ts ***!
  \***************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(/*! ./gameState */
        "./src/gameState.ts")
          , o = n(/*! ./effect/item */
        "./src/effect/item.ts")
          , a = n(/*! ./event/engine */
        "./src/event/engine.ts")
          , u = n(/*! ./event/expression */
        "./src/event/expression.ts")
          , c = n(/*! ./event/actions */
        "./src/event/actions.ts")
          , h = n(/*! ./event/conditions */
        "./src/event/conditions.ts")
          , l = n(/*! ./event/loader */
        "./src/event/loader.ts")
          , p = n(/*! ./effect/status */
        "./src/effect/status.ts")
          , f = function() {
            function e(e, t) {
                this._dataLoaded = !1,
                this._config = Object.assign({}, e),
                this._actionProxy = t,
                this._itemRegistry = new o.ItemRegistry,
                this._statusRegistry = new p.StatusRegistry,
                this._gameState = new s.GameState(this._itemRegistry,this._statusRegistry),
                this._expressionEngine = new u.EventExpressionEngine(this._gameState),
                this._eventEngine = new a.GameEventEngine(this._gameState,this._actionProxy,this._expressionEngine),
                this._actionFactory = new c.EventActionFactory(this._expressionEngine),
                this._conditionFactory = new h.EventConditionFactory(this._expressionEngine)
            }
            return Object.defineProperty(e.prototype, "gameState", {
                get: function() {
                    return this._gameState
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "itemRegistry", {
                get: function() {
                    return this._itemRegistry
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "statusRegistry", {
                get: function() {
                    return this._statusRegistry
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "actionProxy", {
                get: function() {
                    return this._actionProxy
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.loadGameData = function() {
                return i(this, void 0, void 0, function() {
                    var e;
                    return r(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return this._dataLoaded ? [2] : (this._initFactories(),
                            [4, this._itemRegistry.loadItems(this._config.itemDefinitionUrl)]);
                        case 1:
                            return t.sent(),
                            [4, this._statusRegistry.loadStatus(this._config.statusDefinitionUrl)];
                        case 2:
                            return t.sent(),
                            [4, new l.GameEventLoader(this._expressionEngine,this._conditionFactory,this._actionFactory).load(this._config.eventDefinitionUrl)];
                        case 3:
                            return e = t.sent(),
                            this._eventEngine.registerEvents(e),
                            this._dataLoaded = !0,
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype._initFactories = function() {
                this._actionFactory.registerDeserializer(c.EALog),
                this._actionFactory.registerDeserializer(c.EADisplayMessage),
                this._actionFactory.registerDeserializer(c.EADisplayRandomMessage),
                this._actionFactory.registerDeserializer(c.EADisplayChoices),
                this._actionFactory.registerDeserializer(c.EARandom),
                this._actionFactory.registerDeserializer(c.EACoinFlip),
                this._actionFactory.registerDeserializer(c.EAUpdateVariable),
                this._actionFactory.registerDeserializer(c.EAUpdateVariables),
                this._actionFactory.registerDeserializer(c.EAGiveItem),
                this._actionFactory.registerDeserializer(c.EAUpdateItemAmounts),
                this._actionFactory.registerDeserializer(c.EAEndGame),
                this._actionFactory.registerDeserializer(c.EASetStatus),
                this._actionFactory.registerDeserializer(c.EASwtich),
                this._conditionFactory.registerDeserializer(h.ECExpression)
            }
            ,
            e.prototype.start = function() {
                return i(this, void 0, void 0, function() {
                    return r(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return this._dataLoaded ? [3, 2] : [4, this.loadGameData()];
                        case 1:
                            e.sent(),
                            e.label = 2;
                        case 2:
                            return this._gameState.reset(),
                            this._gameState.setVar("month", 1),
                            this._gameState.setVar("year", 1),
                            this._gameState.setVar("player.hope", 50),
                            this._gameState.setVarLimits("player.hope", 0, 100),
                            this._eventEngine.enableAll(),
                            [4, this._eventEngine.trigger("Initialization")];
                        case 3:
                            return e.sent(),
                            [4, this._eventEngine.trigger("YearBegin")];
                        case 4:
                            return e.sent(),
                            [4, this._eventEngine.trigger("MonthBegin")];
                        case 5:
                            return e.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.step = function() {
                return i(this, void 0, void 0, function() {
                    var e, t, n;
                    return r(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return this._gameState.endGameState === s.EndGameState.None ? [3, 2] : [4, this.start()];
                        case 1:
                            return i.sent(),
                            [2];
                        case 2:
                            return e = this._gameState.getVar("month", !0) + 1,
                            t = this._gameState.getVar("year", !0),
                            n = !1,
                            13 === e && (e = 1,
                            ++t,
                            n = !0,
                            this._gameState.setVar("year", t)),
                            this._gameState.setVar("month", e),
                            this._gameState.playerStatus.tick(),
                            n ? [4, this._eventEngine.trigger("YearBegin")] : [3, 4];
                        case 3:
                            i.sent(),
                            i.label = 4;
                        case 4:
                            return [4, this._eventEngine.trigger("MonthBegin")];
                        case 5:
                            return i.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            e
        }();
        t.GameEngine = f;
        var d = function() {
            function e() {}
            return e.prototype.attachGui = function(e) {
                this._guiGame = e
            }
            ,
            e.prototype.displayMessage = function(e, t, n, i) {
                if (!this._guiGame)
                    throw new Error("No attached GUI.");
                return this._guiGame.displayMessage(e, t, n, i)
            }
            ,
            e.prototype.displayChoices = function(e, t, n) {
                if (!this._guiGame)
                    throw new Error("No attached GUI.");
                return this._guiGame.displayChoices(e, t, n)
            }
            ,
            e
        }();
        t.GameActionProxy = d
    },
    "./src/gameState.ts": /*!**************************!*\
  !*** ./src/gameState.ts ***!
  \**************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, r = n(/*! ./effect/item */
            "./src/effect/item.ts"), s = n(/*! ./effect/status */
            "./src/effect/status.ts");
            !function(e) {
                e[e.None = 0] = "None",
                e[e.Winning = 1] = "Winning",
                e[e.Losing = 2] = "Losing"
            }(i = t.EndGameState || (t.EndGameState = {}));
            var o = function() {
                return function(e, t, n, i) {
                    this.clear = e,
                    this.varName = t,
                    this.oldValue = n,
                    this.newValue = i
                }
            }();
            t.VariableChangedEvent = o;
            var a = function() {
                function t(e, t) {
                    this._occurredEvents = {},
                    this._variables = {},
                    this._varLimits = {},
                    this.endGameState = i.None,
                    this._playerInventory = new r.Inventory(e),
                    this._playerStatus = new s.StatusTable(t)
                }
                return Object.defineProperty(t.prototype, "playerInventory", {
                    get: function() {
                        return this._playerInventory
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "playerStatus", {
                    get: function() {
                        return this._playerStatus
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "occurredEvents", {
                    get: function() {
                        return this._occurredEvents
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.setVar = function(t, n, i) {
                    var r = this;
                    if (void 0 === i && (i = !1),
                    i && !(t in this._variables))
                        throw new Error('Variable "' + t + '" does not exist.');
                    this._varLimits[t] && (n > this._varLimits[t][1] && (n = this._varLimits[t][1]),
                    n < this._varLimits[t][0] && (n = this._varLimits[t][0]));
                    var s = this._variables[t];
                    this._variables[t] = n,
                    s !== n && e(function() {
                        return r.dispatchChangeEvent(new o(!1,t,s,n))
                    })
                }
                ,
                t.prototype.setVarLimits = function(e, t, n) {
                    this._varLimits[e] = [t, n]
                }
                ,
                t.prototype.getVarLimits = function(e) {
                    var t = this._varLimits[e];
                    return t ? [t[0], t[1]] : [-1 / 0, 1 / 0]
                }
                ,
                t.prototype.getVar = function(e, t) {
                    void 0 === t && (t = !0);
                    var n = this._variables[e];
                    if (void 0 == n && t)
                        throw new Error('Variable "' + e + '" does not exist.');
                    return n
                }
                ,
                t.prototype.reset = function() {
                    this.playerInventory.clear(),
                    this.playerStatus.clear(),
                    this._occurredEvents = {},
                    this.endGameState = i.None,
                    this.dispatchChangeEvent(new o(!0,"",0,0)),
                    this._variables = {}
                }
                ,
                t.prototype.dispatchChangeEvent = function(e) {
                    this.onVariableChanged && this.onVariableChanged(this, e)
                }
                ,
                t
            }();
            t.GameState = a
        }
        ).call(this, n(/*! ./../node_modules/timers-browserify/main.js */
        "./node_modules/timers-browserify/main.js").setImmediate)
    },
    "./src/gui/guiBase.ts": /*!****************************!*\
  !*** ./src/gui/guiBase.ts ***!
  \****************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                this._container = e,
                this._textEngine = t
            }
            return e.prototype.setHidden = function(e) {
                this._container.style.display = e ? "none" : "block"
            }
            ,
            e.prototype.removeAllChildrenOf = function(e) {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild)
            }
            ,
            e.prototype.createAndAddChild = function(e, t, n) {
                var i = document.createElement(e);
                return t && (i.id = t),
                n && (i.className = n),
                this._container.appendChild(i),
                i
            }
            ,
            e
        }();
        t.GuiBase = i
    },
    "./src/gui/guiEffectProviderList.ts": /*!******************************************!*\
  !*** ./src/gui/guiEffectProviderList.ts ***!
  \******************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function(e) {
            function t(t, n, i, r) {
                var s = e.call(this, t, n) || this;
                return s._collection = i,
                s._registry = r,
                s._titleContainer = s.createAndAddChild("h3"),
                s._listContainer = s.createAndAddChild("ul"),
                s._collection.onChanged = function(e, t) {
                    s.renderList(e, t)
                }
                ,
                s._listContainer.onclick = function(e) {
                    var t = e.target;
                    t instanceof HTMLLIElement && s.onItemClicked && s.onItemClicked(s.retriveEffectProviderFromElement(t))
                }
                ,
                s
            }
            return r(t, e),
            t.prototype.setTitle = function(e) {
                this._titleContainer.innerHTML = this._textEngine.localizeAndRender(e)
            }
            ,
            t
        }(n(/*! ./guiBase */
        "./src/gui/guiBase.ts").GuiBase);
        t.GuiEffectProviderList = s;
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.renderList = function(e, t) {
                if (this.removeAllChildrenOf(this._listContainer),
                !t.clear)
                    for (var n in e.items) {
                        var i = document.createElement("li")
                          , r = e.items[n];
                        i.setAttribute("data-item-id", r[0].id),
                        r[0].rarity >= 10 ? i.className = "r_legendary" : r[0].rarity >= 6 ? i.className = "r_rare" : r[0].rarity >= 3 && (i.className = "r_uncommon"),
                        i.innerHTML = this._textEngine.localizeAndRender(r[0].unlocalizedName) + " x" + r[1].toString(),
                        this._listContainer.appendChild(i)
                    }
            }
            ,
            t.prototype.retriveEffectProviderFromElement = function(e) {
                return this._registry.get(e.getAttribute("data-item-id") || "")
            }
            ,
            t
        }(s);
        t.GuiItemList = o;
        var a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.renderList = function(e, t) {
                if (this.removeAllChildrenOf(this._listContainer),
                !t.clear)
                    for (var n in e.items) {
                        var i = document.createElement("li")
                          , r = e.items[n];
                        i.innerHTML = this._textEngine.localizeAndRender(r[0].unlocalizedName),
                        i.setAttribute("data-status-id", n),
                        this._listContainer.appendChild(i)
                    }
            }
            ,
            t.prototype.retriveEffectProviderFromElement = function(e) {
                return this._registry.get(e.getAttribute("data-status-id") || "")
            }
            ,
            t
        }(s);
        t.GuiStatusList = a
    },
    "./src/gui/guiFx.ts": /*!**************************!*\
  !*** ./src/gui/guiFx.ts ***!
  \**************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(/*! ./guiBase */
        "./src/gui/guiBase.ts")
          , o = function() {
            function e(e) {
                this.x = 0,
                this.y = 0,
                this.vx = 0,
                this.vy = 0,
                this.ax = 0,
                this.ay = 0,
                this.active = !0,
                this._el = document.createElement("div"),
                this._el.className = e
            }
            return Object.defineProperty(e.prototype, "element", {
                get: function() {
                    return this._el
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.addToScene = function(e) {
                e.appendChild(this._el)
            }
            ,
            e.prototype.removeFromScene = function(e) {
                e.removeChild(this._el)
            }
            ,
            e.prototype.updatePosition = function() {
                this.active && (this.vx += this.ax,
                this.vy += this.ay,
                this.x += this.vx,
                this.y += this.vy,
                this._el.style.top = this.y + "px",
                this._el.style.left = this.x + "px")
            }
            ,
            e
        }()
          , a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.confetti = function() {
                for (var e = this, t = ["#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f", "#000", "#fff"], n = [], i = this._container.offsetWidth, r = document.body.offsetHeight, s = 30, a = 0; a < s; a++) {
                    var u = new o("particle_confetti");
                    u.x = Math.random() * i,
                    u.y = -10 - 160 * Math.random(),
                    u.vy = Math.random(),
                    u.ay = 9.8 / 60,
                    u.element.style.backgroundColor = t[Math.floor(Math.random() * t.length)],
                    u.element.style.width = Math.floor(6 * Math.random() + 4) + "px",
                    u.element.style.height = u.element.style.width,
                    u.addToScene(this._container),
                    n.push(u)
                }
                var c = function() {
                    for (var t = 0, i = n; t < i.length; t++) {
                        var o = i[t];
                        o.updatePosition(),
                        o.active && o.y > 1.5 * r && (o.active = !1,
                        o.removeFromScene(e._container),
                        s--)
                    }
                    s > 0 && requestAnimationFrame(c)
                };
                requestAnimationFrame(c)
            }
            ,
            t
        }(s.GuiBase);
        t.GuiFX = a
    },
    "./src/gui/guiGame.ts": /*!****************************!*\
  !*** ./src/gui/guiGame.ts ***!
  \****************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(/*! ./guiModalBox */
        "./src/gui/guiModalBox.ts")
          , o = n(/*! ./guiBase */
        "./src/gui/guiBase.ts")
          , a = n(/*! ./guiMessageWindow */
        "./src/gui/guiMessageWindow.ts")
          , u = n(/*! ./guiEffectProviderList */
        "./src/gui/guiEffectProviderList.ts")
          , c = n(/*! ./guiFx */
        "./src/gui/guiFx.ts")
          , h = function(e) {
            function t(t, n, i) {
                var r = e.call(this, t, n) || this;
                return r._gameEngine = i,
                r._messageWindow = new a.GuiMessageWindow(r.retrieveElement("message_window"),n),
                r._modalBox = new s.GuiModalBox(r.retrieveElement("modal_container"),n),
                r._itemList = new u.GuiItemList(r.retrieveElement("items_window"),n,r._gameEngine.gameState.playerInventory,r._gameEngine.itemRegistry),
                r._statusList = new u.GuiStatusList(r.retrieveElement("status_window"),n,r._gameEngine.gameState.playerStatus,r._gameEngine.statusRegistry),
                r._fx = new c.GuiFX(r.retrieveElement("fx_container"),n),
                r._hopeMeter = r.retrieveElement("hope_meter"),
                r._timeMeter = r.retrieveElement("time_meter"),
                r._btnHelp = r.retrieveElement("btn_help"),
                r._btnPrivacyNotice = r.retrieveElement("btn_privacy_notice"),
                r._gameEngine.gameState.onVariableChanged = function(e, t) {
                    r.handleVariableUpdate(e, t)
                }
                ,
                r._itemList.onItemClicked = function(e) {
                    r._modalBox.display(e.unlocalizedName, e.unlocalizedDescription, "ui.ok", e.icon)
                }
                ,
                r._statusList.onItemClicked = function(e) {
                    r._modalBox.display(e.unlocalizedName, e.unlocalizedDescription, "ui.ok", e.icon)
                }
                ,
                r._btnHelp.onclick = function(e) {
                    r._modalBox.display("ui.helpTitle", "ui.helpContent", "ui.ok")
                }
                ,
                r._btnPrivacyNotice.onclick = function(e) {
                    r._modalBox.display("ui.privacyNoticeTitle", "ui.privacyNoticeContent", "ui.ok")
                }
                ,
                r
            }
            return r(t, e),
            t.prototype.playFx = function(e) {
                switch (e) {
                case "confetti":
                    this._fx.confetti();
                    break;
                default:
                    throw new Error('Unknown fx "' + e + '".')
                }
            }
            ,
            t.prototype.updateUIText = function() {
                this._btnHelp.innerHTML = this._textEngine.localizeAndRender("ui.helpTitle"),
                this._btnPrivacyNotice.innerHTML = this._textEngine.localizeAndRender("ui.privacyNoticeTitle"),
                this._itemList.setTitle("ui.items"),
                this._statusList.setTitle("ui.status")
            }
            ,
            t.prototype.retrieveElement = function(e) {
                var t = document.getElementById(e);
                if (!t)
                    throw new Error("Unable to find #" + e + ".");
                return t
            }
            ,
            t.prototype.handleVariableUpdate = function(e, t) {
                if (!t.clear)
                    switch (t.varName) {
                    case "player.hope":
                        t.newValue < 40 && t.newValue > 20 ? this._hopeMeter.className = "warning" : t.newValue <= 20 ? this._hopeMeter.className = "critical" : this._hopeMeter.className = "normal",
                        this._hopeMeter.innerHTML = this._textEngine.localizeAndRender("ui.hopeMeter");
                        break;
                    case "year":
                    case "month":
                        this._timeMeter.innerHTML = this._textEngine.localizeAndRender("ui.timeMeter")
                    }
            }
            ,
            t.prototype.displayMessage = function(e, t, n, i) {
                return i && this.playFx(i),
                this._messageWindow.displayMessage(e, t, n)
            }
            ,
            t.prototype.displayChoices = function(e, t, n) {
                return this._messageWindow.displayChoices(e, t, n)
            }
            ,
            t
        }(o.GuiBase);
        t.GuiGameWindow = h
    },
    "./src/gui/guiMessageWindow.ts": /*!*************************************!*\
  !*** ./src/gui/guiMessageWindow.ts ***!
  \*************************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), s = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
        , o = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function t(t, n) {
                var i = e.call(this, t, n) || this;
                return i._animate = !0,
                i._messageContainer = i.createAndAddChild("div", "", "message_container"),
                i._choicesContainer = i.createAndAddChild("div", "", "choices_container"),
                i
            }
            return r(t, e),
            t.prototype.displayMessage = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var i = this;
                    return o(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return this._animate ? [4, this.typewriteMessage(e, n)] : [3, 2];
                        case 1:
                            return r.sent(),
                            [3, 3];
                        case 2:
                            this.updateMessage(e, n),
                            r.label = 3;
                        case 3:
                            return [2, new Promise(function(e) {
                                var n = document.createElement("a");
                                n.className = "btn",
                                n.href = "javascript: void(0)",
                                n.innerHTML = i._textEngine.localizeAndRender(t),
                                i._choicesContainer.appendChild(n),
                                n.onclick = function() {
                                    i._messageContainer.textContent = "",
                                    n.onclick = null,
                                    n.remove(),
                                    e()
                                }
                            }
                            )]
                        }
                    })
                })
            }
            ,
            t.prototype.displayChoices = function(e, t, n) {
                return s(this, void 0, void 0, function() {
                    var i = this;
                    return o(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return this._animate ? [4, this.typewriteMessage(e, n)] : [3, 2];
                        case 1:
                            return r.sent(),
                            [3, 3];
                        case 2:
                            this.updateMessage(e, n),
                            r.label = 3;
                        case 3:
                            return [2, new Promise(function(e) {
                                for (var n = [], r = function(r) {
                                    var s = document.createElement("a")
                                      , o = t[r]
                                      , a = o[0]
                                      , u = o[1];
                                    s.className = "btn",
                                    s.innerHTML = i._textEngine.localizeAndRender(a),
                                    s.href = "javascript: void(0);",
                                    s.setAttribute("data-choice-number", u.toString()),
                                    s.onclick = function() {
                                        i._messageContainer.textContent = "";
                                        for (var t = 0, r = n; t < r.length; t++)
                                            (s = r[t]).remove();
                                        e(u)
                                    }
                                    ,
                                    n.push(s),
                                    i._choicesContainer.appendChild(s)
                                }, s = 0; s < t.length; s++)
                                    r(s)
                            }
                            )]
                        }
                    })
                })
            }
            ,
            t.prototype.updateMessage = function(e, t) {
                var n = "<p>" + this._textEngine.localizeAndRender(e) + "</p>";
                t && (n += '<p><img src="' + t + '" /></p>'),
                this._messageContainer.innerHTML = n
            }
            ,
            t.prototype.typewriteMessage = function(e, t) {
                var n = this;
                return new Promise(function(i) {
                    n.removeAllChildrenOf(n._messageContainer);
                    var r = document.createElement("p");
                    n._messageContainer.appendChild(r);
                    var s = n._textEngine.localize(e).split(" ")
                      , o = ""
                      , a = 0
                      , u = 0
                      , c = function() {
                        if (++u < 2)
                            requestAnimationFrame(c);
                        else if (u = 0,
                        a == s.length) {
                            if (t) {
                                var e = document.createElement("p")
                                  , h = document.createElement("img");
                                h.src = t,
                                e.appendChild(h),
                                n._messageContainer.appendChild(e)
                            }
                            i()
                        } else
                            o.length > 0 && (o += " "),
                            o += s[a],
                            r.innerHTML = n._textEngine.localizeAndRender(o),
                            ++a,
                            requestAnimationFrame(c)
                    };
                    requestAnimationFrame(c)
                }
                )
            }
            ,
            t
        }(n(/*! ./guiBase */
        "./src/gui/guiBase.ts").GuiBase);
        t.GuiMessageWindow = a
    },
    "./src/gui/guiModalBox.ts": /*!********************************!*\
  !*** ./src/gui/guiModalBox.ts ***!
  \********************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i, r = this && this.__extends || (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function(e) {
            function t(t, n) {
                var i = e.call(this, t, n) || this;
                return i._pending = [],
                i._shown = !1,
                i._contentBox = i.createAndAddChild("div", "", "modal_content"),
                i._titleContainer = document.createElement("h3"),
                i._messageContainer = document.createElement("div"),
                i._messageContainer.className = "modal_message",
                i._confirmBtn = document.createElement("a"),
                i._confirmBtn.className = "btn_confirm btn",
                i._confirmBtn.href = "javascript:void(0)",
                i._contentBox.appendChild(i._titleContainer),
                i._contentBox.appendChild(i._messageContainer),
                i._contentBox.appendChild(i._confirmBtn),
                i._confirmBtn.onclick = function() {
                    if (i._pending.length > 0) {
                        var e = i._pending.shift();
                        i._setContent(e.title, e.message, e.confirm, e.icon)
                    } else
                        i.setHidden(!0),
                        i._clearContent()
                }
                ,
                i
            }
            return r(t, e),
            t.prototype.display = function(e, t, n, i) {
                this._shown ? this._pending.push({
                    title: this._textEngine.localizeAndRender(e),
                    message: this._textEngine.localizeAndRender(t),
                    confirm: this._textEngine.localizeAndRender(n),
                    icon: i
                }) : (this._setContent(this._textEngine.localizeAndRender(e), this._textEngine.localizeAndRender(t), this._textEngine.localizeAndRender(n), i),
                this.setHidden(!1))
            }
            ,
            t.prototype._setContent = function(e, t, n, i) {
                this._titleContainer.textContent = e;
                var r = document.createElement("p");
                if (r.innerHTML = t,
                this._messageContainer.appendChild(r),
                i) {
                    var s = document.createElement("img");
                    s.src = i,
                    this._messageContainer.appendChild(s)
                }
                this._confirmBtn.textContent = n
            }
            ,
            t.prototype._clearContent = function() {
                this._titleContainer.textContent = "",
                this._messageContainer.innerHTML = "",
                this._confirmBtn.textContent = ""
            }
            ,
            t
        }(n(/*! ./guiBase */
        "./src/gui/guiBase.ts").GuiBase);
        t.GuiModalBox = s
    },
    "./src/gui/textEngine.ts": /*!*******************************!*\
  !*** ./src/gui/textEngine.ts ***!
  \*******************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(/*! ../utils/expression */
        "./src/utils/expression.ts")
          , r = function() {
            function e(e, t) {
                this._ldict = e,
                this._gs = t
            }
            return e.prototype.render = function(e) {
                var t = this;
                return e = e.replace(/\{\{([a-z0-9$_.]+)(:\d+)?\}\}/gi, function(e, n, r) {
                    if (i.isVariableName(n)) {
                        var s = t._gs.getVar(n, !1);
                        return void 0 == s ? e : void 0 == r ? s.toString() : s.toFixed(parseInt(r.slice(1)))
                    }
                    return e
                }),
                function(e) {
                    var t = []
                      , n = ""
                      , i = 0
                      , r = 0;
                    for (; i < e.length; )
                        if (e[i]in s) {
                            var o = e[i];
                            i + 1 < e.length && e[i + 1] === o && (i > r && (n += e.substring(r, i)),
                            t.length > 0 && o === t[t.length - 1] ? (t.pop(),
                            n += s[o][1]) : (t.push(e[i]),
                            n += s[o][0]),
                            r = i += 2)
                        } else
                            ++i;
                    i > r && (n += e.substring(r, i));
                    for (; t.length > 0; )
                        n += s[t.pop()][1];
                    return n
                }(e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"))
            }
            ,
            e.prototype.localizeAndRender = function(e) {
                return this.render(this.localize(e))
            }
            ,
            e.prototype.localize = function(e) {
                return this._ldict.translate(e)
            }
            ,
            e
        }();
        t.SimpleGameTextEngine = r;
        var s = {
            "*": ["<em>", "</em>"],
            "#": ["<strong>", "</strong>"],
            _: ['<span style="text-decoration: underline">', "</span>"]
        }
    },
    "./src/i18n/localization.ts": /*!**********************************!*\
  !*** ./src/i18n/localization.ts ***!
  \**********************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(/*! ../utils/network */
        "./src/utils/network.ts")
          , o = n(/*! js-yaml */
        "./node_modules/js-yaml/index.js")
          , a = function() {
            function e() {
                this._dict = {}
            }
            return e.prototype.addEntry = function(e, t) {
                this._dict[e] = t
            }
            ,
            e.prototype.translate = function(e) {
                return this._dict[e] || e
            }
            ,
            e.prototype.loadFrom = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return r(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, s.downloadAndParse(e, o.safeLoad)];
                        case 1:
                            return (t = n.sent()) && Object.assign(this._dict, t),
                            [2]
                        }
                    })
                })
            }
            ,
            e
        }();
        t.LocalizationDictionary = a
    },
    "./src/utils/expression.ts": /*!*********************************!*\
  !*** ./src/utils/expression.ts ***!
  \*********************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e[e.Name = 0] = "Name",
            e[e.Number = 1] = "Number",
            e[e.Boolean = 2] = "Boolean",
            e[e.String = 3] = "String",
            e[e.Operator = 4] = "Operator",
            e[e.Delimiter = 5] = "Delimiter",
            e[e.Whitespace = 6] = "Whitespace"
        }(i || (i = {}));
        var r = [{
            tokenType: i.Whitespace,
            regex: /^\s+/g
        }, {
            tokenType: i.Boolean,
            regex: /^true|^false/
        }, {
            tokenType: i.Name,
            regex: /^[a-z_$][a-z0-9_$]*(\.[a-z_$][a-z0-9_$]*)*/i
        }, {
            tokenType: i.Number,
            regex: /^[+-]?Infinity|^NaN|^(\d+(\.\d+)?([Ee][+-]?\d+)?)/
        }, {
            tokenType: i.String,
            regex: /^'(\\['\\]|[^'])*'/
        }, {
            tokenType: i.Operator,
            regex: /^(\+|-|\*|\/|%|\(|\)|>=|>|<=|<|&&|&|\|\||\||!|:|\?|===|==|!==|!=)/
        }, {
            tokenType: i.Delimiter,
            regex: /^,/
        }];
        t.isVariableName = function(e) {
            return /^[a-z_$][a-z0-9_$]*(\.[a-z_$][a-z0-9_$]*)*$/i.test(e)
        }
        ,
        t.compileExpression = function(e, t) {
            for (var n = function(e) {
                for (var t = []; e.length > 0; ) {
                    for (var n = !1, s = 0, o = r; s < o.length; s++) {
                        var a = o[s]
                          , u = a.regex.exec(e);
                        if (u) {
                            n = !0,
                            a.tokenType !== i.Whitespace && t.push({
                                type: a.tokenType,
                                text: u[0]
                            }),
                            e = e.slice(u[0].length);
                            break
                        }
                    }
                    if (!n)
                        throw new Error("Invalid syntax starting at: " + e)
                }
                return t
            }(e), s = "return (", o = 0; o < n.length; ) {
                var a = n[o];
                switch (a.type) {
                case i.Name:
                    if (a.text.indexOf(".") > 0 || o >= n.length - 2 || n[o + 1].type !== i.Operator || "(" !== n[o + 1].text)
                        s += "__functions.getVar('" + a.text + "')";
                    else {
                        if (!t.existsFunction(a.text))
                            throw new Error('Unsupported function "' + a.text + '".');
                        s += "__functions." + a.text
                    }
                    break;
                case i.Number:
                case i.Boolean:
                case i.Operator:
                case i.String:
                case i.Delimiter:
                    s += a.text;
                    break;
                default:
                    throw new Error("Unexpected token type.")
                }
                ++o
            }
            return s += ");",
            {
                source: e,
                fn: new Function("__functions",s)
            }
        }
    },
    "./src/utils/network.ts": /*!******************************!*\
  !*** ./src/utils/network.ts ***!
  \******************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(r, s) {
                function o(e) {
                    try {
                        u(i.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(i.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    e.done ? r(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(o, a)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var n, i, r, s, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                i && (r = i[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(i, s[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (s = [0, r.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    r = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    i = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < r[1]) {
                                        o.label = r[1],
                                        r = s;
                                        break
                                    }
                                    if (r && o.label < r[2]) {
                                        o.label = r[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    r[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                i = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.downloadAndParse = function(e, t) {
            return i(this, void 0, void 0, function() {
                return r(this, function(n) {
                    return [2, new Promise(function(n, i) {
                        var r = new XMLHttpRequest;
                        r.open("GET", e, !0),
                        r.onreadystatechange = function() {
                            r.readyState == XMLHttpRequest.DONE && (200 == r.status ? n(t(r.responseText)) : i(new Error("Error status: " + r.statusText)))
                        }
                        ,
                        r.send()
                    }
                    )]
                })
            })
        }
    },
    "./src/utils/random.ts": /*!*****************************!*\
  !*** ./src/utils/random.ts ***!
  \*****************************/
    /*! no static exports found */
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.weightedSample = function(e) {
            if (0 === e.length)
                throw new Error("Must have at least one weight value.");
            for (var t = new Array(e.length + 1), n = 0, i = 0; i < e.length; i++) {
                if (t[i] = n,
                e[i] < 0)
                    throw new Error("Weights cannot be negative.");
                n += e[i]
            }
            if (t[t.length - 1] = n,
            0 === n)
                throw new Error("Sum of weights must be positive.");
            for (var r = Math.random() * n, s = 0; s < e.length && !(r >= t[s] && r < t[s + 1]); s++)
                ;
            return s
        }
    }
});
//# sourceMappingURL=app.bundle.js.map
