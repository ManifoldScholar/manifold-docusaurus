# Development image for the Docusaurus site.
# Node version tracks .node-version; Yarn 4 is delegated to via yarnPath
# (.yarn/releases), which the image's bundled Yarn 1.22 respects.
FROM node:24.15.0-alpine

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/releases ./.yarn/releases

RUN yarn install

COPY . .

EXPOSE 3000

# --host 0.0.0.0 so the dev server is reachable from outside the container.
CMD ["yarn", "start", "--host", "0.0.0.0"]
