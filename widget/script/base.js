//     Underscore.js 1.8.2
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t) }
            return e }
        return function(r, e, u, i) { e = d(e, i, 4);
            var o = !w(r) && m.keys(r),
                a = (o || r).length,
                c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a) } }

    function t(n) {
        return function(t, r, e) { r = b(r, e);
            for (var u = null != t && t.length, i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                if (r(t[i], i, t)) return i;
            return -1 } }

    function r(n, t) {
        var r = S.length,
            e = n.constructor,
            u = m.isFunction(e) && e.prototype || o,
            i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;) i = S[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i) }
    var e = this,
        u = e._,
        i = Array.prototype,
        o = Object.prototype,
        a = Function.prototype,
        c = i.push,
        l = i.slice,
        f = o.toString,
        s = o.hasOwnProperty,
        p = Array.isArray,
        h = Object.keys,
        v = a.bind,
        g = Object.create,
        y = function() {},
        m = function(n) {
            return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : e._ = m, m.VERSION = "1.8.2";
    var d = function(n, t, r) {
            if (t === void 0) return n;
            switch (null == r ? 3 : r) {
                case 1:
                    return function(r) {
                        return n.call(t, r) };
                case 2:
                    return function(r, e) {
                        return n.call(t, r, e) };
                case 3:
                    return function(r, e, u) {
                        return n.call(t, r, e, u) };
                case 4:
                    return function(r, e, u, i) {
                        return n.call(t, r, e, u, i) } }
            return function() {
                return n.apply(t, arguments) } },
        b = function(n, t, r) {
            return null == n ? m.identity : m.isFunction(n) ? d(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n) };
    m.iteratee = function(n, t) {
        return b(n, t, 1 / 0) };
    var x = function(n, t) {
            return function(r) {
                var e = arguments.length;
                if (2 > e || null == r) return r;
                for (var u = 1; e > u; u++)
                    for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                        var l = o[c];
                        t && r[l] !== void 0 || (r[l] = i[l]) }
                return r } },
        _ = function(n) {
            if (!m.isObject(n)) return {};
            if (g) return g(n);
            y.prototype = n;
            var t = new y;
            return y.prototype = null, t },
        j = Math.pow(2, 53) - 1,
        w = function(n) {
            var t = n && n.length;
            return "number" == typeof t && t >= 0 && j >= t };
    m.each = m.forEach = function(n, t, r) { t = d(t, r);
        var e, u;
        if (w(n))
            for (e = 0, u = n.length; u > e; e++) t(n[e], e, n);
        else {
            var i = m.keys(n);
            for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n) }
        return n }, m.map = m.collect = function(n, t, r) { t = b(t, r);
        for (var e = !w(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n) }
        return i }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, t, r) {
        var e;
        return e = w(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0 }, m.filter = m.select = function(n, t, r) {
        var e = [];
        return t = b(t, r), m.each(n, function(n, r, u) { t(n, r, u) && e.push(n) }), e }, m.reject = function(n, t, r) {
        return m.filter(n, m.negate(b(t)), r) }, m.every = m.all = function(n, t, r) { t = b(t, r);
        for (var e = !w(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n)) return !1 }
        return !0 }, m.some = m.any = function(n, t, r) { t = b(t, r);
        for (var e = !w(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n)) return !0 }
        return !1 }, m.contains = m.includes = m.include = function(n, t, r) {
        return w(n) || (n = m.values(n)), m.indexOf(n, t, "number" == typeof r && r) >= 0 }, m.invoke = function(n, t) {
        var r = l.call(arguments, 2),
            e = m.isFunction(t);
        return m.map(n, function(n) {
            var u = e ? t : n[t];
            return null == u ? u : u.apply(n, r) }) }, m.pluck = function(n, t) {
        return m.map(n, m.property(t)) }, m.where = function(n, t) {
        return m.filter(n, m.matcher(t)) }, m.findWhere = function(n, t) {
        return m.find(n, m.matcher(t)) }, m.max = function(n, t, r) {
        var e, u, i = -1 / 0,
            o = -1 / 0;
        if (null == t && null != n) { n = w(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++) e = n[a], e > i && (i = e) } else t = b(t, r), m.each(n, function(n, r, e) { u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u) });
        return i }, m.min = function(n, t, r) {
        var e, u, i = 1 / 0,
            o = 1 / 0;
        if (null == t && null != n) { n = w(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++) e = n[a], i > e && (i = e) } else t = b(t, r), m.each(n, function(n, r, e) { u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u) });
        return i }, m.shuffle = function(n) {
        for (var t, r = w(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
        return u }, m.sample = function(n, t, r) {
        return null == t || r ? (w(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t)) }, m.sortBy = function(n, t, r) {
        return t = b(t, r), m.pluck(m.map(n, function(n, r, e) {
            return { value: n, index: r, criteria: t(n, r, e) } }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1 }
            return n.index - t.index }), "value") };
    var A = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = b(r, e), m.each(t, function(e, i) {
                var o = r(e, i, t);
                n(u, e, o) }), u } };
    m.groupBy = A(function(n, t, r) { m.has(n, r) ? n[r].push(t) : n[r] = [t] }), m.indexBy = A(function(n, t, r) { n[r] = t }), m.countBy = A(function(n, t, r) { m.has(n, r) ? n[r]++ : n[r] = 1 }), m.toArray = function(n) {
        return n ? m.isArray(n) ? l.call(n) : w(n) ? m.map(n, m.identity) : m.values(n) : [] }, m.size = function(n) {
        return null == n ? 0 : w(n) ? n.length : m.keys(n).length }, m.partition = function(n, t, r) { t = b(t, r);
        var e = [],
            u = [];
        return m.each(n, function(n, r, i) {
            (t(n, r, i) ? e : u).push(n) }), [e, u] }, m.first = m.head = m.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t) }, m.initial = function(n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t))) }, m.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t)) }, m.rest = m.tail = m.drop = function(n, t, r) {
        return l.call(n, null == t || r ? 1 : t) }, m.compact = function(n) {
        return m.filter(n, m.identity) };
    var k = function(n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = n && n.length; a > o; o++) {
            var c = n[o];
            if (w(c) && (m.isArray(c) || m.isArguments(c))) { t || (c = k(c, t, r));
                var l = 0,
                    f = c.length;
                for (u.length += f; f > l;) u[i++] = c[l++] } else r || (u[i++] = c) }
        return u };
    m.flatten = function(n, t) {
        return k(n, t, !1) }, m.without = function(n) {
        return m.difference(n, l.call(arguments, 1)) }, m.uniq = m.unique = function(n, t, r, e) {
        if (null == n) return [];
        m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = b(r, e));
        for (var u = [], i = [], o = 0, a = n.length; a > o; o++) {
            var c = n[o],
                l = r ? r(c, o, n) : c;
            t ? (o && i === l || u.push(c), i = l) : r ? m.contains(i, l) || (i.push(l), u.push(c)) : m.contains(u, c) || u.push(c) }
        return u }, m.union = function() {
        return m.uniq(k(arguments, !0, !0)) }, m.intersection = function(n) {
        if (null == n) return [];
        for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) {
            var i = n[e];
            if (!m.contains(t, i)) {
                for (var o = 1; r > o && m.contains(arguments[o], i); o++);
                o === r && t.push(i) } }
        return t }, m.difference = function(n) {
        var t = k(arguments, !0, !0, 1);
        return m.filter(n, function(n) {
            return !m.contains(t, n) }) }, m.zip = function() {
        return m.unzip(arguments) }, m.unzip = function(n) {
        for (var t = n && m.max(n, "length").length || 0, r = Array(t), e = 0; t > e; e++) r[e] = m.pluck(n, e);
        return r }, m.object = function(n, t) {
        for (var r = {}, e = 0, u = n && n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r }, m.indexOf = function(n, t, r) {
        var e = 0,
            u = n && n.length;
        if ("number" == typeof r) e = 0 > r ? Math.max(0, u + r) : r;
        else if (r && u) return e = m.sortedIndex(n, t), n[e] === t ? e : -1;
        if (t !== t) return m.findIndex(l.call(n, e), m.isNaN);
        for (; u > e; e++)
            if (n[e] === t) return e;
        return -1 }, m.lastIndexOf = function(n, t, r) {
        var e = n ? n.length : 0;
        if ("number" == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)), t !== t) return m.findLastIndex(l.call(n, 0, e), m.isNaN);
        for (; --e >= 0;)
            if (n[e] === t) return e;
        return -1 }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function(n, t, r, e) { r = b(r, e, 1);
        for (var u = r(t), i = 0, o = n.length; o > i;) {
            var a = Math.floor((i + o) / 2);
            r(n[a]) < u ? i = a + 1 : o = a }
        return i }, m.range = function(n, t, r) { arguments.length <= 1 && (t = n || 0, n = 0), r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n;
        return u };
    var O = function(n, t, r, e, u) {
        if (!(e instanceof t)) return n.apply(r, u);
        var i = _(n.prototype),
            o = n.apply(i, u);
        return m.isObject(o) ? o : i };
    m.bind = function(n, t) {
        if (v && n.bind === v) return v.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var r = l.call(arguments, 2),
            e = function() {
                return O(n, e, t, this, r.concat(l.call(arguments))) };
        return e }, m.partial = function(n) {
        var t = l.call(arguments, 1),
            r = function() {
                for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
                for (; e < arguments.length;) i.push(arguments[e++]);
                return O(n, r, this, this, i) };
        return r }, m.bindAll = function(n) {
        var t, r, e = arguments.length;
        if (1 >= e) throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++) r = arguments[t], n[r] = m.bind(n[r], n);
        return n }, m.memoize = function(n, t) {
        var r = function(e) {
            var u = r.cache,
                i = "" + (t ? t.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i] };
        return r.cache = {}, r }, m.delay = function(n, t) {
        var r = l.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r) }, t) }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, t, r) {
        var e, u, i, o = null,
            a = 0;
        r || (r = {});
        var c = function() { a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null) };
        return function() {
            var l = m.now();
            a || r.leading !== !1 || (a = l);
            var f = t - (l - a);
            return e = this, u = arguments, 0 >= f || f > t ? (o && (clearTimeout(o), o = null), a = l, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, f)), i } }, m.debounce = function(n, t, r) {
        var e, u, i, o, a, c = function() {
            var l = m.now() - o;
            t > l && l >= 0 ? e = setTimeout(c, t - l) : (e = null, r || (a = n.apply(i, u), e || (i = u = null))) };
        return function() { i = this, u = arguments, o = m.now();
            var l = r && !e;
            return e || (e = setTimeout(c, t)), l && (a = n.apply(i, u), i = u = null), a } }, m.wrap = function(n, t) {
        return m.partial(t, n) }, m.negate = function(n) {
        return function() {
            return !n.apply(this, arguments) } }, m.compose = function() {
        var n = arguments,
            t = n.length - 1;
        return function() {
            for (var r = t, e = n[t].apply(this, arguments); r--;) e = n[r].call(this, e);
            return e } }, m.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0 } }, m.before = function(n, t) {
        var r;
        return function() {
            return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r } }, m.once = m.partial(m.before, 2);
    var F = !{ toString: null }.propertyIsEnumerable("toString"),
        S = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    m.keys = function(n) {
        if (!m.isObject(n)) return [];
        if (h) return h(n);
        var t = [];
        for (var e in n) m.has(n, e) && t.push(e);
        return F && r(n, t), t }, m.allKeys = function(n) {
        if (!m.isObject(n)) return [];
        var t = [];
        for (var e in n) t.push(e);
        return F && r(n, t), t }, m.values = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e }, m.mapObject = function(n, t, r) { t = b(t, r);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) e = u[a], o[e] = t(n[e], e, n);
        return o }, m.pairs = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
        return e }, m.invert = function(n) {
        for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t }, m.functions = m.methods = function(n) {
        var t = [];
        for (var r in n) m.isFunction(n[r]) && t.push(r);
        return t.sort() }, m.extend = x(m.allKeys), m.extendOwn = m.assign = x(m.keys), m.findKey = function(n, t, r) { t = b(t, r);
        for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
            if (e = u[i], t(n[e], e, n)) return e }, m.pick = function(n, t, r) {
        var e, u, i = {},
            o = n;
        if (null == o) return i;
        m.isFunction(t) ? (u = m.allKeys(o), e = d(t, r)) : (u = k(arguments, !1, !1, 1), e = function(n, t, r) {
            return t in r }, o = Object(o));
        for (var a = 0, c = u.length; c > a; a++) {
            var l = u[a],
                f = o[l];
            e(f, l, o) && (i[l] = f) }
        return i }, m.omit = function(n, t, r) {
        if (m.isFunction(t)) t = m.negate(t);
        else {
            var e = m.map(k(arguments, !1, !1, 1), String);
            t = function(n, t) {
                return !m.contains(e, t) } }
        return m.pick(n, t, r) }, m.defaults = x(m.allKeys, !0), m.clone = function(n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n }, m.tap = function(n, t) {
        return t(n), n }, m.isMatch = function(n, t) {
        var r = m.keys(t),
            e = r.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; e > i; i++) {
            var o = r[i];
            if (t[o] !== u[o] || !(o in u)) return !1 }
        return !0 };
    var E = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
        var u = f.call(n);
        if (u !== f.call(t)) return !1;
        switch (u) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + t;
            case "[object Number]":
                return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n === +t }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t) return !1;
            var o = n.constructor,
                a = t.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1 }
        r = r || [], e = e || [];
        for (var c = r.length; c--;)
            if (r[c] === n) return e[c] === t;
        if (r.push(n), e.push(t), i) {
            if (c = n.length, c !== t.length) return !1;
            for (; c--;)
                if (!E(n[c], t[c], r, e)) return !1 } else {
            var l, s = m.keys(n);
            if (c = s.length, m.keys(t).length !== c) return !1;
            for (; c--;)
                if (l = s[c], !m.has(t, l) || !E(n[l], t[l], r, e)) return !1 }
        return r.pop(), e.pop(), !0 };
    m.isEqual = function(n, t) {
        return E(n, t) }, m.isEmpty = function(n) {
        return null == n ? !0 : w(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length }, m.isElement = function(n) {
        return !(!n || 1 !== n.nodeType) }, m.isArray = p || function(n) {
        return "[object Array]" === f.call(n) }, m.isObject = function(n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) { m["is" + n] = function(t) {
            return f.call(t) === "[object " + n + "]" } }), m.isArguments(arguments) || (m.isArguments = function(n) {
        return m.has(n, "callee") }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
        return "function" == typeof n || !1 }), m.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n)) }, m.isNaN = function(n) {
        return m.isNumber(n) && n !== +n }, m.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" === f.call(n) }, m.isNull = function(n) {
        return null === n }, m.isUndefined = function(n) {
        return n === void 0 }, m.has = function(n, t) {
        return null != n && s.call(n, t) }, m.noConflict = function() {
        return e._ = u, this }, m.identity = function(n) {
        return n }, m.constant = function(n) {
        return function() {
            return n } }, m.noop = function() {}, m.property = function(n) {
        return function(t) {
            return null == t ? void 0 : t[n] } }, m.propertyOf = function(n) {
        return null == n ? function() {} : function(t) {
            return n[t] } }, m.matcher = m.matches = function(n) {
        return n = m.extendOwn({}, n),
            function(t) {
                return m.isMatch(t, n) } }, m.times = function(n, t, r) {
        var e = Array(Math.max(0, n));
        t = d(t, r, 1);
        for (var u = 0; n > u; u++) e[u] = t(u);
        return e }, m.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1)) }, m.now = Date.now || function() {
        return (new Date).getTime() };
    var M = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
        N = m.invert(M),
        I = function(n) {
            var t = function(t) {
                    return n[t] },
                r = "(?:" + m.keys(n).join("|") + ")",
                e = RegExp(r),
                u = RegExp(r, "g");
            return function(n) {
                return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n } };
    m.escape = I(M), m.unescape = I(N), m.result = function(n, t, r) {
        var e = null == n ? void 0 : n[t];
        return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e };
    var B = 0;
    m.uniqueId = function(n) {
        var t = ++B + "";
        return n ? n + t : t }, m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
    var T = /(.)^/,
        R = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
        q = /\\|'|\r|\n|\u2028|\u2029/g,
        K = function(n) {
            return "\\" + R[n] };
    m.template = function(n, t, r) {!t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
        var e = RegExp([(t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"),
            u = 0,
            i = "__p+='";
        n.replace(e, function(t, r, e, o, a) {
            return i += n.slice(u, a).replace(q, K), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", i) } catch (a) {
            throw a.source = i, a }
        var c = function(n) {
                return o.call(this, n, m) },
            l = t.variable || "obj";
        return c.source = "function(" + l + "){\n" + i + "}", c }, m.chain = function(n) {
        var t = m(n);
        return t._chain = !0, t };
    var z = function(n, t) {
        return n._chain ? m(t).chain() : t };
    m.mixin = function(n) { m.each(m.functions(n), function(t) {
            var r = m[t] = n[t];
            m.prototype[t] = function() {
                var n = [this._wrapped];
                return c.apply(n, arguments), z(this, r.apply(m, n)) } }) }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = i[n];
        m.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], z(this, r) } }), m.each(["concat", "join", "slice"], function(n) {
        var t = i[n];
        m.prototype[n] = function() {
            return z(this, t.apply(this._wrapped, arguments)) } }), m.prototype.value = function() {
        return this._wrapped }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
        return "" + this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return m }) }).call(this);

