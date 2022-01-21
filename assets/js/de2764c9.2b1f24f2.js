(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[3036],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return c}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||a;return r?o.createElement(h,i(i({ref:t},d),{},{components:r})):o.createElement(h,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2685:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i=["components"],s={title:"Podcast Network"},l={unversionedId:"guides/podcast-network",id:"guides/podcast-network",isDocsHomePage:!1,title:"Podcast Network",description:"There comes a time in the life of every podcaster when she has to admit that one podcast is not enough. A separate channel would be nice, right? There are multiple ways to achieve podcast networks using Podlove Publisher, serving different requirements.",source:"@site/publisher/guides/podcast-network.mdx",sourceDirName:"guides",slug:"/guides/podcast-network",permalink:"/podlove-publisher/guides/podcast-network",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/guides/podcast-network.mdx",version:"current",frontMatter:{title:"Podcast Network"},sidebar:"0",previous:{title:"Podcast Migration",permalink:"/podlove-publisher/guides/podcast-migration"},next:{title:"Templates",permalink:"/podlove-publisher/guides/templates"}},p=[{value:"Option 1: WordPress Network",id:"option-1-wordpress-network",children:[]},{value:"Option 2: Shows Module",id:"option-2-shows-module",children:[]},{value:"Option 3: Category based Feeds",id:"option-3-category-based-feeds",children:[]}],d={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There comes a time in the life of every podcaster when she has to admit that one podcast is not enough. A separate channel would be nice, right? There are multiple ways to achieve podcast networks using Podlove Publisher, serving different requirements."),(0,a.kt)("p",null,"If you are looking for totally separate podcast channels with their own sites, read ",(0,a.kt)("em",{parentName:"p"},"Option 1: WordPress Network"),". If all you episodes are related but you would like to offer separate feeds, ",(0,a.kt)("em",{parentName:"p"},"Option 2: Shows Module")," might be for you. If shows seem too heavyweight, read ",(0,a.kt)("em",{parentName:"p"},"Option 3: Category based Feeds"),"."),(0,a.kt)("h2",{id:"option-1-wordpress-network"},"Option 1: WordPress Network"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Advantages")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"manage multiple podcasts in a WordPress Network"),(0,a.kt)("li",{parentName:"ul"},"custom themes, domains etc. for each podcast")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How To")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the instructions on ",(0,a.kt)("a",{parentName:"li",href:"http://codex.wordpress.org/Create_A_Network"},"WordPress: Create A Network")," to turn your WordPress setup into a network."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Network Activate")," the Podlove Publisher at ",(0,a.kt)("inlineCode",{parentName:"li"},"/wp-admin/network/plugins.php")," if you want to host a podcast on ",(0,a.kt)("em",{parentName:"li"},"every")," site in the network. Otherwise, activate the Podlove Publisher separately for each site.")),(0,a.kt)("p",null,"Optional: Assign custom domains to network sites using the ",(0,a.kt)("a",{parentName:"p",href:"https://wordpress.org/plugins/wordpress-mu-domain-mapping/"},"Domain Mapping Plugin"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Further Reading")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://codex.wordpress.org/Create_A_Network"},"WordPress: Create A Network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://codex.wordpress.org/Multisite_Network_Administration"},"WordPress: Multisite Network Administration"))),(0,a.kt)("h2",{id:"option-2-shows-module"},"Option 2: Shows Module"),(0,a.kt)("p",null,"Use shows to offer feeds to subtopics of your podcast. If your shows are unrelated, a WordPress Network is better suited than the shows module."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Advantages")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keep all episodes in a single master-feed"),(0,a.kt)("li",{parentName:"ul"},"offer separate feeds per show with the option to override feed meta: title, slug, subtitle, summary, image and language")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How To")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Activate the ",(0,a.kt)("em",{parentName:"li"},"Shows")," Publisher module. Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Publisher -> Modules")," and find the ",(0,a.kt)("em",{parentName:"li"},"Metadata")," section."),(0,a.kt)("li",{parentName:"ol"},"Create one or multiple shows at ",(0,a.kt)("inlineCode",{parentName:"li"},"Publisher -> Shows"),"."),(0,a.kt)("li",{parentName:"ol"},"Announce show feeds on your website. You can find them at ",(0,a.kt)("inlineCode",{parentName:"li"},"Publisher -> Shows"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WordPress Templates")),(0,a.kt)("p",null,"Internally shows are WordPress taxonomies. That means you also get show archives for your website under ",(0,a.kt)("inlineCode",{parentName:"p"},"/show/<show-slug>"),". When creating themes, the following template hierarchy applies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"taxonomy-shows-<show-slug>.php\ntaxonomy-shows.php\ntaxonomy.php\narchive.php\nindex.php\n")),(0,a.kt)("h2",{id:"option-3-category-based-feeds"},"Option 3: Category based Feeds"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Advantages")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"does not require a WordPress Network"),(0,a.kt)("li",{parentName:"ul"},"separate feeds by category but keep one big feed containing everything")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How To")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Activate the ",(0,a.kt)("em",{parentName:"li"},"Categories")," Publisher module. Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Publisher -> Modules")," and find the ",(0,a.kt)("em",{parentName:"li"},"Metadata")," section."),(0,a.kt)("li",{parentName:"ol"},"Assign categories to your episodes using the episode forms."),(0,a.kt)("li",{parentName:"ol"},"Announce the category feeds on your website. For example: You have the feed ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com/feed/mp3"),' and created the categories "weather" and "plants". Then the feeds ',(0,a.kt)("inlineCode",{parentName:"li"},"example.com/category/weather/feed/mp3")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com/category/plants/feed/mp3")," are available now.")),(0,a.kt)("p",null,"Good to know: There are also feeds for arbitrary search terms. ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com/search/fnord/feed/mp3"),' is a dynamic feed for episodes mentioning "Fnord".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Further Reading")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://codex.wordpress.org/WordPress_Feeds"},"WordPress: Feeds"))))}u.isMDXComponent=!0}}]);