# Julia's Project

An open source web page application that I am developing for fun. Hopefully others can
find something interesting here.


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ npm install
$ npm start
```

## Running as developer

If you plan to do some development project and run tests, you need to install devDependencies:

``
$ npm install --dev
$ npm install selenium-standalone@latest -g
$ selenium-standalone install
````

The app should now be running on [localhost:5000](http://localhost:5000/).

## Running tests

This project contains unit tests and end to end tests using selenium web server.

```sh
$ selenium-standalone start &
$ node tests/selenium/run.js
```

You can convert the html tests created in selenium IDE to javascript tests case using:

```sh
$ node tests/selenium/convert.js
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
