(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{312:function(t,e,r){var n=r(35),o=r(210);t.exports=n?o:function(t){return Map.prototype.entries.call(t)}},334:function(t,e,r){"use strict";var n=r(2),o=r(200);n({target:"String",proto:!0,forced:r(201)("small")},{small:function(){return o(this,"small","","")}})},343:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return c}));r(606);function n(t,e){var r=document.createElement("a");document.body.appendChild(r),r.href=t,r.target="_self",r.download=e,r.click(),document.body.removeChild(r)}var o=function(t,e){return String(t).padStart(e,"0")};function c(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=["January","February","March","April","May","June","July","August","September","October","November","December"];if(t){var n=t.getDate(),c=r[t.getMonth()],l=t.getFullYear(),f=t.getHours(),d=t.getMinutes();return n+" "+c+" "+l+(e?", "+o(f,2)+":"+o(d,2):"")}return""}},375:function(t,e,r){"use strict";var n=r(582),o=r(583);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},379:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(595);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},380:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(12),l=r(65),f=r(312),d=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return!d(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},381:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(44),l=r(12),f=r(81),d=r(65),v=r(105),h=r(312),y=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=l(this),e=h(map),r=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return y(e,(function(t,e){r(e,t,map)&&o.call(n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},382:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(12),l=r(65),f=r(312),d=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},383:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(12),l=r(65),f=r(312),d=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},384:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(12),l=r(312),f=r(596),d=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return d(l(c(this)),(function(e,r,n){if(f(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},385:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(12),l=r(312),f=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return f(l(c(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},386:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(44),l=r(12),f=r(81),d=r(65),v=r(105),h=r(312),y=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=l(this),e=h(map),r=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return y(e,(function(t,e){o.call(n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},387:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(44),l=r(12),f=r(81),d=r(65),v=r(105),h=r(312),y=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=l(this),e=h(map),r=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return y(e,(function(t,e){o.call(n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},388:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(12),l=r(81),f=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=c(this),e=l(map.set),i=0;i<arguments.length;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},389:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(12),l=r(81),f=r(312),d=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=c(this),e=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(t),d(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty map with no initial value");return n}})},390:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(12),l=r(65),f=r(312),d=r(199);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},391:function(t,e,r){"use strict";var n=r(2),o=r(35),c=r(12),l=r(81);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=c(this),r=arguments.length;l(e);var n=map.has(t);if(!n&&r<3)throw TypeError("Updating absent value");var o=n?map.get(t):l(r>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},414:function(t,e,r){"use strict";var n=r(2),o=r(200);n({target:"String",proto:!0,forced:r(201)("fixed")},{fixed:function(){return o(this,"tt","","")}})},557:function(t,e,r){"use strict";var n=r(2),o=r(707),c=r(33),l=r(24),f=r(53),d=r(107);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=l(e.length),n=d(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:f(t)),n}})},558:function(t,e,r){r(84)("flat")},582:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(85),l=r(25),f=r(205),d=r(199),v=r(106),h=r(14),y=r(3),_=r(139),E=r(60),S=r(140);t.exports=function(t,e,r){var m=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),R=m?"set":"add",T=o[t],x=T&&T.prototype,I=T,k={},A=function(t){var e=x[t];l(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof T||!(w||x.forEach&&!y((function(){(new T).entries().next()})))))I=r.getConstructor(e,t,m,R),f.REQUIRED=!0;else if(c(t,!0)){var M=new I,C=M[R](w?{}:-0,1)!=M,N=y((function(){M.has(1)})),D=_((function(t){new T(t)})),O=!w&&y((function(){for(var t=new T,e=5;e--;)t[R](e,e);return!t.has(-0)}));D||((I=e((function(e,r){v(e,I,t);var n=S(new T,e,I);return null!=r&&d(r,n[R],{that:n,AS_ENTRIES:m}),n}))).prototype=x,x.constructor=I),(N||O)&&(A("delete"),A("has"),m&&A("get")),(O||C)&&A(R),w&&x.clear&&delete x.clear}return k[t]=I,n({global:!0,forced:I!=T},k),E(I,t),w||r.setStrong(I,t,m),I}},583:function(t,e,r){"use strict";var n=r(19).f,o=r(69),c=r(137),l=r(65),f=r(106),d=r(199),v=r(136),h=r(138),y=r(18),_=r(205).fastKey,E=r(45),S=E.set,m=E.getterFor;t.exports={getConstructor:function(t,e,r,v){var h=t((function(t,n){f(t,h,e),S(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=n&&d(n,t[v],{that:t,AS_ENTRIES:r})})),E=m(e),w=function(t,e,r){var n,o,c=E(t),l=R(t,e);return l?l.value=r:(c.last=l={index:o=_(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},R=function(t,e){var r,n=E(t),o=_(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(h.prototype,{clear:function(){for(var t=E(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=this,r=E(e),n=R(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),y?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=E(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!R(this,t)}}),c(h.prototype,r?{get:function(t){var e=R(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),y&&n(h.prototype,"size",{get:function(){return E(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=m(e),c=m(n);v(t,e,(function(t,e){S(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},589:function(t,e,r){var content=r(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("163df914",content,!0,{sourceMap:!1})},595:function(t,e,r){"use strict";var n=r(12),o=r(81);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},596:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},606:function(t,e,r){"use strict";var n=r(2),o=r(704).start;n({target:"String",proto:!0,forced:r(705)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},679:function(t,e,r){"use strict";r(589)},680:function(t,e,r){var n=r(28)(!1);n.push([t.i,".top-color[data-v-694f06b9]{background-color:#21a68d}.only-visible-to-html2canvas[data-v-694f06b9]{display:none}.cta[data-v-694f06b9]{text-align:center;background:#f2f2f2;padding:2em}.link[data-v-694f06b9]{border:none;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}",""]),t.exports=n},697:function(t,e,r){"use strict";r.r(e);r(59),r(32),r(80),r(31),r(56);var n=r(584),o=r.n(n),c=r(343),l={name:"DownloadPopup",props:["results","chat"],data:function(){return{dialog:!1}},methods:{download:function(){console.log("download here",this.results),this.$gtag.event("donation-popup-clicked",{event_category:"donation",event_label:"popup-clicked",value:"1"});var canvas=o()(this.results.$refs.graphs,{scrollX:0,scrollY:-window.scrollY,onclone:function(t){return t.querySelectorAll(".only-visible-to-html2canvas").forEach((function(t){return t.style.display="block"})),t}}),t=this.chat.messagesPerPerson.slice(0,2).map((function(t){return t.name})).join("-");canvas.then((function(canvas){Object(c.a)(canvas.toDataURL(),"whatsanlazye-results-"+t+".png")}))},paypalButtonPressed:function(){this.$gtag.event("donation-popup-clicked",{event_category:"donation",event_label:"paypal-clicked",value:"1"})}}},f=(r(679),r(30)),d=r(50),v=r.n(d),h=r(580),y=r(556),_=r(329),E=r(663),S=r(793),m=r(738),w=r(349),R=r(664),T=r(739),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"my-4 mb-16"},[r("v-row",{attrs:{justify:"center"}},[r("div",{staticClass:"cta my-md-4"},[r("div",{staticClass:"text-h3 font-weight-bold pb-4"},[t._v("\n        Download all Graphs at once!\n      ")]),t._v(" "),r("div",{staticClass:"text-body-1"},[t._v("Currently for free! "),r("br")]),t._v(" "),r("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{color:"#07bc4c",dark:""},on:{click:function(){return t.download()}}},n),[r("v-icon",[t._v("mdi-download")]),t._v("Download your Results now!\n          ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline cyan",staticStyle:{"word-break":"normal"}},[r("div",{staticClass:"text-h4 font-weight-bold"},[t._v("Did we make you go 🥳?")]),t._v(" "),r("span",[t._v("Buy us a ☕️ and get your results for free!!!")])]),t._v(" "),r("v-card-text",{staticClass:"pt-3"},[t._v("\n            You will get all results as an image exactly as presented on your\n            device. Generating may take a while.\n          ")]),t._v(" "),r("v-row",{staticClass:"mb-3",attrs:{align:"center",justify:"center"},on:{click:t.paypalButtonPressed}},[r("form",{attrs:{action:"https://www.paypal.com/donate",method:"post",target:"_blank"}},[r("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"EPCYG8WEF289G"}}),t._v(" "),r("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}}),t._v(" "),r("img",{attrs:{alt:"",border:"0",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n              Close\n            ")]),t._v(" "),r("v-btn",{attrs:{color:"primary",text:"",loading:!0}},[t._v(" Download ")])],1)],1)],1)],1)])],1)}),[],!1,null,"694f06b9",null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:y.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:E.a,VDialog:S.a,VDivider:m.a,VIcon:w.a,VRow:R.a,VSpacer:T.a})},704:function(t,e,r){var n=r(24),o=r(142),c=r(26),l=Math.ceil,f=function(t){return function(e,r,f){var d,v,h=String(c(e)),y=h.length,_=void 0===f?" ":String(f),E=n(r);return E<=y||""==_?h:(d=E-y,(v=o.call(_,l(d/_.length))).length>d&&(v=v.slice(0,d)),t?h+v:v+h)}};t.exports={start:f(!1),end:f(!0)}},705:function(t,e,r){var n=r(87);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},706:function(t,e,r){"use strict";var n=r(2),o=r(200);n({target:"String",proto:!0,forced:r(201)("link")},{link:function(t){return o(this,"a","href",t)}})},707:function(t,e,r){"use strict";var n=r(86),o=r(24),c=r(65),l=function(t,e,source,r,f,d,v,h){for(var element,y=f,_=0,E=!!v&&c(v,h,3);_<r;){if(_ in source){if(element=E?E(source[_],_,e):source[_],d>0&&n(element))y=l(t,e,element,o(element.length),y,d-1)-1;else{if(y>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[y]=element}y++}_++}return y};t.exports=l}}]);