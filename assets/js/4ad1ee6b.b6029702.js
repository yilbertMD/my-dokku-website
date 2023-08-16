"use strict";(self.webpackChunkmy_dokku_website=self.webpackChunkmy_dokku_website||[]).push([[8717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:2},a=void 0,i={unversionedId:"tutorial-basics/descriptors",id:"tutorial-basics/descriptors",title:"descriptors",description:"Descriptores",source:"@site/docs/tutorial-basics/descriptors.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/descriptors",permalink:"/my-dokku-website/docs/tutorial-basics/descriptors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/descriptors.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"DSL",permalink:"/my-dokku-website/docs/tutorial-basics/DSL"},next:{title:"Create a Page",permalink:"/my-dokku-website/docs/tutorial-basics/create-a-page"}},c={},l=[{value:"<strong>Descriptores</strong>",id:"descriptores",level:2},{value:"<strong>Events for event bus</strong>",id:"events-for-event-bus",level:3},{value:"<strong>Remote requests</strong>",id:"remote-requests",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"descriptores"},(0,o.kt)("strong",{parentName:"h2"},"Descriptores")),(0,o.kt)("p",null,"Son los que describen los eventos para el eventbus, los mensajes hacia el remoto, definir\xeda como funciona el nombramiento, y el placeholdering, esto se debe tener en cuenta para cada elemento que requiera un descriptor."),(0,o.kt)("p",null,"Los descriptores cuentan con unas categor\xedas, son las siguientes:"),(0,o.kt)("h3",{id:"events-for-event-bus"},(0,o.kt)("strong",{parentName:"h3"},"Events for event bus")),(0,o.kt)("p",null,"Define la presentaci\xf3n, los eventos son la comunicaci\xf3n y cuentan con dos tipos, eventos t\xe9cnicos y sem\xe1nticos. Teniendo en cuenta lo anterior, no todos los elementos de contexto son prove\xeddos directamente por el evento, en ese caso el controlador de transacciones se encargar\xe1 de ello."),(0,o.kt)("h3",{id:"remote-requests"},(0,o.kt)("strong",{parentName:"h3"},"Remote requests")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Se requiere documentar")))}d.isMDXComponent=!0}}]);