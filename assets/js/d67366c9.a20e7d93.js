"use strict";(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[9507],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(r),d=l,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98589:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(87462),l=r(63366),i=(r(67294),r(3905)),o=["components"],a={title:"File"},p=void 0,c={unversionedId:"reference/templates/template-tags/file",id:"reference/templates/template-tags/file",title:"File",description:"ID",source:"@site/publisher/reference/templates/template-tags/file.mdx",sourceDirName:"reference/templates/template-tags",slug:"/reference/templates/template-tags/file",permalink:"/podlove-publisher/reference/templates/template-tags/file",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/reference/templates/template-tags/file.mdx",tags:[],version:"current",frontMatter:{title:"File"},sidebar:"0",previous:{title:"Asset",permalink:"/podlove-publisher/reference/templates/template-tags/asset"},next:{title:"Image",permalink:"/podlove-publisher/reference/templates/template-tags/image"}},u=[{value:"ID",id:"id",children:[],level:3},{value:"Episode",id:"episode",children:[],level:3},{value:"Asset",id:"asset",children:[],level:3},{value:"Size",id:"size",children:[],level:3},{value:"URL",id:"url",children:[],level:3},{value:"Public URL",id:"public-url",children:[],level:3}],s={toc:u};function f(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"id"},"ID"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"file.id")),(0,i.kt)("h3",{id:"episode"},"Episode"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"file.episode")),(0,i.kt)("p",null,"Episode related to this file"),(0,i.kt)("p",null,"see ",(0,i.kt)("a",{parentName:"p",href:"./episode"},"episode")),(0,i.kt)("h3",{id:"asset"},"Asset"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"file.asset\nAsset related to this file")),(0,i.kt)("p",null,"see ",(0,i.kt)("a",{parentName:"p",href:"./asset"},"asset")),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"file.size")),(0,i.kt)("p",null,"Size in bytes"),(0,i.kt)("h3",{id:"url"},"URL"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"file.url\nThe real file URL. For public facing URLs, use.publicUrl.")),(0,i.kt)("h3",{id:"public-url"},"Public URL"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"file.publicUrl\nIf tracking is active, this generates the tracking URL. Otherwise, it\u2019s identical to url.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"source"),": download source for tracking, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"webplayer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"download")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"feed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"context"),": (optional) download context for tracking, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"home"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"episode"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"archive")," for player source or feed slug for feed source")))}f.isMDXComponent=!0}}]);