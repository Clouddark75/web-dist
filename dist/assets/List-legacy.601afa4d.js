!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.d434190e.js","./Folder-legacy.69126395.js","./index-legacy.d59220e1.js","./index-legacy.f04e5ca4.js","./icon-legacy.8cda292e.js","./helper-legacy.33c1d8d5.js","./Layout-legacy.454e5150.js","./index-legacy.b427ac5f.js","./FolderTree-legacy.3378a171.js","./video_box-legacy.fde20d00.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.515d16a0.js","./index-legacy.5960be09.js","./index-legacy.a27ea58b.js"],(function(n){"use strict";var t,r,i,o,c,a,l,u,s,d,g,f,m,h,b,y,j,p,w,x,v,A,$,k,S,_,C,z,I,D,E,M,O,P,F;return{setters:[function(e){t=e.cD,r=e.b,i=e.e,o=e.ad,c=e.K,a=e.aI,l=e.cV,u=e.r,s=e.aK,d=e.S,g=e.c1,f=e.au,m=e.ak,h=e.at,b=e.b1,y=e.c5,j=e.co,p=e.ac,w=e.l,x=e.a,v=e.k,A=e.w,$=e.cW,k=e.cX,S=e.cY,_=e.D,C=e.E,z=e.a0,I=e.a3},function(e){D=e.b},function(e){E=e.u},function(e){M=e.q},function(e){O=e.g,P=e.O},function(e){F=e.u},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var H=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],K=function(e){if((0,t().isHide)(e.obj))return null;var n=E().setPathAs,x=D({id:1}).show,v=r(),A=v.pushHref,$=v.to,k=F(),S=function(){return w.list_item_filename_overflow};return i(p.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return i(o,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:c()}},as:M,get href(){return e.obj.name},get cursor(){return!a()||k()?"pointer":"default"},"on:click":function(n){a()&&(n.preventDefault(),k()?$(A(e.obj.name)):l(e.index,!e.obj.selected))},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){u((function(){s(!1),l(e.index,!0,!0)})),x(n,{props:e.obj})},get children(){return[i(o,{class:"name-box",spacing:"$1",get w(){return H[0].w},get children(){return[i(d,{get when(){return a()},get children(){return i(g,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){l(e.index,n.target.checked)}})}}),i(f,{class:"icon",boxSize:"$6",get color(){return m()},get as(){return O(e.obj)},mr:"$1","on:click":function(n){e.obj.type===P.IMAGE&&(n.stopPropagation(),n.preventDefault(),h.emit("gallery",e.obj.name))}}),i(b,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:"multi_line"===S()?"unset":"nowrap","overflow-x":"scrollable"===S()?"auto":"hidden",textOverflow:"ellipsis"===S()?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),i(b,{class:"size",get w(){return H[1].w},get textAlign(){return H[1].textAlign},get children(){return y(e.obj.size)}}),i(b,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return H[2].w},get textAlign(){return H[2].textAlign},get children(){return j(e.obj.modified)}})]}})}})};n("default",(function(){var n=x(),t=e(v(),2),r=t[0],c=t[1],l=e(v(!1),2),f=l[0],m=l[1];A((function(){r()&&$(r(),f())}));var h=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===r()?m(!f()):u((function(){c(e.name),m(!1)}))}}};return i(I,{class:"list",w:"$full",spacing:"$1",get children(){return[i(o,{class:"title",w:"$full",p:"$2",get children(){return[i(o,{get w(){return H[0].w},spacing:"$1",get children(){return[i(d,{get when(){return a()},get children(){return i(g,{get checked(){return k()},get indeterminate(){return S()},onChange:function(e){s(e.target.checked)}})}}),i(b,_((function(){return h(H[0])}),{get children(){return n("home.obj.".concat(H[0].name))}}))]}}),i(b,_({get w(){return H[1].w}},(function(){return h(H[1])}),{get children(){return n("home.obj.".concat(H[1].name))}})),i(b,_({get w(){return H[2].w}},(function(){return h(H[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(H[2].name))}}))]}}),i(C,{get each(){return z.objs},children:function(e,n){return i(K,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
