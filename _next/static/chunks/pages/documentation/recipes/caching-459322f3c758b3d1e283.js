_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"7ljp":function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t("q1tI"),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"===typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=r,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||l;return t?a.a.createElement(f,o(o({ref:n},c),{},{components:t})):a.a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var l=t.length,i=new Array(l);i[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"===typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},Ff2n:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,"a",(function(){return r}))},c662:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/recipes/caching",function(){return t("jL8Q")}])},jL8Q:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t("rePB"),a=t("Ff2n"),l=(t("q1tI"),t("7ljp")),i=t("luiM");function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c={title:"Caching | Recipes | Vexilla"},u={meta:c},p=function(e){var n=e.children;return Object(l.b)(i.a,{meta:c},n)};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(p,s(s(s({},u),t),{},{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Caching"),Object(l.b)("p",null,"On your server, you probably want to cache the Vexilla Flags and config. This can save your users time. It can save your bandwidth costs."),Object(l.b)("h2",null,"Long Polling"),Object(l.b)("p",null,"One quick and easy way of keeping the cache up to date is long-polling. This involves just fetching from your static hosting on an interval and updating the cache."),Object(l.b)("p",null,"Be warned that this can introduce lag time between changing a flag and when it gets updated on your server/client. In most cases, that is acceptable, but entirely depends on the length of your timer."),Object(l.b)("p",null,"Here is a quick example of an Express.js based server and its long-polling mechanism:"),Object(l.b)("pre",null,Object(l.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'const express = require("express");\nconst app = express();\nconst port = 3000;\n\nconst VexillaClient = require("@vexilla/client");\nconst fiveMinutes = 1000 * 60 * 5;\n\nlet flags = {};\n\nconst globalVexillaClient = new VexillaClient({\n  baseUrl: "https://BUCKET_NAME.s3-website-AWS_REGION.amazonaws.com",\n  environment: process.env.ENVIRONMENT,\n  // for the global fetch, we don\'t need the user or instance ID\n  customInstanceHash: null,\n});\n\n// first fetch\nfetchFlags();\n\n// recurring fetches\nsetInterval(fetchFlags, fiveMinutes);\n\napp.get("/hello", (req, res) => {\n  const localVexillaClient = new VexillaClient({\n    baseUrl: "https://BUCKET_NAME.s3-website-AWS_REGION.amazonaws.com",\n    environment: process.env.ENVIRONMENT,\n    // relies upon user being set by middleware\n    customInstanceHash: req.user.id,\n  });\n\n  localVexillaClient.setFlags(flags);\n\n  if (localVexillaClient.should("SayHello")) {\n    res.send("Hello World!");\n  } else {\n    res.status(500).send("Something broke!");\n  }\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`);\n});\n\nasync function fetchFlags() {\n  flags = await globalVexillaClient.fetchFlags;\n  ("features.json");\n}\n')),Object(l.b)("h2",null,"Lazy Loading"),Object(l.b)("p",null,"This technique is very similar to the long-polling above. The main difference is that it does not continuously fetch the flags."),Object(l.b)("p",null,"There are some trade-offs. You will save on bandwidth requesting the flags. However, when the cache is expired, a request pays an extra cost while waiting for the flags to update if you want them to have the latest flags."),Object(l.b)("p",null,"If you are ok serving stale flags to this first user, they will just not get the update and instead the next request does. While stale data might not be ideal, a long request time could be worse in some cases such as when you have MANY feature flags."),Object(l.b)("pre",null,Object(l.b)("code",s({parentName:"pre"},{className:"language-javascript"}),'const express = require("express");\nconst app = express();\nconst port = 3000;\n\nconst VexillaClient = require("@vexilla/client");\nconst fiveMinutes = 1000 * 60 * 5;\n\nlet flags = {};\nlet lastFlagFetch = 0;\n\nconst globalVexillaClient = new VexillaClient({\n  baseUrl: "https://BUCKET_NAME.s3-website-AWS_REGION.amazonaws.com",\n  environment: process.env.ENVIRONMENT,\n  // for the global fetch, we don\'t need the user or instance ID\n  customInstanceHash: null,\n});\n\n// first fetch\nfetchFlags();\n\napp.get("/hello", async (req, res) => {\n  const localVexillaClient = new VexillaClient({\n    baseUrl: "https://BUCKET_NAME.s3-website-AWS_REGION.amazonaws.com",\n    environment: process.env.ENVIRONMENT,\n    // relies upon user being set by middleware\n    customInstanceHash: req.user.id,\n  });\n\n  // This is the main thing that changes\n  if (lastFlagFetch + fiveMinutes < Date.now()) {\n    // update fetch timestamp\n    lastFlagFetch = Date.now();\n    // update global flags\n    flags = await client.fetchFlags("features.json");\n  }\n\n  localVexillaClient.setFlags(flags);\n\n  if (localVexillaClient.should("SayHello")) {\n    res.send("Hello World!");\n  } else {\n    res.status(500).send("Something broke!");\n  }\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`);\n});\n\nasync function fetchFlags() {\n  flags = await globalVexillaClient.fetchFlags;\n  ("features.json");\n}\n')))}d.isMDXComponent=!0},luiM:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("nKUr"),a=t("KQjJ"),l=t("g4pe"),i=t.n(l),o=t("vOnD"),s=t("dRp5"),c=t("ICxG"),u=o.b.div.withConfig({displayName:"documentation-layout__PageWrapper",componentId:"sc-1dwune6-0"})(["",""],{display:"flex"}),p=o.b.div.withConfig({displayName:"documentation-layout__Sidebar",componentId:"sc-1dwune6-1"})([""," top:80px;max-height:calc(100vh - 80px);"],{padding:"1rem",width:"25%",overflow:"scroll",position:"sticky"}),d=o.b.nav.withConfig({displayName:"documentation-layout__SidebarNav",componentId:"sc-1dwune6-2"})(["",""],{display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(243, 244, 246, var(--tw-bg-opacity))",borderRadius:"0.5rem",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"2rem",paddingRight:"2rem"}),h=o.b.a.withConfig({displayName:"documentation-layout__SidebarLink",componentId:"sc-1dwune6-3"})(["",""],{paddingTop:"1rem",paddingBottom:"1rem"}),f=o.b.div.withConfig({displayName:"documentation-layout__Content",componentId:"sc-1dwune6-4"})(["",""],{flexGrow:"1",width:"75%",padding:"1rem"});function b(e){var n=e.children,t=e.meta;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:t.pageTitle})}),Object(r.jsx)(s.a,{children:Object(r.jsx)(c.b,{children:Object(r.jsx)(a.a,{href:"/documentation#api",children:Object(r.jsx)(c.a,{children:"API Docs"})})})}),Object(r.jsxs)(u,{children:[Object(r.jsx)(p,{children:Object(r.jsx)(d,{children:Object(r.jsxs)("div",{className:"prose flex flex-col",children:[Object(r.jsx)("h3",{children:"Table of Contents"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/documentation#getting-started",children:Object(r.jsx)(h,{children:"Getting Started"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/documentation#client-libraries",children:Object(r.jsx)(h,{children:"Client Libraries"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/documentation#config-schema",children:Object(r.jsx)(h,{children:"Config Schema"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/documentation#feature-types",children:Object(r.jsx)(h,{children:"Feature Types"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/documentation#recipes",children:Object(r.jsx)(h,{children:"Recipes"})})})]})]})})}),Object(r.jsx)(f,{className:"prose",children:n})]})]})}}},[["c662",0,2,1,3,4]]]);