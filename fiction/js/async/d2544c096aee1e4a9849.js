(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9rId":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page--chapters"},[r("div",{staticClass:"chapters"},t._l(t.chapters,function(e){return r("router-link",{key:e.id,staticClass:"item",attrs:{to:{name:"book",params:{id:t.id+"-"+e.id}}}},[t._v("\n      "+t._s(e.name)+"\n    ")])}))])},a=[];n._withStripped=!0,r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a})},Dtvw:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(r("14Xm")),a=u(r("D3Ub"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{chapters:[]}},computed:{id:function(){return this.$route.params.id},book:function(){return this.$store.books[this.id]},source:function(){return""+this.book.source}},created:function(){var t=this;return(0,a.default)(n.default.mark(function e(){var r;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("data/"+t.source+"/chapters.json");case 2:r=e.sent,t.chapters=r.data;case 4:case"end":return e.stop()}},e,t)}))()}}},HP8D:function(t,e,r){"use strict";r.r(e);var n=r("9rId"),a=r("Ofc8");for(var u in a)"default"!==u&&function(t){r.d(e,t,function(){return a[t]})}(u);var i=r("KHd+"),s=Object(i.a)(a.default,n.a,n.b,!1,null,null,null);s.options.__file="app/scripts/views/library/list.vue",e.default=s.exports},Ofc8:function(t,e,r){"use strict";r.r(e);var n=r("Dtvw"),a=r.n(n);for(var u in n)"default"!==u&&function(t){r.d(e,t,function(){return n[t]})}(u);e.default=a.a}}]);