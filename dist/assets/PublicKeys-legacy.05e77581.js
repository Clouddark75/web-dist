!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch($){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch($){return{type:"throw",arg:$}}}r.wrap=s;var h={};function d(){}function g(){}function p(){}var y={};l(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(E([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=p.prototype=d.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,r){function n(i,a,u,c){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(h).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:A}}function A(){return{value:void 0,done:!0}}return g.prototype=p,l(w,"constructor",p),l(p,"constructor",g),g.displayName=l(p,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},x(b.prototype),l(b.prototype,u,(function(){return this})),r.AsyncIterator=b,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new b(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.d83c43d7.js"],(function(t){"use strict";var r,i,a,u,c,l,s,f,h,d,g,p,y,v,m,w,x,b,k,S,_,L,E,A,$,O,j,I,P,G;return{setters:[function(t){r=t.a,i=t.m,a=t.a$,u=t.be,c=t.h,l=t.aj,s=t.bQ,f=t.a6,h=t.bR,d=t.dm,g=t.C,p=t.bf,y=t.n,v=t.S,m=t.cl,w=t.aP,x=t.D,b=t.M,k=t.y,S=t.bi,_=t.z,L=t.A,E=t.bF,A=t.bs,$=t.I,O=t.T,j=t.B,I=t.a7,P=t.G,G=t.aE}],execute:function(){var T=[{name:"title",textAlign:"left",w:"calc(35% - 110px)"},{name:"fingerprint",textAlign:"left",w:"calc(65% - 110px)"},{name:"last_used",textAlign:"right",w:"140px"},{name:"operation",textAlign:"right",w:"80px"}],N=function(t){var m=r(),w=o(i(!1),2),x=w[0],b=w[1],k=o(t.isMine?a((function(){return u.post("/me/sshkey/delete?id=".concat(t.id))})):a((function(){return u.post("/admin/user/sshkey/delete?uid=".concat(t.userId,"&id=").concat(t.id))})),2),S=k[0],_=k[1],L={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"};return c(v,{get when(){return!x()},get children(){return c(l,{w:"$full",p:"$2",get children(){return[c(s,{get w(){return T[0].w},size:"sm",get textAlign(){return T[0].textAlign},css:L,get children(){return t.title}}),c(f,{get w(){return T[1].w},size:"sm",get textAlign(){return T[1].textAlign},css:L,get children(){return t.fingerprint}}),c(f,{get w(){return T[2].w},size:"sm",get textAlign(){return T[2].textAlign},css:L,get children(){return e=new Date(t.last_used_time),r=e.getFullYear().toString(),n=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0"),u=e.getSeconds().toString().padStart(2,"0"),"".concat(r,"/").concat(n,"/").concat(o," ").concat(i,":").concat(a,":").concat(u);var e,r,n,o,i,a,u}}),c(h,{get w(){return T[3].w},gap:"$1",get children(){return[c(d,{}),c(g,{size:"sm",colorScheme:"danger",get loading(){return S()},onClick:(t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:r=t.sent,p(r,(function(){y.success(m("global.delete_success")),b(!0)}));case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return m("global.delete")}})];var t}})]}})}})};t("P",(function(t){var y=r(),C=o(i([]),2),F=C[0],M=C[1],z=o(t.isMine?a((function(){return u.get("/me/sshkey/list")})):a((function(){return u.get("/admin/user/sshkey/list?uid=".concat(t.userId))})),2),D=z[0],Y=z[1],B=o(m({title:"",key:""}),2),H=B[0],Q=B[1],R=o(a((function(){return u.post("/me/sshkey/add",H)})),2),U=R[0],W=R[1],X=w(),q=X.isOpen,J=X.onOpen,K=X.onClose,V=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y();case 2:r=t.sent,p(r,(function(t){M(t.content)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();V();var Z=function(t){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:t.textAlign}};return c(I,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[c(h,{w:"$full",get children(){return[c(s,{get children(){return y("users.ssh_keys.heading")}}),c(v,{get when(){return t.isMine},get children(){return[c(d,{}),c(g,{get loading(){return D()},onClick:J,get children(){return y("global.add")}}),c(x,{get opened(){return q()},onClose:K,scrollBehavior:"inside",get children(){return[c(b,{}),c(k,{get children(){return[c(S,{}),c(_,{get children(){return y("users.ssh_keys.add_heading")}}),c(L,{get children(){return[c(E,{mb:"$4",get children(){return[c(A,{for:"add_title",get children(){return y("users.ssh_keys.title")}}),c($,{id:"add_title",get value(){return H.title},onInput:function(t){return Q("title",t.currentTarget.value)}})]}}),c(E,{get children(){return[c(A,{for:"add_key",get children(){return y("users.ssh_keys.key")}}),c(O,{id:"add_key",get value(){return H.key},onInput:function(t){return Q("key",t.currentTarget.value)}})]}})]}}),c(j,{get children(){return c(g,{get loading(){return U()},onClick:(t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:r=t.sent,p(r,(function(){Q("title",""),Q("key",""),V(),K()}));case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return y("global.add")}});var t}})]}})]}})]}})]}}),c(I,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",spacing:"$1",p:"$1",get children(){return[c(l,{class:"title",w:"$full",p:"$2",get children(){return[c(f,P({get w(){return T[0].w}},(function(){return Z(T[0])}),{get children(){return y("users.ssh_keys.".concat(T[0].name))}})),c(f,P({get w(){return T[1].w}},(function(){return Z(T[1])}),{get children(){return y("users.ssh_keys.".concat(T[1].name))}})),c(f,P({get w(){return T[2].w}},(function(){return Z(T[2])}),{get children(){return y("users.ssh_keys.".concat(T[2].name))}})),c(f,P({get w(){return T[3].w}},(function(){return Z(T[3])}),{get children(){return y("users.ssh_keys.".concat(T[3].name))}}))]}}),G((function(){return F().map((function(e){return c(N,P(t,e))}))}))]}})]}})}))}}}))}();
