(function(){var e={8440:function(){},3599:function(e,t,n){"use strict";var a=n(6369),o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],i=n(8440),s=n.n(i),c=s(),u=n(1001),l=(0,u.Z)(c,o,r,!1,null,null,null),d=l.exports,f=n(2631),m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"index",style:e.autoHeight()},[e._m(0),e._m(1)])},h=[function(){var e=this,t=e._self._c;return t("header",{staticClass:"logo"},[t("a",{staticClass:"animate__animated animate__backInDown",attrs:{href:"/#/"}},[t("img",{attrs:{src:"https://static-cshu.cloudmiao.cn/static/sheke/images/LOGO/LOGO.png",alt:"山河大学 - 社科部 LOGO"}})])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[t("div",{staticClass:"info animate__animated animate__bounceInLeft"},[t("div",{staticClass:"info-content"},[t("div",{staticClass:"title animate__animated animate__bounce"},[t("p",[e._v("中文版")]),t("p",[e._v("山河大学社科部")])]),t("a",{attrs:{href:"/#/zh-cn"}},[t("div",{staticClass:"button animate__animated animate__fadeInDown"},[e._v("点击进入")])])]),t("div",{staticClass:"background-mask"})]),t("div",{staticClass:"info animate__animated animate__bounceInRight"},[t("div",{staticClass:"info-content"},[t("div",{staticClass:"title animate__animated animate__bounce"},[t("p",[e._v("ENGLISH")]),t("p",[e._v("Shanhe Social science")])]),t("a",{attrs:{href:"/#/en"}},[t("div",{staticClass:"button animate__animated animate__fadeInDown"},[e._v("点击进入")])])]),t("div",{staticClass:"background-mask"})])])}],p={methods:{autoHeight(){let e=document.documentElement.clientHeight;return`height: ${e}px;`}}},v=p,b=(0,u.Z)(v,m,h,!1,null,"265a849e",null),g=b.exports;const _=()=>n.e(338).then(n.bind(n,7338)),y=()=>n.e(984).then(n.bind(n,984)),k=()=>n.e(197).then(n.bind(n,5197)),w=()=>n.e(494).then(n.bind(n,494));a["default"].use(f.ZP);const C=[{path:"/",component:g,name:"Home",meta:{title:"山河大学社科部 - Shanhe Social science",type:"PC"}},{path:"/zh-cn",component:_,meta:{title:"首页 - 山河大学社科部",type:"PC"},children:[{path:"/zh-cn",component:w,title:"首页 - 山河大学社科部",type:"PC"}]},{path:"/en",component:y,meta:{title:"Home - Shanhe Social science",type:"PC"}},{path:"/mobile",component:k,meta:{title:"山河大学社科部 - Shanhe Social science",type:"Mobile"}}],O=new f.ZP({routes:C});O.beforeEach(((e,t,n)=>{e.meta.title&&(document.title=e.meta.title);const a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);a&&!e.path.startsWith("/mobile/")?n("/mobile"+e.fullPath):!a&&e.path.startsWith("/mobile/")?n(e.fullPath.replace("/mobile","")):n()}));var P=O,S=n(3822);a["default"].use(S.ZP);var j=new S.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),E=n(4161),N=n(8736);let x=E.Z.create({timeout:5e3});function A(e,t){switch(e){case 400:console.log("400");break;case 401:console.log("401");break;case 403:console.log("403");break;case 404:console.log("404");break;case 500:console.log("500");break;case 503:console.log("503");break;default:console.log(t);break}}x.interceptors.request.use((function(e){return"post"===e.method&&(e.data=N.stringify(e.data)),e}),(function(e){return Promise.reject(e)})),x.interceptors.response.use((function(e){return e}),(function(e){return A(e.response.status,e.message),Promise.reject(e)}));var H=x;const L={nav:"https://static-cshu.cloudmiao.cn/static/sheke/data/nav-info/data.json",newsHome:"https://static-cshu.cloudmiao.cn/static/sheke/data/news-home/data.json",departmentNews:"https://static-cshu.cloudmiao.cn/static/sheke/data/department-news/data.json"};var T=L;const I={getNav(){return H.get(T.nav)},getNewsHome(){return H.get(T.newsHome)},getDepartmentNews(){return H.get(T.departmentNews)}};var Z=I,B=n(551),D=n.n(B);a["default"].config.productionTip=!1,a["default"].prototype.$api=Z,a["default"].use(D()),new a["default"]({router:P,store:j,render:e=>e(d)}).$mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],o=e[l][1],r=e[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{180:"5334dcc4",197:"66f47b32",231:"79d4b309",338:"b3e1e2cb",494:"9649d22c",836:"b0a7f3b8",984:"aa831607"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{180:"b2a29631",197:"125df60b",231:"afca4a46",338:"988d471d",836:"b82dfd27"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="shedu-sheke:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode&&r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return o();e(a,s,null,o,r)}))},o={826:0};n.f.miniCss=function(e,t){var n={180:1,197:1,231:1,338:1,836:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={826:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],c=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(t&&t(a);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},a=self["webpackChunkshedu_sheke"]=self["webpackChunkshedu_sheke"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3599)}));a=n.O(a)})();
//# sourceMappingURL=index.19f4883e.js.map