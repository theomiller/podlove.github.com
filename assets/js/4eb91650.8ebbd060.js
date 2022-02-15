"use strict";(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[6453],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7046:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Season"},s=void 0,u={unversionedId:"reference/templates/template-tags/season",id:"reference/templates/template-tags/season",title:"Season",description:"Title",source:"@site/publisher/reference/templates/template-tags/season.mdx",sourceDirName:"reference/templates/template-tags",slug:"/reference/templates/template-tags/season",permalink:"/podlove-publisher/reference/templates/template-tags/season",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/reference/templates/template-tags/season.mdx",tags:[],version:"current",frontMatter:{title:"Season"},sidebar:"0",previous:{title:"Contributor",permalink:"/podlove-publisher/reference/templates/template-tags/contributor"},next:{title:"Service",permalink:"/podlove-publisher/reference/templates/template-tags/service"}},p=[{value:"Title",id:"title",children:[],level:3},{value:"Subtitle",id:"subtitle",children:[],level:3},{value:"Summary",id:"summary",children:[],level:3},{value:"Number",id:"number",children:[],level:3},{value:"Image",id:"image",children:[],level:3},{value:"Start Date",id:"start-date",children:[],level:3},{value:"First Episode",id:"first-episode",children:[],level:3},{value:"Last Episode",id:"last-episode",children:[],level:3},{value:"Running",id:"running",children:[],level:3},{value:"Season Episodes",id:"season-episodes",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"title"},"Title"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.title")),(0,o.kt)("h3",{id:"subtitle"},"Subtitle"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.subtitle")),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.summary")),(0,o.kt)("h3",{id:"number"},"Number"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.number")),(0,o.kt)("p",null,"Automatically assigned season number, starting at 1."),(0,o.kt)("h3",{id:"image"},"Image"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.image")),(0,o.kt)("h3",{id:"start-date"},"Start Date"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.startDate")),(0,o.kt)("p",null,"This is the configured start date, not the date of the first episode of the season. If you were looking for that, use ",(0,o.kt)("inlineCode",{parentName:"p"},"season.firstEpisode.publicationDate"),"."),(0,o.kt)("p",null,"see ",(0,o.kt)("a",{parentName:"p",href:"./date-time"},"datetime")),(0,o.kt)("h3",{id:"first-episode"},"First Episode"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.firstEpisode\nFirst episode of the season.")),(0,o.kt)("p",null,"see ",(0,o.kt)("a",{parentName:"p",href:"./episode"},"episode")),(0,o.kt)("h3",{id:"last-episode"},"Last Episode"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.lastEpisode")),(0,o.kt)("p",null,"Last episode of the season."),(0,o.kt)("p",null,"see ",(0,o.kt)("a",{parentName:"p",href:"./episode"},"episode")),(0,o.kt)("h3",{id:"running"},"Running"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.running")),(0,o.kt)("p",null,"Is this season currently running?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-twig"},"{% if season.running %}\n    This season is currently running.\n{% endif %}\n")),(0,o.kt)("h3",{id:"season-episodes"},"Season Episodes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"season.episodes")),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"order"),": (optional) ",(0,o.kt)("inlineCode",{parentName:"li"},"DESC")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"ASC"),". Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"ASC"))))}d.isMDXComponent=!0}}]);