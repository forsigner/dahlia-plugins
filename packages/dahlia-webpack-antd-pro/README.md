# dahlia-webpack-antd-pro

## Installation

```sh
yarn add dahlia-webpack-override dahlia-webpack-antd dahlia-webpack-antd-pro
```

## Usage

```js
const override = require('dahlia-webpack-override')
const antd = require('dahlia-webpack-antd')
const antdPro = require('dahlia-webpack-antd-pro')

module.exports = {
  webpack(config, env) {
    return override(config, env).pipe(
      antd(),
      antdPro(),
    )
  },
}
```

## License

[MIT License](https://github.com/forsigner/dahlia-webpack-override/blob/master/LICENSE)
