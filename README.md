# Manifold Documentation

## Background

Prior to 2020, the Manifold team used Jekyll to publish platform documentation. In late 2020, the team decided to transition all documentation to Docusaurus.

## Installation

To work with the documentation, you'll need to get [a recent version of Node](https://nodejs.org/en/download/) installed. You'll also need to [install the Yarn package manager](https://classic.yarnpkg.com/en/docs/install#mac-stable).

Make sure node dependencies are present by running the following command from the root of the repository.

```
$ yarn install
```

## Local Development

### Starting Docusaurus

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Basic CLI Workflow

1. Check your status relative to master: `$ git status`.
2. Create a new branch, using your initials as a prefix followed by a slash and the issue number for the section of documentation you're addressing: `git checkout -b xx/99`.
3. Stage the file or files you’ve modified: `git add filename.md`.
4. Commit your changes with a brief but meaningful commit message: `git commit -m "Commit message"`.
5. Push your commit from your local the remote repo using the name of the branch you created: `git push origin xx/99`.
6. Navigate your browser to the repo and create a pull request for the branch you just pushed: https://github.com/ManifoldScholar/manifold-docusaurus.
7. Update your local environment with these commands:
	- `git checkout master`
	- *If* you made changes to other files you didn’t include with your commit, next run `git stash`. This will stash your changes in a safe space, which you can apply in a moment.
	- `git fetch && git rebase origin/master`
	- *If* you stashed files, you can now reapply those adjustments by running `git stash apply`.
8. Return to step 1 and begin work on another section.

### Other Common CLI Commands

To switch branches without creating a new one, simply omit the `-b` flag from the checkout command above: `git checkout xx/99`.

## Best Practice

### Docusaurus Features

For common formatting options that aren’t covered below, see the Docusaurus documentation for suggestions and guidance: https://v2.docusaurus.io/docs/markdown-features/.

### Linking

When linking from one section of documentation to another, use relative links that point to the target Markdown source files.

```
../../folder-name/filename.md
```

### Style

- Capitalize Manifold-specific terms like *Projects,* *Texts*, *Resources,* *Resource Collections*, *Manifold Reader* when used in the context of the application.
- Use quotation marks around terms and phrases when used to describe input or values for fields in the backend.
- Format field names as code.

> Adjust the Text record’s `Title` field to read “Manifold Rocks!”

### Images

We are not yet ready to insert images, but we can include placeholders for visual content we want to include, formatted as

```
<placeholder
  description=""
  caption=""
  alt=""
/>
```

When we are ready to insert images, we will them using JSX instead of Markdown formatting:

```jsx
<img src={require('./assets/docusaurus-asset-example-banner.png').default} />
```