/** @format */

function M1(e, t) {
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
function R1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ka = { exports: {} },
  Ol = {},
  Ya = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wr = Symbol.for("react.element"),
  O1 = Symbol.for("react.portal"),
  z1 = Symbol.for("react.fragment"),
  I1 = Symbol.for("react.strict_mode"),
  F1 = Symbol.for("react.profiler"),
  V1 = Symbol.for("react.provider"),
  D1 = Symbol.for("react.context"),
  H1 = Symbol.for("react.forward_ref"),
  B1 = Symbol.for("react.suspense"),
  $1 = Symbol.for("react.memo"),
  A1 = Symbol.for("react.lazy"),
  Es = Symbol.iterator;
function U1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Es && e[Es]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xa = Object.assign,
  Ga = {};
function Ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ga),
    (this.updater = n || qa);
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ja() {}
Ja.prototype = Ln.prototype;
function _o(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ga),
    (this.updater = n || qa);
}
var Lo = (_o.prototype = new Ja());
Lo.constructor = _o;
Xa(Lo, Ln.prototype);
Lo.isPureReactComponent = !0;
var Ns = Array.isArray,
  ba = Object.prototype.hasOwnProperty,
  Po = { current: null },
  eu = { key: !0, ref: !0, __self: !0, __source: !0 };
