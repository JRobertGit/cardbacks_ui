(this.webpackJsonpcardbacks_ui=this.webpackJsonpcardbacks_ui||[]).push([[0],{41:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c,a,r,o,j,s,l,b,i=n(0),d=n.n(i),u=n(30),O=n.n(u),p=(n(41),n(42),n(18)),x=n.n(p),h=n(31),f=n(13),m=n(7),g=n(32),k=n.n(g),v=n(8),C=n(67),w=n(69),y=n(68),I=n(70),B=n(5),S=Object(v.a)(I.a)(c||(c=Object(m.a)(["\n  background-color: #1a1b20;\n  border-color: #148eff;\n  height: 392px;\n  width: 222px;\n"]))),L=Object(v.a)(I.a.Header)(a||(a=Object(m.a)(["\n  background-color: #0074e0;\n  color: #fff;\n  font-size: 18px;\n  padding: 8px 12px;\n"]))),z=Object(v.a)(I.a.Img)(r||(r=Object(m.a)(["\n  margin: 8px auto;\n  width: 150px;\n"]))),E=Object(v.a)(I.a.Body)(o||(o=Object(m.a)(["\n  overflow: scroll;\n  padding: 8px 12px;\n"]))),F=Object(v.a)(I.a.Title)(j||(j=Object(m.a)(["\n  color: #ffb400;\n  line-height: 1.3;\n  font-size: 14px;\n  margin-bottom: 8px;\n"]))),q=Object(v.a)(I.a.Text)(s||(s=Object(m.a)(["\n  color: hsla(0, 0%, 100%, 0.72);\n  font-size: 12px;\n"]))),G=function(e){var t=e.cardBack;return Object(B.jsxs)(S,{children:[Object(B.jsx)(L,{children:t.name}),Object(B.jsx)(z,{src:t.image}),Object(B.jsxs)(E,{children:[Object(B.jsx)(F,{children:t.slug}),Object(B.jsx)(q,{children:t.text})]})]},t.id)},P=Object(v.a)(y.a)(l||(l=Object(m.a)(["\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),J=Object(v.a)(y.a.Item)(b||(b=Object(m.a)(["\n  background: transparent;\n  border: none;\n"]))),T=function(e){var t=e.cardBacks;return Object(B.jsx)(P,{horizontal:!0,children:t.map((function(e){return Object(B.jsx)(J,{children:Object(B.jsx)(G,{cardBack:e})},e.id)}))})};T.defaultProps={cardBacks:[]};var _=T,H=function(e){var t=e.query,n=e.onChange;return Object(B.jsx)(w.a,{children:Object(B.jsx)(w.a.Control,{value:t,type:"text",placeholder:"Search",onChange:n})})};H.defaultProps={query:"",onChange:function(){}};var M,N=H,W=Object(v.a)(C.a)(M||(M=Object(m.a)(["\n  background-color: #1a1b20;\n"]))),A=function(){var e=Object(i.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),r=Object(f.a)(a,2),o=r[0],j=r[1],s=Object(i.useState)(""),l=Object(f.a)(s,2),b=l[0],d=l[1];return Object(i.useEffect)((function(){(function(){var e=Object(h.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()("http://localhost:8080/cardbacks");case 3:t=e.sent,c(t.data),j(t.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c([]),j([]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.useEffect)((function(){var e=b.toLowerCase(),t=e?n.filter((function(t){return t.slug.toLowerCase().includes(e)})):n;j(t)}),[b]),Object(B.jsxs)(W,{children:[Object(B.jsxs)(w.a,{children:[Object(B.jsxs)(w.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(B.jsx)(w.a.Label,{children:"Items"}),Object(B.jsx)(w.a.Control,{type:"email",placeholder:"name@example.com"})]}),Object(B.jsxs)(w.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(B.jsx)(w.a.Label,{children:"Items Per Worker"}),Object(B.jsx)(w.a.Control,{type:"email",placeholder:"name@example.com"})]}),Object(B.jsxs)(w.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(B.jsx)(w.a.Label,{children:"Search Filter"}),Object(B.jsxs)(w.a.Control,{as:"select",children:[Object(B.jsx)("option",{children:"None"}),Object(B.jsx)("option",{children:"Odd"}),Object(B.jsx)("option",{children:"Even"})]})]})]}),Object(B.jsx)(N,{query:b,onChange:function(e){return d(e.target.value)}}),Object(B.jsx)(_,{cardBacks:o})]})};O.a.render(Object(B.jsx)(d.a.StrictMode,{children:Object(B.jsx)(A,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.055f03f1.chunk.js.map