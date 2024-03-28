(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[1438],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8181:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var i=n(4034),a=n(9973),o=(n(7294),n(3905)),r={id:"securing_manifold",title:"Securing Manifold",sidebar_label:"Securing Manifold"},s={unversionedId:"administering/securing_manifold",id:"administering/securing_manifold",isDocsHomePage:!1,title:"Securing Manifold",description:"SSL with Packages",source:"@site/docs/administering/securing_manifold.md",sourceDirName:"administering",slug:"/administering/securing_manifold",permalink:"/manifold-docusaurus/docs/administering/securing_manifold",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/securing_manifold.md",version:"current",sidebar_label:"Securing Manifold",frontMatter:{id:"securing_manifold",title:"Securing Manifold",sidebar_label:"Securing Manifold"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/manifold-docusaurus/docs/administering/troubleshooting"},next:{title:"Mitigating Spam",permalink:"/manifold-docusaurus/docs/administering/spam"}},l=[{value:"SSL with Packages",id:"ssl-with-packages",children:[]},{value:"Using Lets Encrypt",id:"using-lets-encrypt",children:[{value:"Certbot Installation",id:"certbot-installation",children:[]},{value:"Provision a Cerificate",id:"provision-a-cerificate",children:[]},{value:"Firewall Configuration",id:"firewall-configuration",children:[]}]},{value:"SSL with Docker Images",id:"ssl-with-docker-images",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ssl-with-packages"},"SSL with Packages"),(0,o.kt)("p",null,"Enabling SSL on a package installation is simple and straight forward. You will need to procure an SSL certificate, put it on the host, and reconfigure Manifold to use the certificate."),(0,o.kt)("p",null,"Open the package configuration file at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/manifold/manifold.rb")," in an editor of your choice."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, update the value for ",(0,o.kt)("inlineCode",{parentName:"li"},"external_url"),". Change ",(0,o.kt)("inlineCode",{parentName:"li"},"http")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"https"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the nginx configuration section. Uncomment ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx['ssl_certificate']")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx['ssl_certificate_key']"),". Set the values to the absolute path on the host to your certificate file and your private key."),(0,o.kt)("li",{parentName:"ol"},"Uncomment and set the ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx['redirect_http_to_https']")," value to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ol"},"Uncomment and set the ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx['listen_https']")," value to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ol"},"Save your changes to the configuration file and apply your changes to Manifold by running ",(0,o.kt)("inlineCode",{parentName:"li"},"manifold-ctl reconfigure"),". When that process completes,run ",(0,o.kt)("inlineCode",{parentName:"li"},"manifold-ctl restart")," to restart all services.")),(0,o.kt)("p",null,"Once the services restart without error, you should be able to access your site with https enabled."),(0,o.kt)("h2",{id:"using-lets-encrypt"},"Using Lets Encrypt"),(0,o.kt)("p",null,"One of the easiest options in for achieving secure communication between your Manifold instalation and its visitors via SSL makes use of the ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," project and the ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," tool, provided by the Electronic Frontier Foundation. Let's Encrypt manages and offers SSL certificates that are otherwise more complicated to get while certbot is a tool that automates registration and identification processes on the server so that a certificate is associated with a DNS entry. The following description assumes that you have SSH access to the server where Manifold is installed and that you are comfortable working on the command line."),(0,o.kt)("h3",{id:"certbot-installation"},"Certbot Installation"),(0,o.kt)("p",null,"First, you download and install certbot. General information about download and installation options specific to the operating system and the server architecture you use are accessible from the landing page of the certbot project. Here, we assume you have installed Manifold on a Ubuntu 18.04 machine. After you logged in into your server via ssh the following chain of commands should leave you with a functional certbot installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get update\n$ sudo apt-get install software-properties-common\n$ sudo add-apt-repository universe\n$ sudo add-apt-repository ppa:certbot/certbot\n$ sudo apt-get update\n$ sudo apt-get install certbot python-certbot-nginx\n")),(0,o.kt)("p",null,"The commands add the certbot project's package repository to your list of repositories and installs the certbot tool from this repository."),(0,o.kt)("p",null,"Alternately, consult ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"current Certbot installation instructions")," on the Certbot website."),(0,o.kt)("h3",{id:"provision-a-cerificate"},"Provision a Cerificate"),(0,o.kt)("p",null,"Certbot offers a number of ways to generate and install an SSL certificate. Since Manifold does not use the nginx packages from the distribution's package repository and also comes with its own configuration and installation paths it is best to refrain from letting certbot try to modify the server configuration itself. A successful and easy workflow is to let certbot use its own provisional server in order to only register and download the certificates. References to these certificates as well as server configuration can then be achieved manually by modifying Manifold's configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/manifold/manifold.rb"),")."),(0,o.kt)("p",null,"In case Manifold is already running on your server you have to shut it down via ",(0,o.kt)("inlineCode",{parentName:"p"},"manifold-ctl stop"),". When all of the services have stoped ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo letsencrypt certonly --standalone -d YOURDOMAIN")," starts the registration and identification process. In the end you should have a certificate and the associated files stored at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/letsencrypt/live/YOURDOMAIN/"),". YOURDOMAIN has to be replaced with the full name of the domain where Manifold is installed but without the protocol part (http(s)), this includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"www")," part of the URL in case it is part of the URL under which your installation of Manifold can be reached."),(0,o.kt)("h3",{id:"firewall-configuration"},"Firewall Configuration"),(0,o.kt)("p",null,"In case you use a firewall on your server - and you definitely should use one - you now need to allow connections via the SSL port. Using the standard firewall on Linux ",(0,o.kt)("inlineCode",{parentName:"p"},"ufw")," this can be achieved via ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo ufw allow https"),". Afterwards the firewall needs to be restarted by writing ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo ufw restart"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please be aware that SSL-certificates aquired via Let's Encrypt are only valid for 3 month. Afterwards you will have to acquire a new certificate. This can be achieved by using certbot again, more precisely by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo certbot renew"),". This process can also be automated with a cronjob that runs the command in defined intervals."))),(0,o.kt)("h2",{id:"ssl-with-docker-images"},"SSL with Docker Images"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This section is still a work in progress. Check back soon for instructions on configuring SSL with our Docker images."))))}d.isMDXComponent=!0}}]);