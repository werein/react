# React

[![Build Status](https://travis-ci.org/werein/react.svg)](https://travis-ci.org/werein/react)[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/werein/react?branch=master&svg=true)](https://ci.appveyor.com/project/jirikolarik/react) [![Code Climate](https://codeclimate.com/github/werein/react/badges/gpa.svg)](https://codeclimate.com/github/werein/react)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Start a new application easily with all necessary tools

* React
* Redux
* Webpack
* Babel 6
* CSS modules
* Redux Router
* Redux DevTools
* Eslint
* Enzyme powered by karma w Mocha & Chai
* Express

And optional (just install missing dependencies):

* Sass/SCSS - `npm i node-sass sass-loader --save`
* Surge - `npm i surge -g`

## Installation

```
git clone https://github.com/werein/react.git
```

## Production

Current production size is 196kb and 54.6kb gziped.

## Deployment

### Surge.sh ___Prefered way___

Simple, single-command web publishing. Publish HTML, CSS, and JS for free, without leaving the command line.

  * Don't forge to install Surge `npm i surge -g`
  * Run deployment command - `npm run surge`


### Heroku

Heroku works out of the box, just use "deploy to heroku" button


### Tools
This project works with ReduxDevtool extension for chrome. [Read more](https://github.com/zalmoxisus/redux-devtools-extension)

## Keep it up to date

Track this repo

```
git remote add upstream https://github.com/werein/react.git
```

Rebase on the latest version

```
git fetch upstream
git rebase upstream/master
```