/* Zepto */
! function(t, e) { "function" == typeof define && define.amd ? define(function() {
        return e(t) }) : e(t) }(this, function(t) {
    var e = function() {
        function e(t) {
            return null == t ? t + "" : W[Y.call(t)] || "object" }

        function n(t) {
            return "function" == e(t) }

        function r(t) {
            return null != t && t == t.window }

        function i(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE }

        function o(t) {
            return "object" == e(t) }

        function a(t) {
            return o(t) && !r(t) && Object.getPrototypeOf(t) == Object.prototype }

        function s(t) {
            var e = !!t && "length" in t && t.length,
                n = C.type(t);
            return "function" != n && !r(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t) }

        function u(t) {
            return L.call(t, function(t) {
                return null != t }) }

        function c(t) {
            return t.length > 0 ? C.fn.concat.apply([], t) : t }

        function l(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() }

        function f(t) {
            return t in k ? k[t] : k[t] = RegExp("(^|\\s)" + t + "(\\s|$)") }

        function h(t, e) {
            return "number" != typeof e || Z[l(t)] ? e : e + "px" }

        function p(t) {
            var e, n;
            return F[t] || (e = $.createElement(t), $.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), F[t] = n), F[t] }

        function d(t) {
            return "children" in t ? D.call(t.children) : C.map(t.childNodes, function(t) {
                return 1 == t.nodeType ? t : void 0 }) }

        function m(t, e) {
            var n, r = t ? t.length : 0;
            for (n = 0; r > n; n++) this[n] = t[n];
            this.length = r, this.selector = e || "" }

        function g(t, e, n) {
            for (w in e) n && (a(e[w]) || te(e[w])) ? (a(e[w]) && !a(t[w]) && (t[w] = {}), te(e[w]) && !te(t[w]) && (t[w] = []), g(t[w], e[w], n)) : e[w] !== j && (t[w] = e[w]) }

        function v(t, e) {
            return null == e ? C(t) : C(t).filter(e) }

        function y(t, e, r, i) {
            return n(e) ? e.call(t, r, i) : e }

        function x(t, e, n) { null == n ? t.removeAttribute(e) : t.setAttribute(e, n) }

        function b(t, e) {
            var n = t.className || "",
                r = n && n.baseVal !== j;
            return e === j ? r ? n.baseVal : n : void(r ? n.baseVal = e : t.className = e) }

        function E(t) {
            try {
                return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? C.parseJSON(t) : t) : t } catch (e) {
                return t } }

        function T(t, e) { e(t);
            for (var n = 0, r = t.childNodes.length; r > n; n++) T(t.childNodes[n], e) }
        var j, w, C, S, N, O, P = [],
            A = P.concat,
            L = P.filter,
            D = P.slice,
            $ = t.document,
            F = {},
            k = {},
            Z = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
            M = /^\s*<(\w+|!)[^>]*>/,
            z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            q = /^(?:body|html)$/i,
            _ = /([A-Z])/g,
            I = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            H = ["after", "prepend", "before", "append"],
            V = $.createElement("table"),
            B = $.createElement("tr"),
            X = { tr: $.createElement("tbody"), tbody: V, thead: V, tfoot: V, td: B, th: B, "*": $.createElement("div") },
            U = /complete|loaded|interactive/,
            J = /^[\w-]*$/,
            W = {},
            Y = W.toString,
            G = {},
            K = $.createElement("div"),
            Q = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
            te = Array.isArray || function(t) {
                return t instanceof Array };
        return G.matches = function(t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var r, i = t.parentNode,
                o = !i;
            return o && (i = K).appendChild(t), r = ~G.qsa(i, e).indexOf(t), o && K.removeChild(t), r }, N = function(t) {
            return t.replace(/-+(.)?/g, function(t, e) {
                return e ? e.toUpperCase() : "" }) }, O = function(t) {
            return L.call(t, function(e, n) {
                return t.indexOf(e) == n }) }, G.fragment = function(t, e, n) {
            var r, i, o;
            return z.test(t) && (r = C($.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(R, "<$1></$2>")), e === j && (e = M.test(t) && RegExp.$1), e in X || (e = "*"), o = X[e], o.innerHTML = "" + t, r = C.each(D.call(o.childNodes), function() { o.removeChild(this) })), a(n) && (i = C(r), C.each(n, function(t, e) { I.indexOf(t) > -1 ? i[t](e) : i.attr(t, e) })), r }, G.Z = function(t, e) {
            return new m(t, e) }, G.isZ = function(t) {
            return t instanceof G.Z }, G.init = function(t, e) {
            var r;
            if (!t) return G.Z();
            if ("string" == typeof t)
                if (t = t.trim(), "<" == t[0] && M.test(t)) r = G.fragment(t, RegExp.$1, e), t = null;
                else {
                    if (e !== j) return C(e).find(t);
                    r = G.qsa($, t) }
            else {
                if (n(t)) return C($).ready(t);
                if (G.isZ(t)) return t;
                if (te(t)) r = u(t);
                else if (o(t)) r = [t], t = null;
                else if (M.test(t)) r = G.fragment(t.trim(), RegExp.$1, e), t = null;
                else {
                    if (e !== j) return C(e).find(t);
                    r = G.qsa($, t) } }
            return G.Z(r, t) }, C = function(t, e) {
            return G.init(t, e) }, C.extend = function(t) {
            var e, n = D.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) { g(t, n, e) }), t }, G.qsa = function(t, e) {
            var n, r = "#" == e[0],
                i = !r && "." == e[0],
                o = r || i ? e.slice(1) : e,
                a = J.test(o);
            return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : D.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e)) }, C.contains = $.documentElement.contains ? function(t, e) {
            return t !== e && t.contains(e) } : function(t, e) {
            for (; e && (e = e.parentNode);)
                if (e === t) return !0;
            return !1 }, C.type = e, C.isFunction = n, C.isWindow = r, C.isArray = te, C.isPlainObject = a, C.isEmptyObject = function(t) {
            var e;
            for (e in t) return !1;
            return !0 }, C.isNumeric = function(t) {
            var e = +t,
                n = typeof t;
            return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1 }, C.inArray = function(t, e, n) {
            return P.indexOf.call(e, t, n) }, C.camelCase = N, C.trim = function(t) {
            return null == t ? "" : String.prototype.trim.call(t) }, C.uuid = 0, C.support = {}, C.expr = {}, C.noop = function() {}, C.map = function(t, e) {
            var n, r, i, o = [];
            if (s(t))
                for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && o.push(n);
            else
                for (i in t) n = e(t[i], i), null != n && o.push(n);
            return c(o) }, C.each = function(t, e) {
            var n, r;
            if (s(t)) {
                for (n = 0; n < t.length; n++)
                    if (e.call(t[n], n, t[n]) === !1) return t } else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) return t; return t }, C.grep = function(t, e) {
            return L.call(t, e) }, t.JSON && (C.parseJSON = JSON.parse), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) { W["[object " + e + "]"] = e.toLowerCase() }), C.fn = { constructor: G.Z, length: 0, forEach: P.forEach, reduce: P.reduce, push: P.push, sort: P.sort, splice: P.splice, indexOf: P.indexOf, concat: function() {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e;
                return A.apply(G.isZ(this) ? this.toArray() : this, n) }, map: function(t) {
                return C(C.map(this, function(e, n) {
                    return t.call(e, n, e) })) }, slice: function() {
                return C(D.apply(this, arguments)) }, ready: function(t) {
                return U.test($.readyState) && $.body ? t(C) : $.addEventListener("DOMContentLoaded", function() { t(C) }, !1), this }, get: function(t) {
                return t === j ? D.call(this) : this[0 > t ? t + this.length : t] }, toArray: function() {
                return this.get() }, size: function() {
                return this.length }, remove: function() {
                return this.each(function() { null != this.parentNode && this.parentNode.removeChild(this) }) }, each: function(t) {
                return P.every.call(this, function(e, n) {
                    return t.call(e, n, e) !== !1 }), this }, filter: function(t) {
                return n(t) ? this.not(this.not(t)) : C(L.call(this, function(e) {
                    return G.matches(e, t) })) }, add: function(t, e) {
                return C(O(this.concat(C(t, e)))) }, is: function(t) {
                return this.length > 0 && G.matches(this[0], t) }, not: function(t) {
                var e = [];
                if (n(t) && t.call !== j) this.each(function(n) { t.call(this, n) || e.push(this) });
                else {
                    var r = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? D.call(t) : C(t);
                    this.forEach(function(t) { r.indexOf(t) < 0 && e.push(t) }) }
                return C(e) }, has: function(t) {
                return this.filter(function() {
                    return o(t) ? C.contains(this, t) : C(this).find(t).size() }) }, eq: function(t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1) }, first: function() {
                var t = this[0];
                return t && !o(t) ? t : C(t) }, last: function() {
                var t = this[this.length - 1];
                return t && !o(t) ? t : C(t) }, find: function(t) {
                var e, n = this;
                return e = t ? "object" == typeof t ? C(t).filter(function() {
                    var t = this;
                    return P.some.call(n, function(e) {
                        return C.contains(e, t) }) }) : 1 == this.length ? C(G.qsa(this[0], t)) : this.map(function() {
                    return G.qsa(this, t) }) : C() }, closest: function(t, e) {
                var n = [],
                    r = "object" == typeof t && C(t);
                return this.each(function(o, a) {
                    for (; a && !(r ? r.indexOf(a) >= 0 : G.matches(a, t));) a = a !== e && !i(a) && a.parentNode;
                    a && n.indexOf(a) < 0 && n.push(a) }), C(n) }, parents: function(t) {
                for (var e = [], n = this; n.length > 0;) n = C.map(n, function(t) {
                    return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0 });
                return v(e, t) }, parent: function(t) {
                return v(O(this.pluck("parentNode")), t) }, children: function(t) {
                return v(this.map(function() {
                    return d(this) }), t) }, contents: function() {
                return this.map(function() {
                    return this.contentDocument || D.call(this.childNodes) }) }, siblings: function(t) {
                return v(this.map(function(t, e) {
                    return L.call(d(e.parentNode), function(t) {
                        return t !== e }) }), t) }, empty: function() {
                return this.each(function() { this.innerHTML = "" }) }, pluck: function(t) {
                return C.map(this, function(e) {
                    return e[t] }) }, show: function() {
                return this.each(function() { "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName)) }) }, replaceWith: function(t) {
                return this.before(t).remove() }, wrap: function(t) {
                var e = n(t);
                if (this[0] && !e) var r = C(t).get(0),
                    i = r.parentNode || this.length > 1;
                return this.each(function(n) { C(this).wrapAll(e ? t.call(this, n) : i ? r.cloneNode(!0) : r) }) }, wrapAll: function(t) {
                if (this[0]) { C(this[0]).before(t = C(t));
                    for (var e;
                        (e = t.children()).length;) t = e.first();
                    C(t).append(this) }
                return this }, wrapInner: function(t) {
                var e = n(t);
                return this.each(function(n) {
                    var r = C(this),
                        i = r.contents(),
                        o = e ? t.call(this, n) : t;
                    i.length ? i.wrapAll(o) : r.append(o) }) }, unwrap: function() {
                return this.parent().each(function() { C(this).replaceWith(C(this).children()) }), this }, clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0) }) }, hide: function() {
                return this.css("display", "none") }, toggle: function(t) {
                return this.each(function() {
                    var e = C(this);
                    (t === j ? "none" == e.css("display") : t) ? e.show(): e.hide() }) }, prev: function(t) {
                return C(this.pluck("previousElementSibling")).filter(t || "*") }, next: function(t) {
                return C(this.pluck("nextElementSibling")).filter(t || "*") }, html: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = this.innerHTML;
                    C(this).empty().append(y(this, t, e, n)) }) : 0 in this ? this[0].innerHTML : null }, text: function(t) {
                return 0 in arguments ? this.each(function(e) {
                    var n = y(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n }) : 0 in this ? this.pluck("textContent").join("") : null }, attr: function(t, e) {
                var n;
                return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                    if (1 === this.nodeType)
                        if (o(t))
                            for (w in t) x(this, w, t[w]);
                        else x(this, t, y(this, e, n, this.getAttribute(t))) }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(t)) ? n : j }, removeAttr: function(t) {
                return this.each(function() { 1 === this.nodeType && t.split(" ").forEach(function(t) { x(this, t) }, this) }) }, prop: function(t, e) {
                return t = Q[t] || t, 1 in arguments ? this.each(function(n) { this[t] = y(this, e, n, this[t]) }) : this[0] && this[0][t] }, removeProp: function(t) {
                return t = Q[t] || t, this.each(function() { delete this[t] }) }, data: function(t, e) {
                var n = "data-" + t.replace(_, "-$1").toLowerCase(),
                    r = 1 in arguments ? this.attr(n, e) : this.attr(n);
                return null !== r ? E(r) : j }, val: function(t) {
                return 0 in arguments ? (null == t && (t = ""), this.each(function(e) { this.value = y(this, t, e, this.value) })) : this[0] && (this[0].multiple ? C(this[0]).find("option").filter(function() {
                    return this.selected }).pluck("value") : this[0].value) }, offset: function(e) {
                if (e) return this.each(function(t) {
                    var n = C(this),
                        r = y(this, e, t, n.offset()),
                        i = n.offsetParent().offset(),
                        o = { top: r.top - i.top, left: r.left - i.left }; "static" == n.css("position") && (o.position = "relative"), n.css(o) });
                if (!this.length) return null;
                if ($.documentElement !== this[0] && !C.contains($.documentElement, this[0])) return { top: 0, left: 0 };
                var n = this[0].getBoundingClientRect();
                return { left: n.left + t.pageXOffset, top: n.top + t.pageYOffset, width: Math.round(n.width), height: Math.round(n.height) } }, css: function(t, n) {
                if (arguments.length < 2) {
                    var r = this[0];
                    if ("string" == typeof t) {
                        if (!r) return;
                        return r.style[N(t)] || getComputedStyle(r, "").getPropertyValue(t) }
                    if (te(t)) {
                        if (!r) return;
                        var i = {},
                            o = getComputedStyle(r, "");
                        return C.each(t, function(t, e) { i[e] = r.style[N(e)] || o.getPropertyValue(e) }), i } }
                var a = "";
                if ("string" == e(t)) n || 0 === n ? a = l(t) + ":" + h(t, n) : this.each(function() { this.style.removeProperty(l(t)) });
                else
                    for (w in t) t[w] || 0 === t[w] ? a += l(w) + ":" + h(w, t[w]) + ";" : this.each(function() { this.style.removeProperty(l(w)) });
                return this.each(function() { this.style.cssText += ";" + a }) }, index: function(t) {
                return t ? this.indexOf(C(t)[0]) : this.parent().children().indexOf(this[0]) }, hasClass: function(t) {
                return t ? P.some.call(this, function(t) {
                    return this.test(b(t)) }, f(t)) : !1 }, addClass: function(t) {
                return t ? this.each(function(e) {
                    if ("className" in this) { S = [];
                        var n = b(this),
                            r = y(this, t, e, n);
                        r.split(/\s+/g).forEach(function(t) { C(this).hasClass(t) || S.push(t) }, this), S.length && b(this, n + (n ? " " : "") + S.join(" ")) } }) : this }, removeClass: function(t) {
                return this.each(function(e) {
                    if ("className" in this) {
                        if (t === j) return b(this, "");
                        S = b(this), y(this, t, e, S).split(/\s+/g).forEach(function(t) { S = S.replace(f(t), " ") }), b(this, S.trim()) } }) }, toggleClass: function(t, e) {
                return t ? this.each(function(n) {
                    var r = C(this),
                        i = y(this, t, n, b(this));
                    i.split(/\s+/g).forEach(function(t) {
                        (e === j ? !r.hasClass(t) : e) ? r.addClass(t): r.removeClass(t) }) }) : this }, scrollTop: function(t) {
                if (this.length) {
                    var e = "scrollTop" in this[0];
                    return t === j ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() { this.scrollTop = t } : function() { this.scrollTo(this.scrollX, t) }) } }, scrollLeft: function(t) {
                if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return t === j ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() { this.scrollLeft = t } : function() { this.scrollTo(t, this.scrollY) }) } }, position: function() {
                if (this.length) {
                    var t = this[0],
                        e = this.offsetParent(),
                        n = this.offset(),
                        r = q.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
                    return n.top -= parseFloat(C(t).css("margin-top")) || 0, n.left -= parseFloat(C(t).css("margin-left")) || 0, r.top += parseFloat(C(e[0]).css("border-top-width")) || 0, r.left += parseFloat(C(e[0]).css("border-left-width")) || 0, { top: n.top - r.top, left: n.left - r.left } } }, offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || $.body; t && !q.test(t.nodeName) && "static" == C(t).css("position");) t = t.offsetParent;
                    return t }) } }, C.fn.detach = C.fn.remove, ["width", "height"].forEach(function(t) {
            var e = t.replace(/./, function(t) {
                return t[0].toUpperCase() });
            C.fn[t] = function(n) {
                var o, a = this[0];
                return n === j ? r(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) { a = C(this), a.css(t, y(this, n, e, a[t]())) }) } }), H.forEach(function(n, r) {
            var i = r % 2;
            C.fn[n] = function() {
                var n, o, a = C.map(arguments, function(t) {
                        var r = [];
                        return n = e(t), "array" == n ? (t.forEach(function(t) {
                            return t.nodeType !== j ? r.push(t) : C.zepto.isZ(t) ? r = r.concat(t.get()) : void(r = r.concat(G.fragment(t))) }), r) : "object" == n || null == t ? t : G.fragment(t) }),
                    s = this.length > 1;
                return a.length < 1 ? this : this.each(function(e, n) { o = i ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
                    var u = C.contains($.documentElement, o);
                    a.forEach(function(e) {
                        if (s) e = e.cloneNode(!0);
                        else if (!o) return C(e).remove();
                        o.insertBefore(e, n), u && T(e, function(e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                n.eval.call(n, e.innerHTML) } }) }) }) }, C.fn[i ? n + "To" : "insert" + (r ? "Before" : "After")] = function(t) {
                return C(t)[n](this), this } }), G.Z.prototype = m.prototype = C.fn, G.uniq = O, G.deserializeValue = E, C.zepto = G, C }();
    return t.Zepto = e, void 0 === t.$ && (t.$ = e),
        function(e) {
            function n(t) {
                return t._zid || (t._zid = p++) }

            function r(t, e, r, a) {
                if (e = i(e), e.ns) var s = o(e.ns);
                return (v[n(t)] || []).filter(function(t) {
                    return !(!t || e.e && t.e != e.e || e.ns && !s.test(t.ns) || r && n(t.fn) !== n(r) || a && t.sel != a) }) }

            function i(t) {
                var e = ("" + t).split(".");
                return { e: e[0], ns: e.slice(1).sort().join(" ") } }

            function o(t) {
                return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)") }

            function a(t, e) {
                return t.del && !x && t.e in b || !!e }

            function s(t) {
                return E[t] || x && b[t] || t }

            function u(t, r, o, u, c, f, p) {
                var d = n(t),
                    m = v[d] || (v[d] = []);
                r.split(/\s/).forEach(function(n) {
                    if ("ready" == n) return e(document).ready(o);
                    var r = i(n);
                    r.fn = o, r.sel = c, r.e in E && (o = function(t) {
                        var n = t.relatedTarget;
                        return !n || n !== this && !e.contains(this, n) ? r.fn.apply(this, arguments) : void 0 }), r.del = f;
                    var d = f || o;
                    r.proxy = function(e) {
                        if (e = l(e), !e.isImmediatePropagationStopped()) { e.data = u;
                            var n = d.apply(t, e._args == h ? [e] : [e].concat(e._args));
                            return n === !1 && (e.preventDefault(), e.stopPropagation()), n } }, r.i = m.length, m.push(r), "addEventListener" in t && t.addEventListener(s(r.e), r.proxy, a(r, p)) }) }

            function c(t, e, i, o, u) {
                var c = n(t);
                (e || "").split(/\s/).forEach(function(e) { r(t, e, i, o).forEach(function(e) { delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, a(e, u)) }) }) }

            function l(t, n) {
                return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(C, function(e, r) {
                    var i = n[e];
                    t[e] = function() {
                        return this[r] = T, i && i.apply(n, arguments) }, t[r] = j }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = T)), t }

            function f(t) {
                var e, n = { originalEvent: t };
                for (e in t) w.test(e) || t[e] === h || (n[e] = t[e]);
                return l(n, t) }
            var h, p = 1,
                d = Array.prototype.slice,
                m = e.isFunction,
                g = function(t) {
                    return "string" == typeof t },
                v = {},
                y = {},
                x = "onfocusin" in t,
                b = { focus: "focusin", blur: "focusout" },
                E = { mouseenter: "mouseover", mouseleave: "mouseout" };
            y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", e.event = { add: u, remove: c }, e.proxy = function(t, r) {
                var i = 2 in arguments && d.call(arguments, 2);
                if (m(t)) {
                    var o = function() {
                        return t.apply(r, i ? i.concat(d.call(arguments)) : arguments) };
                    return o._zid = n(t), o }
                if (g(r)) return i ? (i.unshift(t[r], t), e.proxy.apply(null, i)) : e.proxy(t[r], t);
                throw new TypeError("expected function") }, e.fn.bind = function(t, e, n) {
                return this.on(t, e, n) }, e.fn.unbind = function(t, e) {
                return this.off(t, e) }, e.fn.one = function(t, e, n, r) {
                return this.on(t, e, n, r, 1) };
            var T = function() {
                    return !0 },
                j = function() {
                    return !1 },
                w = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                C = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };
            e.fn.delegate = function(t, e, n) {
                return this.on(e, t, n) }, e.fn.undelegate = function(t, e, n) {
                return this.off(e, t, n) }, e.fn.live = function(t, n) {
                return e(document.body).delegate(this.selector, t, n), this }, e.fn.die = function(t, n) {
                return e(document.body).undelegate(this.selector, t, n), this }, e.fn.on = function(t, n, r, i, o) {
                var a, s, l = this;
                return t && !g(t) ? (e.each(t, function(t, e) { l.on(t, n, r, e, o) }), l) : (g(n) || m(i) || i === !1 || (i = r, r = n, n = h), (i === h || r === !1) && (i = r, r = h), i === !1 && (i = j), l.each(function(l, h) { o && (a = function(t) {
                        return c(h, t.type, i), i.apply(this, arguments) }), n && (s = function(t) {
                        var r, o = e(t.target).closest(n, h).get(0);
                        return o && o !== h ? (r = e.extend(f(t), { currentTarget: o, liveFired: h }), (a || i).apply(o, [r].concat(d.call(arguments, 1)))) : void 0 }), u(h, t, i, r, n, s || a) })) }, e.fn.off = function(t, n, r) {
                var i = this;
                return t && !g(t) ? (e.each(t, function(t, e) { i.off(t, n, e) }), i) : (g(n) || m(r) || r === !1 || (r = n, n = h), r === !1 && (r = j), i.each(function() { c(this, t, r, n) })) }, e.fn.trigger = function(t, n) {
                return t = g(t) || e.isPlainObject(t) ? e.Event(t) : l(t), t._args = n, this.each(function() { t.type in b && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n) }) }, e.fn.triggerHandler = function(t, n) {
                var i, o;
                return this.each(function(a, s) { i = f(g(t) ? e.Event(t) : t), i._args = n, i.target = s, e.each(r(s, t.type || t), function(t, e) {
                        return o = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0 }) }), o }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) { e.fn[t] = function(e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t) } }), e.Event = function(t, e) { g(t) || (e = t, t = e.type);
                var n = document.createEvent(y[t] || "Events"),
                    r = !0;
                if (e)
                    for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
                return n.initEvent(t, r, !0), l(n) } }(e),
        function(e) {
            function n(t, n, r) {
                var i = e.Event(n);
                return e(t).trigger(i, r), !i.isDefaultPrevented() }

            function r(t, e, r, i) {
                return t.global ? n(e || b, r, i) : void 0 }

            function i(t) { t.global && 0 === e.active++ && r(t, null, "ajaxStart") }

            function o(t) { t.global && !--e.active && r(t, null, "ajaxStop") }

            function a(t, e) {
                var n = e.context;
                return e.beforeSend.call(n, t, e) === !1 || r(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void r(e, n, "ajaxSend", [t, e]) }

            function s(t, e, n, i) {
                var o = n.context,
                    a = "success";
                n.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), r(n, o, "ajaxSuccess", [e, n, t]), c(a, e, n) }

            function u(t, e, n, i, o) {
                var a = i.context;
                i.error.call(a, n, e, t), o && o.rejectWith(a, [n, e, t]), r(i, a, "ajaxError", [n, i, t || e]), c(e, n, i) }

            function c(t, e, n) {
                var i = n.context;
                n.complete.call(i, e, t), r(n, i, "ajaxComplete", [e, n]), o(n) }

            function l(t, e, n) {
                if (n.dataFilter == f) return t;
                var r = n.context;
                return n.dataFilter.call(r, t, e) }

            function f() {}

            function h(t) {
                return t && (t = t.split(";", 2)[0]), t && (t == C ? "html" : t == w ? "json" : T.test(t) ? "script" : j.test(t) && "xml") || "text" }

            function p(t, e) {
                return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?") }

            function d(t) { t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = p(t.url, t.data), t.data = void 0) }

            function m(t, n, r, i) {
                return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), { url: t, data: n, success: r, dataType: i } }

            function g(t, n, r, i) {
                var o, a = e.isArray(n),
                    s = e.isPlainObject(n);
                e.each(n, function(n, u) { o = e.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? g(t, u, r, n) : t.add(n, u) }) }
            var v, y, x = +new Date,
                b = t.document,
                E = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                T = /^(?:text|application)\/javascript/i,
                j = /^(?:text|application)\/xml/i,
                w = "application/json",
                C = "text/html",
                S = /^\s*$/,
                N = b.createElement("a");
            N.href = t.location.href, e.active = 0, e.ajaxJSONP = function(n, r) {
                if (!("type" in n)) return e.ajax(n);
                var i, o, c = n.jsonpCallback,
                    l = (e.isFunction(c) ? c() : c) || "Zepto" + x++,
                    f = b.createElement("script"),
                    h = t[l],
                    p = function(t) { e(f).triggerHandler("error", t || "abort") },
                    d = { abort: p };
                return r && r.promise(d), e(f).on("load error", function(a, c) { clearTimeout(o), e(f).off().remove(), "error" != a.type && i ? s(i[0], d, n, r) : u(null, c || "error", d, n, r), t[l] = h, i && e.isFunction(h) && h(i[0]), h = i = void 0 }), a(d, n) === !1 ? (p("abort"), d) : (t[l] = function() { i = arguments }, f.src = n.url.replace(/\?(.+)=\?/, "?$1=" + l), b.head.appendChild(f), n.timeout > 0 && (o = setTimeout(function() { p("timeout") }, n.timeout)), d) }, e.ajaxSettings = { type: "GET", beforeSend: f, success: f, error: f, complete: f, context: null, global: !0, xhr: function() {
                    return new t.XMLHttpRequest }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: w, xml: "application/xml, text/xml", html: C, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0, dataFilter: f }, e.ajax = function(n) {
                var r, o, c = e.extend({}, n || {}),
                    m = e.Deferred && e.Deferred();
                for (v in e.ajaxSettings) void 0 === c[v] && (c[v] = e.ajaxSettings[v]);
                i(c), c.crossDomain || (r = b.createElement("a"), r.href = c.url, r.href = r.href, c.crossDomain = N.protocol + "//" + N.host != r.protocol + "//" + r.host), c.url || (c.url = "" + t.location), (o = c.url.indexOf("#")) > -1 && (c.url = c.url.slice(0, o)), d(c);
                var g = c.dataType,
                    x = /\?.+=\?/.test(c.url);
                if (x && (g = "jsonp"), c.cache !== !1 && (n && n.cache === !0 || "script" != g && "jsonp" != g) || (c.url = p(c.url, "_=" + Date.now())), "jsonp" == g) return x || (c.url = p(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(c, m);
                var E, T = c.accepts[g],
                    j = {},
                    w = function(t, e) { j[t.toLowerCase()] = [t, e] },
                    C = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : t.location.protocol,
                    O = c.xhr(),
                    P = O.setRequestHeader;
                if (m && m.promise(O), c.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", T || "*/*"), (T = c.mimeType || T) && (T.indexOf(",") > -1 && (T = T.split(",", 2)[0]), O.overrideMimeType && O.overrideMimeType(T)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && w("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers)
                    for (y in c.headers) w(y, c.headers[y]);
                if (O.setRequestHeader = w, O.onreadystatechange = function() {
                        if (4 == O.readyState) { O.onreadystatechange = f, clearTimeout(E);
                            var t, n = !1;
                            if (O.status >= 200 && O.status < 300 || 304 == O.status || 0 == O.status && "file:" == C) {
                                if (g = g || h(c.mimeType || O.getResponseHeader("content-type")), "arraybuffer" == O.responseType || "blob" == O.responseType) t = O.response;
                                else { t = O.responseText;
                                    try { t = l(t, g, c), "script" == g ? (1, eval)(t) : "xml" == g ? t = O.responseXML : "json" == g && (t = S.test(t) ? null : e.parseJSON(t)) } catch (r) { n = r }
                                    if (n) return u(n, "parsererror", O, c, m) }
                                s(t, O, c, m) } else u(O.statusText || null, O.status ? "error" : "abort", O, c, m) } }, a(O, c) === !1) return O.abort(), u(null, "abort", O, c, m), O;
                var A = "async" in c ? c.async : !0;
                if (O.open(c.type, c.url, A, c.username, c.password), c.xhrFields)
                    for (y in c.xhrFields) O[y] = c.xhrFields[y];
                for (y in j) P.apply(O, j[y]);
                return c.timeout > 0 && (E = setTimeout(function() { O.onreadystatechange = f, O.abort(), u(null, "timeout", O, c, m) }, c.timeout)), O.send(c.data ? c.data : null), O }, e.get = function() {
                return e.ajax(m.apply(null, arguments)) }, e.post = function() {
                var t = m.apply(null, arguments);
                return t.type = "POST", e.ajax(t) }, e.getJSON = function() {
                var t = m.apply(null, arguments);
                return t.dataType = "json", e.ajax(t) }, e.fn.load = function(t, n, r) {
                if (!this.length) return this;
                var i, o = this,
                    a = t.split(/\s/),
                    s = m(t, n, r),
                    u = s.success;
                return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function(t) { o.html(i ? e("<div>").html(t.replace(E, "")).find(i) : t), u && u.apply(o, arguments) }, e.ajax(s), this };
            var O = encodeURIComponent;
            e.param = function(t, n) {
                var r = [];
                return r.add = function(t, n) { e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(O(t) + "=" + O(n)) }, g(r, t, n), r.join("&").replace(/%20/g, "+") } }(e),
        function(t) { t.fn.serializeArray = function() {
                var e, n, r = [],
                    i = function(t) {
                        return t.forEach ? t.forEach(i) : void r.push({ name: e, value: t }) };
                return this[0] && t.each(this[0].elements, function(r, o) { n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val()) }), r }, t.fn.serialize = function() {
                var t = [];
                return this.serializeArray().forEach(function(e) { t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)) }), t.join("&") }, t.fn.submit = function(e) {
                if (0 in arguments) this.bind("submit", e);
                else if (this.length) {
                    var n = t.Event("submit");
                    this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit() }
                return this } }(e),
        function() {
            try { getComputedStyle(void 0) } catch (e) {
                var n = getComputedStyle;
                t.getComputedStyle = function(t, e) {
                    try {
                        return n(t, e) } catch (r) {
                        return null } } } }(), e }),
function(t, e) {
    function n(t) {
        return t.replace(/([A-Z])/g, "-$1").toLowerCase() }

    function r(t) {
        return i ? i + t : t.toLowerCase() }
    var i, o, a, s, u, c, l, f, h, p, d = "",
        m = { Webkit: "webkit", Moz: "", O: "o" },
        g = document.createElement("div"),
        v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
        y = {};
    g.style.transform === e && t.each(m, function(t, n) {
        return g.style[t + "TransitionProperty"] !== e ? (d = "-" + t.toLowerCase() + "-", i = n, !1) : e }), o = d + "transform", y[a = d + "transition-property"] = y[s = d + "transition-duration"] = y[c = d + "transition-delay"] = y[u = d + "transition-timing-function"] = y[l = d + "animation-name"] = y[f = d + "animation-duration"] = y[p = d + "animation-delay"] = y[h = d + "animation-timing-function"] = "", t.fx = { off: i === e && g.style.transitionProperty === e, speeds: { _default: 400, fast: 200, slow: 600 }, cssPrefix: d, transitionEnd: r("TransitionEnd"), animationEnd: r("AnimationEnd") }, t.fn.animate = function(n, r, i, o, a) {
        return t.isFunction(r) && (o = r, i = e, r = e), t.isFunction(i) && (o = i, i = e), t.isPlainObject(r) && (i = r.easing, o = r.complete, a = r.delay, r = r.duration), r && (r = ("number" == typeof r ? r : t.fx.speeds[r] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, r, i, o, a) }, t.fn.anim = function(r, i, d, m, g) {
        var x, b, E, T = {},
            j = "",
            w = this,
            C = t.fx.transitionEnd,
            S = !1;
        if (i === e && (i = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (i = 0), "string" == typeof r) T[l] = r, T[f] = i + "s", T[p] = g + "s", T[h] = d || "linear", C = t.fx.animationEnd;
        else { b = [];
            for (x in r) v.test(x) ? j += x + "(" + r[x] + ") " : (T[x] = r[x], b.push(n(x)));
            j && (T[o] = j, b.push(o)), i > 0 && "object" == typeof r && (T[a] = b.join(", "), T[s] = i + "s", T[c] = g + "s", T[u] = d || "linear") }
        return E = function(n) {
            if (e !== n) {
                if (n.target !== n.currentTarget) return;
                t(n.target).unbind(C, E) } else t(this).unbind(C, E);
            S = !0, t(this).css(y), m && m.call(this) }, i > 0 && (this.bind(C, E), setTimeout(function() { S || E.call(w) }, 1e3 * (i + g) + 25)), this.size() && this.get(0).clientLeft, this.css(T), i > 0 || setTimeout(function() { w.each(function() { E.call(this) }) }, 0), this }, g = null }(Zepto),
function(t, e) {
    function n(n, r, i, o, a) { "function" != typeof r || a || (a = r, r = e);
        var s = { opacity: i };
        return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, r, null, a) }

    function r(e, r, i, o) {
        return n(e, r, 0, i, function() { a.call(t(this)), o && o.call(this) }) }
    var i = window.document,
        o = (i.documentElement, t.fn.show),
        a = t.fn.hide,
        s = t.fn.toggle;
    t.fn.show = function(t, r) {
        return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", r) }, t.fn.hide = function(t, n) {
        return t === e ? a.call(this) : r(this, t, "0,0", n) }, t.fn.toggle = function(n, r) {
        return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
            var e = t(this);
            e["none" == e.css("display") ? "show" : "hide"](n, r) }) }, t.fn.fadeTo = function(t, e, r) {
        return n(this, t, e, null, r) }, t.fn.fadeIn = function(t, e) {
        var n = this.css("opacity");
        return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e) }, t.fn.fadeOut = function(t, e) {
        return r(this, t, null, e) }, t.fn.fadeToggle = function(e, n) {
        return this.each(function() {
            var r = t(this);
            r[0 == r.css("opacity") || "none" == r.css("display") ? "fadeIn" : "fadeOut"](e, n) }) } }(Zepto);

/*! Sea.js 2.3.0 | seajs.org/LICENSE.md */
! function(a, b) {
    function c(a) {
        return function(b) {
            return {}.toString.call(b) == "[object " + a + "]" } }

    function d() {
        return z++ }

    function e(a) {
        return a.match(C)[0] }

    function f(a) {
        for (a = a.replace(D, "/"), a = a.replace(F, "$1/"); a.match(E);) a = a.replace(E, "/");
        return a }

    function g(a) {
        var b = a.length - 1,
            c = a.charAt(b);
        return "#" === c ? a.substring(0, b) : ".js" === a.substring(b - 2) || a.indexOf("?") > 0 || "/" === c ? a : a + ".js" }

    function h(a) {
        var b = u.alias;
        return b && w(b[a]) ? b[a] : a }

    function i(a) {
        var b = u.paths,
            c;
        return b && (c = a.match(G)) && w(b[c[1]]) && (a = b[c[1]] + c[2]), a }

    function j(a) {
        var b = u.vars;
        return b && a.indexOf("{") > -1 && (a = a.replace(H, function(a, c) {
            return w(b[c]) ? b[c] : a })), a }

    function k(a) {
        var b = u.map,
            c = a;
        if (b)
            for (var d = 0, e = b.length; e > d; d++) {
                var f = b[d];
                if (c = y(f) ? f(a) || a : a.replace(f[0], f[1]), c !== a) break }
        return c }

    function l(a, b) {
        var c, d = a.charAt(0);
        if (I.test(a)) c = a;
        else if ("." === d) c = f((b ? e(b) : u.cwd) + a);
        else if ("/" === d) {
            var g = u.cwd.match(J);
            c = g ? g[0] + a.substring(1) : a } else c = u.base + a;
        return 0 === c.indexOf("//") && (c = location.protocol + c), c }

    function m(a, b) {
        if (!a) return "";
        a = h(a), a = i(a), a = j(a), a = g(a);
        var c = l(a, b);
        return c = k(c) }

    function n(a) {
        return a.hasAttribute ? a.src : a.getAttribute("src", 4) }

    function o(a, b, c) {
        var d = K.createElement("script");
        if (c) {
            var e = y(c) ? c(a) : c;
            e && (d.charset = e) }
        p(d, b, a), d.async = !0, d.src = a, R = d, Q ? P.insertBefore(d, Q) : P.appendChild(d), R = null }

    function p(a, b, c) {
        function d() { a.onload = a.onerror = a.onreadystatechange = null, u.debug || P.removeChild(a), a = null, b() }
        var e = "onload" in a;
        e ? (a.onload = d, a.onerror = function() { B("error", { uri: c, node: a }), d() }) : a.onreadystatechange = function() { /loaded|complete/.test(a.readyState) && d() } }

    function q() {
        if (R) return R;
        if (S && "interactive" === S.readyState) return S;
        for (var a = P.getElementsByTagName("script"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ("interactive" === c.readyState) return S = c } }

    function r(a) {
        var b = [];
        return a.replace(U, "").replace(T, function(a, c, d) { d && b.push(d) }), b }

    function s(a, b) { this.uri = a, this.dependencies = b || [], this.exports = null, this.status = 0, this._waitings = {}, this._remain = 0 }
    if (!a.seajs) {
        var t = a.seajs = { version: "2.3.0" },
            u = t.data = {},
            v = c("Object"),
            w = c("String"),
            x = Array.isArray || c("Array"),
            y = c("Function"),
            z = 0,
            A = u.events = {};
        t.on = function(a, b) {
            var c = A[a] || (A[a] = []);
            return c.push(b), t }, t.off = function(a, b) {
            if (!a && !b) return A = u.events = {}, t;
            var c = A[a];
            if (c)
                if (b)
                    for (var d = c.length - 1; d >= 0; d--) c[d] === b && c.splice(d, 1);
                else delete A[a];
            return t };
        var B = t.emit = function(a, b) {
                var c = A[a],
                    d;
                if (c) { c = c.slice();
                    for (var e = 0, f = c.length; f > e; e++) c[e](b) }
                return t },
            C = /[^?#]*\//,
            D = /\/\.\//g,
            E = /\/[^/]+\/\.\.\//,
            F = /([^:/])\/+\//g,
            G = /^([^/:]+)(\/.+)$/,
            H = /{([^{]+)}/g,
            I = /^\/\/.|:\//,
            J = /^.*?\/\/.*?\//,
            K = document,
            L = location.href && 0 !== location.href.indexOf("about:") ? e(location.href) : "",
            M = K.scripts,
            N = K.getElementById("seajsnode") || M[M.length - 1],
            O = e(n(N) || L);
        t.resolve = m;
        var P = K.head || K.getElementsByTagName("head")[0] || K.documentElement,
            Q = P.getElementsByTagName("base")[0],
            R, S;
        t.request = o;
        var T = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,
            U = /\\\\/g,
            V = t.cache = {},
            W, X = {},
            Y = {},
            Z = {},
            $ = s.STATUS = { FETCHING: 1, SAVED: 2, LOADING: 3, LOADED: 4, EXECUTING: 5, EXECUTED: 6 };
        s.prototype.resolve = function() {
            for (var a = this, b = a.dependencies, c = [], d = 0, e = b.length; e > d; d++) c[d] = s.resolve(b[d], a.uri);
            return c }, s.prototype.load = function() {
            var a = this;
            if (!(a.status >= $.LOADING)) { a.status = $.LOADING;
                var c = a.resolve();
                B("load", c);
                for (var d = a._remain = c.length, e, f = 0; d > f; f++) e = s.get(c[f]), e.status < $.LOADED ? e._waitings[a.uri] = (e._waitings[a.uri] || 0) + 1 : a._remain--;
                if (0 === a._remain) return a.onload(), b;
                var g = {};
                for (f = 0; d > f; f++) e = V[c[f]], e.status < $.FETCHING ? e.fetch(g) : e.status === $.SAVED && e.load();
                for (var h in g) g.hasOwnProperty(h) && g[h]() } }, s.prototype.onload = function() {
            var a = this;
            a.status = $.LOADED, a.callback && a.callback();
            var b = a._waitings,
                c, d;
            for (c in b) b.hasOwnProperty(c) && (d = V[c], d._remain -= b[c], 0 === d._remain && d.onload());
            delete a._waitings, delete a._remain }, s.prototype.fetch = function(a) {
            function c() { t.request(g.requestUri, g.onRequest, g.charset) }

            function d() { delete X[h], Y[h] = !0, W && (s.save(f, W), W = null);
                var a, b = Z[h];
                for (delete Z[h]; a = b.shift();) a.load() }
            var e = this,
                f = e.uri;
            e.status = $.FETCHING;
            var g = { uri: f };
            B("fetch", g);
            var h = g.requestUri || f;
            return !h || Y[h] ? (e.load(), b) : X[h] ? (Z[h].push(e), b) : (X[h] = !0, Z[h] = [e], B("request", g = { uri: f, requestUri: h, onRequest: d, charset: u.charset }), g.requested || (a ? a[g.requestUri] = c : c()), b) }, s.prototype.exec = function() {
            function a(b) {
                return s.get(a.resolve(b)).exec() }
            var c = this;
            if (c.status >= $.EXECUTING) return c.exports;
            c.status = $.EXECUTING;
            var e = c.uri;
            a.resolve = function(a) {
                return s.resolve(a, e) }, a.async = function(b, c) {
                return s.use(b, c, e + "_async_" + d()), a };
            var f = c.factory,
                g = y(f) ? f(a, c.exports = {}, c) : f;
            return g === b && (g = c.exports), delete c.factory, c.exports = g, c.status = $.EXECUTED, B("exec", c), g }, s.resolve = function(a, b) {
            var c = { id: a, refUri: b };
            return B("resolve", c), c.uri || t.resolve(c.id, b) }, s.define = function(a, c, d) {
            var e = arguments.length;
            1 === e ? (d = a, a = b) : 2 === e && (d = c, x(a) ? (c = a, a = b) : c = b), !x(c) && y(d) && (c = r("" + d));
            var f = { id: a, uri: s.resolve(a), deps: c, factory: d };
            if (!f.uri && K.attachEvent) {
                var g = q();
                g && (f.uri = g.src) }
            B("define", f), f.uri ? s.save(f.uri, f) : W = f }, s.save = function(a, b) {
            var c = s.get(a);
            c.status < $.SAVED && (c.id = b.id || a, c.dependencies = b.deps || [], c.factory = b.factory, c.status = $.SAVED, B("save", c)) }, s.get = function(a, b) {
            return V[a] || (V[a] = new s(a, b)) }, s.use = function(b, c, d) {
            var e = s.get(d, x(b) ? b : [b]);
            e.callback = function() {
                for (var b = [], d = e.resolve(), f = 0, g = d.length; g > f; f++) b[f] = V[d[f]].exec();
                c && c.apply(a, b), delete e.callback }, e.load() }, t.use = function(a, b) {
            return s.use(a, b, u.cwd + "_use_" + d()), t }, s.define.cmd = {}, a.define = s.define, t.Module = s, u.fetchedList = Y, u.cid = d, t.require = function(a) {
            var b = s.get(s.resolve(a));
            return b.status < $.EXECUTING && (b.onload(), b.exec()), b.exports }, u.base = O, u.dir = O, u.cwd = L, u.charset = "utf-8", t.config = function(a) {
            for (var b in a) {
                var c = a[b],
                    d = u[b];
                if (d && v(d))
                    for (var e in c) d[e] = c[e];
                else x(d) ? c = d.concat(c) : "base" === b && ("/" !== c.slice(-1) && (c += "/"), c = l(c)), u[b] = c }
            return B("config", a), t } } }(this);

// 设置路径，方便跨目录调用
seajs.config({ paths: { L: "lib", M: "..", U: "utils" } });
