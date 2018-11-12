(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(52)},49:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),l=t.n(r),i=t(6),s=t(7),o=t(9),m=t(8),p=t(10),u=function(){return c.a.createElement("section",{className:"app-home__content"},c.a.createElement("h2",{className:"app-home__title"},"Welcome to Drinkello"),c.a.createElement("p",{className:"app-home__description"},"Drinkello is a recipe finder for classic cocktails. Please select an option from menu to get started."))},d=function(){return c.a.createElement("div",{className:"bg-wrapper-home"},c.a.createElement("main",{className:"app-home"},c.a.createElement(u,null)))},E=t(55),h=t(54),f=t(19);f.initializeApp({apiKey:"AIzaSyAwzW5_gzw1XGI0-A9G8N3kGfwE5yfBdtw",authDomain:"cocktailsrecipes-876dd.firebaseapp.com",databaseURL:"https://cocktailsrecipes-876dd.firebaseio.com",projectId:"cocktailsrecipes-876dd",storageBucket:"cocktailsrecipes-876dd.appspot.com",messagingSenderId:"170989816088"});var _=f.firestore();_.settings({timestampsInSnapshots:!0});var b=_,v=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={data:null},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=Math.floor(13*Math.random()+0),t=this.state.data;if(null===t)return c.a.createElement("section",{className:"app-recipe__content"},c.a.createElement("div",{className:"loader"},"Loading",c.a.createElement("span",null)));if("random"===this.props.address)return c.a.createElement("section",{className:"app-recipe__content"},c.a.createElement(N,{data:t,randomIndex:a}),c.a.createElement(k,{data:t,randomIndex:a}));var n=t.filter(function(a){return a.name===e.props.address});return c.a.createElement("section",{className:"app-recipe__content"},c.a.createElement(N,{data:n}),c.a.createElement(k,{data:n}))}},{key:"componentDidMount",value:function(){var e=this;b.collection("cocktails").get().then(function(a){var t=[];a.docs.forEach(function(e){t.push(e.data())}),e.setState({data:t})})}}]),a}(c.a.Component),N=function(e){var a=e.randomIndex||0,t=e.data[a];return c.a.createElement("div",{className:"app-recipe__info"},c.a.createElement("h2",{className:"app-recipe__title"},t.name),c.a.createElement("p",{className:"app-recipe__description"},t.description),c.a.createElement("img",{className:"app-recipe__image",src:t.imgURL,alt:"Drink"}))},k=function(e){var a=e.randomIndex||0,t=e.data[a],n=t.ingredients.map(function(e,a){return c.a.createElement("li",{key:"ingredient".concat(a)},e)}),r=t.steps.map(function(e,a){return c.a.createElement("li",{key:"step".concat(a)},e)});return c.a.createElement("div",{className:"app-recipe__drink"},c.a.createElement("article",{className:"app-recipe__ingredients"},c.a.createElement("h3",null,"Ingredients"),c.a.createElement("ul",null,n)),c.a.createElement("article",{className:"app-recipe__prescription"},c.a.createElement("h3",null,"Steps"),c.a.createElement("ol",null,r)))},g=function(e){var a=e.match.params.drink;return c.a.createElement("div",{className:"bg-wrapper-recipe"},c.a.createElement("main",{className:"app-recipe"},c.a.createElement(v,{address:a})))},O=t(53),j=function(e){var a=e.data.map(function(e,a){var t="url(".concat(e.imgURL,")"),n="/recipe-box/".concat(e.name);return c.a.createElement("div",{className:"result-box",key:a,style:{backgroundImage:t}},c.a.createElement(O.a,{to:n,className:"result-link"},c.a.createElement("div",{className:"result-info"},e.name)))});return c.a.createElement("div",{className:"app-search__results"},a)},y=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).handleInputSearch=function(a){e.setState({searchValue:a.target.value})},e.state={data:null,searchValue:""},e}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.data,t=e.searchValue;if(null===a)return c.a.createElement("section",{className:"app-recipe__content"},c.a.createElement("div",{className:"loader"},"Loading",c.a.createElement("span",null)));var n=this.state.searchValue,r=a.filter(function(e){for(var a="^".concat(n.toLocaleLowerCase()),t=new RegExp(a,"g"),c=0;c<e.tags.length;c++)if(null!=e.tags[c].toLocaleLowerCase().match(t))return e});return c.a.createElement("section",{className:"app-search__content"},c.a.createElement("h2",{className:"app-search__title"},"Find Your Drink"),c.a.createElement("input",{type:"search",name:"",id:"",className:"app-search__input",placeholder:"Start typing...",onChange:this.handleInputSearch,value:t}),""!==t&&c.a.createElement(j,{data:r}))}},{key:"componentDidMount",value:function(){var e=this;b.collection("cocktails").get().then(function(a){var t=[];a.docs.forEach(function(e){t.push(e.data())}),e.setState({data:t})})}}]),a}(c.a.Component),M=function(){return c.a.createElement("div",{className:"bg-wrapper-home"},c.a.createElement("main",{className:"app-search"},c.a.createElement(y,null)))},w=function(e){var a=e.data.map(function(e,a){var t="url(".concat(e.imgURL,")"),n="/recipe-box/".concat(e.name);return c.a.createElement("div",{className:"result-box",key:"result".concat(a),style:{backgroundImage:t}},c.a.createElement(O.a,{to:n,className:"result-link"},c.a.createElement("div",{className:"result-info"},e.name)))});return c.a.createElement("div",{className:"app-search__results"},a)},L=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={data:null},e}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return null===this.state.data?c.a.createElement("div",{className:"bg-wrapper-home"},c.a.createElement("section",{className:"app-recipe__content"},c.a.createElement("div",{className:"loader"},"Loading",c.a.createElement("span",null)))):c.a.createElement("div",{className:"bg-wrapper-home"},c.a.createElement("main",{className:"app-home"},c.a.createElement(w,{data:this.state.data})))}},{key:"componentDidMount",value:function(){var e=this;b.collection("cocktails").get().then(function(a){var t=[];a.docs.forEach(function(e){t.push(e.data())}),e.setState({data:t})})}}]),a}(c.a.Component),S=t(14),C=function(e){function a(e){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.mobileMenuOpen?"open":"";return c.a.createElement("header",{className:"app-header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navTrigger"},c.a.createElement("div",{className:"wrapper-menu ".concat(e),onClick:this.props.onHamburgerClick},c.a.createElement("div",{className:"line-menu half start"}),c.a.createElement("div",{className:"line-menu"}),c.a.createElement("div",{className:"line-menu half end"}))),c.a.createElement(O.a,{to:"/",className:"app-header__logo"},"Drinkello")))}}]),a}(c.a.Component),I=Object(S.b)(function(e){return{mobileMenuOpen:e.menu.isMobileMenuOpen}},function(e){return{onHamburgerClick:function(){return e({type:"TOGGLE_MENU"})}}})(C),x=Object(S.b)(function(e){return{mobileMenu:e.menu.isMobileMenuOpen}},function(e){return{onLinkSelect:function(){return e({type:"SELECT_LINK"})}}})(function(e){var a=e.mobileMenu?"active-menu":"";return c.a.createElement("nav",{className:"app-menu ".concat(a)},c.a.createElement("ul",{className:"app-menu__list"},c.a.createElement("li",{className:"app-menu__item",onClick:e.onLinkSelect},c.a.createElement(O.a,{to:"/",className:"app-menu__link"},"Home")),c.a.createElement("li",{className:"app-menu__item",onClick:e.onLinkSelect},c.a.createElement(O.a,{to:"/search",className:"app-menu__link"},"Search")),c.a.createElement("li",{className:"app-menu__item",onClick:e.onLinkSelect},c.a.createElement(O.a,{to:"/recipe-box/random",className:"app-menu__link"},"Get Random Recipe")),c.a.createElement("li",{className:"app-menu__item",onClick:e.onLinkSelect},c.a.createElement(O.a,{to:"/show-all",className:"app-menu__link"},"Show All Drinks"))))}),D=function(){return c.a.createElement("footer",{className:"app-footer"},c.a.createElement("div",{className:"app-footer__container container"},c.a.createElement("p",{className:"app-footer__copy"},"Copyright \xa9 2018 Krzysztof Karpieszuk "),c.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:"https://github.com/krzysztofkarpieszuk/Drinkello",className:"app-footer__github-app-link"},c.a.createElement("i",{className:"fab fa-github"}))))},z=(t(49),function(e){function a(e){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).call(this,e))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(E.a,null,c.a.createElement("div",null,c.a.createElement(I,null),c.a.createElement(x,null),c.a.createElement(h.a,{exact:!0,path:"/",component:d}),c.a.createElement(h.a,{path:"/recipe-box/:drink",component:g}),c.a.createElement(h.a,{path:"/search",component:M}),c.a.createElement(h.a,{path:"/show-all",component:L}),c.a.createElement(D,null)))}}]),a}(n.Component)),G=t(15),R=t(21),U={isMobileMenuOpen:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_MENU":return Object(R.a)({},e,{isMobileMenuOpen:!e.isMobileMenuOpen});case"SELECT_LINK":if(e.isMobileMenuOpen)return Object(R.a)({},e,{isMobileMenuOpen:!1})}return e},K=Object(G.b)({menu:A}),T=Object(G.c)(K);l.a.render(c.a.createElement(S.a,{store:T},c.a.createElement(z,null)),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.9cb36bd4.chunk.js.map