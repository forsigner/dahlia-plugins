import { addBabelPlugin } from 'customize-cra'

const antd = (options?: any) => config => {
  const { style = true } = options || {}
  const newConfig = addBabelPlugin([
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style, // `style: true` 会加载 less 文件
    },
    'antd',
  ])(config)
  return newConfig
}

export default antd