function tu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ba.call(t, r) && !eu.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: wr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Po.current,
  };
}
function W1(e, t) {
  return {
    $$typeof: wr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function To(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wr;
}
function Z1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _s = /\/+/g;
function ti(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Z1("" + e.key)
    : t.toString(36);
}
function Kr(e, t, n, r, l) {
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
          case wr:
          case O1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + ti(o, 0) : r),
      Ns(l)
        ? ((n = ""),
          e != null && (n = e.replace(_s, "$&/") + "/"),
          Kr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (To(l) &&
            (l = W1(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(_s, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ns(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + ti(i, a);
      o += Kr(i, t, n, u, l);
    }
  else if (((u = U1(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + ti(i, a++)), (o += Kr(i, t, n, u, l));
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
function Lr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Kr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Q1(e) {
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
var ye = { current: null },
  Yr = { transition: null },
  K1 = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Yr,
    ReactCurrentOwner: Po,
  };
function nu() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: Lr,
  forEach: function (e, t, n) {
    Lr(
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
      Lr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Lr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!To(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = Ln;
z.Fragment = z1;
z.Profiler = F1;
z.PureComponent = _o;
z.StrictMode = I1;
z.Suspense = B1;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K1;
z.act = nu;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Xa({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Po.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      ba.call(t, u) &&
        !eu.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: wr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: D1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: V1, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = tu;
z.createFactory = function (e) {
  var t = tu.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: H1, render: e };
};
z.isValidElement = To;
z.lazy = function (e) {
  return { $$typeof: A1, _payload: { _status: -1, _result: e }, _init: Q1 };
};
z.memo = function (e, t) {
  return { $$typeof: $1, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Yr.transition;
  Yr.transition = {};
  try {
    e();
  } finally {
    Yr.transition = t;
  }
};
z.unstable_act = nu;
z.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ye.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
z.useId = function () {
  return ye.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ye.current.useRef(e);
};
z.useState = function (e) {
  return ye.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ye.current.useTransition();
};
z.version = "18.3.1";
Ya.exports = z;
var w = Ya.exports;
const B = R1(w),
  Y1 = M1({ __proto__: null, default: B }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var q1 = w,
  X1 = Symbol.for("react.element"),
  G1 = Symbol.for("react.fragment"),
  J1 = Object.prototype.hasOwnProperty,
  b1 = q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function ru(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) J1.call(t, r) && !ed.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: X1,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: b1.current,
  };
}
Ol.Fragment = G1;
Ol.jsx = ru;
Ol.jsxs = ru;
Ka.exports = Ol;
var s = Ka.exports,
  lu = { exports: {} },
  Oe = {},
  iu = { exports: {} },
  ou = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, M) {
    var O = _.length;
    _.push(M);
    e: for (; 0 < O; ) {
      var F = (O - 1) >>> 1,
        V = _[F];
      if (0 < l(V, M)) (_[F] = M), (_[O] = V), (O = F);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var M = _[0],
      O = _.pop();
    if (O !== M) {
      _[0] = O;
      e: for (var F = 0, V = _.length, ie = V >>> 1; F < ie; ) {
        var ee = 2 * (F + 1) - 1,
          we = _[ee],
          he = ee + 1,
          Xe = _[he];
        if (0 > l(we, O))
          he < V && 0 > l(Xe, we)
            ? ((_[F] = Xe), (_[he] = O), (F = he))
            : ((_[F] = we), (_[ee] = O), (F = ee));
        else if (he < V && 0 > l(Xe, O)) (_[F] = Xe), (_[he] = O), (F = he);
        else break e;
      }
    }
    return M;
  }
  function l(_, M) {
    var O = _.sortIndex - M.sortIndex;
    return O !== 0 ? O : _.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    c = [],
    m = 1,
    h = null,
    v = 3,
    x = !1,
    C = !1,
    y = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(_) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= _)
        r(c), (M.sortIndex = M.expirationTime), t(u, M);
      else break;
      M = n(c);
    }
  }
  function g(_) {
    if (((y = !1), f(_), !C))
      if (n(u) !== null) (C = !0), pt(E);
      else {
        var M = n(c);
        M !== null && _e(g, M.startTime - _);
      }
  }
  function E(_, M) {
    (C = !1), y && ((y = !1), p(j), (j = -1)), (x = !0);
    var O = v;
    try {
      for (
        f(M), h = n(u);
        h !== null && (!(h.expirationTime > M) || (_ && !X()));

      ) {
        var F = h.callback;
        if (typeof F == "function") {
          (h.callback = null), (v = h.priorityLevel);
          var V = F(h.expirationTime <= M);
          (M = e.unstable_now()),
            typeof V == "function" ? (h.callback = V) : h === n(u) && r(u),
            f(M);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var ie = !0;
      else {
        var ee = n(c);
        ee !== null && _e(g, ee.startTime - M), (ie = !1);
      }
      return ie;
    } finally {
      (h = null), (v = O), (x = !1);
    }
  }
  var L = !1,
    N = null,
    j = -1,
    R = 5,
    T = -1;
  function X() {
    return !(e.unstable_now() - T < R);
  }
  function xe() {
    if (N !== null) {
      var _ = e.unstable_now();
      T = _;
      var M = !0;
      try {
        M = N(!0, _);
      } finally {
        M ? Ie() : ((L = !1), (N = null));
      }
    } else L = !1;
  }
  var Ie;
  if (typeof d == "function")
    Ie = function () {
      d(xe);
    };
  else if (typeof MessageChannel < "u") {
    var Ae = new MessageChannel(),
      ft = Ae.port2;
    (Ae.port1.onmessage = xe),
      (Ie = function () {
        ft.postMessage(null);
      });
  } else
    Ie = function () {
      k(xe, 0);
    };
  function pt(_) {
    (N = _), L || ((L = !0), Ie());
  }
  function _e(_, M) {
    j = k(function () {
      _(e.unstable_now());
    }, M);
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
      C || x || ((C = !0), pt(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < _ ? Math.floor(1e3 / _) : 5);
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
          var M = 3;
          break;
        default:
          M = v;
      }
      var O = v;
      v = M;
      try {
        return _();
      } finally {
        v = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, M) {
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
      var O = v;
      v = _;
      try {
        return M();
      } finally {
        v = O;
      }
    }),
    (e.unstable_scheduleCallback = function (_, M, O) {
      var F = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? F + O : F))
          : (O = F),
        _)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = O + V),
        (_ = {
          id: m++,
          callback: M,
          priorityLevel: _,
          startTime: O,
          expirationTime: V,
          sortIndex: -1,
        }),
        O > F
          ? ((_.sortIndex = O),
            t(c, _),
            n(u) === null &&
              _ === n(c) &&
              (y ? (p(j), (j = -1)) : (y = !0), _e(g, O - F)))
          : ((_.sortIndex = V), t(u, _), C || x || ((C = !0), pt(E))),
        _
      );
    }),
    (e.unstable_shouldYield = X),
    (e.unstable_wrapCallback = function (_) {
      var M = v;
      return function () {
        var O = v;
        v = M;
        try {
          return _.apply(this, arguments);
        } finally {
          v = O;
        }
      };
    });
})(ou);
iu.exports = ou;
var td = iu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd = w,
  Re = td;
function S(e) {
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
var su = new Set(),
  er = {};
function Xt(e, t) {
  wn(e, t), wn(e + "Capture", t);
}
function wn(e, t) {
  for (er[e] = t, e = 0; e < t.length; e++) su.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Pi = Object.prototype.hasOwnProperty,
  rd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ls = {},
  Ps = {};
function ld(e) {
  return Pi.call(Ps, e)
    ? !0
    : Pi.call(Ls, e)
    ? !1
    : rd.test(e)
    ? (Ps[e] = !0)
    : ((Ls[e] = !0), !1);
}
function id(e, t, n, r) {
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
function od(e, t, n, r) {
  if (t === null || typeof t > "u" || id(e, t, n, r)) return !0;
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
function Ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Mo = /[\-:]([a-z])/g;
function Ro(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mo, Ro);
    ue[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mo, Ro);
    ue[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Mo, Ro);
  ue[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Oo(e, t, n, r) {
  var l = ue.hasOwnProperty(t) ? ue[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (od(t, n, l, r) && (n = null),
    r || l === null
      ? ld(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var dt = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pr = Symbol.for("react.element"),
  nn = Symbol.for("react.portal"),
  rn = Symbol.for("react.fragment"),
  zo = Symbol.for("react.strict_mode"),
  Ti = Symbol.for("react.profiler"),
  au = Symbol.for("react.provider"),
  uu = Symbol.for("react.context"),
  Io = Symbol.for("react.forward_ref"),
  Mi = Symbol.for("react.suspense"),
  Ri = Symbol.for("react.suspense_list"),
  Fo = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  cu = Symbol.for("react.offscreen"),
  Ts = Symbol.iterator;
function Mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ts && e[Ts]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  ni;
function Hn(e) {
  if (ni === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ni = (t && t[1]) || "";
    }
  return (
    `
` +
    ni +
    e
  );
}
var ri = !1;
function li(e, t) {
  if (!e || ri) return "";
  ri = !0;
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
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
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
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (ri = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hn(e) : "";
}
function sd(e) {
  switch (e.tag) {
    case 5:
      return Hn(e.type);
    case 16:
      return Hn("Lazy");
    case 13:
      return Hn("Suspense");
    case 19:
      return Hn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = li(e.type, !1)), e;
    case 11:
      return (e = li(e.type.render, !1)), e;
    case 1:
      return (e = li(e.type, !0)), e;
    default:
      return "";
  }
}
function Oi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case Ti:
      return "Profiler";
    case zo:
      return "StrictMode";
    case Mi:
      return "Suspense";
    case Ri:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case uu:
        return (e.displayName || "Context") + ".Consumer";
      case au:
        return (e._context.displayName || "Context") + ".Provider";
      case Io:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fo:
        return (
          (t = e.displayName || null), t !== null ? t : Oi(e.type) || "Memo"
        );
      case mt:
        (t = e._payload), (e = e._init);
        try {
          return Oi(e(t));
        } catch {}
    }
  return null;
}
function ad(e) {
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
      return Oi(t);
    case 8:
      return t === zo ? "StrictMode" : "Mode";
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
function Rt(e) {
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
function du(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ud(e) {
  var t = du(e) ? "checked" : "value",
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
function Tr(e) {
  e._valueTracker || (e._valueTracker = ud(e));
}
function fu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = du(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zi(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ms(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pu(e, t) {
  (t = t.checked), t != null && Oo(e, "checked", t, !1);
}
function Ii(e, t) {
  pu(e, t);
  var n = Rt(t.value),
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
    ? Fi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Fi(e, t.type, Rt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Rs(e, t, n) {
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
function Fi(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Bn = Array.isArray;
function mn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Os(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Bn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rt(n) };
}
function hu(e, t) {
  var n = Rt(t.value),
    r = Rt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Di(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? mu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Mr,
  vu = (function (e) {
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
        Mr = Mr || document.createElement("div"),
          Mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function tr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wn = {
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
  cd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wn).forEach(function (e) {
  cd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wn[t] = Wn[e]);
  });
});
function gu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wn.hasOwnProperty(e) && Wn[e])
    ? ("" + t).trim()
    : t + "px";
}
function yu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = gu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var dd = Y(
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
function Hi(e, t) {
  if (t) {
    if (dd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Bi(e, t) {
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
var $i = null;
function Vo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ai = null,
  vn = null,
  gn = null;
function Is(e) {
  if ((e = jr(e))) {
    if (typeof Ai != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Dl(t)), Ai(e.stateNode, e.type, t));
  }
}
function Cu(e) {
  vn ? (gn ? gn.push(e) : (gn = [e])) : (vn = e);
}
function xu() {
  if (vn) {
    var e = vn,
      t = gn;
    if (((gn = vn = null), Is(e), t)) for (e = 0; e < t.length; e++) Is(t[e]);
  }
}
function wu(e, t) {
  return e(t);
}
function ku() {}
var ii = !1;
function Su(e, t, n) {
  if (ii) return e(t, n);
  ii = !0;
  try {
    return wu(e, t, n);
  } finally {
    (ii = !1), (vn !== null || gn !== null) && (ku(), xu());
  }
}
function nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Dl(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Ui = !1;
if (st)
  try {
    var Rn = {};
    Object.defineProperty(Rn, "passive", {
      get: function () {
        Ui = !0;
      },
    }),
      window.addEventListener("test", Rn, Rn),
      window.removeEventListener("test", Rn, Rn);
  } catch {
    Ui = !1;
  }
function fd(e, t, n, r, l, i, o, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Zn = !1,
  sl = null,
  al = !1,
  Wi = null,
  pd = {
    onError: function (e) {
      (Zn = !0), (sl = e);
    },
  };
function hd(e, t, n, r, l, i, o, a, u) {
  (Zn = !1), (sl = null), fd.apply(pd, arguments);
}
function md(e, t, n, r, l, i, o, a, u) {
  if ((hd.apply(this, arguments), Zn)) {
    if (Zn) {
      var c = sl;
      (Zn = !1), (sl = null);
    } else throw Error(S(198));
    al || ((al = !0), (Wi = c));
  }
}
function Gt(e) {
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
function ju(e) {
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
function Fs(e) {
  if (Gt(e) !== e) throw Error(S(188));
}
function vd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gt(e)), t === null)) throw Error(S(188));
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
        if (i === n) return Fs(l), e;
        if (i === r) return Fs(l), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Eu(e) {
  return (e = vd(e)), e !== null ? Nu(e) : null;
}
function Nu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Nu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _u = Re.unstable_scheduleCallback,
  Vs = Re.unstable_cancelCallback,
  gd = Re.unstable_shouldYield,
  yd = Re.unstable_requestPaint,
  G = Re.unstable_now,
  Cd = Re.unstable_getCurrentPriorityLevel,
  Do = Re.unstable_ImmediatePriority,
  Lu = Re.unstable_UserBlockingPriority,
  ul = Re.unstable_NormalPriority,
  xd = Re.unstable_LowPriority,
  Pu = Re.unstable_IdlePriority,
  zl = null,
  et = null;
function wd(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(zl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : jd,
  kd = Math.log,
  Sd = Math.LN2;
function jd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((kd(e) / Sd) | 0)) | 0;
}
var Rr = 64,
  Or = 4194304;
function $n(e) {
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
function cl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = $n(a)) : ((i &= o), i !== 0 && (r = $n(i)));
  } else (o = n & ~l), o !== 0 ? (r = $n(o)) : i !== 0 && (r = $n(i));
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
      (n = 31 - Ke(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ed(e, t) {
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
function Nd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ke(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = Ed(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Zi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Tu() {
  var e = Rr;
  return (Rr <<= 1), !(Rr & 4194240) && (Rr = 64), e;
}
function oi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n);
}
function _d(e, t) {
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
    var l = 31 - Ke(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Ho(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function Mu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ru,
  Bo,
  Ou,
  zu,
  Iu,
  Qi = !1,
  zr = [],
  St = null,
  jt = null,
  Et = null,
  rr = new Map(),
  lr = new Map(),
  gt = [],
  Ld =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ds(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      St = null;
      break;
    case "dragenter":
    case "dragleave":
      jt = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      lr.delete(t.pointerId);
  }
}
function On(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = jr(t)), t !== null && Bo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Pd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (St = On(St, e, t, n, r, l)), !0;
    case "dragenter":
      return (jt = On(jt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Et = On(Et, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return rr.set(i, On(rr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), lr.set(i, On(lr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Fu(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = Gt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ju(n)), t !== null)) {
          (e.blockedOn = t),
            Iu(e.priority, function () {
              Ou(n);
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
function qr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ki(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ($i = r), n.target.dispatchEvent(r), ($i = null);
    } else return (t = jr(n)), t !== null && Bo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Hs(e, t, n) {
  qr(e) && n.delete(t);
}
function Td() {
  (Qi = !1),
    St !== null && qr(St) && (St = null),
    jt !== null && qr(jt) && (jt = null),
    Et !== null && qr(Et) && (Et = null),
    rr.forEach(Hs),
    lr.forEach(Hs);
}
function zn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Qi ||
      ((Qi = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Td)));
}
function ir(e) {
  function t(l) {
    return zn(l, e);
  }
  if (0 < zr.length) {
    zn(zr[0], e);
    for (var n = 1; n < zr.length; n++) {
      var r = zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    St !== null && zn(St, e),
      jt !== null && zn(jt, e),
      Et !== null && zn(Et, e),
      rr.forEach(t),
      lr.forEach(t),
      n = 0;
    n < gt.length;
    n++
  )
    (r = gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && ((n = gt[0]), n.blockedOn === null); )
    Fu(n), n.blockedOn === null && gt.shift();
}
var yn = dt.ReactCurrentBatchConfig,
  dl = !0;
function Md(e, t, n, r) {
  var l = D,
    i = yn.transition;
  yn.transition = null;
  try {
    (D = 1), $o(e, t, n, r);
  } finally {
    (D = l), (yn.transition = i);
  }
}
function Rd(e, t, n, r) {
  var l = D,
    i = yn.transition;
  yn.transition = null;
  try {
    (D = 4), $o(e, t, n, r);
  } finally {
    (D = l), (yn.transition = i);
  }
}
function $o(e, t, n, r) {
  if (dl) {
    var l = Ki(e, t, n, r);
    if (l === null) vi(e, t, r, fl, n), Ds(e, r);
    else if (Pd(l, e, t, n, r)) r.stopPropagation();
    else if ((Ds(e, r), t & 4 && -1 < Ld.indexOf(e))) {
      for (; l !== null; ) {
        var i = jr(l);
        if (
          (i !== null && Ru(i),
          (i = Ki(e, t, n, r)),
          i === null && vi(e, t, r, fl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else vi(e, t, r, null, n);
  }
}
var fl = null;
function Ki(e, t, n, r) {
  if (((fl = null), (e = Vo(r)), (e = Ht(e)), e !== null))
    if (((t = Gt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ju(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fl = e), null;
}
function Vu(e) {
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
      switch (Cd()) {
        case Do:
          return 1;
        case Lu:
          return 4;
        case ul:
        case xd:
          return 16;
        case Pu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null,
  Ao = null,
  Xr = null;
function Du() {
  if (Xr) return Xr;
  var e,
    t = Ao,
    n = t.length,
    r,
    l = "value" in Ct ? Ct.value : Ct.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Gr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ir() {
  return !0;
}
function Bs() {
  return !1;
}
function ze(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ir
        : Bs),
      (this.isPropagationStopped = Bs),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ir));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ir));
      },
      persist: function () {},
      isPersistent: Ir,
    }),
    t
  );
}
var Pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Uo = ze(Pn),
  Sr = Y({}, Pn, { view: 0, detail: 0 }),
  Od = ze(Sr),
  si,
  ai,
  In,
  Il = Y({}, Sr, {
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
    getModifierState: Wo,
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
        : (e !== In &&
            (In && e.type === "mousemove"
              ? ((si = e.screenX - In.screenX), (ai = e.screenY - In.screenY))
              : (ai = si = 0),
            (In = e)),
          si);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ai;
    },
  }),
  $s = ze(Il),
  zd = Y({}, Il, { dataTransfer: 0 }),
  Id = ze(zd),
  Fd = Y({}, Sr, { relatedTarget: 0 }),
  ui = ze(Fd),
  Vd = Y({}, Pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dd = ze(Vd),
  Hd = Y({}, Pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bd = ze(Hd),
  $d = Y({}, Pn, { data: 0 }),
  As = ze($d),
  Ad = {
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
  Ud = {
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
  Wd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wd[e]) ? !!t[e] : !1;
}
function Wo() {
  return Zd;
}
var Qd = Y({}, Sr, {
    key: function (e) {
      if (e.key) {
        var t = Ad[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ud[e.keyCode] || "Unidentified"
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
    getModifierState: Wo,
    charCode: function (e) {
      return e.type === "keypress" ? Gr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Kd = ze(Qd),
  Yd = Y({}, Il, {
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
  Us = ze(Yd),
  qd = Y({}, Sr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wo,
  }),
  Xd = ze(qd),
  Gd = Y({}, Pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jd = ze(Gd),
  bd = Y({}, Il, {
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
  ef = ze(bd),
  tf = [9, 13, 27, 32],
  Zo = st && "CompositionEvent" in window,
  Qn = null;
st && "documentMode" in document && (Qn = document.documentMode);
var nf = st && "TextEvent" in window && !Qn,
  Hu = st && (!Zo || (Qn && 8 < Qn && 11 >= Qn)),
  Ws = " ",
  Zs = !1;
function Bu(e, t) {
  switch (e) {
    case "keyup":
      return tf.indexOf(t.keyCode) !== -1;
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
function $u(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ln = !1;
function rf(e, t) {
  switch (e) {
    case "compositionend":
      return $u(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zs = !0), Ws);
    case "textInput":
      return (e = t.data), e === Ws && Zs ? null : e;
    default:
      return null;
  }
}
function lf(e, t) {
  if (ln)
    return e === "compositionend" || (!Zo && Bu(e, t))
      ? ((e = Du()), (Xr = Ao = Ct = null), (ln = !1), e)
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
      return Hu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var of = {
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
function Qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!of[e.type] : t === "textarea";
}
function Au(e, t, n, r) {
  Cu(r),
    (t = pl(t, "onChange")),
    0 < t.length &&
      ((n = new Uo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Kn = null,
  or = null;
function sf(e) {
  bu(e, 0);
}
function Fl(e) {
  var t = an(e);
  if (fu(t)) return e;
}
function af(e, t) {
  if (e === "change") return t;
}
var Uu = !1;
if (st) {
  var ci;
  if (st) {
    var di = "oninput" in document;
    if (!di) {
      var Ks = document.createElement("div");
      Ks.setAttribute("oninput", "return;"),
        (di = typeof Ks.oninput == "function");
    }
    ci = di;
  } else ci = !1;
  Uu = ci && (!document.documentMode || 9 < document.documentMode);
}
function Ys() {
  Kn && (Kn.detachEvent("onpropertychange", Wu), (or = Kn = null));
}
function Wu(e) {
  if (e.propertyName === "value" && Fl(or)) {
    var t = [];
    Au(t, or, e, Vo(e)), Su(sf, t);
  }
}
function uf(e, t, n) {
  e === "focusin"
    ? (Ys(), (Kn = t), (or = n), Kn.attachEvent("onpropertychange", Wu))
    : e === "focusout" && Ys();
}
function cf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Fl(or);
}
function df(e, t) {
  if (e === "click") return Fl(t);
}
function ff(e, t) {
  if (e === "input" || e === "change") return Fl(t);
}
function pf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : pf;
function sr(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Pi.call(t, l) || !qe(e[l], t[l])) return !1;
  }
  return !0;
}
function qs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xs(e, t) {
  var n = qs(e);
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
    n = qs(n);
  }
}
function Zu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qu() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function Qo(e) {
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
function hf(e) {
  var t = Qu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Qo(n)) {
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
          (l = Xs(n, i));
        var o = Xs(n, r);
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
var mf = st && "documentMode" in document && 11 >= document.documentMode,
  on = null,
  Yi = null,
  Yn = null,
  qi = !1;
function Gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qi ||
    on == null ||
    on !== ol(r) ||
    ((r = on),
    "selectionStart" in r && Qo(r)
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
    (Yn && sr(Yn, r)) ||
      ((Yn = r),
      (r = pl(Yi, "onSelect")),
      0 < r.length &&
        ((t = new Uo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = on))));
}
function Fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sn = {
    animationend: Fr("Animation", "AnimationEnd"),
    animationiteration: Fr("Animation", "AnimationIteration"),
    animationstart: Fr("Animation", "AnimationStart"),
    transitionend: Fr("Transition", "TransitionEnd"),
  },
  fi = {},
  Ku = {};
st &&
  ((Ku = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sn.animationend.animation,
    delete sn.animationiteration.animation,
    delete sn.animationstart.animation),
  "TransitionEvent" in window || delete sn.transitionend.transition);
function Vl(e) {
  if (fi[e]) return fi[e];
  if (!sn[e]) return e;
  var t = sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ku) return (fi[e] = t[n]);
  return e;
}
var Yu = Vl("animationend"),
  qu = Vl("animationiteration"),
  Xu = Vl("animationstart"),
  Gu = Vl("transitionend"),
  Ju = new Map(),
  Js =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  Ju.set(e, t), Xt(t, [e]);
}
for (var pi = 0; pi < Js.length; pi++) {
  var hi = Js[pi],
    vf = hi.toLowerCase(),
    gf = hi[0].toUpperCase() + hi.slice(1);
  zt(vf, "on" + gf);
}
zt(Yu, "onAnimationEnd");
zt(qu, "onAnimationIteration");
zt(Xu, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Gu, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
Xt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Xt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Xt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Xt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var An =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function bs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), md(r, t, void 0, e), (e.currentTarget = null);
}
function bu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          bs(l, a, c), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          bs(l, a, c), (i = u);
        }
    }
  }
  if (al) throw ((e = Wi), (al = !1), (Wi = null), e);
}
function U(e, t) {
  var n = t[eo];
  n === void 0 && (n = t[eo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ec(t, e, 2, !1), n.add(r));
}
function mi(e, t, n) {
  var r = 0;
  t && (r |= 4), ec(n, e, r, t);
}
var Vr = "_reactListening" + Math.random().toString(36).slice(2);
function ar(e) {
  if (!e[Vr]) {
    (e[Vr] = !0),
      su.forEach(function (n) {
        n !== "selectionchange" && (yf.has(n) || mi(n, !1, e), mi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vr] || ((t[Vr] = !0), mi("selectionchange", !1, t));
  }
}
function ec(e, t, n, r) {
  switch (Vu(t)) {
    case 1:
      var l = Md;
      break;
    case 4:
      l = Rd;
      break;
    default:
      l = $o;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ui ||
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
function vi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
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
        for (; a !== null; ) {
          if (((o = Ht(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Su(function () {
    var c = i,
      m = Vo(n),
      h = [];
    e: {
      var v = Ju.get(e);
      if (v !== void 0) {
        var x = Uo,
          C = e;
        switch (e) {
          case "keypress":
            if (Gr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Kd;
            break;
          case "focusin":
            (C = "focus"), (x = ui);
            break;
          case "focusout":
            (C = "blur"), (x = ui);
            break;
          case "beforeblur":
          case "afterblur":
            x = ui;
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
            x = $s;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Id;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Xd;
            break;
          case Yu:
          case qu:
          case Xu:
            x = Dd;
            break;
          case Gu:
            x = Jd;
            break;
          case "scroll":
            x = Od;
            break;
          case "wheel":
            x = ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Bd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Us;
        }
        var y = (t & 4) !== 0,
          k = !y && e === "scroll",
          p = y ? (v !== null ? v + "Capture" : null) : v;
        y = [];
        for (var d = c, f; d !== null; ) {
          f = d;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              p !== null && ((g = nr(d, p)), g != null && y.push(ur(d, g, f)))),
            k)
          )
            break;
          d = d.return;
        }
        0 < y.length &&
          ((v = new x(v, C, null, n, m)), h.push({ event: v, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          v &&
            n !== $i &&
            (C = n.relatedTarget || n.fromElement) &&
            (Ht(C) || C[at]))
        )
          break e;
        if (
          (x || v) &&
          ((v =
            m.window === m
              ? m
              : (v = m.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          x
            ? ((C = n.relatedTarget || n.toElement),
              (x = c),
              (C = C ? Ht(C) : null),
              C !== null &&
                ((k = Gt(C)), C !== k || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((x = null), (C = c)),
          x !== C)
        ) {
          if (
            ((y = $s),
            (g = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Us),
              (g = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (k = x == null ? v : an(x)),
            (f = C == null ? v : an(C)),
            (v = new y(g, d + "leave", x, n, m)),
            (v.target = k),
            (v.relatedTarget = f),
            (g = null),
            Ht(m) === c &&
              ((y = new y(p, d + "enter", C, n, m)),
              (y.target = f),
              (y.relatedTarget = k),
              (g = y)),
            (k = g),
            x && C)
          )
            t: {
              for (y = x, p = C, d = 0, f = y; f; f = tn(f)) d++;
              for (f = 0, g = p; g; g = tn(g)) f++;
              for (; 0 < d - f; ) (y = tn(y)), d--;
              for (; 0 < f - d; ) (p = tn(p)), f--;
              for (; d--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = tn(y)), (p = tn(p));
              }
              y = null;
            }
          else y = null;
          x !== null && ea(h, v, x, y, !1),
            C !== null && k !== null && ea(h, k, C, y, !0);
        }
      }
      e: {
        if (
          ((v = c ? an(c) : window),
          (x = v.nodeName && v.nodeName.toLowerCase()),
          x === "select" || (x === "input" && v.type === "file"))
        )
          var E = af;
        else if (Qs(v))
          if (Uu) E = ff;
          else {
            E = cf;
            var L = uf;
          }
        else
          (x = v.nodeName) &&
            x.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (E = df);
        if (E && (E = E(e, c))) {
          Au(h, E, n, m);
          break e;
        }
        L && L(e, v, c),
          e === "focusout" &&
            (L = v._wrapperState) &&
            L.controlled &&
            v.type === "number" &&
            Fi(v, "number", v.value);
      }
      switch (((L = c ? an(c) : window), e)) {
        case "focusin":
          (Qs(L) || L.contentEditable === "true") &&
            ((on = L), (Yi = c), (Yn = null));
          break;
        case "focusout":
          Yn = Yi = on = null;
          break;
        case "mousedown":
          qi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qi = !1), Gs(h, n, m);
          break;
        case "selectionchange":
          if (mf) break;
        case "keydown":
        case "keyup":
          Gs(h, n, m);
      }
      var N;
      if (Zo)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        ln
          ? Bu(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Hu &&
          n.locale !== "ko" &&
          (ln || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && ln && (N = Du())
            : ((Ct = m),
              (Ao = "value" in Ct ? Ct.value : Ct.textContent),
              (ln = !0))),
        (L = pl(c, j)),
        0 < L.length &&
          ((j = new As(j, e, null, n, m)),
          h.push({ event: j, listeners: L }),
          N ? (j.data = N) : ((N = $u(n)), N !== null && (j.data = N)))),
        (N = nf ? rf(e, n) : lf(e, n)) &&
          ((c = pl(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new As("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = N)));
    }
    bu(h, t);
  });
}
function ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = nr(e, n)),
      i != null && r.unshift(ur(e, i, l)),
      (i = nr(e, t)),
      i != null && r.push(ur(e, i, l))),
      (e = e.return);
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ea(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((u = nr(n, i)), u != null && o.unshift(ur(n, u, a)))
        : l || ((u = nr(n, i)), u != null && o.push(ur(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Cf = /\r\n?/g,
  xf = /\u0000|\uFFFD/g;
function ta(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Cf,
      `
`
    )
    .replace(xf, "");
}
function Dr(e, t, n) {
  if (((t = ta(t)), ta(e) !== t && n)) throw Error(S(425));
}
function hl() {}
var Xi = null,
  Gi = null;
function Ji(e, t) {
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
var bi = typeof setTimeout == "function" ? setTimeout : void 0,
  wf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  na = typeof Promise == "function" ? Promise : void 0,
  kf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof na < "u"
      ? function (e) {
          return na.resolve(null).then(e).catch(Sf);
        }
      : bi;
function Sf(e) {
  setTimeout(function () {
    throw e;
  });
}
function gi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), ir(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ir(t);
}
function Nt(e) {
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
function ra(e) {
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
var Tn = Math.random().toString(36).slice(2),
  be = "__reactFiber$" + Tn,
  cr = "__reactProps$" + Tn,
  at = "__reactContainer$" + Tn,
  eo = "__reactEvents$" + Tn,
  jf = "__reactListeners$" + Tn,
  Ef = "__reactHandles$" + Tn;
function Ht(e) {
  var t = e[be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ra(e); e !== null; ) {
          if ((n = e[be])) return n;
          e = ra(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function jr(e) {
  return (
    (e = e[be] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function an(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Dl(e) {
  return e[cr] || null;
}
var to = [],
  un = -1;
function It(e) {
  return { current: e };
}
function W(e) {
  0 > un || ((e.current = to[un]), (to[un] = null), un--);
}
function A(e, t) {
  un++, (to[un] = e.current), (e.current = t);
}
var Ot = {},
  pe = It(Ot),
  je = It(!1),
  Zt = Ot;
function kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ot;
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
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function ml() {
  W(je), W(pe);
}
function la(e, t, n) {
  if (pe.current !== Ot) throw Error(S(168));
  A(pe, t), A(je, n);
}
function tc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, ad(e) || "Unknown", l));
  return Y({}, n, r);
}
function vl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ot),
    (Zt = pe.current),
    A(pe, e),
    A(je, je.current),
    !0
  );
}
function ia(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = tc(e, t, Zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(je),
      W(pe),
      A(pe, e))
    : W(je),
    A(je, n);
}
var rt = null,
  Hl = !1,
  yi = !1;
function nc(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function Nf(e) {
  (Hl = !0), nc(e);
}
function Ft() {
  if (!yi && rt !== null) {
    yi = !0;
    var e = 0,
      t = D;
    try {
      var n = rt;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (Hl = !1);
    } catch (l) {
      throw (rt !== null && (rt = rt.slice(e + 1)), _u(Do, Ft), l);
    } finally {
      (D = t), (yi = !1);
    }
  }
  return null;
}
var cn = [],
  dn = 0,
  gl = null,
  yl = 0,
  Fe = [],
  Ve = 0,
  Qt = null,
  lt = 1,
  it = "";
function Vt(e, t) {
  (cn[dn++] = yl), (cn[dn++] = gl), (gl = e), (yl = t);
}
function rc(e, t, n) {
  (Fe[Ve++] = lt), (Fe[Ve++] = it), (Fe[Ve++] = Qt), (Qt = e);
  var r = lt;
  e = it;
  var l = 32 - Ke(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ke(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (lt = (1 << (32 - Ke(t) + l)) | (n << l) | r),
      (it = i + e);
  } else (lt = (1 << i) | (n << l) | r), (it = e);
}
function Ko(e) {
  e.return !== null && (Vt(e, 1), rc(e, 1, 0));
}
function Yo(e) {
  for (; e === gl; )
    (gl = cn[--dn]), (cn[dn] = null), (yl = cn[--dn]), (cn[dn] = null);
  for (; e === Qt; )
    (Qt = Fe[--Ve]),
      (Fe[Ve] = null),
      (it = Fe[--Ve]),
      (Fe[Ve] = null),
      (lt = Fe[--Ve]),
      (Fe[Ve] = null);
}
var Me = null,
  Pe = null,
  Z = !1,
  Qe = null;
function lc(e, t) {
  var n = De(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function oa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Me = e), (Pe = Nt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Me = e), (Pe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qt !== null ? { id: lt, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = De(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Me = e),
            (Pe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function no(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ro(e) {
  if (Z) {
    var t = Pe;
    if (t) {
      var n = t;
      if (!oa(e, t)) {
        if (no(e)) throw Error(S(418));
        t = Nt(n.nextSibling);
        var r = Me;
        t && oa(e, t)
          ? lc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Me = e));
      }
    } else {
      if (no(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Me = e);
    }
  }
}
function sa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function Hr(e) {
  if (e !== Me) return !1;
  if (!Z) return sa(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ji(e.type, e.memoizedProps))),
    t && (t = Pe))
  ) {
    if (no(e)) throw (ic(), Error(S(418)));
    for (; t; ) lc(e, t), (t = Nt(t.nextSibling));
  }
  if ((sa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Pe = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Pe = null;
    }
  } else Pe = Me ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function ic() {
  for (var e = Pe; e; ) e = Nt(e.nextSibling);
}
function Sn() {
  (Pe = Me = null), (Z = !1);
}
function qo(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var _f = dt.ReactCurrentBatchConfig;
function Fn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Br(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function aa(e) {
  var t = e._init;
  return t(e._payload);
}
function oc(e) {
  function t(p, d) {
    if (e) {
      var f = p.deletions;
      f === null ? ((p.deletions = [d]), (p.flags |= 16)) : f.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function l(p, d) {
    return (p = Tt(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, d, f) {
    return (
      (p.index = f),
      e
        ? ((f = p.alternate),
          f !== null
            ? ((f = f.index), f < d ? ((p.flags |= 2), d) : f)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, d, f, g) {
    return d === null || d.tag !== 6
      ? ((d = Ei(f, p.mode, g)), (d.return = p), d)
      : ((d = l(d, f)), (d.return = p), d);
  }
  function u(p, d, f, g) {
    var E = f.type;
    return E === rn
      ? m(p, d, f.props.children, g, f.key)
      : d !== null &&
        (d.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === mt &&
            aa(E) === d.type))
      ? ((g = l(d, f.props)), (g.ref = Fn(p, d, f)), (g.return = p), g)
      : ((g = ll(f.type, f.key, f.props, null, p.mode, g)),
        (g.ref = Fn(p, d, f)),
        (g.return = p),
        g);
  }
  function c(p, d, f, g) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== f.containerInfo ||
      d.stateNode.implementation !== f.implementation
      ? ((d = Ni(f, p.mode, g)), (d.return = p), d)
      : ((d = l(d, f.children || [])), (d.return = p), d);
  }
  function m(p, d, f, g, E) {
    return d === null || d.tag !== 7
      ? ((d = Ut(f, p.mode, g, E)), (d.return = p), d)
      : ((d = l(d, f)), (d.return = p), d);
  }
  function h(p, d, f) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Ei("" + d, p.mode, f)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Pr:
          return (
            (f = ll(d.type, d.key, d.props, null, p.mode, f)),
            (f.ref = Fn(p, null, d)),
            (f.return = p),
            f
          );
        case nn:
          return (d = Ni(d, p.mode, f)), (d.return = p), d;
        case mt:
          var g = d._init;
          return h(p, g(d._payload), f);
      }
      if (Bn(d) || Mn(d))
        return (d = Ut(d, p.mode, f, null)), (d.return = p), d;
      Br(p, d);
    }
    return null;
  }
  function v(p, d, f, g) {
    var E = d !== null ? d.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : a(p, d, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Pr:
          return f.key === E ? u(p, d, f, g) : null;
        case nn:
          return f.key === E ? c(p, d, f, g) : null;
        case mt:
          return (E = f._init), v(p, d, E(f._payload), g);
      }
      if (Bn(f) || Mn(f)) return E !== null ? null : m(p, d, f, g, null);
      Br(p, f);
    }
    return null;
  }
  function x(p, d, f, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (p = p.get(f) || null), a(d, p, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Pr:
          return (p = p.get(g.key === null ? f : g.key) || null), u(d, p, g, E);
        case nn:
          return (p = p.get(g.key === null ? f : g.key) || null), c(d, p, g, E);
        case mt:
          var L = g._init;
          return x(p, d, f, L(g._payload), E);
      }
      if (Bn(g) || Mn(g)) return (p = p.get(f) || null), m(d, p, g, E, null);
      Br(d, g);
    }
    return null;
  }
  function C(p, d, f, g) {
    for (
      var E = null, L = null, N = d, j = (d = 0), R = null;
      N !== null && j < f.length;
      j++
    ) {
      N.index > j ? ((R = N), (N = null)) : (R = N.sibling);
      var T = v(p, N, f[j], g);
      if (T === null) {
        N === null && (N = R);
        break;
      }
      e && N && T.alternate === null && t(p, N),
        (d = i(T, d, j)),
        L === null ? (E = T) : (L.sibling = T),
        (L = T),
        (N = R);
    }
    if (j === f.length) return n(p, N), Z && Vt(p, j), E;
    if (N === null) {
      for (; j < f.length; j++)
        (N = h(p, f[j], g)),
          N !== null &&
            ((d = i(N, d, j)), L === null ? (E = N) : (L.sibling = N), (L = N));
      return Z && Vt(p, j), E;
    }
    for (N = r(p, N); j < f.length; j++)
      (R = x(N, p, j, f[j], g)),
        R !== null &&
          (e && R.alternate !== null && N.delete(R.key === null ? j : R.key),
          (d = i(R, d, j)),
          L === null ? (E = R) : (L.sibling = R),
          (L = R));
    return (
      e &&
        N.forEach(function (X) {
          return t(p, X);
        }),
      Z && Vt(p, j),
      E
    );
  }
  function y(p, d, f, g) {
    var E = Mn(f);
    if (typeof E != "function") throw Error(S(150));
    if (((f = E.call(f)), f == null)) throw Error(S(151));
    for (
      var L = (E = null), N = d, j = (d = 0), R = null, T = f.next();
      N !== null && !T.done;
      j++, T = f.next()
    ) {
      N.index > j ? ((R = N), (N = null)) : (R = N.sibling);
      var X = v(p, N, T.value, g);
      if (X === null) {
        N === null && (N = R);
        break;
      }
      e && N && X.alternate === null && t(p, N),
        (d = i(X, d, j)),
        L === null ? (E = X) : (L.sibling = X),
        (L = X),
        (N = R);
    }
    if (T.done) return n(p, N), Z && Vt(p, j), E;
    if (N === null) {
      for (; !T.done; j++, T = f.next())
        (T = h(p, T.value, g)),
          T !== null &&
            ((d = i(T, d, j)), L === null ? (E = T) : (L.sibling = T), (L = T));
      return Z && Vt(p, j), E;
    }
    for (N = r(p, N); !T.done; j++, T = f.next())
      (T = x(N, p, j, T.value, g)),
        T !== null &&
          (e && T.alternate !== null && N.delete(T.key === null ? j : T.key),
          (d = i(T, d, j)),
          L === null ? (E = T) : (L.sibling = T),
          (L = T));
    return (
      e &&
        N.forEach(function (xe) {
          return t(p, xe);
        }),
      Z && Vt(p, j),
      E
    );
  }
  function k(p, d, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === rn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Pr:
          e: {
            for (var E = f.key, L = d; L !== null; ) {
              if (L.key === E) {
                if (((E = f.type), E === rn)) {
                  if (L.tag === 7) {
                    n(p, L.sibling),
                      (d = l(L, f.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  L.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === mt &&
                    aa(E) === L.type)
                ) {
                  n(p, L.sibling),
                    (d = l(L, f.props)),
                    (d.ref = Fn(p, L, f)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, L);
                break;
              } else t(p, L);
              L = L.sibling;
            }
            f.type === rn
              ? ((d = Ut(f.props.children, p.mode, g, f.key)),
                (d.return = p),
                (p = d))
              : ((g = ll(f.type, f.key, f.props, null, p.mode, g)),
                (g.ref = Fn(p, d, f)),
                (g.return = p),
                (p = g));
          }
          return o(p);
        case nn:
          e: {
            for (L = f.key; d !== null; ) {
              if (d.key === L)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === f.containerInfo &&
                  d.stateNode.implementation === f.implementation
                ) {
                  n(p, d.sibling),
                    (d = l(d, f.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = Ni(f, p.mode, g)), (d.return = p), (p = d);
          }
          return o(p);
        case mt:
          return (L = f._init), k(p, d, L(f._payload), g);
      }
      if (Bn(f)) return C(p, d, f, g);
      if (Mn(f)) return y(p, d, f, g);
      Br(p, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = l(d, f)), (d.return = p), (p = d))
          : (n(p, d), (d = Ei(f, p.mode, g)), (d.return = p), (p = d)),
        o(p))
      : n(p, d);
  }
  return k;
}
var jn = oc(!0),
  sc = oc(!1),
  Cl = It(null),
  xl = null,
  fn = null,
  Xo = null;
function Go() {
  Xo = fn = xl = null;
}
function Jo(e) {
  var t = Cl.current;
  W(Cl), (e._currentValue = t);
}
function lo(e, t, n) {
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
function Cn(e, t) {
  (xl = e),
    (Xo = fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Se = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Xo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fn === null)) {
      if (xl === null) throw Error(S(308));
      (fn = e), (xl.dependencies = { lanes: 0, firstContext: e });
    } else fn = fn.next = e;
  return t;
}
var Bt = null;
function bo(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function ac(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), bo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ut(e, r)
  );
}
function ut(e, t) {
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
var vt = !1;
function es(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function uc(e, t) {
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
function ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ut(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), bo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function Jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ho(e, n);
  }
}
function ua(e, t) {
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
function wl(e, t, n, r) {
  var l = e.updateQueue;
  vt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), o === null ? (i = c) : (o.next = c), (o = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (a = m.lastBaseUpdate),
      a !== o &&
        (a === null ? (m.firstBaseUpdate = c) : (a.next = c),
        (m.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (m = c = u = null), (a = i);
    do {
      var v = a.lane,
        x = a.eventTime;
      if ((r & v) === v) {
        m !== null &&
          (m = m.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var C = e,
            y = a;
          switch (((v = t), (x = n), y.tag)) {
            case 1:
              if (((C = y.payload), typeof C == "function")) {
                h = C.call(x, h, v);
                break e;
              }
              h = C;
              break e;
            case 3:
              C.flags = (C.flags & -65537) | 128;
            case 0:
              if (
                ((C = y.payload),
                (v = typeof C == "function" ? C.call(x, h, v) : C),
                v == null)
              )
                break e;
              h = Y({}, h, v);
              break e;
            case 2:
              vt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [a]) : v.push(a));
      } else
        (x = {
          eventTime: x,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          m === null ? ((c = m = x), (u = h)) : (m = m.next = x),
          (o |= v);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (v = a),
          (a = v.next),
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
    (Yt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function ca(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var Er = {},
  tt = It(Er),
  dr = It(Er),
  fr = It(Er);
function $t(e) {
  if (e === Er) throw Error(S(174));
  return e;
}
function ts(e, t) {
  switch ((A(fr, t), A(dr, e), A(tt, Er), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Di(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Di(t, e));
  }
  W(tt), A(tt, t);
}
function En() {
  W(tt), W(dr), W(fr);
}
function cc(e) {
  $t(fr.current);
  var t = $t(tt.current),
    n = Di(t, e.type);
  t !== n && (A(dr, e), A(tt, n));
}
function ns(e) {
  dr.current === e && (W(tt), W(dr));
}
var Q = It(0);
function kl(e) {
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
var Ci = [];
function rs() {
  for (var e = 0; e < Ci.length; e++)
    Ci[e]._workInProgressVersionPrimary = null;
  Ci.length = 0;
}
var br = dt.ReactCurrentDispatcher,
  xi = dt.ReactCurrentBatchConfig,
  Kt = 0,
  K = null,
  te = null,
  re = null,
  Sl = !1,
  qn = !1,
  pr = 0,
  Lf = 0;
function ce() {
  throw Error(S(321));
}
function ls(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n])) return !1;
  return !0;
}
function is(e, t, n, r, l, i) {
  if (
    ((Kt = i),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (br.current = e === null || e.memoizedState === null ? Rf : Of),
    (e = n(r, l)),
    qn)
  ) {
    i = 0;
    do {
      if (((qn = !1), (pr = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (re = te = null),
        (t.updateQueue = null),
        (br.current = zf),
        (e = n(r, l));
    } while (qn);
  }
  if (
    ((br.current = jl),
    (t = te !== null && te.next !== null),
    (Kt = 0),
    (re = te = K = null),
    (Sl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function os() {
  var e = pr !== 0;
  return (pr = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (K.memoizedState = re = e) : (re = re.next = e), re;
}
function $e() {
  if (te === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = re === null ? K.memoizedState : re.next;
  if (t !== null) (re = t), (te = e);
  else {
    if (e === null) throw Error(S(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      re === null ? (K.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wi(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = te,
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
    var a = (o = null),
      u = null,
      c = i;
    do {
      var m = c.lane;
      if ((Kt & m) === m)
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
        u === null ? ((a = u = h), (o = r)) : (u = u.next = h),
          (K.lanes |= m),
          (Yt |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? (o = r) : (u.next = a),
      qe(r, t.memoizedState) || (Se = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (K.lanes |= i), (Yt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ki(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    qe(i, t.memoizedState) || (Se = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function dc() {}
function fc(e, t) {
  var n = K,
    r = $e(),
    l = t(),
    i = !qe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Se = !0)),
    (r = r.queue),
    ss(mc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      mr(9, hc.bind(null, n, r, l, t), void 0, null),
      le === null)
    )
      throw Error(S(349));
    Kt & 30 || pc(n, t, l);
  }
  return l;
}
function pc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vc(t) && gc(e);
}
function mc(e, t, n) {
  return n(function () {
    vc(t) && gc(e);
  });
}
function vc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function gc(e) {
  var t = ut(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function da(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Mf.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function mr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function yc() {
  return $e().memoizedState;
}
function el(e, t, n, r) {
  var l = Je();
  (K.flags |= e),
    (l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bl(e, t, n, r) {
  var l = $e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (te !== null) {
    var o = te.memoizedState;
    if (((i = o.destroy), r !== null && ls(r, o.deps))) {
      l.memoizedState = mr(t, n, i, r);
      return;
    }
  }
  (K.flags |= e), (l.memoizedState = mr(1 | t, n, i, r));
}
function fa(e, t) {
  return el(8390656, 8, e, t);
}
function ss(e, t) {
  return Bl(2048, 8, e, t);
}
function Cc(e, t) {
  return Bl(4, 2, e, t);
}
function xc(e, t) {
  return Bl(4, 4, e, t);
}
function wc(e, t) {
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
function kc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bl(4, 4, wc.bind(null, t, e), n)
  );
}
function as() {}
function Sc(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ls(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function jc(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ls(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ec(e, t, n) {
  return Kt & 21
    ? (qe(n, t) || ((n = Tu()), (K.lanes |= n), (Yt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Se = !0)), (e.memoizedState = n));
}
function Pf(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xi.transition;
  xi.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (xi.transition = r);
  }
}
function Nc() {
  return $e().memoizedState;
}
function Tf(e, t, n) {
  var r = Pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _c(e))
  )
    Lc(t, n);
  else if (((n = ac(e, t, n, r)), n !== null)) {
    var l = ge();
    Ye(n, e, r, l), Pc(n, t, r);
  }
}
function Mf(e, t, n) {
  var r = Pt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_c(e)) Lc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), qe(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), bo(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ac(e, t, l, r)),
      n !== null && ((l = ge()), Ye(n, e, r, l), Pc(n, t, r));
  }
}
function _c(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Lc(e, t) {
  qn = Sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Pc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ho(e, n);
  }
}
var jl = {
    readContext: Be,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  Rf = {
    readContext: Be,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: fa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        el(4194308, 4, wc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return el(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return el(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
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
        (e = e.dispatch = Tf.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: da,
    useDebugValue: as,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = da(!1),
        t = e[0];
      return (e = Pf.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        l = Je();
      if (Z) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(S(349));
        Kt & 30 || pc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        fa(mc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        mr(9, hc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = le.identifierPrefix;
      if (Z) {
        var n = it,
          r = lt;
        (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Lf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Of = {
    readContext: Be,
    useCallback: Sc,
    useContext: Be,
    useEffect: ss,
    useImperativeHandle: kc,
    useInsertionEffect: Cc,
    useLayoutEffect: xc,
    useMemo: jc,
    useReducer: wi,
    useRef: yc,
    useState: function () {
      return wi(hr);
    },
    useDebugValue: as,
    useDeferredValue: function (e) {
      var t = $e();
      return Ec(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = wi(hr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: dc,
    useSyncExternalStore: fc,
    useId: Nc,
    unstable_isNewReconciler: !1,
  },
  zf = {
    readContext: Be,
    useCallback: Sc,
    useContext: Be,
    useEffect: ss,
    useImperativeHandle: kc,
    useInsertionEffect: Cc,
    useLayoutEffect: xc,
    useMemo: jc,
    useReducer: ki,
    useRef: yc,
    useState: function () {
      return ki(hr);
    },
    useDebugValue: as,
    useDeferredValue: function (e) {
      var t = $e();
      return te === null ? (t.memoizedState = e) : Ec(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = ki(hr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: dc,
    useSyncExternalStore: fc,
    useId: Nc,
    unstable_isNewReconciler: !1,
  };
function We(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function io(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      l = Pt(e),
      i = ot(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = _t(e, i, l)),
      t !== null && (Ye(t, e, l, r), Jr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      l = Pt(e),
      i = ot(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = _t(e, i, l)),
      t !== null && (Ye(t, e, l, r), Jr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ge(),
      r = Pt(e),
      l = ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = _t(e, l, r)),
      t !== null && (Ye(t, e, r, n), Jr(t, e, r));
  },
};
function pa(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !sr(n, r) || !sr(l, i)
      : !0
  );
}
function Tc(e, t, n) {
  var r = !1,
    l = Ot,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Be(i))
      : ((l = Ee(t) ? Zt : pe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? kn(e, l) : Ot)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ha(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $l.enqueueReplaceState(t, t.state, null);
}
function oo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), es(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Be(i))
    : ((i = Ee(t) ? Zt : pe.current), (l.context = kn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (io(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && $l.enqueueReplaceState(l, l.state, null),
      wl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += sd(r)), (r = r.return);
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
function Si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function so(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var If = typeof WeakMap == "function" ? WeakMap : Map;
function Mc(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Nl || ((Nl = !0), (yo = r)), so(e, t);
    }),
    n
  );
}
function Rc(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        so(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        so(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ma(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new If();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = qf.bind(null, e, t, n)), t.then(e, e));
}
function va(e) {
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
function ga(e, t, n, r, l) {
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
              : ((t = ot(-1, 1)), (t.tag = 2), _t(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ff = dt.ReactCurrentOwner,
  Se = !1;
function me(e, t, n, r) {
  t.child = e === null ? sc(t, null, n, r) : jn(t, e.child, n, r);
}
function ya(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Cn(t, l),
    (r = is(e, t, n, r, i, l)),
    (n = os()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (Z && n && Ko(t), (t.flags |= 1), me(e, t, r, l), t.child)
  );
}
function Ca(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !vs(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Oc(e, t, i, r, l))
      : ((e = ll(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : sr), n(o, r) && e.ref === t.ref)
    )
      return ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Tt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Oc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (sr(i, r) && e.ref === t.ref)
      if (((Se = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Se = !0);
      else return (t.lanes = e.lanes), ct(e, t, l);
  }
  return ao(e, t, n, r, l);
}
function zc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(hn, Le),
        (Le |= n);
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
          A(hn, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        A(hn, Le),
        (Le |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(hn, Le),
      (Le |= r);
  return me(e, t, l, n), t.child;
}
function Ic(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ao(e, t, n, r, l) {
  var i = Ee(n) ? Zt : pe.current;
  return (
    (i = kn(t, i)),
    Cn(t, l),
    (n = is(e, t, n, r, i, l)),
    (r = os()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (Z && r && Ko(t), (t.flags |= 1), me(e, t, n, l), t.child)
  );
}
function xa(e, t, n, r, l) {
  if (Ee(n)) {
    var i = !0;
    vl(t);
  } else i = !1;
  if ((Cn(t, l), t.stateNode === null))
    tl(e, t), Tc(t, n, r), oo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Be(c))
      : ((c = Ee(n) ? Zt : pe.current), (c = kn(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && ha(t, o, r, c)),
      (vt = !1);
    var v = t.memoizedState;
    (o.state = v),
      wl(t, r, o, l),
      (u = t.memoizedState),
      a !== r || v !== u || je.current || vt
        ? (typeof m == "function" && (io(t, n, m, r), (u = t.memoizedState)),
          (a = vt || pa(t, n, a, r, v, u, c))
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
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      uc(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : We(t.type, a)),
      (o.props = c),
      (h = t.pendingProps),
      (v = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Be(u))
        : ((u = Ee(n) ? Zt : pe.current), (u = kn(t, u)));
    var x = n.getDerivedStateFromProps;
    (m =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== h || v !== u) && ha(t, o, r, u)),
      (vt = !1),
      (v = t.memoizedState),
      (o.state = v),
      wl(t, r, o, l);
    var C = t.memoizedState;
    a !== h || v !== C || je.current || vt
      ? (typeof x == "function" && (io(t, n, x, r), (C = t.memoizedState)),
        (c = vt || pa(t, n, c, r, v, C, u) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, C, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, C, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = C)),
        (o.props = r),
        (o.state = C),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return uo(e, t, n, r, i, l);
}
function uo(e, t, n, r, l, i) {
  Ic(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ia(t, n, !1), ct(e, t, i);
  (r = t.stateNode), (Ff.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = jn(t, e.child, null, i)), (t.child = jn(t, null, a, i)))
      : me(e, t, a, i),
    (t.memoizedState = r.state),
    l && ia(t, n, !0),
    t.child
  );
}
function Fc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? la(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && la(e, t.context, !1),
    ts(e, t.containerInfo);
}
function wa(e, t, n, r, l) {
  return Sn(), qo(l), (t.flags |= 256), me(e, t, n, r), t.child;
}
var co = { dehydrated: null, treeContext: null, retryLane: 0 };
function fo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vc(e, t, n) {
  var r = t.pendingProps,
    l = Q.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A(Q, l & 1),
    e === null)
  )
    return (
      ro(t),
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
                : (i = Wl(o, r, 0, null)),
              (e = Ut(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = fo(n)),
              (t.memoizedState = co),
              e)
            : us(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Vf(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Tt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = Tt(a, i)) : ((i = Ut(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? fo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = co),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Tt(i, { mode: "visible", children: r.children })),
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
function us(e, t) {
  return (
    (t = Wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $r(e, t, n, r) {
  return (
    r !== null && qo(r),
    jn(t, e.child, null, n),
    (e = us(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Si(Error(S(422)))), $r(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Wl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Ut(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && jn(t, e.child, null, o),
        (t.child.memoizedState = fo(o)),
        (t.memoizedState = co),
        i);
  if (!(t.mode & 1)) return $r(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(S(419))), (r = Si(i, r, void 0)), $r(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Se || a)) {
    if (((r = le), r !== null)) {
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
          ((i.retryLane = l), ut(e, l), Ye(r, e, l, -1));
    }
    return ms(), (r = Si(Error(S(421)))), $r(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Xf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Pe = Nt(l.nextSibling)),
      (Me = t),
      (Z = !0),
      (Qe = null),
      e !== null &&
        ((Fe[Ve++] = lt),
        (Fe[Ve++] = it),
        (Fe[Ve++] = Qt),
        (lt = e.id),
        (it = e.overflow),
        (Qt = t)),
      (t = us(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ka(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), lo(e.return, t, n);
}
function ji(e, t, n, r, l) {
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
function Dc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((me(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ka(e, n, t);
        else if (e.tag === 19) ka(e, n, t);
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
  if ((A(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && kl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ji(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && kl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ji(t, !0, n, null, i);
        break;
      case "together":
        ji(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function tl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Tt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Df(e, t, n) {
  switch (t.tag) {
    case 3:
      Fc(t), Sn();
      break;
    case 5:
      cc(t);
      break;
    case 1:
      Ee(t.type) && vl(t);
      break;
    case 4:
      ts(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(Cl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Vc(e, t, n)
          : (A(Q, Q.current & 1),
            (e = ct(e, t, n)),
            e !== null ? e.sibling : null);
      A(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zc(e, t, n);
  }
  return ct(e, t, n);
}
var Hc, po, Bc, $c;
Hc = function (e, t) {
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
po = function () {};
Bc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), $t(tt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = zi(e, l)), (r = zi(e, r)), (i = []);
        break;
      case "select":
        (l = Y({}, l, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Vi(e, l)), (r = Vi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = hl);
    }
    Hi(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (er.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (er.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && U("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
$c = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vn(e, t) {
  if (!Z)
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
function de(e) {
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
function Hf(e, t, n) {
  var r = t.pendingProps;
  switch ((Yo(t), t.tag)) {
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
      return de(t), null;
    case 1:
      return Ee(t.type) && ml(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        En(),
        W(je),
        W(pe),
        rs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (wo(Qe), (Qe = null)))),
        po(e, t),
        de(t),
        null
      );
    case 5:
      ns(t);
      var l = $t(fr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Bc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return de(t), null;
        }
        if (((e = $t(tt.current)), Hr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[be] = t), (r[cr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < An.length; l++) U(An[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Ms(r, i), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Os(r, i), U("invalid", r);
          }
          Hi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : er.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Tr(r), Rs(r, i, !0);
              break;
            case "textarea":
              Tr(r), zs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = hl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = mu(n)),
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
            (e[be] = t),
            (e[cr] = r),
            Hc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Bi(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < An.length; l++) U(An[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                Ms(e, r), (l = zi(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Y({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Os(e, r), (l = Vi(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            Hi(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? yu(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && vu(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && tr(e, u)
                    : typeof u == "number" && tr(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (er.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && U("scroll", e)
                      : u != null && Oo(e, i, u, o));
              }
            switch (n) {
              case "input":
                Tr(e), Rs(e, r, !1);
                break;
              case "textarea":
                Tr(e), zs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? mn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      mn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = hl);
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
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) $c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = $t(fr.current)), $t(tt.current), Hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[be] = t),
            (i = r.nodeValue !== n) && ((e = Me), e !== null))
          )
            switch (e.tag) {
              case 3:
                Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[be] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (W(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Pe !== null && t.mode & 1 && !(t.flags & 128))
          ic(), Sn(), (t.flags |= 98560), (i = !1);
        else if (((i = Hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[be] = t;
          } else
            Sn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (i = !1);
        } else Qe !== null && (wo(Qe), (Qe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ne === 0 && (ne = 3) : ms())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        En(), po(e, t), e === null && ar(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return Jo(t.type._context), de(t), null;
    case 17:
      return Ee(t.type) && ml(), de(t), null;
    case 19:
      if ((W(Q), (i = t.memoizedState), i === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Vn(i, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = kl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Vn(i, !1),
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
                return A(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > _n &&
            ((t.flags |= 128), (r = !0), Vn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = kl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !Z)
            )
              return de(t), null;
          } else
            2 * G() - i.renderingStartTime > _n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vn(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = Q.current),
          A(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        hs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Bf(e, t) {
  switch ((Yo(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && ml(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        En(),
        W(je),
        W(pe),
        rs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ns(t), null;
    case 13:
      if ((W(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        Sn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(Q), null;
    case 4:
      return En(), null;
    case 10:
      return Jo(t.type._context), null;
    case 22:
    case 23:
      return hs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ar = !1,
  fe = !1,
  $f = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function ho(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Sa = !1;
function Af(e, t) {
  if (((Xi = dl), (e = Qu()), Qo(e))) {
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
            a = -1,
            u = -1,
            c = 0,
            m = 0,
            h = e,
            v = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (l !== 0 && h.nodeType !== 3) || (a = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (u = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (x = h.firstChild) !== null;

            )
              (v = h), (h = x);
            for (;;) {
              if (h === e) break t;
              if (
                (v === n && ++c === l && (a = o),
                v === i && ++m === r && (u = o),
                (x = h.nextSibling) !== null)
              )
                break;
              (h = v), (v = h.parentNode);
            }
            h = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gi = { focusedElem: e, selectionRange: n }, dl = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var C = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (C !== null) {
                  var y = C.memoizedProps,
                    k = C.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : We(t.type, y),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (g) {
          q(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (C = Sa), (Sa = !1), C;
}
function Xn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ho(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Al(e, t) {
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
function mo(e) {
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
function Ac(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ac(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[be], delete t[cr], delete t[eo], delete t[jf], delete t[Ef])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Uc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ja(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Uc(e.return)) return null;
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
function vo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vo(e, t, n), e = e.sibling; e !== null; ) vo(e, t, n), (e = e.sibling);
}
function go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (go(e, t, n), e = e.sibling; e !== null; ) go(e, t, n), (e = e.sibling);
}
var oe = null,
  Ze = !1;
function ht(e, t, n) {
  for (n = n.child; n !== null; ) Wc(e, t, n), (n = n.sibling);
}
function Wc(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(zl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || pn(n, t);
    case 6:
      var r = oe,
        l = Ze;
      (oe = null),
        ht(e, t, n),
        (oe = r),
        (Ze = l),
        oe !== null &&
          (Ze
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (Ze
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? gi(e.parentNode, n)
              : e.nodeType === 1 && gi(e, n),
            ir(e))
          : gi(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (l = Ze),
        (oe = n.stateNode.containerInfo),
        (Ze = !0),
        ht(e, t, n),
        (oe = r),
        (Ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ho(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      ht(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          q(n, t, a);
        }
      ht(e, t, n);
      break;
    case 21:
      ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), ht(e, t, n), (fe = r))
        : ht(e, t, n);
      break;
    default:
      ht(e, t, n);
  }
}
function Ea(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $f()),
      t.forEach(function (r) {
        var l = Gf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (oe = a.stateNode), (Ze = !1);
              break e;
            case 3:
              (oe = a.stateNode.containerInfo), (Ze = !0);
              break e;
            case 4:
              (oe = a.stateNode.containerInfo), (Ze = !0);
              break e;
          }
          a = a.return;
        }
        if (oe === null) throw Error(S(160));
        Wc(i, o, l), (oe = null), (Ze = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        q(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Zc(t, e), (t = t.sibling);
}
function Zc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ge(e), r & 4)) {
        try {
          Xn(3, e, e.return), Al(3, e);
        } catch (y) {
          q(e, e.return, y);
        }
        try {
          Xn(5, e, e.return);
        } catch (y) {
          q(e, e.return, y);
        }
      }
      break;
    case 1:
      Ue(t, e), Ge(e), r & 512 && n !== null && pn(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Ge(e),
        r & 512 && n !== null && pn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          tr(l, "");
        } catch (y) {
          q(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && pu(l, i),
              Bi(a, o);
            var c = Bi(a, i);
            for (o = 0; o < u.length; o += 2) {
              var m = u[o],
                h = u[o + 1];
              m === "style"
                ? yu(l, h)
                : m === "dangerouslySetInnerHTML"
                ? vu(l, h)
                : m === "children"
                ? tr(l, h)
                : Oo(l, m, h, c);
            }
            switch (a) {
              case "input":
                Ii(l, i);
                break;
              case "textarea":
                hu(l, i);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? mn(l, !!i.multiple, x, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? mn(l, !!i.multiple, i.defaultValue, !0)
                      : mn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[cr] = i;
          } catch (y) {
            q(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (y) {
          q(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ir(t.containerInfo);
        } catch (y) {
          q(e, e.return, y);
        }
      break;
    case 4:
      Ue(t, e), Ge(e);
      break;
    case 13:
      Ue(t, e),
        Ge(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (fs = G())),
        r & 4 && Ea(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (c = fe) || m), Ue(t, e), (fe = c)) : Ue(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (P = e, m = e.child; m !== null; ) {
            for (h = P = m; P !== null; ) {
              switch (((v = P), (x = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xn(4, v, v.return);
                  break;
                case 1:
                  pn(v, v.return);
                  var C = v.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (C.props = t.memoizedProps),
                        (C.state = t.memoizedState),
                        C.componentWillUnmount();
                    } catch (y) {
                      q(r, n, y);
                    }
                  }
                  break;
                case 5:
                  pn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    _a(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = v), (P = x)) : _a(h);
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
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = gu("display", o)));
              } catch (y) {
                q(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (y) {
                q(e, e.return, y);
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
      Ue(t, e), Ge(e), r & 4 && Ea(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Uc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (tr(l, ""), (r.flags &= -33));
          var i = ja(e);
          go(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = ja(e);
          vo(e, a, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Uf(e, t, n) {
  (P = e), Qc(e);
}
function Qc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Ar;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || fe;
        a = Ar;
        var c = fe;
        if (((Ar = o), (fe = u) && !c))
          for (P = l; P !== null; )
            (o = P),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? La(l)
                : u !== null
                ? ((u.return = o), (P = u))
                : La(l);
        for (; i !== null; ) (P = i), Qc(i), (i = i.sibling);
        (P = l), (Ar = a), (fe = c);
      }
      Na(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (P = i)) : Na(e);
  }
}
function Na(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || Al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : We(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ca(t, i, r);
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
                ca(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
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
                    h !== null && ir(h);
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
              throw Error(S(163));
          }
        fe || (t.flags & 512 && mo(t));
      } catch (v) {
        q(t, t.return, v);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function _a(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function La(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Al(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, l, u);
            }
          }
          var i = t.return;
          try {
            mo(t);
          } catch (u) {
            q(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            mo(t);
          } catch (u) {
            q(t, o, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (P = a);
      break;
    }
    P = t.return;
  }
}
var Wf = Math.ceil,
  El = dt.ReactCurrentDispatcher,
  cs = dt.ReactCurrentOwner,
  He = dt.ReactCurrentBatchConfig,
  I = 0,
  le = null,
  J = null,
  ae = 0,
  Le = 0,
  hn = It(0),
  ne = 0,
  vr = null,
  Yt = 0,
  Ul = 0,
  ds = 0,
  Gn = null,
  ke = null,
  fs = 0,
  _n = 1 / 0,
  nt = null,
  Nl = !1,
  yo = null,
  Lt = null,
  Ur = !1,
  xt = null,
  _l = 0,
  Jn = 0,
  Co = null,
  nl = -1,
  rl = 0;
function ge() {
  return I & 6 ? G() : nl !== -1 ? nl : (nl = G());
}
function Pt(e) {
  return e.mode & 1
    ? I & 2 && ae !== 0
      ? ae & -ae
      : _f.transition !== null
      ? (rl === 0 && (rl = Tu()), rl)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vu(e.type))),
        e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < Jn) throw ((Jn = 0), (Co = null), Error(S(185)));
  kr(e, n, r),
    (!(I & 2) || e !== le) &&
      (e === le && (!(I & 2) && (Ul |= n), ne === 4 && yt(e, ae)),
      Ne(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((_n = G() + 500), Hl && Ft()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Nd(e, t);
  var r = cl(e, e === le ? ae : 0);
  if (r === 0)
    n !== null && Vs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vs(n), t === 1))
      e.tag === 0 ? Nf(Pa.bind(null, e)) : nc(Pa.bind(null, e)),
        kf(function () {
          !(I & 6) && Ft();
        }),
        (n = null);
    else {
      switch (Mu(r)) {
        case 1:
          n = Do;
          break;
        case 4:
          n = Lu;
          break;
        case 16:
          n = ul;
          break;
        case 536870912:
          n = Pu;
          break;
        default:
          n = ul;
      }
      n = e1(n, Kc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Kc(e, t) {
  if (((nl = -1), (rl = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (xn() && e.callbackNode !== n) return null;
  var r = cl(e, e === le ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = qc();
    (le !== e || ae !== t) && ((nt = null), (_n = G() + 500), At(e, t));
    do
      try {
        Kf();
        break;
      } catch (a) {
        Yc(e, a);
      }
    while (!0);
    Go(),
      (El.current = i),
      (I = l),
      J !== null ? (t = 0) : ((le = null), (ae = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Zi(e)), l !== 0 && ((r = l), (t = xo(e, l)))), t === 1)
    )
      throw ((n = vr), At(e, 0), yt(e, r), Ne(e, G()), n);
    if (t === 6) yt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Zf(l) &&
          ((t = Ll(e, r)),
          t === 2 && ((i = Zi(e)), i !== 0 && ((r = i), (t = xo(e, i)))),
          t === 1))
      )
        throw ((n = vr), At(e, 0), yt(e, r), Ne(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Dt(e, ke, nt);
          break;
        case 3:
          if (
            (yt(e, r), (r & 130023424) === r && ((t = fs + 500 - G()), 10 < t))
          ) {
            if (cl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ge(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = bi(Dt.bind(null, e, ke, nt), t);
            break;
          }
          Dt(e, ke, nt);
          break;
        case 4:
          if ((yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ke(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = G() - r),
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
                : 1960 * Wf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bi(Dt.bind(null, e, ke, nt), r);
            break;
          }
          Dt(e, ke, nt);
          break;
        case 5:
          Dt(e, ke, nt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ne(e, G()), e.callbackNode === n ? Kc.bind(null, e) : null;
}
function xo(e, t) {
  var n = Gn;
  return (
    e.current.memoizedState.isDehydrated && (At(e, t).flags |= 256),
    (e = Ll(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && wo(t)),
    e
  );
}
function wo(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Zf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!qe(i(), l)) return !1;
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
function yt(e, t) {
  for (
    t &= ~ds,
      t &= ~Ul,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Pa(e) {
  if (I & 6) throw Error(S(327));
  xn();
  var t = cl(e, 0);
  if (!(t & 1)) return Ne(e, G()), null;
  var n = Ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zi(e);
    r !== 0 && ((t = r), (n = xo(e, r)));
  }
  if (n === 1) throw ((n = vr), At(e, 0), yt(e, t), Ne(e, G()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dt(e, ke, nt),
    Ne(e, G()),
    null
  );
}
function ps(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((_n = G() + 500), Hl && Ft());
  }
}
function qt(e) {
  xt !== null && xt.tag === 0 && !(I & 6) && xn();
  var t = I;
  I |= 1;
  var n = He.transition,
    r = D;
  try {
    if (((He.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (He.transition = n), (I = t), !(I & 6) && Ft();
  }
}
function hs() {
  (Le = hn.current), W(hn);
}
function At(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wf(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((Yo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ml();
          break;
        case 3:
          En(), W(je), W(pe), rs();
          break;
        case 5:
          ns(r);
          break;
        case 4:
          En();
          break;
        case 13:
          W(Q);
          break;
        case 19:
          W(Q);
          break;
        case 10:
          Jo(r.type._context);
          break;
        case 22:
        case 23:
          hs();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (J = e = Tt(e.current, null)),
    (ae = Le = t),
    (ne = 0),
    (vr = null),
    (ds = Ul = Yt = 0),
    (ke = Gn = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((n = Bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Bt = null;
  }
  return e;
}
function Yc(e, t) {
  do {
    var n = J;
    try {
      if ((Go(), (br.current = jl), Sl)) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Sl = !1;
      }
      if (
        ((Kt = 0),
        (re = te = K = null),
        (qn = !1),
        (pr = 0),
        (cs.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (vr = t), (J = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = ae),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            m = a,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = m.alternate;
            v
              ? ((m.updateQueue = v.updateQueue),
                (m.memoizedState = v.memoizedState),
                (m.lanes = v.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var x = va(o);
          if (x !== null) {
            (x.flags &= -257),
              ga(x, o, a, i, t),
              x.mode & 1 && ma(i, c, t),
              (t = x),
              (u = c);
            var C = t.updateQueue;
            if (C === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else C.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ma(i, c, t), ms();
              break e;
            }
            u = Error(S(426));
          }
        } else if (Z && a.mode & 1) {
          var k = va(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              ga(k, o, a, i, t),
              qo(Nn(u, a));
            break e;
          }
        }
        (i = u = Nn(u, a)),
          ne !== 4 && (ne = 2),
          Gn === null ? (Gn = [i]) : Gn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Mc(i, u, t);
              ua(i, p);
              break e;
            case 1:
              a = u;
              var d = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Rc(i, a, t);
                ua(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gc(n);
    } catch (E) {
      (t = E), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qc() {
  var e = El.current;
  return (El.current = jl), e === null ? jl : e;
}
function ms() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    le === null || (!(Yt & 268435455) && !(Ul & 268435455)) || yt(le, ae);
}
function Ll(e, t) {
  var n = I;
  I |= 2;
  var r = qc();
  (le !== e || ae !== t) && ((nt = null), At(e, t));
  do
    try {
      Qf();
      break;
    } catch (l) {
      Yc(e, l);
    }
  while (!0);
  if ((Go(), (I = n), (El.current = r), J !== null)) throw Error(S(261));
  return (le = null), (ae = 0), ne;
}
function Qf() {
  for (; J !== null; ) Xc(J);
}
function Kf() {
  for (; J !== null && !gd(); ) Xc(J);
}
function Xc(e) {
  var t = bc(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gc(e) : (J = t),
    (cs.current = null);
}
function Gc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Bf(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (J = null);
        return;
      }
    } else if (((n = Hf(n, t, Le)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Dt(e, t, n) {
  var r = D,
    l = He.transition;
  try {
    (He.transition = null), (D = 1), Yf(e, t, n, r);
  } finally {
    (He.transition = l), (D = r);
  }
  return null;
}
function Yf(e, t, n, r) {
  do xn();
  while (xt !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (_d(e, i),
    e === le && ((J = le = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ur ||
      ((Ur = !0),
      e1(ul, function () {
        return xn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = He.transition), (He.transition = null);
    var o = D;
    D = 1;
    var a = I;
    (I |= 4),
      (cs.current = null),
      Af(e, n),
      Zc(n, e),
      hf(Gi),
      (dl = !!Xi),
      (Gi = Xi = null),
      (e.current = n),
      Uf(n),
      yd(),
      (I = a),
      (D = o),
      (He.transition = i);
  } else e.current = n;
  if (
    (Ur && ((Ur = !1), (xt = e), (_l = l)),
    (i = e.pendingLanes),
    i === 0 && (Lt = null),
    wd(n.stateNode),
    Ne(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Nl) throw ((Nl = !1), (e = yo), (yo = null), e);
  return (
    _l & 1 && e.tag !== 0 && xn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Co ? Jn++ : ((Jn = 0), (Co = e))) : (Jn = 0),
    Ft(),
    null
  );
}
function xn() {
  if (xt !== null) {
    var e = Mu(_l),
      t = He.transition,
      n = D;
    try {
      if (((He.transition = null), (D = 16 > e ? 16 : e), xt === null))
        var r = !1;
      else {
        if (((e = xt), (xt = null), (_l = 0), I & 6)) throw Error(S(331));
        var l = I;
        for (I |= 4, P = e.current; P !== null; ) {
          var i = P,
            o = i.child;
          if (P.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (P = c; P !== null; ) {
                  var m = P;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (P = h);
                  else
                    for (; P !== null; ) {
                      m = P;
                      var v = m.sibling,
                        x = m.return;
                      if ((Ac(m), m === c)) {
                        P = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = x), (P = v);
                        break;
                      }
                      P = x;
                    }
                }
              }
              var C = i.alternate;
              if (C !== null) {
                var y = C.child;
                if (y !== null) {
                  C.child = null;
                  do {
                    var k = y.sibling;
                    (y.sibling = null), (y = k);
                  } while (y !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (P = o);
          else
            e: for (; P !== null; ) {
              if (((i = P), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xn(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (P = p);
                break e;
              }
              P = i.return;
            }
        }
        var d = e.current;
        for (P = d; P !== null; ) {
          o = P;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (P = f);
          else
            e: for (o = d; P !== null; ) {
              if (((a = P), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Al(9, a);
                  }
                } catch (E) {
                  q(a, a.return, E);
                }
              if (a === o) {
                P = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (P = g);
                break e;
              }
              P = a.return;
            }
        }
        if (
          ((I = l), Ft(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(zl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (He.transition = t);
    }
  }
  return !1;
}
function Ta(e, t, n) {
  (t = Nn(n, t)),
    (t = Mc(e, t, 1)),
    (e = _t(e, t, 1)),
    (t = ge()),
    e !== null && (kr(e, 1, t), Ne(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) Ta(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ta(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          (e = Nn(n, e)),
            (e = Rc(t, e, 1)),
            (t = _t(t, e, 1)),
            (e = ge()),
            t !== null && (kr(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function qf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ae & n) === n &&
      (ne === 4 || (ne === 3 && (ae & 130023424) === ae && 500 > G() - fs)
        ? At(e, 0)
        : (ds |= n)),
    Ne(e, t);
}
function Jc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Or), (Or <<= 1), !(Or & 130023424) && (Or = 4194304))
      : (t = 1));
  var n = ge();
  (e = ut(e, t)), e !== null && (kr(e, t, n), Ne(e, n));
}
function Xf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jc(e, n);
}
function Gf(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), Jc(e, n);
}
var bc;
bc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Se = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Se = !1), Df(e, t, n);
      Se = !!(e.flags & 131072);
    }
  else (Se = !1), Z && t.flags & 1048576 && rc(t, yl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      tl(e, t), (e = t.pendingProps);
      var l = kn(t, pe.current);
      Cn(t, n), (l = is(null, t, r, e, l, n));
      var i = os();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((i = !0), vl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            es(t),
            (l.updater = $l),
            (t.stateNode = l),
            (l._reactInternals = t),
            oo(t, r, e, n),
            (t = uo(null, t, r, !0, i, n)))
          : ((t.tag = 0), Z && i && Ko(t), me(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (tl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = bf(r)),
          (e = We(r, e)),
          l)
        ) {
          case 0:
            t = ao(null, t, r, e, n);
            break e;
          case 1:
            t = xa(null, t, r, e, n);
            break e;
          case 11:
            t = ya(null, t, r, e, n);
            break e;
          case 14:
            t = Ca(null, t, r, We(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : We(r, l)),
        ao(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : We(r, l)),
        xa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Fc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          uc(e, t),
          wl(t, r, null, n);
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
            (l = Nn(Error(S(423)), t)), (t = wa(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Nn(Error(S(424)), t)), (t = wa(e, t, r, n, l));
            break e;
          } else
            for (
              Pe = Nt(t.stateNode.containerInfo.firstChild),
                Me = t,
                Z = !0,
                Qe = null,
                n = sc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Sn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cc(t),
        e === null && ro(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ji(r, l) ? (o = null) : i !== null && Ji(r, i) && (t.flags |= 32),
        Ic(e, t),
        me(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ro(t), null;
    case 13:
      return Vc(e, t, n);
    case 4:
      return (
        ts(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jn(t, null, r, n)) : me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : We(r, l)),
        ya(e, t, r, l, n)
      );
    case 7:
      return me(e, t, t.pendingProps, n), t.child;
    case 8:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          A(Cl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (qe(i.value, o)) {
            if (i.children === l.children && !je.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = ot(-1, n & -n)), (u.tag = 2);
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
                      lo(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  lo(o, n, t),
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
        me(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Cn(t, n),
        (l = Be(l)),
        (r = r(l)),
        (t.flags |= 1),
        me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = We(r, t.pendingProps)),
        (l = We(r.type, l)),
        Ca(e, t, r, l, n)
      );
    case 15:
      return Oc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : We(r, l)),
        tl(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), vl(t)) : (e = !1),
        Cn(t, n),
        Tc(t, r, l),
        oo(t, r, l, n),
        uo(null, t, r, !0, e, n)
      );
    case 19:
      return Dc(e, t, n);
    case 22:
      return zc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function e1(e, t) {
  return _u(e, t);
}
function Jf(e, t, n, r) {
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
function De(e, t, n, r) {
  return new Jf(e, t, n, r);
}
function vs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bf(e) {
  if (typeof e == "function") return vs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Io)) return 11;
    if (e === Fo) return 14;
  }
  return 2;
}
function Tt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = De(e.tag, t, e.key, e.mode)),
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
function ll(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) vs(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case rn:
        return Ut(n.children, l, i, t);
      case zo:
        (o = 8), (l |= 8);
        break;
      case Ti:
        return (
          (e = De(12, n, t, l | 2)), (e.elementType = Ti), (e.lanes = i), e
        );
      case Mi:
        return (e = De(13, n, t, l)), (e.elementType = Mi), (e.lanes = i), e;
      case Ri:
        return (e = De(19, n, t, l)), (e.elementType = Ri), (e.lanes = i), e;
      case cu:
        return Wl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case au:
              o = 10;
              break e;
            case uu:
              o = 9;
              break e;
            case Io:
              o = 11;
              break e;
            case Fo:
              o = 14;
              break e;
            case mt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = De(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ut(e, t, n, r) {
  return (e = De(7, e, r, t)), (e.lanes = n), e;
}
function Wl(e, t, n, r) {
  return (
    (e = De(22, e, r, t)),
    (e.elementType = cu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ei(e, t, n) {
  return (e = De(6, e, null, t)), (e.lanes = n), e;
}
function Ni(e, t, n) {
  return (
    (t = De(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function e2(e, t, n, r, l) {
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
    (this.eventTimes = oi(0)),
    (this.expirationTimes = oi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = oi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function gs(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new e2(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = De(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    es(i),
    e
  );
}
function t2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function t1(e) {
  if (!e) return Ot;
  e = e._reactInternals;
  e: {
    if (Gt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return tc(e, n, t);
  }
  return t;
}
function n1(e, t, n, r, l, i, o, a, u) {
  return (
    (e = gs(n, r, !0, e, l, i, o, a, u)),
    (e.context = t1(null)),
    (n = e.current),
    (r = ge()),
    (l = Pt(n)),
    (i = ot(r, l)),
    (i.callback = t ?? null),
    _t(n, i, l),
    (e.current.lanes = l),
    kr(e, l, r),
    Ne(e, r),
    e
  );
}
function Zl(e, t, n, r) {
  var l = t.current,
    i = ge(),
    o = Pt(l);
  return (
    (n = t1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = _t(l, t, o)),
    e !== null && (Ye(e, l, o, i), Jr(e, l, o)),
    o
  );
}
function Pl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ma(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ys(e, t) {
  Ma(e, t), (e = e.alternate) && Ma(e, t);
}
function n2() {
  return null;
}
var r1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Cs(e) {
  this._internalRoot = e;
}
Ql.prototype.render = Cs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Zl(e, t, null, null);
};
Ql.prototype.unmount = Cs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qt(function () {
      Zl(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function Ql(e) {
  this._internalRoot = e;
}
Ql.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
    gt.splice(n, 0, e), n === 0 && Fu(e);
  }
};
function xs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ra() {}
function r2(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Pl(o);
        i.call(c);
      };
    }
    var o = n1(t, r, e, 0, null, !1, !1, "", Ra);
    return (
      (e._reactRootContainer = o),
      (e[at] = o.current),
      ar(e.nodeType === 8 ? e.parentNode : e),
      qt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Pl(u);
      a.call(c);
    };
  }
  var u = gs(e, 0, !1, null, null, !1, !1, "", Ra);
  return (
    (e._reactRootContainer = u),
    (e[at] = u.current),
    ar(e.nodeType === 8 ? e.parentNode : e),
    qt(function () {
      Zl(t, u, n, r);
    }),
    u
  );
}
function Yl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Pl(o);
        a.call(u);
      };
    }
    Zl(t, o, e, l);
  } else o = r2(n, t, e, l, r);
  return Pl(o);
}
Ru = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $n(t.pendingLanes);
        n !== 0 &&
          (Ho(t, n | 1), Ne(t, G()), !(I & 6) && ((_n = G() + 500), Ft()));
      }
      break;
    case 13:
      qt(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var l = ge();
          Ye(r, e, 1, l);
        }
      }),
        ys(e, 1);
  }
};
Bo = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = ge();
      Ye(t, e, 134217728, n);
    }
    ys(e, 134217728);
  }
};
Ou = function (e) {
  if (e.tag === 13) {
    var t = Pt(e),
      n = ut(e, t);
    if (n !== null) {
      var r = ge();
      Ye(n, e, t, r);
    }
    ys(e, t);
  }
};
zu = function () {
  return D;
};
Iu = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Ai = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ii(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Dl(r);
            if (!l) throw Error(S(90));
            fu(r), Ii(r, l);
          }
        }
      }
      break;
    case "textarea":
      hu(e, n);
      break;
    case "select":
      (t = n.value), t != null && mn(e, !!n.multiple, t, !1);
  }
};
wu = ps;
ku = qt;
var l2 = { usingClientEntryPoint: !1, Events: [jr, an, Dl, Cu, xu, ps] },
  Dn = {
    findFiberByHostInstance: Ht,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  i2 = {
    bundleType: Dn.bundleType,
    version: Dn.version,
    rendererPackageName: Dn.rendererPackageName,
    rendererConfig: Dn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Eu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Dn.findFiberByHostInstance || n2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Wr.isDisabled && Wr.supportsFiber)
    try {
      (zl = Wr.inject(i2)), (et = Wr);
    } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l2;
Oe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xs(t)) throw Error(S(200));
  return t2(e, t, null, n);
};
Oe.createRoot = function (e, t) {
  if (!xs(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = r1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = gs(e, 1, !1, null, null, n, !1, r, l)),
    (e[at] = t.current),
    ar(e.nodeType === 8 ? e.parentNode : e),
    new Cs(t)
  );
};
Oe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Eu(t)), (e = e === null ? null : e.stateNode), e;
};
Oe.flushSync = function (e) {
  return qt(e);
};
Oe.hydrate = function (e, t, n) {
  if (!Kl(t)) throw Error(S(200));
  return Yl(null, e, t, !0, n);
};
Oe.hydrateRoot = function (e, t, n) {
  if (!xs(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = r1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = n1(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[at] = t.current),
    ar(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ql(t);
};
Oe.render = function (e, t, n) {
  if (!Kl(t)) throw Error(S(200));
  return Yl(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function (e) {
  if (!Kl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (qt(function () {
        Yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
Oe.unstable_batchedUpdates = ps;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Kl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Yl(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function l1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l1);
    } catch (e) {
      console.error(e);
    }
}
l1(), (lu.exports = Oe);
var o2 = lu.exports,
  i1,
  Oa = o2;
(i1 = Oa.createRoot), Oa.hydrateRoot;
const s2 = "./assets/square2-DU45fR2x.png";
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gr() {
  return (
    (gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gr.apply(this, arguments)
  );
}
var wt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(wt || (wt = {}));
const za = "popstate";
function a2(e) {
  e === void 0 && (e = {});
  function t(l, i) {
    let {
      pathname: o = "/",
      search: a = "",
      hash: u = "",
    } = Jt(l.location.hash.substr(1));
    return (
      !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o),
      ko(
        "",
        { pathname: o, search: a, hash: u },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(l, i) {
    let o = l.document.querySelector("base"),
      a = "";
    if (o && o.getAttribute("href")) {
      let u = l.location.href,
        c = u.indexOf("#");
      a = c === -1 ? u : u.slice(0, c);
    }
    return a + "#" + (typeof i == "string" ? i : Tl(i));
  }
  function r(l, i) {
    ws(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return c2(t, n, r, e);
}
function b(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ws(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function u2() {
  return Math.random().toString(36).substr(2, 8);
}
function Ia(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ko(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    gr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Jt(t) : t,
      { state: n, key: (t && t.key) || r || u2() }
    )
  );
}
function Tl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Jt(e) {
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
function c2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = wt.Pop,
    u = null,
    c = m();
  c == null && ((c = 0), o.replaceState(gr({}, o.state, { idx: c }), ""));
  function m() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = wt.Pop;
    let k = m(),
      p = k == null ? null : k - c;
    (c = k), u && u({ action: a, location: y.location, delta: p });
  }
  function v(k, p) {
    a = wt.Push;
    let d = ko(y.location, k, p);
    n && n(d, k), (c = m() + 1);
    let f = Ia(d, c),
      g = y.createHref(d);
    try {
      o.pushState(f, "", g);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(g);
    }
    i && u && u({ action: a, location: y.location, delta: 1 });
  }
  function x(k, p) {
    a = wt.Replace;
    let d = ko(y.location, k, p);
    n && n(d, k), (c = m());
    let f = Ia(d, c),
      g = y.createHref(d);
    o.replaceState(f, "", g),
      i && u && u({ action: a, location: y.location, delta: 0 });
  }
  function C(k) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof k == "string" ? k : Tl(k);
    return (
      (d = d.replace(/ $/, "%20")),
      b(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, p)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(k) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(za, h),
        (u = k),
        () => {
          l.removeEventListener(za, h), (u = null);
        }
      );
    },
    createHref(k) {
      return t(l, k);
    },
    createURL: C,
    encodeLocation(k) {
      let p = C(k);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: v,
    replace: x,
    go(k) {
      return o.go(k);
    },
  };
  return y;
}
var Fa;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Fa || (Fa = {}));
function d2(e, t, n) {
  return n === void 0 && (n = "/"), f2(e, t, n, !1);
}
function f2(e, t, n, r) {
  let l = typeof t == "string" ? Jt(t) : t,
    i = ks(l.pathname || "/", n);
  if (i == null) return null;
  let o = o1(e);
  p2(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let c = j2(i);
    a = k2(o[u], c, r);
  }
  return a;
}
function o1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (b(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Mt([r, u.relativePath]),
      m = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (b(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      o1(i.children, t, m, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: x2(c, i.index), routesMeta: m });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let u of s1(i.path)) l(i, o, u);
    }),
    t
  );
}
function s1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = s1(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function p2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : w2(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const h2 = /^:[\w-]+$/,
  m2 = 3,
  v2 = 2,
  g2 = 1,
  y2 = 10,
  C2 = -2,
  Va = (e) => e === "*";
function x2(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Va) && (r += C2),
    t && (r += v2),
    n
      .filter((l) => !Va(l))
      .reduce((l, i) => l + (h2.test(i) ? m2 : i === "" ? g2 : y2), r)
  );
}
function w2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function k2(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      m = i === "/" ? t : t.slice(i.length) || "/",
      h = Da(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        m
      ),
      v = u.route;
    if (
      (!h &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (h = Da(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          m
        )),
      !h)
    )
      return null;
    Object.assign(l, h.params),
      o.push({
        params: l,
        pathname: Mt([i, h.pathname]),
        pathnameBase: L2(Mt([i, h.pathnameBase])),
        route: v,
      }),
      h.pathnameBase !== "/" && (i = Mt([i, h.pathnameBase]));
  }
  return o;
}
function Da(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = S2(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((c, m, h) => {
      let { paramName: v, isOptional: x } = m;
      if (v === "*") {
        let y = a[h] || "";
        o = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const C = a[h];
      return (
        x && !C ? (c[v] = void 0) : (c[v] = (C || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function S2(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ws(
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
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
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
function j2(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ws(
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
function ks(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function E2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Jt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : N2(n, t)) : t,
    search: P2(r),
    hash: T2(l),
  };
}
function N2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function _i(e, t, n, r) {
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
function _2(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function a1(e, t) {
  let n = _2(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function u1(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Jt(e))
    : ((l = gr({}, e)),
      b(
        !l.pathname || !l.pathname.includes("?"),
        _i("?", "pathname", "search", l)
      ),
      b(
        !l.pathname || !l.pathname.includes("#"),
        _i("#", "pathname", "hash", l)
      ),
      b(!l.search || !l.search.includes("#"), _i("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith("..")) {
      let v = o.split("/");
      for (; v[0] === ".."; ) v.shift(), (h -= 1);
      l.pathname = v.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let u = E2(l, a),
    c = o && o !== "/" && o.endsWith("/"),
    m = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || m) && (u.pathname += "/"), u;
}
const Mt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  L2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  P2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  T2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function M2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const c1 = ["post", "put", "patch", "delete"];
new Set(c1);
const R2 = ["get", ...c1];
new Set(R2);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yr() {
  return (
    (yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yr.apply(this, arguments)
  );
}
const Ss = w.createContext(null),
  O2 = w.createContext(null),
  bt = w.createContext(null),
  ql = w.createContext(null),
  en = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  d1 = w.createContext(null);
function z2(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Nr() || b(!1);
  let { basename: r, navigator: l } = w.useContext(bt),
    { hash: i, pathname: o, search: a } = p1(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Mt([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function Nr() {
  return w.useContext(ql) != null;
}
function Xl() {
  return Nr() || b(!1), w.useContext(ql).location;
}
function f1(e) {
  w.useContext(bt).static || w.useLayoutEffect(e);
}
function I2() {
  let { isDataRoute: e } = w.useContext(en);
  return e ? Y2() : F2();
}
function F2() {
  Nr() || b(!1);
  let e = w.useContext(Ss),
    { basename: t, future: n, navigator: r } = w.useContext(bt),
    { matches: l } = w.useContext(en),
    { pathname: i } = Xl(),
    o = JSON.stringify(a1(l, n.v7_relativeSplatPath)),
    a = w.useRef(!1);
  return (
    f1(() => {
      a.current = !0;
    }),
    w.useCallback(
      function (c, m) {
        if ((m === void 0 && (m = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let h = u1(c, JSON.parse(o), i, m.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : Mt([t, h.pathname])),
          (m.replace ? r.replace : r.push)(h, m.state, m);
      },
      [t, r, o, i, e]
    )
  );
}
function p1(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(bt),
    { matches: l } = w.useContext(en),
    { pathname: i } = Xl(),
    o = JSON.stringify(a1(l, r.v7_relativeSplatPath));
  return w.useMemo(() => u1(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function V2(e, t) {
  return D2(e, t);
}
function D2(e, t, n, r) {
  Nr() || b(!1);
  let { navigator: l } = w.useContext(bt),
    { matches: i } = w.useContext(en),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let c = Xl(),
    m;
  if (t) {
    var h;
    let k = typeof t == "string" ? Jt(t) : t;
    u === "/" || ((h = k.pathname) != null && h.startsWith(u)) || b(!1),
      (m = k);
  } else m = c;
  let v = m.pathname || "/",
    x = v;
  if (u !== "/") {
    let k = u.replace(/^\//, "").split("/");
    x = "/" + v.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let C = d2(e, { pathname: x }),
    y = U2(
      C &&
        C.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, a, k.params),
            pathname: Mt([
              u,
              l.encodeLocation
                ? l.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? u
                : Mt([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && y
    ? w.createElement(
        ql.Provider,
        {
          value: {
            location: yr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: wt.Pop,
          },
        },
        y
      )
    : y;
}
function H2() {
  let e = K2(),
    t = M2(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: l }, n) : null,
    null
  );
}
const B2 = w.createElement(H2, null);
class $2 extends w.Component {
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
      ? w.createElement(
          en.Provider,
          { value: this.props.routeContext },
          w.createElement(d1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function A2(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = w.useContext(Ss);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(en.Provider, { value: t }, r)
  );
}
function U2(e, t, n, r) {
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
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let m = o.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0
    );
    m >= 0 || b(!1), (o = o.slice(0, Math.min(o.length, m + 1)));
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
        let { loaderData: v, errors: x } = n,
          C =
            h.route.loader &&
            v[h.route.id] === void 0 &&
            (!x || x[h.route.id] === void 0);
        if (h.route.lazy || C) {
          (u = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((m, h, v) => {
    let x,
      C = !1,
      y = null,
      k = null;
    n &&
      ((x = a && h.route.id ? a[h.route.id] : void 0),
      (y = h.route.errorElement || B2),
      u &&
        (c < 0 && v === 0
          ? ((C = !0), (k = null))
          : c === v &&
            ((C = !0), (k = h.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, v + 1)),
      d = () => {
        let f;
        return (
          x
            ? (f = y)
            : C
            ? (f = k)
            : h.route.Component
            ? (f = w.createElement(h.route.Component, null))
            : h.route.element
            ? (f = h.route.element)
            : (f = m),
          w.createElement(A2, {
            match: h,
            routeContext: { outlet: m, matches: p, isDataRoute: n != null },
            children: f,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || v === 0)
      ? w.createElement($2, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: x,
          children: d(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var h1 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(h1 || {}),
  Ml = (function (e) {
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
  })(Ml || {});
function W2(e) {
  let t = w.useContext(Ss);
  return t || b(!1), t;
}
function Z2(e) {
  let t = w.useContext(O2);
  return t || b(!1), t;
}
function Q2(e) {
  let t = w.useContext(en);
  return t || b(!1), t;
}
function m1(e) {
  let t = Q2(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || b(!1), n.route.id;
}
function K2() {
  var e;
  let t = w.useContext(d1),
    n = Z2(Ml.UseRouteError),
    r = m1(Ml.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Y2() {
  let { router: e } = W2(h1.UseNavigateStable),
    t = m1(Ml.UseNavigateStable),
    n = w.useRef(!1);
  return (
    f1(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, yr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Ha = {};
function q2(e, t) {
  Ha[t] || ((Ha[t] = !0), console.warn(t));
}
const Ba = (e, t, n) =>
  q2(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function X2(e, t) {
  (e != null && e.v7_startTransition) ||
    Ba(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      Ba(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function Un(e) {
  b(!1);
}
function G2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = wt.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  Nr() && b(!1);
  let u = t.replace(/^\/*/, "/"),
    c = w.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: yr({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o]
    );
  typeof r == "string" && (r = Jt(r));
  let {
      pathname: m = "/",
      search: h = "",
      hash: v = "",
      state: x = null,
      key: C = "default",
    } = r,
    y = w.useMemo(() => {
      let k = ks(m, u);
      return k == null
        ? null
        : {
            location: { pathname: k, search: h, hash: v, state: x, key: C },
            navigationType: l,
          };
    }, [u, m, h, v, x, C, l]);
  return y == null
    ? null
    : w.createElement(
        bt.Provider,
        { value: c },
        w.createElement(ql.Provider, { children: n, value: y })
      );
}
function J2(e) {
  let { children: t, location: n } = e;
  return V2(So(t), n);
}
new Promise(() => {});
function So(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, l) => {
      if (!w.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === w.Fragment) {
        n.push.apply(n, So(r.props.children, i));
        return;
      }
      r.type !== Un && b(!1), !r.props.index || !r.props.children || b(!1);
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
      r.props.children && (o.children = So(r.props.children, i)), n.push(o);
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
 */ function jo() {
  return (
    (jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jo.apply(this, arguments)
  );
}
function b2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function e0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function t0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !e0(e);
}
const n0 = [
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
  r0 = "6";
try {
  window.__reactRouterVersion = r0;
} catch {}
const l0 = "startTransition",
  $a = Y1[l0];
function i0(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = w.useRef();
  i.current == null && (i.current = a2({ window: l, v5Compat: !0 }));
  let o = i.current,
    [a, u] = w.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    m = w.useCallback(
      (h) => {
        c && $a ? $a(() => u(h)) : u(h);
      },
      [u, c]
    );
  return (
    w.useLayoutEffect(() => o.listen(m), [o, m]),
    w.useEffect(() => X2(r), [r]),
    w.createElement(G2, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const o0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  s0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  H = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: c,
        preventScrollReset: m,
        viewTransition: h,
      } = t,
      v = b2(t, n0),
      { basename: x } = w.useContext(bt),
      C,
      y = !1;
    if (typeof c == "string" && s0.test(c) && ((C = c), o0))
      try {
        let f = new URL(window.location.href),
          g = c.startsWith("//") ? new URL(f.protocol + c) : new URL(c),
          E = ks(g.pathname, x);
        g.origin === f.origin && E != null
          ? (c = E + g.search + g.hash)
          : (y = !0);
      } catch {}
    let k = z2(c, { relative: l }),
      p = a0(c, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: m,
        relative: l,
        viewTransition: h,
      });
    function d(f) {
      r && r(f), f.defaultPrevented || p(f);
    }
    return w.createElement(
      "a",
      jo({}, v, { href: C || k, onClick: y || i ? r : d, ref: n, target: u })
    );
  });
var Aa;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Aa || (Aa = {}));
var Ua;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ua || (Ua = {}));
function a0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    u = I2(),
    c = Xl(),
    m = p1(e, { relative: o });
  return w.useCallback(
    (h) => {
      if (t0(h, n)) {
        h.preventDefault();
        let v = r !== void 0 ? r : Tl(c) === Tl(m);
        u(e, {
          replace: v,
          state: l,
          preventScrollReset: i,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [c, u, m, r, l, n, e, i, o, a]
  );
}
function u0() {
  return s.jsx(s.Fragment, {
    children: s.jsx(H, {
      to: "https://www.uppist.xyz/",
      children: s.jsxs("svg", {
        width: "53",
        height: "15",
        viewBox: "0 0 472 138",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          s.jsxs("g", {
            "clip-path": "url(#clip0_16_344)",
            children: [
              s.jsx("path", {
                d: "M429.67 103.51C453.048 103.51 472 85.8657 472 64.1002C472 42.3346 453.048 24.6902 429.67 24.6902C406.292 24.6902 387.34 42.3346 387.34 64.1002C387.34 85.8657 406.292 103.51 429.67 103.51Z",
                fill: "#F89A1C",
              }),
              s.jsx("path", {
                d: "M429.75 61.7402C427.661 62.4977 425.393 62.6092 423.24 62.0602C420.912 61.455 418.858 60.0806 417.41 58.1602C419.146 59.6568 421.197 60.7436 423.41 61.3402C425.475 61.8992 427.631 62.0352 429.75 61.7402Z",
                fill: "#561D5E",
              }),
              s.jsx("path", {
                d: "M438.88 55.05L418.17 58.3301C421.771 60.4511 425.827 61.6819 430 61.92C428.783 65.7001 428.979 69.7931 430.55 73.4401L438.88 55.05Z",
                fill: "#561D5E",
              }),
              s.jsx("path", {
                d: "M430 61.9202C428.609 63.693 427.871 65.8911 427.911 68.1443C427.951 70.3974 428.767 72.5679 430.22 74.2902C429.246 72.3805 428.72 70.2739 428.682 68.1306C428.644 65.9872 429.095 63.8633 430 61.9202Z",
                fill: "#561D5E",
              }),
              s.jsx("path", {
                d: "M415.73 74.0002C413.641 74.7577 411.373 74.8692 409.22 74.3202C406.894 73.7169 404.84 72.3463 403.39 70.4302C405.077 71.8644 407.05 72.9242 409.177 73.5397C411.304 74.1551 413.538 74.312 415.73 74.0002Z",
                fill: "#561D5E",
              }),
              s.jsx("path", {
                d: "M424.86 67.28L404.15 70.55C407.736 72.6735 411.779 73.9079 415.94 74.15C414.724 77.9302 414.92 82.0229 416.49 85.67L424.86 67.28Z",
                fill: "#561D5E",
              }),
              s.jsx("path", {
                d: "M415.94 74.1501C414.549 75.923 413.811 78.1211 413.851 80.3743C413.891 82.6274 414.707 84.7979 416.16 86.5201C415.186 84.6104 414.66 82.5039 414.622 80.3605C414.584 78.2172 415.034 76.0933 415.94 74.1501Z",
                fill: "#561D5E",
              }),
              s.jsx("path", {
                d: "M444.2 49.58C442.115 50.3398 439.849 50.4514 437.7 49.9C435.371 49.2926 433.313 47.9188 431.86 46C433.615 47.4961 435.682 48.5824 437.91 49.18C439.959 49.7291 442.097 49.865 444.2 49.58Z",
                fill: "#561D5E",
              }),
              s.jsx("path", {
                d: "M453.33 42.9001L432.62 46.1701C434.555 47.3113 436.629 48.1986 438.79 48.8101C440.623 49.3416 442.507 49.6768 444.41 49.8101C443.217 53.5829 443.427 57.6596 445 61.2901L453.33 42.9001Z",
                fill: "#561D5E",
              }),
              s.jsx("path", {
                d: "M444.41 49.77C443.018 51.5405 442.279 53.7373 442.319 55.9892C442.36 58.2411 443.176 60.4102 444.63 62.13C443.656 60.2221 443.13 58.1172 443.092 55.9754C443.054 53.8337 443.505 51.7114 444.41 49.77Z",
                fill: "#ffffff",
              }),
              s.jsx("path", {
                d: "M64.251 85.4371C57.8783 91.0031 49.5697 93.7861 39.325 93.7861C29.0803 93.7861 20.7717 91.0031 14.399 85.4371C8.02633 79.8711 4.84 72.5708 4.84 63.5361V7.15009H29.04V60.8741C29.04 67.1661 32.4683 70.3121 39.325 70.3121C46.1817 70.3121 49.61 67.1661 49.61 60.8741V7.15009H73.81V63.5361C73.81 72.5708 70.6237 79.8711 64.251 85.4371ZM122.136 29.6561C130.284 29.6561 136.939 32.6811 142.101 38.7311C147.264 44.7811 149.845 52.4041 149.845 61.6001C149.845 70.7961 147.264 78.4191 142.101 84.4691C136.939 90.5191 130.284 93.5441 122.136 93.5441C115.199 93.5441 109.794 91.1644 105.922 86.4051V116.05H83.5373V31.3501H105.922V36.7951C109.794 32.0358 115.199 29.6561 122.136 29.6561ZM108.826 69.7071C110.843 71.8851 113.465 72.9741 116.691 72.9741C119.918 72.9741 122.499 71.8851 124.435 69.7071C126.452 67.5291 127.46 64.8268 127.46 61.6001C127.46 58.3734 126.452 55.6711 124.435 53.4931C122.499 51.3151 119.918 50.2261 116.691 50.2261C113.465 50.2261 110.843 51.3151 108.826 53.4931C106.89 55.6711 105.922 58.3734 105.922 61.6001C105.922 64.8268 106.89 67.5291 108.826 69.7071ZM195.516 29.6561C203.663 29.6561 210.318 32.6811 215.481 38.7311C220.644 44.7811 223.225 52.4041 223.225 61.6001C223.225 70.7961 220.644 78.4191 215.481 84.4691C210.318 90.5191 203.663 93.5441 195.516 93.5441C188.579 93.5441 183.174 91.1644 179.302 86.4051V116.05H156.917V31.3501H179.302V36.7951C183.174 32.0358 188.579 29.6561 195.516 29.6561ZM182.206 69.7071C184.223 71.8851 186.844 72.9741 190.071 72.9741C193.298 72.9741 195.879 71.8851 197.815 69.7071C199.832 67.5291 200.84 64.8268 200.84 61.6001C200.84 58.3734 199.832 55.6711 197.815 53.4931C195.879 51.3151 193.298 50.2261 190.071 50.2261C186.844 50.2261 184.223 51.3151 182.206 53.4931C180.27 55.6711 179.302 58.3734 179.302 61.6001C179.302 64.8268 180.27 67.5291 182.206 69.7071ZM241.55 26.7521C238.162 26.7521 235.218 25.5421 232.717 23.1221C230.297 20.6214 229.087 17.7174 229.087 14.4101C229.087 11.1028 230.297 8.23909 232.717 5.81909C235.218 3.31843 238.162 2.06809 241.55 2.06809C244.857 2.06809 247.721 3.31843 250.141 5.81909C252.642 8.23909 253.892 11.1028 253.892 14.4101C253.892 17.7174 252.642 20.6214 250.141 23.1221C247.721 25.5421 244.857 26.7521 241.55 26.7521ZM230.297 91.8501V31.3501H252.682V91.8501H230.297ZM283.978 49.1371C283.978 50.1051 284.704 50.8714 286.156 51.4361C287.689 52.0008 289.585 52.4444 291.843 52.7671C294.102 53.0091 296.522 53.5334 299.103 54.3401C301.685 55.1468 304.105 56.1551 306.363 57.3651C308.622 58.5751 310.477 60.5111 311.929 63.1731C313.462 65.7544 314.228 68.9004 314.228 72.6111C314.228 76.4831 313.341 79.8711 311.566 82.7751C309.872 85.6791 307.614 87.8571 304.79 89.3091C301.967 90.7611 299.063 91.8098 296.078 92.4551C293.174 93.1811 290.149 93.5441 287.003 93.5441C272.403 93.5441 262.965 88.7444 258.689 79.1451L278.17 70.4331C279.703 74.5471 282.567 76.6041 286.761 76.6041C289.504 76.6041 290.875 75.7168 290.875 73.9421C290.875 72.8934 289.867 72.0464 287.85 71.4011C285.834 70.7558 283.414 70.1104 280.59 69.4651C277.767 68.7391 274.903 67.8114 271.999 66.6821C269.176 65.4721 266.756 63.4958 264.739 60.7531C262.723 58.0104 261.714 54.5821 261.714 50.4681C261.714 43.8534 264.215 38.7311 269.216 35.1011C274.298 31.4711 280.147 29.6561 286.761 29.6561C299.991 29.6561 308.743 34.7784 313.018 45.0231L294.505 51.6781C293.053 48.2901 290.795 46.5961 287.729 46.5961C285.229 46.5961 283.978 47.4431 283.978 49.1371ZM359.086 52.6461H346.381V65.7141C346.381 67.7308 346.865 69.2231 347.833 70.1911C348.801 71.1591 350.213 71.7238 352.068 71.8851C354.004 71.9658 356.344 71.9254 359.086 71.7641V91.8501C346.422 93.6248 337.387 92.5358 331.982 88.5831C326.658 84.6304 323.996 77.4108 323.996 66.9241V52.6461H315.526V31.3501H323.996V21.0651L346.381 14.4101V31.3501H359.086V52.6461Z",
                fill: "#ffffff",
              }),
            ],
          }),
          s.jsx("defs", {
            children: s.jsx("clipPath", {
              id: "clip0_16_344",
              children: s.jsx("rect", {
                width: "472",
                height: "137.21",
                fill: "white",
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
function Gl() {
  return (
    w.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    s.jsxs("section", {
      className: "footer",
      children: [
        s.jsxs("div", {
          className: "footer-details",
          children: [
            s.jsxs("div", {
              className: "loc-svg",
              children: [
                s.jsxs("svg", {
                  width: "24",
                  height: "33",
                  viewBox: "0 0 24 33",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    s.jsx("g", {
                      clipPath: "url(#clip0_83_665)",
                      children: s.jsx("path", {
                        d: "M23.9993 12.5C23.9993 21.228 13.8455 31.482 13.4138 31.9142C13.0386 32.2892 12.5299 32.4999 11.9995 32.4999C11.4691 32.4999 10.9604 32.2892 10.5853 31.9142C10.153 31.4817 -0.000732422 21.228 -0.000732422 12.5C-0.000732422 9.3174 1.26355 6.26515 3.51399 4.01472C5.76442 1.76428 8.81667 0.5 11.9993 0.5C15.1819 0.5 18.2341 1.76428 20.4845 4.01472C22.735 6.26515 23.9993 9.3174 23.9993 12.5ZM11.9993 18.5C13.186 18.5 14.346 18.1481 15.3327 17.4888C16.3194 16.8295 17.0884 15.8925 17.5425 14.7961C17.9967 13.6997 18.1155 12.4933 17.884 11.3295C17.6525 10.1656 17.081 9.09647 16.2419 8.25736C15.4028 7.41824 14.3337 6.8468 13.1698 6.61529C12.0059 6.38378 10.7995 6.5026 9.70317 6.95672C8.60681 7.41085 7.66974 8.17988 7.01045 9.16658C6.35116 10.1533 5.99927 11.3133 5.99927 12.5C5.99923 13.2879 6.15441 14.0682 6.45592 14.7961C6.75744 15.5241 7.1994 16.1856 7.75655 16.7427C8.31371 17.2999 8.97516 17.7418 9.70313 18.0433C10.4311 18.3449 11.2113 18.5 11.9993 18.5Z",
                        fill: "#F2F1F2",
                      }),
                    }),
                    s.jsx("defs", {
                      children: s.jsx("clipPath", {
                        id: "clip0_83_665",
                        children: s.jsx("rect", {
                          width: "24",
                          height: "32",
                          fill: "white",
                          transform: "translate(-0.000732422 0.5)",
                        }),
                      }),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "location",
                  children: [
                    s.jsx("label", { children: "Location" }),
                    s.jsx("span", { children: "Gbagada, Lagos" }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "loc-svg",
              children: [
                s.jsxs("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    s.jsxs("g", {
                      clipPath: "url(#clip0_83_673)",
                      children: [
                        s.jsx("path", {
                          d: "M2.99927 8.25V9.75H1.49927C1.30036 9.75 1.10959 9.67098 0.968937 9.53033C0.828285 9.38968 0.749268 9.19891 0.749268 9C0.749268 8.80109 0.828285 8.61032 0.968937 8.46967C1.10959 8.32902 1.30036 8.25 1.49927 8.25H2.99927ZM2.99927 11.25V12.75H1.49927C1.30036 12.75 1.10959 12.671 0.968937 12.5303C0.828285 12.3897 0.749268 12.1989 0.749268 12C0.749268 11.8011 0.828285 11.6103 0.968937 11.4697C1.10959 11.329 1.30036 11.25 1.49927 11.25H2.99927ZM2.99927 14.25V15.75H1.49927C1.30036 15.75 1.10959 15.671 0.968937 15.5303C0.828285 15.3897 0.749268 15.1989 0.749268 15C0.749268 14.8011 0.828285 14.6103 0.968937 14.4697C1.10959 14.329 1.30036 14.25 1.49927 14.25H2.99927Z",
                          fill: "#F2F1F2",
                        }),
                        s.jsx("path", {
                          d: "M20.9993 0H4.49927C3.90253 0 3.33023 0.237053 2.90828 0.65901C2.48632 1.08097 2.24927 1.65326 2.24927 2.25V8.25H4.49927C4.69818 8.25 4.88895 8.32902 5.0296 8.46967C5.17025 8.61032 5.24927 8.80109 5.24927 9C5.24927 9.19891 5.17025 9.38968 5.0296 9.53033C4.88895 9.67098 4.69818 9.75 4.49927 9.75H2.24927V11.25H4.49927C4.69818 11.25 4.88895 11.329 5.0296 11.4697C5.17025 11.6103 5.24927 11.8011 5.24927 12C5.24927 12.1989 5.17025 12.3897 5.0296 12.5303C4.88895 12.671 4.69818 12.75 4.49927 12.75H2.24927V14.25H4.49927C4.69818 14.25 4.88895 14.329 5.0296 14.4697C5.17025 14.6103 5.24927 14.8011 5.24927 15C5.24927 15.1989 5.17025 15.3897 5.0296 15.5303C4.88895 15.671 4.69818 15.75 4.49927 15.75H2.24927V21.75C2.24927 22.3467 2.48632 22.919 2.90828 23.341C3.33023 23.7629 3.90253 24 4.49927 24H20.9993C21.596 24 22.1683 23.7629 22.5903 23.341C23.0122 22.919 23.2493 22.3467 23.2493 21.75V2.25C23.2493 1.65326 23.0122 1.08097 22.5903 0.65901C22.1683 0.237053 21.596 0 20.9993 0V0ZM12.7493 7.125C13.1201 7.125 13.4826 7.23497 13.791 7.44099C14.0993 7.64702 14.3396 7.93986 14.4815 8.28247C14.6235 8.62508 14.6606 9.00208 14.5882 9.3658C14.5159 9.72951 14.3373 10.0636 14.0751 10.3258C13.8129 10.588 13.4788 10.7666 13.1151 10.839C12.7513 10.9113 12.3743 10.8742 12.0317 10.7323C11.6891 10.5904 11.3963 10.35 11.1903 10.0417C10.9842 9.73335 10.8743 9.37084 10.8743 9C10.8743 8.50272 11.0718 8.02581 11.4234 7.67417C11.7751 7.32254 12.252 7.125 12.7493 7.125ZM16.8743 16.5C16.8743 16.5995 16.8348 16.6948 16.7644 16.7652C16.6941 16.8355 16.5987 16.875 16.4993 16.875H8.99927C8.89981 16.875 8.80443 16.8355 8.7341 16.7652C8.66378 16.6948 8.62427 16.5995 8.62427 16.5V15.75C8.62625 14.8555 8.98246 13.9982 9.61497 13.3657C10.2475 12.7332 11.1048 12.377 11.9993 12.375H13.4993C14.3938 12.377 15.2511 12.7332 15.8836 13.3657C16.5161 13.9982 16.8723 14.8555 16.8743 15.75V16.5Z",
                          fill: "#F2F1F2",
                        }),
                      ],
                    }),
                    s.jsx("defs", {
                      children: s.jsx("clipPath", {
                        id: "clip0_83_673",
                        children: s.jsx("rect", {
                          width: "24",
                          height: "24",
                          fill: "white",
                          transform: "translate(-0.000732422)",
                        }),
                      }),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "location",
                  children: [
                    s.jsx("label", { children: "Contact" }),
                    s.jsx("span", { children: "Email: info@sqladvisory.co" }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "loc-svg",
              children: [
                s.jsx("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: s.jsx("path", {
                    d: "M11.9993 1C9.82368 1 7.69694 1.64514 5.888 2.85383C4.07906 4.06253 2.66916 5.78049 1.8366 7.79048C1.00403 9.80047 0.786197 12.0122 1.21063 14.146C1.63507 16.2798 2.68272 18.2398 4.2211 19.7782C5.75948 21.3166 7.71949 22.3642 9.85328 22.7886C11.9871 23.2131 14.1988 22.9952 16.2088 22.1627C18.2188 21.3301 19.9367 19.9202 21.1454 18.1113C22.3541 16.3023 22.9993 14.1756 22.9993 12C22.9993 9.08262 21.8403 6.28473 19.7774 4.22183C17.7145 2.15893 14.9167 1 11.9993 1ZM15.9993 13H11.9993C11.7341 13 11.4797 12.8946 11.2922 12.7071C11.1046 12.5196 10.9993 12.2652 10.9993 12V6C10.9993 5.73478 11.1046 5.48043 11.2922 5.29289C11.4797 5.10536 11.7341 5 11.9993 5C12.2645 5 12.5188 5.10536 12.7064 5.29289C12.8939 5.48043 12.9993 5.73478 12.9993 6V11H15.9993C16.2645 11 16.5188 11.1054 16.7064 11.2929C16.8939 11.4804 16.9993 11.7348 16.9993 12C16.9993 12.2652 16.8939 12.5196 16.7064 12.7071C16.5188 12.8946 16.2645 13 15.9993 13Z",
                    fill: "#F2F1F2",
                  }),
                }),
                s.jsxs("div", {
                  className: "location",
                  children: [
                    s.jsx("label", { children: "Work Hours " }),
                    s.jsxs("span", {
                      className: "monday",
                      children: [
                        "Mondays to Fridays",
                        s.jsx("span", { children: "8am - 4pm" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsx("hr", {}),
        s.jsxs("div", {
          className: "footer-end",
          children: [
            s.jsxs("div", {
              className: "footer-img",
              children: [
                s.jsx(H, {
                  to: "/",
                  children: s.jsx("img", { src: s2, alt: "" }),
                }),
                s.jsxs("label", {
                  children: [
                    "Empowering organisations through transformative people strategies.",
                    " ",
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "quicklinks",
              children: [
                s.jsx("label", { children: "Quick Links" }),
                s.jsxs("ul", {
                  children: [
                    s.jsx(H, {
                      to: "/",
                      children: s.jsx("li", { children: "About us" }),
                    }),
                    s.jsx(H, {
                      to: "/services",
                      children: s.jsx("li", { children: "Our Services" }),
                    }),
                    s.jsx(H, {
                      to: "https://drive.google.com/file/d/1-HM2IMvJnFySHzf9blZR1kkBcGIHQ4gB/view?usp=sharing",
                      children: s.jsx("li", { children: "Privacy Policy" }),
                    }),
                    s.jsx(H, {
                      to: "https://drive.google.com/file/d/10xY6TiGJWd0KE63iIRWuYnvJ2brM1ORL/view?usp=drive_link",
                      children: s.jsx("li", { children: "Terms of Use" }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "connect",
              children: [
                s.jsx("label", { children: "Connect with us" }),
                s.jsxs("ul", {
                  children: [
                    s.jsx("li", {
                      children: s.jsx(H, {
                        to: "https://web.facebook.com/sqladvisory?mibextid=LQQJ4d&_rdc=1&_rdr#",
                        children: s.jsxs("svg", {
                          width: "36",
                          height: "36",
                          viewBox: "0 0 36 36",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            s.jsxs("g", {
                              clipPath: "url(#clip0_83_690)",
                              children: [
                                s.jsx("path", {
                                  d: "M31.4993 36H4.49927C2.01527 36 -0.000732422 33.984 -0.000732422 31.5V4.5C-0.000732422 2.016 2.01527 0 4.49927 0H31.4993C33.9833 0 35.9993 2.016 35.9993 4.5V31.5C35.9993 33.984 33.9833 36 31.4993 36Z",
                                  fill: "#F2F1F2",
                                }),
                                s.jsx("path", {
                                  d: "M35.9993 17.9999C35.9993 8.05878 27.9404 -8.7738e-05 17.9993 -8.7738e-05C8.05814 -8.7738e-05 -0.000732422 8.05878 -0.000732422 17.9999C-0.000732422 26.9842 6.58161 34.4309 15.1868 35.7812V23.203H10.6165V17.9999H15.1868V14.0343C15.1868 9.52304 17.874 7.03116 21.9856 7.03116C23.955 7.03116 26.0149 7.38273 26.0149 7.38273V11.8124H23.7451C21.5091 11.8124 20.8118 13.1999 20.8118 14.6234V17.9999H25.804L25.0059 23.203H20.8118V35.7812C29.4169 34.4309 35.9993 26.9842 35.9993 17.9999Z",
                                  fill: "#F2F1F2",
                                }),
                                s.jsx("path", {
                                  d: "M25.0059 23.2031L25.804 18H20.8118V14.6235C20.8118 13.2 21.5091 11.8125 23.7451 11.8125H26.0149V7.38281C26.0149 7.38281 23.955 7.03125 21.9856 7.03125C17.874 7.03125 15.1868 9.52313 15.1868 14.0344V18H10.6165V23.2031H15.1868V35.7813C16.1032 35.9251 17.0425 36 17.9993 36C18.9561 36 19.8954 35.9251 20.8118 35.7813V23.2031H25.0059Z",
                                  fill: "#1B1A38",
                                }),
                              ],
                            }),
                            s.jsx("defs", {
                              children: s.jsx("clipPath", {
                                id: "clip0_83_690",
                                children: s.jsx("rect", {
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
                    s.jsx("li", {
                      children: s.jsx(H, {
                        to: "https://x.com/sqladvisory?s=11&t=fPYDdhVOkJjxNRmoxEVdUQ",
                        children: s.jsxs("svg", {
                          width: "36",
                          height: "36",
                          viewBox: "0 0 36 36",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            s.jsxs("g", {
                              clipPath: "url(#clip0_83_696)",
                              children: [
                                s.jsx("path", {
                                  d: "M31.4993 36H4.49927C2.01527 36 -0.000732422 33.984 -0.000732422 31.5V4.5C-0.000732422 2.016 2.01527 0 4.49927 0H31.4993C33.9833 0 35.9993 2.016 35.9993 4.5V31.5C35.9993 33.984 33.9833 36 31.4993 36Z",
                                  fill: "#F2F1F2",
                                }),
                                s.jsx("path", {
                                  d: "M24.3808 8H27.753L20.3488 16.4871L28.9993 28H22.2109L16.896 21.0037L10.8113 28H7.43912L15.2832 18.9225L6.99927 8H13.9563L18.758 14.3911L24.3808 8ZM23.2005 26.0074H25.0699L12.9739 9.91882H10.9653L23.2005 26.0074Z",
                                  fill: "#1B1A38",
                                }),
                              ],
                            }),
                            s.jsx("defs", {
                              children: s.jsx("clipPath", {
                                id: "clip0_83_696",
                                children: s.jsx("rect", {
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
                    s.jsx("li", {
                      children: s.jsx(H, {
                        to: "https://www.linkedin.com/company/sqladvisory/",
                        children: s.jsxs("svg", {
                          width: "36",
                          height: "36",
                          viewBox: "0 0 36 36",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            s.jsxs("g", {
                              clipPath: "url(#clip0_83_701)",
                              children: [
                                s.jsx("rect", {
                                  x: "-0.000732422",
                                  width: "36",
                                  height: "36",
                                  rx: "5",
                                  fill: "#561D5E",
                                }),
                                s.jsxs("g", {
                                  clipPath: "url(#clip1_83_701)",
                                  children: [
                                    s.jsx("rect", {
                                      x: "-0.000732422",
                                      width: "36",
                                      height: "36",
                                      rx: "5",
                                      fill: "#F2F1F2",
                                    }),
                                    s.jsx("path", {
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M28.9993 29H24.7993V21.651C24.7993 19.635 23.9099 18.5103 22.315 18.5103C20.5793 18.5103 19.5493 19.6823 19.5493 21.651V29H15.3493V15.35H19.5493V16.885C19.5493 16.885 20.867 14.5728 23.8364 14.5728C26.8069 14.5728 28.9993 16.3854 28.9993 20.136V29ZM10.5634 13.1669C9.14692 13.1669 7.99927 12.0099 7.99927 10.583C7.99927 9.15706 9.14692 8 10.5634 8C11.9788 8 13.1264 9.15706 13.1264 10.583C13.1275 12.0099 11.9788 13.1669 10.5634 13.1669ZM7.99927 29H13.2493V15.35H7.99927V29Z",
                                      fill: "#1B1A38",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s.jsxs("defs", {
                              children: [
                                s.jsx("clipPath", {
                                  id: "clip0_83_701",
                                  children: s.jsx("rect", {
                                    x: "-0.000732422",
                                    width: "36",
                                    height: "36",
                                    rx: "5",
                                    fill: "white",
                                  }),
                                }),
                                s.jsx("clipPath", {
                                  id: "clip1_83_701",
                                  children: s.jsx("rect", {
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
                    }),
                    s.jsx("li", {
                      children: s.jsx(H, {
                        to: "https://www.instagram.com/sqladvisory?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                        children: s.jsxs("svg", {
                          width: "36",
                          height: "36",
                          viewBox: "0 0 36 36",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            s.jsx("rect", {
                              x: "-0.000732422",
                              width: "36",
                              height: "36",
                              rx: "5",
                              fill: "#F2F1F2",
                            }),
                            s.jsx("path", {
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
        s.jsx("label", {
          children:
            "© SquaredLAB Advisory Services Limited 2025. All rights reserved",
        }),
        s.jsxs("div", {
          className: "designed",
          children: [
            s.jsxs("svg", {
              width: "70",
              height: "14",
              viewBox: "0 0 70 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                s.jsx("path", {
                  d: "M64.2025 12.8283C64.0539 12.8283 63.91 12.8144 63.7707 12.7865C63.6407 12.7587 63.52 12.7262 63.4086 12.689L63.6314 11.7837C63.7057 11.8022 63.7893 11.8208 63.8822 11.8394C63.975 11.8672 64.0632 11.8812 64.1468 11.8812C64.5275 11.8812 64.8432 11.7419 65.0939 11.4633C65.3447 11.194 65.5397 10.8504 65.6789 10.4326L65.8322 9.93116L63.1161 3.14795H64.3L65.6789 6.89473C65.7811 7.18259 65.8879 7.49366 65.9993 7.82795C66.12 8.16223 66.2314 8.48723 66.3336 8.80295H66.3893C66.4914 8.49652 66.5889 8.17616 66.6818 7.84188C66.7747 7.50759 66.8675 7.19188 66.9604 6.89473L68.1722 3.14795H69.2864L66.7375 10.4744C66.5797 10.9201 66.3893 11.3194 66.1664 11.6722C65.9529 12.0251 65.6836 12.3037 65.3586 12.5079C65.0429 12.7215 64.6575 12.8283 64.2025 12.8283Z",
                  fill: "#ffffff",
                }),
                s.jsx("path", {
                  d: "M59.4413 10.0843C59.1256 10.0843 58.7959 10.01 58.4524 9.86143C58.1181 9.70357 57.8024 9.49 57.5052 9.22071H57.4634L57.3659 9.91714H56.4467V0H57.5888V2.70214L57.5609 3.92786C57.8674 3.65857 58.2017 3.43571 58.5638 3.25929C58.9352 3.07357 59.3067 2.98071 59.6781 2.98071C60.5602 2.98071 61.2288 3.29179 61.6838 3.91393C62.1388 4.53607 62.3663 5.37179 62.3663 6.42107C62.3663 7.19179 62.227 7.85107 61.9484 8.39893C61.6792 8.94679 61.3217 9.36464 60.8759 9.6525C60.4395 9.94036 59.9613 10.0843 59.4413 10.0843ZM59.2463 9.12321C59.8034 9.12321 60.2631 8.88643 60.6252 8.41286C60.9967 7.93 61.1824 7.27071 61.1824 6.435C61.1824 5.69214 61.0431 5.09321 60.7645 4.63821C60.4952 4.17393 60.0402 3.94179 59.3995 3.94179C59.1117 3.94179 58.8192 4.02071 58.522 4.17857C58.2249 4.33643 57.9138 4.56393 57.5888 4.86107V8.41286C57.8859 8.67286 58.1784 8.85857 58.4663 8.97C58.7634 9.07214 59.0234 9.12321 59.2463 9.12321Z",
                  fill: "#ffffff",
                }),
                s.jsx("path", {
                  d: "M48.2442 10.0843C47.3992 10.0843 46.7214 9.77786 46.2106 9.165C45.6999 8.54286 45.4446 7.67 45.4446 6.54643C45.4446 5.81286 45.5792 5.18143 45.8485 4.65214C46.1271 4.11357 46.4892 3.70036 46.9349 3.4125C47.3899 3.12464 47.8728 2.98071 48.3835 2.98071C48.7735 2.98071 49.1124 3.05036 49.4003 3.18964C49.6882 3.32893 49.9807 3.51929 50.2778 3.76071L50.2221 2.60464V0H51.3782V9.91714H50.431L50.3335 9.12321H50.2917C50.0317 9.38321 49.7253 9.61071 49.3724 9.80572C49.0196 9.99143 48.6435 10.0843 48.2442 10.0843ZM48.4949 9.12321C49.0892 9.12321 49.6649 8.81214 50.2221 8.19V4.65214C49.9342 4.39214 49.6557 4.21107 49.3864 4.10893C49.1264 3.9975 48.8571 3.94179 48.5785 3.94179C48.2164 3.94179 47.8867 4.05321 47.5896 4.27607C47.3017 4.48964 47.0696 4.79143 46.8931 5.18143C46.7167 5.56214 46.6285 6.0125 46.6285 6.5325C46.6285 7.34036 46.791 7.97643 47.116 8.44071C47.441 8.89571 47.9006 9.12321 48.4949 9.12321Z",
                  fill: "#ffffff",
                }),
                s.jsx("path", {
                  d: "M41.7662 10.0845C41.1626 10.0845 40.6147 9.94524 40.1226 9.66667C39.6305 9.37882 39.2405 8.97024 38.9526 8.44096C38.6647 7.91167 38.5208 7.28024 38.5208 6.54667C38.5208 5.80381 38.6647 5.16774 38.9526 4.63846C39.2497 4.10917 39.6305 3.7006 40.0947 3.41274C40.559 3.12489 41.0465 2.98096 41.5572 2.98096C42.4208 2.98096 43.0847 3.26881 43.549 3.84453C44.0226 4.42024 44.2594 5.19096 44.2594 6.15667C44.2594 6.27739 44.2547 6.3981 44.2455 6.51881C44.2455 6.63024 44.2362 6.72774 44.2176 6.81131H39.649C39.6955 7.52631 39.9183 8.09739 40.3176 8.52453C40.7262 8.95167 41.2555 9.16524 41.9055 9.16524C42.2305 9.16524 42.5276 9.11881 42.7969 9.02596C43.0755 8.92381 43.3401 8.79381 43.5908 8.63596L43.9947 9.3881C43.7069 9.57381 43.3772 9.73631 43.0058 9.8756C42.6437 10.0149 42.2305 10.0845 41.7662 10.0845ZM39.6351 5.98953H43.2565C43.2565 5.30239 43.108 4.78239 42.8108 4.42953C42.523 4.06739 42.1144 3.88631 41.5851 3.88631C41.1115 3.88631 40.6844 4.07203 40.3037 4.44346C39.9322 4.8056 39.7094 5.32096 39.6351 5.98953Z",
                  fill: "#ffffff",
                }),
                s.jsx("path", {
                  d: "M31.4052 9.91739V3.1481H32.3523L32.4498 4.1231H32.4916C32.8166 3.7981 33.1602 3.52881 33.5223 3.31524C33.8844 3.09239 34.2976 2.98096 34.7619 2.98096C35.4769 2.98096 35.9969 3.20846 36.3219 3.66346C36.6562 4.10917 36.8234 4.76381 36.8234 5.62739V9.91739H35.6812V5.7806C35.6812 5.14917 35.5791 4.68953 35.3748 4.40167C35.1705 4.11381 34.8455 3.96989 34.3998 3.96989C34.0562 3.96989 33.7451 4.0581 33.4666 4.23453C33.1973 4.41096 32.8909 4.67096 32.5473 5.01453V9.91739H31.4052Z",
                  fill: "#ffffff",
                }),
                s.jsx("path", {
                  d: "M26.6708 13.0374C25.8444 13.0374 25.1712 12.8795 24.6512 12.5638C24.1312 12.2481 23.8712 11.7977 23.8712 11.2127C23.8712 10.9249 23.9594 10.6463 24.1358 10.377C24.3122 10.117 24.5537 9.88489 24.8601 9.6806V9.62489C24.6929 9.52274 24.549 9.37881 24.4283 9.1931C24.3169 9.00739 24.2612 8.78453 24.2612 8.52453C24.2612 8.23667 24.3401 7.98596 24.4979 7.77239C24.6558 7.55881 24.8229 7.39167 24.9994 7.27096V7.21524C24.7765 7.02953 24.5722 6.77882 24.3865 6.4631C24.2101 6.14739 24.1219 5.78989 24.1219 5.3906C24.1219 4.89846 24.2379 4.47131 24.4701 4.10917C24.7022 3.74703 25.0133 3.46846 25.4033 3.27346C25.7933 3.07846 26.2158 2.98096 26.6708 2.98096C26.8565 2.98096 27.0329 2.99953 27.2001 3.03667C27.3672 3.06453 27.5112 3.10167 27.6319 3.1481H29.9858V4.0256H28.5929C28.7508 4.17417 28.8808 4.37381 28.9829 4.62453C29.0944 4.86596 29.1501 5.1306 29.1501 5.41846C29.1501 5.90131 29.0387 6.31917 28.8158 6.67203C28.5929 7.02489 28.2958 7.29881 27.9244 7.49381C27.5529 7.67953 27.1351 7.77239 26.6708 7.77239C26.3087 7.77239 25.9697 7.69346 25.654 7.5356C25.5333 7.63774 25.4312 7.75381 25.3476 7.88381C25.264 8.00453 25.2222 8.15774 25.2222 8.34346C25.2222 8.55703 25.3058 8.73346 25.4729 8.87274C25.6494 9.01203 25.9651 9.08167 26.4201 9.08167H27.7294C28.5187 9.08167 29.1083 9.21167 29.4983 9.47167C29.8976 9.72239 30.0972 10.131 30.0972 10.6974C30.0972 11.1152 29.9579 11.5006 29.6794 11.8535C29.4008 12.2063 29.0062 12.4895 28.4954 12.7031C27.9847 12.926 27.3765 13.0374 26.6708 13.0374ZM26.6708 7.00631C27.0608 7.00631 27.3951 6.86239 27.6737 6.57453C27.9615 6.27739 28.1054 5.88274 28.1054 5.3906C28.1054 4.89846 27.9662 4.5131 27.6876 4.23453C27.409 3.95596 27.0701 3.81667 26.6708 3.81667C26.2715 3.81667 25.9326 3.95596 25.654 4.23453C25.3754 4.5131 25.2362 4.89846 25.2362 5.3906C25.2362 5.88274 25.3754 6.27739 25.654 6.57453C25.9419 6.86239 26.2808 7.00631 26.6708 7.00631ZM26.8379 12.2435C27.4879 12.2435 28.0079 12.0995 28.3979 11.8117C28.7879 11.5331 28.9829 11.2174 28.9829 10.8645C28.9829 10.5488 28.8622 10.3306 28.6208 10.2099C28.3887 10.0892 28.0544 10.0288 27.6179 10.0288H26.4479C26.3179 10.0288 26.174 10.0195 26.0162 10.001C25.8676 9.98239 25.719 9.95453 25.5704 9.91739C25.329 10.0938 25.1526 10.2795 25.0412 10.4745C24.9297 10.6695 24.874 10.8645 24.874 11.0595C24.874 11.4217 25.0458 11.7095 25.3894 11.9231C25.7422 12.1367 26.2251 12.2435 26.8379 12.2435Z",
                  fill: "#ffffff",
                }),
                s.jsx("path", {
                  d: "M20.9587 9.91692V3.14763H22.1009V9.91692H20.9587ZM21.5437 1.75477C21.3209 1.75477 21.1351 1.68977 20.9866 1.55977C20.8473 1.42049 20.7776 1.23477 20.7776 1.00263C20.7776 0.779773 20.8473 0.598702 20.9866 0.459417C21.1351 0.320131 21.3209 0.250488 21.5437 0.250488C21.7666 0.250488 21.9476 0.320131 22.0869 0.459417C22.2355 0.598702 22.3098 0.779773 22.3098 1.00263C22.3098 1.23477 22.2355 1.42049 22.0869 1.55977C21.9476 1.68977 21.7666 1.75477 21.5437 1.75477Z",
                  fill: "#ffffff",
                }),
                s.jsx("path", {
                  d: "M16.8922 10.0845C16.4094 10.0845 15.9497 9.99632 15.5133 9.81989C15.0769 9.63417 14.6962 9.41131 14.3712 9.15132L14.9422 8.38524C15.2394 8.61739 15.5458 8.81239 15.8615 8.97024C16.1772 9.11881 16.5347 9.1931 16.934 9.1931C17.3797 9.1931 17.714 9.09096 17.9369 8.88667C18.1597 8.6731 18.2712 8.42239 18.2712 8.13453C18.2712 7.90239 18.1922 7.70739 18.0344 7.54953C17.8858 7.39167 17.6908 7.26167 17.4494 7.15953C17.2172 7.0481 16.9758 6.94596 16.7251 6.8531C16.4094 6.73239 16.0983 6.59774 15.7919 6.44917C15.4854 6.29131 15.2347 6.09167 15.0397 5.85024C14.8447 5.59953 14.7472 5.28381 14.7472 4.9031C14.7472 4.35524 14.9515 3.90024 15.3601 3.5381C15.7779 3.16667 16.3537 2.98096 17.0872 2.98096C17.5051 2.98096 17.8951 3.05524 18.2572 3.20381C18.6194 3.35239 18.9304 3.53346 19.1904 3.74703L18.6333 4.47131C18.4012 4.29489 18.1597 4.15096 17.909 4.03953C17.6583 3.9281 17.3844 3.87239 17.0872 3.87239C16.6601 3.87239 16.3444 3.96989 16.1401 4.16489C15.9451 4.35989 15.8476 4.58739 15.8476 4.84739C15.8476 5.06096 15.9172 5.23739 16.0565 5.37667C16.1958 5.50667 16.3769 5.62274 16.5997 5.72489C16.8226 5.81774 17.0594 5.91524 17.3101 6.01739C17.6351 6.1381 17.9554 6.27739 18.2712 6.43524C18.5869 6.58381 18.8469 6.7881 19.0512 7.0481C19.2647 7.29881 19.3715 7.63774 19.3715 8.06489C19.3715 8.42703 19.274 8.76132 19.079 9.06774C18.8933 9.37417 18.6147 9.62024 18.2433 9.80596C17.8812 9.99167 17.4308 10.0845 16.8922 10.0845Z",
                  fill: "#ffffff",
                }),
                s.jsx("path", {
                  d: "M10.9573 10.0845C10.3538 10.0845 9.8059 9.94524 9.31376 9.66667C8.82162 9.37882 8.43162 8.97024 8.14376 8.44096C7.8559 7.91167 7.71198 7.28024 7.71198 6.54667C7.71198 5.80381 7.8559 5.16774 8.14376 4.63846C8.4409 4.10917 8.82162 3.7006 9.2859 3.41274C9.75019 3.12489 10.2377 2.98096 10.7484 2.98096C11.612 2.98096 12.2759 3.26881 12.7402 3.84453C13.2138 4.42024 13.4505 5.19096 13.4505 6.15667C13.4505 6.27739 13.4459 6.3981 13.4366 6.51881C13.4366 6.63024 13.4273 6.72774 13.4088 6.81131H8.84019C8.88662 7.52631 9.10948 8.09739 9.50876 8.52453C9.91733 8.95167 10.4466 9.16524 11.0966 9.16524C11.4216 9.16524 11.7188 9.11881 11.988 9.02596C12.2666 8.92381 12.5313 8.79381 12.782 8.63596L13.1859 9.3881C12.898 9.57381 12.5684 9.73631 12.197 9.8756C11.8348 10.0149 11.4216 10.0845 10.9573 10.0845ZM8.82626 5.98953H12.4477C12.4477 5.30239 12.2991 4.78239 12.002 4.42953C11.7141 4.06739 11.3055 3.88631 10.7763 3.88631C10.3027 3.88631 9.87555 4.07203 9.49483 4.44346C9.1234 4.8056 8.90055 5.32096 8.82626 5.98953Z",
                  fill: "#ffffff",
                }),
                s.jsx("path", {
                  d: "M2.79964 10.0843C1.95464 10.0843 1.27679 9.77786 0.766072 9.165C0.255357 8.54286 0 7.67 0 6.54643C0 5.81286 0.134643 5.18143 0.403929 4.65214C0.6825 4.11357 1.04464 3.70036 1.49036 3.4125C1.94536 3.12464 2.42821 2.98071 2.93893 2.98071C3.32893 2.98071 3.66786 3.05036 3.95571 3.18964C4.24357 3.32893 4.53607 3.51929 4.83321 3.76071L4.7775 2.60464V0H5.93357V9.91714H4.98643L4.88893 9.12321H4.84714C4.58714 9.38321 4.28071 9.61071 3.92786 9.80572C3.575 9.99143 3.19893 10.0843 2.79964 10.0843ZM3.05036 9.12321C3.64464 9.12321 4.22036 8.81214 4.7775 8.19V4.65214C4.48964 4.39214 4.21107 4.21107 3.94179 4.10893C3.68179 3.9975 3.4125 3.94179 3.13393 3.94179C2.77179 3.94179 2.44214 4.05321 2.145 4.27607C1.85714 4.48964 1.625 4.79143 1.44857 5.18143C1.27214 5.56214 1.18393 6.0125 1.18393 6.5325C1.18393 7.34036 1.34643 7.97643 1.67143 8.44071C1.99643 8.89571 2.45607 9.12321 3.05036 9.12321Z",
                  fill: "#ffffff",
                }),
              ],
            }),
            s.jsx(u0, {}),
          ],
        }),
      ],
    })
  );
}
const Wa = "./assets/squareLab-Ck8LEGh6.png";
function Jl() {
  const [e, t] = w.useState(!1);
  function n() {
    t(!0);
  }
  function r() {
    t(!1);
  }
  return s.jsx("header", {
    className: "firstsection",
    children: s.jsxs("nav", {
      className: "nav",
      children: [
        s.jsx(H, {
          to: "/",
          children: s.jsx("img", {
            src: Wa,
            alt: "logo",
            className: "squarelab",
          }),
        }),
        s.jsxs("ul", {
          className: "nav-ul",
          children: [
            s.jsx(H, {
              to: "/",
              children: s.jsx("li", {
                className: "list",
                children: "About Us",
              }),
            }),
            s.jsx(H, {
              to: "/services",
              children: s.jsx("li", {
                className: "list",
                children: "Our Services",
              }),
            }),
            s.jsx(H, {
              to: "/vacancy",
              children: s.jsx("li", {
                className: "list",
                children: "Vacancies",
              }),
            }),
            s.jsx(H, {
              to: "/contact",
              children: s.jsx("li", {
                className: "list-contact contact",
                children: "Contact Us",
              }),
            }),
            s.jsx("li", {
              className: "list-menu",
              onClick: n,
              children: s.jsx("a", {
                className: "dropdown",
                children: s.jsxs("svg", {
                  width: "27",
                  height: "26",
                  viewBox: "0 0 27 26",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    s.jsx("path", {
                      d: "M5.41882 18.4188L20.5915 18.4188",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    s.jsx("path", {
                      d: "M5.41882 13H20.5915",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    s.jsx("path", {
                      d: "M5.41882 7.58118L14.0889 7.58119",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: `side-bar ${e ? "active" : "fade-out"}`,
          id: "side-bar",
          children: [
            s.jsxs("div", {
              className: "image-close",
              children: [
                s.jsx(H, {
                  to: "/",
                  children: s.jsx("img", { className: "squarelab", src: Wa }),
                }),
                s.jsx("a", {
                  className: "dropdown-close",
                  id: "sidebar-close",
                  onClick: r,
                  children: s.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: s.jsx("path", {
                      d: "M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243",
                      stroke: "#2B2B2B",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                }),
              ],
            }),
            s.jsxs("ul", {
              className: "sidebar-menu",
              children: [
                s.jsx(H, {
                  to: "/",
                  children: s.jsx("li", {
                    className: "sidebar-list",
                    children: "About Us",
                  }),
                }),
                s.jsx(H, {
                  to: "/services",
                  children: s.jsx("li", {
                    className: "sidebar-list",
                    children: "Our Services",
                  }),
                }),
                s.jsx(H, {
                  to: "/vacancy",
                  children: s.jsx("li", {
                    className: "sidebar-list",
                    children: "Vacancies",
                  }),
                }),
                s.jsx(H, {
                  to: "/contact",
                  children: s.jsx("li", {
                    className: "sidebar-contact",
                    children: "Contact Us",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const c0 = "./assets/HeroPage-BokXdubm.png",
  d0 = "./assets/HeroPage-BM_WMZm6.png",
  f0 = "./assets/aboutus-CgopWxXm.png",
  p0 = "./assets/aboutus-B6ZdXRZF.png";
function h0() {
  return s.jsxs("section", {
    className: "aboutsection",
    children: [
      s.jsx("img", { className: "hero", src: c0, alt: "image" }),
      s.jsx("img", { className: "hero2", src: d0, alt: "image" }),
      " ",
      s.jsxs("div", {
        className: "img-text",
        children: [
          s.jsxs("h2", {
            children: [
              "Empower Your Team,",
              s.jsx("br", {}),
              " Elevate Your Business!",
            ],
          }),
          s.jsx("span", {
            children: s.jsxs(H, {
              to: "/services",
              children: [
                "View our Services",
                " ",
                s.jsx("svg", {
                  width: "32",
                  height: "32",
                  viewBox: "0 0 32 32",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: s.jsx("path", {
                    d: "M5.33325 16H26.6666M17.3333 6.66669L26.6666 16L17.3333 25.3334",
                    stroke: "#FF5A31",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      s.jsxs("div", {
        className: "about-detail",
        children: [
          s.jsxs("div", {
            className: "aboutus",
            children: [
              s.jsx("label", { children: "About Us" }),
              s.jsx("img", { className: "about", src: f0, alt: "Aboutus" }),
              s.jsx("img", { className: "about2", src: p0, alt: "Aboutus" }),
            ],
          }),
          s.jsxs("div", {
            className: "details",
            children: [
              s.jsxs("p", {
                children: [
                  "SquaredLAB Advisory Services Limited (“SASL”) unlocks peak performance for startups, SMEs, and established companies. By weaving best practices into your company culture, we build a foundation for sustainable growth.",
                  s.jsx("br", {}),
                  s.jsx("br", {}),
                  "Our expertise empowers you to seize emerging opportunities and navigate the ever-changing business landscape.",
                ],
              }),
              s.jsx("p", {
                children:
                  "The core focus of SASL is mainly centred around People Management matters and ensuring that pertinent human resources issues are taken into cognisance when starting and building a company. People Management must be seen from a strategic point of view and not just something organisations react to when matters arise.",
              }),
              s.jsx("p", {
                children:
                  "Our engagement approach with clients offers a combination of competence and experience, where our team helps clients identify issues, assess each situation or challenge and pledge to work with them to provide practical interventions in resolving problems. All our intervention activities are in tune with the strategic or operational intent of the clients in each case, thus, each client receives the service they require, whilst we always aim to surpass expectations.",
              }),
              s.jsx("span", {
                children:
                  "List industries of clients supported in the past and currently supporting include",
              }),
              s.jsxs("div", {
                className: "list-of-industries",
                children: [
                  s.jsxs("ul", {
                    children: [
                      s.jsx("li", { children: "FMCG" }),
                      s.jsx("li", { children: "Manufacturing" }),
                      s.jsx("li", { children: "Real Estate" }),
                      s.jsxs("li", {
                        children: [
                          "Financial Services",
                          " ",
                          s.jsxs("span", {
                            children: [
                              "(Asset Management,",
                              s.jsx("br", {}),
                              " Microfinance Bank)",
                            ],
                          }),
                        ],
                      }),
                      s.jsx("li", { children: "Engineering and Procurement" }),
                    ],
                  }),
                  s.jsxs("ul", {
                    children: [
                      s.jsx("li", { children: "Hospitality" }),
                      s.jsxs("li", {
                        children: [
                          "Agriculture ",
                          s.jsx("span", { children: "(Investments)" }),
                        ],
                      }),
                      s.jsxs("li", {
                        children: [
                          "Engineering Services ",
                          s.jsx("span", {
                            children: "(Oil and Gas Midstream)",
                          }),
                        ],
                      }),
                      s.jsx("li", { children: "Security Services" }),
                      s.jsx("li", { children: "Social Impact etc" }),
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
const m0 = "./assets/values-D9KDB0e_.png",
  v0 = "./assets/values-C2FCkIQY.png";
function g0() {
  return s.jsxs("section", {
    className: "section-value",
    children: [
      s.jsx("label", { children: "Values" }),
      s.jsxs("div", {
        className: "valuesection",
        children: [
          s.jsx("img", { className: "value", src: m0, alt: "image" }),
          s.jsx("img", { className: "value2", src: v0, alt: "image" }),
          s.jsxs("div", {
            className: "values",
            children: [
              s.jsx("label", { children: "Values" }),
              s.jsxs("div", {
                children: [
                  s.jsxs("p", {
                    children: [
                      s.jsx("span", { children: " Our Mission" }),
                      " is to champion a thriving future by accelerating sustainable products, services and practices with measurable impact.",
                    ],
                  }),
                  s.jsx("br", {}),
                  s.jsxs("p", {
                    children: [
                      s.jsx("span", { children: "The Vision" }),
                      " is to become a leading catalyst for positive change by empowering ventures and communities that unlock shared value for all stakeholders.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: "core-value",
        children: [
          s.jsxs("label", {
            children: [
              "Our ",
              s.jsx("span", { children: "Core Values" }),
              " are centred around",
            ],
          }),
          s.jsxs("ul", {
            children: [
              s.jsxs("li", {
                children: [
                  "Daunting challenges loom before our dream of driving social change. Yet, it is ",
                  s.jsx("span", { children: "Courage" }),
                  " that fuels our relentless pursuit of progress. Daring ideas are our currency, bold action our language. Beyond convention, we tap the entrepreneurial spirit, forever fueled by Courage to rewrite the narrative of tomorrow.",
                  " ",
                ],
              }),
              s.jsxs("li", {
                children: [
                  "Every step we take is guided by the compass of",
                  " ",
                  s.jsx("span", { children: "Integrity" }),
                  ". Fairness, accountability, and grounded principles illuminate our path, ensuring every action builds towards a future we can be proud of.",
                ],
              }),
              s.jsxs("li", {
                children: [
                  "At the heart of our pursuit of positive change lies a fierce",
                  " ",
                  s.jsx("span", { children: "Responsibility" }),
                  ". We own the impact of our endeavours, weaving accountability into every strand, leaving a legacy of progress for generations to come.",
                ],
              }),
              s.jsxs("li", {
                children: [
                  "We chase ",
                  s.jsx("span", { children: "Excellence" }),
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
const y0 = "./assets/Image-B2vbEQJ2.png",
  C0 = "./assets/unlock-CmOnfRRE.png",
  x0 = "./assets/imag2-CwDwaxXt.png",
  w0 = "./assets/image-Bxd5ko43.jpg",
  k0 = "./assets/Profile-DO4pe7QH.pdf";
function v1({ show: e }) {
  return s.jsxs("section", {
    className: "unlock",
    children: [
      s.jsxs("div", {
        className: "unlocksection",
        children: [
          s.jsxs("div", {
            className: "unlock-team",
            children: [
              s.jsx("label", {
                children: "Ready to Unlock Your Team's Full Potential?",
              }),
              s.jsx(H, {
                to: "/contact",
                children: s.jsx("label", {
                  className: "contact contact-us",
                  children: "Contact Us",
                }),
              }),
              " ",
            ],
          }),
          s.jsx("img", {
            className: "desktopunlock",
            src: y0,
            alt: "desktopimage",
          }),
          s.jsx("img", {
            className: "mobileunlock",
            src: C0,
            alt: "mobileimage",
          }),
        ],
      }),
      e
        ? s.jsxs("div", {
            className: "imagesection",
            children: [
              s.jsx("img", { className: "unlockimage", src: x0, alt: "" }),
              s.jsx("img", { className: "unlockimage2", src: w0, alt: "" }),
              s.jsxs("div", {
                className: "empower",
                children: [
                  s.jsx("label", {
                    children: "Empowering Your Workforce for Success",
                  }),
                  s.jsx("a", {
                    href: k0,
                    children: s.jsx("label", {
                      className: "contact contact-us download",
                      children: "Download profile",
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
const S0 = "./assets/image3-CcaAZxZq.png",
  j0 = "./assets/value-GIjnfTKV.png";
function E0() {
  return s.jsxs("section", {
    className: "choosecontainer",
    children: [
      s.jsx("label", { children: "Why You Should Choose Us" }),
      s.jsxs("div", {
        className: "choosesection",
        children: [
          s.jsxs("div", {
            className: "img-choose",
            children: [
              s.jsx("img", {
                className: "desktopchoose",
                src: S0,
                alt: "image",
              }),
              s.jsx("img", {
                className: "mobilechoose",
                src: j0,
                alt: "image",
              }),
              s.jsxs("div", {
                className: "choose",
                children: [
                  s.jsx("label", { children: "Why You Should Choose Us" }),
                  s.jsxs("ul", {
                    children: [
                      s.jsxs("li", {
                        children: [
                          s.jsx("span", {
                            children: "Strategic People Management",
                          }),
                          ": Aligning HR practices with business goals for sustainable growth and a strong company culture.",
                        ],
                      }),
                      s.jsx("br", {}),
                      s.jsxs("li", {
                        children: [
                          s.jsx("span", { children: "Tailored Solutions" }),
                          ": Personalised support that meets client needs and exceeds expectations.",
                        ],
                      }),
                      s.jsx("br", {}),
                      s.jsxs("li", {
                        className: "chooselist",
                        children: [
                          s.jsx("span", { children: "Diverse Expertise" }),
                          ": Proven success across multiple industries, from FMCG to financial services and engineering.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsx("ul", {
            className: "chooselist2",
            children: s.jsxs("li", {
              children: [
                s.jsx("span", { children: "Diverse Expertise" }),
                ": Proven success across multiple industries, from FMCG to financial services and engineering.",
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function N0() {
  return (
    w.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    s.jsx("div", {
      className: "background1",
      children: s.jsx("div", {
        className: "background2",
        children: s.jsx("div", {
          className: "background3",
          children: s.jsx("div", {
            className: "background4",
            children: s.jsx("div", {
              className: "background5",
              children: s.jsx("div", {
                className: "background6",
                children: s.jsx("div", {
                  className: "background7",
                  children: s.jsx("div", {
                    className: "background8",
                    children: s.jsx("div", {
                      className: "background9",
                      children: s.jsx("div", {
                        className: "background10",
                        children: s.jsx("div", {
                          className: "background11",
                          children: s.jsxs("div", {
                            className: "background12",
                            children: [
                              s.jsx(Jl, {}),
                              s.jsx(h0, {}),
                              s.jsx(g0, {}),
                              s.jsx(v1, { show: !0 }),
                              s.jsx(E0, {}),
                              s.jsx(Gl, {}),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
const _0 = "./assets/location-NcjTZgfu.png",
  L0 = "./assets/map-BbVqxqhX.png";
class _r {
  constructor(t = 0, n = "Network Error") {
    (this.status = t), (this.text = n);
  }
}
const P0 = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (e) => Promise.resolve(localStorage.getItem(e)),
        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
        remove: (e) => Promise.resolve(localStorage.removeItem(e)),
      };
  },
  se = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: P0(),
  },
  js = (e) =>
    e
      ? typeof e == "string"
        ? { publicKey: e }
        : e.toString() === "[object Object]"
        ? e
        : {}
      : {},
  T0 = (e, t = "https://api.emailjs.com") => {
    if (!e) return;
    const n = js(e);
    (se.publicKey = n.publicKey),
      (se.blockHeadless = n.blockHeadless),
      (se.storageProvider = n.storageProvider),
      (se.blockList = n.blockList),
      (se.limitRate = n.limitRate),
      (se.origin = n.origin || t);
  },
  g1 = async (e, t, n = {}) => {
    const r = await fetch(se.origin + e, {
        method: "POST",
        headers: n,
        body: t,
      }),
      l = await r.text(),
      i = new _r(r.status, l);
    if (r.ok) return i;
    throw i;
  },
  y1 = (e, t, n) => {
    if (!e || typeof e != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  M0 = (e) => {
    if (e && e.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  C1 = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  x1 = () => new _r(451, "Unavailable For Headless Browser"),
  R0 = (e, t) => {
    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
    if (typeof t != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  O0 = (e) => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable;
  },
  z0 = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  w1 = (e, t) => {
    if (O0(e)) return !1;
    R0(e.list, e.watchVariable);
    const n = z0(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n);
  },
  k1 = () => new _r(403, "Forbidden"),
  I0 = (e, t) => {
    if (typeof e != "number" || e < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string")
      throw "The LimitRate ID has to be a non-empty string";
  },
  F0 = async (e, t, n) => {
    const r = Number((await n.get(e)) || 0);
    return t - Date.now() + r;
  },
  S1 = async (e, t, n) => {
    if (!t.throttle || !n) return !1;
    I0(t.throttle, t.id);
    const r = t.id || e;
    return (await F0(r, t.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  j1 = () => new _r(429, "Too Many Requests"),
  V0 = async (e, t, n, r) => {
    const l = js(r),
      i = l.publicKey || se.publicKey,
      o = l.blockHeadless || se.blockHeadless,
      a = l.storageProvider || se.storageProvider,
      u = { ...se.blockList, ...l.blockList },
      c = { ...se.limitRate, ...l.limitRate };
    return o && C1(navigator)
      ? Promise.reject(x1())
      : (y1(i, e, t),
        M0(n),
        n && w1(u, n)
          ? Promise.reject(k1())
          : (await S1(location.pathname, c, a))
          ? Promise.reject(j1())
          : g1(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.4.1",
                user_id: i,
                service_id: e,
                template_id: t,
                template_params: n,
              }),
              { "Content-type": "application/json" }
            ));
  },
  D0 = (e) => {
    if (!e || e.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  H0 = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  B0 = async (e, t, n, r) => {
    const l = js(r),
      i = l.publicKey || se.publicKey,
      o = l.blockHeadless || se.blockHeadless,
      a = se.storageProvider || l.storageProvider,
      u = { ...se.blockList, ...l.blockList },
      c = { ...se.limitRate, ...l.limitRate };
    if (o && C1(navigator)) return Promise.reject(x1());
    const m = H0(n);
    y1(i, e, t), D0(m);
    const h = new FormData(m);
    return w1(u, h)
      ? Promise.reject(k1())
      : (await S1(location.pathname, c, a))
      ? Promise.reject(j1())
      : (h.append("lib_version", "4.4.1"),
        h.append("service_id", e),
        h.append("template_id", t),
        h.append("user_id", i),
        g1("/api/v1.0/email/send-form", h));
  },
  $0 = { init: T0, send: V0, sendForm: B0, EmailJSResponseStatus: _r };
function E1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = E1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function kt() {
  for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = E1(e)) && (r && (r += " "), (r += t));
  return r;
}
const Cr = (e) => typeof e == "number" && !isNaN(e),
  Wt = (e) => typeof e == "string",
  Te = (e) => typeof e == "function",
  il = (e) => (Wt(e) || Te(e) ? e : null),
  Eo = (e) => w.isValidElement(e) || Wt(e) || Te(e) || Cr(e);
function A0(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: l } = e;
  requestAnimationFrame(() => {
    (l.minHeight = "initial"),
      (l.height = r + "px"),
      (l.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (l.height = "0"), (l.padding = "0"), (l.margin = "0"), setTimeout(t, n);
      });
  });
}
function bl(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: l = !0,
    collapseDuration: i = 300,
  } = e;
  return function (o) {
    let {
      children: a,
      position: u,
      preventExitTransition: c,
      done: m,
      nodeRef: h,
      isIn: v,
      playToast: x,
    } = o;
    const C = r ? `${t}--${u}` : t,
      y = r ? `${n}--${u}` : n,
      k = w.useRef(0);
    return (
      w.useLayoutEffect(() => {
        const p = h.current,
          d = C.split(" "),
          f = (g) => {
            g.target === h.current &&
              (x(),
              p.removeEventListener("animationend", f),
              p.removeEventListener("animationcancel", f),
              k.current === 0 &&
                g.type !== "animationcancel" &&
                p.classList.remove(...d));
          };
        p.classList.add(...d),
          p.addEventListener("animationend", f),
          p.addEventListener("animationcancel", f);
      }, []),
      w.useEffect(() => {
        const p = h.current,
          d = () => {
            p.removeEventListener("animationend", d), l ? A0(p, m, i) : m();
          };
        v ||
          (c
            ? d()
            : ((k.current = 1),
              (p.className += ` ${y}`),
              p.addEventListener("animationend", d)));
      }, [v]),
      B.createElement(B.Fragment, null, a)
    );
  };
}
function Za(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const ve = new Map();
let xr = [];
const No = new Set(),
  U0 = (e) => No.forEach((t) => t(e)),
  N1 = () => ve.size > 0;
function _1(e, t) {
  var n;
  if (t) return !((n = ve.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    ve.forEach((l) => {
      l.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function L1(e, t) {
  Eo(e) &&
    (N1() || xr.push({ content: e, options: t }),
    ve.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function Qa(e, t) {
  ve.forEach((n) => {
    t != null && t != null && t.containerId
      ? (t == null ? void 0 : t.containerId) === n.id &&
        n.toggle(e, t == null ? void 0 : t.id)
      : n.toggle(e, t == null ? void 0 : t.id);
  });
}
function W0(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = w.useRef(
    (function (i) {
      const o = i.containerId || 1;
      return {
        subscribe(a) {
          const u = (function (m, h, v) {
            let x = 1,
              C = 0,
              y = [],
              k = [],
              p = [],
              d = h;
            const f = new Map(),
              g = new Set(),
              E = () => {
                (p = Array.from(f.values())), g.forEach((j) => j());
              },
              L = (j) => {
                (k = j == null ? [] : k.filter((R) => R !== j)), E();
              },
              N = (j) => {
                const {
                    toastId: R,
                    onOpen: T,
                    updateId: X,
                    children: xe,
                  } = j.props,
                  Ie = X == null;
                j.staleId && f.delete(j.staleId),
                  f.set(R, j),
                  (k = [...k, j.props.toastId].filter(
                    (Ae) => Ae !== j.staleId
                  )),
                  E(),
                  v(Za(j, Ie ? "added" : "updated")),
                  Ie && Te(T) && T(w.isValidElement(xe) && xe.props);
              };
            return {
              id: m,
              props: d,
              observe: (j) => (g.add(j), () => g.delete(j)),
              toggle: (j, R) => {
                f.forEach((T) => {
                  (R != null && R !== T.props.toastId) ||
                    (Te(T.toggle) && T.toggle(j));
                });
              },
              removeToast: L,
              toasts: f,
              clearQueue: () => {
                (C -= y.length), (y = []);
              },
              buildToast: (j, R) => {
                if (
                  ((V) => {
                    let { containerId: ie, toastId: ee, updateId: we } = V;
                    const he = ie ? ie !== m : m !== 1,
                      Xe = f.has(ee) && we == null;
                    return he || Xe;
                  })(R)
                )
                  return;
                const {
                    toastId: T,
                    updateId: X,
                    data: xe,
                    staleId: Ie,
                    delay: Ae,
                  } = R,
                  ft = () => {
                    L(T);
                  },
                  pt = X == null;
                pt && C++;
                const _e = {
                  ...d,
                  style: d.toastStyle,
                  key: x++,
                  ...Object.fromEntries(
                    Object.entries(R).filter((V) => {
                      let [ie, ee] = V;
                      return ee != null;
                    })
                  ),
                  toastId: T,
                  updateId: X,
                  data: xe,
                  closeToast: ft,
                  isIn: !1,
                  className: il(R.className || d.toastClassName),
                  bodyClassName: il(R.bodyClassName || d.bodyClassName),
                  progressClassName: il(
                    R.progressClassName || d.progressClassName
                  ),
                  autoClose:
                    !R.isLoading &&
                    ((_ = R.autoClose),
                    (M = d.autoClose),
                    _ === !1 || (Cr(_) && _ > 0) ? _ : M),
                  deleteToast() {
                    const V = f.get(T),
                      { onClose: ie, children: ee } = V.props;
                    Te(ie) && ie(w.isValidElement(ee) && ee.props),
                      v(Za(V, "removed")),
                      f.delete(T),
                      C--,
                      C < 0 && (C = 0),
                      y.length > 0 ? N(y.shift()) : E();
                  },
                };
                var _, M;
                (_e.closeButton = d.closeButton),
                  R.closeButton === !1 || Eo(R.closeButton)
                    ? (_e.closeButton = R.closeButton)
                    : R.closeButton === !0 &&
                      (_e.closeButton = !Eo(d.closeButton) || d.closeButton);
                let O = j;
                w.isValidElement(j) && !Wt(j.type)
                  ? (O = w.cloneElement(j, {
                      closeToast: ft,
                      toastProps: _e,
                      data: xe,
                    }))
                  : Te(j) &&
                    (O = j({ closeToast: ft, toastProps: _e, data: xe }));
                const F = { content: O, props: _e, staleId: Ie };
                d.limit && d.limit > 0 && C > d.limit && pt
                  ? y.push(F)
                  : Cr(Ae)
                  ? setTimeout(() => {
                      N(F);
                    }, Ae)
                  : N(F);
              },
              setProps(j) {
                d = j;
              },
              setToggle: (j, R) => {
                f.get(j).toggle = R;
              },
              isToastActive: (j) => k.some((R) => R === j),
              getSnapshot: () => p,
            };
          })(o, i, U0);
          ve.set(o, u);
          const c = u.observe(a);
          return (
            xr.forEach((m) => L1(m.content, m.options)),
            (xr = []),
            () => {
              c(), ve.delete(o);
            }
          );
        },
        setProps(a) {
          var u;
          (u = ve.get(o)) == null || u.setProps(a);
        },
        getSnapshot() {
          var a;
          return (a = ve.get(o)) == null ? void 0 : a.getSnapshot();
        },
      };
    })(e)
  ).current;
  r(e);
  const l = w.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (i) {
      if (!l) return [];
      const o = new Map();
      return (
        e.newestOnTop && l.reverse(),
        l.forEach((a) => {
          const { position: u } = a.props;
          o.has(u) || o.set(u, []), o.get(u).push(a);
        }),
        Array.from(o, (a) => i(a[0], a[1]))
      );
    },
    isToastActive: _1,
    count: l == null ? void 0 : l.length,
  };
}
function Z0(e) {
  const [t, n] = w.useState(!1),
    [r, l] = w.useState(!1),
    i = w.useRef(null),
    o = w.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: a,
      pauseOnHover: u,
      closeToast: c,
      onClick: m,
      closeOnClick: h,
    } = e;
  var v, x;
  function C() {
    n(!0);
  }
  function y() {
    n(!1);
  }
  function k(f) {
    const g = i.current;
    o.canDrag &&
      g &&
      ((o.didMove = !0),
      t && y(),
      (o.delta =
        e.draggableDirection === "x"
          ? f.clientX - o.start
          : f.clientY - o.start),
      o.start !== f.clientX && (o.canCloseOnClick = !1),
      (g.style.transform = `translate3d(${
        e.draggableDirection === "x"
          ? `${o.delta}px, var(--y)`
          : `0, calc(${o.delta}px + var(--y))`
      },0)`),
      (g.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance))));
  }
  function p() {
    document.removeEventListener("pointermove", k),
      document.removeEventListener("pointerup", p);
    const f = i.current;
    if (o.canDrag && o.didMove && f) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
        return l(!0), e.closeToast(), void e.collapseAll();
      (f.style.transition = "transform 0.2s, opacity 0.2s"),
        f.style.removeProperty("transform"),
        f.style.removeProperty("opacity");
    }
  }
  (x = ve.get(
    (v = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1
  )) == null || x.setToggle(v.id, v.fn),
    w.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || y(),
          window.addEventListener("focus", C),
          window.addEventListener("blur", y),
          () => {
            window.removeEventListener("focus", C),
              window.removeEventListener("blur", y);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const d = {
    onPointerDown: function (f) {
      if (e.draggable === !0 || e.draggable === f.pointerType) {
        (o.didMove = !1),
          document.addEventListener("pointermove", k),
          document.addEventListener("pointerup", p);
        const g = i.current;
        (o.canCloseOnClick = !0),
          (o.canDrag = !0),
          (g.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((o.start = f.clientX),
              (o.removalDistance = g.offsetWidth * (e.draggablePercent / 100)))
            : ((o.start = f.clientY),
              (o.removalDistance =
                (g.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (f) {
      const {
        top: g,
        bottom: E,
        left: L,
        right: N,
      } = i.current.getBoundingClientRect();
      f.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      f.clientX >= L &&
      f.clientX <= N &&
      f.clientY >= g &&
      f.clientY <= E
        ? y()
        : C();
    },
  };
  return (
    a && u && ((d.onMouseEnter = y), e.stacked || (d.onMouseLeave = C)),
    h &&
      (d.onClick = (f) => {
        m && m(f), o.canCloseOnClick && c();
      }),
    {
      playToast: C,
      pauseToast: y,
      isRunning: t,
      preventExitTransition: r,
      toastRef: i,
      eventHandlers: d,
    }
  );
}
function Q0(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: l = "default",
    hide: i,
    className: o,
    style: a,
    controlledProgress: u,
    progress: c,
    rtl: m,
    isIn: h,
    theme: v,
  } = e;
  const x = i || (u && c === 0),
    C = {
      ...a,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
    };
  u && (C.transform = `scaleX(${c})`);
  const y = kt(
      "Toastify__progress-bar",
      u
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${v}`,
      `Toastify__progress-bar--${l}`,
      { "Toastify__progress-bar--rtl": m }
    ),
    k = Te(o) ? o({ rtl: m, type: l, defaultClassName: y }) : kt(y, o),
    p = {
      [u && c >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        u && c < 1
          ? null
          : () => {
              h && r();
            },
    };
  return B.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": x },
    B.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${v} Toastify__progress-bar--${l}`,
    }),
    B.createElement("div", {
      role: "progressbar",
      "aria-hidden": x ? "true" : "false",
      "aria-label": "notification timer",
      className: k,
      style: C,
      ...p,
    })
  );
}
let K0 = 1;
const P1 = () => "" + K0++;
function Y0(e) {
  return e && (Wt(e.toastId) || Cr(e.toastId)) ? e.toastId : P1();
}
function bn(e, t) {
  return L1(e, t), t.toastId;
}
function Rl(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: Y0(t) };
}
function Zr(e) {
  return (t, n) => bn(t, Rl(e, n));
}
function $(e, t) {
  return bn(e, Rl("default", t));
}
($.loading = (e, t) =>
  bn(
    e,
    Rl("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  ($.promise = function (e, t, n) {
    let r,
      { pending: l, error: i, success: o } = t;
    l && (r = Wt(l) ? $.loading(l, n) : $.loading(l.render, { ...n, ...l }));
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      u = (m, h, v) => {
        if (h == null) return void $.dismiss(r);
        const x = { type: m, ...a, ...n, data: v },
          C = Wt(h) ? { render: h } : h;
        return r ? $.update(r, { ...x, ...C }) : $(C.render, { ...x, ...C }), v;
      },
      c = Te(e) ? e() : e;
    return c.then((m) => u("success", o, m)).catch((m) => u("error", i, m)), c;
  }),
  ($.success = Zr("success")),
  ($.info = Zr("info")),
  ($.error = Zr("error")),
  ($.warning = Zr("warning")),
  ($.warn = $.warning),
  ($.dark = (e, t) => bn(e, Rl("default", { theme: "dark", ...t }))),
  ($.dismiss = function (e) {
    (function (t) {
      var n;
      if (N1()) {
        if (t == null || Wt((n = t)) || Cr(n))
          ve.forEach((r) => {
            r.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          const r = ve.get(t.containerId);
          r
            ? r.removeToast(t.id)
            : ve.forEach((l) => {
                l.removeToast(t.id);
              });
        }
      } else xr = xr.filter((r) => t != null && r.options.toastId !== t);
    })(e);
  }),
  ($.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      ve.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  ($.isActive = _1),
  ($.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, l) => {
      var i;
      let { containerId: o } = l;
      return (i = ve.get(o || 1)) == null ? void 0 : i.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: l } = n,
        i = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: P1() };
      i.toastId !== e && (i.staleId = e);
      const o = i.render || l;
      delete i.render, bn(o, i);
    }
  }),
  ($.done = (e) => {
    $.update(e, { progress: 1 });
  }),
  ($.onChange = function (e) {
    return (
      No.add(e),
      () => {
        No.delete(e);
      }
    );
  }),
  ($.play = (e) => Qa(!0, e)),
  ($.pause = (e) => Qa(!1, e));
const q0 = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  Qr = (e) => {
    let { theme: t, type: n, isLoading: r, ...l } = e;
    return B.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...l,
    });
  },
  Li = {
    info: function (e) {
      return B.createElement(
        Qr,
        { ...e },
        B.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return B.createElement(
        Qr,
        { ...e },
        B.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return B.createElement(
        Qr,
        { ...e },
        B.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return B.createElement(
        Qr,
        { ...e },
        B.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return B.createElement("div", { className: "Toastify__spinner" });
    },
  },
  X0 = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: l,
        playToast: i,
      } = Z0(e),
      {
        closeButton: o,
        children: a,
        autoClose: u,
        onClick: c,
        type: m,
        hideProgressBar: h,
        closeToast: v,
        transition: x,
        position: C,
        className: y,
        style: k,
        bodyClassName: p,
        bodyStyle: d,
        progressClassName: f,
        progressStyle: g,
        updateId: E,
        role: L,
        progress: N,
        rtl: j,
        toastId: R,
        deleteToast: T,
        isIn: X,
        isLoading: xe,
        closeOnClick: Ie,
        theme: Ae,
      } = e,
      ft = kt(
        "Toastify__toast",
        `Toastify__toast-theme--${Ae}`,
        `Toastify__toast--${m}`,
        { "Toastify__toast--rtl": j },
        { "Toastify__toast--close-on-click": Ie }
      ),
      pt = Te(y)
        ? y({ rtl: j, position: C, type: m, defaultClassName: ft })
        : kt(ft, y),
      _e = (function (F) {
        let { theme: V, type: ie, isLoading: ee, icon: we } = F,
          he = null;
        const Xe = { theme: V, type: ie };
        return (
          we === !1 ||
            (Te(we)
              ? (he = we({ ...Xe, isLoading: ee }))
              : w.isValidElement(we)
              ? (he = w.cloneElement(we, Xe))
              : ee
              ? (he = Li.spinner())
              : ((T1) => T1 in Li)(ie) && (he = Li[ie](Xe))),
          he
        );
      })(e),
      _ = !!N || !u,
      M = { closeToast: v, type: m, theme: Ae };
    let O = null;
    return (
      o === !1 ||
        (O = Te(o)
          ? o(M)
          : w.isValidElement(o)
          ? w.cloneElement(o, M)
          : (function (F) {
              let { closeToast: V, theme: ie, ariaLabel: ee = "close" } = F;
              return B.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${ie}`,
                  type: "button",
                  onClick: (we) => {
                    we.stopPropagation(), V(we);
                  },
                  "aria-label": ee,
                },
                B.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  B.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  })
                )
              );
            })(M)),
      B.createElement(
        x,
        {
          isIn: X,
          done: T,
          position: C,
          preventExitTransition: n,
          nodeRef: r,
          playToast: i,
        },
        B.createElement(
          "div",
          {
            id: R,
            onClick: c,
            "data-in": X,
            className: pt,
            ...l,
            style: k,
            ref: r,
          },
          B.createElement(
            "div",
            {
              ...(X && { role: L }),
              className: Te(p) ? p({ type: m }) : kt("Toastify__toast-body", p),
              style: d,
            },
            _e != null &&
              B.createElement(
                "div",
                {
                  className: kt("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !xe,
                  }),
                },
                _e
              ),
            B.createElement("div", null, a)
          ),
          O,
          B.createElement(Q0, {
            ...(E && !_ ? { key: `pb-${E}` } : {}),
            rtl: j,
            theme: Ae,
            delay: u,
            isRunning: t,
            isIn: X,
            closeToast: v,
            hide: h,
            type: m,
            style: g,
            className: f,
            controlledProgress: _,
            progress: N || 0,
          })
        )
      )
    );
  },
  ei = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  G0 = bl(ei("bounce", !0));
bl(ei("slide", !0));
bl(ei("zoom"));
bl(ei("flip"));
const J0 = {
  position: "top-right",
  transition: G0,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
};
function b0(e) {
  let t = { ...J0, ...e };
  const n = e.stacked,
    [r, l] = w.useState(!0),
    i = w.useRef(null),
    { getToastToRender: o, isToastActive: a, count: u } = W0(t),
    { className: c, style: m, rtl: h, containerId: v } = t;
  function x(y) {
    const k = kt(
      "Toastify__toast-container",
      `Toastify__toast-container--${y}`,
      { "Toastify__toast-container--rtl": h }
    );
    return Te(c)
      ? c({ position: y, rtl: h, defaultClassName: k })
      : kt(k, il(c));
  }
  function C() {
    n && (l(!0), $.play());
  }
  return (
    q0(() => {
      if (n) {
        var y;
        const k = i.current.querySelectorAll('[data-in="true"]'),
          p = 12,
          d = (y = t.position) == null ? void 0 : y.includes("top");
        let f = 0,
          g = 0;
        Array.from(k)
          .reverse()
          .forEach((E, L) => {
            const N = E;
            N.classList.add("Toastify__toast--stacked"),
              L > 0 && (N.dataset.collapsed = `${r}`),
              N.dataset.pos || (N.dataset.pos = d ? "top" : "bot");
            const j = f * (r ? 0.2 : 1) + (r ? 0 : p * L);
            N.style.setProperty("--y", `${d ? j : -1 * j}px`),
              N.style.setProperty("--g", `${p}`),
              N.style.setProperty("--s", "" + (1 - (r ? g : 0))),
              (f += N.offsetHeight),
              (g += 0.025);
          });
      }
    }, [r, u, n]),
    B.createElement(
      "div",
      {
        ref: i,
        className: "Toastify",
        id: v,
        onMouseEnter: () => {
          n && (l(!1), $.pause());
        },
        onMouseLeave: C,
      },
      o((y, k) => {
        const p = k.length ? { ...m } : { ...m, pointerEvents: "none" };
        return B.createElement(
          "div",
          { className: x(y), style: p, key: `container-${y}` },
          k.map((d) => {
            let { content: f, props: g } = d;
            return B.createElement(
              X0,
              {
                ...g,
                stacked: n,
                collapseAll: C,
                isIn: a(g.toastId, g.containerId),
                style: g.style,
                key: `toast-${g.key}`,
              },
              f
            );
          })
        );
      })
    )
  );
}
function ep() {
  const e = w.useRef();
  function t(c) {
    c.preventDefault(),
      $0
        .sendForm(
          "service_k49gded",
          "template_gbkyx8c",
          e.current,
          "Dr_TDKK9HAWTw7qNU"
        )
        .then(
          () => {
            $.success("Message sent!");
          },
          (m) => {
            console.log("emailjs", m),
              $.error("Failed to send email. Please try again.");
          }
        );
  }
  const [n, r] = w.useState(""),
    [l] = w.useState([
      "SQL Advisory",
      "Blackboard by SASL",
      "CraftCV by SASL",
      "Catalyst Collective by SASL",
      "PAST by SASL",
    ]),
    [i, o] = w.useState(!1);
  function a(c) {
    r(c), o(!1);
  }
  function u() {
    o((c) => !c);
  }
  return (
    w.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    s.jsxs("div", {
      className: "contactsection",
      children: [
        s.jsxs("div", {
          className: "get-in-touch",
          children: [
            s.jsxs("div", {
              className: "touch-form",
              children: [
                s.jsx("h2", { children: "Get in Touch" }),
                s.jsx("label", {
                  children: "Use the form below to contact us",
                }),
              ],
            }),
            s.jsxs("form", {
              onSubmit: t,
              ref: e,
              children: [
                s.jsxs("div", {
                  className: "input-text",
                  children: [
                    s.jsxs("div", {
                      className: "select-service select",
                      children: [
                        s.jsxs("div", {
                          className: `select-list ${i ? "select-clicked" : ""}`,
                          onClick: u,
                          children: [
                            s.jsx("span", {
                              className: "selected-list",
                              children: n || "Select Service",
                            }),
                            s.jsx("svg", {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 16 16",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: s.jsx("path", {
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
                        i &&
                          s.jsx("ul", {
                            className: "menu",
                            children: l.map((c) =>
                              s.jsx(
                                "li",
                                {
                                  className: `menu-item ${
                                    n === c ? "active" : ""
                                  }`,
                                  onClick: () => a(c),
                                  role: "option",
                                  name: "from_service",
                                  children: c,
                                },
                                c
                              )
                            ),
                          }),
                      ],
                    }),
                    s.jsx("input", {
                      type: "hidden",
                      name: "from_service",
                      value: n,
                    }),
                    s.jsx("input", {
                      type: "text",
                      placeholder: "Full name",
                      name: "from_name",
                    }),
                    s.jsx("input", {
                      type: "phonenumber",
                      placeholder: "Phone number",
                      name: "from_number",
                    }),
                    s.jsx("input", {
                      type: "email",
                      placeholder: "Email address",
                      name: "from_email",
                    }),
                    s.jsx("textarea", {
                      placeholder: "Message",
                      name: "message",
                    }),
                  ],
                }),
                s.jsx("button", {
                  type: "submit",
                  className: "contact contact-us book",
                  children: "Send Message",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "info-container",
              children: [
                s.jsxs("div", {
                  className: "info",
                  children: [
                    s.jsx("svg", {
                      width: "23",
                      height: "19",
                      viewBox: "0 0 23 19",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: s.jsx("path", {
                        d: "M23 1.625V6.125L11.5 10.625L0 6.125V1.625C0 1.32663 0.12116 1.04048 0.336827 0.829505C0.552494 0.618527 0.845001 0.5 1.15 0.5H21.85C22.155 0.5 22.4475 0.618527 22.6632 0.829505C22.8788 1.04048 23 1.32663 23 1.625ZM0 8.54825V17.375C0 17.6734 0.12116 17.9595 0.336827 18.1705C0.552494 18.3815 0.845001 18.5 1.15 18.5H21.85C22.155 18.5 22.4475 18.3815 22.6632 18.1705C22.8788 17.9595 23 17.6734 23 17.375V8.54825L11.5 13.0483L0 8.54825Z",
                        fill: "#FF5A31",
                      }),
                    }),
                    s.jsx("label", { children: "info@sqladvisory.co" }),
                  ],
                }),
                s.jsxs("div", {
                  className: "info",
                  children: [
                    s.jsxs("svg", {
                      width: "24",
                      height: "33",
                      viewBox: "0 0 24 33",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        s.jsx("g", {
                          "clip-path": "url(#clip0_83_665)",
                          children: s.jsx("path", {
                            d: "M23.9993 12.5C23.9993 21.228 13.8455 31.482 13.4138 31.9142C13.0386 32.2892 12.5299 32.4999 11.9995 32.4999C11.4691 32.4999 10.9604 32.2892 10.5853 31.9142C10.153 31.4817 -0.000732422 21.228 -0.000732422 12.5C-0.000732422 9.3174 1.26355 6.26515 3.51399 4.01472C5.76442 1.76428 8.81667 0.5 11.9993 0.5C15.1819 0.5 18.2341 1.76428 20.4845 4.01472C22.735 6.26515 23.9993 9.3174 23.9993 12.5ZM11.9993 18.5C13.186 18.5 14.346 18.1481 15.3327 17.4888C16.3194 16.8295 17.0884 15.8925 17.5425 14.7961C17.9967 13.6997 18.1155 12.4933 17.884 11.3295C17.6525 10.1656 17.081 9.09647 16.2419 8.25736C15.4028 7.41824 14.3337 6.8468 13.1698 6.61529C12.0059 6.38378 10.7995 6.5026 9.70317 6.95672C8.60681 7.41085 7.66974 8.17988 7.01045 9.16658C6.35116 10.1533 5.99927 11.3133 5.99927 12.5C5.99923 13.2879 6.15441 14.0682 6.45592 14.7961C6.75744 15.5241 7.1994 16.1856 7.75655 16.7427C8.31371 17.2999 8.97516 17.7418 9.70313 18.0433C10.4311 18.3449 11.2113 18.5 11.9993 18.5Z",
                            fill: "#FF5A31",
                          }),
                        }),
                        s.jsx("defs", {
                          children: s.jsx("clipPath", {
                            id: "clip0_83_665",
                            children: s.jsx("rect", {
                              width: "24",
                              height: "32",
                              fill: "white",
                              transform: "translate(-0.000732422 0.5)",
                            }),
                          }),
                        }),
                      ],
                    }),
                    s.jsx("label", { children: "Gbagada, Lagos" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsx("img", { className: "locationimage", src: _0, alt: "location" }),
        s.jsx("img", {
          className: "locationimage2",
          src: L0,
          alt: "location2",
        }),
        s.jsx(b0, {}),
      ],
    })
  );
}
function tp() {
  return s.jsxs(s.Fragment, {
    children: [s.jsx(Jl, {}), s.jsx(ep, {}), s.jsx(Gl, {})],
  });
}
const np = "./assets/service1-BFlH7t-M.png",
  rp = "./assets/service2-8KdPDdEE.png",
  lp = "./assets/service3-BxvDgZhV.png",
  ip = "./assets/service4-BC5zaOED.png",
  op = "./assets/service5-B97gPx2-.png",
  sp = "./assets/image2-DttbIvtW.png",
  ap = "./assets/image3-CMw3uu9x.png",
  up = "./assets/image4-BjoKMDFz.png",
  cp = "./assets/image5-frqUhIaZ.png",
  dp = "./assets/image6-cJ-FHXBv.png";
function fp() {
  return s.jsxs("section", {
    className: "service",
    children: [
      s.jsx("label", { children: "Our Services" }),
      s.jsx("div", {
        className: "service-grid",
        children: s.jsxs("div", {
          className: "section1",
          children: [
            s.jsxs("div", {
              className: "service-grid-container",
              children: [
                s.jsx("img", {
                  className: "serviceimage",
                  src: np,
                  alt: "image",
                }),
                s.jsx("img", {
                  className: "service-image1",
                  src: sp,
                  alt: "image",
                }),
                s.jsxs("div", {
                  className: "service-book",
                  children: [
                    s.jsxs("div", {
                      className: "service1",
                      children: [
                        s.jsx("label", {
                          children: "SQL Advisory (People Management)",
                        }),
                        s.jsx("hr", {}),
                        s.jsxs("p", {
                          children: [
                            "SASL’s SQL Advisory service empowers businesses with strategic HR solutions to optimise their workforce and drive organisational success.",
                            s.jsx("br", {}),
                            s.jsx("br", {}),
                            "Our People Management services encompass",
                            " ",
                            s.jsx("span", {
                              children: "Strategic HR Management",
                            }),
                            " (Developing and implementing effective HR strategies aligned with business objectives); ",
                            s.jsx("span", {
                              children: "Operational HR Support",
                            }),
                            " (Providing day-to-day HR support, including recruitment, onboarding, performance management, and employee relations); and",
                            " ",
                            s.jsx("span", { children: "Statutory Compliance" }),
                            " (Ensuring compliance with all relevant HR laws and regulations).",
                            s.jsx("br", {}),
                            s.jsx("br", {}),
                            "We believe that HR should be a strategic function that proactively addresses organisational needs, rather than a reactive response to issues. By partnering with SASL, you can optimise your human capital and achieve your business goals.",
                          ],
                        }),
                      ],
                    }),
                    " ",
                    s.jsx(H, {
                      to: "/contact",
                      children: s.jsx("label", {
                        className: "contact contact-us book",
                        children: "Book Us Now",
                      }),
                    }),
                    " ",
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "service-grid-container policy",
              children: [
                " ",
                s.jsxs("div", {
                  className: "service-book service2-book",
                  children: [
                    s.jsxs("div", {
                      className: "service2",
                      children: [
                        s.jsx("label", {
                          children: "Blackboard by SASL (Policy Validation)",
                        }),
                        s.jsx("hr", {}),
                        s.jsxs("p", {
                          children: [
                            "SASL’s Policy Validation service ensures your policies align with regulations and best practices. Our expert team meticulously reviews and validates a wide range of corporate, departmental, and industry-specific policies, to safeguard your compliance and mitigate risks.",
                            s.jsx("br", {}),
                            s.jsx("br", {}),
                            "We understand that staying compliant with ever-evolving regulations can be complex and time-consuming. Our comprehensive policy validation process involves:",
                            s.jsxs("ul", {
                              children: [
                                s.jsxs("li", {
                                  children: [
                                    s.jsx("span", {
                                      children: "Thorough review",
                                    }),
                                    ": Our experts carefully examine your policies to identify any inconsistencies, gaps, or areas requiring improvement.",
                                    " ",
                                  ],
                                }),
                                s.jsxs("li", {
                                  children: [
                                    s.jsx("span", {
                                      children: "Regulatory analysis",
                                    }),
                                    ": We compare your policies against relevant laws and regulations to ensure compliance.",
                                    " ",
                                  ],
                                }),
                                s.jsxs("li", {
                                  children: [
                                    s.jsx("span", {
                                      children: "Best practice assessment",
                                    }),
                                    ": We evaluate your policies against industry best practices to identify opportunities for enhancement.",
                                    " ",
                                  ],
                                }),
                                s.jsxs("li", {
                                  children: [
                                    s.jsx("span", {
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
                    s.jsx(H, {
                      to: "/contact",
                      children: s.jsx("label", {
                        className: "contact contact-us book",
                        children: "Book Us Now",
                      }),
                    }),
                    " ",
                  ],
                }),
                s.jsx("img", {
                  className: "serviceimage",
                  src: rp,
                  alt: "image",
                }),
                s.jsx("img", {
                  className: "service-image2",
                  src: ap,
                  alt: "image",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "service-grid-container",
              children: [
                " ",
                s.jsx("img", { className: "serviceimage", src: lp, alt: "" }),
                s.jsx("img", { className: "service-image2", src: up, alt: "" }),
                s.jsxs("div", {
                  className: "service-book",
                  children: [
                    s.jsxs("div", {
                      className: "service1",
                      children: [
                        s.jsx("label", {
                          children: "CraftCV by SASL (CV Writing)",
                        }),
                        s.jsx("hr", {}),
                        s.jsx("p", {
                          children:
                            "SASL’s CV writing service transforms your profile into a powerful tool that showcases your unique value proposition. Our expertly crafted CVs help you stand out in the competitive job market by creating a compelling narrative that highlights your skills and achievements. We started this service to share our expertise and help individuals improve their job prospects through optimised resumes.",
                        }),
                      ],
                    }),
                    " ",
                    s.jsx(H, {
                      to: "/contact",
                      children: s.jsx("label", {
                        className: "contact contact-us book",
                        children: "Book Us Now",
                      }),
                    }),
                    " ",
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "service-grid-container",
              children: [
                " ",
                s.jsxs("div", {
                  className: "service-book service2-book",
                  children: [
                    s.jsxs("div", {
                      className: "service2",
                      children: [
                        s.jsx("label", {
                          children:
                            "Catalyst Collective by SASL (Startup Support)",
                        }),
                        s.jsx("hr", {}),
                        s.jsxs("p", {
                          children: [
                            "SASL’s Catalyst Collective is a startup support programme that equips startups with the foundational building blocks for long-term business success. Catalyst Collective empowers founders with the knowledge and skills required to build a resilient foundation for their ventures.",
                            s.jsx("br", {}),
                            s.jsx("br", {}),
                            "Catalyst Collective offers a unique blend of strategic insights and practical guidance. Through interactive sessions and expert consultations, the programme will set founders on the path to gaining mastery in critical areas like research & strategy, people management, legal structures, and operational frameworks. This ensures founders not only have a compelling business model but also the operational efficiency and strong team culture needed to thrive in today's competitive landscape.",
                          ],
                        }),
                      ],
                    }),
                    " ",
                    s.jsx(H, {
                      to: "/contact",
                      children: s.jsx("label", {
                        className: "contact contact-us book",
                        children: "Book Us Now",
                      }),
                    }),
                    " ",
                  ],
                }),
                s.jsx("img", { className: "serviceimage", src: ip, alt: "" }),
                s.jsx("img", { className: "service-image2", src: cp, alt: "" }),
              ],
            }),
            s.jsxs("div", {
              className: "service-grid-container",
              children: [
                " ",
                s.jsx("img", { className: "serviceimage", src: op, alt: "" }),
                s.jsx("img", { className: "service-image1", src: dp, alt: "" }),
                s.jsxs("div", {
                  className: "service-book",
                  children: [
                    s.jsxs("div", {
                      className: "service1",
                      children: [
                        s.jsx("label", {
                          children:
                            "PAST by SASL (Retirement Planning & Support)",
                        }),
                        s.jsx("hr", {}),
                        s.jsx("p", {
                          children:
                            "The Post Active Service Transition (PAST) programme is intended for those contemplating retirement from paid employment, for example, civil servants, private sector employees and military personnel. It would also cover those who had retired not too long ago and need help to refocus their efforts on living productively after active service. The programme covers topical matters, including understanding the transition process, managing finances, developing resumes, interviewing for private or public sector jobs, navigating the job market, and managing mental and emotional well-being.",
                        }),
                      ],
                    }),
                    " ",
                    s.jsx(H, {
                      to: "/contact",
                      children: s.jsx("label", {
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
function pp() {
  return (
    w.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    s.jsx("div", {
      className: "section2",
      children: s.jsx("div", {
        className: "vacany-section1",
        children: s.jsx("div", {
          className: "vacany-section2",
          children: s.jsx("div", {
            className: "vacany-section3",
            children: s.jsx("div", {
              className: "vacany-section4",
              children: s.jsx("div", {
                className: "vacany-section5",
                children: s.jsx("div", {
                  className: "vacany-section6",
                  children: s.jsxs("div", {
                    className: "vacany-section7",
                    children: [
                      s.jsx(Jl, {}),
                      s.jsx(fp, {}),
                      s.jsx(v1, { show: !1 }),
                      s.jsx(Gl, {}),
                    ],
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
const hp = [
  {
    Time: "10 mins ago",
    logo: "./Logo.png",
    "job-title": "Field Sales Representative",
    "company-name": "Bauch, Schuppe and Schulist Co",
    role: "Full-Time",
    allowance: "₦120,000 + bonuses",
    location: "Lagos, Nigeria",
    details:
      "Drive revenue growth by identifying and closing new sales opportunities. Manage and negotiate with clients, generate leads, qualify prospects, and successfully sell our products and services to achieve sales quotas. ",
    apply: "https://forms.gle/USAR9irs7uv73MtB9",
  },
  {
    Time: "10 mins ago",
    logo: "",
    "job-title": "Customer Service Representative",
    "company-name": "Linear Company",
    role: "Full-Time (Remote)",
    allowance: "₦80,000",
    location: "Lagos, Nigeria",
    details:
      "As a Customer Service Representative, the role will be crucial in providing exceptional support to our customers. You will be responsible for handling customer inquiries, resolving issues, and ensuring customer satisfaction. ",
    apply: "https://forms.gle/USAR9irs7uv73MtB9",
  },
  {
    Time: "10 mins ago",
    logo: "",
    "job-title": "Marketing & Pricing Analyst (THDA)",
    "company-name": "Linear Company",
    role: "Full-Time",
    allowance: "₦3 million (monthly net) + bonuses",
    location: "Lekki, Lagos, NG",
    details:
      "The Marketing & Pricing Analyst drives THDA's revenue growth by conducting market research, analysing pricing, and developing effective marketing campaigns. This role requires strong analytical and communication skills and a deep understanding of the logistics industry. The Analyst will be pivotal in positioning THDA as Nigeria's preferred choice for warehousing and logistics solutions",
    apply: "https://forms.gle/urg7naTPGnHtpkvw5",
  },
];
function mp() {
  return s.jsxs("section", {
    className: "vacancies",
    children: [
      s.jsxs("div", {
        className: "explore",
        children: [
          s.jsx("h2", { children: "Vacancies" }),
          s.jsx("label", {
            children:
              "Explore the Latest Career Opportunities Tailored for You",
          }),
        ],
      }),
      s.jsx("div", {
        className: "vacany-jobs",
        children: hp.map((e) =>
          s.jsxs("div", {
            className: "job",
            children: [
              s.jsx("div", {
                className: "logo-title",
                children: s.jsx("div", {
                  className: "company-title",
                  children: s.jsx("label", {
                    className: "job-title",
                    children: e["job-title"],
                  }),
                }),
              }),
              s.jsxs("div", {
                className: "p-jobdetails",
                children: [
                  " ",
                  s.jsxs("div", {
                    className: "job-details",
                    children: [
                      s.jsxs("ul", {
                        children: [
                          s.jsxs("li", {
                            children: [
                              s.jsxs("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  s.jsx("path", {
                                    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                                    stroke: "#FF5A31",
                                    strokeOpacity: "0.7",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                  s.jsx("path", {
                                    d: "M12 6V12L16 14",
                                    stroke: "#FF5A31",
                                    strokeOpacity: "0.7",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                ],
                              }),
                              s.jsx("label", { children: e.role }),
                            ],
                          }),
                          s.jsxs("li", {
                            children: [
                              s.jsxs("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  s.jsxs("mask", {
                                    id: "mask0_184_154",
                                    maskUnits: "userSpaceOnUse",
                                    x: "0",
                                    y: "0",
                                    width: "24",
                                    height: "24",
                                    children: [
                                      s.jsx("path", {
                                        d: "M0 1.90735e-06H24V24H0V1.90735e-06Z",
                                        fill: "white",
                                      }),
                                      s.jsx("path", {
                                        d: "M23 23V1H1V23H23Z",
                                        stroke: "white",
                                        strokeWidth: "2",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("g", {
                                    mask: "url(#mask0_184_154)",
                                    children: [
                                      s.jsx("path", {
                                        d: "M19.3091 6.37332V4.49621C19.3091 3.46187 18.4705 2.62332 17.4362 2.62332H2.80908C1.77357 2.62332 0.934082 3.46281 0.934082 4.49832C0.934082 5.53384 1.77357 6.37332 2.80908 6.37332H21.1862C22.2205 6.37332 23.0591 7.21187 23.0591 8.24621V11.0608",
                                        stroke: "#FF5A31",
                                        strokeOpacity: "0.7",
                                        strokeWidth: "2",
                                        "stroke-miterlimit": "10",
                                      }),
                                      s.jsx("path", {
                                        d: "M23.0591 16.6858V19.5004C23.0591 20.5348 22.2205 21.3733 21.1862 21.3733H2.80908C1.77357 21.3733 0.934082 20.5339 0.934082 19.4983V4.49832",
                                        stroke: "#FF5A31",
                                        strokeOpacity: "0.7",
                                        strokeWidth: "2",
                                        "stroke-miterlimit": "10",
                                      }),
                                      s.jsx("path", {
                                        d: "M23.0591 16.6858H18.3716C16.8183 16.6858 15.5591 15.4266 15.5591 13.8733C15.5591 12.32 16.8183 11.0608 18.3716 11.0608H23.0591V16.6858Z",
                                        stroke: "#FF5A31",
                                        strokeOpacity: "0.7",
                                        strokeWidth: "2",
                                        "stroke-miterlimit": "10",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsx("label", { children: e.allowance }),
                            ],
                          }),
                          s.jsxs("li", {
                            children: [
                              s.jsxs("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  s.jsx("path", {
                                    d: "M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",
                                    stroke: "#FF5A31",
                                    strokeOpacity: "0.7",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                  s.jsx("path", {
                                    d: "M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",
                                    stroke: "#FF5A31",
                                    strokeOpacity: "0.7",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                ],
                              }),
                              s.jsx("label", { children: e.location }),
                            ],
                          }),
                        ],
                      }),
                      s.jsx(H, {
                        target: "_blank",
                        to: e.apply,
                        className: "apply",
                        children: s.jsx("label", {
                          className: "apply",
                          children: "View JD & Apply",
                        }),
                      }),
                    ],
                  }),
                  s.jsx("p", { children: e.details }),
                ],
              }),
            ],
          })
        ),
      }),
      s.jsxs("div", {
        className: "buttons",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("button", { className: "button1", children: "1" }),
              s.jsx("button", { className: "button2", children: "2" }),
            ],
          }),
          s.jsxs("button", {
            children: [
              "Next",
              " ",
              s.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: s.jsx("path", {
                  d: "M9 18L15 12L9 6",
                  stroke: "#6C757D",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function vp() {
  return s.jsx("div", {
    className: "vacany-section",
    children: s.jsx("div", {
      className: "vacany-section1",
      children: s.jsx("div", {
        className: "vacany-section2",
        children: s.jsx("div", {
          className: "vacany-section3",
          children: s.jsx("div", {
            className: "vacany-section4",
            children: s.jsxs("div", {
              className: "vacany-section5",
              children: [s.jsx(Jl, {}), s.jsx(mp, {}), s.jsx(Gl, {})],
            }),
          }),
        }),
      }),
    }),
  });
}
function gp() {
  return s.jsx(i0, {
    children: s.jsxs(J2, {
      children: [
        s.jsx(Un, { path: "/", element: s.jsx(N0, {}) }),
        s.jsx(Un, { path: "services", element: s.jsx(pp, {}) }),
        s.jsx(Un, { path: "contact", element: s.jsx(tp, {}) }),
        " ",
        s.jsx(Un, { path: "vacancy", element: s.jsx(vp, {}) }),
      ],
    }),
  });
}
i1(document.getElementById("root")).render(
  s.jsx(w.StrictMode, { children: s.jsx(gp, {}) })
);
