!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,i=[],o=!0,a=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(l){a=!0,c=l}finally{try{o||null==t.return||t.return()}finally{if(a)throw c}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.17196644.js","./useUtil-legacy.f18dff6f.js","./File-legacy.385b2e85.js","./api-legacy.c394c525.js","./icon-legacy.f1b4a4dc.js","./index-legacy.d59404c6.js","./index-legacy.296fa76a.js","./Layout-legacy.f2325834.js","./EncodingSelect-legacy.78940e14.js","./index-legacy.387ea788.js","./FolderTree-legacy.7c147ef6.js"],(function(e){"use strict";var t,r,c,i,o,a,l,u,f,s,y;return{setters:[function(n){t=n.u,r=n.c,c=n.e,i=n.X,o=n.B,a=n.bh,l=n.cC,u=n.N,f=n.cB},function(n){s=n.a},function(n){y=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),g=n(r(!1),2),d=g[0],m=g[1],p=n(r(!1),2),h=p[0],j=p[1],b=s().currentObjLink;return c(y,{get children(){return c(i,{spacing:"$2",get children(){return[c(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(a,"/i/").concat(l(encodeURIComponent(u.raw_url)+"/"+f(encodeURIComponent(u.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(d()?"installing":"install"))}}),c(o,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(b(!0))},onClick:function(){j(!0)},get children(){return e("home.preview.".concat(h()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
