(this["webpackJsonpdnd-tool"]=this["webpackJsonpdnd-tool"]||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/swords.19af7b51.svg"},120:function(e,t,a){e.exports=a(131)},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),l=a(182),c=a(190),u=a(63),m=a(106),s=a(189),d=a(183),b=a(67),p=a(105),h=a(17),f=a(37),g=a(92),E=a(15),v=a(107),y={combatants:[]};var O=Object(f.combineReducers)({combantants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMBATANT":return{combatants:[].concat(Object(v.a)(e.combatants),[t.payload])};case"DELETE_COMBATANT":return{combatants:e.combatants.filter((function(e){return e.id!==t.id}))};case"UPDATE_REMAINING_HP":return{combatants:e.combatants.map((function(e){return e.id!==t.payload.id?e:Object(E.a)(Object(E.a)({},e),{},{hitPoints:Object(E.a)(Object(E.a)({},e.hitPoints),{},{remaining:t.payload.value>0?t.payload.value<=e.hitPoints.max?Math.round(t.payload.value):e.hitPoints.max:0})})}))};case"UPDATE_INITIATIVE":return{combatants:e.combatants.map((function(e){return e.id!==t.payload.id?e:Object(E.a)(Object(E.a)({},e),{},{initiative:t.payload.value})}))};case"UPDATE_COMBATANT":return{combatants:e.combatants.map((function(e){return e.id!==t.payload.id?e:t.payload.combatant}))};case"ROLL_INITIATIVE":return{combatants:e.combatants.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{initiative:Math.floor(20*Math.random())+1+e.initiativeModifier})}))};default:return e}}}),C=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),j=Object(f.createStore)(O,C,Object(g.devToolsEnhancer)({}));j.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}({combantants:j.getState().combantants})}));var I=a(177),A=a(12),N=a(185),S=a(176),T=a(187),x=a(175),w=a(170),k=a(169),M=a(173),P=a(192),W=a(191),D=a(184),_=a(193),R=function(e){var t=e.open,a=e.onClose,n=r.a.useState("Combatant"),i=Object(A.a)(n,2),o=i[0],l=i[1],c=r.a.useState("character"),u=Object(A.a)(c,2),m=u[0],s=u[1],d=r.a.useState({max:10,remaining:10,temporary:0}),b=Object(A.a)(d,2),p=b[0],f=b[1],g=r.a.useState(13),v=Object(A.a)(g,2),y=v[0],O=v[1],C=r.a.useState(0),j=Object(A.a)(C,2),I=j[0],R=j[1],L=Object(h.b)(),z=o.length>=3,H=m.length>0,U=p.max>=p.remaining&&p.max>0&&p.remaining>0&&p.temporary>=0,q=z&&H&&U&&y>0&&(I>=-10&&I<=10),B=function(){L({type:"ADD_COMBATANT",payload:{id:Object(N.a)(),armorClass:y,conditions:[],hitPoints:p,initiative:10,initiativeModifier:I,name:o,type:m}}),l("Combatant"),s("character"),f({max:0,remaining:0,temporary:0}),O(13),a()};return r.a.createElement(T.a,{maxWidth:"sm",open:t,onClose:function(){return a()}},r.a.createElement(k.a,null,"Add Combatant"),r.a.createElement(w.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),B()},style:{width:"100%"}},r.a.createElement(W.a,{autoFocus:!0,margin:"dense",label:"Name",type:"text",fullWidth:!0,value:o,onChange:function(e){return l(e.target.value)},required:!0}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(W.a,{margin:"dense",label:"Armor Class",type:"number",fullWidth:!0,value:y,onChange:function(e){var t=parseInt(e.target.value);t>0&&O(t)},required:!0}),r.a.createElement(W.a,{margin:"dense",label:"HP",type:"number",fullWidth:!0,value:p.max,onChange:function(e){var t=parseInt(e.target.value);t>0&&f(Object(E.a)(Object(E.a)({},p),{},{max:t,remaining:t}))},required:!0}),r.a.createElement(W.a,{margin:"dense",label:"Initiative Mod",type:"number",fullWidth:!0,value:I,onChange:function(e){var t=parseInt(e.target.value);t>=-10&&t<=10&&R(t)},required:!0})),r.a.createElement(M.a,{fullWidth:!0},r.a.createElement(P.a,null,"Combatant Type"),r.a.createElement(D.a,{value:m,onChange:function(e){s(e.target.value)},style:{width:"100%"}},["character","ally","hostile","neutral"].map((function(e){return r.a.createElement(_.a,{key:e,value:e},e)})))))),r.a.createElement(x.a,null,r.a.createElement(S.a,{color:"primary",variant:"contained",style:{fontWeight:"bold"},onClick:B,disabled:!q},"Submit")))},L=a(73),z=a(132),H=a(3),U=function(e){var t=e.open,a=e.onClose,n=e.combatant,i=r.a.useState(n.initiative),o=Object(A.a)(i,2),l=o[0],c=o[1],u=Object(h.b)(),m=l>0&&l<=30,s=function(){u({type:"UPDATE_INITIATIVE",payload:{id:n.id,value:l}}),a()};return r.a.createElement(T.a,{maxWidth:"sm",open:t,onClose:function(){return a()}},r.a.createElement(k.a,null,"Update Initiative"),r.a.createElement(w.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s()},style:{width:"100%"}},r.a.createElement(W.a,{autoFocus:!0,margin:"dense",label:"Initiative",type:"number",fullWidth:!0,value:l,onChange:function(e){return c(Math.round(parseInt(e.target.value)))},required:!0,inputProps:{min:0}}))),r.a.createElement(x.a,null,r.a.createElement(S.a,{color:"primary",variant:"contained",style:{fontWeight:"bold"},onClick:s,disabled:!m},"Submit")))},q=function(e){var t=e.open,a=e.onClose,n=e.combatant,i=r.a.useState(n.name),o=Object(A.a)(i,2),l=o[0],c=o[1],u=r.a.useState(n.type),m=Object(A.a)(u,2),s=m[0],d=m[1],b=r.a.useState(n.hitPoints),p=Object(A.a)(b,2),f=p[0],g=p[1],v=r.a.useState(n.armorClass),y=Object(A.a)(v,2),O=y[0],C=y[1],j=r.a.useState(n.initiativeModifier),I=Object(A.a)(j,2),N=I[0],R=I[1],L=Object(h.b)(),z=l.length>=3,H=s.length>0,U=f.max>=f.remaining&&f.max>0&&f.remaining>0&&f.temporary>=0,q=z&&H&&U&&O>0&&(N>=-10&&N<=10),B=function(){L({type:"UPDATE_COMBATANT",payload:{id:n.id,combatant:{id:n.id,armorClass:O,conditions:n.conditions,hitPoints:f,initiative:n.initiative,initiativeModifier:N,name:l,type:s}}}),a()};return r.a.createElement(T.a,{maxWidth:"sm",open:t,onClose:function(){return a()}},r.a.createElement(k.a,null,"Edit Combatant"),r.a.createElement(w.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),B()},style:{width:"100%"}},r.a.createElement(W.a,{autoFocus:!0,margin:"dense",label:"Name",type:"text",fullWidth:!0,value:l,onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(W.a,{margin:"dense",label:"Armor Class",type:"number",fullWidth:!0,value:O,onChange:function(e){var t=parseInt(e.target.value);t>0&&C(t)},required:!0}),r.a.createElement(W.a,{margin:"dense",label:"HP",type:"number",fullWidth:!0,value:f.max,onChange:function(e){var t=parseInt(e.target.value);t>0&&g(Object(E.a)(Object(E.a)({},f),{},{max:t,remaining:t}))},required:!0}),r.a.createElement(W.a,{margin:"dense",label:"Initiative Mod",type:"number",fullWidth:!0,value:N,onChange:function(e){var t=parseInt(e.target.value);t>=-10&&t<=10&&R(t)},required:!0})),r.a.createElement(M.a,{fullWidth:!0},r.a.createElement(P.a,null,"Combatant Type"),r.a.createElement(D.a,{value:s,onChange:function(e){d(e.target.value)},style:{width:"100%"}},["character","ally","hostile","neutral"].map((function(e){return r.a.createElement(_.a,{key:e,value:e},e)})))))),r.a.createElement(x.a,null,r.a.createElement(S.a,{color:"primary",variant:"contained",style:{fontWeight:"bold"},onClick:B,disabled:!q},"Submit")))},B=a(188),G=a(62),V=a(66),F=a(178),J=a(95),K=a.n(J),X=a(94),Y=a.n(X),Q=function(e){var t=e.combatant,a=e.height,n=e.width,i=e.showTools,o=e.color,l=r.a.useState(5),c=Object(A.a)(l,2),u=c[0],m=c[1],s=Object(h.b)(),d=t.hitPoints,b=d.remaining>=.666*d.max,p=d.remaining<=.3333*d.max,f=!b&&!p,g=n||100,E=a||10,v=Math.round(d.remaining/d.max*g),y=Z({height:E,width:g,remaining:v,color:o||G.a}),O=b?y.healthy:f?y.injured:p?y.bloodied:null,C=void 0===i||i,j=function(e){return function(){s({type:"UPDATE_REMAINING_HP",payload:{id:t.id,value:"ADD"===e?d.remaining+u:d.remaining-u}}),m(5)}};return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(B.a,{title:"HP: ".concat(d.remaining," / ").concat(d.max," - Temp: ").concat(d.temporary)},r.a.createElement("div",{className:y.outer},r.a.createElement("div",{className:Object(H.a)(y.inner,O)}))),C&&r.a.createElement("div",{style:{width:g,height:15,position:"absolute",top:E+3,left:0,display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(B.a,{title:"Apply Indicated Damage"},r.a.createElement(Y.a,{onClick:j("REMOVE"),className:Object(H.a)(y.icon,y.minus)})),r.a.createElement(B.a,{title:"Amount to Adjust Health By"},r.a.createElement("input",{type:"number",value:u,onChange:function(e){var t=Math.round(parseInt(e.target.value));t>0&&m(t)},className:y.healthInput,min:1})),r.a.createElement(B.a,{title:"Heal Indicated Ammount"},r.a.createElement(K.a,{onClick:j("ADD"),className:Object(H.a)(y.icon,y.plus)}))))},Z=Object(I.a)((function(e){return{outer:{width:function(e){return e.width},height:function(e){return e.height},background:e.palette.grey[300],borderRadius:function(e){return Math.round(e.height/2)},position:"relative"},inner:{position:"absolute",top:0,left:0,background:u.a[300],borderRadius:function(e){return Math.round(e.height/2)},height:function(e){return e.height},width:function(e){return e.remaining},transition:"all 275ms ease-in-out"},healthy:{background:V.a.A400},injured:{background:F.a.A400},bloodied:{background:u.a.A400},healthInput:{width:40,border:"none",background:"transparent",color:function(e){return e.color[500]},fontSize:14,textAlign:"center","&:focus":{outline:"none"}},icon:{fontSize:25,padding:2,"&:hover":{cursor:"pointer"}},minus:{color:u.a[300],marginRight:13,"&:hover":{color:u.a[500],transition:"all 200ms ease-in-out"}},plus:{color:V.a[300],"&:hover":{color:V.a[500],transition:"all 200ms ease-in-out"}}}})),$=a(194),ee=a(179),te=a(100),ae=a.n(te),ne=a(101),re=a.n(ne),ie=a(97),oe=a.n(ie),le=a(98),ce=a.n(le),ue=a(99),me=a.n(ue),se=a(96),de=a.n(se),be=a(180),pe=a(65),he=a(64),fe=function(e){var t=e.combatant,a=Ee(t.type),n=ge({color:a}),i=t.name,o=t.type,l=t.id,c=t.armorClass,m=t.initiative,s=Object(h.b)(),d=r.a.useState(!1),b=Object(A.a)(d,2),p=b[0],f=b[1],g=r.a.useState(!1),E=Object(A.a)(g,2),v=E[0],y=E[1],O=r.a.useState(!1),C=Object(A.a)(O,2),j=C[0],I=C[1],N=t.hitPoints.remaining<=0;return r.a.createElement("div",{className:Object(H.a)(n.container,n.wrapper)},r.a.createElement("div",{className:n.container},r.a.createElement(z.a,{style:{color:a[500],fontWeight:600,fontSize:18},noWrap:!0},i||"Rezkin"),r.a.createElement(B.a,{title:o},r.a.createElement($.a,{className:n.typeChip,label:"character"===o?"PC":o,size:"small"})),r.a.createElement(B.a,{title:"Armor Class: ".concat(c)},r.a.createElement($.a,{className:n.typeChip,label:c,size:"small",icon:r.a.createElement(oe.a,{className:n.shieldIcon})})),r.a.createElement(B.a,{title:"Initiative: ".concat(m)},r.a.createElement(ee.a,{color:"secondary",badgeContent:t.initiativeModifier>=0?r.a.createElement("strong",null,"+".concat(t.initiativeModifier)):r.a.createElement("strong",null,"".concat(t.initiativeModifier)),invisible:!j},r.a.createElement("div",{onMouseEnter:function(){return I(!0)},onMouseLeave:function(){return I(!1)}},r.a.createElement($.a,{className:n.initChip,label:m,size:"small",onClick:function(){return f(!0)},icon:r.a.createElement(ce.a,{className:n.initIcon}),clickable:!0})))),r.a.createElement(B.a,{title:"Edit Combatant Details"},r.a.createElement(me.a,{onClick:function(){return y(!0)},className:Object(H.a)(n.icon,n.edit)})),r.a.createElement(B.a,{title:"Delete Combatant"},r.a.createElement(ae.a,{onClick:function(){return s({type:"DELETE_COMBATANT",id:l})},className:Object(H.a)(n.icon,n.delete)}))),r.a.createElement("div",{className:n.spacer}),r.a.createElement("div",{className:n.container},!N&&r.a.createElement(re.a,{fontSize:"small",style:{color:u.a.A400,marginRight:2}}),N&&r.a.createElement("img",{src:de.a,className:n.deadIcon,alt:"Skull Icon"}),r.a.createElement(Q,{combatant:t,color:a}),r.a.createElement("input",{className:n.healthInput,value:t.hitPoints.remaining,onChange:function(e){var a=parseInt(e.target.value)||0;a<=t.hitPoints.max&&s({type:"UPDATE_REMAINING_HP",payload:{id:t.id,value:a}})},type:"number",min:0})),r.a.createElement(U,{open:p,onClose:function(){return f(!1)},combatant:t}),r.a.createElement(q,{open:v,onClose:function(){return y(!1)},combatant:t}))},ge=Object(I.a)((function(e){return{wrapper:Object(E.a)({border:function(e){return"".concat(e.color[400]," 2px solid")},margin:e.spacing(.5),padding:e.spacing(2),borderRadius:5,width:"100%",background:function(e){return e.color[50]},overflowX:"auto"},e.scrollbar),icon:{padding:e.spacing(.1),"&:hover":{cursor:"pointer"}},edit:{color:G.a[400],marginLeft:2,"&:hover":{color:G.a[500]}},delete:{color:u.a[300],"&:hover":{color:u.a[500]}},container:{display:"flex",justifyContent:"center",alignItems:"center"},typeChip:{color:e.palette.common.white,fontWeight:"bold",marginLeft:e.spacing(.5),background:function(e){return e.color[400]}},shieldIcon:{color:be.a[600],fontWeight:"bold"},initChip:{color:e.palette.common.white,fontWeight:"bold",marginLeft:e.spacing(.5),background:function(e){return e.color[400]},"&:hover":{cursor:"pointer",background:function(e){return e.color[600]},transition:"all 200ms ease-in-out"},"&:focus":{background:function(e){return e.color[400]}}},initIcon:{color:e.palette.common.white,fontWeight:"bold"},spacer:{flexGrow:1},healthInput:{width:50,border:"none",background:"transparent",color:function(e){return e.color[500]},fontSize:18,textAlign:"center","&:focus":{outline:"none"}},deadIcon:{height:21,marginRight:2}}})),Ee=function(e){switch(e){case"character":return pe.a;case"hostile":return u.a;case"ally":return V.a;case"neutral":return he.a}},ve=a(102),ye=a.n(ve),Oe=a(103),Ce=a.n(Oe),je=a(104),Ie=a.n(je),Ae=function(){var e=Ne(),t=Object(h.c)((function(e){return e.combantants})).combatants,a=r.a.useState(!1),n=Object(A.a)(a,2),i=n[0],o=n[1],l=Object(h.b)();return r.a.createElement("div",{className:e.wrapper},r.a.createElement("div",{className:e.container},r.a.createElement("img",{src:ye.a,className:e.headerIcon,alt:"Sword Icon"}),r.a.createElement(z.a,{color:"primary",variant:"h3"},"Combat Tracker")),r.a.createElement("div",{style:{margin:8},className:e.container},r.a.createElement(S.a,{style:{margin:2,color:"white",fontWeight:"bold"},color:"secondary",variant:"contained",startIcon:r.a.createElement(Ce.a,null),onClick:function(){return o(!0)}},"Combatant"),r.a.createElement(S.a,{style:{margin:2,color:"white",fontWeight:"bold"},color:"secondary",variant:"contained",onClick:function(){return l({type:"ROLL_INITIATIVE"})},startIcon:r.a.createElement(Ie.a,null)},"Roll Initiative")),r.a.createElement(R,{open:i,onClose:function(){return o(!1)}}),r.a.createElement(L.b,{flipKey:t.map((function(e){return e.id})).join(" ")},r.a.createElement("ul",null,t.sort((function(e,t){return t.initiative-e.initiative})).map((function(e){return r.a.createElement(L.a,{key:e.id,flipId:e.id},r.a.createElement("li",{style:{listStyleType:"none"}},r.a.createElement(fe,{combatant:e})))})))))},Ne=Object(I.a)((function(e){return{wrapper:{display:"flex",justifyContent:"center",flexDirection:"column"},container:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},headerIcon:{height:40,marginRight:e.spacing(1)}}})),Se=a(181),Te=function(){var e=xe();return r.a.createElement(Se.a,{container:!0,justify:"center",className:e.root},r.a.createElement(Se.a,{item:!0,xs:12,sm:11,md:6,lg:5},r.a.createElement(Ae,null)))},xe=Object(I.a)((function(e){return{root:{height:"100vh",padding:e.spacing(2)}}})),we=Object(m.a)({palette:{primary:{main:"#4289b3"},secondary:{main:"#6153cc"},error:{main:u.a[600]}},scrollbar:{boxSizing:"border-box",overflow:"auto","&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{borderRadius:"3px",background:"#cacad0",height:"20px"}},overrides:{MuiTooltip:{tooltip:{backgroundColor:"#4289b3",fontWeight:"bold"},arrow:{color:"#4289b3"}}}});we=Object(s.a)(we);var ke=Object(p.a)();ke.listen((function(e){b.a.set({page:e.pathname}),b.a.pageview(e.pathname)})),b.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/dnd-tool",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_ANALYTICS);var Me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(h.a,{store:j},r.a.createElement(d.a,{theme:we},r.a.createElement(c.c,{history:ke},r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:Te}),r.a.createElement(c.a,{to:"/"}))))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Me,null)),document.getElementById("root"))},96:function(e,t,a){e.exports=a.p+"static/media/skull.246b879b.svg"}},[[120,1,2]]]);
//# sourceMappingURL=main.6d0d1099.chunk.js.map