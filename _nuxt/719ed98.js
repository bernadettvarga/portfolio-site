(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,7,8],{211:function(t,e,r){"use strict";r.r(e);var l={name:"GalleryImage",props:{item:{type:Object,required:!0}}},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],class:"gallery-image gallery-image--"+t.item.type,attrs:{"data-src":r(217)("./"+t.item.src+".jpg"),alt:"Bernadett Varga Photography "+(t.item.alt||"")}})}),[],!1,null,null,null);e.default=component.exports},212:function(t,e,r){t.exports=r.p+"img/enroute-french-2-2.447bd49.jpg"},213:function(t,e,r){t.exports=r.p+"img/mad-prod-2.9d24a00.jpg"},214:function(t,e,r){t.exports=r.p+"img/sb-1.034846a.jpg"},215:function(t,e,r){t.exports=r.p+"img/te-3.c649861.jpg"},216:function(t,e,r){"use strict";r.r(e);r(117);var l={name:"ChevronRightIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},n=r(15),o=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",t._b({staticClass:"material-design-icon chevron-right-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}},[t.title?r("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,c={name:"ArrowRightIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},d={name:"Gallery",components:{ChevronRightIcon:o,ArrowRight:Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",t._b({staticClass:"material-design-icon arrow-right-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}},[t.title?r("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,GalleryImage:r(211).default},props:{title:{type:String,default:""},description:{type:String,default:""},content:{type:Array,required:!0}},data:function(){return{showScrollHint:!0}},mounted:function(){this.listenToScroll()},methods:{listenToScroll:function(){window.addEventListener("scroll",this.hideScrollHint,!0)},hideScrollHint:function(){this.showScrollHint=!1}}},m=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-4 md:p-6 md:pt-0 md:pr-0 flex flex-col md:flex-row flex-1 items-stretch space-y-4 md:space-y-0 md:space-x-4 overflow-x-scroll"},[t.title||t.description?[r("div",{staticClass:"w-full md:w-72 md:self-end flex-shrink-0"},[t.title?[r("h1",{staticClass:"text-5xl"},[t._v(t._s(t.title))])]:t._e(),t._v(" "),t.description?[r("p",{staticClass:"font-display leading-5 text-lg p-10 pl-0 pt-5"},[t._v(t._s(t.description))])]:t._e()],2)]:t._e(),t._v(" "),t._l(t.content,(function(e){return r("div",{key:e.src,staticClass:"flex-shrink-0 relative"},[e.projectSlug?[r("NuxtLink",{attrs:{to:"/projects/"+e.projectSlug}},[r("GalleryImage",{attrs:{item:e}}),t._v(" "),r("div",{staticClass:"gallery-image__button"},[t._v("\n          See more\n          "),r("ArrowRight",{staticClass:"ml-3",attrs:{fillColor:"#FEFEFE",size:18}})],1)],1)]:[r("GalleryImage",{attrs:{item:e}})]],2)})),t._v(" "),t.showScrollHint?r("div",{staticClass:"hidden md:block fixed top-1/2 right-0 opacity-80"},[r("ChevronRightIcon",{attrs:{fillColor:"#FEFEFE",size:48}})],1):t._e()],2)}),[],!1,null,null,null);e.default=m.exports;installComponents(m,{GalleryImage:r(211).default})},217:function(t,e,r){var map={"./overview/enroute-french-2-2.jpg":212,"./overview/mad-prod-2.jpg":213,"./overview/sb-1.jpg":214,"./overview/te-3.jpg":215};function l(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=n,t.exports=l,l.id=217},219:function(t,e,r){"use strict";r.r(e),e.default=[{src:"overview/te-3",type:"portrait",alt:"Tóth Eszter divat portré",projectSlug:"toth-eszter"},{src:"overview/mad-prod-2",type:"portrait"},{src:"overview/enroute-french-2-2",type:"portrait",projectSlug:"en-route-french-style"},{src:"overview/sb-1",type:"landscape"}]},227:function(t,e,r){"use strict";r.r(e);var l=r(216),n=r(219),o={name:"Portrait",components:{Gallery:l.default},data:function(){return{title:"Portrait",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",content:n.default}}},c=r(15),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Gallery",{attrs:{title:t.title,description:t.description,content:t.content}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Gallery:r(216).default})}}]);