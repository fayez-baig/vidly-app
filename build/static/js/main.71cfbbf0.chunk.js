(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{47:function(e,t,a){e.exports=a(93)},52:function(e,t,a){},84:function(e){e.exports=JSON.parse("{}")},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),s=a(97),l=(a(52),a(3)),i=a(6),u=a(5),m=a(4),p=a(98),d=a(46),v=a(96),h=a(30),f=a(2),b=a.n(f),g=a(7),k=a(18),E=a(16),y=a.n(E),O=a(10);y.a.defaults.baseURL="https://shrouded-river-68402.herokuapp.com/api",y.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<=500||O.toast.error("An unexpected error occurrred."),Promise.reject(e)}));var j={get:y.a.get,post:y.a.post,put:y.a.put,delete:y.a.delete},S=function(e){return j.get("/movies/".concat(e))},w=function(e){return j.delete("/movies/".concat(e))},C=function(e){if(e._id){var t=Object(k.a)({},e);return delete t._id,j.put("/movies/".concat(e._id),t)}return j.post("/movies",e)},x=(a(84),function(){return j.get("/genres")}),N=function(e){var t=e.values,a=e.textProperty,n=e.valueProperty,o=e.onItemSelect,c=e.selectedGenre;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{style:{cursor:"pointer"},className:c===e?"list-group-item active":"list-group-item",key:e[n],onClick:function(){return o(e)}},e[a])})))};N.defaultProps={textProperty:"name",value:"_id"};var I,P=N,R=a(14),T=a.n(R),L=function(e){var t=e.itemCount,a=e.pageSize,n=e.onPageChange,o=e.currentPage,c=Math.ceil(t/a);if(1===c)return"";var s=T.a.range(1,c+1);return r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},s.map((function(e){return r.a.createElement("li",{className:e===o?"page-item active":"page-item ",key:e,onClick:function(){return n(e)}},r.a.createElement("a",{className:"page-link"},e))}))))},_=a(45),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).raiseSort=function(t){var a=Object(k.a)({},e.props.sortColoumn);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.renderSortIcon=function(t){var a=e.props.sortColoumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.coloumns.map((function(t){return r.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return e.raiseSort(t.path)},key:t.path||t.key},t.label,e.renderSortIcon(t))}))))}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"renderCell",value:function(e,t){return t.content?t.content(e):T.a.get(e,t.path)}},{key:"render",value:function(){var e=this,t=this.props,a=t.movies,n=t.coloumns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:t._id+(a.path||a.key)},e.renderCell(t,a))})))})))}}]),a}(n.Component),A=function(e){var t=e.coloumns,a=e.sortColoumn,n=e.onSort,o=e.movies,c=e.onDelete,s=e.onLike;return r.a.createElement(_.a,{responsive:!0},r.a.createElement(D,{coloumns:t,sortColoumn:a,onSort:n}),r.a.createElement(M,{movies:o,onDelete:c,onLike:s,coloumns:t}))},G=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t})},q=a(29),F=a(43),B=a.n(F);function U(e,t){return z.apply(this,arguments)}function z(){return(z=Object(g.a)(b.a.mark((function e(t,a){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.post("/auth",{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem("token",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){localStorage.setItem("token",e)}function V(){try{var e=localStorage.getItem("token");return B()(e)}catch(t){return null}}I=localStorage.getItem("token"),y.a.defaults.headers.common["x-auth-token"]=I;var W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a),(e=t.call(this)).coloumns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(q.a,{to:"/movie-form/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",label:"Like ",content:function(t){return r.a.createElement(G,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColoumn={key:"delete",content:function(t){return r.a.createElement("button",{onClick:function(){return e.props.onDelete(t._id)},className:"btn btn-danger btn-sm"},"DELETE")}};var n=V();return n&&n.isAdmin&&e.coloumns.push(e.deleteColoumn),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onDelete,n=e.onLike,o=e.sortColoumn,c=e.onSort;return r.a.createElement(A,{movies:t,onDelete:a,onLike:n,sortColoumn:o,onSort:c,coloumns:this.coloumns})}}]),a}(n.Component);function $(e,t,a){var n=(t-1)*a;return T()(e).slice(n).take(a).value()}var H=function(e){var t=e.name,a=e.value,n=e.onChange;return r.a.createElement("input",{value:a,name:t,onChange:n,type:"text",className:"form-control"})},K=(a(42),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],pageSize:4,currentPage:1,genreList:[],searched:"",sortColoumn:{path:"title",order:"asc"},selectedGenre:!1},e.handleDelete=function(){var t=Object(g.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.movies,r=n.filter((function(e){return e._id!==a})),e.setState({movies:r}),t.prev=3,t.next=6,w(a);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&500===t.t0.response.status&&(O.toast.error("Movie not found"),e.setState({movies:n}));case 11:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleSelect=function(t){e.setState({selectedGenre:t,currentPage:1})},e.handleSort=function(t){e.setState({sortColoumn:t})},e.handleSearch=function(t){var a=t.currentTarget.value;e.setState({searched:a,selectedGenre:null,currentPage:1})},e.getPagedData=function(){var t=e.state,a=t.movies,n=t.currentPage,r=t.selectedGenre,o=t.sortColoumn,c=t.pageSize,s=t.searched,l=a;s?l=a.filter((function(e){return e.title.toLowerCase().includes(s)})):r&&r._id&&(l=r&&r._id?e.state.movies.filter((function(t){return t.genre.name===e.state.selectedGenre.name})):a);var i=$(T.a.orderBy(l,[o.path],[o.order]),n,c);return{totalCount:l.length,data:i}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/movies");case 2:return t=e.sent,e.next=5,x();case 5:a=e.sent,n=a.data,r=[{_id:"",name:"All Genre"}].concat(Object(h.a)(n)),this.setState({movies:t.data,genreList:r});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleLike",value:function(e){var t=Object(h.a)(this.state.movies),a=t.indexOf(e);t[a].liked=!t[a].liked,this.setState({movies:t})}},{key:"handlePageChange",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.currentPage,a=e.sortColoumn,n=e.pageSize,o=e.searched,c=this.props.user,s=this.getPagedData(),l=s.totalCount,i=s.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.ToastContainer,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col"},r.a.createElement(P,{values:this.state.genreList,onItemSelect:this.handleSelect.bind(this),selectedGenre:this.state.selectedGenre})),r.a.createElement("div",{className:"col-md-9 col"},c&&r.a.createElement(q.a,{to:"/movie-form/new/",className:"btn btn-primary"},"Save"),r.a.createElement("p",null,"The Total Record in database is: ",l),r.a.createElement(H,{value:o,onChange:this.handleSearch}),r.a.createElement(W,{movies:i,sortColoumn:a,onDelete:this.handleDelete,onLike:this.handleLike.bind(this),onSort:this.handleSort.bind(this)}),r.a.createElement(L,{itemCount:l,currentPage:t,pageSize:n,onPageChange:this.handlePageChange.bind(this)}))))}}]),a}(n.Component)),Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Requested page not found")}}]),a}(n.Component),X=a(95),Y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(X.a,{className:"navbar-brand",to:"/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(X.a,{className:"nav-item nav-link",to:"/movies"},"Movies"),!e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{className:"nav-item nav-link",to:"/login"},"Login"),r.a.createElement(X.a,{className:"nav-item nav-link",to:"/register"},"Register")),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{className:"nav-item nav-link",to:"/movies"},e.name),r.a.createElement(X.a,{className:"nav-item nav-link",to:"/logout"},"Logout")))))}}]),a}(n.Component),Z=a(8),ee=a.n(Z),te=a(21),ae=a(44),ne=a(26),re=function(e){var t=e.name,a=e.label,n=e.error,o=Object(ne.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({name:t},o,{className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},oe=function(e){var t=e.label,a=e.name,n=e.options,o=e.onChange,c=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:t},t),r.a.createElement("select",{name:a,className:"form-control mb-3",id:"inputGroupSelect01",onChange:o},n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),c&&r.a.createElement("div",{className:"alert alert-danger"},c))},ce=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:{},error:{}},e.validate=function(){var t=e.state.data,a=ee.a.validate(t,e.schema,{abortEarly:!1}).error;if(!a)return null;var n,r={},o=Object(ae.a)(a.details);try{for(o.s();!(n=o.n()).done;){var c=n.value;r[c.path[0]]=c.message}}catch(s){o.e(s)}finally{o.f()}return r},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({error:a||{}}),e.doSubmit()},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(te.a)({},a,n),o=Object(te.a)({},a,e.schema[a]),c=ee.a.validate(r,o).error;return c?c.details[0].message:null},e.handleChange=function(t){var a=Object(k.a)({},e.state.error),n=e.validateProperty(t.currentTarget);n?a[t.currentTarget.name]=n:delete a[t.currentTarget.name];var r=Object(k.a)({},e.state.data);r[t.currentTarget.name]=t.currentTarget.value,e.setState({data:r,error:a})},e.renderButton=function(t){return r.a.createElement("button",{className:"btn btn-primary",disabled:e.validate()},t)},e.renderInput=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",o=e.state,c=o.data,s=o.error;return r.a.createElement(re,{label:a,name:t,value:c[t],onChange:e.handleChange,error:s[t],type:n})},e.renderSelect=function(t,a,n){var o=e.state,c=o.data,s=o.error;return r.a.createElement(oe,{name:t,label:a,value:c[t],onChange:e.handleChange,error:s[t],options:n})},e}return a}(n.Component),se=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],error:{}},e.schema={_id:ee.a.string(),title:ee.a.string().required().label("Title"),numberInStock:ee.a.number().min(0).max(100).required().label("Number in Stock"),dailyRentalRate:ee.a.number().min(0).max(10).required().label("Rate"),genreId:ee.a.required()},e.populateGenre=Object(g.a)(b.a.mark((function t(){var a,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:a=t.sent,n=a.data,r=n,e.setState({genres:r});case 6:case"end":return t.stop()}}),t)}))),e.populateMovie=Object(g.a)(b.a.mark((function t(){var a,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("new"!==(a=e.props.match.params.id)){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,S(a);case 6:n=t.sent,r=n.data,e.setState({data:e.mapToViewModel(r)}),t.next=15;break;case 11:if(t.prev=11,t.t0=t.catch(3),!t.t0.response||404!==t.t0.response.status){t.next=15;break}return t.abrupt("return",e.props.history.replace("/not-found"));case 15:case"end":return t.stop()}}),t,null,[[3,11]])}))),e.doSubmit=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenre();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){var e=this.state.genres;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",e),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate","number"),this.renderButton("Add Movie")))}}]),a}(ce),le=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},error:{}},e.schema={username:ee.a.string().required().label("Username"),password:ee.a.string().required().label("Password")},e.doSubmit=Object(g.a)(b.a.mark((function t(){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state.data,t.next=4,U(a.username,a.password);case 4:O.toast.success("Login  Successfully"),n=e.props.location.state,setTimeout((function(){return window.location=n?n.from.pathname:"/"}),1e3),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&O.toast.error("Invalid Username or Password");case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return V()?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement(O.ToastContainer,null),r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Submit")))}}]),a}(ce),ie=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.removeItem("token"),window.location="/"}},{key:"render",value:function(){return null}}]),a}(n.Component);function ue(e){return me.apply(this,arguments)}function me(){return(me=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.post("/users",{email:t.username,password:t.password,name:t.name});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var pe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},error:{}},e.schema={username:ee.a.string().email().required().label("Username"),password:ee.a.string().min(5).required().label("Password"),name:ee.a.string().required().label("Name")},e.doSubmit=Object(g.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ue(e.state.data);case 3:a=t.sent,J(a.headers["x-auth-token"]),Object(O.toast)("Registered Successfully"),setTimeout((function(){return window.location="/"}),1e3),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&O.toast.error("User already Registered");case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return V()?r.a.createElement(v.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement(O.ToastContainer,null),r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username","email"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")))}}]),a}(ce),de=(a(90),a(91),a(92),function(e){e.path;var t=e.component,a=e.render,n=Object(ne.a)(e,["path","component","render"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return V()?t?r.a.createElement(t,e):a(e):r.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),ve=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=V();this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{user:e}),r.a.createElement("main",{className:"container mt-4"},r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/notfound",component:Q}),r.a.createElement(d.a,{path:"/login",component:le}),r.a.createElement(d.a,{path:"/register",component:pe}),r.a.createElement(d.a,{path:"/logout",component:ie}),r.a.createElement(de,{path:"/movie-form/:id",component:se}),r.a.createElement(d.a,{exact:!0,path:"/movies",render:function(t){return r.a.createElement(K,Object.assign({},t,{user:e}))}}),r.a.createElement(v.a,{exact:!0,from:"/",to:"/movies"}),r.a.createElement(v.a,{to:"/notfound"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.71cfbbf0.chunk.js.map