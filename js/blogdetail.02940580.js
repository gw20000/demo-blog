(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blogdetail"],{"0af1":function(t,e,a){},"15ce":function(t,e,a){},1780:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"  img-container",style:t.imageContainerStyle},[a("img",{class:t.imgClass(),style:t.imgStyle,attrs:{src:t.src,width:t.size,height:t.size,alt:"图片组件"}})])},i=[],o={name:"Img",props:{src:{type:String,required:!0},size:{type:Number,default:150},isBorderBox:{type:Boolean,default:!0},hasBorder:{type:Boolean,default:!1}},data(){return{imgStyle:{width:this.size+"px",height:this.size+"px"},score1:20,score2:100,imageContainerStyle:{width:this.size+"px"},count:0}},computed:{totalScore(){return this.score1+this.score2}},methods:{imgClass(){return(1==this.isBorderBox?"borderBox":"")+" "+(1==this.hasBorder?"hasBorder":"")},toggle(){}}},s=o,r=(a("e1ed"),a("2877")),c=Object(r["a"])(s,n,i,!1,null,"be5ae3a8",null);e["a"]=c.exports},"1b62":function(t,e,a){"use strict";a.d(e,"a",(function(){return n["a"]})),a.d(e,"b",(function(){return o}));var n=a("e128"),i=a("20ca"),o=function(t){return console.log("🌈mainContainerRefValue : ",t),{data(){return{mainScrollTop:0,handleMainScrollDebounce__:this.handleMainScrollDebounce()}},methods:{handleSetMainScrollTop(e){this.$refs[t].scrollTop=e},handleMainScroll(){window.$eventBus.$emit("mainScroll",this.$refs[t]),this.mainScrollTop=this.$refs[t].scrollTop},handleMainScrollDebounce(){return Object(i["a"])(this.handleMainScroll,15)}},mounted(){console.log(this.$refs),console.log(this.$refs[t]),this.$refs[t].addEventListener("scroll",this.handleMainScrollDebounce__),window.$eventBus.$on("setMainScrollTop",this.handleSetMainScrollTop)},beforeDestroy(){window.$eventBus.$emit("mainScroll"),this.$refs[t].removeEventListener("scroll",this.handleMainScrollDebounce__),window.$eventBus.$off("setMainScrollTop",this.handleSetMainScrollTop)}}}},2291:function(t,e,a){},"2c43":function(t,e,a){},"2ff0":function(t,e,a){"use strict";a("dadf")},"33d7":function(t,e,a){},3600:function(t,e,a){},"3c2f":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-container"},[a("div",{staticClass:"left"},[t._t("left")],2),a("div",{staticClass:"main"},[t._t("default")],2),a("div",{staticClass:"right"},[t._t("right")],2)])},i=[]},"40c7":function(t,e,a){"use strict";a("0af1")},5849:function(t,e,a){"use strict";var n=a("3c2f"),i=a("5a3c"),o=(a("7cda"),a("2877")),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"f8bff3c8",null);e["default"]=s.exports},5896:function(t,e,a){"use strict";a("6b9f")},"5a3c":function(t,e,a){"use strict";var n=a("7f15"),i=a.n(n);e["default"]=i.a},"5ea0":function(t,e,a){"use strict";a("15ce")},"5fa3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-container"},t._l(t.list,(function(e,n){return a("li",{key:e.id},[a("span",{class:{active:e.isSelect},on:{click:function(a){return t.handleClick(e)}}},[t._v(" "+t._s(e.name)+" "),e.aside?a("span",{staticClass:"articleCount",class:{active:e.isSelect}},[t._v(" "+t._s(e.aside)+" ")]):t._e()]),t._v(" "),t.reRender?a("List",{attrs:{list:e.children},on:{select:t.handleClick}}):t._e()],1)})),0)},i=[],o={name:"List",props:{list:{type:Array,default:()=>[]},count:{}},data(){return{reRender:!0}},watch:{list:{handler(){this.reRender=!1,this.$nextTick(()=>{this.reRender=!0})}}},methods:{handleClick(t){t.isSelect||this.$emit("select",t)}},updated(){console.log("List updated")}},s=o,r=(a("2ff0"),a("2877")),c=Object(r["a"])(s,n,i,!1,null,"426d2880",null);e["a"]=c.exports},"684a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-area-container"},[a("DataForm",t._g({attrs:{placeholder:t.placeholder}},t.$listeners)),t._v(" "),a("div",{staticClass:"title"},[a("h3",[t._v(" "+t._s(t.title)+" "),a("span",[t._v("("+t._s(t.subTitle)+")")])])]),a("DataList",{attrs:{list:t.list}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"formContainer",staticClass:"data-form-container",attrs:{id:"data-form-container"}},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-item"},[a("label",{attrs:{for:"nickname"}},[t._v("用户昵称：")]),a("div",{staticClass:"input-area"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.nickname,expression:"formData.nickname",modifiers:{trim:!0}}],attrs:{id:"nickname",type:"text",placeholder:"用户昵称",maxlength:"10"},domProps:{value:t.formData.nickname},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/10")])]),a("div",{staticClass:"error",class:{showError:t.showError.nickname}},[t._v(t._s(t.error.nickname))])]),a("div",{staticClass:"form-item"},[a("label",{attrs:{for:"content"}},[t._v("输入内容：")]),a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.content,expression:"formData.content",modifiers:{trim:!0}}],attrs:{id:"content",placeholder:t.placeholder,maxlength:"300"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),a("div",{staticClass:"error",class:{showError:t.showError.content}},[t._v(t._s(t.error.content))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"button-area"},[a("button",{attrs:{disabled:t.isSubmmiting}},[t._v(t._s(t.isSubmmiting?"提交中...":"提交"))])])])])])},s=[],r={props:{placeholder:{type:String,default:"输入内容"}},data(){return{showError:{nickname:!1,content:!1},isSubmmiting:!1,formData:{nickname:"",content:""}}},computed:{error(){return{nickname:""===this.formData.nickname?"请输入昵称":"",content:""===this.formData.content?"请输入内容":""}}},methods:{handleSubmit(){if(console.log("handleSubmit"),!this.isSubmmiting){if(this.error.nickname||this.error.content)return this.error.nickname&&(this.showError.nickname=!0),void(this.error.content&&(this.showError.content=!0));this.isSubmmiting=!0,this.$emit("submit",this.formData,t=>{this.$showMessage({content:t,type:"success",duration:2e3,container:this.$refs.formContainer,callback:()=>{this.isSubmmiting=!1,this.formData.nickname="",this.formData.content="",this.showError.nickname=!1,this.showError.content=!1}})})}}}},c=r,l=(a("5ea0"),a("2877")),d=Object(l["a"])(c,o,s,!1,null,"57df7a59",null),u=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"data-list-container"},t._l(t.list,(function(e){return a("li",{key:e.id},[a("Img",{attrs:{src:e.avatar,size:44}}),a("div",{staticClass:"data"},[a("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),a("div",{staticClass:"content"},[t._v(t._s(e.content))]),a("div",{staticClass:"date"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])],1)})),0)},m=[],f=a("1780"),g=a("ed08"),p={components:{Img:f["a"]},props:["list"],methods:{formatDate:g["c"]}},v=p,b=(a("7b40"),Object(l["a"])(v,h,m,!1,null,"12589f67",null)),_=b.exports,S={components:{DataForm:u,DataList:_},props:{title:{type:String},subTitle:{type:String},list:{type:Array,default:()=>[]},isListLoading:{type:Boolean,default:!0},placeholder:{type:String,default:"输入内容"}},methods:{}},C=S,y=(a("d1b5"),Object(l["a"])(C,n,i,!1,null,"ecd66f0c",null));e["a"]=y.exports},"6b9f":function(t,e,a){},"7b40":function(t,e,a){"use strict";a("33d7")},"7cda":function(t,e,a){"use strict";a("e18f")},"7f15":function(t,e){},a58b:function(t,e,a){"use strict";a("3600")},aa7b:function(t,e,a){"use strict";a("fcda")},cc61:function(t,e,a){},ccf9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{staticClass:"detail-container",scopedSlots:t._u([{key:"right",fn:function(){return[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"right-container"},[t.data?a("BlogTOC",{attrs:{toc:t.data.toc}}):t._e()],1)]},proxy:!0}])},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"mainContainer",staticClass:"main-container"},[t.data?a("BlogDetail",{attrs:{blog:t.data}}):t._e(),!t.isLoading&&t.data?a("BlogComment"):t._e()],1)])},i=[],o=a("e128"),s=a("c8ac"),r=a("5849"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-detail-container"},[a("h1",[t._v(t._s(t.blog.title))]),a("div",{staticClass:"aside"},[a("span",[t._v("日期："+t._s(t.formatDate(t.blog.createDate)))]),a("span",[t._v("浏览： "+t._s(t.blog.scanNumber))]),a("a",{attrs:{href:"#blog-comment-container"}},[t._v("评论："+t._s(t.blog.commentNumber))]),a("RouterLink",{attrs:{to:{name:"CategoryBlog",params:{categoryId:t.blog.category.id}}}},[t._v(t._s(t.blog.category.name))])],1),a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.blog.htmlContent)}})])},l=[],d=(a("cc61"),a("2c43"),a("ed08")),u={props:{blog:{type:Object,required:!0}},methods:{formatDate:d["c"]}},h=u,m=(a("40c7"),a("2877")),f=Object(m["a"])(h,c,l,!1,null,"0850d000",null),g=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-comment-container",attrs:{id:"blog-comment-container"}},[a("MessageArea",{attrs:{list:t.data.rows,title:"评论列表",subTitle:""+t.data.total,isListLoading:t.isLoading,placeholder:"写下您的评论..."},on:{submit:t.handleSubmit}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isBottomUP,expression:"isBottomUP"}],staticClass:"is-bottom-up"},[t._v("---没有更多评论了---")])],1)},v=[],b=a("684a"),_={mixins:[Object(o["a"])({total:0,rows:[]})],components:{MessageArea:b["a"]},data(){return{page:1,limit:10,isBottomUP:!1,handleLoadMoreDebounce__:this.handleLoadMoreDebounce()}},methods:{async fetchData(){return await s["b"].getComments(this.$route.params.id,this.page,this.limit)},async handleSubmit(t,e){const a=await s["b"].postComment({nickname:t.nickname,content:t.content,blogId:this.$route.params.id});this.data.total++,this.data.rows.unshift(a),e("评论成功"),Math.ceil(this.data.rows.length/this.limit)>this.page+1&&(this.page++,console.log("page+1",this.page))},handleLoadMore(t){if(console.log("BlogComment组件-handleLoadMore",t),console.log(1),this.isLoading||!t)return;console.log(2);const e=100;t.scrollHeight-(t.scrollTop+t.clientHeight)<e&&(console.log(3),this.fetchMore())},handleLoadMoreDebounce(){return console.log("handleLoadMoreDebounce"),Object(d["a"])(this.handleLoadMore,100)},async fetchMore(){if(console.log(4),console.log(this.page+1,this.data.total,this.limit),this.page===Math.ceil(this.data.total/this.limit))return this.isBottomUP=!0,void console.log("return");console.log(5),this.isLoading=!0,this.page++;const t=await s["b"].getComments(this.$route.params.id,this.page,this.limit);t?(this.data.rows=this.data.rows.concat(t.rows),this.data.total=t.total):this.page--,this.isLoading=!1}},mounted(){this.$eventBus.$on("mainScroll",this.handleLoadMoreDebounce__)},beforeDestroy(){this.$eventBus.$off("mainScroll",this.handleLoadMoreDebounce__)}},S=_,C=(a("a58b"),Object(m["a"])(S,p,v,!1,null,"016164e8",null)),y=C.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-toc-container"},[a("h2",[t._v("目录")]),a("List",{attrs:{list:t.tocWithActiveAnchor},on:{select:t.handleSelectDebounce___}})],1)},w=[],$=a("5fa3"),L={components:{List:$["a"]},props:{toc:{type:Array,required:!0}},data(){return{activeAnchor:"",hs:[],handleSelectDebounce___:this.handleSelectDebounce()}},computed:{tocWithActiveAnchor(){console.log("计算属性toWithActiveAnchor");let t=1;const e=a=>{for(const n of a)n.activeAnchor=this.activeAnchor,n.isSelect=n.anchor===this.activeAnchor,n.id=t++,n.children&&n.children.length&&e(n.children);return[...a]};return e(this.toc)}},methods:{debugMainScroll(t,e){console.log(t,e)},handleSelect(t){if(location.hash==="#"+t.anchor)return location.hash="",void setTimeout(()=>{location.hash=t.anchor},0);location.hash=t.anchor},handleSelectDebounce(){return console.log("debounce handleSelect 1111111111111111"),Object(d["a"])(this.handleSelect,100)},doms(t){const e=[];if("undefined"===typeof t)return e;function a(t){for(const n of t)e.push(document.querySelector("#"+n.anchor)),n.children&&n.children.length&&a(n.children)}return a(t),e},setSelect(t){if(this.debugMainScrollDebounce("BlogTOC组件-handleSetSelect",t),!t)return;const e=120;this.activeAnchor="";for(const a of this.hs){if(!a)continue;const t=a.getBoundingClientRect().top;if(t>=0&&t<=e)this.activeAnchor=a.id;else{if(t>e)return;this.activeAnchor=a.id}}}},mounted(){this.hs=this.doms(this.toc),this.debounceSetSelect=Object(d["a"])(this.setSelect,50),this.$eventBus.$on("mainScroll",this.debounceSetSelect),this.debugMainScrollDebounce=Object(d["a"])(this.debugMainScroll,100)},updated(){console.log("BlogTOC updated")},destroyed(){this.$eventBus.$off("mainScroll",this.debounceSetSelect),console.log("destoryed BlogTOC")}},B=L,k=(a("5896"),Object(m["a"])(B,D,w,!1,null,"00ce9f8c",null)),M=k.exports,x=a("1b62"),O={mixins:[Object(o["a"])(null),Object(x["b"])("mainContainer")],components:{Layout:r["default"],BlogDetail:g,BlogTOC:M,BlogComment:y},data(){return{count:1}},methods:{async fetchData(){let t=await s["b"].getBlog(this.$route.params.id);if(t)return d["f"].setRouteTitle(t.title),t;this.$router.push("/404")}},updated(){const t=location.hash;location.hash="",setTimeout(()=>{location.hash=t},0)}},T=O,A=(a("aa7b"),Object(m["a"])(T,n,i,!1,null,"1956bb03",null));e["default"]=A.exports},d1b5:function(t,e,a){"use strict";a("2291")},dadf:function(t,e,a){},e128:function(t,e,a){"use strict";e["a"]=function(t=null){return{data(){return{isLoading:!0,data:t,isArray:!1}},async created(){this.data=await this.fetchData(),this.isLoading=!1},watch:{data(){console.log("data变化了",this.data),this.setIsArray&&this.setIsArray()}}}}},e18f:function(t,e,a){},e1ed:function(t,e,a){"use strict";a("f18d")},f18d:function(t,e,a){},fcda:function(t,e,a){}}]);