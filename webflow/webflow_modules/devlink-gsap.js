/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

function wt(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return o;
}
function Xi(o, t) {
  (o.prototype = Object.create(t.prototype)),
    (o.prototype.constructor = o),
    (o.__proto__ = t);
}
var at = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  ue = { duration: 0.5, overwrite: !1, delay: 0 },
  ri,
  K,
  I,
  dt = 1e8,
  N = 1 / dt,
  je = Math.PI * 2,
  Zr = je / 4,
  $r = 0,
  qi = Math.sqrt,
  Jr = Math.cos,
  tn = Math.sin,
  Q = function (t) {
    return typeof t == "string";
  },
  Y = function (t) {
    return typeof t == "function";
  },
  St = function (t) {
    return typeof t == "number";
  },
  Me = function (t) {
    return typeof t > "u";
  },
  xt = function (t) {
    return typeof t == "object";
  },
  st = function (t) {
    return t !== !1;
  },
  ni = function () {
    return typeof window < "u";
  },
  ve = function (t) {
    return Y(t) || Q(t);
  },
  Gi =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  $ = Array.isArray,
  en = /random\([^)]+\)/g,
  rn = /,\s*/g,
  Ni = /(?:-?\.?\d|\.)+/gi,
  si = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Bt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  We = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ai = /[+-]=-?[.\d]+/,
  nn = /[^,'"\[\]\s]+/gi,
  sn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  V,
  gt,
  Qe,
  oi,
  lt = {},
  Se = {},
  ji,
  Qi = function (t) {
    return (Se = jt(t, lt)) && J;
  },
  Re = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  fe = function (t, e) {
    return !e && console.warn(t);
  },
  Ki = function (t, e) {
    return (t && (lt[t] = e) && Se && (Se[t] = e)) || lt;
  },
  le = function () {
    return 0;
  },
  an = { suppressEvents: !0, isStart: !0, kill: !1 },
  Te = { suppressEvents: !0, kill: !1 },
  on = { suppressEvents: !0 },
  ui = {},
  kt = [],
  Ke = {},
  Hi,
  rt = {},
  Ve = {},
  Li = 30,
  we = [],
  fi = "",
  li = function (t) {
    var e = t[0],
      i,
      r;
    if ((xt(e) || Y(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
      for (r = we.length; r-- && !we[r].targetTest(e); );
      i = we[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new di(t[r], i)))) ||
        t.splice(r, 1);
    return t;
  },
  Mt = function (t) {
    return t._gsap || li(pt(t))[0]._gsap;
  },
  hi = function (t, e, i) {
    return (i = t[e]) && Y(i)
      ? t[e]()
      : (Me(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  et = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  X = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  W = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  Wt = function (t, e) {
    var i = e.charAt(0),
      r = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
    );
  },
  un = function (t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
    return r < i;
  },
  Pe = function () {
    var t = kt.length,
      e = kt.slice(0),
      i,
      r;
    for (Ke = {}, kt.length = 0, i = 0; i < t; i++)
      (r = e[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  _i = function (t) {
    return !!(t._initted || t._startAt || t.add);
  },
  Zi = function (t, e, i, r) {
    kt.length && !K && Pe(),
      t.render(e, i, r || !!(K && e < 0 && _i(t))),
      kt.length && !K && Pe();
  },
  $i = function (t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(nn).length < 2
      ? e
      : Q(t)
      ? t.trim()
      : t;
  },
  Ji = function (t) {
    return t;
  },
  ht = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  fn = function (t) {
    return function (e, i) {
      for (var r in i)
        r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
    };
  },
  jt = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Ii = function o(t, e) {
    for (var i in e)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (t[i] = xt(e[i]) ? o(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t;
  },
  Ce = function (t, e) {
    var i = {},
      r;
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  },
  se = function (t) {
    var e = t.parent || V,
      i = t.keyframes ? fn($(t.keyframes)) : ht;
    if (st(t.inherit))
      for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  },
  ln = function (t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
    return i < 0;
  },
  tr = function (t, e, i, r, n) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = t[r],
      a;
    if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)),
      e._next ? (e._next._prev = e) : (t[r] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  },
  Ae = function (t, e, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = e._prev,
      s = e._next;
    n ? (n._next = s) : t[i] === e && (t[i] = s),
      s ? (s._prev = n) : t[r] === e && (t[r] = n),
      (e._next = e._prev = e.parent = null);
  },
  Rt = function (t, e) {
    t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  },
  Nt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
    return t;
  },
  hn = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  He = function (t, e, i, r) {
    return (
      t._startAt &&
      (K
        ? t._startAt.revert(Te)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, r))
    );
  },
  _n = function o(t) {
    return !t || (t._ts && o(t.parent));
  },
  Bi = function (t) {
    return t._repeat ? Qt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  Qt = function (t, e) {
    var i = Math.floor((t = W(t / e)));
    return t && i === t ? i - 1 : i;
  },
  Oe = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  Ee = function (t) {
    return (t._end = W(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || N) || 0)
    ));
  },
  De = function (t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = W(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Ee(t),
        i._dirty || Nt(i, t)),
      t
    );
  },
  er = function (t, e) {
    var i;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((i = Oe(t.rawTime(), e)),
        (!e._dur || ce(0, e.totalDuration(), i) - e._tTime > N) &&
          e.render(i, !0)),
      Nt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      t._zTime = -N;
    }
  },
  yt = function (t, e, i, r) {
    return (
      e.parent && Rt(e),
      (e._start = W(
        (St(i) ? i : i || t !== V ? ct(t, i, e) : t._time) + e._delay
      )),
      (e._end = W(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      tr(t, e, "_first", "_last", t._sort ? "_start" : 0),
      Ze(e) || (t._recent = e),
      r || er(t, e),
      t._ts < 0 && De(t, t._tTime),
      t
    );
  },
  ir = function (t, e) {
    return (
      (lt.ScrollTrigger || Re("scrollTrigger", e)) &&
      lt.ScrollTrigger.create(e, t)
    );
  },
  rr = function (t, e, i, r, n) {
    if ((gi(t, e, n), !t._initted)) return 1;
    if (
      !i &&
      t._pt &&
      !K &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      Hi !== nt.frame
    )
      return kt.push(t), (t._lazy = [n, r]), 1;
  },
  cn = function o(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e));
  },
  Ze = function (t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  },
  dn = function (t, e, i, r) {
    var n = t.ratio,
      s =
        e < 0 ||
        (!e &&
          ((!t._start && cn(t) && !(!t._initted && Ze(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !Ze(t))))
          ? 0
          : 1,
      a = t._rDelay,
      u = 0,
      f,
      l,
      _;
    if (
      (a &&
        t._repeat &&
        ((u = ce(0, t._tDur, e)),
        (l = Qt(u, a)),
        t._yoyo && l & 1 && (s = 1 - s),
        l !== Qt(t._tTime, a) &&
          ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
      s !== n || K || r || t._zTime === N || (!e && t._zTime))
    ) {
      if (!t._initted && rr(t, e, r, i, u)) return;
      for (
        _ = t._zTime,
          t._zTime = e || (i ? N : 0),
          i || (i = e && !_),
          t.ratio = s,
          t._from && (s = 1 - s),
          t._time = 0,
          t._tTime = u,
          f = t._pt;
        f;

      )
        f.r(s, f.d), (f = f._next);
      e < 0 && He(t, e, i, !0),
        t._onUpdate && !i && ft(t, "onUpdate"),
        u && t._repeat && !i && t.parent && ft(t, "onRepeat"),
        (e >= t._tDur || e < 0) &&
          t.ratio === s &&
          (s && Rt(t, 1),
          !i &&
            !K &&
            (ft(t, s ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()));
    } else t._zTime || (t._zTime = e);
  },
  pn = function (t, e, i) {
    var r;
    if (i > e)
      for (r = t._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > e) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < e) return r;
        r = r._prev;
      }
  },
  Kt = function (t, e, i, r) {
    var n = t._repeat,
      s = W(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !r && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : W(s * (n + 1) + t._rDelay * n)) : s),
      a > 0 && !r && De(t, (t._tTime = t._tDur * a)),
      t.parent && Ee(t),
      i || Nt(t.parent, t),
      t
    );
  },
  Wi = function (t) {
    return t instanceof Z ? Nt(t) : Kt(t, t._dur);
  },
  mn = { _start: 0, endTime: le, totalDuration: le },
  ct = function o(t, e, i) {
    var r = t.labels,
      n = t._recent || mn,
      s = t.duration() >= dt ? n.endTime(!1) : t._dur,
      a,
      u,
      f;
    return Q(e) && (isNaN(e) || e in r)
      ? ((u = e.charAt(0)),
        (f = e.substr(-1) === "%"),
        (a = e.indexOf("=")),
        u === "<" || u === ">"
          ? (a >= 0 && (e = e.replace(/=/, "")),
            (u === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(e.substr(1)) || 0) *
                (f ? (a < 0 ? n : i).totalDuration() / 100 : 1))
          : a < 0
          ? (e in r || (r[e] = s), r[e])
          : ((u = parseFloat(e.charAt(a - 1) + e.substr(a + 1))),
            f && i && (u = (u / 100) * ($(i) ? i[0] : i).totalDuration()),
            a > 1 ? o(t, e.substr(0, a - 1), i) + u : s + u))
      : e == null
      ? s
      : +e;
  },
  ae = function (t, e, i) {
    var r = St(e[1]),
      n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      s = e[n],
      a,
      u;
    if ((r && (s.duration = e[1]), (s.parent = i), t)) {
      for (a = s, u = i; u && !("immediateRender" in a); )
        (a = u.vars.defaults || {}), (u = st(u.vars.inherit) && u.parent);
      (s.immediateRender = st(a.immediateRender)),
        t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1]);
    }
    return new q(e[0], s, e[n + 1]);
  },
  At = function (t, e) {
    return t || t === 0 ? e(t) : e;
  },
  ce = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  H = function (t, e) {
    return !Q(t) || !(e = sn.exec(t)) ? "" : e[1];
  },
  gn = function (t, e, i) {
    return At(i, function (r) {
      return ce(t, e, r);
    });
  },
  $e = [].slice,
  nr = function (t, e) {
    return (
      t &&
      xt(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && xt(t[0]))) &&
      !t.nodeType &&
      t !== gt
    );
  },
  yn = function (t, e, i) {
    return (
      i === void 0 && (i = []),
      t.forEach(function (r) {
        var n;
        return (Q(r) && !e) || nr(r, 1)
          ? (n = i).push.apply(n, pt(r))
          : i.push(r);
      }) || i
    );
  },
  pt = function (t, e, i) {
    return I && !e && I.selector
      ? I.selector(t)
      : Q(t) && !i && (Qe || !Ht())
      ? $e.call((e || oi).querySelectorAll(t), 0)
      : $(t)
      ? yn(t, i)
      : nr(t)
      ? $e.call(t, 0)
      : t
      ? [t]
      : [];
  },
  Je = function (t) {
    return (
      (t = pt(t)[0] || fe("Invalid scope") || {}),
      function (e) {
        var i = t.current || t.nativeElement || t;
        return pt(
          e,
          i.querySelectorAll
            ? i
            : i === t
            ? fe("Invalid scope") || oi.createElement("div")
            : t
        );
      }
    );
  },
  sr = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  ar = function (t) {
    if (Y(t)) return t;
    var e = xt(t) ? t : { each: t },
      i = Lt(e.ease),
      r = e.from || 0,
      n = parseFloat(e.base) || 0,
      s = {},
      a = r > 0 && r < 1,
      u = isNaN(r) || a,
      f = e.axis,
      l = r,
      _ = r;
    return (
      Q(r)
        ? (l = _ = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && u && ((l = r[0]), (_ = r[1])),
      function (c, d, p) {
        var h = (p || e).length,
          m = s[h],
          x,
          y,
          v,
          b,
          g,
          P,
          S,
          T,
          w;
        if (!m) {
          if (((w = e.grid === "auto" ? 0 : (e.grid || [1, dt])[1]), !w)) {
            for (
              S = -dt;
              S < (S = p[w++].getBoundingClientRect().left) && w < h;

            );
            w < h && w--;
          }
          for (
            m = s[h] = [],
              x = u ? Math.min(w, h) * l - 0.5 : r % w,
              y = w === dt ? 0 : u ? (h * _) / w - 0.5 : (r / w) | 0,
              S = 0,
              T = dt,
              P = 0;
            P < h;
            P++
          )
            (v = (P % w) - x),
              (b = y - ((P / w) | 0)),
              (m[P] = g = f ? Math.abs(f === "y" ? b : v) : qi(v * v + b * b)),
              g > S && (S = g),
              g < T && (T = g);
          r === "random" && sr(m),
            (m.max = S - T),
            (m.min = T),
            (m.v = h =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (w > h
                    ? h - 1
                    : f
                    ? f === "y"
                      ? h / w
                      : w
                    : Math.max(w, h / w)) ||
                0) * (r === "edges" ? -1 : 1)),
            (m.b = h < 0 ? n - h : n),
            (m.u = H(e.amount || e.each) || 0),
            (i = i && h < 0 ? An(i) : i);
        }
        return (
          (h = (m[c] - m.min) / m.max || 0), W(m.b + (i ? i(h) : h) * m.v) + m.u
        );
      }
    );
  },
  ti = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var r = W(Math.round(parseFloat(i) / t) * t * e);
      return (r - (r % 1)) / e + (St(i) ? 0 : H(i));
    };
  },
  or = function (t, e) {
    var i = $(t),
      r,
      n;
    return (
      !i &&
        xt(t) &&
        ((r = i = t.radius || dt),
        t.values
          ? ((t = pt(t.values)), (n = !St(t[0])) && (r *= r))
          : (t = ti(t.increment))),
      At(
        e,
        i
          ? Y(t)
            ? function (s) {
                return (n = t(s)), Math.abs(n - s) <= r ? n : s;
              }
            : function (s) {
                for (
                  var a = parseFloat(n ? s.x : s),
                    u = parseFloat(n ? s.y : 0),
                    f = dt,
                    l = 0,
                    _ = t.length,
                    c,
                    d;
                  _--;

                )
                  n
                    ? ((c = t[_].x - a), (d = t[_].y - u), (c = c * c + d * d))
                    : (c = Math.abs(t[_] - a)),
                    c < f && ((f = c), (l = _));
                return (
                  (l = !r || f <= r ? t[l] : s),
                  n || l === s || St(s) ? l : l + H(s)
                );
              }
          : ti(t)
      )
    );
  },
  ur = function (t, e, i, r) {
    return At($(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
      return $(t)
        ? t[~~(Math.random() * t.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  xn = function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return function (r) {
      return e.reduce(function (n, s) {
        return s(n);
      }, r);
    };
  },
  vn = function (t, e) {
    return function (i) {
      return t(parseFloat(i)) + (e || H(i));
    };
  },
  Tn = function (t, e, i) {
    return lr(t, e, 0, 1, i);
  },
  fr = function (t, e, i) {
    return At(i, function (r) {
      return t[~~e(r)];
    });
  },
  wn = function o(t, e, i) {
    var r = e - t;
    return $(t)
      ? fr(t, o(0, t.length), e)
      : At(i, function (n) {
          return ((r + ((n - t) % r)) % r) + t;
        });
  },
  bn = function o(t, e, i) {
    var r = e - t,
      n = r * 2;
    return $(t)
      ? fr(t, o(0, t.length - 1), e)
      : At(i, function (s) {
          return (s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s);
        });
  },
  Zt = function (t) {
    return t.replace(en, function (e) {
      var i = e.indexOf("[") + 1,
        r = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(rn);
      return ur(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
    });
  },
  lr = function (t, e, i, r, n) {
    var s = e - t,
      a = r - i;
    return At(n, function (u) {
      return i + (((u - t) / s) * a || 0);
    });
  },
  Sn = function o(t, e, i, r) {
    var n = isNaN(t + e)
      ? 0
      : function (d) {
          return (1 - d) * t + d * e;
        };
    if (!n) {
      var s = Q(t),
        a = {},
        u,
        f,
        l,
        _,
        c;
      if ((i === !0 && (r = 1) && (i = null), s))
        (t = { p: t }), (e = { p: e });
      else if ($(t) && !$(e)) {
        for (l = [], _ = t.length, c = _ - 2, f = 1; f < _; f++)
          l.push(o(t[f - 1], t[f]));
        _--,
          (n = function (p) {
            p *= _;
            var h = Math.min(c, ~~p);
            return l[h](p - h);
          }),
          (i = e);
      } else r || (t = jt($(t) ? [] : {}, t));
      if (!l) {
        for (u in e) pi.call(a, t, u, "get", e[u]);
        n = function (p) {
          return vi(p, a) || (s ? t.p : t);
        };
      }
    }
    return At(i, n);
  },
  Vi = function (t, e, i) {
    var r = t.labels,
      n = dt,
      s,
      a,
      u;
    for (s in r)
      (a = r[s] - e),
        a < 0 == !!i && a && n > (a = Math.abs(a)) && ((u = s), (n = a));
    return u;
  },
  ft = function (t, e, i) {
    var r = t.vars,
      n = r[e],
      s = I,
      a = t._ctx,
      u,
      f,
      l;
    if (n)
      return (
        (u = r[e + "Params"]),
        (f = r.callbackScope || t),
        i && kt.length && Pe(),
        a && (I = a),
        (l = u ? n.apply(f, u) : n.call(f)),
        (I = s),
        l
      );
  },
  re = function (t) {
    return (
      Rt(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!K),
      t.progress() < 1 && ft(t, "onInterrupt"),
      t
    );
  },
  Gt,
  hr = [],
  _r = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), ni() || t.headless)) {
        var e = t.name,
          i = Y(t),
          r =
            e && !i && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: le,
            render: vi,
            add: pi,
            kill: Vn,
            modifier: Wn,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: ze,
            aliases: {},
            register: 0,
          };
        if ((Ht(), t !== r)) {
          if (rt[e]) return;
          ht(r, ht(Ce(t, n), s)),
            jt(r.prototype, jt(n, Ce(t, s))),
            (rt[(r.prop = e)] = r),
            t.targetTest && (we.push(r), (ui[e] = 1)),
            (e =
              (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        Ki(e, r), t.register && t.register(J, r, it);
      } else hr.push(t);
  },
  F = 255,
  ne = {
    aqua: [0, F, F],
    lime: [0, F, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, F],
    navy: [0, 0, 128],
    white: [F, F, F],
    olive: [128, 128, 0],
    yellow: [F, F, 0],
    orange: [F, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [F, 0, 0],
    pink: [F, 192, 203],
    cyan: [0, F, F],
    transparent: [F, F, F, 0],
  },
  Ue = function (t, e, i) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? e + (i - e) * t * 6
        : t < 0.5
        ? i
        : t * 3 < 2
        ? e + (i - e) * (2 / 3 - t) * 6
        : e) *
        F +
        0.5) |
        0
    );
  },
  cr = function (t, e, i) {
    var r = t ? (St(t) ? [t >> 16, (t >> 8) & F, t & F] : 0) : ne.black,
      n,
      s,
      a,
      u,
      f,
      l,
      _,
      c,
      d,
      p;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ne[t]))
        r = ne[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (s = t.charAt(2)),
            (a = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              s +
              s +
              a +
              a +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (r = parseInt(t.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & F, r & F, parseInt(t.substr(7), 16) / 255]
          );
        (t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & F, t & F]);
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = p = t.match(Ni)), !e))
          (u = (+r[0] % 360) / 360),
            (f = +r[1] / 100),
            (l = +r[2] / 100),
            (s = l <= 0.5 ? l * (f + 1) : l + f - l * f),
            (n = l * 2 - s),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Ue(u + 1 / 3, n, s)),
            (r[1] = Ue(u, n, s)),
            (r[2] = Ue(u - 1 / 3, n, s));
        else if (~t.indexOf("="))
          return (r = t.match(si)), i && r.length < 4 && (r[3] = 1), r;
      } else r = t.match(Ni) || ne.transparent;
      r = r.map(Number);
    }
    return (
      e &&
        !p &&
        ((n = r[0] / F),
        (s = r[1] / F),
        (a = r[2] / F),
        (_ = Math.max(n, s, a)),
        (c = Math.min(n, s, a)),
        (l = (_ + c) / 2),
        _ === c
          ? (u = f = 0)
          : ((d = _ - c),
            (f = l > 0.5 ? d / (2 - _ - c) : d / (_ + c)),
            (u =
              _ === n
                ? (s - a) / d + (s < a ? 6 : 0)
                : _ === s
                ? (a - n) / d + 2
                : (n - s) / d + 4),
            (u *= 60)),
        (r[0] = ~~(u + 0.5)),
        (r[1] = ~~(f * 100 + 0.5)),
        (r[2] = ~~(l * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  dr = function (t) {
    var e = [],
      i = [],
      r = -1;
    return (
      t.split(bt).forEach(function (n) {
        var s = n.match(Bt) || [];
        e.push.apply(e, s), i.push((r += s.length + 1));
      }),
      (e.c = i),
      e
    );
  },
  Ui = function (t, e, i) {
    var r = "",
      n = (t + r).match(bt),
      s = e ? "hsla(" : "rgba(",
      a = 0,
      u,
      f,
      l,
      _;
    if (!n) return t;
    if (
      ((n = n.map(function (c) {
        return (
          (c = cr(c, e, 1)) &&
          s +
            (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) +
            ")"
        );
      })),
      i && ((l = dr(t)), (u = i.c), u.join(r) !== l.c.join(r)))
    )
      for (f = t.replace(bt, "1").split(Bt), _ = f.length - 1; a < _; a++)
        r +=
          f[a] +
          (~u.indexOf(a)
            ? n.shift() || s + "0,0,0,0)"
            : (l.length ? l : n.length ? n : i).shift());
    if (!f)
      for (f = t.split(bt), _ = f.length - 1; a < _; a++) r += f[a] + n[a];
    return r + f[_];
  },
  bt = (function () {
    var o =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in ne) o += "|" + t + "\\b";
    return new RegExp(o + ")", "gi");
  })(),
  Pn = /hsl[a]?\(/,
  ci = function (t) {
    var e = t.join(" "),
      i;
    if (((bt.lastIndex = 0), bt.test(e)))
      return (
        (i = Pn.test(e)),
        (t[1] = Ui(t[1], i)),
        (t[0] = Ui(t[0], i, dr(t[1]))),
        !0
      );
  },
  he,
  nt = (function () {
    var o = Date.now,
      t = 500,
      e = 33,
      i = o(),
      r = i,
      n = 1e3 / 240,
      s = n,
      a = [],
      u,
      f,
      l,
      _,
      c,
      d,
      p = function h(m) {
        var x = o() - r,
          y = m === !0,
          v,
          b,
          g,
          P;
        if (
          ((x > t || x < 0) && (i += x - e),
          (r += x),
          (g = r - i),
          (v = g - s),
          (v > 0 || y) &&
            ((P = ++_.frame),
            (c = g - _.time * 1e3),
            (_.time = g = g / 1e3),
            (s += v + (v >= n ? 4 : n - v)),
            (b = 1)),
          y || (u = f(h)),
          b)
        )
          for (d = 0; d < a.length; d++) a[d](g, c, P, m);
      };
    return (
      (_ = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (m) {
          return c / (1e3 / (m || 60));
        },
        wake: function () {
          ji &&
            (!Qe &&
              ni() &&
              ((gt = Qe = window),
              (oi = gt.document || {}),
              (lt.gsap = J),
              (gt.gsapVersions || (gt.gsapVersions = [])).push(J.version),
              Qi(Se || gt.GreenSockGlobals || (!gt.gsap && gt) || {}),
              hr.forEach(_r)),
            (l = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            u && _.sleep(),
            (f =
              l ||
              function (m) {
                return setTimeout(m, (s - _.time * 1e3 + 1) | 0);
              }),
            (he = 1),
            p(2));
        },
        sleep: function () {
          (l ? cancelAnimationFrame : clearTimeout)(u), (he = 0), (f = le);
        },
        lagSmoothing: function (m, x) {
          (t = m || 1 / 0), (e = Math.min(x || 33, t));
        },
        fps: function (m) {
          (n = 1e3 / (m || 240)), (s = _.time * 1e3 + n);
        },
        add: function (m, x, y) {
          var v = x
            ? function (b, g, P, S) {
                m(b, g, P, S), _.remove(v);
              }
            : m;
          return _.remove(m), a[y ? "unshift" : "push"](v), Ht(), v;
        },
        remove: function (m, x) {
          ~(x = a.indexOf(m)) && a.splice(x, 1) && d >= x && d--;
        },
        _listeners: a,
      }),
      _
    );
  })(),
  Ht = function () {
    return !he && nt.wake();
  },
  M = {},
  Cn = /^[\d.\-M][\d.\-,\s]/,
  On = /["']/g,
  kn = function (t) {
    for (
      var e = {},
        i = t.substr(1, t.length - 3).split(":"),
        r = i[0],
        n = 1,
        s = i.length,
        a,
        u,
        f;
      n < s;
      n++
    )
      (u = i[n]),
        (a = n !== s - 1 ? u.lastIndexOf(",") : u.length),
        (f = u.substr(0, a)),
        (e[r] = isNaN(f) ? f.replace(On, "").trim() : +f),
        (r = u.substr(a + 1).trim());
    return e;
  },
  Mn = function (t) {
    var e = t.indexOf("(") + 1,
      i = t.indexOf(")"),
      r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
  },
  Rn = function (t) {
    var e = (t + "").split("("),
      i = M[e[0]];
    return i && e.length > 1 && i.config
      ? i.config.apply(
          null,
          ~t.indexOf("{") ? [kn(e[1])] : Mn(t).split(",").map($i)
        )
      : M._CE && Cn.test(t)
      ? M._CE("", t)
      : i;
  },
  An = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  Lt = function (t, e) {
    return (t && (Y(t) ? t : M[t] || Rn(t))) || e;
  },
  Vt = function (t, e, i, r) {
    i === void 0 &&
      (i = function (u) {
        return 1 - e(1 - u);
      }),
      r === void 0 &&
        (r = function (u) {
          return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
        });
    var n = { easeIn: e, easeOut: i, easeInOut: r },
      s;
    return (
      et(t, function (a) {
        (M[a] = lt[a] = n), (M[(s = a.toLowerCase())] = i);
        for (var u in n)
          M[
            s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
          ] = M[a + "." + u] = n[u];
      }),
      n
    );
  },
  pr = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  },
  Ye = function o(t, e, i) {
    var r = e >= 1 ? e : 1,
      n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      s = (n / je) * (Math.asin(1 / r) || 0),
      a = function (l) {
        return l === 1 ? 1 : r * Math.pow(2, -10 * l) * tn((l - s) * n) + 1;
      },
      u =
        t === "out"
          ? a
          : t === "in"
          ? function (f) {
              return 1 - a(1 - f);
            }
          : pr(a);
    return (
      (n = je / n),
      (u.config = function (f, l) {
        return o(t, f, l);
      }),
      u
    );
  },
  Xe = function o(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function (s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
      },
      r =
        t === "out"
          ? i
          : t === "in"
          ? function (n) {
              return 1 - i(1 - n);
            }
          : pr(i);
    return (
      (r.config = function (n) {
        return o(t, n);
      }),
      r
    );
  };
et("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, t) {
  var e = t < 5 ? t + 1 : t;
  Vt(
    o + ",Power" + (e - 1),
    t
      ? function (i) {
          return Math.pow(i, e);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, e);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, e) / 2
        : 1 - Math.pow((1 - i) * 2, e) / 2;
    }
  );
});
M.Linear.easeNone = M.none = M.Linear.easeIn;
Vt("Elastic", Ye("in"), Ye("out"), Ye());
(function (o, t) {
  var e = 1 / t,
    i = 2 * e,
    r = 2.5 * e,
    n = function (a) {
      return a < e
        ? o * a * a
        : a < i
        ? o * Math.pow(a - 1.5 / t, 2) + 0.75
        : a < r
        ? o * (a -= 2.25 / t) * a + 0.9375
        : o * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
  Vt(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
Vt("Expo", function (o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
Vt("Circ", function (o) {
  return -(qi(1 - o * o) - 1);
});
Vt("Sine", function (o) {
  return o === 1 ? 1 : -Jr(o * Zr) + 1;
});
Vt("Back", Xe("in"), Xe("out"), Xe());
M.SteppedEase =
  M.steps =
  lt.SteppedEase =
    {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
          r = t + (e ? 0 : 1),
          n = e ? 1 : 0,
          s = 1 - N;
        return function (a) {
          return (((r * ce(0, s, a)) | 0) + n) * i;
        };
      },
    };
ue.ease = M["quad.out"];
et(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (o) {
    return (fi += o + "," + o + "Params,");
  }
);
var di = function (t, e) {
    (this.id = $r++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : hi),
      (this.set = e ? e.getSetter : ze);
  },
  _e = (function () {
    function o(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        Kt(this, +e.duration, 1, 1),
        (this.data = e.data),
        I && ((this._ctx = I), I.data.push(this)),
        he || nt.wake();
    }
    var t = o.prototype;
    return (
      (t.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (t.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Kt(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (i, r) {
        if ((Ht(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (De(this, i), !n._dp || n.parent || er(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            yt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === N) ||
            (!this._initted && this._dur && i) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Zi(this, i, r)),
          this
        );
      }),
      (t.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Bi(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (t.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (t.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Bi(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.iteration = function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * n, r)
          : this._repeat
          ? Qt(this._tTime, n) + 1
          : 1;
      }),
      (t.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -N ? 0 : this._rts;
        if (this._rts === i) return this;
        var n =
          this.parent && this._ts ? Oe(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -N ? 0 : this._rts),
          this.totalTime(
            ce(-Math.abs(this._delay), this.totalDuration(), n),
            r !== !1
          ),
          Ee(this),
          hn(this)
        );
      }),
      (t.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ht(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== N &&
                      (this._tTime -= N)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (i) {
        if (arguments.length) {
          this._start = W(i);
          var r = this.parent || this._dp;
          return (
            r &&
              (r._sort || !this.parent) &&
              yt(r, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (i) {
        return (
          this._start +
          (st(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Oe(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (i) {
        i === void 0 && (i = on);
        var r = K;
        return (
          (K = i),
          _i(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (K = r),
          this
        );
      }),
      (t.globalTime = function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : n;
      }),
      (t.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Wi(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), Wi(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (t.seek = function (i, r) {
        return this.totalTime(ct(this, i), st(r));
      }),
      (t.restart = function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, st(r)),
          this._dur || (this._zTime = -N),
          this
        );
      }),
      (t.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -N : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -N), this;
      }),
      (t.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (n = i.rawTime(!0)) >= r &&
            n < this.endTime(!0) - N)
        );
      }),
      (t.eventCallback = function (i, r, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (r
              ? ((s[i] = r),
                n && (s[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete s[i],
            this)
          : s[i];
      }),
      (t.then = function (i) {
        var r = this,
          n = r._prom;
        return new Promise(function (s) {
          var a = Y(i) ? i : Ji,
            u = function () {
              var l = r.then;
              (r.then = null),
                n && n(),
                Y(a) && (a = a(r)) && (a.then || a === r) && (r.then = l),
                s(a),
                (r.then = l);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? u()
            : (r._prom = u);
        });
      }),
      (t.kill = function () {
        re(this);
      }),
      o
    );
  })();
ht(_e.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -N,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Z = (function (o) {
  Xi(t, o);
  function t(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = o.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = st(i.sortChildren)),
      V && yt(i.parent || V, wt(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && ir(wt(n), i.scrollTrigger),
      n
    );
  }
  var e = t.prototype;
  return (
    (e.to = function (r, n, s) {
      return ae(0, arguments, this), this;
    }),
    (e.from = function (r, n, s) {
      return ae(1, arguments, this), this;
    }),
    (e.fromTo = function (r, n, s, a) {
      return ae(2, arguments, this), this;
    }),
    (e.set = function (r, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        se(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new q(r, n, ct(this, s), 1),
        this
      );
    }),
    (e.call = function (r, n, s) {
      return yt(this, q.delayedCall(0, r, n), s);
    }),
    (e.staggerTo = function (r, n, s, a, u, f, l) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || a),
        (s.onComplete = f),
        (s.onCompleteParams = l),
        (s.parent = this),
        new q(r, s, ct(this, u)),
        this
      );
    }),
    (e.staggerFrom = function (r, n, s, a, u, f, l) {
      return (
        (s.runBackwards = 1),
        (se(s).immediateRender = st(s.immediateRender)),
        this.staggerTo(r, n, s, a, u, f, l)
      );
    }),
    (e.staggerFromTo = function (r, n, s, a, u, f, l, _) {
      return (
        (a.startAt = s),
        (se(a).immediateRender = st(a.immediateRender)),
        this.staggerTo(r, n, a, u, f, l, _)
      );
    }),
    (e.render = function (r, n, s) {
      var a = this._time,
        u = this._dirty ? this.totalDuration() : this._tDur,
        f = this._dur,
        l = r <= 0 ? 0 : W(r),
        _ = this._zTime < 0 != r < 0 && (this._initted || !f),
        c,
        d,
        p,
        h,
        m,
        x,
        y,
        v,
        b,
        g,
        P,
        S;
      if (
        (this !== V && l > u && r >= 0 && (l = u), l !== this._tTime || s || _)
      ) {
        if (
          (a !== this._time &&
            f &&
            ((l += this._time - a), (r += this._time - a)),
          (c = l),
          (b = this._start),
          (v = this._ts),
          (x = !v),
          _ && (f || (a = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((P = this._yoyo),
            (m = f + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(m * 100 + r, n, s);
          if (
            ((c = W(l % m)),
            l === u
              ? ((h = this._repeat), (c = f))
              : ((g = W(l / m)),
                (h = ~~g),
                h && h === g && ((c = f), h--),
                c > f && (c = f)),
            (g = Qt(this._tTime, m)),
            !a &&
              this._tTime &&
              g !== h &&
              this._tTime - g * m - this._dur <= 0 &&
              (g = h),
            P && h & 1 && ((c = f - c), (S = 1)),
            h !== g && !this._lock)
          ) {
            var T = P && g & 1,
              w = T === (P && h & 1);
            if (
              (h < g && (T = !T),
              (a = T ? 0 : l % f ? f : l),
              (this._lock = 1),
              (this.render(a || (S ? 0 : W(h * m)), n, !f)._lock = 0),
              (this._tTime = l),
              !n && this.parent && ft(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !S &&
                ((this.invalidate()._lock = 1), (g = h)),
              (a && a !== this._time) ||
                x !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((f = this._dur),
              (u = this._tDur),
              w &&
                ((this._lock = 2),
                (a = T ? f : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !S && this.invalidate()),
              (this._lock = 0),
              !this._ts && !x)
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((y = pn(this, W(a), W(c))), y && (l -= c - (c = y._start))),
          (this._tTime = l),
          (this._time = c),
          (this._act = !!v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && l && f && !n && !g && (ft(this, "onStart"), this._tTime !== l))
        )
          return this;
        if (c >= a && r >= 0)
          for (d = this._first; d; ) {
            if (
              ((p = d._next), (d._act || c >= d._start) && d._ts && y !== d)
            ) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (c - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (c - d._start) * d._ts,
                  n,
                  s
                ),
                c !== this._time || (!this._ts && !x))
              ) {
                (y = 0), p && (l += this._zTime = -N);
                break;
              }
            }
            d = p;
          }
        else {
          d = this._last;
          for (var C = r < 0 ? r : c; d; ) {
            if (((p = d._prev), (d._act || C <= d._end) && d._ts && y !== d)) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (C - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (C - d._start) * d._ts,
                  n,
                  s || (K && _i(d))
                ),
                c !== this._time || (!this._ts && !x))
              ) {
                (y = 0), p && (l += this._zTime = C ? -N : N);
                break;
              }
            }
            d = p;
          }
        }
        if (
          y &&
          !n &&
          (this.pause(),
          (y.render(c >= a ? 0 : -N)._zTime = c >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = b), Ee(this), this.render(r, n, s);
        this._onUpdate && !n && ft(this, "onUpdate", !0),
          ((l === u && this._tTime >= this.totalDuration()) || (!l && a)) &&
            (b === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !f) &&
                ((l === u && this._ts > 0) || (!l && this._ts < 0)) &&
                Rt(this, 1),
              !n &&
                !(r < 0 && !a) &&
                (l || a || !u) &&
                (ft(
                  this,
                  l === u && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(l < u && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (e.add = function (r, n) {
      var s = this;
      if ((St(n) || (n = ct(this, n, r)), !(r instanceof _e))) {
        if ($(r))
          return (
            r.forEach(function (a) {
              return s.add(a, n);
            }),
            this
          );
        if (Q(r)) return this.addLabel(r, n);
        if (Y(r)) r = q.delayedCall(0, r);
        else return this;
      }
      return this !== r ? yt(this, r, n) : this;
    }),
    (e.getChildren = function (r, n, s, a) {
      r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -dt);
      for (var u = [], f = this._first; f; )
        f._start >= a &&
          (f instanceof q
            ? n && u.push(f)
            : (s && u.push(f), r && u.push.apply(u, f.getChildren(!0, n, s)))),
          (f = f._next);
      return u;
    }),
    (e.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === r) return n[s];
    }),
    (e.remove = function (r) {
      return Q(r)
        ? this.removeLabel(r)
        : Y(r)
        ? this.killTweensOf(r)
        : (r.parent === this && Ae(this, r),
          r === this._recent && (this._recent = this._last),
          Nt(this));
    }),
    (e.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = W(
              nt.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          o.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (e.addLabel = function (r, n) {
      return (this.labels[r] = ct(this, n)), this;
    }),
    (e.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (e.addPause = function (r, n, s) {
      var a = q.delayedCall(0, n || le, s);
      return (
        (a.data = "isPause"), (this._hasPause = 1), yt(this, a, ct(this, r))
      );
    }),
    (e.removePause = function (r) {
      var n = this._first;
      for (r = ct(this, r); n; )
        n._start === r && n.data === "isPause" && Rt(n), (n = n._next);
    }),
    (e.killTweensOf = function (r, n, s) {
      for (var a = this.getTweensOf(r, s), u = a.length; u--; )
        Ot !== a[u] && a[u].kill(r, n);
      return this;
    }),
    (e.getTweensOf = function (r, n) {
      for (var s = [], a = pt(r), u = this._first, f = St(n), l; u; )
        u instanceof q
          ? un(u._targets, a) &&
            (f
              ? (!Ot || (u._initted && u._ts)) &&
                u.globalTime(0) <= n &&
                u.globalTime(u.totalDuration()) > n
              : !n || u.isActive()) &&
            s.push(u)
          : (l = u.getTweensOf(a, n)).length && s.push.apply(s, l),
          (u = u._next);
      return s;
    }),
    (e.tweenTo = function (r, n) {
      n = n || {};
      var s = this,
        a = ct(s, r),
        u = n,
        f = u.startAt,
        l = u.onStart,
        _ = u.onStartParams,
        c = u.immediateRender,
        d,
        p = q.to(
          s,
          ht(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (a - (f && "time" in f ? f.time : s._time)) / s.timeScale()
                ) ||
                N,
              onStart: function () {
                if ((s.pause(), !d)) {
                  var m =
                    n.duration ||
                    Math.abs(
                      (a - (f && "time" in f ? f.time : s._time)) /
                        s.timeScale()
                    );
                  p._dur !== m && Kt(p, m, 0, 1).render(p._time, !0, !0),
                    (d = 1);
                }
                l && l.apply(p, _ || []);
              },
            },
            n
          )
        );
      return c ? p.render(0) : p;
    }),
    (e.tweenFromTo = function (r, n, s) {
      return this.tweenTo(n, ht({ startAt: { time: ct(this, r) } }, s));
    }),
    (e.recent = function () {
      return this._recent;
    }),
    (e.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Vi(this, ct(this, r));
    }),
    (e.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Vi(this, ct(this, r), 1);
    }),
    (e.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + N);
    }),
    (e.shiftChildren = function (r, n, s) {
      s === void 0 && (s = 0);
      var a = this._first,
        u = this.labels,
        f;
      for (r = W(r); a; )
        a._start >= s && ((a._start += r), (a._end += r)), (a = a._next);
      if (n) for (f in u) u[f] >= s && (u[f] += r);
      return Nt(this);
    }),
    (e.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
      return o.prototype.invalidate.call(this, r);
    }),
    (e.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Nt(this)
      );
    }),
    (e.totalDuration = function (r) {
      var n = 0,
        s = this,
        a = s._last,
        u = dt,
        f,
        l,
        _;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -r : r)
        );
      if (s._dirty) {
        for (_ = s.parent; a; )
          (f = a._prev),
            a._dirty && a.totalDuration(),
            (l = a._start),
            l > u && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), (yt(s, a, l - a._delay, 1)._lock = 0))
              : (u = l),
            l < 0 &&
              a._ts &&
              ((n -= l),
              ((!_ && !s._dp) || (_ && _.smoothChildTiming)) &&
                ((s._start += W(l / s._ts)), (s._time -= l), (s._tTime -= l)),
              s.shiftChildren(-l, !1, -1 / 0),
              (u = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = f);
        Kt(s, s === V && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((V._ts && (Zi(V, Oe(r, V)), (Hi = nt.frame)), nt.frame >= Li)) {
        Li += at.autoSleep || 120;
        var n = V._first;
        if ((!n || !n._ts) && at.autoSleep && nt._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || nt.sleep();
        }
      }
    }),
    t
  );
})(_e);
ht(Z.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var En = function (t, e, i, r, n, s, a) {
    var u = new it(this._pt, t, e, 0, 1, xi, null, n),
      f = 0,
      l = 0,
      _,
      c,
      d,
      p,
      h,
      m,
      x,
      y;
    for (
      u.b = i,
        u.e = r,
        i += "",
        r += "",
        (x = ~r.indexOf("random(")) && (r = Zt(r)),
        s && ((y = [i, r]), s(y, t, e), (i = y[0]), (r = y[1])),
        c = i.match(We) || [];
      (_ = We.exec(r));

    )
      (p = _[0]),
        (h = r.substring(f, _.index)),
        d ? (d = (d + 1) % 5) : h.substr(-5) === "rgba(" && (d = 1),
        p !== c[l++] &&
          ((m = parseFloat(c[l - 1]) || 0),
          (u._pt = {
            _next: u._pt,
            p: h || l === 1 ? h : ",",
            s: m,
            c: p.charAt(1) === "=" ? Wt(m, p) - m : parseFloat(p) - m,
            m: d && d < 4 ? Math.round : 0,
          }),
          (f = We.lastIndex));
    return (
      (u.c = f < r.length ? r.substring(f, r.length) : ""),
      (u.fp = a),
      (ai.test(r) || x) && (u.e = 0),
      (this._pt = u),
      u
    );
  },
  pi = function (t, e, i, r, n, s, a, u, f, l) {
    Y(r) && (r = r(n || 0, t, s));
    var _ = t[e],
      c =
        i !== "get"
          ? i
          : Y(_)
          ? f
            ? t[
                e.indexOf("set") || !Y(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](f)
            : t[e]()
          : _,
      d = Y(_) ? (f ? Ln : yr) : yi,
      p;
    if (
      (Q(r) &&
        (~r.indexOf("random(") && (r = Zt(r)),
        r.charAt(1) === "=" &&
          ((p = Wt(c, r) + (H(c) || 0)), (p || p === 0) && (r = p))),
      !l || c !== r || ei)
    )
      return !isNaN(c * r) && r !== ""
        ? ((p = new it(
            this._pt,
            t,
            e,
            +c || 0,
            r - (c || 0),
            typeof _ == "boolean" ? Bn : xr,
            0,
            d
          )),
          f && (p.fp = f),
          a && p.modifier(a, this, t),
          (this._pt = p))
        : (!_ && !(e in t) && Re(e, r),
          En.call(this, t, e, c, r, d, u || at.stringFilter, f));
  },
  Dn = function (t, e, i, r, n) {
    if (
      (Y(t) && (t = oe(t, n, e, i, r)),
      !xt(t) || (t.style && t.nodeType) || $(t) || Gi(t))
    )
      return Q(t) ? oe(t, n, e, i, r) : t;
    var s = {},
      a;
    for (a in t) s[a] = oe(t[a], n, e, i, r);
    return s;
  },
  mi = function (t, e, i, r, n, s) {
    var a, u, f, l;
    if (
      rt[t] &&
      (a = new rt[t]()).init(
        n,
        a.rawVars ? e[t] : Dn(e[t], r, n, s, i),
        i,
        r,
        s
      ) !== !1 &&
      ((i._pt = u = new it(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
      i !== Gt)
    )
      for (f = i._ptLookup[i._targets.indexOf(n)], l = a._props.length; l--; )
        f[a._props[l]] = u;
    return a;
  },
  Ot,
  ei,
  gi = function o(t, e, i) {
    var r = t.vars,
      n = r.ease,
      s = r.startAt,
      a = r.immediateRender,
      u = r.lazy,
      f = r.onUpdate,
      l = r.runBackwards,
      _ = r.yoyoEase,
      c = r.keyframes,
      d = r.autoRevert,
      p = t._dur,
      h = t._startAt,
      m = t._targets,
      x = t.parent,
      y = x && x.data === "nested" ? x.vars.targets : m,
      v = t._overwrite === "auto" && !ri,
      b = t.timeline,
      g = r.easeReverse || _,
      P,
      S,
      T,
      w,
      C,
      z,
      O,
      k,
      R,
      D,
      E,
      A,
      G;
    if (
      (b && (!c || !n) && (n = "none"),
      (t._ease = Lt(n, ue.ease)),
      (t._rEase = g && (Lt(g) || t._ease)),
      (t._from = !b && !!r.runBackwards),
      t._from && (t.ratio = 1),
      !b || (c && !r.stagger))
    ) {
      if (
        ((k = m[0] ? Mt(m[0]).harness : 0),
        (A = k && r[k.prop]),
        (P = Ce(r, ui)),
        h &&
          (h._zTime < 0 && h.progress(1),
          e < 0 && l && a && !d ? h.render(-1, !0) : h.revert(l && p ? Te : an),
          (h._lazy = 0)),
        s)
      ) {
        if (
          (Rt(
            (t._startAt = q.set(
              m,
              ht(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: x,
                  immediateRender: !0,
                  lazy: !h && st(u),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    f &&
                    function () {
                      return ft(t, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (K || (!a && !d)) && t._startAt.revert(Te),
          a && p && e <= 0 && i <= 0)
        ) {
          e && (t._zTime = e);
          return;
        }
      } else if (l && p && !h) {
        if (
          (e && (a = !1),
          (T = ht(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !h && st(u),
              immediateRender: a,
              stagger: 0,
              parent: x,
            },
            P
          )),
          A && (T[k.prop] = A),
          Rt((t._startAt = q.set(m, T))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (K ? t._startAt.revert(Te) : t._startAt.render(-1, !0)),
          (t._zTime = e),
          !a)
        )
          o(t._startAt, N, N);
        else if (!e) return;
      }
      for (
        t._pt = t._ptCache = 0, u = (p && st(u)) || (u && !p), S = 0;
        S < m.length;
        S++
      ) {
        if (
          ((C = m[S]),
          (O = C._gsap || li(m)[S]._gsap),
          (t._ptLookup[S] = D = {}),
          Ke[O.id] && kt.length && Pe(),
          (E = y === m ? S : y.indexOf(C)),
          k &&
            (R = new k()).init(C, A || P, t, E, y) !== !1 &&
            ((t._pt = w =
              new it(t._pt, C, R.name, 0, 1, R.render, R, 0, R.priority)),
            R._props.forEach(function (B) {
              D[B] = w;
            }),
            R.priority && (z = 1)),
          !k || A)
        )
          for (T in P)
            rt[T] && (R = mi(T, P, t, E, C, y))
              ? R.priority && (z = 1)
              : (D[T] = w =
                  pi.call(t, C, T, "get", P[T], E, y, 0, r.stringFilter));
        t._op && t._op[S] && t.kill(C, t._op[S]),
          v &&
            t._pt &&
            ((Ot = t),
            V.killTweensOf(C, D, t.globalTime(e)),
            (G = !t.parent),
            (Ot = 0)),
          t._pt && u && (Ke[O.id] = 1);
      }
      z && Ti(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = f),
      (t._initted = (!t._op || t._pt) && !G),
      c && e <= 0 && b.render(dt, !0, !0);
  },
  zn = function (t, e, i, r, n, s, a, u) {
    var f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
      l,
      _,
      c,
      d;
    if (!f)
      for (
        f = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length;
        d--;

      ) {
        if (((l = c[d][e]), l && l.d && l.d._pt))
          for (l = l.d._pt; l && l.p !== e && l.fp !== e; ) l = l._next;
        if (!l)
          return (
            (ei = 1),
            (t.vars[e] = "+=0"),
            gi(t, a),
            (ei = 0),
            u
              ? fe(
                  e +
                    " not eligible for reset. Try splitting into individual properties"
                )
              : 1
          );
        f.push(l);
      }
    for (d = f.length; d--; )
      (_ = f[d]),
        (l = _._pt || _),
        (l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + s * l.c),
        (l.c = i - l.s),
        _.e && (_.e = X(i) + H(_.e)),
        _.b && (_.b = l.s + H(_.b));
  },
  Fn = function (t, e) {
    var i = t[0] ? Mt(t[0]).harness : 0,
      r = i && i.aliases,
      n,
      s,
      a,
      u;
    if (!r) return e;
    n = jt({}, e);
    for (s in r)
      if (s in n) for (u = r[s].split(","), a = u.length; a--; ) n[u[a]] = n[s];
    return n;
  },
  Nn = function (t, e, i, r) {
    var n = e.ease || r || "power1.inOut",
      s,
      a;
    if ($(e))
      (a = i[t] || (i[t] = [])),
        e.forEach(function (u, f) {
          return a.push({ t: (f / (e.length - 1)) * 100, v: u, e: n });
        });
    else
      for (s in e)
        (a = i[s] || (i[s] = [])),
          s === "ease" || a.push({ t: parseFloat(t), v: e[s], e: n });
  },
  oe = function (t, e, i, r, n) {
    return Y(t)
      ? t.call(e, i, r, n)
      : Q(t) && ~t.indexOf("random(")
      ? Zt(t)
      : t;
  },
  mr =
    fi +
    "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  gr = {};
et(mr + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
  return (gr[o] = 1);
});
var q = (function (o) {
  Xi(t, o);
  function t(i, r, n, s) {
    var a;
    typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (a = o.call(this, s ? r : se(r)) || this);
    var u = a.vars,
      f = u.duration,
      l = u.delay,
      _ = u.immediateRender,
      c = u.stagger,
      d = u.overwrite,
      p = u.keyframes,
      h = u.defaults,
      m = u.scrollTrigger,
      x = r.parent || V,
      y = ($(i) || Gi(i) ? St(i[0]) : "length" in r) ? [i] : pt(i),
      v,
      b,
      g,
      P,
      S,
      T,
      w,
      C;
    if (
      ((a._targets = y.length
        ? li(y)
        : fe(
            "GSAP target " + i + " not found. https://gsap.com",
            !at.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      p || c || ve(f) || ve(l))
    ) {
      r = a.vars;
      var z = r.easeReverse || r.yoyoEase;
      if (
        ((v = a.timeline =
          new Z({
            data: "nested",
            defaults: h || {},
            targets: x && x.data === "nested" ? x.vars.targets : y,
          })),
        v.kill(),
        (v.parent = v._dp = wt(a)),
        (v._start = 0),
        c || ve(f) || ve(l))
      ) {
        if (((P = y.length), (w = c && ar(c)), xt(c)))
          for (S in c) ~mr.indexOf(S) && (C || (C = {}), (C[S] = c[S]));
        for (b = 0; b < P; b++)
          (g = Ce(r, gr)),
            (g.stagger = 0),
            z && (g.easeReverse = z),
            C && jt(g, C),
            (T = y[b]),
            (g.duration = +oe(f, wt(a), b, T, y)),
            (g.delay = (+oe(l, wt(a), b, T, y) || 0) - a._delay),
            !c &&
              P === 1 &&
              g.delay &&
              ((a._delay = l = g.delay), (a._start += l), (g.delay = 0)),
            v.to(T, g, w ? w(b, T, y) : 0),
            (v._ease = M.none);
        v.duration() ? (f = l = 0) : (a.timeline = 0);
      } else if (p) {
        se(ht(v.vars.defaults, { ease: "none" })),
          (v._ease = Lt(p.ease || r.ease || "none"));
        var O = 0,
          k,
          R,
          D;
        if ($(p))
          p.forEach(function (E) {
            return v.to(y, E, ">");
          }),
            v.duration();
        else {
          g = {};
          for (S in p)
            S === "ease" || S === "easeEach" || Nn(S, p[S], g, p.easeEach);
          for (S in g)
            for (
              k = g[S].sort(function (E, A) {
                return E.t - A.t;
              }),
                O = 0,
                b = 0;
              b < k.length;
              b++
            )
              (R = k[b]),
                (D = {
                  ease: R.e,
                  duration: ((R.t - (b ? k[b - 1].t : 0)) / 100) * f,
                }),
                (D[S] = R.v),
                v.to(y, D, O),
                (O += D.duration);
          v.duration() < f && v.to({}, { duration: f - v.duration() });
        }
      }
      f || a.duration((f = v.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !ri && ((Ot = wt(a)), V.killTweensOf(y), (Ot = 0)),
      yt(x, wt(a), n),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (_ ||
        (!f &&
          !p &&
          a._start === W(x._time) &&
          st(_) &&
          _n(wt(a)) &&
          x.data !== "nested")) &&
        ((a._tTime = -N), a.render(Math.max(0, -l) || 0)),
      m && ir(wt(a), m),
      a
    );
  }
  var e = t.prototype;
  return (
    (e.render = function (r, n, s) {
      var a = this._time,
        u = this._tDur,
        f = this._dur,
        l = r < 0,
        _ = r > u - N && !l ? u : r < N ? 0 : r,
        c,
        d,
        p,
        h,
        m,
        x,
        y,
        v;
      if (!f) dn(this, r, n, s);
      else if (
        _ !== this._tTime ||
        !r ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== l) ||
        this._lazy
      ) {
        if (((c = _), (v = this.timeline), this._repeat)) {
          if (((h = f + this._rDelay), this._repeat < -1 && l))
            return this.totalTime(h * 100 + r, n, s);
          if (
            ((c = W(_ % h)),
            _ === u
              ? ((p = this._repeat), (c = f))
              : ((m = W(_ / h)),
                (p = ~~m),
                p && p === m ? ((c = f), p--) : c > f && (c = f)),
            (x = this._yoyo && p & 1),
            x && (c = f - c),
            (m = Qt(this._tTime, h)),
            c === a && !s && this._initted && p === m)
          )
            return (this._tTime = _), this;
          p !== m &&
            this.vars.repeatRefresh &&
            !x &&
            !this._lock &&
            c !== h &&
            this._initted &&
            ((this._lock = s = 1),
            (this.render(W(h * p), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (rr(this, l ? r : c, s, n, _)) return (this._tTime = 0), this;
          if (a !== this._time && !(s && this.vars.repeatRefresh && p !== m))
            return this;
          if (f !== this._dur) return this.render(r, n, s);
        }
        if (this._rEase) {
          var b = c < a;
          if (b !== this._inv) {
            var g = b ? a : f - a;
            (this._inv = b),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = a),
              (this._invRecip = g ? (b ? -1 : 1) / g : 0),
              (this._invScale = b ? -this.ratio : 1 - this.ratio),
              (this._invEase = b ? this._rEase : this._ease);
          }
          this.ratio = y =
            this._invRatio +
            this._invScale *
              this._invEase((c - this._invTime) * this._invRecip);
        } else this.ratio = y = this._ease(c / f);
        if (
          (this._from && (this.ratio = y = 1 - y),
          (this._tTime = _),
          (this._time = c),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !a && _ && !n && !m && (ft(this, "onStart"), this._tTime !== _))
        )
          return this;
        for (d = this._pt; d; ) d.r(y, d.d), (d = d._next);
        (v && v.render(r < 0 ? r : v._dur * v._ease(c / this._dur), n, s)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (l && He(this, r, n, s), ft(this, "onUpdate")),
          this._repeat &&
            p !== m &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            ft(this, "onRepeat"),
          (_ === this._tDur || !_) &&
            this._tTime === _ &&
            (l && !this._onUpdate && He(this, r, !0, !0),
            (r || !f) &&
              ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
              Rt(this, 1),
            !n &&
              !(l && !a) &&
              (_ || a || x) &&
              (ft(this, _ === u ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(_ < u && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (e.targets = function () {
      return this._targets;
    }),
    (e.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        o.prototype.invalidate.call(this, r)
      );
    }),
    (e.resetTo = function (r, n, s, a, u) {
      he || nt.wake(), this._ts || this.play();
      var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        l;
      return (
        this._initted || gi(this, f),
        (l = this._ease(f / this._dur)),
        zn(this, r, n, s, a, l, f, u)
          ? this.resetTo(r, n, s, a, 1)
          : (De(this, 0),
            this.parent ||
              tr(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (e.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? re(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!K),
          this
        );
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, Ot && Ot.vars.overwrite !== !0)
            ._first || re(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            Kt(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var a = this._targets,
        u = r ? pt(r) : a,
        f = this._ptLookup,
        l = this._pt,
        _,
        c,
        d,
        p,
        h,
        m,
        x;
      if ((!n || n === "all") && ln(a, u))
        return n === "all" && (this._pt = 0), re(this);
      for (
        _ = this._op = this._op || [],
          n !== "all" &&
            (Q(n) &&
              ((h = {}),
              et(n, function (y) {
                return (h[y] = 1);
              }),
              (n = h)),
            (n = Fn(a, n))),
          x = a.length;
        x--;

      )
        if (~u.indexOf(a[x])) {
          (c = f[x]),
            n === "all"
              ? ((_[x] = n), (p = c), (d = {}))
              : ((d = _[x] = _[x] || {}), (p = n));
          for (h in p)
            (m = c && c[h]),
              m &&
                ((!("kill" in m.d) || m.d.kill(h) === !0) && Ae(this, m, "_pt"),
                delete c[h]),
              d !== "all" && (d[h] = 1);
        }
      return this._initted && !this._pt && l && re(this), this;
    }),
    (t.to = function (r, n) {
      return new t(r, n, arguments[2]);
    }),
    (t.from = function (r, n) {
      return ae(1, arguments);
    }),
    (t.delayedCall = function (r, n, s, a) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: a,
      });
    }),
    (t.fromTo = function (r, n, s) {
      return ae(2, arguments);
    }),
    (t.set = function (r, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n);
    }),
    (t.killTweensOf = function (r, n, s) {
      return V.killTweensOf(r, n, s);
    }),
    t
  );
})(_e);
ht(q.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
et("staggerTo,staggerFrom,staggerFromTo", function (o) {
  q[o] = function () {
    var t = new Z(),
      e = $e.call(arguments, 0);
    return e.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), t[o].apply(t, e);
  };
});
var yi = function (t, e, i) {
    return (t[e] = i);
  },
  yr = function (t, e, i) {
    return t[e](i);
  },
  Ln = function (t, e, i, r) {
    return t[e](r.fp, i);
  },
  In = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  ze = function (t, e) {
    return Y(t[e]) ? yr : Me(t[e]) && t.setAttribute ? In : yi;
  },
  xr = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  },
  Bn = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  xi = function (t, e) {
    var i = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (t === 1 && e.e) r = e.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  vi = function (t, e) {
    for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
  },
  Wn = function (t, e, i, r) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === r && n.modifier(t, e, i), (n = s);
  },
  Vn = function (t) {
    for (var e = this._pt, i, r; e; )
      (r = e._next),
        (e.p === t && !e.op) || e.op === t
          ? Ae(this, e, "_pt")
          : e.dep || (i = 1),
        (e = r);
    return !i;
  },
  Un = function (t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
  },
  Ti = function (t) {
    for (var e = t._pt, i, r, n, s; e; ) {
      for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next;
      (e._prev = r ? r._prev : s) ? (e._prev._next = e) : (n = e),
        (e._next = r) ? (r._prev = e) : (s = e),
        (e = i);
    }
    t._pt = n;
  },
  it = (function () {
    function o(e, i, r, n, s, a, u, f, l) {
      (this.t = i),
        (this.s = n),
        (this.c = s),
        (this.p = r),
        (this.r = a || xr),
        (this.d = u || this),
        (this.set = f || yi),
        (this.pr = l || 0),
        (this._next = e),
        e && (e._prev = this);
    }
    var t = o.prototype;
    return (
      (t.modifier = function (i, r, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Un),
          (this.m = i),
          (this.mt = n),
          (this.tween = r);
      }),
      o
    );
  })();
et(
  fi +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (o) {
    return (ui[o] = 1);
  }
);
lt.TweenMax = lt.TweenLite = q;
lt.TimelineLite = lt.TimelineMax = Z;
V = new Z({
  sortChildren: !1,
  defaults: ue,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
at.stringFilter = ci;
var It = [],
  be = {},
  Yn = [],
  Yi = 0,
  Xn = 0,
  qe = function (t) {
    return (be[t] || Yn).map(function (e) {
      return e();
    });
  },
  ii = function () {
    var t = Date.now(),
      e = [];
    t - Yi > 2 &&
      (qe("matchMediaInit"),
      It.forEach(function (i) {
        var r = i.queries,
          n = i.conditions,
          s,
          a,
          u,
          f;
        for (a in r)
          (s = gt.matchMedia(r[a]).matches),
            s && (u = 1),
            s !== n[a] && ((n[a] = s), (f = 1));
        f && (i.revert(), u && e.push(i));
      }),
      qe("matchMediaRevert"),
      e.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (Yi = t),
      qe("matchMedia"));
  },
  vr = (function () {
    function o(e, i) {
      (this.selector = i && Je(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Xn++),
        e && this.add(e);
    }
    var t = o.prototype;
    return (
      (t.add = function (i, r, n) {
        Y(i) && ((n = r), (r = i), (i = Y));
        var s = this,
          a = function () {
            var f = I,
              l = s.selector,
              _;
            return (
              f && f !== s && f.data.push(s),
              n && (s.selector = Je(n)),
              (I = s),
              (_ = r.apply(s, arguments)),
              Y(_) && s._r.push(_),
              (I = f),
              (s.selector = l),
              (s.isReverted = !1),
              _
            );
          };
        return (
          (s.last = a),
          i === Y
            ? a(s, function (u) {
                return s.add(null, u);
              })
            : i
            ? (s[i] = a)
            : a
        );
      }),
      (t.ignore = function (i) {
        var r = I;
        (I = null), i(this), (I = r);
      }),
      (t.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof o
              ? i.push.apply(i, r.getTweens())
              : r instanceof q &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (i, r) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var a = n.getTweens(), u = n.data.length, f; u--; )
                  (f = n.data[u]),
                    f.data === "isFlip" &&
                      (f.revert(),
                      f.getChildren(!0, !0, !1).forEach(function (l) {
                        return a.splice(a.indexOf(l), 1);
                      }));
                for (
                  a
                    .map(function (l) {
                      return {
                        g:
                          l._dur ||
                          l._delay ||
                          (l._sat && !l._sat.vars.immediateRender)
                            ? l.globalTime(0)
                            : -1 / 0,
                        t: l,
                      };
                    })
                    .sort(function (l, _) {
                      return _.g - l.g || -1 / 0;
                    })
                    .forEach(function (l) {
                      return l.t.revert(i);
                    }),
                    u = n.data.length;
                  u--;

                )
                  (f = n.data[u]),
                    f instanceof Z
                      ? f.data !== "nested" &&
                        (f.scrollTrigger && f.scrollTrigger.revert(), f.kill())
                      : !(f instanceof q) && f.revert && f.revert(i);
                n._r.forEach(function (l) {
                  return l(i, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          r)
        )
          for (var s = It.length; s--; )
            It[s].id === this.id && It.splice(s, 1);
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      o
    );
  })(),
  qn = (function () {
    function o(e) {
      (this.contexts = []), (this.scope = e), I && I.data.push(this);
    }
    var t = o.prototype;
    return (
      (t.add = function (i, r, n) {
        xt(i) || (i = { matches: i });
        var s = new vr(0, n || this.scope),
          a = (s.conditions = {}),
          u,
          f,
          l;
        I && !s.selector && (s.selector = I.selector),
          this.contexts.push(s),
          (r = s.add("onMatch", r)),
          (s.queries = i);
        for (f in i)
          f === "all"
            ? (l = 1)
            : ((u = gt.matchMedia(i[f])),
              u &&
                (It.indexOf(s) < 0 && It.push(s),
                (a[f] = u.matches) && (l = 1),
                u.addListener
                  ? u.addListener(ii)
                  : u.addEventListener("change", ii)));
        return (
          l &&
            r(s, function (_) {
              return s.add(null, _);
            }),
          this
        );
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      (t.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      o
    );
  })(),
  ke = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      e.forEach(function (r) {
        return _r(r);
      });
    },
    timeline: function (t) {
      return new Z(t);
    },
    getTweensOf: function (t, e) {
      return V.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, r) {
      Q(t) && (t = pt(t)[0]);
      var n = Mt(t || {}).get,
        s = i ? Ji : $i;
      return (
        i === "native" && (i = ""),
        t &&
          (e
            ? s(((rt[e] && rt[e].get) || n)(t, e, i, r))
            : function (a, u, f) {
                return s(((rt[a] && rt[a].get) || n)(t, a, u, f));
              })
      );
    },
    quickSetter: function (t, e, i) {
      if (((t = pt(t)), t.length > 1)) {
        var r = t.map(function (l) {
            return J.quickSetter(l, e, i);
          }),
          n = r.length;
        return function (l) {
          for (var _ = n; _--; ) r[_](l);
        };
      }
      t = t[0] || {};
      var s = rt[e],
        a = Mt(t),
        u = (a.harness && (a.harness.aliases || {})[e]) || e,
        f = s
          ? function (l) {
              var _ = new s();
              (Gt._pt = 0),
                _.init(t, i ? l + i : l, Gt, 0, [t]),
                _.render(1, _),
                Gt._pt && vi(1, Gt);
            }
          : a.set(t, u);
      return s
        ? f
        : function (l) {
            return f(t, u, i ? l + i : l, a, 1);
          };
    },
    quickTo: function (t, e, i) {
      var r,
        n = J.to(
          t,
          ht(
            ((r = {}), (r[e] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        s = function (u, f, l) {
          return n.resetTo(e, u, f, l);
        };
      return (s.tween = n), s;
    },
    isTweening: function (t) {
      return V.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Lt(t.ease, ue.ease)), Ii(ue, t || {});
    },
    config: function (t) {
      return Ii(at, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (r || "").split(",").forEach(function (a) {
        return (
          a && !rt[a] && !lt[a] && fe(e + " effect requires " + a + " plugin.")
        );
      }),
        (Ve[e] = function (a, u, f) {
          return i(pt(a), ht(u || {}, n), f);
        }),
        s &&
          (Z.prototype[e] = function (a, u, f) {
            return this.add(Ve[e](a, xt(u) ? u : (f = u) && {}, this), f);
          });
    },
    registerEase: function (t, e) {
      M[t] = Lt(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? Lt(t, e) : M;
    },
    getById: function (t) {
      return V.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var i = new Z(t),
        r,
        n;
      for (
        i.smoothChildTiming = st(t.smoothChildTiming),
          V.remove(i),
          i._dp = 0,
          i._time = i._tTime = V._time,
          r = V._first;
        r;

      )
        (n = r._next),
          (e ||
            !(
              !r._dur &&
              r instanceof q &&
              r.vars.onComplete === r._targets[0]
            )) &&
            yt(i, r, r._start - r._delay),
          (r = n);
      return yt(V, i, 0), i;
    },
    context: function (t, e) {
      return t ? new vr(t, e) : I;
    },
    matchMedia: function (t) {
      return new qn(t);
    },
    matchMediaRefresh: function () {
      return (
        It.forEach(function (t) {
          var e = t.conditions,
            i,
            r;
          for (r in e) e[r] && ((e[r] = !1), (i = 1));
          i && t.revert();
        }) || ii()
      );
    },
    addEventListener: function (t, e) {
      var i = be[t] || (be[t] = []);
      ~i.indexOf(e) || i.push(e);
    },
    removeEventListener: function (t, e) {
      var i = be[t],
        r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: wn,
      wrapYoyo: bn,
      distribute: ar,
      random: ur,
      snap: or,
      normalize: Tn,
      getUnit: H,
      clamp: gn,
      splitColor: cr,
      toArray: pt,
      selector: Je,
      mapRange: lr,
      pipe: xn,
      unitize: vn,
      interpolate: Sn,
      shuffle: sr,
    },
    install: Qi,
    effects: Ve,
    ticker: nt,
    updateRoot: Z.updateRoot,
    plugins: rt,
    globalTimeline: V,
    core: {
      PropTween: it,
      globals: Ki,
      Tween: q,
      Timeline: Z,
      Animation: _e,
      getCache: Mt,
      _removeLinkedListItem: Ae,
      reverting: function () {
        return K;
      },
      context: function (t) {
        return t && I && (I.data.push(t), (t._ctx = I)), I;
      },
      suppressOverwrites: function (t) {
        return (ri = t);
      },
    },
  };
et("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
  return (ke[o] = q[o]);
});
nt.add(Z.updateRoot);
Gt = ke.to({}, { duration: 0 });
var Gn = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  },
  jn = function (t, e) {
    var i = t._targets,
      r,
      n,
      s;
    for (r in e)
      for (n = i.length; n--; )
        (s = t._ptLookup[n][r]),
          s &&
            (s = s.d) &&
            (s._pt && (s = Gn(s, r)),
            s && s.modifier && s.modifier(e[r], t, i[n], r));
  },
  Ge = function (t, e) {
    return {
      name: t,
      headless: 1,
      rawVars: 1,
      init: function (r, n, s) {
        s._onInit = function (a) {
          var u, f;
          if (
            (Q(n) &&
              ((u = {}),
              et(n, function (l) {
                return (u[l] = 1);
              }),
              (n = u)),
            e)
          ) {
            u = {};
            for (f in n) u[f] = e(n[f]);
            n = u;
          }
          jn(a, n);
        };
      },
    };
  },
  J =
    ke.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var s, a, u;
          this.tween = i;
          for (s in e)
            (u = t.getAttribute(s) || ""),
              (a = this.add(
                t,
                "setAttribute",
                (u || 0) + "",
                e[s],
                r,
                n,
                0,
                0,
                s
              )),
              (a.op = s),
              (a.b = u),
              this._props.push(s);
        },
        render: function (t, e) {
          for (var i = e._pt; i; )
            K ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (t, e) {
          for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Ge("roundProps", ti),
      Ge("modifiers"),
      Ge("snap", or)
    ) || ke;
q.version = Z.version = J.version = "3.15.0";
ji = 1;
ni() && Ht();
var Qn = M.Power0,
  Kn = M.Power1,
  Hn = M.Power2,
  Zn = M.Power3,
  $n = M.Power4,
  Jn = M.Linear,
  ts = M.Quad,
  es = M.Cubic,
  is = M.Quart,
  rs = M.Quint,
  ns = M.Strong,
  ss = M.Elastic,
  as = M.Back,
  os = M.SteppedEase,
  us = M.Bounce,
  fs = M.Sine,
  ls = M.Expo,
  hs = M.Circ;
var Tr,
  Et,
  Jt,
  Oi,
  qt,
  _s,
  wr,
  ki,
  cs = function () {
    return typeof window < "u";
  },
  Ct = {},
  Xt = 180 / Math.PI,
  te = Math.PI / 180,
  $t = Math.atan2,
  br = 1e8,
  Mi = /([A-Z])/g,
  ds = /(left|right|width|margin|padding|x)/i,
  ps = /[\s,\(]\S/,
  vt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  bi = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  ms = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
      e
    );
  },
  gs = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
      e
    );
  },
  ys = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
      e
    );
  },
  xs = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  Ar = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  Er = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  },
  vs = function (t, e, i) {
    return (t.style[e] = i);
  },
  Ts = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  ws = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  bs = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  Ss = function (t, e, i, r, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
  },
  Ps = function (t, e, i, r, n) {
    var s = t._gsap;
    (s[e] = i), s.renderTransform(n, s);
  },
  U = "transform",
  ot = U + "Origin",
  Cs = function o(t, e) {
    var i = this,
      r = this.target,
      n = r.style,
      s = r._gsap;
    if (t in Ct && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        (t = vt[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (a) {
                return (i.tfm[a] = Pt(r, a));
              })
            : (this.tfm[t] = s.x ? s[t] : Pt(r, t)),
          t === ot && (this.tfm.zOrigin = s.zOrigin);
      else
        return vt.transform.split(",").forEach(function (a) {
          return o.call(i, a, e);
        });
      if (this.props.indexOf(U) >= 0) return;
      s.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(ot, e, "")),
        (t = U);
    }
    (n || e) && this.props.push(t, e, n[t]);
  },
  Dr = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  Os = function () {
    var t = this.props,
      e = this.target,
      i = e.style,
      r = e._gsap,
      n,
      s;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? t[n + 1] === 2
          ? e[t[n]](t[n + 2])
          : (e[t[n]] = t[n + 2])
        : t[n + 2]
        ? (i[t[n]] = t[n + 2])
        : i.removeProperty(
            t[n].substr(0, 2) === "--"
              ? t[n]
              : t[n].replace(Mi, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) r[s] = this.tfm[s];
      r.svg &&
        (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        (n = ki()),
        (!n || !n.isStart) &&
          !i[U] &&
          (Dr(i),
          r.zOrigin &&
            i[ot] &&
            ((i[ot] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  zr = function (t, e) {
    var i = { target: t, props: [], revert: Os, save: Cs };
    return (
      t._gsap || J.core.getCache(t),
      e &&
        t.style &&
        t.nodeType &&
        e.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  Fr,
  Si = function (t, e) {
    var i = Et.createElementNS
      ? Et.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : Et.createElement(t);
    return i && i.style ? i : Et.createElement(t);
  },
  _t = function o(t, e, i) {
    var r = getComputedStyle(t);
    return (
      r[e] ||
      r.getPropertyValue(e.replace(Mi, "-$1").toLowerCase()) ||
      r.getPropertyValue(e) ||
      (!i && o(t, ee(e) || e, 1)) ||
      ""
    );
  },
  Sr = "O,Moz,ms,Ms,Webkit".split(","),
  ee = function (t, e, i) {
    var r = e || qt,
      n = r.style,
      s = 5;
    if (t in n && !i) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      s-- && !(Sr[s] + t in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Sr[s] : "") + t;
  },
  Pi = function () {
    cs() &&
      window.document &&
      ((Tr = window),
      (Et = Tr.document),
      (Jt = Et.documentElement),
      (qt = Si("div") || { style: {} }),
      (_s = Si("div")),
      (U = ee(U)),
      (ot = U + "Origin"),
      (qt.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Fr = !!ee("perspective")),
      (ki = J.core.reverting),
      (Oi = 1));
  },
  Pr = function (t) {
    var e = t.ownerSVGElement,
      i = Si(
        "svg",
        (e && e.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = t.cloneNode(!0),
      n;
    (r.style.display = "block"), i.appendChild(r), Jt.appendChild(i);
    try {
      n = r.getBBox();
    } catch {}
    return i.removeChild(r), Jt.removeChild(i), n;
  },
  Cr = function (t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  Nr = function (t) {
    var e, i;
    try {
      e = t.getBBox();
    } catch {
      (e = Pr(t)), (i = 1);
    }
    return (
      (e && (e.width || e.height)) || i || (e = Pr(t)),
      e && !e.width && !e.x && !e.y
        ? {
            x: +Cr(t, ["x", "cx", "x1"]) || 0,
            y: +Cr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : e
    );
  },
  Lr = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Nr(t));
  },
  zt = function (t, e) {
    if (e) {
      var i = t.style,
        r;
      e in Ct && e !== ot && (e = U),
        i.removeProperty
          ? ((r = e.substr(0, 2)),
            (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
            i.removeProperty(
              r === "--" ? e : e.replace(Mi, "-$1").toLowerCase()
            ))
          : i.removeAttribute(e);
    }
  },
  Dt = function (t, e, i, r, n, s) {
    var a = new it(t._pt, e, i, 0, 1, s ? Er : Ar);
    return (t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a;
  },
  Or = { deg: 1, rad: 1, turn: 1 },
  ks = { grid: 1, flex: 1 },
  Ft = function o(t, e, i, r) {
    var n = parseFloat(i) || 0,
      s = (i + "").trim().substr((n + "").length) || "px",
      a = qt.style,
      u = ds.test(e),
      f = t.tagName.toLowerCase() === "svg",
      l = (f ? "client" : "offset") + (u ? "Width" : "Height"),
      _ = 100,
      c = r === "px",
      d = r === "%",
      p,
      h,
      m,
      x;
    if (r === s || !n || Or[r] || Or[s]) return n;
    if (
      (s !== "px" && !c && (n = o(t, e, i, "px")),
      (x = t.getCTM && Lr(t)),
      (d || s === "%") && (Ct[e] || ~e.indexOf("adius")))
    )
      return (
        (p = x ? t.getBBox()[u ? "width" : "height"] : t[l]),
        X(d ? (n / p) * _ : (n / 100) * p)
      );
    if (
      ((a[u ? "width" : "height"] = _ + (c ? s : r)),
      (h =
        (r !== "rem" && ~e.indexOf("adius")) ||
        (r === "em" && t.appendChild && !f)
          ? t
          : t.parentNode),
      x && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === Et || !h.appendChild) && (h = Et.body),
      (m = h._gsap),
      m && d && m.width && u && m.time === nt.time && !m.uncache)
    )
      return X((n / m.width) * _);
    if (d && (e === "height" || e === "width")) {
      var y = t.style[e];
      (t.style[e] = _ + r), (p = t[l]), y ? (t.style[e] = y) : zt(t, e);
    } else
      (d || s === "%") &&
        !ks[_t(h, "display")] &&
        (a.position = _t(t, "position")),
        h === t && (a.position = "static"),
        h.appendChild(qt),
        (p = qt[l]),
        h.removeChild(qt),
        (a.position = "absolute");
    return (
      u && d && ((m = Mt(h)), (m.time = nt.time), (m.width = h[l])),
      X(c ? (p * n) / _ : p && n ? (_ / p) * n : 0)
    );
  },
  Pt = function (t, e, i, r) {
    var n;
    return (
      Oi || Pi(),
      e in vt &&
        e !== "transform" &&
        ((e = vt[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
      Ct[e] && e !== "transform"
        ? ((n = me(t, r)),
          (n =
            e !== "transformOrigin"
              ? n[e]
              : n.svg
              ? n.origin
              : Ne(_t(t, ot)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (Fe[e] && Fe[e](t, e, i)) ||
              _t(t, e) ||
              hi(t, e) ||
              (e === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? Ft(t, e, n, i) + i : n
    );
  },
  Ms = function (t, e, i, r) {
    if (!i || i === "none") {
      var n = ee(e, t, 1),
        s = n && _t(t, n, 1);
      s && s !== i
        ? ((e = n), (i = s))
        : e === "borderColor" && (i = _t(t, "borderTopColor"));
    }
    var a = new it(this._pt, t.style, e, 0, 1, xi),
      u = 0,
      f = 0,
      l,
      _,
      c,
      d,
      p,
      h,
      m,
      x,
      y,
      v,
      b,
      g;
    if (
      ((a.b = i),
      (a.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = _t(t, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((h = t.style[e]),
        (t.style[e] = r),
        (r = _t(t, e) || r),
        h ? (t.style[e] = h) : zt(t, e)),
      (l = [i, r]),
      ci(l),
      (i = l[0]),
      (r = l[1]),
      (c = i.match(Bt) || []),
      (g = r.match(Bt) || []),
      g.length)
    ) {
      for (; (_ = Bt.exec(r)); )
        (m = _[0]),
          (y = r.substring(u, _.index)),
          p
            ? (p = (p + 1) % 5)
            : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
          m !== (h = c[f++] || "") &&
            ((d = parseFloat(h) || 0),
            (b = h.substr((d + "").length)),
            m.charAt(1) === "=" && (m = Wt(d, m) + b),
            (x = parseFloat(m)),
            (v = m.substr((x + "").length)),
            (u = Bt.lastIndex - v.length),
            v ||
              ((v = v || at.units[e] || b),
              u === r.length && ((r += v), (a.e += v))),
            b !== v && (d = Ft(t, e, h, v) || 0),
            (a._pt = {
              _next: a._pt,
              p: y || f === 1 ? y : ",",
              s: d,
              c: x - d,
              m: (p && p < 4) || e === "zIndex" ? Math.round : 0,
            }));
      a.c = u < r.length ? r.substring(u, r.length) : "";
    } else a.r = e === "display" && r === "none" ? Er : Ar;
    return ai.test(r) && (a.e = 0), (this._pt = a), a;
  },
  kr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Rs = function (t) {
    var e = t.split(" "),
      i = e[0],
      r = e[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((t = i), (i = r), (r = t)),
      (e[0] = kr[i] || i),
      (e[1] = kr[r] || r),
      e.join(" ")
    );
  },
  As = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i = e.t,
        r = i.style,
        n = e.u,
        s = i._gsap,
        a,
        u,
        f;
      if (n === "all" || n === !0) (r.cssText = ""), (u = 1);
      else
        for (n = n.split(","), f = n.length; --f > -1; )
          (a = n[f]),
            Ct[a] && ((u = 1), (a = a === "transformOrigin" ? ot : U)),
            zt(i, a);
      u &&
        (zt(i, U),
        s &&
          (s.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          me(i, 1),
          (s.uncache = 1),
          Dr(r)));
    }
  },
  Fe = {
    clearProps: function (t, e, i, r, n) {
      if (n.data !== "isFromStart") {
        var s = (t._pt = new it(t._pt, e, i, 0, 0, As));
        return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
      }
    },
  },
  pe = [1, 0, 0, 1, 0, 0],
  Ir = {},
  Br = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  Mr = function (t) {
    var e = _t(t, U);
    return Br(e) ? pe : e.substr(7).match(si).map(X);
  },
  Ri = function (t, e) {
    var i = t._gsap || Mt(t),
      r = t.style,
      n = Mr(t),
      s,
      a,
      u,
      f;
    return i.svg && t.getAttribute("transform")
      ? ((u = t.transform.baseVal.consolidate().matrix),
        (n = [u.a, u.b, u.c, u.d, u.e, u.f]),
        n.join(",") === "1,0,0,1,0,0" ? pe : n)
      : (n === pe &&
          !t.offsetParent &&
          t !== Jt &&
          !i.svg &&
          ((u = r.display),
          (r.display = "block"),
          (s = t.parentNode),
          (!s || (!t.offsetParent && !t.getBoundingClientRect().width)) &&
            ((f = 1), (a = t.nextElementSibling), Jt.appendChild(t)),
          (n = Mr(t)),
          u ? (r.display = u) : zt(t, "display"),
          f &&
            (a
              ? s.insertBefore(t, a)
              : s
              ? s.appendChild(t)
              : Jt.removeChild(t))),
        e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  Ci = function (t, e, i, r, n, s) {
    var a = t._gsap,
      u = n || Ri(t, !0),
      f = a.xOrigin || 0,
      l = a.yOrigin || 0,
      _ = a.xOffset || 0,
      c = a.yOffset || 0,
      d = u[0],
      p = u[1],
      h = u[2],
      m = u[3],
      x = u[4],
      y = u[5],
      v = e.split(" "),
      b = parseFloat(v[0]) || 0,
      g = parseFloat(v[1]) || 0,
      P,
      S,
      T,
      w;
    i
      ? u !== pe &&
        (S = d * m - p * h) &&
        ((T = b * (m / S) + g * (-h / S) + (h * y - m * x) / S),
        (w = b * (-p / S) + g * (d / S) - (d * y - p * x) / S),
        (b = T),
        (g = w))
      : ((P = Nr(t)),
        (b = P.x + (~v[0].indexOf("%") ? (b / 100) * P.width : b)),
        (g = P.y + (~(v[1] || v[0]).indexOf("%") ? (g / 100) * P.height : g))),
      r || (r !== !1 && a.smooth)
        ? ((x = b - f),
          (y = g - l),
          (a.xOffset = _ + (x * d + y * h) - x),
          (a.yOffset = c + (x * p + y * m) - y))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = b),
      (a.yOrigin = g),
      (a.smooth = !!r),
      (a.origin = e),
      (a.originIsAbsolute = !!i),
      (t.style[ot] = "0px 0px"),
      s &&
        (Dt(s, a, "xOrigin", f, b),
        Dt(s, a, "yOrigin", l, g),
        Dt(s, a, "xOffset", _, a.xOffset),
        Dt(s, a, "yOffset", c, a.yOffset)),
      t.setAttribute("data-svg-origin", b + " " + g);
  },
  me = function (t, e) {
    var i = t._gsap || new di(t);
    if ("x" in i && !e && !i.uncache) return i;
    var r = t.style,
      n = i.scaleX < 0,
      s = "px",
      a = "deg",
      u = getComputedStyle(t),
      f = _t(t, ot) || "0",
      l,
      _,
      c,
      d,
      p,
      h,
      m,
      x,
      y,
      v,
      b,
      g,
      P,
      S,
      T,
      w,
      C,
      z,
      O,
      k,
      R,
      D,
      E,
      A,
      G,
      B,
      L,
      ut,
      j,
      Tt,
      tt,
      mt;
    return (
      (l = _ = c = h = m = x = y = v = b = 0),
      (d = p = 1),
      (i.svg = !!(t.getCTM && Lr(t))),
      u.translate &&
        ((u.translate !== "none" ||
          u.scale !== "none" ||
          u.rotate !== "none") &&
          (r[U] =
            (u.translate !== "none"
              ? "translate3d(" +
                (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
            (u.scale !== "none"
              ? "scale(" + u.scale.split(" ").join(",") + ") "
              : "") +
            (u[U] !== "none" ? u[U] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (S = Ri(t, i.svg)),
      i.svg &&
        (i.uncache
          ? ((G = t.getBBox()),
            (f = i.xOrigin - G.x + "px " + (i.yOrigin - G.y) + "px"),
            (A = ""))
          : (A = !e && t.getAttribute("data-svg-origin")),
        Ci(t, A || f, !!A || i.originIsAbsolute, i.smooth !== !1, S)),
      (g = i.xOrigin || 0),
      (P = i.yOrigin || 0),
      S !== pe &&
        ((z = S[0]),
        (O = S[1]),
        (k = S[2]),
        (R = S[3]),
        (l = D = S[4]),
        (_ = E = S[5]),
        S.length === 6
          ? ((d = Math.sqrt(z * z + O * O)),
            (p = Math.sqrt(R * R + k * k)),
            (h = z || O ? $t(O, z) * Xt : 0),
            (y = k || R ? $t(k, R) * Xt + h : 0),
            y && (p *= Math.abs(Math.cos(y * te))),
            i.svg && ((l -= g - (g * z + P * k)), (_ -= P - (g * O + P * R))))
          : ((mt = S[6]),
            (Tt = S[7]),
            (L = S[8]),
            (ut = S[9]),
            (j = S[10]),
            (tt = S[11]),
            (l = S[12]),
            (_ = S[13]),
            (c = S[14]),
            (T = $t(mt, j)),
            (m = T * Xt),
            T &&
              ((w = Math.cos(-T)),
              (C = Math.sin(-T)),
              (A = D * w + L * C),
              (G = E * w + ut * C),
              (B = mt * w + j * C),
              (L = D * -C + L * w),
              (ut = E * -C + ut * w),
              (j = mt * -C + j * w),
              (tt = Tt * -C + tt * w),
              (D = A),
              (E = G),
              (mt = B)),
            (T = $t(-k, j)),
            (x = T * Xt),
            T &&
              ((w = Math.cos(-T)),
              (C = Math.sin(-T)),
              (A = z * w - L * C),
              (G = O * w - ut * C),
              (B = k * w - j * C),
              (tt = R * C + tt * w),
              (z = A),
              (O = G),
              (k = B)),
            (T = $t(O, z)),
            (h = T * Xt),
            T &&
              ((w = Math.cos(T)),
              (C = Math.sin(T)),
              (A = z * w + O * C),
              (G = D * w + E * C),
              (O = O * w - z * C),
              (E = E * w - D * C),
              (z = A),
              (D = G)),
            m &&
              Math.abs(m) + Math.abs(h) > 359.9 &&
              ((m = h = 0), (x = 180 - x)),
            (d = X(Math.sqrt(z * z + O * O + k * k))),
            (p = X(Math.sqrt(E * E + mt * mt))),
            (T = $t(D, E)),
            (y = Math.abs(T) > 2e-4 ? T * Xt : 0),
            (b = tt ? 1 / (tt < 0 ? -tt : tt) : 0)),
        i.svg &&
          ((A = t.getAttribute("transform")),
          (i.forceCSS = t.setAttribute("transform", "") || !Br(_t(t, U))),
          A && t.setAttribute("transform", A))),
      Math.abs(y) > 90 &&
        Math.abs(y) < 270 &&
        (n
          ? ((d *= -1), (y += h <= 0 ? 180 : -180), (h += h <= 0 ? 180 : -180))
          : ((p *= -1), (y += y <= 0 ? 180 : -180))),
      (e = e || i.uncache),
      (i.x =
        l -
        ((i.xPercent =
          l &&
          ((!e && i.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
          ? (t.offsetWidth * i.xPercent) / 100
          : 0) +
        s),
      (i.y =
        _ -
        ((i.yPercent =
          _ &&
          ((!e && i.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0)))
          ? (t.offsetHeight * i.yPercent) / 100
          : 0) +
        s),
      (i.z = c + s),
      (i.scaleX = X(d)),
      (i.scaleY = X(p)),
      (i.rotation = X(h) + a),
      (i.rotationX = X(m) + a),
      (i.rotationY = X(x) + a),
      (i.skewX = y + a),
      (i.skewY = v + a),
      (i.transformPerspective = b + s),
      (i.zOrigin = parseFloat(f.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
        (r[ot] = Ne(f)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = at.force3D),
      (i.renderTransform = i.svg ? Ds : Fr ? Wr : Es),
      (i.uncache = 0),
      i
    );
  },
  Ne = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  wi = function (t, e, i) {
    var r = H(e);
    return X(parseFloat(e) + parseFloat(Ft(t, "x", i + "px", r))) + r;
  },
  Es = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      Wr(t, e);
  },
  Ut = "0deg",
  de = "0px",
  Yt = ") ",
  Wr = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      u = i.z,
      f = i.rotation,
      l = i.rotationY,
      _ = i.rotationX,
      c = i.skewX,
      d = i.skewY,
      p = i.scaleX,
      h = i.scaleY,
      m = i.transformPerspective,
      x = i.force3D,
      y = i.target,
      v = i.zOrigin,
      b = "",
      g = (x === "auto" && t && t !== 1) || x === !0;
    if (v && (_ !== Ut || l !== Ut)) {
      var P = parseFloat(l) * te,
        S = Math.sin(P),
        T = Math.cos(P),
        w;
      (P = parseFloat(_) * te),
        (w = Math.cos(P)),
        (s = wi(y, s, S * w * -v)),
        (a = wi(y, a, -Math.sin(P) * -v)),
        (u = wi(y, u, T * w * -v + v));
    }
    m !== de && (b += "perspective(" + m + Yt),
      (r || n) && (b += "translate(" + r + "%, " + n + "%) "),
      (g || s !== de || a !== de || u !== de) &&
        (b +=
          u !== de || g
            ? "translate3d(" + s + ", " + a + ", " + u + ") "
            : "translate(" + s + ", " + a + Yt),
      f !== Ut && (b += "rotate(" + f + Yt),
      l !== Ut && (b += "rotateY(" + l + Yt),
      _ !== Ut && (b += "rotateX(" + _ + Yt),
      (c !== Ut || d !== Ut) && (b += "skew(" + c + ", " + d + Yt),
      (p !== 1 || h !== 1) && (b += "scale(" + p + ", " + h + Yt),
      (y.style[U] = b || "translate(0, 0)");
  },
  Ds = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      u = i.rotation,
      f = i.skewX,
      l = i.skewY,
      _ = i.scaleX,
      c = i.scaleY,
      d = i.target,
      p = i.xOrigin,
      h = i.yOrigin,
      m = i.xOffset,
      x = i.yOffset,
      y = i.forceCSS,
      v = parseFloat(s),
      b = parseFloat(a),
      g,
      P,
      S,
      T,
      w;
    (u = parseFloat(u)),
      (f = parseFloat(f)),
      (l = parseFloat(l)),
      l && ((l = parseFloat(l)), (f += l), (u += l)),
      u || f
        ? ((u *= te),
          (f *= te),
          (g = Math.cos(u) * _),
          (P = Math.sin(u) * _),
          (S = Math.sin(u - f) * -c),
          (T = Math.cos(u - f) * c),
          f &&
            ((l *= te),
            (w = Math.tan(f - l)),
            (w = Math.sqrt(1 + w * w)),
            (S *= w),
            (T *= w),
            l &&
              ((w = Math.tan(l)),
              (w = Math.sqrt(1 + w * w)),
              (g *= w),
              (P *= w))),
          (g = X(g)),
          (P = X(P)),
          (S = X(S)),
          (T = X(T)))
        : ((g = _), (T = c), (P = S = 0)),
      ((v && !~(s + "").indexOf("px")) || (b && !~(a + "").indexOf("px"))) &&
        ((v = Ft(d, "x", s, "px")), (b = Ft(d, "y", a, "px"))),
      (p || h || m || x) &&
        ((v = X(v + p - (p * g + h * S) + m)),
        (b = X(b + h - (p * P + h * T) + x))),
      (r || n) &&
        ((w = d.getBBox()),
        (v = X(v + (r / 100) * w.width)),
        (b = X(b + (n / 100) * w.height))),
      (w =
        "matrix(" + g + "," + P + "," + S + "," + T + "," + v + "," + b + ")"),
      d.setAttribute("transform", w),
      y && (d.style[U] = w);
  },
  zs = function (t, e, i, r, n) {
    var s = 360,
      a = Q(n),
      u = parseFloat(n) * (a && ~n.indexOf("rad") ? Xt : 1),
      f = u - r,
      l = r + f + "deg",
      _,
      c;
    return (
      a &&
        ((_ = n.split("_")[1]),
        _ === "short" && ((f %= s), f !== f % (s / 2) && (f += f < 0 ? s : -s)),
        _ === "cw" && f < 0
          ? (f = ((f + s * br) % s) - ~~(f / s) * s)
          : _ === "ccw" && f > 0 && (f = ((f - s * br) % s) - ~~(f / s) * s)),
      (t._pt = c = new it(t._pt, e, i, r, f, ms)),
      (c.e = l),
      (c.u = "deg"),
      t._props.push(i),
      c
    );
  },
  Rr = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Fs = function (t, e, i) {
    var r = Rr({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = i.style,
      a,
      u,
      f,
      l,
      _,
      c,
      d,
      p;
    r.svg
      ? ((f = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (s[U] = e),
        (a = me(i, 1)),
        zt(i, U),
        i.setAttribute("transform", f))
      : ((f = getComputedStyle(i)[U]), (s[U] = e), (a = me(i, 1)), (s[U] = f));
    for (u in Ct)
      (f = r[u]),
        (l = a[u]),
        f !== l &&
          n.indexOf(u) < 0 &&
          ((d = H(f)),
          (p = H(l)),
          (_ = d !== p ? Ft(i, u, f, p) : parseFloat(f)),
          (c = parseFloat(l)),
          (t._pt = new it(t._pt, a, u, _, c - _, bi)),
          (t._pt.u = p || 0),
          t._props.push(u));
    Rr(a, r);
  };
et("padding,margin,Width,Radius", function (o, t) {
  var e = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (a) {
      return t < 2 ? o + a : "border" + a + o;
    });
  Fe[t > 1 ? "border" + o : o] = function (a, u, f, l, _) {
    var c, d;
    if (arguments.length < 4)
      return (
        (c = s.map(function (p) {
          return Pt(a, p, f);
        })),
        (d = c.join(" ")),
        d.split(c[0]).length === 5 ? c[0] : d
      );
    (c = (l + "").split(" ")),
      (d = {}),
      s.forEach(function (p, h) {
        return (d[p] = c[h] = c[h] || c[((h - 1) / 2) | 0]);
      }),
      a.init(u, d, _);
  };
});
var Ai = {
  name: "css",
  register: Pi,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, e, i, r, n) {
    var s = this._props,
      a = t.style,
      u = i.vars.startAt,
      f,
      l,
      _,
      c,
      d,
      p,
      h,
      m,
      x,
      y,
      v,
      b,
      g,
      P,
      S,
      T,
      w;
    Oi || Pi(),
      (this.styles = this.styles || zr(t)),
      (T = this.styles.props),
      (this.tween = i);
    for (h in e)
      if (h !== "autoRound" && ((l = e[h]), !(rt[h] && mi(h, e, i, r, t, n)))) {
        if (
          ((d = typeof l),
          (p = Fe[h]),
          d === "function" && ((l = l.call(i, r, t, n)), (d = typeof l)),
          d === "string" && ~l.indexOf("random(") && (l = Zt(l)),
          p)
        )
          p(this, t, h, l, i) && (S = 1);
        else if (h.substr(0, 2) === "--")
          (f = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
            (l += ""),
            (bt.lastIndex = 0),
            bt.test(f) ||
              ((m = H(f)),
              (x = H(l)),
              x ? m !== x && (f = Ft(t, h, f, x) + x) : m && (l += m)),
            this.add(a, "setProperty", f, l, r, n, 0, 0, h),
            s.push(h),
            T.push(h, 0, a[h]);
        else if (d !== "undefined") {
          if (
            (u && h in u
              ? ((f = typeof u[h] == "function" ? u[h].call(i, r, t, n) : u[h]),
                Q(f) && ~f.indexOf("random(") && (f = Zt(f)),
                H(f + "") ||
                  f === "auto" ||
                  (f += at.units[h] || H(Pt(t, h)) || ""),
                (f + "").charAt(1) === "=" && (f = Pt(t, h)))
              : (f = Pt(t, h)),
            (c = parseFloat(f)),
            (y = d === "string" && l.charAt(1) === "=" && l.substr(0, 2)),
            y && (l = l.substr(2)),
            (_ = parseFloat(l)),
            h in vt &&
              (h === "autoAlpha" &&
                (c === 1 && Pt(t, "visibility") === "hidden" && _ && (c = 0),
                T.push("visibility", 0, a.visibility),
                Dt(
                  this,
                  a,
                  "visibility",
                  c ? "inherit" : "hidden",
                  _ ? "inherit" : "hidden",
                  !_
                )),
              h !== "scale" &&
                h !== "transform" &&
                ((h = vt[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
            (v = h in Ct),
            v)
          ) {
            if (
              (this.styles.save(h),
              (w = l),
              d === "string" && l.substring(0, 6) === "var(--")
            ) {
              if (
                ((l = _t(t, l.substring(4, l.indexOf(")")))),
                l.substring(0, 5) === "calc(")
              ) {
                var C = t.style.perspective;
                (t.style.perspective = l),
                  (l = _t(t, "perspective")),
                  C ? (t.style.perspective = C) : zt(t, "perspective");
              }
              _ = parseFloat(l);
            }
            if (
              (b ||
                ((g = t._gsap),
                (g.renderTransform && !e.parseTransform) ||
                  me(t, e.parseTransform),
                (P = e.smoothOrigin !== !1 && g.smooth),
                (b = this._pt =
                  new it(this._pt, a, U, 0, 1, g.renderTransform, g, 0, -1)),
                (b.dep = 1)),
              h === "scale")
            )
              (this._pt = new it(
                this._pt,
                g,
                "scaleY",
                g.scaleY,
                (y ? Wt(g.scaleY, y + _) : _) - g.scaleY || 0,
                bi
              )),
                (this._pt.u = 0),
                s.push("scaleY", h),
                (h += "X");
            else if (h === "transformOrigin") {
              T.push(ot, 0, a[ot]),
                (l = Rs(l)),
                g.svg
                  ? Ci(t, l, 0, P, 0, this)
                  : ((x = parseFloat(l.split(" ")[2]) || 0),
                    x !== g.zOrigin && Dt(this, g, "zOrigin", g.zOrigin, x),
                    Dt(this, a, h, Ne(f), Ne(l)));
              continue;
            } else if (h === "svgOrigin") {
              Ci(t, l, 1, P, 0, this);
              continue;
            } else if (h in Ir) {
              zs(this, g, h, c, y ? Wt(c, y + l) : l);
              continue;
            } else if (h === "smoothOrigin") {
              Dt(this, g, "smooth", g.smooth, l);
              continue;
            } else if (h === "force3D") {
              g[h] = l;
              continue;
            } else if (h === "transform") {
              Fs(this, l, t);
              continue;
            }
          } else h in a || (h = ee(h) || h);
          if (v || ((_ || _ === 0) && (c || c === 0) && !ps.test(l) && h in a))
            (m = (f + "").substr((c + "").length)),
              _ || (_ = 0),
              (x = H(l) || (h in at.units ? at.units[h] : m)),
              m !== x && (c = Ft(t, h, f, x)),
              (this._pt = new it(
                this._pt,
                v ? g : a,
                h,
                c,
                (y ? Wt(c, y + _) : _) - c,
                !v && (x === "px" || h === "zIndex") && e.autoRound !== !1
                  ? xs
                  : bi
              )),
              (this._pt.u = x || 0),
              v && w !== l
                ? ((this._pt.b = f), (this._pt.e = w), (this._pt.r = ys))
                : m !== x && x !== "%" && ((this._pt.b = f), (this._pt.r = gs));
          else if (h in a) Ms.call(this, t, h, f, y ? y + l : l);
          else if (h in t) this.add(t, h, f || t[h], y ? y + l : l, r, n);
          else if (h !== "parseTransform") {
            Re(h, l);
            continue;
          }
          v ||
            (h in a
              ? T.push(h, 0, a[h])
              : typeof t[h] == "function"
              ? T.push(h, 2, t[h]())
              : T.push(h, 1, f || t[h])),
            s.push(h);
        }
      }
    S && Ti(this);
  },
  render: function (t, e) {
    if (e.tween._time || !ki())
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    else e.styles.revert();
  },
  get: Pt,
  aliases: vt,
  getSetter: function (t, e, i) {
    var r = vt[e];
    return (
      r && r.indexOf(",") < 0 && (e = r),
      e in Ct && e !== ot && (t._gsap.x || Pt(t, "x"))
        ? i && wr === i
          ? e === "scale"
            ? bs
            : ws
          : (wr = i || {}) && (e === "scale" ? Ss : Ps)
        : t.style && !Me(t.style[e])
        ? vs
        : ~e.indexOf("-")
        ? Ts
        : ze(t, e)
    );
  },
  core: { _removeProperty: zt, _getMatrix: Ri },
};
J.utils.checkPrefix = ee;
J.core.getStyleSaver = zr;
(function (o, t, e, i) {
  var r = et(o + "," + t + "," + e, function (n) {
    Ct[n] = 1;
  });
  et(t, function (n) {
    (at.units[n] = "deg"), (Ir[n] = 1);
  }),
    (vt[r[13]] = o + "," + t),
    et(i, function (n) {
      var s = n.split(":");
      vt[s[1]] = r[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
et(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (o) {
    at.units[o] = "px";
  }
);
J.registerPlugin(Ai);
var Le = J.registerPlugin(Ai) || J,
  Qs = Le.core.Tween;
var ge,
  ye,
  Vr = typeof Symbol == "function" ? Symbol() : "_split",
  Di,
  Ns = () => Di || Be.register(window.gsap),
  Ur = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter() : 0,
  xe = (o) =>
    o
      ? typeof o == "string"
        ? xe(document.querySelectorAll(o))
        : "length" in o
        ? Array.from(o).reduce(
            (t, e) => (typeof e == "string" ? t.push(...xe(e)) : t.push(e), t),
            []
          )
        : [o]
      : [],
  Yr = (o) => xe(o).filter((t) => t && t.nodeType === 1),
  zi = [],
  Ei = function () {},
  Ls = { add: (o) => o() },
  Is = /\s+/g,
  Xr = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  Ie = { left: 0, top: 0, width: 0, height: 0 },
  Bs = (o, t) => {
    for (; ++t < o.length && o[t] === Ie; );
    return o[t] || Ie;
  },
  qr = ({ element: o, html: t, ariaL: e, ariaH: i }) => {
    (o.innerHTML = t),
      e ? o.setAttribute("aria-label", e) : o.removeAttribute("aria-label"),
      i ? o.setAttribute("aria-hidden", i) : o.removeAttribute("aria-hidden");
  },
  Gr = (o, t) => {
    if (t) {
      let e = new Set(o.join("").match(t) || zi),
        i = o.length,
        r,
        n,
        s,
        a;
      if (e.size)
        for (; --i > -1; ) {
          n = o[i];
          for (s of e)
            if (s.startsWith(n) && s.length > n.length) {
              for (
                r = 0, a = n;
                s.startsWith((a += o[i + ++r])) && a.length < s.length;

              );
              if (r && a.length === s.length) {
                (o[i] = s), o.splice(i + 1, r);
                break;
              }
            }
        }
    }
    return o;
  },
  jr = (o) =>
    window.getComputedStyle(o).display === "inline" &&
    (o.style.display = "inline-block"),
  ie = (o, t, e) =>
    t.insertBefore(typeof o == "string" ? document.createTextNode(o) : o, e),
  Fi = (o, t, e) => {
    let i = t[o + "sClass"] || "",
      { tag: r = "div", aria: n = "auto", propIndex: s = !1 } = t,
      a = o === "line" ? "block" : "inline-block",
      u = i.indexOf("++") > -1,
      f = (l) => {
        let _ = document.createElement(r),
          c = e.length + 1;
        return (
          i && (_.className = i + (u ? " " + i + c : "")),
          s && _.style.setProperty("--" + o, c + ""),
          n !== "none" && _.setAttribute("aria-hidden", "true"),
          r !== "span" &&
            ((_.style.position = "relative"), (_.style.display = a)),
          (_.textContent = l),
          e.push(_),
          _
        );
      };
    return u && (i = i.replace("++", "")), (f.collection = e), f;
  },
  Ws = (o, t, e, i) => {
    let r = Fi("line", e, i),
      n = window.getComputedStyle(o).textAlign || "left";
    return (s, a) => {
      let u = r("");
      for (u.style.textAlign = n, o.insertBefore(u, t[s]); s < a; s++)
        u.appendChild(t[s]);
      u.normalize();
    };
  },
  Qr = (o, t, e, i, r, n, s, a, u, f) => {
    var l;
    let _ = Array.from(o.childNodes),
      c = 0,
      { wordDelimiter: d, reduceWhiteSpace: p = !0, prepareText: h } = t,
      m = o.getBoundingClientRect(),
      x = m,
      y = !p && window.getComputedStyle(o).whiteSpace.substring(0, 3) === "pre",
      v = 0,
      b = e.collection,
      g,
      P,
      S,
      T,
      w,
      C,
      z,
      O,
      k,
      R,
      D,
      E,
      A,
      G,
      B,
      L,
      ut,
      j;
    for (
      typeof d == "object"
        ? ((S = d.delimiter || d), (P = d.replaceWith || ""))
        : (P = d === "" ? "" : d || " "),
        g = P !== " ";
      c < _.length;
      c++
    )
      if (((T = _[c]), T.nodeType === 3)) {
        for (
          B = T.textContent || "",
            p
              ? (B = B.replace(Is, " "))
              : y &&
                (B = B.replace(
                  /\n/g,
                  P +
                    `
`
                )),
            h && (B = h(B, o)),
            T.textContent = B,
            w = P || S ? B.split(S || P) : B.match(a) || zi,
            ut = w[w.length - 1],
            O = g ? ut.slice(-1) === " " : !ut,
            ut || w.pop(),
            x = m,
            z = g ? w[0].charAt(0) === " " : !w[0],
            z && ie(" ", o, T),
            w[0] || w.shift(),
            Gr(w, u),
            (n && f) || (T.textContent = ""),
            k = 1;
          k <= w.length;
          k++
        )
          if (
            ((L = w[k - 1]),
            !p &&
              y &&
              L.charAt(0) ===
                `
` &&
              ((l = T.previousSibling) == null || l.remove(),
              ie(document.createElement("br"), o, T),
              (L = L.slice(1))),
            !p && L === "")
          )
            ie(P, o, T);
          else if (L === " ") o.insertBefore(document.createTextNode(" "), T);
          else {
            if (
              (g && L.charAt(0) === " " && ie(" ", o, T),
              v && k === 1 && !z && b.indexOf(v.parentNode) > -1
                ? ((C = b[b.length - 1]),
                  C.appendChild(document.createTextNode(i ? "" : L)))
                : ((C = e(i ? "" : L)),
                  ie(C, o, T),
                  v && k === 1 && !z && C.insertBefore(v, C.firstChild)),
              i)
            )
              for (
                D = Ur
                  ? Gr(
                      [...Ur.segment(L)].map((Tt) => Tt.segment),
                      u
                    )
                  : L.match(a) || zi,
                  j = 0;
                j < D.length;
                j++
              )
                C.appendChild(
                  D[j] === " " ? document.createTextNode(" ") : i(D[j])
                );
            if (n && f) {
              if (
                ((B = T.textContent = B.substring(L.length + 1, B.length)),
                (R = C.getBoundingClientRect()),
                R.top > x.top && R.left <= x.left)
              ) {
                for (E = o.cloneNode(), A = o.childNodes[0]; A && A !== C; )
                  (G = A), (A = A.nextSibling), E.appendChild(G);
                o.parentNode.insertBefore(E, o), r && jr(E);
              }
              x = R;
            }
            (k < w.length || O) &&
              ie(
                k >= w.length ? " " : g && L.slice(-1) === " " ? " " + P : P,
                o,
                T
              );
          }
        o.removeChild(T), (v = 0);
      } else
        T.nodeType === 1 &&
          (s && s.indexOf(T) > -1
            ? (b.indexOf(T.previousSibling) > -1 &&
                b[b.length - 1].appendChild(T),
              (v = T))
            : (Qr(T, t, e, i, r, n, s, a, u, !0), (v = 0)),
          r && jr(T));
  },
  Kr = class Hr {
    constructor(t, e) {
      (this.isSplit = !1),
        Ns(),
        (this.elements = Yr(t)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = e),
        this.elements.forEach((s) => {
          var a;
          e.overwrite !== !1 &&
            ((a = s[Vr]) == null ||
              a._data.orig.filter(({ element: u }) => u === s).forEach(qr)),
            (s[Vr] = this);
        }),
        (this._split = () => this.isSplit && this.split(this.vars));
      let i = [],
        r,
        n = () => {
          let s = i.length,
            a;
          for (; s--; ) {
            a = i[s];
            let u = a.element.offsetWidth;
            if (u !== a.width) {
              (a.width = u), this._split();
              return;
            }
          }
        };
      (this._data = {
        orig: i,
        obs:
          typeof ResizeObserver < "u" &&
          new ResizeObserver(() => {
            clearTimeout(r), (r = setTimeout(n, 200));
          }),
      }),
        Ei(this),
        this.split(e);
    }
    split(t) {
      return (
        (this._ctx || Ls).add(() => {
          this.isSplit && this.revert(), (this.vars = t = t || this.vars || {});
          let {
              type: e = "chars,words,lines",
              aria: i = "auto",
              deepSlice: r = !0,
              smartWrap: n,
              onSplit: s,
              autoSplit: a = !1,
              specialChars: u,
              mask: f,
            } = this.vars,
            l = e.indexOf("lines") > -1,
            _ = e.indexOf("chars") > -1,
            c = e.indexOf("words") > -1,
            d = _ && !c && !l,
            p =
              u &&
              ("push" in u ? new RegExp("(?:" + u.join("|") + ")", "gu") : u),
            h = p ? new RegExp(p.source + "|" + Xr.source, "gu") : Xr,
            m = !!t.ignore && Yr(t.ignore),
            { orig: x, animTime: y, obs: v } = this._data,
            b;
          (_ || c || l) &&
            (this.elements.forEach((g, P) => {
              (x[P] = {
                element: g,
                html: g.innerHTML,
                ariaL: g.getAttribute("aria-label"),
                ariaH: g.getAttribute("aria-hidden"),
              }),
                i === "auto"
                  ? g.setAttribute("aria-label", (g.textContent || "").trim())
                  : i === "hidden" && g.setAttribute("aria-hidden", "true");
              let S = [],
                T = [],
                w = [],
                C = _ ? Fi("char", t, S) : null,
                z = Fi("word", t, T),
                O,
                k,
                R,
                D;
              if ((Qr(g, t, z, C, d, r && (l || d), m, h, p, !1), l)) {
                let E = xe(g.childNodes),
                  A = Ws(g, E, t, w),
                  G,
                  B = [],
                  L = 0,
                  ut = E.map((tt) =>
                    tt.nodeType === 1 ? tt.getBoundingClientRect() : Ie
                  ),
                  j = Ie,
                  Tt;
                for (O = 0; O < E.length; O++)
                  (G = E[O]),
                    G.nodeType === 1 &&
                      (G.nodeName === "BR"
                        ? ((!O || E[O - 1].nodeName !== "BR") &&
                            (B.push(G), A(L, O + 1)),
                          (L = O + 1),
                          (j = Bs(ut, O)))
                        : ((Tt = ut[O]),
                          O &&
                            Tt.top > j.top &&
                            Tt.left < j.left + j.width - 1 &&
                            (A(L, O), (L = O)),
                          (j = Tt)));
                L < O && A(L, O),
                  B.forEach((tt) => {
                    var mt;
                    return (mt = tt.parentNode) == null
                      ? void 0
                      : mt.removeChild(tt);
                  });
              }
              if (!c) {
                for (O = 0; O < T.length; O++)
                  if (
                    ((k = T[O]),
                    _ || !k.nextSibling || k.nextSibling.nodeType !== 3)
                  )
                    if (n && !l) {
                      for (
                        R = document.createElement("span"),
                          R.style.whiteSpace = "nowrap";
                        k.firstChild;

                      )
                        R.appendChild(k.firstChild);
                      k.replaceWith(R);
                    } else k.replaceWith(...k.childNodes);
                  else
                    (D = k.nextSibling),
                      D &&
                        D.nodeType === 3 &&
                        ((D.textContent =
                          (k.textContent || "") + (D.textContent || "")),
                        k.remove());
                (T.length = 0), g.normalize();
              }
              this.lines.push(...w),
                this.words.push(...T),
                this.chars.push(...S);
            }),
            f &&
              this[f] &&
              this.masks.push(
                ...this[f].map((g) => {
                  let P = g.cloneNode();
                  return (
                    g.replaceWith(P),
                    P.appendChild(g),
                    g.className &&
                      (P.className = g.className
                        .trim()
                        .split(" ")
                        .map((S) => S + "-mask")
                        .join(" ")),
                    (P.style.overflow = "clip"),
                    P
                  );
                })
              )),
            (this.isSplit = !0),
            ye && l && a && ye.addEventListener("loadingdone", this._split),
            (b = s && s(this)) &&
              b.totalTime &&
              (this._data.anim = y ? b.totalTime(y) : b),
            l &&
              a &&
              this.elements.forEach((g, P) => {
                (x[P].width = g.offsetWidth), v && v.observe(g);
              });
        }),
        this
      );
    }
    kill() {
      let { obs: t } = this._data;
      t && t.disconnect(), ye?.removeEventListener("loadingdone", this._split);
    }
    revert() {
      var t, e;
      if (this.isSplit) {
        let { orig: i, anim: r } = this._data;
        this.kill(),
          i.forEach(qr),
          (this.chars.length =
            this.words.length =
            this.lines.length =
            i.length =
            this.masks.length =
              0),
          (this.isSplit = !1),
          r && ((this._data.animTime = r.totalTime()), r.revert()),
          (e = (t = this.vars).onRevert) == null || e.call(t, this);
      }
      return this;
    }
    static create(t, e) {
      return new Hr(t, e);
    }
    static register(t) {
      (ge = ge || t || window.gsap),
        ge && ((xe = ge.utils.toArray), (Ei = ge.core.context || Ei)),
        !Di && window.innerWidth > 0 && ((ye = document.fonts), (Di = !0));
    }
  };
Kr.version = "3.15.0";
var Be = Kr;
typeof window < "u" &&
  ((window.gsap = Le), (window.SplitText = Be), Le.registerPlugin(Be));
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   *)
*/
