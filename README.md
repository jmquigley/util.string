# util.string

> Library of string helper functions

[![build](https://github.com/jmquigley/util.string/workflows/build/badge.svg)](https://github.com/jmquigley/util.string/actions)
[![analysis](https://img.shields.io/badge/analysis-tslint-9cf.svg)](https://palantir.github.io/tslint/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![testing](https://img.shields.io/badge/testing-jest-blue.svg)](https://facebook.github.io/jest/)
[![NPM](https://img.shields.io/npm/v/util.string.svg)](https://www.npmjs.com/package/util.string)


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add util.string
```

To build the app and run all tests:
```
$ yarn run all
```


## Overview
This module contains custom string functions that are not part of the current javascript string library.


## API

#### functions

- [capitalize](docs/index.md#capitalize)
- [hashCode](docs/index.md#hashCode)
- [join](docs/index.md#join)
- [parseList](docs/index.md#parseList)
- [regexIndexOf](docs/index.md#regexIndexOf)
- [rstrip](docs/index.md#rstrip)
- [splitInTwo](docs/index.md#splitInTwo)
- [splitNL](docs/index.md#translateHTML)
- [trim](docs/index.md#trim)

These functions, with the exception of join, are also [monkey patched](https://en.wikipedia.org/wiki/Monkey_patch) in the `String.prototype`, so they have a `.{function}` equivalent on strings.
