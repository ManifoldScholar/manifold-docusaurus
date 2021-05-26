(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[7817],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return p}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=i,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2098:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var t=r(4034),i=r(9973),a=(r(7294),r(3905)),o={id:"environment_variables",title:"Environment Variables",sidebar_label:"Environment Variables"},l={unversionedId:"administering/reference/environment_variables",id:"administering/reference/environment_variables",isDocsHomePage:!1,title:"Environment Variables",description:"Setting Environment Variables",source:"@site/docs/administering/reference/environment_variables.md",sourceDirName:"administering/reference",slug:"/administering/reference/environment_variables",permalink:"/manifold-docusaurus/docs/administering/reference/environment_variables",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/reference/environment_variables.md",version:"current",sidebar_label:"Environment Variables",frontMatter:{id:"environment_variables",title:"Environment Variables",sidebar_label:"Environment Variables"},sidebar:"docs",previous:{title:"Export Targets",permalink:"/manifold-docusaurus/docs/administering/configuring/export_targets"},next:{title:"API Rake Tasks",permalink:"/manifold-docusaurus/docs/administering/reference/api_rake_tasks"}},s=[{value:"Setting Environment Variables",id:"setting-environment-variables",children:[{value:"Package Install",id:"package-install",children:[]}]}],c={toc:s};function u(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setting-environment-variables"},"Setting Environment Variables"),(0,a.kt)("p",null,"Manifold uses Environment variables to orchestrate and configure its various services."),(0,a.kt)("h3",{id:"package-install"},"Package Install"),(0,a.kt)("p",null,"Environment variables for the Manifold API and Client are stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/opt/manifold/etc/"),". Do not edit these files directly, as they are generated anew each time you run ",(0,a.kt)("inlineCode",{parentName:"p"},"manifold-ctl reconfigure"),". Instead, edit the master configuration file at ",(0,a.kt)("inlineCode",{parentName:"p"},"etc/manifold/manifold.rb"),". To inject environment variables for the API, expose your environment variables as a hash at ",(0,a.kt)("inlineCode",{parentName:"p"},"manifold_api['env']"),". Remember, this file is a Ruby file and should be valid Ruby syntax."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'#### Add custom environment to Manifold API\nmanifold_api[\'env\'] = {\n  "FOO" => "bar"\n}\n')),(0,a.kt)("p",null,"As always, once you've updated this file, run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo manifold-ctl reconfigure")," to apply your changes. Look at ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/opt/manifold/etc/api-env.sh")," to confirm that your additons to the environment persisted."))}u.isMDXComponent=!0}}]);