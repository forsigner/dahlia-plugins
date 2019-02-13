import { addBabelPlugin } from 'customize-cra'

const antdPro = (options?: any) => config => {
  const { style = true } = options
  const newConfig = addBabelPlugin([
    'import',
    {
      libraryName: 'ant-design-pro',
      libraryDirectory: 'lib',
      style,
      camel2DashComponentName: false,
    },
  ])(config)
  return newConfig
}

export default antdPro
