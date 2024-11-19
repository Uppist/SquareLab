/** @format */

function Zc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Su = { exports: {} },
  pl = {},
  ku = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rr = Symbol.for("react.element"),
  Xc = Symbol.for("react.portal"),
  Gc = Symbol.for("react.fragment"),
  Jc = Symbol.for("react.strict_mode"),
  qc = Symbol.for("react.profiler"),
  bc = Symbol.for("react.provider"),
  ed = Symbol.for("react.context"),
  td = Symbol.for("react.forward_ref"),
  nd = Symbol.for("react.suspense"),
  rd = Symbol.for("react.memo"),
  ld = Symbol.for("react.lazy"),
  rs = Symbol.iterator;
function id(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (rs && e[rs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ju = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Eu = Object.assign,
  _u = {};
function fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _u),
    (this.updater = n || ju);
}
fn.prototype.isReactComponent = {};
fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nu() {}
Nu.prototype = fn.prototype;
function no(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _u),
    (this.updater = n || ju);
}
var ro = (no.prototype = new Nu());
ro.constructor = no;
Eu(ro, fn.prototype);
ro.isPureReactComponent = !0;
var ls = Array.isArray,
  Pu = Object.prototype.hasOwnProperty,
  lo = { current: null },
  Lu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ru(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Pu.call(t, r) && !Lu.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: rr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: lo.current,
  };
}
function od(e, t) {
  return {
    $$typeof: rr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function io(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rr;
}
function sd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var is = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sd("" + e.key)
    : t.toString(36);
}
function Pr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case rr:
          case Xc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Ml(o, 0) : r),
      ls(l)
        ? ((n = ""),
          e != null && (n = e.replace(is, "$&/") + "/"),
          Pr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (io(l) &&
            (l = od(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(is, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ls(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Ml(i, s);
      o += Pr(i, t, n, u, l);
    }
  else if (((u = id(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Ml(i, s++)), (o += Pr(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Pr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function ud(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Lr = { transition: null },
  ad = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Lr,
    ReactCurrentOwner: lo,
  };
function Tu() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!io(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = fn;
z.Fragment = Gc;
z.Profiler = qc;
z.PureComponent = no;
z.StrictMode = Jc;
z.Suspense = nd;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ad;
z.act = Tu;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Eu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = lo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Pu.call(t, u) &&
        !Lu.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: rr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: ed,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Ru;
z.createFactory = function (e) {
  var t = Ru.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: td, render: e };
};
z.isValidElement = io;
z.lazy = function (e) {
  return { $$typeof: ld, _payload: { _status: -1, _result: e }, _init: ud };
};
z.memo = function (e, t) {
  return { $$typeof: rd, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
z.unstable_act = Tu;
z.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ce.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
z.useId = function () {
  return ce.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ce.current.useRef(e);
};
z.useState = function (e) {
  return ce.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ce.current.useTransition();
};
z.version = "18.3.1";
ku.exports = z;
var k = ku.exports;
const cd = Yc(k),
  dd = Zc({ __proto__: null, default: cd }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd = k,
  pd = Symbol.for("react.element"),
  hd = Symbol.for("react.fragment"),
  md = Object.prototype.hasOwnProperty,
  vd = fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gd = { key: !0, ref: !0, __self: !0, __source: !0 };
function zu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) md.call(t, r) && !gd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: pd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: vd.current,
  };
}
pl.Fragment = hd;
pl.jsx = zu;
pl.jsxs = zu;
Su.exports = pl;
var a = Su.exports,
  Ou = { exports: {} },
  Ce = {},
  Mu = { exports: {} },
  Fu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, R) {
    var T = _.length;
    _.push(R);
    e: for (; 0 < T; ) {
      var Q = (T - 1) >>> 1,
        J = _[Q];
      if (0 < l(J, R)) (_[Q] = R), (_[T] = J), (T = Q);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var R = _[0],
      T = _.pop();
    if (T !== R) {
      _[0] = T;
      e: for (var Q = 0, J = _.length, ar = J >>> 1; Q < ar; ) {
        var xt = 2 * (Q + 1) - 1,
          Ol = _[xt],
          Ct = xt + 1,
          cr = _[Ct];
        if (0 > l(Ol, T))
          Ct < J && 0 > l(cr, Ol)
            ? ((_[Q] = cr), (_[Ct] = T), (Q = Ct))
            : ((_[Q] = Ol), (_[xt] = T), (Q = xt));
        else if (Ct < J && 0 > l(cr, T)) (_[Q] = cr), (_[Ct] = T), (Q = Ct);
        else break e;
      }
    }
    return R;
  }
  function l(_, R) {
    var T = _.sortIndex - R.sortIndex;
    return T !== 0 ? T : _.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var u = [],
    c = [],
    m = 1,
    h = null,
    v = 3,
    y = !1,
    w = !1,
    x = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var R = n(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= _)
        r(c), (R.sortIndex = R.expirationTime), t(u, R);
      else break;
      R = n(c);
    }
  }
  function g(_) {
    if (((x = !1), p(_), !w))
      if (n(u) !== null) (w = !0), Tl(S);
      else {
        var R = n(c);
        R !== null && zl(g, R.startTime - _);
      }
  }
  function S(_, R) {
    (w = !1), x && ((x = !1), f(L), (L = -1)), (y = !0);
    var T = v;
    try {
      for (
        p(R), h = n(u);
        h !== null && (!(h.expirationTime > R) || (_ && !Le()));

      ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          (h.callback = null), (v = h.priorityLevel);
          var J = Q(h.expirationTime <= R);
          (R = e.unstable_now()),
            typeof J == "function" ? (h.callback = J) : h === n(u) && r(u),
            p(R);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var ar = !0;
      else {
        var xt = n(c);
        xt !== null && zl(g, xt.startTime - R), (ar = !1);
      }
      return ar;
    } finally {
      (h = null), (v = T), (y = !1);
    }
  }
  var N = !1,
    P = null,
    L = -1,
    W = 5,
    O = -1;
  function Le() {
    return !(e.unstable_now() - O < W);
  }
  function mn() {
    if (P !== null) {
      var _ = e.unstable_now();
      O = _;
      var R = !0;
      try {
        R = P(!0, _);
      } finally {
        R ? vn() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var vn;
  if (typeof d == "function")
    vn = function () {
      d(mn);
    };
  else if (typeof MessageChannel < "u") {
    var ns = new MessageChannel(),
      Kc = ns.port2;
    (ns.port1.onmessage = mn),
      (vn = function () {
        Kc.postMessage(null);
      });
  } else
    vn = function () {
      j(mn, 0);
    };
  function Tl(_) {
    (P = _), N || ((N = !0), vn());
  }
  function zl(_, R) {
    L = j(function () {
      _(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), Tl(S));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (_) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = v;
      }
      var T = v;
      v = R;
      try {
        return _();
      } finally {
        v = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, R) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var T = v;
      v = _;
      try {
        return R();
      } finally {
        v = T;
      }
    }),
    (e.unstable_scheduleCallback = function (_, R, T) {
      var Q = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? Q + T : Q))
          : (T = Q),
        _)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = T + J),
        (_ = {
          id: m++,
          callback: R,
          priorityLevel: _,
          startTime: T,
          expirationTime: J,
          sortIndex: -1,
        }),
        T > Q
          ? ((_.sortIndex = T),
            t(c, _),
            n(u) === null &&
              _ === n(c) &&
              (x ? (f(L), (L = -1)) : (x = !0), zl(g, T - Q)))
          : ((_.sortIndex = J), t(u, _), w || y || ((w = !0), Tl(S))),
        _
      );
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (_) {
      var R = v;
      return function () {
        var T = v;
        v = R;
        try {
          return _.apply(this, arguments);
        } finally {
          v = T;
        }
      };
    });
})(Fu);
Mu.exports = Fu;
var yd = Mu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd = k,
  xe = yd;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Iu = new Set(),
  Un = {};
function Mt(e, t) {
  ln(e, t), ln(e + "Capture", t);
}
function ln(e, t) {
  for (Un[e] = t, e = 0; e < t.length; e++) Iu.add(t[e]);
}
var Ze = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  si = Object.prototype.hasOwnProperty,
  xd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  os = {},
  ss = {};
function Cd(e) {
  return si.call(ss, e)
    ? !0
    : si.call(os, e)
    ? !1
    : xd.test(e)
    ? (ss[e] = !0)
    : ((os[e] = !0), !1);
}
function Sd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kd(e, t, n, r) {
  if (t === null || typeof t > "u" || Sd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function de(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oo = /[\-:]([a-z])/g;
function so(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(oo, so);
    ne[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(oo, so);
    ne[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(oo, so);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (kd(t, n, l, r) && (n = null),
    r || l === null
      ? Cd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fr = Symbol.for("react.element"),
  Bt = Symbol.for("react.portal"),
  At = Symbol.for("react.fragment"),
  ao = Symbol.for("react.strict_mode"),
  ui = Symbol.for("react.profiler"),
  Du = Symbol.for("react.provider"),
  Uu = Symbol.for("react.context"),
  co = Symbol.for("react.forward_ref"),
  ai = Symbol.for("react.suspense"),
  ci = Symbol.for("react.suspense_list"),
  fo = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  Vu = Symbol.for("react.offscreen"),
  us = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (us && e[us]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Fl;
function En(e) {
  if (Fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fl = (t && t[1]) || "";
    }
  return (
    `
` +
    Fl +
    e
  );
}
var Il = !1;
function Dl(e, t) {
  if (!e || Il) return "";
  Il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (Il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function jd(e) {
  switch (e.tag) {
    case 5:
      return En(e.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Dl(e.type, !1)), e;
    case 11:
      return (e = Dl(e.type.render, !1)), e;
    case 1:
      return (e = Dl(e.type, !0)), e;
    default:
      return "";
  }
}
function di(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case At:
      return "Fragment";
    case Bt:
      return "Portal";
    case ui:
      return "Profiler";
    case ao:
      return "StrictMode";
    case ai:
      return "Suspense";
    case ci:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Uu:
        return (e.displayName || "Context") + ".Consumer";
      case Du:
        return (e._context.displayName || "Context") + ".Provider";
      case co:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fo:
        return (
          (t = e.displayName || null), t !== null ? t : di(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return di(e(t));
        } catch {}
    }
  return null;
}
function Ed(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return di(t);
    case 8:
      return t === ao ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function _d(e) {
  var t = Bu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function pr(e) {
  e._valueTracker || (e._valueTracker = _d(e));
}
function Au(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Bu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ar(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fi(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function as(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Hu(e, t) {
  (t = t.checked), t != null && uo(e, "checked", t, !1);
}
function pi(e, t) {
  Hu(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? hi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hi(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function cs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function hi(e, t, n) {
  (t !== "number" || Ar(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ds(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function $u(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function fs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Wu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var hr,
  Qu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        hr = hr || document.createElement("div"),
          hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ln = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Nd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ln).forEach(function (e) {
  Nd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ln[t] = Ln[e]);
  });
});
function Ku(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ln.hasOwnProperty(e) && Ln[e])
    ? ("" + t).trim()
    : t + "px";
}
function Zu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ku(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Pd = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function gi(e, t) {
  if (t) {
    if (Pd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function yi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wi = null;
function po(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xi = null,
  bt = null,
  en = null;
function ps(e) {
  if ((e = or(e))) {
    if (typeof xi != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = yl(t)), xi(e.stateNode, e.type, t));
  }
}
function Yu(e) {
  bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function Xu() {
  if (bt) {
    var e = bt,
      t = en;
    if (((en = bt = null), ps(e), t)) for (e = 0; e < t.length; e++) ps(t[e]);
  }
}
function Gu(e, t) {
  return e(t);
}
function Ju() {}
var Ul = !1;
function qu(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Gu(e, t, n);
  } finally {
    (Ul = !1), (bt !== null || en !== null) && (Ju(), Xu());
  }
}
function Bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Ci = !1;
if (Ze)
  try {
    var yn = {};
    Object.defineProperty(yn, "passive", {
      get: function () {
        Ci = !0;
      },
    }),
      window.addEventListener("test", yn, yn),
      window.removeEventListener("test", yn, yn);
  } catch {
    Ci = !1;
  }
function Ld(e, t, n, r, l, i, o, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Rn = !1,
  Hr = null,
  $r = !1,
  Si = null,
  Rd = {
    onError: function (e) {
      (Rn = !0), (Hr = e);
    },
  };
function Td(e, t, n, r, l, i, o, s, u) {
  (Rn = !1), (Hr = null), Ld.apply(Rd, arguments);
}
function zd(e, t, n, r, l, i, o, s, u) {
  if ((Td.apply(this, arguments), Rn)) {
    if (Rn) {
      var c = Hr;
      (Rn = !1), (Hr = null);
    } else throw Error(C(198));
    $r || (($r = !0), (Si = c));
  }
}
function Ft(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function bu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function hs(e) {
  if (Ft(e) !== e) throw Error(C(188));
}
function Od(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return hs(l), e;
        if (i === r) return hs(l), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function ea(e) {
  return (e = Od(e)), e !== null ? ta(e) : null;
}
function ta(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ta(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var na = xe.unstable_scheduleCallback,
  ms = xe.unstable_cancelCallback,
  Md = xe.unstable_shouldYield,
  Fd = xe.unstable_requestPaint,
  K = xe.unstable_now,
  Id = xe.unstable_getCurrentPriorityLevel,
  ho = xe.unstable_ImmediatePriority,
  ra = xe.unstable_UserBlockingPriority,
  Wr = xe.unstable_NormalPriority,
  Dd = xe.unstable_LowPriority,
  la = xe.unstable_IdlePriority,
  hl = null,
  Be = null;
function Ud(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Ad,
  Vd = Math.log,
  Bd = Math.LN2;
function Ad(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vd(e) / Bd) | 0)) | 0;
}
var mr = 64,
  vr = 4194304;
function Nn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Qr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = Nn(s)) : ((i &= o), i !== 0 && (r = Nn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Nn(o)) : i !== 0 && (r = Nn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Hd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $d(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Me(i),
      s = 1 << o,
      u = l[o];
    u === -1
      ? (!(s & n) || s & r) && (l[o] = Hd(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ki(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ia() {
  var e = mr;
  return (mr <<= 1), !(mr & 4194240) && (mr = 64), e;
}
function Vl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function Wd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function mo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function oa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sa,
  vo,
  ua,
  aa,
  ca,
  ji = !1,
  gr = [],
  ot = null,
  st = null,
  ut = null,
  An = new Map(),
  Hn = new Map(),
  tt = [],
  Qd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function vs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function wn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = or(t)), t !== null && vo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Kd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = wn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (st = wn(st, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = wn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, wn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Hn.set(i, wn(Hn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function da(e) {
  var t = jt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bu(n)), t !== null)) {
          (e.blockedOn = t),
            ca(e.priority, function () {
              ua(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ei(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (wi = r), n.target.dispatchEvent(r), (wi = null);
    } else return (t = or(n)), t !== null && vo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function gs(e, t, n) {
  Rr(e) && n.delete(t);
}
function Zd() {
  (ji = !1),
    ot !== null && Rr(ot) && (ot = null),
    st !== null && Rr(st) && (st = null),
    ut !== null && Rr(ut) && (ut = null),
    An.forEach(gs),
    Hn.forEach(gs);
}
function xn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ji ||
      ((ji = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Zd)));
}
function $n(e) {
  function t(l) {
    return xn(l, e);
  }
  if (0 < gr.length) {
    xn(gr[0], e);
    for (var n = 1; n < gr.length; n++) {
      var r = gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && xn(ot, e),
      st !== null && xn(st, e),
      ut !== null && xn(ut, e),
      An.forEach(t),
      Hn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    da(n), n.blockedOn === null && tt.shift();
}
var tn = Je.ReactCurrentBatchConfig,
  Kr = !0;
function Yd(e, t, n, r) {
  var l = F,
    i = tn.transition;
  tn.transition = null;
  try {
    (F = 1), go(e, t, n, r);
  } finally {
    (F = l), (tn.transition = i);
  }
}
function Xd(e, t, n, r) {
  var l = F,
    i = tn.transition;
  tn.transition = null;
  try {
    (F = 4), go(e, t, n, r);
  } finally {
    (F = l), (tn.transition = i);
  }
}
function go(e, t, n, r) {
  if (Kr) {
    var l = Ei(e, t, n, r);
    if (l === null) Xl(e, t, r, Zr, n), vs(e, r);
    else if (Kd(l, e, t, n, r)) r.stopPropagation();
    else if ((vs(e, r), t & 4 && -1 < Qd.indexOf(e))) {
      for (; l !== null; ) {
        var i = or(l);
        if (
          (i !== null && sa(i),
          (i = Ei(e, t, n, r)),
          i === null && Xl(e, t, r, Zr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var Zr = null;
function Ei(e, t, n, r) {
  if (((Zr = null), (e = po(r)), (e = jt(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zr = e), null;
}
function fa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Id()) {
        case ho:
          return 1;
        case ra:
          return 4;
        case Wr:
        case Dd:
          return 16;
        case la:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  yo = null,
  Tr = null;
function pa() {
  if (Tr) return Tr;
  var e,
    t = yo,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Tr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yr() {
  return !0;
}
function ys() {
  return !1;
}
function Se(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yr
        : ys),
      (this.isPropagationStopped = ys),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yr));
      },
      persist: function () {},
      isPersistent: yr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wo = Se(pn),
  ir = H({}, pn, { view: 0, detail: 0 }),
  Gd = Se(ir),
  Bl,
  Al,
  Cn,
  ml = H({}, ir, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Cn &&
            (Cn && e.type === "mousemove"
              ? ((Bl = e.screenX - Cn.screenX), (Al = e.screenY - Cn.screenY))
              : (Al = Bl = 0),
            (Cn = e)),
          Bl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Al;
    },
  }),
  ws = Se(ml),
  Jd = H({}, ml, { dataTransfer: 0 }),
  qd = Se(Jd),
  bd = H({}, ir, { relatedTarget: 0 }),
  Hl = Se(bd),
  ef = H({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tf = Se(ef),
  nf = H({}, pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rf = Se(nf),
  lf = H({}, pn, { data: 0 }),
  xs = Se(lf),
  of = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  uf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function af(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = uf[e]) ? !!t[e] : !1;
}
function xo() {
  return af;
}
var cf = H({}, ir, {
    key: function (e) {
      if (e.key) {
        var t = of[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xo,
    charCode: function (e) {
      return e.type === "keypress" ? zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  df = Se(cf),
  ff = H({}, ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cs = Se(ff),
  pf = H({}, ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xo,
  }),
  hf = Se(pf),
  mf = H({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vf = Se(mf),
  gf = H({}, ml, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yf = Se(gf),
  wf = [9, 13, 27, 32],
  Co = Ze && "CompositionEvent" in window,
  Tn = null;
Ze && "documentMode" in document && (Tn = document.documentMode);
var xf = Ze && "TextEvent" in window && !Tn,
  ha = Ze && (!Co || (Tn && 8 < Tn && 11 >= Tn)),
  Ss = " ",
  ks = !1;
function ma(e, t) {
  switch (e) {
    case "keyup":
      return wf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function va(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ht = !1;
function Cf(e, t) {
  switch (e) {
    case "compositionend":
      return va(t);
    case "keypress":
      return t.which !== 32 ? null : ((ks = !0), Ss);
    case "textInput":
      return (e = t.data), e === Ss && ks ? null : e;
    default:
      return null;
  }
}
function Sf(e, t) {
  if (Ht)
    return e === "compositionend" || (!Co && ma(e, t))
      ? ((e = pa()), (Tr = yo = rt = null), (Ht = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ha && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kf[e.type] : t === "textarea";
}
function ga(e, t, n, r) {
  Yu(r),
    (t = Yr(t, "onChange")),
    0 < t.length &&
      ((n = new wo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zn = null,
  Wn = null;
function jf(e) {
  Pa(e, 0);
}
function vl(e) {
  var t = Qt(e);
  if (Au(t)) return e;
}
function Ef(e, t) {
  if (e === "change") return t;
}
var ya = !1;
if (Ze) {
  var $l;
  if (Ze) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var Es = document.createElement("div");
      Es.setAttribute("oninput", "return;"),
        (Wl = typeof Es.oninput == "function");
    }
    $l = Wl;
  } else $l = !1;
  ya = $l && (!document.documentMode || 9 < document.documentMode);
}
function _s() {
  zn && (zn.detachEvent("onpropertychange", wa), (Wn = zn = null));
}
function wa(e) {
  if (e.propertyName === "value" && vl(Wn)) {
    var t = [];
    ga(t, Wn, e, po(e)), qu(jf, t);
  }
}
function _f(e, t, n) {
  e === "focusin"
    ? (_s(), (zn = t), (Wn = n), zn.attachEvent("onpropertychange", wa))
    : e === "focusout" && _s();
}
function Nf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vl(Wn);
}
function Pf(e, t) {
  if (e === "click") return vl(t);
}
function Lf(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function Rf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : Rf;
function Qn(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!si.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function Ns(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ps(e, t) {
  var n = Ns(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ns(n);
  }
}
function xa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ca() {
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ar(e.document);
  }
  return t;
}
function So(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Tf(e) {
  var t = Ca(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && So(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Ps(n, i));
        var o = Ps(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var zf = Ze && "documentMode" in document && 11 >= document.documentMode,
  $t = null,
  _i = null,
  On = null,
  Ni = !1;
function Ls(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ni ||
    $t == null ||
    $t !== Ar(r) ||
    ((r = $t),
    "selectionStart" in r && So(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (On && Qn(On, r)) ||
      ((On = r),
      (r = Yr(_i, "onSelect")),
      0 < r.length &&
        ((t = new wo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $t))));
}
function wr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wt = {
    animationend: wr("Animation", "AnimationEnd"),
    animationiteration: wr("Animation", "AnimationIteration"),
    animationstart: wr("Animation", "AnimationStart"),
    transitionend: wr("Transition", "TransitionEnd"),
  },
  Ql = {},
  Sa = {};
Ze &&
  ((Sa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function gl(e) {
  if (Ql[e]) return Ql[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sa) return (Ql[e] = t[n]);
  return e;
}
var ka = gl("animationend"),
  ja = gl("animationiteration"),
  Ea = gl("animationstart"),
  _a = gl("transitionend"),
  Na = new Map(),
  Rs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gt(e, t) {
  Na.set(e, t), Mt(t, [e]);
}
for (var Kl = 0; Kl < Rs.length; Kl++) {
  var Zl = Rs[Kl],
    Of = Zl.toLowerCase(),
    Mf = Zl[0].toUpperCase() + Zl.slice(1);
  gt(Of, "on" + Mf);
}
gt(ka, "onAnimationEnd");
gt(ja, "onAnimationIteration");
gt(Ea, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(_a, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
Mt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Pn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ff = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));
function Ts(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), zd(r, t, void 0, e), (e.currentTarget = null);
}
function Pa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== i && l.isPropagationStopped())) break e;
          Ts(l, s, c), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          Ts(l, s, c), (i = u);
        }
    }
  }
  if ($r) throw ((e = Si), ($r = !1), (Si = null), e);
}
function D(e, t) {
  var n = t[zi];
  n === void 0 && (n = t[zi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (La(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), La(n, e, r, t);
}
var xr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[xr]) {
    (e[xr] = !0),
      Iu.forEach(function (n) {
        n !== "selectionchange" && (Ff.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xr] || ((t[xr] = !0), Yl("selectionchange", !1, t));
  }
}
function La(e, t, n, r) {
  switch (fa(t)) {
    case 1:
      var l = Yd;
      break;
    case 4:
      l = Xd;
      break;
    default:
      l = go;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ci ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = jt(s)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  qu(function () {
    var c = i,
      m = po(n),
      h = [];
    e: {
      var v = Na.get(e);
      if (v !== void 0) {
        var y = wo,
          w = e;
        switch (e) {
          case "keypress":
            if (zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = df;
            break;
          case "focusin":
            (w = "focus"), (y = Hl);
            break;
          case "focusout":
            (w = "blur"), (y = Hl);
            break;
          case "beforeblur":
          case "afterblur":
            y = Hl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = ws;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = qd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = hf;
            break;
          case ka:
          case ja:
          case Ea:
            y = tf;
            break;
          case _a:
            y = vf;
            break;
          case "scroll":
            y = Gd;
            break;
          case "wheel":
            y = yf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = rf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Cs;
        }
        var x = (t & 4) !== 0,
          j = !x && e === "scroll",
          f = x ? (v !== null ? v + "Capture" : null) : v;
        x = [];
        for (var d = c, p; d !== null; ) {
          p = d;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = Bn(d, f)), g != null && x.push(Zn(d, g, p)))),
            j)
          )
            break;
          d = d.return;
        }
        0 < x.length &&
          ((v = new y(v, w, null, n, m)), h.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          v &&
            n !== wi &&
            (w = n.relatedTarget || n.fromElement) &&
            (jt(w) || w[Ye]))
        )
          break e;
        if (
          (y || v) &&
          ((v =
            m.window === m
              ? m
              : (v = m.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = c),
              (w = w ? jt(w) : null),
              w !== null &&
                ((j = Ft(w)), w !== j || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = c)),
          y !== w)
        ) {
          if (
            ((x = ws),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Cs),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (j = y == null ? v : Qt(y)),
            (p = w == null ? v : Qt(w)),
            (v = new x(g, d + "leave", y, n, m)),
            (v.target = j),
            (v.relatedTarget = p),
            (g = null),
            jt(m) === c &&
              ((x = new x(f, d + "enter", w, n, m)),
              (x.target = p),
              (x.relatedTarget = j),
              (g = x)),
            (j = g),
            y && w)
          )
            t: {
              for (x = y, f = w, d = 0, p = x; p; p = Vt(p)) d++;
              for (p = 0, g = f; g; g = Vt(g)) p++;
              for (; 0 < d - p; ) (x = Vt(x)), d--;
              for (; 0 < p - d; ) (f = Vt(f)), p--;
              for (; d--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = Vt(x)), (f = Vt(f));
              }
              x = null;
            }
          else x = null;
          y !== null && zs(h, v, y, x, !1),
            w !== null && j !== null && zs(h, j, w, x, !0);
        }
      }
      e: {
        if (
          ((v = c ? Qt(c) : window),
          (y = v.nodeName && v.nodeName.toLowerCase()),
          y === "select" || (y === "input" && v.type === "file"))
        )
          var S = Ef;
        else if (js(v))
          if (ya) S = Lf;
          else {
            S = Nf;
            var N = _f;
          }
        else
          (y = v.nodeName) &&
            y.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (S = Pf);
        if (S && (S = S(e, c))) {
          ga(h, S, n, m);
          break e;
        }
        N && N(e, v, c),
          e === "focusout" &&
            (N = v._wrapperState) &&
            N.controlled &&
            v.type === "number" &&
            hi(v, "number", v.value);
      }
      switch (((N = c ? Qt(c) : window), e)) {
        case "focusin":
          (js(N) || N.contentEditable === "true") &&
            (($t = N), (_i = c), (On = null));
          break;
        case "focusout":
          On = _i = $t = null;
          break;
        case "mousedown":
          Ni = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ni = !1), Ls(h, n, m);
          break;
        case "selectionchange":
          if (zf) break;
        case "keydown":
        case "keyup":
          Ls(h, n, m);
      }
      var P;
      if (Co)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Ht
          ? ma(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (ha &&
          n.locale !== "ko" &&
          (Ht || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Ht && (P = pa())
            : ((rt = m),
              (yo = "value" in rt ? rt.value : rt.textContent),
              (Ht = !0))),
        (N = Yr(c, L)),
        0 < N.length &&
          ((L = new xs(L, e, null, n, m)),
          h.push({ event: L, listeners: N }),
          P ? (L.data = P) : ((P = va(n)), P !== null && (L.data = P)))),
        (P = xf ? Cf(e, n) : Sf(e, n)) &&
          ((c = Yr(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new xs("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = P)));
    }
    Pa(h, t);
  });
}
function Zn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Bn(e, n)),
      i != null && r.unshift(Zn(e, i, l)),
      (i = Bn(e, t)),
      i != null && r.push(Zn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Bn(n, i)), u != null && o.unshift(Zn(n, u, s)))
        : l || ((u = Bn(n, i)), u != null && o.push(Zn(n, u, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var If = /\r\n?/g,
  Df = /\u0000|\uFFFD/g;
function Os(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      If,
      `
`
    )
    .replace(Df, "");
}
function Cr(e, t, n) {
  if (((t = Os(t)), Os(e) !== t && n)) throw Error(C(425));
}
function Xr() {}
var Pi = null,
  Li = null;
function Ri(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ti = typeof setTimeout == "function" ? setTimeout : void 0,
  Uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ms = typeof Promise == "function" ? Promise : void 0,
  Vf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ms < "u"
      ? function (e) {
          return Ms.resolve(null).then(e).catch(Bf);
        }
      : Ti;
function Bf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Gl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), $n(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  $n(t);
}
function at(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Fs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + hn,
  Yn = "__reactProps$" + hn,
  Ye = "__reactContainer$" + hn,
  zi = "__reactEvents$" + hn,
  Af = "__reactListeners$" + hn,
  Hf = "__reactHandles$" + hn;
function jt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ve])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fs(e); e !== null; ) {
          if ((n = e[Ve])) return n;
          e = Fs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function or(e) {
  return (
    (e = e[Ve] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function yl(e) {
  return e[Yn] || null;
}
var Oi = [],
  Kt = -1;
function yt(e) {
  return { current: e };
}
function U(e) {
  0 > Kt || ((e.current = Oi[Kt]), (Oi[Kt] = null), Kt--);
}
function I(e, t) {
  Kt++, (Oi[Kt] = e.current), (e.current = t);
}
var vt = {},
  oe = yt(vt),
  he = yt(!1),
  Lt = vt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function Gr() {
  U(he), U(oe);
}
function Is(e, t, n) {
  if (oe.current !== vt) throw Error(C(168));
  I(oe, t), I(he, n);
}
function Ra(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, Ed(e) || "Unknown", l));
  return H({}, n, r);
}
function Jr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (Lt = oe.current),
    I(oe, e),
    I(he, he.current),
    !0
  );
}
function Ds(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Ra(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(he),
      U(oe),
      I(oe, e))
    : U(he),
    I(he, n);
}
var $e = null,
  wl = !1,
  Jl = !1;
function Ta(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function $f(e) {
  (wl = !0), Ta(e);
}
function wt() {
  if (!Jl && $e !== null) {
    Jl = !0;
    var e = 0,
      t = F;
    try {
      var n = $e;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (wl = !1);
    } catch (l) {
      throw ($e !== null && ($e = $e.slice(e + 1)), na(ho, wt), l);
    } finally {
      (F = t), (Jl = !1);
    }
  }
  return null;
}
var Zt = [],
  Yt = 0,
  qr = null,
  br = 0,
  ke = [],
  je = 0,
  Rt = null,
  We = 1,
  Qe = "";
function St(e, t) {
  (Zt[Yt++] = br), (Zt[Yt++] = qr), (qr = e), (br = t);
}
function za(e, t, n) {
  (ke[je++] = We), (ke[je++] = Qe), (ke[je++] = Rt), (Rt = e);
  var r = We;
  e = Qe;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Me(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (Qe = i + e);
  } else (We = (1 << i) | (n << l) | r), (Qe = e);
}
function ko(e) {
  e.return !== null && (St(e, 1), za(e, 1, 0));
}
function jo(e) {
  for (; e === qr; )
    (qr = Zt[--Yt]), (Zt[Yt] = null), (br = Zt[--Yt]), (Zt[Yt] = null);
  for (; e === Rt; )
    (Rt = ke[--je]),
      (ke[je] = null),
      (Qe = ke[--je]),
      (ke[je] = null),
      (We = ke[--je]),
      (ke[je] = null);
}
var we = null,
  ye = null,
  V = !1,
  Oe = null;
function Oa(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Us(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ye = at(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rt !== null ? { id: We, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fi(e) {
  if (V) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Us(e, t)) {
        if (Mi(e)) throw Error(C(418));
        t = at(n.nextSibling);
        var r = we;
        t && Us(e, t)
          ? Oa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (we = e));
      }
    } else {
      if (Mi(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (we = e);
    }
  }
}
function Vs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Sr(e) {
  if (e !== we) return !1;
  if (!V) return Vs(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ri(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Mi(e)) throw (Ma(), Error(C(418)));
    for (; t; ) Oa(e, t), (t = at(t.nextSibling));
  }
  if ((Vs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = at(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function Ma() {
  for (var e = ye; e; ) e = at(e.nextSibling);
}
function sn() {
  (ye = we = null), (V = !1);
}
function Eo(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Wf = Je.ReactCurrentBatchConfig;
function Sn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function kr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Bs(e) {
  var t = e._init;
  return t(e._payload);
}
function Fa(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [d]), (f.flags |= 16)) : p.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function l(f, d) {
    return (f = pt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, d, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < d ? ((f.flags |= 2), d) : p)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, p, g) {
    return d === null || d.tag !== 6
      ? ((d = li(p, f.mode, g)), (d.return = f), d)
      : ((d = l(d, p)), (d.return = f), d);
  }
  function u(f, d, p, g) {
    var S = p.type;
    return S === At
      ? m(f, d, p.props.children, g, p.key)
      : d !== null &&
        (d.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === be &&
            Bs(S) === d.type))
      ? ((g = l(d, p.props)), (g.ref = Sn(f, d, p)), (g.return = f), g)
      : ((g = Vr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = Sn(f, d, p)),
        (g.return = f),
        g);
  }
  function c(f, d, p, g) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== p.containerInfo ||
      d.stateNode.implementation !== p.implementation
      ? ((d = ii(p, f.mode, g)), (d.return = f), d)
      : ((d = l(d, p.children || [])), (d.return = f), d);
  }
  function m(f, d, p, g, S) {
    return d === null || d.tag !== 7
      ? ((d = Pt(p, f.mode, g, S)), (d.return = f), d)
      : ((d = l(d, p)), (d.return = f), d);
  }
  function h(f, d, p) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = li("" + d, f.mode, p)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fr:
          return (
            (p = Vr(d.type, d.key, d.props, null, f.mode, p)),
            (p.ref = Sn(f, null, d)),
            (p.return = f),
            p
          );
        case Bt:
          return (d = ii(d, f.mode, p)), (d.return = f), d;
        case be:
          var g = d._init;
          return h(f, g(d._payload), p);
      }
      if (_n(d) || gn(d))
        return (d = Pt(d, f.mode, p, null)), (d.return = f), d;
      kr(f, d);
    }
    return null;
  }
  function v(f, d, p, g) {
    var S = d !== null ? d.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : s(f, d, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fr:
          return p.key === S ? u(f, d, p, g) : null;
        case Bt:
          return p.key === S ? c(f, d, p, g) : null;
        case be:
          return (S = p._init), v(f, d, S(p._payload), g);
      }
      if (_n(p) || gn(p)) return S !== null ? null : m(f, d, p, g, null);
      kr(f, p);
    }
    return null;
  }
  function y(f, d, p, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), s(d, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case fr:
          return (f = f.get(g.key === null ? p : g.key) || null), u(d, f, g, S);
        case Bt:
          return (f = f.get(g.key === null ? p : g.key) || null), c(d, f, g, S);
        case be:
          var N = g._init;
          return y(f, d, p, N(g._payload), S);
      }
      if (_n(g) || gn(g)) return (f = f.get(p) || null), m(d, f, g, S, null);
      kr(d, g);
    }
    return null;
  }
  function w(f, d, p, g) {
    for (
      var S = null, N = null, P = d, L = (d = 0), W = null;
      P !== null && L < p.length;
      L++
    ) {
      P.index > L ? ((W = P), (P = null)) : (W = P.sibling);
      var O = v(f, P, p[L], g);
      if (O === null) {
        P === null && (P = W);
        break;
      }
      e && P && O.alternate === null && t(f, P),
        (d = i(O, d, L)),
        N === null ? (S = O) : (N.sibling = O),
        (N = O),
        (P = W);
    }
    if (L === p.length) return n(f, P), V && St(f, L), S;
    if (P === null) {
      for (; L < p.length; L++)
        (P = h(f, p[L], g)),
          P !== null &&
            ((d = i(P, d, L)), N === null ? (S = P) : (N.sibling = P), (N = P));
      return V && St(f, L), S;
    }
    for (P = r(f, P); L < p.length; L++)
      (W = y(P, f, L, p[L], g)),
        W !== null &&
          (e && W.alternate !== null && P.delete(W.key === null ? L : W.key),
          (d = i(W, d, L)),
          N === null ? (S = W) : (N.sibling = W),
          (N = W));
    return (
      e &&
        P.forEach(function (Le) {
          return t(f, Le);
        }),
      V && St(f, L),
      S
    );
  }
  function x(f, d, p, g) {
    var S = gn(p);
    if (typeof S != "function") throw Error(C(150));
    if (((p = S.call(p)), p == null)) throw Error(C(151));
    for (
      var N = (S = null), P = d, L = (d = 0), W = null, O = p.next();
      P !== null && !O.done;
      L++, O = p.next()
    ) {
      P.index > L ? ((W = P), (P = null)) : (W = P.sibling);
      var Le = v(f, P, O.value, g);
      if (Le === null) {
        P === null && (P = W);
        break;
      }
      e && P && Le.alternate === null && t(f, P),
        (d = i(Le, d, L)),
        N === null ? (S = Le) : (N.sibling = Le),
        (N = Le),
        (P = W);
    }
    if (O.done) return n(f, P), V && St(f, L), S;
    if (P === null) {
      for (; !O.done; L++, O = p.next())
        (O = h(f, O.value, g)),
          O !== null &&
            ((d = i(O, d, L)), N === null ? (S = O) : (N.sibling = O), (N = O));
      return V && St(f, L), S;
    }
    for (P = r(f, P); !O.done; L++, O = p.next())
      (O = y(P, f, L, O.value, g)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? L : O.key),
          (d = i(O, d, L)),
          N === null ? (S = O) : (N.sibling = O),
          (N = O));
    return (
      e &&
        P.forEach(function (mn) {
          return t(f, mn);
        }),
      V && St(f, L),
      S
    );
  }
  function j(f, d, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === At &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case fr:
          e: {
            for (var S = p.key, N = d; N !== null; ) {
              if (N.key === S) {
                if (((S = p.type), S === At)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (d = l(N, p.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  N.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === be &&
                    Bs(S) === N.type)
                ) {
                  n(f, N.sibling),
                    (d = l(N, p.props)),
                    (d.ref = Sn(f, N, p)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === At
              ? ((d = Pt(p.props.children, f.mode, g, p.key)),
                (d.return = f),
                (f = d))
              : ((g = Vr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = Sn(f, d, p)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Bt:
          e: {
            for (N = p.key; d !== null; ) {
              if (d.key === N)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === p.containerInfo &&
                  d.stateNode.implementation === p.implementation
                ) {
                  n(f, d.sibling),
                    (d = l(d, p.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = ii(p, f.mode, g)), (d.return = f), (f = d);
          }
          return o(f);
        case be:
          return (N = p._init), j(f, d, N(p._payload), g);
      }
      if (_n(p)) return w(f, d, p, g);
      if (gn(p)) return x(f, d, p, g);
      kr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = l(d, p)), (d.return = f), (f = d))
          : (n(f, d), (d = li(p, f.mode, g)), (d.return = f), (f = d)),
        o(f))
      : n(f, d);
  }
  return j;
}
var un = Fa(!0),
  Ia = Fa(!1),
  el = yt(null),
  tl = null,
  Xt = null,
  _o = null;
function No() {
  _o = Xt = tl = null;
}
function Po(e) {
  var t = el.current;
  U(el), (e._currentValue = t);
}
function Ii(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nn(e, t) {
  (tl = e),
    (_o = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (_o !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
      if (tl === null) throw Error(C(308));
      (Xt = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else Xt = Xt.next = e;
  return t;
}
var Et = null;
function Lo(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Da(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Lo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function Ro(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ua(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Lo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Or(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n);
  }
}
function As(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), o === null ? (i = c) : (o.next = c), (o = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== o &&
        (s === null ? (m.firstBaseUpdate = c) : (s.next = c),
        (m.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (m = c = u = null), (s = i);
    do {
      var v = s.lane,
        y = s.eventTime;
      if ((r & v) === v) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            x = s;
          switch (((v = t), (y = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                h = w.call(y, h, v);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (v = typeof w == "function" ? w.call(y, h, v) : w),
                v == null)
              )
                break e;
              h = H({}, h, v);
              break e;
            case 2:
              et = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [s]) : v.push(s));
      } else
        (y = {
          eventTime: y,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((c = m = y), (u = h)) : (m = m.next = y),
          (o |= v);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (v = s),
          (s = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (zt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Hs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var sr = {},
  Ae = yt(sr),
  Xn = yt(sr),
  Gn = yt(sr);
function _t(e) {
  if (e === sr) throw Error(C(174));
  return e;
}
function To(e, t) {
  switch ((I(Gn, t), I(Xn, e), I(Ae, sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vi(t, e));
  }
  U(Ae), I(Ae, t);
}
function an() {
  U(Ae), U(Xn), U(Gn);
}
function Va(e) {
  _t(Gn.current);
  var t = _t(Ae.current),
    n = vi(t, e.type);
  t !== n && (I(Xn, e), I(Ae, n));
}
function zo(e) {
  Xn.current === e && (U(Ae), U(Xn));
}
var B = yt(0);
function rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function Oo() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Mr = Je.ReactCurrentDispatcher,
  bl = Je.ReactCurrentBatchConfig,
  Tt = 0,
  A = null,
  X = null,
  q = null,
  ll = !1,
  Mn = !1,
  Jn = 0,
  Qf = 0;
function re() {
  throw Error(C(321));
}
function Mo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function Fo(e, t, n, r, l, i) {
  if (
    ((Tt = i),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mr.current = e === null || e.memoizedState === null ? Xf : Gf),
    (e = n(r, l)),
    Mn)
  ) {
    i = 0;
    do {
      if (((Mn = !1), (Jn = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (q = X = null),
        (t.updateQueue = null),
        (Mr.current = Jf),
        (e = n(r, l));
    } while (Mn);
  }
  if (
    ((Mr.current = il),
    (t = X !== null && X.next !== null),
    (Tt = 0),
    (q = X = A = null),
    (ll = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Io() {
  var e = Jn !== 0;
  return (Jn = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function Pe() {
  if (X === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? A.memoizedState : q.next;
  if (t !== null) (q = t), (X = e);
  else {
    if (e === null) throw Error(C(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      q === null ? (A.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ei(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      u = null,
      c = i;
    do {
      var m = c.lane;
      if ((Tt & m) === m)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = h), (o = r)) : (u = u.next = h),
          (A.lanes |= m),
          (zt |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? (o = r) : (u.next = s),
      Ie(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (zt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ti(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ie(i, t.memoizedState) || (pe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ba() {}
function Aa(e, t) {
  var n = A,
    r = Pe(),
    l = t(),
    i = !Ie(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Do(Wa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      bn(9, $a.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(C(349));
    Tt & 30 || Ha(n, t, l);
  }
  return l;
}
function Ha(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $a(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Qa(t) && Ka(e);
}
function Wa(e, t, n) {
  return n(function () {
    Qa(t) && Ka(e);
  });
}
function Qa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function Ka(e) {
  var t = Xe(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function $s(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yf.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function bn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Za() {
  return Pe().memoizedState;
}
function Fr(e, t, n, r) {
  var l = Ue();
  (A.flags |= e),
    (l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r));
}
function xl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && Mo(r, o.deps))) {
      l.memoizedState = bn(t, n, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = bn(1 | t, n, i, r));
}
function Ws(e, t) {
  return Fr(8390656, 8, e, t);
}
function Do(e, t) {
  return xl(2048, 8, e, t);
}
function Ya(e, t) {
  return xl(4, 2, e, t);
}
function Xa(e, t) {
  return xl(4, 4, e, t);
}
function Ga(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ja(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xl(4, 4, Ga.bind(null, t, e), n)
  );
}
function Uo() {}
function qa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ba(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ec(e, t, n) {
  return Tt & 21
    ? (Ie(n, t) || ((n = ia()), (A.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Kf(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (bl.transition = r);
  }
}
function tc() {
  return Pe().memoizedState;
}
function Zf(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nc(e))
  )
    rc(t, n);
  else if (((n = Da(e, t, n, r)), n !== null)) {
    var l = ae();
    Fe(n, e, r, l), lc(n, t, r);
  }
}
function Yf(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nc(e)) rc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Ie(s, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Lo(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Da(e, t, l, r)),
      n !== null && ((l = ae()), Fe(n, e, r, l), lc(n, t, r));
  }
}
function nc(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function rc(e, t) {
  Mn = ll = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n);
  }
}
var il = {
    readContext: Ne,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Xf = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Ws,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fr(4194308, 4, Ga.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zf.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $s,
    useDebugValue: Uo,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = $s(!1),
        t = e[0];
      return (e = Kf.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Ue();
      if (V) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(C(349));
        Tt & 30 || Ha(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ws(Wa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        bn(9, $a.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = b.identifierPrefix;
      if (V) {
        var n = Qe,
          r = We;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gf = {
    readContext: Ne,
    useCallback: qa,
    useContext: Ne,
    useEffect: Do,
    useImperativeHandle: Ja,
    useInsertionEffect: Ya,
    useLayoutEffect: Xa,
    useMemo: ba,
    useReducer: ei,
    useRef: Za,
    useState: function () {
      return ei(qn);
    },
    useDebugValue: Uo,
    useDeferredValue: function (e) {
      var t = Pe();
      return ec(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(qn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ba,
    useSyncExternalStore: Aa,
    useId: tc,
    unstable_isNewReconciler: !1,
  },
  Jf = {
    readContext: Ne,
    useCallback: qa,
    useContext: Ne,
    useEffect: Do,
    useImperativeHandle: Ja,
    useInsertionEffect: Ya,
    useLayoutEffect: Xa,
    useMemo: ba,
    useReducer: ti,
    useRef: Za,
    useState: function () {
      return ti(qn);
    },
    useDebugValue: Uo,
    useDeferredValue: function (e) {
      var t = Pe();
      return X === null ? (t.memoizedState = e) : ec(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ti(qn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ba,
    useSyncExternalStore: Aa,
    useId: tc,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Di(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = ft(e),
      i = Ke(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (Fe(t, e, l, r), Or(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = ft(e),
      i = Ke(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (Fe(t, e, l, r), Or(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = ft(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (Fe(t, e, r, n), Or(t, e, r));
  },
};
function Qs(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qn(n, r) || !Qn(l, i)
      : !0
  );
}
function ic(e, t, n) {
  var r = !1,
    l = vt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = me(t) ? Lt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? on(e, l) : vt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ks(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
}
function Ui(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ro(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = me(t) ? Lt : oe.current), (l.context = on(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Di(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Cl.enqueueReplaceState(l, l.state, null),
      nl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function cn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ni(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qf = typeof WeakMap == "function" ? WeakMap : Map;
function oc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      sl || ((sl = !0), (Xi = r)), Vi(e, t);
    }),
    n
  );
}
function sc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Vi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Vi(e, t),
          typeof r != "function" &&
            (dt === null ? (dt = new Set([this])) : dt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Zs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = f1.bind(null, e, t, n)), t.then(e, e));
}
function Ys(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var bf = Je.ReactCurrentOwner,
  pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? Ia(t, null, n, r) : un(t, e.child, n, r);
}
function Gs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    nn(t, l),
    (r = Fo(e, t, n, r, i, l)),
    (n = Io()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (V && n && ko(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function Js(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ko(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), uc(e, t, i, r, l))
      : ((e = Vr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qn), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function uc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Qn(i, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Bi(e, t, n, r, l);
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Jt, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Jt, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        I(Jt, ge),
        (ge |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Jt, ge),
      (ge |= r);
  return se(e, t, l, n), t.child;
}
function cc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bi(e, t, n, r, l) {
  var i = me(n) ? Lt : oe.current;
  return (
    (i = on(t, i)),
    nn(t, l),
    (n = Fo(e, t, n, r, i, l)),
    (r = Io()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (V && r && ko(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function qs(e, t, n, r, l) {
  if (me(n)) {
    var i = !0;
    Jr(t);
  } else i = !1;
  if ((nn(t, l), t.stateNode === null))
    Ir(e, t), ic(t, n, r), Ui(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = me(n) ? Lt : oe.current), (c = on(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && Ks(t, o, r, c)),
      (et = !1);
    var v = t.memoizedState;
    (o.state = v),
      nl(t, r, o, l),
      (u = t.memoizedState),
      s !== r || v !== u || he.current || et
        ? (typeof m == "function" && (Di(t, n, m, r), (u = t.memoizedState)),
          (s = et || Qs(t, n, s, r, v, u, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = c),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ua(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Te(t.type, s)),
      (o.props = c),
      (h = t.pendingProps),
      (v = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ne(u))
        : ((u = me(n) ? Lt : oe.current), (u = on(t, u)));
    var y = n.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== h || v !== u) && Ks(t, o, r, u)),
      (et = !1),
      (v = t.memoizedState),
      (o.state = v),
      nl(t, r, o, l);
    var w = t.memoizedState;
    s !== h || v !== w || he.current || et
      ? (typeof y == "function" && (Di(t, n, y, r), (w = t.memoizedState)),
        (c = et || Qs(t, n, c, r, v, w, u) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ai(e, t, n, r, i, l);
}
function Ai(e, t, n, r, l, i) {
  cc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Ds(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (bf.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = un(t, e.child, null, i)), (t.child = un(t, null, s, i)))
      : se(e, t, s, i),
    (t.memoizedState = r.state),
    l && Ds(t, n, !0),
    t.child
  );
}
function dc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Is(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Is(e, t.context, !1),
    To(e, t.containerInfo);
}
function bs(e, t, n, r, l) {
  return sn(), Eo(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Hi = { dehydrated: null, treeContext: null, retryLane: 0 };
function $i(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I(B, l & 1),
    e === null)
  )
    return (
      Fi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = jl(o, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = $i(n)),
              (t.memoizedState = Hi),
              e)
            : Vo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return e1(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = pt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = pt(s, i)) : ((i = Pt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? $i(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Hi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Vo(e, t) {
  return (
    (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, r) {
  return (
    r !== null && Eo(r),
    un(t, e.child, null, n),
    (e = Vo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function e1(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ni(Error(C(422)))), jr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = jl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Pt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && un(t, e.child, null, o),
        (t.child.memoizedState = $i(o)),
        (t.memoizedState = Hi),
        i);
  if (!(t.mode & 1)) return jr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(C(419))), (r = ni(i, r, void 0)), jr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), pe || s)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Fe(r, e, l, -1));
    }
    return Qo(), (r = ni(Error(C(421)))), jr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = p1.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = at(l.nextSibling)),
      (we = t),
      (V = !0),
      (Oe = null),
      e !== null &&
        ((ke[je++] = We),
        (ke[je++] = Qe),
        (ke[je++] = Rt),
        (We = e.id),
        (Qe = e.overflow),
        (Rt = t)),
      (t = Vo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function eu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ii(e.return, t, n);
}
function ri(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function pc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((se(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && eu(e, n, t);
        else if (e.tag === 19) eu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && rl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ri(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && rl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ri(t, !0, n, null, i);
        break;
      case "together":
        ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ir(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function t1(e, t, n) {
  switch (t.tag) {
    case 3:
      dc(t), sn();
      break;
    case 5:
      Va(t);
      break;
    case 1:
      me(t.type) && Jr(t);
      break;
    case 4:
      To(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(el, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fc(e, t, n)
          : (I(B, B.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      I(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ac(e, t, n);
  }
  return Ge(e, t, n);
}
var hc, Wi, mc, vc;
hc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Wi = function () {};
mc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), _t(Ae.current);
    var i = null;
    switch (n) {
      case "input":
        (l = fi(e, l)), (r = fi(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = mi(e, l)), (r = mi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xr);
    }
    gi(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Un.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                s[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Un.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && D("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
vc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function n1(e, t, n) {
  var r = t.pendingProps;
  switch ((jo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return me(t.type) && Gr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        an(),
        U(he),
        U(oe),
        Oo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Sr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (qi(Oe), (Oe = null)))),
        Wi(e, t),
        le(t),
        null
      );
    case 5:
      zo(t);
      var l = _t(Gn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return le(t), null;
        }
        if (((e = _t(Ae.current)), Sr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ve] = t), (r[Yn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Pn.length; l++) D(Pn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              as(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              ds(r, i), D("invalid", r);
          }
          gi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Un.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              pr(r), cs(r, i, !0);
              break;
            case "textarea":
              pr(r), fs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Xr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Wu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ve] = t),
            (e[Yn] = r),
            hc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = yi(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Pn.length; l++) D(Pn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                as(e, r), (l = fi(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                ds(e, r), (l = mi(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            gi(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? Zu(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Qu(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Vn(e, u)
                    : typeof u == "number" && Vn(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Un.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && D("scroll", e)
                      : u != null && uo(e, i, u, o));
              }
            switch (n) {
              case "input":
                pr(e), cs(e, r, !1);
                break;
              case "textarea":
                pr(e), fs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Xr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) vc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = _t(Gn.current)), _t(Ae.current), Sr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ve] = t),
            (i = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ve] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && ye !== null && t.mode & 1 && !(t.flags & 128))
          Ma(), sn(), (t.flags |= 98560), (i = !1);
        else if (((i = Sr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[Ve] = t;
          } else
            sn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Oe !== null && (qi(Oe), (Oe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? G === 0 && (G = 3) : Qo())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        an(), Wi(e, t), e === null && Kn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Po(t.type._context), le(t), null;
    case 17:
      return me(t.type) && Gr(), le(t), null;
    case 19:
      if ((U(B), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) kn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = rl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    kn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > dn &&
            ((t.flags |= 128), (r = !0), kn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              kn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !V)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > dn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), kn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          I(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Wo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function r1(e, t) {
  switch ((jo(t), t.tag)) {
    case 1:
      return (
        me(t.type) && Gr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        U(he),
        U(oe),
        Oo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return zo(t), null;
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        sn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return an(), null;
    case 10:
      return Po(t.type._context), null;
    case 22:
    case 23:
      return Wo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Er = !1,
  ie = !1,
  l1 = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        $(e, t, r);
      }
    else n.current = null;
}
function Qi(e, t, n) {
  try {
    n();
  } catch (r) {
    $(e, t, r);
  }
}
var tu = !1;
function i1(e, t) {
  if (((Pi = Kr), (e = Ca()), So(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            u = -1,
            c = 0,
            m = 0,
            h = e,
            v = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (l !== 0 && h.nodeType !== 3) || (s = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (u = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (v = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (v === n && ++c === l && (s = o),
                v === i && ++m === r && (u = o),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = v), (v = h.parentNode);
            }
            h = y;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Li = { focusedElem: e, selectionRange: n }, Kr = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    j = w.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Te(t.type, x),
                      j
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (g) {
          $(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (w = tu), (tu = !1), w;
}
function Fn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Qi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Sl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ki(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ve], delete t[Yn], delete t[zi], delete t[Af], delete t[Hf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function nu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), (e = e.sibling);
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yi(e, t, n), e = e.sibling; e !== null; ) Yi(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) wc(e, t, n), (n = n.sibling);
}
function wc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Gt(n, t);
    case 6:
      var r = ee,
        l = ze;
      (ee = null),
        qe(e, t, n),
        (ee = r),
        (ze = l),
        ee !== null &&
          (ze
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Gl(e.parentNode, n)
              : e.nodeType === 1 && Gl(e, n),
            $n(e))
          : Gl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = ze),
        (ee = n.stateNode.containerInfo),
        (ze = !0),
        qe(e, t, n),
        (ee = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Qi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          $(n, t, s);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), qe(e, t, n), (ie = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function ru(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new l1()),
      t.forEach(function (r) {
        var l = h1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ee = s.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = s.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = s.stateNode.containerInfo), (ze = !0);
              break e;
          }
          s = s.return;
        }
        if (ee === null) throw Error(C(160));
        wc(i, o, l), (ee = null), (ze = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        $(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xc(t, e), (t = t.sibling);
}
function xc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), De(e), r & 4)) {
        try {
          Fn(3, e, e.return), Sl(3, e);
        } catch (x) {
          $(e, e.return, x);
        }
        try {
          Fn(5, e, e.return);
        } catch (x) {
          $(e, e.return, x);
        }
      }
      break;
    case 1:
      Re(t, e), De(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        De(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Vn(l, "");
        } catch (x) {
          $(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Hu(l, i),
              yi(s, o);
            var c = yi(s, i);
            for (o = 0; o < u.length; o += 2) {
              var m = u[o],
                h = u[o + 1];
              m === "style"
                ? Zu(l, h)
                : m === "dangerouslySetInnerHTML"
                ? Qu(l, h)
                : m === "children"
                ? Vn(l, h)
                : uo(l, m, h, c);
            }
            switch (s) {
              case "input":
                pi(l, i);
                break;
              case "textarea":
                $u(l, i);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? qt(l, !!i.multiple, y, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qt(l, !!i.multiple, i.defaultValue, !0)
                      : qt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Yn] = i;
          } catch (x) {
            $(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Re(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          $(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $n(t.containerInfo);
        } catch (x) {
          $(e, e.return, x);
        }
      break;
    case 4:
      Re(t, e), De(e);
      break;
    case 13:
      Re(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ho = K())),
        r & 4 && ru(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || m), Re(t, e), (ie = c)) : Re(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (E = e, m = e.child; m !== null; ) {
            for (h = E = m; E !== null; ) {
              switch (((v = E), (y = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fn(4, v, v.return);
                  break;
                case 1:
                  Gt(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      $(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Gt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    iu(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = v), (E = y)) : iu(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Ku("display", o)));
              } catch (x) {
                $(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (x) {
                $(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), De(e), r & 4 && ru(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Vn(l, ""), (r.flags &= -33));
          var i = nu(e);
          Yi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = nu(e);
          Zi(e, s, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      $(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function o1(e, t, n) {
  (E = e), Cc(e);
}
function Cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Er;
      if (!o) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || ie;
        s = Er;
        var c = ie;
        if (((Er = o), (ie = u) && !c))
          for (E = l; E !== null; )
            (o = E),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ou(l)
                : u !== null
                ? ((u.return = o), (E = u))
                : ou(l);
        for (; i !== null; ) (E = i), Cc(i), (i = i.sibling);
        (E = l), (Er = s), (ie = c);
      }
      lu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (E = i)) : lu(e);
  }
}
function lu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Sl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Hs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hs(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && $n(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        ie || (t.flags & 512 && Ki(t));
      } catch (v) {
        $(t, t.return, v);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function iu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function ou(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sl(4, t);
          } catch (u) {
            $(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              $(t, l, u);
            }
          }
          var i = t.return;
          try {
            Ki(t);
          } catch (u) {
            $(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ki(t);
          } catch (u) {
            $(t, o, u);
          }
      }
    } catch (u) {
      $(t, t.return, u);
    }
    if (t === e) {
      E = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (E = s);
      break;
    }
    E = t.return;
  }
}
var s1 = Math.ceil,
  ol = Je.ReactCurrentDispatcher,
  Bo = Je.ReactCurrentOwner,
  _e = Je.ReactCurrentBatchConfig,
  M = 0,
  b = null,
  Z = null,
  te = 0,
  ge = 0,
  Jt = yt(0),
  G = 0,
  er = null,
  zt = 0,
  kl = 0,
  Ao = 0,
  In = null,
  fe = null,
  Ho = 0,
  dn = 1 / 0,
  He = null,
  sl = !1,
  Xi = null,
  dt = null,
  _r = !1,
  lt = null,
  ul = 0,
  Dn = 0,
  Gi = null,
  Dr = -1,
  Ur = 0;
function ae() {
  return M & 6 ? K() : Dr !== -1 ? Dr : (Dr = K());
}
function ft(e) {
  return e.mode & 1
    ? M & 2 && te !== 0
      ? te & -te
      : Wf.transition !== null
      ? (Ur === 0 && (Ur = ia()), Ur)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fa(e.type))),
        e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Dn) throw ((Dn = 0), (Gi = null), Error(C(185)));
  lr(e, n, r),
    (!(M & 2) || e !== b) &&
      (e === b && (!(M & 2) && (kl |= n), G === 4 && nt(e, te)),
      ve(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((dn = K() + 500), wl && wt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  $d(e, t);
  var r = Qr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && ms(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ms(n), t === 1))
      e.tag === 0 ? $f(su.bind(null, e)) : Ta(su.bind(null, e)),
        Vf(function () {
          !(M & 6) && wt();
        }),
        (n = null);
    else {
      switch (oa(r)) {
        case 1:
          n = ho;
          break;
        case 4:
          n = ra;
          break;
        case 16:
          n = Wr;
          break;
        case 536870912:
          n = la;
          break;
        default:
          n = Wr;
      }
      n = Lc(n, Sc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Sc(e, t) {
  if (((Dr = -1), (Ur = 0), M & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Qr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = jc();
    (b !== e || te !== t) && ((He = null), (dn = K() + 500), Nt(e, t));
    do
      try {
        c1();
        break;
      } catch (s) {
        kc(e, s);
      }
    while (!0);
    No(),
      (ol.current = i),
      (M = l),
      Z !== null ? (t = 0) : ((b = null), (te = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ki(e)), l !== 0 && ((r = l), (t = Ji(e, l)))), t === 1)
    )
      throw ((n = er), Nt(e, 0), nt(e, r), ve(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !u1(l) &&
          ((t = al(e, r)),
          t === 2 && ((i = ki(e)), i !== 0 && ((r = i), (t = Ji(e, i)))),
          t === 1))
      )
        throw ((n = er), Nt(e, 0), nt(e, r), ve(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          kt(e, fe, He);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Ho + 500 - K()), 10 < t))
          ) {
            if (Qr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ti(kt.bind(null, e, fe, He), t);
            break;
          }
          kt(e, fe, He);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Me(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * s1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ti(kt.bind(null, e, fe, He), r);
            break;
          }
          kt(e, fe, He);
          break;
        case 5:
          kt(e, fe, He);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return ve(e, K()), e.callbackNode === n ? Sc.bind(null, e) : null;
}
function Ji(e, t) {
  var n = In;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = al(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && qi(t)),
    e
  );
}
function qi(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function u1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Ao,
      t &= ~kl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function su(e) {
  if (M & 6) throw Error(C(327));
  rn();
  var t = Qr(e, 0);
  if (!(t & 1)) return ve(e, K()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ki(e);
    r !== 0 && ((t = r), (n = Ji(e, r)));
  }
  if (n === 1) throw ((n = er), Nt(e, 0), nt(e, t), ve(e, K()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, fe, He),
    ve(e, K()),
    null
  );
}
function $o(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((dn = K() + 500), wl && wt());
  }
}
function Ot(e) {
  lt !== null && lt.tag === 0 && !(M & 6) && rn();
  var t = M;
  M |= 1;
  var n = _e.transition,
    r = F;
  try {
    if (((_e.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (_e.transition = n), (M = t), !(M & 6) && wt();
  }
}
function Wo() {
  (ge = Jt.current), U(Jt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Uf(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((jo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Gr();
          break;
        case 3:
          an(), U(he), U(oe), Oo();
          break;
        case 5:
          zo(r);
          break;
        case 4:
          an();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          Po(r.type._context);
          break;
        case 22:
        case 23:
          Wo();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Z = e = pt(e.current, null)),
    (te = ge = t),
    (G = 0),
    (er = null),
    (Ao = kl = zt = 0),
    (fe = In = null),
    Et !== null)
  ) {
    for (t = 0; t < Et.length; t++)
      if (((n = Et[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Et = null;
  }
  return e;
}
function kc(e, t) {
  do {
    var n = Z;
    try {
      if ((No(), (Mr.current = il), ll)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ll = !1;
      }
      if (
        ((Tt = 0),
        (q = X = A = null),
        (Mn = !1),
        (Jn = 0),
        (Bo.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (er = t), (Z = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          u = t;
        if (
          ((t = te),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            m = s,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = m.alternate;
            v
              ? ((m.updateQueue = v.updateQueue),
                (m.memoizedState = v.memoizedState),
                (m.lanes = v.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = Ys(o);
          if (y !== null) {
            (y.flags &= -257),
              Xs(y, o, s, i, t),
              y.mode & 1 && Zs(i, c, t),
              (t = y),
              (u = c);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Zs(i, c, t), Qo();
              break e;
            }
            u = Error(C(426));
          }
        } else if (V && s.mode & 1) {
          var j = Ys(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Xs(j, o, s, i, t),
              Eo(cn(u, s));
            break e;
          }
        }
        (i = u = cn(u, s)),
          G !== 4 && (G = 2),
          In === null ? (In = [i]) : In.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = oc(i, u, t);
              As(i, f);
              break e;
            case 1:
              s = u;
              var d = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (dt === null || !dt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = sc(i, s, t);
                As(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _c(n);
    } catch (S) {
      (t = S), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function jc() {
  var e = ol.current;
  return (ol.current = il), e === null ? il : e;
}
function Qo() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    b === null || (!(zt & 268435455) && !(kl & 268435455)) || nt(b, te);
}
function al(e, t) {
  var n = M;
  M |= 2;
  var r = jc();
  (b !== e || te !== t) && ((He = null), Nt(e, t));
  do
    try {
      a1();
      break;
    } catch (l) {
      kc(e, l);
    }
  while (!0);
  if ((No(), (M = n), (ol.current = r), Z !== null)) throw Error(C(261));
  return (b = null), (te = 0), G;
}
function a1() {
  for (; Z !== null; ) Ec(Z);
}
function c1() {
  for (; Z !== null && !Md(); ) Ec(Z);
}
function Ec(e) {
  var t = Pc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? _c(e) : (Z = t),
    (Bo.current = null);
}
function _c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = r1(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Z = null);
        return;
      }
    } else if (((n = n1(n, t, ge)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function kt(e, t, n) {
  var r = F,
    l = _e.transition;
  try {
    (_e.transition = null), (F = 1), d1(e, t, n, r);
  } finally {
    (_e.transition = l), (F = r);
  }
  return null;
}
function d1(e, t, n, r) {
  do rn();
  while (lt !== null);
  if (M & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Wd(e, i),
    e === b && ((Z = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _r ||
      ((_r = !0),
      Lc(Wr, function () {
        return rn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = F;
    F = 1;
    var s = M;
    (M |= 4),
      (Bo.current = null),
      i1(e, n),
      xc(n, e),
      Tf(Li),
      (Kr = !!Pi),
      (Li = Pi = null),
      (e.current = n),
      o1(n),
      Fd(),
      (M = s),
      (F = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (_r && ((_r = !1), (lt = e), (ul = l)),
    (i = e.pendingLanes),
    i === 0 && (dt = null),
    Ud(n.stateNode),
    ve(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sl) throw ((sl = !1), (e = Xi), (Xi = null), e);
  return (
    ul & 1 && e.tag !== 0 && rn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Gi ? Dn++ : ((Dn = 0), (Gi = e))) : (Dn = 0),
    wt(),
    null
  );
}
function rn() {
  if (lt !== null) {
    var e = oa(ul),
      t = _e.transition,
      n = F;
    try {
      if (((_e.transition = null), (F = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (ul = 0), M & 6)) throw Error(C(331));
        var l = M;
        for (M |= 4, E = e.current; E !== null; ) {
          var i = E,
            o = i.child;
          if (E.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (E = c; E !== null; ) {
                  var m = E;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (E = h);
                  else
                    for (; E !== null; ) {
                      m = E;
                      var v = m.sibling,
                        y = m.return;
                      if ((gc(m), m === c)) {
                        E = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = y), (E = v);
                        break;
                      }
                      E = y;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var j = x.sibling;
                    (x.sibling = null), (x = j);
                  } while (x !== null);
                }
              }
              E = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (E = o);
          else
            e: for (; E !== null; ) {
              if (((i = E), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (E = f);
                break e;
              }
              E = i.return;
            }
        }
        var d = e.current;
        for (E = d; E !== null; ) {
          o = E;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (E = p);
          else
            e: for (o = d; E !== null; ) {
              if (((s = E), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sl(9, s);
                  }
                } catch (S) {
                  $(s, s.return, S);
                }
              if (s === o) {
                E = null;
                break e;
              }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (E = g);
                break e;
              }
              E = s.return;
            }
        }
        if (
          ((M = l), wt(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (_e.transition = t);
    }
  }
  return !1;
}
function uu(e, t, n) {
  (t = cn(n, t)),
    (t = oc(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = ae()),
    e !== null && (lr(e, 1, t), ve(e, t));
}
function $(e, t, n) {
  if (e.tag === 3) uu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        uu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dt === null || !dt.has(r)))
        ) {
          (e = cn(n, e)),
            (e = sc(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = ae()),
            t !== null && (lr(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function f1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (G === 4 || (G === 3 && (te & 130023424) === te && 500 > K() - Ho)
        ? Nt(e, 0)
        : (Ao |= n)),
    ve(e, t);
}
function Nc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vr), (vr <<= 1), !(vr & 130023424) && (vr = 4194304))
      : (t = 1));
  var n = ae();
  (e = Xe(e, t)), e !== null && (lr(e, t, n), ve(e, n));
}
function p1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Nc(e, n);
}
function h1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Nc(e, n);
}
var Pc;
Pc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), t1(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), V && t.flags & 1048576 && za(t, br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ir(e, t), (e = t.pendingProps);
      var l = on(t, oe.current);
      nn(t, n), (l = Fo(null, t, r, e, l, n));
      var i = Io();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((i = !0), Jr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ro(t),
            (l.updater = Cl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ui(t, r, e, n),
            (t = Ai(null, t, r, !0, i, n)))
          : ((t.tag = 0), V && i && ko(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ir(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = v1(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Bi(null, t, r, e, n);
            break e;
          case 1:
            t = qs(null, t, r, e, n);
            break e;
          case 11:
            t = Gs(null, t, r, e, n);
            break e;
          case 14:
            t = Js(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Bi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        qs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((dc(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ua(e, t),
          nl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = cn(Error(C(423)), t)), (t = bs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = cn(Error(C(424)), t)), (t = bs(e, t, r, n, l));
            break e;
          } else
            for (
              ye = at(t.stateNode.containerInfo.firstChild),
                we = t,
                V = !0,
                Oe = null,
                n = Ia(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((sn(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Va(t),
        e === null && Fi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ri(r, l) ? (o = null) : i !== null && Ri(r, i) && (t.flags |= 32),
        cc(e, t),
        se(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Fi(t), null;
    case 13:
      return fc(e, t, n);
    case 4:
      return (
        To(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Gs(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          I(el, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ie(i.value, o)) {
            if (i.children === l.children && !he.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Ke(-1, n & -n)), (u.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (c.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Ii(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  Ii(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        nn(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Js(e, t, r, l, n)
      );
    case 15:
      return uc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ir(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), Jr(t)) : (e = !1),
        nn(t, n),
        ic(t, r, l),
        Ui(t, r, l, n),
        Ai(null, t, r, !0, e, n)
      );
    case 19:
      return pc(e, t, n);
    case 22:
      return ac(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Lc(e, t) {
  return na(e, t);
}
function m1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new m1(e, t, n, r);
}
function Ko(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function v1(e) {
  if (typeof e == "function") return Ko(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === co)) return 11;
    if (e === fo) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ko(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case At:
        return Pt(n.children, l, i, t);
      case ao:
        (o = 8), (l |= 8);
        break;
      case ui:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = ui), (e.lanes = i), e
        );
      case ai:
        return (e = Ee(13, n, t, l)), (e.elementType = ai), (e.lanes = i), e;
      case ci:
        return (e = Ee(19, n, t, l)), (e.elementType = ci), (e.lanes = i), e;
      case Vu:
        return jl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Du:
              o = 10;
              break e;
            case Uu:
              o = 9;
              break e;
            case co:
              o = 11;
              break e;
            case fo:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Pt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = Vu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function li(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function ii(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function g1(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Vl(0)),
    (this.expirationTimes = Vl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Zo(e, t, n, r, l, i, o, s, u) {
  return (
    (e = new g1(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ro(i),
    e
  );
}
function y1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return Ra(e, n, t);
  }
  return t;
}
function Tc(e, t, n, r, l, i, o, s, u) {
  return (
    (e = Zo(n, r, !0, e, l, i, o, s, u)),
    (e.context = Rc(null)),
    (n = e.current),
    (r = ae()),
    (l = ft(n)),
    (i = Ke(r, l)),
    (i.callback = t ?? null),
    ct(n, i, l),
    (e.current.lanes = l),
    lr(e, l, r),
    ve(e, r),
    e
  );
}
function El(e, t, n, r) {
  var l = t.current,
    i = ae(),
    o = ft(l);
  return (
    (n = Rc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, o)),
    e !== null && (Fe(e, l, o, i), Or(e, l, o)),
    o
  );
}
function cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function au(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yo(e, t) {
  au(e, t), (e = e.alternate) && au(e, t);
}
function w1() {
  return null;
}
var zc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xo(e) {
  this._internalRoot = e;
}
_l.prototype.render = Xo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  El(e, t, null, null);
};
_l.prototype.unmount = Xo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      El(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function _l(e) {
  this._internalRoot = e;
}
_l.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = aa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && da(e);
  }
};
function Go(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function cu() {}
function x1(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = cl(o);
        i.call(c);
      };
    }
    var o = Tc(t, r, e, 0, null, !1, !1, "", cu);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Kn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = cl(u);
      s.call(c);
    };
  }
  var u = Zo(e, 0, !1, null, null, !1, !1, "", cu);
  return (
    (e._reactRootContainer = u),
    (e[Ye] = u.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      El(t, u, n, r);
    }),
    u
  );
}
function Pl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = cl(o);
        s.call(u);
      };
    }
    El(t, o, e, l);
  } else o = x1(n, t, e, l, r);
  return cl(o);
}
sa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 &&
          (mo(t, n | 1), ve(t, K()), !(M & 6) && ((dn = K() + 500), wt()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ae();
          Fe(r, e, 1, l);
        }
      }),
        Yo(e, 1);
  }
};
vo = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ae();
      Fe(t, e, 134217728, n);
    }
    Yo(e, 134217728);
  }
};
ua = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = ae();
      Fe(n, e, t, r);
    }
    Yo(e, t);
  }
};
aa = function () {
  return F;
};
ca = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
xi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((pi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(C(90));
            Au(r), pi(r, l);
          }
        }
      }
      break;
    case "textarea":
      $u(e, n);
      break;
    case "select":
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
Gu = $o;
Ju = Ot;
var C1 = { usingClientEntryPoint: !1, Events: [or, Qt, yl, Yu, Xu, $o] },
  jn = {
    findFiberByHostInstance: jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  S1 = {
    bundleType: jn.bundleType,
    version: jn.version,
    rendererPackageName: jn.rendererPackageName,
    rendererConfig: jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ea(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: jn.findFiberByHostInstance || w1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nr.isDisabled && Nr.supportsFiber)
    try {
      (hl = Nr.inject(S1)), (Be = Nr);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C1;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Go(t)) throw Error(C(200));
  return y1(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!Go(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = zc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Zo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    new Xo(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = ea(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Ot(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Nl(t)) throw Error(C(200));
  return Pl(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!Go(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = zc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Tc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Kn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new _l(t);
};
Ce.render = function (e, t, n) {
  if (!Nl(t)) throw Error(C(200));
  return Pl(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Nl(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Ot(function () {
        Pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = $o;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Nl(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Pl(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function Oc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc);
    } catch (e) {
      console.error(e);
    }
}
Oc(), (Ou.exports = Ce);
var k1 = Ou.exports,
  Mc,
  du = k1;
(Mc = du.createRoot), du.hydrateRoot;
const j1 = "./assets/square2-D2zOSgua.png";
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tr() {
  return (
    (tr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tr.apply(this, arguments)
  );
}
var it;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(it || (it = {}));
const fu = "popstate";
function E1(e) {
  e === void 0 && (e = {});
  function t(l, i) {
    let {
      pathname: o = "/",
      search: s = "",
      hash: u = "",
    } = It(l.location.hash.substr(1));
    return (
      !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o),
      bi(
        "",
        { pathname: o, search: s, hash: u },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(l, i) {
    let o = l.document.querySelector("base"),
      s = "";
    if (o && o.getAttribute("href")) {
      let u = l.location.href,
        c = u.indexOf("#");
      s = c === -1 ? u : u.slice(0, c);
    }
    return s + "#" + (typeof i == "string" ? i : dl(i));
  }
  function r(l, i) {
    Jo(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return N1(t, n, r, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Jo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function _1() {
  return Math.random().toString(36).substr(2, 8);
}
function pu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function bi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    tr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? It(t) : t,
      { state: n, key: (t && t.key) || r || _1() }
    )
  );
}
function dl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function It(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function N1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    s = it.Pop,
    u = null,
    c = m();
  c == null && ((c = 0), o.replaceState(tr({}, o.state, { idx: c }), ""));
  function m() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    s = it.Pop;
    let j = m(),
      f = j == null ? null : j - c;
    (c = j), u && u({ action: s, location: x.location, delta: f });
  }
  function v(j, f) {
    s = it.Push;
    let d = bi(x.location, j, f);
    n && n(d, j), (c = m() + 1);
    let p = pu(d, c),
      g = x.createHref(d);
    try {
      o.pushState(p, "", g);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      l.location.assign(g);
    }
    i && u && u({ action: s, location: x.location, delta: 1 });
  }
  function y(j, f) {
    s = it.Replace;
    let d = bi(x.location, j, f);
    n && n(d, j), (c = m());
    let p = pu(d, c),
      g = x.createHref(d);
    o.replaceState(p, "", g),
      i && u && u({ action: s, location: x.location, delta: 0 });
  }
  function w(j) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof j == "string" ? j : dl(j);
    return (
      (d = d.replace(/ $/, "%20")),
      Y(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, f)
    );
  }
  let x = {
    get action() {
      return s;
    },
    get location() {
      return e(l, o);
    },
    listen(j) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(fu, h),
        (u = j),
        () => {
          l.removeEventListener(fu, h), (u = null);
        }
      );
    },
    createHref(j) {
      return t(l, j);
    },
    createURL: w,
    encodeLocation(j) {
      let f = w(j);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: v,
    replace: y,
    go(j) {
      return o.go(j);
    },
  };
  return x;
}
var hu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(hu || (hu = {}));
function P1(e, t, n) {
  return n === void 0 && (n = "/"), L1(e, t, n, !1);
}
function L1(e, t, n, r) {
  let l = typeof t == "string" ? It(t) : t,
    i = qo(l.pathname || "/", n);
  if (i == null) return null;
  let o = Fc(e);
  R1(o);
  let s = null;
  for (let u = 0; s == null && u < o.length; ++u) {
    let c = A1(i);
    s = V1(o[u], c, r);
  }
  return s;
}
function Fc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, s) => {
    let u = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (Y(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = ht([r, u.relativePath]),
      m = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (Y(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Fc(i.children, t, m, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: D1(c, i.index), routesMeta: m });
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) l(i, o);
      else for (let u of Ic(i.path)) l(i, o, u);
    }),
    t
  );
}
function Ic(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Ic(r.join("/")),
    s = [];
  return (
    s.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && s.push(...o),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function R1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : U1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const T1 = /^:[\w-]+$/,
  z1 = 3,
  O1 = 2,
  M1 = 1,
  F1 = 10,
  I1 = -2,
  mu = (e) => e === "*";
function D1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(mu) && (r += I1),
    t && (r += O1),
    n
      .filter((l) => !mu(l))
      .reduce((l, i) => l + (T1.test(i) ? z1 : i === "" ? M1 : F1), r)
  );
}
function U1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function V1(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      c = s === r.length - 1,
      m = i === "/" ? t : t.slice(i.length) || "/",
      h = vu(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        m
      ),
      v = u.route;
    if (
      (!h &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (h = vu(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          m
        )),
      !h)
    )
      return null;
    Object.assign(l, h.params),
      o.push({
        params: l,
        pathname: ht([i, h.pathname]),
        pathnameBase: Q1(ht([i, h.pathnameBase])),
        route: v,
      }),
      h.pathnameBase !== "/" && (i = ht([i, h.pathnameBase]));
  }
  return o;
}
function vu(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = B1(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((c, m, h) => {
      let { paramName: v, isOptional: y } = m;
      if (v === "*") {
        let x = s[h] || "";
        o = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const w = s[h];
      return (
        y && !w ? (c[v] = void 0) : (c[v] = (w || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function B1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Jo(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function A1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Jo(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function qo(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function H1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? It(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : $1(n, t)) : t,
    search: K1(r),
    hash: Z1(l),
  };
}
function $1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function oi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function W1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Dc(e, t) {
  let n = W1(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Uc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = It(e))
    : ((l = tr({}, e)),
      Y(
        !l.pathname || !l.pathname.includes("?"),
        oi("?", "pathname", "search", l)
      ),
      Y(
        !l.pathname || !l.pathname.includes("#"),
        oi("#", "pathname", "hash", l)
      ),
      Y(!l.search || !l.search.includes("#"), oi("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    s;
  if (o == null) s = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith("..")) {
      let v = o.split("/");
      for (; v[0] === ".."; ) v.shift(), (h -= 1);
      l.pathname = v.join("/");
    }
    s = h >= 0 ? t[h] : "/";
  }
  let u = H1(l, s),
    c = o && o !== "/" && o.endsWith("/"),
    m = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || m) && (u.pathname += "/"), u;
}
const ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Q1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  K1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Z1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Y1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Vc = ["post", "put", "patch", "delete"];
new Set(Vc);
const X1 = ["get", ...Vc];
new Set(X1);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
const bo = k.createContext(null),
  G1 = k.createContext(null),
  Dt = k.createContext(null),
  Ll = k.createContext(null),
  Ut = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Bc = k.createContext(null);
function J1(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ur() || Y(!1);
  let { basename: r, navigator: l } = k.useContext(Dt),
    { hash: i, pathname: o, search: s } = Hc(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : ht([r, o])),
    l.createHref({ pathname: u, search: s, hash: i })
  );
}
function ur() {
  return k.useContext(Ll) != null;
}
function Rl() {
  return ur() || Y(!1), k.useContext(Ll).location;
}
function Ac(e) {
  k.useContext(Dt).static || k.useLayoutEffect(e);
}
function q1() {
  let { isDataRoute: e } = k.useContext(Ut);
  return e ? dp() : b1();
}
function b1() {
  ur() || Y(!1);
  let e = k.useContext(bo),
    { basename: t, future: n, navigator: r } = k.useContext(Dt),
    { matches: l } = k.useContext(Ut),
    { pathname: i } = Rl(),
    o = JSON.stringify(Dc(l, n.v7_relativeSplatPath)),
    s = k.useRef(!1);
  return (
    Ac(() => {
      s.current = !0;
    }),
    k.useCallback(
      function (c, m) {
        if ((m === void 0 && (m = {}), !s.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let h = Uc(c, JSON.parse(o), i, m.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : ht([t, h.pathname])),
          (m.replace ? r.replace : r.push)(h, m.state, m);
      },
      [t, r, o, i, e]
    )
  );
}
function Hc(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(Dt),
    { matches: l } = k.useContext(Ut),
    { pathname: i } = Rl(),
    o = JSON.stringify(Dc(l, r.v7_relativeSplatPath));
  return k.useMemo(() => Uc(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function ep(e, t) {
  return tp(e, t);
}
function tp(e, t, n, r) {
  ur() || Y(!1);
  let { navigator: l } = k.useContext(Dt),
    { matches: i } = k.useContext(Ut),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let c = Rl(),
    m;
  if (t) {
    var h;
    let j = typeof t == "string" ? It(t) : t;
    u === "/" || ((h = j.pathname) != null && h.startsWith(u)) || Y(!1),
      (m = j);
  } else m = c;
  let v = m.pathname || "/",
    y = v;
  if (u !== "/") {
    let j = u.replace(/^\//, "").split("/");
    y = "/" + v.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let w = P1(e, { pathname: y }),
    x = op(
      w &&
        w.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, s, j.params),
            pathname: ht([
              u,
              l.encodeLocation
                ? l.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? u
                : ht([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && x
    ? k.createElement(
        Ll.Provider,
        {
          value: {
            location: nr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: it.Pop,
          },
        },
        x
      )
    : x;
}
function np() {
  let e = cp(),
    t = Y1(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: l }, n) : null,
    null
  );
}
const rp = k.createElement(np, null);
class lp extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          Ut.Provider,
          { value: this.props.routeContext },
          k.createElement(Bc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ip(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(bo);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Ut.Provider, { value: t }, r)
  );
}
function op(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    s = (l = n) == null ? void 0 : l.errors;
  if (s != null) {
    let m = o.findIndex(
      (h) => h.route.id && (s == null ? void 0 : s[h.route.id]) !== void 0
    );
    m >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, m + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < o.length; m++) {
      let h = o[m];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = m),
        h.route.id)
      ) {
        let { loaderData: v, errors: y } = n,
          w =
            h.route.loader &&
            v[h.route.id] === void 0 &&
            (!y || y[h.route.id] === void 0);
        if (h.route.lazy || w) {
          (u = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((m, h, v) => {
    let y,
      w = !1,
      x = null,
      j = null;
    n &&
      ((y = s && h.route.id ? s[h.route.id] : void 0),
      (x = h.route.errorElement || rp),
      u &&
        (c < 0 && v === 0
          ? ((w = !0), (j = null))
          : c === v &&
            ((w = !0), (j = h.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, v + 1)),
      d = () => {
        let p;
        return (
          y
            ? (p = x)
            : w
            ? (p = j)
            : h.route.Component
            ? (p = k.createElement(h.route.Component, null))
            : h.route.element
            ? (p = h.route.element)
            : (p = m),
          k.createElement(ip, {
            match: h,
            routeContext: { outlet: m, matches: f, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || v === 0)
      ? k.createElement(lp, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: y,
          children: d(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var $c = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })($c || {}),
  fl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(fl || {});
function sp(e) {
  let t = k.useContext(bo);
  return t || Y(!1), t;
}
function up(e) {
  let t = k.useContext(G1);
  return t || Y(!1), t;
}
function ap(e) {
  let t = k.useContext(Ut);
  return t || Y(!1), t;
}
function Wc(e) {
  let t = ap(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Y(!1), n.route.id;
}
function cp() {
  var e;
  let t = k.useContext(Bc),
    n = up(fl.UseRouteError),
    r = Wc(fl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function dp() {
  let { router: e } = sp($c.UseNavigateStable),
    t = Wc(fl.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Ac(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, nr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const gu = {};
function fp(e, t) {
  gu[t] || ((gu[t] = !0), console.warn(t));
}
const yu = (e, t, n) =>
  fp(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function pp(e, t) {
  (e != null && e.v7_startTransition) ||
    yu(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      yu(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function Br(e) {
  Y(!1);
}
function hp(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = it.Pop,
    navigator: i,
    static: o = !1,
    future: s,
  } = e;
  ur() && Y(!1);
  let u = t.replace(/^\/*/, "/"),
    c = k.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: nr({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, i, o]
    );
  typeof r == "string" && (r = It(r));
  let {
      pathname: m = "/",
      search: h = "",
      hash: v = "",
      state: y = null,
      key: w = "default",
    } = r,
    x = k.useMemo(() => {
      let j = qo(m, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: h, hash: v, state: y, key: w },
            navigationType: l,
          };
    }, [u, m, h, v, y, w, l]);
  return x == null
    ? null
    : k.createElement(
        Dt.Provider,
        { value: c },
        k.createElement(Ll.Provider, { children: n, value: x })
      );
}
function mp(e) {
  let { children: t, location: n } = e;
  return ep(eo(t), n);
}
new Promise(() => {});
function eo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, eo(r.props.children, i));
        return;
      }
      r.type !== Br && Y(!1), !r.props.index || !r.props.children || Y(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = eo(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function to() {
  return (
    (to = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    to.apply(this, arguments)
  );
}
function vp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function gp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function yp(e, t) {
  return e.button === 0 && (!t || t === "_self") && !gp(e);
}
const wp = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  xp = "6";
try {
  window.__reactRouterVersion = xp;
} catch {}
const Cp = "startTransition",
  wu = dd[Cp];
function Sp(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = k.useRef();
  i.current == null && (i.current = E1({ window: l, v5Compat: !0 }));
  let o = i.current,
    [s, u] = k.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    m = k.useCallback(
      (h) => {
        c && wu ? wu(() => u(h)) : u(h);
      },
      [u, c]
    );
  return (
    k.useLayoutEffect(() => o.listen(m), [o, m]),
    k.useEffect(() => pp(r), [r]),
    k.createElement(hp, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
const kp =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  jp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ue = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: s,
        target: u,
        to: c,
        preventScrollReset: m,
        viewTransition: h,
      } = t,
      v = vp(t, wp),
      { basename: y } = k.useContext(Dt),
      w,
      x = !1;
    if (typeof c == "string" && jp.test(c) && ((w = c), kp))
      try {
        let p = new URL(window.location.href),
          g = c.startsWith("//") ? new URL(p.protocol + c) : new URL(c),
          S = qo(g.pathname, y);
        g.origin === p.origin && S != null
          ? (c = S + g.search + g.hash)
          : (x = !0);
      } catch {}
    let j = J1(c, { relative: l }),
      f = Ep(c, {
        replace: o,
        state: s,
        target: u,
        preventScrollReset: m,
        relative: l,
        viewTransition: h,
      });
    function d(p) {
      r && r(p), p.defaultPrevented || f(p);
    }
    return k.createElement(
      "a",
      to({}, v, { href: w || j, onClick: x || i ? r : d, ref: n, target: u })
    );
  });
var xu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(xu || (xu = {}));
var Cu;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Cu || (Cu = {}));
function Ep(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    u = q1(),
    c = Rl(),
    m = Hc(e, { relative: o });
  return k.useCallback(
    (h) => {
      if (yp(h, n)) {
        h.preventDefault();
        let v = r !== void 0 ? r : dl(c) === dl(m);
        u(e, {
          replace: v,
          state: l,
          preventScrollReset: i,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [c, u, m, r, l, n, e, i, o, s]
  );
}
function es() {
  return a.jsxs("section", {
    className: "footer",
    children: [
      a.jsxs("div", {
        className: "footer-details",
        children: [
          a.jsxs("div", {
            className: "loc-svg",
            children: [
              a.jsxs("svg", {
                width: "24",
                height: "33",
                viewBox: "0 0 24 33",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  a.jsx("g", {
                    clipPath: "url(#clip0_83_665)",
                    children: a.jsx("path", {
                      d: "M23.9993 12.5C23.9993 21.228 13.8455 31.482 13.4138 31.9142C13.0386 32.2892 12.5299 32.4999 11.9995 32.4999C11.4691 32.4999 10.9604 32.2892 10.5853 31.9142C10.153 31.4817 -0.000732422 21.228 -0.000732422 12.5C-0.000732422 9.3174 1.26355 6.26515 3.51399 4.01472C5.76442 1.76428 8.81667 0.5 11.9993 0.5C15.1819 0.5 18.2341 1.76428 20.4845 4.01472C22.735 6.26515 23.9993 9.3174 23.9993 12.5ZM11.9993 18.5C13.186 18.5 14.346 18.1481 15.3327 17.4888C16.3194 16.8295 17.0884 15.8925 17.5425 14.7961C17.9967 13.6997 18.1155 12.4933 17.884 11.3295C17.6525 10.1656 17.081 9.09647 16.2419 8.25736C15.4028 7.41824 14.3337 6.8468 13.1698 6.61529C12.0059 6.38378 10.7995 6.5026 9.70317 6.95672C8.60681 7.41085 7.66974 8.17988 7.01045 9.16658C6.35116 10.1533 5.99927 11.3133 5.99927 12.5C5.99923 13.2879 6.15441 14.0682 6.45592 14.7961C6.75744 15.5241 7.1994 16.1856 7.75655 16.7427C8.31371 17.2999 8.97516 17.7418 9.70313 18.0433C10.4311 18.3449 11.2113 18.5 11.9993 18.5Z",
                      fill: "#F2F1F2",
                    }),
                  }),
                  a.jsx("defs", {
                    children: a.jsx("clipPath", {
                      id: "clip0_83_665",
                      children: a.jsx("rect", {
                        width: "24",
                        height: "32",
                        fill: "white",
                        transform: "translate(-0.000732422 0.5)",
                      }),
                    }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "location",
                children: [
                  a.jsx("label", { children: "Location" }),
                  a.jsx("span", { children: "Gbagada, Lagos" }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "loc-svg",
            children: [
              a.jsxs("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  a.jsxs("g", {
                    clipPath: "url(#clip0_83_673)",
                    children: [
                      a.jsx("path", {
                        d: "M2.99927 8.25V9.75H1.49927C1.30036 9.75 1.10959 9.67098 0.968937 9.53033C0.828285 9.38968 0.749268 9.19891 0.749268 9C0.749268 8.80109 0.828285 8.61032 0.968937 8.46967C1.10959 8.32902 1.30036 8.25 1.49927 8.25H2.99927ZM2.99927 11.25V12.75H1.49927C1.30036 12.75 1.10959 12.671 0.968937 12.5303C0.828285 12.3897 0.749268 12.1989 0.749268 12C0.749268 11.8011 0.828285 11.6103 0.968937 11.4697C1.10959 11.329 1.30036 11.25 1.49927 11.25H2.99927ZM2.99927 14.25V15.75H1.49927C1.30036 15.75 1.10959 15.671 0.968937 15.5303C0.828285 15.3897 0.749268 15.1989 0.749268 15C0.749268 14.8011 0.828285 14.6103 0.968937 14.4697C1.10959 14.329 1.30036 14.25 1.49927 14.25H2.99927Z",
                        fill: "#F2F1F2",
                      }),
                      a.jsx("path", {
                        d: "M20.9993 0H4.49927C3.90253 0 3.33023 0.237053 2.90828 0.65901C2.48632 1.08097 2.24927 1.65326 2.24927 2.25V8.25H4.49927C4.69818 8.25 4.88895 8.32902 5.0296 8.46967C5.17025 8.61032 5.24927 8.80109 5.24927 9C5.24927 9.19891 5.17025 9.38968 5.0296 9.53033C4.88895 9.67098 4.69818 9.75 4.49927 9.75H2.24927V11.25H4.49927C4.69818 11.25 4.88895 11.329 5.0296 11.4697C5.17025 11.6103 5.24927 11.8011 5.24927 12C5.24927 12.1989 5.17025 12.3897 5.0296 12.5303C4.88895 12.671 4.69818 12.75 4.49927 12.75H2.24927V14.25H4.49927C4.69818 14.25 4.88895 14.329 5.0296 14.4697C5.17025 14.6103 5.24927 14.8011 5.24927 15C5.24927 15.1989 5.17025 15.3897 5.0296 15.5303C4.88895 15.671 4.69818 15.75 4.49927 15.75H2.24927V21.75C2.24927 22.3467 2.48632 22.919 2.90828 23.341C3.33023 23.7629 3.90253 24 4.49927 24H20.9993C21.596 24 22.1683 23.7629 22.5903 23.341C23.0122 22.919 23.2493 22.3467 23.2493 21.75V2.25C23.2493 1.65326 23.0122 1.08097 22.5903 0.65901C22.1683 0.237053 21.596 0 20.9993 0V0ZM12.7493 7.125C13.1201 7.125 13.4826 7.23497 13.791 7.44099C14.0993 7.64702 14.3396 7.93986 14.4815 8.28247C14.6235 8.62508 14.6606 9.00208 14.5882 9.3658C14.5159 9.72951 14.3373 10.0636 14.0751 10.3258C13.8129 10.588 13.4788 10.7666 13.1151 10.839C12.7513 10.9113 12.3743 10.8742 12.0317 10.7323C11.6891 10.5904 11.3963 10.35 11.1903 10.0417C10.9842 9.73335 10.8743 9.37084 10.8743 9C10.8743 8.50272 11.0718 8.02581 11.4234 7.67417C11.7751 7.32254 12.252 7.125 12.7493 7.125ZM16.8743 16.5C16.8743 16.5995 16.8348 16.6948 16.7644 16.7652C16.6941 16.8355 16.5987 16.875 16.4993 16.875H8.99927C8.89981 16.875 8.80443 16.8355 8.7341 16.7652C8.66378 16.6948 8.62427 16.5995 8.62427 16.5V15.75C8.62625 14.8555 8.98246 13.9982 9.61497 13.3657C10.2475 12.7332 11.1048 12.377 11.9993 12.375H13.4993C14.3938 12.377 15.2511 12.7332 15.8836 13.3657C16.5161 13.9982 16.8723 14.8555 16.8743 15.75V16.5Z",
                        fill: "#F2F1F2",
                      }),
                    ],
                  }),
                  a.jsx("defs", {
                    children: a.jsx("clipPath", {
                      id: "clip0_83_673",
                      children: a.jsx("rect", {
                        width: "24",
                        height: "24",
                        fill: "white",
                        transform: "translate(-0.000732422)",
                      }),
                    }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "location",
                children: [
                  a.jsx("label", { children: "Contact" }),
                  a.jsx("span", { children: "Email: info@sqladvisory.co" }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "loc-svg",
            children: [
              a.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: a.jsx("path", {
                  d: "M11.9993 1C9.82368 1 7.69694 1.64514 5.888 2.85383C4.07906 4.06253 2.66916 5.78049 1.8366 7.79048C1.00403 9.80047 0.786197 12.0122 1.21063 14.146C1.63507 16.2798 2.68272 18.2398 4.2211 19.7782C5.75948 21.3166 7.71949 22.3642 9.85328 22.7886C11.9871 23.2131 14.1988 22.9952 16.2088 22.1627C18.2188 21.3301 19.9367 19.9202 21.1454 18.1113C22.3541 16.3023 22.9993 14.1756 22.9993 12C22.9993 9.08262 21.8403 6.28473 19.7774 4.22183C17.7145 2.15893 14.9167 1 11.9993 1ZM15.9993 13H11.9993C11.7341 13 11.4797 12.8946 11.2922 12.7071C11.1046 12.5196 10.9993 12.2652 10.9993 12V6C10.9993 5.73478 11.1046 5.48043 11.2922 5.29289C11.4797 5.10536 11.7341 5 11.9993 5C12.2645 5 12.5188 5.10536 12.7064 5.29289C12.8939 5.48043 12.9993 5.73478 12.9993 6V11H15.9993C16.2645 11 16.5188 11.1054 16.7064 11.2929C16.8939 11.4804 16.9993 11.7348 16.9993 12C16.9993 12.2652 16.8939 12.5196 16.7064 12.7071C16.5188 12.8946 16.2645 13 15.9993 13Z",
                  fill: "#F2F1F2",
                }),
              }),
              a.jsxs("div", {
                className: "location",
                children: [
                  a.jsx("label", { children: "Work Hours " }),
                  a.jsxs("span", {
                    className: "monday",
                    children: [
                      "Mondays to Fridays",
                      a.jsx("span", { children: "8am - 4pm" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsx("hr", {}),
      a.jsxs("div", {
        className: "footer-end",
        children: [
          a.jsxs("div", {
            className: "footer-img",
            children: [
              a.jsx("img", { src: j1, alt: "" }),
              a.jsxs("label", {
                children: [
                  "Empowering organisations through transformative people strategies.",
                  " ",
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "quicklinks",
            children: [
              a.jsx("label", { children: "Quick Links" }),
              a.jsxs("ul", {
                children: [
                  a.jsx(ue, {
                    to: "/",
                    children: a.jsx("li", { children: "About us" }),
                  }),
                  a.jsx(ue, {
                    to: "/services",
                    children: a.jsx("li", { children: "Our Services" }),
                  }),
                  a.jsx("li", { children: "Privacy Policy" }),
                  a.jsx("li", { children: "Terms of Use" }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "connect",
            children: [
              a.jsx("label", { children: "Connect with us" }),
              a.jsxs("ul", {
                children: [
                  a.jsx("li", {
                    children: a.jsx(ue, {
                      to: "https://web.facebook.com/sqladvisory?mibextid=LQQJ4d&_rdc=1&_rdr#",
                      children: a.jsxs("svg", {
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          a.jsxs("g", {
                            clipPath: "url(#clip0_83_690)",
                            children: [
                              a.jsx("path", {
                                d: "M31.4993 36H4.49927C2.01527 36 -0.000732422 33.984 -0.000732422 31.5V4.5C-0.000732422 2.016 2.01527 0 4.49927 0H31.4993C33.9833 0 35.9993 2.016 35.9993 4.5V31.5C35.9993 33.984 33.9833 36 31.4993 36Z",
                                fill: "#F2F1F2",
                              }),
                              a.jsx("path", {
                                d: "M35.9993 17.9999C35.9993 8.05878 27.9404 -8.7738e-05 17.9993 -8.7738e-05C8.05814 -8.7738e-05 -0.000732422 8.05878 -0.000732422 17.9999C-0.000732422 26.9842 6.58161 34.4309 15.1868 35.7812V23.203H10.6165V17.9999H15.1868V14.0343C15.1868 9.52304 17.874 7.03116 21.9856 7.03116C23.955 7.03116 26.0149 7.38273 26.0149 7.38273V11.8124H23.7451C21.5091 11.8124 20.8118 13.1999 20.8118 14.6234V17.9999H25.804L25.0059 23.203H20.8118V35.7812C29.4169 34.4309 35.9993 26.9842 35.9993 17.9999Z",
                                fill: "#F2F1F2",
                              }),
                              a.jsx("path", {
                                d: "M25.0059 23.2031L25.804 18H20.8118V14.6235C20.8118 13.2 21.5091 11.8125 23.7451 11.8125H26.0149V7.38281C26.0149 7.38281 23.955 7.03125 21.9856 7.03125C17.874 7.03125 15.1868 9.52313 15.1868 14.0344V18H10.6165V23.2031H15.1868V35.7813C16.1032 35.9251 17.0425 36 17.9993 36C18.9561 36 19.8954 35.9251 20.8118 35.7813V23.2031H25.0059Z",
                                fill: "#1B1A38",
                              }),
                            ],
                          }),
                          a.jsx("defs", {
                            children: a.jsx("clipPath", {
                              id: "clip0_83_690",
                              children: a.jsx("rect", {
                                width: "36",
                                height: "36",
                                fill: "white",
                                transform: "translate(-0.000732422)",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx(ue, {
                      to: "https://x.com/sqladvisory?s=11&t=fPYDdhVOkJjxNRmoxEVdUQ",
                      children: a.jsxs("svg", {
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          a.jsxs("g", {
                            clipPath: "url(#clip0_83_696)",
                            children: [
                              a.jsx("path", {
                                d: "M31.4993 36H4.49927C2.01527 36 -0.000732422 33.984 -0.000732422 31.5V4.5C-0.000732422 2.016 2.01527 0 4.49927 0H31.4993C33.9833 0 35.9993 2.016 35.9993 4.5V31.5C35.9993 33.984 33.9833 36 31.4993 36Z",
                                fill: "#F2F1F2",
                              }),
                              a.jsx("path", {
                                d: "M24.3808 8H27.753L20.3488 16.4871L28.9993 28H22.2109L16.896 21.0037L10.8113 28H7.43912L15.2832 18.9225L6.99927 8H13.9563L18.758 14.3911L24.3808 8ZM23.2005 26.0074H25.0699L12.9739 9.91882H10.9653L23.2005 26.0074Z",
                                fill: "#1B1A38",
                              }),
                            ],
                          }),
                          a.jsx("defs", {
                            children: a.jsx("clipPath", {
                              id: "clip0_83_696",
                              children: a.jsx("rect", {
                                width: "36",
                                height: "36",
                                fill: "white",
                                transform: "translate(-0.000732422)",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsxs("svg", {
                      width: "36",
                      height: "36",
                      viewBox: "0 0 36 36",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        a.jsxs("g", {
                          clipPath: "url(#clip0_83_701)",
                          children: [
                            a.jsx("rect", {
                              x: "-0.000732422",
                              width: "36",
                              height: "36",
                              rx: "5",
                              fill: "#561D5E",
                            }),
                            a.jsxs("g", {
                              clipPath: "url(#clip1_83_701)",
                              children: [
                                a.jsx("rect", {
                                  x: "-0.000732422",
                                  width: "36",
                                  height: "36",
                                  rx: "5",
                                  fill: "#F2F1F2",
                                }),
                                a.jsx("path", {
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  d: "M28.9993 29H24.7993V21.651C24.7993 19.635 23.9099 18.5103 22.315 18.5103C20.5793 18.5103 19.5493 19.6823 19.5493 21.651V29H15.3493V15.35H19.5493V16.885C19.5493 16.885 20.867 14.5728 23.8364 14.5728C26.8069 14.5728 28.9993 16.3854 28.9993 20.136V29ZM10.5634 13.1669C9.14692 13.1669 7.99927 12.0099 7.99927 10.583C7.99927 9.15706 9.14692 8 10.5634 8C11.9788 8 13.1264 9.15706 13.1264 10.583C13.1275 12.0099 11.9788 13.1669 10.5634 13.1669ZM7.99927 29H13.2493V15.35H7.99927V29Z",
                                  fill: "#1B1A38",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("defs", {
                          children: [
                            a.jsx("clipPath", {
                              id: "clip0_83_701",
                              children: a.jsx("rect", {
                                x: "-0.000732422",
                                width: "36",
                                height: "36",
                                rx: "5",
                                fill: "white",
                              }),
                            }),
                            a.jsx("clipPath", {
                              id: "clip1_83_701",
                              children: a.jsx("rect", {
                                width: "36",
                                height: "36",
                                fill: "white",
                                transform: "translate(-0.000732422)",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx(ue, {
                      to: "https://www.instagram.com/sqladvisory?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                      children: a.jsxs("svg", {
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          a.jsx("rect", {
                            x: "-0.000732422",
                            width: "36",
                            height: "36",
                            rx: "5",
                            fill: "#F2F1F2",
                          }),
                          a.jsx("path", {
                            d: "M18.0005 4.5C14.3341 4.5 13.874 4.51603 12.434 4.58157C10.9968 4.64738 10.0158 4.87492 9.15738 5.20878C8.26946 5.55361 7.51627 6.01487 6.76588 6.76556C6.01494 7.51597 5.55368 8.26918 5.20774 9.15685C4.87305 10.0155 4.64524 10.9969 4.58055 12.4335C4.51614 13.8736 4.49927 14.334 4.49927 18.0005C4.49927 21.6671 4.51558 22.1258 4.58083 23.5659C4.64693 25.0031 4.87446 25.9842 5.20803 26.8426C5.55312 27.7305 6.01438 28.4837 6.76504 29.2341C7.51514 29.9851 8.26834 30.4475 9.15569 30.7923C10.0146 31.1262 10.9959 31.3537 12.4328 31.4195C13.8729 31.4851 14.3327 31.5011 17.9988 31.5011C21.6655 31.5011 22.1243 31.4851 23.5643 31.4195C25.0015 31.3537 25.9836 31.1262 26.8426 30.7923C27.7302 30.4475 28.4823 29.9851 29.2324 29.2341C29.9833 28.4837 30.4446 27.7305 30.7905 26.8428C31.1224 25.9842 31.3502 25.0028 31.4177 23.5662C31.4824 22.1261 31.4993 21.6671 31.4993 18.0005C31.4993 14.334 31.4824 13.8739 31.4177 12.4338C31.3502 10.9966 31.1224 10.0155 30.7905 9.15713C30.4446 8.26918 29.9833 7.51597 29.2324 6.76556C28.4814 6.01459 27.7305 5.55332 26.8417 5.20878C25.9811 4.87492 24.9995 4.64738 23.5623 4.58157C22.1223 4.51603 21.6639 4.5 17.9963 4.5H18.0005ZM16.7895 6.93291C17.1489 6.93235 17.55 6.93291 18.0005 6.93291C21.6051 6.93291 22.0323 6.94585 23.4557 7.01054C24.772 7.07073 25.4864 7.29068 25.9622 7.47547C26.5922 7.72016 27.0414 8.01267 27.5136 8.48519C27.9861 8.95771 28.2786 9.40773 28.5239 10.0378C28.7087 10.5131 28.9289 11.2275 28.9888 12.5438C29.0535 13.967 29.0676 14.3945 29.0676 17.9975C29.0676 21.6004 29.0535 22.0279 28.9888 23.4511C28.9286 24.7674 28.7087 25.4818 28.5239 25.9572C28.2792 26.5872 27.9861 27.0358 27.5136 27.508C27.0411 27.9805 26.5925 28.2731 25.9622 28.5178C25.4869 28.7034 24.772 28.9228 23.4557 28.983C22.0326 29.0477 21.6051 29.0617 18.0005 29.0617C14.3957 29.0617 13.9685 29.0477 12.5454 28.983C11.2291 28.9222 10.5147 28.7023 10.0385 28.5175C9.40854 28.2728 8.95853 27.9803 8.48603 27.5077C8.01352 27.0352 7.72102 26.5863 7.47577 25.956C7.29098 25.4807 7.07076 24.7663 7.01086 23.45C6.94617 22.0268 6.93323 21.5993 6.93323 17.9941C6.93323 14.3889 6.94617 13.9636 7.01086 12.5404C7.07104 11.2241 7.29098 10.5097 7.47577 10.0338C7.72046 9.40379 8.01352 8.95377 8.48603 8.48126C8.95853 8.00874 9.40854 7.71622 10.0385 7.47096C10.5144 7.28533 11.2291 7.06595 12.5454 7.00548C13.7907 6.94922 14.2734 6.93235 16.7895 6.92954V6.93291ZM25.2068 9.17456C24.3124 9.17456 23.5868 9.89938 23.5868 10.7941C23.5868 11.6885 24.3124 12.4141 25.2068 12.4141C26.1012 12.4141 26.8268 11.6885 26.8268 10.7941C26.8268 9.89966 26.1012 9.174 25.2068 9.174V9.17456ZM18.0005 11.0675C14.1718 11.0675 11.0676 14.1717 11.0676 18.0005C11.0676 21.8294 14.1718 24.9322 18.0005 24.9322C21.8292 24.9322 24.9323 21.8294 24.9323 18.0005C24.9323 14.1717 21.8289 11.0675 18.0003 11.0675H18.0005ZM18.0005 13.5004C20.4857 13.5004 22.5006 15.515 22.5006 18.0005C22.5006 20.4858 20.4857 22.5007 18.0005 22.5007C15.5151 22.5007 13.5005 20.4858 13.5005 18.0005C13.5005 15.515 15.5151 13.5004 18.0005 13.5004Z",
                            fill: "#1B1A38",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsx("label", {
        children:
          "© SquaredLAB Advisory Services Limited 2024. All rights reserved",
      }),
    ],
  });
}
const _p = "./assets/squareLab-BS5ym6ty.png";
function ts() {
  return a.jsx("header", {
    className: "firstsection",
    children: a.jsxs("nav", {
      className: "nav",
      children: [
        a.jsx("img", { src: _p }),
        a.jsxs("ul", {
          className: "nav-ul",
          children: [
            a.jsx(ue, {
              to: "/",
              children: a.jsx("li", {
                className: "list",
                children: "About Us",
              }),
            }),
            a.jsx(ue, {
              to: "/services",
              children: a.jsx("li", {
                className: "list",
                children: "Our Services",
              }),
            }),
            a.jsx("li", { className: "list", children: "Vacancies" }),
            a.jsx(ue, {
              to: "/contact",
              children: a.jsx("li", {
                className: "contact",
                children: "Contact Us",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const Np = "./assets/HeroPage-BokXdubm.png",
  Pp = "./assets/aboutus-CgopWxXm.png";
function Lp() {
  return a.jsxs("section", {
    className: "aboutsection",
    children: [
      a.jsx("img", { className: "hero", src: Np }),
      a.jsxs("div", {
        className: "img-text",
        children: [
          a.jsx("h2", {
            children: "Empower Your Team, Elevate Your Business!",
          }),
          a.jsx("span", { children: "View our Services" }),
        ],
      }),
      a.jsxs("div", {
        className: "about-detail",
        children: [
          a.jsxs("div", {
            className: "aboutus",
            children: [
              a.jsx("label", { children: "About Us" }),
              a.jsx("img", { className: "about", src: Pp, alt: "About" }),
            ],
          }),
          a.jsxs("div", {
            className: "details",
            children: [
              a.jsxs("p", {
                children: [
                  "SquaredLAB Advisory Services Limited (“SASL”, “SQL Advisory”) unlocks peak performance for startups, SMEs, and established companies. By weaving best practices into your company culture, we build a foundation for sustainable growth.",
                  a.jsx("br", {}),
                  a.jsx("br", {}),
                  "Our expertise empowers you to seize emerging opportunities and navigate the ever-changing business landscape.",
                ],
              }),
              a.jsx("p", {
                children:
                  "The core focus of SQL Advisory is mainly centred around People Management matters and ensuring that pertinent human resources issues are taken into cognisance when starting and building a company. People Management must be seen from a strategic point of view and not just something organisations react to when matters arise.",
              }),
              a.jsx("p", {
                children:
                  "Our engagement approach with clients offers a combination of competence and experience, where our team helps clients identify issues, assess each situation or challenge and pledge to work with them to provide practical interventions in resolving problems. All our intervention activities are in tune with the strategic or operational intent of the clients in each case, thus, each client receives the service they require, whilst we always aim to surpass expectations.",
              }),
              a.jsx("span", {
                children:
                  "List industries of clients supported in the past and currently supporting include",
              }),
              a.jsxs("div", {
                className: "list-of-industries",
                children: [
                  a.jsxs("ul", {
                    children: [
                      a.jsx("li", { children: "FMCG" }),
                      a.jsx("li", { children: "Manufacturing" }),
                      a.jsx("li", { children: "Real Estate" }),
                      a.jsxs("li", {
                        children: [
                          "Financial Services",
                          " ",
                          a.jsxs("span", {
                            children: [
                              "(Asset Management,",
                              a.jsx("br", {}),
                              " Microfinance Bank)",
                            ],
                          }),
                        ],
                      }),
                      a.jsx("li", { children: "Engineering and Procurement" }),
                    ],
                  }),
                  a.jsxs("ul", {
                    children: [
                      a.jsx("li", { children: "Hospitality" }),
                      a.jsxs("li", {
                        children: [
                          "Agriculture ",
                          a.jsx("span", { children: "(Investments)" }),
                        ],
                      }),
                      a.jsxs("li", {
                        children: [
                          "Engineering Services ",
                          a.jsx("span", {
                            children: "(Oil and Gas Midstream)",
                          }),
                        ],
                      }),
                      a.jsx("li", { children: "Security Services" }),
                      a.jsx("li", { children: "Social Impact etc" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Rp = "./assets/values-D9KDB0e_.png";
function Tp() {
  return a.jsxs("section", {
    className: "section-value",
    children: [
      a.jsxs("div", {
        className: "valuesection",
        children: [
          a.jsx("img", { src: Rp, alt: "" }),
          a.jsxs("div", {
            className: "values",
            children: [
              a.jsx("label", { children: "Values" }),
              a.jsxs("div", {
                children: [
                  a.jsxs("p", {
                    children: [
                      a.jsx("span", { children: " Our Mission" }),
                      " is to champion a thriving future by accelerating sustainable products, services and practices with measurable impact.",
                    ],
                  }),
                  a.jsx("br", {}),
                  a.jsxs("p", {
                    children: [
                      a.jsx("span", { children: "The Vision" }),
                      " is to become a leading catalyst for positive change by empowering ventures and communities that unlock shared value for all stakeholders.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className: "core-value",
        children: [
          a.jsxs("label", {
            children: [
              "Our ",
              a.jsx("span", { children: "Core Values" }),
              " are centred around",
            ],
          }),
          a.jsxs("ul", {
            children: [
              a.jsxs("li", {
                children: [
                  "Daunting challenges loom before our dream of driving social change. Yet, it is ",
                  a.jsx("span", { children: "Courage" }),
                  " that fuels our relentless pursuit of progress. Daring ideas are our currency, bold action our language. Beyond convention, we tap the entrepreneurial spirit, forever fueled by Courage to rewrite the narrative of tomorrow.",
                  " ",
                ],
              }),
              a.jsxs("li", {
                children: [
                  "Every step we take is guided by the compass of",
                  " ",
                  a.jsx("span", { children: "Integrity" }),
                  ". Fairness, accountability, and grounded principles illuminate our path, ensuring every action builds towards a future we can be proud of.",
                ],
              }),
              a.jsxs("li", {
                children: [
                  "At the heart of our pursuit of positive change lies a fierce",
                  " ",
                  a.jsx("span", { children: "Responsibility" }),
                  ". We own the impact of our endeavours, weaving accountability into every strand, leaving a legacy of progress for generations to come.",
                ],
              }),
              a.jsxs("li", {
                children: [
                  "We chase ",
                  a.jsx("span", { children: "Excellence" }),
                  " in all we do, crafting enduring legacies through meticulous processes and unwavering support for our stakeholders.",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const zp = "./assets/Image-B2vbEQJ2.png",
  Op = "./assets/imag2-CwDwaxXt.png";
function Qc({ show: e }) {
  return a.jsxs("section", {
    className: "unlock",
    children: [
      a.jsxs("div", {
        className: "unlocksection",
        children: [
          a.jsxs("div", {
            className: "unlock-team",
            children: [
              a.jsx("label", {
                children: "Ready to Unlock Your Team's Full Potential?",
              }),
              a.jsx(ue, {
                to: "/contact",
                children: a.jsx("label", {
                  className: "contact contact-us",
                  children: "Contact Us",
                }),
              }),
              " ",
            ],
          }),
          a.jsx("img", { src: zp, alt: "" }),
        ],
      }),
      e
        ? a.jsxs("div", {
            className: "imagesection",
            children: [
              a.jsx("img", { src: Op }),
              a.jsxs("div", {
                className: "empower",
                children: [
                  a.jsx("label", {
                    children: "Empowering Your Workforce for Success",
                  }),
                  a.jsx(ue, {
                    to: "/contact",
                    children: a.jsx("label", {
                      className: "contact contact-us",
                      children: "Contact Us",
                    }),
                  }),
                ],
              }),
            ],
          })
        : null,
    ],
  });
}
const Mp = "./assets/image3-CcaAZxZq.png";
function Fp() {
  return a.jsxs("section", {
    className: "choosesection",
    children: [
      a.jsx("img", { src: Mp, alt: "" }),
      a.jsxs("div", {
        className: "choose",
        children: [
          a.jsx("label", { children: "Why You Should Choose Us" }),
          a.jsxs("ul", {
            children: [
              a.jsxs("li", {
                children: [
                  a.jsx("span", { children: "Strategic People Management" }),
                  ": Aligning HR practices with business goals for sustainable growth and a strong company culture.",
                ],
              }),
              a.jsx("br", {}),
              a.jsx("br", {}),
              a.jsxs("li", {
                children: [
                  a.jsx("span", { children: "Tailored Solutions" }),
                  ": Personalised support that meets client needs and exceeds expectations.",
                ],
              }),
              a.jsx("br", {}),
              a.jsx("br", {}),
              a.jsxs("li", {
                children: [
                  a.jsx("span", { children: "Diverse Expertise" }),
                  ": Proven success across multiple industries, from FMCG to financial services and engineering.",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ip() {
  return (
    k.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    a.jsxs(a.Fragment, {
      children: [
        a.jsx(ts, {}),
        a.jsx(Lp, {}),
        a.jsx(Tp, {}),
        a.jsx(Qc, { show: !0 }),
        a.jsx(Fp, {}),
        a.jsx(es, {}),
      ],
    })
  );
}
const Dp = "./assets/location-NcjTZgfu.png";
function Up() {
  const [e, t] = k.useState(""),
    [n] = k.useState([
      "SQL Advisory",
      "Blackboard by SASL",
      "CraftCV by SASL",
      "Catalyst Collective by SASL",
      "PAST by SASL",
    ]),
    [r, l] = k.useState(!1);
  function i(s) {
    t(s), l(!1);
  }
  function o() {
    l((s) => !s);
  }
  return (
    k.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    a.jsxs("div", {
      className: "contactsection",
      children: [
        a.jsxs("div", {
          className: "get-in-touch",
          children: [
            a.jsxs("div", {
              className: "touch-form",
              children: [
                a.jsx("h2", { children: "Get in Touch" }),
                a.jsx("label", {
                  children: "Use the form below to contact us",
                }),
              ],
            }),
            a.jsxs("div", {
              className: "input-text",
              children: [
                a.jsxs("div", {
                  className: "select-service select",
                  children: [
                    a.jsxs("div", {
                      className: `select-list ${r ? "select-clicked" : ""}`,
                      onClick: o,
                      children: [
                        a.jsx("span", {
                          className: "selected-list",
                          children: e || "Select Service",
                        }),
                        a.jsx("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: a.jsx("path", {
                            d: "M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485",
                            stroke: "currentColor",
                            strokeOpacity: "0.8",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        }),
                      ],
                    }),
                    r &&
                      a.jsx("ul", {
                        className: "menu",
                        children: n.map((s) =>
                          a.jsxs(
                            "li",
                            {
                              className: `menu-item ${e === s ? "active" : ""}`,
                              onClick: () => i(s),
                              role: "option",
                              children: [s, a.jsx("hr", {})],
                            },
                            s
                          )
                        ),
                      }),
                  ],
                }),
                a.jsx("input", { type: "text", placeholder: "Full name" }),
                a.jsx("input", {
                  type: "phonenumber",
                  placeholder: "phone number",
                }),
                a.jsx("input", { type: "email", placeholder: "email address" }),
                a.jsx("textarea", {}),
              ],
            }),
            a.jsx("label", {
              className: "contact contact-us book",
              children: "Send Message",
            }),
            a.jsxs("div", {
              className: "info-container",
              children: [
                a.jsxs("div", {
                  className: "info",
                  children: [
                    a.jsx("svg", {
                      width: "23",
                      height: "19",
                      viewBox: "0 0 23 19",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: a.jsx("path", {
                        d: "M23 1.625V6.125L11.5 10.625L0 6.125V1.625C0 1.32663 0.12116 1.04048 0.336827 0.829505C0.552494 0.618527 0.845001 0.5 1.15 0.5H21.85C22.155 0.5 22.4475 0.618527 22.6632 0.829505C22.8788 1.04048 23 1.32663 23 1.625ZM0 8.54825V17.375C0 17.6734 0.12116 17.9595 0.336827 18.1705C0.552494 18.3815 0.845001 18.5 1.15 18.5H21.85C22.155 18.5 22.4475 18.3815 22.6632 18.1705C22.8788 17.9595 23 17.6734 23 17.375V8.54825L11.5 13.0483L0 8.54825Z",
                        fill: "#FF5A31",
                      }),
                    }),
                    a.jsx("label", { children: "info@sqladvisory.co" }),
                  ],
                }),
                a.jsxs("div", {
                  className: "info",
                  children: [
                    a.jsxs("svg", {
                      width: "24",
                      height: "33",
                      viewBox: "0 0 24 33",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        a.jsx("g", {
                          "clip-path": "url(#clip0_83_665)",
                          children: a.jsx("path", {
                            d: "M23.9993 12.5C23.9993 21.228 13.8455 31.482 13.4138 31.9142C13.0386 32.2892 12.5299 32.4999 11.9995 32.4999C11.4691 32.4999 10.9604 32.2892 10.5853 31.9142C10.153 31.4817 -0.000732422 21.228 -0.000732422 12.5C-0.000732422 9.3174 1.26355 6.26515 3.51399 4.01472C5.76442 1.76428 8.81667 0.5 11.9993 0.5C15.1819 0.5 18.2341 1.76428 20.4845 4.01472C22.735 6.26515 23.9993 9.3174 23.9993 12.5ZM11.9993 18.5C13.186 18.5 14.346 18.1481 15.3327 17.4888C16.3194 16.8295 17.0884 15.8925 17.5425 14.7961C17.9967 13.6997 18.1155 12.4933 17.884 11.3295C17.6525 10.1656 17.081 9.09647 16.2419 8.25736C15.4028 7.41824 14.3337 6.8468 13.1698 6.61529C12.0059 6.38378 10.7995 6.5026 9.70317 6.95672C8.60681 7.41085 7.66974 8.17988 7.01045 9.16658C6.35116 10.1533 5.99927 11.3133 5.99927 12.5C5.99923 13.2879 6.15441 14.0682 6.45592 14.7961C6.75744 15.5241 7.1994 16.1856 7.75655 16.7427C8.31371 17.2999 8.97516 17.7418 9.70313 18.0433C10.4311 18.3449 11.2113 18.5 11.9993 18.5Z",
                            fill: "#FF5A31",
                          }),
                        }),
                        a.jsx("defs", {
                          children: a.jsx("clipPath", {
                            id: "clip0_83_665",
                            children: a.jsx("rect", {
                              width: "24",
                              height: "32",
                              fill: "white",
                              transform: "translate(-0.000732422 0.5)",
                            }),
                          }),
                        }),
                      ],
                    }),
                    a.jsx("label", { children: "Gbagada, Lagos" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        a.jsx("img", { src: Dp, alt: "" }),
      ],
    })
  );
}
function Vp() {
  return a.jsxs(a.Fragment, {
    children: [a.jsx(ts, {}), a.jsx(Up, {}), a.jsx(es, {})],
  });
}
const Bp = "./assets/service1-BFlH7t-M.png",
  Ap = "./assets/service2-8KdPDdEE.png",
  Hp = "./assets/service3-BxvDgZhV.png",
  $p = "./assets/service4-BC5zaOED.png",
  Wp = "./assets/service5-B97gPx2-.png";
function Qp() {
  return a.jsxs("section", {
    className: "service",
    children: [
      a.jsx("label", { children: "Our Services" }),
      a.jsx("div", {
        className: "service-grid",
        children: a.jsxs("div", {
          className: "section1",
          children: [
            a.jsxs("div", {
              className: "service-grid-container",
              children: [
                a.jsx("img", { src: Bp, alt: "" }),
                a.jsxs("div", {
                  className: "service-book",
                  children: [
                    a.jsxs("div", {
                      className: "service1",
                      children: [
                        a.jsx("label", {
                          children: "SQL Advisory (People Management)",
                        }),
                        a.jsxs("p", {
                          children: [
                            "SASL’s SQL Advisory service empowers businesses with strategic HR solutions to optimise their workforce and drive organisational success.",
                            a.jsx("br", {}),
                            a.jsx("br", {}),
                            "Our People Management services encompass",
                            " ",
                            a.jsx("span", {
                              children: "Strategic HR Management",
                            }),
                            " (Developing and implementing effective HR strategies aligned with business objectives); ",
                            a.jsx("span", {
                              children: "Operational HR Support",
                            }),
                            " (Providing day-to-day HR support, including recruitment, onboarding, performance management, and employee relations); and",
                            " ",
                            a.jsx("span", { children: "Statutory Compliance" }),
                            " (Ensuring compliance with all relevant HR laws and regulations).",
                            a.jsx("br", {}),
                            a.jsx("br", {}),
                            "We believe that HR should be a strategic function that proactively addresses organisational needs, rather than a reactive response to issues. By partnering with SASL, you can optimise your human capital and achieve your business goals.",
                          ],
                        }),
                      ],
                    }),
                    " ",
                    a.jsx(ue, {
                      to: "/contact",
                      children: a.jsx("label", {
                        className: "contact contact-us book",
                        children: "Book Us Now",
                      }),
                    }),
                    " ",
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "service-grid-container policy",
              children: [
                " ",
                a.jsxs("div", {
                  className: "service-book service2-book",
                  children: [
                    a.jsxs("div", {
                      className: "service2",
                      children: [
                        a.jsx("label", {
                          children: "Blackboard by SASL (Policy Validation)",
                        }),
                        a.jsxs("p", {
                          children: [
                            "SASL’s Policy Validation service ensures your policies align with regulations and best practices. Our expert team meticulously reviews and validates a wide range of corporate, departmental, and industry-specific policies, to safeguard your compliance and mitigate risks.",
                            a.jsx("br", {}),
                            a.jsx("br", {}),
                            "We understand that staying compliant with ever-evolving regulations can be complex and time-consuming. Our comprehensive policy validation process involves:",
                            a.jsxs("ul", {
                              children: [
                                a.jsxs("li", {
                                  children: [
                                    a.jsx("span", {
                                      children: "Thorough review",
                                    }),
                                    ": Our experts carefully examine your policies to identify any inconsistencies, gaps, or areas requiring improvement.",
                                    " ",
                                  ],
                                }),
                                a.jsxs("li", {
                                  children: [
                                    a.jsx("span", {
                                      children: "Regulatory analysis",
                                    }),
                                    ": We compare your policies against relevant laws and regulations to ensure compliance.",
                                    " ",
                                  ],
                                }),
                                a.jsxs("li", {
                                  children: [
                                    a.jsx("span", {
                                      children: "Best practice assessment",
                                    }),
                                    ": We evaluate your policies against industry best practices to identify opportunities for enhancement.",
                                    " ",
                                  ],
                                }),
                                a.jsxs("li", {
                                  children: [
                                    a.jsx("span", {
                                      children: "Recommendations",
                                    }),
                                    ": We provide tailored recommendations to address any identified issues and improve your policies' effectiveness.",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    " ",
                    a.jsx(ue, {
                      to: "/contact",
                      children: a.jsx("label", {
                        className: "contact contact-us book",
                        children: "Book Us Now",
                      }),
                    }),
                    " ",
                  ],
                }),
                a.jsx("img", { src: Ap, alt: "" }),
              ],
            }),
            a.jsxs("div", {
              className: "service-grid-container",
              children: [
                " ",
                a.jsx("img", { src: Hp, alt: "" }),
                a.jsxs("div", {
                  className: "service-book",
                  children: [
                    a.jsxs("div", {
                      className: "service1",
                      children: [
                        a.jsx("label", {
                          children: "CraftCV by SASL (CV Writing)",
                        }),
                        a.jsx("p", {
                          children:
                            "SASL’s CV writing service transforms your profile into a powerful tool that showcases your unique value proposition. Our expertly crafted CVs help you stand out in the competitive job market by creating a compelling narrative that highlights your skills and achievements. We started this service to share our expertise and help individuals improve their job prospects through optimised resumes.",
                        }),
                      ],
                    }),
                    " ",
                    a.jsx(ue, {
                      to: "/contact",
                      children: a.jsx("label", {
                        className: "contact contact-us book",
                        children: "Book Us Now",
                      }),
                    }),
                    " ",
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "service-grid-container",
              children: [
                " ",
                a.jsxs("div", {
                  className: "service-book service2-book",
                  children: [
                    a.jsxs("div", {
                      className: "service2",
                      children: [
                        a.jsx("label", {
                          children:
                            "Catalyst Collective by SASL (Startup Support)",
                        }),
                        a.jsxs("p", {
                          children: [
                            "SASL’s Catalyst Collective is a startup support programme that equips startups with the foundational building blocks for long-term business success. Catalyst Collective empowers founders with the knowledge and skills required to build a resilient foundation for their ventures.",
                            a.jsx("br", {}),
                            a.jsx("br", {}),
                            "Catalyst Collective offers a unique blend of strategic insights and practical guidance. Through interactive sessions and expert consultations, the programme will set founders on the path to gaining mastery in critical areas like research & strategy, people management, legal structures, and operational frameworks. This ensures founders not only have a compelling business model but also the operational efficiency and strong team culture needed to thrive in today's competitive landscape.",
                          ],
                        }),
                      ],
                    }),
                    " ",
                    a.jsx(ue, {
                      to: "/contact",
                      children: a.jsx("label", {
                        className: "contact contact-us book",
                        children: "Book Us Now",
                      }),
                    }),
                    " ",
                  ],
                }),
                a.jsx("img", { src: $p, alt: "" }),
              ],
            }),
            a.jsxs("div", {
              className: "service-grid-container",
              children: [
                " ",
                a.jsx("img", { src: Wp, alt: "" }),
                a.jsxs("div", {
                  className: "service-book",
                  children: [
                    a.jsxs("div", {
                      className: "service1",
                      children: [
                        a.jsx("label", {
                          children:
                            "PAST by SASL (Retirement Planning & Support)",
                        }),
                        a.jsx("p", {
                          children:
                            "The Post Active Service Transition (PAST) programme is intended for those contemplating retirement from paid employment, for example, civil servants, private sector employees and military personnel. It would also cover those who had retired not too long ago and need help to refocus their efforts on living productively after active service. The programme covers topical matters, including understanding the transition process, managing finances, developing resumes, interviewing for private or public sector jobs, navigating the job market, and managing mental and emotional well-being.",
                        }),
                      ],
                    }),
                    " ",
                    a.jsx(ue, {
                      to: "/contact",
                      children: a.jsx("label", {
                        className: "contact contact-us book",
                        children: "Book Us Now",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Kp() {
  return (
    k.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    a.jsxs("div", {
      className: "section2",
      children: [
        a.jsx(ts, {}),
        a.jsx(Qp, {}),
        a.jsx(Qc, { show: !1 }),
        a.jsx(es, {}),
      ],
    })
  );
}
function Zp() {
  return a.jsx(Sp, {
    children: a.jsxs(mp, {
      children: [
        a.jsx(Br, { path: "/", element: a.jsx(Ip, {}) }),
        a.jsx(Br, { path: "services", element: a.jsx(Kp, {}) }),
        a.jsx(Br, { path: "contact", element: a.jsx(Vp, {}) }),
      ],
    }),
  });
}
Mc(document.getElementById("root")).render(
  a.jsx(k.StrictMode, { children: a.jsx(Zp, {}) })
);
