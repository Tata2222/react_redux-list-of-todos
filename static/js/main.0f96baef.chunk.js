(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,n){e.exports=n(37)},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),u=n.n(c),o=n(4),i=n(23),l=n(10),s=n(22),d=function(e){return{type:"START_LOAD",status:e}},m=function(e){return{type:"SET_TODOS",todos:e}},f=function(e){return{type:"REVERSE",status:e}},p=function(e){return{type:"FINISH_LOAD",status:e}},E=function(e){return e.loading},v=function(e){return e.todos},b=function(e){return e.errorMessage},h=function(e){return e.isReverse},O=function(e){return e.sortType},y=function(e){return e.loaded},g=Object(l.combineReducers)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOAD":return!e;default:return e}},loaded:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FINISH_LOAD":return!e;default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TODOS":return t.todos;case"DELETE_TODO":return e.filter((function(e){return e.id!==t.id}));default:return e}},sortType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_TYPE":return t.sortType;default:return e}},isReverse:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REVERSE":return!e;default:return e}},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return t.message;default:return e}}}),j=Object(l.createStore)(g,{loading:!1,loaded:!1,sortType:"id",isReverse:!1,todos:[],errorMessage:""},Object(s.composeWithDevTools)()),T=n(7),R=n.n(T),w=n(11),S=n(18),_=function(){var e=Object(w.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(w.a)(R.a.mark((function e(){var t,n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/todos.json");case 2:return t=e.sent,e.next=5,_("/users.json");case 5:return n=e.sent,r=t.map((function(e){return Object(S.a)(Object(S.a)({},e),{},{user:n.find((function(t){return t.id===e.userId}))})})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=n(12),k=[{id:1,title:"id"},{id:2,title:"name"},{id:3,title:"title"},{id:4,title:"completed"}],D=n(49),A=function(){var e=Object(o.b)(),t=Object(o.c)(v),n=Object(o.c)(O),c=Object(o.c)(h),u=Object(r.useMemo)((function(){var e=Number(c)?-1:1;switch(n){case"id":return Object(N.a)(t).sort((function(t,n){return(t.id-n.id)*e}));case"name":return Object(N.a)(t).sort((function(t,n){return t.user.name.localeCompare(n.user.name)*e}));case"title":return Object(N.a)(t).sort((function(t,n){return t.title.localeCompare(n.title)*e}));case"completed":return Object(N.a)(t).sort((function(t,n){return(Number(t.completed)-Number(n.completed))*e}));default:return t}}),[n,t,c]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"buttons_panel"},k.map((function(t){var r=t.id,u=t.title;return a.a.createElement("button",{type:"button",key:r,id:r.toString(),onClick:function(){var t;(t=u)&&(t===n?e(f(!c)):(e(f(!1)),e(function(e){return{type:"SORT_TYPE",sortType:e}}(t))))}},u)}))),a.a.createElement("ul",null,u.map((function(t){return a.a.createElement("li",{className:"todo",key:t.id},a.a.createElement("span",null,t.id),a.a.createElement("span",null,t.user.name),a.a.createElement("span",null,t.title),t.completed?a.a.createElement(D.a,{style:{color:"#709e0e"},className:"done"},"done"):a.a.createElement("div",null),a.a.createElement("span",{className:"delete"},a.a.createElement("button",{type:"button",onClick:function(){return e({type:"DELETE_TODO",id:t.id})},className:"delete-btn"},a.a.createElement(D.a,{fontSize:"small"},"delete"))))}))))},L=function(){return a.a.createElement("div",{id:"preloader"},a.a.createElement("div",{id:"loader"}))},I=(n(35),function(e){var t=e.init,n=e.title,r=Object(o.c)(E);return a.a.createElement("button",{className:"start-btn",type:"button",onClick:t,disabled:r},n)}),C=function(){var e=Object(o.c)(y),t=Object(o.c)(E),n=Object(o.c)(b),r=Object(o.b)(),c=function(){var e=Object(w.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(d(!0)),e.prev=1,e.next=4,x();case 4:t=e.sent,r(m(t)),r(p(!0)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),r({type:"ERROR",message:"Sorry, something is wrong: ".concat(e.t0)}),r(p(!1));case 13:r(d(!1));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"App"},!t&&!e&&a.a.createElement(I,{title:"Load",init:c}),t&&!e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(L,null)),e&&0===n.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Redux list of todos"),a.a.createElement(A,null)),n.length>0&&a.a.createElement("h2",null,n))},F=function(){return a.a.createElement(o.a,{store:j},a.a.createElement(i.a,null,a.a.createElement(C,null)))};u.a.render(a.a.createElement(F,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0f96baef.chunk.js.map