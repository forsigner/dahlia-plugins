# dahlia-webpack-override

[![npm](https://img.shields.io/npm/v/dahlia-webpack-override.svg)](https://www.npmjs.com/package/dahlia-webpack-override) [![Build Status](https://travis-ci.org/forsigner/dahlia-webpack-override.svg?branch=master)](https://travis-ci.org/forsigner/dahlia-webpack-override) [![Coverage Status](https://coveralls.io/repos/github/forsigner/dahlia-webpack-override/badge.svg?branch=master)](https://coveralls.io/github/forsigner/dahlia-webpack-override?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/dahlia-webpack-override.svg)](https://github.com/forsigner/dahlia-webpack-override/blob/master/LICENSE)

>

## Installation

```sh
yarn add dahlia-webpack-override dahlia-webpack-override-string dahlia-webpack-override-required dahlia-webpack-override-email
```

## Usage

```js
import { check } from 'dahlia-webpack-override'
import string from 'dahlia-webpack-override-string'
import required from ' check-required'
import email from ' check-email'

const result = check('test@test.com').pipe(
  string(),
  required('can not empty'),
  email('Email is invalid'),
)

console.log(result) // { ok: true }
```

## License

[MIT License](https://github.com/forsigner/dahlia-webpack-override/blob/master/LICENSE)
