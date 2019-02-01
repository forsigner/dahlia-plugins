# dahlia-webpack-override-email

## Installation

```sh
yarn add dahlia-webpack-override dahlia-webpack-override-email
```

## Usage

```js
import { check } from 'dahlia-webpack-override'
import email from 'dahlia-webpack-override-email'

const result = check('foo').pipe(email('should be a email'))

console.log(result) // { ok: false, message: 'should be a email' }
```

## License

[MIT License](https://github.com/forsigner/dahlia-webpack-override/blob/master/LICENSE)
