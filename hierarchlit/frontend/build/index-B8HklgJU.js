var Uo = { exports: {} }, Or = {}, Bo = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha;
function sd() {
  if (Ha) return ie;
  Ha = 1;
  var u = Symbol.for("react.element"), p = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), g = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function T(y) {
    return y === null || typeof y != "object" ? null : (y = _ && y[_] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var W = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, V = Object.assign, A = {};
  function K(y, z, te) {
    this.props = y, this.context = z, this.refs = A, this.updater = te || W;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(y, z) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, z, "setState");
  }, K.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = K.prototype;
  function q(y, z, te) {
    this.props = y, this.context = z, this.refs = A, this.updater = te || W;
  }
  var M = q.prototype = new Z();
  M.constructor = q, V(M, K.prototype), M.isPureReactComponent = !0;
  var ee = Array.isArray, le = Object.prototype.hasOwnProperty, ve = { current: null }, se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Se(y, z, te) {
    var re, ue = {}, ae = null, me = null;
    if (z != null) for (re in z.ref !== void 0 && (me = z.ref), z.key !== void 0 && (ae = "" + z.key), z) le.call(z, re) && !se.hasOwnProperty(re) && (ue[re] = z[re]);
    var E = arguments.length - 2;
    if (E === 1) ue.children = te;
    else if (1 < E) {
      for (var R = Array(E), b = 0; b < E; b++) R[b] = arguments[b + 2];
      ue.children = R;
    }
    if (y && y.defaultProps) for (re in E = y.defaultProps, E) ue[re] === void 0 && (ue[re] = E[re]);
    return { $$typeof: u, type: y, key: ae, ref: me, props: ue, _owner: ve.current };
  }
  function ce(y, z) {
    return { $$typeof: u, type: y.type, key: z, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function Re(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function Be(y) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(te) {
      return z[te];
    });
  }
  var Ce = /\/+/g;
  function Le(y, z) {
    return typeof y == "object" && y !== null && y.key != null ? Be("" + y.key) : z.toString(36);
  }
  function _e(y, z, te, re, ue) {
    var ae = typeof y;
    (ae === "undefined" || ae === "boolean") && (y = null);
    var me = !1;
    if (y === null) me = !0;
    else switch (ae) {
      case "string":
      case "number":
        me = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case u:
          case p:
            me = !0;
        }
    }
    if (me) return me = y, ue = ue(me), y = re === "" ? "." + Le(me, 0) : re, ee(ue) ? (te = "", y != null && (te = y.replace(Ce, "$&/") + "/"), _e(ue, z, te, "", function(b) {
      return b;
    })) : ue != null && (Re(ue) && (ue = ce(ue, te + (!ue.key || me && me.key === ue.key ? "" : ("" + ue.key).replace(Ce, "$&/") + "/") + y)), z.push(ue)), 1;
    if (me = 0, re = re === "" ? "." : re + ":", ee(y)) for (var E = 0; E < y.length; E++) {
      ae = y[E];
      var R = re + Le(ae, E);
      me += _e(ae, z, te, R, ue);
    }
    else if (R = T(y), typeof R == "function") for (y = R.call(y), E = 0; !(ae = y.next()).done; ) ae = ae.value, R = re + Le(ae, E++), me += _e(ae, z, te, R, ue);
    else if (ae === "object") throw z = String(y), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return me;
  }
  function Fe(y, z, te) {
    if (y == null) return y;
    var re = [], ue = 0;
    return _e(y, re, "", "", function(ae) {
      return z.call(te, ae, ue++);
    }), re;
  }
  function He(y) {
    if (y._status === -1) {
      var z = y._result;
      z = z(), z.then(function(te) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = te);
      }, function(te) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = te);
      }), y._status === -1 && (y._status = 0, y._result = z);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var we = { current: null }, j = { transition: null }, X = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: j, ReactCurrentOwner: ve };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ie.Children = { map: Fe, forEach: function(y, z, te) {
    Fe(y, function() {
      z.apply(this, arguments);
    }, te);
  }, count: function(y) {
    var z = 0;
    return Fe(y, function() {
      z++;
    }), z;
  }, toArray: function(y) {
    return Fe(y, function(z) {
      return z;
    }) || [];
  }, only: function(y) {
    if (!Re(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, ie.Component = K, ie.Fragment = o, ie.Profiler = c, ie.PureComponent = q, ie.StrictMode = a, ie.Suspense = x, ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, ie.act = D, ie.cloneElement = function(y, z, te) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var re = V({}, y.props), ue = y.key, ae = y.ref, me = y._owner;
    if (z != null) {
      if (z.ref !== void 0 && (ae = z.ref, me = ve.current), z.key !== void 0 && (ue = "" + z.key), y.type && y.type.defaultProps) var E = y.type.defaultProps;
      for (R in z) le.call(z, R) && !se.hasOwnProperty(R) && (re[R] = z[R] === void 0 && E !== void 0 ? E[R] : z[R]);
    }
    var R = arguments.length - 2;
    if (R === 1) re.children = te;
    else if (1 < R) {
      E = Array(R);
      for (var b = 0; b < R; b++) E[b] = arguments[b + 2];
      re.children = E;
    }
    return { $$typeof: u, type: y.type, key: ue, ref: ae, props: re, _owner: me };
  }, ie.createContext = function(y) {
    return y = { $$typeof: g, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: d, _context: y }, y.Consumer = y;
  }, ie.createElement = Se, ie.createFactory = function(y) {
    var z = Se.bind(null, y);
    return z.type = y, z;
  }, ie.createRef = function() {
    return { current: null };
  }, ie.forwardRef = function(y) {
    return { $$typeof: m, render: y };
  }, ie.isValidElement = Re, ie.lazy = function(y) {
    return { $$typeof: P, _payload: { _status: -1, _result: y }, _init: He };
  }, ie.memo = function(y, z) {
    return { $$typeof: C, type: y, compare: z === void 0 ? null : z };
  }, ie.startTransition = function(y) {
    var z = j.transition;
    j.transition = {};
    try {
      y();
    } finally {
      j.transition = z;
    }
  }, ie.unstable_act = D, ie.useCallback = function(y, z) {
    return we.current.useCallback(y, z);
  }, ie.useContext = function(y) {
    return we.current.useContext(y);
  }, ie.useDebugValue = function() {
  }, ie.useDeferredValue = function(y) {
    return we.current.useDeferredValue(y);
  }, ie.useEffect = function(y, z) {
    return we.current.useEffect(y, z);
  }, ie.useId = function() {
    return we.current.useId();
  }, ie.useImperativeHandle = function(y, z, te) {
    return we.current.useImperativeHandle(y, z, te);
  }, ie.useInsertionEffect = function(y, z) {
    return we.current.useInsertionEffect(y, z);
  }, ie.useLayoutEffect = function(y, z) {
    return we.current.useLayoutEffect(y, z);
  }, ie.useMemo = function(y, z) {
    return we.current.useMemo(y, z);
  }, ie.useReducer = function(y, z, te) {
    return we.current.useReducer(y, z, te);
  }, ie.useRef = function(y) {
    return we.current.useRef(y);
  }, ie.useState = function(y) {
    return we.current.useState(y);
  }, ie.useSyncExternalStore = function(y, z, te) {
    return we.current.useSyncExternalStore(y, z, te);
  }, ie.useTransition = function() {
    return we.current.useTransition();
  }, ie.version = "18.3.1", ie;
}
var Va;
function Xo() {
  return Va || (Va = 1, Bo.exports = sd()), Bo.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $a;
function ud() {
  if ($a) return Or;
  $a = 1;
  var u = Xo(), p = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(m, x, C) {
    var P, _ = {}, T = null, W = null;
    C !== void 0 && (T = "" + C), x.key !== void 0 && (T = "" + x.key), x.ref !== void 0 && (W = x.ref);
    for (P in x) a.call(x, P) && !d.hasOwnProperty(P) && (_[P] = x[P]);
    if (m && m.defaultProps) for (P in x = m.defaultProps, x) _[P] === void 0 && (_[P] = x[P]);
    return { $$typeof: p, type: m, key: T, ref: W, props: _, _owner: c.current };
  }
  return Or.Fragment = o, Or.jsx = g, Or.jsxs = g, Or;
}
var Qa;
function ad() {
  return Qa || (Qa = 1, Uo.exports = ud()), Uo.exports;
}
var B = ad(), ne = Xo(), Bl = {}, Ho = { exports: {} }, rt = {}, Vo = { exports: {} }, $o = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ka;
function cd() {
  return Ka || (Ka = 1, (function(u) {
    function p(j, X) {
      var D = j.length;
      j.push(X);
      e: for (; 0 < D; ) {
        var y = D - 1 >>> 1, z = j[y];
        if (0 < c(z, X)) j[y] = X, j[D] = z, D = y;
        else break e;
      }
    }
    function o(j) {
      return j.length === 0 ? null : j[0];
    }
    function a(j) {
      if (j.length === 0) return null;
      var X = j[0], D = j.pop();
      if (D !== X) {
        j[0] = D;
        e: for (var y = 0, z = j.length, te = z >>> 1; y < te; ) {
          var re = 2 * (y + 1) - 1, ue = j[re], ae = re + 1, me = j[ae];
          if (0 > c(ue, D)) ae < z && 0 > c(me, ue) ? (j[y] = me, j[ae] = D, y = ae) : (j[y] = ue, j[re] = D, y = re);
          else if (ae < z && 0 > c(me, D)) j[y] = me, j[ae] = D, y = ae;
          else break e;
        }
      }
      return X;
    }
    function c(j, X) {
      var D = j.sortIndex - X.sortIndex;
      return D !== 0 ? D : j.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      u.unstable_now = function() {
        return d.now();
      };
    } else {
      var g = Date, m = g.now();
      u.unstable_now = function() {
        return g.now() - m;
      };
    }
    var x = [], C = [], P = 1, _ = null, T = 3, W = !1, V = !1, A = !1, K = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function M(j) {
      for (var X = o(C); X !== null; ) {
        if (X.callback === null) a(C);
        else if (X.startTime <= j) a(C), X.sortIndex = X.expirationTime, p(x, X);
        else break;
        X = o(C);
      }
    }
    function ee(j) {
      if (A = !1, M(j), !V) if (o(x) !== null) V = !0, He(le);
      else {
        var X = o(C);
        X !== null && we(ee, X.startTime - j);
      }
    }
    function le(j, X) {
      V = !1, A && (A = !1, Z(Se), Se = -1), W = !0;
      var D = T;
      try {
        for (M(X), _ = o(x); _ !== null && (!(_.expirationTime > X) || j && !Be()); ) {
          var y = _.callback;
          if (typeof y == "function") {
            _.callback = null, T = _.priorityLevel;
            var z = y(_.expirationTime <= X);
            X = u.unstable_now(), typeof z == "function" ? _.callback = z : _ === o(x) && a(x), M(X);
          } else a(x);
          _ = o(x);
        }
        if (_ !== null) var te = !0;
        else {
          var re = o(C);
          re !== null && we(ee, re.startTime - X), te = !1;
        }
        return te;
      } finally {
        _ = null, T = D, W = !1;
      }
    }
    var ve = !1, se = null, Se = -1, ce = 5, Re = -1;
    function Be() {
      return !(u.unstable_now() - Re < ce);
    }
    function Ce() {
      if (se !== null) {
        var j = u.unstable_now();
        Re = j;
        var X = !0;
        try {
          X = se(!0, j);
        } finally {
          X ? Le() : (ve = !1, se = null);
        }
      } else ve = !1;
    }
    var Le;
    if (typeof q == "function") Le = function() {
      q(Ce);
    };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), Fe = _e.port2;
      _e.port1.onmessage = Ce, Le = function() {
        Fe.postMessage(null);
      };
    } else Le = function() {
      K(Ce, 0);
    };
    function He(j) {
      se = j, ve || (ve = !0, Le());
    }
    function we(j, X) {
      Se = K(function() {
        j(u.unstable_now());
      }, X);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, u.unstable_continueExecution = function() {
      V || W || (V = !0, He(le));
    }, u.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ce = 0 < j ? Math.floor(1e3 / j) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, u.unstable_getFirstCallbackNode = function() {
      return o(x);
    }, u.unstable_next = function(j) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = T;
      }
      var D = T;
      T = X;
      try {
        return j();
      } finally {
        T = D;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(j, X) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var D = T;
      T = j;
      try {
        return X();
      } finally {
        T = D;
      }
    }, u.unstable_scheduleCallback = function(j, X, D) {
      var y = u.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? y + D : y) : D = y, j) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = D + z, j = { id: P++, callback: X, priorityLevel: j, startTime: D, expirationTime: z, sortIndex: -1 }, D > y ? (j.sortIndex = D, p(C, j), o(x) === null && j === o(C) && (A ? (Z(Se), Se = -1) : A = !0, we(ee, D - y))) : (j.sortIndex = z, p(x, j), V || W || (V = !0, He(le))), j;
    }, u.unstable_shouldYield = Be, u.unstable_wrapCallback = function(j) {
      var X = T;
      return function() {
        var D = T;
        T = X;
        try {
          return j.apply(this, arguments);
        } finally {
          T = D;
        }
      };
    };
  })($o)), $o;
}
var qa;
function fd() {
  return qa || (qa = 1, Vo.exports = cd()), Vo.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ya;
function dd() {
  if (Ya) return rt;
  Ya = 1;
  var u = Xo(), p = fd();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), c = {};
  function d(e, t) {
    g(e, t), g(e + "Capture", t);
  }
  function g(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, _ = {};
  function T(e) {
    return x.call(_, e) ? !0 : x.call(P, e) ? !1 : C.test(e) ? _[e] = !0 : (P[e] = !0, !1);
  }
  function W(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function V(e, t, n, r) {
    if (t === null || typeof t > "u" || W(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
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
  function A(e, t, n, r, l, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    K[e] = new A(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    K[t] = new A(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    K[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    K[e] = new A(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    K[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    K[e] = new A(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    K[e] = new A(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    K[e] = new A(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    K[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Z = /[\-:]([a-z])/g;
  function q(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Z,
      q
    );
    K[t] = new A(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Z, q);
    K[t] = new A(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Z, q);
    K[t] = new A(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    K[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    K[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function M(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (V(t, n, l, r) && (n = null), r || l === null ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, le = Symbol.for("react.element"), ve = Symbol.for("react.portal"), se = Symbol.for("react.fragment"), Se = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), Re = Symbol.for("react.provider"), Be = Symbol.for("react.context"), Ce = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), Fe = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), j = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = j && e[j] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var D = Object.assign, y;
  function z(e) {
    if (y === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      y = t && t[1] || "";
    }
    return `
` + y + e;
  }
  var te = !1;
  function re(e, t) {
    if (!e || te) return "";
    te = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (k) {
          var r = k;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (k) {
          r = k;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (k) {
          r = k;
        }
        e();
      }
    } catch (k) {
      if (k && r && typeof k.stack == "string") {
        for (var l = k.stack.split(`
`), i = r.stack.split(`
`), s = l.length - 1, f = i.length - 1; 1 <= s && 0 <= f && l[s] !== i[f]; ) f--;
        for (; 1 <= s && 0 <= f; s--, f--) if (l[s] !== i[f]) {
          if (s !== 1 || f !== 1)
            do
              if (s--, f--, 0 > f || l[s] !== i[f]) {
                var h = `
` + l[s].replace(" at new ", " at ");
                return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), h;
              }
            while (1 <= s && 0 <= f);
          break;
        }
      }
    } finally {
      te = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return z(e.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = re(e.type, !1), e;
      case 11:
        return e = re(e.type.render, !1), e;
      case 1:
        return e = re(e.type, !0), e;
      default:
        return "";
    }
  }
  function ae(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case se:
        return "Fragment";
      case ve:
        return "Portal";
      case ce:
        return "Profiler";
      case Se:
        return "StrictMode";
      case Le:
        return "Suspense";
      case _e:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Be:
        return (e.displayName || "Context") + ".Consumer";
      case Re:
        return (e._context.displayName || "Context") + ".Provider";
      case Ce:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Fe:
        return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
      case He:
        t = e._payload, e = e._init;
        try {
          return ae(e(t));
        } catch {
        }
    }
    return null;
  }
  function me(e) {
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
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return ae(t);
      case 8:
        return t === Se ? "StrictMode" : "Mode";
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
  function E(e) {
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
  function R(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function b(e) {
    var t = R(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(s) {
        r = "" + s, i.call(this, s);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(s) {
        r = "" + s;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function oe(e) {
    e._valueTracker || (e._valueTracker = b(e));
  }
  function Me(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = R(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ge(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ze(e, t) {
    var n = t.checked;
    return D({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function kt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = E(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function en(e, t) {
    t = t.checked, t != null && M(e, "checked", t, !1);
  }
  function ql(e, t) {
    en(e, t);
    var n = E(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yl(e, t.type, E(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Zo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Yl(e, t, n) {
    (t !== "number" || ge(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var $n = Array.isArray;
  function vn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + E(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Gl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return D({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Jo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if ($n(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: E(n) };
  }
  function bo(e, t) {
    var n = E(t.value), r = E(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function es(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ts(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Xl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ts(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Tr, ns = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Tr = Tr || document.createElement("div"), Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Tr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Qn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kn = {
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
    strokeWidth: !0
  }, cc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kn).forEach(function(e) {
    cc.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Kn[t] = Kn[e];
    });
  });
  function rs(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kn.hasOwnProperty(e) && Kn[e] ? ("" + t).trim() : t + "px";
  }
  function ls(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = rs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var fc = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Zl(e, t) {
    if (t) {
      if (fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Jl(e, t) {
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
  var bl = null;
  function ei(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ti = null, gn = null, yn = null;
  function is(e) {
    if (e = pr(e)) {
      if (typeof ti != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = nl(t), ti(e.stateNode, e.type, t));
    }
  }
  function os(e) {
    gn ? yn ? yn.push(e) : yn = [e] : gn = e;
  }
  function ss() {
    if (gn) {
      var e = gn, t = yn;
      if (yn = gn = null, is(e), t) for (e = 0; e < t.length; e++) is(t[e]);
    }
  }
  function us(e, t) {
    return e(t);
  }
  function as() {
  }
  var ni = !1;
  function cs(e, t, n) {
    if (ni) return e(t, n);
    ni = !0;
    try {
      return us(e, t, n);
    } finally {
      ni = !1, (gn !== null || yn !== null) && (as(), ss());
    }
  }
  function qn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = nl(n);
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var ri = !1;
  if (m) try {
    var Yn = {};
    Object.defineProperty(Yn, "passive", { get: function() {
      ri = !0;
    } }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn);
  } catch {
    ri = !1;
  }
  function dc(e, t, n, r, l, i, s, f, h) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (O) {
      this.onError(O);
    }
  }
  var Gn = !1, Rr = null, jr = !1, li = null, hc = { onError: function(e) {
    Gn = !0, Rr = e;
  } };
  function pc(e, t, n, r, l, i, s, f, h) {
    Gn = !1, Rr = null, dc.apply(hc, arguments);
  }
  function mc(e, t, n, r, l, i, s, f, h) {
    if (pc.apply(this, arguments), Gn) {
      if (Gn) {
        var k = Rr;
        Gn = !1, Rr = null;
      } else throw Error(o(198));
      jr || (jr = !0, li = k);
    }
  }
  function tn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function fs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ds(e) {
    if (tn(e) !== e) throw Error(o(188));
  }
  function vc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = tn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return ds(l), e;
          if (i === r) return ds(l), t;
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var s = !1, f = l.child; f; ) {
          if (f === n) {
            s = !0, n = l, r = i;
            break;
          }
          if (f === r) {
            s = !0, r = l, n = i;
            break;
          }
          f = f.sibling;
        }
        if (!s) {
          for (f = i.child; f; ) {
            if (f === n) {
              s = !0, n = i, r = l;
              break;
            }
            if (f === r) {
              s = !0, r = i, n = l;
              break;
            }
            f = f.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function hs(e) {
    return e = vc(e), e !== null ? ps(e) : null;
  }
  function ps(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ps(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ms = p.unstable_scheduleCallback, vs = p.unstable_cancelCallback, gc = p.unstable_shouldYield, yc = p.unstable_requestPaint, Pe = p.unstable_now, Sc = p.unstable_getCurrentPriorityLevel, ii = p.unstable_ImmediatePriority, gs = p.unstable_UserBlockingPriority, Ar = p.unstable_NormalPriority, wc = p.unstable_LowPriority, ys = p.unstable_IdlePriority, Fr = null, xt = null;
  function kc(e) {
    if (xt && typeof xt.onCommitFiberRoot == "function") try {
      xt.onCommitFiberRoot(Fr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var pt = Math.clz32 ? Math.clz32 : Ec, xc = Math.log, _c = Math.LN2;
  function Ec(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xc(e) / _c | 0) | 0;
  }
  var Dr = 64, Wr = 4194304;
  function Xn(e) {
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
  function Ur(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var f = s & ~l;
      f !== 0 ? r = Xn(f) : (i &= s, i !== 0 && (r = Xn(i)));
    } else s = n & ~l, s !== 0 ? r = Xn(s) : i !== 0 && (r = Xn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - pt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Cc(e, t) {
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
  function Mc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var s = 31 - pt(i), f = 1 << s, h = l[s];
      h === -1 ? ((f & n) === 0 || (f & r) !== 0) && (l[s] = Cc(f, t)) : h <= t && (e.expiredLanes |= f), i &= ~f;
    }
  }
  function oi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ss() {
    var e = Dr;
    return Dr <<= 1, (Dr & 4194240) === 0 && (Dr = 64), e;
  }
  function si(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
  }
  function zc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - pt(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function ui(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - pt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var pe = 0;
  function ws(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var ks, ai, xs, _s, Es, ci = !1, Br = [], jt = null, At = null, Ft = null, Jn = /* @__PURE__ */ new Map(), bn = /* @__PURE__ */ new Map(), Dt = [], Ic = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Cs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jt = null;
        break;
      case "dragenter":
      case "dragleave":
        At = null;
        break;
      case "mouseover":
      case "mouseout":
        Ft = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bn.delete(t.pointerId);
    }
  }
  function er(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = pr(t), t !== null && ai(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Oc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return jt = er(jt, e, t, n, r, l), !0;
      case "dragenter":
        return At = er(At, e, t, n, r, l), !0;
      case "mouseover":
        return Ft = er(Ft, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Jn.set(i, er(Jn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, bn.set(i, er(bn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Ms(e) {
    var t = nn(e.target);
    if (t !== null) {
      var n = tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = fs(n), t !== null) {
            e.blockedOn = t, Es(e.priority, function() {
              xs(n);
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
  function Hr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        bl = r, n.target.dispatchEvent(r), bl = null;
      } else return t = pr(n), t !== null && ai(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function zs(e, t, n) {
    Hr(e) && n.delete(t);
  }
  function Pc() {
    ci = !1, jt !== null && Hr(jt) && (jt = null), At !== null && Hr(At) && (At = null), Ft !== null && Hr(Ft) && (Ft = null), Jn.forEach(zs), bn.forEach(zs);
  }
  function tr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ci || (ci = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Pc)));
  }
  function nr(e) {
    function t(l) {
      return tr(l, e);
    }
    if (0 < Br.length) {
      tr(Br[0], e);
      for (var n = 1; n < Br.length; n++) {
        var r = Br[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (jt !== null && tr(jt, e), At !== null && tr(At, e), Ft !== null && tr(Ft, e), Jn.forEach(t), bn.forEach(t), n = 0; n < Dt.length; n++) r = Dt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && (n = Dt[0], n.blockedOn === null); ) Ms(n), n.blockedOn === null && Dt.shift();
  }
  var Sn = ee.ReactCurrentBatchConfig, Vr = !0;
  function Nc(e, t, n, r) {
    var l = pe, i = Sn.transition;
    Sn.transition = null;
    try {
      pe = 1, fi(e, t, n, r);
    } finally {
      pe = l, Sn.transition = i;
    }
  }
  function Lc(e, t, n, r) {
    var l = pe, i = Sn.transition;
    Sn.transition = null;
    try {
      pe = 4, fi(e, t, n, r);
    } finally {
      pe = l, Sn.transition = i;
    }
  }
  function fi(e, t, n, r) {
    if (Vr) {
      var l = di(e, t, n, r);
      if (l === null) Oi(e, t, r, $r, n), Cs(e, r);
      else if (Oc(l, e, t, n, r)) r.stopPropagation();
      else if (Cs(e, r), t & 4 && -1 < Ic.indexOf(e)) {
        for (; l !== null; ) {
          var i = pr(l);
          if (i !== null && ks(i), i = di(e, t, n, r), i === null && Oi(e, t, r, $r, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Oi(e, t, r, null, n);
    }
  }
  var $r = null;
  function di(e, t, n, r) {
    if ($r = null, e = ei(r), e = nn(e), e !== null) if (t = tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = fs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return $r = e, null;
  }
  function Is(e) {
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
        switch (Sc()) {
          case ii:
            return 1;
          case gs:
            return 4;
          case Ar:
          case wc:
            return 16;
          case ys:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wt = null, hi = null, Qr = null;
  function Os() {
    if (Qr) return Qr;
    var e, t = hi, n = t.length, r, l = "value" in Wt ? Wt.value : Wt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
    return Qr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Kr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function qr() {
    return !0;
  }
  function Ps() {
    return !1;
  }
  function lt(e) {
    function t(n, r, l, i, s) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? qr : Ps, this.isPropagationStopped = Ps, this;
    }
    return D(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qr);
    }, persist: function() {
    }, isPersistent: qr }), t;
  }
  var wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, pi = lt(wn), rr = D({}, wn, { view: 0, detail: 0 }), Tc = lt(rr), mi, vi, lr, Yr = D({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (mi = e.screenX - lr.screenX, vi = e.screenY - lr.screenY) : vi = mi = 0, lr = e), mi);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : vi;
  } }), Ns = lt(Yr), Rc = D({}, Yr, { dataTransfer: 0 }), jc = lt(Rc), Ac = D({}, rr, { relatedTarget: 0 }), gi = lt(Ac), Fc = D({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dc = lt(Fc), Wc = D({}, wn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Uc = lt(Wc), Bc = D({}, wn, { data: 0 }), Ls = lt(Bc), Hc = {
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
    MozPrintableKey: "Unidentified"
  }, Vc = {
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
    224: "Meta"
  }, $c = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Qc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $c[e]) ? !!t[e] : !1;
  }
  function yi() {
    return Qc;
  }
  var Kc = D({}, rr, { key: function(e) {
    if (e.key) {
      var t = Hc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Kr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yi, charCode: function(e) {
    return e.type === "keypress" ? Kr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), qc = lt(Kc), Yc = D({}, Yr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ts = lt(Yc), Gc = D({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yi }), Xc = lt(Gc), Zc = D({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jc = lt(Zc), bc = D({}, Yr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ef = lt(bc), tf = [9, 13, 27, 32], Si = m && "CompositionEvent" in window, ir = null;
  m && "documentMode" in document && (ir = document.documentMode);
  var nf = m && "TextEvent" in window && !ir, Rs = m && (!Si || ir && 8 < ir && 11 >= ir), js = " ", As = !1;
  function Fs(e, t) {
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
  function Ds(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var kn = !1;
  function rf(e, t) {
    switch (e) {
      case "compositionend":
        return Ds(t);
      case "keypress":
        return t.which !== 32 ? null : (As = !0, js);
      case "textInput":
        return e = t.data, e === js && As ? null : e;
      default:
        return null;
    }
  }
  function lf(e, t) {
    if (kn) return e === "compositionend" || !Si && Fs(e, t) ? (e = Os(), Qr = hi = Wt = null, kn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Rs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var of = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ws(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!of[e.type] : t === "textarea";
  }
  function Us(e, t, n, r) {
    os(r), t = br(t, "onChange"), 0 < t.length && (n = new pi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var or = null, sr = null;
  function sf(e) {
    lu(e, 0);
  }
  function Gr(e) {
    var t = Mn(e);
    if (Me(t)) return e;
  }
  function uf(e, t) {
    if (e === "change") return t;
  }
  var Bs = !1;
  if (m) {
    var wi;
    if (m) {
      var ki = "oninput" in document;
      if (!ki) {
        var Hs = document.createElement("div");
        Hs.setAttribute("oninput", "return;"), ki = typeof Hs.oninput == "function";
      }
      wi = ki;
    } else wi = !1;
    Bs = wi && (!document.documentMode || 9 < document.documentMode);
  }
  function Vs() {
    or && (or.detachEvent("onpropertychange", $s), sr = or = null);
  }
  function $s(e) {
    if (e.propertyName === "value" && Gr(sr)) {
      var t = [];
      Us(t, sr, e, ei(e)), cs(sf, t);
    }
  }
  function af(e, t, n) {
    e === "focusin" ? (Vs(), or = t, sr = n, or.attachEvent("onpropertychange", $s)) : e === "focusout" && Vs();
  }
  function cf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Gr(sr);
  }
  function ff(e, t) {
    if (e === "click") return Gr(t);
  }
  function df(e, t) {
    if (e === "input" || e === "change") return Gr(t);
  }
  function hf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mt = typeof Object.is == "function" ? Object.is : hf;
  function ur(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!x.call(t, l) || !mt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Qs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ks(e, t) {
    var n = Qs(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
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
      n = Qs(n);
    }
  }
  function qs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ys() {
    for (var e = window, t = ge(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ge(e.document);
    }
    return t;
  }
  function xi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function pf(e) {
    var t = Ys(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && qs(n.ownerDocument.documentElement, n)) {
      if (r !== null && xi(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ks(n, i);
          var s = Ks(
            n,
            r
          );
          l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var mf = m && "documentMode" in document && 11 >= document.documentMode, xn = null, _i = null, ar = null, Ei = !1;
  function Gs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ei || xn == null || xn !== ge(r) || (r = xn, "selectionStart" in r && xi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ar && ur(ar, r) || (ar = r, r = br(_i, "onSelect"), 0 < r.length && (t = new pi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = xn)));
  }
  function Xr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var _n = { animationend: Xr("Animation", "AnimationEnd"), animationiteration: Xr("Animation", "AnimationIteration"), animationstart: Xr("Animation", "AnimationStart"), transitionend: Xr("Transition", "TransitionEnd") }, Ci = {}, Xs = {};
  m && (Xs = document.createElement("div").style, "AnimationEvent" in window || (delete _n.animationend.animation, delete _n.animationiteration.animation, delete _n.animationstart.animation), "TransitionEvent" in window || delete _n.transitionend.transition);
  function Zr(e) {
    if (Ci[e]) return Ci[e];
    if (!_n[e]) return e;
    var t = _n[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Xs) return Ci[e] = t[n];
    return e;
  }
  var Zs = Zr("animationend"), Js = Zr("animationiteration"), bs = Zr("animationstart"), eu = Zr("transitionend"), tu = /* @__PURE__ */ new Map(), nu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ut(e, t) {
    tu.set(e, t), d(t, [e]);
  }
  for (var Mi = 0; Mi < nu.length; Mi++) {
    var zi = nu[Mi], vf = zi.toLowerCase(), gf = zi[0].toUpperCase() + zi.slice(1);
    Ut(vf, "on" + gf);
  }
  Ut(Zs, "onAnimationEnd"), Ut(Js, "onAnimationIteration"), Ut(bs, "onAnimationStart"), Ut("dblclick", "onDoubleClick"), Ut("focusin", "onFocus"), Ut("focusout", "onBlur"), Ut(eu, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
  function ru(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, mc(r, t, void 0, e), e.currentTarget = null;
  }
  function lu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var s = r.length - 1; 0 <= s; s--) {
          var f = r[s], h = f.instance, k = f.currentTarget;
          if (f = f.listener, h !== i && l.isPropagationStopped()) break e;
          ru(l, f, k), i = h;
        }
        else for (s = 0; s < r.length; s++) {
          if (f = r[s], h = f.instance, k = f.currentTarget, f = f.listener, h !== i && l.isPropagationStopped()) break e;
          ru(l, f, k), i = h;
        }
      }
    }
    if (jr) throw e = li, jr = !1, li = null, e;
  }
  function ke(e, t) {
    var n = t[ji];
    n === void 0 && (n = t[ji] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (iu(t, e, 2, !1), n.add(r));
  }
  function Ii(e, t, n) {
    var r = 0;
    t && (r |= 4), iu(n, e, r, t);
  }
  var Jr = "_reactListening" + Math.random().toString(36).slice(2);
  function fr(e) {
    if (!e[Jr]) {
      e[Jr] = !0, a.forEach(function(n) {
        n !== "selectionchange" && (yf.has(n) || Ii(n, !1, e), Ii(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Jr] || (t[Jr] = !0, Ii("selectionchange", !1, t));
    }
  }
  function iu(e, t, n, r) {
    switch (Is(t)) {
      case 1:
        var l = Nc;
        break;
      case 4:
        l = Lc;
        break;
      default:
        l = fi;
    }
    n = l.bind(null, t, n, e), l = void 0, !ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Oi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var f = r.stateNode.containerInfo;
        if (f === l || f.nodeType === 8 && f.parentNode === l) break;
        if (s === 4) for (s = r.return; s !== null; ) {
          var h = s.tag;
          if ((h === 3 || h === 4) && (h = s.stateNode.containerInfo, h === l || h.nodeType === 8 && h.parentNode === l)) return;
          s = s.return;
        }
        for (; f !== null; ) {
          if (s = nn(f), s === null) return;
          if (h = s.tag, h === 5 || h === 6) {
            r = i = s;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    cs(function() {
      var k = i, O = ei(n), N = [];
      e: {
        var I = tu.get(e);
        if (I !== void 0) {
          var F = pi, H = e;
          switch (e) {
            case "keypress":
              if (Kr(n) === 0) break e;
            case "keydown":
            case "keyup":
              F = qc;
              break;
            case "focusin":
              H = "focus", F = gi;
              break;
            case "focusout":
              H = "blur", F = gi;
              break;
            case "beforeblur":
            case "afterblur":
              F = gi;
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
              F = Ns;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = jc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = Xc;
              break;
            case Zs:
            case Js:
            case bs:
              F = Dc;
              break;
            case eu:
              F = Jc;
              break;
            case "scroll":
              F = Tc;
              break;
            case "wheel":
              F = ef;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = Uc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Ts;
          }
          var $ = (t & 4) !== 0, Ne = !$ && e === "scroll", S = $ ? I !== null ? I + "Capture" : null : I;
          $ = [];
          for (var v = k, w; v !== null; ) {
            w = v;
            var L = w.stateNode;
            if (w.tag === 5 && L !== null && (w = L, S !== null && (L = qn(v, S), L != null && $.push(dr(v, L, w)))), Ne) break;
            v = v.return;
          }
          0 < $.length && (I = new F(I, H, null, n, O), N.push({ event: I, listeners: $ }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (I = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", I && n !== bl && (H = n.relatedTarget || n.fromElement) && (nn(H) || H[zt])) break e;
          if ((F || I) && (I = O.window === O ? O : (I = O.ownerDocument) ? I.defaultView || I.parentWindow : window, F ? (H = n.relatedTarget || n.toElement, F = k, H = H ? nn(H) : null, H !== null && (Ne = tn(H), H !== Ne || H.tag !== 5 && H.tag !== 6) && (H = null)) : (F = null, H = k), F !== H)) {
            if ($ = Ns, L = "onMouseLeave", S = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && ($ = Ts, L = "onPointerLeave", S = "onPointerEnter", v = "pointer"), Ne = F == null ? I : Mn(F), w = H == null ? I : Mn(H), I = new $(L, v + "leave", F, n, O), I.target = Ne, I.relatedTarget = w, L = null, nn(O) === k && ($ = new $(S, v + "enter", H, n, O), $.target = w, $.relatedTarget = Ne, L = $), Ne = L, F && H) t: {
              for ($ = F, S = H, v = 0, w = $; w; w = En(w)) v++;
              for (w = 0, L = S; L; L = En(L)) w++;
              for (; 0 < v - w; ) $ = En($), v--;
              for (; 0 < w - v; ) S = En(S), w--;
              for (; v--; ) {
                if ($ === S || S !== null && $ === S.alternate) break t;
                $ = En($), S = En(S);
              }
              $ = null;
            }
            else $ = null;
            F !== null && ou(N, I, F, $, !1), H !== null && Ne !== null && ou(N, Ne, H, $, !0);
          }
        }
        e: {
          if (I = k ? Mn(k) : window, F = I.nodeName && I.nodeName.toLowerCase(), F === "select" || F === "input" && I.type === "file") var Q = uf;
          else if (Ws(I)) if (Bs) Q = df;
          else {
            Q = cf;
            var Y = af;
          }
          else (F = I.nodeName) && F.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (Q = ff);
          if (Q && (Q = Q(e, k))) {
            Us(N, Q, n, O);
            break e;
          }
          Y && Y(e, I, k), e === "focusout" && (Y = I._wrapperState) && Y.controlled && I.type === "number" && Yl(I, "number", I.value);
        }
        switch (Y = k ? Mn(k) : window, e) {
          case "focusin":
            (Ws(Y) || Y.contentEditable === "true") && (xn = Y, _i = k, ar = null);
            break;
          case "focusout":
            ar = _i = xn = null;
            break;
          case "mousedown":
            Ei = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ei = !1, Gs(N, n, O);
            break;
          case "selectionchange":
            if (mf) break;
          case "keydown":
          case "keyup":
            Gs(N, n, O);
        }
        var G;
        if (Si) e: {
          switch (e) {
            case "compositionstart":
              var J = "onCompositionStart";
              break e;
            case "compositionend":
              J = "onCompositionEnd";
              break e;
            case "compositionupdate":
              J = "onCompositionUpdate";
              break e;
          }
          J = void 0;
        }
        else kn ? Fs(e, n) && (J = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (J = "onCompositionStart");
        J && (Rs && n.locale !== "ko" && (kn || J !== "onCompositionStart" ? J === "onCompositionEnd" && kn && (G = Os()) : (Wt = O, hi = "value" in Wt ? Wt.value : Wt.textContent, kn = !0)), Y = br(k, J), 0 < Y.length && (J = new Ls(J, e, null, n, O), N.push({ event: J, listeners: Y }), G ? J.data = G : (G = Ds(n), G !== null && (J.data = G)))), (G = nf ? rf(e, n) : lf(e, n)) && (k = br(k, "onBeforeInput"), 0 < k.length && (O = new Ls("onBeforeInput", "beforeinput", null, n, O), N.push({ event: O, listeners: k }), O.data = G));
      }
      lu(N, t);
    });
  }
  function dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function br(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = qn(e, n), i != null && r.unshift(dr(e, i, l)), i = qn(e, t), i != null && r.push(dr(e, i, l))), e = e.return;
    }
    return r;
  }
  function En(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ou(e, t, n, r, l) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
      var f = n, h = f.alternate, k = f.stateNode;
      if (h !== null && h === r) break;
      f.tag === 5 && k !== null && (f = k, l ? (h = qn(n, i), h != null && s.unshift(dr(n, h, f))) : l || (h = qn(n, i), h != null && s.push(dr(n, h, f)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Sf = /\r\n?/g, wf = /\u0000|\uFFFD/g;
  function su(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sf, `
`).replace(wf, "");
  }
  function el(e, t, n) {
    if (t = su(t), su(e) !== t && n) throw Error(o(425));
  }
  function tl() {
  }
  var Pi = null, Ni = null;
  function Li(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ti = typeof setTimeout == "function" ? setTimeout : void 0, kf = typeof clearTimeout == "function" ? clearTimeout : void 0, uu = typeof Promise == "function" ? Promise : void 0, xf = typeof queueMicrotask == "function" ? queueMicrotask : typeof uu < "u" ? function(e) {
    return uu.resolve(null).then(e).catch(_f);
  } : Ti;
  function _f(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ri(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), nr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    nr(t);
  }
  function Bt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function au(e) {
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
  var Cn = Math.random().toString(36).slice(2), _t = "__reactFiber$" + Cn, hr = "__reactProps$" + Cn, zt = "__reactContainer$" + Cn, ji = "__reactEvents$" + Cn, Ef = "__reactListeners$" + Cn, Cf = "__reactHandles$" + Cn;
  function nn(e) {
    var t = e[_t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[zt] || n[_t]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = au(e); e !== null; ) {
          if (n = e[_t]) return n;
          e = au(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function pr(e) {
    return e = e[_t] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Mn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function nl(e) {
    return e[hr] || null;
  }
  var Ai = [], zn = -1;
  function Ht(e) {
    return { current: e };
  }
  function xe(e) {
    0 > zn || (e.current = Ai[zn], Ai[zn] = null, zn--);
  }
  function ye(e, t) {
    zn++, Ai[zn] = e.current, e.current = t;
  }
  var Vt = {}, Qe = Ht(Vt), Je = Ht(!1), rn = Vt;
  function In(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function be(e) {
    return e = e.childContextTypes, e != null;
  }
  function rl() {
    xe(Je), xe(Qe);
  }
  function cu(e, t, n) {
    if (Qe.current !== Vt) throw Error(o(168));
    ye(Qe, t), ye(Je, n);
  }
  function fu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(o(108, me(e) || "Unknown", l));
    return D({}, n, r);
  }
  function ll(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, rn = Qe.current, ye(Qe, e), ye(Je, Je.current), !0;
  }
  function du(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = fu(e, t, rn), r.__reactInternalMemoizedMergedChildContext = e, xe(Je), xe(Qe), ye(Qe, e)) : xe(Je), ye(Je, n);
  }
  var It = null, il = !1, Fi = !1;
  function hu(e) {
    It === null ? It = [e] : It.push(e);
  }
  function Mf(e) {
    il = !0, hu(e);
  }
  function $t() {
    if (!Fi && It !== null) {
      Fi = !0;
      var e = 0, t = pe;
      try {
        var n = It;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        It = null, il = !1;
      } catch (l) {
        throw It !== null && (It = It.slice(e + 1)), ms(ii, $t), l;
      } finally {
        pe = t, Fi = !1;
      }
    }
    return null;
  }
  var On = [], Pn = 0, ol = null, sl = 0, ut = [], at = 0, ln = null, Ot = 1, Pt = "";
  function on(e, t) {
    On[Pn++] = sl, On[Pn++] = ol, ol = e, sl = t;
  }
  function pu(e, t, n) {
    ut[at++] = Ot, ut[at++] = Pt, ut[at++] = ln, ln = e;
    var r = Ot;
    e = Pt;
    var l = 32 - pt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - pt(t) + l;
    if (30 < i) {
      var s = l - l % 5;
      i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, Ot = 1 << 32 - pt(t) + l | n << l | r, Pt = i + e;
    } else Ot = 1 << i | n << l | r, Pt = e;
  }
  function Di(e) {
    e.return !== null && (on(e, 1), pu(e, 1, 0));
  }
  function Wi(e) {
    for (; e === ol; ) ol = On[--Pn], On[Pn] = null, sl = On[--Pn], On[Pn] = null;
    for (; e === ln; ) ln = ut[--at], ut[at] = null, Pt = ut[--at], ut[at] = null, Ot = ut[--at], ut[at] = null;
  }
  var it = null, ot = null, Ee = !1, vt = null;
  function mu(e, t) {
    var n = ht(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function vu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, ot = Bt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, ot = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: Ot, overflow: Pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ui(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Bi(e) {
    if (Ee) {
      var t = ot;
      if (t) {
        var n = t;
        if (!vu(e, t)) {
          if (Ui(e)) throw Error(o(418));
          t = Bt(n.nextSibling);
          var r = it;
          t && vu(e, t) ? mu(r, n) : (e.flags = e.flags & -4097 | 2, Ee = !1, it = e);
        }
      } else {
        if (Ui(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Ee = !1, it = e;
      }
    }
  }
  function gu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    it = e;
  }
  function ul(e) {
    if (e !== it) return !1;
    if (!Ee) return gu(e), Ee = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps)), t && (t = ot)) {
      if (Ui(e)) throw yu(), Error(o(418));
      for (; t; ) mu(e, t), t = Bt(t.nextSibling);
    }
    if (gu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ot = Bt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ot = null;
      }
    } else ot = it ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function yu() {
    for (var e = ot; e; ) e = Bt(e.nextSibling);
  }
  function Nn() {
    ot = it = null, Ee = !1;
  }
  function Hi(e) {
    vt === null ? vt = [e] : vt.push(e);
  }
  var zf = ee.ReactCurrentBatchConfig;
  function mr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
          var f = l.refs;
          s === null ? delete f[i] : f[i] = s;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function al(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Su(e) {
    var t = e._init;
    return t(e._payload);
  }
  function wu(e) {
    function t(S, v) {
      if (e) {
        var w = S.deletions;
        w === null ? (S.deletions = [v], S.flags |= 16) : w.push(v);
      }
    }
    function n(S, v) {
      if (!e) return null;
      for (; v !== null; ) t(S, v), v = v.sibling;
      return null;
    }
    function r(S, v) {
      for (S = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? S.set(v.key, v) : S.set(v.index, v), v = v.sibling;
      return S;
    }
    function l(S, v) {
      return S = Jt(S, v), S.index = 0, S.sibling = null, S;
    }
    function i(S, v, w) {
      return S.index = w, e ? (w = S.alternate, w !== null ? (w = w.index, w < v ? (S.flags |= 2, v) : w) : (S.flags |= 2, v)) : (S.flags |= 1048576, v);
    }
    function s(S) {
      return e && S.alternate === null && (S.flags |= 2), S;
    }
    function f(S, v, w, L) {
      return v === null || v.tag !== 6 ? (v = Ro(w, S.mode, L), v.return = S, v) : (v = l(v, w), v.return = S, v);
    }
    function h(S, v, w, L) {
      var Q = w.type;
      return Q === se ? O(S, v, w.props.children, L, w.key) : v !== null && (v.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === He && Su(Q) === v.type) ? (L = l(v, w.props), L.ref = mr(S, v, w), L.return = S, L) : (L = Tl(w.type, w.key, w.props, null, S.mode, L), L.ref = mr(S, v, w), L.return = S, L);
    }
    function k(S, v, w, L) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== w.containerInfo || v.stateNode.implementation !== w.implementation ? (v = jo(w, S.mode, L), v.return = S, v) : (v = l(v, w.children || []), v.return = S, v);
    }
    function O(S, v, w, L, Q) {
      return v === null || v.tag !== 7 ? (v = pn(w, S.mode, L, Q), v.return = S, v) : (v = l(v, w), v.return = S, v);
    }
    function N(S, v, w) {
      if (typeof v == "string" && v !== "" || typeof v == "number") return v = Ro("" + v, S.mode, w), v.return = S, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case le:
            return w = Tl(v.type, v.key, v.props, null, S.mode, w), w.ref = mr(S, null, v), w.return = S, w;
          case ve:
            return v = jo(v, S.mode, w), v.return = S, v;
          case He:
            var L = v._init;
            return N(S, L(v._payload), w);
        }
        if ($n(v) || X(v)) return v = pn(v, S.mode, w, null), v.return = S, v;
        al(S, v);
      }
      return null;
    }
    function I(S, v, w, L) {
      var Q = v !== null ? v.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number") return Q !== null ? null : f(S, v, "" + w, L);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case le:
            return w.key === Q ? h(S, v, w, L) : null;
          case ve:
            return w.key === Q ? k(S, v, w, L) : null;
          case He:
            return Q = w._init, I(
              S,
              v,
              Q(w._payload),
              L
            );
        }
        if ($n(w) || X(w)) return Q !== null ? null : O(S, v, w, L, null);
        al(S, w);
      }
      return null;
    }
    function F(S, v, w, L, Q) {
      if (typeof L == "string" && L !== "" || typeof L == "number") return S = S.get(w) || null, f(v, S, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case le:
            return S = S.get(L.key === null ? w : L.key) || null, h(v, S, L, Q);
          case ve:
            return S = S.get(L.key === null ? w : L.key) || null, k(v, S, L, Q);
          case He:
            var Y = L._init;
            return F(S, v, w, Y(L._payload), Q);
        }
        if ($n(L) || X(L)) return S = S.get(w) || null, O(v, S, L, Q, null);
        al(v, L);
      }
      return null;
    }
    function H(S, v, w, L) {
      for (var Q = null, Y = null, G = v, J = v = 0, Ue = null; G !== null && J < w.length; J++) {
        G.index > J ? (Ue = G, G = null) : Ue = G.sibling;
        var he = I(S, G, w[J], L);
        if (he === null) {
          G === null && (G = Ue);
          break;
        }
        e && G && he.alternate === null && t(S, G), v = i(he, v, J), Y === null ? Q = he : Y.sibling = he, Y = he, G = Ue;
      }
      if (J === w.length) return n(S, G), Ee && on(S, J), Q;
      if (G === null) {
        for (; J < w.length; J++) G = N(S, w[J], L), G !== null && (v = i(G, v, J), Y === null ? Q = G : Y.sibling = G, Y = G);
        return Ee && on(S, J), Q;
      }
      for (G = r(S, G); J < w.length; J++) Ue = F(G, S, J, w[J], L), Ue !== null && (e && Ue.alternate !== null && G.delete(Ue.key === null ? J : Ue.key), v = i(Ue, v, J), Y === null ? Q = Ue : Y.sibling = Ue, Y = Ue);
      return e && G.forEach(function(bt) {
        return t(S, bt);
      }), Ee && on(S, J), Q;
    }
    function $(S, v, w, L) {
      var Q = X(w);
      if (typeof Q != "function") throw Error(o(150));
      if (w = Q.call(w), w == null) throw Error(o(151));
      for (var Y = Q = null, G = v, J = v = 0, Ue = null, he = w.next(); G !== null && !he.done; J++, he = w.next()) {
        G.index > J ? (Ue = G, G = null) : Ue = G.sibling;
        var bt = I(S, G, he.value, L);
        if (bt === null) {
          G === null && (G = Ue);
          break;
        }
        e && G && bt.alternate === null && t(S, G), v = i(bt, v, J), Y === null ? Q = bt : Y.sibling = bt, Y = bt, G = Ue;
      }
      if (he.done) return n(
        S,
        G
      ), Ee && on(S, J), Q;
      if (G === null) {
        for (; !he.done; J++, he = w.next()) he = N(S, he.value, L), he !== null && (v = i(he, v, J), Y === null ? Q = he : Y.sibling = he, Y = he);
        return Ee && on(S, J), Q;
      }
      for (G = r(S, G); !he.done; J++, he = w.next()) he = F(G, S, J, he.value, L), he !== null && (e && he.alternate !== null && G.delete(he.key === null ? J : he.key), v = i(he, v, J), Y === null ? Q = he : Y.sibling = he, Y = he);
      return e && G.forEach(function(od) {
        return t(S, od);
      }), Ee && on(S, J), Q;
    }
    function Ne(S, v, w, L) {
      if (typeof w == "object" && w !== null && w.type === se && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case le:
            e: {
              for (var Q = w.key, Y = v; Y !== null; ) {
                if (Y.key === Q) {
                  if (Q = w.type, Q === se) {
                    if (Y.tag === 7) {
                      n(S, Y.sibling), v = l(Y, w.props.children), v.return = S, S = v;
                      break e;
                    }
                  } else if (Y.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === He && Su(Q) === Y.type) {
                    n(S, Y.sibling), v = l(Y, w.props), v.ref = mr(S, Y, w), v.return = S, S = v;
                    break e;
                  }
                  n(S, Y);
                  break;
                } else t(S, Y);
                Y = Y.sibling;
              }
              w.type === se ? (v = pn(w.props.children, S.mode, L, w.key), v.return = S, S = v) : (L = Tl(w.type, w.key, w.props, null, S.mode, L), L.ref = mr(S, v, w), L.return = S, S = L);
            }
            return s(S);
          case ve:
            e: {
              for (Y = w.key; v !== null; ) {
                if (v.key === Y) if (v.tag === 4 && v.stateNode.containerInfo === w.containerInfo && v.stateNode.implementation === w.implementation) {
                  n(S, v.sibling), v = l(v, w.children || []), v.return = S, S = v;
                  break e;
                } else {
                  n(S, v);
                  break;
                }
                else t(S, v);
                v = v.sibling;
              }
              v = jo(w, S.mode, L), v.return = S, S = v;
            }
            return s(S);
          case He:
            return Y = w._init, Ne(S, v, Y(w._payload), L);
        }
        if ($n(w)) return H(S, v, w, L);
        if (X(w)) return $(S, v, w, L);
        al(S, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, v !== null && v.tag === 6 ? (n(S, v.sibling), v = l(v, w), v.return = S, S = v) : (n(S, v), v = Ro(w, S.mode, L), v.return = S, S = v), s(S)) : n(S, v);
    }
    return Ne;
  }
  var Ln = wu(!0), ku = wu(!1), cl = Ht(null), fl = null, Tn = null, Vi = null;
  function $i() {
    Vi = Tn = fl = null;
  }
  function Qi(e) {
    var t = cl.current;
    xe(cl), e._currentValue = t;
  }
  function Ki(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Rn(e, t) {
    fl = e, Vi = Tn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (et = !0), e.firstContext = null);
  }
  function ct(e) {
    var t = e._currentValue;
    if (Vi !== e) if (e = { context: e, memoizedValue: t, next: null }, Tn === null) {
      if (fl === null) throw Error(o(308));
      Tn = e, fl.dependencies = { lanes: 0, firstContext: e };
    } else Tn = Tn.next = e;
    return t;
  }
  var sn = null;
  function qi(e) {
    sn === null ? sn = [e] : sn.push(e);
  }
  function xu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, qi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Nt(e, r);
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Qt = !1;
  function Yi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function _u(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Lt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (fe & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Nt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, qi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Nt(e, n);
  }
  function dl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ui(e, n);
    }
  }
  function Eu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = s : i = i.next = s, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function hl(e, t, n, r) {
    var l = e.updateQueue;
    Qt = !1;
    var i = l.firstBaseUpdate, s = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var h = f, k = h.next;
      h.next = null, s === null ? i = k : s.next = k, s = h;
      var O = e.alternate;
      O !== null && (O = O.updateQueue, f = O.lastBaseUpdate, f !== s && (f === null ? O.firstBaseUpdate = k : f.next = k, O.lastBaseUpdate = h));
    }
    if (i !== null) {
      var N = l.baseState;
      s = 0, O = k = h = null, f = i;
      do {
        var I = f.lane, F = f.eventTime;
        if ((r & I) === I) {
          O !== null && (O = O.next = {
            eventTime: F,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var H = e, $ = f;
            switch (I = t, F = n, $.tag) {
              case 1:
                if (H = $.payload, typeof H == "function") {
                  N = H.call(F, N, I);
                  break e;
                }
                N = H;
                break e;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = $.payload, I = typeof H == "function" ? H.call(F, N, I) : H, I == null) break e;
                N = D({}, N, I);
                break e;
              case 2:
                Qt = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, I = l.effects, I === null ? l.effects = [f] : I.push(f));
        } else F = { eventTime: F, lane: I, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, O === null ? (k = O = F, h = N) : O = O.next = F, s |= I;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null) break;
          I = f, f = I.next, I.next = null, l.lastBaseUpdate = I, l.shared.pending = null;
        }
      } while (!0);
      if (O === null && (h = N), l.baseState = h, l.firstBaseUpdate = k, l.lastBaseUpdate = O, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          s |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      cn |= s, e.lanes = s, e.memoizedState = N;
    }
  }
  function Cu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(o(191, l));
        l.call(r);
      }
    }
  }
  var vr = {}, Et = Ht(vr), gr = Ht(vr), yr = Ht(vr);
  function un(e) {
    if (e === vr) throw Error(o(174));
    return e;
  }
  function Gi(e, t) {
    switch (ye(yr, t), ye(gr, e), ye(Et, vr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Xl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xl(t, e);
    }
    xe(Et), ye(Et, t);
  }
  function jn() {
    xe(Et), xe(gr), xe(yr);
  }
  function Mu(e) {
    un(yr.current);
    var t = un(Et.current), n = Xl(t, e.type);
    t !== n && (ye(gr, e), ye(Et, n));
  }
  function Xi(e) {
    gr.current === e && (xe(Et), xe(gr));
  }
  var ze = Ht(0);
  function pl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Zi = [];
  function Ji() {
    for (var e = 0; e < Zi.length; e++) Zi[e]._workInProgressVersionPrimary = null;
    Zi.length = 0;
  }
  var ml = ee.ReactCurrentDispatcher, bi = ee.ReactCurrentBatchConfig, an = 0, Ie = null, je = null, De = null, vl = !1, Sr = !1, wr = 0, If = 0;
  function Ke() {
    throw Error(o(321));
  }
  function eo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!mt(e[n], t[n])) return !1;
    return !0;
  }
  function to(e, t, n, r, l, i) {
    if (an = i, Ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ml.current = e === null || e.memoizedState === null ? Lf : Tf, e = n(r, l), Sr) {
      i = 0;
      do {
        if (Sr = !1, wr = 0, 25 <= i) throw Error(o(301));
        i += 1, De = je = null, t.updateQueue = null, ml.current = Rf, e = n(r, l);
      } while (Sr);
    }
    if (ml.current = Sl, t = je !== null && je.next !== null, an = 0, De = je = Ie = null, vl = !1, t) throw Error(o(300));
    return e;
  }
  function no() {
    var e = wr !== 0;
    return wr = 0, e;
  }
  function Ct() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return De === null ? Ie.memoizedState = De = e : De = De.next = e, De;
  }
  function ft() {
    if (je === null) {
      var e = Ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = De === null ? Ie.memoizedState : De.next;
    if (t !== null) De = t, je = e;
    else {
      if (e === null) throw Error(o(310));
      je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, De === null ? Ie.memoizedState = De = e : De = De.next = e;
    }
    return De;
  }
  function kr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ro(e) {
    var t = ft(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = je, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var s = l.next;
        l.next = i.next, i.next = s;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var f = s = null, h = null, k = i;
      do {
        var O = k.lane;
        if ((an & O) === O) h !== null && (h = h.next = { lane: 0, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }), r = k.hasEagerState ? k.eagerState : e(r, k.action);
        else {
          var N = {
            lane: O,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          };
          h === null ? (f = h = N, s = r) : h = h.next = N, Ie.lanes |= O, cn |= O;
        }
        k = k.next;
      } while (k !== null && k !== i);
      h === null ? s = r : h.next = f, mt(r, t.memoizedState) || (et = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = h, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, Ie.lanes |= i, cn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function lo(e) {
    var t = ft(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = l = l.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== l);
      mt(i, t.memoizedState) || (et = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function zu() {
  }
  function Iu(e, t) {
    var n = Ie, r = ft(), l = t(), i = !mt(r.memoizedState, l);
    if (i && (r.memoizedState = l, et = !0), r = r.queue, io(Nu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || De !== null && De.memoizedState.tag & 1) {
      if (n.flags |= 2048, xr(9, Pu.bind(null, n, r, l, t), void 0, null), We === null) throw Error(o(349));
      (an & 30) !== 0 || Ou(n, t, l);
    }
    return l;
  }
  function Ou(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Pu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Lu(t) && Tu(e);
  }
  function Nu(e, t, n) {
    return n(function() {
      Lu(t) && Tu(e);
    });
  }
  function Lu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function Tu(e) {
    var t = Nt(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function Ru(e) {
    var t = Ct();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Nf.bind(null, Ie, e), [t.memoizedState, e];
  }
  function xr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ie.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ju() {
    return ft().memoizedState;
  }
  function gl(e, t, n, r) {
    var l = Ct();
    Ie.flags |= e, l.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function yl(e, t, n, r) {
    var l = ft();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (je !== null) {
      var s = je.memoizedState;
      if (i = s.destroy, r !== null && eo(r, s.deps)) {
        l.memoizedState = xr(t, n, i, r);
        return;
      }
    }
    Ie.flags |= e, l.memoizedState = xr(1 | t, n, i, r);
  }
  function Au(e, t) {
    return gl(8390656, 8, e, t);
  }
  function io(e, t) {
    return yl(2048, 8, e, t);
  }
  function Fu(e, t) {
    return yl(4, 2, e, t);
  }
  function Du(e, t) {
    return yl(4, 4, e, t);
  }
  function Wu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Uu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, yl(4, 4, Wu.bind(null, t, e), n);
  }
  function oo() {
  }
  function Bu(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && eo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Hu(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && eo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Vu(e, t, n) {
    return (an & 21) === 0 ? (e.baseState && (e.baseState = !1, et = !0), e.memoizedState = n) : (mt(n, t) || (n = Ss(), Ie.lanes |= n, cn |= n, e.baseState = !0), t);
  }
  function Of(e, t) {
    var n = pe;
    pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = bi.transition;
    bi.transition = {};
    try {
      e(!1), t();
    } finally {
      pe = n, bi.transition = r;
    }
  }
  function $u() {
    return ft().memoizedState;
  }
  function Pf(e, t, n) {
    var r = Xt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Qu(e)) Ku(t, n);
    else if (n = xu(e, t, n, r), n !== null) {
      var l = Xe();
      wt(n, e, r, l), qu(n, t, r);
    }
  }
  function Nf(e, t, n) {
    var r = Xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Qu(e)) Ku(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var s = t.lastRenderedState, f = i(s, n);
        if (l.hasEagerState = !0, l.eagerState = f, mt(f, s)) {
          var h = t.interleaved;
          h === null ? (l.next = l, qi(t)) : (l.next = h.next, h.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = xu(e, t, l, r), n !== null && (l = Xe(), wt(n, e, r, l), qu(n, t, r));
    }
  }
  function Qu(e) {
    var t = e.alternate;
    return e === Ie || t !== null && t === Ie;
  }
  function Ku(e, t) {
    Sr = vl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function qu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ui(e, n);
    }
  }
  var Sl = { readContext: ct, useCallback: Ke, useContext: Ke, useEffect: Ke, useImperativeHandle: Ke, useInsertionEffect: Ke, useLayoutEffect: Ke, useMemo: Ke, useReducer: Ke, useRef: Ke, useState: Ke, useDebugValue: Ke, useDeferredValue: Ke, useTransition: Ke, useMutableSource: Ke, useSyncExternalStore: Ke, useId: Ke, unstable_isNewReconciler: !1 }, Lf = { readContext: ct, useCallback: function(e, t) {
    return Ct().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ct, useEffect: Au, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, gl(
      4194308,
      4,
      Wu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return gl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return gl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Ct();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Ct();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Pf.bind(null, Ie, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Ct();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ru, useDebugValue: oo, useDeferredValue: function(e) {
    return Ct().memoizedState = e;
  }, useTransition: function() {
    var e = Ru(!1), t = e[0];
    return e = Of.bind(null, e[1]), Ct().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ie, l = Ct();
    if (Ee) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), We === null) throw Error(o(349));
      (an & 30) !== 0 || Ou(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, Au(Nu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, xr(9, Pu.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Ct(), t = We.identifierPrefix;
    if (Ee) {
      var n = Pt, r = Ot;
      n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = If++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Tf = {
    readContext: ct,
    useCallback: Bu,
    useContext: ct,
    useEffect: io,
    useImperativeHandle: Uu,
    useInsertionEffect: Fu,
    useLayoutEffect: Du,
    useMemo: Hu,
    useReducer: ro,
    useRef: ju,
    useState: function() {
      return ro(kr);
    },
    useDebugValue: oo,
    useDeferredValue: function(e) {
      var t = ft();
      return Vu(t, je.memoizedState, e);
    },
    useTransition: function() {
      var e = ro(kr)[0], t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: zu,
    useSyncExternalStore: Iu,
    useId: $u,
    unstable_isNewReconciler: !1
  }, Rf = { readContext: ct, useCallback: Bu, useContext: ct, useEffect: io, useImperativeHandle: Uu, useInsertionEffect: Fu, useLayoutEffect: Du, useMemo: Hu, useReducer: lo, useRef: ju, useState: function() {
    return lo(kr);
  }, useDebugValue: oo, useDeferredValue: function(e) {
    var t = ft();
    return je === null ? t.memoizedState = e : Vu(t, je.memoizedState, e);
  }, useTransition: function() {
    var e = lo(kr)[0], t = ft().memoizedState;
    return [e, t];
  }, useMutableSource: zu, useSyncExternalStore: Iu, useId: $u, unstable_isNewReconciler: !1 };
  function gt(e, t) {
    if (e && e.defaultProps) {
      t = D({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function so(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var wl = { isMounted: function(e) {
    return (e = e._reactInternals) ? tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), l = Xt(e), i = Lt(r, l);
    i.payload = t, n != null && (i.callback = n), t = Kt(e, i, l), t !== null && (wt(t, e, l, r), dl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), l = Xt(e), i = Lt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Kt(e, i, l), t !== null && (wt(t, e, l, r), dl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Xe(), r = Xt(e), l = Lt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Kt(e, l, r), t !== null && (wt(t, e, r, n), dl(t, e, r));
  } };
  function Yu(e, t, n, r, l, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ur(n, r) || !ur(l, i) : !0;
  }
  function Gu(e, t, n) {
    var r = !1, l = Vt, i = t.contextType;
    return typeof i == "object" && i !== null ? i = ct(i) : (l = be(t) ? rn : Qe.current, r = t.contextTypes, i = (r = r != null) ? In(e, l) : Vt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Xu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wl.enqueueReplaceState(t, t.state, null);
  }
  function uo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Yi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = ct(i) : (i = be(t) ? rn : Qe.current, l.context = In(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (so(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && wl.enqueueReplaceState(l, l.state, null), hl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function An(e, t) {
    try {
      var n = "", r = t;
      do
        n += ue(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ao(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function co(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var jf = typeof WeakMap == "function" ? WeakMap : Map;
  function Zu(e, t, n) {
    n = Lt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      zl || (zl = !0, Mo = r), co(e, t);
    }, n;
  }
  function Ju(e, t, n) {
    n = Lt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        co(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      co(e, t), typeof r != "function" && (Yt === null ? Yt = /* @__PURE__ */ new Set([this]) : Yt.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function bu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new jf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Gf.bind(null, e, t, n), t.then(e, e));
  }
  function ea(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ta(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, Kt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Af = ee.ReactCurrentOwner, et = !1;
  function Ge(e, t, n, r) {
    t.child = e === null ? ku(t, null, n, r) : Ln(t, e.child, n, r);
  }
  function na(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Rn(t, l), r = to(e, t, n, r, i, l), n = no(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Tt(e, t, l)) : (Ee && n && Di(t), t.flags |= 1, Ge(e, t, r, l), t.child);
  }
  function ra(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !To(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, la(e, t, i, r, l)) : (e = Tl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var s = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ur, n(s, r) && e.ref === t.ref) return Tt(e, t, l);
    }
    return t.flags |= 1, e = Jt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function la(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ur(i, r) && e.ref === t.ref) if (et = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (et = !0);
      else return t.lanes = e.lanes, Tt(e, t, l);
    }
    return fo(e, t, n, r, l);
  }
  function ia(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(Dn, st), st |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(Dn, st), st |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ye(Dn, st), st |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ye(Dn, st), st |= r;
    return Ge(e, t, l, n), t.child;
  }
  function oa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function fo(e, t, n, r, l) {
    var i = be(n) ? rn : Qe.current;
    return i = In(t, i), Rn(t, l), n = to(e, t, n, r, i, l), r = no(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Tt(e, t, l)) : (Ee && r && Di(t), t.flags |= 1, Ge(e, t, n, l), t.child);
  }
  function sa(e, t, n, r, l) {
    if (be(n)) {
      var i = !0;
      ll(t);
    } else i = !1;
    if (Rn(t, l), t.stateNode === null) xl(e, t), Gu(t, n, r), uo(t, n, r, l), r = !0;
    else if (e === null) {
      var s = t.stateNode, f = t.memoizedProps;
      s.props = f;
      var h = s.context, k = n.contextType;
      typeof k == "object" && k !== null ? k = ct(k) : (k = be(n) ? rn : Qe.current, k = In(t, k));
      var O = n.getDerivedStateFromProps, N = typeof O == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      N || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== r || h !== k) && Xu(t, s, r, k), Qt = !1;
      var I = t.memoizedState;
      s.state = I, hl(t, r, s, l), h = t.memoizedState, f !== r || I !== h || Je.current || Qt ? (typeof O == "function" && (so(t, n, O, r), h = t.memoizedState), (f = Qt || Yu(t, n, f, r, I, h, k)) ? (N || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = k, r = f) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, _u(e, t), f = t.memoizedProps, k = t.type === t.elementType ? f : gt(t.type, f), s.props = k, N = t.pendingProps, I = s.context, h = n.contextType, typeof h == "object" && h !== null ? h = ct(h) : (h = be(n) ? rn : Qe.current, h = In(t, h));
      var F = n.getDerivedStateFromProps;
      (O = typeof F == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== N || I !== h) && Xu(t, s, r, h), Qt = !1, I = t.memoizedState, s.state = I, hl(t, r, s, l);
      var H = t.memoizedState;
      f !== N || I !== H || Je.current || Qt ? (typeof F == "function" && (so(t, n, F, r), H = t.memoizedState), (k = Qt || Yu(t, n, k, r, I, H, h) || !1) ? (O || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, H, h), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, H, h)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = H), s.props = r, s.state = H, s.context = h, r = k) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ho(e, t, n, r, i, l);
  }
  function ho(e, t, n, r, l, i) {
    oa(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return l && du(t, n, !1), Tt(e, t, i);
    r = t.stateNode, Af.current = t;
    var f = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Ln(t, e.child, null, i), t.child = Ln(t, null, f, i)) : Ge(e, t, f, i), t.memoizedState = r.state, l && du(t, n, !0), t.child;
  }
  function ua(e) {
    var t = e.stateNode;
    t.pendingContext ? cu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cu(e, t.context, !1), Gi(e, t.containerInfo);
  }
  function aa(e, t, n, r, l) {
    return Nn(), Hi(l), t.flags |= 256, Ge(e, t, n, r), t.child;
  }
  var po = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ca(e, t, n) {
    var r = t.pendingProps, l = ze.current, i = !1, s = (t.flags & 128) !== 0, f;
    if ((f = s) || (f = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ye(ze, l & 1), e === null)
      return Bi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Rl(s, r, 0, null), e = pn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = mo(n), t.memoizedState = po, e) : vo(t, s));
    if (l = e.memoizedState, l !== null && (f = l.dehydrated, f !== null)) return Ff(e, t, s, r, f, l, n);
    if (i) {
      i = r.fallback, s = t.mode, l = e.child, f = l.sibling;
      var h = { mode: "hidden", children: r.children };
      return (s & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = h, t.deletions = null) : (r = Jt(l, h), r.subtreeFlags = l.subtreeFlags & 14680064), f !== null ? i = Jt(f, i) : (i = pn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? mo(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = po, r;
    }
    return i = e.child, e = i.sibling, r = Jt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function vo(e, t) {
    return t = Rl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function kl(e, t, n, r) {
    return r !== null && Hi(r), Ln(t, e.child, null, n), e = vo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ff(e, t, n, r, l, i, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = ao(Error(o(422))), kl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Rl({ mode: "visible", children: r.children }, l, 0, null), i = pn(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Ln(t, e.child, null, s), t.child.memoizedState = mo(s), t.memoizedState = po, i);
    if ((t.mode & 1) === 0) return kl(e, t, s, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var f = r.dgst;
      return r = f, i = Error(o(419)), r = ao(i, r, void 0), kl(e, t, s, r);
    }
    if (f = (s & e.childLanes) !== 0, et || f) {
      if (r = We, r !== null) {
        switch (s & -s) {
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
        l = (l & (r.suspendedLanes | s)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Nt(e, l), wt(r, e, l, -1));
      }
      return Lo(), r = ao(Error(o(421))), kl(e, t, s, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ot = Bt(l.nextSibling), it = t, Ee = !0, vt = null, e !== null && (ut[at++] = Ot, ut[at++] = Pt, ut[at++] = ln, Ot = e.id, Pt = e.overflow, ln = t), t = vo(t, r.children), t.flags |= 4096, t);
  }
  function fa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ki(e.return, t, n);
  }
  function go(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function da(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (Ge(e, t, r.children, n), r = ze.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fa(e, n, t);
        else if (e.tag === 19) fa(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (ye(ze, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && pl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), go(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && pl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        go(t, !0, n, null, i);
        break;
      case "together":
        go(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Jt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Df(e, t, n) {
    switch (t.tag) {
      case 3:
        ua(t), Nn();
        break;
      case 5:
        Mu(t);
        break;
      case 1:
        be(t.type) && ll(t);
        break;
      case 4:
        Gi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ye(cl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ye(ze, ze.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ca(e, t, n) : (ye(ze, ze.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
        ye(ze, ze.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return da(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ye(ze, ze.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ia(e, t, n);
    }
    return Tt(e, t, n);
  }
  var ha, yo, pa, ma;
  ha = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, yo = function() {
  }, pa = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, un(Et.current);
      var i = null;
      switch (n) {
        case "input":
          l = Ze(e, l), r = Ze(e, r), i = [];
          break;
        case "select":
          l = D({}, l, { value: void 0 }), r = D({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Gl(e, l), r = Gl(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = tl);
      }
      Zl(n, r);
      var s;
      n = null;
      for (k in l) if (!r.hasOwnProperty(k) && l.hasOwnProperty(k) && l[k] != null) if (k === "style") {
        var f = l[k];
        for (s in f) f.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
      } else k !== "dangerouslySetInnerHTML" && k !== "children" && k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && k !== "autoFocus" && (c.hasOwnProperty(k) ? i || (i = []) : (i = i || []).push(k, null));
      for (k in r) {
        var h = r[k];
        if (f = l != null ? l[k] : void 0, r.hasOwnProperty(k) && h !== f && (h != null || f != null)) if (k === "style") if (f) {
          for (s in f) !f.hasOwnProperty(s) || h && h.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
          for (s in h) h.hasOwnProperty(s) && f[s] !== h[s] && (n || (n = {}), n[s] = h[s]);
        } else n || (i || (i = []), i.push(
          k,
          n
        )), n = h;
        else k === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, f = f ? f.__html : void 0, h != null && f !== h && (i = i || []).push(k, h)) : k === "children" ? typeof h != "string" && typeof h != "number" || (i = i || []).push(k, "" + h) : k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && (c.hasOwnProperty(k) ? (h != null && k === "onScroll" && ke("scroll", e), i || f === h || (i = [])) : (i = i || []).push(k, h));
      }
      n && (i = i || []).push("style", n);
      var k = i;
      (t.updateQueue = k) && (t.flags |= 4);
    }
  }, ma = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function _r(e, t) {
    if (!Ee) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Wf(e, t, n) {
    var r = t.pendingProps;
    switch (Wi(t), t.tag) {
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
        return qe(t), null;
      case 1:
        return be(t.type) && rl(), qe(t), null;
      case 3:
        return r = t.stateNode, jn(), xe(Je), xe(Qe), Ji(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ul(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, vt !== null && (Oo(vt), vt = null))), yo(e, t), qe(t), null;
      case 5:
        Xi(t);
        var l = un(yr.current);
        if (n = t.type, e !== null && t.stateNode != null) pa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return qe(t), null;
          }
          if (e = un(Et.current), ul(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[_t] = t, r[hr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ke("cancel", r), ke("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < cr.length; l++) ke(cr[l], r);
                break;
              case "source":
                ke("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  r
                ), ke("load", r);
                break;
              case "details":
                ke("toggle", r);
                break;
              case "input":
                kt(r, i), ke("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, ke("invalid", r);
                break;
              case "textarea":
                Jo(r, i), ke("invalid", r);
            }
            Zl(n, i), l = null;
            for (var s in i) if (i.hasOwnProperty(s)) {
              var f = i[s];
              s === "children" ? typeof f == "string" ? r.textContent !== f && (i.suppressHydrationWarning !== !0 && el(r.textContent, f, e), l = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (i.suppressHydrationWarning !== !0 && el(
                r.textContent,
                f,
                e
              ), l = ["children", "" + f]) : c.hasOwnProperty(s) && f != null && s === "onScroll" && ke("scroll", r);
            }
            switch (n) {
              case "input":
                oe(r), Zo(r, i, !0);
                break;
              case "textarea":
                oe(r), es(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = tl);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ts(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[_t] = t, e[hr] = r, ha(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Jl(n, r), n) {
                case "dialog":
                  ke("cancel", e), ke("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ke("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < cr.length; l++) ke(cr[l], e);
                  l = r;
                  break;
                case "source":
                  ke("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ke(
                    "error",
                    e
                  ), ke("load", e), l = r;
                  break;
                case "details":
                  ke("toggle", e), l = r;
                  break;
                case "input":
                  kt(e, r), l = Ze(e, r), ke("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = D({}, r, { value: void 0 }), ke("invalid", e);
                  break;
                case "textarea":
                  Jo(e, r), l = Gl(e, r), ke("invalid", e);
                  break;
                default:
                  l = r;
              }
              Zl(n, l), f = l;
              for (i in f) if (f.hasOwnProperty(i)) {
                var h = f[i];
                i === "style" ? ls(e, h) : i === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, h != null && ns(e, h)) : i === "children" ? typeof h == "string" ? (n !== "textarea" || h !== "") && Qn(e, h) : typeof h == "number" && Qn(e, "" + h) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (c.hasOwnProperty(i) ? h != null && i === "onScroll" && ke("scroll", e) : h != null && M(e, i, h, s));
              }
              switch (n) {
                case "input":
                  oe(e), Zo(e, r, !1);
                  break;
                case "textarea":
                  oe(e), es(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + E(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? vn(e, !!r.multiple, i, !1) : r.defaultValue != null && vn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = tl);
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
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return qe(t), null;
      case 6:
        if (e && t.stateNode != null) ma(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (n = un(yr.current), un(Et.current), ul(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (i = r.nodeValue !== n) && (e = it, e !== null)) switch (e.tag) {
              case 3:
                el(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && el(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r;
        }
        return qe(t), null;
      case 13:
        if (xe(ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ee && ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) yu(), Nn(), t.flags |= 98560, i = !1;
          else if (i = ul(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[_t] = t;
            } else Nn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), i = !1;
          } else vt !== null && (Oo(vt), vt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ze.current & 1) !== 0 ? Ae === 0 && (Ae = 3) : Lo())), t.updateQueue !== null && (t.flags |= 4), qe(t), null);
      case 4:
        return jn(), yo(e, t), e === null && fr(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return Qi(t.type._context), qe(t), null;
      case 17:
        return be(t.type) && rl(), qe(t), null;
      case 19:
        if (xe(ze), i = t.memoizedState, i === null) return qe(t), null;
        if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) _r(i, !1);
        else {
          if (Ae !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (s = pl(e), s !== null) {
              for (t.flags |= 128, _r(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ye(ze, ze.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Pe() > Wn && (t.flags |= 128, r = !0, _r(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = pl(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _r(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ee) return qe(t), null;
          } else 2 * Pe() - i.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128, r = !0, _r(i, !1), t.lanes = 4194304);
          i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Pe(), t.sibling = null, n = ze.current, ye(ze, r ? n & 1 | 2 : n & 1), t) : (qe(t), null);
      case 22:
      case 23:
        return No(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (st & 1073741824) !== 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Uf(e, t) {
    switch (Wi(t), t.tag) {
      case 1:
        return be(t.type) && rl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return jn(), xe(Je), xe(Qe), Ji(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Xi(t), null;
      case 13:
        if (xe(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Nn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xe(ze), null;
      case 4:
        return jn(), null;
      case 10:
        return Qi(t.type._context), null;
      case 22:
      case 23:
        return No(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _l = !1, Ye = !1, Bf = typeof WeakSet == "function" ? WeakSet : Set, U = null;
  function Fn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Oe(e, t, r);
    }
    else n.current = null;
  }
  function So(e, t, n) {
    try {
      n();
    } catch (r) {
      Oe(e, t, r);
    }
  }
  var va = !1;
  function Hf(e, t) {
    if (Pi = Vr, e = Ys(), xi(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0, f = -1, h = -1, k = 0, O = 0, N = e, I = null;
          t: for (; ; ) {
            for (var F; N !== n || l !== 0 && N.nodeType !== 3 || (f = s + l), N !== i || r !== 0 && N.nodeType !== 3 || (h = s + r), N.nodeType === 3 && (s += N.nodeValue.length), (F = N.firstChild) !== null; )
              I = N, N = F;
            for (; ; ) {
              if (N === e) break t;
              if (I === n && ++k === l && (f = s), I === i && ++O === r && (h = s), (F = N.nextSibling) !== null) break;
              N = I, I = N.parentNode;
            }
            N = F;
          }
          n = f === -1 || h === -1 ? null : { start: f, end: h };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ni = { focusedElem: e, selectionRange: n }, Vr = !1, U = t; U !== null; ) if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
    else for (; U !== null; ) {
      t = U;
      try {
        var H = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (H !== null) {
              var $ = H.memoizedProps, Ne = H.memoizedState, S = t.stateNode, v = S.getSnapshotBeforeUpdate(t.elementType === t.type ? $ : gt(t.type, $), Ne);
              S.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          case 3:
            var w = t.stateNode.containerInfo;
            w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (L) {
        Oe(t, t.return, L);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, U = e;
        break;
      }
      U = t.return;
    }
    return H = va, va = !1, H;
  }
  function Er(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && So(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function El(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function wo(e) {
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
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ga(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ga(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[hr], delete t[ji], delete t[Ef], delete t[Cf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ya(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Sa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ya(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ko(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = tl));
    else if (r !== 4 && (e = e.child, e !== null)) for (ko(e, t, n), e = e.sibling; e !== null; ) ko(e, t, n), e = e.sibling;
  }
  function xo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (xo(e, t, n), e = e.sibling; e !== null; ) xo(e, t, n), e = e.sibling;
  }
  var Ve = null, yt = !1;
  function qt(e, t, n) {
    for (n = n.child; n !== null; ) wa(e, t, n), n = n.sibling;
  }
  function wa(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function") try {
      xt.onCommitFiberUnmount(Fr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ye || Fn(n, t);
      case 6:
        var r = Ve, l = yt;
        Ve = null, qt(e, t, n), Ve = r, yt = l, Ve !== null && (yt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
        break;
      case 18:
        Ve !== null && (yt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? Ri(e.parentNode, n) : e.nodeType === 1 && Ri(e, n), nr(e)) : Ri(Ve, n.stateNode));
        break;
      case 4:
        r = Ve, l = yt, Ve = n.stateNode.containerInfo, yt = !0, qt(e, t, n), Ve = r, yt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, s = i.destroy;
            i = i.tag, s !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && So(n, t, s), l = l.next;
          } while (l !== r);
        }
        qt(e, t, n);
        break;
      case 1:
        if (!Ye && (Fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Oe(n, t, f);
        }
        qt(e, t, n);
        break;
      case 21:
        qt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ye = (r = Ye) || n.memoizedState !== null, qt(e, t, n), Ye = r) : qt(e, t, n);
        break;
      default:
        qt(e, t, n);
    }
  }
  function ka(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Bf()), t.forEach(function(r) {
        var l = Zf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function St(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, s = t, f = s;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              Ve = f.stateNode, yt = !1;
              break e;
            case 3:
              Ve = f.stateNode.containerInfo, yt = !0;
              break e;
            case 4:
              Ve = f.stateNode.containerInfo, yt = !0;
              break e;
          }
          f = f.return;
        }
        if (Ve === null) throw Error(o(160));
        wa(i, s, l), Ve = null, yt = !1;
        var h = l.alternate;
        h !== null && (h.return = null), l.return = null;
      } catch (k) {
        Oe(l, t, k);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) xa(t, e), t = t.sibling;
  }
  function xa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (St(t, e), Mt(e), r & 4) {
          try {
            Er(3, e, e.return), El(3, e);
          } catch ($) {
            Oe(e, e.return, $);
          }
          try {
            Er(5, e, e.return);
          } catch ($) {
            Oe(e, e.return, $);
          }
        }
        break;
      case 1:
        St(t, e), Mt(e), r & 512 && n !== null && Fn(n, n.return);
        break;
      case 5:
        if (St(t, e), Mt(e), r & 512 && n !== null && Fn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Qn(l, "");
          } catch ($) {
            Oe(e, e.return, $);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, f = e.type, h = e.updateQueue;
          if (e.updateQueue = null, h !== null) try {
            f === "input" && i.type === "radio" && i.name != null && en(l, i), Jl(f, s);
            var k = Jl(f, i);
            for (s = 0; s < h.length; s += 2) {
              var O = h[s], N = h[s + 1];
              O === "style" ? ls(l, N) : O === "dangerouslySetInnerHTML" ? ns(l, N) : O === "children" ? Qn(l, N) : M(l, O, N, k);
            }
            switch (f) {
              case "input":
                ql(l, i);
                break;
              case "textarea":
                bo(l, i);
                break;
              case "select":
                var I = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var F = i.value;
                F != null ? vn(l, !!i.multiple, F, !1) : I !== !!i.multiple && (i.defaultValue != null ? vn(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : vn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[hr] = i;
          } catch ($) {
            Oe(e, e.return, $);
          }
        }
        break;
      case 6:
        if (St(t, e), Mt(e), r & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch ($) {
            Oe(e, e.return, $);
          }
        }
        break;
      case 3:
        if (St(t, e), Mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          nr(t.containerInfo);
        } catch ($) {
          Oe(e, e.return, $);
        }
        break;
      case 4:
        St(t, e), Mt(e);
        break;
      case 13:
        St(t, e), Mt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Co = Pe())), r & 4 && ka(e);
        break;
      case 22:
        if (O = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ye = (k = Ye) || O, St(t, e), Ye = k) : St(t, e), Mt(e), r & 8192) {
          if (k = e.memoizedState !== null, (e.stateNode.isHidden = k) && !O && (e.mode & 1) !== 0) for (U = e, O = e.child; O !== null; ) {
            for (N = U = O; U !== null; ) {
              switch (I = U, F = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, I, I.return);
                  break;
                case 1:
                  Fn(I, I.return);
                  var H = I.stateNode;
                  if (typeof H.componentWillUnmount == "function") {
                    r = I, n = I.return;
                    try {
                      t = r, H.props = t.memoizedProps, H.state = t.memoizedState, H.componentWillUnmount();
                    } catch ($) {
                      Oe(r, n, $);
                    }
                  }
                  break;
                case 5:
                  Fn(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    Ca(N);
                    continue;
                  }
              }
              F !== null ? (F.return = I, U = F) : Ca(N);
            }
            O = O.sibling;
          }
          e: for (O = null, N = e; ; ) {
            if (N.tag === 5) {
              if (O === null) {
                O = N;
                try {
                  l = N.stateNode, k ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (f = N.stateNode, h = N.memoizedProps.style, s = h != null && h.hasOwnProperty("display") ? h.display : null, f.style.display = rs("display", s));
                } catch ($) {
                  Oe(e, e.return, $);
                }
              }
            } else if (N.tag === 6) {
              if (O === null) try {
                N.stateNode.nodeValue = k ? "" : N.memoizedProps;
              } catch ($) {
                Oe(e, e.return, $);
              }
            } else if ((N.tag !== 22 && N.tag !== 23 || N.memoizedState === null || N === e) && N.child !== null) {
              N.child.return = N, N = N.child;
              continue;
            }
            if (N === e) break e;
            for (; N.sibling === null; ) {
              if (N.return === null || N.return === e) break e;
              O === N && (O = null), N = N.return;
            }
            O === N && (O = null), N.sibling.return = N.return, N = N.sibling;
          }
        }
        break;
      case 19:
        St(t, e), Mt(e), r & 4 && ka(e);
        break;
      case 21:
        break;
      default:
        St(
          t,
          e
        ), Mt(e);
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ya(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Qn(l, ""), r.flags &= -33);
            var i = Sa(e);
            xo(e, i, l);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, f = Sa(e);
            ko(e, f, s);
            break;
          default:
            throw Error(o(161));
        }
      } catch (h) {
        Oe(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vf(e, t, n) {
    U = e, _a(e);
  }
  function _a(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var l = U, i = l.child;
      if (l.tag === 22 && r) {
        var s = l.memoizedState !== null || _l;
        if (!s) {
          var f = l.alternate, h = f !== null && f.memoizedState !== null || Ye;
          f = _l;
          var k = Ye;
          if (_l = s, (Ye = h) && !k) for (U = l; U !== null; ) s = U, h = s.child, s.tag === 22 && s.memoizedState !== null ? Ma(l) : h !== null ? (h.return = s, U = h) : Ma(l);
          for (; i !== null; ) U = i, _a(i), i = i.sibling;
          U = l, _l = f, Ye = k;
        }
        Ea(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, U = i) : Ea(e);
    }
  }
  function Ea(e) {
    for (; U !== null; ) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || El(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ye) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Cu(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Cu(t, s, n);
              }
              break;
            case 5:
              var f = t.stateNode;
              if (n === null && t.flags & 4) {
                n = f;
                var h = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    h.autoFocus && n.focus();
                    break;
                  case "img":
                    h.src && (n.src = h.src);
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
                var k = t.alternate;
                if (k !== null) {
                  var O = k.memoizedState;
                  if (O !== null) {
                    var N = O.dehydrated;
                    N !== null && nr(N);
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
              throw Error(o(163));
          }
          Ye || t.flags & 512 && wo(t);
        } catch (I) {
          Oe(t, t.return, I);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, U = n;
        break;
      }
      U = t.return;
    }
  }
  function Ca(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, U = n;
        break;
      }
      U = t.return;
    }
  }
  function Ma(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              El(4, t);
            } catch (h) {
              Oe(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Oe(t, l, h);
              }
            }
            var i = t.return;
            try {
              wo(t);
            } catch (h) {
              Oe(t, i, h);
            }
            break;
          case 5:
            var s = t.return;
            try {
              wo(t);
            } catch (h) {
              Oe(t, s, h);
            }
        }
      } catch (h) {
        Oe(t, t.return, h);
      }
      if (t === e) {
        U = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, U = f;
        break;
      }
      U = t.return;
    }
  }
  var $f = Math.ceil, Cl = ee.ReactCurrentDispatcher, _o = ee.ReactCurrentOwner, dt = ee.ReactCurrentBatchConfig, fe = 0, We = null, Te = null, $e = 0, st = 0, Dn = Ht(0), Ae = 0, Cr = null, cn = 0, Ml = 0, Eo = 0, Mr = null, tt = null, Co = 0, Wn = 1 / 0, Rt = null, zl = !1, Mo = null, Yt = null, Il = !1, Gt = null, Ol = 0, zr = 0, zo = null, Pl = -1, Nl = 0;
  function Xe() {
    return (fe & 6) !== 0 ? Pe() : Pl !== -1 ? Pl : Pl = Pe();
  }
  function Xt(e) {
    return (e.mode & 1) === 0 ? 1 : (fe & 2) !== 0 && $e !== 0 ? $e & -$e : zf.transition !== null ? (Nl === 0 && (Nl = Ss()), Nl) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Is(e.type)), e);
  }
  function wt(e, t, n, r) {
    if (50 < zr) throw zr = 0, zo = null, Error(o(185));
    Zn(e, n, r), ((fe & 2) === 0 || e !== We) && (e === We && ((fe & 2) === 0 && (Ml |= n), Ae === 4 && Zt(e, $e)), nt(e, r), n === 1 && fe === 0 && (t.mode & 1) === 0 && (Wn = Pe() + 500, il && $t()));
  }
  function nt(e, t) {
    var n = e.callbackNode;
    Mc(e, t);
    var r = Ur(e, e === We ? $e : 0);
    if (r === 0) n !== null && vs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && vs(n), t === 1) e.tag === 0 ? Mf(Ia.bind(null, e)) : hu(Ia.bind(null, e)), xf(function() {
        (fe & 6) === 0 && $t();
      }), n = null;
      else {
        switch (ws(r)) {
          case 1:
            n = ii;
            break;
          case 4:
            n = gs;
            break;
          case 16:
            n = Ar;
            break;
          case 536870912:
            n = ys;
            break;
          default:
            n = Ar;
        }
        n = Aa(n, za.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function za(e, t) {
    if (Pl = -1, Nl = 0, (fe & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (Un() && e.callbackNode !== n) return null;
    var r = Ur(e, e === We ? $e : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Ll(e, r);
    else {
      t = r;
      var l = fe;
      fe |= 2;
      var i = Pa();
      (We !== e || $e !== t) && (Rt = null, Wn = Pe() + 500, dn(e, t));
      do
        try {
          qf();
          break;
        } catch (f) {
          Oa(e, f);
        }
      while (!0);
      $i(), Cl.current = i, fe = l, Te !== null ? t = 0 : (We = null, $e = 0, t = Ae);
    }
    if (t !== 0) {
      if (t === 2 && (l = oi(e), l !== 0 && (r = l, t = Io(e, l))), t === 1) throw n = Cr, dn(e, 0), Zt(e, r), nt(e, Pe()), n;
      if (t === 6) Zt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Qf(l) && (t = Ll(e, r), t === 2 && (i = oi(e), i !== 0 && (r = i, t = Io(e, i))), t === 1)) throw n = Cr, dn(e, 0), Zt(e, r), nt(e, Pe()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            hn(e, tt, Rt);
            break;
          case 3:
            if (Zt(e, r), (r & 130023424) === r && (t = Co + 500 - Pe(), 10 < t)) {
              if (Ur(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Xe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Ti(hn.bind(null, e, tt, Rt), t);
              break;
            }
            hn(e, tt, Rt);
            break;
          case 4:
            if (Zt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var s = 31 - pt(r);
              i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
            }
            if (r = l, r = Pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $f(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Ti(hn.bind(null, e, tt, Rt), r);
              break;
            }
            hn(e, tt, Rt);
            break;
          case 5:
            hn(e, tt, Rt);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return nt(e, Pe()), e.callbackNode === n ? za.bind(null, e) : null;
  }
  function Io(e, t) {
    var n = Mr;
    return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = Ll(e, t), e !== 2 && (t = tt, tt = n, t !== null && Oo(t)), e;
  }
  function Oo(e) {
    tt === null ? tt = e : tt.push.apply(tt, e);
  }
  function Qf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!mt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Zt(e, t) {
    for (t &= ~Eo, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - pt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ia(e) {
    if ((fe & 6) !== 0) throw Error(o(327));
    Un();
    var t = Ur(e, 0);
    if ((t & 1) === 0) return nt(e, Pe()), null;
    var n = Ll(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = oi(e);
      r !== 0 && (t = r, n = Io(e, r));
    }
    if (n === 1) throw n = Cr, dn(e, 0), Zt(e, t), nt(e, Pe()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, hn(e, tt, Rt), nt(e, Pe()), null;
  }
  function Po(e, t) {
    var n = fe;
    fe |= 1;
    try {
      return e(t);
    } finally {
      fe = n, fe === 0 && (Wn = Pe() + 500, il && $t());
    }
  }
  function fn(e) {
    Gt !== null && Gt.tag === 0 && (fe & 6) === 0 && Un();
    var t = fe;
    fe |= 1;
    var n = dt.transition, r = pe;
    try {
      if (dt.transition = null, pe = 1, e) return e();
    } finally {
      pe = r, dt.transition = n, fe = t, (fe & 6) === 0 && $t();
    }
  }
  function No() {
    st = Dn.current, xe(Dn);
  }
  function dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, kf(n)), Te !== null) for (n = Te.return; n !== null; ) {
      var r = n;
      switch (Wi(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && rl();
          break;
        case 3:
          jn(), xe(Je), xe(Qe), Ji();
          break;
        case 5:
          Xi(r);
          break;
        case 4:
          jn();
          break;
        case 13:
          xe(ze);
          break;
        case 19:
          xe(ze);
          break;
        case 10:
          Qi(r.type._context);
          break;
        case 22:
        case 23:
          No();
      }
      n = n.return;
    }
    if (We = e, Te = e = Jt(e.current, null), $e = st = t, Ae = 0, Cr = null, Eo = Ml = cn = 0, tt = Mr = null, sn !== null) {
      for (t = 0; t < sn.length; t++) if (n = sn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = l, r.next = s;
        }
        n.pending = r;
      }
      sn = null;
    }
    return e;
  }
  function Oa(e, t) {
    do {
      var n = Te;
      try {
        if ($i(), ml.current = Sl, vl) {
          for (var r = Ie.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          vl = !1;
        }
        if (an = 0, De = je = Ie = null, Sr = !1, wr = 0, _o.current = null, n === null || n.return === null) {
          Ae = 1, Cr = t, Te = null;
          break;
        }
        e: {
          var i = e, s = n.return, f = n, h = t;
          if (t = $e, f.flags |= 32768, h !== null && typeof h == "object" && typeof h.then == "function") {
            var k = h, O = f, N = O.tag;
            if ((O.mode & 1) === 0 && (N === 0 || N === 11 || N === 15)) {
              var I = O.alternate;
              I ? (O.updateQueue = I.updateQueue, O.memoizedState = I.memoizedState, O.lanes = I.lanes) : (O.updateQueue = null, O.memoizedState = null);
            }
            var F = ea(s);
            if (F !== null) {
              F.flags &= -257, ta(F, s, f, i, t), F.mode & 1 && bu(i, k, t), t = F, h = k;
              var H = t.updateQueue;
              if (H === null) {
                var $ = /* @__PURE__ */ new Set();
                $.add(h), t.updateQueue = $;
              } else H.add(h);
              break e;
            } else {
              if ((t & 1) === 0) {
                bu(i, k, t), Lo();
                break e;
              }
              h = Error(o(426));
            }
          } else if (Ee && f.mode & 1) {
            var Ne = ea(s);
            if (Ne !== null) {
              (Ne.flags & 65536) === 0 && (Ne.flags |= 256), ta(Ne, s, f, i, t), Hi(An(h, f));
              break e;
            }
          }
          i = h = An(h, f), Ae !== 4 && (Ae = 2), Mr === null ? Mr = [i] : Mr.push(i), i = s;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Zu(i, h, t);
                Eu(i, S);
                break e;
              case 1:
                f = h;
                var v = i.type, w = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof v.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Yt === null || !Yt.has(w)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var L = Ju(i, f, t);
                  Eu(i, L);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        La(n);
      } catch (Q) {
        t = Q, Te === n && n !== null && (Te = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Pa() {
    var e = Cl.current;
    return Cl.current = Sl, e === null ? Sl : e;
  }
  function Lo() {
    (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4), We === null || (cn & 268435455) === 0 && (Ml & 268435455) === 0 || Zt(We, $e);
  }
  function Ll(e, t) {
    var n = fe;
    fe |= 2;
    var r = Pa();
    (We !== e || $e !== t) && (Rt = null, dn(e, t));
    do
      try {
        Kf();
        break;
      } catch (l) {
        Oa(e, l);
      }
    while (!0);
    if ($i(), fe = n, Cl.current = r, Te !== null) throw Error(o(261));
    return We = null, $e = 0, Ae;
  }
  function Kf() {
    for (; Te !== null; ) Na(Te);
  }
  function qf() {
    for (; Te !== null && !gc(); ) Na(Te);
  }
  function Na(e) {
    var t = ja(e.alternate, e, st);
    e.memoizedProps = e.pendingProps, t === null ? La(e) : Te = t, _o.current = null;
  }
  function La(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Wf(n, t, st), n !== null) {
          Te = n;
          return;
        }
      } else {
        if (n = Uf(n, t), n !== null) {
          n.flags &= 32767, Te = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ae = 6, Te = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Ae === 0 && (Ae = 5);
  }
  function hn(e, t, n) {
    var r = pe, l = dt.transition;
    try {
      dt.transition = null, pe = 1, Yf(e, t, n, r);
    } finally {
      dt.transition = l, pe = r;
    }
    return null;
  }
  function Yf(e, t, n, r) {
    do
      Un();
    while (Gt !== null);
    if ((fe & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (zc(e, i), e === We && (Te = We = null, $e = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Il || (Il = !0, Aa(Ar, function() {
      return Un(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = dt.transition, dt.transition = null;
      var s = pe;
      pe = 1;
      var f = fe;
      fe |= 4, _o.current = null, Hf(e, n), xa(n, e), pf(Ni), Vr = !!Pi, Ni = Pi = null, e.current = n, Vf(n), yc(), fe = f, pe = s, dt.transition = i;
    } else e.current = n;
    if (Il && (Il = !1, Gt = e, Ol = l), i = e.pendingLanes, i === 0 && (Yt = null), kc(n.stateNode), nt(e, Pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (zl) throw zl = !1, e = Mo, Mo = null, e;
    return (Ol & 1) !== 0 && e.tag !== 0 && Un(), i = e.pendingLanes, (i & 1) !== 0 ? e === zo ? zr++ : (zr = 0, zo = e) : zr = 0, $t(), null;
  }
  function Un() {
    if (Gt !== null) {
      var e = ws(Ol), t = dt.transition, n = pe;
      try {
        if (dt.transition = null, pe = 16 > e ? 16 : e, Gt === null) var r = !1;
        else {
          if (e = Gt, Gt = null, Ol = 0, (fe & 6) !== 0) throw Error(o(331));
          var l = fe;
          for (fe |= 4, U = e.current; U !== null; ) {
            var i = U, s = i.child;
            if ((U.flags & 16) !== 0) {
              var f = i.deletions;
              if (f !== null) {
                for (var h = 0; h < f.length; h++) {
                  var k = f[h];
                  for (U = k; U !== null; ) {
                    var O = U;
                    switch (O.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Er(8, O, i);
                    }
                    var N = O.child;
                    if (N !== null) N.return = O, U = N;
                    else for (; U !== null; ) {
                      O = U;
                      var I = O.sibling, F = O.return;
                      if (ga(O), O === k) {
                        U = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = F, U = I;
                        break;
                      }
                      U = F;
                    }
                  }
                }
                var H = i.alternate;
                if (H !== null) {
                  var $ = H.child;
                  if ($ !== null) {
                    H.child = null;
                    do {
                      var Ne = $.sibling;
                      $.sibling = null, $ = Ne;
                    } while ($ !== null);
                  }
                }
                U = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && s !== null) s.return = i, U = s;
            else e: for (; U !== null; ) {
              if (i = U, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Er(9, i, i.return);
              }
              var S = i.sibling;
              if (S !== null) {
                S.return = i.return, U = S;
                break e;
              }
              U = i.return;
            }
          }
          var v = e.current;
          for (U = v; U !== null; ) {
            s = U;
            var w = s.child;
            if ((s.subtreeFlags & 2064) !== 0 && w !== null) w.return = s, U = w;
            else e: for (s = v; U !== null; ) {
              if (f = U, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    El(9, f);
                }
              } catch (Q) {
                Oe(f, f.return, Q);
              }
              if (f === s) {
                U = null;
                break e;
              }
              var L = f.sibling;
              if (L !== null) {
                L.return = f.return, U = L;
                break e;
              }
              U = f.return;
            }
          }
          if (fe = l, $t(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
            xt.onPostCommitFiberRoot(Fr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        pe = n, dt.transition = t;
      }
    }
    return !1;
  }
  function Ta(e, t, n) {
    t = An(n, t), t = Zu(e, t, 1), e = Kt(e, t, 1), t = Xe(), e !== null && (Zn(e, 1, t), nt(e, t));
  }
  function Oe(e, t, n) {
    if (e.tag === 3) Ta(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ta(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r))) {
          e = An(n, e), e = Ju(t, e, 1), t = Kt(t, e, 1), e = Xe(), t !== null && (Zn(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Gf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & n, We === e && ($e & n) === n && (Ae === 4 || Ae === 3 && ($e & 130023424) === $e && 500 > Pe() - Co ? dn(e, 0) : Eo |= n), nt(e, t);
  }
  function Ra(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Wr, Wr <<= 1, (Wr & 130023424) === 0 && (Wr = 4194304)));
    var n = Xe();
    e = Nt(e, t), e !== null && (Zn(e, t, n), nt(e, n));
  }
  function Xf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ra(e, n);
  }
  function Zf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    r !== null && r.delete(t), Ra(e, n);
  }
  var ja;
  ja = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Je.current) et = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return et = !1, Df(e, t, n);
      et = (e.flags & 131072) !== 0;
    }
    else et = !1, Ee && (t.flags & 1048576) !== 0 && pu(t, sl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        xl(e, t), e = t.pendingProps;
        var l = In(t, Qe.current);
        Rn(t, n), l = to(null, t, r, e, l, n);
        var i = no();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (i = !0, ll(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Yi(t), l.updater = wl, t.stateNode = l, l._reactInternals = t, uo(t, r, e, n), t = ho(null, t, r, !0, i, n)) : (t.tag = 0, Ee && i && Di(t), Ge(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (xl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = bf(r), e = gt(r, e), l) {
            case 0:
              t = fo(null, t, r, e, n);
              break e;
            case 1:
              t = sa(null, t, r, e, n);
              break e;
            case 11:
              t = na(null, t, r, e, n);
              break e;
            case 14:
              t = ra(null, t, r, gt(r.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), fo(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), sa(e, t, r, l, n);
      case 3:
        e: {
          if (ua(t), e === null) throw Error(o(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, _u(e, t), hl(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = An(Error(o(423)), t), t = aa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = An(Error(o(424)), t), t = aa(e, t, r, n, l);
            break e;
          } else for (ot = Bt(t.stateNode.containerInfo.firstChild), it = t, Ee = !0, vt = null, n = ku(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Nn(), r === l) {
              t = Tt(e, t, n);
              break e;
            }
            Ge(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Mu(t), e === null && Bi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Li(r, l) ? s = null : i !== null && Li(r, i) && (t.flags |= 32), oa(e, t), Ge(e, t, s, n), t.child;
      case 6:
        return e === null && Bi(t), null;
      case 13:
        return ca(e, t, n);
      case 4:
        return Gi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ln(t, null, r, n) : Ge(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), na(e, t, r, l, n);
      case 7:
        return Ge(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, ye(cl, r._currentValue), r._currentValue = s, i !== null) if (mt(i.value, s)) {
            if (i.children === l.children && !Je.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var f = i.dependencies;
            if (f !== null) {
              s = i.child;
              for (var h = f.firstContext; h !== null; ) {
                if (h.context === r) {
                  if (i.tag === 1) {
                    h = Lt(-1, n & -n), h.tag = 2;
                    var k = i.updateQueue;
                    if (k !== null) {
                      k = k.shared;
                      var O = k.pending;
                      O === null ? h.next = h : (h.next = O.next, O.next = h), k.pending = h;
                    }
                  }
                  i.lanes |= n, h = i.alternate, h !== null && (h.lanes |= n), Ki(
                    i.return,
                    n,
                    t
                  ), f.lanes |= n;
                  break;
                }
                h = h.next;
              }
            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (s = i.return, s === null) throw Error(o(341));
              s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), Ki(s, n, t), s = i.sibling;
            } else s = i.child;
            if (s !== null) s.return = i;
            else for (s = i; s !== null; ) {
              if (s === t) {
                s = null;
                break;
              }
              if (i = s.sibling, i !== null) {
                i.return = s.return, s = i;
                break;
              }
              s = s.return;
            }
            i = s;
          }
          Ge(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Rn(t, n), l = ct(l), r = r(l), t.flags |= 1, Ge(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = gt(r, t.pendingProps), l = gt(r.type, l), ra(e, t, r, l, n);
      case 15:
        return la(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : gt(r, l), xl(e, t), t.tag = 1, be(r) ? (e = !0, ll(t)) : e = !1, Rn(t, n), Gu(t, r, l), uo(t, r, l, n), ho(null, t, r, !0, e, n);
      case 19:
        return da(e, t, n);
      case 22:
        return ia(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Aa(e, t) {
    return ms(e, t);
  }
  function Jf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ht(e, t, n, r) {
    return new Jf(e, t, n, r);
  }
  function To(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function bf(e) {
    if (typeof e == "function") return To(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ce) return 11;
      if (e === Fe) return 14;
    }
    return 2;
  }
  function Jt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Tl(e, t, n, r, l, i) {
    var s = 2;
    if (r = e, typeof e == "function") To(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case se:
        return pn(n.children, l, i, t);
      case Se:
        s = 8, l |= 8;
        break;
      case ce:
        return e = ht(12, n, t, l | 2), e.elementType = ce, e.lanes = i, e;
      case Le:
        return e = ht(13, n, t, l), e.elementType = Le, e.lanes = i, e;
      case _e:
        return e = ht(19, n, t, l), e.elementType = _e, e.lanes = i, e;
      case we:
        return Rl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Re:
            s = 10;
            break e;
          case Be:
            s = 9;
            break e;
          case Ce:
            s = 11;
            break e;
          case Fe:
            s = 14;
            break e;
          case He:
            s = 16, r = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = ht(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function pn(e, t, n, r) {
    return e = ht(7, e, r, t), e.lanes = n, e;
  }
  function Rl(e, t, n, r) {
    return e = ht(22, e, r, t), e.elementType = we, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ro(e, t, n) {
    return e = ht(6, e, null, t), e.lanes = n, e;
  }
  function jo(e, t, n) {
    return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function ed(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = si(0), this.expirationTimes = si(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = si(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Ao(e, t, n, r, l, i, s, f, h) {
    return e = new ed(e, t, n, f, h), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ht(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yi(i), e;
  }
  function td(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ve, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Fa(e) {
    if (!e) return Vt;
    e = e._reactInternals;
    e: {
      if (tn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (be(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (be(n)) return fu(e, n, t);
    }
    return t;
  }
  function Da(e, t, n, r, l, i, s, f, h) {
    return e = Ao(n, r, !0, e, l, i, s, f, h), e.context = Fa(null), n = e.current, r = Xe(), l = Xt(n), i = Lt(r, l), i.callback = t ?? null, Kt(n, i, l), e.current.lanes = l, Zn(e, l, r), nt(e, r), e;
  }
  function jl(e, t, n, r) {
    var l = t.current, i = Xe(), s = Xt(l);
    return n = Fa(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Kt(l, t, s), e !== null && (wt(e, l, s, i), dl(e, l, s)), s;
  }
  function Al(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Wa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Fo(e, t) {
    Wa(e, t), (e = e.alternate) && Wa(e, t);
  }
  function nd() {
    return null;
  }
  var Ua = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Do(e) {
    this._internalRoot = e;
  }
  Fl.prototype.render = Do.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    jl(e, t, null, null);
  }, Fl.prototype.unmount = Do.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      fn(function() {
        jl(null, e, null, null);
      }), t[zt] = null;
    }
  };
  function Fl(e) {
    this._internalRoot = e;
  }
  Fl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = _s();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++) ;
      Dt.splice(n, 0, e), n === 0 && Ms(e);
    }
  };
  function Wo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Dl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ba() {
  }
  function rd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var k = Al(s);
          i.call(k);
        };
      }
      var s = Da(t, r, e, 0, null, !1, !1, "", Ba);
      return e._reactRootContainer = s, e[zt] = s.current, fr(e.nodeType === 8 ? e.parentNode : e), fn(), s;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var k = Al(h);
        f.call(k);
      };
    }
    var h = Ao(e, 0, !1, null, null, !1, !1, "", Ba);
    return e._reactRootContainer = h, e[zt] = h.current, fr(e.nodeType === 8 ? e.parentNode : e), fn(function() {
      jl(t, h, n, r);
    }), h;
  }
  function Wl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var s = i;
      if (typeof l == "function") {
        var f = l;
        l = function() {
          var h = Al(s);
          f.call(h);
        };
      }
      jl(t, s, e, l);
    } else s = rd(n, t, e, l, r);
    return Al(s);
  }
  ks = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Xn(t.pendingLanes);
          n !== 0 && (ui(t, n | 1), nt(t, Pe()), (fe & 6) === 0 && (Wn = Pe() + 500, $t()));
        }
        break;
      case 13:
        fn(function() {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = Xe();
            wt(r, e, 1, l);
          }
        }), Fo(e, 1);
    }
  }, ai = function(e) {
    if (e.tag === 13) {
      var t = Nt(e, 134217728);
      if (t !== null) {
        var n = Xe();
        wt(t, e, 134217728, n);
      }
      Fo(e, 134217728);
    }
  }, xs = function(e) {
    if (e.tag === 13) {
      var t = Xt(e), n = Nt(e, t);
      if (n !== null) {
        var r = Xe();
        wt(n, e, t, r);
      }
      Fo(e, t);
    }
  }, _s = function() {
    return pe;
  }, Es = function(e, t) {
    var n = pe;
    try {
      return pe = e, t();
    } finally {
      pe = n;
    }
  }, ti = function(e, t, n) {
    switch (t) {
      case "input":
        if (ql(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = nl(r);
              if (!l) throw Error(o(90));
              Me(r), ql(r, l);
            }
          }
        }
        break;
      case "textarea":
        bo(e, n);
        break;
      case "select":
        t = n.value, t != null && vn(e, !!n.multiple, t, !1);
    }
  }, us = Po, as = fn;
  var ld = { usingClientEntryPoint: !1, Events: [pr, Mn, nl, os, ss, Po] }, Ir = { findFiberByHostInstance: nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, id = { bundleType: Ir.bundleType, version: Ir.version, rendererPackageName: Ir.rendererPackageName, rendererConfig: Ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = hs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ir.findFiberByHostInstance || nd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ul.isDisabled && Ul.supportsFiber) try {
      Fr = Ul.inject(id), xt = Ul;
    } catch {
    }
  }
  return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld, rt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wo(t)) throw Error(o(200));
    return td(e, t, null, n);
  }, rt.createRoot = function(e, t) {
    if (!Wo(e)) throw Error(o(299));
    var n = !1, r = "", l = Ua;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ao(e, 1, !1, null, null, n, !1, r, l), e[zt] = t.current, fr(e.nodeType === 8 ? e.parentNode : e), new Do(t);
  }, rt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = hs(t), e = e === null ? null : e.stateNode, e;
  }, rt.flushSync = function(e) {
    return fn(e);
  }, rt.hydrate = function(e, t, n) {
    if (!Dl(t)) throw Error(o(200));
    return Wl(null, e, t, !0, n);
  }, rt.hydrateRoot = function(e, t, n) {
    if (!Wo(e)) throw Error(o(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", s = Ua;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Da(t, null, e, 1, n ?? null, l, !1, i, s), e[zt] = t.current, fr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Fl(t);
  }, rt.render = function(e, t, n) {
    if (!Dl(t)) throw Error(o(200));
    return Wl(null, e, t, !1, n);
  }, rt.unmountComponentAtNode = function(e) {
    if (!Dl(e)) throw Error(o(40));
    return e._reactRootContainer ? (fn(function() {
      Wl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[zt] = null;
      });
    }), !0) : !1;
  }, rt.unstable_batchedUpdates = Po, rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Dl(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return Wl(e, t, n, !1, r);
  }, rt.version = "18.3.1-next-f1338f8080-20240426", rt;
}
var Ga;
function rc() {
  if (Ga) return Ho.exports;
  Ga = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (p) {
        console.error(p);
      }
  }
  return u(), Ho.exports = dd(), Ho.exports;
}
var Xa;
function hd() {
  if (Xa) return Bl;
  Xa = 1;
  var u = rc();
  return Bl.createRoot = u.createRoot, Bl.hydrateRoot = u.hydrateRoot, Bl;
}
var pd = hd(), md = rc();
function vd(u) {
  return typeof u == "object" ? u.key : u;
}
function gd(u, p) {
  const o = u.length;
  return new Proxy(u, {
    get(a, c, d) {
      if (typeof c == "string") {
        const g = c.charCodeAt(0);
        if (g >= 48 && g <= 57) {
          const m = +c;
          if (Number.isInteger(m) && m >= 0 && m < o) {
            let x = a[m];
            if (typeof x != "object") {
              const C = p[m * 2];
              x = a[m] = {
                index: m,
                key: x,
                start: C,
                size: p[m * 2 + 1],
                end: C + p[m * 2 + 1],
                lane: 0
              };
            }
            return x;
          }
        }
        if (c === "length") return o;
      }
      return Reflect.get(a, c, d);
    }
  });
}
function Bn(u, p, o) {
  let a = o.initialDeps ?? [], c, d = !0;
  function g() {
    const m = u();
    return (m.length !== a.length || m.some((C, P) => a[P] !== C)) && (a = m, c = p(...m), o != null && o.onChange && !(d && o.skipInitialOnChange) && o.onChange(c), d = !1), c;
  }
  return g.updateDeps = (m) => {
    a = m;
  }, g;
}
function Za(u, p) {
  if (u === void 0)
    throw new Error("Unexpected undefined");
  return u;
}
const mn = (u, p) => Math.abs(u - p) < 1.01, yd = (u, p, o) => {
  let a;
  return Object.assign(
    function(...c) {
      u.clearTimeout(a), a = u.setTimeout(() => p.apply(this, c), o);
    },
    {
      // The handle is closure-local, so a caller that has already
      // unsubscribed has no way to stop a queued call. Teardown paths use
      // this to drop the pending invocation instead of letting it land.
      cancel: () => {
        u.clearTimeout(a);
      }
    }
  );
};
function Sd({
  offset: u,
  isScrolling: p,
  elementMax: o,
  holdOffset: a,
  scrollOffset: c,
  pendingWrite: d,
  clampedMaxAtWrite: g
}) {
  var m;
  return p && d === null && u === c ? "spurious" : d !== null && Math.abs(u - d.target) < 1.5 ? "readBack" : d !== null && !d.smooth && o !== null && d.target > o + a + 0.5 && Math.abs(u - (o + a)) < 1.5 || d !== null && !d.smooth && ((m = d.lowMaxes) != null && m.some((x) => Math.abs(u - x) < 1.5)) ? "clampedReadBack" : g !== null && Math.abs(u - g) < 1.5 ? "clampedEcho" : "external";
}
const wd = (u) => u === "smooth" || u === "smoothFinishing";
function kd({
  kind: u,
  offset: p,
  command: o,
  target: a
}) {
  return u !== "spurious" && u !== "readBack" && // Our own write, clamped (`clampedReadBack`, #1310): the command is not
  // retired by it, and reconcile retargets below the new max.
  u !== "clampedReadBack" && (o == null ? void 0 : o.index) != null && // Nothing has been written for a command waiting for the tail; these
  // are the fling's events.
  o.phase !== "queued" && // A non-smooth write lands at once, so any other scroll event is the
  // user's, even before reconcile saw the target reached (the target may
  // keep moving, or iOS ignored the write under a finger). A write the
  // browser clamped because the sizer hasn't grown yet reads back at the
  // max, which is also where the fresh target clamps, so the check below
  // keeps it reconciling (#1294). While a smooth scroll's animation may
  // still report, its events look like a user's, so it yields only once it
  // has landed.
  !wd(o.phase) && !mn(p, o.lastTargetOffset) && !mn(p, a()) && // A compensation write's clamped echo (#1258) keeps the command. The
  // order is deliberate, not tidiness: this clause stays after `target()`
  // (and `clampedReadBack` before it) because `target()` can rebuild the
  // measurements, so it must run for exactly the events it always did.
  u !== "clampedEcho";
}
const qo = 40;
function xd(u) {
  const p = u[u.length - 1];
  if (p === void 0) return !1;
  let o = u.length - 2;
  for (; o >= 0 && p.t - u[o].t < qo; ) o--;
  if (o < 0) return !1;
  const a = u[o];
  let c = o - 1;
  for (; c >= 0 && a.t - u[c].t < qo; ) c--;
  if (c < 0) return !1;
  const d = u[c], g = (p.offset - a.offset) / (p.t - a.t), m = (a.offset - d.offset) / (a.t - d.t);
  return g * m >= 0 && Math.abs(g) >= 2 * Math.abs(m) && Math.abs(g) - Math.abs(m) >= 0.8;
}
function _d(u) {
  const p = u[u.length - 1];
  if (p === void 0) return !1;
  let o = u.length - 2;
  for (; o >= 0 && p.t - u[o].t < qo; ) o--;
  if (o < 0) return !1;
  const a = u[o];
  return Math.abs(p.offset - a.offset) / (p.t - a.t) >= 0.05;
}
let Pr;
const Ql = () => {
  if (Pr !== void 0) return Pr;
  if (typeof navigator > "u") return Pr = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Pr = !0;
  const u = navigator.maxTouchPoints;
  return Pr = navigator.platform === "MacIntel" && u !== void 0 && u > 0;
};
let Qo;
const Ed = () => Qo !== void 0 ? Qo : Qo = Ql() && typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("overflow-anchor: auto"), Cd = () => !Ql() || Ed(), Hn = {
  capture: !0,
  passive: !0
};
class Md {
  constructor(p) {
    this.host = p, this._touch = null, this.inMotion = () => this._touch !== null && this._touch.phase !== "lateFling", this.dragging = () => {
      var o;
      return ((o = this._touch) == null ? void 0 : o.phase) === "down" && this._touch.moved;
    }, this.tail = () => {
      var o;
      return ((o = this._touch) == null ? void 0 : o.phase) === "tail" ? this._touch.moved ? "fling" : "tap" : null;
    }, this.onScroll = ({
      isScrolling: o,
      ownReadBack: a,
      moved: c,
      external: d
    }) => {
      var g, m, x;
      return o && ((g = this._touch) == null ? void 0 : g.phase) === "tail" ? this._openTail(this._touch.moved || !a, !1) : ((m = this._touch) == null ? void 0 : m.phase) === "lateFling" && (this.host.now() > this._touch.until ? this._touch = null : d && o && c && this._openTail(!0, !1)), !a && o && c && ((x = this._touch) == null ? void 0 : x.phase) === "down" ? (this._touch.moved = !0, !0) : !1;
    }, this.touchStart = () => {
      this.end(), this._touch = { phase: "down", moved: !1 };
    }, this.touchEnd = () => {
      var o;
      const a = ((o = this._touch) == null ? void 0 : o.phase) === "down" && this._touch.moved;
      this.end(), this._openTail(a, a);
    }, this.end = () => {
      var o;
      const a = this.host.getWindow();
      ((o = this._touch) == null ? void 0 : o.phase) === "tail" && a != null && a.clearTimeout(this._touch.timerId), this._touch = null;
    }, this.listen = (o) => {
      const a = () => this.touchStart(), c = () => this.touchEnd();
      return o.addEventListener("touchstart", a, Hn), o.addEventListener("touchend", c, Hn), o.addEventListener("touchcancel", c, Hn), () => {
        o.removeEventListener(
          "touchstart",
          a,
          Hn
        ), o.removeEventListener("touchend", c, Hn), o.removeEventListener(
          "touchcancel",
          c,
          Hn
        ), this.end();
      };
    }, this._openTail = (o, a) => {
      const c = this.host.getWindow();
      if (c == null) return;
      this.end();
      const d = {
        phase: "tail",
        moved: o,
        awaitingFling: a,
        // Only fires while this tail is current: `end` clears it otherwise.
        timerId: c.setTimeout(() => {
          if (this.host.tailStillMoving()) {
            this._openTail(d.moved, d.awaitingFling);
            return;
          }
          this._touch = d.awaitingFling ? { phase: "lateFling", until: this.host.now() + 1e3 } : null, this.host.onTailClosed();
        }, 150)
      };
      this._touch = d;
    };
  }
  get touch() {
    return this._touch;
  }
}
const Ja = (u) => {
  const { clientWidth: p, clientHeight: o } = u;
  return { width: p, height: o };
}, lc = (u) => {
  const p = /* @__PURE__ */ new Set();
  return {
    schedule: (o) => {
      const a = u.requestAnimationFrame(() => {
        p.delete(a), o();
      });
      p.add(a);
    },
    cancel: () => {
      p.forEach((o) => u.cancelAnimationFrame(o)), p.clear();
    }
  };
}, zd = (u) => u, Id = (u) => {
  const p = u.overscan * Math.max(u.lanes ?? 1, 1), o = Math.max(u.startIndex - p, 0), c = Math.min(u.endIndex + p, u.count - 1) - o + 1, d = new Array(c);
  for (let g = 0; g < c; g++)
    d[g] = o + g;
  return d;
}, Od = (u, p) => {
  const o = u.scrollElement;
  if (!o)
    return;
  const a = u.targetWindow;
  if (!a)
    return;
  const c = (m) => {
    const { width: x, height: C } = m;
    p({ width: Math.round(x), height: Math.round(C) });
  };
  if (c(Ja(o)), !a.ResizeObserver)
    return () => {
    };
  const d = lc(a), g = new a.ResizeObserver(() => {
    const m = () => {
      c(Ja(o));
    };
    u.options.useAnimationFrameWithResizeObserver ? d.schedule(m) : m();
  });
  return g.observe(o, { box: "content-box" }), () => {
    g.unobserve(o), d.cancel();
  };
}, ba = {
  passive: !0
}, Pd = typeof window > "u" ? !0 : "onscrollend" in window, Nd = (u, p, o) => {
  const a = u.scrollElement;
  if (!a)
    return;
  const c = u.targetWindow;
  if (!c)
    return;
  const d = u.options.useScrollendEvent && Pd;
  let g = 0;
  const m = d ? null : yd(
    c,
    () => p(o(a), !1),
    u.options.isScrollingResetDelay
  ), x = (_) => () => {
    g = o(a), m == null || m(), p(g, _);
  }, C = x(!0), P = x(!1);
  return a.addEventListener("scroll", C, ba), d && a.addEventListener("scrollend", P, ba), () => {
    a.removeEventListener("scroll", C), d && a.removeEventListener("scrollend", P), m == null || m.cancel();
  };
}, Ld = (u, p) => Nd(u, p, (o) => {
  const { horizontal: a, isRtl: c } = u.options;
  return a ? o.scrollLeft * (c && -1 || 1) : o.scrollTop;
}), Td = (u, p, o) => {
  if (o.options.useCachedMeasurements) {
    const a = o.indexFromElement(u), c = o.options.getItemKey(a);
    return o.itemSizeCache.get(c) ?? o.options.estimateSize(a);
  }
  if (p != null && p.borderBoxSize) {
    const a = p.borderBoxSize[0];
    if (a)
      return Math.round(
        a[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!p) {
    const a = o.indexFromElement(u), c = o.options.getItemKey(a), d = o.itemSizeCache.get(c);
    if (d !== void 0)
      return d;
  }
  return u[o.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Rd = (u, {
  adjustments: p = 0,
  behavior: o
}, a) => {
  var c;
  const { scrollElement: d, options: g } = a, m = u + p, x = g.horizontal && g.isRtl && d !== null && "ownerDocument" in d;
  (c = d == null ? void 0 : d.scrollTo) == null || c.call(d, {
    [g.horizontal ? "left" : "top"]: x ? -m : m,
    behavior: o
  });
}, jd = Rd, ec = (u, p) => u === "smooth" ? p ? "smoothLanded" : "smooth" : "instant", Nr = (u) => (u == null ? void 0 : u.phase) === "smooth" || (u == null ? void 0 : u.phase) === "smoothLanded";
function Ad(u, p, o, a) {
  if (p === 0) return !1;
  const c = a(0), d = /* @__PURE__ */ new Set();
  let g = 0;
  for (; g < u; ) {
    const x = o(g);
    if (x === c) break;
    d.add(x), g++;
  }
  const m = u - g;
  if (m === 0 || m >= p) return !1;
  for (let x = 0; x < m; x++)
    if (a(x) !== o(g + x)) return !1;
  for (let x = m; x < p; x++)
    if (d.has(a(x))) return !1;
  return !0;
}
class Fd {
  constructor(p) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this._holdOffset = 0, this._reportedOverscroll = !1, this._iosGesture = new Md({
      getWindow: () => this.targetWindow,
      now: () => this.now(),
      // The end of a fling can move less than a pixel per scroll event, so
      // events can stop for 150ms while the fling is still running (seen on
      // an iPhone, 27.0.1). A command waiting for it would then be written
      // into the fling and overridden. The element having moved since the
      // last event means it has not ended: wait again. Not while our own
      // write has yet to report: that moved it.
      tailStillMoving: () => {
        const o = this.scrollState;
        if ((o == null ? void 0 : o.phase) !== "queued" || this.pendingWrite !== null)
          return !1;
        const a = this._readElementOffset();
        return a === null || this._lastElementOffset === null || Math.abs(a - this._lastElementOffset) < 1 ? !1 : (this._lastElementOffset = a, o.samples = [...o.samples ?? [], { t: this.now(), offset: a }], !0);
      },
      onTailClosed: () => {
        const o = this.scrollState;
        (o == null ? void 0 : o.phase) === "queued" && _d(o.samples ?? []) && (this.scrollState = null), this._flushHoldIfReady(!0), this._writeAwaitingCommand(), this._retryClampedAdjustment();
      }
    }), this._lastElementOffset = null, this.pendingWrite = null, this._clampedAdjustment = null, this.elementsCache = /* @__PURE__ */ new Map(), this._resizeBatch = null, this.now = () => {
      var o, a, c;
      return ((c = (a = (o = this.targetWindow) == null ? void 0 : o.performance) == null ? void 0 : a.now) == null ? void 0 : c.call(a)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let o = null, a = null, c = !1, d = !1;
      const g = /* @__PURE__ */ new Set(), m = () => {
        if (o)
          return o;
        const C = this.targetWindow;
        if (!C || !C.ResizeObserver)
          return null;
        const P = a = lc(C);
        return o = new C.ResizeObserver((_) => {
          const T = () => {
            const W = { sync: !1 };
            this._resizeBatch = W;
            try {
              _.forEach(x);
            } finally {
              this._resizeBatch = null, W.notify && (this.notify(W.sync), this._noteClampMax(), this._flushHoldIfReady(!0), this._retryClampedAdjustment(), this.measureElement(null));
            }
          };
          if (this.options.useAnimationFrameWithResizeObserver)
            P.schedule(T);
          else {
            c = !0;
            try {
              T();
            } finally {
              c = !1;
            }
          }
        });
      }, x = (C) => {
        const P = C.target, _ = this.indexFromElement(P);
        if (!P.isConnected) {
          this.observer.unobserve(P);
          for (const [T, W] of this.elementsCache)
            if (W === P) {
              this.elementsCache.delete(T);
              break;
            }
          return;
        }
        this.isIndexInRange(_) && this.shouldMeasureDuringScroll(_) && this.resizeItem(_, this.options.measureElement(P, C, this));
      };
      return {
        disconnect: () => {
          var C;
          (C = m()) == null || C.disconnect(), a == null || a.cancel(), g.clear(), d = !1, o = null, a = null;
        },
        observe: (C) => {
          const P = m();
          if (P) {
            if (!c) {
              P.observe(C, { box: "border-box" });
              return;
            }
            g.add(C), d || (d = !0, a == null || a.schedule(() => {
              d = !1, g.forEach((_) => {
                _.isConnected && (o == null || o.observe(_, { box: "border-box" }));
              }), g.clear();
            }));
          }
        },
        unobserve: (C) => {
          var P;
          g.delete(C), (P = m()) == null || P.unobserve(C);
        }
      };
    })(), this.range = null, this.setOptions = (o) => {
      var a;
      const c = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: zd,
        rangeExtractor: Id,
        onChange: () => {
        },
        measureElement: Td,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: !1,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        laneAssignmentMode: "estimate",
        useCachedMeasurements: !1
      };
      for (const P in o) {
        const _ = o[P];
        _ !== void 0 && (c[P] = _);
      }
      const d = this.options;
      let g = null, m = null, x = !1;
      if (d !== void 0 && d.enabled && c.enabled && c.anchorTo === "end" && this.scrollElement !== null) {
        const P = d.count, _ = c.count, T = this.getMeasurements(), W = ((a = this._singleLaneMeasurements) == null ? void 0 : a.items) ?? T, V = (M) => vd(W[M]), A = P > 0 ? V(0) : null, K = P > 0 ? V(P - 1) : null;
        if (_ !== P || P > 0 && _ > 0 && (c.getItemKey(0) !== A || c.getItemKey(_ - 1) !== K)) {
          x = !0;
          const M = P > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? T[0] : null;
          M && (g = [M.key, this.getScrollOffset() - M.start]);
          const ee = c.followOnAppend === !0 ? "auto" : c.followOnAppend || null;
          ee && _ > 0 && this.isAtEnd(d.scrollEndThreshold) && (P === 0 || c.getItemKey(_ - 1) !== K) && (_ > P || Ad(
            P,
            _,
            V,
            c.getItemKey
          )) && (m = ee);
        }
      }
      this.options = c, x && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let C = null;
      if (g && this.scrollOffset !== null && !this._awaitingCommandReadBack()) {
        const [P, _] = g, T = this.getMeasurements(), { count: W, getItemKey: V } = this.options;
        let A = 0;
        for (; A < W && V(A) !== P; )
          A++;
        if (A < W) {
          const K = T[A];
          if (K) {
            const Z = Math.max(0, K.start + _);
            !m && Z !== this.scrollOffset && (C = Z - this.scrollOffset, this.scrollOffset = Z);
          }
        }
      }
      m ? this.pendingScrollAnchor = { kind: "follow", behavior: m } : C !== null && (this._canWriteScroll() ? this.pendingScrollAnchor = { kind: "anchor", delta: C } : (this._holdOffset += C, this._followOffsetTarget(C)));
    }, this.notify = (o) => {
      var a, c;
      (c = (a = this.options).onChange) == null || c.call(a, this, o);
    }, this.maybeNotify = Bn(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (o) => {
        this.notify(o);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      var o;
      this.unsubs.filter(Boolean).forEach((a) => a()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, (o = this._momentumStop) == null || o.restore(), this._momentumStop = null, this.isScrolling = !1, this.scrollDirection = null, this._holdOffset = 0, this._reportedOverscroll = !1, this._clampedAdjustment = null, this.pendingWrite = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var o;
      const a = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== a) {
        if (this.cleanup(), !a) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = a, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((o = this.scrollElement) == null ? void 0 : o.window) ?? null, this.elementsCache.forEach((d) => {
          this.observer.observe(d);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (d) => {
            this.scrollRect = d, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (d, g) => {
            var m, x, C, P;
            const _ = g ? this._elementMaxScrollOffset() : null, T = this._reportedOverscroll;
            this._reportedOverscroll = d < 0 || _ !== null && d > _ + 1;
            const W = d;
            this._lastElementOffset = W, d = this._toLayoutOffset(d);
            const V = this._classifyScrollEvent(
              d,
              g,
              _
            );
            if (V === "spurious") return;
            V === "readBack" ? d = this.pendingWrite.target : V === "clampedReadBack" && ((m = this.scrollState) == null ? void 0 : m.index) != null && // Not `elementMax`: an adapter can report the read-back at rest.
            d < this.getMaxScrollOffset() - 1.5 ? this.scrollState.lastTargetOffset = d : kd({
              kind: V,
              offset: d,
              command: this.scrollState,
              target: () => this.getScrollStateTarget(this.scrollState)
            }) && (this.scrollState = null), this.pendingWrite = null, this._clampedAdjustment !== null && Math.abs(d - this._clampedAdjustment.maxAtWrite) >= 1.5 && (this._clampedAdjustment = null);
            const A = this.getScrollOffset(), K = this.scrollDirection;
            this.scrollDirection = g ? A === d ? this.scrollDirection : A < d ? "forward" : "backward" : null, this.scrollOffset = d, this.isScrolling = g;
            const Z = this.scrollState;
            if ((Z == null ? void 0 : Z.phase) === "queued" && V === "external" && g)
              if (T || this._reportedOverscroll)
                Z.samples = [];
              else {
                const q = this.now();
                Z.samples = [
                  ...(Z.samples ?? []).filter(
                    (M) => q - M.t <= 200
                  ),
                  { t: q, offset: W }
                ], (K !== null && this.scrollDirection !== K || xd(Z.samples)) && (this.scrollState = null);
              }
            this._iosGesture.onScroll({
              isScrolling: g,
              ownReadBack: V === "readBack",
              moved: d !== A,
              // Neither our write's read-back nor a frame of our smooth
              // animation: the user or a fling moved it.
              external: V === "external" && ((x = this.scrollState) == null ? void 0 : x.phase) !== "smooth" && ((C = this.scrollState) == null ? void 0 : C.phase) !== "smoothFinishing"
            }) && // The user scrolls: a command still waiting for the tail is
            // theirs to override, like a written one would be.
            ((P = this.scrollState) == null ? void 0 : P.phase) === "queued" && (this.scrollState = null), this._flushHoldIfReady(!0), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement && this.unsubs.push(
          this._iosGesture.listen(this.scrollElement)
        ), this._scrollToOffset(this.getScrollOffset());
      }
      this._noteClampMax();
      const c = this.pendingScrollAnchor;
      this.pendingScrollAnchor = null, c && this.scrollElement && this.options.enabled && (c.kind === "anchor" ? this._canWriteScroll() ? Nr(this.scrollState) && !mn(
        this.getScrollOffset() - c.delta,
        this.scrollState.lastTargetOffset
      ) || (this._followOffsetTarget(c.delta), this._scrollToOffset(this.getScrollOffset())) : (this._holdOffset += c.delta, this._followOffsetTarget(c.delta), this.notify(!1)) : this.scrollToEnd({ behavior: c.behavior })), this._flushHoldIfReady(!1), this._retryClampedAdjustment();
    }, this._classifyScrollEvent = (o, a, c) => {
      var d;
      return Sd({
        offset: o,
        isScrolling: a,
        elementMax: c,
        holdOffset: this._holdOffset,
        scrollOffset: this.scrollOffset,
        pendingWrite: this.pendingWrite,
        clampedMaxAtWrite: ((d = this._clampedAdjustment) == null ? void 0 : d.maxAtWrite) ?? null
      });
    }, this._retryClampedAdjustment = () => {
      if (this._clampedAdjustment === null || !this.scrollElement || !this.options.enabled || !this._canWriteScroll())
        return;
      const { target: o, maxAtWrite: a } = this._clampedAdjustment, c = this.getMaxScrollOffset();
      c > a + 0.5 && (this._clampedAdjustment = o > c + 0.5 ? { target: o, maxAtWrite: c } : null, this._scrollToOffset(o));
    }, this._writeAwaitingCommand = () => {
      const o = this.scrollState;
      if (o === null || o.phase !== "queued") return;
      const { behavior: a } = o;
      this.getMeasurements();
      const c = this.getScrollStateTarget(o);
      o.lastTargetOffset = c, this._clampedAdjustment = null, o.phase = ec(
        a,
        o.index != null && mn(c, this.getScrollOffset())
      ), this._scrollToOffset(c, { behavior: a }), this.scheduleScrollReconcile();
    }, this._readElementOffset = () => {
      const o = this.scrollElement;
      if (o == null) return null;
      const { horizontal: a, isRtl: c } = this.options;
      return typeof o.scrollTop == "number" ? a ? o.scrollLeft * (c && -1 || 1) : o.scrollTop : typeof o.scrollY == "number" ? a ? o.scrollX : o.scrollY : null;
    }, this._canWriteScroll = () => !(Ql() && this._iosGesture.inMotion()) && !this._reportedOverscroll, this._flushHoldIfReady = (o) => {
      var a;
      if (this._holdOffset === 0 || !this.scrollElement || !this.options.enabled || !this._canWriteScroll() || ((a = this.scrollState) == null ? void 0 : a.phase) === "smooth") return;
      this._holdOffset = 0, this.scrollOffset !== null && this.scrollOffset < 0 && (this.scrollOffset = 0), this.notify(o);
      const c = this.getCommandWrittenOffset() ?? this.getScrollOffset();
      this._clampedAdjustment = this._clampedBy(c), this._scrollToOffset(c);
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Bn(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode,
        this.options.gap
      ],
      (o, a, c, d, g, m, x, C) => (this.prevLanes !== void 0 && this.prevLanes !== m && (this.lanesChangedFlag = !0), this.prevLanes = m, this.pendingMin = null, {
        count: o,
        paddingStart: a,
        scrollMargin: c,
        getItemKey: d,
        enabled: g,
        lanes: m,
        laneAssignmentMode: x,
        gap: C
      }),
      {
        key: !1
      }
    ), this.isIndexInRange = (o) => o >= 0 && o < this.options.count, this.getMeasurements = Bn(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: o,
        paddingStart: a,
        scrollMargin: c,
        getItemKey: d,
        enabled: g,
        lanes: m,
        laneAssignmentMode: x,
        gap: C
      }, P) => {
        var _;
        const T = this.itemSizeCache;
        if (!g)
          return this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > o)
          for (const q of this.laneAssignments.keys())
            q >= o && this.laneAssignments.delete(q);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((q) => {
          this.itemSizeCache.set(q.key, q.size);
        }));
        const W = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === o && (this.lanesSettling = !1), m === 1) {
          const q = o * 2;
          let M = (_ = this._singleLaneMeasurements) == null ? void 0 : _.flat;
          if (!M || M.length < q) {
            const se = new Float64Array(q);
            M && W > 0 && se.set(M.subarray(0, W * 2)), M = se;
          }
          const ee = W === 0 ? new Array(o) : this._singleLaneMeasurements.items.slice();
          let le;
          if (W === 0)
            le = a + c;
          else {
            const se = W - 1;
            le = M[se * 2] + M[se * 2 + 1] + C;
          }
          for (let se = W; se < o; se++) {
            const Se = d(se);
            ee[se] = Se;
            const ce = T.get(Se), Re = typeof ce == "number" ? ce : this.options.estimateSize(se);
            M[se * 2] = le, M[se * 2 + 1] = Re, le += Re + C;
          }
          this._singleLaneMeasurements = { flat: M, items: ee };
          const ve = gd(ee, M);
          return this.measurementsCache = ve, ve;
        }
        const V = this.measurementsCache.slice(0, W), A = new Array(m).fill(
          void 0
        ), K = new Float64Array(m);
        let Z = 0;
        for (let q = 0; q < W; q++) {
          const M = V[q];
          M && (A[M.lane] === void 0 && Z++, A[M.lane] = q, K[M.lane] = M.end);
        }
        for (let q = W; q < o; q++) {
          const M = d(q), ee = this.laneAssignments.get(q);
          let le, ve;
          const se = x === "estimate" || T.has(M);
          if (ee !== void 0 && this.options.lanes > 1) {
            le = ee;
            const Be = A[le], Ce = Be !== void 0 ? V[Be] : void 0;
            ve = Ce ? Ce.end + C : a + c;
          } else if (Z === m) {
            let Be = 0, Ce = K[0], Le = A[0];
            for (let _e = 1; _e < m; _e++) {
              const Fe = K[_e];
              (Fe < Ce || Fe === Ce && A[_e] < Le) && (Be = _e, Ce = Fe, Le = A[_e]);
            }
            le = Be, ve = Ce + C, se && this.laneAssignments.set(q, le);
          } else
            le = q % this.options.lanes, ve = a + c, se && this.laneAssignments.set(q, le);
          const Se = T.get(M), ce = typeof Se == "number" ? Se : this.options.estimateSize(q), Re = ve + ce;
          V[q] = {
            index: q,
            start: ve,
            size: ce,
            end: Re,
            key: M,
            lane: le
          }, A[le] === void 0 && Z++, A[le] = q, K[le] = Re;
        }
        return this.measurementsCache = V, V;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Bn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes,
        // scrollOffset is measured in the scroll element and the layout total
        // from the list start, so the list ends scrollMargin further down.
        this._getLayoutTotalSize() + this.options.scrollMargin
      ],
      (o, a, c, d, g) => {
        if (o.length === 0 || a === 0)
          return this.range = null, null;
        const m = Math.max(g - a, 0);
        return this.range = Wd(
          o,
          a,
          Math.min(c, m),
          d,
          // Pass the typed array so binary search + forward-walk can read
          // start/end directly from Float64Array, skipping the Proxy traps.
          d === 1 && this._singleLaneMeasurements !== null ? this._singleLaneMeasurements.flat : null
        ), this.range;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Bn(
      () => {
        let o = null, a = null;
        const c = this.calculateRange();
        return c && (o = c.startIndex, a = c.endIndex), this.maybeNotify.updateDeps([this.isScrolling, o, a]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          o,
          a,
          this.options.lanes
        ];
      },
      (o, a, c, d, g, m) => d === null || g === null ? [] : o({
        startIndex: d,
        endIndex: g,
        overscan: a,
        count: c,
        lanes: m
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (o) => {
      const a = this.options.indexAttribute, c = o.getAttribute(a);
      return c ? parseInt(c, 10) : (console.warn(
        `Missing attribute name '${a}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (o) => {
      var a;
      if (!Nr(this.scrollState))
        return !0;
      const c = this.scrollState.index ?? ((a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : a.index);
      if (c !== void 0 && this.range) {
        const d = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), g = Math.max(0, c - d), m = Math.min(
          this.options.count - 1,
          c + d
        );
        return o >= g && o <= m;
      }
      return !0;
    }, this.measureElement = (o) => {
      if (!o) {
        this.elementsCache.forEach((g, m) => {
          g.isConnected || (this.observer.unobserve(g), this.elementsCache.delete(m));
        });
        return;
      }
      const a = this.indexFromElement(o);
      if (!this.isIndexInRange(a)) return;
      const c = this.options.getItemKey(a), d = this.elementsCache.get(c);
      d !== o && (d && this.observer.unobserve(d), this.observer.observe(o), this.elementsCache.set(c, o)), o.isConnected && (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(a) && this.resizeItem(a, this.options.measureElement(o, void 0, this));
    }, this.resizeItem = (o, a) => {
      var c, d, g;
      if (!this.isIndexInRange(o)) return;
      (c = this._resizeBatch) != null && c.sync && this.getMeasurements();
      let m, x, C;
      const P = (d = this._singleLaneMeasurements) == null ? void 0 : d.flat;
      if (this.options.lanes === 1 && P != null)
        C = this.options.getItemKey(o), x = P[o * 2], m = P[o * 2 + 1];
      else {
        const W = this.measurementsCache[o];
        if (!W) return;
        C = W.key, x = W.start, m = W.size;
      }
      const _ = this.itemSizeCache.get(C) ?? m, T = a - _;
      if (T !== 0) {
        const W = this.options.anchorTo === "end" && !Nr(this.scrollState) && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, V = W ? this._getLayoutTotalSize() : 0, A = this.getScrollOffset(), Z = !this.itemSizeCache.has(C) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          x < A
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          x + _ <= A && this.scrollDirection !== "backward"
        ), q = !Nr(this.scrollState) && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[o] ?? {
            index: o,
            key: C,
            start: x,
            size: m,
            end: x + m,
            lane: 0
          },
          T,
          this
        ) : Z);
        (this.pendingMin === null || o < this.pendingMin) && (this.pendingMin = o), this.itemSizeCache.set(C, a), this.itemSizeCacheVersion++;
        let M = !1;
        if (this._awaitingCommandReadBack() || (W ? M = this.applyScrollAdjustment(
          this._getLayoutTotalSize() - V
        ) : q && (M = this.applyScrollAdjustment(T))), this._resizeBatch) {
          this._resizeBatch.notify = !0, (g = this._resizeBatch).sync || (g.sync = M);
          return;
        }
        this.notify(M), this._noteClampMax(), this._flushHoldIfReady(!0), this._retryClampedAdjustment();
      }
    }, this.getVirtualItems = Bn(
      () => [this.getVirtualIndexes(), this.getMeasurements(), this._holdOffset],
      (o, a, c) => {
        const d = [];
        for (let g = 0, m = o.length; g < m; g++) {
          const x = o[g], C = a[x];
          d.push(
            c === 0 ? C : {
              ...C,
              start: C.start - c,
              end: C.end - c
            }
          );
        }
        return d;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (o) => {
      var a;
      const c = this.getMeasurements();
      if (c.length === 0)
        return;
      const d = (a = this._singleLaneMeasurements) == null ? void 0 : a.flat, g = this.options.lanes === 1 && d != null, m = ic(
        0,
        c.length - 1,
        g ? (x) => d[x * 2] : (x) => Za(c[x]).start,
        o
      );
      return Za(c[m]);
    }, this._noteClampMax = () => {
      if (!this._awaitingCommandReadBack()) return;
      const o = this._elementMaxScrollOffset();
      if (o === null) return;
      const a = this.pendingWrite, c = Math.max(o, 0) + this._holdOffset;
      if (c >= a.target) return;
      const d = a.lowMaxes ?? (a.lowMaxes = []);
      d[d.length - 1] !== c && d.push(c);
    }, this.getMaxScrollOffset = () => (this._elementMaxScrollOffset() ?? 0) + this._holdOffset, this._toLayoutOffset = (o) => {
      var a;
      let c = o + this._holdOffset;
      return ((a = this.pendingScrollAnchor) == null ? void 0 : a.kind) === "anchor" && (c += this.pendingScrollAnchor.delta), c;
    }, this._elementMaxScrollOffset = () => {
      const o = this.scrollElement;
      if (o === null) return null;
      if ("scrollHeight" in o)
        return this.options.horizontal ? o.scrollWidth - o.clientWidth : o.scrollHeight - o.clientHeight;
      if ("document" in o) {
        const a = o.document.documentElement;
        return this.options.horizontal ? a.scrollWidth - o.innerWidth : a.scrollHeight - o.innerHeight;
      }
      return null;
    }, this._momentumStop = null, this._stopMomentum = (o) => {
      const a = this.scrollElement, c = this.targetWindow;
      if (a === null || c === null) return;
      const d = "document" in a ? a.document.scrollingElement : a;
      if (!(d != null && d.style)) return;
      if (this._momentumStop) {
        this._momentumStop.done = o;
        return;
      }
      const { style: g } = d, m = this.options.horizontal ? "overflow-x" : "overflow-y", x = g.getPropertyValue(m), C = g.getPropertyPriority(m), P = () => this.options.horizontal ? d.clientHeight : d.clientWidth, _ = P();
      if (g.setProperty(m, "hidden", "important"), P() !== _) {
        g.setProperty(m, x, C);
        return;
      }
      const T = {
        // False when the app replaced the hidden value: the fling may not
        // have stopped.
        restore: () => g.getPropertyValue(m) !== "hidden" || g.getPropertyPriority(m) !== "important" ? !1 : (g.setProperty(m, x, C), !0),
        done: o
      };
      this._momentumStop = T, c.requestAnimationFrame(
        () => c.requestAnimationFrame(() => {
          this._momentumStop === T && (this._momentumStop = null, T.restore() && T.done());
        })
      );
    }, this._clampedBy = (o) => {
      const a = this._elementMaxScrollOffset();
      if (a === null) return null;
      const c = a + this._holdOffset;
      return o > c + 0.5 ? { target: o, maxAtWrite: c } : null;
    }, this.getVirtualDistanceFromEnd = () => Math.max(
      this._getLayoutTotalSize() + this.options.scrollMargin - this.getSize() - this.getScrollOffset(),
      0
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (o = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= o, this.getOffsetForAlignment = (o, a, c = 0) => {
      if (!this.scrollElement) return 0;
      const d = this.getSize(), g = this.getScrollOffset();
      a === "auto" && (a = o >= g + d ? "end" : "start"), a === "center" ? o += (c - d) / 2 : a === "end" && (o -= d);
      const m = this.getMaxScrollOffset();
      return Math.max(Math.min(m, o), 0);
    }, this.getOffsetForIndex = (o, a = "auto") => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      const c = this.getSize(), d = this.getScrollOffset(), g = this.getMeasurements()[o];
      if (!g) return;
      if (a === "auto")
        if (g.end >= d + c - this.options.scrollPaddingEnd)
          a = "end";
        else if (g.start <= d + this.options.scrollPaddingStart)
          a = "start";
        else
          return [d, a];
      if (a === "end" && o === this.options.count - 1) {
        const x = this.getMaxScrollOffset(), C = x - this.options.paddingEnd + this.options.scrollPaddingEnd;
        return [Math.max(Math.min(C, x), 0), a];
      }
      const m = a === "end" ? g.end + this.options.scrollPaddingEnd : g.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(m, a, g.size),
        a
      ];
    }, this.scrollToOffset = (o, { align: a = "start", behavior: c = "auto" } = {}) => {
      this._startScroll(
        { index: null, align: a },
        this.getOffsetForAlignment(o, a),
        c,
        "absolute"
      );
    }, this.scrollToIndex = (o, {
      align: a = "auto",
      behavior: c = "auto"
    } = {}) => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      const d = this.getOffsetForIndex(o, a);
      if (!d) return;
      const [g, m] = d;
      this._startScroll({ index: o, align: m }, g, c, "absolute");
    }, this.scrollBy = (o, { behavior: a = "auto" } = {}) => {
      const c = this.getOffsetForAlignment(
        (this.getCommandWrittenOffset() ?? this.getScrollOffset()) + o,
        "start"
      );
      this._startScroll(
        { index: null, align: "start" },
        c,
        a,
        "relative"
      );
    }, this.scrollToEnd = ({ behavior: o = "auto" } = {}) => {
      if (this.options.count > 0) {
        this._startScroll(
          { index: this.options.count - 1, align: "end", toEnd: !0 },
          Math.max(this.getMaxScrollOffset(), 0),
          o,
          "absolute"
        );
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior: o
      });
    }, this.cancelScroll = () => {
      this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null;
    }, this.getTotalSize = () => Math.max(this._getLayoutTotalSize() - this._holdOffset, 0), this._getLayoutTotalSize = () => {
      var o, a;
      const c = this.getMeasurements();
      let d;
      if (c.length === 0)
        d = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const g = c.length - 1, m = (o = this._singleLaneMeasurements) == null ? void 0 : o.flat;
        m != null ? d = m[g * 2] + m[g * 2 + 1] : d = ((a = c[g]) == null ? void 0 : a.end) ?? 0;
      } else {
        const g = Array(this.options.lanes).fill(null);
        let m = c.length - 1;
        for (; m >= 0 && g.some((x) => x === null); ) {
          const x = c[m];
          g[x.lane] === null && (g[x.lane] = x.end), m--;
        }
        d = Math.max(...g.filter((x) => x !== null));
      }
      return Math.max(
        d - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const o = [];
      if (this.itemSizeCache.size === 0) return o;
      const a = this.getMeasurements();
      for (const c of a)
        c && this.itemSizeCache.has(c.key) && o.push({
          index: c.index,
          key: c.key,
          start: c.start,
          size: c.size,
          end: c.end,
          lane: c.lane
        });
      return o;
    }, this._scrollToOffset = (o, {
      adjustments: a,
      behavior: c
    } = {}) => {
      const d = {
        target: o + (a ?? 0),
        smooth: c === "smooth"
      };
      return this.pendingWrite = d, this.options.scrollToFn(
        o - this._holdOffset,
        { behavior: c, adjustments: a },
        this
      ), d;
    }, this.getCommandWrittenOffset = () => this.scrollState !== null && this.pendingWrite !== null && !this.pendingWrite.smooth ? this.pendingWrite.target : null, this._awaitingCommandReadBack = () => {
      const o = this.getCommandWrittenOffset();
      return !(Ql() && this._iosGesture.dragging()) && o !== null && !mn(o, this.getScrollOffset());
    }, this._followOffsetTarget = (o) => {
      this.scrollState !== null && this.scrollState.index == null && (this.scrollState.lastTargetOffset += o);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(p);
  }
  /**
   * @deprecated Always 0: a scroll correction is folded into `scrollOffset`
   * at once, so there is never an outstanding adjustment to add to it. Read
   * `scrollOffset` alone.
   */
  get scrollAdjustments() {
    return 0;
  }
  // Returns `true` when it performed a synchronous `scrollTop` write this
  // tick, `false` when the delta was zero or the write was deferred (iOS).
  // `resizeItem` uses that to decide whether the follow-up `notify` must be
  // synchronous so the grown transforms commit in the same paint (#1227).
  applyScrollAdjustment(p, o) {
    if (p === 0) return !1;
    if (this._followOffsetTarget(p), this._canWriteScroll()) {
      const a = this.getScrollOffset();
      this._clampedAdjustment = this._clampedBy(a + p);
      const c = this._scrollToOffset(a, {
        adjustments: p,
        behavior: o
      });
      return this.scrollOffset !== null && (this.pendingWrite === c && (this.scrollOffset += p), this.scrollOffset < 0 && (this.scrollOffset = 0)), !0;
    } else
      return this._holdOffset += p, this.scrollOffset !== null && (this.scrollOffset += p), !0;
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  getScrollStateTarget(p) {
    const o = p.toEnd ? [Math.max(this.getMaxScrollOffset(), 0)] : p.index != null ? this.getOffsetForIndex(p.index, p.align) : void 0;
    return o ? o[0] : p.lastTargetOffset;
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    if (this.scrollState.phase === "queued") {
      this.scheduleScrollReconcile();
      return;
    }
    this.getMeasurements();
    const a = this.getScrollStateTarget(this.scrollState), c = this.scrollState.index == null ? 1 : this.options.useAnimationFrameWithResizeObserver ? 3 : 2, d = a !== this.scrollState.lastTargetOffset;
    if (!d && mn(a, this.getScrollOffset())) {
      if (this.scrollState.phase === "smooth" ? this.scrollState.phase = "smoothLanded" : this.scrollState.phase === "smoothFinishing" && (this.scrollState.phase = "instant"), this.scrollState.stableFrames++, this.scrollState.stableFrames >= c) {
        this.getScrollOffset() !== a && this._scrollToOffset(a, { behavior: "auto" }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, d) {
      const g = this.getSize() || 600, m = Math.abs(a - this.getScrollOffset()), x = Nr(this.scrollState) && m > g;
      this.scrollState.lastTargetOffset = a, x ? this.scrollState.phase = "smooth" : this.scrollState.phase === "smooth" ? this.scrollState.phase = "smoothFinishing" : this.scrollState.phase === "smoothLanded" && (this.scrollState.phase = "instant"), this._scrollToOffset(a, {
        behavior: x ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
  // Every scroll command starts here: it becomes the in-flight command,
  // writes its first target and leaves reconcile to retarget and retire it.
  //
  // Targets are layout offsets. A held correction is not dropped by a
  // command: the write lands the element `_holdOffset` short of the target,
  // under the rows exposed shifted by the same amount, and the flush moves
  // both together once a write is possible.
  //
  // An index or end target that is already at its offset starts a smooth
  // scroll as landed; an offset target never does, so its first scroll
  // event is read as the user's (see the scroll handler in `_willUpdate`).
  _startScroll(p, o, a, c) {
    this.pendingScrollAnchor = null, this._clampedAdjustment = null;
    const d = this._iosGesture.tail();
    if (c === "absolute" && d !== null) {
      if (d === "fling" && Cd()) {
        this._stopMomentum(() => {
          const g = this.scrollState;
          (g == null ? void 0 : g.phase) !== "queued" || // A finger came down: it owns the scroll until it lifts.
          this._iosGesture.tail() !== "fling" || // In a bounce WebKit can drop the write (#1287): the tail
          // decides, as without the stop. (Not `flingCaught`: our stop
          // also ends the fling at speed, so a slow frame would read as
          // a catch and the tail would drop the command.)
          this._reportedOverscroll || (this._iosGesture.end(), this._flushHoldIfReady(!0), this._writeAwaitingCommand());
        }), this.scrollState = {
          ...p,
          startedAt: this.now(),
          lastTargetOffset: o,
          stableFrames: 0,
          phase: "queued",
          behavior: a,
          samples: []
        }, this.scheduleScrollReconcile();
        return;
      }
      this._iosGesture.end();
    }
    this.scrollState = {
      ...p,
      startedAt: this.now(),
      lastTargetOffset: o,
      stableFrames: 0,
      behavior: a,
      phase: ec(
        a,
        p.index != null && mn(o, this.getScrollOffset())
      )
    }, this._scrollToOffset(o, { behavior: a }), this.scheduleScrollReconcile();
  }
}
const ic = (u, p, o, a) => {
  for (; u <= p; ) {
    const c = (u + p) / 2 | 0, d = o(c);
    if (d < a)
      u = c + 1;
    else if (d > a)
      p = c - 1;
    else
      return c;
  }
  return u > 0 ? u - 1 : 0;
};
function Dd(u, p, o) {
  let a = 0;
  for (; a <= p; ) {
    const c = (a + p) / 2 | 0, d = u[c * 2];
    if (d < o)
      a = c + 1;
    else if (d > o)
      p = c - 1;
    else
      return c;
  }
  return a > 0 ? a - 1 : 0;
}
function Wd(u, p, o, a, c) {
  const d = u.length - 1;
  if (u.length <= a)
    return { startIndex: 0, endIndex: d };
  if (a === 1 && c !== null) {
    const C = Dd(
      c,
      d,
      o
    );
    let P = C;
    const _ = o + p;
    for (; P < d && c[P * 2] + c[P * 2 + 1] < _; )
      P++;
    return { startIndex: C, endIndex: P };
  }
  let m = ic(0, d, (C) => u[C].start, o), x = m;
  if (a === 1)
    for (; x < d && u[x].end < o + p; )
      x++;
  else if (a > 1) {
    const C = Array(a).fill(0);
    for (; x < d && C.some((_) => _ < o + p); ) {
      const _ = u[x];
      C[_.lane] = _.end, x++;
    }
    const P = Array(a).fill(o + p);
    for (; m >= 0 && P.some((_) => _ >= o); ) {
      const _ = u[m];
      P[_.lane] = _.start, m--;
    }
    m = Math.max(0, m - m % a), x = Math.min(d, x + (a - 1 - x % a));
  }
  return { startIndex: m, endIndex: x };
}
const Ko = typeof document < "u" ? ne.useLayoutEffect : ne.useEffect;
function Ud({
  useFlushSync: u = !0,
  directDomUpdates: p = !1,
  directDomUpdatesMode: o = "transform",
  ...a
}) {
  const c = ne.useReducer((T) => T + 1, 0)[1], d = ne.useRef({
    enabled: p,
    mode: o,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  d.current.enabled = p, d.current.mode = o;
  const g = ne.useRef(!1), m = (T) => {
    const W = d.current;
    if (!W.enabled || !W.container) return;
    const V = T.getTotalSize();
    if (V !== W.lastSize) {
      W.lastSize = V;
      const A = T.options.horizontal ? "width" : "height";
      W.container.style[A] = `${V}px`;
    }
  }, x = (T, W, V) => {
    const A = d.current, K = !!T.options.horizontal, Z = W.start - T.options.scrollMargin;
    A.lastPositions.get(V) !== Z && (A.lastPositions.set(V, Z), A.mode === "transform" ? V.style.transform = K ? `translate3d(${Z}px, 0, 0)` : `translate3d(0, ${Z}px, 0)` : V.style[K ? "left" : "top"] = `${Z}px`);
  }, C = (T) => {
    const W = d.current;
    if (!(!W.enabled || !W.container)) {
      m(T);
      for (const V of T.getVirtualItems()) {
        const A = T.elementsCache.get(V.key);
        A && x(T, V, A);
      }
    }
  }, P = {
    ...a,
    onChange: (T, W) => {
      var V;
      const A = d.current;
      let K = !0;
      if (A.enabled) {
        C(T);
        const Z = T.range, q = A.prevRange;
        K = !q || q.isScrolling !== T.isScrolling || q.startIndex !== (Z == null ? void 0 : Z.startIndex) || q.endIndex !== (Z == null ? void 0 : Z.endIndex), K && (A.prevRange = Z ? {
          startIndex: Z.startIndex,
          endIndex: Z.endIndex,
          isScrolling: T.isScrolling
        } : null);
      }
      K && (u && W && !g.current ? md.flushSync(c) : c()), (V = a.onChange) == null || V.call(a, T, W);
    }
  }, [_] = ne.useState(() => {
    const T = new Fd(P), W = T.measureElement;
    return T.measureElement = (V) => {
      g.current = !0;
      try {
        W(V);
      } finally {
        g.current = !1;
      }
      const A = d.current;
      if (V !== null && A.enabled && A.container) {
        const K = T.measurementsCache[T.indexFromElement(V)];
        K && x(T, K, V);
      }
    }, Object.assign(T, {
      containerRef: (V) => {
        const A = d.current;
        A.container = V, A.lastSize = null, V !== null && C(T);
      }
    });
  });
  return _.setOptions(P), Ko(() => _._didMount(), []), Ko(() => (m(_), _._willUpdate())), Ko(() => {
    C(_);
  }), _;
}
function Bd(u) {
  return Ud({
    observeElementRect: Od,
    observeElementOffset: Ld,
    scrollToFn: jd,
    ...u
  });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hd = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oc = (...u) => u.filter((p, o, a) => !!p && p.trim() !== "" && a.indexOf(p) === o).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $d = ne.forwardRef(
  ({
    color: u = "currentColor",
    size: p = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: a,
    className: c = "",
    children: d,
    iconNode: g,
    ...m
  }, x) => ne.createElement(
    "svg",
    {
      ref: x,
      ...Vd,
      width: p,
      height: p,
      stroke: u,
      strokeWidth: a ? Number(o) * 24 / Number(p) : o,
      className: oc("lucide", c),
      ...m
    },
    [
      ...g.map(([C, P]) => ne.createElement(C, P)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (u, p) => {
  const o = ne.forwardRef(
    ({ className: a, ...c }, d) => ne.createElement($d, {
      ref: d,
      iconNode: p,
      className: oc(`lucide-${Hd(u)}`, a),
      ...c
    })
  );
  return o.displayName = `${u}`, o;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = de("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = de("Box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = de("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = de("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = de("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = de("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gd = de("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = de("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = de("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = de("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = de("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = de("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = de("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eh = de("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const th = de("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = de("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = de("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = de("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ih = de("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = de("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sh = de("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uh = de("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ah = de("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = de("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fh = de("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dh = de("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hh = de("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ph = de("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mh = de("Server", [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = de("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gh = de("Table2", [
  [
    "path",
    {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yh = de("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sh = de("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), wh = {
  alert: Yd,
  archive: Qd,
  box: tc,
  bucket: tc,
  check: nc,
  circle: sc,
  cloud: Xd,
  copy: Zd,
  database: Jd,
  download: bd,
  error: Gd,
  external: eh,
  eye: th,
  file: rh,
  "file-text": nh,
  folder: ih,
  "folder-open": lh,
  info: oh,
  lock: ah,
  pause: ch,
  pencil: fh,
  play: dh,
  plus: hh,
  refresh: ph,
  server: mh,
  settings: vh,
  success: nc,
  table: gh,
  trash: yh,
  unlock: uh,
  warning: Sh
};
function Vn({ name: u, size: p = 15 }) {
  const o = u && wh[u.toLowerCase()] || sc;
  return /* @__PURE__ */ B.jsx(o, { "aria-hidden": !0, size: p, strokeWidth: 1.8 });
}
function kh(u) {
  const p = /* @__PURE__ */ new Map();
  for (const o of u)
    for (const a of o.nodes) p.set(a.id, o.parentId);
  return p;
}
function Kl(u, p, o) {
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let d = o.get(u);
  for (; d != null && !c.has(d); )
    a.add(d), c.add(d), d = o.get(d);
  for (let g = p.length - 1; g >= 0; g -= 1) {
    const m = p[g];
    if (m && (m.scope === "all" || m.nodeId === u || m.cascade && m.nodeId !== null && a.has(m.nodeId)))
      return m.selected;
  }
  return !1;
}
function Yo(u, p) {
  const o = [], a = /* @__PURE__ */ new Set();
  let c = p.get(u);
  for (; c != null && !a.has(c); )
    o.push(c), a.add(c), c = p.get(c);
  return o.reverse();
}
function xh(u, p) {
  const o = /* @__PURE__ */ new Map();
  for (const g of p) {
    if (g.parentId === null) continue;
    const m = o.get(g.parentId) ?? [];
    m.push(...g.nodes.map((x) => x.id)), o.set(g.parentId, m);
  }
  const a = [], c = /* @__PURE__ */ new Set(), d = [...o.get(u) ?? []];
  for (; d.length > 0; ) {
    const g = d.pop();
    !g || c.has(g) || (c.add(g), a.push(g), d.push(...o.get(g) ?? []));
  }
  return a;
}
function _h(u, p, o, a) {
  const c = [u, ...xh(u, p)].map(
    (d) => Kl(d, o, a)
  );
  return c.some(Boolean) && c.some((d) => !d);
}
function Go(u, p) {
  return [
    ...u.filter(
      (o) => o.scope !== p.scope || p.scope === "node" && o.nodeId !== p.nodeId
    ),
    p
  ];
}
function Eh(u, p, o, a, c, d) {
  const g = p.findIndex((_) => _.id === o), m = p.findIndex((_) => _.id === a);
  if (g < 0 || m < 0) return null;
  const x = Math.min(g, m), C = Math.max(g, m);
  let P = [...u];
  for (const _ of p.slice(x, C + 1))
    _.disabled || Kl(_.id, P, c) || (P = Go(P, {
      nodeId: _.id,
      selected: !0,
      cascade: d && _.expandable,
      ancestorIds: Yo(_.id, c),
      scope: "node"
    }));
  return P;
}
function Ch(u) {
  var o, a;
  let p = -1;
  for (let c = u.length - 1; c >= 0; c -= 1)
    if (((o = u[c]) == null ? void 0 : o.scope) === "all") {
      p = c;
      break;
    }
  return p < 0 || !((a = u[p]) != null && a.selected) ? !1 : !u.slice(p + 1).some((c) => {
    if (c.scope !== "node" || c.nodeId === null) return !1;
    const d = new Set(c.ancestorIds);
    for (let g = u.length - 1; g >= 0; g -= 1) {
      const m = u[g];
      if (m && (m.scope === "all" || m.nodeId === c.nodeId || m.cascade && m.nodeId !== null && d.has(m.nodeId)))
        return !m.selected;
    }
    return !0;
  });
}
const $l = (u) => u ?? "__root__";
function Mh(u) {
  const p = /* @__PURE__ */ new Map();
  for (const o of u) {
    const a = $l(o.parentId), c = p.get(a) ?? [];
    c.push(o), p.set(a, c);
  }
  return p;
}
function zh(u) {
  const p = Mh(u.pages), o = [], a = /* @__PURE__ */ new Set(), c = (d, g) => {
    const m = p.get($l(d));
    if (!m || m.length === 0) {
      d !== null && o.push({
        type: "page",
        key: `unloaded:${d}`,
        parentId: d,
        depth: g,
        page: null,
        reason: u.cacheLimited ? "limit" : "unloaded"
      });
      return;
    }
    for (const P of m) {
      if (P.error) {
        o.push({
          type: "page",
          key: `error:${$l(d)}:${P.cursor ?? "first"}`,
          parentId: d,
          depth: g,
          page: P,
          reason: "error"
        });
        continue;
      }
      for (const _ of P.nodes)
        a.has(_.id) || (a.add(_.id), o.push({
          type: "node",
          key: `node:${_.id}`,
          node: _,
          parentId: d,
          depth: g
        }), _.expandable && u.expandedIds.has(_.id) && c(_.id, g + 1));
    }
    const x = m[m.length - 1];
    if (!x || x.error) return;
    (x.nextCursor !== null || u.mode === "paged" && u.hasPrevious(d)) && o.push({
      type: "page",
      key: `page:${$l(d)}:${x.cursor ?? "first"}`,
      parentId: d,
      depth: g,
      page: x,
      reason: u.cacheLimited && u.mode === "load_more" ? "limit" : "navigation"
    });
  };
  return c(null, 0), o;
}
const Lr = (u) => u ?? "__root__", Hl = () => {
  var u, p;
  return ((p = (u = globalThis.crypto) == null ? void 0 : u.randomUUID) == null ? void 0 : p.call(u)) ?? `${Date.now()}-${Math.random()}`;
}, ac = (u, p) => u.length === p.length && u.every((o, a) => o === p[a]), Ih = (u, p) => u.length === p.length && u.every((o, a) => {
  const c = p[a];
  return c !== void 0 && o.nodeId === c.nodeId && o.scope === c.scope && o.selected === c.selected && o.cascade === c.cascade && ac(o.ancestorIds, c.ancestorIds);
});
function Oh({ data: u, setStateValue: p, setTriggerValue: o }) {
  const [a, c] = ne.useState(
    u.initialSelectionRules
  ), [d, g] = ne.useState(u.initialExpandedIds), [m, x] = ne.useState(null), [C, P] = ne.useState(null), [_, T] = ne.useState(!1), [W, V] = ne.useState(null), [A, K] = ne.useState(void 0), [Z, q] = ne.useState({}), M = ne.useRef(null);
  ne.useEffect(() => {
    c(
      (E) => Ih(E, u.initialSelectionRules) ? E : u.initialSelectionRules
    ), g(
      (E) => ac(E, u.initialExpandedIds) ? E : u.initialExpandedIds
    ), K(void 0);
  }, [u.initialExpandedIds, u.initialSelectionRules, u.pages]);
  const ee = ne.useMemo(() => new Set(d), [d]), le = ne.useMemo(() => kh(u.pages), [u.pages]), ve = ne.useMemo(
    () => new Map(u.actions.map((E) => [E.id, E])),
    [u.actions]
  ), se = ne.useCallback(
    (E) => {
      var R;
      return (((R = Z[Lr(E)]) == null ? void 0 : R.length) ?? 0) > 0;
    },
    [Z]
  ), Se = ne.useMemo(
    () => zh({
      pages: u.pages,
      expandedIds: ee,
      mode: u.pagination.mode,
      hasPrevious: se,
      cacheLimited: u.cacheLimited
    }),
    [u.cacheLimited, u.pages, u.pagination.mode, ee, se]
  ), ce = ne.useMemo(
    () => Se.filter((E) => E.type === "node"),
    [Se]
  ), Re = ne.useMemo(
    () => new Map(
      ce.map((E) => [E.node.id, Kl(E.node.id, a, le)])
    ),
    [ce, le, a]
  ), Be = ne.useMemo(
    () => new Map(
      ce.filter((E) => E.node.expandable).map((E) => [
        E.node.id,
        _h(E.node.id, u.pages, a, le)
      ])
    ),
    [u.pages, ce, le, a]
  ), Ce = ne.useMemo(
    () => a.some(
      (E) => E.selected && (E.scope === "all" || E.nodeId !== null && Kl(E.nodeId, a, le))
    ),
    [le, a]
  );
  ne.useEffect(() => {
    var E;
    (m === null || !ce.some((R) => R.node.id === m)) && x(((E = ce[0]) == null ? void 0 : E.node.id) ?? null);
  }, [m, ce]);
  const Le = Bd({
    count: Se.length,
    getScrollElement: () => M.current,
    estimateSize: () => u.pagination.rowHeight,
    overscan: u.pagination.overscan
  }), _e = ne.useCallback(
    (E, R, b = !1) => {
      K(E), o("page_request", {
        requestId: Hl(),
        parentId: E,
        cursor: R,
        ...b ? { force: !0 } : {}
      });
    },
    [o]
  ), Fe = ne.useCallback(
    (E, R) => {
      if (!E.expandable || E.disabled) return;
      const b = R ?? !ee.has(E.id), oe = /* @__PURE__ */ new Set();
      if (!b) {
        const ge = [E.id];
        for (; ge.length > 0; ) {
          const Ze = ge.pop();
          if (Ze) {
            for (const kt of u.pages)
              if (kt.parentId === Ze)
                for (const en of kt.nodes)
                  oe.add(en.id), ge.push(en.id);
          }
        }
      }
      const Me = b ? [...d.filter((ge) => ge !== E.id), E.id] : d.filter((ge) => ge !== E.id && !oe.has(ge));
      g(Me), p("expanded_ids", Me), b && !u.pages.some((ge) => ge.parentId === E.id) && (q((ge) => ({ ...ge, [Lr(E.id)]: [] })), _e(E.id, null));
    },
    [u.pages, d, ee, _e, p]
  ), He = ne.useCallback(
    (E, R, b = !1) => {
      if (E.disabled || u.selectionMode === "none") return;
      let oe;
      if (u.selectionMode === "single")
        oe = [
          {
            nodeId: E.id,
            selected: !0,
            cascade: !1,
            ancestorIds: Yo(E.id, le),
            scope: "node"
          }
        ];
      else {
        if (u.rangeSelection && b && W !== null) {
          const Ze = Eh(
            a,
            ce.map((kt) => kt.node),
            W,
            E.id,
            le,
            u.cascadeSelection
          );
          if (Ze !== null) {
            c(Ze), p("selection", { rules: Ze });
            return;
          }
        }
        const Me = Re.get(E.id) ?? !1, ge = Be.get(E.id) ?? !1;
        oe = Go(a, {
          nodeId: E.id,
          selected: R ?? (ge ? !0 : !Me),
          cascade: u.cascadeSelection && E.expandable,
          ancestorIds: Yo(E.id, le),
          scope: "node"
        }), V(E.id);
      }
      c(oe), p("selection", { rules: oe });
    },
    [
      u.cascadeSelection,
      u.rangeSelection,
      u.selectionMode,
      ce,
      Be,
      le,
      Re,
      a,
      W,
      p
    ]
  ), we = ne.useCallback(
    (E) => {
      E.disabled || o("activated", { requestId: Hl(), nodeId: E.id });
    },
    [o]
  ), j = ne.useCallback(
    (E, R, b) => {
      E.stopPropagation(), !(R.disabled || b.disabled) && (P(null), o("action", {
        requestId: Hl(),
        nodeId: R.id,
        actionId: b.id
      }));
    },
    [o]
  ), X = ne.useCallback(
    (E, R) => {
      E.stopPropagation(), !(R.disabled || !Ce) && (T(!1), o("selection_action", {
        requestId: Hl(),
        actionId: R.id,
        rules: a
      }));
    },
    [Ce, a, o]
  ), D = ne.useCallback(() => {
    c([]), V(null), T(!1), p("selection", { rules: [] });
  }, [p]), y = ne.useCallback(
    (E) => {
      const R = E ? Go(a, {
        nodeId: null,
        selected: !0,
        cascade: !0,
        ancestorIds: [],
        scope: "all"
      }) : [];
      c(R), V(null), p("selection", { rules: R });
    },
    [a, p]
  ), z = (E) => {
    if (ce.length === 0) return;
    const R = Math.max(
      0,
      ce.findIndex((Me) => Me.node.id === m)
    ), b = ce[R];
    if (!b) return;
    const oe = (Me) => {
      const ge = Math.max(0, Math.min(ce.length - 1, Me)), Ze = ce[ge];
      if (!Ze) return;
      x(Ze.node.id);
      const kt = Se.findIndex((en) => en.key === Ze.key);
      kt >= 0 && Le.scrollToIndex(kt, { align: "auto" });
    };
    switch (E.key) {
      case "ArrowDown":
        E.preventDefault(), oe(R + 1);
        break;
      case "ArrowUp":
        E.preventDefault(), oe(R - 1);
        break;
      case "Home":
        E.preventDefault(), oe(0);
        break;
      case "End":
        E.preventDefault(), oe(ce.length - 1);
        break;
      case "ArrowRight":
        b.node.expandable && (E.preventDefault(), ee.has(b.node.id) ? oe(R + 1) : Fe(b.node, !0));
        break;
      case "ArrowLeft":
        if (E.preventDefault(), ee.has(b.node.id))
          Fe(b.node, !1);
        else if (b.parentId !== null) {
          const Me = ce.findIndex((ge) => ge.node.id === b.parentId);
          Me >= 0 && oe(Me);
        }
        break;
      case "Enter":
        E.preventDefault(), we(b.node);
        break;
      case " ":
        E.preventDefault(), He(b.node, E.shiftKey ? !0 : void 0, E.shiftKey);
        break;
    }
  }, te = (E) => {
    var b;
    const R = (b = E.page) == null ? void 0 : b.nextCursor;
    if (!(R == null || u.cacheLimited)) {
      if (u.pagination.mode === "paged") {
        const oe = Lr(E.parentId);
        q((Me) => {
          var ge;
          return {
            ...Me,
            [oe]: [...Me[oe] ?? [], ((ge = E.page) == null ? void 0 : ge.cursor) ?? null]
          };
        });
      }
      _e(E.parentId, R);
    }
  }, re = (E) => {
    const R = Lr(E.parentId), b = Z[R] ?? [], oe = b[b.length - 1];
    oe !== void 0 && (q((Me) => ({ ...Me, [R]: b.slice(0, -1) })), _e(E.parentId, oe));
  }, ue = Le.getVirtualItems(), ae = Se.length === 0, me = {
    "--hierarchlit-accent-color": u.theme.accentColor ?? void 0,
    "--hierarchlit-selected-background": u.theme.selectedBackground ?? void 0,
    "--hierarchlit-hover-background": u.theme.hoverBackground ?? void 0,
    "--hierarchlit-success-color": u.theme.successColor ?? void 0,
    "--hierarchlit-info-color": u.theme.infoColor ?? void 0,
    "--hierarchlit-warning-color": u.theme.warningColor ?? void 0,
    "--hierarchlit-danger-color": u.theme.dangerColor ?? void 0
  };
  return /* @__PURE__ */ B.jsxs("div", { className: "hierarchy-shell", style: { height: u.height, ...me }, children: [
    u.selectionToolbar && (u.selectionToolbar.alwaysVisible || u.selectionToolbar.showSelectAll || Ce) ? /* @__PURE__ */ B.jsx(
      Ph,
      {
        config: u.selectionToolbar,
        hasSelection: Ce,
        ruleCount: a.length,
        allSelected: Ch(a),
        menuOpen: _,
        onMenu: () => {
          P(null), T((E) => !E);
        },
        onAction: X,
        onClear: D,
        onSelectAll: y
      }
    ) : null,
    ae ? /* @__PURE__ */ B.jsx("div", { className: "empty-state", children: u.emptyMessage }) : /* @__PURE__ */ B.jsx(
      "div",
      {
        ref: M,
        className: "tree-scroll",
        role: "tree",
        "aria-label": "Hierarchy",
        "aria-multiselectable": u.selectionMode === "multiple",
        "aria-activedescendant": m === null ? void 0 : `hierarchlit-row-${ce.findIndex((E) => E.node.id === m)}`,
        tabIndex: 0,
        onKeyDown: z,
        onBlur: (E) => {
          E.currentTarget.contains(E.relatedTarget) || P(null);
        },
        children: /* @__PURE__ */ B.jsx("div", { className: "virtual-space", style: { height: Le.getTotalSize() }, children: ue.map((E) => {
          var b;
          const R = Se[E.index];
          return R ? /* @__PURE__ */ B.jsx(
            "div",
            {
              className: `virtual-row${R.type === "node" && C === R.node.id ? " has-open-menu" : ""}`,
              style: {
                height: E.size,
                transform: `translateY(${E.start}px)`
              },
              children: R.type === "node" ? /* @__PURE__ */ B.jsx(
                Nh,
                {
                  row: R,
                  nodeIndex: ce.findIndex((oe) => oe.node.id === R.node.id),
                  rowHeight: u.pagination.rowHeight,
                  selected: Re.get(R.node.id) ?? !1,
                  indeterminate: Be.get(R.node.id) ?? !1,
                  active: m === R.node.id,
                  expanded: ee.has(R.node.id),
                  selectionMode: u.selectionMode,
                  actionMap: ve,
                  menuOpen: C === R.node.id,
                  onActive: () => x(R.node.id),
                  onSelect: (oe, Me) => He(R.node, oe, Me),
                  onExpand: () => Fe(R.node),
                  onActivate: () => we(R.node),
                  onMenu: () => {
                    T(!1), P(
                      (oe) => oe === R.node.id ? null : R.node.id
                    );
                  },
                  onAction: (oe, Me) => j(oe, R.node, Me)
                }
              ) : /* @__PURE__ */ B.jsx(
                Lh,
                {
                  row: R,
                  mode: u.pagination.mode,
                  pageNumber: (((b = Z[Lr(R.parentId)]) == null ? void 0 : b.length) ?? 0) + 1,
                  pending: A === R.parentId,
                  onNext: () => te(R),
                  onPrevious: () => re(R),
                  onLoad: () => {
                    var oe;
                    return _e(R.parentId, ((oe = R.page) == null ? void 0 : oe.cursor) ?? null, !0);
                  }
                }
              )
            },
            R.key
          ) : null;
        }) })
      }
    )
  ] });
}
function Ph({
  config: u,
  hasSelection: p,
  ruleCount: o,
  allSelected: a,
  menuOpen: c,
  onMenu: d,
  onAction: g,
  onClear: m,
  onSelectAll: x
}) {
  const C = u.actions.filter((_) => _.placement === "inline"), P = u.actions.filter((_) => _.placement === "menu");
  return /* @__PURE__ */ B.jsxs("div", { className: "selection-toolbar", role: "toolbar", "aria-label": u.label, children: [
    u.showSelectAll ? /* @__PURE__ */ B.jsxs("label", { className: "selection-select-all", children: [
      /* @__PURE__ */ B.jsx(
        "input",
        {
          className: "selection-box",
          type: "checkbox",
          checked: a,
          ref: (_) => {
            _ && (_.indeterminate = p && !a);
          },
          onChange: (_) => x(_.currentTarget.checked)
        }
      ),
      /* @__PURE__ */ B.jsx("span", { children: u.selectAllLabel })
    ] }) : null,
    /* @__PURE__ */ B.jsx("span", { className: "selection-toolbar-label", children: u.label }),
    /* @__PURE__ */ B.jsx("span", { className: "selection-toolbar-count", children: p ? `${o} selection ${o === 1 ? "rule" : "rules"}` : "No selection" }),
    /* @__PURE__ */ B.jsx("span", { className: "selection-toolbar-spacer" }),
    C.map((_) => /* @__PURE__ */ B.jsxs(
      "button",
      {
        className: `selection-action-button tone-${_.tone}`,
        type: "button",
        disabled: !p || _.disabled,
        onClick: (T) => g(T, _),
        children: [
          /* @__PURE__ */ B.jsx(Vn, { name: _.icon, size: 14 }),
          /* @__PURE__ */ B.jsx("span", { children: _.label })
        ]
      },
      _.id
    )),
    P.length > 0 ? /* @__PURE__ */ B.jsxs("span", { className: "selection-menu-wrap", children: [
      /* @__PURE__ */ B.jsx(
        "button",
        {
          className: "icon-button",
          type: "button",
          "aria-label": `More ${u.label.toLowerCase()} actions`,
          "aria-haspopup": "menu",
          "aria-expanded": c,
          disabled: !p,
          onClick: d,
          children: /* @__PURE__ */ B.jsx(uc, { "aria-hidden": !0, size: 16 })
        }
      ),
      c ? /* @__PURE__ */ B.jsx(
        "span",
        {
          className: "action-menu selection-action-menu",
          role: "menu",
          onPointerDown: (_) => _.stopPropagation(),
          onMouseDown: (_) => _.stopPropagation(),
          onClick: (_) => _.stopPropagation(),
          children: P.map((_) => /* @__PURE__ */ B.jsxs(
            "button",
            {
              className: `menu-item tone-${_.tone}`,
              type: "button",
              role: "menuitem",
              disabled: !p || _.disabled,
              onClick: (T) => g(T, _),
              children: [
                /* @__PURE__ */ B.jsx(Vn, { name: _.icon, size: 14 }),
                /* @__PURE__ */ B.jsx("span", { children: _.label })
              ]
            },
            _.id
          ))
        }
      ) : null
    ] }) : null,
    u.showClear ? /* @__PURE__ */ B.jsx(
      "button",
      {
        className: "selection-clear-button",
        type: "button",
        disabled: !p,
        onClick: m,
        children: "Clear"
      }
    ) : null
  ] });
}
function Nh({
  row: u,
  nodeIndex: p,
  rowHeight: o,
  selected: a,
  indeterminate: c,
  active: d,
  expanded: g,
  selectionMode: m,
  actionMap: x,
  menuOpen: C,
  onActive: P,
  onSelect: _,
  onExpand: T,
  onActivate: W,
  onMenu: V,
  onAction: A
}) {
  const K = u.node.actions.map((M) => x.get(M)).filter((M) => (M == null ? void 0 : M.placement) === "inline"), Z = u.node.actions.map((M) => x.get(M)).filter((M) => (M == null ? void 0 : M.placement) === "menu"), q = u.node.icon ?? (u.node.expandable ? g ? "folder-open" : "folder" : "file");
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      id: `hierarchlit-row-${p}`,
      className: `tree-row${a ? " is-selected" : ""}${d ? " is-active" : ""}${u.node.disabled ? " is-disabled" : ""}`,
      style: { minHeight: o, paddingLeft: 4 + u.depth * 16 },
      role: "treeitem",
      "aria-level": u.depth + 1,
      "aria-selected": m === "none" ? void 0 : a,
      "aria-expanded": u.node.expandable ? g : void 0,
      "aria-disabled": u.node.disabled || void 0,
      onMouseDown: P,
      onClick: (M) => _(void 0, M.shiftKey),
      onDoubleClick: W,
      children: [
        /* @__PURE__ */ B.jsx(
          "button",
          {
            className: "disclosure icon-button",
            type: "button",
            tabIndex: -1,
            "aria-label": g ? `Collapse ${u.node.label}` : `Expand ${u.node.label}`,
            disabled: !u.node.expandable || u.node.disabled,
            onClick: (M) => {
              M.stopPropagation(), T();
            },
            children: u.node.expandable ? g ? /* @__PURE__ */ B.jsx(Kd, { "aria-hidden": !0, size: 14 }) : /* @__PURE__ */ B.jsx(qd, { "aria-hidden": !0, size: 14 }) : null
          }
        ),
        m === "multiple" ? /* @__PURE__ */ B.jsx(
          "input",
          {
            className: "selection-box",
            type: "checkbox",
            tabIndex: -1,
            "aria-label": `Select ${u.node.label}`,
            checked: a,
            ref: (M) => {
              M && (M.indeterminate = c);
            },
            disabled: u.node.disabled,
            onChange: (M) => {
              const ee = M.nativeEvent;
              _(
                c ? !0 : M.currentTarget.checked,
                ee.shiftKey
              );
            },
            onClick: (M) => M.stopPropagation()
          }
        ) : null,
        /* @__PURE__ */ B.jsx("span", { className: "node-icon", children: /* @__PURE__ */ B.jsx(Vn, { name: q }) }),
        /* @__PURE__ */ B.jsx("span", { className: "node-label", title: u.node.label, children: u.node.label }),
        u.node.secondaryText ? /* @__PURE__ */ B.jsx("span", { className: "secondary-text", title: u.node.secondaryText, children: u.node.secondaryText }) : null,
        /* @__PURE__ */ B.jsx("span", { className: "row-spacer" }),
        /* @__PURE__ */ B.jsx("span", { className: "status-list", children: u.node.statusIcons.map((M, ee) => /* @__PURE__ */ B.jsx(
          "span",
          {
            className: `status-icon tone-${M.tone}`,
            title: M.label,
            "aria-label": M.label,
            children: /* @__PURE__ */ B.jsx(Vn, { name: M.name, size: 14 })
          },
          `${M.name}:${M.label}:${ee}`
        )) }),
        /* @__PURE__ */ B.jsx("span", { className: "inline-actions", children: K.map((M) => /* @__PURE__ */ B.jsx(
          "button",
          {
            className: `icon-button action-button tone-${M.tone}`,
            type: "button",
            tabIndex: -1,
            title: M.label,
            "aria-label": `${M.label}: ${u.node.label}`,
            disabled: M.disabled || u.node.disabled,
            onClick: (ee) => A(ee, M),
            children: /* @__PURE__ */ B.jsx(Vn, { name: M.icon, size: 14 })
          },
          M.id
        )) }),
        Z.length > 0 ? /* @__PURE__ */ B.jsxs("span", { className: "menu-wrap", children: [
          /* @__PURE__ */ B.jsx(
            "button",
            {
              className: "icon-button more-button",
              type: "button",
              tabIndex: -1,
              "aria-label": `More actions for ${u.node.label}`,
              "aria-haspopup": "menu",
              "aria-expanded": C,
              disabled: u.node.disabled,
              onClick: (M) => {
                M.stopPropagation(), V();
              },
              children: /* @__PURE__ */ B.jsx(uc, { "aria-hidden": !0, size: 15 })
            }
          ),
          C ? /* @__PURE__ */ B.jsx(
            "span",
            {
              className: "action-menu",
              role: "menu",
              onPointerDown: (M) => M.stopPropagation(),
              onMouseDown: (M) => M.stopPropagation(),
              onClick: (M) => M.stopPropagation(),
              children: Z.map((M) => /* @__PURE__ */ B.jsxs(
                "button",
                {
                  className: `menu-item tone-${M.tone}`,
                  type: "button",
                  role: "menuitem",
                  disabled: M.disabled,
                  onClick: (ee) => A(ee, M),
                  children: [
                    /* @__PURE__ */ B.jsx(Vn, { name: M.icon, size: 14 }),
                    /* @__PURE__ */ B.jsx("span", { children: M.label })
                  ]
                },
                M.id
              ))
            }
          ) : null
        ] }) : null
      ]
    }
  );
}
function Lh({ row: u, mode: p, pageNumber: o, pending: a, onNext: c, onPrevious: d, onLoad: g }) {
  var x, C, P, _;
  const m = 8 + u.depth * 16;
  return a ? /* @__PURE__ */ B.jsxs("div", { className: "page-row muted", style: { paddingLeft: m }, children: [
    /* @__PURE__ */ B.jsx(sh, { className: "spin", size: 14 }),
    " Loading…"
  ] }) : u.reason === "limit" ? /* @__PURE__ */ B.jsx("div", { className: "page-row warning", style: { paddingLeft: m }, children: "Browser item limit reached. Collapse another folder or increase the configured limit." }) : u.reason === "error" ? /* @__PURE__ */ B.jsxs("div", { className: "page-row error", style: { paddingLeft: m }, children: [
    /* @__PURE__ */ B.jsx("span", { children: ((x = u.page) == null ? void 0 : x.error) ?? "Unable to load items." }),
    /* @__PURE__ */ B.jsx("button", { type: "button", onClick: g, children: "Retry" })
  ] }) : u.reason === "unloaded" ? /* @__PURE__ */ B.jsx("div", { className: "page-row", style: { paddingLeft: m }, children: /* @__PURE__ */ B.jsx("button", { type: "button", onClick: g, children: "Load items" }) }) : p === "load_more" ? /* @__PURE__ */ B.jsx("div", { className: "page-row", style: { paddingLeft: m }, children: /* @__PURE__ */ B.jsx("button", { type: "button", onClick: c, children: "Load more" }) }) : /* @__PURE__ */ B.jsxs("div", { className: "page-row pager", style: { paddingLeft: m }, children: [
    /* @__PURE__ */ B.jsx("button", { type: "button", disabled: o <= 1, onClick: d, children: "Previous" }),
    /* @__PURE__ */ B.jsxs("span", { children: [
      "Page ",
      o,
      ((C = u.page) == null ? void 0 : C.totalCount) === null ? "" : ` · ${(P = u.page) == null ? void 0 : P.totalCount} items`
    ] }),
    /* @__PURE__ */ B.jsx("button", { type: "button", disabled: ((_ = u.page) == null ? void 0 : _.nextCursor) === null, onClick: c, children: "Next" })
  ] });
}
const Vl = /* @__PURE__ */ new WeakMap(), Th = (u) => {
  const { data: p, parentElement: o, setStateValue: a, setTriggerValue: c } = u, d = o.querySelector(".hierarchlit-root");
  if (!(d instanceof HTMLElement))
    throw new Error("hierarchlit: React root element was not found");
  let g = Vl.get(o);
  return g || (g = pd.createRoot(d), Vl.set(o, g)), g.render(
    /* @__PURE__ */ B.jsx(ne.StrictMode, { children: /* @__PURE__ */ B.jsx(
      Oh,
      {
        data: p,
        setStateValue: a,
        setTriggerValue: c
      }
    ) })
  ), () => {
    const m = Vl.get(o);
    m == null || m.unmount(), Vl.delete(o);
  };
};
export {
  Th as default
};
