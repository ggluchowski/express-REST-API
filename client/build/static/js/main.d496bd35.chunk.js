(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,r){},115:function(e,t,r){},116:function(e,t,r){},140:function(e,t){},143:function(e,t,r){},150:function(e,t,r){},151:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),n=r(28),s=r.n(n),o=r(47),i=r(23),l=r(26),u=r(77),j=r(25),d=r(7),h=r(10),O=r.n(h),p=r(20),b=r(30),m=r.n(b),f="/api",x=function(e){return"app/".concat("concerts","/").concat(e)},v=x("START_REQUEST"),y=x("END_REQUEST"),S=x("ERROR_REQUEST"),_=x("LOAD_CONCERTS"),g={data:[],request:{pending:!1,error:null,success:null}};var E=r(21),k=function(e){return e.seats.requests},T=function(e){return"app/".concat("seats","/").concat(e)},D=T("START_REQUEST"),A=T("END_REQUEST"),N=T("ERROR_REQUEST"),w=T("LOAD_SEATS"),R=T("ADD_SEAT"),C=function(e){return{payload:e,type:D}},q=function(e){return{payload:e,type:A}},L=function(e){return{payload:e,type:N}},F=function(e){return{payload:e,type:w}},P={data:[],requests:[]};var U=Object(l.c)({concerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case _:return Object(d.a)(Object(d.a)({},e),{},{data:Object(j.a)(t.payload)});case v:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!0,error:null,success:!1}});case y:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!1,error:null,success:!0}});case S:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!1,error:t.error,success:!1}});default:return e}},seats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{data:Object(j.a)(t.payload)});case R:return Object(d.a)(Object(d.a)({},e),{},{data:[].concat(Object(j.a)(e.data),[t.payload])});case D:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(E.a)({},t.payload.name,{pending:!0,error:null,success:!1}))});case A:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(E.a)({},t.payload.name,{pending:!1,error:null,success:!0}))});case N:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(E.a)({},t.payload.name,{pending:!1,error:t.payload.error,success:!1}))});default:return e}}}),H=Object(l.e)(U,Object(l.d)(Object(l.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),W=r(15),I=r(16),M=r(19),K=r(18),Q=r(24),J=r(152),V=r(153),X=r(154),Y=r(155),$=r(156),B=r(157),G=r(158),z=r(159),Z=r(2),ee=function(e){Object(M.a)(r,e);var t=Object(K.a)(r);function r(){var e;Object(W.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(I.a)(r,[{key:"render",value:function(){return Object(Z.jsx)("div",{children:Object(Z.jsxs)(J.a,{color:"dark",dark:!0,expand:"md",children:[Object(Z.jsx)(V.a,{href:"/",children:"New Wave Festival"}),Object(Z.jsx)(X.a,{onClick:this.toggle}),Object(Z.jsx)(Y.a,{isOpen:this.state.isOpen,navbar:!0,children:Object(Z.jsxs)($.a,{className:"ml-auto align-items-center",navbar:!0,children:[Object(Z.jsx)(B.a,{children:Object(Z.jsx)(G.a,{href:"/",children:"Home"})}),Object(Z.jsx)(B.a,{children:Object(Z.jsx)(G.a,{href:"/prices",children:"Prices"})}),Object(Z.jsx)(B.a,{children:Object(Z.jsx)(G.a,{href:"/order-a-ticket",children:Object(Z.jsx)(z.a,{outline:!0,color:"primary",children:"Order a ticket!"})})})]})})]})})}}]),r}(c.a.Component),te=ee,re=function(){return Object(Z.jsx)("footer",{id:"sticky-footer",className:"py-4 mt-5 bg-dark text-white-50",children:Object(Z.jsx)("div",{className:"text-center",children:Object(Z.jsx)("small",{children:"Copyright \xa9 New Wave Festival 2019"})})})},ae=function(e){var t=e.children;return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(te,{}),t,Object(Z.jsx)(re,{})]})},ce=r(163),ne=r(168),se=(r(114),[{src:"/img/promo/promo1.jpg",header:"Great atmosphere!",caption:"Have fun with thousands of people!",alt:"Have fun with thousands of people!"},{src:"/img/promo/promo2.jpg",altText:"Listen to the greatest hits!",caption:"Take a part in phenomenal performances.",header:"Listen to the greatest hits"},{src:"/img/promo/promo3.jpg",altText:"Meet stars!",caption:"Meet the biggest music starts live!",header:"Meet stars!"}]),oe=function(){return Object(Z.jsx)(ne.a,{className:"promoCarousel",items:se})},ie=r(162),le=r(169),ue=r(160),je=r(161),de=(r(115),function(e){var t=e.performer,r=e.price,a=e.genre,c=e.day,n=e.image;return Object(Z.jsx)("article",{className:"concert",children:Object(Z.jsxs)(ue.a,{noGutters:!0,children:[Object(Z.jsx)(je.a,{xs:"6",children:Object(Z.jsx)("div",{className:"concert__image-container",children:Object(Z.jsx)("img",{className:"concert__image-container__img",src:n,alt:t})})}),Object(Z.jsx)(je.a,{xs:"6",children:Object(Z.jsxs)("div",{className:"concert__info",children:[Object(Z.jsx)("img",{className:"concert__info__back",src:n,alt:t}),Object(Z.jsx)("h2",{className:"concert__info__performer",children:t}),Object(Z.jsx)("h3",{className:"concert__info__genre",children:a}),Object(Z.jsxs)("p",{className:"concert__info__day-n-price",children:["Day: ",c,", Price: ",r,"$"]})]})})]})})}),he=function(e){var t=e.concerts;return Object(Z.jsx)("section",{children:t.map((function(e){return Object(Z.jsx)(de,Object(d.a)({},e),e.id)}))})},Oe=function(e){Object(M.a)(r,e);var t=Object(K.a)(r);function r(){return Object(W.a)(this,r),t.apply(this,arguments)}return Object(I.a)(r,[{key:"componentDidMount",value:function(){(0,this.props.loadConcerts)()}},{key:"render",value:function(){var e=this.props,t=e.request,r=e.concerts;return t.pending?Object(Z.jsx)(ie.a,{animated:!0,color:"primary",value:50}):t.error?Object(Z.jsx)(le.a,{color:"warning",children:t.error}):t.success&&r.length?t.success?Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(he,{concerts:r})}):void 0:Object(Z.jsx)(le.a,{color:"info",children:"No concerts"})}}]),r}(c.a.Component),pe=Oe,be=Object(i.b)((function(e){return{concerts:(r=e,r.concerts.data),request:(t=e,t.concerts.request)};var t,r}),(function(e){return{loadConcerts:function(){return e(function(){var e=Object(p.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v}),e.prev=1,e.next=4,m.a.get("".concat(f,"/concerts"));case 4:r=e.sent,t({payload:r.data,type:_}),t({type:y}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({error:e.t0.message,type:S});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}}}))(pe),me=function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(oe,{}),Object(Z.jsxs)(ce.a,{children:[Object(Z.jsx)("h1",{children:"Who's on?"}),Object(Z.jsx)(be,{})]})]})},fe=function(){return Object(Z.jsx)("div",{children:Object(Z.jsx)("h1",{children:"404 Not Found"})})},xe=function(){return Object(Z.jsxs)(ce.a,{children:[Object(Z.jsx)("h1",{children:"Prices"}),Object(Z.jsx)("p",{children:"Prices may differ according the day of the festival. Remember that ticket includes not only the star performance, but also 10+ workshops. We gathered several genre teachers to help you increase your vocal skills, as well as self confidence."}),Object(Z.jsxs)(le.a,{color:"info",children:["Attention! ",Object(Z.jsx)("strong",{children:"Children under 4 can go freely with you without any other fee!"})]}),Object(Z.jsx)("h2",{children:"Day one"}),Object(Z.jsx)("p",{children:"Price: 25$"}),Object(Z.jsx)("p",{children:'Workshops: "Rock Music Style", "How to make you voice grooowl", "Make your voice stronger", "History of Rock"'}),Object(Z.jsx)("h2",{children:"Day Two"}),Object(Z.jsx)("p",{children:"Price: 25$"}),Object(Z.jsx)("p",{children:'Workshops: "Find your real tune", "Find your real YOU", "Fell the music", "Jam session"'}),Object(Z.jsx)("h2",{children:"Day three"}),Object(Z.jsx)("p",{children:"Price: 50$"}),Object(Z.jsx)("p",{children:'Workshops: "Increase your vocal range", "How to properly warmup before singing", "It\'s time for YOU!"'})]})},ve=r(164),ye=r(165),Se=r(166),_e=r(167),ge=(r(116),r(39)),Ee=r(49),ke=r.n(Ee),Te=(r(143),function(e){Object(M.a)(r,e);var t=Object(K.a)(r);function r(){var e;Object(W.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).isTaken=function(t){var r=e.props,a=r.seats,c=r.chosenDay;return a.some((function(e){return e.seat===t&&e.day===c}))},e.prepareSeat=function(t){var r=e.props,a=r.chosenSeat,c=r.updateSeat,n=Object(ge.a)(e).isTaken;return t===a?Object(Z.jsx)(z.a,{className:"seats__seat",color:"primary",children:t},t):n(t)?Object(Z.jsx)(z.a,{className:"seats__seat",disabled:!0,color:"secondary",children:t},t):Object(Z.jsx)(z.a,{color:"primary",className:"seats__seat",outline:!0,onClick:function(e){return c(e,t)},children:t},t)},e.countChosenSeat=function(e){var t=0;return e.map((function(e){return e.props.disabled&&t++,t})),t},e}return Object(I.a)(r,[{key:"componentDidMount",value:function(){this.socket=ke()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||"http://localhost:8000"),(0,this.props.loadSeats)()}},{key:"componentDidUpdate",value:function(){this.socket=ke()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||"http://localhost:8000");var e=this.props.loadSeatsData;this.socket.on("seatsUpdated",function(){var t=Object(p.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var e,t,r=this.prepareSeat,a=this.props.requests,c=[];return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h3",{children:"Pick a seat"}),Object(Z.jsxs)("small",{id:"pickHelp",className:"form-text text-muted ml-2",children:[Object(Z.jsx)(z.a,{color:"secondary"})," \u2013 seat is already taken"]}),Object(Z.jsxs)("small",{id:"pickHelpTwo",className:"form-text text-muted ml-2 mb-4",children:[Object(Z.jsx)(z.a,{outline:!0,color:"primary"})," \u2013 it's empty"]}),a.LOAD_SEATS&&a.LOAD_SEATS.success&&Object(Z.jsx)("div",{className:"seats",children:c=Object(j.a)(Array(50)).map((function(e,t){return r(t+1)}))}),Object(Z.jsxs)("div",{className:"freeSeats",children:[Object(Z.jsxs)("div",{className:"displayNone",children:[e=this.countChosenSeat(c),t=c.length]}),"Free seats: ",t-e+"/"+t]}),a.LOAD_SEATS&&a.LOAD_SEATS.pending&&Object(Z.jsx)(ie.a,{animated:!0,color:"primary",value:50}),a.LOAD_SEATS&&a.LOAD_SEATS.error&&Object(Z.jsx)(le.a,{color:"warning",children:"Couldn't load seats..."})]})}}]),r}(c.a.Component)),De=Te,Ae=Object(i.b)((function(e){return{seats:(t=e,t.seats.data),requests:k(e)};var t}),(function(e){return{loadSeats:function(){return e(function(){var e=Object(p.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C({name:"LOAD_SEATS"})),e.prev=1,e.next=4,m.a.get("".concat(f,"/seats"));case 4:r=e.sent,t(F(r.data)),t(q({name:"LOAD_SEATS"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(L({name:"LOAD_SEATS",error:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())},loadSeatsData:function(t){return e(F(t))}}}))(De),Ne=function(e){Object(M.a)(r,e);var t=Object(K.a)(r);function r(){var e;Object(W.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={order:{client:"",email:"",day:1,seat:""},isError:!1,timer:null,time:120},e.updateSeat=function(t,r){var a=e.state.order;t.preventDefault(),e.setState({order:Object(d.a)(Object(d.a)({},a),{},{seat:r})})},e.updateTextField=function(t){var r=t.target,a=e.state.order,c=r.value,n=r.name;e.setState({order:Object(d.a)(Object(d.a)({},a),{},Object(E.a)({},n,c))})},e.updateNumberField=function(t){var r=t.target,a=e.state.order,c=r.value,n=r.name;e.setState({order:Object(d.a)(Object(d.a)({},a),{},Object(E.a)({},n,parseInt(c)))})},e.submitForm=function(){var t=Object(p.a)(O.a.mark((function t(r){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.order,c=e.props.addSeat,r.preventDefault(),!(a.client&&a.email&&a.day&&a.seat)){t.next=9;break}return t.next=6,c(a);case 6:e.setState({order:{client:"",email:"",day:1,seat:""},isError:!1}),t.next=10;break;case 9:e.setState({isError:!0});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(I.a)(r,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"step",value:function(){this.setState({time:this.state.time-1}),0===this.state.time&&(this.setState({time:120}),this.props.loadSeats())}},{key:"startTimer",value:function(){var e=this;this.setState({timer:setInterval((function(){return e.step()}),1e3)})}},{key:"render",value:function(){var e=this.updateSeat,t=this.updateTextField,r=this.updateNumberField,a=this.submitForm,c=this.props.requests,n=this.state,s=n.order,o=n.isError;return Object(Z.jsx)(ve.a,{className:"order-ticket-form",onSubmit:a,children:Object(Z.jsxs)(ue.a,{children:[Object(Z.jsxs)(je.a,{xs:"12",md:"6",children:[o&&Object(Z.jsx)(le.a,{color:"warning",children:"There are some errors in you form. Have you fill all the fields? Maybe you forgot to choose your seat?"}),c.ADD_SEAT&&c.ADD_SEAT.error&&!o&&Object(Z.jsx)(le.a,{color:"danger",children:c.ADD_SEAT.error}),c.ADD_SEAT&&c.ADD_SEAT.success&&!o&&Object(Z.jsx)(le.a,{color:"success",children:"You've booked your ticket! Check you email in order to make a payment."}),c.ADD_SEAT&&c.ADD_SEAT.pending&&Object(Z.jsx)(ie.a,{animated:!0,className:"mb-5",color:"primary",value:75}),Object(Z.jsxs)(ye.a,{children:[Object(Z.jsx)(Se.a,{for:"clientEmail",children:"Name"}),Object(Z.jsx)(_e.a,{type:"text",value:s.client,name:"client",onChange:t,id:"clientName",placeholder:"John Doe"})]}),Object(Z.jsxs)(ye.a,{children:[Object(Z.jsx)(Se.a,{for:"clientEmail",children:"Email"}),Object(Z.jsx)(_e.a,{type:"email",value:s.email,name:"email",onChange:t,id:"clientEmail",placeholder:"johndoe@example.com"})]}),Object(Z.jsxs)(ye.a,{children:[Object(Z.jsx)(Se.a,{for:"clientDay",children:"Select which day of festivals are you interested in:"}),Object(Z.jsxs)(_e.a,{type:"select",value:s.day,name:"day",onChange:r,id:"exampleSelect",children:[Object(Z.jsx)("option",{children:"1"}),Object(Z.jsx)("option",{children:"2"}),Object(Z.jsx)("option",{children:"3"})]}),Object(Z.jsx)("small",{id:"dayHelp",className:"form-text text-muted",children:"Every day of the festival uses individual ticket. You can book only one ticket at the time."})]}),Object(Z.jsx)(ye.a,{check:!0,children:Object(Z.jsxs)(Se.a,{check:!0,children:[Object(Z.jsx)(_e.a,{required:!0,type:"checkbox"})," I agree with ",Object(Z.jsx)("a",{href:"#",children:"Terms and conditions"})," and ",Object(Z.jsx)("a",{href:"#",children:"Privacy Policy"}),"."]})}),Object(Z.jsx)(z.a,{color:"primary",className:"mt-3",children:"Submit"})]}),Object(Z.jsx)(je.a,{xs:"12",md:"6",children:Object(Z.jsx)(Ae,{chosenDay:s.day,chosenSeat:s.seat,updateSeat:e})})]})})}}]),r}(c.a.Component),we=Ne,Re=Object(i.b)((function(e){return{requests:k(e)}}),(function(e){return{addSeat:function(t){return e(function(e){return function(){var t=Object(p.a)(O.a.mark((function t(r){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(C({name:"ADD_SEAT"})),t.prev=1,t.next=4,m.a.post("".concat(f,"/seats"),e);case 4:a=t.sent,r({payload:a,type:R}),r(q({name:"ADD_SEAT"})),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),r(L({name:"ADD_SEAT",error:"The slot is already taken..."}));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(we),Ce=function(){return Object(Z.jsxs)(ce.a,{children:[Object(Z.jsx)("h1",{children:"Order a ticket"}),Object(Z.jsx)(Re,{})]})},qe=function(e){Object(M.a)(r,e);var t=Object(K.a)(r);function r(){return Object(W.a)(this,r),t.apply(this,arguments)}return Object(I.a)(r,[{key:"render",value:function(){return Object(Z.jsx)(ae,{children:Object(Z.jsxs)(Q.c,{children:[Object(Z.jsx)(Q.a,{path:"/",exact:!0,component:me}),Object(Z.jsx)(Q.a,{path:"/prices",exact:!0,component:xe}),Object(Z.jsx)(Q.a,{path:"/order-a-ticket",exact:!0,component:Ce}),Object(Z.jsx)(Q.a,{component:fe})]})})}}]),r}(c.a.Component),Le=qe,Fe=(r(149),r(150),function(){return Object(Z.jsx)(i.a,{store:H,children:Object(Z.jsx)(o.a,{children:Object(Z.jsx)(Le,{})})})});s.a.render(Object(Z.jsx)(Fe,{}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.d496bd35.chunk.js.map