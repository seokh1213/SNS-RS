(this["webpackJsonpsnsrs-front"]=this["webpackJsonpsnsrs-front"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n.n(c),a=n(21),s=n.n(a),o=n(4),r=n(9),i=n(2),j=n(0),b=function(e){var t=e.alter,n=void 0!==t&&t,c=e.setPath,a=l.a.useState(""),s=Object(o.a)(a,2),b=s[0],u=s[1],d=l.a.useState(!1),h=Object(o.a)(d,2),x=h[0],f=h[1],O=l.a.useState(""),m=Object(o.a)(O,2),p=m[0],g=m[1],S=l.a.useState(!1),N=Object(o.a)(S,2),v=N[0],y=N[1];c&&c();return x?Object(j.jsx)(i.a,{to:"/SNS-RS/"}):Object(j.jsx)("div",{className:"flex h-full items-center justify-center",children:Object(j.jsxs)("div",{className:" h-60 w-1/3 max-w-sm mb-56 border border-gray-300 bg-white flex flex-col p-10",children:[Object(j.jsx)("div",{className:" w-full pb-1 mb-2 text-gray-500 text-sm",children:n?"\uc218\uc815":"\ud68c\uc6d0\uac00\uc785"}),Object(j.jsxs)("form",{className:"flex flex-col",children:[Object(j.jsx)("input",{className:" w-full h-10 border border-gray-300 rounded-lg p-2",type:"text",placeholder:"\uc804\ud654\ubc88\ud638",value:b,onChange:function(e){u(e.target.value)}}),""!==p&&Object(j.jsx)("div",{className:" text-red-500 text-sm",children:p}),Object(j.jsx)("button",{className:"w-full h-10 my-4 bg-blue-500 text-white border rounded-lg p-2 active:bg-blue-400",onClick:function(e){e.preventDefault(),(""!==b||v)&&(y(!0),fetch("http://localhost:8080/join",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:b})}).then((function(e){return e.json()})).then((function(e){e.ok?f(!0):g("\uc544\uc774\ub514\uac00 \uc774\ubbf8 \uc874\uc7ac\ud569\ub2c8\ub2e4.")})).catch((function(e){return g("\uc11c\ubc84\uc640\uc758 \uc5f0\uacb0 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4.")})).finally((function(){return y(!1)})))},children:v?"...":n?"\uc218\uc815":"\ud68c\uc6d0\uac00\uc785"})]}),!n&&Object(j.jsxs)("div",{className:"text-sm",children:["\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c"," ",Object(j.jsx)(r.b,{to:"/SNS-RS/login",className:" text-blue-500 font-bold",children:"\uc774\ub3d9"})]})]})})},u=function(e){var t=e.setLogin,n=l.a.useState(""),c=Object(o.a)(n,2),a=c[0],s=c[1],i=l.a.useState(""),b=Object(o.a)(i,2),u=b[0],d=b[1],h=l.a.useState(!1),x=Object(o.a)(h,2),f=x[0],O=x[1];return Object(j.jsx)("div",{className:"flex h-full items-center justify-center",children:Object(j.jsxs)("div",{className:" h-60 w-1/3 max-w-sm mb-56 border border-gray-300 bg-white flex flex-col p-10",children:[Object(j.jsx)("div",{className:" w-full pb-1 mb-2 text-gray-500 text-sm",children:"\ub85c\uadf8\uc778"}),Object(j.jsxs)("form",{className:"flex flex-col",children:[Object(j.jsx)("input",{className:" w-full h-10 border border-gray-300 rounded-lg p-2",type:"text",placeholder:"\uc804\ud654\ubc88\ud638",value:a,onChange:function(e){return s(e.target.value)}}),""!==u&&Object(j.jsx)("div",{className:" text-red-500 text-sm",children:u}),Object(j.jsx)("button",{className:"w-full h-10 my-4 bg-blue-500 text-white border rounded-lg p-2 active:bg-blue-400",type:"button",onClick:function(e){e.preventDefault(),(""!==a||f)&&(O(!0),fetch("http://localhost:8080/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.ok?(localStorage.setItem("token",e.token),t(!0)):d("\uc544\uc774\ub514\uac00 \ud2c0\ub838\uc2b5\ub2c8\ub2e4.")})).catch((function(){return d("\uc11c\ubc84\uc640\uc758 \uc5f0\uacb0 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4.")})).finally((function(){return O(!1)})))},children:f?"...":"\ub85c\uadf8\uc778"})]}),Object(j.jsxs)("div",{className:"text-sm",children:["\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"," ",Object(j.jsx)(r.b,{to:"/SNS-RS/join",className:" text-blue-500 font-bold",children:"\uac00\uc785\ud558\uae30"})]})]})})},d=n(11),h=n(19),x=n(7),f=function(e){var t=e.setPath;t&&t();var n=localStorage.getItem("token"),c=l.a.useState(0),a=Object(o.a)(c,2),s=a[0],r=a[1],i=l.a.useState(!0),b=Object(o.a)(i,2),u=b[0],f=b[1],O=l.a.useState({0:{list:[],error:null,loading:!1,page:0,total:0},1:{list:[],error:null,loading:!1,page:0,total:0},2:{list:[],error:null,loading:!1,page:0,total:0}}),m=Object(o.a)(O,2),p=m[0],g=m[1];return l.a.useEffect((function(){u&&(g(Object(x.a)(Object(x.a)({},p),{},Object(d.a)({},s,Object(x.a)(Object(x.a)({},p[s]),{},{loading:!0})))),fetch("http://localhost:8080"+["/recommend","/follows","/followers"][s]+"?page="+(p[s].page+1),{method:"GET",headers:{"Content-Type":"application/json","x-access-token":n}}).then((function(e){return e.json()})).then((function(e){console.log(e),e.ok&&g(Object(x.a)(Object(x.a)({},p),{},Object(d.a)({},s,{loading:!1,list:[].concat(Object(h.a)(p[s].list),Object(h.a)(e.list)),error:null,page:e.page,total:e.total})))})),f(!1))}),[u]),Object(j.jsxs)("div",{className:" w-3/4 mx-auto mt-10 flex flex-col flex-1",children:[Object(j.jsxs)("ul",{className:"ml-4 flex text-gray-700",children:[Object(j.jsx)("li",{className:"cursor-pointer mr-4 ".concat(0===s&&"text-blue-500"),onClick:function(){return 0!==s&&r(0)},children:"\ucd94\ucc9c"}),Object(j.jsx)("li",{className:"cursor-pointer mr-4 ".concat(1===s&&"text-blue-500"),onClick:function(){return 1!==s&&r(1)},children:"\ud314\ub85c\uc6b0"}),Object(j.jsx)("li",{className:"cursor-pointer mr-4 ".concat(2===s&&"text-blue-500"),onClick:function(){return 2!==s&&r(2)},children:"\ud314\ub85c\uc6cc"})]}),Object(j.jsx)("ul",{className:"flex-1 bg-white mt-2 rounded-sm border",children:p[s].list.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:e.phoneNumber}),Object(j.jsx)("button",{onClick:function(){var t;g(Object(x.a)(Object(x.a)({},p),{},Object(d.a)({},s,Object(x.a)(Object(x.a)({},p[s]),{},{list:p[s].list.map((function(t){return t.id===e.id?Object(x.a)(Object(x.a)({},t),{},{isFollow:!t.isFollow}):t}))})))),e.isFollow?(t=e.id,fetch("http://localhost:8080/unfollow?opponent="+t,{method:"GET",headers:{"Content-Type":"application/json","x-access-token":n}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))):function(e){fetch("http://localhost:8080/follow?opponent="+e,{method:"GET",headers:{"Content-Type":"application/json","x-access-token":n}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}(e.id)},children:e.isFollow?"\uc5b8\ud314\ub85c\uc6b0":"\ud314\ub85c\uc6b0"})]})},e.id)}))})]})};var O=function(){var e=l.a.useState(Boolean(localStorage.getItem("token"))),t=Object(o.a)(e,2),n=t[0],c=t[1],a=l.a.useState(0),s=Object(o.a)(a,2),d=s[0],h=s[1];return Object(j.jsx)("div",{className:"h-screen flex flex-col",children:Object(j.jsx)(r.a,{children:Object(j.jsx)(i.d,{children:n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"w-screen h-12 flex justify-end items-center px-12 border-b border-gray-300 bg-white",children:[Object(j.jsx)(r.b,{to:"/SNS-RS/friends",className:"text-gray-700 mr-4 ".concat(0===d&&"text-blue-500"),children:"\uce5c\uad6c\ub4e4"}),Object(j.jsx)(r.b,{to:"/SNS-RS/update",className:"text-gray-700 mr-4 ".concat(1===d&&"text-blue-500"),children:"\uc815\ubcf4\uc218\uc815"}),Object(j.jsx)("span",{className:"text-gray-700 cursor-pointer",onClick:function(){localStorage.removeItem("token"),c(!1)},children:"\ub85c\uadf8\uc544\uc6c3"})]}),Object(j.jsx)(i.b,{path:"/SNS-RS/friends",children:Object(j.jsx)(f,{setPath:function(){return h(0)}})}),Object(j.jsx)(i.b,{path:"/SNS-RS/update",children:Object(j.jsx)(b,{alter:!0,setPath:function(){return h(1)}})}),Object(j.jsx)(i.b,{path:"*",children:Object(j.jsx)(i.a,{to:"/SNS-RS/friends"})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.b,{path:"/SNS-RS/login",children:Object(j.jsx)(u,{setLogin:c})}),Object(j.jsx)(i.b,{path:"/SNS-RS/join",children:Object(j.jsx)(b,{})}),Object(j.jsx)(i.b,{path:"*",children:Object(j.jsx)(i.a,{to:"/SNS-RS/login"})})]})})})})};n(33);s.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b9c5f797.chunk.js.map