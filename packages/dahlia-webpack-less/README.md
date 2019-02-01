# dahlia-webpack-less

## Installation

```sh
yarn add dahlia-webpack-override dahlia-webpack-less
```

## Usage

```js
const override = require('dahlia-webpack-override')
const less = require('dahlia-webpack-less')

module.exports = {
  webpack(config, env) {
    return override(config, env).pipe(
      less(),
    )
  },
}

```

## License

[MIT License](https://github.com/forsigner/dahlia-webpack-override/blob/master/LICENSE)
