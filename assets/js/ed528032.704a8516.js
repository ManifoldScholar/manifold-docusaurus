(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[3319],{7038:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},frontMatter:function(){return w},metadata:function(){return M},toc:function(){return T}});var a=n(4034),o=n(9973),l=n(7294),i=n(3905),s=n(1395),r=n(8215),d=n(7361),c=n.n(d),u=n(9782),m=n(1100),p=u.default.customFields.data;function h(e,t){return e&&t?p.releases[e][t]:null}function k(e){if(!e)return null;var t=p.releases[e];return t?g(Object.keys(t)):null}function f(e){if(!e)return null;var t=p.releases[e];return console.log(t),t?g(Object.keys(t).filter((function(e){return!e.includes("-alpha")&&!e.includes("-beta")&&!e.includes("-rc")}))):null}function g(e){return function(e){return m(e)}(e).slice(-1)[0]||null}function v(e){return e?e.startsWith("v")?e:"v"+e:null}function b(e,t){return"path"===e?c()(p,t):"highestVersionFor"===e?v(k(t)):"highestStableVersionFor"===e?v(f(t)):"installUrlFor"===e?h(t,f(t)).url:"prereleaseStatement"===e?f(t)==k(t)?null:l.createElement("span",null,"There is also currently a pre-release version of Manifold,"," ",l.createElement("strong",null,k(t)),","," ","which we encourage you to test."," "):"basenameFor"===e?h(t,f(t)).basename:null}function N(e){return b(e.command,e.argument)}var y=n(1756),w={id:"installation",title:"Installation",sidebar_label:"Installation"},M={unversionedId:"administering/installation",id:"administering/installation",isDocsHomePage:!1,title:"Installation",description:"Install Strategies",source:"@site/docs/administering/installation.md",sourceDirName:"administering",slug:"/administering/installation",permalink:"/manifold-docusaurus/docs/administering/installation",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/installation.md",version:"current",sidebar_label:"Installation",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Hosting",permalink:"/manifold-docusaurus/docs/administering/hosting"},next:{title:"Upgrading",permalink:"/manifold-docusaurus/docs/administering/upgrading"}},T=[{value:"Install Strategies",id:"install-strategies",children:[]},{value:"Install Instructions",id:"install-instructions",children:[{value:"Package Install",id:"package-install",children:[]},{value:"Docker Install",id:"docker-install",children:[]},{value:"Source Install",id:"source-install",children:[]}]}],I={toc:T};function x(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install-strategies"},"Install Strategies"),(0,i.kt)("p",null,"We offer three installation strategies for Manifold:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install from OS ",(0,i.kt)("strong",{parentName:"li"},"package")),(0,i.kt)("li",{parentName:"ol"},"Install with ",(0,i.kt)("strong",{parentName:"li"},"Docker")," images"),(0,i.kt)("li",{parentName:"ol"},"Install from ",(0,i.kt)("strong",{parentName:"li"},"source"))),(0,i.kt)("p",null,"For package installations, we distribute packages for Ubuntu (18.x and 20.x) and Redhat/CentOS (el7 and el8). The package will install and configure every service needed to run Manifold. You will need root access to the host in order to install Manifold from these packages. This is the fastest, easiest way to install Manifold, but it also is the most intrusive and gives you the least control over the installation. That said, for users who are not familiar with the Manifold technology stack (Rails, Node, ElasticSearch, PostgreSQL, Redis, and Nginx), package installation will be the fastest and simplest approach."),(0,i.kt)("p",null,"When Manifold is installed using Docker, each service runs in its own Docker container and the services are coordinated using Docker compose."),(0,i.kt)("p",null,"We're still working on documentation for installing Manifold from source. For now, this is not an officially supported installation method, but we hope to provide guidance soon."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manifold is a new piece of software, and we're working hard to refine and improve the installation process. If you run into problems, please don't get frustrated. Let us know in Slack (",(0,i.kt)("a",{parentName:"p",href:"https://manifold-slackin.herokuapp.com/"},"join here"),") or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ManifoldScholar/manifold/issues/new?template=bugs.md"},"report an issue"),". It's very important to us that Manifold be easy to install, and we appreciate your help as we improve this process."))),(0,i.kt)("h2",{id:"install-instructions"},"Install Instructions"),(0,i.kt)("p",null,"Select the strategy that makes sense for your organization to see the corresponding instructions."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The current stable Manifold version is ",(0,i.kt)("strong",null,(0,i.kt)(N,{command:"highestStableVersionFor",argument:"ubuntu22",mdxType:"Data"})),". ",(0,i.kt)(N,{command:"prereleaseStatement",argument:"ubuntu22",mdxType:"Data"}),"All releases can be downloaded from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/administering/reference/downloads"},"downloads page"),"."))),(0,i.kt)("h3",{id:"package-install"},"Package Install"),(0,i.kt)("p",null,"The most recent version of Manifold is ",(0,i.kt)(N,{command:"highestStableVersionFor",argument:"ubuntu22",mdxType:"Data"}),"."),(0,i.kt)("p",null,"Support for Ubuntu16 was discontinued with the release of Manifold v6. Support for Ubuntu18 was discontinued with the release of Manifold v8."),(0,i.kt)("h4",{id:"1-download-the-package"},"1. Download the Package"),(0,i.kt)("p",null,"Shell into the server as root and download the most recent package."),(0,i.kt)(s.Z,{groupId:"install-type",defaultValue:"ubuntu18",values:[{label:"Ubuntu22",value:"ubuntu22"},{label:"Ubuntu20",value:"ubuntu20"},{label:"CentOS 8",value:"centos8"},{label:"CentOS 7",value:"centos7"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ubuntu22",mdxType:"TabItem"},(0,i.kt)(y.Z,{className:"shell",mdxType:"CodeBlock"},("\ncd ~\ncurl -O "+b("installUrlFor","ubuntu22")+"\n    ").trim())),(0,i.kt)(r.Z,{value:"ubuntu20",mdxType:"TabItem"},(0,i.kt)(y.Z,{className:"shell",mdxType:"CodeBlock"},("\ncd ~\ncurl -O "+b("installUrlFor","ubuntu20")+"\n    ").trim())),(0,i.kt)(r.Z,{value:"centos8",mdxType:"TabItem"},(0,i.kt)(y.Z,{className:"shell",mdxType:"CodeBlock"},("\ncd ~\ncurl -O "+b("installUrlFor","centos8")+"\n    ").trim())),(0,i.kt)(r.Z,{value:"centos7",mdxType:"TabItem"},(0,i.kt)(y.Z,{className:"shell",mdxType:"CodeBlock"},("\ncd ~\ncurl -O "+b("installUrlFor","centos7")+"\n    ").trim()))),(0,i.kt)("h4",{id:"2-install-the-package"},"2. Install the Package"),(0,i.kt)(s.Z,{groupId:"install-type",defaultValue:"ubuntu18",values:[{label:"Ubuntu22",value:"ubuntu22"},{label:"Ubuntu20",value:"ubuntu20"},{label:"CentOS 8",value:"centos8"},{label:"CentOS 7",value:"centos7"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"ubuntu22",mdxType:"TabItem"},(0,i.kt)(y.Z,{className:"shell",mdxType:"CodeBlock"},("\ncd ~\ndpkg -i "+b("basenameFor","ubuntu22")+"\n    ").trim())),(0,i.kt)(r.Z,{value:"ubuntu20",mdxType:"TabItem"},(0,i.kt)(y.Z,{className:"shell",mdxType:"CodeBlock"},("\ncd ~\ndpkg -i "+b("basenameFor","ubuntu20")+"\n    ").trim())),(0,i.kt)(r.Z,{value:"centos8",mdxType:"TabItem"},(0,i.kt)(y.Z,{className:"shell",mdxType:"CodeBlock"},("\ncd ~\nrpm -ivh "+b("basenameFor","centos8")+"\n    ").trim())),(0,i.kt)(r.Z,{value:"centos7",mdxType:"TabItem"},(0,i.kt)(y.Z,{className:"shell",mdxType:"CodeBlock"},("\ncd ~\nrpm -ivh "+b("basenameFor","centos7")+"\n    ").trim()))),(0,i.kt)("h4",{id:"3-apply-minimal-configuration"},"3. Apply Minimal Configuration"),(0,i.kt)("p",null,"The package installer creates a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/manifold/manifold.rb"),". Use this file to configure and manage the various services that Manifold is composed of. After changing this file, you\u2019ll need to run sudo manifold-ctl reconfigure from the command line so that Manifold picks up the changes and regenerates various configuration files based on the new settings."),(0,i.kt)("p",null,"For now, let\u2019s just make sure Manifold is on the right domain. Open ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/manifold/manifold.rb")," in your preferred text editor (nano, vi, etc.) and look for the external_url setting near the top of the file. Set this to the fully qualified domain name of your Manifold installation, then reconfigure Manifold with the following command. You may be prompted to accept the license. You can scroll through the licenses by pressing space, or \u201cq\u201d to exit the license view. You will need to accept the licenses before proceeding with the installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"/usr/bin/manifold-ctl reconfigure\n/usr/bin/manifold-ctl restart\n")),(0,i.kt)("p",null,"Once this process is complete and you've restarted Manifold, visit the fully qualified domain name in your browser. You should see an empty Manifold home page."),(0,i.kt)("h4",{id:"4-access-the-backend"},"4. Access the Backend"),(0,i.kt)("p",null,"All content stored in Manifold\u2014texts, projects, authors, resources, users, etc\u2014is managed through Manifold\u2019s backend interface. The backend is available at the ",(0,i.kt)("inlineCode",{parentName:"p"},"/backend")," path. For example, if your domain name was your-manifold-domain.tld, you\u2019d access the backend at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://your-manifold-domain.tld/backend"),"."),(0,i.kt)("p",null,"Before you can login to the backend, you will need to make an administrative user. Manifold exposes Rake commands provided by the API Rails application by way of a ",(0,i.kt)("inlineCode",{parentName:"p"},"manifold-api")," executable located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/manifold-api"),". This executable includes a command for creating an admin user. Call this command as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sudo manifold-api manifold:user:create:admin["you@email.com","password","firstName","lastName"]\n')),(0,i.kt)("p",null,"Substitute your email, password, first and last into the command above. If the command succeed, Manifold will let you know. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'manifold@manifold-deb:/etc/manifold# sudo manifold-api manifold:user:create:admin["john@milton.com","Lycidas","John","Milton"]\n    INFO: A User has been created. Its ID is 9b8c863f-60cd-44aa-ad99-dbb842e51aa2\n')),(0,i.kt)("p",null,"Once you\u2019ve created an admin user, click on the avatar icon in the top right corner of the Manifold frontend to login. After logging in successfully, you will see an \u201cadmin mode\u201d button in the header. Click the admin mode button to access the backend."),(0,i.kt)("h3",{id:"docker-install"},"Docker Install"),(0,i.kt)("p",null,"Starting with version 4.0, we publish Docker images alongside our OS packages.\nThese images are published under the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/manifoldscholarship"},"manifoldscholarship"),"\norganization on hub.docker.com. The Manifold team is happy to accept pull\nrequests and are open to suggestions as to how we can improve our Docker support."),(0,i.kt)("p",null,"The following instructions assume that you've intalled docker and can run both\n",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," from the command line."),(0,i.kt)("p",null,"To begin running Manifold on Docker, clone our docker-compose repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/ManifoldScholar/manifold-docker-compose.git\n")),(0,i.kt)("p",null,"The docker-compose.yml file in this repository includes all the services that\nManifold needs to run. For more complex deployments, feel free to use this files\nas a starting point and modify as needed."),(0,i.kt)("p",null,"Before spinning up the containers, modify environment/manifold.env so that it\ncontains the correct IP or domain name for your server. Unless you're just running\nthese locally, you'll need to replace 127.0.0.1 from the following env vars:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'DOMAIN="127.0.0.1:4000"\nCLIENT_BROWSER_API_URL="http://127.0.0.1:4000"\nCLIENT_BROWSER_API_CABLE_URL="http://127.0.0.1:4000/cable"\n')),(0,i.kt)("p",null,"From within that git repository, create and start Manifold containers:"),(0,i.kt)("div",{style:{marginBottom:"var(--ifm-leading)"}},(0,i.kt)(y.Z,{className:"shell",mdxType:"CodeBlock"},("\nMANIFOLD_TAG="+b("path","manifoldVersion")+" docker-compose up -d\n").trim())),(0,i.kt)("p",null,"Access the site in your browser. Be patient, as it might take a minute for services to start."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"http://127.0.0.1:4000\n")),(0,i.kt)("p",null,"Tail container log output (ctrl + c to stop)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose logs -f\n")),(0,i.kt)("p",null,"Restart Manifold containers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose restart\n")),(0,i.kt)("p",null,"Stop Manifold containers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose stop\n")),(0,i.kt)("p",null,"Stop and remove Manifold containers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose down\n")),(0,i.kt)("p",null,"Access the Rails (Manifold API Backend) console"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker exec -it  manifold-docker-compose_api_rails_1 rails console\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"console")," in the above command with other Manifold rake commands. These\ncommands are the same commands that are available in the Omnibus packages, and\nare ",(0,i.kt)("a",{parentName:"p",href:"/docs/administering/reference/api_rake_tasks"},"documented here")),(0,i.kt)("p",null,"Create an admin user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker exec -it manifold-docker-compose_api_rails_1 \\\nrails manifold:user:create:admin['email@example.com','test123!','First','Last']\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"With some terminal configurations don't forget to escape ",(0,i.kt)("inlineCode",{parentName:"em"},"[")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"]")," like ",(0,i.kt)("inlineCode",{parentName:"em"},"\\["),".")),(0,i.kt)("h3",{id:"source-install"},"Source Install"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is still a work in progress. Check back soon for instructions on installing from source."))))}x.isMDXComponent=!0}}]);