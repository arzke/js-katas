# Getting started

## Install

Simply install npm packages with the following command:

```
npm install
```

## Run

You have to build files with webpack:

```
webpack
```

*Note that you can use the -w flag to enable the watcher.*

Then, simply run the bundle:

```
node bin/app.bundle.js
```

To run the unit tests:

```
mocha test/test.bundle.js
```
