(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(10),s=c.n(a),n=c(4),i=(c(9),c(15),c(1)),b=c(6),j=c.n(b),l=(c(16),c(2)),r=function(e){return j()("navbar-item",{"is--active":e.isActive})},d=function(){return Object(l.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(l.jsx)("div",{className:"navbar-menu",children:Object(l.jsxs)("div",{className:"navbar-start",children:[Object(l.jsx)(n.c,{to:"/",className:r,children:"Home"}),Object(l.jsx)(n.c,{to:"/tabs",className:r,children:"Tabs"})]})})})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){var e=Object(i.h)().tabId,t=o.find((function(t){return t.id===e}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs Page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:o.map((function(t){return Object(l.jsx)("li",{className:j()({"is-active":t.id===e}),children:Object(l.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})},t.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"tab-content",children:(null===t||void 0===t?void 0:t.content)||"Please select a tab"})]})},x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"section",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home page"})}),Object(l.jsx)(i.b,{path:"/home",element:Object(l.jsx)(i.a,{to:"/"})}),Object(l.jsxs)(i.b,{path:"tabs",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(h,{})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(h,{})})]}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.efc11bee.chunk.js.map