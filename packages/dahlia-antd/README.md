# dahlia-antd

## Installation

```sh
yarn add dahlia-antd
```

## Usage

```js
import antd from 'dahlia-antd'

export default {
  plugins: [antd()],
}
```

## Customize Ant Design Theme

to modify the default Ant Design theme:

```js
import antd from 'dahlia-antd'
import less from 'dahlia-less'

export default {
  plugins: [
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
  ],
}
```

## License

[MIT License](https://github.com/forsigner/dahlia-plugins/blob/master/LICENSE)
