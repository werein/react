# React

[![Build Status](https://travis-ci.org/werein/react.svg)](https://travis-ci.org/werein/react)[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/werein/react?branch=master&svg=true)](https://ci.appveyor.com/project/jirikolarik/react) [![Code Climate](https://codeclimate.com/github/werein/react/badges/gpa.svg)](https://codeclimate.com/github/werein/react)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Extremely simple boilerplate, __easiest you can find__, for React application including all the necessary tool

* React 16
* Redux
* Webpack 3
* Babel 6
* CSS modules
* React Router
* Connected Router (react router + redux)
* Redux DevTools
* Eslint
* Jest & Enzyme
* Express

And optional (just install missing dependencies):

* Sass/SCSS - `npm i node-sass sass-loader --save`
* Surge - `npm i surge -g`

__Also take a look [here](http://github.com/werein/react-native) for also extremely simple React Native boilerplate__

## Flow

There is a version with `flow` enabled, since everyone is using it these days and quite a lot of libraries has direct support, I've also created a branch where `flow` is supported. This setup allows you for example to see an action and theirs data in correctly in reducers switch statement, doesn't let you to dispatch and undefined action or to see state in a `mapStateToProp`. Please thumbs up or don't in a PR for merge: https://github.com/werein/react/pull/52

## Installation

All you need to do is clone this repository
```
git clone https://github.com/werein/react.git
```

### Keep it up to date

Track this repo

```
git remote add upstream https://github.com/werein/react.git
```

Get the latest version and apply onto your stack

```
git fetch upstream
git merge upstream/master
```

## Running
Application has very few dependencies, so it’s most probably very easy to understand when you scan through the code, but there is at least few steps you should know

### Start front-end React application
Application is divided into two parts. One is pure React front-end, powered by `webpack-dev-server` in development mode.

To start this application run command below and open your app on `http://localhost:8080`

```javascript
npm start
```

To test your application, run

* `npm run test` - single run - good for CI or precook
* `npm run test:watch` - watches for changes, good for development

If you don’t plan to connect to your own backend, you should be just fine

### Start Express back-end
Second part of this application is back end written in Express. This is a place, where you provide API for front-end or/and server yours production application.

To start backend server, run npm command bellow and open `http://localhost:8181`

```javascript
npm run server
```
This is also watching for changes, so when you update some code on backend, you don’t have to restart the server, it does that automatically

__Every call which goes to `/api` is proxied to this backend__ so for example when you make a request to `/api/locales` on front-end, it will go to this express backend server using the same path

## Production

Running `npm run build` will create production ready application into your `dist` folder. All you need to do is make this `dist` folder publicly available. You can use `surge.sh` as described bellow to do so.

Included Express server is preconfigured to serve `/dist` folder. All you need to do is run `npm run server` on your production server. The same is happening automatically, when you deploy to Heroku (It executes this command from `Procfile`

This is also good to run on your local computer to ensure, that your application is running as it should.

_Current production size is 205kb and 56.8kb gziped_

## Deployment

### Surge.sh

Simple, single-command web publishing. Publish HTML, CSS, and JS for free, without leaving the command line.

  * Don't forge to install Surge `npm i surge -g`
  * Run deployment command - `npm run surge`


### Heroku

Heroku works out of the box, just use "deploy to heroku" button


## Tools
This project works with ReduxDevtool extension for chrome. [Read more](https://github.com/zalmoxisus/redux-devtools-extension)

## License
MIT
