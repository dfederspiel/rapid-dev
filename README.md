# Rapid Dev UI (NodeJS)
## PUG based static site generator

This code contains a collection of dev tools and underlying processes that allows for quick feedback development of UI components.

Using browsersync, css streaming, watch, and build processes, any change made to the code will be automatically built on save (assuming the file is targeted in the watch process) and refreshed in the browser automatically.

It also solves issues of portability, separation of concerns, and contextual grouping of concepts by focusing on the isolation of functionality such that individual pieces may be easily extracted, extrapolated, and shared.

More succinctly, it is good.

## Quickstart

This is a node and express app and will require node to be installed in order to take advantage of all the features of the code.

First, install [NodeJS](https://nodejs.org/en/)  

Once node is installed, install the Gulp CLI with the following:

`npm install -g gulp-cli`

Run `npm install` in the root of this app using your CLI of choice.  (If you're using VS Code, `Ctrl + ~` will open aa terminal for you.)

Once that's finished, run `npm start` to start the dev environment

There are several tasks defined in gulpfile.babel.js - they can be run via command line

## Commands

`npm start` - startup script for hosting the site on a node server  
`npm test` - starts up the jest testing environment and watch to continually run tests as you code  
`npm test:snapshots` - runs puppeteer for image based snapshot tests  

* [jest](https://facebook.github.io/jest/) - jasmine testing with JSX support
* [json-server](https://github.com/typicode/json-server) - mock service layer for authoring UI components
* [faker](https://github.com/Marak/Faker.js) - data generator for PUG and JSONServer

## Codebase

Here's a breakdown of where things are:

```
dist                - production bundle output directory
                      (automatically generated with)
lib                 - contains template dependencies used for bundling and 
src                 - all the working code
-- data             - json-server data generator
-- img              - image assets
-- js               - core javascript
-- markup           - pug markup and mixins for static html
-- pages            - staging area for components
-- styles           - SCSS styles
```

## Resources

Good material to read up on

* [React](https://reactjs.org/)
* [Jest](https://facebook.github.io/jest/)
* [Babel](https://babeljs.io/learn-es2015/)
