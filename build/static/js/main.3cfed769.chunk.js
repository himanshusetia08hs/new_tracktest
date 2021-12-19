(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{43:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(13),c=a.n(r),i=(a(48),a(9)),s=a(5),o=a(41),m=(a(49),a(14)),u=a.n(m),d=a(37),E=a.n(d),h=a(42),g=a(22),b=a(16),p=a(17),f=a(21),v=a(19),y=a(26),w=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(y.a,{bg:"black",variant:"dark",className:"text-center"},n.a.createElement(y.a.Brand,{href:"#home"},n.a.createElement("img",{width:"28ch",src:"logomain.png"}),"   ","COVID-19 Tracker")))}}]),a}(l.Component),x=a(8),j=a(39),O=a(15),k=a(23),D=a(40),C=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(b.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.districts,a=e.state;return console.log("Hello",a,t.data[a]),n.a.createElement(D.a,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:!0,style:{margin:"0px",padding:"0px"}},n.a.createElement("small",null,n.a.createElement("thead",null,n.a.createElement("tr",{style:{background:"light"}},n.a.createElement("th",null,"District"),n.a.createElement("th",null,"Active"),n.a.createElement("th",null,"Confirmed"),n.a.createElement("th",null,"Recovered"),n.a.createElement("th",null,"Deaths")),Object.keys(t.data[a].districtData).map((function(e){return console.log(t.data[a].districtData[e]),n.a.createElement("tr",null,n.a.createElement("td",null,e),n.a.createElement("td",null,t.data[a].districtData[e].active),n.a.createElement("td",null,0!==t.data[a].districtData[e].delta.confirmed?n.a.createElement(O.a,{pill:!0,variant:"warning"},n.a.createElement("small",null,n.a.createElement("i",{className:"fas fa-arrow-up"})),t.data[a].districtData[e].delta.confirmed):n.a.createElement(n.a.Fragment,null),t.data[a].districtData[e].confirmed),n.a.createElement("td",null,t.data[a].districtData[e].recovered),n.a.createElement("td",null,t.data[a].districtData[e].deceased))})))))}}]),a}(l.Component);var T=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)([]),m=Object(i.a)(c,2),d=m[0],b=m[1],p=Object(l.useState)([]),f=Object(i.a)(p,2),v=f[0],y=f[1],D=Object(l.useState)(""),T=Object(i.a)(D,2),S=T[0],N=T[1],B=Object(l.useState)(!0),F=Object(i.a)(B,2),G=F[0],q=F[1],I=Object(l.useState)(),L=Object(i.a)(I,2),_=L[0],A=L[1];if(Object(l.useEffect)((function(){u.a.all([u.a.get("https://disease.sh/v2/all"),u.a.get("https://api.covid19india.org/data.json"),u.a.get("https://disease.sh/v2/countries/india"),u.a.get("https://api.covid19india.org/state_district_wise.json")]).then((function(e){r(e[0].data),y(e[1].data.statewise),b(e[2].data),q(!1),A(e[3])})).catch((function(e){console.log("error")}))}),[]),G)return"Loading";var H=new Date(parseInt(a.updated)).toString(),R=v.filter((function(e){return""!==S?e.state.toLowerCase().includes(S.toLowerCase()):e})).map((function(e,t){return"Total"===e.state||"State Unassigned"===e.state?null:_?n.a.createElement(s.a,{border:"secondary",key:t,bg:"dark",text:"light",className:"text-center",style:{margin:"8px"}},n.a.createElement(k.a,null,n.a.createElement(s.a,null,n.a.createElement(k.a.Toggle,{as:s.a.Header,eventKey:"0"},n.a.createElement("b",{style:{color:"black"}},e.state," ",n.a.createElement("img",{width:"20ch",src:"info.png"}))),n.a.createElement(k.a.Collapse,{eventKey:"0"},n.a.createElement(C,{state:e.state,districts:_})))),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Text,null,n.a.createElement("b",null,"Active: "),e.active),n.a.createElement(s.a.Text,null,0!=e.deltaconfirmed?n.a.createElement(O.a,{pill:!0,variant:"primary"},n.a.createElement("small",null,n.a.createElement("i",{className:"fas fa-arrow-up"})," ",e.deltaconfirmed)):n.a.createElement(n.a.Fragment,null),n.a.createElement("b",null,"Confirmed: "),e.confirmed),n.a.createElement(s.a.Text,null,n.a.createElement("b",null,"Deceased: "),e.deaths),n.a.createElement(s.a.Text,null,n.a.createElement("b",null,"Recovered: "),e.recovered))):void 0}));return n.a.createElement("div",null,n.a.createElement(w,null),n.a.createElement(o.a,null,n.a.createElement(s.a,{bg:"warning",text:"white",className:"text-center",style:{margin:"10px"}},n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(x.b,null)," ",a.cases),n.a.createElement(s.a.Title,null,n.a.createElement("b",{style:{color:"black"}},n.a.createElement("img",{width:"25ch",src:"india.png"})," "),0!==d.todayCases?n.a.createElement(O.a,{pill:!0,variant:"danger"},n.a.createElement("small",null,n.a.createElement("i",{className:"fas fa-arrow-up"}),d.todayCases)):n.a.createElement(n.a.Fragment,null),d.cases)),n.a.createElement(s.a.Footer,null,n.a.createElement("b",null,"Cases"))),n.a.createElement(s.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(x.b,null)," ",a.deaths),n.a.createElement(s.a.Title,null,n.a.createElement("b",{style:{color:"black"}},n.a.createElement("img",{width:"25ch",src:"india.png"})," "),d.deaths)),n.a.createElement(s.a.Footer,null,n.a.createElement("b",null,"Deceased"))),n.a.createElement(s.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,n.a.createElement(x.b,null)," ",a.recovered),n.a.createElement(s.a.Title,null,n.a.createElement("b",{style:{color:"black"}},n.a.createElement("img",{width:"25ch",src:"india.png"})," "),d.recovered)),n.a.createElement(s.a.Footer,null,n.a.createElement("b",null,"Recovered")))),n.a.createElement("small",{style:{color:"white"}},"Last updated ",E()(H).calendar()),n.a.createElement(g.a,null,n.a.createElement(g.a.Group,{controlId:"formGroupSearch"},n.a.createElement(g.a.Control,{type:"text",placeholder:"Search a state...",onChange:function(e){return N(e.target.value)}}),n.a.createElement("small",{style:{color:"white"}}," ","[Tap on state for district details]"))),n.a.createElement(h.a,{queries:[{columns:2,query:"min-width: 400px"},{columns:3,query:"min-width: 870px"},{columns:3,query:"min-width: 1100px"}]},R),n.a.createElement(s.a,{border:"dark",bg:"secondary",text:"light",className:"text-center",style:{margin:"8px"}},n.a.createElement(s.a.Header,null,n.a.createElement("b",null,n.a.createElement(x.a,null),"Developed by: "),n.a.createElement("a",{target:"_blank",style:{color:"white"},href:"https://github.com/gurkiratsinghofficial"},"Gurkirat Singh"),n.a.createElement("a",{target:"_blank",style:{color:"white"},href:"https://github.com/Gaganpreetoberoi"}," Gaganpreet singh Oberoi")," ")),n.a.createElement(j.CircleArrow,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.3cfed769.chunk.js.map