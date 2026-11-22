var Fo = { exports: {} }, zr = {}, Do = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua;
function sd() {
  if (Ua) return ie;
  Ua = 1;
  var u = Symbol.for("react.element"), m = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), g = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function T(y) {
    return y === null || typeof y != "object" ? null : (y = _ && y[_] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var B = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $ = Object.assign, j = {};
  function q(y, M, ne) {
    this.props = y, this.context = M, this.refs = j, this.updater = ne || B;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(y, M) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, M, "setState");
  }, q.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function ee() {
  }
  ee.prototype = q.prototype;
  function Y(y, M, ne) {
    this.props = y, this.context = M, this.refs = j, this.updater = ne || B;
  }
  var C = Y.prototype = new ee();
  C.constructor = Y, $(C, q.prototype), C.isPureReactComponent = !0;
  var oe = Array.isArray, he = Object.prototype.hasOwnProperty, de = { current: null }, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ee(y, M, ne) {
    var re, se = {}, E = null, R = null;
    if (M != null) for (re in M.ref !== void 0 && (R = M.ref), M.key !== void 0 && (E = "" + M.key), M) he.call(M, re) && !b.hasOwnProperty(re) && (se[re] = M[re]);
    var H = arguments.length - 2;
    if (H === 1) se.children = ne;
    else if (1 < H) {
      for (var G = Array(H), ce = 0; ce < H; ce++) G[ce] = arguments[ce + 2];
      se.children = G;
    }
    if (y && y.defaultProps) for (re in H = y.defaultProps, H) se[re] === void 0 && (se[re] = H[re]);
    return { $$typeof: u, type: y, key: E, ref: R, props: se, _owner: de.current };
  }
  function Re(y, M) {
    return { $$typeof: u, type: y.type, key: M, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function Ie(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function De(y) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(ne) {
      return M[ne];
    });
  }
  var ye = /\/+/g;
  function Pe(y, M) {
    return typeof y == "object" && y !== null && y.key != null ? De("" + y.key) : M.toString(36);
  }
  function Me(y, M, ne, re, se) {
    var E = typeof y;
    (E === "undefined" || E === "boolean") && (y = null);
    var R = !1;
    if (y === null) R = !0;
    else switch (E) {
      case "string":
      case "number":
        R = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case u:
          case m:
            R = !0;
        }
    }
    if (R) return R = y, se = se(R), y = re === "" ? "." + Pe(R, 0) : re, oe(se) ? (ne = "", y != null && (ne = y.replace(ye, "$&/") + "/"), Me(se, M, ne, "", function(ce) {
      return ce;
    })) : se != null && (Ie(se) && (se = Re(se, ne + (!se.key || R && R.key === se.key ? "" : ("" + se.key).replace(ye, "$&/") + "/") + y)), M.push(se)), 1;
    if (R = 0, re = re === "" ? "." : re + ":", oe(y)) for (var H = 0; H < y.length; H++) {
      E = y[H];
      var G = re + Pe(E, H);
      R += Me(E, M, ne, G, se);
    }
    else if (G = T(y), typeof G == "function") for (y = G.call(y), H = 0; !(E = y.next()).done; ) E = E.value, G = re + Pe(E, H++), R += Me(E, M, ne, G, se);
    else if (E === "object") throw M = String(y), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return R;
  }
  function We(y, M, ne) {
    if (y == null) return y;
    var re = [], se = 0;
    return Me(y, re, "", "", function(E) {
      return M.call(ne, E, se++);
    }), re;
  }
  function He(y) {
    if (y._status === -1) {
      var M = y._result;
      M = M(), M.then(function(ne) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = ne);
      }, function(ne) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = ne);
      }), y._status === -1 && (y._status = 0, y._result = M);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var Se = { current: null }, A = { transition: null }, J = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: A, ReactCurrentOwner: de };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ie.Children = { map: We, forEach: function(y, M, ne) {
    We(y, function() {
      M.apply(this, arguments);
    }, ne);
  }, count: function(y) {
    var M = 0;
    return We(y, function() {
      M++;
    }), M;
  }, toArray: function(y) {
    return We(y, function(M) {
      return M;
    }) || [];
  }, only: function(y) {
    if (!Ie(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, ie.Component = q, ie.Fragment = o, ie.Profiler = c, ie.PureComponent = Y, ie.StrictMode = a, ie.Suspense = x, ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, ie.act = D, ie.cloneElement = function(y, M, ne) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var re = $({}, y.props), se = y.key, E = y.ref, R = y._owner;
    if (M != null) {
      if (M.ref !== void 0 && (E = M.ref, R = de.current), M.key !== void 0 && (se = "" + M.key), y.type && y.type.defaultProps) var H = y.type.defaultProps;
      for (G in M) he.call(M, G) && !b.hasOwnProperty(G) && (re[G] = M[G] === void 0 && H !== void 0 ? H[G] : M[G]);
    }
    var G = arguments.length - 2;
    if (G === 1) re.children = ne;
    else if (1 < G) {
      H = Array(G);
      for (var ce = 0; ce < G; ce++) H[ce] = arguments[ce + 2];
      re.children = H;
    }
    return { $$typeof: u, type: y.type, key: se, ref: E, props: re, _owner: R };
  }, ie.createContext = function(y) {
    return y = { $$typeof: g, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: d, _context: y }, y.Consumer = y;
  }, ie.createElement = Ee, ie.createFactory = function(y) {
    var M = Ee.bind(null, y);
    return M.type = y, M;
  }, ie.createRef = function() {
    return { current: null };
  }, ie.forwardRef = function(y) {
    return { $$typeof: v, render: y };
  }, ie.isValidElement = Ie, ie.lazy = function(y) {
    return { $$typeof: N, _payload: { _status: -1, _result: y }, _init: He };
  }, ie.memo = function(y, M) {
    return { $$typeof: O, type: y, compare: M === void 0 ? null : M };
  }, ie.startTransition = function(y) {
    var M = A.transition;
    A.transition = {};
    try {
      y();
    } finally {
      A.transition = M;
    }
  }, ie.unstable_act = D, ie.useCallback = function(y, M) {
    return Se.current.useCallback(y, M);
  }, ie.useContext = function(y) {
    return Se.current.useContext(y);
  }, ie.useDebugValue = function() {
  }, ie.useDeferredValue = function(y) {
    return Se.current.useDeferredValue(y);
  }, ie.useEffect = function(y, M) {
    return Se.current.useEffect(y, M);
  }, ie.useId = function() {
    return Se.current.useId();
  }, ie.useImperativeHandle = function(y, M, ne) {
    return Se.current.useImperativeHandle(y, M, ne);
  }, ie.useInsertionEffect = function(y, M) {
    return Se.current.useInsertionEffect(y, M);
  }, ie.useLayoutEffect = function(y, M) {
    return Se.current.useLayoutEffect(y, M);
  }, ie.useMemo = function(y, M) {
    return Se.current.useMemo(y, M);
  }, ie.useReducer = function(y, M, ne) {
    return Se.current.useReducer(y, M, ne);
  }, ie.useRef = function(y) {
    return Se.current.useRef(y);
  }, ie.useState = function(y) {
    return Se.current.useState(y);
  }, ie.useSyncExternalStore = function(y, M, ne) {
    return Se.current.useSyncExternalStore(y, M, ne);
  }, ie.useTransition = function() {
    return Se.current.useTransition();
  }, ie.version = "18.3.1", ie;
}
var Ba;
function Ko() {
  return Ba || (Ba = 1, Do.exports = sd()), Do.exports;
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
var Ha;
function ud() {
  if (Ha) return zr;
  Ha = 1;
  var u = Ko(), m = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(v, x, O) {
    var N, _ = {}, T = null, B = null;
    O !== void 0 && (T = "" + O), x.key !== void 0 && (T = "" + x.key), x.ref !== void 0 && (B = x.ref);
    for (N in x) a.call(x, N) && !d.hasOwnProperty(N) && (_[N] = x[N]);
    if (v && v.defaultProps) for (N in x = v.defaultProps, x) _[N] === void 0 && (_[N] = x[N]);
    return { $$typeof: m, type: v, key: T, ref: B, props: _, _owner: c.current };
  }
  return zr.Fragment = o, zr.jsx = g, zr.jsxs = g, zr;
}
var Va;
function ad() {
  return Va || (Va = 1, Fo.exports = ud()), Fo.exports;
}
var U = ad(), le = Ko(), Wl = {}, Wo = { exports: {} }, et = {}, Uo = { exports: {} }, Bo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $a;
function cd() {
  return $a || ($a = 1, (function(u) {
    function m(A, J) {
      var D = A.length;
      A.push(J);
      e: for (; 0 < D; ) {
        var y = D - 1 >>> 1, M = A[y];
        if (0 < c(M, J)) A[y] = J, A[D] = M, D = y;
        else break e;
      }
    }
    function o(A) {
      return A.length === 0 ? null : A[0];
    }
    function a(A) {
      if (A.length === 0) return null;
      var J = A[0], D = A.pop();
      if (D !== J) {
        A[0] = D;
        e: for (var y = 0, M = A.length, ne = M >>> 1; y < ne; ) {
          var re = 2 * (y + 1) - 1, se = A[re], E = re + 1, R = A[E];
          if (0 > c(se, D)) E < M && 0 > c(R, se) ? (A[y] = R, A[E] = D, y = E) : (A[y] = se, A[re] = D, y = re);
          else if (E < M && 0 > c(R, D)) A[y] = R, A[E] = D, y = E;
          else break e;
        }
      }
      return J;
    }
    function c(A, J) {
      var D = A.sortIndex - J.sortIndex;
      return D !== 0 ? D : A.id - J.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      u.unstable_now = function() {
        return d.now();
      };
    } else {
      var g = Date, v = g.now();
      u.unstable_now = function() {
        return g.now() - v;
      };
    }
    var x = [], O = [], N = 1, _ = null, T = 3, B = !1, $ = !1, j = !1, q = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, Y = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function C(A) {
      for (var J = o(O); J !== null; ) {
        if (J.callback === null) a(O);
        else if (J.startTime <= A) a(O), J.sortIndex = J.expirationTime, m(x, J);
        else break;
        J = o(O);
      }
    }
    function oe(A) {
      if (j = !1, C(A), !$) if (o(x) !== null) $ = !0, He(he);
      else {
        var J = o(O);
        J !== null && Se(oe, J.startTime - A);
      }
    }
    function he(A, J) {
      $ = !1, j && (j = !1, ee(Ee), Ee = -1), B = !0;
      var D = T;
      try {
        for (C(J), _ = o(x); _ !== null && (!(_.expirationTime > J) || A && !De()); ) {
          var y = _.callback;
          if (typeof y == "function") {
            _.callback = null, T = _.priorityLevel;
            var M = y(_.expirationTime <= J);
            J = u.unstable_now(), typeof M == "function" ? _.callback = M : _ === o(x) && a(x), C(J);
          } else a(x);
          _ = o(x);
        }
        if (_ !== null) var ne = !0;
        else {
          var re = o(O);
          re !== null && Se(oe, re.startTime - J), ne = !1;
        }
        return ne;
      } finally {
        _ = null, T = D, B = !1;
      }
    }
    var de = !1, b = null, Ee = -1, Re = 5, Ie = -1;
    function De() {
      return !(u.unstable_now() - Ie < Re);
    }
    function ye() {
      if (b !== null) {
        var A = u.unstable_now();
        Ie = A;
        var J = !0;
        try {
          J = b(!0, A);
        } finally {
          J ? Pe() : (de = !1, b = null);
        }
      } else de = !1;
    }
    var Pe;
    if (typeof Y == "function") Pe = function() {
      Y(ye);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), We = Me.port2;
      Me.port1.onmessage = ye, Pe = function() {
        We.postMessage(null);
      };
    } else Pe = function() {
      q(ye, 0);
    };
    function He(A) {
      b = A, de || (de = !0, Pe());
    }
    function Se(A, J) {
      Ee = q(function() {
        A(u.unstable_now());
      }, J);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, u.unstable_continueExecution = function() {
      $ || B || ($ = !0, He(he));
    }, u.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Re = 0 < A ? Math.floor(1e3 / A) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, u.unstable_getFirstCallbackNode = function() {
      return o(x);
    }, u.unstable_next = function(A) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = T;
      }
      var D = T;
      T = J;
      try {
        return A();
      } finally {
        T = D;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(A, J) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var D = T;
      T = A;
      try {
        return J();
      } finally {
        T = D;
      }
    }, u.unstable_scheduleCallback = function(A, J, D) {
      var y = u.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? y + D : y) : D = y, A) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = D + M, A = { id: N++, callback: J, priorityLevel: A, startTime: D, expirationTime: M, sortIndex: -1 }, D > y ? (A.sortIndex = D, m(O, A), o(x) === null && A === o(O) && (j ? (ee(Ee), Ee = -1) : j = !0, Se(oe, D - y))) : (A.sortIndex = M, m(x, A), $ || B || ($ = !0, He(he))), A;
    }, u.unstable_shouldYield = De, u.unstable_wrapCallback = function(A) {
      var J = T;
      return function() {
        var D = T;
        T = J;
        try {
          return A.apply(this, arguments);
        } finally {
          T = D;
        }
      };
    };
  })(Bo)), Bo;
}
var Qa;
function fd() {
  return Qa || (Qa = 1, Uo.exports = cd()), Uo.exports;
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
var Ka;
function dd() {
  if (Ka) return et;
  Ka = 1;
  var u = Ko(), m = fd();
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
  var v = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, _ = {};
  function T(e) {
    return x.call(_, e) ? !0 : x.call(N, e) ? !1 : O.test(e) ? _[e] = !0 : (N[e] = !0, !1);
  }
  function B(e, t, n, r) {
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
  function $(e, t, n, r) {
    if (t === null || typeof t > "u" || B(e, t, n, r)) return !0;
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
  function j(e, t, n, r, l, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
  }
  var q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    q[e] = new j(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    q[t] = new j(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    q[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    q[e] = new j(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    q[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    q[e] = new j(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    q[e] = new j(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    q[e] = new j(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    q[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ee = /[\-:]([a-z])/g;
  function Y(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      ee,
      Y
    );
    q[t] = new j(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ee, Y);
    q[t] = new j(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ee, Y);
    q[t] = new j(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    q[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), q.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    q[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function C(e, t, n, r) {
    var l = q.hasOwnProperty(t) ? q[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($(t, n, l, r) && (n = null), r || l === null ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var oe = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, he = Symbol.for("react.element"), de = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), Ee = Symbol.for("react.strict_mode"), Re = Symbol.for("react.profiler"), Ie = Symbol.for("react.provider"), De = Symbol.for("react.context"), ye = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), We = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), A = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object" ? null : (e = A && e[A] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var D = Object.assign, y;
  function M(e) {
    if (y === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      y = t && t[1] || "";
    }
    return `
` + y + e;
  }
  var ne = !1;
  function re(e, t) {
    if (!e || ne) return "";
    ne = !0;
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
      ne = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function se(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
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
  function E(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case de:
        return "Portal";
      case Re:
        return "Profiler";
      case Ee:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case De:
        return (e.displayName || "Context") + ".Consumer";
      case Ie:
        return (e._context.displayName || "Context") + ".Provider";
      case ye:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case We:
        return t = e.displayName || null, t !== null ? t : E(e.type) || "Memo";
      case He:
        t = e._payload, e = e._init;
        try {
          return E(e(t));
        } catch {
        }
    }
    return null;
  }
  function R(e) {
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
        return E(t);
      case 8:
        return t === Ee ? "StrictMode" : "Mode";
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
  function H(e) {
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
  function G(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ce(e) {
    var t = G(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function we(e) {
    e._valueTracker || (e._valueTracker = ce(e));
  }
  function Et(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = G(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function yt(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tt(e, t) {
    var n = t.checked;
    return D({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function qo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = H(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Yo(e, t) {
    t = t.checked, t != null && C(e, "checked", t, !1);
  }
  function $l(e, t) {
    Yo(e, t);
    var n = H(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ql(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ql(e, t.type, H(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Go(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ql(e, t, n) {
    (t !== "number" || yt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Hn = Array.isArray;
  function pn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + H(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Kl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return D({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Xo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (Hn(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: H(n) };
  }
  function Zo(e, t) {
    var n = H(t.value), r = H(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Jo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function bo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ql(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? bo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Nr, es = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Nr = Nr || document.createElement("div"), Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Nr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  var $n = {
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
  Object.keys($n).forEach(function(e) {
    cc.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), $n[t] = $n[e];
    });
  });
  function ts(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $n.hasOwnProperty(e) && $n[e] ? ("" + t).trim() : t + "px";
  }
  function ns(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = ts(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var fc = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Yl(e, t) {
    if (t) {
      if (fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Gl(e, t) {
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
  var Xl = null;
  function Zl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Jl = null, mn = null, vn = null;
  function rs(e) {
    if (e = dr(e)) {
      if (typeof Jl != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = el(t), Jl(e.stateNode, e.type, t));
    }
  }
  function ls(e) {
    mn ? vn ? vn.push(e) : vn = [e] : mn = e;
  }
  function is() {
    if (mn) {
      var e = mn, t = vn;
      if (vn = mn = null, rs(e), t) for (e = 0; e < t.length; e++) rs(t[e]);
    }
  }
  function os(e, t) {
    return e(t);
  }
  function ss() {
  }
  var bl = !1;
  function us(e, t, n) {
    if (bl) return e(t, n);
    bl = !0;
    try {
      return os(e, t, n);
    } finally {
      bl = !1, (mn !== null || vn !== null) && (ss(), is());
    }
  }
  function Qn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = el(n);
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
  var ei = !1;
  if (v) try {
    var Kn = {};
    Object.defineProperty(Kn, "passive", { get: function() {
      ei = !0;
    } }), window.addEventListener("test", Kn, Kn), window.removeEventListener("test", Kn, Kn);
  } catch {
    ei = !1;
  }
  function dc(e, t, n, r, l, i, s, f, h) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (I) {
      this.onError(I);
    }
  }
  var qn = !1, Lr = null, Tr = !1, ti = null, hc = { onError: function(e) {
    qn = !0, Lr = e;
  } };
  function pc(e, t, n, r, l, i, s, f, h) {
    qn = !1, Lr = null, dc.apply(hc, arguments);
  }
  function mc(e, t, n, r, l, i, s, f, h) {
    if (pc.apply(this, arguments), qn) {
      if (qn) {
        var k = Lr;
        qn = !1, Lr = null;
      } else throw Error(o(198));
      Tr || (Tr = !0, ti = k);
    }
  }
  function bt(e) {
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
  function as(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function cs(e) {
    if (bt(e) !== e) throw Error(o(188));
  }
  function vc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = bt(e), t === null) throw Error(o(188));
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
          if (i === n) return cs(l), e;
          if (i === r) return cs(l), t;
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
  function fs(e) {
    return e = vc(e), e !== null ? ds(e) : null;
  }
  function ds(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ds(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var hs = m.unstable_scheduleCallback, ps = m.unstable_cancelCallback, gc = m.unstable_shouldYield, yc = m.unstable_requestPaint, ze = m.unstable_now, Sc = m.unstable_getCurrentPriorityLevel, ni = m.unstable_ImmediatePriority, ms = m.unstable_UserBlockingPriority, Rr = m.unstable_NormalPriority, wc = m.unstable_LowPriority, vs = m.unstable_IdlePriority, jr = null, St = null;
  function kc(e) {
    if (St && typeof St.onCommitFiberRoot == "function") try {
      St.onCommitFiberRoot(jr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var ft = Math.clz32 ? Math.clz32 : Ec, xc = Math.log, _c = Math.LN2;
  function Ec(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xc(e) / _c | 0) | 0;
  }
  var Ar = 64, Fr = 4194304;
  function Yn(e) {
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
  function Dr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var f = s & ~l;
      f !== 0 ? r = Yn(f) : (i &= s, i !== 0 && (r = Yn(i)));
    } else s = n & ~l, s !== 0 ? r = Yn(s) : i !== 0 && (r = Yn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ft(t), l = 1 << n, r |= e[n], t &= ~l;
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
      var s = 31 - ft(i), f = 1 << s, h = l[s];
      h === -1 ? ((f & n) === 0 || (f & r) !== 0) && (l[s] = Cc(f, t)) : h <= t && (e.expiredLanes |= f), i &= ~f;
    }
  }
  function ri(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function gs() {
    var e = Ar;
    return Ar <<= 1, (Ar & 4194240) === 0 && (Ar = 64), e;
  }
  function li(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Gn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ft(t), e[t] = n;
  }
  function zc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ft(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function ii(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - ft(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var pe = 0;
  function ys(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ss, oi, ws, ks, xs, si = !1, Wr = [], Rt = null, jt = null, At = null, Xn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), Ft = [], Oc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _s(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rt = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
        break;
      case "mouseover":
      case "mouseout":
        At = null;
        break;
      case "pointerover":
      case "pointerout":
        Xn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zn.delete(t.pointerId);
    }
  }
  function Jn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = dr(t), t !== null && oi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Ic(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Rt = Jn(Rt, e, t, n, r, l), !0;
      case "dragenter":
        return jt = Jn(jt, e, t, n, r, l), !0;
      case "mouseover":
        return At = Jn(At, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Xn.set(i, Jn(Xn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Zn.set(i, Jn(Zn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Es(e) {
    var t = en(e.target);
    if (t !== null) {
      var n = bt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = as(n), t !== null) {
            e.blockedOn = t, xs(e.priority, function() {
              ws(n);
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
  function Ur(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ai(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Xl = r, n.target.dispatchEvent(r), Xl = null;
      } else return t = dr(n), t !== null && oi(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Cs(e, t, n) {
    Ur(e) && n.delete(t);
  }
  function Pc() {
    si = !1, Rt !== null && Ur(Rt) && (Rt = null), jt !== null && Ur(jt) && (jt = null), At !== null && Ur(At) && (At = null), Xn.forEach(Cs), Zn.forEach(Cs);
  }
  function bn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, si || (si = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Pc)));
  }
  function er(e) {
    function t(l) {
      return bn(l, e);
    }
    if (0 < Wr.length) {
      bn(Wr[0], e);
      for (var n = 1; n < Wr.length; n++) {
        var r = Wr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Rt !== null && bn(Rt, e), jt !== null && bn(jt, e), At !== null && bn(At, e), Xn.forEach(t), Zn.forEach(t), n = 0; n < Ft.length; n++) r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ft.length && (n = Ft[0], n.blockedOn === null); ) Es(n), n.blockedOn === null && Ft.shift();
  }
  var gn = oe.ReactCurrentBatchConfig, Br = !0;
  function Nc(e, t, n, r) {
    var l = pe, i = gn.transition;
    gn.transition = null;
    try {
      pe = 1, ui(e, t, n, r);
    } finally {
      pe = l, gn.transition = i;
    }
  }
  function Lc(e, t, n, r) {
    var l = pe, i = gn.transition;
    gn.transition = null;
    try {
      pe = 4, ui(e, t, n, r);
    } finally {
      pe = l, gn.transition = i;
    }
  }
  function ui(e, t, n, r) {
    if (Br) {
      var l = ai(e, t, n, r);
      if (l === null) Mi(e, t, r, Hr, n), _s(e, r);
      else if (Ic(l, e, t, n, r)) r.stopPropagation();
      else if (_s(e, r), t & 4 && -1 < Oc.indexOf(e)) {
        for (; l !== null; ) {
          var i = dr(l);
          if (i !== null && Ss(i), i = ai(e, t, n, r), i === null && Mi(e, t, r, Hr, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Mi(e, t, r, null, n);
    }
  }
  var Hr = null;
  function ai(e, t, n, r) {
    if (Hr = null, e = Zl(r), e = en(e), e !== null) if (t = bt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = as(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Hr = e, null;
  }
  function Ms(e) {
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
          case ni:
            return 1;
          case ms:
            return 4;
          case Rr:
          case wc:
            return 16;
          case vs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dt = null, ci = null, Vr = null;
  function zs() {
    if (Vr) return Vr;
    var e, t = ci, n = t.length, r, l = "value" in Dt ? Dt.value : Dt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
    return Vr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function $r(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Qr() {
    return !0;
  }
  function Os() {
    return !1;
  }
  function tt(e) {
    function t(n, r, l, i, s) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Qr : Os, this.isPropagationStopped = Os, this;
    }
    return D(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qr);
    }, persist: function() {
    }, isPersistent: Qr }), t;
  }
  var yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, fi = tt(yn), tr = D({}, yn, { view: 0, detail: 0 }), Tc = tt(tr), di, hi, nr, Kr = D({}, tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== nr && (nr && e.type === "mousemove" ? (di = e.screenX - nr.screenX, hi = e.screenY - nr.screenY) : hi = di = 0, nr = e), di);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : hi;
  } }), Is = tt(Kr), Rc = D({}, Kr, { dataTransfer: 0 }), jc = tt(Rc), Ac = D({}, tr, { relatedTarget: 0 }), pi = tt(Ac), Fc = D({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dc = tt(Fc), Wc = D({}, yn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Uc = tt(Wc), Bc = D({}, yn, { data: 0 }), Ps = tt(Bc), Hc = {
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
  function mi() {
    return Qc;
  }
  var Kc = D({}, tr, { key: function(e) {
    if (e.key) {
      var t = Hc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = $r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mi, charCode: function(e) {
    return e.type === "keypress" ? $r(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? $r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), qc = tt(Kc), Yc = D({}, Kr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ns = tt(Yc), Gc = D({}, tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mi }), Xc = tt(Gc), Zc = D({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jc = tt(Zc), bc = D({}, Kr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ef = tt(bc), tf = [9, 13, 27, 32], vi = v && "CompositionEvent" in window, rr = null;
  v && "documentMode" in document && (rr = document.documentMode);
  var nf = v && "TextEvent" in window && !rr, Ls = v && (!vi || rr && 8 < rr && 11 >= rr), Ts = " ", Rs = !1;
  function js(e, t) {
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
  function As(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function rf(e, t) {
    switch (e) {
      case "compositionend":
        return As(t);
      case "keypress":
        return t.which !== 32 ? null : (Rs = !0, Ts);
      case "textInput":
        return e = t.data, e === Ts && Rs ? null : e;
      default:
        return null;
    }
  }
  function lf(e, t) {
    if (Sn) return e === "compositionend" || !vi && js(e, t) ? (e = zs(), Vr = ci = Dt = null, Sn = !1, e) : null;
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
        return Ls && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var of = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Fs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!of[e.type] : t === "textarea";
  }
  function Ds(e, t, n, r) {
    ls(r), t = Zr(t, "onChange"), 0 < t.length && (n = new fi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var lr = null, ir = null;
  function sf(e) {
    nu(e, 0);
  }
  function qr(e) {
    var t = En(e);
    if (Et(t)) return e;
  }
  function uf(e, t) {
    if (e === "change") return t;
  }
  var Ws = !1;
  if (v) {
    var gi;
    if (v) {
      var yi = "oninput" in document;
      if (!yi) {
        var Us = document.createElement("div");
        Us.setAttribute("oninput", "return;"), yi = typeof Us.oninput == "function";
      }
      gi = yi;
    } else gi = !1;
    Ws = gi && (!document.documentMode || 9 < document.documentMode);
  }
  function Bs() {
    lr && (lr.detachEvent("onpropertychange", Hs), ir = lr = null);
  }
  function Hs(e) {
    if (e.propertyName === "value" && qr(ir)) {
      var t = [];
      Ds(t, ir, e, Zl(e)), us(sf, t);
    }
  }
  function af(e, t, n) {
    e === "focusin" ? (Bs(), lr = t, ir = n, lr.attachEvent("onpropertychange", Hs)) : e === "focusout" && Bs();
  }
  function cf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return qr(ir);
  }
  function ff(e, t) {
    if (e === "click") return qr(t);
  }
  function df(e, t) {
    if (e === "input" || e === "change") return qr(t);
  }
  function hf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dt = typeof Object.is == "function" ? Object.is : hf;
  function or(e, t) {
    if (dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!x.call(t, l) || !dt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Vs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $s(e, t) {
    var n = Vs(e);
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
      n = Vs(n);
    }
  }
  function Qs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ks() {
    for (var e = window, t = yt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = yt(e.document);
    }
    return t;
  }
  function Si(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function pf(e) {
    var t = Ks(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qs(n.ownerDocument.documentElement, n)) {
      if (r !== null && Si(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = $s(n, i);
          var s = $s(
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
  var mf = v && "documentMode" in document && 11 >= document.documentMode, wn = null, wi = null, sr = null, ki = !1;
  function qs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ki || wn == null || wn !== yt(r) || (r = wn, "selectionStart" in r && Si(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), sr && or(sr, r) || (sr = r, r = Zr(wi, "onSelect"), 0 < r.length && (t = new fi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = wn)));
  }
  function Yr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var kn = { animationend: Yr("Animation", "AnimationEnd"), animationiteration: Yr("Animation", "AnimationIteration"), animationstart: Yr("Animation", "AnimationStart"), transitionend: Yr("Transition", "TransitionEnd") }, xi = {}, Ys = {};
  v && (Ys = document.createElement("div").style, "AnimationEvent" in window || (delete kn.animationend.animation, delete kn.animationiteration.animation, delete kn.animationstart.animation), "TransitionEvent" in window || delete kn.transitionend.transition);
  function Gr(e) {
    if (xi[e]) return xi[e];
    if (!kn[e]) return e;
    var t = kn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ys) return xi[e] = t[n];
    return e;
  }
  var Gs = Gr("animationend"), Xs = Gr("animationiteration"), Zs = Gr("animationstart"), Js = Gr("transitionend"), bs = /* @__PURE__ */ new Map(), eu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wt(e, t) {
    bs.set(e, t), d(t, [e]);
  }
  for (var _i = 0; _i < eu.length; _i++) {
    var Ei = eu[_i], vf = Ei.toLowerCase(), gf = Ei[0].toUpperCase() + Ei.slice(1);
    Wt(vf, "on" + gf);
  }
  Wt(Gs, "onAnimationEnd"), Wt(Xs, "onAnimationIteration"), Wt(Zs, "onAnimationStart"), Wt("dblclick", "onDoubleClick"), Wt("focusin", "onFocus"), Wt("focusout", "onBlur"), Wt(Js, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
  function tu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, mc(r, t, void 0, e), e.currentTarget = null;
  }
  function nu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var s = r.length - 1; 0 <= s; s--) {
          var f = r[s], h = f.instance, k = f.currentTarget;
          if (f = f.listener, h !== i && l.isPropagationStopped()) break e;
          tu(l, f, k), i = h;
        }
        else for (s = 0; s < r.length; s++) {
          if (f = r[s], h = f.instance, k = f.currentTarget, f = f.listener, h !== i && l.isPropagationStopped()) break e;
          tu(l, f, k), i = h;
        }
      }
    }
    if (Tr) throw e = ti, Tr = !1, ti = null, e;
  }
  function ve(e, t) {
    var n = t[Li];
    n === void 0 && (n = t[Li] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ru(t, e, 2, !1), n.add(r));
  }
  function Ci(e, t, n) {
    var r = 0;
    t && (r |= 4), ru(n, e, r, t);
  }
  var Xr = "_reactListening" + Math.random().toString(36).slice(2);
  function ar(e) {
    if (!e[Xr]) {
      e[Xr] = !0, a.forEach(function(n) {
        n !== "selectionchange" && (yf.has(n) || Ci(n, !1, e), Ci(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xr] || (t[Xr] = !0, Ci("selectionchange", !1, t));
    }
  }
  function ru(e, t, n, r) {
    switch (Ms(t)) {
      case 1:
        var l = Nc;
        break;
      case 4:
        l = Lc;
        break;
      default:
        l = ui;
    }
    n = l.bind(null, t, n, e), l = void 0, !ei || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Mi(e, t, n, r, l) {
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
          if (s = en(f), s === null) return;
          if (h = s.tag, h === 5 || h === 6) {
            r = i = s;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    us(function() {
      var k = i, I = Zl(n), P = [];
      e: {
        var z = bs.get(e);
        if (z !== void 0) {
          var F = fi, V = e;
          switch (e) {
            case "keypress":
              if ($r(n) === 0) break e;
            case "keydown":
            case "keyup":
              F = qc;
              break;
            case "focusin":
              V = "focus", F = pi;
              break;
            case "focusout":
              V = "blur", F = pi;
              break;
            case "beforeblur":
            case "afterblur":
              F = pi;
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
              F = Is;
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
            case Gs:
            case Xs:
            case Zs:
              F = Dc;
              break;
            case Js:
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
              F = Ns;
          }
          var Q = (t & 4) !== 0, Oe = !Q && e === "scroll", S = Q ? z !== null ? z + "Capture" : null : z;
          Q = [];
          for (var p = k, w; p !== null; ) {
            w = p;
            var L = w.stateNode;
            if (w.tag === 5 && L !== null && (w = L, S !== null && (L = Qn(p, S), L != null && Q.push(cr(p, L, w)))), Oe) break;
            p = p.return;
          }
          0 < Q.length && (z = new F(z, V, null, n, I), P.push({ event: z, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", z && n !== Xl && (V = n.relatedTarget || n.fromElement) && (en(V) || V[Ct])) break e;
          if ((F || z) && (z = I.window === I ? I : (z = I.ownerDocument) ? z.defaultView || z.parentWindow : window, F ? (V = n.relatedTarget || n.toElement, F = k, V = V ? en(V) : null, V !== null && (Oe = bt(V), V !== Oe || V.tag !== 5 && V.tag !== 6) && (V = null)) : (F = null, V = k), F !== V)) {
            if (Q = Is, L = "onMouseLeave", S = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (Q = Ns, L = "onPointerLeave", S = "onPointerEnter", p = "pointer"), Oe = F == null ? z : En(F), w = V == null ? z : En(V), z = new Q(L, p + "leave", F, n, I), z.target = Oe, z.relatedTarget = w, L = null, en(I) === k && (Q = new Q(S, p + "enter", V, n, I), Q.target = w, Q.relatedTarget = Oe, L = Q), Oe = L, F && V) t: {
              for (Q = F, S = V, p = 0, w = Q; w; w = xn(w)) p++;
              for (w = 0, L = S; L; L = xn(L)) w++;
              for (; 0 < p - w; ) Q = xn(Q), p--;
              for (; 0 < w - p; ) S = xn(S), w--;
              for (; p--; ) {
                if (Q === S || S !== null && Q === S.alternate) break t;
                Q = xn(Q), S = xn(S);
              }
              Q = null;
            }
            else Q = null;
            F !== null && lu(P, z, F, Q, !1), V !== null && Oe !== null && lu(P, Oe, V, Q, !0);
          }
        }
        e: {
          if (z = k ? En(k) : window, F = z.nodeName && z.nodeName.toLowerCase(), F === "select" || F === "input" && z.type === "file") var K = uf;
          else if (Fs(z)) if (Ws) K = df;
          else {
            K = cf;
            var X = af;
          }
          else (F = z.nodeName) && F.toLowerCase() === "input" && (z.type === "checkbox" || z.type === "radio") && (K = ff);
          if (K && (K = K(e, k))) {
            Ds(P, K, n, I);
            break e;
          }
          X && X(e, z, k), e === "focusout" && (X = z._wrapperState) && X.controlled && z.type === "number" && Ql(z, "number", z.value);
        }
        switch (X = k ? En(k) : window, e) {
          case "focusin":
            (Fs(X) || X.contentEditable === "true") && (wn = X, wi = k, sr = null);
            break;
          case "focusout":
            sr = wi = wn = null;
            break;
          case "mousedown":
            ki = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ki = !1, qs(P, n, I);
            break;
          case "selectionchange":
            if (mf) break;
          case "keydown":
          case "keyup":
            qs(P, n, I);
        }
        var Z;
        if (vi) e: {
          switch (e) {
            case "compositionstart":
              var te = "onCompositionStart";
              break e;
            case "compositionend":
              te = "onCompositionEnd";
              break e;
            case "compositionupdate":
              te = "onCompositionUpdate";
              break e;
          }
          te = void 0;
        }
        else Sn ? js(e, n) && (te = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (te = "onCompositionStart");
        te && (Ls && n.locale !== "ko" && (Sn || te !== "onCompositionStart" ? te === "onCompositionEnd" && Sn && (Z = zs()) : (Dt = I, ci = "value" in Dt ? Dt.value : Dt.textContent, Sn = !0)), X = Zr(k, te), 0 < X.length && (te = new Ps(te, e, null, n, I), P.push({ event: te, listeners: X }), Z ? te.data = Z : (Z = As(n), Z !== null && (te.data = Z)))), (Z = nf ? rf(e, n) : lf(e, n)) && (k = Zr(k, "onBeforeInput"), 0 < k.length && (I = new Ps("onBeforeInput", "beforeinput", null, n, I), P.push({ event: I, listeners: k }), I.data = Z));
      }
      nu(P, t);
    });
  }
  function cr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Zr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Qn(e, n), i != null && r.unshift(cr(e, i, l)), i = Qn(e, t), i != null && r.push(cr(e, i, l))), e = e.return;
    }
    return r;
  }
  function xn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function lu(e, t, n, r, l) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
      var f = n, h = f.alternate, k = f.stateNode;
      if (h !== null && h === r) break;
      f.tag === 5 && k !== null && (f = k, l ? (h = Qn(n, i), h != null && s.unshift(cr(n, h, f))) : l || (h = Qn(n, i), h != null && s.push(cr(n, h, f)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Sf = /\r\n?/g, wf = /\u0000|\uFFFD/g;
  function iu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sf, `
`).replace(wf, "");
  }
  function Jr(e, t, n) {
    if (t = iu(t), iu(e) !== t && n) throw Error(o(425));
  }
  function br() {
  }
  var zi = null, Oi = null;
  function Ii(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Pi = typeof setTimeout == "function" ? setTimeout : void 0, kf = typeof clearTimeout == "function" ? clearTimeout : void 0, ou = typeof Promise == "function" ? Promise : void 0, xf = typeof queueMicrotask == "function" ? queueMicrotask : typeof ou < "u" ? function(e) {
    return ou.resolve(null).then(e).catch(_f);
  } : Pi;
  function _f(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ni(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), er(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    er(t);
  }
  function Ut(e) {
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
  function su(e) {
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
  var _n = Math.random().toString(36).slice(2), wt = "__reactFiber$" + _n, fr = "__reactProps$" + _n, Ct = "__reactContainer$" + _n, Li = "__reactEvents$" + _n, Ef = "__reactListeners$" + _n, Cf = "__reactHandles$" + _n;
  function en(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ct] || n[wt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = su(e); e !== null; ) {
          if (n = e[wt]) return n;
          e = su(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function dr(e) {
    return e = e[wt] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function En(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function el(e) {
    return e[fr] || null;
  }
  var Ti = [], Cn = -1;
  function Bt(e) {
    return { current: e };
  }
  function ge(e) {
    0 > Cn || (e.current = Ti[Cn], Ti[Cn] = null, Cn--);
  }
  function me(e, t) {
    Cn++, Ti[Cn] = e.current, e.current = t;
  }
  var Ht = {}, Ve = Bt(Ht), Ge = Bt(!1), tn = Ht;
  function Mn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ht;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function tl() {
    ge(Ge), ge(Ve);
  }
  function uu(e, t, n) {
    if (Ve.current !== Ht) throw Error(o(168));
    me(Ve, t), me(Ge, n);
  }
  function au(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(o(108, R(e) || "Unknown", l));
    return D({}, n, r);
  }
  function nl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, tn = Ve.current, me(Ve, e), me(Ge, Ge.current), !0;
  }
  function cu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = au(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, ge(Ge), ge(Ve), me(Ve, e)) : ge(Ge), me(Ge, n);
  }
  var Mt = null, rl = !1, Ri = !1;
  function fu(e) {
    Mt === null ? Mt = [e] : Mt.push(e);
  }
  function Mf(e) {
    rl = !0, fu(e);
  }
  function Vt() {
    if (!Ri && Mt !== null) {
      Ri = !0;
      var e = 0, t = pe;
      try {
        var n = Mt;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Mt = null, rl = !1;
      } catch (l) {
        throw Mt !== null && (Mt = Mt.slice(e + 1)), hs(ni, Vt), l;
      } finally {
        pe = t, Ri = !1;
      }
    }
    return null;
  }
  var zn = [], On = 0, ll = null, il = 0, it = [], ot = 0, nn = null, zt = 1, Ot = "";
  function rn(e, t) {
    zn[On++] = il, zn[On++] = ll, ll = e, il = t;
  }
  function du(e, t, n) {
    it[ot++] = zt, it[ot++] = Ot, it[ot++] = nn, nn = e;
    var r = zt;
    e = Ot;
    var l = 32 - ft(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - ft(t) + l;
    if (30 < i) {
      var s = l - l % 5;
      i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, zt = 1 << 32 - ft(t) + l | n << l | r, Ot = i + e;
    } else zt = 1 << i | n << l | r, Ot = e;
  }
  function ji(e) {
    e.return !== null && (rn(e, 1), du(e, 1, 0));
  }
  function Ai(e) {
    for (; e === ll; ) ll = zn[--On], zn[On] = null, il = zn[--On], zn[On] = null;
    for (; e === nn; ) nn = it[--ot], it[ot] = null, Ot = it[--ot], it[ot] = null, zt = it[--ot], it[ot] = null;
  }
  var nt = null, rt = null, ke = !1, ht = null;
  function hu(e, t) {
    var n = ct(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function pu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = Ut(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: zt, overflow: Ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ct(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, rt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Fi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Di(e) {
    if (ke) {
      var t = rt;
      if (t) {
        var n = t;
        if (!pu(e, t)) {
          if (Fi(e)) throw Error(o(418));
          t = Ut(n.nextSibling);
          var r = nt;
          t && pu(e, t) ? hu(r, n) : (e.flags = e.flags & -4097 | 2, ke = !1, nt = e);
        }
      } else {
        if (Fi(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, ke = !1, nt = e;
      }
    }
  }
  function mu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    nt = e;
  }
  function ol(e) {
    if (e !== nt) return !1;
    if (!ke) return mu(e), ke = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ii(e.type, e.memoizedProps)), t && (t = rt)) {
      if (Fi(e)) throw vu(), Error(o(418));
      for (; t; ) hu(e, t), t = Ut(t.nextSibling);
    }
    if (mu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = Ut(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function vu() {
    for (var e = rt; e; ) e = Ut(e.nextSibling);
  }
  function In() {
    rt = nt = null, ke = !1;
  }
  function Wi(e) {
    ht === null ? ht = [e] : ht.push(e);
  }
  var zf = oe.ReactCurrentBatchConfig;
  function hr(e, t, n) {
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
  function sl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function gu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function yu(e) {
    function t(S, p) {
      if (e) {
        var w = S.deletions;
        w === null ? (S.deletions = [p], S.flags |= 16) : w.push(p);
      }
    }
    function n(S, p) {
      if (!e) return null;
      for (; p !== null; ) t(S, p), p = p.sibling;
      return null;
    }
    function r(S, p) {
      for (S = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? S.set(p.key, p) : S.set(p.index, p), p = p.sibling;
      return S;
    }
    function l(S, p) {
      return S = Zt(S, p), S.index = 0, S.sibling = null, S;
    }
    function i(S, p, w) {
      return S.index = w, e ? (w = S.alternate, w !== null ? (w = w.index, w < p ? (S.flags |= 2, p) : w) : (S.flags |= 2, p)) : (S.flags |= 1048576, p);
    }
    function s(S) {
      return e && S.alternate === null && (S.flags |= 2), S;
    }
    function f(S, p, w, L) {
      return p === null || p.tag !== 6 ? (p = No(w, S.mode, L), p.return = S, p) : (p = l(p, w), p.return = S, p);
    }
    function h(S, p, w, L) {
      var K = w.type;
      return K === b ? I(S, p, w.props.children, L, w.key) : p !== null && (p.elementType === K || typeof K == "object" && K !== null && K.$$typeof === He && gu(K) === p.type) ? (L = l(p, w.props), L.ref = hr(S, p, w), L.return = S, L) : (L = Nl(w.type, w.key, w.props, null, S.mode, L), L.ref = hr(S, p, w), L.return = S, L);
    }
    function k(S, p, w, L) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== w.containerInfo || p.stateNode.implementation !== w.implementation ? (p = Lo(w, S.mode, L), p.return = S, p) : (p = l(p, w.children || []), p.return = S, p);
    }
    function I(S, p, w, L, K) {
      return p === null || p.tag !== 7 ? (p = dn(w, S.mode, L, K), p.return = S, p) : (p = l(p, w), p.return = S, p);
    }
    function P(S, p, w) {
      if (typeof p == "string" && p !== "" || typeof p == "number") return p = No("" + p, S.mode, w), p.return = S, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case he:
            return w = Nl(p.type, p.key, p.props, null, S.mode, w), w.ref = hr(S, null, p), w.return = S, w;
          case de:
            return p = Lo(p, S.mode, w), p.return = S, p;
          case He:
            var L = p._init;
            return P(S, L(p._payload), w);
        }
        if (Hn(p) || J(p)) return p = dn(p, S.mode, w, null), p.return = S, p;
        sl(S, p);
      }
      return null;
    }
    function z(S, p, w, L) {
      var K = p !== null ? p.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number") return K !== null ? null : f(S, p, "" + w, L);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case he:
            return w.key === K ? h(S, p, w, L) : null;
          case de:
            return w.key === K ? k(S, p, w, L) : null;
          case He:
            return K = w._init, z(
              S,
              p,
              K(w._payload),
              L
            );
        }
        if (Hn(w) || J(w)) return K !== null ? null : I(S, p, w, L, null);
        sl(S, w);
      }
      return null;
    }
    function F(S, p, w, L, K) {
      if (typeof L == "string" && L !== "" || typeof L == "number") return S = S.get(w) || null, f(p, S, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case he:
            return S = S.get(L.key === null ? w : L.key) || null, h(p, S, L, K);
          case de:
            return S = S.get(L.key === null ? w : L.key) || null, k(p, S, L, K);
          case He:
            var X = L._init;
            return F(S, p, w, X(L._payload), K);
        }
        if (Hn(L) || J(L)) return S = S.get(w) || null, I(p, S, L, K, null);
        sl(p, L);
      }
      return null;
    }
    function V(S, p, w, L) {
      for (var K = null, X = null, Z = p, te = p = 0, Fe = null; Z !== null && te < w.length; te++) {
        Z.index > te ? (Fe = Z, Z = null) : Fe = Z.sibling;
        var fe = z(S, Z, w[te], L);
        if (fe === null) {
          Z === null && (Z = Fe);
          break;
        }
        e && Z && fe.alternate === null && t(S, Z), p = i(fe, p, te), X === null ? K = fe : X.sibling = fe, X = fe, Z = Fe;
      }
      if (te === w.length) return n(S, Z), ke && rn(S, te), K;
      if (Z === null) {
        for (; te < w.length; te++) Z = P(S, w[te], L), Z !== null && (p = i(Z, p, te), X === null ? K = Z : X.sibling = Z, X = Z);
        return ke && rn(S, te), K;
      }
      for (Z = r(S, Z); te < w.length; te++) Fe = F(Z, S, te, w[te], L), Fe !== null && (e && Fe.alternate !== null && Z.delete(Fe.key === null ? te : Fe.key), p = i(Fe, p, te), X === null ? K = Fe : X.sibling = Fe, X = Fe);
      return e && Z.forEach(function(Jt) {
        return t(S, Jt);
      }), ke && rn(S, te), K;
    }
    function Q(S, p, w, L) {
      var K = J(w);
      if (typeof K != "function") throw Error(o(150));
      if (w = K.call(w), w == null) throw Error(o(151));
      for (var X = K = null, Z = p, te = p = 0, Fe = null, fe = w.next(); Z !== null && !fe.done; te++, fe = w.next()) {
        Z.index > te ? (Fe = Z, Z = null) : Fe = Z.sibling;
        var Jt = z(S, Z, fe.value, L);
        if (Jt === null) {
          Z === null && (Z = Fe);
          break;
        }
        e && Z && Jt.alternate === null && t(S, Z), p = i(Jt, p, te), X === null ? K = Jt : X.sibling = Jt, X = Jt, Z = Fe;
      }
      if (fe.done) return n(
        S,
        Z
      ), ke && rn(S, te), K;
      if (Z === null) {
        for (; !fe.done; te++, fe = w.next()) fe = P(S, fe.value, L), fe !== null && (p = i(fe, p, te), X === null ? K = fe : X.sibling = fe, X = fe);
        return ke && rn(S, te), K;
      }
      for (Z = r(S, Z); !fe.done; te++, fe = w.next()) fe = F(Z, S, te, fe.value, L), fe !== null && (e && fe.alternate !== null && Z.delete(fe.key === null ? te : fe.key), p = i(fe, p, te), X === null ? K = fe : X.sibling = fe, X = fe);
      return e && Z.forEach(function(od) {
        return t(S, od);
      }), ke && rn(S, te), K;
    }
    function Oe(S, p, w, L) {
      if (typeof w == "object" && w !== null && w.type === b && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case he:
            e: {
              for (var K = w.key, X = p; X !== null; ) {
                if (X.key === K) {
                  if (K = w.type, K === b) {
                    if (X.tag === 7) {
                      n(S, X.sibling), p = l(X, w.props.children), p.return = S, S = p;
                      break e;
                    }
                  } else if (X.elementType === K || typeof K == "object" && K !== null && K.$$typeof === He && gu(K) === X.type) {
                    n(S, X.sibling), p = l(X, w.props), p.ref = hr(S, X, w), p.return = S, S = p;
                    break e;
                  }
                  n(S, X);
                  break;
                } else t(S, X);
                X = X.sibling;
              }
              w.type === b ? (p = dn(w.props.children, S.mode, L, w.key), p.return = S, S = p) : (L = Nl(w.type, w.key, w.props, null, S.mode, L), L.ref = hr(S, p, w), L.return = S, S = L);
            }
            return s(S);
          case de:
            e: {
              for (X = w.key; p !== null; ) {
                if (p.key === X) if (p.tag === 4 && p.stateNode.containerInfo === w.containerInfo && p.stateNode.implementation === w.implementation) {
                  n(S, p.sibling), p = l(p, w.children || []), p.return = S, S = p;
                  break e;
                } else {
                  n(S, p);
                  break;
                }
                else t(S, p);
                p = p.sibling;
              }
              p = Lo(w, S.mode, L), p.return = S, S = p;
            }
            return s(S);
          case He:
            return X = w._init, Oe(S, p, X(w._payload), L);
        }
        if (Hn(w)) return V(S, p, w, L);
        if (J(w)) return Q(S, p, w, L);
        sl(S, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, p !== null && p.tag === 6 ? (n(S, p.sibling), p = l(p, w), p.return = S, S = p) : (n(S, p), p = No(w, S.mode, L), p.return = S, S = p), s(S)) : n(S, p);
    }
    return Oe;
  }
  var Pn = yu(!0), Su = yu(!1), ul = Bt(null), al = null, Nn = null, Ui = null;
  function Bi() {
    Ui = Nn = al = null;
  }
  function Hi(e) {
    var t = ul.current;
    ge(ul), e._currentValue = t;
  }
  function Vi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ln(e, t) {
    al = e, Ui = Nn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ze = !0), e.firstContext = null);
  }
  function st(e) {
    var t = e._currentValue;
    if (Ui !== e) if (e = { context: e, memoizedValue: t, next: null }, Nn === null) {
      if (al === null) throw Error(o(308));
      Nn = e, al.dependencies = { lanes: 0, firstContext: e };
    } else Nn = Nn.next = e;
    return t;
  }
  var ln = null;
  function $i(e) {
    ln === null ? ln = [e] : ln.push(e);
  }
  function wu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, $i(t)) : (n.next = l.next, l.next = n), t.interleaved = n, It(e, r);
  }
  function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var $t = !1;
  function Qi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ku(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Pt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ue & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, It(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, $i(r)) : (t.next = l.next, l.next = t), r.interleaved = t, It(e, n);
  }
  function cl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ii(e, n);
    }
  }
  function xu(e, t) {
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
  function fl(e, t, n, r) {
    var l = e.updateQueue;
    $t = !1;
    var i = l.firstBaseUpdate, s = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var h = f, k = h.next;
      h.next = null, s === null ? i = k : s.next = k, s = h;
      var I = e.alternate;
      I !== null && (I = I.updateQueue, f = I.lastBaseUpdate, f !== s && (f === null ? I.firstBaseUpdate = k : f.next = k, I.lastBaseUpdate = h));
    }
    if (i !== null) {
      var P = l.baseState;
      s = 0, I = k = h = null, f = i;
      do {
        var z = f.lane, F = f.eventTime;
        if ((r & z) === z) {
          I !== null && (I = I.next = {
            eventTime: F,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          e: {
            var V = e, Q = f;
            switch (z = t, F = n, Q.tag) {
              case 1:
                if (V = Q.payload, typeof V == "function") {
                  P = V.call(F, P, z);
                  break e;
                }
                P = V;
                break e;
              case 3:
                V.flags = V.flags & -65537 | 128;
              case 0:
                if (V = Q.payload, z = typeof V == "function" ? V.call(F, P, z) : V, z == null) break e;
                P = D({}, P, z);
                break e;
              case 2:
                $t = !0;
            }
          }
          f.callback !== null && f.lane !== 0 && (e.flags |= 64, z = l.effects, z === null ? l.effects = [f] : z.push(f));
        } else F = { eventTime: F, lane: z, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, I === null ? (k = I = F, h = P) : I = I.next = F, s |= z;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null) break;
          z = f, f = z.next, z.next = null, l.lastBaseUpdate = z, l.shared.pending = null;
        }
      } while (!0);
      if (I === null && (h = P), l.baseState = h, l.firstBaseUpdate = k, l.lastBaseUpdate = I, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          s |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      un |= s, e.lanes = s, e.memoizedState = P;
    }
  }
  function _u(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(o(191, l));
        l.call(r);
      }
    }
  }
  var pr = {}, kt = Bt(pr), mr = Bt(pr), vr = Bt(pr);
  function on(e) {
    if (e === pr) throw Error(o(174));
    return e;
  }
  function Ki(e, t) {
    switch (me(vr, t), me(mr, e), me(kt, pr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ql(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ql(t, e);
    }
    ge(kt), me(kt, t);
  }
  function Tn() {
    ge(kt), ge(mr), ge(vr);
  }
  function Eu(e) {
    on(vr.current);
    var t = on(kt.current), n = ql(t, e.type);
    t !== n && (me(mr, e), me(kt, n));
  }
  function qi(e) {
    mr.current === e && (ge(kt), ge(mr));
  }
  var xe = Bt(0);
  function dl(e) {
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
  var Yi = [];
  function Gi() {
    for (var e = 0; e < Yi.length; e++) Yi[e]._workInProgressVersionPrimary = null;
    Yi.length = 0;
  }
  var hl = oe.ReactCurrentDispatcher, Xi = oe.ReactCurrentBatchConfig, sn = 0, _e = null, Le = null, je = null, pl = !1, gr = !1, yr = 0, Of = 0;
  function $e() {
    throw Error(o(321));
  }
  function Zi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
    return !0;
  }
  function Ji(e, t, n, r, l, i) {
    if (sn = i, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hl.current = e === null || e.memoizedState === null ? Lf : Tf, e = n(r, l), gr) {
      i = 0;
      do {
        if (gr = !1, yr = 0, 25 <= i) throw Error(o(301));
        i += 1, je = Le = null, t.updateQueue = null, hl.current = Rf, e = n(r, l);
      } while (gr);
    }
    if (hl.current = gl, t = Le !== null && Le.next !== null, sn = 0, je = Le = _e = null, pl = !1, t) throw Error(o(300));
    return e;
  }
  function bi() {
    var e = yr !== 0;
    return yr = 0, e;
  }
  function xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? _e.memoizedState = je = e : je = je.next = e, je;
  }
  function ut() {
    if (Le === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = je === null ? _e.memoizedState : je.next;
    if (t !== null) je = t, Le = e;
    else {
      if (e === null) throw Error(o(310));
      Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, je === null ? _e.memoizedState = je = e : je = je.next = e;
    }
    return je;
  }
  function Sr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function eo(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = Le, l = r.baseQueue, i = n.pending;
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
        var I = k.lane;
        if ((sn & I) === I) h !== null && (h = h.next = { lane: 0, action: k.action, hasEagerState: k.hasEagerState, eagerState: k.eagerState, next: null }), r = k.hasEagerState ? k.eagerState : e(r, k.action);
        else {
          var P = {
            lane: I,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          };
          h === null ? (f = h = P, s = r) : h = h.next = P, _e.lanes |= I, un |= I;
        }
        k = k.next;
      } while (k !== null && k !== i);
      h === null ? s = r : h.next = f, dt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = h, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, _e.lanes |= i, un |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function to(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = l = l.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== l);
      dt(i, t.memoizedState) || (Ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Cu() {
  }
  function Mu(e, t) {
    var n = _e, r = ut(), l = t(), i = !dt(r.memoizedState, l);
    if (i && (r.memoizedState = l, Ze = !0), r = r.queue, no(Iu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || je !== null && je.memoizedState.tag & 1) {
      if (n.flags |= 2048, wr(9, Ou.bind(null, n, r, l, t), void 0, null), Ae === null) throw Error(o(349));
      (sn & 30) !== 0 || zu(n, t, l);
    }
    return l;
  }
  function zu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ou(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Pu(t) && Nu(e);
  }
  function Iu(e, t, n) {
    return n(function() {
      Pu(t) && Nu(e);
    });
  }
  function Pu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dt(e, n);
    } catch {
      return !0;
    }
  }
  function Nu(e) {
    var t = It(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function Lu(e) {
    var t = xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Nf.bind(null, _e, e), [t.memoizedState, e];
  }
  function wr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = _e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, _e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Tu() {
    return ut().memoizedState;
  }
  function ml(e, t, n, r) {
    var l = xt();
    _e.flags |= e, l.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function vl(e, t, n, r) {
    var l = ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Le !== null) {
      var s = Le.memoizedState;
      if (i = s.destroy, r !== null && Zi(r, s.deps)) {
        l.memoizedState = wr(t, n, i, r);
        return;
      }
    }
    _e.flags |= e, l.memoizedState = wr(1 | t, n, i, r);
  }
  function Ru(e, t) {
    return ml(8390656, 8, e, t);
  }
  function no(e, t) {
    return vl(2048, 8, e, t);
  }
  function ju(e, t) {
    return vl(4, 2, e, t);
  }
  function Au(e, t) {
    return vl(4, 4, e, t);
  }
  function Fu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Du(e, t, n) {
    return n = n != null ? n.concat([e]) : null, vl(4, 4, Fu.bind(null, t, e), n);
  }
  function ro() {
  }
  function Wu(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Uu(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Bu(e, t, n) {
    return (sn & 21) === 0 ? (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n) : (dt(n, t) || (n = gs(), _e.lanes |= n, un |= n, e.baseState = !0), t);
  }
  function If(e, t) {
    var n = pe;
    pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Xi.transition;
    Xi.transition = {};
    try {
      e(!1), t();
    } finally {
      pe = n, Xi.transition = r;
    }
  }
  function Hu() {
    return ut().memoizedState;
  }
  function Pf(e, t, n) {
    var r = Gt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Vu(e)) $u(t, n);
    else if (n = wu(e, t, n, r), n !== null) {
      var l = Ye();
      gt(n, e, r, l), Qu(n, t, r);
    }
  }
  function Nf(e, t, n) {
    var r = Gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Vu(e)) $u(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var s = t.lastRenderedState, f = i(s, n);
        if (l.hasEagerState = !0, l.eagerState = f, dt(f, s)) {
          var h = t.interleaved;
          h === null ? (l.next = l, $i(t)) : (l.next = h.next, h.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = wu(e, t, l, r), n !== null && (l = Ye(), gt(n, e, r, l), Qu(n, t, r));
    }
  }
  function Vu(e) {
    var t = e.alternate;
    return e === _e || t !== null && t === _e;
  }
  function $u(e, t) {
    gr = pl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Qu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ii(e, n);
    }
  }
  var gl = { readContext: st, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, Lf = { readContext: st, useCallback: function(e, t) {
    return xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: st, useEffect: Ru, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ml(
      4194308,
      4,
      Fu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ml(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ml(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = xt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Pf.bind(null, _e, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Lu, useDebugValue: ro, useDeferredValue: function(e) {
    return xt().memoizedState = e;
  }, useTransition: function() {
    var e = Lu(!1), t = e[0];
    return e = If.bind(null, e[1]), xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = _e, l = xt();
    if (ke) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), Ae === null) throw Error(o(349));
      (sn & 30) !== 0 || zu(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, Ru(Iu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, wr(9, Ou.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = xt(), t = Ae.identifierPrefix;
    if (ke) {
      var n = Ot, r = zt;
      n = (r & ~(1 << 32 - ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Of++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Tf = {
    readContext: st,
    useCallback: Wu,
    useContext: st,
    useEffect: no,
    useImperativeHandle: Du,
    useInsertionEffect: ju,
    useLayoutEffect: Au,
    useMemo: Uu,
    useReducer: eo,
    useRef: Tu,
    useState: function() {
      return eo(Sr);
    },
    useDebugValue: ro,
    useDeferredValue: function(e) {
      var t = ut();
      return Bu(t, Le.memoizedState, e);
    },
    useTransition: function() {
      var e = eo(Sr)[0], t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Cu,
    useSyncExternalStore: Mu,
    useId: Hu,
    unstable_isNewReconciler: !1
  }, Rf = { readContext: st, useCallback: Wu, useContext: st, useEffect: no, useImperativeHandle: Du, useInsertionEffect: ju, useLayoutEffect: Au, useMemo: Uu, useReducer: to, useRef: Tu, useState: function() {
    return to(Sr);
  }, useDebugValue: ro, useDeferredValue: function(e) {
    var t = ut();
    return Le === null ? t.memoizedState = e : Bu(t, Le.memoizedState, e);
  }, useTransition: function() {
    var e = to(Sr)[0], t = ut().memoizedState;
    return [e, t];
  }, useMutableSource: Cu, useSyncExternalStore: Mu, useId: Hu, unstable_isNewReconciler: !1 };
  function pt(e, t) {
    if (e && e.defaultProps) {
      t = D({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function lo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var yl = { isMounted: function(e) {
    return (e = e._reactInternals) ? bt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), l = Gt(e), i = Pt(r, l);
    i.payload = t, n != null && (i.callback = n), t = Qt(e, i, l), t !== null && (gt(t, e, l, r), cl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), l = Gt(e), i = Pt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qt(e, i, l), t !== null && (gt(t, e, l, r), cl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ye(), r = Gt(e), l = Pt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Qt(e, l, r), t !== null && (gt(t, e, r, n), cl(t, e, r));
  } };
  function Ku(e, t, n, r, l, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !or(n, r) || !or(l, i) : !0;
  }
  function qu(e, t, n) {
    var r = !1, l = Ht, i = t.contextType;
    return typeof i == "object" && i !== null ? i = st(i) : (l = Xe(t) ? tn : Ve.current, r = t.contextTypes, i = (r = r != null) ? Mn(e, l) : Ht), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = yl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Yu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yl.enqueueReplaceState(t, t.state, null);
  }
  function io(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Qi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = st(i) : (i = Xe(t) ? tn : Ve.current, l.context = Mn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (lo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && yl.enqueueReplaceState(l, l.state, null), fl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Rn(e, t) {
    try {
      var n = "", r = t;
      do
        n += se(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function oo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function so(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var jf = typeof WeakMap == "function" ? WeakMap : Map;
  function Gu(e, t, n) {
    n = Pt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Cl || (Cl = !0, _o = r), so(e, t);
    }, n;
  }
  function Xu(e, t, n) {
    n = Pt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        so(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      so(e, t), typeof r != "function" && (qt === null ? qt = /* @__PURE__ */ new Set([this]) : qt.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function Zu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new jf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Gf.bind(null, e, t, n), t.then(e, e));
  }
  function Ju(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function bu(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Af = oe.ReactCurrentOwner, Ze = !1;
  function qe(e, t, n, r) {
    t.child = e === null ? Su(t, null, n, r) : Pn(t, e.child, n, r);
  }
  function ea(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Ln(t, l), r = Ji(e, t, n, r, i, l), n = bi(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (ke && n && ji(t), t.flags |= 1, qe(e, t, r, l), t.child);
  }
  function ta(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Po(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, na(e, t, i, r, l)) : (e = Nl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var s = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : or, n(s, r) && e.ref === t.ref) return Nt(e, t, l);
    }
    return t.flags |= 1, e = Zt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function na(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (or(i, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Ze = !0);
      else return t.lanes = e.lanes, Nt(e, t, l);
    }
    return uo(e, t, n, r, l);
  }
  function ra(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me(An, lt), lt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, me(An, lt), lt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, me(An, lt), lt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, me(An, lt), lt |= r;
    return qe(e, t, l, n), t.child;
  }
  function la(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function uo(e, t, n, r, l) {
    var i = Xe(n) ? tn : Ve.current;
    return i = Mn(t, i), Ln(t, l), n = Ji(e, t, n, r, i, l), r = bi(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Nt(e, t, l)) : (ke && r && ji(t), t.flags |= 1, qe(e, t, n, l), t.child);
  }
  function ia(e, t, n, r, l) {
    if (Xe(n)) {
      var i = !0;
      nl(t);
    } else i = !1;
    if (Ln(t, l), t.stateNode === null) wl(e, t), qu(t, n, r), io(t, n, r, l), r = !0;
    else if (e === null) {
      var s = t.stateNode, f = t.memoizedProps;
      s.props = f;
      var h = s.context, k = n.contextType;
      typeof k == "object" && k !== null ? k = st(k) : (k = Xe(n) ? tn : Ve.current, k = Mn(t, k));
      var I = n.getDerivedStateFromProps, P = typeof I == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      P || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== r || h !== k) && Yu(t, s, r, k), $t = !1;
      var z = t.memoizedState;
      s.state = z, fl(t, r, s, l), h = t.memoizedState, f !== r || z !== h || Ge.current || $t ? (typeof I == "function" && (lo(t, n, I, r), h = t.memoizedState), (f = $t || Ku(t, n, f, r, z, h, k)) ? (P || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = k, r = f) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, ku(e, t), f = t.memoizedProps, k = t.type === t.elementType ? f : pt(t.type, f), s.props = k, P = t.pendingProps, z = s.context, h = n.contextType, typeof h == "object" && h !== null ? h = st(h) : (h = Xe(n) ? tn : Ve.current, h = Mn(t, h));
      var F = n.getDerivedStateFromProps;
      (I = typeof F == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== P || z !== h) && Yu(t, s, r, h), $t = !1, z = t.memoizedState, s.state = z, fl(t, r, s, l);
      var V = t.memoizedState;
      f !== P || z !== V || Ge.current || $t ? (typeof F == "function" && (lo(t, n, F, r), V = t.memoizedState), (k = $t || Ku(t, n, k, r, z, V, h) || !1) ? (I || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, V, h), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, V, h)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = V), s.props = r, s.state = V, s.context = h, r = k) : (typeof s.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ao(e, t, n, r, i, l);
  }
  function ao(e, t, n, r, l, i) {
    la(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return l && cu(t, n, !1), Nt(e, t, i);
    r = t.stateNode, Af.current = t;
    var f = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Pn(t, e.child, null, i), t.child = Pn(t, null, f, i)) : qe(e, t, f, i), t.memoizedState = r.state, l && cu(t, n, !0), t.child;
  }
  function oa(e) {
    var t = e.stateNode;
    t.pendingContext ? uu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && uu(e, t.context, !1), Ki(e, t.containerInfo);
  }
  function sa(e, t, n, r, l) {
    return In(), Wi(l), t.flags |= 256, qe(e, t, n, r), t.child;
  }
  var co = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ua(e, t, n) {
    var r = t.pendingProps, l = xe.current, i = !1, s = (t.flags & 128) !== 0, f;
    if ((f = s) || (f = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), f ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), me(xe, l & 1), e === null)
      return Di(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ll(s, r, 0, null), e = dn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = fo(n), t.memoizedState = co, e) : ho(t, s));
    if (l = e.memoizedState, l !== null && (f = l.dehydrated, f !== null)) return Ff(e, t, s, r, f, l, n);
    if (i) {
      i = r.fallback, s = t.mode, l = e.child, f = l.sibling;
      var h = { mode: "hidden", children: r.children };
      return (s & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = h, t.deletions = null) : (r = Zt(l, h), r.subtreeFlags = l.subtreeFlags & 14680064), f !== null ? i = Zt(f, i) : (i = dn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? fo(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = co, r;
    }
    return i = e.child, e = i.sibling, r = Zt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ho(e, t) {
    return t = Ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Sl(e, t, n, r) {
    return r !== null && Wi(r), Pn(t, e.child, null, n), e = ho(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ff(e, t, n, r, l, i, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = oo(Error(o(422))), Sl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ll({ mode: "visible", children: r.children }, l, 0, null), i = dn(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Pn(t, e.child, null, s), t.child.memoizedState = fo(s), t.memoizedState = co, i);
    if ((t.mode & 1) === 0) return Sl(e, t, s, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var f = r.dgst;
      return r = f, i = Error(o(419)), r = oo(i, r, void 0), Sl(e, t, s, r);
    }
    if (f = (s & e.childLanes) !== 0, Ze || f) {
      if (r = Ae, r !== null) {
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
        l = (l & (r.suspendedLanes | s)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, It(e, l), gt(r, e, l, -1));
      }
      return Io(), r = oo(Error(o(421))), Sl(e, t, s, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, rt = Ut(l.nextSibling), nt = t, ke = !0, ht = null, e !== null && (it[ot++] = zt, it[ot++] = Ot, it[ot++] = nn, zt = e.id, Ot = e.overflow, nn = t), t = ho(t, r.children), t.flags |= 4096, t);
  }
  function aa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Vi(e.return, t, n);
  }
  function po(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function ca(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (qe(e, t, r.children, n), r = xe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && aa(e, n, t);
        else if (e.tag === 19) aa(e, n, t);
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
    if (me(xe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && dl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), po(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && dl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        po(t, !0, n, null, i);
        break;
      case "together":
        po(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function wl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Nt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Zt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Df(e, t, n) {
    switch (t.tag) {
      case 3:
        oa(t), In();
        break;
      case 5:
        Eu(t);
        break;
      case 1:
        Xe(t.type) && nl(t);
        break;
      case 4:
        Ki(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        me(ul, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (me(xe, xe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ua(e, t, n) : (me(xe, xe.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
        me(xe, xe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ca(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), me(xe, xe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ra(e, t, n);
    }
    return Nt(e, t, n);
  }
  var fa, mo, da, ha;
  fa = function(e, t) {
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
  }, mo = function() {
  }, da = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, on(kt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Tt(e, l), r = Tt(e, r), i = [];
          break;
        case "select":
          l = D({}, l, { value: void 0 }), r = D({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Kl(e, l), r = Kl(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = br);
      }
      Yl(n, r);
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
        else k === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, f = f ? f.__html : void 0, h != null && f !== h && (i = i || []).push(k, h)) : k === "children" ? typeof h != "string" && typeof h != "number" || (i = i || []).push(k, "" + h) : k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && (c.hasOwnProperty(k) ? (h != null && k === "onScroll" && ve("scroll", e), i || f === h || (i = [])) : (i = i || []).push(k, h));
      }
      n && (i = i || []).push("style", n);
      var k = i;
      (t.updateQueue = k) && (t.flags |= 4);
    }
  }, ha = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function kr(e, t) {
    if (!ke) switch (e.tailMode) {
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
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Wf(e, t, n) {
    var r = t.pendingProps;
    switch (Ai(t), t.tag) {
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
        return Qe(t), null;
      case 1:
        return Xe(t.type) && tl(), Qe(t), null;
      case 3:
        return r = t.stateNode, Tn(), ge(Ge), ge(Ve), Gi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ol(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ht !== null && (Mo(ht), ht = null))), mo(e, t), Qe(t), null;
      case 5:
        qi(t);
        var l = on(vr.current);
        if (n = t.type, e !== null && t.stateNode != null) da(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return Qe(t), null;
          }
          if (e = on(kt.current), ol(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[wt] = t, r[fr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ve("cancel", r), ve("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ur.length; l++) ve(ur[l], r);
                break;
              case "source":
                ve("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ve(
                  "error",
                  r
                ), ve("load", r);
                break;
              case "details":
                ve("toggle", r);
                break;
              case "input":
                qo(r, i), ve("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, ve("invalid", r);
                break;
              case "textarea":
                Xo(r, i), ve("invalid", r);
            }
            Yl(n, i), l = null;
            for (var s in i) if (i.hasOwnProperty(s)) {
              var f = i[s];
              s === "children" ? typeof f == "string" ? r.textContent !== f && (i.suppressHydrationWarning !== !0 && Jr(r.textContent, f, e), l = ["children", f]) : typeof f == "number" && r.textContent !== "" + f && (i.suppressHydrationWarning !== !0 && Jr(
                r.textContent,
                f,
                e
              ), l = ["children", "" + f]) : c.hasOwnProperty(s) && f != null && s === "onScroll" && ve("scroll", r);
            }
            switch (n) {
              case "input":
                we(r), Go(r, i, !0);
                break;
              case "textarea":
                we(r), Jo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = br);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bo(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[wt] = t, e[fr] = r, fa(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Gl(n, r), n) {
                case "dialog":
                  ve("cancel", e), ve("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ve("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ur.length; l++) ve(ur[l], e);
                  l = r;
                  break;
                case "source":
                  ve("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ve(
                    "error",
                    e
                  ), ve("load", e), l = r;
                  break;
                case "details":
                  ve("toggle", e), l = r;
                  break;
                case "input":
                  qo(e, r), l = Tt(e, r), ve("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = D({}, r, { value: void 0 }), ve("invalid", e);
                  break;
                case "textarea":
                  Xo(e, r), l = Kl(e, r), ve("invalid", e);
                  break;
                default:
                  l = r;
              }
              Yl(n, l), f = l;
              for (i in f) if (f.hasOwnProperty(i)) {
                var h = f[i];
                i === "style" ? ns(e, h) : i === "dangerouslySetInnerHTML" ? (h = h ? h.__html : void 0, h != null && es(e, h)) : i === "children" ? typeof h == "string" ? (n !== "textarea" || h !== "") && Vn(e, h) : typeof h == "number" && Vn(e, "" + h) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (c.hasOwnProperty(i) ? h != null && i === "onScroll" && ve("scroll", e) : h != null && C(e, i, h, s));
              }
              switch (n) {
                case "input":
                  we(e), Go(e, r, !1);
                  break;
                case "textarea":
                  we(e), Jo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + H(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? pn(e, !!r.multiple, i, !1) : r.defaultValue != null && pn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = br);
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
        return Qe(t), null;
      case 6:
        if (e && t.stateNode != null) ha(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (n = on(vr.current), on(kt.current), ol(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (i = r.nodeValue !== n) && (e = nt, e !== null)) switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r;
        }
        return Qe(t), null;
      case 13:
        if (ge(xe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ke && rt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) vu(), In(), t.flags |= 98560, i = !1;
          else if (i = ol(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[wt] = t;
            } else In(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), i = !1;
          } else ht !== null && (Mo(ht), ht = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (xe.current & 1) !== 0 ? Te === 0 && (Te = 3) : Io())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
      case 4:
        return Tn(), mo(e, t), e === null && ar(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return Hi(t.type._context), Qe(t), null;
      case 17:
        return Xe(t.type) && tl(), Qe(t), null;
      case 19:
        if (ge(xe), i = t.memoizedState, i === null) return Qe(t), null;
        if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) kr(i, !1);
        else {
          if (Te !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (s = dl(e), s !== null) {
              for (t.flags |= 128, kr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return me(xe, xe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && ze() > Fn && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = dl(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ke) return Qe(t), null;
          } else 2 * ze() - i.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ze(), t.sibling = null, n = xe.current, me(xe, r ? n & 1 | 2 : n & 1), t) : (Qe(t), null);
      case 22:
      case 23:
        return Oo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (lt & 1073741824) !== 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Uf(e, t) {
    switch (Ai(t), t.tag) {
      case 1:
        return Xe(t.type) && tl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Tn(), ge(Ge), ge(Ve), Gi(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return qi(t), null;
      case 13:
        if (ge(xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          In();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ge(xe), null;
      case 4:
        return Tn(), null;
      case 10:
        return Hi(t.type._context), null;
      case 22:
      case 23:
        return Oo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var kl = !1, Ke = !1, Bf = typeof WeakSet == "function" ? WeakSet : Set, W = null;
  function jn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ce(e, t, r);
    }
    else n.current = null;
  }
  function vo(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var pa = !1;
  function Hf(e, t) {
    if (zi = Br, e = Ks(), Si(e)) {
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
          var s = 0, f = -1, h = -1, k = 0, I = 0, P = e, z = null;
          t: for (; ; ) {
            for (var F; P !== n || l !== 0 && P.nodeType !== 3 || (f = s + l), P !== i || r !== 0 && P.nodeType !== 3 || (h = s + r), P.nodeType === 3 && (s += P.nodeValue.length), (F = P.firstChild) !== null; )
              z = P, P = F;
            for (; ; ) {
              if (P === e) break t;
              if (z === n && ++k === l && (f = s), z === i && ++I === r && (h = s), (F = P.nextSibling) !== null) break;
              P = z, z = P.parentNode;
            }
            P = F;
          }
          n = f === -1 || h === -1 ? null : { start: f, end: h };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Oi = { focusedElem: e, selectionRange: n }, Br = !1, W = t; W !== null; ) if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
    else for (; W !== null; ) {
      t = W;
      try {
        var V = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (V !== null) {
              var Q = V.memoizedProps, Oe = V.memoizedState, S = t.stateNode, p = S.getSnapshotBeforeUpdate(t.elementType === t.type ? Q : pt(t.type, Q), Oe);
              S.__reactInternalSnapshotBeforeUpdate = p;
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
        Ce(t, t.return, L);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, W = e;
        break;
      }
      W = t.return;
    }
    return V = pa, pa = !1, V;
  }
  function xr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && vo(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function xl(e, t) {
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
  function go(e) {
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
  function ma(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ma(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[fr], delete t[Li], delete t[Ef], delete t[Cf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function va(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ga(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || va(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function yo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = br));
    else if (r !== 4 && (e = e.child, e !== null)) for (yo(e, t, n), e = e.sibling; e !== null; ) yo(e, t, n), e = e.sibling;
  }
  function So(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (So(e, t, n), e = e.sibling; e !== null; ) So(e, t, n), e = e.sibling;
  }
  var Ue = null, mt = !1;
  function Kt(e, t, n) {
    for (n = n.child; n !== null; ) ya(e, t, n), n = n.sibling;
  }
  function ya(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function") try {
      St.onCommitFiberUnmount(jr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ke || jn(n, t);
      case 6:
        var r = Ue, l = mt;
        Ue = null, Kt(e, t, n), Ue = r, mt = l, Ue !== null && (mt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ue.removeChild(n.stateNode));
        break;
      case 18:
        Ue !== null && (mt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? Ni(e.parentNode, n) : e.nodeType === 1 && Ni(e, n), er(e)) : Ni(Ue, n.stateNode));
        break;
      case 4:
        r = Ue, l = mt, Ue = n.stateNode.containerInfo, mt = !0, Kt(e, t, n), Ue = r, mt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, s = i.destroy;
            i = i.tag, s !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && vo(n, t, s), l = l.next;
          } while (l !== r);
        }
        Kt(e, t, n);
        break;
      case 1:
        if (!Ke && (jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (f) {
          Ce(n, t, f);
        }
        Kt(e, t, n);
        break;
      case 21:
        Kt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ke = (r = Ke) || n.memoizedState !== null, Kt(e, t, n), Ke = r) : Kt(e, t, n);
        break;
      default:
        Kt(e, t, n);
    }
  }
  function Sa(e) {
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
  function vt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, s = t, f = s;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 5:
              Ue = f.stateNode, mt = !1;
              break e;
            case 3:
              Ue = f.stateNode.containerInfo, mt = !0;
              break e;
            case 4:
              Ue = f.stateNode.containerInfo, mt = !0;
              break e;
          }
          f = f.return;
        }
        if (Ue === null) throw Error(o(160));
        ya(i, s, l), Ue = null, mt = !1;
        var h = l.alternate;
        h !== null && (h.return = null), l.return = null;
      } catch (k) {
        Ce(l, t, k);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) wa(t, e), t = t.sibling;
  }
  function wa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vt(t, e), _t(e), r & 4) {
          try {
            xr(3, e, e.return), xl(3, e);
          } catch (Q) {
            Ce(e, e.return, Q);
          }
          try {
            xr(5, e, e.return);
          } catch (Q) {
            Ce(e, e.return, Q);
          }
        }
        break;
      case 1:
        vt(t, e), _t(e), r & 512 && n !== null && jn(n, n.return);
        break;
      case 5:
        if (vt(t, e), _t(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Vn(l, "");
          } catch (Q) {
            Ce(e, e.return, Q);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, f = e.type, h = e.updateQueue;
          if (e.updateQueue = null, h !== null) try {
            f === "input" && i.type === "radio" && i.name != null && Yo(l, i), Gl(f, s);
            var k = Gl(f, i);
            for (s = 0; s < h.length; s += 2) {
              var I = h[s], P = h[s + 1];
              I === "style" ? ns(l, P) : I === "dangerouslySetInnerHTML" ? es(l, P) : I === "children" ? Vn(l, P) : C(l, I, P, k);
            }
            switch (f) {
              case "input":
                $l(l, i);
                break;
              case "textarea":
                Zo(l, i);
                break;
              case "select":
                var z = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var F = i.value;
                F != null ? pn(l, !!i.multiple, F, !1) : z !== !!i.multiple && (i.defaultValue != null ? pn(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : pn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[fr] = i;
          } catch (Q) {
            Ce(e, e.return, Q);
          }
        }
        break;
      case 6:
        if (vt(t, e), _t(e), r & 4) {
          if (e.stateNode === null) throw Error(o(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (Q) {
            Ce(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (vt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          er(t.containerInfo);
        } catch (Q) {
          Ce(e, e.return, Q);
        }
        break;
      case 4:
        vt(t, e), _t(e);
        break;
      case 13:
        vt(t, e), _t(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (xo = ze())), r & 4 && Sa(e);
        break;
      case 22:
        if (I = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ke = (k = Ke) || I, vt(t, e), Ke = k) : vt(t, e), _t(e), r & 8192) {
          if (k = e.memoizedState !== null, (e.stateNode.isHidden = k) && !I && (e.mode & 1) !== 0) for (W = e, I = e.child; I !== null; ) {
            for (P = W = I; W !== null; ) {
              switch (z = W, F = z.child, z.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xr(4, z, z.return);
                  break;
                case 1:
                  jn(z, z.return);
                  var V = z.stateNode;
                  if (typeof V.componentWillUnmount == "function") {
                    r = z, n = z.return;
                    try {
                      t = r, V.props = t.memoizedProps, V.state = t.memoizedState, V.componentWillUnmount();
                    } catch (Q) {
                      Ce(r, n, Q);
                    }
                  }
                  break;
                case 5:
                  jn(z, z.return);
                  break;
                case 22:
                  if (z.memoizedState !== null) {
                    _a(P);
                    continue;
                  }
              }
              F !== null ? (F.return = z, W = F) : _a(P);
            }
            I = I.sibling;
          }
          e: for (I = null, P = e; ; ) {
            if (P.tag === 5) {
              if (I === null) {
                I = P;
                try {
                  l = P.stateNode, k ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (f = P.stateNode, h = P.memoizedProps.style, s = h != null && h.hasOwnProperty("display") ? h.display : null, f.style.display = ts("display", s));
                } catch (Q) {
                  Ce(e, e.return, Q);
                }
              }
            } else if (P.tag === 6) {
              if (I === null) try {
                P.stateNode.nodeValue = k ? "" : P.memoizedProps;
              } catch (Q) {
                Ce(e, e.return, Q);
              }
            } else if ((P.tag !== 22 && P.tag !== 23 || P.memoizedState === null || P === e) && P.child !== null) {
              P.child.return = P, P = P.child;
              continue;
            }
            if (P === e) break e;
            for (; P.sibling === null; ) {
              if (P.return === null || P.return === e) break e;
              I === P && (I = null), P = P.return;
            }
            I === P && (I = null), P.sibling.return = P.return, P = P.sibling;
          }
        }
        break;
      case 19:
        vt(t, e), _t(e), r & 4 && Sa(e);
        break;
      case 21:
        break;
      default:
        vt(
          t,
          e
        ), _t(e);
    }
  }
  function _t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (va(n)) {
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
            r.flags & 32 && (Vn(l, ""), r.flags &= -33);
            var i = ga(e);
            So(e, i, l);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, f = ga(e);
            yo(e, f, s);
            break;
          default:
            throw Error(o(161));
        }
      } catch (h) {
        Ce(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vf(e, t, n) {
    W = e, ka(e);
  }
  function ka(e, t, n) {
    for (var r = (e.mode & 1) !== 0; W !== null; ) {
      var l = W, i = l.child;
      if (l.tag === 22 && r) {
        var s = l.memoizedState !== null || kl;
        if (!s) {
          var f = l.alternate, h = f !== null && f.memoizedState !== null || Ke;
          f = kl;
          var k = Ke;
          if (kl = s, (Ke = h) && !k) for (W = l; W !== null; ) s = W, h = s.child, s.tag === 22 && s.memoizedState !== null ? Ea(l) : h !== null ? (h.return = s, W = h) : Ea(l);
          for (; i !== null; ) W = i, ka(i), i = i.sibling;
          W = l, kl = f, Ke = k;
        }
        xa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, W = i) : xa(e);
    }
  }
  function xa(e) {
    for (; W !== null; ) {
      var t = W;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ke || xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ke) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && _u(t, i, r);
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
                _u(t, s, n);
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
                  var I = k.memoizedState;
                  if (I !== null) {
                    var P = I.dehydrated;
                    P !== null && er(P);
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
          Ke || t.flags & 512 && go(t);
        } catch (z) {
          Ce(t, t.return, z);
        }
      }
      if (t === e) {
        W = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, W = n;
        break;
      }
      W = t.return;
    }
  }
  function _a(e) {
    for (; W !== null; ) {
      var t = W;
      if (t === e) {
        W = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, W = n;
        break;
      }
      W = t.return;
    }
  }
  function Ea(e) {
    for (; W !== null; ) {
      var t = W;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              xl(4, t);
            } catch (h) {
              Ce(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Ce(t, l, h);
              }
            }
            var i = t.return;
            try {
              go(t);
            } catch (h) {
              Ce(t, i, h);
            }
            break;
          case 5:
            var s = t.return;
            try {
              go(t);
            } catch (h) {
              Ce(t, s, h);
            }
        }
      } catch (h) {
        Ce(t, t.return, h);
      }
      if (t === e) {
        W = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        f.return = t.return, W = f;
        break;
      }
      W = t.return;
    }
  }
  var $f = Math.ceil, _l = oe.ReactCurrentDispatcher, wo = oe.ReactCurrentOwner, at = oe.ReactCurrentBatchConfig, ue = 0, Ae = null, Ne = null, Be = 0, lt = 0, An = Bt(0), Te = 0, _r = null, un = 0, El = 0, ko = 0, Er = null, Je = null, xo = 0, Fn = 1 / 0, Lt = null, Cl = !1, _o = null, qt = null, Ml = !1, Yt = null, zl = 0, Cr = 0, Eo = null, Ol = -1, Il = 0;
  function Ye() {
    return (ue & 6) !== 0 ? ze() : Ol !== -1 ? Ol : Ol = ze();
  }
  function Gt(e) {
    return (e.mode & 1) === 0 ? 1 : (ue & 2) !== 0 && Be !== 0 ? Be & -Be : zf.transition !== null ? (Il === 0 && (Il = gs()), Il) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ms(e.type)), e);
  }
  function gt(e, t, n, r) {
    if (50 < Cr) throw Cr = 0, Eo = null, Error(o(185));
    Gn(e, n, r), ((ue & 2) === 0 || e !== Ae) && (e === Ae && ((ue & 2) === 0 && (El |= n), Te === 4 && Xt(e, Be)), be(e, r), n === 1 && ue === 0 && (t.mode & 1) === 0 && (Fn = ze() + 500, rl && Vt()));
  }
  function be(e, t) {
    var n = e.callbackNode;
    Mc(e, t);
    var r = Dr(e, e === Ae ? Be : 0);
    if (r === 0) n !== null && ps(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ps(n), t === 1) e.tag === 0 ? Mf(Ma.bind(null, e)) : fu(Ma.bind(null, e)), xf(function() {
        (ue & 6) === 0 && Vt();
      }), n = null;
      else {
        switch (ys(r)) {
          case 1:
            n = ni;
            break;
          case 4:
            n = ms;
            break;
          case 16:
            n = Rr;
            break;
          case 536870912:
            n = vs;
            break;
          default:
            n = Rr;
        }
        n = Ra(n, Ca.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ca(e, t) {
    if (Ol = -1, Il = 0, (ue & 6) !== 0) throw Error(o(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n) return null;
    var r = Dr(e, e === Ae ? Be : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Pl(e, r);
    else {
      t = r;
      var l = ue;
      ue |= 2;
      var i = Oa();
      (Ae !== e || Be !== t) && (Lt = null, Fn = ze() + 500, cn(e, t));
      do
        try {
          qf();
          break;
        } catch (f) {
          za(e, f);
        }
      while (!0);
      Bi(), _l.current = i, ue = l, Ne !== null ? t = 0 : (Ae = null, Be = 0, t = Te);
    }
    if (t !== 0) {
      if (t === 2 && (l = ri(e), l !== 0 && (r = l, t = Co(e, l))), t === 1) throw n = _r, cn(e, 0), Xt(e, r), be(e, ze()), n;
      if (t === 6) Xt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Qf(l) && (t = Pl(e, r), t === 2 && (i = ri(e), i !== 0 && (r = i, t = Co(e, i))), t === 1)) throw n = _r, cn(e, 0), Xt(e, r), be(e, ze()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            fn(e, Je, Lt);
            break;
          case 3:
            if (Xt(e, r), (r & 130023424) === r && (t = xo + 500 - ze(), 10 < t)) {
              if (Dr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ye(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Pi(fn.bind(null, e, Je, Lt), t);
              break;
            }
            fn(e, Je, Lt);
            break;
          case 4:
            if (Xt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var s = 31 - ft(r);
              i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
            }
            if (r = l, r = ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $f(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Pi(fn.bind(null, e, Je, Lt), r);
              break;
            }
            fn(e, Je, Lt);
            break;
          case 5:
            fn(e, Je, Lt);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return be(e, ze()), e.callbackNode === n ? Ca.bind(null, e) : null;
  }
  function Co(e, t) {
    var n = Er;
    return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = Pl(e, t), e !== 2 && (t = Je, Je = n, t !== null && Mo(t)), e;
  }
  function Mo(e) {
    Je === null ? Je = e : Je.push.apply(Je, e);
  }
  function Qf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!dt(i(), l)) return !1;
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
  function Xt(e, t) {
    for (t &= ~ko, t &= ~El, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - ft(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ma(e) {
    if ((ue & 6) !== 0) throw Error(o(327));
    Dn();
    var t = Dr(e, 0);
    if ((t & 1) === 0) return be(e, ze()), null;
    var n = Pl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ri(e);
      r !== 0 && (t = r, n = Co(e, r));
    }
    if (n === 1) throw n = _r, cn(e, 0), Xt(e, t), be(e, ze()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, Je, Lt), be(e, ze()), null;
  }
  function zo(e, t) {
    var n = ue;
    ue |= 1;
    try {
      return e(t);
    } finally {
      ue = n, ue === 0 && (Fn = ze() + 500, rl && Vt());
    }
  }
  function an(e) {
    Yt !== null && Yt.tag === 0 && (ue & 6) === 0 && Dn();
    var t = ue;
    ue |= 1;
    var n = at.transition, r = pe;
    try {
      if (at.transition = null, pe = 1, e) return e();
    } finally {
      pe = r, at.transition = n, ue = t, (ue & 6) === 0 && Vt();
    }
  }
  function Oo() {
    lt = An.current, ge(An);
  }
  function cn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, kf(n)), Ne !== null) for (n = Ne.return; n !== null; ) {
      var r = n;
      switch (Ai(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && tl();
          break;
        case 3:
          Tn(), ge(Ge), ge(Ve), Gi();
          break;
        case 5:
          qi(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          ge(xe);
          break;
        case 19:
          ge(xe);
          break;
        case 10:
          Hi(r.type._context);
          break;
        case 22:
        case 23:
          Oo();
      }
      n = n.return;
    }
    if (Ae = e, Ne = e = Zt(e.current, null), Be = lt = t, Te = 0, _r = null, ko = El = un = 0, Je = Er = null, ln !== null) {
      for (t = 0; t < ln.length; t++) if (n = ln[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = l, r.next = s;
        }
        n.pending = r;
      }
      ln = null;
    }
    return e;
  }
  function za(e, t) {
    do {
      var n = Ne;
      try {
        if (Bi(), hl.current = gl, pl) {
          for (var r = _e.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          pl = !1;
        }
        if (sn = 0, je = Le = _e = null, gr = !1, yr = 0, wo.current = null, n === null || n.return === null) {
          Te = 1, _r = t, Ne = null;
          break;
        }
        e: {
          var i = e, s = n.return, f = n, h = t;
          if (t = Be, f.flags |= 32768, h !== null && typeof h == "object" && typeof h.then == "function") {
            var k = h, I = f, P = I.tag;
            if ((I.mode & 1) === 0 && (P === 0 || P === 11 || P === 15)) {
              var z = I.alternate;
              z ? (I.updateQueue = z.updateQueue, I.memoizedState = z.memoizedState, I.lanes = z.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var F = Ju(s);
            if (F !== null) {
              F.flags &= -257, bu(F, s, f, i, t), F.mode & 1 && Zu(i, k, t), t = F, h = k;
              var V = t.updateQueue;
              if (V === null) {
                var Q = /* @__PURE__ */ new Set();
                Q.add(h), t.updateQueue = Q;
              } else V.add(h);
              break e;
            } else {
              if ((t & 1) === 0) {
                Zu(i, k, t), Io();
                break e;
              }
              h = Error(o(426));
            }
          } else if (ke && f.mode & 1) {
            var Oe = Ju(s);
            if (Oe !== null) {
              (Oe.flags & 65536) === 0 && (Oe.flags |= 256), bu(Oe, s, f, i, t), Wi(Rn(h, f));
              break e;
            }
          }
          i = h = Rn(h, f), Te !== 4 && (Te = 2), Er === null ? Er = [i] : Er.push(i), i = s;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Gu(i, h, t);
                xu(i, S);
                break e;
              case 1:
                f = h;
                var p = i.type, w = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (qt === null || !qt.has(w)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var L = Xu(i, f, t);
                  xu(i, L);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Pa(n);
      } catch (K) {
        t = K, Ne === n && n !== null && (Ne = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Oa() {
    var e = _l.current;
    return _l.current = gl, e === null ? gl : e;
  }
  function Io() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4), Ae === null || (un & 268435455) === 0 && (El & 268435455) === 0 || Xt(Ae, Be);
  }
  function Pl(e, t) {
    var n = ue;
    ue |= 2;
    var r = Oa();
    (Ae !== e || Be !== t) && (Lt = null, cn(e, t));
    do
      try {
        Kf();
        break;
      } catch (l) {
        za(e, l);
      }
    while (!0);
    if (Bi(), ue = n, _l.current = r, Ne !== null) throw Error(o(261));
    return Ae = null, Be = 0, Te;
  }
  function Kf() {
    for (; Ne !== null; ) Ia(Ne);
  }
  function qf() {
    for (; Ne !== null && !gc(); ) Ia(Ne);
  }
  function Ia(e) {
    var t = Ta(e.alternate, e, lt);
    e.memoizedProps = e.pendingProps, t === null ? Pa(e) : Ne = t, wo.current = null;
  }
  function Pa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Wf(n, t, lt), n !== null) {
          Ne = n;
          return;
        }
      } else {
        if (n = Uf(n, t), n !== null) {
          n.flags &= 32767, Ne = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Te = 6, Ne = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    Te === 0 && (Te = 5);
  }
  function fn(e, t, n) {
    var r = pe, l = at.transition;
    try {
      at.transition = null, pe = 1, Yf(e, t, n, r);
    } finally {
      at.transition = l, pe = r;
    }
    return null;
  }
  function Yf(e, t, n, r) {
    do
      Dn();
    while (Yt !== null);
    if ((ue & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (zc(e, i), e === Ae && (Ne = Ae = null, Be = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ml || (Ml = !0, Ra(Rr, function() {
      return Dn(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = at.transition, at.transition = null;
      var s = pe;
      pe = 1;
      var f = ue;
      ue |= 4, wo.current = null, Hf(e, n), wa(n, e), pf(Oi), Br = !!zi, Oi = zi = null, e.current = n, Vf(n), yc(), ue = f, pe = s, at.transition = i;
    } else e.current = n;
    if (Ml && (Ml = !1, Yt = e, zl = l), i = e.pendingLanes, i === 0 && (qt = null), kc(n.stateNode), be(e, ze()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Cl) throw Cl = !1, e = _o, _o = null, e;
    return (zl & 1) !== 0 && e.tag !== 0 && Dn(), i = e.pendingLanes, (i & 1) !== 0 ? e === Eo ? Cr++ : (Cr = 0, Eo = e) : Cr = 0, Vt(), null;
  }
  function Dn() {
    if (Yt !== null) {
      var e = ys(zl), t = at.transition, n = pe;
      try {
        if (at.transition = null, pe = 16 > e ? 16 : e, Yt === null) var r = !1;
        else {
          if (e = Yt, Yt = null, zl = 0, (ue & 6) !== 0) throw Error(o(331));
          var l = ue;
          for (ue |= 4, W = e.current; W !== null; ) {
            var i = W, s = i.child;
            if ((W.flags & 16) !== 0) {
              var f = i.deletions;
              if (f !== null) {
                for (var h = 0; h < f.length; h++) {
                  var k = f[h];
                  for (W = k; W !== null; ) {
                    var I = W;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xr(8, I, i);
                    }
                    var P = I.child;
                    if (P !== null) P.return = I, W = P;
                    else for (; W !== null; ) {
                      I = W;
                      var z = I.sibling, F = I.return;
                      if (ma(I), I === k) {
                        W = null;
                        break;
                      }
                      if (z !== null) {
                        z.return = F, W = z;
                        break;
                      }
                      W = F;
                    }
                  }
                }
                var V = i.alternate;
                if (V !== null) {
                  var Q = V.child;
                  if (Q !== null) {
                    V.child = null;
                    do {
                      var Oe = Q.sibling;
                      Q.sibling = null, Q = Oe;
                    } while (Q !== null);
                  }
                }
                W = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && s !== null) s.return = i, W = s;
            else e: for (; W !== null; ) {
              if (i = W, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  xr(9, i, i.return);
              }
              var S = i.sibling;
              if (S !== null) {
                S.return = i.return, W = S;
                break e;
              }
              W = i.return;
            }
          }
          var p = e.current;
          for (W = p; W !== null; ) {
            s = W;
            var w = s.child;
            if ((s.subtreeFlags & 2064) !== 0 && w !== null) w.return = s, W = w;
            else e: for (s = p; W !== null; ) {
              if (f = W, (f.flags & 2048) !== 0) try {
                switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xl(9, f);
                }
              } catch (K) {
                Ce(f, f.return, K);
              }
              if (f === s) {
                W = null;
                break e;
              }
              var L = f.sibling;
              if (L !== null) {
                L.return = f.return, W = L;
                break e;
              }
              W = f.return;
            }
          }
          if (ue = l, Vt(), St && typeof St.onPostCommitFiberRoot == "function") try {
            St.onPostCommitFiberRoot(jr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        pe = n, at.transition = t;
      }
    }
    return !1;
  }
  function Na(e, t, n) {
    t = Rn(n, t), t = Gu(e, t, 1), e = Qt(e, t, 1), t = Ye(), e !== null && (Gn(e, 1, t), be(e, t));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) Na(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Na(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qt === null || !qt.has(r))) {
          e = Rn(n, e), e = Xu(t, e, 1), t = Qt(t, e, 1), e = Ye(), t !== null && (Gn(t, 1, e), be(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Gf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (Be & n) === n && (Te === 4 || Te === 3 && (Be & 130023424) === Be && 500 > ze() - xo ? cn(e, 0) : ko |= n), be(e, t);
  }
  function La(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Fr, Fr <<= 1, (Fr & 130023424) === 0 && (Fr = 4194304)));
    var n = Ye();
    e = It(e, t), e !== null && (Gn(e, t, n), be(e, n));
  }
  function Xf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), La(e, n);
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
    r !== null && r.delete(t), La(e, n);
  }
  var Ta;
  Ta = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ge.current) Ze = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ze = !1, Df(e, t, n);
      Ze = (e.flags & 131072) !== 0;
    }
    else Ze = !1, ke && (t.flags & 1048576) !== 0 && du(t, il, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        wl(e, t), e = t.pendingProps;
        var l = Mn(t, Ve.current);
        Ln(t, n), l = Ji(null, t, r, e, l, n);
        var i = bi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (i = !0, nl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Qi(t), l.updater = yl, t.stateNode = l, l._reactInternals = t, io(t, r, e, n), t = ao(null, t, r, !0, i, n)) : (t.tag = 0, ke && i && ji(t), qe(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (wl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = bf(r), e = pt(r, e), l) {
            case 0:
              t = uo(null, t, r, e, n);
              break e;
            case 1:
              t = ia(null, t, r, e, n);
              break e;
            case 11:
              t = ea(null, t, r, e, n);
              break e;
            case 14:
              t = ta(null, t, r, pt(r.type, e), n);
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
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pt(r, l), uo(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pt(r, l), ia(e, t, r, l, n);
      case 3:
        e: {
          if (oa(t), e === null) throw Error(o(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, ku(e, t), fl(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Rn(Error(o(423)), t), t = sa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Rn(Error(o(424)), t), t = sa(e, t, r, n, l);
            break e;
          } else for (rt = Ut(t.stateNode.containerInfo.firstChild), nt = t, ke = !0, ht = null, n = Su(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (In(), r === l) {
              t = Nt(e, t, n);
              break e;
            }
            qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Eu(t), e === null && Di(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, Ii(r, l) ? s = null : i !== null && Ii(r, i) && (t.flags |= 32), la(e, t), qe(e, t, s, n), t.child;
      case 6:
        return e === null && Di(t), null;
      case 13:
        return ua(e, t, n);
      case 4:
        return Ki(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : qe(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pt(r, l), ea(e, t, r, l, n);
      case 7:
        return qe(e, t, t.pendingProps, n), t.child;
      case 8:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, me(ul, r._currentValue), r._currentValue = s, i !== null) if (dt(i.value, s)) {
            if (i.children === l.children && !Ge.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var f = i.dependencies;
            if (f !== null) {
              s = i.child;
              for (var h = f.firstContext; h !== null; ) {
                if (h.context === r) {
                  if (i.tag === 1) {
                    h = Pt(-1, n & -n), h.tag = 2;
                    var k = i.updateQueue;
                    if (k !== null) {
                      k = k.shared;
                      var I = k.pending;
                      I === null ? h.next = h : (h.next = I.next, I.next = h), k.pending = h;
                    }
                  }
                  i.lanes |= n, h = i.alternate, h !== null && (h.lanes |= n), Vi(
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
              s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), Vi(s, n, t), s = i.sibling;
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
          qe(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Ln(t, n), l = st(l), r = r(l), t.flags |= 1, qe(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = pt(r, t.pendingProps), l = pt(r.type, l), ta(e, t, r, l, n);
      case 15:
        return na(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pt(r, l), wl(e, t), t.tag = 1, Xe(r) ? (e = !0, nl(t)) : e = !1, Ln(t, n), qu(t, r, l), io(t, r, l, n), ao(null, t, r, !0, e, n);
      case 19:
        return ca(e, t, n);
      case 22:
        return ra(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Ra(e, t) {
    return hs(e, t);
  }
  function Jf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ct(e, t, n, r) {
    return new Jf(e, t, n, r);
  }
  function Po(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function bf(e) {
    if (typeof e == "function") return Po(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ye) return 11;
      if (e === We) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Nl(e, t, n, r, l, i) {
    var s = 2;
    if (r = e, typeof e == "function") Po(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case b:
        return dn(n.children, l, i, t);
      case Ee:
        s = 8, l |= 8;
        break;
      case Re:
        return e = ct(12, n, t, l | 2), e.elementType = Re, e.lanes = i, e;
      case Pe:
        return e = ct(13, n, t, l), e.elementType = Pe, e.lanes = i, e;
      case Me:
        return e = ct(19, n, t, l), e.elementType = Me, e.lanes = i, e;
      case Se:
        return Ll(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ie:
            s = 10;
            break e;
          case De:
            s = 9;
            break e;
          case ye:
            s = 11;
            break e;
          case We:
            s = 14;
            break e;
          case He:
            s = 16, r = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = ct(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function dn(e, t, n, r) {
    return e = ct(7, e, r, t), e.lanes = n, e;
  }
  function Ll(e, t, n, r) {
    return e = ct(22, e, r, t), e.elementType = Se, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function No(e, t, n) {
    return e = ct(6, e, null, t), e.lanes = n, e;
  }
  function Lo(e, t, n) {
    return t = ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function ed(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = li(0), this.expirationTimes = li(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function To(e, t, n, r, l, i, s, f, h) {
    return e = new ed(e, t, n, f, h), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ct(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qi(i), e;
  }
  function td(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: de, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ja(e) {
    if (!e) return Ht;
    e = e._reactInternals;
    e: {
      if (bt(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
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
      if (Xe(n)) return au(e, n, t);
    }
    return t;
  }
  function Aa(e, t, n, r, l, i, s, f, h) {
    return e = To(n, r, !0, e, l, i, s, f, h), e.context = ja(null), n = e.current, r = Ye(), l = Gt(n), i = Pt(r, l), i.callback = t ?? null, Qt(n, i, l), e.current.lanes = l, Gn(e, l, r), be(e, r), e;
  }
  function Tl(e, t, n, r) {
    var l = t.current, i = Ye(), s = Gt(l);
    return n = ja(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pt(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(l, t, s), e !== null && (gt(e, l, s, i), cl(e, l, s)), s;
  }
  function Rl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Fa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ro(e, t) {
    Fa(e, t), (e = e.alternate) && Fa(e, t);
  }
  function nd() {
    return null;
  }
  var Da = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function jo(e) {
    this._internalRoot = e;
  }
  jl.prototype.render = jo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    Tl(e, t, null, null);
  }, jl.prototype.unmount = jo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      an(function() {
        Tl(null, e, null, null);
      }), t[Ct] = null;
    }
  };
  function jl(e) {
    this._internalRoot = e;
  }
  jl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ks();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++) ;
      Ft.splice(n, 0, e), n === 0 && Es(e);
    }
  };
  function Ao(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Al(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Wa() {
  }
  function rd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var k = Rl(s);
          i.call(k);
        };
      }
      var s = Aa(t, r, e, 0, null, !1, !1, "", Wa);
      return e._reactRootContainer = s, e[Ct] = s.current, ar(e.nodeType === 8 ? e.parentNode : e), an(), s;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var f = r;
      r = function() {
        var k = Rl(h);
        f.call(k);
      };
    }
    var h = To(e, 0, !1, null, null, !1, !1, "", Wa);
    return e._reactRootContainer = h, e[Ct] = h.current, ar(e.nodeType === 8 ? e.parentNode : e), an(function() {
      Tl(t, h, n, r);
    }), h;
  }
  function Fl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var s = i;
      if (typeof l == "function") {
        var f = l;
        l = function() {
          var h = Rl(s);
          f.call(h);
        };
      }
      Tl(t, s, e, l);
    } else s = rd(n, t, e, l, r);
    return Rl(s);
  }
  Ss = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Yn(t.pendingLanes);
          n !== 0 && (ii(t, n | 1), be(t, ze()), (ue & 6) === 0 && (Fn = ze() + 500, Vt()));
        }
        break;
      case 13:
        an(function() {
          var r = It(e, 1);
          if (r !== null) {
            var l = Ye();
            gt(r, e, 1, l);
          }
        }), Ro(e, 1);
    }
  }, oi = function(e) {
    if (e.tag === 13) {
      var t = It(e, 134217728);
      if (t !== null) {
        var n = Ye();
        gt(t, e, 134217728, n);
      }
      Ro(e, 134217728);
    }
  }, ws = function(e) {
    if (e.tag === 13) {
      var t = Gt(e), n = It(e, t);
      if (n !== null) {
        var r = Ye();
        gt(n, e, t, r);
      }
      Ro(e, t);
    }
  }, ks = function() {
    return pe;
  }, xs = function(e, t) {
    var n = pe;
    try {
      return pe = e, t();
    } finally {
      pe = n;
    }
  }, Jl = function(e, t, n) {
    switch (t) {
      case "input":
        if ($l(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = el(r);
              if (!l) throw Error(o(90));
              Et(r), $l(r, l);
            }
          }
        }
        break;
      case "textarea":
        Zo(e, n);
        break;
      case "select":
        t = n.value, t != null && pn(e, !!n.multiple, t, !1);
    }
  }, os = zo, ss = an;
  var ld = { usingClientEntryPoint: !1, Events: [dr, En, el, ls, is, zo] }, Mr = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, id = { bundleType: Mr.bundleType, version: Mr.version, rendererPackageName: Mr.rendererPackageName, rendererConfig: Mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: oe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = fs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Mr.findFiberByHostInstance || nd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dl.isDisabled && Dl.supportsFiber) try {
      jr = Dl.inject(id), St = Dl;
    } catch {
    }
  }
  return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld, et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ao(t)) throw Error(o(200));
    return td(e, t, null, n);
  }, et.createRoot = function(e, t) {
    if (!Ao(e)) throw Error(o(299));
    var n = !1, r = "", l = Da;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = To(e, 1, !1, null, null, n, !1, r, l), e[Ct] = t.current, ar(e.nodeType === 8 ? e.parentNode : e), new jo(t);
  }, et.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = fs(t), e = e === null ? null : e.stateNode, e;
  }, et.flushSync = function(e) {
    return an(e);
  }, et.hydrate = function(e, t, n) {
    if (!Al(t)) throw Error(o(200));
    return Fl(null, e, t, !0, n);
  }, et.hydrateRoot = function(e, t, n) {
    if (!Ao(e)) throw Error(o(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", s = Da;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Aa(t, null, e, 1, n ?? null, l, !1, i, s), e[Ct] = t.current, ar(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new jl(t);
  }, et.render = function(e, t, n) {
    if (!Al(t)) throw Error(o(200));
    return Fl(null, e, t, !1, n);
  }, et.unmountComponentAtNode = function(e) {
    if (!Al(e)) throw Error(o(40));
    return e._reactRootContainer ? (an(function() {
      Fl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ct] = null;
      });
    }), !0) : !1;
  }, et.unstable_batchedUpdates = zo, et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Al(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return Fl(e, t, n, !1, r);
  }, et.version = "18.3.1-next-f1338f8080-20240426", et;
}
var qa;
function rc() {
  if (qa) return Wo.exports;
  qa = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (m) {
        console.error(m);
      }
  }
  return u(), Wo.exports = dd(), Wo.exports;
}
var Ya;
function hd() {
  if (Ya) return Wl;
  Ya = 1;
  var u = rc();
  return Wl.createRoot = u.createRoot, Wl.hydrateRoot = u.hydrateRoot, Wl;
}
var pd = hd(), md = rc();
function vd(u) {
  return typeof u == "object" ? u.key : u;
}
function gd(u, m) {
  const o = u.length;
  return new Proxy(u, {
    get(a, c, d) {
      if (typeof c == "string") {
        const g = c.charCodeAt(0);
        if (g >= 48 && g <= 57) {
          const v = +c;
          if (Number.isInteger(v) && v >= 0 && v < o) {
            let x = a[v];
            if (typeof x != "object") {
              const O = m[v * 2];
              x = a[v] = {
                index: v,
                key: x,
                start: O,
                size: m[v * 2 + 1],
                end: O + m[v * 2 + 1],
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
function Wn(u, m, o) {
  let a = o.initialDeps ?? [], c, d = !0;
  function g() {
    const v = u();
    return (v.length !== a.length || v.some((O, N) => a[N] !== O)) && (a = v, c = m(...v), o != null && o.onChange && !(d && o.skipInitialOnChange) && o.onChange(c), d = !1), c;
  }
  return g.updateDeps = (v) => {
    a = v;
  }, g;
}
function Ga(u, m) {
  if (u === void 0)
    throw new Error("Unexpected undefined");
  return u;
}
const hn = (u, m) => Math.abs(u - m) < 1.01, yd = (u, m, o) => {
  let a;
  return Object.assign(
    function(...c) {
      u.clearTimeout(a), a = u.setTimeout(() => m.apply(this, c), o);
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
  isScrolling: m,
  elementMax: o,
  holdOffset: a,
  scrollOffset: c,
  pendingWrite: d,
  clampedMaxAtWrite: g
}) {
  var v;
  return m && d === null && u === c ? "spurious" : d !== null && Math.abs(u - d.target) < 1.5 ? "readBack" : d !== null && !d.smooth && o !== null && d.target > o + a + 0.5 && Math.abs(u - (o + a)) < 1.5 || d !== null && !d.smooth && ((v = d.lowMaxes) != null && v.some((x) => Math.abs(u - x) < 1.5)) ? "clampedReadBack" : g !== null && Math.abs(u - g) < 1.5 ? "clampedEcho" : "external";
}
const wd = (u) => u === "smooth" || u === "smoothFinishing";
function kd({
  kind: u,
  offset: m,
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
  !wd(o.phase) && !hn(m, o.lastTargetOffset) && !hn(m, a()) && // A compensation write's clamped echo (#1258) keeps the command. The
  // order is deliberate, not tidiness: this clause stays after `target()`
  // (and `clampedReadBack` before it) because `target()` can rebuild the
  // measurements, so it must run for exactly the events it always did.
  u !== "clampedEcho";
}
const $o = 40;
function xd(u) {
  const m = u[u.length - 1];
  if (m === void 0) return !1;
  let o = u.length - 2;
  for (; o >= 0 && m.t - u[o].t < $o; ) o--;
  if (o < 0) return !1;
  const a = u[o];
  let c = o - 1;
  for (; c >= 0 && a.t - u[c].t < $o; ) c--;
  if (c < 0) return !1;
  const d = u[c], g = (m.offset - a.offset) / (m.t - a.t), v = (a.offset - d.offset) / (a.t - d.t);
  return g * v >= 0 && Math.abs(g) >= 2 * Math.abs(v) && Math.abs(g) - Math.abs(v) >= 0.8;
}
function _d(u) {
  const m = u[u.length - 1];
  if (m === void 0) return !1;
  let o = u.length - 2;
  for (; o >= 0 && m.t - u[o].t < $o; ) o--;
  if (o < 0) return !1;
  const a = u[o];
  return Math.abs(m.offset - a.offset) / (m.t - a.t) >= 0.05;
}
let Or;
const Vl = () => {
  if (Or !== void 0) return Or;
  if (typeof navigator > "u") return Or = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Or = !0;
  const u = navigator.maxTouchPoints;
  return Or = navigator.platform === "MacIntel" && u !== void 0 && u > 0;
};
let Ho;
const Ed = () => Ho !== void 0 ? Ho : Ho = Vl() && typeof CSS < "u" && typeof CSS.supports == "function" && CSS.supports("overflow-anchor: auto"), Cd = () => !Vl() || Ed(), Un = {
  capture: !0,
  passive: !0
};
class Md {
  constructor(m) {
    this.host = m, this._touch = null, this.inMotion = () => this._touch !== null && this._touch.phase !== "lateFling", this.dragging = () => {
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
      var g, v, x;
      return o && ((g = this._touch) == null ? void 0 : g.phase) === "tail" ? this._openTail(this._touch.moved || !a, !1) : ((v = this._touch) == null ? void 0 : v.phase) === "lateFling" && (this.host.now() > this._touch.until ? this._touch = null : d && o && c && this._openTail(!0, !1)), !a && o && c && ((x = this._touch) == null ? void 0 : x.phase) === "down" ? (this._touch.moved = !0, !0) : !1;
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
      return o.addEventListener("touchstart", a, Un), o.addEventListener("touchend", c, Un), o.addEventListener("touchcancel", c, Un), () => {
        o.removeEventListener(
          "touchstart",
          a,
          Un
        ), o.removeEventListener("touchend", c, Un), o.removeEventListener(
          "touchcancel",
          c,
          Un
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
const Xa = (u) => {
  const { clientWidth: m, clientHeight: o } = u;
  return { width: m, height: o };
}, lc = (u) => {
  const m = /* @__PURE__ */ new Set();
  return {
    schedule: (o) => {
      const a = u.requestAnimationFrame(() => {
        m.delete(a), o();
      });
      m.add(a);
    },
    cancel: () => {
      m.forEach((o) => u.cancelAnimationFrame(o)), m.clear();
    }
  };
}, zd = (u) => u, Od = (u) => {
  const m = u.overscan * Math.max(u.lanes ?? 1, 1), o = Math.max(u.startIndex - m, 0), c = Math.min(u.endIndex + m, u.count - 1) - o + 1, d = new Array(c);
  for (let g = 0; g < c; g++)
    d[g] = o + g;
  return d;
}, Id = (u, m) => {
  const o = u.scrollElement;
  if (!o)
    return;
  const a = u.targetWindow;
  if (!a)
    return;
  const c = (v) => {
    const { width: x, height: O } = v;
    m({ width: Math.round(x), height: Math.round(O) });
  };
  if (c(Xa(o)), !a.ResizeObserver)
    return () => {
    };
  const d = lc(a), g = new a.ResizeObserver(() => {
    const v = () => {
      c(Xa(o));
    };
    u.options.useAnimationFrameWithResizeObserver ? d.schedule(v) : v();
  });
  return g.observe(o, { box: "content-box" }), () => {
    g.unobserve(o), d.cancel();
  };
}, Za = {
  passive: !0
}, Pd = typeof window > "u" ? !0 : "onscrollend" in window, Nd = (u, m, o) => {
  const a = u.scrollElement;
  if (!a)
    return;
  const c = u.targetWindow;
  if (!c)
    return;
  const d = u.options.useScrollendEvent && Pd;
  let g = 0;
  const v = d ? null : yd(
    c,
    () => m(o(a), !1),
    u.options.isScrollingResetDelay
  ), x = (_) => () => {
    g = o(a), v == null || v(), m(g, _);
  }, O = x(!0), N = x(!1);
  return a.addEventListener("scroll", O, Za), d && a.addEventListener("scrollend", N, Za), () => {
    a.removeEventListener("scroll", O), d && a.removeEventListener("scrollend", N), v == null || v.cancel();
  };
}, Ld = (u, m) => Nd(u, m, (o) => {
  const { horizontal: a, isRtl: c } = u.options;
  return a ? o.scrollLeft * (c && -1 || 1) : o.scrollTop;
}), Td = (u, m, o) => {
  if (o.options.useCachedMeasurements) {
    const a = o.indexFromElement(u), c = o.options.getItemKey(a);
    return o.itemSizeCache.get(c) ?? o.options.estimateSize(a);
  }
  if (m != null && m.borderBoxSize) {
    const a = m.borderBoxSize[0];
    if (a)
      return Math.round(
        a[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!m) {
    const a = o.indexFromElement(u), c = o.options.getItemKey(a), d = o.itemSizeCache.get(c);
    if (d !== void 0)
      return d;
  }
  return u[o.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Rd = (u, {
  adjustments: m = 0,
  behavior: o
}, a) => {
  var c;
  const { scrollElement: d, options: g } = a, v = u + m, x = g.horizontal && g.isRtl && d !== null && "ownerDocument" in d;
  (c = d == null ? void 0 : d.scrollTo) == null || c.call(d, {
    [g.horizontal ? "left" : "top"]: x ? -v : v,
    behavior: o
  });
}, jd = Rd, Ja = (u, m) => u === "smooth" ? m ? "smoothLanded" : "smooth" : "instant", Ir = (u) => (u == null ? void 0 : u.phase) === "smooth" || (u == null ? void 0 : u.phase) === "smoothLanded";
function Ad(u, m, o, a) {
  if (m === 0) return !1;
  const c = a(0), d = /* @__PURE__ */ new Set();
  let g = 0;
  for (; g < u; ) {
    const x = o(g);
    if (x === c) break;
    d.add(x), g++;
  }
  const v = u - g;
  if (v === 0 || v >= m) return !1;
  for (let x = 0; x < v; x++)
    if (a(x) !== o(g + x)) return !1;
  for (let x = v; x < m; x++)
    if (d.has(a(x))) return !1;
  return !0;
}
class Fd {
  constructor(m) {
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
      const g = /* @__PURE__ */ new Set(), v = () => {
        if (o)
          return o;
        const O = this.targetWindow;
        if (!O || !O.ResizeObserver)
          return null;
        const N = a = lc(O);
        return o = new O.ResizeObserver((_) => {
          const T = () => {
            const B = { sync: !1 };
            this._resizeBatch = B;
            try {
              _.forEach(x);
            } finally {
              this._resizeBatch = null, B.notify && (this.notify(B.sync), this._noteClampMax(), this._flushHoldIfReady(!0), this._retryClampedAdjustment(), this.measureElement(null));
            }
          };
          if (this.options.useAnimationFrameWithResizeObserver)
            N.schedule(T);
          else {
            c = !0;
            try {
              T();
            } finally {
              c = !1;
            }
          }
        });
      }, x = (O) => {
        const N = O.target, _ = this.indexFromElement(N);
        if (!N.isConnected) {
          this.observer.unobserve(N);
          for (const [T, B] of this.elementsCache)
            if (B === N) {
              this.elementsCache.delete(T);
              break;
            }
          return;
        }
        this.isIndexInRange(_) && this.shouldMeasureDuringScroll(_) && this.resizeItem(_, this.options.measureElement(N, O, this));
      };
      return {
        disconnect: () => {
          var O;
          (O = v()) == null || O.disconnect(), a == null || a.cancel(), g.clear(), d = !1, o = null, a = null;
        },
        observe: (O) => {
          const N = v();
          if (N) {
            if (!c) {
              N.observe(O, { box: "border-box" });
              return;
            }
            g.add(O), d || (d = !0, a == null || a.schedule(() => {
              d = !1, g.forEach((_) => {
                _.isConnected && (o == null || o.observe(_, { box: "border-box" }));
              }), g.clear();
            }));
          }
        },
        unobserve: (O) => {
          var N;
          g.delete(O), (N = v()) == null || N.unobserve(O);
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
        rangeExtractor: Od,
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
      for (const N in o) {
        const _ = o[N];
        _ !== void 0 && (c[N] = _);
      }
      const d = this.options;
      let g = null, v = null, x = !1;
      if (d !== void 0 && d.enabled && c.enabled && c.anchorTo === "end" && this.scrollElement !== null) {
        const N = d.count, _ = c.count, T = this.getMeasurements(), B = ((a = this._singleLaneMeasurements) == null ? void 0 : a.items) ?? T, $ = (C) => vd(B[C]), j = N > 0 ? $(0) : null, q = N > 0 ? $(N - 1) : null;
        if (_ !== N || N > 0 && _ > 0 && (c.getItemKey(0) !== j || c.getItemKey(_ - 1) !== q)) {
          x = !0;
          const C = N > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? T[0] : null;
          C && (g = [C.key, this.getScrollOffset() - C.start]);
          const oe = c.followOnAppend === !0 ? "auto" : c.followOnAppend || null;
          oe && _ > 0 && this.isAtEnd(d.scrollEndThreshold) && (N === 0 || c.getItemKey(_ - 1) !== q) && (_ > N || Ad(
            N,
            _,
            $,
            c.getItemKey
          )) && (v = oe);
        }
      }
      this.options = c, x && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let O = null;
      if (g && this.scrollOffset !== null && !this._awaitingCommandReadBack()) {
        const [N, _] = g, T = this.getMeasurements(), { count: B, getItemKey: $ } = this.options;
        let j = 0;
        for (; j < B && $(j) !== N; )
          j++;
        if (j < B) {
          const q = T[j];
          if (q) {
            const ee = Math.max(0, q.start + _);
            !v && ee !== this.scrollOffset && (O = ee - this.scrollOffset, this.scrollOffset = ee);
          }
        }
      }
      v ? this.pendingScrollAnchor = { kind: "follow", behavior: v } : O !== null && (this._canWriteScroll() ? this.pendingScrollAnchor = { kind: "anchor", delta: O } : (this._holdOffset += O, this._followOffsetTarget(O)));
    }, this.notify = (o) => {
      var a, c;
      (c = (a = this.options).onChange) == null || c.call(a, this, o);
    }, this.maybeNotify = Wn(
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
            var v, x, O, N;
            const _ = g ? this._elementMaxScrollOffset() : null, T = this._reportedOverscroll;
            this._reportedOverscroll = d < 0 || _ !== null && d > _ + 1;
            const B = d;
            this._lastElementOffset = B, d = this._toLayoutOffset(d);
            const $ = this._classifyScrollEvent(
              d,
              g,
              _
            );
            if ($ === "spurious") return;
            $ === "readBack" ? d = this.pendingWrite.target : $ === "clampedReadBack" && ((v = this.scrollState) == null ? void 0 : v.index) != null && // Not `elementMax`: an adapter can report the read-back at rest.
            d < this.getMaxScrollOffset() - 1.5 ? this.scrollState.lastTargetOffset = d : kd({
              kind: $,
              offset: d,
              command: this.scrollState,
              target: () => this.getScrollStateTarget(this.scrollState)
            }) && (this.scrollState = null), this.pendingWrite = null, this._clampedAdjustment !== null && Math.abs(d - this._clampedAdjustment.maxAtWrite) >= 1.5 && (this._clampedAdjustment = null);
            const j = this.getScrollOffset(), q = this.scrollDirection;
            this.scrollDirection = g ? j === d ? this.scrollDirection : j < d ? "forward" : "backward" : null, this.scrollOffset = d, this.isScrolling = g;
            const ee = this.scrollState;
            if ((ee == null ? void 0 : ee.phase) === "queued" && $ === "external" && g)
              if (T || this._reportedOverscroll)
                ee.samples = [];
              else {
                const Y = this.now();
                ee.samples = [
                  ...(ee.samples ?? []).filter(
                    (C) => Y - C.t <= 200
                  ),
                  { t: Y, offset: B }
                ], (q !== null && this.scrollDirection !== q || xd(ee.samples)) && (this.scrollState = null);
              }
            this._iosGesture.onScroll({
              isScrolling: g,
              ownReadBack: $ === "readBack",
              moved: d !== j,
              // Neither our write's read-back nor a frame of our smooth
              // animation: the user or a fling moved it.
              external: $ === "external" && ((x = this.scrollState) == null ? void 0 : x.phase) !== "smooth" && ((O = this.scrollState) == null ? void 0 : O.phase) !== "smoothFinishing"
            }) && // The user scrolls: a command still waiting for the tail is
            // theirs to override, like a written one would be.
            ((N = this.scrollState) == null ? void 0 : N.phase) === "queued" && (this.scrollState = null), this._flushHoldIfReady(!0), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement && this.unsubs.push(
          this._iosGesture.listen(this.scrollElement)
        ), this._scrollToOffset(this.getScrollOffset());
      }
      this._noteClampMax();
      const c = this.pendingScrollAnchor;
      this.pendingScrollAnchor = null, c && this.scrollElement && this.options.enabled && (c.kind === "anchor" ? this._canWriteScroll() ? Ir(this.scrollState) && !hn(
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
      o.lastTargetOffset = c, this._clampedAdjustment = null, o.phase = Ja(
        a,
        o.index != null && hn(c, this.getScrollOffset())
      ), this._scrollToOffset(c, { behavior: a }), this.scheduleScrollReconcile();
    }, this._readElementOffset = () => {
      const o = this.scrollElement;
      if (o == null) return null;
      const { horizontal: a, isRtl: c } = this.options;
      return typeof o.scrollTop == "number" ? a ? o.scrollLeft * (c && -1 || 1) : o.scrollTop : typeof o.scrollY == "number" ? a ? o.scrollX : o.scrollY : null;
    }, this._canWriteScroll = () => !(Vl() && this._iosGesture.inMotion()) && !this._reportedOverscroll, this._flushHoldIfReady = (o) => {
      var a;
      if (this._holdOffset === 0 || !this.scrollElement || !this.options.enabled || !this._canWriteScroll() || ((a = this.scrollState) == null ? void 0 : a.phase) === "smooth") return;
      this._holdOffset = 0, this.scrollOffset !== null && this.scrollOffset < 0 && (this.scrollOffset = 0), this.notify(o);
      const c = this.getCommandWrittenOffset() ?? this.getScrollOffset();
      this._clampedAdjustment = this._clampedBy(c), this._scrollToOffset(c);
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Wn(
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
      (o, a, c, d, g, v, x, O) => (this.prevLanes !== void 0 && this.prevLanes !== v && (this.lanesChangedFlag = !0), this.prevLanes = v, this.pendingMin = null, {
        count: o,
        paddingStart: a,
        scrollMargin: c,
        getItemKey: d,
        enabled: g,
        lanes: v,
        laneAssignmentMode: x,
        gap: O
      }),
      {
        key: !1
      }
    ), this.isIndexInRange = (o) => o >= 0 && o < this.options.count, this.getMeasurements = Wn(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: o,
        paddingStart: a,
        scrollMargin: c,
        getItemKey: d,
        enabled: g,
        lanes: v,
        laneAssignmentMode: x,
        gap: O
      }, N) => {
        var _;
        const T = this.itemSizeCache;
        if (!g)
          return this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > o)
          for (const Y of this.laneAssignments.keys())
            Y >= o && this.laneAssignments.delete(Y);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this._singleLaneMeasurements = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((Y) => {
          this.itemSizeCache.set(Y.key, Y.size);
        }));
        const B = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === o && (this.lanesSettling = !1), v === 1) {
          const Y = o * 2;
          let C = (_ = this._singleLaneMeasurements) == null ? void 0 : _.flat;
          if (!C || C.length < Y) {
            const b = new Float64Array(Y);
            C && B > 0 && b.set(C.subarray(0, B * 2)), C = b;
          }
          const oe = B === 0 ? new Array(o) : this._singleLaneMeasurements.items.slice();
          let he;
          if (B === 0)
            he = a + c;
          else {
            const b = B - 1;
            he = C[b * 2] + C[b * 2 + 1] + O;
          }
          for (let b = B; b < o; b++) {
            const Ee = d(b);
            oe[b] = Ee;
            const Re = T.get(Ee), Ie = typeof Re == "number" ? Re : this.options.estimateSize(b);
            C[b * 2] = he, C[b * 2 + 1] = Ie, he += Ie + O;
          }
          this._singleLaneMeasurements = { flat: C, items: oe };
          const de = gd(oe, C);
          return this.measurementsCache = de, de;
        }
        const $ = this.measurementsCache.slice(0, B), j = new Array(v).fill(
          void 0
        ), q = new Float64Array(v);
        let ee = 0;
        for (let Y = 0; Y < B; Y++) {
          const C = $[Y];
          C && (j[C.lane] === void 0 && ee++, j[C.lane] = Y, q[C.lane] = C.end);
        }
        for (let Y = B; Y < o; Y++) {
          const C = d(Y), oe = this.laneAssignments.get(Y);
          let he, de;
          const b = x === "estimate" || T.has(C);
          if (oe !== void 0 && this.options.lanes > 1) {
            he = oe;
            const De = j[he], ye = De !== void 0 ? $[De] : void 0;
            de = ye ? ye.end + O : a + c;
          } else if (ee === v) {
            let De = 0, ye = q[0], Pe = j[0];
            for (let Me = 1; Me < v; Me++) {
              const We = q[Me];
              (We < ye || We === ye && j[Me] < Pe) && (De = Me, ye = We, Pe = j[Me]);
            }
            he = De, de = ye + O, b && this.laneAssignments.set(Y, he);
          } else
            he = Y % this.options.lanes, de = a + c, b && this.laneAssignments.set(Y, he);
          const Ee = T.get(C), Re = typeof Ee == "number" ? Ee : this.options.estimateSize(Y), Ie = de + Re;
          $[Y] = {
            index: Y,
            start: de,
            size: Re,
            end: Ie,
            key: C,
            lane: he
          }, j[he] === void 0 && ee++, j[he] = Y, q[he] = Ie;
        }
        return this.measurementsCache = $, $;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Wn(
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
        const v = Math.max(g - a, 0);
        return this.range = Wd(
          o,
          a,
          Math.min(c, v),
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
    ), this.getVirtualIndexes = Wn(
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
      (o, a, c, d, g, v) => d === null || g === null ? [] : o({
        startIndex: d,
        endIndex: g,
        overscan: a,
        count: c,
        lanes: v
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
      if (!Ir(this.scrollState))
        return !0;
      const c = this.scrollState.index ?? ((a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : a.index);
      if (c !== void 0 && this.range) {
        const d = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), g = Math.max(0, c - d), v = Math.min(
          this.options.count - 1,
          c + d
        );
        return o >= g && o <= v;
      }
      return !0;
    }, this.measureElement = (o) => {
      if (!o) {
        this.elementsCache.forEach((g, v) => {
          g.isConnected || (this.observer.unobserve(g), this.elementsCache.delete(v));
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
      let v, x, O;
      const N = (d = this._singleLaneMeasurements) == null ? void 0 : d.flat;
      if (this.options.lanes === 1 && N != null)
        O = this.options.getItemKey(o), x = N[o * 2], v = N[o * 2 + 1];
      else {
        const B = this.measurementsCache[o];
        if (!B) return;
        O = B.key, x = B.start, v = B.size;
      }
      const _ = this.itemSizeCache.get(O) ?? v, T = a - _;
      if (T !== 0) {
        const B = this.options.anchorTo === "end" && !Ir(this.scrollState) && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, $ = B ? this._getLayoutTotalSize() : 0, j = this.getScrollOffset(), ee = !this.itemSizeCache.has(O) ? (
          // First measurement: compensate any item whose top sits above the
          // fold — the estimate→actual delta must be corrected regardless of
          // scroll direction, since the whole estimated block was above it.
          x < j
        ) : (
          // Re-measurement: only compensate an item that is ENTIRELY above the
          // fold. An item that merely *spans* the fold (top above, bottom
          // below — e.g. a streaming chat message growing at its bottom)
          // changes size *below* the anchor point, so shifting scrollTop by the
          // delta would drag the viewport downward on every growth (#1218).
          // Also skip during backward scroll to avoid the "items jump while
          // scrolling up" cascade.
          x + _ <= j && this.scrollDirection !== "backward"
        ), Y = !Ir(this.scrollState) && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[o] ?? {
            index: o,
            key: O,
            start: x,
            size: v,
            end: x + v,
            lane: 0
          },
          T,
          this
        ) : ee);
        (this.pendingMin === null || o < this.pendingMin) && (this.pendingMin = o), this.itemSizeCache.set(O, a), this.itemSizeCacheVersion++;
        let C = !1;
        if (this._awaitingCommandReadBack() || (B ? C = this.applyScrollAdjustment(
          this._getLayoutTotalSize() - $
        ) : Y && (C = this.applyScrollAdjustment(T))), this._resizeBatch) {
          this._resizeBatch.notify = !0, (g = this._resizeBatch).sync || (g.sync = C);
          return;
        }
        this.notify(C), this._noteClampMax(), this._flushHoldIfReady(!0), this._retryClampedAdjustment();
      }
    }, this.getVirtualItems = Wn(
      () => [this.getVirtualIndexes(), this.getMeasurements(), this._holdOffset],
      (o, a, c) => {
        const d = [];
        for (let g = 0, v = o.length; g < v; g++) {
          const x = o[g], O = a[x];
          d.push(
            c === 0 ? O : {
              ...O,
              start: O.start - c,
              end: O.end - c
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
      const d = (a = this._singleLaneMeasurements) == null ? void 0 : a.flat, g = this.options.lanes === 1 && d != null, v = ic(
        0,
        c.length - 1,
        g ? (x) => d[x * 2] : (x) => Ga(c[x]).start,
        o
      );
      return Ga(c[v]);
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
      const { style: g } = d, v = this.options.horizontal ? "overflow-x" : "overflow-y", x = g.getPropertyValue(v), O = g.getPropertyPriority(v), N = () => this.options.horizontal ? d.clientHeight : d.clientWidth, _ = N();
      if (g.setProperty(v, "hidden", "important"), N() !== _) {
        g.setProperty(v, x, O);
        return;
      }
      const T = {
        // False when the app replaced the hidden value: the fling may not
        // have stopped.
        restore: () => g.getPropertyValue(v) !== "hidden" || g.getPropertyPriority(v) !== "important" ? !1 : (g.setProperty(v, x, O), !0),
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
      const v = this.getMaxScrollOffset();
      return Math.max(Math.min(v, o), 0);
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
        const x = this.getMaxScrollOffset(), O = x - this.options.paddingEnd + this.options.scrollPaddingEnd;
        return [Math.max(Math.min(O, x), 0), a];
      }
      const v = a === "end" ? g.end + this.options.scrollPaddingEnd : g.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(v, a, g.size),
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
      const [g, v] = d;
      this._startScroll({ index: o, align: v }, g, c, "absolute");
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
        const g = c.length - 1, v = (o = this._singleLaneMeasurements) == null ? void 0 : o.flat;
        v != null ? d = v[g * 2] + v[g * 2 + 1] : d = ((a = c[g]) == null ? void 0 : a.end) ?? 0;
      } else {
        const g = Array(this.options.lanes).fill(null);
        let v = c.length - 1;
        for (; v >= 0 && g.some((x) => x === null); ) {
          const x = c[v];
          g[x.lane] === null && (g[x.lane] = x.end), v--;
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
      return !(Vl() && this._iosGesture.dragging()) && o !== null && !hn(o, this.getScrollOffset());
    }, this._followOffsetTarget = (o) => {
      this.scrollState !== null && this.scrollState.index == null && (this.scrollState.lastTargetOffset += o);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(m);
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
  applyScrollAdjustment(m, o) {
    if (m === 0) return !1;
    if (this._followOffsetTarget(m), this._canWriteScroll()) {
      const a = this.getScrollOffset();
      this._clampedAdjustment = this._clampedBy(a + m);
      const c = this._scrollToOffset(a, {
        adjustments: m,
        behavior: o
      });
      return this.scrollOffset !== null && (this.pendingWrite === c && (this.scrollOffset += m), this.scrollOffset < 0 && (this.scrollOffset = 0)), !0;
    } else
      return this._holdOffset += m, this.scrollOffset !== null && (this.scrollOffset += m), !0;
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
  getScrollStateTarget(m) {
    const o = m.toEnd ? [Math.max(this.getMaxScrollOffset(), 0)] : m.index != null ? this.getOffsetForIndex(m.index, m.align) : void 0;
    return o ? o[0] : m.lastTargetOffset;
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
    if (!d && hn(a, this.getScrollOffset())) {
      if (this.scrollState.phase === "smooth" ? this.scrollState.phase = "smoothLanded" : this.scrollState.phase === "smoothFinishing" && (this.scrollState.phase = "instant"), this.scrollState.stableFrames++, this.scrollState.stableFrames >= c) {
        this.getScrollOffset() !== a && this._scrollToOffset(a, { behavior: "auto" }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, d) {
      const g = this.getSize() || 600, v = Math.abs(a - this.getScrollOffset()), x = Ir(this.scrollState) && v > g;
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
  _startScroll(m, o, a, c) {
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
          ...m,
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
      ...m,
      startedAt: this.now(),
      lastTargetOffset: o,
      stableFrames: 0,
      behavior: a,
      phase: Ja(
        a,
        m.index != null && hn(o, this.getScrollOffset())
      )
    }, this._scrollToOffset(o, { behavior: a }), this.scheduleScrollReconcile();
  }
}
const ic = (u, m, o, a) => {
  for (; u <= m; ) {
    const c = (u + m) / 2 | 0, d = o(c);
    if (d < a)
      u = c + 1;
    else if (d > a)
      m = c - 1;
    else
      return c;
  }
  return u > 0 ? u - 1 : 0;
};
function Dd(u, m, o) {
  let a = 0;
  for (; a <= m; ) {
    const c = (a + m) / 2 | 0, d = u[c * 2];
    if (d < o)
      a = c + 1;
    else if (d > o)
      m = c - 1;
    else
      return c;
  }
  return a > 0 ? a - 1 : 0;
}
function Wd(u, m, o, a, c) {
  const d = u.length - 1;
  if (u.length <= a)
    return { startIndex: 0, endIndex: d };
  if (a === 1 && c !== null) {
    const O = Dd(
      c,
      d,
      o
    );
    let N = O;
    const _ = o + m;
    for (; N < d && c[N * 2] + c[N * 2 + 1] < _; )
      N++;
    return { startIndex: O, endIndex: N };
  }
  let v = ic(0, d, (O) => u[O].start, o), x = v;
  if (a === 1)
    for (; x < d && u[x].end < o + m; )
      x++;
  else if (a > 1) {
    const O = Array(a).fill(0);
    for (; x < d && O.some((_) => _ < o + m); ) {
      const _ = u[x];
      O[_.lane] = _.end, x++;
    }
    const N = Array(a).fill(o + m);
    for (; v >= 0 && N.some((_) => _ >= o); ) {
      const _ = u[v];
      N[_.lane] = _.start, v--;
    }
    v = Math.max(0, v - v % a), x = Math.min(d, x + (a - 1 - x % a));
  }
  return { startIndex: v, endIndex: x };
}
const Vo = typeof document < "u" ? le.useLayoutEffect : le.useEffect;
function Ud({
  useFlushSync: u = !0,
  directDomUpdates: m = !1,
  directDomUpdatesMode: o = "transform",
  ...a
}) {
  const c = le.useReducer((T) => T + 1, 0)[1], d = le.useRef({
    enabled: m,
    mode: o,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  d.current.enabled = m, d.current.mode = o;
  const g = le.useRef(!1), v = (T) => {
    const B = d.current;
    if (!B.enabled || !B.container) return;
    const $ = T.getTotalSize();
    if ($ !== B.lastSize) {
      B.lastSize = $;
      const j = T.options.horizontal ? "width" : "height";
      B.container.style[j] = `${$}px`;
    }
  }, x = (T, B, $) => {
    const j = d.current, q = !!T.options.horizontal, ee = B.start - T.options.scrollMargin;
    j.lastPositions.get($) !== ee && (j.lastPositions.set($, ee), j.mode === "transform" ? $.style.transform = q ? `translate3d(${ee}px, 0, 0)` : `translate3d(0, ${ee}px, 0)` : $.style[q ? "left" : "top"] = `${ee}px`);
  }, O = (T) => {
    const B = d.current;
    if (!(!B.enabled || !B.container)) {
      v(T);
      for (const $ of T.getVirtualItems()) {
        const j = T.elementsCache.get($.key);
        j && x(T, $, j);
      }
    }
  }, N = {
    ...a,
    onChange: (T, B) => {
      var $;
      const j = d.current;
      let q = !0;
      if (j.enabled) {
        O(T);
        const ee = T.range, Y = j.prevRange;
        q = !Y || Y.isScrolling !== T.isScrolling || Y.startIndex !== (ee == null ? void 0 : ee.startIndex) || Y.endIndex !== (ee == null ? void 0 : ee.endIndex), q && (j.prevRange = ee ? {
          startIndex: ee.startIndex,
          endIndex: ee.endIndex,
          isScrolling: T.isScrolling
        } : null);
      }
      q && (u && B && !g.current ? md.flushSync(c) : c()), ($ = a.onChange) == null || $.call(a, T, B);
    }
  }, [_] = le.useState(() => {
    const T = new Fd(N), B = T.measureElement;
    return T.measureElement = ($) => {
      g.current = !0;
      try {
        B($);
      } finally {
        g.current = !1;
      }
      const j = d.current;
      if ($ !== null && j.enabled && j.container) {
        const q = T.measurementsCache[T.indexFromElement($)];
        q && x(T, q, $);
      }
    }, Object.assign(T, {
      containerRef: ($) => {
        const j = d.current;
        j.container = $, j.lastSize = null, $ !== null && O(T);
      }
    });
  });
  return _.setOptions(N), Vo(() => _._didMount(), []), Vo(() => (v(_), _._willUpdate())), Vo(() => {
    O(_);
  }), _;
}
function Bd(u) {
  return Ud({
    observeElementRect: Id,
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
const Hd = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oc = (...u) => u.filter((m, o, a) => !!m && m.trim() !== "" && a.indexOf(m) === o).join(" ").trim();
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
const $d = le.forwardRef(
  ({
    color: u = "currentColor",
    size: m = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: a,
    className: c = "",
    children: d,
    iconNode: g,
    ...v
  }, x) => le.createElement(
    "svg",
    {
      ref: x,
      ...Vd,
      width: m,
      height: m,
      stroke: u,
      strokeWidth: a ? Number(o) * 24 / Number(m) : o,
      className: oc("lucide", c),
      ...v
    },
    [
      ...g.map(([O, N]) => le.createElement(O, N)),
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
const ae = (u, m) => {
  const o = le.forwardRef(
    ({ className: a, ...c }, d) => le.createElement($d, {
      ref: d,
      iconNode: m,
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
const Qd = ae("Archive", [
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
const ba = ae("Box", [
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
const Kd = ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = ae("CircleAlert", [
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
const ec = ae("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gd = ae("CircleX", [
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
const sc = ae("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = ae("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = ae("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = ae("Database", [
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
const bd = ae("Download", [
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
const uc = ae("Ellipsis", [
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
const eh = ae("ExternalLink", [
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
const th = ae("Eye", [
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
const nh = ae("FileText", [
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
const rh = ae("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = ae("FolderOpen", [
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
const ih = ae("Folder", [
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
const oh = ae("Info", [
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
const sh = ae("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uh = ae("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ah = ae("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = ae("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fh = ae("Pencil", [
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
const dh = ae("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hh = ae("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ph = ae("RefreshCw", [
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
const mh = ae("Server", [
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
const vh = ae("Settings", [
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
const gh = ae("Table2", [
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
const yh = ae("Trash2", [
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
const Sh = ae("TriangleAlert", [
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
  box: ba,
  bucket: ba,
  check: ec,
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
  success: ec,
  table: gh,
  trash: yh,
  unlock: uh,
  warning: Sh
};
function Bn({ name: u, size: m = 15 }) {
  const o = u && wh[u.toLowerCase()] || sc;
  return /* @__PURE__ */ U.jsx(o, { "aria-hidden": !0, size: m, strokeWidth: 1.8 });
}
function kh(u) {
  const m = /* @__PURE__ */ new Map();
  for (const o of u)
    for (const a of o.nodes) m.set(a.id, o.parentId);
  return m;
}
function Qo(u, m, o) {
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let d = o.get(u);
  for (; d != null && !c.has(d); )
    a.add(d), c.add(d), d = o.get(d);
  for (let g = m.length - 1; g >= 0; g -= 1) {
    const v = m[g];
    if (v && (v.scope === "all" || v.nodeId === u || v.cascade && v.nodeId !== null && a.has(v.nodeId)))
      return v.selected;
  }
  return !1;
}
function tc(u, m) {
  const o = [], a = /* @__PURE__ */ new Set();
  let c = m.get(u);
  for (; c != null && !a.has(c); )
    o.push(c), a.add(c), c = m.get(c);
  return o.reverse();
}
function xh(u, m) {
  const o = /* @__PURE__ */ new Map();
  for (const g of m) {
    if (g.parentId === null) continue;
    const v = o.get(g.parentId) ?? [];
    v.push(...g.nodes.map((x) => x.id)), o.set(g.parentId, v);
  }
  const a = [], c = /* @__PURE__ */ new Set(), d = [...o.get(u) ?? []];
  for (; d.length > 0; ) {
    const g = d.pop();
    !g || c.has(g) || (c.add(g), a.push(g), d.push(...o.get(g) ?? []));
  }
  return a;
}
function _h(u, m, o, a) {
  const c = [u, ...xh(u, m)].map(
    (d) => Qo(d, o, a)
  );
  return c.some(Boolean) && c.some((d) => !d);
}
function nc(u, m) {
  return [
    ...u.filter(
      (o) => o.scope !== m.scope || m.scope === "node" && o.nodeId !== m.nodeId
    ),
    m
  ];
}
function Eh(u) {
  var o, a;
  let m = -1;
  for (let c = u.length - 1; c >= 0; c -= 1)
    if (((o = u[c]) == null ? void 0 : o.scope) === "all") {
      m = c;
      break;
    }
  return m < 0 || !((a = u[m]) != null && a.selected) ? !1 : !u.slice(m + 1).some((c) => {
    if (c.scope !== "node" || c.nodeId === null) return !1;
    const d = new Set(c.ancestorIds);
    for (let g = u.length - 1; g >= 0; g -= 1) {
      const v = u[g];
      if (v && (v.scope === "all" || v.nodeId === c.nodeId || v.cascade && v.nodeId !== null && d.has(v.nodeId)))
        return !v.selected;
    }
    return !0;
  });
}
const Hl = (u) => u ?? "__root__";
function Ch(u) {
  const m = /* @__PURE__ */ new Map();
  for (const o of u) {
    const a = Hl(o.parentId), c = m.get(a) ?? [];
    c.push(o), m.set(a, c);
  }
  return m;
}
function Mh(u) {
  const m = Ch(u.pages), o = [], a = /* @__PURE__ */ new Set(), c = (d, g) => {
    const v = m.get(Hl(d));
    if (!v || v.length === 0) {
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
    for (const N of v) {
      if (N.error) {
        o.push({
          type: "page",
          key: `error:${Hl(d)}:${N.cursor ?? "first"}`,
          parentId: d,
          depth: g,
          page: N,
          reason: "error"
        });
        continue;
      }
      for (const _ of N.nodes)
        a.has(_.id) || (a.add(_.id), o.push({
          type: "node",
          key: `node:${_.id}`,
          node: _,
          parentId: d,
          depth: g
        }), _.expandable && u.expandedIds.has(_.id) && c(_.id, g + 1));
    }
    const x = v[v.length - 1];
    if (!x || x.error) return;
    (x.nextCursor !== null || u.mode === "paged" && u.hasPrevious(d)) && o.push({
      type: "page",
      key: `page:${Hl(d)}:${x.cursor ?? "first"}`,
      parentId: d,
      depth: g,
      page: x,
      reason: u.cacheLimited && u.mode === "load_more" ? "limit" : "navigation"
    });
  };
  return c(null, 0), o;
}
const Pr = (u) => u ?? "__root__", Ul = () => {
  var u, m;
  return ((m = (u = globalThis.crypto) == null ? void 0 : u.randomUUID) == null ? void 0 : m.call(u)) ?? `${Date.now()}-${Math.random()}`;
}, ac = (u, m) => u.length === m.length && u.every((o, a) => o === m[a]), zh = (u, m) => u.length === m.length && u.every((o, a) => {
  const c = m[a];
  return c !== void 0 && o.nodeId === c.nodeId && o.scope === c.scope && o.selected === c.selected && o.cascade === c.cascade && ac(o.ancestorIds, c.ancestorIds);
});
function Oh({ data: u, setStateValue: m, setTriggerValue: o }) {
  const [a, c] = le.useState(
    u.initialSelectionRules
  ), [d, g] = le.useState(u.initialExpandedIds), [v, x] = le.useState(null), [O, N] = le.useState(null), [_, T] = le.useState(!1), [B, $] = le.useState(void 0), [j, q] = le.useState({}), ee = le.useRef(null);
  le.useEffect(() => {
    c(
      (E) => zh(E, u.initialSelectionRules) ? E : u.initialSelectionRules
    ), g(
      (E) => ac(E, u.initialExpandedIds) ? E : u.initialExpandedIds
    ), $(void 0);
  }, [u.initialExpandedIds, u.initialSelectionRules, u.pages]);
  const Y = le.useMemo(() => new Set(d), [d]), C = le.useMemo(() => kh(u.pages), [u.pages]), oe = le.useMemo(
    () => new Map(u.actions.map((E) => [E.id, E])),
    [u.actions]
  ), he = le.useCallback(
    (E) => {
      var R;
      return (((R = j[Pr(E)]) == null ? void 0 : R.length) ?? 0) > 0;
    },
    [j]
  ), de = le.useMemo(
    () => Mh({
      pages: u.pages,
      expandedIds: Y,
      mode: u.pagination.mode,
      hasPrevious: he,
      cacheLimited: u.cacheLimited
    }),
    [u.cacheLimited, u.pages, u.pagination.mode, Y, he]
  ), b = le.useMemo(
    () => de.filter((E) => E.type === "node"),
    [de]
  ), Ee = le.useMemo(
    () => new Map(
      b.map((E) => [E.node.id, Qo(E.node.id, a, C)])
    ),
    [b, C, a]
  ), Re = le.useMemo(
    () => new Map(
      b.filter((E) => E.node.expandable).map((E) => [
        E.node.id,
        _h(E.node.id, u.pages, a, C)
      ])
    ),
    [u.pages, b, C, a]
  ), Ie = le.useMemo(
    () => a.some(
      (E) => E.selected && (E.scope === "all" || E.nodeId !== null && Qo(E.nodeId, a, C))
    ),
    [C, a]
  );
  le.useEffect(() => {
    var E;
    (v === null || !b.some((R) => R.node.id === v)) && x(((E = b[0]) == null ? void 0 : E.node.id) ?? null);
  }, [v, b]);
  const De = Bd({
    count: de.length,
    getScrollElement: () => ee.current,
    estimateSize: () => u.pagination.rowHeight,
    overscan: u.pagination.overscan
  }), ye = le.useCallback(
    (E, R, H = !1) => {
      $(E), o("page_request", {
        requestId: Ul(),
        parentId: E,
        cursor: R,
        ...H ? { force: !0 } : {}
      });
    },
    [o]
  ), Pe = le.useCallback(
    (E, R) => {
      if (!E.expandable || E.disabled) return;
      const H = R ?? !Y.has(E.id), G = /* @__PURE__ */ new Set();
      if (!H) {
        const we = [E.id];
        for (; we.length > 0; ) {
          const Et = we.pop();
          if (Et) {
            for (const yt of u.pages)
              if (yt.parentId === Et)
                for (const Tt of yt.nodes)
                  G.add(Tt.id), we.push(Tt.id);
          }
        }
      }
      const ce = H ? [...d.filter((we) => we !== E.id), E.id] : d.filter((we) => we !== E.id && !G.has(we));
      g(ce), m("expanded_ids", ce), H && !u.pages.some((we) => we.parentId === E.id) && (q((we) => ({ ...we, [Pr(E.id)]: [] })), ye(E.id, null));
    },
    [u.pages, d, Y, ye, m]
  ), Me = le.useCallback(
    (E, R) => {
      if (E.disabled || u.selectionMode === "none") return;
      let H;
      if (u.selectionMode === "single")
        H = [
          {
            nodeId: E.id,
            selected: !0,
            cascade: !1,
            ancestorIds: tc(E.id, C),
            scope: "node"
          }
        ];
      else {
        const G = Ee.get(E.id) ?? !1, ce = Re.get(E.id) ?? !1;
        H = nc(a, {
          nodeId: E.id,
          selected: R ?? (ce ? !0 : !G),
          cascade: u.cascadeSelection && E.expandable,
          ancestorIds: tc(E.id, C),
          scope: "node"
        });
      }
      c(H), m("selection", { rules: H });
    },
    [
      u.cascadeSelection,
      u.selectionMode,
      Re,
      C,
      Ee,
      a,
      m
    ]
  ), We = le.useCallback(
    (E) => {
      E.disabled || o("activated", { requestId: Ul(), nodeId: E.id });
    },
    [o]
  ), He = le.useCallback(
    (E, R, H) => {
      E.stopPropagation(), !(R.disabled || H.disabled) && (N(null), o("action", {
        requestId: Ul(),
        nodeId: R.id,
        actionId: H.id
      }));
    },
    [o]
  ), Se = le.useCallback(
    (E, R) => {
      E.stopPropagation(), !(R.disabled || !Ie) && (T(!1), o("selection_action", {
        requestId: Ul(),
        actionId: R.id,
        rules: a
      }));
    },
    [Ie, a, o]
  ), A = le.useCallback(() => {
    c([]), T(!1), m("selection", { rules: [] });
  }, [m]), J = le.useCallback(
    (E) => {
      const R = E ? nc(a, {
        nodeId: null,
        selected: !0,
        cascade: !0,
        ancestorIds: [],
        scope: "all"
      }) : [];
      c(R), m("selection", { rules: R });
    },
    [a, m]
  ), D = (E) => {
    if (b.length === 0) return;
    const R = Math.max(
      0,
      b.findIndex((ce) => ce.node.id === v)
    ), H = b[R];
    if (!H) return;
    const G = (ce) => {
      const we = Math.max(0, Math.min(b.length - 1, ce)), Et = b[we];
      if (!Et) return;
      x(Et.node.id);
      const yt = de.findIndex((Tt) => Tt.key === Et.key);
      yt >= 0 && De.scrollToIndex(yt, { align: "auto" });
    };
    switch (E.key) {
      case "ArrowDown":
        E.preventDefault(), G(R + 1);
        break;
      case "ArrowUp":
        E.preventDefault(), G(R - 1);
        break;
      case "Home":
        E.preventDefault(), G(0);
        break;
      case "End":
        E.preventDefault(), G(b.length - 1);
        break;
      case "ArrowRight":
        H.node.expandable && (E.preventDefault(), Y.has(H.node.id) ? G(R + 1) : Pe(H.node, !0));
        break;
      case "ArrowLeft":
        if (E.preventDefault(), Y.has(H.node.id))
          Pe(H.node, !1);
        else if (H.parentId !== null) {
          const ce = b.findIndex((we) => we.node.id === H.parentId);
          ce >= 0 && G(ce);
        }
        break;
      case "Enter":
        E.preventDefault(), We(H.node);
        break;
      case " ":
        E.preventDefault(), Me(H.node);
        break;
    }
  }, y = (E) => {
    var H;
    const R = (H = E.page) == null ? void 0 : H.nextCursor;
    if (!(R == null || u.cacheLimited)) {
      if (u.pagination.mode === "paged") {
        const G = Pr(E.parentId);
        q((ce) => {
          var we;
          return {
            ...ce,
            [G]: [...ce[G] ?? [], ((we = E.page) == null ? void 0 : we.cursor) ?? null]
          };
        });
      }
      ye(E.parentId, R);
    }
  }, M = (E) => {
    const R = Pr(E.parentId), H = j[R] ?? [], G = H[H.length - 1];
    G !== void 0 && (q((ce) => ({ ...ce, [R]: H.slice(0, -1) })), ye(E.parentId, G));
  }, ne = De.getVirtualItems(), re = de.length === 0, se = {
    "--hierarchlit-accent-color": u.theme.accentColor ?? void 0,
    "--hierarchlit-selected-background": u.theme.selectedBackground ?? void 0,
    "--hierarchlit-hover-background": u.theme.hoverBackground ?? void 0,
    "--hierarchlit-success-color": u.theme.successColor ?? void 0,
    "--hierarchlit-info-color": u.theme.infoColor ?? void 0,
    "--hierarchlit-warning-color": u.theme.warningColor ?? void 0,
    "--hierarchlit-danger-color": u.theme.dangerColor ?? void 0
  };
  return /* @__PURE__ */ U.jsxs("div", { className: "hierarchy-shell", style: { height: u.height, ...se }, children: [
    u.selectionToolbar && (u.selectionToolbar.alwaysVisible || u.selectionToolbar.showSelectAll || Ie) ? /* @__PURE__ */ U.jsx(
      Ih,
      {
        config: u.selectionToolbar,
        hasSelection: Ie,
        ruleCount: a.length,
        allSelected: Eh(a),
        menuOpen: _,
        onMenu: () => {
          N(null), T((E) => !E);
        },
        onAction: Se,
        onClear: A,
        onSelectAll: J
      }
    ) : null,
    re ? /* @__PURE__ */ U.jsx("div", { className: "empty-state", children: u.emptyMessage }) : /* @__PURE__ */ U.jsx(
      "div",
      {
        ref: ee,
        className: "tree-scroll",
        role: "tree",
        "aria-label": "Hierarchy",
        "aria-multiselectable": u.selectionMode === "multiple",
        "aria-activedescendant": v === null ? void 0 : `hierarchlit-row-${b.findIndex((E) => E.node.id === v)}`,
        tabIndex: 0,
        onKeyDown: D,
        onBlur: (E) => {
          E.currentTarget.contains(E.relatedTarget) || N(null);
        },
        children: /* @__PURE__ */ U.jsx("div", { className: "virtual-space", style: { height: De.getTotalSize() }, children: ne.map((E) => {
          var H;
          const R = de[E.index];
          return R ? /* @__PURE__ */ U.jsx(
            "div",
            {
              className: `virtual-row${R.type === "node" && O === R.node.id ? " has-open-menu" : ""}`,
              style: {
                height: E.size,
                transform: `translateY(${E.start}px)`
              },
              children: R.type === "node" ? /* @__PURE__ */ U.jsx(
                Ph,
                {
                  row: R,
                  nodeIndex: b.findIndex((G) => G.node.id === R.node.id),
                  rowHeight: u.pagination.rowHeight,
                  selected: Ee.get(R.node.id) ?? !1,
                  indeterminate: Re.get(R.node.id) ?? !1,
                  active: v === R.node.id,
                  expanded: Y.has(R.node.id),
                  selectionMode: u.selectionMode,
                  actionMap: oe,
                  menuOpen: O === R.node.id,
                  onActive: () => x(R.node.id),
                  onSelect: (G) => Me(R.node, G),
                  onExpand: () => Pe(R.node),
                  onActivate: () => We(R.node),
                  onMenu: () => {
                    T(!1), N(
                      (G) => G === R.node.id ? null : R.node.id
                    );
                  },
                  onAction: (G, ce) => He(G, R.node, ce)
                }
              ) : /* @__PURE__ */ U.jsx(
                Nh,
                {
                  row: R,
                  mode: u.pagination.mode,
                  pageNumber: (((H = j[Pr(R.parentId)]) == null ? void 0 : H.length) ?? 0) + 1,
                  pending: B === R.parentId,
                  onNext: () => y(R),
                  onPrevious: () => M(R),
                  onLoad: () => {
                    var G;
                    return ye(R.parentId, ((G = R.page) == null ? void 0 : G.cursor) ?? null, !0);
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
function Ih({
  config: u,
  hasSelection: m,
  ruleCount: o,
  allSelected: a,
  menuOpen: c,
  onMenu: d,
  onAction: g,
  onClear: v,
  onSelectAll: x
}) {
  const O = u.actions.filter((_) => _.placement === "inline"), N = u.actions.filter((_) => _.placement === "menu");
  return /* @__PURE__ */ U.jsxs("div", { className: "selection-toolbar", role: "toolbar", "aria-label": u.label, children: [
    u.showSelectAll ? /* @__PURE__ */ U.jsxs("label", { className: "selection-select-all", children: [
      /* @__PURE__ */ U.jsx(
        "input",
        {
          className: "selection-box",
          type: "checkbox",
          checked: a,
          ref: (_) => {
            _ && (_.indeterminate = m && !a);
          },
          onChange: (_) => x(_.currentTarget.checked)
        }
      ),
      /* @__PURE__ */ U.jsx("span", { children: u.selectAllLabel })
    ] }) : null,
    /* @__PURE__ */ U.jsx("span", { className: "selection-toolbar-label", children: u.label }),
    /* @__PURE__ */ U.jsx("span", { className: "selection-toolbar-count", children: m ? `${o} selection ${o === 1 ? "rule" : "rules"}` : "No selection" }),
    /* @__PURE__ */ U.jsx("span", { className: "selection-toolbar-spacer" }),
    O.map((_) => /* @__PURE__ */ U.jsxs(
      "button",
      {
        className: `selection-action-button tone-${_.tone}`,
        type: "button",
        disabled: !m || _.disabled,
        onClick: (T) => g(T, _),
        children: [
          /* @__PURE__ */ U.jsx(Bn, { name: _.icon, size: 14 }),
          /* @__PURE__ */ U.jsx("span", { children: _.label })
        ]
      },
      _.id
    )),
    N.length > 0 ? /* @__PURE__ */ U.jsxs("span", { className: "selection-menu-wrap", children: [
      /* @__PURE__ */ U.jsx(
        "button",
        {
          className: "icon-button",
          type: "button",
          "aria-label": `More ${u.label.toLowerCase()} actions`,
          "aria-haspopup": "menu",
          "aria-expanded": c,
          disabled: !m,
          onClick: d,
          children: /* @__PURE__ */ U.jsx(uc, { "aria-hidden": !0, size: 16 })
        }
      ),
      c ? /* @__PURE__ */ U.jsx(
        "span",
        {
          className: "action-menu selection-action-menu",
          role: "menu",
          onPointerDown: (_) => _.stopPropagation(),
          onMouseDown: (_) => _.stopPropagation(),
          onClick: (_) => _.stopPropagation(),
          children: N.map((_) => /* @__PURE__ */ U.jsxs(
            "button",
            {
              className: `menu-item tone-${_.tone}`,
              type: "button",
              role: "menuitem",
              disabled: !m || _.disabled,
              onClick: (T) => g(T, _),
              children: [
                /* @__PURE__ */ U.jsx(Bn, { name: _.icon, size: 14 }),
                /* @__PURE__ */ U.jsx("span", { children: _.label })
              ]
            },
            _.id
          ))
        }
      ) : null
    ] }) : null,
    u.showClear ? /* @__PURE__ */ U.jsx(
      "button",
      {
        className: "selection-clear-button",
        type: "button",
        disabled: !m,
        onClick: v,
        children: "Clear"
      }
    ) : null
  ] });
}
function Ph({
  row: u,
  nodeIndex: m,
  rowHeight: o,
  selected: a,
  indeterminate: c,
  active: d,
  expanded: g,
  selectionMode: v,
  actionMap: x,
  menuOpen: O,
  onActive: N,
  onSelect: _,
  onExpand: T,
  onActivate: B,
  onMenu: $,
  onAction: j
}) {
  const q = u.node.actions.map((C) => x.get(C)).filter((C) => (C == null ? void 0 : C.placement) === "inline"), ee = u.node.actions.map((C) => x.get(C)).filter((C) => (C == null ? void 0 : C.placement) === "menu"), Y = u.node.icon ?? (u.node.expandable ? g ? "folder-open" : "folder" : "file");
  return /* @__PURE__ */ U.jsxs(
    "div",
    {
      id: `hierarchlit-row-${m}`,
      className: `tree-row${a ? " is-selected" : ""}${d ? " is-active" : ""}${u.node.disabled ? " is-disabled" : ""}`,
      style: { minHeight: o, paddingLeft: 4 + u.depth * 16 },
      role: "treeitem",
      "aria-level": u.depth + 1,
      "aria-selected": v === "none" ? void 0 : a,
      "aria-expanded": u.node.expandable ? g : void 0,
      "aria-disabled": u.node.disabled || void 0,
      onMouseDown: N,
      onClick: () => _(),
      onDoubleClick: B,
      children: [
        /* @__PURE__ */ U.jsx(
          "button",
          {
            className: "disclosure icon-button",
            type: "button",
            tabIndex: -1,
            "aria-label": g ? `Collapse ${u.node.label}` : `Expand ${u.node.label}`,
            disabled: !u.node.expandable || u.node.disabled,
            onClick: (C) => {
              C.stopPropagation(), T();
            },
            children: u.node.expandable ? g ? /* @__PURE__ */ U.jsx(Kd, { "aria-hidden": !0, size: 14 }) : /* @__PURE__ */ U.jsx(qd, { "aria-hidden": !0, size: 14 }) : null
          }
        ),
        v === "multiple" ? /* @__PURE__ */ U.jsx(
          "input",
          {
            className: "selection-box",
            type: "checkbox",
            tabIndex: -1,
            "aria-label": `Select ${u.node.label}`,
            checked: a,
            ref: (C) => {
              C && (C.indeterminate = c);
            },
            disabled: u.node.disabled,
            onChange: (C) => _(c ? !0 : C.currentTarget.checked),
            onClick: (C) => C.stopPropagation()
          }
        ) : null,
        /* @__PURE__ */ U.jsx("span", { className: "node-icon", children: /* @__PURE__ */ U.jsx(Bn, { name: Y }) }),
        /* @__PURE__ */ U.jsx("span", { className: "node-label", title: u.node.label, children: u.node.label }),
        u.node.secondaryText ? /* @__PURE__ */ U.jsx("span", { className: "secondary-text", title: u.node.secondaryText, children: u.node.secondaryText }) : null,
        /* @__PURE__ */ U.jsx("span", { className: "row-spacer" }),
        /* @__PURE__ */ U.jsx("span", { className: "status-list", children: u.node.statusIcons.map((C, oe) => /* @__PURE__ */ U.jsx(
          "span",
          {
            className: `status-icon tone-${C.tone}`,
            title: C.label,
            "aria-label": C.label,
            children: /* @__PURE__ */ U.jsx(Bn, { name: C.name, size: 14 })
          },
          `${C.name}:${C.label}:${oe}`
        )) }),
        /* @__PURE__ */ U.jsx("span", { className: "inline-actions", children: q.map((C) => /* @__PURE__ */ U.jsx(
          "button",
          {
            className: `icon-button action-button tone-${C.tone}`,
            type: "button",
            tabIndex: -1,
            title: C.label,
            "aria-label": `${C.label}: ${u.node.label}`,
            disabled: C.disabled || u.node.disabled,
            onClick: (oe) => j(oe, C),
            children: /* @__PURE__ */ U.jsx(Bn, { name: C.icon, size: 14 })
          },
          C.id
        )) }),
        ee.length > 0 ? /* @__PURE__ */ U.jsxs("span", { className: "menu-wrap", children: [
          /* @__PURE__ */ U.jsx(
            "button",
            {
              className: "icon-button more-button",
              type: "button",
              tabIndex: -1,
              "aria-label": `More actions for ${u.node.label}`,
              "aria-haspopup": "menu",
              "aria-expanded": O,
              disabled: u.node.disabled,
              onClick: (C) => {
                C.stopPropagation(), $();
              },
              children: /* @__PURE__ */ U.jsx(uc, { "aria-hidden": !0, size: 15 })
            }
          ),
          O ? /* @__PURE__ */ U.jsx(
            "span",
            {
              className: "action-menu",
              role: "menu",
              onPointerDown: (C) => C.stopPropagation(),
              onMouseDown: (C) => C.stopPropagation(),
              onClick: (C) => C.stopPropagation(),
              children: ee.map((C) => /* @__PURE__ */ U.jsxs(
                "button",
                {
                  className: `menu-item tone-${C.tone}`,
                  type: "button",
                  role: "menuitem",
                  disabled: C.disabled,
                  onClick: (oe) => j(oe, C),
                  children: [
                    /* @__PURE__ */ U.jsx(Bn, { name: C.icon, size: 14 }),
                    /* @__PURE__ */ U.jsx("span", { children: C.label })
                  ]
                },
                C.id
              ))
            }
          ) : null
        ] }) : null
      ]
    }
  );
}
function Nh({ row: u, mode: m, pageNumber: o, pending: a, onNext: c, onPrevious: d, onLoad: g }) {
  var x, O, N, _;
  const v = 8 + u.depth * 16;
  return a ? /* @__PURE__ */ U.jsxs("div", { className: "page-row muted", style: { paddingLeft: v }, children: [
    /* @__PURE__ */ U.jsx(sh, { className: "spin", size: 14 }),
    " Loading…"
  ] }) : u.reason === "limit" ? /* @__PURE__ */ U.jsx("div", { className: "page-row warning", style: { paddingLeft: v }, children: "Browser item limit reached. Collapse another folder or increase the configured limit." }) : u.reason === "error" ? /* @__PURE__ */ U.jsxs("div", { className: "page-row error", style: { paddingLeft: v }, children: [
    /* @__PURE__ */ U.jsx("span", { children: ((x = u.page) == null ? void 0 : x.error) ?? "Unable to load items." }),
    /* @__PURE__ */ U.jsx("button", { type: "button", onClick: g, children: "Retry" })
  ] }) : u.reason === "unloaded" ? /* @__PURE__ */ U.jsx("div", { className: "page-row", style: { paddingLeft: v }, children: /* @__PURE__ */ U.jsx("button", { type: "button", onClick: g, children: "Load items" }) }) : m === "load_more" ? /* @__PURE__ */ U.jsx("div", { className: "page-row", style: { paddingLeft: v }, children: /* @__PURE__ */ U.jsx("button", { type: "button", onClick: c, children: "Load more" }) }) : /* @__PURE__ */ U.jsxs("div", { className: "page-row pager", style: { paddingLeft: v }, children: [
    /* @__PURE__ */ U.jsx("button", { type: "button", disabled: o <= 1, onClick: d, children: "Previous" }),
    /* @__PURE__ */ U.jsxs("span", { children: [
      "Page ",
      o,
      ((O = u.page) == null ? void 0 : O.totalCount) === null ? "" : ` · ${(N = u.page) == null ? void 0 : N.totalCount} items`
    ] }),
    /* @__PURE__ */ U.jsx("button", { type: "button", disabled: ((_ = u.page) == null ? void 0 : _.nextCursor) === null, onClick: c, children: "Next" })
  ] });
}
const Bl = /* @__PURE__ */ new WeakMap(), Lh = (u) => {
  const { data: m, parentElement: o, setStateValue: a, setTriggerValue: c } = u, d = o.querySelector(".hierarchlit-root");
  if (!(d instanceof HTMLElement))
    throw new Error("hierarchlit: React root element was not found");
  let g = Bl.get(o);
  return g || (g = pd.createRoot(d), Bl.set(o, g)), g.render(
    /* @__PURE__ */ U.jsx(le.StrictMode, { children: /* @__PURE__ */ U.jsx(
      Oh,
      {
        data: m,
        setStateValue: a,
        setTriggerValue: c
      }
    ) })
  ), () => {
    const v = Bl.get(o);
    v == null || v.unmount(), Bl.delete(o);
  };
};
export {
  Lh as default
};
