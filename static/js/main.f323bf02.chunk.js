(this["webpackJsonpdnd-tool"]=this["webpackJsonpdnd-tool"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/skull.246b879b.svg"},107:function(e,t,a){e.exports=a.p+"static/media/swords.19af7b51.svg"},125:function(e,t,a){e.exports=a(136)},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=a(189),l=a(197),s=a(66),u=a(111),m=a(196),d=a(190),p=a(39),h=a(110),b=a(52),f=a(41),g=a(95),E=a(16),v=a(76),y=a(193),C={combatants:[]};var O=Object(f.combineReducers)({combantants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(p.a.event({category:"COMBATANT",action:t.type}),t.type){case"ADD_COMBATANT":return{combatants:[].concat(Object(v.a)(e.combatants),[t.payload])};case"DELETE_COMBATANT":return{combatants:e.combatants.filter((function(e){return e.id!==t.payload}))};case"UPDATE_REMAINING_HP":return{combatants:e.combatants.map((function(e){if(e.id!==t.payload.id)return e;var a=e.hitPoints.remaining>0?{success:[!1,!1,!1],failure:[!1,!1,!1]}:e.deathSaves;return Object(E.a)(Object(E.a)({},e),{},{deathSaves:a,hitPoints:Object(E.a)(Object(E.a)({},e.hitPoints),{},{remaining:t.payload.value>0?t.payload.value<=e.hitPoints.max?Math.round(t.payload.value):e.hitPoints.max:0})})}))};case"UPDATE_INITIATIVE":return{combatants:e.combatants.map((function(e){return e.id!==t.payload.id?e:Object(E.a)(Object(E.a)({},e),{},{initiative:t.payload.value})}))};case"UPDATE_COMBATANT":return{combatants:e.combatants.map((function(e){return e.id!==t.payload.id?e:t.payload.combatant}))};case"ROLL_INITIATIVE":return{combatants:e.combatants.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{initiative:Math.floor(20*Math.random())+1+e.initiativeModifier})}))};case"COPY_COMBATANT":var a=e.combatants.filter((function(e){return e.id===t.payload})),n=1===a.length?a[0]:null;return n?{combatants:[].concat(Object(v.a)(e.combatants),[Object(E.a)(Object(E.a)({},n),{},{id:Object(y.a)()})])}:e;case"UPDATE_DEATH_SAVES":return{combatants:e.combatants.map((function(e){return e.id!==t.payload.id?e:Object(E.a)(Object(E.a)({},e),{},{deathSaves:t.payload.deathSaves})}))};default:return e}}}),j=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),I=Object(f.createStore)(O,j,Object(g.devToolsEnhancer)({}));I.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}({combantants:I.getState().combantants})}));var w=a(183),N=a(22),k=a(12),A=function(){var e=Object(b.b)();return function(t){return e(t)}},x=a(182),S=a(198),T=a(181),W=a(176),P=a(175),M=a(179),D=a(200),_=a(199),z=a(191),R=a(201),B=function(e){var t=e.open,a=e.onClose,n=U(),i=r.a.useState("Combatant"),o=Object(k.a)(i,2),c=o[0],l=o[1],s=r.a.useState("character"),u=Object(k.a)(s,2),m=u[0],d=u[1],p=r.a.useState("10"),h=Object(k.a)(p,2),b=h[0],f=h[1],g=r.a.useState("13"),E=Object(k.a)(g,2),v=E[0],C=E[1],O=r.a.useState("0"),j=Object(k.a)(O,2),I=j[0],w=j[1],N=A(),B=parseInt(v),H=parseInt(I),L=isNaN(parseInt(b))?0:parseInt(b),q={max:L,remaining:L,temporary:0},V=c.length>=3,F=m.length>0,G=q.max>=q.remaining&&q.max>0&&q.remaining>0&&q.temporary>=0,J=!isNaN(B)&&B>0,K=!isNaN(H)&&H>=-10&&H<=10,Y=V&&F&&G&&J&&K,$=function(){N({type:"ADD_COMBATANT",payload:{id:Object(y.a)(),armorClass:B,conditions:[],hitPoints:q,initiative:10,initiativeModifier:H,name:c,type:m}}),l("Combatant"),d("character"),f("10"),C("13"),w("0"),a()};return r.a.createElement(S.a,{maxWidth:"sm",open:t,onClose:function(){return a()}},r.a.createElement(P.a,null,"Add Combatant"),r.a.createElement(W.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Y&&$()},style:{width:"100%"}},r.a.createElement(_.a,{autoFocus:!0,margin:"dense",label:"Name",type:"text",fullWidth:!0,value:c,onChange:function(e){return l(e.target.value)},required:!0}),r.a.createElement("div",{className:n.formWrapper},r.a.createElement(_.a,{margin:"dense",label:"Armor Class",type:"number",fullWidth:!0,value:v,onChange:function(e){C(e.target.value)},inputProps:{min:0},required:!0}),r.a.createElement(_.a,{margin:"dense",label:"HP",type:"number",fullWidth:!0,value:b,onChange:function(e){f(e.target.value)},inputProps:{min:0},required:!0}),r.a.createElement(_.a,{margin:"dense",label:"Initiative Mod",type:"number",fullWidth:!0,value:I,onChange:function(e){w(e.target.value)},inputProps:{min:0},required:!0})),r.a.createElement(M.a,{fullWidth:!0},r.a.createElement(D.a,null,"Combatant Type"),r.a.createElement(z.a,{value:m,onChange:function(e){d(e.target.value)},style:{width:"100%"}},["character","ally","hostile","neutral"].map((function(e){return r.a.createElement(R.a,{key:e,value:e},e)})))))),r.a.createElement(T.a,null,r.a.createElement(x.a,{color:"primary",variant:"contained",style:{fontWeight:"bold"},onClick:$,disabled:!Y},"Submit")))},U=Object(w.a)((function(e){return{formWrapper:Object(N.a)({display:"flex",flexWrap:"nowrap"},e.breakpoints.down("xs"),{flexWrap:"wrap"})}})),H=a(25),L=a(137),q=a(2),V=function(e){var t=e.open,a=e.onClose,n=e.combatant,i=r.a.useState("".concat(n.initiative)),o=Object(k.a)(i,2),c=o[0],l=o[1],s=A(),u=parseInt(c),m=!isNaN(u)&&u>0&&u<=30,d=function(){s({type:"UPDATE_INITIATIVE",payload:{id:n.id,value:u}}),a()};return r.a.createElement(S.a,{maxWidth:"sm",open:t,onClose:function(){return a()}},r.a.createElement(P.a,null,"Update Initiative"),r.a.createElement(W.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m&&d()},style:{width:"100%"}},r.a.createElement(_.a,{autoFocus:!0,margin:"dense",label:"Initiative",type:"number",fullWidth:!0,value:c,onChange:function(e){return l(e.target.value)},required:!0,inputProps:{min:0}}))),r.a.createElement(T.a,null,r.a.createElement(x.a,{color:"primary",variant:"contained",style:{fontWeight:"bold"},onClick:d,disabled:!m},"Submit")))},F=function(e){var t=e.open,a=e.onClose,n=e.combatant,i=G(),o=r.a.useState(n.name),c=Object(k.a)(o,2),l=c[0],s=c[1],u=r.a.useState(n.type),m=Object(k.a)(u,2),d=m[0],p=m[1],h=r.a.useState("".concat(n.hitPoints.max)),b=Object(k.a)(h,2),f=b[0],g=b[1],E=r.a.useState("".concat(n.armorClass)),v=Object(k.a)(E,2),y=v[0],C=v[1],O=r.a.useState("".concat(n.initiativeModifier)),j=Object(k.a)(O,2),I=j[0],w=j[1],N=A(),B=parseInt(y),U=parseInt(I),H=isNaN(parseInt(f))?0:parseInt(f),L={max:H,remaining:H,temporary:0},q=l.length>=3,V=d.length>0,F=L.max>=L.remaining&&L.max>0&&L.remaining>0&&L.temporary>=0,J=!isNaN(B)&&B>0,K=!isNaN(U)&&U>=-10&&U<=10,Y=q&&V&&F&&J&&K,$=function(){N({type:"UPDATE_COMBATANT",payload:{id:n.id,combatant:{id:n.id,armorClass:B,conditions:n.conditions,hitPoints:L,initiative:n.initiative,initiativeModifier:U,name:l,type:d}}}),a()};return r.a.createElement(S.a,{maxWidth:"sm",open:t,onClose:function(){return a()}},r.a.createElement(P.a,null,"Edit Combatant"),r.a.createElement(W.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Y&&$()},style:{width:"100%"}},r.a.createElement(_.a,{autoFocus:!0,margin:"dense",label:"Name",type:"text",fullWidth:!0,value:l,onChange:function(e){return s(e.target.value)},required:!0}),r.a.createElement("div",{className:i.formWrapper},r.a.createElement(_.a,{margin:"dense",label:"Armor Class",type:"number",fullWidth:!0,value:y,onChange:function(e){C(e.target.value)},required:!0}),r.a.createElement(_.a,{margin:"dense",label:"HP",type:"number",fullWidth:!0,value:f,onChange:function(e){g(e.target.value)},required:!0}),r.a.createElement(_.a,{margin:"dense",label:"Initiative Mod",type:"number",fullWidth:!0,value:I,onChange:function(e){w(e.target.value)},required:!0})),r.a.createElement(M.a,{fullWidth:!0},r.a.createElement(D.a,null,"Combatant Type"),r.a.createElement(z.a,{value:d,onChange:function(e){p(e.target.value)},style:{width:"100%"}},["character","ally","hostile","neutral"].map((function(e){return r.a.createElement(R.a,{key:e,value:e},e)})))))),r.a.createElement(T.a,null,r.a.createElement(x.a,{color:"primary",variant:"contained",style:{fontWeight:"bold"},onClick:$,disabled:!Y},"Submit")))},G=Object(w.a)((function(e){return{formWrapper:Object(N.a)({display:"flex",flexWrap:"nowrap"},e.breakpoints.down("xs"),{flexWrap:"wrap"})}})),J=a(4),K=a(195),Y=a(98),$=a.n(Y),X=a(97),Q=a.n(X),Z=a(173),ee=a(192),te=a(99),ae=a.n(te),ne=a(65),re=a(69),ie=a(184),oe=function(e){var t=e.combatant,a=e.height,n=e.width,i=e.showTools,o=e.color,c=r.a.useState("5"),l=Object(k.a)(c,2),s=l[0],u=l[1],m=A(),d=t.hitPoints,p=d.remaining>=.666*d.max,h=d.remaining<=.3333*d.max,b=d.remaining<=0,f=!p&&!h&&!b,g=n||100,E=a||10,v=Math.round(d.remaining/d.max*g),y=ce({height:E,width:g,remaining:v,color:o||ne.a}),C=p?y.healthy:f?y.injured:h?y.bloodied:null,O=!b&&(void 0===i||i),j=t.deathSaves||{success:[!1,!1,!1],failure:[!1,!1,!1]},I=function(e){return function(){var a=parseInt(s);a&&a>=1&&m({type:"UPDATE_REMAINING_HP",payload:{id:t.id,value:"ADD"===e?d.remaining+a:d.remaining-a}}),u("5")}},w=function(e,a){return function(n){var r=t.deathSaves||{success:[!1,!1,!1],failure:[!1,!1,!1]};r[e][a]=n.target.checked,m({type:"UPDATE_DEATH_SAVES",payload:{id:t.id,deathSaves:r}})}};return r.a.createElement("div",{style:{position:"relative",marginBottom:b?0:10}},r.a.createElement(H.b,{flipKey:b},b?r.a.createElement(H.a,{flipId:"dead"},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(le,{checked:j.success[0],style:{height:8,width:12},onChange:w("success",0),size:"small"}),r.a.createElement(le,{checked:j.success[1],style:{height:8,width:12},onChange:w("success",1),size:"small"}),r.a.createElement(le,{checked:j.success[2],style:{height:8,width:12},onChange:w("success",2),size:"small"})),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(se,{checked:j.failure[0],style:{height:8,width:12},onChange:w("failure",0),size:"small"}),r.a.createElement(se,{checked:j.failure[1],style:{height:8,width:12},onChange:w("failure",1),size:"small"}),r.a.createElement(se,{checked:j.failure[2],style:{height:8,width:12},onChange:w("failure",2),size:"small"})))):r.a.createElement(H.a,{flipId:"dead"},r.a.createElement(K.a,{title:"HP: ".concat(d.remaining," / ").concat(d.max," - Temp: ").concat(d.temporary)},r.a.createElement("div",{className:y.outer},r.a.createElement("div",{className:Object(q.a)(y.inner,C)}))))),O&&r.a.createElement(Z.a,{in:O},r.a.createElement("div",{style:{width:g,height:15,position:"absolute",top:E+3,left:0,display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(K.a,{title:"Apply Indicated Damage"},r.a.createElement(Q.a,{onClick:I("REMOVE"),className:Object(q.a)(y.icon,y.minus)})),r.a.createElement(K.a,{title:"Amount to Adjust Health By"},r.a.createElement("input",{type:"number",value:s,onChange:function(e){u(e.target.value)},className:y.healthInput,min:1})),r.a.createElement(K.a,{title:"Heal Indicated Ammount"},r.a.createElement($.a,{onClick:I("ADD"),className:Object(q.a)(y.icon,y.plus)})))))},ce=Object(w.a)((function(e){return{outer:{width:function(e){return e.width},height:function(e){return e.height},background:e.palette.grey[300],borderRadius:function(e){return Math.round(e.height/2)},position:"relative"},inner:{position:"absolute",top:0,left:0,background:s.a[300],borderRadius:function(e){return Math.round(e.height/2)},height:function(e){return e.height},width:function(e){return e.remaining},transition:"all 275ms ease-in-out"},healthy:{background:re.a.A400},injured:{background:ie.a.A400},bloodied:{background:s.a.A400},healthInput:{width:40,border:"none",background:"transparent",color:function(e){return e.color[500]},fontSize:14,textAlign:"center","&:focus":{outline:"none"}},icon:{fontSize:25,padding:2,"&:hover":{cursor:"pointer"}},minus:{color:s.a[300],marginRight:13,"&:hover":{color:s.a[500],transition:"all 200ms ease-in-out"}},plus:{color:re.a[300],"&:hover":{color:re.a[500],transition:"all 200ms ease-in-out"}}}})),le=Object(J.a)({root:{color:re.a[400],"&$checked":{color:re.a[600]}},checked:{}})((function(e){return r.a.createElement(ee.a,Object.assign({color:"default"},e))})),se=Object(J.a)({root:{color:s.a[400],"&$checked":{color:s.a[600]}},checked:{}})((function(e){return r.a.createElement(ee.a,Object.assign({checkedIcon:r.a.createElement(ae.a,null),color:"default"},e))})),ue=a(202),me=a(185),de=a(105),pe=a.n(de),he=a(106),be=a.n(he),fe=a(101),ge=a.n(fe),Ee=a(102),ve=a.n(Ee),ye=a(103),Ce=a.n(ye),Oe=a(104),je=a.n(Oe),Ie=a(100),we=a.n(Ie),Ne=a(186),ke=a(187),Ae=a(68),xe=a(67),Se=function(e){var t=e.combatant,a=We(t.type),n=Te({color:a}),i=t.name,o=t.type,c=t.id,l=t.armorClass,u=t.initiative,m=A(),d=r.a.useState(!1),p=Object(k.a)(d,2),h=p[0],b=p[1],f=r.a.useState(!1),g=Object(k.a)(f,2),E=g[0],v=g[1],y=r.a.useState(!1),C=Object(k.a)(y,2),O=C[0],j=C[1],I=t.hitPoints.remaining<=0;return r.a.createElement("div",{className:Object(q.a)(n.container,n.wrapper)},r.a.createElement("div",{className:Object(q.a)(n.container)},r.a.createElement(L.a,{style:{color:a[500],fontWeight:600,fontSize:18},noWrap:!0},i||"Rezkin"),r.a.createElement(K.a,{title:o},r.a.createElement(ue.a,{className:n.typeChip,label:"character"===o?"PC":o,size:"small"})),r.a.createElement(K.a,{title:"Armor Class: ".concat(l)},r.a.createElement(ue.a,{className:n.typeChip,label:l,size:"small",icon:r.a.createElement(ge.a,{className:n.shieldIcon})})),r.a.createElement(K.a,{title:"Initiative: ".concat(u)},r.a.createElement(me.a,{color:"secondary",badgeContent:t.initiativeModifier>=0?r.a.createElement("strong",null,"+".concat(t.initiativeModifier)):r.a.createElement("strong",null,"".concat(t.initiativeModifier)),invisible:!O},r.a.createElement("div",{onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)}},r.a.createElement(ue.a,{className:n.initChip,label:u,size:"small",onClick:function(){return b(!0)},icon:r.a.createElement(ve.a,{className:n.initIcon}),clickable:!0})))),r.a.createElement(K.a,{title:"Edit Combatant Details"},r.a.createElement(Ce.a,{onClick:function(){return v(!0)},className:Object(q.a)(n.icon,n.edit)})),r.a.createElement(K.a,{title:"Copy Combatant"},r.a.createElement(je.a,{onClick:function(){return m({type:"COPY_COMBATANT",payload:c})},className:Object(q.a)(n.icon,n.copy)})),r.a.createElement(K.a,{title:"Delete Combatant"},r.a.createElement(pe.a,{onClick:function(){return m({type:"DELETE_COMBATANT",payload:c})},className:Object(q.a)(n.icon,n.delete)}))),r.a.createElement("div",{className:Object(q.a)(n.container,n.healthWrapper)},r.a.createElement(H.b,{flipKey:I,spring:"gentle"},I?r.a.createElement(H.a,{flipId:"icon"},r.a.createElement("div",null,r.a.createElement("img",{src:we.a,className:n.deadIcon,alt:"Skull Icon"}))):r.a.createElement(H.a,{flipId:"icon"},r.a.createElement(be.a,{fontSize:"small",style:{color:s.a.A400,marginRight:2}}))),r.a.createElement(oe,{combatant:t,color:a}),r.a.createElement("input",{className:n.healthInput,value:t.hitPoints.remaining,onChange:function(e){var a=parseInt(e.target.value)||0;a<=t.hitPoints.max&&m({type:"UPDATE_REMAINING_HP",payload:{id:t.id,value:a}})},type:"number",min:0})),r.a.createElement(V,{open:h,onClose:function(){return b(!1)},combatant:t}),r.a.createElement(F,{open:E,onClose:function(){return v(!1)},combatant:t}))},Te=Object(w.a)((function(e){return{wrapper:Object(E.a)(Object(N.a)({border:function(e){return"".concat(e.color[400]," 2px solid")},margin:e.spacing(.5),padding:e.spacing(1.2),borderRadius:5,width:"100%",background:function(e){return e.color[50]},overflowX:"auto",justifyContent:"space-between",flexWrap:"wrap",height:"auto"},e.breakpoints.down("xs"),{justifyContent:"center"}),e.scrollbar),healthWrapper:Object(N.a)({},e.breakpoints.down("xs"),{margin:e.spacing(.5)}),icon:{padding:e.spacing(.1),"&:hover":{cursor:"pointer"}},edit:{color:Ne.a[300],marginLeft:2,"&:hover":{color:Ne.a[400]}},copy:{color:Ne.a[200],"&:hover":{color:Ne.a[300]}},delete:{color:s.a[300],"&:hover":{color:s.a[500]}},container:{display:"flex",alignItems:"center"},typeChip:{color:e.palette.common.white,fontWeight:"bold",marginLeft:e.spacing(.5),background:function(e){return e.color[400]}},shieldIcon:{color:ke.a[600],fontWeight:"bold"},initChip:{color:e.palette.common.white,fontWeight:"bold",marginLeft:e.spacing(.5),background:function(e){return e.color[400]},"&:hover":{cursor:"pointer",background:function(e){return e.color[600]},transition:"all 200ms ease-in-out"},"&:focus":{background:function(e){return e.color[400]}}},initIcon:{color:e.palette.common.white,fontWeight:"bold"},spacer:{flexGrow:1},healthInput:Object(N.a)({width:50,border:"none",background:"transparent",color:function(e){return e.color[500]},fontSize:18,textAlign:"center","&:focus":{outline:"none"}},e.breakpoints.down("xs"),{fontSize:15}),deadIcon:{height:21,width:21,marginRight:2}}})),We=function(e){switch(e){case"character":return Ae.a;case"hostile":return s.a;case"ally":return re.a;case"neutral":return xe.a}},Pe=a(107),Me=a.n(Pe),De=a(108),_e=a.n(De),ze=a(109),Re=a.n(ze),Be=function(){var e=Ue(),t=Object(b.c)((function(e){return e.combantants})).combatants,a=r.a.useState(!1),n=Object(k.a)(a,2),i=n[0],o=n[1],c=A(),l=t.sort((function(e,t){return t.initiative-e.initiative}));return r.a.createElement("div",{className:e.wrapper},r.a.createElement("div",{className:e.container},r.a.createElement("img",{src:Me.a,className:e.headerIcon,alt:"Sword Icon"}),r.a.createElement(L.a,{color:"primary",variant:"h3"},"Combat Tracker")),r.a.createElement("div",{style:{marginTop:4,marginBottom:4},className:e.container},r.a.createElement(x.a,{style:{marginRight:2,color:"white",fontWeight:"bold"},color:"secondary",variant:"contained",startIcon:r.a.createElement(_e.a,null),onClick:function(){return o(!0)},size:"small"},"Combatant"),r.a.createElement(x.a,{style:{margin:2,color:"white",fontWeight:"bold"},color:"secondary",variant:"contained",onClick:function(){return c({type:"ROLL_INITIATIVE"})},startIcon:r.a.createElement(Re.a,null),size:"small"},"Roll Initiative")),r.a.createElement(B,{open:i,onClose:function(){return o(!1)}}),r.a.createElement(H.b,{flipKey:l.map((function(e){return e.id})).join(" ")},r.a.createElement("ul",{style:{padding:0,listStyleType:"none",margin:0}},l.map((function(e){return r.a.createElement(H.a,{key:e.id,flipId:e.id},r.a.createElement("li",{style:{listStyleType:"none"}},r.a.createElement(Se,{combatant:e})))})))))},Ue=Object(w.a)((function(e){return{wrapper:{display:"flex",justifyContent:"center",flexDirection:"column",margin:0,padding:0},container:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},headerIcon:Object(N.a)({height:40,marginRight:e.spacing(1)},e.breakpoints.down("xs"),{height:25})}})),He=a(188),Le=function(){var e=qe();return r.a.createElement(He.a,{container:!0,justify:"center",className:e.root},r.a.createElement(He.a,{item:!0,sm:12,md:8,lg:7,xl:6},r.a.createElement(Be,null)))},qe=Object(w.a)((function(e){return{root:{height:"100vh",padding:e.spacing(2)}}})),Ve=Object(u.a)({palette:{primary:{main:"#4289b3"},secondary:{main:"#6153cc"},error:{main:s.a[600]}},scrollbar:{boxSizing:"border-box",overflow:"auto","&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{borderRadius:"3px",background:"#cacad0",height:"20px"}},overrides:{MuiTooltip:{tooltip:{backgroundColor:"#4289b3",fontWeight:"bold"},arrow:{color:"#4289b3"}}}});Ve=Object(m.a)(Ve);var Fe=Object(h.a)({basename:"/dnd-tool/"});Fe.listen((function(e){p.a.set({page:e.pathname}),p.a.pageview(e.pathname)})),p.a.initialize("UA-159136712-3");var Ge=function(){return r.a.useEffect((function(){p.a.pageview(window.location.pathname)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(b.a,{store:I},r.a.createElement(d.a,{theme:Ve},r.a.createElement(l.c,{history:Fe},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:Le}),r.a.createElement(l.a,{to:"/"}))))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.f323bf02.chunk.js.map