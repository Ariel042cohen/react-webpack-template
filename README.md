# ES7 React boilerplate using Webpack 3

[![T ravis](https://api.travis-ci.org/Ariel042cohen/react-webpack-template.svg?branch=master)](https://github.com/Ariel042cohen/react-webpack-template) [![Appveyor](https://ci.appveyor.com/api/projects/status/buxfftx347t1q7r7/branch/master?svg=true)](http://appveyor.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Simple and optimized React boilerplate. It includes: 

- [x] React 16.2.0
- [x] ECMAScript 7 and JSX support
- [ ] React Router v4
- [x] Component testing using [Enzyme](https://github.com/airbnb/enzyme) and [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
- [x] Code Coverage
- [x] Latest Webpack (v.3.9.1) and Webpack Dev Server (v.2.9.5) with Scope Hoisting enabled
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] ES7 linting with continuous linting on file change
- [ ] SASS support
- [x] Separate CSS stylesheets generation
- [x] Automatic HTML generation
- [x] Production Config
- [x] Bundel Spliiting
- [x] Dynamic Imports
- [x] Custom Babel Env and Babel Polyfill with React Support
- [x] ESLint with React Lint Recommendations
- [x] Export Separate Vendor Files
- [x] NPM Scrips
- [x] WebpackDevServer
- [ ] Redux

## Starting the dev server

Make sure you have the latest Stable or LTS version of Node.js installed.

1. `git clone https://github.com/Ariel042cohen/react-webpack-template.git`
2. Run `npm install` or `yarn install`
3. Start the dev server using `npm start`
3. Open [http://localhost:3000](http://localhost:3000)

## Available Commands

- `npm start` - start the dev server
- `npm run build` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode

## Production code

Run `npm run build`. The production-ready code will be located under `dist` folder.

## Licence

_react-webpack-template_ is available under MIT.
