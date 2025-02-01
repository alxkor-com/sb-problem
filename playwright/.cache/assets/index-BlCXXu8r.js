const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/button.stories.portable-DSiENkHl.js","assets/index-CmaCktvo.js","assets/button.stories-6vDmOVjb.css"])))=>i.map(i=>d[i]);
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true && deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __esm=(fn,res)=>function(){return fn&&(res=(0, fn[__getOwnPropNames(fn)[0]])(fn=0)),res};var __commonJS=(cb,mod)=>function(){return mod||(0, cb[__getOwnPropNames(cb)[0]])((mod={exports:{}}).exports,mod),mod.exports};var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0});},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var react$1 = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var l$3=Symbol.for("react.element"),n$3=Symbol.for("react.portal"),p$4=Symbol.for("react.fragment"),q$5=Symbol.for("react.strict_mode"),r$4=Symbol.for("react.profiler"),t$4=Symbol.for("react.provider"),u$4=Symbol.for("react.context"),v$5=Symbol.for("react.forward_ref"),w$4=Symbol.for("react.suspense"),x$4=Symbol.for("react.memo"),y$3=Symbol.for("react.lazy"),z$7=Symbol.iterator;function A$4(a){if(null===a||"object"!==typeof a)return null;a=z$7&&a[z$7]||a["@@iterator"];return "function"===typeof a?a:null}
var B$6={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$6=Object.assign,D$5={};function E$3(a,b,e){this.props=a;this.context=b;this.refs=D$5;this.updater=e||B$6;}E$3.prototype.isReactComponent={};
E$3.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$3.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F$5(){}F$5.prototype=E$3.prototype;function G$5(a,b,e){this.props=a;this.context=b;this.refs=D$5;this.updater=e||B$6;}var H$5=G$5.prototype=new F$5;
H$5.constructor=G$5;C$6(H$5,E$3.prototype);H$5.isPureReactComponent=!0;var I$5=Array.isArray,J$5=Object.prototype.hasOwnProperty,K$5={current:null},L$6={key:!0,ref:!0,__self:!0,__source:!0};
function M$6(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J$5.call(b,d)&&!L$6.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$3,type:a,key:k,ref:h,props:c,_owner:K$5.current}}
function N$4(a,b){return {$$typeof:l$3,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$5(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$3}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$7=/\/+/g;function Q$5(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R$5(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$3:case n$3:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$5(h,0):d,I$5(c)?(e="",null!=a&&(e=a.replace(P$7,"$&/")+"/"),R$5(c,b,e,"",function(a){return a})):null!=c&&(O$5(c)&&(c=N$4(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$7,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$5(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q$5(k,g);h+=R$5(k,b,e,f,c);}else if(f=A$4(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$5(k,g++),h+=R$5(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S$5(a,b,e){if(null==a)return a;var d=[],c=0;R$5(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$4(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U$5={current:null},V$5={transition:null},W$6={ReactCurrentDispatcher:U$5,ReactCurrentBatchConfig:V$5,ReactCurrentOwner:K$5};function X$5(){throw Error("act(...) is not supported in production builds of React.");}
var Children = react_production_min.Children={map:S$5,forEach:function(a,b,e){S$5(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$5(a,function(){b++;});return b},toArray:function(a){return S$5(a,function(a){return a})||[]},only:function(a){if(!O$5(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};var Component = react_production_min.Component=E$3;var Fragment = react_production_min.Fragment=p$4;var Profiler = react_production_min.Profiler=r$4;var PureComponent = react_production_min.PureComponent=G$5;var StrictMode = react_production_min.StrictMode=q$5;var Suspense = react_production_min.Suspense=w$4;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1 = react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$6;var act$1 = react_production_min.act=X$5;
var cloneElement = react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$6({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K$5.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J$5.call(b,f)&&!L$6.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$3,type:a.type,key:c,ref:k,props:d,_owner:h}};var createContext = react_production_min.createContext=function(a){a={$$typeof:u$4,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t$4,_context:a};return a.Consumer=a};var createElement = react_production_min.createElement=M$6;var createFactory = react_production_min.createFactory=function(a){var b=M$6.bind(null,a);b.type=a;return b};var createRef = react_production_min.createRef=function(){return {current:null}};
var forwardRef = react_production_min.forwardRef=function(a){return {$$typeof:v$5,render:a}};var isValidElement = react_production_min.isValidElement=O$5;var lazy = react_production_min.lazy=function(a){return {$$typeof:y$3,_payload:{_status:-1,_result:a},_init:T$4}};var memo = react_production_min.memo=function(a,b){return {$$typeof:x$4,type:a,compare:void 0===b?null:b}};var startTransition = react_production_min.startTransition=function(a){var b=V$5.transition;V$5.transition={};try{a();}finally{V$5.transition=b;}};var unstable_act = react_production_min.unstable_act=X$5;var useCallback = react_production_min.useCallback=function(a,b){return U$5.current.useCallback(a,b)};var useContext = react_production_min.useContext=function(a){return U$5.current.useContext(a)};
var useDebugValue = react_production_min.useDebugValue=function(){};var useDeferredValue = react_production_min.useDeferredValue=function(a){return U$5.current.useDeferredValue(a)};var useEffect = react_production_min.useEffect=function(a,b){return U$5.current.useEffect(a,b)};var useId = react_production_min.useId=function(){return U$5.current.useId()};var useImperativeHandle = react_production_min.useImperativeHandle=function(a,b,e){return U$5.current.useImperativeHandle(a,b,e)};var useInsertionEffect = react_production_min.useInsertionEffect=function(a,b){return U$5.current.useInsertionEffect(a,b)};var useLayoutEffect = react_production_min.useLayoutEffect=function(a,b){return U$5.current.useLayoutEffect(a,b)};
var useMemo = react_production_min.useMemo=function(a,b){return U$5.current.useMemo(a,b)};var useReducer = react_production_min.useReducer=function(a,b,e){return U$5.current.useReducer(a,b,e)};var useRef = react_production_min.useRef=function(a){return U$5.current.useRef(a)};var useState = react_production_min.useState=function(a){return U$5.current.useState(a)};var useSyncExternalStore = react_production_min.useSyncExternalStore=function(a,b,e){return U$5.current.useSyncExternalStore(a,b,e)};var useTransition = react_production_min.useTransition=function(){return U$5.current.useTransition()};var version$1 = react_production_min.version="18.3.1";

var react = react$1.exports;

"use strict";
if (true) {
  react$1.exports = react_production_min;
} else {
  module.exports = require("./cjs/react.development.js");
}

var reactExports = react$1.exports;
const __pwReact = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

const React3 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: __pwReact
}, [reactExports]);

var testUtils$2 = {exports: {}};

var reactDomTestUtils_production_min = {};

var reactDom$1 = {exports: {}};

var reactDom_production_min = {};

var scheduler$1 = {exports: {}};

var scheduler_production_min$1 = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
	'use strict';function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
	function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
	"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
	function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
	function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
	exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
	exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
	exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
	exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
} (scheduler_production_min$1));

const scheduler_production_min = /*@__PURE__*/getDefaultExportFromCjs(scheduler_production_min$1);

var scheduler = scheduler$1.exports;

"use strict";
if (true) {
  scheduler$1.exports = scheduler_production_min$1;
} else {
  module.exports = require("./cjs/scheduler.development.js");
}

var schedulerExports = scheduler$1.exports;
const index$1 = /*@__PURE__*/getDefaultExportFromCjs(schedulerExports);

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa$1=reactExports,ca$1=schedulerExports;function p$3(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da$2=new Set,ea$1={};function fa$2(a,b){ha$1(a,b);ha$1(a+"Capture",b);}
function ha$1(a,b){ea$1[a]=b;for(a=0;a<b.length;a++)da$2.add(b[a]);}
var ia$1=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja$1=Object.prototype.hasOwnProperty,ka$1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la$1=
{},ma$2={};function oa(a){if(ja$1.call(ma$2,a))return !0;if(ja$1.call(la$1,a))return !1;if(ka$1.test(a))return ma$2[a]=!0;la$1[a]=!0;return !1}function pa$2(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function qa$1(a,b,c,d){if(null===b||"undefined"===typeof b||pa$2(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v$4(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z$6={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z$6[a]=new v$4(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z$6[b]=new v$4(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z$6[a]=new v$4(a,2,!1,a.toLowerCase(),null,!1,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z$6[a]=new v$4(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z$6[a]=new v$4(a,3,!1,a.toLowerCase(),null,!1,!1);});
["checked","multiple","muted","selected"].forEach(function(a){z$6[a]=new v$4(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z$6[a]=new v$4(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z$6[a]=new v$4(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z$6[a]=new v$4(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra$1=/[\-:]([a-z])/g;function sa$1(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra$1,
sa$1);z$6[b]=new v$4(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra$1,sa$1);z$6[b]=new v$4(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra$1,sa$1);z$6[b]=new v$4(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z$6[a]=new v$4(a,1,!1,a.toLowerCase(),null,!1,!1);});
z$6.xlinkHref=new v$4("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z$6[a]=new v$4(a,1,!1,a.toLowerCase(),null,!0,!0);});
function ta$1(a,b,c,d){var e=z$6.hasOwnProperty(b)?z$6[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa$1(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
var ua$2=aa$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va$1=Symbol.for("react.element"),wa$1=Symbol.for("react.portal"),ya$2=Symbol.for("react.fragment"),za$1=Symbol.for("react.strict_mode"),Aa$1=Symbol.for("react.profiler"),Ba$1=Symbol.for("react.provider"),Ca$1=Symbol.for("react.context"),Da$1=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja$1=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja$1&&a[Ja$1]||a["@@iterator"];return "function"===typeof a?a:null}var A$3=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return ""}}
function Qa$1(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya$2:return "Fragment";case wa$1:return "Portal";case Aa$1:return "Profiler";case za$1:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca$1:return (a.displayName||"Context")+".Consumer";case Ba$1:return (a._context.displayName||"Context")+".Provider";case Da$1:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa$1(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa$1(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa$1(b);case 8:return b===za$1?"StrictMode":"Mode";case 22:return "Offscreen";
case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A$3({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za$1(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta$1(a,"checked",b,!1);}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p$3(91));return A$3({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p$3(92));if(eb(c)){if(1<c.length)throw Error(p$3(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A$3({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p$3(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p$3(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p$3(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p$3(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p$3(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p$3(231,b,typeof c));return c}var Lb=!1;if(ia$1)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p$3(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p$3(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p$3(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p$3(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p$3(189));}}if(c.alternate!==d)throw Error(p$3(190));}if(3!==c.tag)throw Error(p$3(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
var ac=ca$1.unstable_scheduleCallback,bc=ca$1.unstable_cancelCallback,cc=ca$1.unstable_shouldYield,dc=ca$1.unstable_requestPaint,B$5=ca$1.unstable_now,ec=ca$1.unstable_getCurrentPriorityLevel,fc=ca$1.unstable_ImmediatePriority,gc=ca$1.unstable_UserBlockingPriority,hc=ca$1.unstable_NormalPriority,ic=ca$1.unstable_LowPriority,jc=ca$1.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C$5=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca$1.unstable_scheduleCallback(ca$1.unstable_NormalPriority,$c)));}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua$2.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C$5,f=cd.transition;cd.transition=null;try{C$5=1,fd(a,b,c,d);}finally{C$5=e,cd.transition=f;}}function gd(a,b,c,d){var e=C$5,f=cd.transition;cd.transition=null;try{C$5=4,fd(a,b,c,d);}finally{C$5=e,cd.transition=f;}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A$3(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A$3({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A$3({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A$3({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A$3({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A$3({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A$3({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A$3({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A$3({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A$3({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A$3({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A$3({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A$3({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae$1=ia$1&&"CompositionEvent"in window,be$2=null;ia$1&&"documentMode"in document&&(be$2=document.documentMode);var ce$1=ia$1&&"TextEvent"in window&&!be$2,de$2=ia$1&&(!ae$1||be$2&&8<be$2&&11>=be$2),ee$2=String.fromCharCode(32),fe$2=!1;
function ge$2(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he$2(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie$2=!1;function je$2(a,b){switch(a){case "compositionend":return he$2(b);case "keypress":if(32!==b.which)return null;fe$2=!0;return ee$2;case "textInput":return a=b.data,a===ee$2&&fe$2?null:a;default:return null}}
function ke$2(a,b){if(ie$2)return "compositionend"===a||!ae$1&&ge$2(a,b)?(a=nd(),md=ld=kd=null,ie$2=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de$2&&"ko"!==b.locale?null:b.data;default:return null}}
var le$1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me$2(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le$1[a.type]:"textarea"===b?!0:!1}function ne$2(a,b,c,d){Eb(d);b=oe$3(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe$1=null,qe$1=null;function re$1(a){se$3(a,0);}function te$1(a){var b=ue$2(a);if(Wa(b))return a}
function ve$2(a,b){if("change"===a)return b}var we$1=!1;if(ia$1){var xe$2;if(ia$1){var ye$2="oninput"in document;if(!ye$2){var ze$2=document.createElement("div");ze$2.setAttribute("oninput","return;");ye$2="function"===typeof ze$2.oninput;}xe$2=ye$2;}else xe$2=!1;we$1=xe$2&&(!document.documentMode||9<document.documentMode);}function Ae$1(){pe$1&&(pe$1.detachEvent("onpropertychange",Be$2),qe$1=pe$1=null);}function Be$2(a){if("value"===a.propertyName&&te$1(qe$1)){var b=[];ne$2(b,qe$1,a,xb(a));Jb(re$1,b);}}
function Ce$2(a,b,c){"focusin"===a?(Ae$1(),pe$1=b,qe$1=c,pe$1.attachEvent("onpropertychange",Be$2)):"focusout"===a&&Ae$1();}function De$2(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te$1(qe$1)}function Ee$2(a,b){if("click"===a)return te$1(b)}function Fe$2(a,b){if("input"===a||"change"===a)return te$1(b)}function Ge$2(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He$2="function"===typeof Object.is?Object.is:Ge$2;
function Ie$2(a,b){if(He$2(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja$1.call(b,e)||!He$2(a[e],b[e]))return !1}return !0}function Je$2(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke$2(a,b){var c=Je$2(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je$2(c);}}function Le$2(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le$2(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me$2(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne$1(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe$2(a){var b=Me$2(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le$2(c.ownerDocument.documentElement,c)){if(null!==d&&Ne$1(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke$2(c,f);var g=Ke$2(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
var Pe$2=ia$1&&"documentMode"in document&&11>=document.documentMode,Qe$1=null,Re$1=null,Se$2=null,Te$2=!1;
function Ue$2(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te$2||null==Qe$1||Qe$1!==Xa(d)||(d=Qe$1,"selectionStart"in d&&Ne$1(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se$2&&Ie$2(Se$2,d)||(Se$2=d,d=oe$3(Re$1,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe$1)));}
function Ve$2(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We$2={animationend:Ve$2("Animation","AnimationEnd"),animationiteration:Ve$2("Animation","AnimationIteration"),animationstart:Ve$2("Animation","AnimationStart"),transitionend:Ve$2("Transition","TransitionEnd")},Xe$2={},Ye$2={};
ia$1&&(Ye$2=document.createElement("div").style,"AnimationEvent"in window||(delete We$2.animationend.animation,delete We$2.animationiteration.animation,delete We$2.animationstart.animation),"TransitionEvent"in window||delete We$2.transitionend.transition);function Ze$2(a){if(Xe$2[a])return Xe$2[a];if(!We$2[a])return a;var b=We$2[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye$2)return Xe$2[a]=b[c];return a}var $e$2=Ze$2("animationend"),af=Ze$2("animationiteration"),bf=Ze$2("animationstart"),cf=Ze$2("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa$2(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e$2,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha$1("onMouseEnter",["mouseout","mouseover"]);ha$1("onMouseLeave",["mouseout","mouseover"]);ha$1("onPointerEnter",["pointerout","pointerover"]);
ha$1("onPointerLeave",["pointerout","pointerover"]);fa$2("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa$2("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa$2("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa$2("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa$2("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa$2("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
function se$3(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D$4(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da$2.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e$2:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue$2(k);u=null==n?h:ue$2(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue$2(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve$2;else if(me$2(h))if(we$1)na=Fe$2;else {na=De$2;var xa=Ce$2;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee$2);if(na&&(na=na(a,d))){ne$2(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue$2(d):window;switch(a){case "focusin":if(me$2(xa)||"true"===xa.contentEditable)Qe$1=xa,Re$1=d,Se$2=null;break;case "focusout":Se$2=Re$1=Qe$1=null;break;case "mousedown":Te$2=!0;break;case "contextmenu":case "mouseup":case "dragend":Te$2=!1;Ue$2(g,c,e);break;case "selectionchange":if(Pe$2)break;case "keydown":case "keyup":Ue$2(g,c,e);}var $a;if(ae$1)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie$2?ge$2(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de$2&&"ko"!==c.locale&&(ie$2||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie$2&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie$2=!0)),xa=oe$3(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he$2(c),null!==$a&&(ba.data=$a))));if($a=ce$1?je$2(a,c):ke$2(a,c))d=oe$3(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se$3(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe$3(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p$3(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue$2(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p$3(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
function E$2(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G$4(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H$4=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E$2(Wf);E$2(H$4);}function ag(a,b,c){if(H$4.current!==Vf)throw Error(p$3(168));G$4(H$4,b);G$4(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p$3(108,Ra(a)||"Unknown",e));return A$3({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H$4.current;G$4(H$4,a);G$4(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p$3(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E$2(Wf),E$2(H$4),G$4(H$4,a)):E$2(Wf);G$4(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C$5;try{var c=eg;for(C$5=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C$5=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I$4=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I$4){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p$3(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I$4=!1,xg=a);}}else {if(Dg(a))throw Error(p$3(418));a.flags=a.flags&-4097|2;I$4=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
function Gg(a){if(a!==xg)return !1;if(!I$4)return Fg(a),I$4=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p$3(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p$3(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I$4=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua$2.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p$3(309));var d=c.stateNode;}if(!d)throw Error(p$3(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p$3(284));if(!c._owner)throw Error(p$3(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p$3(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya$2)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va$1:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa$1:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va$1:return c.key===e?k(a,b,c,d):null;case wa$1:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va$1:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa$1:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I$4&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I$4&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I$4&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p$3(150));h=l.call(h);if(null==h)throw Error(p$3(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
m),I$4&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I$4&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I$4&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya$2&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va$1:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya$2){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya$2?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa$1:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E$2(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p$3(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K$4&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A$3({},q,r);break a;case 2:jh=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p$3(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p$3(174));return a}
function yh(a,b){G$4(wh,b);G$4(vh,a);G$4(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E$2(uh);G$4(uh,b);}function zh(){E$2(uh);E$2(vh);E$2(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G$4(vh,a),G$4(uh,c));}function Bh(a){vh.current===a&&(E$2(uh),E$2(vh));}var L$5=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua$2.ReactCurrentDispatcher,Gh=ua$2.ReactCurrentBatchConfig,Hh=0,M$5=null,N$3=null,O$4=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P$6(){throw Error(p$3(321));}function Mh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He$2(a[c],b[c]))return !1;return !0}
function Nh(a,b,c,d,e,f){Hh=f;M$5=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p$3(301));f+=1;O$4=N$3=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N$3&&null!==N$3.next;Hh=0;O$4=N$3=M$5=null;Ih=!1;if(b)throw Error(p$3(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O$4?M$5.memoizedState=O$4=a:O$4=O$4.next=a;return O$4}function Uh(){if(null===N$3){var a=M$5.alternate;a=null!==a?a.memoizedState:null;}else a=N$3.next;var b=null===O$4?M$5.memoizedState:O$4.next;if(null!==b)O$4=b,N$3=a;else {if(null===a)throw Error(p$3(310));N$3=a;a={memoizedState:N$3.memoizedState,baseState:N$3.baseState,baseQueue:N$3.baseQueue,queue:N$3.queue,next:null};null===O$4?M$5.memoizedState=O$4=a:O$4=O$4.next=a;}return O$4}
function Vh(a,b){return "function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p$3(311));c.lastRenderedReducer=a;var d=N$3,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M$5.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He$2(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M$5.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p$3(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He$2(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
function Zh(a,b){var c=M$5,d=Uh(),e=b(),f=!He$2(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O$4&&O$4.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q$4)throw Error(p$3(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M$5.updateQueue;null===b?(b={lastEffect:null,stores:null},M$5.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi$1(a);}function ai(a,b,c){return c(function(){ei(b)&&fi$1(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He$2(a,c)}catch(d){return !0}}function fi$1(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M$5,a);return [b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M$5.updateQueue;null===b?(b={lastEffect:null,stores:null},M$5.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji$1(){return Uh().memoizedState}function ki$1(a,b,c,d){var e=Th();M$5.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N$3){var g=N$3.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M$5.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi$1(a,b){return ki$1(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He$2(c,b)||(c=yc(),M$5.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C$5;C$5=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C$5=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi$1(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R$4();gi(c,a,d,e);Bi(c,b,d);}}
function ii(a,b,c){var d=yi$1(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He$2(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R$4(),gi(c,a,d,e),Bi(c,b,d));}}
function zi(a){var b=a.alternate;return a===M$5||null!==b&&b===M$5}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
var Rh={readContext:eh,useCallback:P$6,useContext:P$6,useEffect:P$6,useImperativeHandle:P$6,useInsertionEffect:P$6,useLayoutEffect:P$6,useMemo:P$6,useReducer:P$6,useRef:P$6,useState:P$6,useDebugValue:P$6,useDeferredValue:P$6,useTransition:P$6,useMutableSource:P$6,useSyncExternalStore:P$6,useId:P$6,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi$1,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki$1(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki$1(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki$1(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M$5,a);return [d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M$5,e=Th();if(I$4){if(void 0===c)throw Error(p$3(407));c=c();}else {c=b();if(null===Q$4)throw Error(p$3(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi$1(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q$4.identifierPrefix;if(I$4){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji$1,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N$3.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji$1,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N$3?b.memoizedState=a:ui(b,N$3.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A$3({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di$1(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A$3({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R$4(),e=yi$1(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R$4(),e=yi$1(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R$4(),d=
yi$1(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie$2(c,d)||!Ie$2(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H$4.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H$4.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di$1(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li$1(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi$1="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li$1(a,b);};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li$1(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li$1(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi$1;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua$2.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I$4&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie$2;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie$2(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G$4(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G$4(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G$4(ej,fj);fj|=d;}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G$4(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H$4.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I$4&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H$4.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di$1(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H$4.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di$1(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo);}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L$5.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G$4(L$5,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p$3(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p$3(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q$4;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p$3(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I$4=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L$5.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G$4(L$5,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p$3(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G$4(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G$4(L$5,L$5.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G$4(L$5,L$5.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G$4(L$5,L$5.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G$4(L$5,L$5.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A$3({},e,{value:void 0});d=A$3({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea$1.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea$1.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D$4("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
function Dj(a,b){if(!I$4)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function S$4(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S$4(b),null;case 1:return Zf(b.type)&&$f(),S$4(b),null;case 3:d=b.stateNode;zh();E$2(Wf);E$2(H$4);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S$4(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p$3(166));S$4(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D$4("cancel",d);D$4("close",d);break;case "iframe":case "object":case "embed":D$4("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D$4(lf[e],d);break;case "source":D$4("error",d);break;case "img":case "image":case "link":D$4("error",
d);D$4("load",d);break;case "details":D$4("toggle",d);break;case "input":Za$1(d,f);D$4("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D$4("invalid",d);break;case "textarea":hb(d,f),D$4("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea$1.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D$4("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D$4("cancel",a);D$4("close",a);e=d;break;case "iframe":case "object":case "embed":D$4("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D$4(lf[e],a);e=d;break;case "source":D$4("error",a);e=d;break;case "img":case "image":case "link":D$4("error",
a);D$4("load",a);e=d;break;case "details":D$4("toggle",a);e=d;break;case "input":Za$1(a,d);e=Ya(a,d);D$4("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A$3({},d,{value:void 0});D$4("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D$4("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea$1.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D$4("scroll",a):null!=k&&ta$1(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S$4(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p$3(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S$4(b);return null;case 13:E$2(L$5);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I$4&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p$3(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p$3(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S$4(b);f=!1;}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L$5.current&1)?0===T$3&&(T$3=3):tj()));null!==b.updateQueue&&(b.flags|=4);S$4(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S$4(b),null;case 10:return ah(b.type._context),S$4(b),null;case 17:return Zf(b.type)&&$f(),S$4(b),null;case 19:E$2(L$5);f=b.memoizedState;if(null===f)return S$4(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else {if(0!==T$3||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G$4(L$5,L$5.current&1|2);return b.child}a=
a.sibling;}null!==f.tail&&B$5()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I$4)return S$4(b),null}else 2*B$5()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B$5(),b.sibling=null,c=L$5.current,G$4(L$5,d?c&1|2:c&1),b;S$4(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S$4(b),b.subtreeFlags&6&&(b.flags|=8192)):S$4(b),null;case 24:return null;case 25:return null}throw Error(p$3(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E$2(Wf),E$2(H$4),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E$2(L$5);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p$3(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E$2(L$5),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U$4=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V$4=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W$5(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W$5(a,b,d);}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me$2();if(Ne$1(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V$4=b;null!==V$4;)if(b=V$4,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V$4=a;else for(;null!==V$4;){b=V$4;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p$3(163));}}catch(F){W$5(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V$4=a;break}V$4=b.return;}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X$4=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U$4||Lj(c,b);case 6:var d=X$4,e=Xj;X$4=null;Yj(a,b,c);X$4=d;Xj=e;null!==X$4&&(Xj?(a=X$4,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X$4.removeChild(c.stateNode));break;case 18:null!==X$4&&(Xj?(a=X$4,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X$4,c.stateNode));break;case 4:d=X$4;e=Xj;X$4=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X$4=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U$4&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U$4&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W$5(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U$4=(d=U$4)||null!==
c.memoizedState,Yj(a,b,c),U$4=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X$4=h.stateNode;Xj=!1;break a;case 3:X$4=h.stateNode.containerInfo;Xj=!0;break a;case 4:X$4=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X$4)throw Error(p$3(160));Zj(f,g,e);X$4=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W$5(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W$5(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W$5(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W$5(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta$1(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W$5(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p$3(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W$5(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W$5(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B$5()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U$4=(l=U$4)||m,ck(b,a),U$4=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V$4=a,m=a.child;null!==m;){for(q=V$4=m;null!==V$4;){r=V$4;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W$5(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V$4=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g));}catch(t){W$5(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W$5(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p$3(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p$3(161));}}catch(k){W$5(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V$4=a;ik(a,b,c);}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V$4;){var e=V$4,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U$4;h=Jj;var l=U$4;Jj=g;if((U$4=k)&&!l)for(V$4=e;null!==V$4;)g=V$4,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V$4=k):jk(e);for(;null!==f;)V$4=f,ik(f,b,c),f=f.sibling;V$4=e;Jj=h;U$4=l;}kk(a,b,c);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V$4=f):kk(a,b,c);}}
function kk(a){for(;null!==V$4;){var b=V$4;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U$4||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U$4)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p$3(163));}U$4||b.flags&512&&Rj(b);}catch(r){W$5(b,b.return,r);}}if(b===a){V$4=null;break}c=b.sibling;if(null!==c){c.return=b.return;V$4=c;break}V$4=b.return;}}function gk(a){for(;null!==V$4;){var b=V$4;if(b===a){V$4=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V$4=c;break}V$4=b.return;}}
function jk(a){for(;null!==V$4;){var b=V$4;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W$5(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W$5(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W$5(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W$5(b,g,k);}}}catch(k){W$5(b,b.return,k);}if(b===a){V$4=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V$4=h;break}V$4=b.return;}}
var lk=Math.ceil,mk=ua$2.ReactCurrentDispatcher,nk=ua$2.ReactCurrentOwner,ok=ua$2.ReactCurrentBatchConfig,K$4=0,Q$4=null,Y$3=null,Z$4=0,fj=0,ej=Uf(0),T$3=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R$4(){return 0!==(K$4&6)?B$5():-1!==Ak?Ak:Ak=B$5()}
function yi$1(a){if(0===(a.mode&1))return 1;if(0!==(K$4&2)&&0!==Z$4)return Z$4&-Z$4;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C$5;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p$3(185));Ac(a,c,d);if(0===(K$4&2)||a!==Q$4)a===Q$4&&(0===(K$4&2)&&(qk|=c),4===T$3&&Ck(a,Z$4)),Dk(a,d),1===c&&0===K$4&&0===(b.mode&1)&&(Gj=B$5()+500,fg&&jg());}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q$4?Z$4:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K$4&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K$4&6))throw Error(p$3(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q$4?Z$4:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K$4;K$4|=2;var f=Jk();if(Q$4!==a||Z$4!==b)uk=null,Gj=B$5()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K$4=e;null!==Y$3?b=0:(Q$4=null,Z$4=0,b=T$3);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B$5()),c;if(6===b)Ck(a,d);
else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B$5()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p$3(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B$5(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R$4();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B$5()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p$3(329));}}}Dk(a,B$5());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He$2(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K$4&6))throw Error(p$3(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B$5()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B$5()),c;if(6===c)throw Error(p$3(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B$5());return null}
function Qk(a,b){var c=K$4;K$4|=1;try{return a(b)}finally{K$4=c,0===K$4&&(Gj=B$5()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K$4&6)&&Hk();var b=K$4;K$4|=1;var c=ok.transition,d=C$5;try{if(ok.transition=null,C$5=1,a)return a()}finally{C$5=d,ok.transition=c,K$4=b,0===(K$4&6)&&jg();}}function Hj(){fj=ej.current;E$2(ej);}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y$3)for(c=Y$3.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E$2(Wf);E$2(H$4);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E$2(L$5);break;case 19:E$2(L$5);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q$4=a;Y$3=a=Pg(a.current,null);Z$4=fj=b;T$3=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
function Mk(a,b){do{var c=Y$3;try{$g();Fh.current=Rh;if(Ih){for(var d=M$5.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O$4=N$3=M$5=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T$3=1;pk=b;Y$3=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z$4;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p$3(426));}}else if(I$4&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T$3&&(T$3=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y$3===c&&null!==c&&(Y$3=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T$3||3===T$3||2===T$3)T$3=4;null===Q$4||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q$4,Z$4);}function Ik(a,b){var c=K$4;K$4|=2;var d=Jk();if(Q$4!==a||Z$4!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K$4=c;mk.current=d;if(null!==Y$3)throw Error(p$3(261));Q$4=null;Z$4=0;return T$3}function Tk(){for(;null!==Y$3;)Uk(Y$3);}function Lk(){for(;null!==Y$3&&!cc();)Uk(Y$3);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y$3=b;nk.current=null;}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y$3=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y$3=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T$3=6;Y$3=null;return}}b=b.sibling;if(null!==b){Y$3=b;return}Y$3=b=a;}while(null!==b);0===T$3&&(T$3=5);}function Pk(a,b,c){var d=C$5,e=ok.transition;try{ok.transition=null,C$5=1,Wk(a,b,c,d);}finally{ok.transition=e,C$5=d;}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K$4&6))throw Error(p$3(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p$3(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q$4&&(Y$3=Q$4=null,Z$4=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C$5;C$5=1;var h=K$4;K$4|=4;nk.current=null;Oj(a,c);dk(c,a);Oe$2(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K$4=h;C$5=g;ok.transition=f;}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B$5());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C$5;try{ok.transition=null;C$5=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K$4&6))throw Error(p$3(331));var e=K$4;K$4|=4;for(V$4=a.current;null!==V$4;){var f=V$4,g=f.child;if(0!==(V$4.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V$4=l;null!==V$4;){var m=V$4;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V$4=q;else for(;null!==V$4;){m=V$4;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V$4=null;break}if(null!==r){r.return=y;V$4=r;break}V$4=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V$4=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V$4=g;else b:for(;null!==V$4;){f=V$4;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V$4=x;break b}V$4=f.return;}}var w=a.current;for(V$4=w;null!==V$4;){g=V$4;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V$4=u;else b:for(g=w;null!==V$4;){h=V$4;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W$5(h,h.return,na);}if(h===g){V$4=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V$4=F;break b}V$4=h.return;}}K$4=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C$5=c,ok.transition=b;}}return !1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R$4();null!==a&&(Ac(a,1,b),Dk(a,b));}
function W$5(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R$4();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R$4();a.pingedLanes|=a.suspendedLanes&c;Q$4===a&&(Z$4&c)===c&&(4===T$3||3===T$3&&(Z$4&130023424)===Z$4&&500>B$5()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R$4();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p$3(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1;}else dh=!1,I$4&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H$4.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I$4&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p$3(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p$3(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p$3(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p$3(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I$4=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G$4(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He$2(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p$3(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p$3(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da$1)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya$2:return Tg(c.children,e,f,b);case za$1:g=8;e|=8;break;case Aa$1:return a=Bg(12,c,b,e|2),a.elementType=Aa$1,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba$1:g=10;break a;case Ca$1:g=9;break a;case Da$1:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p$3(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa$1,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p$3(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p$3(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R$4();e=yi$1(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R$4(),g=yi$1(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p$3(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B$5()),0===(K$4&6)&&(Gj=B$5()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R$4();gi(b,a,1,c);}}),il(a,1);}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R$4();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi$1(a),c=ih(a,b);if(null!==c){var d=R$4();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C$5};Ic=function(a,b){var c=C$5;try{return C$5=a,b()}finally{C$5=c;}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p$3(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue$2,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua$2.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
var createPortal = reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p$3(200));return cl(a,b,null,c)};var createRoot$1 = reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p$3(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
var findDOMNode = reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p$3(188));a=Object.keys(a).join(",");throw Error(p$3(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};var flushSync = reactDom_production_min.flushSync=function(a){return Rk(a)};var hydrate = reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p$3(200));return rl(null,a,b,!0,c)};
var hydrateRoot$1 = reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p$3(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};var render$1 = reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p$3(200));return rl(null,a,b,!1,c)};var unmountComponentAtNode = reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p$3(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};var unstable_batchedUpdates = reactDom_production_min.unstable_batchedUpdates=Qk;
var unstable_renderSubtreeIntoContainer = reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p$3(200));if(null==a||void 0===a._reactInternals)throw Error(p$3(38));return rl(a,b,c,!1,d)};var version = reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";

var reactDom = reactDom$1.exports;

"use strict";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  if (false) {
    throw new Error("^_^");
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
if (true) {
  checkDCE();
  reactDom$1.exports = reactDom_production_min;
} else {
  module.exports = require("./cjs/react-dom.development.js");
}

var reactDomExports = reactDom$1.exports;
const index = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var k$5=reactExports,l$2=reactDomExports;function m$4(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function n$2(a){if(m$4(a)!==a)throw Error("Unable to find node on an unmounted component.");}
function p$2(a){var b=a.alternate;if(!b){b=m$4(a);if(null===b)throw Error("Unable to find node on an unmounted component.");return b!==a?null:a}for(var c=a,d=b;;){var f=c.return;if(null===f)break;var g=f.alternate;if(null===g){d=f.return;if(null!==d){c=d;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===c)return n$2(f),a;if(g===d)return n$2(f),b;g=g.sibling;}throw Error("Unable to find node on an unmounted component.");}if(c.return!==d.return)c=f,d=g;else {for(var e=!1,h=f.child;h;){if(h===c){e=
!0;c=f;d=g;break}if(h===d){e=!0;d=f;c=g;break}h=h.sibling;}if(!e){for(h=g.child;h;){if(h===c){e=!0;c=g;d=f;break}if(h===d){e=!0;d=g;c=f;break}h=h.sibling;}if(!e)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");}}if(c.alternate!==d)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");}if(3!==c.tag)throw Error("Unable to find node on an unmounted component.");
return c.stateNode.current===c?a:b}var q$4=Object.assign;function r$3(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function t$3(){return !0}function u$3(){return !1}
function v$3(a){function b(c,b,f,g,e){this._reactName=c;this._targetInst=f;this.type=b;this.nativeEvent=g;this.target=e;this.currentTarget=null;for(var d in a)a.hasOwnProperty(d)&&(c=a[d],this[d]=c?c(g):g[d]);this.isDefaultPrevented=(null!=g.defaultPrevented?g.defaultPrevented:!1===g.returnValue)?t$3:u$3;this.isPropagationStopped=u$3;return this}q$4(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=t$3);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=t$3);},persist:function(){},isPersistent:t$3});return b}var w$3={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},x$3=v$3(w$3),y$2=q$4({},w$3,{view:0,detail:0});v$3(y$2);
var z$5,A$2,B$4,D$3=q$4({},y$2,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:C$4,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in a)return a.movementX;a!==B$4&&(B$4&&"mousemove"===a.type?(z$5=a.screenX-B$4.screenX,A$2=a.screenY-B$4.screenY):A$2=z$5=0,B$4=a);return z$5},movementY:function(a){return "movementY"in a?a.movementY:A$2}});
v$3(D$3);var E$1=q$4({},D$3,{dataTransfer:0});v$3(E$1);var F$4=q$4({},y$2,{relatedTarget:0});v$3(F$4);var aa=q$4({},w$3,{animationName:0,elapsedTime:0,pseudoElement:0});v$3(aa);var ba=q$4({},w$3,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}});v$3(ba);var ca=q$4({},w$3,{data:0});v$3(ca);
var da$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ea={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fa$1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ha(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=fa$1[a])?!!b[a]:!1}function C$4(){return ha}
var ia=q$4({},y$2,{key:function(a){if(a.key){var b=da$1[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=r$3(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?ea[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:C$4,charCode:function(a){return "keypress"===a.type?r$3(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?r$3(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}});v$3(ia);var ja=q$4({},D$3,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0});v$3(ja);var ka=q$4({},y$2,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:C$4});v$3(ka);var la=q$4({},w$3,{propertyName:0,elapsedTime:0,pseudoElement:0});v$3(la);
var ma$1=q$4({},D$3,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0});v$3(ma$1);function na(a,b,c,d,f,g,e,h,N){var G=Array.prototype.slice.call(arguments,3);try{b.apply(c,G);}catch(oa){this.onError(oa);}}var H$3=!1,I$3=null,J$4=!1,K$3=null,pa$1={onError:function(a){H$3=!0;I$3=a;}};function qa(a,b,c,d,f,g,e,h,N){H$3=!1;I$3=null;na.apply(pa$1,arguments);}
function ra(a,b,c,d,f,g,e,h,N){qa.apply(this,arguments);if(H$3){if(H$3){var G=I$3;H$3=!1;I$3=null;}else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");J$4||(J$4=!0,K$3=G);}}var L$4=Array.isArray,M$4=l$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,sa=M$4[0],ta=M$4[1],ua$1=M$4[2],va=M$4[3],wa=M$4[4],xa=k$5.unstable_act;function ya$1(){}
function za(a,b){if(!a)return [];a=p$2(a);if(!a)return [];for(var c=a,d=[];;){if(5===c.tag||6===c.tag||1===c.tag||0===c.tag){var f=c.stateNode;b(f)&&d.push(f);}if(c.child)c.child.return=c,c=c.child;else {if(c===a)return d;for(;!c.sibling;){if(!c.return||c.return===a)return d;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}}
function O$3(a,b){if(a&&!a._reactInternals){var c=String(a);a=L$4(a)?"an array":a&&1===a.nodeType&&a.tagName?"a DOM node":"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c;throw Error(b+"(...): the first argument must be a React class instance. Instead received: "+(a+"."));}}function P$5(a){return !(!a||1!==a.nodeType||!a.tagName)}function Q$3(a){return P$5(a)?!1:null!=a&&"function"===typeof a.render&&"function"===typeof a.setState}
function R$3(a,b){return Q$3(a)?a._reactInternals.type===b:!1}function S$3(a,b){O$3(a,"findAllInRenderedTree");return a?za(a._reactInternals,b):[]}
function T$2(a,b){O$3(a,"scryRenderedDOMComponentsWithClass");return S$3(a,function(a){if(P$5(a)){var c=a.className;"string"!==typeof c&&(c=a.getAttribute("class")||"");var f=c.split(/\s+/);if(!L$4(b)){if(void 0===b)throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");b=b.split(/\s+/);}return b.every(function(a){return -1!==f.indexOf(a)})}return !1})}
function U$3(a,b){O$3(a,"scryRenderedDOMComponentsWithTag");return S$3(a,function(a){return P$5(a)&&a.tagName.toUpperCase()===b.toUpperCase()})}function V$3(a,b){O$3(a,"scryRenderedComponentsWithType");return S$3(a,function(a){return R$3(a,b)})}function W$4(a,b,c){var d=a.type||"unknown-event";a.currentTarget=ta(c);ra(d,b,void 0,a);a.currentTarget=null;}
function X$3(a,b,c){for(var d=[];a;){d.push(a);do a=a.return;while(a&&5!==a.tag);a=a?a:null;}for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c);}
function Y$2(a,b){var c=a.stateNode;if(!c)return null;var d=ua$1(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==typeof c)throw Error("Expected `"+
b+"` listener to be a function, instead got a value of `"+typeof c+"` type.");return c}function Aa(a,b,c){a&&c&&c._reactName&&(b=Y$2(a,c._reactName))&&(null==c._dispatchListeners&&(c._dispatchListeners=[]),null==c._dispatchInstances&&(c._dispatchInstances=[]),c._dispatchListeners.push(b),c._dispatchInstances.push(a));}
function Ba(a,b,c){var d=c._reactName;"captured"===b&&(d+="Capture");if(b=Y$2(a,d))null==c._dispatchListeners&&(c._dispatchListeners=[]),null==c._dispatchInstances&&(c._dispatchInstances=[]),c._dispatchListeners.push(b),c._dispatchInstances.push(a);}var Z$3={},Ca=new Set(["mouseEnter","mouseLeave","pointerEnter","pointerLeave"]);
function Da(a){return function(b,c){if(k$5.isValidElement(b))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");if(Q$3(b))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");var d="on"+a[0].toUpperCase()+
a.slice(1),f=new ya$1;f.target=b;f.type=a.toLowerCase();var g=sa(b),e=new x$3(d,f.type,g,f,b);e.persist();q$4(e,c);Ca.has(a)?e&&e._reactName&&Aa(e._targetInst,null,e):e&&e._reactName&&X$3(e._targetInst,Ba,e);l$2.unstable_batchedUpdates(function(){va(b);if(e){var a=e._dispatchListeners,c=e._dispatchInstances;if(L$4(a))for(var d=0;d<a.length&&!e.isPropagationStopped();d++)W$4(e,a[d],c[d]);else a&&W$4(e,a,c);e._dispatchListeners=null;e._dispatchInstances=null;e.isPersistent()||e.constructor.release(e);}if(J$4)throw a=
K$3,J$4=!1,K$3=null,a;});wa();}}
"blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(a){Z$3[a]=Da(a);});
var Simulate = reactDomTestUtils_production_min.Simulate=Z$3;var act = reactDomTestUtils_production_min.act=xa;var findAllInRenderedTree = reactDomTestUtils_production_min.findAllInRenderedTree=S$3;var findRenderedComponentWithType = reactDomTestUtils_production_min.findRenderedComponentWithType=function(a,b){O$3(a,"findRenderedComponentWithType");a=V$3(a,b);if(1!==a.length)throw Error("Did not find exactly one match (found: "+a.length+") for componentType:"+b);return a[0]};var findRenderedDOMComponentWithClass = reactDomTestUtils_production_min.findRenderedDOMComponentWithClass=function(a,b){O$3(a,"findRenderedDOMComponentWithClass");a=T$2(a,b);if(1!==a.length)throw Error("Did not find exactly one match (found: "+a.length+") for class:"+b);return a[0]};
var findRenderedDOMComponentWithTag = reactDomTestUtils_production_min.findRenderedDOMComponentWithTag=function(a,b){O$3(a,"findRenderedDOMComponentWithTag");a=U$3(a,b);if(1!==a.length)throw Error("Did not find exactly one match (found: "+a.length+") for tag:"+b);return a[0]};var isCompositeComponent = reactDomTestUtils_production_min.isCompositeComponent=Q$3;var isCompositeComponentWithType = reactDomTestUtils_production_min.isCompositeComponentWithType=R$3;var isDOMComponent = reactDomTestUtils_production_min.isDOMComponent=P$5;var isDOMComponentElement = reactDomTestUtils_production_min.isDOMComponentElement=function(a){return !!(a&&k$5.isValidElement(a)&&a.tagName)};var isElement = reactDomTestUtils_production_min.isElement=function(a){return k$5.isValidElement(a)};
var isElementOfType = reactDomTestUtils_production_min.isElementOfType=function(a,b){return k$5.isValidElement(a)&&a.type===b};var mockComponent = reactDomTestUtils_production_min.mockComponent=function(a,b){b=b||a.mockTagName||"div";a.prototype.render.mockImplementation(function(){return k$5.createElement(b,null,this.props.children)});return this};var nativeTouchData = reactDomTestUtils_production_min.nativeTouchData=function(a,b){return {touches:[{pageX:a,pageY:b}]}};var renderIntoDocument = reactDomTestUtils_production_min.renderIntoDocument=function(a){var b=document.createElement("div");return l$2.render(a,b)};var scryRenderedComponentsWithType = reactDomTestUtils_production_min.scryRenderedComponentsWithType=V$3;
var scryRenderedDOMComponentsWithClass = reactDomTestUtils_production_min.scryRenderedDOMComponentsWithClass=T$2;var scryRenderedDOMComponentsWithTag = reactDomTestUtils_production_min.scryRenderedDOMComponentsWithTag=U$3;var traverseTwoPhase = reactDomTestUtils_production_min.traverseTwoPhase=X$3;

var testUtils = testUtils$2.exports;

"use strict";
if (true) {
  testUtils$2.exports = reactDomTestUtils_production_min;
} else {
  module.exports = require("./cjs/react-dom-test-utils.development.js");
}

var testUtilsExports = testUtils$2.exports;
const testUtils$1 = /*@__PURE__*/getDefaultExportFromCjs(testUtilsExports);

// src/index.ts
var scope = (() => {
  let win;
  if (typeof window !== "undefined") {
    win = window;
  } else if (typeof globalThis !== "undefined") {
    win = globalThis;
  } else if (typeof global !== "undefined") {
    win = global;
  } else if (typeof self !== "undefined") {
    win = self;
  } else {
    win = {};
  }
  return win;
})();

var define_process_env_default = {};
var require_constants = __commonJS({ "../../node_modules/semver/internal/constants.js"(exports, module) {
  var SEMVER_SPEC_VERSION = "2.0.0", MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH = 16, MAX_SAFE_BUILD_LENGTH = 250, RELEASE_TYPES = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  module.exports = { MAX_LENGTH: 256, MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_SAFE_INTEGER, RELEASE_TYPES, SEMVER_SPEC_VERSION, FLAG_INCLUDE_PRERELEASE: 1, FLAG_LOOSE: 2 };
} });
var require_debug = __commonJS({ "../../node_modules/semver/internal/debug.js"(exports, module) {
  var debug = typeof process == "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  module.exports = debug;
} });
var require_re = __commonJS({ "../../node_modules/semver/internal/re.js"(exports, module) {
  var { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = require_constants(), debug = require_debug();
  exports = module.exports = {};
  var re = exports.re = [], safeRe = exports.safeRe = [], src = exports.src = [], t = exports.t = {}, R = 0, LETTERDASHNUMBER = "[a-zA-Z0-9-]", safeRegexReplacements = [["\\s", 1], ["\\d", MAX_LENGTH], [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]], makeSafeRegex = (value) => {
    for (let [token, max] of safeRegexReplacements) value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    return value;
  }, createToken = (name, value, isGlobal) => {
    let safe = makeSafeRegex(value), index = R++;
    debug(name, index, value), t[name] = index, src[index] = value, re[index] = new RegExp(value, isGlobal ? "g" : void 0), safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
  };
  createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
  createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
  createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
  createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
  createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
  createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
  createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
  createToken("FULL", `^${src[t.FULLPLAIN]}$`);
  createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
  createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
  createToken("GTLT", "((?:<|>)?=?)");
  createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
  createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
  createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
  createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
  createToken("COERCEPLAIN", `(^|[^\\d])(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
  createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
  createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
  createToken("COERCERTL", src[t.COERCE], true);
  createToken("COERCERTLFULL", src[t.COERCEFULL], true);
  createToken("LONETILDE", "(?:~>?)");
  createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
  exports.tildeTrimReplace = "$1~";
  createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
  createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
  createToken("LONECARET", "(?:\\^)");
  createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
  exports.caretTrimReplace = "$1^";
  createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
  createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
  createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
  createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
  createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
  exports.comparatorTrimReplace = "$1$2$3";
  createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
  createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
  createToken("STAR", "(<|>)?=?\\s*\\*");
  createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
} });
var require_parse_options = __commonJS({ "../../node_modules/semver/internal/parse-options.js"(exports, module) {
  var looseOption = Object.freeze({ loose: true }), emptyOpts = Object.freeze({}), parseOptions = (options) => options ? typeof options != "object" ? looseOption : options : emptyOpts;
  module.exports = parseOptions;
} });
var require_identifiers = __commonJS({ "../../node_modules/semver/internal/identifiers.js"(exports, module) {
  var numeric = /^[0-9]+$/, compareIdentifiers = (a, b) => {
    let anum = numeric.test(a), bnum = numeric.test(b);
    return anum && bnum && (a = +a, b = +b), a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  }, rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
  module.exports = { compareIdentifiers, rcompareIdentifiers };
} });
var require_semver = __commonJS({ "../../node_modules/semver/classes/semver.js"(exports, module) {
  var debug = require_debug(), { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants(), { safeRe: re, t } = require_re(), parseOptions = require_parse_options(), { compareIdentifiers } = require_identifiers(), SemVer = class _SemVer {
    constructor(version2, options) {
      if (options = parseOptions(options), version2 instanceof _SemVer) {
        if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) return version2;
        version2 = version2.version;
      } else if (typeof version2 != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
      if (version2.length > MAX_LENGTH) throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
      debug("SemVer", version2, options), this.options = options, this.loose = !!options.loose, this.includePrerelease = !!options.includePrerelease;
      let m = version2.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
      if (!m) throw new TypeError(`Invalid Version: ${version2}`);
      if (this.raw = version2, this.major = +m[1], this.minor = +m[2], this.patch = +m[3], this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError("Invalid patch version");
      m[4] ? this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          let num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
        }
        return id;
      }) : this.prerelease = [], this.build = m[5] ? m[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      if (debug("SemVer.compare", this.version, this.options, other), !(other instanceof _SemVer)) {
        if (typeof other == "string" && other === this.version) return 0;
        other = new _SemVer(other, this.options);
      }
      return other.version === this.version ? 0 : this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      return other instanceof _SemVer || (other = new _SemVer(other, this.options)), compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
      if (other instanceof _SemVer || (other = new _SemVer(other, this.options)), this.prerelease.length && !other.prerelease.length) return -1;
      if (!this.prerelease.length && other.prerelease.length) return 1;
      if (!this.prerelease.length && !other.prerelease.length) return 0;
      let i = 0;
      do {
        let a = this.prerelease[i], b = other.prerelease[i];
        if (debug("prerelease compare", i, a, b), a === void 0 && b === void 0) return 0;
        if (b === void 0) return 1;
        if (a === void 0) return -1;
        if (a === b) continue;
        return compareIdentifiers(a, b);
      } while (++i);
    }
    compareBuild(other) {
      other instanceof _SemVer || (other = new _SemVer(other, this.options));
      let i = 0;
      do {
        let a = this.build[i], b = other.build[i];
        if (debug("build compare", i, a, b), a === void 0 && b === void 0) return 0;
        if (b === void 0) return 1;
        if (a === void 0) return -1;
        if (a === b) continue;
        return compareIdentifiers(a, b);
      } while (++i);
    }
    inc(release, identifier, identifierBase) {
      switch (release) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", identifier, identifierBase), this.inc("pre", identifier, identifierBase);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", identifier, identifierBase), this.inc("pre", identifier, identifierBase);
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre": {
          let base = Number(identifierBase) ? 1 : 0;
          if (!identifier && identifierBase === false) throw new Error("invalid increment argument: identifier is empty");
          if (this.prerelease.length === 0) this.prerelease = [base];
          else {
            let i = this.prerelease.length;
            for (; --i >= 0; ) typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
            if (i === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            identifierBase === false && (prerelease = [identifier]), compareIdentifiers(this.prerelease[0], identifier) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = prerelease) : this.prerelease = prerelease;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  };
  module.exports = SemVer;
} });
var require_parse = __commonJS({ "../../node_modules/semver/functions/parse.js"(exports, module) {
  var SemVer = require_semver(), parse = (version2, options, throwErrors = false) => {
    if (version2 instanceof SemVer) return version2;
    try {
      return new SemVer(version2, options);
    } catch (er) {
      if (!throwErrors) return null;
      throw er;
    }
  };
  module.exports = parse;
} });
var require_valid = __commonJS({ "../../node_modules/semver/functions/valid.js"(exports, module) {
  var parse = require_parse(), valid = (version2, options) => {
    let v = parse(version2, options);
    return v ? v.version : null;
  };
  module.exports = valid;
} });
var require_clean = __commonJS({ "../../node_modules/semver/functions/clean.js"(exports, module) {
  var parse = require_parse(), clean = (version2, options) => {
    let s = parse(version2.trim().replace(/^[=v]+/, ""), options);
    return s ? s.version : null;
  };
  module.exports = clean;
} });
var require_inc = __commonJS({ "../../node_modules/semver/functions/inc.js"(exports, module) {
  var SemVer = require_semver(), inc = (version2, release, options, identifier, identifierBase) => {
    typeof options == "string" && (identifierBase = identifier, identifier = options, options = void 0);
    try {
      return new SemVer(version2 instanceof SemVer ? version2.version : version2, options).inc(release, identifier, identifierBase).version;
    } catch {
      return null;
    }
  };
  module.exports = inc;
} });
var require_diff = __commonJS({ "../../node_modules/semver/functions/diff.js"(exports, module) {
  var parse = require_parse(), diff = (version1, version2) => {
    let v1 = parse(version1, null, true), v2 = parse(version2, null, true), comparison = v1.compare(v2);
    if (comparison === 0) return null;
    let v1Higher = comparison > 0, highVersion = v1Higher ? v1 : v2, lowVersion = v1Higher ? v2 : v1, highHasPre = !!highVersion.prerelease.length;
    if (!!lowVersion.prerelease.length && !highHasPre) return !lowVersion.patch && !lowVersion.minor ? "major" : highVersion.patch ? "patch" : highVersion.minor ? "minor" : "major";
    let prefix = highHasPre ? "pre" : "";
    return v1.major !== v2.major ? prefix + "major" : v1.minor !== v2.minor ? prefix + "minor" : v1.patch !== v2.patch ? prefix + "patch" : "prerelease";
  };
  module.exports = diff;
} });
var require_major = __commonJS({ "../../node_modules/semver/functions/major.js"(exports, module) {
  var SemVer = require_semver(), major = (a, loose) => new SemVer(a, loose).major;
  module.exports = major;
} });
var require_minor = __commonJS({ "../../node_modules/semver/functions/minor.js"(exports, module) {
  var SemVer = require_semver(), minor = (a, loose) => new SemVer(a, loose).minor;
  module.exports = minor;
} });
var require_patch = __commonJS({ "../../node_modules/semver/functions/patch.js"(exports, module) {
  var SemVer = require_semver(), patch = (a, loose) => new SemVer(a, loose).patch;
  module.exports = patch;
} });
var require_prerelease = __commonJS({ "../../node_modules/semver/functions/prerelease.js"(exports, module) {
  var parse = require_parse(), prerelease = (version2, options) => {
    let parsed = parse(version2, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  };
  module.exports = prerelease;
} });
var require_compare = __commonJS({ "../../node_modules/semver/functions/compare.js"(exports, module) {
  var SemVer = require_semver(), compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
  module.exports = compare;
} });
var require_rcompare = __commonJS({ "../../node_modules/semver/functions/rcompare.js"(exports, module) {
  var compare = require_compare(), rcompare = (a, b, loose) => compare(b, a, loose);
  module.exports = rcompare;
} });
var require_compare_loose = __commonJS({ "../../node_modules/semver/functions/compare-loose.js"(exports, module) {
  var compare = require_compare(), compareLoose = (a, b) => compare(a, b, true);
  module.exports = compareLoose;
} });
var require_compare_build = __commonJS({ "../../node_modules/semver/functions/compare-build.js"(exports, module) {
  var SemVer = require_semver(), compareBuild = (a, b, loose) => {
    let versionA = new SemVer(a, loose), versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  };
  module.exports = compareBuild;
} });
var require_sort = __commonJS({ "../../node_modules/semver/functions/sort.js"(exports, module) {
  var compareBuild = require_compare_build(), sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
  module.exports = sort;
} });
var require_rsort = __commonJS({ "../../node_modules/semver/functions/rsort.js"(exports, module) {
  var compareBuild = require_compare_build(), rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
  module.exports = rsort;
} });
var require_gt = __commonJS({ "../../node_modules/semver/functions/gt.js"(exports, module) {
  var compare = require_compare(), gt = (a, b, loose) => compare(a, b, loose) > 0;
  module.exports = gt;
} });
var require_lt = __commonJS({ "../../node_modules/semver/functions/lt.js"(exports, module) {
  var compare = require_compare(), lt = (a, b, loose) => compare(a, b, loose) < 0;
  module.exports = lt;
} });
var require_eq = __commonJS({ "../../node_modules/semver/functions/eq.js"(exports, module) {
  var compare = require_compare(), eq = (a, b, loose) => compare(a, b, loose) === 0;
  module.exports = eq;
} });
var require_neq = __commonJS({ "../../node_modules/semver/functions/neq.js"(exports, module) {
  var compare = require_compare(), neq = (a, b, loose) => compare(a, b, loose) !== 0;
  module.exports = neq;
} });
var require_gte = __commonJS({ "../../node_modules/semver/functions/gte.js"(exports, module) {
  var compare = require_compare(), gte = (a, b, loose) => compare(a, b, loose) >= 0;
  module.exports = gte;
} });
var require_lte = __commonJS({ "../../node_modules/semver/functions/lte.js"(exports, module) {
  var compare = require_compare(), lte = (a, b, loose) => compare(a, b, loose) <= 0;
  module.exports = lte;
} });
var require_cmp = __commonJS({ "../../node_modules/semver/functions/cmp.js"(exports, module) {
  var eq = require_eq(), neq = require_neq(), gt = require_gt(), gte = require_gte(), lt = require_lt(), lte = require_lte(), cmp = (a, op, b, loose) => {
    switch (op) {
      case "===":
        return typeof a == "object" && (a = a.version), typeof b == "object" && (b = b.version), a === b;
      case "!==":
        return typeof a == "object" && (a = a.version), typeof b == "object" && (b = b.version), a !== b;
      case "":
      case "=":
      case "==":
        return eq(a, b, loose);
      case "!=":
        return neq(a, b, loose);
      case ">":
        return gt(a, b, loose);
      case ">=":
        return gte(a, b, loose);
      case "<":
        return lt(a, b, loose);
      case "<=":
        return lte(a, b, loose);
      default:
        throw new TypeError(`Invalid operator: ${op}`);
    }
  };
  module.exports = cmp;
} });
var require_coerce = __commonJS({ "../../node_modules/semver/functions/coerce.js"(exports, module) {
  var SemVer = require_semver(), parse = require_parse(), { safeRe: re, t } = require_re(), coerce = (version2, options) => {
    if (version2 instanceof SemVer) return version2;
    if (typeof version2 == "number" && (version2 = String(version2)), typeof version2 != "string") return null;
    options = options || {};
    let match = null;
    if (!options.rtl) match = version2.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    else {
      let coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL], next;
      for (; (next = coerceRtlRegex.exec(version2)) && (!match || match.index + match[0].length !== version2.length); ) (!match || next.index + next[0].length !== match.index + match[0].length) && (match = next), coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
      coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) return null;
    let major = match[2], minor = match[3] || "0", patch = match[4] || "0", prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "", build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
  };
  module.exports = coerce;
} });
var require_lrucache = __commonJS({ "../../node_modules/semver/internal/lrucache.js"(exports, module) {
  var LRUCache = class {
    constructor() {
      this.max = 1e3, this.map = /* @__PURE__ */ new Map();
    }
    get(key) {
      let value = this.map.get(key);
      if (value !== void 0) return this.map.delete(key), this.map.set(key, value), value;
    }
    delete(key) {
      return this.map.delete(key);
    }
    set(key, value) {
      if (!this.delete(key) && value !== void 0) {
        if (this.map.size >= this.max) {
          let firstKey = this.map.keys().next().value;
          this.delete(firstKey);
        }
        this.map.set(key, value);
      }
      return this;
    }
  };
  module.exports = LRUCache;
} });
var require_range = __commonJS({ "../../node_modules/semver/classes/range.js"(exports, module) {
  var SPACE_CHARACTERS = /\s+/g, Range = class _Range {
    constructor(range, options) {
      if (options = parseOptions(options), range instanceof _Range) return range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease ? range : new _Range(range.raw, options);
      if (range instanceof Comparator) return this.raw = range.value, this.set = [[range]], this.formatted = void 0, this;
      if (this.options = options, this.loose = !!options.loose, this.includePrerelease = !!options.includePrerelease, this.raw = range.trim().replace(SPACE_CHARACTERS, " "), this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let first = this.set[0];
        if (this.set = this.set.filter((c) => !isNullSet(c[0])), this.set.length === 0) this.set = [first];
        else if (this.set.length > 1) {
          for (let c of this.set) if (c.length === 1 && isAny(c[0])) {
            this.set = [c];
            break;
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i = 0; i < this.set.length; i++) {
          i > 0 && (this.formatted += "||");
          let comps = this.set[i];
          for (let k = 0; k < comps.length; k++) k > 0 && (this.formatted += " "), this.formatted += comps[k].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range) {
      let memoKey = ((this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE)) + ":" + range, cached = cache.get(memoKey);
      if (cached) return cached;
      let loose = this.options.loose, hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
      range = range.replace(hr, hyphenReplace(this.options.includePrerelease)), debug("hyphen replace", range), range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace), debug("comparator trim", range), range = range.replace(re[t.TILDETRIM], tildeTrimReplace), debug("tilde trim", range), range = range.replace(re[t.CARETTRIM], caretTrimReplace), debug("caret trim", range);
      let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      loose && (rangeList = rangeList.filter((comp) => (debug("loose invalid filter", comp, this.options), !!comp.match(re[t.COMPARATORLOOSE])))), debug("range list", rangeList);
      let rangeMap = /* @__PURE__ */ new Map(), comparators = rangeList.map((comp) => new Comparator(comp, this.options));
      for (let comp of comparators) {
        if (isNullSet(comp)) return [comp];
        rangeMap.set(comp.value, comp);
      }
      rangeMap.size > 1 && rangeMap.has("") && rangeMap.delete("");
      let result = [...rangeMap.values()];
      return cache.set(memoKey, result), result;
    }
    intersects(range, options) {
      if (!(range instanceof _Range)) throw new TypeError("a Range is required");
      return this.set.some((thisComparators) => isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => rangeComparators.every((rangeComparator) => thisComparator.intersects(rangeComparator, options)))));
    }
    test(version2) {
      if (!version2) return false;
      if (typeof version2 == "string") try {
        version2 = new SemVer(version2, this.options);
      } catch {
        return false;
      }
      for (let i = 0; i < this.set.length; i++) if (testSet(this.set[i], version2, this.options)) return true;
      return false;
    }
  };
  module.exports = Range;
  var LRU = require_lrucache(), cache = new LRU(), parseOptions = require_parse_options(), Comparator = require_comparator(), debug = require_debug(), SemVer = require_semver(), { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = require_re(), { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants(), isNullSet = (c) => c.value === "<0.0.0-0", isAny = (c) => c.value === "", isSatisfiable = (comparators, options) => {
    let result = true, remainingComparators = comparators.slice(), testComparator = remainingComparators.pop();
    for (; result && remainingComparators.length; ) result = remainingComparators.every((otherComparator) => testComparator.intersects(otherComparator, options)), testComparator = remainingComparators.pop();
    return result;
  }, parseComparator = (comp, options) => (debug("comp", comp, options), comp = replaceCarets(comp, options), debug("caret", comp), comp = replaceTildes(comp, options), debug("tildes", comp), comp = replaceXRanges(comp, options), debug("xrange", comp), comp = replaceStars(comp, options), debug("stars", comp), comp), isX = (id) => !id || id.toLowerCase() === "x" || id === "*", replaceTildes = (comp, options) => comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" "), replaceTilde = (comp, options) => {
    let r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("tilde", comp, _, M, m, p, pr);
      let ret;
      return isX(M) ? ret = "" : isX(m) ? ret = `>=${M}.0.0 <${+M + 1}.0.0-0` : isX(p) ? ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0` : pr ? (debug("replaceTilde pr", pr), ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`) : ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`, debug("tilde return", ret), ret;
    });
  }, replaceCarets = (comp, options) => comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" "), replaceCaret = (comp, options) => {
    debug("caret", comp, options);
    let r = options.loose ? re[t.CARETLOOSE] : re[t.CARET], z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("caret", comp, _, M, m, p, pr);
      let ret;
      return isX(M) ? ret = "" : isX(m) ? ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0` : isX(p) ? M === "0" ? ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0` : ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0` : pr ? (debug("replaceCaret pr", pr), M === "0" ? m === "0" ? ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0` : ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0` : ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`) : (debug("no pr"), M === "0" ? m === "0" ? ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0` : ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0` : ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`), debug("caret return", ret), ret;
    });
  }, replaceXRanges = (comp, options) => (debug("replaceXRanges", comp, options), comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ")), replaceXRange = (comp, options) => {
    comp = comp.trim();
    let r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug("xRange", comp, ret, gtlt, M, m, p, pr);
      let xM = isX(M), xm = xM || isX(m), xp = xm || isX(p), anyX = xp;
      return gtlt === "=" && anyX && (gtlt = ""), pr = options.includePrerelease ? "-0" : "", xM ? gtlt === ">" || gtlt === "<" ? ret = "<0.0.0-0" : ret = "*" : gtlt && anyX ? (xm && (m = 0), p = 0, gtlt === ">" ? (gtlt = ">=", xm ? (M = +M + 1, m = 0, p = 0) : (m = +m + 1, p = 0)) : gtlt === "<=" && (gtlt = "<", xm ? M = +M + 1 : m = +m + 1), gtlt === "<" && (pr = "-0"), ret = `${gtlt + M}.${m}.${p}${pr}`) : xm ? ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0` : xp && (ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`), debug("xRange return", ret), ret;
    });
  }, replaceStars = (comp, options) => (debug("replaceStars", comp, options), comp.trim().replace(re[t.STAR], "")), replaceGTE0 = (comp, options) => (debug("replaceGTE0", comp, options), comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "")), hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => (isX(fM) ? from = "" : isX(fm) ? from = `>=${fM}.0.0${incPr ? "-0" : ""}` : isX(fp) ? from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}` : fpr ? from = `>=${from}` : from = `>=${from}${incPr ? "-0" : ""}`, isX(tM) ? to = "" : isX(tm) ? to = `<${+tM + 1}.0.0-0` : isX(tp) ? to = `<${tM}.${+tm + 1}.0-0` : tpr ? to = `<=${tM}.${tm}.${tp}-${tpr}` : incPr ? to = `<${tM}.${tm}.${+tp + 1}-0` : to = `<=${to}`, `${from} ${to}`.trim()), testSet = (set, version2, options) => {
    for (let i = 0; i < set.length; i++) if (!set[i].test(version2)) return false;
    if (version2.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set.length; i++) if (debug(set[i].semver), set[i].semver !== Comparator.ANY && set[i].semver.prerelease.length > 0) {
        let allowed = set[i].semver;
        if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) return true;
      }
      return false;
    }
    return true;
  };
} });
var require_comparator = __commonJS({ "../../node_modules/semver/classes/comparator.js"(exports, module) {
  var ANY = Symbol("SemVer ANY"), Comparator = class _Comparator {
    static get ANY() {
      return ANY;
    }
    constructor(comp, options) {
      if (options = parseOptions(options), comp instanceof _Comparator) {
        if (comp.loose === !!options.loose) return comp;
        comp = comp.value;
      }
      comp = comp.trim().split(/\s+/).join(" "), debug("comparator", comp, options), this.options = options, this.loose = !!options.loose, this.parse(comp), this.semver === ANY ? this.value = "" : this.value = this.operator + this.semver.version, debug("comp", this);
    }
    parse(comp) {
      let r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR], m = comp.match(r);
      if (!m) throw new TypeError(`Invalid comparator: ${comp}`);
      this.operator = m[1] !== void 0 ? m[1] : "", this.operator === "=" && (this.operator = ""), m[2] ? this.semver = new SemVer(m[2], this.options.loose) : this.semver = ANY;
    }
    toString() {
      return this.value;
    }
    test(version2) {
      if (debug("Comparator.test", version2, this.options.loose), this.semver === ANY || version2 === ANY) return true;
      if (typeof version2 == "string") try {
        version2 = new SemVer(version2, this.options);
      } catch {
        return false;
      }
      return cmp(version2, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof _Comparator)) throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? true : new Range(comp.value, options).test(this.value) : comp.operator === "" ? comp.value === "" ? true : new Range(this.value, options).test(comp.semver) : (options = parseOptions(options), options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0") || !options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0")) ? false : !!(this.operator.startsWith(">") && comp.operator.startsWith(">") || this.operator.startsWith("<") && comp.operator.startsWith("<") || this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=") || cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<") || cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")));
    }
  };
  module.exports = Comparator;
  var parseOptions = require_parse_options(), { safeRe: re, t } = require_re(), cmp = require_cmp(), debug = require_debug(), SemVer = require_semver(), Range = require_range();
} });
var require_satisfies = __commonJS({ "../../node_modules/semver/functions/satisfies.js"(exports, module) {
  var Range = require_range(), satisfies = (version2, range, options) => {
    try {
      range = new Range(range, options);
    } catch {
      return false;
    }
    return range.test(version2);
  };
  module.exports = satisfies;
} });
var require_to_comparators = __commonJS({ "../../node_modules/semver/ranges/to-comparators.js"(exports, module) {
  var Range = require_range(), toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
  module.exports = toComparators;
} });
var require_max_satisfying = __commonJS({ "../../node_modules/semver/ranges/max-satisfying.js"(exports, module) {
  var SemVer = require_semver(), Range = require_range(), maxSatisfying = (versions, range, options) => {
    let max = null, maxSV = null, rangeObj = null;
    try {
      rangeObj = new Range(range, options);
    } catch {
      return null;
    }
    return versions.forEach((v) => {
      rangeObj.test(v) && (!max || maxSV.compare(v) === -1) && (max = v, maxSV = new SemVer(max, options));
    }), max;
  };
  module.exports = maxSatisfying;
} });
var require_min_satisfying = __commonJS({ "../../node_modules/semver/ranges/min-satisfying.js"(exports, module) {
  var SemVer = require_semver(), Range = require_range(), minSatisfying = (versions, range, options) => {
    let min = null, minSV = null, rangeObj = null;
    try {
      rangeObj = new Range(range, options);
    } catch {
      return null;
    }
    return versions.forEach((v) => {
      rangeObj.test(v) && (!min || minSV.compare(v) === 1) && (min = v, minSV = new SemVer(min, options));
    }), min;
  };
  module.exports = minSatisfying;
} });
var require_min_version = __commonJS({ "../../node_modules/semver/ranges/min-version.js"(exports, module) {
  var SemVer = require_semver(), Range = require_range(), gt = require_gt(), minVersion = (range, loose) => {
    range = new Range(range, loose);
    let minver = new SemVer("0.0.0");
    if (range.test(minver) || (minver = new SemVer("0.0.0-0"), range.test(minver))) return minver;
    minver = null;
    for (let i = 0; i < range.set.length; ++i) {
      let comparators = range.set[i], setMin = null;
      comparators.forEach((comparator) => {
        let compver = new SemVer(comparator.semver.version);
        switch (comparator.operator) {
          case ">":
            compver.prerelease.length === 0 ? compver.patch++ : compver.prerelease.push(0), compver.raw = compver.format();
          case "":
          case ">=":
            (!setMin || gt(compver, setMin)) && (setMin = compver);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${comparator.operator}`);
        }
      }), setMin && (!minver || gt(minver, setMin)) && (minver = setMin);
    }
    return minver && range.test(minver) ? minver : null;
  };
  module.exports = minVersion;
} });
var require_valid2 = __commonJS({ "../../node_modules/semver/ranges/valid.js"(exports, module) {
  var Range = require_range(), validRange = (range, options) => {
    try {
      return new Range(range, options).range || "*";
    } catch {
      return null;
    }
  };
  module.exports = validRange;
} });
var require_outside = __commonJS({ "../../node_modules/semver/ranges/outside.js"(exports, module) {
  var SemVer = require_semver(), Comparator = require_comparator(), { ANY } = Comparator, Range = require_range(), satisfies = require_satisfies(), gt = require_gt(), lt = require_lt(), lte = require_lte(), gte = require_gte(), outside = (version2, range, hilo, options) => {
    version2 = new SemVer(version2, options), range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt, ltefn = lte, ltfn = lt, comp = ">", ecomp = ">=";
        break;
      case "<":
        gtfn = lt, ltefn = gte, ltfn = gt, comp = "<", ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version2, range, options)) return false;
    for (let i = 0; i < range.set.length; ++i) {
      let comparators = range.set[i], high = null, low = null;
      if (comparators.forEach((comparator) => {
        comparator.semver === ANY && (comparator = new Comparator(">=0.0.0")), high = high || comparator, low = low || comparator, gtfn(comparator.semver, high.semver, options) ? high = comparator : ltfn(comparator.semver, low.semver, options) && (low = comparator);
      }), high.operator === comp || high.operator === ecomp || (!low.operator || low.operator === comp) && ltefn(version2, low.semver)) return false;
      if (low.operator === ecomp && ltfn(version2, low.semver)) return false;
    }
    return true;
  };
  module.exports = outside;
} });
var require_gtr = __commonJS({ "../../node_modules/semver/ranges/gtr.js"(exports, module) {
  var outside = require_outside(), gtr = (version2, range, options) => outside(version2, range, ">", options);
  module.exports = gtr;
} });
var require_ltr = __commonJS({ "../../node_modules/semver/ranges/ltr.js"(exports, module) {
  var outside = require_outside(), ltr = (version2, range, options) => outside(version2, range, "<", options);
  module.exports = ltr;
} });
var require_intersects = __commonJS({ "../../node_modules/semver/ranges/intersects.js"(exports, module) {
  var Range = require_range(), intersects = (r1, r2, options) => (r1 = new Range(r1, options), r2 = new Range(r2, options), r1.intersects(r2, options));
  module.exports = intersects;
} });
var require_simplify = __commonJS({ "../../node_modules/semver/ranges/simplify.js"(exports, module) {
  var satisfies = require_satisfies(), compare = require_compare();
  module.exports = (versions, range, options) => {
    let set = [], first = null, prev = null, v = versions.sort((a, b) => compare(a, b, options));
    for (let version2 of v) satisfies(version2, range, options) ? (prev = version2, first || (first = version2)) : (prev && set.push([first, prev]), prev = null, first = null);
    first && set.push([first, null]);
    let ranges = [];
    for (let [min, max] of set) min === max ? ranges.push(min) : !max && min === v[0] ? ranges.push("*") : max ? min === v[0] ? ranges.push(`<=${max}`) : ranges.push(`${min} - ${max}`) : ranges.push(`>=${min}`);
    let simplified = ranges.join(" || "), original = typeof range.raw == "string" ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
  };
} });
var require_subset = __commonJS({ "../../node_modules/semver/ranges/subset.js"(exports, module) {
  var Range = require_range(), Comparator = require_comparator(), { ANY } = Comparator, satisfies = require_satisfies(), compare = require_compare(), subset = (sub, dom, options = {}) => {
    if (sub === dom) return true;
    sub = new Range(sub, options), dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (let simpleSub of sub.set) {
      for (let simpleDom of dom.set) {
        let isSub = simpleSubset(simpleSub, simpleDom, options);
        if (sawNonNull = sawNonNull || isSub !== null, isSub) continue OUTER;
      }
      if (sawNonNull) return false;
    }
    return true;
  }, minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")], minimumVersion = [new Comparator(">=0.0.0")], simpleSubset = (sub, dom, options) => {
    if (sub === dom) return true;
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) return true;
      options.includePrerelease ? sub = minimumVersionWithPreRelease : sub = minimumVersion;
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) return true;
      dom = minimumVersion;
    }
    let eqSet = /* @__PURE__ */ new Set(), gt, lt;
    for (let c of sub) c.operator === ">" || c.operator === ">=" ? gt = higherGT(gt, c, options) : c.operator === "<" || c.operator === "<=" ? lt = lowerLT(lt, c, options) : eqSet.add(c.semver);
    if (eqSet.size > 1) return null;
    let gtltComp;
    if (gt && lt) {
      if (gtltComp = compare(gt.semver, lt.semver, options), gtltComp > 0) return null;
      if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) return null;
    }
    for (let eq of eqSet) {
      if (gt && !satisfies(eq, String(gt), options) || lt && !satisfies(eq, String(lt), options)) return null;
      for (let c of dom) if (!satisfies(eq, String(c), options)) return false;
      return true;
    }
    let higher, lower, hasDomLT, hasDomGT, needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false, needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0 && (needDomLTPre = false);
    for (let c of dom) {
      if (hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=", hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=", gt) {
        if (needDomGTPre && c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch && (needDomGTPre = false), c.operator === ">" || c.operator === ">=") {
          if (higher = higherGT(gt, c, options), higher === c && higher !== gt) return false;
        } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) return false;
      }
      if (lt) {
        if (needDomLTPre && c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch && (needDomLTPre = false), c.operator === "<" || c.operator === "<=") {
          if (lower = lowerLT(lt, c, options), lower === c && lower !== lt) return false;
        } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) return false;
      }
      if (!c.operator && (lt || gt) && gtltComp !== 0) return false;
    }
    return !(gt && hasDomLT && !lt && gtltComp !== 0 || lt && hasDomGT && !gt && gtltComp !== 0 || needDomGTPre || needDomLTPre);
  }, higherGT = (a, b, options) => {
    if (!a) return b;
    let comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 || b.operator === ">" && a.operator === ">=" ? b : a;
  }, lowerLT = (a, b, options) => {
    if (!a) return b;
    let comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 || b.operator === "<" && a.operator === "<=" ? b : a;
  };
  module.exports = subset;
} });
var require_semver2 = __commonJS({ "../../node_modules/semver/index.js"(exports, module) {
  var internalRe = require_re(), constants = require_constants(), SemVer = require_semver(), identifiers = require_identifiers(), parse = require_parse(), valid = require_valid(), clean = require_clean(), inc = require_inc(), diff = require_diff(), major = require_major(), minor = require_minor(), patch = require_patch(), prerelease = require_prerelease(), compare = require_compare(), rcompare = require_rcompare(), compareLoose = require_compare_loose(), compareBuild = require_compare_build(), sort = require_sort(), rsort = require_rsort(), gt = require_gt(), lt = require_lt(), eq = require_eq(), neq = require_neq(), gte = require_gte(), lte = require_lte(), cmp = require_cmp(), coerce = require_coerce(), Comparator = require_comparator(), Range = require_range(), satisfies = require_satisfies(), toComparators = require_to_comparators(), maxSatisfying = require_max_satisfying(), minSatisfying = require_min_satisfying(), minVersion = require_min_version(), validRange = require_valid2(), outside = require_outside(), gtr = require_gtr(), ltr = require_ltr(), intersects = require_intersects(), simplifyRange = require_simplify(), subset = require_subset();
  module.exports = { parse, valid, clean, inc, diff, major, minor, patch, prerelease, compare, rcompare, compareLoose, compareBuild, sort, rsort, gt, lt, eq, neq, gte, lte, cmp, coerce, Comparator, Range, satisfies, toComparators, maxSatisfying, minSatisfying, minVersion, validRange, outside, gtr, ltr, intersects, simplifyRange, subset, SemVer, re: internalRe.re, src: internalRe.src, tokens: internalRe.t, SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION, RELEASE_TYPES: constants.RELEASE_TYPES, compareIdentifiers: identifiers.compareIdentifiers, rcompareIdentifiers: identifiers.rcompareIdentifiers };
} });
var entry_preview_exports = {};
__export(entry_preview_exports, { beforeAll: () => beforeAll, decorators: () => decorators, mount: () => mount, parameters: () => parameters, render: () => render, renderToCanvas: () => renderToCanvas });
var import_semver = __toESM(require_semver2());
var clonedReact = { ...React3 }, reactAct = typeof clonedReact.act == "function" ? clonedReact.act : testUtilsExports.act;
function setReactActEnvironment(isReactActEnvironment) {
  globalThis.IS_REACT_ACT_ENVIRONMENT = isReactActEnvironment;
}
function getReactActEnvironment() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
function withGlobalActEnvironment(actImplementation) {
  return (callback) => {
    let previousActEnvironment = getReactActEnvironment();
    setReactActEnvironment(true);
    try {
      let callbackNeedsToBeAwaited = false, actResult = actImplementation(() => {
        let result = callback();
        return result !== null && typeof result == "object" && typeof result.then == "function" && (callbackNeedsToBeAwaited = true), result;
      });
      if (callbackNeedsToBeAwaited) {
        let thenable = actResult;
        return { then: (resolve, reject) => {
          thenable.then((returnValue) => {
            setReactActEnvironment(previousActEnvironment), resolve(returnValue);
          }, (error) => {
            setReactActEnvironment(previousActEnvironment), reject(error);
          });
        } };
      } else return setReactActEnvironment(previousActEnvironment), actResult;
    } catch (error) {
      throw setReactActEnvironment(previousActEnvironment), error;
    }
  };
}
var act2 = true ? (cb) => cb() : withGlobalActEnvironment(reactAct);
var render = (args, context) => {
  let { id, component: Component2 } = context;
  if (!Component2) throw new Error(`Unable to render story ${id} as the component annotation is missing from the default export`);
  return __pwReact.createElement(Component2, { ...args });
};
var { FRAMEWORK_OPTIONS } = scope, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidMount() {
    let { hasError } = this.state, { showMain } = this.props;
    hasError || showMain();
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : children;
  }
}, Wrapper = FRAMEWORK_OPTIONS?.strictMode ? reactExports.StrictMode : reactExports.Fragment, actQueue = [], isActing = false, processActQueue = async () => {
  if (isActing || actQueue.length === 0) return;
  isActing = true;
  let actTask = actQueue.shift();
  actTask && await actTask(), isActing = false, processActQueue();
};
async function renderToCanvas({ storyContext, unboundStoryFn, showMain, showException, forceRemount }, canvasElement) {
  let { renderElement, unmountElement } = await __vitePreload(async () => { const { renderElement, unmountElement } = await import('./react-18-CS7YitgX.js');return { renderElement, unmountElement }},true?[]:void 0), Story = unboundStoryFn, content = storyContext.parameters.__isPortableStory ? __pwReact.createElement(Story, { ...storyContext }) : __pwReact.createElement(ErrorBoundary, { showMain, showException }, __pwReact.createElement(Story, { ...storyContext })), element = Wrapper ? __pwReact.createElement(Wrapper, null, content) : content;
  return forceRemount && unmountElement(canvasElement), await new Promise(async (resolve, reject) => {
    actQueue.push(async () => {
      try {
        await act2(async () => {
          await renderElement(element, canvasElement, storyContext?.parameters?.react?.rootOptions);
        }), resolve();
      } catch (e) {
        reject(e);
      }
    }), processActQueue();
  }), async () => {
    await act2(() => {
      unmountElement(canvasElement);
    });
  };
}
var mount = (context) => async (ui) => (ui != null && (context.originalStoryFn = () => ui), await context.renderToCanvas(), context.canvas);
var parameters = { renderer: "react" }, decorators = [(story, context) => {
  if (!context.parameters?.react?.rsc) return story();
  let major = import_semver.default.major(reactExports.version), minor = import_semver.default.minor(reactExports.version);
  if (major < 18 || major === 18 && minor < 3) throw new Error("React Server Components require React >= 18.3");
  return reactExports.createElement(reactExports.Suspense, null, story());
}], beforeAll = async () => {
  try {
    let { configure } = await __vitePreload(async () => { const { configure } = await import('./index-CmaCktvo.js');return { configure }},true?[]:void 0);
    configure({ unstable_advanceTimersWrapper: (cb) => act2(cb), asyncWrapper: async (cb) => {
      let previousActEnvironment = getReactActEnvironment();
      setReactActEnvironment(false);
      try {
        let result = await cb();
        return await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 0), jestFakeTimersAreEnabled() && jest.advanceTimersByTime(0);
        }), result;
      } finally {
        setReactActEnvironment(previousActEnvironment);
      }
    }, eventWrapper: (cb) => {
      let result;
      return act2(() => (result = cb(), result)), result;
    } });
  } catch {
  }
};
function jestFakeTimersAreEnabled() {
  return typeof jest < "u" && jest !== null ? setTimeout._isMockFunction === true || Object.prototype.hasOwnProperty.call(setTimeout, "clock") : false;
}

var u$2 = Object.defineProperty;
var a$1 = (e, o) => u$2(e, "name", { value: o, configurable: !0 });

// ../node_modules/@storybook/global/dist/index.mjs
var y$1 = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ?
  e = self : e = {}, e;
})();

// src/client-logger/index.ts
var { LOGLEVEL: b$3 } = y$1, t$2 = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 10
}, L$3 = b$3, i$3 = t$2[L$3] || t$2.info, s$2 = {
  trace: /* @__PURE__ */ a$1((e, ...o) => {
    i$3 <= t$2.trace && console.trace(e, ...o);
  }, "trace"),
  debug: /* @__PURE__ */ a$1((e, ...o) => {
    i$3 <= t$2.debug && console.debug(e, ...o);
  }, "debug"),
  info: /* @__PURE__ */ a$1((e, ...o) => {
    i$3 <= t$2.info && console.info(e, ...o);
  }, "info"),
  warn: /* @__PURE__ */ a$1((e, ...o) => {
    i$3 <= t$2.warn && console.warn(e, ...o);
  }, "warn"),
  error: /* @__PURE__ */ a$1((e, ...o) => {
    i$3 <= t$2.error && console.error(e, ...o);
  }, "error"),
  log: /* @__PURE__ */ a$1((e, ...o) => {
    i$3 < t$2.silent && console.log(e, ...o);
  }, "log")
}, c$1 = /* @__PURE__ */ new Set(), n$1 = /* @__PURE__ */ a$1((e) => (o, ...l) => {
  if (!c$1.has(o))
    return c$1.add(o), s$2[e](o, ...l);
}, "once");
n$1.clear = () => c$1.clear();
n$1.trace = n$1("trace");
n$1.debug = n$1("debug");
n$1.info = n$1("info");
n$1.warn = n$1("warn");
n$1.error = n$1("error");
n$1.log = n$1("log");
var m$3 = n$1("warn"), r$2 = /* @__PURE__ */ a$1((e) => (...o) => {
  let l = [];
  if (o.length) {
    let f = /<span\s+style=(['"])([^'"]*)\1\s*>/gi, p = /<\/span>/gi, d;
    for (l.push(o[0].replace(f, "%c").replace(p, "%c")); d = f.exec(o[0]); )
      l.push(d[2]), l.push("");
    for (let g = 1; g < o.length; g++)
      l.push(o[g]);
  }
  s$2[e].apply(s$2, l);
}, "pretty");
r$2.trace = r$2("trace");
r$2.debug = r$2("debug");
r$2.info = r$2("info");
r$2.warn = r$2("warn");
r$2.error = r$2("error");

// src/core-events/index.ts
var _$2 = /* @__PURE__ */ ((E) => (E.CHANNEL_WS_DISCONNECT = "channelWSDisconnect", E.CHANNEL_CREATED = "channelCreated", E.CONFIG_ERROR = "co\
nfigError", E.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", E.STORY_SPECIFIED = "storySpecified", E.SET_CONFIG = "setConfig", E.SET_STORIES =
"setStories", E.SET_INDEX = "setIndex", E.SET_CURRENT_STORY = "setCurrentStory", E.CURRENT_STORY_WAS_SET = "currentStoryWasSet", E.FORCE_RE_RENDER =
"forceReRender", E.FORCE_REMOUNT = "forceRemount", E.PRELOAD_ENTRIES = "preloadStories", E.STORY_PREPARED = "storyPrepared", E.DOCS_PREPARED =
"docsPrepared", E.STORY_CHANGED = "storyChanged", E.STORY_UNCHANGED = "storyUnchanged", E.STORY_RENDERED = "storyRendered", E.STORY_FINISHED =
"storyFinished", E.STORY_MISSING = "storyMissing", E.STORY_ERRORED = "storyErrored", E.STORY_THREW_EXCEPTION = "storyThrewException", E.STORY_RENDER_PHASE_CHANGED =
"storyRenderPhaseChanged", E.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", E.UNHANDLED_ERRORS_WHILE_PLAYING = "unhandledErro\
rsWhilePlaying", E.UPDATE_STORY_ARGS = "updateStoryArgs", E.STORY_ARGS_UPDATED = "storyArgsUpdated", E.RESET_STORY_ARGS = "resetStoryArgs", E.
SET_FILTER = "setFilter", E.SET_GLOBALS = "setGlobals", E.UPDATE_GLOBALS = "updateGlobals", E.GLOBALS_UPDATED = "globalsUpdated", E.REGISTER_SUBSCRIPTION =
"registerSubscription", E.PREVIEW_KEYDOWN = "previewKeydown", E.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", E.SELECT_STORY = "sel\
ectStory", E.STORIES_COLLAPSE_ALL = "storiesCollapseAll", E.STORIES_EXPAND_ALL = "storiesExpandAll", E.DOCS_RENDERED = "docsRendered", E.SHARED_STATE_CHANGED =
"sharedStateChanged", E.SHARED_STATE_SET = "sharedStateSet", E.NAVIGATE_URL = "navigateUrl", E.UPDATE_QUERY_PARAMS = "updateQueryParams", E.
REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", E.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", E.SET_WHATS_NEW_CACHE = "setWhatsNewCache", E.
TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", E.TELEMETRY_ERROR = "telemetryError", E.FILE_COMPONENT_SEARCH_REQUEST = "fil\
eComponentSearchRequest", E.FILE_COMPONENT_SEARCH_RESPONSE = "fileComponentSearchResponse", E.SAVE_STORY_REQUEST = "saveStoryRequest", E.SAVE_STORY_RESPONSE =
"saveStoryResponse", E.ARGTYPES_INFO_REQUEST = "argtypesInfoRequest", E.ARGTYPES_INFO_RESPONSE = "argtypesInfoResponse", E.CREATE_NEW_STORYFILE_REQUEST =
"createNewStoryfileRequest", E.CREATE_NEW_STORYFILE_RESPONSE = "createNewStoryfileResponse", E.TESTING_MODULE_CRASH_REPORT = "testingModuleC\
rashReport", E.TESTING_MODULE_PROGRESS_REPORT = "testingModuleProgressReport", E.TESTING_MODULE_RUN_REQUEST = "testingModuleRunRequest", E.TESTING_MODULE_RUN_ALL_REQUEST =
"testingModuleRunAllRequest", E.TESTING_MODULE_CANCEL_TEST_RUN_REQUEST = "testingModuleCancelTestRunRequest", E.TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE =
"testingModuleCancelTestRunResponse", E.TESTING_MODULE_WATCH_MODE_REQUEST = "testingModuleWatchModeRequest", E.TESTING_MODULE_CONFIG_CHANGE =
"testingModuleConfigChange", E))(_$2 || {}), R$2 = _$2, {
  CHANNEL_WS_DISCONNECT: S$2,
  CHANNEL_CREATED: T$1,
  CONFIG_ERROR: N$2,
  CREATE_NEW_STORYFILE_REQUEST: O$2,
  CREATE_NEW_STORYFILE_RESPONSE: A$1,
  CURRENT_STORY_WAS_SET: r$1,
  DOCS_PREPARED: D$2,
  DOCS_RENDERED: I$2,
  FILE_COMPONENT_SEARCH_REQUEST: C$3,
  FILE_COMPONENT_SEARCH_RESPONSE: o$1,
  FORCE_RE_RENDER: L$2,
  FORCE_REMOUNT: U$2,
  GLOBALS_UPDATED: P$4,
  NAVIGATE_URL: G$3,
  PLAY_FUNCTION_THREW_EXCEPTION: a,
  UNHANDLED_ERRORS_WHILE_PLAYING: Y$1,
  PRELOAD_ENTRIES: t$1,
  PREVIEW_BUILDER_PROGRESS: e,
  PREVIEW_KEYDOWN: H$2,
  REGISTER_SUBSCRIPTION: d,
  RESET_STORY_ARGS: W$3,
  SELECT_STORY: l$1,
  SET_CONFIG: i$2,
  SET_CURRENT_STORY: M$3,
  SET_FILTER: p$1,
  SET_GLOBALS: u$1,
  SET_INDEX: F$3,
  SET_STORIES: g,
  SHARED_STATE_CHANGED: s$1,
  SHARED_STATE_SET: y,
  STORIES_COLLAPSE_ALL: c,
  STORIES_EXPAND_ALL: h$1,
  STORY_ARGS_UPDATED: f$2,
  STORY_CHANGED: Q$2,
  STORY_ERRORED: x$2,
  STORY_INDEX_INVALIDATED: m$2,
  STORY_MISSING: V$2,
  STORY_PREPARED: w$2,
  STORY_RENDER_PHASE_CHANGED: B$3,
  STORY_RENDERED: X$2,
  STORY_FINISHED: q$3,
  STORY_SPECIFIED: b$2,
  STORY_THREW_EXCEPTION: K$2,
  STORY_UNCHANGED: n,
  UPDATE_GLOBALS: j$2,
  UPDATE_QUERY_PARAMS: k$4,
  UPDATE_STORY_ARGS: z$4,
  REQUEST_WHATS_NEW_DATA: J$3,
  RESULT_WHATS_NEW_DATA: Z$2,
  SET_WHATS_NEW_CACHE: $$2,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: v$2,
  TELEMETRY_ERROR: EE,
  SAVE_STORY_REQUEST: _E,
  SAVE_STORY_RESPONSE: RE,
  ARGTYPES_INFO_REQUEST: SE,
  ARGTYPES_INFO_RESPONSE: TE,
  TESTING_MODULE_CRASH_REPORT: NE,
  TESTING_MODULE_PROGRESS_REPORT: OE,
  TESTING_MODULE_RUN_REQUEST: AE,
  TESTING_MODULE_RUN_ALL_REQUEST: rE,
  TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: DE,
  TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: IE,
  TESTING_MODULE_WATCH_MODE_REQUEST: CE,
  TESTING_MODULE_CONFIG_CHANGE: oE
} = _$2;

const eo$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ARGTYPES_INFO_REQUEST: SE,
  ARGTYPES_INFO_RESPONSE: TE,
  CHANNEL_CREATED: T$1,
  CHANNEL_WS_DISCONNECT: S$2,
  CONFIG_ERROR: N$2,
  CREATE_NEW_STORYFILE_REQUEST: O$2,
  CREATE_NEW_STORYFILE_RESPONSE: A$1,
  CURRENT_STORY_WAS_SET: r$1,
  DOCS_PREPARED: D$2,
  DOCS_RENDERED: I$2,
  FILE_COMPONENT_SEARCH_REQUEST: C$3,
  FILE_COMPONENT_SEARCH_RESPONSE: o$1,
  FORCE_REMOUNT: U$2,
  FORCE_RE_RENDER: L$2,
  GLOBALS_UPDATED: P$4,
  NAVIGATE_URL: G$3,
  PLAY_FUNCTION_THREW_EXCEPTION: a,
  PRELOAD_ENTRIES: t$1,
  PREVIEW_BUILDER_PROGRESS: e,
  PREVIEW_KEYDOWN: H$2,
  REGISTER_SUBSCRIPTION: d,
  REQUEST_WHATS_NEW_DATA: J$3,
  RESET_STORY_ARGS: W$3,
  RESULT_WHATS_NEW_DATA: Z$2,
  SAVE_STORY_REQUEST: _E,
  SAVE_STORY_RESPONSE: RE,
  SELECT_STORY: l$1,
  SET_CONFIG: i$2,
  SET_CURRENT_STORY: M$3,
  SET_FILTER: p$1,
  SET_GLOBALS: u$1,
  SET_INDEX: F$3,
  SET_STORIES: g,
  SET_WHATS_NEW_CACHE: $$2,
  SHARED_STATE_CHANGED: s$1,
  SHARED_STATE_SET: y,
  STORIES_COLLAPSE_ALL: c,
  STORIES_EXPAND_ALL: h$1,
  STORY_ARGS_UPDATED: f$2,
  STORY_CHANGED: Q$2,
  STORY_ERRORED: x$2,
  STORY_FINISHED: q$3,
  STORY_INDEX_INVALIDATED: m$2,
  STORY_MISSING: V$2,
  STORY_PREPARED: w$2,
  STORY_RENDERED: X$2,
  STORY_RENDER_PHASE_CHANGED: B$3,
  STORY_SPECIFIED: b$2,
  STORY_THREW_EXCEPTION: K$2,
  STORY_UNCHANGED: n,
  TELEMETRY_ERROR: EE,
  TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: DE,
  TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: IE,
  TESTING_MODULE_CONFIG_CHANGE: oE,
  TESTING_MODULE_CRASH_REPORT: NE,
  TESTING_MODULE_PROGRESS_REPORT: OE,
  TESTING_MODULE_RUN_ALL_REQUEST: rE,
  TESTING_MODULE_RUN_REQUEST: AE,
  TESTING_MODULE_WATCH_MODE_REQUEST: CE,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: v$2,
  UNHANDLED_ERRORS_WHILE_PLAYING: Y$1,
  UPDATE_GLOBALS: j$2,
  UPDATE_QUERY_PARAMS: k$4,
  UPDATE_STORY_ARGS: z$4,
  default: R$2
}, Symbol.toStringTag, { value: 'Module' }));

var ee$1 = Object.create;
var st = Object.defineProperty;
var re = Object.getOwnPropertyDescriptor;
var ne$1 = Object.getOwnPropertyNames;
var oe$2 = Object.getPrototypeOf, ae = Object.prototype.hasOwnProperty;
var i$1 = (t, e) => st(t, "name", { value: e, configurable: !0 }), U$1 = /* @__PURE__ */ ((t) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(t, {
  get: (e, r) => (typeof require < "u" ? require : e)[r]
}) : t)(function(t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var ie$1 = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var se$2 = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of ne$1(e))
      !ae.call(t, a) && a !== r && st(t, a, { get: () => e[a], enumerable: !(n = re(e, a)) || n.enumerable });
  return t;
};
var le = (t, e, r) => (r = t != null ? ee$1(oe$2(t)) : {}, se$2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !t || !t.__esModule ? st(r, "default", { value: t, enumerable: !0 }) : r,
  t
));

// ../node_modules/memoizerific/memoizerific.js
var Ot$1 = ie$1((At, ct) => {
  (function(t) {
    if (typeof At == "object" && typeof ct < "u")
      ct.exports = t();
    else if (typeof define == "function" && define.amd)
      define([], t);
    else {
      var e;
      typeof window < "u" ? e = window : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = this, e.memoizerific = t();
    }
  })(function() {
    var t, e, r;
    return (/* @__PURE__ */ i$1(function n(a, l, s) {
      function c(u, p) {
        if (!l[u]) {
          if (!a[u]) {
            var h = typeof U$1 == "function" && U$1;
            if (!p && h) return h(u, !0);
            if (o) return o(u, !0);
            var g = new Error("Cannot find module '" + u + "'");
            throw g.code = "MODULE_NOT_FOUND", g;
          }
          var y = l[u] = { exports: {} };
          a[u][0].call(y.exports, function(m) {
            var v = a[u][1][m];
            return c(v || m);
          }, y, y.exports, n, a, l, s);
        }
        return l[u].exports;
      }
      i$1(c, "s");
      for (var o = typeof U$1 == "function" && U$1, d = 0; d < s.length; d++) c(s[d]);
      return c;
    }, "e"))({ 1: [function(n, a, l) {
      a.exports = function(s) {
        if (typeof Map != "function" || s) {
          var c = n("./similar");
          return new c();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n, a, l) {
      function s() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      i$1(s, "Similar"), s.prototype.get = function(c) {
        var o;
        if (this.lastItem && this.isEqual(this.lastItem.key, c))
          return this.lastItem.val;
        if (o = this.indexOf(c), o >= 0)
          return this.lastItem = this.list[o], this.list[o].val;
      }, s.prototype.set = function(c, o) {
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, c) ? (this.lastItem.val = o, this) : (d = this.indexOf(c), d >= 0 ? (this.lastItem =
        this.list[d], this.list[d].val = o, this) : (this.lastItem = { key: c, val: o }, this.list.push(this.lastItem), this.size++, this));
      }, s.prototype.delete = function(c) {
        var o;
        if (this.lastItem && this.isEqual(this.lastItem.key, c) && (this.lastItem = void 0), o = this.indexOf(c), o >= 0)
          return this.size--, this.list.splice(o, 1)[0];
      }, s.prototype.has = function(c) {
        var o;
        return this.lastItem && this.isEqual(this.lastItem.key, c) ? !0 : (o = this.indexOf(c), o >= 0 ? (this.lastItem = this.list[o], !0) :
        !1);
      }, s.prototype.forEach = function(c, o) {
        var d;
        for (d = 0; d < this.size; d++)
          c.call(o || this, this.list[d].val, this.list[d].key, this);
      }, s.prototype.indexOf = function(c) {
        var o;
        for (o = 0; o < this.size; o++)
          if (this.isEqual(this.list[o].key, c))
            return o;
        return -1;
      }, s.prototype.isEqual = function(c, o) {
        return c === o || c !== c && o !== o;
      }, a.exports = s;
    }, {}], 3: [function(n, a, l) {
      var s = n("map-or-similar");
      a.exports = function(u) {
        var p = new s(!1), h = [];
        return function(g) {
          var y = /* @__PURE__ */ i$1(function() {
            var m = p, v, C, w = arguments.length - 1, I = Array(w + 1), x = !0, j;
            if ((y.numArgs || y.numArgs === 0) && y.numArgs !== w + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (j = 0; j < w; j++) {
              if (I[j] = {
                cacheItem: m,
                arg: arguments[j]
              }, m.has(arguments[j])) {
                m = m.get(arguments[j]);
                continue;
              }
              x = !1, v = new s(!1), m.set(arguments[j], v), m = v;
            }
            return x && (m.has(arguments[w]) ? C = m.get(arguments[w]) : x = !1), x || (C = g.apply(null, arguments), m.set(arguments[w], C)),
            u > 0 && (I[w] = {
              cacheItem: m,
              arg: arguments[w]
            }, x ? c(h, I) : h.push(I), h.length > u && o(h.shift())), y.wasMemoized = x, y.numArgs = w + 1, C;
          }, "memoizerific");
          return y.limit = u, y.wasMemoized = !1, y.cache = p, y.lru = h, y;
        };
      };
      function c(u, p) {
        var h = u.length, g = p.length, y, m, v;
        for (m = 0; m < h; m++) {
          for (y = !0, v = 0; v < g; v++)
            if (!d(u[m][v].arg, p[v].arg)) {
              y = !1;
              break;
            }
          if (y)
            break;
        }
        u.push(u.splice(m, 1)[0]);
      }
      i$1(c, "moveToMostRecentLru");
      function o(u) {
        var p = u.length, h = u[p - 1], g, y;
        for (h.cacheItem.delete(h.arg), y = p - 2; y >= 0 && (h = u[y], g = h.cacheItem.get(h.arg), !g || !g.size); y--)
          h.cacheItem.delete(h.arg);
      }
      i$1(o, "removeCachedResult");
      function d(u, p) {
        return u === p || u !== u && p !== p;
      }
      i$1(d, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/@storybook/global/dist/index.mjs
var b$1 = (() => {
  let t;
  return typeof window < "u" ? t = window : typeof globalThis < "u" ? t = globalThis : typeof global < "u" ? t = global : typeof self < "u" ?
  t = self : t = {}, t;
})();

// src/channels/main.ts
var ce = /* @__PURE__ */ i$1((t) => t.transports !== void 0, "isMulti"), fe$1 = /* @__PURE__ */ i$1(() => Math.random().toString(16).slice(2), "ge\
nerateRandomId"), lt$1 = class lt {
  constructor(e = {}) {
    this.sender = fe$1();
    this.events = {};
    this.data = {};
    this.transports = [];
    this.isAsync = e.async || !1, ce(e) ? (this.transports = e.transports || [], this.transports.forEach((r) => {
      r.setHandler((n) => this.handleEvent(n));
    })) : this.transports = e.transport ? [e.transport] : [], this.transports.forEach((r) => {
      r.setHandler((n) => this.handleEvent(n));
    });
  }
  get hasTransport() {
    return this.transports.length > 0;
  }
  addListener(e, r) {
    this.events[e] = this.events[e] || [], this.events[e].push(r);
  }
  emit(e, ...r) {
    let n = { type: e, args: r, from: this.sender }, a = {};
    r.length >= 1 && r[0] && r[0].options && (a = r[0].options);
    let l = /* @__PURE__ */ i$1(() => {
      this.transports.forEach((s) => {
        s.send(n, a);
      }), this.handleEvent(n);
    }, "handler");
    this.isAsync ? setImmediate(l) : l();
  }
  last(e) {
    return this.data[e];
  }
  eventNames() {
    return Object.keys(this.events);
  }
  listenerCount(e) {
    let r = this.listeners(e);
    return r ? r.length : 0;
  }
  listeners(e) {
    return this.events[e] || void 0;
  }
  once(e, r) {
    let n = this.onceListener(e, r);
    this.addListener(e, n);
  }
  removeAllListeners(e) {
    e ? this.events[e] && delete this.events[e] : this.events = {};
  }
  removeListener(e, r) {
    let n = this.listeners(e);
    n && (this.events[e] = n.filter((a) => a !== r));
  }
  on(e, r) {
    this.addListener(e, r);
  }
  off(e, r) {
    this.removeListener(e, r);
  }
  handleEvent(e) {
    let r = this.listeners(e.type);
    r && r.length && r.forEach((n) => {
      n.apply(e, e.args);
    }), this.data[e.type] = e.args;
  }
  onceListener(e, r) {
    let n = /* @__PURE__ */ i$1((...a) => (this.removeListener(e, n), r(...a)), "onceListener");
    return n;
  }
};
i$1(lt$1, "Channel");
var z$3 = lt$1;

// ../node_modules/telejson/dist/chunk-465TF3XA.mjs
var ue$1 = Object.create, St$1 = Object.defineProperty, pe = Object.getOwnPropertyDescriptor, wt$1 = Object.getOwnPropertyNames, ye$1 = Object.getPrototypeOf,
he$1 = Object.prototype.hasOwnProperty, P$3 = /* @__PURE__ */ i$1((t, e) => /* @__PURE__ */ i$1(function() {
  return e || (0, t[wt$1(t)[0]])((e = { exports: {} }).exports, e), e.exports;
}, "__require"), "__commonJS"), de$1 = /* @__PURE__ */ i$1((t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of wt$1(e))
      !he$1.call(t, a) && a !== r && St$1(t, a, { get: /* @__PURE__ */ i$1(() => e[a], "get"), enumerable: !(n = pe(e, a)) || n.enumerable });
  return t;
}, "__copyProps"), tt$1 = /* @__PURE__ */ i$1((t, e, r) => (r = t != null ? ue$1(ye$1(t)) : {}, de$1(
  e || !t || !t.__esModule ? St$1(r, "default", { value: t, enumerable: !0 }) : r,
  t
)), "__toESM"), ge$1 = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
], me$1 = ["detail"];
function Et$1(t) {
  let e = ge$1.filter((r) => t[r] !== void 0).reduce((r, n) => ({ ...r, [n]: t[n] }), {});
  return t instanceof CustomEvent && me$1.filter((r) => t[r] !== void 0).forEach((r) => {
    e[r] = t[r];
  }), e;
}
i$1(Et$1, "extractEventHiddenProperties");

// ../node_modules/telejson/dist/index.mjs
var Ut$1 = le(Ot$1(), 1);
var Tt = P$3({
  "node_modules/has-symbols/shams.js"(t, e) {
    "use strict";
    e.exports = /* @__PURE__ */ i$1(function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var n = {}, a = Symbol("test"), l = Object(a);
      if (typeof a == "string" || Object.prototype.toString.call(a) !== "[object Symbol]" || Object.prototype.toString.call(l) !== "[object \
Symbol]")
        return !1;
      var s = 42;
      n[a] = s;
      for (a in n)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(n).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
      n).length !== 0)
        return !1;
      var c = Object.getOwnPropertySymbols(n);
      if (c.length !== 1 || c[0] !== a || !Object.prototype.propertyIsEnumerable.call(n, a))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var o = Object.getOwnPropertyDescriptor(n, a);
        if (o.value !== s || o.enumerable !== !0)
          return !1;
      }
      return !0;
    }, "hasSymbols");
  }
}), Ft$1 = P$3({
  "node_modules/has-symbols/index.js"(t, e) {
    "use strict";
    var r = typeof Symbol < "u" && Symbol, n = Tt();
    e.exports = /* @__PURE__ */ i$1(function() {
      return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 :
      n();
    }, "hasNativeSymbols");
  }
}), ve$1 = P$3({
  "node_modules/function-bind/implementation.js"(t, e) {
    "use strict";
    var r = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, a = Object.prototype.toString, l = "[object Functi\
on]";
    e.exports = /* @__PURE__ */ i$1(function(c) {
      var o = this;
      if (typeof o != "function" || a.call(o) !== l)
        throw new TypeError(r + o);
      for (var d = n.call(arguments, 1), u, p = /* @__PURE__ */ i$1(function() {
        if (this instanceof u) {
          var v = o.apply(
            this,
            d.concat(n.call(arguments))
          );
          return Object(v) === v ? v : this;
        } else
          return o.apply(
            c,
            d.concat(n.call(arguments))
          );
      }, "binder"), h = Math.max(0, o.length - d.length), g = [], y = 0; y < h; y++)
        g.push("$" + y);
      if (u = Function("binder", "return function (" + g.join(",") + "){ return binder.apply(this,arguments); }")(p), o.prototype) {
        var m = /* @__PURE__ */ i$1(function() {
        }, "Empty2");
        m.prototype = o.prototype, u.prototype = new m(), m.prototype = null;
      }
      return u;
    }, "bind");
  }
}), ut = P$3({
  "node_modules/function-bind/index.js"(t, e) {
    "use strict";
    var r = ve$1();
    e.exports = Function.prototype.bind || r;
  }
}), _e$1 = P$3({
  "node_modules/has/src/index.js"(t, e) {
    "use strict";
    var r = ut();
    e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), Nt$1 = P$3({
  "node_modules/get-intrinsic/index.js"(t, e) {
    "use strict";
    var r, n = SyntaxError, a = Function, l = TypeError, s = /* @__PURE__ */ i$1(function(T) {
      try {
        return a('"use strict"; return (' + T + ").constructor;")();
      } catch {
      }
    }, "getEvalledConstructor"), c = Object.getOwnPropertyDescriptor;
    if (c)
      try {
        c({}, "");
      } catch {
        c = null;
      }
    var o = /* @__PURE__ */ i$1(function() {
      throw new l();
    }, "throwTypeError"), d = c ? function() {
      try {
        return arguments.callee, o;
      } catch {
        try {
          return c(arguments, "callee").get;
        } catch {
          return o;
        }
      }
    }() : o, u = Ft$1()(), p = Object.getPrototypeOf || function(T) {
      return T.__proto__;
    }, h = {}, g = typeof Uint8Array > "u" ? r : p(Uint8Array), y = {
      "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
      "%ArrayIteratorPrototype%": u ? p([][Symbol.iterator]()) : r,
      "%AsyncFromSyncIteratorPrototype%": r,
      "%AsyncFunction%": h,
      "%AsyncGenerator%": h,
      "%AsyncGeneratorFunction%": h,
      "%AsyncIteratorPrototype%": h,
      "%Atomics%": typeof Atomics > "u" ? r : Atomics,
      "%BigInt%": typeof BigInt > "u" ? r : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? r : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
      "%Function%": a,
      "%GeneratorFunction%": h,
      "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": u ? p(p([][Symbol.iterator]())) : r,
      "%JSON%": typeof JSON == "object" ? JSON : r,
      "%Map%": typeof Map > "u" ? r : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !u ? r : p((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? r : Promise,
      "%Proxy%": typeof Proxy > "u" ? r : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? r : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? r : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !u ? r : p((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": u ? p(""[Symbol.iterator]()) : r,
      "%Symbol%": u ? Symbol : r,
      "%SyntaxError%": n,
      "%ThrowTypeError%": d,
      "%TypedArray%": g,
      "%TypeError%": l,
      "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet
    }, m = /* @__PURE__ */ i$1(function T(_) {
      var E;
      if (_ === "%AsyncFunction%")
        E = s("async function () {}");
      else if (_ === "%GeneratorFunction%")
        E = s("function* () {}");
      else if (_ === "%AsyncGeneratorFunction%")
        E = s("async function* () {}");
      else if (_ === "%AsyncGenerator%") {
        var S = T("%AsyncGeneratorFunction%");
        S && (E = S.prototype);
      } else if (_ === "%AsyncIteratorPrototype%") {
        var A = T("%AsyncGenerator%");
        A && (E = p(A.prototype));
      }
      return y[_] = E, E;
    }, "doEval2"), v = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }, C = ut(), w = _e$1(), I = C.call(Function.call, Array.prototype.concat), x = C.call(Function.apply, Array.prototype.splice), j = C.call(
    Function.call, String.prototype.replace), V = C.call(Function.call, String.prototype.slice), Yt = C.call(Function.call, RegExp.prototype.
    exec), Xt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Zt = /\\(\\)?/g, Qt = /* @__PURE__ */ i$1(
    function(_) {
      var E = V(_, 0, 1), S = V(_, -1);
      if (E === "%" && S !== "%")
        throw new n("invalid intrinsic syntax, expected closing `%`");
      if (S === "%" && E !== "%")
        throw new n("invalid intrinsic syntax, expected opening `%`");
      var A = [];
      return j(_, Xt, function(F, R, O, K) {
        A[A.length] = O ? j(K, Zt, "$1") : R || F;
      }), A;
    }, "stringToPath3"), te = /* @__PURE__ */ i$1(function(_, E) {
      var S = _, A;
      if (w(v, S) && (A = v[S], S = "%" + A[0] + "%"), w(y, S)) {
        var F = y[S];
        if (F === h && (F = m(S)), typeof F > "u" && !E)
          throw new l("intrinsic " + _ + " exists, but is not available. Please file an issue!");
        return {
          alias: A,
          name: S,
          value: F
        };
      }
      throw new n("intrinsic " + _ + " does not exist!");
    }, "getBaseIntrinsic2");
    e.exports = /* @__PURE__ */ i$1(function(_, E) {
      if (typeof _ != "string" || _.length === 0)
        throw new l("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof E != "boolean")
        throw new l('"allowMissing" argument must be a boolean');
      if (Yt(/^%?[^%]*%?$/, _) === null)
        throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var S = Qt(_), A = S.length > 0 ? S[0] : "", F = te("%" + A + "%", E), R = F.name, O = F.value, K = !1, it = F.alias;
      it && (A = it[0], x(S, I([0, 1], it)));
      for (var Y = 1, D = !0; Y < S.length; Y += 1) {
        var N = S[Y], X = V(N, 0, 1), Z = V(N, -1);
        if ((X === '"' || X === "'" || X === "`" || Z === '"' || Z === "'" || Z === "`") && X !== Z)
          throw new n("property names with quotes must have matching quotes");
        if ((N === "constructor" || !D) && (K = !0), A += "." + N, R = "%" + A + "%", w(y, R))
          O = y[R];
        else if (O != null) {
          if (!(N in O)) {
            if (!E)
              throw new l("base intrinsic for " + _ + " exists, but the property is not available.");
            return;
          }
          if (c && Y + 1 >= S.length) {
            var Q = c(O, N);
            D = !!Q, D && "get" in Q && !("originalValue" in Q.get) ? O = Q.get : O = O[N];
          } else
            D = w(O, N), O = O[N];
          D && !K && (y[R] = O);
        }
      }
      return O;
    }, "GetIntrinsic");
  }
}), be$1 = P$3({
  "node_modules/call-bind/index.js"(t, e) {
    "use strict";
    var r = ut(), n = Nt$1(), a = n("%Function.prototype.apply%"), l = n("%Function.prototype.call%"), s = n("%Reflect.apply%", !0) || r.call(
    l, a), c = n("%Object.getOwnPropertyDescriptor%", !0), o = n("%Object.defineProperty%", !0), d = n("%Math.max%");
    if (o)
      try {
        o({}, "a", { value: 1 });
      } catch {
        o = null;
      }
    e.exports = /* @__PURE__ */ i$1(function(h) {
      var g = s(r, l, arguments);
      if (c && o) {
        var y = c(g, "length");
        y.configurable && o(
          g,
          "length",
          { value: 1 + d(0, h.length - (arguments.length - 1)) }
        );
      }
      return g;
    }, "callBind");
    var u = /* @__PURE__ */ i$1(function() {
      return s(r, a, arguments);
    }, "applyBind2");
    o ? o(e.exports, "apply", { value: u }) : e.exports.apply = u;
  }
}), Se$1 = P$3({
  "node_modules/call-bind/callBound.js"(t, e) {
    "use strict";
    var r = Nt$1(), n = be$1(), a = n(r("String.prototype.indexOf"));
    e.exports = /* @__PURE__ */ i$1(function(s, c) {
      var o = r(s, !!c);
      return typeof o == "function" && a(s, ".prototype.") > -1 ? n(o) : o;
    }, "callBoundIntrinsic");
  }
}), we = P$3({
  "node_modules/has-tostringtag/shams.js"(t, e) {
    "use strict";
    var r = Tt();
    e.exports = /* @__PURE__ */ i$1(function() {
      return r() && !!Symbol.toStringTag;
    }, "hasToStringTagShams");
  }
}), Ee$1 = P$3({
  "node_modules/is-regex/index.js"(t, e) {
    "use strict";
    var r = Se$1(), n = we()(), a, l, s, c;
    n && (a = r("Object.prototype.hasOwnProperty"), l = r("RegExp.prototype.exec"), s = {}, o = /* @__PURE__ */ i$1(function() {
      throw s;
    }, "throwRegexMarker"), c = {
      toString: o,
      valueOf: o
    }, typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = o));
    var o, d = r("Object.prototype.toString"), u = Object.getOwnPropertyDescriptor, p = "[object RegExp]";
    e.exports = /* @__PURE__ */ i$1(n ? function(g) {
      if (!g || typeof g != "object")
        return !1;
      var y = u(g, "lastIndex"), m = y && a(y, "value");
      if (!m)
        return !1;
      try {
        l(g, c);
      } catch (v) {
        return v === s;
      }
    } : function(g) {
      return !g || typeof g != "object" && typeof g != "function" ? !1 : d(g) === p;
    }, "isRegex");
  }
}), Ae = P$3({
  "node_modules/is-function/index.js"(t, e) {
    e.exports = n;
    var r = Object.prototype.toString;
    function n(a) {
      if (!a)
        return !1;
      var l = r.call(a);
      return l === "[object Function]" || typeof a == "function" && l !== "[object RegExp]" || typeof window < "u" && (a === window.setTimeout ||
      a === window.alert || a === window.confirm || a === window.prompt);
    }
    i$1(n, "isFunction3");
  }
}), Oe$1 = P$3({
  "node_modules/is-symbol/index.js"(t, e) {
    "use strict";
    var r = Object.prototype.toString, n = Ft$1()();
    n ? (a = Symbol.prototype.toString, l = /^Symbol\(.*\)$/, s = /* @__PURE__ */ i$1(function(o) {
      return typeof o.valueOf() != "symbol" ? !1 : l.test(a.call(o));
    }, "isRealSymbolObject"), e.exports = /* @__PURE__ */ i$1(function(o) {
      if (typeof o == "symbol")
        return !0;
      if (r.call(o) !== "[object Symbol]")
        return !1;
      try {
        return s(o);
      } catch {
        return !1;
      }
    }, "isSymbol3")) : e.exports = /* @__PURE__ */ i$1(function(o) {
      return !1;
    }, "isSymbol3");
    var a, l, s;
  }
}), xe$1 = tt$1(Ee$1()), Pe$1 = tt$1(Ae()), Ce$1 = tt$1(Oe$1());
function Ie$1(t) {
  return t != null && typeof t == "object" && Array.isArray(t) === !1;
}
i$1(Ie$1, "isObject");
var je$1 = typeof global == "object" && global && global.Object === Object && global, Te$1 = je$1, Fe$1 = typeof self == "object" && self && self.Object ===
Object && self, Ne = Te$1 || Fe$1 || Function("return this")(), pt$1 = Ne, Re = pt$1.Symbol, M$2 = Re, Rt$1 = Object.prototype, Me$1 = Rt$1.hasOwnProperty, $e$1 = Rt$1.
toString, W$2 = M$2 ? M$2.toStringTag : void 0;
function Le$1(t) {
  var e = Me$1.call(t, W$2), r = t[W$2];
  try {
    t[W$2] = void 0;
    var n = !0;
  } catch {
  }
  var a = $e$1.call(t);
  return n && (e ? t[W$2] = r : delete t[W$2]), a;
}
i$1(Le$1, "getRawTag");
var ke$1 = Le$1, De$1 = Object.prototype, Ue$1 = De$1.toString;
function ze$1(t) {
  return Ue$1.call(t);
}
i$1(ze$1, "objectToString");
var We$1 = ze$1, Be$1 = "[object Null]", He$1 = "[object Undefined]", xt = M$2 ? M$2.toStringTag : void 0;
function qe(t) {
  return t == null ? t === void 0 ? He$1 : Be$1 : xt && xt in Object(t) ? ke$1(t) : We$1(t);
}
i$1(qe, "baseGetTag");
var Mt$1 = qe;
function Ge$1(t) {
  return t != null && typeof t == "object";
}
i$1(Ge$1, "isObjectLike");
var Je$1 = Ge$1, Ve$1 = "[object Symbol]";
function Ke$1(t) {
  return typeof t == "symbol" || Je$1(t) && Mt$1(t) == Ve$1;
}
i$1(Ke$1, "isSymbol");
var yt = Ke$1;
function Ye$1(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, a = Array(n); ++r < n; )
    a[r] = e(t[r], r, t);
  return a;
}
i$1(Ye$1, "arrayMap");
var Xe$1 = Ye$1, Ze$1 = Array.isArray, ht$1 = Ze$1, Qe = 1 / 0, Pt$1 = M$2 ? M$2.prototype : void 0, Ct$1 = Pt$1 ? Pt$1.toString : void 0;
function $t$1(t) {
  if (typeof t == "string")
    return t;
  if (ht$1(t))
    return Xe$1(t, $t$1) + "";
  if (yt(t))
    return Ct$1 ? Ct$1.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Qe ? "-0" : e;
}
i$1($t$1, "baseToString");
var tr = $t$1;
function er(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
i$1(er, "isObject2");
var Lt$1 = er, rr = "[object AsyncFunction]", nr = "[object Function]", or$1 = "[object GeneratorFunction]", ar = "[object Proxy]";
function ir(t) {
  if (!Lt$1(t))
    return !1;
  var e = Mt$1(t);
  return e == nr || e == or$1 || e == rr || e == ar;
}
i$1(ir, "isFunction");
var sr = ir, lr = pt$1["__core-js_shared__"], ft$1 = lr, It$1 = function() {
  var t = /[^.]+$/.exec(ft$1 && ft$1.keys && ft$1.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function cr(t) {
  return !!It$1 && It$1 in t;
}
i$1(cr, "isMasked");
var fr$1 = cr, ur$1 = Function.prototype, pr$1 = ur$1.toString;
function yr$1(t) {
  if (t != null) {
    try {
      return pr$1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
i$1(yr$1, "toSource");
var hr$1 = yr$1, dr = /[\\^$.*+?()[\]{}|]/g, gr$1 = /^\[object .+?Constructor\]$/, mr$1 = Function.prototype, vr$1 = Object.prototype, _r$1 = mr$1.toString,
br$1 = vr$1.hasOwnProperty, Sr$1 = RegExp(
  "^" + _r$1.call(br$1).replace(dr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wr$1(t) {
  if (!Lt$1(t) || fr$1(t))
    return !1;
  var e = sr(t) ? Sr$1 : gr$1;
  return e.test(hr$1(t));
}
i$1(wr$1, "baseIsNative");
var Er$1 = wr$1;
function Ar$1(t, e) {
  return t?.[e];
}
i$1(Ar$1, "getValue");
var Or$1 = Ar$1;
function xr$1(t, e) {
  var r = Or$1(t, e);
  return Er$1(r) ? r : void 0;
}
i$1(xr$1, "getNative");
var kt$1 = xr$1;
function Pr$1(t, e) {
  return t === e || t !== t && e !== e;
}
i$1(Pr$1, "eq");
var Cr$1 = Pr$1, Ir = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jr$1 = /^\w*$/;
function Tr$1(t, e) {
  if (ht$1(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || yt(t) ? !0 : jr$1.test(t) || !Ir.test(t) || e != null && t in Object(
  e);
}
i$1(Tr$1, "isKey");
var Fr$1 = Tr$1, Nr$1 = kt$1(Object, "create"), B$2 = Nr$1;
function Rr$1() {
  this.__data__ = B$2 ? B$2(null) : {}, this.size = 0;
}
i$1(Rr$1, "hashClear");
var Mr$1 = Rr$1;
function $r$1(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
i$1($r$1, "hashDelete");
var Lr$1 = $r$1, kr$1 = "__lodash_hash_undefined__", Dr = Object.prototype, Ur$1 = Dr.hasOwnProperty;
function zr$1(t) {
  var e = this.__data__;
  if (B$2) {
    var r = e[t];
    return r === kr$1 ? void 0 : r;
  }
  return Ur$1.call(e, t) ? e[t] : void 0;
}
i$1(zr$1, "hashGet");
var Wr$1 = zr$1, Br$1 = Object.prototype, Hr$1 = Br$1.hasOwnProperty;
function qr$1(t) {
  var e = this.__data__;
  return B$2 ? e[t] !== void 0 : Hr$1.call(e, t);
}
i$1(qr$1, "hashHas");
var Gr$1 = qr$1, Jr$1 = "__lodash_hash_undefined__";
function Vr$1(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = B$2 && e === void 0 ? Jr$1 : e, this;
}
i$1(Vr$1, "hashSet");
var Kr$1 = Vr$1;
function $$1(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
i$1($$1, "Hash");
$$1.prototype.clear = Mr$1;
$$1.prototype.delete = Lr$1;
$$1.prototype.get = Wr$1;
$$1.prototype.has = Gr$1;
$$1.prototype.set = Kr$1;
var jt$1 = $$1;
function Yr$1() {
  this.__data__ = [], this.size = 0;
}
i$1(Yr$1, "listCacheClear");
var Xr$1 = Yr$1;
function Zr$1(t, e) {
  for (var r = t.length; r--; )
    if (Cr$1(t[r][0], e))
      return r;
  return -1;
}
i$1(Zr$1, "assocIndexOf");
var rt = Zr$1, Qr = Array.prototype, tn = Qr.splice;
function en(t) {
  var e = this.__data__, r = rt(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : tn.call(e, r, 1), --this.size, !0;
}
i$1(en, "listCacheDelete");
var rn = en;
function nn(t) {
  var e = this.__data__, r = rt(e, t);
  return r < 0 ? void 0 : e[r][1];
}
i$1(nn, "listCacheGet");
var on = nn;
function an(t) {
  return rt(this.__data__, t) > -1;
}
i$1(an, "listCacheHas");
var sn = an;
function ln(t, e) {
  var r = this.__data__, n = rt(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
i$1(ln, "listCacheSet");
var cn = ln;
function L$1(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
i$1(L$1, "ListCache");
L$1.prototype.clear = Xr$1;
L$1.prototype.delete = rn;
L$1.prototype.get = on;
L$1.prototype.has = sn;
L$1.prototype.set = cn;
var fn = L$1, un = kt$1(pt$1, "Map"), pn = un;
function yn$1() {
  this.size = 0, this.__data__ = {
    hash: new jt$1(),
    map: new (pn || fn)(),
    string: new jt$1()
  };
}
i$1(yn$1, "mapCacheClear");
var hn = yn$1;
function dn(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
i$1(dn, "isKeyable");
var gn = dn;
function mn(t, e) {
  var r = t.__data__;
  return gn(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
i$1(mn, "getMapData");
var nt$1 = mn;
function vn$1(t) {
  var e = nt$1(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
i$1(vn$1, "mapCacheDelete");
var _n$1 = vn$1;
function bn(t) {
  return nt$1(this, t).get(t);
}
i$1(bn, "mapCacheGet");
var Sn = bn;
function wn(t) {
  return nt$1(this, t).has(t);
}
i$1(wn, "mapCacheHas");
var En = wn;
function An$1(t, e) {
  var r = nt$1(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
i$1(An$1, "mapCacheSet");
var On$1 = An$1;
function k$3(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
i$1(k$3, "MapCache");
k$3.prototype.clear = hn;
k$3.prototype.delete = _n$1;
k$3.prototype.get = Sn;
k$3.prototype.has = En;
k$3.prototype.set = On$1;
var Dt$1 = k$3, xn = "Expected a function";
function dt$1(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(xn);
  var r = /* @__PURE__ */ i$1(function() {
    var n = arguments, a = e ? e.apply(this, n) : n[0], l = r.cache;
    if (l.has(a))
      return l.get(a);
    var s = t.apply(this, n);
    return r.cache = l.set(a, s) || l, s;
  }, "memoized");
  return r.cache = new (dt$1.Cache || Dt$1)(), r;
}
i$1(dt$1, "memoize");
dt$1.Cache = Dt$1;
var Pn$1 = dt$1, Cn$1 = 500;
function In$1(t) {
  var e = Pn$1(t, function(n) {
    return r.size === Cn$1 && r.clear(), n;
  }), r = e.cache;
  return e;
}
i$1(In$1, "memoizeCapped");
var jn$1 = In$1, Tn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fn$1 = /\\(\\)?/g, Nn$1 = jn$1(
function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Tn, function(r, n, a, l) {
    e.push(a ? l.replace(Fn$1, "$1") : n || r);
  }), e;
}), Rn = Nn$1;
function Mn$1(t) {
  return t == null ? "" : tr(t);
}
i$1(Mn$1, "toString");
var $n$1 = Mn$1;
function Ln$1(t, e) {
  return ht$1(t) ? t : Fr$1(t, e) ? [t] : Rn($n$1(t));
}
i$1(Ln$1, "castPath");
var kn$1 = Ln$1, Dn$1 = 1 / 0;
function Un(t) {
  if (typeof t == "string" || yt(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -Dn$1 ? "-0" : e;
}
i$1(Un, "toKey");
var zn = Un;
function Wn$1(t, e) {
  e = kn$1(e, t);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[zn(e[r++])];
  return r && r == n ? t : void 0;
}
i$1(Wn$1, "baseGet");
var Bn = Wn$1;
function Hn(t, e, r) {
  var n = t == null ? void 0 : Bn(t, e);
  return n === void 0 ? r : n;
}
i$1(Hn, "get");
var qn$1 = Hn, et$1 = Ie$1, Gn$1 = /* @__PURE__ */ i$1((t) => {
  let e = null, r = !1, n = !1, a = !1, l = "";
  if (t.indexOf("//") >= 0 || t.indexOf("/*") >= 0)
    for (let s = 0; s < t.length; s += 1)
      !e && !r && !n && !a ? t[s] === '"' || t[s] === "'" || t[s] === "`" ? e = t[s] : t[s] === "/" && t[s + 1] === "*" ? r = !0 : t[s] === "\
/" && t[s + 1] === "/" ? n = !0 : t[s] === "/" && t[s + 1] !== "/" && (a = !0) : (e && (t[s] === e && t[s - 1] !== "\\" || t[s] === `
` && e !== "`") && (e = null), a && (t[s] === "/" && t[s - 1] !== "\\" || t[s] === `
`) && (a = !1), r && t[s - 1] === "/" && t[s - 2] === "*" && (r = !1), n && t[s] === `
` && (n = !1)), !r && !n && (l += t[s]);
  else
    l = t;
  return l;
}, "removeCodeComments"), Jn$1 = (0, Ut$1.default)(1e4)(
  (t) => Gn$1(t).replace(/\n\s*/g, "").trim()
), Vn = /* @__PURE__ */ i$1(function(e, r) {
  let n = r.slice(0, r.indexOf("{")), a = r.slice(r.indexOf("{"));
  if (n.includes("=>") || n.includes("function"))
    return r;
  let l = n;
  return l = l.replace(e, "function"), l + a;
}, "convertShorthandMethods2"), Kn$1 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/, H$1 = /* @__PURE__ */ i$1((t) => t.match(/^[\[\{\"\}].*[\]\}\"]$/),
"isJSON");
function zt$1(t) {
  if (!et$1(t))
    return t;
  let e = t, r = !1;
  return typeof Event < "u" && t instanceof Event && (e = Et$1(e), r = !0), e = Object.keys(e).reduce((n, a) => {
    try {
      e[a] && e[a].toJSON, n[a] = e[a];
    } catch {
      r = !0;
    }
    return n;
  }, {}), r ? e : t;
}
i$1(zt$1, "convertUnconventionalData");
var Yn$1 = /* @__PURE__ */ i$1(function(e) {
  let r, n, a, l;
  return /* @__PURE__ */ i$1(function(c, o) {
    try {
      if (c === "")
        return l = [], r = /* @__PURE__ */ new Map([[o, "[]"]]), n = /* @__PURE__ */ new Map(), a = [], o;
      let d = n.get(this) || this;
      for (; a.length && d !== a[0]; )
        a.shift(), l.pop();
      if (typeof o == "boolean")
        return o;
      if (o === void 0)
        return e.allowUndefined ? "_undefined_" : void 0;
      if (o === null)
        return null;
      if (typeof o == "number")
        return o === -1 / 0 ? "_-Infinity_" : o === 1 / 0 ? "_Infinity_" : Number.isNaN(o) ? "_NaN_" : o;
      if (typeof o == "bigint")
        return `_bigint_${o.toString()}`;
      if (typeof o == "string")
        return Kn$1.test(o) ? e.allowDate ? `_date_${o}` : void 0 : o;
      if ((0, xe$1.default)(o))
        return e.allowRegExp ? `_regexp_${o.flags}|${o.source}` : void 0;
      if ((0, Pe$1.default)(o)) {
        if (!e.allowFunction)
          return;
        let { name: p } = o, h = o.toString();
        return h.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${p}|${(() => {
        }).toString()}` : `_function_${p}|${Jn$1(Vn(c, h))}`;
      }
      if ((0, Ce$1.default)(o)) {
        if (!e.allowSymbol)
          return;
        let p = Symbol.keyFor(o);
        return p !== void 0 ? `_gsymbol_${p}` : `_symbol_${o.toString().slice(7, -1)}`;
      }
      if (a.length >= e.maxDepth)
        return Array.isArray(o) ? `[Array(${o.length})]` : "[Object]";
      if (o === this)
        return `_duplicate_${JSON.stringify(l)}`;
      if (o instanceof Error && e.allowError)
        return {
          __isConvertedError__: !0,
          errorProperties: {
            ...o.cause ? { cause: o.cause } : {},
            ...o,
            name: o.name,
            message: o.message,
            stack: o.stack,
            "_constructor-name_": o.constructor.name
          }
        };
      if (o.constructor && o.constructor.name && o.constructor.name !== "Object" && !Array.isArray(o) && !e.allowClass)
        return;
      let u = r.get(o);
      if (!u) {
        let p = Array.isArray(o) ? o : zt$1(o);
        if (o.constructor && o.constructor.name && o.constructor.name !== "Object" && !Array.isArray(o) && e.allowClass)
          try {
            Object.assign(p, { "_constructor-name_": o.constructor.name });
          } catch {
          }
        return l.push(c), a.unshift(p), r.set(o, JSON.stringify(l)), o !== p && n.set(o, p), p;
      }
      return `_duplicate_${u}`;
    } catch {
      return;
    }
  }, "replace");
}, "replacer2"), Xn$1 = /* @__PURE__ */ i$1(function reviver(options) {
  let refs = [], root;
  return /* @__PURE__ */ i$1(function revive(key, value) {
    if (key === "" && (root = value, refs.forEach(({ target: t, container: e, replacement: r }) => {
      let n = H$1(r) ? JSON.parse(r) : r.split(".");
      n.length === 0 ? e[t] = root : e[t] = qn$1(root, n);
    })), key === "_constructor-name_")
      return value;
    if (et$1(value) && value.__isConvertedError__) {
      let { message: t, ...e } = value.errorProperties, r = new Error(t);
      return Object.assign(r, e), r;
    }
    if (et$1(value) && value["_constructor-name_"] && options.allowFunction) {
      let t = value["_constructor-name_"];
      if (t !== "Object") {
        let e = new Function(`return function ${t.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`)();
        Object.setPrototypeOf(value, new e());
      }
      return delete value["_constructor-name_"], value;
    }
    if (typeof value == "string" && value.startsWith("_function_") && options.allowFunction) {
      let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [], sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
      if (!options.lazyEval)
        return eval(`(${sourceSanitized})`);
      let result = /* @__PURE__ */ i$1((...args) => {
        let f = eval(`(${sourceSanitized})`);
        return f(...args);
      }, "result");
      return Object.defineProperty(result, "toString", {
        value: /* @__PURE__ */ i$1(() => sourceSanitized, "value")
      }), Object.defineProperty(result, "name", {
        value: name
      }), result;
    }
    if (typeof value == "string" && value.startsWith("_regexp_") && options.allowRegExp) {
      let [, t, e] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
      return new RegExp(e, t);
    }
    return typeof value == "string" && value.startsWith("_date_") && options.allowDate ? new Date(value.replace("_date_", "")) : typeof value ==
    "string" && value.startsWith("_duplicate_") ? (refs.push({ target: key, container: this, replacement: value.replace(/^_duplicate_/, "") }),
    null) : typeof value == "string" && value.startsWith("_symbol_") && options.allowSymbol ? Symbol(value.replace("_symbol_", "")) : typeof value ==
    "string" && value.startsWith("_gsymbol_") && options.allowSymbol ? Symbol.for(value.replace("_gsymbol_", "")) : typeof value == "string" &&
    value === "_-Infinity_" ? -1 / 0 : typeof value == "string" && value === "_Infinity_" ? 1 / 0 : typeof value == "string" && value === "_\
NaN_" ? NaN : typeof value == "string" && value.startsWith("_bigint_") && typeof BigInt == "function" ? BigInt(value.replace("_bigint_", "")) :
    value;
  }, "revive");
}, "reviver"), Wt$1 = {
  maxDepth: 10,
  space: void 0,
  allowFunction: !0,
  allowRegExp: !0,
  allowDate: !0,
  allowClass: !0,
  allowError: !0,
  allowUndefined: !0,
  allowSymbol: !0,
  lazyEval: !0
}, ot = /* @__PURE__ */ i$1((t, e = {}) => {
  let r = { ...Wt$1, ...e };
  return JSON.stringify(zt$1(t), Yn$1(r), e.space);
}, "stringify"), Zn$1 = /* @__PURE__ */ i$1(() => {
  let t = /* @__PURE__ */ new Map();
  return /* @__PURE__ */ i$1(function e(r) {
    et$1(r) && Object.entries(r).forEach(([n, a]) => {
      a === "_undefined_" ? r[n] = void 0 : t.get(a) || (t.set(a, !0), e(a));
    }), Array.isArray(r) && r.forEach((n, a) => {
      n === "_undefined_" ? (t.set(n, !0), r[a] = void 0) : t.get(n) || (t.set(n, !0), e(n));
    });
  }, "mutateUndefined");
}, "mutator"), at$1 = /* @__PURE__ */ i$1((t, e = {}) => {
  let r = { ...Wt$1, ...e }, n = JSON.parse(t, Xn$1(r));
  return Zn$1()(n), n;
}, "parse");

// ../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var Qn$1 = !1, gt$1 = "Invariant failed";
function q$2(t, e) {
  if (!t) {
    if (Qn$1)
      throw new Error(gt$1);
    var r = typeof e == "function" ? e() : e, n = r ? "".concat(gt$1, ": ").concat(r) : gt$1;
    throw new Error(n);
  }
}
i$1(q$2, "invariant");
var Bt$1 = /* @__PURE__ */ i$1((t) => {
  let e = Array.from(
    document.querySelectorAll("iframe[data-is-storybook]")
  ), [r, ...n] = e.filter((l) => {
    try {
      return l.contentWindow?.location.origin === t.source.location.origin && l.contentWindow?.location.pathname === t.source.location.pathname;
    } catch {
    }
    try {
      return l.contentWindow === t.source;
    } catch {
    }
    let s = l.getAttribute("src"), c;
    try {
      if (!s)
        return !1;
      ({ origin: c } = new URL(s, document.location.toString()));
    } catch {
      return !1;
    }
    return c === t.origin;
  }), a = r?.getAttribute("src");
  if (a && n.length === 0) {
    let { protocol: l, host: s, pathname: c } = new URL(a, document.location.toString());
    return `${l}//${s}${c}`;
  }
  return n.length > 0 && s$2.error("found multiple candidates for event source"), null;
}, "getEventSourceUrl");

// src/channels/postmessage/index.ts
var { document: mt$1, location: vt$1 } = b$1, Gt$1 = "storybook-channel", ro$1 = { allowFunction: !1, maxDepth: 25 }, _t$1 = class _t {
  constructor(e) {
    this.config = e;
    this.connected = !1;
    if (this.buffer = [], typeof b$1?.addEventListener == "function" && b$1.addEventListener("message", this.handleEvent.bind(this), !1), e.page !==
    "manager" && e.page !== "preview")
      throw new Error(`postmsg-channel: "config.page" cannot be "${e.page}"`);
  }
  setHandler(e) {
    this.handler = (...r) => {
      e.apply(this, r), !this.connected && this.getLocalFrame().length && (this.flush(), this.connected = !0);
    };
  }
  /**
   * Sends `event` to the associated window. If the window does not yet exist the event will be
   * stored in a buffer and sent when the window exists.
   *
   * @param event
   */
  send(e, r) {
    let {
      target: n,
      // telejson options
      allowRegExp: a,
      allowFunction: l,
      allowSymbol: s,
      allowDate: c,
      allowError: o,
      allowUndefined: d,
      allowClass: u,
      maxDepth: p,
      space: h,
      lazyEval: g
    } = r || {}, y = Object.fromEntries(
      Object.entries({
        allowRegExp: a,
        allowFunction: l,
        allowSymbol: s,
        allowDate: c,
        allowError: o,
        allowUndefined: d,
        allowClass: u,
        maxDepth: p,
        space: h,
        lazyEval: g
      }).filter(([I, x]) => typeof x < "u")
    ), m = {
      ...ro$1,
      ...b$1.CHANNEL_OPTIONS || {},
      ...y
    }, v = this.getFrames(n), C = new URLSearchParams(vt$1?.search || ""), w = ot(
      {
        key: Gt$1,
        event: e,
        refId: C.get("refId")
      },
      m
    );
    return v.length ? (this.buffer.length && this.flush(), v.forEach((I) => {
      try {
        I.postMessage(w, "*");
      } catch {
        s$2.error("sending over postmessage fail");
      }
    }), Promise.resolve(null)) : new Promise((I, x) => {
      this.buffer.push({ event: e, resolve: I, reject: x });
    });
  }
  flush() {
    let { buffer: e } = this;
    this.buffer = [], e.forEach((r) => {
      this.send(r.event).then(r.resolve).catch(r.reject);
    });
  }
  getFrames(e) {
    if (this.config.page === "manager") {
      let n = Array.from(
        mt$1.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")
      ).flatMap((a) => {
        try {
          return a.contentWindow && a.dataset.isStorybook !== void 0 && a.id === e ? [a.contentWindow] : [];
        } catch {
          return [];
        }
      });
      return n?.length ? n : this.getCurrentFrames();
    }
    return b$1 && b$1.parent && b$1.parent !== b$1.self ? [b$1.parent] : [];
  }
  getCurrentFrames() {
    return this.config.page === "manager" ? Array.from(
      mt$1.querySelectorAll('[data-is-storybook="true"]')
    ).flatMap((r) => r.contentWindow ? [r.contentWindow] : []) : b$1 && b$1.parent ? [b$1.parent] : [];
  }
  getLocalFrame() {
    return this.config.page === "manager" ? Array.from(
      mt$1.querySelectorAll("#storybook-preview-iframe")
    ).flatMap((r) => r.contentWindow ? [r.contentWindow] : []) : b$1 && b$1.parent ? [b$1.parent] : [];
  }
  handleEvent(e) {
    try {
      let { data: r } = e, { key: n, event: a, refId: l } = typeof r == "string" && H$1(r) ? at$1(r, b$1.CHANNEL_OPTIONS || {}) : r;
      if (n === Gt$1) {
        let s = this.config.page === "manager" ? '<span style="color: #37D5D3; background: black"> manager </span>' : '<span style="color: #\
1EA7FD; background: black"> preview </span>', c = Object.values(eo$1).includes(a.type) ? `<span style="color: #FF4785">${a.type}</span>` : `<s\
pan style="color: #FFAE00">${a.type}</span>`;
        if (l && (a.refId = l), a.source = this.config.page === "preview" ? e.origin : Bt$1(e), !a.source) {
          r$2.error(
            `${s} received ${c} but was unable to determine the source of the event`
          );
          return;
        }
        let o = `${s} received ${c} (${r.length})`;
        r$2.debug(
          vt$1.origin !== a.source ? o : `${o} <span style="color: gray">(on ${vt$1.origin} from ${a.source})</span>`,
          ...a.args
        ), q$2(this.handler, "ChannelHandler should be set"), this.handler(a);
      }
    } catch (r) {
      s$2.error(r);
    }
  }
};
i$1(_t$1, "PostMessageTransport");
var G$2 = _t$1;
var { WebSocket: no$1 } = b$1, Vt$1 = 15e3, Kt$1 = 5e3, bt$1 = class bt {
  constructor({ url: e, onError: r, page: n }) {
    this.buffer = [];
    this.isReady = !1;
    this.isClosed = !1;
    this.pingTimeout = 0;
    this.socket = new no$1(e), this.socket.onopen = () => {
      this.isReady = !0, this.heartbeat(), this.flush();
    }, this.socket.onmessage = ({ data: a }) => {
      let l = typeof a == "string" && H$1(a) ? at$1(a) : a;
      q$2(this.handler, "WebsocketTransport handler should be set"), this.handler(l), l.type === "ping" && (this.heartbeat(), this.send({ type: "\
pong" }));
    }, this.socket.onerror = (a) => {
      r && r(a);
    }, this.socket.onclose = (a) => {
      q$2(this.handler, "WebsocketTransport handler should be set"), this.handler({
        type: S$2,
        args: [{ reason: a.reason, code: a.code }],
        from: n || "preview"
      }), this.isClosed = !0, clearTimeout(this.pingTimeout);
    };
  }
  heartbeat() {
    clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
      this.socket.close(3008, "timeout");
    }, Vt$1 + Kt$1);
  }
  setHandler(e) {
    this.handler = e;
  }
  send(e) {
    this.isClosed || (this.isReady ? this.sendNow(e) : this.sendLater(e));
  }
  sendLater(e) {
    this.buffer.push(e);
  }
  sendNow(e) {
    let r = ot(e, {
      maxDepth: 15,
      allowFunction: !1,
      ...b$1.CHANNEL_OPTIONS
    });
    this.socket.send(r);
  }
  flush() {
    let { buffer: e } = this;
    this.buffer = [], e.forEach((r) => this.send(r));
  }
};
i$1(bt$1, "WebsocketTransport");
var J$2 = bt$1;

// src/channels/index.ts
var { CONFIG_TYPE: oo } = b$1, Lo = z$3;
function ko({ page: t, extraTransports: e = [] }) {
  let r = [new G$2({ page: t }), ...e];
  if (oo === "DEVELOPMENT") {
    let n = window.location.protocol === "http:" ? "ws" : "wss", { hostname: a, port: l } = window.location, s = `${n}://${a}:${l}/storybook\
-server-channel`;
    r.push(new J$2({ url: s, onError: /* @__PURE__ */ i$1(() => {
    }, "onError"), page: t }));
  }
  return new z$3({ transports: r });
}
i$1(ko, "createBrowserChannel");

var oe$1 = Object.defineProperty;
var t = (u, n) => oe$1(u, "name", { value: n, configurable: !0 });

// ../node_modules/ts-dedent/esm/index.js
function r(u) {
  for (var n = [], e = 1; e < arguments.length; e++)
    n[e - 1] = arguments[e];
  var a = Array.from(typeof u == "string" ? [u] : u);
  a[a.length - 1] = a[a.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var g = a.reduce(function(i, m) {
    var y = m.match(/\n([\t ]+|(?!\s).)/g);
    return y ? i.concat(y.map(function(E) {
      var l, d;
      return (d = (l = E.match(/[\t ]/g)) === null || l === void 0 ? void 0 : l.length) !== null && d !== void 0 ? d : 0;
    })) : i;
  }, []);
  if (g.length) {
    var h = new RegExp(`
[	 ]{` + Math.min.apply(Math, g) + "}", "g");
    a = a.map(function(i) {
      return i.replace(h, `
`);
    });
  }
  a[0] = a[0].replace(/^\r?\n/, "");
  var c = a[0];
  return n.forEach(function(i, m) {
    var y = c.match(/(?:^|\n)( *)$/), E = y ? y[1] : "", l = i;
    typeof i == "string" && i.includes(`
`) && (l = String(i).split(`
`).map(function(d, te) {
      return te === 0 ? d : "" + E + d;
    }).join(`
`)), c += l + a[m + 1];
  }), c;
}
t(r, "dedent");

// src/storybook-error.ts
function C$2({
  code: u,
  category: n
}) {
  let e = String(u).padStart(4, "0");
  return `SB_${n}_${e}`;
}
t(C$2, "parseErrorCode");
var p = class p extends Error {
  constructor(e) {
    super(p.getFullMessage(e));
    /**
     * Data associated with the error. Used to provide additional information in the error message or
     * to be passed to telemetry.
     */
    this.data = {};
    /** Flag used to easily determine if the error originates from Storybook. */
    this.fromStorybook = !0;
    this.category = e.category, this.documentation = e.documentation ?? !1, this.code = e.code;
  }
  get fullErrorCode() {
    return C$2({ code: this.code, category: this.category });
  }
  /** Overrides the default `Error.name` property in the format: SB_<CATEGORY>_<CODE>. */
  get name() {
    let e = this.constructor.name;
    return `${this.fullErrorCode} (${e})`;
  }
  /** Generates the error message along with additional documentation link (if applicable). */
  static getFullMessage({
    documentation: e,
    code: a,
    category: g,
    message: h
  }) {
    let c;
    return e === !0 ? c = `https://storybook.js.org/error/${C$2({ code: a, category: g })}` : typeof e == "string" ? c = e : Array.isArray(e) &&
    (c = `
${e.map((i) => `	- ${i}`).join(`
`)}`), `${h}${c != null ? `

More info: ${c}
` : ""}`;
  }
};
t(p, "StorybookError");
var o = p;

// src/preview-errors.ts
var se$1 = /* @__PURE__ */ ((s) => (s.BLOCKS = "BLOCKS", s.DOCS_TOOLS = "DOCS-TOOLS", s.PREVIEW_CLIENT_LOGGER = "PREVIEW_CLIENT-LOGGER", s.PREVIEW_CHANNELS =
"PREVIEW_CHANNELS", s.PREVIEW_CORE_EVENTS = "PREVIEW_CORE-EVENTS", s.PREVIEW_INSTRUMENTER = "PREVIEW_INSTRUMENTER", s.PREVIEW_API = "PREVIEW\
_API", s.PREVIEW_REACT_DOM_SHIM = "PREVIEW_REACT-DOM-SHIM", s.PREVIEW_ROUTER = "PREVIEW_ROUTER", s.PREVIEW_THEMING = "PREVIEW_THEMING", s.RENDERER_HTML =
"RENDERER_HTML", s.RENDERER_PREACT = "RENDERER_PREACT", s.RENDERER_REACT = "RENDERER_REACT", s.RENDERER_SERVER = "RENDERER_SERVER", s.RENDERER_SVELTE =
"RENDERER_SVELTE", s.RENDERER_VUE = "RENDERER_VUE", s.RENDERER_VUE3 = "RENDERER_VUE3", s.RENDERER_WEB_COMPONENTS = "RENDERER_WEB-COMPONENTS",
s.FRAMEWORK_NEXTJS = "FRAMEWORK_NEXTJS", s.ADDON_VITEST = "ADDON_VITEST", s))(se$1 || {}), f$1 = class f extends o {
  constructor(e) {
    super({
      category: "PREVIEW_API",
      code: 1,
      message: r`
        Couldn't find story matching id '${e.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${e.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`
    });
    this.data = e;
  }
};
t(f$1, "MissingStoryAfterHmrError");
var D$1 = f$1, R$1 = class R extends o {
  constructor(e) {
    super({
      category: "PREVIEW_API",
      code: 2,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-\
for-example-in-the-play-function",
      message: r`
        We detected that you use an implicit action arg while ${e.phase} of your story.  
        ${e.deprecated ? `
This is deprecated and won't work in Storybook 8 anymore.
` : ""}
        Please provide an explicit spy to your args like this:
          import { fn } from '@storybook/test';
          ... 
          args: {
           ${e.name}: fn()
          }`
    });
    this.data = e;
  }
};
t(R$1, "ImplicitActionsDuringRendering");
var j$1 = R$1, b = class b extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 3,
      message: r`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`
    });
  }
};
t(b, "CalledExtractOnStoreError");
var L = b, I$1 = class I extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 4,
      message: r`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field"
    });
  }
};
t(I$1, "MissingRenderToCanvasError");
var G$1 = I$1, P$2 = class P extends o {
  constructor(e) {
    super({
      category: "PREVIEW_API",
      code: 5,
      message: r`
        Called \`Preview.${e.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${e.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`
    });
    this.data = e;
  }
};
t(P$2, "CalledPreviewMethodBeforeInitializationError");
var Y = P$2, x$1 = class x extends o {
  constructor(e) {
    super({
      category: "PREVIEW_API",
      code: 6,
      message: r`
        Error fetching \`/index.json\`:
        
        ${e.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`
    });
    this.data = e;
  }
};
t(x$1, "StoryIndexFetchError");
var M$1 = x$1, T = class T extends o {
  constructor(e) {
    super({
      category: "PREVIEW_API",
      code: 7,
      message: r`
        Tried to render docs entry ${e.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`
    });
    this.data = e;
  }
};
t(T, "MdxFileWithNoCsfReferencesError");
var H = T, w$1 = class w extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 8,
      message: r`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`
    });
  }
};
t(w$1, "EmptyIndexError");
var F$2 = w$1, k$2 = class k extends o {
  constructor(e) {
    super({
      category: "PREVIEW_API",
      code: 9,
      message: r`
        Couldn't find story matching '${e.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`
    });
    this.data = e;
  }
};
t(k$2, "NoStoryMatchError");
var K$1 = k$2, S$1 = class S extends o {
  constructor(e) {
    super({
      category: "PREVIEW_API",
      code: 10,
      message: r`
        Couldn't find story matching id '${e.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`
    });
    this.data = e;
  }
};
t(S$1, "MissingStoryFromCsfFileError");
var X$1 = S$1, v$1 = class v extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 11,
      message: r`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`
    });
  }
};
t(v$1, "StoryStoreAccessedBeforeInitializationError");
var U = v$1, _$1 = class _ extends o {
  constructor(e) {
    super({
      category: "PREVIEW_API",
      code: 12,
      message: r`
      Incorrect use of mount in the play function.
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${e.playFunction}`
    });
    this.data = e;
  }
};
t(_$1, "MountMustBeDestructuredError");
var J$1 = _$1, V$1 = class V extends o {
  constructor(e) {
    super({
      category: "PREVIEW_API",
      code: 14,
      message: r`
        No render function available for storyId '${e.id}'
      `
    });
    this.data = e;
  }
};
t(V$1, "NoRenderFunctionError");
var q$1 = V$1, N$1 = class N extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 15,
      message: r`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `
    });
  }
};
t(N$1, "NoStoryMountedError");
var z$2 = N$1, A = class A extends o {
  constructor() {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 1,
      documentation: "https://storybook.js.org/docs/get-started/nextjs#faq",
      message: r`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `
    });
  }
};
t(A, "NextJsSharpError");
var B$1 = A, W$1 = class W extends o {
  constructor(e) {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 2,
      message: r`
        Tried to access router mocks from "${e.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `
    });
    this.data = e;
  }
};
t(W$1, "NextjsRouterMocksNotAvailable");
var Q$1 = W$1, $ = class $ extends o {
  constructor(e) {
    super({
      category: "DOCS-TOOLS",
      code: 1,
      documentation: "https://github.com/storybookjs/storybook/issues/26606",
      message: r`
        There was a failure when generating detailed ArgTypes in ${e.language} for:
        ${JSON.stringify(e.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `
    });
    this.data = e;
  }
};
t($, "UnknownArgTypesError");
var Z$1 = $, O$1 = class O extends o {
  constructor(e) {
    super({
      category: "ADDON_VITEST",
      code: 1,
      // TODO: Add documentation about viewports support
      // documentation: '',
      message: r`
        Encountered an unsupported value "${e.value}" when setting the viewport ${e.dimension} dimension.
        
        The Storybook plugin only supports values in the following units:
        - px, vh, vw, em, rem and %.
        
        You can either change the viewport for this story to use one of the supported units or skip the test by adding '!test' to the story's tags per https://storybook.js.org/docs/writing-stories/tags
      `
    });
    this.data = e;
  }
};
t(O$1, "UnsupportedViewportDimensionError");
var ee = O$1;

var C$1=Object.create;var u=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var F$1=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var E=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var v=(r,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of F$1(e))!w.call(r,a)&&a!==n&&u(r,a,{get:()=>e[a],enumerable:!(t=B(e,a))||t.enumerable});return r};var I=(r,e,n)=>(n=r!=null?C$1(h(r)):{},v(e||!r||!r.__esModule?u(n,"default",{value:r,enumerable:!0}):n,r));var x=E(T=>{Object.defineProperty(T,"__esModule",{value:!0}),T.isEqual=function(){var r=Object.prototype.toString,e=Object.getPrototypeOf,n=Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:Object.keys;return function(t,a){return function i(o,s,p){var g,y,d,c=r.call(o),b=r.call(s);if(o===s)return !0;if(o==null||s==null)return !1;if(p.indexOf(o)>-1&&p.indexOf(s)>-1)return !0;if(p.push(o,s),c!=b||(g=n(o),y=n(s),g.length!=y.length||g.some(function(A){return !i(o[A],s[A],p)})))return !1;switch(c.slice(8,-1)){case "Symbol":return o.valueOf()==s.valueOf();case "Date":case "Number":return +o==+s||+o!=+o&&+s!=+s;case "RegExp":case "Function":case "String":case "Boolean":return ""+o==""+s;case "Set":case "Map":g=o.entries(),y=s.entries();do if(!i((d=g.next()).value,y.next().value,p))return !1;while(!d.done);return !0;case "ArrayBuffer":o=new Uint8Array(o),s=new Uint8Array(s);case "DataView":o=new Uint8Array(o.buffer),s=new Uint8Array(s.buffer);case "Float32Array":case "Float64Array":case "Int8Array":case "Int16Array":case "Int32Array":case "Uint8Array":case "Uint16Array":case "Uint32Array":case "Uint8ClampedArray":case "Arguments":case "Array":if(o.length!=s.length)return !1;for(d=0;d<o.length;d++)if((d in o||d in s)&&(d in o!=d in s||!i(o[d],s[d],p)))return !1;return !0;case "Object":return i(e(o),e(s),p);default:return !1}}(t,a,[])}}();});function R(r){return r.replace(/_/g," ").replace(/-/g," ").replace(/\./g," ").replace(/([^\n])([A-Z])([a-z])/g,(e,n,t,a)=>`${n} ${t}${a}`).replace(/([a-z])([A-Z])/g,(e,n,t)=>`${n} ${t}`).replace(/([a-z])([0-9])/gi,(e,n,t)=>`${n} ${t}`).replace(/([0-9])([a-z])/gi,(e,n,t)=>`${n} ${t}`).replace(/(\s|^)(\w)/g,(e,n,t)=>`${n}${t.toUpperCase()}`).replace(/ +/g," ").trim()}var l=I(x()),S=r=>r.map(e=>typeof e<"u").filter(Boolean).length,k$1=(r,e)=>{let{exists:n,eq:t,neq:a,truthy:i}=r;if(S([n,t,a,i])>1)throw new Error(`Invalid conditional test ${JSON.stringify({exists:n,eq:t,neq:a})}`);if(typeof t<"u")return (0, l.isEqual)(e,t);if(typeof a<"u")return !(0, l.isEqual)(e,a);if(typeof n<"u"){let s=typeof e<"u";return n?s:!s}return (typeof i>"u"?!0:i)?!!e:!e},P$1=(r,e,n)=>{if(!r.if)return !0;let{arg:t,global:a}=r.if;if(S([t,a])!==1)throw new Error(`Invalid conditional value ${JSON.stringify({arg:t,global:a})}`);let i=t?e[t]:n[a];return k$1(r.if,i)};var O=r=>r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),f=(r,e)=>{let n=O(r);if(n==="")throw new Error(`Invalid ${e} '${r}', must include alphanumeric characters`);return n},G=(r,e)=>`${f(r,"kind")}${e?`--${f(e,"name")}`:""}`,N=r=>R(r);function m$1(r,e){return Array.isArray(e)?e.includes(r):r.match(e)}function M(r,{includeStories:e,excludeStories:n}){return r!=="__esModule"&&(!e||m$1(r,e))&&(!n||!m$1(r,n))}var V=(r,{rootSeparator:e,groupSeparator:n})=>{let[t,a]=r.split(e,2),i=(a||r).split(n).filter(o=>!!o);return {root:a?t:null,groups:i}},z$1=(...r)=>{let e=r.reduce((n,t)=>(t.startsWith("!")?n.delete(t.slice(1)):n.add(t),n),new Set);return Array.from(e)};

var jn = Object.create;
var fr = Object.defineProperty;
var Mn = Object.getOwnPropertyDescriptor;
var _n = Object.getOwnPropertyNames;
var Ln = Object.getPrototypeOf, Nn = Object.prototype.hasOwnProperty;
var s = (r, e) => fr(r, "name", { value: e, configurable: !0 }), Ee = /* @__PURE__ */ ((r) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(r, {
  get: (e, t) => (typeof require < "u" ? require : e)[t]
}) : r)(function(r) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + r + '" is not supported');
});
var D = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var qn = (r, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of _n(e))
      !Nn.call(r, n) && n !== t && fr(r, n, { get: () => e[n], enumerable: !(o = Mn(e, n)) || o.enumerable });
  return r;
};
var ue = (r, e, t) => (t = r != null ? jn(Ln(r)) : {}, qn(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !r || !r.__esModule ? fr(t, "default", { value: r, enumerable: !0 }) : t,
  r
));

// ../node_modules/memoizerific/memoizerific.js
var Or = D((Jt, Ir) => {
  (function(r) {
    if (typeof Jt == "object" && typeof Ir < "u")
      Ir.exports = r();
    else if (typeof define == "function" && define.amd)
      define([], r);
    else {
      var e;
      typeof window < "u" ? e = window : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = this, e.memoizerific = r();
    }
  })(function() {
    var r, e, t;
    return (/* @__PURE__ */ s(function o(n, i, a) {
      function l(p, u) {
        if (!i[p]) {
          if (!n[p]) {
            var m = typeof Ee == "function" && Ee;
            if (!u && m) return m(p, !0);
            if (c) return c(p, !0);
            var b = new Error("Cannot find module '" + p + "'");
            throw b.code = "MODULE_NOT_FOUND", b;
          }
          var h = i[p] = { exports: {} };
          n[p][0].call(h.exports, function(g) {
            var y = n[p][1][g];
            return l(y || g);
          }, h, h.exports, o, n, i, a);
        }
        return i[p].exports;
      }
      s(l, "s");
      for (var c = typeof Ee == "function" && Ee, d = 0; d < a.length; d++) l(a[d]);
      return l;
    }, "e"))({ 1: [function(o, n, i) {
      n.exports = function(a) {
        if (typeof Map != "function" || a) {
          var l = o("./similar");
          return new l();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(o, n, i) {
      function a() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      s(a, "Similar"), a.prototype.get = function(l) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, l))
          return this.lastItem.val;
        if (c = this.indexOf(l), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, a.prototype.set = function(l, c) {
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, l) ? (this.lastItem.val = c, this) : (d = this.indexOf(l), d >= 0 ? (this.lastItem =
        this.list[d], this.list[d].val = c, this) : (this.lastItem = { key: l, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, a.prototype.delete = function(l) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, l) && (this.lastItem = void 0), c = this.indexOf(l), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, a.prototype.has = function(l) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, l) ? !0 : (c = this.indexOf(l), c >= 0 ? (this.lastItem = this.list[c], !0) :
        !1);
      }, a.prototype.forEach = function(l, c) {
        var d;
        for (d = 0; d < this.size; d++)
          l.call(c || this, this.list[d].val, this.list[d].key, this);
      }, a.prototype.indexOf = function(l) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, l))
            return c;
        return -1;
      }, a.prototype.isEqual = function(l, c) {
        return l === c || l !== l && c !== c;
      }, n.exports = a;
    }, {}], 3: [function(o, n, i) {
      var a = o("map-or-similar");
      n.exports = function(p) {
        var u = new a(!1), m = [];
        return function(b) {
          var h = /* @__PURE__ */ s(function() {
            var g = u, y, T, x = arguments.length - 1, f = Array(x + 1), S = !0, R;
            if ((h.numArgs || h.numArgs === 0) && h.numArgs !== x + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (R = 0; R < x; R++) {
              if (f[R] = {
                cacheItem: g,
                arg: arguments[R]
              }, g.has(arguments[R])) {
                g = g.get(arguments[R]);
                continue;
              }
              S = !1, y = new a(!1), g.set(arguments[R], y), g = y;
            }
            return S && (g.has(arguments[x]) ? T = g.get(arguments[x]) : S = !1), S || (T = b.apply(null, arguments), g.set(arguments[x], T)),
            p > 0 && (f[x] = {
              cacheItem: g,
              arg: arguments[x]
            }, S ? l(m, f) : m.push(f), m.length > p && c(m.shift())), h.wasMemoized = S, h.numArgs = x + 1, T;
          }, "memoizerific");
          return h.limit = p, h.wasMemoized = !1, h.cache = u, h.lru = m, h;
        };
      };
      function l(p, u) {
        var m = p.length, b = u.length, h, g, y;
        for (g = 0; g < m; g++) {
          for (h = !0, y = 0; y < b; y++)
            if (!d(p[g][y].arg, u[y].arg)) {
              h = !1;
              break;
            }
          if (h)
            break;
        }
        p.push(p.splice(g, 1)[0]);
      }
      s(l, "moveToMostRecentLru");
      function c(p) {
        var u = p.length, m = p[u - 1], b, h;
        for (m.cacheItem.delete(m.arg), h = u - 2; h >= 0 && (m = p[h], b = m.cacheItem.get(m.arg), !b || !b.size); h--)
          m.cacheItem.delete(m.arg);
      }
      s(c, "removeCachedResult");
      function d(p, u) {
        return p === u || p !== p && u !== u;
      }
      s(d, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/picoquery/lib/string-util.js
var tt = D((rt) => {
  "use strict";
  Object.defineProperty(rt, "__esModule", { value: !0 });
  rt.encodeString = qi;
  var V = Array.from({ length: 256 }, (r, e) => "%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase()), Ni = new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0
  ]);
  function qi(r) {
    let e = r.length;
    if (e === 0)
      return "";
    let t = "", o = 0, n = 0;
    e: for (; n < e; n++) {
      let i = r.charCodeAt(n);
      for (; i < 128; ) {
        if (Ni[i] !== 1 && (o < n && (t += r.slice(o, n)), o = n + 1, t += V[i]), ++n === e)
          break e;
        i = r.charCodeAt(n);
      }
      if (o < n && (t += r.slice(o, n)), i < 2048) {
        o = n + 1, t += V[192 | i >> 6] + V[128 | i & 63];
        continue;
      }
      if (i < 55296 || i >= 57344) {
        o = n + 1, t += V[224 | i >> 12] + V[128 | i >> 6 & 63] + V[128 | i & 63];
        continue;
      }
      if (++n, n >= e)
        throw new Error("URI malformed");
      let a = r.charCodeAt(n) & 1023;
      o = n + 1, i = 65536 + ((i & 1023) << 10 | a), t += V[240 | i >> 18] + V[128 | i >> 12 & 63] + V[128 | i >> 6 & 63] + V[128 | i & 63];
    }
    return o === 0 ? r : o < e ? t + r.slice(o) : t;
  }
  s(qi, "encodeString");
});

// ../node_modules/picoquery/lib/shared.js
var Ze = D((U) => {
  "use strict";
  Object.defineProperty(U, "__esModule", { value: !0 });
  U.defaultOptions = U.defaultShouldSerializeObject = U.defaultValueSerializer = void 0;
  var ot = tt(), Bi = /* @__PURE__ */ s((r) => {
    switch (typeof r) {
      case "string":
        return (0, ot.encodeString)(r);
      case "bigint":
      case "boolean":
        return "" + r;
      case "number":
        if (Number.isFinite(r))
          return r < 1e21 ? "" + r : (0, ot.encodeString)("" + r);
        break;
    }
    return r instanceof Date ? (0, ot.encodeString)(r.toISOString()) : "";
  }, "defaultValueSerializer");
  U.defaultValueSerializer = Bi;
  var Gi = /* @__PURE__ */ s((r) => r instanceof Date, "defaultShouldSerializeObject");
  U.defaultShouldSerializeObject = Gi;
  var ko = /* @__PURE__ */ s((r) => r, "identityFunc");
  U.defaultOptions = {
    nesting: !0,
    nestingSyntax: "dot",
    arrayRepeat: !1,
    arrayRepeatSyntax: "repeat",
    delimiter: 38,
    valueDeserializer: ko,
    valueSerializer: U.defaultValueSerializer,
    keyDeserializer: ko,
    shouldSerializeObject: U.defaultShouldSerializeObject
  };
});

// ../node_modules/picoquery/lib/object-util.js
var nt = D((er) => {
  "use strict";
  Object.defineProperty(er, "__esModule", { value: !0 });
  er.getDeepObject = Ui;
  er.stringifyObject = jo;
  var ae = Ze(), zi = tt();
  function Vi(r) {
    return r === "__proto__" || r === "constructor" || r === "prototype";
  }
  s(Vi, "isPrototypeKey");
  function Ui(r, e, t, o, n) {
    if (Vi(e))
      return r;
    let i = r[e];
    return typeof i == "object" && i !== null ? i : !o && (n || typeof t == "number" || typeof t == "string" && t * 0 === 0 && t.indexOf(".") ===
    -1) ? r[e] = [] : r[e] = {};
  }
  s(Ui, "getDeepObject");
  var Hi = 20, Wi = "[]", $i = "[", Yi = "]", Ki = ".";
  function jo(r, e, t = 0, o, n) {
    let { nestingSyntax: i = ae.defaultOptions.nestingSyntax, arrayRepeat: a = ae.defaultOptions.arrayRepeat, arrayRepeatSyntax: l = ae.defaultOptions.
    arrayRepeatSyntax, nesting: c = ae.defaultOptions.nesting, delimiter: d = ae.defaultOptions.delimiter, valueSerializer: p = ae.defaultOptions.
    valueSerializer, shouldSerializeObject: u = ae.defaultOptions.shouldSerializeObject } = e, m = typeof d == "number" ? String.fromCharCode(
    d) : d, b = n === !0 && a, h = i === "dot" || i === "js" && !n;
    if (t > Hi)
      return "";
    let g = "", y = !0, T = !1;
    for (let x in r) {
      let f = r[x], S;
      o ? (S = o, b ? l === "bracket" && (S += Wi) : h ? (S += Ki, S += x) : (S += $i, S += x, S += Yi)) : S = x, y || (g += m), typeof f ==
      "object" && f !== null && !u(f) ? (T = f.pop !== void 0, (c || a && T) && (g += jo(f, e, t + 1, S, T))) : (g += (0, zi.encodeString)(S),
      g += "=", g += p(f, x)), y && (y = !1);
    }
    return g;
  }
  s(jo, "stringifyObject");
});

// ../node_modules/fast-decode-uri-component/index.js
var No = D((Au, Lo) => {
  "use strict";
  var Mo = 12, Xi = 0, st = [
    // The first part of the table maps bytes to character to a transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    // The second part of the table maps a state to a new state when adding a
    // transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    // The third part maps the current transition to a mask that needs to apply
    // to the byte.
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
  function Ji(r) {
    var e = r.indexOf("%");
    if (e === -1) return r;
    for (var t = r.length, o = "", n = 0, i = 0, a = e, l = Mo; e > -1 && e < t; ) {
      var c = _o(r[e + 1], 4), d = _o(r[e + 2], 0), p = c | d, u = st[p];
      if (l = st[256 + l + u], i = i << 6 | p & st[364 + u], l === Mo)
        o += r.slice(n, a), o += i <= 65535 ? String.fromCharCode(i) : String.fromCharCode(
          55232 + (i >> 10),
          56320 + (i & 1023)
        ), i = 0, n = e + 3, e = a = r.indexOf("%", n);
      else {
        if (l === Xi)
          return null;
        if (e += 3, e < t && r.charCodeAt(e) === 37) continue;
        return null;
      }
    }
    return o + r.slice(n);
  }
  s(Ji, "decodeURIComponent");
  var Qi = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  function _o(r, e) {
    var t = Qi[r];
    return t === void 0 ? 255 : t << e;
  }
  s(_o, "hexCodeToInt");
  Lo.exports = Ji;
});

// ../node_modules/picoquery/lib/parse.js
var zo = D((Y) => {
  "use strict";
  var Zi = Y && Y.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Y, "__esModule", { value: !0 });
  Y.numberValueDeserializer = Y.numberKeyDeserializer = void 0;
  Y.parse = ta;
  var rr = nt(), le = Ze(), qo = Zi(No()), ea = /* @__PURE__ */ s((r) => {
    let e = Number(r);
    return Number.isNaN(e) ? r : e;
  }, "numberKeyDeserializer");
  Y.numberKeyDeserializer = ea;
  var ra = /* @__PURE__ */ s((r) => {
    let e = Number(r);
    return Number.isNaN(e) ? r : e;
  }, "numberValueDeserializer");
  Y.numberValueDeserializer = ra;
  var Bo = /\+/g, Go = /* @__PURE__ */ s(function() {
  }, "Empty");
  Go.prototype = /* @__PURE__ */ Object.create(null);
  function tr(r, e, t, o, n) {
    let i = r.substring(e, t);
    return o && (i = i.replace(Bo, " ")), n && (i = (0, qo.default)(i) || i), i;
  }
  s(tr, "computeKeySlice");
  function ta(r, e) {
    let { valueDeserializer: t = le.defaultOptions.valueDeserializer, keyDeserializer: o = le.defaultOptions.keyDeserializer, arrayRepeatSyntax: n = le.
    defaultOptions.arrayRepeatSyntax, nesting: i = le.defaultOptions.nesting, arrayRepeat: a = le.defaultOptions.arrayRepeat, nestingSyntax: l = le.
    defaultOptions.nestingSyntax, delimiter: c = le.defaultOptions.delimiter } = e ?? {}, d = typeof c == "string" ? c.charCodeAt(0) : c, p = l ===
    "js", u = new Go();
    if (typeof r != "string")
      return u;
    let m = r.length, b = "", h = -1, g = -1, y = -1, T = u, x, f = "", S = "", R = !1, w = !1, A = !1, I = !1, M = !1, N = !1, pe = !1, v = 0,
    G = -1, Re = -1, Tt = -1;
    for (let O = 0; O < m + 1; O++) {
      if (v = O !== m ? r.charCodeAt(O) : d, v === d) {
        if (pe = g > h, pe || (g = O), y !== g - 1 && (S = tr(r, y + 1, G > -1 ? G : g, A, R), f = o(S), x !== void 0 && (T = (0, rr.getDeepObject)(
        T, x, f, p && M, p && N))), pe || f !== "") {
          pe && (b = r.slice(g + 1, O), I && (b = b.replace(Bo, " ")), w && (b = (0, qo.default)(b) || b));
          let we = t(b, f);
          if (a) {
            let qe = T[f];
            qe === void 0 ? G > -1 ? T[f] = [we] : T[f] = we : qe.pop ? qe.push(we) : T[f] = [qe, we];
          } else
            T[f] = we;
        }
        b = "", h = O, g = O, R = !1, w = !1, A = !1, I = !1, M = !1, N = !1, G = -1, y = O, T = u, x = void 0, f = "";
      } else v === 93 ? (a && n === "bracket" && Tt === 91 && (G = Re), i && (l === "index" || p) && g <= h && (y !== Re && (S = tr(r, y + 1,
      O, A, R), f = o(S), x !== void 0 && (T = (0, rr.getDeepObject)(T, x, f, void 0, p)), x = f, A = !1, R = !1), y = O, N = !0, M = !1)) :
      v === 46 ? i && (l === "dot" || p) && g <= h && (y !== Re && (S = tr(r, y + 1, O, A, R), f = o(S), x !== void 0 && (T = (0, rr.getDeepObject)(
      T, x, f, p)), x = f, A = !1, R = !1), M = !0, N = !1, y = O) : v === 91 ? i && (l === "index" || p) && g <= h && (y !== Re && (S = tr(
      r, y + 1, O, A, R), f = o(S), p && x !== void 0 && (T = (0, rr.getDeepObject)(T, x, f, p)), x = f, A = !1, R = !1, M = !1, N = !0), y =
      O) : v === 61 ? g <= h ? g = O : w = !0 : v === 43 ? g > h ? I = !0 : A = !0 : v === 37 && (g > h ? w = !0 : R = !0);
      Re = O, Tt = v;
    }
    return u;
  }
  s(ta, "parse");
});

// ../node_modules/picoquery/lib/stringify.js
var Vo = D((it) => {
  "use strict";
  Object.defineProperty(it, "__esModule", { value: !0 });
  it.stringify = na;
  var oa = nt();
  function na(r, e) {
    if (r === null || typeof r != "object")
      return "";
    let t = e ?? {};
    return (0, oa.stringifyObject)(r, t);
  }
  s(na, "stringify");
});

// ../node_modules/picoquery/lib/main.js
var or = D((B) => {
  "use strict";
  var sa = B && B.__createBinding || (Object.create ? function(r, e, t, o) {
    o === void 0 && (o = t);
    var n = Object.getOwnPropertyDescriptor(e, t);
    (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e[t];
    }, "get") }), Object.defineProperty(r, o, n);
  } : function(r, e, t, o) {
    o === void 0 && (o = t), r[o] = e[t];
  }), ia = B && B.__exportStar || function(r, e) {
    for (var t in r) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && sa(e, r, t);
  };
  Object.defineProperty(B, "__esModule", { value: !0 });
  B.stringify = B.parse = void 0;
  var aa = zo();
  Object.defineProperty(B, "parse", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return aa.parse;
  }, "get") });
  var la = Vo();
  Object.defineProperty(B, "stringify", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return la.stringify;
  }, "get") });
  ia(Ze(), B);
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/maps/entities.json
var dt = D((zu, ha) => {
  ha.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\
\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}",
  Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\
\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220",
  ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\
\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222",
  angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\
\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5",
  Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\
\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D",
  backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\
\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\
\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\
\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\
\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\
\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\
\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\
\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\
\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554",
  boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\
\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\
\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A",
  boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\
\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F",
  bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\
\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\
\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041",
  caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\
\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2",
  cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\
\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\
\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\
\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\
\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\
\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102",
  cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\
\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\
\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2",
  ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48",
  cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00",
  curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4",
  curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D",
  dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\
\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA",
  DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\
\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\
\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4",
  diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7",
  divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}",
  dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238",
  dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\
\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\
\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\
\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957",
  DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}",
  dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\
\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9",
  easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\
\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}",
  eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\
\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB",
  emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\
\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5",
  Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\
\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\
\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\
\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130",
  exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03",
  fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\
\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200",
  ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC",
  frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C",
  frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131",
  gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F",
  Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267",
  gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\
\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9",
  gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A",
  gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\
\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A",
  gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7",
  gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7",
  hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\
\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9",
  hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\
\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\
\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010",
  Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\
\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\
\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\
\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\
\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124",
  Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\
\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9",
  iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\
\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\
\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}",
  Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA",
  kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\
\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\
\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\
\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190",
  Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2",
  latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772",
  lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\
\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\
\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190",
  Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\
\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\
\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\
\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960",
  LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264",
  leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00",
  lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\
\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\
\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC",
  lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\
\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\
\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\
\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\
\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\
\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\
\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\
\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0",
  Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\
\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976",
  ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\
\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\
\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\
\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127",
  micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\
\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\
\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207",
  Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\
\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43",
  Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D",
  ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338",
  NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262",
  nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: `
`, nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F",
  nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\
\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\
\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338",
  nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338",
  nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\
\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\
\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\
\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\
\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\
\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338",
  notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\
\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\
\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\
\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\
\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\
\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1",
  nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244",
  nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288",
  nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\
\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\
\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D",
  nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\
\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6",
  nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E",
  ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\
\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5",
  ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\
\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\
\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\
\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\
\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\
\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE",
  OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\
\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\
\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\
\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "\
+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1",
  Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A",
  prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\
\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3",
  precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\
\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\
\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}",
  qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\
\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\
\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB",
  rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\
\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\
\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]",
  rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309",
  rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C",
  realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\
\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1",
  rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\
\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\
\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\
\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\
\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953",
  RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\
\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E",
  rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\
\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\
\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\
\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D",
  sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\
\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925",
  searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\
\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448",
  ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\
\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243",
  simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\
\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA",
  smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\
\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00",
  Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\
\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\
\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\
\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\
\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\
\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\
\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\
\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\
\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\
\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE",
  supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\
\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\
\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926",
  swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4",
  tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\
\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\
\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\
\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\
\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1",
  top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122",
  triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9",
  trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\
\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\
\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\
\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB",
  ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\
\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C",
  ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF",
  UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}",
  uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\
\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E",
  UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5",
  UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\
\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\
\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\
\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\
\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\
\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\
\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE",
  verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\
\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\
\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\
\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\
\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD",
  Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\
\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\
\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\
\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}",
  yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E",
  yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\
\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\
\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D",
  zwnj: "\u200C" };
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/maps/legacy.json
var Xo = D((Vu, ga) => {
  ga.exports = { Aacute: "\xC1", aacute: "\xE1", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", AElig: "\xC6", aelig: "\xE6", Agrave: "\xC0", agrave: "\
\xE0", amp: "&", AMP: "&", Aring: "\xC5", aring: "\xE5", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", brvbar: "\xA6", Ccedil: "\
\xC7", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", COPY: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", Eacute: "\xC9",
  eacute: "\xE9", Ecirc: "\xCA", ecirc: "\xEA", Egrave: "\xC8", egrave: "\xE8", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", frac12: "\
\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", GT: ">", Iacute: "\xCD", iacute: "\xED", Icirc: "\xCE", icirc: "\xEE", iexcl: "\xA1", Igrave: "\
\xCC", igrave: "\xEC", iquest: "\xBF", Iuml: "\xCF", iuml: "\xEF", laquo: "\xAB", lt: "<", LT: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7",
  nbsp: "\xA0", not: "\xAC", Ntilde: "\xD1", ntilde: "\xF1", Oacute: "\xD3", oacute: "\xF3", Ocirc: "\xD4", ocirc: "\xF4", Ograve: "\xD2", ograve: "\
\xF2", ordf: "\xAA", ordm: "\xBA", Oslash: "\xD8", oslash: "\xF8", Otilde: "\xD5", otilde: "\xF5", Ouml: "\xD6", ouml: "\xF6", para: "\xB6",
  plusmn: "\xB1", pound: "\xA3", quot: '"', QUOT: '"', raquo: "\xBB", reg: "\xAE", REG: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\
\xB2", sup3: "\xB3", szlig: "\xDF", THORN: "\xDE", thorn: "\xFE", times: "\xD7", Uacute: "\xDA", uacute: "\xFA", Ucirc: "\xDB", ucirc: "\xFB",
  Ugrave: "\xD9", ugrave: "\xF9", uml: "\xA8", Uuml: "\xDC", uuml: "\xFC", Yacute: "\xDD", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/maps/xml.json
var pt = D((Uu, ba) => {
  ba.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/maps/decode.json
var Jo = D((Hu, Sa) => {
  Sa.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240,
  "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212,
  "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/decode_codepoint.js
var Zo = D((Ne) => {
  "use strict";
  var Ta = Ne && Ne.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Ne, "__esModule", { value: !0 });
  var Qo = Ta(Jo()), xa = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.fromCodePoint || function(r) {
      var e = "";
      return r > 65535 && (r -= 65536, e += String.fromCharCode(r >>> 10 & 1023 | 55296), r = 56320 | r & 1023), e += String.fromCharCode(r),
      e;
    }
  );
  function Ra(r) {
    return r >= 55296 && r <= 57343 || r > 1114111 ? "\uFFFD" : (r in Qo.default && (r = Qo.default[r]), xa(r));
  }
  s(Ra, "decodeCodePoint");
  Ne.default = Ra;
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/decode.js
var ft = D((H) => {
  "use strict";
  var nr = H && H.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(H, "__esModule", { value: !0 });
  H.decodeHTML = H.decodeHTMLStrict = H.decodeXML = void 0;
  var ut = nr(dt()), wa = nr(Xo()), Ea = nr(pt()), en = nr(Zo()), Aa = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
  H.decodeXML = tn(Ea.default);
  H.decodeHTMLStrict = tn(ut.default);
  function tn(r) {
    var e = on(r);
    return function(t) {
      return String(t).replace(Aa, e);
    };
  }
  s(tn, "getStrictDecoder");
  var rn = /* @__PURE__ */ s(function(r, e) {
    return r < e ? 1 : -1;
  }, "sorter");
  H.decodeHTML = function() {
    for (var r = Object.keys(wa.default).sort(rn), e = Object.keys(ut.default).sort(rn), t = 0, o = 0; t < e.length; t++)
      r[o] === e[t] ? (e[t] += ";?", o++) : e[t] += ";";
    var n = new RegExp("&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), i = on(ut.default);
    function a(l) {
      return l.substr(-1) !== ";" && (l += ";"), i(l);
    }
    return s(a, "replacer"), function(l) {
      return String(l).replace(n, a);
    };
  }();
  function on(r) {
    return /* @__PURE__ */ s(function(t) {
      if (t.charAt(1) === "#") {
        var o = t.charAt(2);
        return o === "X" || o === "x" ? en.default(parseInt(t.substr(3), 16)) : en.default(parseInt(t.substr(2), 10));
      }
      return r[t.slice(1, -1)] || t;
    }, "replace");
  }
  s(on, "getReplacer");
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/encode.js
var mt = D((L) => {
  "use strict";
  var nn = L && L.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(L, "__esModule", { value: !0 });
  L.escapeUTF8 = L.escape = L.encodeNonAsciiHTML = L.encodeHTML = L.encodeXML = void 0;
  var va = nn(pt()), sn = ln(va.default), an = cn(sn);
  L.encodeXML = un(sn);
  var Ca = nn(dt()), yt = ln(Ca.default), Pa = cn(yt);
  L.encodeHTML = Ia(yt, Pa);
  L.encodeNonAsciiHTML = un(yt);
  function ln(r) {
    return Object.keys(r).sort().reduce(function(e, t) {
      return e[r[t]] = "&" + t + ";", e;
    }, {});
  }
  s(ln, "getInverseObj");
  function cn(r) {
    for (var e = [], t = [], o = 0, n = Object.keys(r); o < n.length; o++) {
      var i = n[o];
      i.length === 1 ? e.push("\\" + i) : t.push(i);
    }
    e.sort();
    for (var a = 0; a < e.length - 1; a++) {
      for (var l = a; l < e.length - 1 && e[l].charCodeAt(1) + 1 === e[l + 1].charCodeAt(1); )
        l += 1;
      var c = 1 + l - a;
      c < 3 || e.splice(a, c, e[a] + "-" + e[l]);
    }
    return t.unshift("[" + e.join("") + "]"), new RegExp(t.join("|"), "g");
  }
  s(cn, "getInverseReplacer");
  var dn = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  Fa = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      function(r) {
        return r.codePointAt(0);
      }
    ) : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      function(r) {
        return (r.charCodeAt(0) - 55296) * 1024 + r.charCodeAt(1) - 56320 + 65536;
      }
    )
  );
  function sr(r) {
    return "&#x" + (r.length > 1 ? Fa(r) : r.charCodeAt(0)).toString(16).toUpperCase() + ";";
  }
  s(sr, "singleCharReplacer");
  function Ia(r, e) {
    return function(t) {
      return t.replace(e, function(o) {
        return r[o];
      }).replace(dn, sr);
    };
  }
  s(Ia, "getInverse");
  var pn = new RegExp(an.source + "|" + dn.source, "g");
  function Oa(r) {
    return r.replace(pn, sr);
  }
  s(Oa, "escape");
  L.escape = Oa;
  function Da(r) {
    return r.replace(an, sr);
  }
  s(Da, "escapeUTF8");
  L.escapeUTF8 = Da;
  function un(r) {
    return function(e) {
      return e.replace(pn, function(t) {
        return r[t] || sr(t);
      });
    };
  }
  s(un, "getASCIIEncoder");
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/index.js
var yn = D((E) => {
  "use strict";
  Object.defineProperty(E, "__esModule", { value: !0 });
  E.decodeXMLStrict = E.decodeHTML5Strict = E.decodeHTML4Strict = E.decodeHTML5 = E.decodeHTML4 = E.decodeHTMLStrict = E.decodeHTML = E.decodeXML =
  E.encodeHTML5 = E.encodeHTML4 = E.escapeUTF8 = E.escape = E.encodeNonAsciiHTML = E.encodeHTML = E.encodeXML = E.encode = E.decodeStrict = E.
  decode = void 0;
  var ir = ft(), fn = mt();
  function ka(r, e) {
    return (!e || e <= 0 ? ir.decodeXML : ir.decodeHTML)(r);
  }
  s(ka, "decode");
  E.decode = ka;
  function ja(r, e) {
    return (!e || e <= 0 ? ir.decodeXML : ir.decodeHTMLStrict)(r);
  }
  s(ja, "decodeStrict");
  E.decodeStrict = ja;
  function Ma(r, e) {
    return (!e || e <= 0 ? fn.encodeXML : fn.encodeHTML)(r);
  }
  s(Ma, "encode");
  E.encode = Ma;
  var ce = mt();
  Object.defineProperty(E, "encodeXML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ce.encodeXML;
  }, "get") });
  Object.defineProperty(E, "encodeHTML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ce.encodeHTML;
  }, "get") });
  Object.defineProperty(E, "encodeNonAsciiHTML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ce.encodeNonAsciiHTML;
  }, "get") });
  Object.defineProperty(E, "escape", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ce.escape;
  }, "get") });
  Object.defineProperty(E, "escapeUTF8", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ce.escapeUTF8;
  }, "get") });
  Object.defineProperty(E, "encodeHTML4", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ce.encodeHTML;
  }, "get") });
  Object.defineProperty(E, "encodeHTML5", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ce.encodeHTML;
  }, "get") });
  var ee = ft();
  Object.defineProperty(E, "decodeXML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ee.decodeXML;
  }, "get") });
  Object.defineProperty(E, "decodeHTML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ee.decodeHTML;
  }, "get") });
  Object.defineProperty(E, "decodeHTMLStrict", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ee.decodeHTMLStrict;
  }, "get") });
  Object.defineProperty(E, "decodeHTML4", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ee.decodeHTML;
  }, "get") });
  Object.defineProperty(E, "decodeHTML5", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ee.decodeHTML;
  }, "get") });
  Object.defineProperty(E, "decodeHTML4Strict", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ee.decodeHTMLStrict;
  }, "get") });
  Object.defineProperty(E, "decodeHTML5Strict", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ee.decodeHTMLStrict;
  }, "get") });
  Object.defineProperty(E, "decodeXMLStrict", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ee.decodeXML;
  }, "get") });
});

// ../node_modules/ansi-to-html/lib/ansi_to_html.js
var An = D((ef, En) => {
  "use strict";
  function _a(r, e) {
    if (!(r instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  s(_a, "_classCallCheck");
  function mn(r, e) {
    for (var t = 0; t < e.length; t++) {
      var o = e[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
    }
  }
  s(mn, "_defineProperties");
  function La(r, e, t) {
    return e && mn(r.prototype, e), t && mn(r, t), r;
  }
  s(La, "_createClass");
  function xn(r, e) {
    var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = Na(r)) || e && r && typeof r.length == "number") {
        t && (r = t);
        var o = 0, n = /* @__PURE__ */ s(function() {
        }, "F");
        return { s: n, n: /* @__PURE__ */ s(function() {
          return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] };
        }, "n"), e: /* @__PURE__ */ s(function(d) {
          throw d;
        }, "e"), f: n };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var i = !0, a = !1, l;
    return { s: /* @__PURE__ */ s(function() {
      t = t.call(r);
    }, "s"), n: /* @__PURE__ */ s(function() {
      var d = t.next();
      return i = d.done, d;
    }, "n"), e: /* @__PURE__ */ s(function(d) {
      a = !0, l = d;
    }, "e"), f: /* @__PURE__ */ s(function() {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (a) throw l;
      }
    }, "f") };
  }
  s(xn, "_createForOfIteratorHelper");
  function Na(r, e) {
    if (r) {
      if (typeof r == "string") return hn(r, e);
      var t = Object.prototype.toString.call(r).slice(8, -1);
      if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
      if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return hn(r, e);
    }
  }
  s(Na, "_unsupportedIterableToArray");
  function hn(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for (var t = 0, o = new Array(e); t < e; t++)
      o[t] = r[t];
    return o;
  }
  s(hn, "_arrayLikeToArray");
  var qa = yn(), gn = {
    fg: "#FFF",
    bg: "#000",
    newline: !1,
    escapeXML: !1,
    stream: !1,
    colors: Ba()
  };
  function Ba() {
    var r = {
      0: "#000",
      1: "#A00",
      2: "#0A0",
      3: "#A50",
      4: "#00A",
      5: "#A0A",
      6: "#0AA",
      7: "#AAA",
      8: "#555",
      9: "#F55",
      10: "#5F5",
      11: "#FF5",
      12: "#55F",
      13: "#F5F",
      14: "#5FF",
      15: "#FFF"
    };
    return ar(0, 5).forEach(function(e) {
      ar(0, 5).forEach(function(t) {
        ar(0, 5).forEach(function(o) {
          return Ga(e, t, o, r);
        });
      });
    }), ar(0, 23).forEach(function(e) {
      var t = e + 232, o = Rn(e * 10 + 8);
      r[t] = "#" + o + o + o;
    }), r;
  }
  s(Ba, "getDefaultColors");
  function Ga(r, e, t, o) {
    var n = 16 + r * 36 + e * 6 + t, i = r > 0 ? r * 40 + 55 : 0, a = e > 0 ? e * 40 + 55 : 0, l = t > 0 ? t * 40 + 55 : 0;
    o[n] = za([i, a, l]);
  }
  s(Ga, "setStyleColor");
  function Rn(r) {
    for (var e = r.toString(16); e.length < 2; )
      e = "0" + e;
    return e;
  }
  s(Rn, "toHexString");
  function za(r) {
    var e = [], t = xn(r), o;
    try {
      for (t.s(); !(o = t.n()).done; ) {
        var n = o.value;
        e.push(Rn(n));
      }
    } catch (i) {
      t.e(i);
    } finally {
      t.f();
    }
    return "#" + e.join("");
  }
  s(za, "toColorHexString");
  function bn(r, e, t, o) {
    var n;
    return e === "text" ? n = Wa(t, o) : e === "display" ? n = Ua(r, t, o) : e === "xterm256Foreground" ? n = cr(r, o.colors[t]) : e === "xt\
erm256Background" ? n = dr(r, o.colors[t]) : e === "rgb" && (n = Va(r, t)), n;
  }
  s(bn, "generateOutput");
  function Va(r, e) {
    e = e.substring(2).slice(0, -1);
    var t = +e.substr(0, 2), o = e.substring(5).split(";"), n = o.map(function(i) {
      return ("0" + Number(i).toString(16)).substr(-2);
    }).join("");
    return lr(r, (t === 38 ? "color:#" : "background-color:#") + n);
  }
  s(Va, "handleRgb");
  function Ua(r, e, t) {
    e = parseInt(e, 10);
    var o = {
      "-1": /* @__PURE__ */ s(function() {
        return "<br/>";
      }, "_"),
      0: /* @__PURE__ */ s(function() {
        return r.length && wn(r);
      }, "_"),
      1: /* @__PURE__ */ s(function() {
        return re(r, "b");
      }, "_"),
      3: /* @__PURE__ */ s(function() {
        return re(r, "i");
      }, "_"),
      4: /* @__PURE__ */ s(function() {
        return re(r, "u");
      }, "_"),
      8: /* @__PURE__ */ s(function() {
        return lr(r, "display:none");
      }, "_"),
      9: /* @__PURE__ */ s(function() {
        return re(r, "strike");
      }, "_"),
      22: /* @__PURE__ */ s(function() {
        return lr(r, "font-weight:normal;text-decoration:none;font-style:normal");
      }, "_"),
      23: /* @__PURE__ */ s(function() {
        return Tn(r, "i");
      }, "_"),
      24: /* @__PURE__ */ s(function() {
        return Tn(r, "u");
      }, "_"),
      39: /* @__PURE__ */ s(function() {
        return cr(r, t.fg);
      }, "_"),
      49: /* @__PURE__ */ s(function() {
        return dr(r, t.bg);
      }, "_"),
      53: /* @__PURE__ */ s(function() {
        return lr(r, "text-decoration:overline");
      }, "_")
    }, n;
    return o[e] ? n = o[e]() : 4 < e && e < 7 ? n = re(r, "blink") : 29 < e && e < 38 ? n = cr(r, t.colors[e - 30]) : 39 < e && e < 48 ? n =
    dr(r, t.colors[e - 40]) : 89 < e && e < 98 ? n = cr(r, t.colors[8 + (e - 90)]) : 99 < e && e < 108 && (n = dr(r, t.colors[8 + (e - 100)])),
    n;
  }
  s(Ua, "handleDisplay");
  function wn(r) {
    var e = r.slice(0);
    return r.length = 0, e.reverse().map(function(t) {
      return "</" + t + ">";
    }).join("");
  }
  s(wn, "resetStyles");
  function ar(r, e) {
    for (var t = [], o = r; o <= e; o++)
      t.push(o);
    return t;
  }
  s(ar, "range");
  function Ha(r) {
    return function(e) {
      return (r === null || e.category !== r) && r !== "all";
    };
  }
  s(Ha, "notCategory");
  function Sn(r) {
    r = parseInt(r, 10);
    var e = null;
    return r === 0 ? e = "all" : r === 1 ? e = "bold" : 2 < r && r < 5 ? e = "underline" : 4 < r && r < 7 ? e = "blink" : r === 8 ? e = "hid\
e" : r === 9 ? e = "strike" : 29 < r && r < 38 || r === 39 || 89 < r && r < 98 ? e = "foreground-color" : (39 < r && r < 48 || r === 49 || 99 <
    r && r < 108) && (e = "background-color"), e;
  }
  s(Sn, "categoryForCode");
  function Wa(r, e) {
    return e.escapeXML ? qa.encodeXML(r) : r;
  }
  s(Wa, "pushText");
  function re(r, e, t) {
    return t || (t = ""), r.push(e), "<".concat(e).concat(t ? ' style="'.concat(t, '"') : "", ">");
  }
  s(re, "pushTag");
  function lr(r, e) {
    return re(r, "span", e);
  }
  s(lr, "pushStyle");
  function cr(r, e) {
    return re(r, "span", "color:" + e);
  }
  s(cr, "pushForegroundColor");
  function dr(r, e) {
    return re(r, "span", "background-color:" + e);
  }
  s(dr, "pushBackgroundColor");
  function Tn(r, e) {
    var t;
    if (r.slice(-1)[0] === e && (t = r.pop()), t)
      return "</" + e + ">";
  }
  s(Tn, "closeTag");
  function $a(r, e, t) {
    var o = !1, n = 3;
    function i() {
      return "";
    }
    s(i, "remove");
    function a(R, w) {
      return t("xterm256Foreground", w), "";
    }
    s(a, "removeXterm256Foreground");
    function l(R, w) {
      return t("xterm256Background", w), "";
    }
    s(l, "removeXterm256Background");
    function c(R) {
      return e.newline ? t("display", -1) : t("text", R), "";
    }
    s(c, "newline");
    function d(R, w) {
      o = !0, w.trim().length === 0 && (w = "0"), w = w.trimRight(";").split(";");
      var A = xn(w), I;
      try {
        for (A.s(); !(I = A.n()).done; ) {
          var M = I.value;
          t("display", M);
        }
      } catch (N) {
        A.e(N);
      } finally {
        A.f();
      }
      return "";
    }
    s(d, "ansiMess");
    function p(R) {
      return t("text", R), "";
    }
    s(p, "realText");
    function u(R) {
      return t("rgb", R), "";
    }
    s(u, "rgb");
    var m = [{
      pattern: /^\x08+/,
      sub: i
    }, {
      pattern: /^\x1b\[[012]?K/,
      sub: i
    }, {
      pattern: /^\x1b\[\(B/,
      sub: i
    }, {
      pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
      sub: u
    }, {
      pattern: /^\x1b\[38;5;(\d+)m/,
      sub: a
    }, {
      pattern: /^\x1b\[48;5;(\d+)m/,
      sub: l
    }, {
      pattern: /^\n/,
      sub: c
    }, {
      pattern: /^\r+\n/,
      sub: c
    }, {
      pattern: /^\r/,
      sub: c
    }, {
      pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
      sub: d
    }, {
      // CSI n J
      // ED - Erase in Display Clears part of the screen.
      // If n is 0 (or missing), clear from cursor to end of screen.
      // If n is 1, clear from cursor to beginning of the screen.
      // If n is 2, clear entire screen (and moves cursor to upper left on DOS ANSI.SYS).
      // If n is 3, clear entire screen and delete all lines saved in the scrollback buffer
      //   (this feature was added for xterm and is supported by other terminal applications).
      pattern: /^\x1b\[\d?J/,
      sub: i
    }, {
      // CSI n ; m f
      // HVP - Horizontal Vertical Position Same as CUP
      pattern: /^\x1b\[\d{0,3};\d{0,3}f/,
      sub: i
    }, {
      // catch-all for CSI sequences?
      pattern: /^\x1b\[?[\d;]{0,3}/,
      sub: i
    }, {
      /**
       * extracts real text - not containing:
       * - `\x1b' - ESC - escape (Ascii 27)
       * - '\x08' - BS - backspace (Ascii 8)
       * - `\n` - Newline - linefeed (LF) (ascii 10)
       * - `\r` - Windows Carriage Return (CR)
       */
      pattern: /^(([^\x1b\x08\r\n])+)/,
      sub: p
    }];
    function b(R, w) {
      w > n && o || (o = !1, r = r.replace(R.pattern, R.sub));
    }
    s(b, "process");
    var h = [], g = r, y = g.length;
    e: for (; y > 0; ) {
      for (var T = 0, x = 0, f = m.length; x < f; T = ++x) {
        var S = m[T];
        if (b(S, T), r.length !== y) {
          y = r.length;
          continue e;
        }
      }
      if (r.length === y)
        break;
      h.push(0), y = r.length;
    }
    return h;
  }
  s($a, "tokenize");
  function Ya(r, e, t) {
    return e !== "text" && (r = r.filter(Ha(Sn(t))), r.push({
      token: e,
      data: t,
      category: Sn(t)
    })), r;
  }
  s(Ya, "updateStickyStack");
  var Ka = /* @__PURE__ */ function() {
    function r(e) {
      _a(this, r), e = e || {}, e.colors && (e.colors = Object.assign({}, gn.colors, e.colors)), this.options = Object.assign({}, gn, e), this.
      stack = [], this.stickyStack = [];
    }
    return s(r, "Filter"), La(r, [{
      key: "toHtml",
      value: /* @__PURE__ */ s(function(t) {
        var o = this;
        t = typeof t == "string" ? [t] : t;
        var n = this.stack, i = this.options, a = [];
        return this.stickyStack.forEach(function(l) {
          var c = bn(n, l.token, l.data, i);
          c && a.push(c);
        }), $a(t.join(""), i, function(l, c) {
          var d = bn(n, l, c, i);
          d && a.push(d), i.stream && (o.stickyStack = Ya(o.stickyStack, l, c));
        }), n.length && a.push(wn(n)), a.join("");
      }, "toHtml")
    }]), r;
  }();
  En.exports = Ka;
});

// ../node_modules/@storybook/global/dist/index.mjs
var P = (() => {
  let r;
  return typeof window < "u" ? r = window : typeof globalThis < "u" ? r = globalThis : typeof global < "u" ? r = global : typeof self < "u" ?
  r = self : r = {}, r;
})();
function yr() {
  let r = {
    setHandler: /* @__PURE__ */ s(() => {
    }, "setHandler"),
    send: /* @__PURE__ */ s(() => {
    }, "send")
  };
  return new z$3({ transport: r });
}
s(yr, "mockChannel");

// src/preview-api/modules/addons/main.ts
var gr = class gr {
  constructor() {
    this.getChannel = /* @__PURE__ */ s(() => {
      if (!this.channel) {
        let e = yr();
        return this.setChannel(e), e;
      }
      return this.channel;
    }, "getChannel");
    this.ready = /* @__PURE__ */ s(() => this.promise, "ready");
    this.hasChannel = /* @__PURE__ */ s(() => !!this.channel, "hasChannel");
    this.setChannel = /* @__PURE__ */ s((e) => {
      this.channel = e, this.resolve();
    }, "setChannel");
    this.promise = new Promise((e) => {
      this.resolve = () => e(this.getChannel());
    });
  }
};
s(gr, "AddonStore");
var hr = gr, mr = "__STORYBOOK_ADDONS_PREVIEW";
function Gn() {
  return P[mr] || (P[mr] = new hr()), P[mr];
}
s(Gn, "getAddonsStore");
var z = Gn();
var Rr = class Rr {
  constructor() {
    this.hookListsMap = void 0;
    this.mountedDecorators = void 0;
    this.prevMountedDecorators = void 0;
    this.currentHooks = void 0;
    this.nextHookIndex = void 0;
    this.currentPhase = void 0;
    this.currentEffects = void 0;
    this.prevEffects = void 0;
    this.currentDecoratorName = void 0;
    this.hasUpdates = void 0;
    this.currentContext = void 0;
    this.renderListener = /* @__PURE__ */ s((e) => {
      e === this.currentContext?.id && (this.triggerEffects(), this.currentContext = null, this.removeRenderListeners());
    }, "renderListener");
    this.init();
  }
  init() {
    this.hookListsMap = /* @__PURE__ */ new WeakMap(), this.mountedDecorators = /* @__PURE__ */ new Set(), this.prevMountedDecorators = /* @__PURE__ */ new Set(),
    this.currentHooks = [], this.nextHookIndex = 0, this.currentPhase = "NONE", this.currentEffects = [], this.prevEffects = [], this.currentDecoratorName =
    null, this.hasUpdates = !1, this.currentContext = null;
  }
  clean() {
    this.prevEffects.forEach((e) => {
      e.destroy && e.destroy();
    }), this.init(), this.removeRenderListeners();
  }
  getNextHook() {
    let e = this.currentHooks[this.nextHookIndex];
    return this.nextHookIndex += 1, e;
  }
  triggerEffects() {
    this.prevEffects.forEach((e) => {
      !this.currentEffects.includes(e) && e.destroy && e.destroy();
    }), this.currentEffects.forEach((e) => {
      this.prevEffects.includes(e) || (e.destroy = e.create());
    }), this.prevEffects = this.currentEffects, this.currentEffects = [];
  }
  addRenderListeners() {
    this.removeRenderListeners(), z.getChannel().on(X$2, this.renderListener);
  }
  removeRenderListeners() {
    z.getChannel().removeListener(X$2, this.renderListener);
  }
};
s(Rr, "HooksContext");
var te = Rr;
function Rt(r) {
  let e = /* @__PURE__ */ s((...t) => {
    let { hooks: o } = typeof t[0] == "function" ? t[1] : t[0], n = o.currentPhase, i = o.currentHooks, a = o.nextHookIndex, l = o.currentDecoratorName;
    o.currentDecoratorName = r.name, o.prevMountedDecorators.has(r) ? (o.currentPhase = "UPDATE", o.currentHooks = o.hookListsMap.get(r) || []) :
    (o.currentPhase = "MOUNT", o.currentHooks = [], o.hookListsMap.set(r, o.currentHooks), o.prevMountedDecorators.add(r)), o.nextHookIndex =
    0;
    let c = P.STORYBOOK_HOOKS_CONTEXT;
    P.STORYBOOK_HOOKS_CONTEXT = o;
    let d = r(...t);
    if (P.STORYBOOK_HOOKS_CONTEXT = c, o.currentPhase === "UPDATE" && o.getNextHook() != null)
      throw new Error(
        "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
      );
    return o.currentPhase = n, o.currentHooks = i, o.nextHookIndex = a, o.currentDecoratorName = l, d;
  }, "hookified");
  return e.originalFn = r, e;
}
s(Rt, "hookify");
var br = 0, Wn = 25, Sr = /* @__PURE__ */ s((r) => (e, t) => {
  let o = r(
    Rt(e),
    t.map((n) => Rt(n))
  );
  return (n) => {
    let { hooks: i } = n;
    i.prevMountedDecorators ??= /* @__PURE__ */ new Set(), i.mountedDecorators = /* @__PURE__ */ new Set([e, ...t]), i.currentContext = n, i.
    hasUpdates = !1;
    let a = o(n);
    for (br = 1; i.hasUpdates; )
      if (i.hasUpdates = !1, i.currentEffects = [], a = o(n), br += 1, br > Wn)
        throw new Error(
          "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop."
        );
    return i.addRenderListeners(), a;
  };
}, "applyHooks"), $n = /* @__PURE__ */ s((r, e) => r.length === e.length && r.every((t, o) => t === e[o]), "areDepsEqual"), Tr = /* @__PURE__ */ s(
() => new Error("Storybook preview hooks can only be called inside decorators and story functions."), "invalidHooksError");
function wt() {
  return P.STORYBOOK_HOOKS_CONTEXT || null;
}
s(wt, "getHooksContextOrNull");
function xr() {
  let r = wt();
  if (r == null)
    throw Tr();
  return r;
}
s(xr, "getHooksContextOrThrow");
function Yn(r, e, t) {
  let o = xr();
  if (o.currentPhase === "MOUNT") {
    t != null && !Array.isArray(t) && s$2.warn(
      `${r} received a final argument that is not an array (instead, received ${t}). When specified, the final argument must be an array.`
    );
    let n = { name: r, deps: t };
    return o.currentHooks.push(n), e(n), n;
  }
  if (o.currentPhase === "UPDATE") {
    let n = o.getNextHook();
    if (n == null)
      throw new Error("Rendered more hooks than during the previous render.");
    return n.name !== r && s$2.warn(
      `Storybook has detected a change in the order of Hooks${o.currentDecoratorName ? ` called by ${o.currentDecoratorName}` : ""}. This wi\
ll lead to bugs and errors if not fixed.`
    ), t != null && n.deps == null && s$2.warn(
      `${r} received a final argument during this render, but not during the previous render. Even though the final argument is optional, it\
s type cannot change between renders.`
    ), t != null && n.deps != null && t.length !== n.deps.length && s$2.warn(`The final argument passed to ${r} changed size between renders.\
 The order and size of this array must remain constant.
Previous: ${n.deps}
Incoming: ${t}`), (t == null || n.deps == null || !$n(t, n.deps)) && (e(n), n.deps = t), n;
  }
  throw Tr();
}
s(Yn, "useHook");
function Be(r, e, t) {
  let { memoizedState: o } = Yn(
    r,
    (n) => {
      n.memoizedState = e();
    },
    t
  );
  return o;
}
s(Be, "useMemoLike");
function Kn(r, e) {
  return Be("useMemo", r, e);
}
s(Kn, "useMemo");
function ve(r, e) {
  return Be("useCallback", () => r, e);
}
s(ve, "useCallback");
function Et(r, e) {
  return Be(r, () => ({ current: e }), []);
}
s(Et, "useRefLike");
function Xn(r) {
  return Et("useRef", r);
}
s(Xn, "useRef");
function Jn() {
  let r = wt();
  if (r != null && r.currentPhase !== "NONE")
    r.hasUpdates = !0;
  else
    try {
      z.getChannel().emit(L$2);
    } catch {
      s$2.warn("State updates of Storybook preview hooks work only in browser");
    }
}
s(Jn, "triggerUpdate");
function At(r, e) {
  let t = Et(
    r,
    // @ts-expect-error S type should never be function, but there's no way to tell that to TypeScript
    typeof e == "function" ? e() : e
  ), o = /* @__PURE__ */ s((n) => {
    t.current = typeof n == "function" ? n(t.current) : n, Jn();
  }, "setState");
  return [t.current, o];
}
s(At, "useStateLike");
function Qn(r) {
  return At("useState", r);
}
s(Qn, "useState");
function Zn(r, e, t) {
  let o = t != null ? () => t(e) : e, [n, i] = At("useReducer", o);
  return [n, /* @__PURE__ */ s((l) => i((c) => r(c, l)), "dispatch")];
}
s(Zn, "useReducer");
function vt(r, e) {
  let t = xr(), o = Be("useEffect", () => ({ create: r }), e);
  t.currentEffects.includes(o) || t.currentEffects.push(o);
}
s(vt, "useEffect");
function es(r, e = []) {
  let t = z.getChannel();
  return vt(() => (Object.entries(r).forEach(([o, n]) => t.on(o, n)), () => {
    Object.entries(r).forEach(
      ([o, n]) => t.removeListener(o, n)
    );
  }), [...Object.keys(r), ...e]), ve(t.emit.bind(t), [t]);
}
s(es, "useChannel");
function Ge() {
  let { currentContext: r } = xr();
  if (r == null)
    throw Tr();
  return r;
}
s(Ge, "useStoryContext");
function rs(r, e) {
  let { parameters: t } = Ge();
  if (r)
    return t[r] ?? e;
}
s(rs, "useParameter");
function ts() {
  let r = z.getChannel(), { id: e, args: t } = Ge(), o = ve(
    (i) => r.emit(z$4, { storyId: e, updatedArgs: i }),
    [r, e]
  ), n = ve(
    (i) => r.emit(W$3, { storyId: e, argNames: i }),
    [r, e]
  );
  return [t, o, n];
}
s(ts, "useArgs");
function os() {
  let r = z.getChannel(), { globals: e } = Ge(), t = ve(
    (o) => r.emit(j$2, { globals: o }),
    [r]
  );
  return [e, t];
}
s(os, "useGlobals");

// src/preview-api/modules/addons/make-decorator.ts
var ns = /* @__PURE__ */ s(({
  name: r,
  parameterName: e,
  wrapper: t,
  skipIfNoParametersOrOptions: o = !1
}) => {
  let n = /* @__PURE__ */ s((i) => (a, l) => {
    let c = l.parameters && l.parameters[e];
    return c && c.disable || o && !i && !c ? a(l) : t(a, l, {
      options: i,
      parameters: c
    });
  }, "decorator");
  return (...i) => typeof i[0] == "function" ? n()(...i) : (...a) => {
    if (a.length > 1)
      return i.length > 1 ? n(i)(...a) : n(...i)(...a);
    throw new Error(
      `Passing stories directly into ${r}() is not allowed,
        instead use addDecorator(${r}) and pass options with the '${e}' parameter`
    );
  };
}, "makeDecorator");

// ../node_modules/es-toolkit/dist/object/omitBy.mjs
function wr(r, e) {
  let t = {}, o = Object.entries(r);
  for (let n = 0; n < o.length; n++) {
    let [i, a] = o[n];
    e(a, i) || (t[i] = a);
  }
  return t;
}
s(wr, "omitBy");

// ../node_modules/es-toolkit/dist/object/pick.mjs
function Er(r, e) {
  let t = {};
  for (let o = 0; o < e.length; o++) {
    let n = e[o];
    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
s(Er, "pick");

// ../node_modules/es-toolkit/dist/object/pickBy.mjs
function Ar(r, e) {
  let t = {}, o = Object.entries(r);
  for (let n = 0; n < o.length; n++) {
    let [i, a] = o[n];
    e(a, i) && (t[i] = a);
  }
  return t;
}
s(Ar, "pickBy");

// ../node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function j(r) {
  if (typeof r != "object" || r == null)
    return !1;
  if (Object.getPrototypeOf(r) === null)
    return !0;
  if (r.toString() !== "[object Object]")
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e;
}
s(j, "isPlainObject");

// ../node_modules/es-toolkit/dist/object/mapValues.mjs
function q(r, e) {
  let t = {}, o = Object.keys(r);
  for (let n = 0; n < o.length; n++) {
    let i = o[n], a = r[i];
    t[i] = e(a, i, r);
  }
  return t;
}
s(q, "mapValues");

// ../node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var Ct = "[object RegExp]", Pt = "[object String]", Ft = "[object Number]", It = "[object Boolean]", vr = "[object Arguments]", Ot = "[objec\
t Symbol]", Dt = "[object Date]", kt = "[object Map]", jt = "[object Set]", Mt = "[object Array]", _t = "[object Function]", Lt = "[object A\
rrayBuffer]", ze = "[object Object]", Nt = "[object Error]", qt = "[object DataView]", Bt = "[object Uint8Array]", Gt = "[object Uint8Clampe\
dArray]", zt = "[object Uint16Array]", Vt = "[object Uint32Array]", Ut = "[object BigUint64Array]", Ht = "[object Int8Array]", Wt = "[object\
 Int16Array]", $t = "[object Int32Array]", Yt = "[object BigInt64Array]", Kt = "[object Float32Array]", Xt = "[object Float64Array]";

// ../node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function Cr(r) {
  return Object.getOwnPropertySymbols(r).filter((e) => Object.prototype.propertyIsEnumerable.call(r, e));
}
s(Cr, "getSymbols");

// ../node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function Pr(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
}
s(Pr, "getTag");

// ../node_modules/es-toolkit/dist/predicate/isEqual.mjs
function Fr(r, e) {
  if (typeof r == typeof e)
    switch (typeof r) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return r === e;
      case "number":
        return r === e || Object.is(r, e);
      case "function":
        return r === e;
      case "object":
        return W(r, e);
    }
  return W(r, e);
}
s(Fr, "isEqual");
function W(r, e, t) {
  if (Object.is(r, e))
    return !0;
  let o = Pr(r), n = Pr(e);
  if (o === vr && (o = ze), n === vr && (n = ze), o !== n)
    return !1;
  switch (o) {
    case Pt:
      return r.toString() === e.toString();
    case Ft: {
      let l = r.valueOf(), c = e.valueOf();
      return l === c || Number.isNaN(l) && Number.isNaN(c);
    }
    case It:
    case Dt:
    case Ot:
      return Object.is(r.valueOf(), e.valueOf());
    case Ct:
      return r.source === e.source && r.flags === e.flags;
    case _t:
      return r === e;
  }
  t = t ?? /* @__PURE__ */ new Map();
  let i = t.get(r), a = t.get(e);
  if (i != null && a != null)
    return i === e;
  t.set(r, e), t.set(e, r);
  try {
    switch (o) {
      case kt: {
        if (r.size !== e.size)
          return !1;
        for (let [l, c] of r.entries())
          if (!e.has(l) || !W(c, e.get(l), t))
            return !1;
        return !0;
      }
      case jt: {
        if (r.size !== e.size)
          return !1;
        let l = Array.from(r.values()), c = Array.from(e.values());
        for (let d = 0; d < l.length; d++) {
          let p = l[d], u = c.findIndex((m) => W(p, m, t));
          if (u === -1)
            return !1;
          c.splice(u, 1);
        }
        return !0;
      }
      case Mt:
      case Bt:
      case Gt:
      case zt:
      case Vt:
      case Ut:
      case Ht:
      case Wt:
      case $t:
      case Yt:
      case Kt:
      case Xt: {
        if (typeof Buffer < "u" && Buffer.isBuffer(r) !== Buffer.isBuffer(e) || r.length !== e.length)
          return !1;
        for (let l = 0; l < r.length; l++)
          if (!W(r[l], e[l], t))
            return !1;
        return !0;
      }
      case Lt:
        return r.byteLength !== e.byteLength ? !1 : W(new Uint8Array(r), new Uint8Array(e), t);
      case qt:
        return r.byteLength !== e.byteLength || r.byteOffset !== e.byteOffset ? !1 : W(r.buffer, e.buffer, t);
      case Nt:
        return r.name === e.name && r.message === e.message;
      case ze: {
        if (!(W(r.constructor, e.constructor, t) || j(r) && j(e)))
          return !1;
        let c = [...Object.keys(r), ...Cr(r)], d = [...Object.keys(e), ...Cr(e)];
        if (c.length !== d.length)
          return !1;
        for (let p = 0; p < c.length; p++) {
          let u = c[p], m = r[u];
          if (!Object.prototype.hasOwnProperty.call(e, u))
            return !1;
          let b = e[u];
          if (!W(m, b, t))
            return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    t.delete(r), t.delete(e);
  }
}
s(W, "areObjectsEqual");

// src/preview-api/modules/store/StoryStore.ts
var Xe = ue(Or(), 1);

// ../node_modules/ts-dedent/esm/index.js
function F(r) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  var o = Array.from(typeof r == "string" ? [r] : r);
  o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = o.reduce(function(l, c) {
    var d = c.match(/\n([\t ]+|(?!\s).)/g);
    return d ? l.concat(d.map(function(p) {
      var u, m;
      return (m = (u = p.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && m !== void 0 ? m : 0;
    })) : l;
  }, []);
  if (n.length) {
    var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    o = o.map(function(l) {
      return l.replace(i, `
`);
    });
  }
  o[0] = o[0].replace(/^\r?\n/, "");
  var a = o[0];
  return e.forEach(function(l, c) {
    var d = a.match(/(?:^|\n)( *)$/), p = d ? d[1] : "", u = l;
    typeof l == "string" && l.includes(`
`) && (u = String(l).split(`
`).map(function(m, b) {
      return b === 0 ? m : "" + p + m;
    }).join(`
`)), a += u + o[c + 1];
  }), a;
}
s(F, "dedent");

// src/preview-api/modules/store/args.ts
var fe = Symbol("incompatible"), kr = /* @__PURE__ */ s((r, e) => {
  let t = e.type;
  if (r == null || !t || e.mapping)
    return r;
  switch (t.name) {
    case "string":
      return String(r);
    case "enum":
      return r;
    case "number":
      return Number(r);
    case "boolean":
      return String(r) === "true";
    case "array":
      return !t.value || !Array.isArray(r) ? fe : r.reduce((o, n, i) => {
        let a = kr(n, { type: t.value });
        return a !== fe && (o[i] = a), o;
      }, new Array(r.length));
    case "object":
      return typeof r == "string" || typeof r == "number" ? r : !t.value || typeof r != "object" ? fe : Object.entries(r).reduce((o, [n, i]) => {
        let a = kr(i, { type: t.value[n] });
        return a === fe ? o : Object.assign(o, { [n]: a });
      }, {});
    default:
      return fe;
  }
}, "map"), Qt = /* @__PURE__ */ s((r, e) => Object.entries(r).reduce((t, [o, n]) => {
  if (!e[o])
    return t;
  let i = kr(n, e[o]);
  return i === fe ? t : Object.assign(t, { [o]: i });
}, {}), "mapArgsToTypes"), Ce = /* @__PURE__ */ s((r, e) => Array.isArray(r) && Array.isArray(e) ? e.reduce(
  (t, o, n) => (t[n] = Ce(r[n], e[n]), t),
  [...r]
).filter((t) => t !== void 0) : !j(r) || !j(e) ? e : Object.keys({ ...r, ...e }).reduce((t, o) => {
  if (o in e) {
    let n = Ce(r[o], e[o]);
    n !== void 0 && (t[o] = n);
  } else
    t[o] = r[o];
  return t;
}, {}), "combineArgs"), Zt = /* @__PURE__ */ s((r, e) => Object.entries(e).reduce((t, [o, { options: n }]) => {
  function i() {
    return o in r && (t[o] = r[o]), t;
  }
  if (s(i, "allowArg"), !n)
    return i();
  if (!Array.isArray(n))
    return n$1.error(F`
        Invalid argType: '${o}.options' should be an array.

        More info: https://storybook.js.org/docs/api/arg-types
      `), i();
  if (n.some((u) => u && ["object", "function"].includes(typeof u)))
    return n$1.error(F`
        Invalid argType: '${o}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
      `), i();
  let a = Array.isArray(r[o]), l = a && r[o].findIndex((u) => !n.includes(u)), c = a && l === -1;
  if (r[o] === void 0 || n.includes(r[o]) || c)
    return i();
  let d = a ? `${o}[${l}]` : o, p = n.map((u) => typeof u == "string" ? `'${u}'` : String(u)).join(", ");
  return n$1.warn(`Received illegal value for '${d}'. Supported options: ${p}`), t;
}, {}), "validateOptions"), oe = Symbol("Deeply equal"), ye = /* @__PURE__ */ s((r, e) => {
  if (typeof r != typeof e)
    return e;
  if (Fr(r, e))
    return oe;
  if (Array.isArray(r) && Array.isArray(e)) {
    let t = e.reduce((o, n, i) => {
      let a = ye(r[i], n);
      return a !== oe && (o[i] = a), o;
    }, new Array(e.length));
    return e.length >= r.length ? t : t.concat(new Array(r.length - e.length).fill(void 0));
  }
  return j(r) && j(e) ? Object.keys({ ...r, ...e }).reduce((t, o) => {
    let n = ye(r?.[o], e?.[o]);
    return n === oe ? t : Object.assign(t, { [o]: n });
  }, {}) : e;
}, "deepDiff"), jr = "UNTARGETED";
function eo({
  args: r,
  argTypes: e
}) {
  let t = {};
  return Object.entries(r).forEach(([o, n]) => {
    let { target: i = jr } = e[o] || {};
    t[i] = t[i] || {}, t[i][o] = n;
  }), t;
}
s(eo, "groupArgsByTarget");

// src/preview-api/modules/store/ArgsStore.ts
function ss(r) {
  return Object.keys(r).forEach((e) => r[e] === void 0 && delete r[e]), r;
}
s(ss, "deleteUndefined");
var Mr = class Mr {
  constructor() {
    this.initialArgsByStoryId = {};
    this.argsByStoryId = {};
  }
  get(e) {
    if (!(e in this.argsByStoryId))
      throw new Error(`No args known for ${e} -- has it been rendered yet?`);
    return this.argsByStoryId[e];
  }
  setInitial(e) {
    if (!this.initialArgsByStoryId[e.id])
      this.initialArgsByStoryId[e.id] = e.initialArgs, this.argsByStoryId[e.id] = e.initialArgs;
    else if (this.initialArgsByStoryId[e.id] !== e.initialArgs) {
      let t = ye(this.initialArgsByStoryId[e.id], this.argsByStoryId[e.id]);
      this.initialArgsByStoryId[e.id] = e.initialArgs, this.argsByStoryId[e.id] = e.initialArgs, t !== oe && this.updateFromDelta(e, t);
    }
  }
  updateFromDelta(e, t) {
    let o = Zt(t, e.argTypes);
    this.argsByStoryId[e.id] = Ce(this.argsByStoryId[e.id], o);
  }
  updateFromPersisted(e, t) {
    let o = Qt(t, e.argTypes);
    return this.updateFromDelta(e, o);
  }
  update(e, t) {
    if (!(e in this.argsByStoryId))
      throw new Error(`No args known for ${e} -- has it been rendered yet?`);
    this.argsByStoryId[e] = ss({
      ...this.argsByStoryId[e],
      ...t
    });
  }
};
s(Mr, "ArgsStore");
var Ve = Mr;

// src/preview-api/modules/store/csf/getValuesFromArgTypes.ts
var Ue = /* @__PURE__ */ s((r = {}) => Object.entries(r).reduce((e, [t, { defaultValue: o }]) => (typeof o < "u" && (e[t] = o), e), {}), "ge\
tValuesFromArgTypes");

// src/preview-api/modules/store/GlobalsStore.ts
var _r = class _r {
  constructor({
    globals: e = {},
    globalTypes: t = {}
  }) {
    this.set({ globals: e, globalTypes: t });
  }
  set({ globals: e = {}, globalTypes: t = {} }) {
    let o = this.initialGlobals && ye(this.initialGlobals, this.globals);
    this.allowedGlobalNames = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
    let n = Ue(t);
    this.initialGlobals = { ...n, ...e }, this.globals = this.initialGlobals, o && o !== oe && this.updateFromPersisted(o);
  }
  filterAllowedGlobals(e) {
    return Object.entries(e).reduce((t, [o, n]) => (this.allowedGlobalNames.has(o) ? t[o] = n : s$2.warn(
      `Attempted to set a global (${o}) that is not defined in initial globals or globalTypes`
    ), t), {});
  }
  updateFromPersisted(e) {
    let t = this.filterAllowedGlobals(e);
    this.globals = { ...this.globals, ...t };
  }
  get() {
    return this.globals;
  }
  update(e) {
    this.globals = { ...this.globals, ...this.filterAllowedGlobals(e) };
  }
};
s(_r, "GlobalsStore");
var He = _r;

// src/preview-api/modules/store/StoryIndexStore.ts
var ro = ue(Or(), 1);
var ls = (0, ro.default)(1)(
  (r) => Object.values(r).reduce(
    (e, t) => (e[t.importPath] = e[t.importPath] || t, e),
    {}
  )
), Lr = class Lr {
  constructor({ entries: e } = { v: 5, entries: {} }) {
    this.entries = e;
  }
  entryFromSpecifier(e) {
    let t = Object.values(this.entries);
    if (e === "*")
      return t[0];
    if (typeof e == "string")
      return this.entries[e] ? this.entries[e] : t.find((i) => i.id.startsWith(e));
    let { name: o, title: n } = e;
    return t.find((i) => i.name === o && i.title === n);
  }
  storyIdToEntry(e) {
    let t = this.entries[e];
    if (!t)
      throw new D$1({ storyId: e });
    return t;
  }
  importPathToEntry(e) {
    return ls(this.entries)[e];
  }
};
s(Lr, "StoryIndexStore");
var We = Lr;

// src/preview-api/modules/store/csf/normalizeInputTypes.ts
var cs = /* @__PURE__ */ s((r) => typeof r == "string" ? { name: r } : r, "normalizeType"), ds = /* @__PURE__ */ s((r) => typeof r == "strin\
g" ? { type: r } : r, "normalizeControl"), ps = /* @__PURE__ */ s((r, e) => {
  let { type: t, control: o, ...n } = r, i = {
    name: e,
    ...n
  };
  return t && (i.type = cs(t)), o ? i.control = ds(o) : o === !1 && (i.control = { disable: !0 }), i;
}, "normalizeInputType"), ne = /* @__PURE__ */ s((r) => q(r, ps), "normalizeInputTypes");

// src/preview-api/modules/store/csf/normalizeArrays.ts
var C = /* @__PURE__ */ s((r) => Array.isArray(r) ? r : r ? [r] : [], "normalizeArrays");

// src/preview-api/modules/store/csf/normalizeStory.ts
var hs = F`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
function Pe(r, e, t) {
  let o = e, n = typeof e == "function" ? e : null, { story: i } = o;
  i && (s$2.debug("deprecated story", i), m$3(hs));
  let a = N(r), l = typeof o != "function" && o.name || o.storyName || i?.name || a, c = [
    ...C(o.decorators),
    ...C(i?.decorators)
  ], d = { ...i?.parameters, ...o.parameters }, p = { ...i?.args, ...o.args }, u = { ...i?.argTypes, ...o.argTypes }, m = [...C(o.loaders), ...C(
  i?.loaders)], b = [
    ...C(o.beforeEach),
    ...C(i?.beforeEach)
  ], h = [
    ...C(o.experimental_afterEach),
    ...C(i?.experimental_afterEach)
  ], { render: g, play: y, tags: T = [], globals: x = {} } = o, f = d.__id || G(t.id, a);
  return {
    moduleExport: e,
    id: f,
    name: l,
    tags: T,
    decorators: c,
    parameters: d,
    args: p,
    argTypes: ne(u),
    loaders: m,
    beforeEach: b,
    experimental_afterEach: h,
    globals: x,
    ...g && { render: g },
    ...n && { userStoryFn: n },
    ...y && { play: y }
  };
}
s(Pe, "normalizeStory");
function $e(r, e = r.title, t) {
  let { id: o, argTypes: n } = r;
  return {
    id: O(o || e),
    ...r,
    title: e,
    ...n && { argTypes: ne(n) },
    parameters: {
      fileName: t,
      ...r.parameters
    }
  };
}
s($e, "normalizeComponentAnnotations");

// src/preview-api/modules/store/csf/processCSFFile.ts
var Ss = /* @__PURE__ */ s((r) => {
  let { globals: e, globalTypes: t } = r;
  (e || t) && s$2.error(
    "Global args/argTypes can only be set globally",
    JSON.stringify({
      globals: e,
      globalTypes: t
    })
  );
}, "checkGlobals"), Ts = /* @__PURE__ */ s((r) => {
  let { options: e } = r;
  e?.storySort && s$2.error("The storySort option parameter can only be set globally");
}, "checkStorySort"), to = /* @__PURE__ */ s((r) => {
  r && (Ss(r), Ts(r));
}, "checkDisallowedParameters");
function no(r, e, t) {
  let { default: o, __namedExportsOrder: n, ...i } = r, a = $e(
    o,
    t,
    e
  );
  to(a.parameters);
  let l = { meta: a, stories: {}, moduleExports: r };
  return Object.keys(i).forEach((c) => {
    if (M(c, a)) {
      let d = Pe(c, i[c], a);
      to(d.parameters), l.stories[d.id] = d;
    }
  }), l;
}
s(no, "processCSFFile");

// src/preview-api/modules/preview-web/render/mount-utils.ts
function io(r) {
  return r != null && xs(r).includes("mount");
}
s(io, "mountDestructured");
function xs(r) {
  let e = r.toString().match(/[^(]*\(([^)]*)/);
  if (!e)
    return [];
  let t = so(e[1]);
  if (!t.length)
    return [];
  let o = t[0];
  return o.startsWith("{") && o.endsWith("}") ? so(o.slice(1, -1).replace(/\s/g, "")).map((i) => i.replace(/:.*|=.*/g, "")) : [];
}
s(xs, "getUsedProps");
function so(r) {
  let e = [], t = [], o = 0;
  for (let i = 0; i < r.length; i++)
    if (r[i] === "{" || r[i] === "[")
      t.push(r[i] === "{" ? "}" : "]");
    else if (r[i] === t[t.length - 1])
      t.pop();
    else if (!t.length && r[i] === ",") {
      let a = r.substring(o, i).trim();
      a && e.push(a), o = i + 1;
    }
  let n = r.substring(o).trim();
  return n && e.push(n), e;
}
s(so, "splitByComma");

// src/preview-api/modules/store/decorators.ts
function ao(r, e, t) {
  let o = t(r);
  return (n) => e(o, n);
}
s(ao, "decorateStory");
function lo({
  componentId: r,
  title: e,
  kind: t,
  id: o,
  name: n,
  story: i,
  parameters: a,
  initialArgs: l,
  argTypes: c,
  ...d
} = {}) {
  return d;
}
s(lo, "sanitizeStoryContextUpdate");
function Nr(r, e) {
  let t = {}, o = /* @__PURE__ */ s((i) => (a) => {
    if (!t.value)
      throw new Error("Decorated function called without init");
    return t.value = {
      ...t.value,
      ...lo(a)
    }, i(t.value);
  }, "bindWithContext"), n = e.reduce(
    (i, a) => ao(i, a, o),
    r
  );
  return (i) => (t.value = i, n(i));
}
s(Nr, "defaultDecorateStory");

// src/preview-api/modules/store/parameters.ts
var _ = /* @__PURE__ */ s((...r) => {
  let e = {}, t = r.filter(Boolean), o = t.reduce((n, i) => (Object.entries(i).forEach(([a, l]) => {
    let c = n[a];
    Array.isArray(l) || typeof c > "u" ? n[a] = l : j(l) && j(c) ? e[a] = !0 : typeof l < "u" && (n[a] = l);
  }), n), {});
  return Object.keys(e).forEach((n) => {
    let i = t.filter(Boolean).map((a) => a[n]).filter((a) => typeof a < "u");
    i.every((a) => j(a)) ? o[n] = _(...i) : o[n] = i[i.length - 1];
  }), o;
}, "combineParameters");

// src/preview-api/modules/store/csf/prepareStory.ts
function Fe(r, e, t) {
  let { moduleExport: o, id: n, name: i } = r || {}, a = co(
    r,
    e,
    t
  ), l = /* @__PURE__ */ s(async (w) => {
    let A = {};
    for (let I of [
      ..."__STORYBOOK_TEST_LOADERS__" in P && Array.isArray(P.__STORYBOOK_TEST_LOADERS__) ? [P.__STORYBOOK_TEST_LOADERS__] : [],
      C(t.loaders),
      C(e.loaders),
      C(r.loaders)
    ]) {
      if (w.abortSignal.aborted)
        return A;
      let M = await Promise.all(I.map((N) => N(w)));
      Object.assign(A, ...M);
    }
    return A;
  }, "applyLoaders"), c = /* @__PURE__ */ s(async (w) => {
    let A = new Array();
    for (let I of [
      ...C(t.beforeEach),
      ...C(e.beforeEach),
      ...C(r.beforeEach)
    ]) {
      if (w.abortSignal.aborted)
        return A;
      let M = await I(w);
      M && A.push(M);
    }
    return A;
  }, "applyBeforeEach"), d = /* @__PURE__ */ s(async (w) => {
    let A = [
      ...C(t.experimental_afterEach),
      ...C(e.experimental_afterEach),
      ...C(r.experimental_afterEach)
    ].reverse();
    for (let I of A) {
      if (w.abortSignal.aborted)
        return;
      await I(w);
    }
  }, "applyAfterEach"), p = /* @__PURE__ */ s((w) => w.originalStoryFn(w.args, w), "undecoratedStoryFn"), { applyDecorators: u = Nr, runStep: m } = t,
  b = [
    ...C(r?.decorators),
    ...C(e?.decorators),
    ...C(t?.decorators)
  ], h = r?.userStoryFn || r?.render || e.render || t.render, g = Sr(u)(p, b), y = /* @__PURE__ */ s((w) => g(w), "unboundStoryFn"), T = r?.
  play ?? e?.play, x = io(T);
  if (!h && !x)
    throw new q$1({ id: n });
  let f = /* @__PURE__ */ s((w) => async () => (await w.renderToCanvas(), w.canvas), "defaultMount"), S = r.mount ?? e.mount ?? t.mount ?? f,
  R = t.testingLibraryRender;
  return {
    storyGlobals: {},
    ...a,
    moduleExport: o,
    id: n,
    name: i,
    story: i,
    originalStoryFn: h,
    undecoratedStoryFn: p,
    unboundStoryFn: y,
    applyLoaders: l,
    applyBeforeEach: c,
    applyAfterEach: d,
    playFunction: T,
    runStep: m,
    mount: S,
    testingLibraryRender: R,
    renderToCanvas: t.renderToCanvas,
    usesMount: x
  };
}
s(Fe, "prepareStory");
function qr(r, e, t) {
  return {
    ...co(void 0, r, e),
    moduleExport: t
  };
}
s(qr, "prepareMeta");
function co(r, e, t) {
  let o = ["dev", "test"], n = P.DOCS_OPTIONS?.autodocs === !0 ? ["autodocs"] : [], i = z$1(
    ...o,
    ...n,
    ...t.tags ?? [],
    ...e.tags ?? [],
    ...r?.tags ?? []
  ), a = _(
    t.parameters,
    e.parameters,
    r?.parameters
  ), { argTypesEnhancers: l = [], argsEnhancers: c = [] } = t, d = _(
    t.argTypes,
    e.argTypes,
    r?.argTypes
  );
  if (r) {
    let T = r?.userStoryFn || r?.render || e.render || t.render;
    a.__isArgsStory = T && T.length > 0;
  }
  let p = {
    ...t.args,
    ...e.args,
    ...r?.args
  }, u = {
    ...e.globals,
    ...r?.globals
  }, m = {
    componentId: e.id,
    title: e.title,
    kind: e.title,
    // Back compat
    id: r?.id || e.id,
    // if there's no story name, we create a fake one since enhancers expect a name
    name: r?.name || "__meta",
    story: r?.name || "__meta",
    // Back compat
    component: e.component,
    subcomponents: e.subcomponents,
    tags: i,
    parameters: a,
    initialArgs: p,
    argTypes: d,
    storyGlobals: u
  };
  m.argTypes = l.reduce(
    (T, x) => x({ ...m, argTypes: T }),
    m.argTypes
  );
  let b = { ...p };
  m.initialArgs = c.reduce(
    (T, x) => ({
      ...T,
      ...x({
        ...m,
        initialArgs: T
      })
    }),
    b
  );
  let { name: h, story: g, ...y } = m;
  return y;
}
s(co, "preparePartialAnnotations");
function Ye(r) {
  let { args: e } = r, t = {
    ...r,
    allArgs: void 0,
    argsByTarget: void 0
  };
  if (P.FEATURES?.argTypeTargetsV7) {
    let i = eo(r);
    t = {
      ...r,
      allArgs: r.args,
      argsByTarget: i,
      args: i[jr] || {}
    };
  }
  let o = Object.entries(t.args).reduce((i, [a, l]) => {
    if (!t.argTypes[a]?.mapping)
      return i[a] = l, i;
    let c = /* @__PURE__ */ s((d) => {
      let p = t.argTypes[a].mapping;
      return p && d in p ? p[d] : d;
    }, "mappingFn");
    return i[a] = Array.isArray(l) ? l.map(c) : c(l), i;
  }, {}), n = Object.entries(o).reduce((i, [a, l]) => {
    let c = t.argTypes[a] || {};
    return P$1(c, o, t.globals) && (i[a] = l), i;
  }, {});
  return { ...t, unmappedArgs: e, args: n };
}
s(Ye, "prepareContext");
var Br = /* @__PURE__ */ s((r, e, t) => {
  let o = typeof r;
  switch (o) {
    case "boolean":
    case "string":
    case "number":
    case "function":
    case "symbol":
      return { name: o };
    default:
      break;
  }
  return r ? t.has(r) ? (s$2.warn(F`
        We've detected a cycle in arg '${e}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/essentials/controls#fully-custom-args
      `), { name: "other", value: "cyclic object" }) : (t.add(r), Array.isArray(r) ? { name: "array", value: r.length > 0 ? Br(r[0], e, new Set(
  t)) : { name: "other", value: "unknown" } } : { name: "object", value: q(r, (i) => Br(i, e, new Set(t))) }) : { name: "object", value: {} };
}, "inferType"), Gr = /* @__PURE__ */ s((r) => {
  let { id: e, argTypes: t = {}, initialArgs: o = {} } = r, n = q(o, (a, l) => ({
    name: l,
    type: Br(a, `${e}.${l}`, /* @__PURE__ */ new Set())
  })), i = q(t, (a, l) => ({
    name: l
  }));
  return _(n, i, t);
}, "inferArgTypes");
Gr.secondPass = !0;

// src/preview-api/modules/store/filterArgTypes.ts
var po = /* @__PURE__ */ s((r, e) => Array.isArray(e) ? e.includes(r) : r.match(e), "matches"), Ke = /* @__PURE__ */ s((r, e, t) => !e && !t ?
r : r && Ar(r, (o, n) => {
  let i = o.name || n.toString();
  return !!(!e || po(i, e)) && (!t || !po(i, t));
}), "filterArgTypes");

// src/preview-api/modules/store/inferControls.ts
var Cs = /* @__PURE__ */ s((r, e, t) => {
  let { type: o, options: n } = r;
  if (o) {
    if (t.color && t.color.test(e)) {
      let i = o.name;
      if (i === "string")
        return { control: { type: "color" } };
      i !== "enum" && s$2.warn(
        `Addon controls: Control of type color only supports string, received "${i}" instead`
      );
    }
    if (t.date && t.date.test(e))
      return { control: { type: "date" } };
    switch (o.name) {
      case "array":
        return { control: { type: "object" } };
      case "boolean":
        return { control: { type: "boolean" } };
      case "string":
        return { control: { type: "text" } };
      case "number":
        return { control: { type: "number" } };
      case "enum": {
        let { value: i } = o;
        return { control: { type: i?.length <= 5 ? "radio" : "select" }, options: i };
      }
      case "function":
      case "symbol":
        return null;
      default:
        return { control: { type: n ? "select" : "object" } };
    }
  }
}, "inferControl"), Ie = /* @__PURE__ */ s((r) => {
  let {
    argTypes: e,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    parameters: { __isArgsStory: t, controls: { include: o = null, exclude: n = null, matchers: i = {} } = {} }
  } = r;
  if (!t)
    return e;
  let a = Ke(e, o, n), l = q(a, (c, d) => c?.type && Cs(c, d.toString(), i));
  return _(l, a);
}, "inferControls");
Ie.secondPass = !0;

// src/preview-api/modules/store/csf/normalizeProjectAnnotations.ts
function Oe({
  argTypes: r,
  globalTypes: e,
  argTypesEnhancers: t,
  decorators: o,
  loaders: n,
  beforeEach: i,
  experimental_afterEach: a,
  globals: l,
  initialGlobals: c,
  ...d
}) {
  return l && Object.keys(l).length > 0 && m$3(F`
      The preview.js 'globals' field is deprecated and will be removed in Storybook 9.0.
      Please use 'initialGlobals' instead. Learn more:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewjs-globals-renamed-to-initialglobals
    `), {
    ...r && { argTypes: ne(r) },
    ...e && { globalTypes: ne(e) },
    decorators: C(o),
    loaders: C(n),
    beforeEach: C(i),
    experimental_afterEach: C(a),
    argTypesEnhancers: [
      ...t || [],
      Gr,
      // inferControls technically should only run if the user is using the controls addon,
      // and so should be added by a preset there. However, as it seems some code relies on controls
      // annotations (in particular the angular implementation's `cleanArgsDecorator`), for backwards
      // compatibility reasons, we will leave this in the store until 7.0
      Ie
    ],
    initialGlobals: _(c, l),
    ...d
  };
}
s(Oe, "normalizeProjectAnnotations");

// src/preview-api/modules/store/csf/beforeAll.ts
var uo = /* @__PURE__ */ s((r) => async () => {
  let e = [];
  for (let t of r) {
    let o = await t();
    o && e.unshift(o);
  }
  return async () => {
    for (let t of e)
      await t();
  };
}, "composeBeforeAllHooks");

// src/preview-api/modules/store/csf/stepRunners.ts
function zr(r) {
  return async (e, t, o) => {
    await r.reduceRight(
      (i, a) => async () => a(e, i, o),
      async () => t(o)
    )();
  };
}
s(zr, "composeStepRunners");

// src/preview-api/modules/store/csf/composeConfigs.ts
function ke(r, e) {
  return r.map((t) => t.default?.[e] ?? t[e]).filter(Boolean);
}
s(ke, "getField");
function K(r, e, t = {}) {
  return ke(r, e).reduce((o, n) => {
    let i = C(n);
    return t.reverseFileOrder ? [...i, ...o] : [...o, ...i];
  }, []);
}
s(K, "getArrayField");
function De(r, e) {
  return Object.assign({}, ...ke(r, e));
}
s(De, "getObjectField");
function me(r, e) {
  return ke(r, e).pop();
}
s(me, "getSingletonField");
function he(r) {
  let e = K(r, "argTypesEnhancers"), t = ke(r, "runStep"), o = K(r, "beforeAll");
  return {
    parameters: _(...ke(r, "parameters")),
    decorators: K(r, "decorators", {
      reverseFileOrder: !(P.FEATURES?.legacyDecoratorFileOrder ?? !1)
    }),
    args: De(r, "args"),
    argsEnhancers: K(r, "argsEnhancers"),
    argTypes: De(r, "argTypes"),
    argTypesEnhancers: [
      ...e.filter((n) => !n.secondPass),
      ...e.filter((n) => n.secondPass)
    ],
    globals: De(r, "globals"),
    initialGlobals: De(r, "initialGlobals"),
    globalTypes: De(r, "globalTypes"),
    loaders: K(r, "loaders"),
    beforeAll: uo(o),
    beforeEach: K(r, "beforeEach"),
    experimental_afterEach: K(r, "experimental_afterEach"),
    render: me(r, "render"),
    renderToCanvas: me(r, "renderToCanvas"),
    renderToDOM: me(r, "renderToDOM"),
    // deprecated
    applyDecorators: me(r, "applyDecorators"),
    runStep: zr(t),
    tags: K(r, "tags"),
    mount: me(r, "mount"),
    testingLibraryRender: me(r, "testingLibraryRender")
  };
}
s(he, "composeConfigs");

// src/preview-api/modules/store/reporter-api.ts
var Vr = class Vr {
  constructor() {
    this.reports = [];
  }
  async addReport(e) {
    this.reports.push(e);
  }
};
s(Vr, "ReporterAPI");
var se = Vr;

// src/preview-api/modules/store/csf/portable-stories.ts
function Os(r) {
  globalThis.defaultProjectAnnotations = r;
}
s(Os, "setDefaultProjectAnnotations");
var Ds = "ComposedStory", ks = "Unnamed Story";
function js(r) {
  return r ? he([r]) : {};
}
s(js, "extractAnnotation");
function Ms(r) {
  let e = Array.isArray(r) ? r : [r];
  return globalThis.globalProjectAnnotations = he(e.map(js)), he([
    globalThis.defaultProjectAnnotations ?? {},
    globalThis.globalProjectAnnotations ?? {}
  ]);
}
s(Ms, "setProjectAnnotations");
var X = [];
function fo(r, e, t, o, n) {
  if (r === void 0)
    throw new Error("Expected a story but received undefined.");
  e.title = e.title ?? Ds;
  let i = $e(e), a = n || r.storyName || r.story?.name || r.name || ks, l = Pe(
    a,
    r,
    i
  ), c = Oe(
    he([
      o && Object.keys(o).length > 0 ? o : globalThis.defaultProjectAnnotations ?? {},
      globalThis.globalProjectAnnotations ?? {},
      t ?? {}
    ])
  ), d = Fe(
    l,
    i,
    c
  ), u = {
    // TODO: remove loading from globalTypes in 9.0
    ...Ue(c.globalTypes),
    ...c.initialGlobals,
    ...d.storyGlobals
  }, m = new se(), b = /* @__PURE__ */ s(() => {
    let f = Ye({
      hooks: new te(),
      globals: u,
      args: { ...d.initialArgs },
      viewMode: "story",
      reporting: m,
      loaded: {},
      abortSignal: new AbortController().signal,
      step: /* @__PURE__ */ s((S, R) => d.runStep(S, R, f), "step"),
      canvasElement: null,
      canvas: {},
      globalTypes: c.globalTypes,
      ...d,
      context: null,
      mount: null
    });
    return f.context = f, d.renderToCanvas && (f.renderToCanvas = async () => {
      let S = await d.renderToCanvas?.(
        {
          componentId: d.componentId,
          title: d.title,
          id: d.id,
          name: d.name,
          tags: d.tags,
          showMain: /* @__PURE__ */ s(() => {
          }, "showMain"),
          showError: /* @__PURE__ */ s((R) => {
            throw new Error(`${R.title}
${R.description}`);
          }, "showError"),
          showException: /* @__PURE__ */ s((R) => {
            throw R;
          }, "showException"),
          forceRemount: !0,
          storyContext: f,
          storyFn: /* @__PURE__ */ s(() => d.unboundStoryFn(f), "storyFn"),
          unboundStoryFn: d.unboundStoryFn
        },
        f.canvasElement
      );
      S && X.push(S);
    }), f.mount = d.mount(f), f;
  }, "initializeContext"), h, g = /* @__PURE__ */ s(async (f) => {
    let S = b();
    return S.canvasElement ??= globalThis?.document?.body, h && (S.loaded = h.loaded), Object.assign(S, f), d.playFunction(S);
  }, "play"), y = /* @__PURE__ */ s((f) => {
    let S = b();
    return Object.assign(S, f), qs(d, S);
  }, "run"), T = d.playFunction ? g : void 0;
  return Object.assign(
    /* @__PURE__ */ s(function(S) {
      let R = b();
      return h && (R.loaded = h.loaded), R.args = {
        ...R.initialArgs,
        ...S
      }, d.unboundStoryFn(R);
    }, "storyFn"),
    {
      id: d.id,
      storyName: a,
      load: /* @__PURE__ */ s(async () => {
        for (let S of [...X].reverse())
          await S();
        X.length = 0;
        let f = b();
        f.loaded = await d.applyLoaders(f), X.push(...(await d.applyBeforeEach(f)).filter(Boolean)), h = f;
      }, "load"),
      globals: u,
      args: d.initialArgs,
      parameters: d.parameters,
      argTypes: d.argTypes,
      play: T,
      run: y,
      reporting: m,
      tags: d.tags
    }
  );
}
s(fo, "composeStory");
var _s = /* @__PURE__ */ s((r, e, t, o) => fo(r, e, t, {}, o), "defaultComposeStory");
function Ls(r, e, t = _s) {
  let { default: o, __esModule: n, __namedExportsOrder: i, ...a } = r;
  return Object.entries(a).reduce((c, [d, p]) => M(d, o) ? Object.assign(c, {
    [d]: t(
      p,
      o,
      e,
      d
    )
  }) : c, {});
}
s(Ls, "composeStories");
function Ns(r) {
  return r.extend({
    mount: /* @__PURE__ */ s(async ({ mount: e, page: t }, o) => {
      await o(async (n, ...i) => {
        if (!("__pw_type" in n) || "__pw_type" in n && n.__pw_type !== "jsx")
          throw new Error(F`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `);
        await t.evaluate(async (l) => {
          let c = await globalThis.__pwUnwrapObject?.(l);
          return ("__pw_type" in c ? c.type : c)?.load?.();
        }, n);
        let a = await e(n, ...i);
        return await t.evaluate(async (l) => {
          let c = await globalThis.__pwUnwrapObject?.(l), d = "__pw_type" in c ? c.type : c, p = document.querySelector("#root");
          return d?.play?.({ canvasElement: p });
        }, n), a;
      });
    }, "mount")
  });
}
s(Ns, "createPlaywrightTest");
async function qs(r, e) {
  for (let n of [...X].reverse())
    await n();
  if (X.length = 0, !e.canvasElement) {
    let n = document.createElement("div");
    globalThis?.document?.body?.appendChild(n), e.canvasElement = n, X.push(() => {
      globalThis?.document?.body?.contains(n) && globalThis?.document?.body?.removeChild(n);
    });
  }
  if (e.loaded = await r.applyLoaders(e), e.abortSignal.aborted)
    return;
  X.push(...(await r.applyBeforeEach(e)).filter(Boolean));
  let t = r.playFunction, o = r.usesMount;
  o || await e.mount(), !e.abortSignal.aborted && (t && (o || (e.mount = async () => {
    throw new J$1({ playFunction: t.toString() });
  }), await t(e)), await r.applyAfterEach(e));
}
s(qs, "runStory");

// src/preview-api/modules/store/StoryStore.ts
function mo(r, e) {
  return wr(Er(r, e), (t) => t === void 0);
}
s(mo, "picky");
var ho = 1e3, zs = 1e4, Ur = class Ur {
  constructor(e, t, o) {
    this.importFn = t;
    // TODO: Remove in 9.0
    // NOTE: this is legacy `stories.json` data for the `extract` script.
    // It is used to allow v7 Storybooks to be composed in v6 Storybooks, which expect a
    // `stories.json` file with legacy fields (`kind` etc).
    this.getStoriesJsonData = /* @__PURE__ */ s(() => {
      let e = this.getSetStoriesPayload(), t = ["fileName", "docsOnly", "framework", "__id", "__isArgsStory"];
      return {
        v: 3,
        stories: q(e.stories, (n) => {
          let { importPath: i } = this.storyIndex.entries[n.id];
          return {
            ...mo(n, ["id", "name", "title"]),
            importPath: i,
            // These 3 fields were going to be dropped in v7, but instead we will keep them for the
            // 7.x cycle so that v7 Storybooks can be composed successfully in v6 Storybook.
            // In v8 we will (likely) completely drop support for `extract` and `getStoriesJsonData`
            kind: n.title,
            story: n.name,
            parameters: {
              ...mo(n.parameters, t),
              fileName: i
            }
          };
        })
      };
    }, "getStoriesJsonData");
    this.storyIndex = new We(e), this.projectAnnotations = Oe(o);
    let { initialGlobals: n, globalTypes: i } = this.projectAnnotations;
    this.args = new Ve(), this.userGlobals = new He({ globals: n, globalTypes: i }), this.hooks = {}, this.cleanupCallbacks = {}, this.processCSFFileWithCache =
    (0, Xe.default)(ho)(no), this.prepareMetaWithCache = (0, Xe.default)(ho)(qr), this.prepareStoryWithCache = (0, Xe.default)(zs)(Fe);
  }
  setProjectAnnotations(e) {
    this.projectAnnotations = Oe(e);
    let { initialGlobals: t, globalTypes: o } = e;
    this.userGlobals.set({ globals: t, globalTypes: o });
  }
  // This means that one of the CSF files has changed.
  // If the `importFn` has changed, we will invalidate both caches.
  // If the `storyIndex` data has changed, we may or may not invalidate the caches, depending
  // on whether we've loaded the relevant files yet.
  async onStoriesChanged({
    importFn: e,
    storyIndex: t
  }) {
    e && (this.importFn = e), t && (this.storyIndex.entries = t.entries), this.cachedCSFFiles && await this.cacheAllCSFFiles();
  }
  // Get an entry from the index, waiting on initialization if necessary
  async storyIdToEntry(e) {
    return this.storyIndex.storyIdToEntry(e);
  }
  // To load a single CSF file to service a story we need to look up the importPath in the index
  async loadCSFFileByStoryId(e) {
    let { importPath: t, title: o } = this.storyIndex.storyIdToEntry(e), n = await this.importFn(t);
    return this.processCSFFileWithCache(n, t, o);
  }
  async loadAllCSFFiles() {
    let e = {};
    return Object.entries(this.storyIndex.entries).forEach(([o, { importPath: n }]) => {
      e[n] = o;
    }), (await Promise.all(
      Object.entries(e).map(async ([o, n]) => ({
        importPath: o,
        csfFile: await this.loadCSFFileByStoryId(n)
      }))
    )).reduce(
      (o, { importPath: n, csfFile: i }) => (o[n] = i, o),
      {}
    );
  }
  async cacheAllCSFFiles() {
    this.cachedCSFFiles = await this.loadAllCSFFiles();
  }
  preparedMetaFromCSFFile({ csfFile: e }) {
    let t = e.meta;
    return this.prepareMetaWithCache(
      t,
      this.projectAnnotations,
      e.moduleExports.default
    );
  }
  // Load the CSF file for a story and prepare the story from it and the project annotations.
  async loadStory({ storyId: e }) {
    let t = await this.loadCSFFileByStoryId(e);
    return this.storyFromCSFFile({ storyId: e, csfFile: t });
  }
  // This function is synchronous for convenience -- often times if you have a CSF file already
  // it is easier not to have to await `loadStory`.
  storyFromCSFFile({
    storyId: e,
    csfFile: t
  }) {
    let o = t.stories[e];
    if (!o)
      throw new X$1({ storyId: e });
    let n = t.meta, i = this.prepareStoryWithCache(
      o,
      n,
      this.projectAnnotations
    );
    return this.args.setInitial(i), this.hooks[i.id] = this.hooks[i.id] || new te(), i;
  }
  // If we have a CSF file we can get all the stories from it synchronously
  componentStoriesFromCSFFile({
    csfFile: e
  }) {
    return Object.keys(this.storyIndex.entries).filter((t) => !!e.stories[t]).map((t) => this.storyFromCSFFile({ storyId: t, csfFile: e }));
  }
  async loadEntry(e) {
    let t = await this.storyIdToEntry(e), o = t.type === "docs" ? t.storiesImports : [], [n, ...i] = await Promise.all([
      this.importFn(t.importPath),
      ...o.map((a) => {
        let l = this.storyIndex.importPathToEntry(a);
        return this.loadCSFFileByStoryId(l.id);
      })
    ]);
    return { entryExports: n, csfFiles: i };
  }
  // A prepared story does not include args, globals or hooks. These are stored in the story store
  // and updated separtely to the (immutable) story.
  getStoryContext(e, { forceInitialArgs: t = !1 } = {}) {
    let o = this.userGlobals.get(), { initialGlobals: n } = this.userGlobals, i = new se();
    return Ye({
      ...e,
      args: t ? e.initialArgs : this.args.get(e.id),
      initialGlobals: n,
      globalTypes: this.projectAnnotations.globalTypes,
      userGlobals: o,
      reporting: i,
      globals: {
        ...o,
        ...e.storyGlobals
      },
      hooks: this.hooks[e.id]
    });
  }
  addCleanupCallbacks(e, t) {
    this.cleanupCallbacks[e.id] = t;
  }
  async cleanupStory(e) {
    this.hooks[e.id].clean();
    let t = this.cleanupCallbacks[e.id];
    if (t)
      for (let o of [...t].reverse())
        await o();
    delete this.cleanupCallbacks[e.id];
  }
  extract(e = { includeDocsOnly: !1 }) {
    let { cachedCSFFiles: t } = this;
    if (!t)
      throw new L();
    return Object.entries(this.storyIndex.entries).reduce(
      (o, [n, { type: i, importPath: a }]) => {
        if (i === "docs")
          return o;
        let l = t[a], c = this.storyFromCSFFile({ storyId: n, csfFile: l });
        return !e.includeDocsOnly && c.parameters.docsOnly || (o[n] = Object.entries(c).reduce(
          (d, [p, u]) => p === "moduleExport" || typeof u == "function" ? d : Array.isArray(u) ? Object.assign(d, { [p]: u.slice().sort() }) :
          Object.assign(d, { [p]: u }),
          {
            //
            args: c.initialArgs,
            globals: {
              ...this.userGlobals.initialGlobals,
              ...this.userGlobals.globals,
              ...c.storyGlobals
            }
          }
        )), o;
      },
      {}
    );
  }
  // TODO: Remove in 9.0
  getSetStoriesPayload() {
    let e = this.extract({ includeDocsOnly: !0 }), t = Object.values(e).reduce(
      (o, { title: n }) => (o[n] = {}, o),
      {}
    );
    return {
      v: 2,
      globals: this.userGlobals.get(),
      globalParameters: {},
      kindParameters: t,
      stories: e
    };
  }
  raw() {
    return m$3(
      "StoryStore.raw() is deprecated and will be removed in 9.0, please use extract() instead"
    ), Object.values(this.extract()).map(({ id: e }) => this.fromId(e)).filter(Boolean);
  }
  fromId(e) {
    if (m$3(
      "StoryStore.fromId() is deprecated and will be removed in 9.0, please use loadStory() instead"
    ), !this.cachedCSFFiles)
      throw new Error("Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.");
    let t;
    try {
      ({ importPath: t } = this.storyIndex.storyIdToEntry(e));
    } catch {
      return null;
    }
    let o = this.cachedCSFFiles[t], n = this.storyFromCSFFile({ storyId: e, csfFile: o });
    return {
      ...n,
      storyFn: /* @__PURE__ */ s((i) => {
        let a = {
          ...this.getStoryContext(n),
          abortSignal: new AbortController().signal,
          canvasElement: null,
          loaded: {},
          step: /* @__PURE__ */ s((l, c) => n.runStep(l, c, a), "step"),
          context: null,
          mount: null,
          canvas: {},
          viewMode: "story"
        };
        return n.unboundStoryFn({ ...a, ...i });
      }, "storyFn")
    };
  }
};
s(Ur, "StoryStore");
var ge = Ur;

// ../node_modules/slash/index.js
function Hr(r) {
  return r.startsWith("\\\\?\\") ? r : r.replace(/\\/g, "/");
}
s(Hr, "slash");

// src/preview-api/modules/store/autoTitle.ts
var Us = /* @__PURE__ */ s((r) => {
  if (r.length === 0)
    return r;
  let e = r[r.length - 1], t = e?.replace(/(?:[.](?:story|stories))?([.][^.]+)$/i, "");
  if (r.length === 1)
    return [t];
  let o = r[r.length - 2];
  return t && o && t.toLowerCase() === o.toLowerCase() ? [...r.slice(0, -2), t] : t && (/^(story|stories)([.][^.]+)$/i.test(e) || /^index$/i.
  test(t)) ? r.slice(0, -1) : [...r.slice(0, -1), t];
}, "sanitize");
function go(r) {
  return r.flatMap((e) => e.split("/")).filter(Boolean).join("/");
}
s(go, "pathJoin");
var bo = /* @__PURE__ */ s((r, e, t) => {
  let { directory: o, importPathMatcher: n, titlePrefix: i = "" } = e || {};
  typeof r == "number" && n$1.warn(F`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `);
  let a = Hr(String(r));
  if (n.exec(a)) {
    if (!t) {
      let l = a.replace(o, ""), c = go([i, l]).split("/");
      return c = Us(c), c.join("/");
    }
    return i ? go([i, t]) : t;
  }
}, "userOrAutoTitleFromSpecifier"), Hs = /* @__PURE__ */ s((r, e, t) => {
  for (let o = 0; o < e.length; o += 1) {
    let n = bo(r, e[o], t);
    if (n)
      return n;
  }
  return t || void 0;
}, "userOrAutoTitle");

// src/preview-api/modules/store/storySort.ts
var So = /\s*\/\s*/, To = /* @__PURE__ */ s((r = {}) => (e, t) => {
  if (e.title === t.title && !r.includeNames)
    return 0;
  let o = r.method || "configure", n = r.order || [], i = e.title.trim().split(So), a = t.title.trim().split(So);
  r.includeNames && (i.push(e.name), a.push(t.name));
  let l = 0;
  for (; i[l] || a[l]; ) {
    if (!i[l])
      return -1;
    if (!a[l])
      return 1;
    let c = i[l], d = a[l];
    if (c !== d) {
      let u = n.indexOf(c), m = n.indexOf(d), b = n.indexOf("*");
      return u !== -1 || m !== -1 ? (u === -1 && (b !== -1 ? u = b : u = n.length), m === -1 && (b !== -1 ? m = b : m = n.length), u - m) : o ===
      "configure" ? 0 : c.localeCompare(d, r.locales ? r.locales : void 0, {
        numeric: !0,
        sensitivity: "accent"
      });
    }
    let p = n.indexOf(c);
    p === -1 && (p = n.indexOf("*")), n = p !== -1 && Array.isArray(n[p + 1]) ? n[p + 1] : [], l += 1;
  }
  return 0;
}, "storySort");

// src/preview-api/modules/store/sortStories.ts
var Ws = /* @__PURE__ */ s((r, e, t) => {
  if (e) {
    let o;
    typeof e == "function" ? o = e : o = To(e), r.sort(o);
  } else
    r.sort(
      (o, n) => t.indexOf(o.importPath) - t.indexOf(n.importPath)
    );
  return r;
}, "sortStoriesCommon"), $s = /* @__PURE__ */ s((r, e, t) => {
  try {
    return Ws(r, e, t);
  } catch (o) {
    throw new Error(F`
    Error sorting stories with sort parameter ${e}:

    > ${o.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `);
  }
}, "sortStoriesV7");

// src/preview-api/modules/preview-web/render/Render.ts
var J = new Error("prepareAborted");

// src/preview-api/modules/preview-web/render/StoryRender.ts
var { AbortController: wo } = globalThis;
function Eo(r) {
  try {
    let { name: e = "Error", message: t = String(r), stack: o } = r;
    return { name: e, message: t, stack: o };
  } catch {
    return { name: "Error", message: String(r) };
  }
}
s(Eo, "serializeError");
var Wr = class Wr {
  constructor(e, t, o, n, i, a, l = { autoplay: !0, forceInitialArgs: !1 }, c) {
    this.channel = e;
    this.store = t;
    this.renderToScreen = o;
    this.callbacks = n;
    this.id = i;
    this.viewMode = a;
    this.renderOptions = l;
    this.type = "story";
    this.notYetRendered = !0;
    this.rerenderEnqueued = !1;
    this.disableKeyListeners = !1;
    this.teardownRender = /* @__PURE__ */ s(() => {
    }, "teardownRender");
    this.torndown = !1;
    this.abortController = new wo(), c && (this.story = c, this.phase = "preparing");
  }
  async runPhase(e, t, o) {
    this.phase = t, this.channel.emit(B$3, { newPhase: this.phase, storyId: this.id }), o && (await o(), this.checkIfAborted(e));
  }
  checkIfAborted(e) {
    return e.aborted ? (this.phase = "aborted", this.channel.emit(B$3, { newPhase: this.phase, storyId: this.id }), !0) : !1;
  }
  async prepare() {
    if (await this.runPhase(this.abortController.signal, "preparing", async () => {
      this.story = await this.store.loadStory({ storyId: this.id });
    }), this.abortController.signal.aborted)
      throw await this.store.cleanupStory(this.story), J;
  }
  // The two story "renders" are equal and have both loaded the same story
  isEqual(e) {
    return !!(this.id === e.id && this.story && this.story === e.story);
  }
  isPreparing() {
    return ["preparing"].includes(this.phase);
  }
  isPending() {
    return ["loading", "beforeEach", "rendering", "playing", "afterEach"].includes(
      this.phase
    );
  }
  async renderToElement(e) {
    return this.canvasElement = e, this.render({ initial: !0, forceRemount: !0 });
  }
  storyContext() {
    if (!this.story)
      throw new Error("Cannot call storyContext before preparing");
    let { forceInitialArgs: e } = this.renderOptions;
    return this.store.getStoryContext(this.story, { forceInitialArgs: e });
  }
  async render({
    initial: e = !1,
    forceRemount: t = !1
  } = {}) {
    let { canvasElement: o } = this;
    if (!this.story)
      throw new Error("cannot render when not prepared");
    let n = this.story;
    if (!o)
      throw new Error("cannot render when canvasElement is unset");
    let {
      id: i,
      componentId: a$1,
      title: l,
      name: c,
      tags: d,
      applyLoaders: p,
      applyBeforeEach: u,
      applyAfterEach: m,
      unboundStoryFn: b,
      playFunction: h,
      runStep: g
    } = n;
    t && !e && (this.cancelRender(), this.abortController = new wo());
    let y = this.abortController.signal, T = !1, x = n.usesMount;
    try {
      let f = {
        ...this.storyContext(),
        viewMode: this.viewMode,
        abortSignal: y,
        canvasElement: o,
        loaded: {},
        step: /* @__PURE__ */ s((v, G) => g(v, G, f), "step"),
        context: null,
        canvas: {},
        renderToCanvas: /* @__PURE__ */ s(async () => {
          let v = await this.renderToScreen(S, o);
          this.teardownRender = v || (() => {
          }), T = !0;
        }, "renderToCanvas"),
        // The story provides (set in a renderer) a mount function that is a higher order function
        // (context) => (...args) => Canvas
        //
        // Before assigning it to the context, we resolve the context dependency,
        // so that a user can just call it as await mount(...args) in their play function.
        mount: /* @__PURE__ */ s(async (...v) => {
          this.callbacks.showStoryDuringRender?.();
          let G = null;
          return await this.runPhase(y, "rendering", async () => {
            G = await n.mount(f)(...v);
          }), x && await this.runPhase(y, "playing"), G;
        }, "mount")
      };
      f.context = f;
      let S = {
        componentId: a$1,
        title: l,
        kind: l,
        id: i,
        name: c,
        story: c,
        tags: d,
        ...this.callbacks,
        showError: /* @__PURE__ */ s((v) => (this.phase = "errored", this.callbacks.showError(v)), "showError"),
        showException: /* @__PURE__ */ s((v) => (this.phase = "errored", this.callbacks.showException(v)), "showException"),
        forceRemount: t || this.notYetRendered,
        storyContext: f,
        storyFn: /* @__PURE__ */ s(() => b(f), "storyFn"),
        unboundStoryFn: b
      };
      if (await this.runPhase(y, "loading", async () => {
        f.loaded = await p(f);
      }), y.aborted)
        return;
      let R = await u(f);
      if (this.store.addCleanupCallbacks(n, R), this.checkIfAborted(y) || (!T && !x && await f.mount(), this.notYetRendered = !1, y.aborted))
        return;
      let w = this.story.parameters?.test?.dangerouslyIgnoreUnhandledErrors === !0, A = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ s((v) => A.
      add("error" in v ? v.error : v.reason), "onError");
      if (this.renderOptions.autoplay && t && h && this.phase !== "errored") {
        window.addEventListener("error", I), window.addEventListener("unhandledrejection", I), this.disableKeyListeners = !0;
        try {
          if (x ? await h(f) : (f.mount = async () => {
            throw new J$1({ playFunction: h.toString() });
          }, await this.runPhase(y, "playing", async () => h(f))), !T)
            throw new z$2();
          this.checkIfAborted(y), !w && A.size > 0 ? await this.runPhase(y, "errored") : await this.runPhase(y, "played");
        } catch (v) {
          if (this.callbacks.showStoryDuringRender?.(), await this.runPhase(y, "errored", async () => {
            this.channel.emit(a, Eo(v));
          }), this.story.parameters.throwPlayFunctionExceptions !== !1)
            throw v;
          console.error(v);
        }
        if (!w && A.size > 0 && this.channel.emit(
          Y$1,
          Array.from(A).map(Eo)
        ), this.disableKeyListeners = !1, window.removeEventListener("unhandledrejection", I), window.removeEventListener("error", I), y.aborted)
          return;
      }
      await this.runPhase(
        y,
        "completed",
        async () => this.channel.emit(X$2, i)
      ), this.phase !== "errored" && await this.runPhase(y, "afterEach", async () => {
        await m(f);
      });
      let M = !w && A.size > 0, N = f.reporting.reports.some(
        (v) => v.status === "failed"
      ), pe = M || N;
      await this.runPhase(
        y,
        "finished",
        async () => this.channel.emit(q$3, {
          storyId: i,
          status: pe ? "error" : "success",
          reporters: f.reporting.reports
        })
      );
    } catch (f) {
      this.phase = "errored", this.callbacks.showException(f), await this.runPhase(
        y,
        "finished",
        async () => this.channel.emit(q$3, {
          storyId: i,
          status: "error",
          reporters: []
        })
      );
    }
    this.rerenderEnqueued && (this.rerenderEnqueued = !1, this.render());
  }
  /**
   * Rerender the story. If the story is currently pending (loading/rendering), the rerender will be
   * enqueued, and will be executed after the current render is completed. Rerendering while playing
   * will not be enqueued, and will be executed immediately, to support rendering args changes while
   * playing.
   */
  async rerender() {
    if (this.isPending() && this.phase !== "playing")
      this.rerenderEnqueued = !0;
    else
      return this.render();
  }
  async remount() {
    return await this.teardown(), this.render({ forceRemount: !0 });
  }
  // If the story is torn down (either a new story is rendered or the docs page removes it)
  // we need to consider the fact that the initial render may not be finished
  // (possibly the loaders or the play function are still running). We use the controller
  // as a method to abort them, ASAP, but this is not foolproof as we cannot control what
  // happens inside the user's code.
  cancelRender() {
    this.abortController?.abort();
  }
  async teardown() {
    this.torndown = !0, this.cancelRender(), this.story && await this.store.cleanupStory(this.story);
    for (let e = 0; e < 3; e += 1) {
      if (!this.isPending()) {
        await this.teardownRender();
        return;
      }
      await new Promise((t) => setTimeout(t, 0));
    }
    window.location.reload(), await new Promise(() => {
    });
  }
};
s(Wr, "StoryRender");
var ie = Wr;

// src/preview-api/modules/preview-web/Preview.tsx
var { fetch: fi } = P, yi = "./index.json", $r = class $r {
  constructor(e, t, o = z.getChannel(), n = !0) {
    this.importFn = e;
    this.getProjectAnnotations = t;
    this.channel = o;
    this.storyRenders = [];
    this.storeInitializationPromise = new Promise((i, a) => {
      this.resolveStoreInitializationPromise = i, this.rejectStoreInitializationPromise = a;
    }), n && this.initialize();
  }
  // Create a proxy object for `__STORYBOOK_STORY_STORE__` and `__STORYBOOK_PREVIEW__.storyStore`
  // That proxies through to the store once ready, and errors beforehand. This means we can set
  // `__STORYBOOK_STORY_STORE__ = __STORYBOOK_PREVIEW__.storyStore` without having to wait, and
  // similarly integrators can access the `storyStore` on the preview at any time, although
  // it is considered deprecated and we will no longer allow access in 9.0
  get storyStore() {
    return new Proxy(
      {},
      {
        get: /* @__PURE__ */ s((e, t) => {
          if (this.storyStoreValue)
            return m$3("Accessing the Story Store is deprecated and will be removed in 9.0"), this.storyStoreValue[t];
          throw new U();
        }, "get")
      }
    );
  }
  // INITIALIZATION
  async initialize() {
    this.setupListeners();
    try {
      let e = await this.getProjectAnnotationsOrRenderError();
      await this.runBeforeAllHook(e), await this.initializeWithProjectAnnotations(e);
    } catch (e) {
      this.rejectStoreInitializationPromise(e);
    }
  }
  ready() {
    return this.storeInitializationPromise;
  }
  setupListeners() {
    this.channel.on(m$2, this.onStoryIndexChanged.bind(this)), this.channel.on(j$2, this.onUpdateGlobals.bind(this)), this.channel.on(z$4, this.
    onUpdateArgs.bind(this)), this.channel.on(SE, this.onRequestArgTypesInfo.bind(this)), this.channel.on(W$3, this.onResetArgs.bind(this)), this.
    channel.on(L$2, this.onForceReRender.bind(this)), this.channel.on(U$2, this.onForceRemount.bind(this));
  }
  async getProjectAnnotationsOrRenderError() {
    try {
      let e = await this.getProjectAnnotations();
      if (this.renderToCanvas = e.renderToCanvas, !this.renderToCanvas)
        throw new G$1();
      return e;
    } catch (e) {
      throw this.renderPreviewEntryError("Error reading preview.js:", e), e;
    }
  }
  // If initialization gets as far as project annotations, this function runs.
  async initializeWithProjectAnnotations(e) {
    this.projectAnnotationsBeforeInitialization = e;
    try {
      let t = await this.getStoryIndexFromServer();
      return this.initializeWithStoryIndex(t);
    } catch (t) {
      throw this.renderPreviewEntryError("Error loading story index:", t), t;
    }
  }
  async runBeforeAllHook(e) {
    try {
      await this.beforeAllCleanup?.(), this.beforeAllCleanup = await e.beforeAll?.();
    } catch (t) {
      throw this.renderPreviewEntryError("Error in beforeAll hook:", t), t;
    }
  }
  async getStoryIndexFromServer() {
    let e = await fi(yi);
    if (e.status === 200)
      return e.json();
    throw new M$1({ text: await e.text() });
  }
  // If initialization gets as far as the story index, this function runs.
  initializeWithStoryIndex(e) {
    if (!this.projectAnnotationsBeforeInitialization)
      throw new Error("Cannot call initializeWithStoryIndex until project annotations resolve");
    this.storyStoreValue = new ge(
      e,
      this.importFn,
      this.projectAnnotationsBeforeInitialization
    ), delete this.projectAnnotationsBeforeInitialization, this.setInitialGlobals(), this.resolveStoreInitializationPromise();
  }
  async setInitialGlobals() {
    this.emitGlobals();
  }
  emitGlobals() {
    if (!this.storyStoreValue)
      throw new Y({ methodName: "emitGlobals" });
    let e = {
      globals: this.storyStoreValue.userGlobals.get() || {},
      globalTypes: this.storyStoreValue.projectAnnotations.globalTypes || {}
    };
    this.channel.emit(u$1, e);
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations: e
  }) {
    delete this.previewEntryError, this.getProjectAnnotations = e;
    let t = await this.getProjectAnnotationsOrRenderError();
    if (await this.runBeforeAllHook(t), !this.storyStoreValue) {
      await this.initializeWithProjectAnnotations(t);
      return;
    }
    this.storyStoreValue.setProjectAnnotations(t), this.emitGlobals();
  }
  async onStoryIndexChanged() {
    if (delete this.previewEntryError, !(!this.storyStoreValue && !this.projectAnnotationsBeforeInitialization))
      try {
        let e = await this.getStoryIndexFromServer();
        if (this.projectAnnotationsBeforeInitialization) {
          this.initializeWithStoryIndex(e);
          return;
        }
        await this.onStoriesChanged({ storyIndex: e });
      } catch (e) {
        throw this.renderPreviewEntryError("Error loading story index:", e), e;
      }
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn: e,
    storyIndex: t
  }) {
    if (!this.storyStoreValue)
      throw new Y({ methodName: "onStoriesChanged" });
    await this.storyStoreValue.onStoriesChanged({ importFn: e, storyIndex: t });
  }
  async onUpdateGlobals({
    globals: e,
    currentStory: t
  }) {
    if (this.storyStoreValue || await this.storeInitializationPromise, !this.storyStoreValue)
      throw new Y({ methodName: "onUpdateGlobals" });
    if (this.storyStoreValue.userGlobals.update(e), t) {
      let { initialGlobals: o, storyGlobals: n, userGlobals: i, globals: a } = this.storyStoreValue.getStoryContext(t);
      this.channel.emit(P$4, {
        initialGlobals: o,
        userGlobals: i,
        storyGlobals: n,
        globals: a
      });
    } else {
      let { initialGlobals: o, globals: n } = this.storyStoreValue.userGlobals;
      this.channel.emit(P$4, {
        initialGlobals: o,
        userGlobals: n,
        storyGlobals: {},
        globals: n
      });
    }
    await Promise.all(this.storyRenders.map((o) => o.rerender()));
  }
  async onUpdateArgs({ storyId: e, updatedArgs: t }) {
    if (!this.storyStoreValue)
      throw new Y({ methodName: "onUpdateArgs" });
    this.storyStoreValue.args.update(e, t), await Promise.all(
      this.storyRenders.filter((o) => o.id === e && !o.renderOptions.forceInitialArgs).map(
        (o) => (
          // We only run the play function, with in a force remount.
          // But when mount is destructured, the rendering happens inside of the play function.
          o.story && o.story.usesMount ? o.remount() : o.rerender()
        )
      )
    ), this.channel.emit(f$2, {
      storyId: e,
      args: this.storyStoreValue.args.get(e)
    });
  }
  async onRequestArgTypesInfo({ id: e, payload: t }) {
    try {
      await this.storeInitializationPromise;
      let o = await this.storyStoreValue?.loadStory(t);
      this.channel.emit(TE, {
        id: e,
        success: !0,
        payload: { argTypes: o?.argTypes || {} },
        error: null
      });
    } catch (o) {
      this.channel.emit(TE, {
        id: e,
        success: !1,
        error: o?.message
      });
    }
  }
  async onResetArgs({ storyId: e, argNames: t }) {
    if (!this.storyStoreValue)
      throw new Y({ methodName: "onResetArgs" });
    let n = this.storyRenders.find((l) => l.id === e)?.story || await this.storyStoreValue.loadStory({ storyId: e }), a = (t || [
      .../* @__PURE__ */ new Set([
        ...Object.keys(n.initialArgs),
        ...Object.keys(this.storyStoreValue.args.get(e))
      ])
    ]).reduce((l, c) => (l[c] = n.initialArgs[c], l), {});
    await this.onUpdateArgs({ storyId: e, updatedArgs: a });
  }
  // ForceReRender does not include a story id, so we simply must
  // re-render all stories in case they are relevant
  async onForceReRender() {
    await Promise.all(this.storyRenders.map((e) => e.rerender()));
  }
  async onForceRemount({ storyId: e }) {
    await Promise.all(this.storyRenders.filter((t) => t.id === e).map((t) => t.remount()));
  }
  // Used by docs to render a story to a given element
  // Note this short-circuits the `prepare()` phase of the StoryRender,
  // main to be consistent with the previous behaviour. In the future,
  // we will change it to go ahead and load the story, which will end up being
  // "instant", although async.
  renderStoryToElement(e, t, o, n) {
    if (!this.renderToCanvas || !this.storyStoreValue)
      throw new Y({
        methodName: "renderStoryToElement"
      });
    let i = new ie(
      this.channel,
      this.storyStoreValue,
      this.renderToCanvas,
      o,
      e.id,
      "docs",
      n,
      e
    );
    return i.renderToElement(t), this.storyRenders.push(i), async () => {
      await this.teardownRender(i);
    };
  }
  async teardownRender(e, { viewModeChanged: t } = {}) {
    this.storyRenders = this.storyRenders.filter((o) => o !== e), await e?.teardown?.({ viewModeChanged: t });
  }
  // API
  async loadStory({ storyId: e }) {
    if (!this.storyStoreValue)
      throw new Y({ methodName: "loadStory" });
    return this.storyStoreValue.loadStory({ storyId: e });
  }
  getStoryContext(e, { forceInitialArgs: t = !1 } = {}) {
    if (!this.storyStoreValue)
      throw new Y({ methodName: "getStoryContext" });
    return this.storyStoreValue.getStoryContext(e, { forceInitialArgs: t });
  }
  async extract(e) {
    if (!this.storyStoreValue)
      throw new Y({ methodName: "extract" });
    if (this.previewEntryError)
      throw this.previewEntryError;
    return await this.storyStoreValue.cacheAllCSFFiles(), this.storyStoreValue.extract(e);
  }
  // UTILITIES
  renderPreviewEntryError(e, t) {
    this.previewEntryError = t, s$2.error(e), s$2.error(t), this.channel.emit(N$2, t);
  }
};
s($r, "Preview");
var be = $r;

// ../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var mi = !1, Yr = "Invariant failed";
function Je(r, e) {
  if (!r) {
    if (mi)
      throw new Error(Yr);
    var t = typeof e == "function" ? e() : e, o = t ? "".concat(Yr, ": ").concat(t) : Yr;
    throw new Error(o);
  }
}
s(Je, "invariant");

// src/preview-api/modules/preview-web/docs-context/DocsContext.ts
var Kr = class Kr {
  constructor(e, t, o, n) {
    this.channel = e;
    this.store = t;
    this.renderStoryToElement = o;
    this.storyIdByName = /* @__PURE__ */ s((e) => {
      let t = this.nameToStoryId.get(e);
      if (t)
        return t;
      throw new Error(`No story found with that name: ${e}`);
    }, "storyIdByName");
    this.componentStories = /* @__PURE__ */ s(() => this.componentStoriesValue, "componentStories");
    this.componentStoriesFromCSFFile = /* @__PURE__ */ s((e) => this.store.componentStoriesFromCSFFile({ csfFile: e }), "componentStoriesFro\
mCSFFile");
    this.storyById = /* @__PURE__ */ s((e) => {
      if (!e) {
        if (!this.primaryStory)
          throw new Error(
            "No primary story defined for docs entry. Did you forget to use `<Meta>`?"
          );
        return this.primaryStory;
      }
      let t = this.storyIdToCSFFile.get(e);
      if (!t)
        throw new Error(`Called \`storyById\` for story that was never loaded: ${e}`);
      return this.store.storyFromCSFFile({ storyId: e, csfFile: t });
    }, "storyById");
    this.getStoryContext = /* @__PURE__ */ s((e) => ({
      ...this.store.getStoryContext(e),
      loaded: {},
      viewMode: "docs"
    }), "getStoryContext");
    this.loadStory = /* @__PURE__ */ s((e) => this.store.loadStory({ storyId: e }), "loadStory");
    this.componentStoriesValue = [], this.storyIdToCSFFile = /* @__PURE__ */ new Map(), this.exportToStory = /* @__PURE__ */ new Map(), this.
    exportsToCSFFile = /* @__PURE__ */ new Map(), this.nameToStoryId = /* @__PURE__ */ new Map(), this.attachedCSFFiles = /* @__PURE__ */ new Set(),
    n.forEach((i, a) => {
      this.referenceCSFFile(i);
    });
  }
  // This docs entry references this CSF file and can synchronously load the stories, as well
  // as reference them by module export. If the CSF is part of the "component" stories, they
  // can also be referenced by name and are in the componentStories list.
  referenceCSFFile(e) {
    this.exportsToCSFFile.set(e.moduleExports, e), this.exportsToCSFFile.set(e.moduleExports.default, e), this.store.componentStoriesFromCSFFile(
    { csfFile: e }).forEach((o) => {
      let n = e.stories[o.id];
      this.storyIdToCSFFile.set(n.id, e), this.exportToStory.set(n.moduleExport, o);
    });
  }
  attachCSFFile(e) {
    if (!this.exportsToCSFFile.has(e.moduleExports))
      throw new Error("Cannot attach a CSF file that has not been referenced");
    if (this.attachedCSFFiles.has(e))
      return;
    this.attachedCSFFiles.add(e), this.store.componentStoriesFromCSFFile({ csfFile: e }).forEach((o) => {
      this.nameToStoryId.set(o.name, o.id), this.componentStoriesValue.push(o), this.primaryStory || (this.primaryStory = o);
    });
  }
  referenceMeta(e, t) {
    let o = this.resolveModuleExport(e);
    if (o.type !== "meta")
      throw new Error(
        "<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your \
CSF file?"
      );
    t && this.attachCSFFile(o.csfFile);
  }
  get projectAnnotations() {
    let { projectAnnotations: e } = this.store;
    if (!e)
      throw new Error("Can't get projectAnnotations from DocsContext before they are initialized");
    return e;
  }
  resolveAttachedModuleExportType(e) {
    if (e === "story") {
      if (!this.primaryStory)
        throw new Error(
          "No primary story attached to this docs file, did you forget to use <Meta of={} />?"
        );
      return { type: "story", story: this.primaryStory };
    }
    if (this.attachedCSFFiles.size === 0)
      throw new Error(
        "No CSF file attached to this docs file, did you forget to use <Meta of={} />?"
      );
    let t = Array.from(this.attachedCSFFiles)[0];
    if (e === "meta")
      return { type: "meta", csfFile: t };
    let { component: o } = t.meta;
    if (!o)
      throw new Error(
        "Attached CSF file does not defined a component, did you forget to export one?"
      );
    return { type: "component", component: o };
  }
  resolveModuleExport(e) {
    let t = this.exportsToCSFFile.get(e);
    if (t)
      return { type: "meta", csfFile: t };
    let o = this.exportToStory.get(e);
    return o ? { type: "story", story: o } : { type: "component", component: e };
  }
  resolveOf(e, t = []) {
    let o;
    if (["component", "meta", "story"].includes(e)) {
      let n = e;
      o = this.resolveAttachedModuleExportType(n);
    } else
      o = this.resolveModuleExport(e);
    if (t.length && !t.includes(o.type)) {
      let n = o.type === "component" ? "component or unknown" : o.type;
      throw new Error(F`Invalid value passed to the 'of' prop. The value was resolved to a '${n}' type but the only types for this block are: ${t.
      join(
        ", "
      )}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
    }
    switch (o.type) {
      case "component":
        return {
          ...o,
          projectAnnotations: this.projectAnnotations
        };
      case "meta":
        return {
          ...o,
          preparedMeta: this.store.preparedMetaFromCSFFile({ csfFile: o.csfFile })
        };
      case "story":
      default:
        return o;
    }
  }
};
s(Kr, "DocsContext");
var Q = Kr;

// src/preview-api/modules/preview-web/render/CsfDocsRender.ts
var Xr = class Xr {
  constructor(e, t, o, n) {
    this.channel = e;
    this.store = t;
    this.entry = o;
    this.callbacks = n;
    this.type = "docs";
    this.subtype = "csf";
    this.torndown = !1;
    this.disableKeyListeners = !1;
    this.preparing = !1;
    this.id = o.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = !0;
    let { entryExports: e, csfFiles: t = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw J;
    let { importPath: o, title: n } = this.entry, i = this.store.processCSFFileWithCache(
      e,
      o,
      n
    ), a = Object.keys(i.stories)[0];
    this.story = this.store.storyFromCSFFile({ storyId: a, csfFile: i }), this.csfFiles = [i, ...t], this.preparing = !1;
  }
  isEqual(e) {
    return !!(this.id === e.id && this.story && this.story === e.story);
  }
  docsContext(e) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    let t = new Q(
      this.channel,
      this.store,
      e,
      this.csfFiles
    );
    return this.csfFiles.forEach((o) => t.attachCSFFile(o)), t;
  }
  async renderToElement(e, t) {
    if (!this.story || !this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    let o = this.docsContext(t), { docs: n } = this.story.parameters || {};
    if (!n)
      throw new Error(
        "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
      );
    let i = await n.renderer(), { render: a } = i, l = /* @__PURE__ */ s(async () => {
      try {
        await a(o, n, e), this.channel.emit(I$2, this.id);
      } catch (c) {
        this.callbacks.showException(c);
      }
    }, "renderDocs");
    return this.rerender = async () => l(), this.teardownRender = async ({ viewModeChanged: c }) => {
      !c || !e || i.unmount(e);
    }, l();
  }
  async teardown({ viewModeChanged: e } = {}) {
    this.teardownRender?.({ viewModeChanged: e }), this.torndown = !0;
  }
};
s(Xr, "CsfDocsRender");
var je = Xr;
var Jr = class Jr {
  constructor(e, t, o, n) {
    this.channel = e;
    this.store = t;
    this.entry = o;
    this.callbacks = n;
    this.type = "docs";
    this.subtype = "mdx";
    this.torndown = !1;
    this.disableKeyListeners = !1;
    this.preparing = !1;
    this.id = o.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = !0;
    let { entryExports: e, csfFiles: t = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw J;
    this.csfFiles = t, this.exports = e, this.preparing = !1;
  }
  isEqual(e) {
    return !!(this.id === e.id && this.exports && this.exports === e.exports);
  }
  docsContext(e) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    return new Q(
      this.channel,
      this.store,
      e,
      this.csfFiles
    );
  }
  async renderToElement(e, t) {
    if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
      throw new Error("Cannot render docs before preparing");
    let o = this.docsContext(t), { docs: n } = this.store.projectAnnotations.parameters || {};
    if (!n)
      throw new Error(
        "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
      );
    let i = { ...n, page: this.exports.default }, a = await n.renderer(), { render: l } = a, c = /* @__PURE__ */ s(async () => {
      try {
        await l(o, i, e), this.channel.emit(I$2, this.id);
      } catch (d) {
        this.callbacks.showException(d);
      }
    }, "renderDocs");
    return this.rerender = async () => c(), this.teardownRender = async ({ viewModeChanged: d } = {}) => {
      !d || !e || (a.unmount(e), this.torndown = !0);
    }, c();
  }
  async teardown({ viewModeChanged: e } = {}) {
    this.teardownRender?.({ viewModeChanged: e }), this.torndown = !0;
  }
};
s(Jr, "MdxDocsRender");
var Me = Jr;

// src/preview-api/modules/preview-web/PreviewWithSelection.tsx
var Di = globalThis;
function ki(r) {
  let e = r.composedPath && r.composedPath()[0] || r.target;
  return /input|textarea/i.test(e.tagName) || e.getAttribute("contenteditable") !== null;
}
s(ki, "focusInInput");
var Do = "attached-mdx", ji = "unattached-mdx";
function Mi({ tags: r }) {
  return r?.includes(ji) || r?.includes(Do);
}
s(Mi, "isMdxEntry");
function Zr(r) {
  return r.type === "story";
}
s(Zr, "isStoryRender");
function _i(r) {
  return r.type === "docs";
}
s(_i, "isDocsRender");
function Li(r) {
  return _i(r) && r.subtype === "csf";
}
s(Li, "isCsfDocsRender");
var et = class et extends be {
  constructor(t, o, n, i) {
    super(t, o, void 0, !1);
    this.importFn = t;
    this.getProjectAnnotations = o;
    this.selectionStore = n;
    this.view = i;
    this.initialize();
  }
  setupListeners() {
    super.setupListeners(), Di.onkeydown = this.onKeydown.bind(this), this.channel.on(M$3, this.onSetCurrentStory.bind(this)), this.channel.on(
    k$4, this.onUpdateQueryParams.bind(this)), this.channel.on(t$1, this.onPreloadStories.bind(this));
  }
  async setInitialGlobals() {
    if (!this.storyStoreValue)
      throw new Y({ methodName: "setInitialGlobals" });
    let { globals: t } = this.selectionStore.selectionSpecifier || {};
    t && this.storyStoreValue.userGlobals.updateFromPersisted(t), this.emitGlobals();
  }
  // If initialization gets as far as the story index, this function runs.
  async initializeWithStoryIndex(t) {
    return await super.initializeWithStoryIndex(t), this.selectSpecifiedStory();
  }
  // Use the selection specifier to choose a story, then render it
  async selectSpecifiedStory() {
    if (!this.storyStoreValue)
      throw new Y({
        methodName: "selectSpecifiedStory"
      });
    if (this.selectionStore.selection) {
      await this.renderSelection();
      return;
    }
    if (!this.selectionStore.selectionSpecifier) {
      this.renderMissingStory();
      return;
    }
    let { storySpecifier: t, args: o } = this.selectionStore.selectionSpecifier, n = this.storyStoreValue.storyIndex.entryFromSpecifier(t);
    if (!n) {
      t === "*" ? this.renderStoryLoadingException(t, new F$2()) : this.renderStoryLoadingException(
        t,
        new K$1({ storySpecifier: t.toString() })
      );
      return;
    }
    let { id: i, type: a } = n;
    this.selectionStore.setSelection({ storyId: i, viewMode: a }), this.channel.emit(b$2, this.selectionStore.selection), this.channel.emit(r$1,
    this.selectionStore.selection), await this.renderSelection({ persistedArgs: o });
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations: t
  }) {
    await super.onGetProjectAnnotationsChanged({ getProjectAnnotations: t }), this.selectionStore.selection && this.renderSelection();
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn: t,
    storyIndex: o
  }) {
    await super.onStoriesChanged({ importFn: t, storyIndex: o }), this.selectionStore.selection ? await this.renderSelection() : await this.
    selectSpecifiedStory();
  }
  onKeydown(t) {
    if (!this.storyRenders.find((o) => o.disableKeyListeners) && !ki(t)) {
      let { altKey: o, ctrlKey: n, metaKey: i, shiftKey: a, key: l, code: c, keyCode: d } = t;
      this.channel.emit(H$2, {
        event: { altKey: o, ctrlKey: n, metaKey: i, shiftKey: a, key: l, code: c, keyCode: d }
      });
    }
  }
  async onSetCurrentStory(t) {
    this.selectionStore.setSelection({ viewMode: "story", ...t }), await this.storeInitializationPromise, this.channel.emit(r$1, this.selectionStore.
    selection), this.renderSelection();
  }
  onUpdateQueryParams(t) {
    this.selectionStore.setQueryParams(t);
  }
  async onUpdateGlobals({ globals: t }) {
    let o = this.currentRender instanceof ie && this.currentRender.story || void 0;
    super.onUpdateGlobals({ globals: t, currentStory: o }), (this.currentRender instanceof Me || this.currentRender instanceof je) && await this.
    currentRender.rerender?.();
  }
  async onUpdateArgs({ storyId: t, updatedArgs: o }) {
    super.onUpdateArgs({ storyId: t, updatedArgs: o });
  }
  async onPreloadStories({ ids: t }) {
    await this.storeInitializationPromise, this.storyStoreValue && await Promise.allSettled(t.map((o) => this.storyStoreValue?.loadEntry(o)));
  }
  // RENDERING
  // We can either have:
  // - a story selected in "story" viewMode,
  //     in which case we render it to the root element, OR
  // - a story selected in "docs" viewMode,
  //     in which case we render the docsPage for that story
  async renderSelection({ persistedArgs: t } = {}) {
    let { renderToCanvas: o } = this;
    if (!this.storyStoreValue || !o)
      throw new Y({ methodName: "renderSelection" });
    let { selection: n$1 } = this.selectionStore;
    if (!n$1)
      throw new Error("Cannot call renderSelection as no selection was made");
    let { storyId: i } = n$1, a;
    try {
      a = await this.storyStoreValue.storyIdToEntry(i);
    } catch (b) {
      this.currentRender && await this.teardownRender(this.currentRender), this.renderStoryLoadingException(i, b);
      return;
    }
    let l = this.currentSelection?.storyId !== i, c = this.currentRender?.type !== a.type;
    a.type === "story" ? this.view.showPreparingStory({ immediate: c }) : this.view.showPreparingDocs({ immediate: c }), this.currentRender?.
    isPreparing() && await this.teardownRender(this.currentRender);
    let d;
    a.type === "story" ? d = new ie(
      this.channel,
      this.storyStoreValue,
      o,
      this.mainStoryCallbacks(i),
      i,
      "story"
    ) : Mi(a) ? d = new Me(
      this.channel,
      this.storyStoreValue,
      a,
      this.mainStoryCallbacks(i)
    ) : d = new je(
      this.channel,
      this.storyStoreValue,
      a,
      this.mainStoryCallbacks(i)
    );
    let p = this.currentSelection;
    this.currentSelection = n$1;
    let u = this.currentRender;
    this.currentRender = d;
    try {
      await d.prepare();
    } catch (b) {
      u && await this.teardownRender(u), b !== J && this.renderStoryLoadingException(i, b);
      return;
    }
    let m = !l && u && !d.isEqual(u);
    if (t && Zr(d) && (Je(!!d.story), this.storyStoreValue.args.updateFromPersisted(d.story, t)), u && !u.torndown && !l && !m && !c) {
      this.currentRender = u, this.channel.emit(n, i), this.view.showMain();
      return;
    }
    if (u && await this.teardownRender(u, { viewModeChanged: c }), p && (l || c) && this.channel.emit(Q$2, i), Zr(d)) {
      Je(!!d.story);
      let {
        parameters: b,
        initialArgs: h,
        argTypes: g,
        unmappedArgs: y,
        initialGlobals: T,
        userGlobals: x,
        storyGlobals: f,
        globals: S
      } = this.storyStoreValue.getStoryContext(d.story);
      this.channel.emit(w$2, {
        id: i,
        parameters: b,
        initialArgs: h,
        argTypes: g,
        args: y
      }), this.channel.emit(P$4, { userGlobals: x, storyGlobals: f, globals: S, initialGlobals: T });
    } else {
      let { parameters: b } = this.storyStoreValue.projectAnnotations, { initialGlobals: h, globals: g } = this.storyStoreValue.userGlobals;
      if (this.channel.emit(P$4, {
        globals: g,
        initialGlobals: h,
        storyGlobals: {},
        userGlobals: g
      }), Li(d) || d.entry.tags?.includes(Do)) {
        if (!d.csfFiles)
          throw new H({ storyId: i });
        ({ parameters: b } = this.storyStoreValue.preparedMetaFromCSFFile({
          csfFile: d.csfFiles[0]
        }));
      }
      this.channel.emit(D$2, {
        id: i,
        parameters: b
      });
    }
    Zr(d) ? (Je(!!d.story), this.storyRenders.push(d), this.currentRender.renderToElement(
      this.view.prepareForStory(d.story)
    )) : this.currentRender.renderToElement(
      this.view.prepareForDocs(),
      // This argument is used for docs, which is currently only compatible with HTMLElements
      this.renderStoryToElement.bind(this)
    );
  }
  async teardownRender(t, { viewModeChanged: o = !1 } = {}) {
    this.storyRenders = this.storyRenders.filter((n) => n !== t), await t?.teardown?.({ viewModeChanged: o });
  }
  // UTILITIES
  mainStoryCallbacks(t) {
    return {
      showStoryDuringRender: /* @__PURE__ */ s(() => this.view.showStoryDuringRender(), "showStoryDuringRender"),
      showMain: /* @__PURE__ */ s(() => this.view.showMain(), "showMain"),
      showError: /* @__PURE__ */ s((o) => this.renderError(t, o), "showError"),
      showException: /* @__PURE__ */ s((o) => this.renderException(t, o), "showException")
    };
  }
  renderPreviewEntryError(t, o) {
    super.renderPreviewEntryError(t, o), this.view.showErrorDisplay(o);
  }
  renderMissingStory() {
    this.view.showNoPreview(), this.channel.emit(V$2);
  }
  renderStoryLoadingException(t, o) {
    s$2.error(o), this.view.showErrorDisplay(o), this.channel.emit(V$2, t);
  }
  // renderException is used if we fail to render the story and it is uncaught by the app layer
  renderException(t, o) {
    let { name: n = "Error", message: i = String(o), stack: a } = o;
    this.channel.emit(K$2, { name: n, message: i, stack: a }), this.channel.emit(B$3, { newPhase: "errored", storyId: t }), this.view.showErrorDisplay(
    o), s$2.error(`Error rendering story '${t}':`), s$2.error(o);
  }
  // renderError is used by the various app layers to inform the user they have done something
  // wrong -- for instance returned the wrong thing from a story
  renderError(t, { title: o, description: n }) {
    s$2.error(`Error rendering story ${o}: ${n}`), this.channel.emit(x$2, { title: o, description: n }), this.channel.emit(B$3, { newPhase: "er\
rored", storyId: t }), this.view.showErrorDisplay({
      message: o,
      stack: n
    });
  }
};
s(et, "PreviewWithSelection");
var Se = et;

// src/preview-api/modules/preview-web/UrlStore.ts
var Le = ue(or(), 1);
var Ho = ue(or(), 1);
var Uo = /^[a-zA-Z0-9 _-]*$/, Wo = /^-?[0-9]+(\.[0-9]+)?$/, da = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i, $o = /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
at = /* @__PURE__ */ s((r = "", e) => r === null || r === "" || !Uo.test(r) ? !1 : e == null || e instanceof Date || typeof e == "number" ||
typeof e == "boolean" ? !0 : typeof e == "string" ? Uo.test(e) || Wo.test(e) || da.test(e) || $o.test(e) : Array.isArray(e) ? e.every((t) => at(
r, t)) : j(e) ? Object.entries(e).every(([t, o]) => at(t, o)) : !1, "validateArgs"), pa = {
  delimiter: ";",
  // we're parsing a single query param
  nesting: !0,
  arrayRepeat: !0,
  arrayRepeatSyntax: "bracket",
  nestingSyntax: "js",
  // objects are encoded using dot notation
  valueDeserializer(r) {
    if (r.startsWith("!")) {
      if (r === "!undefined")
        return;
      if (r === "!null")
        return null;
      if (r === "!true")
        return !0;
      if (r === "!false")
        return !1;
      if (r.startsWith("!date(") && r.endsWith(")"))
        return new Date(r.replaceAll(" ", "+").slice(6, -1));
      if (r.startsWith("!hex(") && r.endsWith(")"))
        return `#${r.slice(5, -1)}`;
      let e = r.slice(1).match($o);
      if (e)
        return r.startsWith("!rgba") || r.startsWith("!RGBA") ? `${e[1]}(${e[2]}, ${e[3]}, ${e[4]}, ${e[5]})` : r.startsWith("!hsla") || r.startsWith(
        "!HSLA") ? `${e[1]}(${e[2]}, ${e[3]}%, ${e[4]}%, ${e[5]})` : r.startsWith("!rgb") || r.startsWith("!RGB") ? `${e[1]}(${e[2]}, ${e[3]}\
, ${e[4]})` : `${e[1]}(${e[2]}, ${e[3]}%, ${e[4]}%)`;
    }
    return Wo.test(r) ? Number(r) : r;
  }
}, lt = /* @__PURE__ */ s((r) => {
  let e = r.split(";").map((t) => t.replace("=", "~").replace(":", "="));
  return Object.entries((0, Ho.parse)(e.join(";"), pa)).reduce((t, [o, n]) => at(o, n) ? Object.assign(t, { [o]: n }) : (n$1.warn(F`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
    `), t), {});
}, "parseArgsParam");

// src/preview-api/modules/preview-web/UrlStore.ts
var { history: Yo, document: Z } = P;
function ua(r) {
  let e = (r || "").match(/^\/story\/(.+)/);
  if (!e)
    throw new Error(`Invalid path '${r}',  must start with '/story/'`);
  return e[1];
}
s(ua, "pathToId");
var Ko = /* @__PURE__ */ s(({
  selection: r,
  extraParams: e
}) => {
  let t = Z?.location.search.slice(1), { path: o, selectedKind: n, selectedStory: i, ...a } = (0, Le.parse)(t);
  return `?${(0, Le.stringify)({
    ...a,
    ...e,
    ...r && { id: r.storyId, viewMode: r.viewMode }
  })}`;
}, "getQueryString"), fa = /* @__PURE__ */ s((r) => {
  if (!r)
    return;
  let e = Ko({ selection: r }), { hash: t = "" } = Z.location;
  Z.title = r.storyId, Yo.replaceState({}, "", `${Z.location.pathname}${e}${t}`);
}, "setPath"), ya = /* @__PURE__ */ s((r) => r != null && typeof r == "object" && Array.isArray(r) === !1, "isObject"), _e = /* @__PURE__ */ s(
(r) => {
  if (r !== void 0) {
    if (typeof r == "string")
      return r;
    if (Array.isArray(r))
      return _e(r[0]);
    if (ya(r))
      return _e(
        Object.values(r).filter(Boolean)
      );
  }
}, "getFirstString"), ma = /* @__PURE__ */ s(() => {
  if (typeof Z < "u") {
    let r = Z.location.search.slice(1), e = (0, Le.parse)(r), t = typeof e.args == "string" ? lt(e.args) : void 0, o = typeof e.globals == "\
string" ? lt(e.globals) : void 0, n = _e(e.viewMode);
    (typeof n != "string" || !n.match(/docs|story/)) && (n = "story");
    let i = _e(e.path), a = i ? ua(i) : _e(e.id);
    if (a)
      return { storySpecifier: a, args: t, globals: o, viewMode: n };
  }
  return null;
}, "getSelectionSpecifierFromPath"), ct = class ct {
  constructor() {
    this.selectionSpecifier = ma();
  }
  setSelection(e) {
    this.selection = e, fa(this.selection);
  }
  setQueryParams(e) {
    let t = Ko({ extraParams: e }), { hash: o = "" } = Z.location;
    Yo.replaceState({}, "", `${Z.location.pathname}${t}${o}`);
  }
};
s(ct, "UrlStore");
var Te = ct;

// src/preview-api/modules/preview-web/WebView.ts
var Pn = ue(An(), 1), Fn = ue(or(), 1);
var { document: k } = P, vn = 100, In = /* @__PURE__ */ ((i) => (i.MAIN = "MAIN", i.NOPREVIEW = "NOPREVIEW", i.PREPARING_STORY = "PREPARING_\
STORY", i.PREPARING_DOCS = "PREPARING_DOCS", i.ERROR = "ERROR", i))(In || {}), ht = {
  PREPARING_STORY: "sb-show-preparing-story",
  PREPARING_DOCS: "sb-show-preparing-docs",
  MAIN: "sb-show-main",
  NOPREVIEW: "sb-show-nopreview",
  ERROR: "sb-show-errordisplay"
}, gt = {
  centered: "sb-main-centered",
  fullscreen: "sb-main-fullscreen",
  padded: "sb-main-padded"
}, Cn = new Pn.default({
  escapeXML: !0
}), bt = class bt {
  constructor() {
    this.testing = !1;
    if (typeof k < "u") {
      let { __SPECIAL_TEST_PARAMETER__: e } = (0, Fn.parse)(k.location.search.slice(1));
      switch (e) {
        case "preparing-story": {
          this.showPreparingStory(), this.testing = !0;
          break;
        }
        case "preparing-docs": {
          this.showPreparingDocs(), this.testing = !0;
          break;
        }
        default:
      }
    }
  }
  // Get ready to render a story, returning the element to render to
  prepareForStory(e) {
    return this.showStory(), this.applyLayout(e.parameters.layout), k.documentElement.scrollTop = 0, k.documentElement.scrollLeft = 0, this.
    storyRoot();
  }
  storyRoot() {
    return k.getElementById("storybook-root");
  }
  prepareForDocs() {
    return this.showMain(), this.showDocs(), this.applyLayout("fullscreen"), k.documentElement.scrollTop = 0, k.documentElement.scrollLeft =
    0, this.docsRoot();
  }
  docsRoot() {
    return k.getElementById("storybook-docs");
  }
  applyLayout(e = "padded") {
    if (e === "none") {
      k.body.classList.remove(this.currentLayoutClass), this.currentLayoutClass = null;
      return;
    }
    this.checkIfLayoutExists(e);
    let t = gt[e];
    k.body.classList.remove(this.currentLayoutClass), k.body.classList.add(t), this.currentLayoutClass = t;
  }
  checkIfLayoutExists(e) {
    gt[e] || s$2.warn(
      F`
          The desired layout: ${e} is not a valid option.
          The possible options are: ${Object.keys(gt).join(", ")}, none.
        `
    );
  }
  showMode(e) {
    clearTimeout(this.preparingTimeout), Object.keys(In).forEach((t) => {
      t === e ? k.body.classList.add(ht[t]) : k.body.classList.remove(ht[t]);
    });
  }
  showErrorDisplay({ message: e = "", stack: t = "" }) {
    let o = e, n = t, i = e.split(`
`);
    i.length > 1 && ([o] = i, n = i.slice(1).join(`
`).replace(/^\n/, "")), k.getElementById("error-message").innerHTML = Cn.toHtml(o), k.getElementById("error-stack").innerHTML = Cn.toHtml(n),
    this.showMode("ERROR");
  }
  showNoPreview() {
    this.testing || (this.showMode("NOPREVIEW"), this.storyRoot()?.setAttribute("hidden", "true"), this.docsRoot()?.setAttribute("hidden", "\
true"));
  }
  showPreparingStory({ immediate: e = !1 } = {}) {
    clearTimeout(this.preparingTimeout), e ? this.showMode("PREPARING_STORY") : this.preparingTimeout = setTimeout(
      () => this.showMode("PREPARING_STORY"),
      vn
    );
  }
  showPreparingDocs({ immediate: e = !1 } = {}) {
    clearTimeout(this.preparingTimeout), e ? this.showMode("PREPARING_DOCS") : this.preparingTimeout = setTimeout(() => this.showMode("PREPA\
RING_DOCS"), vn);
  }
  showMain() {
    this.showMode("MAIN");
  }
  showDocs() {
    this.storyRoot().setAttribute("hidden", "true"), this.docsRoot().removeAttribute("hidden");
  }
  showStory() {
    this.docsRoot().setAttribute("hidden", "true"), this.storyRoot().removeAttribute("hidden");
  }
  showStoryDuringRender() {
    k.body.classList.add(ht.MAIN);
  }
};
s(bt, "WebView");
var xe = bt;

// src/preview-api/modules/preview-web/PreviewWeb.tsx
var St = class St extends Se {
  constructor(t, o) {
    super(t, o, new Te(), new xe());
    this.importFn = t;
    this.getProjectAnnotations = o;
    P.__STORYBOOK_PREVIEW__ = this;
  }
};
s(St, "PreviewWeb");
var pr = St;

// src/preview-api/modules/preview-web/simulate-pageload.ts
var { document: de } = P, Ja = [
  "application/javascript",
  "application/ecmascript",
  "application/x-ecmascript",
  "application/x-javascript",
  "text/ecmascript",
  "text/javascript",
  "text/javascript1.0",
  "text/javascript1.1",
  "text/javascript1.2",
  "text/javascript1.3",
  "text/javascript1.4",
  "text/javascript1.5",
  "text/jscript",
  "text/livescript",
  "text/x-ecmascript",
  "text/x-javascript",
  // Support modern javascript
  "module"
], Qa = "script", On = "scripts-root";
function ur() {
  let r = de.createEvent("Event");
  r.initEvent("DOMContentLoaded", !0, !0), de.dispatchEvent(r);
}
s(ur, "simulateDOMContentLoaded");
function Za(r, e, t) {
  let o = de.createElement("script");
  o.type = r.type === "module" ? "module" : "text/javascript", r.src ? (o.onload = e, o.onerror = e, o.src = r.src) : o.textContent = r.innerText,
  t ? t.appendChild(o) : de.head.appendChild(o), r.parentNode.removeChild(r), r.src || e();
}
s(Za, "insertScript");
function Dn(r, e, t = 0) {
  r[t](() => {
    t++, t === r.length ? e() : Dn(r, e, t);
  });
}
s(Dn, "insertScriptsSequentially");
function kn(r) {
  let e = de.getElementById(On);
  e ? e.innerHTML = "" : (e = de.createElement("div"), e.id = On, de.body.appendChild(e));
  let t = Array.from(r.querySelectorAll(Qa));
  if (t.length) {
    let o = [];
    t.forEach((n) => {
      let i = n.getAttribute("type");
      (!i || Ja.includes(i)) && o.push((a) => Za(n, a, e));
    }), o.length && Dn(o, ur, void 0);
  } else
    ur();
}
s(kn, "simulatePageLoad");

var{window:globalWindow}=scope;globalWindow&&(globalWindow.STORYBOOK_ENV="react");function setProjectAnnotations(projectAnnotations){return Os(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS),Ms(projectAnnotations)}var INTERNAL_DEFAULT_PROJECT_ANNOTATIONS={...entry_preview_exports,renderToCanvas:async(renderContext,canvasElement)=>{if(renderContext.storyContext.testingLibraryRender==null){renderContext.storyContext.parameters.__isPortableStory=!0;let unmount2=await renderToCanvas(renderContext,canvasElement);return async()=>{await unmount2();}}let{storyContext:{context,unboundStoryFn:Story,testingLibraryRender:render}}=renderContext,{unmount}=render(reactExports.createElement(Story,{...context}),{container:context.canvasElement});return unmount}};function composeStory(story,componentAnnotations,projectAnnotations,exportsName){return fo(story,componentAnnotations,projectAnnotations,INTERNAL_DEFAULT_PROJECT_ANNOTATIONS,exportsName)}function composeStories(csfExports,projectAnnotations){return Ls(csfExports,projectAnnotations,composeStory)}typeof module<"u"&&module?.hot?.decline();

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

var client = {};

var hydrateRoot;
var createRoot;
"use strict";
var m = reactDomExports;
if (true) {
  createRoot = client.createRoot = m.createRoot;
  hydrateRoot = client.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

setProjectAnnotations(preview);


"use strict";

// packages/playwright-ct-core/src/injected/importRegistry.ts
function isImportRef(value) {
  return typeof value === "object" && value && value.__pw_type === "importRef";
}
var ImportRegistry = class {
  constructor() {
    this._registry = /* @__PURE__ */ new Map();
  }
  initialize(components) {
    for (const [name, value] of Object.entries(components))
      this._registry.set(name, value);
  }
  async resolveImportRef(importRef) {
    const importFunction = this._registry.get(importRef.id);
    if (!importFunction)
      throw new Error(`Unregistered component: ${importRef.id}. Following components are registered: ${[...this._registry.keys()]}`);
    let importedObject = await importFunction();
    if (!importedObject)
      throw new Error(`Could not resolve component: ${importRef.id}.`);
    if (importRef.property) {
      importedObject = importedObject[importRef.property];
      if (!importedObject)
        throw new Error(`Could not instantiate component: ${importRef.id}.${importRef.property}.`);
    }
    return importedObject;
  }
};

// packages/playwright-ct-core/src/injected/serializers.ts
function isFunctionRef(value) {
  return value && typeof value === "object" && value.__pw_type === "function";
}
async function unwrapObject(value) {
  return transformObjectAsync(value, async (v) => {
    if (isFunctionRef(v)) {
      const result = (...args) => {
        window.__ctDispatchFunction(v.ordinal, args);
      };
      return { result };
    }
    if (isImportRef(v))
      return { result: await window.__pwRegistry.resolveImportRef(v) };
  });
}
function transformObject(value, mapping) {
  const result = mapping(value);
  if (result)
    return result.result;
  if (value === null || typeof value !== "object")
    return value;
  if (value instanceof Date || value instanceof RegExp || value instanceof URL)
    return value;
  if (Array.isArray(value)) {
    const result3 = [];
    for (const item of value)
      result3.push(transformObject(item, mapping));
    return result3;
  }
  if ((value == null ? void 0 : value.__pw_type) === "jsx" && typeof value.type === "function") {
    throw new Error([
      `Component "${value.type.name}" cannot be mounted.`,
      `Most likely, this component is defined in the test file. Create a test story instead.`,
      `For more information, see https://playwright.dev/docs/test-components#test-stories.`
    ].join("\n"));
  }
  const result2 = {};
  for (const [key, prop] of Object.entries(value))
    result2[key] = transformObject(prop, mapping);
  return result2;
}
async function transformObjectAsync(value, mapping) {
  const result = await mapping(value);
  if (result)
    return result.result;
  if (value === null || typeof value !== "object")
    return value;
  if (value instanceof Date || value instanceof RegExp || value instanceof URL)
    return value;
  if (Array.isArray(value)) {
    const result3 = [];
    for (const item of value)
      result3.push(await transformObjectAsync(item, mapping));
    return result3;
  }
  const result2 = {};
  for (const [key, prop] of Object.entries(value))
    result2[key] = await transformObjectAsync(prop, mapping);
  return result2;
}

// packages/playwright-ct-core/src/injected/index.ts
window.__pwRegistry = new ImportRegistry();
window.__pwUnwrapObject = unwrapObject;
window.__pwTransformObject = transformObject;
/** @typedef {import('../playwright-ct-core/types/component').JsxComponent} JsxComponent */

/** @type {Map<Element, { root: import('react-dom/client').Root, setRenderer: (renderer: any) => void }>} */
const __pwRootRegistry = new Map();

/**
 * @param {any} component
 * @returns {component is JsxComponent}
 */
function isJsxComponent(component) {
  return typeof component === 'object' && component && component.__pw_type === 'jsx';
}

/**
 * @param {any} type
 * @returns {boolean} type is Playwright's mock JSX.Fragment
 */
function isJsxFragment(type) {
  return typeof type === 'object' && type?.__pw_jsx_fragment;
}

/**
 * Turns the Playwright representation of JSX (see jsx-runtime.js) into React.createElement calls.
 * @param {any} value
 */
function __pwRender(value) {
  return window.__pwTransformObject(value, v => {
    if (isJsxComponent(v)) {
      const component = v;
      let type = component.type;
      if (isJsxFragment(type))
        type = __pwReact.Fragment;
      const props = component.props ? __pwRender(component.props) : {};
      const key = component.key ? __pwRender(component.key) : undefined;
      const { children, ...propsWithoutChildren } = props;
      if (key)
        propsWithoutChildren.key = key;
      const createElementArguments = [propsWithoutChildren];
      if (children)
        createElementArguments.push(children);
      return { result: __pwReact.createElement(type, ...createElementArguments) };
    }
  });
}

window.playwrightMount = async (component, rootElement, hooksConfig) => {
  if (!isJsxComponent(component))
    throw new Error('Object mount notation is not supported');
  if (__pwRootRegistry.has(rootElement)) {
    throw new Error(
        'Attempting to mount a component into an container that already has a React root'
    );
  }

  const root = createRoot(rootElement);
  const entry = { root, setRenderer: () => undefined };
  __pwRootRegistry.set(rootElement, entry);

  const App = () => {
    /** @type {any} */
    const [renderer, setRenderer] = __pwReact.useState(() => __pwRender(component));
    entry.setRenderer = setRenderer;
    return renderer;
  };
  let AppWrapper = App;
  for (const hook of window.__pw_hooks_before_mount || []) {
    const wrapper = await hook({ App: AppWrapper, hooksConfig });
    if (wrapper)
      AppWrapper = () => wrapper;
  }

  root.render(__pwReact.createElement(AppWrapper));

  for (const hook of window.__pw_hooks_after_mount || [])
    await hook({ hooksConfig });
};

window.playwrightUnmount = async rootElement => {
  const entry = __pwRootRegistry.get(rootElement);
  if (!entry)
    throw new Error('Component was not mounted');

  entry.root.unmount();
  __pwRootRegistry.delete(rootElement);
};

window.playwrightUpdate = async (rootElement, component) => {
  if (!isJsxComponent(component))
    throw new Error('Object mount notation is not supported');

  const entry = __pwRootRegistry.get(rootElement);
  if (!entry)
    throw new Error('Component was not mounted');
  entry.setRenderer(() => __pwRender(component));
};

const _Users_oleksandrkorniienko_Downloads_github_7hglwtvx_src_stories_button_stories_portable = () => __vitePreload(() => import('./button.stories.portable-DSiENkHl.js'),true?__vite__mapDeps([0,1,2]):void 0).then((mod) => mod.default);
__pwRegistry.initialize({ _Users_oleksandrkorniienko_Downloads_github_7hglwtvx_src_stories_button_stories_portable });

export { B$3 as B, M$3 as M, U$2 as U, createRoot as a, composeStories as c, getDefaultExportFromCjs as g, n$1 as n, reactExports as r, scope as s, z };
//# sourceMappingURL=index-BlCXXu8r.js.map
