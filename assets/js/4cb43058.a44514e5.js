(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[9660],{8058:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return v}});var o=n(2122),r=n(9756),i=n(7294),l=n(3905),a=n(3552),s=(n(5493),n(5918)),c=n(8082),p=n(8650),d=n(27),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).store=null,n.state={main:"#2B8AC6",highlight:"#ffffff"},n}(0,a.Z)(t,e);var n=t.prototype;return n.updateColor=function(e){var t=this;return function(n){var o;t.setState(((o={})[e]=n,o)),t.store.dispatch({type:"SET_THEME",payload:t.state})}},n.loadStore=function(e){this.store=e},n.render=function(){return i.createElement("div",null,i.createElement(d.J,{config:"/assets/web-player/v4/config.json",onLoaded:this.loadStore.bind(this)}),i.createElement(c.X,null,i.createElement(s.o,{label:"main",description:"Primary color"},i.createElement(p.z,{color:this.state.main,onChange:this.updateColor("main")})),i.createElement(s.o,{label:"highlight",description:"Alternative color",last:!0},i.createElement(p.z,{color:this.state.highlight,onChange:this.updateColor("highlight")}))))},t}(i.Component),u=["components"],m={title:"Theming"},f={unversionedId:"v4/theming",id:"v4/theming",isDocsHomePage:!1,title:"Theming",description:"Color Calculation",source:"@site/web-player/v4/theming.mdx",sourceDirName:"v4",slug:"/v4/theming",permalink:"/podlove-web-player/v4/theming",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/web-player/v4/theming.mdx",version:"current",frontMatter:{title:"Theming"},sidebar:"0",previous:{title:"Embedding",permalink:"/podlove-web-player/v4/embedding"},next:{title:"Configuration",permalink:"/podlove-web-player/v4/configuration"}},v=[{value:"Color Calculation",id:"color-calculation",children:[]}],g={toc:v};function x(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(h,{mdxType:"Theme"}),(0,l.kt)("h3",{id:"color-calculation"},"Color Calculation"),(0,l.kt)("p",null,"The player requires at least one main color. If not provided the default color will be used.\nWithout setting a highlight color the essential control elements are colored black or white depending on a calculated ",(0,l.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/#contrast-ratiodef"},"WCGA contrast ratio"),".\nWith a highlight color in place these control elements will be colored accordingly."))}x.isMDXComponent=!0},8650:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var o=n(3552),r=n(7294),i=n(9941),l=n(3144),a=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={displayColorPicker:!1,color:t.color},n}(0,o.Z)(t,e);var n=t.prototype;return n.handleClick=function(){this.setState({displayColorPicker:!this.state.displayColorPicker})},n.handleClose=function(){this.setState({displayColorPicker:!1})},n.handleChange=function(e){this.props.onChange(e.hex),this.setState({color:e.hex})},n.render=function(){var e=(0,i.ZP)({default:{container:{cursor:"pointer",display:"flex",alignItems:"center",width:"100%",padding:"10px",background:"rgb(250, 250, 250)",boxShadow:"rgb(0 0 0 / 10%) 0px 0px 0px 1px inset",borderRadius:"1em",margin:"0px",fontSize:"12px",fontWeight:"700",lineHeight:"1"},color:{width:"15px",height:"15px",borderRadius:"15px",background:this.state.color},swatch:{background:"#fff",borderRadius:"15px",marginRight:"10px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},text:{width:"100%",textAlign:"center"}}});return r.createElement("div",null,r.createElement("div",{style:e.container,onClick:this.handleClick.bind(this)},r.createElement("div",{style:e.swatch},r.createElement("div",{style:e.color})),r.createElement("div",{style:e.text},this.state.color.toUpperCase())),this.state.displayColorPicker?r.createElement("div",{style:e.popover},r.createElement("div",{style:e.cover,onClick:this.handleClose.bind(this)}),r.createElement(l.xS,{color:this.state.color,onChange:this.handleChange.bind(this)})):null)},t}(r.Component)},8082:function(e,t,n){"use strict";n.d(t,{X:function(){return l}});var o=n(3552),r=n(7294),i=n(9941),l=function(e){function t(t){return e.call(this,t)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=(0,i.ZP)({default:{container:{boxShadow:"rgb(0 0 0 / 10%) 0px 0px 0px 1px inset",alignItems:"center",padding:"10px",borderRadius:"5px",marginBottom:"15px"},header:{color:"rgb(102, 102, 102)",textTransform:"uppercase",letterSpacing:"2px",display:"flex",padding:"5px 10px",marginBottom:"5px",fontSize:"0.8rem"},label:{width:"20%",marginRight:"20px",overflow:"hidden",textOverflow:"ellipsis"},control:{width:"30%",marginRight:"20px"},description:{width:"45%",overflow:"hidden",textOverflow:"ellipsis"}}});return r.createElement("div",{style:e.container},r.createElement("div",{style:e.header},r.createElement("div",{style:e.label},"Name"),r.createElement("div",{style:e.control},"Control"),r.createElement("div",{style:e.description},"Description")),r.createElement("div",null,this.props.children))},t}(r.Component)},5918:function(e,t,n){"use strict";n.d(t,{o:function(){return l}});var o=n(3552),r=n(7294),i=n(9941),l=function(e){function t(t){return e.call(this,t)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=(0,i.ZP)({default:{container:{display:"flex",borderBottom:"1px solid rgba(0, 0, 0, 0.1)",alignItems:"center",padding:"10px"},label:{fontWeight:"700",width:"20%",marginRight:"20px",overflow:"hidden",textOverflow:"ellipsis"},control:{width:"30%",marginRight:"20px"},description:{width:"45%",fontStyle:"italic",fontWeight:300,overflow:"hidden",textOverflow:"ellipsis"}},last:{container:{borderBottom:"none"}}},{last:this.props.last});return r.createElement("div",{style:e.container},r.createElement("div",{style:e.label},this.props.label),r.createElement("div",{style:e.control},this.props.children),r.createElement("div",{style:e.description},this.props.description))},t}(r.Component)},27:function(e,t,n){"use strict";n.d(t,{J:function(){return m}});var o=n(2137),r=n(3552),i=n(7757),l=n.n(i),a=n(9254),s=n(5794),c=n(4745),p=n(7294),d=n(9941),h=n(6486),u=n(7762),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).playerRef=p.createRef(),n.mountIframe=(0,h.debounce)((function(){var e=n.playerRef.current;e&&(n.props.variant&&e.setAttribute("data-variant",n.props.variant),e.innerHTML=n.props.children?(0,u.renderToString)(n.props.children):"",window.podlovePlayer(e,n.props.config).then((function(e){n.props.onLoaded&&n.props.onLoaded(e),n.props.playtime&&e.dispatch((0,s.RJ)(n.props.playtime)),n.props.tab&&e.dispatch((0,a.S)(n.props.tab))})))}),600),n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,c.Z)("https://cdn.podlove.org/web-player/4.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.componentWillReceiveProps=function(e){(0,h.isEqual)((0,h.omit)(e,"onLoaded"),(0,h.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},n.render=function(){var e=(0,d.ZP)({default:{player:{marginBottom:"15px"}}});return p.createElement("div",{style:e.player,ref:this.playerRef})},t}(p.Component)}}]);