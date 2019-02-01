# dahlia-webpack-styled-jsx

## Installation

```sh
yarn add dahlia-webpack-override dahlia-webpack-styled-jsx
```

## Usage

```js
const override = require('dahlia-webpack-override')
const styledJsx = require('dahlia-webpack-styled-jsx')

module.exports = {
  webpack(config, env) {
    return override(config, env).pipe(
      styledJsx()
    )
  },
}

```

## License

[MIT License](https://github.com/forsigner/dahlia-webpack-override/blob/master/LICENSE)
