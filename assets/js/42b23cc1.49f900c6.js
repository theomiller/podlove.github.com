"use strict";(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[8663],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),f=c(r),s=o,d=f["".concat(i,".").concat(s)]||f[s]||p[s]||a;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75628:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],u={title:"DateTime"},i=void 0,c={unversionedId:"reference/templates/template-tags/date-time",id:"reference/templates/template-tags/date-time",title:"DateTime",description:"Year",source:"@site/publisher/reference/templates/template-tags/date-time.mdx",sourceDirName:"reference/templates/template-tags",slug:"/reference/templates/template-tags/date-time",permalink:"/podlove-publisher/reference/templates/template-tags/date-time",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/reference/templates/template-tags/date-time.mdx",tags:[],version:"current",frontMatter:{title:"DateTime"},sidebar:"0",previous:{title:"Flattr",permalink:"/podlove-publisher/reference/templates/template-tags/flattr"},next:{title:"Line",permalink:"/podlove-publisher/reference/templates/template-tags/line"}},m=[{value:"Year",id:"year",children:[],level:3},{value:"Month number",id:"month-number",children:[],level:3},{value:"Day of the month",id:"day-of-the-month",children:[],level:3},{value:"Hours of the day, 24h format",id:"hours-of-the-day-24h-format",children:[],level:3},{value:"Minutes of the current hour",id:"minutes-of-the-current-hour",children:[],level:3},{value:"Seconds of the current minute",id:"seconds-of-the-current-minute",children:[],level:3},{value:"Custom time format",id:"custom-time-format",children:[],level:3}],p={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"year"},"Year"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"datetime.year")),(0,a.kt)("h3",{id:"month-number"},"Month number"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"datetime.month")),(0,a.kt)("h3",{id:"day-of-the-month"},"Day of the month"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"datetime.day")),(0,a.kt)("h3",{id:"hours-of-the-day-24h-format"},"Hours of the day, 24h format"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"datetime.hours")),(0,a.kt)("h3",{id:"minutes-of-the-current-hour"},"Minutes of the current hour"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"datetime.minutes")),(0,a.kt)("h3",{id:"seconds-of-the-current-minute"},"Seconds of the current minute"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"datetime.seconds")),(0,a.kt)("h3",{id:"custom-time-format"},"Custom time format"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"datetime.format")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.date.php"},"PHP date documentation")," for available formats"))}f.isMDXComponent=!0}}]);