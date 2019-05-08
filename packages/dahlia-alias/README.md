# dahlia-alias

## Installation

```sh
yarn add dahlia-alias
```

## Usage

```js
import alias from 'dahlia-alias'
import { join } from 'path'

export default {
  plugins: [
    alias({
      '@components': join(__dirname, 'src/components'),
    }),
  ],
}
```

## License

[MIT License](https://github.com/forsigner/dahlia-plugins/blob/master/LICENSE)
