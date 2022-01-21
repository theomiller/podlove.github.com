/*! For license information please see f796c7e2.b72adb3a.js.LICENSE.txt */
(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[6759],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5309:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I},frontMatter:function(){return S},metadata:function(){return x},toc:function(){return j}});var r=n(2122),o=n(9756),a=n(7294),i=n(3905),s=n(5697),l=n.n(s),u=n(4063),c=n.n(u),p=n(1062),d=n.n(p);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return w(w({},e),{},{playerVars:w({autoplay:0,start:0,end:0},e.playerVars)})}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,r,o=h(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),k(b(t=o.call(this,e)),"onPlayerReady",(function(e){return t.props.onReady(e)})),k(b(t),"onPlayerError",(function(e){return t.props.onError(e)})),k(b(t),"onPlayerStateChange",(function(e){switch(t.props.onStateChange(e),e.data){case i.PlayerState.ENDED:t.props.onEnd(e);break;case i.PlayerState.PLAYING:t.props.onPlay(e);break;case i.PlayerState.PAUSED:t.props.onPause(e)}})),k(b(t),"onPlayerPlaybackRateChange",(function(e){return t.props.onPlaybackRateChange(e)})),k(b(t),"onPlayerPlaybackQualityChange",(function(e){return t.props.onPlaybackQualityChange(e)})),k(b(t),"createPlayer",(function(){if("undefined"!=typeof document){var e=w(w({},t.props.opts),{},{videoId:t.props.videoId});t.internalPlayer=d()(t.container,e),t.internalPlayer.on("ready",t.onPlayerReady),t.internalPlayer.on("error",t.onPlayerError),t.internalPlayer.on("stateChange",t.onPlayerStateChange),t.internalPlayer.on("playbackRateChange",t.onPlayerPlaybackRateChange),t.internalPlayer.on("playbackQualityChange",t.onPlayerPlaybackQualityChange)}})),k(b(t),"resetPlayer",(function(){return t.internalPlayer.destroy().then(t.createPlayer)})),k(b(t),"updatePlayer",(function(){t.internalPlayer.getIframe().then((function(e){t.props.id?e.setAttribute("id",t.props.id):e.removeAttribute("id"),t.props.className?e.setAttribute("class",t.props.className):e.removeAttribute("class")}))})),k(b(t),"getInternalPlayer",(function(){return t.internalPlayer})),k(b(t),"updateVideo",(function(){if(void 0!==t.props.videoId&&null!==t.props.videoId){var e=!1,n={videoId:t.props.videoId};"playerVars"in t.props.opts&&(e=1===t.props.opts.playerVars.autoplay,"start"in t.props.opts.playerVars&&(n.startSeconds=t.props.opts.playerVars.start),"end"in t.props.opts.playerVars&&(n.endSeconds=t.props.opts.playerVars.end)),e?t.internalPlayer.loadVideoById(n):t.internalPlayer.cueVideoById(n)}else t.internalPlayer.stopVideo()})),k(b(t),"refContainer",(function(e){t.container=e})),t.container=null,t.internalPlayer=null,t}return t=i,(n=[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className})(e,this.props)&&this.updatePlayer(),function(e,t){return!c()(E(e.opts),E(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var n=e.opts.playerVars||{},r=t.opts.playerVars||{};return n.start!==r.start||n.end!==r.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return a.createElement("div",{className:this.props.containerClassName},a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer}))}}])&&y(t.prototype,n),r&&y(t,r),i}(a.Component);k(O,"PlayerState",{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5}),O.propTypes={videoId:l().string,id:l().string,className:l().string,containerClassName:l().string,opts:l().objectOf(l().any),onReady:l().func,onError:l().func,onPlay:l().func,onPause:l().func,onEnd:l().func,onStateChange:l().func,onPlaybackRateChange:l().func,onPlaybackQualityChange:l().func},O.defaultProps={videoId:null,id:null,className:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}};var N=O,C=["components"],S={title:"Getting Started"},x={unversionedId:"guides/getting-started",id:"guides/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"bullet points / steps + gifs see https://ultraschall.fm/install/ --\x3e",source:"@site/publisher/guides/getting-started.mdx",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/podlove-publisher/guides/getting-started",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/guides/getting-started.mdx",version:"current",frontMatter:{title:"Getting Started"},sidebar:"0",previous:{title:"Podlove Publisher",permalink:"/podlove-publisher/"},next:{title:"Podcast Migration",permalink:"/podlove-publisher/guides/podcast-migration"}},j=[{value:"Configuring Basics",id:"configuring-basics",children:[]},{value:"Publishing the first Episode",id:"publishing-the-first-episode",children:[]}],A={toc:j};function I(e){var t=e.components,n=(0,o.Z)(e,C);return(0,i.kt)("wrapper",(0,r.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The WordPress Podlove Podcast Publisher is a workflow-oriented solution for serious podcasters that want to save time and get full control over their Podcast publishing process, their feeds and the integrity of their publication."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"http://wordpress.org/extend/plugins/podlove-podcasting-plugin-for-wordpress/",class:"button button--outline button--secondary button--lg",style:{margin:"15px auto"}},"Download Podlove Publisher")),(0,i.kt)("p",null,"You need ",(0,i.kt)("a",{parentName:"p",href:"http://wordpress.org/"},"WordPress")," running on your web server. Download the ",(0,i.kt)("a",{parentName:"p",href:"http://wordpress.org/plugins/podlove-podcasting-plugin-for-wordpress/"},"Podlove Podcast Publisher")," plugin, unzip it, put it into the WordPress plugin directory, and activate it. If you are new to WordPress, you may find the ",(0,i.kt)("a",{parentName:"p",href:"http://codex.wordpress.org/Managing_Plugins#Installing_Plugins"},"Installing Plugins")," instructions helpful."),(0,i.kt)(N,{videoId:"Hmrm-jUe6u4",opts:{width:"100%"},mdxType:"YouTube"}),(0,i.kt)("h3",{id:"configuring-basics"},"Configuring Basics"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"Podlove")," entry appears in the menu. Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Podlove \u2192 Podcast Settings")," to start the setup. Fill in the ",(0,i.kt)("em",{parentName:"p"},"Description")," fields (title, subtitle and summary) for your podcast. Then scroll down to the ",(0,i.kt)("em",{parentName:"p"},"Media")," section. Here you are asked for an ",(0,i.kt)("em",{parentName:"p"},"Upload Location"),". What is the upload location?"),(0,i.kt)("p",null,"Publishing episodes and serving files are not necessarily connected. The Publisher focuses on the former while you are still responsible for uploading your media files to a server (which may or may not be identical to the server running WordPress). The Publisher has expectations concerning your files:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Expectation 1: Assets for an episode share the same file name.")," Files related to your episodes are called ",(0,i.kt)("em",{parentName:"p"},"Assets"),". The Publisher needs to keep track of them, so it introduces the convention that all files for one episode must share the same file name. Let's say you publish an episode using mp3, m4a and a cover image. Your files may look like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ep001.mp3"),(0,i.kt)("li",{parentName:"ul"},"ep001.m4a"),(0,i.kt)("li",{parentName:"ul"},"ep001.jpg")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ep001")," is your ",(0,i.kt)("em",{parentName:"p"},"file slug"),". Its format is up to you. It may be numeric (",(0,i.kt)("inlineCode",{parentName:"p"},"001"),"), text (",(0,i.kt)("inlineCode",{parentName:"p"},"my-first-episode"),") or mixed (",(0,i.kt)("inlineCode",{parentName:"p"},"ep001"),"). The only requirement is that it is the same for all assets."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Expectation 2: All files are in the same directory.")," If your first episode is available at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://www.example.com/ep001.mp3")," then your second episode should be available at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://www.example.com/ep002.mp3")," and ",(0,i.kt)("strong",{parentName:"p"},"not")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://www.example.com/foo/ep002.mp3")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"http://foo.example.com/ep002.mp3"),"."),(0,i.kt)("p",null,"This directory is your Upload Location. Using the example above, it would be ",(0,i.kt)("inlineCode",{parentName:"p"},"http://www.example.com/"),". Enter it in the settings form and make sure that your files are there. You can fill out the rest of the form but you don't have to. You can always come back later."),(0,i.kt)("p",null,"Go to the next menu entry, ",(0,i.kt)("inlineCode",{parentName:"p"},"Podlove \u2192 Episode Assets"),". As mentioned above, assets are all files related to your episodes. Here you define what kind of files you want to publish. That way the Publisher ",(0,i.kt)("em",{parentName:"p"},"knows")," about your files and can ensure their existence and validity. Click on ",(0,i.kt)("em",{parentName:"p"},"Add New")," to create one."),(0,i.kt)("p",null,"Select the ",(0,i.kt)("em",{parentName:"p"},"audio")," asset type and one of the file formats you are publishing in, like mp3. You can leave the rest of the form and ",(0,i.kt)("em",{parentName:"p"},"Save Changes"),". If you have more formats, please add them likewise."),(0,i.kt)("p",null,"The last step of preparation is setting up a feed for your listeners to subscribe. Go to the next menu entry, ",(0,i.kt)("inlineCode",{parentName:"p"},"Podlove \u2192 Podcast Feeds")," and click on ",(0,i.kt)("em",{parentName:"p"},"Add New"),'. Select one of the media file assets you just created, assign a title (example: "MP3 Feed") and an url slug (example: "mp3"). You can ignore the rest and ',(0,i.kt)("em",{parentName:"p"},"Save Changes"),". If you created multiple formats, you may add the other feeds likewise. You are now ready to publish your first episode!"),(0,i.kt)("h3",{id:"publishing-the-first-episode"},"Publishing the first Episode"),(0,i.kt)("p",null,"You may have noticed already: There is an ",(0,i.kt)("em",{parentName:"p"},"Episodes")," menu entry below ",(0,i.kt)("em",{parentName:"p"},"Posts"),". This is where you manage your episodes. Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Episodes \u2192 Add New"),". Enter a title and copy&paste the following two shortcodes into the content field below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[podlove-web-player]\n[podlove-episode-downloads]\n")),(0,i.kt)("p",null,"Scroll down to the ",(0,i.kt)("em",{parentName:"p"},"Podcast Episode")," box. Find the ",(0,i.kt)("em",{parentName:"p"},"Episode Media File Slug")," field. Remember this? In the example above, the slug was ",(0,i.kt)("inlineCode",{parentName:"p"},"ep001"),". If you already have files on your upload location, enter your slug."),(0,i.kt)("p",null,"The table below contains all your assets. If you setup everything correctly, the Publisher will now have found the correct assets and indicate its satisfaction with one or more green checkmarks. Press ",(0,i.kt)("em",{parentName:"p"},"Publish")," \u2014 Congratulations! You have published your first episode using the Podlove Publisher!"))}I.isMDXComponent=!0},4063:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var i=a[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n}},9090:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof r&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?t:n)(i,o),i.onload||t(i,o),a.appendChild(i)}},3988:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=t},6006:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2275),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},9125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(9215)),o=s(n(8255)),a=s(n(5279)),i=s(n(6006));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("youtube-player"),u={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){l('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var s,u=a.default[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){n(s.value)}}catch(c){o=!0,i=c}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,s=!1,l=void 0;try{for(var u,c=o.default[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var p=u.value;r(p)}}catch(d){s=!0,l=d}finally{try{!a&&c.return&&c.return()}finally{if(s)throw l}}return n}};t.default=u,e.exports=t.default},2275:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},5279:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},8255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},1062:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(n(3988)),a=s(n(5900)),i=s(n(9125));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(l||(l=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var u=new Promise((function(n){"object"===(void 0===e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):l.then((function(r){var o=new r.Player(e,t);return s.on("ready",(function(){n(o)})),null}))})),c=i.default.promisifyPlayer(u,n);return c.on=s.on,c.off=s.off,c},e.exports=t.default},5900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(9090),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},9215:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=n(5046)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},5046:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var o=t.formatters[r];if("function"==typeof o){var a=i[l];n=o.call(e,a),i.splice(l,1),l--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(4680),t.names=[],t.skips=[],t.formatters={}},4680:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,a=365.25*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*a;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return s.long?i(l=e,o,"day")||i(l,r,"hour")||i(l,n,"minute")||i(l,t,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);