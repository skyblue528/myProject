# Julia's Project

An open source web page application that I am developing for fun. Hopefully others can
find something interesting here.


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ npm install
$ bower install
$ npm start
```

## Running as developer

If you plan to do some development project and run tests, you need to install devDependencies:

```sh
$ npm install --dev
$ npm install selenium-standalone@latest -g
$ selenium-standalone install
```

The app should now be running on [localhost:5000](http://localhost:5000/).

## Running tests

This project contains unit tests and end to end tests using selenium web server. To run end to end test, you need
to start a selenium server first:

```sh
$ selenium-standalone start &
$ node tests/selenium/run.js
```

You can convert the html tests created in selenium IDE to javascript tests case using:

```sh
$ node tests/selenium/convert.js
```

## To do list

- keep track of wins for players
- play over internet
- add login
- refactor javascript to use backbone model
