(this["webpackJsonplco-shopping-store"]=this["webpackJsonplco-shopping-store"]||[]).push([[0],{1559:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(9),s=c.n(a),i=(c(45),c(40)),o=c(11),d=(c(46),c(47),c(48),c(13)),j=c(16),u=c.n(j),l=c(38),b=c(39),h=c.n(b),x=c(1560),m=c(1561),O=c(1562),p=c(1563),f=c(1564),g=c(1572),y=c(2),I=function(e){var t=e.product,c=e.addInCart;return Object(y.jsxs)(x.a,{className:"mt-2 mb-1",children:[Object(y.jsx)(m.a,{top:!0,height:"250",width:"100%",src:t.smallImage}),Object(y.jsxs)(O.a,{className:"text-center",children:[Object(y.jsx)(p.a,{children:t.productName}),Object(y.jsxs)(f.a,{children:["Price: ",t.productPrice]}),Object(y.jsx)(g.a,{color:"success",onClick:function(){return c(t)},children:"Buy Now"})]})]})},v=c(12),C=c(1565),N=c(1566),P=c(1567),w=function(e){var t=e.addInCart,c=Object(n.useState)([]),r=Object(o.a)(c,2),a=r[0],s=r[1],i=function(){var e=Object(l.a)(u.a.mark((function e(){var t,c,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.npoint.io/d915e4692734267891d7",{});case 2:t=e.sent,c=t.data,n=c.photos,r=n.map((function(e){return{smallImage:e.src.medium,tinyImage:e.src.tiny,productName:v.random.word(),productPrice:v.commerce.price(),id:v.random.uuid()}})),s(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),Object(y.jsxs)(C.a,{fluid:!0,children:[Object(y.jsx)("h1",{className:"text-success text-center",children:"Buy Page"}),Object(y.jsx)(N.a,{children:a.map((function(e){return Object(y.jsx)(P.a,{md:4,children:Object(y.jsx)(I,{product:e,addInCart:t})},e.id)}))})]})},k=c(1568),F=c(1569),B=c(1570),S=c(1571),E=function(e){var t=e.cartItem,c=e.removeItem,n=e.buyNow,r=0;return t.forEach((function(e){r=parseFloat(r)+parseFloat(e.productPrice)})),Object(y.jsxs)(C.a,{fluid:!0,children:[Object(y.jsx)("h1",{className:"text-success",children:"Your Cart"}),Object(y.jsx)(k.a,{children:t.map((function(e){return Object(y.jsx)(F.a,{children:Object(y.jsxs)(N.a,{children:[Object(y.jsx)(P.a,{children:Object(y.jsx)("img",{height:80,src:e.tinyImage,alt:"product"})}),Object(y.jsxs)(P.a,{className:"text-center",children:[Object(y.jsx)("div",{className:"text-primary",children:e.productName}),Object(y.jsxs)("div",{children:["Price: ",e.productPrice]}),Object(y.jsx)(g.a,{color:"danger",onClick:function(){return c(e)},children:"Remove"})]})]})},e.id)}))}),t.length>=1?Object(y.jsxs)(x.a,{className:"text-center mt-3",children:[Object(y.jsx)(B.a,{children:"Grand Total"}),Object(y.jsxs)(O.a,{children:["Your Amount for ",t.length," product is ",r]}),Object(y.jsx)(S.a,{children:Object(y.jsx)(g.a,{color:"success",onClick:n,children:" Payy here"})})]}):Object(y.jsx)("h1",{className:"text-warning",children:" Cart is empty"})]})};var T=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(y.jsxs)(C.a,{fluid:!0,children:[Object(y.jsx)(d.a,{}),Object(y.jsxs)(N.a,{children:[Object(y.jsx)(P.a,{md:8,children:Object(y.jsx)(w,{addInCart:function(e){-1===c.findIndex((function(t){return t.id===e.id}))?r([].concat(Object(i.a)(c),[e])):Object(d.b)("Already In Cart",{type:"error"})}})}),Object(y.jsx)(P.a,{md:4,children:Object(y.jsx)(E,{cartItem:c,removeItem:function(e){r(c.filter((function(t){return t.id!==e.id})))},buyNow:function(){r([]),Object(d.b)("Purchase Complete",{type:"success"})}})})]})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,1573)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root")),A()},45:function(e,t,c){},48:function(e,t,c){}},[[1559,1,2]]]);
//# sourceMappingURL=main.e8ad386c.chunk.js.map