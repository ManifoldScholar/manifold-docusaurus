---
slug: "atechnicalintroductiontomanifold"
title: "A Technical Introduction to Manifold"
---

Hello Manifoldians!

I'm Zach Davis, principle at [Cast Iron Coding](http://castironcoding.com), a web development studio in Portland, Oregon. My team and I are responsible for UX design, visual design, and development of Manifold over the course of the grant, and it is my hope that I'll be able to post regular updates here detailing development and design decisions, challenges, and milestones over the course of the project.

For now, however, I'd like to walk through the technology stack we've settled on, and the reasoning behind some of these choices. If anyone has any questions, please don't hesitate to post a comment!

<!--truncate-->

## Where to find the source code

As you know, one of the requirements of the grant funding this development is that Manifold be released as open source, and our current plan is to release Manifold under the GPLv3. For the time being, Manifold source code is stored in the [ManifoldScholar/manifold Github repository](https://github.com/ManifoldScholar/manifold). If you look at the [ManifoldScholar GitHub organization](https://github.com/ManifoldScholar), you'll see additional repositories for [Manifold-API](https://github.com/ManifoldScholar/manifold-api) and [Manifold-Client](https://github.com/ManifoldScholar/manifold-client). Eventually, we hope to be able to provide the Manifold API as a stand-alone piece of software that can be used to parse, store, and expose ePub and Markdown documents over a RESTful API. In preparation for this, we're using a [git subtree-split strategy](https://medium.com/@porteneuve/mastering-git-subtrees-943d29a798ec#.siwyoulty) to break the Manifold project into separate API and Client packages. These split repositories are updated significantly less frequently than the main Manifold repository. If your goal is to follow our development, for now your best bet will be to just watch the primary repository.

We've already made significant progress on Manifold, although we're still far from an alpha release. We'd love it if you'd show your support for our project by starring our GitHub repo and keeping an eye on development. As we get closer to a stable alpha release in 2016, we'll invite community members to download and install their own instance of Manifold.

## Server-side architecture

Manifold is split into the client application, and the server-side application. For now, these two applications share a repository to simplify development, but they are very distinct and meant to run independently of each other.

The server-side application is built in [Ruby](https://www.ruby-lang.org/en/) and [Rails](http://rubyonrails.org/). Specifically, we're using what is currently edge Rails, and what will soon be [Rails 5](https://blog.engineyard.com/2015/a-look-at-rails-5). The development team thought long and hard about what server-side language to use, which was mainly a debate about the relative merits of using Ruby or Javascript on the server. While we have many years of experience working with PHP, and understand that it is still a popular, easy choice among academic developers, we felt strongly that the advantages of Ruby—strong OOP support, support for more functional styles, cleaner and more consistent syntax, and the maturity of Rails—outweighed the disadvantages of a more complex execution model and smaller (but by no means small) developer community. [Laravel](http://laravel.com/), the current leading PHP framework, for all its notable strengths, lacks the completeness and maturity of Rails and Active Record. Our choice to go with edge rails, rather than stable Rails 4.x, was driven by the fact that our server-side component is [only serving an API](http://edgeguides.rubyonrails.org/api_app.html), and Rails 5 will eventually ship with an api-only flag. This means that many aspects of Rails—the view layer, sprockets, etc—have been removed, making for a more lightweight framework overall. Another strong reason for choosing Rails was the presence of a strong HTML/XML parsing library in [Nokogiri](http://nokogiri.org). Manifold deals heavily (but not exclusively) in EPUBs, which are HTML documents. To pull those documents apart and recreate them in the browser, we need a powerful parsing tool, which we've found in [Nokogiri](http://www.nokogiri.org/).

The server side application exposes a REST style API to be consumed by the client. This API conforms to the style and conventions laid out by Steve Klabnik, Yehuda Katz, Dan Gebhardt, Tyler Kellen, and Ethan Resnick in the [JSON API Specification](http://jsonapi.org/). While it's important that developers expose all the things with APIs, it's challenging when each API follows its own idiosyncratic conventions. One of our goals on this project is to make Manifold as easy as possible to integrate into a presses existing infrastructure and environment, and following an established API specification helps us with that goal. Because the Manifold client application consumed Manifold's public API, integrators can be sure that the API is well tested and reliable.

Authentication against the API will be handled using [JSON Web Tokens](https://tools.ietf.org/html/rfc7519) (JWT). It will also be possible for a user to generate an API token by logging in through an [OAuth](http://oauth.net/) provider such as Twitter or Facebook.

## Client-side architecture

If we made a safe, conservative choice in Rails on the server-side, we've taken more of a leap on the client-side. The Manifold client is a [single page application](https://en.wikipedia.org/wiki/Single-page_application) (SPA) that is built on [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/). Both are relatively new Javascript libraries (or frameworks, depending on how you look at things) that are rapidly gaining mindshare and popularity among front-end developers. For those who are unfamiliar, React is a Javascript library that simplifies the process of creating reusable components. Unlike other popular libraries such as [Angular](https://angularjs.org/) or [Knockout](http://knockoutjs.com/), React does not attempt to solve the problem of two-way data binding. Instead, it is meant to be used with a specific architecture called [Flux](https://facebook.github.io/flux/), which is structured around one-way data flow and immutability. Both React and Redux have a relatively small surface area. Redux APIs are small, and the library as a whole is under 15k.

At Cast Iron, we've worked with many Javascript frameworks, in particular Angular and Backbone. Over time, client-side development has become quite complex, and it's our feeling that while Angular can work well on some projects, it doesn't do enough to reduce that complexity. By restricting the way in which data can flow through the application, and abstracting away the asynchronicity that can make client-side development challenging, we've found Redux and React to be a powerful combination that allows us to iterate quickly without sacrificing quality or maintainability.

There are some challenges that come with developing a single page javascript application. For our purposes, the biggest challenge is to ensure that there is content loaded on the page before the javascript executes. We feel strongly that Manifold needs to be accessible to users with disability, to search engine crawlers, to screen readers, etc, and that we can't count on a javascript environment. For this reason, the Manifold client will be served by a small Node/Express application running on the server. Most of the javascript that executes in the browser is built to be [isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) (now also known as [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.hna9d3dg8)), which means that care has been taken to ensure that it can be executed in a server-side context (node) and in a client-side context (the browser). The practical outcome of this approach is that the server-side component will be able to fully render the HTML before sending the page to the client, which solves the many accessibility and SEO problems.

The advantages to the SPA approach are, well, manifold. The application will feel very fast, and we'll be vastly reducing the amount of data that's sent over the network. Complex UI elements, like the annotation pieces, will be have a much more stable, testable framework backing them. There will be more room for reusable components, and the various state-changes that can occur in the client-side application will be well tested.

While we're diving in head-first on React + Redux, we are not, for now, following the current trend of doing only inline-CSS. For the time being, we'll be using the SASS preprocessor for all styles.

At the language level, we're relying heavily on ES6 and upcoming ES7 features. We're using [Babel](https://babeljs.io/) to transpile ES6+ code down to ES5  so that it will run in IE9+, Firefox, and Safari. By using edge Javascript language features, our hope is that to some degree we will future proof Manifold code. For now, we're limiting ourselves to [ES6+ features that are at stage 1 or greater](https://github.com/tc39/ecma262/blob/master/README.md), and acknowledge that there is some risk even with stage 1.

We rely heavily on [NPM](https://www.npmjs.com/) for package management, and [Webpack](https://webpack.github.io/) for transpiling assets during development, and for building assets for production. At Cast Iron, we've used Grunt and Gulp on other projects, but it looks to us like the React community is gravitating toward Webpack, and for good reasons. On Manifold, it's being used for automatically linting our code, for generating icon fonts from SVG icons, for transpiling ES6+ to ES5, and Sass to CSS.

## Testing

Tests are important. They build confidence and help us to refactor without regressions. While we don't always follow test-driven-development practices, we do feel that it's important to have a robust test suite in place. On the API side, we're using [rspec](http://rspec.info/) for tests. On the client-side we will be using [Mocha](https://mochajs.org/).

## Server infrastructure and continuous integration

DevOps and infrastructure automation are essential to our workflow at Cast Iron. We use [Boxen](https://github.com/boxen/our-boxen/#our-boxen) to setup development instances of projects, and we use [Puppet](https://puppetlabs.com/) to deploy applications to staging and production environments. Our manifests for deploying Manifold are still in progress, but they're close. Soon, I hope to have a staging environment that's updated regularly via [Jenkins](https://jenkins-ci.org/), our continuous integration server. Soon, we'll also have Travis build notifications in place on the Github repository.

To run Manifold, you'll need to have the following setup on a server:

- Nginx for serving the Ruby app and the Node app
- Puma for serving Manifold API (although you could use Unicorn or another app server)
- Ruby 2.2.x
- Postgres for the API database
- A recent version of Node
- Eventually, I expect you'll need Elastic Search for the search component

We'll be providing instructions on how to set this up, as well as sample config files. Eventually, I hope to provide apt-get packages for Ubuntu as well. Once things are a bit more stable, we'll regularly release docker containers that you can use to take Manifold for a spin.

## In Closing

Hopefully this gives you a better sense of what we're using to build Manifold, and why. I'd love to have a conversation about our choices, so please don't hesitate to leave feedback in the comments. In the coming weeks, I'm going to try to share some early artifacts from the UX and visual design process, to give you a better sense of what Manifold will look like and what it will be capable of.
