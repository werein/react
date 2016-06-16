# React

[![Build Status](https://travis-ci.org/werein/react.svg)](https://travis-ci.org/werein/react) [![Code Climate](https://codeclimate.com/github/werein/react/badges/gpa.svg)](https://codeclimate.com/github/werein/react)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Start a new application easily with all necessary tools

* React
* Redux
* Webpack
* Babel 6
* Redux Router
* Redux DevTools
* Eslint
* Enzyme powered by karma w Mocha & Chai
* Express

## Installation

```
git clone https://github.com/werein/react.git
```

## Production

Current production size is 196kb and 54.6kb gziped.

## Desktop version

This stack is pre-backed to be develop a desktop application.

  * Install electron `npm i electron-prebuilt --save-dev`
  * Run dev server `npm start`
  * Run desktop application `npm run desktop`

The setup is completely the same, only difference is that it is not running in browser, but as desktop application.

## Deployment

### Surge.sh

___Prefered way___

* `npm i -g surge`
* `npm run surge`


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
