(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{410:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(437);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s={},i={_frontmatter:s},c=n.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(c,o({},i,a,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},435:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/garage-developer-guide"}}}')},436:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},437:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(435),o=a(0),s=a.n(o),i=a(105),c=a.n(i),b=a(194),l=a(127),p=a(3),u=a.n(p),d=a(383),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},O=a(436),v=a(384),f=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,o=a||n,s=o.baseUrl,i=s+"/tree/master"+o.subDirectory+"/src/pages"+t;return s?Object(r.b)("div",{className:"bx--row "+v.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:v.link,href:i},"Edit this page on GitHub"))):null},g=a(193),j=(a(59),a(26)),h=a(385);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0}),s=o===n,i=new RegExp(n+"(?!-)"),b=a.replace(i,o);return Object(r.b)("li",{key:e,className:u()((t={},t[h.selectedItem]=s,t),h.listItem)},Object(r.b)(j.Link,{className:h.link,to:""+b},e))}));return Object(r.b)("div",{className:h.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:h.list},o))))))},n}(s.a.Component),x=a(195);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,s=e.Title,i=t.frontmatter,p=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,O=p.tabs,v=p.title,j=p.theme,h=p.description,w=p.keywords,N=n.data.site.pathPrefix,P=N?o.pathname.replace(N,""):o.pathname,k=O?P.split("/").slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(r.b)(l.a,{homepage:!1,theme:j,pageTitle:v,pageDescription:h,pageKeywords:w,titleType:d},Object(r.b)(m,{title:s?Object(r.b)(s,null):v,label:"label",tabs:O}),O&&Object(r.b)(y,{slug:P,tabs:O,currentTab:k}),Object(r.b)(x.a,{padded:!0},a,Object(r.b)(f,{relativePagePath:u})),Object(r.b)(g.a,{pageContext:t,location:o,slug:P,tabs:O,currentTab:k}),Object(r.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-artifact-management-index-mdx-93f5d339d0365843857a.js.map