---
slug: "thisweekinmanifoldprojectdetailimprovements"
title: "This Week in Manifold: Project Detail Improvements"
image: ""
image_alt: ""
---



<!--truncate-->

Welcome to a new regular feature on the Building Manifold blog: "This Week in Manifold." As we move toward a beta version of Manifold (scheduled for March, 2017), I'll be releasing a Manifold build to our staging server every Friday afternoon. Each release will be accompanied by a blog post explaining what the development team accomplished in the sprint leading up to the release. This post comes a few days late. When the [Internet broke last week](http://www.nytimes.com/2016/10/22/business/internet-problems-attack.html?_r=0), our ability to release builds from Github was impacted, which delayed things a bit. I expect we'll be back on schedule this week, with our next build going out on Friday, October 28. _Nota Bene_: Our staging instance of Manifold is currently on a private server. However, we'll be opening it up to the public in a few&nbsp;weeks, as soon as we're able to load an initial set of texts with open access rights onto the platform. Once that happens, it will be possible for readers of this blog to check out our weekly builds for themselves. Our last development sprint focused on tightening up existing code, mainly around the project detail view. Notable changes included the following: **Refactoring**

- Refactored login overlay CSS for improved reusability
- Refactored the authentication [reducer](http://redux.js.org/docs/basics/Reducers.html)
- Significantly reorganized client frontend components for easier&nbsp;readability and reusability
**Features and Improvements**
- Exposed "published" boolean attribute on Texts in the API
- Stubbed markup and styles for the resource collection detail component
- Stubbed markup and styles for the&nbsp;collection&nbsp;list&nbsp;component
- Stubbed markup and styles for the resource&nbsp;list&nbsp;component
- Improved client application exception handling
- Upgraded&nbsp;[React](https://facebook.github.io/react/) to [15.4.0-RC3](https://github.com/facebook/react/tree/v15.4.0-rc.3)
- Implemented project importer that imports projects, texts, and resources from json manifest
- Expanded project API to expose all data&nbsp;shown&nbsp;in the comps
- Adjusted component to show project creator names below&nbsp;project thumbnails
- Adjusted component to show actual project dates below project thumbnails
- Stubbed markup and styles for project events&nbsp;(on project detail, and stand-alone), aka activity
- Added mobile styles for event lists
- Added metadata [JSONB field type](https://www.postgresql.org/docs/9.4/static/datatype-json.html) to projects and expose via API
- Implemented&nbsp;actual project metadata in the project detail component
**Tooling and Libraries**
- Switched Manifold client&nbsp;testing framework to [Jest](https://facebook.github.io/jest/)
- Updated all client&nbsp;NPM modules
- [DRY'd](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) up client application [Webpack](https://webpack.github.io/) configuration
- Reorganized and improved build and server scripts for client application
- Improved API application [Puma](http://puma.io/) configuration
- Switched client from [NPM](https://www.npmjs.com/) to [Yarn](https://yarnpkg.com/) for deterministic dependency resolution (and speed)
- Removed&nbsp;[redux-devtools component](https://github.com/gaearon/redux-devtools); replace with [similar Chrome extension](http://zalmoxisus.github.io/redux-devtools-extension/)
- Added&nbsp;[moment](http://momentjs.com/) module for handling dates and times
- Updated global and API Rubies&nbsp;to version 2.3.1
**Bug Fixes**
- Corrected login overlay view state
- Removed randomness from stubbed resource components (breaks universal&nbsp;rendering)
- Added code to prevent client application from requesting "page" entities on every route change
 In addition to these changes, the Manifold team also touched base last week during our recurring (bi-monthly) meeting. The group discussed text and project metadata requirements, the overall project roadmap, the agenda for our in-person Portland meeting in mid-November, among other things. Joining that call for the first time was [JoJo Karlin](https://twitter.com/jojokarlin), a Doctoral student in English at the CUNY Graduate Center who is working with [Matt Gold](https://twitter.com/mkgold) on this project. You'll be hearing more from JoJo in the coming weeks as she works to share Manifold updates and progress via this blog. This week's development sprint will be focused on a few main goals. [Naomi](https://twitter.com/naomiyaki) will&nbsp;be finishing up markup and UX for the resource collection slideshow.&nbsp;[Zach](https://twitter.com/zdavis) will be focused on the initial modeling of project resources and project resource collections in the API, and wiring that data up to the client. He'll also be improving the project importer—delivered in last week's release—to pull in sample resources for our demonstration projects and texts. All work and no play makes for dull developers, and so I will leave you with a screenshot of Manifold's new error&nbsp;screen (only visible in development mode), inspired by the first computer Zach ever owned, the illustrious [Commodore 64](https://en.wikipedia.org/wiki/Commodore_64). [![screen-shot-2016-10-24-at-6-33-08-am](http://manifold.umn.edu/app/uploads/2016/10/Screen-Shot-2016-10-24-at-6.33.08-AM-1024x766.png)](http://manifold.umn.edu/app/uploads/2016/10/Screen-Shot-2016-10-24-at-6.33.08-AM.png) &nbsp;

