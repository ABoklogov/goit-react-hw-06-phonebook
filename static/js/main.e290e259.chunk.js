(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactName:"ContactItem_contactName__xGeAH",contactNumber:"ContactItem_contactNumber__YfEWP",contactBtn:"ContactItem_contactBtn__2s6lE"}},16:function(t,e,n){t.exports={container:"App_container__1SJ9r"}},17:function(t,e,n){t.exports={contactList:"ContactList_contactList__JIcAf",contact:"ContactList_contact__27Njx"}},20:function(t,e,n){t.exports={input:"Filter_input__3Uhzm"}},29:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(9),s=n.n(o),i=n(2),u=(n(29),n(19)),b=n.n(u),j=n(4),l=Object(j.b)("contacts/Add",(function(t,e){return{payload:{id:b.a.generate(),name:t,number:e}}})),m=Object(j.b)("contact/Delete"),O=Object(j.b)("contacts/Set"),d=Object(j.b)("contacts/Filter",(function(t){return{payload:t.target.value}})),f=function(t){return t.contacts.items},p=function(t){return t.contacts.filter},x=n(16),_=n.n(x),h=n(20),N=n.n(h),v=n(1),C=function(){var t=Object(i.c)(p),e=Object(i.b)();return Object(v.jsxs)("label",{children:["Find contacts by name",Object(v.jsx)("input",{className:N.a.input,type:"text",name:"filter",value:t,onChange:function(t){return e(d(t))}})]})},g=n(18),y=n(5),S=n.n(y),A=function(){var t=Object(a.useState)(""),e=Object(g.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(g.a)(r,2),s=o[0],u=o[1],b=Object(i.b)(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":u(a)}};return Object(v.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault(),b(l(n,s)),c(""),u("")},children:[Object(v.jsx)("p",{className:S.a.text,children:"Name"}),Object(v.jsx)("input",{className:S.a.input,type:"text",name:"name",value:n,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(v.jsx)("p",{className:S.a.text,children:"Number"}),Object(v.jsx)("input",{className:S.a.input,type:"tel",name:"number",value:s,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(v.jsx)("button",{className:S.a.btn,type:"submit",children:"Add contact"})]})},L=n(17),w=n.n(L),k=n(11),F=n.n(k),I=function(t){var e=t.id,n=t.name,c=t.number,a=Object(i.b)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{className:F.a.contactName,children:[n,":"]}),Object(v.jsx)("p",{className:F.a.contactNumber,children:c}),Object(v.jsx)("button",{className:F.a.contactBtn,onClick:function(){return a(m(e))},children:"delete"})]})},J=function(){var t=Object(i.c)(p),e=Object(i.c)(f);return Object(v.jsx)("ul",{className:w.a.contactList,children:function(){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}().map((function(t){var e=t.id,n=t.name,c=t.number;return Object(v.jsx)("li",{className:w.a.contact,children:Object(v.jsx)(I,{id:e,name:n,number:c})},e)}))})},z=function(){var t=Object(i.c)(f),e=Object(i.b)();return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&e(O(t))}),[e]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(t))}),[t]),Object(v.jsxs)("div",{className:_.a.container,children:[Object(v.jsx)("h1",{className:_.a.title,children:"Phonebook"}),Object(v.jsx)(A,{}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(C,{}),Object(v.jsx)(J,{})]})},B=n(7),E=n(12),Z=n(3),P=Object(j.c)([],(c={},Object(B.a)(c,l,(function(t,e){var n=e.payload;return t.some((function(t){return t.name.toLowerCase()===n.name.toLowerCase()}))?(alert("".concat(n.name," is alreaby in contacts")),Object(E.a)(t)):[].concat(Object(E.a)(t),[n])})),Object(B.a)(c,m,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(B.a)(c,O,(function(t,e){var n=e.payload;return Object(E.a)(n)})),c)),U=Object(j.c)("",Object(B.a)({},d,(function(t,e){return e.payload}))),q=Object(Z.b)({filter:U,items:P}),D=Object(j.a)({reducer:{contacts:q},devTools:!1});s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(i.a,{store:D,children:Object(v.jsx)(z,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"ContactForm_form__2R3p4",text:"ContactForm_text__2pkSY",input:"ContactForm_input__3UyjZ",btn:"ContactForm_btn__1LPU4"}}},[[39,1,2]]]);
//# sourceMappingURL=main.e290e259.chunk.js.map