webpackJsonp([3],{"0IpB":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r=i("qwAB"),a=i("y/jF"),o=i("3Q4o"),c={props:{data:{type:Array,default:[]}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},created:function(){this.probeType=3,this.listenScroll=!0,this.touch={},this.listHeight=[]},methods:{selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var e=Object(o.b)(t.target,"index"),i=t.touches[0];this.touch.y1=i.pageY,this.touch.anchorIndex=e,this._scrollTo(e)},onShortcutTouchMove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var i=(this.touch.y2-this.touch.y1)/18|0,s=parseInt(this.touch.anchorIndex)+i;this._scrollTo(s)},refresh:function(){this.$refs.listview.refresh()},scroll:function(t){this.scrollY=t.y},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,e=0;this.listHeight.push(e);for(var i=0;i<t.length;i++){e+=t[i].clientHeight,this.listHeight.push(e)}},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.$refs.listview.scrollToElement(this.$refs.listGroup[t],100),this.scrollY=this.$refs.listview.scroll.y)}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var e=this.listHeight;if(t>0)this.currentIndex=0;else{for(var i=0;i<e.length-1;i++){var s=e[i],n=e[i+1];if(-t>=s&&-t<n)return this.currentIndex=i,void(this.diff=n+t)}this.currentIndex=e.length-2}},diff:function(t){var e=t>0&&t<30?t-30:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fixed.style.transform="translate3d(0,"+e+"px,0)")}},components:{Scroll:r.a,Loading:a.a}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll",{ref:"listview",staticClass:"listview",attrs:{"listen-scroll":t.listenScroll,"probe-type":t.probeType,data:t.data},on:{scroll:t.scroll}},[i("ul",t._l(t.data,function(e,s){return i("li",{key:s,ref:"listGroup",refInFor:!0,staticClass:"list-group"},[i("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),i("uL",t._l(e.items,function(e,s){return i("li",{key:s,staticClass:"list-group-item",on:{click:function(i){t.selectItem(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))],1)})),t._v(" "),i("div",{staticClass:"list-shortcut",on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.onShortcutTouchStart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)},touchend:function(t){t.stopPropagation()}}},[i("ul",t._l(t.shortcutList,function(e,s){return i("li",{key:s,staticClass:"item",class:{current:t.currentIndex===s},attrs:{"data-index":s}},[t._v(t._s(e)+"\n      ")])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[i("div",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[i("loading")],1)])},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("YEAD")},"data-v-1d65d1fb",null).exports,h=i("Sgn/"),f=i("F4+m"),d=i("T452"),v=i("0aAL"),g=i("NYxO"),p={mixins:[f.b],data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:n()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.singer.style.bottom=e,this.$refs.scroll.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;Object(h.b)().then(function(e){e.code===d.a&&(t.singers=t._normalizeSinger(e.data.list))})},_normalizeSinger:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,i){i<10&&e.hot.items.push(new v.a({name:t.Fsinger_name,id:t.Fsinger_mid}));var s=t.Findex;e[s]||(e[s]={title:s,items:[]}),e[s].items.push(new v.a({name:t.Fsinger_name,id:t.Fsinger_mid}))});var i=[],s=[];for(var n in e){var r=e[n];r.title.match(/[a-zA-Z]/)?i.push(r):"热门"===r.title&&s.push(r)}return i.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),s.concat(i)}},Object(g.d)({setSinger:"SET_SINGER"})),components:{ListView:u}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"singer",staticClass:"singer"},[e("list-view",{ref:"scroll",attrs:{data:this.singers},on:{select:this.selectSinger}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var _=i("VU/8")(p,m,!1,function(t){i("wkRw")},"data-v-2f20cb99",null);e.default=_.exports},"Sgn/":function(t,e,i){"use strict";e.b=function(){var t=n()({},a.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:1664029744});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,a.c)},e.a=function(t){var e=n()({},a.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,a.c)};var s=i("woOf"),n=i.n(s),r=i("Gak4"),a=i("T452")},YEAD:function(t,e){},wkRw:function(t,e){}});