{const e="Violentmonkey:E3GD8ruVdGc=";1!==window[e]&&(window[e]=function(e,t,n){const o={__proto__:null},r=function(){return this||globalThis}(),{document:s,window:l}=r,a="prototype",i=l.top===l,c="window.close",u="window.focus",d="__CBID",p=e=>"function"==typeof e,_=e=>null!=e&&"object"==typeof e,m=e=>"string"==typeof e,f=(e,t,n)=>{try{ae(Q,e,t)&&(n=e[t])}catch(e){}return n},h=(e,t,n,o=!0)=>B(e,t,{__proto__:null,value:n,configurable:o,enumerable:o,writable:o}),g=()=>"[Violentmonkey property]",y=(e,t,n)=>(t&&ae(ne,n,n=>{ae(Q,t,n)&&(e[n]=t[n])}),e),v=(e,t,n)=>{const o={__proto__:null};return e&&j(o,e),t&&(n?y(o,t,n):j(o,t)),o},b=(e,t,n,o)=>{var r;const s=e[t]||(e[t]=v());return null!=(r=s[n])?r:s[n]=null!=o?o:v()},w=async e=>e,M=(e,t)=>h(e,"toString",t||g,!1),x=(e="VM")=>e+ge(),G=(e,...t)=>{let n="[Violentmonkey]";t[0]&&ae(ne,t[0],e=>{n+=`[${e}]`}),t[0]=n,ae(K,he[e],he,t)},S=(e,t,n)=>B(e,t,v(n)),k=(e,t)=>h(e,e.length,t),{Promise:C}=r,T=t?null:r.cloneInto;let R,V,E,I,$,A,H,L,O,U,q,P,N,D,K,j,F,B,z,J,W,X,Y,Q,Z,ee,te,ne,oe,re,se,le,ae,ie,ce,ue,de,pe,_e,me,fe,he,ge,ye,ve,be,we,Me,xe;const Ge=(()=>{let t,o,s,i,c,u,d,_=-1,m=r,h=l;return n&&(u=l[n],delete l[n]),u?p(u[0])||(m=u[0],h=m,d=e&&u[1],u=v()):u=v(),u=[R=u[_+=1]||m.CustomEvent,V=u[_+=1]||m.DOMParser,E=u[_+=1]||m.Error,I=u[_+=1]||m.EventTarget,$=u[_+=1]||m.KeyboardEvent,A=u[_+=1]||m.MouseEvent,H=u[_+=1]||m.Object,O=u[_+=1]||m.Symbol,L=u[_+=1]||m.Proxy,U=u[_+=1]||m.dispatchEvent,P=u[_+=1]||m.removeEventListener,N=u[_+=1]||m.addEventListener,B=(s=H)&&u[_+=1]||s.defineProperty,z=u[_+=1]||s.getOwnPropertyDescriptor,J=u[_+=1]||s.getOwnPropertyNames,W=u[_+=1]||s.getOwnPropertySymbols,j=u[_+=1]||s.assign,X=u[_+=1]||s.keys,Y=u[_+=1]||s.values,K=u[_+=1]||s.apply,F=u[_+=1]||s.bind,Q=u[_+=1]||s[a].hasOwnProperty,Z=u[_+=1]||s[a].toString,ee=u[_+=1]||(t=m.Array[a]).concat,te=u[_+=1]||t.filter,ne=u[_+=1]||t.forEach,oe=u[_+=1]||t.indexOf,re=u[_+=1]||(o=m.Element[a]).remove,se=u[_+=1]||(i=m.String[a]).charCodeAt,le=u[_+=1]||i.slice,ae=u[_+=1]||(c=s.call).bind(c),ce=u[_+=1]||m.URL[a].toString,de=u[_+=1]||m.URL.createObjectURL,pe=u[_+=1]||m.FormData[a].entries,_e=u[_+=1]||ae.toString,ue=u[_+=1]||m.Array.isArray,me=u[_+=1]||m.JSON.parse,fe=u[_+=1]||m.JSON.stringify,he=u[_+=1]||v((d||m).console),ge=u[_+=1]||m.Math.random,ye=u[_+=1]||V[a].parseFromString,ve=u[_+=1]||m.Event[a].stopImmediatePropagation,be=u[_+=1]||m.Promise[a].then,we=u[_+=1]||z(m.Document[a],"currentScript").get,Me=u[_+=1]||z(R[a],"detail").get,xe=u[_+=1]||z(A[a],"relatedTarget").get,q=u[_+=1]||z(h,"length").get||(()=>f(l,"length",1e9)),ie=u[_+=1]||[J(h),m!==h&&J(m)]],D=O.toStringTag,u})();(()=>{"use strict";var n={__proto__:null};for(let e=0,t="dor";e<t.length;e++)B(n,t[e],{__proto__:null,value:0,writable:1});n.d=(e,t)=>{for(var n in t)n in e||B(e,n,{__proto__:null,enumerable:!0,get:t[n]})},n.o=(e,t)=>ae(Q,e,t),n.r=e=>{B(e,D,{__proto__:null,value:"Module"}),B(e,"__esModule",{__proto__:null,value:!0})};var g={__proto__:null};n.r(g),n.d(g,{__proto__:null,default:()=>At});const Z=v(),se={__proto__:null,Error(e){throw e}},_e={__proto__:null,callbacks:se,addHandlers(e){j(Z,e)},onHandle({cmd:e,data:t,node:n}){const o=Z[e];o&&ae(o,n,t)},send(e,t,n,o){let r,s;try{s=new C(e=>{r=e})}catch(e){}return be(e,t,n,o,r),s},call:be};let ge;function be(e,t,n,o,r,s){const l=x();if(se[l]=r||Se,s?h(t,s,l):t={[d]:l,data:t},_e.post(e,t,n,o),!r)return ge}function Se(e){ge=e}const ke=_e,Ce={__proto__:null,commands:v(),values:v()},Te="page",Re="content";function Ve(e){for(const t in e)if(ae(Q,e,t))return!1;return!0}const Ee={__proto__:null,string:"s",number:"n",boolean:"b"};function Ie(e,t=JSON.stringify){if(void 0!==e){const n=Ee[typeof e];return`${n||"o"}${n?e:t(e)}`}}const $e=(e,t)=>{const n=T?T(t,s):t,o=new R(e,{__proto__:null,detail:n});ae(U,l,o)},Ae=(e,t,n)=>{let o;ae(N,l,e,e=>{if(ae(ve,e),o)o.node=ae(xe,e),n.onHandle(o),o=null;else{const t=ae(Me,e),r=T?T(t,l):t;o=r.node&&r,o||n.onHandle(r)}},!0),n.post=(e,o,{dataKey:r}=n,s)=>{const a=s&&new A(t,{__proto__:null,relatedTarget:s});$e(t,{cmd:e,data:o,dataKey:r,node:!!a}),a&&ae(U,l,a)}};let He=0;const Le=v();function Oe(e,t){He+=1;const n=He,o={onclose:null,closed:!1,close(){ke.post("TabClose",n,t)}};return Le[n]=o,ke.post("TabOpen",{key:n,data:e},t),o}ke.addHandlers({TabClosed(e){const t=Le[e];if(t){t.closed=!0,delete Le[e];const n=t.onclose;n&&n()}}});const Ue=v();function qe(e,t,n){let{url:o}=e;if(o&&!m(o)){try{o=ae(ce,o)}catch(e){o=f(o,"href")}e.url=o}if(!o){const t=new E('Required parameter "url" is missing.'),{onerror:n}=e;if(!p(n))throw t;n(t)}const r=t.id,s=x("VMxhr");return Ke({__proto__:null,id:s,scriptId:r,opts:e},t,n),{abort(){ke.post("AbortRequest",s,t)}}}function Pe(e,t){let n=e.raw;switch(e.opts.responseType){case"json":n=me(n);break;case"document":n=ae(ye,new V,n,Ne(t)||"text/html")}return e.response=n,delete e.raw,n}function Ne(e){const t=e.contentType||"",n=t.length;let o,r=0;for(;r<n&&","!==(o=t[r])&&";"!==o&&o>" ";)r+=1;return ae(le,t,0,r)}function De(e,t){const{opts:n}=e,o=n[`on${t.type}`];if(o){const{data:r}=t,{response:s,responseHeaders:l,responseText:a}=r;s&&!("raw"in e)&&(e.raw=s),B(r,"response",{__proto__:null,get(){const n="raw"in e?Pe(e,t):e.response;return B(this,"response",{__proto__:null,value:n}),n}}),null!=l&&(e.headers=l),null!=a&&(e.text="same"===f(a,0)?s:a),h(r,"context",n.context),h(r,"responseHeaders",e.headers),h(r,"responseText",e.text),o(r)}"loadend"===t.type&&delete Ue[e.id]}function Ke(t,n,o){const{id:r,opts:s,scriptId:l}=t,{data:a,withCredentials:i=!0,anonymous:c=!i}=s;Ue[r]=t,ke.post("HttpRequest",v({id:r,scriptId:l,anonymous:c,fileName:o,data:null==a&&[]||(s.binary||!_(a))&&[`${a}`]||je(a)||e>=56&&[a]||[a,"bin"],eventsToNotify:ae(te,["abort","error","load","loadend","loadstart","progress","readystatechange","timeout"],e=>p(f(s,`on${e}`))),xhrType:Fe(s.responseType)},s,["headers","method","overrideMimeType","password","timeout","url","user"]),n)}function je(e){try{return[[...ae(pe,e)],"fd"]}catch(e){}}function Fe(e=""){switch(e){case"arraybuffer":case"blob":return e;case"document":case"json":case"text":case"":break;default:G("warn",null,`Unknown responseType "${e}", see https://violentmonkey.github.io/api/gm/#gm_xmlhttprequest for more detail.`)}return""}ke.addHandlers({HttpRequested(e){const t=Ue[e.id];t&&De(t,e)}});let Be=0;const ze=v();function Je(e,t){return Be+=1,ze[Be]=e,ke.post("Notification",{id:Be,text:e.text,title:e.title,image:e.image},t),Be}ke.addHandlers({NotificationClicked(e){var t;const n=null==(t=ze[e])?void 0:t.onclick;n&&n()},NotificationClosed(e){const t=ze[e];if(t){delete ze[e];const n=t.ondone;n&&n()}}});const We=v(),Xe={__proto__:null,o:me,n:e=>+e,b:e=>"true"===e};function Ye(e){return Ce.values[e]}function Qe(e,t,n,o,r,s){let l;if(o!==r){var a;l=ke[s.async?"send":"post"]("UpdateValue",{id:e,key:t,raw:o},s);const i=null==(a=We[e])?void 0:a[t];i&&nt(i,t,n,o,r)}else s.async&&(l=w());return l}function Ze(e){const t=e[0],n=Xe[t];let o=ae(le,e,1);try{n&&(o=n(o))}catch(e){}return o}function et(e,t){ae(ne,X(t),n=>{const o=t[n];o?e[n]=o:delete e[n]})}function tt(e,t,n){ae(ne,X(n),o=>{const r=n[o]||void 0,s=t[o];if(s!==r){r?t[o]=r:delete t[o];const n=e[o];n&&nt(n,o,void 0,r,s,!0)}})}function nt(e,t,n,o,r,s=!1){const l=r?Ze(r):void 0,a=void 0===n&&o?Ze(o):n;ae(ne,Y(e),e=>{try{e(t,l,a,s)}catch(e){G("error",["GM_addValueChangeListener","callback"],e)}})}ke.addHandlers({UpdatedValues(e){ae(ne,X(e),t=>{const n=Ce.values[t];if(n){const o=e[t],r=We[t];r?tt(r,n,o):et(n,o)}})}});const ot=O.isConcatSpreadable,rt=(...e)=>{const t=[];return h(t,ot,!0),ae(ne,e,e=>h(e,ot,!0)),ae(K,ee,t,e)},st=(e,t)=>{let n;if(null===e)n="null";else if("object"==typeof e){if(t){if(ae(oe,t,e)>=0)throw new E("Converting circular structure to JSON");h(t,t.length,e)}else t=[e];if(ue(e)){n="[";for(let r=0,s=e.length;r<s;r+=1){var o;n+=`${r?",":""}${null!=(o=st(e[r],t))?o:"null"}`}n+="]"}else n="{",ae(ne,X(e),o=>{const r=st(e[o],t);void 0!==r&&(n+=`${n.length>1?",":""}${fe(o)}:${r}`)}),n+="}";t.length-=1}else void 0!==e&&(n=fe(e));return n},lt=(e=v())=>{return{add(e){t(e,!0)[e]=!0},clone(){const t=v();for(const n in e)t[n]=v(e[n]);return lt(t)},delete(e){var n;null==(n=t(e))||delete n[e]},has:e=>{var n;return null==(n=t(e))?void 0:n[e]},toArray:()=>{const t=Y(e);return ae(ne,t,(e,n)=>{t[n]=X(e)}),ae(K,rt,null,t)}};function t(t,n){const o=t.length?t[0]:"";return e[o]||(n?e[o]=v():null)}},at=()=>{const n="createObjectIn",o="exportFunction",s=e&&!t&&r,l=!s&&((e,t,n)=>(t&&(t=f(t,"defineAs"))&&h(e,t,n),n));return{cloneInto:T||(e=>e),[n]:s&&s[n]||((e,t)=>l(e,t,{})),[o]:s&&s[o]||((e,t,n)=>l(t,n,e))}},it=(e,t)=>e.async?w(t):t;function ct(){return{__proto__:null,GM_deleteValue(e){const{id:t}=this,n=Ye(t),o=n[e];return delete n[e],Qe(t,e,void 0,null,o,this)},GM_getValue(e,t){const n=Ye(this.id)[e];return it(this,n?Ze(n):t)},GM_listValues(){return it(this,X(Ye(this.id)))},GM_setValue(e,t){const{id:n}=this,o=Ie(t,st)||null,r=Ye(n),s=r[e];return r[e]=o,Qe(n,e,t,o,s,this)},GM_addValueChangeListener(e,t){if(m(e)||(e=`${e}`),!p(t))return;const n=b(We,this.id,e),o=ae(oe,Y(n),t);let r=o>=0&&X(n)[o];return r||(r=x("VMvc"),n[r]=t),r},GM_removeValueChangeListener(e){const t=We[this.id];if(t){for(const n in t){const o=t[n];if(e in o){delete o[e],Ve(o)&&delete t[n];break}}Ve(t)&&delete We[this.id]}},GM_getResourceText(e){return dt(this,e)},GM_getResourceURL(e,t){return dt(this,e,!!t,void 0===t)},GM_registerMenuCommand(e,t){const{id:n}=this,o=`${n}:${e}`;return Ce.commands[o]=t,ke.post("RegisterMenu",{id:n,cap:e},this),e},GM_unregisterMenuCommand(e){const{id:t}=this,n=`${t}:${e}`;delete Ce.commands[n],ke.post("UnregisterMenu",{id:t,cap:e},this)},GM_download(e,t){const n=v();let o;if(m(e)?(n.url=e,n.name=t):e&&(t=e.name,o=e.onload,y(n,e,["url","headers","timeout","onerror","onprogress","ontimeout"])),!t||!m(t))throw new E('Required parameter "name" is missing or not a string.');return j(n,{method:"GET",responseType:"blob",overrideMimeType:"application/octet-stream",onload:p(o)?o:()=>{}}),qe(n,this,t)},GM_xmlhttpRequest(e){return qe(v(e),this)},GM_addElement(e,t,n){return m(e)?ut(null,e,t,this):ut(e,t,n,this)},GM_addStyle(e){return ut(null,"style",{textContent:e,id:x("VMst")},this)},GM_openInTab(e,t){return(t=v(_(t)?t:{active:!t})).url=e,Oe(t,this)},GM_notification(e,t,n,o){const r=_(e)?e:{__proto__:null,text:e,title:t,image:n,onclick:o};if(!r.text)throw new E("GM_notification: `text` is required!");const s=Je(r,this);return{remove:M(()=>ke.send("RemoveNotification",s,this))}},GM_setClipboard(e,t){ke.post("SetClipboard",{data:e,type:t},this)},GM_log:he.log}}function ut(e,t,n,o){let r,s;if(ke.call("AddElement",{tag:t,attrs:n},o,e,function(e){r=this,s=e},"cbId"),s){const e=new E(s[0]);throw e.stack+=`\n${s[1]}`,e}return h(r,"then",async e=>delete r.then&&(p(e)?e(r):r))}function dt(e,t,n,o){let r;const{id:s,resCache:l,resources:a}=e,i=a[t];if(i){const t="data:"===ae(le,i,0,5),a=null==n?0:1+(n=o?!t:n);r=t&&!1===n||b(l,a,i,!1),r||(r=ke.call("GetResource",{id:s,isBlob:n,key:i,raw:t&&i},e),!0!==r&&n&&(r=de(r)),b(l,a,i,r))}return it(e,!0===r?i:r)}const pt=e=>+e>=0&&e<ae(q,l),_t=O.unscopables,mt=lt(),ft=(()=>{const n="wrappedJSObject",o=!t,s=ie[0],a=ae(q,l);let i=!e;return ae(ne,s,e=>{+e>=0&&e<a||o&&("Violentmonkey:E3GD8ruVdGc="===e||"browser"===e||"chrome"===e)?i=!1:mt.add(e)}),r!==l&&ae(ne,ie[1],e=>{+e>=0&&e<a||(mt.add(e),i=!1)}),e&&!t&&n in r&&!mt.has(n)&&(mt.add(n),i&&h(s,s.length,n)),i?s:mt.toArray()})(),ht=v(),gt={__proto__:null,applicationCache:1,caches:1,closed:1,crossOriginIsolated:1,crypto:1,customElements:1,frameElement:1,history:1,indexedDB:1,isSecureContext:1,localStorage:1,mozInnerScreenX:1,mozInnerScreenY:1,navigator:1,sessionStorage:1,speechSynthesis:1,styleMedia:1,trustedTypes:1},yt={__proto__:null,Infinity:1,NaN:1,document:1,location:1,top:1,undefined:1,window:1},vt=M,bt={__proto__:null,addEventListener:vt,alert:vt,atob:vt,blur:vt,btoa:vt,cancelAnimationFrame:vt,cancelIdleCallback:vt,captureEvents:vt,clearInterval:vt,clearTimeout:vt,close:vt,confirm:vt,createImageBitmap:vt,dispatchEvent:vt,dump:vt,fetch:vt,find:vt,focus:vt,getComputedStyle:vt,getDefaultComputedStyle:vt,getSelection:vt,matchMedia:vt,moveBy:vt,moveTo:vt,open:vt,openDatabase:vt,postMessage:vt,print:vt,prompt:vt,queueMicrotask:vt,releaseEvents:vt,removeEventListener:vt,requestAnimationFrame:vt,requestIdleCallback:vt,resizeBy:vt,resizeTo:vt,scroll:vt,scrollBy:vt,scrollByLines:vt,scrollByPages:vt,scrollTo:vt,setInterval:vt,setResizable:vt,setTimeout:vt,sizeToContent:vt,stop:vt,updateCommands:vt,webkitCancelAnimationFrame:vt,webkitRequestAnimationFrame:vt,webkitRequestFileSystem:vt,webkitResolveLocalFileSystemURL:vt};for(const e in yt){let t,n,o=z(t=r,e)||z(t=l,e);o?(o=v(o),(n=o.get)&&(o.get=ae(F,n,t)),(n=o.set)&&(o.set=ae(F,n,t)),yt[e]=o):delete yt[e]}function wt(e){const t=v(),n=v(gt);let o=mt;S(e,D,{get:()=>"Window"});const s=new L(e,{__proto__:null,defineProperty(t,o,r){const s=m(o);return s&&pt(o)||(S(e,o,r),s&&Gt(o),delete n[o]),!0},deleteProperty(t,n){if(!(n in yt)&&delete e[n])return o.has(n)&&(o===mt&&(o=mt.clone()),o.delete(n)),!0},get:(t,n)=>"undefined"===n||n===_t?void 0:void 0!==(t=e[n])||n in e?t:xt(n,s,o,e),getOwnPropertyDescriptor(t,n){const a=z(e,n),i=a||o.has(n)&&z(r,n);if(i){if(f(i,"value")===l&&(i.value=s),!(a||f(i,"configurable")&&"event"!==n)){const t=f(i,"get"),o=f(i,"set");t&&(i.get=ae(F,t,r)),o&&(i.set=ae(F,o,r)),S(e,n,i)}return i}},has:(t,n)=>n in e||n in ht||o.has(n),ownKeys:()=>Mt(e,o),preventExtensions(){},set(r,s,l){const a=m(s);let i=n[s];return 1===i&&(i=o.has(s)?2:0,n[s]=i),i||a&&pt(s)||(e[s]=l,a&&Gt(s,l,o,t)),!0}});for(const t in yt){const n=yt[t];("window"===t||"top"===t&&i)&&(delete n.get,delete n.set,n.value=s),B(e,t,n)}return s}function Mt(e,t){const n=ae(te,J(e),St,t),o=ae(te,W(e),St,t),r=[];for(let t=0,n=ae(q,l);t<n&&ae(Q,l,t);t+=1)t in e||h(r,t,t);return rt(r,t===mt?ft:t.toArray(),n,o)}function xt(e,t,n,o){let s=bt[e];s===vt&&(s=l[e],p(s)&&(s=ae(F,s,l)),bt[e]=s);const a=s||e in ht||n.has(e);return!s&&(a||m(e)&&pt(e))&&(s=r[e]),s!==l&&"globalThis"!==e||(s=t),a&&(p(s)||_(s)&&"event"!==e)&&(o[e]=s),s}function Gt(e,t,n,o){e.length<3||"o"!==e[0]||"n"!==e[1]||!n.has(e)||(e=ae(le,e,2),ae(P,l,e,o[e]),p(t)?ae(N,l,e,o[e]=ae(F,t,l)):delete o[e])}function St(e){return!this.has(e)}ae(ne,[I,H],e=>{ae(ne,J(e[a]),e=>{ht[e]=1})}),ie=null;const kt={__proto__:null,getResourceUrl:"getResourceURL",xmlHttpRequest:"xmlhttpRequest"},Ct={__proto__:null,getResourceUrl:1,getValue:1,deleteValue:1,setValue:1,listValues:1};let Tt,Rt,Vt;function Et(e){const{meta:t}=e,n=t.grant;let o,s=n.length;1===s&&"none"===n[0]&&(s=0,n.length=0);const{id:l}=e.props,a=v(t.resources),i={id:l,script:e,resources:a,dataKey:e.dataKey,resCache:v()},d=It(e,a),p={__proto__:null,GM:{__proto__:null,info:d},GM_info:d,unsafeWindow:r};return Rt||(Rt=at()),j(p,Rt),ae(oe,n,c)>=0&&(p.close=M(()=>ke.post("TabClose",0,i))),ae(oe,n,u)>=0&&(p.focus=M(()=>ke.post("TabFocus",0,i))),!Tt&&s&&(Tt=ct()),ae(ne,n,e=>{const t="GM."===ae(le,e,0,3)&&ae(le,e,3),n=Tt[t?`GM_${kt[t]||t}`:e];n&&(t?p.GM[t]=$t(n,i,Ct[t]):p[e]=$t(n,i))}),s&&(o=wt(p),p.c=p),{gm:p,wrapper:o}}function It(e,t){const{meta:n}=e,{ua:o}=ke,r={},s={};let l;return ae(ne,X(o),e=>{h(s,e,o[e])}),ae(ne,X(n),e=>{switch(l=n[e],e){case"match":case"excludeMatch":e+="e";case"exclude":case"include":e+="s",l=rt(l)}h(r,e,l)}),ae(ne,["description","name","namespace","runAt","version"],e=>{f(r,e)||h(r,e,"")}),l=X(t),ae(ne,l,(e,n)=>{l[n]={name:e,url:t[e]}}),h(r,"resources",l),!f(r,"homepageURL")&&(l=f(r,"homepage"))&&h(r,"homepageURL",l),{uuid:e.props.uuid,scriptMetaStr:e.metaStr,scriptWillUpdate:!!e.config.shouldUpdate,scriptHandler:"Violentmonkey",version:"2.13.3",injectInto:ke.mode,platform:s,script:r}}function $t(e,t,n){return e===Tt.GM_log?e:(n&&(t=j({__proto__:null,async:!0},t)),M(ae(F,e,t)))}function At(e,n,o){let s;return t&&(ae(N,l,t+"*",t=>{t=ae(Me,t),e=t[0],n=t[1]},{__proto__:null,once:!0,capture:!0}),ae(U,l,new R(t))),ke.dataKey=n,o?(ke.mode=Re,ke.post=(e,t,n,r)=>{o({cmd:e,data:t,node:r,dataKey:(n||ke).dataKey},Re)},s=(e,t,n,o)=>{ke.onHandle({cmd:e,data:t,node:o})},r.chrome=void 0,r.browser=void 0,ke.addHandlers({RunAt(){if(Vt)for(let e=0,t=Vt;e<t.length;e++)(0,t[e])();Vt=!1}})):(ke.mode=Te,Ae(e,n,ke),ke.addHandlers({WriteVault(e){this[e]=Ge}})),s}function Ht(e){const{dataKey:t}=e;Ce.values[e.props.id]=v(e.values),l[t]?Lt(e,l[t]):e.meta.unwrap||S(l,t,{configurable:!0,set:t=>Lt(e,t)})}async function Lt(e,n){const{dataKey:o}=e;delete l[o];const a=()=>{ke.post("Run",e.props.id,e);const{gm:t,wrapper:o}=Et(e);ae(n,o||r,t,he.error)},i=ae(we,s);i&&ae(re,i),t||!1===Vt||"body"!==e.runAt?a():k(Vt||(Vt=[]),a)}ke.addHandlers({Command({id:e,cap:t,evt:n}){const o=n.key?$:A,r=Ce.commands[`${e}:${t}`];r&&r(new o(n.type,n))},Callback({id:e,data:t}){const n=ke.callbacks[e];delete ke.callbacks[e],n&&ae(n,this,t)},ScriptData({info:n,items:o,runAt:r}){n&&j(ke,n),o&&(ae(ne,o,Ht),e&&t&&ke.post("InjectList",r))},Expose(){l.external.Violentmonkey={version:"2.13.3",isInstalled:(e,t)=>ke.send("GetScriptVer",{meta:{name:e,namespace:t}})}}}),o.exports=g})();const{exports:Se}=o;return Se.__esModule?Se.default:Se})}