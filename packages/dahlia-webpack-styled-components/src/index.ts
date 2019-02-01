import { addBabelPlugin } from 'customize-cra'

const styledComponents = (options?: any) => (config, env) => {
  if (env !== 'development') {
    return config
  }

  const plugin = ['babel-plugin-styled-components', options]
  const newConfig = addBabelPlugin(plugin)(config)
  return newConfig
}

export default styledComponents
