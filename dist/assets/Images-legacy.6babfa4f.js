!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.d83c43d7.js","./style-legacy.6eef0d21.js","./ImageWithError-legacy.75730be0.js","./icon-legacy.540876da.js","./helper-legacy.7aaf4536.js","./GridItem-legacy.d109726a.js","./index-legacy.b8cd8e7e.js","./Layout-legacy.306643da.js","./useTitle-legacy.63f34cfa.js","./FolderTree-legacy.18a247aa.js","./index-legacy.a6c431b9.js","./index-legacy.182652ad.js","./index-legacy.1e6f04f9.js"],(function(n){"use strict";var r,i,o,a,l,u,c,s,f,d,g,b,h,y,m,p,j,v,w,x,$,_,S,O,k,A,I,M,C,E,P,L,T;return{setters:[function(e){r=e.bJ,i=e.E,o=e.h,a=e.aq,l=e.aC,u=e.m,c=e.k,s=e.aR,f=e.aa,d=e.a7,g=e.t,b=e.aT,h=e.dE,y=e.aH,m=e.S,p=e.aA,j=e.aB,v=e.ai,w=e.a,x=e.H,$=e.a2,_=e.de,S=e.l,O=e.bQ,k=e.bR},function(e){A=e.b},function(e){I=e.I},function(e){M=e.O,C=e.g},function(e){E=e.u,P=e.I,L=e.a},function(e){T=e.G},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var z=function(n){if((0,r().isHide)(n.obj)||n.obj.type!==M.IMAGE)return null;var w=i().setPathAs,x=o(l,{get color(){return a()},boxSize:"$12",get as(){return C(n.obj)}}),$=t(u(!1),2),_=$[0],S=$[1],O=c((function(){return s()&&(_()||n.obj.selected)})),k=A({id:1}).show,T=f().rawLink,z=L().isMouseSupported,G=E();return o(v.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){var t,r,i;return o(d,(r={w:"$full",get classList(){return{selected:!!n.obj.selected}},class:"image-item viselect-item"},(i={})[t="data-index"]=i[t]||{},i[t].get=function(){return n.index},e(r,"p","$1"),e(r,"spacing","$1"),e(r,"rounded","$lg"),e(r,"transition","all 0.3s"),e(r,"border","2px solid transparent"),"_hover",i._hover=i._hover||{},i._hover.get=function(){return{border:"2px solid ".concat(a())}},e(r,"onMouseEnter",(function(){S(!0),w(n.obj.name,n.obj.is_dir,!0)})),e(r,"onMouseLeave",(function(){S(!1)})),e(r,"onContextMenu",(function(e){g((function(){b(!1),h(n.index,!0,!0)})),k(e,{props:n.obj})})),"children",i.children=i.children||{},i.children.get=function(){return o(y,{w:"$full",pos:"relative",get children(){return[o(m,{get when(){return O()||z()&&n.obj.selected},get children(){return o(P,{pos:"absolute",left:"$1",top:"$1",get checked(){return n.obj.selected},onChange:function(e){h(n.index,e.target.checked)}})}}),o(I,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return o(p,{size:"lg"})},fallbackErr:x,get src(){return T(n.obj)},loading:"lazy",get cursor(){return z()||s()&&!G()?"default":"pointer"},"on:dblclick":function(e){z()&&(e.ctrlKey||e.metaKey||e.shiftKey||j.emit("gallery",n.obj.name))},"on:click":function(){z()||(s()&&!G()?h(n.index,!n.obj.selected):j.emit("gallery",n.obj.name))}})]}})},function(e,t){for(var n in t)(o=t[n]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(t),i=0;i<r.length;i++){var o,a=r[i];(o=t[a]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a,o)}}(r,i),r))}})};n("default",(function(e){var t=w(),n=c((function(){return o(_,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return o(x,{get each(){return $.objs.filter((function(e){return e.is_dir}))},children:function(e,t){return o(T,{obj:e,get index(){return t()}})}})}})})),r=L(),i=r.isMouseSupported,a=r.registerSelectContainer,l=r.captureContentMenu;return a(),o(d,{"oncapture:contextmenu":l,get classList(){return{"viselect-container":i()}},spacing:"$2",w:"$full",get children(){return[o(m,{get when(){return"top"===S.show_folder_in_image_view},get children(){return n()}}),o(m,{get when(){return e.images.length>0},get fallback(){return o(O,{m:"$2",get children(){return t("home.no_images")}})},get children(){return o(k,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return o(x,{get each(){return $.objs},children:function(e,t){return o(z,{obj:e,get index(){return t()}})}})}})}}),o(m,{get when(){return"bottom"===S.show_folder_in_image_view},get children(){return n()}})]}})}))}}}))}();
