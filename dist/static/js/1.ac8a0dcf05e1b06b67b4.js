webpackJsonp([1],{"21It":function(e,t,n){"use strict";var r=n("FtD3");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"5VQ+":function(e,t,n){"use strict";var r=n("cGG2");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},"7GwW":function(e,t,n){"use strict";var r=n("cGG2"),i=n("21It"),o=n("DQCr"),s=n("oJlt"),a=n("GHBc"),c=n("FtD3"),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("thJu");e.exports=function(e){return new Promise(function(t,f){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var v=e.auth.username||"",y=e.auth.password||"";d.Authorization="Basic "+u(v+":"+y)}if(p.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};i(t,f,r),p=null}},p.onerror=function(){f(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n("p1b6"),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(d,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},BfQM:function(e,t){},DQCr:function(e,t,n){"use strict";var r=n("cGG2");function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var s=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))}))}),o=s.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},FtD3:function(e,t,n){"use strict";var r=n("t8qj");e.exports=function(e,t,n,i,o){var s=new Error(e);return r(s,t,n,i,o)}},GHBc:function(e,t,n){"use strict";var r=n("cGG2");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"JP+z":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},KCLY:function(e,t,n){"use strict";(function(t){var r=n("cGG2"),i=n("5VQ+"),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=n("7GwW"):void 0!==t&&(a=n("7GwW")),a),transformRequest:[function(e,t){return i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(o)}),e.exports=c}).call(t,n("W2nU"))},Re3r:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},TNV1:function(e,t,n){"use strict";var r=n("cGG2");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},"W1+L":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=n.n(r),o=n("y/jF"),s=n("3Q4o"),a=n("GQaK"),c={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3},click:{type:Boolean,default:!1},threshold:{type:Number,default:.3},speed:{type:Number,default:400}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var e=this;this.update(),window.addEventListener("resize",function(){e.slide&&e.slide.enabled&&(clearTimeout(e.resizeTimer),e.resizeTimer=setTimeout(function(){e.slide.isInTransition?e._onScrollEnd():e.autoPlay&&e._play(),e.refresh()},60))})},activated:function(){if(this.slide){this.slide.enable();var e=this.slide.getCurrentPage().pageX;this.slide.goToPage(e,0,0),this.currentPageIndex=e,this.autoPlay&&this._play()}},deactivated:function(){this.slide.disable(),clearTimeout(this.timer)},beforeDestroy:function(){this.slide.disable(),clearTimeout(this.timer)},methods:{update:function(){var e=this;this.slide&&this.slide.destroy(),this.$nextTick(function(){e.init()})},refresh:function(){this._setSlideWidth(!0),this.slide.refresh()},prev:function(){this.slide.prev()},next:function(){this.slide.next()},init:function(){clearTimeout(this.timer),this.currentPageIndex=0,this._setSlideWidth(),this._initDots(),this._initSlide(),this.autoPlay&&this._play()},_setSlideWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,n=this.$refs.slider.clientWidth,r=0;r<this.children.length;r++){var i=this.children[r];Object(s.a)(i,"slider-item"),i.style.width=n+"px",t+=n}this.loop&&!e&&(t+=2*n),this.$refs.sliderGroup.style.width=t+"px"},_initSlide:function(){var e=this;this.slide=new a.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:this.threshold,speed:this.speed},bounce:!1,stopPropagation:!0,click:this.click}),this.slide.on("scrollEnd",this._onScrollEnd),this.slide.on("touchEnd",function(){e.autoPlay&&e._play()}),this.slide.on("beforeScrollStart",function(){e.autoPlay&&clearTimeout(e.timer)})},_onScrollEnd:function(){var e=this.slide.getCurrentPage().pageX;this.currentPageIndex=e,this.autoPlay&&this._play()},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.slide.next()},this.interval)}},watch:{loop:function(){this.update()},autoPlay:function(){this.update()},speed:function(){this.update()},threshold:function(){this.update()}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"dots"},e._l(e.dots,function(t,r){return n("span",{key:r,staticClass:"dot",class:{active:e.currentPageIndex===r}})}))])},staticRenderFns:[]};var f=n("VU/8")(c,u,!1,function(e){n("BfQM")},"data-v-4245701e",null).exports,l=n("qwAB"),d=n("F4+m"),p=n("m40h"),h=n("T452"),m=n("NYxO"),v={mixins:[d.b],created:function(){this._getRecommend(),this._getDiscList()},methods:i()({handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)},_getRecommend:function(){var e=this;Object(p.b)().then(function(t){t.code===h.a&&(e.recommends=t.data.slider)})},_getDiscList:function(){var e=this;Object(p.a)().then(function(t){t.code===h.a&&(e.discList=t.data.list)})},loadImage:function(){this.checkloaded||(this.checkloaded=!0,this.$refs.scroll.refresh())}},Object(m.d)({setDisc:"SET_DISC"})),components:{Slider:f,Loading:o.a,Scroll:l.a},data:function(){return{recommends:[],discList:[]}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[n("div",[e.recommends.length?n("div",{staticClass:"slider-wrapper"},[n("slider",e._l(e.recommends,function(t){return n("div",{key:t.id},[n("a",{attrs:{href:t.linkUrl}},[n("img",{staticClass:"needsclick",attrs:{src:t.picUrl},on:{load:e.loadImage}})])])}))],1):e._e(),e._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),n("ul",e._l(e.discList,function(t,r){return n("li",{key:r,staticClass:"item",on:{click:function(n){e.selectItem(t)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),e._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),e._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[n("loading")],1)]),e._v(" "),n("router-view")],1)},staticRenderFns:[]};var g=n("VU/8")(v,y,!1,function(e){n("p3TX")},"data-v-e7da113e",null);t.default=g.exports},XmWM:function(e,t,n){"use strict";var r=n("KCLY"),i=n("cGG2"),o=n("fuGk"),s=n("xLtR");function a(e){this.defaults=e,this.interceptors={request:new o,response:new o}}a.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),(e=i.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=a},cGG2:function(e,t,n){"use strict";var r=n("JP+z"),i=n("Re3r"),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function a(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:i,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,i=arguments.length;r<i;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},cWxy:function(e,t,n){"use strict";var r=n("dVOP");function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i(function(t){e=t}),cancel:e}},e.exports=i},dIwP:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},dVOP:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},fuGk:function(e,t,n){"use strict";var r=n("cGG2");function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=i},m40h:function(e,t,n){"use strict";t.b=function(){var e=s()({},c.b,{platform:"h5",uin:0,needNewCode:1});return Object(a.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,c.c)},t.a=function(){var e=s()({},c.b,{g_tk:1928093487,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,format:"json",sin:0,ein:29,sortId:5,categoryId:1e7,rnd:Math.random()});return f.a.get("http://ustbhuangyi.com/music/api/getDiscList",{params:e}).then(function(e){return i.a.resolve(e.data)})},t.c=function(e){var t=s()({},c.b,{g_tk:1928093487,disstid:e,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return f.a.get("http://ustbhuangyi.com/music/api/getCdInfo",{params:t}).then(function(e){return i.a.resolve(e.data)})};var r=n("//Fk"),i=n.n(r),o=n("woOf"),s=n.n(o),a=n("Gak4"),c=n("T452"),u=n("mtWM"),f=n.n(u)},mtWM:function(e,t,n){e.exports=n("tIFN")},oJlt:function(e,t,n){"use strict";var r=n("cGG2"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(s[t]&&i.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},p1b6:function(e,t,n){"use strict";var r=n("cGG2");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},p3TX:function(e,t){},pBtG:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},pxG4:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},qRfI:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},t8qj:function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e}},tIFN:function(e,t,n){"use strict";var r=n("cGG2"),i=n("JP+z"),o=n("XmWM"),s=n("KCLY");function a(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=a(s);c.Axios=o,c.create=function(e){return a(r.merge(s,e))},c.Cancel=n("dVOP"),c.CancelToken=n("cWxy"),c.isCancel=n("pBtG"),c.all=function(e){return Promise.all(e)},c.spread=n("pxG4"),e.exports=c,e.exports.default=c},thJu:function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i(){this.message="String contains an invalid character"}i.prototype=new Error,i.prototype.code=5,i.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,o=String(e),s="",a=0,c=r;o.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&t>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new i;t=t<<8|n}return s}},xLtR:function(e,t,n){"use strict";var r=n("cGG2"),i=n("TNV1"),o=n("pBtG"),s=n("KCLY"),a=n("dIwP"),c=n("qRfI");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return u(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(u(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}}});