(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(4),a=n(9),o=(n(0),n(255)),i={slug:"thisweekinmanifolddevopsinfrastructureandsocialactivity",title:"This Week in Manifold: DevOps, Infrastructure, and Social Activity",image:"",image_alt:""},s={permalink:"/manifold-docusaurus/blog/thisweekinmanifolddevopsinfrastructureandsocialactivity",source:"@site/blog/2016-11-04-this-week-in-manifold-devops-infrastructure-and-social-activity.md",description:"Thanks for joining me for another installation of \"This Week in Manifold.\" First off, please accept my apologies for missing last week's update. When last Friday rolled around, we had a number of updates ready to go out to our staging site. However, when it was time to deploy, we hit a few unexpected problems. DevOps, Hosting Manifold, and Deployment This release adds a new metadata field to projects. Because the exact metadata requirements are difficult to pin down and may change from press to press, we wanted a relatively flexible approach to storing project, text, and resource metadata. Back in the day, we might have used an EAV model for this, but there are many well-documented drawbacks to that model. Because Manifold uses PostgreSQL as its database backend, we have access to a variety of field types for storing arbitrary amounts of data. In the past, we've used HSTORE for storing key/value pairs, but&nbsp;in this case we wanted something more flexible that could store different data types (HSTORE stores strings, but we want to store integers, boolean values, strings, arrays, etc). Recent versions of PostgreSQL include the JSONB field type, which is exactly what we want in this case. Alas, that meant that the October 28th&nbsp;release required&nbsp;some infrastructure updates. Sure, we could have shelled into the staging server and done a quick upgrade, but that's not how we roll on this project. It's really important to us that it be possible to easily provision hosts for Manifold, which means automating as much as possible. As Manifold grows, it relies on more and more services to run, which makes setting it up increasingly complex. With this release, Manifold needs all of the following configured on the server to run correctly:",date:"2016-11-04T00:00:00.000Z",tags:[],title:"This Week in Manifold: DevOps, Infrastructure, and Social Activity",truncated:!0,prevItem:{title:"Reading with Susan Doerr",permalink:"/manifold-docusaurus/blog/readingwithsusandoerr"},nextItem:{title:"Joining Manifold",permalink:"/manifold-docusaurus/blog/joiningmanifold"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},255:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);