(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[3870],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2924:function(e,t,n){"use strict";var a=n(7294).createContext(void 0);t.Z=a},5350:function(e,t,n){"use strict";var a=n(7294),r=n(2924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},1232:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),i={specContainer:"specContainer_3QmF",specTitleWrapper:"specTitleWrapper_3l3P",specTitle:"specTitle_1y8p",specSubtitle:"specSubtitle_2144",specContent:"specContent_21W2",specTable:"specTable_y2B1"},o=n(5350),s=function(e){var t=void 0===e?props:e,n=t.title,s=t.subtitle,l=t.items,p=t.children,d=(0,o.Z)();d.isDarkTheme,d.setLightTheme,d.setDarkTheme;return a.createElement("div",{className:(0,r.Z)(i.specContainer)},n&&a.createElement("div",{className:(0,r.Z)(i.specTitleWrapper)},a.createElement("span",{className:(0,r.Z)(i.specTitle)},n),s&&a.createElement("span",{className:(0,r.Z)(i.specSubtitle)},s)),l&&a.createElement("div",{className:(0,r.Z)(i.specTable)},a.createElement("table",{width:"100%"},a.createElement("tbody",null,l.map((function(e,t){return a.createElement("tr",{key:e.key},a.createElement("th",{className:(0,r.Z)(i.specKey)},e.key),a.createElement("td",{className:(0,r.Z)(i.specValue)},e.value))}))))),p?a.createElement("div",{className:(0,r.Z)(i.specContent)},p):null)}},5761:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(4034),r=n(9973),i=(n(7294),n(3905)),o=n(1232),s={id:"export_targets",title:"Export Targets",sidebar_label:"Export Targets"},l={unversionedId:"administering/configuring/export_targets",id:"administering/configuring/export_targets",isDocsHomePage:!1,title:"Export Targets",description:"The fields discussed in this section can be accessed from the Manifold backend by selecting Settings from the main menu and then Export Targets in the submenu.",source:"@site/docs/administering/configuring/export_targets.md",sourceDirName:"administering/configuring",slug:"/administering/configuring/export_targets",permalink:"/manifold-docusaurus/docs/administering/configuring/export_targets",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/configuring/export_targets.md",version:"current",sidebar_label:"Export Targets",frontMatter:{id:"export_targets",title:"Export Targets",sidebar_label:"Export Targets"},sidebar:"docs",previous:{title:"Email Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/email_settings"},next:{title:"Environment Variables",permalink:"/manifold-docusaurus/docs/administering/reference/environment_variables"}},p=[{value:"What are Export Targets?",id:"what-are-export-targets",children:[]},{value:"Adding and Editing Targets",id:"adding-and-editing-targets",children:[]},{value:"Export Variables",id:"export-variables",children:[]},{value:"Export Schemes for Directory Paths",id:"export-schemes-for-directory-paths",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-location"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"location")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The fields discussed in this section can be accessed from the Manifold backend by selecting ",(0,i.kt)("strong",{parentName:"p"},"Settings")," from the main menu and then ",(0,i.kt)("strong",{parentName:"p"},"Export Targets")," in the submenu."),(0,i.kt)("p",{parentName:"div"},"Only users logged in with ",(0,i.kt)("strong",{parentName:"p"},"Admin")," role can access this view."))),(0,i.kt)("h2",{id:"what-are-export-targets"},"What are Export Targets?"),(0,i.kt)("p",null,"Manifold Projects can be packaged up and exported via SFTP to preservation agencies or institutional repositories for long-term digital preservation. Export Targets represent those destinations Manifold will be able to connect and securely deliver Project materials. See the ",(0,i.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects#exports"},"Exports")," section for details about the process and form of these exports."),(0,i.kt)("h2",{id:"adding-and-editing-targets"},"Adding and Editing Targets"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Add a new export target")," button opens a drawer from the right where new Export Targets are configured. These settings should be confirmed with the target repository in question. Existing Export Targets appear in this view as a paginated list. When a Target listing is selected the configuration options will again be available for edit."),(0,i.kt)("p",null,"A Target\u2019s ",(0,i.kt)("strong",{parentName:"p"},"Name")," is arbitrary and intended for internal use, distinguishing between various Export Targets. The name is listed in this view and in the dropdown field of the ",(0,i.kt)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects#exports"},(0,i.kt)("strong",{parentName:"a"},"Exports")," menu")," within a Project."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Format")," of the Target Name is described with variables and determines the top-level filename of the exported archive. It ",(0,i.kt)("em",{parentName:"p"},"does not")," affect the structure or content of the export in any way. The default value for this field is ",(0,i.kt)("inlineCode",{parentName:"p"},"%s.%e"),", which, using the variables definitions below, equates to ",(0,i.kt)("inlineCode",{parentName:"p"},"project-slug.extension"),". "),(0,i.kt)("p",null,"There are two dropdown options currently available that outline the ",(0,i.kt)("strong",{parentName:"p"},"Type")," of transfer: ",(0,i.kt)("strong",{parentName:"p"},"SFTP with Key Authentication")," and ",(0,i.kt)("strong",{parentName:"p"},"SFTP with Password Authentication"),". These are determined by the preservation agency. Select the appropriate based on whether the archive is supplying a key to authenticate with or a password. Other possibilities are viable for implementation, whether for cloud systems or institutional repositories."),(0,i.kt)("p",null,"Likewise, the ",(0,i.kt)("strong",{parentName:"p"},"SFTP Host")," value will be supplied to you by the repository accepting your content, and will likely take a format akin to ",(0,i.kt)("inlineCode",{parentName:"p"},"ftp.{ArchiveName}.{domain}"),"."),(0,i.kt)("p",null,"The default ",(0,i.kt)("strong",{parentName:"p"},"SFTP Port")," value, ",(0,i.kt)("inlineCode",{parentName:"p"},"22"),", is the standard that most secure servers will be listening to for transfers of this kind. If the preservation agency does not specify a port for the transfer, you can safely assume they are listening on port 22 and leave this field as is."),(0,i.kt)("p",null,"The value of the ",(0,i.kt)("strong",{parentName:"p"},"SFTP Username")," is unaffected by the ",(0,i.kt)("strong",{parentName:"p"},"Type")," of transfer and will be set up for you by the preservation agency. This field ",(0,i.kt)("em",{parentName:"p"},"is")," case sensitive."),(0,i.kt)("p",null,"Depending on transfer ",(0,i.kt)("strong",{parentName:"p"},"Type"),", the system will provide a field for a ",(0,i.kt)("strong",{parentName:"p"},"SFTP Private Key")," or ",(0,i.kt)("strong",{parentName:"p"},"SFTP Password"),". The ",(0,i.kt)("strong",{parentName:"p"},"Key")," is a \u201cpaste-in\u201d field, meaning the preservation agency will supply you with their key that you can then paste into the field to complete the configuration. Likewise, they will provide you with the password they set for these transactions so that you can push content from your instance to their repository. The ",(0,i.kt)("strong",{parentName:"p"},"Password")," field ",(0,i.kt)("em",{parentName:"p"},"is")," case sensitive."),(0,i.kt)("h2",{id:"export-variables"},"Export Variables"),(0,i.kt)("p",null,"Variables are letters combined with the percent character (%); the rest of the ",(0,i.kt)("strong",{parentName:"p"},"Target Name Format")," can be described using the same characters available for file naming generally. The table below represents the current variables available. We could conceivably add more options if needed."),(0,i.kt)(o.Z,{mdxType:"Spec"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%d")),(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2020-03-06")),(0,i.kt)("td",{parentName:"tr",align:null},"This is the date ",(0,i.kt)("em",{parentName:"td"},"the export")," was created.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%e")),(0,i.kt)("td",{parentName:"tr",align:null},"Extension"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".zip")),(0,i.kt)("td",{parentName:"tr",align:null},"Presently this will always be ",(0,i.kt)("inlineCode",{parentName:"td"},".zip"),". In the future we may support different formats beyond the Bagit specification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%i")),(0,i.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"059a4e9d-2152-4ae5-816d-41891d4dccd1")),(0,i.kt)("td",{parentName:"tr",align:null},"This is a Manifold-generated globally unique ID that is visible only in the URL (appearing after ",(0,i.kt)("inlineCode",{parentName:"td"},"projects/"),") when viewing the project in the backend.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%I")),(0,i.kt)("td",{parentName:"tr",align:null},"Export ID"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"071be7e7-f8a3-4bb3-845a-affb0f9e4c77")),(0,i.kt)("td",{parentName:"tr",align:null},"A globally unique ID that Manifold generates for each export at the time of export.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%n")),(0,i.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Metagaming")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the Manifold project being exported. We would caution against using this variable as part of the export name. Project names often contain spaces that will likely cause problems downstream from the export.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%s")),(0,i.kt)("td",{parentName:"tr",align:null},"Project Slug"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"metagaming")),(0,i.kt)("td",{parentName:"tr",align:null},"A project's slug is the customizable URL suffix that publishers can set in project's Properties sidebar view.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%t")),(0,i.kt)("td",{parentName:"tr",align:null},"Time (including date)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2020-03-06T220927")),(0,i.kt)("td",{parentName:"tr",align:null},"The date and time the export was created in (",(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc3339"},"RFC 3339 format"),"). The numbers following the ",(0,i.kt)("inlineCode",{parentName:"td"},"T")," represent the time according to the UTC standard.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%u")),(0,i.kt)("td",{parentName:"tr",align:null},"UNIX Timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1583532567")),(0,i.kt)("td",{parentName:"tr",align:null},"The UNIX timestamp, which measures (in seconds) from January 1, 1970 UTC.")))),(0,i.kt)("p",null,"For the technically inclined, the available input values are also described by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ManifoldScholar/manifold/blob/d500d4e63f7821137728d261814fbc9c9ecb6575/api/app/services/export_strategies/target_name_formatter.rb#L22"},"this table")," in the Manifold repository.")),(0,i.kt)("h2",{id:"export-schemes-for-directory-paths"},"Export Schemes for Directory Paths"),(0,i.kt)("p",null,"It is possible in the present scheme to provide directory paths in the ",(0,i.kt)("strong",{parentName:"p"},"Target Name Format")," field. For example, to provide some nice organization you could input ",(0,i.kt)("inlineCode",{parentName:"p"},"%s/%d/%I%e")," to return the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"metagaming/2020-03-06/071be7e7-f8a3-4bb3-845a-affb0f9e4c77.zip\n")),(0,i.kt)("p",null,"This could potentially allow an archive to put the export archive file in a derived directory that uses those same formatting parameters. Thus the same export target could be used for a dozen projects that a repository could sort into different directories, rather than all just going into the same directory."))}c.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);