(this["webpackJsonppage-im"]=this["webpackJsonppage-im"]||[]).push([[0],{189:function(e,a,t){},225:function(e,a,t){e.exports=t(450)},230:function(e,a,t){},236:function(e,a,t){},28:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return m}));var n=t(32),r=t.n(n),l=t(48),c=t(9),o=t(0),i=t.n(o),s=t(49),u=void 0,m=Object(o.createContext)(),d=Object(s.a)();a.b=function(a){var t=Object(o.useState)([]),n=Object(c.a)(t,2),s=n[0],f=n[1],p=Object(o.useState)(!1),E=Object(c.a)(p,1)[0],b=Object(o.useState)(""),h=Object(c.a)(b,1)[0],g=Object(o.useState)([]);Object(c.a)(g,1)[0];return Object(o.useEffect)((function(){var e=window.location.pathname.toString();if(e=e?e.substr(1):"",localStorage.freeUserToken&&null!==localStorage.freeUserToken&&"undefined"!==localStorage.freeUserToken){var a="".concat(d,"/public/fields/data?application=").concat(e);fetch(a,{method:"POST",headers:{Authorization:"Bearer "+localStorage.freeUserToken}}).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){console.error("Error:",e)}))}else{var t="".concat(d,"/session/createNewUserDevice");fetch(t).then(function(){var e=Object(l.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:t=e.sent,a.ok&&t.success?localStorage.freeUserToken=t.token:(h(t.message),E(!0));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){u.setState({errorMessage:e.toString()})}))}}),[e]),Object(o.useEffect)((function(){localStorage.setItem("config",JSON.stringify(s))}),[s]),i.a.createElement(m.Provider,{value:{config:s}},a.children)}}).call(this,t(66))},427:function(e,a,t){},428:function(e,a,t){},429:function(e,a,t){},430:function(e,a,t){},450:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=(t(230),t(9)),i=t(28),s=Object(n.createContext)(null),u=function(e){var a=Object(n.useState)([{countHiddenFields:0}]),t=Object(o.a)(a,2),l=t[0],c=t[1];return r.a.createElement(s.Provider,{value:{global:l,settingGlobal:function(e){c([{countHiddenFields:e}])}}},e.children)},m=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"file upload"),r.a.createElement("form",{className:"form"},r.a.createElement("div",{c:"form-group"},r.a.createElement("label",{htmlFor:"file"},"File"),r.a.createElement("input",{id:"file",type:"file",className:"form-control"})),r.a.createElement("button",{id:"upload",type:"button",className:"btn btn-primary",onClick:function(e){return function(e){console.log(e.h1)}(e)}},"Upload")),r.a.createElement("div",{id:"output",className:"container"}))},d=t(51),f=t(53),p=t(54),E=t(498),b=t(17),h=t(500),g=t(501),v=t(495),O=t(100),k=t(215),y=t(499),j=t(497),S=t(214),w=t(204),N=t.n(w),C=t(205),x=t.n(C),T=t(126),A=t.n(T),I=t(98),F=t.n(I),H=t(125),D=t.n(H),P=t(206),W=t.n(P),U=t(506),z=t(207),R=t.n(z),B=t(30),M=t(486),q=t(496),_=t(127),L=t.n(_),V=t(128),J=t.n(V),G=t(208),X=t.n(G),K=t(451),Q=t(502),Y=t(490),Z=t(209),$=t.n(Z),ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,[].sort((function(e,a){return e.key>a.key?1:-1})).map((function(e,a){return r.a.createElement(d.b,{to:"/"+e.Linkto,params:"table",key:e.key},r.a.createElement(K.a,{button:!0,key:e.key},r.a.createElement("i",{className:e.icon}),r.a.createElement(Y.a,{primary:e.text})))}))))},ae=t(494),te=(t(236),function(e){var a=e.header,t=e.visible,n=e.children,l=e.dismiss;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"modal-warpper",style:{position:"absolute"}},r.a.createElement("div",{className:"modal-box"},r.a.createElement("div",{className:"modal-box-header"},r.a.createElement("h3",null,a),r.a.createElement("button",{onClick:l},"X")),n),r.a.createElement("div",{className:"modal-bg"})):null)}),ne=t(32),re=t.n(ne),le=t(48),ce=t(201),oe=t(197),ie=(t(144),t(202)),se=t.n(ie),ue=function(e){e.id;var a=e.name,t=e.type,n=e.placeholder,l=e.onChange,c=e.className,o=e.value,i=e.error,s=void 0===i||i,u=e.label,m=e.variant,d=void 0===m?"outlined":m;return r.a.createElement(r.a.Fragment,null,"date"===t?r.a.createElement(oe.a,{id:"date-required",label:u,type:"date",variant:"outlined",InputLabelProps:{shrink:!0},style:{width:305}}):"color"===t?r.a.createElement(se.a,{id:"standard-basic {name}",name:"color",defaultValue:"pick color",onChange:function(e){return console.log(e)},variant:"outlined",style:{width:305}}):r.a.createElement(oe.a,{variant:d,label:u,id:a,name:a,type:t,placeholder:n,value:o,className:c,onChange:l,autoComplete:"false",style:{border:s?"solid 1px red":""}}),s?r.a.createElement("p",{style:{color:"red",fontSize:"14px"}},s):"")};ue.defaultProps={type:"text",className:""};var me=ue,de=t(124),fe=t.n(de),pe=t(49),Ee=Object(pe.a)(),be=function(){var e=Object(le.a)(re.a.mark((function e(a){var t,n,r,l;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.freeUserToken&&null!==localStorage.freeUserToken&&"undefined"!==localStorage.freeUserToken){e.next=4;break}return e.abrupt("return",null);case 4:return t=(t=window.location.pathname.toString())?t.substr(1):"",n="".concat(Ee,"/public/").concat(t,"/add"),fe.a.defaults.headers.common.Authorization="Bearer ".concat(localStorage.freeUserToken),r=a,e.next=11,fe.a.post(n,r).then((function(e){console.log("RESPONSE RECEIVED: ",e)})).catch((function(e){console.log("AXIOS ERROR: ",e)}));case 11:return l=e.sent,console.log(l),e.abrupt("return",l);case 15:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),he=function(){var e=Object(n.useContext)(i.a).config,a={};e.map((function(e){a[e.name]=""}));var t=Object(n.useState)(a),l=Object(o.a)(t,2),c=l[0],s=l[1],u=function(e){var a=e.target,t=a.name,n=a.value;c[t]=n,s(Object(ce.a)({},c))},m=function(){var e=Object(le.a)(re.a.mark((function e(a){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,be(c);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,e?e.sort((function(e,a){return e.order>a.order?1:-1})).map((function(e,a){return e.is_edit?null:r.a.createElement("span",{className:"form-group",id:e.clientId,style:{maxWidth:"".concat(e.width,"px"),minWidth:"".concat(e.width,"px")},key:a},r.a.createElement(me,{id:"date"===e.type?"outlined-helperText":e.is_edit?"standard":"standard-read-only-input",type:e.type?e.type:"text",name:e.name?e.name:null,label:e.label?e.label:e.name,className:"form-control",placeHolder:e.name,value:c[e.name],error:"",onChange:u}))})):null,r.a.createElement("br",null),r.a.createElement(ae.a,{style:{marginRight:"1rem"},variant:"contained"},"Cancel"),r.a.createElement(ae.a,{variant:"contained",color:"primary",onClick:m},"Add")))},ge=function(e){e.header;var a=e.visible,t=(e.children,e.dismiss),l=Object(n.useState)(a);Object(o.a)(l,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{header:"Add new row",visible:a,children:r.a.createElement(he,null),dismiss:t}))},ve=t(203),Oe=t.n(ve);function ke(){var e=Object(n.useContext)(i.a).config,a=Object(n.useContext)(s),t=(a.global,a.settingGlobal),l=Object(n.useState)(""),c=Object(o.a)(l,2),u=c[0],m=c[1],d=e.filter((function(e){return!0===e.clientTableHideColumn})).map((function(e){return e.name})),f=r.a.useState(null),p=Object(o.a)(f,2),E=p[0],b=p[1],h=Boolean(E),g=d.length;return r.a.createElement("div",null,r.a.createElement(v.a,{disabled:!1,"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)}},r.a.createElement(Oe.a,{color:0===g?"inherit":"secondary"})),r.a.createElement(S.a,{id:"long-menu",anchorEl:E,keepMounted:!0,open:h,onClose:function(){b(null)},PaperProps:{style:{maxHeight:216,width:"20ch"}}},r.a.createElement("div",null,r.a.createElement("h4",null,"Hidden fields")),r.a.createElement(q.a,{variant:"inset",component:"li"}),d.map((function(a,n){return r.a.createElement(j.a,{key:n,style:{displey:u===a?"none":"block"},onClick:function(){!function(a){e.filter((function(e){return e.name===a}))[0].clientTableHideColumn=!1,t(g)}(a),m(a)}},a)}))))}var ye=Object(E.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(p.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(p.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),hiddenColumns:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,position:"fix",overflow:"auto",maxHeight:300,direction:"rtl",marginTop:64,boxShadow:"10 10 5 grey"},sectionMobile:Object(p.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function je(e){var a=Object(n.useContext)(i.a).config,t=Object(n.useContext)(s).global,l=e.AppDirection,c=e.setAppDirection,u=e.screenType,m=e.setScreenType,d=Object(B.a)(),f=ye(),p=r.a.useState(null),E=Object(o.a)(p,2),b=E[0],w=E[1],C=r.a.useState(null),T=Object(o.a)(C,2),I=T[0],H=T[1],P=Boolean(b),z=Boolean(I),_=function(e){w(e.currentTarget)},V=function(){H(null)},G=function(){w(null),V()},Z=r.a.useState(!1),ne=Object(o.a)(Z,2),re=ne[0],le=ne[1],ce=Object(n.useState)(0),oe=Object(o.a)(ce,2),ie=(oe[0],oe[1]);Object(n.useEffect)((function(){ie(a.filter((function(e){return!0===e.clientTableHideColumn})).length)}),[a]);var se=Object(n.useState)(!1),ue=Object(o.a)(se,2),me=ue[0],de=ue[1],fe=function(){de((function(e){return!e}))},pe=Object(n.useState)(!1),Ee=Object(o.a)(pe,2),be=Ee[0],he=Ee[1],ve=function(){he((function(e){return!e}))},Oe="primary-search-account-menu",je=r.a.createElement(S.a,{anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},id:Oe,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:P,onClose:G},r.a.createElement(j.a,{onClick:G},"Profile1"),r.a.createElement(j.a,{onClick:G},"My account")),Se=r.a.createElement(S.a,{anchorEl:I,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:z,onClose:V},r.a.createElement(j.a,null,r.a.createElement(v.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(y.a,{badgeContent:4,color:"secondary"},r.a.createElement(F.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(j.a,null,r.a.createElement(v.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(y.a,{badgeContent:11,color:"secondary"},r.a.createElement(D.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(j.a,{onClick:_},r.a.createElement(v.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(A.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:f.grow},r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(v.a,{onClick:function(){le(!0)},edge:"start",className:f.menuButton,color:"inherit","aria-label":"open drawer"}," ",r.a.createElement(N.a,null)," "),r.a.createElement(y.a,{badgeContent:t[0].countHiddenFields,color:"secondary",size:"small"},r.a.createElement(ke,null)),r.a.createElement(O.a,{className:f.title,variant:"h6",noWrap:!0},"Page-im"),r.a.createElement("div",{className:f.search},r.a.createElement("div",{className:f.searchIcon},r.a.createElement(x.a,null)),r.a.createElement(k.a,{placeholder:"Search\u2026",classes:{root:f.inputRoot,input:f.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(ae.a,{color:"secondary",onClick:fe},"Add"),r.a.createElement(ae.a,{color:"default",onClick:ve},"ADD ROW"),r.a.createElement("div",{className:f.grow}),r.a.createElement("div",{className:f.sectionDesktop},r.a.createElement(v.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(y.a,{badgeContent:4,color:"secondary"},r.a.createElement(F.a,null))),r.a.createElement(v.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(y.a,{badgeContent:17,color:"secondary"},r.a.createElement(D.a,null))),r.a.createElement(v.a,{edge:"end","aria-label":"account of current user","aria-controls":Oe,"aria-haspopup":"true",onClick:_,color:"inherit"},r.a.createElement(A.a,null))),r.a.createElement("div",{className:f.sectionMobile},r.a.createElement(v.a,{onClick:function(e){H(e.currentTarget)},"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",color:"inherit"}," ",r.a.createElement(W.a,null)," ")))),r.a.createElement(te,{header:"old test",visible:me,dismiss:fe,children:"old test"}),r.a.createElement(ge,{header:"Add new row",visible:be,dismiss:ve,children:"modalAddRowVisible"}),r.a.createElement(U.a,{className:f.drawer,variant:"persistent",anchor:"left",open:re,classes:{paper:f.drawerPaper}},r.a.createElement("div",{className:f.drawerHeader},r.a.createElement(v.a,{onClick:function(){m("table"===u?"card":"table"),window.localStorage.setItem("screenType",JSON.stringify(u))}},"table"===u?r.a.createElement(R.a,null):r.a.createElement(X.a,null)," "),r.a.createElement(v.a,{onClick:function(){le(!1)}},"ltr"===d.direction?r.a.createElement(L.a,null):r.a.createElement(J.a,null)," ")),r.a.createElement(q.a,null),r.a.createElement(ee,null),r.a.createElement(q.a,null),r.a.createElement(M.a,null,["All mail","Trash","Spam"].map((function(e,a){return r.a.createElement(K.a,{button:!0,key:e},r.a.createElement(Q.a,null,a%2===0?r.a.createElement($.a,null):r.a.createElement(F.a,null)),r.a.createElement(Y.a,{primary:e}))})),r.a.createElement(q.a,null),r.a.createElement(v.a,{onClick:function(){c("ltr"===l?"rtl":"ltr"),window.localStorage.setItem("AppDirection",JSON.stringify(l))}}," ","ltr"===l?r.a.createElement(J.a,null):r.a.createElement(L.a,null)," "),r.a.createElement("p",null,"ver 1.01"))),Se,je)}var Se=t(129);t(427);var we=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"#!",className:"btn btn-sm disabled"},r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement("a",{href:"#!",className:"btn btn-sm disabled"},r.a.createElement("i",{className:"fas fa-edit"})),r.a.createElement("a",{href:"#!",className:"btn btn-sm disabled"},r.a.createElement("i",{className:"fas fa-pencil-alt"})),r.a.createElement("a",{href:"#!",className:"btn btn-sm disabled"},r.a.createElement("i",{className:"fas fa-plus"})))},Ne=(t(189),t(505)),Ce=t(504),xe=t(493),Te=t(99),Ae=t.n(Te),Ie=t(130),Fe=t.n(Ie),He=Object(E.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",maxWidth:250,minWidth:120},formControl:{maxWidth:200,display:"flex"},upperFilte11:{minHeight:"2rem",minWidth:120,maxWidth:250,backgroundColor:"lightblue",position:"sticky",top:0}}})),De=["\u05d0\u05d3\u05d5\u05e0\u05d9 \u05d9\u05dd","\u05d3\u05d5\u05dc\u05d1 \u05d2\u05dc\u05e2\u05d3","\u05db\u05d4\u05df \u05d7\u05d9\u05d9\u05dd","\u05d0\u05d3\u05dd \u05dc\u05d9\u05dc\u05da","\u05d9\u05d5\u05e8 \u05d1\u05e0\u05d9","\u05d8\u05e8\u05d9\u05d9\u05e8 \u05d9\u05d5\u05e8\u05e7\u05e9\u05d9\u05d9\u05e8","\u05d7\u05d9\u05d9\u05dd","Bbb","AAAA","CCCC","Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];var Pe=function(e){var a=r.a.useState(!1),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(e),s=Object(o.a)(i,2),u=(s[0],s[1]),m=Object(n.useState)(u),d=Object(o.a)(m,2),f=d[0],p=(d[1],Object(n.useState)(Ae.a)),E=Object(o.a)(p,2),b=E[0],h=E[1],g=He(),v=r.a.useState([]),O=Object(o.a)(v,2),k=O[0],y=O[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe.a,{className:g.formControl},r.a.createElement(Ne.a,{multiple:!0,value:k,onChange:function(e){y(e.target.value),e.target.value.length>0?h(Fe.a):h(Ae.a),console.log(f)},renderValue:function(e){return e.join(", ")},IconComponent:b},r.a.createElement("div",{className:"upperFilter"},r.a.createElement(Ce.a,{checked:l,onChange:function(e){c(e.target.checked),e.target.checked?(y([].concat(De)),h(Fe.a)):(y([]),h(Ae.a))}}),r.a.createElement("span",null),r.a.createElement("hr",null)),De.sort((function(e,a){return e>a?1:-1})).map((function(e){return r.a.createElement(j.a,{key:e,value:e},r.a.createElement(Ce.a,{checked:k.indexOf(e)>-1}),r.a.createElement(Y.a,{primary:e}))})))))},We=(t(428),function(e){for(var a=Number(e.stars),t=[],n=0;n<5;++n)n<a?t.push(r.a.createElement("i",{className:"fa fa-star checked",key:n})):t.push(r.a.createElement("i",{className:"fa fa-star",key:n}));return r.a.createElement(r.a.Fragment,null,t.map((function(e){return e})))}),Ue=void 0,ze=function(e){var a=e.app?e.app:"",t=Object(n.useContext)(s).global,l=Object(n.useState)(0),c=Object(o.a)(l,2),u=c[0],m=c[1],d=Object(n.useContext)(i.a).config,f=Object(n.useState)(r.a.createElement(Pe,null)),p=Object(o.a)(f,2),E=(p[0],p[1],Object(n.useState)([])),b=Object(o.a)(E,2),h=b[0],g=b[1],v=Object(pe.a)(),O=Object(n.useState)(3),k=Object(o.a)(O,2),y=k[0],j=(k[1],Object(n.useState)(!1)),S=Object(o.a)(j,2),w=S[0],N=S[1],C=Object(n.useState)(""),x=Object(o.a)(C,2),T=x[0],A=x[1],I=Object(n.useState)([]),F=Object(o.a)(I,2),H=F[0],D=F[1];Object(n.useEffect)((function(){if(d&&d.length>0){var e,a=Object(Se.a)(d);try{for(a.s();!(e=a.n()).done;){var t=e.value;t.clienSort=!1,t.clientSortOrder=null,t.clientSortIcon=null,t.clientSortDirection=null,t.clientHide=!1,t.clientAggregation=!1,t.clientAggrigationIcon="far fa-square",t.clientFilter=!1,t.clientFilterIconColor="colorWhite",t.clientTableHideColumn=!1,t.clientId="Id_"+t.name,t.dragable=!0,t.clientFilterHeaderCheckbox=!1}}catch(n){a.e(n)}finally{a.f()}}}),[d]);var P=function(e){D("HandleSort");var a=d.filter((function(a){return a.name===e}))[0];a.clientSort?"fas fa-sort-down icon"===a.clientSortIcon?(a.clientSortIcon="fas fa-sort-up icon",a.direction="asc"):(a.clientSortIcon="fas fa-sort-down icon",a.direction="desc"):(a.clientSort=!0,a.clientSortIcon="fas fa-sort-up icon",a.direction="asc",m((function(e){return e+1})),a.clientSortOrder=u)},W=function(e){D("handleDragStart");var a=e.target.id;e.dataTransfer.setData("data",a)},U=function(e){e.preventDefault()},z=function(e){e.target},R=function(e){var a=e.currentTarget.id,t=e.dataTransfer.getData("data");B(a,t)},B=function(e,a){D("handleChangeOrder");var t=1;if(d&&d.length>0){var n,r=d.filter((function(a){return a.clientId===e}))[0].order,l=Object(Se.a)(d);try{for(l.s();!(n=l.n()).done;){var c=n.value;c.clientId===a?c.order=r:(t===r&&(t+=1),c.order=t,t+=1)}}catch(o){l.e(o)}finally{l.f()}}};return Object(n.useEffect)((function(){if("/"!==a)if("/"!==a&&localStorage.freeUserToken&&null!==localStorage.freeUserToken&&"undefined"!==localStorage.freeUserToken){var e="".concat(v,"/public").concat(a,"/data");fetch(e,{method:"POST",headers:{Authorization:"Bearer "+localStorage.freeUserToken}}).then((function(e){return e.json()})).then((function(e){return g(e)})).catch((function(e){console.error("Error:",e)}))}else{var t="".concat(v,"/session/createNewUserDevice");fetch(t).then(function(){var e=Object(le.a)(re.a.mark((function e(a){var t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:t=e.sent,a.ok&&t.success?localStorage.freeUserToken=t.token:(A(t.message),N(!0));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){Ue.setState({errorMessage:e.toString()}),console.error("There was an error!",e)}))}}),[d,H,t]),r.a.createElement(r.a.Fragment,null,w?r.a.createElement("span",{className:"error"},"Error occured : ",T):r.a.createElement("table",{id:"main",className:"display"},r.a.createElement("thead",null,r.a.createElement("tr",null,d.sort((function(e,a){return e.order>a.order?1:-1})).map((function(e,a){return e.clientTableHideColumn?null:r.a.createElement("th",{"data-type":"numeric",id:e.clientId,draggable:e.dragable,onDragStart:W,onDragOver:U,onDragEnter:z,onDrop:R,style:{maxWidth:"".concat(e.width+80,"px"),minWidth:"".concat(e.width+80,"px")},key:a},r.a.createElement("span",{className:"header-unit",key:999*a},r.a.createElement("span",{style:{Width:"".concat(e.width,"px")},className:"header-data",onClick:function(){return P(e.name)}},e.name),r.a.createElement("span",{className:"header-action"},r.a.createElement("span",{className:"sort-icon",onClick:function(){return P(e.name)}},r.a.createElement("i",{className:e.clientSortIcon},r.a.createElement("span",{className:"sort-order"},e.clientSortOrder))),r.a.createElement("span",{onClick:function(){return a=e.name,D("HandleHideColumn"),void(d.filter((function(e){return e.name===a}))[0].clientTableHideColumn=!0);var a},className:"HandleHideColumn"},r.a.createElement("i",{className:"far fa-times-circle"})),r.a.createElement("span",{onClick:function(){return function(e){D("HandleAggregation");var a=d.filter((function(a){return a.name===e}))[0];a.clientAggregation?(a.clientAggrigationIcon="far fa-square",a.clientAggregation=!1):(a.clientAggrigationIcon="fa fa-check-square",a.clientAggregation=e)}(e.name)}},r.a.createElement("i",{className:e.clientAggrigationIcon})),r.a.createElement("span",{onClick:function(){return function(e){D("HandleFilter");var a=d.filter((function(a){return a.name===e}))[0];a.clientFilter?(a.clientFilter=!1,a.clientFilterIconColor="colorWhite"):(a.clientFilter=e,a.clientFilterIconColor="colorRed")}(e.name)},className:"filterIcon"},r.a.createElement(Pe,{name:e.name,filterCheckBox:e.clientFilterHeaderCheckbox})))))})))),r.a.createElement("tbody",null,h?h.slice(0,y).map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"tablerow",key:a},d.map((function(a,t){return a.clientTableHideColumn?null:r.a.createElement("td",{style:{maxWidth:"".concat(a.width+80,"px"),minWidth:"".concat(a.width+80,"px")},key:t},r.a.createElement("span",null,function(e,a){return"stars"===e.name?r.a.createElement(We,{stars:a[e.name]}):"action"===e.name?r.a.createElement(we,null):"checkBox"===e.name?r.a.createElement(Ce.a,null):r.a.createElement("span",null,a[e.name])}(a,e)))}))))})):r.a.createElement("tr",{className:"noData"},"Wait..."))))};t(429);function Re(){var e=r.a.useState(!0),a=Object(o.a)(e,2);a[0],a[1];return r.a.createElement("div",null,r.a.createElement(Ce.a,{defaultChecked:!0,size:"small",indeterminate:!0,inputProps:{"aria-label":"indeterminate checkbox"}}),r.a.createElement(Ce.a,{defaultChecked:!0,size:"small",color:"default",inputProps:{"aria-label":"checkbox with default color"}}),r.a.createElement(Ce.a,{defaultChecked:!0,size:"small",inputProps:{"aria-label":"checkbox with small size"}}))}var Be=function(){var e=Object(n.useContext)(i.a).config,a=Object(n.useState)([]),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(pe.a)();return Object(n.useEffect)((function(){console.log("cards2  useEffect 32"),fetch("".concat(s,"/rows")).then((function(e){return e.json()})).then((function(e){return c(e.res)}))}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("main",{className:"cards"},l.slice(0,100).map((function(a,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"card"},r.a.createElement("div",{className:"card_header"},r.a.createElement("div",{className:"card-title"},r.a.createElement(Re,null))),r.a.createElement("div",{className:" card_content"},e.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"cardLine"},r.a.createElement("label",{className:"label"},e.name,":"),r.a.createElement("span",{className:"input",key:t},a[e.name])))}))),r.a.createElement("div",{className:"card_info"},r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons"},"thumb_up"),"310"),r.a.createElement("div",null,r.a.createElement("a",{href:"./",className:"card_link"},"more ...")))))})))))},Me=function(e){var a=e.app;return r.a.createElement(r.a.Fragment,null,"table"===e.screenType?r.a.createElement(ze,{app:a}):r.a.createElement(Be,{app:a}))},qe=(t(430),t(10)),_e=function(){return r.a.createElement(qe.n,null,r.a.createElement(qe.h,{md:"4"},r.a.createElement(qe.c,{wide:!0,cascade:!0},r.a.createElement(qe.p,{cascade:!0},r.a.createElement(qe.e,{hover:!0,overlay:"white-slight",className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg",alt:"Card cap"})),r.a.createElement(qe.d,{cascade:!0,className:"text-center"},r.a.createElement(qe.g,{className:"card-title"},r.a.createElement("strong",null,"Alice Mayer")),r.a.createElement("p",{className:"font-weight-bold blue-text"},"Photographer"),r.a.createElement(qe.f,null,"Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."," "),r.a.createElement(qe.h,{md:"12",className:"d-flex justify-content-center"},r.a.createElement("a",{href:"!#",className:"px-2 fa-lg li-ic"},r.a.createElement(qe.i,{fab:!0,icon:"linkedin-in"})),r.a.createElement("a",{href:"!#",className:"px-2 fa-lg tw-ic"},r.a.createElement(qe.i,{fab:!0,icon:"twitter"})),r.a.createElement("a",{href:"!#",className:"px-2 fa-lg fb-ic"},r.a.createElement(qe.i,{fab:!0,icon:"facebook-f"})))))),r.a.createElement(qe.h,{md:"4"},r.a.createElement(qe.c,{narrow:!0},r.a.createElement(qe.p,{cascade:!0},r.a.createElement(qe.e,{hover:!0,overlay:"white-slight",className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg",alt:"food"})),r.a.createElement(qe.d,null,r.a.createElement("h5",{className:"pink-text"},r.a.createElement(qe.i,{icon:"utensils"})," Culinary"),r.a.createElement(qe.g,{className:"font-weight-bold"},"Cheat day inspirations"),r.a.createElement(qe.f,null,"Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."),r.a.createElement(qe.b,{color:"unique"},"Button")))),r.a.createElement(qe.h,{md:"4"},r.a.createElement(qe.c,null,r.a.createElement(qe.e,{hover:!0,overlay:"white-light",className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Others/men.jpg",alt:"man"}),r.a.createElement(qe.d,{cascade:!0,className:"text-center"},r.a.createElement(qe.g,{className:"card-title"},r.a.createElement("strong",null,"Billy Coleman")),r.a.createElement("p",{className:"font-weight-bold blue-text"},"Wev developer"),r.a.createElement(qe.f,null,"Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."," "),r.a.createElement(qe.h,{md:"12",className:"d-flex justify-content-center"},r.a.createElement(qe.b,{rounded:!0,floating:!0,color:"fb"},r.a.createElement(qe.i,{size:"lg",fab:!0,icon:"facebook-f"})),r.a.createElement(qe.b,{rounded:!0,floating:!0,color:"tw"},r.a.createElement(qe.i,{size:"lg",fab:!0,icon:"twitter"})),r.a.createElement(qe.b,{rounded:!0,floating:!0,color:"dribbble"},r.a.createElement(qe.i,{size:"lg",fab:!0,icon:"dribbble"})))))))};var Le=function(){var e=window.location.pathname,a=window.localStorage.getItem("AppDirection");(null==a||"rtl"!==a&&"ltr"!==a)&&(a="ltr");var t=Object(n.useState)(a||"ltr"),l=Object(o.a)(t,2),c=l[0],s=l[1],p=Object(n.useState)("table"),E=Object(o.a)(p,2),b=E[0],h=E[1];return r.a.createElement("div",{className:c},r.a.createElement(u,null,r.a.createElement(d.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:_e}),r.a.createElement(f.a,{path:"/Templates",component:_e})),r.a.createElement(i.b,null,r.a.createElement(je,{setAppDirection:s,AppDirection:c,setScreenType:h,screenType:b}),r.a.createElement(f.a,{exact:!0,path:"/UploadFile",component:m}),r.a.createElement(f.a,{exact:!0,path:e},r.a.createElement(Me,{app:e,screenType:b})," ")))))};t(449);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Le,null)),document.getElementById("root"))},49:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(){return"http://yonaswr.com"}}},[[225,1,2]]]);
//# sourceMappingURL=main.07ced7aa.chunk.js.map