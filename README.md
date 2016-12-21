# Space Opera Node

Based on aqua. 
Implemented with Hapi, React and Flux.

## Technology

Server side, Aqua is built with the [hapi.js](https://hapijs.com/) framework
and toolset. We're using [MongoDB](http://www.mongodb.org/) as a data store. We
also use [Nodemailer](http://www.nodemailer.com/) for email transport.

The front-end is built with [React](http://facebook.github.io/react/). We're
using a totally vanilla [Flux](https://facebook.github.io/flux/)
implementation. Client side routing is done with [React
Router](https://github.com/rackt/react-router). We're using
[Gulp](http://gulpjs.com/) for the asset pipeline.


## Requirements

You need [Node.js](http://nodejs.org/download/) and
[MongoDB](http://www.mongodb.org/downloads) installed and running.

We use [`bcrypt`](https://github.com/ncb000gt/node.bcrypt.js) for hashing
secrets. If you have issues during installation related to `bcrypt` then [refer
to this wiki
page](https://github.com/jedireza/aqua/wiki/bcrypt-Installation-Trouble).


## Installation

```bash
$ npm install
```


## Setup

__WARNING:__ This will clear all data in existing `users`, `admins` and
`adminGroups` MongoDB collections. It will also overwrite `/config.js` if one
exists.

```bash
$ npm run setup
```


## Running the app

```bash
$ npm start
```

This will start the app using [`nodemon`](https://github.com/remy/nodemon).
`nodemon` will watch for changes and restart the app as needed.

Now you should be able to point your browser to http://localhost:8000/ and see
the welcome page.


## Running tests

[Lab](https://github.com/hapijs/lab) is part of the hapi.js toolset and what we
use to write all of our tests.

For command line output:

```bash
$ npm test
```

With html code coverage report:

```bash
$ npm run test-cover
```

This will run the tests and open a web browser to the visual code coverage
artifacts. The generated source can be found in `/tests/artifacts/coverage.html`.


## License

MIT

## if the mongo file lock gets stuck do
sudo chown -R `id -u` /data/db
