# dahlia-plugins

## 安装

```sh
yarn add dahlia-less dahlia-antd
```

## 用法

```js
import less from 'dahlia-less'
import antd from 'dahlia-antd'

export default {
  plugins: [
    less({
      modifyVars: {
        'primary-color': 'red',
        'link-color': '#1DA57A',
        'border-radius-base': '10px',
      },
      javascriptEnabled: true,
    }),
    antd(),
  ],
}
```

## 官方插件

- [dahlia-less](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-less)
- [dahlia-styled-components](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-styled-components)
- [dahlia-styled-jsx](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-styled-jsx)
- [dahlia-alias](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-alias)
- [dahlia-antd](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-antd)
- [dahlia-antd-pro](https://github.com/forsigner/dahlia-plugins/tree/master/packages/dahlia-antd-pro)

## License

[MIT License](https://github.com/forsigner/dahlia-plugins/blob/master/LICENSE)
