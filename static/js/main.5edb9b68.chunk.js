(this["webpackJsonpsibers-react"]=this["webpackJsonpsibers-react"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(11),c=n.n(o),r=n(8),l=n.n(r),i=n(12),u=n(2),d=function(e){var t;return e.sort((t="name",function(e,n){return e[t]>n[t]?1:-1}))},j=function(e){var t=e,n="users";localStorage.getItem(n)||localStorage.setItem(n,JSON.stringify(t));var a=localStorage.getItem("users");return JSON.parse(a)},h=n(0);function m(e){return Object(h.jsx)("button",{className:"contacts-header__add",onClick:function(){e.modalStatus(!0),e.changeModalContent(null)}})}var b=function(e){return Object(h.jsx)("input",{type:"search",className:"contacts-header__search",placeholder:"Search...",onChange:function(t){return e.onChangeSearchUser(t.target.value)}})};function O(e){return Object(h.jsx)("header",{className:"contacts-header",children:Object(h.jsxs)("div",{className:"contacts-header__wrapper",children:[Object(h.jsx)("h1",{className:"contacts-title",children:"Contacts"}),Object(h.jsx)(m,{modalStatus:e.modalStatus,changeModalContent:e.changeModalContent}),Object(h.jsx)(b,{onChangeSearchUser:e.onChangeSearchUser})]})})}var g=function(e){var t=e.dataUser,n=e.listUsers[e.idUser-1],a=Object(h.jsx)("h2",{className:"contacts-content__title contacts-wrap",children:t.name.charAt(0).toUpperCase()},t.name.charAt(0)),s=Object(h.jsx)("button",{className:"contacts-content__elem",onClick:function(){e.modalStatus(!0),e.changeModalContent(t)},children:t.name},t.id);return Object(h.jsx)(h.Fragment,{children:void 0===n||t.name.charAt(0)!==n.name.charAt(0)?Object(h.jsxs)(h.Fragment,{children:[a,s]}):Object(h.jsx)(h.Fragment,{children:s})})},f=function(e){return Object(h.jsx)("div",{className:"contacts-wrapper",children:Object(h.jsx)("div",{className:"contacts-content",children:e.data&&e.data.map((function(t,n,a){return Object(h.jsx)(g,{dataUser:t,idUser:n,listUsers:a,modalStatus:e.modalStatus,changeModalContent:e.changeModalContent},n)}))})})},C=n(9),U=n.n(C),p=function(e){return Object(h.jsx)("label",{className:"contacts-modal__label",htmlFor:e.infoGroup,children:e.infoGroup})},S=n(5),x=n(10),v=n(6),N=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),s=n[0],o=n[1],c=Object(a.useState)(""),r=Object(u.a)(c,2),l=r[0],i=r[1],j=e.modalContent,m=e.infoGroup;Object(a.useEffect)((function(){j?(o(j[m]),i("")):(o(""),i("Enter your ".concat(m)))}),[m,j]);return Object(h.jsx)("input",{type:"text",className:"contacts-modal__inp",onChange:function(t){var n=t.target.value,a="";if(o(n),j){var s=Object(v.a)(e.localeStorageUsers).filter((function(e){return e.id===j.id&&(e[m]=n),e}));localStorage.setItem("users",JSON.stringify(s)),e.onChangeUsers(d(s))}j||(a="name"===e.infoGroup?n[0].toUpperCase()+n.slice(1):t.target.value,e.onChangeNewUser(Object(x.a)(Object(x.a)({},e.newUser),{},Object(S.a)({},e.infoGroup,a))))},value:s,placeholder:l,id:m})},_=function(e){return Object(h.jsxs)("div",{className:"contacts-modal__group",children:[Object(h.jsx)(p,{infoGroup:e.infoGroup}),Object(h.jsx)(N,{modalContent:e.modalContent,infoGroup:e.infoGroup,onChangeNewUser:e.onChangeNewUser,newUser:e.newUser,onChangeUsers:e.onChangeUsers,localeStorageUsers:e.localeStorageUsers})]})},w=function(e){return Object(h.jsx)("button",{className:"contacts-modal__closed",onClick:function(){var t=e.newUser;t.id=e.listUsers.length;var n=[].concat(Object(v.a)(e.listUsers),[t]),a=JSON.parse(localStorage.getItem("users"));a.push(t),localStorage.setItem("users",JSON.stringify(a)),e.onChangeUsers(d(n)),e.resetModal()},children:"OK"})},M=function(e){var t=Object(a.useState)({name:"",phone:"",email:"",id:0}),n=Object(u.a)(t,2),s=n[0],o=n[1],c=function(e){return o(e)},r=function(){e.modalStatus(!1),e.changeModalContent(null)},l=U()("contacts-modal",{active:e.isOpenModal}),i=U()("contacts-modal__wrapper",{active:e.isOpenModal}),d=e.modalContent?e.modalContent.name:"Add contact";return Object(h.jsx)("div",{className:l,onClick:function(e){e.preventDefault();var t=document.querySelector(".contacts-modal");e.target===t&&r()},children:Object(h.jsxs)("form",{className:i,children:[Object(h.jsxs)("header",{className:"contacts-modal__header",children:[Object(h.jsx)("h4",{className:"contacts-modal__title",children:d}),Object(h.jsx)("button",{className:"contacts-modal__close",onClick:r,children:"\xd7"})]}),Object(h.jsxs)("main",{className:"contacts-modal__main",children:[Object(h.jsx)(_,{modalContent:e.modalContent,infoGroup:"name",onChangeNewUser:c,newUser:s,onChangeUsers:e.onChangeUsers,localeStorageUsers:e.localeStorageUsers}),Object(h.jsx)(_,{modalContent:e.modalContent,infoGroup:"phone",onChangeNewUser:c,newUser:s,onChangeUsers:e.onChangeUsers,localeStorageUsers:e.localeStorageUsers}),Object(h.jsx)(_,{modalContent:e.modalContent,infoGroup:"email",onChangeNewUser:c,newUser:s,onChangeUsers:e.onChangeUsers,localeStorageUsers:e.localeStorageUsers})]}),!e.modalContent&&Object(h.jsx)(w,{newUser:s,modalContent:e.modalContent,onChangeUsers:e.onChangeUsers,resetModal:r,listUsers:e.listUsers})]})})};function G(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(!1),c=Object(u.a)(o,2),r=c[0],m=c[1],b=Object(a.useState)(null),g=Object(u.a)(b,2),C=g[0],U=g[1],p=Object(a.useState)(""),S=Object(u.a)(p,2),x=S[0],v=S[1];Object(a.useEffect)((function(){n?s(d(n)):function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demo.sibers.com/users").then((function(e){return e.json()}));case 2:t=e.sent,n=j(t),s(d(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var N=n&&n.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())})),_=function(e){return m(e)},w=function(e){return U(e)};return Object(h.jsxs)("div",{className:"contacts",children:[Object(h.jsx)(O,{modalStatus:_,onChangeSearchUser:function(e){return v(e)},changeModalContent:w}),Object(h.jsx)(f,{data:N,modalStatus:_,changeModalContent:w}),Object(h.jsx)(M,{isOpenModal:r,modalStatus:_,changeModalContent:w,modalContent:C,onChangeUsers:function(e){return s(e)},listUsers:N,localeStorageUsers:n})]})}n(19);c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5edb9b68.chunk.js.map