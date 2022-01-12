(function(t){function e(e){for(var r,s,c=e[0],u=e[1],i=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Notes",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"notes-container"}},[n("h1",[t._v("Mild Vue Notes")]),n("div",{attrs:{id:"flex-container"}},[n("div",{staticClass:"column"},[t._l(this.$store.state.allNotes,(function(e){return n("button",{key:e.id,staticClass:"note-thumb",on:{click:function(n){return t.openNote(e.id)}}},[n("h1",[t._v("#"+t._s(e.id)+", "+t._s(e.summary))])])})),n("button",{attrs:{id:"create-btn"}},[t._v("CREATE NOTE")])],2),t._m(0)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column"},[n("textarea",{attrs:{id:"user-note",maxlength:"500"}}),t._v(" "),n("button",{attrs:{id:"edit-btn"}},[t._v("SUBMIT CHANGES")]),n("button",{attrs:{id:"delete-btn"}},[t._v("DELETE NOTE")])])}],u={name:"Notes",methods:{openNote:function(t){this.$store.commit("openNote",t)}},mounted:function(){this.$store.dispatch("fetchNotes")}},i=u,l=(n("ff01"),n("2877")),f=Object(l["a"])(i,s,c,!1,null,"b510fb00",null),p=f.exports,d={name:"App",components:{Notes:p}},b=d,v=(n("034f"),Object(l["a"])(b,o,a,!1,null,null,null)),h=v.exports,m=n("1da1"),N=(n("96cf"),n("159b"),n("bc3a")),y=n.n(N),_=n("2f62");r["a"].use(_["a"]);var g=new _["a"].Store({state:{viewNoteDisplay:!0,createNoteDisplay:!1,allNotes:[],selectedNote:{}},mutations:{setNotes:function(t,e){t.allNotes=e},openNote:function(t,e){var n=document.getElementById("user-note");t.allNotes.forEach((function(t){t.id===e&&(n.value=t.message)}))}},actions:{fetchNotes:function(t){return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,y.a.get("/api/?getNotes=placeholder");case 4:r=e.sent,r=r.data,n("setNotes",r),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}});r["a"].config.productionTip=!1,new r["a"]({store:g,render:function(t){return t(h)}}).$mount("#app")},"5bbc":function(t,e,n){},"85ec":function(t,e,n){},ff01:function(t,e,n){"use strict";n("5bbc")}});
//# sourceMappingURL=app.ba2e5831.js.map