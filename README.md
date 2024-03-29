# Rapid Dev Static Site Generator
![build status](https://github.com/dfederspiel/rapid-dev/actions/workflows/main.yml/badge.svg)  

This code contains a collection of dev tools and underlying processes that allow for quick prototyping of UI components.

Using browsersync, css streaming, watch, and other build processes, any change made to the code will be automatically built on save (assuming the file is targeted in the watch process) and refreshed in the browser automatically.

## Quickstart

Run `npm install` in the project root. (If you're using VS Code, `Ctrl + ~` will open a terminal for you)

Then, `npm start` to start the dev environment.

Optionally install gulp with `npm install -g gulp-cli`. There are several tasks defined in `gulpfile.babel.js` 
that can be run via command line after installing `gulp-cli` globally.  

For general use, you shouldn't need to run these directly.
```
gulp data - generate a new dataset
gulp watch - start gulp in watch mode
gulp build - build production assets
gulp default - what you get when you just run gulp
gulp serve - starts express with the output of gulp build
```

## NPM Commands

`npm start` - startup script for hosting the site on a node server  
`npm test` - starts up the jest testing environment and watch to continually run tests as you code  
`npm test:snapshots` - runs puppeteer for image based snapshot tests. 

## Example Implementations  

[Structure: Marketing App](https://github.com/dfederspiel/rapid-dev-demo-structure)  
![build status](https://github.com/dfederspiel/rapid-dev-demo-structure/actions/workflows/main.yml/badge.svg)  

[Riegels: Small Business App](https://github.com/dfederspiel/rapid-dev-demo-riegels)  
![build status](https://github.com/dfederspiel/rapid-dev-demo-riegels/actions/workflows/main.yml/badge.svg)  

[Ahoya! 🏴‍☠️: React Variant](https://github.com/dfederspiel/rapid-dev-demo-react)  
![build status](https://github.com/dfederspiel/rapid-dev-demo-react/actions/workflows/main.yml/badge.svg) 

## Codebase

Here's a breakdown of where things are:

```
dist                - production bundle output directory
                      (automatically generated by gulp)
lib                 - contains template dependencies and mixins
src                 - all the working code
-- data             - json-server data generator
-- img              - image assets
-- js               - application javascript
-- markup           - pug markup for static html
-- styles           - SCSS styles
```

## Technologies
* [pug](https://pugjs.org/api/getting-started.html)
* [jest](https://facebook.github.io/jest/)
* [babel](https://babeljs.io/learn-es2015/)
* [browserify](https://browserify.org/)
* [gulp](https://gulpjs.com/)
* [json-server](https://github.com/typicode/json-server) - mock service layer for authoring UI components  
* [faker](https://github.com/Marak/Faker.js) - data generator for Pug and JSONServer  
