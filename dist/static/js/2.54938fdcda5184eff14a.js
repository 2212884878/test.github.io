webpackJsonp([2],{EKLI:function(t,e){},HD7n:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),a=s("BO1k"),r=s.n(a),o={name:"scrollPane",data:function(){return{left:0}},methods:{handleScroll:function(t){var e=t.wheelDelta||3*-t.deltaY,s=this.$refs.scrollContainer.offsetWidth,i=this.$refs.scrollWrapper.offsetWidth;e>0?this.left=Math.min(0,this.left+e):s-15<i?this.left<-(i-s+15)?this.left=this.left:this.left=Math.max(this.left+e,s-i-15):this.left=0},moveToTarget:function(t){var e=this.$refs.scrollContainer.offsetWidth,s=t.offsetLeft,i=t.offsetWidth;s<-this.left?this.left=15-s:s+15>-this.left&&s+i<-this.left+e-15||(this.left=-(s-(e-i)+15))}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{wheel:function(e){return e.preventDefault(),t.handleScroll(e)}}},[s("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{left:t.left+"px"}},[t._t("default")],2)])},staticRenderFns:[]};var c={name:"tags-view",components:{ScrollPane:s("VU/8")(o,l,!1,function(t){s("lWGy")},"data-v-d0343506",null).exports},data:function(){return{visible:!1,top:0,left:0,selectedTag:{}}},computed:{visitedViews:function(){return this.$store.state.visitedViews}},watch:{$route:function(){if("orderList"===this.$route.name){var t="";t="all"===this.$route.params.type?"订单综合查询":"writeoff"===this.$route.params.type?"已核销订单查询":"alreadyover"===this.$route.params.type?"已完成订单查询":"areadypay"===this.$route.params.type?"已支付订单查询":"orverexception"===this.$route.params.type?"完成异常查询":"alreadyfree"===this.$route.params.type?"已释放订单查询":"occupation"===this.$route.params.type?"已占用订单查询":"fixed"===this.$route.params.type?"预下订单查询":"applicationreturn"===this.$route.params.type?"退款申请查询":"areadyreturn"===this.$route.params.type?"已退票订单查询":"writeoffexception"===this.$route.params.type?"占用异常查询":"订单综合查询",sessionStorage.setItem("order",t),this.$route.meta.title=sessionStorage.getItem("order")}this.addViewTags(),this.moveToCurrentTag()},visible:function(t){t?document.body.addEventListener("click",this.closeMenu):document.body.removeEventListener("click",this.closeMenu)}},mounted:function(){this.addViewTags()},methods:{generateRoute:function(){return!!this.$route.name&&this.$route},isActive:function(t){return t.path===this.$route.path},addViewTags:function(){var t=this.generateRoute();if(!t)return!1;this.$store.dispatch("addVisitedViews",t)},moveToCurrentTag:function(){var t=this,e=this.$refs.tag;this.$nextTick(function(){var s=!0,i=!1,n=void 0;try{for(var a,o=r()(e);!(s=(a=o.next()).done);s=!0){var l=a.value;if(l.to.path===t.$route.path){t.$refs.scrollPane.moveToTarget(l.$el);break}}}catch(t){i=!0,n=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw n}}})},closeSelectedTag:function(t){var e=this;this.$store.dispatch("delVisitedViews",t).then(function(s){if(e.isActive(t)){var i=s.slice(-1)[0];i?e.$router.push(i):e.$router.push("/")}})},closeOthersTags:function(){var t=this;this.$router.push(this.selectedTag),this.$store.dispatch("delOthersViews",this.selectedTag).then(function(){t.moveToCurrentTag()})},closeAllTags:function(){this.$store.dispatch("delAllViews"),this.$router.push("/home")},openMenu:function(t,e){this.visible=!0,this.selectedTag=t;var s=this.$el.getBoundingClientRect().left;this.left=e.clientX-s+215,this.top=e.clientY},closeMenu:function(){this.visible=!1}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tags-view-container"},[s("scroll-pane",{ref:"scrollPane",staticClass:"tags-view-wrapper"},t._l(Array.from(t.visitedViews),function(e,i){return s("router-link",{key:e.path,ref:"tag",refInFor:!0,staticClass:"tags-view-item",class:t.isActive(e)?"active":"",attrs:{to:e},nativeOn:{contextmenu:function(s){s.preventDefault(),t.openMenu(e,s)}}},[t._v("\n\t\t\t"+t._s(e.title)+"\n\t\t\t"),i>0?[s("span",{staticClass:"el-icon-close",on:{click:function(s){s.preventDefault(),s.stopPropagation(),t.closeSelectedTag(e)}}})]:t._e()],2)})),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"contextmenu",style:{left:t.left+"px",top:t.top+"px"}},[s("li",{on:{click:function(e){t.closeSelectedTag(t.selectedTag)}}},[t._v("关闭")]),t._v(" "),s("li",{on:{click:t.closeOthersTags}},[t._v("关闭其他")]),t._v(" "),s("li",{on:{click:t.closeAllTags}},[t._v("关闭所有")])])],1)},staticRenderFns:[]};var h=s("VU/8")(c,u,!1,function(t){s("TwHG"),s("ieOb")},"data-v-2b09266e",null).exports,f=s("NYxO"),d={data:function(){return{items:[],height:0,systemName:"",urls:"/main"}},components:{TagsView:h},computed:n()({},Object(f.b)(["userId","accussToken"]),{NewList:function(){var t=this.items,e=[],s=[],i=[];t.push({});for(var n=0;n<t.length-1;n++)t[n].grouptext===t[n+1].grouptext?s.push(t[n]):(s.push(t[n]),e.push(s.slice(0)),s.length=0);return e.forEach(function(t,e){i[e]=Array(t),i[e].title=t[0].grouptext}),console.log(i),i},defaultActive:function(){if(3==this.$route.path.split("/").reverse().length){var t=this.$route.path.split("/").reverse();return"/"+t[1]+"/"+t[0]}return"/"+this.$route.path.split("/").reverse()[0]}}),mounted:function(){"undefined"!=sessionStorage.getItem("systemName")&&null!=sessionStorage.getItem("systemName")&&""!=sessionStorage.getItem("systemName")||sessionStorage.setItem("systemName",this.$route.query.name),this.systemName=sessionStorage.getItem("systemName"),this.height=document.documentElement.clientHeight-120,this.getNav(),this.$store.dispatch("SetTypeID"),this.$store.dispatch("SetClassID"),this.$store.dispatch("SetDayType")},methods:{qite:function(){this.$store.commit("LOGOUT"),this.$router.push("/")},handleopen:function(t,e){console.log(t,e)},handleclose:function(t,e){console.log(t,e)},handleselect:function(t,e){console.log(t,e)},getNav:function(){var t=this;if(this.userId&&this.systemName){var e={userId:this.userId,systemName:this.systemName};this.$axios.get("http://192.168.2.29:2080/theMenu/findNav",{params:e}).then(function(e){200===e.data.code?t.items=e.data.data:t.$message.error("出错")}).catch(function(t){console.log(t)})}else this.$message.error("没登录")}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"Sub1Index"}},[s("el-container",[s("el-aside",{attrs:{width:"200px"}},[s("div",{staticClass:"loge"},[t._v(t._s(t.systemName))]),t._v(" "),s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"show-timeout":200,"default-active":t.defaultActive,"unique-opened":"",router:""},on:{open:t.handleopen,close:t.handleclose,select:t.handleselect}},[t._l(t.NewList,function(e,i){return[s("el-submenu",{attrs:{index:i+""}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-menu"}),t._v(t._s(e.title))]),t._v(" "),t._l(e[0],function(e){return s("el-menu-item",{key:e.url,attrs:{index:e.url}},[s("i",{staticClass:"el-icon-setting"}),t._v(t._s(e.text))])})],2)]})],2)],1),t._v(" "),s("el-container",[s("el-header",[t._v("你好，黎孝義"),s("span",{staticClass:"logout",on:{click:t.qite}},[t._v("退出登录")])]),t._v(" "),s("el-main",{staticClass:"pt0",style:{height:t.height+"px"}},[s("section",{staticClass:"content-container"},[s("div",{staticClass:"grid-content bg-purple-light"},[s("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[s("tags-view",{staticClass:"mb10"})],1),t._v(" "),s("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[s("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[s("router-view")],1)],1)],1)])]),t._v(" "),s("el-footer",[t._v("版权信息")])],1)],1)],1)},staticRenderFns:[]};var m=s("VU/8")(d,p,!1,function(t){s("EKLI"),s("Qfh0")},"data-v-394189e4",null);e.default=m.exports},Qfh0:function(t,e){},TwHG:function(t,e){},ieOb:function(t,e){},lWGy:function(t,e){}});