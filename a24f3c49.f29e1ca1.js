(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(a),h=n,m=b["".concat(r,".").concat(h)]||b[h]||p[h]||o;return a?i.a.createElement(m,s(s({ref:t},l),{},{components:a})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),o=(a(0),a(123)),r={id:"general_settings",title:"General Settings",sidebar_label:"General Settings"},s={unversionedId:"administering/configuring/general_settings",id:"administering/configuring/general_settings",isDocsHomePage:!1,title:"General Settings",description:"About",source:"@site/docs/administering/configuring/general_settings.md",slug:"/administering/configuring/general_settings",permalink:"/manifold-docusaurus/docs/administering/configuring/general_settings",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/configuring/general_settings.md",version:"current",sidebar_label:"General Settings",sidebar:"docs",previous:{title:"Managing Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/managing_settings"},next:{title:"Theme Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/theme_settings"}},c=[{value:"About",id:"about",children:[{value:"How Do You Refer to Your Manifold Installation?",id:"how-do-you-refer-to-your-manifold-installation",children:[]},{value:"Default Page Title",id:"default-page-title",children:[]},{value:"Default Page Description",id:"default-page-description",children:[]},{value:"Default Publisher and Place of Publication",id:"default-publisher-and-place-of-publication",children:[]}]},{value:"Footer",id:"footer",children:[{value:"Copyright",id:"copyright",children:[]},{value:"Social Sharing Message",id:"social-sharing-message",children:[]},{value:"Twitter Account and Facebook Page ID",id:"twitter-account-and-facebook-page-id",children:[]},{value:"Contact Email",id:"contact-email",children:[]}]},{value:"Behaviors",id:"behaviors",children:[{value:"Restrict Access to All Projects",id:"restrict-access-to-all-projects",children:[]},{value:"Disable Library Views",id:"disable-library-views",children:[]},{value:"Disable Public Annotations and Comments",id:"disable-public-annotations-and-comments",children:[]},{value:"Disable Reading Groups",id:"disable-reading-groups",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"about"},"About"),Object(o.b)("p",null,"This section allows you to define how your Manifold instance identifies itself to your users and provide descriptive information for search engines and web crawlers."),Object(o.b)("h3",{id:"how-do-you-refer-to-your-manifold-installation"},"How Do You Refer to Your Manifold Installation?"),Object(o.b)("p",null,"Manifold refers to itself in certain situations: when sending emails to users or when referencing specific components of the application. By default it will do so generically:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Welcome to ",Object(o.b)("strong",{parentName:"p"},"Manifold"),". Thanks for signing up.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"By creating this account, you agree to ",Object(o.b)("strong",{parentName:"p"},"Manifold"),"\u2019s terms and conditions.")),Object(o.b)("p",null,"You can adjust that messaging to reflect your own identity. Use a name that defines how you talk about your instance."),Object(o.b)("h3",{id:"default-page-title"},"Default Page Title"),Object(o.b)("p",null,"Title text identifies the content of a web page. Text entered here will display in your browser\u2019s title bar or the page\u2019s tab for core Manifold pages (e.g., Home Page, Notification Settings, Manage Reading Groups). If this field is left blank the system will render the default: \u201cManifold Scholarship.\u201d"),Object(o.b)("p",null,"On project pages the page title will automatically adjust to the name of the specific content being displayed."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Page titles are considered by search engine algorithms in deciding the order of the results they return. Because search engines tend to truncate page titles after 55\u201360 characters, it is considered best practice to keep the title descriptive but brief."))),Object(o.b)("h3",{id:"default-page-description"},"Default Page Description"),Object(o.b)("p",null,"This description is meant to provide a brief summary of your instance\u2019s content and purpose so that search engines can properly catalog and surface it in results. This description will usually be displayed as part of the result, beneath the page\u2019s title and link."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"As a general rule, it is best to keep these brief\u2014between 50 and 160 characters\u2014without any internal formatting, just plain text."))),Object(o.b)("h3",{id:"default-publisher-and-place-of-publication"},"Default Publisher and Place of Publication"),Object(o.b)("p",null,"Manifold displays metadata for Projects, Texts, and Resources. Names and places entered in these spaces will automatically populate the ",Object(o.b)("inlineCode",{parentName:"p"},"Publisher")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Publisher Place")," fields for new projects, found in their Metadata sidebar and displayed in a project\u2019s Metadata content block."),Object(o.b)("p",null,"These fields are the electronic equivalent of publisher information traditionally found on title pages in print volumes."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Changing the content of these fields will not automatically update existing projects."))),Object(o.b)("h2",{id:"footer"},"Footer"),Object(o.b)("h3",{id:"copyright"},"Copyright"),Object(o.b)("p",null,"The Manifold footer, which spans the bottom of all core Manifold pages, includes a space where you can define the copyright information for the instance as a whole. "),Object(o.b)("p",null,"The copyright symbol (\xa9) will precede text entered in this field by default. If left blank, no default notice will appear."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In the Reader, Manifold displays the copyright information of specific Texts instead of the general copyright notice."))),Object(o.b)("h3",{id:"social-sharing-message"},"Social Sharing Message"),Object(o.b)("p",null,"Links to individual Resources and Resource Collections can be shared by readers directly to their personal Twitter or Facebook timelines."),Object(o.b)("p",null,"Manifold will prepopulate those posts with the text entered here. If left blank, the system defaults to \u201cShared from Manifold Scholarship.\u201d"),Object(o.b)("p",null,"In all cases the message will be followed the URL of the content being shared."),Object(o.b)("h3",{id:"twitter-account-and-facebook-page-id"},"Twitter Account and Facebook Page ID"),Object(o.b)("p",null,"These fields provide you the means to include links to your existing social media profiles in the Manifold Footer."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Twitter Account")," field is expecting your Twitter username, with or without an ampersand."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Facebook Page ID")," corresponds to the name that appears in the URL of your Facebook homepage. For example, the University of Minnesota Press Facebook homepage is ",Object(o.b)("inlineCode",{parentName:"p"},"https://www.facebook.com/UMinnPress/"),". The value to enter into Manifold then is ",Object(o.b)("inlineCode",{parentName:"p"},"UMinnPress"),"."),Object(o.b)("p",null,"When left blank, the Twitter or Facebook links will be absent from the footer."),Object(o.b)("h3",{id:"contact-email"},"Contact Email"),Object(o.b)("p",null,"Manifold has a built-in contact form that readers can use to provide feedback directly to you through the application."),Object(o.b)("p",null,"When an email address is included in this field, the link to the contact form, labeled as \u201cEmail,\u201d will appear in the Manifold Footer."),Object(o.b)("p",null,"Messages that readers compose and send through the contact form will be delivered by Manifold to the email address in this field."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The instance\u2019s ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/manifold-docusaurus/docs/administering/configuring/email_settings"}),"email settings")," need to be configured before Manifold can deliver messages to you from readers that are using the contact form."))),Object(o.b)("h2",{id:"behaviors"},"Behaviors"),Object(o.b)("h3",{id:"restrict-access-to-all-projects"},"Restrict Access to All Projects"),Object(o.b)("p",null,"By default all Manifold projects are freely available to read, even for those folks who haven\u2019t created an account on your instance."),Object(o.b)("p",null,"Engaging this toggle changes that default behavior. Now, every project on your Manifold will be closed. Readers will only be able to access a project\u2019s content if you provide them an entitlement to that project, or if they are part of a Reading Group that has an entitlement to that project."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"While it is possible to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/manifold-docusaurus/docs/backend/projects"}),"override this setting for individual projects"),", so that some projects in your library are openly accessible to everyone, you cannot grant readers or reading groups a site-wide entitlement that allows them to read any or all projects on your instance."))),Object(o.b)("h4",{id:"restricted-access-notice-header-and-body"},"Restricted Access Notice Header and Body"),Object(o.b)("p",null,"When you enable ",Object(o.b)("inlineCode",{parentName:"p"},"Restrict Access to All Projects"),", Manifold will reveal two additional fields where you can message to readers why content is restricted and how they can gain access to it."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Restricted Access Notice Header")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Body")," text display below the project hero in a blue banner for only those readers who don\u2019t have credentials to access the project. If left blank, the header message defaults to \u201cAccess to this project is restricted,\u201d and the body message will read \u201cOnly users granted permission may view this project's texts, resources, and other content.\u201d"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"Restricted Access Notice Body")," field honors Markdown formatting, so you can include in your messaging a link to a Manifold page or an external page that describes in detail how users can gain access to your content."))),Object(o.b)("h3",{id:"disable-library-views"},"Disable Library Views"),Object(o.b)("p",null,"If you want to leverage the power of Manifold as part of your existing web presence, instead of having it run as potential competition for attention, you have the option to disable your main Manifold landing page and all associated pages that normally display your projects as a library of content."),Object(o.b)("p",null,"When you put Manifold in this state, you can continue to focus your audience on your existing website, ushering them to specific Manifold projects directly from there."),Object(o.b)("p",null,"When you toggle this setting on, Manifold will provide the following options for your consideration:"),Object(o.b)("h4",{id:"enforce-standalone-mode-for-all-projects"},"Enforce Standalone Mode for All Projects"),Object(o.b)("p",null,"If engaged, all projects will render in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/manifold-docusaurus/docs/backend/projects"}),"standalone mode"),", overriding individual project settings."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When projects are in standalone mode, the standard library menu bar, which displays your logo and color theme, will be supplanted by a more basic standalone header."))),Object(o.b)("h4",{id:"library-and-home-page-redirect-urls"},"Library and Home Page Redirect URLs"),Object(o.b)("p",null,"Disabling library views does not destroy the instance\u2019s library or home pages. Instead Manifold prevents readers from accessing them."),Object(o.b)("p",null,"The URL you include in these fields will tell Manifold where you want to direct your readers when they would otherwise reach a library or home page."),Object(o.b)("p",null,"If left blank, Manifold will return a ",Object(o.b)("inlineCode",{parentName:"p"},"404 Page Not Found")," error to readers trying to access non-project pages."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Additional Considerations")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When library views are disable,"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"project pages and transactional pages, like those for customizing notifications and reading groups, will render with the normal library menu bar and footer;"),Object(o.b)("li",{parentName:"ul"},"the menu bar will not include links to ",Object(o.b)("inlineCode",{parentName:"li"},"Home"),",\xa0",Object(o.b)("inlineCode",{parentName:"li"},"Projects"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"Following"),"\xa0pages, though custom Manifold Pages can still be set to show in this space;"),Object(o.b)("li",{parentName:"ul"},"global search will be scoped down to just the active project; and"),Object(o.b)("li",{parentName:"ul"},"transactional pages will display in the context of the last project that the user visited.")))),Object(o.b)("h3",{id:"disable-public-annotations-and-comments"},"Disable Public Annotations and Comments"),Object(o.b)("p",null,"Manifold was built, in part, to foster scholarly discussion and interaction. By default, readers can leave public annotations on any Text in an instance. And from those annotations, comment threads can grow as other readers react and respond. If that dynamic is not desirable or appropriate for your instance, you can engage this slider and prevent readers from being able to leave annotations and comments that are generally viewable."),Object(o.b)("p",null,"Engaging this setting does not prevent all annotations entirely:\xa0readers will still be able to (1) leave private annotations for their own personal use and (2) annotate Texts in the context of reading groups, which will be viewable ",Object(o.b)("em",{parentName:"p"},"only")," to other members of that group. In both cases, readers will ",Object(o.b)("em",{parentName:"p"},"not")," be able to transform those private annotations into public ones."),Object(o.b)("p",null,"So long as this setting is engaged, public reading groups will function as if they were private ones."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you wish to further limit the annotation functionality across your instance, you can also disable reading groups (described below). When publishers disable both public annotation and reading groups, users will only be able to leave private annotations they alone can see."))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Disabling public annotations and comments here will affect every project in your instance. If you want to instead prevent annotations and comments only for specific projects, you can do so in a project\u2019s ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/manifold-docusaurus/docs/backend/projects"}),"settings section"),"."))),Object(o.b)("h3",{id:"disable-reading-groups"},"Disable Reading Groups"),Object(o.b)("p",null,"By default, any reader who has an account on your instance can create or join a Reading Group. Reading Groups are a mechanism to band together a discrete collection of readers and the annotations, highlights, and comments they choose to associate with a group. If Reading Groups aren\u2019t desirable or don\u2019t fit with how you\u2019re presenting your instance, you have the options to disable them globally."),Object(o.b)("p",null,"With Reading Groups disabled, Readers will no longer be able to create new or join existing Reading Groups. And existing Reading Group annotations, created before this setting was enabled, will no longer be visible to anyone\u2014",Object(o.b)("em",{parentName:"p"},"including the readers who left those annotations"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Because it is possible for readers to potentially access and engage with materials across your entire instance, Reading Groups do not have direct relationships with specific Projects. Thus it is not possible to selectively disable Reading Group functionality on a project-by-project basis."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you only want to prevent your readers from leaving public annotations and comments on your instance, then we suggest simply disabling public annotations, described above. That alone will make all Reading Groups function as if they were private Reading Groups, with group activity only accessible to group members."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Interface Changes")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When Reading Groups are disabled, the language in various spaces of the interface will change slightly:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"After selecting text in the Reader, the pop-up language will change from \u201cCurrent Group\u201d to \u201cCurrent Visibility.\u201d"),Object(o.b)("li",{parentName:"ul"},"The menu heading, when selecting the context of the annotation, will now read as \u201cVisibility\u201d instead of \u201cReading Group,\u201d and existing Reading Groups will no longer appear in the dropdown."),Object(o.b)("li",{parentName:"ul"},"The Visibility dropdown in the menu bar will show a heading of \u201cVisibility\u201d instead of \u201cReading Group,\u201d and existing reading groups will no longer render in the listings."),Object(o.b)("li",{parentName:"ul"},"The user dropdown in the menu bar will no longer provide a link to \u201cMange Groups.\u201d")))))}d.isMDXComponent=!0}}]);