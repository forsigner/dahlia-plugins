# dahlia-webpack-antd

## Installation

```sh
yarn add dahlia-webpack-override dahlia-webpack-antd
```

## Usage

```js
const override = require('dahlia-webpack-override')
const antd = require('dahlia-webpack-antd')

module.exports = {
  webpack(config, env) {
    return override(config, env).pipe(antd())
  },
}
```

## Customize Ant Design Theme

to modify the default Ant Design theme:

```js
const override = require('dahlia-webpack-override')
const antd = require('dahlia-webpack-antd')
const less = require('dahlia-webpack-less')

module.exports = {
  webpack(config, env) {
    const newConfig = override(config, env).pipe(
      less({
        modifyVars: {
          'primary-color': 'black',
          'link-color': '#1DA57A',
          'border-radius-base': '10px',
        },
        javascriptEnabled: true,
      }),
      antd({
        style: true,
      }),
    )

    return newConfig
  },
}
```

## License

[MIT License](https://github.com/forsigner/dahlia-webpack-override/blob/master/LICENSE)
