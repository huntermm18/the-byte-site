(function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"10e7":function(e,t,n){},"515d":function(e,t,n){"use strict";n("a072")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"header"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"logo"},[i("img",{staticClass:"logo",attrs:{src:n("5fce")}})])]),e._m(0)],1),i("div",{staticClass:"content"},[i("router-view")],1),i("div",{staticClass:"footer"},[i("router-link",{attrs:{to:"/admin"}},[i("h1",[e._v("Edit Library")])]),i("a",{attrs:{href:"https://github.com/huntermm18/cookbook-CS260"}},[e._v("Link to github repository")])],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("Hunter's Recipes")])])}],o=(n("034f"),n("2877")),s={},c=Object(o["a"])(s,r,a,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("section",{staticClass:"image-gallery"},e._l(e.items,(function(t){return n("div",{key:t.id,staticClass:"image"},[n("h1",[e._v(e._s(t.title))]),n("img",{attrs:{src:t.imageLink}}),n("p",[e._v(e._s(t.recipeBody))]),n("br")])})),0)])},m=[],p=n("1da1"),f=(n("96cf"),n("bc3a")),v=n.n(f),g={name:"Home",data:function(){return{items:[]}},created:function(){this.getItems()},methods:{getItems:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/items");case 3:return n=t.sent,e.items=n.data,t.abrupt("return",!0);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},h=g,b=(n("515d"),Object(o["a"])(h,d,m,!1,null,"369fd640",null)),_=b.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin"},[n("h1",[e._v("Add or Edit The Recipe Library")]),e._m(0),n("div",{staticClass:"add"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{placeholder:"Title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.imageLink,expression:"imageLink"}],attrs:{placeholder:"image url"},domProps:{value:e.imageLink},on:{input:function(t){t.target.composing||(e.imageLink=t.target.value)}}}),n("br"),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipeBody,expression:"recipeBody"}],attrs:{rows:"12",cols:"70",name:"recipeBody"},domProps:{value:e.recipeBody},on:{input:function(t){t.target.composing||(e.recipeBody=t.target.value)}}},[e._v(" Enter recipe here... ")]),n("br"),n("button",{on:{click:e.upload}},[e._v("Upload")])]),e.addItem?n("div",{staticClass:"upload"},[n("h2",[e._v("Uploaded: "+e._s(e.addItem.title))]),n("img",{attrs:{src:e.addItem.imageLink}})]):e._e()]),e._m(1),n("div",{staticClass:"edit"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.findTitle,expression:"findTitle"}],attrs:{placeholder:"Search"},domProps:{value:e.findTitle},on:{input:function(t){t.target.composing||(e.findTitle=t.target.value)}}}),e.suggestions.length>0?n("div",{staticClass:"suggestions"},e._l(e.suggestions,(function(t){return n("div",{key:t.id,staticClass:"suggestion",on:{click:function(n){return e.selectItem(t)}}},[e._v(e._s(t.title)+" ")])})),0):e._e()]),e.findItem?n("div",{staticClass:"upload"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.findItem.title,expression:"findItem.title"}],domProps:{value:e.findItem.title},on:{input:function(t){t.target.composing||e.$set(e.findItem,"title",t.target.value)}}}),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.findItem.imageLink,expression:"findItem.imageLink"}],domProps:{value:e.findItem.imageLink},on:{input:function(t){t.target.composing||e.$set(e.findItem,"imageLink",t.target.value)}}}),n("br"),n("p",[e._v(" "+e._s(e.findItem.recipeBody)+" ")]),n("img",{attrs:{src:e.findItem.imageLink}}),n("br"),n("i",[e._v("enter updated recipe")]),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.findItem.recipeBody,expression:"findItem.recipeBody"}],attrs:{rows:"9",cols:"50",name:"recipeBody"},domProps:{value:e.findItem.recipeBody},on:{input:function(t){t.target.composing||e.$set(e.findItem,"recipeBody",t.target.value)}}}),n("br"),n("button",{on:{click:function(t){return e.deleteItem(e.findItem)}}},[e._v("Delete")]),n("button",{on:{click:function(t){return e.editItem(e.findItem)}}},[e._v("Update Recipe")])]):e._e()])])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("div",{staticClass:"circle"},[e._v("1")]),n("h2",[e._v("Add a Recipe")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("div",{staticClass:"circle"},[e._v("2")]),n("h2",[e._v("Edit/Delete an Item")])])}],w=(n("4de4"),n("2ca0"),{name:"Admin",data:function(){return{title:"",recipeBody:"",imageLink:"",addItem:null,items:[],findTitle:"",findItem:null}},created:function(){this.getItems()},computed:{suggestions:function(){var e=this,t=this.items.filter((function(t){return t.title.toLowerCase().startsWith(e.findTitle.toLowerCase())}));return t.sort((function(e,t){return e.title>t.title}))}},methods:{selectItem:function(e){this.findTitle="",this.findItem=e},deleteItem:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.delete("/api/items/"+e._id);case 3:return t.findItem=null,t.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},editItem:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.put("/api/items/"+e._id,{title:t.findItem.title,imageLink:t.findItem.imageLink,recipeBody:t.findItem.recipeBody});case 3:return t.findItem=null,t.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},getItems:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/items");case 3:return n=t.sent,e.items=n.data,t.abrupt("return",!0);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fileChanged:function(e){this.file=e.target.files[0]},upload:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("/api/items",{title:e.title,recipeBody:e.recipeBody,imageLink:e.imageLink});case 3:n=t.sent,e.addItem=n.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}),k=w,x=(n("d219"),Object(o["a"])(k,I,y,!1,null,"945489a4",null)),C=x.exports;i["a"].use(l["a"]);var L=[{path:"/",name:"home",component:_},{path:"/admin",name:"admin",component:C}],O=new l["a"]({mode:"history",base:"/",routes:L}),j=O;i["a"].config.productionTip=!1,new i["a"]({router:j,render:function(e){return e(u)}}).$mount("#app")},"5fce":function(e,t,n){e.exports=n.p+"img/Hand-drawn-chef-Clip-art-PNG.b3bb1d2e.png"},"85ec":function(e,t,n){},a072:function(e,t,n){},d219:function(e,t,n){"use strict";n("10e7")}});
//# sourceMappingURL=app.40155015.js.map