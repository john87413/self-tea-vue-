(function(e){function t(t){for(var r,l,s=t[0],i=t[1],u=t[2],v=0,f=[];v<s.length;v++)l=s[v],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/tea-web/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],l=n("2877"),s={},i=Object(l["a"])(s,a,o,!1,null,null,null),u=i.exports,c=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("main-header"),n("router-view",{staticClass:"main-view"}),n("main-footer")],1)},f=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-header"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/main/news"}},[e._v("News")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/main/about"}},[e._v("About")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/main/menu"}},[e._v("Menu")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/main/strict"}},[e._v("Strict")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/main/store"}},[e._v("Store")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/main/join"}},[e._v("Join")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/main/careers"}},[e._v("Careers")])],1)])},p=[],h={data:function(){return{}}},m=h,d=Object(l["a"])(m,_,p,!1,null,"87e5f058",null),b=d.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-footer"},[n("h1",[e._v("This is an footer page")])])}],w={data:function(){return{}}},k=w,$=Object(l["a"])(k,g,j,!1,null,"350656a2",null),E=$.exports,O={data:function(){return{}},components:{"main-header":b,"main-footer":E}},x=O,y=Object(l["a"])(x,v,f,!1,null,"715d039c",null),C=y.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},S=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("哈哈哈")]),e._m(1),n("h3",[e._v("哈哈哈")]),e._m(2),n("h3",[e._v("哈哈哈")]),e._m(3)])},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    哈哈哈"),n("br"),e._v("\n    Creativity Revolution of Tea\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],H={name:"HelloWorld",props:{msg:String}},W=H,J=Object(l["a"])(W,P,M,!1,null,"4b156ff6",null),A=J.exports,N={name:"home",components:{HelloWorld:A}},V=N,D=Object(l["a"])(V,T,S,!1,null,null,null),F=D.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"news"},[n("h1",[e._v("This is an news page")])])}],q={data:function(){return{}}},z=q,B=Object(l["a"])(z,R,Y,!1,null,"320595d4",null),G=B.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],L={data:function(){return{}}},Q=L,U=Object(l["a"])(Q,I,K,!1,null,"3d13dbba",null),X=U.exports,Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu"},[n("h1",[e._v("This is an menu page")])])}],te={data:function(){return{}}},ne=te,re=Object(l["a"])(ne,Z,ee,!1,null,"3621a41c",null),ae=re.exports,oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},le=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"strict"},[n("h1",[e._v("This is an strict page")])])}],se={data:function(){return{}}},ie=se,ue=Object(l["a"])(ie,oe,le,!1,null,"ed1a2f98",null),ce=ue.exports,ve=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},fe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"store"},[n("h1",[e._v("This is an store page")])])}],_e={data:function(){return{}}},pe=_e,he=Object(l["a"])(pe,ve,fe,!1,null,"c3ebf134",null),me=he.exports,de=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},be=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"join"},[n("h1",[e._v("This is an join page")])])}],ge={data:function(){return{}}},je=ge,we=Object(l["a"])(je,de,be,!1,null,"092a63b1",null),ke=we.exports,$e=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"careers"},[n("h1",[e._v("This is an careers page")])])}],Oe={data:function(){return{}}},xe=Oe,ye=Object(l["a"])(xe,$e,Ee,!1,null,"6242d45c",null),Ce=ye.exports;r["a"].use(c["a"]);var Te=new c["a"]({routes:[{path:"/",component:C,children:[{path:"/",component:F},{path:"/main/news",component:G},{path:"/main/about",component:X},{path:"/main/menu",component:ae},{path:"/main/strict",component:ce},{path:"/main/store",component:me},{path:"/main/join",component:ke},{path:"/main/careers",component:Ce}]}]});n("78a7");r["a"].config.productionTip=!1,new r["a"]({router:Te,render:function(e){return e(u)}}).$mount("#app")},"78a7":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.875adffc.js.map