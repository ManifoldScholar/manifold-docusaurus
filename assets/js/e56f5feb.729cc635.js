(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[252],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},5350:function(e,t,n){"use strict";var r=n(7294),o=n(2924);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},1232:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=n(6010),i={specContainer:"specContainer_3QmF",specTitleWrapper:"specTitleWrapper_3l3P",specTitle:"specTitle_1y8p",specSubtitle:"specSubtitle_2144",specContent:"specContent_21W2",specTable:"specTable_y2B1"},a=n(5350),s=function(e){var t=void 0===e?props:e,n=t.title,s=t.subtitle,l=t.items,c=t.children,u=(0,a.Z)();u.isDarkTheme,u.setLightTheme,u.setDarkTheme;return r.createElement("div",{className:(0,o.Z)(i.specContainer)},n&&r.createElement("div",{className:(0,o.Z)(i.specTitleWrapper)},r.createElement("span",{className:(0,o.Z)(i.specTitle)},n),s&&r.createElement("span",{className:(0,o.Z)(i.specSubtitle)},s)),l&&r.createElement("div",{className:(0,o.Z)(i.specTable)},r.createElement("table",{width:"100%"},r.createElement("tbody",null,l.map((function(e,t){return r.createElement("tr",{key:e.key},r.createElement("th",{className:(0,o.Z)(i.specKey)},e.key),r.createElement("td",{className:(0,o.Z)(i.specValue)},e.value))}))))),c?r.createElement("div",{className:(0,o.Z)(i.specContent)},c):null)}},9424:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(4034),o=n(9973),i=(n(7294),n(3905)),a=n(1232),s={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},l={unversionedId:"administering/troubleshooting",id:"administering/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Logging",source:"@site/docs/administering/troubleshooting.mdx",sourceDirName:"administering",slug:"/administering/troubleshooting",permalink:"/manifold-docusaurus/docs/administering/troubleshooting",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/troubleshooting.mdx",version:"current",sidebar_label:"Troubleshooting",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Backup and Restore",permalink:"/manifold-docusaurus/docs/administering/backup_restore"},next:{title:"Securing Manifold",permalink:"/manifold-docusaurus/docs/administering/securing_manifold"}},c=[{value:"Logging",id:"logging",children:[]},{value:"Background Jobs",id:"background-jobs",children:[]},{value:"Memory Consumption",id:"memory-consumption",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"When Manifold isn't working the way it should, the best place to begin troubleshooting is by looking at Manifold's logs."),(0,i.kt)(a.Z,{title:"Log Locations",subtitle:"For package installations",items:[{key:"API",value:"/var/log/manifold/api/production.log"},{key:"API app server (Puma)",value:"/var/log/manifold/puma/current"},{key:"Cable",value:"/var/log/manifold/cable/current"},{key:"Client",value:"/var/log/manifold/client/current"},{key:"Clockwork",value:"/var/log/manifold/clockwork/current"},{key:"Elasticsearch",value:"/var/log/manifold/elasticsearch/current"},{key:"Nginx access log",value:"/var/log/manifold/nginx/access.log"},{key:"Nginx error log",value:"/var/log/manifold/nginx/error.log"},{key:"Postgresql",value:"/var/log/manifold/postgresql/current"},{key:"Redis",value:"/var/log/manifold/redis/current"},{key:"Sidekiq",value:"/var/log/manifold/sidekiq/current"}],mdxType:"Spec"}),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/administering/managing_services#troubleshooting-services"},"troubleshooting services")," section in our documentation for more information on managing and checking services. If Manifold isn't working correctly, check and make sure all services are running. If a service isn't starting, check the corresponding log file to figure out why the service won't run correctly."),(0,i.kt)("p",null,"If you're encountering an application error, start by figuring out if it's a client error or an API error. If you're seeing a 500 error from the API, it could indicate a misconfiguration or a bug. Check the end of the API log to better understand what's causing the error. Errors in the client application will show up in the client log, or in your console in developer tools. If you see errors in these places, please report them to us on Slack. If there's a bug in Manifold, we want to know about it!"),(0,i.kt)("h2",{id:"background-jobs"},"Background Jobs"),(0,i.kt)("p",null,"Manifold runs a number of tasks in the background, including but not limited to image processing, email delivery, collection membership calculations, epub generation, and project packaging. It relies on a piece of open source software called Sidekiq to manage these job queues. If you are logged in to your manifold instance as an admin user, you may view the Sidekiq job queue at http://your-domain/api/sidekiq. If background jobs are failing, you will see a high count of failed or retried jobs on the dashboard. Look at the retry queue for clues about why jobs are failing."),(0,i.kt)("h2",{id:"memory-consumption"},"Memory Consumption"),(0,i.kt)("p",null,"Like many Ruby applications, the Manifold API consumes and can hold onto available memory. With Manifold v6, we've fixed a number of memory issues and upgrades Ruby to v2.7, which has improved garbage collection. That said, you might experience issues if your instance doesn't have adequate memory resources to support Manifold's various underlying services. If Manifold is non-responsive or unstable, monitory the available memory and consider increasing the resources devoted to Manifold."))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);