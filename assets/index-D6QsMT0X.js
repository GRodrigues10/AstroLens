(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function o(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(f){if(f.ep)return;f.ep=!0;const h=o(f);fetch(f.href,h)}})();function Og(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var so={exports:{}},eu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function Ng(){if(Yh)return eu;Yh=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(r,f,h){var y=null;if(h!==void 0&&(y=""+h),f.key!==void 0&&(y=""+f.key),"key"in f){h={};for(var z in f)z!=="key"&&(h[z]=f[z])}else h=f;return f=h.ref,{$$typeof:u,type:r,key:y,ref:f!==void 0?f:null,props:h}}return eu.Fragment=c,eu.jsx=o,eu.jsxs=o,eu}var qh;function _g(){return qh||(qh=1,so.exports=Ng()),so.exports}var x=_g(),fo={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function jg(){if(Lh)return it;Lh=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),j=Symbol.iterator;function C(v){return v===null||typeof v!="object"?null:(v=j&&v[j]||v["@@iterator"],typeof v=="function"?v:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,G={};function X(v,R,B){this.props=v,this.context=R,this.refs=G,this.updater=B||L}X.prototype.isReactComponent={},X.prototype.setState=function(v,R){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,R,"setState")},X.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function H(){}H.prototype=X.prototype;function J(v,R,B){this.props=v,this.context=R,this.refs=G,this.updater=B||L}var Z=J.prototype=new H;Z.constructor=J,q(Z,X.prototype),Z.isPureReactComponent=!0;var tt=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},et=Object.prototype.hasOwnProperty;function $(v,R,B,Y,V,W){return B=W.ref,{$$typeof:u,type:v,key:R,ref:B!==void 0?B:null,props:W}}function pt(v,R){return $(v.type,R,void 0,void 0,void 0,v.props)}function gt(v){return typeof v=="object"&&v!==null&&v.$$typeof===u}function ut(v){var R={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(B){return R[B]})}var Tt=/\/+/g;function Nt(v,R){return typeof v=="object"&&v!==null&&v.key!=null?ut(""+v.key):R.toString(36)}function oe(){}function _e(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(oe,oe):(v.status="pending",v.then(function(R){v.status==="pending"&&(v.status="fulfilled",v.value=R)},function(R){v.status==="pending"&&(v.status="rejected",v.reason=R)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function Ut(v,R,B,Y,V){var W=typeof v;(W==="undefined"||W==="boolean")&&(v=null);var I=!1;if(v===null)I=!0;else switch(W){case"bigint":case"string":case"number":I=!0;break;case"object":switch(v.$$typeof){case u:case c:I=!0;break;case E:return I=v._init,Ut(I(v._payload),R,B,Y,V)}}if(I)return V=V(v),I=Y===""?"."+Nt(v,0):Y,tt(V)?(B="",I!=null&&(B=I.replace(Tt,"$&/")+"/"),Ut(V,R,B,"",function(Pt){return Pt})):V!=null&&(gt(V)&&(V=pt(V,B+(V.key==null||v&&v.key===V.key?"":(""+V.key).replace(Tt,"$&/")+"/")+I)),R.push(V)),1;I=0;var Yt=Y===""?".":Y+":";if(tt(v))for(var vt=0;vt<v.length;vt++)Y=v[vt],W=Yt+Nt(Y,vt),I+=Ut(Y,R,B,W,V);else if(vt=C(v),typeof vt=="function")for(v=vt.call(v),vt=0;!(Y=v.next()).done;)Y=Y.value,W=Yt+Nt(Y,vt++),I+=Ut(Y,R,B,W,V);else if(W==="object"){if(typeof v.then=="function")return Ut(_e(v),R,B,Y,V);throw R=String(v),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return I}function N(v,R,B){if(v==null)return v;var Y=[],V=0;return Ut(v,Y,"","",function(W){return R.call(B,W,V++)}),Y}function Q(v){if(v._status===-1){var R=v._result;R=R(),R.then(function(B){(v._status===0||v._status===-1)&&(v._status=1,v._result=B)},function(B){(v._status===0||v._status===-1)&&(v._status=2,v._result=B)}),v._status===-1&&(v._status=0,v._result=R)}if(v._status===1)return v._result.default;throw v._result}var P=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function rt(){}return it.Children={map:N,forEach:function(v,R,B){N(v,function(){R.apply(this,arguments)},B)},count:function(v){var R=0;return N(v,function(){R++}),R},toArray:function(v){return N(v,function(R){return R})||[]},only:function(v){if(!gt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},it.Component=X,it.Fragment=o,it.Profiler=f,it.PureComponent=J,it.StrictMode=r,it.Suspense=g,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,it.__COMPILER_RUNTIME={__proto__:null,c:function(v){return K.H.useMemoCache(v)}},it.cache=function(v){return function(){return v.apply(null,arguments)}},it.cloneElement=function(v,R,B){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var Y=q({},v.props),V=v.key,W=void 0;if(R!=null)for(I in R.ref!==void 0&&(W=void 0),R.key!==void 0&&(V=""+R.key),R)!et.call(R,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&R.ref===void 0||(Y[I]=R[I]);var I=arguments.length-2;if(I===1)Y.children=B;else if(1<I){for(var Yt=Array(I),vt=0;vt<I;vt++)Yt[vt]=arguments[vt+2];Y.children=Yt}return $(v.type,V,void 0,void 0,W,Y)},it.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:h,_context:v},v},it.createElement=function(v,R,B){var Y,V={},W=null;if(R!=null)for(Y in R.key!==void 0&&(W=""+R.key),R)et.call(R,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(V[Y]=R[Y]);var I=arguments.length-2;if(I===1)V.children=B;else if(1<I){for(var Yt=Array(I),vt=0;vt<I;vt++)Yt[vt]=arguments[vt+2];V.children=Yt}if(v&&v.defaultProps)for(Y in I=v.defaultProps,I)V[Y]===void 0&&(V[Y]=I[Y]);return $(v,W,void 0,void 0,null,V)},it.createRef=function(){return{current:null}},it.forwardRef=function(v){return{$$typeof:z,render:v}},it.isValidElement=gt,it.lazy=function(v){return{$$typeof:E,_payload:{_status:-1,_result:v},_init:Q}},it.memo=function(v,R){return{$$typeof:m,type:v,compare:R===void 0?null:R}},it.startTransition=function(v){var R=K.T,B={};K.T=B;try{var Y=v(),V=K.S;V!==null&&V(B,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(rt,P)}catch(W){P(W)}finally{K.T=R}},it.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},it.use=function(v){return K.H.use(v)},it.useActionState=function(v,R,B){return K.H.useActionState(v,R,B)},it.useCallback=function(v,R){return K.H.useCallback(v,R)},it.useContext=function(v){return K.H.useContext(v)},it.useDebugValue=function(){},it.useDeferredValue=function(v,R){return K.H.useDeferredValue(v,R)},it.useEffect=function(v,R,B){var Y=K.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(v,R)},it.useId=function(){return K.H.useId()},it.useImperativeHandle=function(v,R,B){return K.H.useImperativeHandle(v,R,B)},it.useInsertionEffect=function(v,R){return K.H.useInsertionEffect(v,R)},it.useLayoutEffect=function(v,R){return K.H.useLayoutEffect(v,R)},it.useMemo=function(v,R){return K.H.useMemo(v,R)},it.useOptimistic=function(v,R){return K.H.useOptimistic(v,R)},it.useReducer=function(v,R,B){return K.H.useReducer(v,R,B)},it.useRef=function(v){return K.H.useRef(v)},it.useState=function(v){return K.H.useState(v)},it.useSyncExternalStore=function(v,R,B){return K.H.useSyncExternalStore(v,R,B)},it.useTransition=function(){return K.H.useTransition()},it.version="19.1.1",it}var Gh;function Mo(){return Gh||(Gh=1,fo.exports=jg()),fo.exports}var O=Mo();const iu=Og(O);var ho={exports:{}},au={},mo={exports:{}},po={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function Mg(){return Xh||(Xh=1,function(u){function c(N,Q){var P=N.length;N.push(Q);t:for(;0<P;){var rt=P-1>>>1,v=N[rt];if(0<f(v,Q))N[rt]=Q,N[P]=v,P=rt;else break t}}function o(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var Q=N[0],P=N.pop();if(P!==Q){N[0]=P;t:for(var rt=0,v=N.length,R=v>>>1;rt<R;){var B=2*(rt+1)-1,Y=N[B],V=B+1,W=N[V];if(0>f(Y,P))V<v&&0>f(W,Y)?(N[rt]=W,N[V]=P,rt=V):(N[rt]=Y,N[B]=P,rt=B);else if(V<v&&0>f(W,P))N[rt]=W,N[V]=P,rt=V;else break t}}return Q}function f(N,Q){var P=N.sortIndex-Q.sortIndex;return P!==0?P:N.id-Q.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var y=Date,z=y.now();u.unstable_now=function(){return y.now()-z}}var g=[],m=[],E=1,j=null,C=3,L=!1,q=!1,G=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function tt(N){for(var Q=o(m);Q!==null;){if(Q.callback===null)r(m);else if(Q.startTime<=N)r(m),Q.sortIndex=Q.expirationTime,c(g,Q);else break;Q=o(m)}}function K(N){if(G=!1,tt(N),!q)if(o(g)!==null)q=!0,et||(et=!0,Nt());else{var Q=o(m);Q!==null&&Ut(K,Q.startTime-N)}}var et=!1,$=-1,pt=5,gt=-1;function ut(){return X?!0:!(u.unstable_now()-gt<pt)}function Tt(){if(X=!1,et){var N=u.unstable_now();gt=N;var Q=!0;try{t:{q=!1,G&&(G=!1,J($),$=-1),L=!0;var P=C;try{e:{for(tt(N),j=o(g);j!==null&&!(j.expirationTime>N&&ut());){var rt=j.callback;if(typeof rt=="function"){j.callback=null,C=j.priorityLevel;var v=rt(j.expirationTime<=N);if(N=u.unstable_now(),typeof v=="function"){j.callback=v,tt(N),Q=!0;break e}j===o(g)&&r(g),tt(N)}else r(g);j=o(g)}if(j!==null)Q=!0;else{var R=o(m);R!==null&&Ut(K,R.startTime-N),Q=!1}}break t}finally{j=null,C=P,L=!1}Q=void 0}}finally{Q?Nt():et=!1}}}var Nt;if(typeof Z=="function")Nt=function(){Z(Tt)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,_e=oe.port2;oe.port1.onmessage=Tt,Nt=function(){_e.postMessage(null)}}else Nt=function(){H(Tt,0)};function Ut(N,Q){$=H(function(){N(u.unstable_now())},Q)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(N){N.callback=null},u.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pt=0<N?Math.floor(1e3/N):5},u.unstable_getCurrentPriorityLevel=function(){return C},u.unstable_next=function(N){switch(C){case 1:case 2:case 3:var Q=3;break;default:Q=C}var P=C;C=Q;try{return N()}finally{C=P}},u.unstable_requestPaint=function(){X=!0},u.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=C;C=N;try{return Q()}finally{C=P}},u.unstable_scheduleCallback=function(N,Q,P){var rt=u.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?rt+P:rt):P=rt,N){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=P+v,N={id:E++,callback:Q,priorityLevel:N,startTime:P,expirationTime:v,sortIndex:-1},P>rt?(N.sortIndex=P,c(m,N),o(g)===null&&N===o(m)&&(G?(J($),$=-1):G=!0,Ut(K,P-rt))):(N.sortIndex=v,c(g,N),q||L||(q=!0,et||(et=!0,Nt()))),N},u.unstable_shouldYield=ut,u.unstable_wrapCallback=function(N){var Q=C;return function(){var P=C;C=Q;try{return N.apply(this,arguments)}finally{C=P}}}}(po)),po}var Qh;function Cg(){return Qh||(Qh=1,mo.exports=Mg()),mo.exports}var go={exports:{}},ee={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function Ug(){if(Zh)return ee;Zh=1;var u=Mo();function c(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)m+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(g,m,E){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:j==null?null:""+j,children:g,containerInfo:m,implementation:E}}var y=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ee.createPortal=function(g,m){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(c(299));return h(g,m,null,E)},ee.flushSync=function(g){var m=y.T,E=r.p;try{if(y.T=null,r.p=2,g)return g()}finally{y.T=m,r.p=E,r.d.f()}},ee.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(g,m))},ee.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},ee.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var E=m.as,j=z(E,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,L=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;E==="style"?r.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:j,integrity:C,fetchPriority:L}):E==="script"&&r.d.X(g,{crossOrigin:j,integrity:C,fetchPriority:L,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ee.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var E=z(m.as,m.crossOrigin);r.d.M(g,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(g)},ee.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var E=m.as,j=z(E,m.crossOrigin);r.d.L(g,E,{crossOrigin:j,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ee.preloadModule=function(g,m){if(typeof g=="string")if(m){var E=z(m.as,m.crossOrigin);r.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(g)},ee.requestFormReset=function(g){r.d.r(g)},ee.unstable_batchedUpdates=function(g,m){return g(m)},ee.useFormState=function(g,m,E){return y.H.useFormState(g,m,E)},ee.useFormStatus=function(){return y.H.useHostTransitionStatus()},ee.version="19.1.1",ee}var Vh;function Hg(){if(Vh)return go.exports;Vh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),go.exports=Ug(),go.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Bg(){if(Kh)return au;Kh=1;var u=Cg(),c=Mo(),o=Hg();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function z(t){if(h(t)!==t)throw Error(r(188))}function g(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(r(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return z(n),t;if(i===l)return z(n),e;i=i.sibling}throw Error(r(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,d=n.child;d;){if(d===a){s=!0,a=n,l=i;break}if(d===l){s=!0,l=n,a=i;break}d=d.sibling}if(!s){for(d=i.child;d;){if(d===a){s=!0,a=i,l=n;break}if(d===l){s=!0,l=i,a=n;break}d=d.sibling}if(!s)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var E=Object.assign,j=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),tt=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),gt=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Nt(t){return t===null||typeof t!="object"?null:(t=Tt&&t[Tt]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case q:return"Fragment";case X:return"Profiler";case G:return"StrictMode";case K:return"Suspense";case et:return"SuspenseList";case gt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case Z:return(t.displayName||"Context")+".Provider";case J:return(t._context.displayName||"Context")+".Consumer";case tt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:_e(t.type)||"Memo";case pt:e=t._payload,t=t._init;try{return _e(t(e))}catch{}}return null}var Ut=Array.isArray,N=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},rt=[],v=-1;function R(t){return{current:t}}function B(t){0>v||(t.current=rt[v],rt[v]=null,v--)}function Y(t,e){v++,rt[v]=t.current,t.current=e}var V=R(null),W=R(null),I=R(null),Yt=R(null);function vt(t,e){switch(Y(I,e),Y(W,t),Y(V,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?dh(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=dh(e),t=hh(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}B(V),Y(V,t)}function Pt(){B(V),B(W),B(I)}function Ha(t){t.memoizedState!==null&&Y(Yt,t);var e=V.current,a=hh(e,t.type);e!==a&&(Y(W,t),Y(V,a))}function Ve(t){W.current===t&&(B(V),B(W)),Yt.current===t&&(B(Yt),Wn._currentValue=P)}var xe=Object.prototype.hasOwnProperty,Fi=u.unstable_scheduleCallback,Pi=u.unstable_cancelCallback,cp=u.unstable_shouldYield,rp=u.unstable_requestPaint,He=u.unstable_now,op=u.unstable_getCurrentPriorityLevel,Vo=u.unstable_ImmediatePriority,Ko=u.unstable_UserBlockingPriority,pu=u.unstable_NormalPriority,sp=u.unstable_LowPriority,ko=u.unstable_IdlePriority,fp=u.log,dp=u.unstable_setDisableYieldValue,ln=null,se=null;function fa(t){if(typeof fp=="function"&&dp(t),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(ln,t)}catch{}}var fe=Math.clz32?Math.clz32:pp,hp=Math.log,mp=Math.LN2;function pp(t){return t>>>=0,t===0?32:31-(hp(t)/mp|0)|0}var gu=256,yu=4194304;function Ba(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vu(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=Ba(l):(s&=d,s!==0?n=Ba(s):a||(a=d&~t,a!==0&&(n=Ba(a))))):(d=l&~i,d!==0?n=Ba(d):s!==0?n=Ba(s):a||(a=l&~t,a!==0&&(n=Ba(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function nn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function gp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jo(){var t=gu;return gu<<=1,(gu&4194048)===0&&(gu=256),t}function $o(){var t=yu;return yu<<=1,(yu&62914560)===0&&(yu=4194304),t}function Ii(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function un(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yp(t,e,a,l,n,i){var s=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var d=t.entanglements,p=t.expirationTimes,T=t.hiddenUpdates;for(a=s&~a;0<a;){var _=31-fe(a),U=1<<_;d[_]=0,p[_]=-1;var D=T[_];if(D!==null)for(T[_]=null,_=0;_<D.length;_++){var w=D[_];w!==null&&(w.lane&=-536870913)}a&=~U}l!==0&&Wo(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(s&~e))}function Wo(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-fe(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Fo(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-fe(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function tc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ec(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Po(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:jh(t.type))}function vp(t,e){var a=Q.p;try{return Q.p=t,e()}finally{Q.p=a}}var da=Math.random().toString(36).slice(2),It="__reactFiber$"+da,le="__reactProps$"+da,rl="__reactContainer$"+da,ac="__reactEvents$"+da,bp="__reactListeners$"+da,xp="__reactHandles$"+da,Io="__reactResources$"+da,cn="__reactMarker$"+da;function lc(t){delete t[It],delete t[le],delete t[ac],delete t[bp],delete t[xp]}function ol(t){var e=t[It];if(e)return e;for(var a=t.parentNode;a;){if(e=a[rl]||a[It]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=yh(t);t!==null;){if(a=t[It])return a;t=yh(t)}return e}t=a,a=t.parentNode}return null}function sl(t){if(t=t[It]||t[rl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function rn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function fl(t){var e=t[Io];return e||(e=t[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Zt(t){t[cn]=!0}var ts=new Set,es={};function Ya(t,e){dl(t,e),dl(t+"Capture",e)}function dl(t,e){for(es[t]=e,t=0;t<e.length;t++)ts.add(e[t])}var Sp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),as={},ls={};function Ep(t){return xe.call(ls,t)?!0:xe.call(as,t)?!1:Sp.test(t)?ls[t]=!0:(as[t]=!0,!1)}function bu(t,e,a){if(Ep(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function xu(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ke(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}var nc,ns;function hl(t){if(nc===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||"",ns=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nc+t+ns}var uc=!1;function ic(t,e){if(!t||uc)return"";uc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(w){var D=w}Reflect.construct(t,[],U)}else{try{U.call()}catch(w){D=w}t.call(U.prototype)}}else{try{throw Error()}catch(w){D=w}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(w){if(w&&D&&typeof w.stack=="string")return[w.stack,D.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],d=i[1];if(s&&d){var p=s.split(`
`),T=d.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<T.length&&!T[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===T.length)for(l=p.length-1,n=T.length-1;1<=l&&0<=n&&p[l]!==T[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==T[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==T[n]){var _=`
`+p[l].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=l&&0<=n);break}}}finally{uc=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?hl(a):""}function Ap(t){switch(t.tag){case 26:case 27:case 5:return hl(t.type);case 16:return hl("Lazy");case 13:return hl("Suspense");case 19:return hl("SuspenseList");case 0:case 15:return ic(t.type,!1);case 11:return ic(t.type.render,!1);case 1:return ic(t.type,!0);case 31:return hl("Activity");default:return""}}function us(t){try{var e="";do e+=Ap(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function is(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zp(t){var e=is(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){l=""+s,i.call(this,s)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(s){l=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Su(t){t._valueTracker||(t._valueTracker=zp(t))}function cs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=is(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function Eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Tp=/[\n"\\]/g;function Ee(t){return t.replace(Tp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function cc(t,e,a,l,n,i,s,d){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Se(e)):t.value!==""+Se(e)&&(t.value=""+Se(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?rc(t,s,Se(e)):a!=null?rc(t,s,Se(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+Se(d):t.removeAttribute("name")}function rs(t,e,a,l,n,i,s,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;a=a!=null?""+Se(a):"",e=e!=null?""+Se(e):a,d||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=d?t.checked:!!l,t.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function rc(t,e,a){e==="number"&&Eu(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ml(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Se(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function os(t,e,a){if(e!=null&&(e=""+Se(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Se(a):""}function ss(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(r(92));if(Ut(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Se(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function pl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fs(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Rp.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ds(t,e,a){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&fs(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&fs(t,i,e[i])}function oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Au(t){return wp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var sc=null;function fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gl=null,yl=null;function hs(t){var e=sl(t);if(e&&(t=e.stateNode)){var a=t[le]||null;t:switch(t=e.stateNode,e.type){case"input":if(cc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[le]||null;if(!n)throw Error(r(90));cc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&cs(l)}break t;case"textarea":os(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&ml(t,!!a.multiple,e,!1)}}}var dc=!1;function ms(t,e,a){if(dc)return t(e,a);dc=!0;try{var l=t(e);return l}finally{if(dc=!1,(gl!==null||yl!==null)&&(ri(),gl&&(e=gl,t=yl,yl=gl=null,hs(e),t)))for(e=0;e<t.length;e++)hs(t[e])}}function on(t,e){var a=t.stateNode;if(a===null)return null;var l=a[le]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,e,typeof a));return a}var ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hc=!1;if(ke)try{var sn={};Object.defineProperty(sn,"passive",{get:function(){hc=!0}}),window.addEventListener("test",sn,sn),window.removeEventListener("test",sn,sn)}catch{hc=!1}var ha=null,mc=null,zu=null;function ps(){if(zu)return zu;var t,e=mc,a=e.length,l,n="value"in ha?ha.value:ha.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var s=a-t;for(l=1;l<=s&&e[a-l]===n[i-l];l++);return zu=n.slice(t,1<l?1-l:void 0)}function Tu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ru(){return!0}function gs(){return!1}function ne(t){function e(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(a=t[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ru:gs,this.isPropagationStopped=gs,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ru)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ru)},persist:function(){},isPersistent:Ru}),e}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=ne(qa),fn=E({},qa,{view:0,detail:0}),Op=ne(fn),pc,gc,dn,wu=E({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==dn&&(dn&&t.type==="mousemove"?(pc=t.screenX-dn.screenX,gc=t.screenY-dn.screenY):gc=pc=0,dn=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),ys=ne(wu),Np=E({},wu,{dataTransfer:0}),_p=ne(Np),jp=E({},fn,{relatedTarget:0}),yc=ne(jp),Mp=E({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=ne(Mp),Up=E({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hp=ne(Up),Bp=E({},qa,{data:0}),vs=ne(Bp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lp[t])?!!e[t]:!1}function vc(){return Gp}var Xp=E({},fn,{key:function(t){if(t.key){var e=Yp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(t){return t.type==="keypress"?Tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qp=ne(Xp),Zp=E({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=ne(Zp),Vp=E({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),Kp=ne(Vp),kp=E({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=ne(kp),$p=E({},wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=ne($p),Fp=E({},qa,{newState:0,oldState:0}),Pp=ne(Fp),Ip=[9,13,27,32],bc=ke&&"CompositionEvent"in window,hn=null;ke&&"documentMode"in document&&(hn=document.documentMode);var t0=ke&&"TextEvent"in window&&!hn,xs=ke&&(!bc||hn&&8<hn&&11>=hn),Ss=" ",Es=!1;function As(t,e){switch(t){case"keyup":return Ip.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vl=!1;function e0(t,e){switch(t){case"compositionend":return zs(e);case"keypress":return e.which!==32?null:(Es=!0,Ss);case"textInput":return t=e.data,t===Ss&&Es?null:t;default:return null}}function a0(t,e){if(vl)return t==="compositionend"||!bc&&As(t,e)?(t=ps(),zu=mc=ha=null,vl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xs&&e.locale!=="ko"?null:e.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l0[t.type]:e==="textarea"}function Rs(t,e,a,l){gl?yl?yl.push(l):yl=[l]:gl=l,e=mi(e,"onChange"),0<e.length&&(a=new Du("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var mn=null,pn=null;function n0(t){ch(t,0)}function Ou(t){var e=rn(t);if(cs(e))return t}function Ds(t,e){if(t==="change")return e}var ws=!1;if(ke){var xc;if(ke){var Sc="oninput"in document;if(!Sc){var Os=document.createElement("div");Os.setAttribute("oninput","return;"),Sc=typeof Os.oninput=="function"}xc=Sc}else xc=!1;ws=xc&&(!document.documentMode||9<document.documentMode)}function Ns(){mn&&(mn.detachEvent("onpropertychange",_s),pn=mn=null)}function _s(t){if(t.propertyName==="value"&&Ou(pn)){var e=[];Rs(e,pn,t,fc(t)),ms(n0,e)}}function u0(t,e,a){t==="focusin"?(Ns(),mn=e,pn=a,mn.attachEvent("onpropertychange",_s)):t==="focusout"&&Ns()}function i0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ou(pn)}function c0(t,e){if(t==="click")return Ou(e)}function r0(t,e){if(t==="input"||t==="change")return Ou(e)}function o0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var de=typeof Object.is=="function"?Object.is:o0;function gn(t,e){if(de(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!xe.call(e,n)||!de(t[n],e[n]))return!1}return!0}function js(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ms(t,e){var a=js(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=js(a)}}function Cs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Us(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Eu(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Eu(t.document)}return e}function Ec(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var s0=ke&&"documentMode"in document&&11>=document.documentMode,bl=null,Ac=null,yn=null,zc=!1;function Hs(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zc||bl==null||bl!==Eu(l)||(l=bl,"selectionStart"in l&&Ec(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yn&&gn(yn,l)||(yn=l,l=mi(Ac,"onSelect"),0<l.length&&(e=new Du("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=bl)))}function La(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var xl={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Tc={},Bs={};ke&&(Bs=document.createElement("div").style,"AnimationEvent"in window||(delete xl.animationend.animation,delete xl.animationiteration.animation,delete xl.animationstart.animation),"TransitionEvent"in window||delete xl.transitionend.transition);function Ga(t){if(Tc[t])return Tc[t];if(!xl[t])return t;var e=xl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Bs)return Tc[t]=e[a];return t}var Ys=Ga("animationend"),qs=Ga("animationiteration"),Ls=Ga("animationstart"),f0=Ga("transitionrun"),d0=Ga("transitionstart"),h0=Ga("transitioncancel"),Gs=Ga("transitionend"),Xs=new Map,Rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rc.push("scrollEnd");function je(t,e){Xs.set(t,e),Ya(e,[t])}var Qs=new WeakMap;function Ae(t,e){if(typeof t=="object"&&t!==null){var a=Qs.get(t);return a!==void 0?a:(e={value:t,source:e,stack:us(e)},Qs.set(t,e),e)}return{value:t,source:e,stack:us(e)}}var ze=[],Sl=0,Dc=0;function Nu(){for(var t=Sl,e=Dc=Sl=0;e<t;){var a=ze[e];ze[e++]=null;var l=ze[e];ze[e++]=null;var n=ze[e];ze[e++]=null;var i=ze[e];if(ze[e++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&Zs(a,n,i)}}function _u(t,e,a,l){ze[Sl++]=t,ze[Sl++]=e,ze[Sl++]=a,ze[Sl++]=l,Dc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function wc(t,e,a,l){return _u(t,e,a,l),ju(t)}function El(t,e){return _u(t,null,null,e),ju(t)}function Zs(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-fe(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function ju(t){if(50<Xn)throw Xn=0,Cr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Al={};function m0(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,a,l){return new m0(t,e,a,l)}function Oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Je(t,e){var a=t.alternate;return a===null?(a=he(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vs(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Mu(t,e,a,l,n,i){var s=0;if(l=t,typeof t=="function")Oc(t)&&(s=1);else if(typeof t=="string")s=gg(t,a,V.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case gt:return t=he(31,a,e,n),t.elementType=gt,t.lanes=i,t;case q:return Xa(a.children,n,i,e);case G:s=8,n|=24;break;case X:return t=he(12,a,e,n|2),t.elementType=X,t.lanes=i,t;case K:return t=he(13,a,e,n),t.elementType=K,t.lanes=i,t;case et:return t=he(19,a,e,n),t.elementType=et,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:case Z:s=10;break t;case J:s=9;break t;case tt:s=11;break t;case $:s=14;break t;case pt:s=16,l=null;break t}s=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return e=he(s,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function Xa(t,e,a,l){return t=he(7,t,l,e),t.lanes=a,t}function Nc(t,e,a){return t=he(6,t,null,e),t.lanes=a,t}function _c(t,e,a){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var zl=[],Tl=0,Cu=null,Uu=0,Te=[],Re=0,Qa=null,$e=1,We="";function Za(t,e){zl[Tl++]=Uu,zl[Tl++]=Cu,Cu=t,Uu=e}function Ks(t,e,a){Te[Re++]=$e,Te[Re++]=We,Te[Re++]=Qa,Qa=t;var l=$e;t=We;var n=32-fe(l)-1;l&=~(1<<n),a+=1;var i=32-fe(e)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,$e=1<<32-fe(e)+n|a<<n|l,We=i+t}else $e=1<<i|a<<n|l,We=t}function jc(t){t.return!==null&&(Za(t,1),Ks(t,1,0))}function Mc(t){for(;t===Cu;)Cu=zl[--Tl],zl[Tl]=null,Uu=zl[--Tl],zl[Tl]=null;for(;t===Qa;)Qa=Te[--Re],Te[Re]=null,We=Te[--Re],Te[Re]=null,$e=Te[--Re],Te[Re]=null}var ae=null,Mt=null,yt=!1,Va=null,Be=!1,Cc=Error(r(519));function Ka(t){var e=Error(r(418,""));throw xn(Ae(e,t)),Cc}function ks(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[It]=t,e[le]=l,a){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(a=0;a<Zn.length;a++)dt(Zn[a],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),rs(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Su(e);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),ss(e,l.value,l.defaultValue,l.children),Su(e)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||fh(e.textContent,a)?(l.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),l.onScroll!=null&&dt("scroll",e),l.onScrollEnd!=null&&dt("scrollend",e),l.onClick!=null&&(e.onclick=pi),e=!0):e=!1,e||Ka(t)}function Js(t){for(ae=t.return;ae;)switch(ae.tag){case 5:case 13:Be=!1;return;case 27:case 3:Be=!0;return;default:ae=ae.return}}function vn(t){if(t!==ae)return!1;if(!yt)return Js(t),yt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wr(t.type,t.memoizedProps)),a=!a),a&&Mt&&Ka(t),Js(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Mt=Ce(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Mt=null}}else e===27?(e=Mt,Oa(t.type)?(t=to,to=null,Mt=t):Mt=e):Mt=ae?Ce(t.stateNode.nextSibling):null;return!0}function bn(){Mt=ae=null,yt=!1}function $s(){var t=Va;return t!==null&&(ce===null?ce=t:ce.push.apply(ce,t),Va=null),t}function xn(t){Va===null?Va=[t]:Va.push(t)}var Uc=R(null),ka=null,Fe=null;function ma(t,e,a){Y(Uc,e._currentValue),e._currentValue=a}function Pe(t){t._currentValue=Uc.current,B(Uc)}function Hc(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Bc(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;t:for(;i!==null;){var d=i;i=n;for(var p=0;p<e.length;p++)if(d.context===e[p]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),Hc(i.return,a,t),l||(s=null);break t}i=d.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(r(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Hc(s,a,t),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function Sn(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var d=n.type;de(n.pendingProps.value,s.value)||(t!==null?t.push(d):t=[d])}}else if(n===Yt.current){if(s=n.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Wn):t=[Wn])}n=n.return}t!==null&&Bc(e,t,a,l),e.flags|=262144}function Hu(t){for(t=t.firstContext;t!==null;){if(!de(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ja(t){ka=t,Fe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function te(t){return Ws(ka,t)}function Bu(t,e){return ka===null&&Ja(t),Ws(t,e)}function Ws(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Fe===null){if(t===null)throw Error(r(308));Fe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Fe=Fe.next=e;return a}var p0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},g0=u.unstable_scheduleCallback,y0=u.unstable_NormalPriority,Xt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yc(){return{controller:new p0,data:new Map,refCount:0}}function En(t){t.refCount--,t.refCount===0&&g0(y0,function(){t.controller.abort()})}var An=null,qc=0,Rl=0,Dl=null;function v0(t,e){if(An===null){var a=An=[];qc=0,Rl=Gr(),Dl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return qc++,e.then(Fs,Fs),e}function Fs(){if(--qc===0&&An!==null){Dl!==null&&(Dl.status="fulfilled");var t=An;An=null,Rl=0,Dl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function b0(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ps=N.S;N.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&v0(t,e),Ps!==null&&Ps(t,e)};var $a=R(null);function Lc(){var t=$a.current;return t!==null?t:Dt.pooledCache}function Yu(t,e){e===null?Y($a,$a.current):Y($a,e.pool)}function Is(){var t=Lc();return t===null?null:{parent:Xt._currentValue,pool:t}}var zn=Error(r(460)),tf=Error(r(474)),qu=Error(r(542)),Gc={then:function(){}};function ef(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Lu(){}function af(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Lu,Lu),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,nf(t),t;default:if(typeof e.status=="string")e.then(Lu,Lu);else{if(t=Dt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,nf(t),t}throw Tn=e,zn}}var Tn=null;function lf(){if(Tn===null)throw Error(r(459));var t=Tn;return Tn=null,t}function nf(t){if(t===zn||t===qu)throw Error(r(483))}var pa=!1;function Xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=ju(t),Zs(t,null,a),e}return _u(t,l,e,a),ju(t)}function Rn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Fo(t,a)}}function Zc(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Vc=!1;function Dn(){if(Vc){var t=Dl;if(t!==null)throw t}}function wn(t,e,a,l){Vc=!1;var n=t.updateQueue;pa=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var p=d,T=p.next;p.next=null,s===null?i=T:s.next=T,s=p;var _=t.alternate;_!==null&&(_=_.updateQueue,d=_.lastBaseUpdate,d!==s&&(d===null?_.firstBaseUpdate=T:d.next=T,_.lastBaseUpdate=p))}if(i!==null){var U=n.baseState;s=0,_=T=p=null,d=i;do{var D=d.lane&-536870913,w=D!==d.lane;if(w?(ht&D)===D:(l&D)===D){D!==0&&D===Rl&&(Vc=!0),_!==null&&(_=_.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var nt=t,at=d;D=e;var zt=a;switch(at.tag){case 1:if(nt=at.payload,typeof nt=="function"){U=nt.call(zt,U,D);break t}U=nt;break t;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=at.payload,D=typeof nt=="function"?nt.call(zt,U,D):nt,D==null)break t;U=E({},U,D);break t;case 2:pa=!0}}D=d.callback,D!==null&&(t.flags|=64,w&&(t.flags|=8192),w=n.callbacks,w===null?n.callbacks=[D]:w.push(D))}else w={lane:D,tag:d.tag,payload:d.payload,callback:d.callback,next:null},_===null?(T=_=w,p=U):_=_.next=w,s|=D;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;w=d,d=w.next,w.next=null,n.lastBaseUpdate=w,n.shared.pending=null}}while(!0);_===null&&(p=U),n.baseState=p,n.firstBaseUpdate=T,n.lastBaseUpdate=_,i===null&&(n.shared.lanes=0),Ta|=s,t.lanes=s,t.memoizedState=U}}function uf(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function cf(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)uf(a[t],e)}var wl=R(null),Gu=R(0);function rf(t,e){t=ua,Y(Gu,t),Y(wl,e),ua=t|e.baseLanes}function Kc(){Y(Gu,ua),Y(wl,wl.current)}function kc(){ua=Gu.current,B(wl),B(Gu)}var va=0,ot=null,Et=null,qt=null,Xu=!1,Ol=!1,Wa=!1,Qu=0,On=0,Nl=null,x0=0;function Ht(){throw Error(r(321))}function Jc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!de(t[a],e[a]))return!1;return!0}function $c(t,e,a,l,n,i){return va=i,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?Vf:Kf,Wa=!1,i=a(l,n),Wa=!1,Ol&&(i=sf(e,a,l,n)),of(t),i}function of(t){N.H=$u;var e=Et!==null&&Et.next!==null;if(va=0,qt=Et=ot=null,Xu=!1,On=0,Nl=null,e)throw Error(r(300));t===null||Vt||(t=t.dependencies,t!==null&&Hu(t)&&(Vt=!0))}function sf(t,e,a,l){ot=t;var n=0;do{if(Ol&&(Nl=null),On=0,Ol=!1,25<=n)throw Error(r(301));if(n+=1,qt=Et=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}N.H=D0,i=e(a,l)}while(Ol);return i}function S0(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?Nn(e):e,t=t.useState()[0],(Et!==null?Et.memoizedState:null)!==t&&(ot.flags|=1024),e}function Wc(){var t=Qu!==0;return Qu=0,t}function Fc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Pc(t){if(Xu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Xu=!1}va=0,qt=Et=ot=null,Ol=!1,On=Qu=0,Nl=null}function ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?ot.memoizedState=qt=t:qt=qt.next=t,qt}function Lt(){if(Et===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=qt===null?ot.memoizedState:qt.next;if(e!==null)qt=e,Et=t;else{if(t===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},qt===null?ot.memoizedState=qt=t:qt=qt.next=t}return qt}function Ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nn(t){var e=On;return On+=1,Nl===null&&(Nl=[]),t=af(Nl,t,e),e=ot,(qt===null?e.memoizedState:qt.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?Vf:Kf),t}function Zu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Nn(t);if(t.$$typeof===Z)return te(t)}throw Error(r(438,String(t)))}function tr(t){var e=null,a=ot.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=ot.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Ic(),ot.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=ut;return e.index++,a}function Ie(t,e){return typeof e=="function"?e(t):e}function Vu(t){var e=Lt();return er(e,Et,t)}function er(t,e,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var d=s=null,p=null,T=e,_=!1;do{var U=T.lane&-536870913;if(U!==T.lane?(ht&U)===U:(va&U)===U){var D=T.revertLane;if(D===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),U===Rl&&(_=!0);else if((va&D)===D){T=T.next,D===Rl&&(_=!0);continue}else U={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(d=p=U,s=i):p=p.next=U,ot.lanes|=D,Ta|=D;U=T.action,Wa&&a(i,U),i=T.hasEagerState?T.eagerState:a(i,U)}else D={lane:U,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},p===null?(d=p=D,s=i):p=p.next=D,ot.lanes|=U,Ta|=U;T=T.next}while(T!==null&&T!==e);if(p===null?s=i:p.next=d,!de(i,t.memoizedState)&&(Vt=!0,_&&(a=Dl,a!==null)))throw a;t.memoizedState=i,t.baseState=s,t.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function ar(t){var e=Lt(),a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=t(i,s.action),s=s.next;while(s!==n);de(i,e.memoizedState)||(Vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function ff(t,e,a){var l=ot,n=Lt(),i=yt;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=e();var s=!de((Et||n).memoizedState,a);s&&(n.memoizedState=a,Vt=!0),n=n.queue;var d=mf.bind(null,l,n,t);if(_n(2048,8,d,[t]),n.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(l.flags|=2048,_l(9,Ku(),hf.bind(null,l,n,a,e),null),Dt===null)throw Error(r(349));i||(va&124)!==0||df(l,e,a)}return a}function df(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ot.updateQueue,e===null?(e=Ic(),ot.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function hf(t,e,a,l){e.value=a,e.getSnapshot=l,pf(e)&&gf(t)}function mf(t,e,a){return a(function(){pf(e)&&gf(t)})}function pf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!de(t,a)}catch{return!0}}function gf(t){var e=El(t,2);e!==null&&ve(e,t,2)}function lr(t){var e=ue();if(typeof t=="function"){var a=t;if(t=a(),Wa){fa(!0);try{a()}finally{fa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:t},e}function yf(t,e,a,l){return t.baseState=a,er(t,Et,typeof l=="function"?l:Ie)}function E0(t,e,a,l,n){if(Ju(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};N.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,vf(e,i)):(i.next=a.next,e.pending=a.next=i)}}function vf(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=N.T,s={};N.T=s;try{var d=a(n,l),p=N.S;p!==null&&p(s,d),bf(t,e,d)}catch(T){nr(t,e,T)}finally{N.T=i}}else try{i=a(n,l),bf(t,e,i)}catch(T){nr(t,e,T)}}function bf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){xf(t,e,l)},function(l){return nr(t,e,l)}):xf(t,e,a)}function xf(t,e,a){e.status="fulfilled",e.value=a,Sf(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,vf(t,a)))}function nr(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Sf(e),e=e.next;while(e!==l)}t.action=null}function Sf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ef(t,e){return e}function Af(t,e){if(yt){var a=Dt.formState;if(a!==null){t:{var l=ot;if(yt){if(Mt){e:{for(var n=Mt,i=Be;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ce(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Mt=Ce(n.nextSibling),l=n.data==="F!";break t}}Ka(l)}l=!1}l&&(e=a[0])}}return a=ue(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ef,lastRenderedState:e},a.queue=l,a=Xf.bind(null,ot,l),l.dispatch=a,l=lr(!1),i=or.bind(null,ot,!1,l.queue),l=ue(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=E0.bind(null,ot,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function zf(t){var e=Lt();return Tf(e,Et,t)}function Tf(t,e,a){if(e=er(t,e,Ef)[0],t=Vu(Ie)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Nn(e)}catch(s){throw s===zn?qu:s}else l=e;e=Lt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(ot.flags|=2048,_l(9,Ku(),A0.bind(null,n,a),null)),[l,i,t]}function A0(t,e){t.action=e}function Rf(t){var e=Lt(),a=Et;if(a!==null)return Tf(e,a,t);Lt(),e=e.memoizedState,a=Lt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function _l(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=ot.updateQueue,e===null&&(e=Ic(),ot.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Ku(){return{destroy:void 0,resource:void 0}}function Df(){return Lt().memoizedState}function ku(t,e,a,l){var n=ue();l=l===void 0?null:l,ot.flags|=t,n.memoizedState=_l(1|e,Ku(),a,l)}function _n(t,e,a,l){var n=Lt();l=l===void 0?null:l;var i=n.memoizedState.inst;Et!==null&&l!==null&&Jc(l,Et.memoizedState.deps)?n.memoizedState=_l(e,i,a,l):(ot.flags|=t,n.memoizedState=_l(1|e,i,a,l))}function wf(t,e){ku(8390656,8,t,e)}function Of(t,e){_n(2048,8,t,e)}function Nf(t,e){return _n(4,2,t,e)}function _f(t,e){return _n(4,4,t,e)}function jf(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mf(t,e,a){a=a!=null?a.concat([t]):null,_n(4,4,jf.bind(null,e,t),a)}function ur(){}function Cf(t,e){var a=Lt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Jc(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function Uf(t,e){var a=Lt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Jc(e,l[1]))return l[0];if(l=t(),Wa){fa(!0);try{t()}finally{fa(!1)}}return a.memoizedState=[l,e],l}function ir(t,e,a){return a===void 0||(va&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Yd(),ot.lanes|=t,Ta|=t,a)}function Hf(t,e,a,l){return de(a,e)?a:wl.current!==null?(t=ir(t,a,l),de(t,e)||(Vt=!0),t):(va&42)===0?(Vt=!0,t.memoizedState=a):(t=Yd(),ot.lanes|=t,Ta|=t,e)}function Bf(t,e,a,l,n){var i=Q.p;Q.p=i!==0&&8>i?i:8;var s=N.T,d={};N.T=d,or(t,!1,e,a);try{var p=n(),T=N.S;if(T!==null&&T(d,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var _=b0(p,l);jn(t,e,_,ye(t))}else jn(t,e,l,ye(t))}catch(U){jn(t,e,{then:function(){},status:"rejected",reason:U},ye())}finally{Q.p=i,N.T=s}}function z0(){}function cr(t,e,a,l){if(t.tag!==5)throw Error(r(476));var n=Yf(t).queue;Bf(t,n,e,P,a===null?z0:function(){return qf(t),a(l)})}function Yf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:P},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function qf(t){var e=Yf(t).next.queue;jn(t,e,{},ye())}function rr(){return te(Wn)}function Lf(){return Lt().memoizedState}function Gf(){return Lt().memoizedState}function T0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ye();t=ga(a);var l=ya(e,t,a);l!==null&&(ve(l,e,a),Rn(l,e,a)),e={cache:Yc()},t.payload=e;return}e=e.return}}function R0(t,e,a){var l=ye();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ju(t)?Qf(e,a):(a=wc(t,e,a,l),a!==null&&(ve(a,t,l),Zf(a,e,l)))}function Xf(t,e,a){var l=ye();jn(t,e,a,l)}function jn(t,e,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ju(t))Qf(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,d=i(s,a);if(n.hasEagerState=!0,n.eagerState=d,de(d,s))return _u(t,e,n,0),Dt===null&&Nu(),!1}catch{}finally{}if(a=wc(t,e,n,l),a!==null)return ve(a,t,l),Zf(a,e,l),!0}return!1}function or(t,e,a,l){if(l={lane:2,revertLane:Gr(),action:l,hasEagerState:!1,eagerState:null,next:null},Ju(t)){if(e)throw Error(r(479))}else e=wc(t,a,l,2),e!==null&&ve(e,t,2)}function Ju(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function Qf(t,e){Ol=Xu=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Zf(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Fo(t,a)}}var $u={readContext:te,use:Zu,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useLayoutEffect:Ht,useInsertionEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useSyncExternalStore:Ht,useId:Ht,useHostTransitionStatus:Ht,useFormState:Ht,useActionState:Ht,useOptimistic:Ht,useMemoCache:Ht,useCacheRefresh:Ht},Vf={readContext:te,use:Zu,useCallback:function(t,e){return ue().memoizedState=[t,e===void 0?null:e],t},useContext:te,useEffect:wf,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,ku(4194308,4,jf.bind(null,e,t),a)},useLayoutEffect:function(t,e){return ku(4194308,4,t,e)},useInsertionEffect:function(t,e){ku(4,2,t,e)},useMemo:function(t,e){var a=ue();e=e===void 0?null:e;var l=t();if(Wa){fa(!0);try{t()}finally{fa(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=ue();if(a!==void 0){var n=a(e);if(Wa){fa(!0);try{a(e)}finally{fa(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=R0.bind(null,ot,t),[l.memoizedState,t]},useRef:function(t){var e=ue();return t={current:t},e.memoizedState=t},useState:function(t){t=lr(t);var e=t.queue,a=Xf.bind(null,ot,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:ur,useDeferredValue:function(t,e){var a=ue();return ir(a,t,e)},useTransition:function(){var t=lr(!1);return t=Bf.bind(null,ot,t.queue,!0,!1),ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=ot,n=ue();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=e(),Dt===null)throw Error(r(349));(ht&124)!==0||df(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,wf(mf.bind(null,l,i,t),[t]),l.flags|=2048,_l(9,Ku(),hf.bind(null,l,i,a,e),null),a},useId:function(){var t=ue(),e=Dt.identifierPrefix;if(yt){var a=We,l=$e;a=(l&~(1<<32-fe(l)-1)).toString(32)+a,e="«"+e+"R"+a,a=Qu++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=x0++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:rr,useFormState:Af,useActionState:Af,useOptimistic:function(t){var e=ue();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=or.bind(null,ot,!0,a),a.dispatch=e,[t,e]},useMemoCache:tr,useCacheRefresh:function(){return ue().memoizedState=T0.bind(null,ot)}},Kf={readContext:te,use:Zu,useCallback:Cf,useContext:te,useEffect:Of,useImperativeHandle:Mf,useInsertionEffect:Nf,useLayoutEffect:_f,useMemo:Uf,useReducer:Vu,useRef:Df,useState:function(){return Vu(Ie)},useDebugValue:ur,useDeferredValue:function(t,e){var a=Lt();return Hf(a,Et.memoizedState,t,e)},useTransition:function(){var t=Vu(Ie)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Nn(t),e]},useSyncExternalStore:ff,useId:Lf,useHostTransitionStatus:rr,useFormState:zf,useActionState:zf,useOptimistic:function(t,e){var a=Lt();return yf(a,Et,t,e)},useMemoCache:tr,useCacheRefresh:Gf},D0={readContext:te,use:Zu,useCallback:Cf,useContext:te,useEffect:Of,useImperativeHandle:Mf,useInsertionEffect:Nf,useLayoutEffect:_f,useMemo:Uf,useReducer:ar,useRef:Df,useState:function(){return ar(Ie)},useDebugValue:ur,useDeferredValue:function(t,e){var a=Lt();return Et===null?ir(a,t,e):Hf(a,Et.memoizedState,t,e)},useTransition:function(){var t=ar(Ie)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:Nn(t),e]},useSyncExternalStore:ff,useId:Lf,useHostTransitionStatus:rr,useFormState:Rf,useActionState:Rf,useOptimistic:function(t,e){var a=Lt();return Et!==null?yf(a,Et,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:tr,useCacheRefresh:Gf},jl=null,Mn=0;function Wu(t){var e=Mn;return Mn+=1,jl===null&&(jl=[]),af(jl,t,e)}function Cn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Fu(t,e){throw e.$$typeof===j?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function kf(t){var e=t._init;return e(t._payload)}function Jf(t){function e(S,b){if(t){var A=S.deletions;A===null?(S.deletions=[b],S.flags|=16):A.push(b)}}function a(S,b){if(!t)return null;for(;b!==null;)e(S,b),b=b.sibling;return null}function l(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function n(S,b){return S=Je(S,b),S.index=0,S.sibling=null,S}function i(S,b,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<b?(S.flags|=67108866,b):A):(S.flags|=67108866,b)):(S.flags|=1048576,b)}function s(S){return t&&S.alternate===null&&(S.flags|=67108866),S}function d(S,b,A,M){return b===null||b.tag!==6?(b=Nc(A,S.mode,M),b.return=S,b):(b=n(b,A),b.return=S,b)}function p(S,b,A,M){var k=A.type;return k===q?_(S,b,A.props.children,M,A.key):b!==null&&(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pt&&kf(k)===b.type)?(b=n(b,A.props),Cn(b,A),b.return=S,b):(b=Mu(A.type,A.key,A.props,null,S.mode,M),Cn(b,A),b.return=S,b)}function T(S,b,A,M){return b===null||b.tag!==4||b.stateNode.containerInfo!==A.containerInfo||b.stateNode.implementation!==A.implementation?(b=_c(A,S.mode,M),b.return=S,b):(b=n(b,A.children||[]),b.return=S,b)}function _(S,b,A,M,k){return b===null||b.tag!==7?(b=Xa(A,S.mode,M,k),b.return=S,b):(b=n(b,A),b.return=S,b)}function U(S,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Nc(""+b,S.mode,A),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case C:return A=Mu(b.type,b.key,b.props,null,S.mode,A),Cn(A,b),A.return=S,A;case L:return b=_c(b,S.mode,A),b.return=S,b;case pt:var M=b._init;return b=M(b._payload),U(S,b,A)}if(Ut(b)||Nt(b))return b=Xa(b,S.mode,A,null),b.return=S,b;if(typeof b.then=="function")return U(S,Wu(b),A);if(b.$$typeof===Z)return U(S,Bu(S,b),A);Fu(S,b)}return null}function D(S,b,A,M){var k=b!==null?b.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return k!==null?null:d(S,b,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case C:return A.key===k?p(S,b,A,M):null;case L:return A.key===k?T(S,b,A,M):null;case pt:return k=A._init,A=k(A._payload),D(S,b,A,M)}if(Ut(A)||Nt(A))return k!==null?null:_(S,b,A,M,null);if(typeof A.then=="function")return D(S,b,Wu(A),M);if(A.$$typeof===Z)return D(S,b,Bu(S,A),M);Fu(S,A)}return null}function w(S,b,A,M,k){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(A)||null,d(b,S,""+M,k);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case C:return S=S.get(M.key===null?A:M.key)||null,p(b,S,M,k);case L:return S=S.get(M.key===null?A:M.key)||null,T(b,S,M,k);case pt:var st=M._init;return M=st(M._payload),w(S,b,A,M,k)}if(Ut(M)||Nt(M))return S=S.get(A)||null,_(b,S,M,k,null);if(typeof M.then=="function")return w(S,b,A,Wu(M),k);if(M.$$typeof===Z)return w(S,b,A,Bu(b,M),k);Fu(b,M)}return null}function nt(S,b,A,M){for(var k=null,st=null,F=b,lt=b=0,kt=null;F!==null&&lt<A.length;lt++){F.index>lt?(kt=F,F=null):kt=F.sibling;var mt=D(S,F,A[lt],M);if(mt===null){F===null&&(F=kt);break}t&&F&&mt.alternate===null&&e(S,F),b=i(mt,b,lt),st===null?k=mt:st.sibling=mt,st=mt,F=kt}if(lt===A.length)return a(S,F),yt&&Za(S,lt),k;if(F===null){for(;lt<A.length;lt++)F=U(S,A[lt],M),F!==null&&(b=i(F,b,lt),st===null?k=F:st.sibling=F,st=F);return yt&&Za(S,lt),k}for(F=l(F);lt<A.length;lt++)kt=w(F,S,lt,A[lt],M),kt!==null&&(t&&kt.alternate!==null&&F.delete(kt.key===null?lt:kt.key),b=i(kt,b,lt),st===null?k=kt:st.sibling=kt,st=kt);return t&&F.forEach(function(Ca){return e(S,Ca)}),yt&&Za(S,lt),k}function at(S,b,A,M){if(A==null)throw Error(r(151));for(var k=null,st=null,F=b,lt=b=0,kt=null,mt=A.next();F!==null&&!mt.done;lt++,mt=A.next()){F.index>lt?(kt=F,F=null):kt=F.sibling;var Ca=D(S,F,mt.value,M);if(Ca===null){F===null&&(F=kt);break}t&&F&&Ca.alternate===null&&e(S,F),b=i(Ca,b,lt),st===null?k=Ca:st.sibling=Ca,st=Ca,F=kt}if(mt.done)return a(S,F),yt&&Za(S,lt),k;if(F===null){for(;!mt.done;lt++,mt=A.next())mt=U(S,mt.value,M),mt!==null&&(b=i(mt,b,lt),st===null?k=mt:st.sibling=mt,st=mt);return yt&&Za(S,lt),k}for(F=l(F);!mt.done;lt++,mt=A.next())mt=w(F,S,lt,mt.value,M),mt!==null&&(t&&mt.alternate!==null&&F.delete(mt.key===null?lt:mt.key),b=i(mt,b,lt),st===null?k=mt:st.sibling=mt,st=mt);return t&&F.forEach(function(wg){return e(S,wg)}),yt&&Za(S,lt),k}function zt(S,b,A,M){if(typeof A=="object"&&A!==null&&A.type===q&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case C:t:{for(var k=A.key;b!==null;){if(b.key===k){if(k=A.type,k===q){if(b.tag===7){a(S,b.sibling),M=n(b,A.props.children),M.return=S,S=M;break t}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pt&&kf(k)===b.type){a(S,b.sibling),M=n(b,A.props),Cn(M,A),M.return=S,S=M;break t}a(S,b);break}else e(S,b);b=b.sibling}A.type===q?(M=Xa(A.props.children,S.mode,M,A.key),M.return=S,S=M):(M=Mu(A.type,A.key,A.props,null,S.mode,M),Cn(M,A),M.return=S,S=M)}return s(S);case L:t:{for(k=A.key;b!==null;){if(b.key===k)if(b.tag===4&&b.stateNode.containerInfo===A.containerInfo&&b.stateNode.implementation===A.implementation){a(S,b.sibling),M=n(b,A.children||[]),M.return=S,S=M;break t}else{a(S,b);break}else e(S,b);b=b.sibling}M=_c(A,S.mode,M),M.return=S,S=M}return s(S);case pt:return k=A._init,A=k(A._payload),zt(S,b,A,M)}if(Ut(A))return nt(S,b,A,M);if(Nt(A)){if(k=Nt(A),typeof k!="function")throw Error(r(150));return A=k.call(A),at(S,b,A,M)}if(typeof A.then=="function")return zt(S,b,Wu(A),M);if(A.$$typeof===Z)return zt(S,b,Bu(S,A),M);Fu(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,b!==null&&b.tag===6?(a(S,b.sibling),M=n(b,A),M.return=S,S=M):(a(S,b),M=Nc(A,S.mode,M),M.return=S,S=M),s(S)):a(S,b)}return function(S,b,A,M){try{Mn=0;var k=zt(S,b,A,M);return jl=null,k}catch(F){if(F===zn||F===qu)throw F;var st=he(29,F,null,S.mode);return st.lanes=M,st.return=S,st}finally{}}}var Ml=Jf(!0),$f=Jf(!1),De=R(null),Ye=null;function ba(t){var e=t.alternate;Y(Qt,Qt.current&1),Y(De,t),Ye===null&&(e===null||wl.current!==null||e.memoizedState!==null)&&(Ye=t)}function Wf(t){if(t.tag===22){if(Y(Qt,Qt.current),Y(De,t),Ye===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ye=t)}}else xa()}function xa(){Y(Qt,Qt.current),Y(De,De.current)}function ta(t){B(De),Ye===t&&(Ye=null),B(Qt)}var Qt=R(0);function Pu(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ir(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function sr(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:E({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var fr={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=ye(),n=ga(l);n.payload=e,a!=null&&(n.callback=a),e=ya(t,n,l),e!==null&&(ve(e,t,l),Rn(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=ye(),n=ga(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ya(t,n,l),e!==null&&(ve(e,t,l),Rn(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ye(),l=ga(a);l.tag=2,e!=null&&(l.callback=e),e=ya(t,l,a),e!==null&&(ve(e,t,a),Rn(e,t,a))}};function Ff(t,e,a,l,n,i,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,s):e.prototype&&e.prototype.isPureReactComponent?!gn(a,l)||!gn(n,i):!0}function Pf(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&fr.enqueueReplaceState(e,e.state,null)}function Fa(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=E({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}var Iu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function If(t){Iu(t)}function td(t){console.error(t)}function ed(t){Iu(t)}function ti(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function ad(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function dr(t,e,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){ti(t,e)},a}function ld(t){return t=ga(t),t.tag=3,t}function nd(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){ad(e,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ad(e,a,l),typeof n!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function w0(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&Sn(e,a,n,!0),a=De.current,a!==null){switch(a.tag){case 13:return Ye===null?Hr():a.alternate===null&&Ct===0&&(Ct=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Gc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Yr(t,l,n)),!1;case 22:return a.flags|=65536,l===Gc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Yr(t,l,n)),!1}throw Error(r(435,a.tag))}return Yr(t,l,n),Hr(),!1}if(yt)return e=De.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Cc&&(t=Error(r(422),{cause:l}),xn(Ae(t,a)))):(l!==Cc&&(e=Error(r(423),{cause:l}),xn(Ae(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=Ae(l,a),n=dr(t.stateNode,l,n),Zc(t,n),Ct!==4&&(Ct=2)),!1;var i=Error(r(520),{cause:l});if(i=Ae(i,a),Gn===null?Gn=[i]:Gn.push(i),Ct!==4&&(Ct=2),e===null)return!0;l=Ae(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=dr(a.stateNode,l,t),Zc(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ld(n),nd(n,t,a,l),Zc(a,n),!1}a=a.return}while(a!==null);return!1}var ud=Error(r(461)),Vt=!1;function $t(t,e,a,l){e.child=t===null?$f(e,null,a,l):Ml(e,t.child,a,l)}function id(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var s={};for(var d in l)d!=="ref"&&(s[d]=l[d])}else s=l;return Ja(e),l=$c(t,e,a,s,i,n),d=Wc(),t!==null&&!Vt?(Fc(t,e,n),ea(t,e,n)):(yt&&d&&jc(e),e.flags|=1,$t(t,e,l,n),e.child)}function cd(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Oc(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,rd(t,e,i,l,n)):(t=Mu(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!xr(t,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:gn,a(s,l)&&t.ref===e.ref)return ea(t,e,n)}return e.flags|=1,t=Je(i,l),t.ref=e.ref,t.return=e,e.child=t}function rd(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(gn(i,l)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=l=i,xr(t,n))(t.flags&131072)!==0&&(Vt=!0);else return e.lanes=t.lanes,ea(t,e,n)}return hr(t,e,a,l,n)}function od(t,e,a){var l=e.pendingProps,n=l.children,i=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((e.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;e.childLanes=i&~l}else e.childLanes=0,e.child=null;return sd(t,e,l,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yu(e,i!==null?i.cachePool:null),i!==null?rf(e,i):Kc(),Wf(e);else return e.lanes=e.childLanes=536870912,sd(t,e,i!==null?i.baseLanes|a:a,a)}else i!==null?(Yu(e,i.cachePool),rf(e,i),xa(),e.memoizedState=null):(t!==null&&Yu(e,null),Kc(),xa());return $t(t,e,n,a),e.child}function sd(t,e,a,l){var n=Lc();return n=n===null?null:{parent:Xt._currentValue,pool:n},e.memoizedState={baseLanes:a,cachePool:n},t!==null&&Yu(e,null),Kc(),Wf(e),t!==null&&Sn(t,e,l,!0),null}function ei(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function hr(t,e,a,l,n){return Ja(e),a=$c(t,e,a,l,void 0,n),l=Wc(),t!==null&&!Vt?(Fc(t,e,n),ea(t,e,n)):(yt&&l&&jc(e),e.flags|=1,$t(t,e,a,n),e.child)}function fd(t,e,a,l,n,i){return Ja(e),e.updateQueue=null,a=sf(e,l,a,n),of(t),l=Wc(),t!==null&&!Vt?(Fc(t,e,i),ea(t,e,i)):(yt&&l&&jc(e),e.flags|=1,$t(t,e,a,i),e.child)}function dd(t,e,a,l,n){if(Ja(e),e.stateNode===null){var i=Al,s=a.contextType;typeof s=="object"&&s!==null&&(i=te(s)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Xc(e),s=a.contextType,i.context=typeof s=="object"&&s!==null?te(s):Al,i.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(sr(e,a,s,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&fr.enqueueReplaceState(i,i.state,null),wn(e,l,i,n),Dn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var d=e.memoizedProps,p=Fa(a,d);i.props=p;var T=i.context,_=a.contextType;s=Al,typeof _=="object"&&_!==null&&(s=te(_));var U=a.getDerivedStateFromProps;_=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||T!==s)&&Pf(e,i,l,s),pa=!1;var D=e.memoizedState;i.state=D,wn(e,l,i,n),Dn(),T=e.memoizedState,d||D!==T||pa?(typeof U=="function"&&(sr(e,a,U,l),T=e.memoizedState),(p=pa||Ff(e,a,p,l,D,T,s))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=T),i.props=l,i.state=T,i.context=s,l=p):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Qc(t,e),s=e.memoizedProps,_=Fa(a,s),i.props=_,U=e.pendingProps,D=i.context,T=a.contextType,p=Al,typeof T=="object"&&T!==null&&(p=te(T)),d=a.getDerivedStateFromProps,(T=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==U||D!==p)&&Pf(e,i,l,p),pa=!1,D=e.memoizedState,i.state=D,wn(e,l,i,n),Dn();var w=e.memoizedState;s!==U||D!==w||pa||t!==null&&t.dependencies!==null&&Hu(t.dependencies)?(typeof d=="function"&&(sr(e,a,d,l),w=e.memoizedState),(_=pa||Ff(e,a,_,l,D,w,p)||t!==null&&t.dependencies!==null&&Hu(t.dependencies))?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,w,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,w,p)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&D===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&D===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=w),i.props=l,i.state=w,i.context=p,l=_):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&D===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&D===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,ei(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Ml(e,t.child,null,n),e.child=Ml(e,null,a,n)):$t(t,e,a,n),e.memoizedState=i.state,t=e.child):t=ea(t,e,n),t}function hd(t,e,a,l){return bn(),e.flags|=256,$t(t,e,a,l),e.child}var mr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pr(t){return{baseLanes:t,cachePool:Is()}}function gr(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=we),t}function md(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(Qt.current&2)!==0),s&&(n=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(yt){if(n?ba(e):xa(),yt){var d=Mt,p;if(p=d){t:{for(p=d,d=Be;p.nodeType!==8;){if(!d){d=null;break t}if(p=Ce(p.nextSibling),p===null){d=null;break t}}d=p}d!==null?(e.memoizedState={dehydrated:d,treeContext:Qa!==null?{id:$e,overflow:We}:null,retryLane:536870912,hydrationErrors:null},p=he(18,null,null,0),p.stateNode=d,p.return=e,e.child=p,ae=e,Mt=null,p=!0):p=!1}p||Ka(e)}if(d=e.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return Ir(d)?e.lanes=32:e.lanes=536870912,null;ta(e)}return d=l.children,l=l.fallback,n?(xa(),n=e.mode,d=ai({mode:"hidden",children:d},n),l=Xa(l,n,a,null),d.return=e,l.return=e,d.sibling=l,e.child=d,n=e.child,n.memoizedState=pr(a),n.childLanes=gr(t,s,a),e.memoizedState=mr,l):(ba(e),yr(e,d))}if(p=t.memoizedState,p!==null&&(d=p.dehydrated,d!==null)){if(i)e.flags&256?(ba(e),e.flags&=-257,e=vr(t,e,a)):e.memoizedState!==null?(xa(),e.child=t.child,e.flags|=128,e=null):(xa(),n=l.fallback,d=e.mode,l=ai({mode:"visible",children:l.children},d),n=Xa(n,d,a,null),n.flags|=2,l.return=e,n.return=e,l.sibling=n,e.child=l,Ml(e,t.child,null,a),l=e.child,l.memoizedState=pr(a),l.childLanes=gr(t,s,a),e.memoizedState=mr,e=n);else if(ba(e),Ir(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var T=s.dgst;s=T,l=Error(r(419)),l.stack="",l.digest=s,xn({value:l,source:null,stack:null}),e=vr(t,e,a)}else if(Vt||Sn(t,e,a,!1),s=(a&t.childLanes)!==0,Vt||s){if(s=Dt,s!==null&&(l=a&-a,l=(l&42)!==0?1:tc(l),l=(l&(s.suspendedLanes|a))!==0?0:l,l!==0&&l!==p.retryLane))throw p.retryLane=l,El(t,l),ve(s,t,l),ud;d.data==="$?"||Hr(),e=vr(t,e,a)}else d.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=p.treeContext,Mt=Ce(d.nextSibling),ae=e,yt=!0,Va=null,Be=!1,t!==null&&(Te[Re++]=$e,Te[Re++]=We,Te[Re++]=Qa,$e=t.id,We=t.overflow,Qa=e),e=yr(e,l.children),e.flags|=4096);return e}return n?(xa(),n=l.fallback,d=e.mode,p=t.child,T=p.sibling,l=Je(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,T!==null?n=Je(T,n):(n=Xa(n,d,a,null),n.flags|=2),n.return=e,l.return=e,l.sibling=n,e.child=l,l=n,n=e.child,d=t.child.memoizedState,d===null?d=pr(a):(p=d.cachePool,p!==null?(T=Xt._currentValue,p=p.parent!==T?{parent:T,pool:T}:p):p=Is(),d={baseLanes:d.baseLanes|a,cachePool:p}),n.memoizedState=d,n.childLanes=gr(t,s,a),e.memoizedState=mr,l):(ba(e),a=t.child,t=a.sibling,a=Je(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=a,e.memoizedState=null,a)}function yr(t,e){return e=ai({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ai(t,e){return t=he(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function vr(t,e,a){return Ml(e,t.child,null,a),t=yr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pd(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Hc(t.return,e,a)}function br(t,e,a,l,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function gd(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;if($t(t,e,l.children,a),l=Qt.current,(l&2)!==0)l=l&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pd(t,a,e);else if(t.tag===19)pd(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Y(Qt,l),n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&Pu(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),br(e,!1,n,a,i);break;case"backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Pu(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}br(e,!0,a,null,i);break;case"together":br(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ea(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ta|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Sn(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,a=Je(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Je(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function xr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Hu(t)))}function O0(t,e,a){switch(e.tag){case 3:vt(e,e.stateNode.containerInfo),ma(e,Xt,t.memoizedState.cache),bn();break;case 27:case 5:Ha(e);break;case 4:vt(e,e.stateNode.containerInfo);break;case 10:ma(e,e.type,e.memoizedProps.value);break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(ba(e),e.flags|=128,null):(a&e.child.childLanes)!==0?md(t,e,a):(ba(e),t=ea(t,e,a),t!==null?t.sibling:null);ba(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(Sn(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return gd(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(Qt,Qt.current),l)break;return null;case 22:case 23:return e.lanes=0,od(t,e,a);case 24:ma(e,Xt,t.memoizedState.cache)}return ea(t,e,a)}function yd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Vt=!0;else{if(!xr(t,a)&&(e.flags&128)===0)return Vt=!1,O0(t,e,a);Vt=(t.flags&131072)!==0}else Vt=!1,yt&&(e.flags&1048576)!==0&&Ks(e,Uu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var l=e.elementType,n=l._init;if(l=n(l._payload),e.type=l,typeof l=="function")Oc(l)?(t=Fa(l,t),e.tag=1,e=dd(null,e,l,t,a)):(e.tag=0,e=hr(null,e,l,t,a));else{if(l!=null){if(n=l.$$typeof,n===tt){e.tag=11,e=id(null,e,l,t,a);break t}else if(n===$){e.tag=14,e=cd(null,e,l,t,a);break t}}throw e=_e(l)||l,Error(r(306,e,""))}}return e;case 0:return hr(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=Fa(l,e.pendingProps),dd(t,e,l,n,a);case 3:t:{if(vt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Qc(t,e),wn(e,l,null,a);var s=e.memoizedState;if(l=s.cache,ma(e,Xt,l),l!==i.cache&&Bc(e,[Xt],a,!0),Dn(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=hd(t,e,l,a);break t}else if(l!==n){n=Ae(Error(r(424)),e),xn(n),e=hd(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Mt=Ce(t.firstChild),ae=e,yt=!0,Va=null,Be=!0,a=$f(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(bn(),l===n){e=ea(t,e,a);break t}$t(t,e,l,a)}e=e.child}return e;case 26:return ei(t,e),t===null?(a=Sh(e.type,null,e.pendingProps,null))?e.memoizedState=a:yt||(a=e.type,t=e.pendingProps,l=gi(I.current).createElement(a),l[It]=e,l[le]=t,Ft(l,a,t),Zt(l),e.stateNode=l):e.memoizedState=Sh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ha(e),t===null&&yt&&(l=e.stateNode=vh(e.type,e.pendingProps,I.current),ae=e,Be=!0,n=Mt,Oa(e.type)?(to=n,Mt=Ce(l.firstChild)):Mt=n),$t(t,e,e.pendingProps.children,a),ei(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&yt&&((n=l=Mt)&&(l=lg(l,e.type,e.pendingProps,Be),l!==null?(e.stateNode=l,ae=e,Mt=Ce(l.firstChild),Be=!1,n=!0):n=!1),n||Ka(e)),Ha(e),n=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,Wr(n,i)?l=null:s!==null&&Wr(n,s)&&(e.flags|=32),e.memoizedState!==null&&(n=$c(t,e,S0,null,null,a),Wn._currentValue=n),ei(t,e),$t(t,e,l,a),e.child;case 6:return t===null&&yt&&((t=a=Mt)&&(a=ng(a,e.pendingProps,Be),a!==null?(e.stateNode=a,ae=e,Mt=null,t=!0):t=!1),t||Ka(e)),null;case 13:return md(t,e,a);case 4:return vt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Ml(e,null,l,a):$t(t,e,l,a),e.child;case 11:return id(t,e,e.type,e.pendingProps,a);case 7:return $t(t,e,e.pendingProps,a),e.child;case 8:return $t(t,e,e.pendingProps.children,a),e.child;case 12:return $t(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,ma(e,e.type,l.value),$t(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,Ja(e),n=te(n),l=l(n),e.flags|=1,$t(t,e,l,a),e.child;case 14:return cd(t,e,e.type,e.pendingProps,a);case 15:return rd(t,e,e.type,e.pendingProps,a);case 19:return gd(t,e,a);case 31:return l=e.pendingProps,a=e.mode,l={mode:l.mode,children:l.children},t===null?(a=ai(l,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=Je(t.child,l),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return od(t,e,a);case 24:return Ja(e),l=te(Xt),t===null?(n=Lc(),n===null&&(n=Dt,i=Yc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},Xc(e),ma(e,Xt,n)):((t.lanes&a)!==0&&(Qc(t,e),wn(e,null,null,a),Dn()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ma(e,Xt,l)):(l=i.cache,ma(e,Xt,l),l!==n.cache&&Bc(e,[Xt],a,!0))),$t(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function aa(t){t.flags|=4}function vd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Rh(e)){if(e=De.current,e!==null&&((ht&4194048)===ht?Ye!==null:(ht&62914560)!==ht&&(ht&536870912)===0||e!==Ye))throw Tn=Gc,tf;t.flags|=8192}}function li(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?$o():536870912,t.lanes|=e,Bl|=e)}function Un(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function N0(t,e,a){var l=e.pendingProps;switch(Mc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return _t(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Pe(Xt),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(vn(e)?aa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$s())),_t(e),null;case 26:return a=e.memoizedState,t===null?(aa(e),a!==null?(_t(e),vd(e,a)):(_t(e),e.flags&=-16777217)):a?a!==t.memoizedState?(aa(e),_t(e),vd(e,a)):(_t(e),e.flags&=-16777217):(t.memoizedProps!==l&&aa(e),_t(e),e.flags&=-16777217),null;case 27:Ve(e),a=I.current;var n=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==l&&aa(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return _t(e),null}t=V.current,vn(e)?ks(e):(t=vh(n,l,a),e.stateNode=t,aa(e))}return _t(e),null;case 5:if(Ve(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&aa(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return _t(e),null}if(t=V.current,vn(e))ks(e);else{switch(n=gi(I.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}t[It]=e,t[le]=l;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=t;t:switch(Ft(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&aa(e)}}return _t(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&aa(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(r(166));if(t=I.current,vn(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=ae,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[It]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||fh(t.nodeValue,a)),t||Ka(e)}else t=gi(t).createTextNode(l),t[It]=e,e.stateNode=t}return _t(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=vn(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(r(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[It]=e}else bn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_t(e),n=!1}else n=$s(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ta(e),e):(ta(e),null)}if(ta(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),li(e,e.updateQueue),_t(e),null;case 4:return Pt(),t===null&&Vr(e.stateNode.containerInfo),_t(e),null;case 10:return Pe(e.type),_t(e),null;case 19:if(B(Qt),n=e.memoizedState,n===null)return _t(e),null;if(l=(e.flags&128)!==0,i=n.rendering,i===null)if(l)Un(n,!1);else{if(Ct!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Pu(t),i!==null){for(e.flags|=128,Un(n,!1),t=i.updateQueue,e.updateQueue=t,li(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Vs(a,t),a=a.sibling;return Y(Qt,Qt.current&1|2),e.child}t=t.sibling}n.tail!==null&&He()>ii&&(e.flags|=128,l=!0,Un(n,!1),e.lanes=4194304)}else{if(!l)if(t=Pu(i),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,li(e,t),Un(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!yt)return _t(e),null}else 2*He()-n.renderingStartTime>ii&&a!==536870912&&(e.flags|=128,l=!0,Un(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(t=n.last,t!==null?t.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=He(),e.sibling=null,t=Qt.current,Y(Qt,l?t&1|2:t&1),e):(_t(e),null);case 22:case 23:return ta(e),kc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),a=e.updateQueue,a!==null&&li(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&B($a),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Pe(Xt),_t(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function _0(t,e){switch(Mc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pe(Xt),Pt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ve(e),null;case 13:if(ta(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));bn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return B(Qt),null;case 4:return Pt(),null;case 10:return Pe(e.type),null;case 22:case 23:return ta(e),kc(),t!==null&&B($a),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Pe(Xt),null;case 25:return null;default:return null}}function bd(t,e){switch(Mc(e),e.tag){case 3:Pe(Xt),Pt();break;case 26:case 27:case 5:Ve(e);break;case 4:Pt();break;case 13:ta(e);break;case 19:B(Qt);break;case 10:Pe(e.type);break;case 22:case 23:ta(e),kc(),t!==null&&B($a);break;case 24:Pe(Xt)}}function Hn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(d){Rt(e,e.return,d)}}function Sa(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var s=l.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,n=e;var p=a,T=d;try{T()}catch(_){Rt(n,p,_)}}}l=l.next}while(l!==i)}}catch(_){Rt(e,e.return,_)}}function xd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{cf(e,a)}catch(l){Rt(t,t.return,l)}}}function Sd(t,e,a){a.props=Fa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Rt(t,e,l)}}function Bn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){Rt(t,e,n)}}function qe(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Rt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Rt(t,e,n)}else a.current=null}function Ed(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Rt(t,t.return,n)}}function Sr(t,e,a){try{var l=t.stateNode;P0(l,t.type,a,e),l[le]=e}catch(n){Rt(t,t.return,n)}}function Ad(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Oa(t.type)||t.tag===4}function Er(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ad(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Oa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ar(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=pi));else if(l!==4&&(l===27&&Oa(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Ar(t,e,a),t=t.sibling;t!==null;)Ar(t,e,a),t=t.sibling}function ni(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Oa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ni(t,e,a),t=t.sibling;t!==null;)ni(t,e,a),t=t.sibling}function zd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ft(e,l,a),e[It]=t,e[le]=a}catch(i){Rt(t,t.return,i)}}var la=!1,Bt=!1,zr=!1,Td=typeof WeakSet=="function"?WeakSet:Set,Kt=null;function j0(t,e){if(t=t.containerInfo,Jr=Ei,t=Us(t),Ec(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var s=0,d=-1,p=-1,T=0,_=0,U=t,D=null;e:for(;;){for(var w;U!==a||n!==0&&U.nodeType!==3||(d=s+n),U!==i||l!==0&&U.nodeType!==3||(p=s+l),U.nodeType===3&&(s+=U.nodeValue.length),(w=U.firstChild)!==null;)D=U,U=w;for(;;){if(U===t)break e;if(D===a&&++T===n&&(d=s),D===i&&++_===l&&(p=s),(w=U.nextSibling)!==null)break;U=D,D=U.parentNode}U=w}a=d===-1||p===-1?null:{start:d,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for($r={focusedElem:t,selectionRange:a},Ei=!1,Kt=e;Kt!==null;)if(e=Kt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Kt=t;else for(;Kt!==null;){switch(e=Kt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var nt=Fa(a.type,n,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(nt,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Rt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Pr(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pr(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,Kt=t;break}Kt=e.return}}function Rd(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(t,a),l&4&&Hn(5,a);break;case 1:if(Ea(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(s){Rt(a,a.return,s)}else{var n=Fa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Rt(a,a.return,s)}}l&64&&xd(a),l&512&&Bn(a,a.return);break;case 3:if(Ea(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{cf(t,e)}catch(s){Rt(a,a.return,s)}}break;case 27:e===null&&l&4&&zd(a);case 26:case 5:Ea(t,a),e===null&&l&4&&Ed(a),l&512&&Bn(a,a.return);break;case 12:Ea(t,a);break;case 13:Ea(t,a),l&4&&Od(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=G0.bind(null,a),ug(t,a))));break;case 22:if(l=a.memoizedState!==null||la,!l){e=e!==null&&e.memoizedState!==null||Bt,n=la;var i=Bt;la=l,(Bt=e)&&!i?Aa(t,a,(a.subtreeFlags&8772)!==0):Ea(t,a),la=n,Bt=i}break;case 30:break;default:Ea(t,a)}}function Dd(t){var e=t.alternate;e!==null&&(t.alternate=null,Dd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&lc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ot=null,ie=!1;function na(t,e,a){for(a=a.child;a!==null;)wd(t,e,a),a=a.sibling}function wd(t,e,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ln,a)}catch{}switch(a.tag){case 26:Bt||qe(a,e),na(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Bt||qe(a,e);var l=Ot,n=ie;Oa(a.type)&&(Ot=a.stateNode,ie=!1),na(t,e,a),Kn(a.stateNode),Ot=l,ie=n;break;case 5:Bt||qe(a,e);case 6:if(l=Ot,n=ie,Ot=null,na(t,e,a),Ot=l,ie=n,Ot!==null)if(ie)try{(Ot.nodeType===9?Ot.body:Ot.nodeName==="HTML"?Ot.ownerDocument.body:Ot).removeChild(a.stateNode)}catch(i){Rt(a,e,i)}else try{Ot.removeChild(a.stateNode)}catch(i){Rt(a,e,i)}break;case 18:Ot!==null&&(ie?(t=Ot,gh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),tu(t)):gh(Ot,a.stateNode));break;case 4:l=Ot,n=ie,Ot=a.stateNode.containerInfo,ie=!0,na(t,e,a),Ot=l,ie=n;break;case 0:case 11:case 14:case 15:Bt||Sa(2,a,e),Bt||Sa(4,a,e),na(t,e,a);break;case 1:Bt||(qe(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Sd(a,e,l)),na(t,e,a);break;case 21:na(t,e,a);break;case 22:Bt=(l=Bt)||a.memoizedState!==null,na(t,e,a),Bt=l;break;default:na(t,e,a)}}function Od(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{tu(t)}catch(a){Rt(e,e.return,a)}}function M0(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Td),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Td),e;default:throw Error(r(435,t.tag))}}function Tr(t,e){var a=M0(t);e.forEach(function(l){var n=X0.bind(null,t,l);a.has(l)||(a.add(l),l.then(n,n))})}function me(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,s=e,d=s;t:for(;d!==null;){switch(d.tag){case 27:if(Oa(d.type)){Ot=d.stateNode,ie=!1;break t}break;case 5:Ot=d.stateNode,ie=!1;break t;case 3:case 4:Ot=d.stateNode.containerInfo,ie=!0;break t}d=d.return}if(Ot===null)throw Error(r(160));wd(i,s,n),Ot=null,ie=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Nd(e,t),e=e.sibling}var Me=null;function Nd(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:me(e,t),pe(t),l&4&&(Sa(3,t,t.return),Hn(3,t),Sa(5,t,t.return));break;case 1:me(e,t),pe(t),l&512&&(Bt||a===null||qe(a,a.return)),l&64&&la&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Me;if(me(e,t),pe(t),l&512&&(Bt||a===null||qe(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[cn]||i[It]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ft(i,l,a),i[It]=t,Zt(i),l=i;break t;case"link":var s=zh("link","href",n).get(l+(a.href||""));if(s){for(var d=0;d<s.length;d++)if(i=s[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(d,1);break e}}i=n.createElement(l),Ft(i,l,a),n.head.appendChild(i);break;case"meta":if(s=zh("meta","content",n).get(l+(a.content||""))){for(d=0;d<s.length;d++)if(i=s[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(d,1);break e}}i=n.createElement(l),Ft(i,l,a),n.head.appendChild(i);break;default:throw Error(r(468,l))}i[It]=t,Zt(i),l=i}t.stateNode=l}else Th(n,t.type,t.stateNode);else t.stateNode=Ah(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Th(n,t.type,t.stateNode):Ah(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Sr(t,t.memoizedProps,a.memoizedProps)}break;case 27:me(e,t),pe(t),l&512&&(Bt||a===null||qe(a,a.return)),a!==null&&l&4&&Sr(t,t.memoizedProps,a.memoizedProps);break;case 5:if(me(e,t),pe(t),l&512&&(Bt||a===null||qe(a,a.return)),t.flags&32){n=t.stateNode;try{pl(n,"")}catch(w){Rt(t,t.return,w)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Sr(t,n,a!==null?a.memoizedProps:n)),l&1024&&(zr=!0);break;case 6:if(me(e,t),pe(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(w){Rt(t,t.return,w)}}break;case 3:if(bi=null,n=Me,Me=yi(e.containerInfo),me(e,t),Me=n,pe(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{tu(e.containerInfo)}catch(w){Rt(t,t.return,w)}zr&&(zr=!1,_d(t));break;case 4:l=Me,Me=yi(t.stateNode.containerInfo),me(e,t),pe(t),Me=l;break;case 12:me(e,t),pe(t);break;case 13:me(e,t),pe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_r=He()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tr(t,l)));break;case 22:n=t.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,T=la,_=Bt;if(la=T||n,Bt=_||p,me(e,t),Bt=_,la=T,pe(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||p||la||Bt||Pa(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){p=a=e;try{if(i=p.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=p.stateNode;var U=p.memoizedProps.style,D=U!=null&&U.hasOwnProperty("display")?U.display:null;d.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(w){Rt(p,p.return,w)}}}else if(e.tag===6){if(a===null){p=e;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(w){Rt(p,p.return,w)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Tr(t,a))));break;case 19:me(e,t),pe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tr(t,l)));break;case 30:break;case 21:break;default:me(e,t),pe(t)}}function pe(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Ad(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,i=Er(t);ni(t,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(pl(s,""),a.flags&=-33);var d=Er(t);ni(t,d,s);break;case 3:case 4:var p=a.stateNode.containerInfo,T=Er(t);Ar(t,T,p);break;default:throw Error(r(161))}}catch(_){Rt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _d(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;_d(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ea(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Rd(t,e.alternate,e),e=e.sibling}function Pa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Sa(4,e,e.return),Pa(e);break;case 1:qe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Sd(e,e.return,a),Pa(e);break;case 27:Kn(e.stateNode);case 26:case 5:qe(e,e.return),Pa(e);break;case 22:e.memoizedState===null&&Pa(e);break;case 30:Pa(e);break;default:Pa(e)}t=t.sibling}}function Aa(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,s=i.flags;switch(i.tag){case 0:case 11:case 15:Aa(n,i,a),Hn(4,i);break;case 1:if(Aa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(T){Rt(l,l.return,T)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)uf(p[n],d)}catch(T){Rt(l,l.return,T)}}a&&s&64&&xd(i),Bn(i,i.return);break;case 27:zd(i);case 26:case 5:Aa(n,i,a),a&&l===null&&s&4&&Ed(i),Bn(i,i.return);break;case 12:Aa(n,i,a);break;case 13:Aa(n,i,a),a&&s&4&&Od(n,i);break;case 22:i.memoizedState===null&&Aa(n,i,a),Bn(i,i.return);break;case 30:break;default:Aa(n,i,a)}e=e.sibling}}function Rr(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&En(a))}function Dr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&En(t))}function Le(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jd(t,e,a,l),e=e.sibling}function jd(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Le(t,e,a,l),n&2048&&Hn(9,e);break;case 1:Le(t,e,a,l);break;case 3:Le(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&En(t)));break;case 12:if(n&2048){Le(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,s=i.id,d=i.onPostCommit;typeof d=="function"&&d(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){Rt(e,e.return,p)}}else Le(t,e,a,l);break;case 13:Le(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,s=e.alternate,e.memoizedState!==null?i._visibility&2?Le(t,e,a,l):Yn(t,e):i._visibility&2?Le(t,e,a,l):(i._visibility|=2,Cl(t,e,a,l,(e.subtreeFlags&10256)!==0)),n&2048&&Rr(s,e);break;case 24:Le(t,e,a,l),n&2048&&Dr(e.alternate,e);break;default:Le(t,e,a,l)}}function Cl(t,e,a,l,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,s=e,d=a,p=l,T=s.flags;switch(s.tag){case 0:case 11:case 15:Cl(i,s,d,p,n),Hn(8,s);break;case 23:break;case 22:var _=s.stateNode;s.memoizedState!==null?_._visibility&2?Cl(i,s,d,p,n):Yn(i,s):(_._visibility|=2,Cl(i,s,d,p,n)),n&&T&2048&&Rr(s.alternate,s);break;case 24:Cl(i,s,d,p,n),n&&T&2048&&Dr(s.alternate,s);break;default:Cl(i,s,d,p,n)}e=e.sibling}}function Yn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:Yn(a,l),n&2048&&Rr(l.alternate,l);break;case 24:Yn(a,l),n&2048&&Dr(l.alternate,l);break;default:Yn(a,l)}e=e.sibling}}var qn=8192;function Ul(t){if(t.subtreeFlags&qn)for(t=t.child;t!==null;)Md(t),t=t.sibling}function Md(t){switch(t.tag){case 26:Ul(t),t.flags&qn&&t.memoizedState!==null&&vg(Me,t.memoizedState,t.memoizedProps);break;case 5:Ul(t);break;case 3:case 4:var e=Me;Me=yi(t.stateNode.containerInfo),Ul(t),Me=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=qn,qn=16777216,Ul(t),qn=e):Ul(t));break;default:Ul(t)}}function Cd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ln(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Kt=l,Hd(l,t)}Cd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ud(t),t=t.sibling}function Ud(t){switch(t.tag){case 0:case 11:case 15:Ln(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:Ln(t);break;case 12:Ln(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ui(t)):Ln(t);break;default:Ln(t)}}function ui(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Kt=l,Hd(l,t)}Cd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Sa(8,e,e.return),ui(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,ui(e));break;default:ui(e)}t=t.sibling}}function Hd(t,e){for(;Kt!==null;){var a=Kt;switch(a.tag){case 0:case 11:case 15:Sa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:En(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Kt=l;else t:for(a=t;Kt!==null;){l=Kt;var n=l.sibling,i=l.return;if(Dd(l),l===a){Kt=null;break t}if(n!==null){n.return=i,Kt=n;break t}Kt=i}}}var C0={getCacheForType:function(t){var e=te(Xt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},U0=typeof WeakMap=="function"?WeakMap:Map,xt=0,Dt=null,ft=null,ht=0,St=0,ge=null,za=!1,Hl=!1,wr=!1,ua=0,Ct=0,Ta=0,Ia=0,Or=0,we=0,Bl=0,Gn=null,ce=null,Nr=!1,_r=0,ii=1/0,ci=null,Ra=null,Wt=0,Da=null,Yl=null,ql=0,jr=0,Mr=null,Bd=null,Xn=0,Cr=null;function ye(){if((xt&2)!==0&&ht!==0)return ht&-ht;if(N.T!==null){var t=Rl;return t!==0?t:Gr()}return Po()}function Yd(){we===0&&(we=(ht&536870912)===0||yt?Jo():536870912);var t=De.current;return t!==null&&(t.flags|=32),we}function ve(t,e,a){(t===Dt&&(St===2||St===9)||t.cancelPendingCommit!==null)&&(Ll(t,0),wa(t,ht,we,!1)),un(t,a),((xt&2)===0||t!==Dt)&&(t===Dt&&((xt&2)===0&&(Ia|=a),Ct===4&&wa(t,ht,we,!1)),Ge(t))}function qd(t,e,a){if((xt&6)!==0)throw Error(r(327));var l=!a&&(e&124)===0&&(e&t.expiredLanes)===0||nn(t,e),n=l?Y0(t,e):Br(t,e,!0),i=l;do{if(n===0){Hl&&!l&&wa(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!H0(a)){n=Br(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var d=t;n=Gn;var p=d.current.memoizedState.isDehydrated;if(p&&(Ll(d,s).flags|=256),s=Br(d,s,!1),s!==2){if(wr&&!p){d.errorRecoveryDisabledLanes|=i,Ia|=i,n=4;break t}i=ce,ce=n,i!==null&&(ce===null?ce=i:ce.push.apply(ce,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){Ll(t,0),wa(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:wa(l,e,we,!za);break t;case 2:ce=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(n=_r+300-He(),10<n)){if(wa(l,e,we,!za),vu(l,0,!0)!==0)break t;l.timeoutHandle=mh(Ld.bind(null,l,a,ce,ci,Nr,e,we,Ia,Bl,za,i,2,-0,0),n);break t}Ld(l,a,ce,ci,Nr,e,we,Ia,Bl,za,i,0,-0,0)}}break}while(!0);Ge(t)}function Ld(t,e,a,l,n,i,s,d,p,T,_,U,D,w){if(t.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&($n={stylesheets:null,count:0,unsuspend:yg},Md(e),U=bg(),U!==null)){t.cancelPendingCommit=U(kd.bind(null,t,e,i,a,l,n,s,d,p,_,1,D,w)),wa(t,i,s,!T);return}kd(t,e,i,a,l,n,s,d,p)}function H0(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!de(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wa(t,e,a,l){e&=~Or,e&=~Ia,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-fe(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&Wo(t,a,e)}function ri(){return(xt&6)===0?(Qn(0),!1):!0}function Ur(){if(ft!==null){if(St===0)var t=ft.return;else t=ft,Fe=ka=null,Pc(t),jl=null,Mn=0,t=ft;for(;t!==null;)bd(t.alternate,t),t=t.return;ft=null}}function Ll(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,tg(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ur(),Dt=t,ft=a=Je(t.current,null),ht=e,St=0,ge=null,za=!1,Hl=nn(t,e),wr=!1,Bl=we=Or=Ia=Ta=Ct=0,ce=Gn=null,Nr=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-fe(l),i=1<<n;e|=t[n],l&=~i}return ua=e,Nu(),a}function Gd(t,e){ot=null,N.H=$u,e===zn||e===qu?(e=lf(),St=3):e===tf?(e=lf(),St=4):St=e===ud?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,ft===null&&(Ct=1,ti(t,Ae(e,t.current)))}function Xd(){var t=N.H;return N.H=$u,t===null?$u:t}function Qd(){var t=N.A;return N.A=C0,t}function Hr(){Ct=4,za||(ht&4194048)!==ht&&De.current!==null||(Hl=!0),(Ta&134217727)===0&&(Ia&134217727)===0||Dt===null||wa(Dt,ht,we,!1)}function Br(t,e,a){var l=xt;xt|=2;var n=Xd(),i=Qd();(Dt!==t||ht!==e)&&(ci=null,Ll(t,e)),e=!1;var s=Ct;t:do try{if(St!==0&&ft!==null){var d=ft,p=ge;switch(St){case 8:Ur(),s=6;break t;case 3:case 2:case 9:case 6:De.current===null&&(e=!0);var T=St;if(St=0,ge=null,Gl(t,d,p,T),a&&Hl){s=0;break t}break;default:T=St,St=0,ge=null,Gl(t,d,p,T)}}B0(),s=Ct;break}catch(_){Gd(t,_)}while(!0);return e&&t.shellSuspendCounter++,Fe=ka=null,xt=l,N.H=n,N.A=i,ft===null&&(Dt=null,ht=0,Nu()),s}function B0(){for(;ft!==null;)Zd(ft)}function Y0(t,e){var a=xt;xt|=2;var l=Xd(),n=Qd();Dt!==t||ht!==e?(ci=null,ii=He()+500,Ll(t,e)):Hl=nn(t,e);t:do try{if(St!==0&&ft!==null){e=ft;var i=ge;e:switch(St){case 1:St=0,ge=null,Gl(t,e,i,1);break;case 2:case 9:if(ef(i)){St=0,ge=null,Vd(e);break}e=function(){St!==2&&St!==9||Dt!==t||(St=7),Ge(t)},i.then(e,e);break t;case 3:St=7;break t;case 4:St=5;break t;case 7:ef(i)?(St=0,ge=null,Vd(e)):(St=0,ge=null,Gl(t,e,i,7));break;case 5:var s=null;switch(ft.tag){case 26:s=ft.memoizedState;case 5:case 27:var d=ft;if(!s||Rh(s)){St=0,ge=null;var p=d.sibling;if(p!==null)ft=p;else{var T=d.return;T!==null?(ft=T,oi(T)):ft=null}break e}}St=0,ge=null,Gl(t,e,i,5);break;case 6:St=0,ge=null,Gl(t,e,i,6);break;case 8:Ur(),Ct=6;break t;default:throw Error(r(462))}}q0();break}catch(_){Gd(t,_)}while(!0);return Fe=ka=null,N.H=l,N.A=n,xt=a,ft!==null?0:(Dt=null,ht=0,Nu(),Ct)}function q0(){for(;ft!==null&&!cp();)Zd(ft)}function Zd(t){var e=yd(t.alternate,t,ua);t.memoizedProps=t.pendingProps,e===null?oi(t):ft=e}function Vd(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=fd(a,e,e.pendingProps,e.type,void 0,ht);break;case 11:e=fd(a,e,e.pendingProps,e.type.render,e.ref,ht);break;case 5:Pc(e);default:bd(a,e),e=ft=Vs(e,ua),e=yd(a,e,ua)}t.memoizedProps=t.pendingProps,e===null?oi(t):ft=e}function Gl(t,e,a,l){Fe=ka=null,Pc(e),jl=null,Mn=0;var n=e.return;try{if(w0(t,n,e,a,ht)){Ct=1,ti(t,Ae(a,t.current)),ft=null;return}}catch(i){if(n!==null)throw ft=n,i;Ct=1,ti(t,Ae(a,t.current)),ft=null;return}e.flags&32768?(yt||l===1?t=!0:Hl||(ht&536870912)!==0?t=!1:(za=t=!0,(l===2||l===9||l===3||l===6)&&(l=De.current,l!==null&&l.tag===13&&(l.flags|=16384))),Kd(e,t)):oi(e)}function oi(t){var e=t;do{if((e.flags&32768)!==0){Kd(e,za);return}t=e.return;var a=N0(e.alternate,e,ua);if(a!==null){ft=a;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Ct===0&&(Ct=5)}function Kd(t,e){do{var a=_0(t.alternate,t);if(a!==null){a.flags&=32767,ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=a}while(t!==null);Ct=6,ft=null}function kd(t,e,a,l,n,i,s,d,p){t.cancelPendingCommit=null;do si();while(Wt!==0);if((xt&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=Dc,yp(t,a,i,s,d,p),t===Dt&&(ft=Dt=null,ht=0),Yl=e,Da=t,ql=a,jr=i,Mr=n,Bd=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Q0(pu,function(){return Pd(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,n=Q.p,Q.p=2,s=xt,xt|=4;try{j0(t,e,a)}finally{xt=s,Q.p=n,N.T=l}}Wt=1,Jd(),$d(),Wd()}}function Jd(){if(Wt===1){Wt=0;var t=Da,e=Yl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var l=Q.p;Q.p=2;var n=xt;xt|=4;try{Nd(e,t);var i=$r,s=Us(t.containerInfo),d=i.focusedElem,p=i.selectionRange;if(s!==d&&d&&d.ownerDocument&&Cs(d.ownerDocument.documentElement,d)){if(p!==null&&Ec(d)){var T=p.start,_=p.end;if(_===void 0&&(_=T),"selectionStart"in d)d.selectionStart=T,d.selectionEnd=Math.min(_,d.value.length);else{var U=d.ownerDocument||document,D=U&&U.defaultView||window;if(D.getSelection){var w=D.getSelection(),nt=d.textContent.length,at=Math.min(p.start,nt),zt=p.end===void 0?at:Math.min(p.end,nt);!w.extend&&at>zt&&(s=zt,zt=at,at=s);var S=Ms(d,at),b=Ms(d,zt);if(S&&b&&(w.rangeCount!==1||w.anchorNode!==S.node||w.anchorOffset!==S.offset||w.focusNode!==b.node||w.focusOffset!==b.offset)){var A=U.createRange();A.setStart(S.node,S.offset),w.removeAllRanges(),at>zt?(w.addRange(A),w.extend(b.node,b.offset)):(A.setEnd(b.node,b.offset),w.addRange(A))}}}}for(U=[],w=d;w=w.parentNode;)w.nodeType===1&&U.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<U.length;d++){var M=U[d];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Ei=!!Jr,$r=Jr=null}finally{xt=n,Q.p=l,N.T=a}}t.current=e,Wt=2}}function $d(){if(Wt===2){Wt=0;var t=Da,e=Yl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var l=Q.p;Q.p=2;var n=xt;xt|=4;try{Rd(t,e.alternate,e)}finally{xt=n,Q.p=l,N.T=a}}Wt=3}}function Wd(){if(Wt===4||Wt===3){Wt=0,rp();var t=Da,e=Yl,a=ql,l=Bd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Wt=5:(Wt=0,Yl=Da=null,Fd(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Ra=null),ec(a),e=e.stateNode,se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ln,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=N.T,n=Q.p,Q.p=2,N.T=null;try{for(var i=t.onRecoverableError,s=0;s<l.length;s++){var d=l[s];i(d.value,{componentStack:d.stack})}}finally{N.T=e,Q.p=n}}(ql&3)!==0&&si(),Ge(t),n=t.pendingLanes,(a&4194090)!==0&&(n&42)!==0?t===Cr?Xn++:(Xn=0,Cr=t):Xn=0,Qn(0)}}function Fd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,En(e)))}function si(t){return Jd(),$d(),Wd(),Pd()}function Pd(){if(Wt!==5)return!1;var t=Da,e=jr;jr=0;var a=ec(ql),l=N.T,n=Q.p;try{Q.p=32>a?32:a,N.T=null,a=Mr,Mr=null;var i=Da,s=ql;if(Wt=0,Yl=Da=null,ql=0,(xt&6)!==0)throw Error(r(331));var d=xt;if(xt|=4,Ud(i.current),jd(i,i.current,s,a),xt=d,Qn(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ln,i)}catch{}return!0}finally{Q.p=n,N.T=l,Fd(t,e)}}function Id(t,e,a){e=Ae(a,e),e=dr(t.stateNode,e,2),t=ya(t,e,2),t!==null&&(un(t,2),Ge(t))}function Rt(t,e,a){if(t.tag===3)Id(t,t,a);else for(;e!==null;){if(e.tag===3){Id(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ra===null||!Ra.has(l))){t=Ae(a,t),a=ld(2),l=ya(e,a,2),l!==null&&(nd(a,l,e,t),un(l,2),Ge(l));break}}e=e.return}}function Yr(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new U0;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(wr=!0,n.add(a),t=L0.bind(null,t,e,a),e.then(t,t))}function L0(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Dt===t&&(ht&a)===a&&(Ct===4||Ct===3&&(ht&62914560)===ht&&300>He()-_r?(xt&2)===0&&Ll(t,0):Or|=a,Bl===ht&&(Bl=0)),Ge(t)}function th(t,e){e===0&&(e=$o()),t=El(t,e),t!==null&&(un(t,e),Ge(t))}function G0(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),th(t,a)}function X0(t,e){var a=0;switch(t.tag){case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(e),th(t,a)}function Q0(t,e){return Fi(t,e)}var fi=null,Xl=null,qr=!1,di=!1,Lr=!1,tl=0;function Ge(t){t!==Xl&&t.next===null&&(Xl===null?fi=Xl=t:Xl=Xl.next=t),di=!0,qr||(qr=!0,V0())}function Qn(t,e){if(!Lr&&di){Lr=!0;do for(var a=!1,l=fi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-fe(42|t)+1)-1,i&=n&~(s&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,nh(l,i))}else i=ht,i=vu(l,l===Dt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||nn(l,i)||(a=!0,nh(l,i));l=l.next}while(a);Lr=!1}}function Z0(){eh()}function eh(){di=qr=!1;var t=0;tl!==0&&(I0()&&(t=tl),tl=0);for(var e=He(),a=null,l=fi;l!==null;){var n=l.next,i=ah(l,e);i===0?(l.next=null,a===null?fi=n:a.next=n,n===null&&(Xl=a)):(a=l,(t!==0||(i&3)!==0)&&(di=!0)),l=n}Qn(t)}function ah(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var s=31-fe(i),d=1<<s,p=n[s];p===-1?((d&a)===0||(d&l)!==0)&&(n[s]=gp(d,e)):p<=e&&(t.expiredLanes|=d),i&=~d}if(e=Dt,a=ht,a=vu(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(St===2||St===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Pi(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||nn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Pi(l),ec(a)){case 2:case 8:a=Ko;break;case 32:a=pu;break;case 268435456:a=ko;break;default:a=pu}return l=lh.bind(null,t),a=Fi(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Pi(l),t.callbackPriority=2,t.callbackNode=null,2}function lh(t,e){if(Wt!==0&&Wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(si()&&t.callbackNode!==a)return null;var l=ht;return l=vu(t,t===Dt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(qd(t,l,e),ah(t,He()),t.callbackNode!=null&&t.callbackNode===a?lh.bind(null,t):null)}function nh(t,e){if(si())return null;qd(t,e,!0)}function V0(){eg(function(){(xt&6)!==0?Fi(Vo,Z0):eh()})}function Gr(){return tl===0&&(tl=Jo()),tl}function uh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Au(""+t)}function ih(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function K0(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=uh((n[le]||null).action),s=l.submitter;s&&(e=(e=s[le]||null)?uh(e.formAction):s.getAttribute("formAction"),e!==null&&(i=e,s=null));var d=new Du("action","action",null,l,n);t.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(tl!==0){var p=s?ih(n,s):new FormData(n);cr(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(d.preventDefault(),p=s?ih(n,s):new FormData(n),cr(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var Xr=0;Xr<Rc.length;Xr++){var Qr=Rc[Xr],k0=Qr.toLowerCase(),J0=Qr[0].toUpperCase()+Qr.slice(1);je(k0,"on"+J0)}je(Ys,"onAnimationEnd"),je(qs,"onAnimationIteration"),je(Ls,"onAnimationStart"),je("dblclick","onDoubleClick"),je("focusin","onFocus"),je("focusout","onBlur"),je(f0,"onTransitionRun"),je(d0,"onTransitionStart"),je(h0,"onTransitionCancel"),je(Gs,"onTransitionEnd"),dl("onMouseEnter",["mouseout","mouseover"]),dl("onMouseLeave",["mouseout","mouseover"]),dl("onPointerEnter",["pointerout","pointerover"]),dl("onPointerLeave",["pointerout","pointerover"]),Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zn));function ch(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var s=l.length-1;0<=s;s--){var d=l[s],p=d.instance,T=d.currentTarget;if(d=d.listener,p!==i&&n.isPropagationStopped())break t;i=d,n.currentTarget=T;try{i(n)}catch(_){Iu(_)}n.currentTarget=null,i=p}else for(s=0;s<l.length;s++){if(d=l[s],p=d.instance,T=d.currentTarget,d=d.listener,p!==i&&n.isPropagationStopped())break t;i=d,n.currentTarget=T;try{i(n)}catch(_){Iu(_)}n.currentTarget=null,i=p}}}}function dt(t,e){var a=e[ac];a===void 0&&(a=e[ac]=new Set);var l=t+"__bubble";a.has(l)||(rh(e,t,2,!1),a.add(l))}function Zr(t,e,a){var l=0;e&&(l|=4),rh(a,t,l,e)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Vr(t){if(!t[hi]){t[hi]=!0,ts.forEach(function(a){a!=="selectionchange"&&($0.has(a)||Zr(a,!1,t),Zr(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hi]||(e[hi]=!0,Zr("selectionchange",!1,e))}}function rh(t,e,a,l){switch(jh(e)){case 2:var n=Eg;break;case 8:n=Ag;break;default:n=uo}a=n.bind(null,e,a,t),n=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Kr(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var d=l.stateNode.containerInfo;if(d===n)break;if(s===4)for(s=l.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;d!==null;){if(s=ol(d),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){l=i=s;continue t}d=d.parentNode}}l=l.return}ms(function(){var T=i,_=fc(a),U=[];t:{var D=Xs.get(t);if(D!==void 0){var w=Du,nt=t;switch(t){case"keypress":if(Tu(a)===0)break t;case"keydown":case"keyup":w=Qp;break;case"focusin":nt="focus",w=yc;break;case"focusout":nt="blur",w=yc;break;case"beforeblur":case"afterblur":w=yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Kp;break;case Ys:case qs:case Ls:w=Cp;break;case Gs:w=Jp;break;case"scroll":case"scrollend":w=Op;break;case"wheel":w=Wp;break;case"copy":case"cut":case"paste":w=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=bs;break;case"toggle":case"beforetoggle":w=Pp}var at=(e&4)!==0,zt=!at&&(t==="scroll"||t==="scrollend"),S=at?D!==null?D+"Capture":null:D;at=[];for(var b=T,A;b!==null;){var M=b;if(A=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||A===null||S===null||(M=on(b,S),M!=null&&at.push(Vn(b,M,A))),zt)break;b=b.return}0<at.length&&(D=new w(D,nt,null,a,_),U.push({event:D,listeners:at}))}}if((e&7)===0){t:{if(D=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",D&&a!==sc&&(nt=a.relatedTarget||a.fromElement)&&(ol(nt)||nt[rl]))break t;if((w||D)&&(D=_.window===_?_:(D=_.ownerDocument)?D.defaultView||D.parentWindow:window,w?(nt=a.relatedTarget||a.toElement,w=T,nt=nt?ol(nt):null,nt!==null&&(zt=h(nt),at=nt.tag,nt!==zt||at!==5&&at!==27&&at!==6)&&(nt=null)):(w=null,nt=T),w!==nt)){if(at=ys,M="onMouseLeave",S="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(at=bs,M="onPointerLeave",S="onPointerEnter",b="pointer"),zt=w==null?D:rn(w),A=nt==null?D:rn(nt),D=new at(M,b+"leave",w,a,_),D.target=zt,D.relatedTarget=A,M=null,ol(_)===T&&(at=new at(S,b+"enter",nt,a,_),at.target=A,at.relatedTarget=zt,M=at),zt=M,w&&nt)e:{for(at=w,S=nt,b=0,A=at;A;A=Ql(A))b++;for(A=0,M=S;M;M=Ql(M))A++;for(;0<b-A;)at=Ql(at),b--;for(;0<A-b;)S=Ql(S),A--;for(;b--;){if(at===S||S!==null&&at===S.alternate)break e;at=Ql(at),S=Ql(S)}at=null}else at=null;w!==null&&oh(U,D,w,at,!1),nt!==null&&zt!==null&&oh(U,zt,nt,at,!0)}}t:{if(D=T?rn(T):window,w=D.nodeName&&D.nodeName.toLowerCase(),w==="select"||w==="input"&&D.type==="file")var k=Ds;else if(Ts(D))if(ws)k=r0;else{k=i0;var st=u0}else w=D.nodeName,!w||w.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?T&&oc(T.elementType)&&(k=Ds):k=c0;if(k&&(k=k(t,T))){Rs(U,k,a,_);break t}st&&st(t,D,T),t==="focusout"&&T&&D.type==="number"&&T.memoizedProps.value!=null&&rc(D,"number",D.value)}switch(st=T?rn(T):window,t){case"focusin":(Ts(st)||st.contentEditable==="true")&&(bl=st,Ac=T,yn=null);break;case"focusout":yn=Ac=bl=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Hs(U,a,_);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":Hs(U,a,_)}var F;if(bc)t:{switch(t){case"compositionstart":var lt="onCompositionStart";break t;case"compositionend":lt="onCompositionEnd";break t;case"compositionupdate":lt="onCompositionUpdate";break t}lt=void 0}else vl?As(t,a)&&(lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(xs&&a.locale!=="ko"&&(vl||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&vl&&(F=ps()):(ha=_,mc="value"in ha?ha.value:ha.textContent,vl=!0)),st=mi(T,lt),0<st.length&&(lt=new vs(lt,t,null,a,_),U.push({event:lt,listeners:st}),F?lt.data=F:(F=zs(a),F!==null&&(lt.data=F)))),(F=t0?e0(t,a):a0(t,a))&&(lt=mi(T,"onBeforeInput"),0<lt.length&&(st=new vs("onBeforeInput","beforeinput",null,a,_),U.push({event:st,listeners:lt}),st.data=F)),K0(U,t,T,a,_)}ch(U,e)})}function Vn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function mi(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=on(t,a),n!=null&&l.unshift(Vn(t,n,i)),n=on(t,e),n!=null&&l.push(Vn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function Ql(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function oh(t,e,a,l,n){for(var i=e._reactName,s=[];a!==null&&a!==l;){var d=a,p=d.alternate,T=d.stateNode;if(d=d.tag,p!==null&&p===l)break;d!==5&&d!==26&&d!==27||T===null||(p=T,n?(T=on(a,i),T!=null&&s.unshift(Vn(a,T,p))):n||(T=on(a,i),T!=null&&s.push(Vn(a,T,p)))),a=a.return}s.length!==0&&t.push({event:e,listeners:s})}var W0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(W0,`
`).replace(F0,"")}function fh(t,e){return e=sh(e),sh(t)===e}function pi(){}function At(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||pl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&pl(t,""+l);break;case"className":xu(t,"class",l);break;case"tabIndex":xu(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xu(t,a,l);break;case"style":ds(t,l,i);break;case"data":if(e!=="object"){xu(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Au(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&At(t,e,"name",n.name,n,null),At(t,e,"formEncType",n.formEncType,n,null),At(t,e,"formMethod",n.formMethod,n,null),At(t,e,"formTarget",n.formTarget,n,null)):(At(t,e,"encType",n.encType,n,null),At(t,e,"method",n.method,n,null),At(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Au(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=pi);break;case"onScroll":l!=null&&dt("scroll",t);break;case"onScrollEnd":l!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Au(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":dt("beforetoggle",t),dt("toggle",t),bu(t,"popover",l);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":bu(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dp.get(a)||a,bu(t,a,l))}}function kr(t,e,a,l,n,i){switch(a){case"style":ds(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?pl(t,l):(typeof l=="number"||typeof l=="bigint")&&pl(t,""+l);break;case"onScroll":l!=null&&dt("scroll",t);break;case"onScrollEnd":l!=null&&dt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!es.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[le]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):bu(t,a,l)}}}function Ft(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:At(t,e,i,s,a,null)}}n&&At(t,e,"srcSet",a.srcSet,a,null),l&&At(t,e,"src",a.src,a,null);return;case"input":dt("invalid",t);var d=i=s=n=null,p=null,T=null;for(l in a)if(a.hasOwnProperty(l)){var _=a[l];if(_!=null)switch(l){case"name":n=_;break;case"type":s=_;break;case"checked":p=_;break;case"defaultChecked":T=_;break;case"value":i=_;break;case"defaultValue":d=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,e));break;default:At(t,e,l,_,a,null)}}rs(t,i,d,p,T,s,n,!1),Su(t);return;case"select":dt("invalid",t),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":s=d;break;case"multiple":l=d;default:At(t,e,n,d,a,null)}e=i,a=s,t.multiple=!!l,e!=null?ml(t,!!l,e,!1):a!=null&&ml(t,!!l,a,!0);return;case"textarea":dt("invalid",t),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:At(t,e,s,d,a,null)}ss(t,l,n,i),Su(t);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:At(t,e,p,l,a,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(l=0;l<Zn.length;l++)dt(Zn[l],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:At(t,e,T,l,a,null)}return;default:if(oc(e)){for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!==void 0&&kr(t,e,_,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&At(t,e,d,l,a,null))}function P0(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,d=null,p=null,T=null,_=null;for(w in a){var U=a[w];if(a.hasOwnProperty(w)&&U!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":p=U;default:l.hasOwnProperty(w)||At(t,e,w,null,l,U)}}for(var D in l){var w=l[D];if(U=a[D],l.hasOwnProperty(D)&&(w!=null||U!=null))switch(D){case"type":i=w;break;case"name":n=w;break;case"checked":T=w;break;case"defaultChecked":_=w;break;case"value":s=w;break;case"defaultValue":d=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,e));break;default:w!==U&&At(t,e,D,w,l,U)}}cc(t,s,d,p,T,_,i,n);return;case"select":w=s=d=D=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":w=p;default:l.hasOwnProperty(i)||At(t,e,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":D=i;break;case"defaultValue":d=i;break;case"multiple":s=i;default:i!==p&&At(t,e,n,i,l,p)}e=d,a=s,l=w,D!=null?ml(t,!!a,D,!1):!!l!=!!a&&(e!=null?ml(t,!!a,e,!0):ml(t,!!a,a?[]:"",!1));return;case"textarea":w=D=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:At(t,e,d,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":D=n;break;case"defaultValue":w=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&At(t,e,s,n,l,i)}os(t,D,w);return;case"option":for(var nt in a)if(D=a[nt],a.hasOwnProperty(nt)&&D!=null&&!l.hasOwnProperty(nt))switch(nt){case"selected":t.selected=!1;break;default:At(t,e,nt,null,l,D)}for(p in l)if(D=l[p],w=a[p],l.hasOwnProperty(p)&&D!==w&&(D!=null||w!=null))switch(p){case"selected":t.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:At(t,e,p,D,l,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)D=a[at],a.hasOwnProperty(at)&&D!=null&&!l.hasOwnProperty(at)&&At(t,e,at,null,l,D);for(T in l)if(D=l[T],w=a[T],l.hasOwnProperty(T)&&D!==w&&(D!=null||w!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,e));break;default:At(t,e,T,D,l,w)}return;default:if(oc(e)){for(var zt in a)D=a[zt],a.hasOwnProperty(zt)&&D!==void 0&&!l.hasOwnProperty(zt)&&kr(t,e,zt,void 0,l,D);for(_ in l)D=l[_],w=a[_],!l.hasOwnProperty(_)||D===w||D===void 0&&w===void 0||kr(t,e,_,D,l,w);return}}for(var S in a)D=a[S],a.hasOwnProperty(S)&&D!=null&&!l.hasOwnProperty(S)&&At(t,e,S,null,l,D);for(U in l)D=l[U],w=a[U],!l.hasOwnProperty(U)||D===w||D==null&&w==null||At(t,e,U,D,l,w)}var Jr=null,$r=null;function gi(t){return t.nodeType===9?t:t.ownerDocument}function dh(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hh(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Wr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fr=null;function I0(){var t=window.event;return t&&t.type==="popstate"?t===Fr?!1:(Fr=t,!0):(Fr=null,!1)}var mh=typeof setTimeout=="function"?setTimeout:void 0,tg=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,eg=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(t){return ph.resolve(null).then(t).catch(ag)}:mh;function ag(t){setTimeout(function(){throw t})}function Oa(t){return t==="head"}function gh(t,e){var a=e,l=0,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var s=t.ownerDocument;if(a&1&&Kn(s.documentElement),a&2&&Kn(s.body),a&4)for(a=s.head,Kn(a),s=a.firstChild;s;){var d=s.nextSibling,p=s.nodeName;s[cn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}if(n===0){t.removeChild(i),tu(e);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);tu(e)}function Pr(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pr(a),lc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function lg(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[cn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ce(t.nextSibling),t===null)break}return null}function ng(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ce(t.nextSibling),t===null))return null;return t}function Ir(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function ug(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ce(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var to=null;function yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function vh(t,e,a){switch(e=gi(a),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Kn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);lc(t)}var Oe=new Map,bh=new Set;function yi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ia=Q.d;Q.d={f:ig,r:cg,D:rg,C:og,L:sg,m:fg,X:hg,S:dg,M:mg};function ig(){var t=ia.f(),e=ri();return t||e}function cg(t){var e=sl(t);e!==null&&e.tag===5&&e.type==="form"?qf(e):ia.r(t)}var Zl=typeof document>"u"?null:document;function xh(t,e,a){var l=Zl;if(l&&typeof e=="string"&&e){var n=Ee(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),bh.has(n)||(bh.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Ft(e,"link",t),Zt(e),l.head.appendChild(e)))}}function rg(t){ia.D(t),xh("dns-prefetch",t,null)}function og(t,e){ia.C(t,e),xh("preconnect",t,e)}function sg(t,e,a){ia.L(t,e,a);var l=Zl;if(l&&t&&e){var n='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Ee(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Ee(a.imageSizes)+'"]')):n+='[href="'+Ee(t)+'"]';var i=n;switch(e){case"style":i=Vl(t);break;case"script":i=Kl(t)}Oe.has(i)||(t=E({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Oe.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(kn(i))||e==="script"&&l.querySelector(Jn(i))||(e=l.createElement("link"),Ft(e,"link",t),Zt(e),l.head.appendChild(e)))}}function fg(t,e){ia.m(t,e);var a=Zl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Ee(l)+'"][href="'+Ee(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Kl(t)}if(!Oe.has(i)&&(t=E({rel:"modulepreload",href:t},e),Oe.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jn(i)))return}l=a.createElement("link"),Ft(l,"link",t),Zt(l),a.head.appendChild(l)}}}function dg(t,e,a){ia.S(t,e,a);var l=Zl;if(l&&t){var n=fl(l).hoistableStyles,i=Vl(t);e=e||"default";var s=n.get(i);if(!s){var d={loading:0,preload:null};if(s=l.querySelector(kn(i)))d.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Oe.get(i))&&eo(t,a);var p=s=l.createElement("link");Zt(p),Ft(p,"link",t),p._p=new Promise(function(T,_){p.onload=T,p.onerror=_}),p.addEventListener("load",function(){d.loading|=1}),p.addEventListener("error",function(){d.loading|=2}),d.loading|=4,vi(s,e,l)}s={type:"stylesheet",instance:s,count:1,state:d},n.set(i,s)}}}function hg(t,e){ia.X(t,e);var a=Zl;if(a&&t){var l=fl(a).hoistableScripts,n=Kl(t),i=l.get(n);i||(i=a.querySelector(Jn(n)),i||(t=E({src:t,async:!0},e),(e=Oe.get(n))&&ao(t,e),i=a.createElement("script"),Zt(i),Ft(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function mg(t,e){ia.M(t,e);var a=Zl;if(a&&t){var l=fl(a).hoistableScripts,n=Kl(t),i=l.get(n);i||(i=a.querySelector(Jn(n)),i||(t=E({src:t,async:!0,type:"module"},e),(e=Oe.get(n))&&ao(t,e),i=a.createElement("script"),Zt(i),Ft(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Sh(t,e,a,l){var n=(n=I.current)?yi(n):null;if(!n)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Vl(a.href),a=fl(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vl(a.href);var i=fl(n).hoistableStyles,s=i.get(t);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,s),(i=n.querySelector(kn(t)))&&!i._p&&(s.instance=i,s.state.loading=5),Oe.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Oe.set(t,a),i||pg(n,t,a,s.state))),e&&l===null)throw Error(r(528,""));return s}if(e&&l!==null)throw Error(r(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Kl(a),a=fl(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vl(t){return'href="'+Ee(t)+'"'}function kn(t){return'link[rel="stylesheet"]['+t+"]"}function Eh(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function pg(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Ft(e,"link",a),Zt(e),t.head.appendChild(e))}function Kl(t){return'[src="'+Ee(t)+'"]'}function Jn(t){return"script[async]"+t}function Ah(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Ee(a.href)+'"]');if(l)return e.instance=l,Zt(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Zt(l),Ft(l,"style",n),vi(l,a.precedence,t),e.instance=l;case"stylesheet":n=Vl(a.href);var i=t.querySelector(kn(n));if(i)return e.state.loading|=4,e.instance=i,Zt(i),i;l=Eh(a),(n=Oe.get(n))&&eo(l,n),i=(t.ownerDocument||t).createElement("link"),Zt(i);var s=i;return s._p=new Promise(function(d,p){s.onload=d,s.onerror=p}),Ft(i,"link",l),e.state.loading|=4,vi(i,a.precedence,t),e.instance=i;case"script":return i=Kl(a.src),(n=t.querySelector(Jn(i)))?(e.instance=n,Zt(n),n):(l=a,(n=Oe.get(i))&&(l=E({},a),ao(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Zt(n),Ft(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,vi(l,a.precedence,t));return e.instance}function vi(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var d=l[s];if(d.dataset.precedence===e)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function eo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ao(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var bi=null;function zh(t,e,a){if(bi===null){var l=new Map,n=bi=new Map;n.set(a,l)}else n=bi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[cn]||i[It]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(e)||"";s=t+s;var d=l.get(s);d?d.push(i):l.set(s,[i])}}return l}function Th(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function gg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Rh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var $n=null;function yg(){}function vg(t,e,a){if($n===null)throw Error(r(475));var l=$n;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Vl(a.href),i=t.querySelector(kn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=xi.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=i,Zt(i);return}i=t.ownerDocument||t,a=Eh(a),(n=Oe.get(n))&&eo(a,n),i=i.createElement("link"),Zt(i);var s=i;s._p=new Promise(function(d,p){s.onload=d,s.onerror=p}),Ft(i,"link",a),e.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=xi.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}function bg(){if($n===null)throw Error(r(475));var t=$n;return t.stylesheets&&t.count===0&&lo(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&lo(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function xi(){if(this.count--,this.count===0){if(this.stylesheets)lo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Si=null;function lo(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Si=new Map,e.forEach(xg,t),Si=null,xi.call(t))}function xg(t,e){if(!(e.state.loading&4)){var a=Si.get(t);if(a)var l=a.get(null);else{a=new Map,Si.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=e.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=xi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Wn={$$typeof:Z,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Sg(t,e,a,l,n,i,s,d){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ii(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.hiddenUpdates=Ii(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Dh(t,e,a,l,n,i,s,d,p,T,_,U){return t=new Sg(t,e,a,s,d,p,T,U),e=1,i===!0&&(e|=24),i=he(3,null,null,e),t.current=i,i.stateNode=t,e=Yc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},Xc(i),t}function wh(t){return t?(t=Al,t):Al}function Oh(t,e,a,l,n,i){n=wh(n),l.context===null?l.context=n:l.pendingContext=n,l=ga(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(t,l,e),a!==null&&(ve(a,t,e),Rn(a,t,e))}function Nh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function no(t,e){Nh(t,e),(t=t.alternate)&&Nh(t,e)}function _h(t){if(t.tag===13){var e=El(t,67108864);e!==null&&ve(e,t,67108864),no(t,67108864)}}var Ei=!0;function Eg(t,e,a,l){var n=N.T;N.T=null;var i=Q.p;try{Q.p=2,uo(t,e,a,l)}finally{Q.p=i,N.T=n}}function Ag(t,e,a,l){var n=N.T;N.T=null;var i=Q.p;try{Q.p=8,uo(t,e,a,l)}finally{Q.p=i,N.T=n}}function uo(t,e,a,l){if(Ei){var n=io(l);if(n===null)Kr(t,e,l,Ai,a),Mh(t,l);else if(Tg(n,t,e,a,l))l.stopPropagation();else if(Mh(t,l),e&4&&-1<zg.indexOf(t)){for(;n!==null;){var i=sl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ba(i.pendingLanes);if(s!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var p=1<<31-fe(s);d.entanglements[1]|=p,s&=~p}Ge(i),(xt&6)===0&&(ii=He()+500,Qn(0))}}break;case 13:d=El(i,2),d!==null&&ve(d,i,2),ri(),no(i,2)}if(i=io(l),i===null&&Kr(t,e,l,Ai,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Kr(t,e,l,null,a)}}function io(t){return t=fc(t),co(t)}var Ai=null;function co(t){if(Ai=null,t=ol(t),t!==null){var e=h(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=y(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ai=t,null}function jh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(op()){case Vo:return 2;case Ko:return 8;case pu:case sp:return 32;case ko:return 268435456;default:return 32}default:return 32}}var ro=!1,Na=null,_a=null,ja=null,Fn=new Map,Pn=new Map,Ma=[],zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mh(t,e){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Fn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(e.pointerId)}}function In(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=sl(e),e!==null&&_h(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Tg(t,e,a,l,n){switch(e){case"focusin":return Na=In(Na,t,e,a,l,n),!0;case"dragenter":return _a=In(_a,t,e,a,l,n),!0;case"mouseover":return ja=In(ja,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return Fn.set(i,In(Fn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Pn.set(i,In(Pn.get(i)||null,t,e,a,l,n)),!0}return!1}function Ch(t){var e=ol(t.target);if(e!==null){var a=h(e);if(a!==null){if(e=a.tag,e===13){if(e=y(a),e!==null){t.blockedOn=e,vp(t.priority,function(){if(a.tag===13){var l=ye();l=tc(l);var n=El(a,l);n!==null&&ve(n,a,l),no(a,l)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=io(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);sc=l,a.target.dispatchEvent(l),sc=null}else return e=sl(a),e!==null&&_h(e),t.blockedOn=a,!1;e.shift()}return!0}function Uh(t,e,a){zi(t)&&a.delete(e)}function Rg(){ro=!1,Na!==null&&zi(Na)&&(Na=null),_a!==null&&zi(_a)&&(_a=null),ja!==null&&zi(ja)&&(ja=null),Fn.forEach(Uh),Pn.forEach(Uh)}function Ti(t,e){t.blockedOn===e&&(t.blockedOn=null,ro||(ro=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Rg)))}var Ri=null;function Hh(t){Ri!==t&&(Ri=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Ri===t&&(Ri=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(co(l||a)===null)continue;break}var i=sl(a);i!==null&&(t.splice(e,3),e-=3,cr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function tu(t){function e(p){return Ti(p,t)}Na!==null&&Ti(Na,t),_a!==null&&Ti(_a,t),ja!==null&&Ti(ja,t),Fn.forEach(e),Pn.forEach(e);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Ch(a),a.blockedOn===null&&Ma.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[le]||null;if(typeof i=="function")s||Hh(a);else if(s){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[le]||null)d=s.formAction;else if(co(n)!==null)continue}else d=s.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),Hh(a)}}}function oo(t){this._internalRoot=t}Di.prototype.render=oo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var a=e.current,l=ye();Oh(a,l,t,e,null,null)},Di.prototype.unmount=oo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Oh(t.current,2,null,t,null,null),ri(),e[rl]=null}};function Di(t){this._internalRoot=t}Di.prototype.unstable_scheduleHydration=function(t){if(t){var e=Po();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Ma.length&&e!==0&&e<Ma[a].priority;a++);Ma.splice(a,0,t),a===0&&Ch(t)}};var Bh=c.version;if(Bh!=="19.1.1")throw Error(r(527,Bh,"19.1.1"));Q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Dg={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{ln=wi.inject(Dg),se=wi}catch{}}return au.createRoot=function(t,e){if(!f(t))throw Error(r(299));var a=!1,l="",n=If,i=td,s=ed,d=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(d=e.unstable_transitionCallbacks)),e=Dh(t,1,!1,null,null,a,l,n,i,s,d,null),t[rl]=e.current,Vr(t),new oo(e)},au.hydrateRoot=function(t,e,a){if(!f(t))throw Error(r(299));var l=!1,n="",i=If,s=td,d=ed,p=null,T=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(p=a.unstable_transitionCallbacks),a.formState!==void 0&&(T=a.formState)),e=Dh(t,1,!0,e,a??null,l,n,i,s,d,p,T),e.context=wh(null),a=e.current,l=ye(),l=tc(l),n=ga(l),n.callback=null,ya(a,n,l),a=l,e.current.lanes=a,un(e,a),Ge(e),t[rl]=e.current,Vr(t),new Di(e)},au.version="19.1.1",au}var kh;function Yg(){if(kh)return ho.exports;kh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),ho.exports=Bg(),ho.exports}var qg=Yg();/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jh="popstate";function Lg(u={}){function c(r,f){let{pathname:h,search:y,hash:z}=r.location;return Ao("",{pathname:h,search:y,hash:z},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function o(r,f){return typeof f=="string"?f:cu(f)}return Xg(c,o,null,u)}function jt(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function Qe(u,c){if(!u){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Gg(){return Math.random().toString(36).substring(2,10)}function $h(u,c){return{usr:u.state,key:u.key,idx:c}}function Ao(u,c,o=null,r){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof c=="string"?tn(c):c,state:o,key:c&&c.key||r||Gg()}}function cu({pathname:u="/",search:c="",hash:o=""}){return c&&c!=="?"&&(u+=c.charAt(0)==="?"?c:"?"+c),o&&o!=="#"&&(u+=o.charAt(0)==="#"?o:"#"+o),u}function tn(u){let c={};if(u){let o=u.indexOf("#");o>=0&&(c.hash=u.substring(o),u=u.substring(0,o));let r=u.indexOf("?");r>=0&&(c.search=u.substring(r),u=u.substring(0,r)),u&&(c.pathname=u)}return c}function Xg(u,c,o,r={}){let{window:f=document.defaultView,v5Compat:h=!1}=r,y=f.history,z="POP",g=null,m=E();m==null&&(m=0,y.replaceState({...y.state,idx:m},""));function E(){return(y.state||{idx:null}).idx}function j(){z="POP";let X=E(),H=X==null?null:X-m;m=X,g&&g({action:z,location:G.location,delta:H})}function C(X,H){z="PUSH";let J=Ao(G.location,X,H);m=E()+1;let Z=$h(J,m),tt=G.createHref(J);try{y.pushState(Z,"",tt)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;f.location.assign(tt)}h&&g&&g({action:z,location:G.location,delta:1})}function L(X,H){z="REPLACE";let J=Ao(G.location,X,H);m=E();let Z=$h(J,m),tt=G.createHref(J);y.replaceState(Z,"",tt),h&&g&&g({action:z,location:G.location,delta:0})}function q(X){return Qg(X)}let G={get action(){return z},get location(){return u(f,y)},listen(X){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(Jh,j),g=X,()=>{f.removeEventListener(Jh,j),g=null}},createHref(X){return c(f,X)},createURL:q,encodeLocation(X){let H=q(X);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:C,replace:L,go(X){return y.go(X)}};return G}function Qg(u,c=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),jt(o,"No window.location.(origin|href) available to create URL");let r=typeof u=="string"?u:cu(u);return r=r.replace(/ $/,"%20"),!c&&r.startsWith("//")&&(r=o+r),new URL(r,o)}function gm(u,c,o="/"){return Zg(u,c,o,!1)}function Zg(u,c,o,r){let f=typeof c=="string"?tn(c):c,h=oa(f.pathname||"/",o);if(h==null)return null;let y=ym(u);Vg(y);let z=null;for(let g=0;z==null&&g<y.length;++g){let m=ay(h);z=ty(y[g],m,r)}return z}function ym(u,c=[],o=[],r=""){let f=(h,y,z)=>{let g={relativePath:z===void 0?h.path||"":z,caseSensitive:h.caseSensitive===!0,childrenIndex:y,route:h};g.relativePath.startsWith("/")&&(jt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length));let m=ra([r,g.relativePath]),E=o.concat(g);h.children&&h.children.length>0&&(jt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),ym(h.children,c,E,m)),!(h.path==null&&!h.index)&&c.push({path:m,score:Pg(m,h.index),routesMeta:E})};return u.forEach((h,y)=>{if(h.path===""||!h.path?.includes("?"))f(h,y);else for(let z of vm(h.path))f(h,y,z)}),c}function vm(u){let c=u.split("/");if(c.length===0)return[];let[o,...r]=c,f=o.endsWith("?"),h=o.replace(/\?$/,"");if(r.length===0)return f?[h,""]:[h];let y=vm(r.join("/")),z=[];return z.push(...y.map(g=>g===""?h:[h,g].join("/"))),f&&z.push(...y),z.map(g=>u.startsWith("/")&&g===""?"/":g)}function Vg(u){u.sort((c,o)=>c.score!==o.score?o.score-c.score:Ig(c.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var Kg=/^:[\w-]+$/,kg=3,Jg=2,$g=1,Wg=10,Fg=-2,Wh=u=>u==="*";function Pg(u,c){let o=u.split("/"),r=o.length;return o.some(Wh)&&(r+=Fg),c&&(r+=Jg),o.filter(f=>!Wh(f)).reduce((f,h)=>f+(Kg.test(h)?kg:h===""?$g:Wg),r)}function Ig(u,c){return u.length===c.length&&u.slice(0,-1).every((r,f)=>r===c[f])?u[u.length-1]-c[c.length-1]:0}function ty(u,c,o=!1){let{routesMeta:r}=u,f={},h="/",y=[];for(let z=0;z<r.length;++z){let g=r[z],m=z===r.length-1,E=h==="/"?c:c.slice(h.length)||"/",j=qi({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},E),C=g.route;if(!j&&m&&o&&!r[r.length-1].route.index&&(j=qi({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!j)return null;Object.assign(f,j.params),y.push({params:f,pathname:ra([h,j.pathname]),pathnameBase:iy(ra([h,j.pathnameBase])),route:C}),j.pathnameBase!=="/"&&(h=ra([h,j.pathnameBase]))}return y}function qi(u,c){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[o,r]=ey(u.path,u.caseSensitive,u.end),f=c.match(o);if(!f)return null;let h=f[0],y=h.replace(/(.)\/+$/,"$1"),z=f.slice(1);return{params:r.reduce((m,{paramName:E,isOptional:j},C)=>{if(E==="*"){let q=z[C]||"";y=h.slice(0,h.length-q.length).replace(/(.)\/+$/,"$1")}const L=z[C];return j&&!L?m[E]=void 0:m[E]=(L||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:y,pattern:u}}function ey(u,c=!1,o=!0){Qe(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],f="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,z,g)=>(r.push({paramName:z,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return u.endsWith("*")?(r.push({paramName:"*"}),f+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?f+="\\/*$":u!==""&&u!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),r]}function ay(u){try{return u.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Qe(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),u}}function oa(u,c){if(c==="/")return u;if(!u.toLowerCase().startsWith(c.toLowerCase()))return null;let o=c.endsWith("/")?c.length-1:c.length,r=u.charAt(o);return r&&r!=="/"?null:u.slice(o)||"/"}function ly(u,c="/"){let{pathname:o,search:r="",hash:f=""}=typeof u=="string"?tn(u):u;return{pathname:o?o.startsWith("/")?o:ny(o,c):c,search:cy(r),hash:ry(f)}}function ny(u,c){let o=c.replace(/\/+$/,"").split("/");return u.split("/").forEach(f=>{f===".."?o.length>1&&o.pop():f!=="."&&o.push(f)}),o.length>1?o.join("/"):"/"}function yo(u,c,o,r){return`Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uy(u){return u.filter((c,o)=>o===0||c.route.path&&c.route.path.length>0)}function bm(u){let c=uy(u);return c.map((o,r)=>r===c.length-1?o.pathname:o.pathnameBase)}function xm(u,c,o,r=!1){let f;typeof u=="string"?f=tn(u):(f={...u},jt(!f.pathname||!f.pathname.includes("?"),yo("?","pathname","search",f)),jt(!f.pathname||!f.pathname.includes("#"),yo("#","pathname","hash",f)),jt(!f.search||!f.search.includes("#"),yo("#","search","hash",f)));let h=u===""||f.pathname==="",y=h?"/":f.pathname,z;if(y==null)z=o;else{let j=c.length-1;if(!r&&y.startsWith("..")){let C=y.split("/");for(;C[0]==="..";)C.shift(),j-=1;f.pathname=C.join("/")}z=j>=0?c[j]:"/"}let g=ly(f,z),m=y&&y!=="/"&&y.endsWith("/"),E=(h||y===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(m||E)&&(g.pathname+="/"),g}var ra=u=>u.join("/").replace(/\/\/+/g,"/"),iy=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),cy=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,ry=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function oy(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}var Sm=["POST","PUT","PATCH","DELETE"];new Set(Sm);var sy=["GET",...Sm];new Set(sy);var en=O.createContext(null);en.displayName="DataRouter";var Qi=O.createContext(null);Qi.displayName="DataRouterState";O.createContext(!1);var Em=O.createContext({isTransitioning:!1});Em.displayName="ViewTransition";var fy=O.createContext(new Map);fy.displayName="Fetchers";var dy=O.createContext(null);dy.displayName="Await";var Ze=O.createContext(null);Ze.displayName="Navigation";var fu=O.createContext(null);fu.displayName="Location";var sa=O.createContext({outlet:null,matches:[],isDataRoute:!1});sa.displayName="Route";var Co=O.createContext(null);Co.displayName="RouteError";function hy(u,{relative:c}={}){jt(du(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=O.useContext(Ze),{hash:f,pathname:h,search:y}=hu(u,{relative:c}),z=h;return o!=="/"&&(z=h==="/"?o:ra([o,h])),r.createHref({pathname:z,search:y,hash:f})}function du(){return O.useContext(fu)!=null}function ul(){return jt(du(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(fu).location}var Am="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zm(u){O.useContext(Ze).static||O.useLayoutEffect(u)}function il(){let{isDataRoute:u}=O.useContext(sa);return u?Ry():my()}function my(){jt(du(),"useNavigate() may be used only in the context of a <Router> component.");let u=O.useContext(en),{basename:c,navigator:o}=O.useContext(Ze),{matches:r}=O.useContext(sa),{pathname:f}=ul(),h=JSON.stringify(bm(r)),y=O.useRef(!1);return zm(()=>{y.current=!0}),O.useCallback((g,m={})=>{if(Qe(y.current,Am),!y.current)return;if(typeof g=="number"){o.go(g);return}let E=xm(g,JSON.parse(h),f,m.relative==="path");u==null&&c!=="/"&&(E.pathname=E.pathname==="/"?c:ra([c,E.pathname])),(m.replace?o.replace:o.push)(E,m.state,m)},[c,o,h,f,u])}O.createContext(null);function hu(u,{relative:c}={}){let{matches:o}=O.useContext(sa),{pathname:r}=ul(),f=JSON.stringify(bm(o));return O.useMemo(()=>xm(u,JSON.parse(f),r,c==="path"),[u,f,r,c])}function py(u,c){return Tm(u,c)}function Tm(u,c,o,r){jt(du(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=O.useContext(Ze),{matches:h}=O.useContext(sa),y=h[h.length-1],z=y?y.params:{},g=y?y.pathname:"/",m=y?y.pathnameBase:"/",E=y&&y.route;{let H=E&&E.path||"";Rm(g,!E||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let j=ul(),C;if(c){let H=typeof c=="string"?tn(c):c;jt(m==="/"||H.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${H.pathname}" was given in the \`location\` prop.`),C=H}else C=j;let L=C.pathname||"/",q=L;if(m!=="/"){let H=m.replace(/^\//,"").split("/");q="/"+L.replace(/^\//,"").split("/").slice(H.length).join("/")}let G=gm(u,{pathname:q});Qe(E||G!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Qe(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=xy(G&&G.map(H=>Object.assign({},H,{params:Object.assign({},z,H.params),pathname:ra([m,f.encodeLocation?f.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?m:ra([m,f.encodeLocation?f.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),h,o,r);return c&&X?O.createElement(fu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},X):X}function gy(){let u=Ty(),c=oy(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),o=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},y=null;return console.error("Error handled by React Router default ErrorBoundary:",u),y=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:h},"ErrorBoundary")," or"," ",O.createElement("code",{style:h},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},c),o?O.createElement("pre",{style:f},o):null,y)}var yy=O.createElement(gy,null),vy=class extends O.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,c){return c.location!==u.location||c.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:c.error,location:c.location,revalidation:u.revalidation||c.revalidation}}componentDidCatch(u,c){console.error("React Router caught the following error during render",u,c)}render(){return this.state.error!==void 0?O.createElement(sa.Provider,{value:this.props.routeContext},O.createElement(Co.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function by({routeContext:u,match:c,children:o}){let r=O.useContext(en);return r&&r.static&&r.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=c.route.id),O.createElement(sa.Provider,{value:u},o)}function xy(u,c=[],o=null,r=null){if(u==null){if(!o)return null;if(o.errors)u=o.matches;else if(c.length===0&&!o.initialized&&o.matches.length>0)u=o.matches;else return null}let f=u,h=o?.errors;if(h!=null){let g=f.findIndex(m=>m.route.id&&h?.[m.route.id]!==void 0);jt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,g+1))}let y=!1,z=-1;if(o)for(let g=0;g<f.length;g++){let m=f[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(z=g),m.route.id){let{loaderData:E,errors:j}=o,C=m.route.loader&&!E.hasOwnProperty(m.route.id)&&(!j||j[m.route.id]===void 0);if(m.route.lazy||C){y=!0,z>=0?f=f.slice(0,z+1):f=[f[0]];break}}}return f.reduceRight((g,m,E)=>{let j,C=!1,L=null,q=null;o&&(j=h&&m.route.id?h[m.route.id]:void 0,L=m.route.errorElement||yy,y&&(z<0&&E===0?(Rm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,q=null):z===E&&(C=!0,q=m.route.hydrateFallbackElement||null)));let G=c.concat(f.slice(0,E+1)),X=()=>{let H;return j?H=L:C?H=q:m.route.Component?H=O.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=g,O.createElement(by,{match:m,routeContext:{outlet:g,matches:G,isDataRoute:o!=null},children:H})};return o&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?O.createElement(vy,{location:o.location,revalidation:o.revalidation,component:L,error:j,children:X(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):X()},null)}function Uo(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sy(u){let c=O.useContext(en);return jt(c,Uo(u)),c}function Ey(u){let c=O.useContext(Qi);return jt(c,Uo(u)),c}function Ay(u){let c=O.useContext(sa);return jt(c,Uo(u)),c}function Ho(u){let c=Ay(u),o=c.matches[c.matches.length-1];return jt(o.route.id,`${u} can only be used on routes that contain a unique "id"`),o.route.id}function zy(){return Ho("useRouteId")}function Ty(){let u=O.useContext(Co),c=Ey("useRouteError"),o=Ho("useRouteError");return u!==void 0?u:c.errors?.[o]}function Ry(){let{router:u}=Sy("useNavigate"),c=Ho("useNavigate"),o=O.useRef(!1);return zm(()=>{o.current=!0}),O.useCallback(async(f,h={})=>{Qe(o.current,Am),o.current&&(typeof f=="number"?u.navigate(f):await u.navigate(f,{fromRouteId:c,...h}))},[u,c])}var Fh={};function Rm(u,c,o){!c&&!Fh[u]&&(Fh[u]=!0,Qe(!1,o))}O.memo(Dy);function Dy({routes:u,future:c,state:o}){return Tm(u,void 0,o,c)}function el(u){jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wy({basename:u="/",children:c=null,location:o,navigationType:r="POP",navigator:f,static:h=!1}){jt(!du(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=u.replace(/^\/*/,"/"),z=O.useMemo(()=>({basename:y,navigator:f,static:h,future:{}}),[y,f,h]);typeof o=="string"&&(o=tn(o));let{pathname:g="/",search:m="",hash:E="",state:j=null,key:C="default"}=o,L=O.useMemo(()=>{let q=oa(g,y);return q==null?null:{location:{pathname:q,search:m,hash:E,state:j,key:C},navigationType:r}},[y,g,m,E,j,C,r]);return Qe(L!=null,`<Router basename="${y}"> is not able to match the URL "${g}${m}${E}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:O.createElement(Ze.Provider,{value:z},O.createElement(fu.Provider,{children:c,value:L}))}function Oy({children:u,location:c}){return py(zo(u),c)}function zo(u,c=[]){let o=[];return O.Children.forEach(u,(r,f)=>{if(!O.isValidElement(r))return;let h=[...c,f];if(r.type===O.Fragment){o.push.apply(o,zo(r.props.children,h));return}jt(r.type===el,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let y={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(y.children=zo(r.props.children,h)),o.push(y)}),o}var ji="get",Mi="application/x-www-form-urlencoded";function Zi(u){return u!=null&&typeof u.tagName=="string"}function Ny(u){return Zi(u)&&u.tagName.toLowerCase()==="button"}function _y(u){return Zi(u)&&u.tagName.toLowerCase()==="form"}function jy(u){return Zi(u)&&u.tagName.toLowerCase()==="input"}function My(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Cy(u,c){return u.button===0&&(!c||c==="_self")&&!My(u)}var Oi=null;function Uy(){if(Oi===null)try{new FormData(document.createElement("form"),0),Oi=!1}catch{Oi=!0}return Oi}var Hy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vo(u){return u!=null&&!Hy.has(u)?(Qe(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mi}"`),null):u}function By(u,c){let o,r,f,h,y;if(_y(u)){let z=u.getAttribute("action");r=z?oa(z,c):null,o=u.getAttribute("method")||ji,f=vo(u.getAttribute("enctype"))||Mi,h=new FormData(u)}else if(Ny(u)||jy(u)&&(u.type==="submit"||u.type==="image")){let z=u.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=u.getAttribute("formaction")||z.getAttribute("action");if(r=g?oa(g,c):null,o=u.getAttribute("formmethod")||z.getAttribute("method")||ji,f=vo(u.getAttribute("formenctype"))||vo(z.getAttribute("enctype"))||Mi,h=new FormData(z,u),!Uy()){let{name:m,type:E,value:j}=u;if(E==="image"){let C=m?`${m}.`:"";h.append(`${C}x`,"0"),h.append(`${C}y`,"0")}else m&&h.append(m,j)}}else{if(Zi(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=ji,r=null,f=Mi,y=u}return h&&f==="text/plain"&&(y=h,h=void 0),{action:r,method:o.toLowerCase(),encType:f,formData:h,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bo(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function Yy(u,c,o){let r=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return r.pathname==="/"?r.pathname=`_root.${o}`:c&&oa(r.pathname,c)==="/"?r.pathname=`${c.replace(/\/$/,"")}/_root.${o}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${o}`,r}async function qy(u,c){if(u.id in c)return c[u.id];try{let o=await import(u.module);return c[u.id]=o,o}catch(o){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ly(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Gy(u,c,o){let r=await Promise.all(u.map(async f=>{let h=c.routes[f.route.id];if(h){let y=await qy(h,o);return y.links?y.links():[]}return[]}));return Vy(r.flat(1).filter(Ly).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Ph(u,c,o,r,f,h){let y=(g,m)=>o[m]?g.route.id!==o[m].route.id:!0,z=(g,m)=>o[m].pathname!==g.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==g.params["*"];return h==="assets"?c.filter((g,m)=>y(g,m)||z(g,m)):h==="data"?c.filter((g,m)=>{let E=r.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(y(g,m)||z(g,m))return!0;if(g.route.shouldRevalidate){let j=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Xy(u,c,{includeHydrateFallback:o}={}){return Qy(u.map(r=>{let f=c.routes[r.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),o&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Qy(u){return[...new Set(u)]}function Zy(u){let c={},o=Object.keys(u).sort();for(let r of o)c[r]=u[r];return c}function Vy(u,c){let o=new Set;return new Set(c),u.reduce((r,f)=>{let h=JSON.stringify(Zy(f));return o.has(h)||(o.add(h),r.push({key:h,link:f})),r},[])}function Dm(){let u=O.useContext(en);return Bo(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function Ky(){let u=O.useContext(Qi);return Bo(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var Yo=O.createContext(void 0);Yo.displayName="FrameworkContext";function wm(){let u=O.useContext(Yo);return Bo(u,"You must render this element inside a <HydratedRouter> element"),u}function ky(u,c){let o=O.useContext(Yo),[r,f]=O.useState(!1),[h,y]=O.useState(!1),{onFocus:z,onBlur:g,onMouseEnter:m,onMouseLeave:E,onTouchStart:j}=c,C=O.useRef(null);O.useEffect(()=>{if(u==="render"&&y(!0),u==="viewport"){let G=H=>{H.forEach(J=>{y(J.isIntersecting)})},X=new IntersectionObserver(G,{threshold:.5});return C.current&&X.observe(C.current),()=>{X.disconnect()}}},[u]),O.useEffect(()=>{if(r){let G=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(G)}}},[r]);let L=()=>{f(!0)},q=()=>{f(!1),y(!1)};return o?u!=="intent"?[h,C,{}]:[h,C,{onFocus:lu(z,L),onBlur:lu(g,q),onMouseEnter:lu(m,L),onMouseLeave:lu(E,q),onTouchStart:lu(j,L)}]:[!1,C,{}]}function lu(u,c){return o=>{u&&u(o),o.defaultPrevented||c(o)}}function Jy({page:u,...c}){let{router:o}=Dm(),r=O.useMemo(()=>gm(o.routes,u,o.basename),[o.routes,u,o.basename]);return r?O.createElement(Wy,{page:u,matches:r,...c}):null}function $y(u){let{manifest:c,routeModules:o}=wm(),[r,f]=O.useState([]);return O.useEffect(()=>{let h=!1;return Gy(u,c,o).then(y=>{h||f(y)}),()=>{h=!0}},[u,c,o]),r}function Wy({page:u,matches:c,...o}){let r=ul(),{manifest:f,routeModules:h}=wm(),{basename:y}=Dm(),{loaderData:z,matches:g}=Ky(),m=O.useMemo(()=>Ph(u,c,g,f,r,"data"),[u,c,g,f,r]),E=O.useMemo(()=>Ph(u,c,g,f,r,"assets"),[u,c,g,f,r]),j=O.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let q=new Set,G=!1;if(c.forEach(H=>{let J=f.routes[H.route.id];!J||!J.hasLoader||(!m.some(Z=>Z.route.id===H.route.id)&&H.route.id in z&&h[H.route.id]?.shouldRevalidate||J.hasClientLoader?G=!0:q.add(H.route.id))}),q.size===0)return[];let X=Yy(u,y,"data");return G&&q.size>0&&X.searchParams.set("_routes",c.filter(H=>q.has(H.route.id)).map(H=>H.route.id).join(",")),[X.pathname+X.search]},[y,z,r,f,m,c,u,h]),C=O.useMemo(()=>Xy(E,f),[E,f]),L=$y(E);return O.createElement(O.Fragment,null,j.map(q=>O.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...o})),C.map(q=>O.createElement("link",{key:q,rel:"modulepreload",href:q,...o})),L.map(({key:q,link:G})=>O.createElement("link",{key:q,nonce:o.nonce,...G})))}function Fy(...u){return c=>{u.forEach(o=>{typeof o=="function"?o(c):o!=null&&(o.current=c)})}}var Om=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Om&&(window.__reactRouterVersion="7.8.0")}catch{}function Py({basename:u,children:c,window:o}){let r=O.useRef();r.current==null&&(r.current=Lg({window:o,v5Compat:!0}));let f=r.current,[h,y]=O.useState({action:f.action,location:f.location}),z=O.useCallback(g=>{O.startTransition(()=>y(g))},[y]);return O.useLayoutEffect(()=>f.listen(z),[f,z]),O.createElement(wy,{basename:u,children:c,location:h.location,navigationType:h.action,navigator:f})}var Nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_m=O.forwardRef(function({onClick:c,discover:o="render",prefetch:r="none",relative:f,reloadDocument:h,replace:y,state:z,target:g,to:m,preventScrollReset:E,viewTransition:j,...C},L){let{basename:q}=O.useContext(Ze),G=typeof m=="string"&&Nm.test(m),X,H=!1;if(typeof m=="string"&&G&&(X=m,Om))try{let gt=new URL(window.location.href),ut=m.startsWith("//")?new URL(gt.protocol+m):new URL(m),Tt=oa(ut.pathname,q);ut.origin===gt.origin&&Tt!=null?m=Tt+ut.search+ut.hash:H=!0}catch{Qe(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=hy(m,{relative:f}),[Z,tt,K]=ky(r,C),et=av(m,{replace:y,state:z,target:g,preventScrollReset:E,relative:f,viewTransition:j});function $(gt){c&&c(gt),gt.defaultPrevented||et(gt)}let pt=O.createElement("a",{...C,...K,href:X||J,onClick:H||h?c:$,ref:Fy(L,tt),target:g,"data-discover":!G&&o==="render"?"true":void 0});return Z&&!G?O.createElement(O.Fragment,null,pt,O.createElement(Jy,{page:J})):pt});_m.displayName="Link";var Iy=O.forwardRef(function({"aria-current":c="page",caseSensitive:o=!1,className:r="",end:f=!1,style:h,to:y,viewTransition:z,children:g,...m},E){let j=hu(y,{relative:m.relative}),C=ul(),L=O.useContext(Qi),{navigator:q,basename:G}=O.useContext(Ze),X=L!=null&&cv(j)&&z===!0,H=q.encodeLocation?q.encodeLocation(j).pathname:j.pathname,J=C.pathname,Z=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;o||(J=J.toLowerCase(),Z=Z?Z.toLowerCase():null,H=H.toLowerCase()),Z&&G&&(Z=oa(Z,G)||Z);const tt=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let K=J===H||!f&&J.startsWith(H)&&J.charAt(tt)==="/",et=Z!=null&&(Z===H||!f&&Z.startsWith(H)&&Z.charAt(H.length)==="/"),$={isActive:K,isPending:et,isTransitioning:X},pt=K?c:void 0,gt;typeof r=="function"?gt=r($):gt=[r,K?"active":null,et?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let ut=typeof h=="function"?h($):h;return O.createElement(_m,{...m,"aria-current":pt,className:gt,ref:E,style:ut,to:y,viewTransition:z},typeof g=="function"?g($):g)});Iy.displayName="NavLink";var tv=O.forwardRef(({discover:u="render",fetcherKey:c,navigate:o,reloadDocument:r,replace:f,state:h,method:y=ji,action:z,onSubmit:g,relative:m,preventScrollReset:E,viewTransition:j,...C},L)=>{let q=uv(),G=iv(z,{relative:m}),X=y.toLowerCase()==="get"?"get":"post",H=typeof z=="string"&&Nm.test(z),J=Z=>{if(g&&g(Z),Z.defaultPrevented)return;Z.preventDefault();let tt=Z.nativeEvent.submitter,K=tt?.getAttribute("formmethod")||y;q(tt||Z.currentTarget,{fetcherKey:c,method:K,navigate:o,replace:f,state:h,relative:m,preventScrollReset:E,viewTransition:j})};return O.createElement("form",{ref:L,method:X,action:G,onSubmit:r?g:J,...C,"data-discover":!H&&u==="render"?"true":void 0})});tv.displayName="Form";function ev(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jm(u){let c=O.useContext(en);return jt(c,ev(u)),c}function av(u,{target:c,replace:o,state:r,preventScrollReset:f,relative:h,viewTransition:y}={}){let z=il(),g=ul(),m=hu(u,{relative:h});return O.useCallback(E=>{if(Cy(E,c)){E.preventDefault();let j=o!==void 0?o:cu(g)===cu(m);z(u,{replace:j,state:r,preventScrollReset:f,relative:h,viewTransition:y})}},[g,z,m,o,r,c,u,f,h,y])}var lv=0,nv=()=>`__${String(++lv)}__`;function uv(){let{router:u}=jm("useSubmit"),{basename:c}=O.useContext(Ze),o=zy();return O.useCallback(async(r,f={})=>{let{action:h,method:y,encType:z,formData:g,body:m}=By(r,c);if(f.navigate===!1){let E=f.fetcherKey||nv();await u.fetch(E,o,f.action||h,{preventScrollReset:f.preventScrollReset,formData:g,body:m,formMethod:f.method||y,formEncType:f.encType||z,flushSync:f.flushSync})}else await u.navigate(f.action||h,{preventScrollReset:f.preventScrollReset,formData:g,body:m,formMethod:f.method||y,formEncType:f.encType||z,replace:f.replace,state:f.state,fromRouteId:o,flushSync:f.flushSync,viewTransition:f.viewTransition})},[u,c,o])}function iv(u,{relative:c}={}){let{basename:o}=O.useContext(Ze),r=O.useContext(sa);jt(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),h={...hu(u||".",{relative:c})},y=ul();if(u==null){h.search=y.search;let z=new URLSearchParams(h.search),g=z.getAll("index");if(g.some(E=>E==="")){z.delete("index"),g.filter(j=>j).forEach(j=>z.append("index",j));let E=z.toString();h.search=E?`?${E}`:""}}return(!u||u===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:ra([o,h.pathname])),cu(h)}function cv(u,{relative:c}={}){let o=O.useContext(Em);jt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jm("useViewTransitionState"),f=hu(u,{relative:c});if(!o.isTransitioning)return!1;let h=oa(o.currentLocation.pathname,r)||o.currentLocation.pathname,y=oa(o.nextLocation.pathname,r)||o.nextLocation.pathname;return qi(f.pathname,y)!=null||qi(f.pathname,h)!=null}var re=function(){return re=Object.assign||function(c){for(var o,r=1,f=arguments.length;r<f;r++){o=arguments[r];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(c[h]=o[h])}return c},re.apply(this,arguments)};function ru(u,c,o){if(o||arguments.length===2)for(var r=0,f=c.length,h;r<f;r++)(h||!(r in c))&&(h||(h=Array.prototype.slice.call(c,0,r)),h[r]=c[r]);return u.concat(h||Array.prototype.slice.call(c))}var wt="-ms-",uu="-moz-",bt="-webkit-",Mm="comm",Vi="rule",qo="decl",rv="@import",Cm="@keyframes",ov="@layer",Um=Math.abs,Lo=String.fromCharCode,To=Object.assign;function sv(u,c){return Jt(u,0)^45?(((c<<2^Jt(u,0))<<2^Jt(u,1))<<2^Jt(u,2))<<2^Jt(u,3):0}function Hm(u){return u.trim()}function ca(u,c){return(u=c.exec(u))?u[0]:u}function ct(u,c,o){return u.replace(c,o)}function Ci(u,c,o){return u.indexOf(c,o)}function Jt(u,c){return u.charCodeAt(c)|0}function $l(u,c,o){return u.slice(c,o)}function Xe(u){return u.length}function Bm(u){return u.length}function nu(u,c){return c.push(u),u}function fv(u,c){return u.map(c).join("")}function Ih(u,c){return u.filter(function(o){return!ca(o,c)})}var Ki=1,Wl=1,Ym=0,Ne=0,Gt=0,an="";function ki(u,c,o,r,f,h,y,z){return{value:u,root:c,parent:o,type:r,props:f,children:h,line:Ki,column:Wl,length:y,return:"",siblings:z}}function Ua(u,c){return To(ki("",null,null,"",null,null,0,u.siblings),u,{length:-u.length},c)}function kl(u){for(;u.root;)u=Ua(u.root,{children:[u]});nu(u,u.siblings)}function dv(){return Gt}function hv(){return Gt=Ne>0?Jt(an,--Ne):0,Wl--,Gt===10&&(Wl=1,Ki--),Gt}function Ue(){return Gt=Ne<Ym?Jt(an,Ne++):0,Wl++,Gt===10&&(Wl=1,Ki++),Gt}function ll(){return Jt(an,Ne)}function Ui(){return Ne}function Ji(u,c){return $l(an,u,c)}function Ro(u){switch(u){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mv(u){return Ki=Wl=1,Ym=Xe(an=u),Ne=0,[]}function pv(u){return an="",u}function bo(u){return Hm(Ji(Ne-1,Do(u===91?u+2:u===40?u+1:u)))}function gv(u){for(;(Gt=ll())&&Gt<33;)Ue();return Ro(u)>2||Ro(Gt)>3?"":" "}function yv(u,c){for(;--c&&Ue()&&!(Gt<48||Gt>102||Gt>57&&Gt<65||Gt>70&&Gt<97););return Ji(u,Ui()+(c<6&&ll()==32&&Ue()==32))}function Do(u){for(;Ue();)switch(Gt){case u:return Ne;case 34:case 39:u!==34&&u!==39&&Do(Gt);break;case 40:u===41&&Do(u);break;case 92:Ue();break}return Ne}function vv(u,c){for(;Ue()&&u+Gt!==57;)if(u+Gt===84&&ll()===47)break;return"/*"+Ji(c,Ne-1)+"*"+Lo(u===47?u:Ue())}function bv(u){for(;!Ro(ll());)Ue();return Ji(u,Ne)}function xv(u){return pv(Hi("",null,null,null,[""],u=mv(u),0,[0],u))}function Hi(u,c,o,r,f,h,y,z,g){for(var m=0,E=0,j=y,C=0,L=0,q=0,G=1,X=1,H=1,J=0,Z="",tt=f,K=h,et=r,$=Z;X;)switch(q=J,J=Ue()){case 40:if(q!=108&&Jt($,j-1)==58){Ci($+=ct(bo(J),"&","&\f"),"&\f",Um(m?z[m-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:$+=bo(J);break;case 9:case 10:case 13:case 32:$+=gv(q);break;case 92:$+=yv(Ui()-1,7);continue;case 47:switch(ll()){case 42:case 47:nu(Sv(vv(Ue(),Ui()),c,o,g),g);break;default:$+="/"}break;case 123*G:z[m++]=Xe($)*H;case 125*G:case 59:case 0:switch(J){case 0:case 125:X=0;case 59+E:H==-1&&($=ct($,/\f/g,"")),L>0&&Xe($)-j&&nu(L>32?em($+";",r,o,j-1,g):em(ct($," ","")+";",r,o,j-2,g),g);break;case 59:$+=";";default:if(nu(et=tm($,c,o,m,E,f,z,Z,tt=[],K=[],j,h),h),J===123)if(E===0)Hi($,c,et,et,tt,h,j,z,K);else switch(C===99&&Jt($,3)===110?100:C){case 100:case 108:case 109:case 115:Hi(u,et,et,r&&nu(tm(u,et,et,0,0,f,z,Z,f,tt=[],j,K),K),f,K,j,z,r?tt:K);break;default:Hi($,et,et,et,[""],K,0,z,K)}}m=E=L=0,G=H=1,Z=$="",j=y;break;case 58:j=1+Xe($),L=q;default:if(G<1){if(J==123)--G;else if(J==125&&G++==0&&hv()==125)continue}switch($+=Lo(J),J*G){case 38:H=E>0?1:($+="\f",-1);break;case 44:z[m++]=(Xe($)-1)*H,H=1;break;case 64:ll()===45&&($+=bo(Ue())),C=ll(),E=j=Xe(Z=$+=bv(Ui())),J++;break;case 45:q===45&&Xe($)==2&&(G=0)}}return h}function tm(u,c,o,r,f,h,y,z,g,m,E,j){for(var C=f-1,L=f===0?h:[""],q=Bm(L),G=0,X=0,H=0;G<r;++G)for(var J=0,Z=$l(u,C+1,C=Um(X=y[G])),tt=u;J<q;++J)(tt=Hm(X>0?L[J]+" "+Z:ct(Z,/&\f/g,L[J])))&&(g[H++]=tt);return ki(u,c,o,f===0?Vi:z,g,m,E,j)}function Sv(u,c,o,r){return ki(u,c,o,Mm,Lo(dv()),$l(u,2,-2),0,r)}function em(u,c,o,r,f){return ki(u,c,o,qo,$l(u,0,r),$l(u,r+1,-1),r,f)}function qm(u,c,o){switch(sv(u,c)){case 5103:return bt+"print-"+u+u;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return bt+u+u;case 4789:return uu+u+u;case 5349:case 4246:case 4810:case 6968:case 2756:return bt+u+uu+u+wt+u+u;case 5936:switch(Jt(u,c+11)){case 114:return bt+u+wt+ct(u,/[svh]\w+-[tblr]{2}/,"tb")+u;case 108:return bt+u+wt+ct(u,/[svh]\w+-[tblr]{2}/,"tb-rl")+u;case 45:return bt+u+wt+ct(u,/[svh]\w+-[tblr]{2}/,"lr")+u}case 6828:case 4268:case 2903:return bt+u+wt+u+u;case 6165:return bt+u+wt+"flex-"+u+u;case 5187:return bt+u+ct(u,/(\w+).+(:[^]+)/,bt+"box-$1$2"+wt+"flex-$1$2")+u;case 5443:return bt+u+wt+"flex-item-"+ct(u,/flex-|-self/g,"")+(ca(u,/flex-|baseline/)?"":wt+"grid-row-"+ct(u,/flex-|-self/g,""))+u;case 4675:return bt+u+wt+"flex-line-pack"+ct(u,/align-content|flex-|-self/g,"")+u;case 5548:return bt+u+wt+ct(u,"shrink","negative")+u;case 5292:return bt+u+wt+ct(u,"basis","preferred-size")+u;case 6060:return bt+"box-"+ct(u,"-grow","")+bt+u+wt+ct(u,"grow","positive")+u;case 4554:return bt+ct(u,/([^-])(transform)/g,"$1"+bt+"$2")+u;case 6187:return ct(ct(ct(u,/(zoom-|grab)/,bt+"$1"),/(image-set)/,bt+"$1"),u,"")+u;case 5495:case 3959:return ct(u,/(image-set\([^]*)/,bt+"$1$`$1");case 4968:return ct(ct(u,/(.+:)(flex-)?(.*)/,bt+"box-pack:$3"+wt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+bt+u+u;case 4200:if(!ca(u,/flex-|baseline/))return wt+"grid-column-align"+$l(u,c)+u;break;case 2592:case 3360:return wt+ct(u,"template-","")+u;case 4384:case 3616:return o&&o.some(function(r,f){return c=f,ca(r.props,/grid-\w+-end/)})?~Ci(u+(o=o[c].value),"span",0)?u:wt+ct(u,"-start","")+u+wt+"grid-row-span:"+(~Ci(o,"span",0)?ca(o,/\d+/):+ca(o,/\d+/)-+ca(u,/\d+/))+";":wt+ct(u,"-start","")+u;case 4896:case 4128:return o&&o.some(function(r){return ca(r.props,/grid-\w+-start/)})?u:wt+ct(ct(u,"-end","-span"),"span ","")+u;case 4095:case 3583:case 4068:case 2532:return ct(u,/(.+)-inline(.+)/,bt+"$1$2")+u;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(u)-1-c>6)switch(Jt(u,c+1)){case 109:if(Jt(u,c+4)!==45)break;case 102:return ct(u,/(.+:)(.+)-([^]+)/,"$1"+bt+"$2-$3$1"+uu+(Jt(u,c+3)==108?"$3":"$2-$3"))+u;case 115:return~Ci(u,"stretch",0)?qm(ct(u,"stretch","fill-available"),c,o)+u:u}break;case 5152:case 5920:return ct(u,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,f,h,y,z,g,m){return wt+f+":"+h+m+(y?wt+f+"-span:"+(z?g:+g-+h)+m:"")+u});case 4949:if(Jt(u,c+6)===121)return ct(u,":",":"+bt)+u;break;case 6444:switch(Jt(u,Jt(u,14)===45?18:11)){case 120:return ct(u,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+bt+(Jt(u,14)===45?"inline-":"")+"box$3$1"+bt+"$2$3$1"+wt+"$2box$3")+u;case 100:return ct(u,":",":"+wt)+u}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ct(u,"scroll-","scroll-snap-")+u}return u}function Li(u,c){for(var o="",r=0;r<u.length;r++)o+=c(u[r],r,u,c)||"";return o}function Ev(u,c,o,r){switch(u.type){case ov:if(u.children.length)break;case rv:case qo:return u.return=u.return||u.value;case Mm:return"";case Cm:return u.return=u.value+"{"+Li(u.children,r)+"}";case Vi:if(!Xe(u.value=u.props.join(",")))return""}return Xe(o=Li(u.children,r))?u.return=u.value+"{"+o+"}":""}function Av(u){var c=Bm(u);return function(o,r,f,h){for(var y="",z=0;z<c;z++)y+=u[z](o,r,f,h)||"";return y}}function zv(u){return function(c){c.root||(c=c.return)&&u(c)}}function Tv(u,c,o,r){if(u.length>-1&&!u.return)switch(u.type){case qo:u.return=qm(u.value,u.length,o);return;case Cm:return Li([Ua(u,{value:ct(u.value,"@","@"+bt)})],r);case Vi:if(u.length)return fv(o=u.props,function(f){switch(ca(f,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":kl(Ua(u,{props:[ct(f,/:(read-\w+)/,":"+uu+"$1")]})),kl(Ua(u,{props:[f]})),To(u,{props:Ih(o,r)});break;case"::placeholder":kl(Ua(u,{props:[ct(f,/:(plac\w+)/,":"+bt+"input-$1")]})),kl(Ua(u,{props:[ct(f,/:(plac\w+)/,":"+uu+"$1")]})),kl(Ua(u,{props:[ct(f,/:(plac\w+)/,wt+"input-$1")]})),kl(Ua(u,{props:[f]})),To(u,{props:Ih(o,r)});break}return""})}}var Rv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},be={},Fl=typeof process<"u"&&be!==void 0&&(be.REACT_APP_SC_ATTR||be.SC_ATTR)||"data-styled",Lm="active",Gm="data-styled-version",$i="6.1.19",Go=`/*!sc*/
`,Gi=typeof window<"u"&&typeof document<"u",Dv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&be!==void 0&&be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&be.REACT_APP_SC_DISABLE_SPEEDY!==""?be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&be!==void 0&&be.SC_DISABLE_SPEEDY!==void 0&&be.SC_DISABLE_SPEEDY!==""&&be.SC_DISABLE_SPEEDY!=="false"&&be.SC_DISABLE_SPEEDY),Wi=Object.freeze([]),Pl=Object.freeze({});function wv(u,c,o){return o===void 0&&(o=Pl),u.theme!==o.theme&&u.theme||c||o.theme}var Xm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ov=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nv=/(^-|-$)/g;function am(u){return u.replace(Ov,"-").replace(Nv,"")}var _v=/(a)(d)/gi,Ni=52,lm=function(u){return String.fromCharCode(u+(u>25?39:97))};function wo(u){var c,o="";for(c=Math.abs(u);c>Ni;c=c/Ni|0)o=lm(c%Ni)+o;return(lm(c%Ni)+o).replace(_v,"$1-$2")}var xo,Qm=5381,Jl=function(u,c){for(var o=c.length;o;)u=33*u^c.charCodeAt(--o);return u},Zm=function(u){return Jl(Qm,u)};function Vm(u){return wo(Zm(u)>>>0)}function jv(u){return u.displayName||u.name||"Component"}function So(u){return typeof u=="string"&&!0}var Km=typeof Symbol=="function"&&Symbol.for,km=Km?Symbol.for("react.memo"):60115,Mv=Km?Symbol.for("react.forward_ref"):60112,Cv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hv=((xo={})[Mv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xo[km]=Jm,xo);function nm(u){return("type"in(c=u)&&c.type.$$typeof)===km?Jm:"$$typeof"in u?Hv[u.$$typeof]:Cv;var c}var Bv=Object.defineProperty,Yv=Object.getOwnPropertyNames,um=Object.getOwnPropertySymbols,qv=Object.getOwnPropertyDescriptor,Lv=Object.getPrototypeOf,im=Object.prototype;function $m(u,c,o){if(typeof c!="string"){if(im){var r=Lv(c);r&&r!==im&&$m(u,r,o)}var f=Yv(c);um&&(f=f.concat(um(c)));for(var h=nm(u),y=nm(c),z=0;z<f.length;++z){var g=f[z];if(!(g in Uv||o&&o[g]||y&&g in y||h&&g in h)){var m=qv(c,g);try{Bv(u,g,m)}catch{}}}}return u}function Il(u){return typeof u=="function"}function Xo(u){return typeof u=="object"&&"styledComponentId"in u}function al(u,c){return u&&c?"".concat(u," ").concat(c):u||c||""}function Oo(u,c){if(u.length===0)return"";for(var o=u[0],r=1;r<u.length;r++)o+=u[r];return o}function ou(u){return u!==null&&typeof u=="object"&&u.constructor.name===Object.name&&!("props"in u&&u.$$typeof)}function No(u,c,o){if(o===void 0&&(o=!1),!o&&!ou(u)&&!Array.isArray(u))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)u[r]=No(u[r],c[r]);else if(ou(c))for(var r in c)u[r]=No(u[r],c[r]);return u}function Qo(u,c){Object.defineProperty(u,"toString",{value:c})}function mu(u){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(u," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Gv=function(){function u(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return u.prototype.indexOfGroup=function(c){for(var o=0,r=0;r<c;r++)o+=this.groupSizes[r];return o},u.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var r=this.groupSizes,f=r.length,h=f;c>=h;)if((h<<=1)<0)throw mu(16,"".concat(c));this.groupSizes=new Uint32Array(h),this.groupSizes.set(r),this.length=h;for(var y=f;y<h;y++)this.groupSizes[y]=0}for(var z=this.indexOfGroup(c+1),g=(y=0,o.length);y<g;y++)this.tag.insertRule(z,o[y])&&(this.groupSizes[c]++,z++)},u.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],r=this.indexOfGroup(c),f=r+o;this.groupSizes[c]=0;for(var h=r;h<f;h++)this.tag.deleteRule(r)}},u.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var r=this.groupSizes[c],f=this.indexOfGroup(c),h=f+r,y=f;y<h;y++)o+="".concat(this.tag.getRule(y)).concat(Go);return o},u}(),Bi=new Map,Xi=new Map,Yi=1,_i=function(u){if(Bi.has(u))return Bi.get(u);for(;Xi.has(Yi);)Yi++;var c=Yi++;return Bi.set(u,c),Xi.set(c,u),c},Xv=function(u,c){Yi=c+1,Bi.set(u,c),Xi.set(c,u)},Qv="style[".concat(Fl,"][").concat(Gm,'="').concat($i,'"]'),Zv=new RegExp("^".concat(Fl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vv=function(u,c,o){for(var r,f=o.split(","),h=0,y=f.length;h<y;h++)(r=f[h])&&u.registerName(c,r)},Kv=function(u,c){for(var o,r=((o=c.textContent)!==null&&o!==void 0?o:"").split(Go),f=[],h=0,y=r.length;h<y;h++){var z=r[h].trim();if(z){var g=z.match(Zv);if(g){var m=0|parseInt(g[1],10),E=g[2];m!==0&&(Xv(E,m),Vv(u,E,g[3]),u.getTag().insertRules(m,f)),f.length=0}else f.push(z)}}},cm=function(u){for(var c=document.querySelectorAll(Qv),o=0,r=c.length;o<r;o++){var f=c[o];f&&f.getAttribute(Fl)!==Lm&&(Kv(u,f),f.parentNode&&f.parentNode.removeChild(f))}};function kv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Wm=function(u){var c=document.head,o=u||c,r=document.createElement("style"),f=function(z){var g=Array.from(z.querySelectorAll("style[".concat(Fl,"]")));return g[g.length-1]}(o),h=f!==void 0?f.nextSibling:null;r.setAttribute(Fl,Lm),r.setAttribute(Gm,$i);var y=kv();return y&&r.setAttribute("nonce",y),o.insertBefore(r,h),r},Jv=function(){function u(c){this.element=Wm(c),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,f=0,h=r.length;f<h;f++){var y=r[f];if(y.ownerNode===o)return y}throw mu(17)}(this.element),this.length=0}return u.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},u.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},u.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},u}(),$v=function(){function u(c){this.element=Wm(c),this.nodes=this.element.childNodes,this.length=0}return u.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},u.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},u.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},u}(),Wv=function(){function u(c){this.rules=[],this.length=0}return u.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},u.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},u.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},u}(),rm=Gi,Fv={isServer:!Gi,useCSSOMInjection:!Dv},Fm=function(){function u(c,o,r){c===void 0&&(c=Pl),o===void 0&&(o={});var f=this;this.options=re(re({},Fv),c),this.gs=o,this.names=new Map(r),this.server=!!c.isServer,!this.server&&Gi&&rm&&(rm=!1,cm(this)),Qo(this,function(){return function(h){for(var y=h.getTag(),z=y.length,g="",m=function(j){var C=function(H){return Xi.get(H)}(j);if(C===void 0)return"continue";var L=h.names.get(C),q=y.getGroup(j);if(L===void 0||!L.size||q.length===0)return"continue";var G="".concat(Fl,".g").concat(j,'[id="').concat(C,'"]'),X="";L!==void 0&&L.forEach(function(H){H.length>0&&(X+="".concat(H,","))}),g+="".concat(q).concat(G,'{content:"').concat(X,'"}').concat(Go)},E=0;E<z;E++)m(E);return g}(f)})}return u.registerId=function(c){return _i(c)},u.prototype.rehydrate=function(){!this.server&&Gi&&cm(this)},u.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new u(re(re({},this.options),c),this.gs,o&&this.names||void 0)},u.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},u.prototype.getTag=function(){return this.tag||(this.tag=(c=function(o){var r=o.useCSSOMInjection,f=o.target;return o.isServer?new Wv(f):r?new Jv(f):new $v(f)}(this.options),new Gv(c)));var c},u.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},u.prototype.registerName=function(c,o){if(_i(c),this.names.has(c))this.names.get(c).add(o);else{var r=new Set;r.add(o),this.names.set(c,r)}},u.prototype.insertRules=function(c,o,r){this.registerName(c,o),this.getTag().insertRules(_i(c),r)},u.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},u.prototype.clearRules=function(c){this.getTag().clearGroup(_i(c)),this.clearNames(c)},u.prototype.clearTag=function(){this.tag=void 0},u}(),Pv=/&/g,Iv=/^\s*\/\/.*$/gm;function Pm(u,c){return u.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Pm(o.children,c)),o})}function t1(u){var c,o,r,f=Pl,h=f.options,y=h===void 0?Pl:h,z=f.plugins,g=z===void 0?Wi:z,m=function(C,L,q){return q.startsWith(o)&&q.endsWith(o)&&q.replaceAll(o,"").length>0?".".concat(c):C},E=g.slice();E.push(function(C){C.type===Vi&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(Pv,o).replace(r,m))}),y.prefix&&E.push(Tv),E.push(Ev);var j=function(C,L,q,G){L===void 0&&(L=""),q===void 0&&(q=""),G===void 0&&(G="&"),c=G,o=L,r=new RegExp("\\".concat(o,"\\b"),"g");var X=C.replace(Iv,""),H=xv(q||L?"".concat(q," ").concat(L," { ").concat(X," }"):X);y.namespace&&(H=Pm(H,y.namespace));var J=[];return Li(H,Av(E.concat(zv(function(Z){return J.push(Z)})))),J};return j.hash=g.length?g.reduce(function(C,L){return L.name||mu(15),Jl(C,L.name)},Qm).toString():"",j}var e1=new Fm,_o=t1(),Im=iu.createContext({shouldForwardProp:void 0,styleSheet:e1,stylis:_o});Im.Consumer;iu.createContext(void 0);function om(){return O.useContext(Im)}var tp=function(){function u(c,o){var r=this;this.inject=function(f,h){h===void 0&&(h=_o);var y=r.name+h.hash;f.hasNameForId(r.id,y)||f.insertRules(r.id,y,h(r.rules,y,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,Qo(this,function(){throw mu(12,String(r.name))})}return u.prototype.getName=function(c){return c===void 0&&(c=_o),this.name+c.hash},u}(),a1=function(u){return u>="A"&&u<="Z"};function sm(u){for(var c="",o=0;o<u.length;o++){var r=u[o];if(o===1&&r==="-"&&u[0]==="-")return u;a1(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var ep=function(u){return u==null||u===!1||u===""},ap=function(u){var c,o,r=[];for(var f in u){var h=u[f];u.hasOwnProperty(f)&&!ep(h)&&(Array.isArray(h)&&h.isCss||Il(h)?r.push("".concat(sm(f),":"),h,";"):ou(h)?r.push.apply(r,ru(ru(["".concat(f," {")],ap(h),!1),["}"],!1)):r.push("".concat(sm(f),": ").concat((c=f,(o=h)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in Rv||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function nl(u,c,o,r){if(ep(u))return[];if(Xo(u))return[".".concat(u.styledComponentId)];if(Il(u)){if(!Il(h=u)||h.prototype&&h.prototype.isReactComponent||!c)return[u];var f=u(c);return nl(f,c,o,r)}var h;return u instanceof tp?o?(u.inject(o,r),[u.getName(r)]):[u]:ou(u)?ap(u):Array.isArray(u)?Array.prototype.concat.apply(Wi,u.map(function(y){return nl(y,c,o,r)})):[u.toString()]}function l1(u){for(var c=0;c<u.length;c+=1){var o=u[c];if(Il(o)&&!Xo(o))return!1}return!0}var n1=Zm($i),u1=function(){function u(c,o,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&l1(c),this.componentId=o,this.baseHash=Jl(n1,o),this.baseStyle=r,Fm.registerId(o)}return u.prototype.generateAndInjectStyles=function(c,o,r){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))f=al(f,this.staticRulesId);else{var h=Oo(nl(this.rules,c,o,r)),y=wo(Jl(this.baseHash,h)>>>0);if(!o.hasNameForId(this.componentId,y)){var z=r(h,".".concat(y),void 0,this.componentId);o.insertRules(this.componentId,y,z)}f=al(f,y),this.staticRulesId=y}else{for(var g=Jl(this.baseHash,r.hash),m="",E=0;E<this.rules.length;E++){var j=this.rules[E];if(typeof j=="string")m+=j;else if(j){var C=Oo(nl(j,c,o,r));g=Jl(g,C+E),m+=C}}if(m){var L=wo(g>>>0);o.hasNameForId(this.componentId,L)||o.insertRules(this.componentId,L,r(m,".".concat(L),void 0,this.componentId)),f=al(f,L)}}return f},u}(),lp=iu.createContext(void 0);lp.Consumer;var Eo={};function i1(u,c,o){var r=Xo(u),f=u,h=!So(u),y=c.attrs,z=y===void 0?Wi:y,g=c.componentId,m=g===void 0?function(tt,K){var et=typeof tt!="string"?"sc":am(tt);Eo[et]=(Eo[et]||0)+1;var $="".concat(et,"-").concat(Vm($i+et+Eo[et]));return K?"".concat(K,"-").concat($):$}(c.displayName,c.parentComponentId):g,E=c.displayName,j=E===void 0?function(tt){return So(tt)?"styled.".concat(tt):"Styled(".concat(jv(tt),")")}(u):E,C=c.displayName&&c.componentId?"".concat(am(c.displayName),"-").concat(c.componentId):c.componentId||m,L=r&&f.attrs?f.attrs.concat(z).filter(Boolean):z,q=c.shouldForwardProp;if(r&&f.shouldForwardProp){var G=f.shouldForwardProp;if(c.shouldForwardProp){var X=c.shouldForwardProp;q=function(tt,K){return G(tt,K)&&X(tt,K)}}else q=G}var H=new u1(o,C,r?f.componentStyle:void 0);function J(tt,K){return function(et,$,pt){var gt=et.attrs,ut=et.componentStyle,Tt=et.defaultProps,Nt=et.foldedComponentIds,oe=et.styledComponentId,_e=et.target,Ut=iu.useContext(lp),N=om(),Q=et.shouldForwardProp||N.shouldForwardProp,P=wv($,Ut,Tt)||Pl,rt=function(W,I,Yt){for(var vt,Pt=re(re({},I),{className:void 0,theme:Yt}),Ha=0;Ha<W.length;Ha+=1){var Ve=Il(vt=W[Ha])?vt(Pt):vt;for(var xe in Ve)Pt[xe]=xe==="className"?al(Pt[xe],Ve[xe]):xe==="style"?re(re({},Pt[xe]),Ve[xe]):Ve[xe]}return I.className&&(Pt.className=al(Pt.className,I.className)),Pt}(gt,$,P),v=rt.as||_e,R={};for(var B in rt)rt[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&rt.theme===P||(B==="forwardedAs"?R.as=rt.forwardedAs:Q&&!Q(B,v)||(R[B]=rt[B]));var Y=function(W,I){var Yt=om(),vt=W.generateAndInjectStyles(I,Yt.styleSheet,Yt.stylis);return vt}(ut,rt),V=al(Nt,oe);return Y&&(V+=" "+Y),rt.className&&(V+=" "+rt.className),R[So(v)&&!Xm.has(v)?"class":"className"]=V,pt&&(R.ref=pt),O.createElement(v,R)}(Z,tt,K)}J.displayName=j;var Z=iu.forwardRef(J);return Z.attrs=L,Z.componentStyle=H,Z.displayName=j,Z.shouldForwardProp=q,Z.foldedComponentIds=r?al(f.foldedComponentIds,f.styledComponentId):"",Z.styledComponentId=C,Z.target=r?f.target:u,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(tt){this._foldedDefaultProps=r?function(K){for(var et=[],$=1;$<arguments.length;$++)et[$-1]=arguments[$];for(var pt=0,gt=et;pt<gt.length;pt++)No(K,gt[pt],!0);return K}({},f.defaultProps,tt):tt}}),Qo(Z,function(){return".".concat(Z.styledComponentId)}),h&&$m(Z,u,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function fm(u,c){for(var o=[u[0]],r=0,f=c.length;r<f;r+=1)o.push(c[r],u[r+1]);return o}var dm=function(u){return Object.assign(u,{isCss:!0})};function np(u){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(Il(u)||ou(u))return dm(nl(fm(Wi,ru([u],c,!0))));var r=u;return c.length===0&&r.length===1&&typeof r[0]=="string"?nl(r):dm(nl(fm(r,c)))}function jo(u,c,o){if(o===void 0&&(o=Pl),!c)throw mu(1,c);var r=function(f){for(var h=[],y=1;y<arguments.length;y++)h[y-1]=arguments[y];return u(c,o,np.apply(void 0,ru([f],h,!1)))};return r.attrs=function(f){return jo(u,c,re(re({},o),{attrs:Array.prototype.concat(o.attrs,f).filter(Boolean)}))},r.withConfig=function(f){return jo(u,c,re(re({},o),f))},r}var up=function(u){return jo(i1,u)},cl=up;Xm.forEach(function(u){cl[u]=up(u)});function c1(u){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];var r=Oo(np.apply(void 0,ru([u],c,!1))),f=Vm(r);return new tp(f,r)}const r1=cl.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
  }

  .video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  .content {
    width: 90%;
    max-width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(10, 20, 40, 0.7);
    border: 1px solid #0d1b2a;
    border-radius: 15px;
    gap: 20px;
    color: white;
  }

  .content h1 {
    font-size: 2.3rem;
    position: relative;
    bottom: 10px;
  }

  /* Wrapper para inputs com ícones */
  .input-wrapper {
    position: relative;
    width: 90%;
    display: flex;
    align-items: center;
  }

  /* Ícone posicionado à esquerda dentro do input-wrapper */
  .input-icon {
    position: absolute;
    left: 12px;
    width: 24px;
    height: 24px;
    pointer-events: none;
  }

  /* Inputs dentro do wrapper */
  .input-wrapper input {
    width: 100%;
    padding: 12px 40px 12px 44px; /* Espaço para o ícone (24px + padding extra) */
    font-size: 1.1rem;
    border-radius: 5px;
    background-color: rgba(13, 27, 42, 0.6);
    border: 1px solid #0d1b2a;
    color: #ffffff;
    outline: none;
  }

  /* Ícone para mostrar/esconder senha */
  .input-wrapper span {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 1.2rem;
    user-select: none;
  }

  .content button {
    width: 90%;
    padding: 12px;
    border-radius: 5px;
    font-size: 1.1rem;
    background-color: #fd6818ff;
    color: #ffffff;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #ff5900ff;
    }
  }

  .accounts {
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    position: relative;
    top: 15px;
    color: #e0e0e0;
    cursor: pointer;
    transition: 0.4s ease;
    font-size: 0.9rem;
    &:hover {
      color: #c4babaff;
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      height: 500px;
    }
    .content h1 {
      font-size: 3rem;
    }
    .content input {
      padding: 20px 45px 20px 45px;
      font-size: 1.3rem;
    }
    .content button {
      padding: 20px;
      font-size: 1.3rem;
    }

    .accounts {
      font-size: 1.1rem;
    }
  }
`,o1="/AstroLens/assets/earth-5nHb-xaq.mp4",ip="/AstroLens/assets/o-email-CmWcwiML.png",su="/AstroLens/assets/senha-u5wqabvl.png";function s1(){const u=il(),[c,o]=O.useState(!1),[r,f]=O.useState(""),[h,y]=O.useState("");O.useEffect(()=>{localStorage.getItem("usuarioLogado")&&u("/app-nasa")},[u]);const z=()=>{if(!r.trim()||!h.trim()){alert("Preencha todos os campos!");return}const j=(JSON.parse(localStorage.getItem("usuarios"))||[]).find(C=>C.email===r&&C.password===h);if(j){const C={...j};delete C.password,localStorage.setItem("usuarioLogado",JSON.stringify(C)),u("/app-nasa")}else alert("Email ou senha incorretos!")},g=()=>{u("/forgot-password")},m=()=>{u("/create-account")};return x.jsxs(r1,{children:[x.jsx("div",{className:"video",children:x.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:x.jsx("source",{src:o1})})}),x.jsxs("div",{className:"content",children:[x.jsx("h1",{children:"AstroLens"}),x.jsxs("div",{className:"input-wrapper",children:[x.jsx("img",{src:ip,alt:"email icon",className:"input-icon"}),x.jsx("input",{type:"text",placeholder:"Email...",value:r,onChange:E=>f(E.target.value),autoComplete:"new-email",name:"userEmail"})]}),x.jsxs("div",{className:"input-wrapper",children:[x.jsx("img",{src:su,alt:"password icon",className:"input-icon"}),x.jsx("input",{type:c?"text":"password",placeholder:"Senha...",value:h,onChange:E=>y(E.target.value),autoComplete:"new-password",name:"userPassword"}),x.jsx("span",{onClick:()=>o(!c),children:c?"🙉":"🙈"})]}),x.jsx("button",{onClick:z,children:"Entrar"}),x.jsxs("div",{className:"accounts",children:[x.jsx("p",{onClick:g,children:"Esqueceu a Senha?"}),x.jsx("p",{onClick:m,children:"Criar Conta"})]})]})]})}const Zo="/AstroLens/assets/spaceApp-BaXx1rWV.png",f1=cl.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Zo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: white;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }

  .content {
    background-color: #17181a9f;
    width: 80%;
    max-width: 850px;
    height: 500px;
    padding: 20px;
    border-radius: 10px;
    color: #e5e5e5;
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid #111b2bff;
  }

  /* Botão hamburguer no topo direito da content */
  .hamburger {
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;
    background: transparent !important;
  }

  /* Menu dentro da content, próximo ao botão - mobile */
  .menu-hamburger.mobile-menu {
    position: absolute;
    top: 60px;
    right: 20px;
    background: rgba(23, 24, 26, 0.95);
    color: white;
    width: 220px;
    border-radius: 8px;
    padding: 1rem;
    z-index: 10;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  }

  .aba-item {
    padding: 12px 16px;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 8px;
    user-select: none;
    transition: background-color 0.3s ease;
  }

  .aba-item:hover {
    background-color: #2a3a66;
  }

  .aba-item.active {
    background-color: #3b6cb7;
    font-weight: bold;
  }

  /* Menu fixo desktop - escondido no mobile */
  .menu-desktop {
    display: none;
    flex-direction: row;
    gap: 20px;
    margin-top: 10px;
  }

  /* Cada item do menu no desktop fica em linha */
  .menu-desktop .aba-item {
    background: transparent;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 6px;
    font-weight: normal;
  }

  .menu-desktop .aba-item:hover {
    background-color: #2a3a66;
  }

  .menu-desktop .aba-item.active {
    background-color: #3b6cb7;
    font-weight: bold;
  }

  .content h2 {
    font-size: 1.3rem;
    margin-top: 20px; /* Espaço pra o menu ficar confortável no topo */
    margin-bottom: 20px;
  }

  .content .input {
    display: flex;
    width: 100%;
  }

  .content input {
    background-color: #0c0d10;
    color: white;
    border: 1px solid #444;
    border-radius: 4px;
    padding: 10px;
    outline: none;
  }

  .content button {
    background-color: #3b6cb7;
    color: white;
    border: none;
    padding: 6px 12px;
    margin-left: 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #2a68c5ff;
    }
  }

  .row {
    margin-top: 10px;
  }

  .img {
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }

  img {
    width: 200px;
    background: transparent !important;
  }

  .tab-content2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }

  .tab-content2 h2 {
    align-self: flex-start;
  }

  .tab-content2 .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* espaçamento entre as imagens */
    justify-content: center; /* centraliza as imagens na linha */
    padding: 10px 0;
  }

  .tab-content2 .gallery img {
    width: 80%;
    max-width: 250px; /* largura fixa pra manter padrão */
    height: 160px; /* altura fixa pra manter padrão */
    object-fit: cover; /* garante que a imagem preencha o espaço sem distorcer */
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    cursor: pointer; /* fica interativo pra usuário */
    transition: transform 0.3s ease;
  }

  .img3 {
    display: none;
  }

  .img4 {
    display: none;
  }

  .img5 {
    display: none;
  }

  .img6 {
    display: none;
  }

  .img7 {
    display: none;
  }

  .img8 {
    display: none;
  }

  .img9 {
    display: none;
  }

  .tab-content2 .gallery img:hover {
    transform: scale(1.05); /* efeito hover suave */
  }

  .tab-content2 .button-gallery {
    font-size: 1.2rem;
    position: relative;
    top: 10px;
    padding: 8px;
    width: 80%;
    max-width: 200px;
  }

  span {
    font-size: 1.1rem;
  }

  .tab-content3 h2 {
    font-size: 1.3rem;
    width: 220px;
  }

  .tab-content3 h3 {
    font-size: 1.1rem;
    width: 200px;
    text-align: center;
  }

  .apod-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .apod-content img {
    margin-top: 10px;
    border: 2px solid #7fffd4;
    border-radius: 5px;
    height: 200px;
    width: 250px;
  }

  .apod-content button {
    padding: 10px;
    font-size: 1.05rem;
    margin-top: 30px;
  }

  .apod-content p {
    margin-top: 10px;
    font-size: 0.78rem;
  }

  .tab-content4 {
    display: flex;
    flex-direction: column;

    gap: 20px;
    font-size: 1.1rem;
  }

  .tab-content4 > div {
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      transform: scale(1.025);
    }
  }

  .tab-content4 .cme {
    display: flex;
    padding: 10px;
    gap: 10px;
    background-color: #617aacbd;
    border-radius: 5px;
    border: 2px solid black;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .tab-content4 .velocidade {
    display: flex;
    padding: 10px;
    gap: 10px;
    background-color: #617aacbd;
    border-radius: 5px;
    border: 2px solid black;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .tab-content4 .flare-solar {
    display: flex;
    padding: 10px;
    gap: 10px;
    background-color: #617aacbd;
    border-radius: 5px;
    border: 2px solid black;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .tab-content4 .tempestade {
    display: flex;
    padding: 10px;
    gap: 10px;
    background-color: #617aacbd;
    border-radius: 5px;
    border: 2px solid black;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .data-not-found {
    margin-top: 20px;
  }

  .exit {
    display: none;
  }

  @media screen and (min-width: 530px) {
    .tab-content2 .gallery {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .tab-content2 .gallery img {
      width: 80%;
      max-width: 180px; /* largura fixa pra manter padrão */
      height: 150px; /* altura fixa pra manter padrão */
      object-fit: cover; /* garante que a imagem preencha o espaço sem distorcer */
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      cursor: pointer; /* fica interativo pra usuário */
      transition: transform 0.3s ease;
    }

    .img3 {
      display: flex;
    }

    .img4 {
      display: flex;
    }

    .img5 {
      display: none;
    }

    .img6 {
      display: none;
    }

    .img7 {
      display: none;
    }

    .img8 {
      display: none;
    }

    .img9 {
      display: none;
    }

    .tab-content3 h2 {
      font-size: 1.3rem;
      width: 300px;
    }

    .tab-content3 h3 {
      font-size: 1.2rem;
      width: 300px;
    }

    .apod-content p {
      margin-top: 10px;
      font-size: 0.9rem;
    }

    .tab-content4 h2 {
      font-size: 1.5rem;
    }

    .tab-content4 p {
      font-size: 1.25rem;
    }
  }

  /* Media query para desktop */
  @media screen and (min-width: 768px) {
    .hamburger {
      display: none;
    }
    .menu-hamburger.mobile-menu {
      display: none;
    }
    .menu-desktop {
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid white;
    }
    .tab-content {
      display: flex;
    }

    .content input {
      width: 50%;
      font-size: 1.3rem;
    }
    .content button {
      font-size: 1.3rem;
    }

    .data-text {
      /* deixa input+botão+dados ocupando o fluxo normal */
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-width: 600px;
    }

    .img {
      position: absolute; /* fixa a imagem */
      top: 70%; /* centraliza verticalmente */
      right: 100px; /* distância da borda direita da .content */
      transform: translateY(-50%);
      margin-top: 0;
      width: 100px;
      z-index: 5;
    }
    .apod-content img {
      margin-top: 20px;
      border: 2px solid #7fffd4;
      border-radius: 5px;
      height: 230px;
      width: 320px;
    }

    img {
      width: 250px;
    }

    .tab-content2 .gallery img {
      width: 80%;
      max-width: 150px; /* largura fixa pra manter padrão */
      height: 120px; /* altura fixa pra manter padrão */
      object-fit: cover; /* garante que a imagem preencha o espaço sem distorcer */
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      cursor: pointer; /* fica interativo pra usuário */
      transition: transform 0.3s ease;
    }

    .img6 {
      display: flex;
    }

    .img7 {
      display: flex;
    }

    .img8 {
      display: none;
    }

    .img9 {
      display: none;
    }

    .data-text h2 {
      font-size: 1.5rem;
    }

    .content .planetary-data .row .label {
      font-size: 1.3rem;
    }

    .tab-content3 h2 {
      width: 320px;
      font-size: 1.4rem;
    }

    .tab-content3 h3 {
      font-size: 1.3rem;
    }

    .tab-content3 p {
      font-size: 1rem;
    }

    .tab-content4 h2 {
      font-size: 1.6rem;
      text-align: start;
    }

    .tab-content4 p {
      font-size: 1.3rem;
    }

    .data-not-found {
      margin-top: 10px;
    }

    .exit {
      display: flex;
      margin-top: 50px;
      width: 100px;
      align-items: center;
      justify-content: center;
      padding: 10px !important;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      color: white;
      font-weight: bold;
      margin-bottom: 30px;
      font-size: 2.6rem;
      width: 80%;
      max-width: 850px;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
    }

    .img {
      position: absolute;
      top: 60%;
      right: 100px;
      transform: translateY(-50%);
      margin-top: 0;
      width: 250px;
      z-index: 5;
    }

    .tab-content2 .gallery img {
      width: 80%;
      max-width: 160px;
      height: 130px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .img8 {
      display: flex;
    }

    .img9 {
      display: flex;
    }
    .tab-content3 button {
      font-size: 1rem;
    }

    .tab-content4 > div {
      padding: 15px !important ;
    }

    .apod-content button {
      padding: 10px;
      font-size: 1.05rem;
      margin-top: 15px;
    }

    img {
      width: 300px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content {
      height: 550px;
    }
    h1 {
      font-size: 3.1rem;
    }

    .menu-desktop {
      font-size: 1.2rem !important;
    }

    .content h2 {
      font-size: 1.8rem;
    }

    .data-text {
      margin-top: 30px;
    }
    .label {
      font-size: 1.35rem !important;
    }
    .value {
      font-size: 1.25rem;
    }
    .img {
      position: absolute; /* fixa a imagem */
      top: 60%; /* centraliza verticalmente */
      right: 100px; /* distância da borda direita da .content */
      transform: translateY(-50%);
      margin-top: 0;

      z-index: 5;
    }

    .tab-content2 .gallery img {
      width: 80%;
      max-width: 180px; /* largura fixa pra manter padrão */
      height: 150px; /* altura fixa pra manter padrão */
      object-fit: cover; /* garante que a imagem preencha o espaço sem distorcer */
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      cursor: pointer; /* fica interativo pra usuário */
      transition: transform 0.3s ease;
    }

    .img8 {
      display: flex;
    }

    .img9 {
      display: flex;
    }

    .tab-content3 h2 {
      font-size: 1.45rem;
      width: 400px;
    }

    .tab-content3 h3 {
      font-size: 1.35rem;
      width: 300px !;
      text-align: center;
    }

    .tab-content3 button {
      margin-top: 20px;
      font-size: 1.2rem;
      margin-top: 35px;
    }

    .apod-content p {
      margin-top: 10px;
      font-size: 1rem;
    }

    .exit {
      margin-top: 35px;
    }
  }
`,hm="/AstroLens/assets/earth-CB8vXua-.png",d1="/AstroLens/assets/mars-DDqCN0-2.png",h1="/AstroLens/assets/netuno-p_1kqKJl.png",m1="/AstroLens/assets/jupiter-BQZXVob-.png",p1="/AstroLens/assets/urano-34LYypJp.png",g1="/AstroLens/assets/saturno2-uWZ6S6jW.png",y1="/AstroLens/assets/mercurio-FenHQYN7.png",v1="/AstroLens/assets/venus-BPubL4vb.png",b1="/AstroLens/assets/unknown-jjRIS_N-.png",x1="/AstroLens/assets/plutao-CEdzcO9R.png",S1="/AstroLens/assets/img-teste-CIQu1vuk.jpg",E1="/AstroLens/assets/img-teste1-Btf6I2Uh.jpg",A1="/AstroLens/assets/img-teste2-N1qKzGyj.jpg",z1="/AstroLens/assets/img-teste3-DDmksLsu.jpg",T1="/AstroLens/assets/img-teste4-rTDhgDXd.jpg",R1="/AstroLens/assets/img-teste5-B_BlCU4c.jpg",D1="/AstroLens/assets/img-teste7-Dwe4DXgK.jpg",w1="/AstroLens/assets/img-teste8-BO1TrW3T.jpg",O1="/AstroLens/assets/img-teste4-rTDhgDXd.jpg";function N1(){const u="QH7sKVDhwKAMTjEYAh8UdhjeAfN78CDplRi9Savj",[c,o]=O.useState(null),[r,f]=O.useState(!1),[h,y]=O.useState(""),[z,g]=O.useState(null),[m,E]=O.useState(hm),[j,C]=O.useState(null),[L,q]=O.useState(""),[G,X]=O.useState(null),[H,J]=O.useState(""),[Z,tt]=O.useState([]),K={earth:hm,mars:d1,neptune:h1,jupiter:m1,uranus:p1,saturn:g1,mercury:y1,venus:v1,pluto:x1},et=[{id:"planetas",label:"Planetas e Exoplanetas"},{id:"galeria",label:"Galeria Espacial"},{id:"apod",label:"APOD"},{id:"previsao",label:"Previsão Espacial"}],$=il();O.useEffect(()=>{async function R(){try{const Y=await fetch("https://api.le-systeme-solaire.net/rest/bodies/earth");if(Y.ok){const V=await Y.json();g(V),y("Earth"),o("planetas")}}catch(B){console.error("Erro ao buscar Terra:",B)}}R()},[]);function pt(R){o(R),f(!1)}function gt(){localStorage.removeItem("usuarioLogado"),alert("Você saiu com sucesso!"),$("/")}const ut={terra:"earth",marte:"mars",jupiter:"jupiter",saturno:"saturn",venus:"venus",mercurio:"mercury",netuno:"neptune",urano:"uranus",plutão:"pluto"};async function Tt(){try{const R=h.trim().toLowerCase();if(!R){console.warn("Digite o nome de um planeta para buscar");return}const B=ut[R]||R;K[B]?E(K[B]):E(b1);const Y=`https://api.le-systeme-solaire.net/rest/bodies/${B}`,V=await fetch(Y);if(!V.ok){console.error("Planeta não encontrado:",V.status),g(null);return}const W=await V.json();g(W),o("planetas"),console.log("Planeta encontrado:",W)}catch(R){console.error("Erro ao buscar dados:",R),g(null)}}const Nt=z?.moons||[],oe=()=>{$("/gallery-nasa")},_e=async()=>{const B=await(await fetch(`https://api.nasa.gov/planetary/apod?api_key=${u}`)).json();C(B)},Ut=R=>{if(!R)return"";const B=new Date(R),Y=String(B.getDate()).padStart(2,"0"),V=String(B.getMonth()+1).padStart(2,"0"),W=B.getFullYear(),I=String(B.getHours()).padStart(2,"0"),Yt=String(B.getMinutes()).padStart(2,"0");return`${Y}/${V}/${W} ${I}:${Yt}`},N=R=>R.toISOString().split("T")[0],Q=async()=>{try{const R=new Date,B=new Date;B.setDate(R.getDate()-7);const Y=`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CME?startDate=${N(B)}&endDate=${N(R)}`,W=await(await fetch(Y)).json();W.length>0?(q(Ut(W[0].startTime)),W[1]&&W[1].cmeAnalyses&&W[1].cmeAnalyses[0]?X(W[1].cmeAnalyses[0].speed):W[0].cmeAnalyses&&W[0].cmeAnalyses[0]?X(W[0].cmeAnalyses[0].speed):X(null)):(q("Nenhum CME recente"),X(null))}catch(R){console.error("Erro ao buscar CME:",R),q("Erro ao carregar CME"),X(null)}},P=async()=>{try{const R=new Date,B=new Date;B.setDate(R.getDate()-7);const Y=`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR?startDate=${N(B)}&endDate=${N(R)}`,V=await fetch(Y);if(!V.ok)throw new Error("Erro ao buscar dados de flare solar");const W=await V.json();console.log("Dados de flare solar:",W),J(W)}catch(R){console.error(R)}},rt=async()=>{try{const R=new Date,B=new Date;B.setDate(R.getDate()-7);const Y=`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/GST?startDate=${N(B)}&endDate=${N(R)}`,V=await fetch(Y);if(!V.ok)throw new Error("Erro ao buscar tempestades geomagnéticas");const W=await V.json();if(W.length>0&&W[0].sentNotifications&&W[0].sentNotifications.length>0){const I=W[0].sentNotifications.slice(-1)[0];tt([I])}else tt([])}catch(R){console.error(R),tt([])}},v=()=>{$("/apod-nasa")};return O.useEffect(()=>{_e(),Q(),P(),rt()},[]),x.jsxs(f1,{children:[x.jsx("h1",{children:"NASA Space Explorer"}),x.jsxs("div",{className:"content",children:[x.jsx("button",{className:"hamburger",onClick:()=>f(!r),"aria-label":"Abrir menu",children:"☰"}),r&&x.jsx("nav",{className:"menu-hamburger mobile-menu",children:et.map(R=>x.jsx("div",{className:`aba-item ${c===R.id?"active":""}`,onClick:()=>pt(R.id),children:R.label},R.id))}),x.jsx("nav",{className:"menu-desktop",children:et.map(R=>x.jsx("div",{className:`aba-item ${c===R.id?"active":""}`,onClick:()=>pt(R.id),children:R.label},R.id))}),c==="planetas"&&x.jsxs("div",{className:"tab-content data-text",children:[x.jsx("h2",{children:"Pesquise o Planeta:"}),x.jsxs("div",{className:"input",children:[x.jsx("input",{type:"text",value:h,onChange:R=>y(R.target.value)}),x.jsx("button",{onClick:Tt,children:"Buscar"})]}),z?x.jsxs("div",{className:"planetary-data",children:[x.jsx("h2",{children:"Dados do Planeta"}),x.jsxs("div",{className:"row",children:[x.jsx("span",{className:"label",children:x.jsx("strong",{children:"Nome: "})}),x.jsx("span",{className:"value",children:z.englishName})]}),x.jsxs("div",{className:"row",children:[x.jsx("span",{className:"label",children:x.jsx("strong",{children:"Luas: "})}),x.jsx("span",{className:"value",children:Nt.length>0?Nt.slice(0,5).map(R=>R.moon).join(", ")+(Nt.length>5?" ...":""):"Sem luas"})]}),x.jsxs("div",{className:"row",children:[x.jsx("span",{className:"label",children:x.jsx("strong",{children:"Temperatura: "})}),x.jsx("span",{className:"value",children:z.avgTemp!==void 0?`${(z.avgTemp-273.15).toFixed(1)} °C`:"N/D"})]}),x.jsx("button",{className:"exit",onClick:gt,children:"Sair"})]}):x.jsx("p",{className:"data-not-found",children:"Nenhum dado para mostrar. Faça uma busca."}),x.jsx("div",{className:"img",children:x.jsx("img",{src:m,alt:`Imagem do planeta ${z?.englishName||""}`})})]}),c==="galeria"&&x.jsxs("div",{className:"tab-content2",children:[x.jsx("h2",{children:"Galeria Espacial"}),x.jsxs("div",{className:"gallery",children:[x.jsx("img",{src:S1,alt:"Imagem 1"}),x.jsx("img",{src:E1,alt:"Imagem 2"}),x.jsx("img",{src:A1,alt:"Imagem 3",className:"img3"}),x.jsx("img",{src:z1,alt:"Imagem 4",className:"img4"}),x.jsx("img",{src:T1,alt:"Imagem 5",className:"img5"}),x.jsx("img",{src:R1,alt:"Imagem 6",className:"img6"}),x.jsx("img",{src:D1,alt:"Imagem 7",className:"img7"}),x.jsx("img",{src:w1,alt:"Imagem 8",className:"img8"}),x.jsx("img",{src:O1,alt:"Imagem 9",className:"img9"})]}),x.jsx("button",{className:"button-gallery",onClick:oe,children:"Ver mais"})]}),c==="apod"&&x.jsxs("div",{className:"tab-content3",children:[x.jsx("h2",{children:"Imagem Astronômica do Dia:"}),j?x.jsxs("div",{className:"apod-content",children:[x.jsx("h3",{children:j.title}),j.media_type==="image"?x.jsx("img",{src:j.url,alt:j.title}):j.media_type==="video"?x.jsx("iframe",{title:"APOD Video",src:j.url,frameBorder:"0",allow:"encrypted-media",allowFullScreen:!0,width:"100%",height:"400px"}):null,x.jsx("button",{onClick:v,children:"Ver Explicação"})]}):x.jsx("p",{children:"Carregando APOD..."})]}),c==="previsao"&&x.jsxs("div",{className:"tab-content4",children:[x.jsx("h2",{children:"Previsão Espacial"}),x.jsxs("div",{className:"cme",children:[x.jsx("p",{children:x.jsx("strong",{children:"Último CME observado"})}),x.jsx("p",{children:L})]}),x.jsxs("div",{className:"velocidade",children:[x.jsx("p",{children:x.jsx("strong",{children:"Velocidade do CME"})}),x.jsx("p",{children:G?`${G.toFixed(0)} km/s`:"N/D"})]}),x.jsxs("div",{className:"flare-solar",children:[x.jsx("p",{children:x.jsx("strong",{children:"Último flare solar"})}),x.jsx("p",{children:H.length>0?Ut(H[0].beginTime):"Nenhum flare recente"})]}),x.jsxs("div",{className:"tempestade",children:[x.jsx("p",{children:x.jsx("strong",{children:"Tempestade geomagnética"})}),Z.length>0?x.jsx("p",{children:x.jsxs("a",{style:{textDecoration:"none",color:"white"},href:Z[0].messageURL,target:"_blank",rel:"noreferrer",children:["Ver alerta ",Z[0].messageID]})}):x.jsx("p",{children:"Nenhum alerta disponível"})]})]})]})]})}const _1=cl.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
  }

  .video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .content {
    width: 90%;
    max-width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.85);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    gap: 20px;
    color: white;
  }

  .content h1 {
    font-size: 1.9rem;
    position: relative;
    bottom: 10px;
  }

  .input-container {
  position: relative;
  width: 90%;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  pointer-events: none;
}

.input-container input {
  width: 100%;
  padding: 12px 40px 12px 44px; /* espaço para o ícone */
  font-size: 1.1rem;
  border-radius: 5px;
  background-color: #2c2c2c;
  border: 1px solid #2c2c2c;
  color: #ffffff;
  outline: none;
}

.toggle-emoji {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
}

  .content button {
    width: 90%;
    padding: 12px;
    border-radius: 5px;
    font-size: 1.1rem;
    background-color: #ffcc00;
    color: black;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #d8b011ff;
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      height: 500px;
    }
    .content h1 {
      font-size: 3rem;
    }
    .input-container input {
      padding: 20px 60px 20px 45px;
      font-size: 1.3rem;
    }
    .content button {
      padding: 20px;
      font-size: 1.3rem;
    }
  }
`,j1="/AstroLens/assets/space2-CAzEzGOG.mp4";function M1(){const[u,c]=O.useState(""),[o,r]=O.useState(""),[f,h]=O.useState(!1),[y,z]=O.useState(!1),g=il(),m=()=>{if(!u.trim()||!o.trim()){alert("Preencha todos os campos!");return}if(u!==o){alert("As senhas não são iguais!");return}g("/")};return x.jsxs(_1,{children:[x.jsx("div",{className:"video",children:x.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:x.jsx("source",{src:j1,type:"video/mp4"})})}),x.jsxs("div",{className:"content",children:[x.jsx("h1",{children:"Esqueceu a Senha?"}),x.jsxs("div",{className:"input-container",children:[x.jsx("img",{src:su,alt:"password icon",className:"input-icon"}),x.jsx("input",{type:f?"text":"password",placeholder:"Digite a nova senha...",value:u,onChange:E=>c(E.target.value)}),x.jsx("span",{className:"toggle-emoji",onClick:()=>h(!f),children:f?"🙉":"🙈"})]}),x.jsxs("div",{className:"input-container",children:[x.jsx("img",{src:su,alt:"password icon",className:"input-icon"}),x.jsx("input",{type:y?"text":"password",placeholder:"Confirmar a nova senha...",value:o,onChange:E=>r(E.target.value)}),x.jsx("span",{className:"toggle-emoji",onClick:()=>z(!y),children:y?"🙉":"🙈"})]}),x.jsx("button",{onClick:m,children:"Redefinir"})]})]})}const C1=cl.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
  }

  .video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .content {
    width: 90%;
    max-width: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    background: linear-gradient(
      135deg,
      rgba(30, 15, 58, 0.85),
      rgba(15, 28, 46, 0.85)
    );
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(255, 0, 255, 0.2);
    backdrop-filter: blur(6px);
    color: #fff;
    gap: 10px;
  }

  .content h1 {
    color: #ff66cc;
    margin-bottom: 10px;
    text-align: center;
  }

  .content input,
  .content select {
    width: 100%;
    padding: 12px;
    margin: 5px 0;
    border: none;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    outline: none;
    font-size: 1.1rem;
  }

  .content option{
    background-color: rgba(255, 255, 255, 0.1);
    color: black;
  }

  .content .name {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .content input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  /* Estilo do input com ícone */
  .input-icon {
    position: relative;
    width: 100%;
  }

  .input-icon img {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    opacity: 0.8;
  }

  .input-icon input {
    padding-left: 40px; /* Espaço pro ícone */
  }

  /* Birth */
  .birth {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .birth .text h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #ff66cc;
    text-align: left;
  }

  .birth .data {
    display: flex;
    gap: 10px;
  }

  .content button {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff66cc, #9933ff);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 1.1rem;
  }

  .content button:hover {
    opacity: 0.85;
  }

  @media screen and (min-width: 768px) {
    .content h1 {
      font-size: 2.8rem;
    }

    .content .name {
      width: 100%;
      flex-direction: row;
    }

    .birth {
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .content input {
      font-size: 1.2rem;
    }

    .birth .text {
      flex: 1;
      text-align: right;
      padding-right: 10px;
    }

    .birth .text h2 {
      font-size: 1.6rem;
    }

    .birth .data {
      flex: 2;
      display: flex;
      gap: 20px;
      width: 80%;
    }

    .content select {
      padding: 15px;
      cursor: pointer;
    }

    .content button {
      padding: 15px;
      font-size: 1.2rem;
    }
  }

  /* Desktop */
  @media screen and (min-width: 1200px) {
    .content {
      width: 100%;
      height: 680px;
    }

    .content h1 {
      font-size: 3rem;
    }

    .content .name {
      width: 100%;
      flex-direction: row;
    }

    .content input {
      padding: 20px;
      font-size: 1.3rem;
      padding-left: 50px;
    }

    .birth {
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .birth .text {
      flex: 1;
      text-align: right;
      padding-right: 10px;
    }

    .birth .text h2 {
      font-size: 1.8rem;
    }

    .birth .data {
      flex: 2;
      display: flex;
      gap: 20px;
      width: 80%;
    }

    .content select {
      padding: 20px;
    }

    .content button {
      padding: 20px;
      font-size: 1.3rem;
    }

    .content img {
      width: 25px;
      height: 25px;
    }
  }

  /* ===== Novo para mostrar/ocultar senha ===== */
  .password-field {
    position: relative;
  }

  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    color: white;
    opacity: 0.8;
  }

  .toggle-password:hover {
    opacity: 1;
  }
`,U1="/AstroLens/assets/space3-Ck9OEiOC.mp4",mm="/AstroLens/assets/person-BR3KKBbY.png";function H1(){const[u,c]=O.useState(""),[o,r]=O.useState(""),[f,h]=O.useState(""),[y,z]=O.useState(""),[g,m]=O.useState(""),[E,j]=O.useState(!1),[C,L]=O.useState(!1),[q,G]=O.useState(""),[X,H]=O.useState(""),[J,Z]=O.useState(""),tt=il(),K=()=>{if(!f.trim()||!y.trim()||!g.trim()||!u.trim()||!o.trim()||!q.trim()||!X.trim()||!J.trim()){alert("Preencha todos os campos!");return}if(y!==g){alert("As senhas não são iguais!");return}const ut={firstName:u,lastName:o,email:f,password:y,birthDay:q,birthMonth:X,birthYear:J},Tt=JSON.parse(localStorage.getItem("usuarios"))||[];if(Tt.some(oe=>oe.email===f)){alert("Email já cadastrado!");return}Tt.push(ut),localStorage.setItem("usuarios",JSON.stringify(Tt)),alert("Cadastro realizado com sucesso!"),tt("/")},et=Array.from({length:31},(ut,Tt)=>Tt+1),$=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],pt=new Date().getFullYear(),gt=Array.from({length:pt-1900+1},(ut,Tt)=>pt-Tt);return x.jsxs(C1,{children:[x.jsx("div",{className:"video",children:x.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:x.jsx("source",{src:U1,type:"video/mp4"})})}),x.jsxs("div",{className:"content",children:[x.jsx("h1",{children:"Crie sua Conta"}),x.jsxs("div",{className:"name",children:[x.jsxs("div",{className:"input-icon",children:[x.jsx("img",{src:mm,alt:"Nome"}),x.jsx("input",{type:"text",placeholder:"Nome",value:u,onChange:ut=>c(ut.target.value)})]}),x.jsxs("div",{className:"input-icon",children:[x.jsx("img",{src:mm,alt:"Sobrenome"}),x.jsx("input",{type:"text",placeholder:"Sobrenome",value:o,onChange:ut=>r(ut.target.value)})]})]}),x.jsxs("div",{className:"input-icon",children:[x.jsx("img",{src:ip,alt:"Email"}),x.jsx("input",{type:"text",placeholder:"Email",name:"email-name",autoComplete:"new-email",value:f,onChange:ut=>h(ut.target.value)})]}),x.jsxs("div",{className:"input-icon password-field",children:[x.jsx("img",{src:su,alt:"Senha"}),x.jsx("input",{type:E?"text":"password",placeholder:"Senha",name:"password-name",autoComplete:"new-password",value:y,onChange:ut=>z(ut.target.value)}),x.jsx("span",{className:"toggle-password",onClick:()=>j(!E),children:E?"🙉":"🙈"})]}),x.jsxs("div",{className:"input-icon password-field",children:[x.jsx("img",{src:su,alt:"Confirmar senha"}),x.jsx("input",{type:C?"text":"password",placeholder:"Confirmar senha",name:"confirm-password-name",autoComplete:"new-password",value:g,onChange:ut=>m(ut.target.value)}),x.jsx("span",{className:"toggle-password",onClick:()=>L(!C),children:C?"🙉":"🙈"})]}),x.jsxs("div",{className:"birth",children:[x.jsx("div",{className:"text",children:x.jsx("h2",{children:"Data de Nascimento"})}),x.jsxs("div",{className:"data",children:[x.jsxs("select",{value:q,onChange:ut=>G(ut.target.value),children:[x.jsx("option",{value:"",children:"Dia"}),et.map(ut=>x.jsx("option",{value:ut,children:ut},ut))]}),x.jsxs("select",{value:X,onChange:ut=>H(ut.target.value),children:[x.jsx("option",{value:"",children:"Mês"}),$.map((ut,Tt)=>x.jsx("option",{value:Tt+1,children:ut},Tt))]}),x.jsxs("select",{value:J,onChange:ut=>Z(ut.target.value),children:[x.jsx("option",{value:"",children:"Ano"}),gt.map(ut=>x.jsx("option",{value:ut,children:ut},ut))]})]})]}),x.jsx("button",{onClick:K,children:"Cadastrar"})]})]})}const B1=cl.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  width: 100%;
  min-height: 100vh;
  background-image: url(${Zo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  .loading-text {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    color: #00ced1;
    user-select: none;
    animation: blink 1.6s infinite;
    letter-spacing: 2px;
    font-weight: 700;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }

  h1 {
    font-size: 2.5rem;
    color: #d3d3d3;
    text-align: center;
    padding-top: 20px;
  }

  .gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    gap: 10px;
    transition: 0.4s ease;
  }

  .gallery-container img {
    height: 250px;
    width: 280px;
    border: 2px solid #00ced1;
    border-radius: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      transform: scale(1.025);
    }
  }

  button {
    font-size: 1.1rem;
    background-color: #3b6cb7;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    width: 90%;
    max-width: 300px;
    font-weight: bold;
    transition: 0.4s ease;

    margin-top: 30px; /* espaço *acima* do botão, afasta das imagens */
    margin-left: auto;
    margin-right: auto;
    display: block; /* para centralizar o botão */

    &:hover {
      background-color: #2467ca;
    }

  
  }

  @media screen and (min-width: 530px) {
    h1 {
      font-size: 2.6rem;
    }

    .gallery-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    button {
      font-size: 1.2rem;
      padding: 12px;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }

    button {
      font-size: 1.3rem;
      padding: 15px;
    }
  }
`;function Y1(){const[u,c]=O.useState([]),o=il(),r=()=>{o("/app-nasa")};async function f(){try{const g=(await(await fetch("https://images-api.nasa.gov/search?q=galaxy&media_type=image")).json()).collection.items.map(m=>m.links&&m.links[0]?m.links[0].href:null).filter(Boolean);c(g)}catch(h){console.error("Erro ao buscar imagens da NASA:",h)}}return O.useEffect(()=>{f()},[]),x.jsx(B1,{children:u.length===0?x.jsx("p",{className:"loading-text",children:"Carregando imagens..."}):x.jsxs(x.Fragment,{children:[x.jsx("h1",{children:"Galeria Espacial"}),x.jsx("div",{className:"gallery-container",children:u.map((h,y)=>x.jsx("img",{src:h,alt:`Imagem espacial ${y+1}`},y))}),x.jsx("button",{onClick:r,children:"Voltar"})]})})}const q1=c1`
  0% { color: #3b6cb7; }
  50% { color: white; }
  100% { color: #3b6cb7; }
`,pm=cl.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  width: 100%;
  min-height: 100vh;
  background-image: url(${Zo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  color: white;

  .apod-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h2 {
    color: #d3d3d3;
    font-size: 1.55rem;
    margin-top: 20px;
  }

  .apod-content h3 {
    margin-top: 35px;
    margin-bottom: 15px;
  }

  .apod-content p {
    margin-top: 25px;
    text-align: justify;
    width: 90%;
    text-indent: 10px;
  }

  .apod-content img {
    width: 90%;
    height: 250px;
    border: 2px solid #3b6cb7;
    border-radius: 10px;
    max-width: 800px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  button {
    font-size: 1.1rem;
    background-color: #3b6cb7;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    width: 90%;
    max-width: 300px;
    font-weight: bold;
    transition: 0.4s ease;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block;

    &:hover {
      background-color: #2467ca;
    }
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    height: 100vh;
    animation: ${q1} 1.5s infinite;
  }

  @media screen and (min-width: 530px) {
    h2 {
      font-size: 2rem;
    }
    .apod-content h3 {
      margin-top: 20px;
      font-size: 1.4rem;
    }
    .apod-content p {
      font-size: 1.1rem;
    }
    .apod-content img {
      height: 350px;
    }
    button {
      padding: 15px;
      font-size: 1.2rem;
    }
    .loading {
      font-size: 1.7rem;
    }
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 2.2rem;
    }
    .apod-content h3 {
      font-size: 1.5rem;
    }
    .apod-content img {
      max-height: 300px !;
    }
    .apod-content p {
      font-size: 1.3rem;
      width: 90%;
    }
    button {
      padding: 15px;
      font-size: 1.3rem;
    }
    .loading {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    h2 {
      font-size: 2.3rem;
    }
    .apod-content h3 {
      font-size: 1.6rem;
    }
    .apod-content img {
      height: 500px;
    }
    .apod-content p {
      font-size: 1.4rem;
      width: 80%;
    }
    .loading {
      font-size: 2.2rem;
    }
  }
`;function L1(){const u="QH7sKVDhwKAMTjEYAh8UdhjeAfN78CDplRi9Savj",[c,o]=O.useState(null),[r,f]=O.useState(!1),h=il();O.useEffect(()=>{(async()=>{try{const m=await(await fetch(`https://api.nasa.gov/planetary/apod?api_key=${u}`)).json();o(m)}catch(g){console.error("Erro ao buscar APOD:",g)}})()},[]);const y=()=>{h("/app-nasa")};return c?x.jsxs(pm,{children:[x.jsx("h2",{children:"Imagem Astronômica do Dia:"}),x.jsxs("div",{className:"apod-content",children:[x.jsx("h3",{children:c.title}),c.media_type==="image"?x.jsxs(x.Fragment,{children:[!r&&x.jsx("p",{children:"Carregando imagem..."}),x.jsx("img",{src:c.url,alt:c.title,onLoad:()=>f(!0),style:{display:r?"block":"none"}})]}):x.jsx("iframe",{title:"APOD Video",src:c.url,frameBorder:"0",allow:"encrypted-media",allowFullScreen:!0,width:"100%",height:"400px",onLoad:()=>f(!0)}),r&&x.jsxs(x.Fragment,{children:[x.jsx("p",{children:c.explanation}),x.jsx("p",{children:x.jsx("small",{children:c.date})})]})]}),x.jsx("button",{onClick:y,children:"Voltar"})]}):x.jsx(pm,{children:x.jsx("div",{className:"loading",children:x.jsx("p",{children:"Carregando dados..."})})})}function G1(){return x.jsx(x.Fragment,{children:x.jsx(Py,{basename:"/AstroLens",children:x.jsxs(Oy,{children:[x.jsx(el,{path:"/",element:x.jsx(s1,{})}),x.jsx(el,{path:"/forgot-password",element:x.jsx(M1,{})}),x.jsx(el,{path:"/create-account",element:x.jsx(H1,{})}),x.jsx(el,{path:"/app-nasa",element:x.jsx(N1,{})}),x.jsx(el,{path:"/gallery-nasa",element:x.jsx(Y1,{})}),x.jsx(el,{path:"/apod-nasa",element:x.jsx(L1,{})})]})})})}qg.createRoot(document.getElementById("root")).render(x.jsx(O.StrictMode,{children:x.jsx(G1,{})}));
