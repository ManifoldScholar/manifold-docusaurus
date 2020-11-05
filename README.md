# Manifold Documentation


This is a change.


### Background

Prior to 2020, the Manifold team used Jekyll to publish platform documentation. In late 2020, the team decided to transition all documentation to Docusaurus.

### Installation

To work with the documentation, you'll need to get [a recent version of Node](https://nodejs.org/en/download/) installed. You'll also need to [install the Yarn package manager](https://classic.yarnpkg.com/en/docs/install#mac-stable).

Make sure node dependencies are present by running the following command from the root of the repository.

```
$ yarn install
```

### Local Development

#### Starting Docusaurus

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

