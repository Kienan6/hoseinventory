(this.webpackJsonphoseinventory=this.webpackJsonphoseinventory||[]).push([[0],{125:function(e,t,a){e.exports=a(177)},130:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=(a(130),a(108)),l=a(8),s=a(13),u=a(14),m=a(242),d=a(233),h=a(178),p=a(15),f=a.n(p),g=a(267),b=a(186),E=a(241),v=a(102),y=a.n(v),O=a(47),j=a.n(O),k=a(237);function C(e){return r.a.createElement(d.a,null,r.a.createElement(k.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,style:{minHeight:"100vh"}},r.a.createElement(j.a,{type:"RevolvingDot",color:"#3573c4",height:200,width:200})))}var x=a(238),w=a(179),S=a(180);function N(e){return r.a.createElement(h.a,{in:!0,timeout:1200},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement(k.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,style:{minHeight:"100vh"}},r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,null,r.a.createElement(S.a,{filled:!0,component:"h2"},"Enter the Hose Inventory Number"))),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{required:!0},r.a.createElement(x.a,{error:e.error,helperText:e.error?"Inventory number not found":"",required:!0,autoFocus:!0,name:"hoseID",onChange:e.onChange,type:"number",id:"hoseID",label:"Hose Inventory Number",variant:"filled"}))),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,null,r.a.createElement(E.a,{variant:"contained",type:"submit",color:"primary"},"Submit")))))))}var I=a(5),H=a(246),P=a(265),D=a(185),L=a(184),z=a(266),K=a(244),G=a(245),T=a(109),q=a(100),A=a.n(q),B=a(261),W=[{label:'2"',value:2},{label:'2 1/2"',value:2.5},{label:'3"',value:3},{label:'3 1/2"',value:3.5},{label:'4"',value:4}],R=["151","152","153","154","155"],M=["C","E","TR","LT"],F=function(){var e=[];return M.forEach((function(t){R.forEach((function(a){var n=t+""+a;e.push({unit:n,department:a})}))})),e},$=Object(m.a)((function(e){return{form:{padding:20,flexGrow:1},field:{width:300},vertical:{display:"flex",width:600,height:600,flexDirection:"column"},marginZero:{justifyContent:"flex-end",margin:0},formHelper:{fontSize:"1em"},bg:{backgroundColor:"#e8e8e8"},expansionPanel:{transition:e.transitions.create(["border"],{duration:100}),marginTop:0,border:"1px #d0d0d0 outset"},expansionSelected:{border:"#3f51b5 3px solid"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},close:{padding:e.spacing(.5)}}})),U=Object(I.a)((function(e){return{root:{width:100},switchBase:{color:"#fc4e4e","&$checked":{color:"#85cf80",transform:"translateX(160%)"},"&$checked + $track":{backgroundColor:"#206b1b"}},checked:{},track:{}}}))(P.a);function Z(e){var t=$(),a=t.expansionPanel+" "+(e.expanded?t.expansionSelected:"");return r.a.createElement("div",null,r.a.createElement(L.a,null,r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement(k.a,{container:!0,direction:"column",justify:"space-evenly",alignContent:"center"},r.a.createElement(k.a,{container:!0,direction:"column",justify:"center",alignContent:"center",spacing:2,className:t.form},r.a.createElement(k.a,{item:!0},r.a.createElement(S.a,{component:"h1"},"Hose Evaluation")),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{className:t.field},r.a.createElement(x.a,{required:!0,id:"date",name:"dateTested",label:"Date Checked",type:"date",onChange:e.onChange("test"),InputLabelProps:{shrink:!0}}))),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{className:t.field},r.a.createElement(D.a,{className:t.formHelper,id:"changed-location-help"},"Has the Hose moved locations?"),r.a.createElement(z.a,{onChange:e.onExpand,className:a,elevation:0},r.a.createElement(K.a,{expandIcon:r.a.createElement(A.a,null)},r.a.createElement(T.a,{className:t.heading},"Current Location:",r.a.createElement("strong",null," ",e.hose.current.unit))),r.a.createElement(G.a,{fullWidth:!0},r.a.createElement(B.a,{id:"hose-new",style:{width:"100%"},options:F().sort((function(e,t){return e.department<t.department})),groupBy:function(e){return e.department},getOptionLabel:function(e){return e.unit},onChange:e.onAuto("new"),value:e.hose.new,renderInput:function(e){return r.a.createElement(x.a,Object.assign({},e,{variant:"outlined",required:!0,label:"New Location",InputLabelProps:{shrink:!0},fullWidth:!0}))}}))))),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,null,r.a.createElement(D.a,{className:t.formHelper,id:"my-helper-text"},"Does the Hose pass inspection?"),r.a.createElement(H.a,{control:r.a.createElement(U,{type:"checkbox",onChange:e.onChange("hoseOK"),checked:e.hose.hoseOK,name:"hosepass","aria-describedby":"my-helper-text"}),label:e.hose.hoseOK?"Pass":"Fail",labelPlacement:"start",className:t.marginZero}))),e.hose.hoseOK?"":r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,null,r.a.createElement(D.a,null,"Describe the Issue"),r.a.createElement(x.a,{onChange:e.onChange("descHose"),variant:"outlined",value:e.hose.descHose}))),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,null,r.a.createElement(D.a,{className:t.formHelper,id:"my-helper-text-2"},"Does the Gasket/Seal pass inspection?"),r.a.createElement(H.a,{control:r.a.createElement(U,{type:"checkbox",onChange:e.onChange("gasketOK"),checked:e.hose.gasketOK,name:"gasketpass","aria-describedby":"my-helper-text-2"}),label:e.hose.gasketOK?"Pass":"Fail",labelPlacement:"start",className:t.marginZero})),e.hose.gasketOK?"":r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,null,r.a.createElement(D.a,null,"Describe the Issue"),r.a.createElement(x.a,{onChange:e.onChange("descGasket"),variant:"outlined",value:e.hose.descGasket})))),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{className:t.field},r.a.createElement(E.a,{variant:"contained",type:"submit",color:"primary"},"Submit"))))))))}var X=a(247),J=a(248),Y=a(249),Q=Object(m.a)((function(e){return{card:{minWidth:225},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function V(e){var t=Q();return r.a.createElement("div",null,r.a.createElement(X.a,{className:t.card},r.a.createElement(J.a,null,r.a.createElement(T.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Hose Information"),r.a.createElement(T.a,{variant:"h6",color:"textPrimary",component:"h2"},"Inventory #: ",e.info.inventoryNum),r.a.createElement(T.a,{variant:"h6",component:"h2"},"Previous Location: ",e.info.previous.unit),r.a.createElement(T.a,{variant:"h6",color:"textPrimary",component:"h2"},"Previous Test"),r.a.createElement(T.a,{variant:"h6",color:"textSecondary",component:"h2"},"Date: ",e.info.test),r.a.createElement(Y.a,null),r.a.createElement(T.a,{variant:"h6",color:"textPrimary",component:"h2"},r.a.createElement(k.a,{container:!0,direction:"row",justify:"center",spacing:2},r.a.createElement(k.a,{item:!0},"Hose ",e.info.hoseOK?r.a.createElement("div",{style:{color:"green"}},"   Pass"):r.a.createElement("div",{style:{color:"red"}},"  Fail")),r.a.createElement(k.a,{item:!0},"Gasket ",e.info.gasketOK?r.a.createElement("div",{style:{color:"green"}},"   Pass"):r.a.createElement("div",{style:{color:"red"}},"  Fail")))),r.a.createElement(Y.a,null),r.a.createElement(T.a,{variant:"h6",color:"textSecondary",component:"h2"},"Hose #: ",e.info.number),r.a.createElement(T.a,{variant:"h6",color:"textSecondary",component:"h2"},"Size: ",W.filter((function(t){return t.value==e.info.size}))[0].label),r.a.createElement(T.a,{variant:"h6",color:"textSecondary",component:"h2"},"Length: ",e.info.length),r.a.createElement(T.a,{variant:"h6",color:"textSecondary",component:"h2"},"Year Manufactured: ",e.info.mfgDate),r.a.createElement(T.a,{variant:"h6",color:"textSecondary",component:"h2"},"Manufactured By: ",e.info.manufacturer))))}function _(e){return r.a.createElement(k.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:2},r.a.createElement(k.a,{item:!0},r.a.createElement(Z,{hose:e.hose,onAuto:e.onAuto,onSubmit:e.onSubmit,onChange:e.onChange,onExpand:e.onExpand,expanded:e.expanded})),r.a.createElement(k.a,{item:!0},r.a.createElement(V,{info:e.info})))}var ee="http://api.kienanobrien.com:9000/",te=Object(m.a)((function(e){return{close:{padding:e.spacing(.5)},error:{backgroundColor:e.palette.error.dark},success:{backgroundColor:"green"}}}));function ae(e){var t=te(),a=Object(n.useState)({inventoryNum:0,number:0,size:2.5,length:0,previous:{unit:"",department:""},current:{unit:"",department:""},new:{unit:"",department:""},test:0,hoseOK:!1,gasketOK:!1,descHose:"",descGasket:"",manufacturer:"",mfgDate:2e3}),o=Object(l.a)(a,2),c=o[0],i=o[1],m=Object(n.useState)({inventoryNum:0,number:0,size:2.5,length:0,previous:{unit:"",department:""},test:0,hoseOK:!1,gasketOK:!1,descHose:"",descGasket:"",manufacturer:"",mfgDate:2e3}),p=Object(l.a)(m,2),v=p[0],O=p[1],j=Object(n.useState)(!1),k=Object(l.a)(j,2),x=k[0],w=k[1],S=Object(n.useState)(!1),I=Object(l.a)(S,2),H=I[0],P=I[1],D=Object(n.useState)(!1),L=Object(l.a)(D,2),z=L[0],K=L[1],G=Object(n.useState)(!1),T=Object(l.a)(G,2),q=T[0],A=T[1],B=Object(n.useState)(-1),W=Object(l.a)(B,2),R=W[0],M=W[1],F=Object(n.useState)(!1),$=Object(l.a)(F,2),U=$[0],Z=$[1];Object(n.useEffect)((function(){x&&setTimeout((function(){w(!1)}),3e3)}),[x]);var X=function(e,t){"clickaway"!==t&&A(!1)};return x?r.a.createElement(C,null):H?r.a.createElement(h.a,{in:!0,timeout:500},r.a.createElement(d.a,null,r.a.createElement(_,{onChange:function(e){return function(t){"checkbox"===t.target.type?i(Object(u.a)({},c,Object(s.a)({},e,t.target.checked))):i(Object(u.a)({},c,Object(s.a)({},e,t.target.value)))}},onSubmit:function(e){e.preventDefault();var t={inventoryNum:parseInt(c.inventoryNum),newInvNum:parseInt(c.inventoryNum),hoseNum:parseInt(c.number),hosePass:c.hoseOK,gasketPass:c.gasketOK,hoseSize:c.size,hoseLength:parseInt(c.length),hoseMfgDate:parseInt(c.mfgDate),prevLocation:c.current,newLocation:U?c.new:c.current,dateTested:c.test,manufacturer:c.manufacturer,descHose:c.descHose,descGasket:c.descGasket};f.a.post(ee+"updateHose",{h:t}).then((function(e){e.data.failure||A(!0)}))},onAuto:function(e){return function(t,a){i(Object(u.a)({},c,Object(s.a)({},e,a)))}},onExpand:function(e,t){Z(t)},hose:c,info:v,expanded:U}),r.a.createElement(g.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:q,autoHideDuration:4e3,onClose:X,ContentProps:{className:t.success,"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Updated need to change"),action:[r.a.createElement(E.a,{variant:"contained",key:"newHose",color:"default",size:"medium",onClick:""},"New Hose"),r.a.createElement(b.a,{key:"close","aria-label":"close",color:"inherit",className:t.close,onClick:X},r.a.createElement(y.a,null))]}))):r.a.createElement(N,{onSubmit:function(e){e.preventDefault();var t={inventoryNum:parseInt(R)};f.a.post(ee+"getHose",{h:t}).then((function(e){if(e.data.failure)K(!0);else{w(!0);var t=e.data;O({inventoryNum:t.inventoryNum,number:t.hoseNum,size:t.size,length:t.length,previous:t.prevLoc,test:t.dateTest,hoseOK:t.passHose,gasketOK:t.passGasket,descHose:t.descHose,descGasket:t.descGasket,manufacturer:t.manufacturer,mfgDate:t.yearMfg}),i(Object(u.a)({},c,{inventoryNum:t.inventoryNum,number:t.hoseNum,size:t.size,length:t.length,previous:t.prevLoc,current:t.curLoc,new:t.curLoc,manufacturer:t.manufacturer,mfgDate:t.yearMfg})),P(!0)}}))},onChange:function(e){M(e.target.value)},error:z})}var ne=a(251);function re(e){return r.a.createElement(L.a,{style:{padding:10}},r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement(T.a,{variant:"h6",align:"center",color:"textSecondary",style:{paddingBottom:10}},"Login"),r.a.createElement(k.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch",spacing:2},r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{required:!0},r.a.createElement(x.a,{required:!0,error:e.error.error,label:"Username",variant:"outlined",onChange:e.onChange("username"),value:e.user.username}))),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{required:!0},r.a.createElement(x.a,{required:!0,error:e.error.error,label:"Password",type:"password",variant:"outlined",onChange:e.onChange("password"),value:e.user.password}),e.error.error?r.a.createElement(D.a,{error:!0},"Username or Password was Incorrect"):"")),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{fullWidth:!0},r.a.createElement((function(e){return r.a.createElement(E.a,{style:{color:"white",background:"#63d691",width:"100%"},type:"submit"},e.children)}),null,"Submit"))),r.a.createElement(k.a,{item:!0},r.a.createElement(ne.a,{href:"#",color:"textSecondary",onClick:e.onClick(!1)},"Create Account")))))}function oe(e){return r.a.createElement(L.a,{style:{padding:10}},r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement(T.a,{variant:"h6",align:"center",color:"textSecondary",style:{paddingBottom:10}},"Create Account"),r.a.createElement(k.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch",spacing:2},r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{required:!0},r.a.createElement(x.a,{required:!0,error:e.error.error,label:"Username",variant:"outlined",onChange:e.onChange("username"),value:e.user.username}))),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{required:!0},r.a.createElement(x.a,{required:!0,error:e.error.error,label:"Password",type:"password",variant:"outlined",onChange:e.onChange("password"),value:e.user.password}))),r.a.createElement(k.a,{item:!0},r.a.createElement(w.a,{fullWidth:!0},r.a.createElement((function(e){return r.a.createElement(E.a,{style:{color:"white",background:"#63d691",width:"100%"},type:"submit"},e.children)}),null,"Submit"))),r.a.createElement(k.a,{item:!0},r.a.createElement(ne.a,{color:"textSecondary",href:"#",onClick:e.onClick(!0)},"Go Back")))))}var ce=a(34);function ie(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),m=Object(l.a)(i,2),d=m[0],h=m[1],p=Object(n.useState)({error:!1,message:""}),g=Object(l.a)(p,2),b=g[0],E=g[1],v=Object(n.useState)({username:"",password:""}),y=Object(l.a)(v,2),O=y[0],j=y[1],C=function(e){return function(t){c(e)}},x=function(e){return function(t){j(Object(u.a)({},O,Object(s.a)({},e,t.target.value)))}};return d?r.a.createElement(ce.a,{to:"/inventory"}):r.a.createElement(k.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{minHeight:"100vh"}},o?r.a.createElement(re,{error:b,onClick:C,onSubmit:function(t){t.preventDefault(),e.auth.login(O,(function(t){t.failure?E({error:t.failure,message:t.message}):e.auth.authenticate((function(){h(!0),e.onSuccess()}))}))},onChange:x,user:O}):r.a.createElement(oe,{error:b,onClick:C,onSubmit:function(t){t.preventDefault(),f.a.defaults.withCredentials=!0,f.a.post(ee+"user/create",{user:O}).then((function(t){t.failure?E({error:t.failure,message:t.message}):e.auth.login(O,(function(t){t.failure?E({error:!0,message:"Could not log in."}):e.auth.authenticate((function(){h(!0),e.onSuccess()}))}))}))},onChange:x,user:O}))}var le=a(58),se=a.n(le),ue=a(80),me=(a(99),a(260)),de=a(81),he=(a(173),Object(m.a)((function(e){return{container:{maxWidth:225},headingGreater:{color:"#ffffff",backgroundColor:"#66d17f",width:"100%",padding:10},headingLess:{color:"#ffffff",backgroundColor:"#de5454",width:"100%",padding:10},information:{padding:10}}})));function pe(e){var t=he(),a=Object(n.useState)(0),o=Object(l.a)(a,2);o[0],o[1];return r.a.createElement(me.a,{style:{padding:10}},r.a.createElement(L.a,{className:t.container},r.a.createElement(k.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"flex-start"},r.a.createElement(k.a,{item:!0,className:e.percentage>=50?t.headingGreater:t.headingLess},r.a.createElement(k.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",style:{width:"100%"}},r.a.createElement(k.a,{item:!0},r.a.createElement(T.a,{variant:"subtitle1",style:{opacity:.75}},e.loading?"Loading...":e.for),r.a.createElement(T.a,{align:"center",variant:"h5"},r.a.createElement("strong",null,e.percentage),"%")),r.a.createElement(k.a,{item:!0,style:{width:"25%",marginRight:"10%"}},r.a.createElement(de.a,{strokeWidth:14,styles:Object(de.b)({strokeLinecap:"butt",pathTransitionDuration:1,pathColor:"#5095b5",textColor:"#f88",trailColor:"#e3f0ff"}),value:e.percentage})))))))}var fe=a(262),ge=a(252),be=a(183),Ee=a(188),ve=a(268),ye=Object(m.a)((function(e){return{root:{width:"80%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},column:{flex:"1"},layout:{"& div":{marginTop:5}},modal:{display:"flex",alignItems:"center",justifyContent:"center"}}})),Oe=Object(I.a)((function(e){var t;return{root:(t={padding:"0 30px",flexGrow:"100%",borderRadius:3,boxShadow:"0px 2px 3px rgba(0,0,0,.20)",backgroundColor:"rgb(102, 209, 127)",color:"rgb(43, 170, 102)"},Object(s.a)(t,"color","white"),Object(s.a)(t,"height",40),Object(s.a)(t,"&:hover",{backgroundColor:"rgb(43, 170, 102)"}),t)}}))(E.a),je=Object(I.a)((function(e){return{root:{width:100},switchBase:{color:"#fc4e4e","&$checked":{color:"#85cf80",transform:"translateX(160%)"},"&$checked + $track":{backgroundColor:"#206b1b"}},checked:{},track:{}}}))(P.a);function ke(e){var t=ye(),a=Object(n.useState)(!1),o=Object(l.a)(a,2);o[0],o[1];return r.a.createElement(L.a,{elevation:0,borderRadius:20},r.a.createElement(fe.a,{open:e.submitted,className:t.modal,BackdropComponent:"div"},r.a.createElement(k.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(k.a,{item:!0},r.a.createElement(j.a,{type:"Oval",color:"#227ca8",height:75,width:75})))),r.a.createElement(ge.a,null,r.a.createElement(T.a,{variant:"h6"},e.label)),r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement(k.a,{container:!0,direction:"row",className:t.layout,alignItems:"flex-start",justify:"space-around"},r.a.createElement(k.a,{container:!0,item:!0,direction:"column",justify:"center",style:{margin:10},xs:!0},r.a.createElement(w.a,{required:!0},r.a.createElement(x.a,{label:"Hose Number",required:!0,variant:"outlined",value:0==e.hose.number?"":e.hose.number,InputLabelProps:{shrink:!0},inputProps:{pattern:"^[0-9]*$"},onChange:e.onChange("number"),id:"inventory-number"})),r.a.createElement(w.a,{required:!0},r.a.createElement(x.a,{label:"Length",required:!0,variant:"outlined",value:0==e.hose.length?"":e.hose.length,onChange:e.onChange("length"),InputLabelProps:{shrink:!0},inputProps:{pattern:"^[0-9]*$"},id:"hose-length"})),r.a.createElement(w.a,{required:!0},r.a.createElement(B.a,{id:"hose-current",options:F().sort((function(e,t){return e.department<t.department})),groupBy:function(e){return e.department},getOptionLabel:function(e){return e.unit},onChange:e.onAuto("current"),value:e.hose.current,renderInput:function(e){return r.a.createElement(x.a,Object.assign({},e,{variant:"outlined",required:!0,label:"Current Location",InputLabelProps:{shrink:!0},fullWidth:!0}))}})),r.a.createElement(w.a,{required:!0},r.a.createElement(x.a,{id:"date-tested",required:!0,variant:"outlined",label:"Date Tested",type:"date",value:0==e.hose.date?"":e.hose.test,onChange:e.onChange("test"),InputLabelProps:{shrink:!0}})),r.a.createElement(w.a,null,r.a.createElement(x.a,{id:"manufacturer",required:!0,variant:"outlined",label:"Manufacturer",value:e.hose.manufacturer,onChange:e.onChange("manufacturer"),InputLabelProps:{shrink:!0}}))),r.a.createElement(k.a,{container:!0,item:!0,direction:"column",justify:"center",style:{margin:10},xs:!0},r.a.createElement(w.a,{required:!0},r.a.createElement(x.a,{label:"Inventory Number",required:!0,variant:"outlined",value:0==e.hose.inventoryNum?"":e.hose.inventoryNum,onChange:e.onChange("inventoryNum"),InputLabelProps:{shrink:!0},inputProps:{pattern:"^[0-9]*$"},id:"hose-number"})),r.a.createElement(w.a,{style:{marginTop:9,marginBottom:-4},variant:"outlined",required:!0},r.a.createElement(be.a,{htmlFor:"hose-size"},"Size"),r.a.createElement(Ee.a,{labelId:"hose-size",labelWidth:30,id:"hose-size",value:e.hose.size,InputLabelProps:{shrink:!0},onChange:e.onChange("size")},W.map((function(e){return r.a.createElement(ve.a,{value:e.value},e.label)})))),r.a.createElement(w.a,{required:!0},r.a.createElement(B.a,{id:"hose-previous",fullWidth:!0,options:F().sort((function(e,t){return e.department<t.department})),groupBy:function(e){return e.department},getOptionLabel:function(e){return e.unit},onChange:e.onAuto("previous"),value:e.hose.previous,renderInput:function(e){return r.a.createElement(x.a,Object.assign({},e,{variant:"outlined",required:!0,label:"Prev. Location",InputLabelProps:{shrink:!0},fullWidth:!0}))}})),r.a.createElement(w.a,null,r.a.createElement(x.a,{id:"manufactured-date",required:!0,variant:"outlined",label:"Date Manufactured",value:e.hose.mfgDate,onChange:e.onChange("mfgDate"),InputLabelProps:{shrink:!0}})))),r.a.createElement(k.a,{container:!0,direction:"row",justify:"space-betwen",spacing:2,style:{padding:10}},r.a.createElement(k.a,{container:!0,item:!0,direction:"column",justify:"flex-start",xs:!0},r.a.createElement(w.a,null,r.a.createElement(D.a,{id:"my-helper-text-1"},"Does the Hose Pass Inspection?"),r.a.createElement(H.a,{control:r.a.createElement(je,{type:"checkbox",onChange:e.onChange("hoseOK"),checked:e.hose.hoseOK,name:"hosepass","aria-describedby":"my-helper-text-1"}),label:e.hose.hoseOK?"Pass":"Fail",labelPlacement:"start",className:t.marginZero})),e.hose.hoseOK?"":r.a.createElement(w.a,null,r.a.createElement(x.a,{id:"hose-description",label:"Describe Issues",multiline:!0,value:e.hose.descHose,variant:"outlined",InputLabelProps:{shrink:!0},onChange:e.onChange("descHose")}))),r.a.createElement(k.a,{container:!0,item:!0,direction:"column",justify:"flex-start",xs:!0},r.a.createElement(w.a,null,r.a.createElement(D.a,{id:"my-helper-text-2"},"Does the Gasket Pass Inspection?"),r.a.createElement(H.a,{control:r.a.createElement(je,{type:"checkbox",onChange:e.onChange("gasketOK"),checked:e.hose.gasketOK,name:"gasketpass","aria-describedby":"my-helper-text-2"}),label:e.hose.gasketOK?"Pass":"Fail",labelPlacement:"start",className:t.marginZero})),e.hose.gasketOK?"":r.a.createElement(w.a,null,r.a.createElement(x.a,{id:"gasket-description",label:"Describe Issues",multiline:!0,value:e.hose.descGasket,variant:"outlined",InputLabelProps:{shrink:!0},onChange:e.onChange("descGasket")})))),r.a.createElement(w.a,{fullWidth:!0},r.a.createElement("div",{style:{padding:10}},r.a.createElement(Oe,{type:"submit",fullWidth:!0},"Submit")))))}var Ce=a(254),xe=a(258),we=a(257),Se=a(253),Ne=a(255),Ie=a(256),He=a(264),Pe=a(104),De=a.n(Pe),Le=a(105),ze=a.n(Le),Ke=Object(m.a)((function(e){return{toolbar:{backgroundColor:"#fafafa",minHeight:100},heading:{marginLeft:0}}})),Ge=Object(I.a)((function(e){var t;return{root:(t={padding:"0 30px",flexGrow:"100%",marginTop:10,borderRadius:3,boxShadow:"0px 2px 3px rgba(0,0,0,.20)",backgroundColor:"rgb(102, 209, 127)",color:"rgb(43, 170, 102)"},Object(s.a)(t,"color","white"),Object(s.a)(t,"height",40),Object(s.a)(t,"&:hover",{backgroundColor:"rgb(43, 170, 102)"}),t)}}))(E.a);function Te(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(10),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Ke();return e.loading?r.a.createElement(k.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(k.a,{item:!0},r.a.createElement(j.a,{type:"ThreeDots",color:"#7cd996",height:150,width:150}))):r.a.createElement(h.a,{in:!0,timeout:1200},r.a.createElement(L.a,{className:d.toolbar},r.a.createElement(ge.a,{className:d.toolbar},r.a.createElement(k.a,{container:!0,direction:"column",justify:"space-between"},r.a.createElement(k.a,{item:!0},r.a.createElement(T.a,{className:d.heading,variant:"h6",id:"table-title"},"Hoses")),r.a.createElement(k.a,{item:!0},r.a.createElement(Ge,{onClick:e.onAdd}," Add New ")))),r.a.createElement(Se.a,{elevation:0,style:{marginTop:10,maxHeight:650},component:L.a},r.a.createElement(Ce.a,{stickyHeader:!0,"aria-label":"simple table"},r.a.createElement(Ne.a,null,r.a.createElement(Ie.a,null,r.a.createElement(we.a,{align:"left"},"Actions"),r.a.createElement(we.a,{align:"left"},"Inventory #"),r.a.createElement(we.a,{align:"left"},"Size"),r.a.createElement(we.a,{align:"left"},"Length"),r.a.createElement(we.a,{align:"left"},"Location"),r.a.createElement(we.a,{align:"left"},"Date Tested"))),r.a.createElement(xe.a,null,e.data.slice(o*u,o*u+u).map((function(t,a){return r.a.createElement(Ie.a,{hover:!0,key:a},r.a.createElement(we.a,{padding:"none",style:{width:100}},r.a.createElement(b.a,{"aria-label":"edit",color:"primary",onClick:function(t){return e.onEdit(t,a+u*o)}},r.a.createElement(De.a,{fontSize:"small"})),r.a.createElement(b.a,{"aria-label":"delete",style:{color:"#c24f4f"},onClick:function(t){return e.onDelete(t,a+u*o)}},r.a.createElement(ze.a,{fontSize:"small"}))),r.a.createElement(we.a,{component:"th",scope:"row"},t.inventoryNum),r.a.createElement(we.a,{align:"left"},W.filter((function(e){return e.value==t.size}))[0].label),r.a.createElement(we.a,{align:"left"},t.length),r.a.createElement(we.a,{align:"left"},t.curLoc.unit),r.a.createElement(we.a,{align:"left"},t.dateTest))}))))),r.a.createElement(He.a,{rowsPerPageOptions:[10,20,30],component:"div",count:e.data.length,rowsPerPage:u,page:o,onChangePage:function(e,t){c(t)},onChangeRowsPerPage:function(e){m(e.target.value),c(0)}})))}var qe=a(106),Ae=a.n(qe),Be=function(e){return Ae()().diff(e,"days")<365},We=function(e,t){var a=e.filter((function(e){return e.size==t}));if(0==a.length)return 100;var n=0,r=a.length;return a.forEach((function(e){Be(e.dateTest)&&n++})),Math.ceil(n/r*100)},Re=a(259),Me=Object(m.a)((function(e){return{open:{overflowX:"hidden"},modal:{display:"flex",alignItems:"center",justifyContent:"center"}}}));function Fe(e){var t=Me();return r.a.createElement(fe.a,{open:e.open,className:t.modal,onClose:e.onBackdropClick,BackdropComponent:Re.a,BackdropProps:{transitionDuration:500}},r.a.createElement("div",{style:{padding:10,maxWidth:500}},e.children))}var $e=a(263),Ue=Object(I.a)((function(e){var t;return{root:(t={padding:"0 5px",borderRadius:2,margin:5,backgroundColor:"rgb(135, 201, 170)",color:"rgb(43, 170, 102)"},Object(s.a)(t,"color","white"),Object(s.a)(t,"height",40),Object(s.a)(t,"&:hover",{backgroundColor:"rgb(43, 170, 102)"}),t)}}))(E.a),Ze=Object(m.a)((function(e){return{paper:{padding:25,zIndex:10}}}));function Xe(e){var t=Object(n.useState)({inventoryNum:0,number:0,size:2.5,length:0,previous:{unit:"",department:""},current:{unit:"",department:""},test:0,hoseOK:!1,gasketOK:!1,descHose:"",descGasket:"",manufacturer:"",mfgDate:2e3}),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!0),m=Object(l.a)(i,2),h=m[0],p=m[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),v=E[0],y=E[1],O=Object(n.useState)(!1),j=Object(l.a)(O,2),C=j[0],x=j[1],w=Object(n.useState)([]),S=Object(l.a)(w,2),N=S[0],I=S[1],H=Object(n.useState)([]),P=Object(l.a)(H,2),D=P[0],z=P[1],K=Object(n.useState)(-1),G=Object(l.a)(K,2),q=G[0],A=G[1],B=Object(n.useState)({open:!1,prompt:!1,edit:!1,delete:!1}),R=Object(l.a)(B,2),M=R[0],F=R[1],$=Object(n.useState)({open:!1,error:!1,message:""}),U=Object(l.a)($,2),Z=U[0],X=U[1],J=Ze();Object(n.useEffect)((function(){function e(){return(e=Object(ue.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(ee+"getAllHoses").then((function(e){if(e.data.failure){t=[];W.forEach((function(e){t.push({size:e.label,percentage:100})})),z(t)}else{I(e.data);var t=[];W.forEach((function(a){t.push({size:a.label,percentage:We(e.data,a.value)})})),z(t)}}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}();var t=0;setTimeout((function(){null!=N?p(!1):t+=100}),1500+t)}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(ue.a)(se.a.mark((function e(){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={inventoryNum:parseInt(o.inventoryNum)},e.next=3,f.a.post(ee+"getHose",{h:t}).then((function(e){if(!e.data.failure){var t=N,a=N.findIndex((function(e){return e.inventoryNum==o.inventoryNum||e.inventoryNum==q}));if(-1!=a)(t=N).splice(a,1,e.data),I(t),A(-1);else(t=N).push(e.data),I(t)}var n=[];W.forEach((function(e){n.push({size:e.label,percentage:We(N,e.value)})})),z(n)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}C&&function(){e.apply(this,arguments)}()}),[C]);var Y=function(e){return function(t){e?(y(!1),x(!1),F(Object(u.a)({},M,{open:!1,prompt:!1}))):F(Object(u.a)({},M,{prompt:!1}))}},Q=function(e){return function(t){if(e){var a={inventoryNum:parseInt(o.inventoryNum)};f.a.post(ee+"deleteHose",{h:a}).then((function(e){if(e.data.failure);else{if(N.length>1){var t=N;t.splice(t.findIndex((function(e){return e.inventoryNum==o.inventoryNum})),1),I(t);var a=[];W.forEach((function(e){a.push({size:e.label,percentage:We(N,e.value)})})),z(a)}else I([]);X({open:!0,error:!1,message:"Hose Deleted!"})}}))}F(Object(u.a)({},M,{prompt:!1,delete:!1}))}},V=function(e){return function(t){C&&x(!1),"checkbox"===t.target.type?c(Object(u.a)({},o,Object(s.a)({},e,t.target.checked))):c(Object(u.a)({},o,Object(s.a)({},e,t.target.value))),"test"==e&&Be(t.target.value)}},_=function(e){return function(t,a){C&&x(!1),c(Object(u.a)({},o,Object(s.a)({},e,a)))}},te=function(e){return r.a.createElement(L.a,{elevation:0,className:J.paper},r.a.createElement(k.a,{container:!0,direction:"column",justify:"center"},r.a.createElement(k.a,{item:!0,container:!0,justify:"center"},r.a.createElement(T.a,{variant:"h6"},e.label)),r.a.createElement(k.a,{container:!0,item:!0,direction:"row",justify:"center",alignContent:"space-between"},r.a.createElement(Ue,{onClick:e.onCancel,style:{backgroundColor:"rgb(194, 103, 103)"}},"No"),r.a.createElement(Ue,{onClick:e.onAccept},"Yes"))))},ae=function(e,t){"clickaway"!==t&&X({open:!1,error:!1,message:""})};return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(k.a,{container:!0,direction:"column",spacing:1},r.a.createElement(k.a,{item:!0},r.a.createElement(k.a,{container:!0,direction:"row",justify:"center","align-items":"flex-start"},D.map((function(e){return r.a.createElement(k.a,{item:!0},r.a.createElement(pe,{loading:h,for:e.size+" Hose",percentage:h?0:e.percentage}))})))),r.a.createElement(k.a,{item:!0},r.a.createElement(Te,{data:N,loading:h,onAdd:function(e){c({inventoryNum:0,number:0,size:2.5,length:0,previous:{unit:"",department:""},current:{unit:"",department:""},test:0,hoseOK:!1,gasketOK:!1,descHose:"",descGasket:"",manufacturer:"",mfgDate:2e3}),F(Object(u.a)({},M,{edit:!1,open:!0}))},onEdit:function(e,t){var a=N[t];c({inventoryNum:a.inventoryNum,number:a.hoseNum,size:a.size,length:a.length,previous:a.prevLoc,current:a.curLoc,test:a.dateTest,hoseOK:a.passHose,gasketOK:a.passGasket,descHose:a.descHose,descGasket:a.descGasket,manufacturer:a.manufacturer,mfgDate:a.yearMfg}),A(a.inventoryNum),F(Object(u.a)({},M,{edit:!0,open:!0}))},onDelete:function(e,t){e.preventDefault(),c(Object(u.a)({},o,{inventoryNum:N[t].inventoryNum})),F(Object(u.a)({},M,{prompt:!0,delete:!0}))}})))),r.a.createElement((function(e){return r.a.createElement(g.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:Z.open,autoHideDuration:3e3,onClose:ae},r.a.createElement($e.a,{severity:Z.error?"error":"success"},Z.message))}),null),r.a.createElement(Fe,{open:M.open,onBackdropClick:function(e){C?(y(!1),x(!1),F(Object(u.a)({},M,{open:!1,prompt:!1}))):F(Object(u.a)({},M,{prompt:!0}))}},M.edit?r.a.createElement(ke,{edit:!0,onChange:V,onAuto:_,onSubmit:function(e){e.preventDefault();var t={inventoryNum:parseInt(q),newInvNum:parseInt(o.inventoryNum),hoseNum:parseInt(o.number),hosePass:o.hoseOK,gasketPass:o.gasketOK,hoseSize:o.size,hoseLength:parseInt(o.length),hoseMfgDate:parseInt(o.mfgDate),prevLocation:o.previous,newLocation:o.current,dateTested:o.test,manufacturer:o.manufacturer,descHose:o.descHose,descGasket:o.descGasket};f.a.post(ee+"updateHose",{h:t}).then((function(e){y(!0),e.data.failure?y(!1):(x(!0),setTimeout((function(){y(!1),X({open:!0,error:!1,message:"Hose Updated!"})}),2e3))}))},submitted:v,hose:o,label:"Edit Hose"}):r.a.createElement(ke,{onChange:V,onAuto:_,onSubmit:function(e){e.preventDefault();var t={inventoryNum:parseInt(o.inventoryNum),hoseNum:parseInt(o.number),hosePass:o.hoseOK,gasketPass:o.gasketOK,hoseSize:o.size,hoseLength:parseInt(o.length),hoseMfgDate:parseInt(o.mfgDate),prevLocation:o.previous,newLocation:o.current,dateTested:o.test,manufacturer:o.manufacturer,descHose:o.descHose,descGasket:o.descGasket};f.a.post(ee+"insert",{h:t}).then((function(e){y(!0),e.data.failure?(X({open:!0,error:!0,message:e.data.message}),y(!1)):(x(!0),setTimeout((function(){y(!1),X({open:!0,error:!1,message:"Hose Added!"})}),2e3))}))},submitted:v,hose:o,label:"Add New Hose"})),M.prompt?r.a.createElement(Fe,{open:M.prompt},M.delete?r.a.createElement(te,{label:"Delete Hose ".concat(o.inventoryNum,"?"),onAccept:Q(!0),onCancel:Q(!1)}):r.a.createElement(te,{label:"Cancel?",onAccept:Y(!0),onCancel:Y(!1)})):"")}a(175),a(176);var Je={admin:!1,authenticated:!1,authenticate:function(e){var t=this;f.a.defaults.withCredentials=!0,f.a.post(ee+"user/auth").then((function(a){var n=a.data,r=n.loggedIn,o=n.admin;t.admin=o,t.authenticated=r,e()}))},login:function(e,t){f.a.defaults.withCredentials=!0,f.a.post(ee+"user/login",{user:e}).then((function(e){t(e.data)}))},logout:function(){this.admin=!1,this.authenticated=!1}},Ye=a(62),Qe=a(107),Ve=a.n(Qe),_e=a(250),et=a(243),tt=Object(m.a)((function(e){return{body:{width:"150px",marginTop:10},menu:{transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short}),opacity:.7,marginBottom:5,"&:hover":{opacity:1}},menuOpen:{transform:"rotate(-180deg)"},menuClosed:{transform:"rotate(0)"},menuBody:{width:"150px",top:35,position:"absolute"},menuItem:{background:"#e6e6e6",color:"#3d515c",userSelect:"none",minHeight:30,boxSizing:"border-box",borderRight:"4px solid rgba(0,0,0,0.8)",padding:10,fontSize:20,fontWeight:500,textAlign:"center",transition:e.transitions.create(["background"],{duration:e.transitions.duration.shorter}),"&:hover":{backgroundColor:"#cccccc"}}}}));function at(e){var t=tt(),a=Object(n.useState)(!1),o=Object(l.a)(a,2),c=o[0],i=o[1],s=Object(n.useState)({selected:!1,to:""}),u=Object(l.a)(s,2),m=u[0],d=u[1],h=Object(ce.g)();Object(n.useEffect)((function(){m.selected&&d({selected:!1,to:""})}));var p=function(){var t=h.pathname,a=e.list;return a=a.filter((function(e){return e.redirect!=t})),e.permissions.admin||(a=a.filter((function(e){return"/admin"!=e.redirect}))),a};if(m.selected)return r.a.createElement(ce.a,{to:m.to});return r.a.createElement(_e.a,{onClickAway:function(e){c&&i(!1)}},r.a.createElement("div",{className:t.body},r.a.createElement(k.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(k.a,{item:!0},r.a.createElement(b.a,{onClick:function(e){i((function(e){return!e}))},style:{padding:0}},r.a.createElement(Ve.a,{className:[t.menu,c?t.menuOpen:t.menuClosed].join(" "),fontSize:"large"}))),r.a.createElement(k.a,{container:!0,item:!0,className:t.menuBody,alignItems:"flex-start"},r.a.createElement(et.a,{in:c,style:{width:"100%"},timeout:{enter:250,exit:400}},r.a.createElement(k.a,{container:!0,direction:"column",alignItems:"stretch"},r.a.createElement((function(e){return r.a.createElement(r.a.Fragment,null,p().map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{item:!0},r.a.createElement("div",{onClick:(n=a,function(e){i(!1),d({selected:!0,to:p()[n].redirect})}),className:t.menuItem,key:a},e.label)),r.a.createElement(Y.a,null));var n})))}),null)))))))}function nt(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){f.a.get(ee+"user/logout").then((function(t){e.auth.logout(),e.onSuccess(),c(!0)}))}),[]),o?r.a.createElement(ce.a,{to:"/login"}):r.a.createElement(C,null)}var rt=function(){var e=Object(n.useState)({admin:!1,loggedIn:!1}),t=Object(l.a)(e,2),a=(t[0],t[1],Object(n.useState)(!1)),o=Object(l.a)(a,2),c=o[0],s=o[1],u=Object(n.useState)(!1),m=Object(l.a)(u,2),d=m[0],h=m[1],p=Object(n.useState)(!0),f=Object(l.a)(p,2),g=f[0],b=f[1];Object(n.useEffect)((function(){Je.authenticate((function(){Je.authenticated&&(s(!0),h(!0)),setTimeout((function(){b(!1)}),500)}))}),[]);var E=function(e){var t=e.component,a=e.privledges,n=a.admin,o=a.authenticate,c=a.prevent,l=Object(i.a)(e,["component","privledges"]);return r.a.createElement(ce.b,Object.assign({},l,{render:function(e){return n?!0===Je.admin?r.a.createElement(t,l.auth):r.a.createElement(ce.a,{to:"/login"}):o?!0===Je.authenticated?r.a.createElement(t,l.auth):r.a.createElement(ce.a,{to:"/login"}):c?!0===Je.authenticated?r.a.createElement(ce.a,{to:"/inventory"}):r.a.createElement(t,l.auth):void 0}}))};if(g)return r.a.createElement(C,null);var v=function(){h((function(e){return!e}))};return r.a.createElement(Ye.a,null,c?r.a.createElement(ce.a,{to:"/inventory"}):"",d?r.a.createElement(k.a,{container:!0,direction:"row",justify:"center"},r.a.createElement(k.a,{item:!0},r.a.createElement(at,{list:[{label:"Inventory",redirect:"/inventory"},{label:"Admin",redirect:"/admin"},{label:"Logout",redirect:"/logout"}],permissions:{admin:Je.admin}}))):"",r.a.createElement(ce.d,null,r.a.createElement(E,{exact:!0,path:"/",privledges:{admin:!1,authenticate:!1,prevent:!0},component:function(){return r.a.createElement(ie,{auth:Je,onSuccess:v})}}),r.a.createElement(E,{exact:!0,path:"/login",privledges:{admin:!1,authenticate:!1,prevent:!0},component:function(){return r.a.createElement(ie,{auth:Je,onSuccess:v})}}),r.a.createElement(E,{exact:!0,path:"/admin",privledges:{admin:!0,authenticate:!0,prevent:!1},component:Xe}),r.a.createElement(E,{exact:!0,path:"/inventory",privledges:{authenticate:!0},component:ae}),r.a.createElement(E,{exact:!0,path:"/logout",privledges:{authenticate:!0},component:function(){return r.a.createElement(nt,{auth:Je,onSuccess:v})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(rt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[125,1,2]]]);
//# sourceMappingURL=main.77b7082a.chunk.js.map