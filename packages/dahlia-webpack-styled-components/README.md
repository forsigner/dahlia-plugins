# dahlia-webpack-styled-components

## Installation

```sh
yarn add dahlia-webpack-override dahlia-webpack-styled-components
```

## Usage

```js
const override = require('dahlia-webpack-override')
const styledComponents = require('dahlia-webpack-styled-components')

module.exports = {
  webpack(config, env) {
    return override(config, env).pipe(
      styledComponents()
    )
  },
}

```

## License

[MIT License](https://github.com/forsigner/dahlia-webpack-override/blob/master/LICENSE)
