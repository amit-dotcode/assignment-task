(this["webpackJsonpassignment-app"]=this["webpackJsonpassignment-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(8),a=n.n(r),i=(n(14),n(15),n(6)),o=n.n(i),j=n(7),l=n(9),u=n(4),d=n(0),b=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(1),a=Object(u.a)(r,2),i=a[0],b=a[1],h=Object(c.useState)(!0),O=Object(u.a)(h,2),p=O[0],g=O[1];Object(c.useEffect)((function(){x(i)}),[]);var x=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.instantwebtools.net/v1/passenger?page=".concat(t,"&size=10"));case 2:return(c=e.sent).ok,e.next=6,c.json();case 6:r=e.sent,a=null===r||void 0===r?void 0:r.data,t>1?s([].concat(Object(j.a)(n),Object(j.a)(n))):(console.log(a),s(a)),g(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function f(){var e=document.documentElement,t=e.scrollHeight;e.scrollTop+e.clientHeight>=t&&(b(i+1),g(!0),x(i))}return Object(c.useEffect)((function(){return window.addEventListener("scroll",f),function(){return window.removeEventListener("scroll",f)}}),[f]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:"-: List of Flight User's :-"}),Object(d.jsx)("div",{className:"custome_wrapper",onScroll:f,children:n.map((function(e,t){return Object(d.jsx)("div",{className:"card_data",children:Object(d.jsxs)("div",{className:"user_details",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Name - "}),e.name]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Trip - "}),e.trips]}),Object(d.jsx)("hr",{}),e.airline.map((function(e,t){return Object(d.jsxs)("div",{className:"flight_details",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{children:"Air-"}),e.name]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{children:"country-"}),e.country]}),Object(d.jsx)("img",{src:e.logo,alt:"country_flag"}),Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{children:"slogan-"}),e.slogan]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("strong",{children:"website-"}),e.website]})]},t)}))]},t)})}))}),Object(d.jsx)("p",{className:"page_Loader",children:!0===p?"isLoading.....":""})]})};var h=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.fc3ee309.chunk.js.map