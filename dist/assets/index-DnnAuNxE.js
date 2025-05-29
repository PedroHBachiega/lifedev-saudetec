(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var _d={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function rS(){if(iv)return ml;iv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var m in o)m!=="key"&&(c[m]=o[m])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:f,ref:o!==void 0?o:null,props:c}}return ml.Fragment=e,ml.jsx=i,ml.jsxs=i,ml}var rv;function sS(){return rv||(rv=1,_d.exports=rS()),_d.exports}var $=sS(),Ed={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function aS(){if(sv)return Te;sv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),b=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,Y={};function F(O,J,ce){this.props=O,this.context=J,this.refs=Y,this.updater=ce||j}F.prototype.isReactComponent={},F.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},F.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function X(){}X.prototype=F.prototype;function ie(O,J,ce){this.props=O,this.context=J,this.refs=Y,this.updater=ce||j}var te=ie.prototype=new X;te.constructor=ie,P(te,F.prototype),te.isPureReactComponent=!0;var me=Array.isArray,he={H:null,A:null,T:null,S:null},Ae=Object.prototype.hasOwnProperty;function M(O,J,ce,se,ae,Se){return ce=Se.ref,{$$typeof:r,type:O,key:J,ref:ce!==void 0?ce:null,props:Se}}function w(O,J){return M(O.type,J,void 0,void 0,void 0,O.props)}function S(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function I(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ce){return J[ce]})}var x=/\/+/g;function U(O,J){return typeof O=="object"&&O!==null&&O.key!=null?I(""+O.key):J.toString(36)}function C(){}function pt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(C,C):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ut(O,J,ce,se,ae){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var Ee=!1;if(O===null)Ee=!0;else switch(Se){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(O.$$typeof){case r:case e:Ee=!0;break;case A:return Ee=O._init,ut(Ee(O._payload),J,ce,se,ae)}}if(Ee)return ae=ae(O),Ee=se===""?"."+U(O,0):se,me(ae)?(ce="",Ee!=null&&(ce=Ee.replace(x,"$&/")+"/"),ut(ae,J,ce,"",function(et){return et})):ae!=null&&(S(ae)&&(ae=w(ae,ce+(ae.key==null||O&&O.key===ae.key?"":(""+ae.key).replace(x,"$&/")+"/")+Ee)),J.push(ae)),1;Ee=0;var ct=se===""?".":se+":";if(me(O))for(var ke=0;ke<O.length;ke++)se=O[ke],Se=ct+U(se,ke),Ee+=ut(se,J,ce,Se,ae);else if(ke=D(O),typeof ke=="function")for(O=ke.call(O),ke=0;!(se=O.next()).done;)se=se.value,Se=ct+U(se,ke++),Ee+=ut(se,J,ce,Se,ae);else if(Se==="object"){if(typeof O.then=="function")return ut(pt(O),J,ce,se,ae);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function re(O,J,ce){if(O==null)return O;var se=[],ae=0;return ut(O,se,"","",function(Se){return J.call(ce,Se,ae++)}),se}function ye(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=ce)},function(ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=ce)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var de=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function ze(){}return Te.Children={map:re,forEach:function(O,J,ce){re(O,function(){J.apply(this,arguments)},ce)},count:function(O){var J=0;return re(O,function(){J++}),J},toArray:function(O){return re(O,function(J){return J})||[]},only:function(O){if(!S(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Te.Component=F,Te.Fragment=i,Te.Profiler=o,Te.PureComponent=ie,Te.StrictMode=a,Te.Suspense=g,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he,Te.act=function(){throw Error("act(...) is not supported in production builds of React.")},Te.cache=function(O){return function(){return O.apply(null,arguments)}},Te.cloneElement=function(O,J,ce){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=P({},O.props),ae=O.key,Se=void 0;if(J!=null)for(Ee in J.ref!==void 0&&(Se=void 0),J.key!==void 0&&(ae=""+J.key),J)!Ae.call(J,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&J.ref===void 0||(se[Ee]=J[Ee]);var Ee=arguments.length-2;if(Ee===1)se.children=ce;else if(1<Ee){for(var ct=Array(Ee),ke=0;ke<Ee;ke++)ct[ke]=arguments[ke+2];se.children=ct}return M(O.type,ae,void 0,void 0,Se,se)},Te.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},Te.createElement=function(O,J,ce){var se,ae={},Se=null;if(J!=null)for(se in J.key!==void 0&&(Se=""+J.key),J)Ae.call(J,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ae[se]=J[se]);var Ee=arguments.length-2;if(Ee===1)ae.children=ce;else if(1<Ee){for(var ct=Array(Ee),ke=0;ke<Ee;ke++)ct[ke]=arguments[ke+2];ae.children=ct}if(O&&O.defaultProps)for(se in Ee=O.defaultProps,Ee)ae[se]===void 0&&(ae[se]=Ee[se]);return M(O,Se,void 0,void 0,null,ae)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(O){return{$$typeof:m,render:O}},Te.isValidElement=S,Te.lazy=function(O){return{$$typeof:A,_payload:{_status:-1,_result:O},_init:ye}},Te.memo=function(O,J){return{$$typeof:y,type:O,compare:J===void 0?null:J}},Te.startTransition=function(O){var J=he.T,ce={};he.T=ce;try{var se=O(),ae=he.S;ae!==null&&ae(ce,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(ze,de)}catch(Se){de(Se)}finally{he.T=J}},Te.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()},Te.use=function(O){return he.H.use(O)},Te.useActionState=function(O,J,ce){return he.H.useActionState(O,J,ce)},Te.useCallback=function(O,J){return he.H.useCallback(O,J)},Te.useContext=function(O){return he.H.useContext(O)},Te.useDebugValue=function(){},Te.useDeferredValue=function(O,J){return he.H.useDeferredValue(O,J)},Te.useEffect=function(O,J){return he.H.useEffect(O,J)},Te.useId=function(){return he.H.useId()},Te.useImperativeHandle=function(O,J,ce){return he.H.useImperativeHandle(O,J,ce)},Te.useInsertionEffect=function(O,J){return he.H.useInsertionEffect(O,J)},Te.useLayoutEffect=function(O,J){return he.H.useLayoutEffect(O,J)},Te.useMemo=function(O,J){return he.H.useMemo(O,J)},Te.useOptimistic=function(O,J){return he.H.useOptimistic(O,J)},Te.useReducer=function(O,J,ce){return he.H.useReducer(O,J,ce)},Te.useRef=function(O){return he.H.useRef(O)},Te.useState=function(O){return he.H.useState(O)},Te.useSyncExternalStore=function(O,J,ce){return he.H.useSyncExternalStore(O,J,ce)},Te.useTransition=function(){return he.H.useTransition()},Te.version="19.0.0",Te}var av;function um(){return av||(av=1,Ed.exports=aS()),Ed.exports}var q=um(),Td={exports:{}},pl={},Ad={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function oS(){return ov||(ov=1,function(r){function e(re,ye){var de=re.length;re.push(ye);e:for(;0<de;){var ze=de-1>>>1,O=re[ze];if(0<o(O,ye))re[ze]=ye,re[de]=O,de=ze;else break e}}function i(re){return re.length===0?null:re[0]}function a(re){if(re.length===0)return null;var ye=re[0],de=re.pop();if(de!==ye){re[0]=de;e:for(var ze=0,O=re.length,J=O>>>1;ze<J;){var ce=2*(ze+1)-1,se=re[ce],ae=ce+1,Se=re[ae];if(0>o(se,de))ae<O&&0>o(Se,se)?(re[ze]=Se,re[ae]=de,ze=ae):(re[ze]=se,re[ce]=de,ze=ce);else if(ae<O&&0>o(Se,de))re[ze]=Se,re[ae]=de,ze=ae;else break e}}return ye}function o(re,ye){var de=re.sortIndex-ye.sortIndex;return de!==0?de:re.id-ye.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],y=[],A=1,b=null,D=3,j=!1,P=!1,Y=!1,F=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function te(re){for(var ye=i(y);ye!==null;){if(ye.callback===null)a(y);else if(ye.startTime<=re)a(y),ye.sortIndex=ye.expirationTime,e(g,ye);else break;ye=i(y)}}function me(re){if(Y=!1,te(re),!P)if(i(g)!==null)P=!0,pt();else{var ye=i(y);ye!==null&&ut(me,ye.startTime-re)}}var he=!1,Ae=-1,M=5,w=-1;function S(){return!(r.unstable_now()-w<M)}function I(){if(he){var re=r.unstable_now();w=re;var ye=!0;try{e:{P=!1,Y&&(Y=!1,X(Ae),Ae=-1),j=!0;var de=D;try{t:{for(te(re),b=i(g);b!==null&&!(b.expirationTime>re&&S());){var ze=b.callback;if(typeof ze=="function"){b.callback=null,D=b.priorityLevel;var O=ze(b.expirationTime<=re);if(re=r.unstable_now(),typeof O=="function"){b.callback=O,te(re),ye=!0;break t}b===i(g)&&a(g),te(re)}else a(g);b=i(g)}if(b!==null)ye=!0;else{var J=i(y);J!==null&&ut(me,J.startTime-re),ye=!1}}break e}finally{b=null,D=de,j=!1}ye=void 0}}finally{ye?x():he=!1}}}var x;if(typeof ie=="function")x=function(){ie(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,C=U.port2;U.port1.onmessage=I,x=function(){C.postMessage(null)}}else x=function(){F(I,0)};function pt(){he||(he=!0,x())}function ut(re,ye){Ae=F(function(){re(r.unstable_now())},ye)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){P||j||(P=!0,pt())},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_getFirstCallbackNode=function(){return i(g)},r.unstable_next=function(re){switch(D){case 1:case 2:case 3:var ye=3;break;default:ye=D}var de=D;D=ye;try{return re()}finally{D=de}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,ye){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var de=D;D=re;try{return ye()}finally{D=de}},r.unstable_scheduleCallback=function(re,ye,de){var ze=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?ze+de:ze):de=ze,re){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=de+O,re={id:A++,callback:ye,priorityLevel:re,startTime:de,expirationTime:O,sortIndex:-1},de>ze?(re.sortIndex=de,e(y,re),i(g)===null&&re===i(y)&&(Y?(X(Ae),Ae=-1):Y=!0,ut(me,de-ze))):(re.sortIndex=O,e(g,re),P||j||(P=!0,pt())),re},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(re){var ye=D;return function(){var de=D;D=ye;try{return re.apply(this,arguments)}finally{D=de}}}}(Sd)),Sd}var lv;function lS(){return lv||(lv=1,Ad.exports=oS()),Ad.exports}var bd={exports:{}},qt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function uS(){if(uv)return qt;uv=1;var r=um();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)y+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(g,y,A){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:g,containerInfo:y,implementation:A}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qt.createPortal=function(g,y){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(g,y,null,A)},qt.flushSync=function(g){var y=f.T,A=a.p;try{if(f.T=null,a.p=2,g)return g()}finally{f.T=y,a.p=A,a.d.f()}},qt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},qt.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},qt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var A=y.as,b=m(A,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,j=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;A==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:D,fetchPriority:j}):A==="script"&&a.d.X(g,{crossOrigin:b,integrity:D,fetchPriority:j,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},qt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var A=m(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},qt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var A=y.as,b=m(A,y.crossOrigin);a.d.L(g,A,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},qt.preloadModule=function(g,y){if(typeof g=="string")if(y){var A=m(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},qt.requestFormReset=function(g){a.d.r(g)},qt.unstable_batchedUpdates=function(g,y){return g(y)},qt.useFormState=function(g,y,A){return f.H.useFormState(g,y,A)},qt.useFormStatus=function(){return f.H.useHostTransitionStatus()},qt.version="19.0.0",qt}var cv;function cS(){if(cv)return bd.exports;cv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bd.exports=uS(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function hS(){if(hv)return pl;hv=1;var r=lS(),e=um(),i=cS();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),j=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),me=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function Ae(t){return t===null||typeof t!="object"?null:(t=he&&t[he]||t["@@iterator"],typeof t=="function"?t:null)}var M=Symbol.for("react.client.reference");function w(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===M?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case g:return"Fragment";case m:return"Portal";case A:return"Profiler";case y:return"StrictMode";case Y:return"Suspense";case F:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case j:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case X:return n=t.displayName||null,n!==null?n:w(t.type)||"Memo";case ie:n=t._payload,t=t._init;try{return w(t(n))}catch{}}return null}var S=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,x,U;function C(t){if(x===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);x=n&&n[1]||"",U=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+x+t+U}var pt=!1;function ut(t,n){if(!t||pt)return"";pt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(G){var B=G}Reflect.construct(t,[],Z)}else{try{Z.call()}catch(G){B=G}t.call(Z.prototype)}}else{try{throw Error()}catch(G){B=G}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(G){if(G&&B&&typeof G.stack=="string")return[G.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var R=_.split(`
`),V=E.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<V.length&&!V[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===V.length)for(l=R.length-1,h=V.length-1;1<=l&&0<=h&&R[l]!==V[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==V[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==V[h]){var K=`
`+R[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{pt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?C(s):""}function re(t){switch(t.tag){case 26:case 27:case 5:return C(t.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 15:return t=ut(t.type,!1),t;case 11:return t=ut(t.type.render,!1),t;case 1:return t=ut(t.type,!0),t;default:return""}}function ye(t){try{var n="";do n+=re(t),t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function de(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function ze(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function O(t){if(de(t)!==t)throw Error(a(188))}function J(t){var n=t.alternate;if(!n){if(n=de(t),n===null)throw Error(a(188));return n!==t?null:t}for(var s=t,l=n;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return O(h),t;if(d===l)return O(h),n;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=d;else{for(var _=!1,E=h.child;E;){if(E===s){_=!0,s=h,l=d;break}if(E===l){_=!0,l=h,s=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===s){_=!0,s=d,l=h;break}if(E===l){_=!0,l=d,s=h;break}E=E.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:n}function ce(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=ce(t),n!==null)return n;t=t.sibling}return null}var se=Array.isArray,ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se={pending:!1,data:null,method:null,action:null},Ee=[],ct=-1;function ke(t){return{current:t}}function et(t){0>ct||(t.current=Ee[ct],Ee[ct]=null,ct--)}function Be(t,n){ct++,Ee[ct]=t.current,t.current=n}var Yt=ke(null),vi=ke(null),pn=ke(null),nr=ke(null);function ir(t,n){switch(Be(pn,n),Be(vi,t),Be(Yt,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?My(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=My(t),n=xy(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}et(Yt),Be(Yt,n)}function _i(){et(Yt),et(vi),et(pn)}function lo(t){t.memoizedState!==null&&Be(nr,t);var n=Yt.current,s=xy(n,t.type);n!==s&&(Be(vi,t),Be(Yt,s))}function Zs(t){vi.current===t&&(et(Yt),et(vi)),nr.current===t&&(et(nr),ul._currentValue=Se)}var Js=Object.prototype.hasOwnProperty,es=r.unstable_scheduleCallback,ea=r.unstable_cancelCallback,Eh=r.unstable_shouldYield,uo=r.unstable_requestPaint,en=r.unstable_now,Yl=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,Ei=r.unstable_NormalPriority,Ql=r.unstable_LowPriority,co=r.unstable_IdlePriority,Th=r.log,ts=r.unstable_setDisableYieldValue,rr=null,Bt=null;function ho(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(rr,t,void 0,(t.current.flags&128)===128)}catch{}}function Yn(t){if(typeof Th=="function"&&ts(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(rr,t)}catch{}}var Qt=Math.clz32?Math.clz32:Wl,fo=Math.log,Xl=Math.LN2;function Wl(t){return t>>>=0,t===0?32:31-(fo(t)/Xl|0)|0}var Qn=128,sr=4194304;function Vn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gn(t,n){var s=t.pendingLanes;if(s===0)return 0;var l=0,h=t.suspendedLanes,d=t.pingedLanes,_=t.warmLanes;t=t.finishedLanes!==0;var E=s&134217727;return E!==0?(s=E&~h,s!==0?l=Vn(s):(d&=E,d!==0?l=Vn(d):t||(_=E&~_,_!==0&&(l=Vn(_))))):(E=s&~h,E!==0?l=Vn(E):d!==0?l=Vn(d):t||(_=s&~_,_!==0&&(l=Vn(_)))),l===0?0:n!==0&&n!==l&&(n&h)===0&&(h=l&-l,_=n&-n,h>=_||h===32&&(_&4194176)!==0)?n:l}function ar(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ta(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mo(){var t=Qn;return Qn<<=1,(Qn&4194176)===0&&(Qn=128),t}function or(){var t=sr;return sr<<=1,(sr&62914560)===0&&(sr=4194304),t}function na(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function ot(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zl(t,n,s,l,h,d){var _=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var E=t.entanglements,R=t.expirationTimes,V=t.hiddenUpdates;for(s=_&~s;0<s;){var K=31-Qt(s),Z=1<<K;E[K]=0,R[K]=-1;var B=V[K];if(B!==null)for(V[K]=null,K=0;K<B.length;K++){var G=B[K];G!==null&&(G.lane&=-536870913)}s&=~Z}l!==0&&lr(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~n))}function lr(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Qt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194218}function ur(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Qt(s),h=1<<l;h&n|t[l]&n&&(t[l]|=n),s&=~h}}function Jl(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function eu(){var t=ae.p;return t!==0?t:(t=window.event,t===void 0?32:Wy(t.type))}function cr(t,n){var s=ae.p;try{return ae.p=t,n()}finally{ae.p=s}}var Xn=Math.random().toString(36).slice(2),bt="__reactFiber$"+Xn,yt="__reactProps$"+Xn,Ti="__reactContainer$"+Xn,ns="__reactEvents$"+Xn,ia="__reactListeners$"+Xn,Wn="__reactHandles$"+Xn,po="__reactResources$"+Xn,hr="__reactMarker$"+Xn;function is(t){delete t[bt],delete t[yt],delete t[ns],delete t[ia],delete t[Wn]}function kn(t){var n=t[bt];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Ti]||s[bt]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Py(t);t!==null;){if(s=t[bt])return s;t=Py(t)}return n}t=s,s=t.parentNode}return null}function Ai(t){if(t=t[bt]||t[Ti]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function fr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function dr(t){var n=t[po];return n||(n=t[po]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function We(t){t[hr]=!0}var go=new Set,ra={};function on(t,n){tn(t,n),tn(t+"Capture",n)}function tn(t,n){for(ra[t]=n,t=0;t<n.length;t++)go.add(n[t])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ah=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yo={},vo={};function tu(t){return Js.call(vo,t)?!0:Js.call(yo,t)?!1:Ah.test(t)?vo[t]=!0:(yo[t]=!0,!1)}function mr(t,n,s){if(tu(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function pr(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function yn(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function Xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nu(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Sh(t){var n=nu(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function rs(t){t._valueTracker||(t._valueTracker=Sh(t))}function _o(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=nu(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function sa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Si=/[\n"\\]/g;function tt(t){return t.replace(Si,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function gr(t,n,s,l,h,d,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Xt(n)):t.value!==""+Xt(n)&&(t.value=""+Xt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?aa(t,_,Xt(n)):s!=null?aa(t,_,Xt(s)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Xt(E):t.removeAttribute("name")}function ss(t,n,s,l,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;s=s!=null?""+Xt(s):"",n=n!=null?""+Xt(n):s,E||n===t.value||(t.value=n),t.defaultValue=n}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function aa(t,n,s){n==="number"&&sa(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Pe(t,n,s,l){if(t=t.options,n){n={};for(var h=0;h<s.length;h++)n["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=n.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Xt(s),n=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}n!==null||t[h].disabled||(n=t[h])}n!==null&&(n.selected=!0)}}function as(t,n,s){if(n!=null&&(n=""+Xt(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+Xt(s):""}function yr(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(a(92));if(se(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=Xt(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function vn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var bh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eo(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||bh.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function iu(t,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in n)l=n[h],n.hasOwnProperty(h)&&s[h]!==l&&Eo(t,h,l)}else for(var d in n)n.hasOwnProperty(d)&&Eo(t,d,n[d])}function To(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(t){return Rh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var _n=null;function oa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bi=null,wi=null;function Ri(t){var n=Ai(t);if(n&&(t=n.stateNode)){var s=t[yt]||null;e:switch(t=n.stateNode,n.type){case"input":if(gr(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+tt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var h=l[yt]||null;if(!h)throw Error(a(90));gr(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&_o(l)}break e;case"textarea":as(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&Pe(t,!!s.multiple,n,!1)}}}var Ao=!1;function ru(t,n,s){if(Ao)return t(n,s);Ao=!0;try{var l=t(n);return l}finally{if(Ao=!1,(bi!==null||wi!==null)&&(Qu(),bi&&(n=bi,t=wi,wi=bi=null,Ri(n),t)))for(n=0;n<t.length;n++)Ri(t[n])}}function os(t,n){var s=t.stateNode;if(s===null)return null;var l=s[yt]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var En=!1;if(ln)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){En=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{En=!1}var Jn=null,vr=null,Ii=null;function So(){if(Ii)return Ii;var t,n=vr,s=n.length,l,h="value"in Jn?Jn.value:Jn.textContent,d=h.length;for(t=0;t<s&&n[t]===h[t];t++);var _=s-t;for(l=1;l<=_&&n[s-l]===h[d-l];l++);return Ii=h.slice(t,1<l?1-l:void 0)}function ei(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ti(){return!0}function bo(){return!1}function wt(t){function n(s,l,h,d,_){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(s=t[E],this[E]=s?s(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ti:bo,this.isPropagationStopped=bo,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),n}var je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=wt(je),us=I({},je,{view:0,detail:0}),su=wt(us),ua,ca,ni,cs=I({},us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ni&&(ni&&t.type==="mousemove"?(ua=t.screenX-ni.screenX,ca=t.screenY-ni.screenY):ca=ua=0,ni=t),ua)},movementY:function(t){return"movementY"in t?t.movementY:ca}}),Tn=wt(cs),au=I({},cs,{dataTransfer:0}),Ih=wt(au),hs=I({},us,{relatedTarget:0}),ha=wt(hs),wo=I({},je,{animationName:0,elapsedTime:0,pseudoElement:0}),fa=wt(wo),ou=I({},je,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),da=wt(ou),Ch=I({},je,{data:0}),Ro=wt(Ch),fs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Io(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=uu[t])?!!n[t]:!1}function ds(){return Io}var cu=I({},us,{key:function(t){if(t.key){var n=fs[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ei(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(t){return t.type==="keypress"?ei(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ei(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ma=wt(cu),hu=I({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=wt(hu),Ci=I({},us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),fu=wt(Ci),du=I({},je,{propertyName:0,elapsedTime:0,pseudoElement:0}),mu=wt(du),pu=I({},cs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pa=wt(pu),Wt=I({},je,{newState:0,oldState:0}),gu=wt(Wt),yu=[9,13,27,32],ii=ln&&"CompositionEvent"in window,u=null;ln&&"documentMode"in document&&(u=document.documentMode);var p=ln&&"TextEvent"in window&&!u,v=ln&&(!ii||u&&8<u&&11>=u),T=" ",L=!1;function H(t,n){switch(t){case"keyup":return yu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ne(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ne=!1;function vt(t,n){switch(t){case"compositionend":return ne(n);case"keypress":return n.which!==32?null:(L=!0,T);case"textInput":return t=n.data,t===T&&L?null:t;default:return null}}function Me(t,n){if(Ne)return t==="compositionend"||!ii&&H(t,n)?(t=So(),Ii=vr=Jn=null,Ne=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return v&&n.locale!=="ko"?null:n.data;default:return null}}var Rt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _t(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Rt[t.type]:n==="textarea"}function Di(t,n,s,l){bi?wi?wi.push(l):wi=[l]:bi=l,n=ec(n,"onChange"),0<n.length&&(s=new la("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var Mt=null,ri=null;function Do(t){Iy(t,0)}function vu(t){var n=fr(t);if(_o(n))return t}function np(t,n){if(t==="change")return n}var ip=!1;if(ln){var Dh;if(ln){var Oh="oninput"in document;if(!Oh){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Oh=typeof rp.oninput=="function"}Dh=Oh}else Dh=!1;ip=Dh&&(!document.documentMode||9<document.documentMode)}function sp(){Mt&&(Mt.detachEvent("onpropertychange",ap),ri=Mt=null)}function ap(t){if(t.propertyName==="value"&&vu(ri)){var n=[];Di(n,ri,t,oa(t)),ru(Do,n)}}function VT(t,n,s){t==="focusin"?(sp(),Mt=n,ri=s,Mt.attachEvent("onpropertychange",ap)):t==="focusout"&&sp()}function kT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(ri)}function PT(t,n){if(t==="click")return vu(n)}function LT(t,n){if(t==="input"||t==="change")return vu(n)}function UT(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var un=typeof Object.is=="function"?Object.is:UT;function Oo(t,n){if(un(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!Js.call(n,h)||!un(t[h],n[h]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lp(t,n){var s=op(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=op(s)}}function up(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?up(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=sa(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=sa(t.document)}return n}function Nh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function zT(t,n){var s=cp(n);n=t.focusedElem;var l=t.selectionRange;if(s!==n&&n&&n.ownerDocument&&up(n.ownerDocument.documentElement,n)){if(l!==null&&Nh(n)){if(t=l.start,s=l.end,s===void 0&&(s=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(s,n.value.length);else if(s=(t=n.ownerDocument||document)&&t.defaultView||window,s.getSelection){s=s.getSelection();var h=n.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!s.extend&&d>l&&(h=l,l=d,d=h),h=lp(n,d);var _=lp(n,l);h&&_&&(s.rangeCount!==1||s.anchorNode!==h.node||s.anchorOffset!==h.offset||s.focusNode!==_.node||s.focusOffset!==_.offset)&&(t=t.createRange(),t.setStart(h.node,h.offset),s.removeAllRanges(),d>l?(s.addRange(t),s.extend(_.node,_.offset)):(t.setEnd(_.node,_.offset),s.addRange(t)))}}for(t=[],s=n;s=s.parentNode;)s.nodeType===1&&t.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)s=t[n],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var jT=ln&&"documentMode"in document&&11>=document.documentMode,ga=null,Mh=null,No=null,xh=!1;function hp(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;xh||ga==null||ga!==sa(l)||(l=ga,"selectionStart"in l&&Nh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&Oo(No,l)||(No=l,l=ec(Mh,"onSelect"),0<l.length&&(n=new la("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=ga)))}function ms(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var ya={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Vh={},fp={};ln&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function ps(t){if(Vh[t])return Vh[t];if(!ya[t])return t;var n=ya[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in fp)return Vh[t]=n[s];return t}var dp=ps("animationend"),mp=ps("animationiteration"),pp=ps("animationstart"),BT=ps("transitionrun"),HT=ps("transitionstart"),qT=ps("transitioncancel"),gp=ps("transitionend"),yp=new Map,vp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Pn(t,n){yp.set(t,n),on(n,[t])}var An=[],va=0,kh=0;function _u(){for(var t=va,n=kh=va=0;n<t;){var s=An[n];An[n++]=null;var l=An[n];An[n++]=null;var h=An[n];An[n++]=null;var d=An[n];if(An[n++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&_p(s,h,d)}}function Eu(t,n,s,l){An[va++]=t,An[va++]=n,An[va++]=s,An[va++]=l,kh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ph(t,n,s,l){return Eu(t,n,s,l),Tu(t)}function _r(t,n){return Eu(t,null,null,n),Tu(t)}function _p(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var h=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;h&&n!==null&&t.tag===3&&(d=t.stateNode,h=31-Qt(s),d=d.hiddenUpdates,t=d[h],t===null?d[h]=[n]:t.push(n),n.lane=s|536870912)}function Tu(t){if(50<nl)throw nl=0,qf=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var _a={},Ep=new WeakMap;function Sn(t,n){if(typeof t=="object"&&t!==null){var s=Ep.get(t);return s!==void 0?s:(n={value:t,source:n,stack:ye(n)},Ep.set(t,n),n)}return{value:t,source:n,stack:ye(n)}}var Ea=[],Ta=0,Au=null,Su=0,bn=[],wn=0,gs=null,Oi=1,Ni="";function ys(t,n){Ea[Ta++]=Su,Ea[Ta++]=Au,Au=t,Su=n}function Tp(t,n,s){bn[wn++]=Oi,bn[wn++]=Ni,bn[wn++]=gs,gs=t;var l=Oi;t=Ni;var h=32-Qt(l)-1;l&=~(1<<h),s+=1;var d=32-Qt(n)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Oi=1<<32-Qt(n)+h|s<<h|l,Ni=d+t}else Oi=1<<d|s<<h|l,Ni=t}function Lh(t){t.return!==null&&(ys(t,1),Tp(t,1,0))}function Uh(t){for(;t===Au;)Au=Ea[--Ta],Ea[Ta]=null,Su=Ea[--Ta],Ea[Ta]=null;for(;t===gs;)gs=bn[--wn],bn[wn]=null,Ni=bn[--wn],bn[wn]=null,Oi=bn[--wn],bn[wn]=null}var Zt=null,xt=null,Le=!1,Ln=null,si=!1,zh=Error(a(519));function vs(t){var n=Error(a(418,""));throw Vo(Sn(n,t)),zh}function Ap(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[bt]=t,n[yt]=l,s){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(s=0;s<rl.length;s++)Oe(rl[s],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),ss(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),rs(n);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),yr(n,l.value,l.defaultValue,l.children),rs(n)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Ny(n.textContent,s)?(l.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),l.onScroll!=null&&Oe("scroll",n),l.onScrollEnd!=null&&Oe("scrollend",n),l.onClick!=null&&(n.onclick=tc),n=!0):n=!1,n||vs(t)}function Sp(t){for(Zt=t.return;Zt;)switch(Zt.tag){case 3:case 27:si=!0;return;case 5:case 13:si=!1;return;default:Zt=Zt.return}}function Mo(t){if(t!==Zt)return!1;if(!Le)return Sp(t),Le=!0,!1;var n=!1,s;if((s=t.tag!==3&&t.tag!==27)&&((s=t.tag===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||ad(t.type,t.memoizedProps)),s=!s),s&&(n=!0),n&&xt&&vs(t),Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(n===0){xt=zn(t.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;t=t.nextSibling}xt=null}}else xt=Zt?zn(t.stateNode.nextSibling):null;return!0}function xo(){xt=Zt=null,Le=!1}function Vo(t){Ln===null?Ln=[t]:Ln.push(t)}var ko=Error(a(460)),bp=Error(a(474)),jh={then:function(){}};function wp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bu(){}function Rp(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(bu,bu),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===ko?Error(a(483)):t;default:if(typeof n.status=="string")n.then(bu,bu);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=l}},function(l){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===ko?Error(a(483)):t}throw Po=n,ko}}var Po=null;function Ip(){if(Po===null)throw Error(a(459));var t=Po;return Po=null,t}var Aa=null,Lo=0;function wu(t){var n=Lo;return Lo+=1,Aa===null&&(Aa=[]),Rp(Aa,t,n)}function Uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ru(t,n){throw n.$$typeof===c?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Cp(t){var n=t._init;return n(t._payload)}function Dp(t){function n(k,N){if(t){var z=k.deletions;z===null?(k.deletions=[N],k.flags|=16):z.push(N)}}function s(k,N){if(!t)return null;for(;N!==null;)n(k,N),N=N.sibling;return null}function l(k){for(var N=new Map;k!==null;)k.key!==null?N.set(k.key,k):N.set(k.index,k),k=k.sibling;return N}function h(k,N){return k=Nr(k,N),k.index=0,k.sibling=null,k}function d(k,N,z){return k.index=z,t?(z=k.alternate,z!==null?(z=z.index,z<N?(k.flags|=33554434,N):z):(k.flags|=33554434,N)):(k.flags|=1048576,N)}function _(k){return t&&k.alternate===null&&(k.flags|=33554434),k}function E(k,N,z,Q){return N===null||N.tag!==6?(N=kf(z,k.mode,Q),N.return=k,N):(N=h(N,z),N.return=k,N)}function R(k,N,z,Q){var oe=z.type;return oe===g?K(k,N,z.props.children,Q,z.key):N!==null&&(N.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ie&&Cp(oe)===N.type)?(N=h(N,z.props),Uo(N,z),N.return=k,N):(N=Fu(z.type,z.key,z.props,null,k.mode,Q),Uo(N,z),N.return=k,N)}function V(k,N,z,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==z.containerInfo||N.stateNode.implementation!==z.implementation?(N=Pf(z,k.mode,Q),N.return=k,N):(N=h(N,z.children||[]),N.return=k,N)}function K(k,N,z,Q,oe){return N===null||N.tag!==7?(N=Cs(z,k.mode,Q,oe),N.return=k,N):(N=h(N,z),N.return=k,N)}function Z(k,N,z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=kf(""+N,k.mode,z),N.return=k,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case f:return z=Fu(N.type,N.key,N.props,null,k.mode,z),Uo(z,N),z.return=k,z;case m:return N=Pf(N,k.mode,z),N.return=k,N;case ie:var Q=N._init;return N=Q(N._payload),Z(k,N,z)}if(se(N)||Ae(N))return N=Cs(N,k.mode,z,null),N.return=k,N;if(typeof N.then=="function")return Z(k,wu(N),z);if(N.$$typeof===j)return Z(k,Bu(k,N),z);Ru(k,N)}return null}function B(k,N,z,Q){var oe=N!==null?N.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return oe!==null?null:E(k,N,""+z,Q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case f:return z.key===oe?R(k,N,z,Q):null;case m:return z.key===oe?V(k,N,z,Q):null;case ie:return oe=z._init,z=oe(z._payload),B(k,N,z,Q)}if(se(z)||Ae(z))return oe!==null?null:K(k,N,z,Q,null);if(typeof z.then=="function")return B(k,N,wu(z),Q);if(z.$$typeof===j)return B(k,N,Bu(k,z),Q);Ru(k,z)}return null}function G(k,N,z,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return k=k.get(z)||null,E(N,k,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case f:return k=k.get(Q.key===null?z:Q.key)||null,R(N,k,Q,oe);case m:return k=k.get(Q.key===null?z:Q.key)||null,V(N,k,Q,oe);case ie:var Re=Q._init;return Q=Re(Q._payload),G(k,N,z,Q,oe)}if(se(Q)||Ae(Q))return k=k.get(z)||null,K(N,k,Q,oe,null);if(typeof Q.then=="function")return G(k,N,z,wu(Q),oe);if(Q.$$typeof===j)return G(k,N,z,Bu(N,Q),oe);Ru(N,Q)}return null}function ue(k,N,z,Q){for(var oe=null,Re=null,fe=N,pe=N=0,Dt=null;fe!==null&&pe<z.length;pe++){fe.index>pe?(Dt=fe,fe=null):Dt=fe.sibling;var Ue=B(k,fe,z[pe],Q);if(Ue===null){fe===null&&(fe=Dt);break}t&&fe&&Ue.alternate===null&&n(k,fe),N=d(Ue,N,pe),Re===null?oe=Ue:Re.sibling=Ue,Re=Ue,fe=Dt}if(pe===z.length)return s(k,fe),Le&&ys(k,pe),oe;if(fe===null){for(;pe<z.length;pe++)fe=Z(k,z[pe],Q),fe!==null&&(N=d(fe,N,pe),Re===null?oe=fe:Re.sibling=fe,Re=fe);return Le&&ys(k,pe),oe}for(fe=l(fe);pe<z.length;pe++)Dt=G(fe,k,pe,z[pe],Q),Dt!==null&&(t&&Dt.alternate!==null&&fe.delete(Dt.key===null?pe:Dt.key),N=d(Dt,N,pe),Re===null?oe=Dt:Re.sibling=Dt,Re=Dt);return t&&fe.forEach(function(Ur){return n(k,Ur)}),Le&&ys(k,pe),oe}function _e(k,N,z,Q){if(z==null)throw Error(a(151));for(var oe=null,Re=null,fe=N,pe=N=0,Dt=null,Ue=z.next();fe!==null&&!Ue.done;pe++,Ue=z.next()){fe.index>pe?(Dt=fe,fe=null):Dt=fe.sibling;var Ur=B(k,fe,Ue.value,Q);if(Ur===null){fe===null&&(fe=Dt);break}t&&fe&&Ur.alternate===null&&n(k,fe),N=d(Ur,N,pe),Re===null?oe=Ur:Re.sibling=Ur,Re=Ur,fe=Dt}if(Ue.done)return s(k,fe),Le&&ys(k,pe),oe;if(fe===null){for(;!Ue.done;pe++,Ue=z.next())Ue=Z(k,Ue.value,Q),Ue!==null&&(N=d(Ue,N,pe),Re===null?oe=Ue:Re.sibling=Ue,Re=Ue);return Le&&ys(k,pe),oe}for(fe=l(fe);!Ue.done;pe++,Ue=z.next())Ue=G(fe,k,pe,Ue.value,Q),Ue!==null&&(t&&Ue.alternate!==null&&fe.delete(Ue.key===null?pe:Ue.key),N=d(Ue,N,pe),Re===null?oe=Ue:Re.sibling=Ue,Re=Ue);return t&&fe.forEach(function(iS){return n(k,iS)}),Le&&ys(k,pe),oe}function rt(k,N,z,Q){if(typeof z=="object"&&z!==null&&z.type===g&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case f:e:{for(var oe=z.key;N!==null;){if(N.key===oe){if(oe=z.type,oe===g){if(N.tag===7){s(k,N.sibling),Q=h(N,z.props.children),Q.return=k,k=Q;break e}}else if(N.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ie&&Cp(oe)===N.type){s(k,N.sibling),Q=h(N,z.props),Uo(Q,z),Q.return=k,k=Q;break e}s(k,N);break}else n(k,N);N=N.sibling}z.type===g?(Q=Cs(z.props.children,k.mode,Q,z.key),Q.return=k,k=Q):(Q=Fu(z.type,z.key,z.props,null,k.mode,Q),Uo(Q,z),Q.return=k,k=Q)}return _(k);case m:e:{for(oe=z.key;N!==null;){if(N.key===oe)if(N.tag===4&&N.stateNode.containerInfo===z.containerInfo&&N.stateNode.implementation===z.implementation){s(k,N.sibling),Q=h(N,z.children||[]),Q.return=k,k=Q;break e}else{s(k,N);break}else n(k,N);N=N.sibling}Q=Pf(z,k.mode,Q),Q.return=k,k=Q}return _(k);case ie:return oe=z._init,z=oe(z._payload),rt(k,N,z,Q)}if(se(z))return ue(k,N,z,Q);if(Ae(z)){if(oe=Ae(z),typeof oe!="function")throw Error(a(150));return z=oe.call(z),_e(k,N,z,Q)}if(typeof z.then=="function")return rt(k,N,wu(z),Q);if(z.$$typeof===j)return rt(k,N,Bu(k,z),Q);Ru(k,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,N!==null&&N.tag===6?(s(k,N.sibling),Q=h(N,z),Q.return=k,k=Q):(s(k,N),Q=kf(z,k.mode,Q),Q.return=k,k=Q),_(k)):s(k,N)}return function(k,N,z,Q){try{Lo=0;var oe=rt(k,N,z,Q);return Aa=null,oe}catch(fe){if(fe===ko)throw fe;var Re=Dn(29,fe,null,k.mode);return Re.lanes=Q,Re.return=k,Re}finally{}}}var _s=Dp(!0),Op=Dp(!1),Sa=ke(null),Iu=ke(0);function Np(t,n){t=Hi,Be(Iu,t),Be(Sa,n),Hi=t|n.baseLanes}function Bh(){Be(Iu,Hi),Be(Sa,Sa.current)}function Hh(){Hi=Iu.current,et(Sa),et(Iu)}var Rn=ke(null),ai=null;function Er(t){var n=t.alternate;Be(Et,Et.current&1),Be(Rn,t),ai===null&&(n===null||Sa.current!==null||n.memoizedState!==null)&&(ai=t)}function Mp(t){if(t.tag===22){if(Be(Et,Et.current),Be(Rn,t),ai===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(ai=t)}}else Tr()}function Tr(){Be(Et,Et.current),Be(Rn,Rn.current)}function Mi(t){et(Rn),ai===t&&(ai=null),et(Et)}var Et=ke(0);function Cu(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var FT=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},GT=r.unstable_scheduleCallback,KT=r.unstable_NormalPriority,Tt={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qh(){return{controller:new FT,data:new Map,refCount:0}}function zo(t){t.refCount--,t.refCount===0&&GT(KT,function(){t.controller.abort()})}var jo=null,Fh=0,ba=0,wa=null;function $T(t,n){if(jo===null){var s=jo=[];Fh=0,ba=Wf(),wa={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Fh++,n.then(xp,xp),n}function xp(){if(--Fh===0&&jo!==null){wa!==null&&(wa.status="fulfilled");var t=jo;jo=null,ba=0,wa=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function YT(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var h=0;h<s.length;h++)(0,s[h])(n)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var Vp=S.S;S.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&$T(t,n),Vp!==null&&Vp(t,n)};var Es=ke(null);function Gh(){var t=Es.current;return t!==null?t:Ke.pooledCache}function Du(t,n){n===null?Be(Es,Es.current):Be(Es,n.pool)}function kp(){var t=Gh();return t===null?null:{parent:Tt._currentValue,pool:t}}var Ar=0,we=null,qe=null,ht=null,Ou=!1,Ra=!1,Ts=!1,Nu=0,Bo=0,Ia=null,QT=0;function lt(){throw Error(a(321))}function Kh(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!un(t[s],n[s]))return!1;return!0}function $h(t,n,s,l,h,d){return Ar=d,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,S.H=t===null||t.memoizedState===null?As:Sr,Ts=!1,d=s(l,h),Ts=!1,Ra&&(d=Lp(n,s,l,h)),Pp(t),d}function Pp(t){S.H=oi;var n=qe!==null&&qe.next!==null;if(Ar=0,ht=qe=we=null,Ou=!1,Bo=0,Ia=null,n)throw Error(a(300));t===null||It||(t=t.dependencies,t!==null&&ju(t)&&(It=!0))}function Lp(t,n,s,l){we=t;var h=0;do{if(Ra&&(Ia=null),Bo=0,Ra=!1,25<=h)throw Error(a(301));if(h+=1,ht=qe=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=Ss,d=n(s,l)}while(Ra);return d}function XT(){var t=S.H,n=t.useState()[0];return n=typeof n.then=="function"?Ho(n):n,t=t.useState()[0],(qe!==null?qe.memoizedState:null)!==t&&(we.flags|=1024),n}function Yh(){var t=Nu!==0;return Nu=0,t}function Qh(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Xh(t){if(Ou){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ou=!1}Ar=0,ht=qe=we=null,Ra=!1,Bo=Nu=0,Ia=null}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?we.memoizedState=ht=t:ht=ht.next=t,ht}function ft(){if(qe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var n=ht===null?we.memoizedState:ht.next;if(n!==null)ht=n,qe=t;else{if(t===null)throw we.alternate===null?Error(a(467)):Error(a(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},ht===null?we.memoizedState=ht=t:ht=ht.next=t}return ht}var Mu;Mu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ho(t){var n=Bo;return Bo+=1,Ia===null&&(Ia=[]),t=Rp(Ia,t,n),n=we,(ht===null?n.memoizedState:ht.next)===null&&(n=n.alternate,S.H=n===null||n.memoizedState===null?As:Sr),t}function xu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ho(t);if(t.$$typeof===j)return Ht(t)}throw Error(a(438,String(t)))}function Wh(t){var n=null,s=we.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Mu(),we.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=me;return n.index++,s}function xi(t,n){return typeof n=="function"?n(t):n}function Vu(t){var n=ft();return Zh(n,qe,t)}function Zh(t,n,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}n.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{n=h.next;var E=_=null,R=null,V=n,K=!1;do{var Z=V.lane&-536870913;if(Z!==V.lane?(xe&Z)===Z:(Ar&Z)===Z){var B=V.revertLane;if(B===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),Z===ba&&(K=!0);else if((Ar&B)===B){V=V.next,B===ba&&(K=!0);continue}else Z={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(E=R=Z,_=d):R=R.next=Z,we.lanes|=B,Mr|=B;Z=V.action,Ts&&s(d,Z),d=V.hasEagerState?V.eagerState:s(d,Z)}else B={lane:Z,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(E=R=B,_=d):R=R.next=B,we.lanes|=Z,Mr|=Z;V=V.next}while(V!==null&&V!==n);if(R===null?_=d:R.next=E,!un(d,t.memoizedState)&&(It=!0,K&&(s=wa,s!==null)))throw s;t.memoizedState=d,t.baseState=_,t.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Jh(t){var n=ft(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,h=s.pending,d=n.memoizedState;if(h!==null){s.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);un(d,n.memoizedState)||(It=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,l]}function Up(t,n,s){var l=we,h=ft(),d=Le;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=n();var _=!un((qe||h).memoizedState,s);if(_&&(h.memoizedState=s,It=!0),h=h.queue,nf(Bp.bind(null,l,h,t),[t]),h.getSnapshot!==n||_||ht!==null&&ht.memoizedState.tag&1){if(l.flags|=2048,Ca(9,jp.bind(null,l,h,s,n),{destroy:void 0},null),Ke===null)throw Error(a(349));d||(Ar&60)!==0||zp(l,n,s)}return s}function zp(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=we.updateQueue,n===null?(n=Mu(),we.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function jp(t,n,s,l){n.value=s,n.getSnapshot=l,Hp(n)&&qp(t)}function Bp(t,n,s){return s(function(){Hp(n)&&qp(t)})}function Hp(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!un(t,s)}catch{return!0}}function qp(t){var n=_r(t,2);n!==null&&Jt(n,t,2)}function ef(t){var n=nn();if(typeof t=="function"){var s=t;if(t=s(),Ts){Yn(!0);try{s()}finally{Yn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:t},n}function Fp(t,n,s,l){return t.baseState=s,Zh(t,qe,typeof l=="function"?l:xi)}function WT(t,n,s,l,h){if(Lu(t))throw Error(a(485));if(t=n.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};S.T!==null?s(!0):d.isTransition=!1,l(d),s=n.pending,s===null?(d.next=n.pending=d,Gp(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Gp(t,n){var s=n.action,l=n.payload,h=t.state;if(n.isTransition){var d=S.T,_={};S.T=_;try{var E=s(h,l),R=S.S;R!==null&&R(_,E),Kp(t,n,E)}catch(V){tf(t,n,V)}finally{S.T=d}}else try{d=s(h,l),Kp(t,n,d)}catch(V){tf(t,n,V)}}function Kp(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){$p(t,n,l)},function(l){return tf(t,n,l)}):$p(t,n,s)}function $p(t,n,s){n.status="fulfilled",n.value=s,Yp(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Gp(t,s)))}function tf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,Yp(n),n=n.next;while(n!==l)}t.action=null}function Yp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Qp(t,n){return n}function Xp(t,n){if(Le){var s=Ke.formState;if(s!==null){e:{var l=we;if(Le){if(xt){t:{for(var h=xt,d=si;h.nodeType!==8;){if(!d){h=null;break t}if(h=zn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){xt=zn(h.nextSibling),l=h.data==="F!";break e}}vs(l)}l=!1}l&&(n=s[0])}}return s=nn(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},s.queue=l,s=mg.bind(null,we,l),l.dispatch=s,l=ef(!1),d=lf.bind(null,we,!1,l.queue),l=nn(),h={state:n,dispatch:null,action:t,pending:null},l.queue=h,s=WT.bind(null,we,h,d,s),h.dispatch=s,l.memoizedState=t,[n,s,!1]}function Wp(t){var n=ft();return Zp(n,qe,t)}function Zp(t,n,s){n=Zh(t,n,Qp)[0],t=Vu(xi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Ho(n):n;var l=ft(),h=l.queue,d=h.dispatch;return s!==l.memoizedState&&(we.flags|=2048,Ca(9,ZT.bind(null,h,s),{destroy:void 0},null)),[n,d,t]}function ZT(t,n){t.action=n}function Jp(t){var n=ft(),s=qe;if(s!==null)return Zp(n,s,t);ft(),n=n.memoizedState,s=ft();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function Ca(t,n,s,l){return t={tag:t,create:n,inst:s,deps:l,next:null},n=we.updateQueue,n===null&&(n=Mu(),we.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function eg(){return ft().memoizedState}function ku(t,n,s,l){var h=nn();we.flags|=t,h.memoizedState=Ca(1|n,s,{destroy:void 0},l===void 0?null:l)}function Pu(t,n,s,l){var h=ft();l=l===void 0?null:l;var d=h.memoizedState.inst;qe!==null&&l!==null&&Kh(l,qe.memoizedState.deps)?h.memoizedState=Ca(n,s,d,l):(we.flags|=t,h.memoizedState=Ca(1|n,s,d,l))}function tg(t,n){ku(8390656,8,t,n)}function nf(t,n){Pu(2048,8,t,n)}function ng(t,n){return Pu(4,2,t,n)}function ig(t,n){return Pu(4,4,t,n)}function rg(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sg(t,n,s){s=s!=null?s.concat([t]):null,Pu(4,4,rg.bind(null,n,t),s)}function rf(){}function ag(t,n){var s=ft();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Kh(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function og(t,n){var s=ft();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Kh(n,l[1]))return l[0];if(l=t(),Ts){Yn(!0);try{t()}finally{Yn(!1)}}return s.memoizedState=[l,n],l}function sf(t,n,s){return s===void 0||(Ar&1073741824)!==0?t.memoizedState=n:(t.memoizedState=s,t=uy(),we.lanes|=t,Mr|=t,s)}function lg(t,n,s,l){return un(s,n)?s:Sa.current!==null?(t=sf(t,s,l),un(t,n)||(It=!0),t):(Ar&42)===0?(It=!0,t.memoizedState=s):(t=uy(),we.lanes|=t,Mr|=t,n)}function ug(t,n,s,l,h){var d=ae.p;ae.p=d!==0&&8>d?d:8;var _=S.T,E={};S.T=E,lf(t,!1,n,s);try{var R=h(),V=S.S;if(V!==null&&V(E,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=YT(R,l);qo(t,n,K,dn(t))}else qo(t,n,l,dn(t))}catch(Z){qo(t,n,{then:function(){},status:"rejected",reason:Z},dn())}finally{ae.p=d,S.T=_}}function JT(){}function af(t,n,s,l){if(t.tag!==5)throw Error(a(476));var h=cg(t).queue;ug(t,h,n,Se,s===null?JT:function(){return hg(t),s(l)})}function cg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Se,baseState:Se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:Se},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hg(t){var n=cg(t).next.queue;qo(t,n,{},dn())}function of(){return Ht(ul)}function fg(){return ft().memoizedState}function dg(){return ft().memoizedState}function eA(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=dn();t=Rr(s);var l=Ir(n,t,s);l!==null&&(Jt(l,n,s),Ko(l,n,s)),n={cache:qh()},t.payload=n;return}n=n.return}}function tA(t,n,s){var l=dn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Lu(t)?pg(n,s):(s=Ph(t,n,s,l),s!==null&&(Jt(s,t,l),gg(s,n,l)))}function mg(t,n,s){var l=dn();qo(t,n,s,l)}function qo(t,n,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Lu(t))pg(n,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var _=n.lastRenderedState,E=d(_,s);if(h.hasEagerState=!0,h.eagerState=E,un(E,_))return Eu(t,n,h,0),Ke===null&&_u(),!1}catch{}finally{}if(s=Ph(t,n,h,l),s!==null)return Jt(s,t,l),gg(s,n,l),!0}return!1}function lf(t,n,s,l){if(l={lane:2,revertLane:Wf(),action:l,hasEagerState:!1,eagerState:null,next:null},Lu(t)){if(n)throw Error(a(479))}else n=Ph(t,s,l,2),n!==null&&Jt(n,t,2)}function Lu(t){var n=t.alternate;return t===we||n!==null&&n===we}function pg(t,n){Ra=Ou=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function gg(t,n,s){if((s&4194176)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ur(t,s)}}var oi={readContext:Ht,use:xu,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt};oi.useCacheRefresh=lt,oi.useMemoCache=lt,oi.useHostTransitionStatus=lt,oi.useFormState=lt,oi.useActionState=lt,oi.useOptimistic=lt;var As={readContext:Ht,use:xu,useCallback:function(t,n){return nn().memoizedState=[t,n===void 0?null:n],t},useContext:Ht,useEffect:tg,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,ku(4194308,4,rg.bind(null,n,t),s)},useLayoutEffect:function(t,n){return ku(4194308,4,t,n)},useInsertionEffect:function(t,n){ku(4,2,t,n)},useMemo:function(t,n){var s=nn();n=n===void 0?null:n;var l=t();if(Ts){Yn(!0);try{t()}finally{Yn(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=nn();if(s!==void 0){var h=s(n);if(Ts){Yn(!0);try{s(n)}finally{Yn(!1)}}}else h=n;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=tA.bind(null,we,t),[l.memoizedState,t]},useRef:function(t){var n=nn();return t={current:t},n.memoizedState=t},useState:function(t){t=ef(t);var n=t.queue,s=mg.bind(null,we,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:rf,useDeferredValue:function(t,n){var s=nn();return sf(s,t,n)},useTransition:function(){var t=ef(!1);return t=ug.bind(null,we,t.queue,!0,!1),nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=we,h=nn();if(Le){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Ke===null)throw Error(a(349));(xe&60)!==0||zp(l,n,s)}h.memoizedState=s;var d={value:s,getSnapshot:n};return h.queue=d,tg(Bp.bind(null,l,d,t),[t]),l.flags|=2048,Ca(9,jp.bind(null,l,d,s,n),{destroy:void 0},null),s},useId:function(){var t=nn(),n=Ke.identifierPrefix;if(Le){var s=Ni,l=Oi;s=(l&~(1<<32-Qt(l)-1)).toString(32)+s,n=":"+n+"R"+s,s=Nu++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=QT++,n=":"+n+"r"+s.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return nn().memoizedState=eA.bind(null,we)}};As.useMemoCache=Wh,As.useHostTransitionStatus=of,As.useFormState=Xp,As.useActionState=Xp,As.useOptimistic=function(t){var n=nn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=lf.bind(null,we,!0,s),s.dispatch=n,[t,n]};var Sr={readContext:Ht,use:xu,useCallback:ag,useContext:Ht,useEffect:nf,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Vu,useRef:eg,useState:function(){return Vu(xi)},useDebugValue:rf,useDeferredValue:function(t,n){var s=ft();return lg(s,qe.memoizedState,t,n)},useTransition:function(){var t=Vu(xi)[0],n=ft().memoizedState;return[typeof t=="boolean"?t:Ho(t),n]},useSyncExternalStore:Up,useId:fg};Sr.useCacheRefresh=dg,Sr.useMemoCache=Wh,Sr.useHostTransitionStatus=of,Sr.useFormState=Wp,Sr.useActionState=Wp,Sr.useOptimistic=function(t,n){var s=ft();return Fp(s,qe,t,n)};var Ss={readContext:Ht,use:xu,useCallback:ag,useContext:Ht,useEffect:nf,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Jh,useRef:eg,useState:function(){return Jh(xi)},useDebugValue:rf,useDeferredValue:function(t,n){var s=ft();return qe===null?sf(s,t,n):lg(s,qe.memoizedState,t,n)},useTransition:function(){var t=Jh(xi)[0],n=ft().memoizedState;return[typeof t=="boolean"?t:Ho(t),n]},useSyncExternalStore:Up,useId:fg};Ss.useCacheRefresh=dg,Ss.useMemoCache=Wh,Ss.useHostTransitionStatus=of,Ss.useFormState=Jp,Ss.useActionState=Jp,Ss.useOptimistic=function(t,n){var s=ft();return qe!==null?Fp(s,qe,t,n):(s.baseState=t,[t,s.queue.dispatch])};function uf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:I({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var cf={isMounted:function(t){return(t=t._reactInternals)?de(t)===t:!1},enqueueSetState:function(t,n,s){t=t._reactInternals;var l=dn(),h=Rr(l);h.payload=n,s!=null&&(h.callback=s),n=Ir(t,h,l),n!==null&&(Jt(n,t,l),Ko(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=dn(),h=Rr(l);h.tag=1,h.payload=n,s!=null&&(h.callback=s),n=Ir(t,h,l),n!==null&&(Jt(n,t,l),Ko(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=dn(),l=Rr(s);l.tag=2,n!=null&&(l.callback=n),n=Ir(t,l,s),n!==null&&(Jt(n,t,s),Ko(n,t,s))}};function yg(t,n,s,l,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):n.prototype&&n.prototype.isPureReactComponent?!Oo(s,l)||!Oo(h,d):!0}function vg(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function bs(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=I({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}var Uu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function _g(t){Uu(t)}function Eg(t){console.error(t)}function Tg(t){Uu(t)}function zu(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Ag(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function hf(t,n,s){return s=Rr(s),s.tag=3,s.payload={element:null},s.callback=function(){zu(t,n)},s}function Sg(t){return t=Rr(t),t.tag=3,t}function bg(t,n,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Ag(n,s,l)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ag(n,s,l),typeof h!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function nA(t,n,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Go(n,s,h,!0),s=Rn.current,s!==null){switch(s.tag){case 13:return ai===null?Kf():s.alternate===null&&it===0&&(it=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===jh?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),Yf(t,l,h)),!1;case 22:return s.flags|=65536,l===jh?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),Yf(t,l,h)),!1}throw Error(a(435,s.tag))}return Yf(t,l,h),Kf(),!1}if(Le)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,l!==zh&&(t=Error(a(422),{cause:l}),Vo(Sn(t,s)))):(l!==zh&&(n=Error(a(423),{cause:l}),Vo(Sn(n,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Sn(l,s),h=hf(t.stateNode,l,h),Rf(t,h),it!==4&&(it=2)),!1;var d=Error(a(520),{cause:l});if(d=Sn(d,s),el===null?el=[d]:el.push(d),it!==4&&(it=2),n===null)return!0;l=Sn(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=hf(s.stateNode,l,t),Rf(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xr===null||!xr.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Sg(h),bg(h,t,s,l),Rf(s,h),!1}s=s.return}while(s!==null);return!1}var wg=Error(a(461)),It=!1;function Vt(t,n,s,l){n.child=t===null?Op(n,null,s,l):_s(n,t.child,s,l)}function Rg(t,n,s,l,h){s=s.render;var d=n.ref;if("ref"in l){var _={};for(var E in l)E!=="ref"&&(_[E]=l[E])}else _=l;return Rs(n),l=$h(t,n,s,_,d,h),E=Yh(),t!==null&&!It?(Qh(t,n,h),Vi(t,n,h)):(Le&&E&&Lh(n),n.flags|=1,Vt(t,n,l,h),n.child)}function Ig(t,n,s,l,h){if(t===null){var d=s.type;return typeof d=="function"&&!Vf(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,Cg(t,n,d,l,h)):(t=Fu(s.type,null,l,n,n.mode,h),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Ef(t,h)){var _=d.memoizedProps;if(s=s.compare,s=s!==null?s:Oo,s(_,l)&&t.ref===n.ref)return Vi(t,n,h)}return n.flags|=1,t=Nr(d,l),t.ref=n.ref,t.return=n,n.child=t}function Cg(t,n,s,l,h){if(t!==null){var d=t.memoizedProps;if(Oo(d,l)&&t.ref===n.ref)if(It=!1,n.pendingProps=l=d,Ef(t,h))(t.flags&131072)!==0&&(It=!0);else return n.lanes=t.lanes,Vi(t,n,h)}return ff(t,n,s,l,h)}function Dg(t,n,s){var l=n.pendingProps,h=l.children,d=(n.stateNode._pendingVisibility&2)!==0,_=t!==null?t.memoizedState:null;if(Fo(t,n),l.mode==="hidden"||d){if((n.flags&128)!==0){if(l=_!==null?_.baseLanes|s:s,t!==null){for(h=n.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;n.childLanes=d&~l}else n.childLanes=0,n.child=null;return Og(t,n,l,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Du(n,_!==null?_.cachePool:null),_!==null?Np(n,_):Bh(),Mp(n);else return n.lanes=n.childLanes=536870912,Og(t,n,_!==null?_.baseLanes|s:s,s)}else _!==null?(Du(n,_.cachePool),Np(n,_),Tr(),n.memoizedState=null):(t!==null&&Du(n,null),Bh(),Tr());return Vt(t,n,h,s),n.child}function Og(t,n,s,l){var h=Gh();return h=h===null?null:{parent:Tt._currentValue,pool:h},n.memoizedState={baseLanes:s,cachePool:h},t!==null&&Du(n,null),Bh(),Mp(n),t!==null&&Go(t,n,l,!0),null}function Fo(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(n.flags|=2097664)}}function ff(t,n,s,l,h){return Rs(n),s=$h(t,n,s,l,void 0,h),l=Yh(),t!==null&&!It?(Qh(t,n,h),Vi(t,n,h)):(Le&&l&&Lh(n),n.flags|=1,Vt(t,n,s,h),n.child)}function Ng(t,n,s,l,h,d){return Rs(n),n.updateQueue=null,s=Lp(n,l,s,h),Pp(t),l=Yh(),t!==null&&!It?(Qh(t,n,d),Vi(t,n,d)):(Le&&l&&Lh(n),n.flags|=1,Vt(t,n,s,d),n.child)}function Mg(t,n,s,l,h){if(Rs(n),n.stateNode===null){var d=_a,_=s.contextType;typeof _=="object"&&_!==null&&(d=Ht(_)),d=new s(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},bf(n),_=s.contextType,d.context=typeof _=="object"&&_!==null?Ht(_):_a,d.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(uf(n,s,_,l),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&cf.enqueueReplaceState(d,d.state,null),Yo(n,l,d,h),$o(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){d=n.stateNode;var E=n.memoizedProps,R=bs(s,E);d.props=R;var V=d.context,K=s.contextType;_=_a,typeof K=="object"&&K!==null&&(_=Ht(K));var Z=s.getDerivedStateFromProps;K=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||V!==_)&&vg(n,d,l,_),wr=!1;var B=n.memoizedState;d.state=B,Yo(n,l,d,h),$o(),V=n.memoizedState,E||B!==V||wr?(typeof Z=="function"&&(uf(n,s,Z,l),V=n.memoizedState),(R=wr||yg(n,s,R,l,B,V,_))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=V),d.props=l,d.state=V,d.context=_,l=R):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,wf(t,n),_=n.memoizedProps,K=bs(s,_),d.props=K,Z=n.pendingProps,B=d.context,V=s.contextType,R=_a,typeof V=="object"&&V!==null&&(R=Ht(V)),E=s.getDerivedStateFromProps,(V=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Z||B!==R)&&vg(n,d,l,R),wr=!1,B=n.memoizedState,d.state=B,Yo(n,l,d,h),$o();var G=n.memoizedState;_!==Z||B!==G||wr||t!==null&&t.dependencies!==null&&ju(t.dependencies)?(typeof E=="function"&&(uf(n,s,E,l),G=n.memoizedState),(K=wr||yg(n,s,K,l,B,G,R)||t!==null&&t.dependencies!==null&&ju(t.dependencies))?(V||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,R)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=G),d.props=l,d.state=G,d.context=R,l=K):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&B===t.memoizedState||(n.flags|=1024),l=!1)}return d=l,Fo(t,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&l?(n.child=_s(n,t.child,null,h),n.child=_s(n,null,s,h)):Vt(t,n,s,h),n.memoizedState=d.state,t=n.child):t=Vi(t,n,h),t}function xg(t,n,s,l){return xo(),n.flags|=256,Vt(t,n,s,l),n.child}var df={dehydrated:null,treeContext:null,retryLane:0};function mf(t){return{baseLanes:t,cachePool:kp()}}function pf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=On),t}function Vg(t,n,s){var l=n.pendingProps,h=!1,d=(n.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(Et.current&2)!==0),_&&(h=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Le){if(h?Er(n):Tr(),Le){var E=xt,R;if(R=E){e:{for(R=E,E=si;R.nodeType!==8;){if(!E){E=null;break e}if(R=zn(R.nextSibling),R===null){E=null;break e}}E=R}E!==null?(n.memoizedState={dehydrated:E,treeContext:gs!==null?{id:Oi,overflow:Ni}:null,retryLane:536870912},R=Dn(18,null,null,0),R.stateNode=E,R.return=n,n.child=R,Zt=n,xt=null,R=!0):R=!1}R||vs(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;Mi(n)}return E=l.children,l=l.fallback,h?(Tr(),h=n.mode,E=yf({mode:"hidden",children:E},h),l=Cs(l,h,s,null),E.return=n,l.return=n,E.sibling=l,n.child=E,h=n.child,h.memoizedState=mf(s),h.childLanes=pf(t,_,s),n.memoizedState=df,l):(Er(n),gf(n,E))}if(R=t.memoizedState,R!==null&&(E=R.dehydrated,E!==null)){if(d)n.flags&256?(Er(n),n.flags&=-257,n=vf(t,n,s)):n.memoizedState!==null?(Tr(),n.child=t.child,n.flags|=128,n=null):(Tr(),h=l.fallback,E=n.mode,l=yf({mode:"visible",children:l.children},E),h=Cs(h,E,s,null),h.flags|=2,l.return=n,h.return=n,l.sibling=h,n.child=l,_s(n,t.child,null,s),l=n.child,l.memoizedState=mf(s),l.childLanes=pf(t,_,s),n.memoizedState=df,n=h);else if(Er(n),E.data==="$!"){if(_=E.nextSibling&&E.nextSibling.dataset,_)var V=_.dgst;_=V,l=Error(a(419)),l.stack="",l.digest=_,Vo({value:l,source:null,stack:null}),n=vf(t,n,s)}else if(It||Go(t,n,s,!1),_=(s&t.childLanes)!==0,It||_){if(_=Ke,_!==null){if(l=s&-s,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(_.suspendedLanes|s))!==0?0:l,l!==0&&l!==R.retryLane)throw R.retryLane=l,_r(t,l),Jt(_,t,l),wg}E.data==="$?"||Kf(),n=vf(t,n,s)}else E.data==="$?"?(n.flags|=128,n.child=t.child,n=yA.bind(null,t),E._reactRetry=n,n=null):(t=R.treeContext,xt=zn(E.nextSibling),Zt=n,Le=!0,Ln=null,si=!1,t!==null&&(bn[wn++]=Oi,bn[wn++]=Ni,bn[wn++]=gs,Oi=t.id,Ni=t.overflow,gs=n),n=gf(n,l.children),n.flags|=4096);return n}return h?(Tr(),h=l.fallback,E=n.mode,R=t.child,V=R.sibling,l=Nr(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&31457280,V!==null?h=Nr(V,h):(h=Cs(h,E,s,null),h.flags|=2),h.return=n,l.return=n,l.sibling=h,n.child=l,l=h,h=n.child,E=t.child.memoizedState,E===null?E=mf(s):(R=E.cachePool,R!==null?(V=Tt._currentValue,R=R.parent!==V?{parent:V,pool:V}:R):R=kp(),E={baseLanes:E.baseLanes|s,cachePool:R}),h.memoizedState=E,h.childLanes=pf(t,_,s),n.memoizedState=df,l):(Er(n),s=t.child,t=s.sibling,s=Nr(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=s,n.memoizedState=null,s)}function gf(t,n){return n=yf({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yf(t,n){return ay(t,n,0,null)}function vf(t,n,s){return _s(n,t.child,null,s),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function kg(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Af(t.return,n,s)}function _f(t,n,s,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=h)}function Pg(t,n,s){var l=n.pendingProps,h=l.revealOrder,d=l.tail;if(Vt(t,n,l.children,s),l=Et.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,s,n);else if(t.tag===19)kg(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Be(Et,l),h){case"forwards":for(s=n.child,h=null;s!==null;)t=s.alternate,t!==null&&Cu(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=n.child,n.child=null):(h=s.sibling,s.sibling=null),_f(n,!1,h,s,d);break;case"backwards":for(s=null,h=n.child,n.child=null;h!==null;){if(t=h.alternate,t!==null&&Cu(t)===null){n.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}_f(n,!0,s,null,d);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Mr|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Go(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,s=Nr(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=Nr(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ju(t)))}function iA(t,n,s){switch(n.tag){case 3:ir(n,n.stateNode.containerInfo),br(n,Tt,t.memoizedState.cache),xo();break;case 27:case 5:lo(n);break;case 4:ir(n,n.stateNode.containerInfo);break;case 10:br(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Er(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Vg(t,n,s):(Er(n),t=Vi(t,n,s),t!==null?t.sibling:null);Er(n);break;case 19:var h=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Go(t,n,s,!1),l=(s&n.childLanes)!==0),h){if(l)return Pg(t,n,s);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Be(Et,Et.current),l)break;return null;case 22:case 23:return n.lanes=0,Dg(t,n,s);case 24:br(n,Tt,t.memoizedState.cache)}return Vi(t,n,s)}function Lg(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)It=!0;else{if(!Ef(t,s)&&(n.flags&128)===0)return It=!1,iA(t,n,s);It=(t.flags&131072)!==0}else It=!1,Le&&(n.flags&1048576)!==0&&Tp(n,Su,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var l=n.elementType,h=l._init;if(l=h(l._payload),n.type=l,typeof l=="function")Vf(l)?(t=bs(l,t),n.tag=1,n=Mg(null,n,l,t,s)):(n.tag=0,n=ff(null,n,l,t,s));else{if(l!=null){if(h=l.$$typeof,h===P){n.tag=11,n=Rg(null,n,l,t,s);break e}else if(h===X){n.tag=14,n=Ig(null,n,l,t,s);break e}}throw n=w(l)||l,Error(a(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,h=bs(l,n.pendingProps),Mg(t,n,l,h,s);case 3:e:{if(ir(n,n.stateNode.containerInfo),t===null)throw Error(a(387));var d=n.pendingProps;h=n.memoizedState,l=h.element,wf(t,n),Yo(n,d,null,s);var _=n.memoizedState;if(d=_.cache,br(n,Tt,d),d!==h.cache&&Sf(n,[Tt],s,!0),$o(),d=_.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=xg(t,n,d,s);break e}else if(d!==l){l=Sn(Error(a(424)),n),Vo(l),n=xg(t,n,d,s);break e}else for(xt=zn(n.stateNode.containerInfo.firstChild),Zt=n,Le=!0,Ln=null,si=!0,s=Op(n,null,d,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(xo(),d===l){n=Vi(t,n,s);break e}Vt(t,n,d,s)}n=n.child}return n;case 26:return Fo(t,n),t===null?(s=jy(n.type,null,n.pendingProps,null))?n.memoizedState=s:Le||(s=n.type,t=n.pendingProps,l=nc(pn.current).createElement(s),l[bt]=n,l[yt]=t,kt(l,s,t),We(l),n.stateNode=l):n.memoizedState=jy(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return lo(n),t===null&&Le&&(l=n.stateNode=Ly(n.type,n.pendingProps,pn.current),Zt=n,si=!0,xt=zn(l.firstChild)),l=n.pendingProps.children,t!==null||Le?Vt(t,n,l,s):n.child=_s(n,null,l,s),Fo(t,n),n.child;case 5:return t===null&&Le&&((h=l=xt)&&(l=xA(l,n.type,n.pendingProps,si),l!==null?(n.stateNode=l,Zt=n,xt=zn(l.firstChild),si=!1,h=!0):h=!1),h||vs(n)),lo(n),h=n.type,d=n.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,ad(h,d)?l=null:_!==null&&ad(h,_)&&(n.flags|=32),n.memoizedState!==null&&(h=$h(t,n,XT,null,null,s),ul._currentValue=h),Fo(t,n),Vt(t,n,l,s),n.child;case 6:return t===null&&Le&&((t=s=xt)&&(s=VA(s,n.pendingProps,si),s!==null?(n.stateNode=s,Zt=n,xt=null,t=!0):t=!1),t||vs(n)),null;case 13:return Vg(t,n,s);case 4:return ir(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=_s(n,null,l,s):Vt(t,n,l,s),n.child;case 11:return Rg(t,n,n.type,n.pendingProps,s);case 7:return Vt(t,n,n.pendingProps,s),n.child;case 8:return Vt(t,n,n.pendingProps.children,s),n.child;case 12:return Vt(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,br(n,n.type,l.value),Vt(t,n,l.children,s),n.child;case 9:return h=n.type._context,l=n.pendingProps.children,Rs(n),h=Ht(h),l=l(h),n.flags|=1,Vt(t,n,l,s),n.child;case 14:return Ig(t,n,n.type,n.pendingProps,s);case 15:return Cg(t,n,n.type,n.pendingProps,s);case 19:return Pg(t,n,s);case 22:return Dg(t,n,s);case 24:return Rs(n),l=Ht(Tt),t===null?(h=Gh(),h===null&&(h=Ke,d=qh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),n.memoizedState={parent:l,cache:h},bf(n),br(n,Tt,h)):((t.lanes&s)!==0&&(wf(t,n),Yo(n,null,null,s),$o()),h=t.memoizedState,d=n.memoizedState,h.parent!==l?(h={parent:l,cache:l},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),br(n,Tt,l)):(l=d.cache,br(n,Tt,l),l!==h.cache&&Sf(n,[Tt],s,!0))),Vt(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}var Tf=ke(null),ws=null,ki=null;function br(t,n,s){Be(Tf,n._currentValue),n._currentValue=s}function Pi(t){t._currentValue=Tf.current,et(Tf)}function Af(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function Sf(t,n,s,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=h;for(var R=0;R<n.length;R++)if(E.context===n[R]){d.lanes|=s,E=d.alternate,E!==null&&(E.lanes|=s),Af(d.return,s,t),l||(_=null);break e}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(a(341));_.lanes|=s,d=_.alternate,d!==null&&(d.lanes|=s),Af(_,s,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Go(t,n,s,l){t=null;for(var h=n,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var E=h.type;un(h.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(h===nr.current){if(_=h.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}h=h.return}t!==null&&Sf(n,t,s,l),n.flags|=262144}function ju(t){for(t=t.firstContext;t!==null;){if(!un(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rs(t){ws=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return Ug(ws,t)}function Bu(t,n){return ws===null&&Rs(t),Ug(t,n)}function Ug(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},ki===null){if(t===null)throw Error(a(308));ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ki=ki.next=n;return s}var wr=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Rr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ir(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Je&2)!==0){var h=l.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),l.pending=n,n=Tu(t),_p(t,null,s),n}return Eu(t,l,n,s),Tu(t)}function Ko(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194176)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,ur(t,s)}}function Rf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,s=s.next}while(s!==null);d===null?h=d=n:d=d.next=n}else h=d=n;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var If=!1;function $o(){if(If){var t=wa;if(t!==null)throw t}}function Yo(t,n,s,l){If=!1;var h=t.updateQueue;wr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var R=E,V=R.next;R.next=null,_===null?d=V:_.next=V,_=R;var K=t.alternate;K!==null&&(K=K.updateQueue,E=K.lastBaseUpdate,E!==_&&(E===null?K.firstBaseUpdate=V:E.next=V,K.lastBaseUpdate=R))}if(d!==null){var Z=h.baseState;_=0,K=V=R=null,E=d;do{var B=E.lane&-536870913,G=B!==E.lane;if(G?(xe&B)===B:(l&B)===B){B!==0&&B===ba&&(If=!0),K!==null&&(K=K.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ue=t,_e=E;B=n;var rt=s;switch(_e.tag){case 1:if(ue=_e.payload,typeof ue=="function"){Z=ue.call(rt,Z,B);break e}Z=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=_e.payload,B=typeof ue=="function"?ue.call(rt,Z,B):ue,B==null)break e;Z=I({},Z,B);break e;case 2:wr=!0}}B=E.callback,B!==null&&(t.flags|=64,G&&(t.flags|=8192),G=h.callbacks,G===null?h.callbacks=[B]:G.push(B))}else G={lane:B,tag:E.tag,payload:E.payload,callback:E.callback,next:null},K===null?(V=K=G,R=Z):K=K.next=G,_|=B;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;G=E,E=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);K===null&&(R=Z),h.baseState=R,h.firstBaseUpdate=V,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),Mr|=_,t.lanes=_,t.memoizedState=Z}}function zg(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function jg(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)zg(s[t],n)}function Qo(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&t)===t){l=void 0;var d=s.create,_=s.inst;l=d(),_.destroy=l}s=s.next}while(s!==h)}}catch(E){Ge(n,n.return,E)}}function Cr(t,n,s){try{var l=n.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var _=l.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=n;var R=s;try{E()}catch(V){Ge(h,R,V)}}}l=l.next}while(l!==d)}}catch(V){Ge(n,n.return,V)}}function Bg(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{jg(n,s)}catch(l){Ge(t,t.return,l)}}}function Hg(t,n,s){s.props=bs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Ge(t,n,l)}}function Is(t,n){try{var s=t.ref;if(s!==null){var l=t.stateNode;switch(t.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof s=="function"?t.refCleanup=s(h):s.current=h}}catch(d){Ge(t,n,d)}}function cn(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){Ge(t,n,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ge(t,n,h)}else s.current=null}function qg(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){Ge(t,t.return,h)}}function Fg(t,n,s){try{var l=t.stateNode;CA(l,t.type,s,n),l[yt]=n}catch(h){Ge(t,t.return,h)}}function Gg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(t,n):s.insertBefore(t,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(t,s)):(n=s,n.appendChild(t)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=tc));else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Df(t,n,s),t=t.sibling;t!==null;)Df(t,n,s),t=t.sibling}function Hu(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Hu(t,n,s),t=t.sibling;t!==null;)Hu(t,n,s),t=t.sibling}var Li=!1,nt=!1,Of=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,Ct=null,$g=!1;function rA(t,n){if(t=t.containerInfo,rd=lc,t=cp(t),Nh(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var _=0,E=-1,R=-1,V=0,K=0,Z=t,B=null;t:for(;;){for(var G;Z!==s||h!==0&&Z.nodeType!==3||(E=_+h),Z!==d||l!==0&&Z.nodeType!==3||(R=_+l),Z.nodeType===3&&(_+=Z.nodeValue.length),(G=Z.firstChild)!==null;)B=Z,Z=G;for(;;){if(Z===t)break t;if(B===s&&++V===h&&(E=_),B===d&&++K===l&&(R=_),(G=Z.nextSibling)!==null)break;Z=B,B=Z.parentNode}Z=G}s=E===-1||R===-1?null:{start:E,end:R}}else s=null}s=s||{start:0,end:0}}else s=null;for(sd={focusedElem:t,selectionRange:s},lc=!1,Ct=n;Ct!==null;)if(n=Ct,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Ct=t;else for(;Ct!==null;){switch(n=Ct,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,h=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var ue=bs(s.type,h,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(ue,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(_e){Ge(s,s.return,_e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)ud(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Ct=t;break}Ct=n.return}return ue=$g,$g=!1,ue}function Yg(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:zi(t,s),l&4&&Qo(5,s);break;case 1:if(zi(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(E){Ge(s,s.return,E)}else{var h=bs(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(h,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Ge(s,s.return,E)}}l&64&&Bg(s),l&512&&Is(s,s.return);break;case 3:if(zi(t,s),l&64&&(l=s.updateQueue,l!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{jg(l,t)}catch(E){Ge(s,s.return,E)}}break;case 26:zi(t,s),l&512&&Is(s,s.return);break;case 27:case 5:zi(t,s),n===null&&l&4&&qg(s),l&512&&Is(s,s.return);break;case 12:zi(t,s);break;case 13:zi(t,s),l&4&&Wg(t,s);break;case 22:if(h=s.memoizedState!==null||Li,!h){n=n!==null&&n.memoizedState!==null||nt;var d=Li,_=nt;Li=h,(nt=n)&&!_?Dr(t,s,(s.subtreeFlags&8772)!==0):zi(t,s),Li=d,nt=_}l&512&&(s.memoizedProps.mode==="manual"?Is(s,s.return):cn(s,s.return));break;default:zi(t,s)}}function Qg(t){var n=t.alternate;n!==null&&(t.alternate=null,Qg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&is(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dt=null,hn=!1;function Ui(t,n,s){for(s=s.child;s!==null;)Xg(t,n,s),s=s.sibling}function Xg(t,n,s){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(rr,s)}catch{}switch(s.tag){case 26:nt||cn(s,n),Ui(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:nt||cn(s,n);var l=dt,h=hn;for(dt=s.stateNode,Ui(t,n,s),s=s.stateNode,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);is(s),dt=l,hn=h;break;case 5:nt||cn(s,n);case 6:h=dt;var d=hn;if(dt=null,Ui(t,n,s),dt=h,hn=d,dt!==null)if(hn)try{t=dt,l=s.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)}catch(_){Ge(s,n,_)}else try{dt.removeChild(s.stateNode)}catch(_){Ge(s,n,_)}break;case 18:dt!==null&&(hn?(n=dt,s=s.stateNode,n.nodeType===8?ld(n.parentNode,s):n.nodeType===1&&ld(n,s),dl(n)):ld(dt,s.stateNode));break;case 4:l=dt,h=hn,dt=s.stateNode.containerInfo,hn=!0,Ui(t,n,s),dt=l,hn=h;break;case 0:case 11:case 14:case 15:nt||Cr(2,s,n),nt||Cr(4,s,n),Ui(t,n,s);break;case 1:nt||(cn(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Hg(s,n,l)),Ui(t,n,s);break;case 21:Ui(t,n,s);break;case 22:nt||cn(s,n),nt=(l=nt)||s.memoizedState!==null,Ui(t,n,s),nt=l;break;default:Ui(t,n,s)}}function Wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{dl(t)}catch(s){Ge(n,n.return,s)}}function sA(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Kg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Kg),n;default:throw Error(a(435,t.tag))}}function Nf(t,n){var s=sA(t);n.forEach(function(l){var h=vA.bind(null,t,l);s.has(l)||(s.add(l),l.then(h,h))})}function In(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],d=t,_=n,E=_;e:for(;E!==null;){switch(E.tag){case 27:case 5:dt=E.stateNode,hn=!1;break e;case 3:dt=E.stateNode.containerInfo,hn=!0;break e;case 4:dt=E.stateNode.containerInfo,hn=!0;break e}E=E.return}if(dt===null)throw Error(a(160));Xg(d,_,h),dt=null,hn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Zg(n,t),n=n.sibling}var Un=null;function Zg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Cn(t),l&4&&(Cr(3,t,t.return),Qo(3,t),Cr(5,t,t.return));break;case 1:In(n,t),Cn(t),l&512&&(nt||s===null||cn(s,s.return)),l&64&&Li&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=Un;if(In(n,t),Cn(t),l&512&&(nt||s===null||cn(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[hr]||d[bt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),kt(d,l,s),d[bt]=t,We(d),l=d;break e;case"link":var _=qy("link","href",h).get(l+(s.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(s.href==null?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(E,1);break t}}d=h.createElement(l),kt(d,l,s),h.head.appendChild(d);break;case"meta":if(_=qy("meta","content",h).get(l+(s.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(E,1);break t}}d=h.createElement(l),kt(d,l,s),h.head.appendChild(d);break;default:throw Error(a(468,l))}d[bt]=t,We(d),l=d}t.stateNode=l}else Fy(h,t.type,t.stateNode);else t.stateNode=Hy(h,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Fy(h,t.type,t.stateNode):Hy(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Fg(t,t.memoizedProps,s.memoizedProps)}break;case 27:if(l&4&&t.alternate===null){h=t.stateNode,d=t.memoizedProps;try{for(var R=h.firstChild;R;){var V=R.nextSibling,K=R.nodeName;R[hr]||K==="HEAD"||K==="BODY"||K==="SCRIPT"||K==="STYLE"||K==="LINK"&&R.rel.toLowerCase()==="stylesheet"||h.removeChild(R),R=V}for(var Z=t.type,B=h.attributes;B.length;)h.removeAttributeNode(B[0]);kt(h,Z,d),h[bt]=t,h[yt]=d}catch(ue){Ge(t,t.return,ue)}}case 5:if(In(n,t),Cn(t),l&512&&(nt||s===null||cn(s,s.return)),t.flags&32){h=t.stateNode;try{vn(h,"")}catch(ue){Ge(t,t.return,ue)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Fg(t,h,s!==null?s.memoizedProps:h)),l&1024&&(Of=!0);break;case 6:if(In(n,t),Cn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ue){Ge(t,t.return,ue)}}break;case 3:if(sc=null,h=Un,Un=ic(n.containerInfo),In(n,t),Un=h,Cn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{dl(n.containerInfo)}catch(ue){Ge(t,t.return,ue)}Of&&(Of=!1,Jg(t));break;case 4:l=Un,Un=ic(t.stateNode.containerInfo),In(n,t),Cn(t),Un=l;break;case 12:In(n,t),Cn(t);break;case 13:In(n,t),Cn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(jf=en()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nf(t,l)));break;case 22:if(l&512&&(nt||s===null||cn(s,s.return)),R=t.memoizedState!==null,V=s!==null&&s.memoizedState!==null,K=Li,Z=nt,Li=K||R,nt=Z||V,In(n,t),nt=Z,Li=K,Cn(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,l&8192&&(n._visibility=R?n._visibility&-2:n._visibility|1,R&&(n=Li||nt,s===null||V||n||Da(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(s=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(s===null){V=s=n;try{if(h=V.stateNode,R)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=V.stateNode,E=V.memoizedProps.style;var G=E!=null&&E.hasOwnProperty("display")?E.display:null;_.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(ue){Ge(V,V.return,ue)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=R?"":V.memoizedProps}catch(ue){Ge(V,V.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Nf(t,s))));break;case 19:In(n,t),Cn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Nf(t,l)));break;case 21:break;default:In(n,t),Cn(t)}}function Cn(t){var n=t.flags;if(n&2){try{if(t.tag!==27){e:{for(var s=t.return;s!==null;){if(Gg(s)){var l=s;break e}s=s.return}throw Error(a(160))}switch(l.tag){case 27:var h=l.stateNode,d=Cf(t);Hu(t,d,h);break;case 5:var _=l.stateNode;l.flags&32&&(vn(_,""),l.flags&=-33);var E=Cf(t);Hu(t,E,_);break;case 3:case 4:var R=l.stateNode.containerInfo,V=Cf(t);Df(t,V,R);break;default:throw Error(a(161))}}}catch(K){Ge(t,t.return,K)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Jg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Jg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yg(t,n.alternate,n),n=n.sibling}function Da(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Cr(4,n,n.return),Da(n);break;case 1:cn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Hg(n,n.return,s),Da(n);break;case 26:case 27:case 5:cn(n,n.return),Da(n);break;case 22:cn(n,n.return),n.memoizedState===null&&Da(n);break;default:Da(n)}t=t.sibling}}function Dr(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,h=t,d=n,_=d.flags;switch(d.tag){case 0:case 11:case 15:Dr(h,d,s),Qo(4,d);break;case 1:if(Dr(h,d,s),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(V){Ge(l,l.return,V)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)zg(R[h],E)}catch(V){Ge(l,l.return,V)}}s&&_&64&&Bg(d),Is(d,d.return);break;case 26:case 27:case 5:Dr(h,d,s),s&&l===null&&_&4&&qg(d),Is(d,d.return);break;case 12:Dr(h,d,s);break;case 13:Dr(h,d,s),s&&_&4&&Wg(h,d);break;case 22:d.memoizedState===null&&Dr(h,d,s),Is(d,d.return);break;default:Dr(h,d,s)}n=n.sibling}}function Mf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&zo(s))}function xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zo(t))}function Or(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ey(t,n,s,l),n=n.sibling}function ey(t,n,s,l){var h=n.flags;switch(n.tag){case 0:case 11:case 15:Or(t,n,s,l),h&2048&&Qo(9,n);break;case 3:Or(t,n,s,l),h&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zo(t)));break;case 12:if(h&2048){Or(t,n,s,l),t=n.stateNode;try{var d=n.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(R){Ge(n,n.return,R)}}else Or(t,n,s,l);break;case 23:break;case 22:d=n.stateNode,n.memoizedState!==null?d._visibility&4?Or(t,n,s,l):Xo(t,n):d._visibility&4?Or(t,n,s,l):(d._visibility|=4,Oa(t,n,s,l,(n.subtreeFlags&10256)!==0)),h&2048&&Mf(n.alternate,n);break;case 24:Or(t,n,s,l),h&2048&&xf(n.alternate,n);break;default:Or(t,n,s,l)}}function Oa(t,n,s,l,h){for(h=h&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,_=n,E=s,R=l,V=_.flags;switch(_.tag){case 0:case 11:case 15:Oa(d,_,E,R,h),Qo(8,_);break;case 23:break;case 22:var K=_.stateNode;_.memoizedState!==null?K._visibility&4?Oa(d,_,E,R,h):Xo(d,_):(K._visibility|=4,Oa(d,_,E,R,h)),h&&V&2048&&Mf(_.alternate,_);break;case 24:Oa(d,_,E,R,h),h&&V&2048&&xf(_.alternate,_);break;default:Oa(d,_,E,R,h)}n=n.sibling}}function Xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,h=l.flags;switch(l.tag){case 22:Xo(s,l),h&2048&&Mf(l.alternate,l);break;case 24:Xo(s,l),h&2048&&xf(l.alternate,l);break;default:Xo(s,l)}n=n.sibling}}var Wo=8192;function Na(t){if(t.subtreeFlags&Wo)for(t=t.child;t!==null;)ty(t),t=t.sibling}function ty(t){switch(t.tag){case 26:Na(t),t.flags&Wo&&t.memoizedState!==null&&$A(Un,t.memoizedState,t.memoizedProps);break;case 5:Na(t);break;case 3:case 4:var n=Un;Un=ic(t.stateNode.containerInfo),Na(t),Un=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Wo,Wo=16777216,Na(t),Wo=n):Na(t));break;default:Na(t)}}function ny(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ct=l,ry(l,t)}ny(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)iy(t),t=t.sibling}function iy(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&Cr(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,qu(t)):Zo(t);break;default:Zo(t)}}function qu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Ct=l,ry(l,t)}ny(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Cr(8,n,n.return),qu(n);break;case 22:s=n.stateNode,s._visibility&4&&(s._visibility&=-5,qu(n));break;default:qu(n)}t=t.sibling}}function ry(t,n){for(;Ct!==null;){var s=Ct;switch(s.tag){case 0:case 11:case 15:Cr(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ct=l;else e:for(s=t;Ct!==null;){l=Ct;var h=l.sibling,d=l.return;if(Qg(l),l===s){Ct=null;break e}if(h!==null){h.return=d,Ct=h;break e}Ct=d}}}function aA(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,n,s,l){return new aA(t,n,s,l)}function Vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nr(t,n){var s=t.alternate;return s===null?(s=Dn(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&31457280,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function sy(t,n){t.flags&=31457282;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Fu(t,n,s,l,h,d){var _=0;if(l=t,typeof t=="function")Vf(t)&&(_=1);else if(typeof t=="string")_=GA(t,s,Yt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case g:return Cs(s.children,h,d,n);case y:_=8,h|=24;break;case A:return t=Dn(12,s,n,h|2),t.elementType=A,t.lanes=d,t;case Y:return t=Dn(13,s,n,h),t.elementType=Y,t.lanes=d,t;case F:return t=Dn(19,s,n,h),t.elementType=F,t.lanes=d,t;case te:return ay(s,h,d,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:case j:_=10;break e;case D:_=9;break e;case P:_=11;break e;case X:_=14;break e;case ie:_=16,l=null;break e}_=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return n=Dn(_,s,n,h),n.elementType=t,n.type=l,n.lanes=d,n}function Cs(t,n,s,l){return t=Dn(7,t,l,n),t.lanes=s,t}function ay(t,n,s,l){t=Dn(22,t,l,n),t.elementType=te,t.lanes=s;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(a(456));if((h._pendingVisibility&2)===0){var _=_r(d,2);_!==null&&(h._pendingVisibility|=2,Jt(_,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(a(456));if((h._pendingVisibility&2)!==0){var _=_r(d,2);_!==null&&(h._pendingVisibility&=-3,Jt(_,d,2))}}};return t.stateNode=h,t}function kf(t,n,s){return t=Dn(6,t,null,n),t.lanes=s,t}function Pf(t,n,s){return n=Dn(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function ji(t){t.flags|=4}function oy(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Gy(n)){if(n=Rn.current,n!==null&&((xe&4194176)===xe?ai!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==ai))throw Po=jh,bp;t.flags|=8192}}function Gu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?or():536870912,t.lanes|=n,xa|=n)}function Jo(t,n){if(!Le)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function oA(t,n,s){var l=n.pendingProps;switch(Uh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Pi(Tt),_i(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Mo(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ln!==null&&(Ff(Ln),Ln=null))),Ze(n),null;case 26:return s=n.memoizedState,t===null?(ji(n),s!==null?(Ze(n),oy(n,s)):(Ze(n),n.flags&=-16777217)):s?s!==t.memoizedState?(ji(n),Ze(n),oy(n,s)):(Ze(n),n.flags&=-16777217):(t.memoizedProps!==l&&ji(n),Ze(n),n.flags&=-16777217),null;case 27:Zs(n),s=pn.current;var h=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==l&&ji(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Ze(n),null}t=Yt.current,Mo(n)?Ap(n):(t=Ly(h,l,s),n.stateNode=t,ji(n))}return Ze(n),null;case 5:if(Zs(n),s=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&ji(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Ze(n),null}if(t=Yt.current,Mo(n))Ap(n);else{switch(h=nc(pn.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}t[bt]=n,t[yt]=l;e:for(h=n.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}n.stateNode=t;e:switch(kt(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ji(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&ji(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(t=pn.current,Mo(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,h=Zt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[bt]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Ny(t.nodeValue,s)),t||vs(n)}else t=nc(t).createTextNode(l),t[bt]=n,n.stateNode=t}return Ze(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Mo(n),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[bt]=n}else xo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),h=!1}else Ln!==null&&(Ff(Ln),Ln=null),h=!0;if(!h)return n.flags&256?(Mi(n),n):(Mi(n),null)}if(Mi(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=n.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return s!==t&&s&&(n.child.flags|=8192),Gu(n,n.updateQueue),Ze(n),null;case 4:return _i(),t===null&&td(n.stateNode.containerInfo),Ze(n),null;case 10:return Pi(n.type),Ze(n),null;case 19:if(et(Et),h=n.memoizedState,h===null)return Ze(n),null;if(l=(n.flags&128)!==0,d=h.rendering,d===null)if(l)Jo(h,!1);else{if(it!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Cu(t),d!==null){for(n.flags|=128,Jo(h,!1),t=d.updateQueue,n.updateQueue=t,Gu(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)sy(s,t),s=s.sibling;return Be(Et,Et.current&1|2),n.child}t=t.sibling}h.tail!==null&&en()>Ku&&(n.flags|=128,l=!0,Jo(h,!1),n.lanes=4194304)}else{if(!l)if(t=Cu(d),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,Gu(n,t),Jo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Le)return Ze(n),null}else 2*en()-h.renderingStartTime>Ku&&s!==536870912&&(n.flags|=128,l=!0,Jo(h,!1),n.lanes=4194304);h.isBackwards?(d.sibling=n.child,n.child=d):(t=h.last,t!==null?t.sibling=d:n.child=d,h.last=d)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=en(),n.sibling=null,t=Et.current,Be(Et,l?t&1|2:t&1),n):(Ze(n),null);case 22:case 23:return Mi(n),Hh(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),s=n.updateQueue,s!==null&&Gu(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&et(Es),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Pi(Tt),Ze(n),null;case 25:return null}throw Error(a(156,n.tag))}function lA(t,n){switch(Uh(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pi(Tt),_i(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Zs(n),null;case 13:if(Mi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));xo()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(Et),null;case 4:return _i(),null;case 10:return Pi(n.type),null;case 22:case 23:return Mi(n),Hh(),t!==null&&et(Es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pi(Tt),null;case 25:return null;default:return null}}function ly(t,n){switch(Uh(n),n.tag){case 3:Pi(Tt),_i();break;case 26:case 27:case 5:Zs(n);break;case 4:_i();break;case 13:Mi(n);break;case 19:et(Et);break;case 10:Pi(n.type);break;case 22:case 23:Mi(n),Hh(),t!==null&&et(Es);break;case 24:Pi(Tt)}}var uA={getCacheForType:function(t){var n=Ht(Tt),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s}},cA=typeof WeakMap=="function"?WeakMap:Map,Je=0,Ke=null,Ie=null,xe=0,$e=0,fn=null,Bi=!1,Ma=!1,Lf=!1,Hi=0,it=0,Mr=0,Ds=0,Uf=0,On=0,xa=0,el=null,li=null,zf=!1,jf=0,Ku=1/0,$u=null,xr=null,Yu=!1,Os=null,tl=0,Bf=0,Hf=null,nl=0,qf=null;function dn(){if((Je&2)!==0&&xe!==0)return xe&-xe;if(S.T!==null){var t=ba;return t!==0?t:Wf()}return eu()}function uy(){On===0&&(On=(xe&536870912)===0||Le?mo():536870912);var t=Rn.current;return t!==null&&(t.flags|=32),On}function Jt(t,n,s){(t===Ke&&$e===2||t.cancelPendingCommit!==null)&&(Va(t,0),qi(t,xe,On,!1)),ot(t,s),((Je&2)===0||t!==Ke)&&(t===Ke&&((Je&2)===0&&(Ds|=s),it===4&&qi(t,xe,On,!1)),ui(t))}function cy(t,n,s){if((Je&6)!==0)throw Error(a(327));var l=!s&&(n&60)===0&&(n&t.expiredLanes)===0||ar(t,n),h=l?dA(t,n):$f(t,n,!0),d=l;do{if(h===0){Ma&&!l&&qi(t,n,0,!1);break}else if(h===6)qi(t,n,0,!Bi);else{if(s=t.current.alternate,d&&!hA(s)){h=$f(t,n,!1),d=!1;continue}if(h===2){if(d=n,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var E=t;h=el;var R=E.current.memoizedState.isDehydrated;if(R&&(Va(E,_).flags|=256),_=$f(E,_,!1),_!==2){if(Lf&&!R){E.errorRecoveryDisabledLanes|=d,Ds|=d,h=4;break e}d=li,li=h,d!==null&&Ff(d)}h=_}if(d=!1,h!==2)continue}}if(h===1){Va(t,0),qi(t,n,0,!0);break}e:{switch(l=t,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194176)===n){qi(l,n,On,!Bi);break e}break;case 2:li=null;break;case 3:case 5:break;default:throw Error(a(329))}if(l.finishedWork=s,l.finishedLanes=n,(n&62914560)===n&&(d=jf+300-en(),10<d)){if(qi(l,n,On,!Bi),gn(l,0)!==0)break e;l.timeoutHandle=Vy(hy.bind(null,l,s,li,$u,zf,n,On,Ds,xa,Bi,2,-0,0),d);break e}hy(l,s,li,$u,zf,n,On,Ds,xa,Bi,0,-0,0)}}break}while(!0);ui(t)}function Ff(t){li===null?li=t:li.push.apply(li,t)}function hy(t,n,s,l,h,d,_,E,R,V,K,Z,B){var G=n.subtreeFlags;if((G&8192||(G&16785408)===16785408)&&(ll={stylesheets:null,count:0,unsuspend:KA},ty(n),n=YA(),n!==null)){t.cancelPendingCommit=n(vy.bind(null,t,s,l,h,_,E,R,1,Z,B)),qi(t,d,_,!V);return}vy(t,s,l,h,_,E,R,K,Z,B)}function hA(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],d=h.getSnapshot;h=h.value;try{if(!un(d(),h))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qi(t,n,s,l){n&=~Uf,n&=~Ds,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var h=n;0<h;){var d=31-Qt(h),_=1<<d;l[d]=-1,h&=~_}s!==0&&lr(t,s,n)}function Qu(){return(Je&6)===0?(il(0),!1):!0}function Gf(){if(Ie!==null){if($e===0)var t=Ie.return;else t=Ie,ki=ws=null,Xh(t),Aa=null,Lo=0,t=Ie;for(;t!==null;)ly(t.alternate,t),t=t.return;Ie=null}}function Va(t,n){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,OA(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Gf(),Ke=t,Ie=s=Nr(t.current,null),xe=n,$e=0,fn=null,Bi=!1,Ma=ar(t,n),Lf=!1,xa=On=Uf=Ds=Mr=it=0,li=el=null,zf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var h=31-Qt(l),d=1<<h;n|=t[h],l&=~d}return Hi=n,_u(),s}function fy(t,n){we=null,S.H=oi,n===ko?(n=Ip(),$e=3):n===bp?(n=Ip(),$e=4):$e=n===wg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fn=n,Ie===null&&(it=1,zu(t,Sn(n,t.current)))}function dy(){var t=S.H;return S.H=oi,t===null?oi:t}function my(){var t=S.A;return S.A=uA,t}function Kf(){it=4,Bi||(xe&4194176)!==xe&&Rn.current!==null||(Ma=!0),(Mr&134217727)===0&&(Ds&134217727)===0||Ke===null||qi(Ke,xe,On,!1)}function $f(t,n,s){var l=Je;Je|=2;var h=dy(),d=my();(Ke!==t||xe!==n)&&($u=null,Va(t,n)),n=!1;var _=it;e:do try{if($e!==0&&Ie!==null){var E=Ie,R=fn;switch($e){case 8:Gf(),_=6;break e;case 3:case 2:case 6:Rn.current===null&&(n=!0);var V=$e;if($e=0,fn=null,ka(t,E,R,V),s&&Ma){_=0;break e}break;default:V=$e,$e=0,fn=null,ka(t,E,R,V)}}fA(),_=it;break}catch(K){fy(t,K)}while(!0);return n&&t.shellSuspendCounter++,ki=ws=null,Je=l,S.H=h,S.A=d,Ie===null&&(Ke=null,xe=0,_u()),_}function fA(){for(;Ie!==null;)py(Ie)}function dA(t,n){var s=Je;Je|=2;var l=dy(),h=my();Ke!==t||xe!==n?($u=null,Ku=en()+500,Va(t,n)):Ma=ar(t,n);e:do try{if($e!==0&&Ie!==null){n=Ie;var d=fn;t:switch($e){case 1:$e=0,fn=null,ka(t,n,d,1);break;case 2:if(wp(d)){$e=0,fn=null,gy(n);break}n=function(){$e===2&&Ke===t&&($e=7),ui(t)},d.then(n,n);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:wp(d)?($e=0,fn=null,gy(n)):($e=0,fn=null,ka(t,n,d,7));break;case 5:var _=null;switch(Ie.tag){case 26:_=Ie.memoizedState;case 5:case 27:var E=Ie;if(!_||Gy(_)){$e=0,fn=null;var R=E.sibling;if(R!==null)Ie=R;else{var V=E.return;V!==null?(Ie=V,Xu(V)):Ie=null}break t}}$e=0,fn=null,ka(t,n,d,5);break;case 6:$e=0,fn=null,ka(t,n,d,6);break;case 8:Gf(),it=6;break e;default:throw Error(a(462))}}mA();break}catch(K){fy(t,K)}while(!0);return ki=ws=null,S.H=l,S.A=h,Je=s,Ie!==null?0:(Ke=null,xe=0,_u(),it)}function mA(){for(;Ie!==null&&!Eh();)py(Ie)}function py(t){var n=Lg(t.alternate,t,Hi);t.memoizedProps=t.pendingProps,n===null?Xu(t):Ie=n}function gy(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=Ng(s,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Ng(s,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Xh(n);default:ly(s,n),n=Ie=sy(n,Hi),n=Lg(s,n,Hi)}t.memoizedProps=t.pendingProps,n===null?Xu(t):Ie=n}function ka(t,n,s,l){ki=ws=null,Xh(n),Aa=null,Lo=0;var h=n.return;try{if(nA(t,h,n,s,xe)){it=1,zu(t,Sn(s,t.current)),Ie=null;return}}catch(d){if(h!==null)throw Ie=h,d;it=1,zu(t,Sn(s,t.current)),Ie=null;return}n.flags&32768?(Le||l===1?t=!0:Ma||(xe&536870912)!==0?t=!1:(Bi=t=!0,(l===2||l===3||l===6)&&(l=Rn.current,l!==null&&l.tag===13&&(l.flags|=16384))),yy(n,t)):Xu(n)}function Xu(t){var n=t;do{if((n.flags&32768)!==0){yy(n,Bi);return}t=n.return;var s=oA(n.alternate,n,Hi);if(s!==null){Ie=s;return}if(n=n.sibling,n!==null){Ie=n;return}Ie=n=t}while(n!==null);it===0&&(it=5)}function yy(t,n){do{var s=lA(t.alternate,t);if(s!==null){s.flags&=32767,Ie=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Ie=t;return}Ie=t=s}while(t!==null);it=6,Ie=null}function vy(t,n,s,l,h,d,_,E,R,V){var K=S.T,Z=ae.p;try{ae.p=2,S.T=null,pA(t,n,s,l,Z,h,d,_,E,R,V)}finally{S.T=K,ae.p=Z}}function pA(t,n,s,l,h,d,_,E){do Pa();while(Os!==null);if((Je&6)!==0)throw Error(a(327));var R=t.finishedWork;if(l=t.finishedLanes,R===null)return null;if(t.finishedWork=null,t.finishedLanes=0,R===t.current)throw Error(a(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var V=R.lanes|R.childLanes;if(V|=kh,Zl(t,l,V,d,_,E),t===Ke&&(Ie=Ke=null,xe=0),(R.subtreeFlags&10256)===0&&(R.flags&10256)===0||Yu||(Yu=!0,Bf=V,Hf=s,_A(Ei,function(){return Pa(),null})),s=(R.flags&15990)!==0,(R.subtreeFlags&15990)!==0||s?(s=S.T,S.T=null,d=ae.p,ae.p=2,_=Je,Je|=4,rA(t,R),Zg(R,t),zT(sd,t.containerInfo),lc=!!rd,sd=rd=null,t.current=R,Yg(t,R.alternate,R),uo(),Je=_,ae.p=d,S.T=s):t.current=R,Yu?(Yu=!1,Os=t,tl=l):_y(t,V),V=t.pendingLanes,V===0&&(xr=null),ho(R.stateNode),ui(t),n!==null)for(h=t.onRecoverableError,R=0;R<n.length;R++)V=n[R],h(V.value,{componentStack:V.stack});return(tl&3)!==0&&Pa(),V=t.pendingLanes,(l&4194218)!==0&&(V&42)!==0?t===qf?nl++:(nl=0,qf=t):nl=0,il(0),null}function _y(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zo(n)))}function Pa(){if(Os!==null){var t=Os,n=Bf;Bf=0;var s=Jl(tl),l=S.T,h=ae.p;try{if(ae.p=32>s?32:s,S.T=null,Os===null)var d=!1;else{s=Hf,Hf=null;var _=Os,E=tl;if(Os=null,tl=0,(Je&6)!==0)throw Error(a(331));var R=Je;if(Je|=4,iy(_.current),ey(_,_.current,E,s),Je=R,il(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(rr,_)}catch{}d=!0}return d}finally{ae.p=h,S.T=l,_y(t,n)}}return!1}function Ey(t,n,s){n=Sn(s,n),n=hf(t.stateNode,n,2),t=Ir(t,n,2),t!==null&&(ot(t,2),ui(t))}function Ge(t,n,s){if(t.tag===3)Ey(t,t,s);else for(;n!==null;){if(n.tag===3){Ey(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xr===null||!xr.has(l))){t=Sn(s,t),s=Sg(2),l=Ir(n,s,2),l!==null&&(bg(s,l,n,t),ot(l,2),ui(l));break}}n=n.return}}function Yf(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new cA;var h=new Set;l.set(n,h)}else h=l.get(n),h===void 0&&(h=new Set,l.set(n,h));h.has(s)||(Lf=!0,h.add(s),t=gA.bind(null,t,n,s),n.then(t,t))}function gA(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Ke===t&&(xe&s)===s&&(it===4||it===3&&(xe&62914560)===xe&&300>en()-jf?(Je&2)===0&&Va(t,0):Uf|=s,xa===xe&&(xa=0)),ui(t)}function Ty(t,n){n===0&&(n=or()),t=_r(t,n),t!==null&&(ot(t,n),ui(t))}function yA(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Ty(t,s)}function vA(t,n){var s=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),Ty(t,s)}function _A(t,n){return es(t,n)}var Wu=null,La=null,Qf=!1,Zu=!1,Xf=!1,Ns=0;function ui(t){t!==La&&t.next===null&&(La===null?Wu=La=t:La=La.next=t),Zu=!0,Qf||(Qf=!0,TA(EA))}function il(t,n){if(!Xf&&Zu){Xf=!0;do for(var s=!1,l=Wu;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Qt(42|t)+1)-1,d&=h&~(_&~E),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(s=!0,by(l,d))}else d=xe,d=gn(l,l===Ke?d:0),(d&3)===0||ar(l,d)||(s=!0,by(l,d));l=l.next}while(s);Xf=!1}}function EA(){Zu=Qf=!1;var t=0;Ns!==0&&(DA()&&(t=Ns),Ns=0);for(var n=en(),s=null,l=Wu;l!==null;){var h=l.next,d=Ay(l,n);d===0?(l.next=null,s===null?Wu=h:s.next=h,h===null&&(La=s)):(s=l,(t!==0||(d&3)!==0)&&(Zu=!0)),l=h}il(t)}function Ay(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-Qt(d),E=1<<_,R=h[_];R===-1?((E&s)===0||(E&l)!==0)&&(h[_]=ta(E,n)):R<=n&&(t.expiredLanes|=E),d&=~E}if(n=Ke,s=xe,s=gn(t,t===n?s:0),l=t.callbackNode,s===0||t===n&&$e===2||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ea(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||ar(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&ea(l),Jl(s)){case 2:case 8:s=St;break;case 32:s=Ei;break;case 268435456:s=co;break;default:s=Ei}return l=Sy.bind(null,t),s=es(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&ea(l),t.callbackPriority=2,t.callbackNode=null,2}function Sy(t,n){var s=t.callbackNode;if(Pa()&&t.callbackNode!==s)return null;var l=xe;return l=gn(t,t===Ke?l:0),l===0?null:(cy(t,l,n),Ay(t,en()),t.callbackNode!=null&&t.callbackNode===s?Sy.bind(null,t):null)}function by(t,n){if(Pa())return null;cy(t,n,!0)}function TA(t){NA(function(){(Je&6)!==0?es(gt,t):t()})}function Wf(){return Ns===0&&(Ns=mo()),Ns}function wy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zn(""+t)}function Ry(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function AA(t,n,s,l,h){if(n==="submit"&&s&&s.stateNode===h){var d=wy((h[yt]||null).action),_=l.submitter;_&&(n=(n=_[yt]||null)?wy(n.formAction):_.getAttribute("formAction"),n!==null&&(d=n,_=null));var E=new la("action","action",null,l,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ns!==0){var R=_?Ry(h,_):new FormData(h);af(s,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(E.preventDefault(),R=_?Ry(h,_):new FormData(h),af(s,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var Zf=0;Zf<vp.length;Zf++){var Jf=vp[Zf],SA=Jf.toLowerCase(),bA=Jf[0].toUpperCase()+Jf.slice(1);Pn(SA,"on"+bA)}Pn(dp,"onAnimationEnd"),Pn(mp,"onAnimationIteration"),Pn(pp,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(BT,"onTransitionRun"),Pn(HT,"onTransitionStart"),Pn(qT,"onTransitionCancel"),Pn(gp,"onTransitionEnd"),tn("onMouseEnter",["mouseout","mouseover"]),tn("onMouseLeave",["mouseout","mouseover"]),tn("onPointerEnter",["pointerout","pointerover"]),tn("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function Iy(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],h=l.event;l=l.listeners;e:{var d=void 0;if(n)for(var _=l.length-1;0<=_;_--){var E=l[_],R=E.instance,V=E.currentTarget;if(E=E.listener,R!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=V;try{d(h)}catch(K){Uu(K)}h.currentTarget=null,d=R}else for(_=0;_<l.length;_++){if(E=l[_],R=E.instance,V=E.currentTarget,E=E.listener,R!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=V;try{d(h)}catch(K){Uu(K)}h.currentTarget=null,d=R}}}}function Oe(t,n){var s=n[ns];s===void 0&&(s=n[ns]=new Set);var l=t+"__bubble";s.has(l)||(Cy(n,t,2,!1),s.add(l))}function ed(t,n,s){var l=0;n&&(l|=4),Cy(s,t,l,n)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function td(t){if(!t[Ju]){t[Ju]=!0,go.forEach(function(s){s!=="selectionchange"&&(wA.has(s)||ed(s,!1,t),ed(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ju]||(n[Ju]=!0,ed("selectionchange",!1,n))}}function Cy(t,n,s,l){switch(Wy(n)){case 2:var h=WA;break;case 8:h=ZA;break;default:h=md}s=h.bind(null,n,s,t),h=void 0,!En||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(n,s,{capture:!0,passive:h}):t.addEventListener(n,s,!0):h!==void 0?t.addEventListener(n,s,{passive:h}):t.addEventListener(n,s,!1)}function nd(t,n,s,l,h){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var E=l.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(_===4)for(_=l.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===h||R.nodeType===8&&R.parentNode===h))return;_=_.return}for(;E!==null;){if(_=kn(E),_===null)return;if(R=_.tag,R===5||R===6||R===26||R===27){l=d=_;continue e}E=E.parentNode}}l=l.return}ru(function(){var V=d,K=oa(s),Z=[];e:{var B=yp.get(t);if(B!==void 0){var G=la,ue=t;switch(t){case"keypress":if(ei(s)===0)break e;case"keydown":case"keyup":G=ma;break;case"focusin":ue="focus",G=ha;break;case"focusout":ue="blur",G=ha;break;case"beforeblur":case"afterblur":G=ha;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Tn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=fu;break;case dp:case mp:case pp:G=fa;break;case gp:G=mu;break;case"scroll":case"scrollend":G=su;break;case"wheel":G=pa;break;case"copy":case"cut":case"paste":G=da;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Co;break;case"toggle":case"beforetoggle":G=gu}var _e=(n&4)!==0,rt=!_e&&(t==="scroll"||t==="scrollend"),k=_e?B!==null?B+"Capture":null:B;_e=[];for(var N=V,z;N!==null;){var Q=N;if(z=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||z===null||k===null||(Q=os(N,k),Q!=null&&_e.push(sl(N,Q,z))),rt)break;N=N.return}0<_e.length&&(B=new G(B,ue,null,s,K),Z.push({event:B,listeners:_e}))}}if((n&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",B&&s!==_n&&(ue=s.relatedTarget||s.fromElement)&&(kn(ue)||ue[Ti]))break e;if((G||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,G?(ue=s.relatedTarget||s.toElement,G=V,ue=ue?kn(ue):null,ue!==null&&(rt=de(ue),_e=ue.tag,ue!==rt||_e!==5&&_e!==27&&_e!==6)&&(ue=null)):(G=null,ue=V),G!==ue)){if(_e=Tn,Q="onMouseLeave",k="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(_e=Co,Q="onPointerLeave",k="onPointerEnter",N="pointer"),rt=G==null?B:fr(G),z=ue==null?B:fr(ue),B=new _e(Q,N+"leave",G,s,K),B.target=rt,B.relatedTarget=z,Q=null,kn(K)===V&&(_e=new _e(k,N+"enter",ue,s,K),_e.target=z,_e.relatedTarget=rt,Q=_e),rt=Q,G&&ue)t:{for(_e=G,k=ue,N=0,z=_e;z;z=Ua(z))N++;for(z=0,Q=k;Q;Q=Ua(Q))z++;for(;0<N-z;)_e=Ua(_e),N--;for(;0<z-N;)k=Ua(k),z--;for(;N--;){if(_e===k||k!==null&&_e===k.alternate)break t;_e=Ua(_e),k=Ua(k)}_e=null}else _e=null;G!==null&&Dy(Z,B,G,_e,!1),ue!==null&&rt!==null&&Dy(Z,rt,ue,_e,!0)}}e:{if(B=V?fr(V):window,G=B.nodeName&&B.nodeName.toLowerCase(),G==="select"||G==="input"&&B.type==="file")var oe=np;else if(_t(B))if(ip)oe=LT;else{oe=kT;var Re=VT}else G=B.nodeName,!G||G.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?V&&To(V.elementType)&&(oe=np):oe=PT;if(oe&&(oe=oe(t,V))){Di(Z,oe,s,K);break e}Re&&Re(t,B,V),t==="focusout"&&V&&B.type==="number"&&V.memoizedProps.value!=null&&aa(B,"number",B.value)}switch(Re=V?fr(V):window,t){case"focusin":(_t(Re)||Re.contentEditable==="true")&&(ga=Re,Mh=V,No=null);break;case"focusout":No=Mh=ga=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,hp(Z,s,K);break;case"selectionchange":if(jT)break;case"keydown":case"keyup":hp(Z,s,K)}var fe;if(ii)e:{switch(t){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Ne?H(t,s)&&(pe="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(pe="onCompositionStart");pe&&(v&&s.locale!=="ko"&&(Ne||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Ne&&(fe=So()):(Jn=K,vr="value"in Jn?Jn.value:Jn.textContent,Ne=!0)),Re=ec(V,pe),0<Re.length&&(pe=new Ro(pe,t,null,s,K),Z.push({event:pe,listeners:Re}),fe?pe.data=fe:(fe=ne(s),fe!==null&&(pe.data=fe)))),(fe=p?vt(t,s):Me(t,s))&&(pe=ec(V,"onBeforeInput"),0<pe.length&&(Re=new Ro("onBeforeInput","beforeinput",null,s,K),Z.push({event:Re,listeners:pe}),Re.data=fe)),AA(Z,t,V,s,K)}Iy(Z,n)})}function sl(t,n,s){return{instance:t,listener:n,currentTarget:s}}function ec(t,n){for(var s=n+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=os(t,s),h!=null&&l.unshift(sl(t,h,d)),h=os(t,n),h!=null&&l.push(sl(t,h,d))),t=t.return}return l}function Ua(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Dy(t,n,s,l,h){for(var d=n._reactName,_=[];s!==null&&s!==l;){var E=s,R=E.alternate,V=E.stateNode;if(E=E.tag,R!==null&&R===l)break;E!==5&&E!==26&&E!==27||V===null||(R=V,h?(V=os(s,d),V!=null&&_.unshift(sl(s,V,R))):h||(V=os(s,d),V!=null&&_.push(sl(s,V,R)))),s=s.return}_.length!==0&&t.push({event:n,listeners:_})}var RA=/\r\n?/g,IA=/\u0000|\uFFFD/g;function Oy(t){return(typeof t=="string"?t:""+t).replace(RA,`
`).replace(IA,"")}function Ny(t,n){return n=Oy(n),Oy(t)===n}function tc(){}function Fe(t,n,s,l,h,d){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||vn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&vn(t,""+l);break;case"className":pr(t,"class",l);break;case"tabIndex":pr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pr(t,s,l);break;case"style":iu(t,l,d);break;case"data":if(n!=="object"){pr(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Zn(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Fe(t,n,"name",h.name,h,null),Fe(t,n,"formEncType",h.formEncType,h,null),Fe(t,n,"formMethod",h.formMethod,h,null),Fe(t,n,"formTarget",h.formTarget,h,null)):(Fe(t,n,"encType",h.encType,h,null),Fe(t,n,"method",h.method,h,null),Fe(t,n,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Zn(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=tc);break;case"onScroll":l!=null&&Oe("scroll",t);break;case"onScrollEnd":l!=null&&Oe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Zn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Oe("beforetoggle",t),Oe("toggle",t),mr(t,"popover",l);break;case"xlinkActuate":yn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":yn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":yn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":yn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":yn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":yn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":yn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":yn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":yn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=wh.get(s)||s,mr(t,s,l))}}function id(t,n,s,l,h,d){switch(s){case"style":iu(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?vn(t,l):(typeof l=="number"||typeof l=="bigint")&&vn(t,""+l);break;case"onScroll":l!=null&&Oe("scroll",t);break;case"onScrollEnd":l!=null&&Oe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ra.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),n=s.slice(2,h?s.length-7:void 0),d=t[yt]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,h);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):mr(t,s,l)}}}function kt(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",t),Oe("load",t);var l=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var _=s[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Fe(t,n,d,_,s,null)}}h&&Fe(t,n,"srcSet",s.srcSet,s,null),l&&Fe(t,n,"src",s.src,s,null);return;case"input":Oe("invalid",t);var E=d=_=h=null,R=null,V=null;for(l in s)if(s.hasOwnProperty(l)){var K=s[l];if(K!=null)switch(l){case"name":h=K;break;case"type":_=K;break;case"checked":R=K;break;case"defaultChecked":V=K;break;case"value":d=K;break;case"defaultValue":E=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,n));break;default:Fe(t,n,l,K,s,null)}}ss(t,d,E,R,V,_,h,!1),rs(t);return;case"select":Oe("invalid",t),l=_=d=null;for(h in s)if(s.hasOwnProperty(h)&&(E=s[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":l=E;default:Fe(t,n,h,E,s,null)}n=d,s=_,t.multiple=!!l,n!=null?Pe(t,!!l,n,!1):s!=null&&Pe(t,!!l,s,!0);return;case"textarea":Oe("invalid",t),d=h=l=null;for(_ in s)if(s.hasOwnProperty(_)&&(E=s[_],E!=null))switch(_){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Fe(t,n,_,E,s,null)}yr(t,l,h,d),rs(t);return;case"option":for(R in s)if(s.hasOwnProperty(R)&&(l=s[R],l!=null))switch(R){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Fe(t,n,R,l,s,null)}return;case"dialog":Oe("cancel",t),Oe("close",t);break;case"iframe":case"object":Oe("load",t);break;case"video":case"audio":for(l=0;l<rl.length;l++)Oe(rl[l],t);break;case"image":Oe("error",t),Oe("load",t);break;case"details":Oe("toggle",t);break;case"embed":case"source":case"link":Oe("error",t),Oe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Fe(t,n,V,l,s,null)}return;default:if(To(n)){for(K in s)s.hasOwnProperty(K)&&(l=s[K],l!==void 0&&id(t,n,K,l,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(l=s[E],l!=null&&Fe(t,n,E,l,s,null))}function CA(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,R=null,V=null,K=null;for(G in s){var Z=s[G];if(s.hasOwnProperty(G)&&Z!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":R=Z;default:l.hasOwnProperty(G)||Fe(t,n,G,null,l,Z)}}for(var B in l){var G=l[B];if(Z=s[B],l.hasOwnProperty(B)&&(G!=null||Z!=null))switch(B){case"type":d=G;break;case"name":h=G;break;case"checked":V=G;break;case"defaultChecked":K=G;break;case"value":_=G;break;case"defaultValue":E=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,n));break;default:G!==Z&&Fe(t,n,B,G,l,Z)}}gr(t,_,E,R,V,K,d,h);return;case"select":G=_=E=B=null;for(d in s)if(R=s[d],s.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":G=R;default:l.hasOwnProperty(d)||Fe(t,n,d,null,l,R)}for(h in l)if(d=l[h],R=s[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":B=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==R&&Fe(t,n,h,d,l,R)}n=E,s=_,l=G,B!=null?Pe(t,!!s,B,!1):!!l!=!!s&&(n!=null?Pe(t,!!s,n,!0):Pe(t,!!s,s?[]:"",!1));return;case"textarea":G=B=null;for(E in s)if(h=s[E],s.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Fe(t,n,E,null,l,h)}for(_ in l)if(h=l[_],d=s[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":B=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&Fe(t,n,_,h,l,d)}as(t,B,G);return;case"option":for(var ue in s)if(B=s[ue],s.hasOwnProperty(ue)&&B!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":t.selected=!1;break;default:Fe(t,n,ue,null,l,B)}for(R in l)if(B=l[R],G=s[R],l.hasOwnProperty(R)&&B!==G&&(B!=null||G!=null))switch(R){case"selected":t.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Fe(t,n,R,B,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in s)B=s[_e],s.hasOwnProperty(_e)&&B!=null&&!l.hasOwnProperty(_e)&&Fe(t,n,_e,null,l,B);for(V in l)if(B=l[V],G=s[V],l.hasOwnProperty(V)&&B!==G&&(B!=null||G!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:Fe(t,n,V,B,l,G)}return;default:if(To(n)){for(var rt in s)B=s[rt],s.hasOwnProperty(rt)&&B!==void 0&&!l.hasOwnProperty(rt)&&id(t,n,rt,void 0,l,B);for(K in l)B=l[K],G=s[K],!l.hasOwnProperty(K)||B===G||B===void 0&&G===void 0||id(t,n,K,B,l,G);return}}for(var k in s)B=s[k],s.hasOwnProperty(k)&&B!=null&&!l.hasOwnProperty(k)&&Fe(t,n,k,null,l,B);for(Z in l)B=l[Z],G=s[Z],!l.hasOwnProperty(Z)||B===G||B==null&&G==null||Fe(t,n,Z,B,l,G)}var rd=null,sd=null;function nc(t){return t.nodeType===9?t:t.ownerDocument}function My(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xy(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var od=null;function DA(){var t=window.event;return t&&t.type==="popstate"?t===od?!1:(od=t,!0):(od=null,!1)}var Vy=typeof setTimeout=="function"?setTimeout:void 0,OA=typeof clearTimeout=="function"?clearTimeout:void 0,ky=typeof Promise=="function"?Promise:void 0,NA=typeof queueMicrotask=="function"?queueMicrotask:typeof ky<"u"?function(t){return ky.resolve(null).then(t).catch(MA)}:Vy;function MA(t){setTimeout(function(){throw t})}function ld(t,n){var s=n,l=0;do{var h=s.nextSibling;if(t.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"){if(l===0){t.removeChild(h),dl(n);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=h}while(s);dl(n)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ud(s),is(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function xA(t,n,s,l){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[hr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=zn(t.nextSibling),t===null)break}return null}function VA(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=zn(t.nextSibling),t===null))return null;return t}function zn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Py(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return t;n--}else s==="/$"&&n++}t=t.previousSibling}return null}function Ly(t,n,s){switch(n=nc(s),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}var Nn=new Map,Uy=new Set;function ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Fi=ae.d;ae.d={f:kA,r:PA,D:LA,C:UA,L:zA,m:jA,X:HA,S:BA,M:qA};function kA(){var t=Fi.f(),n=Qu();return t||n}function PA(t){var n=Ai(t);n!==null&&n.tag===5&&n.type==="form"?hg(n):Fi.r(t)}var za=typeof document>"u"?null:document;function zy(t,n,s){var l=za;if(l&&typeof n=="string"&&n){var h=tt(n);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),Uy.has(h)||(Uy.add(h),t={rel:t,crossOrigin:s,href:n},l.querySelector(h)===null&&(n=l.createElement("link"),kt(n,"link",t),We(n),l.head.appendChild(n)))}}function LA(t){Fi.D(t),zy("dns-prefetch",t,null)}function UA(t,n){Fi.C(t,n),zy("preconnect",t,n)}function zA(t,n,s){Fi.L(t,n,s);var l=za;if(l&&t&&n){var h='link[rel="preload"][as="'+tt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+tt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+tt(s.imageSizes)+'"]')):h+='[href="'+tt(t)+'"]';var d=h;switch(n){case"style":d=ja(t);break;case"script":d=Ba(t)}Nn.has(d)||(t=I({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Nn.set(d,t),l.querySelector(h)!==null||n==="style"&&l.querySelector(al(d))||n==="script"&&l.querySelector(ol(d))||(n=l.createElement("link"),kt(n,"link",t),We(n),l.head.appendChild(n)))}}function jA(t,n){Fi.m(t,n);var s=za;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+tt(l)+'"][href="'+tt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ba(t)}if(!Nn.has(d)&&(t=I({rel:"modulepreload",href:t},n),Nn.set(d,t),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ol(d)))return}l=s.createElement("link"),kt(l,"link",t),We(l),s.head.appendChild(l)}}}function BA(t,n,s){Fi.S(t,n,s);var l=za;if(l&&t){var h=dr(l).hoistableStyles,d=ja(t);n=n||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=l.querySelector(al(d)))E.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Nn.get(d))&&cd(t,s);var R=_=l.createElement("link");We(R),kt(R,"link",t),R._p=new Promise(function(V,K){R.onload=V,R.onerror=K}),R.addEventListener("load",function(){E.loading|=1}),R.addEventListener("error",function(){E.loading|=2}),E.loading|=4,rc(_,n,l)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function HA(t,n){Fi.X(t,n);var s=za;if(s&&t){var l=dr(s).hoistableScripts,h=Ba(t),d=l.get(h);d||(d=s.querySelector(ol(h)),d||(t=I({src:t,async:!0},n),(n=Nn.get(h))&&hd(t,n),d=s.createElement("script"),We(d),kt(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function qA(t,n){Fi.M(t,n);var s=za;if(s&&t){var l=dr(s).hoistableScripts,h=Ba(t),d=l.get(h);d||(d=s.querySelector(ol(h)),d||(t=I({src:t,async:!0,type:"module"},n),(n=Nn.get(h))&&hd(t,n),d=s.createElement("script"),We(d),kt(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function jy(t,n,s,l){var h=(h=pn.current)?ic(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=ja(s.href),s=dr(h).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ja(s.href);var d=dr(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(al(t)))&&!d._p&&(_.instance=d,_.state.loading=5),Nn.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Nn.set(t,s),d||FA(h,t,s,_.state))),n&&l===null)throw Error(a(528,""));return _}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ba(s),s=dr(h).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function ja(t){return'href="'+tt(t)+'"'}function al(t){return'link[rel="stylesheet"]['+t+"]"}function By(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function FA(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),kt(n,"link",s),We(n),t.head.appendChild(n))}function Ba(t){return'[src="'+tt(t)+'"]'}function ol(t){return"script[async]"+t}function Hy(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+tt(s.href)+'"]');if(l)return n.instance=l,We(l),l;var h=I({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),We(l),kt(l,"style",h),rc(l,s.precedence,t),n.instance=l;case"stylesheet":h=ja(s.href);var d=t.querySelector(al(h));if(d)return n.state.loading|=4,n.instance=d,We(d),d;l=By(s),(h=Nn.get(h))&&cd(l,h),d=(t.ownerDocument||t).createElement("link"),We(d);var _=d;return _._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),kt(d,"link",l),n.state.loading|=4,rc(d,s.precedence,t),n.instance=d;case"script":return d=Ba(s.src),(h=t.querySelector(ol(d)))?(n.instance=h,We(h),h):(l=s,(h=Nn.get(d))&&(l=I({},s),hd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),We(h),kt(h,"link",l),t.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,rc(l,s.precedence,t));return n.instance}function rc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var E=l[_];if(E.dataset.precedence===n)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var sc=null;function qy(t,n,s){if(sc===null){var l=new Map,h=sc=new Map;h.set(s,l)}else h=sc,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var d=s[h];if(!(d[hr]||d[bt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(n)||"";_=t+_;var E=l.get(_);E?E.push(d):l.set(_,[d])}}return l}function Fy(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function GA(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gy(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ll=null;function KA(){}function $A(t,n,s){if(ll===null)throw Error(a(475));var l=ll;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var h=ja(s.href),d=t.querySelector(al(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=ac.bind(l),t.then(l,l)),n.state.loading|=4,n.instance=d,We(d);return}d=t.ownerDocument||t,s=By(s),(h=Nn.get(h))&&cd(s,h),d=d.createElement("link"),We(d);var _=d;_._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),kt(d,"link",s),n.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=ac.bind(l),t.addEventListener("load",n),t.addEventListener("error",n))}}function YA(){if(ll===null)throw Error(a(475));var t=ll;return t.stylesheets&&t.count===0&&fd(t,t.stylesheets),0<t.count?function(n){var s=setTimeout(function(){if(t.stylesheets&&fd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(s)}}:null}function ac(){if(this.count--,this.count===0){if(this.stylesheets)fd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var oc=null;function fd(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oc=new Map,n.forEach(QA,t),oc=null,ac.call(t))}function QA(t,n){if(!(n.state.loading&4)){var s=oc.get(t);if(s)var l=s.get(null);else{s=new Map,oc.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),l=_)}l&&s.set(null,l)}h=n.instance,_=h.getAttribute("data-precedence"),d=s.get(_)||l,d===l&&s.set(null,h),s.set(_,h),this.count++,l=ac.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),n.state.loading|=4}}var ul={$$typeof:j,Provider:null,Consumer:null,_currentValue:Se,_currentValue2:Se,_threadCount:0};function XA(t,n,s,l,h,d,_,E){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=na(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.hiddenUpdates=na(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Ky(t,n,s,l,h,d,_,E,R,V,K,Z){return t=new XA(t,n,s,_,E,R,V,Z),n=1,d===!0&&(n|=24),d=Dn(3,null,null,n),t.current=d,d.stateNode=t,n=qh(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:n},bf(d),t}function $y(t){return t?(t=_a,t):_a}function Yy(t,n,s,l,h,d){h=$y(h),l.context===null?l.context=h:l.pendingContext=h,l=Rr(n),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ir(t,l,n),s!==null&&(Jt(s,t,n),Ko(s,t,n))}function Qy(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function dd(t,n){Qy(t,n),(t=t.alternate)&&Qy(t,n)}function Xy(t){if(t.tag===13){var n=_r(t,67108864);n!==null&&Jt(n,t,67108864),dd(t,67108864)}}var lc=!0;function WA(t,n,s,l){var h=S.T;S.T=null;var d=ae.p;try{ae.p=2,md(t,n,s,l)}finally{ae.p=d,S.T=h}}function ZA(t,n,s,l){var h=S.T;S.T=null;var d=ae.p;try{ae.p=8,md(t,n,s,l)}finally{ae.p=d,S.T=h}}function md(t,n,s,l){if(lc){var h=pd(l);if(h===null)nd(t,n,l,uc,s),Zy(t,l);else if(eS(h,t,n,s,l))l.stopPropagation();else if(Zy(t,l),n&4&&-1<JA.indexOf(t)){for(;h!==null;){var d=Ai(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Vn(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var R=1<<31-Qt(_);E.entanglements[1]|=R,_&=~R}ui(d),(Je&6)===0&&(Ku=en()+500,il(0))}}break;case 13:E=_r(d,2),E!==null&&Jt(E,d,2),Qu(),dd(d,2)}if(d=pd(l),d===null&&nd(t,n,l,uc,s),d===h)break;h=d}h!==null&&l.stopPropagation()}else nd(t,n,l,null,s)}}function pd(t){return t=oa(t),gd(t)}var uc=null;function gd(t){if(uc=null,t=kn(t),t!==null){var n=de(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=ze(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function Wy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yl()){case gt:return 2;case St:return 8;case Ei:case Ql:return 32;case co:return 268435456;default:return 32}default:return 32}}var yd=!1,Vr=null,kr=null,Pr=null,cl=new Map,hl=new Map,Lr=[],JA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zy(t,n){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(n.pointerId)}}function fl(t,n,s,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},n!==null&&(n=Ai(n),n!==null&&Xy(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),t)}function eS(t,n,s,l,h){switch(n){case"focusin":return Vr=fl(Vr,t,n,s,l,h),!0;case"dragenter":return kr=fl(kr,t,n,s,l,h),!0;case"mouseover":return Pr=fl(Pr,t,n,s,l,h),!0;case"pointerover":var d=h.pointerId;return cl.set(d,fl(cl.get(d)||null,t,n,s,l,h)),!0;case"gotpointercapture":return d=h.pointerId,hl.set(d,fl(hl.get(d)||null,t,n,s,l,h)),!0}return!1}function Jy(t){var n=kn(t.target);if(n!==null){var s=de(n);if(s!==null){if(n=s.tag,n===13){if(n=ze(s),n!==null){t.blockedOn=n,cr(t.priority,function(){if(s.tag===13){var l=dn(),h=_r(s,l);h!==null&&Jt(h,s,l),dd(s,l)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=pd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);_n=l,s.target.dispatchEvent(l),_n=null}else return n=Ai(s),n!==null&&Xy(n),t.blockedOn=s,!1;n.shift()}return!0}function ev(t,n,s){cc(t)&&s.delete(n)}function tS(){yd=!1,Vr!==null&&cc(Vr)&&(Vr=null),kr!==null&&cc(kr)&&(kr=null),Pr!==null&&cc(Pr)&&(Pr=null),cl.forEach(ev),hl.forEach(ev)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,yd||(yd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,tS)))}var fc=null;function tv(t){fc!==t&&(fc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===t&&(fc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],h=t[n+2];if(typeof l!="function"){if(gd(l||s)===null)continue;break}var d=Ai(s);d!==null&&(t.splice(n,3),n-=3,af(d,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function dl(t){function n(R){return hc(R,t)}Vr!==null&&hc(Vr,t),kr!==null&&hc(kr,t),Pr!==null&&hc(Pr,t),cl.forEach(n),hl.forEach(n);for(var s=0;s<Lr.length;s++){var l=Lr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Lr.length&&(s=Lr[0],s.blockedOn===null);)Jy(s),s.blockedOn===null&&Lr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],d=s[l+1],_=h[yt]||null;if(typeof d=="function")_||tv(s);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[yt]||null)E=_.formAction;else if(gd(h)!==null)continue}else E=_.action;typeof E=="function"?s[l+1]=E:(s.splice(l,3),l-=3),tv(s)}}}function vd(t){this._internalRoot=t}dc.prototype.render=vd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,l=dn();Yy(s,l,t,n,null,null)},dc.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Pa(),Yy(t.current,2,null,t,null,null),Qu(),n[Ti]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var n=eu();t={blockedOn:null,target:t,priority:n};for(var s=0;s<Lr.length&&n!==0&&n<Lr[s].priority;s++);Lr.splice(s,0,t),s===0&&Jy(t)}};var nv=e.version;if(nv!=="19.0.0")throw Error(a(527,nv,"19.0.0"));ae.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=J(n),t=t!==null?ce(t):null,t=t===null?null:t.stateNode,t};var nS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:kn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{rr=mc.inject(nS),Bt=mc}catch{}}return pl.createRoot=function(t,n){if(!o(t))throw Error(a(299));var s=!1,l="",h=_g,d=Eg,_=Tg,E=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Ky(t,1,!1,null,null,s,l,h,d,_,E,null),t[Ti]=n.current,td(t.nodeType===8?t.parentNode:t),new vd(n)},pl.hydrateRoot=function(t,n,s){if(!o(t))throw Error(a(299));var l=!1,h="",d=_g,_=Eg,E=Tg,R=null,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(R=s.unstable_transitionCallbacks),s.formState!==void 0&&(V=s.formState)),n=Ky(t,1,!0,n,s??null,l,h,d,_,E,R,V),n.context=$y(null),s=n.current,l=dn(),h=Rr(l),h.callback=null,Ir(s,h,l),n.current.lanes=l,ot(n,l),ui(n),t[Ti]=n.current,td(t),new dc(n)},pl.version="19.0.0",pl}var fv;function fS(){if(fv)return Td.exports;fv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=hS(),Td.exports}var dS=fS(),gl={},dv;function mS(){if(dv)return gl;dv=1,Object.defineProperty(gl,"__esModule",{value:!0}),gl.parse=f,gl.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,c=(()=>{const D=function(){};return D.prototype=Object.create(null),D})();function f(D,j){const P=new c,Y=D.length;if(Y<2)return P;const F=(j==null?void 0:j.decode)||A;let X=0;do{const ie=D.indexOf("=",X);if(ie===-1)break;const te=D.indexOf(";",X),me=te===-1?Y:te;if(ie>me){X=D.lastIndexOf(";",ie-1)+1;continue}const he=m(D,X,ie),Ae=g(D,ie,he),M=D.slice(he,Ae);if(P[M]===void 0){let w=m(D,ie+1,me),S=g(D,me,w);const I=F(D.slice(w,S));P[M]=I}X=me+1}while(X<Y);return P}function m(D,j,P){do{const Y=D.charCodeAt(j);if(Y!==32&&Y!==9)return j}while(++j<P);return P}function g(D,j,P){for(;j>P;){const Y=D.charCodeAt(--j);if(Y!==32&&Y!==9)return j+1}return P}function y(D,j,P){const Y=(P==null?void 0:P.encode)||encodeURIComponent;if(!r.test(D))throw new TypeError(`argument name is invalid: ${D}`);const F=Y(j);if(!e.test(F))throw new TypeError(`argument val is invalid: ${j}`);let X=D+"="+F;if(!P)return X;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);X+="; Max-Age="+P.maxAge}if(P.domain){if(!i.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);X+="; Domain="+P.domain}if(P.path){if(!a.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);X+="; Path="+P.path}if(P.expires){if(!b(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);X+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(X+="; HttpOnly"),P.secure&&(X+="; Secure"),P.partitioned&&(X+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":X+="; Priority=Low";break;case"medium":X+="; Priority=Medium";break;case"high":X+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":X+="; SameSite=Strict";break;case"lax":X+="; SameSite=Lax";break;case"none":X+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return X}function A(D){if(D.indexOf("%")===-1)return D;try{return decodeURIComponent(D)}catch{return D}}function b(D){return o.call(D)==="[object Date]"}return gl}mS();var mv="popstate";function pS(r={}){function e(a,o){let{pathname:c,search:f,hash:m}=a.location;return jd("",{pathname:c,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:Cl(o)}return yS(e,i,null,r)}function Xe(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function qn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gS(){return Math.random().toString(36).substring(2,10)}function pv(r,e){return{usr:r.state,key:r.key,idx:e}}function jd(r,e,i=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?to(e):e,state:i,key:e&&e.key||a||gS()}}function Cl({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function to(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function yS(r,e,i,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,f=o.history,m="POP",g=null,y=A();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function A(){return(f.state||{idx:null}).idx}function b(){m="POP";let F=A(),X=F==null?null:F-y;y=F,g&&g({action:m,location:Y.location,delta:X})}function D(F,X){m="PUSH";let ie=jd(Y.location,F,X);y=A()+1;let te=pv(ie,y),me=Y.createHref(ie);try{f.pushState(te,"",me)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;o.location.assign(me)}c&&g&&g({action:m,location:Y.location,delta:1})}function j(F,X){m="REPLACE";let ie=jd(Y.location,F,X);y=A();let te=pv(ie,y),me=Y.createHref(ie);f.replaceState(te,"",me),c&&g&&g({action:m,location:Y.location,delta:0})}function P(F){return vS(F)}let Y={get action(){return m},get location(){return r(o,f)},listen(F){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(mv,b),g=F,()=>{o.removeEventListener(mv,b),g=null}},createHref(F){return e(o,F)},createURL:P,encodeLocation(F){let X=P(F);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:D,replace:j,go(F){return f.go(F)}};return Y}function vS(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(i,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:Cl(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function F_(r,e,i="/"){return _S(r,e,i,!1)}function _S(r,e,i,a){let o=typeof e=="string"?to(e):e,c=Zi(o.pathname||"/",i);if(c==null)return null;let f=G_(r);ES(f);let m=null;for(let g=0;m==null&&g<f.length;++g){let y=NS(c);m=DS(f[g],y,a)}return m}function G_(r,e=[],i=[],a=""){let o=(c,f,m)=>{let g={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};g.relativePath.startsWith("/")&&(Xe(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length));let y=Yi([a,g.relativePath]),A=i.concat(g);c.children&&c.children.length>0&&(Xe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),G_(c.children,e,A,y)),!(c.path==null&&!c.index)&&e.push({path:y,score:IS(y,c.index),routesMeta:A})};return r.forEach((c,f)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))o(c,f);else for(let g of K_(c.path))o(c,f,g)}),e}function K_(r){let e=r.split("/");if(e.length===0)return[];let[i,...a]=e,o=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let f=K_(a.join("/")),m=[];return m.push(...f.map(g=>g===""?c:[c,g].join("/"))),o&&m.push(...f),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function ES(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:CS(e.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var TS=/^:[\w-]+$/,AS=3,SS=2,bS=1,wS=10,RS=-2,gv=r=>r==="*";function IS(r,e){let i=r.split("/"),a=i.length;return i.some(gv)&&(a+=RS),e&&(a+=SS),i.filter(o=>!gv(o)).reduce((o,c)=>o+(TS.test(c)?AS:c===""?bS:wS),a)}function CS(r,e){return r.length===e.length&&r.slice(0,-1).every((a,o)=>a===e[o])?r[r.length-1]-e[e.length-1]:0}function DS(r,e,i=!1){let{routesMeta:a}=r,o={},c="/",f=[];for(let m=0;m<a.length;++m){let g=a[m],y=m===a.length-1,A=c==="/"?e:e.slice(c.length)||"/",b=xc({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},A),D=g.route;if(!b&&y&&i&&!a[a.length-1].route.index&&(b=xc({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},A)),!b)return null;Object.assign(o,b.params),f.push({params:o,pathname:Yi([c,b.pathname]),pathnameBase:kS(Yi([c,b.pathnameBase])),route:D}),b.pathnameBase!=="/"&&(c=Yi([c,b.pathnameBase]))}return f}function xc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,a]=OS(r.path,r.caseSensitive,r.end),o=e.match(i);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((y,{paramName:A,isOptional:b},D)=>{if(A==="*"){let P=m[D]||"";f=c.slice(0,c.length-P.length).replace(/(.)\/+$/,"$1")}const j=m[D];return b&&!j?y[A]=void 0:y[A]=(j||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:f,pattern:r}}function OS(r,e=!1,i=!0){qn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,g)=>(a.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function NS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Zi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,a=r.charAt(i);return a&&a!=="/"?null:r.slice(i)||"/"}function MS(r,e="/"){let{pathname:i,search:a="",hash:o=""}=typeof r=="string"?to(r):r;return{pathname:i?i.startsWith("/")?i:xS(i,e):e,search:PS(a),hash:LS(o)}}function xS(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function wd(r,e,i,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VS(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function cm(r){let e=VS(r);return e.map((i,a)=>a===e.length-1?i.pathname:i.pathnameBase)}function hm(r,e,i,a=!1){let o;typeof r=="string"?o=to(r):(o={...r},Xe(!o.pathname||!o.pathname.includes("?"),wd("?","pathname","search",o)),Xe(!o.pathname||!o.pathname.includes("#"),wd("#","pathname","hash",o)),Xe(!o.search||!o.search.includes("#"),wd("#","search","hash",o)));let c=r===""||o.pathname==="",f=c?"/":o.pathname,m;if(f==null)m=i;else{let b=e.length-1;if(!a&&f.startsWith("..")){let D=f.split("/");for(;D[0]==="..";)D.shift(),b-=1;o.pathname=D.join("/")}m=b>=0?e[b]:"/"}let g=MS(o,m),y=f&&f!=="/"&&f.endsWith("/"),A=(c||f===".")&&i.endsWith("/");return!g.pathname.endsWith("/")&&(y||A)&&(g.pathname+="/"),g}var Yi=r=>r.join("/").replace(/\/\/+/g,"/"),kS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),PS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,LS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function US(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var $_=["POST","PUT","PATCH","DELETE"];new Set($_);var zS=["GET",...$_];new Set(zS);var no=q.createContext(null);no.displayName="DataRouter";var th=q.createContext(null);th.displayName="DataRouterState";var Y_=q.createContext({isTransitioning:!1});Y_.displayName="ViewTransition";var jS=q.createContext(new Map);jS.displayName="Fetchers";var BS=q.createContext(null);BS.displayName="Await";var Kn=q.createContext(null);Kn.displayName="Navigation";var Pl=q.createContext(null);Pl.displayName="Location";var yi=q.createContext({outlet:null,matches:[],isDataRoute:!1});yi.displayName="Route";var fm=q.createContext(null);fm.displayName="RouteError";function HS(r,{relative:e}={}){Xe(io(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=q.useContext(Kn),{hash:o,pathname:c,search:f}=Ll(r,{relative:e}),m=c;return i!=="/"&&(m=c==="/"?i:Yi([i,c])),a.createHref({pathname:m,search:f,hash:o})}function io(){return q.useContext(Pl)!=null}function Zr(){return Xe(io(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Pl).location}var Q_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function X_(r){q.useContext(Kn).static||q.useLayoutEffect(r)}function dm(){let{isDataRoute:r}=q.useContext(yi);return r?tb():qS()}function qS(){Xe(io(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(no),{basename:e,navigator:i}=q.useContext(Kn),{matches:a}=q.useContext(yi),{pathname:o}=Zr(),c=JSON.stringify(cm(a)),f=q.useRef(!1);return X_(()=>{f.current=!0}),q.useCallback((g,y={})=>{if(qn(f.current,Q_),!f.current)return;if(typeof g=="number"){i.go(g);return}let A=hm(g,JSON.parse(c),o,y.relative==="path");r==null&&e!=="/"&&(A.pathname=A.pathname==="/"?e:Yi([e,A.pathname])),(y.replace?i.replace:i.push)(A,y.state,y)},[e,i,c,o,r])}q.createContext(null);function Ll(r,{relative:e}={}){let{matches:i}=q.useContext(yi),{pathname:a}=Zr(),o=JSON.stringify(cm(i));return q.useMemo(()=>hm(r,JSON.parse(o),a,e==="path"),[r,o,a,e])}function FS(r,e){return W_(r,e)}function W_(r,e,i,a){var ie;Xe(io(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:c}=q.useContext(Kn),{matches:f}=q.useContext(yi),m=f[f.length-1],g=m?m.params:{},y=m?m.pathname:"/",A=m?m.pathnameBase:"/",b=m&&m.route;{let te=b&&b.path||"";Z_(y,!b||te.endsWith("*")||te.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${te}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${te}"> to <Route path="${te==="/"?"*":`${te}/*`}">.`)}let D=Zr(),j;if(e){let te=typeof e=="string"?to(e):e;Xe(A==="/"||((ie=te.pathname)==null?void 0:ie.startsWith(A)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${te.pathname}" was given in the \`location\` prop.`),j=te}else j=D;let P=j.pathname||"/",Y=P;if(A!=="/"){let te=A.replace(/^\//,"").split("/");Y="/"+P.replace(/^\//,"").split("/").slice(te.length).join("/")}let F=!c&&i&&i.matches&&i.matches.length>0?i.matches:F_(r,{pathname:Y});qn(b||F!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),qn(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=QS(F&&F.map(te=>Object.assign({},te,{params:Object.assign({},g,te.params),pathname:Yi([A,o.encodeLocation?o.encodeLocation(te.pathname).pathname:te.pathname]),pathnameBase:te.pathnameBase==="/"?A:Yi([A,o.encodeLocation?o.encodeLocation(te.pathnameBase).pathname:te.pathnameBase])})),f,i,a);return e&&X?q.createElement(Pl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},X):X}function GS(){let r=eb(),e=US(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),i?q.createElement("pre",{style:o},i):null,f)}var KS=q.createElement(GS,null),$S=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?q.createElement(yi.Provider,{value:this.props.routeContext},q.createElement(fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function YS({routeContext:r,match:e,children:i}){let a=q.useContext(no);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(yi.Provider,{value:r},i)}function QS(r,e=[],i=null,a=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let o=r,c=i==null?void 0:i.errors;if(c!=null){let g=o.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);Xe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let f=!1,m=-1;if(i)for(let g=0;g<o.length;g++){let y=o[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:A,errors:b}=i,D=y.route.loader&&!A.hasOwnProperty(y.route.id)&&(!b||b[y.route.id]===void 0);if(y.route.lazy||D){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((g,y,A)=>{let b,D=!1,j=null,P=null;i&&(b=c&&y.route.id?c[y.route.id]:void 0,j=y.route.errorElement||KS,f&&(m<0&&A===0?(Z_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,P=null):m===A&&(D=!0,P=y.route.hydrateFallbackElement||null)));let Y=e.concat(o.slice(0,A+1)),F=()=>{let X;return b?X=j:D?X=P:y.route.Component?X=q.createElement(y.route.Component,null):y.route.element?X=y.route.element:X=g,q.createElement(YS,{match:y,routeContext:{outlet:g,matches:Y,isDataRoute:i!=null},children:X})};return i&&(y.route.ErrorBoundary||y.route.errorElement||A===0)?q.createElement($S,{location:i.location,revalidation:i.revalidation,component:j,error:b,children:F(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):F()},null)}function mm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function XS(r){let e=q.useContext(no);return Xe(e,mm(r)),e}function WS(r){let e=q.useContext(th);return Xe(e,mm(r)),e}function ZS(r){let e=q.useContext(yi);return Xe(e,mm(r)),e}function pm(r){let e=ZS(r),i=e.matches[e.matches.length-1];return Xe(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function JS(){return pm("useRouteId")}function eb(){var a;let r=q.useContext(fm),e=WS("useRouteError"),i=pm("useRouteError");return r!==void 0?r:(a=e.errors)==null?void 0:a[i]}function tb(){let{router:r}=XS("useNavigate"),e=pm("useNavigate"),i=q.useRef(!1);return X_(()=>{i.current=!0}),q.useCallback(async(o,c={})=>{qn(i.current,Q_),i.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...c}))},[r,e])}var yv={};function Z_(r,e,i){!e&&!yv[r]&&(yv[r]=!0,qn(!1,i))}q.memo(nb);function nb({routes:r,future:e,state:i}){return W_(r,void 0,i,e)}function pc({to:r,replace:e,state:i,relative:a}){Xe(io(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=q.useContext(Kn);qn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=q.useContext(yi),{pathname:f}=Zr(),m=dm(),g=hm(r,cm(c),f,a==="path"),y=JSON.stringify(g);return q.useEffect(()=>{m(JSON.parse(y),{replace:e,state:i,relative:a})},[m,y,a,e,i]),null}function Ms(r){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ib({basename:r="/",children:e=null,location:i,navigationType:a="POP",navigator:o,static:c=!1}){Xe(!io(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=q.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof i=="string"&&(i=to(i));let{pathname:g="/",search:y="",hash:A="",state:b=null,key:D="default"}=i,j=q.useMemo(()=>{let P=Zi(g,f);return P==null?null:{location:{pathname:P,search:y,hash:A,state:b,key:D},navigationType:a}},[f,g,y,A,b,D,a]);return qn(j!=null,`<Router basename="${f}"> is not able to match the URL "${g}${y}${A}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:q.createElement(Kn.Provider,{value:m},q.createElement(Pl.Provider,{children:e,value:j}))}function rb({children:r,location:e}){return FS(Bd(r),e)}function Bd(r,e=[]){let i=[];return q.Children.forEach(r,(a,o)=>{if(!q.isValidElement(a))return;let c=[...e,o];if(a.type===q.Fragment){i.push.apply(i,Bd(a.props.children,c));return}Xe(a.type===Ms,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=Bd(a.props.children,c)),i.push(f)}),i}var Sc="get",bc="application/x-www-form-urlencoded";function nh(r){return r!=null&&typeof r.tagName=="string"}function sb(r){return nh(r)&&r.tagName.toLowerCase()==="button"}function ab(r){return nh(r)&&r.tagName.toLowerCase()==="form"}function ob(r){return nh(r)&&r.tagName.toLowerCase()==="input"}function lb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ub(r,e){return r.button===0&&(!e||e==="_self")&&!lb(r)}var gc=null;function cb(){if(gc===null)try{new FormData(document.createElement("form"),0),gc=!1}catch{gc=!0}return gc}var hb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rd(r){return r!=null&&!hb.has(r)?(qn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bc}"`),null):r}function fb(r,e){let i,a,o,c,f;if(ab(r)){let m=r.getAttribute("action");a=m?Zi(m,e):null,i=r.getAttribute("method")||Sc,o=Rd(r.getAttribute("enctype"))||bc,c=new FormData(r)}else if(sb(r)||ob(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(a=g?Zi(g,e):null,i=r.getAttribute("formmethod")||m.getAttribute("method")||Sc,o=Rd(r.getAttribute("formenctype"))||Rd(m.getAttribute("enctype"))||bc,c=new FormData(m,r),!cb()){let{name:y,type:A,value:b}=r;if(A==="image"){let D=y?`${y}.`:"";c.append(`${D}x`,"0"),c.append(`${D}y`,"0")}else y&&c.append(y,b)}}else{if(nh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Sc,a=null,o=bc,f=r}return c&&o==="text/plain"&&(f=c,c=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:c,body:f}}function gm(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function db(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mb(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function pb(r,e,i){let a=await Promise.all(r.map(async o=>{let c=e.routes[o.route.id];if(c){let f=await db(c,i);return f.links?f.links():[]}return[]}));return _b(a.flat(1).filter(mb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function vv(r,e,i,a,o,c){let f=(g,y)=>i[y]?g.route.id!==i[y].route.id:!0,m=(g,y)=>{var A;return i[y].pathname!==g.pathname||((A=i[y].route.path)==null?void 0:A.endsWith("*"))&&i[y].params["*"]!==g.params["*"]};return c==="assets"?e.filter((g,y)=>f(g,y)||m(g,y)):c==="data"?e.filter((g,y)=>{var b;let A=a.routes[g.route.id];if(!A||!A.hasLoader)return!1;if(f(g,y)||m(g,y))return!0;if(g.route.shouldRevalidate){let D=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((b=i[0])==null?void 0:b.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function gb(r,e,{includeHydrateFallback:i}={}){return yb(r.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function yb(r){return[...new Set(r)]}function vb(r){let e={},i=Object.keys(r).sort();for(let a of i)e[a]=r[a];return e}function _b(r,e){let i=new Set;return new Set(e),r.reduce((a,o)=>{let c=JSON.stringify(vb(o));return i.has(c)||(i.add(c),a.push({key:c,link:o})),a},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Eb=new Set([100,101,204,205]);function Tb(r,e){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname="_root.data":e&&Zi(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function J_(){let r=q.useContext(no);return gm(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Ab(){let r=q.useContext(th);return gm(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ym=q.createContext(void 0);ym.displayName="FrameworkContext";function eE(){let r=q.useContext(ym);return gm(r,"You must render this element inside a <HydratedRouter> element"),r}function Sb(r,e){let i=q.useContext(ym),[a,o]=q.useState(!1),[c,f]=q.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:y,onMouseLeave:A,onTouchStart:b}=e,D=q.useRef(null);q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let Y=X=>{X.forEach(ie=>{f(ie.isIntersecting)})},F=new IntersectionObserver(Y,{threshold:.5});return D.current&&F.observe(D.current),()=>{F.disconnect()}}},[r]),q.useEffect(()=>{if(a){let Y=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(Y)}}},[a]);let j=()=>{o(!0)},P=()=>{o(!1),f(!1)};return i?r!=="intent"?[c,D,{}]:[c,D,{onFocus:yl(m,j),onBlur:yl(g,P),onMouseEnter:yl(y,j),onMouseLeave:yl(A,P),onTouchStart:yl(b,j)}]:[!1,D,{}]}function yl(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function bb({page:r,...e}){let{router:i}=J_(),a=q.useMemo(()=>F_(i.routes,r,i.basename),[i.routes,r,i.basename]);return a?q.createElement(Rb,{page:r,matches:a,...e}):null}function wb(r){let{manifest:e,routeModules:i}=eE(),[a,o]=q.useState([]);return q.useEffect(()=>{let c=!1;return pb(r,e,i).then(f=>{c||o(f)}),()=>{c=!0}},[r,e,i]),a}function Rb({page:r,matches:e,...i}){let a=Zr(),{manifest:o,routeModules:c}=eE(),{basename:f}=J_(),{loaderData:m,matches:g}=Ab(),y=q.useMemo(()=>vv(r,e,g,o,a,"data"),[r,e,g,o,a]),A=q.useMemo(()=>vv(r,e,g,o,a,"assets"),[r,e,g,o,a]),b=q.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let P=new Set,Y=!1;if(e.forEach(X=>{var te;let ie=o.routes[X.route.id];!ie||!ie.hasLoader||(!y.some(me=>me.route.id===X.route.id)&&X.route.id in m&&((te=c[X.route.id])!=null&&te.shouldRevalidate)||ie.hasClientLoader?Y=!0:P.add(X.route.id))}),P.size===0)return[];let F=Tb(r,f);return Y&&P.size>0&&F.searchParams.set("_routes",e.filter(X=>P.has(X.route.id)).map(X=>X.route.id).join(",")),[F.pathname+F.search]},[f,m,a,o,y,e,r,c]),D=q.useMemo(()=>gb(A,o),[A,o]),j=wb(A);return q.createElement(q.Fragment,null,b.map(P=>q.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...i})),D.map(P=>q.createElement("link",{key:P,rel:"modulepreload",href:P,...i})),j.map(({key:P,link:Y})=>q.createElement("link",{key:P,...Y})))}function Ib(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var tE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tE&&(window.__reactRouterVersion="7.6.0")}catch{}function Cb({basename:r,children:e,window:i}){let a=q.useRef();a.current==null&&(a.current=pS({window:i,v5Compat:!0}));let o=a.current,[c,f]=q.useState({action:o.action,location:o.location}),m=q.useCallback(g=>{q.startTransition(()=>f(g))},[f]);return q.useLayoutEffect(()=>o.listen(m),[o,m]),q.createElement(ib,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:o})}var nE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iE=q.forwardRef(function({onClick:e,discover:i="render",prefetch:a="none",relative:o,reloadDocument:c,replace:f,state:m,target:g,to:y,preventScrollReset:A,viewTransition:b,...D},j){let{basename:P}=q.useContext(Kn),Y=typeof y=="string"&&nE.test(y),F,X=!1;if(typeof y=="string"&&Y&&(F=y,tE))try{let S=new URL(window.location.href),I=y.startsWith("//")?new URL(S.protocol+y):new URL(y),x=Zi(I.pathname,P);I.origin===S.origin&&x!=null?y=x+I.search+I.hash:X=!0}catch{qn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ie=HS(y,{relative:o}),[te,me,he]=Sb(a,D),Ae=Nb(y,{replace:f,state:m,target:g,preventScrollReset:A,relative:o,viewTransition:b});function M(S){e&&e(S),S.defaultPrevented||Ae(S)}let w=q.createElement("a",{...D,...he,href:F||ie,onClick:X||c?e:M,ref:Ib(j,me),target:g,"data-discover":!Y&&i==="render"?"true":void 0});return te&&!Y?q.createElement(q.Fragment,null,w,q.createElement(bb,{page:ie})):w});iE.displayName="Link";var xs=q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:a="",end:o=!1,style:c,to:f,viewTransition:m,children:g,...y},A){let b=Ll(f,{relative:y.relative}),D=Zr(),j=q.useContext(th),{navigator:P,basename:Y}=q.useContext(Kn),F=j!=null&&Pb(b)&&m===!0,X=P.encodeLocation?P.encodeLocation(b).pathname:b.pathname,ie=D.pathname,te=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;i||(ie=ie.toLowerCase(),te=te?te.toLowerCase():null,X=X.toLowerCase()),te&&Y&&(te=Zi(te,Y)||te);const me=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let he=ie===X||!o&&ie.startsWith(X)&&ie.charAt(me)==="/",Ae=te!=null&&(te===X||!o&&te.startsWith(X)&&te.charAt(X.length)==="/"),M={isActive:he,isPending:Ae,isTransitioning:F},w=he?e:void 0,S;typeof a=="function"?S=a(M):S=[a,he?"active":null,Ae?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let I=typeof c=="function"?c(M):c;return q.createElement(iE,{...y,"aria-current":w,className:S,ref:A,style:I,to:f,viewTransition:m},typeof g=="function"?g(M):g)});xs.displayName="NavLink";var Db=q.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:a,replace:o,state:c,method:f=Sc,action:m,onSubmit:g,relative:y,preventScrollReset:A,viewTransition:b,...D},j)=>{let P=Vb(),Y=kb(m,{relative:y}),F=f.toLowerCase()==="get"?"get":"post",X=typeof m=="string"&&nE.test(m),ie=te=>{if(g&&g(te),te.defaultPrevented)return;te.preventDefault();let me=te.nativeEvent.submitter,he=(me==null?void 0:me.getAttribute("formmethod"))||f;P(me||te.currentTarget,{fetcherKey:e,method:he,navigate:i,replace:o,state:c,relative:y,preventScrollReset:A,viewTransition:b})};return q.createElement("form",{ref:j,method:F,action:Y,onSubmit:a?g:ie,...D,"data-discover":!X&&r==="render"?"true":void 0})});Db.displayName="Form";function Ob(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rE(r){let e=q.useContext(no);return Xe(e,Ob(r)),e}function Nb(r,{target:e,replace:i,state:a,preventScrollReset:o,relative:c,viewTransition:f}={}){let m=dm(),g=Zr(),y=Ll(r,{relative:c});return q.useCallback(A=>{if(ub(A,e)){A.preventDefault();let b=i!==void 0?i:Cl(g)===Cl(y);m(r,{replace:b,state:a,preventScrollReset:o,relative:c,viewTransition:f})}},[g,m,y,i,a,e,r,o,c,f])}var Mb=0,xb=()=>`__${String(++Mb)}__`;function Vb(){let{router:r}=rE("useSubmit"),{basename:e}=q.useContext(Kn),i=JS();return q.useCallback(async(a,o={})=>{let{action:c,method:f,encType:m,formData:g,body:y}=fb(a,e);if(o.navigate===!1){let A=o.fetcherKey||xb();await r.fetch(A,i,o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,i])}function kb(r,{relative:e}={}){let{basename:i}=q.useContext(Kn),a=q.useContext(yi);Xe(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...Ll(r||".",{relative:e})},f=Zr();if(r==null){c.search=f.search;let m=new URLSearchParams(c.search),g=m.getAll("index");if(g.some(A=>A==="")){m.delete("index"),g.filter(b=>b).forEach(b=>m.append("index",b));let A=m.toString();c.search=A?`?${A}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Yi([i,c.pathname])),Cl(c)}function Pb(r,e={}){let i=q.useContext(Y_);Xe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=rE("useViewTransitionState"),o=Ll(r,{relative:e.relative});if(!i.isTransitioning)return!1;let c=Zi(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=Zi(i.nextLocation.pathname,a)||i.nextLocation.pathname;return xc(o.pathname,f)!=null||xc(o.pathname,c)!=null}[...Eb];const Lb=()=>{};var _v={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=function(r){const e=[];let i=0;for(let a=0;a<r.length;a++){let o=r.charCodeAt(a);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++a)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Ub=function(r){const e=[];let i=0,a=0;for(;i<r.length;){const o=r[i++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[i++];e[a++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[i++],f=r[i++],m=r[i++],g=((o&7)<<18|(c&63)<<12|(f&63)<<6|m&63)-65536;e[a++]=String.fromCharCode(55296+(g>>10)),e[a++]=String.fromCharCode(56320+(g&1023))}else{const c=r[i++],f=r[i++];e[a++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return e.join("")},aE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,m=f?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,A=c>>2,b=(c&3)<<4|m>>4;let D=(m&15)<<2|y>>6,j=y&63;g||(j=64,f||(D=64)),a.push(i[A],i[b],i[D],i[j])}return a.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(sE(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ub(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<r.length;){const c=i[r.charAt(o++)],m=o<r.length?i[r.charAt(o)]:0;++o;const y=o<r.length?i[r.charAt(o)]:64;++o;const b=o<r.length?i[r.charAt(o)]:64;if(++o,c==null||m==null||y==null||b==null)throw new zb;const D=c<<2|m>>4;if(a.push(D),y!==64){const j=m<<4&240|y>>2;if(a.push(j),b!==64){const P=y<<6&192|b;a.push(P)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class zb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jb=function(r){const e=sE(r);return aE.encodeByteArray(e,!0)},Vc=function(r){return jb(r).replace(/\./g,"")},oE=function(r){try{return aE.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=()=>Bb().__FIREBASE_DEFAULTS__,qb=()=>{if(typeof process>"u"||typeof _v>"u")return;const r=_v.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Fb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&oE(r[1]);return e&&JSON.parse(e)},ih=()=>{try{return Lb()||Hb()||qb()||Fb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},lE=r=>{var e,i;return(i=(e=ih())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[r]},Gb=r=>{const e=lE(r);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),a]:[e.substring(0,i),a]},uE=()=>{var r;return(r=ih())===null||r===void 0?void 0:r.config},cE=r=>{var e;return(e=ih())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=e||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Vc(JSON.stringify(i)),Vc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function Qb(){var r;const e=(r=ih())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Wb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zb(){const r=$t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Jb(){return!Qb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fE(){try{return typeof indexedDB=="object"}catch{return!1}}function dE(){return new Promise((r,e)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;e(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}function ew(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="FirebaseError";class $n extends Error{constructor(e,i,a){super(i),this.code=e,this.customData=a,this.name=tw,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,i,a){this.service=e,this.serviceName=i,this.errors=a}create(e,...i){const a=i[0]||{},o=`${this.service}/${e}`,c=this.errors[e],f=c?nw(c,a):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new $n(o,m,a)}}function nw(r,e){return r.replace(iw,(i,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const iw=/\{\$([^}]+)}/g;function rw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function $r(r,e){if(r===e)return!0;const i=Object.keys(r),a=Object.keys(e);for(const o of i){if(!a.includes(o))return!1;const c=r[o],f=e[o];if(Ev(c)&&Ev(f)){if(!$r(c,f))return!1}else if(c!==f)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function Ev(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(r){const e=[];for(const[i,a]of Object.entries(r))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function _l(r){const e={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,c]=a.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function El(r){const e=r.indexOf("?");if(!e)return"";const i=r.indexOf("#",e);return r.substring(e,i>0?i:void 0)}function sw(r,e){const i=new aw(r,e);return i.subscribe.bind(i)}class aw{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,a){let o;if(e===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");ow(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:a},o.next===void 0&&(o.next=Id),o.error===void 0&&(o.error=Id),o.complete===void 0&&(o.complete=Id);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(r,e){if(typeof r!="object"||r===null)return!1;for(const i of e)if(i in r&&typeof r[i]=="function")return!0;return!1}function Id(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=1e3,uw=2,cw=4*60*60*1e3,hw=.5;function Tv(r,e=lw,i=uw){const a=e*Math.pow(i,r),o=Math.round(hw*a*(Math.random()-.5)*2);return Math.min(cw,a+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(r){return r&&r._delegate?r._delegate:r}class Fn{constructor(e,i,a){this.name=e,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const a=new Kb;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mw(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});a.resolve(c)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);a===m&&f.resolve(o)}return o}onInit(e,i){var a;const o=this.normalizeInstanceIdentifier(i),c=(a=this.onInitCallbacks.get(o))!==null&&a!==void 0?a:new Set;c.add(e),this.onInitCallbacks.set(o,c);const f=this.instances.get(o);return f&&e(f,o),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:dw(e),options:i}),this.instances.set(e,a),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dw(r){return r===Vs?void 0:r}function mw(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new fw(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(De||(De={}));const gw={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},yw=De.INFO,vw={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},_w=(r,e,...i)=>{if(e<r.logLevel)return;const a=new Date().toISOString(),o=vw[e];if(o)console[o](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rh{constructor(e){this.name=e,this._logLevel=yw,this._logHandler=_w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const Ew=(r,e)=>e.some(i=>r instanceof i);let Av,Sv;function Tw(){return Av||(Av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Aw(){return Sv||(Sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mE=new WeakMap,Hd=new WeakMap,pE=new WeakMap,Cd=new WeakMap,vm=new WeakMap;function Sw(r){const e=new Promise((i,a)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{i(Fr(r.result)),o()},f=()=>{a(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return e.then(i=>{i instanceof IDBCursor&&mE.set(i,r)}).catch(()=>{}),vm.set(e,r),e}function bw(r){if(Hd.has(r))return;const e=new Promise((i,a)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{i(),o()},f=()=>{a(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});Hd.set(r,e)}let qd={get(r,e,i){if(r instanceof IDBTransaction){if(e==="done")return Hd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||pE.get(r);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Fr(r[e])},set(r,e,i){return r[e]=i,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ww(r){qd=r(qd)}function Rw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const a=r.call(Dd(this),e,...i);return pE.set(a,e.sort?e.sort():[e]),Fr(a)}:Aw().includes(r)?function(...e){return r.apply(Dd(this),e),Fr(mE.get(this))}:function(...e){return Fr(r.apply(Dd(this),e))}}function Iw(r){return typeof r=="function"?Rw(r):(r instanceof IDBTransaction&&bw(r),Ew(r,Tw())?new Proxy(r,qd):r)}function Fr(r){if(r instanceof IDBRequest)return Sw(r);if(Cd.has(r))return Cd.get(r);const e=Iw(r);return e!==r&&(Cd.set(r,e),vm.set(e,r)),e}const Dd=r=>vm.get(r);function gE(r,e,{blocked:i,upgrade:a,blocking:o,terminated:c}={}){const f=indexedDB.open(r,e),m=Fr(f);return a&&f.addEventListener("upgradeneeded",g=>{a(Fr(f.result),g.oldVersion,g.newVersion,Fr(f.transaction),g)}),i&&f.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),m.then(g=>{c&&g.addEventListener("close",()=>c()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const Cw=["get","getKey","getAll","getAllKeys","count"],Dw=["put","add","delete","clear"],Od=new Map;function bv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Od.get(e))return Od.get(e);const i=e.replace(/FromIndex$/,""),a=e!==i,o=Dw.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||Cw.includes(i)))return;const c=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return a&&(y=y.index(m.shift())),(await Promise.all([y[i](...m),o&&g.done]))[0]};return Od.set(e,c),c}ww(r=>({...r,get:(e,i,a)=>bv(e,i)||r.get(e,i,a),has:(e,i)=>!!bv(e,i)||r.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Nw(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function Nw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fd="@firebase/app",wv="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new rh("@firebase/app"),Mw="@firebase/app-compat",xw="@firebase/analytics-compat",Vw="@firebase/analytics",kw="@firebase/app-check-compat",Pw="@firebase/app-check",Lw="@firebase/auth",Uw="@firebase/auth-compat",zw="@firebase/database",jw="@firebase/data-connect",Bw="@firebase/database-compat",Hw="@firebase/functions",qw="@firebase/functions-compat",Fw="@firebase/installations",Gw="@firebase/installations-compat",Kw="@firebase/messaging",$w="@firebase/messaging-compat",Yw="@firebase/performance",Qw="@firebase/performance-compat",Xw="@firebase/remote-config",Ww="@firebase/remote-config-compat",Zw="@firebase/storage",Jw="@firebase/storage-compat",eR="@firebase/firestore",tR="@firebase/vertexai",nR="@firebase/firestore-compat",iR="firebase",rR="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="[DEFAULT]",sR={[Fd]:"fire-core",[Mw]:"fire-core-compat",[Vw]:"fire-analytics",[xw]:"fire-analytics-compat",[Pw]:"fire-app-check",[kw]:"fire-app-check-compat",[Lw]:"fire-auth",[Uw]:"fire-auth-compat",[zw]:"fire-rtdb",[jw]:"fire-data-connect",[Bw]:"fire-rtdb-compat",[Hw]:"fire-fn",[qw]:"fire-fn-compat",[Fw]:"fire-iid",[Gw]:"fire-iid-compat",[Kw]:"fire-fcm",[$w]:"fire-fcm-compat",[Yw]:"fire-perf",[Qw]:"fire-perf-compat",[Xw]:"fire-rc",[Ww]:"fire-rc-compat",[Zw]:"fire-gcs",[Jw]:"fire-gcs-compat",[eR]:"fire-fst",[nR]:"fire-fst-compat",[tR]:"fire-vertex","fire-js":"fire-js",[iR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Map,aR=new Map,Kd=new Map;function Rv(r,e){try{r.container.addComponent(e)}catch(i){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,i)}}function mi(r){const e=r.name;if(Kd.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;Kd.set(e,r);for(const i of kc.values())Rv(i,r);for(const i of aR.values())Rv(i,r);return!0}function Ys(r,e){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(e)}function Mn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new $s("app","Firebase",oR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,i,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=rR;function yE(r,e={}){let i=r;typeof e!="object"&&(e={name:e});const a=Object.assign({name:Gd,automaticDataCollectionEnabled:!1},e),o=a.name;if(typeof o!="string"||!o)throw Gr.create("bad-app-name",{appName:String(o)});if(i||(i=uE()),!i)throw Gr.create("no-options");const c=kc.get(o);if(c){if($r(i,c.options)&&$r(a,c.config))return c;throw Gr.create("duplicate-app",{appName:o})}const f=new pw(o);for(const g of Kd.values())f.addComponent(g);const m=new lR(i,a,f);return kc.set(o,m),m}function _m(r=Gd){const e=kc.get(r);if(!e&&r===Gd&&uE())return yE();if(!e)throw Gr.create("no-app",{appName:r});return e}function xn(r,e,i){var a;let o=(a=sR[r])!==null&&a!==void 0?a:r;i&&(o+=`-${i}`);const c=o.match(/\s|\//),f=e.match(/\s|\//);if(c||f){const m=[`Unable to register library "${o}" with version "${e}":`];c&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(m.join(" "));return}mi(new Fn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="firebase-heartbeat-database",cR=1,Dl="firebase-heartbeat-store";let Nd=null;function vE(){return Nd||(Nd=gE(uR,cR,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Dl)}catch(i){console.warn(i)}}}}).catch(r=>{throw Gr.create("idb-open",{originalErrorMessage:r.message})})),Nd}async function hR(r){try{const i=(await vE()).transaction(Dl),a=await i.objectStore(Dl).get(_E(r));return await i.done,a}catch(e){if(e instanceof $n)Ji.warn(e.message);else{const i=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ji.warn(i.message)}}}async function Iv(r,e){try{const a=(await vE()).transaction(Dl,"readwrite");await a.objectStore(Dl).put(e,_E(r)),await a.done}catch(i){if(i instanceof $n)Ji.warn(i.message);else{const a=Gr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Ji.warn(a.message)}}}function _E(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=1024,dR=30;class mR{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new gR(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Cv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(f=>f.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>dR){const f=yR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Ji.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Cv(),{heartbeatsToSend:a,unsentEntries:o}=pR(this._heartbeatsCache.heartbeats),c=Vc(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Ji.warn(i),""}}}function Cv(){return new Date().toISOString().substring(0,10)}function pR(r,e=fR){const i=[];let a=r.slice();for(const o of r){const c=i.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),Dv(i)>e){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),Dv(i)>e){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class gR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fE()?dE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await hR(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Dv(r){return Vc(JSON.stringify({version:2,heartbeats:r})).length}function yR(r){if(r.length===0)return-1;let e=0,i=r[0].date;for(let a=1;a<r.length;a++)r[a].date<i&&(i=r[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(r){mi(new Fn("platform-logger",e=>new Ow(e),"PRIVATE")),mi(new Fn("heartbeat",e=>new mR(e),"PRIVATE")),xn(Fd,wv,r),xn(Fd,wv,"esm2017"),xn("fire-js","")}vR("");function Em(r,e){var i={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.indexOf(a)<0&&(i[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(r);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(r,a[o])&&(i[a[o]]=r[a[o]]);return i}function EE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _R=EE,TE=new $s("auth","Firebase",EE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new rh("@firebase/auth");function ER(r,...e){Pc.logLevel<=De.WARN&&Pc.warn(`Auth (${ro}): ${r}`,...e)}function wc(r,...e){Pc.logLevel<=De.ERROR&&Pc.error(`Auth (${ro}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,...e){throw Tm(r,...e)}function fi(r,...e){return Tm(r,...e)}function AE(r,e,i){const a=Object.assign(Object.assign({},_R()),{[e]:i});return new $s("auth","Firebase",a).create(e,{appName:r.name})}function Qi(r){return AE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tm(r,...e){if(typeof r!="string"){const i=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(i,...a)}return TE.create(r,...e)}function ge(r,e,...i){if(!r)throw Tm(e,...i)}function Gi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw wc(e),new Error(e)}function er(r,e){r||Gi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function TR(){return Ov()==="http:"||Ov()==="https:"}function Ov(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TR()||hE()||"connection"in navigator)?navigator.onLine:!0}function SR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,i){this.shortDelay=e,this.longDelay=i,er(i>e,"Short delay should be less than long delay!"),this.isMobile=Yb()||Wb()}get(){return AR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(r,e){er(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{static initialize(e,i,a){this.fetchImpl=e,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new zl(3e4,6e4);function Jr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function tr(r,e,i,a,o={}){return bE(r,o,async()=>{let c={},f={};a&&(e==="GET"?f=a:c={body:JSON.stringify(a)});const m=Ul(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:g},c);return Xb()||(y.referrerPolicy="no-referrer"),SE.fetch()(wE(r,r.config.apiHost,i,m),y)})}async function bE(r,e,i){r._canInitEmulator=!1;const a=Object.assign(Object.assign({},bR),e);try{const o=new IR(r),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw yc(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const m=c.ok?f.errorMessage:f.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw yc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw yc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw yc(r,"user-disabled",f);const A=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw AE(r,A,y);Gn(r,A)}}catch(o){if(o instanceof $n)throw o;Gn(r,"network-request-failed",{message:String(o)})}}async function jl(r,e,i,a,o={}){const c=await tr(r,e,i,a,o);return"mfaPendingCredential"in c&&Gn(r,"multi-factor-auth-required",{_serverResponse:c}),c}function wE(r,e,i,a){const o=`${e}${i}?${a}`;return r.config.emulator?Am(r.config,o):`${r.config.apiScheme}://${o}`}function RR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(fi(this.auth,"network-request-failed")),wR.get())})}}function yc(r,e,i){const a={appName:r.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const o=fi(r,e,a);return o.customData._tokenResponse=i,o}function Nv(r){return r!==void 0&&r.enterprise!==void 0}class CR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return RR(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DR(r,e){return tr(r,"GET","/v2/recaptchaConfig",Jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(r,e){return tr(r,"POST","/v1/accounts:delete",e)}async function RE(r,e){return tr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NR(r,e=!1){const i=jt(r),a=await i.getIdToken(e),o=Sm(a);ge(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c==null?void 0:c.sign_in_provider;return{claims:o,token:a,authTime:Al(Md(o.auth_time)),issuedAtTime:Al(Md(o.iat)),expirationTime:Al(Md(o.exp)),signInProvider:f||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Md(r){return Number(r)*1e3}function Sm(r){const[e,i,a]=r.split(".");if(e===void 0||i===void 0||a===void 0)return wc("JWT malformed, contained fewer than 3 sections"),null;try{const o=oE(i);return o?JSON.parse(o):(wc("Failed to decode base64 JWT payload"),null)}catch(o){return wc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Mv(r){const e=Sm(r);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(r,e,i=!1){if(i)return e;try{return await e}catch(a){throw a instanceof $n&&MR(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function MR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Al(this.lastLoginAt),this.creationTime=Al(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(r){var e;const i=r.auth,a=await r.getIdToken(),o=await Qa(r,RE(i,{idToken:a}));ge(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];r._notifyReloadListener(c);const f=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?IE(c.providerUserInfo):[],m=kR(r.providerData,f),g=r.isAnonymous,y=!(r.email&&c.passwordHash)&&!(m!=null&&m.length),A=g?y:!1,b={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:m,metadata:new Yd(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(r,b)}async function VR(r){const e=jt(r);await Lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kR(r,e){return[...r.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function IE(r){return r.map(e=>{var{providerId:i}=e,a=Em(e,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(r,e){const i=await bE(r,{},async()=>{const a=Ul({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,f=wE(r,o,"/v1/token",`key=${c}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",SE.fetch()(f,{method:"POST",headers:m,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function LR(r,e){return tr(r,"POST","/v2/accounts:revokeToken",Jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const i=Mv(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:a,refreshToken:o,expiresIn:c}=await PR(e,i);this.updateTokensAndExpiration(a,o,Number(c))}updateTokensAndExpiration(e,i,a){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,i){const{refreshToken:a,accessToken:o,expirationTime:c}=i,f=new Ga;return a&&(ge(typeof a=="string","internal-error",{appName:e}),f.refreshToken=a),o&&(ge(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),c&&(ge(typeof c=="number","internal-error",{appName:e}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ga,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(r,e){ge(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ki{constructor(e){var{uid:i,auth:a,stsTokenManager:o}=e,c=Em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Yd(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return ge(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return NR(this,e)}reload(){return VR(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Ki(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),i&&await Lc(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Qi(this.auth));const e=await this.getIdToken();return await Qa(this,OR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var a,o,c,f,m,g,y,A;const b=(a=i.displayName)!==null&&a!==void 0?a:void 0,D=(o=i.email)!==null&&o!==void 0?o:void 0,j=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,P=(f=i.photoURL)!==null&&f!==void 0?f:void 0,Y=(m=i.tenantId)!==null&&m!==void 0?m:void 0,F=(g=i._redirectEventId)!==null&&g!==void 0?g:void 0,X=(y=i.createdAt)!==null&&y!==void 0?y:void 0,ie=(A=i.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:te,emailVerified:me,isAnonymous:he,providerData:Ae,stsTokenManager:M}=i;ge(te&&M,e,"internal-error");const w=Ga.fromJSON(this.name,M);ge(typeof te=="string",e,"internal-error"),zr(b,e.name),zr(D,e.name),ge(typeof me=="boolean",e,"internal-error"),ge(typeof he=="boolean",e,"internal-error"),zr(j,e.name),zr(P,e.name),zr(Y,e.name),zr(F,e.name),zr(X,e.name),zr(ie,e.name);const S=new Ki({uid:te,auth:e,email:D,emailVerified:me,displayName:b,isAnonymous:he,photoURL:P,phoneNumber:j,tenantId:Y,stsTokenManager:w,createdAt:X,lastLoginAt:ie});return Ae&&Array.isArray(Ae)&&(S.providerData=Ae.map(I=>Object.assign({},I))),F&&(S._redirectEventId=F),S}static async _fromIdTokenResponse(e,i,a=!1){const o=new Ga;o.updateFromServerResponse(i);const c=new Ki({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await Lc(c),c}static async _fromGetAccountInfoResponse(e,i,a){const o=i.users[0];ge(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?IE(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),m=new Ga;m.updateFromIdToken(a);const g=new Ki({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Yd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new Map;function $i(r){er(r instanceof Function,"Expected a class definition");let e=xv.get(r);return e?(er(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,xv.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}CE.type="NONE";const Vv=CE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(r,e,i){return`firebase:${r}:${e}:${i}`}class Ka{constructor(e,i,a){this.persistence=e,this.auth=i,this.userKey=a;const{config:o,name:c}=this.auth;this.fullUserKey=Rc(this.userKey,o.apiKey,c),this.fullPersistenceKey=Rc("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ki._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,a="authUser"){if(!i.length)return new Ka($i(Vv),e,a);const o=(await Promise.all(i.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||$i(Vv);const f=Rc(a,e.config.apiKey,e.name);let m=null;for(const y of i)try{const A=await y._get(f);if(A){const b=Ki._fromJSON(e,A);y!==c&&(m=b),c=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new Ka(c,e,a):(c=g[0],m&&await c._set(f,m.toJSON()),await Promise.all(i.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new Ka(c,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ME(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VE(e))return"Blackberry";if(kE(e))return"Webos";if(OE(e))return"Safari";if((e.includes("chrome/")||NE(e))&&!e.includes("edge/"))return"Chrome";if(xE(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function DE(r=$t()){return/firefox\//i.test(r)}function OE(r=$t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NE(r=$t()){return/crios\//i.test(r)}function ME(r=$t()){return/iemobile/i.test(r)}function xE(r=$t()){return/android/i.test(r)}function VE(r=$t()){return/blackberry/i.test(r)}function kE(r=$t()){return/webos/i.test(r)}function bm(r=$t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function UR(r=$t()){var e;return bm(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zR(){return Zb()&&document.documentMode===10}function PE(r=$t()){return bm(r)||xE(r)||kE(r)||VE(r)||/windows phone/i.test(r)||ME(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(r,e=[]){let i;switch(r){case"Browser":i=kv($t());break;case"Worker":i=`${kv($t())}-${r}`;break;default:i=r}const a=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${ro}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const a=c=>new Promise((f,m)=>{try{const g=e(c);f(g)}catch(g){m(g)}});a.onAbort=i,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const a of this.queue)await a(e),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(r,e={}){return tr(r,"GET","/v2/passwordPolicy",Jr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=6;class qR{constructor(e){var i,a,o,c;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=f.minPasswordLength)!==null&&i!==void 0?i:HR,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,a,o,c,f,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(i=g.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(a=g.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(c=g.containsUppercaseLetter)!==null&&c!==void 0?c:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,i){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=e.length>=a),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,i,a,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,i,a,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pv(this),this.idTokenSubscription=new Pv(this),this.beforeStateQueue=new jR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=$i(i)),this._initializationPromise=this.queue(async()=>{var a,o;if(!this._deleted&&(this.persistenceManager=await Ka.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await RE(this,{idToken:e}),a=await Ki._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Mn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!f||f===m)&&(g!=null&&g.user)&&(o=g.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Lc(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(Qi(this));const i=e?jt(e):null;return i&&ge(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Qi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(Qi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($i(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BR(this),i=new qR(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,i,a){return this.registerStateListener(this.authStateSubscription,e,i,a)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,a){return this.registerStateListener(this.idTokenSubscription,e,i,a)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await LR(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const a=await this.getOrInitRedirectPersistenceManager(i);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&$i(e)||this._popupRedirectResolver;ge(i,this,"argument-error"),this.redirectPersistenceManager=await Ka.create(this,[$i(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,a,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(m,this,"internal-error"),m.then(()=>{f||c(this.currentUser)}),typeof i=="function"){const g=e.addObserver(i,a,o);return()=>{f=!0,g()}}else{const g=e.addObserver(i);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&ER(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Qs(r){return jt(r)}class Pv{constructor(e){this.auth=e,this.observer=null,this.addObserver=sw(i=>this.observer=i)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GR(r){sh=r}function UE(r){return sh.loadJS(r)}function KR(){return sh.recaptchaEnterpriseScript}function $R(){return sh.gapiScript}function YR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class QR{constructor(){this.enterprise=new XR}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class XR{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const WR="recaptcha-enterprise",zE="NO_RECAPTCHA";class ZR{constructor(e){this.type=WR,this.auth=Qs(e)}async verify(e="verify",i=!1){async function a(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,m)=>{DR(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new CR(g);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,f(y.siteKey)}}).catch(g=>{m(g)})})}function o(c,f,m){const g=window.grecaptcha;Nv(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:e}).then(y=>{f(y)}).catch(()=>{f(zE)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QR().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{a(this.auth).then(m=>{if(!i&&Nv(window.grecaptcha))o(m,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=KR();g.length!==0&&(g+=m),UE(g).then(()=>{o(m,c,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Lv(r,e,i,a=!1,o=!1){const c=new ZR(r);let f;if(o)f=zE;else try{f=await c.verify(i)}catch{f=await c.verify(i,!0)}const m=Object.assign({},e);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return a?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Qd(r,e,i,a,o){var c;if(!((c=r._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Lv(r,e,i,i==="getOobCode");return a(r,f)}else return a(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Lv(r,e,i,i==="getOobCode");return a(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(r,e){const i=Ys(r,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if($r(c,e??{}))return o;Gn(o,"already-initialized")}return i.initialize({options:e})}function e1(r,e){const i=(e==null?void 0:e.persistence)||[],a=(Array.isArray(i)?i:[i]).map($i);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function t1(r,e,i){const a=Qs(r);ge(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!1,c=jE(e),{host:f,port:m}=n1(e),g=m===null?"":`:${m}`,y={url:`${c}//${f}${g}/`},A=Object.freeze({host:f,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){ge(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ge($r(y,a.config.emulator)&&$r(A,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=y,a.emulatorConfig=A,a.settings.appVerificationDisabledForTesting=!0,i1()}function jE(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function n1(r){const e=jE(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const c=o[1];return{host:c,port:Uv(a.substr(c.length+1))}}else{const[c,f]=a.split(":");return{host:c,port:Uv(f)}}}function Uv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function i1(){function r(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Gi("not implemented")}_getIdTokenResponse(e){return Gi("not implemented")}_linkToIdToken(e,i){return Gi("not implemented")}_getReauthenticationResolver(e){return Gi("not implemented")}}async function r1(r,e){return tr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(r,e){return jl(r,"POST","/v1/accounts:signInWithPassword",Jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(r,e){return jl(r,"POST","/v1/accounts:signInWithEmailLink",Jr(r,e))}async function o1(r,e){return jl(r,"POST","/v1/accounts:signInWithEmailLink",Jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends wm{constructor(e,i,a,o=null){super("password",a),this._email=e,this._password=i,this._tenantId=o}static _fromEmailAndPassword(e,i){return new Ol(e,i,"password")}static _fromEmailAndCode(e,i,a=null){return new Ol(e,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qd(e,i,"signInWithPassword",s1);case"emailLink":return a1(e,{email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qd(e,a,"signUpPassword",r1);case"emailLink":return o1(e,{idToken:i,email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(r,e){return jl(r,"POST","/v1/accounts:signInWithIdp",Jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="http://localhost";class zs extends wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Gn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o}=i,c=Em(i,["providerId","signInMethod"]);if(!a||!o)return null;const f=new zs(a,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(e){const i=this.buildRequest();return $a(e,i)}_linkToIdToken(e,i){const a=this.buildRequest();return a.idToken=i,$a(e,a)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,$a(e,i)}buildRequest(){const e={requestUri:l1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Ul(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function c1(r){const e=_l(El(r)).link,i=e?_l(El(e)).deep_link_id:null,a=_l(El(r)).deep_link_id;return(a?_l(El(a)).link:null)||a||i||e||r}class Rm{constructor(e){var i,a,o,c,f,m;const g=_l(El(e)),y=(i=g.apiKey)!==null&&i!==void 0?i:null,A=(a=g.oobCode)!==null&&a!==void 0?a:null,b=u1((o=g.mode)!==null&&o!==void 0?o:null);ge(y&&A&&b,"argument-error"),this.apiKey=y,this.operation=b,this.code=A,this.continueUrl=(c=g.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(f=g.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const i=c1(e);try{return new Rm(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(e,i){return Ol._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const a=Rm.parseLink(i);return ge(a,"argument-error"),Ol._fromEmailAndCode(e,a.code,a.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends BE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Bl{constructor(){super("facebook.com")}static credential(e){return zs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return zs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:a}=e;if(!i&&!a)return null;try{return Br.credential(i,a)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Bl{constructor(){super("github.com")}static credential(e){return zs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Bl{constructor(){super("twitter.com")}static credential(e,i){return zs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=e;if(!i||!a)return null;try{return qr.credential(i,a)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(r,e){return jl(r,"POST","/v1/accounts:signUp",Jr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,a,o=!1){const c=await Ki._fromIdTokenResponse(e,a,o),f=zv(a);return new js({user:c,providerId:f,_tokenResponse:a,operationType:i})}static async _forOperation(e,i,a){await e._updateTokensIfNecessary(a,!0);const o=zv(a);return new js({user:e,providerId:o,_tokenResponse:a,operationType:i})}}function zv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends $n{constructor(e,i,a,o){var c;super(i.code,i.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,i,a,o){return new Uc(e,i,a,o)}}function HE(r,e,i,a){return(e==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(r,c,e,a):c})}async function f1(r,e,i=!1){const a=await Qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),i);return js._forOperation(r,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(r,e,i=!1){const{auth:a}=r;if(Mn(a.app))return Promise.reject(Qi(a));const o="reauthenticate";try{const c=await Qa(r,HE(a,o,e,r),i);ge(c.idToken,a,"internal-error");const f=Sm(c.idToken);ge(f,a,"internal-error");const{sub:m}=f;return ge(r.uid===m,a,"user-mismatch"),js._forOperation(r,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Gn(a,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(r,e,i=!1){if(Mn(r.app))return Promise.reject(Qi(r));const a="signIn",o=await HE(r,a,e),c=await js._fromIdTokenResponse(r,a,o);return i||await r._updateCurrentUser(c.user),c}async function m1(r,e){return qE(Qs(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE(r){const e=Qs(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function p1(r,e,i){if(Mn(r.app))return Promise.reject(Qi(r));const a=Qs(r),f=await Qd(a,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",h1).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&FE(r),g}),m=await js._fromIdTokenResponse(a,"signIn",f);return await a._updateCurrentUser(m.user),m}function g1(r,e,i){return Mn(r.app)?Promise.reject(Qi(r)):m1(jt(r),so.credential(e,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&FE(r),a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(r,e){return tr(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(r,{displayName:e,photoURL:i}){if(e===void 0&&i===void 0)return;const a=jt(r),c={idToken:await a.getIdToken(),displayName:e,photoUrl:i,returnSecureToken:!0},f=await Qa(a,y1(a.auth,c));a.displayName=f.displayName||null,a.photoURL=f.photoUrl||null;const m=a.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=a.displayName,m.photoURL=a.photoURL),await a._updateTokensIfNecessary(f)}function _1(r,e,i,a){return jt(r).onIdTokenChanged(e,i,a)}function E1(r,e,i){return jt(r).beforeAuthStateChanged(e,i)}function T1(r,e,i,a){return jt(r).onAuthStateChanged(e,i,a)}function A1(r){return jt(r).signOut()}const zc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=1e3,b1=10;class KE extends GE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),o=this.localCache[i];a!==o&&e(i,o,a)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const a=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(a);!i&&this.localCache[a]===f||this.notifyListeners(a,f)},c=this.storage.getItem(a);zR()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,b1):o()}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:a}),!0)})},S1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}KE.type="LOCAL";const w1=KE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends GE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}$E.type="SESSION";const YE=$E;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const a=new ah(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:a,eventType:o,data:c}=i.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const m=Array.from(f).map(async y=>y(i.origin,c)),g=await R1(m);i.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:g})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ah.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(r="",e=10){let i="";for(let a=0;a<e;a++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((m,g)=>{const y=Im("",20);o.port1.start();const A=setTimeout(()=>{g(new Error("unsupported_event"))},a);f={messageChannel:o,onMessage(b){const D=b;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(D.data.response);break;default:clearTimeout(A),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:i},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return window}function C1(r){di().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(){return typeof di().WorkerGlobalScope<"u"&&typeof di().importScripts=="function"}async function D1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function N1(){return QE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firebaseLocalStorageDb",M1=1,jc="firebaseLocalStorage",WE="fbase_key";class Hl{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function oh(r,e){return r.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function x1(){const r=indexedDB.deleteDatabase(XE);return new Hl(r).toPromise()}function Xd(){const r=indexedDB.open(XE,M1);return new Promise((e,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(jc,{keyPath:WE})}catch(o){i(o)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(jc)?e(a):(a.close(),await x1(),e(await Xd()))})})}async function jv(r,e,i){const a=oh(r,!0).put({[WE]:e,value:i});return new Hl(a).toPromise()}async function V1(r,e){const i=oh(r,!1).get(e),a=await new Hl(i).toPromise();return a===void 0?null:a.value}function Bv(r,e){const i=oh(r,!0).delete(e);return new Hl(i).toPromise()}const k1=800,P1=3;class ZE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xd(),this.db)}async _withRetries(e){let i=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(i++>P1)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ah._getInstance(N1()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await D1(),!this.activeServiceWorker)return;this.sender=new I1(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xd();return await jv(e,zc,"1"),await Bv(e,zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>jv(a,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(a=>V1(a,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Bv(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=oh(o,!1).getAll();return new Hl(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZE.type="LOCAL";const L1=ZE;new zl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(r,e){return e?$i(e):(ge(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $a(e,this._buildIdpRequest())}_linkToIdToken(e,i){return $a(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return $a(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function z1(r){return qE(r.auth,new Cm(r),r.bypassAuthState)}function j1(r){const{auth:e,user:i}=r;return ge(i,e,"internal-error"),d1(i,new Cm(r),r.bypassAuthState)}async function B1(r){const{auth:e,user:i}=r;return ge(i,e,"internal-error"),f1(i,new Cm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,i,a,o,c=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:a,postBody:o,tenantId:c,error:f,type:m}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:i,sessionId:a,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z1;case"linkViaPopup":case"linkViaRedirect":return B1;case"reauthViaPopup":case"reauthViaRedirect":return j1;default:Gn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new zl(2e3,1e4);class Fa extends JE{constructor(e,i,a,o,c){super(e,i,o,c),this.provider=a,this.authWindow=null,this.pollId=null,Fa.currentPopupAction&&Fa.currentPopupAction.cancel(),Fa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=Im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(fi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H1.get())};e()}}Fa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="pendingRedirect",Ic=new Map;class F1 extends JE{constructor(e,i,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let e=Ic.get(this.auth._key());if(!e){try{const a=await G1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(i){e=()=>Promise.reject(i)}Ic.set(this.auth._key(),e)}return this.bypassAuthState||Ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G1(r,e){const i=Y1(e),a=$1(r);if(!await a._isAvailable())return!1;const o=await a._get(i)==="true";return await a._remove(i),o}function K1(r,e){Ic.set(r._key(),e)}function $1(r){return $i(r._redirectPersistence)}function Y1(r){return Rc(q1,r.config.apiKey,r.name)}async function Q1(r,e,i=!1){if(Mn(r.app))return Promise.reject(Qi(r));const a=Qs(r),o=U1(a,e),f=await new F1(a,o,i).execute();return f&&!i&&(delete f.user._redirectEventId,await a._persistUserIfCurrent(f.user),await a._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=10*60*1e3;class W1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(i=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z1(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var a;if(e.error&&!e0(e)){const o=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(fi(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const a=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hv(e))}saveEventToCache(e){this.cachedEventUids.add(Hv(e)),this.lastProcessedEventTime=Date.now()}}function Hv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function e0({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Z1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return e0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(r,e={}){return tr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tI=/^https?/;async function nI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await J1(r);for(const i of e)try{if(iI(i))return}catch{}Gn(r,"unauthorized-domain")}function iI(r){const e=$d(),{protocol:i,hostname:a}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&a===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&f.hostname===a}if(!tI.test(i))return!1;if(eI.test(r))return a===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new zl(3e4,6e4);function qv(){const r=di().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function sI(r){return new Promise((e,i)=>{var a,o,c;function f(){qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qv(),i(fi(r,"network-request-failed"))},timeout:rI.get()})}if(!((o=(a=di().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((c=di().gapi)===null||c===void 0)&&c.load)f();else{const m=YR("iframefcb");return di()[m]=()=>{gapi.load?f():i(fi(r,"network-request-failed"))},UE(`${$R()}?onload=${m}`).catch(g=>i(g))}}).catch(e=>{throw Cc=null,e})}let Cc=null;function aI(r){return Cc=Cc||sI(r),Cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new zl(5e3,15e3),lI="__/auth/iframe",uI="emulator/auth/iframe",cI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fI(r){const e=r.config;ge(e.authDomain,r,"auth-domain-config-required");const i=e.emulator?Am(e,uI):`https://${r.config.authDomain}/${lI}`,a={apiKey:e.apiKey,appName:r.name,v:ro},o=hI.get(r.config.apiHost);o&&(a.eid=o);const c=r._getFrameworks();return c.length&&(a.fw=c.join(",")),`${i}?${Ul(a).slice(1)}`}async function dI(r){const e=await aI(r),i=di().gapi;return ge(i,r,"internal-error"),e.open({where:document.body,url:fI(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cI,dontclear:!0},a=>new Promise(async(o,c)=>{await a.restyle({setHideOnLeave:!1});const f=fi(r,"network-request-failed"),m=di().setTimeout(()=>{c(f)},oI.get());function g(){di().clearTimeout(m),o(a)}a.ping(g).then(g,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pI=500,gI=600,yI="_blank",vI="http://localhost";class Fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _I(r,e,i,a=pI,o=gI){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-a)/2,0).toString();let m="";const g=Object.assign(Object.assign({},mI),{width:a.toString(),height:o.toString(),top:c,left:f}),y=$t().toLowerCase();i&&(m=NE(y)?yI:i),DE(y)&&(e=e||vI,g.scrollbars="yes");const A=Object.entries(g).reduce((D,[j,P])=>`${D}${j}=${P},`,"");if(UR(y)&&m!=="_self")return EI(e||"",m),new Fv(null);const b=window.open(e||"",m,A);ge(b,r,"popup-blocked");try{b.focus()}catch{}return new Fv(b)}function EI(r,e){const i=document.createElement("a");i.href=r,i.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="__/auth/handler",AI="emulator/auth/handler",SI=encodeURIComponent("fac");async function Gv(r,e,i,a,o,c){ge(r.config.authDomain,r,"auth-domain-config-required"),ge(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:a,v:ro,eventId:o};if(e instanceof BE){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",rw(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,b]of Object.entries({}))f[A]=b}if(e instanceof Bl){const A=e.getScopes().filter(b=>b!=="");A.length>0&&(f.scopes=A.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const A of Object.keys(m))m[A]===void 0&&delete m[A];const g=await r._getAppCheckToken(),y=g?`#${SI}=${encodeURIComponent(g)}`:"";return`${bI(r)}?${Ul(m).slice(1)}${y}`}function bI({config:r}){return r.emulator?Am(r,AI):`https://${r.authDomain}/${TI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="webStorageSupport";class wI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YE,this._completeRedirectFn=Q1,this._overrideRedirectResult=K1}async _openPopup(e,i,a,o){var c;er((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const f=await Gv(e,i,a,$d(),o);return _I(e,f,Im())}async _openRedirect(e,i,a,o){await this._originValidation(e);const c=await Gv(e,i,a,$d(),o);return C1(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(er(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(e);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(e){const i=await dI(e),a=new W1(e);return i.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=i,a}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(xd,{type:xd},o=>{var c;const f=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[xd];f!==void 0&&i(!!f),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=nI(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return PE()||OE()||bm()}}const RI=wI;var Kv="@firebase/auth",$v="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DI(r){mi(new Fn("auth",(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=a.options;ge(f&&!f.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LE(r)},y=new FR(a,o,c,g);return e1(y,i),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,a)=>{e.getProvider("auth-internal").initialize()})),mi(new Fn("auth-internal",e=>{const i=Qs(e.getProvider("auth").getImmediate());return(a=>new II(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Kv,$v,CI(r)),xn(Kv,$v,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=5*60,NI=cE("authIdTokenMaxAge")||OI;let Yv=null;const MI=r=>async e=>{const i=e&&await e.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>NI)return;const o=i==null?void 0:i.token;Yv!==o&&(Yv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function t0(r=_m()){const e=Ys(r,"auth");if(e.isInitialized())return e.getImmediate();const i=JR(r,{popupRedirectResolver:RI,persistence:[L1,w1,YE]}),a=cE("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const f=MI(c.toString());E1(i,f,()=>f(i.currentUser)),_1(i,m=>f(m))}}const o=lE("auth");return o&&t1(i,`http://${o}`),i}function xI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}GR({loadJS(r){return new Promise((e,i)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=e,a.onerror=o=>{const c=fi("internal-error");c.customData=o,i(c)},a.type="text/javascript",a.charset="UTF-8",xI().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DI("Browser");const n0=q.createContext();function VI({children:r,value:e}){return $.jsx(n0.Provider,{value:e,children:r})}function i0(){return q.useContext(n0)}const kI="_navbar_q4mq3_1",PI="_brand_q4mq3_17",LI="_links_list_q4mq3_35",UI="_active_q4mq3_61",ci={navbar:kI,brand:PI,links_list:LI,active:UI},lh=()=>{const[r,e]=q.useState(null),[i,a]=q.useState(null),[o,c]=q.useState(!1),f=t0(),m=async A=>{a(!0);try{const{user:b}=await p1(f,A.email,A.password);return await v1(b,{displayName:A.displayName}),b}catch(b){console.log(b.message),console.log(typeof b.message);let D;b.message.includes("Password")?D="A senha precisa conter pelo menos 6 caracteres.":b.message.includes("email-already")?D="E-mail já cadastrado.":D="Ocorreu um erro, por favor tenta mais tarde.",e(D)}a(!1)},g=()=>{A1(f)},y=async A=>{a(!0),e(!1);try{await g1(f,A.email,A.password)}catch(b){console.log(b.message),console.log(typeof b.message),console.log(b.message.includes("user-not"));let D;b.message.includes("user-not-found")?D="Usuário não encontrado.":b.message.includes("wrong-password")?D="Senha incorreta.":D="Ocorreu um erro, por favor tenta mais tarde.",console.log(D),e(D)}console.log(r),a(!1)};return q.useEffect(()=>()=>c(!0),[]),{auth:f,createUser:m,error:r,logout:g,login:y,loading:i}},zI=()=>{const{logout:r}=lh(),{user:e}=i0();return console.log(e),$.jsx($.Fragment,{children:$.jsx("nav",{className:ci.navbar,children:$.jsxs("ul",{className:ci.links_list,children:[$.jsx(xs,{to:"/",className:ci.brand,activeClassName:ci.active,children:$.jsxs("li",{children:[$.jsx("span",{children:"Life"}),"Dev"]})}),!e&&$.jsxs($.Fragment,{children:[$.jsx("li",{children:$.jsx(xs,{to:"/login",className:({isActive:i})=>i?ci.active:"",children:"Entrar"})}),$.jsx("li",{children:$.jsx(xs,{to:"/register",className:({isActive:i})=>i?ci.active:"",children:"Cadastrar"})})]}),e&&$.jsxs($.Fragment,{children:[$.jsx("li",{children:$.jsx(xs,{to:"/dashboard",className:({isActive:i})=>i?ci.active:"",children:"Dashboard"})}),$.jsx("li",{children:$.jsx(xs,{to:"/posts/create",className:({isActive:i})=>i?ci.active:"",children:"Novo Post"})})]}),$.jsx("li",{children:$.jsx(xs,{to:"/about",className:({isActive:i})=>i?ci.active:"",children:"Sobre"})}),$.jsx("button",{onClick:r,className:ci.exit,children:"Exit"})]})})})},jI="_footer_1prom_1",BI={footer:jI},HI=()=>$.jsx($.Fragment,{children:$.jsxs("footer",{className:BI.footer,children:[$.jsx("h3",{children:"Plataforma de Postagem para  Desenvolvedores"}),$.jsx("p",{children:"Compartilhamento de experiencia de Nomade Life"}),$.jsx("p",{children:"SaudeTec - Fatec Matão © 2025 ®"})]})});var qI="firebase",FI="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(qI,FI,"app");const r0="@firebase/installations",Dm="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=1e4,a0=`w:${Dm}`,o0="FIS_v2",GI="https://firebaseinstallations.googleapis.com/v1",KI=60*60*1e3,$I="installations",YI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bs=new $s($I,YI,QI);function l0(r){return r instanceof $n&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0({projectId:r}){return`${GI}/projects/${r}/installations`}function c0(r){return{token:r.token,requestStatus:2,expiresIn:WI(r.expiresIn),creationTime:Date.now()}}async function h0(r,e){const a=(await e.json()).error;return Bs.create("request-failed",{requestName:r,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function f0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function XI(r,{refreshToken:e}){const i=f0(r);return i.append("Authorization",ZI(e)),i}async function d0(r){const e=await r();return e.status>=500&&e.status<600?r():e}function WI(r){return Number(r.replace("s","000"))}function ZI(r){return`${o0} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI({appConfig:r,heartbeatServiceProvider:e},{fid:i}){const a=u0(r),o=f0(r),c=e.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:i,authVersion:o0,appId:r.appId,sdkVersion:a0},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await d0(()=>fetch(a,m));if(g.ok){const y=await g.json();return{fid:y.fid||i,registrationStatus:2,refreshToken:y.refreshToken,authToken:c0(y.authToken)}}else throw await h0("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=/^[cdef][\w-]{21}$/,Wd="";function nC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=iC(r);return tC.test(i)?i:Wd}catch{return Wd}}function iC(r){return eC(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=new Map;function g0(r,e){const i=uh(r);y0(i,e),rC(i,e)}function y0(r,e){const i=p0.get(r);if(i)for(const a of i)a(e)}function rC(r,e){const i=sC();i&&i.postMessage({key:r,fid:e}),aC()}let ks=null;function sC(){return!ks&&"BroadcastChannel"in self&&(ks=new BroadcastChannel("[Firebase] FID Change"),ks.onmessage=r=>{y0(r.data.key,r.data.fid)}),ks}function aC(){p0.size===0&&ks&&(ks.close(),ks=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="firebase-installations-database",lC=1,Hs="firebase-installations-store";let Vd=null;function Om(){return Vd||(Vd=gE(oC,lC,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Hs)}}})),Vd}async function Bc(r,e){const i=uh(r),o=(await Om()).transaction(Hs,"readwrite"),c=o.objectStore(Hs),f=await c.get(i);return await c.put(e,i),await o.done,(!f||f.fid!==e.fid)&&g0(r,e.fid),e}async function v0(r){const e=uh(r),a=(await Om()).transaction(Hs,"readwrite");await a.objectStore(Hs).delete(e),await a.done}async function ch(r,e){const i=uh(r),o=(await Om()).transaction(Hs,"readwrite"),c=o.objectStore(Hs),f=await c.get(i),m=e(f);return m===void 0?await c.delete(i):await c.put(m,i),await o.done,m&&(!f||f.fid!==m.fid)&&g0(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(r){let e;const i=await ch(r.appConfig,a=>{const o=uC(a),c=cC(r,o);return e=c.registrationPromise,c.installationEntry});return i.fid===Wd?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function uC(r){const e=r||{fid:nC(),registrationStatus:0};return _0(e)}function cC(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Bs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=hC(r,i);return{installationEntry:i,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fC(r)}:{installationEntry:e}}async function hC(r,e){try{const i=await JI(r,e);return Bc(r.appConfig,i)}catch(i){throw l0(i)&&i.customData.serverCode===409?await v0(r.appConfig):await Bc(r.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function fC(r){let e=await Qv(r.appConfig);for(;e.registrationStatus===1;)await m0(100),e=await Qv(r.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:a}=await Nm(r);return a||i}return e}function Qv(r){return ch(r,e=>{if(!e)throw Bs.create("installation-not-found");return _0(e)})}function _0(r){return dC(r)?{fid:r.fid,registrationStatus:0}:r}function dC(r){return r.registrationStatus===1&&r.registrationTime+s0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC({appConfig:r,heartbeatServiceProvider:e},i){const a=pC(r,i),o=XI(r,i),c=e.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:a0,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await d0(()=>fetch(a,m));if(g.ok){const y=await g.json();return c0(y)}else throw await h0("Generate Auth Token",g)}function pC(r,{fid:e}){return`${u0(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(r,e=!1){let i;const a=await ch(r.appConfig,c=>{if(!E0(c))throw Bs.create("not-registered");const f=c.authToken;if(!e&&vC(f))return c;if(f.requestStatus===1)return i=gC(r,e),c;{if(!navigator.onLine)throw Bs.create("app-offline");const m=EC(c);return i=yC(r,m),m}});return i?await i:a.authToken}async function gC(r,e){let i=await Xv(r.appConfig);for(;i.authToken.requestStatus===1;)await m0(100),i=await Xv(r.appConfig);const a=i.authToken;return a.requestStatus===0?Mm(r,e):a}function Xv(r){return ch(r,e=>{if(!E0(e))throw Bs.create("not-registered");const i=e.authToken;return TC(i)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yC(r,e){try{const i=await mC(r,e),a=Object.assign(Object.assign({},e),{authToken:i});return await Bc(r.appConfig,a),i}catch(i){if(l0(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await v0(r.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bc(r.appConfig,a)}throw i}}function E0(r){return r!==void 0&&r.registrationStatus===2}function vC(r){return r.requestStatus===2&&!_C(r)}function _C(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+KI}function EC(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function TC(r){return r.requestStatus===1&&r.requestTime+s0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(r){const e=r,{installationEntry:i,registrationPromise:a}=await Nm(e);return a?a.catch(console.error):Mm(e).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(r,e=!1){const i=r;return await bC(i),(await Mm(i,e)).token}async function bC(r){const{registrationPromise:e}=await Nm(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(r){if(!r||!r.options)throw kd("App Configuration");if(!r.name)throw kd("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!r.options[i])throw kd(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function kd(r){return Bs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="installations",RC="installations-internal",IC=r=>{const e=r.getProvider("app").getImmediate(),i=wC(e),a=Ys(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},CC=r=>{const e=r.getProvider("app").getImmediate(),i=Ys(e,T0).getImmediate();return{getId:()=>AC(i),getToken:o=>SC(i,o)}};function DC(){mi(new Fn(T0,IC,"PUBLIC")),mi(new Fn(RC,CC,"PRIVATE"))}DC();xn(r0,Dm);xn(r0,Dm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="analytics",OC="firebase_id",NC="origin",MC=60*1e3,xC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new rh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mn=new $s("analytics","Analytics",VC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(r){if(!r.startsWith(xm)){const e=mn.create("invalid-gtag-resource",{gtagURL:r});return sn.warn(e.message),""}return r}function A0(r){return Promise.all(r.map(e=>e.catch(i=>i)))}function PC(r,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,e)),i}function LC(r,e){const i=PC("firebase-js-sdk-policy",{createScriptURL:kC}),a=document.createElement("script"),o=`${xm}?l=${r}&id=${e}`;a.src=i?i==null?void 0:i.createScriptURL(o):o,a.async=!0,document.head.appendChild(a)}function UC(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function zC(r,e,i,a,o,c){const f=a[o];try{if(f)await e[f];else{const g=(await A0(i)).find(y=>y.measurementId===o);g&&await e[g.appId]}}catch(m){sn.error(m)}r("config",o,c)}async function jC(r,e,i,a,o){try{let c=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await A0(i);for(const g of f){const y=m.find(b=>b.measurementId===g),A=y&&e[y.appId];if(A)c.push(A);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),r("event",a,o||{})}catch(c){sn.error(c)}}function BC(r,e,i,a){async function o(c,...f){try{if(c==="event"){const[m,g]=f;await jC(r,e,i,m,g)}else if(c==="config"){const[m,g]=f;await zC(r,e,i,a,m,g)}else if(c==="consent"){const[m,g]=f;r("consent",m,g)}else if(c==="get"){const[m,g,y]=f;r("get",m,g,y)}else if(c==="set"){const[m]=f;r("set",m)}else r(c,...f)}catch(m){sn.error(m)}}return o}function HC(r,e,i,a,o){let c=function(...f){window[a].push(arguments)};return window[o]&&typeof window[o]=="function"&&(c=window[o]),window[o]=BC(c,r,e,i),{gtagCore:c,wrappedGtag:window[o]}}function qC(r){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(xm)&&i.src.includes(r))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=30,GC=1e3;class KC{constructor(e={},i=GC){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const S0=new KC;function $C(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function YC(r){var e;const{appId:i,apiKey:a}=r,o={method:"GET",headers:$C(a)},c=xC.replace("{app-id}",i),f=await fetch(c,o);if(f.status!==200&&f.status!==304){let m="";try{const g=await f.json();!((e=g.error)===null||e===void 0)&&e.message&&(m=g.error.message)}catch{}throw mn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function QC(r,e=S0,i){const{appId:a,apiKey:o,measurementId:c}=r.options;if(!a)throw mn.create("no-app-id");if(!o){if(c)return{measurementId:c,appId:a};throw mn.create("no-api-key")}const f=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new ZC;return setTimeout(async()=>{m.abort()},MC),b0({appId:a,apiKey:o,measurementId:c},f,m,e)}async function b0(r,{throttleEndTimeMillis:e,backoffCount:i},a,o=S0){var c;const{appId:f,measurementId:m}=r;try{await XC(a,e)}catch(g){if(m)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:m};throw g}try{const g=await YC(r);return o.deleteThrottleMetadata(f),g}catch(g){const y=g;if(!WC(y)){if(o.deleteThrottleMetadata(f),m)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw g}const A=Number((c=y==null?void 0:y.customData)===null||c===void 0?void 0:c.httpStatus)===503?Tv(i,o.intervalMillis,FC):Tv(i,o.intervalMillis),b={throttleEndTimeMillis:Date.now()+A,backoffCount:i+1};return o.setThrottleMetadata(f,b),sn.debug(`Calling attemptFetch again in ${A} millis`),b0(r,b,a,o)}}function XC(r,e){return new Promise((i,a)=>{const o=Math.max(e-Date.now(),0),c=setTimeout(i,o);r.addEventListener(()=>{clearTimeout(c),a(mn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function WC(r){if(!(r instanceof $n)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JC(r,e,i,a,o){if(o&&o.global){r("event",i,a);return}else{const c=await e,f=Object.assign(Object.assign({},a),{send_to:c});r("event",i,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(){if(fE())try{await dE()}catch(r){return sn.warn(mn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return sn.warn(mn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tD(r,e,i,a,o,c,f){var m;const g=QC(r);g.then(j=>{i[j.measurementId]=j.appId,r.options.measurementId&&j.measurementId!==r.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${j.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(j=>sn.error(j)),e.push(g);const y=eD().then(j=>{if(j)return a.getId()}),[A,b]=await Promise.all([g,y]);qC(c)||LC(c,A.measurementId),o("js",new Date);const D=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return D[NC]="firebase",D.update=!0,b!=null&&(D[OC]=b),o("config",A.measurementId,D),A.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.app=e}_delete(){return delete Sl[this.app.options.appId],Promise.resolve()}}let Sl={},Wv=[];const Zv={};let Pd="dataLayer",iD="gtag",Jv,w0,e_=!1;function rD(){const r=[];if(hE()&&r.push("This is a browser extension environment."),ew()||r.push("Cookies are not available."),r.length>0){const e=r.map((a,o)=>`(${o+1}) ${a}`).join(" "),i=mn.create("invalid-analytics-context",{errorInfo:e});sn.warn(i.message)}}function sD(r,e,i){rD();const a=r.options.appId;if(!a)throw mn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mn.create("no-api-key");if(Sl[a]!=null)throw mn.create("already-exists",{id:a});if(!e_){UC(Pd);const{wrappedGtag:c,gtagCore:f}=HC(Sl,Wv,Zv,Pd,iD);w0=c,Jv=f,e_=!0}return Sl[a]=tD(r,Wv,Zv,e,Jv,Pd,i),new nD(r)}function aD(r=_m()){r=jt(r);const e=Ys(r,Hc);return e.isInitialized()?e.getImmediate():oD(r)}function oD(r,e={}){const i=Ys(r,Hc);if(i.isInitialized()){const o=i.getImmediate();if($r(e,i.getOptions()))return o;throw mn.create("already-initialized")}return i.initialize({options:e})}function lD(r,e,i,a){r=jt(r),JC(w0,Sl[r.app.options.appId],e,i,a).catch(o=>sn.error(o))}const t_="@firebase/analytics",n_="0.10.12";function uD(){mi(new Fn(Hc,(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return sD(a,o,i)},"PUBLIC")),mi(new Fn("analytics-internal",r,"PRIVATE")),xn(t_,n_),xn(t_,n_,"esm2017");function r(e){try{const i=e.getProvider(Hc).getImmediate();return{logEvent:(a,o,c)=>lD(i,a,o,c)}}catch(i){throw mn.create("interop-component-reg-failed",{reason:i})}}}uD();var i_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vm;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,w){function S(){}S.prototype=w.prototype,M.D=w.prototype,M.prototype=new S,M.prototype.constructor=M,M.C=function(I,x,U){for(var C=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)C[pt-2]=arguments[pt];return w.prototype[x].apply(I,C)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,w,S){S||(S=0);var I=Array(16);if(typeof w=="string")for(var x=0;16>x;++x)I[x]=w.charCodeAt(S++)|w.charCodeAt(S++)<<8|w.charCodeAt(S++)<<16|w.charCodeAt(S++)<<24;else for(x=0;16>x;++x)I[x]=w[S++]|w[S++]<<8|w[S++]<<16|w[S++]<<24;w=M.g[0],S=M.g[1],x=M.g[2];var U=M.g[3],C=w+(U^S&(x^U))+I[0]+3614090360&4294967295;w=S+(C<<7&4294967295|C>>>25),C=U+(x^w&(S^x))+I[1]+3905402710&4294967295,U=w+(C<<12&4294967295|C>>>20),C=x+(S^U&(w^S))+I[2]+606105819&4294967295,x=U+(C<<17&4294967295|C>>>15),C=S+(w^x&(U^w))+I[3]+3250441966&4294967295,S=x+(C<<22&4294967295|C>>>10),C=w+(U^S&(x^U))+I[4]+4118548399&4294967295,w=S+(C<<7&4294967295|C>>>25),C=U+(x^w&(S^x))+I[5]+1200080426&4294967295,U=w+(C<<12&4294967295|C>>>20),C=x+(S^U&(w^S))+I[6]+2821735955&4294967295,x=U+(C<<17&4294967295|C>>>15),C=S+(w^x&(U^w))+I[7]+4249261313&4294967295,S=x+(C<<22&4294967295|C>>>10),C=w+(U^S&(x^U))+I[8]+1770035416&4294967295,w=S+(C<<7&4294967295|C>>>25),C=U+(x^w&(S^x))+I[9]+2336552879&4294967295,U=w+(C<<12&4294967295|C>>>20),C=x+(S^U&(w^S))+I[10]+4294925233&4294967295,x=U+(C<<17&4294967295|C>>>15),C=S+(w^x&(U^w))+I[11]+2304563134&4294967295,S=x+(C<<22&4294967295|C>>>10),C=w+(U^S&(x^U))+I[12]+1804603682&4294967295,w=S+(C<<7&4294967295|C>>>25),C=U+(x^w&(S^x))+I[13]+4254626195&4294967295,U=w+(C<<12&4294967295|C>>>20),C=x+(S^U&(w^S))+I[14]+2792965006&4294967295,x=U+(C<<17&4294967295|C>>>15),C=S+(w^x&(U^w))+I[15]+1236535329&4294967295,S=x+(C<<22&4294967295|C>>>10),C=w+(x^U&(S^x))+I[1]+4129170786&4294967295,w=S+(C<<5&4294967295|C>>>27),C=U+(S^x&(w^S))+I[6]+3225465664&4294967295,U=w+(C<<9&4294967295|C>>>23),C=x+(w^S&(U^w))+I[11]+643717713&4294967295,x=U+(C<<14&4294967295|C>>>18),C=S+(U^w&(x^U))+I[0]+3921069994&4294967295,S=x+(C<<20&4294967295|C>>>12),C=w+(x^U&(S^x))+I[5]+3593408605&4294967295,w=S+(C<<5&4294967295|C>>>27),C=U+(S^x&(w^S))+I[10]+38016083&4294967295,U=w+(C<<9&4294967295|C>>>23),C=x+(w^S&(U^w))+I[15]+3634488961&4294967295,x=U+(C<<14&4294967295|C>>>18),C=S+(U^w&(x^U))+I[4]+3889429448&4294967295,S=x+(C<<20&4294967295|C>>>12),C=w+(x^U&(S^x))+I[9]+568446438&4294967295,w=S+(C<<5&4294967295|C>>>27),C=U+(S^x&(w^S))+I[14]+3275163606&4294967295,U=w+(C<<9&4294967295|C>>>23),C=x+(w^S&(U^w))+I[3]+4107603335&4294967295,x=U+(C<<14&4294967295|C>>>18),C=S+(U^w&(x^U))+I[8]+1163531501&4294967295,S=x+(C<<20&4294967295|C>>>12),C=w+(x^U&(S^x))+I[13]+2850285829&4294967295,w=S+(C<<5&4294967295|C>>>27),C=U+(S^x&(w^S))+I[2]+4243563512&4294967295,U=w+(C<<9&4294967295|C>>>23),C=x+(w^S&(U^w))+I[7]+1735328473&4294967295,x=U+(C<<14&4294967295|C>>>18),C=S+(U^w&(x^U))+I[12]+2368359562&4294967295,S=x+(C<<20&4294967295|C>>>12),C=w+(S^x^U)+I[5]+4294588738&4294967295,w=S+(C<<4&4294967295|C>>>28),C=U+(w^S^x)+I[8]+2272392833&4294967295,U=w+(C<<11&4294967295|C>>>21),C=x+(U^w^S)+I[11]+1839030562&4294967295,x=U+(C<<16&4294967295|C>>>16),C=S+(x^U^w)+I[14]+4259657740&4294967295,S=x+(C<<23&4294967295|C>>>9),C=w+(S^x^U)+I[1]+2763975236&4294967295,w=S+(C<<4&4294967295|C>>>28),C=U+(w^S^x)+I[4]+1272893353&4294967295,U=w+(C<<11&4294967295|C>>>21),C=x+(U^w^S)+I[7]+4139469664&4294967295,x=U+(C<<16&4294967295|C>>>16),C=S+(x^U^w)+I[10]+3200236656&4294967295,S=x+(C<<23&4294967295|C>>>9),C=w+(S^x^U)+I[13]+681279174&4294967295,w=S+(C<<4&4294967295|C>>>28),C=U+(w^S^x)+I[0]+3936430074&4294967295,U=w+(C<<11&4294967295|C>>>21),C=x+(U^w^S)+I[3]+3572445317&4294967295,x=U+(C<<16&4294967295|C>>>16),C=S+(x^U^w)+I[6]+76029189&4294967295,S=x+(C<<23&4294967295|C>>>9),C=w+(S^x^U)+I[9]+3654602809&4294967295,w=S+(C<<4&4294967295|C>>>28),C=U+(w^S^x)+I[12]+3873151461&4294967295,U=w+(C<<11&4294967295|C>>>21),C=x+(U^w^S)+I[15]+530742520&4294967295,x=U+(C<<16&4294967295|C>>>16),C=S+(x^U^w)+I[2]+3299628645&4294967295,S=x+(C<<23&4294967295|C>>>9),C=w+(x^(S|~U))+I[0]+4096336452&4294967295,w=S+(C<<6&4294967295|C>>>26),C=U+(S^(w|~x))+I[7]+1126891415&4294967295,U=w+(C<<10&4294967295|C>>>22),C=x+(w^(U|~S))+I[14]+2878612391&4294967295,x=U+(C<<15&4294967295|C>>>17),C=S+(U^(x|~w))+I[5]+4237533241&4294967295,S=x+(C<<21&4294967295|C>>>11),C=w+(x^(S|~U))+I[12]+1700485571&4294967295,w=S+(C<<6&4294967295|C>>>26),C=U+(S^(w|~x))+I[3]+2399980690&4294967295,U=w+(C<<10&4294967295|C>>>22),C=x+(w^(U|~S))+I[10]+4293915773&4294967295,x=U+(C<<15&4294967295|C>>>17),C=S+(U^(x|~w))+I[1]+2240044497&4294967295,S=x+(C<<21&4294967295|C>>>11),C=w+(x^(S|~U))+I[8]+1873313359&4294967295,w=S+(C<<6&4294967295|C>>>26),C=U+(S^(w|~x))+I[15]+4264355552&4294967295,U=w+(C<<10&4294967295|C>>>22),C=x+(w^(U|~S))+I[6]+2734768916&4294967295,x=U+(C<<15&4294967295|C>>>17),C=S+(U^(x|~w))+I[13]+1309151649&4294967295,S=x+(C<<21&4294967295|C>>>11),C=w+(x^(S|~U))+I[4]+4149444226&4294967295,w=S+(C<<6&4294967295|C>>>26),C=U+(S^(w|~x))+I[11]+3174756917&4294967295,U=w+(C<<10&4294967295|C>>>22),C=x+(w^(U|~S))+I[2]+718787259&4294967295,x=U+(C<<15&4294967295|C>>>17),C=S+(U^(x|~w))+I[9]+3951481745&4294967295,M.g[0]=M.g[0]+w&4294967295,M.g[1]=M.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,M.g[2]=M.g[2]+x&4294967295,M.g[3]=M.g[3]+U&4294967295}a.prototype.u=function(M,w){w===void 0&&(w=M.length);for(var S=w-this.blockSize,I=this.B,x=this.h,U=0;U<w;){if(x==0)for(;U<=S;)o(this,M,U),U+=this.blockSize;if(typeof M=="string"){for(;U<w;)if(I[x++]=M.charCodeAt(U++),x==this.blockSize){o(this,I),x=0;break}}else for(;U<w;)if(I[x++]=M[U++],x==this.blockSize){o(this,I),x=0;break}}this.h=x,this.o+=w},a.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var w=1;w<M.length-8;++w)M[w]=0;var S=8*this.o;for(w=M.length-8;w<M.length;++w)M[w]=S&255,S/=256;for(this.u(M),M=Array(16),w=S=0;4>w;++w)for(var I=0;32>I;I+=8)M[S++]=this.g[w]>>>I&255;return M};function c(M,w){var S=m;return Object.prototype.hasOwnProperty.call(S,M)?S[M]:S[M]=w(M)}function f(M,w){this.h=w;for(var S=[],I=!0,x=M.length-1;0<=x;x--){var U=M[x]|0;I&&U==w||(S[x]=U,I=!1)}this.g=S}var m={};function g(M){return-128<=M&&128>M?c(M,function(w){return new f([w|0],0>w?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return b;if(0>M)return F(y(-M));for(var w=[],S=1,I=0;M>=S;I++)w[I]=M/S|0,S*=4294967296;return new f(w,0)}function A(M,w){if(M.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(M.charAt(0)=="-")return F(A(M.substring(1),w));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(w,8)),I=b,x=0;x<M.length;x+=8){var U=Math.min(8,M.length-x),C=parseInt(M.substring(x,x+U),w);8>U?(U=y(Math.pow(w,U)),I=I.j(U).add(y(C))):(I=I.j(S),I=I.add(y(C)))}return I}var b=g(0),D=g(1),j=g(16777216);r=f.prototype,r.m=function(){if(Y(this))return-F(this).m();for(var M=0,w=1,S=0;S<this.g.length;S++){var I=this.i(S);M+=(0<=I?I:4294967296+I)*w,w*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(P(this))return"0";if(Y(this))return"-"+F(this).toString(M);for(var w=y(Math.pow(M,6)),S=this,I="";;){var x=me(S,w).g;S=X(S,x.j(w));var U=((0<S.g.length?S.g[0]:S.h)>>>0).toString(M);if(S=x,P(S))return U+I;for(;6>U.length;)U="0"+U;I=U+I}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function P(M){if(M.h!=0)return!1;for(var w=0;w<M.g.length;w++)if(M.g[w]!=0)return!1;return!0}function Y(M){return M.h==-1}r.l=function(M){return M=X(this,M),Y(M)?-1:P(M)?0:1};function F(M){for(var w=M.g.length,S=[],I=0;I<w;I++)S[I]=~M.g[I];return new f(S,~M.h).add(D)}r.abs=function(){return Y(this)?F(this):this},r.add=function(M){for(var w=Math.max(this.g.length,M.g.length),S=[],I=0,x=0;x<=w;x++){var U=I+(this.i(x)&65535)+(M.i(x)&65535),C=(U>>>16)+(this.i(x)>>>16)+(M.i(x)>>>16);I=C>>>16,U&=65535,C&=65535,S[x]=C<<16|U}return new f(S,S[S.length-1]&-2147483648?-1:0)};function X(M,w){return M.add(F(w))}r.j=function(M){if(P(this)||P(M))return b;if(Y(this))return Y(M)?F(this).j(F(M)):F(F(this).j(M));if(Y(M))return F(this.j(F(M)));if(0>this.l(j)&&0>M.l(j))return y(this.m()*M.m());for(var w=this.g.length+M.g.length,S=[],I=0;I<2*w;I++)S[I]=0;for(I=0;I<this.g.length;I++)for(var x=0;x<M.g.length;x++){var U=this.i(I)>>>16,C=this.i(I)&65535,pt=M.i(x)>>>16,ut=M.i(x)&65535;S[2*I+2*x]+=C*ut,ie(S,2*I+2*x),S[2*I+2*x+1]+=U*ut,ie(S,2*I+2*x+1),S[2*I+2*x+1]+=C*pt,ie(S,2*I+2*x+1),S[2*I+2*x+2]+=U*pt,ie(S,2*I+2*x+2)}for(I=0;I<w;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=w;I<2*w;I++)S[I]=0;return new f(S,0)};function ie(M,w){for(;(M[w]&65535)!=M[w];)M[w+1]+=M[w]>>>16,M[w]&=65535,w++}function te(M,w){this.g=M,this.h=w}function me(M,w){if(P(w))throw Error("division by zero");if(P(M))return new te(b,b);if(Y(M))return w=me(F(M),w),new te(F(w.g),F(w.h));if(Y(w))return w=me(M,F(w)),new te(F(w.g),w.h);if(30<M.g.length){if(Y(M)||Y(w))throw Error("slowDivide_ only works with positive integers.");for(var S=D,I=w;0>=I.l(M);)S=he(S),I=he(I);var x=Ae(S,1),U=Ae(I,1);for(I=Ae(I,2),S=Ae(S,2);!P(I);){var C=U.add(I);0>=C.l(M)&&(x=x.add(S),U=C),I=Ae(I,1),S=Ae(S,1)}return w=X(M,x.j(w)),new te(x,w)}for(x=b;0<=M.l(w);){for(S=Math.max(1,Math.floor(M.m()/w.m())),I=Math.ceil(Math.log(S)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),U=y(S),C=U.j(w);Y(C)||0<C.l(M);)S-=I,U=y(S),C=U.j(w);P(U)&&(U=D),x=x.add(U),M=X(M,C)}return new te(x,M)}r.A=function(M){return me(this,M).h},r.and=function(M){for(var w=Math.max(this.g.length,M.g.length),S=[],I=0;I<w;I++)S[I]=this.i(I)&M.i(I);return new f(S,this.h&M.h)},r.or=function(M){for(var w=Math.max(this.g.length,M.g.length),S=[],I=0;I<w;I++)S[I]=this.i(I)|M.i(I);return new f(S,this.h|M.h)},r.xor=function(M){for(var w=Math.max(this.g.length,M.g.length),S=[],I=0;I<w;I++)S[I]=this.i(I)^M.i(I);return new f(S,this.h^M.h)};function he(M){for(var w=M.g.length+1,S=[],I=0;I<w;I++)S[I]=M.i(I)<<1|M.i(I-1)>>>31;return new f(S,M.h)}function Ae(M,w){var S=w>>5;w%=32;for(var I=M.g.length-S,x=[],U=0;U<I;U++)x[U]=0<w?M.i(U+S)>>>w|M.i(U+S+1)<<32-w:M.i(U+S);return new f(x,M.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=A,Vm=f}).apply(typeof i_<"u"?i_:typeof self<"u"?self:typeof window<"u"?window:{});var vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var R0,Tl,I0,Dc,Zd,C0,D0,O0;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,v){return u==Array.prototype||u==Object.prototype||(u[p]=v.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof vc=="object"&&vc];for(var p=0;p<u.length;++p){var v=u[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=i(this);function o(u,p){if(p)e:{var v=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var L=u[T];if(!(L in v))break e;v=v[L]}u=u[u.length-1],T=v[u],p=p(T),p!=T&&p!=null&&e(v,u,{configurable:!0,writable:!0,value:p})}}function c(u,p){u instanceof String&&(u+="");var v=0,T=!1,L={next:function(){if(!T&&v<u.length){var H=v++;return{value:p(H,u[H]),done:!1}}return T=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return c(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function A(u,p,v){return u.call.apply(u.bind,arguments)}function b(u,p,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,T),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function D(u,p,v){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:b,D.apply(null,arguments)}function j(u,p){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function P(u,p){function v(){}v.prototype=p.prototype,u.aa=p.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,L,H){for(var ne=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)ne[Ne-2]=arguments[Ne];return p.prototype[L].apply(T,ne)}}function Y(u){const p=u.length;if(0<p){const v=Array(p);for(let T=0;T<p;T++)v[T]=u[T];return v}return[]}function F(u,p){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(g(T)){const L=u.length||0,H=T.length||0;u.length=L+H;for(let ne=0;ne<H;ne++)u[L+ne]=T[ne]}else u.push(T)}}class X{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ie(u){return/^[\s\xa0]*$/.test(u)}function te(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function me(u){return me[" "](u),u}me[" "]=function(){};var he=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Ae(u,p,v){for(const T in u)p.call(v,u[T],T,u)}function M(u,p){for(const v in u)p.call(void 0,u[v],v,u)}function w(u){const p={};for(const v in u)p[v]=u[v];return p}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(u,p){let v,T;for(let L=1;L<arguments.length;L++){T=arguments[L];for(v in T)u[v]=T[v];for(let H=0;H<S.length;H++)v=S[H],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function x(u){var p=1;u=u.split(":");const v=[];for(;0<p&&u.length;)v.push(u.shift()),p--;return u.length&&v.push(u.join(":")),v}function U(u){m.setTimeout(()=>{throw u},0)}function C(){var u=ze;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class pt{constructor(){this.h=this.g=null}add(p,v){const T=ut.get();T.set(p,v),this.h?this.h.next=T:this.g=T,this.h=T}}var ut=new X(()=>new re,u=>u.reset());class re{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,de=!1,ze=new pt,O=()=>{const u=m.Promise.resolve(void 0);ye=()=>{u.then(J)}};var J=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){U(v)}var p=ut;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}de=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};m.addEventListener("test",v,p),m.removeEventListener("test",v,p)}catch{}return u}();function Se(u,p){if(se.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(he){e:{try{me(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else v=="mouseover"?p=u.fromElement:v=="mouseout"&&(p=u.toElement);this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ee[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Se.aa.h.call(this)}}P(Se,se);var Ee={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),ke=0;function et(u,p,v,T,L){this.listener=u,this.proxy=null,this.src=p,this.type=v,this.capture=!!T,this.ha=L,this.key=++ke,this.da=this.fa=!1}function Be(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Yt(u){this.src=u,this.g={},this.h=0}Yt.prototype.add=function(u,p,v,T,L){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var ne=pn(u,p,T,L);return-1<ne?(p=u[ne],v||(p.fa=!1)):(p=new et(p,this.src,H,!!T,L),p.fa=v,u.push(p)),p};function vi(u,p){var v=p.type;if(v in u.g){var T=u.g[v],L=Array.prototype.indexOf.call(T,p,void 0),H;(H=0<=L)&&Array.prototype.splice.call(T,L,1),H&&(Be(p),u.g[v].length==0&&(delete u.g[v],u.h--))}}function pn(u,p,v,T){for(var L=0;L<u.length;++L){var H=u[L];if(!H.da&&H.listener==p&&H.capture==!!v&&H.ha==T)return L}return-1}var nr="closure_lm_"+(1e6*Math.random()|0),ir={};function _i(u,p,v,T,L){if(Array.isArray(p)){for(var H=0;H<p.length;H++)_i(u,p[H],v,T,L);return null}return v=Yl(v),u&&u[ct]?u.K(p,v,y(T)?!!T.capture:!1,L):lo(u,p,v,!1,T,L)}function lo(u,p,v,T,L,H){if(!p)throw Error("Invalid event type");var ne=y(L)?!!L.capture:!!L,Ne=uo(u);if(Ne||(u[nr]=Ne=new Yt(u)),v=Ne.add(p,v,T,ne,H),v.proxy)return v;if(T=Zs(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)ae||(L=ne),L===void 0&&(L=!1),u.addEventListener(p.toString(),T,L);else if(u.attachEvent)u.attachEvent(ea(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Zs(){function u(v){return p.call(u.src,u.listener,v)}const p=Eh;return u}function Js(u,p,v,T,L){if(Array.isArray(p))for(var H=0;H<p.length;H++)Js(u,p[H],v,T,L);else T=y(T)?!!T.capture:!!T,v=Yl(v),u&&u[ct]?(u=u.i,p=String(p).toString(),p in u.g&&(H=u.g[p],v=pn(H,v,T,L),-1<v&&(Be(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete u.g[p],u.h--)))):u&&(u=uo(u))&&(p=u.g[p.toString()],u=-1,p&&(u=pn(p,v,T,L)),(v=-1<u?p[u]:null)&&es(v))}function es(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ct])vi(p.i,u);else{var v=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(v,T,u.capture):p.detachEvent?p.detachEvent(ea(v),T):p.addListener&&p.removeListener&&p.removeListener(T),(v=uo(p))?(vi(v,u),v.h==0&&(v.src=null,p[nr]=null)):Be(u)}}}function ea(u){return u in ir?ir[u]:ir[u]="on"+u}function Eh(u,p){if(u.da)u=!0;else{p=new Se(p,this);var v=u.listener,T=u.ha||u.src;u.fa&&es(u),u=v.call(T,p)}return u}function uo(u){return u=u[nr],u instanceof Yt?u:null}var en="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yl(u){return typeof u=="function"?u:(u[en]||(u[en]=function(p){return u.handleEvent(p)}),u[en])}function gt(){ce.call(this),this.i=new Yt(this),this.M=this,this.F=null}P(gt,ce),gt.prototype[ct]=!0,gt.prototype.removeEventListener=function(u,p,v,T){Js(this,u,p,v,T)};function St(u,p){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new se(p,u);else if(p instanceof se)p.target=p.target||u;else{var L=p;p=new se(T,u),I(p,L)}if(L=!0,v)for(var H=v.length-1;0<=H;H--){var ne=p.g=v[H];L=Ei(ne,T,!0,p)&&L}if(ne=p.g=u,L=Ei(ne,T,!0,p)&&L,L=Ei(ne,T,!1,p)&&L,v)for(H=0;H<v.length;H++)ne=p.g=v[H],L=Ei(ne,T,!1,p)&&L}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var v=u.g[p],T=0;T<v.length;T++)Be(v[T]);delete u.g[p],u.h--}}this.F=null},gt.prototype.K=function(u,p,v,T){return this.i.add(String(u),p,!1,v,T)},gt.prototype.L=function(u,p,v,T){return this.i.add(String(u),p,!0,v,T)};function Ei(u,p,v,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,H=0;H<p.length;++H){var ne=p[H];if(ne&&!ne.da&&ne.capture==v){var Ne=ne.listener,vt=ne.ha||ne.src;ne.fa&&vi(u.i,ne),L=Ne.call(vt,T)!==!1&&L}}return L&&!T.defaultPrevented}function Ql(u,p,v){if(typeof u=="function")v&&(u=D(u,v));else if(u&&typeof u.handleEvent=="function")u=D(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(u,p||0)}function co(u){u.g=Ql(()=>{u.g=null,u.i&&(u.i=!1,co(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Th extends ce{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:co(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(u){ce.call(this),this.h=u,this.g={}}P(ts,ce);var rr=[];function Bt(u){Ae(u.g,function(p,v){this.g.hasOwnProperty(v)&&es(p)},u),u.g={}}ts.prototype.N=function(){ts.aa.N.call(this),Bt(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ho=m.JSON.stringify,Yn=m.JSON.parse,Qt=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function fo(){}fo.prototype.h=null;function Xl(u){return u.h||(u.h=u.i())}function Wl(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){se.call(this,"d")}P(sr,se);function Vn(){se.call(this,"c")}P(Vn,se);var gn={},ar=null;function ta(){return ar=ar||new gt}gn.La="serverreachability";function mo(u){se.call(this,gn.La,u)}P(mo,se);function or(u){const p=ta();St(p,new mo(p))}gn.STAT_EVENT="statevent";function na(u,p){se.call(this,gn.STAT_EVENT,u),this.stat=p}P(na,se);function ot(u){const p=ta();St(p,new na(p,u))}gn.Ma="timingevent";function Zl(u,p){se.call(this,gn.Ma,u),this.size=p}P(Zl,se);function lr(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},p)}function ur(){this.g=!0}ur.prototype.xa=function(){this.g=!1};function Jl(u,p,v,T,L,H){u.info(function(){if(u.g)if(H)for(var ne="",Ne=H.split("&"),vt=0;vt<Ne.length;vt++){var Me=Ne[vt].split("=");if(1<Me.length){var Rt=Me[0];Me=Me[1];var _t=Rt.split("_");ne=2<=_t.length&&_t[1]=="type"?ne+(Rt+"="+Me+"&"):ne+(Rt+"=redacted&")}}else ne=null;else ne=H;return"XMLHTTP REQ ("+T+") [attempt "+L+"]: "+p+`
`+v+`
`+ne})}function eu(u,p,v,T,L,H,ne){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+L+"]: "+p+`
`+v+`
`+H+" "+ne})}function cr(u,p,v,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+bt(u,v)+(T?" "+T:"")})}function Xn(u,p){u.info(function(){return"TIMEOUT: "+p})}ur.prototype.info=function(){};function bt(u,p){if(!u.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var L=T[1];if(Array.isArray(L)&&!(1>L.length)){var H=L[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ne=1;ne<L.length;ne++)L[ne]=""}}}}return ho(v)}catch{return p}}var yt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ns;function ia(){}P(ia,fo),ia.prototype.g=function(){return new XMLHttpRequest},ia.prototype.i=function(){return{}},ns=new ia;function Wn(u,p,v,T){this.j=u,this.i=p,this.l=v,this.R=T||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new po}function po(){this.i=null,this.g="",this.h=!1}var hr={},is={};function kn(u,p,v){u.L=1,u.v=as(tt(p)),u.m=v,u.P=!0,Ai(u,null)}function Ai(u,p){u.F=Date.now(),We(u),u.A=tt(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),wi(v.i,"t",T),u.C=0,v=u.j.J,u.h=new po,u.g=mu(u.j,v?p:null,!u.m),0<u.O&&(u.M=new Th(D(u.Y,u,u.g),u.O)),p=u.U,v=u.g,T=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(rr[0]=L.toString()),L=rr);for(var H=0;H<L.length;H++){var ne=_i(v,L[H],T||p.handleEvent,!1,p.h||p);if(!ne)break;p.g[ne.key]=ne}p=u.H?w(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),or(),Jl(u.i,u.u,u.A,u.l,u.R,u.m)}Wn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Tn(u)==3?p.j():this.Y(u)},Wn.prototype.Y=function(u){try{if(u==this.g)e:{const _t=Tn(this.g);var p=this.g.Ba();const Di=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||au(this.g)))){this.J||_t!=4||p==7||(p==8||0>=Di?or(3):or(2)),ra(this);var v=this.g.Z();this.X=v;t:if(fr(this)){var T=au(this.g);u="";var L=T.length,H=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),on(this);var ne="";break t}this.h.i=new m.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(T[p],{stream:!(H&&p==L-1)});T.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,eu(this.i,this.u,this.A,this.l,this.R,_t,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,vt=this.g;if((Ne=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Ne)){var Me=Ne;break t}}Me=null}if(v=Me)cr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ln(this,v);else{this.o=!1,this.s=3,ot(12),tn(this),on(this);break e}}if(this.P){v=!0;let Mt;for(;!this.J&&this.C<ne.length;)if(Mt=dr(this,ne),Mt==is){_t==4&&(this.s=4,ot(14),v=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==hr){this.s=4,ot(15),cr(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else cr(this.i,this.l,Mt,null),ln(this,Mt);if(fr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||ne.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)cr(this.i,this.l,ne,"[Invalid Chunked Response]"),tn(this),on(this);else if(0<ne.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ds(Rt),Rt.M=!0,ot(11))}}else cr(this.i,this.l,ne,null),ln(this,ne);_t==4&&tn(this),this.o&&!this.J&&(_t==4?hu(this.j,this):(this.o=!1,We(this)))}else Ih(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),tn(this),on(this)}}}catch{}finally{}};function fr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function dr(u,p){var v=u.C,T=p.indexOf(`
`,v);return T==-1?is:(v=Number(p.substring(v,T)),isNaN(v)?hr:(T+=1,T+v>p.length?is:(p=p.slice(T,T+v),u.C=T+v,p)))}Wn.prototype.cancel=function(){this.J=!0,tn(this)};function We(u){u.S=Date.now()+u.I,go(u,u.I)}function go(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=lr(D(u.ba,u),p)}function ra(u){u.B&&(m.clearTimeout(u.B),u.B=null)}Wn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Xn(this.i,this.A),this.L!=2&&(or(),ot(17)),tn(this),this.s=2,on(this)):go(this,this.S-u)};function on(u){u.j.G==0||u.J||hu(u.j,u)}function tn(u){ra(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Bt(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ln(u,p){try{var v=u.j;if(v.G!=0&&(v.g==u||mr(v.h,u))){if(!u.K&&mr(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var L=T;if(L[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)ma(v),fa(v);else break e;Io(v),ot(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=lr(D(v.Za,v),6e3));if(1>=tu(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ci(v,11)}else if((u.K||v.g==u)&&ma(v),!ie(p))for(L=v.Da.g.parse(p),p=0;p<L.length;p++){let Me=L[p];if(v.T=Me[0],Me=Me[1],v.G==2)if(Me[0]=="c"){v.K=Me[1],v.ia=Me[2];const Rt=Me[3];Rt!=null&&(v.la=Rt,v.j.info("VER="+v.la));const _t=Me[4];_t!=null&&(v.Aa=_t,v.j.info("SVER="+v.Aa));const Di=Me[5];Di!=null&&typeof Di=="number"&&0<Di&&(T=1.5*Di,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const Mt=u.g;if(Mt){const ri=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var H=T.h;H.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(pr(H,H.h),H.h=null))}if(T.D){const Do=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Do&&(T.ya=Do,Pe(T.I,T.D,Do))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var ne=u;if(T.qa=du(T,T.J?T.ia:null,T.W),ne.K){yn(T.h,ne);var Ne=ne,vt=T.L;vt&&(Ne.I=vt),Ne.B&&(ra(Ne),We(Ne)),T.g=ne}else uu(T);0<v.i.length&&da(v)}else Me[0]!="stop"&&Me[0]!="close"||Ci(v,7);else v.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Ci(v,7):wo(v):Me[0]!="noop"&&v.l&&v.l.ta(Me),v.v=0)}}or(4)}catch{}}var Ah=class{constructor(u,p){this.g=u,this.map=p}};function yo(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function tu(u){return u.h?1:u.g?u.g.size:0}function mr(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function pr(u,p){u.g?u.g.add(p):u.h=p}function yn(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}yo.prototype.cancel=function(){if(this.i=Xt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Xt(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const v of u.g.values())p=p.concat(v.D);return p}return Y(u.i)}function nu(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],v=u.length,T=0;T<v;T++)p.push(u[T]);return p}p=[],v=0;for(T in u)p[v++]=u[T];return p}function Sh(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var v=0;v<u;v++)p.push(v);return p}p=[],v=0;for(const T in u)p[v++]=T;return p}}}function rs(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var v=Sh(u),T=nu(u),L=T.length,H=0;H<L;H++)p.call(void 0,T[H],v&&v[H],u)}var _o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sa(u,p){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),L=null;if(0<=T){var H=u[v].substring(0,T);L=u[v].substring(T+1)}else H=u[v];p(H,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Si(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Si){this.h=u.h,gr(this,u.j),this.o=u.o,this.g=u.g,ss(this,u.s),this.l=u.l;var p=u.i,v=new Zn;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),aa(this,v),this.m=u.m}else u&&(p=String(u).match(_o))?(this.h=!1,gr(this,p[1]||"",!0),this.o=yr(p[2]||""),this.g=yr(p[3]||"",!0),ss(this,p[4]),this.l=yr(p[5]||"",!0),aa(this,p[6]||"",!0),this.m=yr(p[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Si.prototype.toString=function(){var u=[],p=this.j;p&&u.push(vn(p,Eo,!0),":");var v=this.g;return(v||p=="file")&&(u.push("//"),(p=this.o)&&u.push(vn(p,Eo,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(vn(v,v.charAt(0)=="/"?To:iu,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",vn(v,Rh)),u.join("")};function tt(u){return new Si(u)}function gr(u,p,v){u.j=v?yr(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function ss(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function aa(u,p,v){p instanceof Zn?(u.i=p,Ao(u.i,u.h)):(v||(p=vn(p,wh)),u.i=new Zn(p,u.h))}function Pe(u,p,v){u.i.set(p,v)}function as(u){return Pe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function yr(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function vn(u,p,v){return typeof u=="string"?(u=encodeURI(u).replace(p,bh),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function bh(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Eo=/[#\/\?@]/g,iu=/[#\?:]/g,To=/[#\?]/g,wh=/[#\?@]/g,Rh=/#/g;function Zn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function _n(u){u.g||(u.g=new Map,u.h=0,u.i&&sa(u.i,function(p,v){u.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}r=Zn.prototype,r.add=function(u,p){_n(this),this.i=null,u=Ri(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(p),this.h+=1,this};function oa(u,p){_n(u),p=Ri(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function bi(u,p){return _n(u),p=Ri(u,p),u.g.has(p)}r.forEach=function(u,p){_n(this),this.g.forEach(function(v,T){v.forEach(function(L){u.call(p,L,T,this)},this)},this)},r.na=function(){_n(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let T=0;T<p.length;T++){const L=u[T];for(let H=0;H<L.length;H++)v.push(p[T])}return v},r.V=function(u){_n(this);let p=[];if(typeof u=="string")bi(this,u)&&(p=p.concat(this.g.get(Ri(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)p=p.concat(u[v])}return p},r.set=function(u,p){return _n(this),this.i=null,u=Ri(this,u),bi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function wi(u,p,v){oa(u,p),0<v.length&&(u.i=null,u.g.set(Ri(u,p),Y(v)),u.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var T=p[v];const H=encodeURIComponent(String(T)),ne=this.V(T);for(T=0;T<ne.length;T++){var L=H;ne[T]!==""&&(L+="="+encodeURIComponent(String(ne[T]))),u.push(L)}}return this.i=u.join("&")};function Ri(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Ao(u,p){p&&!u.j&&(_n(u),u.i=null,u.g.forEach(function(v,T){var L=T.toLowerCase();T!=L&&(oa(this,T),wi(this,L,v))},u)),u.j=p}function ru(u,p){const v=new ur;if(m.Image){const T=new Image;T.onload=j(En,v,"TestLoadImage: loaded",!0,p,T),T.onerror=j(En,v,"TestLoadImage: error",!1,p,T),T.onabort=j(En,v,"TestLoadImage: abort",!1,p,T),T.ontimeout=j(En,v,"TestLoadImage: timeout",!1,p,T),m.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function os(u,p){const v=new ur,T=new AbortController,L=setTimeout(()=>{T.abort(),En(v,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then(H=>{clearTimeout(L),H.ok?En(v,"TestPingServer: ok",!0,p):En(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),En(v,"TestPingServer: error",!1,p)})}function En(u,p,v,T,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),T(v)}catch{}}function ls(){this.g=new Qt}function Jn(u,p,v){const T=v||"";try{rs(u,function(L,H){let ne=L;y(L)&&(ne=ho(L)),p.push(T+H+"="+encodeURIComponent(ne))})}catch(L){throw p.push(T+"type="+encodeURIComponent("_badmap")),L}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}P(vr,fo),vr.prototype.g=function(){return new Ii(this.l,this.j)},vr.prototype.i=function(u){return function(){return u}}({});function Ii(u,p){gt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ii,gt),r=Ii.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,ti(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;So(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function So(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?ei(this):ti(this),this.readyState==3&&So(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,ei(this))},r.Qa=function(u){this.g&&(this.response=u,ei(this))},r.ga=function(){this.g&&ei(this)};function ei(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ti(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=p.next();return u.join(`\r
`)};function ti(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function bo(u){let p="";return Ae(u,function(v,T){p+=T,p+=":",p+=v,p+=`\r
`}),p}function wt(u,p,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=bo(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Pe(u,p,v))}function je(u){gt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(je,gt);var la=/^https?$/i,us=["POST","PUT"];r=je.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ns.g(),this.v=this.o?Xl(this.o):Xl(ns),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(H){su(this,H);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var L in T)v.set(L,T[L]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const H of T.keys())v.set(H,T.get(H));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),L=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(us,p,void 0))||T||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of v)this.g.setRequestHeader(H,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cs(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){su(this,H)}};function su(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,ua(u),ni(u)}function ua(u){u.A||(u.A=!0,St(u,"complete"),St(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,St(this,"complete"),St(this,"abort"),ni(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),je.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},r.bb=function(){ca(this)};function ca(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Tn(u)!=4||u.Z()!=2)){if(u.u&&Tn(u)==4)Ql(u.Ea,0,u);else if(St(u,"readystatechange"),Tn(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var T;if(T=ne===0){var L=String(u.D).match(_o)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),T=!la.test(L?L.toLowerCase():"")}v=T}if(v)St(u,"complete"),St(u,"success");else{u.m=6;try{var H=2<Tn(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",ua(u)}}finally{ni(u)}}}}function ni(u,p){if(u.g){cs(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||St(u,"ready");try{v.onreadystatechange=T}catch{}}}function cs(u){u.I&&(m.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Tn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Yn(p)}};function au(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ih(u){const p={};u=(u.g&&2<=Tn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(ie(u[T]))continue;var v=x(u[T]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=p[L]||[];p[L]=H,H.push(v)}M(p,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(u,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||p}function ha(u){this.Aa=0,this.i=[],this.j=new ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hs("baseRetryDelayMs",5e3,u),this.cb=hs("retryDelaySeedMs",1e4,u),this.Wa=hs("forwardChannelMaxRetries",2,u),this.wa=hs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new yo(u&&u.concurrentRequestLimit),this.Da=new ls,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ha.prototype,r.la=8,r.G=1,r.connect=function(u,p,v,T){ot(0),this.W=u,this.H=p||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=du(this,null,this.W),da(this)};function wo(u){if(ou(u),u.G==3){var p=u.U++,v=tt(u.I);if(Pe(v,"SID",u.K),Pe(v,"RID",p),Pe(v,"TYPE","terminate"),fs(u,v),p=new Wn(u,u.j,p),p.L=2,p.v=as(tt(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=p.v,v=!0),v||(p.g=mu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),We(p)}fu(u)}function fa(u){u.g&&(ds(u),u.g.cancel(),u.g=null)}function ou(u){fa(u),u.u&&(m.clearTimeout(u.u),u.u=null),ma(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function da(u){if(!vo(u.h)&&!u.s){u.s=!0;var p=u.Ga;ye||O(),de||(ye(),de=!0),ze.add(p,u),u.B=0}}function Ch(u,p){return tu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=lr(D(u.Ga,u,p),Co(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Wn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=w(H),I(H,this.S)):H=this.S),this.m!==null||this.O||(L.H=H,H=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(p+=T,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=lu(this,L,p),v=tt(this.I),Pe(v,"RID",u),Pe(v,"CVER",22),this.D&&Pe(v,"X-HTTP-Session-Id",this.D),fs(this,v),H&&(this.O?p="headers="+encodeURIComponent(String(bo(H)))+"&"+p:this.m&&wt(v,this.m,H)),pr(this.h,L),this.Ua&&Pe(v,"TYPE","init"),this.P?(Pe(v,"$req",p),Pe(v,"SID","null"),L.T=!0,kn(L,v,null)):kn(L,v,p),this.G=2}}else this.G==3&&(u?Ro(this,u):this.i.length==0||vo(this.h)||Ro(this))};function Ro(u,p){var v;p?v=p.l:v=u.U++;const T=tt(u.I);Pe(T,"SID",u.K),Pe(T,"RID",v),Pe(T,"AID",u.T),fs(u,T),u.m&&u.o&&wt(T,u.m,u.o),v=new Wn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),p&&(u.i=p.D.concat(u.i)),p=lu(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),pr(u.h,v),kn(v,T,p)}function fs(u,p){u.H&&Ae(u.H,function(v,T){Pe(p,T,v)}),u.l&&rs({},function(v,T){Pe(p,T,v)})}function lu(u,p,v){v=Math.min(u.i.length,v);var T=u.l?D(u.l.Na,u.l,u):null;e:{var L=u.i;let H=-1;for(;;){const ne=["count="+v];H==-1?0<v?(H=L[0].g,ne.push("ofs="+H)):H=0:ne.push("ofs="+H);let Ne=!0;for(let vt=0;vt<v;vt++){let Me=L[vt].g;const Rt=L[vt].map;if(Me-=H,0>Me)H=Math.max(0,L[vt].g-100),Ne=!1;else try{Jn(Rt,ne,"req"+Me+"_")}catch{T&&T(Rt)}}if(Ne){T=ne.join("&");break e}}}return u=u.i.splice(0,v),p.D=u,T}function uu(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ye||O(),de||(ye(),de=!0),ze.add(p,u),u.v=0}}function Io(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=lr(D(u.Fa,u),Co(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=lr(D(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),fa(this),cu(this))};function ds(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function cu(u){u.g=new Wn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=tt(u.qa);Pe(p,"RID","rpc"),Pe(p,"SID",u.K),Pe(p,"AID",u.T),Pe(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Pe(p,"TO",u.ja),Pe(p,"TYPE","xmlhttp"),fs(u,p),u.m&&u.o&&wt(p,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=as(tt(p)),v.m=null,v.P=!0,Ai(v,u)}r.Za=function(){this.C!=null&&(this.C=null,fa(this),Io(this),ot(19))};function ma(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function hu(u,p){var v=null;if(u.g==p){ma(u),ds(u),u.g=null;var T=2}else if(mr(u.h,p))v=p.D,yn(u.h,p),T=1;else return;if(u.G!=0){if(p.o)if(T==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;T=ta(),St(T,new Zl(T,v)),da(u)}else uu(u);else if(L=p.s,L==3||L==0&&0<p.X||!(T==1&&Ch(u,p)||T==2&&Io(u)))switch(v&&0<v.length&&(p=u.h,p.i=p.i.concat(v)),L){case 1:Ci(u,5);break;case 4:Ci(u,10);break;case 3:Ci(u,6);break;default:Ci(u,2)}}}function Co(u,p){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*p}function Ci(u,p){if(u.j.info("Error code "+p),p==2){var v=D(u.fb,u),T=u.Xa;const L=!T;T=new Si(T||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||gr(T,"https"),as(T),L?ru(T.toString(),v):os(T.toString(),v)}else ot(2);u.G=0,u.l&&u.l.sa(p),fu(u),ou(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function fu(u){if(u.G=0,u.ka=[],u.l){const p=Xt(u.h);(p.length!=0||u.i.length!=0)&&(F(u.ka,p),F(u.ka,u.i),u.h.i.length=0,Y(u.i),u.i.length=0),u.l.ra()}}function du(u,p,v){var T=v instanceof Si?tt(v):new Si(v);if(T.g!="")p&&(T.g=p+"."+T.g),ss(T,T.s);else{var L=m.location;T=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var H=new Si(null);T&&gr(H,T),p&&(H.g=p),L&&ss(H,L),v&&(H.l=v),T=H}return v=u.D,p=u.ya,v&&p&&Pe(T,v,p),Pe(T,"VER",u.la),fs(u,T),T}function mu(u,p,v){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new je(new vr({eb:v})):new je(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function pu(){}r=pu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function pa(){}pa.prototype.g=function(u,p){return new Wt(u,p)};function Wt(u,p){gt.call(this),this.g=new ha(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ie(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ie(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ii(this)}P(Wt,gt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){wo(this.g)},Wt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=ho(u),u=v);p.i.push(new Ah(p.Ya++,u)),p.G==3&&da(p)},Wt.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,Wt.aa.N.call(this)};function gu(u){sr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const v in p){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}P(gu,sr);function yu(){Vn.call(this),this.status=1}P(yu,Vn);function ii(u){this.g=u}P(ii,pu),ii.prototype.ua=function(){St(this.g,"a")},ii.prototype.ta=function(u){St(this.g,new gu(u))},ii.prototype.sa=function(u){St(this.g,new yu)},ii.prototype.ra=function(){St(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,O0=function(){return new pa},D0=function(){return ta()},C0=gn,Zd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yt.NO_ERROR=0,yt.TIMEOUT=8,yt.HTTP_ERROR=6,Dc=yt,Ti.COMPLETE="complete",I0=Ti,Wl.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Tl=Wl,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,R0=je}).apply(typeof vc<"u"?vc:typeof self<"u"?self:typeof window<"u"?window:{});const r_="@firebase/firestore",s_="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new rh("@firebase/firestore");function Ha(){return qs.logLevel}function le(r,...e){if(qs.logLevel<=De.DEBUG){const i=e.map(km);qs.debug(`Firestore (${ao}): ${r}`,...i)}}function Fs(r,...e){if(qs.logLevel<=De.ERROR){const i=e.map(km);qs.error(`Firestore (${ao}): ${r}`,...i)}}function hh(r,...e){if(qs.logLevel<=De.WARN){const i=e.map(km);qs.warn(`Firestore (${ao}): ${r}`,...i)}}function km(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(r="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+r;throw Fs(e),new Error(e)}function at(r,e){r||Ce()}function Ye(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends $n{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(Gt.UNAUTHENTICATED))}shutdown(){}}class hD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class fD{constructor(e){this.t=e,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){at(this.o===void 0);let a=this.i;const o=g=>this.i!==a?(a=this.i,i(g)):Promise.resolve();let c=new Ls;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ls,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=c;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ls)}},0),f()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(at(typeof a.accessToken=="string"),new N0(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return at(e===null||typeof e=="string"),new Gt(e)}}class dD{constructor(e,i,a){this.l=e,this.h=i,this.P=a,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class mD{constructor(e,i,a){this.l=e,this.h=i,this.P=a}getToken(){return Promise.resolve(new dD(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pD{constructor(e,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Mn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,i){at(this.o===void 0);const a=c=>{c.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.R;return this.R=c.token,le("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>a(c))};const o=c=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?o(c):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new a_(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(at(typeof i.token=="string"),this.R=i.token,new a_(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let a=0;a<r;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=gD(40);for(let c=0;c<o.length;++c)a.length<20&&o[c]<i&&(a+=e.charAt(o[c]%62))}return a}}function He(r,e){return r<e?-1:r>e?1:0}function Xa(r,e,i){return r.length===e.length&&r.every((a,o)=>i(a,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=-62135596800,l_=1e6;class At{static now(){return At.fromMillis(Date.now())}static fromDate(e){return At.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),a=Math.floor((e-1e3*i)*l_);return new At(i,a)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new ve(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ve(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<o_)throw new ve(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/l_}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-o_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{static fromTimestamp(e){return new Qe(e)}static min(){return new Qe(new At(0,0))}static max(){return new Qe(new At(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="__name__";class hi{constructor(e,i,a){i===void 0?i=0:i>e.length&&Ce(),a===void 0?a=e.length-i:a>e.length-i&&Ce(),this.segments=e,this.offset=i,this.len=a}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(a=>{i.push(a)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,a=this.limit();i<a;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const a=Math.min(e.length,i.length);for(let o=0;o<a;o++){const c=hi.compareSegments(e.get(o),i.get(o));if(c!==0)return c}return Math.sign(e.length-i.length)}static compareSegments(e,i){const a=hi.isNumericId(e),o=hi.isNumericId(i);return a&&!o?-1:!a&&o?1:a&&o?hi.extractNumericId(e).compare(hi.extractNumericId(i)):e<i?-1:e>i?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vm.fromString(e.substring(4,e.length-2))}}class st extends hi{construct(e,i,a){return new st(e,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const a of e){if(a.indexOf("//")>=0)throw new ve(ee.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter(o=>o.length>0))}return new st(i)}static emptyPath(){return new st([])}}const yD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends hi{construct(e,i,a){return new Ut(e,i,a)}static isValidIdentifier(e){return yD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===u_}static keyField(){return new Ut([u_])}static fromServerFormat(e){const i=[];let a="",o=0;const c=()=>{if(a.length===0)throw new ve(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ve(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ve(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(a+=m,o++):(c(),o++)}if(c(),f)throw new ve(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(i)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(st.fromString(e))}static fromName(e){return new be(st.fromString(e).popFirst(5))}static empty(){return new be(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return st.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new st(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=-1;function vD(r,e){const i=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,o=Qe.fromTimestamp(a===1e9?new At(i+1,0):new At(i,a));return new Yr(o,be.empty(),e)}function _D(r){return new Yr(r.readTime,r.key,Nl)}class Yr{constructor(e,i,a){this.readTime=e,this.documentKey=i,this.largestBatchId=a}static min(){return new Yr(Qe.min(),be.empty(),Nl)}static max(){return new Yr(Qe.max(),be.empty(),Nl)}}function ED(r,e){let i=r.readTime.compareTo(e.readTime);return i!==0?i:(i=be.comparator(r.documentKey,e.documentKey),i!==0?i:He(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(r){if(r.code!==ee.FAILED_PRECONDITION||r.message!==TD)throw r;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(e){return this.next(void 0,e)}next(e,i){return this.callbackAttached&&Ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(e,this.result):new W((a,o)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(a,o)},this.catchCallback=c=>{this.wrapFailure(i,c).next(a,o)}})}toPromise(){return new Promise((e,i)=>{this.next(e,i)})}wrapUserFunction(e){try{const i=e();return i instanceof W?i:W.resolve(i)}catch(i){return W.reject(i)}}wrapSuccess(e,i){return e?this.wrapUserFunction(()=>e(i)):W.resolve(i)}wrapFailure(e,i){return e?this.wrapUserFunction(()=>e(i)):W.reject(i)}static resolve(e){return new W((i,a)=>{i(e)})}static reject(e){return new W((i,a)=>{a(e)})}static waitFor(e){return new W((i,a)=>{let o=0,c=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++c,f&&c===o&&i()},g=>a(g))}),f=!0,c===o&&i()})}static or(e){let i=W.resolve(!1);for(const a of e)i=i.next(o=>o?W.resolve(o):a());return i}static forEach(e,i){const a=[];return e.forEach((o,c)=>{a.push(i.call(this,o,c))}),this.waitFor(a)}static mapArray(e,i){return new W((a,o)=>{const c=e.length,f=new Array(c);let m=0;for(let g=0;g<c;g++){const y=g;i(e[y]).next(A=>{f[y]=A,++m,m===c&&a(f)},A=>o(A))}})}static doWhile(e,i){return new W((a,o)=>{const c=()=>{e()===!0?i().next(()=>{c()},o):a()};c()})}}function SD(r){const e=r.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function ql(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,i){this.previousValue=e,i&&(i.sequenceNumberHandler=a=>this.oe(a),this._e=a=>i.writeSequenceNumber(a))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Lm.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=-1;function zm(r){return r==null}function qc(r){return r===0&&1/r==-1/0}function bD(r){return typeof r=="number"&&Number.isInteger(r)&&!qc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="";function wD(r){let e="";for(let i=0;i<r.length;i++)e.length>0&&(e=c_(e)),e=RD(r.get(i),e);return c_(e)}function RD(r,e){let i=e;const a=r.length;for(let o=0;o<a;o++){const c=r.charAt(o);switch(c){case"\0":i+="";break;case x0:i+="";break;default:i+=c}}return i}function c_(r){return r+x0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(r){let e=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&e++;return e}function oo(r,e){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&e(i,r[i])}function V0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,i){this.comparator=e,this.root=i||Pt.EMPTY}insert(e,i){return new an(this.comparator,this.root.insert(e,i,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new an(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(e){let i=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(e,a.key);if(o===0)return i+a.left.size;o<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((i,a)=>(e(i,a),!1))}toString(){const e=[];return this.inorderTraversal((i,a)=>(e.push(`${i}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _c(this.root,e,this.comparator,!1)}getReverseIterator(){return new _c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _c(this.root,e,this.comparator,!0)}}class _c{constructor(e,i,a,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=i?a(e.key,i):1,i&&o&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const i={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,i,a,o,c){this.key=e,this.value=i,this.color=a??Pt.RED,this.left=o??Pt.EMPTY,this.right=c??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,i,a,o,c){return new Pt(e??this.key,i??this.value,a??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,a){let o=this;const c=a(e,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(e,i,a),null):c===0?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(e,i,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,i){let a,o=this;if(i(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),i(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ce();const e=this.left.check();if(e!==this.right.check())throw Ce();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce()}get value(){throw Ce()}get color(){throw Ce()}get left(){throw Ce()}get right(){throw Ce()}copy(e,i,a,o,c){return this}insert(e,i,a){return new Pt(e,i)}remove(e,i){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new an(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((i,a)=>(e(i),!1))}forEachInRange(e,i){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,e[1])>=0)return;i(o.key)}}forEachWhile(e,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const i=this.data.getIteratorFrom(e);return i.hasNext()?i.getNext().key:null}getIterator(){return new f_(this.data.getIterator())}getIteratorFrom(e){return new f_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let i=this;return i.size<e.size&&(i=e,e=this),e.forEach(a=>{i=i.add(a)}),i}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const i=this.data.getIterator(),a=e.data.getIterator();for(;i.hasNext();){const o=i.getNext().key,c=a.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(i=>{e.push(i)}),e}toString(){const e=[];return this.forEach(i=>e.push(i)),"SortedSet("+e.toString()+")"}copy(e){const i=new zt(this.comparator);return i.data=e,i}}class f_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new Hn([])}unionWith(e){let i=new zt(Ut.comparator);for(const a of this.fields)i=i.add(a);for(const a of e)i=i.add(a);return new Hn(i.toArray())}covers(e){for(const i of this.fields)if(i.isPrefixOf(e))return!0;return!1}isEqual(e){return Xa(this.fields,e.fields,(i,a)=>i.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new ID("Invalid base64 string: "+c):c}}(e);return new pi(i)}static fromUint8Array(e){const i=function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c}(e);return new pi(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pi.EMPTY_BYTE_STRING=new pi("");const CD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gs(r){if(at(!!r),typeof r=="string"){let e=0;const i=CD.exec(r);if(at(!!i),i[1]){let o=i[1];o=(o+"000000000").substr(0,9),e=Number(o)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:Lt(r.seconds),nanos:Lt(r.nanos)}}function Lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Wa(r){return typeof r=="string"?pi.fromBase64String(r):pi.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="server_timestamp",P0="__type__",L0="__previous_value__",U0="__local_write_time__";function jm(r){var e,i;return((i=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[P0])===null||i===void 0?void 0:i.stringValue)===k0}function Bm(r){const e=r.mapValue.fields[L0];return jm(e)?Bm(e):e}function Fc(r){const e=Gs(r.mapValue.fields[U0].timestampValue);return new At(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,i,a,o,c,f,m,g,y){this.databaseId=e,this.appId=i,this.persistenceKey=a,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y}}const Gc="(default)";class Kc{constructor(e,i){this.projectId=e,this.database=i||Gc}static empty(){return new Kc("","")}get isDefaultDatabase(){return this.database===Gc}isEqual(e){return e instanceof Kc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="__type__",OD="__max__",Ec={mapValue:{}},j0="__vector__",Jd="value";function Ks(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?jm(r)?4:MD(r)?9007199254740991:ND(r)?10:11:Ce()}function gi(r,e){if(r===e)return!0;const i=Ks(r);if(i!==Ks(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Fc(r).isEqual(Fc(e));case 3:return function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Gs(o.timestampValue),m=Gs(c.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,c){return Wa(o.bytesValue).isEqual(Wa(c.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,c){return Lt(o.geoPointValue.latitude)===Lt(c.geoPointValue.latitude)&&Lt(o.geoPointValue.longitude)===Lt(c.geoPointValue.longitude)}(r,e);case 2:return function(o,c){if("integerValue"in o&&"integerValue"in c)return Lt(o.integerValue)===Lt(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=Lt(o.doubleValue),m=Lt(c.doubleValue);return f===m?qc(f)===qc(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return Xa(r.arrayValue.values||[],e.arrayValue.values||[],gi);case 10:case 11:return function(o,c){const f=o.mapValue.fields||{},m=c.mapValue.fields||{};if(h_(f)!==h_(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!gi(f[g],m[g])))return!1;return!0}(r,e);default:return Ce()}}function Ml(r,e){return(r.values||[]).find(i=>gi(i,e))!==void 0}function Za(r,e){if(r===e)return 0;const i=Ks(r),a=Ks(e);if(i!==a)return He(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return He(r.booleanValue,e.booleanValue);case 2:return function(c,f){const m=Lt(c.integerValue||c.doubleValue),g=Lt(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return d_(r.timestampValue,e.timestampValue);case 4:return d_(Fc(r),Fc(e));case 5:return He(r.stringValue,e.stringValue);case 6:return function(c,f){const m=Wa(c),g=Wa(f);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(c,f){const m=c.split("/"),g=f.split("/");for(let y=0;y<m.length&&y<g.length;y++){const A=He(m[y],g[y]);if(A!==0)return A}return He(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(c,f){const m=He(Lt(c.latitude),Lt(f.latitude));return m!==0?m:He(Lt(c.longitude),Lt(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return m_(r.arrayValue,e.arrayValue);case 10:return function(c,f){var m,g,y,A;const b=c.fields||{},D=f.fields||{},j=(m=b[Jd])===null||m===void 0?void 0:m.arrayValue,P=(g=D[Jd])===null||g===void 0?void 0:g.arrayValue,Y=He(((y=j==null?void 0:j.values)===null||y===void 0?void 0:y.length)||0,((A=P==null?void 0:P.values)===null||A===void 0?void 0:A.length)||0);return Y!==0?Y:m_(j,P)}(r.mapValue,e.mapValue);case 11:return function(c,f){if(c===Ec.mapValue&&f===Ec.mapValue)return 0;if(c===Ec.mapValue)return 1;if(f===Ec.mapValue)return-1;const m=c.fields||{},g=Object.keys(m),y=f.fields||{},A=Object.keys(y);g.sort(),A.sort();for(let b=0;b<g.length&&b<A.length;++b){const D=He(g[b],A[b]);if(D!==0)return D;const j=Za(m[g[b]],y[A[b]]);if(j!==0)return j}return He(g.length,A.length)}(r.mapValue,e.mapValue);default:throw Ce()}}function d_(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return He(r,e);const i=Gs(r),a=Gs(e),o=He(i.seconds,a.seconds);return o!==0?o:He(i.nanos,a.nanos)}function m_(r,e){const i=r.values||[],a=e.values||[];for(let o=0;o<i.length&&o<a.length;++o){const c=Za(i[o],a[o]);if(c)return c}return He(i.length,a.length)}function Ja(r){return em(r)}function em(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(i){const a=Gs(i);return`time(${a.seconds},${a.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(i){return Wa(i).toBase64()}(r.bytesValue):"referenceValue"in r?function(i){return be.fromName(i).toString()}(r.referenceValue):"geoPointValue"in r?function(i){return`geo(${i.latitude},${i.longitude})`}(r.geoPointValue):"arrayValue"in r?function(i){let a="[",o=!0;for(const c of i.values||[])o?o=!1:a+=",",a+=em(c);return a+"]"}(r.arrayValue):"mapValue"in r?function(i){const a=Object.keys(i.fields||{}).sort();let o="{",c=!0;for(const f of a)c?c=!1:o+=",",o+=`${f}:${em(i.fields[f])}`;return o+"}"}(r.mapValue):Ce()}function Oc(r){switch(Ks(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bm(r);return e?16+Oc(e):16;case 5:return 2*r.stringValue.length;case 6:return Wa(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((o,c)=>o+Oc(c),0)}(r.arrayValue);case 10:case 11:return function(a){let o=0;return oo(a.fields,(c,f)=>{o+=c.length+Oc(f)}),o}(r.mapValue);default:throw Ce()}}function tm(r){return!!r&&"integerValue"in r}function Hm(r){return!!r&&"arrayValue"in r}function Nc(r){return!!r&&"mapValue"in r}function ND(r){var e,i;return((i=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[z0])===null||i===void 0?void 0:i.stringValue)===j0}function bl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return oo(r.mapValue.fields,(i,a)=>e.mapValue.fields[i]=bl(a)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=bl(r.arrayValue.values[i]);return e}return Object.assign({},r)}function MD(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===OD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.value=e}static empty(){return new Bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let i=this.value;for(let a=0;a<e.length-1;++a)if(i=(i.mapValue.fields||{})[e.get(a)],!Nc(i))return null;return i=(i.mapValue.fields||{})[e.lastSegment()],i||null}}set(e,i){this.getFieldsMap(e.popLast())[e.lastSegment()]=bl(i)}setAll(e){let i=Ut.emptyPath(),a={},o=[];e.forEach((f,m)=>{if(!i.isImmediateParentOf(m)){const g=this.getFieldsMap(i);this.applyChanges(g,a,o),a={},o=[],i=m.popLast()}f?a[m.lastSegment()]=bl(f):o.push(m.lastSegment())});const c=this.getFieldsMap(i);this.applyChanges(c,a,o)}delete(e){const i=this.field(e.popLast());Nc(i)&&i.mapValue.fields&&delete i.mapValue.fields[e.lastSegment()]}isEqual(e){return gi(this.value,e.value)}getFieldsMap(e){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<e.length;++a){let o=i.mapValue.fields[e.get(a)];Nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[e.get(a)]=o),i=o}return i.mapValue.fields}applyChanges(e,i,a){oo(i,(o,c)=>e[o]=c);for(const o of a)delete e[o]}clone(){return new Bn(bl(this.value))}}function B0(r){const e=[];return oo(r.fields,(i,a)=>{const o=new Ut([i]);if(Nc(a)){const c=B0(a.mapValue).fields;if(c.length===0)e.push(o);else for(const f of c)e.push(o.child(f))}else e.push(o)}),new Hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,i,a,o,c,f,m){this.key=e,this.documentType=i,this.version=a,this.readTime=o,this.createTime=c,this.data=f,this.documentState=m}static newInvalidDocument(e){return new jn(e,0,Qe.min(),Qe.min(),Qe.min(),Bn.empty(),0)}static newFoundDocument(e,i,a,o){return new jn(e,1,i,Qe.min(),a,o,0)}static newNoDocument(e,i){return new jn(e,2,i,Qe.min(),Qe.min(),Bn.empty(),0)}static newUnknownDocument(e,i){return new jn(e,3,i,Qe.min(),Qe.min(),Bn.empty(),2)}convertToFoundDocument(e,i){return!this.createTime.isEqual(Qe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Qe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,i){this.position=e,this.inclusive=i}}function p_(r,e,i){let a=0;for(let o=0;o<r.position.length;o++){const c=e[o],f=r.position[o];if(c.field.isKeyField()?a=be.comparator(be.fromName(f.referenceValue),i.key):a=Za(f,i.data.field(c.field)),c.dir==="desc"&&(a*=-1),a!==0)break}return a}function g_(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!gi(r.position[i],e.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,i="asc"){this.field=e,this.dir=i}}function xD(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{}class Nt extends H0{constructor(e,i,a){super(),this.field=e,this.op=i,this.value=a}static create(e,i,a){return e.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(e,i,a):new kD(e,i,a):i==="array-contains"?new UD(e,a):i==="in"?new zD(e,a):i==="not-in"?new jD(e,a):i==="array-contains-any"?new BD(e,a):new Nt(e,i,a)}static createKeyFieldInFilter(e,i,a){return i==="in"?new PD(e,a):new LD(e,a)}matches(e){const i=e.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(Za(i,this.value)):i!==null&&Ks(this.value)===Ks(i)&&this.matchesComparison(Za(i,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qr extends H0{constructor(e,i){super(),this.filters=e,this.op=i,this.ce=null}static create(e,i){return new Qr(e,i)}matches(e){return q0(this)?this.filters.find(i=>!i.matches(e))===void 0:this.filters.find(i=>i.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,i)=>e.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function q0(r){return r.op==="and"}function F0(r){return VD(r)&&q0(r)}function VD(r){for(const e of r.filters)if(e instanceof Qr)return!1;return!0}function nm(r){if(r instanceof Nt)return r.field.canonicalString()+r.op.toString()+Ja(r.value);if(F0(r))return r.filters.map(e=>nm(e)).join(",");{const e=r.filters.map(i=>nm(i)).join(",");return`${r.op}(${e})`}}function G0(r,e){return r instanceof Nt?function(a,o){return o instanceof Nt&&a.op===o.op&&a.field.isEqual(o.field)&&gi(a.value,o.value)}(r,e):r instanceof Qr?function(a,o){return o instanceof Qr&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce((c,f,m)=>c&&G0(f,o.filters[m]),!0):!1}(r,e):void Ce()}function K0(r){return r instanceof Nt?function(i){return`${i.field.canonicalString()} ${i.op} ${Ja(i.value)}`}(r):r instanceof Qr?function(i){return i.op.toString()+" {"+i.getFilters().map(K0).join(" ,")+"}"}(r):"Filter"}class kD extends Nt{constructor(e,i,a){super(e,i,a),this.key=be.fromName(a.referenceValue)}matches(e){const i=be.comparator(e.key,this.key);return this.matchesComparison(i)}}class PD extends Nt{constructor(e,i){super(e,"in",i),this.keys=$0("in",i)}matches(e){return this.keys.some(i=>i.isEqual(e.key))}}class LD extends Nt{constructor(e,i){super(e,"not-in",i),this.keys=$0("not-in",i)}matches(e){return!this.keys.some(i=>i.isEqual(e.key))}}function $0(r,e){var i;return(((i=e.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(a=>be.fromName(a.referenceValue))}class UD extends Nt{constructor(e,i){super(e,"array-contains",i)}matches(e){const i=e.data.field(this.field);return Hm(i)&&Ml(i.arrayValue,this.value)}}class zD extends Nt{constructor(e,i){super(e,"in",i)}matches(e){const i=e.data.field(this.field);return i!==null&&Ml(this.value.arrayValue,i)}}class jD extends Nt{constructor(e,i){super(e,"not-in",i)}matches(e){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=e.data.field(this.field);return i!==null&&!Ml(this.value.arrayValue,i)}}class BD extends Nt{constructor(e,i){super(e,"array-contains-any",i)}matches(e){const i=e.data.field(this.field);return!(!Hm(i)||!i.arrayValue.values)&&i.arrayValue.values.some(a=>Ml(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,i=null,a=[],o=[],c=null,f=null,m=null){this.path=e,this.collectionGroup=i,this.orderBy=a,this.filters=o,this.limit=c,this.startAt=f,this.endAt=m,this.le=null}}function y_(r,e=null,i=[],a=[],o=null,c=null,f=null){return new HD(r,e,i,a,o,c,f)}function qm(r){const e=Ye(r);if(e.le===null){let i=e.path.canonicalString();e.collectionGroup!==null&&(i+="|cg:"+e.collectionGroup),i+="|f:",i+=e.filters.map(a=>nm(a)).join(","),i+="|ob:",i+=e.orderBy.map(a=>function(c){return c.field.canonicalString()+c.dir}(a)).join(","),zm(e.limit)||(i+="|l:",i+=e.limit),e.startAt&&(i+="|lb:",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(a=>Ja(a)).join(",")),e.endAt&&(i+="|ub:",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(a=>Ja(a)).join(",")),e.le=i}return e.le}function Fm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!xD(r.orderBy[i],e.orderBy[i]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!G0(r.filters[i],e.filters[i]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!g_(r.startAt,e.startAt)&&g_(r.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,i=null,a=[],o=[],c=null,f="F",m=null,g=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=o,this.limit=c,this.limitType=f,this.startAt=m,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function qD(r,e,i,a,o,c,f,m){return new fh(r,e,i,a,o,c,f,m)}function FD(r){return new fh(r)}function v_(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function GD(r){return r.collectionGroup!==null}function wl(r){const e=Ye(r);if(e.he===null){e.he=[];const i=new Set;for(const c of e.explicitOrderBy)e.he.push(c),i.add(c.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new zt(Ut.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(c=>{i.has(c.canonicalString())||c.isKeyField()||e.he.push(new Yc(c,a))}),i.has(Ut.keyField().canonicalString())||e.he.push(new Yc(Ut.keyField(),a))}return e.he}function Us(r){const e=Ye(r);return e.Pe||(e.Pe=KD(e,wl(r))),e.Pe}function KD(r,e){if(r.limitType==="F")return y_(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const c=o.dir==="desc"?"asc":"desc";return new Yc(o.field,c)});const i=r.endAt?new $c(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new $c(r.startAt.position,r.startAt.inclusive):null;return y_(r.path,r.collectionGroup,e,r.filters,r.limit,i,a)}}function im(r,e,i){return new fh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,i,r.startAt,r.endAt)}function Y0(r,e){return Fm(Us(r),Us(e))&&r.limitType===e.limitType}function Q0(r){return`${qm(Us(r))}|lt:${r.limitType}`}function vl(r){return`Query(target=${function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map(o=>K0(o)).join(", ")}]`),zm(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map(o=>Ja(o)).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map(o=>Ja(o)).join(",")),`Target(${a})`}(Us(r))}; limitType=${r.limitType})`}function Gm(r,e){return e.isFoundDocument()&&function(a,o){const c=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(c):be.isDocumentKey(a.path)?a.path.isEqual(c):a.path.isImmediateParentOf(c)}(r,e)&&function(a,o){for(const c of wl(a))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0}(r,e)&&function(a,o){for(const c of a.filters)if(!c.matches(o))return!1;return!0}(r,e)&&function(a,o){return!(a.startAt&&!function(f,m,g){const y=p_(f,m,g);return f.inclusive?y<=0:y<0}(a.startAt,wl(a),o)||a.endAt&&!function(f,m,g){const y=p_(f,m,g);return f.inclusive?y>=0:y>0}(a.endAt,wl(a),o))}(r,e)}function $D(r){return(e,i)=>{let a=!1;for(const o of wl(r)){const c=YD(o,e,i);if(c!==0)return c;a=a||o.field.isKeyField()}return 0}}function YD(r,e,i){const a=r.field.isKeyField()?be.comparator(e.key,i.key):function(c,f,m){const g=f.data.field(c),y=m.data.field(c);return g!==null&&y!==null?Za(g,y):Ce()}(r.field,e,i);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return Ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,i){this.mapKeyFn=e,this.equalsFn=i,this.inner={},this.innerSize=0}get(e){const i=this.mapKeyFn(e),a=this.inner[i];if(a!==void 0){for(const[o,c]of a)if(this.equalsFn(o,e))return c}}has(e){return this.get(e)!==void 0}set(e,i){const a=this.mapKeyFn(e),o=this.inner[a];if(o===void 0)return this.inner[a]=[[e,i]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],e))return void(o[c]=[e,i]);o.push([e,i]),this.innerSize++}delete(e){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return a.length===1?delete this.inner[i]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(e){oo(this.inner,(i,a)=>{for(const[o,c]of a)e(o,c)})}isEmpty(){return V0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=new an(be.comparator);function Qc(){return QD}const X0=new an(be.comparator);function Tc(...r){let e=X0;for(const i of r)e=e.insert(i.key,i);return e}function W0(r){let e=X0;return r.forEach((i,a)=>e=e.insert(i,a.overlayedDocument)),e}function Ps(){return Rl()}function Z0(){return Rl()}function Rl(){return new Xs(r=>r.toString(),(r,e)=>r.isEqual(e))}const XD=new an(be.comparator),WD=new zt(be.comparator);function Kt(...r){let e=WD;for(const i of r)e=e.add(i);return e}const ZD=new zt(He);function JD(){return ZD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qc(e)?"-0":e}}function J0(r){return{integerValue:""+r}}function eO(r,e){return bD(e)?J0(e):Km(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this._=void 0}}function tO(r,e,i){return r instanceof Xc?function(o,c){const f={fields:{[P0]:{stringValue:k0},[U0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&jm(c)&&(c=Bm(c)),c&&(f.fields[L0]=c),{mapValue:f}}(i,e):r instanceof xl?tT(r,e):r instanceof Vl?nT(r,e):function(o,c){const f=eT(o,c),m=__(f)+__(o.Ie);return tm(f)&&tm(o.Ie)?J0(m):Km(o.serializer,m)}(r,e)}function nO(r,e,i){return r instanceof xl?tT(r,e):r instanceof Vl?nT(r,e):i}function eT(r,e){return r instanceof Wc?function(a){return tm(a)||function(c){return!!c&&"doubleValue"in c}(a)}(e)?e:{integerValue:0}:null}class Xc extends dh{}class xl extends dh{constructor(e){super(),this.elements=e}}function tT(r,e){const i=iT(e);for(const a of r.elements)i.some(o=>gi(o,a))||i.push(a);return{arrayValue:{values:i}}}class Vl extends dh{constructor(e){super(),this.elements=e}}function nT(r,e){let i=iT(e);for(const a of r.elements)i=i.filter(o=>!gi(o,a));return{arrayValue:{values:i}}}class Wc extends dh{constructor(e,i){super(),this.serializer=e,this.Ie=i}}function __(r){return Lt(r.integerValue||r.doubleValue)}function iT(r){return Hm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function iO(r,e){return r.field.isEqual(e.field)&&function(a,o){return a instanceof xl&&o instanceof xl||a instanceof Vl&&o instanceof Vl?Xa(a.elements,o.elements,gi):a instanceof Wc&&o instanceof Wc?gi(a.Ie,o.Ie):a instanceof Xc&&o instanceof Xc}(r.transform,e.transform)}class rO{constructor(e,i){this.version=e,this.transformResults=i}}class Xi{constructor(e,i){this.updateTime=e,this.exists=i}static none(){return new Xi}static exists(e){return new Xi(void 0,e)}static updateTime(e){return new Xi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class mh{}function rT(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new aT(r.key,Xi.none()):new Fl(r.key,r.data,Xi.none());{const i=r.data,a=Bn.empty();let o=new zt(Ut.comparator);for(let c of e.fields)if(!o.has(c)){let f=i.field(c);f===null&&c.length>1&&(c=c.popLast(),f=i.field(c)),f===null?a.delete(c):a.set(c,f),o=o.add(c)}return new Ws(r.key,a,new Hn(o.toArray()),Xi.none())}}function sO(r,e,i){r instanceof Fl?function(o,c,f){const m=o.value.clone(),g=T_(o.fieldTransforms,c,f.transformResults);m.setAll(g),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,i):r instanceof Ws?function(o,c,f){if(!Mc(o.precondition,c))return void c.convertToUnknownDocument(f.version);const m=T_(o.fieldTransforms,c,f.transformResults),g=c.data;g.setAll(sT(o)),g.setAll(m),c.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,e,i):function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,i)}function Il(r,e,i,a){return r instanceof Fl?function(c,f,m,g){if(!Mc(c.precondition,f))return m;const y=c.value.clone(),A=A_(c.fieldTransforms,g,f);return y.setAll(A),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,e,i,a):r instanceof Ws?function(c,f,m,g){if(!Mc(c.precondition,f))return m;const y=A_(c.fieldTransforms,g,f),A=f.data;return A.setAll(sT(c)),A.setAll(y),f.convertToFoundDocument(f.version,A).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(b=>b.field))}(r,e,i,a):function(c,f,m){return Mc(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,i)}function aO(r,e){let i=null;for(const a of r.fieldTransforms){const o=e.data.field(a.field),c=eT(a.transform,o||null);c!=null&&(i===null&&(i=Bn.empty()),i.set(a.field,c))}return i||null}function E_(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&Xa(a,o,(c,f)=>iO(c,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Fl extends mh{constructor(e,i,a,o=[]){super(),this.key=e,this.value=i,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ws extends mh{constructor(e,i,a,o,c=[]){super(),this.key=e,this.data=i,this.fieldMask=a,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function sT(r){const e=new Map;return r.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const a=r.data.field(i);e.set(i,a)}}),e}function T_(r,e,i){const a=new Map;at(r.length===i.length);for(let o=0;o<i.length;o++){const c=r[o],f=c.transform,m=e.data.field(c.field);a.set(c.field,nO(f,m,i[o]))}return a}function A_(r,e,i){const a=new Map;for(const o of r){const c=o.transform,f=i.data.field(o.field);a.set(o.field,tO(c,f,e))}return a}class aT extends mh{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oO extends mh{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,i,a,o){this.batchId=e,this.localWriteTime=i,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(e,i){const a=i.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(e.key)&&sO(c,e,a[o])}}applyToLocalView(e,i){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(i=Il(a,e,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(i=Il(a,e,i,this.localWriteTime));return i}applyToLocalDocumentSet(e,i){const a=Z0();return this.mutations.forEach(o=>{const c=e.get(o.key),f=c.overlayedDocument;let m=this.applyToLocalView(f,c.mutatedFields);m=i.has(o.key)?null:m;const g=rT(f,m);g!==null&&a.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(Qe.min())}),a}keys(){return this.mutations.reduce((e,i)=>e.add(i.key),Kt())}isEqual(e){return this.batchId===e.batchId&&Xa(this.mutations,e.mutations,(i,a)=>E_(i,a))&&Xa(this.baseMutations,e.baseMutations,(i,a)=>E_(i,a))}}class $m{constructor(e,i,a,o){this.batch=e,this.commitVersion=i,this.mutationResults=a,this.docVersions=o}static from(e,i,a){at(e.mutations.length===a.length);let o=function(){return XD}();const c=e.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,a[f].version);return new $m(e,i,a,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,i){this.largestBatchId=e,this.mutation=i}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,Ve;function cO(r){switch(r){case ee.OK:return Ce();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return Ce()}}function hO(r){if(r===void 0)return Fs("GRPC error has no .code"),ee.UNKNOWN;switch(r){case mt.OK:return ee.OK;case mt.CANCELLED:return ee.CANCELLED;case mt.UNKNOWN:return ee.UNKNOWN;case mt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case mt.INTERNAL:return ee.INTERNAL;case mt.UNAVAILABLE:return ee.UNAVAILABLE;case mt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case mt.NOT_FOUND:return ee.NOT_FOUND;case mt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case mt.ABORTED:return ee.ABORTED;case mt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case mt.DATA_LOSS:return ee.DATA_LOSS;default:return Ce()}}(Ve=mt||(mt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Vm([4294967295,4294967295],0);class fO{constructor(e,i){this.databaseId=e,this.useProto3Json=i}}function rm(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dO(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function mO(r,e){return rm(r,e.toTimestamp())}function Ya(r){return at(!!r),Qe.fromTimestamp(function(i){const a=Gs(i);return new At(a.seconds,a.nanos)}(r))}function oT(r,e){return sm(r,e).canonicalString()}function sm(r,e){const i=function(o){return new st(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?i:i.child(e)}function pO(r){const e=st.fromString(r);return at(SO(e)),e}function am(r,e){return oT(r.databaseId,e.path)}function gO(r){const e=pO(r);return e.length===4?st.emptyPath():vO(e)}function yO(r){return new st(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function vO(r){return at(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function S_(r,e,i){return{name:am(r,e),fields:i.value.mapValue.fields}}function _O(r,e){let i;if(e instanceof Fl)i={update:S_(r,e.key,e.value)};else if(e instanceof aT)i={delete:am(r,e.key)};else if(e instanceof Ws)i={update:S_(r,e.key,e.data),updateMask:AO(e.fieldMask)};else{if(!(e instanceof oO))return Ce();i={verify:am(r,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map(a=>function(c,f){const m=f.transform;if(m instanceof Xc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof xl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Vl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Wc)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw Ce()}(0,a))),e.precondition.isNone||(i.currentDocument=function(o,c){return c.updateTime!==void 0?{updateTime:mO(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Ce()}(r,e.precondition)),i}function EO(r,e){return r&&r.length>0?(at(e!==void 0),r.map(i=>function(o,c){let f=o.updateTime?Ya(o.updateTime):Ya(c);return f.isEqual(Qe.min())&&(f=Ya(c)),new rO(f,o.transformResults||[])}(i,e))):[]}function TO(r){let e=gO(r.parent);const i=r.structuredQuery,a=i.from?i.from.length:0;let o=null;if(a>0){at(a===1);const A=i.from[0];A.allDescendants?o=A.collectionId:e=e.child(A.collectionId)}let c=[];i.where&&(c=function(b){const D=lT(b);return D instanceof Qr&&F0(D)?D.getFilters():[D]}(i.where));let f=[];i.orderBy&&(f=function(b){return b.map(D=>function(P){return new Yc(qa(P.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(D))}(i.orderBy));let m=null;i.limit&&(m=function(b){let D;return D=typeof b=="object"?b.value:b,zm(D)?null:D}(i.limit));let g=null;i.startAt&&(g=function(b){const D=!!b.before,j=b.values||[];return new $c(j,D)}(i.startAt));let y=null;return i.endAt&&(y=function(b){const D=!b.before,j=b.values||[];return new $c(j,D)}(i.endAt)),qD(e,o,f,c,m,"F",g,y)}function lT(r){return r.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=qa(i.unaryFilter.field);return Nt.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=qa(i.unaryFilter.field);return Nt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=qa(i.unaryFilter.field);return Nt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=qa(i.unaryFilter.field);return Nt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Ce()}}(r):r.fieldFilter!==void 0?function(i){return Nt.create(qa(i.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ce()}}(i.fieldFilter.op),i.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(i){return Qr.create(i.compositeFilter.filters.map(a=>lT(a)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ce()}}(i.compositeFilter.op))}(r):Ce()}function qa(r){return Ut.fromServerFormat(r.fieldPath)}function AO(r){const e=[];return r.fields.forEach(i=>e.push(i.canonicalString())),{fieldPaths:e}}function SO(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.Tt=e}}function wO(r){const e=TO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?im(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.Tn=new IO}addToCollectionParentIndex(e,i){return this.Tn.add(i),W.resolve()}getCollectionParents(e,i){return W.resolve(this.Tn.getEntries(i))}addFieldIndex(e,i){return W.resolve()}deleteFieldIndex(e,i){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,i){return W.resolve()}getDocumentsMatchingTarget(e,i){return W.resolve(null)}getIndexType(e,i){return W.resolve(0)}getFieldIndexes(e,i){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,i){return W.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,i){return W.resolve(Yr.min())}updateCollectionGroup(e,i,a){return W.resolve()}updateIndexEntries(e,i){return W.resolve()}}class IO{constructor(){this.index={}}add(e){const i=e.lastSegment(),a=e.popLast(),o=this.index[i]||new zt(st.comparator),c=!o.has(a);return this.index[i]=o.add(a),c}has(e){const i=e.lastSegment(),a=e.popLast(),o=this.index[i];return o&&o.has(a)}getEntries(e){return(this.index[e]||new zt(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uT=41943040;class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,i,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(uT,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new eo(0)}static Un(){return new eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="LruGarbageCollector",CO=1048576;function R_([r,e],[i,a]){const o=He(r,i);return o===0?He(e,a):o}class DO{constructor(e){this.Hn=e,this.buffer=new zt(R_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const i=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();R_(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class OO{constructor(e,i,a){this.garbageCollector=e,this.asyncQueue=i,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){le(w_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){ql(i)?le(w_,"Ignoring IndexedDB error during garbage collection: ",i):await Pm(i)}await this.er(3e5)})}}class NO{constructor(e,i){this.tr=e,this.params=i}calculateTargetCount(e,i){return this.tr.nr(e).next(a=>Math.floor(i/100*a))}nthSequenceNumber(e,i){if(i===0)return W.resolve(Lm.ae);const a=new DO(i);return this.tr.forEachTarget(e,o=>a.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>a.Zn(o))).next(()=>a.maxValue)}removeTargets(e,i,a){return this.tr.removeTargets(e,i,a)}removeOrphanedDocuments(e,i){return this.tr.removeOrphanedDocuments(e,i)}collect(e,i){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(b_)):this.getCacheSize(e).next(a=>a<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),b_):this.ir(e,i))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,i){let a,o,c,f,m,g,y;const A=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(e,o))).next(b=>(a=b,m=Date.now(),this.removeTargets(e,a,i))).next(b=>(c=b,g=Date.now(),this.removeOrphanedDocuments(e,a))).next(b=>(y=Date.now(),Ha()<=De.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-A}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${c} targets in `+(g-m)+`ms
	Removed ${b} documents in `+(y-g)+`ms
Total Duration: ${y-A}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:b})))}}function MO(r,e){return new NO(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(){this.changes=new Xs(e=>e.toString(),(e,i)=>e.isEqual(i)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,i){this.assertNotApplied(),this.changes.set(e,jn.newInvalidDocument(e).setReadTime(i))}getEntry(e,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?W.resolve(a):this.getFromCache(e,i)}getEntries(e,i){return this.getAllFromCache(e,i)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,i){this.overlayedDocument=e,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,i,a,o){this.remoteDocumentCache=e,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=o}getDocument(e,i){let a=null;return this.documentOverlayCache.getOverlay(e,i).next(o=>(a=o,this.remoteDocumentCache.getEntry(e,i))).next(o=>(a!==null&&Il(a.mutation,o,Hn.empty(),At.now()),o))}getDocuments(e,i){return this.remoteDocumentCache.getEntries(e,i).next(a=>this.getLocalViewOfDocuments(e,a,Kt()).next(()=>a))}getLocalViewOfDocuments(e,i,a=Kt()){const o=Ps();return this.populateOverlays(e,o,i).next(()=>this.computeViews(e,i,o,a).next(c=>{let f=Tc();return c.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(e,i){const a=Ps();return this.populateOverlays(e,a,i).next(()=>this.computeViews(e,i,a,Kt()))}populateOverlays(e,i,a){const o=[];return a.forEach(c=>{i.has(c)||o.push(c)}),this.documentOverlayCache.getOverlays(e,o).next(c=>{c.forEach((f,m)=>{i.set(f,m)})})}computeViews(e,i,a,o){let c=Qc();const f=Rl(),m=function(){return Rl()}();return i.forEach((g,y)=>{const A=a.get(y.key);o.has(y.key)&&(A===void 0||A.mutation instanceof Ws)?c=c.insert(y.key,y):A!==void 0?(f.set(y.key,A.mutation.getFieldMask()),Il(A.mutation,y,A.mutation.getFieldMask(),At.now())):f.set(y.key,Hn.empty())}),this.recalculateAndSaveOverlays(e,c).next(g=>(g.forEach((y,A)=>f.set(y,A)),i.forEach((y,A)=>{var b;return m.set(y,new VO(A,(b=f.get(y))!==null&&b!==void 0?b:null))}),m))}recalculateAndSaveOverlays(e,i){const a=Rl();let o=new an((f,m)=>f-m),c=Kt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,i).next(f=>{for(const m of f)m.keys().forEach(g=>{const y=i.get(g);if(y===null)return;let A=a.get(g)||Hn.empty();A=m.applyToLocalView(y,A),a.set(g,A);const b=(o.get(m.batchId)||Kt()).add(g);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,A=g.value,b=Z0();A.forEach(D=>{if(!c.has(D)){const j=rT(i.get(D),a.get(D));j!==null&&b.set(D,j),c=c.add(D)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,b))}return W.waitFor(f)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,i){return this.remoteDocumentCache.getEntries(e,i).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,i,a,o){return function(f){return be.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(e,i.path):GD(i)?this.getDocumentsMatchingCollectionGroupQuery(e,i,a,o):this.getDocumentsMatchingCollectionQuery(e,i,a,o)}getNextDocuments(e,i,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,i,a,o).next(c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,i,a.largestBatchId,o-c.size):W.resolve(Ps());let m=Nl,g=c;return f.next(y=>W.forEach(y,(A,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),c.get(A)?W.resolve():this.remoteDocumentCache.getEntry(e,A).next(D=>{g=g.insert(A,D)}))).next(()=>this.populateOverlays(e,y,c)).next(()=>this.computeViews(e,g,y,Kt())).next(A=>({batchId:m,changes:W0(A)})))})}getDocumentsMatchingDocumentQuery(e,i){return this.getDocument(e,new be(i)).next(a=>{let o=Tc();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o})}getDocumentsMatchingCollectionGroupQuery(e,i,a,o){const c=i.collectionGroup;let f=Tc();return this.indexManager.getCollectionParents(e,c).next(m=>W.forEach(m,g=>{const y=function(b,D){return new fh(D,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(i,g.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,a,o).next(A=>{A.forEach((b,D)=>{f=f.insert(b,D)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,i,a,o){let c;return this.documentOverlayCache.getOverlaysForCollection(e,i.path,a.largestBatchId).next(f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,i,a,c,o))).next(f=>{c.forEach((g,y)=>{const A=y.getKey();f.get(A)===null&&(f=f.insert(A,jn.newInvalidDocument(A)))});let m=Tc();return f.forEach((g,y)=>{const A=c.get(g);A!==void 0&&Il(A.mutation,y,Hn.empty(),At.now()),Gm(i,y)&&(m=m.insert(g,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,i){return W.resolve(this.dr.get(i))}saveBundleMetadata(e,i){return this.dr.set(i.id,function(o){return{id:o.id,version:o.version,createTime:Ya(o.createTime)}}(i)),W.resolve()}getNamedQuery(e,i){return W.resolve(this.Ar.get(i))}saveNamedQuery(e,i){return this.Ar.set(i.name,function(o){return{name:o.name,query:wO(o.bundledQuery),readTime:Ya(o.readTime)}}(i)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(){this.overlays=new an(be.comparator),this.Rr=new Map}getOverlay(e,i){return W.resolve(this.overlays.get(i))}getOverlays(e,i){const a=Ps();return W.forEach(i,o=>this.getOverlay(e,o).next(c=>{c!==null&&a.set(o,c)})).next(()=>a)}saveOverlays(e,i,a){return a.forEach((o,c)=>{this.Et(e,i,c)}),W.resolve()}removeOverlaysForBatchId(e,i,a){const o=this.Rr.get(a);return o!==void 0&&(o.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(a)),W.resolve()}getOverlaysForCollection(e,i,a){const o=Ps(),c=i.length+1,f=new be(i.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>a&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,i,a,o){let c=new an((y,A)=>y-A);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>a){let A=c.get(y.largestBatchId);A===null&&(A=Ps(),c=c.insert(y.largestBatchId,A)),A.set(y.getKey(),y)}}const m=Ps(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,A)=>m.set(y,A)),!(m.size()>=o)););return W.resolve(m)}Et(e,i,a){const o=this.overlays.get(a.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(a.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new uO(i,a));let c=this.Rr.get(i);c===void 0&&(c=Kt(),this.Rr.set(i,c)),this.Rr.set(i,c.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(){this.sessionToken=pi.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,i){return this.sessionToken=i,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.Vr=new zt(Ot.mr),this.gr=new zt(Ot.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,i){const a=new Ot(e,i);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(e,i){e.forEach(a=>this.addReference(a,i))}removeReference(e,i){this.wr(new Ot(e,i))}br(e,i){e.forEach(a=>this.removeReference(a,i))}Sr(e){const i=new be(new st([])),a=new Ot(i,e),o=new Ot(i,e+1),c=[];return this.gr.forEachInRange([a,o],f=>{this.wr(f),c.push(f.key)}),c}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const i=new be(new st([])),a=new Ot(i,e),o=new Ot(i,e+1);let c=Kt();return this.gr.forEachInRange([a,o],f=>{c=c.add(f.key)}),c}containsKey(e){const i=new Ot(e,0),a=this.Vr.firstAfterOrEqual(i);return a!==null&&e.isEqual(a.key)}}class Ot{constructor(e,i){this.key=e,this.Cr=i}static mr(e,i){return be.comparator(e.key,i.key)||He(e.Cr,i.Cr)}static pr(e,i){return He(e.Cr,i.Cr)||be.comparator(e.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,i){this.indexManager=e,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new zt(Ot.mr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,i,a,o){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new lO(c,i,a,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new Ot(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(f)}lookupMutationBatch(e,i){return W.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(e,i){const a=i+1,o=this.Nr(a),c=o<0?0:o;return W.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Um:this.Fr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,i){const a=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([a,o],f=>{const m=this.Or(f.Cr);c.push(m)}),W.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,i){let a=new zt(He);return i.forEach(o=>{const c=new Ot(o,0),f=new Ot(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,f],m=>{a=a.add(m.Cr)})}),W.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(e,i){const a=i.path,o=a.length+1;let c=a;be.isDocumentKey(c)||(c=c.child(""));const f=new Ot(new be(c),0);let m=new zt(He);return this.Mr.forEachWhile(g=>{const y=g.key.path;return!!a.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Cr)),!0)},f),W.resolve(this.Br(m))}Br(e){const i=[];return e.forEach(a=>{const o=this.Or(a);o!==null&&i.push(o)}),i}removeMutationBatch(e,i){at(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return W.forEach(i.mutations,o=>{const c=new Ot(o.key,i.batchId);return a=a.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=a})}qn(e){}containsKey(e,i){const a=new Ot(i,0),o=this.Mr.firstAfterOrEqual(a);return W.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Lr(e,i){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const i=this.Nr(e);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.kr=e,this.docs=function(){return new an(be.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,i){const a=i.key,o=this.docs.get(a),c=o?o.size:0,f=this.kr(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const i=this.docs.get(e);i&&(this.docs=this.docs.remove(e),this.size-=i.size)}getEntry(e,i){const a=this.docs.get(i);return W.resolve(a?a.document.mutableCopy():jn.newInvalidDocument(i))}getEntries(e,i){let a=Qc();return i.forEach(o=>{const c=this.docs.get(o);a=a.insert(o,c?c.document.mutableCopy():jn.newInvalidDocument(o))}),W.resolve(a)}getDocumentsMatchingQuery(e,i,a,o){let c=Qc();const f=i.path,m=new be(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:A}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||ED(_D(A),a)<=0||(o.has(A.key)||Gm(i,A))&&(c=c.insert(A.key,A.mutableCopy()))}return W.resolve(c)}getAllFromCollectionGroup(e,i,a,o){Ce()}qr(e,i){return W.forEach(this.docs,a=>i(a))}newChangeBuffer(e){return new BO(this)}getSize(e){return W.resolve(this.size)}}class BO extends xO{constructor(e){super(),this.Ir=e}applyChanges(e){const i=[];return this.changes.forEach((a,o)=>{o.isValidDocument()?i.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(a)}),W.waitFor(i)}getFromCache(e,i){return this.Ir.getEntry(e,i)}getAllFromCache(e,i){return this.Ir.getEntries(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e){this.persistence=e,this.Qr=new Xs(i=>qm(i),Fm),this.lastRemoteSnapshotVersion=Qe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Ym,this.targetCount=0,this.Ur=eo.Kn()}forEachTarget(e,i){return this.Qr.forEach((a,o)=>i(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.$r&&(this.$r=i),W.resolve()}zn(e){this.Qr.set(e.target,e);const i=e.targetId;i>this.highestTargetId&&(this.Ur=new eo(i),this.highestTargetId=i),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,i){return this.zn(i),this.targetCount+=1,W.resolve()}updateTargetData(e,i){return this.zn(i),W.resolve()}removeTargetData(e,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,i,a){let o=0;const c=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=i&&a.get(m.targetId)===null&&(this.Qr.delete(f),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),W.waitFor(c).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,i){const a=this.Qr.get(i)||null;return W.resolve(a)}addMatchingKeys(e,i,a){return this.Kr.yr(i,a),W.resolve()}removeMatchingKeys(e,i,a){this.Kr.br(i,a);const o=this.persistence.referenceDelegate,c=[];return o&&i.forEach(f=>{c.push(o.markPotentiallyOrphaned(e,f))}),W.waitFor(c)}removeMatchingKeysForTargetId(e,i){return this.Kr.Sr(i),W.resolve()}getMatchingKeysForTargetId(e,i){const a=this.Kr.vr(i);return W.resolve(a)}containsKey(e,i){return W.resolve(this.Kr.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,i){this.Wr={},this.overlays={},this.Gr=new Lm(0),this.zr=!1,this.zr=!0,this.jr=new UO,this.referenceDelegate=e(this),this.Hr=new HO(this),this.indexManager=new RO,this.remoteDocumentCache=function(o){return new jO(o)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new bO(i),this.Yr=new PO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let i=this.overlays[e.toKey()];return i||(i=new LO,this.overlays[e.toKey()]=i),i}getMutationQueue(e,i){let a=this.Wr[e.toKey()];return a||(a=new zO(i,this.referenceDelegate),this.Wr[e.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,i,a){le("MemoryPersistence","Starting transaction:",e);const o=new qO(this.Gr.next());return this.referenceDelegate.Zr(),a(o).next(c=>this.referenceDelegate.Xr(o).next(()=>c)).toPromise().then(c=>(o.raiseOnCommittedEvent(),c))}ei(e,i){return W.or(Object.values(this.Wr).map(a=>()=>a.containsKey(e,i)))}}class qO extends AD{constructor(e){super(),this.currentSequenceNumber=e}}class Qm{constructor(e){this.persistence=e,this.ti=new Ym,this.ni=null}static ri(e){return new Qm(e)}get ii(){if(this.ni)return this.ni;throw Ce()}addReference(e,i,a){return this.ti.addReference(a,i),this.ii.delete(a.toString()),W.resolve()}removeReference(e,i,a){return this.ti.removeReference(a,i),this.ii.add(a.toString()),W.resolve()}markPotentiallyOrphaned(e,i){return this.ii.add(i.toString()),W.resolve()}removeTarget(e,i){this.ti.Sr(i.targetId).forEach(o=>this.ii.add(o.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,i.targetId).next(o=>{o.forEach(c=>this.ii.add(c.toString()))}).next(()=>a.removeTargetData(e,i))}Zr(){this.ni=new Set}Xr(e){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.ii,a=>{const o=be.fromPath(a);return this.si(e,o).next(c=>{c||i.removeEntry(o,Qe.min())})}).next(()=>(this.ni=null,i.apply(e)))}updateLimboDocument(e,i){return this.si(e,i).next(a=>{a?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(e){return 0}si(e,i){return W.or([()=>W.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(e,i),()=>this.persistence.ei(e,i)])}}class Zc{constructor(e,i){this.persistence=e,this.oi=new Xs(a=>wD(a.path),(a,o)=>a.isEqual(o)),this.garbageCollector=MO(this,i)}static ri(e,i){return new Zc(e,i)}Zr(){}Xr(e){return W.resolve()}forEachTarget(e,i){return this.persistence.getTargetCache().forEachTarget(e,i)}nr(e){const i=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(a=>i.next(o=>a+o))}sr(e){let i=0;return this.rr(e,a=>{i++}).next(()=>i)}rr(e,i){return W.forEach(this.oi,(a,o)=>this.ar(e,a,o).next(c=>c?W.resolve():i(o)))}removeTargets(e,i,a){return this.persistence.getTargetCache().removeTargets(e,i,a)}removeOrphanedDocuments(e,i){let a=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.qr(e,f=>this.ar(e,f,i).next(m=>{m||(a++,c.removeEntry(f,Qe.min()))})).next(()=>c.apply(e)).next(()=>a)}markPotentiallyOrphaned(e,i){return this.oi.set(i,e.currentSequenceNumber),W.resolve()}removeTarget(e,i){const a=i.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,i,a){return this.oi.set(a,e.currentSequenceNumber),W.resolve()}removeReference(e,i,a){return this.oi.set(a,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,i){return this.oi.set(i,e.currentSequenceNumber),W.resolve()}Jr(e){let i=e.key.toString().length;return e.isFoundDocument()&&(i+=Oc(e.data.value)),i}ar(e,i,a){return W.or([()=>this.persistence.ei(e,i),()=>this.persistence.getTargetCache().containsKey(e,i),()=>{const o=this.oi.get(i);return W.resolve(o!==void 0&&o>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,i,a,o){this.targetId=e,this.fromCache=i,this.Hi=a,this.Ji=o}static Yi(e,i){let a=Kt(),o=Kt();for(const c of i.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Xm(e,i.fromCache,a,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Jb()?8:SD($t())>0?6:4}()}initialize(e,i){this.ns=e,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(e,i,a,o){const c={result:null};return this.rs(e,i).next(f=>{c.result=f}).next(()=>{if(!c.result)return this.ss(e,i,o,a).next(f=>{c.result=f})}).next(()=>{if(c.result)return;const f=new FO;return this._s(e,i,f).next(m=>{if(c.result=m,this.Xi)return this.us(e,i,f,m.size)})}).next(()=>c.result)}us(e,i,a,o){return a.documentReadCount<this.es?(Ha()<=De.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",vl(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),W.resolve()):(Ha()<=De.DEBUG&&le("QueryEngine","Query:",vl(i),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.ts*o?(Ha()<=De.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",vl(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Us(i))):W.resolve())}rs(e,i){if(v_(i))return W.resolve(null);let a=Us(i);return this.indexManager.getIndexType(e,a).next(o=>o===0?null:(i.limit!==null&&o===1&&(i=im(i,null,"F"),a=Us(i)),this.indexManager.getDocumentsMatchingTarget(e,a).next(c=>{const f=Kt(...c);return this.ns.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,a).next(g=>{const y=this.cs(i,m);return this.ls(i,y,f,g.readTime)?this.rs(e,im(i,null,"F")):this.hs(e,y,i,g)}))})))}ss(e,i,a,o){return v_(i)||o.isEqual(Qe.min())?W.resolve(null):this.ns.getDocuments(e,a).next(c=>{const f=this.cs(i,c);return this.ls(i,f,a,o)?W.resolve(null):(Ha()<=De.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vl(i)),this.hs(e,f,i,vD(o,Nl)).next(m=>m))})}cs(e,i){let a=new zt($D(e));return i.forEach((o,c)=>{Gm(e,c)&&(a=a.add(c))}),a}ls(e,i,a,o){if(e.limit===null)return!1;if(a.size!==i.size)return!0;const c=e.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}_s(e,i,a){return Ha()<=De.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",vl(i)),this.ns.getDocumentsMatchingQuery(e,i,Yr.min(),a)}hs(e,i,a,o){return this.ns.getDocumentsMatchingQuery(e,a,o).next(c=>(i.forEach(f=>{c=c.insert(f.key,f)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO="LocalStore";class $O{constructor(e,i,a,o){this.persistence=e,this.Ps=i,this.serializer=o,this.Ts=new an(He),this.Is=new Xs(c=>qm(c),Fm),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(a)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kO(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>e.collect(i,this.Ts))}}function YO(r,e,i,a){return new $O(r,e,i,a)}async function hT(r,e){const i=Ye(r);return await i.persistence.runTransaction("Handle user change","readonly",a=>{let o;return i.mutationQueue.getAllMutationBatches(a).next(c=>(o=c,i.As(e),i.mutationQueue.getAllMutationBatches(a))).next(c=>{const f=[],m=[];let g=Kt();for(const y of o){f.push(y.batchId);for(const A of y.mutations)g=g.add(A.key)}for(const y of c){m.push(y.batchId);for(const A of y.mutations)g=g.add(A.key)}return i.localDocuments.getDocuments(a,g).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:m}))})})}function QO(r,e){const i=Ye(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const o=e.batch.keys(),c=i.ds.newChangeBuffer({trackRemovals:!0});return function(m,g,y,A){const b=y.batch,D=b.keys();let j=W.resolve();return D.forEach(P=>{j=j.next(()=>A.getEntry(g,P)).next(Y=>{const F=y.docVersions.get(P);at(F!==null),Y.version.compareTo(F)<0&&(b.applyToRemoteDocument(Y,y),Y.isValidDocument()&&(Y.setReadTime(y.commitVersion),A.addEntry(Y)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(g,b))}(i,a,e,c).next(()=>c.apply(a)).next(()=>i.mutationQueue.performConsistencyCheck(a)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(a,o,e.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(m){let g=Kt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g}(e))).next(()=>i.localDocuments.getDocuments(a,o))})}function XO(r){const e=Ye(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",i=>e.Hr.getLastRemoteSnapshotVersion(i))}function WO(r,e){const i=Ye(r);return i.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=Um),i.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}class I_{constructor(){this.activeTargetIds=JD()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZO{constructor(){this.ho=new I_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,i,a){}addLocalQueryTarget(e,i=!0){return i&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,i,a){this.Po[e]=i}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new I_,Promise.resolve()}handleUserChange(e,i,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="ConnectivityMonitor";class D_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){le(C_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){le(C_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac=null;function om(){return Ac===null?Ac=function(){return 268435456+Math.round(2147483648*Math.random())}():Ac++,"0x"+Ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="RestConnection",e2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class t2{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=i+"://"+e.host,this.yo=`projects/${a}/databases/${o}`,this.wo=this.databaseId.database===Gc?`project_id=${a}`:`project_id=${a}&database_id=${o}`}bo(e,i,a,o,c){const f=om(),m=this.So(e,i.toUriEncodedString());le(Ld,`Sending RPC '${e}' ${f}:`,m,a);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,c),this.vo(e,m,g,a).then(y=>(le(Ld,`Received RPC '${e}' ${f}: `,y),y),y=>{throw hh(Ld,`RPC '${e}' ${f} failed with error: `,y,"url: ",m,"request:",a),y})}Co(e,i,a,o,c,f){return this.bo(e,i,a,o,c)}Do(e,i,a){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,c)=>e[c]=o),a&&a.headers.forEach((o,c)=>e[c]=o)}So(e,i){const a=e2[e];return`${this.po}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class i2 extends t2{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,i,a,o){const c=om();return new Promise((f,m)=>{const g=new R0;g.setWithCredentials(!0),g.listenOnce(I0.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Dc.NO_ERROR:const A=g.getResponseJson();le(Ft,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(A)),f(A);break;case Dc.TIMEOUT:le(Ft,`RPC '${e}' ${c} timed out`),m(new ve(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const b=g.getStatus();if(le(Ft,`RPC '${e}' ${c} failed with status:`,b,"response text:",g.getResponseText()),b>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const j=D==null?void 0:D.error;if(j&&j.status&&j.message){const P=function(F){const X=F.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(X)>=0?X:ee.UNKNOWN}(j.status);m(new ve(P,j.message))}else m(new ve(ee.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ve(ee.UNAVAILABLE,"Connection failed."));break;default:Ce()}}finally{le(Ft,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(o);le(Ft,`RPC '${e}' ${c} sending request:`,o),g.send(i,"POST",y,a,15)})}Wo(e,i,a){const o=om(),c=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=O0(),m=D0(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,i,a),g.encodeInitMessageHeaders=!0;const A=c.join("");le(Ft,`Creating RPC '${e}' stream ${o}: ${A}`,g);const b=f.createWebChannel(A,g);let D=!1,j=!1;const P=new n2({Fo:F=>{j?le(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(D||(le(Ft,`Opening RPC '${e}' stream ${o} transport.`),b.open(),D=!0),le(Ft,`RPC '${e}' stream ${o} sending:`,F),b.send(F))},Mo:()=>b.close()}),Y=(F,X,ie)=>{F.listen(X,te=>{try{ie(te)}catch(me){setTimeout(()=>{throw me},0)}})};return Y(b,Tl.EventType.OPEN,()=>{j||(le(Ft,`RPC '${e}' stream ${o} transport opened.`),P.Qo())}),Y(b,Tl.EventType.CLOSE,()=>{j||(j=!0,le(Ft,`RPC '${e}' stream ${o} transport closed`),P.Ko())}),Y(b,Tl.EventType.ERROR,F=>{j||(j=!0,hh(Ft,`RPC '${e}' stream ${o} transport errored:`,F),P.Ko(new ve(ee.UNAVAILABLE,"The operation could not be completed")))}),Y(b,Tl.EventType.MESSAGE,F=>{var X;if(!j){const ie=F.data[0];at(!!ie);const te=ie,me=(te==null?void 0:te.error)||((X=te[0])===null||X===void 0?void 0:X.error);if(me){le(Ft,`RPC '${e}' stream ${o} received error:`,me);const he=me.status;let Ae=function(S){const I=mt[S];if(I!==void 0)return hO(I)}(he),M=me.message;Ae===void 0&&(Ae=ee.INTERNAL,M="Unknown error status: "+he+" with message "+me.message),j=!0,P.Ko(new ve(Ae,M)),b.close()}else le(Ft,`RPC '${e}' stream ${o} received:`,ie),P.Uo(ie)}}),Y(m,C0.STAT_EVENT,F=>{F.stat===Zd.PROXY?le(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===Zd.NOPROXY&&le(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function Ud(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(r){return new fO(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,i,a=1e3,o=1.5,c=6e4){this.Ti=e,this.timerId=i,this.Go=a,this.zo=o,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const i=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),o=Math.max(0,i-a);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="PersistentStream";class r2{constructor(e,i,a,o,c,f,m,g){this.Ti=e,this.n_=a,this.r_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new fT(e,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():i&&i.code===ee.RESOURCE_EXHAUSTED?(Fs(i.toString()),Fs("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,o])=>{this.i_===i&&this.V_(a,o)},a=>{e(()=>{const o=new ve(ee.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(o)})})}V_(e,i){const a=this.R_(this.i_);this.stream=this.f_(e,i),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{a(()=>this.m_(o))}),this.stream.onMessage(o=>{a(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return le(O_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return i=>{this.Ti.enqueueAndForget(()=>this.i_===e?i():(le(O_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s2 extends r2{constructor(e,i,a,o,c,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,f),this.serializer=c}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,i){return this.connection.Wo("Write",e,i)}g_(e){return at(!!e.streamToken),this.lastStreamToken=e.streamToken,at(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){at(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const i=EO(e.writeResults,e.commitTime),a=Ya(e.commitTime);return this.listener.v_(a,i)}C_(){const e={};e.database=yO(this.serializer),this.I_(e)}S_(e){const i={streamToken:this.lastStreamToken,writes:e.map(a=>_O(this.serializer,a))};this.I_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{}class o2 extends a2{constructor(e,i,a,o){super(),this.authCredentials=e,this.appCheckCredentials=i,this.connection=a,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,i,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.bo(e,sm(i,a),o,c,f)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ve(ee.UNKNOWN,c.toString())})}Co(e,i,a,o,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(e,sm(i,a),o,f,m,c)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ve(ee.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class l2{constructor(e,i){this.asyncQueue=e,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const i=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Fs(i),this.N_=!1):le("OnlineStateTracker",i)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="RemoteStore";class u2{constructor(e,i,a,o,c){this.localStore=e,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(f=>{a.enqueueAndForget(async()=>{$l(this)&&(le(Gl,"Restarting streams for network reachability change."),await async function(g){const y=Ye(g);y.W_.add(4),await Kl(y),y.j_.set("Unknown"),y.W_.delete(4),await gh(y)}(this))})}),this.j_=new l2(a,o)}}async function gh(r){if($l(r))for(const e of r.G_)await e(!0)}async function Kl(r){for(const e of r.G_)await e(!1)}function $l(r){return Ye(r).W_.size===0}async function dT(r,e,i){if(!ql(e))throw e;r.W_.add(1),await Kl(r),r.j_.set("Offline"),i||(i=()=>XO(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{le(Gl,"Retrying IndexedDB access"),await i(),r.W_.delete(1),await gh(r)})}function mT(r,e){return e().catch(i=>dT(r,i,e))}async function yh(r){const e=Ye(r),i=Xr(e);let a=e.K_.length>0?e.K_[e.K_.length-1].batchId:Um;for(;c2(e);)try{const o=await WO(e.localStore,a);if(o===null){e.K_.length===0&&i.P_();break}a=o.batchId,h2(e,o)}catch(o){await dT(e,o)}pT(e)&&gT(e)}function c2(r){return $l(r)&&r.K_.length<10}function h2(r,e){r.K_.push(e);const i=Xr(r);i.c_()&&i.b_&&i.S_(e.mutations)}function pT(r){return $l(r)&&!Xr(r).u_()&&r.K_.length>0}function gT(r){Xr(r).start()}async function f2(r){Xr(r).C_()}async function d2(r){const e=Xr(r);for(const i of r.K_)e.S_(i.mutations)}async function m2(r,e,i){const a=r.K_.shift(),o=$m.from(a,e,i);await mT(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await yh(r)}async function p2(r,e){e&&Xr(r).b_&&await async function(a,o){if(function(f){return cO(f)&&f!==ee.ABORTED}(o.code)){const c=a.K_.shift();Xr(a).h_(),await mT(a,()=>a.remoteSyncer.rejectFailedWrite(c.batchId,o)),await yh(a)}}(r,e),pT(r)&&gT(r)}async function N_(r,e){const i=Ye(r);i.asyncQueue.verifyOperationInProgress(),le(Gl,"RemoteStore received new credentials");const a=$l(i);i.W_.add(3),await Kl(i),a&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.W_.delete(3),await gh(i)}async function g2(r,e){const i=Ye(r);e?(i.W_.delete(2),await gh(i)):e||(i.W_.add(2),await Kl(i),i.j_.set("Unknown"))}function Xr(r){return r.Y_||(r.Y_=function(i,a,o){const c=Ye(i);return c.M_(),new s2(a,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:f2.bind(null,r),Lo:p2.bind(null,r),D_:d2.bind(null,r),v_:m2.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await yh(r)):(await r.Y_.stop(),r.K_.length>0&&(le(Gl,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,i,a,o,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=a,this.op=o,this.removalCallback=c,this.deferred=new Ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,a,o,c){const f=Date.now()+a,m=new Wm(e,i,f,o,c);return m.start(a),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yT(r,e){if(Fs("AsyncQueue",`${e}: ${r}`),ql(r))return new ve(ee.UNAVAILABLE,`${e}: ${r}`);throw r}class y2{constructor(){this.queries=M_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,a){const o=Ye(i),c=o.queries;o.queries=M_(),c.forEach((f,m)=>{for(const g of m.ta)g.onError(a)})})(this,new ve(ee.ABORTED,"Firestore shutting down"))}}function M_(){return new Xs(r=>Q0(r),Y0)}function v2(r){r.ia.forEach(e=>{e.next()})}var x_,V_;(V_=x_||(x_={}))._a="default",V_.Cache="cache";const _2="SyncEngine";class E2{constructor(e,i,a,o,c,f){this.localStore=e,this.remoteStore=i,this.eventManager=a,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new Xs(m=>Q0(m),Y0),this.qa=new Map,this.Qa=new Set,this.$a=new an(be.comparator),this.Ka=new Map,this.Ua=new Ym,this.Wa={},this.Ga=new Map,this.za=eo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function T2(r,e,i){const a=w2(r);try{const o=await function(f,m){const g=Ye(f),y=At.now(),A=m.reduce((j,P)=>j.add(P.key),Kt());let b,D;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let P=Qc(),Y=Kt();return g.ds.getEntries(j,A).next(F=>{P=F,P.forEach((X,ie)=>{ie.isValidDocument()||(Y=Y.add(X))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,P)).next(F=>{b=F;const X=[];for(const ie of m){const te=aO(ie,b.get(ie.key).overlayedDocument);te!=null&&X.push(new Ws(ie.key,te,B0(te.value.mapValue),Xi.exists(!0)))}return g.mutationQueue.addMutationBatch(j,y,X,m)}).next(F=>{D=F;const X=F.applyToLocalDocumentSet(b,Y);return g.documentOverlayCache.saveOverlays(j,F.batchId,X)})}).then(()=>({batchId:D.batchId,changes:W0(b)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(o.batchId),function(f,m,g){let y=f.Wa[f.currentUser.toKey()];y||(y=new an(He)),y=y.insert(m,g),f.Wa[f.currentUser.toKey()]=y}(a,o.batchId,i),await vh(a,o.changes),await yh(a.remoteStore)}catch(o){const c=yT(o,"Failed to persist write");i.reject(c)}}function k_(r,e,i){const a=Ye(r);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const o=[];a.ka.forEach((c,f)=>{const m=f.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=Ye(f);g.onlineState=m;let y=!1;g.queries.forEach((A,b)=>{for(const D of b.ta)D.sa(m)&&(y=!0)}),y&&v2(g)}(a.eventManager,e),o.length&&a.La.p_(o),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function A2(r,e){const i=Ye(r),a=e.batch.batchId;try{const o=await QO(i.localStore,e);_T(i,a,null),vT(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await vh(i,o)}catch(o){await Pm(o)}}async function S2(r,e,i){const a=Ye(r);try{const o=await function(f,m){const g=Ye(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let A;return g.mutationQueue.lookupMutationBatch(y,m).next(b=>(at(b!==null),A=b.keys(),g.mutationQueue.removeMutationBatch(y,b))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,A,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,A)).next(()=>g.localDocuments.getDocuments(y,A))})}(a.localStore,e);_T(a,e,i),vT(a,e),a.sharedClientState.updateMutationState(e,"rejected",i),await vh(a,o)}catch(o){await Pm(o)}}function vT(r,e){(r.Ga.get(e)||[]).forEach(i=>{i.resolve()}),r.Ga.delete(e)}function _T(r,e,i){const a=Ye(r);let o=a.Wa[a.currentUser.toKey()];if(o){const c=o.get(e);c&&(i?c.reject(i):c.resolve(),o=o.remove(e)),a.Wa[a.currentUser.toKey()]=o}}async function vh(r,e,i){const a=Ye(r),o=[],c=[],f=[];a.ka.isEmpty()||(a.ka.forEach((m,g)=>{f.push(a.Ha(g,e,i).then(y=>{var A;if((y||i)&&a.isPrimaryClient){const b=y?!y.fromCache:(A=void 0)===null||A===void 0?void 0:A.current;a.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(y){o.push(y);const b=Xm.Yi(g.targetId,y);c.push(b)}}))}),await Promise.all(f),a.La.p_(o),await async function(g,y){const A=Ye(g);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>W.forEach(y,D=>W.forEach(D.Hi,j=>A.persistence.referenceDelegate.addReference(b,D.targetId,j)).next(()=>W.forEach(D.Ji,j=>A.persistence.referenceDelegate.removeReference(b,D.targetId,j)))))}catch(b){if(!ql(b))throw b;le(KO,"Failed to update sequence numbers: "+b)}for(const b of y){const D=b.targetId;if(!b.fromCache){const j=A.Ts.get(D),P=j.snapshotVersion,Y=j.withLastLimboFreeSnapshotVersion(P);A.Ts=A.Ts.insert(D,Y)}}}(a.localStore,c))}async function b2(r,e){const i=Ye(r);if(!i.currentUser.isEqual(e)){le(_2,"User change. New user:",e.toKey());const a=await hT(i.localStore,e);i.currentUser=e,function(c,f){c.Ga.forEach(m=>{m.forEach(g=>{g.reject(new ve(ee.CANCELLED,f))})}),c.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await vh(i,a.Rs)}}function w2(r){const e=Ye(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S2.bind(null,e),e}class Jc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ph(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,i){return null}nu(e,i){return null}eu(e){return YO(this.persistence,new GO,e.initialUser,this.serializer)}Xa(e){return new cT(Qm.ri,this.serializer)}Za(e){return new ZO}async terminate(){var e,i;(e=this.gcScheduler)===null||e===void 0||e.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jc.provider={build:()=>new Jc};class R2 extends Jc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,i){at(this.persistence.referenceDelegate instanceof Zc);const a=this.persistence.referenceDelegate.garbageCollector;return new OO(a,e.asyncQueue,i)}Xa(e){const i=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new cT(a=>Zc.ri(a,i),this.serializer)}}class lm{async initialize(e,i){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>k_(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=b2.bind(null,this.syncEngine),await g2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new y2}()}createDatastore(e){const i=ph(e.databaseInfo.databaseId),a=function(c){return new i2(c)}(e.databaseInfo);return function(c,f,m,g){return new o2(c,f,m,g)}(e.authCredentials,e.appCheckCredentials,a,i)}createRemoteStore(e){return function(a,o,c,f,m){return new u2(a,o,c,f,m)}(this.localStore,this.datastore,e.asyncQueue,i=>k_(this.syncEngine,i,0),function(){return D_.D()?new D_:new JO}())}createSyncEngine(e,i){return function(o,c,f,m,g,y,A){const b=new E2(o,c,f,m,g,y);return A&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,i)}async terminate(){var e,i;await async function(o){const c=Ye(o);le(Gl,"RemoteStore shutting down."),c.W_.add(5),await Kl(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}lm.provider={build:()=>new lm};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="FirestoreClient";class I2{constructor(e,i,a,o,c){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=o,this.user=Gt.UNAUTHENTICATED,this.clientId=M0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(a,async f=>{le(Wr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(a,f=>(le(Wr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const a=yT(i,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function zd(r,e){r.asyncQueue.verifyOperationInProgress(),le(Wr,"Initializing OfflineComponentProvider");const i=r.configuration;await e.initialize(i);let a=i.initialUser;r.setCredentialChangeListener(async o=>{a.isEqual(o)||(await hT(e.localStore,o),a=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function P_(r,e){r.asyncQueue.verifyOperationInProgress();const i=await C2(r);le(Wr,"Initializing OnlineComponentProvider"),await e.initialize(i,r.configuration),r.setCredentialChangeListener(a=>N_(e.remoteStore,a)),r.setAppCheckTokenChangeListener((a,o)=>N_(e.remoteStore,o)),r._onlineComponents=e}async function C2(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){le(Wr,"Using user provided OfflineComponentProvider");try{await zd(r,r._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(i))throw i;hh("Error using user provided cache. Falling back to memory cache: "+i),await zd(r,new Jc)}}else le(Wr,"Using default OfflineComponentProvider"),await zd(r,new R2(void 0));return r._offlineComponents}async function D2(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(le(Wr,"Using user provided OnlineComponentProvider"),await P_(r,r._uninitializedComponentsProvider._online)):(le(Wr,"Using default OnlineComponentProvider"),await P_(r,new lm))),r._onlineComponents}function O2(r){return D2(r).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(r,e,i){if(!i)throw new ve(ee.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function N2(r,e,i,a){if(e===!0&&a===!0)throw new ve(ee.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function U_(r){if(!be.isDocumentKey(r))throw new ve(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function z_(r){if(be.isDocumentKey(r))throw new ve(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Zm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ce()}function AT(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ve(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Zm(r);throw new ve(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="firestore.googleapis.com",j_=!0;class B_{constructor(e){var i,a;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ST,this.ssl=j_}else this.host=e.host,this.ssl=(i=e.ssl)!==null&&i!==void 0?i:j_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CO)throw new ve(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}N2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ET((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new ve(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,o){return a.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _h{constructor(e,i,a,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new cD;switch(a.type){case"firstParty":return new mD(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ve(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=L_.get(i);a&&(le("ComponentProvider","Removing Datastore"),L_.delete(i),a.terminate())}(this),Promise.resolve()}}function M2(r,e,i,a={}){var o;const c=(r=AT(r,_h))._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:r._getEmulatorOptions()}),m=`${e}:${i}`;c.host!==ST&&c.host!==m&&hh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:m,ssl:!1,emulatorOptions:a});if(!$r(g,f)&&(r._setSettings(g),a.mockUserToken)){let y,A;if(typeof a.mockUserToken=="string")y=a.mockUserToken,A=Gt.MOCK_USER;else{y=$b(a.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const b=a.mockUserToken.sub||a.mockUserToken.user_id;if(!b)throw new ve(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Gt(b)}r._authCredentials=new hD(new N0(y,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new Jm(this.firestore,e,this._query)}}class Wi{constructor(e,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wi(this.firestore,e,this._key)}}class Kr extends Jm{constructor(e,i,a){super(e,i,FD(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wi(this.firestore,null,new be(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function x2(r,e,...i){if(r=jt(r),TT("collection","path",e),r instanceof _h){const a=st.fromString(e,...i);return z_(a),new Kr(r,null,a)}{if(!(r instanceof Wi||r instanceof Kr))throw new ve(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(st.fromString(e,...i));return z_(a),new Kr(r.firestore,null,a)}}function V2(r,e,...i){if(r=jt(r),arguments.length===1&&(e=M0.newId()),TT("doc","path",e),r instanceof _h){const a=st.fromString(e,...i);return U_(a),new Wi(r,null,new be(a))}{if(!(r instanceof Wi||r instanceof Kr))throw new ve(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(st.fromString(e,...i));return U_(a),new Wi(r.firestore,r instanceof Kr?r.converter:null,new be(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="AsyncQueue";class q_{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new fT(this,"async_queue_retry"),this.bu=()=>{const a=Ud();a&&le(H_,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.Su=e;const i=Ud();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const i=Ud();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const i=new Ls;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ql(e))throw e;le(H_,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const i=this.Su.then(()=>(this.pu=!0,e().catch(a=>{this.gu=a,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(a);throw Fs("INTERNAL UNHANDLED ERROR: ",o),a}).then(a=>(this.pu=!1,a))));return this.Su=i,i}enqueueAfterDelay(e,i,a){this.Du(),this.wu.indexOf(e)>-1&&(i=0);const o=Wm.createAndSchedule(this,e,i,a,c=>this.Fu(c));return this.fu.push(o),o}Du(){this.gu&&Ce()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const i of this.fu)if(i.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const i=this.fu.indexOf(e);this.fu.splice(i,1)}}class bT extends _h{constructor(e,i,a,o){super(e,i,a,o),this.type="firestore",this._queue=new q_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new q_(e),this._firestoreClient=void 0,await e}}}function k2(r,e){const i=typeof r=="object"?r:_m(),a=typeof r=="string"?r:Gc,o=Ys(i,"firestore").getImmediate({identifier:a});if(!o._initialized){const c=Gb("firestore");c&&M2(o,...c)}return o}function P2(r){if(r._terminated)throw new ve(ee.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||L2(r),r._firestoreClient}function L2(r){var e,i,a;const o=r._freezeSettings(),c=function(m,g,y,A){return new DD(m,g,y,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,ET(A.experimentalLongPollingOptions),A.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((i=o.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((a=o.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new I2(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kl(pi.fromBase64String(e))}catch(i){throw new ve(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new kl(pi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new ve(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new ve(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new ve(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(a,o){if(a.length!==o.length)return!1;for(let c=0;c<a.length;++c)if(a[c]!==o[c])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=/^__.*__$/;class z2{constructor(e,i,a){this.data=e,this.fieldMask=i,this.fieldTransforms=a}toMutation(e,i){return this.fieldMask!==null?new Ws(e,this.data,this.fieldMask,i,this.fieldTransforms):new Fl(e,this.data,i,this.fieldTransforms)}}function DT(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce()}}class ep{constructor(e,i,a,o,c,f){this.settings=e,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=o,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(e),o=this.ku({path:a,Qu:!1});return o.$u(e),o}Ku(e){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(e),o=this.ku({path:a,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return eh(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(i=>e.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>e.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(DT(this.Lu)&&U2.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class j2{constructor(e,i,a){this.databaseId=e,this.ignoreUndefinedProperties=i,this.serializer=a||ph(e)}ju(e,i,a,o=!1){return new ep({Lu:e,methodName:i,zu:a,path:Ut.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function B2(r){const e=r._freezeSettings(),i=ph(r._databaseId);return new j2(r._databaseId,!!e.ignoreUndefinedProperties,i)}function H2(r,e,i,a,o,c={}){const f=r.ju(c.merge||c.mergeFields?2:0,e,i,o);xT("Data must be an object, but it was:",f,a);const m=NT(a,f);let g,y;if(c.merge)g=new Hn(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const A=[];for(const b of c.mergeFields){const D=q2(e,b,i);if(!f.contains(D))throw new ve(ee.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);K2(A,D)||A.push(D)}g=new Hn(A),y=f.fieldTransforms.filter(b=>g.covers(b.field))}else g=null,y=f.fieldTransforms;return new z2(new Bn(m),g,y)}function OT(r,e){if(MT(r=jt(r)))return xT("Unsupported field value:",e,r),NT(r,e);if(r instanceof RT)return function(a,o){if(!DT(o.Lu))throw o.Wu(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${a._methodName}() is not currently supported inside arrays`);const c=a._toFieldTransform(o);c&&o.fieldTransforms.push(c)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(a,o){const c=[];let f=0;for(const m of a){let g=OT(m,o.Uu(f));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),f++}return{arrayValue:{values:c}}}(r,e)}return function(a,o){if((a=jt(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return eO(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const c=At.fromDate(a);return{timestampValue:rm(o.serializer,c)}}if(a instanceof At){const c=new At(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:rm(o.serializer,c)}}if(a instanceof IT)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof kl)return{bytesValue:dO(o.serializer,a._byteString)};if(a instanceof Wi){const c=o.databaseId,f=a.firestore._databaseId;if(!f.isEqual(c))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:oT(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof CT)return function(f,m){return{mapValue:{fields:{[z0]:{stringValue:j0},[Jd]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return Km(m.serializer,y)})}}}}}}(a,o);throw o.Wu(`Unsupported field value: ${Zm(a)}`)}(r,e)}function NT(r,e){const i={};return V0(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oo(r,(a,o)=>{const c=OT(o,e.qu(a));c!=null&&(i[a]=c)}),{mapValue:{fields:i}}}function MT(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof At||r instanceof IT||r instanceof kl||r instanceof Wi||r instanceof RT||r instanceof CT)}function xT(r,e,i){if(!MT(i)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(i)){const a=Zm(i);throw a==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+a)}}function q2(r,e,i){if((e=jt(e))instanceof wT)return e._internalPath;if(typeof e=="string")return G2(r,e);throw eh("Field path arguments must be of type string or ",r,!1,void 0,i)}const F2=new RegExp("[~\\*/\\[\\]]");function G2(r,e,i){if(e.search(F2)>=0)throw eh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new wT(...e.split("."))._internalPath}catch{throw eh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function eh(r,e,i,a,o){const c=a&&!a.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;i&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(c||f)&&(g+=" (found",c&&(g+=` in field ${a}`),f&&(g+=` in document ${o}`),g+=")"),new ve(ee.INVALID_ARGUMENT,m+r+g)}function K2(r,e){return r.some(i=>i.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(r,e,i){let a;return a=r?r.toFirestore(e):e,a}function Y2(r,e){const i=AT(r.firestore,bT),a=V2(r),o=$2(r.converter,e);return Q2(i,[H2(B2(r.firestore),"addDoc",a._key,o,r.converter!==null,{}).toMutation(a._key,Xi.exists(!1))]).then(()=>a)}function Q2(r,e){return function(a,o){const c=new Ls;return a.asyncQueue.enqueueAndForget(async()=>T2(await O2(a),o,c)),c.promise}(P2(r),e)}(function(e,i=!0){(function(o){ao=o})(ro),mi(new Fn("firestore",(a,{instanceIdentifier:o,options:c})=>{const f=a.getProvider("app").getImmediate(),m=new bT(new fD(a.getProvider("auth-internal")),new pD(f,a.getProvider("app-check-internal")),function(y,A){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ve(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kc(y.options.projectId,A)}(f,o),f);return c=Object.assign({useFetchStreams:i},c),m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),xn(r_,s_,e),xn(r_,s_,"esm2017")})();const X2={apiKey:"AIzaSyD_4y-nK5V3nag6KyNy9KvHfVuX-b4n3h0",authDomain:"lifedev-bachiega.firebaseapp.com",projectId:"lifedev-bachiega",storageBucket:"lifedev-bachiega.firebasestorage.app",messagingSenderId:"729654581957",appId:"1:729654581957:web:3383838b69635aacce6eac",measurementId:"G-DCQNRCXQ8V"},tp=yE(X2);aD(tp);const W2=k2(tp);t0(tp);const Z2=()=>$.jsx($.Fragment,{}),J2="_login_xfiq4_1",eN={login:J2},tN=()=>{const[r,e]=q.useState(""),[i,a]=q.useState(""),[o,c]=q.useState(""),{login:f,error:m,loading:g}=lh(),y=async A=>{A.preventDefault(),c("");const D=await f({email:r,password:i});console.log(D)};return q.useEffect(()=>{console.log(m),m&&c(m)},[m]),$.jsxs($.Fragment,{children:[$.jsx("div",{className:eN.login}),$.jsx("h1",{children:"Entrar"}),$.jsx("p",{children:"Faça o Login em nossa plataforma de Desenvolvedores"}),$.jsxs("form",{onSubmit:y,children:[$.jsx("label",{children:$.jsx("input",{type:"email",name:"email",required:!0,placeholder:"E-mail do usuario",onChange:A=>e(A.target.value),value:r})}),$.jsxs("label",{children:[$.jsx("span",{children:"Senha:"}),$.jsx("input",{type:"password",name:"password",required:!0,placeholder:"Insira sua senha",onChange:A=>a(A.target.value),value:i})]}),!g&&$.jsx("button",{className:"btn",children:"Entrar"}),g&&$.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),o&&$.jsx("p",{children:o})]})]})},nN="_register_1h11d_1",iN={register:nN},rN=()=>{const[r,e]=q.useState(""),[i,a]=q.useState(""),[o,c]=q.useState(""),[f,m]=q.useState(""),[g,y]=q.useState(""),{createUser:A,error:b,loading:D}=lh(),j=async P=>{P.preventDefault(),y("");const Y={displayName:r,email:i,password:o};if(o!==f){y("As senhas precisam ser iguais.");return}const F=await A(Y);console.log(F)};return q.useEffect(()=>{b&&y(b)},[b]),$.jsxs("div",{className:iN.register,children:[$.jsx("h1",{children:"Cadastre-se para postar"}),$.jsx("p",{children:"Crie seu usuário e compartilhe suas histórias"}),$.jsxs("form",{onSubmit:j,children:[$.jsxs("label",{children:[$.jsx("span",{children:"Nome:"}),$.jsx("input",{type:"text",name:"displayName",required:!0,placeholder:"Nome do usuário",onChange:P=>e(P.target.value),value:r})]}),$.jsxs("label",{children:[$.jsx("span",{children:"Email:"}),$.jsx("input",{type:"email",name:"email",required:!0,placeholder:"E-mail do usuário",onChange:P=>a(P.target.value),value:i})]}),$.jsxs("label",{children:[$.jsx("span",{children:"Senha:"}),$.jsx("input",{type:"password",name:"password",required:!0,placeholder:"Insira a senha",onChange:P=>c(P.target.value),value:o})]}),$.jsxs("label",{children:[$.jsx("span",{children:"Confirmação de senha:"}),$.jsx("input",{type:"password",name:"confirmPassword",required:!0,placeholder:"Confirme a senha",onChange:P=>m(P.target.value),value:f})]}),!D&&$.jsx("button",{className:"btn",children:"Entrar"}),D&&$.jsx("button",{className:"btn",disabled:!0,children:"Aguarde..."}),g&&$.jsx("p",{className:"error",children:g})]})]})},sN=()=>$.jsx("div",{children:"Dashboard"}),aN={loading:null,error:null},oN=(r,e)=>{switch(e.type){case"LOADING":return{loading:!0,error:null};case"INSERTED_DOC":return{loading:!1,error:null};case"ERROR":return{loading:!1,error:e.payload};default:return r}},lN=r=>{const[e,i]=q.useReducer(oN,aN),[a,o]=q.useState(!1),c=m=>{a||i(m)},f=async m=>{c({type:"LOADING"});try{const g={...m,createdAt:At.now()},y=await Y2(x2(W2,r),g);c({type:"INSERTED_DOC",payload:y})}catch(g){c({type:"ERROR",payload:g.message})}};return q.useEffect(()=>()=>o(!0),[]),{insertDocument:f,response:e}},uN=()=>{const[r,e]=q.useState(),[i,a]=q.useState(),[o,c]=q.useState(),[f,m]=q.useState(),[g,y]=q.useState(),{user:A}=i0(),b=dm(),{insertDocument:D,response:j}=lN("posts"),P=Y=>{Y.preventeDefault(),y("");try{new URL(i)}catch{y("A imagem precisa ser uma URL")}const F=f.split(",").map(X=>X.trim().toLowerCase());(!r||!i||!tag||!o)&&y("Por favor, preencha todos os campos."),console.log(F),console.log({title:r,image:i,body:o,tags:F,uid:A.uid,createBy:A.displayName,createAt:new Date}),!g&&(D({title:r,image:i,body:o,tags:F,uid:A.uid,createBy:A.displayName,createAt:new Date}),b("/"))};return $.jsx($.Fragment,{children:$.jsxs("div",{className:styles.create_post,children:[$.jsx("h2",{children:"Criar Posts"}),$.jsx("p",{children:"Escreva sobre o que quiser compartilhar o seu conhecimento!"}),$.jsxs("form",{onSubmit:P,children:[$.jsxs("label",{children:[$.jsx("span",{children:"Título"}),$.jsx("input",{type:"text",name:"text",required:!0,placeholder:"Pense num bom título...",onChange:Y=>e(Y.target.value),value:r})]}),$.jsxs("label",{children:[$.jsx("span",{children:"URL da Imagem:"}),$.jsx("input",{type:"text",name:"image",required:!0,placeholder:"Insira uma imagem que representa seu post",onChange:Y=>a(Y.target.value),value:i})]}),$.jsxs("label",{children:[$.jsx("span",{children:"Conteúdo"}),$.jsx("textarea",{name:"body",required:!0,placeholder:"Insira o couteúdo do post",onChange:Y=>c(Y.target.value),value:o})]}),$.jsxs("label",{children:[$.jsx("span",{children:"Tags:"}),$.jsx("input",{type:"text",name:"tags",required:!0,placeholder:"Insira as tags separadas por vírgula",onChange:Y=>m(Y.target.value),value:f})]}),!j.loading&&$.jsx("button",{className:"btn",disable:!0,children:"Aguarde..."}),(j.error||g)&&$.jsx("p",{className:"error",children:j.error||g})]})]})})},cN=()=>$.jsx("div",{children:"About"});function hN(){const[r,e]=q.useState(void 0),{auth:i}=lh(),a=r==null;return q.useEffect(()=>{T1(i,o=>{e(o)})},[i]),a?$.jsx("div",{className:"loadingGif",children:$.jsx("img",{src:"Gif-loading.gif",alt:"Carregando..."})}):$.jsx($.Fragment,{children:$.jsx("div",{children:$.jsx(VI,{value:{user:r},children:$.jsxs(Cb,{children:[$.jsx(zI,{}),$.jsx("div",{className:"container",children:$.jsxs(rb,{children:[$.jsx(Ms,{path:"/",element:$.jsx(Z2,{})}),$.jsx(Ms,{path:"/about",element:$.jsx(cN,{})}),$.jsx(Ms,{path:"/posts/create",element:r?$.jsx(uN,{}):$.jsx(pc,{to:"/login"})}),$.jsx(Ms,{path:"/login",element:r?$.jsx(pc,{to:"/"}):$.jsx(tN,{})}),$.jsx(Ms,{path:"/register",element:r?$.jsx(pc,{to:"/"}):$.jsx(rN,{})}),$.jsx(Ms,{path:"/dashboard",element:r?$.jsx(sN,{}):$.jsx(pc,{to:"/login"})})]})}),$.jsx(HI,{})]})})})})}dS.createRoot(document.getElementById("root")).render($.jsx(q.StrictMode,{children:$.jsx(hN,{})}));
