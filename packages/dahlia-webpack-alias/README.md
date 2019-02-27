# dahlia-webpack-alias

## Installation

```sh
yarn add dahlia-webpack-override dahlia-webpack-alias
```

## Usage

```js
const override = require('dahlia-webpack-override')
const alias = require('dahlia-webpack-alias')
const { join } = require('path')

module.exports = {
  webpack(config, env) {
    return override(config, env).pipe(
      alias({
        '@components': join(__dirname, 'src/components'),
      }),
    )
  },
}
```

## License

[MIT License](https://github.com/forsigner/dahlia-webpack-override/blob/master/LICENSE)
