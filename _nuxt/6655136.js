(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{336:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));r(22),r(206),r(43),r(55),r(32),r(80),r(31),r(209),r(36),r(13),r(135),r(23),r(64),r(82),r(44),r(51),r(57);var n=r(81),o=r(11),l=r(20),c=r(520),h=r(551),d=r(586),D=r(587),f=r(292),j=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:150;Object(o.a)(this,e),this.chatObject=r,this._groupAfter=n,this._maxWordsWordCloud=l,this.filterdChatObject=e.removeSystemMessages(this.chatObject);var h=Object.entries(e.getMessagesPerPerson(this.filterdChatObject));this.numPersonsInChat=h.length,this.personColorMap={},h.forEach((function(e,r){t.personColorMap[e[0]]=c.a[r%c.a.length]})),this._sortedFreqList=null,this._messagesPerPerson=null,this._dates=null,this.__reload()}return Object(l.a)(e,[{key:"__reload",value:function(){this._lineGraphData=Promise.resolve(this._getLineGraphData()),this._funfacts=Promise.resolve(this._getFunFacts()),this._allWords=Promise.resolve(this._getAllWords()),this._hourlyData=Promise.resolve(this._getHourlyData()),this._dailyData=Promise.resolve(this._getDailyData()),this._weeklyData=Promise.resolve(this._getWeeklyData()),this._shareOfSpeech=Promise.resolve(this._getShareOfSpeech())}},{key:"sortedFreqDict",get:function(){return this._sortedFreqList||(this._sortedFreqList=e.createSortedFreqDict(this.chatObject)),this._sortedFreqList}},{key:"groupAfter",get:function(){return this._groupAfter},set:function(e){this._groupAfter=e,this._messagesPerPerson=null,this._lineGraphData=Promise.resolve(this._getLineGraphData()),this._funfacts=Promise.resolve(this._getFunFacts()),this._hourlyData=Promise.resolve(this._getHourlyData()),this._dailyData=Promise.resolve(this._getDailyData()),this._weeklyData=Promise.resolve(this._getWeeklyData()),this._shareOfSpeech=Promise.resolve(this._getShareOfSpeech())}},{key:"messagesPerPerson",get:function(){return this._messagesPerPerson||(this._messagesPerPerson=this._getMessagesPerPerson()),this._messagesPerPerson}},{key:"_getMessagesPerPerson",value:function(){var t=this,r=Object.entries(e.getMessagesPerPerson(this.filterdChatObject));r=r.sort((function(a,b){return b[1].length-a[1].length}));var n=[],o=!1;return r.forEach((function(e,r){r>t._groupAfter?(n[t._groupAfter].messages=n[t._groupAfter].messages.concat(e[1]),o=!0):n.push({name:e[0],color:t.personColorMap[e[0]],messages:e[1].sort((function(a,b){return a.date-b.date}))})})),o&&(n[this._groupAfter].name="Others",n[this._groupAfter].color="#D3D3D3",n[this._groupAfter].messages.sort((function(a,b){return a.absolute_id-b.absolute_id}))),n}},{key:"dates",get:function(){return this._dates||(this._dates=this.filterdChatObject.map((function(e){return e.date}))),this._dates}},{key:"_getShareOfSpeech",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{labels:this.messagesPerPerson.map((function(e){return e.name})),datasets:[{label:"Share of Speech",backgroundColor:this.messagesPerPerson.map((function(t){return Object(c.b)(t.color,e)})),borderColor:this.messagesPerPerson.map((function(e){return e.color})),data:this.messagesPerPerson.map((function(e){return e.messages.length}))}]}}},{key:"getShareOfSpeech",value:function(){return this._shareOfSpeech}},{key:"_getFunFacts",value:function(){return this.messagesPerPerson.map((function(t){var r=t.name,n=e.getTotalNumberOfWords(t.messages),o=e.get_longest_message(t.messages),l=e.createSortedFreqDict(t.messages),c=e.uniqueWords(l).length,h=e.match_emojys(l).map((function(e){return e[0]})).slice(0,3),d=n/t.messages.length;return{color:t.color,name:r,numberOfWords:n,longestMessage:o,uniqueWords:c,sortedEmojis:h,averageMessageLength:Math.round(d)}}))}},{key:"getFunFacts",value:function(){return this._funfacts}},{key:"_getHourlyData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{labels:["0AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"],datasets:this.messagesPerPerson.map((function(r){return{label:r.name,backgroundColor:Object(c.b)(r.color,t),borderColor:r.color,data:e.hourlyDataFromChat(r.messages)}}))}}},{key:"getHourlyData",value:function(){return this._hourlyData}},{key:"_getDailyData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{labels:f.weekdays(),datasets:this.messagesPerPerson.map((function(r){return{label:r.name,backgroundColor:Object(c.b)(r.color,t),borderColor:r.color,data:e.dailyDataFromChat(r.messages)}}))}}},{key:"getDailyData",value:function(){return this._dailyData}},{key:"_getWeeklyData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{labels:f.months(),datasets:this.messagesPerPerson.map((function(r){return{label:r.name,backgroundColor:Object(c.b)(r.color,t),borderColor:r.color,data:e.weeklyDataFromChat(r.messages)}}))}}},{key:"getWeeklyData",value:function(){return this._weeklyData}},{key:"_getLineGraphData",value:function(){var e=function(s,e){for(var t={},r=f(s);r.isBefore(e);r.add(1,"days"))t[r.format("YYYY-MM-DD")]=0;return t}(new Date(Math.min.apply(null,this.dates)),new Date(Math.max.apply(null,this.dates)));return this.filterdChatObject.map((function(t){e[f(t.date).format("YYYY-MM-DD")]+=1})),{labels:Object.keys(e),datasets:[{data:Object.values(e),borderWidth:1,lineTension:0,pointRadius:0,pointHitRadius:2,backgroundColor:Object(c.b)("#EF5350"),borderColor:Object(c.b)("#B71C1C",[1])}]}}},{key:"getLineGraphData",value:function(){return this._lineGraphData}},{key:"getLineGraphXAxis",value:function(e,t){var r=new Date(e-t);return r.getFullYear()>1971?"year":r.getFullYear()>1970&&r.getMonth()>0?"month":"day"}},{key:"_getAllWords",value:function(){return console.log(this.sortedFreqDict),this.sortedFreqDict.filter((function(e){return!(h.includes(e[0].toLowerCase())||d.includes(e[0].toLowerCase())||["","ich","du","wir","aber","<media","<attached:","audio","omitted>","bild","image","<medien","ausgeschlossen>","weggelassen","omitted","_","_weggelassen>","_ommited>","_omesso>","_omitted","_weggelassen","_attached"].includes(e[0].toLowerCase()))&&e[1]>1})).map((function(e){return{word:e[0],freq:e[1]}}))}},{key:"getAllWords",value:function(){var e=this;return this._allWords.then((function(t){return t.slice(0,e._maxWordsWordCloud)}))}}],[{key:"removeSystemMessages",value:function(e){return e.filter((function(e){return"system"!==e.author.toLowerCase()})).slice(1)}},{key:"groupBy",value:function(e,t){return e.reduce((function(e,r){return(e[r[t]]=e[r[t]]||[]).push(r),e}),{})}},{key:"getTotalNumberOfWords",value:function(e){return e.reduce((function(e,t){return e+t.message.split(" ").length}),0)}},{key:"uniqueWords",value:function(e){return e.filter((function(e){return 1===e[1]}))}},{key:"match_emojys",value:function(e){var t=/(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])/g;return e.filter((function(e){var r=e[0].match(t);return null!=r?Object(D.onlyEmoji)(r[0]):r}))}},{key:"get_longest_message",value:function(e){return Math.max.apply(Math,Object(n.a)(e.map((function(object){return object.message.split(" ").length}))))}},{key:"createSortedFreqDict",value:function(e){var t=e.reduce((function(e,t){return e+" "+t.message})," "),r=(t=t.replace(/\u200E/gi,"")).replace(/\n/g," ").split(" "),n={};return r.map((function(e){n[e]=(n[e]||0)+1})),Object.entries(n).sort((function(a,b){return b[1]-a[1]}))}},{key:"toDayDates",value:function(e){return e.map((function(e){return e.date.setHours(0,0,0,0)}))}},{key:"getDaysBetween",value:function(e,t){for(var a=[],r=new Date(e);r<=t;r.setDate(r.getDate()+1))a.push(new Date(r));return a}},{key:"getMessagesPerPerson",value:function(e){return this.groupBy(e,"author")}},{key:"hourlyDataFromChat",value:function(e){var t=new Array(24).fill(0);return e.map((function(e){t[e.date.getHours()]+=1})),t}},{key:"dailyDataFromChat",value:function(e){var t=new Array(7).fill(0);return e.map((function(e){t[e.date.getDay()]+=1})),t}},{key:"weeklyDataFromChat",value:function(e){var t=new Array(12).fill(0);return e.map((function(e){t[e.date.getMonth()]+=1})),t}}]),e}()},520:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return l}));r(58),r(80),r(23),r(51);var n=["#016f94","#d93b3b","#21a68d","#ffd45c","#35cd96","#ed8c2b","#b3f94f","#ba33dc","#ffa35c","#227373","#ff855c"];function o(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3==(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),"rgba("+[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t].join(",")+", "+r+" )";throw new Error("Bad Hex")}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return e.split(",").slice(0,-1).join(",")+","+t+")"}},571:function(e,t,r){var map={"./af":348,"./af.js":348,"./ar":349,"./ar-dz":350,"./ar-dz.js":350,"./ar-kw":351,"./ar-kw.js":351,"./ar-ly":352,"./ar-ly.js":352,"./ar-ma":353,"./ar-ma.js":353,"./ar-sa":354,"./ar-sa.js":354,"./ar-tn":355,"./ar-tn.js":355,"./ar.js":349,"./az":356,"./az.js":356,"./be":357,"./be.js":357,"./bg":358,"./bg.js":358,"./bm":359,"./bm.js":359,"./bn":360,"./bn-bd":361,"./bn-bd.js":361,"./bn.js":360,"./bo":362,"./bo.js":362,"./br":363,"./br.js":363,"./bs":364,"./bs.js":364,"./ca":365,"./ca.js":365,"./cs":366,"./cs.js":366,"./cv":367,"./cv.js":367,"./cy":368,"./cy.js":368,"./da":369,"./da.js":369,"./de":370,"./de-at":371,"./de-at.js":371,"./de-ch":372,"./de-ch.js":372,"./de.js":370,"./dv":373,"./dv.js":373,"./el":374,"./el.js":374,"./en-au":375,"./en-au.js":375,"./en-ca":376,"./en-ca.js":376,"./en-gb":377,"./en-gb.js":377,"./en-ie":378,"./en-ie.js":378,"./en-il":379,"./en-il.js":379,"./en-in":380,"./en-in.js":380,"./en-nz":381,"./en-nz.js":381,"./en-sg":382,"./en-sg.js":382,"./eo":383,"./eo.js":383,"./es":384,"./es-do":385,"./es-do.js":385,"./es-mx":386,"./es-mx.js":386,"./es-us":387,"./es-us.js":387,"./es.js":384,"./et":388,"./et.js":388,"./eu":389,"./eu.js":389,"./fa":390,"./fa.js":390,"./fi":391,"./fi.js":391,"./fil":392,"./fil.js":392,"./fo":393,"./fo.js":393,"./fr":394,"./fr-ca":395,"./fr-ca.js":395,"./fr-ch":396,"./fr-ch.js":396,"./fr.js":394,"./fy":397,"./fy.js":397,"./ga":398,"./ga.js":398,"./gd":399,"./gd.js":399,"./gl":400,"./gl.js":400,"./gom-deva":401,"./gom-deva.js":401,"./gom-latn":402,"./gom-latn.js":402,"./gu":403,"./gu.js":403,"./he":404,"./he.js":404,"./hi":405,"./hi.js":405,"./hr":406,"./hr.js":406,"./hu":407,"./hu.js":407,"./hy-am":408,"./hy-am.js":408,"./id":409,"./id.js":409,"./is":410,"./is.js":410,"./it":411,"./it-ch":412,"./it-ch.js":412,"./it.js":411,"./ja":413,"./ja.js":413,"./jv":414,"./jv.js":414,"./ka":415,"./ka.js":415,"./kk":416,"./kk.js":416,"./km":417,"./km.js":417,"./kn":418,"./kn.js":418,"./ko":419,"./ko.js":419,"./ku":420,"./ku.js":420,"./ky":421,"./ky.js":421,"./lb":422,"./lb.js":422,"./lo":423,"./lo.js":423,"./lt":424,"./lt.js":424,"./lv":425,"./lv.js":425,"./me":426,"./me.js":426,"./mi":427,"./mi.js":427,"./mk":428,"./mk.js":428,"./ml":429,"./ml.js":429,"./mn":430,"./mn.js":430,"./mr":431,"./mr.js":431,"./ms":432,"./ms-my":433,"./ms-my.js":433,"./ms.js":432,"./mt":434,"./mt.js":434,"./my":435,"./my.js":435,"./nb":436,"./nb.js":436,"./ne":437,"./ne.js":437,"./nl":438,"./nl-be":439,"./nl-be.js":439,"./nl.js":438,"./nn":440,"./nn.js":440,"./oc-lnc":441,"./oc-lnc.js":441,"./pa-in":442,"./pa-in.js":442,"./pl":443,"./pl.js":443,"./pt":444,"./pt-br":445,"./pt-br.js":445,"./pt.js":444,"./ro":446,"./ro.js":446,"./ru":447,"./ru.js":447,"./sd":448,"./sd.js":448,"./se":449,"./se.js":449,"./si":450,"./si.js":450,"./sk":451,"./sk.js":451,"./sl":452,"./sl.js":452,"./sq":453,"./sq.js":453,"./sr":454,"./sr-cyrl":455,"./sr-cyrl.js":455,"./sr.js":454,"./ss":456,"./ss.js":456,"./sv":457,"./sv.js":457,"./sw":458,"./sw.js":458,"./ta":459,"./ta.js":459,"./te":460,"./te.js":460,"./tet":461,"./tet.js":461,"./tg":462,"./tg.js":462,"./th":463,"./th.js":463,"./tk":464,"./tk.js":464,"./tl-ph":465,"./tl-ph.js":465,"./tlh":466,"./tlh.js":466,"./tr":467,"./tr.js":467,"./tzl":468,"./tzl.js":468,"./tzm":469,"./tzm-latn":470,"./tzm-latn.js":470,"./tzm.js":469,"./ug-cn":471,"./ug-cn.js":471,"./uk":472,"./uk.js":472,"./ur":473,"./ur.js":473,"./uz":474,"./uz-latn":475,"./uz-latn.js":475,"./uz.js":474,"./vi":476,"./vi.js":476,"./x-pseudo":477,"./x-pseudo.js":477,"./yo":478,"./yo.js":478,"./zh-cn":479,"./zh-cn.js":479,"./zh-hk":480,"./zh-hk.js":480,"./zh-mo":481,"./zh-mo.js":481,"./zh-tw":482,"./zh-tw.js":482};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=571},673:function(e,t,r){"use strict";r.r(t);var n=r(513),o=r(336),l={extends:n.a,props:{chartdata:new o.a,dataGrouping:{type:String,validator:function(e){return-1!==["hourly","daily","weekly"].indexOf(e)}},options:{type:Object,default:function(){return{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{scaleLabel:{display:!0,labelString:"Messages"},ticks:{beginAtZero:!0,precision:0}}]}}}}},watch:{chartdata:{handler:function(){this.updateGraph()},deep:!0}},methods:{setStacked:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;this.chartdata.numPersonsInChat>e?(this.options.scales.xAxes[0].stacked=!0,this.options.scales.yAxes[0].stacked=!0):(this.options.scales.xAxes[0].stacked=!1,this.options.scales.yAxes[0].stacked=!1)},updateGraph:function(){var e=this;this.setStacked(),"hourly"===this.dataGrouping?this.chartdata.getHourlyData().then((function(t){return e.renderChart(t,e.options)})):"daily"===this.dataGrouping?this.chartdata.getDailyData().then((function(t){return e.renderChart(t,e.options)})):this.chartdata.getWeeklyData().then((function(t){return e.renderChart(t,e.options)}))}},mounted:function(){this.updateGraph()}},c=r(30),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);