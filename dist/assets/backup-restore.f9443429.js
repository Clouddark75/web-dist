import{c as R,u as ae,aI as o,bk as i,e as c,X as x,B as I,c7 as ne,V as O,m as se,aL as T,bn as b,n as re}from"./index.2ea96c44.js";import{o as oe}from"./index.3e839e3c.js";const j={success:{icon:"\u2705",color:"$success9"},error:{icon:"\u274C",color:"$danger9"},info:{icon:"\u2139\uFE0F",color:"$info9"}},ie=d=>c(x,{w:"$full",spacing:"$1",get children(){return[c(T,{get children(){return j[d.type].icon}}),c(T,{get color(){return j[d.type].color},get children(){return d.msg}})]}}),le=()=>{const[d,_]=R(!1),t=ae();oe("manage.sidemenu.backup-restore");let m;const[p,B]=R([]),n=(e,a)=>{B(u=>[...u,{type:a,msg:e}]),m.scrollTop=m.scrollHeight},[C,F]=o(()=>i.get("/admin/setting/list")),[V,$]=o(()=>i.get("/admin/user/list")),[E,y]=o(()=>i.get("/admin/meta/list")),[H,S]=o(()=>i.get("/admin/storage/list")),J=()=>C()||V()||E()||H(),v=async()=>{n(t("br.start_backup"),"info");const e={settings:[],users:[],storages:[],metas:[]};for(const a of[{name:"settings",fn:F,page:!1},{name:"users",fn:$,page:!0},{name:"storages",fn:S,page:!0},{name:"metas",fn:y,page:!0}]){const u=await a.fn();b(u,g=>{n(t("br.success_backup_item",{item:t(`manage.sidemenu.${a.name}`)}),"success"),a.page?e[a.name]=g.content:e[a.name]=g},g=>{n(t("br.failed_backup_item",{item:t(`manage.sidemenu.${a.name}`)})+":"+g,"error")})}ce("alist_backup_"+new Date().toLocaleString()+".json",e),n(t("br.finish_backup"),"info")},[N,W]=o(e=>i.post("/admin/setting/save",e)),[X,U]=o(e=>i.post("/admin/user/create",e)),[Y,D]=o(e=>i.post("/admin/storage/create",e)),[q,M]=o(e=>i.post("/admin/meta/create",e)),[z,A]=o(e=>i.post("/admin/user/update",e)),[G,K]=o(e=>i.post("/admin/storage/update",e)),[P,Q]=o(e=>i.post("/admin/meta/update",e));async function k(e,a,u,g,l,r){const s=(await a()).data.content;for(const f in e){const h=e[f],L=h[l],te=(s.find(w=>w[l]===L)?"update":"add")==="add"?u:g;await b(await te(h),()=>{n(t("br.success_restore_item",{item:t(r)})+`-[${L}]`,"success")},w=>{n(t("br.failed_restore_item",{item:t(r)})+`-[${L}]:`+w,"error")})}}const Z=()=>N()||X()||Y()||q()||z()||G()||P(),ee=async()=>{n(t("br.start_restore"),"info");const e=document.createElement("input");e.type="file",e.accept="application/json",e.onchange=async a=>{const u=a.target.files;if(!u||u.length===0){re.warning(t("br.no_file"));return}const g=u[0],l=new FileReader;l.onload=async()=>{const r=JSON.parse(l.result);if(d()&&await v(),r.settings&&b(await W(r.settings.filter(s=>!["version","index_progress"].includes(s.key))),()=>{n(t("br.success_restore_item",{item:t("manage.sidemenu.settings")}),"success")},s=>{n(t("br.failed_restore_item",{item:t("manage.sidemenu.settings")})+":"+s,"error")}),d())await k(r.users,$,U,A,"username","manage.sidemenu.users"),await k(r.storages,S,D,K,"mount_path","manage.sidemenu.storages"),await k(r.metas,y,M,Q,"path","manage.sidemenu.metas");else for(const s of[{name:"users",fn:U,data:r.users,key:"username"},{name:"storages",fn:D,data:r.storages,key:"mount_path"},{name:"metas",fn:M,data:r.metas,key:"path"}])for(const f of s.data||[])f.id=0,b(await s.fn(f),()=>{n(t("br.success_restore_item",{item:t(`manage.sidemenu.${s.name}`)})+`-[${f[s.key]}]`,"success")},h=>{n(t("br.failed_restore_item",{item:t(`manage.sidemenu.${s.name}`)})+` [ ${f[s.key]} ] :`+h,"error")});n(t("br.finish_restore"),"info")},l.readAsText(g)},e.click()};return c(O,{spacing:"$2",w:"$full",get children(){return[c(x,{spacing:"$2",w:"$full",get children(){return[c(I,{get loading(){return J()},onClick:()=>{v()},colorScheme:"accent",get children(){return t("br.backup")}}),c(I,{get loading(){return Z()},onClick:()=>{ee()},get children(){return t("br.restore")}}),c(ne,{id:"restore-override",get checked(){return d()},onChange:e=>_(e.currentTarget.checked),get children(){return t("br.override")}})]}}),c(O,{p:"$2",ref(e){const a=m;typeof a=="function"?a(e):m=e},w:"$full",alignItems:"start",rounded:"$md",h:"70vh",bg:"$neutral3",overflowY:"auto",spacing:"$1",get children(){return c(se,{get each(){return p()},children:e=>c(ie,e)})}})]}})};function ce(d,_){const t=new Blob([JSON.stringify(_,null,2)],{type:"application/json"}),m=URL.createObjectURL(t),p=document.createElement("a");p.href=m,p.download=d,p.click(),URL.revokeObjectURL(m)}export{le as default};
