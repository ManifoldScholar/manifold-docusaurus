(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[5206],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8578:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(4034),r=n(9973),i=(n(7294),n(3905)),o={slug:"thisweekinmanifoldteammeetingnumerousfixes",title:"This Week in Manifold: Team meeting, Numerous Fixes"},l={permalink:"/manifold-docusaurus/blog/thisweekinmanifoldteammeetingnumerousfixes",source:"@site/blog/2016-11-18-this-week-in-manifold-team-meeting-numerous-fixes.md",title:"This Week in Manifold: Team meeting, Numerous Fixes",description:"This has been an exciting week for Manifold. The UMNP team\u2014Terence, Dan, Susan, and Doug\u2014and Matt all came out to Portland for one of our regular meetings. We met at the Cast Iron Coding office in the old Washington High School building and spent two days talking through issues, thinking about Manifold use cases, sorted through thorny metadata and DOI concerns, and generally reviewed how far we've come, where we're at, and what's left to do. I always find these meetings inspiring and invigorating, and am reminded of what a strong team we have in place for this project.",date:"2016-11-18T00:00:00.000Z",formattedDate:"November 18, 2016",tags:[],truncated:!0,prevItem:{title:"Reading with Zach Davis",permalink:"/manifold-docusaurus/blog/readingwithzachdavis"},nextItem:{title:"Reading with Susan Doerr",permalink:"/manifold-docusaurus/blog/readingwithsusandoerr"}},s=[{value:"Backend",id:"backend",children:[]},{value:"New features",id:"new-features",children:[]},{value:"UI Improvements",id:"ui-improvements",children:[]},{value:"Bug fixes",id:"bug-fixes",children:[]},{value:"API",id:"api",children:[]},{value:"Misc",id:"misc",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This has been an exciting week for Manifold. The UMNP team\u2014Terence, Dan, Susan, and Doug\u2014and Matt all came out to Portland for one of our regular meetings. We met at the Cast Iron Coding office in the old Washington High School building and spent two days talking through issues, thinking about Manifold use cases, sorted through thorny metadata and DOI concerns, and generally reviewed how far we've come, where we're at, and what's left to do. I always find these meetings inspiring and invigorating, and am reminded of what a strong team we have in place for this project."),(0,i.kt)("p",null,"In the two weeks leading up to this meeting, the development and design team at Cast Iron has been working furiously to tighten up existing behavior and progress on the project resources. As a result, we don't have a lot in the way of big new features to report for this sprint. We do, however, have a long list of fixes, small improvements, and tweaks, which I'm including below. Next week is a short week, and I likely won't post an update until the following week. In the next sprint, we'll be finalizing project resources, and then turning our attention back to the annotation user interface, and begin work on comment threads."),(0,i.kt)("p",null,"The release that went out to staging today includes the following revisions."),(0,i.kt)("h2",{id:"backend"},"Backend"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add static markup/styles for backend text selector"),(0,i.kt)("li",{parentName:"ul"},"Wire projects from API to backend views"),(0,i.kt)("li",{parentName:"ul"},"Wire backend dashboard to project list"),(0,i.kt)("li",{parentName:"ul"},"Add static upload form to backend"),(0,i.kt)("li",{parentName:"ul"},"Add backend statics: maker select, textarea"),(0,i.kt)("li",{parentName:"ul"},"Add radio group component to backend"),(0,i.kt)("li",{parentName:"ul"},"Add static componet for backend panel/nav"),(0,i.kt)("li",{parentName:"ul"},"Add static header to backend project detail"),(0,i.kt)("li",{parentName:"ul"},"Add static component for backend activity"),(0,i.kt)("li",{parentName:"ul"},"Add static for backend notifications"),(0,i.kt)("li",{parentName:"ul"},"Add backend icons, secondary header style"),(0,i.kt)("li",{parentName:"ul"},"Add static component for backend projects"),(0,i.kt)("li",{parentName:"ul"},"Add placeholder avatar to makers")),(0,i.kt)("h2",{id:"new-features"},"New features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add resource detail view"),(0,i.kt)("li",{parentName:"ul"},"Slideshow loads resources one page at a time (batch loading)"),(0,i.kt)("li",{parentName:"ul"},"Client can reduce one fetch to two locations in global state")),(0,i.kt)("h2",{id:"ui-improvements"},"UI Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Close panels on click"),(0,i.kt)("li",{parentName:"ul"},"Add graphic and messaging for users not following projects"),(0,i.kt)("li",{parentName:"ul"},"Improve resource-related back links"),(0,i.kt)("li",{parentName:"ul"},"Add marketing banner with signup button"),(0,i.kt)("li",{parentName:"ul"},"Reduce input and button borders"),(0,i.kt)("li",{parentName:"ul"},"Show actual annotation counts in text list"),(0,i.kt)("li",{parentName:"ul"},"Refine resource handling on client"),(0,i.kt)("li",{parentName:"ul"},"Animate project grid enter/leave (in some cases)"),(0,i.kt)("li",{parentName:"ul"},"Improve following widget and project filtering"),(0,i.kt)("li",{parentName:"ul"},"Mobilize mobile reader footer/appearance menu"),(0,i.kt)("li",{parentName:"ul"},"Adjust reader header for mobile"),(0,i.kt)("li",{parentName:"ul"},"Adjust positioning of user menu on mobile"),(0,i.kt)("li",{parentName:"ul"},"Adjust resource collection icon on small sizes"),(0,i.kt)("li",{parentName:"ul"},"Convert notification markup to use new styles"),(0,i.kt)("li",{parentName:"ul"},"Add responsive font-styles to reader"),(0,i.kt)("li",{parentName:"ul"},"Update twitter icon position on events")),(0,i.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove slide listeners on unmount"),(0,i.kt)("li",{parentName:"ul"},"Correct resource detail link"),(0,i.kt)("li",{parentName:"ul"},"Fix inconsistent text-header spacing"),(0,i.kt)("li",{parentName:"ul"},"Adjust overlay header to match browse header"),(0,i.kt)("li",{parentName:"ul"},"Fix svg grid padding on iOS"),(0,i.kt)("li",{parentName:"ul"},"Prevent resource from showing blank slide"),(0,i.kt)("li",{parentName:"ul"},"Fix resource link instances in card"),(0,i.kt)("li",{parentName:"ul"},"Correct regression to collection detail"),(0,i.kt)("li",{parentName:"ul"},"Remove underline from text title"),(0,i.kt)("li",{parentName:"ul"},"Refactor resource scss files add dark overlay"),(0,i.kt)("li",{parentName:"ul"},"Correct resource totals language"),(0,i.kt)("li",{parentName:"ul"},"Show cards on collection resource list"),(0,i.kt)("li",{parentName:"ul"},"Fix overlay on resource thumbnails"),(0,i.kt)("li",{parentName:"ul"},"Fix slideshow transitions for demonstration"),(0,i.kt)("li",{parentName:"ul"},"Prevent project subtitle wrapping on mobile"),(0,i.kt)("li",{parentName:"ul"},"Fix text title weights on mobile"),(0,i.kt)("li",{parentName:"ul"},"Restrict activity list on mobile"),(0,i.kt)("li",{parentName:"ul"},"Fix sizing/wrapping on project metadata"),(0,i.kt)("li",{parentName:"ul"},"Do not add resource to blank collection"),(0,i.kt)("li",{parentName:"ul"},"Remove errant console.log message"),(0,i.kt)("li",{parentName:"ul"},"Correct following transition style"),(0,i.kt)("li",{parentName:"ul"},"Update user after edit profile"),(0,i.kt)("li",{parentName:"ul"},"Correct home page header"),(0,i.kt)("li",{parentName:"ul"},"Fix positioning and padding on header notifications"),(0,i.kt)("li",{parentName:"ul"},"Scroll to top when changing sections"),(0,i.kt)("li",{parentName:"ul"},"Correct annotation create"),(0,i.kt)("li",{parentName:"ul"},"Adjust margin/positioning on thumbnails"),(0,i.kt)("li",{parentName:"ul"},"Update primary nav for mobile"),(0,i.kt)("li",{parentName:"ul"},"Fix duplicate project create events"),(0,i.kt)("li",{parentName:"ul"},"Fix annotation popup position regression"),(0,i.kt)("li",{parentName:"ul"},"Address improperly named project import method")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Expose single collectionResource"),(0,i.kt)("li",{parentName:"ul"},"Expose text age"),(0,i.kt)("li",{parentName:"ul"},"Expose created month, day, and year on texts"),(0,i.kt)("li",{parentName:"ul"},"Expose CollectionResources; add acts","_","as","_","list"),(0,i.kt)("li",{parentName:"ul"},"Expose text annotation counts"),(0,i.kt)("li",{parentName:"ul"},"Expose resource kinds on project"),(0,i.kt)("li",{parentName:"ul"},"Move controllers to align with JSON API spec"),(0,i.kt)("li",{parentName:"ul"},"Expose uncollected project resources in API"),(0,i.kt)("li",{parentName:"ul"},"Expose user project favorites via API"),(0,i.kt)("li",{parentName:"ul"},"Implement project subjects; adjust filtering"),(0,i.kt)("li",{parentName:"ul"},"Ensure sources are associated with texts"),(0,i.kt)("li",{parentName:"ul"},"Import resources when importing projects"),(0,i.kt)("li",{parentName:"ul"},"Adjust resource serializers"),(0,i.kt)("li",{parentName:"ul"},"Add collection controller to API"),(0,i.kt)("li",{parentName:"ul"},"Generate resource thumbnail if it is an image"),(0,i.kt)("li",{parentName:"ul"},"Expose date and kind data on collection"),(0,i.kt)("li",{parentName:"ul"},"Expose project association counts"),(0,i.kt)("li",{parentName:"ul"},"Add resource importer; build resource models"),(0,i.kt)("li",{parentName:"ul"},"DRY up attachment validation; organize models")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refactor authentication; improve API actions"),(0,i.kt)("li",{parentName:"ul"},"Refine frontend resource components"),(0,i.kt)("li",{parentName:"ul"},"Correct resource and collection migrations"),(0,i.kt)("li",{parentName:"ul"},"Clean up initializers")))}c.isMDXComponent=!0}}]);