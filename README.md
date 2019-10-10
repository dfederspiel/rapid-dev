# RapidDev UI (NodeJS)

## Modernization and Component Pipeline

This code contains a collection of dev tools and underlying processes that allows for quick feedback development of UI components.

Using browsersync, css streaming, watch, and build processes, any change made to the code will be automatically built on save (assuming the file is targeted in the watch process) and refreshed in the browser automatically.

It also solves issues of portability, separation of concerns, and contextual grouping of concepts by focusing on the isolation of functionality such that individual pieces may be easily extracted, extrapolated, and shared.

More succinctly, it is good.

## Quickstart

This is a node and express app and will require node to be installed in order to take advantage of all the features of the code.

First, install [NodeJS](https://nodejs.org/en/)  

Once node is installed, install the Gulp CLI with the following:

`npm install -g gulp-cli`

Run `npm install` in the root of this app using your CLI of choice.  (If you're using the recommended VS Code, Ctrl + ~ will open terminal for you.)

Once that's finished, run this command to build the code and host it locally:

`gulp`

There are several other tasks defined in gulpfile.babel.js - they can be run via command line

## Commands

`npm run start` - startup script for hosting the site on a node server

`npm run unit` - generates bundled assets that are to be used in production. (individual js/css/maps)  Configuration is found in webpack/prod.config.js, and production assets can be found in the /build/ folder.

`npm run test` - starts up the jest testing environment and watch to continually run tests as you code.

* [jest](https://facebook.github.io/jest/) - jasmine testing with JSX support
* [json-server](https://github.com/typicode/json-server) - mock service layer for authoring UI components
* [faker](https://github.com/Marak/Faker.js) - data generator for PUG and JSONServer

## Codebase

Here's a breakdown of where things are:

```filesystem
dist                - production bundle output directory
                      (automatically generated)
lib                 - contains template dependencies used for bundling and distribution
src                 - all the working code
-- components       - react components
-- data             - json-server data generator
-- img              - image assets
-- js               - core javascript
-- markup           - pug markup and mixins for static html
-- pages            - staging area for components
-- styles           - SASS styles
test                - auto-generated for coverage tests
package.json
```

## Resources

Good material to read up on

* [React](https://reactjs.org/)
* [Jest](https://facebook.github.io/jest/)
* [Babel](https://babeljs.io/learn-es2015/)
