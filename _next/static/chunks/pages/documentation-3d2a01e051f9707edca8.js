_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{QfOO:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return m}));var n=i("nKUr"),c=i("KQjJ"),a=i("g4pe"),r=i.n(a),o=i("vOnD"),l=i("dRp5"),s=i("ICxG"),d=o.b.div.withConfig({displayName:"documentation__PageWrapper",componentId:"bufo69-0"})(["",""],{display:"flex"}),h=o.b.div.withConfig({displayName:"documentation__Sidebar",componentId:"bufo69-1"})([""," top:80px;max-height:calc(100vh - 80px);"],{padding:"1rem",width:"25%",overflow:"scroll",position:"sticky"}),p=o.b.nav.withConfig({displayName:"documentation__SidebarNav",componentId:"bufo69-2"})(["",""],{display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(243, 244, 246, var(--tw-bg-opacity))",borderRadius:"0.5rem",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"2rem",paddingRight:"2rem"}),j=o.b.a.withConfig({displayName:"documentation__SidebarLink",componentId:"bufo69-3"})(["",""],{paddingTop:"1rem",paddingBottom:"1rem"}),b=o.b.div.withConfig({displayName:"documentation__Content",componentId:"bufo69-4"})(["",""],{flexGrow:"1",width:"75%"}),u=o.b.section.withConfig({displayName:"documentation__ContentSection",componentId:"bufo69-5"})(["",""],{paddingLeft:"6rem",paddingRight:"6rem",paddingTop:"5rem",paddingBottom:"5rem"}),g=o.b.span.withConfig({displayName:"documentation__ClientLanguage",componentId:"bufo69-6"})([""," width:100px;margin-top:0 !important;"],{fontWeight:"700",display:"inline-block"}),x=[{language:"JS/TS",github:"https://github.com/vexilla/client-js",repository:"npm",repositoryLink:"https://npmjs.org/@vexilla/client"},{language:"Elixir",github:"https://github.com/vexilla/client-elixir",repository:"hex.pm",repositoryLink:"https://hex.pm/packages/vexilla_client_elixir"},{language:"PHP",github:"https://github.com/vexilla/client-php",repository:"Packagist",repositoryLink:"https://packagist.org/packages/vexilla/client"},{language:"Python",github:"https://github.com/vexilla/client-python",repository:"pypi",repositoryLink:"https://pypi.org/project/vexilla-client/"},{language:"C#",github:"https://github.com/vexilla/client-csharp",repository:"NuGet",repositoryLink:"https://www.nuget.org/packages/Vexilla.Client"},{language:"Kotlin (Java)",github:"https://github.com/vexilla/client-kotlin",repository:"Maven",repositoryLink:""},{language:"Go",github:"https://github.com/vexilla/client-go",repository:"pkg.go.dev",respositoryLink:"https://pkg.go.dev/github.com/vexilla/client-go"}];function m(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(r.a,{children:Object(n.jsx)("title",{children:"Documentation | Vexilla"})}),Object(n.jsx)(l.a,{children:Object(n.jsx)(s.b,{children:Object(n.jsx)(c.a,{href:"/documentation#api",children:Object(n.jsx)(s.a,{children:"API Docs"})})})}),Object(n.jsxs)(d,{children:[Object(n.jsx)(h,{children:Object(n.jsx)(p,{children:Object(n.jsxs)("div",{className:"prose flex flex-col",children:[Object(n.jsx)("h3",{children:"Table of Contents"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/documentation#getting-started",children:Object(n.jsx)(j,{children:"Getting Started"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/documentation#client-libraries",children:Object(n.jsx)(j,{children:"Client Libraries"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/documentation#config-schema",children:Object(n.jsx)(j,{children:"Config Schema"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/documentation#feature-types",children:Object(n.jsx)(j,{children:"Feature Types"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(c.a,{href:"/documentation#recipes",children:Object(n.jsx)(j,{children:"Recipes"})})})]})]})})}),Object(n.jsxs)(b,{children:[Object(n.jsx)("div",{className:"px-24 pt-20 pb-0",children:Object(n.jsx)("div",{className:"prose mx-auto",children:Object(n.jsx)("h1",{children:"Documentation"})})}),Object(n.jsx)(u,{id:"getting-started",children:Object(n.jsxs)("div",{className:"prose mx-auto",children:[Object(n.jsx)("h2",{children:"Getting Started"}),Object(n.jsx)("p",{children:"To get started follow these simple steps."}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"Open the Config application"}),Object(n.jsx)("li",{children:"Create Environments and Features in the app"}),Object(n.jsx)("li",{children:"Generate credentials for uploading from the app based on your provider of choice"}),Object(n.jsx)("li",{children:"Install a client library for your language"}),Object(n.jsx)("li",{children:'Wrap functionality in a "should"'})]})]})}),Object(n.jsx)(u,{id:"client-libraries",children:Object(n.jsxs)("div",{className:"prose mx-auto",children:[Object(n.jsx)("h2",{children:"Client Libraries"}),Object(n.jsx)("p",{children:"The magic happens inside of the client libraries. They consume the static json config and perform all the significant logic. We are adding new client language support as fast as we can."}),Object(n.jsx)("ul",{children:x.map((function(e){return e.repositoryLink&&Object(n.jsxs)("li",{children:[Object(n.jsx)(g,{children:e.language}),Object(n.jsx)("a",{className:"mx-2",href:e.github,target:"_blank",children:"Github"}),Object(n.jsx)("a",{className:"mx-2",href:e.repositoryLink,target:"_blank",children:e.repository})]})}))}),Object(n.jsx)("p",{children:"Don't see your language? Help us decide by voting with a thumbs up on the Github Project."})]})}),Object(n.jsx)(u,{id:"config-schema",children:Object(n.jsxs)("div",{className:"prose mx-auto",children:[Object(n.jsx)("h2",{children:"Config Schema"}),Object(n.jsx)("p",{children:"This is what the json payload schema looks like."}),Object(n.jsx)("pre",{children:Object(n.jsx)("code",{children:'\n{\n  environments: {\n    [environmentName: string]: {\n      [featureSetName: string]: { // currently hardcoded to "untagged"\n        [featureName: string]:\n          | VexillaToggleFeature\n          | VexillaGradualFeature\n          | VexillaSelectiveFeature;\n      }\n    };\n  }\n}\n                  '})})]})}),Object(n.jsx)(u,{id:"feature-types",children:Object(n.jsxs)("div",{className:"prose mx-auto",children:[Object(n.jsx)("h2",{children:"Feature Types"}),Object(n.jsx)("p",{children:"Other feature types are being considered."}),Object(n.jsx)("pre",{children:Object(n.jsx)("code",{children:'\nenum VexillaFeatureType {\n  TOGGLE = "toggle",\n  GRADUAL = "gradual",\n  SELECTIVE = "selective",\n}\n\ninterface VexillaToggleFeature {\n  type: VexillaFeatureType.TOGGLE;\n  value: boolean;\n}\n\ninterface VexillaGradualFeature {\n  type: VexillaFeatureType.GRADUAL;\n  value: number;\n  seed: number;\n}\n                '})})]})}),Object(n.jsx)(u,{id:"recipes",children:Object(n.jsxs)("div",{className:"prose mx-auto",children:[Object(n.jsx)("h2",{children:"Recipes"}),Object(n.jsx)("p",{children:"Here you can find patterns and examples for how to use Vexilla to accomplish your goals."}),Object(n.jsx)("h4",{children:"Have a recipe you want to add? Let us know in a Github Issue or PR."})]})}),Object(n.jsx)(u,{children:Object(n.jsx)("div",{className:"prose mx-auto pb-16",children:Object(n.jsx)("h2",{children:"We are looking to improve our documentation all the time. Help us out by making suggestions."})})})]})]})]})}},S7XF:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation",function(){return i("QfOO")}])}},[["S7XF",0,2,1,3,4]]]);