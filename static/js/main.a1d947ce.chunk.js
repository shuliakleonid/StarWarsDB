(this["webpackJsonpstar-db"]=this["webpackJsonpstar-db"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(20),s=n.n(a),i=n(2),o=(n(31),n(6)),l=n(0),j=function(){return Object(l.jsxs)("div",{className:"header d-flex",children:[Object(l.jsx)("h3",{children:Object(l.jsx)(o.b,{to:"/",children:"StarDB"})}),Object(l.jsxs)("ul",{className:"d-flex",children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/people/",activeClassName:"active",children:"People"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/planets/",activeClassName:"active",children:"Planets"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/starships/",activeClassName:"active",children:"Starships"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/login",children:"Login"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/secret",children:"Secret"})})]})]})},u=(n(37),n(4)),d=n.n(u),b=n(8),h=n(10),m=function e(){var t=this;Object(h.a)(this,e),this._apiBase="https://swapi.dev/api",this._imageBase="https://starwars-visualguide.com/assets/img/",this.getResource=function(){var e=Object(b.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Error ".concat(n,", received ").concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPerson));case 4:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(b.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformPerson(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPlanet));case 4:case"end":return e.stop()}}),e)}))),this.getPlanet=function(){var e=Object(b.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformPlanet(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarShips=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformStarship));case 4:case"end":return e.stop()}}),e)}))),this.getStarship=function(){var e=Object(b.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(n));case 2:return r=e.sent,e.abrupt("return",t._transformStarship(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){return t._imageBase+"characters/".concat(e,".jpg")},this.getPlanetImage=function(e){return t._imageBase+"planets/".concat(e,".jpg")},this.getStarshipImage=function(e){return t._imageBase+"starships/".concat(e,".jpg")},this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacture:e.manufacture,costInCredits:e.costInCredits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargoCapacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}},O=(n(39),function(){return Object(l.jsx)("div",{className:"lds-css",children:Object(l.jsxs)("div",{className:"lds-double-ring",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})}),p=(n(40),function(){return Object(l.jsxs)("div",{className:"error-indicator",children:[Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"error icon"}),Object(l.jsx)("span",{className:"boom",children:"BOOM!"}),Object(l.jsx)("span",{children:"something has gone terribly wrong"}),Object(l.jsx)("span",{children:"(but we already sent droids to fix it)"})]})}),x=n(22),N=function(){var e={id:null,name:null,population:null,rotationPeriod:null,diameter:null},t=!0,n=Object(r.useState)(e),c=Object(i.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(t),j=Object(i.a)(o,2),u=j[0],d=j[1],b=Object(r.useState)(!1),h=Object(i.a)(b,2),N=h[0],f=h[1];return Object(r.useEffect)((function(){var e=setInterval((function(){var e=Math.floor(15*Math.random()+2)+"";(new m).getPlanet(e).then((function(t){s({id:e,name:t.name,population:t.population,rotationPeriod:t.rotationPeriod,diameter:t.diameter}),d(!1)})).catch((function(e){return f(!0)}))}),1e4);return function(){return Object(x.clearInterval)(e)}}),[]),N?Object(l.jsx)(p,{}):Object(l.jsx)("div",{className:"random-planet jumbotron rounded",children:u?Object(l.jsx)(O,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{alt:"Planet",className:"planet-image",src:"https://starwars-visualguide.com/assets/img/planets/".concat(a.id?a.id:"5",".jpg")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:a.name}),Object(l.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"term",children:"Population"}),Object(l.jsx)("span",{children:a.population})]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"term",children:"Rotation Period"}),Object(l.jsx)("span",{children:a.rotationPeriod})]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"term",children:"Diameter"}),Object(l.jsx)("span",{children:a.diameter})]})]})]})]})})},f=(n(43),n(23)),A=function(e){var t=e.items,n=e.onPersonSelected,r=e.children,c=t.map((function(e){var t=e.id,c=r(e);return Object(l.jsx)("li",{className:"list-group-item",onClick:function(){return n(t)},children:c},Object(f.v1)())}));return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{className:"item-list list-group",children:c})})},g=(n(46),function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return n&&(foo.bar=0),Object(l.jsx)("button",{className:"error-button btn btn-danger btn-lg",onClick:function(){return c(!0)},children:"Throw Error"})}),U=function(e){var t=e.item,n=e.imageUrl,r=e.children,a=t.name;return Object(l.jsxs)("div",{className:"person-details card",children:[Object(l.jsx)("img",{alt:"starWars",className:"person-image",src:n}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h4",{children:a}),Object(l.jsx)("ul",{className:"list-group list-group-flush",children:c.a.Children.map(r,(function(e){return c.a.cloneElement(e,{item:t})}))}),Object(l.jsx)(g,{})]})]})},E=function(e){var t=e.item,n=e.field,r=e.label;return Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"term",children:r}),Object(l.jsx)("span",{children:t[n]})]})},v=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(i.a)(a,2),o=s[0],j=s[1],u=Object(r.useState)("1"),d=Object(i.a)(u,2),b=d[0],h=d[1],p=Object(r.useState)(""),x=Object(i.a)(p,2),N=x[0],f=x[1];return Object(r.useEffect)((function(){var e=new m,t=e.getPersonImage;e.getAllPeople().then((function(e){return c(e)})),e.getPerson(b).then((function(e){j(e),f(t(e.id))}))}),[b]),Object(l.jsxs)("div",{className:"row mb2 ",children:[Object(l.jsx)("div",{className:"col-md-6 mt-3",children:null===n?Object(l.jsx)(O,{}):Object(l.jsx)(A,{items:n,onPersonSelected:function(e){h(e)},children:function(e){return"".concat(e.name)}})}),Object(l.jsx)("div",{className:"col-md-6",children:null===o?Object(l.jsx)(O,{}):Object(l.jsxs)(U,{item:o,imageUrl:N,children:[Object(l.jsx)(E,{field:"gender",label:"Gender"}),Object(l.jsx)(E,{field:"eyeColor",label:"Eye Color"})]})})]})},S=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(i.a)(a,2),o=s[0],j=s[1],u=Object(r.useState)("15"),d=Object(i.a)(u,2),b=d[0],h=d[1],p=Object(r.useState)(""),x=Object(i.a)(p,2),N=x[0],f=x[1];return Object(r.useEffect)((function(){var e=new m,t=e.getPlanetImage;e.getAllPlanets().then((function(e){return c(e)})),e.getPlanet(b).then((function(e){j(e),f(t(e.id))}))}),[b]),Object(l.jsxs)("div",{className:"row mb2 ",children:[Object(l.jsx)("div",{className:"col-md-6 mt-3",children:null===n?Object(l.jsx)(O,{}):Object(l.jsx)(A,{items:n,renderItem:function(e){return"".concat(e.name)},onPersonSelected:function(e){h(e)},children:function(e){return"".concat(e.name)}})}),Object(l.jsx)("div",{className:"col-md-6",children:null===o?Object(l.jsx)(O,{}):Object(l.jsxs)(U,{item:o,imageUrl:N,children:[Object(l.jsx)(E,{field:"population",label:"Population"}),Object(l.jsx)(E,{field:"rotationPeriod",label:"Rotation Period"})]})})]})},W=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(i.a)(a,2),o=s[0],j=s[1],u=Object(r.useState)("5"),d=Object(i.a)(u,2),b=d[0],h=d[1],p=Object(r.useState)(""),x=Object(i.a)(p,2),N=x[0],f=x[1];return Object(r.useEffect)((function(){var e=new m,t=e.getStarshipImage;e.getAllStarShips().then((function(e){return c(e)})),e.getStarship(b).then((function(e){j(e),f(t(e.id))}))}),[b]),Object(l.jsxs)("div",{className:"row mb2 ",children:[Object(l.jsx)("div",{className:"col-md-6 mt-3",children:null===n?Object(l.jsx)(O,{}):Object(l.jsx)(A,{items:n,onPersonSelected:function(e){h(e)},children:function(e){return"".concat(e.name)}})}),Object(l.jsx)("div",{className:"col-md-6",children:null===o?Object(l.jsx)(O,{}):Object(l.jsxs)(U,{item:o,imageUrl:N,children:[Object(l.jsx)(E,{field:"model",label:"Model"}),Object(l.jsx)(E,{field:"length",label:"Length"}),Object(l.jsx)(E,{field:"passengers",label:"Passengers"})]})})]})},w=n(3),M=function(e){return e.isLoggedIn?Object(l.jsx)("div",{className:"jumbotron text-center",children:Object(l.jsx)("h3",{children:"This page is full of secrets!!!"})}):Object(l.jsx)(w.a,{to:"/login"})},P=function(e){var t=e.isLoggedIn,n=e.onLogin;return t?Object(l.jsx)(w.a,{to:"/"}):Object(l.jsxs)("div",{className:"jumbotron",children:[Object(l.jsx)("p",{children:"Login to see secret page!"}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:n,children:"Login"})]})};var C=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)(N,{}),Object(l.jsxs)(w.d,{children:[Object(l.jsx)(w.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)("h2",{children:"Welcome to StarDB"})}}),Object(l.jsx)(w.b,{path:"/people",component:v}),Object(l.jsx)(w.b,{path:"/planets/:id?",component:S}),Object(l.jsx)(w.b,{path:"/starships",component:W}),Object(l.jsx)(w.b,{path:"/secret",render:function(){return Object(l.jsx)(M,{isLoggedIn:n})}}),Object(l.jsx)(w.b,{path:"/login",render:function(){return Object(l.jsx)(P,{isLoggedIn:n,onLogin:function(){c(!n)}})}}),Object(l.jsx)(w.b,{render:function(){return Object(l.jsx)("h2",{children:"Page not Found!"})}})]})]})},T=n(24),k=n(26),y=n(25),B=function(e){Object(k.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(T.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)(p,{}):this.props.children}}]),n}(r.Component);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(B,{children:Object(l.jsx)(C,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a1d947ce.chunk.js.map