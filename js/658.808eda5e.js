"use strict";(self["webpackChunkshedu_sheke"]=self["webpackChunkshedu_sheke"]||[]).push([[658],{658:function(t,i,a){a.r(i),a.d(i,{default:function(){return _}});var n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"article-list"},[i("div",{staticClass:"content-box"},[i("div",{staticClass:"card"},[t._m(0),i("div",{staticClass:"parting-line wow animate__animated animate__zoomIn"}),i("div",{staticClass:"card-content"},[i("ul",{staticClass:"wow animate__animated animate__fadeInLeft"},t._l(t.enrollment,(function(a){return i("li",[i("div"),i("div",[i("a",{attrs:{href:a.link}},[t._v(t._s(a.title))])]),i("div",[t._v(t._s(a.data))])])})),0)])]),i("div",{staticClass:"card"},[t._m(1),i("div",{staticClass:"parting-line wow animate__animated animate__zoomIn"}),i("div",{staticClass:"card-content"},[i("ul",{staticClass:"wow animate__animated animate__fadeInRight"},t._l(t.notification,(function(a){return i("li",[i("div"),i("div",[i("a",{attrs:{href:a.link}},[t._v(t._s(a.title))])]),i("div",[t._v(t._s(a.data))])])})),0)])])])])},s=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"title"},[i("div",{staticClass:"title-content wow animate__animated animate__zoomIn"},[i("i",{staticClass:"document-icon"}),t._v("招生信息 ")]),i("div",{staticClass:"title-button"},[i("a",{attrs:{href:"#"}},[t._v("MORE")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"title"},[i("div",{staticClass:"title-content wow animate__animated animate__zoomIn"},[i("i",{staticClass:"notification-icon"}),t._v("通知公告 ")]),i("div",{staticClass:"title-button"},[i("a",{attrs:{href:"#"}},[t._v("MORE")])])])}],e={data(){return{enrollment:[],notification:[]}},methods:{async getArticleList(){let t=await this.$api.getArticleList();this.enrollment=t.data.enrollment,this.notification=t.data.notification},Wow(){let t=new this.$Wow.WOW({boxClass:"wow",animateClass:"animate__animated",offset:300,mobile:!0,live:!0});t.init()}},created(){this.getArticleList()},mounted(){this.Wow()}},l=e,o=a(1001),c=(0,o.Z)(l,n,s,!1,null,"77e32425",null),_=c.exports}}]);
//# sourceMappingURL=658.808eda5e.js.map