(self.webpackChunkblog=self.webpackChunkblog||[]).push([[989],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var o=n(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var o=n(3646),r=n(6860),i=n(379),s=n(8206);e.exports=function(e){return o(e)||r(e)||i(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var o=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},9413:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.default=void 0;var r=o(n(7154)),i=o(n(7316)),s=o(n(5354)),a=o(n(7294)),l=o(n(5697)),u=n(9462),d=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="jahir-me-blog",n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,o=(0,i.default)(e,["config","placeholder"]);return a.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},o,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(a.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},6748:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.default=void 0;var r=o(n(5354)),i=o(n(7294)),s=o(n(5697)),a=function(e){function t(){return e.apply(this,arguments)||this}(0,r.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=a,a.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},a.propTypes={commentId:s.default.string.isRequired,width:s.default.number,height:s.default.number,showMedia:s.default.bool,showParentComment:s.default.bool}},4838:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.default=void 0;var r=o(n(7154)),i=o(n(7316)),s=o(n(5354)),a=o(n(7294)),l=o(n(5697)),u=n(9462),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="jahir-me-blog",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,u.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,u.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return a.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(a.default.Component);t.default=d,d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},4332:function(e,t,n){"use strict";var o=n(5318);var r=o(n(4838));t.h$=r.default,o(n(9413)).default,o(n(6748)).default,r.default},9462:function(e,t,n){"use strict";var o=n(5318);t.__esModule=!0,t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o;return function(){var r=this,i=arguments,s=function(){o=null,n||e.apply(r,i)},a=n&&!o;window.clearTimeout(o),o=setTimeout(s,t),a&&e.apply(r,i)}},t.isReactElement=s,t.shallowComparison=function e(t,n){var o,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(o=[]).concat.apply(o,(0,r.default)(i)).filter((function(o){if("object"==typeof t[o]){if(e(t[o],n[o]))return!0}else if(t[o]!==n[o]&&!s(t[o]))return!0})).length};var r=o(n(319)),i=o(n(7294));function s(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},4870:function(e,t,n){"use strict";n.r(t);var o=n(7294),r=n(5444),i=n(4332),s=n(1684),a=n(6179);t.default=function(e){var t,n=e.data,l=e.location,u=n.markdownRemark,d=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=n.previous,p=n.next,f={url:l.href,identifier:u.id,title:u.frontmatter.title};return o.createElement(s.Z,{location:l,title:d},o.createElement(a.Z,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),o.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("header",null,o.createElement("h1",{itemProp:"headline"},u.frontmatter.title),o.createElement("div",{className:"post-tags-container"},(u.frontmatter.tags||[]).map((function(e){return o.createElement(r.Link,{to:"/tags/"+e,key:e}," ",e," ")}))),o.createElement("p",null,u.frontmatter.date)),o.createElement("section",{dangerouslySetInnerHTML:{__html:u.html},itemProp:"articleBody"}),o.createElement("hr",null),o.createElement("footer",null,o.createElement("nav",{className:"blog-post-nav"},o.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.createElement("li",null,c&&o.createElement(r.Link,{to:c.fields.slug,rel:"prev"},"← ",c.frontmatter.title)),o.createElement("li",null,p&&o.createElement(r.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))))),o.createElement(i.h$,{config:f}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d96f52424ad78ced54c9.js.map