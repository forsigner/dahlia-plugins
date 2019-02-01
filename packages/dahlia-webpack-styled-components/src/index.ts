import { addBabelPlugin } from 'customize-cra'

const styledComponents = () => (config, env) => {
  if (env !== 'development') {
    return config
  }
  const newConfig = addBabelPlugin('babel-plugin-styled-components')(config)
  return newConfig
}

export default styledComponents
