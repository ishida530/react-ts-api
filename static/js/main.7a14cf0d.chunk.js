(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(n,t,e){},32:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var c,r,a=e(0),i=e.n(a),o=e(21),s=e.n(o),u=(e(31),e(8)),j=(e(32),e(9)),d=e(11),l=e(26),p=e(1),b=[{name:"start",path:"/",exact:!0},{name:"pordukty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"koszyk",path:"/basket"}],x=j.b.div(c||(c=Object(u.a)(["\nbackground-color: #da7b7b;\nheight: 80px;\ndisplay:flex;\nalign-items: center;\nnav{width:100%;\nul{\n    display: flex;\n    list-style: none;\n   width: 100%;\n   justify-content: space-around;\n   max-height: 50px;\n\n   li{ \n       padding:15px 20px;\n       background-color: #ddd;\n       text-transform: uppercase;\n       font-family:arial;\n       font-weight: bold;\n       color: #000;\n       a{\n        text-decoration:none;\n        color: #000;\n\n       }\n\n   }}\n}\n\n"]))),h=function(n){var t=b.map((function(n){return Object(p.jsxs)("li",{children:[Object(p.jsx)(d.b,{exact:!!n.exact&&n.exact,to:n.path,children:n.name}),"/basket"===n.path?Object(p.jsxs)("span",{children:[" ",Object(p.jsx)(l.a,{})," "]}):null]},n.name)}));return Object(p.jsx)(x,{children:Object(p.jsx)("nav",{children:Object(p.jsx)("ul",{children:t})})})},f=e(2),O=function(n){return Object(p.jsx)("main",{children:Object(p.jsx)("ul",{children:Object(p.jsx)("li",{children:"basket"})})})},m=function(n){return Object(p.jsx)("div",{children:"Contact"})},g=function(){return Object(p.jsx)("div",{children:"homepage"})},v=e(14),k=e.n(v),w=e(18),y=e(19),C=0,L=[],z=j.b.div(r||(r=Object(u.a)(["\n\ndisplay:flex;\nflex-wrap: wrap;\nwidth: 90%;\nmargin: 0 auto;\n    div{display:flex;\n        flex-direction: column;\n        margin: 5px auto 5px ;\n        background-color: #ddd;\n        border-radius: 5%;\n        img{    \n            width:150px;\n            margin: 10px 55px 0px 55px;\n            object-fit: cover;\n            \n        }\n       \n        div{\n            width: auto;\n            align-items: center;\n            justify-content: center;\n            background-color: transparent;\n            height: 100%;\n            h3{\n                max-width:220px;\n                text-align:center      ;\n        }\n        }\n        :hover{\n            background-color: red;\n            transition: .3s;\n            cursor: pointer;\n        }\n    }\n\n"])));var F,S=function(n){var t=Object(a.useState)([]),e=Object(y.a)(t,2),c=e[0],r=e[1],i=Object(a.useState)({value:""}),o=Object(y.a)(i,2),s=o[0],u=o[1],j=function(){var n=Object(w.a)(k.a.mark((function n(){var t,e,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/books/",{method:"get"});case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.next=8,e.forEach((function(n){L.push({src:n.simple_thumb,title:n.title})}));case 8:return n.sent,r(c=L),n.abrupt("return",c);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(a.useEffect)((function(){L=[],j()}),[]);var d=function(){var n=Object(w.a)(k.a.mark((function n(t){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u({value:t.currentTarget.value}),console.log("szuka?");case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{onChange:d,type:"text",placeholder:"szukaj"}),Object(p.jsx)(z,{children:c.filter((function(n){return n.title.toLocaleLowerCase().includes(s.value.toLocaleLowerCase())})).map((function(n){var t=n.title,e=n.src;return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:e,alt:t}),Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:t},C++)})]},C++)}))})]})},E=function(n){return Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{exact:!0,path:"/",component:g}),Object(p.jsx)(f.a,{path:"/products",component:S}),Object(p.jsx)(f.a,{path:"/product/:id",component:S}),Object(p.jsx)(f.a,{path:"/contact",component:m}),Object(p.jsx)(f.a,{path:"/basket",component:O}),Object(p.jsx)(f.a,{render:function(){return Object(p.jsx)("h1",{children:"Strona nie istnieje"})}})]})},T=Object(j.a)(F||(F=Object(u.a)(["\n* {\n  margin:0;\n  padding:0;\n  box-sizing: border-box;\n}"])));var B=function(){return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(T,{}),Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{}),Object(p.jsx)(E,{})]})]})},I=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,42)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),c(n),r(n),a(n),i(n)}))};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),I()}},[[41,1,2]]]);
//# sourceMappingURL=main.7a14cf0d.chunk.js.map